// Testcase for array.sort with a reversing comparator function.
function comp(v1, v2) {
  return -v1.toString().localeCompare(v2);
}
var a = new Array("B", "D", "A", "C");
introspect(JAM.process) {
  var b = a.sort(comp);
}
// The original array is sorted in reverse order.
print(a); // D,C,B,A
// The return value is also the sorted array.
print(b); // D,C,B,A



