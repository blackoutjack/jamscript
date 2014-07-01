function f(a, b) {
  return this.val + a + b;
}

var o = { val: 5 };
var ret;
introspect(JAMScript.process) {
  ret = f.call(o, 2, 12);
}
print("ret: " + ret);
