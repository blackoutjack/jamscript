introspect(JAM.process) {
function f(p) {
  function v50() {
    return p;
  }
  var o = g;
  print("o: " + o);
}
g = 1;
f(2);
};
print("DONE!");
