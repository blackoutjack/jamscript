var a = 1;
function f() {
  introspect(JAMScript.process) {
    a *= 5;
  }
}
introspect(JAMScript.process) {
  a *= 3;
  f();
}
print("a: " + a);
