// Testcase for the read set induced by array.splice.
function pol(tx) {
  var rs = tx.getReadSequence();
  // This should print each index/value of the original array, since
  // these are read to be shifted right, as well as #Global.a and
  // a.unshift.
  for (var i=0; i<rs.length; i++) {
    print(i + ": " + rs[i].obj + " / " + rs[i].id + " / " + rs[i].value);
  }
  JAMScript.process(tx);
}
var a = new Array(3, 4);
introspect(pol) {
  var len = a.unshift("A", "B");
}
// This should print the array with the specified element prepended.
print(a);
