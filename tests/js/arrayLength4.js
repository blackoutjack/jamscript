var a = new Array("A","B","C","D","E");
introspect(JAMScript.process) {
  a.length = 3;
  var b = a[4];
};
print("b: " + b);
