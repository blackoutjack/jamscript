// This testcase addresses a problem found in Secure Note.
function g() {
  function a() {
  }
  function f() {
    a.prototype = this;
    var c = new a;
    // Should print the value of this.p1.
    print(c.p1); // 5
  }
  var o = {m1:f, p1:5};
  return o;
}
var r = g();
introspect(JAMScript.process) {
  r.m1();
}
