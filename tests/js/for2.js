var c = [];
var e = 0;
var i;
introspect(JAMScript.process) {
  c[1] = 1;
  e = c[1];
};
print("e: " + e);
