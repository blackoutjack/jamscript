// Test the semantics of functions declared in a introspect.
function noop(tx) {
  tx.suppress();
}
introspect(noop) {
  function f() {
    print("In f");
  }
  f();
}
f();
