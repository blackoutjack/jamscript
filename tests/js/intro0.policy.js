function txIntro(a, b, c) {
  if (a.isSuspended()) {
    a = JAM.commitSuspend(a,b,c);
  } else {
    a.commit();
  }
}
