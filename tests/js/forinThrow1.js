function pol(tx) {
  print("handler called");
  tx.commit();
  if (tx.isSuspended()) {
    print("tx is suspended");
    JAMScript.performAction(tx);
  }
}
function f() {
  try {
    for (var p in a) {
      introspect(pol) {
        a[p] = a[p]("ok;", p);
      }
    }
  } catch (ex) {
    print(ex);
  }
}
function concat(s1, s2) {
  return s1 + s2;
}
var a = { p1: concat, p2: concat, p3: 0, p4: concat };
f();
for (var p in a) {
  print(a[p]);
}

