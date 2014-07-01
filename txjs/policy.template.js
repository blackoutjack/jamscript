// The following is a template for a policy.
// It defines the methods used to monitor the policy. This global
// variable is only used once (when passed to the function that creates
// the JAMScript object) and then deleted, so the policy specification
// is protected from manipulation.
var policy = (function () {

  // This holds the policy states that have been visited during current
  // execution. The methods of the policy close over this array so that
  // it's protected from external manipulations. 
  var states = [0];

  // Any native functions/objects that the policy needs to reference
  // can be protected by closing over them here.
  var _Object = Object;
  // ...

  var demoReadCheck = function(tx) {
    /*
    var rs = tx.getReadSequence();
    for (var i=0; i<rs.length; i++) {
      ...
    }
    */
    return false;
  };

  var demoWriteCheck = function(tx) {
    /*
    var ws = tx.getWriteSequence();
    for (var i=0; i<ws.length; i++) {
      ...
    }
    if (tx.isSuspended()) {
      ...
    }
    */
    return false;
  };

  // Return the policy object itself.
  return {
    // Map introspectors to lists of policy transitions.
    introspectors: {
      // This only examines the read actions that have occurred during
      // the suspended/finished transaction.
      demoReadCheck: demoReadCheck,
      demoWriteCheck: demoWriteCheck,
    },
  };
}());

