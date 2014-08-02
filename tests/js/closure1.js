introspect(JAM.process) {
function c() {
  this.states = new Array(0,0,0,0,0);
  this.__defineGetter__("States", function() {
    this.states[0] = 5;
    this.states[1] = 4;
    this.states[2] = 3;
    this.states[3] = 2;
    this.states[4] = 1;
    return this.states;
  });
}
var o = new c();
var s = o.States;
}
print(s);
