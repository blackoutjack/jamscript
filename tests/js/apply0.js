function pol(tx) {
  tx.commit();
  if (tx.isSuspended()) {
    var sx = tx.getSuspendInfo();
    var fun = sx.value;
    var argv = sx.args;
    tx.setRetval(fun(argv[0]));
  }
}
introspect(pol) {
  print("zeroeth");
  print.apply(undefined, new Array("first"));
  print("second");
}
print("done");
