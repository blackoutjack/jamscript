// Testcase for the read set induced by array.join
function pol(tx) {
  var rs = tx.getReadSequence();
  // This should print the original array reference, a.join, and sep.
  for (var i=0; i<rs.length; i++) {
    print(i + ": " + rs[i].obj + " / " + rs[i].id + " / " + rs[i].value);
  }
  JAMScript.process(tx);
}
var a = new Array("one", "two", "three", "four");
var sep = " X ";
introspect(pol) {
  var j = a.join(sep);
}
