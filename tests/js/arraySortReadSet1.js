// Testcase for the read set induced by array.sort
function pol(tx) {
  var rs = tx.getReadSequence();
  // The first time around, this will print |a|, |a.sort|, and |comp|.
  // Since |comp| will be invoked during the call to |sort|, JAMScript
  // will wrap it in an introspect block. No additional reads are
  // captured when |comp| is invoked because |JAMScript.wrapFunction|
  // embeds closed-over references only.
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
