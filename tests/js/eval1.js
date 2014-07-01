function pol(tx) {
  print("1) " + a);
  JAMScript.process(tx);
  print("2) " + a);
}
var a = 0;
introspect(pol) {
  eval("a = 1;");
}
