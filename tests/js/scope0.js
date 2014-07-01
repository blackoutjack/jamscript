function f() {
  var a = 3;
  function g() {
    introspect(JAMScript.process) {
      a = "dang";
    }
  }
  g();
  print(a);
}

f();
