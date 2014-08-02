// Testcase for array.slice
var a = new Array("A", "B", "C", "D");
introspect(JAM.process) {
  var j = a.join();
}
// The original array is unchanged.
print(a); // A,B,C,D
// Prints a string joined by commas (default separator)
print(j); // A,B,C,D

