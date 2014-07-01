function f() {
  var a;
  a = 2;
  g = a;
}
var g;
introspect(JAMScript.process) {
  f();
}
print("g: " + g);
