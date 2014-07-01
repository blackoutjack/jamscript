// Testcase for array.unshift
function pol(tx) {
  // This should be undefined at this point.
  print(rev); // undefined
  // This should be the original array.
  print(a); // 3, 4, 5, 6, 7
  JAMScript.process(tx);
  // The array is reversed in place.
  print(a); // 7, 6, 5, 4, 3
  // And a reference to the array is returned.
  print(rev); // 7, 6, 5, 4, 3
}
var a = new Array(3, 4, 5, 6, 7);
introspect(pol) {
  var rev = a.reverse();
}
