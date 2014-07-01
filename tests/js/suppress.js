function pol(tx) {
  tx.suppress().commit();
}
var a = 2;
introspect(pol) {
  a = 5;
}
print(a);
