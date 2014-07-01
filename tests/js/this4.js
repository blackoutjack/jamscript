introspect(JAMScript.process) {
function c() {
  var v1 = new Array(10);
  this.a = v1;
  var v2 = new Array(11);
  this.b = v2;
  var arr = this.a;
  arr[5] = 5;
}
var o = new c();
}
print("Done: " + o.a + " / " + o.b);
