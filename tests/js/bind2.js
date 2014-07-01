function f() {
  return this.val;
}
var val = "GLOBAL";
var a = { val: "LOCAL" };
var ret;
var fbound;
introspect(JAMScript.process) {
  fbound = f.bind(a);
}
ret = fbound();
print(ret); // LOCAL

