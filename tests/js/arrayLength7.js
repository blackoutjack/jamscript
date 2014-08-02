var a = new Array("A","B","C","D","E");
introspect(JAM.process) {
  a.length = 3;
  a[7] = "H";
  var b = a[4];
  var c = a[7];
  var d = a[6];
};
print("b: " + b);
print("c: " + c);
print("d: " + d);
