// Test the semantics of functions declared in a introspect.
introspect(JAM.process) {
  function f() {
    print("In f");
  }
  f();
}
f();
