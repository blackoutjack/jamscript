var a = 0;
introspect(JAMScript.process) {
  eval("a = 1;");
}
print("final: " + a);
