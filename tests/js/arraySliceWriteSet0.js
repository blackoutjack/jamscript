// Testcase for the write set induced by array.slice
function pol(tx) {
  var ws = tx.getWriteSequence();
  // This should print each index/value in the extracted array, and
  // #Global.slc.
  for (var i=0; i<ws.length; i++) {
    print(i + ": " + ws[i].obj + " / " + ws[i].id + " / " + ws[i].value);
    // This should remain zero until the tx is committed.
    print("len: " + ws[i].obj.length);
  }
  JAMScript.process(tx);
  // The original array is unchanged.
  print(a); // 1, 2, 3, 4, 5, 6, 7
  // And the extracted array is returned.
  print(slc); // 4, 5
}
var a = new Array(1, 2, 3, 4, 5, 6, 7);
introspect(pol) {
  var slc = a.slice(-4, 6);
}

