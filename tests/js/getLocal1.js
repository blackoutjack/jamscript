var g;
function f() {
  var a;
  introspect(JAM.process) {
    a = 1;
  }
  introspect(JAM.process) {
    g = a;
  }
}
f();
print("g: " + g);
