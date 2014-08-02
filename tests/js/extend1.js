function v37(p, h$$4) {
  function v11() {
    function a() {
    }
    // |e$$12| =>
    //   |{init:v12, toString:v13, concat:v14, clamp:v15, clone:v16, random:v17}|
    function v6(e$$12) {
      // |a.prototype| =>
      //   |{extend:v6, create:v7, init:v8, mixIn:v9, clone:v10}|
      a.prototype = this;
      // |c.__proto__| =>
      //   |{extend:v6, create:v7, init:v8, mixIn:v9, clone:v10}|
      var c = new a;
      if(e$$12) {
        // |c| =>
        //   |{init:v12, toString:v13, concat:v14, clamp:v15, clone:v16, random:v17}|
        // |c.__proto__| is unaffected.
        c.mixIn(e$$12)
      }
      // |c.$super| =>
      //   |{extend:v6, create:v7, init:v8, mixIn:v9, clone:v10}|
      c.$super = this;
      return c
    }
    function v7() {
      var a$$1 = this.extend();
      var v198 = a$$1.init;
      v198.apply(a$$1, arguments);
      return a$$1
    }
    function v8() {
    }
    function v9(a$$2) {
      var c$$1;
      for(c$$1 in a$$2) {
        var v125 = a$$2.hasOwnProperty(c$$1);
        if(v125) {
          var v199;
            v199 = a$$2[c$$1];
            this[c$$1] = v199
        }
      }
      var v126 = a$$2.hasOwnProperty("toString");
      if(v126) {
        var v200 = a$$2.toString;
        this.toString = v200
      }
    }
    function v10() {
      var v201 = this.$super;
      var v202 = v201.extend(this);
      return v202
    }
    var v203 = {extend:v6, create:v7, init:v8, mixIn:v9, clone:v10};
    return v203
  }
  function v12(a$$3, e$$13) {
    var v133 = a$$3;
    if(!v133) {
      v133 = []
    }
    this.words = v133;
    a$$3 = this.words;
    var v114;
    var v205 = e$$13 != h$$4;
    if(v205) {
      v114 = e$$13
    }else {
      var v206 = a$$3.length;
      v114 = 4 * v206
    }
    this.sigBytes = v114
  }
  function v13(a$$4) {
    var v134 = a$$4;
    if(!v134) {
      v134 = s$$2
    }
    var v207 = v134.stringify(this);
    return v207
  }
  function v14(a$$5) {
    var e$$14 = this.words;
    var c$$2 = a$$5.words;
    var b = this.sigBytes;
    var v208 = a$$5.sigBytes;
    a$$5 = v208;
    this.clamp();
    var v209 = b % 4;
    if(v209) {
      var d = 0;
      var v89 = d < a$$5;
      for(;v89;) {
        var v210 = b + d;
        var v211 = v210 >>> 2;
        var v212 = d >>> 2;
        var v213 = c$$2[v212];
        var v214 = d % 4;
        var v215 = 8 * v214;
        var v216 = 24 - v215;
        var v217 = v213 >>> v216;
        var v218 = v217 & 255;
        var v219 = b + d;
        var v220 = v219 % 4;
        var v221 = 8 * v220;
        var v222 = 24 - v221;
        var v223 = v218 << v222;
        e$$14[v211] |= v223;
        d++;
        v89 = d < a$$5
      }
    }else {
      var v224 = c$$2.length;
      var v225 = 65535 < v224;
      if(v225) {
        d = 0;
        var v90 = d < a$$5;
        for(;v90;) {
          var v226 = b + d;
          var v227 = v226 >>> 2;
          var v228 = d >>> 2;
          var v229 = c$$2[v228];
          e$$14[v227] = v229;
          d += 4;
          v90 = d < a$$5
        }
      }else {
        var v230 = e$$14.push;
        v230.apply(e$$14, c$$2)
      }
    }
    this.sigBytes += a$$5;
    return this
  }
  function v15() {
    var a$$6 = this.words;
    var e$$15 = this.sigBytes;
    var v231 = e$$15 >>> 2;
    var v232 = e$$15 % 4;
    var v233 = 8 * v232;
    var v234 = 32 - v233;
    var v235 = 4294967295 << v234;
    a$$6[v231] &= v235;
    var v236 = e$$15 / 4;
    var v237 = p.ceil(v236);
    a$$6.length = v237
  }
  function v16() {
    var v238 = r.clone;
    var a$$7 = v238.call(this);
    var v239 = this.words;
    var v240 = v239.slice(0);
    a$$7.words = v240;
    return a$$7
  }
  function v17(a$$8) {
    var e$$16 = [];
    var c$$3 = 0;
    var v91 = c$$3 < a$$8;
    for(;v91;) {
      var v241 = p.random();
      var v242 = 4294967296 * v241;
      var v243 = v242 | 0;
      e$$16.push(v243);
      c$$3 += 4;
      v91 = c$$3 < a$$8
    }
    var v244 = o$$1.create(e$$16, a$$8);
    return v244
  }
  var i$$1 = {};
  var v197 = {};
  // |i$$1.lib| => |{}|
  var l = i$$1.lib = v197;
  var v204 = v11();
  // |i$$1.lib.Base| =>
  //   |{extend:v6, create:v7, init:v8, mixIn:v9, clone:v10}|
  var r = l.Base = v204;
  var v245 = {init:v12, toString:v13, concat:v14, clamp:v15, clone:v16, random:v17};
  // %%% Comment
  var v246 = r.extend(v245);
  // Return the extension object.
  return v246;
}
//introspect(JAM.process) {
  var v135 = v37(Math)
//};
JAM.dump(v135);
