function f(glob) {
  glob.prop = "ok";
}
introspect(JAM.process) {
  f(this);
  print("prop: " + prop);
}
