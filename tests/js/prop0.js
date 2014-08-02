function pol(tx) {
  print(obj.text);
  JAM.process(tx);
  print(obj.text);
}
var obj = {text: "initial"};
introspect(pol) {
  obj.text = "changed";
}
