var g;
function f() {
  var a;
  introspect(JAMScript.process) {
    a = 1;
  }
  introspect(JAMScript.process) {
    g = a;
  }
}
f();
print("g: " + g);
