function pol(tx) {
  var bad = false;
  var ws = tx.getWriteSequence();
  for (var i=0; i<ws.length; i++) {
    var node = ws[i];
    if (node.id === "textContent") {
      bad = true;
      break;
    }
  }
  if (bad) {
    print("Blocking write to textContent");
  } else {
    print("Committing");
    tx.commit();
    if (tx.isSuspended()) {
      JAM.commitSuspend(tx);
    }
  }
  tx.suppress();
}
function f(val) {
  this.tc = val;
}
var o = new Object();
Object.defineProperty(o, "textContent", {'set': f});
introspect(pol) {
  o.textContent = "VALUE";
}
print(o.tc);
