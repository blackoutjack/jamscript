var s = "abcxdef";
introspect(JAM.process) {
  var f = s.indexOf;
}
var m = f.bind(s);
print(m("x"));
