function fo() {
  function fi() {
    var a;
    a = 6;
    g = a;
    return "fi";
  }
  var ret = fi();
  var b = "fo";
  return ret + b;
}
var g;
var val;
introspect(JAM.process) {
  val = fo();
}
print("g: " + g);
print("val: " + val);

