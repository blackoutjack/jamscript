function pol(tx) {
  var bad = false;
  var cs = tx.getCallSequence();
  for (var i=0; i<cs.length; i++) {
    var node = cs[i];
    if (node.value === eval) {
      bad = true;
      break;
    }
  }
  if (bad) {
    print("Blocking call to eval");
  } else {
    print("Committing");
    tx.commit();
    if (tx.isSuspended()) {
      JAMScript.performAction(tx);
    }
  }
  tx.suppress();
}
var a = 0;
introspect(pol) {
  a = eval("5 + 6");
  var b = a;
}
print(a);
print(b);
