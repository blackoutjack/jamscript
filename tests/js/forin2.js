// This tests the case in which an undefined value is iterated.
// Per SpiderMonkey semantics, it's just like an empty object.
var o = undefined;
introspect(JAMScript.process) {
for (var key in o) {
  print(key);
}
}
print("done");
