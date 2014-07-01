function f(a1, a2) {
  var p = a1.push;
  len = p.apply(a1,a2);
  a2[1] = "X";
}
var a = new Array(3);
var len = null;
introspect(JAMScript.process) {
  for (var i=0; i<3; i++) {
    var b = new Array("D" + i, "E" + i, "F" + i);
    f(a, b);
  }
}
print("a: " + a);
print("len: " + len);
