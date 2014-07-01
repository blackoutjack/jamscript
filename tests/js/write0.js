function pol(tx) {
  print(x);
  tx.commit();
  print(x);
}
var x = 1;
introspect(pol) {
  x = 2;
}
