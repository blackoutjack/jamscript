var a = new Array(0,1,2);
var len1 = null, len2 = null;
introspect(JAM.process) {
  len1 = a.push("ok1");
  len2 = a.push("ok2");
}
print(len1);
print(len2);
print(a);
