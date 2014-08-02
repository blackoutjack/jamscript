// This tests a case in which the stack frame for the 2nd call within
// the introspect was effectively "replacing" the returned frame for
// the 1st call. This caused confusion for the commiting of locals when
// the suspend is reached in the 2nd call.
function f3(o) {
  print(o);
}
function f2(a) {
  var b;
  var c;
  var d;
  var e = 1;
}
introspect(JAM.process) {
  f2();
  f3("ok");
};
