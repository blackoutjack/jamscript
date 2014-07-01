function pol(tx) {
  print(obj.text);
  JAMScript.process(tx);
  print(obj.text);
}
var obj = {text: "initial"};
introspect(pol) {
  obj.text = "changed";
}
