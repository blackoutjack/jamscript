// Testcase for array.reverse
var a = new Array(1, 2, 3, 4, 5, 6, 7);
introspect(JAM.process) {
  var rev = a.reverse();
}
// The array is reversed in place.
print(a); // 7, 6, 5, 4, 3, 2, 1
// And a reference to the array is returned.
print(rev); // 7, 6, 5, 4, 3, 2, 1

