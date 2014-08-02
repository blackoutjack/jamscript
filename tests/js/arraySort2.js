// Testcase for array.sort
function pol(tx) {
  // This should be the original array.
  print(a); // B,D,A,C
  // The return value should be undefined at this point.
  print(b); // undefined
  JAM.process(tx);
  // The original array is sorted.
  print(a); // A,B,C,D
  // The return value is also the sorted array.
  print(b); // A,B,C,D
}
var a = new Array("B", "D", "A", "C");
introspect(pol) {
  var b = a.sort();
}

