// Test the semantics of functions declared in a introspect.
introspect(JAMScript.process) {
  function f() {
    print("In f");
  }
  f();
}
f();
