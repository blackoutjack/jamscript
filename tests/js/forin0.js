var a = { p1: 1, p2: 2, p3: 3, p4: 4 };
introspect(JAM.process) {
  for (var p in a) {
    print(p + ": " + a[p]);
  }
}

