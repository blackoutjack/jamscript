// Testcase for the write set induced by array.splice.
function pol(tx) {
  var ws = tx.getWriteSequence();
  // This should print each index/value written into the array.
  for (var i=0; i<ws.length; i++) {
    print(i + ": " + ws[i].obj + " / " + ws[i].id + " / " + ws[i].value);
  }
  JAM.process(tx);
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
