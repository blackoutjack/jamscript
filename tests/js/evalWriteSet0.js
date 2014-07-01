function pol(tx) {
  // This handler should be called 3 times; once on the suspend caused
  // by |eval|, once at the end of the wrapped execution of |eval|'s
  // argument, and once at the end of the original introspect.
  var ws = tx.getWriteSequence();
  // The first time through, there should be no writes.
  // The second time through, the |p1| property of |a| should be set.
  // The third time through, |a.p2| is set.
  print("size: " + ws.length);
  for (var i=0; i<ws.length; i++) {
    print(i + ": " + ws[i].obj + " / " + ws[i].id + " / " + ws[i].value);
  }
  JAMScript.process(tx);
}
var a = {};
introspect(pol) {
  eval("a.p1 = 'ok'");
  a.p2 = 'done';
}
print(a.p1); // ok
print(a.p2); // done
