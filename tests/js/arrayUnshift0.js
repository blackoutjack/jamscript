// Testcase for array.unshift
var a = new Array(3, 4, 5, 6, 7);
var len;
introspect(JAMScript.process) {
  len = a.unshift("A", "B");
}
// This should be the new length of the array.
print(len); // 7
// The array should have the new elements in place of the removed ones.
print(a); // "A", "B", 3, 4, 5, 6, 7
