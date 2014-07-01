var a = 1;
introspect(JAMScript.process) {
  a *= 3;
  introspect(JAMScript.process) {
    a *= 5;
  }
}
print("a: " + a);
