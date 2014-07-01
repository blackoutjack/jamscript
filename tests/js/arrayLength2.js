var a = new Array(5);
introspect(JAMScript.process) {
  a.length = 10;
  a.push("something");
  var l = a.length;
};
print("l: " + l); // l: 11
