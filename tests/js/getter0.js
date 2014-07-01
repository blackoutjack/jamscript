function pol(tx) {
  JAMScript.process(tx);
}
function f() {
  function g() {
    return "x";
  }
  introspect(pol) {
    this.__defineGetter__("X", g);
  };
}
var o = new f();
print("X: " + o.X);
