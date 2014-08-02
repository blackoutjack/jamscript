/*
 // Here's what's expected. There are 3 contexts, referred to as host,
 // outer, and inner.
 //
 // The first |print| in |pol1| suspends into |pol0|, which prints the
 // following value of |a| from the host's handler function.
 0.0: 0 / true / call
 // The host processes the outer introspect by performing the |print|
 // action as if it occurred in the outer tx, printing the following.
 // Within JAM.process the outer tx is committed, causing |a|
 // to have value |1| in the host code.
 1.0: 1 / false
 // |pol0| prints the value of |a| as seen by the host code.
 0.1: 1 / true / call
 // Inside |pol1|, the inner tx is committed. This results in the outer
 // tx seeing the value of |a| as |2|.
 // Then the 2nd |print| statement in |pol1| suspends into |pol0|, which
 // outputs the following from its first |print|. In the host code, the
 // value of |a| is still |0|.
 0.0: 1 / true / call
 // |pol0| performs the action that suspended the outer tx. Since the
 // outer tx has committed the inner one, the value |2| is printed.
 1.1: 2 / false
 // The host code commits the outer tx, causing the final value of |2|
 // to propagate up to the host. It then prints the following.
 0.1: 2 / true / call
 // The next two lines are printed in the call to pol0 that occurs at
 // the end of the introspect. Nothing has happened since the previous
 // suspend.
 0.0: 2 / false
 0.1: 2 / false
 // And this is the value of |a| at the end of the program.
 final: 2
 */
function pol0(tx) {
  // This function executes in the host context.
  print("0.0: " + a + " / " + tx.isSuspended() + (tx.getSuspendInfo() ? " / " + tx.getSuspendInfo().type : ""));
  JAM.process(tx); 
  print("0.1: " + a + " / " + tx.isSuspended() + (tx.getSuspendInfo() ? " / " + tx.getSuspendInfo().type : ""));
}
function pol1(tx) {
  // This function executes in the outer tx context.
  print("1.0: " + a + " / " + tx.isSuspended() + (tx.getSuspendInfo() ? " / " + tx.getSuspendInfo().type : ""));
  JAM.process(tx);
  print("1.1: " + a + " / " + tx.isSuspended() + (tx.getSuspendInfo() ? " / " + tx.getSuspendInfo().type : ""));
}
var a = 0;
introspect(pol0) {
  a = 1;
  introspect(pol1) {
    a = 2;
  }
}
print("final: " + a);
