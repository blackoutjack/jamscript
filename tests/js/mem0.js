

function G0(field,  coefficients)
{
	this.__defineGetter__("Zero", function() { });
}

function G1( primitive)
{
	this.__defineGetter__("Zero", function() { });
	this.__defineGetter__("One", function() { });
	this.z=function( degree,  coefficient) { }
	this.y=function( a) { }
	this.c=function( a) { }
	this.d=function( a) { }
	this.e=function( a,  b) { }		
}

G1.x=function( a,  b) { }

var process = function(){
  var g = {'a': 0};
	var p = {'b': 1};
  var i = 0;
  introspect(JAMScript.introspectors.processAll) {
    for (; i<950000; i++) {
      g.a += p.b;
    }
    p.__defineGetter__("C", function cg() {}); 
  }
  print('g.a: ' + g.a);
}
process();
