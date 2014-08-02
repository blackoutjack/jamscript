// This tests the operation of |JAM.dump|. There were some cases
// in which calling |dump| within a introspect caused seg. faults.
// (See stack0.js for comments.)
function pol(tx) {
  JAM.dump(a);
  tx.commit();
  JAM.dump(a);
}
var a = { p1: 1, p2: 2 };
introspect(pol) {
  a.p3 = 3;
}
