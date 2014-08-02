var a = new Array(3);
var len = null;
introspect(JAM.process) {
  var b = new Array("D", "E", "F");
  len = a.push(b);
}
print("a: " + a);
print("len: " + len);
