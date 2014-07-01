var v0 = 1.75;
introspect(JAMScript.process) {
  var v1 = [Math, v0];
  var v2 = Math.round
}
var v3 = JAMScript.bind(v2, v1);
var result = v3();
print(result);
