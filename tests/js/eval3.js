var result = 0;
function f() {
  var result = 2;
  var e = eval;
  result = JAM.call(e, null, ["result + 1"]);
  alert("result inside: " + result);
}
f();
alert("result outside: " + result);
