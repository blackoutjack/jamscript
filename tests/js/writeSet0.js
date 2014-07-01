function pol(tx) {
  var ws = tx.getWriteSequence();
  for (var i in ws) {
    print(i + ": " + ws[i].id);
  }
}
var x = 1;
introspect(pol) {
  x = 2;
  y = 3;
}
