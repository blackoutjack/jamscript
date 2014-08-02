var result = 0;
function f() {
  var result = 1;
  if (JAM.isEval(eval)) {
    // The value of the last expression should be passed through.
    result = eval("introspect(JAM.process) { result + 1; };");
    // This just makes sure we're taking the right path.
    alert("correct");
  } else {
    g() = JAM.bind(eval, [null, "result + 1"]);
    result = g();
  }
  alert("result: " + result);
}
f();
