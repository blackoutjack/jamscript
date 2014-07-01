// Testcase for array.slice
var a = new Array(1, 2, 3, 4, 5, 6, 7);
introspect(JAMScript.process) {
  var slc = a.slice(2, 4);
}
// The original array is unchanged.
print(a); // 1, 2, 3, 4, 5, 6, 7
// The specified portion of the array is returned.
print(slc); // 3, 4

