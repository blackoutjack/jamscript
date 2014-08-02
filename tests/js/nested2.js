var a = 1;
introspect(JAM.process) {
  a *= 3;
  introspect(JAM.process) {
    a *= 5;
  }
}
print("a: " + a);
