// Testcase for the read set induced by array.splice.
function pol(tx) {
  var rs = tx.getReadSequence();
  // This should print each index/value that was overwritten with the
  // splice, as well as #Global.a and a.splice.
  for (var i=0; i<rs.length; i++) {
    print(i + ": " + rs[i].obj + " / " + rs[i].id + " / " + rs[i].value);
  }
  JAMScript.process(tx);
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
