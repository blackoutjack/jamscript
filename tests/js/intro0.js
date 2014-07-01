function pol(tx) {
  var a = notafunc();
  print("whoops");
}
var o = new Object();
try {
  introspect(pol) {
    o.prop = "ok";
  }
} catch (ex) {
  print("MESSAGE: " + ex.message);
}
