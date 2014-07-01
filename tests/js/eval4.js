var result = 0;
function f() {
  var result = 2;
  introspect(JAMScript.process) {
    var e = eval;
    result = e("result + 1");
  }
  alert("result inside: " + result);
}
f();
alert("result outside: " + result);
