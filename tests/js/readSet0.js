function pol(tx) {
  var rs = tx.getReadSequence();
  for (var i in rs) {
    var name = rs[i].id;
    print("read: " + name);
  }
  tx.commit();
  if (tx.isSuspended()) {
    JAMScript.performAction(tx, "", "tx");
  }
  tx.suppress();
}
var y = 2;
introspect(pol) {
  print(y);
}
