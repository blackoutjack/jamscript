// Test the semantics of functions declared in a introspect.
function noop(tx) {
  tx.suppress();
}
introspect(noop) {
  var f = function() {
    print("In f");
  }
  f();
}
f();
