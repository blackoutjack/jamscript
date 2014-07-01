// Testcase for read sequence induced by object literals
function pol(tx) {
  var rs = tx.getReadSequence();
  // The read set should be empty, because only literals were read
  // during the construction of the object. The object itself as the
  // rhs of the assignment doesn't count, because it is a literal itself
  // (analogous to the situation in which a string literal is assigned
  // to a variable).
  for (var i=0; i<rs.length; i++) {
    print(i + ": " + rs[i].obj + " / " + rs[i].id + " / " + rs[i].value);
  }
  // Print this just to make sure there were no exceptions.
  print("done");
}
var a = undefined;
introspect(pol) {
  a = { p1: 1, p2: 2, p3: 3 };
}
