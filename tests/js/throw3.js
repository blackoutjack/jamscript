var a = 1;
try {
  // An exception should be thrown because the handler value is
  // |undefined| rather than a function.
  introspect(JAM.XXX) {
    a *= 3;
  }
  print("Don't print this!");
} catch (ex) {
  print("caught");
}
print("done");
