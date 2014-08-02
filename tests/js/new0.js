function c(p) {
  function init() {
    print("ok: " + cg0);
  }
  var cg0 = p.id;
  var cg1 = null;
  init();
}
var a = { id: "xxx" };
introspect(JAM.process) {
  new c(a);
}
