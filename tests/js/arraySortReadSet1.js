// Testcase for the read set induced by array.sort
function pol(tx) {
  var rs = tx.getReadSequence();
  // The first time around, this will print |a|, |a.sort|, and |comp|.
  // Since |comp| will be invoked during the call to |sort|, JAMScript
  // will wrap it in a introspect. Then the function calls within
  // |comp| will suspend also, causing a bunch of junk to be output,
  // including |sort.apply| and the arguments that are passed to it
  // within the wrapper function. It's ugly, but makes sense if you
  // stare at it, and it works correctly (demonstrated by the reverse-
  // sorted values printed after the introspect).
  for (var i=0; i<rs.length; i++) {
    print(i + ": " + rs[i].obj + " / " + rs[i].id + " / " + rs[i].value);
  }
  JAMScript.process(tx);
}
function comp(v1, v2) {
  return -v1.toString().localeCompare(v2);
}
var a = new Array("B", "D", "A", "C");
introspect(pol) {
  var b = a.sort(comp);
}
print("a: " + a);
print("b: " + b);
