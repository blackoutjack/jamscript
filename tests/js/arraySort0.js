// Testcase for array.sort
var a = new Array("B", "D", "A", "C");
introspect(JAM.process) {
  var b = a.sort();
}
// The original array is sorted.
print(a); // A,B,C,D
// The return value is also the sorted array.
print(b); // A,B,C,D


