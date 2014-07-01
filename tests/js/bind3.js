function noop() { }
function f() {
  return this.val;
}
var val = "GLOBAL";
var a = { val: "LOCAL" };
var fbound = f.bind(a);
var ret;
introspect(noop) {
  ret = fbound();
}
print(ret); // undefined
