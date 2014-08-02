var a = new Array(5);
introspect(JAM.process) {
  a.length = 10;
  a.push("something");
  var l = a.length;
};
print("l: " + l); // l: 11
