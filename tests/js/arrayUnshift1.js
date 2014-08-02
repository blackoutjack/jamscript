// Testcase for array.unshift
function pol(tx) {
  // This should be then length of the original array.
  print(len); // 5
  // This should be the original array.
  print(a); // 3, 4, 5, 6, 7
  JAM.process(tx);
  // This should be the new length.
  print(len); // 7
  // The array should show the new elements prepended.
  print(a); // "A", "B", 3, 4, 5, 6, 7
}
var a = new Array(3, 4, 5, 6, 7);
var len = a.length;
introspect(pol) {
  len = a.unshift("A", "B");
}
