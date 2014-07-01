function pol(tx) {
  print(a);
  print(b);
  tx.commit();
  print(b);
}
var a = 4;
introspect(pol) {
  var b = 5;
}
