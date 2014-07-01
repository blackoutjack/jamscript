function pol(tx) {
  print("ok");
  JAMScript.process(tx);
}
var p = print;
function f(v) {
  p(v + " HACKED");
}
introspect(pol) {
  print = f;
}
print("ok");
