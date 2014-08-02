var s = "abcxdef";
var bc = "bc";
var de = "de";
var f = String.prototype.replace;
introspect(JAM.process) {
  var m = f.bind(s, bc, de);
  var x = m();
}
print(x);
