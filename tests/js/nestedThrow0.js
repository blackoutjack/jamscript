var a = 1;
try {
  introspect(JAMScript.process) {
    a *= 3;
    introspect(XXX.notafunc) {
      a *= 5;
    }
  }
  print("1) a: " + a); // should not be reached
} catch (ex) {
  print("caught"); // should print
}
print("2) a: " + a); // a: 3
