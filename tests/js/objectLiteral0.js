var a = undefined;
introspect(JAM.process) {
  a = { p1: 1, p2: 2, p3: 3 };
}
for (var p in a) {
  print("a[" + p + "]: " + a[p]);
}
