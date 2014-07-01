var s = "abcxdef";
introspect(JAMScript.process) {
  var f = s.indexOf;
}
var m = f.bind(s);
print(m("x"));
