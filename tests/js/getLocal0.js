function pol(tx) {

}
function f() {
  var a;
  var b;
  var c;
  // This introspection allows the write now since we no longer
  // record local reads/writes.
  introspect(pol) {
  a = 1;
  }
  b = 2;
  c = 3;
  print(a);
  print(b);
  print(c);
}
f();
