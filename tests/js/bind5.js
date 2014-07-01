function noop() {}
function f() {
  return this.val;
}
var val = "GLOBAL";
var a = { val: "LOCAL" };
var ret;
var fbound;
introspect(noop) {
  fbound = f.bind(a);
}
print(fbound); // undefined

