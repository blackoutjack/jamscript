// Testcase for the write set induced by array.sort.
function pol(tx) {
  var ws = tx.getWriteSequence();
  // This should print the new value for each array index, and the
  // return value.
  for (var i=0; i<ws.length; i++) {
    print(i + ": " + ws[i].obj + " / " + ws[i].id + " / " + ws[i].value);
  }
  JAM.process(tx);
}
var a = new Array("B", "D", "A", "C");
introspect(pol) {
  var b = a.sort();
}
print("a: " + a);
print("b: " + b);
