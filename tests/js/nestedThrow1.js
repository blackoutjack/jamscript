var a = 1;
try {
  introspect(JAM.process) {
    a *= 3;
    a = XXX.notafunc;
  }
  print("1) a: " + a); // should not be reached
} catch (ex) {
  print("caught"); // should print
}
print("2) a: " + a); // a: 3
