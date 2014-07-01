function pol(tx) {
  print("1: " + a);
  tx.commit();
  print("2: " + a);
}
var a = new Array();
var i = 0;
var j = 1;
introspect(pol) {
  a[i] = i;
  a[j] = j;
};
