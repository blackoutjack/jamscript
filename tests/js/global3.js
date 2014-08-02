function pol(tx) {
  var rs = tx.getReadSequence();
  for (var i=0; i<rs.length; i++) {
    var node = rs[i];
    print("obj: " + node.obj + " id: " + node.id);
  }
  JAM.process(tx);
  return true;
}
function v1(MH) {
  var s = "eval";
  introspect(pol) {
    var v = MH[s]
  }
}
v1(this);
