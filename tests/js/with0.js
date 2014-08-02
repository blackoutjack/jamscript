function f(o) {
  with(o) {
    introspect(JAM.process) {
      a = 4;
    }
  }
}
var obj = { a: 1, b: 2 };
f(obj);
print("a: " + obj.a);
print("b: " + obj.b);
