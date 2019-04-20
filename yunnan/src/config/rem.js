// (function (doc, win){
//   let docEl = doc.documentElement,
//       resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//       recalc = function () {
//           let clientWidth = docEl.clientWidth;

//           clientWidth=clientWidth>540?540:clientWidth;
//           if (!clientWidth) return;
//           docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
//       };


//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

(function (doc, win) {
    var docEl 
    docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      if (clientWidth >= 640) {
        docEl.style.fontSize = '100px'
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 640) + 'px'
      }
    }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  })(document, window)
  

