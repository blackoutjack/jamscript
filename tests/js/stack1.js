// This is just a variation on stack0.js that seems reasonable to test.
function f3(o) {
  print(o);
}
function f2(a) {
  var b;
  var c;
  var d;
  var e = "hello";
  return e;
}
introspect(JAMScript.process) {
  var v = f2();
  f3(v);
};
