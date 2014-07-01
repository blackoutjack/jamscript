// Testcase for object literals
function pol(tx) {
  print(a); // undefined
  tx.commit();
  for (var p in a) {
    print("a[" + p + "]: " + a[p]);
  }
}

var a = undefined;
introspect(pol) {
  a = { p1: 1, p2: 2, p3: 3 };
}
