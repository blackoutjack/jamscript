print("zeroeth");
var f = JAMScript.bind(print.apply, [print, undefined, new Array("first")]);
f();
print("done");
