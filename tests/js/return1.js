function f(val) {
  if (typeof x !== "undefined") {
    alert("bah");
  } else {
    var o = { get prop() { return 3 + 4; } }
    introspect(JAM.process) {
      return z = o.prop;
    }
  }
  return 3;
}
var z = 1;
var x = f(2);
alert("x: " + x + " z: " + z);
