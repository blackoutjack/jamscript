// Testcase for array.slice
function pol(tx) {
  // This should be the original array.
  print(a); // one,two,three,four
  // The return value should be undefined at this point.
  print(j); // undefined
  JAM.process(tx);
  // The original array is still unchanged.
  print(a); // one,two,three,four
  // The first time through (on the suspend), |j| is still undefined.
  // The 2nd time through, |j| will be set to an array joined by the
  // separator.
  print(j); // one?two?three?four
}
var a = new Array("one", "two", "three", "four");
introspect(pol) {
  var j = a.join("?");
}

