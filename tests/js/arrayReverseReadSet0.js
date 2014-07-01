// Testcase for the read set induced by array.reverse
function pol(tx) {
  var rs = tx.getReadSequence();
  // This should print each index/value in the original array (in an
  // order that converges on the center from the edges of the array),
  // as well as #Global.a and a.reverse.
  for (var i=0; i<rs.length; i++) {
    print(i + ": " + rs[i].obj + " / " + rs[i].id + " / " + rs[i].value);
  }
  JAMScript.process(tx);
  // The array is reversed in place.
  print(rev); // "D", "C", "B", "A"
  // And a reference to the array is returned.
  print(a); // "D", "C", "B", "A"
}
var a = new Array("A", "B", "C", "D");
introspect(pol) {
  var rev = a.reverse();
}
