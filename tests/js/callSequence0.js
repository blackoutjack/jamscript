function pol(tx) {
  var cs = tx.getCallSequence();
  for (var i=0; i<cs.length; i++) {
    var node = cs[i];
    print(i + ": " + node.id + " / " + node.value + " / " + node.argc);
    for (var j=0; j<node.argc; j++) {
      print("  " + j + ": " + node.args[j]);
    }
  }
}
function f(v) {
  return v + 1;
}
introspect(pol) {
  var x = f(2);
}
