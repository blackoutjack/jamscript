// Should print the following sequence of text.
//
// handler called
// notafunc is not a function
// 
// If you see "tx is suspended", this indicates that the introspect
// was not ended appropriately when the exception is thrown. The call
// to |print| within the catch block has caused a suspend.
// 
// On the other hand, if all that's seen is "notafunc is not a
// function" this indicates that the introspect was ended but the
// handler was not called.
//
function pol(tx) {
  print("handler called");
  tx.commit();
  if (tx.isSuspended()) {
    print("tx is suspended");
    JAMScript.performAction(tx);
  }
}
try {
  introspect(pol) {
    notafunc(); 
  };
} catch (ex) {
  print(ex.message);
}
