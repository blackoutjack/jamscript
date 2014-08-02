// This file contains utility methods for debugging. To use it, you
// must first comment out the |Object.freeze| of the JAM object
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

// Override some methods to bypass protection for debugging.
JAM.newOrig = JAM.new;
JAM.new = function(c, args, ispect) {
  if (BYPASS_NEW) {
    return JAM.newApply(c, args);
  }

  return JAM.newOrig(c, args, ispect);
};

JAM.callOrig = JAM.call;
JAM.call = function(f, rec, args, ispect) {
  if (BYPASS_CALL) {
    return f.apply(rec, args);
  }
  return JAM.callOrig(f, rec, args, ispect);
};

JAM.setOrig = JAM.set;
JAM.set = function(obj, memb, val, ispect) {
  if (BYPASS_SET) {
    return obj[memb] = val;
  }
  return JAM.setOrig(obj, memb, val, ispect);
}

JAM.wrapHTMLEventScriptOrig = JAM.wrapHTMLEventScript;
JAM.wrapHTMLEventScript = function(elt, html) {
  if (BYPASS_WRAP_HTML_EVENT) {
    return html;
  }
  return JAM.wrapHTMLEventScriptOrig(elt, html);
}

JAM.commitSuspendOrig = JAM.commitSuspend;
JAM.commitSuspend = function(tx) {
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
  return JAM.commitSuspendOrig(tx);
}

Object.freeze(JAM);
