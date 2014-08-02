var a = 1;
function f() {
  introspect(JAM.process) {
    a *= 5;
  }
}
introspect(JAM.process) {
  a *= 3;
  f();
}
print("a: " + a);
