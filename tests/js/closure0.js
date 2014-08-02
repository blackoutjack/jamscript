introspect(JAM.process) {
function f() {
  var a = 2;
  var b = 3;
  return function() {
    return a + b;
  }
}
var g = f();
var v = g();
}
print(v);
