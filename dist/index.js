var e,t=require("react"),n=(e=t)&&"object"==typeof e&&"default"in e?e.default:e,r=n.createContext({loaded:!1,cv:void 0}),o=r.Consumer,u=r.Provider,a={wasmBinaryFile:"opencv_js.wasm",usingWasm:!0,onRuntimeInitialized:function(){}};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,t){return e(t={exports:{}},t.exports),t.exports}var d=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(d);var v=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(v);var f=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(f);var l=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(l);var _=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(_);var p=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(p);var s=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(s);var y=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(y);var O=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(O);var M=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(M);var P=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(P);var j=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(j);var b=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(b);var m=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(m);var w=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(w);var x=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(x);var C=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(C);var A=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(A);var h=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(h);var I=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(I);var E=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(E);var g=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(g);var z=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(z);var B=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(B);var R=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(R);var V=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(V);var q=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(q);var F=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(F);var S=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(S);var W=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(W);var k=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(k);var D=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(D);var G=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(G);var H=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(H);var J=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(J);var K=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(K);var L=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(L);var N=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(N);var Q=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(Q);var T=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(T);var U=i(function(e,t){function n(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),n(d),n(v),n(f),n(l),n(_),n(p),n(s),n(y),n(O),n(M),n(P),n(j),n(b),n(m),n(w),n(x),n(C),n(A),n(h),n(I),n(E),n(g),n(z),n(B),n(R),n(V),n(q),n(F),n(S),n(X),n(W),n(k),n(D),n(G),n(H),n(J),n(K),n(L),n(N),n(Q),n(T),n(Y)});c(U);var X=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});c(X),c(i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));var Y=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.InputArray=X.Mat,t.InputArrayOfArrays=X.Mat,t.InputOutputArray=X.Mat,t.InputOutputArrayOfArrays=X.Mat,t.MatVector=X.Mat,t.OutputArray=X.Mat,t.OutputArrayOfArrays=X.Mat});c(Y);var Z=i(function(e,t){function n(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),n(Y),n(U)});c(Z),exports.OpenCvConsumer=o,exports.OpenCvContext=r,exports.OpenCvProvider=function(e){var t=e.openCvVersion,r=void 0===t?"5.x":t,o=e.openCvPath,c=void 0===o?"":o,i=e.children,d=n.useState({loaded:!1,cv:void 0}),v=d[0],f=d[1];return n.useEffect(function(){var e;document.getElementById("opencv-react")||window.cv?f({loaded:!0,cv:window.cv}):(a.onRuntimeInitialized=function(){f({loaded:!0,cv:window.cv})},window.Module=a,document.body.appendChild(((e=document.createElement("script")).id="opencv-react",e.src=c||"https://docs.opencv.org/"+r+"/opencv.js",e.nonce="true",e.defer=!0,e.async=!0,e)))},[c,r]),n.createElement(u,{value:v},i)},exports.__moduleExports=Z,exports.useOpenCv=function(){return t.useContext(r)};
//# sourceMappingURL=index.js.map
