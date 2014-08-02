function pol2(tx) {
  parnt("blah");
}
function pol(tx) {
  JAM.process(tx);
  pol2(tx);
}
function f() {
  introspect(pol) {
    print("first");
  }
}
introspect(pol) {
  f();
}
print("second");
