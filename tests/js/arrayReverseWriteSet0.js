// Testcase for the write set induced by array.reverse
function pol(tx) {
  var ws = tx.getWriteSequence();
  // This should print each index/value in the reversed array (in an
  // order that converges on the center from the edges of the array),
  // followed by #Global.rev.
  for (var i=0; i<ws.length; i++) {
    print(i + ": " + ws[i].obj + " / " + ws[i].id + " / " + ws[i].value);
  }
  JAM.process(tx);
  // The array is reversed in place.
  print(rev); // "D", "C", "B", "A"
  // And a reference to the array is returned.
  print(a); // "D", "C", "B", "A"
}
var a = new Array("A", "B", "C", "D");
introspect(pol) {
  var rev = a.reverse();
}

