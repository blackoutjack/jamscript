// Testcase for the read set induced by array.splice.
function pol(tx) {
  var rs = tx.getReadSequence();
  // This should print #Global.a, a.concat, and #Global.b.
  for (var i=0; i<rs.length; i++) {
    print(i + ": " + rs[i].obj + " / " + rs[i].id + " / " + rs[i].value);
  }
  JAM.process(tx);
}
var a = new Array(1, 2, 3, 4);
var b = new Array(5, 6, 7);
introspect(pol) {
  var c = a.concat(b);
}
// This should be the concatenation of the two original arrays.
print(c);
