function pol1(tx) {
  print("1: " + a);
  tx.commit();
}
function pol2(tx) {
  print("3: " + a);
  tx.commit();
}
var a = new Array();
var i = 0;
var j = 1;
introspect(pol1) {
  a[i] = i;
};
print("2: " + a);
introspect(pol2) {
  a[j] = j;
};
print("4: " + a);
