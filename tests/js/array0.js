function pol(tx) {
  tx.commit();
}
var a = new Array();
var n = 10;
var i;
for (i=0; i<n; i++) {
  introspect(pol) {
    a[i] = i;
  };
}
print(a);
