function f() {
  var v;
  for (var i=0; i<10; i++) {
    v = i;
    if (i == 9) {
      v = "ok";
    }
  }
  var c = 3 + v;
  print(c);
}
introspect(JAM.process) {
  f();
}
