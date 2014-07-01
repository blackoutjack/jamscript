// Testcase for the read set induced by array.slice
function pol(tx) {
  var rs = tx.getReadSequence();
  // This should print each index/value in the original array that was
  // extracted, after #Global.a and a.slice.
  for (var i=0; i<rs.length; i++) {
    print(i + ": " + rs[i].obj + " / " + rs[i].id + " / " + rs[i].value);
  }
  JAMScript.process(tx);
}
var a = new Array(1, 2, 3, 4, 5, 6, 7);
introspect(pol) {
  var slc = a.slice(2, 4);
}

