function f() {
  return this.val;
}
var val = "GLOBAL";
var a = { val: "LOCAL" };
var fbound = f.bind(a);
var ret;
introspect(JAMScript.process) {
  ret = fbound();
}
print(ret); // LOCAL
