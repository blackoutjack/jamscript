// Test the semantics of functions declared in a introspect.
introspect(JAM.process) {
  var f = function() {
    print("In f");
  }
  f();
}
f();
