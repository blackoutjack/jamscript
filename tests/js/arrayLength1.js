var a = new Array(5);
introspect(JAM.process) {
  a.length = 10;
  var l = a.length;
};
print("l: " + l); // l: 10
