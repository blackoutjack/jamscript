var a = 0;
introspect(JAM.process) {
  eval("a = 1;");
}
print("final: " + a);
