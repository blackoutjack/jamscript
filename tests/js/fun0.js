function pol(tx) {
  print("x = " + x);
  tx.commit();
  print("x = " + x);
}
function f() {
  x = 3;
}
var x = 2;
introspect(pol) {
  f();
}
