// Testcase for the read set induced by array.sort
function pol(tx) {
  var rs = tx.getReadSequence();
  // This should print the original array reference, a.sort, 
  // and each index/value in the original array. Additionally, for
  // each array value that's compared, the |toString| and
  // |localeCompare| methods will be read. If the same index is read
  // multiple times, these reads will be in the read set multiple
  // times because calling a method on a string literal first converts
  // the string to a (new) object, whose property is then read to
  // retrieve the method.
  for (var i=0; i<rs.length; i++) {
    print(i + ": " + rs[i].obj + " / " + rs[i].id + " / " + rs[i].value);
  }
  JAMScript.process(tx);
}
var a = new Array("B", "D", "A", "C");
introspect(pol) {
  var b = a.sort();
}


