// Testcase for read sequence induced by object literals
function pol(tx) {
  var rs = tx.getReadSequence();
  // This should print the two variables read during the object
  // initialization.
  for (var i=0; i<rs.length; i++) {
    print(i + ": " + rs[i].obj + " / " + rs[i].id + " / " + rs[i].value);
  }
  // Print this just to make sure there were no exceptions.
  print("done");
}
var a = undefined;
var b = 1;
var c = 3;
introspect(pol) {
  a = { p1: b, p2: 2, p3: c };
}

