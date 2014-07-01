function f(glob) {
  glob.prop = "ok";
}
introspect(JAMScript.process) {
  f(this);
  print("prop: " + prop);
}
