var policy = function() {
  var _HTMLElement = Object;
  var _RegExp_prototype_test = RegExp.prototype.test;
  var __RegExp_prototype_test_call_bind__RegExp_prototype_test_ = _RegExp_prototype_test.call.bind(_RegExp_prototype_test);
  var _HTMLFormElement = Object;
  var _Window = Object;
  var _HTMLDocument = Object;
  var _HTMLDocument_prototype_write = Object;
  var _HTMLDocument_prototype_writeln = Object;
  var _XMLHttpRequest_prototype_open = Object;
  var _Window_prototype_open = Object;
  var _undefined = undefined;
  var _Window_prototype_openDialog = Object;
  var _Window_prototype_postMessage = Object;
  var _WebSocket = Object;
  var _HTMLFormElement_prototype_setAttribute = Object;
  var _HTMLAudioElement_prototype_setAttribute = Object;
  var _HTMLFrameElement_prototype_setAttribute = Object;
  var _HTMLIFrameElement_prototype_setAttribute = Object;
  var _HTMLImageElement_prototype_setAttribute = Object;
  var _HTMLInputElement_prototype_setAttribute = Object;
  var _HTMLScriptElement_prototype_setAttribute = Object;
  var _HTMLSourceElement_prototype_setAttribute = Object;
  var _HTMLVideoElement_prototype_setAttribute = Object;
  function pFull(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "write" && (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement) || node.id === "location" && JAM.instanceof(node.obj, _Window) || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "href" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "innerHTML" && JAM.instanceof(node.obj, 
      _HTMLElement))) {
        commit = false;
        break;
      }
      if (node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_openDialog) && 
      (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_postMessage) && node.argc > 1 || JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "action") && node.argc > 1 || JAM.identical(node.value, _HTMLAudioElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, 
      _HTMLFrameElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLIFrameElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLImageElement_prototype_setAttribute) && 
      (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLInputElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLScriptElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && 
      (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLSourceElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLVideoElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.args[1])))) {
        commit = false;
        break;
      }
      if ((node.type === "call" || node.type === "construct") && (JAM.identical(node.value, _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0])))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  pFull.subsumedBy = pFull;
  Object.freeze(pFull);
  function p1(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value)) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p1.subsumedBy = pFull;
  p1.itype = "write";
  Object.freeze(p1);
  function p6(tx) {
    var commit = true;
    var as = tx.getWriteSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.id === "src" && JAM.instanceof(node.obj, _HTMLElement) && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.value) || node.id === "action" && JAM.instanceof(node.obj, _HTMLFormElement) || node.id === "location" && JAM.instanceof(node.obj, _Window) || node.id === "cookie" && JAM.instanceof(node.obj, _HTMLDocument) || node.id === "href" && JAM.instanceof(node.obj, _HTMLElement) || node.id === "innerHTML" && JAM.instanceof(node.obj, _HTMLElement)) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p6.subsumedBy = pFull;
  p6.itype = "write";
  Object.freeze(p6);
  function p21(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && node.args[0] !== _undefined))) {
        commit = false;
        break;
      }
      if ((node.type === "call" || node.type === "construct") && (JAM.identical(node.value, _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0])))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p21.subsumedBy = pFull;
  Object.freeze(p21);
  function p33(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_openDialog) && 
      (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_postMessage) && node.argc > 1 || JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "action") && node.argc > 1 || JAM.identical(node.value, _HTMLAudioElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, 
      _HTMLFrameElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLIFrameElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLImageElement_prototype_setAttribute) && 
      (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLInputElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLScriptElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && 
      (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLSourceElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, node.args[1])) || JAM.identical(node.value, _HTMLVideoElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "src") && (node.argc > 1 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^\s*(http|ftp)/i, 
      node.args[1])))) {
        commit = false;
        break;
      }
      if ((node.type === "call" || node.type === "construct") && (JAM.identical(node.value, _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0])))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p33.subsumedBy = pFull;
  Object.freeze(p33);
  function p19(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && node.args[0] !== 
      _undefined) || JAM.identical(node.value, _Window_prototype_postMessage) && node.argc > 1) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p19.subsumedBy = pFull;
  p19.itype = "call";
  Object.freeze(p19);
  function p15(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && node.args[0] !== _undefined)) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p15.subsumedBy = pFull;
  p15.itype = "call";
  Object.freeze(p15);
  function p25(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "call" && (JAM.identical(node.value, _HTMLDocument_prototype_write) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _HTMLDocument_prototype_writeln) && (node.argc > 0 && typeof node.args[0] === "string") || JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_openDialog) && 
      (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_postMessage) && node.argc > 1 || JAM.identical(node.value, _HTMLFormElement_prototype_setAttribute) && (node.argc > 0 && node.args[0] === "action") && node.argc > 1)) {
        commit = false;
        break;
      }
      if ((node.type === "call" || node.type === "construct") && (JAM.identical(node.value, _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0])))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p25.subsumedBy = pFull;
  Object.freeze(p25);
  function p20(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_postMessage) && node.argc > 1) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p20.subsumedBy = pFull;
  p20.itype = "call";
  Object.freeze(p20);
  function p23(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "call" && (JAM.identical(node.value, _XMLHttpRequest_prototype_open) && node.argc > 1 || JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_postMessage) && node.argc > 1)) {
        commit = false;
        break;
      }
      if ((node.type === "call" || node.type === "construct") && (JAM.identical(node.value, _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0])))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p23.subsumedBy = pFull;
  Object.freeze(p23);
  function p18(tx) {
    var commit = true;
    var as = tx.getCallSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && node.args[0] !== _undefined)) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p18.subsumedBy = pFull;
  p18.itype = "call";
  Object.freeze(p18);
  function p24(tx) {
    var commit = true;
    var as = tx.getActionSequence();
    var len = as.length;
    for (var i = 0;i < len;i++) {
      var node = as[i];
      if (node.type === "call" && (JAM.identical(node.value, _Window_prototype_open) && (node.argc > 0 && node.args[0] !== _undefined) || JAM.identical(node.value, _Window_prototype_openDialog) && (node.argc > 0 && node.args[0] !== _undefined))) {
        commit = false;
        break;
      }
      if ((node.type === "call" || node.type === "construct") && (JAM.identical(node.value, _WebSocket) && (node.argc > 0 && __RegExp_prototype_test_call_bind__RegExp_prototype_test_(/^ws:\/\//i, node.args[0])))) {
        commit = false;
        break;
      }
    }
    if (commit) {
      JAM.process(tx);
    } else {
      JAM.prevent(tx);
    }
  }
  p24.subsumedBy = pFull;
  Object.freeze(p24);
  return{p1:p1, p6:p6, p21:p21, p33:p33, p19:p19, p15:p15, p25:p25, p20:p20, p23:p23, p18:p18, p24:p24, pFull:pFull, woven:true};
}()
