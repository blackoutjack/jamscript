function f() {
  var a;
  a = 2;
  g = a;
}
var g;
introspect(JAM.process) {
  f();
}
print("g: " + g);
