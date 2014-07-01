var a = 1;
try {
  introspect(XXX.process) {
    a *= 3;
  }
  print("Don't print this!");
} catch (ex) {
  print("caught");
}
print("done");
