var result = 0;
function f() {
  var result = 2;
  var e = eval;
  g = JAMScript.bind(e, [null, "result + 1"]);
  result = g();
  alert("result inside: " + result);
}
f();
alert("result outside: " + result);
