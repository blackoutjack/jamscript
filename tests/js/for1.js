function pol(tx) {
  tx.commit();
}
function f() {
  var i;
  introspect(pol) {
    i = 0;
    for (;i<5;) {
      i++;
    }
  };
  return i;
}
var val = f();
print("done: " + val);
