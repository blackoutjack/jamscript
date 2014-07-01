function pol(tx) {
  print("1) " + a);
  tx.commit();
  if (tx.isSuspended()) {
    JAMScript.performAction(tx);
  }
  tx.suppress();
  print("2) " + a);
}
var a = 0;
introspect(pol) {
  eval("a = 1;");
}
print("final: " + a);
