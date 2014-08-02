function nocommit(tx) {
  if (tx.isSuspended()) {
    // This will just commit the first suspend of |f.bind|.
    JAM.process(tx);
  }
}
function f() {
  return this.val;
}
var val = "GLOBAL";
var a = { val: "LOCAL" };
var ret;
introspect(nocommit) {
  var fbound = f.bind(a);
  ret = fbound();
}
print(ret); // undefined

