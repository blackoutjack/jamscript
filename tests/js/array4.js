function txProcess(tx) {
  print("1) a = " + a + ", i = " + i);
  tx.commit();
}
var a = -1;
var i = 0;
introspect(txProcess) {
  i = 1;
  a = i;
}
print("2) a = " + a + ", i = " + i);
