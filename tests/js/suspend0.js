// This tests correctness of the |isSuspended| method, and basic
// workings of the suspend mechanism. |print| causes a suspend.
function pol(tx) {
  print("suspended: " + tx.isSuspended());
  JAMScript.performAction(tx);
}
introspect(pol) {
  print("ok");
}
