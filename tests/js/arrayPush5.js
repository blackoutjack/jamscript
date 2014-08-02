var a = new Array(3);
var len = null;
introspect(JAM.process) {
  for (var i=0; i<3; i++) {
    var b = new Array("D" + i, "E" + i, "F" + i);
    len = a.push(b);
    b[1] = "X";
  }
}
print("a: " + a);
print("len: " + len);

