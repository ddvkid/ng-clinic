import {MessageType} from "./message";

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      console.log(request);
    }
  }
);
console.log(document);
if (document instanceof HTMLDocument) {
    chrome.runtime.sendMessage(MessageType.Initialize)
}
// let [root] = window.getAllAngularRootElements();
// let appRoot = ng.probe(root);
// let [rootComponent] = appRoot.injector.get(ng.coreTokens.ApplicationRef).components;
// let ChangeDetectorRef = rootComponent.changeDetectorRef.constructor.prototype;
// ChangeDetectorRef.constructor.prototype.detectChanges = (function () {
//   let oldDC = ChangeDetectorRef.constructor.prototype.detectChanges;
//   let map = new WeakMap();
//
//   return function () {
//     Zone.root.run(() => showChangeDetection(this));
//     return oldDC.apply(this, arguments);
//   }
//
//   function showChangeDetection (changeDetector) {
//     let view = changeDetector._view;
//     modifyNodeOpacity(view, fade);
//     modifyNodeOpacity(view, (node) => {
//       let timeout = map.get(node.renderElement);
//       if (timeout) {
//         clearTimeout(timeout);
//       }
//       timeout = setTimeout(() => show(node), 1000);
//       map.set(node.renderElement, timeout);
//     });
//   }
//
//   function modifyNodeOpacity (view, modifier) {
//     view.nodes.forEach(node => {
//       if (node && node.renderElement && node.renderElement.style) {
//         modifier(node);
//       }
//     });
//   }
//
//   function fade (node) {
//     let { style } = node.renderElement;
//     let opacity = parseFloat(style.opacity) || 1;
//     let newOpacity = opacity - 0.01;
//     style.display = 'block';
//     style.opacity = newOpacity > 0 ? newOpacity : 0;
//   }
//
//   function show (node) {
//     let { style } = node.renderElement;
//     style.display = 'block';
//     style.opacity = 1;
//   }
// })();