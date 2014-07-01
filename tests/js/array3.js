function pol(tx) {
  print("1: " + a);
  tx.commit();
}
var a = new Array();
var n = 10;
var i = 0;
introspect(pol) {
  for (i=0; i<n; i++) {
    a[i] = i;
  };
};
print("2: " + a);
