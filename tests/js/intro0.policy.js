function txIntro(a, b, c) {
  if (a.isSuspended()) {
    a = performAction(a,b,c);
  } else {
    a.commit();
  }
}
