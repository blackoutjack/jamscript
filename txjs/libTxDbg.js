// This file contains utility methods for debugging. To use it, you
// must first comment out the |Object.freeze| of the JAMScript object
// in libTx.js. Then include this file in the HTML after that one.

// Configuration options for debugging.
const BYPASS_BIND = false;
const BYPASS_CALL = false;
const BYPASS_CALLINTROSPECT = false;
const BYPASS_NEWINTROSPECT = false;
const BYPASS_NEW = false;
const BYPASS_SET = false;
const BYPASS_WRAP_HTML_EVENT = false;
const BYPASS_PERFORM = false;

// Allow testing scripts with |alert| in the JS shell.
if (typeof alert === "undefined" && typeof print === "function") {
  alert = print;
}

// Additional methods useful for debugging.
JAMScript.dump = function(obj, depth) {
  if (typeof obj !== "object" && typeof obj !== "function") {
    // Just print a primitive as is.
    alert(obj);
    return;
  }
  if (typeof depth == "undefined") {
    // Default value for prototype depth.
    depth = 1;
  }

  //var str = "";
  //for (var p in obj) {
  //  var v = obj[p];
  //  str += p + ": " + v + "\n";
  //}
  //alert(str);
  alert(Object.getOwnPropertyNames(obj));
  if (depth > 0 && obj.__proto__) {
    // Recurse up the prototype chain.
    this.dump(obj.__proto__, depth - 1);
  }
};

// %%% Maybe make |TxAction.prototype.toString()| do this or similar.
JAMScript.rwsetToString = function(rwset) {
  var str = "";
  for (var i=0; i<rwset.length; i++) {
    str += i + ":\n";
    // %%% Explicitly enumerate rather than using for-in.
    for (var p in rwset[i]) {
      str += "\t" + p + ": " + rwset[i][p] + "\n";
    }
  }
  return str;
};


// Override some methods to bypass protection for debugging.
JAMScript.bindOrig = JAMScript.bind;
JAMScript.bind = function(f, args) {
  if (BYPASS_BIND) {
    return f.bind.apply(args);
  }
  return this.bindOrig(f, args);
};

JAMScript.newOrig = JAMScript.new;
JAMScript.new = function(c, args) {
  if (BYPASS_NEW) {
    // This is a tricky way to maintain the semantics of |new|.
    var cproxy = function(argArray) {
      return c.apply(this, argArray);
    }
    cproxy.prototype = c.prototype;

    return new cproxy(args);
  }

  return JAMScript.newOrig(c, args);
};

JAMScript.callOrig = JAMScript.call;
JAMScript.call = function(f, rec, args) {
  if (BYPASS_CALL) {
    return f.apply(rec, args);
  }
  return JAMScript.callOrig(f, rec, args);
};

JAMScript.callIntrospectOrig = JAMScript.callIntrospect;
JAMScript.callIntrospect = function(f, rec, args, ispect) {
  if (BYPASS_CALLINTROSPECT) {
    // %%% Closure-ize this.
    return f.apply(rec, args);
  }
  return JAMScript.callIntrospectOrig(f, rec, args, ispect);
};

JAMScript.newIntrospectOrig = JAMScript.newIntrospect;
JAMScript.newIntrospect = function(c, args, ispect) {
  if (BYPASS_NEWINTROSPECT) {
    return JAMScript.new(c, args);
  }
  return JAMScript.newIntrospectOrig(c, args, ispect);
};

JAMScript.setOrig = JAMScript.set;
JAMScript.set = function(obj, memb, val, ispect) {
  if (BYPASS_SET) {
    return obj[memb] = val;
  }
  return JAMScript.setOrig(obj, memb, val, ispect);
}

JAMScript.wrapHTMLEventScriptOrig = JAMScript.wrapHTMLEventScript;
JAMScript.wrapHTMLEventScript = function(elt, html) {
  if (BYPASS_WRAP_HTML_EVENT) {
    return html;
  }
  return JAMScript.wrapHTMLEventScriptOrig(elt, html);
}

JAMScript.performActionOrig = JAMScript.performAction;
JAMScript.performAction = function(tx) {
  if (BYPASS_PERFORM) {
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
      var writeValue = sx.value;
      obj[prop] = writeValue;
      tx.setRetval(writeValue);
      return;
    }
    if (type === "call") {
      // Get the function that triggered the suspend.
      var fun = sx.value;
      // And the arguments.
      var args = sx.args;
      var ret = fun.apply(obj, args);
      tx.setRetval(ret);
      return;
    }
  }
  return JAMScript.performActionOrig(tx);
}

Object.freeze(JAMScript);
