function v83() {
  var c$$29 = [];
  var b$$30 = 0;
  var v109 = 256 > b$$30;
introspect(JAM.process) {
  for(;v109;) {
    var v120;
    var v707 = 128 > b$$30;
    if(v707) {
      v120 = b$$30 << 1
    }else {
      var v708 = b$$30 << 1;
      v120 = v708 ^ 283
    }
    c$$29[b$$30] = v120;
    b$$30++;
    v109 = 256 > b$$30
  }
  var d$$17 = 0;
  var e$$40 = 0;
  b$$30 = 0;
  var v110 = 256 > b$$30;
  for(;v110;) {
    var v709 = e$$40 << 1;
    var v710 = e$$40 ^ v709;
    var v711 = e$$40 << 2;
    var v712 = v710 ^ v711;
    var v713 = e$$40 << 3;
    var v714 = v712 ^ v713;
    var v715 = e$$40 << 4;
    var j$$5 = v714 ^ v715;
    var v716 = j$$5 >>> 8;
    var v717 = j$$5 & 255;
    var v718 = v716 ^ v717;
    j$$5 = v718 ^ 99;
    l$$7[d$$17] = j$$5;
    r$$5[j$$5] = d$$17;
    var i$$11 = c$$29[d$$17];
    var h$$13;
      h$$13 = c$$29[i$$11];
    var p$$6;
      p$$6 = c$$29[h$$13];
    var v719 = c$$29[j$$5];
    var v720 = 257 * v719;
    var v721 = 16843008 * j$$5;
    var t = v720 ^ v721;
    var v722 = t << 24;
    var v723 = t >>> 8;
    var v724 = v722 | v723;
    o$$6[d$$17] = v724;
    var v725 = t << 16;
    var v726 = t >>> 16;
    var v727 = v725 | v726;
    m$$6[d$$17] = v727;
    var v728 = t << 8;
    var v729 = t >>> 24;
    var v730 = v728 | v729;
    s$$7[d$$17] = v730;
    n$$7[d$$17] = t;
    var v731 = 16843009 * p$$6;
    var v732 = 65537 * h$$13;
    var v733 = v731 ^ v732;
    var v734 = 257 * i$$11;
    var v735 = v733 ^ v734;
    var v736 = 16843008 * d$$17;
    t = v735 ^ v736;
    var v737 = t << 24;
    var v738 = t >>> 8;
    var v739 = v737 | v738;
    k$$5[j$$5] = v739;
    var v740 = t << 16;
    var v741 = t >>> 16;
    var v742 = v740 | v741;
    f$$17[j$$5] = v742;
    var v743 = t << 8;
    var v744 = t >>> 24;
    var v745 = v743 | v744;
    g$$10[j$$5] = v745;
    a$$52[j$$5] = t;
    if(d$$17) {
      var v746 = p$$6 ^ i$$11;
      var v747 = c$$29[v746];
      var v748;
        v748 = c$$29[v747];
      var v749;
        v749 = c$$29[v748];
      d$$17 = i$$11 ^ v749;
      var v750 = c$$29[e$$40];
      var v751;
        v751 = c$$29[v750];
      e$$40 ^= v751
    }else {
      e$$40 = 1;
      d$$17 = 1
    }
    b$$30++;
    v110 = 256 > b$$30
  }
};
}
var l$$7 = [];
var r$$5 = [];
var o$$6 = [];
var m$$6 = [];
var s$$7 = [];
var n$$7 = [];
var k$$5 = [];
var f$$17 = [];
var g$$10 = [];
var a$$52 = [];
v83();
print(l$$7);
print(r$$5);
print(o$$6);
print(m$$6);
print(s$$7);
print(n$$7);
print(k$$5);
print(f$$17);
print(g$$10);
print(a$$52);
