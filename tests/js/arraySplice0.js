// Testcase for array.splice
var a = new Array(1, 2, 3, 4, 5, 6, 7);
var rem;
introspect(JAMScript.process) {
  rem = a.splice(2, 3, "X", "Y", "Z");
}
// This should be an array with the removed items.
print(rem); // 3, 4, 5
// The array should have the new elements in place of the removed ones.
print(a); // 1, 2, "X", "Y", "Z", 6, 7
