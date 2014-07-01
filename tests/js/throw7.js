introspect(JAMScript.process) {
  try {
    var b = 2;
    var c = x.xxx;
  } catch (ex) {
    print("Caught: " + ex.message);
  }
}
print("b: " + b);
