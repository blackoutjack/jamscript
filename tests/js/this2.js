function c1() {
  function f1() {
    return this.p1;
  }
  return { p1: 8, m1: f1 };
}

function c2(o) {
  function f1() {
    return this.p1;
  }
  return { p1: 100, m1: f1, p2: o };
}

introspect (JAM.process) {
  var o1 = c1();
  print("o1.p1: " + o1.p1);
  var o2 = c2(o1);
  print("o2.p1: " + o2.p1);
  print("o2.p2.p1: " + o2.p2.p1);
}

