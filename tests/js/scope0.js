function f() {
  var a = 3;
  function g() {
    introspect(JAM.process) {
      a = "dang";
    }
  }
  g();
  print(a);
}

f();
