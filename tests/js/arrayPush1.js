var a = new Array(0,1,2);
var len = null;
introspect(JAMScript.process) {
  len = a.push("ok");
}
print(len);
print(a);
