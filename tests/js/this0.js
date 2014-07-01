function pol(tx) {
  tx.commit();
}
function Obj() {
  this.setit = function() {
    introspect(pol) {
      this["ok"] = "good";
    }
  }
}
var o = new Obj();
o.setit();
print(o["ok"]);
