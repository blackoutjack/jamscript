function pol(tx) {
  JAMScript.process(tx);
}
introspect(pol) {
  var a = 4;
  var b = a.toString();
}
print("type: " + typeof b + ", b: " + b);
