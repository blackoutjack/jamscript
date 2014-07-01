function pol(tx) {
  print(obj.newtext);
  tx.commit();
}
var obj = {text: "initial"};
introspect(pol) {
  obj.newtext = "added";
}
print(obj.newtext);
