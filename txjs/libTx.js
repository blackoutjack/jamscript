// We assume that first, some policy.js has been included in a script
// tag in the HTML page, and then this file, followed by all others.

const PERFORMANCE_TESTING = true;

// If no policy is provided, use a default. It either allows or
// disallows everything, based on DEFAULT_ALLOW.
if (typeof policy !== "object") {
  const DEFAULT_ALLOW = true;
  // See file txjs/policy.template.js for documentation of the format
  // of policy objects.
  function process(tx) {
    if (DEFAULT_ALLOW) {
      JAMScript.process(tx);
    } else {
      JAMScript.prevent(tx);
    }
  }
  var policy = (function () {
    return { introspectors: { processAll: process } };
  }());
}

// Define the JAMScript property to be read-only.
Object.defineProperty(this, 'JAMScript', { 'value': (function(pol) {

  // Close over some native values and objects that may be needed.
  var _undefined = undefined;
  var _eval = eval;
  var _Function = Function;
  var _bind = Function.prototype.bind;
  var _apply = Function.prototype.apply;
  var _call = Function.prototype.call;
  var _bind_apply = _apply.bind(_bind);
  var _apply_apply = _apply.bind(_apply);
  var _Array_slice = Array.slice;

  if (typeof Object.prototype.__defineGetter__ !== "undefined")
    var ___defineGetter__ = Object.prototype.__defineGetter__;
  if (typeof Object.prototype.__defineSetter__ !== "undefined")
    var ___defineSetter__ = Object.prototype.__defineSetter__;
  if (typeof Object.defineProperty !== "undefined")
    var _defineProperty = Object.defineProperty;
  if (typeof setTimeout !== "undefined")
    var _setTimeout = setTimeout;
  if (typeof setInterval !== "undefined")
    var _setInterval = setInterval;

  if (typeof document === "object") {
    // Close over |document| methods needed by instrumentation.

    // These are to test for equality.
    var _document = document;
    var _document_write = document.write;
    var _document_writeln = document.writeln;

    // These are to call for effect from within methods.
    var _document_getElementById = document.getElementById.bind(_document);
    var _document_createElement = document.createElement.bind(_document);

    var _HTMLScriptElement = _document_createElement('script').constructor;
    var _HTMLIFrameElement = _document_createElement('iframe').constructor;

    // Dynamically wrap various properties of DOM nodes.
  }

  if (typeof console === "object")
    var _console = console;
  if (typeof alert === "function")
    var _alert = alert;

  function recursiveWrap(frag) {
    var children = frag.childNodes;
    for (var i=0; i<children.length; i++) {
      var c = children.item(i);
      if (c.tagName == "SCRIPT") {
        c.innerHTML = "introspect(JAMScript.introspectors.processAll) { " + c.innerHTML + " }";
      }
      // Find all "on..." attributes.
      if (c.attributes) {
        for (var a=0; a<c.attributes.length; a++) { 
          var attr = c.attributes[a];
          if (attr.localName.startsWith("on")) {
            attr.value = "introspect(JAMScript.introspectors.processAll) { " + attr.value + " }";
          }
        }
      }
      recursiveWrap(c);
    }
  }

  return {
    introspectors: pol.introspectors,

    process: function(tx) {
      tx.commit();
      if (tx.isSuspended()) {
        JAMScript.performAction(tx);
        // Clear all the reads and writes. This is only needed if the
        // transaction is suspended, since not commiting at the
        // end of a transaction effectively suppresses.
        tx.suppress();
      }
    },

    // Generate an exception to prevent policy violation.
    prevent: function(tx) {
      tx.suppress();
      JAMScript.violation();
    },

    violation: function() {
      console.trace();
      var msg = "JAMScript prevented a policy violation";
      JAMScript.log(msg);
      throw new Error(msg);
    },

    isEval: function(e) {
      return e === _eval;
    },

    // Write the message to the log (for debugging/notification).
    log: function(message) {
      var logElt;
      if (_document_getElementById && (logElt = _document_getElementById("log"))) {
        logElt.textContent += "\n" + message;
      } else if (_console) {
        _console.log(message);
      } else if (_alert) {
        print(message);
      }
    },

    // Wrap the given function |fn| in a transaction and an outer
    // function. In this way, when untrusted guest code that registers
    // event introspectors we can innocculate that also.
    //
    // given:
    //   ispect  An introspector to apply
    //   fn  A function to wrap in a transaction
    //   norec  Flag to not include |this| as receiver.
    // return:
    //   The wrapper function, that when called, initiates a transaction
    //     and then calls the original |fn|.
    wrapFunction: function(hdlr, fn, norec) {
      // %%% Want to provide the event object to the transaction somehow?
      // %%% Then add a parameter |ev| to the function defined here.
      var txfn = function () {
        // |this| will typically be the event target.
        var rec = norec ? null : this;
        // |arguments| will be whatever arguments are provided to |txfn|
        // when it is called. So if we're wrapping an event handler,
        // that will typically (%%% always?) be the event object.
        var args = _Array_slice(arguments, 0);
        var ret;
        introspect(hdlr) {
          ret = fn.apply(rec, args);
        }
        return ret;
      };
      return txfn;
    },

    wrapHTMLEventScript: function(elt, html) {
      if (elt instanceof HTMLElement) {
        var frag = _document_createElement(elt.tagName);
        frag.innerHTML = html;
        recursiveWrap(frag);
        var wrapped = frag.innerHTML;
      }
      return frag.innerHTML;
    },

    isNativeFunction: function(f) {
      // %%% Close over natives
      return !!f && (typeof f).toLowerCase() == 'function' 
        && (f === Function.prototype 
        || /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/i.test(String(f)));
    },

    bind: function(f, args) {
      // General notes:
      // * |HTMLElement.prototype.setAttribute| cannot be used to
      //   trigger parsing of |innerHTML|.

      var len = args.length;

      if (f === _bind) {
        // Prevent a sneaky script from calling |bind| to obscure the
        // identity of a policy-transitioning function prior to a call.
        f = null;
        if (len > 0) {
          f = args[0];
          args = _Array_slice(args, 1);
          var bound = JAMScript.bind(f, args);
          return function() { return bound; }
        }
      }
      if (f === _apply) {
        // Given that the call is now formatted as follows...
        // 
        //   JAMScript.bind(f.apply, [f, rec, args]);
        //
        // ...the original call was this:
        //
        //   f.apply(rec, args);
        // 
        // So for the logic below to evaluate what's actually being
        // called, we extract the function |f| and recreate the original
        // |args| array. Then recursively examine the result.
        f = args[0];
        if (len > 1) {
          if (len > 2) {
            // %%% Hackish.
            if ("" + args[2] === "[object Arguments]") {
              args[2] = _Array_slice(args[2], 0);
            }
            args = [args[1]].concat(args[2]);
          } else {
            args = [args[1]];
          }
          return JAMScript.bind(f, args);
        } else {
          return JAMScript.bind(f);
        }
      }
      if (f === _call) {
        // This is largely the same as for |apply|, but with a different
        // method of forming the new arguments.
        f = args[0];
        if (len > 1) {
          args = _Array_slice(args, 1);
          return JAMScript.bind(f, args);
        } else {
          return JAMScript.bind(f, []);
        }
      }

      var fname = f.name;

      // The first element of |args| is the object that we're binding
      // the function to. The rest are the arguments, which we may need
      // to sanitize for some cases.
      if (len > 1) {
        if (f === _eval) {
          // Assume this is an indirect |eval| because direct cases are
          // recognized statically and handled differently.
          // %%% The chokepoint doesn't cover |eval|.
          JAM.setDynamicIntrospector(JAMScript.introspectors.processAll);
          //args[1] = "introspect(JAMScript.introspectors.processAll) { " + args[1] + " };";
          var bound = _bind_apply(f, args);
          var ret = bound();
          JAM.setDynamicIntrospector();
          return function() { return ret; };
        } else if (f === _Function) {
          // The last argument is the function body. Any prior arguments
          // are the formals for the new function.
          args[len-1] = "introspect(JAMScript.introspectors.processAll) { " + args[len-1] + " };";
        } else if (f === _setTimeout || f === _setInterval) {
          if (typeof args[1] === "function") {
            if (JAMScript.isNativeFunction(args[1])) {
              // Wrap the native function in a comprehensive transaction.
              // %%% Test this
              args[1] = function(val) {
                introspect(JAMScript.introspectors.processAll) {
                  return args[1](val);
                }
              }
            }
          } else {
            args[1] = "introspect(JAMScript.introspectors.processAll) {" + args[1] + " };";
          }
        } else if (f === _document_write || f === _document_writeln
            || (fname === "appendChild" && args[0] instanceof Element)
            || (fname === "setAttributeNode" && args[0] instanceof Element)) {
          // %%% Test each of these cases.
          JAM.setDynamicIntrospector(JAMScript.introspectors.processAll);
          var bound = _bind_apply(f, args);
          var ret = bound();
          JAM.setDynamicIntrospector();
          return function() { return ret; };
        }

        if (len > 2) {
          if (f === ___defineGetter__ || f === ___defineSetter__) {
            // This should prevent a sneaky use of getters and setters to
            // subvert a policy. E.g. consider the following code w.r.t. the
            // policy predicate |x === 2|.
            //
            // o.__defineSetter__("prop", eval);
            // o.prop = "x = 2";
            if (JAMScript.isNativeFunction(args[2])) {
              //JAMScript.log("wrapping __define[G|S]etter__: " + args[1]);
              // Wrap the native function in a comprehensive transaction.
              args[2] = function(val) {
                introspect(JAMScript.introspectors.processAll) {
                  return args[2](val);
                }
              }
            }
            // User-defined functions (i.e. non-native ones) will already
            // be instrumented, so fall through.
          } else if (fname === "setAttribute" && args[0] instanceof Element) {
            // We check |name| because each subclass of |Element|
            // (i.e. |HTMLElement|, |HTMLImageElement|,
            // |HTMLInputElement|, etc) has a distinct |setAttribute|
            // method. The |name| property is read-only, so this is
            // safe.
            // %%% Less safe is relying on |instanceof|. Can the
            // %%% prototype chain be manipulated to subvert this?
            var attr = args[1].toString();
            
            if (attr === "src") {
              if (args[0] instanceof _HTMLScriptElement) {
                // %%% Test each of these cases.
                JAM.setDynamicIntrospector(JAMScript.introspectors.processAll);
                var bound = _bind_apply(f, args);
                var ret = bound();
                JAM.setDynamicIntrospector();
                return function() { return ret; };
              }
            } else if (attr.startsWith("on")) {
              // %%% Could implement case by case.
              var val = args[2].toString();
              args[2] = "introspect(JAMScript.introspectors.processAll) {" + val + "}";
            }
          }

          if (len > 2) {
            if (f === _defineProperty) {
              // The 3rd argument to Object.defineProperty is an object with
              // properties describing attributes of the new property. We
              // are interested in the |get| and |set| attributes.
              var o = args[3];
              if (typeof o === "object") {
                if (JAMScript.isNativeFunction(o.get)) {
                  //JAMScript.log("wrapping defineProperty (get)");
                  // Wrap the native function in a comprehensive transaction.
                  var getter = o.get;
                  o.get = function(val) {
                    introspect(JAMScript.introspectors.processAll) {
                      // %%% Need to bind to |o| or something similiar?
                      return getter(val);
                    }
                  }
                }
                if (JAMScript.isNativeFunction(o.set)) {
                  //JAMScript.log("wrapping defineProperty (set)");
                  // Wrap the native function in a comprehensive transaction.
                  var setter = o.set;
                  o.set = function(val) {
                    introspect(JAMScript.introspectors.processAll) {
                      return setter(val);
                    }
                  }
                }
              }
            }
          }
        }
      }

      return _bind_apply(f, args);
    },

    new: function(c, args) {
      // General notes:
      // * The receiver won't matter, so |args| only contains the
      //   original arguments.

      // This is a tricky way to maintain the semantics of |new|.
      var cproxy = function(argArray) {
        return c.apply(this, argArray);
      };
      cproxy.prototype = c.prototype;

      var len = args.length; 

      // The first element of |args| is the object that we're binding
      // the function to. The rest are the arguments, which we may need
      // to sanitize for some cases.
      if (len > 0) {
        if (c === _Function) {
          // The last argument is the function body. Any prior arguments
          // are the formals for the new function.
          args[len-1] = "introspect(JAMScript.introspectors.processAll) { " + args[len-1] + " };";
        }
      }

      return new cproxy(args);
    },

    call: function(f, rec, args) {
      // General notes:
      // * |HTMLElement.prototype.setAttribute| cannot be used to
      //   trigger parsing of |innerHTML|.

      var len = args.length;

      if (f === _bind) {
        // Prevent a sneaky script from calling |bind| to obscure the
        // identity of a policy-transitioning function prior to a call.
        f = null;
        if (len > 0) {
          var bound = JAMScript.bind(rec, args);
          // %%% Think about this more.
          // Return the bound function object.
          return bound;
        }
      }
      if (f === _apply) {
        // Given that the call is now formatted as follows...
        // 
        //   JAMScript.call(f.apply, f, [rec, args]);
        //
        // ...the original call was this:
        //
        //   f.apply(rec, args);
        // 
        // So for the logic below to evaluate what's actually being
        // called, we extract the function |f| and recreate the original
        // |args| array. Then recursively examine the result.
        f = rec;
        if (len > 0) {
          rec = args[0];
          if (len > 1) {
            args = args[1];
          } else {
            args = [];
          }
          return JAMScript.call(f, rec, args);
        } else {
          // Invoke the function only.
          return JAMScript.call(f, null, []);
        }
      }
      if (f === _call) {
        // %%% Test and examine this more.
        // This is largely the same as for |apply|, but with a different
        // method of forming the new arguments.
        f = rec;
        if (len > 0) {
          // This formulation plays nicer than using |_Array_slice|
          // to manipulate |args| when running in a nested transaction.
          //var bound = JAMScript.bind(f, args);
          //return bound();
          // %%% Figure out this problem with nesting.
          // %%% See adsense.transformed.js.
          rec = args[0];
          if (len > 1) {
            args = _Array_slice(args, 1);
            return JAMScript.call(f, rec, args);
          } else {
            return JAMScript.call(f, rec, []);
          }
        }
      }

      var fname = f.name;

      // The first element of |args| is the object that we're binding
      // the function to. The rest are the arguments, which we may need
      // to sanitize for some cases.
      if (len > 0) {
        if (f === _eval) {
          // Assume this is an indirect |eval| because direct cases are
          // recognized statically and handled differently.
          //args[0] = "introspect(JAMScript.process) { " + args[0] + " };";
          JAM.setDynamicIntrospector(JAMScript.introspectors.processAll);
          var ret = f.apply(rec, args);
          JAM.setDynamicIntrospector();
          return ret;
        } else if (f === _Function) {
          // The last argument is the function body. Any prior arguments
          // are the formals for the new function.
          args[len-1] = "introspect(JAMScript.introspectors.processAll) { " + args[len-1] + " };";
        } else if (f === _setTimeout || f === _setInterval) {
          if (typeof args[0] === "function") {
            if (JAMScript.isNativeFunction(args[1])) {
              // Wrap the native function in a comprehensive transaction.
              // %%% Test this
              args[0] = function(val) {
                introspect(JAMScript.introspectors.processAll) {
                  return args[0](val);
                }
              }
            }
          } else {
            args[0] = "introspect(JAMScript.introspectors.processAll) {" + args[0] + " };";
          }
        } else if (f === _document_write || f === _document_writeln
            || (fname === "appendChild" && rec instanceof Element)
            || (fname === "setAttributeNode" && rec instanceof Element)) {
          // %%% Test each of these cases.
          //JAMScript.log("1) f: " + f + " fname: " + fname + " rec: " + rec + " args: " + args);
          JAM.setDynamicIntrospector(JAMScript.introspectors.processAll);
          var ret = f.apply(rec, args);
          JAM.setDynamicIntrospector();
          return ret;
        }

        if (len > 1) {
          if (f === ___defineGetter__ || f === ___defineSetter__) {
            // This should prevent a sneaky use of getters and setters to
            // subvert a policy. E.g. consider the following code w.r.t. the
            // policy predicate |x === 2|.
            //
            // o.__defineSetter__("prop", eval);
            // o.prop = "x = 2";
            if (JAMScript.isNativeFunction(args[2])) {
              //JAMScript.log("wrapping __define[G|S]etter__: " + args[1]);
              // Wrap the native function in a comprehensive transaction.
              args[2] = function(val) {
                introspect(JAMScript.introspectors.processAll) {
                  return args[2](val);
                }
              }
            }
            // User-defined functions (i.e. non-native ones) will already
            // be instrumented, so fall through.
          } else if (fname === "setAttribute" && rec instanceof Element) {
            // We check |name| because each subclass of |Element|
            // (i.e. |HTMLElement|, |HTMLImageElement|,
            // |HTMLInputElement|, etc) has a distinct |setAttribute|
            // method. The |name| property is read-only, so this is
            // safe.
            // %%% Less safe is relying on |instanceof|. Can the
            // %%% prototype chain be manipulated to subvert this?
            var attr = args[0].toString();
            
            if (attr === "src") {
              if (rec instanceof _HTMLScriptElement) {
                //JAMScript.log("2) f: " + f + " fname: " + fname + " rec: " + rec + " args: " + args);
                JAM.setDynamicIntrospector(JAMScript.introspectors.processAll);
                var ret = f.apply(rec, args);
                JAM.setDynamicIntrospector();
                return ret;
              }
            } else if (attr === "data") {
              if (rec instanceof _HTMLObjectElement) {
                JAM.setDynamicIntrospector(JAMScript.introspectors.processAll);
                var ret = f.apply(rec, args);
                JAM.setDynamicIntrospector();
                return ret;
              }
            } else if (attr.startsWith("on")) {
              // %%% Could implement case by case.
              var val = args[1].toString();
              args[1] = "introspect(JAMScript.introspectors.processAll) {" + val + "}";
            }
          }

          if (len > 2) {
            if (f === _defineProperty) {
              // The 3rd argument to Object.defineProperty is an object with
              // properties describing attributes of the new property. We
              // are interested in the |get| and |set| attributes.
              var o = args[2];
              if (typeof o === "object") {
                if (JAMScript.isNativeFunction(o.get)) {
                  //JAMScript.log("wrapping defineProperty (get)");
                  // Wrap the native function in a comprehensive transaction.
                  var getter = o.get;
                  o.get = function(val) {
                    introspect(JAMScript.introspectors.processAll) {
                      // %%% Need to bind to |o| or something similiar?
                      return getter(val);
                    }
                  }
                }
                if (JAMScript.isNativeFunction(o.set)) {
                  //JAMScript.log("wrapping defineProperty (set)");
                  // Wrap the native function in a comprehensive transaction.
                  var setter = o.set;
                  o.set = function(val) {
                    introspect(JAMScript.introspectors.processAll) {
                      return setter(val);
                    }
                  }
                }
              }
            }
          }
        }
      }

      return f.apply(rec, args);
    },

    callIntrospect: function(f, rec, args, ispect) {
      var len = args.length;

      /*
      // %%% What here?
      if (f === _bind) {
        // Prevent a sneaky script from calling |bind| to obscure the
        // identity of a policy-transitioning function prior to a call.
        f = null;
        if (len > 0) {
          var bound = JAMScript.bind(rec, args);
          // %%% Think about this more.
          // Return the bound function object.
          return bound;
        }
      }
      */
      if (f === _apply) {
        // Given that the call is now formatted as follows...
        // 
        //   JAMScript.call(f.apply, f, [rec, args], ispect);
        //
        // ...the original call was this:
        //
        //   f.apply(rec, args);
        // 
        // So for the logic below to evaluate what's actually being
        // called, we extract the function |f| and recreate the original
        // |args| array. Then recursively examine the result.
        f = rec;
        if (len > 0) {
          rec = args[0];
          if (len > 1) {
            args = args[1];
          } else {
            args = [];
          }
          return JAMScript.callIntrospect(f, rec, args, ispect);
        } else {
          // Invoke the function only.
          return JAMScript.callIntrospect(f, null, [], ispect);
        }
      }
      if (f === _call) {
        // %%% Test and examine this more.
        // This is largely the same as for |apply|, but with a different
        // method of forming the new arguments.
        f = rec;
        if (len > 0) {
          // This formulation plays nicer than using |_Array_slice|
          // to manipulate |args| when running in a nested transaction.
          //var bound = JAMScript.bind(f, args);
          //return bound();
          // %%% Figure out this problem with nesting.
          // %%% See adsense.transformed.js.
          rec = args[0];
          if (len > 1) {
            args = _Array_slice(args, 1);
            return JAMScript.callIntrospect(f, rec, args, ispect);
          } else {
            return JAMScript.callIntrospect(f, rec, [], ispect);
          }
        }
      }

      var node = { type: "call", value: f, obj: rec, args: args, argc: args.length }
      if (ispect(node) || PERFORMANCE_TESTING) {
        return JAMScript.call(f, rec, args);
      } else {
        JAMScript.violation();
      }
    },
 
    newIntrospect: function(c, args, ispect) {
      var node = { type: "call", value: c, obj: rec, null: args, argc: args.length }
      if (ispect(node) || PERFORMANCE_TESTING) {
        return JAMScript.new(c, args);
      } else {
        JAMScript.violation();
      }
    },

    set: function(obj, memb, val, ispect) {
      // General notes:
      // * |Attr.nodeName| and |Attr.name| are both read-only.
      // * From https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement:
      //   ``Note: When inserted using the document.write() method,
      //     <script> elements execute (typically synchronously), but
      //     when inserted using innerHTML and outerHTML attributes,
      //     they do not execute at all.''
      //
      //   This does not prevent "on..." event handlers from being
      //   included and fired within HTML manipulation.
      // * Per mozilla-esr17/content/base/public/nsIScriptElement.h:
      //   ``when adding a src attribute to an element that already
      //     contains an inline script, the script referenced by the src
      //     attribute will not be loaded.''

      // %%% Need to be more general? |Node|, perhaps?
      if (obj instanceof HTMLElement) {
        if (memb === "outerHTML") {
          // Writing to |outerHTML| replaces the node altogether, so the
          // action is irrespective of the element type.
          val = JAMScript.wrapHTMLEventScript(obj, val);
        } else if (memb.startsWith("on")) {
          var typ = typeof val;
          if (typ === "function") {
            if (JAMScript.isNativeFunction(val)) {
              // This should be rare. The |this| value will be |obj|.
              // %%% Should |obj| be used instead of |this|?
              val = function () { introspect(JAMScript.introspectors.processAll) { val(this); } };
            }
          } else if (typ === "string") {
            val = "introspect(JAMScript.introspectors.processAll) { " + val + " }";
          }
        } else if (obj instanceof _HTMLScriptElement) {
          // The contents of script elements are directly interpreted.
          // I believe this should work with CDATA-enclosed text also,
          // since the CDATA tags have to be commented.
          if (memb === "innerHTML") {
            val = "introspect(JAMScript.introspectors.processAll) { " + val + " }";
          } else if (memb === "textContent") {
            val = "introspect(JAMScript.introspectors.processAll) { " + val + " }";
          }
        } else {
          if (memb === "innerHTML") {
            val = JAMScript.wrapHTMLEventScript(obj, val);
          }
          // No action needed for |textContent|.
        }
      }
      
      if (ispect === undefined) {
        return obj[memb] = val;
      } else {
        // %%% Seg. fault occurs when return is inside the transaction.
        var ret;
        introspect(ispect) {
          ret = obj[memb] = val;
        }
        return ret;
      }
    },

    performAction: function(tx) {

      // Get the cause of the suspend.
      var sx = tx.getSuspendInfo();
      if (!sx) return;

      var type = sx.type;

      // Get the receiver of the action.
      var obj = sx.obj;

      // Get the property name that was accessed.
      var prop = sx.id;
      // And additional information. This is the property name for
      // reads and writes, the function name for calls, and "forin"
      // for suspend on for-in loops, (done for techical reasons).
      var desc = sx.description;

      if (type === "write") {
        // Transaction suspensions caused by assignment to a property.
        var writeValue = sx.value;

        if (typeof prop === "string" && prop.startsWith("on")) {
          // Wrap event handlers in transaction blocks.
          writeValue = JAMScript.wrapFunction(tx.getHandler(), writeValue, false);
        } else if (prop === "innerHTML") {
          // Intervene for constructs that can generate dynamic code.
          if (obj instanceof _HTMLScriptElement) {
            writeValue = "introspect(JAMScript.introspectors.processAll) { " + writeValue + " };";
          } else {
            writeValue = JAMScript.wrapHTMLEventScript(obj, writeValue);
          }
        }
        obj[prop] = writeValue;

        // Set the return value.
        tx.setRetval(writeValue);

      } else if (type === "call") {
        // Transaction suspensions caused by call to a function.

        // Get the function that triggered the suspend.
        var fun = sx.value;
        // And the arguments.
        var args = sx.args;
        var len = args.length;

        var ret;
        switch (desc) {
          case "sort":
            // Array.prototype.sort may invoke a user-provided
            // comparison function.
            if (args.length >= 1) {
              args[0] = JAMScript.wrapFunction(tx.getHandler(), args[0], false);
            }
            ret = fun.apply(obj, args);
            break;
          case "addEventListener":
            // For |addEventListener|, the first argument is the type
            // of event and the second (index 1) is the event handler.
            // There may be optional further arguments.
            // %%% What if the second argument is an |EventListener|
            // %%% rather than a simple |Function|?
            args[1] = JAMScript.wrapFunction(tx.getHandler(), args[1], false);
            ret = fun.apply(obj, args);
            break;
          
          case "removeEventListener":
            // The second argument must specify the |Function| or
            // |EventListener| to remove, so we need to maintain a
            // mapping from the "original" functions to their
            // wrapped version. The latter is the value to pass as
            // second argument, if it exists in the mapping. If not,
            // use the passed argument (which should cover the case
            // in which the user retrieves the current event handler
            // and requests that it be removed, as opposed to
            // requesting that a reference to the original, unwrapped
            // function value be removed.
            // %%% Implement mapping described above.
            ret = fun.apply(obj, args);
            break;

          case "setTimeout":
          case "setInterval":
            // %%% Currently assumes args[0] is a function object
            args[0] = JAMScript.wrapFunction(tx.getHandler(), args[0], false);
            ret = fun.apply(obj, args);
            break;
                
          case "clearInterval":
            // %%% See comment for |removeEventListener|.
            ret = fun.apply(obj, args);
            break;

          case "Function":
            // %%% What happens in non-string cases?
            if (len > 0) {
              //args[len-1] = "introspect(JAMScript.introspectors.processAll) { " + args[len-1] + " };";
            }
            ret = fun.apply(obj, args);
            if (typeof ret === "function") {
              ret = JAMScript.wrapFunction(JAMScript.introspectors.processAll, ret, true)
            }
            break;
             
          case "eval":
            // Given that the callsite transformation will handle all
            // direct calls to |eval|, we can assume this is indirect.

            // Per MDN, SpiderMonkey no longer supports |eval| with
            // more than 1 argument.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
            JAM.setDynamicIntrospector(JAMScript.introspectors.processAll);
            ret = fun.apply(obj, args);
            JAM.setDynamicIntrospector();
            break;

          case "writeln":
          case "write":
            JAM.setDynamicIntrospector(JAMScript.introspectors.processAll);
            ret = fun.apply(obj, args);
            JAM.setDynamicIntrospector();
            break;

          case "appendChild":
          case "replaceChild":
          case "insertBefore":
            // For |appendChild|, |replaceChild| and |insertBefore|,
            // the first argument is the element to be inserted.
            JAM.setDynamicIntrospector(JAMScript.introspectors.processAll);
            ret = fun.apply(obj, args);
            JAM.setDynamicIntrospector();
            break;

          case "apply":
            // Pass through if this is the internal _bind_apply.
            if (fun === _apply) {
              fun = obj;
              obj = sx.argc > 0 ? args[0] : _undefined;
              args = sx.argc > 1 ? args[1] : _undefined;
            }
            ret = fun.apply(obj, args);
            break;

          case "call":      
            // %%% Not sure what code path this takes in the
            // %%% interpreter, so not sure of the reason why we
            // %%% would want to suspend on a call to |call|.
            fun = obj;
            obj = sx.argc > 0 ? args[0] : _undefined;
            args = sx.argc > 1 ? _Array_slice(args, 1) : _undefined;
            // Fall through

          default:
            ret = _apply_apply(fun, [obj, args]);
            break;
        }

        // Set the return value.
        tx.setRetval(ret);
      } else if (type === "forin") {
        // Transaction suspensions caused by entering a for-in loop.

        // Do nothing, we just rely on the commit to sync the state
        // of the transaction with the heap.
      } else if (type === "read") {
        // %%% May need to wrap a user-defined getter in a tx.
        var ret = obj[prop];
        //_console.log("ret: " + ret);
        tx.setRetval(ret);
      } else {
        // Other suspension types.
        // %%% May need to handle these in the future.
        alert("Unhandled suspend type: " + type);
      }

      return;
    },
  };

}(policy)) } );
if (PERFORMANCE_TESTING) {
  // Pass through violations for performance testing.
  JAMScript.prevent = JAMScript.process;
  // Override |alert| for convenience (and perf. testing).
  alert = JAMScript.log;
}

Object.freeze(JAMScript);
Object.freeze(JAMScript.introspectors);

// Prevent access to the policy except within the JAMScript object.
delete policy;
