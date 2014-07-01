var a = 5;
print(b);
introspect (function(tx) { tx.commit(); }) {
  var b = 6;
}
print(b);
