function f() {
  print("0: " + a); // 0: 0
  introspect(JAM.process) {
    a = 5;
  }
  print("1: " + a); // 1: 5
  a = 6;
  print("2: " + a); // 2: 6
}
var a = 0;
introspect(JAM.process) {
  f();
  print("3: " + a); // 3: 6
}
print("4: " + a); // 4: 6
