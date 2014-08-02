// This tests a case for which the |prototype| member of |a| was being
// inappropriately cached between the calls to |extend| within the
// introspect. It was fixed by the TxJS code in
// jsobj.cpp:js_CreateThisForFunction.
function v37() {
  function v11() {
    function a() {
    }
    function v6() {
      a.prototype = this;
      var c = new a;
      return c
    }
    var v203 = {extend:v6};
    return v203
  }
  var ret = {};
  ret.A = v11();
  ret.B = ret.A.extend();
  return ret;
}
function v82() {
  var l = C.A;
  var o = C.B;
  introspect(JAM.process) {
    var v1 = l.extend();
    var v2 = o.extend();
  };
  JAM.dump(v1, 4);
  JAM.dump(v2, 4);
}
var C = v37();
v82();

