function pol(tx) {
  tx.commit();
  if (tx.isSuspended()) {
    var sx = tx.getSuspendInfo();
    //var type = sx.type;
    var obj = sx.obj;
    var prop = sx.id;
    //var desc = sx.description;
    var ret = obj[prop];
    tx.setRetval(ret);

    tx.suppress();
  }

}
function g() {
  print("in getter");
  return this.v + 1;
}
var o = {v: 1};
o.__defineGetter__("getV", g);
introspect(pol) {
  var a = o.getV;
}
print("a: " + a); // a: 2
