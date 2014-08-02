// Testcase for array.splice
function pol(tx) {
  // This should be undefined currently.
  print(rem); // undefined
  // This should be the original array.
  print(a); // 1, 2, 3, 4, 5, 6, 7
  JAM.process(tx);
  // This should be an array listing the removed items.
  print(rem); // 3, 4, 5
  // The array should have new elements in place of the removed ones.
  print(a); // 1, 2, "X", "Y", "Z", 6, 7
}
var a = new Array(1, 2, 3, 4, 5, 6, 7);
var rem;
introspect(pol) {
  rem = a.splice(2, 3, "X", "Y", "Z");
}
