function concat(s1, s2) {
  return s1 + s2;
}
function f() {
  a.p4 = concat;
  try {
    for (var p in a) {
      a[p] = a[p]("ok", p);
    }
  } catch (ex) {
    print(ex);
  }
}
var a = { p1: concat, p2: concat, p3: 0 };
introspect(JAM.process) {
  f();
}
for (var p in a) {
  print(a[p]);
}
