var a = 1;
try {
  var b = XXX.prop;
  introspect(JAMScript.process) {
    a *= 3;
  }
  print("Don't print this!");
} catch (ex) {
  print("caught");
}
print("done");
