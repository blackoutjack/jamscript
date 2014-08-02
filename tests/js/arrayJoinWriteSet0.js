// Testcase for the write set induced by array.join
function pol(tx) {
  var ws = tx.getWriteSequence();
  // This should just print the return value |j|.
  for (var i=0; i<ws.length; i++) {
    print(i + ": " + ws[i].obj + " / " + ws[i].id + " / " + ws[i].value);
  }
  JAM.process(tx);
}
var a = new Array("one", "two", "three", "four");
var sep = " X ";
introspect(pol) {
  var j = a.join(sep);
}

