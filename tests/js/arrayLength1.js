var a = new Array(5);
introspect(JAMScript.process) {
  a.length = 10;
  var l = a.length;
};
print("l: " + l); // l: 10
