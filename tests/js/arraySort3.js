// Testcase for the read set induced by array.sort
function pol(tx) {
  JAM.process(tx);
}
function comp(v1, v2) {
  return -v1.toString().localeCompare(v2);
}
var a = new Array("B", "D", "A", "C");
introspect(pol) {
  var b = a.sort(comp);
}
print("a: " + a);
print("b: " + b);

