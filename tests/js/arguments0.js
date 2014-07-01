function f(a, b) {
  var len = arguments.length;
  var tot = 0;
  for (var i=0; i<len; i++) {
    tot = tot + arguments[i];
  }
  return tot;
}
introspect(JAMScript.process) {
  var v = f(5, 7, 10);
}
print("v: " + v); // v: 22
