function c1() {
  function f1() {
    function f2(o) {
      // Function f2 should have its own this (which defaults to the
      // global object).
      return this.p1;
    }
    return f2();
  }
  return { p1: "INNER", m1: f1 };
}
var p1 = "GLOB";

introspect (JAM.process) {
  var o1 = c1();
  print("o1.m1(): " + o1.m1()); // o1.m1(): GLOB
}

