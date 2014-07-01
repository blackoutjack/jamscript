var o = { p1: 4, p2: 5 };
introspect(JAMScript.process) {
  delete o.p1;
  alert(o.p1);
}
