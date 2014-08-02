// Testcase for array.slice
function pol(tx) {
  // This should be the original array.
  print(a); // 1, 2, 3, 4, 5, 6, 7
  // The return value should be undefined at this point.
  print(slc); // undefined
  JAM.process(tx);
  // The original array is still unchanged.
  print(a); // 1, 2, 3, 4, 5, 6, 7
  // The specified portion of the array is returned.
  print(slc); // 3, 4, 5
}
// Testcase for array.slice
var a = new Array(1, 2, 3, 4, 5, 6, 7);
introspect(pol) {
  var slc = a.slice(2, -2);
}
