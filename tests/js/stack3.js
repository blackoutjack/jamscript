function f(a) {
  if (a) {
    return 1;
  } else {
    return 0;
  }
}
introspect(JAMScript.process) {
  var x = f();
  var p = 1;
  var y = f(p);
};
print("x: " + x);
print("y: " + y);
