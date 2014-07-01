function pol(tx) {
  tx.suppress();
}
var a = 1;
function f() {
  for (var i=0; i<5; i++) {
    a *= 2;
    introspect(pol) {
      if (i > 2) {
        break;
      }
      a *= 3;
    };
  }
  // Not printing anything here indicates that the introspect was
  // never exited.
  print("a: " + a); // a: 16
}
f();
