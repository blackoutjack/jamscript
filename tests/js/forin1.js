var a = { p1: 1, p2: 2, p3: 3, p4: 4 };
introspect(JAM.process) {
  a["p5"] = 5;
  for (var p in a) {
    print(p + ": " + a[p]);
  }
}

