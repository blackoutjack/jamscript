function f() {
  return this.val;
}
var val = "GLOBAL";
var a = { val: "LOCAL" };
var ret;
introspect(JAM.process) {
  var fbound = f.bind(a);
  ret = fbound();
}
print(ret); // LOCAL

