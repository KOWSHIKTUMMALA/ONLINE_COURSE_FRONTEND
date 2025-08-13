(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const g of p)if(g.type==="childList")for(const S of g.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&d(S)}).observe(document,{childList:!0,subtree:!0});function h(p){const g={};return p.integrity&&(g.integrity=p.integrity),p.referrerPolicy&&(g.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?g.credentials="include":p.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function d(p){if(p.ep)return;p.ep=!0;const g=h(p);fetch(p.href,g)}})();function Fu(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var yo={exports:{}},Es={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function Ox(){if(Au)return Es;Au=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function h(d,p,g){var S=null;if(g!==void 0&&(S=""+g),p.key!==void 0&&(S=""+p.key),"key"in p){g={};for(var N in p)N!=="key"&&(g[N]=p[N])}else g=p;return p=g.ref,{$$typeof:o,type:d,key:S,ref:p!==void 0?p:null,props:g}}return Es.Fragment=u,Es.jsx=h,Es.jsxs=h,Es}var Eu;function Nx(){return Eu||(Eu=1,yo.exports=Ox()),yo.exports}var e=Nx(),bo={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou;function Dx(){if(Ou)return ie;Ou=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),S=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),L=Symbol.iterator;function M(m){return m===null||typeof m!="object"?null:(m=L&&m[L]||m["@@iterator"],typeof m=="function"?m:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,q={};function F(m,R,P){this.props=m,this.context=R,this.refs=q,this.updater=P||Q}F.prototype.isReactComponent={},F.prototype.setState=function(m,R){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,R,"setState")},F.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function _(){}_.prototype=F.prototype;function U(m,R,P){this.props=m,this.context=R,this.refs=q,this.updater=P||Q}var Z=U.prototype=new _;Z.constructor=U,Y(Z,F.prototype),Z.isPureReactComponent=!0;var ce=Array.isArray,te={H:null,A:null,T:null,S:null,V:null},Me=Object.prototype.hasOwnProperty;function ze(m,R,P,H,W,de){return P=de.ref,{$$typeof:o,type:m,key:R,ref:P!==void 0?P:null,props:de}}function _e(m,R){return ze(m.type,R,void 0,void 0,void 0,m.props)}function Se(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function tt(m){var R={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(P){return R[P]})}var ut=/\/+/g;function Ge(m,R){return typeof m=="object"&&m!==null&&m.key!=null?tt(""+m.key):R.toString(36)}function Tn(){}function kn(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Tn,Tn):(m.status="pending",m.then(function(R){m.status==="pending"&&(m.status="fulfilled",m.value=R)},function(R){m.status==="pending"&&(m.status="rejected",m.reason=R)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Ve(m,R,P,H,W){var de=typeof m;(de==="undefined"||de==="boolean")&&(m=null);var ne=!1;if(m===null)ne=!0;else switch(de){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(m.$$typeof){case o:case u:ne=!0;break;case C:return ne=m._init,Ve(ne(m._payload),R,P,H,W)}}if(ne)return W=W(m),ne=H===""?"."+Ge(m,0):H,ce(W)?(P="",ne!=null&&(P=ne.replace(ut,"$&/")+"/"),Ve(W,R,P,"",function(Zt){return Zt})):W!=null&&(Se(W)&&(W=_e(W,P+(W.key==null||m&&m.key===W.key?"":(""+W.key).replace(ut,"$&/")+"/")+ne)),R.push(W)),1;ne=0;var nt=H===""?".":H+":";if(ce(m))for(var ve=0;ve<m.length;ve++)H=m[ve],de=nt+Ge(H,ve),ne+=Ve(H,R,P,de,W);else if(ve=M(m),typeof ve=="function")for(m=ve.call(m),ve=0;!(H=m.next()).done;)H=H.value,de=nt+Ge(H,ve++),ne+=Ve(H,R,P,de,W);else if(de==="object"){if(typeof m.then=="function")return Ve(kn(m),R,P,H,W);throw R=String(m),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return ne}function O(m,R,P){if(m==null)return m;var H=[],W=0;return Ve(m,H,"","",function(de){return R.call(P,de,W++)}),H}function I(m){if(m._status===-1){var R=m._result;R=R(),R.then(function(P){(m._status===0||m._status===-1)&&(m._status=1,m._result=P)},function(P){(m._status===0||m._status===-1)&&(m._status=2,m._result=P)}),m._status===-1&&(m._status=0,m._result=R)}if(m._status===1)return m._result.default;throw m._result}var $=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function ge(){}return ie.Children={map:O,forEach:function(m,R,P){O(m,function(){R.apply(this,arguments)},P)},count:function(m){var R=0;return O(m,function(){R++}),R},toArray:function(m){return O(m,function(R){return R})||[]},only:function(m){if(!Se(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},ie.Component=F,ie.Fragment=h,ie.Profiler=p,ie.PureComponent=U,ie.StrictMode=d,ie.Suspense=b,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,ie.__COMPILER_RUNTIME={__proto__:null,c:function(m){return te.H.useMemoCache(m)}},ie.cache=function(m){return function(){return m.apply(null,arguments)}},ie.cloneElement=function(m,R,P){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var H=Y({},m.props),W=m.key,de=void 0;if(R!=null)for(ne in R.ref!==void 0&&(de=void 0),R.key!==void 0&&(W=""+R.key),R)!Me.call(R,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&R.ref===void 0||(H[ne]=R[ne]);var ne=arguments.length-2;if(ne===1)H.children=P;else if(1<ne){for(var nt=Array(ne),ve=0;ve<ne;ve++)nt[ve]=arguments[ve+2];H.children=nt}return ze(m.type,W,void 0,void 0,de,H)},ie.createContext=function(m){return m={$$typeof:S,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:g,_context:m},m},ie.createElement=function(m,R,P){var H,W={},de=null;if(R!=null)for(H in R.key!==void 0&&(de=""+R.key),R)Me.call(R,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(W[H]=R[H]);var ne=arguments.length-2;if(ne===1)W.children=P;else if(1<ne){for(var nt=Array(ne),ve=0;ve<ne;ve++)nt[ve]=arguments[ve+2];W.children=nt}if(m&&m.defaultProps)for(H in ne=m.defaultProps,ne)W[H]===void 0&&(W[H]=ne[H]);return ze(m,de,void 0,void 0,null,W)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(m){return{$$typeof:N,render:m}},ie.isValidElement=Se,ie.lazy=function(m){return{$$typeof:C,_payload:{_status:-1,_result:m},_init:I}},ie.memo=function(m,R){return{$$typeof:x,type:m,compare:R===void 0?null:R}},ie.startTransition=function(m){var R=te.T,P={};te.T=P;try{var H=m(),W=te.S;W!==null&&W(P,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(ge,$)}catch(de){$(de)}finally{te.T=R}},ie.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},ie.use=function(m){return te.H.use(m)},ie.useActionState=function(m,R,P){return te.H.useActionState(m,R,P)},ie.useCallback=function(m,R){return te.H.useCallback(m,R)},ie.useContext=function(m){return te.H.useContext(m)},ie.useDebugValue=function(){},ie.useDeferredValue=function(m,R){return te.H.useDeferredValue(m,R)},ie.useEffect=function(m,R,P){var H=te.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(m,R)},ie.useId=function(){return te.H.useId()},ie.useImperativeHandle=function(m,R,P){return te.H.useImperativeHandle(m,R,P)},ie.useInsertionEffect=function(m,R){return te.H.useInsertionEffect(m,R)},ie.useLayoutEffect=function(m,R){return te.H.useLayoutEffect(m,R)},ie.useMemo=function(m,R){return te.H.useMemo(m,R)},ie.useOptimistic=function(m,R){return te.H.useOptimistic(m,R)},ie.useReducer=function(m,R,P){return te.H.useReducer(m,R,P)},ie.useRef=function(m){return te.H.useRef(m)},ie.useState=function(m){return te.H.useState(m)},ie.useSyncExternalStore=function(m,R,P){return te.H.useSyncExternalStore(m,R,P)},ie.useTransition=function(){return te.H.useTransition()},ie.version="19.1.1",ie}var Nu;function Oo(){return Nu||(Nu=1,bo.exports=Dx()),bo.exports}var A=Oo();const zx=Fu(A);var vo={exports:{}},Os={},wo={exports:{}},To={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function Rx(){return Du||(Du=1,function(o){function u(O,I){var $=O.length;O.push(I);e:for(;0<$;){var ge=$-1>>>1,m=O[ge];if(0<p(m,I))O[ge]=I,O[$]=m,$=ge;else break e}}function h(O){return O.length===0?null:O[0]}function d(O){if(O.length===0)return null;var I=O[0],$=O.pop();if($!==I){O[0]=$;e:for(var ge=0,m=O.length,R=m>>>1;ge<R;){var P=2*(ge+1)-1,H=O[P],W=P+1,de=O[W];if(0>p(H,$))W<m&&0>p(de,H)?(O[ge]=de,O[W]=$,ge=W):(O[ge]=H,O[P]=$,ge=P);else if(W<m&&0>p(de,$))O[ge]=de,O[W]=$,ge=W;else break e}}return I}function p(O,I){var $=O.sortIndex-I.sortIndex;return $!==0?$:O.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;o.unstable_now=function(){return g.now()}}else{var S=Date,N=S.now();o.unstable_now=function(){return S.now()-N}}var b=[],x=[],C=1,L=null,M=3,Q=!1,Y=!1,q=!1,F=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ce(O){for(var I=h(x);I!==null;){if(I.callback===null)d(x);else if(I.startTime<=O)d(x),I.sortIndex=I.expirationTime,u(b,I);else break;I=h(x)}}function te(O){if(q=!1,ce(O),!Y)if(h(b)!==null)Y=!0,Me||(Me=!0,Ge());else{var I=h(x);I!==null&&Ve(te,I.startTime-O)}}var Me=!1,ze=-1,_e=5,Se=-1;function tt(){return F?!0:!(o.unstable_now()-Se<_e)}function ut(){if(F=!1,Me){var O=o.unstable_now();Se=O;var I=!0;try{e:{Y=!1,q&&(q=!1,U(ze),ze=-1),Q=!0;var $=M;try{t:{for(ce(O),L=h(b);L!==null&&!(L.expirationTime>O&&tt());){var ge=L.callback;if(typeof ge=="function"){L.callback=null,M=L.priorityLevel;var m=ge(L.expirationTime<=O);if(O=o.unstable_now(),typeof m=="function"){L.callback=m,ce(O),I=!0;break t}L===h(b)&&d(b),ce(O)}else d(b);L=h(b)}if(L!==null)I=!0;else{var R=h(x);R!==null&&Ve(te,R.startTime-O),I=!1}}break e}finally{L=null,M=$,Q=!1}I=void 0}}finally{I?Ge():Me=!1}}}var Ge;if(typeof Z=="function")Ge=function(){Z(ut)};else if(typeof MessageChannel<"u"){var Tn=new MessageChannel,kn=Tn.port2;Tn.port1.onmessage=ut,Ge=function(){kn.postMessage(null)}}else Ge=function(){_(ut,0)};function Ve(O,I){ze=_(function(){O(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_next=function(O){switch(M){case 1:case 2:case 3:var I=3;break;default:I=M}var $=M;M=I;try{return O()}finally{M=$}},o.unstable_requestPaint=function(){F=!0},o.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=M;M=O;try{return I()}finally{M=$}},o.unstable_scheduleCallback=function(O,I,$){var ge=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,O){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=$+m,O={id:C++,callback:I,priorityLevel:O,startTime:$,expirationTime:m,sortIndex:-1},$>ge?(O.sortIndex=$,u(x,O),h(b)===null&&O===h(x)&&(q?(U(ze),ze=-1):q=!0,Ve(te,$-ge))):(O.sortIndex=m,u(b,O),Y||Q||(Y=!0,Me||(Me=!0,Ge()))),O},o.unstable_shouldYield=tt,o.unstable_wrapCallback=function(O){var I=M;return function(){var $=M;M=I;try{return O.apply(this,arguments)}finally{M=$}}}}(To)),To}var zu;function Lx(){return zu||(zu=1,wo.exports=Rx()),wo.exports}var ko={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Mx(){if(Ru)return Qe;Ru=1;var o=Oo();function u(b){var x="https://react.dev/errors/"+b;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)x+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+b+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var d={d:{f:h,r:function(){throw Error(u(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},p=Symbol.for("react.portal");function g(b,x,C){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:L==null?null:""+L,children:b,containerInfo:x,implementation:C}}var S=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(b,x){if(b==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Qe.createPortal=function(b,x){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(u(299));return g(b,x,null,C)},Qe.flushSync=function(b){var x=S.T,C=d.p;try{if(S.T=null,d.p=2,b)return b()}finally{S.T=x,d.p=C,d.d.f()}},Qe.preconnect=function(b,x){typeof b=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,d.d.C(b,x))},Qe.prefetchDNS=function(b){typeof b=="string"&&d.d.D(b)},Qe.preinit=function(b,x){if(typeof b=="string"&&x&&typeof x.as=="string"){var C=x.as,L=N(C,x.crossOrigin),M=typeof x.integrity=="string"?x.integrity:void 0,Q=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;C==="style"?d.d.S(b,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:L,integrity:M,fetchPriority:Q}):C==="script"&&d.d.X(b,{crossOrigin:L,integrity:M,fetchPriority:Q,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Qe.preinitModule=function(b,x){if(typeof b=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var C=N(x.as,x.crossOrigin);d.d.M(b,{crossOrigin:C,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&d.d.M(b)},Qe.preload=function(b,x){if(typeof b=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var C=x.as,L=N(C,x.crossOrigin);d.d.L(b,C,{crossOrigin:L,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Qe.preloadModule=function(b,x){if(typeof b=="string")if(x){var C=N(x.as,x.crossOrigin);d.d.m(b,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:C,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else d.d.m(b)},Qe.requestFormReset=function(b){d.d.r(b)},Qe.unstable_batchedUpdates=function(b,x){return b(x)},Qe.useFormState=function(b,x,C){return S.H.useFormState(b,x,C)},Qe.useFormStatus=function(){return S.H.useHostTransitionStatus()},Qe.version="19.1.1",Qe}var Lu;function _x(){if(Lu)return ko.exports;Lu=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),ko.exports=Mx(),ko.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function Ux(){if(Mu)return Os;Mu=1;var o=Lx(),u=Oo(),h=_x();function d(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function g(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function S(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function N(t){if(g(t)!==t)throw Error(d(188))}function b(t){var n=t.alternate;if(!n){if(n=g(t),n===null)throw Error(d(188));return n!==t?null:t}for(var i=t,s=n;;){var r=i.return;if(r===null)break;var a=r.alternate;if(a===null){if(s=r.return,s!==null){i=s;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===i)return N(r),t;if(a===s)return N(r),n;a=a.sibling}throw Error(d(188))}if(i.return!==s.return)i=r,s=a;else{for(var l=!1,c=r.child;c;){if(c===i){l=!0,i=r,s=a;break}if(c===s){l=!0,s=r,i=a;break}c=c.sibling}if(!l){for(c=a.child;c;){if(c===i){l=!0,i=a,s=r;break}if(c===s){l=!0,s=a,i=r;break}c=c.sibling}if(!l)throw Error(d(189))}}if(i.alternate!==s)throw Error(d(190))}if(i.tag!==3)throw Error(d(188));return i.stateNode.current===i?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var C=Object.assign,L=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),tt=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function Ge(t){return t===null||typeof t!="object"?null:(t=ut&&t[ut]||t["@@iterator"],typeof t=="function"?t:null)}var Tn=Symbol.for("react.client.reference");function kn(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case F:return"Profiler";case q:return"StrictMode";case te:return"Suspense";case Me:return"SuspenseList";case Se:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Q:return"Portal";case Z:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case ce:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ze:return n=t.displayName||null,n!==null?n:kn(t.type)||"Memo";case _e:n=t._payload,t=t._init;try{return kn(t(n))}catch{}}return null}var Ve=Array.isArray,O=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],m=-1;function R(t){return{current:t}}function P(t){0>m||(t.current=ge[m],ge[m]=null,m--)}function H(t,n){m++,ge[m]=t.current,t.current=n}var W=R(null),de=R(null),ne=R(null),nt=R(null);function ve(t,n){switch(H(ne,n),H(de,t),H(W,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?tu(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=tu(n),t=nu(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}P(W),H(W,t)}function Zt(){P(W),P(de),P(ne)}function ia(t){t.memoizedState!==null&&H(nt,t);var n=W.current,i=nu(n,t.type);n!==i&&(H(de,t),H(W,i))}function Ms(t){de.current===t&&(P(W),P(de)),nt.current===t&&(P(nt),Ts._currentValue=$)}var sa=Object.prototype.hasOwnProperty,ra=o.unstable_scheduleCallback,aa=o.unstable_cancelCallback,ap=o.unstable_shouldYield,lp=o.unstable_requestPaint,St=o.unstable_now,op=o.unstable_getCurrentPriorityLevel,Mo=o.unstable_ImmediatePriority,_o=o.unstable_UserBlockingPriority,_s=o.unstable_NormalPriority,cp=o.unstable_LowPriority,Uo=o.unstable_IdlePriority,dp=o.log,hp=o.unstable_setDisableYieldValue,Di=null,it=null;function Jt(t){if(typeof dp=="function"&&hp(t),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Di,t)}catch{}}var st=Math.clz32?Math.clz32:fp,up=Math.log,pp=Math.LN2;function fp(t){return t>>>=0,t===0?32:31-(up(t)/pp|0)|0}var Us=256,Hs=4194304;function Sn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qs(t,n,i){var s=t.pendingLanes;if(s===0)return 0;var r=0,a=t.suspendedLanes,l=t.pingedLanes;t=t.warmLanes;var c=s&134217727;return c!==0?(s=c&~a,s!==0?r=Sn(s):(l&=c,l!==0?r=Sn(l):i||(i=c&~t,i!==0&&(r=Sn(i))))):(c=s&~a,c!==0?r=Sn(c):l!==0?r=Sn(l):i||(i=s&~t,i!==0&&(r=Sn(i)))),r===0?0:n!==0&&n!==r&&(n&a)===0&&(a=r&-r,i=n&-n,a>=i||a===32&&(i&4194048)!==0)?n:r}function zi(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function xp(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ho(){var t=Us;return Us<<=1,(Us&4194048)===0&&(Us=256),t}function qo(){var t=Hs;return Hs<<=1,(Hs&62914560)===0&&(Hs=4194304),t}function la(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function Ri(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function mp(t,n,i,s,r,a){var l=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,w=t.hiddenUpdates;for(i=l&~i;0<i;){var E=31-st(i),z=1<<E;c[E]=0,f[E]=-1;var T=w[E];if(T!==null)for(w[E]=null,E=0;E<T.length;E++){var k=T[E];k!==null&&(k.lane&=-536870913)}i&=~z}s!==0&&Io(t,s,0),a!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=a&~(l&~n))}function Io(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-st(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|i&4194090}function Po(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var s=31-st(i),r=1<<s;r&n|t[s]&n&&(t[s]|=n),i&=~r}}function oa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ca(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fo(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:vu(t.type))}function jp(t,n){var i=I.p;try{return I.p=t,n()}finally{I.p=i}}var $t=Math.random().toString(36).slice(2),Ye="__reactFiber$"+$t,Ke="__reactProps$"+$t,Gn="__reactContainer$"+$t,da="__reactEvents$"+$t,gp="__reactListeners$"+$t,yp="__reactHandles$"+$t,Bo="__reactResources$"+$t,Li="__reactMarker$"+$t;function ha(t){delete t[Ye],delete t[Ke],delete t[da],delete t[gp],delete t[yp]}function Vn(t){var n=t[Ye];if(n)return n;for(var i=t.parentNode;i;){if(n=i[Gn]||i[Ye]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=au(t);t!==null;){if(i=t[Ye])return i;t=au(t)}return n}t=i,i=t.parentNode}return null}function Yn(t){if(t=t[Ye]||t[Gn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Mi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(d(33))}function Xn(t){var n=t[Bo];return n||(n=t[Bo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ue(t){t[Li]=!0}var Go=new Set,Vo={};function Cn(t,n){Qn(t,n),Qn(t+"Capture",n)}function Qn(t,n){for(Vo[t]=n,t=0;t<n.length;t++)Go.add(n[t])}var bp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yo={},Xo={};function vp(t){return sa.call(Xo,t)?!0:sa.call(Yo,t)?!1:bp.test(t)?Xo[t]=!0:(Yo[t]=!0,!1)}function Is(t,n,i){if(vp(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+i)}}function Ps(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+i)}}function Rt(t,n,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,""+s)}}var ua,Qo;function Wn(t){if(ua===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);ua=n&&n[1]||"",Qo=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ua+t+Qo}var pa=!1;function fa(t,n){if(!t||pa)return"";pa=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(k){var T=k}Reflect.construct(t,[],z)}else{try{z.call()}catch(k){T=k}t.call(z.prototype)}}else{try{throw Error()}catch(k){T=k}(z=t())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(k){if(k&&T&&typeof k.stack=="string")return[k.stack,T.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=s.DetermineComponentFrameRoot(),l=a[0],c=a[1];if(l&&c){var f=l.split(`
`),w=c.split(`
`);for(r=s=0;s<f.length&&!f[s].includes("DetermineComponentFrameRoot");)s++;for(;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;if(s===f.length||r===w.length)for(s=f.length-1,r=w.length-1;1<=s&&0<=r&&f[s]!==w[r];)r--;for(;1<=s&&0<=r;s--,r--)if(f[s]!==w[r]){if(s!==1||r!==1)do if(s--,r--,0>r||f[s]!==w[r]){var E=`
`+f[s].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=s&&0<=r);break}}}finally{pa=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Wn(i):""}function wp(t){switch(t.tag){case 26:case 27:case 5:return Wn(t.type);case 16:return Wn("Lazy");case 13:return Wn("Suspense");case 19:return Wn("SuspenseList");case 0:case 15:return fa(t.type,!1);case 11:return fa(t.type.render,!1);case 1:return fa(t.type,!0);case 31:return Wn("Activity");default:return""}}function Wo(t){try{var n="";do n+=wp(t),t=t.return;while(t);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function pt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ko(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tp(t){var n=Ko(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,a=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return r.call(this)},set:function(l){s=""+l,a.call(this,l)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Fs(t){t._valueTracker||(t._valueTracker=Tp(t))}function Zo(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return t&&(s=Ko(t)?t.checked?"true":"false":t.value),t=s,t!==i?(n.setValue(t),!0):!1}function Bs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kp=/[\n"\\]/g;function ft(t){return t.replace(kp,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xa(t,n,i,s,r,a,l,c){t.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.type=l:t.removeAttribute("type"),n!=null?l==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+pt(n)):t.value!==""+pt(n)&&(t.value=""+pt(n)):l!=="submit"&&l!=="reset"||t.removeAttribute("value"),n!=null?ma(t,l,pt(n)):i!=null?ma(t,l,pt(i)):s!=null&&t.removeAttribute("value"),r==null&&a!=null&&(t.defaultChecked=!!a),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+pt(c):t.removeAttribute("name")}function Jo(t,n,i,s,r,a,l,c){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.type=a),n!=null||i!=null){if(!(a!=="submit"&&a!=="reset"||n!=null))return;i=i!=null?""+pt(i):"",n=n!=null?""+pt(n):i,c||n===t.value||(t.value=n),t.defaultValue=n}s=s??r,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=c?t.checked:!!s,t.defaultChecked=!!s,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.name=l)}function ma(t,n,i){n==="number"&&Bs(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Kn(t,n,i,s){if(t=t.options,n){n={};for(var r=0;r<i.length;r++)n["$"+i[r]]=!0;for(i=0;i<t.length;i++)r=n.hasOwnProperty("$"+t[i].value),t[i].selected!==r&&(t[i].selected=r),r&&s&&(t[i].defaultSelected=!0)}else{for(i=""+pt(i),n=null,r=0;r<t.length;r++){if(t[r].value===i){t[r].selected=!0,s&&(t[r].defaultSelected=!0);return}n!==null||t[r].disabled||(n=t[r])}n!==null&&(n.selected=!0)}}function $o(t,n,i){if(n!=null&&(n=""+pt(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+pt(i):""}function ec(t,n,i,s){if(n==null){if(s!=null){if(i!=null)throw Error(d(92));if(Ve(s)){if(1<s.length)throw Error(d(93));s=s[0]}i=s}i==null&&(i=""),n=i}i=pt(n),t.defaultValue=i,s=t.textContent,s===i&&s!==""&&s!==null&&(t.value=s)}function Zn(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Sp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tc(t,n,i){var s=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,i):typeof i!="number"||i===0||Sp.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function nc(t,n,i){if(n!=null&&typeof n!="object")throw Error(d(62));if(t=t.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var r in n)s=n[r],n.hasOwnProperty(r)&&i[r]!==s&&tc(t,r,s)}else for(var a in n)n.hasOwnProperty(a)&&tc(t,a,n[a])}function ja(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ap=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gs(t){return Ap.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ga=null;function ya(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jn=null,$n=null;function ic(t){var n=Yn(t);if(n&&(t=n.stateNode)){var i=t[Ke]||null;e:switch(t=n.stateNode,n.type){case"input":if(xa(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ft(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==t&&s.form===t.form){var r=s[Ke]||null;if(!r)throw Error(d(90));xa(s,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<i.length;n++)s=i[n],s.form===t.form&&Zo(s)}break e;case"textarea":$o(t,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Kn(t,!!i.multiple,n,!1)}}}var ba=!1;function sc(t,n,i){if(ba)return t(n,i);ba=!0;try{var s=t(n);return s}finally{if(ba=!1,(Jn!==null||$n!==null)&&(Or(),Jn&&(n=Jn,t=$n,$n=Jn=null,ic(n),t)))for(n=0;n<t.length;n++)ic(t[n])}}function _i(t,n){var i=t.stateNode;if(i===null)return null;var s=i[Ke]||null;if(s===null)return null;i=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(d(231,n,typeof i));return i}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),va=!1;if(Lt)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){va=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{va=!1}var en=null,wa=null,Vs=null;function rc(){if(Vs)return Vs;var t,n=wa,i=n.length,s,r="value"in en?en.value:en.textContent,a=r.length;for(t=0;t<i&&n[t]===r[t];t++);var l=i-t;for(s=1;s<=l&&n[i-s]===r[a-s];s++);return Vs=r.slice(t,1<s?1-s:void 0)}function Ys(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xs(){return!0}function ac(){return!1}function Ze(t){function n(i,s,r,a,l){this._reactName=i,this._targetInst=r,this.type=s,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(i=t[c],this[c]=i?i(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Xs:ac,this.isPropagationStopped=ac,this}return C(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),n}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=Ze(An),Hi=C({},An,{view:0,detail:0}),Ep=Ze(Hi),Ta,ka,qi,Ws=C({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ca,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(Ta=t.screenX-qi.screenX,ka=t.screenY-qi.screenY):ka=Ta=0,qi=t),Ta)},movementY:function(t){return"movementY"in t?t.movementY:ka}}),lc=Ze(Ws),Op=C({},Ws,{dataTransfer:0}),Np=Ze(Op),Dp=C({},Hi,{relatedTarget:0}),Sa=Ze(Dp),zp=C({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=Ze(zp),Lp=C({},An,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mp=Ze(Lp),_p=C({},An,{data:0}),oc=Ze(_p),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=qp[t])?!!n[t]:!1}function Ca(){return Ip}var Pp=C({},Hi,{key:function(t){if(t.key){var n=Up[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ca,charCode:function(t){return t.type==="keypress"?Ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fp=Ze(Pp),Bp=C({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cc=Ze(Bp),Gp=C({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ca}),Vp=Ze(Gp),Yp=C({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=Ze(Yp),Qp=C({},Ws,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=Ze(Qp),Kp=C({},An,{newState:0,oldState:0}),Zp=Ze(Kp),Jp=[9,13,27,32],Aa=Lt&&"CompositionEvent"in window,Ii=null;Lt&&"documentMode"in document&&(Ii=document.documentMode);var $p=Lt&&"TextEvent"in window&&!Ii,dc=Lt&&(!Aa||Ii&&8<Ii&&11>=Ii),hc=" ",uc=!1;function pc(t,n){switch(t){case"keyup":return Jp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function ef(t,n){switch(t){case"compositionend":return fc(n);case"keypress":return n.which!==32?null:(uc=!0,hc);case"textInput":return t=n.data,t===hc&&uc?null:t;default:return null}}function tf(t,n){if(ei)return t==="compositionend"||!Aa&&pc(t,n)?(t=rc(),Vs=wa=en=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dc&&n.locale!=="ko"?null:n.data;default:return null}}var nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!nf[t.type]:n==="textarea"}function mc(t,n,i,s){Jn?$n?$n.push(s):$n=[s]:Jn=s,n=Mr(n,"onChange"),0<n.length&&(i=new Qs("onChange","change",null,i,s),t.push({event:i,listeners:n}))}var Pi=null,Fi=null;function sf(t){Kh(t,0)}function Ks(t){var n=Mi(t);if(Zo(n))return t}function jc(t,n){if(t==="change")return n}var gc=!1;if(Lt){var Ea;if(Lt){var Oa="oninput"in document;if(!Oa){var yc=document.createElement("div");yc.setAttribute("oninput","return;"),Oa=typeof yc.oninput=="function"}Ea=Oa}else Ea=!1;gc=Ea&&(!document.documentMode||9<document.documentMode)}function bc(){Pi&&(Pi.detachEvent("onpropertychange",vc),Fi=Pi=null)}function vc(t){if(t.propertyName==="value"&&Ks(Fi)){var n=[];mc(n,Fi,t,ya(t)),sc(sf,n)}}function rf(t,n,i){t==="focusin"?(bc(),Pi=n,Fi=i,Pi.attachEvent("onpropertychange",vc)):t==="focusout"&&bc()}function af(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ks(Fi)}function lf(t,n){if(t==="click")return Ks(n)}function of(t,n){if(t==="input"||t==="change")return Ks(n)}function cf(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var rt=typeof Object.is=="function"?Object.is:cf;function Bi(t,n){if(rt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var r=i[s];if(!sa.call(n,r)||!rt(t[r],n[r]))return!1}return!0}function wc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tc(t,n){var i=wc(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=n&&s>=n)return{node:i,offset:n-t};t=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=wc(i)}}function kc(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?kc(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Sc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Bs(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Bs(t.document)}return n}function Na(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var df=Lt&&"documentMode"in document&&11>=document.documentMode,ti=null,Da=null,Gi=null,za=!1;function Cc(t,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;za||ti==null||ti!==Bs(s)||(s=ti,"selectionStart"in s&&Na(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Gi&&Bi(Gi,s)||(Gi=s,s=Mr(Da,"onSelect"),0<s.length&&(n=new Qs("onSelect","select",null,n,i),t.push({event:n,listeners:s}),n.target=ti)))}function En(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var ni={animationend:En("Animation","AnimationEnd"),animationiteration:En("Animation","AnimationIteration"),animationstart:En("Animation","AnimationStart"),transitionrun:En("Transition","TransitionRun"),transitionstart:En("Transition","TransitionStart"),transitioncancel:En("Transition","TransitionCancel"),transitionend:En("Transition","TransitionEnd")},Ra={},Ac={};Lt&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function On(t){if(Ra[t])return Ra[t];if(!ni[t])return t;var n=ni[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in Ac)return Ra[t]=n[i];return t}var Ec=On("animationend"),Oc=On("animationiteration"),Nc=On("animationstart"),hf=On("transitionrun"),uf=On("transitionstart"),pf=On("transitioncancel"),Dc=On("transitionend"),zc=new Map,La="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");La.push("scrollEnd");function wt(t,n){zc.set(t,n),Cn(n,[t])}var Rc=new WeakMap;function xt(t,n){if(typeof t=="object"&&t!==null){var i=Rc.get(t);return i!==void 0?i:(n={value:t,source:n,stack:Wo(n)},Rc.set(t,n),n)}return{value:t,source:n,stack:Wo(n)}}var mt=[],ii=0,Ma=0;function Zs(){for(var t=ii,n=Ma=ii=0;n<t;){var i=mt[n];mt[n++]=null;var s=mt[n];mt[n++]=null;var r=mt[n];mt[n++]=null;var a=mt[n];if(mt[n++]=null,s!==null&&r!==null){var l=s.pending;l===null?r.next=r:(r.next=l.next,l.next=r),s.pending=r}a!==0&&Lc(i,r,a)}}function Js(t,n,i,s){mt[ii++]=t,mt[ii++]=n,mt[ii++]=i,mt[ii++]=s,Ma|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function _a(t,n,i,s){return Js(t,n,i,s),$s(t)}function si(t,n){return Js(t,null,null,n),$s(t)}function Lc(t,n,i){t.lanes|=i;var s=t.alternate;s!==null&&(s.lanes|=i);for(var r=!1,a=t.return;a!==null;)a.childLanes|=i,s=a.alternate,s!==null&&(s.childLanes|=i),a.tag===22&&(t=a.stateNode,t===null||t._visibility&1||(r=!0)),t=a,a=a.return;return t.tag===3?(a=t.stateNode,r&&n!==null&&(r=31-st(i),t=a.hiddenUpdates,s=t[r],s===null?t[r]=[n]:s.push(n),n.lane=i|536870912),a):null}function $s(t){if(50<xs)throw xs=0,Fl=null,Error(d(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ri={};function ff(t,n,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,n,i,s){return new ff(t,n,i,s)}function Ua(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mt(t,n){var i=t.alternate;return i===null?(i=at(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Mc(t,n){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function er(t,n,i,s,r,a){var l=0;if(s=t,typeof t=="function")Ua(t)&&(l=1);else if(typeof t=="string")l=mx(t,i,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Se:return t=at(31,i,n,r),t.elementType=Se,t.lanes=a,t;case Y:return Nn(i.children,r,a,n);case q:l=8,r|=24;break;case F:return t=at(12,i,n,r|2),t.elementType=F,t.lanes=a,t;case te:return t=at(13,i,n,r),t.elementType=te,t.lanes=a,t;case Me:return t=at(19,i,n,r),t.elementType=Me,t.lanes=a,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case Z:l=10;break e;case U:l=9;break e;case ce:l=11;break e;case ze:l=14;break e;case _e:l=16,s=null;break e}l=29,i=Error(d(130,t===null?"null":typeof t,"")),s=null}return n=at(l,i,n,r),n.elementType=t,n.type=s,n.lanes=a,n}function Nn(t,n,i,s){return t=at(7,t,s,n),t.lanes=i,t}function Ha(t,n,i){return t=at(6,t,null,n),t.lanes=i,t}function qa(t,n,i){return n=at(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ai=[],li=0,tr=null,nr=0,jt=[],gt=0,Dn=null,_t=1,Ut="";function zn(t,n){ai[li++]=nr,ai[li++]=tr,tr=t,nr=n}function _c(t,n,i){jt[gt++]=_t,jt[gt++]=Ut,jt[gt++]=Dn,Dn=t;var s=_t;t=Ut;var r=32-st(s)-1;s&=~(1<<r),i+=1;var a=32-st(n)+r;if(30<a){var l=r-r%5;a=(s&(1<<l)-1).toString(32),s>>=l,r-=l,_t=1<<32-st(n)+r|i<<r|s,Ut=a+t}else _t=1<<a|i<<r|s,Ut=t}function Ia(t){t.return!==null&&(zn(t,1),_c(t,1,0))}function Pa(t){for(;t===tr;)tr=ai[--li],ai[li]=null,nr=ai[--li],ai[li]=null;for(;t===Dn;)Dn=jt[--gt],jt[gt]=null,Ut=jt[--gt],jt[gt]=null,_t=jt[--gt],jt[gt]=null}var We=null,Ce=null,ue=!1,Rn=null,Ct=!1,Fa=Error(d(519));function Ln(t){var n=Error(d(418,""));throw Xi(xt(n,t)),Fa}function Uc(t){var n=t.stateNode,i=t.type,s=t.memoizedProps;switch(n[Ye]=t,n[Ke]=s,i){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(i=0;i<js.length;i++)le(js[i],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":le("invalid",n),Jo(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Fs(n);break;case"select":le("invalid",n);break;case"textarea":le("invalid",n),ec(n,s.value,s.defaultValue,s.children),Fs(n)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||s.suppressHydrationWarning===!0||eu(n.textContent,i)?(s.popover!=null&&(le("beforetoggle",n),le("toggle",n)),s.onScroll!=null&&le("scroll",n),s.onScrollEnd!=null&&le("scrollend",n),s.onClick!=null&&(n.onclick=_r),n=!0):n=!1,n||Ln(t)}function Hc(t){for(We=t.return;We;)switch(We.tag){case 5:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:We=We.return}}function Vi(t){if(t!==We)return!1;if(!ue)return Hc(t),ue=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||so(t.type,t.memoizedProps)),i=!i),i&&Ce&&Ln(t),Hc(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(i=t.data,i==="/$"){if(n===0){Ce=kt(t.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++;t=t.nextSibling}Ce=null}}else n===27?(n=Ce,jn(t.type)?(t=oo,oo=null,Ce=t):Ce=n):Ce=We?kt(t.stateNode.nextSibling):null;return!0}function Yi(){Ce=We=null,ue=!1}function qc(){var t=Rn;return t!==null&&(et===null?et=t:et.push.apply(et,t),Rn=null),t}function Xi(t){Rn===null?Rn=[t]:Rn.push(t)}var Ba=R(null),Mn=null,Ht=null;function tn(t,n,i){H(Ba,n._currentValue),n._currentValue=i}function qt(t){t._currentValue=Ba.current,P(Ba)}function Ga(t,n,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===i)break;t=t.return}}function Va(t,n,i,s){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var a=r.dependencies;if(a!==null){var l=r.child;a=a.firstContext;e:for(;a!==null;){var c=a;a=r;for(var f=0;f<n.length;f++)if(c.context===n[f]){a.lanes|=i,c=a.alternate,c!==null&&(c.lanes|=i),Ga(a.return,i,t),s||(l=null);break e}a=c.next}}else if(r.tag===18){if(l=r.return,l===null)throw Error(d(341));l.lanes|=i,a=l.alternate,a!==null&&(a.lanes|=i),Ga(l,i,t),l=null}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===t){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}}function Qi(t,n,i,s){t=null;for(var r=n,a=!1;r!==null;){if(!a){if((r.flags&524288)!==0)a=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var l=r.alternate;if(l===null)throw Error(d(387));if(l=l.memoizedProps,l!==null){var c=r.type;rt(r.pendingProps.value,l.value)||(t!==null?t.push(c):t=[c])}}else if(r===nt.current){if(l=r.alternate,l===null)throw Error(d(387));l.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(Ts):t=[Ts])}r=r.return}t!==null&&Va(n,t,i,s),n.flags|=262144}function ir(t){for(t=t.firstContext;t!==null;){if(!rt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _n(t){Mn=t,Ht=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xe(t){return Ic(Mn,t)}function sr(t,n){return Mn===null&&_n(t),Ic(t,n)}function Ic(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},Ht===null){if(t===null)throw Error(d(308));Ht=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ht=Ht.next=n;return i}var xf=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},mf=o.unstable_scheduleCallback,jf=o.unstable_NormalPriority,Re={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ya(){return{controller:new xf,data:new Map,refCount:0}}function Wi(t){t.refCount--,t.refCount===0&&mf(jf,function(){t.controller.abort()})}var Ki=null,Xa=0,oi=0,ci=null;function gf(t,n){if(Ki===null){var i=Ki=[];Xa=0,oi=Wl(),ci={status:"pending",value:void 0,then:function(s){i.push(s)}}}return Xa++,n.then(Pc,Pc),n}function Pc(){if(--Xa===0&&Ki!==null){ci!==null&&(ci.status="fulfilled");var t=Ki;Ki=null,oi=0,ci=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yf(t,n){var i=[],s={status:"pending",value:null,reason:null,then:function(r){i.push(r)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var r=0;r<i.length;r++)(0,i[r])(n)},function(r){for(s.status="rejected",s.reason=r,r=0;r<i.length;r++)(0,i[r])(void 0)}),s}var Fc=O.S;O.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&gf(t,n),Fc!==null&&Fc(t,n)};var Un=R(null);function Qa(){var t=Un.current;return t!==null?t:be.pooledCache}function rr(t,n){n===null?H(Un,Un.current):H(Un,n.pool)}function Bc(){var t=Qa();return t===null?null:{parent:Re._currentValue,pool:t}}var Zi=Error(d(460)),Gc=Error(d(474)),ar=Error(d(542)),Wa={then:function(){}};function Vc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function lr(){}function Yc(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(lr,lr),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qc(t),t;default:if(typeof n.status=="string")n.then(lr,lr);else{if(t=be,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=s}},function(s){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qc(t),t}throw Ji=n,Zi}}var Ji=null;function Xc(){if(Ji===null)throw Error(d(459));var t=Ji;return Ji=null,t}function Qc(t){if(t===Zi||t===ar)throw Error(d(483))}var nn=!1;function Ka(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Za(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rn(t,n,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(pe&2)!==0){var r=s.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),s.pending=n,n=$s(t),Lc(t,null,i),n}return Js(t,s,n,i),$s(t)}function $i(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,Po(t,i)}}function Ja(t,n){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var r=null,a=null;if(i=i.firstBaseUpdate,i!==null){do{var l={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};a===null?r=a=l:a=a.next=l,i=i.next}while(i!==null);a===null?r=a=n:a=a.next=n}else r=a=n;i={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:s.shared,callbacks:s.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var $a=!1;function es(){if($a){var t=ci;if(t!==null)throw t}}function ts(t,n,i,s){$a=!1;var r=t.updateQueue;nn=!1;var a=r.firstBaseUpdate,l=r.lastBaseUpdate,c=r.shared.pending;if(c!==null){r.shared.pending=null;var f=c,w=f.next;f.next=null,l===null?a=w:l.next=w,l=f;var E=t.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==l&&(c===null?E.firstBaseUpdate=w:c.next=w,E.lastBaseUpdate=f))}if(a!==null){var z=r.baseState;l=0,E=w=f=null,c=a;do{var T=c.lane&-536870913,k=T!==c.lane;if(k?(oe&T)===T:(s&T)===T){T!==0&&T===oi&&($a=!0),E!==null&&(E=E.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var ee=t,K=c;T=n;var je=i;switch(K.tag){case 1:if(ee=K.payload,typeof ee=="function"){z=ee.call(je,z,T);break e}z=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=K.payload,T=typeof ee=="function"?ee.call(je,z,T):ee,T==null)break e;z=C({},z,T);break e;case 2:nn=!0}}T=c.callback,T!==null&&(t.flags|=64,k&&(t.flags|=8192),k=r.callbacks,k===null?r.callbacks=[T]:k.push(T))}else k={lane:T,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(w=E=k,f=z):E=E.next=k,l|=T;if(c=c.next,c===null){if(c=r.shared.pending,c===null)break;k=c,c=k.next,k.next=null,r.lastBaseUpdate=k,r.shared.pending=null}}while(!0);E===null&&(f=z),r.baseState=f,r.firstBaseUpdate=w,r.lastBaseUpdate=E,a===null&&(r.shared.lanes=0),pn|=l,t.lanes=l,t.memoizedState=z}}function Wc(t,n){if(typeof t!="function")throw Error(d(191,t));t.call(n)}function Kc(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Wc(i[t],n)}var di=R(null),or=R(0);function Zc(t,n){t=Yt,H(or,t),H(di,n),Yt=t|n.baseLanes}function el(){H(or,Yt),H(di,di.current)}function tl(){Yt=or.current,P(di),P(or)}var an=0,se=null,xe=null,Ne=null,cr=!1,hi=!1,Hn=!1,dr=0,ns=0,ui=null,bf=0;function Ee(){throw Error(d(321))}function nl(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!rt(t[i],n[i]))return!1;return!0}function il(t,n,i,s,r,a){return an=a,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Ld:Md,Hn=!1,a=i(s,r),Hn=!1,hi&&(a=$c(n,i,s,r)),Jc(t),a}function Jc(t){O.H=mr;var n=xe!==null&&xe.next!==null;if(an=0,Ne=xe=se=null,cr=!1,ns=0,ui=null,n)throw Error(d(300));t===null||He||(t=t.dependencies,t!==null&&ir(t)&&(He=!0))}function $c(t,n,i,s){se=t;var r=0;do{if(hi&&(ui=null),ns=0,hi=!1,25<=r)throw Error(d(301));if(r+=1,Ne=xe=null,t.updateQueue!=null){var a=t.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}O.H=Af,a=n(i,s)}while(hi);return a}function vf(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?is(n):n,t=t.useState()[0],(xe!==null?xe.memoizedState:null)!==t&&(se.flags|=1024),n}function sl(){var t=dr!==0;return dr=0,t}function rl(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function al(t){if(cr){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}cr=!1}an=0,Ne=xe=se=null,hi=!1,ns=dr=0,ui=null}function Je(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?se.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function De(){if(xe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var n=Ne===null?se.memoizedState:Ne.next;if(n!==null)Ne=n,xe=t;else{if(t===null)throw se.alternate===null?Error(d(467)):Error(d(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ne===null?se.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function is(t){var n=ns;return ns+=1,ui===null&&(ui=[]),t=Yc(ui,t,n),n=se,(Ne===null?n.memoizedState:Ne.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Ld:Md),t}function hr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return is(t);if(t.$$typeof===Z)return Xe(t)}throw Error(d(438,String(t)))}function ol(t){var n=null,i=se.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var s=se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=ll(),se.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),s=0;s<t;s++)i[s]=tt;return n.index++,i}function It(t,n){return typeof n=="function"?n(t):n}function ur(t){var n=De();return cl(n,xe,t)}function cl(t,n,i){var s=t.queue;if(s===null)throw Error(d(311));s.lastRenderedReducer=i;var r=t.baseQueue,a=s.pending;if(a!==null){if(r!==null){var l=r.next;r.next=a.next,a.next=l}n.baseQueue=r=a,s.pending=null}if(a=t.baseState,r===null)t.memoizedState=a;else{n=r.next;var c=l=null,f=null,w=n,E=!1;do{var z=w.lane&-536870913;if(z!==w.lane?(oe&z)===z:(an&z)===z){var T=w.revertLane;if(T===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),z===oi&&(E=!0);else if((an&T)===T){w=w.next,T===oi&&(E=!0);continue}else z={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(c=f=z,l=a):f=f.next=z,se.lanes|=T,pn|=T;z=w.action,Hn&&i(a,z),a=w.hasEagerState?w.eagerState:i(a,z)}else T={lane:z,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(c=f=T,l=a):f=f.next=T,se.lanes|=z,pn|=z;w=w.next}while(w!==null&&w!==n);if(f===null?l=a:f.next=c,!rt(a,t.memoizedState)&&(He=!0,E&&(i=ci,i!==null)))throw i;t.memoizedState=a,t.baseState=l,t.baseQueue=f,s.lastRenderedState=a}return r===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function dl(t){var n=De(),i=n.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=t;var s=i.dispatch,r=i.pending,a=n.memoizedState;if(r!==null){i.pending=null;var l=r=r.next;do a=t(a,l.action),l=l.next;while(l!==r);rt(a,n.memoizedState)||(He=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),i.lastRenderedState=a}return[a,s]}function ed(t,n,i){var s=se,r=De(),a=ue;if(a){if(i===void 0)throw Error(d(407));i=i()}else i=n();var l=!rt((xe||r).memoizedState,i);l&&(r.memoizedState=i,He=!0),r=r.queue;var c=id.bind(null,s,r,t);if(ss(2048,8,c,[t]),r.getSnapshot!==n||l||Ne!==null&&Ne.memoizedState.tag&1){if(s.flags|=2048,pi(9,pr(),nd.bind(null,s,r,i,n),null),be===null)throw Error(d(349));a||(an&124)!==0||td(s,n,i)}return i}function td(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=se.updateQueue,n===null?(n=ll(),se.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function nd(t,n,i,s){n.value=i,n.getSnapshot=s,sd(n)&&rd(t)}function id(t,n,i){return i(function(){sd(n)&&rd(t)})}function sd(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!rt(t,i)}catch{return!0}}function rd(t){var n=si(t,2);n!==null&&ht(n,t,2)}function hl(t){var n=Je();if(typeof t=="function"){var i=t;if(t=i(),Hn){Jt(!0);try{i()}finally{Jt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:t},n}function ad(t,n,i,s){return t.baseState=i,cl(t,xe,typeof s=="function"?s:It)}function wf(t,n,i,s,r){if(xr(t))throw Error(d(485));if(t=n.action,t!==null){var a={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){a.listeners.push(l)}};O.T!==null?i(!0):a.isTransition=!1,s(a),i=n.pending,i===null?(a.next=n.pending=a,ld(n,a)):(a.next=i.next,n.pending=i.next=a)}}function ld(t,n){var i=n.action,s=n.payload,r=t.state;if(n.isTransition){var a=O.T,l={};O.T=l;try{var c=i(r,s),f=O.S;f!==null&&f(l,c),od(t,n,c)}catch(w){ul(t,n,w)}finally{O.T=a}}else try{a=i(r,s),od(t,n,a)}catch(w){ul(t,n,w)}}function od(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){cd(t,n,s)},function(s){return ul(t,n,s)}):cd(t,n,i)}function cd(t,n,i){n.status="fulfilled",n.value=i,dd(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,ld(t,i)))}function ul(t,n,i){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=i,dd(n),n=n.next;while(n!==s)}t.action=null}function dd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function hd(t,n){return n}function ud(t,n){if(ue){var i=be.formState;if(i!==null){e:{var s=se;if(ue){if(Ce){t:{for(var r=Ce,a=Ct;r.nodeType!==8;){if(!a){r=null;break t}if(r=kt(r.nextSibling),r===null){r=null;break t}}a=r.data,r=a==="F!"||a==="F"?r:null}if(r){Ce=kt(r.nextSibling),s=r.data==="F!";break e}}Ln(s)}s=!1}s&&(n=i[0])}}return i=Je(),i.memoizedState=i.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hd,lastRenderedState:n},i.queue=s,i=Dd.bind(null,se,s),s.dispatch=i,s=hl(!1),a=jl.bind(null,se,!1,s.queue),s=Je(),r={state:n,dispatch:null,action:t,pending:null},s.queue=r,i=wf.bind(null,se,r,a,i),r.dispatch=i,s.memoizedState=t,[n,i,!1]}function pd(t){var n=De();return fd(n,xe,t)}function fd(t,n,i){if(n=cl(t,n,hd)[0],t=ur(It)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=is(n)}catch(l){throw l===Zi?ar:l}else s=n;n=De();var r=n.queue,a=r.dispatch;return i!==n.memoizedState&&(se.flags|=2048,pi(9,pr(),Tf.bind(null,r,i),null)),[s,a,t]}function Tf(t,n){t.action=n}function xd(t){var n=De(),i=xe;if(i!==null)return fd(n,i,t);De(),n=n.memoizedState,i=De();var s=i.queue.dispatch;return i.memoizedState=t,[n,s,!1]}function pi(t,n,i,s){return t={tag:t,create:i,deps:s,inst:n,next:null},n=se.updateQueue,n===null&&(n=ll(),se.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,n.lastEffect=t),t}function pr(){return{destroy:void 0,resource:void 0}}function md(){return De().memoizedState}function fr(t,n,i,s){var r=Je();s=s===void 0?null:s,se.flags|=t,r.memoizedState=pi(1|n,pr(),i,s)}function ss(t,n,i,s){var r=De();s=s===void 0?null:s;var a=r.memoizedState.inst;xe!==null&&s!==null&&nl(s,xe.memoizedState.deps)?r.memoizedState=pi(n,a,i,s):(se.flags|=t,r.memoizedState=pi(1|n,a,i,s))}function jd(t,n){fr(8390656,8,t,n)}function gd(t,n){ss(2048,8,t,n)}function yd(t,n){return ss(4,2,t,n)}function bd(t,n){return ss(4,4,t,n)}function vd(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function wd(t,n,i){i=i!=null?i.concat([t]):null,ss(4,4,vd.bind(null,n,t),i)}function pl(){}function Td(t,n){var i=De();n=n===void 0?null:n;var s=i.memoizedState;return n!==null&&nl(n,s[1])?s[0]:(i.memoizedState=[t,n],t)}function kd(t,n){var i=De();n=n===void 0?null:n;var s=i.memoizedState;if(n!==null&&nl(n,s[1]))return s[0];if(s=t(),Hn){Jt(!0);try{t()}finally{Jt(!1)}}return i.memoizedState=[s,n],s}function fl(t,n,i){return i===void 0||(an&1073741824)!==0?t.memoizedState=n:(t.memoizedState=i,t=Ah(),se.lanes|=t,pn|=t,i)}function Sd(t,n,i,s){return rt(i,n)?i:di.current!==null?(t=fl(t,i,s),rt(t,n)||(He=!0),t):(an&42)===0?(He=!0,t.memoizedState=i):(t=Ah(),se.lanes|=t,pn|=t,n)}function Cd(t,n,i,s,r){var a=I.p;I.p=a!==0&&8>a?a:8;var l=O.T,c={};O.T=c,jl(t,!1,n,i);try{var f=r(),w=O.S;if(w!==null&&w(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var E=yf(f,s);rs(t,n,E,dt(t))}else rs(t,n,s,dt(t))}catch(z){rs(t,n,{then:function(){},status:"rejected",reason:z},dt())}finally{I.p=a,O.T=l}}function kf(){}function xl(t,n,i,s){if(t.tag!==5)throw Error(d(476));var r=Ad(t).queue;Cd(t,r,n,$,i===null?kf:function(){return Ed(t),i(s)})}function Ad(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:$},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ed(t){var n=Ad(t).next.queue;rs(t,n,{},dt())}function ml(){return Xe(Ts)}function Od(){return De().memoizedState}function Nd(){return De().memoizedState}function Sf(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=dt();t=sn(i);var s=rn(n,t,i);s!==null&&(ht(s,n,i),$i(s,n,i)),n={cache:Ya()},t.payload=n;return}n=n.return}}function Cf(t,n,i){var s=dt();i={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},xr(t)?zd(n,i):(i=_a(t,n,i,s),i!==null&&(ht(i,t,s),Rd(i,n,s)))}function Dd(t,n,i){var s=dt();rs(t,n,i,s)}function rs(t,n,i,s){var r={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(xr(t))zd(n,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var l=n.lastRenderedState,c=a(l,i);if(r.hasEagerState=!0,r.eagerState=c,rt(c,l))return Js(t,n,r,0),be===null&&Zs(),!1}catch{}finally{}if(i=_a(t,n,r,s),i!==null)return ht(i,t,s),Rd(i,n,s),!0}return!1}function jl(t,n,i,s){if(s={lane:2,revertLane:Wl(),action:s,hasEagerState:!1,eagerState:null,next:null},xr(t)){if(n)throw Error(d(479))}else n=_a(t,i,s,2),n!==null&&ht(n,t,2)}function xr(t){var n=t.alternate;return t===se||n!==null&&n===se}function zd(t,n){hi=cr=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Rd(t,n,i){if((i&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,Po(t,i)}}var mr={readContext:Xe,use:hr,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee},Ld={readContext:Xe,use:hr,useCallback:function(t,n){return Je().memoizedState=[t,n===void 0?null:n],t},useContext:Xe,useEffect:jd,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,fr(4194308,4,vd.bind(null,n,t),i)},useLayoutEffect:function(t,n){return fr(4194308,4,t,n)},useInsertionEffect:function(t,n){fr(4,2,t,n)},useMemo:function(t,n){var i=Je();n=n===void 0?null:n;var s=t();if(Hn){Jt(!0);try{t()}finally{Jt(!1)}}return i.memoizedState=[s,n],s},useReducer:function(t,n,i){var s=Je();if(i!==void 0){var r=i(n);if(Hn){Jt(!0);try{i(n)}finally{Jt(!1)}}}else r=n;return s.memoizedState=s.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},s.queue=t,t=t.dispatch=Cf.bind(null,se,t),[s.memoizedState,t]},useRef:function(t){var n=Je();return t={current:t},n.memoizedState=t},useState:function(t){t=hl(t);var n=t.queue,i=Dd.bind(null,se,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:pl,useDeferredValue:function(t,n){var i=Je();return fl(i,t,n)},useTransition:function(){var t=hl(!1);return t=Cd.bind(null,se,t.queue,!0,!1),Je().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var s=se,r=Je();if(ue){if(i===void 0)throw Error(d(407));i=i()}else{if(i=n(),be===null)throw Error(d(349));(oe&124)!==0||td(s,n,i)}r.memoizedState=i;var a={value:i,getSnapshot:n};return r.queue=a,jd(id.bind(null,s,a,t),[t]),s.flags|=2048,pi(9,pr(),nd.bind(null,s,a,i,n),null),i},useId:function(){var t=Je(),n=be.identifierPrefix;if(ue){var i=Ut,s=_t;i=(s&~(1<<32-st(s)-1)).toString(32)+i,n="«"+n+"R"+i,i=dr++,0<i&&(n+="H"+i.toString(32)),n+="»"}else i=bf++,n="«"+n+"r"+i.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:ml,useFormState:ud,useActionState:ud,useOptimistic:function(t){var n=Je();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=jl.bind(null,se,!0,i),i.dispatch=n,[t,n]},useMemoCache:ol,useCacheRefresh:function(){return Je().memoizedState=Sf.bind(null,se)}},Md={readContext:Xe,use:hr,useCallback:Td,useContext:Xe,useEffect:gd,useImperativeHandle:wd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:kd,useReducer:ur,useRef:md,useState:function(){return ur(It)},useDebugValue:pl,useDeferredValue:function(t,n){var i=De();return Sd(i,xe.memoizedState,t,n)},useTransition:function(){var t=ur(It)[0],n=De().memoizedState;return[typeof t=="boolean"?t:is(t),n]},useSyncExternalStore:ed,useId:Od,useHostTransitionStatus:ml,useFormState:pd,useActionState:pd,useOptimistic:function(t,n){var i=De();return ad(i,xe,t,n)},useMemoCache:ol,useCacheRefresh:Nd},Af={readContext:Xe,use:hr,useCallback:Td,useContext:Xe,useEffect:gd,useImperativeHandle:wd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:kd,useReducer:dl,useRef:md,useState:function(){return dl(It)},useDebugValue:pl,useDeferredValue:function(t,n){var i=De();return xe===null?fl(i,t,n):Sd(i,xe.memoizedState,t,n)},useTransition:function(){var t=dl(It)[0],n=De().memoizedState;return[typeof t=="boolean"?t:is(t),n]},useSyncExternalStore:ed,useId:Od,useHostTransitionStatus:ml,useFormState:xd,useActionState:xd,useOptimistic:function(t,n){var i=De();return xe!==null?ad(i,xe,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:ol,useCacheRefresh:Nd},fi=null,as=0;function jr(t){var n=as;return as+=1,fi===null&&(fi=[]),Yc(fi,t,n)}function ls(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gr(t,n){throw n.$$typeof===L?Error(d(525)):(t=Object.prototype.toString.call(n),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function _d(t){var n=t._init;return n(t._payload)}function Ud(t){function n(y,j){if(t){var v=y.deletions;v===null?(y.deletions=[j],y.flags|=16):v.push(j)}}function i(y,j){if(!t)return null;for(;j!==null;)n(y,j),j=j.sibling;return null}function s(y){for(var j=new Map;y!==null;)y.key!==null?j.set(y.key,y):j.set(y.index,y),y=y.sibling;return j}function r(y,j){return y=Mt(y,j),y.index=0,y.sibling=null,y}function a(y,j,v){return y.index=v,t?(v=y.alternate,v!==null?(v=v.index,v<j?(y.flags|=67108866,j):v):(y.flags|=67108866,j)):(y.flags|=1048576,j)}function l(y){return t&&y.alternate===null&&(y.flags|=67108866),y}function c(y,j,v,D){return j===null||j.tag!==6?(j=Ha(v,y.mode,D),j.return=y,j):(j=r(j,v),j.return=y,j)}function f(y,j,v,D){var G=v.type;return G===Y?E(y,j,v.props.children,D,v.key):j!==null&&(j.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===_e&&_d(G)===j.type)?(j=r(j,v.props),ls(j,v),j.return=y,j):(j=er(v.type,v.key,v.props,null,y.mode,D),ls(j,v),j.return=y,j)}function w(y,j,v,D){return j===null||j.tag!==4||j.stateNode.containerInfo!==v.containerInfo||j.stateNode.implementation!==v.implementation?(j=qa(v,y.mode,D),j.return=y,j):(j=r(j,v.children||[]),j.return=y,j)}function E(y,j,v,D,G){return j===null||j.tag!==7?(j=Nn(v,y.mode,D,G),j.return=y,j):(j=r(j,v),j.return=y,j)}function z(y,j,v){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Ha(""+j,y.mode,v),j.return=y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return v=er(j.type,j.key,j.props,null,y.mode,v),ls(v,j),v.return=y,v;case Q:return j=qa(j,y.mode,v),j.return=y,j;case _e:var D=j._init;return j=D(j._payload),z(y,j,v)}if(Ve(j)||Ge(j))return j=Nn(j,y.mode,v,null),j.return=y,j;if(typeof j.then=="function")return z(y,jr(j),v);if(j.$$typeof===Z)return z(y,sr(y,j),v);gr(y,j)}return null}function T(y,j,v,D){var G=j!==null?j.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return G!==null?null:c(y,j,""+v,D);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case M:return v.key===G?f(y,j,v,D):null;case Q:return v.key===G?w(y,j,v,D):null;case _e:return G=v._init,v=G(v._payload),T(y,j,v,D)}if(Ve(v)||Ge(v))return G!==null?null:E(y,j,v,D,null);if(typeof v.then=="function")return T(y,j,jr(v),D);if(v.$$typeof===Z)return T(y,j,sr(y,v),D);gr(y,v)}return null}function k(y,j,v,D,G){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return y=y.get(v)||null,c(j,y,""+D,G);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case M:return y=y.get(D.key===null?v:D.key)||null,f(j,y,D,G);case Q:return y=y.get(D.key===null?v:D.key)||null,w(j,y,D,G);case _e:var re=D._init;return D=re(D._payload),k(y,j,v,D,G)}if(Ve(D)||Ge(D))return y=y.get(v)||null,E(j,y,D,G,null);if(typeof D.then=="function")return k(y,j,v,jr(D),G);if(D.$$typeof===Z)return k(y,j,v,sr(j,D),G);gr(j,D)}return null}function ee(y,j,v,D){for(var G=null,re=null,X=j,J=j=0,Ie=null;X!==null&&J<v.length;J++){X.index>J?(Ie=X,X=null):Ie=X.sibling;var he=T(y,X,v[J],D);if(he===null){X===null&&(X=Ie);break}t&&X&&he.alternate===null&&n(y,X),j=a(he,j,J),re===null?G=he:re.sibling=he,re=he,X=Ie}if(J===v.length)return i(y,X),ue&&zn(y,J),G;if(X===null){for(;J<v.length;J++)X=z(y,v[J],D),X!==null&&(j=a(X,j,J),re===null?G=X:re.sibling=X,re=X);return ue&&zn(y,J),G}for(X=s(X);J<v.length;J++)Ie=k(X,y,J,v[J],D),Ie!==null&&(t&&Ie.alternate!==null&&X.delete(Ie.key===null?J:Ie.key),j=a(Ie,j,J),re===null?G=Ie:re.sibling=Ie,re=Ie);return t&&X.forEach(function(wn){return n(y,wn)}),ue&&zn(y,J),G}function K(y,j,v,D){if(v==null)throw Error(d(151));for(var G=null,re=null,X=j,J=j=0,Ie=null,he=v.next();X!==null&&!he.done;J++,he=v.next()){X.index>J?(Ie=X,X=null):Ie=X.sibling;var wn=T(y,X,he.value,D);if(wn===null){X===null&&(X=Ie);break}t&&X&&wn.alternate===null&&n(y,X),j=a(wn,j,J),re===null?G=wn:re.sibling=wn,re=wn,X=Ie}if(he.done)return i(y,X),ue&&zn(y,J),G;if(X===null){for(;!he.done;J++,he=v.next())he=z(y,he.value,D),he!==null&&(j=a(he,j,J),re===null?G=he:re.sibling=he,re=he);return ue&&zn(y,J),G}for(X=s(X);!he.done;J++,he=v.next())he=k(X,y,J,he.value,D),he!==null&&(t&&he.alternate!==null&&X.delete(he.key===null?J:he.key),j=a(he,j,J),re===null?G=he:re.sibling=he,re=he);return t&&X.forEach(function(Ex){return n(y,Ex)}),ue&&zn(y,J),G}function je(y,j,v,D){if(typeof v=="object"&&v!==null&&v.type===Y&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case M:e:{for(var G=v.key;j!==null;){if(j.key===G){if(G=v.type,G===Y){if(j.tag===7){i(y,j.sibling),D=r(j,v.props.children),D.return=y,y=D;break e}}else if(j.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===_e&&_d(G)===j.type){i(y,j.sibling),D=r(j,v.props),ls(D,v),D.return=y,y=D;break e}i(y,j);break}else n(y,j);j=j.sibling}v.type===Y?(D=Nn(v.props.children,y.mode,D,v.key),D.return=y,y=D):(D=er(v.type,v.key,v.props,null,y.mode,D),ls(D,v),D.return=y,y=D)}return l(y);case Q:e:{for(G=v.key;j!==null;){if(j.key===G)if(j.tag===4&&j.stateNode.containerInfo===v.containerInfo&&j.stateNode.implementation===v.implementation){i(y,j.sibling),D=r(j,v.children||[]),D.return=y,y=D;break e}else{i(y,j);break}else n(y,j);j=j.sibling}D=qa(v,y.mode,D),D.return=y,y=D}return l(y);case _e:return G=v._init,v=G(v._payload),je(y,j,v,D)}if(Ve(v))return ee(y,j,v,D);if(Ge(v)){if(G=Ge(v),typeof G!="function")throw Error(d(150));return v=G.call(v),K(y,j,v,D)}if(typeof v.then=="function")return je(y,j,jr(v),D);if(v.$$typeof===Z)return je(y,j,sr(y,v),D);gr(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,j!==null&&j.tag===6?(i(y,j.sibling),D=r(j,v),D.return=y,y=D):(i(y,j),D=Ha(v,y.mode,D),D.return=y,y=D),l(y)):i(y,j)}return function(y,j,v,D){try{as=0;var G=je(y,j,v,D);return fi=null,G}catch(X){if(X===Zi||X===ar)throw X;var re=at(29,X,null,y.mode);return re.lanes=D,re.return=y,re}finally{}}}var xi=Ud(!0),Hd=Ud(!1),yt=R(null),At=null;function ln(t){var n=t.alternate;H(Le,Le.current&1),H(yt,t),At===null&&(n===null||di.current!==null||n.memoizedState!==null)&&(At=t)}function qd(t){if(t.tag===22){if(H(Le,Le.current),H(yt,t),At===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(At=t)}}else on()}function on(){H(Le,Le.current),H(yt,yt.current)}function Pt(t){P(yt),At===t&&(At=null),P(Le)}var Le=R(0);function yr(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||lo(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function gl(t,n,i,s){n=t.memoizedState,i=i(s,n),i=i==null?n:C({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var yl={enqueueSetState:function(t,n,i){t=t._reactInternals;var s=dt(),r=sn(s);r.payload=n,i!=null&&(r.callback=i),n=rn(t,r,s),n!==null&&(ht(n,t,s),$i(n,t,s))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var s=dt(),r=sn(s);r.tag=1,r.payload=n,i!=null&&(r.callback=i),n=rn(t,r,s),n!==null&&(ht(n,t,s),$i(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=dt(),s=sn(i);s.tag=2,n!=null&&(s.callback=n),n=rn(t,s,i),n!==null&&(ht(n,t,i),$i(n,t,i))}};function Id(t,n,i,s,r,a,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,a,l):n.prototype&&n.prototype.isPureReactComponent?!Bi(i,s)||!Bi(r,a):!0}function Pd(t,n,i,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==t&&yl.enqueueReplaceState(n,n.state,null)}function qn(t,n){var i=n;if("ref"in n){i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}if(t=t.defaultProps){i===n&&(i=C({},i));for(var r in t)i[r]===void 0&&(i[r]=t[r])}return i}var br=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Fd(t){br(t)}function Bd(t){console.error(t)}function Gd(t){br(t)}function vr(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Vd(t,n,i){try{var s=t.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function bl(t,n,i){return i=sn(i),i.tag=3,i.payload={element:null},i.callback=function(){vr(t,n)},i}function Yd(t){return t=sn(t),t.tag=3,t}function Xd(t,n,i,s){var r=i.type.getDerivedStateFromError;if(typeof r=="function"){var a=s.value;t.payload=function(){return r(a)},t.callback=function(){Vd(n,i,s)}}var l=i.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Vd(n,i,s),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var c=s.stack;this.componentDidCatch(s.value,{componentStack:c!==null?c:""})})}function Ef(t,n,i,s,r){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=i.alternate,n!==null&&Qi(n,i,r,!0),i=yt.current,i!==null){switch(i.tag){case 13:return At===null?Gl():i.alternate===null&&Ae===0&&(Ae=3),i.flags&=-257,i.flags|=65536,i.lanes=r,s===Wa?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([s]):n.add(s),Yl(t,s,r)),!1;case 22:return i.flags|=65536,s===Wa?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([s]):i.add(s)),Yl(t,s,r)),!1}throw Error(d(435,i.tag))}return Yl(t,s,r),Gl(),!1}if(ue)return n=yt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,s!==Fa&&(t=Error(d(422),{cause:s}),Xi(xt(t,i)))):(s!==Fa&&(n=Error(d(423),{cause:s}),Xi(xt(n,i))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,s=xt(s,i),r=bl(t.stateNode,s,r),Ja(t,r),Ae!==4&&(Ae=2)),!1;var a=Error(d(520),{cause:s});if(a=xt(a,i),fs===null?fs=[a]:fs.push(a),Ae!==4&&(Ae=2),n===null)return!0;s=xt(s,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=r&-r,i.lanes|=t,t=bl(i.stateNode,s,t),Ja(i,t),!1;case 1:if(n=i.type,a=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(fn===null||!fn.has(a))))return i.flags|=65536,r&=-r,i.lanes|=r,r=Yd(r),Xd(r,t,i,s),Ja(i,r),!1}i=i.return}while(i!==null);return!1}var Qd=Error(d(461)),He=!1;function Pe(t,n,i,s){n.child=t===null?Hd(n,null,i,s):xi(n,t.child,i,s)}function Wd(t,n,i,s,r){i=i.render;var a=n.ref;if("ref"in s){var l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}else l=s;return _n(n),s=il(t,n,i,l,a,r),c=sl(),t!==null&&!He?(rl(t,n,r),Ft(t,n,r)):(ue&&c&&Ia(n),n.flags|=1,Pe(t,n,s,r),n.child)}function Kd(t,n,i,s,r){if(t===null){var a=i.type;return typeof a=="function"&&!Ua(a)&&a.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=a,Zd(t,n,a,s,r)):(t=er(i.type,null,s,n,n.mode,r),t.ref=n.ref,t.return=n,n.child=t)}if(a=t.child,!El(t,r)){var l=a.memoizedProps;if(i=i.compare,i=i!==null?i:Bi,i(l,s)&&t.ref===n.ref)return Ft(t,n,r)}return n.flags|=1,t=Mt(a,s),t.ref=n.ref,t.return=n,n.child=t}function Zd(t,n,i,s,r){if(t!==null){var a=t.memoizedProps;if(Bi(a,s)&&t.ref===n.ref)if(He=!1,n.pendingProps=s=a,El(t,r))(t.flags&131072)!==0&&(He=!0);else return n.lanes=t.lanes,Ft(t,n,r)}return vl(t,n,i,s,r)}function Jd(t,n,i){var s=n.pendingProps,r=s.children,a=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=a!==null?a.baseLanes|i:i,t!==null){for(r=n.child=t.child,a=0;r!==null;)a=a|r.lanes|r.childLanes,r=r.sibling;n.childLanes=a&~s}else n.childLanes=0,n.child=null;return $d(t,n,s,i)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&rr(n,a!==null?a.cachePool:null),a!==null?Zc(n,a):el(),qd(n);else return n.lanes=n.childLanes=536870912,$d(t,n,a!==null?a.baseLanes|i:i,i)}else a!==null?(rr(n,a.cachePool),Zc(n,a),on(),n.memoizedState=null):(t!==null&&rr(n,null),el(),on());return Pe(t,n,r,i),n.child}function $d(t,n,i,s){var r=Qa();return r=r===null?null:{parent:Re._currentValue,pool:r},n.memoizedState={baseLanes:i,cachePool:r},t!==null&&rr(n,null),el(),qd(n),t!==null&&Qi(t,n,s,!0),null}function wr(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(d(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function vl(t,n,i,s,r){return _n(n),i=il(t,n,i,s,void 0,r),s=sl(),t!==null&&!He?(rl(t,n,r),Ft(t,n,r)):(ue&&s&&Ia(n),n.flags|=1,Pe(t,n,i,r),n.child)}function eh(t,n,i,s,r,a){return _n(n),n.updateQueue=null,i=$c(n,s,i,r),Jc(t),s=sl(),t!==null&&!He?(rl(t,n,a),Ft(t,n,a)):(ue&&s&&Ia(n),n.flags|=1,Pe(t,n,i,a),n.child)}function th(t,n,i,s,r){if(_n(n),n.stateNode===null){var a=ri,l=i.contextType;typeof l=="object"&&l!==null&&(a=Xe(l)),a=new i(s,a),n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=yl,n.stateNode=a,a._reactInternals=n,a=n.stateNode,a.props=s,a.state=n.memoizedState,a.refs={},Ka(n),l=i.contextType,a.context=typeof l=="object"&&l!==null?Xe(l):ri,a.state=n.memoizedState,l=i.getDerivedStateFromProps,typeof l=="function"&&(gl(n,i,l,s),a.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(l=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),l!==a.state&&yl.enqueueReplaceState(a,a.state,null),ts(n,s,a,r),es(),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){a=n.stateNode;var c=n.memoizedProps,f=qn(i,c);a.props=f;var w=a.context,E=i.contextType;l=ri,typeof E=="object"&&E!==null&&(l=Xe(E));var z=i.getDerivedStateFromProps;E=typeof z=="function"||typeof a.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,E||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c||w!==l)&&Pd(n,a,s,l),nn=!1;var T=n.memoizedState;a.state=T,ts(n,s,a,r),es(),w=n.memoizedState,c||T!==w||nn?(typeof z=="function"&&(gl(n,i,z,s),w=n.memoizedState),(f=nn||Id(n,i,f,s,T,w,l))?(E||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=w),a.props=s,a.state=w,a.context=l,s=f):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{a=n.stateNode,Za(t,n),l=n.memoizedProps,E=qn(i,l),a.props=E,z=n.pendingProps,T=a.context,w=i.contextType,f=ri,typeof w=="object"&&w!==null&&(f=Xe(w)),c=i.getDerivedStateFromProps,(w=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==z||T!==f)&&Pd(n,a,s,f),nn=!1,T=n.memoizedState,a.state=T,ts(n,s,a,r),es();var k=n.memoizedState;l!==z||T!==k||nn||t!==null&&t.dependencies!==null&&ir(t.dependencies)?(typeof c=="function"&&(gl(n,i,c,s),k=n.memoizedState),(E=nn||Id(n,i,E,s,T,k,f)||t!==null&&t.dependencies!==null&&ir(t.dependencies))?(w||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,k,f),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,k,f)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&T===t.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&T===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=k),a.props=s,a.state=k,a.context=f,s=E):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&T===t.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&T===t.memoizedState||(n.flags|=1024),s=!1)}return a=s,wr(t,n),s=(n.flags&128)!==0,a||s?(a=n.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:a.render(),n.flags|=1,t!==null&&s?(n.child=xi(n,t.child,null,r),n.child=xi(n,null,i,r)):Pe(t,n,i,r),n.memoizedState=a.state,t=n.child):t=Ft(t,n,r),t}function nh(t,n,i,s){return Yi(),n.flags|=256,Pe(t,n,i,s),n.child}var wl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tl(t){return{baseLanes:t,cachePool:Bc()}}function kl(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=bt),t}function ih(t,n,i){var s=n.pendingProps,r=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(Le.current&2)!==0),l&&(r=!0,n.flags&=-129),l=(n.flags&32)!==0,n.flags&=-33,t===null){if(ue){if(r?ln(n):on(),ue){var c=Ce,f;if(f=c){e:{for(f=c,c=Ct;f.nodeType!==8;){if(!c){c=null;break e}if(f=kt(f.nextSibling),f===null){c=null;break e}}c=f}c!==null?(n.memoizedState={dehydrated:c,treeContext:Dn!==null?{id:_t,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},f=at(18,null,null,0),f.stateNode=c,f.return=n,n.child=f,We=n,Ce=null,f=!0):f=!1}f||Ln(n)}if(c=n.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return lo(c)?n.lanes=32:n.lanes=536870912,null;Pt(n)}return c=s.children,s=s.fallback,r?(on(),r=n.mode,c=Tr({mode:"hidden",children:c},r),s=Nn(s,r,i,null),c.return=n,s.return=n,c.sibling=s,n.child=c,r=n.child,r.memoizedState=Tl(i),r.childLanes=kl(t,l,i),n.memoizedState=wl,s):(ln(n),Sl(n,c))}if(f=t.memoizedState,f!==null&&(c=f.dehydrated,c!==null)){if(a)n.flags&256?(ln(n),n.flags&=-257,n=Cl(t,n,i)):n.memoizedState!==null?(on(),n.child=t.child,n.flags|=128,n=null):(on(),r=s.fallback,c=n.mode,s=Tr({mode:"visible",children:s.children},c),r=Nn(r,c,i,null),r.flags|=2,s.return=n,r.return=n,s.sibling=r,n.child=s,xi(n,t.child,null,i),s=n.child,s.memoizedState=Tl(i),s.childLanes=kl(t,l,i),n.memoizedState=wl,n=r);else if(ln(n),lo(c)){if(l=c.nextSibling&&c.nextSibling.dataset,l)var w=l.dgst;l=w,s=Error(d(419)),s.stack="",s.digest=l,Xi({value:s,source:null,stack:null}),n=Cl(t,n,i)}else if(He||Qi(t,n,i,!1),l=(i&t.childLanes)!==0,He||l){if(l=be,l!==null&&(s=i&-i,s=(s&42)!==0?1:oa(s),s=(s&(l.suspendedLanes|i))!==0?0:s,s!==0&&s!==f.retryLane))throw f.retryLane=s,si(t,s),ht(l,t,s),Qd;c.data==="$?"||Gl(),n=Cl(t,n,i)}else c.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=f.treeContext,Ce=kt(c.nextSibling),We=n,ue=!0,Rn=null,Ct=!1,t!==null&&(jt[gt++]=_t,jt[gt++]=Ut,jt[gt++]=Dn,_t=t.id,Ut=t.overflow,Dn=n),n=Sl(n,s.children),n.flags|=4096);return n}return r?(on(),r=s.fallback,c=n.mode,f=t.child,w=f.sibling,s=Mt(f,{mode:"hidden",children:s.children}),s.subtreeFlags=f.subtreeFlags&65011712,w!==null?r=Mt(w,r):(r=Nn(r,c,i,null),r.flags|=2),r.return=n,s.return=n,s.sibling=r,n.child=s,s=r,r=n.child,c=t.child.memoizedState,c===null?c=Tl(i):(f=c.cachePool,f!==null?(w=Re._currentValue,f=f.parent!==w?{parent:w,pool:w}:f):f=Bc(),c={baseLanes:c.baseLanes|i,cachePool:f}),r.memoizedState=c,r.childLanes=kl(t,l,i),n.memoizedState=wl,s):(ln(n),i=t.child,t=i.sibling,i=Mt(i,{mode:"visible",children:s.children}),i.return=n,i.sibling=null,t!==null&&(l=n.deletions,l===null?(n.deletions=[t],n.flags|=16):l.push(t)),n.child=i,n.memoizedState=null,i)}function Sl(t,n){return n=Tr({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tr(t,n){return t=at(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Cl(t,n,i){return xi(n,t.child,null,i),t=Sl(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function sh(t,n,i){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Ga(t.return,n,i)}function Al(t,n,i,s,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:r}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=i,a.tailMode=r)}function rh(t,n,i){var s=n.pendingProps,r=s.revealOrder,a=s.tail;if(Pe(t,n,s.children,i),s=Le.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sh(t,i,n);else if(t.tag===19)sh(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(H(Le,s),r){case"forwards":for(i=n.child,r=null;i!==null;)t=i.alternate,t!==null&&yr(t)===null&&(r=i),i=i.sibling;i=r,i===null?(r=n.child,n.child=null):(r=i.sibling,i.sibling=null),Al(n,!1,r,i,a);break;case"backwards":for(i=null,r=n.child,n.child=null;r!==null;){if(t=r.alternate,t!==null&&yr(t)===null){n.child=r;break}t=r.sibling,r.sibling=i,i=r,r=t}Al(n,!0,i,null,a);break;case"together":Al(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ft(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),pn|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Qi(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(d(153));if(n.child!==null){for(t=n.child,i=Mt(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Mt(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function El(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ir(t)))}function Of(t,n,i){switch(n.tag){case 3:ve(n,n.stateNode.containerInfo),tn(n,Re,t.memoizedState.cache),Yi();break;case 27:case 5:ia(n);break;case 4:ve(n,n.stateNode.containerInfo);break;case 10:tn(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ln(n),n.flags|=128,null):(i&n.child.childLanes)!==0?ih(t,n,i):(ln(n),t=Ft(t,n,i),t!==null?t.sibling:null);ln(n);break;case 19:var r=(t.flags&128)!==0;if(s=(i&n.childLanes)!==0,s||(Qi(t,n,i,!1),s=(i&n.childLanes)!==0),r){if(s)return rh(t,n,i);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),H(Le,Le.current),s)break;return null;case 22:case 23:return n.lanes=0,Jd(t,n,i);case 24:tn(n,Re,t.memoizedState.cache)}return Ft(t,n,i)}function ah(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)He=!0;else{if(!El(t,i)&&(n.flags&128)===0)return He=!1,Of(t,n,i);He=(t.flags&131072)!==0}else He=!1,ue&&(n.flags&1048576)!==0&&_c(n,nr,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var s=n.elementType,r=s._init;if(s=r(s._payload),n.type=s,typeof s=="function")Ua(s)?(t=qn(s,t),n.tag=1,n=th(null,n,s,t,i)):(n.tag=0,n=vl(null,n,s,t,i));else{if(s!=null){if(r=s.$$typeof,r===ce){n.tag=11,n=Wd(null,n,s,t,i);break e}else if(r===ze){n.tag=14,n=Kd(null,n,s,t,i);break e}}throw n=kn(s)||s,Error(d(306,n,""))}}return n;case 0:return vl(t,n,n.type,n.pendingProps,i);case 1:return s=n.type,r=qn(s,n.pendingProps),th(t,n,s,r,i);case 3:e:{if(ve(n,n.stateNode.containerInfo),t===null)throw Error(d(387));s=n.pendingProps;var a=n.memoizedState;r=a.element,Za(t,n),ts(n,s,null,i);var l=n.memoizedState;if(s=l.cache,tn(n,Re,s),s!==a.cache&&Va(n,[Re],i,!0),es(),s=l.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:l.cache},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){n=nh(t,n,s,i);break e}else if(s!==r){r=xt(Error(d(424)),n),Xi(r),n=nh(t,n,s,i);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ce=kt(t.firstChild),We=n,ue=!0,Rn=null,Ct=!0,i=Hd(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Yi(),s===r){n=Ft(t,n,i);break e}Pe(t,n,s,i)}n=n.child}return n;case 26:return wr(t,n),t===null?(i=du(n.type,null,n.pendingProps,null))?n.memoizedState=i:ue||(i=n.type,t=n.pendingProps,s=Ur(ne.current).createElement(i),s[Ye]=n,s[Ke]=t,Be(s,i,t),Ue(s),n.stateNode=s):n.memoizedState=du(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ia(n),t===null&&ue&&(s=n.stateNode=lu(n.type,n.pendingProps,ne.current),We=n,Ct=!0,r=Ce,jn(n.type)?(oo=r,Ce=kt(s.firstChild)):Ce=r),Pe(t,n,n.pendingProps.children,i),wr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ue&&((r=s=Ce)&&(s=ix(s,n.type,n.pendingProps,Ct),s!==null?(n.stateNode=s,We=n,Ce=kt(s.firstChild),Ct=!1,r=!0):r=!1),r||Ln(n)),ia(n),r=n.type,a=n.pendingProps,l=t!==null?t.memoizedProps:null,s=a.children,so(r,a)?s=null:l!==null&&so(r,l)&&(n.flags|=32),n.memoizedState!==null&&(r=il(t,n,vf,null,null,i),Ts._currentValue=r),wr(t,n),Pe(t,n,s,i),n.child;case 6:return t===null&&ue&&((t=i=Ce)&&(i=sx(i,n.pendingProps,Ct),i!==null?(n.stateNode=i,We=n,Ce=null,t=!0):t=!1),t||Ln(n)),null;case 13:return ih(t,n,i);case 4:return ve(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=xi(n,null,s,i):Pe(t,n,s,i),n.child;case 11:return Wd(t,n,n.type,n.pendingProps,i);case 7:return Pe(t,n,n.pendingProps,i),n.child;case 8:return Pe(t,n,n.pendingProps.children,i),n.child;case 12:return Pe(t,n,n.pendingProps.children,i),n.child;case 10:return s=n.pendingProps,tn(n,n.type,s.value),Pe(t,n,s.children,i),n.child;case 9:return r=n.type._context,s=n.pendingProps.children,_n(n),r=Xe(r),s=s(r),n.flags|=1,Pe(t,n,s,i),n.child;case 14:return Kd(t,n,n.type,n.pendingProps,i);case 15:return Zd(t,n,n.type,n.pendingProps,i);case 19:return rh(t,n,i);case 31:return s=n.pendingProps,i=n.mode,s={mode:s.mode,children:s.children},t===null?(i=Tr(s,i),i.ref=n.ref,n.child=i,i.return=n,n=i):(i=Mt(t.child,s),i.ref=n.ref,n.child=i,i.return=n,n=i),n;case 22:return Jd(t,n,i);case 24:return _n(n),s=Xe(Re),t===null?(r=Qa(),r===null&&(r=be,a=Ya(),r.pooledCache=a,a.refCount++,a!==null&&(r.pooledCacheLanes|=i),r=a),n.memoizedState={parent:s,cache:r},Ka(n),tn(n,Re,r)):((t.lanes&i)!==0&&(Za(t,n),ts(n,null,null,i),es()),r=t.memoizedState,a=n.memoizedState,r.parent!==s?(r={parent:s,cache:s},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),tn(n,Re,s)):(s=a.cache,tn(n,Re,s),s!==r.cache&&Va(n,[Re],i,!0))),Pe(t,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function Bt(t){t.flags|=4}function lh(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xu(n)){if(n=yt.current,n!==null&&((oe&4194048)===oe?At!==null:(oe&62914560)!==oe&&(oe&536870912)===0||n!==At))throw Ji=Wa,Gc;t.flags|=8192}}function kr(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?qo():536870912,t.lanes|=n,yi|=n)}function os(t,n){if(!ue)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Te(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(n)for(var r=t.child;r!==null;)i|=r.lanes|r.childLanes,s|=r.subtreeFlags&65011712,s|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)i|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=s,t.childLanes=i,n}function Nf(t,n,i){var s=n.pendingProps;switch(Pa(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(n),null;case 1:return Te(n),null;case 3:return i=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),qt(Re),Zt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Vi(n)?Bt(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qc())),Te(n),null;case 26:return i=n.memoizedState,t===null?(Bt(n),i!==null?(Te(n),lh(n,i)):(Te(n),n.flags&=-16777217)):i?i!==t.memoizedState?(Bt(n),Te(n),lh(n,i)):(Te(n),n.flags&=-16777217):(t.memoizedProps!==s&&Bt(n),Te(n),n.flags&=-16777217),null;case 27:Ms(n),i=ne.current;var r=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Bt(n);else{if(!s){if(n.stateNode===null)throw Error(d(166));return Te(n),null}t=W.current,Vi(n)?Uc(n):(t=lu(r,s,i),n.stateNode=t,Bt(n))}return Te(n),null;case 5:if(Ms(n),i=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Bt(n);else{if(!s){if(n.stateNode===null)throw Error(d(166));return Te(n),null}if(t=W.current,Vi(n))Uc(n);else{switch(r=Ur(ne.current),t){case 1:t=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:t=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":t=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":t=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":t=r.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?r.createElement("select",{is:s.is}):r.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?r.createElement(i,{is:s.is}):r.createElement(i)}}t[Ye]=n,t[Ke]=s;e:for(r=n.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}n.stateNode=t;e:switch(Be(t,i,s),i){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Bt(n)}}return Te(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Bt(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(d(166));if(t=ne.current,Vi(n)){if(t=n.stateNode,i=n.memoizedProps,s=null,r=We,r!==null)switch(r.tag){case 27:case 5:s=r.memoizedProps}t[Ye]=n,t=!!(t.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||eu(t.nodeValue,i)),t||Ln(n)}else t=Ur(t).createTextNode(s),t[Ye]=n,n.stateNode=t}return Te(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=Vi(n),s!==null&&s.dehydrated!==null){if(t===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[Ye]=n}else Yi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Te(n),r=!1}else r=qc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(Pt(n),n):(Pt(n),null)}if(Pt(n),(n.flags&128)!==0)return n.lanes=i,n;if(i=s!==null,t=t!==null&&t.memoizedState!==null,i){s=n.child,r=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(r=s.alternate.memoizedState.cachePool.pool);var a=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(a=s.memoizedState.cachePool.pool),a!==r&&(s.flags|=2048)}return i!==t&&i&&(n.child.flags|=8192),kr(n,n.updateQueue),Te(n),null;case 4:return Zt(),t===null&&$l(n.stateNode.containerInfo),Te(n),null;case 10:return qt(n.type),Te(n),null;case 19:if(P(Le),r=n.memoizedState,r===null)return Te(n),null;if(s=(n.flags&128)!==0,a=r.rendering,a===null)if(s)os(r,!1);else{if(Ae!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(a=yr(t),a!==null){for(n.flags|=128,os(r,!1),t=a.updateQueue,n.updateQueue=t,kr(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Mc(i,t),i=i.sibling;return H(Le,Le.current&1|2),n.child}t=t.sibling}r.tail!==null&&St()>Ar&&(n.flags|=128,s=!0,os(r,!1),n.lanes=4194304)}else{if(!s)if(t=yr(a),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,kr(n,t),os(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!ue)return Te(n),null}else 2*St()-r.renderingStartTime>Ar&&i!==536870912&&(n.flags|=128,s=!0,os(r,!1),n.lanes=4194304);r.isBackwards?(a.sibling=n.child,n.child=a):(t=r.last,t!==null?t.sibling=a:n.child=a,r.last=a)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=St(),n.sibling=null,t=Le.current,H(Le,s?t&1|2:t&1),n):(Te(n),null);case 22:case 23:return Pt(n),tl(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(i&536870912)!==0&&(n.flags&128)===0&&(Te(n),n.subtreeFlags&6&&(n.flags|=8192)):Te(n),i=n.updateQueue,i!==null&&kr(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048),t!==null&&P(Un),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),qt(Re),Te(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function Df(t,n){switch(Pa(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return qt(Re),Zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ms(n),null;case 13:if(Pt(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(d(340));Yi()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return P(Le),null;case 4:return Zt(),null;case 10:return qt(n.type),null;case 22:case 23:return Pt(n),tl(),t!==null&&P(Un),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return qt(Re),null;case 25:return null;default:return null}}function oh(t,n){switch(Pa(n),n.tag){case 3:qt(Re),Zt();break;case 26:case 27:case 5:Ms(n);break;case 4:Zt();break;case 13:Pt(n);break;case 19:P(Le);break;case 10:qt(n.type);break;case 22:case 23:Pt(n),tl(),t!==null&&P(Un);break;case 24:qt(Re)}}function cs(t,n){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&t)===t){s=void 0;var a=i.create,l=i.inst;s=a(),l.destroy=s}i=i.next}while(i!==r)}}catch(c){ye(n,n.return,c)}}function cn(t,n,i){try{var s=n.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var a=r.next;s=a;do{if((s.tag&t)===t){var l=s.inst,c=l.destroy;if(c!==void 0){l.destroy=void 0,r=n;var f=i,w=c;try{w()}catch(E){ye(r,f,E)}}}s=s.next}while(s!==a)}}catch(E){ye(n,n.return,E)}}function ch(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Kc(n,i)}catch(s){ye(t,t.return,s)}}}function dh(t,n,i){i.props=qn(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(s){ye(t,n,s)}}function ds(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof i=="function"?t.refCleanup=i(s):i.current=s}}catch(r){ye(t,n,r)}}function Et(t,n){var i=t.ref,s=t.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(r){ye(t,n,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(r){ye(t,n,r)}else i.current=null}function hh(t){var n=t.type,i=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break e;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(r){ye(t,t.return,r)}}function Ol(t,n,i){try{var s=t.stateNode;Jf(s,t.type,i,n),s[Ke]=n}catch(r){ye(t,t.return,r)}}function uh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&jn(t.type)||t.tag===4}function Nl(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&jn(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dl(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(t),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=_r));else if(s!==4&&(s===27&&jn(t.type)&&(i=t.stateNode,n=null),t=t.child,t!==null))for(Dl(t,n,i),t=t.sibling;t!==null;)Dl(t,n,i),t=t.sibling}function Sr(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(s!==4&&(s===27&&jn(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(Sr(t,n,i),t=t.sibling;t!==null;)Sr(t,n,i),t=t.sibling}function ph(t){var n=t.stateNode,i=t.memoizedProps;try{for(var s=t.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Be(n,s,i),n[Ye]=t,n[Ke]=i}catch(a){ye(t,t.return,a)}}var Gt=!1,Oe=!1,zl=!1,fh=typeof WeakSet=="function"?WeakSet:Set,qe=null;function zf(t,n){if(t=t.containerInfo,no=Br,t=Sc(t),Na(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var r=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{i.nodeType,a.nodeType}catch{i=null;break e}var l=0,c=-1,f=-1,w=0,E=0,z=t,T=null;t:for(;;){for(var k;z!==i||r!==0&&z.nodeType!==3||(c=l+r),z!==a||s!==0&&z.nodeType!==3||(f=l+s),z.nodeType===3&&(l+=z.nodeValue.length),(k=z.firstChild)!==null;)T=z,z=k;for(;;){if(z===t)break t;if(T===i&&++w===r&&(c=l),T===a&&++E===s&&(f=l),(k=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=k}i=c===-1||f===-1?null:{start:c,end:f}}else i=null}i=i||{start:0,end:0}}else i=null;for(io={focusedElem:t,selectionRange:i},Br=!1,qe=n;qe!==null;)if(n=qe,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,qe=t;else for(;qe!==null;){switch(n=qe,a=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&a!==null){t=void 0,i=n,r=a.memoizedProps,a=a.memoizedState,s=i.stateNode;try{var ee=qn(i.type,r,i.elementType===i.type);t=s.getSnapshotBeforeUpdate(ee,a),s.__reactInternalSnapshotBeforeUpdate=t}catch(K){ye(i,i.return,K)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,i=t.nodeType,i===9)ao(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ao(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=n.sibling,t!==null){t.return=n.return,qe=t;break}qe=n.return}}function xh(t,n,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:dn(t,i),s&4&&cs(5,i);break;case 1:if(dn(t,i),s&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(l){ye(i,i.return,l)}else{var r=qn(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(r,n,t.__reactInternalSnapshotBeforeUpdate)}catch(l){ye(i,i.return,l)}}s&64&&ch(i),s&512&&ds(i,i.return);break;case 3:if(dn(t,i),s&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Kc(t,n)}catch(l){ye(i,i.return,l)}}break;case 27:n===null&&s&4&&ph(i);case 26:case 5:dn(t,i),n===null&&s&4&&hh(i),s&512&&ds(i,i.return);break;case 12:dn(t,i);break;case 13:dn(t,i),s&4&&gh(t,i),s&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Pf.bind(null,i),rx(t,i))));break;case 22:if(s=i.memoizedState!==null||Gt,!s){n=n!==null&&n.memoizedState!==null||Oe,r=Gt;var a=Oe;Gt=s,(Oe=n)&&!a?hn(t,i,(i.subtreeFlags&8772)!==0):dn(t,i),Gt=r,Oe=a}break;case 30:break;default:dn(t,i)}}function mh(t){var n=t.alternate;n!==null&&(t.alternate=null,mh(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var we=null,$e=!1;function Vt(t,n,i){for(i=i.child;i!==null;)jh(t,n,i),i=i.sibling}function jh(t,n,i){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Di,i)}catch{}switch(i.tag){case 26:Oe||Et(i,n),Vt(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Oe||Et(i,n);var s=we,r=$e;jn(i.type)&&(we=i.stateNode,$e=!1),Vt(t,n,i),ys(i.stateNode),we=s,$e=r;break;case 5:Oe||Et(i,n);case 6:if(s=we,r=$e,we=null,Vt(t,n,i),we=s,$e=r,we!==null)if($e)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(i.stateNode)}catch(a){ye(i,n,a)}else try{we.removeChild(i.stateNode)}catch(a){ye(i,n,a)}break;case 18:we!==null&&($e?(t=we,ru(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),As(t)):ru(we,i.stateNode));break;case 4:s=we,r=$e,we=i.stateNode.containerInfo,$e=!0,Vt(t,n,i),we=s,$e=r;break;case 0:case 11:case 14:case 15:Oe||cn(2,i,n),Oe||cn(4,i,n),Vt(t,n,i);break;case 1:Oe||(Et(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"&&dh(i,n,s)),Vt(t,n,i);break;case 21:Vt(t,n,i);break;case 22:Oe=(s=Oe)||i.memoizedState!==null,Vt(t,n,i),Oe=s;break;default:Vt(t,n,i)}}function gh(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{As(t)}catch(i){ye(n,n.return,i)}}function Rf(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new fh),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new fh),n;default:throw Error(d(435,t.tag))}}function Rl(t,n){var i=Rf(t);n.forEach(function(s){var r=Ff.bind(null,t,s);i.has(s)||(i.add(s),s.then(r,r))})}function lt(t,n){var i=n.deletions;if(i!==null)for(var s=0;s<i.length;s++){var r=i[s],a=t,l=n,c=l;e:for(;c!==null;){switch(c.tag){case 27:if(jn(c.type)){we=c.stateNode,$e=!1;break e}break;case 5:we=c.stateNode,$e=!1;break e;case 3:case 4:we=c.stateNode.containerInfo,$e=!0;break e}c=c.return}if(we===null)throw Error(d(160));jh(a,l,r),we=null,$e=!1,a=r.alternate,a!==null&&(a.return=null),r.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)yh(n,t),n=n.sibling}var Tt=null;function yh(t,n){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:lt(n,t),ot(t),s&4&&(cn(3,t,t.return),cs(3,t),cn(5,t,t.return));break;case 1:lt(n,t),ot(t),s&512&&(Oe||i===null||Et(i,i.return)),s&64&&Gt&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var r=Tt;if(lt(n,t),ot(t),s&512&&(Oe||i===null||Et(i,i.return)),s&4){var a=i!==null?i.memoizedState:null;if(s=t.memoizedState,i===null)if(s===null)if(t.stateNode===null){e:{s=t.type,i=t.memoizedProps,r=r.ownerDocument||r;t:switch(s){case"title":a=r.getElementsByTagName("title")[0],(!a||a[Li]||a[Ye]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(s),r.head.insertBefore(a,r.querySelector("head > title"))),Be(a,s,i),a[Ye]=t,Ue(a),s=a;break e;case"link":var l=pu("link","href",r).get(s+(i.href||""));if(l){for(var c=0;c<l.length;c++)if(a=l[c],a.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&a.getAttribute("rel")===(i.rel==null?null:i.rel)&&a.getAttribute("title")===(i.title==null?null:i.title)&&a.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){l.splice(c,1);break t}}a=r.createElement(s),Be(a,s,i),r.head.appendChild(a);break;case"meta":if(l=pu("meta","content",r).get(s+(i.content||""))){for(c=0;c<l.length;c++)if(a=l[c],a.getAttribute("content")===(i.content==null?null:""+i.content)&&a.getAttribute("name")===(i.name==null?null:i.name)&&a.getAttribute("property")===(i.property==null?null:i.property)&&a.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&a.getAttribute("charset")===(i.charSet==null?null:i.charSet)){l.splice(c,1);break t}}a=r.createElement(s),Be(a,s,i),r.head.appendChild(a);break;default:throw Error(d(468,s))}a[Ye]=t,Ue(a),s=a}t.stateNode=s}else fu(r,t.type,t.stateNode);else t.stateNode=uu(r,s,t.memoizedProps);else a!==s?(a===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):a.count--,s===null?fu(r,t.type,t.stateNode):uu(r,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Ol(t,t.memoizedProps,i.memoizedProps)}break;case 27:lt(n,t),ot(t),s&512&&(Oe||i===null||Et(i,i.return)),i!==null&&s&4&&Ol(t,t.memoizedProps,i.memoizedProps);break;case 5:if(lt(n,t),ot(t),s&512&&(Oe||i===null||Et(i,i.return)),t.flags&32){r=t.stateNode;try{Zn(r,"")}catch(k){ye(t,t.return,k)}}s&4&&t.stateNode!=null&&(r=t.memoizedProps,Ol(t,r,i!==null?i.memoizedProps:r)),s&1024&&(zl=!0);break;case 6:if(lt(n,t),ot(t),s&4){if(t.stateNode===null)throw Error(d(162));s=t.memoizedProps,i=t.stateNode;try{i.nodeValue=s}catch(k){ye(t,t.return,k)}}break;case 3:if(Ir=null,r=Tt,Tt=Hr(n.containerInfo),lt(n,t),Tt=r,ot(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{As(n.containerInfo)}catch(k){ye(t,t.return,k)}zl&&(zl=!1,bh(t));break;case 4:s=Tt,Tt=Hr(t.stateNode.containerInfo),lt(n,t),ot(t),Tt=s;break;case 12:lt(n,t),ot(t);break;case 13:lt(n,t),ot(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(ql=St()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Rl(t,s)));break;case 22:r=t.memoizedState!==null;var f=i!==null&&i.memoizedState!==null,w=Gt,E=Oe;if(Gt=w||r,Oe=E||f,lt(n,t),Oe=E,Gt=w,ot(t),s&8192)e:for(n=t.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(i===null||f||Gt||Oe||In(t)),i=null,n=t;;){if(n.tag===5||n.tag===26){if(i===null){f=i=n;try{if(a=f.stateNode,r)l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{c=f.stateNode;var z=f.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(k){ye(f,f.return,k)}}}else if(n.tag===6){if(i===null){f=n;try{f.stateNode.nodeValue=r?"":f.memoizedProps}catch(k){ye(f,f.return,k)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,Rl(t,i))));break;case 19:lt(n,t),ot(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Rl(t,s)));break;case 30:break;case 21:break;default:lt(n,t),ot(t)}}function ot(t){var n=t.flags;if(n&2){try{for(var i,s=t.return;s!==null;){if(uh(s)){i=s;break}s=s.return}if(i==null)throw Error(d(160));switch(i.tag){case 27:var r=i.stateNode,a=Nl(t);Sr(t,a,r);break;case 5:var l=i.stateNode;i.flags&32&&(Zn(l,""),i.flags&=-33);var c=Nl(t);Sr(t,c,l);break;case 3:case 4:var f=i.stateNode.containerInfo,w=Nl(t);Dl(t,w,f);break;default:throw Error(d(161))}}catch(E){ye(t,t.return,E)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function dn(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xh(t,n.alternate,n),n=n.sibling}function In(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:cn(4,n,n.return),In(n);break;case 1:Et(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&dh(n,n.return,i),In(n);break;case 27:ys(n.stateNode);case 26:case 5:Et(n,n.return),In(n);break;case 22:n.memoizedState===null&&In(n);break;case 30:In(n);break;default:In(n)}t=t.sibling}}function hn(t,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,r=t,a=n,l=a.flags;switch(a.tag){case 0:case 11:case 15:hn(r,a,i),cs(4,a);break;case 1:if(hn(r,a,i),s=a,r=s.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(w){ye(s,s.return,w)}if(s=a,r=s.updateQueue,r!==null){var c=s.stateNode;try{var f=r.shared.hiddenCallbacks;if(f!==null)for(r.shared.hiddenCallbacks=null,r=0;r<f.length;r++)Wc(f[r],c)}catch(w){ye(s,s.return,w)}}i&&l&64&&ch(a),ds(a,a.return);break;case 27:ph(a);case 26:case 5:hn(r,a,i),i&&s===null&&l&4&&hh(a),ds(a,a.return);break;case 12:hn(r,a,i);break;case 13:hn(r,a,i),i&&l&4&&gh(r,a);break;case 22:a.memoizedState===null&&hn(r,a,i),ds(a,a.return);break;case 30:break;default:hn(r,a,i)}n=n.sibling}}function Ll(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Wi(i))}function Ml(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wi(t))}function Ot(t,n,i,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vh(t,n,i,s),n=n.sibling}function vh(t,n,i,s){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ot(t,n,i,s),r&2048&&cs(9,n);break;case 1:Ot(t,n,i,s);break;case 3:Ot(t,n,i,s),r&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wi(t)));break;case 12:if(r&2048){Ot(t,n,i,s),t=n.stateNode;try{var a=n.memoizedProps,l=a.id,c=a.onPostCommit;typeof c=="function"&&c(l,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){ye(n,n.return,f)}}else Ot(t,n,i,s);break;case 13:Ot(t,n,i,s);break;case 23:break;case 22:a=n.stateNode,l=n.alternate,n.memoizedState!==null?a._visibility&2?Ot(t,n,i,s):hs(t,n):a._visibility&2?Ot(t,n,i,s):(a._visibility|=2,mi(t,n,i,s,(n.subtreeFlags&10256)!==0)),r&2048&&Ll(l,n);break;case 24:Ot(t,n,i,s),r&2048&&Ml(n.alternate,n);break;default:Ot(t,n,i,s)}}function mi(t,n,i,s,r){for(r=r&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var a=t,l=n,c=i,f=s,w=l.flags;switch(l.tag){case 0:case 11:case 15:mi(a,l,c,f,r),cs(8,l);break;case 23:break;case 22:var E=l.stateNode;l.memoizedState!==null?E._visibility&2?mi(a,l,c,f,r):hs(a,l):(E._visibility|=2,mi(a,l,c,f,r)),r&&w&2048&&Ll(l.alternate,l);break;case 24:mi(a,l,c,f,r),r&&w&2048&&Ml(l.alternate,l);break;default:mi(a,l,c,f,r)}n=n.sibling}}function hs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,s=n,r=s.flags;switch(s.tag){case 22:hs(i,s),r&2048&&Ll(s.alternate,s);break;case 24:hs(i,s),r&2048&&Ml(s.alternate,s);break;default:hs(i,s)}n=n.sibling}}var us=8192;function ji(t){if(t.subtreeFlags&us)for(t=t.child;t!==null;)wh(t),t=t.sibling}function wh(t){switch(t.tag){case 26:ji(t),t.flags&us&&t.memoizedState!==null&&gx(Tt,t.memoizedState,t.memoizedProps);break;case 5:ji(t);break;case 3:case 4:var n=Tt;Tt=Hr(t.stateNode.containerInfo),ji(t),Tt=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=us,us=16777216,ji(t),us=n):ji(t));break;default:ji(t)}}function Th(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ps(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];qe=s,Sh(s,t)}Th(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kh(t),t=t.sibling}function kh(t){switch(t.tag){case 0:case 11:case 15:ps(t),t.flags&2048&&cn(9,t,t.return);break;case 3:ps(t);break;case 12:ps(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Cr(t)):ps(t);break;default:ps(t)}}function Cr(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];qe=s,Sh(s,t)}Th(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:cn(8,n,n.return),Cr(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Cr(n));break;default:Cr(n)}t=t.sibling}}function Sh(t,n){for(;qe!==null;){var i=qe;switch(i.tag){case 0:case 11:case 15:cn(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Wi(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,qe=s;else e:for(i=t;qe!==null;){s=qe;var r=s.sibling,a=s.return;if(mh(s),s===i){qe=null;break e}if(r!==null){r.return=a,qe=r;break e}qe=a}}}var Lf={getCacheForType:function(t){var n=Xe(Re),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i}},Mf=typeof WeakMap=="function"?WeakMap:Map,pe=0,be=null,ae=null,oe=0,fe=0,ct=null,un=!1,gi=!1,_l=!1,Yt=0,Ae=0,pn=0,Pn=0,Ul=0,bt=0,yi=0,fs=null,et=null,Hl=!1,ql=0,Ar=1/0,Er=null,fn=null,Fe=0,xn=null,bi=null,vi=0,Il=0,Pl=null,Ch=null,xs=0,Fl=null;function dt(){if((pe&2)!==0&&oe!==0)return oe&-oe;if(O.T!==null){var t=oi;return t!==0?t:Wl()}return Fo()}function Ah(){bt===0&&(bt=(oe&536870912)===0||ue?Ho():536870912);var t=yt.current;return t!==null&&(t.flags|=32),bt}function ht(t,n,i){(t===be&&(fe===2||fe===9)||t.cancelPendingCommit!==null)&&(wi(t,0),mn(t,oe,bt,!1)),Ri(t,i),((pe&2)===0||t!==be)&&(t===be&&((pe&2)===0&&(Pn|=i),Ae===4&&mn(t,oe,bt,!1)),Nt(t))}function Eh(t,n,i){if((pe&6)!==0)throw Error(d(327));var s=!i&&(n&124)===0&&(n&t.expiredLanes)===0||zi(t,n),r=s?Hf(t,n):Vl(t,n,!0),a=s;do{if(r===0){gi&&!s&&mn(t,n,0,!1);break}else{if(i=t.current.alternate,a&&!_f(i)){r=Vl(t,n,!1),a=!1;continue}if(r===2){if(a=n,t.errorRecoveryDisabledLanes&a)var l=0;else l=t.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){n=l;e:{var c=t;r=fs;var f=c.current.memoizedState.isDehydrated;if(f&&(wi(c,l).flags|=256),l=Vl(c,l,!1),l!==2){if(_l&&!f){c.errorRecoveryDisabledLanes|=a,Pn|=a,r=4;break e}a=et,et=r,a!==null&&(et===null?et=a:et.push.apply(et,a))}r=l}if(a=!1,r!==2)continue}}if(r===1){wi(t,0),mn(t,n,0,!0);break}e:{switch(s=t,a=r,a){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:mn(s,n,bt,!un);break e;case 2:et=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=ql+300-St(),10<r)){if(mn(s,n,bt,!un),qs(s,0,!0)!==0)break e;s.timeoutHandle=iu(Oh.bind(null,s,i,et,Er,Hl,n,bt,Pn,yi,un,a,2,-0,0),r);break e}Oh(s,i,et,Er,Hl,n,bt,Pn,yi,un,a,0,-0,0)}}break}while(!0);Nt(t)}function Oh(t,n,i,s,r,a,l,c,f,w,E,z,T,k){if(t.timeoutHandle=-1,z=n.subtreeFlags,(z&8192||(z&16785408)===16785408)&&(ws={stylesheets:null,count:0,unsuspend:jx},wh(n),z=yx(),z!==null)){t.cancelPendingCommit=z(_h.bind(null,t,n,a,i,s,r,l,c,f,E,1,T,k)),mn(t,a,l,!w);return}_h(t,n,a,i,s,r,l,c,f)}function _f(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var r=i[s],a=r.getSnapshot;r=r.value;try{if(!rt(a(),r))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mn(t,n,i,s){n&=~Ul,n&=~Pn,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var r=n;0<r;){var a=31-st(r),l=1<<a;s[a]=-1,r&=~l}i!==0&&Io(t,i,n)}function Or(){return(pe&6)===0?(ms(0),!1):!0}function Bl(){if(ae!==null){if(fe===0)var t=ae.return;else t=ae,Ht=Mn=null,al(t),fi=null,as=0,t=ae;for(;t!==null;)oh(t.alternate,t),t=t.return;ae=null}}function wi(t,n){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,ex(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Bl(),be=t,ae=i=Mt(t.current,null),oe=n,fe=0,ct=null,un=!1,gi=zi(t,n),_l=!1,yi=bt=Ul=Pn=pn=Ae=0,et=fs=null,Hl=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var r=31-st(s),a=1<<r;n|=t[r],s&=~a}return Yt=n,Zs(),i}function Nh(t,n){se=null,O.H=mr,n===Zi||n===ar?(n=Xc(),fe=3):n===Gc?(n=Xc(),fe=4):fe=n===Qd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ct=n,ae===null&&(Ae=1,vr(t,xt(n,t.current)))}function Dh(){var t=O.H;return O.H=mr,t===null?mr:t}function zh(){var t=O.A;return O.A=Lf,t}function Gl(){Ae=4,un||(oe&4194048)!==oe&&yt.current!==null||(gi=!0),(pn&134217727)===0&&(Pn&134217727)===0||be===null||mn(be,oe,bt,!1)}function Vl(t,n,i){var s=pe;pe|=2;var r=Dh(),a=zh();(be!==t||oe!==n)&&(Er=null,wi(t,n)),n=!1;var l=Ae;e:do try{if(fe!==0&&ae!==null){var c=ae,f=ct;switch(fe){case 8:Bl(),l=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(n=!0);var w=fe;if(fe=0,ct=null,Ti(t,c,f,w),i&&gi){l=0;break e}break;default:w=fe,fe=0,ct=null,Ti(t,c,f,w)}}Uf(),l=Ae;break}catch(E){Nh(t,E)}while(!0);return n&&t.shellSuspendCounter++,Ht=Mn=null,pe=s,O.H=r,O.A=a,ae===null&&(be=null,oe=0,Zs()),l}function Uf(){for(;ae!==null;)Rh(ae)}function Hf(t,n){var i=pe;pe|=2;var s=Dh(),r=zh();be!==t||oe!==n?(Er=null,Ar=St()+500,wi(t,n)):gi=zi(t,n);e:do try{if(fe!==0&&ae!==null){n=ae;var a=ct;t:switch(fe){case 1:fe=0,ct=null,Ti(t,n,a,1);break;case 2:case 9:if(Vc(a)){fe=0,ct=null,Lh(n);break}n=function(){fe!==2&&fe!==9||be!==t||(fe=7),Nt(t)},a.then(n,n);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Vc(a)?(fe=0,ct=null,Lh(n)):(fe=0,ct=null,Ti(t,n,a,7));break;case 5:var l=null;switch(ae.tag){case 26:l=ae.memoizedState;case 5:case 27:var c=ae;if(!l||xu(l)){fe=0,ct=null;var f=c.sibling;if(f!==null)ae=f;else{var w=c.return;w!==null?(ae=w,Nr(w)):ae=null}break t}}fe=0,ct=null,Ti(t,n,a,5);break;case 6:fe=0,ct=null,Ti(t,n,a,6);break;case 8:Bl(),Ae=6;break e;default:throw Error(d(462))}}qf();break}catch(E){Nh(t,E)}while(!0);return Ht=Mn=null,O.H=s,O.A=r,pe=i,ae!==null?0:(be=null,oe=0,Zs(),Ae)}function qf(){for(;ae!==null&&!ap();)Rh(ae)}function Rh(t){var n=ah(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,n===null?Nr(t):ae=n}function Lh(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=eh(i,n,n.pendingProps,n.type,void 0,oe);break;case 11:n=eh(i,n,n.pendingProps,n.type.render,n.ref,oe);break;case 5:al(n);default:oh(i,n),n=ae=Mc(n,Yt),n=ah(i,n,Yt)}t.memoizedProps=t.pendingProps,n===null?Nr(t):ae=n}function Ti(t,n,i,s){Ht=Mn=null,al(n),fi=null,as=0;var r=n.return;try{if(Ef(t,r,n,i,oe)){Ae=1,vr(t,xt(i,t.current)),ae=null;return}}catch(a){if(r!==null)throw ae=r,a;Ae=1,vr(t,xt(i,t.current)),ae=null;return}n.flags&32768?(ue||s===1?t=!0:gi||(oe&536870912)!==0?t=!1:(un=t=!0,(s===2||s===9||s===3||s===6)&&(s=yt.current,s!==null&&s.tag===13&&(s.flags|=16384))),Mh(n,t)):Nr(n)}function Nr(t){var n=t;do{if((n.flags&32768)!==0){Mh(n,un);return}t=n.return;var i=Nf(n.alternate,n,Yt);if(i!==null){ae=i;return}if(n=n.sibling,n!==null){ae=n;return}ae=n=t}while(n!==null);Ae===0&&(Ae=5)}function Mh(t,n){do{var i=Df(t.alternate,t);if(i!==null){i.flags&=32767,ae=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){ae=t;return}ae=t=i}while(t!==null);Ae=6,ae=null}function _h(t,n,i,s,r,a,l,c,f){t.cancelPendingCommit=null;do Dr();while(Fe!==0);if((pe&6)!==0)throw Error(d(327));if(n!==null){if(n===t.current)throw Error(d(177));if(a=n.lanes|n.childLanes,a|=Ma,mp(t,i,a,l,c,f),t===be&&(ae=be=null,oe=0),bi=n,xn=t,vi=i,Il=a,Pl=r,Ch=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Bf(_s,function(){return Ph(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,r=I.p,I.p=2,l=pe,pe|=4;try{zf(t,n,i)}finally{pe=l,I.p=r,O.T=s}}Fe=1,Uh(),Hh(),qh()}}function Uh(){if(Fe===1){Fe=0;var t=xn,n=bi,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=O.T,O.T=null;var s=I.p;I.p=2;var r=pe;pe|=4;try{yh(n,t);var a=io,l=Sc(t.containerInfo),c=a.focusedElem,f=a.selectionRange;if(l!==c&&c&&c.ownerDocument&&kc(c.ownerDocument.documentElement,c)){if(f!==null&&Na(c)){var w=f.start,E=f.end;if(E===void 0&&(E=w),"selectionStart"in c)c.selectionStart=w,c.selectionEnd=Math.min(E,c.value.length);else{var z=c.ownerDocument||document,T=z&&z.defaultView||window;if(T.getSelection){var k=T.getSelection(),ee=c.textContent.length,K=Math.min(f.start,ee),je=f.end===void 0?K:Math.min(f.end,ee);!k.extend&&K>je&&(l=je,je=K,K=l);var y=Tc(c,K),j=Tc(c,je);if(y&&j&&(k.rangeCount!==1||k.anchorNode!==y.node||k.anchorOffset!==y.offset||k.focusNode!==j.node||k.focusOffset!==j.offset)){var v=z.createRange();v.setStart(y.node,y.offset),k.removeAllRanges(),K>je?(k.addRange(v),k.extend(j.node,j.offset)):(v.setEnd(j.node,j.offset),k.addRange(v))}}}}for(z=[],k=c;k=k.parentNode;)k.nodeType===1&&z.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var D=z[c];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Br=!!no,io=no=null}finally{pe=r,I.p=s,O.T=i}}t.current=n,Fe=2}}function Hh(){if(Fe===2){Fe=0;var t=xn,n=bi,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=O.T,O.T=null;var s=I.p;I.p=2;var r=pe;pe|=4;try{xh(t,n.alternate,n)}finally{pe=r,I.p=s,O.T=i}}Fe=3}}function qh(){if(Fe===4||Fe===3){Fe=0,lp();var t=xn,n=bi,i=vi,s=Ch;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Fe=5:(Fe=0,bi=xn=null,Ih(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(fn=null),ca(i),n=n.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,r=I.p,I.p=2,O.T=null;try{for(var a=t.onRecoverableError,l=0;l<s.length;l++){var c=s[l];a(c.value,{componentStack:c.stack})}}finally{O.T=n,I.p=r}}(vi&3)!==0&&Dr(),Nt(t),r=t.pendingLanes,(i&4194090)!==0&&(r&42)!==0?t===Fl?xs++:(xs=0,Fl=t):xs=0,ms(0)}}function Ih(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Wi(n)))}function Dr(t){return Uh(),Hh(),qh(),Ph()}function Ph(){if(Fe!==5)return!1;var t=xn,n=Il;Il=0;var i=ca(vi),s=O.T,r=I.p;try{I.p=32>i?32:i,O.T=null,i=Pl,Pl=null;var a=xn,l=vi;if(Fe=0,bi=xn=null,vi=0,(pe&6)!==0)throw Error(d(331));var c=pe;if(pe|=4,kh(a.current),vh(a,a.current,l,i),pe=c,ms(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Di,a)}catch{}return!0}finally{I.p=r,O.T=s,Ih(t,n)}}function Fh(t,n,i){n=xt(i,n),n=bl(t.stateNode,n,2),t=rn(t,n,2),t!==null&&(Ri(t,2),Nt(t))}function ye(t,n,i){if(t.tag===3)Fh(t,t,i);else for(;n!==null;){if(n.tag===3){Fh(n,t,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(fn===null||!fn.has(s))){t=xt(i,t),i=Yd(2),s=rn(n,i,2),s!==null&&(Xd(i,s,n,t),Ri(s,2),Nt(s));break}}n=n.return}}function Yl(t,n,i){var s=t.pingCache;if(s===null){s=t.pingCache=new Mf;var r=new Set;s.set(n,r)}else r=s.get(n),r===void 0&&(r=new Set,s.set(n,r));r.has(i)||(_l=!0,r.add(i),t=If.bind(null,t,n,i),n.then(t,t))}function If(t,n,i){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,be===t&&(oe&i)===i&&(Ae===4||Ae===3&&(oe&62914560)===oe&&300>St()-ql?(pe&2)===0&&wi(t,0):Ul|=i,yi===oe&&(yi=0)),Nt(t)}function Bh(t,n){n===0&&(n=qo()),t=si(t,n),t!==null&&(Ri(t,n),Nt(t))}function Pf(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),Bh(t,i)}function Ff(t,n){var i=0;switch(t.tag){case 13:var s=t.stateNode,r=t.memoizedState;r!==null&&(i=r.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(d(314))}s!==null&&s.delete(n),Bh(t,i)}function Bf(t,n){return ra(t,n)}var zr=null,ki=null,Xl=!1,Rr=!1,Ql=!1,Fn=0;function Nt(t){t!==ki&&t.next===null&&(ki===null?zr=ki=t:ki=ki.next=t),Rr=!0,Xl||(Xl=!0,Vf())}function ms(t,n){if(!Ql&&Rr){Ql=!0;do for(var i=!1,s=zr;s!==null;){if(t!==0){var r=s.pendingLanes;if(r===0)var a=0;else{var l=s.suspendedLanes,c=s.pingedLanes;a=(1<<31-st(42|t)+1)-1,a&=r&~(l&~c),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(i=!0,Xh(s,a))}else a=oe,a=qs(s,s===be?a:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(a&3)===0||zi(s,a)||(i=!0,Xh(s,a));s=s.next}while(i);Ql=!1}}function Gf(){Gh()}function Gh(){Rr=Xl=!1;var t=0;Fn!==0&&($f()&&(t=Fn),Fn=0);for(var n=St(),i=null,s=zr;s!==null;){var r=s.next,a=Vh(s,n);a===0?(s.next=null,i===null?zr=r:i.next=r,r===null&&(ki=i)):(i=s,(t!==0||(a&3)!==0)&&(Rr=!0)),s=r}ms(t)}function Vh(t,n){for(var i=t.suspendedLanes,s=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes&-62914561;0<a;){var l=31-st(a),c=1<<l,f=r[l];f===-1?((c&i)===0||(c&s)!==0)&&(r[l]=xp(c,n)):f<=n&&(t.expiredLanes|=c),a&=~c}if(n=be,i=oe,i=qs(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,i===0||t===n&&(fe===2||fe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&aa(s),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||zi(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(s!==null&&aa(s),ca(i)){case 2:case 8:i=_o;break;case 32:i=_s;break;case 268435456:i=Uo;break;default:i=_s}return s=Yh.bind(null,t),i=ra(i,s),t.callbackPriority=n,t.callbackNode=i,n}return s!==null&&s!==null&&aa(s),t.callbackPriority=2,t.callbackNode=null,2}function Yh(t,n){if(Fe!==0&&Fe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Dr()&&t.callbackNode!==i)return null;var s=oe;return s=qs(t,t===be?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Eh(t,s,n),Vh(t,St()),t.callbackNode!=null&&t.callbackNode===i?Yh.bind(null,t):null)}function Xh(t,n){if(Dr())return null;Eh(t,n,!0)}function Vf(){tx(function(){(pe&6)!==0?ra(Mo,Gf):Gh()})}function Wl(){return Fn===0&&(Fn=Ho()),Fn}function Qh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gs(""+t)}function Wh(t,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,t.id&&i.setAttribute("form",t.id),n.parentNode.insertBefore(i,n),t=new FormData(t),i.parentNode.removeChild(i),t}function Yf(t,n,i,s,r){if(n==="submit"&&i&&i.stateNode===r){var a=Qh((r[Ke]||null).action),l=s.submitter;l&&(n=(n=l[Ke]||null)?Qh(n.formAction):l.getAttribute("formAction"),n!==null&&(a=n,l=null));var c=new Qs("action","action",null,s,r);t.push({event:c,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Fn!==0){var f=l?Wh(r,l):new FormData(r);xl(i,{pending:!0,data:f,method:r.method,action:a},null,f)}}else typeof a=="function"&&(c.preventDefault(),f=l?Wh(r,l):new FormData(r),xl(i,{pending:!0,data:f,method:r.method,action:a},a,f))},currentTarget:r}]})}}for(var Kl=0;Kl<La.length;Kl++){var Zl=La[Kl],Xf=Zl.toLowerCase(),Qf=Zl[0].toUpperCase()+Zl.slice(1);wt(Xf,"on"+Qf)}wt(Ec,"onAnimationEnd"),wt(Oc,"onAnimationIteration"),wt(Nc,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(hf,"onTransitionRun"),wt(uf,"onTransitionStart"),wt(pf,"onTransitionCancel"),wt(Dc,"onTransitionEnd"),Qn("onMouseEnter",["mouseout","mouseover"]),Qn("onMouseLeave",["mouseout","mouseover"]),Qn("onPointerEnter",["pointerout","pointerover"]),Qn("onPointerLeave",["pointerout","pointerover"]),Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(js));function Kh(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],r=s.event;s=s.listeners;e:{var a=void 0;if(n)for(var l=s.length-1;0<=l;l--){var c=s[l],f=c.instance,w=c.currentTarget;if(c=c.listener,f!==a&&r.isPropagationStopped())break e;a=c,r.currentTarget=w;try{a(r)}catch(E){br(E)}r.currentTarget=null,a=f}else for(l=0;l<s.length;l++){if(c=s[l],f=c.instance,w=c.currentTarget,c=c.listener,f!==a&&r.isPropagationStopped())break e;a=c,r.currentTarget=w;try{a(r)}catch(E){br(E)}r.currentTarget=null,a=f}}}}function le(t,n){var i=n[da];i===void 0&&(i=n[da]=new Set);var s=t+"__bubble";i.has(s)||(Zh(n,t,2,!1),i.add(s))}function Jl(t,n,i){var s=0;n&&(s|=4),Zh(i,t,s,n)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function $l(t){if(!t[Lr]){t[Lr]=!0,Go.forEach(function(i){i!=="selectionchange"&&(Wf.has(i)||Jl(i,!1,t),Jl(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Lr]||(n[Lr]=!0,Jl("selectionchange",!1,n))}}function Zh(t,n,i,s){switch(vu(n)){case 2:var r=wx;break;case 8:r=Tx;break;default:r=fo}i=r.bind(null,n,i,t),r=void 0,!va||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),s?r!==void 0?t.addEventListener(n,i,{capture:!0,passive:r}):t.addEventListener(n,i,!0):r!==void 0?t.addEventListener(n,i,{passive:r}):t.addEventListener(n,i,!1)}function eo(t,n,i,s,r){var a=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var c=s.stateNode.containerInfo;if(c===r)break;if(l===4)for(l=s.return;l!==null;){var f=l.tag;if((f===3||f===4)&&l.stateNode.containerInfo===r)return;l=l.return}for(;c!==null;){if(l=Vn(c),l===null)return;if(f=l.tag,f===5||f===6||f===26||f===27){s=a=l;continue e}c=c.parentNode}}s=s.return}sc(function(){var w=a,E=ya(i),z=[];e:{var T=zc.get(t);if(T!==void 0){var k=Qs,ee=t;switch(t){case"keypress":if(Ys(i)===0)break e;case"keydown":case"keyup":k=Fp;break;case"focusin":ee="focus",k=Sa;break;case"focusout":ee="blur",k=Sa;break;case"beforeblur":case"afterblur":k=Sa;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Vp;break;case Ec:case Oc:case Nc:k=Rp;break;case Dc:k=Xp;break;case"scroll":case"scrollend":k=Ep;break;case"wheel":k=Wp;break;case"copy":case"cut":case"paste":k=Mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=cc;break;case"toggle":case"beforetoggle":k=Zp}var K=(n&4)!==0,je=!K&&(t==="scroll"||t==="scrollend"),y=K?T!==null?T+"Capture":null:T;K=[];for(var j=w,v;j!==null;){var D=j;if(v=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||v===null||y===null||(D=_i(j,y),D!=null&&K.push(gs(j,D,v))),je)break;j=j.return}0<K.length&&(T=new k(T,ee,null,i,E),z.push({event:T,listeners:K}))}}if((n&7)===0){e:{if(T=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",T&&i!==ga&&(ee=i.relatedTarget||i.fromElement)&&(Vn(ee)||ee[Gn]))break e;if((k||T)&&(T=E.window===E?E:(T=E.ownerDocument)?T.defaultView||T.parentWindow:window,k?(ee=i.relatedTarget||i.toElement,k=w,ee=ee?Vn(ee):null,ee!==null&&(je=g(ee),K=ee.tag,ee!==je||K!==5&&K!==27&&K!==6)&&(ee=null)):(k=null,ee=w),k!==ee)){if(K=lc,D="onMouseLeave",y="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(K=cc,D="onPointerLeave",y="onPointerEnter",j="pointer"),je=k==null?T:Mi(k),v=ee==null?T:Mi(ee),T=new K(D,j+"leave",k,i,E),T.target=je,T.relatedTarget=v,D=null,Vn(E)===w&&(K=new K(y,j+"enter",ee,i,E),K.target=v,K.relatedTarget=je,D=K),je=D,k&&ee)t:{for(K=k,y=ee,j=0,v=K;v;v=Si(v))j++;for(v=0,D=y;D;D=Si(D))v++;for(;0<j-v;)K=Si(K),j--;for(;0<v-j;)y=Si(y),v--;for(;j--;){if(K===y||y!==null&&K===y.alternate)break t;K=Si(K),y=Si(y)}K=null}else K=null;k!==null&&Jh(z,T,k,K,!1),ee!==null&&je!==null&&Jh(z,je,ee,K,!0)}}e:{if(T=w?Mi(w):window,k=T.nodeName&&T.nodeName.toLowerCase(),k==="select"||k==="input"&&T.type==="file")var G=jc;else if(xc(T))if(gc)G=of;else{G=af;var re=rf}else k=T.nodeName,!k||k.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?w&&ja(w.elementType)&&(G=jc):G=lf;if(G&&(G=G(t,w))){mc(z,G,i,E);break e}re&&re(t,T,w),t==="focusout"&&w&&T.type==="number"&&w.memoizedProps.value!=null&&ma(T,"number",T.value)}switch(re=w?Mi(w):window,t){case"focusin":(xc(re)||re.contentEditable==="true")&&(ti=re,Da=w,Gi=null);break;case"focusout":Gi=Da=ti=null;break;case"mousedown":za=!0;break;case"contextmenu":case"mouseup":case"dragend":za=!1,Cc(z,i,E);break;case"selectionchange":if(df)break;case"keydown":case"keyup":Cc(z,i,E)}var X;if(Aa)e:{switch(t){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else ei?pc(t,i)&&(J="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(J="onCompositionStart");J&&(dc&&i.locale!=="ko"&&(ei||J!=="onCompositionStart"?J==="onCompositionEnd"&&ei&&(X=rc()):(en=E,wa="value"in en?en.value:en.textContent,ei=!0)),re=Mr(w,J),0<re.length&&(J=new oc(J,t,null,i,E),z.push({event:J,listeners:re}),X?J.data=X:(X=fc(i),X!==null&&(J.data=X)))),(X=$p?ef(t,i):tf(t,i))&&(J=Mr(w,"onBeforeInput"),0<J.length&&(re=new oc("onBeforeInput","beforeinput",null,i,E),z.push({event:re,listeners:J}),re.data=X)),Yf(z,t,w,i,E)}Kh(z,n)})}function gs(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Mr(t,n){for(var i=n+"Capture",s=[];t!==null;){var r=t,a=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||a===null||(r=_i(t,i),r!=null&&s.unshift(gs(t,r,a)),r=_i(t,n),r!=null&&s.push(gs(t,r,a))),t.tag===3)return s;t=t.return}return[]}function Si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Jh(t,n,i,s,r){for(var a=n._reactName,l=[];i!==null&&i!==s;){var c=i,f=c.alternate,w=c.stateNode;if(c=c.tag,f!==null&&f===s)break;c!==5&&c!==26&&c!==27||w===null||(f=w,r?(w=_i(i,a),w!=null&&l.unshift(gs(i,w,f))):r||(w=_i(i,a),w!=null&&l.push(gs(i,w,f)))),i=i.return}l.length!==0&&t.push({event:n,listeners:l})}var Kf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function $h(t){return(typeof t=="string"?t:""+t).replace(Kf,`
`).replace(Zf,"")}function eu(t,n){return n=$h(n),$h(t)===n}function _r(){}function me(t,n,i,s,r,a){switch(i){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Zn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Zn(t,""+s);break;case"className":Ps(t,"class",s);break;case"tabIndex":Ps(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ps(t,i,s);break;case"style":nc(t,s,a);break;case"data":if(n!=="object"){Ps(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Gs(""+s),t.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(i==="formAction"?(n!=="input"&&me(t,n,"name",r.name,r,null),me(t,n,"formEncType",r.formEncType,r,null),me(t,n,"formMethod",r.formMethod,r,null),me(t,n,"formTarget",r.formTarget,r,null)):(me(t,n,"encType",r.encType,r,null),me(t,n,"method",r.method,r,null),me(t,n,"target",r.target,r,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Gs(""+s),t.setAttribute(i,s);break;case"onClick":s!=null&&(t.onclick=_r);break;case"onScroll":s!=null&&le("scroll",t);break;case"onScrollEnd":s!=null&&le("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(d(61));if(i=s.__html,i!=null){if(r.children!=null)throw Error(d(60));t.innerHTML=i}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}i=Gs(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""+s):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":s===!0?t.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(i,s):t.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(i):t.setAttribute(i,s);break;case"popover":le("beforetoggle",t),le("toggle",t),Is(t,"popover",s);break;case"xlinkActuate":Rt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Rt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Rt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Rt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Rt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Rt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Rt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Rt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Rt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Is(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Cp.get(i)||i,Is(t,i,s))}}function to(t,n,i,s,r,a){switch(i){case"style":nc(t,s,a);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(d(61));if(i=s.__html,i!=null){if(r.children!=null)throw Error(d(60));t.innerHTML=i}}break;case"children":typeof s=="string"?Zn(t,s):(typeof s=="number"||typeof s=="bigint")&&Zn(t,""+s);break;case"onScroll":s!=null&&le("scroll",t);break;case"onScrollEnd":s!=null&&le("scrollend",t);break;case"onClick":s!=null&&(t.onclick=_r);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(r=i.endsWith("Capture"),n=i.slice(2,r?i.length-7:void 0),a=t[Ke]||null,a=a!=null?a[i]:null,typeof a=="function"&&t.removeEventListener(n,a,r),typeof s=="function")){typeof a!="function"&&a!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(n,s,r);break e}i in t?t[i]=s:s===!0?t.setAttribute(i,""):Is(t,i,s)}}}function Be(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",t),le("load",t);var s=!1,r=!1,a;for(a in i)if(i.hasOwnProperty(a)){var l=i[a];if(l!=null)switch(a){case"src":s=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:me(t,n,a,l,i,null)}}r&&me(t,n,"srcSet",i.srcSet,i,null),s&&me(t,n,"src",i.src,i,null);return;case"input":le("invalid",t);var c=a=l=r=null,f=null,w=null;for(s in i)if(i.hasOwnProperty(s)){var E=i[s];if(E!=null)switch(s){case"name":r=E;break;case"type":l=E;break;case"checked":f=E;break;case"defaultChecked":w=E;break;case"value":a=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(d(137,n));break;default:me(t,n,s,E,i,null)}}Jo(t,a,c,f,w,l,r,!1),Fs(t);return;case"select":le("invalid",t),s=l=a=null;for(r in i)if(i.hasOwnProperty(r)&&(c=i[r],c!=null))switch(r){case"value":a=c;break;case"defaultValue":l=c;break;case"multiple":s=c;default:me(t,n,r,c,i,null)}n=a,i=l,t.multiple=!!s,n!=null?Kn(t,!!s,n,!1):i!=null&&Kn(t,!!s,i,!0);return;case"textarea":le("invalid",t),a=r=s=null;for(l in i)if(i.hasOwnProperty(l)&&(c=i[l],c!=null))switch(l){case"value":s=c;break;case"defaultValue":r=c;break;case"children":a=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:me(t,n,l,c,i,null)}ec(t,s,r,a),Fs(t);return;case"option":for(f in i)if(i.hasOwnProperty(f)&&(s=i[f],s!=null))switch(f){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:me(t,n,f,s,i,null)}return;case"dialog":le("beforetoggle",t),le("toggle",t),le("cancel",t),le("close",t);break;case"iframe":case"object":le("load",t);break;case"video":case"audio":for(s=0;s<js.length;s++)le(js[s],t);break;case"image":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"embed":case"source":case"link":le("error",t),le("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in i)if(i.hasOwnProperty(w)&&(s=i[w],s!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:me(t,n,w,s,i,null)}return;default:if(ja(n)){for(E in i)i.hasOwnProperty(E)&&(s=i[E],s!==void 0&&to(t,n,E,s,i,void 0));return}}for(c in i)i.hasOwnProperty(c)&&(s=i[c],s!=null&&me(t,n,c,s,i,null))}function Jf(t,n,i,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,a=null,l=null,c=null,f=null,w=null,E=null;for(k in i){var z=i[k];if(i.hasOwnProperty(k)&&z!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":f=z;default:s.hasOwnProperty(k)||me(t,n,k,null,s,z)}}for(var T in s){var k=s[T];if(z=i[T],s.hasOwnProperty(T)&&(k!=null||z!=null))switch(T){case"type":a=k;break;case"name":r=k;break;case"checked":w=k;break;case"defaultChecked":E=k;break;case"value":l=k;break;case"defaultValue":c=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(d(137,n));break;default:k!==z&&me(t,n,T,k,s,z)}}xa(t,l,c,f,w,E,a,r);return;case"select":k=l=c=T=null;for(a in i)if(f=i[a],i.hasOwnProperty(a)&&f!=null)switch(a){case"value":break;case"multiple":k=f;default:s.hasOwnProperty(a)||me(t,n,a,null,s,f)}for(r in s)if(a=s[r],f=i[r],s.hasOwnProperty(r)&&(a!=null||f!=null))switch(r){case"value":T=a;break;case"defaultValue":c=a;break;case"multiple":l=a;default:a!==f&&me(t,n,r,a,s,f)}n=c,i=l,s=k,T!=null?Kn(t,!!i,T,!1):!!s!=!!i&&(n!=null?Kn(t,!!i,n,!0):Kn(t,!!i,i?[]:"",!1));return;case"textarea":k=T=null;for(c in i)if(r=i[c],i.hasOwnProperty(c)&&r!=null&&!s.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:me(t,n,c,null,s,r)}for(l in s)if(r=s[l],a=i[l],s.hasOwnProperty(l)&&(r!=null||a!=null))switch(l){case"value":T=r;break;case"defaultValue":k=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==a&&me(t,n,l,r,s,a)}$o(t,T,k);return;case"option":for(var ee in i)if(T=i[ee],i.hasOwnProperty(ee)&&T!=null&&!s.hasOwnProperty(ee))switch(ee){case"selected":t.selected=!1;break;default:me(t,n,ee,null,s,T)}for(f in s)if(T=s[f],k=i[f],s.hasOwnProperty(f)&&T!==k&&(T!=null||k!=null))switch(f){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:me(t,n,f,T,s,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in i)T=i[K],i.hasOwnProperty(K)&&T!=null&&!s.hasOwnProperty(K)&&me(t,n,K,null,s,T);for(w in s)if(T=s[w],k=i[w],s.hasOwnProperty(w)&&T!==k&&(T!=null||k!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(d(137,n));break;default:me(t,n,w,T,s,k)}return;default:if(ja(n)){for(var je in i)T=i[je],i.hasOwnProperty(je)&&T!==void 0&&!s.hasOwnProperty(je)&&to(t,n,je,void 0,s,T);for(E in s)T=s[E],k=i[E],!s.hasOwnProperty(E)||T===k||T===void 0&&k===void 0||to(t,n,E,T,s,k);return}}for(var y in i)T=i[y],i.hasOwnProperty(y)&&T!=null&&!s.hasOwnProperty(y)&&me(t,n,y,null,s,T);for(z in s)T=s[z],k=i[z],!s.hasOwnProperty(z)||T===k||T==null&&k==null||me(t,n,z,T,s,k)}var no=null,io=null;function Ur(t){return t.nodeType===9?t:t.ownerDocument}function tu(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nu(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function so(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ro=null;function $f(){var t=window.event;return t&&t.type==="popstate"?t===ro?!1:(ro=t,!0):(ro=null,!1)}var iu=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,su=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof su<"u"?function(t){return su.resolve(null).then(t).catch(nx)}:iu;function nx(t){setTimeout(function(){throw t})}function jn(t){return t==="head"}function ru(t,n){var i=n,s=0,r=0;do{var a=i.nextSibling;if(t.removeChild(i),a&&a.nodeType===8)if(i=a.data,i==="/$"){if(0<s&&8>s){i=s;var l=t.ownerDocument;if(i&1&&ys(l.documentElement),i&2&&ys(l.body),i&4)for(i=l.head,ys(i),l=i.firstChild;l;){var c=l.nextSibling,f=l.nodeName;l[Li]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&l.rel.toLowerCase()==="stylesheet"||i.removeChild(l),l=c}}if(r===0){t.removeChild(a),As(n);return}r--}else i==="$"||i==="$?"||i==="$!"?r++:s=i.charCodeAt(0)-48;else s=0;i=a}while(i);As(n)}function ao(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":ao(i),ha(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function ix(t,n,i,s){for(;t.nodeType===1;){var r=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Li])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(a=t.getAttribute("rel"),a==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(a!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(a=t.getAttribute("src"),(a!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&a&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var a=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===a)return t}else return t;if(t=kt(t.nextSibling),t===null)break}return null}function sx(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=kt(t.nextSibling),t===null))return null;return t}function lo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function rx(t,n){var i=t.ownerDocument;if(t.data!=="$?"||i.readyState==="complete")n();else{var s=function(){n(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function kt(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var oo=null;function au(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}function lu(t,n,i){switch(n=Ur(i),t){case"html":if(t=n.documentElement,!t)throw Error(d(452));return t;case"head":if(t=n.head,!t)throw Error(d(453));return t;case"body":if(t=n.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function ys(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ha(t)}var vt=new Map,ou=new Set;function Hr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xt=I.d;I.d={f:ax,r:lx,D:ox,C:cx,L:dx,m:hx,X:px,S:ux,M:fx};function ax(){var t=Xt.f(),n=Or();return t||n}function lx(t){var n=Yn(t);n!==null&&n.tag===5&&n.type==="form"?Ed(n):Xt.r(t)}var Ci=typeof document>"u"?null:document;function cu(t,n,i){var s=Ci;if(s&&typeof n=="string"&&n){var r=ft(n);r='link[rel="'+t+'"][href="'+r+'"]',typeof i=="string"&&(r+='[crossorigin="'+i+'"]'),ou.has(r)||(ou.add(r),t={rel:t,crossOrigin:i,href:n},s.querySelector(r)===null&&(n=s.createElement("link"),Be(n,"link",t),Ue(n),s.head.appendChild(n)))}}function ox(t){Xt.D(t),cu("dns-prefetch",t,null)}function cx(t,n){Xt.C(t,n),cu("preconnect",t,n)}function dx(t,n,i){Xt.L(t,n,i);var s=Ci;if(s&&t&&n){var r='link[rel="preload"][as="'+ft(n)+'"]';n==="image"&&i&&i.imageSrcSet?(r+='[imagesrcset="'+ft(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(r+='[imagesizes="'+ft(i.imageSizes)+'"]')):r+='[href="'+ft(t)+'"]';var a=r;switch(n){case"style":a=Ai(t);break;case"script":a=Ei(t)}vt.has(a)||(t=C({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),vt.set(a,t),s.querySelector(r)!==null||n==="style"&&s.querySelector(bs(a))||n==="script"&&s.querySelector(vs(a))||(n=s.createElement("link"),Be(n,"link",t),Ue(n),s.head.appendChild(n)))}}function hx(t,n){Xt.m(t,n);var i=Ci;if(i&&t){var s=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+ft(s)+'"][href="'+ft(t)+'"]',a=r;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ei(t)}if(!vt.has(a)&&(t=C({rel:"modulepreload",href:t},n),vt.set(a,t),i.querySelector(r)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(vs(a)))return}s=i.createElement("link"),Be(s,"link",t),Ue(s),i.head.appendChild(s)}}}function ux(t,n,i){Xt.S(t,n,i);var s=Ci;if(s&&t){var r=Xn(s).hoistableStyles,a=Ai(t);n=n||"default";var l=r.get(a);if(!l){var c={loading:0,preload:null};if(l=s.querySelector(bs(a)))c.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":n},i),(i=vt.get(a))&&co(t,i);var f=l=s.createElement("link");Ue(f),Be(f,"link",t),f._p=new Promise(function(w,E){f.onload=w,f.onerror=E}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,qr(l,n,s)}l={type:"stylesheet",instance:l,count:1,state:c},r.set(a,l)}}}function px(t,n){Xt.X(t,n);var i=Ci;if(i&&t){var s=Xn(i).hoistableScripts,r=Ei(t),a=s.get(r);a||(a=i.querySelector(vs(r)),a||(t=C({src:t,async:!0},n),(n=vt.get(r))&&ho(t,n),a=i.createElement("script"),Ue(a),Be(a,"link",t),i.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},s.set(r,a))}}function fx(t,n){Xt.M(t,n);var i=Ci;if(i&&t){var s=Xn(i).hoistableScripts,r=Ei(t),a=s.get(r);a||(a=i.querySelector(vs(r)),a||(t=C({src:t,async:!0,type:"module"},n),(n=vt.get(r))&&ho(t,n),a=i.createElement("script"),Ue(a),Be(a,"link",t),i.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},s.set(r,a))}}function du(t,n,i,s){var r=(r=ne.current)?Hr(r):null;if(!r)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=Ai(i.href),i=Xn(r).hoistableStyles,s=i.get(n),s||(s={type:"style",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Ai(i.href);var a=Xn(r).hoistableStyles,l=a.get(t);if(l||(r=r.ownerDocument||r,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(t,l),(a=r.querySelector(bs(t)))&&!a._p&&(l.instance=a,l.state.loading=5),vt.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},vt.set(t,i),a||xx(r,t,i,l.state))),n&&s===null)throw Error(d(528,""));return l}if(n&&s!==null)throw Error(d(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ei(i),i=Xn(r).hoistableScripts,s=i.get(n),s||(s={type:"script",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function Ai(t){return'href="'+ft(t)+'"'}function bs(t){return'link[rel="stylesheet"]['+t+"]"}function hu(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function xx(t,n,i,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Be(n,"link",i),Ue(n),t.head.appendChild(n))}function Ei(t){return'[src="'+ft(t)+'"]'}function vs(t){return"script[async]"+t}function uu(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ft(i.href)+'"]');if(s)return n.instance=s,Ue(s),s;var r=C({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ue(s),Be(s,"style",r),qr(s,i.precedence,t),n.instance=s;case"stylesheet":r=Ai(i.href);var a=t.querySelector(bs(r));if(a)return n.state.loading|=4,n.instance=a,Ue(a),a;s=hu(i),(r=vt.get(r))&&co(s,r),a=(t.ownerDocument||t).createElement("link"),Ue(a);var l=a;return l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),Be(a,"link",s),n.state.loading|=4,qr(a,i.precedence,t),n.instance=a;case"script":return a=Ei(i.src),(r=t.querySelector(vs(a)))?(n.instance=r,Ue(r),r):(s=i,(r=vt.get(a))&&(s=C({},i),ho(s,r)),t=t.ownerDocument||t,r=t.createElement("script"),Ue(r),Be(r,"link",s),t.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,qr(s,i.precedence,t));return n.instance}function qr(t,n,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=s.length?s[s.length-1]:null,a=r,l=0;l<s.length;l++){var c=s[l];if(c.dataset.precedence===n)a=c;else if(a!==r)break}a?a.parentNode.insertBefore(t,a.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function co(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ho(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ir=null;function pu(t,n,i){if(Ir===null){var s=new Map,r=Ir=new Map;r.set(i,s)}else r=Ir,s=r.get(i),s||(s=new Map,r.set(i,s));if(s.has(t))return s;for(s.set(t,null),i=i.getElementsByTagName(t),r=0;r<i.length;r++){var a=i[r];if(!(a[Li]||a[Ye]||t==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var l=a.getAttribute(n)||"";l=t+l;var c=s.get(l);c?c.push(a):s.set(l,[a])}}return s}function fu(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function mx(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xu(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ws=null;function jx(){}function gx(t,n,i){if(ws===null)throw Error(d(475));var s=ws;if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Ai(i.href),a=t.querySelector(bs(r));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pr.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=a,Ue(a);return}a=t.ownerDocument||t,i=hu(i),(r=vt.get(r))&&co(i,r),a=a.createElement("link"),Ue(a);var l=a;l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),Be(a,"link",i),n.instance=a}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Pr.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function yx(){if(ws===null)throw Error(d(475));var t=ws;return t.stylesheets&&t.count===0&&uo(t,t.stylesheets),0<t.count?function(n){var i=setTimeout(function(){if(t.stylesheets&&uo(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i)}}:null}function Pr(){if(this.count--,this.count===0){if(this.stylesheets)uo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fr=null;function uo(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fr=new Map,n.forEach(bx,t),Fr=null,Pr.call(t))}function bx(t,n){if(!(n.state.loading&4)){var i=Fr.get(t);if(i)var s=i.get(null);else{i=new Map,Fr.set(t,i);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<r.length;a++){var l=r[a];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(i.set(l.dataset.precedence,l),s=l)}s&&i.set(null,s)}r=n.instance,l=r.getAttribute("data-precedence"),a=i.get(l)||s,a===s&&i.set(null,r),i.set(l,r),this.count++,s=Pr.bind(this),r.addEventListener("load",s),r.addEventListener("error",s),a?a.parentNode.insertBefore(r,a.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),n.state.loading|=4}}var Ts={$$typeof:Z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function vx(t,n,i,s,r,a,l,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=la(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.hiddenUpdates=la(null),this.identifierPrefix=s,this.onUncaughtError=r,this.onCaughtError=a,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function mu(t,n,i,s,r,a,l,c,f,w,E,z){return t=new vx(t,n,i,l,c,f,w,z),n=1,a===!0&&(n|=24),a=at(3,null,null,n),t.current=a,a.stateNode=t,n=Ya(),n.refCount++,t.pooledCache=n,n.refCount++,a.memoizedState={element:s,isDehydrated:i,cache:n},Ka(a),t}function ju(t){return t?(t=ri,t):ri}function gu(t,n,i,s,r,a){r=ju(r),s.context===null?s.context=r:s.pendingContext=r,s=sn(n),s.payload={element:i},a=a===void 0?null:a,a!==null&&(s.callback=a),i=rn(t,s,n),i!==null&&(ht(i,t,n),$i(i,t,n))}function yu(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function po(t,n){yu(t,n),(t=t.alternate)&&yu(t,n)}function bu(t){if(t.tag===13){var n=si(t,67108864);n!==null&&ht(n,t,67108864),po(t,67108864)}}var Br=!0;function wx(t,n,i,s){var r=O.T;O.T=null;var a=I.p;try{I.p=2,fo(t,n,i,s)}finally{I.p=a,O.T=r}}function Tx(t,n,i,s){var r=O.T;O.T=null;var a=I.p;try{I.p=8,fo(t,n,i,s)}finally{I.p=a,O.T=r}}function fo(t,n,i,s){if(Br){var r=xo(s);if(r===null)eo(t,n,s,Gr,i),wu(t,s);else if(Sx(r,t,n,i,s))s.stopPropagation();else if(wu(t,s),n&4&&-1<kx.indexOf(t)){for(;r!==null;){var a=Yn(r);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var l=Sn(a.pendingLanes);if(l!==0){var c=a;for(c.pendingLanes|=2,c.entangledLanes|=2;l;){var f=1<<31-st(l);c.entanglements[1]|=f,l&=~f}Nt(a),(pe&6)===0&&(Ar=St()+500,ms(0))}}break;case 13:c=si(a,2),c!==null&&ht(c,a,2),Or(),po(a,2)}if(a=xo(s),a===null&&eo(t,n,s,Gr,i),a===r)break;r=a}r!==null&&s.stopPropagation()}else eo(t,n,s,null,i)}}function xo(t){return t=ya(t),mo(t)}var Gr=null;function mo(t){if(Gr=null,t=Vn(t),t!==null){var n=g(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=S(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gr=t,null}function vu(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(op()){case Mo:return 2;case _o:return 8;case _s:case cp:return 32;case Uo:return 268435456;default:return 32}default:return 32}}var jo=!1,gn=null,yn=null,bn=null,ks=new Map,Ss=new Map,vn=[],kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wu(t,n){switch(t){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ks.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ss.delete(n.pointerId)}}function Cs(t,n,i,s,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:a,targetContainers:[r]},n!==null&&(n=Yn(n),n!==null&&bu(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),t)}function Sx(t,n,i,s,r){switch(n){case"focusin":return gn=Cs(gn,t,n,i,s,r),!0;case"dragenter":return yn=Cs(yn,t,n,i,s,r),!0;case"mouseover":return bn=Cs(bn,t,n,i,s,r),!0;case"pointerover":var a=r.pointerId;return ks.set(a,Cs(ks.get(a)||null,t,n,i,s,r)),!0;case"gotpointercapture":return a=r.pointerId,Ss.set(a,Cs(Ss.get(a)||null,t,n,i,s,r)),!0}return!1}function Tu(t){var n=Vn(t.target);if(n!==null){var i=g(n);if(i!==null){if(n=i.tag,n===13){if(n=S(i),n!==null){t.blockedOn=n,jp(t.priority,function(){if(i.tag===13){var s=dt();s=oa(s);var r=si(i,s);r!==null&&ht(r,i,s),po(i,s)}});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vr(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=xo(t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);ga=s,i.target.dispatchEvent(s),ga=null}else return n=Yn(i),n!==null&&bu(n),t.blockedOn=i,!1;n.shift()}return!0}function ku(t,n,i){Vr(t)&&i.delete(n)}function Cx(){jo=!1,gn!==null&&Vr(gn)&&(gn=null),yn!==null&&Vr(yn)&&(yn=null),bn!==null&&Vr(bn)&&(bn=null),ks.forEach(ku),Ss.forEach(ku)}function Yr(t,n){t.blockedOn===n&&(t.blockedOn=null,jo||(jo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Cx)))}var Xr=null;function Su(t){Xr!==t&&(Xr=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xr===t&&(Xr=null);for(var n=0;n<t.length;n+=3){var i=t[n],s=t[n+1],r=t[n+2];if(typeof s!="function"){if(mo(s||i)===null)continue;break}var a=Yn(i);a!==null&&(t.splice(n,3),n-=3,xl(a,{pending:!0,data:r,method:i.method,action:s},s,r))}}))}function As(t){function n(f){return Yr(f,t)}gn!==null&&Yr(gn,t),yn!==null&&Yr(yn,t),bn!==null&&Yr(bn,t),ks.forEach(n),Ss.forEach(n);for(var i=0;i<vn.length;i++){var s=vn[i];s.blockedOn===t&&(s.blockedOn=null)}for(;0<vn.length&&(i=vn[0],i.blockedOn===null);)Tu(i),i.blockedOn===null&&vn.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var r=i[s],a=i[s+1],l=r[Ke]||null;if(typeof a=="function")l||Su(i);else if(l){var c=null;if(a&&a.hasAttribute("formAction")){if(r=a,l=a[Ke]||null)c=l.formAction;else if(mo(r)!==null)continue}else c=l.action;typeof c=="function"?i[s+1]=c:(i.splice(s,3),s-=3),Su(i)}}}function go(t){this._internalRoot=t}Qr.prototype.render=go.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(d(409));var i=n.current,s=dt();gu(i,s,t,n,null,null)},Qr.prototype.unmount=go.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;gu(t.current,2,null,t,null,null),Or(),n[Gn]=null}};function Qr(t){this._internalRoot=t}Qr.prototype.unstable_scheduleHydration=function(t){if(t){var n=Fo();t={blockedOn:null,target:t,priority:n};for(var i=0;i<vn.length&&n!==0&&n<vn[i].priority;i++);vn.splice(i,0,t),i===0&&Tu(t)}};var Cu=u.version;if(Cu!=="19.1.1")throw Error(d(527,Cu,"19.1.1"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=b(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Ax={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Di=Wr.inject(Ax),it=Wr}catch{}}return Os.createRoot=function(t,n){if(!p(t))throw Error(d(299));var i=!1,s="",r=Fd,a=Bd,l=Gd,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(c=n.unstable_transitionCallbacks)),n=mu(t,1,!1,null,null,i,s,r,a,l,c,null),t[Gn]=n.current,$l(t),new go(n)},Os.hydrateRoot=function(t,n,i){if(!p(t))throw Error(d(299));var s=!1,r="",a=Fd,l=Bd,c=Gd,f=null,w=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onUncaughtError!==void 0&&(a=i.onUncaughtError),i.onCaughtError!==void 0&&(l=i.onCaughtError),i.onRecoverableError!==void 0&&(c=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(f=i.unstable_transitionCallbacks),i.formState!==void 0&&(w=i.formState)),n=mu(t,1,!0,n,i??null,s,r,a,l,c,f,w),n.context=ju(null),i=n.current,s=dt(),s=oa(s),r=sn(s),r.callback=null,rn(i,r,s),i=s,n.current.lanes=i,Ri(n,i),Nt(n),t[Gn]=n.current,$l(t),new Qr(n)},Os.version="19.1.1",Os}var _u;function Hx(){if(_u)return vo.exports;_u=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),vo.exports=Ux(),vo.exports}var qx=Hx();const Ix=Fu(qx);/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Uu="popstate";function Px(o={}){function u(d,p){let{pathname:g,search:S,hash:N}=d.location;return Ao("",{pathname:g,search:S,hash:N},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function h(d,p){return typeof p=="string"?p:Ds(p)}return Bx(u,h,null,o)}function ke(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Dt(o,u){if(!o){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Fx(){return Math.random().toString(36).substring(2,10)}function Hu(o,u){return{usr:o.state,key:o.key,idx:u}}function Ao(o,u,h=null,d){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof u=="string"?Oi(u):u,state:h,key:u&&u.key||d||Fx()}}function Ds({pathname:o="/",search:u="",hash:h=""}){return u&&u!=="?"&&(o+=u.charAt(0)==="?"?u:"?"+u),h&&h!=="#"&&(o+=h.charAt(0)==="#"?h:"#"+h),o}function Oi(o){let u={};if(o){let h=o.indexOf("#");h>=0&&(u.hash=o.substring(h),o=o.substring(0,h));let d=o.indexOf("?");d>=0&&(u.search=o.substring(d),o=o.substring(0,d)),o&&(u.pathname=o)}return u}function Bx(o,u,h,d={}){let{window:p=document.defaultView,v5Compat:g=!1}=d,S=p.history,N="POP",b=null,x=C();x==null&&(x=0,S.replaceState({...S.state,idx:x},""));function C(){return(S.state||{idx:null}).idx}function L(){N="POP";let F=C(),_=F==null?null:F-x;x=F,b&&b({action:N,location:q.location,delta:_})}function M(F,_){N="PUSH";let U=Ao(q.location,F,_);x=C()+1;let Z=Hu(U,x),ce=q.createHref(U);try{S.pushState(Z,"",ce)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;p.location.assign(ce)}g&&b&&b({action:N,location:q.location,delta:1})}function Q(F,_){N="REPLACE";let U=Ao(q.location,F,_);x=C();let Z=Hu(U,x),ce=q.createHref(U);S.replaceState(Z,"",ce),g&&b&&b({action:N,location:q.location,delta:0})}function Y(F){return Gx(F)}let q={get action(){return N},get location(){return o(p,S)},listen(F){if(b)throw new Error("A history only accepts one active listener");return p.addEventListener(Uu,L),b=F,()=>{p.removeEventListener(Uu,L),b=null}},createHref(F){return u(p,F)},createURL:Y,encodeLocation(F){let _=Y(F);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:M,replace:Q,go(F){return S.go(F)}};return q}function Gx(o,u=!1){let h="http://localhost";typeof window<"u"&&(h=window.location.origin!=="null"?window.location.origin:window.location.href),ke(h,"No window.location.(origin|href) available to create URL");let d=typeof o=="string"?o:Ds(o);return d=d.replace(/ $/,"%20"),!u&&d.startsWith("//")&&(d=h+d),new URL(d,h)}function Bu(o,u,h="/"){return Vx(o,u,h,!1)}function Vx(o,u,h,d){let p=typeof u=="string"?Oi(u):u,g=Wt(p.pathname||"/",h);if(g==null)return null;let S=Gu(o);Yx(S);let N=null;for(let b=0;N==null&&b<S.length;++b){let x=im(g);N=tm(S[b],x,d)}return N}function Gu(o,u=[],h=[],d=""){let p=(g,S,N)=>{let b={relativePath:N===void 0?g.path||"":N,caseSensitive:g.caseSensitive===!0,childrenIndex:S,route:g};b.relativePath.startsWith("/")&&(ke(b.relativePath.startsWith(d),`Absolute route path "${b.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(d.length));let x=Qt([d,b.relativePath]),C=h.concat(b);g.children&&g.children.length>0&&(ke(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Gu(g.children,u,C,x)),!(g.path==null&&!g.index)&&u.push({path:x,score:$x(x,g.index),routesMeta:C})};return o.forEach((g,S)=>{var N;if(g.path===""||!((N=g.path)!=null&&N.includes("?")))p(g,S);else for(let b of Vu(g.path))p(g,S,b)}),u}function Vu(o){let u=o.split("/");if(u.length===0)return[];let[h,...d]=u,p=h.endsWith("?"),g=h.replace(/\?$/,"");if(d.length===0)return p?[g,""]:[g];let S=Vu(d.join("/")),N=[];return N.push(...S.map(b=>b===""?g:[g,b].join("/"))),p&&N.push(...S),N.map(b=>o.startsWith("/")&&b===""?"/":b)}function Yx(o){o.sort((u,h)=>u.score!==h.score?h.score-u.score:em(u.routesMeta.map(d=>d.childrenIndex),h.routesMeta.map(d=>d.childrenIndex)))}var Xx=/^:[\w-]+$/,Qx=3,Wx=2,Kx=1,Zx=10,Jx=-2,qu=o=>o==="*";function $x(o,u){let h=o.split("/"),d=h.length;return h.some(qu)&&(d+=Jx),u&&(d+=Wx),h.filter(p=>!qu(p)).reduce((p,g)=>p+(Xx.test(g)?Qx:g===""?Kx:Zx),d)}function em(o,u){return o.length===u.length&&o.slice(0,-1).every((d,p)=>d===u[p])?o[o.length-1]-u[u.length-1]:0}function tm(o,u,h=!1){let{routesMeta:d}=o,p={},g="/",S=[];for(let N=0;N<d.length;++N){let b=d[N],x=N===d.length-1,C=g==="/"?u:u.slice(g.length)||"/",L=$r({path:b.relativePath,caseSensitive:b.caseSensitive,end:x},C),M=b.route;if(!L&&x&&h&&!d[d.length-1].route.index&&(L=$r({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},C)),!L)return null;Object.assign(p,L.params),S.push({params:p,pathname:Qt([g,L.pathname]),pathnameBase:lm(Qt([g,L.pathnameBase])),route:M}),L.pathnameBase!=="/"&&(g=Qt([g,L.pathnameBase]))}return S}function $r(o,u){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[h,d]=nm(o.path,o.caseSensitive,o.end),p=u.match(h);if(!p)return null;let g=p[0],S=g.replace(/(.)\/+$/,"$1"),N=p.slice(1);return{params:d.reduce((x,{paramName:C,isOptional:L},M)=>{if(C==="*"){let Y=N[M]||"";S=g.slice(0,g.length-Y.length).replace(/(.)\/+$/,"$1")}const Q=N[M];return L&&!Q?x[C]=void 0:x[C]=(Q||"").replace(/%2F/g,"/"),x},{}),pathname:g,pathnameBase:S,pattern:o}}function nm(o,u=!1,h=!0){Dt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let d=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,N,b)=>(d.push({paramName:N,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(d.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):h?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,u?void 0:"i"),d]}function im(o){try{return o.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Dt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),o}}function Wt(o,u){if(u==="/")return o;if(!o.toLowerCase().startsWith(u.toLowerCase()))return null;let h=u.endsWith("/")?u.length-1:u.length,d=o.charAt(h);return d&&d!=="/"?null:o.slice(h)||"/"}function sm(o,u="/"){let{pathname:h,search:d="",hash:p=""}=typeof o=="string"?Oi(o):o;return{pathname:h?h.startsWith("/")?h:rm(h,u):u,search:om(d),hash:cm(p)}}function rm(o,u){let h=u.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?h.length>1&&h.pop():p!=="."&&h.push(p)}),h.length>1?h.join("/"):"/"}function So(o,u,h,d){return`Cannot include a '${o}' character in a manually specified \`to.${u}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${h}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function am(o){return o.filter((u,h)=>h===0||u.route.path&&u.route.path.length>0)}function Yu(o){let u=am(o);return u.map((h,d)=>d===u.length-1?h.pathname:h.pathnameBase)}function Xu(o,u,h,d=!1){let p;typeof o=="string"?p=Oi(o):(p={...o},ke(!p.pathname||!p.pathname.includes("?"),So("?","pathname","search",p)),ke(!p.pathname||!p.pathname.includes("#"),So("#","pathname","hash",p)),ke(!p.search||!p.search.includes("#"),So("#","search","hash",p)));let g=o===""||p.pathname==="",S=g?"/":p.pathname,N;if(S==null)N=h;else{let L=u.length-1;if(!d&&S.startsWith("..")){let M=S.split("/");for(;M[0]==="..";)M.shift(),L-=1;p.pathname=M.join("/")}N=L>=0?u[L]:"/"}let b=sm(p,N),x=S&&S!=="/"&&S.endsWith("/"),C=(g||S===".")&&h.endsWith("/");return!b.pathname.endsWith("/")&&(x||C)&&(b.pathname+="/"),b}var Qt=o=>o.join("/").replace(/\/\/+/g,"/"),lm=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),om=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,cm=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function dm(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var Qu=["POST","PUT","PATCH","DELETE"];new Set(Qu);var hm=["GET",...Qu];new Set(hm);var Ni=A.createContext(null);Ni.displayName="DataRouter";var ea=A.createContext(null);ea.displayName="DataRouterState";A.createContext(!1);var Wu=A.createContext({isTransitioning:!1});Wu.displayName="ViewTransition";var um=A.createContext(new Map);um.displayName="Fetchers";var pm=A.createContext(null);pm.displayName="Await";var zt=A.createContext(null);zt.displayName="Navigation";var zs=A.createContext(null);zs.displayName="Location";var Kt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Kt.displayName="Route";var No=A.createContext(null);No.displayName="RouteError";function fm(o,{relative:u}={}){ke(Rs(),"useHref() may be used only in the context of a <Router> component.");let{basename:h,navigator:d}=A.useContext(zt),{hash:p,pathname:g,search:S}=Ls(o,{relative:u}),N=g;return h!=="/"&&(N=g==="/"?h:Qt([h,g])),d.createHref({pathname:N,search:S,hash:p})}function Rs(){return A.useContext(zs)!=null}function Bn(){return ke(Rs(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(zs).location}var Ku="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Zu(o){A.useContext(zt).static||A.useLayoutEffect(o)}function ta(){let{isDataRoute:o}=A.useContext(Kt);return o?Am():xm()}function xm(){ke(Rs(),"useNavigate() may be used only in the context of a <Router> component.");let o=A.useContext(Ni),{basename:u,navigator:h}=A.useContext(zt),{matches:d}=A.useContext(Kt),{pathname:p}=Bn(),g=JSON.stringify(Yu(d)),S=A.useRef(!1);return Zu(()=>{S.current=!0}),A.useCallback((b,x={})=>{if(Dt(S.current,Ku),!S.current)return;if(typeof b=="number"){h.go(b);return}let C=Xu(b,JSON.parse(g),p,x.relative==="path");o==null&&u!=="/"&&(C.pathname=C.pathname==="/"?u:Qt([u,C.pathname])),(x.replace?h.replace:h.push)(C,x.state,x)},[u,h,g,p,o])}A.createContext(null);function Ls(o,{relative:u}={}){let{matches:h}=A.useContext(Kt),{pathname:d}=Bn(),p=JSON.stringify(Yu(h));return A.useMemo(()=>Xu(o,JSON.parse(p),d,u==="path"),[o,p,d,u])}function mm(o,u){return Ju(o,u)}function Ju(o,u,h,d){var _;ke(Rs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=A.useContext(zt),{matches:g}=A.useContext(Kt),S=g[g.length-1],N=S?S.params:{},b=S?S.pathname:"/",x=S?S.pathnameBase:"/",C=S&&S.route;{let U=C&&C.path||"";$u(b,!C||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let L=Bn(),M;if(u){let U=typeof u=="string"?Oi(u):u;ke(x==="/"||((_=U.pathname)==null?void 0:_.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`),M=U}else M=L;let Q=M.pathname||"/",Y=Q;if(x!=="/"){let U=x.replace(/^\//,"").split("/");Y="/"+Q.replace(/^\//,"").split("/").slice(U.length).join("/")}let q=Bu(o,{pathname:Y});Dt(C||q!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Dt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=vm(q&&q.map(U=>Object.assign({},U,{params:Object.assign({},N,U.params),pathname:Qt([x,p.encodeLocation?p.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?x:Qt([x,p.encodeLocation?p.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),g,h,d);return u&&F?A.createElement(zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},F):F}function jm(){let o=Cm(),u=dm(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),h=o instanceof Error?o.stack:null,d="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:d},g={padding:"2px 4px",backgroundColor:d},S=null;return console.error("Error handled by React Router default ErrorBoundary:",o),S=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:g},"ErrorBoundary")," or"," ",A.createElement("code",{style:g},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},u),h?A.createElement("pre",{style:p},h):null,S)}var gm=A.createElement(jm,null),ym=class extends A.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,u){return u.location!==o.location||u.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:u.error,location:u.location,revalidation:o.revalidation||u.revalidation}}componentDidCatch(o,u){console.error("React Router caught the following error during render",o,u)}render(){return this.state.error!==void 0?A.createElement(Kt.Provider,{value:this.props.routeContext},A.createElement(No.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bm({routeContext:o,match:u,children:h}){let d=A.useContext(Ni);return d&&d.static&&d.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=u.route.id),A.createElement(Kt.Provider,{value:o},h)}function vm(o,u=[],h=null,d=null){if(o==null){if(!h)return null;if(h.errors)o=h.matches;else if(u.length===0&&!h.initialized&&h.matches.length>0)o=h.matches;else return null}let p=o,g=h==null?void 0:h.errors;if(g!=null){let b=p.findIndex(x=>x.route.id&&(g==null?void 0:g[x.route.id])!==void 0);ke(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),p=p.slice(0,Math.min(p.length,b+1))}let S=!1,N=-1;if(h)for(let b=0;b<p.length;b++){let x=p[b];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(N=b),x.route.id){let{loaderData:C,errors:L}=h,M=x.route.loader&&!C.hasOwnProperty(x.route.id)&&(!L||L[x.route.id]===void 0);if(x.route.lazy||M){S=!0,N>=0?p=p.slice(0,N+1):p=[p[0]];break}}}return p.reduceRight((b,x,C)=>{let L,M=!1,Q=null,Y=null;h&&(L=g&&x.route.id?g[x.route.id]:void 0,Q=x.route.errorElement||gm,S&&(N<0&&C===0?($u("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,Y=null):N===C&&(M=!0,Y=x.route.hydrateFallbackElement||null)));let q=u.concat(p.slice(0,C+1)),F=()=>{let _;return L?_=Q:M?_=Y:x.route.Component?_=A.createElement(x.route.Component,null):x.route.element?_=x.route.element:_=b,A.createElement(bm,{match:x,routeContext:{outlet:b,matches:q,isDataRoute:h!=null},children:_})};return h&&(x.route.ErrorBoundary||x.route.errorElement||C===0)?A.createElement(ym,{location:h.location,revalidation:h.revalidation,component:Q,error:L,children:F(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):F()},null)}function Do(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wm(o){let u=A.useContext(Ni);return ke(u,Do(o)),u}function Tm(o){let u=A.useContext(ea);return ke(u,Do(o)),u}function km(o){let u=A.useContext(Kt);return ke(u,Do(o)),u}function zo(o){let u=km(o),h=u.matches[u.matches.length-1];return ke(h.route.id,`${o} can only be used on routes that contain a unique "id"`),h.route.id}function Sm(){return zo("useRouteId")}function Cm(){var d;let o=A.useContext(No),u=Tm("useRouteError"),h=zo("useRouteError");return o!==void 0?o:(d=u.errors)==null?void 0:d[h]}function Am(){let{router:o}=wm("useNavigate"),u=zo("useNavigate"),h=A.useRef(!1);return Zu(()=>{h.current=!0}),A.useCallback(async(p,g={})=>{Dt(h.current,Ku),h.current&&(typeof p=="number"?o.navigate(p):await o.navigate(p,{fromRouteId:u,...g}))},[o,u])}var Iu={};function $u(o,u,h){!u&&!Iu[o]&&(Iu[o]=!0,Dt(!1,h))}A.memo(Em);function Em({routes:o,future:u,state:h}){return Ju(o,void 0,h,u)}function B(o){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Om({basename:o="/",children:u=null,location:h,navigationType:d="POP",navigator:p,static:g=!1}){ke(!Rs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=o.replace(/^\/*/,"/"),N=A.useMemo(()=>({basename:S,navigator:p,static:g,future:{}}),[S,p,g]);typeof h=="string"&&(h=Oi(h));let{pathname:b="/",search:x="",hash:C="",state:L=null,key:M="default"}=h,Q=A.useMemo(()=>{let Y=Wt(b,S);return Y==null?null:{location:{pathname:Y,search:x,hash:C,state:L,key:M},navigationType:d}},[S,b,x,C,L,M,d]);return Dt(Q!=null,`<Router basename="${S}"> is not able to match the URL "${b}${x}${C}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:A.createElement(zt.Provider,{value:N},A.createElement(zs.Provider,{children:u,value:Q}))}function Nm({children:o,location:u}){return mm(Eo(o),u)}function Eo(o,u=[]){let h=[];return A.Children.forEach(o,(d,p)=>{if(!A.isValidElement(d))return;let g=[...u,p];if(d.type===A.Fragment){h.push.apply(h,Eo(d.props.children,g));return}ke(d.type===B,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!d.props.index||!d.props.children,"An index route cannot have child routes.");let S={id:d.props.id||g.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(S.children=Eo(d.props.children,g)),h.push(S)}),h}var Zr="get",Jr="application/x-www-form-urlencoded";function na(o){return o!=null&&typeof o.tagName=="string"}function Dm(o){return na(o)&&o.tagName.toLowerCase()==="button"}function zm(o){return na(o)&&o.tagName.toLowerCase()==="form"}function Rm(o){return na(o)&&o.tagName.toLowerCase()==="input"}function Lm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Mm(o,u){return o.button===0&&(!u||u==="_self")&&!Lm(o)}var Kr=null;function _m(){if(Kr===null)try{new FormData(document.createElement("form"),0),Kr=!1}catch{Kr=!0}return Kr}var Um=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Co(o){return o!=null&&!Um.has(o)?(Dt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jr}"`),null):o}function Hm(o,u){let h,d,p,g,S;if(zm(o)){let N=o.getAttribute("action");d=N?Wt(N,u):null,h=o.getAttribute("method")||Zr,p=Co(o.getAttribute("enctype"))||Jr,g=new FormData(o)}else if(Dm(o)||Rm(o)&&(o.type==="submit"||o.type==="image")){let N=o.form;if(N==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=o.getAttribute("formaction")||N.getAttribute("action");if(d=b?Wt(b,u):null,h=o.getAttribute("formmethod")||N.getAttribute("method")||Zr,p=Co(o.getAttribute("formenctype"))||Co(N.getAttribute("enctype"))||Jr,g=new FormData(N,o),!_m()){let{name:x,type:C,value:L}=o;if(C==="image"){let M=x?`${x}.`:"";g.append(`${M}x`,"0"),g.append(`${M}y`,"0")}else x&&g.append(x,L)}}else{if(na(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');h=Zr,d=null,p=Jr,S=o}return g&&p==="text/plain"&&(S=g,g=void 0),{action:d,method:h.toLowerCase(),encType:p,formData:g,body:S}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ro(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function qm(o,u,h){let d=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return d.pathname==="/"?d.pathname=`_root.${h}`:u&&Wt(d.pathname,u)==="/"?d.pathname=`${u.replace(/\/$/,"")}/_root.${h}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${h}`,d}async function Im(o,u){if(o.id in u)return u[o.id];try{let h=await import(o.module);return u[o.id]=h,h}catch(h){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(h),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Pm(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Fm(o,u,h){let d=await Promise.all(o.map(async p=>{let g=u.routes[p.route.id];if(g){let S=await Im(g,h);return S.links?S.links():[]}return[]}));return Ym(d.flat(1).filter(Pm).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Pu(o,u,h,d,p,g){let S=(b,x)=>h[x]?b.route.id!==h[x].route.id:!0,N=(b,x)=>{var C;return h[x].pathname!==b.pathname||((C=h[x].route.path)==null?void 0:C.endsWith("*"))&&h[x].params["*"]!==b.params["*"]};return g==="assets"?u.filter((b,x)=>S(b,x)||N(b,x)):g==="data"?u.filter((b,x)=>{var L;let C=d.routes[b.route.id];if(!C||!C.hasLoader)return!1;if(S(b,x)||N(b,x))return!0;if(b.route.shouldRevalidate){let M=b.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:((L=h[0])==null?void 0:L.params)||{},nextUrl:new URL(o,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function Bm(o,u,{includeHydrateFallback:h}={}){return Gm(o.map(d=>{let p=u.routes[d.route.id];if(!p)return[];let g=[p.module];return p.clientActionModule&&(g=g.concat(p.clientActionModule)),p.clientLoaderModule&&(g=g.concat(p.clientLoaderModule)),h&&p.hydrateFallbackModule&&(g=g.concat(p.hydrateFallbackModule)),p.imports&&(g=g.concat(p.imports)),g}).flat(1))}function Gm(o){return[...new Set(o)]}function Vm(o){let u={},h=Object.keys(o).sort();for(let d of h)u[d]=o[d];return u}function Ym(o,u){let h=new Set;return new Set(u),o.reduce((d,p)=>{let g=JSON.stringify(Vm(p));return h.has(g)||(h.add(g),d.push({key:g,link:p})),d},[])}function ep(){let o=A.useContext(Ni);return Ro(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Xm(){let o=A.useContext(ea);return Ro(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Lo=A.createContext(void 0);Lo.displayName="FrameworkContext";function tp(){let o=A.useContext(Lo);return Ro(o,"You must render this element inside a <HydratedRouter> element"),o}function Qm(o,u){let h=A.useContext(Lo),[d,p]=A.useState(!1),[g,S]=A.useState(!1),{onFocus:N,onBlur:b,onMouseEnter:x,onMouseLeave:C,onTouchStart:L}=u,M=A.useRef(null);A.useEffect(()=>{if(o==="render"&&S(!0),o==="viewport"){let q=_=>{_.forEach(U=>{S(U.isIntersecting)})},F=new IntersectionObserver(q,{threshold:.5});return M.current&&F.observe(M.current),()=>{F.disconnect()}}},[o]),A.useEffect(()=>{if(d){let q=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(q)}}},[d]);let Q=()=>{p(!0)},Y=()=>{p(!1),S(!1)};return h?o!=="intent"?[g,M,{}]:[g,M,{onFocus:Ns(N,Q),onBlur:Ns(b,Y),onMouseEnter:Ns(x,Q),onMouseLeave:Ns(C,Y),onTouchStart:Ns(L,Q)}]:[!1,M,{}]}function Ns(o,u){return h=>{o&&o(h),h.defaultPrevented||u(h)}}function Wm({page:o,...u}){let{router:h}=ep(),d=A.useMemo(()=>Bu(h.routes,o,h.basename),[h.routes,o,h.basename]);return d?A.createElement(Zm,{page:o,matches:d,...u}):null}function Km(o){let{manifest:u,routeModules:h}=tp(),[d,p]=A.useState([]);return A.useEffect(()=>{let g=!1;return Fm(o,u,h).then(S=>{g||p(S)}),()=>{g=!0}},[o,u,h]),d}function Zm({page:o,matches:u,...h}){let d=Bn(),{manifest:p,routeModules:g}=tp(),{basename:S}=ep(),{loaderData:N,matches:b}=Xm(),x=A.useMemo(()=>Pu(o,u,b,p,d,"data"),[o,u,b,p,d]),C=A.useMemo(()=>Pu(o,u,b,p,d,"assets"),[o,u,b,p,d]),L=A.useMemo(()=>{if(o===d.pathname+d.search+d.hash)return[];let Y=new Set,q=!1;if(u.forEach(_=>{var Z;let U=p.routes[_.route.id];!U||!U.hasLoader||(!x.some(ce=>ce.route.id===_.route.id)&&_.route.id in N&&((Z=g[_.route.id])!=null&&Z.shouldRevalidate)||U.hasClientLoader?q=!0:Y.add(_.route.id))}),Y.size===0)return[];let F=qm(o,S,"data");return q&&Y.size>0&&F.searchParams.set("_routes",u.filter(_=>Y.has(_.route.id)).map(_=>_.route.id).join(",")),[F.pathname+F.search]},[S,N,d,p,x,u,o,g]),M=A.useMemo(()=>Bm(C,p),[C,p]),Q=Km(C);return A.createElement(A.Fragment,null,L.map(Y=>A.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...h})),M.map(Y=>A.createElement("link",{key:Y,rel:"modulepreload",href:Y,...h})),Q.map(({key:Y,link:q})=>A.createElement("link",{key:Y,...q})))}function Jm(...o){return u=>{o.forEach(h=>{typeof h=="function"?h(u):h!=null&&(h.current=u)})}}var np=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{np&&(window.__reactRouterVersion="7.7.1")}catch{}function $m({basename:o,children:u,window:h}){let d=A.useRef();d.current==null&&(d.current=Px({window:h,v5Compat:!0}));let p=d.current,[g,S]=A.useState({action:p.action,location:p.location}),N=A.useCallback(b=>{A.startTransition(()=>S(b))},[S]);return A.useLayoutEffect(()=>p.listen(N),[p,N]),A.createElement(Om,{basename:o,children:u,location:g.location,navigationType:g.action,navigator:p})}var ip=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V=A.forwardRef(function({onClick:u,discover:h="render",prefetch:d="none",relative:p,reloadDocument:g,replace:S,state:N,target:b,to:x,preventScrollReset:C,viewTransition:L,...M},Q){let{basename:Y}=A.useContext(zt),q=typeof x=="string"&&ip.test(x),F,_=!1;if(typeof x=="string"&&q&&(F=x,np))try{let Se=new URL(window.location.href),tt=x.startsWith("//")?new URL(Se.protocol+x):new URL(x),ut=Wt(tt.pathname,Y);tt.origin===Se.origin&&ut!=null?x=ut+tt.search+tt.hash:_=!0}catch{Dt(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=fm(x,{relative:p}),[Z,ce,te]=Qm(d,M),Me=ij(x,{replace:S,state:N,target:b,preventScrollReset:C,relative:p,viewTransition:L});function ze(Se){u&&u(Se),Se.defaultPrevented||Me(Se)}let _e=A.createElement("a",{...M,...te,href:F||U,onClick:_||g?u:ze,ref:Jm(Q,ce),target:b,"data-discover":!q&&h==="render"?"true":void 0});return Z&&!q?A.createElement(A.Fragment,null,_e,A.createElement(Wm,{page:U})):_e});V.displayName="Link";var ej=A.forwardRef(function({"aria-current":u="page",caseSensitive:h=!1,className:d="",end:p=!1,style:g,to:S,viewTransition:N,children:b,...x},C){let L=Ls(S,{relative:x.relative}),M=Bn(),Q=A.useContext(ea),{navigator:Y,basename:q}=A.useContext(zt),F=Q!=null&&oj(L)&&N===!0,_=Y.encodeLocation?Y.encodeLocation(L).pathname:L.pathname,U=M.pathname,Z=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;h||(U=U.toLowerCase(),Z=Z?Z.toLowerCase():null,_=_.toLowerCase()),Z&&q&&(Z=Wt(Z,q)||Z);const ce=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let te=U===_||!p&&U.startsWith(_)&&U.charAt(ce)==="/",Me=Z!=null&&(Z===_||!p&&Z.startsWith(_)&&Z.charAt(_.length)==="/"),ze={isActive:te,isPending:Me,isTransitioning:F},_e=te?u:void 0,Se;typeof d=="function"?Se=d(ze):Se=[d,te?"active":null,Me?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let tt=typeof g=="function"?g(ze):g;return A.createElement(V,{...x,"aria-current":_e,className:Se,ref:C,style:tt,to:S,viewTransition:N},typeof b=="function"?b(ze):b)});ej.displayName="NavLink";var tj=A.forwardRef(({discover:o="render",fetcherKey:u,navigate:h,reloadDocument:d,replace:p,state:g,method:S=Zr,action:N,onSubmit:b,relative:x,preventScrollReset:C,viewTransition:L,...M},Q)=>{let Y=aj(),q=lj(N,{relative:x}),F=S.toLowerCase()==="get"?"get":"post",_=typeof N=="string"&&ip.test(N),U=Z=>{if(b&&b(Z),Z.defaultPrevented)return;Z.preventDefault();let ce=Z.nativeEvent.submitter,te=(ce==null?void 0:ce.getAttribute("formmethod"))||S;Y(ce||Z.currentTarget,{fetcherKey:u,method:te,navigate:h,replace:p,state:g,relative:x,preventScrollReset:C,viewTransition:L})};return A.createElement("form",{ref:Q,method:F,action:q,onSubmit:d?b:U,...M,"data-discover":!_&&o==="render"?"true":void 0})});tj.displayName="Form";function nj(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sp(o){let u=A.useContext(Ni);return ke(u,nj(o)),u}function ij(o,{target:u,replace:h,state:d,preventScrollReset:p,relative:g,viewTransition:S}={}){let N=ta(),b=Bn(),x=Ls(o,{relative:g});return A.useCallback(C=>{if(Mm(C,u)){C.preventDefault();let L=h!==void 0?h:Ds(b)===Ds(x);N(o,{replace:L,state:d,preventScrollReset:p,relative:g,viewTransition:S})}},[b,N,x,h,d,u,o,p,g,S])}var sj=0,rj=()=>`__${String(++sj)}__`;function aj(){let{router:o}=sp("useSubmit"),{basename:u}=A.useContext(zt),h=Sm();return A.useCallback(async(d,p={})=>{let{action:g,method:S,encType:N,formData:b,body:x}=Hm(d,u);if(p.navigate===!1){let C=p.fetcherKey||rj();await o.fetch(C,h,p.action||g,{preventScrollReset:p.preventScrollReset,formData:b,body:x,formMethod:p.method||S,formEncType:p.encType||N,flushSync:p.flushSync})}else await o.navigate(p.action||g,{preventScrollReset:p.preventScrollReset,formData:b,body:x,formMethod:p.method||S,formEncType:p.encType||N,replace:p.replace,state:p.state,fromRouteId:h,flushSync:p.flushSync,viewTransition:p.viewTransition})},[o,u,h])}function lj(o,{relative:u}={}){let{basename:h}=A.useContext(zt),d=A.useContext(Kt);ke(d,"useFormAction must be used inside a RouteContext");let[p]=d.matches.slice(-1),g={...Ls(o||".",{relative:u})},S=Bn();if(o==null){g.search=S.search;let N=new URLSearchParams(g.search),b=N.getAll("index");if(b.some(C=>C==="")){N.delete("index"),b.filter(L=>L).forEach(L=>N.append("index",L));let C=N.toString();g.search=C?`?${C}`:""}}return(!o||o===".")&&p.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),h!=="/"&&(g.pathname=g.pathname==="/"?h:Qt([h,g.pathname])),Ds(g)}function oj(o,{relative:u}={}){let h=A.useContext(Wu);ke(h!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=sp("useViewTransitionState"),p=Ls(o,{relative:u});if(!h.isTransitioning)return!1;let g=Wt(h.currentLocation.pathname,d)||h.currentLocation.pathname,S=Wt(h.nextLocation.pathname,d)||h.nextLocation.pathname;return $r(p.pathname,S)!=null||$r(p.pathname,g)!=null}const rp="/assets/3958929-ITXNbw8F.jpg",cj=()=>{const[o,u]=A.useState({email:"",password:""}),[h,d]=A.useState({}),[p,g]=A.useState(!1),[S,N]=A.useState(""),[b,x]=A.useState(!1),C=ta(),L=q=>{const{name:F,value:_}=q.target;u(U=>({...U,[F]:_}))},M=()=>{const q={};return o.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(q.email="Invalid email format"):q.email="Email is required",o.password||(q.password="Password is required"),d(q),Object.keys(q).length===0},Q=q=>{sessionStorage.setItem("authToken",q.token),sessionStorage.setItem("userInfo",JSON.stringify(q.user)),C("/Home")},Y=async q=>{if(q.preventDefault(),!!M()){N(""),x(!0);try{const F=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),_=F.headers.get("content-type"),U=_&&_.includes("application/json")?await F.json():null;if(!F.ok)throw F.status===401?new Error("Invalid email or password"):new Error((U==null?void 0:U.message)||"Login failed");Q(U)}catch(F){N(F.message||"Failed to login")}finally{x(!1)}}};return e.jsxs("div",{className:"login-container",children:[e.jsx("div",{className:"image-container",style:{backgroundImage:`url(${rp})`}}),e.jsxs("div",{className:"login-page",children:[e.jsx("header",{children:"LearnCourseOnline"}),S&&e.jsx("p",{className:"error-message",children:S}),e.jsx("form",{onSubmit:Y,children:e.jsxs("fieldset",{disabled:b,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"email",name:"email",placeholder:"Email",value:o.email,onChange:L,autoComplete:"username"}),h.email&&e.jsx("span",{className:"field-error",children:h.email})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:p?"text":"password",name:"password",placeholder:"Password",value:o.password,onChange:L,autoComplete:"current-password"}),e.jsx("span",{onClick:()=>g(!p),className:"toggle-password-text",role:"button",tabIndex:0,onKeyDown:q=>{(q.key==="Enter"||q.key===" ")&&g(!p)},children:p?"Hide":"Show"}),h.password&&e.jsx("span",{className:"field-error",children:h.password})]}),e.jsx("button",{type:"submit",children:b?"Logging in...":"Login"})]})}),e.jsx("div",{className:"auth-links",children:e.jsx("p",{className:"switch",onClick:()=>C("/Sign"),tabIndex:0,role:"button",children:"Don't have an account? Signup"})})]})]})},dj=()=>{const[o,u]=A.useState(null),[h,d]=A.useState(""),[p,g]=A.useState(""),[S,N]=A.useState(""),b=ta();A.useEffect(()=>{const L=JSON.parse(sessionStorage.getItem("userInfo"));L?u(L):b("/")},[b]);const x=async()=>{if(!p||!h)return N("All password fields are required");try{const L=await fetch("/api/auth/update-password",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:o.id,oldPassword:p,newPassword:h})}),M=await L.json();if(!L.ok)throw new Error(M.message||"Failed to update password");N("Password updated successfully!"),g(""),d("")}catch(L){N(L.message)}},C=()=>{sessionStorage.removeItem("authToken"),sessionStorage.removeItem("userInfo"),b("/")};return o?e.jsxs("div",{children:[e.jsx("h2",{class:"h1",children:"Account Details"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Name:"})," ",o.username]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," ",o.email]}),e.jsx("h3",{class:"h3",children:"Change Password"}),e.jsx("input",{type:"password",placeholder:"Old Password",value:p,onChange:L=>g(L.target.value)}),e.jsx("input",{type:"password",placeholder:"New Password",value:h,onChange:L=>d(L.target.value)}),e.jsx("button",{onClick:x,children:"Update Password"}),e.jsx("h3",{children:"Logout"}),e.jsx("button",{class:"log",onClick:C,children:"Logout"}),S&&e.jsx("p",{children:S})]}):e.jsx("p",{children:"Loading..."})},hj=()=>{const[o,u]=A.useState({username:"",email:"",password:""}),[h,d]=A.useState({}),[p,g]=A.useState(0),[S,N]=A.useState(""),[b,x]=A.useState(!1),[C,L]=A.useState(!1),M=ta(),Q=_=>{const{name:U,value:Z}=_.target;u(ce=>({...ce,[U]:Z})),U==="password"&&Y(Z)},Y=_=>{let U=0;_.length>=6&&U++,_.length>=8&&U++,/[A-Z]/.test(_)&&U++,/[0-9]/.test(_)&&U++,/[^A-Za-z0-9]/.test(_)&&U++,g(U)},q=()=>{const _={};return o.username.trim()?o.username.length<3&&(_.username="Username must be at least 3 characters"):_.username="Username is required",o.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(_.email="Invalid email format"):_.email="Email is required",o.password?o.password.length<6&&(_.password="Password must be at least 6 characters"):_.password="Password is required",d(_),Object.keys(_).length===0},F=async _=>{if(_.preventDefault(),!!q()){N(""),x(!0);try{const U=await fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),Z=U.headers.get("content-type"),ce=Z&&Z.includes("application/json")?await U.json():null;if(!U.ok)throw U.status===409?new Error("Email already exists"):new Error((ce==null?void 0:ce.message)||"Signup failed");L(!0),setTimeout(()=>M("/"),2e3)}catch(U){N(U.message||"Failed to signup")}finally{x(!1)}}};return e.jsxs("div",{className:"signup-wrapper",children:[e.jsx("div",{className:"image-container",style:{backgroundImage:`url(${rp})`}}),e.jsxs("div",{className:"signup-container",children:[e.jsx("header",{children:"LearnCourseOnline"}),e.jsxs("div",{className:"form-container",children:[S&&e.jsx("p",{className:"error-message",children:S}),C&&e.jsx("p",{className:"success-message",children:"Signup successful! Redirecting to login..."}),e.jsx("form",{onSubmit:F,children:e.jsxs("fieldset",{disabled:b||C,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",name:"username",placeholder:"Username",value:o.username,onChange:Q,autoComplete:"username"}),h.username&&e.jsx("span",{className:"field-error",children:h.username})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"email",name:"email",placeholder:"Email",value:o.email,onChange:Q,autoComplete:"email"}),h.email&&e.jsx("span",{className:"field-error",children:h.email})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"password",name:"password",placeholder:"Password",value:o.password,onChange:Q,autoComplete:"new-password"}),h.password&&e.jsx("span",{className:"field-error",children:h.password}),o.password&&e.jsx("div",{className:"password-strength",children:[...Array(5)].map((_,U)=>e.jsx("div",{className:`strength-bar ${p>U?"active":""}`,style:{marginRight:"3px"}},U))})]}),e.jsx("button",{type:"submit",children:b?"Signing up...":"Sign Up"})]})}),e.jsx("p",{className:"switch",onClick:()=>M("/"),tabIndex:0,role:"button",onKeyDown:_=>{_.key==="Enter"&&M("/")},children:"Already have an account? Login"})]})]})]})},uj="/assets/green-DkjA6vro.jpg",pj="/assets/namelogo1-ClDb9w0f.png",fj="/assets/table-DewuUR1S.png",xj=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sec1",children:[e.jsx("img",{src:uj,alt:"Green",className:"GreenImage"}),e.jsx("div",{className:"nav-list",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(V,{to:"/Home",children:"Home"})}),e.jsx("li",{children:e.jsx("a",{href:"#Course",children:"Courses"})}),e.jsx("li",{children:e.jsx("a",{href:"#about",children:"About"})}),e.jsx("li",{children:e.jsx(V,{to:"/account",children:"Account"})})," "]})})]}),e.jsx("div",{className:"Logo",children:e.jsx("img",{src:pj,alt:"Logo",className:"logoImage"})}),e.jsx("div",{className:"About",id:"about",children:e.jsx("section",{children:e.jsxs("article",{children:[e.jsx("h4",{children:"LearnCourseOnline"}),e.jsx("p",{children:"All the skills you need in one place. From critical skills to technical topics, LearnCourseOnline supports your professional development. Your learning journey is unique, and we've built a platform to match. Discover a personalized learning experience with a vast array of courses tailored to your specific goals. From foundational skills to cutting-edge technologies, LearnCourseOnline adapts to your pace and preferences. Track your progress, earn certifications, and gain the confidence to excel in today's competitive landscape. Invest in yourself, and let us guide you to your next career milestone."})]})})}),e.jsx("div",{children:e.jsx("img",{src:fj,alt:"table",className:"img2"})}),e.jsx("div",{children:e.jsx("section",{className:"course",id:"Course",children:e.jsxs("article",{children:[e.jsx("h4",{children:"Courses"}),e.jsx(V,{to:"/CCourse",children:"C Language"}),e.jsx(V,{to:"/Python",children:"Python Language"})]})})})]}),mj=()=>e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"C Language Course"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"C Programming Language Tutorial"}),e.jsxs("p",{children:["C is a general-purpose programming language referred as the ",e.jsx("strong",{children:'"mother of all programming languages"'})," because it influenced many modern programming languages like C++, Java, Python and Go. C is an excellent choice for beginners as it provides a strong foundation in programming concepts."]}),e.jsxs("p",{children:["In this ",e.jsx("strong",{children:"C tutorial"}),", we'll cover everything from basic programming concepts like input/output, loops, etc to advanced topics like memory management, file handling, etc. Each section also includes practice questions and quizzes to test your understanding."]}),e.jsx("p",{children:"Let's dive into the world of programming and start learning!"})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Fundamentals"}),e.jsx("p",{children:"Fundamental section teaches you the basic C programming topics such as how to store and output data, perform arithmetic and other operations, control the program flow, etc."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(V,{to:"/Introduction",children:"Introduction"})}),e.jsx("li",{children:e.jsx(V,{to:"/Identifier",children:"Identifiers"})}),e.jsx("li",{children:e.jsx(V,{to:"/Keywords",children:"Keywords"})}),e.jsx("li",{children:e.jsx(V,{to:"/Variables",children:"Variables"})}),e.jsx("li",{children:e.jsx(V,{to:"/Datatypes",children:"Data Types"})}),e.jsx("li",{children:e.jsx(V,{to:"/Inputoutput",children:"Input and Output"})}),e.jsx("li",{children:e.jsx(V,{to:"/Operators",children:"Operators"})}),e.jsx("li",{children:e.jsx(V,{to:"/Conditional",children:"Conditional Statements"})}),e.jsx("li",{children:e.jsx(V,{to:"/Loops",children:"Loops"})})]})]}),e.jsxs("section",{className:"section",id:"functions",children:[e.jsx("h2",{children:"Functions"}),e.jsx("p",{children:"This section explains the functions in C and related concepts which are the building blocks of C programs that allows programmers to write modular and reusable code."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(V,{to:"/Function",children:"Functions"})}),e.jsx("li",{children:e.jsx(V,{to:"/Parameter",children:"Parameter Passing Techniques"})}),e.jsx("li",{children:e.jsx(V,{to:"/MainFun",children:"Main Function"})}),e.jsx("li",{children:e.jsx(V,{to:"/Recursion",children:"Recursion"})}),e.jsx("li",{children:e.jsx(V,{to:"/Inline",children:"Inline Function"})}),e.jsx("li",{children:e.jsx(V,{to:"/NestedFun",children:"Nested Function"})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Compound Data Types"}),e.jsx("p",{children:"Fundamental data types cannot efficiently store every kind of data, so compound data types are created from them. This section teaches you how to efficiently organize and process real world's complex data."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(V,{to:"/Array",children:"Arrays"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pointer",children:"Pointers"})}),e.jsx("li",{children:e.jsx(V,{to:"/String",children:"Strings"})}),e.jsx("li",{children:e.jsx(V,{to:"/Structure",children:"Structures"})}),e.jsx("li",{children:e.jsx(V,{to:"/Union",children:"Unions"})}),e.jsx("li",{children:e.jsx(V,{to:"/Enum",children:"Enumeration (or enum)"})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Memory Management"}),e.jsx("p",{children:"This section covers the manual memory management in C using pointers, malloc(), calloc(), realloc(), and free(), while avoiding errors such as memory leak."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(V,{to:"/Layout",children:"Program's Memory Layout"})}),e.jsx("li",{children:e.jsx(V,{to:"/Allocate",children:"Dynamic Memory Allocation"})}),e.jsx("li",{children:e.jsx(V,{to:"/Leak",children:"Memory Leaks"})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Data Structures"}),e.jsx("p",{children:"C does not provide inbuilt implementation of data structures like C++ or Java. This section covers how to implement different data structure in C."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(V,{to:"/Linked",children:"Linked List"})}),e.jsx("li",{children:e.jsx(V,{to:"/Stack",children:"Stack"})}),e.jsx("li",{children:e.jsx(V,{to:"/Queue",children:"Queue"})}),e.jsx("li",{children:e.jsx(V,{to:"/Hash",children:"Hash Tables"})}),e.jsx("li",{children:e.jsx(V,{to:"/Binarytree",children:"Binary Tree"})}),e.jsx("li",{children:e.jsx(V,{to:"/Heap",children:"Heaps"})}),e.jsx("li",{children:e.jsx(V,{to:"/Graph",children:"Graphs"})})]})]})]}),jj=()=>e.jsx(zx.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Introduction to C"})}),e.jsxs("section",{className:"section",id:"introduction-to-c",children:[e.jsx("h2",{children:"Introduction to C"}),e.jsx("p",{children:"C is a procedural programming language developed by Dennis Ritchie in 1972 at Bell Laboratories. It has become one of the most widely used programming languages, powering many systems and applications. In this course, you'll learn the fundamentals of C programming—from basic concepts to advanced topics."}),e.jsx("h3",{children:"Why Should We Learn C?"}),e.jsx("p",{children:"Many later languages have borrowed syntax/features directly or indirectly from the C language, like Java, PHP, JavaScript, and many others that are mainly based on C. C++ is nearly a superset of C (only a few programs may compile in C, but not in C++)."}),e.jsx("p",{children:"Learning C programming first helps in understanding modern programming languages. It also helps to understand a lot of the underlying architecture of operating systems, such as pointers, memory management, and working with memory locations."}),e.jsx("h3",{children:"Difference Between C and C++"}),e.jsx("p",{children:"C++ was created to add object-oriented programming (OOP) concepts to the C language, so they both have very similar syntax with a few differences. The following are some of the main differences between C and C++ programming languages:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"C++ supports OOP concepts, while C only follows the procedural programming paradigm."}),e.jsx("li",{children:"C++ has built-in exception handling capabilities, whereas in C, exceptions must be handled manually."}),e.jsx("li",{children:"There are no references in C, while C++ supports references."})]})]})]})}),gj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Identifiers in C"})}),e.jsxs("section",{className:"section",id:"c-identifiers",children:[e.jsx("h2",{children:"C Identifiers"}),e.jsx("p",{children:"In C programming, identifiers are the names used to identify variables, functions, arrays, structures, or any other user-defined items. It is a name that uniquely identifies a program element and can be used to refer to it later in the program."}),e.jsx("pre",{children:`// Creating a variable
int val = 10;

// Creating a function
void func() {}`}),e.jsxs("p",{children:["In the above code snippet, ",e.jsx("code",{children:"val"})," and ",e.jsx("code",{children:"func"})," are identifiers."]}),e.jsx("h3",{children:"Rules for Naming Identifiers in C"}),e.jsx("p",{children:"A programmer must follow a set of rules to create an identifier in C:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Identifiers can contain the following characters:",e.jsxs("ul",{children:[e.jsx("li",{children:"Uppercase (A-Z) and lowercase (a-z) alphabets."}),e.jsx("li",{children:"Numeric digits (0-9)."}),e.jsx("li",{children:"Underscore (_)."})]})]}),e.jsx("li",{children:"The first character of an identifier must be a letter or an underscore."}),e.jsx("li",{children:"Identifiers are case-sensitive."}),e.jsxs("li",{children:["Identifiers cannot be keywords in C (such as ",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"return"}),", ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"while"}),", etc.)."]})]})]})]})}),yj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Keywords in C"})}),e.jsxs("section",{className:"section",id:"Keywords in c",children:[e.jsx("h2",{children:"Keywords in C"}),e.jsx("p",{children:"In C Programming language, there are many rules so to avoid different types of errors. One of such rule is not able to declare variable names with auto, long, etc. This is all because these are keywords. Let us check all keywords in C language."}),e.jsx("h3",{children:"What are Keywords?"}),e.jsx("p",{children:"Keywords are predefined or reserved words that have special meanings to the compiler. These are part of the syntax and cannot be used as identifiers in the program. A list of keywords in C or reserved words in the C programming language are mentioned below:"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"auto"}),e.jsx("td",{children:"break"}),e.jsx("td",{children:"case"}),e.jsx("td",{children:"char"}),e.jsx("td",{children:"const"}),e.jsx("td",{children:"continue"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"do"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"double"}),e.jsx("td",{children:"else"}),e.jsx("td",{children:"enum"}),e.jsx("td",{children:"extern"}),e.jsx("td",{children:"float"}),e.jsx("td",{children:"for"}),e.jsx("td",{children:"goto"}),e.jsx("td",{children:"if"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"int"}),e.jsx("td",{children:"long"}),e.jsx("td",{children:"register"}),e.jsx("td",{children:"return"}),e.jsx("td",{children:"shot"}),e.jsx("td",{children:"signed"}),e.jsx("td",{children:"sizeof"}),e.jsx("td",{children:"static"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"struct"}),e.jsx("td",{children:"switch"}),e.jsx("td",{children:"typedef"}),e.jsx("td",{children:"union"}),e.jsx("td",{children:"unsigned"}),e.jsx("td",{children:"void"}),e.jsx("td",{children:"volatile"}),e.jsx("td",{children:"while"})]})]}),e.jsx("h3",{children:"auto"}),e.jsx("p",{children:"auto is the default storage class variable that is declared inside a function or a block. auto variables can only be accessed within the function/block they are declared. By default, auto variables have garbage values assigned to them. Automatic variables are also called local variables as they are local to a function. "}),e.jsx("pre",{children:"auto int num;"}),e.jsx("p",{children:"Here num is the variable of the storage class auto and its type is int. Below is the C program to demonstrate the auto keyword:"}),e.jsx("pre",{children:`
// C program to demonstrate 
// auto keyword
#include <stdio.h>

int printvalue()
{
  auto int a = 10;
  printf("%d", a);
}

// Driver code
int main() 
{
  printvalue();
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"10"})]}),e.jsx("h3",{children:"break and continue"}),e.jsx("p",{children:"The break statement is used to terminate the innermost loop. It generally terminates a loop or a break statement. The continue statement skips to the next iteration of the loop. Below is the C program to demonstrate break and continue in C:"}),e.jsx("pre",{children:`// C program to show use 
// of break and continue
#include <stdio.h>

// Driver code
int main()
{
  for (int i = 1; i <= 10; i++) 
  {
    if (i == 2) 
    {
      continue;
    }
    if (i == 6) 
    {
      break;
    }
    printf("%d ", i);
  }
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"1 3 4 5 "})]}),e.jsx("h3",{children:"switch, case, and default"}),e.jsx("p",{children:"The switch statement in C is used as an alternate to the if-else ladder statement. For a single variable i.e, switch variable it allows us to execute multiple operations for different possible values of a single variable. "}),e.jsx("pre",{children:`switch(Expression)
{
    case '1': // operation 1
            break;
    case:'2': // operation 2
            break;
    default: // default statement to be executed 
}
`}),e.jsx("p",{children:"Below is the C program to demonstrate the switch case statement:"}),e.jsx("pre",{children:`// C program to demonstrate 
// switch case statement
#include <stdio.h>

// Driver code
int main() {
  int i = 4;
  switch (i) {
    case 1: 
      printf("Case 1
");break;
    case 2:
      printf("Case 2
");break;
    case 3:
      printf("Case 3
");break;
    case 4:
      printf("Case 4
");break;
    default:
      printf("Default
");break;
  }
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Case 4"})]}),e.jsx("h3",{children:"Char"}),e.jsx("p",{children:"char keyword in C is used to declare a character variable in the C programming language."}),e.jsx("pre",{children:`char x = 'D';
`}),e.jsx("p",{children:"Below is the C program to demonstrate the char keyword:"}),e.jsx("pre",{children:`// C program to demonstrate 
// char keyword
#include <stdio.h>

// Driver code
int main() {
  char c = 'a';
  printf("%c", c);
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"a"})]}),e.jsx("h3",{children:"Const"}),e.jsx("p",{children:"The const keyword defines a variable who’s value cannot be changed."}),e.jsx("pre",{children:`const int num = 10;
`}),e.jsx("p",{children:"Below is the C program to demonstrate the const keyword:"}),e.jsx("pre",{children:`// C program to demonstrate 
// const keyword
#include <stdio.h>

// Driver code
int main() {
  const int a = 11;
  a = a + 2;
  printf("%d", a);
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["error: assignment of read-only variable 'a'",e.jsx("br",{}),"a = a + 2;"]})]}),e.jsx("h3",{children:"do"}),e.jsx("p",{children:"The do statement is used to declare a do-while loop. A do-while loop is a loop that executes once, and then checks it’s condition to see if it should continue through the loop. After the first iteration, it will continue to execute the code while the condition is true."}),e.jsx("p",{children:"Below is the C program to demonstrate a do-while loop."}),e.jsx("pre",{children:`// C program to demonstrate
// do-while keyword
#include <stdio.h>

// Driver code
int main() 
{
  int i = 1;
  do {
    printf("%d ", i);
    i++;
  } while(i <= 5);
  
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"1 2 3 4 5 "})]}),e.jsx("h3",{children:"double and float"}),e.jsx("p",{children:"The doubles and floats are datatypes used to declare decimal type variables. They are similar, but doubles have 15 decimal digits, and floats only have 7."}),e.jsx("p",{children:"Below is the C program to demonstrate double float keyword:"}),e.jsx("pre",{children:`// C program to demonstrate 
// double float keyword
#include <stdio.h>

// Driver code
int main() {
  float f = 0.3;
  double d = 10.67;
  printf("Float value: %f
", f);
  printf("Double value: %f
", d);
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Float value: 0.300000",e.jsx("br",{}),"Double value: 10.670000"]})]}),e.jsx("h3",{children:"if-else"}),e.jsx("p",{children:"The if-else statement is used to make decisions, where if a condition is true, then it will execute a block of code; if it isn’t true (else), then it will execute a different block of code."}),e.jsx("pre",{children:`if(marks == 97) {
    // if marks are 97 then will execute this block of code
}
else {
    // else it will execute this block of code
}
`}),e.jsx("p",{children:"Below is the C program to demonstrate an if-else statement:"}),e.jsx("pre",{children:`// C program to demonstrate 
// if-else keyword
#include <stdio.h>

// Driver code
int main() 
{
  int a = 10;
  if(a < 11)
  {
    printf("A is less than 11");
  }
  else
  {
    printf("A is equal to or "
           "greater than 11");
  }  
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"A is less than 11"})]}),e.jsx("h3",{children:"enum"}),e.jsx("p",{children:"The enum keyword is used to declare an enum (short for enumeration). An enum is a user-defined datatype, which holds a list of user-defined integer constants. By default, the value of each constant is it’s index (starting at zero), though this can be changed. You can declare an object of an enum and can set it’s value to one of the constants you declared before. Here is an example of how an enum might be used:"}),e.jsx("pre",{children:`// An example program to 
// demonstrate working of 
// enum in C
#include<stdio.h>

// enum declaration:
enum week{Mon, Tue, Wed, Thur, Fri, Sat, Sun};

// Driver code
int main()
{
//object of the enum (week), called day
  enum week day;
  day = Wed;
  printf("%d", day);
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"2"})]}),e.jsx("h3",{children:"extern"}),e.jsx("p",{children:"The extern keyword is used to declare a variable or a function that has an external linkage outside of the file declaration."}),e.jsx("pre",{children:`#include <stdio.h>

extern int a;

int main(){ 
  
    printf("%d", a);

      return 0;
}
`}),e.jsx("h3",{children:"for"}),e.jsx("p",{children:"The “for” keyword is used to declare a for-loop. A for-loop is a loop that is specified to run a certain amount of times."}),e.jsx("p",{children:"Below is the C program to demonstrate a for-loop: "}),e.jsx("pre",{children:`// C program to demonstrate 
// for keyword
#include <stdio.h>

// Driver code
int main()
{
  for (int i = 0; i < 5; i++) 
  {
    printf("%d ", i);
  }
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"0 1 2 3 4"})]}),e.jsx("h3",{children:"goto"}),e.jsx("p",{children:"The goto statement is used to transfer the control of the program to the given label. It is used to jump from anywhere to anywhere within a function."}),e.jsx("p",{children:"Below is the C program to demonstrate the goto keyword:"}),e.jsx("pre",{children:`// C program demonstrate
// goto keyword
#include <stdio.h>

// Function to print numbers
// from 1 to 10
void printNumbers() {
    int n = 1;

label:
    printf("%d ", n);
    n++;
    if (n <= 10) goto label;
}

// Driver code
int main(){
    printNumbers();
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"1 2 3 4 5 6 7 8 9 10 "})]}),e.jsx("h3",{children:"int"}),e.jsx("p",{children:"int keyword is used in a type declaration to give a variable an integer type. In C, the integer variable must have a range of at least -32768 to +32767. "}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:"int x=10;"}),e.jsx("p",{children:"Below is the C program to show the int keyword:"}),e.jsx("pre",{children:`// C program to demonstrate
// int keyword
#include <stdio.h>

void sum() {
    int a = 10, b = 20;
    int sum;
    sum = a + b;
    printf("%d", sum);
}

// Driver code
int main() {
    sum();
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"30 "})]}),e.jsx("h3",{children:"short, long, signed, and unsigned"}),e.jsxs("p",{children:["Different data types also have different ranges up to which they can store numbers. These ranges may vary from compiler to compiler. Below is a list of ranges along with the memory requirement and format specifiers on the ",e.jsx("b",{children:"32-bit GCC compiler."})]}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Data Type"}),e.jsx("th",{children:"Memory (bytes)"}),e.jsx("th",{children:"Range"}),e.jsx("th",{children:"Format Specifier"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"short int "})}),e.jsx("td",{children:"2"}),e.jsx("td",{children:"-32,768 to 32,767 "}),e.jsx("td",{children:"%hd"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("b",{children:"unsigned short int"})," "]}),e.jsx("td",{children:"2"}),e.jsx("td",{children:"0 to 65,535"}),e.jsx("td",{children:"%hu"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"unsigned int "})}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"0 to 4,294,967,295 "}),e.jsx("td",{children:"%u"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"long int "})}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"-2,147,483,648 to 2,147,483,647"}),e.jsx("td",{children:"%ld"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"unsigned long int"})}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"0 to 4,294,967,295 "}),e.jsx("td",{children:"%lu"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"long long int"})}),e.jsx("td",{children:"8"}),e.jsx("td",{children:"-(2^63) to (2^63)-1 "}),e.jsx("td",{children:"%lld"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"unsigned long long int"})}),e.jsx("td",{children:"8"}),e.jsx("td",{children:"0 to 18,446,744,073,709,551,615"}),e.jsx("td",{children:"%llu"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"signed char"})}),e.jsx("td",{children:"1"}),e.jsx("td",{children:"-128 to 127"}),e.jsx("td",{children:"%c"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"unsigned char"})}),e.jsx("td",{children:"1"}),e.jsx("td",{children:"0 to 255"}),e.jsx("td",{children:"%c"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"long double"})}),e.jsx("td",{children:"16"}),e.jsx("td",{children:"3.4E-4932 to 1.1E+4932"}),e.jsx("td",{children:"%Lf"})]})]}),e.jsx("h3",{children:"return"}),e.jsx("p",{children:"The return statement returns a value to where the function was called."}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:"return x;"}),e.jsx("p",{children:"Below is the C program to demonstrate the return keyword:"}),e.jsx("pre",{children:`// C program to demonstrate
// return keyword
#include <stdio.h>
int sum(int x, int y) {
  int sum;
  sum = x + y;
  return sum;
}

// Driver code
int main() {
  int num1 = 10;
  int num2 = 20;
  printf("Sum: %d", 
          sum(num1, num2));
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Sum: 30 "})]}),e.jsx("h3",{children:"sizeof"}),e.jsx("p",{children:"sizeof is a keyword that gets the size of an expression, (variables, arrays, pointers, etc.) in bytes."}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`sizeof(char);
sizeof(int);
sizeof(float); in bytes.`}),e.jsx("p",{children:"Below is the C program to demonstrate sizeof keyword:"}),e.jsx("pre",{children:`// C program to demonsstrate 
// sizeof keyword
#include <stdio.h>

// Driver code
int main() { 
  int x = 10;
  printf("%d", sizeof(x));
  return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"4"})]}),e.jsx("h3",{children:"register"}),e.jsx("p",{children:"Register variables tell the compiler to store variables in the CPU register instead of memory. Frequently used variables are kept in the CPU registers for faster access. "}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`register char c = 's'; 
`}),e.jsx("h3",{children:"static"}),e.jsx("p",{children:"The static keyword is used to create static variables. A static variable is not limited by a scope and can be used throughout the program. It’s value is preserved even after it’s  scope."}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`static int num;
`}),e.jsx("h3",{children:"struct"}),e.jsx("p",{children:"The struct keyword in C programming language is used to declare a structure. A structure is a list of variables, (they can be of different data types), which are grouped together under one data type."}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`struct Geek {
    char name[50];
    int num;
    double var;
};`}),e.jsx("h3",{children:"typedef"}),e.jsx("p",{children:"The typedef keyword in C programming language is used to define a data type with a new name in the program. typedef keyword is used to make our code more readable."}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`typedef long num
`}),e.jsx("p",{children:"In this example we have changed the datatype name of “long” to “num”."}),e.jsx("h3",{children:"union"}),e.jsx("p",{children:"The union is a user-defined data type. All data members which are declared under the union keyword share the same memory location."}),e.jsx("pre",{children:`union GeekforGeeks {
    int x;
    char s;
} obj;`}),e.jsx("h3",{children:"void"}),e.jsx("p",{children:"The void keyword means nothing i.e, NULL value. When the function return type is used as the void, the keyword void specifies that it has no return value."}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`void fun() {
    // program
}`}),e.jsx("h3",{children:"volatile"}),e.jsx("p",{children:"The volatile keyword is used to create volatile objects. Objects which are declared volatile are omitted from optimization as their values can be changed by code outside the scope of the current code at any point in time."}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`const volatile marks = 98;
`}),e.jsx("p",{children:"marks are declared constant so they can’t be changed by the program. But hardware can change it as they are volatile objects."}),e.jsx("h3",{children:"while"}),e.jsx("p",{children:"The while keyword is used to declare a while loop that runs till the given condition is true."}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`#include <stdio.h>

int main() {
    int i = 0;

    // While loop that execute till i is less than 3
    while (i < 3) {
        printf("Hi
");
        i++;
    }
  
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Hi",e.jsx("br",{}),"Hi",e.jsx("br",{}),"Hi",e.jsx("br",{})]})]})]})]})}),bj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:" Variables in C "})}),e.jsxs("section",{className:"section",id:"C variables",children:[e.jsx("h2",{children:"C Variables"}),e.jsx("p",{children:"In C, variable is a name given to the memory location that helps us to store some form of data and retrieves it when required. It allows us to refer to memory location without having to memorize the memory address. A variable name can be used in expressions as a substitute in place of the value it stores."}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`#include <stdio.h>
int main() {

    // Declaring variables
    int a;
  
    // Storing data
    a = 25;

    printf("%d", a);
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"25"})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Explanation:"})," In the given program, a is a variable that serves as a name for a memory location to store an integer value. It store the value 25 and later retrieve it for printing without needing to reference its full memory address."]}),e.jsx("h3",{children:"Syntax"}),e.jsx("p",{children:"In C, we have to declare the type of data the variable would store along with the name while creating a variable:"}),e.jsx("pre",{children:`data_type variable_name;

`}),e.jsxs("p",{children:["This ",e.jsx("b",{children:"data_type"})," decides how much memory a variable need. We can choose the data types provided by C language to store different type of data in the variable."]})]})]})}),vj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:" Datatypes in C"})}),e.jsxs("section",{className:"section",id:"Datatypes",children:[e.jsx("h2",{children:"Data Types in C"}),e.jsx("p",{children:"Each variable in C has an associated data type. It specifies the type of data that the variable can store like integer, character, floating, double, etc. Each data type requires different amounts of memory and has some specific operations which can be performed over it."}),e.jsx("p",{children:e.jsx("b",{children:"The data types in C can be classified as follows:"})}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Types"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Data Types"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Primitive Data Types	"})}),e.jsx("td",{children:"Primitive data types are the most basic data types that are used for representing simple values such as integers, float, characters, etc."}),e.jsx("td",{children:"int, char, float, double, void"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Derived Types"})}),e.jsx("td",{children:"The data types that are derived from the primitive or built-in datatypes are referred to as Derived Data Types."}),e.jsx("td",{children:"array, pointers, function"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"User Defined Data Types"})}),e.jsx("td",{children:"The user-defined data types are defined by the user himself."}),e.jsx("td",{children:"structure, union, enum"})]})]}),e.jsx("p",{children:"Understanding C’s data types is critical for writing efficient programs."}),e.jsx("p",{children:e.jsx("b",{children:"The following are some main primitive data types in C:"})}),e.jsx("p",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#integer",children:"Integer Data Type"})}),e.jsx("li",{children:e.jsx("a",{href:"#character",children:"Character Data Type"})}),e.jsx("li",{children:e.jsx("a",{href:"#float",children:"Float Data Type"})}),e.jsx("li",{children:e.jsx("a",{href:"#double",children:"Double Data Type"})}),e.jsx("li",{children:e.jsx("a",{href:"#void",children:"Void Data Type"})})]}),e.jsxs("div",{id:"integer",children:[e.jsx("h3",{children:"Integer Data Type"}),e.jsx("p",{children:"The integer datatype in C is used to store the integer numbers (any number including positive, negative and zero without decimal part). Octal values, hexadecimal values, and decimal values can be stored in int data type in C. "}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Range:"})," -2,147,483,648 to 2,147,483,647"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Size:"})," 4 bytes"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Format Specifier:"}),"%d"]})]}),e.jsx("h4",{children:"Syntax of Integer"}),e.jsx("p",{children:"We use int keyword to declare the integer variable:"}),e.jsx("pre",{children:"int var_name;"}),e.jsx("h4",{children:"Example of int"}),e.jsx("pre",{children:`// C program to print Integer data types.
#include <stdio.h>

int main()
{
    // Integer value with positive data.
    int a = 9;

    // integer value with negative data.
    int b = -9;

    // U or u is Used for Unsigned int in C.
    int c = 89U;

    // L or l is used for long int in C.
    long int d = 99998L;

    printf("Integer value with positive data: %d
", a);
    printf("Integer value with negative data: %d
", b);
    printf("Integer value with an unsigned int data: %u
",
           c);
    printf("Integer value with an long int data: %ld", d);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Integer value with positive data: 9",e.jsx("br",{}),"Integer value with negative data: -9",e.jsx("br",{}),"Integer value with an unsigned int data: 89,",e.jsx("br",{}),"Integer value with an long int data: 99998"]})]})]}),e.jsxs("div",{id:"character",children:[e.jsx("h3",{children:"Character Data Type"}),e.jsx("p",{children:"Character data type allows its variable to store only a single character. The size of the character is 1 byte. It is the most basic data type in C. It stores a single character and requires a single byte of memory in almost all compilers."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Range:"}),"(-128 to 127) or (0 to 255)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Size:"}),"1 byte"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Format Specifier:"}),"%c"]})]}),e.jsx("h4",{children:"Syntax of char"}),e.jsx("p",{children:"The char keyword is used to declare the variable of character type:"}),e.jsx("pre",{children:"char var_name;"}),e.jsx("h4",{children:"Example of char"}),e.jsx("pre",{children:`// C program to print Integer data types.
#include <stdio.h>

int main()
{
    char a = 'a';
    char c;

    printf("Value of a: %c
", a);

    a++;
    printf("Value of a after increment is: %c
", a);

    // c is assigned ASCII values
    // which corresponds to the
    // character 'c'
    // a-->97 b-->98 c-->99
    // here c will be printed
    c = 99;

    printf("Value of c: %c", c);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Value of a: a",e.jsx("br",{}),"Value of a after increment is: b",e.jsx("br",{}),"Value of c: c"]})]})]}),e.jsxs("div",{id:"float",children:[e.jsx("h3",{children:"Float Data Type"}),e.jsx("p",{children:"In C programming float data type is used to store floating-point values. Float in C is used to store decimal and exponential values. It is used to store decimal numbers (numbers with floating point values) with single precision."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Range:"}),"1.2E-38 to 3.4E+38"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Size:"}),"4 bytes"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Format Specifier:"}),"%f"]})]}),e.jsx("h4",{children:"Syntax of float"}),e.jsxs("p",{children:["The ",e.jsx("b",{children:"float keyword"})," is used to declare the variable as a floating point:"]}),e.jsx("pre",{children:"float var_name;"}),e.jsx("h4",{children:"Example of float"}),e.jsx("pre",{children:`// C Program to demonstrate use
// of Floating types
#include <stdio.h>

int main()
{
    float a = 9.0f;
    float b = 2.5f;

    // 2x10^-4
    float c = 2E-4f;
    printf("%f
", a);
    printf("%f
", b);
    printf("%f", c);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["9.000000",e.jsx("br",{}),"2.500000",e.jsx("br",{}),"0.000200"]})]})]}),e.jsxs("div",{id:"double",children:[e.jsx("h3",{children:"Double Data Type"}),e.jsx("p",{children:"A Double data type in C is used to store decimal numbers (numbers with floating point values) with double precision. It is used to define numeric values which hold numbers with decimal values in C."}),e.jsx("p",{children:"The double data type is basically a precision sort of data type that is capable of holding 64 bits of decimal numbers or floating points. Since double has more precision as compared to that float then it is much more obvious that it occupies twice the memory occupied by the floating-point type. It can easily accommodate about 16 to 17 digits after or before a decimal point."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Range:"})," 1.7E-308 to 1.7E+308"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Size:"})," 8 bytes"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Format Specifier:"})," %lf"]})]}),e.jsx("h4",{children:"Syntax of Double"}),e.jsxs("p",{children:["The variable can be declared as double precision floating point using the",e.jsx("b",{children:" double keyword:"})]}),e.jsx("pre",{children:`double var_name;
`}),e.jsx("h4",{children:"Example of Double"}),e.jsx("pre",{children:`// C Program to demonstrate 
// use of double data type
#include <stdio.h>

int main()
{
    double a = 123123123.00;
    double b = 12.293123;
    double c = 2312312312.123123;

    printf("%lf
", a);

    printf("%lf
", b);

    printf("%lf", c);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["123123123.000000",e.jsx("br",{}),"12.293123",e.jsx("br",{}),"2312312312.123123"]})]})]}),e.jsxs("div",{id:"void",children:[e.jsx("h3",{children:"Void Data Type"}),e.jsx("p",{children:"The void data type in C is used to specify that no value is present. It does not provide a result value to its caller. It has no values and no operations. It is used to represent nothing. Void is used in multiple ways as function return type, function arguments as void, and pointers to void."}),e.jsx("h4",{children:"Syntax:"}),e.jsx("pre",{children:`// function return type void
void exit(int check);
// Function without any parameter can accept void.
int print(void);
// memory allocation function which
// returns a pointer to void.
void *malloc (size_t size);`}),e.jsx("h4",{children:"Example of Void"}),e.jsx("pre",{children:`// C program to demonstrate
// use of void pointers
#include <stdio.h>

int main()
{
    int val = 30;
    void* ptr = &val;
    printf("%d", *(int*)ptr);
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"30"})]})]})]})]})}),wj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Input and Output in C"})}),e.jsxs("section",{className:"section",id:"input-and-output",children:[e.jsx("h2",{children:"Basic Input and Output in C"}),e.jsxs("p",{children:["In C programming, input and output operations refer to reading data from external sources and writing data to external destinations outside the program. C provides a standard set of functions to handle input from the user and output to the screen or to files. These functions are part of the standard input/output library ",e.jsx("b",{children:"<stdio.h>"}),"."]}),e.jsx("p",{children:"In C, there are many functions used for input and output in different situations but the most commonly used functions for Input/Output are scanf() and printf() respectively."}),e.jsx("h3",{children:"Standard Output Function – printf()"}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"printf()"})," function is used to print formatted output to the standard output stdout (which is generally the console screen). It is one of the most commonly used functions in C."]}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:`printf(“formatted_string”, variables/values);

`}),e.jsx("h4",{children:"Example"}),e.jsx("pre",{children:`#include <stdio.h>

int main() {
  
    // Prints some text
    printf("First Print");  
  
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"First Print"})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Explanation:"})," The printf() function sends the string “First Print” to the output stream, displaying it on the screen."]}),e.jsx("p",{children:"Variable values and direct values(literals) can also be printed by printf()."}),e.jsx("pre",{children:`#include <stdio.h>

int main() {
      int age = 22;
  
    // Prints Age
    printf("Age: %d
", age);  
  
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Age: 22"})]}),e.jsxs("p",{children:["Here, the value of variable age is printed. You may have noticed ",e.jsx("b",{children:"%d"})," in the formatted string. It is actually called format specifier which are used as placeholders for the value in the formatted string."]}),e.jsx("p",{children:"You may have also noticed ‘\\n’ character. This character is an escape sequence and is used to enter a newline."}),e.jsx("h3",{children:"Standard Input Function – scanf()"}),e.jsxs("p",{children:[e.jsx("b",{children:"scanf()"})," is used to read user input from the console. It takes the format string and the addresses of the variables where the input will be stored."]}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:`scanf(“formatted_string”, address_of_variables/values);

`}),e.jsx("p",{children:"Remember that this function takes the address of the arguments where the read value is to be stored."}),e.jsx("h4",{children:"Example"}),e.jsx("pre",{children:`#include <stdio.h>

int main() {
    int age;
    printf("Enter your age: ");
  
    // Reads an integer
    scanf("%d", &age);  
  
    // Prints the age
    printf("Age is: %d
", age);  
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Enter your age: 25 (Entered by the user)",e.jsx("br",{}),"Age is: 25"]})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Explanation:"})," %d is used to read an integer; and &age provides the address of the variable where the input will be stored."]})]})]})}),Tj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Operators in C"})}),e.jsxs("section",{className:"section",id:"Operators in C",children:[e.jsx("h2",{children:"Operators in C"}),e.jsx("p",{children:"In C language, operators are symbols that represent operations to be performed on one or more operands. They are the basic components of the C programming. In this article, we will learn about all the built-in operators in C with examples."}),e.jsx("h3",{children:"What is a C Operator?"}),e.jsx("p",{children:"An operator in C can be defined as the symbol that helps us to perform some specific mathematical, relational, bitwise, conditional, or logical computations on values and variables. The values and variables used with operators are called operands. So we can say that the operators are the symbols that perform operations on operands."}),e.jsx("h4",{children:"For Example"}),e.jsx("pre",{children:"c=a+b;"}),e.jsx("p",{children:"Here, ‘+’ is the operator known as the addition operator, and ‘a’ and ‘b’ are operands. The addition operator tells the compiler to add both of the operands ‘a’ and ‘b’. To dive deeper into how operators are used with data structures, the C Programming Course Online with Data Structurescovers this topic thoroughly."}),e.jsx("h3",{children:"Types of Operators in C"}),e.jsx("p",{children:"C language provides a wide range of operators that can be classified into 6 types based on their functionality:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Arithmetic Operators"}),e.jsx("li",{children:"Relational Operators"}),e.jsx("li",{children:"Logical Operators"}),e.jsx("li",{children:"Bitwise Operators"}),e.jsx("li",{children:"Assignment Operators"}),e.jsx("li",{children:"Other Operators"})]}),e.jsxs("div",{id:"arithmetic",children:[e.jsx("h3",{children:"1. Arithmetic Operations in C"}),e.jsx("p",{children:"The arithmetic operators are used to perform arithmetic/mathematical operations on operands. There are 9 arithmetic operators in C language:"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S. No."}),e.jsx("th",{children:"Symbol"}),e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Syntax"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"+"}),e.jsx("td",{children:"Plus"}),e.jsx("td",{children:"Adds two numeric values."}),e.jsx("td",{children:"a + b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Minus"}),e.jsx("td",{children:"Subtracts right operand from left operand."}),e.jsx("td",{children:"a - b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"*"}),e.jsx("td",{children:"Multiply"}),e.jsx("td",{children:"Multiply two numeric values."}),e.jsx("td",{children:"a * b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:"/"}),e.jsx("td",{children:"Divide"}),e.jsx("td",{children:"Divide two numeric values."}),e.jsx("td",{children:"a / b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5"}),e.jsx("td",{children:"%"}),e.jsx("td",{children:"Modulus"}),e.jsx("td",{children:"Returns the remainder after dividing the left operand with the right operand."}),e.jsx("td",{children:"a % b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsx("td",{children:"+"}),e.jsx("td",{children:"Unary Plus"}),e.jsx("td",{children:"Used to specify the positive values."}),e.jsx("td",{children:"+a"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"7"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Unary Minus"}),e.jsx("td",{children:"Flips the sign of the value."}),e.jsx("td",{children:"-a"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"8"}),e.jsx("td",{children:"++"}),e.jsx("td",{children:"Increment"}),e.jsx("td",{children:"Increases the value of the operand by 1."}),e.jsx("td",{children:"a++"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"9"}),e.jsx("td",{children:"--"}),e.jsx("td",{children:"Decrement"}),e.jsx("td",{children:"Decreases the value of the operand by 1."}),e.jsx("td",{children:"a--"})]})]})]}),e.jsx("h4",{children:"Example of C Arithmetic Operators"}),e.jsx("pre",{children:`// C program to illustrate the arithmatic operators
#include <stdio.h>

int main()
{

    int a = 25, b = 5;

    // using operators and printing results
    printf("a + b = %d
", a + b);
    printf("a - b = %d
", a - b);
    printf("a * b = %d
", a * b);
    printf("a / b = %d
", a / b);
    printf("a % b = %d
", a % b);
    printf("+a = %d
", +a);
    printf("-a = %d
", -a);
    printf("a++ = %d
", a++);
    printf("a-- = %d
", a--);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["a + b = 30",e.jsx("br",{}),"a - b = 20",e.jsx("br",{}),"a * b = 125",e.jsx("br",{}),"a / b = 5",e.jsx("br",{}),"a % b = 0",e.jsx("br",{}),"+a = 25",e.jsx("br",{}),"-a = -25",e.jsx("br",{}),"a++ = 25",e.jsx("br",{}),"a-- = 26"]})]})]}),e.jsxs("div",{id:"relational",children:[e.jsx("h3",{children:"2. Relational Operators in C"}),e.jsx("p",{children:"The relational operators in C are used for the comparison of the two operands. All these operators are binary operators that return true or false values as the result of comparison."}),e.jsx("p",{children:"These are a total of 6 relational operators in C:"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S. No."}),e.jsx("th",{children:"Symbol"}),e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Syntax"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"<"}),e.jsx("td",{children:"Less than"}),e.jsx("td",{children:"Returns true if the left operand is less than the right operand. Else false."}),e.jsx("td",{children:"a < b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:">"}),e.jsx("td",{children:"Greater than"}),e.jsx("td",{children:"Returns true if the left operand is greater than the right operand. Else false."}),e.jsx("td",{children:"a > b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"<="}),e.jsx("td",{children:"Less than or equal to"}),e.jsx("td",{children:"Returns true if the left operand is less than or equal to the right operand. Else false."}),e.jsx("td",{children:"a <= b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:">="}),e.jsx("td",{children:"Greater than or equal to"}),e.jsx("td",{children:"Returns true if the left operand is greater than or equal to the right operand. Else false."}),e.jsx("td",{children:"a >= b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5"}),e.jsx("td",{children:"=="}),e.jsx("td",{children:"Equal to"}),e.jsx("td",{children:"Returns true if both the operands are equal."}),e.jsx("td",{children:"a == b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsx("td",{children:"!="}),e.jsx("td",{children:"Not equal to"}),e.jsx("td",{children:"Returns true if both the operands are NOT equal."}),e.jsx("td",{children:"a != b"})]})]})]}),e.jsx("h4",{children:"Example of C Relational Operators"}),e.jsx("pre",{children:`// C program to illustrate the relational operators
#include <stdio.h>

int main()
{

    int a = 25, b = 5;

    // using operators and printing results
    printf("a < b  : %d
", a < b);
    printf("a > b  : %d
", a > b);
    printf("a <= b: %d
", a <= b);
    printf("a >= b: %d
", a >= b);
    printf("a == b: %d
", a == b);
    printf("a != b : %d
", a != b);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["a < b  : 0 ",e.jsx("br",{}),"a > b  : 1 ",e.jsx("br",{}),"a <= b : 0 ",e.jsx("br",{}),"a >= b : 1 ",e.jsx("br",{}),"a == b   : 0 ",e.jsx("br",{}),"a != b   : 1"]})]}),e.jsx("p",{children:"Here, 0 means false and 1 means true."})]}),e.jsxs("div",{id:"logical",children:[e.jsx("h3",{children:"3. Logical Operator in C"}),e.jsxs("p",{children:["Logical Operators are used to combine two or more conditions/constraints or to complement the evaluation of the original condition in consideration. The result of the operation of a logical operator is a Boolean value either ",e.jsx("b",{children:"true"})," or ",e.jsx("b",{children:"false."})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S. No."}),e.jsx("th",{children:"Symbol"}),e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Syntax"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"&&"}),e.jsx("td",{children:"Logical AND"}),e.jsx("td",{children:"Returns true if both the operands are true."}),e.jsx("td",{children:"a && b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"||"}),e.jsx("td",{children:"Logical OR"}),e.jsx("td",{children:"Returns true if both or any of the operand is true."}),e.jsx("td",{children:"a || b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"!"}),e.jsx("td",{children:"Logical NOT"}),e.jsx("td",{children:"Returns true if the operand is false."}),e.jsx("td",{children:"!a"})]})]})]}),e.jsx("h4",{children:"Example of Logical Operators in C"}),e.jsx("pre",{children:`// C program to illustrate the logical operators
#include <stdio.h>

int main()
{

    int a = 25, b = 5;

    // using operators and printing results
    printf("a && b : %d
", a && b);
    printf("a || b : %d
", a || b);
    printf("!a: %d
", !a);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["a && b : 1",e.jsx("br",{}),"a || b : 1",e.jsx("br",{}),"!a: 0"]})]})]}),e.jsxs("div",{id:"Bitwise",children:[e.jsx("h3",{children:"4. Bitwise Operators in C"}),e.jsx("p",{children:"The Bitwise operators are used to perform bit-level operations on the operands. The operators are first converted to bit-level and then the calculation is performed on the operands. Mathematical operations such as addition, subtraction, multiplication, etc. can be performed at the bit level for faster processing."}),e.jsx("p",{children:"There are 6 bitwise operators in C:"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S. No."}),e.jsx("th",{children:"Symbol"}),e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Syntax"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"&"}),e.jsx("td",{children:"Bitwise AND"}),e.jsx("td",{children:"Performs bit-by-bit AND operation and returns the result."}),e.jsx("td",{children:"a & b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"|"}),e.jsx("td",{children:"Bitwise OR"}),e.jsx("td",{children:"Performs bit-by-bit OR operation and returns the result."}),e.jsx("td",{children:"a | b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"^"}),e.jsx("td",{children:"Bitwise XOR"}),e.jsx("td",{children:"Performs bit-by-bit XOR operation and returns the result."}),e.jsx("td",{children:"a ^ b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:"~"}),e.jsx("td",{children:"Bitwise First Complement"}),e.jsx("td",{children:"Flips all the set and unset bits on the number."}),e.jsx("td",{children:"~a"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5"}),e.jsx("td",{children:"<<"}),e.jsx("td",{children:"Bitwise Leftshift"}),e.jsx("td",{children:"Shifts the number in binary form by one place in the operation and returns the result."}),e.jsx("td",{children:"a << b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsx("td",{children:">>"}),e.jsx("td",{children:"Bitwise Rightshift"}),e.jsx("td",{children:"Shifts the number in binary form by one place in the operation and returns the result."}),e.jsx("td",{children:"a >> b"})]})]})]}),e.jsx("h4",{children:"Example of Bitwise Operators"}),e.jsx("pre",{children:`// C program to illustrate the bitwise operators
#include <stdio.h>

int main()
{

    int a = 25, b = 5;

    // using operators and printing results
    printf("a & b: %d
", a & b);
    printf("a | b: %d
", a | b);
    printf("a ^ b: %d
", a ^ b);
    printf("~a: %d
", ~a);
    printf("a >> b: %d
", a >> b);
    printf("a << b: %d
", a << b);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["a & b: 1 ",e.jsx("br",{}),"a | b: 29 ",e.jsx("br",{}),"a ^ b: 28 ",e.jsx("br",{}),"~a: -26 ",e.jsx("br",{}),"a >> b: 0 ",e.jsx("br",{}),"a << b: 800"]})]})]}),e.jsxs("div",{id:"assignment",children:[e.jsx("h3",{children:"5. Assignment Operators in C"}),e.jsx("p",{children:"Assignment operators are used to assign value to a variable. The left side operand of the assignment operator is a variable and the right side operand of the assignment operator is a value. The value on the right side must be of the same data type as the variable on the left side otherwise the compiler will raise an error."}),e.jsx("p",{children:"The assignment operators can be combined with some other operators in C to provide multiple operations using single operator. These operators are called compound operators."}),e.jsx("p",{children:"In C, there are 11 assignment operators :"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S. No."}),e.jsx("th",{children:"Symbol"}),e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Syntax"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"="}),e.jsx("td",{children:"Simple Assignment"}),e.jsx("td",{children:"Assign the value of the right operand to the left operand."}),e.jsx("td",{children:"a = b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"+="}),e.jsx("td",{children:"Plus and assign"}),e.jsx("td",{children:"Add the right operand and left operand and assign this value to the left operand."}),e.jsx("td",{children:"a += b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"-="}),e.jsx("td",{children:"Minus and assign"}),e.jsx("td",{children:"Subtract the right operand and left operand and assign this value to the left operand."}),e.jsx("td",{children:"a -= b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:"*="}),e.jsx("td",{children:"Multiply and assign"}),e.jsx("td",{children:"Multiply the right operand and left operand and assign this value to the left operand."}),e.jsx("td",{children:"a *= b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5"}),e.jsx("td",{children:"/="}),e.jsx("td",{children:"Divide and assign"}),e.jsx("td",{children:"Divide the left operand with the right operand and assign this value to the left operand."}),e.jsx("td",{children:"a /= b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsx("td",{children:"%="}),e.jsx("td",{children:"Modulus and assign"}),e.jsx("td",{children:"Assign the remainder in the division of left operand with the right operand to the left operand."}),e.jsx("td",{children:"a %= b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"7"}),e.jsx("td",{children:"&="}),e.jsx("td",{children:"AND and assign"}),e.jsx("td",{children:"Performs bitwise AND and assigns this value to the left operand."}),e.jsx("td",{children:"a &= b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"8"}),e.jsx("td",{children:"|="}),e.jsx("td",{children:"OR and assign"}),e.jsx("td",{children:"Performs bitwise OR and assigns this value to the left operand."}),e.jsx("td",{children:"a |= b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"9"}),e.jsx("td",{children:"^="}),e.jsx("td",{children:"XOR and assign"}),e.jsx("td",{children:"Performs bitwise XOR and assigns this value to the left operand."}),e.jsx("td",{children:"a ^= b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"10"}),e.jsx("td",{children:">>="}),e.jsx("td",{children:"Rightshift and assign"}),e.jsx("td",{children:"Performs bitwise Rightshift and assign this value to the left operand."}),e.jsx("td",{children:"a >>= b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"11"}),e.jsx("td",{children:"<<="}),e.jsx("td",{children:"Leftshift and assign"}),e.jsx("td",{children:"Performs bitwise Leftshift and assign this value to the left operand."}),e.jsx("td",{children:"a <<= b"})]})]})]}),e.jsx("h4",{children:"Example of C Assignment Operators"}),e.jsx("pre",{children:`// C program to illustrate the assignment operators
#include <stdio.h>

int main()
{
    int a = 25, b = 5;

    // using operators and printing results
    printf("a = b: %d
", a = b);
    printf("a += b: %d
", a += b);
    printf("a -= b: %d
", a -= b);
    printf("a *= b: %d
", a *= b);
    printf("a /= b: %d
", a /= b);
    printf("a %%= b: %d
", a %= b);
    printf("a &= b: %d
", a &= b);
    printf("a |= b: %d
", a |= b);
    printf("a >>= b: %d
", a >>= b); 
    printf("a <<= b: %d
", a <<= b);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["a = b: 5",e.jsx("br",{}),"a += b: 10",e.jsx("br",{}),"a -= b: 5",e.jsx("br",{}),"a *= b: 25",e.jsx("br",{}),"a /= b: 5",e.jsx("br",{}),"a %= b: 0",e.jsx("br",{}),"a &= b: 0 ",e.jsx("br",{}),"a |= b: 5 ",e.jsx("br",{}),"a >>= b: 0 ",e.jsx("br",{}),"a <<= b: 0"]})]})]}),e.jsxs("div",{id:"other",children:[e.jsx("h3",{children:"6. Other Operators"}),e.jsx("p",{children:"Apart from the above operators, there are some other operators available in C used to perform some specific tasks. Some of them are discussed here: "}),e.jsx("h3",{children:"sizeof Operator"}),e.jsxs("ul",{children:[e.jsx("li",{children:"sizeof is much used in the C programming language."}),e.jsx("li",{children:"It is a compile-time unary operator which can be used to compute the size of its operand."}),e.jsx("li",{children:"The result of sizeof is of the unsigned integral type which is usually denoted by size_t."}),e.jsx("li",{children:"Basically, the sizeof the operator is used to compute the size of the variable or datatype."})]}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:"sizeof (operand)"}),e.jsx("h3",{children:"Comma Operator ( , )"}),e.jsxs("ul",{children:[e.jsx("li",{children:"The comma operator (represented by the token) is a binary operator that evaluates its first operand and discards the result, it then evaluates the second operand and returns this value (and type)."}),e.jsx("li",{children:"The comma operator has the lowest precedence of any C operator."}),e.jsx("li",{children:"Comma acts as both operator and separator."})]}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:"operand1 , operand2"}),e.jsx("h3",{children:"Conditional Operator ( ? : )"}),e.jsxs("ul",{children:[e.jsx("li",{children:"The conditional operator is the only ternary operator in C++."}),e.jsx("li",{children:"Here, Expression1 is the condition to be evaluated. If the condition(Expression1) is True then we will execute and return the result of Expression2 otherwise if the condition(Expression1) is false then we will execute and return the result of Expression3."}),e.jsx("li",{children:"We may replace the use of if..else statements with conditional operators."})]}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:"operand1 ? operand2 : operand3;"}),e.jsx("h3",{children:"dot  and arrow  Operators"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Member operators are used to reference individual members of classes, structures, and unions."}),e.jsx("li",{children:"The dot operator is applied to the actual object."}),e.jsx("li",{children:"The arrow operator is used with a pointer to an object."})]}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:"structure_variable . member;"}),e.jsx("p",{children:"and"}),e.jsx("pre",{children:"structure_pointer -> member;"}),e.jsx("h3",{children:"Cast Operator"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Casting operators convert one data type to another. For example, int(2.2000) would return 2."}),e.jsx("li",{children:"A cast is a special operator that forces one data type to be converted into another."}),e.jsx("li",{children:"The most general cast supported by most of the C compilers is as follows −   [ (type) expression ]."})]}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:`(new_type) operand;
`}),e.jsx("h3",{children:"addressof (&) and Dereference (*) Operators"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pointer operator & returns the address of a variable. For example &a; will give the actual address of the variable."}),e.jsx("li",{children:"The pointer operator * is a pointer to a variable. For example *var; will pointer to a variable var."})]}),e.jsx("h4",{children:"Example of Other C Operators"}),e.jsx("pre",{children:`// C Program to demonstrate the use of Misc operators
#include <stdio.h>

int main()
{
    // integer variable
    int num = 10;
    int* add_of_num = &num;

    printf("sizeof(num) = %d bytes
", sizeof(num));
    printf("&num = %p
", &num);
    printf("*add_of_num = %d
", *add_of_num);
    printf("(10 < 5) ? 10 : 20 = %d
", (10 < 5) ? 10 : 20);
    printf("(float)num = %f
", (float)num);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["sizeof(num) = 4 bytes ",e.jsx("br",{}),"&num = 0x7ffe2b7bdf8c ",e.jsx("br",{}),"*add_of_num = 10 ",e.jsx("br",{}),"(10 < 5) ? 10 : 20 = 20 ",e.jsx("br",{}),"(float)num = 10.000000"]})]}),e.jsx("h3",{children:"Unary, Binary and Ternary Operators in C"}),e.jsx("p",{children:"Operators can also be classified into three types on the basis of the number of operands they work on:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Unary Operators:"}),"Operators that work on single operand."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Binary Operators:"}),"Operators that work on two operands."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ternary Operators:"}),"Operators that work on three operands."]})]}),e.jsx("h3",{children:"Operator Precedence and Associativity in C"}),e.jsx("p",{children:"In C, it is very common for an expression or statement to have multiple operators and in these expression, there should be a fixed order or priority of operator evaluation to avoid ambiguity."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Operator Precedence and Associativity "})," is the concept that decides which operator will be evaluated first in the case when there are multiple operators present in an expression."]}),e.jsx("p",{children:"The below table describes the precedence order and associativity of operators in C. The precedence of the operator decreases from top to bottom."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Precedence"}),e.jsx("th",{children:"Operator"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Associativity"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsxs("td",{children:["()",e.jsx("br",{}),"[]",e.jsx("br",{}),".",e.jsx("br",{}),"->",e.jsx("br",{}),"a++ , a--"]}),e.jsxs("td",{children:["Parentheses (function call)",e.jsx("br",{}),"Brackets (array subscript)",e.jsx("br",{}),"Member selection via object name",e.jsx("br",{}),"Member selection via a pointer",e.jsx("br",{}),"Postfix increment/decrement (a is a variable)"]}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsxs("td",{children:["++a , --a",e.jsx("br",{}),"+ , -",e.jsx("br",{}),"! , ~",e.jsx("br",{}),"(type)",e.jsx("br",{}),"*",e.jsx("br",{}),"&",e.jsx("br",{}),"sizeof"]}),e.jsxs("td",{children:["Prefix increment/decrement (a is a variable)",e.jsx("br",{}),"Unary plus/minus",e.jsx("br",{}),"Logical negation/bitwise complement",e.jsx("br",{}),"Cast (convert value to temporary value of type)",e.jsx("br",{}),"Dereference",e.jsx("br",{}),"Address (of operand)",e.jsx("br",{}),"Determine size in bytes on this implementation"]}),e.jsx("td",{children:"right-to-left"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"* , / , %"}),e.jsx("td",{children:"Multiplication/division/modulus"}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:"+ , -"}),e.jsx("td",{children:"Addition/subtraction"}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5"}),e.jsx("td",{children:"<< , >>"}),e.jsx("td",{children:"Bitwise shift left, Bitwise shift right"}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsxs("td",{children:["< , <=",e.jsx("br",{}),"> , >="]}),e.jsxs("td",{children:["Relational less than/less than or equal to",e.jsx("br",{}),"Relational greater than/greater than or equal to"]}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"7"}),e.jsx("td",{children:"== , !="}),e.jsx("td",{children:"Relational is equal to/is not equal to"}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"8"}),e.jsx("td",{children:"&"}),e.jsx("td",{children:"Bitwise AND"}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"9"}),e.jsx("td",{children:"^"}),e.jsx("td",{children:"Bitwise XOR"}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"10"}),e.jsx("td",{children:"|"}),e.jsx("td",{children:"Bitwise OR"}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"11"}),e.jsx("td",{children:"&&"}),e.jsx("td",{children:"Logical AND"}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"12"}),e.jsx("td",{children:"||"}),e.jsx("td",{children:"Logical OR"}),e.jsx("td",{children:"left-to-right"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"13"}),e.jsx("td",{children:"?:"}),e.jsx("td",{children:"Ternary conditional"}),e.jsx("td",{children:"right-to-left"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"14"}),e.jsxs("td",{children:["=",e.jsx("br",{}),"+= , -=",e.jsx("br",{}),"*= , /=",e.jsx("br",{}),"%= , &=",e.jsx("br",{}),"^= , |=",e.jsx("br",{}),"<<= , >>="]}),e.jsxs("td",{children:["Assignment",e.jsx("br",{}),"Addition/subtraction assignment",e.jsx("br",{}),"Multiplication/division assignment",e.jsx("br",{}),"Modulus/bitwise AND assignment",e.jsx("br",{}),"Bitwise exclusive/inclusive OR assignment",e.jsx("br",{}),"Bitwise shift left/right assignment"]}),e.jsx("td",{children:"right-to-left"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"15"}),e.jsx("td",{children:","}),e.jsx("td",{children:"expression separator"}),e.jsx("td",{children:"left-to-right"})]})]})]}),e.jsx("h3",{children:"Conclusion"}),e.jsx("p",{children:"In this article, the points we learned about the operator are as follows:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Operators are symbols used for performing some kind of operation in C."}),e.jsx("li",{children:"There are six types of operators, Arithmetic Operators, Relational Operators, Logical Operators, Bitwise Operators, Assignment Operators, and Miscellaneous Operators."}),e.jsx("li",{children:"Operators can also be of type unary, binary, and ternary according to the number of operators they are using."}),e.jsx("li",{children:"Every operator returns a numerical value except logical, relational, and conditional operator which returns a boolean value (true or false)."}),e.jsx("li",{children:"There is a Precedence in the operators means the priority of using one operator is greater than another operator."})]})]})]})]})}),kj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Conditional Statements in C"})}),e.jsxs("section",{className:"section",id:"Conditional statements",children:[e.jsx("h2",{children:"Decision Making in C (if, if..else, Nested if, if-else-if)"}),e.jsxs("p",{children:["The conditional statements (also known as decision control structures) such as ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"if else"}),", ",e.jsx("code",{children:"switch"}),", etc. are used for decision-making purposes in C programs."]}),e.jsxs("p",{children:["They are also known as ",e.jsx("strong",{children:"Decision-Making Statements"})," and are used to evaluate one or more conditions and make the decision whether to execute a set of statements or not. These decision-making statements in programming languages decide the direction of the flow of program execution."]}),e.jsx("h3",{children:"Need of Conditional Statements"}),e.jsxs("p",{children:["There come situations in real life when we need to make some decisions and based on these decisions, we decide what should we do next. Similar situations arise in programming also where we need to make some decisions and based on these decisions we will execute the next block of code. For example, in C if ",e.jsx("code",{children:"x"})," occurs then execute ",e.jsx("code",{children:"y"})," else execute ",e.jsx("code",{children:"z"}),". There can also be multiple conditions like in C if ",e.jsx("code",{children:"x"})," occurs then execute ",e.jsx("code",{children:"p"}),", else if condition ",e.jsx("code",{children:"y"})," occurs execute ",e.jsx("code",{children:"q"}),", else execute ",e.jsx("code",{children:"r"}),". This condition of C ",e.jsx("code",{children:"else-if"})," is one of the many ways of importing multiple conditions."]}),e.jsx("h3",{children:"Types of Conditional Statements in C"}),e.jsx("p",{children:"Following are the decision-making statements available in C:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("strong",{children:"if Statement"})}),e.jsx("li",{children:e.jsx("strong",{children:"if-else Statement"})}),e.jsx("li",{children:e.jsx("strong",{children:"Nested if Statement"})}),e.jsx("li",{children:e.jsx("strong",{children:"if-else-if Ladder"})}),e.jsx("li",{children:e.jsx("strong",{children:"switch Statement"})}),e.jsx("li",{children:e.jsx("strong",{children:"Conditional Operator"})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Jump Statements:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"break"})}),e.jsx("li",{children:e.jsx("code",{children:"continue"})}),e.jsx("li",{children:e.jsx("code",{children:"goto"})}),e.jsx("li",{children:e.jsx("code",{children:"return"})})]})]})]}),e.jsx("p",{children:"Let’s discuss each of them one by one."}),e.jsx("h3",{children:"1. if in C"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"if"})," statement is the most simple decision-making statement. It is used to decide whether a certain statement or block of statements will be executed or not, i.e., if a certain condition is true, then a block of statements is executed; otherwise, it is not."]}),e.jsx("h3",{children:"Syntax of if Statement"}),e.jsx("pre",{children:`if (condition) {
    // Statements to execute if
    // condition is true
`}),e.jsxs("p",{children:["Here, the condition after evaluation will be either true or false. The ",e.jsx("code",{children:"if"})," statement accepts boolean values – if the value is true, then it will execute the block of statements below it; otherwise, it will not. If we do not provide the curly braces ",e.jsx("code",{})," after ",e.jsx("code",{children:"if (condition)"}),", then by default, the ",e.jsx("code",{children:"if"})," statement will consider the first immediately below statement to be inside its block."]}),e.jsx("h3",{children:"Example of if in C"}),e.jsx("pre",{children:`// C program to illustrate If statement
#include <stdio.h>

int main() {
    int i = 10;

    if (i > 15) {
        printf("10 is greater than 15");
    }

    printf("I am Not in if");
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"I am Not in if"})]}),e.jsxs("p",{children:["As the condition present in the ",e.jsx("code",{children:"if"})," statement is false, the block below the ",e.jsx("code",{children:"if"})," statement is not executed."]}),e.jsx("h3",{children:"2. if-else in C"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"if"})," statement alone tells us that if a condition is true, it will execute a block of statements, and if the condition is false, it won’t. But what if we want to do something else when the condition is false? Here comes the ",e.jsx("code",{children:"else"})," statement. We can use the ",e.jsx("code",{children:"else"})," statement with the ",e.jsx("code",{children:"if"})," statement to execute a block of code when the condition is false. The ",e.jsx("code",{children:"if-else"})," statement consists of two blocks, one for false expression and one for true expression."]}),e.jsx("h3",{children:"Syntax of if-else in C"}),e.jsx("pre",{children:`if (condition) {
    // Executes this block if
    // condition is true
} else {
    // Executes this block if
    // condition is false
`}),e.jsx("h3",{children:"Example of if-else"}),e.jsx("pre",{children:`// C program to illustrate If statement
#include &lt;stdio.h&gt;

int main() {
    int i = 20;

    if (i < 15) {
        printf("i is smaller than 15");
    } else {
        printf("i is greater than 15");
    }
    return 0;
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"i is greater than 15"})]}),e.jsxs("p",{children:["The block of code following the ",e.jsx("code",{children:"else"})," statement is executed as the condition present in the ",e.jsx("code",{children:"if"})," statement is false."]}),e.jsx("h3",{children:"3. Nested if-else in C"}),e.jsxs("p",{children:["A nested ",e.jsx("code",{children:"if"})," in C is an ",e.jsx("code",{children:"if"})," statement that is the target of another ",e.jsx("code",{children:"if"})," statement. Nested ",e.jsx("code",{children:"if"})," statements mean an ",e.jsx("code",{children:"if"})," statement inside another ",e.jsx("code",{children:"if"})," statement. Yes, C allows us to nest ",e.jsx("code",{children:"if"})," statements within ",e.jsx("code",{children:"if"})," statements, i.e., we can place an ",e.jsx("code",{children:"if"})," statement inside another ",e.jsx("code",{children:"if"})," statement."]}),e.jsx("h3",{children:"Syntax of Nested if-else"}),e.jsx("pre",{children:`if (condition1) {
    // Executes when condition1 is true
    if (condition2) {
        // statement 1
    } else {
        // Statement 2
    }
} else {
    if (condition3) {
        // statement 3
    } else {
        // Statement 4
    }
`}),e.jsx("h3",{children:"Example of Nested if-else"}),e.jsx("pre",{children:`// C program to illustrate nested-if statement
#include <stdio.h>;

int main() {
    int i = 10;

    if (i == 10) {
        // First if statement
        if (i < 15)
            printf("i is smaller than 15
");

        // Nested - if statement
        // Will only be executed if statement above
        // is true
        if (i < 12)
            printf("i is smaller than 12 too
");
        else
            printf("i is greater than 15");
    } else {
        if (i == 20) {
            // Nested - if statement
            // Will only be executed if statement above
            // is true
            if (i < 22)
                printf("i is smaller than 22 too
");
            else
                printf("i is greater than 25");
        }
    }

    return 0;
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["i is smaller than 15",e.jsx("br",{}),"i is smaller than 12 too"]})]}),e.jsx("h3",{children:"4. if-else-if Ladder in C"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"if-else-if"})," statements are used when the user has to decide among multiple options. The C ",e.jsx("code",{children:"if"})," statements are executed from the top down. As soon as one of the conditions controlling the ",e.jsx("code",{children:"if"})," is true, the statement associated with that ",e.jsx("code",{children:"if"})," is executed, and the rest of the C ",e.jsx("code",{children:"else-if"})," ladder is bypassed. If none of the conditions is true, then the final ",e.jsx("code",{children:"else"})," statement will be executed. The ",e.jsx("code",{children:"if-else-if"})," ladder is similar to the ",e.jsx("code",{children:"switch"})," statement."]}),e.jsx("h3",{children:"Syntax of if-else-if Ladder"}),e.jsx("pre",{children:`if (condition)
    statement;
else if (condition)
    statement;
.
.
else
    statement;`}),e.jsx("h3",{children:"Example of if-else-if Ladder"}),e.jsx("pre",{children:`// C program to illustrate nested-if statement
#include &lt;stdio.h&gt;

int main() {
    int i = 20;

    if (i == 10)
        printf("i is 10");
    else if (i == 15)
        printf("i is 15");
    else if (i == 20)
        printf("i is 20");
    else
        printf("i is not present");
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"i is 20"})]}),e.jsx("h3",{children:"5. switch Statement in C"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"switch"})," case statement is an alternative to the ",e.jsx("code",{children:"if-else-if"})," ladder that can be used to execute the conditional code based on the value of the variable specified in the ",e.jsx("code",{children:"switch"})," statement. The ",e.jsx("code",{children:"switch"})," block consists of cases to be executed based on the value of the ",e.jsx("code",{children:"switch"})," variable."]}),e.jsx("h3",{children:"Syntax of switch"}),e.jsx("pre",{children:`
switch (expression) {
    case value1:
        statements;
    case value2:
        statements;
    ....
    ....
    ....
    default:
        statements;
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The ",e.jsx("code",{children:"switch"})," expression should evaluate to either integer or character. It cannot evaluate any other data type."]}),e.jsx("h3",{children:"Example of switch Statement"}),e.jsx("pre",{children:`
// C Program to illustrate the use of switch statement
#include <stdio.h>

int main() {
    // variable to be used in switch statement
    int var = 2;

    // declaring switch cases
    switch (var) {
    case 1:
        printf("Case 1 is executed");
        break;
    case 2:
        printf("Case 2 is executed");
        break;
    default:
        printf("Default Case is executed");
        break;
    }

    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Case 2 is executed"})]}),e.jsx("h3",{children:"6. Conditional Operator in C"}),e.jsxs("p",{children:["The conditional operator is used to add conditional code in our program. It is similar to the ",e.jsx("code",{children:"if-else"})," statement. It is also known as the ternary operator as it works on three operands."]}),e.jsx("h3",{children:"Syntax of Conditional Operator"}),e.jsx("pre",{children:`
(condition) ? [true_statements] : [false_statements];`}),e.jsx("h3",{children:"Example of Conditional Operator"}),e.jsx("pre",{children:`
// C Program to illustrate the use of conditional operator
#include <stdio.h>

// driver code
int main() {
    int var;
    int flag = 0;

    // using conditional operator to assign the value to var
    // according to the value of flag
    var = flag == 0 ? 25 : -25;
    printf("Value of var when flag is 0: %d
", var);

    // changing the value of flag
    flag = 1;
    // again assigning the value to var using same statement
    var = flag == 0 ? 25 : -25;
    printf("Value of var when flag is NOT 0: %d", var);

    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Value of var when flag is 0: 25",e.jsx("br",{}),"Value of var when flag is NOT 0: -25"]})]}),e.jsx("h3",{children:"7. Jump Statements in C"}),e.jsx("p",{children:"These statements are used in C for the unconditional flow of control throughout the functions in a program. They support four types of jump statements:"}),e.jsx("h3",{children:"A) break"}),e.jsxs("p",{children:["This loop control statement is used to terminate the loop. As soon as the ",e.jsx("code",{children:"break"})," statement is encountered from within a loop, the loop iterations stop there, and control returns from the loop immediately to the first statement after the loop."]}),e.jsx("h3",{children:"Syntax of break"}),e.jsx("pre",{children:`
break;`}),e.jsxs("p",{children:["Basically, ",e.jsx("code",{children:"break"})," statements are used in situations when we are not sure about the actual number of iterations for the loop or we want to terminate the loop based on some condition."]}),e.jsx("h3",{children:"Example of break"}),e.jsx("pre",{children:`
// C program to illustrate
// to show usage of break
// statement
#include <stdio.h>

void findElement(int arr[], int size, int key) {
    // loop to traverse array and search for key
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            printf("Element found at position: %d", (i + 1));
            break;
        }
    }
}

int main() {
    int arr[] = { 1, 2, 3, 4, 5, 6 };

    // no of elements
    int n = 6;

    // key to be searched
    int key = 3;

    // Calling function to find the key
    findElement(arr, n, key);

    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Element found at position: 3"})]}),e.jsx("h3",{children:"B) continue"}),e.jsxs("p",{children:["This loop control statement is just like the ",e.jsx("code",{children:"break"})," statement. The ",e.jsx("code",{children:"continue"})," statement is opposite to that of the ",e.jsx("code",{children:"break"})," statement; instead of terminating the loop, it forces the execution of the next iteration of the loop."]}),e.jsx("h3",{children:"Syntax of continue"}),e.jsx("pre",{children:`
continue;`}),e.jsx("h3",{children:"Example of continue"}),e.jsx("pre",{children:`
// C program to explain the use
// of continue statement
#include <stdio.h>

int main() {
    // loop from 1 to 10
    for (int i = 1; i <= 10; i++) {

        // If i is equals to 6,
        // continue to next iteration
        // without printing
        if (i == 6)
            continue;

        else
            // otherwise print the value of i
            printf("%d ", i);
    }

    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"1 2 3 4 5 7 8 9 10"})]}),e.jsx("h3",{children:"C) goto"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"goto"})," statement in C, also referred to as the unconditional jump statement, can be used to jump from one point to another within a function."]}),e.jsx("h3",{children:"Syntax of goto"}),e.jsx("pre",{children:`
Syntax1      |   Syntax2
----------------------------
goto label;  |    label:  
.            |    .
.            |    .
.            |    .
label:       |    goto label;`}),e.jsxs("p",{children:["In the above syntax, the first line tells the compiler to go to or jump to the statement marked as a label. Here, a label is a user-defined identifier that indicates the target statement. The statement immediately followed after ",e.jsx("code",{children:"label:"})," is the destination statement. The ",e.jsx("code",{children:"label:"})," can also appear before the ",e.jsx("code",{children:"goto label;"})," statement in the above syntax."]}),e.jsx("h3",{children:"Example of goto"}),e.jsx("pre",{children:`
// C program to print numbers
// from 1 to 10 using goto
// statement
#include <stdio.h>

// function to print numbers from 1 to 10
void printNumbers() {
    int n = 1;
label:
    printf("%d ", n);
    n++;
    if (n <= 10)
        goto label;
}

// Driver program to test above function
int main() {
    printNumbers();
    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"1 2 3 4 5 6 7 8 9 10"})]}),e.jsx("h3",{children:"D) return"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"return"})," statement in C returns the flow of the execution to the function from where it is called. This statement does not mandatorily need any conditional statements. As soon as the statement is executed, the flow of the program stops immediately and returns the control from where it was called. The ",e.jsx("code",{children:"return"})," statement may or may not return anything for a void function, but for a non-void function, a return value must be returned."]}),e.jsx("h3",{children:"Syntax of return"}),e.jsx("pre",{children:`
return [expression];`}),e.jsx("h3",{children:"Example of return"}),e.jsx("pre",{children:`
// C code to illustrate return
// statement
#include <stdio.h>

// non-void return type
// function to calculate sum
int SUM(int a, int b) {
    int s1 = a + b;
    return s1;
}

// returns void
// function to print
void Print(int s2) {
    printf("The sum is %d", s2);
    return;
}

int main() {
    int num1 = 10;
    int num2 = 10;
    int sum_of = SUM(num1, num2);
    Print(sum_of);
    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"The sum is 20"})]})]})]})}),Sj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Loops in C"})}),e.jsxs("section",{className:"section",id:"C loops",children:[e.jsx("h2",{children:"C – Loops"}),e.jsx("p",{children:"Loops in programming are used to repeat a block of code until the specified condition is met. A loop statement allows programmers to execute a statement or group of statements multiple times without repetition of code."}),e.jsx("h3",{children:"Example: Need of Loops"}),e.jsx("pre",{children:`
// C program to illustrate need of loops
#include <stdio.h>

int main() {
    printf("Hello World
");
    printf("Hello World
");
    printf("Hello World
");
    printf("Hello World
");
    printf("Hello World
");
    printf("Hello World
");
    printf("Hello World
");
    printf("Hello World
");
    printf("Hello World
");
    printf("Hello World
");

    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World"]})]}),e.jsx("h3",{children:"Types of Loops in C"}),e.jsx("p",{children:"There are mainly two types of loops in C Programming:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Entry Controlled loops:"})," In Entry controlled loops, the test condition is checked before entering the main body of the loop. ",e.jsx("code",{children:"for"})," Loop and ",e.jsx("code",{children:"while"})," Loop are Entry-controlled loops."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Exit Controlled loops:"})," In Exit controlled loops, the test condition is evaluated at the end of the loop body. The loop body will execute at least once, irrespective of whether the condition is true or false. ",e.jsx("code",{children:"do-while"})," Loop is an Exit Controlled loop."]})]}),e.jsx("h3",{children:"Loop Types and Descriptions"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Loop Type"}),e.jsx("th",{children:"Description"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"for loop"}),e.jsx("td",{children:"First initializes, then condition check, then executes the body, and at last, the update is done."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"while loop"}),e.jsx("td",{children:"First initializes, then condition checks, and then executes the body. Updating can be inside the body."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"do-while loop"}),e.jsx("td",{children:"First executes the body and then the condition check is done."})]})]}),e.jsx("h3",{children:"for Loop"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"for"})," loop in C programming is a repetition control structure that allows programmers to write a loop that will be executed a specific number of times. It enables programmers to perform n number of steps together in a single line."]}),e.jsx("h3",{children:"Syntax of for Loop"}),e.jsx("pre",{children:`
for (initialize expression; test expression; update expression) {
    // body of for loop
}`}),e.jsx("h3",{children:"Example of for Loop"}),e.jsx("pre",{children:`
// C program to illustrate for loop
#include <stdio.h>

// Driver code
int main() {
    int i = 0;

    for (i = 1; i <= 10; i++) {
        printf("Hello World
");
    }
    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World"]})]}),e.jsx("h3",{children:"while Loop"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"while"})," loop does not depend upon the number of iterations. In a ",e.jsx("code",{children:"for"})," loop, the number of iterations is previously known, but in a ",e.jsx("code",{children:"while"})," loop, the execution is terminated based on the test condition. If the test condition becomes false, it will break from the loop; otherwise, the body will be executed."]}),e.jsx("h3",{children:"Syntax of while Loop"}),e.jsx("pre",{children:`
initialization_expression;

while (test_expression) {
    // body of the while loop
    update_expression;
}`}),e.jsx("h3",{children:"Example of while Loop"}),e.jsx("pre",{children:`
// C program to illustrate while loop
#include <stdio.h>

// Driver code
int main() {
    // Initialization expression
    int i = 2;

    // Test expression
    while (i < 10) {
        // loop body
        printf("Hello World
");

        // update expression
        i++;
    }

    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World",e.jsx("br",{}),"Hello World"]})]}),e.jsx("h3",{children:"do-while Loop"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"do-while"})," loop is similar to a ",e.jsx("code",{children:"while"})," loop, but the only difference is that the test condition is evaluated at the end of the body. In the ",e.jsx("code",{children:"do-while"})," loop, the loop body will execute at least once, irrespective of the test condition."]}),e.jsx("h3",{children:"Syntax of do-while Loop"}),e.jsx("pre",{children:`
initialization_expression;
do {
    // body of do-while loop
    update_expression;
} while (test_expression);`}),e.jsx("h3",{children:"Example of do-while Loop"}),e.jsx("pre",{children:`
// C program to illustrate do-while loop
#include <stdio.h>

// Driver code
int main() {
    // Initialization expression
    int i = 2;

    do {
        // loop body
        printf("Hello World
");

        // Update expression
        i++;
    } while (i < 1); // Test expression

    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Hello World"})]}),e.jsx("h3",{children:"Loop Control Statements"}),e.jsx("p",{children:"Loop control statements in C programming are used to change execution from its normal sequence."}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"break statement"}),e.jsx("td",{children:"Terminates the loop or switch statement and transfers execution to the statement immediately following the loop or switch."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"continue statement"}),e.jsx("td",{children:"Skips the remainder of the loop body and immediately resets the condition before reiterating."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"goto statement"}),e.jsx("td",{children:"Transfers control to the labeled statement."})]})]}),e.jsx("h3",{children:"Infinite Loop"}),e.jsx("p",{children:"An infinite loop is executed when the test expression never becomes false, and the body of the loop is executed repeatedly. A program is stuck in an infinite loop when the condition is always true. Mostly, this is an error that can be resolved using Loop Control statements."}),e.jsx("h3",{children:"Example of Infinite Loop using for Loop"}),e.jsx("pre",{children:`
// C program to demonstrate infinite loops using for loop
#include <stdio.h>

// Driver code
int main() {
    int i;

    // This is an infinite for loop as the condition expression is blank
    for ( ; ; ) {
        printf("This loop will run forever.
");
    }

    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["This loop will run forever.",e.jsx("br",{}),"This loop will run forever.",e.jsx("br",{}),"This loop will run forever.",e.jsx("br",{}),"..."]})]}),e.jsx("h3",{children:"Example of Infinite Loop using while Loop"}),e.jsx("pre",{children:`
// C program to demonstrate infinite loop using while loop
#include <stdio.h>

// Driver code
int main() {
    while (1) {
        printf("This loop will run forever.
");
    }
    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["This loop will run forever.",e.jsx("br",{}),"This loop will run forever.",e.jsx("br",{}),"This loop will run forever.",e.jsx("br",{}),"..."]})]}),e.jsx("h3",{children:"Example of Infinite Loop using do-while Loop"}),e.jsx("pre",{children:`
// C program to demonstrate infinite loop using do-while loop
#include <stdio.h>

// Driver code
int main() {
    do {
        printf("This loop will run forever.
");
    } while (1);

    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["This loop will run forever.",e.jsx("br",{}),"This loop will run forever.",e.jsx("br",{}),"This loop will run forever.",e.jsx("br",{}),"..."]})]})]})]})}),Cj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"C Functions"})}),e.jsxs("section",{className:"section",id:"Function",children:[e.jsx("h2",{children:"Functions"}),e.jsxs("p",{children:["A function in C is a set of statements that when called perform some specific tasks. It is the basic building block of a C program that provides modularity and code reusability. The programming statements of a function are enclosed within ",e.jsx("code",{})," braces, having certain meanings and performing certain operations. They are also called subroutines or procedures in other languages."]}),e.jsx("p",{children:"In this article, we will learn about functions, function definition, declaration, arguments and parameters, return values, and many more."}),e.jsx("h3",{children:"Syntax of Functions in C"}),e.jsx("p",{children:"The syntax of function can be divided into 3 aspects:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Function Declaration"}),e.jsx("li",{children:"Function Definition"}),e.jsx("li",{children:"Function Calls"})]}),e.jsx("h3",{children:"Function Declarations"}),e.jsx("p",{children:"In a function declaration, we must provide the function name, its return type, and the number and type of its parameters. A function declaration tells the compiler that there is a function with the given name defined somewhere else in the program."}),e.jsx("h3",{children:"Syntax"}),e.jsx("pre",{children:`
return_type name_of_the_function (parameter_1, parameter_2);
    `}),e.jsx("p",{children:"The parameter name is not mandatory while declaring functions. We can also declare the function without using the name of the data variables."}),e.jsx("h3",{children:"Example"}),e.jsx("pre",{children:`
int sum(int a, int b);  // Function declaration with parameter names
int sum(int , int);      // Function declaration without parameter names
    `}),e.jsx("h3",{children:"Function Declaration"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," A function in C must always be declared globally before calling it."]}),e.jsx("h3",{children:"Function Definition"}),e.jsx("p",{children:"The function definition consists of actual statements which are executed when the function is called (i.e. when the program control comes to the function)."}),e.jsx("p",{children:"A C function is generally defined and declared in a single step because the function definition always starts with the function declaration, so we do not need to declare it explicitly. The below example serves as both a function definition and a declaration."}),e.jsx("pre",{children:`
return_type function_name (para1_type para1_name, para2_type para2_name)
{
    // body of the function
}`}),e.jsx("h3",{children:"Function Call"}),e.jsx("p",{children:"A function call is a statement that instructs the compiler to execute the function. We use the function name and parameters in the function call."}),e.jsx("p",{children:"In the below example, the first sum function is called, and 10, 30 are passed to the sum function. After the function call, the sum of a and b is returned, and control is also returned back to the main function of the program."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Function call is necessary to bring the program control to the function definition. If not called, the function statements will not be executed."]}),e.jsx("h3",{children:"Example of C Function"}),e.jsx("pre",{children:`
// C program to show function call and definition
#include <stdio.h>

// Function that takes two parameters a and b as inputs and returns their sum
int sum(int a, int b) 
{ 
    return a + b; 
}

// Driver code
int main()
{
    // Calling sum function and storing its value in add variable
    int add = sum(10, 30);
    
    printf("Sum is: %d", add);
    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Sum is: 40"})]}),e.jsx("p",{children:"As we noticed, we have not used explicit function declaration. We simply defined and called the function."}),e.jsx("h3",{children:"Function Return Type"}),e.jsxs("p",{children:["Function return type tells what type of value is returned after the function is executed. When we don’t want to return a value, we can use the ",e.jsx("code",{children:"void"})," data type."]}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`
int func(parameter_1, parameter_2);`}),e.jsx("p",{children:"The above function will return an integer value after running statements inside the function."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Only one value can be returned from a C function. To return multiple values, we have to use pointers or structures."]}),e.jsx("h3",{children:"Function Arguments"}),e.jsx("p",{children:"Function Arguments (also known as Function Parameters) are the data that is passed to a function."}),e.jsx("p",{children:"Example:"}),e.jsx("pre",{children:`
int function_name(int var1, int var2);`}),e.jsx("h3",{children:"Conditions of Return Types and Arguments"}),e.jsx("p",{children:"In C programming language, functions can be called either with or without arguments and might return values. They may or might not return values to the calling functions."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Function with no arguments and no return value"}),e.jsx("li",{children:"Function with no arguments and with return value"}),e.jsx("li",{children:"Function with argument and with no return value"}),e.jsx("li",{children:"Function with arguments and with return value"})]}),e.jsx("h3",{children:"How Does C Function Work?"}),e.jsx("p",{children:"Working of the C function can be broken into the following steps:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Declaring a function"}),e.jsx("li",{children:"Defining a function"}),e.jsx("li",{children:"Calling the function"}),e.jsx("li",{children:"Executing the function"}),e.jsx("li",{children:"Returning a value"})]}),e.jsx("h3",{children:"Types of Functions"}),e.jsx("p",{children:"There are two types of functions in C:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Library Functions"}),e.jsx("li",{children:"User Defined Functions"})]}),e.jsx("h3",{children:"1. Library Function"}),e.jsx("p",{children:"A library function is also referred to as a “built-in function”. A compiler package already exists that contains these functions, each of which has a specific meaning and is included in the package. Built-in functions have the advantage of being directly usable without being defined, whereas user-defined functions must be declared and defined before being used."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Example:"})," ",e.jsx("code",{children:"pow()"}),", ",e.jsx("code",{children:"sqrt()"}),", ",e.jsx("code",{children:"strcmp()"}),", ",e.jsx("code",{children:"strcpy()"}),", etc."]}),e.jsx("h3",{children:"Example of Library Function"}),e.jsx("pre",{children:`
// C program to implement the above approach
#include <math.h>
#include <stdio.h>

// Driver code
int main()
{
    double Number;
    Number = 49;

    // Computing the square root with the help of predefined C library function
    double squareRoot = sqrt(Number);
    
    printf("The Square root of %.2lf = %.2lf", Number, squareRoot);
    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"The Square root of 49.00 = 7.00"})]}),e.jsx("h3",{children:"2. User Defined Function"}),e.jsx("p",{children:"Functions that the programmer creates are known as User-Defined functions or “tailor-made functions”. User-defined functions can be improved and modified according to the need of the programmer. Whenever we write a function that is case-specific and is not defined in any header file, we need to declare and define our own functions according to the syntax."}),e.jsx("h3",{children:"Example of User Defined Function"}),e.jsx("pre",{children:`
// C program to show user-defined functions
#include <stdio.h>

int sum(int a, int b) 
{ 
    return a + b; 
}

// Driver code
int main()
{
    int a = 30, b = 40;
 
    // function call
    int res = sum(a, b);

    printf("Sum is: %d", res);
    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Sum is: 70"})]}),e.jsx("h3",{children:"Passing Parameters to Functions"}),e.jsx("p",{children:"The data passed when the function is being invoked is known as the Actual parameters. In the below program, 10 and 30 are known as actual parameters. Formal Parameters are the variable and the data type as mentioned in the function declaration. In the below program, a and b are known as formal parameters."}),e.jsx("p",{children:"We can pass arguments to the C function in two ways:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Pass by Value"}),e.jsx("li",{children:"Pass by Reference"})]}),e.jsx("h3",{children:"1. Pass by Value"}),e.jsx("p",{children:"Parameter passing in this method copies values from actual parameters into formal function parameters. As a result, any changes made inside the functions do not reflect in the caller’s parameters."}),e.jsx("h3",{children:"Example of Pass by Value"}),e.jsx("pre",{children:`
// C program to show use of call by value
#include <stdio.h>

void swap(int var1, int var2)
{
    int temp = var1;
    var1 = var2;
    var2 = temp;
}

// Driver code
int main()
{
    int var1 = 3, var2 = 2;
    printf("Before swap Value of var1 and var2 is: %d, %d
", var1, var2);
    swap(var1, var2);
    printf("After swap Value of var1 and var2 is: %d, %d", var1, var2);
    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Before swap Value of var1 and var2 is: 3, 2",e.jsx("br",{}),"After swap Value of var1 and var2 is: 3, 2"]})]}),e.jsx("h3",{children:"2. Pass by Reference"}),e.jsx("p",{children:"The caller’s actual parameters and the function’s actual parameters refer to the same locations, so any changes made inside the function are reflected in the caller’s actual parameters."}),e.jsx("h3",{children:"Example of Pass by Reference"}),e.jsx("pre",{children:`
// C program to show use of call by Reference
#include <stdio.h>

void swap(int *var1, int *var2)
{
    int temp = *var1;
    *var1 = *var2;
    *var2 = temp;
}

// Driver code
int main()
{
    int var1 = 3, var2 = 2;
    printf("Before swap Value of var1 and var2 is: %d, %d
", var1, var2);
    swap(&var1, &var2);
    printf("After swap Value of var1 and var2 is: %d, %d", var1, var2);
    return 0;
}`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Before swap Value of var1 and var2 is: 3, 2",e.jsx("br",{}),"After swap Value of var1 and var2 is: 2, 3"]})]}),e.jsx("h3",{children:"Advantages of Functions in C"}),e.jsxs("ul",{children:[e.jsx("li",{children:"The function can reduce the repetition of the same statements in the program."}),e.jsx("li",{children:"The function makes code readable by providing modularity to our program."}),e.jsx("li",{children:"There is no fixed number of calling functions; it can be called as many times as you want."}),e.jsx("li",{children:"The function reduces the size of the program."}),e.jsx("li",{children:"Once the function is declared, you can just use it without thinking about the internal working of the function."})]}),e.jsx("h3",{children:"Disadvantages of Functions in C"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Cannot return multiple values."}),e.jsx("li",{children:"Memory and time overhead due to stack frame allocation and transfer of program control."})]}),e.jsx("h3",{children:"Conclusion"}),e.jsx("p",{children:"In this article, we discussed the following points about the function:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"The function is the block of code that can be reused as many times as we want inside a program."}),e.jsx("li",{children:"To use a function, we need to call a function."}),e.jsx("li",{children:"Function declaration includes function_name, return type, and parameters."}),e.jsx("li",{children:"Function definition includes the body of the function."}),e.jsx("li",{children:"The function is of two types: user-defined function and library function."}),e.jsx("li",{children:"In function, we can pass arguments in two ways: call by value and call by reference."})]})]})]})}),Aj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:" Parameter Passing Techniques in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Parameter Passing Techniques in C"}),e.jsx("p",{children:e.jsx("strong",{children:"Last Updated : 10 Jan, 2025"})}),e.jsxs("p",{children:["In C, there are different ways in which parameter data can be passed into and out of methods and functions. Let us assume that a function ",e.jsx("code",{children:"B()"})," is called from another function ",e.jsx("code",{children:"A()"}),". In this case, ",e.jsx("code",{children:"A"})," is called the “caller function” and ",e.jsx("code",{children:"B"})," is called the “called function or callee function”. Also, the arguments which ",e.jsx("code",{children:"A"})," sends to ",e.jsx("code",{children:"B"})," are called actual arguments and the parameters of ",e.jsx("code",{children:"B"})," are called formal arguments."]}),e.jsx("h3",{children:"Terminology"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Formal Parameter:"})," A variable and its type as it appears in the prototype of the function or method."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Actual Parameter:"})," The variable or expression corresponding to a formal parameter that appears in the function or method call in the calling environment."]})]}),e.jsx("h3",{children:"Modes:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"IN:"})," Passes info from caller to the callee."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OUT:"})," Callee writes values in the caller."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"IN/OUT:"})," The caller tells the callee the value of the variable, which the callee may update."]})]}),e.jsx("p",{children:"Parameter passing techniques in C, such as pass by value and pass by reference, are fundamental for controlling data flow."}),e.jsx("h3",{children:"Methods of Parameter Passing in C"}),e.jsx("p",{children:"There are two ways in which we can pass the parameters to the function in C:"}),e.jsx("h3",{children:"1. Pass By Value"}),e.jsxs("p",{children:["This method uses in-mode semantics. Changes made to formal parameters do not get transmitted back to the caller. Any modifications to the formal parameter variable inside the called function or method affect only the separate storage location and will not be reflected in the actual parameter in the calling environment. This method is also called ",e.jsx("strong",{children:"call by value"}),"."]}),e.jsx("h3",{children:"Example of Pass by Value"}),e.jsx("pre",{children:`
#include <stdio.h>

void func(int a, int b)
{
    a += b;
    printf("In func, a = %d b = %d
", a, b);
}
int main(void)
{
    int x = 5, y = 7;

    // Passing parameters
    func(x, y);
    printf("In main, x = %d y = %d
", x, y);
    return 0;
}
    `}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["In func, a = 12 b = 7",e.jsx("br",{}),"In main, x = 5 y = 7"]})]}),e.jsx("h3",{children:"Shortcomings of Pass By Value:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Inefficiency in storage allocation"}),e.jsx("li",{children:"For objects and arrays, the copy semantics are costly"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Languages like C, C++, and Java support this type of parameter passing. Java, in fact, is strictly call by value."]}),e.jsx("p",{children:e.jsx("strong",{children:"C doesn’t support call by reference."})}),e.jsx("h3",{children:"2. Pass by Pointers"}),e.jsx("p",{children:"This technique uses a pointer. In function, we pass the memory address (pointer) of a variable rather than passing the actual value of the variable. This passing technique allows the function to access and modify the content at that particular memory location."}),e.jsx("h1",{children:"Pass by Pointers and Other Parameter Passing Methods in C"}),e.jsx("h3",{children:"Example of Pass by Pointers"}),e.jsx("p",{children:"The below example demonstrates passing by pointer in a function."}),e.jsx("pre",{children:`
#include <stdio.h>

// Function to modify the value passed as pointer to an int
void modifyVal(int* myptr)
{
    // Access and modifying the value pointed by myptr
    *myptr = *myptr + 5;
}

int main()
{
    int x = 5;
    int* myptr = &x;

    // Passing the pointer ptr to the function
    modifyVal(myptr);

    // Printing the modified value of x
    printf("Modified value of x is: %d
", x);
    return 0;
}
    `}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Modified value of x is: 10"})]}),e.jsx("h3",{children:"Shortcomings of Pass by Pointers"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pointers can be null, so null pointer issues arise if not properly checked."}),e.jsx("li",{children:"If more than one pointer points to the same memory location, changes made by one pointer affect the others."}),e.jsxs("li",{children:["Memory management should be done effectively using functions like ",e.jsx("code",{children:"malloc"})," and ",e.jsx("code",{children:"free"}),"."]})]}),e.jsx("h3",{children:"Other Methods of Parameter Passing"}),e.jsx("p",{children:"These techniques were used in earlier programming languages like Pascal, Algol, and Fortran. They are not commonly used in high-level languages."}),e.jsx("h3",{children:"1. Pass by Result"}),e.jsxs("p",{children:["This method uses out-mode semantics. Just before control is transferred back to the caller, the value of the formal parameter is transmitted back to the actual parameter. This method is sometimes called ",e.jsx("strong",{children:"call by result"}),". It is implemented by copying."]}),e.jsx("h3",{children:"2. Pass by Value-Result"}),e.jsxs("p",{children:["This method uses in/out-mode semantics, combining Pass-by-Value and Pass-by-Result. Before control is transferred back to the caller, the value of the formal parameter is transmitted back to the actual parameter. It is sometimes called ",e.jsx("strong",{children:"call by value-result"}),"."]}),e.jsx("h3",{children:"3. Pass by Name"}),e.jsx("p",{children:"This technique is used in programming languages such as Algol. In this technique, the symbolic “name” of a variable is passed, which allows it to be accessed and updated."}),e.jsx("h3",{children:"Example of Pass by Name"}),e.jsx("pre",{children:`
procedure double(x);
  real x;
begin 
  x := x * 2;
end;
    `}),e.jsx("h3",{children:"Implications of Pass-by-Name Mechanism:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"The argument expression is re-evaluated each time the formal parameter is passed."}),e.jsx("li",{children:"The procedure can change the values of variables used in the argument expression and hence change the expression’s value."})]})]})]})}),Ej=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Main Function in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Main Function"}),e.jsx("p",{children:"The main function is the entry point of a C program. It is a user-defined function where the execution of a program starts. Every C program must contain it, and its return value typically indicates the success or failure of the program."}),e.jsx("h3",{children:"Example"}),e.jsx("pre",{children:`
#include <stdio.h>

int main() {
    printf("Hello, World!
");
    return 0;
}
    `}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Hello, World!"})]}),e.jsx("h3",{children:"Explanation"}),e.jsxs("p",{children:["This basic example demonstrates a simple ",e.jsx("code",{children:"main()"}),' function. It prints "Hello, World!" and returns 0 to indicate that the program executed successfully.']}),e.jsx("h3",{children:"What Happens if We Use a Different Function Name?"}),e.jsx("pre",{children:`
#include <stdio.h>

int func() {
    printf("Hello, World!
");
    return 0;
}
    `}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["/usr/lib/x86_64-linux-gnu/crt1.o: In function '_start':",e.jsx("br",{}),"(.text+0x20): undefined reference to 'main'",e.jsx("br",{}),"collect2: error: ld returned 1 exit status"]})]}),e.jsx("h3",{children:"Syntax of main()"}),e.jsx("p",{children:"The syntax of the main() function can be written in two common forms:"}),e.jsx("h3",{children:"Without Command-Line Arguments"}),e.jsx("pre",{children:`
return_type main() {
    // Code goes here
    // Returning
}
    `}),e.jsx("p",{children:"Examples:"}),e.jsx("pre",{children:`
int main(){}
int main(void){}
main(){}
void main(){}
main(void){}
void main(void){}
    `}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The ",e.jsx("code",{children:"void"})," return type is supported but generally not recommended, as the OS may not get any notification about the program execution if no value is returned."]}),e.jsx("h3",{children:"With Command-Line Arguments"}),e.jsx("pre",{children:`
return_type main(int argc, char *argv[]) {
    // Code goes here….
}
    `}),e.jsx("h3",{children:"Here:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"argc:"})," Stands for ARGument Count, it is an integer variable that stores the number of command-line arguments passed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"argv:"})," Stands for ARGument Vector, it is an array of character pointers listing all the arguments."]})]}),e.jsx("h3",{children:"Types of main() in C"}),e.jsxs("p",{children:["There are 3 variations of ",e.jsx("code",{children:"main()"})," in C:"]}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsx("strong",{children:"main() with No Arguments and void Return Type – Not Recommended"})}),e.jsx("li",{children:e.jsx("strong",{children:"main() with No Arguments and int Return Type – Recommended"})}),e.jsx("li",{children:e.jsx("strong",{children:"main() with Command Line Arguments"})})]}),e.jsx("h3",{children:"1. main() with No Arguments and void Return Type – Not Recommended"}),e.jsxs("p",{children:["This type of ",e.jsx("code",{children:"main()"})," is rare and not commonly used. It doesn’t accept any command-line arguments and does not return any value."]}),e.jsx("pre",{children:`
#include <stdio.h>

// Can also be 'void main(void)'
void main() {   
    printf("Hello!");
}
    `}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Hello!"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The return type of the main function according to the C standard should be ",e.jsx("code",{children:"int"})," only."]}),e.jsx("h3",{children:"2. main() with No Arguments and int Return Type – Recommended"}),e.jsxs("p",{children:["This is the most commonly used form of ",e.jsx("code",{children:"main()"})," in C."]}),e.jsx("pre",{children:`
#include <stdio.h>

// Can be 'int main(void)' or 'main(void)'
// or just 'main()'
int main() {
    printf("Hello!");
    return 0;
}
    `}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Hello!"})]}),e.jsx("h3",{children:"3. main() with Command Line Arguments"}),e.jsxs("p",{children:["This version of ",e.jsx("code",{children:"main()"})," is used when a program needs to accept command-line arguments. The arguments are passed through ",e.jsx("code",{children:"argc"})," (argument count) and ",e.jsx("code",{children:"argv"})," (argument vector)."]}),e.jsx("pre",{children:`
#include <stdio.h>

int main(int argc, char* argv[]) {
    // Printing the count of arguments
    printf("The value of argc is %d
", argc);

    // Printing each argument
    for (int i = 0; i < argc; i++) {
        printf("%s 
", argv[i]);
    }

    return 0;
}
    `})]})]})}),Oj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Recursion in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"C Recursion"}),e.jsx("p",{children:"In C programming language, you may have heard of the concept of recursion. You may also have heard that recursion is difficult and complex to understand and implement. Do not worry! In this article, we are going to cover the basics of recursion in C, recursive functions, recursive calls, and how it is different from iteration."}),e.jsx("h3",{children:"What is Recursion in C?"}),e.jsx("p",{children:"First, let’s start with the recursion definition,"}),e.jsx("p",{children:"Recursion is the process of a function calling itself repeatedly till the given condition is satisfied. A function that calls itself directly or indirectly is called a recursive function and such kind of function calls are called recursive calls."}),e.jsx("p",{children:"In C, recursion is used to solve complex problems by breaking them down into simpler sub-problems. We can solve large numbers of problems using recursion in C. For example, factorial of a number, generating Fibonacci series, generating subsets, etc."}),e.jsx("p",{children:"Let’s discuss some basic terminologies and fundamentals of recursion before going into working and implementation."}),e.jsx("h3",{children:"Recursive Functions in C"}),e.jsx("p",{children:"In C, a function that calls itself is called Recursive Function. The recursive functions contain a call to themselves somewhere in the function body. Moreover, such functions can contain multiple recursive calls."}),e.jsx("h3",{children:"Basic Structure of Recursive Functions"}),e.jsx("p",{children:"The basic syntax structure of the recursive functions is:"}),e.jsx("pre",{children:`
type function_name (args) {
    // function statements
    // base condition
    // recursion case (recursive call)
}
`}),e.jsx("h3",{children:"Example: C Program to Implement Recursion"}),e.jsx("p",{children:"In the below C program, recursion is used to calculate the sum of the first N natural numbers."}),e.jsx("pre",{children:`
#include <stdio.h>

int nSum(int n)
{
    // base condition to terminate the recursion when N = 0
    if (n == 0) {
        return 0;
    }

    // recursive case / recursive call
    int res = n + nSum(n - 1);

    return res;
}

int main()
{
    int n = 5;

    // calling the function
    int sum = nSum(n);

    printf("Sum of First %d Natural Numbers: %d", n, sum);
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Sum of First 5 Natural Numbers: 15"})]}),e.jsx("p",{children:"We will understand the different concepts of recursion using this example."}),e.jsx("h3",{children:"Fundamentals of C Recursion"}),e.jsx("p",{children:"The fundamental of recursion consists of two objects which are essential for any recursive function. These are:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Recursion Case"}),e.jsx("li",{children:"Base Condition"})]}),e.jsx("h3",{children:"1. Recursion Case"}),e.jsx("p",{children:"The recursion case refers to the recursive call present in the recursive function. It decides what type of recursion will occur and how the problem will be divided into smaller subproblems."}),e.jsx("p",{children:"The recursion case defined in the nSum() function of the above example is:"}),e.jsx("pre",{children:`
int res = n + nSum(n - 1);
`}),e.jsx("p",{children:"The recursion case is often represented mathematically as a recurrence relation. For the above case:"}),e.jsx("pre",{children:`
f(N) = N + f(N - 1);
`}),e.jsx("p",{children:"This recurrence relation is used for the complexity analysis of the method."}),e.jsx("h3",{children:"2. Base Condition"}),e.jsx("p",{children:"The base condition specifies when the recursion is going to terminate. It is the condition that determines the exit point of the recursion."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," It is important to define the base condition before the recursive case otherwise, the base condition may never be encountered and recursion might continue till infinity."]}),e.jsx("p",{children:"Considering the above example again, the base condition defined for the nSum() function:"}),e.jsx("pre",{children:`
if (n == 0) {
    return 0;
}
`}),e.jsx("p",{children:"Now that the basic terminologies and fundamentals are out of the way, let’s move on to understand how the recursion works in C."}),e.jsx("h3",{children:"How Recursion Works in C?"}),e.jsx("p",{children:"Recursion is considered difficult to understand by many people but once you understand the working of recursion, it becomes a powerful weapon in your arsenal to battle complex problems."}),e.jsx("p",{children:"To understand how C recursion works, we will again refer to the example above and trace the flow of the program. In the nSum() function, Recursive Case is:"}),e.jsx("pre",{children:`
int res = n + nSum(n - 1);
`}),e.jsx("p",{children:"In the example, n = 5, so as nSum(5)’s recursive case, we get:"}),e.jsx("pre",{children:`
int res = 5 + nSum(4);
`}),e.jsx("p",{children:"In nSum(4), the recursion case and everything else will be the same, but n = 4. Let’s evaluate the recursive case for n = 4,"}),e.jsx("pre",{children:`
int res = 4 + nSum(3);
`}),e.jsx("p",{children:"Similarly, for nSum(3), nSum(2) and nSum(1):"}),e.jsx("pre",{children:`
int res = 3 + nSum(2);    // nSum(3)
int res = 2 + nSum(1);    // nSum(2)
int res = 1 + nSum(0);    // nSum(1)
`}),e.jsx("p",{children:"Let’s not evaluate nSum(0) and further for now."}),e.jsx("p",{children:"Now recall that the return value of the nSum() function is stored in the same integer named res. So, instead of the function, we can put the value returned by these functions. As such, for nSum(5), we get:"}),e.jsx("pre",{children:`
int res = 5 + 4 + nSum(3);
`}),e.jsx("p",{children:"Similarly, putting return values of nSum() for every n, we get:"}),e.jsx("pre",{children:`
int res = 5 + 4 + 3 + 2 + 1 + nSum(0);
`}),e.jsx("p",{children:"In nSum() function, the base condition is:"}),e.jsx("pre",{children:`
if (n == 0) {
    return 0;
}
`}),e.jsx("p",{children:"which means that when nSum(0) will return 0. Putting this value in nSum(5)’s recursive case, we get:"}),e.jsx("pre",{children:`
int res = 5 + 4 + 3 + 2 + 1 + 0 = 15
`}),e.jsx("p",{children:"At this point, we can see that there are no function calls left. So the recursion will stop here and the final value returned by the function will be 15, which is the sum of the first 5 natural numbers."}),e.jsx("h3",{children:"Memory Allocation for C Recursive Function"}),e.jsx("p",{children:"To further improve our understanding of recursion in C, we will look into how the recursion is internally handled by the C compiler and how the memory is managed for recursive functions."}),e.jsx("p",{children:"As you may know, all the function’s local variables and other stuff are stored inside the stack frame in stack memory, and once the function returns some value, its stack frame is removed from the memory. The recursion follows a similar concept but with a little twist. In Recursion:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"A stack frame is created on top of the existing stack frames each time a recursive call is encountered, and the data of each recursive copy of the function will be stored in their respective stack."}),e.jsx("li",{children:"Once some value is returned by the function, its stack frame will be destroyed."}),e.jsx("li",{children:"The compiler maintains an instruction pointer to store the address of the point where the control should return in the function after its progressive copy returns some value. This return point is the statement just after the recursive call."}),e.jsx("li",{children:"After all the recursive copies return some value, we come back to the base function and finally return the control to the caller function."})]}),e.jsx("h3",{children:"Stack Overflow"}),e.jsx("p",{children:"The program’s call stack has limited memory assigned to it by the operating system and is generally enough for program execution. But if we have a recursive function that goes on for infinite times, sooner or later, the memory will be exhausted and no more data can be stored. This is called stack overflow. In other words,"}),e.jsx("p",{children:"Stack overflow is the error that occurs when the call stack of the program cannot store more data resulting in program termination."}),e.jsx("p",{children:"It is one of the most common errors that is associated with the recursion."}),e.jsx("h3",{children:"Types of C Recursion"}),e.jsx("p",{children:"In C, recursion can be classified into different types based on what kind of recursive case is present. These types are:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Direct Recursion"}),e.jsx("li",{children:"Head Recursion"}),e.jsx("li",{children:"Tail Recursion"}),e.jsx("li",{children:"Tree Recursion"}),e.jsx("li",{children:"Indirect Recursion"})]}),e.jsx("h3",{children:"1. Direct Recursion"}),e.jsx("p",{children:"Direct recursion is the most common type of recursion, where a function calls itself directly within its own body. The recursive call can occur once or multiple times within the function due to which we can further classify the direct recursion:"}),e.jsx("h4",{children:"A. Head Recursion"}),e.jsx("p",{children:"The head recursion is a linear recursion where the position of its only recursive call is at the start of the function. It is generally the first statement in the function."}),e.jsx("h4",{children:"B. Tail Recursion"}),e.jsx("p",{children:"The tail recursion is also a linear recursion like head recursion but the position of the recursive call is at the end of the function. Due to this, the tail recursion can be optimized to minimize the stack memory usage. This process is called Tail Call Optimization."}),e.jsx("p",{children:"In the first example, the nSum() does the tail recursion."}),e.jsx("h4",{children:"C. Tree Recursion"}),e.jsx("p",{children:"In tree recursion, there are multiple recursive calls present in the body of the function. Due to this, while tracing the program flow, it makes a tree-like structure, hence the name Tree Recursion."}),e.jsx("h3",{children:"2. Indirect Recursion"}),e.jsx("p",{children:"Indirect recursion is an interesting form of recursion where a function calls another function, which eventually calls the first function or any other function in the chain, leading to a cycle of function calls. In other words, the functions are mutually recursive. This type of recursion involves multiple functions collaborating to solve a problem."}),e.jsx("h3",{children:"Examples of Recursion in C"}),e.jsx("h4",{children:"Example 1: C Program to Find the Factorial of a Natural Number using Tail Recursion"}),e.jsx("pre",{children:`
#include <stdio.h>

int factorialTail(int n, int res)
{
    // Base case
    if (n == 1 || n == 0) {
        return res;
    }
    else {
        res = res * n;
        // Tail recursive call
        return factorialTail(n - 1, res);
    }
}

int main() {

    int n = 5;

    int fact1 = factorialTail(n, 1);
    printf("Recursive Factorial of %d: %d 
", n, fact1);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Recursive Factorial of 5: 120"})]}),e.jsx("h4",{children:"Example 2: C Program to Find the Fibonacci Number using Tree Recursion"}),e.jsx("pre",{children:`
#include <stdio.h>

int fibonacci(int n)
{
    // Base case
    // Fibonacci of 0 and 1 is the number itself
    if (n <= 1) {
        return n;
    }
    else {
        // Tree recursive calls
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

int main()
{
    // function call
    int n = fibonacci(3);

    // print 5th fibonacci number
    printf("%d", n);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"2"})]}),e.jsx("h4",{children:"Example 3: C Program to Illustrate the Indirect Recursion"}),e.jsx("pre",{children:`
#include <stdio.h>

void functionA(int n)
{
    if (n < 1) {
        return;
    }
    printf("%d ", n);
    n = n - 1;

    // Indirect recursive call to functionB
    functionB(n);
}

void functionB(int n)
{
    if (n < 2) {
        return;
    }

    printf("%d ", n);
    n = n / 2;

    // Indirect recursive call to functionA
    functionA(n);
}

int main()
{
    // Function call
    functionB(20);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"20 10 9 4 3 1"})]}),e.jsx("h3",{children:"Applications of Recursion in C"}),e.jsx("p",{children:"Recursion is widely used to solve different kinds of problems from simple ones like printing linked lists to being extensively used in AI. Some of the common uses of recursion are:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Tree-Graph Algorithms"}),e.jsx("li",{children:"Mathematical Problems"}),e.jsx("li",{children:"Divide and Conquer"}),e.jsx("li",{children:"Dynamic Programming"}),e.jsx("li",{children:"In Postfix to Infix Conversion"}),e.jsx("li",{children:"Searching and Sorting Algorithms"})]}),e.jsx("h3",{children:"Advantages of C Recursion"}),e.jsx("p",{children:"The advantages of using recursive methods over other methods are:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Recursion can effectively reduce the length of the code."}),e.jsx("li",{children:"Some problems are easily solved by using recursion like the tower of Hanoi and tree traversals."}),e.jsx("li",{children:"Data structures like linked lists, trees, etc. are recursive by nature so recursive methods are easier to implement for these data structures."})]}),e.jsx("h3",{children:"Disadvantages of C Recursion"}),e.jsx("p",{children:"As with almost anything in the world, recursion also comes with certain limitations some of which are:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Recursive functions make our program a bit slower due to function call overhead."}),e.jsx("li",{children:"Recursion functions always take extra space in the function call stack due to separate stack frames."}),e.jsx("li",{children:"Recursion methods are difficult to understand and implement."})]}),e.jsx("h3",{children:"Conclusion"}),e.jsx("p",{children:"It is said that,"}),e.jsx("p",{children:"Any problem that can be solved using iteration can also be solved with recursion and vice versa."}),e.jsx("p",{children:"So, C recursion is just one of the methods to solve problems of different kinds. It provides a lot of benefits but also comes with certain limitations. It should be used when its benefits outweigh its limitations."})]})]})}),Nj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Inline Function in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Inline Function"}),e.jsxs("p",{children:["In C, an inline function is a special type of function whose function call is replaced with the actual code of the function rather than being invoked through the usual function call mechanism, potentially improving performance by reducing function call overhead. It is declared using the ",e.jsx("code",{children:"inline"})," keyword and is generally used for small and frequently used functions."]}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:`
#include <stdio.h>

// Inline function to calculate the square of a number
inline int square(int x) {
    return x * x;
}

int main() {
    int n = 5;
  
    // The compiler will replace square(n) with (n * n)
    int res = square(n);
  
    printf("%d", res);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("strong",{children:"Output:"}),e.jsx("p",{children:"25"})]}),e.jsxs("p",{children:["The above function may not compile on some compilers such as GCC. This is because GCC implements inlining as part of its optimization. If all optimization flags are off, the ",e.jsx("code",{children:"inline"})," keyword behaves differently."]}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Syntax"}),e.jsx("li",{children:"Behaviour of Inline Functions"}),e.jsx("li",{children:"Inline without GCC Optimization"}),e.jsx("li",{children:"Inline With GCC Optimization"}),e.jsx("li",{children:"Static Inline Function"}),e.jsx("li",{children:"Inline with Forward Declaration"}),e.jsx("li",{children:"Extern Inline Function"}),e.jsx("li",{children:"Inline Function vs. Macro"})]}),e.jsx("h3",{children:"Syntax"}),e.jsxs("p",{children:["To declare a function as inline, the keyword ",e.jsx("code",{children:"inline"})," is placed before the function’s return type."]}),e.jsx("pre",{children:`
inline return_type function_name(parameters) {
   // Function body
}
`}),e.jsx("h3",{children:"Behaviour of Inline Functions"}),e.jsx("p",{children:"Inline is just a suggestion to the compiler; it does not force the compiler. The behaviour of inline depends on how it is being used and how inline optimization is implemented by the compiler."}),e.jsx("h3",{children:"1. Inline without GCC Optimization"}),e.jsx("p",{children:"When inline is used for a function in a C source file and compiled without any optimization flag, it throws an error as shown:"}),e.jsx("pre",{children:`
#include <stdio.h>

// Inline function in C
inline int foo() {
    return 2;
}

int main() {
    int res;

    // inline function call
    res = foo();
    printf("%d", res);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("strong",{children:"Output:"}),e.jsxs("p",{children:["/usr/bin/ld: /tmp/ccBVKkSP.o: in function `main':",e.jsx("br",{}),"solution.c:(.text+0x12): undefined reference to `foo'",e.jsx("br",{}),"collect2: error: ld returned 1 exit status"]})]}),e.jsx("p",{children:"This is one of the side effects of how GCC handles inline functions. When compiled, GCC performs inline substitution as part of its optimization process. As a result, the symbol for the function is not created in the symbol table because the code is directly replaced with the function’s body during compilation."}),e.jsx("h3",{children:"2. Inline With GCC Optimization"}),e.jsx("p",{children:"The first solution to the above problem is to turn on GCC optimization using an optimization flag passed during the program’s compilation command."}),e.jsx("pre",{children:`
gcc solution.c -o solution -O1
`}),e.jsxs("p",{children:["Any optimization level greater than ",e.jsx("code",{children:"O0"})," will turn on the inline optimization in GCC."]}),e.jsx("pre",{children:`
#include <stdio.h>

// Inline function in C
inline int foo() {
    return 2;
}

int main() {
    int res;

    // inline function call
    res = foo();
    printf("%d", res);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("strong",{children:"Output:"}),e.jsx("p",{children:"2"})]}),e.jsx("h3",{children:"3. Static Inline Function"}),e.jsxs("p",{children:["We can use the ",e.jsx("code",{children:"static"})," keyword before the inline function. This forces the compiler to treat the function with internal linkage and ensures that it is considered during the linking process, allowing the program to compile and run successfully. Though the inlining still depends on the compiler’s optimization level."]}),e.jsx("pre",{children:`
#include <stdio.h>

// Inline function in C
static inline int foo() {
    return 2;
}

int main() {
    int res;

    // inline function call
    res = foo();
    printf("%d", res);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("strong",{children:"Output:"}),e.jsx("p",{children:"2"})]}),e.jsx("h3",{children:"4. Inline with Forward Declaration"}),e.jsxs("p",{children:["If the function is declared separately, then it will be added to the symbol table. Later on, it can be defined as inline, and the compiler will consider it for inlining if the optimization level is ",e.jsx("code",{children:"O1"})," or above. But if the optimization is ",e.jsx("code",{children:"O0"}),", then this function will not be inlined but still will be able to be executed as a normal function."]}),e.jsx("pre",{children:`
#include <stdio.h>

// Forward declaration
int foo();

// Inline function in C
inline int foo() {
    return 2;
}

int main() {
    int res;

    // Inline function call
    res = foo();
    printf("%d", res);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("strong",{children:"Output:"}),e.jsx("p",{children:"2"})]}),e.jsx("h3",{children:"5. Extern Inline Function"}),e.jsx("p",{children:"If the function is defined with external linkage, then the compiler will try to find its definition in other translation units. If found, inlining will still depend on the optimization flag. But the function will be executed in both cases. It will not throw an error."}),e.jsx("p",{children:"At the end of the day, inlining is dependent on the compiler optimization schemes. All the other cases are just fallback measures to keep the program from throwing the error."}),e.jsx("h3",{children:"Inline Function vs. Macro"}),e.jsx("p",{children:"An inline function is similar to a macro in that it can substitute the function call with actual code. However, there are some key differences:"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Feature"}),e.jsx("th",{children:"Inline Function"}),e.jsx("th",{children:"Macro"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Type Safety"}),e.jsx("td",{children:"Type-checked, respects data types."}),e.jsx("td",{children:"No type-checking, can lead to unexpected results."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Debugging"}),e.jsx("td",{children:"Easier to debug, behaves like a regular function."}),e.jsx("td",{children:"Harder to debug, errors may not be clear."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Parameter Evaluation"}),e.jsx("td",{children:"Parameters are evaluated once."}),e.jsx("td",{children:"Parameters may be evaluated multiple times."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Recursion Support"}),e.jsx("td",{children:"Can be recursive."}),e.jsx("td",{children:"Cannot be recursive."})]})]})]}),e.jsx("h3",{children:"When to Use Inline Functions?"}),e.jsx("p",{children:"The use of inline functions is preferred for:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Small Functions:"})," Inline functions are best suited for small, frequently used functions where the performance improvement from avoiding function calls is significant."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Time-Critical Code:"})," Use inline functions in scenarios where performance is critical, such as embedded systems."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Type-Sensitive Operations:"})," Inline functions are preferred over macros because they respect type safety and scope."]})]})]})]})}),Dj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Nested Function in C "})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Nested Function"}),e.jsx("p",{children:"Some programmer thinks that defining a function inside an another function is known as “nested function”. But the reality is that it is not a nested function, it is treated as lexical scoping. Lexical scoping is not valid in C because the compiler cant reach/find the correct memory location of the inner function."}),e.jsxs("p",{children:["Nested function is ",e.jsx("strong",{children:"not supported"})," by C because we cannot define a function within another function in C. We can declare a function inside a function, but it’s not a nested function."]}),e.jsx("p",{children:"Because nested functions definitions can not access local variables of the surrounding blocks, they can access only global variables of the containing module. This is done so that lookup of global variables doesn’t have to go through the directory. As in C, there are two nested scopes: local and global (and beyond this, built-ins). Therefore, nested functions have only a limited use. If we try to approach nested function in C, then we will get compile time error."}),e.jsx("pre",{children:`// C program to illustrate the 
// concept of Nested function. 
#include <stdio.h> 
int main(void) 
{ 
	printf("Main"); 
	int fun() 
	{ 
		printf("fun"); 

		// defining view() function inside fun() function. 
		int view() 
		{ 
			printf("view"); 
		} 
		return 1; 
	} 
	view(); 
} 
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Compile time error: undefined reference to `view'"})]}),e.jsx("p",{children:"An extension of the GNU C Compiler allows the declarations of nested functions. The declarations of nested functions under GCC’s extension need to be prefix/start with the auto keyword."}),e.jsx("pre",{children:`// C program of nested function 
// with the help of gcc extension 
#include <stdio.h> 
int main(void) 
{ 
	auto int view(); // declare function with auto keyword 
	view(); // calling function 
	printf("Main
"); 

	int view() 
	{ 
		printf("View
"); 
		return 1; 
	} 

	printf("HI"); 
	return 0; 
} 
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["view",e.jsx("br",{}),"Main",e.jsx("br",{}),"HI"]})]})]})]})}),zj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Arrays in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Arrays"}),e.jsx("p",{children:"Last Updated: 24 Jan, 2025"}),e.jsx("p",{children:"Array in C is one of the most used data structures in C programming. It is a simple and fast way of storing multiple values under a single name. In this article, we will study the different aspects of array in C language such as array declaration, definition, initialization, types of arrays, array syntax, advantages and disadvantages, and many more."}),e.jsx("h3",{children:"What is Array in C?"}),e.jsx("p",{children:"An array in C is a fixed-size collection of similar data items stored in contiguous memory locations. It can be used to store the collection of primitive data types such as int, char, float, etc., and also derived and user-defined data types such as pointers, structures, etc."}),e.jsx("h3",{children:"C Array Declaration"}),e.jsx("p",{children:"In C, we have to declare the array like any other variable before using it. We can declare an array by specifying its name, the type of its elements, and the size of its dimensions. When we declare an array in C, the compiler allocates the memory block of the specified size to the array name."}),e.jsx("h4",{children:"Syntax of Array Declaration"}),e.jsx("pre",{children:`
data_type array_name [size];
         or
data_type array_name [size1] [size2]...[sizeN];
`}),e.jsx("p",{children:"where N is the number of dimensions."}),e.jsx("p",{children:"The C arrays are static in nature, i.e., they are allocated memory at the compile time."}),e.jsx("h4",{children:"Example of Array Declaration"}),e.jsx("pre",{children:`
// declaring array of integers
int arr_int[5];

// declaring array of characters
char arr_char[5];
`}),e.jsx("h3",{children:"C Array Initialization"}),e.jsx("p",{children:"Initialization in C is the process to assign some initial value to the variable. When the array is declared or allocated memory, the elements of the array contain some garbage value. So, we need to initialize the array to some meaningful value. There are multiple ways in which we can initialize an array in C."}),e.jsx("h3",{children:"1. Array Initialization with Declaration"}),e.jsxs("p",{children:["In this method, we initialize the array along with its declaration. We use an initializer list to initialize multiple elements of the array. An initializer list is the list of values enclosed within braces "," separated by a comma."]}),e.jsx("pre",{children:`
data_type array_name [size] = {value1, value2, ... valueN};
`}),e.jsx("h3",{children:"2. Array Initialization with Declaration without Size"}),e.jsx("p",{children:"If we initialize an array using an initializer list, we can skip declaring the size of the array as the compiler can automatically deduce the size of the array in these cases. The size of the array in these cases is equal to the number of elements present in the initializer list as the compiler can automatically deduce the size of the array."}),e.jsx("pre",{children:`
data_type array_name[] = {1,2,3,4,5};
`}),e.jsx("p",{children:"The size of the above arrays is 5 which is automatically deduced by the compiler."}),e.jsx("h3",{children:"3. Array Initialization after Declaration (Using Loops)"}),e.jsx("p",{children:"We initialize the array after the declaration by assigning the initial value to each element individually. We can use for loop, while loop, or do-while loop to assign the value to each element of the array."}),e.jsx("pre",{children:`
for (int i = 0; i < N; i++) {
    array_name[i] = valuei;
}
`}),e.jsx("h4",{children:"Example of Array Initialization in C"}),e.jsx("pre",{children:`
// array initialization using initializer list
int arr[5] = { 10, 20, 30, 40, 50 };

// array initialization using initializer list without
// specifying size
int arr1[] = { 1, 2, 3, 4, 5 };

// array initialization using for loop
float arr2[5];
for (int i = 0; i < 5; i++) {
    arr2[i] = (float)i * 2.1;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["10 20 30 40 50 ",e.jsx("br",{}),"1 2 3 4 5 ",e.jsx("br",{}),"0.00 2.10 4.20 6.30 8.40"]})]}),e.jsx("h3",{children:"Access Array Elements"}),e.jsxs("p",{children:["We can access any element of an array in C using the array subscript operator ",e.jsx("code",{children:"[ ]"})," and the index value ",e.jsx("code",{children:"i"})," of the element."]}),e.jsx("pre",{children:`
array_name [index];
`}),e.jsx("p",{children:"One thing to note is that the indexing in the array always starts with 0, i.e., the first element is at index 0 and the last element is at N – 1 where N is the number of elements in the array."}),e.jsx("h4",{children:"Example of Accessing Array Elements using Array Subscript Operator"}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    // array declaration and initialization
    int arr[5] = { 15, 25, 35, 45, 55 };

    // accessing element at index 2 i.e 3rd element
    printf("Element at arr[2]: %d
", arr[2]);

    // accessing element at index 4 i.e last element
    printf("Element at arr[4]: %d
", arr[4]);

    // accessing element at index 0 i.e first element
    printf("Element at arr[0]: %d", arr[0]);

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Element at arr[2]: 35",e.jsx("br",{}),"Element at arr[4]: 55",e.jsx("br",{}),"Element at arr[0]: 15",e.jsx("br",{})]})]}),e.jsx("h3",{children:"Update Array Element"}),e.jsxs("p",{children:["We can update the value of an element at the given index ",e.jsx("code",{children:"i"})," in a similar way to accessing an element by using the array subscript operator ",e.jsx("code",{children:"[ ]"})," and assignment operator ",e.jsx("code",{children:"="}),"."]}),e.jsx("pre",{children:`
array_name[i] = new_value;
`}),e.jsx("h3",{children:"C Array Traversal"}),e.jsx("p",{children:"Traversal is the process in which we visit every element of the data structure. For C array traversal, we use loops to iterate through each element of the array."}),e.jsx("h4",{children:"Array Traversal using for Loop"}),e.jsx("pre",{children:`
for (int i = 0; i < N; i++) {
    array_name[i];
}
`}),e.jsx("h3",{children:"How to use Array in C?"}),e.jsx("p",{children:"The following program demonstrates how to use an array in the C programming language:"}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    // array declaration and initialization
    int arr[5] = { 10, 20, 30, 40, 50 };

    // modifying element at index 2
    arr[2] = 100;

    // traversing array using for loop
    printf("Elements in Array: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Elements in Array: 10 20 100 40 50"})]}),e.jsx("h3",{children:"Types of Arrays in C"}),e.jsx("p",{children:"There are two types of arrays based on the number of dimensions they have. They are as follows:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"One Dimensional Arrays (1D Array)"}),e.jsx("li",{children:"Multidimensional Arrays"})]}),e.jsx("h3",{children:"1. One Dimensional Array in C"}),e.jsx("p",{children:"The One-dimensional arrays, also known as 1-D arrays in C, are those arrays that have only one dimension."}),e.jsx("h3",{children:"Syntax of 1D Array in C"}),e.jsx("pre",{children:`
array_name [size];
`}),e.jsx("h4",{children:"Example of 1D Array in C"}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    // 1d array declaration
    int arr[5];

    // 1d array initialization using for loop
    for (int i = 0; i < 5; i++) {
        arr[i] = i * i - 2 * i + 1;
    }

    printf("Elements of Array: ");
    // printing 1d array by traversing using for loop
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Elements of Array: 1 0 1 4 9"})]}),e.jsx("h3",{children:"Array of Characters (Strings)"}),e.jsx("p",{children:"In C, we store words, i.e., a sequence of characters, in the form of an array of characters terminated by a NULL character. These are called strings in C language."}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    // creating array of character
    char arr[6] = { 'H', 'e', 'l', 'l', 'o', '\0' };

    // printing string
    int i = 0;
    while (arr[i]) {
        printf("%c", arr[i++]);
    }
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Hello"})]}),e.jsx("h3",{children:"2. Multidimensional Array in C"}),e.jsx("p",{children:"Multi-dimensional Arrays in C are those arrays that have more than one dimension. Some of the popular multidimensional arrays are 2D arrays and 3D arrays. We can declare arrays with more dimensions than 3D arrays, but they are avoided as they get very complex and occupy a large amount of space."}),e.jsx("h3",{children:"A. Two-Dimensional Array in C"}),e.jsx("p",{children:"A Two-Dimensional array or 2D array in C is an array that has exactly two dimensions. They can be visualized in the form of rows and columns organized in a two-dimensional plane."}),e.jsx("h4",{children:"Syntax of 2D Array in C"}),e.jsx("pre",{children:`
array_name[size1] [size2];
`}),e.jsx("p",{children:"Here,"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"size1"}),": Size of the first dimension."]}),e.jsxs("li",{children:[e.jsx("code",{children:"size2"}),": Size of the second dimension."]})]}),e.jsx("h4",{children:"Example of 2D Array in C"}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    // declaring and initializing 2d array
    int arr[2][3] = { 10, 20, 30, 40, 50, 60 };

    printf("2D Array:
");
    // printing 2d array
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("
");
    }

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["2D Array:",e.jsx("br",{}),"10 20 30 ",e.jsx("br",{}),"40 50 60"]})]}),e.jsx("h3",{children:"B. Three-Dimensional Array in C"}),e.jsx("p",{children:"Another popular form of a multi-dimensional array is the Three-Dimensional Array or 3D Array. A 3D array has exactly three dimensions. It can be visualized as a collection of 2D arrays stacked on top of each other to create the third dimension."}),e.jsx("h4",{children:"Syntax of 3D Array in C"}),e.jsx("pre",{children:`
array_name [size1] [size2] [size3];
`}),e.jsx("h4",{children:"Example of 3D Array"}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    // 3D array declaration
    int arr[2][2][2] = { 10, 20, 30, 40, 50, 60 };

    // printing elements
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
                printf("%d ", arr[i][j][k]);
            }
            printf("
");
        }
        printf("
 
");
    }
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["10 20 ",e.jsx("br",{}),"30 40 ",e.jsx("br",{}),"50 60 ",e.jsx("br",{}),"0 0"]})]}),e.jsx("h3",{children:"Relationship between Arrays and Pointers"}),e.jsx("p",{children:"Arrays and Pointers are closely related to each other such that we can use pointers to perform all the possible operations of the array. The array name is a constant pointer to the first element of the array, and the array decays to pointers when passed to a function."}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    int arr[5] = { 10, 20, 30, 40, 50 };
    int* ptr = &arr[0];

    // comparing address of first element and address stored
    // inside array name
    printf("Address Stored in Array name: %p
Address of "
           "1st Array Element: %p
",
           arr, &arr[0]);

    // printing array elements using pointers
    printf("Array elements using pointer: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", *ptr++);
    }
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Address Stored in Array name: 0x7ffcab67d8e0",e.jsx("br",{}),"Address of 1st Array Element: 0x7ffcab67d8e0",e.jsx("br",{}),"Array elements using pointer: 10 20 30 40 50"]})]}),e.jsx("h3",{children:"Passing an Array to a Function in C"}),e.jsx("p",{children:"An array is always passed as a pointer to a function in C. Whenever we try to pass an array to a function, it decays to the pointer and is then passed as a pointer to the first element of the array."}),e.jsx("p",{children:"We can verify this using the following C Program:"}),e.jsx("pre",{children:`
#include <stdio.h>

void printArray(int arr[])
{
    printf("Size of Array in Functions: %d
", sizeof(arr));
    printf("Array Elements: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
}

// driver code
int main()
{
    int arr[5] = { 10, 20, 30, 40, 50 };

    printf("Size of Array in main(): %d
", sizeof(arr));
    printArray(arr);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("strong",{children:"Output:"}),e.jsxs("p",{children:["Size of Array in main(): 20",e.jsx("br",{}),"Size of Array in Functions: 8",e.jsx("br",{}),"Array Elements: 10 20 30 40 50"]})]}),e.jsx("h3",{children:"Return an Array from a Function in C"}),e.jsx("p",{children:"In C, we can only return a single value from a function. To return multiple values or elements, we have to use pointers. We can return an array from a function using a pointer to the first element of that array."}),e.jsx("pre",{children:`
#include <stdio.h>

// function
int* func()
{
    static int arr[5] = { 1, 2, 3, 4, 5 };

    return arr;
}

// driver code
int main()
{
    int* ptr = func();

    printf("Array Elements: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", *ptr++);
    }
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Array Elements: 1 2 3 4 5"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," You may have noticed that we declared a static array using the ",e.jsx("code",{children:"static"})," keyword. This is due to the fact that when a function returns a value, all the local variables and other entities declared inside that function are deleted. So, if we create a local array instead of static, we will get a segmentation fault while trying to access the array in the main function."]}),e.jsx("h3",{children:"Properties of Arrays in C"}),e.jsx("p",{children:"It is very important to understand the properties of the C array so that we can avoid bugs while using it. The following are the main properties of an array in C:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fixed Size:"})," The array in C is a fixed-size collection of elements. The size of the array must be known at compile time and cannot be changed once it is declared."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Homogeneous Collection:"})," We can only store one type of element in an array. There is no restriction on the number of elements, but the type of all of these elements must be the same."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Indexing in Array:"})," The array index always starts with 0 in C language. It means that the index of the first element of the array will be 0, and the last element will be N – 1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dimensions of an Array:"})," A dimension of an array is the number of indexes required to refer to an element in the array. It is the number of directions in which you can grow the array size."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Contiguous Storage:"})," All the elements in the array are stored continuously one after another in memory. It is one of the defining properties of the array in C, which is also the reason why random access is possible in the array."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Random Access:"})," The array in C provides random access to its elements, i.e., we can get to a random element at any index of the array in constant time complexity just by using its index number."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No Index Out of Bounds Checking:"})," There is no index out-of-bounds checking in C/C++. For example, the following program compiles fine but may produce unexpected output when run."]})]}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    int arr[2];

    printf("%d ", arr[3]);
    printf("%d ", arr[-2]);

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"0 0"})]}),e.jsx("p",{children:"In C, it is not a compiler error to initialize an array with more elements than the specified size. For example, the below program compiles fine and shows just a Warning."}),e.jsx("pre",{children:`
#include <stdio.h>
int main()
{
    // Array declaration by initializing it 
    // with more elements than specified size.
    int arr[2] = { 10, 20, 30, 40, 50 };

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Warnings:"}),e.jsxs("p",{children:["prog.c: In function 'main':",e.jsx("br",{}),"prog.c:7:25: warning: excess elements in array initializer",e.jsx("br",{}),"int arr[2] = ",50,";",e.jsx("br",{}),"^",e.jsx("br",{}),"prog.c:7:25: note: (near initialization for 'arr')",e.jsx("br",{}),"prog.c:7:29: warning: excess elements in array initializer",e.jsx("br",{}),"int arr[2] = ",50,";",e.jsx("br",{}),"^",e.jsx("br",{}),"prog.c:7:29: note: (near initialization for 'arr')",e.jsx("br",{}),"prog.c:7:33: warning: excess elements in array initializer",e.jsx("br",{}),"int arr[2] = ",50,";",e.jsx("br",{}),"^",e.jsx("br",{}),"prog.c:7:33: note: (near initialization for 'arr')",e.jsx("br",{})]})]}),e.jsx("h3",{children:"Examples of Array in C"}),e.jsx("h4",{children:"Example 1: C Program to Perform Array Input and Output"}),e.jsxs("p",{children:["In this program, we will use ",e.jsx("code",{children:"scanf()"})," and ",e.jsx("code",{children:"printf()"})," functions to take input and print output for the array."]}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    // declaring an integer array
    int arr[5];

    // taking input to array elements one by one
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }

    // printing array elements
    printf("Array Elements: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Array Elements: 15775231 0 0 0 4195776"})]}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Input:"}),e.jsx("p",{children:"5 7 9 1 4"})]}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Array Elements: 5 7 9 1 4"})]}),e.jsx("h4",{children:"Example 2: C Program to print the average of the given list of numbers"}),e.jsx("p",{children:"In this program, we will store the numbers in an array and traverse it to calculate the average of the number stored."}),e.jsx("pre",{children:`// C Program to the average to two numbers
#include <stdio.h>

// function to calculate average of the function
float getAverage(float* arr, int size)
{

    int sum = 0;
    // calculating cumulative sum of all the array elements
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }

    // returning average
    return sum / size;
}

// driver code
int main()
{

    // declaring and initializing array
    float arr[5] = { 10, 20, 30, 40, 50 };
    // size of array using sizeof operator
    int n = sizeof(arr) / sizeof(float);

    // printing array elements
    printf("Array Elements: ");
    for (int i = 0; i < n; i++) {
        printf("%.0f ", arr[i]);
    }

    // calling getAverage function and printing average
    printf("
Average: %.2f", getAverage(arr, n));
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Array Elements: 10 20 30 40 50 ",e.jsx("br",{}),"Average: 30.00"]})]}),e.jsx("h4",{children:"Example 3: C Program to find the largest number in the array."}),e.jsx("pre",{children:`// C Program to find the largest number in the array.
#include <stdio.h>

// function to return max value
int getMax(int* arr, int size)
{
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// Driver code
int main()
{

    int arr[10]
        = { 135, 165, 1, 16, 511, 65, 654, 654, 169, 4 };

    printf("Largest Number in the Array: %d",
           getMax(arr, 10));

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Largest Number in the Array: 654"})]}),e.jsx("h3",{children:"Advantages of Array in C"}),e.jsx("p",{children:"The following are the main advantages of an array:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Random and fast access of elements using the array index."}),e.jsx("li",{children:"Use of fewer lines of code as it creates a single array of multiple elements."}),e.jsx("li",{children:"Traversal through the array becomes easy using a single loop."}),e.jsx("li",{children:"Sorting becomes easy as it can be accomplished by writing fewer lines of code."})]}),e.jsx("h3",{children:"Disadvantages of Array in C"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Allows a fixed number of elements to be entered which is decided at the time of declaration. Unlike a linked list, an array in C is not dynamic."}),e.jsx("li",{children:"Insertion and deletion of elements can be costly since the elements are needed to be rearranged after insertion and deletion."})]}),e.jsx("h3",{children:"Conclusion"}),e.jsx("p",{children:"The array is one of the most used and important data structures in C. It is one of the core concepts of C language that is used in every other program. Though it is important to know about its limitation so that we can take advantage of its functionality."})]})]})}),Rj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Pointers in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Pointers"}),e.jsx("p",{children:"A pointer is a variable that stores the memory address of another variable. Instead of holding a direct value, it holds the address where the value is stored in memory. There are 2 important operators that we will use in pointers concepts i.e."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dereferencing operator (*):"})," Used to declare a pointer variable and access the value stored in the address."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Address operator (&):"})," Used to return the address of a variable or to access the address of a variable to a pointer."]})]}),e.jsx("h4",{children:"Example 1:"}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    // taking an integer variable
    int m = 100;

    // pointer variable ptr that stores
    // the address of variable m
    int *ptr = &m;

    // printing the value of variable m
    printf("The Value of Variable m is: %d
", m);

    // printing the memory address of variable m
    // in hexadecimal format
    printf("The Memory Address of Variable m is: %p
", &m);

    // printing the value of ptr i.e.
    // printing the memory address of variable m
    // in hexadecimal format using pointer variable
    printf("The Memory Address of Variable m is using ptr: %p
", ptr);

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"The Value of Variable m is: 100"}),e.jsx("p",{children:"The Memory Address of Variable m is: 0x7ffee1eea79c"}),e.jsx("p",{children:"The Memory Address of Variable m is using ptr: 0x7ffee1eea79c"})]}),e.jsx("h4",{children:"Important Points:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"%p"})," format specifier is used to print the address stored in pointer variables."]}),e.jsxs("li",{children:["Printing a pointer with ",e.jsx("code",{children:"%d"})," format specifier may result in a warning or undefined behavior because the size of a pointer (usually 4 or 8 bytes) may not match that of an integer."]}),e.jsxs("li",{children:["The memory address format will always be in hexadecimal format (starting with ",e.jsx("code",{children:"0x"}),")."]}),e.jsxs("li",{children:["C does not use the term “reference” explicitly (unlike C++), “referencing” in C usually refers to obtaining the address of a variable using the address operator (",e.jsx("code",{children:"&"}),")."]}),e.jsxs("li",{children:["Pointers are essential for dynamic memory allocation, providing control over memory usage with functions like ",e.jsx("code",{children:"malloc"}),", ",e.jsx("code",{children:"calloc"}),", and ",e.jsx("code",{children:"free"}),"."]})]}),e.jsx("h4",{children:"Example 2:"}),e.jsx("pre",{children:`
#include <stdio.h>

int main() {
    // An integer variable
    int a = 10;

    // Create a pointer to integer (declaration)
    int *ptr;

    // Store the address of a inside pointer (initialization)
    ptr = &a;

    // Print the content of ptr
    printf("ptr = %p
", ptr);

    // Get the value pointed by ptr (dereferencing)
    printf("*ptr = %d", *ptr);

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"ptr = 0x7fffa0757dd4"}),e.jsx("p",{children:"*ptr = 10"})]}),e.jsx("h4",{children:"The above demonstration can be understood by dividing it into three steps:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Pointer Declaration:"})," To declare a pointer, we use the ",e.jsx("code",{children:"(*)"})," dereference operator before its name. In pointer declaration, we only declare the pointer but do not initialize it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pointer Initialization:"})," Pointer initialization is the process where we assign some initial value to the pointer variable. We use the ",e.jsx("code",{children:"(&)"})," addressof operator to get the memory address of a variable and then store it in the pointer variable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pointer Dereferencing:"})," Dereferencing a pointer is the process of accessing the value stored in the memory address specified in the pointer. We use the same ",e.jsx("code",{children:"(*)"})," dereferencing operator that we used in the pointer declaration."]})]}),e.jsx("h4",{children:"Example 3: C language stores provide a way to store the string as a pointer"}),e.jsx("pre",{children:`
#include <stdio.h>

int main() {
    // Storing string as pointer
    char *s = "Hi";

    printf("%s", s);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Hi"})]}),e.jsx("h3",{children:"Types of Pointers in C"}),e.jsx("p",{children:"Pointers in C can be classified into many different types depending on the data it is pointing to:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Integer Pointers:"})," Pointers that point to integer values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Array Pointer:"})," Pointers that point to arrays."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Structure Pointer:"})," Pointers that point to structures."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Function Pointers:"})," Pointers that point to functions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Double Pointers:"})," Pointers that store the memory address of another pointer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"NULL Pointer:"})," Pointers that do not point to any memory location."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Void Pointer:"})," Pointers that do not have any associated data type."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Wild Pointers:"})," Pointers that have not been initialized."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Constant Pointers:"})," Pointers that always point to the same memory address."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pointer to Constant:"})," Pointers that point to a constant value that cannot be modified."]})]}),e.jsx("h3",{children:"Size of Pointers in C"}),e.jsx("p",{children:"The size of pointers in C depends on the system architecture:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"8 bytes for a 64-bit System"}),e.jsx("li",{children:"4 bytes for a 32-bit System"})]}),e.jsx("h3",{children:"C Pointer Arithmetic"}),e.jsx("p",{children:"The Pointer Arithmetic refers to the legal or valid arithmetic operations that can be performed on a pointer. These operations include:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Increment/Decrement by 1"}),e.jsx("li",{children:"Addition/Subtraction of Integer"}),e.jsx("li",{children:"Subtracting Two Pointers of Same Type"}),e.jsx("li",{children:"Comparing/Assigning Two Pointers of Same Type"}),e.jsx("li",{children:"Comparing/Assigning with NULL"})]}),e.jsx("h3",{children:"C Pointers and Arrays"}),e.jsx("p",{children:"In C programming language, pointers and arrays are closely related. An array name acts like a pointer constant. The value of this pointer constant is the address of the first element."}),e.jsx("h3",{children:"Uses of Pointers in C"}),e.jsx("p",{children:"Pointers are widely used in C programming to perform various useful operations:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pass Arguments by Pointers"}),e.jsx("li",{children:"Accessing Array Elements"}),e.jsx("li",{children:"Return Multiple Values from Function"}),e.jsx("li",{children:"Dynamic Memory Allocation"}),e.jsx("li",{children:"Implementing Data Structures"}),e.jsx("li",{children:"In System-Level Programming where memory addresses are useful."}),e.jsx("li",{children:"To use in Control Tables."})]}),e.jsx("h3",{children:"Advantages of Pointers"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pointers are used for dynamic memory allocation and deallocation."}),e.jsx("li",{children:"An Array or a structure can be accessed efficiently with pointers."}),e.jsx("li",{children:"Pointers are useful for accessing memory locations."}),e.jsx("li",{children:"Pointers are used to form complex data structures such as linked lists, graphs, trees, etc."}),e.jsx("li",{children:"Pointers reduce the length of the program and its execution time as well."})]}),e.jsx("h3",{children:"Disadvantages of Pointers"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Memory corruption can occur if an incorrect value is provided to pointers."}),e.jsx("li",{children:"Pointers are a little bit complex to understand."}),e.jsx("li",{children:"Pointers are majorly responsible for memory leaks in C."}),e.jsx("li",{children:"Pointers are comparatively slower than variables in C."}),e.jsx("li",{children:"Uninitialized pointers might cause a segmentation fault."})]}),e.jsx("h3",{children:"Conclusion"}),e.jsx("p",{children:"In conclusion, pointers in C are very capable tools and provide C language with its distinguishing features, such as low-level memory access, referencing, etc. But as powerful as they are, they should be used with responsibility as they are one of the most vulnerable parts of the language."})]})]})}),Lj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Strings in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Strings"}),e.jsx("h3",{children:"Strings in C"}),e.jsxs("p",{children:["A String in C programming is a sequence of characters terminated with a null character ",e.jsx("code",{children:"'\\0'"}),". The C String is stored as an array of characters. The difference between a character array and a C string is that the string in C is terminated with a unique character ",e.jsx("code",{children:"'\\0'"}),"."]}),e.jsx("h3",{children:"C String Declaration Syntax"}),e.jsx("p",{children:"Declaring a string in C is as simple as declaring a one-dimensional array. Below is the basic syntax for declaring a string."}),e.jsx("pre",{children:`
char string_name[size];
`}),e.jsxs("p",{children:["In the above syntax, ",e.jsx("code",{children:"string_name"})," is any name given to the string variable, and ",e.jsx("code",{children:"size"})," is used to define the length of the string, i.e., the number of characters the string will store."]}),e.jsxs("p",{children:["There is an extra terminating character, the Null character (",e.jsx("code",{children:"'\\0'"}),"), used to indicate the termination of a string, which differentiates strings from normal character arrays."]}),e.jsx("h3",{children:"C String Initialization"}),e.jsxs("p",{children:["A string in C can be initialized in different ways. Below are the examples to declare a string with the name ",e.jsx("code",{children:"str"})," and initialize it with ",e.jsx("code",{children:'"GeeksforGeeks"'}),"."]}),e.jsx("h3",{children:"1. Assigning a String Literal without Size"}),e.jsx("pre",{children:`
char str[] = "StudyWell";
`}),e.jsx("h3",{children:"2. Assigning a String Literal with a Predefined Size"}),e.jsx("pre",{children:`
char str[50] = "Hello";
`}),e.jsx("h3",{children:"3. Assigning Character by Character with Size"}),e.jsx("pre",{children:`
char str[14] = { 'S','t','u','d','y','f','o','r','S','t','u','d','y',0'};
`}),e.jsx("h3",{children:"4. Assigning Character by Character without Size"}),e.jsx("pre",{children:`
char str[] = { 'S','t','u','d','y','f','o','r','S','t','u','d','y','\0'};
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," When a sequence of characters enclosed in double quotation marks is encountered by the compiler, a null character ",e.jsx("code",{children:"'\\0'"})," is appended at the end of the string by default."]}),e.jsx("h3",{children:"C String Example"}),e.jsx("pre",{children:`
#include <stdio.h>
#include <string.h>

int main()
{
    // declare and initialize string
    char str[] = "Hello";

    // print string
    printf("%s
", str);

    int length = 0;
    length = strlen(str);

    // displaying the length of string
    printf("Length of string str is %d", length);

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Hello"}),e.jsx("p",{children:"Length of string str is 5"})]}),e.jsxs("p",{children:["We can see in the above program that strings can be printed using normal ",e.jsx("code",{children:"printf"})," statements, just like we print any other variable. Unlike arrays, we do not need to print a string character by character."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The C language does not provide an inbuilt data type for strings, but it has an access specifier ",e.jsx("code",{children:'"%s"'})," which can be used to print and read strings directly."]}),e.jsx("h3",{children:"Read a String Input From the User"}),e.jsxs("p",{children:["The following example demonstrates how to take string input using the ",e.jsx("code",{children:"scanf()"})," function in C."]}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    // declaring string
    char str[50];

    // reading string
    scanf("%s", str);

    // print string
    printf("%s", str);

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Input:"}),e.jsx("p",{children:"StudyforStudy"}),e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"StudyforStudy"})]}),e.jsxs("p",{children:["You can see in the above program that the string can also be read using a single ",e.jsx("code",{children:"scanf"})," statement. Also, you might be thinking why we have not used the ",e.jsx("code",{children:"&"})," sign with the string name ",e.jsx("code",{children:"str"})," in the ",e.jsx("code",{children:"scanf"})," statement. To understand this, you will have to recall your knowledge of ",e.jsx("code",{children:"scanf"}),". We know that the ",e.jsx("code",{children:"&"})," sign is used to provide the address of the variable to the ",e.jsx("code",{children:"scanf()"})," function to store the value read in memory. As ",e.jsx("code",{children:"str[]"})," is a character array, using ",e.jsx("code",{children:"str"})," without braces ",e.jsx("code",{children:"'['"})," and ",e.jsx("code",{children:"']'"})," will give the base address of this string. That’s why we have not used ",e.jsx("code",{children:"&"})," in this case, as we are already providing the base address of the string to ",e.jsx("code",{children:"scanf"}),"."]}),e.jsx("h4",{children:"Example of String Input with Whitespace"}),e.jsx("pre",{children:`
#include <stdio.h>

int main()
{
    char str[20];

    // taking input string
    scanf("%s", str);

    // printing the read string
    printf("%s", str);

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Input:"}),e.jsx("p",{children:"Study for Study"}),e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Study"})]})]})]})}),Mj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Structures in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Structures"}),e.jsxs("p",{children:["In C, a structure is a user-defined data type that can be used to group items of possibly different types into a single type. The ",e.jsx("code",{children:"struct"})," keyword is used to define a structure. The items in the structure are called its members, and they can be of any valid data type."]}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:`
#include <stdio.h>

// Defining a structure
struct A {
    int x;
};

int main() {
    // Creating a structure variable
    struct A a;

    // Initializing member
    a.x = 11;

    printf("%d", a.x);
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"11"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," In this example, a structure ",e.jsx("code",{children:"A"})," is defined to hold an integer member ",e.jsx("code",{children:"x"}),". A variable ",e.jsx("code",{children:"a"})," of type ",e.jsx("code",{children:"struct A"})," is created, and its member ",e.jsx("code",{children:"x"})," is initialized to 11 by accessing it using the dot operator. The value of ",e.jsx("code",{children:"a.x"})," is then printed to the console."]}),e.jsx("h3",{children:"Syntax of Structure"}),e.jsx("p",{children:"There are two steps to creating a structure in C:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Structure Definition"}),e.jsx("li",{children:"Creating Structure Variables"})]}),e.jsx("h3",{children:"Structure Definition"}),e.jsxs("p",{children:["A structure is defined using the ",e.jsx("code",{children:"struct"})," keyword followed by the structure name and its members. It is also called a structure template or structure prototype, and no memory is allocated to the structure in the declaration."]}),e.jsx("pre",{children:`
struct structure_name {
    data_type1 member1;
    data_type2 member2;
    …
};
`}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"structure_name"}),": Name of the structure."]}),e.jsxs("li",{children:[e.jsx("code",{children:"member1, member2, …"}),": Name of the members."]}),e.jsxs("li",{children:[e.jsx("code",{children:"data_type1, data_type2, …"}),": Type of the members."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Do not forget the semicolon at the end."]}),e.jsx("h3",{children:"Creating Structure Variable"}),e.jsx("p",{children:"After structure definition, we have to create a variable of that structure to use it. It is similar to any other type of variable declaration:"}),e.jsx("pre",{children:`
struct structure_name var;
`}),e.jsx("p",{children:"We can also declare structure variables with the structure definition:"}),e.jsx("pre",{children:`
struct structure_name {
    …
} var1, var2…;
`}),e.jsx("h3",{children:"Basic Operations of Structure"}),e.jsx("p",{children:"Following are the basic operations commonly used on structures:"}),e.jsx("h3",{children:"1. Access Structure Members"}),e.jsxs("p",{children:["To access or modify members of a structure, we use the ",e.jsx("code",{children:"(.)"})," dot operator. This is applicable when we are using structure variables directly."]}),e.jsx("pre",{children:`
structure_name.member1;
structure_name.member2;
`}),e.jsx("p",{children:"In the case where we have a pointer to the structure, we can also use the arrow operator to access the members:"}),e.jsx("pre",{children:`
structure_ptr→member1;
structure_ptr→member2;
`}),e.jsx("h3",{children:"2. Initialize Structure Members"}),e.jsx("p",{children:"Structure members cannot be initialized with the declaration. For example, the following C program fails in compilation:"}),e.jsx("pre",{children:`
struct structure_name {
    data_type1 member1 = value1;  // COMPILER ERROR: cannot initialize members here
    data_type2 member2 = value2;  // COMPILER ERROR: cannot initialize members here
    …
};
`}),e.jsx("p",{children:"The reason for the above error is simple. When a datatype is declared, no memory is allocated for it. Memory is allocated only when variables are created. So there is no space to store the value assigned."}),e.jsx("p",{children:"We can initialize structure members in 4 ways:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default Initialization:"})," By default, structure members are not automatically initialized to 0 or NULL. Uninitialized structure members will contain garbage values. However, when a structure variable is declared with an initializer, all members not explicitly initialized are zero-initialized."]}),e.jsx("li",{children:e.jsx("strong",{children:"Initialization using Assignment Operator:"})})]}),e.jsx("pre",{children:`
struct structure_name str;
str.member1 = value1;
…
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," We cannot initialize arrays or strings using the assignment operator after variable declaration."]}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("strong",{children:"Initialization using Initializer List:"})})}),e.jsx("pre",{children:`
struct structure_name str = {value1, value2, value3 …};
`}),e.jsx("p",{children:"In this type of initialization, the values are assigned in sequential order as they are declared in the structure template."}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("strong",{children:"Initialization using Designated Initializer List:"})," Designated Initialization allows structure members to be initialized in any order. This feature has been added in the C99 standard."]})}),e.jsx("pre",{children:`
struct structure_name str = { .member1 = value1, .member2 = value2, .member3 = value3 };
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Designated Initialization is only supported in C, not in C++."]}),e.jsx("h4",{children:"Example of Structure Initialization"}),e.jsx("pre",{children:`
#include <stdio.h>

// Defining a structure to represent a student
struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    // Declaring and initializing a structure variable
    struct Student s1 = {"Rahul", 20, 18.5};

    // Designated Initializing another structure
    struct Student s2 = {.age = 18, .name = "Vikas", .grade = 22};

    // Accessing structure members
    printf("%s	%d	%.2f
", s1.name, s1.age, s1.grade);
    printf("%s	%d	%.2f
", s2.name, s2.age, s2.grade);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Rahul    20    18.50"}),e.jsx("p",{children:"Vikas    18    22.00"})]}),e.jsx("h3",{children:"3. Copy Structure"}),e.jsxs("p",{children:["Copying a structure is as simple as copying any other variable. For example, ",e.jsx("code",{children:"s1"})," is copied into ",e.jsx("code",{children:"s2"})," using the assignment operator:"]}),e.jsx("pre",{children:`
s2 = s1;
`}),e.jsxs("p",{children:["However, this method only creates a shallow copy of ",e.jsx("code",{children:"s1"}),". If the structure ",e.jsx("code",{children:"s1"})," has some dynamic resources allocated by ",e.jsx("code",{children:"malloc"}),", and it contains a pointer to that resource, then only the pointer will be copied to ",e.jsx("code",{children:"s2"}),". If the dynamic resource is also needed, it has to be copied manually (deep copy)."]}),e.jsx("h4",{children:"Example of Copying Structure"}),e.jsx("pre",{children:`
#include <stdio.h>
#include <stdlib.h>

struct Student {
    int id;
    char grade;
};

int main() {
    struct Student s1 = {1, 'A'};

    // Create a copy of student s1
    struct Student s1c = s1;

    printf("Student 1 ID: %d
", s1c.id);
    printf("Student 1 Grade: %c", s1c.grade);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Student 1 ID: 1"}),e.jsx("p",{children:"Student 1 Grade: A"})]}),e.jsx("h3",{children:"4. Passing Structure to Functions"}),e.jsx("p",{children:"Structures can be passed to a function in the same way as normal variables. However, it is recommended to pass them as pointers to avoid copying a large amount of data."}),e.jsx("h4",{children:"Example of Passing Structure to Function"}),e.jsx("pre",{children:`
#include <stdio.h>

// Structure definition
struct A {
    int x;
};

// Function to increment values
void increment(struct A a, struct A* b) {
    a.x++;
    b->x++;
}

int main() {
    struct A a = {10};
    struct A b = {10};

    // Passing a by value and b by pointer
    increment(a, &b);

    printf("a.x: %d 	b.x: %d", a.x, b.x);
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"a.x: 10     b.x: 11"})]}),e.jsx("h3",{children:"5. typedef for Structures"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"typedef"})," keyword is used to define an alias for an already existing datatype. In structures, we have to use the ",e.jsx("code",{children:"struct"})," keyword along with the structure name to define variables. Sometimes, this increases the length and complexity of the code. We can use ",e.jsx("code",{children:"typedef"})," to define a shorter name for the structure."]}),e.jsx("h4",{children:"Example of typedef with Structures"}),e.jsx("pre",{children:`
#include <stdio.h>

// Defining structure
typedef struct {
    int a;
} str1;

// Another way of using typedef with structures
typedef struct {
    int x;
} str2;

int main() {
    // Creating structure variables using new names
    str1 var1 = {20};
    str2 var2 = {314};

    printf("var1.a = %d
", var1.a);
    printf("var2.x = %d
", var2.x);
    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"var1.a = 20"}),e.jsx("p",{children:"var2.x = 314"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," In this code, ",e.jsx("code",{children:"str1"})," and ",e.jsx("code",{children:"str2"})," are defined as aliases for the unnamed structures, allowing the creation of structure variables (",e.jsx("code",{children:"var1"})," and ",e.jsx("code",{children:"var2"}),") using these new names. This simplifies the syntax when declaring variables of the structure."]}),e.jsx("h3",{children:"Size of Structures"}),e.jsxs("p",{children:["Technically, the size of the structure in C should be the sum of the sizes of its members. However, this may not be true in most cases due to ",e.jsx("strong",{children:"Structure Padding"}),". Structure padding is the concept of adding multiple empty bytes in the structure to naturally align the data members in memory. It is done to minimize the CPU read cycles to retrieve different data members in the structure."]}),e.jsxs("p",{children:["There are some situations where we need to pack the structure tightly by removing the empty bytes. In such cases, we use ",e.jsx("strong",{children:"Structure Packing"}),". C language provides two ways for structure packing:"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"#pragma pack(1)"})]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"__attribute((packed))__"})]})]}),e.jsx("p",{children:"To know more about structure padding and packing, refer to this article – Structure Member Alignment, Padding, and Data Packing."}),e.jsx("h3",{children:"Nested Structures"}),e.jsx("p",{children:"In C, a nested structure refers to a structure that contains another structure as one of its members. This allows you to create more complex data types by grouping multiple structures together, which is useful when dealing with related data that needs to be grouped within a larger structure."}),e.jsx("p",{children:"There are two ways to nest one structure into another:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Embedded Structure Nesting:"})," The structure being nested is also declared inside the parent structure."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Separate Structure Nesting:"})," Two structures are declared separately, and then the member structure is nested inside the parent structure."]})]}),e.jsx("h4",{children:"Accessing Nested Members"}),e.jsxs("p",{children:["We can access nested members by using the same ",e.jsx("code",{children:"(.)"})," dot operator twice:"]}),e.jsx("pre",{children:`
str_parent.str_child.member;
`}),e.jsx("h4",{children:"Example of Nested Structure"}),e.jsx("pre",{children:`
#include <stdio.h>

// Child structure declaration
struct child {
    int x;
    char c;
};

// Parent structure declaration
struct parent {
    int a;
    struct child b;
};

int main() {
    struct parent p = {25, 195, 'A'};

    // Accessing and printing nested members
    printf("p.a = %d
", p.a);
    printf("p.b.x = %d
", p.b.x);
    printf("p.b.c = %c", p.b.c);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"p.a = 25"}),e.jsx("p",{children:"p.b.x = 195"}),e.jsx("p",{children:"p.b.c = A"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," In this code, the structure ",e.jsx("code",{children:"parent"})," contains another structure ",e.jsx("code",{children:"child"})," as a member. The parent structure is then initialized with values, including the values for the child structure’s members."]}),e.jsx("h3",{children:"Structure Pointer"}),e.jsxs("p",{children:["A pointer to a structure allows us to access structure members using the ",e.jsx("code",{children:"(→)"})," arrow operator instead of the dot operator."]}),e.jsx("h4",{children:"Example of Structure Pointer"}),e.jsx("pre",{children:`
#include <stdio.h>

// Structure declaration
struct Point {
    int x, y;
};

int main() {
    struct Point p = {1, 2};

    // ptr is a pointer to structure p
    struct Point* ptr = &p;

    // Accessing structure members using structure pointer
    printf("%d %d", ptr→x, ptr→y);

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"1 2"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," In this example, ",e.jsx("code",{children:"ptr"})," is a pointer to the structure ",e.jsx("code",{children:"Point"}),". It holds the address of the structure variable ",e.jsx("code",{children:"p"}),". The structure members ",e.jsx("code",{children:"x"})," and ",e.jsx("code",{children:"y"})," are accessed using the ",e.jsx("code",{children:"→"})," operator, which is used to dereference the pointer and access the members of the structure."]}),e.jsx("h3",{children:"Self-Referential Structures"}),e.jsx("p",{children:"Self-referential structures are those structures that contain references to the same type as themselves, i.e., they contain a member of the type pointer pointing to the same structure type."}),e.jsx("h4",{children:"Example of Self-Referential Structure"}),e.jsx("pre",{children:`
struct str {
    int mem1;

    // Reference to the same type
    struct str* next;
};
`}),e.jsx("p",{children:"Such kinds of structures are used in different data structures such as to define the nodes of linked lists, trees, etc."}),e.jsx("h3",{children:"Bit Fields"}),e.jsx("p",{children:"Bit Fields are used to specify the length of the structure members in bits. When we know the maximum length of the member, we can use bit fields to specify the size and reduce memory consumption."}),e.jsx("h4",{children:"Syntax of Bit Fields"}),e.jsx("pre",{children:`
struct structure_name {
    data_type member_name: width_of_bit-field;
};
`}),e.jsx("h3",{children:"Uses of Structure in C"}),e.jsx("p",{children:"C structures are used for the following:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Defining Custom Data Types:"})," Structures allow you to create complex data types such as dates, time, complex numbers, etc., which are not present in the language."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data Organization:"})," Structures help organize large amounts of data into meaningful groups, making it easier to manage and access."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Creating Data Structures:"})," Structures are used to create data structures such as linked lists, trees, graphs, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning Multiple Values from Functions:"})," Structures can be used to return multiple values from a function by grouping them into a single structure."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Database Records:"})," Structures are often used to represent database records, where each field corresponds to a column in the database."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hardware Access:"})," Structures are used to access hardware registers, where each bit or group of bits corresponds to a specific hardware function."]})]}),e.jsx("h3",{children:"Conclusion"}),e.jsx("p",{children:"Structures in C are a powerful feature that allows you to group related data into a single unit. They are widely used in programming for organizing data, creating custom data types, and implementing complex data structures. By understanding how to define, initialize, and manipulate structures, you can write more efficient and organized code."})]})]})}),_j=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Union in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Union"}),e.jsx("p",{children:"In C, union is a user-defined data type that can contain elements of the different data types just like structure. But unlike structures, all the members in the C union are stored in the same memory location. Due to this, only one member can store data at the given point in time."}),e.jsx("p",{children:"Let’s take a look at an example:"}),e.jsx("pre",{children:`
// Union definition
union A {
    int i;
    float f;
    char s[20];
};

int main() {
    union A a;

    // Storing an integer
    a.i = 10;
    printf("data.i = %d\\n", a.i);

    // Storing a float
    a.f = 220.5;
    printf("data.f = %.2f\\n", a.f);

    // Storing a string
    strcpy(a.s, "GfG");
    printf("data.s = %s\\n", a.s);

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["data.i = 10",e.jsx("br",{}),"data.f = 220.50",e.jsx("br",{}),"data.s = GfG"]})]}),e.jsx("h3",{children:"Syntax of Union in C"}),e.jsx("p",{children:"The syntax of union can be defined into two parts:"}),e.jsx("h4",{children:"C Union Declaration"}),e.jsx("p",{children:"In this part, we only declare the template of the union, i.e., we only declare the members’ names and data types along with the name of the union. No memory is allocated to the union in the declaration."}),e.jsx("pre",{children:`
union name {
    type1 member1;
    type2 member2;
    .
    .
};
`}),e.jsx("h4",{children:"Create a Union Variable"}),e.jsx("p",{children:"We need to define a variable of the union type to start using union members. There are two methods using which we can define a union variable:"}),e.jsx("h4",{children:"Creating Union Variable with Declaration"}),e.jsx("pre",{children:`
union name{
    type member1;
    type member2;
    …
} var1, var2, …;
`}),e.jsx("h4",{children:"Creating Union Variable after Declaration"}),e.jsx("pre",{children:`
union name var1, var2, var3…;
`}),e.jsx("p",{children:"where name is the name of an already declared union."}),e.jsx("h3",{children:"Access Union Members"}),e.jsx("p",{children:"We can access the members of a union by using the ( . ) dot operator just like structures."}),e.jsx("pre",{children:`
var1.member1;
`}),e.jsx("p",{children:"where var1 is the union variable and member1 is the member of the union."}),e.jsx("h3",{children:"Initialize Union"}),e.jsx("p",{children:"The initialization of a union is the initialization of its members by simply assigning the value to it."}),e.jsx("pre",{children:`
var1.member1 = val;
`}),e.jsx("p",{children:"One important thing to note here is that only one member can contain some value at a given instance of time."}),e.jsx("h3",{children:"Size of Union"}),e.jsx("p",{children:"The size of the union will always be equal to the size of the largest member of the union. All the less-sized elements can store the data in the same space without any overflow. Let’s take a look at the code example:"}),e.jsx("pre",{children:`
#include <stdio.h>

// Declaring multiple unions
union A{
    int x;
    char y;
};

union B{
    int arr[10];
    char y;
};

int main() {
    // Finding size using sizeof() operator
    printf("Sizeof A: %ld\\n", sizeof(union A));
    printf("Sizeof B: %ld\\n", sizeof(union B));

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Sizeof A: 4",e.jsx("br",{}),"Sizeof B: 40"]})]}),e.jsx("h3",{children:"Nested Union"}),e.jsx("p",{children:"In C, we can define a union inside another structure or union. This is called nested union and is commonly used when you want to efficiently organize and access related data while sharing memory among its members."}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:`
struct/union … {
    mem1…
    union name {
        type1 member1
        type2 member2
        .
        .
    }nested_member_name;
};
`}),e.jsx("p",{children:"As we can see, we have to create a variable of the nested union for it to be usable. Due to this, we can also skip name of the union and only name a variable of it. This type of unions are called Anonymous Unions."}),e.jsx("h4",{children:"Access Nested Union Member"}),e.jsx("p",{children:"The union members can be accessed using dot operator, but we have to use it multiple times:"}),e.jsx("pre",{children:`
outer_union . inner_union . member
`}),e.jsx("p",{children:"Let’s take a look at a nested union example:"}),e.jsx("pre",{children:`
#include <stdio.h>

// Define a structure containing a nested union
struct Employee {
    char name[50];
    int id;

    union {
        // Hourly rate for part-time employees
        float hourlyRate;
        // Monthly salary for full-time employees
        float salary;
    } payment;
};

int main() {
    struct Employee e1;

    // Assign details for a part-time employee
    snprintf(e1.name, sizeof(e1.name), "Rahul");
    e1.id = 101;
    e1.payment.hourlyRate = 300;

    printf("Employee 1: %s (ID: %d)\\n", e1.name, e1.id);
    printf("Hourly Rate: Rs %.2f", e1.payment.hourlyRate);

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Employee 1: Rahul (ID: 101)",e.jsx("br",{}),"Hourly Rate: Rs 300.00"]})]}),e.jsx("h3",{children:"Structure vs Union"}),e.jsx("p",{children:"The following table lists the key difference between the structure and union in C:"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Structure"}),e.jsx("th",{children:"Union"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The size of the structure is equal to or greater than the total size of all of its members."}),e.jsx("td",{children:"The size of the union is the size of its largest member."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The structure can contain data in multiple members at the same time."}),e.jsx("td",{children:"Only one member can contain data at the same time."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"It is declared using the struct keyword."}),e.jsx("td",{children:"It is declared using the union keyword."})]})]})]})]})}),Uj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Enumeration (or enum) in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h3",{children:"Enumeration (or enum)"}),e.jsx("p",{children:"Enumeration (or enum) is a user defined data type in C. It is mainly used to assign names to integral constants, the names make a program easy to read and maintain."}),e.jsx("p",{children:"The keyword ‘enum’ is used to declare new enumeration types in C and C++. Enums in C allow you to assign names to integral constants, making code more readable."}),e.jsx("p",{children:"Following is an example of enum declaration."}),e.jsx("pre",{children:`
// The name of enumeration is "flag" and the constant
// are the values of the flag. By default, the values
// of the constants are as follows:
// constant1 = 0, constant2 = 1, constant3 = 2 and 
// so on.
enum flag{constant1, constant2, constant3, ....... };
`}),e.jsx("p",{children:"Variables of type enum can also be defined. They can be defined in two ways:"}),e.jsx("pre",{children:`
// In both of the below cases, "day" is 
// defined as the variable of type week. 

enum week{Mon, Tue, Wed};
enum week day;

// Or

enum week{Mon, Tue, Wed}day;
`}),e.jsx("pre",{children:`
// An example program to demonstrate working// of enum in C
#include<stdio.h>
enum week{Mon, Tue, Wed, Thur, Fri, Sat, Sun};
int main(){
    enum week day;
    day = Wed;
    printf("%d",day);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"2"})]}),e.jsx("p",{children:"In the above example, we declared “day” as the variable and the value of “Wed” is allocated to day, which is 2. So as a result, 2 is printed."}),e.jsx("p",{children:"Another example of enumeration is:"}),e.jsx("pre",{children:`
// Another example program to demonstrate working// of enum in C
#include<stdio.h>
enum year{Jan, Feb, Mar, Apr, May, Jun, Jul,
          Aug, Sep, Oct, Nov, Dec};
int main(){
   int i;
   for (i=Jan; i<=Dec; i++)
            printf("%d ", i);
         return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"0 1 2 3 4 5 6 7 8 9 10 11"})]}),e.jsx("p",{children:"In this example, the for loop will run from i = 0 to i = 11, as initially the value of i is Jan which is 0 and the value of Dec is 11."}),e.jsx("h3",{children:"Interesting facts about initialization of enum."}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("p",{children:"Two enum names can have same value. For example, in the following C program both ‘Failed’ and ‘Freezed’ have same value 0."}),e.jsx("pre",{children:`
#include <stdio.h>
enum State {Working = 1, Failed = 0, Freezed = 0};
int main(){
   printf("%d, %d, %d", Working, Failed, Freezed);
   return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1, 0, 0"})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"If we do not explicitly assign values to enum names, the compiler by default assigns values starting from 0. For example, in the following C program, sunday gets value 0, monday gets 1, and so on."}),e.jsx("pre",{children:`
#include <stdio.h>
enum day {sunday, monday, tuesday, wednesday, thursday, friday, saturday};
int main(){
    enum day d = thursday;
    printf("The day number stored in d is %d", d);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"The day number stored in d is 4"})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"We can assign values to some name in any order. All unassigned names get value as value of previous name plus one."}),e.jsx("pre",{children:`
#include <stdio.h>
enum day {sunday = 1, monday, tuesday = 5,
          wednesday, thursday = 10, friday, saturday};
int main(){
    printf("%d %d %d %d %d %d %d", sunday, monday, tuesday,
            wednesday, thursday, friday, saturday);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1 2 5 6 10 11 12"})]})]}),e.jsx("li",{children:e.jsx("p",{children:"The value assigned to enum names must be some integral constant, i.e., the value must be in range from minimum possible integer value to maximum possible integer value."})}),e.jsxs("li",{children:[e.jsx("p",{children:"All enum constants must be unique in their scope. For example, the following program fails in compilation."}),e.jsx("pre",{children:`
enum state  {working, failed};
enum result {failed, passed};
int main()  { return 0; }
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Compile Error: 'failed' has a previous declaration as 'state failed'"})]})]})]}),e.jsx("h3",{children:"Exercise:"}),e.jsx("h4",{children:"Program 1:"}),e.jsx("pre",{children:`
#include <stdio.h>
enum day {sunday = 1, tuesday, wednesday, thursday, friday, saturday};
int main(){
    enum day d = thursday;
    printf("The day number stored in d is %d", d);
    return 0;
}
`}),e.jsx("h4",{children:"Program 2:"}),e.jsx("pre",{children:`
#include <stdio.h>
enum State {WORKING = 0, FAILED, FREEZED};
enum State currState = 2;
enum State FindState() {
    return currState;
}
int main() {
   (FindState() == WORKING)? printf("WORKING"): printf("NOT WORKING");
   return 0;
}
`}),e.jsx("h3",{children:"Enum vs Macro"}),e.jsx("p",{children:"We can also use macros to define names constants. For example we can define ‘Working’ and ‘Failed’ using following macro."}),e.jsx("pre",{children:`
#define Working 0
#define Failed 1
#define Freezed 2
`}),e.jsx("p",{children:"There are multiple advantages of using enum over macro when many related named constants have integral values."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Enums follow scope rules."}),e.jsx("li",{children:"Enum variables are automatically assigned values."})]}),e.jsx("pre",{children:`
 enum state  {Working, Failed, Freezed};
`})]})]})}),Hj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Memory Layout in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Memory Layout"}),e.jsx("p",{children:"The memory layout of a program refers to how the program’s data is stored in the computer memory during its execution. Understanding this layout helps developers manage memory more efficiently and avoid issues such as segmentation faults and memory leaks."}),e.jsx("p",{children:"A C program’s memory is organized into specific regions (segments) as shown in the below image, each serving distinct purposes for program execution."}),e.jsx("h3",{children:"Different Segments in C Program’s Memory"}),e.jsx("h4",{children:"1. Text Segment"}),e.jsxs("p",{children:["The ",e.jsx("b",{children:"text segment"})," (also known as ",e.jsx("b",{children:"code segment"}),") is where the executable code of the program is stored. It contains the compiled machine code of the program’s functions and instructions. This segment is usually read-only and stored in the lower parts of the memory to prevent accidental modification of the code while the program is running."]}),e.jsx("p",{children:"The size of the text segment is determined by the number of instructions and the complexity of the program."}),e.jsx("h4",{children:"2. Data Segment"}),e.jsxs("p",{children:["The ",e.jsx("b",{children:"data segment"})," stores global and static variables that are created by the programmer. It is present just above the code segment of the program. It can be further divided into two parts:"]}),e.jsx("h4",{children:"A. Initialized Data Segment"}),e.jsx("p",{children:"As the name suggests, it is the part of the data segment that contains global and static variables that have been initialized by the programmer. For example,"}),e.jsx("pre",{children:`
int a = 10;
static int b = 20;
`}),e.jsx("p",{children:"The above variables a and b will be stored in the Initialized Data Segment."}),e.jsx("h4",{children:"B. Uninitialized Data Segment (BSS)"}),e.jsx("p",{children:"Uninitialized data segment often called the “bss” segment, named after an ancient assembler operator, that stood for “Block Started by Symbol” contains global and static variables that are not initialized by the programmer. These variables are automatically initialized to zero at runtime by the operating system. For example, the below shown variables will be stored in this segment:"}),e.jsx("pre",{children:`
int a;
static int b;
`}),e.jsx("h4",{children:"3. Heap Segment"}),e.jsx("p",{children:"Heap segment is where dynamic memory allocation usually takes place. The heap area begins at the end of the BSS segment and grows towards the larger addresses from there. It is managed by functions such as malloc(), realloc(), and free() which in turn may use the brk and sbrk system calls to adjust its size."}),e.jsxs("p",{children:["The heap segment is shared by all shared libraries and dynamically loaded modules in a process. For example, the variable pointed by ",e.jsx("code",{children:"ptr"})," will be stored in the heap segment:"]}),e.jsx("pre",{children:`
int *ptr = (int*) malloc(sizeof(int) * 10);
`}),e.jsx("h4",{children:"4. Stack Segment"}),e.jsxs("p",{children:["The ",e.jsx("b",{children:"stack"})," is a region of memory used for ",e.jsx("b",{children:"local variables"})," and function call management. Each time a function is called, a ",e.jsx("b",{children:"stack frame"})," is created to store local variables, function parameters, and return addresses. This stack frame is stored in this segment."]}),e.jsx("p",{children:"The stack segment is generally located in the higher addresses of the memory and grows opposite to heap. They adjoin each other so when stack and heap pointer meet, free memory of the program is said to be exhausted."}),e.jsx("p",{children:"Example of data stored in stack segment:"}),e.jsx("pre",{children:`
void function() {
    int local_var = 10;  // Stored in the stack
}
`}),e.jsx("h3",{children:"Practical Examples"}),e.jsx("p",{children:"The size(1) command in MinGW reports the sizes (in bytes) of the text, data, and bss segments of a binary file."}),e.jsx("h3",{children:"1. Check the following simple C program"}),e.jsx("pre",{children:`
#include <stdio.h>
int main() {
    return 0;
}
`}),e.jsx("pre",{children:`
gcc memory-layout.c -o memory-layout
size memory-layout
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["text data bss dec hex filename",e.jsx("br",{}),"960 248 8 1216 4c0 memory-layout"]})]}),e.jsx("h3",{children:"2. Let us add one global variable in the program, now check the size of bss"}),e.jsx("pre",{children:`
#include <stdio.h>
// Uninitialized variable stored in bss
int global;
int main() {
    return 0;
}
`}),e.jsx("pre",{children:`
gcc memory-layout.c -o memory-layout
size memory-layout
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["text data bss dec hex filename",e.jsx("br",{}),"960 248 12 1220 4c4 memory-layout"]})]}),e.jsx("h3",{children:"3. Let us add one static variable which is also stored in bss."}),e.jsx("pre",{children:`
#include <stdio.h>
// Uninitialized variable stored in bss
int global;
int main() {
    // Uninitialized static variable stored in bss
    static int i;
    return 0;
}
`}),e.jsx("pre",{children:`
gcc memory-layout.c -o memory-layout
size memory-layout
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["text data bss dec hex filename",e.jsx("br",{}),"960 248 16 1224 4c8 memory-layout"]})]}),e.jsx("h3",{children:"4. Let us initialize the static variable which will then be stored in the Data Segment (DS)"}),e.jsx("pre",{children:`
#include <stdio.h>
// Uninitialized variable stored in bss
int global;
int main(void) {
    // Initialized static variable stored in DS
    static int i = 100;
    return 0;
}
`}),e.jsx("pre",{children:`
gcc memory-layout.c -o memory-layout
size memory-layout
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["text data bss dec hex filename",e.jsx("br",{}),"960 252 12 1224 4c8 memory-layout"]})]}),e.jsx("h3",{children:"5. Let us initialize the global variable which will then be stored in the Data Segment (DS)"}),e.jsx("pre",{children:`
#include <stdio.h>
// initialized global variable stored in DS
int global = 10;
int main() {
    // Initialized static variable stored in DS
    static int i = 100;
    return 0;
}
`}),e.jsx("pre",{children:`
gcc memory-layout.c -o memory-layout
size memory-layout
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["text data bss dec hex filename",e.jsx("br",{}),"960 256 8 1224 4c8 memory-layout"]})]}),e.jsx("h3",{children:"Example to Verify the Memory Layout"}),e.jsx("pre",{children:`
#include <stdio.h>
#include <stdlib.h>
// Global variable
int gvar = 66;
// Constant global variable
const int cgvar = 1010;
// uninitialized global variable
int ugvar;
void foo() {
    // Local variable
    int lvar = 1;
    printf("Address of lvar:\\t%p", (void*)&lvar);
}
int main() {
    // Heap variable
    int *hvar = (int*)malloc(sizeof(int));

    // Checking and comparing address of different
    // elements of program that should be stored in
    // different segements of the memory
    printf("Address of foo:\\t\\t%p\\n", (void*)&foo);
    printf("Address of cgvar:\\t%p\\n", (void*)&cgvar);
    printf("Address of gvar:\\t%p\\n", (void*)&gvar);
    printf("Address of ugvar:\\t%p\\n", (void*)&ugvar);
    printf("Address of hvar:\\t%p\\n", (void*)hvar);
    foo();
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Address of foo: 0x60d723996189",e.jsx("br",{}),"Address of cgvar: 0x60d723997004",e.jsx("br",{}),"Address of gvar: 0x60d723999010",e.jsx("br",{}),"Address of ugvar: 0x60d723999018",e.jsx("br",{}),"Address of hvar: 0x60d73b9072a0",e.jsx("br",{}),"Address of lvar: 0x"]})]})]})]})}),qj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Memory Allocation in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Dynamic Memory Allocation in C using malloc(), calloc(), free() and realloc()"}),e.jsx("p",{children:"In C, a variable defined in a function is stored in the stack memory. The requirement of this memory is that it needs to know the size of the data to memory at compile time (before the program runs). Also, once defined, we can neither change the size nor completely delete the memory."}),e.jsxs("p",{children:["To resolve this, C provides a feature called ",e.jsx("b",{children:"Dynamic Memory Allocation"}),". It allows you to allocate memory at runtime, giving your program the ability to handle data of varying sizes. Dynamic resources are stored in the ",e.jsx("b",{children:"heap"})," memory instead of the stack."]}),e.jsx("p",{children:"This feature is useful in a variety of situations. For example, changing the size of an array according to our requirement."}),e.jsx("h3",{children:"Need of Dynamic Memory Allocation"}),e.jsx("p",{children:"As we know, the size of an array in C is fixed and should be known at compile time. There can be two problems:"}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsx("p",{children:"The size of the array is not sufficient to store all the elements. To resolve this, one might set the size to store the maximum theoretically possible elements. This creates another problem."})}),e.jsx("li",{children:e.jsx("p",{children:"This size of the array is much more than what is required to store the elements. This leads to the wastage of memory."})})]}),e.jsx("p",{children:"This is where the dynamic memory allocation comes in. The size of the array can be increased if more elements are to be inserted and decreased of less elements are inserted. Moreover, there is no need to estimate the max possible size. The size can be decided at runtime according to the requirement."}),e.jsx("h3",{children:"Dynamic Memory Allocation in C"}),e.jsxs("p",{children:["Dynamic memory allocation is possible in C by using 4 library functions provided by ",e.jsx("code",{children:"<stdlib.h>"})," library:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"malloc()"}),e.jsx("li",{children:"calloc()"}),e.jsx("li",{children:"free()"}),e.jsx("li",{children:"realloc()"})]}),e.jsx("h3",{children:"malloc()"}),e.jsxs("p",{children:["The ",e.jsx("b",{children:"malloc()"})," (stands for ",e.jsx("b",{children:"memory"})," allocation) function is used to allocate a single block of contiguous memory on the heap at runtime. The memory allocated by malloc() is uninitialized, meaning it contains garbage values."]}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:`
malloc(size);
`}),e.jsxs("p",{children:["where ",e.jsx("code",{children:"size"})," is the number of bytes to allocate."]}),e.jsx("p",{children:"This function returns a void pointer to the allocated memory that needs to be converted to the pointer of required type to be usable. If allocation fails, it returns NULL pointer."}),e.jsx("h4",{children:"Example"}),e.jsx("p",{children:"Assume that we want to create an array to store 5 integers. Since the size of int is 4 bytes, we need 5 * 4 bytes = 20 bytes of memory. This can be done as shown:"}),e.jsx("pre",{children:`
int *ptr = (int *)malloc(20);
`}),e.jsxs("p",{children:["In the above malloc call, we hardcoded the number of bytes we need to store 5 integers. But we know that the size of the integer in C depends on the architecture. So, it is better to use the ",e.jsx("code",{children:"sizeof"})," operator to find the size of type you want to store."]}),e.jsx("pre",{children:`
int *ptr = (int *)malloc(sizeof(int) * 5);
`}),e.jsx("p",{children:"Moreover, if there is no memory available, the malloc will fail and return NULL. So, it is recommended to check for failure by comparing the ptr to NULL."}),e.jsx("pre",{children:`
int *ptr = (int *)malloc(sizeof(int) * 5);
// Checking if failed or pass
if (ptr == NULL) {
    printf("Allocation Failed");
    exit(0);
}
`}),e.jsx("h3",{children:"calloc()"}),e.jsxs("p",{children:["The ",e.jsx("b",{children:"calloc()"})," (stands for ",e.jsx("b",{children:"contiguous"})," allocation) function is similar to malloc(), but it initializes the allocated memory to zero. It is used when you need memory with default zero values."]}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:`
calloc(n, size);
`}),e.jsxs("p",{children:["where ",e.jsx("code",{children:"n"})," is the number of elements and ",e.jsx("code",{children:"size"})," is the size of each element in bytes."]}),e.jsx("p",{children:"This function also returns a void pointer to the allocated memory that is converted to the pointer of required type to be usable. If allocation fails, it returns NULL pointer."}),e.jsx("h4",{children:"Example"}),e.jsx("p",{children:"We can take the example of malloc() and try to do it with calloc() function."}),e.jsx("pre",{children:`
int *ptr = (int *)calloc(sizeof(int), 5);
// Checking if failed or pass
if (ptr == NULL) {
    printf("Allocation Failed");
    exit(0);
}
`}),e.jsx("h3",{children:"free()"}),e.jsxs("p",{children:["The memory allocated using functions malloc() and calloc() is not de-allocated on their own. The ",e.jsx("b",{children:"free()"})," function is used to release dynamically allocated memory back to the operating system. It is essential to free memory that is no longer needed to avoid memory leaks."]}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:`
free(ptr);
`}),e.jsxs("p",{children:["where ",e.jsx("code",{children:"ptr"})," is the pointer to the allocated memory."]}),e.jsx("p",{children:"After freeing a memory block, the pointer becomes invalid, and it is no longer pointing to a valid memory location."}),e.jsx("h4",{children:"Example"}),e.jsx("pre",{children:`
int *ptr = (int *)calloc(sizeof(int), 5);
// Do some operations.....
for (int i = 0; i < 5; i++)
    printf("%d ", ptr[i]);
// Free the memory after completing
// operations
free(ptr);
`}),e.jsx("p",{children:"After calling free(), it is a good practice to set the pointer to NULL to avoid using a “dangling pointer,” which points to a memory location that has been deallocated."}),e.jsx("pre",{children:`
ptr = NULL;
`}),e.jsx("h3",{children:"realloc()"}),e.jsx("p",{children:"realloc() function is used to resize a previously allocated memory block. It allows you to change the size of an existing memory allocation without needing to free the old memory and allocate a new block."}),e.jsx("h4",{children:"Syntax"}),e.jsx("pre",{children:`
realloc(ptr, new_size);
`}),e.jsx("p",{children:"where, ptr is the pointer to the previously allocated memory block and new_size is the reallocated size that the memory block should have in bytes."}),e.jsx("p",{children:"This function returns a pointer to the newly allocated memory, or NULL if the reallocation fails. If it fails, the original memory block remains unchanged."}),e.jsx("h4",{children:"Example"}),e.jsx("p",{children:"Suppose we initially allocate memory for 5 integers but later need to expand the array to hold 10 integers. We can use realloc() to resize the memory block:"}),e.jsx("pre",{children:`
int *ptr = (int *)malloc(5 * sizeof(int));
// Resize the memory block to hold 10 integers
ptr = (int *)realloc(ptr, 10 * sizeof(int));
// Check for allocation failure
if (ptr == NULL) {
    printf("Memory Reallocation Failed");
    exit(0);
}
`}),e.jsx("p",{children:"It is important to note that if realloc() fails and returns NULL, the original memory block is not freed, so you should not overwrite the original pointer until you’ve successfully allocated a new block. To prevent memory leaks, it’s a good practice to handle the NULL return value carefully:"}),e.jsx("pre",{children:`
int *ptr = (int *)malloc(5 * sizeof(int));
// Reallocation
int *temp = (int *)realloc(ptr, 10 * sizeof(int));
// Only update the pointer if reallocation is successful
if (temp == NULL)
    printf("Memory Reallocation Failed");
else
    ptr = temp;
`}),e.jsx("h3",{children:"Practical Example"}),e.jsx("p",{children:"Consider the first scenario where we were having issues with the fixes size array. Let’s see how we can resolve both of these issues using dynamic memory allocation."}),e.jsx("pre",{children:`
// Initially allocate memory for 5 integers
int *ptr = (int *)malloc(5 * sizeof(int));
// Check if allocation was successful
if (ptr == NULL) {
    printf("Memory Allocation Failed");
    exit(0);
}
// Now, we need to store 8 elements so
// Reallocate to store 8 integers
ptr = (int *)realloc(ptr, 5 * sizeof(int));
if (ptr == NULL) {
        printf("Memory Reallocation Failed
");
        exit(0);
    }
    
    for (int i = 0; i < 5; i++)
        printf("%d ", ptr[i]);
    
    // Finally, free the memory when done
    free(ptr);
    



    return 0;
}

`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"10 20 30 40 50"})]}),e.jsx("p",{children:"In this program, we are managing the memory allocated to the pointer ptr according to our needs by changing the size using realloc(). It can be a fun exercise to implement an array which grows according to the elements inserted in it. This kind of arrays are called dynamically growing arrays."}),e.jsx("h3",{children:"malloc() vs calloc()"}),e.jsx("p",{children:"The functions malloc() and calloc() works very similar to one another. So, why there was the need for two such similar functions."}),e.jsx("p",{children:"It turns out that even though they are similar, they have different use cases due to the minor difference between them regarding the memory initialization. malloc() does not initialize memory while calloc() initializes the memory with zero."})]})]})}),Ij=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Memory Leaks in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Memory Leaks"}),e.jsx("h3",{children:"What is Memory Leak? How can we avoid?"}),e.jsxs("p",{children:["In C, ",e.jsx("b",{children:"memory leak"})," occurs when a program allocates memory dynamically (using functions like ",e.jsx("b",{children:"malloc()"}),", ",e.jsx("b",{children:"calloc()"}),", or ",e.jsx("b",{children:"realloc()"}),") but fails to deallocate it using ",e.jsx("b",{children:"free()"})," when the memory is no longer needed. Eventually, in the worst case, too much of the available memory may become allocated, all or part of the system or device stops working correctly, the application fails, or the system slows down vastly."]}),e.jsx("h3",{children:"Example of Memory Leak"}),e.jsx("p",{children:"The below example shows the memory leak concept."}),e.jsx("pre",{children:`
#include <stdlib.h>

void f() {
    // Allocate memory
    int* ptr = (int*)malloc(sizeof(int));
    // Return without freeing ptr
    return;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Memory allocated successfully"})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Explanation:"})," Memory for an array of 10 integers is allocated using malloc(), but the memory is never freed using free(). This results in a memory leak since the allocated memory is no longer accessible but remains occupied."]}),e.jsx("h3",{children:"Common Causes of Memory Leak"}),e.jsx("p",{children:"Following are the most common causes of memory leak in C:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["When dynamically allocated memory is not freed up by calling free then it leads to memory leaks. Always make sure that for every dynamic memory allocation using ",e.jsx("b",{children:"malloc"})," or ",e.jsx("b",{children:"calloc"}),", there is a corresponding free call."]}),e.jsx("li",{children:"When track of pointers that references to the allocated memory is lost then it may happen that memory is not freed up. Hence keep the track of all pointers and make ensure that memory is freed."}),e.jsx("li",{children:"When the program terminates abruptly and the allocated memory is not freed or if any part of code prevents the call of free then memory leaks may happen."})]}),e.jsx("h3",{children:"How to avoid memory leaks?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Manual memory management:"})," Always ensure that free() is called for each dynamically allocated memory block once it is no longer needed. This is a fundamental practice for avoiding memory leaks."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Use memory analysis tools:"})," Tools like Valgrind and AddressSanitizer can help detect memory leaks by analyzing a program’s memory usage during runtime."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Code review:"})," Regular code reviews and static analysis tools can help spot potential issues related to memory management."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Avoid unnecessary allocations:"})," Only allocate memory when necessary, and ensure that every allocation has a corresponding deallocation."]})]}),e.jsx("h3",{children:"Example"}),e.jsx("p",{children:"The below program shows the memory allocated in the heap is released to avoid memory leak."}),e.jsx("pre",{children:`
#include <stdlib.h>

void f() {
    int* ptr = (int*)malloc(sizeof(int));
    // Do some work
    // Memory allocated by malloc is released
    free(ptr);
    return;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Memory allocated successfully"})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Explanation:"})," This code dynamically allocates memory for an array of 10 integers using malloc(). It checks if the memory allocation is successful and prints a message accordingly. After using the memory, it is freed using free() to prevent memory leaks, and the program exits successfully with a return value of 0."]}),e.jsx("h3",{children:"Conclusion"}),e.jsx("p",{children:"In conclusion, memory leaks can occur when we allocate memory on the heap but forget to release it or free it. Due to memory leaks, we may experience performance degradation and system becomes unstable. Memory leaks cause more damage for long-running programs like servers. To avoid memory leaks we must free dynamically allocated memory by calling functions like free()."})]})]})}),Pj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Linked List in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Linked List"}),e.jsx("h3",{children:"Linked List in C"}),e.jsx("p",{children:"A linked list is a linear data structure where each element, known as a node, is connected to the next one using pointers. Unlike array, elements of linked list are stored in random memory locations."}),e.jsx("p",{children:"In this article, we will learn about the linked list, its types, representation of the linked list in C, and discuss what link list offers as compared to the similar data structures."}),e.jsx("h3",{children:"What is a Linked List?"}),e.jsx("p",{children:"A linked list is a sequence of nodes where each node contains two parts:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Data:"})," The value stored in the node."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Pointer:"})," A reference to the next node in the sequence. (There can be multiple pointers for different kind of linked list.)"]})]}),e.jsx("p",{children:"Unlike arrays, linked lists do not store elements in contiguous memory locations. Instead, each node points to the next, forming a chain-like structure and to access any element (node), we need to first sequentially traverse all the nodes before it."}),e.jsx("p",{children:"It is a recursive data structure in which any smaller part of it is also a linked list in itself."}),e.jsx("h3",{children:"Representation of Linked List in C"}),e.jsxs("p",{children:["In C, linked lists are represented as the pointer to the first node in the list. For that reason, the first node is generally called ",e.jsx("b",{children:"head"})," of the linked list. Each node of the linked list is represented by a structure that contains a data field and a pointer of the same type as itself. Such structure is called ",e.jsx("b",{children:"self-referential structures"}),"."]}),e.jsx("h3",{children:"Types of Linked List in C"}),e.jsx("p",{children:"Linked list can be classified on the basis of the type of structure they form as a whole and the direction of access. Based on this classification, there are five types of linked lists:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Singly Linked List"}),e.jsx("li",{children:"Doubly Linked List"}),e.jsx("li",{children:"Circular Linked List"})]}),e.jsx("h3",{children:"Singly Linked List in C"}),e.jsx("p",{children:"A linked list or singly linked list is a linear data structure that is made up of a group of nodes in which each node has two parts: the data, and the pointer to the next node. The last node's (also known as tail) pointers point to NULL to indicate the end of the linked list."}),e.jsx("h4",{children:"Representation of Singly Linked List in C"}),e.jsx("p",{children:"A linked list is represented as a pointer to the first node where each node contains:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Data:"})," Here the actual information is stored."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Next:"})," Pointer that links to the next node."]})]}),e.jsx("pre",{children:`
// Structure to represent the singly linked list
struct Node {
    // Data field - can be of any type and count
    int data;
    // Pointer to the next node
    Node* next;
};
`}),e.jsx("h4",{children:"Basic Operations on Singly Linked List"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Operation"}),e.jsx("th",{children:"Operation Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Time Complexity"}),e.jsx("th",{children:"Space Complexity"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowspan:"3",children:"Insertion"}),e.jsx("td",{children:"At Beginning"}),e.jsx("td",{children:"Insert a new node at the start of a linked list."}),e.jsx("td",{children:"O (1)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"At the End"}),e.jsx("td",{children:"Insert a new node at the end of the linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"At Specific Position"}),e.jsx("td",{children:"Insert a new node at a specific position in a linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowspan:"3",children:"Deletion"}),e.jsx("td",{children:"From Beginning"}),e.jsx("td",{children:"Delete a node from the start of a linked list"}),e.jsx("td",{children:"O (1)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"From the End"}),e.jsx("td",{children:"Delete a node at the end of a linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"A Specific Node"}),e.jsx("td",{children:"Delete a node from a specific position of a linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Traversal"}),e.jsx("td",{children:"Traverse the linked list from start to end."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]})]}),e.jsx("h3",{children:"Doubly Linked List in C"}),e.jsx("p",{children:"A doubly linked list is a bit more complex than singly linked list. In it, each node contains three parts: the data, a pointer to the next node, and one extra pointer which points to the previous node. This allows for traversal in both directions, making it more versatile than a singly linked list."}),e.jsx("h4",{children:"Representation of Doubly Linked List in C"}),e.jsx("p",{children:"A doubly linked list is represented as a pointer to the first node (head), where each node contains:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Data:"})," The actual information stored in the node."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Next:"})," A pointer that links to the next node in the sequence."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Previous:"})," A pointer that links to the previous node in the sequence."]})]}),e.jsx("pre",{children:`
// Structure to represent the doubly linked list
struct Node {
    // Data field - can be of any type and count
    int data;
    // Pointer to the next node
    Node* next;
    // Pointer to the previous node
    Node* prev;
};
`}),e.jsx("h4",{children:"Basic Operations on Doubly Linked List"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Operation"}),e.jsx("th",{children:"Operation Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Time Complexity"}),e.jsx("th",{children:"Space Complexity"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowspan:"3",children:"Insertion"}),e.jsx("td",{children:"At Beginning"}),e.jsx("td",{children:"Insert a new node at the start of a linked list."}),e.jsx("td",{children:"O (1)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"At the End"}),e.jsx("td",{children:"Insert a new node at the end of the linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"At Specific Position"}),e.jsx("td",{children:"Insert a new node at a specific position in a linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowspan:"3",children:"Deletion"}),e.jsx("td",{children:"From Beginning"}),e.jsx("td",{children:"Delete a node from the start of a linked list"}),e.jsx("td",{children:"O (1)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"From the End"}),e.jsx("td",{children:"Delete a node at the end of a linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"A Specific Node"}),e.jsx("td",{children:"Delete a node from a specific position of a linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Traversal"}),e.jsx("td",{children:"Traverse the linked list from start to end or vice versa."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]})]}),e.jsx("h3",{children:"Circular Linked List in C"}),e.jsx("p",{children:"A circular linked list is a variation of a singly linked list where the last node points back to the first node, forming a circle. This means there is no NULL at the end, and the list can be traversed in a circular manner."}),e.jsx("p",{children:"The structure of the circular linked list node is same as that of singly linked list."}),e.jsx("h4",{children:"Representation of Circular Linked List in C"}),e.jsx("p",{children:"A circular linked list is represented as a pointer to the first node, where each node contains:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Data:"})," The actual information stored in the node."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Next:"})," A pointer that links to the next node, with the last node pointing back to the first node."]})]}),e.jsx("pre",{children:`
// Structure to represent the circular linked list
struct Node {
    // Data field - can be of any type and count
    int data;
    // Pointer to the next node
    Node* next;
};
`}),e.jsx("p",{children:"It is same as the structure for singly linked list node."}),e.jsxs("p",{children:[e.jsx("b",{children:"Note:"})," A circular linked list can also be represented by a pointer to the last node."]}),e.jsx("h4",{children:"Basic Operations on Circular Linked List"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Operation"}),e.jsx("th",{children:"Operation Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Time Complexity"}),e.jsx("th",{children:"Space Complexity"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowspan:"3",children:"Insertion"}),e.jsx("td",{children:"At Beginning"}),e.jsx("td",{children:"Insert a new node at the start of a linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"At the End"}),e.jsx("td",{children:"Insert a new node at the end of the linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"At Specific Position"}),e.jsx("td",{children:"Insert a new node at a specific position in a linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowspan:"3",children:"Deletion"}),e.jsx("td",{children:"From Beginning"}),e.jsx("td",{children:"Delete a node from the start of a linked list"}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"From the End"}),e.jsx("td",{children:"Delete a node at the end of a linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"A Specific Node"}),e.jsx("td",{children:"Delete a node from a specific position of a linked list."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Traversal"}),e.jsx("td",{children:"Traverse the linked list from start to end or vice versa."}),e.jsx("td",{children:"O (N)"}),e.jsx("td",{children:"O (1)"})]})]}),e.jsx("h3",{children:"Applications of Linked Lists in C"}),e.jsx("p",{children:"The following are some major applications of linked list:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Dynamic memory allocation efficiently manages and allocates dynamic memory in systems and applications."}),e.jsx("li",{children:"Implementing other data structures such as stacks, queues, etc."}),e.jsx("li",{children:"Represents and manipulates polynomials, with each node storing terms."}),e.jsx("li",{children:"Used in file system management dynamically in operating systems."})]}),e.jsx("h3",{children:"Advantages of a Linked List"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Linked lists can grow or shrink in size dynamically, as memory is allocated or deallocated as needed."}),e.jsx("li",{children:"Inserting or deleting nodes in a linked list is efficient and does not require shifting elements, unlike arrays."}),e.jsx("li",{children:"Memory is utilized more efficiently as linked lists do not require a pre-allocated size, reducing wasted space."}),e.jsx("li",{children:"They serve as the foundation for implementing more complex data structures like stacks, queues, and graphs."}),e.jsx("li",{children:"They can utilize non-contiguous memory blocks, making them suitable for applications where memory is fragmented."})]}),e.jsx("h3",{children:"Disadvantages of a Linked List"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Each node requires extra memory for storing a pointer."}),e.jsx("li",{children:"Linked lists do not allow direct access to elements by index. Accessing a specific node requires traversing from the head, leading to slower access times."}),e.jsx("li",{children:"Managing pointers can be tricky, increasing the complexity of coding."}),e.jsx("li",{children:"Searching for an element or accessing a node by index takes O(N) time, making linked lists slower for such operations compared to arrays."}),e.jsx("li",{children:"Non-contiguous memory allocation results in more cache misses."}),e.jsx("li",{children:"Singly linked lists do not support easy backward traversal."})]})]})]})}),Fj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Stack in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Implement a Stack in C Programming"}),e.jsx("p",{children:"Stack is the linear data structure that follows the Last in, First Out(LIFO) principle of data insertion and deletion. It means that the element that is inserted last will be the first one to be removed and the element that is inserted first will be removed at last. Think of it as the stack of plates stacked on top of one another where we can only add or remove the top plate."}),e.jsx("p",{children:"Stacks are widely used in programming for tasks like expression evaluation, function call management, and backtracking algorithms. In this article, we will learn how to implement a stack in the C programming language. We will also look at some of its basic operations along with their time and space complexity analysis."}),e.jsx("h3",{children:"Implementation of a Stack in C"}),e.jsxs("p",{children:["In C, we can implement a stack using an ",e.jsx("b",{children:"array"})," or a linked list. In this article, we will use the array data structure to store the stack elements and use a pointer to keep track of the topmost element of the stack. The stack will offer some basic operations like push, pop, peek, isEmpty, and isFull to the users."]}),e.jsx("h3",{children:"Representation of Stack in C"}),e.jsxs("p",{children:["The stack can be represented as a ",e.jsx("b",{children:"structure"})," that contains a fixed-size array in C which stores the data of the stack and an index pointer which is used to track the top element of the stack."]}),e.jsx("pre",{children:`
struct stack {
     type arr[MAX_SIZE];
     int top;
}
`}),e.jsx("p",{children:"We can use a utility function initialize the stack array along with the top pointer. The initial value of the top should be -1 representing that there are currently no elements in the stack."}),e.jsx("p",{children:"Max size of the stack can be defined as per our requirements."}),e.jsx("h3",{children:"Basic Stack Operations in C"}),e.jsx("p",{children:"Following are some basic operations in the stack that make it easy to manipulate the stack data structure:"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Operation"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Time Complexity"}),e.jsx("th",{children:"Space Complexity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Push"}),e.jsx("td",{children:"Inserts an element at the top of the stack."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Pop"}),e.jsx("td",{children:"Removes the top most element of the stack."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Peek"}),e.jsx("td",{children:"Returns the topmost element of the stack."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IsFull"}),e.jsx("td",{children:"Returns true is the stack is full otherwise returns false."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IsEmpty"}),e.jsx("td",{children:"Returns true is the stack is empty otherwise returns false."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]})]}),e.jsx("p",{children:"As we can see, the stack offers O(1) time complexity for all the operation but with a catch that we can only perform these operation to the topmost element. So, we need to consider our requirements to take advantage of stack data structure."}),e.jsx("p",{children:"Let's see how to implement these basic operations for our stack in C."}),e.jsx("h3",{children:"1. isFull Function"}),e.jsx("p",{children:"The isFull() function provides the information about whether the stack have some space left or it is completely full. We know that the max capacity of the stack is MAX_SIZE elements. So, the max value of top can be MAX_SIZE - 1."}),e.jsx("h3",{children:"Algorithm of Stack isFull"}),e.jsxs("ol",{children:[e.jsx("li",{children:"If top &gt= MAX_SIZE - 1, return true."}),e.jsx("li",{children:"Else return false."})]}),e.jsx("h3",{children:"2. isEmpty Function"}),e.jsx("p",{children:"The isEmpty function will check whether the stack is empty or not. We know that when the stack is empty, the top is equal to -1."}),e.jsx("h3",{children:"Algorithm of Stack isEmpty"}),e.jsxs("ol",{children:[e.jsx("li",{children:"If the top pointer==-1 return true"}),e.jsx("li",{children:"Else return false."})]}),e.jsx("h3",{children:"3. Push Function"}),e.jsx("p",{children:"The push function will add (or push) an element to the stack. The edge case here will be when we try to add a new element when the stack is already full. It is called stack overflow and we have to check for it before inserted new element."}),e.jsx("h3",{children:"Algorithm of Stack Push"}),e.jsx("p",{children:"Following is the algorithm for the push operation:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Check whether if the stack is full."}),e.jsx("li",{children:"If stack is full then display the overflow message."}),e.jsx("li",{children:"If stack is not full then increment the top pointer."}),e.jsx("li",{children:"Add the new element to position pointed to by the top pointer."})]}),e.jsx("h3",{children:"4. Pop Function"}),e.jsx("p",{children:"The pop function will remove an element from the stack. One case that can occur here is when we try to remove the top using pop() function when the stack is already empty. Such condition is called stack underflow and can be easily checked."}),e.jsx("h3",{children:"Algorithm of Stack Pop"}),e.jsx("p",{children:"Following is the algorithm for the pop operation:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Check whether if stack is empty."}),e.jsx("li",{children:"If stack is empty then display the underflow message."}),e.jsx("li",{children:"If stack is not empty then remove the element at top position"}),e.jsx("li",{children:"Decrement the top pointer of the stack."})]}),e.jsx("h3",{children:"5. top Function"}),e.jsx("p",{children:"The peek function will return the topmost element of the stack in constant time. If the stack is empty it returns -1."}),e.jsx("h3",{children:"Algorithm for Stack Top Function"}),e.jsx("p",{children:"Following is the algorithm for top operation on the stack:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Check whether the stack is empty."}),e.jsx("li",{children:"If it is empty, return -1."}),e.jsx("li",{children:"Else return, stack.data[top] element."})]}),e.jsx("h3",{children:"C Program To Implement a Stack"}),e.jsx("p",{children:"The following program demonstrates how we can implement a Stack in C:"}),e.jsx("pre",{children:`// C Program to demonstrate how to Implement a Stack
#include <stdio.h>
#include <stdbool.h>

// Define the maximim capacity of the stack
#define MAX_SIZE 100

// Define a structure for the stack
typedef struct {
    // Array to store stack elements
    int arr[MAX_SIZE];  
    // Index of the top element in the stack
    int top;        
} Stack;

// Function to initialize the stack
void initialize(Stack *stack) {
    // Set top index to -1 to indicate an empty stack
    stack->top = -1;  
}

// Function to check if the stack is empty
bool isEmpty(Stack *stack) {
    // If top is -1, the stack is empty
    return stack->top == -1;  
}

// Function to check if the stack is full
bool isFull(Stack *stack) {
    // If top is MAX_SIZE - 1, the stack is full
    return stack->top == MAX_SIZE - 1;  
}

// Function to push an element onto the stack
void push(Stack *stack, int value) {
    // Check for stack overflow
    if (isFull(stack)) {
        printf("Stack Overflow
");
        return;
    }
    // Increment top and add the value to the top of the stack
    stack->arr[++stack->top] = value;
    printf("Pushed %d onto the stack
", value);
}

// Function to pop an element from the stack
int pop(Stack *stack) {
    // Check for stack underflow
    if (isEmpty(stack)) {
        printf("Stack Underflow
");
        return -1;
    }
    // Return the top element 
    int popped = stack->arr[stack->top];
    // decrement top pointer
    stack->top--;
    printf("Popped %d from the stack
", popped);
    // return the popped element
    return popped;
}

// Function to peek the top element of the stack
int peek(Stack *stack) {
    // Check if the stack is empty
    if (isEmpty(stack)) {
        printf("Stack is empty
");
        return -1;
    }
    // Return the top element without removing it
    return stack->arr[stack->top];
}

int main() {
    Stack stack;
    // Initialize the stack
    initialize(&stack);  

    // Push elements onto the stack and print the stack after each push
    push(&stack, 3);
    printf("Top element: %d
", peek(&stack));

    push(&stack, 5);
    printf("Top element: %d
", peek(&stack));

    push(&stack, 2);
    printf("Top element: %d
", peek(&stack));

    push(&stack, 8);
    printf("Top element: %d
", peek(&stack));

    // Pop elements from the stack and print the stack after each pop
    while (!isEmpty(&stack)) {
        printf("Top element: %d
", peek(&stack));
        printf("Popped element: %d
", pop(&stack));
    }

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Pushed 3 onto the stack",e.jsx("br",{}),"Top element: 3",e.jsx("br",{}),"Pushed 5 onto the stack",e.jsx("br",{}),"Top element: 5",e.jsx("br",{}),"Pushed 2 onto the stack",e.jsx("br",{}),"Top element: 2",e.jsx("br",{}),"Pushed 8 onto the stack",e.jsx("br",{}),"Top element: 8",e.jsx("br",{}),"Top element: 8",e.jsx("br",{}),"Popped 8 from the stack",e.jsx("br",{}),"Popped element: 8",e.jsx("br",{}),"Top element: 2",e.jsx("br",{}),"Popped 2 from the stack",e.jsx("br",{}),"Popped element: 2",e.jsx("br",{}),"Top element: 5",e.jsx("br",{}),"Popped 5 from the stack",e.jsx("br",{}),"Popped element: 5",e.jsx("br",{}),"Top element: 3",e.jsx("br",{}),"Popped 3 from the stack",e.jsx("br",{}),"Popped element: 3"]})]}),e.jsx("h3",{children:"Applications of Stack in C"}),e.jsx("p",{children:"Stack is widely used for Following are some common applications of Stack."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Stacks are commonly used to evaluate postfix expressions. It is also used in infix to postfix conversion."}),e.jsx("li",{children:"It is used in recursion where a different stack is allocated for every recursive call."}),e.jsx("li",{children:"It is used in browsers to provide the backward and forward functionality."}),e.jsx("li",{children:"It is also used in text editor, image editors to provide the undo and redo funtionality."}),e.jsx("li",{children:"It is used in various algorithms in computer science."})]})]})]})}),Bj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Queue in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Queue"}),e.jsx("h3",{children:"Implement a Queue in C Programming"}),e.jsx("p",{children:"A queue is a linear data structure that follows the First In First Out (FIFO) order of insertion and deletion. It means that the element that is inserted first will be the first one to be removed and the element that is inserted last will be removed at last."}),e.jsx("p",{children:"In this article, we'll learn how to implement the queue data structure in the C programming language. We will also look at some of its basic operations along with their time and space complexity analysis."}),e.jsx("h3",{children:"Implementation of a Queue in C"}),e.jsx("p",{children:"We can implement a queue in C using either an array or a linked list. In this article, we will use the array data structure to store the elements. The insertion in the queue is done at the back of the queue and the deletion is done at the front. So we maintain two index pointers front and rear pointers to keep track of the front and back of the queue. The queue consists of two basic operations enqueue which adds elements to the queue (insertion) from the rear pointer and dequeue(deletion) which removes elements from the queue through the front pointer."}),e.jsx("h4",{children:"Representation of Stack in C"}),e.jsx("p",{children:"In C, the queue can be represented as the structure that contains one array of fixed size, index pointer to the front, and index pointer to the end."}),e.jsx("pre",{children:`
struct Queue {
     type arr[MAX_SIZE];
     int back;
     int front;
}
`}),e.jsx("p",{children:"The front pointer initial value will be -1 and the back pointer initial value will be 0. The front pointer will always point to one element before the element that is to be dequeue while the back pointer will point to the next empty element after the element that is just dequeued."}),e.jsx("h3",{children:"Basic Operations of Queue in C"}),e.jsx("p",{children:"Following are the basic operations of a Queue that are used frequently to manipulate the elements present inside the queue:"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Operation"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Time Complexity"}),e.jsx("th",{children:"Space Complexity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Enqueue"}),e.jsx("td",{children:"Inserts an element in the queue through rear pointer."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dequeue"}),e.jsx("td",{children:"Removes an element from the queue through front pointer."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Peek"}),e.jsx("td",{children:"Returns the front element of the queue."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IsFull"}),e.jsx("td",{children:"Returns true is the queue is full otherwise returns false."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IsEmpty"}),e.jsx("td",{children:"Returns true is the queue is empty otherwise returns false."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]})]}),e.jsx("p",{children:"Just like stack, the queue also offers all its operation in constant time. Let’s see how to implement these basic operations for our queue in C."}),e.jsx("h3",{children:"1. isFull Function"}),e.jsx("p",{children:"The isFull function will check whether the queue is full or not. As rear will always be pointing to the leftmost empty element, if the rear gets greater than or equal to the MAX_SIZE, it means that it already contains the maximum possible number of elements."}),e.jsx("h3",{children:"Algorithm of isFull Function"}),e.jsx("p",{children:"Following is the algorithm for isFull Function:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"If rear == MAX_SIZE, return true."}),e.jsx("li",{children:"Else, return false."})]}),e.jsx("h3",{children:"2. isEmpty Function"}),e.jsx("p",{children:"The isEmpty function will check whether the queue is empty or not. When we initialize a queue, we set the front = -1 and rear = 0. So we know that when there are no elements in the queue, the front = rear - 1."}),e.jsx("h3",{children:"Algorithm of isEmpty Function"}),e.jsx("p",{children:"Following is the algorithm for isFull Function:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"If front == rear - 1, return true."}),e.jsx("li",{children:"Else, return false"})]}),e.jsx("h3",{children:"3. Enqueue Function"}),e.jsx("p",{children:"The enqueue functions inserts an element to the queue through the rear pointer. We need to check for queue overflow (queue already full) before adding the new element."}),e.jsx("h3",{children:"Algorithm of Enqueue Function"}),e.jsx("p",{children:"Following is the algorithm for the enqueue function:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Check whether the queue is full."}),e.jsx("li",{children:"If the queue is full, display the overflow message."}),e.jsx("li",{children:"If the queue is not full, add the new element to the position pointed to by the rear pointer."}),e.jsx("li",{children:"Increment the rear pointer."})]}),e.jsx("h3",{children:"4. Dequeue Function"}),e.jsx("p",{children:"The enqueue functions removes an element from the front of the queue through the front pointer. We need to check for the queue underflow (queue is already empty) condition before trying to dequeu the front element."}),e.jsx("h3",{children:"Algorithm of Dequeue"}),e.jsx("p",{children:"Following is the algorithm for the dequeue function:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Check whether the queue is empty."}),e.jsx("li",{children:"If the queue is empty, display the underflow message."}),e.jsxs("li",{children:["If the queue is not empty,",e.jsxs("ol",{children:[e.jsx("li",{children:"Increment the front pointer of the queue."}),e.jsx("li",{children:"remove the element at the front position."})]})]})]}),e.jsx("h3",{children:"5. Peek Function"}),e.jsx("p",{children:"The peek functions returns the front most element of the queue. If the queue is empty it returns -1."}),e.jsx("h3",{children:"Algorithm of Peek Function"}),e.jsx("p",{children:"Following is the algorithm for the dequeue function:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Check if the queue is empty."}),e.jsx("li",{children:"If the queue is empty, return -1."}),e.jsx("li",{children:"If not, return queueArray[front + 1]."})]}),e.jsx("h3",{children:"C Program To Implement a Queue"}),e.jsx("p",{children:"The following program demonstrates how we can implement a Queue in C:"}),e.jsx("pre",{children:`// C Program to demonstrate how to Implement a queue
#include <stdbool.h>
#include <stdio.h>
#define MAX_SIZE 100

// Defining the Queue structure
typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
} Queue;

// Function to initialize the queue
void initializeQueue(Queue* q)
{
    q->front = -1;
    q->rear = 0;
}

// Function to check if the queue is empty
bool isEmpty(Queue* q) { return (q->front == q->rear - 1); }

// Function to check if the queue is full
bool isFull(Queue* q) { return (q->rear == MAX_SIZE); }

// Function to add an element to the queue (Enqueue
// operation)
void enqueue(Queue* q, int value)
{
    if (isFull(q)) {
        printf("Queue is full
");
        return;
    }
    q->items[q->rear] = value;
    q->rear++;
}

// Function to remove an element from the queue (Dequeue
// operation)
void dequeue(Queue* q)
{
    if (isEmpty(q)) {
        printf("Queue is empty
");
        return;
    }
    q->front++;
}

// Function to get the element at the front of the queue
// (Peek operation)
int peek(Queue* q)
{
    if (isEmpty(q)) {
        printf("Queue is empty
");
        return -1; // return some default value or handle
                   // error differently
    }
    return q->items[q->front + 1];
}

// Function to print the current queue
void printQueue(Queue* q)
{
    if (isEmpty(q)) {
        printf("Queue is empty
");
        return;
    }

    printf("Current Queue: ");
    for (int i = q->front + 1; i < q->rear; i++) {
        printf("%d ", q->items[i]);
    }
    printf("
");
}

int main()
{
    Queue q;
    initializeQueue(&q);

    // Enqueue elements
    enqueue(&q, 10);
    printQueue(&q);

    enqueue(&q, 20);
    printQueue(&q);

    enqueue(&q, 30);
    printQueue(&q);

    // Peek front element
    printf("Front element: %d
", peek(&q));

    // Dequeue an element
    dequeue(&q);
    printQueue(&q);

    // Peek front element after dequeue
    printf("Front element after dequeue: %d
", peek(&q));

    return 0;
}
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Current Queue: 10 ",e.jsx("br",{}),"Current Queue: 10 20 ",e.jsx("br",{}),"Current Queue: 10 20 30 ",e.jsx("br",{}),"Front element: 10",e.jsx("br",{}),"Current Queue: 20 30 ",e.jsx("br",{}),"Front element after dequeue: 20"]})]}),e.jsx("h3",{children:"Problem with Above Implementation"}),e.jsx("p",{children:"The queue above works fine only for single usage. For example, lets fill the queue completely and then dequeue all the elements. Then, the front = rear - 1, which is the condition for the full queue even though the queue is empty. To resolve this, we implement the circular increment (or modular increment) for the index pointers. This kind of queue is called Circular Queue."}),e.jsx("h3",{children:"Applications of Queue"}),e.jsx("p",{children:"Following are some common applications of the queue data structure:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Queues are used in CPU scheduling."}),e.jsx("li",{children:"They are used in Print spooling."}),e.jsx("li",{children:"They are used in Breadth-first-search."}),e.jsx("li",{children:"They are used in web servers to schedule incoming requests."}),e.jsx("li",{children:"They are used in Buffering I/O systems."})]}),e.jsx("h3",{children:"Limitations of Queue"}),e.jsx("p",{children:"Following are the major limitation of the queue:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Insertion and removal except from the end takes O(N) time."}),e.jsx("li",{children:"Searching is an expensive operation again taking O(N) time."})]}),e.jsx("h3",{children:"Conclusion"}),e.jsx("p",{children:"In C, there is no build in data structure so knowing how to implement queue not only improves our efficiency in the language but also helps us to understand the queue data structure from the base. This article covered the basic implementation of the queue along with its basic operations and also discussed is limitations and referred the article with the solution to that limitation."})]})]})}),Gj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Hash Tables in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Implementation of Hash Table in C/C++ using Separate Chaining"}),e.jsx("h3",{children:"Introduction:"}),e.jsxs("p",{children:[e.jsx("b",{children:"Hashing"})," is a technique that maps a large set of data to a small set of data. It uses a hash function for doing this mapping. It is an irreversible process and we cannot find the original value of the key from its hashed value because we are trying to map a large set of data into a small set of data, which may cause collisions. It is not uncommon to encounter collisions when mapping a large dataset into a smaller one. Suppose, We have three buckets and each bucket can store 1L of water in it and we have 5L of water also. We have to put all the water in these three buckets and this kind of situation is known as a collision. ",e.jsx("b",{children:"URL shorteners"})," are an example of hashing as it maps large size URL to small size"]}),e.jsx("h3",{children:"Some Examples of Hash Functions:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"key % number of buckets"}),e.jsx("li",{children:"ASCII value of character * PrimeNumberx. Where x = 1, 2, 3….n"})]}),e.jsx("p",{children:"You can make your own hash function but it should be a good hash function that gives less number of collisions."}),e.jsx("h3",{children:"Components of Hashing"}),e.jsx("p",{children:e.jsx("b",{children:"Bucket Index:"})}),e.jsxs("p",{children:["The value returned by the ",e.jsx("b",{children:"Hash function"})," is the bucket index for a key in a separate chaining method. Each index in the array is called a bucket as it is a bucket of a linked list."]}),e.jsx("h3",{children:"Rehashing:"}),e.jsxs("p",{children:[e.jsx("b",{children:"Rehashing"})," is a concept that reduces collision when the elements are increased in the current hash table. It will make a new array of doubled size and copy the previous array elements to it and it is like the ",e.jsx("b",{children:"internal working of vector in C++"}),". Obviously, the Hash function should be dynamic as it should reflect some changes when the capacity is increased. The hash function includes the capacity of the hash table in it, therefore, While copying key values from the previous array hash function gives different bucket indexes as it is dependent on the capacity (buckets) of the hash table. Generally, When the value of the load factor is greater than 0.5 rehashings are done."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Double the size of the array."}),e.jsx("li",{children:"Copy the elements of the previous array to the new array. We use the hash function while copying each node to a new array again therefore, It will reduce collision."}),e.jsx("li",{children:"Delete the previous array from the memory and point your hash map’s inside array pointer to this new array."})]}),e.jsx("p",{children:"Generally, Load Factor = number of elements in Hash Map / total number of buckets (capacity)."}),e.jsx("h3",{children:"Collision:"}),e.jsx("p",{children:"Collision is the situation when the bucket index is not empty. It means that a linked list head is present at that bucket index. We have two or more values that map to the same bucket index."}),e.jsx("h3",{children:"Major Functions in our Program"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Insertion"}),e.jsx("li",{children:"Search"}),e.jsx("li",{children:"Hash Function"}),e.jsx("li",{children:"Delete"}),e.jsx("li",{children:"Rehashing"}),e.jsx("li",{children:"Hash Map"})]}),e.jsx("h3",{children:"Implementation without Rehashing:"}),e.jsx("pre",{children:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Linked List node
struct node {

	// key is string
	char* key;

	// value is also string
	char* value;
	struct node* next;
};

// like constructor
void setNode(struct node* node, char* key, char* value)
{
	node->key = key;
	node->value = value;
	node->next = NULL;
	return;
};

struct hashMap {

	// Current number of elements in hashMap
	// and capacity of hashMap
	int numOfElements, capacity;

	// hold base address array of linked list
	struct node** arr;
};

// like constructor
void initializeHashMap(struct hashMap* mp)
{

	// Default capacity in this case
	mp->capacity = 100;
	mp->numOfElements = 0;

	// array of size = 1
	mp->arr = (struct node**)malloc(sizeof(struct node*)
									* mp->capacity);
	return;
}

int hashFunction(struct hashMap* mp, char* key)
{
	int bucketIndex;
	int sum = 0, factor = 31;
	for (int i = 0; i < strlen(key); i++) {

		// sum = sum + (ascii value of
		// char * (primeNumber ^ x))...
		// where x = 1, 2, 3....n
		sum = ((sum % mp->capacity)
			+ (((int)key[i]) * factor) % mp->capacity)
			% mp->capacity;

		// factor = factor * prime
		// number....(prime
		// number) ^ x
		factor = ((factor % __INT16_MAX__)
				* (31 % __INT16_MAX__))
				% __INT16_MAX__;
	}

	bucketIndex = sum;
	return bucketIndex;
}

void insert(struct hashMap* mp, char* key, char* value)
{

	// Getting bucket index for the given
	// key - value pair
	int bucketIndex = hashFunction(mp, key);
	struct node* newNode = (struct node*)malloc(

		// Creating a new node
		sizeof(struct node));

	// Setting value of node
	setNode(newNode, key, value);

	// Bucket index is empty....no collision
	if (mp->arr[bucketIndex] == NULL) {
		mp->arr[bucketIndex] = newNode;
	}

	// Collision
	else {

		// Adding newNode at the head of
		// linked list which is present
		// at bucket index....insertion at
		// head in linked list
		newNode->next = mp->arr[bucketIndex];
		mp->arr[bucketIndex] = newNode;
	}
	return;
}

void delete (struct hashMap* mp, char* key)
{

	// Getting bucket index for the
	// given key
	int bucketIndex = hashFunction(mp, key);

	struct node* prevNode = NULL;

	// Points to the head of
	// linked list present at
	// bucket index
	struct node* currNode = mp->arr[bucketIndex];

	while (currNode != NULL) {

		// Key is matched at delete this
		// node from linked list
		if (strcmp(key, currNode->key) == 0) {

			// Head node
			// deletion
			if (currNode == mp->arr[bucketIndex]) {
				mp->arr[bucketIndex] = currNode->next;
			}

			// Last node or middle node
			else {
				prevNode->next = currNode->next;
			}
			free(currNode);
			break;
		}
		prevNode = currNode;
		currNode = currNode->next;
	}
	return;
}

char* search(struct hashMap* mp, char* key)
{

	// Getting the bucket index
	// for the given key
	int bucketIndex = hashFunction(mp, key);

	// Head of the linked list
	// present at bucket index
	struct node* bucketHead = mp->arr[bucketIndex];
	while (bucketHead != NULL) {

		// Key is found in the hashMap
		if (bucketHead->key == key) {
			return bucketHead->value;
		}
		bucketHead = bucketHead->next;
	}

	// If no key found in the hashMap
	// equal to the given key
	char* errorMssg = (char*)malloc(sizeof(char) * 25);
	errorMssg = "Oops! No data found.
";
	return errorMssg;
}

// Drivers code
int main()
{

	// Initialize the value of mp
	struct hashMap* mp
		= (struct hashMap*)malloc(sizeof(struct hashMap));
	initializeHashMap(mp);

	insert(mp, "Yogaholic", "Anjali");
	insert(mp, "pluto14", "Vartika");
	insert(mp, "elite_Programmer", "Manish");
	insert(mp, "LCU", "LearnCourseOnline");
	insert(mp, "decentBoy", "Mayank");

	printf("%s
", search(mp, "elite_Programmer"));
	printf("%s
", search(mp, "Yogaholic"));
	printf("%s
", search(mp, "pluto14"));
	printf("%s
", search(mp, "decentBoy"));
	printf("%s
", search(mp, "GFG"));

	// Key is not inserted
	printf("%s
", search(mp, "randomKey"));

	printf("
After deletion : 
");

	// Deletion of key
	delete (mp, "decentBoy");
	printf("%s
", search(mp, "decentBoy"));

	return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Manish",e.jsx("br",{}),"Anjali",e.jsx("br",{}),"Vartika",e.jsx("br",{}),"Mayank",e.jsx("br",{}),"LearnCourseOnline",e.jsx("br",{}),"Oops! No data found.",e.jsx("br",{}),"After deletion : ",e.jsx("br",{}),"Oops! No data found."]})]}),e.jsx("h3",{children:"Explanation:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"insertion:"})," Inserts the key-value pair at the head of a linked list which is present at the given bucket index."]}),e.jsxs("li",{children:[e.jsx("b",{children:"hashFunction:"})," Gives the bucket index for the given key. Our hash function = ASCII value of character * primeNumberx. The prime number in our case is 31 and the value of x is increasing from 1 to n for consecutive characters in a key."]}),e.jsxs("li",{children:[e.jsx("b",{children:"deletion:"})," Deletes key-value pair from the hash table for the given key. It deletes the node from the linked list which holds the key-value pair."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Search:"})," Search for the value of the given key."]})]}),e.jsx("p",{children:"This implementation does not use the rehashing concept. It is a fixed-sized array of linked lists."}),e.jsx("p",{children:"Key and value both are strings in the given example."}),e.jsx("h3",{children:"Time Complexity and Space Complexity:"}),e.jsx("p",{children:"The time complexity of hash table insertion and deletion operations is O(1) on average. There is some mathematical calculation that proves it."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Time Complexity of Insertion:"})," In the average case it is constant. In the worst case, it is linear."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Time Complexity of Search:"})," In the average case it is constant. In the worst case, it is linear."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Time Complexity of Deletion:"})," In average cases it is constant. In the worst case, it is linear."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Space Complexity:"})," O(n) as it has n number of elements."]})]})]})]})}),Vj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Binary Tree in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Binary Tree"}),e.jsxs("p",{children:["A ",e.jsx("b",{children:"binary tree"})," is a non-linear hierarchical data structure in which each node has at most two children known as the left child and the right child. It can be visualized as a hierarchical structure where the topmost node is called the root node and the nodes at the bottom are called leaf nodes or leaves."]}),e.jsx("p",{children:"In this article, we will learn the basics of binary trees, types of binary trees, basic operations that can be performed on binary trees as well as applications, advantages, and disadvantages of binary trees in C."}),e.jsx("h3",{children:"Representation of Binary Tree"}),e.jsxs("p",{children:["Each node of a ",e.jsx("b",{children:"binary tree"})," has the following 3 parts:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Data"}),e.jsx("li",{children:"Pointer to left child node"}),e.jsx("li",{children:"Pointer to right child node"})]}),e.jsx("p",{children:"To create a binary tree, we have to first create a node having a data, pointer to left child and pointer to right child using the below structure format:"}),e.jsx("pre",{children:`
struct node
{ 
    int data; 
    struct node *left; 
    struct node *right;
};
`}),e.jsxs("p",{children:["To learn more about binary tree refer: ",e.jsx("a",{href:"#",children:"Introduction to Binary Tree – Data Structure and Algorithm Tutorials"})]}),e.jsx("h3",{children:"Basic Operations on Binary Tree in C"}),e.jsx("p",{children:"The following are the basics operations that can performed on a binary tree:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Insertion"}),e.jsx("li",{children:"Deletion"}),e.jsx("li",{children:"Search"}),e.jsx("li",{children:"Traversing (Pre-order, Post-order and In-order)"})]}),e.jsx("p",{children:"Here, we will learn about three basic operations that can be performed on a binary: insertion, deletion, and searching."}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Operation"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Time Complexity"}),e.jsx("th",{children:"Space Complexity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Insertion"}),e.jsx("td",{children:"This function is used to insert values in a binary tree."}),e.jsx("td",{children:"O(N)"}),e.jsx("td",{children:"O(N)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Deletion"}),e.jsx("td",{children:"This function is used to delete the specified node from a binary tree"}),e.jsx("td",{children:"O(N)"}),e.jsx("td",{children:"O(N)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Search"}),e.jsx("td",{children:"This function is used to search a given key in a binary tree"}),e.jsx("td",{children:"O(N)"}),e.jsx("td",{children:"O(N)"})]})]}),e.jsx("h3",{children:"1. Insertion in Binary Tree"}),e.jsx("p",{children:"In a binary tree a new node can be inserted anywhere as a right child or left child of a node. To insert a node in a binary tree, follow the below approach:"}),e.jsx("h3",{children:"Approach:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Start iterating using level order traversal in a binary tree."}),e.jsx("li",{children:"If a node whose left child is missing is found then insert the given new node as the left child of that node."}),e.jsx("li",{children:"Else if a node whose right child is missing is found then insert the given node as the right child of that node."}),e.jsx("li",{children:"Else a node whose both right child and left child are missing is found then insert the new node as the left or right child (any position) of that node."})]}),e.jsx("h3",{children:"2. Deletion in Binary Tree"}),e.jsx("p",{children:"In a binary tree we can delete a node from anywhere and then again rearrange it to maintain the property of binary tree and the leaf nodes can be deleted without performing any replacement and shifting of nodes. To delete a node from a binary tree, follow the below approach:"}),e.jsx("h3",{children:"Approach:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Start traversing from the root node of the tree."}),e.jsx("li",{children:"Find the node that you want to delete and the node at the deepest right."}),e.jsx("li",{children:"Replace the target node (node to be deleted ) with the deepest rightmost node."}),e.jsx("li",{children:"Finally, delete the deepest rightmost node (as it contains the node to be deleted now)."})]}),e.jsx("h3",{children:"3. Searching in Binary Tree"}),e.jsx("p",{children:"In a binary tree we can search a node by traversing and comparing each node with target node (node to be searched). To search for a given node in a binary tree follow the below approach:"}),e.jsx("h3",{children:"Approach:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Start traversing from the root node of the tree."}),e.jsx("li",{children:"Compare the target node (node to be searched) with each node's value."}),e.jsx("li",{children:"If the current node's value is equal to target node, then target node is found."}),e.jsx("li",{children:"else if, the current node's value is not equal to target node, again start searching the left and right child by traversing."}),e.jsx("li",{children:"else, you reach the end of the tree and do no find any node's value equal to target value, then the target node is not present in the tree."})]}),e.jsx("h3",{children:"C Program to Implement Binary Tree"}),e.jsx("p",{children:"The below program demonstrates all the basic operations on a binary search tree: creation, searching, traversal, insertion and deletion in C."}),e.jsx("pre",{children:`// C program to to implement binary tree

#include <stdio.h>
#include <stdlib.h>

// Define a structure for tree nodes
typedef struct Node {
    int data;
    struct Node* left;
    struct Node* right;
} Node;

// Function to create a new node
Node* createNode(int data)
{
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Function for inserting a node in a binary tree
void insert(Node** root, int data)
{
    Node* newNode = createNode(data);
    if (*root == NULL) {
        *root = newNode;
        return;
    }

    // Level order traversal to find the appropriate place
    // for insertion
    Node* temp;
    Node* queue[100];
    int front = -1, rear = -1;
    queue[++rear] = *root;

    while (front != rear) {
        temp = queue[++front];

        //  Insert new node as the left child
        if (temp->left == NULL) {
            temp->left = newNode;
            return;
        }
        // if left child is not missing push it to the queue
        else {
            queue[++rear] = temp->left;
        }
        // Insert new node as the right child
        if (temp->right == NULL) {
            temp->right = newNode;
            return;
        }
        // if right child is not missing push it to the
        // queue
        else {
            queue[++rear] = temp->right;
        }
    }
}

// Function to perform level order traversal to find the
// deepest rightmost node
Node* getDeepestRightmostNode(Node* root)
{
    Node* temp;
    Node* queue[100];
    int front = -1, rear = -1;
    queue[++rear] = root;

    while (front != rear) {
        temp = queue[++front];

        if (temp->left != NULL) {
            queue[++rear] = temp->left;
        }

        if (temp->right != NULL) {
            queue[++rear] = temp->right;
        }
    }
    return temp;
}

// Function for deleting deepest rightmost node in a binary
// tree
void deleteDeepestRightmostNode(Node* root, Node* dNode)
{
    Node* temp;
    Node* queue[100];
    int front = -1, rear = -1;
    queue[++rear] = root;

    while (front != rear) {
        temp = queue[++front];

        if (temp == dNode) {
            temp = NULL;
            free(dNode);
            return;
        }

        if (temp->right != NULL) {
            if (temp->right == dNode) {
                temp->right = NULL;
                free(dNode);
                return;
            }
            else {
                queue[++rear] = temp->right;
            }
        }

        if (temp->left != NULL) {
            if (temp->left == dNode) {
                temp->left = NULL;
                free(dNode);
                return;
            }
            else {
                queue[++rear] = temp->left;
            }
        }
    }
}

// Function to delete a node in the binary tree
void delete (Node** root, int data)
{
    if (*root == NULL) {
        printf("Tree is empty.
");
        return;
    }

    if ((*root)->left == NULL && (*root)->right == NULL) {
        if ((*root)->data == data) {
            free(*root);
            *root = NULL;
            return;
        }
        else {
            printf("Node not found.
");
            return;
        }
    }

    Node* temp;
    Node* queue[100];
    int front = -1, rear = -1;
    queue[++rear] = *root;
    Node* keyNode = NULL;

    while (front != rear) {
        temp = queue[++front];

        if (temp->data == data) {
            keyNode = temp;
        }

        if (temp->left != NULL) {
            queue[++rear] = temp->left;
        }

        if (temp->right != NULL) {
            queue[++rear] = temp->right;
        }
    }

    if (keyNode != NULL) {
        Node* deepestNode = getDeepestRightmostNode(*root);
        keyNode->data = deepestNode->data;
        deleteDeepestRightmostNode(*root, deepestNode);
    }
    else {
        printf("Node not found.
");
    }
}

// Function to search for a node in the binary tree
Node* search(Node* root, int data)
{
    if (root == NULL) {
        return NULL;
    }

    Node* temp;
    Node* queue[100];
    int front = -1, rear = -1;
    queue[++rear] = root;

    while (front != rear) {
        temp = queue[++front];

        if (temp->data == data) {
            return temp;
        }

        if (temp->left != NULL) {
            queue[++rear] = temp->left;
        }

        if (temp->right != NULL) {
            queue[++rear] = temp->right;
        }
    }
    return NULL;
}

// function to perform inorder traversal in a binary tree
void inorderTraversal(Node* root)
{
    if (root == NULL) {
        return;
    }

    inorderTraversal(root->left);
    printf("%d ", root->data);
    inorderTraversal(root->right);
}

int main()
{
    Node* root = NULL;

    // Inserting nodes
    insert(&root, 20);
    insert(&root, 30);
    insert(&root, 40);
    insert(&root, 50);
    insert(&root, 60);
    insert(&root, 70);
    insert(&root, 80);

    // Inorder traversal
    printf("Inorder traversal of the given Binary Search "
           "Tree is: ");
    inorderTraversal(root);
    printf("
");

    // Deleting a node
    int deleteValue = 20;
    delete (&root, deleteValue);
    printf("After deletion of %d: ", deleteValue);
    inorderTraversal(root);
    printf("
");

    // Inserting a new node
    int insertValue = 25;
    insert(&root, insertValue);
    printf("After insertion of %d: ", insertValue);
    inorderTraversal(root);
    printf("
");

    // Searching for a node
    int target = 25;
    Node* searchResult = search(root, target);
    if (searchResult != NULL) {
        printf("Node %d found in the BST.
", target);
    }
    else {
        printf("Node %d not found in the BST.
", target);
    }

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Inorder traversal of the given Binary Search Tree is: 50 30 60 20 70 40 80",e.jsx("br",{}),"After deletion of 20: 50 30 60 80 70 40",e.jsx("br",{}),"After insertion of 25: 50 30 60 80 70 40 25",e.jsx("br",{}),"Node 25 found in the BST."]})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Time Complexity:"})," O(N), here N is the number of nodes in a binary tree."]}),e.jsxs("p",{children:[e.jsx("b",{children:"Auxilliary Space:"})," O(N)"]}),e.jsx("h3",{children:"Types of Binary Trees in C"}),e.jsx("p",{children:"Binary trees can be of many types depending on the parameter we took for the classification of the trees. The following are the types of binary trees:"}),e.jsx("h4",{children:"According to Number of Children"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Full Binary Tree:"})," A binary tree in which every node other than the leaves has two children."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Degenerate Binary Tree:"})," A tree where each parent node has only one child."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Skewed Binary Trees:"})," A binary tree in which all the nodes are skewed to the left or right."]})]}),e.jsx("h4",{children:"According to Completion of Levels"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Complete Binary Tree:"})," A binary tree in which all levels are completely filled except possibly the last level, and the last level has all keys as left as possible."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Perfect Binary Tree:"})," A binary tree in which all the internal nodes have two children and all leaves are at the same level."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Balanced Binary Tree:"})," A binary tree in which the height of the left and right subtrees of any node differ by not more than one."]})]}),e.jsx("h4",{children:"According to Node Values"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Binary Search Tree (BST):"})," A binary tree in which all the left descendants of a node are less than the node and all the right descendants are greater than the node."]}),e.jsxs("li",{children:[e.jsx("b",{children:"AVL Tree:"})," A self-balancing binary search tree where the difference in heights between left and right subtrees is at most one."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Red-Black Tree:"})," A binary search tree with an extra bit of storage per node: its color, which can be either red or black. It ensures the tree remains balanced."]}),e.jsxs("li",{children:[e.jsx("b",{children:"B Tree:"})," A self-balancing search tree in which nodes can have multiple children and is optimized for systems that read and write large blocks of data."]}),e.jsxs("li",{children:[e.jsx("b",{children:"B+ Tree:"})," An extension of the B tree which maintains the data in a sorted order and allows sequential access."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Segment Tree:"})," A binary tree used for storing the intervals or segments. It allows querying which of the stored segments contain a given point."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Fenwick Tree (Binary Indexed Tree):"})," A data structure that provides efficient methods for calculation and manipulation of the prefix sums of a table of values."]})]}),e.jsx("h3",{children:"Applications of Binary Trees"}),e.jsx("p",{children:"Binary tree are the versatile data structure widely used in the various applications due to the hierarchical nature and efficient performance in the certain operations. Following are some applications of the binary tree:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Full Binary Tree:"})," It is used in the binary heap implementations and it is optimal merge patterns."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Complete Binary Tree:"})," It is used in the binary heaps which are useful in the priority queues and it is used in the efficient storage management such as heap sort."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Perfect Binary Tree:"})," It is used in the complete binary tree implementation for the efficiency and it is perfect for the implementing full binary trees in the array representations."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Balanced Binary Tree:"})," It is used in the AVL and Red-Black trees for the efficient searching operation, insertion operation and deletion operation."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Binary Search Tree (BST):"})," It is used in the database indexing and also it is used in the dictionary and phonebook applications. It is also efficient for the search operation, insert operation and delete operation when it was balanced."]}),e.jsxs("li",{children:[e.jsx("b",{children:"AVL Tree:"})," It is used in the situations where the search time needs to be minimized. It is database applications where the frequent insertions and deletions are expected."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Red-Black Tree:"})," It is used in C++ STL map and multimap implementations."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Segment Tree:"})," It is used in the computational geometry for the problems such as finding intersections, range, queries, etc.,"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Fenwick Tree (Binary Indexed Tree):"})," It is used in the scenarios requiring the dynamic cumulative frequency tables. It is efficient for the frequency queries and updates."]})]})]})]})}),Yj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Heap in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Heap"}),e.jsx("h3",{children:"Heap Data Structures in C"}),e.jsx("p",{children:"A heap is a type of tree data structure where each node is either greater than or equal to or is less than or equal to the values of its children. Depending on this, there are two types of heaps:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Min Heap:"})," Each node is less than or equal to the value of its child subtrees."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Max Heap:"})," Each node is greater than or equal to the value of its child subtrees."]})]}),e.jsx("p",{children:"Apart from this, heap is also a complete tree. It means that all the before the last level have all its children nodes and in the last level, all the children will be filled from left to right."}),e.jsx("h3",{children:"Implementation of Heap in C"}),e.jsx("p",{children:"In C, heaps are typically stored in arrays. This makes them faster to access and modify elements. And due to its completeness, we can easily find the index of the child and parents nodes. Here is how to find child and parent nodes of an element at index i in the array:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Left child: 2 * i + 1"}),e.jsx("li",{children:"Right child: 2 * i + 2"}),e.jsx("li",{children:"Parent: (i - 1) / 2"})]}),e.jsx("p",{children:"All the values are assuming the index starts from 0."}),e.jsx("h3",{children:"Heap Representation in C"}),e.jsx("p",{children:"We can represent heap directly as an array but we will then have to keep the track of the size in another variable and will have to pass this variable as another argument to heap functions. To simplify it, we can create a structure with array and the size variable in it to represent the heap in C."}),e.jsx("pre",{children:`
typedef struct heap {
     int size;
     int capacity;
     int* arr;
} Heap;
`}),e.jsx("h3",{children:"Heap Operations Implementation in C"}),e.jsx("p",{children:"There are seven basic operations that are needed to work with heap data structure:"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Operation Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Time Complexity"}),e.jsx("th",{children:"Space Complexity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Insert"}),e.jsx("td",{children:"Adds a new element to the heap and maintains the heap property."}),e.jsx("td",{children:"O(log n)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Extract Min/Max"}),e.jsx("td",{children:"Removes and returns the minimum/maximum element from the heap."}),e.jsx("td",{children:"O(log n)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Peek"}),e.jsx("td",{children:"Returns the minimum/maximum element without removing it."}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Heapify"}),e.jsx("td",{children:"Reorganizes a subtree for the given node to ensure the heap property holds"}),e.jsx("td",{children:"O(log n)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Delete"}),e.jsx("td",{children:"Removes a specific element from the heap."}),e.jsx("td",{children:"O(log n)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Increase/Decrease Key"}),e.jsx("td",{children:"Changes the value of an existing element in the heap."}),e.jsx("td",{children:"O(log n)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Build Heap"}),e.jsx("td",{children:"Converts an array into a proper min or max heap."}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"O(1)"})]})]}),e.jsx("h3",{children:"Heapify Implementation in C"}),e.jsxs("p",{children:["Heapify function is implemented with the function signature: ",e.jsx("code",{children:"heapify(Heap* heap, int i)"})," where, ",e.jsx("code",{children:"heap"})," is the pointer to Heap and ",e.jsx("code",{children:"i"})," is the index on which heapify is called."]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Check if the left child exists."}),e.jsx("li",{children:"If the left child exists and is greater than the current largest node, mark it as largest."}),e.jsx("li",{children:"Check if the right child exists."}),e.jsx("li",{children:"If the right child exists and is greater than the current largest node, mark it as largest"}),e.jsxs("li",{children:["If the largest node is not the root node, swap the root node with the largest node using the ",e.jsx("code",{children:"swap"})," function."]}),e.jsx("li",{children:"Apply heapify operation to the affected subtree."})]}),e.jsx("h3",{children:"Build Heap Implementation in C"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Get the number of elements in the heap."}),e.jsxs("li",{children:["Identify the starting point for heapification. The function identifies the last non-leaf node in the heap, which is the parent of the last element. This is calculated as ",e.jsx("code",{children:"(n - 1) / 2"}),"."]}),e.jsxs("li",{children:["The function then enters a loop that starts from the last non-leaf node and goes up to the root node. Inside the loop, it calls ",e.jsx("code",{children:"heapify(heap, i)"})," to ensure that the subtree rooted at ",e.jsx("code",{children:"i"})," is a max heap heapifying all the levels."]})]}),e.jsx("h3",{children:"Insert Key Implementation in C"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Check if the max heap is full. If it is, print “MaxHeap overflow” and return from the function."}),e.jsx("li",{children:"If the heap is not full, increase the size of the heap by 1."}),e.jsx("li",{children:"Insert the new value at the end of the heap."}),e.jsxs("li",{children:["If the newly inserted value is greater than its parent, the max heap property is violated. To fix this, the function enters a loop that continues until ",e.jsx("code",{children:"i"})," is not 0 and the parent of ",e.jsx("code",{children:"i"})," is less than ",e.jsx("code",{children:"i"}),". Inside the loop, it swaps the value at ",e.jsx("code",{children:"i"})," with its parent and then updates ",e.jsx("code",{children:"i"})," to be the index of the parent."]})]}),e.jsx("h3",{children:"Extract Min/Max Implementation in C"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Check if the heap is empty. If it is empty, return ",e.jsx("code",{children:"INT_MIN/INT_MAX"})," as an indication that the heap is empty."]}),e.jsxs("li",{children:["Else, store the root value (maximum/minimum value) in ",e.jsx("code",{children:"temp"}),", replace the root with the last element in the heap, and decrement ",e.jsx("code",{children:"heap size"})," by 1."]}),e.jsxs("li",{children:["Call ",e.jsx("code",{children:"Heapify(Heap, 0)"})," to ensure that the new root is the maximum element in the heap."]}),e.jsxs("li",{children:["Finally, return ",e.jsx("code",{children:"temp"}),", which is the extracted maximum value."]})]}),e.jsx("h3",{children:"Delete Key Implementation in C"}),e.jsxs("ol",{children:[e.jsx("li",{children:'Check if the index is valid. If the index is invalid, print "Invalid index" and return from the function.'}),e.jsxs("li",{children:["If the element to be deleted is the last element in the heap, simply decrement ",e.jsx("code",{children:"heap size"})," by 1 and return from the function."]}),e.jsx("li",{children:"Move the last element to the index of the element to be deleted."}),e.jsx("li",{children:"Reduce the size of the heap."}),e.jsxs("li",{children:["Call ",e.jsx("code",{children:"heapify(heap, index)"})," to ensure that the subtree rooted at the given index is a heap."]})]}),e.jsx("h3",{children:"Increase Key Implementation in C"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Check if the index is valid and new value is greater. If it is, print “Invalid index or new value is not greater” and return from the function."}),e.jsx("li",{children:"If the index is valid and the new value is greater, update the value at the given index to the new value."}),e.jsxs("li",{children:["If the updated value is greater than its parent, the max heap property is violated. To fix this, the function enters a loop that continues until ",e.jsx("code",{children:"index"})," is not 0 and the parent of ",e.jsx("code",{children:"index"})," is less than ",e.jsx("code",{children:"index"}),". Inside the loop, it swaps the value at ",e.jsx("code",{children:"index"})," with its parent and then updates ",e.jsx("code",{children:"index"})," to be the index of the parent."]})]}),e.jsx("p",{children:"The decrease key for min heap will also be implemented using the same algorithm."}),e.jsx("h3",{children:"C Program to Implement Heap Data Structure"}),e.jsx("pre",{children:`#include <limits.h>
#include <stdio.h>
#include <stdlib.h>

// Structure to represent a Heap (previously MaxHeap)
typedef struct Heap {
    int* array;
    int size;
    int capacity;
} Heap;

// Function to create a heap
Heap* createHeap(int capacity)
{
    Heap* heap = (Heap*)malloc(sizeof(Heap));
    heap->size = 0;
    heap->capacity = capacity;
    heap->array = (int*)malloc(capacity * sizeof(int));
    return heap;
}

// Function to swap two integers
void swap(int* a, int* b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Function to heapify the node at index i
void heapify(Heap* heap, int i)
{
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < heap->size
        && heap->array[left] > heap->array[largest])
        largest = left;

    if (right < heap->size
        && heap->array[right] > heap->array[largest])
        largest = right;

    if (largest != i) {
        swap(&heap->array[i], &heap->array[largest]);
        heapify(heap, largest);
    }
}

// Function to build a max heap from an existing array
void buildHeap(Heap* heap)
{
    int n = heap->size; // Get the number of elements in the
                        // heap

    // Start from the last non-leaf node (parent of the last
    // leaf) and heapify all levels in reverse order
    for (int i = (n - 1) / 2; i >= 0; i--)
        heapify(heap, i);
}

// Function to increase the value at a given index
void increaseKey(Heap* heap, int index, int newValue)
{
    if (index >= heap->size
        || heap->array[index] >= newValue) {
        printf(
            "Invalid index or new value is not greater
");
        return;
    }

    heap->array[index] = newValue;
    while (index != 0
           && heap->array[(index - 1) / 2]
                  < heap->array[index]) {
        swap(&heap->array[index],
             &heap->array[(index - 1) / 2]);
        index = (index - 1) / 2;
    }
}

// Function to insert a new value into the heap
void insertHeap(Heap* heap, int value)
{
    if (heap->size == heap->capacity) {
        printf("Heap overflow
");
        return;
    }

    heap->size++;
    int i = heap->size - 1;
    heap->array[i] = value;

    // Fix the heap property if it is violated
    while (i != 0
           && heap->array[(i - 1) / 2] < heap->array[i]) {
        swap(&heap->array[i], &heap->array[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}

// Function to extract the root (maximum element)
int extractMax(Heap* heap)
{
    if (heap->size <= 0)
        return INT_MIN;
    if (heap->size == 1) {
        heap->size--;
        return heap->array[0];
    }

    // Store the maximum value, and remove it
    int root = heap->array[0];
    heap->array[0] = heap->array[heap->size - 1];
    heap->size--;
    heapify(heap, 0);

    return root;
}

// Function to print the heap
void printHeap(Heap* heap)
{
    for (int i = 0; i < heap->size; ++i)
        printf("%d ", heap->array[i]);
    printf("
");
}

// Function to delete an element at a given index
void deleteKey(Heap* heap, int index)
{
    if (index >= heap->size) {
        printf("Invalid index
");
        return;
    }

    // If the element to be deleted is the last element,
    // simply reduce size
    if (index == heap->size - 1) {
        heap->size--;
        return;
    }

    // Move the last element to the index of the element to
    // be deleted
    heap->array[index] = heap->array[heap->size - 1];
    heap->size--;

    // Heapify down to maintain heap property
    heapify(heap, index);
}

int main()
{
    Heap* heap = createHeap(10);
    insertHeap(heap, 3);
    insertMaxHeap(maxHeap, 2);
    insertMaxHeap(maxHeap, 15);
    insertMaxHeap(maxHeap, 5);
    insertMaxHeap(maxHeap, 4);
    insertMaxHeap(maxHeap, 45);

    printf("Max Heap array: ");
    printHeap(maxHeap);

    printf("Extracted max value: %d
",
           extractMax(maxHeap));
    printf("Max Heap array after extraction: ");
    printHeap(maxHeap);

    free(maxHeap->array);
    free(maxHeap);
    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Max Heap array: 45 5 15 2 4 3",e.jsx("br",{}),"Extracted max value: 45",e.jsx("br",{}),"Max Heap array after extraction: 15 5 3 2 4"]})]}),e.jsx("p",{children:"The min heap can be easily implemented using the same algorithms. We will just need to change the comparison operator to less than (<)."})]})]})}),Xj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Graphs in C"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Implementation of Graph in C"}),e.jsx("h3",{children:"Graph Data Structure in C"}),e.jsx("p",{children:"Graphs are a versatile data structure that can be used to represent various real-world problems, from social networks to transportation systems. In C, graphs are typically represented using arrays for adjacency matrices or linked lists for adjacency lists. This article will introduce the concept of graphs, their representation in C using pointers and structures, and basic algorithms to perform operations such as traversal, insertion, and deletion."}),e.jsx("h3",{children:"What is a Graph?"}),e.jsx("p",{children:"A graph is defined as a set of nodes that connects two or more nodes with edges often referred to as arcs. The use of graphs is common in modelling different systems in the world, like the social structures, transport structures as well the computer structures."}),e.jsx("h3",{children:"Components of a Graph"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Vertices (Nodes):"})," These are the entities in the graph to check the facts which are shown in the social medial."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Edges (Links):"})," These are the edges which are a way of joining the vertices."]})]}),e.jsx("h3",{children:"Types of Graphs"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Directed Graph:"})," Edges have direction, which means they will refer towards only one of the two connected nodes."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Undirected Graph:"})," In this graph, the edges have no direction."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Weighted Graph:"})," The edges have weights (or costs) which is needed to move on that edge."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Unweighted Graph:"})," Edges do not have weights or all edges share the same weight."]})]}),e.jsx("h3",{children:"Representation of Graphs in C"}),e.jsx("p",{children:"There are various forms of graphs, but the more frequently used are:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Adjacency Matrix"}),e.jsx("li",{children:"Adjacency List"})]}),e.jsx("h3",{children:"1. Adjacency Matrix Graph Representation"}),e.jsx("p",{children:"An adjacency matrix is a two-dimensional matrix used with graphs. It is more efficient that the adjacency list representation when the graph is dense and we need quick access frequently."}),e.jsx("h3",{children:"Algorithm for Creating Adjacency Matrix of a Graph"}),e.jsxs("ol",{children:[e.jsx("li",{children:"In C, we can create a 2D array of size V * V where V is the number of vertices."}),e.jsx("li",{children:"Initially, set all the elements of the matrix to 0."}),e.jsx("li",{children:"For each edge in the graph, if the graph is unweighted, set the corresponding element in the matrix to 1."}),e.jsx("li",{children:"If the graph is weighted, set the corresponding element in the matrix to the weight of the edge."}),e.jsx("li",{children:"If the graph is undirected, the matrix will be symmetric, meaning if there is an edge from node i to node j, there will also be an edge from node j to node i, so both matrix[i][j] and matrix[j][i] should be set."})]}),e.jsx("h3",{children:"Example:"}),e.jsxs("p",{children:["Example Graph:",e.jsx("br",{}),"0 -- 1",e.jsx("br",{}),"|        |",e.jsx("br",{}),"2 -- 3"]}),e.jsxs("p",{children:["Adjacency Matrix:",e.jsx("br",{}),"    0 1 2 3",e.jsx("br",{}),"0 [0 1 1 0]",e.jsx("br",{}),"1 [1 0 0 1]",e.jsx("br",{}),"2 [1 0 0 1]",e.jsx("br",{}),"3 [0 1 1 0]"]}),e.jsx("h3",{children:"Implementing Basic Graph Operations on Adjacency Matrix Representation"}),e.jsx("p",{children:"Following are the basic graph operations on adjacency matrix representation of the graph:"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Operation"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Time Complexity"}),e.jsx("th",{children:"Space Complexity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Insertion"}),e.jsx("td",{children:"Add a vertex or an edge"}),e.jsxs("td",{children:["O(V",e.jsx("sup",{children:"2"}),")"]}),e.jsxs("td",{children:["O(V",e.jsx("sup",{children:"2"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Deletion"}),e.jsx("td",{children:"Remove a vertex or an edge"}),e.jsxs("td",{children:["O(V",e.jsx("sup",{children:"2"}),")"]}),e.jsxs("td",{children:["O(V",e.jsx("sup",{children:"2"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Searching"}),e.jsx("td",{children:"Check if a vertex or an edge exists"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Traversal"}),e.jsx("td",{children:"Visit all vertices (BFS or DFS)"}),e.jsx("td",{children:"O(V + E)"}),e.jsx("td",{children:"O(V)"})]})]}),e.jsx("h3",{children:"Insertion Implementation"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Determine the source vertex (u) and the destination vertex (v) where you want to insert an edge."}),e.jsxs("li",{children:["Use the vertices as indices to access the cell in the adjacency matrix, ",e.jsx("code",{children:"matrix[u][v]"}),"."]}),e.jsxs("li",{children:["Assign a value (typically 1) to indicate an edge between u and v, ",e.jsx("code",{children:"matrix[u][v] = 1"}),". If the graph is weighted, then insert the weight of the edge."]}),e.jsxs("li",{children:["If the graph is undirected, also insert an edge in the opposite direction, ",e.jsx("code",{children:"matrix[v][u] = 1"}),"."]})]}),e.jsx("h3",{children:"Deletion Implementation"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Determine the source vertex (u) and the destination vertex (v) where you want to remove an edge."}),e.jsxs("li",{children:["Use the vertices as indices to access the cell in the adjacency matrix, ",e.jsx("code",{children:"matrix[u][v]"}),"."]}),e.jsxs("li",{children:["Assign a value (typically 0) to indicate no edge between u and v, ",e.jsx("code",{children:"matrix[u][v] = 0"}),"."]}),e.jsxs("li",{children:["If the graph is undirected, also remove the edge in the opposite direction, ",e.jsx("code",{children:"matrix[v][u] = 0"}),"."]})]}),e.jsx("h3",{children:"Search Implementation"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Determine the source vertex (u) and the destination vertex (v) for which you want to check the existence of an edge."}),e.jsxs("li",{children:["Use the vertices as indices to access the cell in the adjacency matrix, ",e.jsx("code",{children:"matrix[u][v]"}),"."]}),e.jsxs("li",{children:["Evaluate the value at ",e.jsx("code",{children:"matrix[u][v]"}),". If it’s 1 (or any non-zero value), an edge exists; if it’s 0, there is no edge."]})]}),e.jsx("h3",{children:"Traversal Implementation (BFS)"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Select a vertex to start the traversal from."}),e.jsx("li",{children:"Initialize a queue to keep track of vertices to visit."}),e.jsx("li",{children:"Add the starting vertex to the queue and mark it as visited."}),e.jsxs("li",{children:["While the queue is not empty, repeat the following steps:",e.jsxs("ul",{children:[e.jsx("li",{children:"Remove a vertex from the queue and process it (e.g., print its value)."}),e.jsxs("li",{children:["Iterate over its adjacent vertices. For each adjacent vertex that is not visited:",e.jsxs("ul",{children:[e.jsx("li",{children:"Mark it as visited."}),e.jsx("li",{children:"Enqueue it."})]})]})]})]}),e.jsx("li",{children:"Keep repeating step 4 until there are no more vertices left to visit."})]}),e.jsx("h3",{children:"Traversal Implementation (DFS)"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsxs("b",{children:["Function ",e.jsx("code",{children:"DFS"}),":"]})," This is the main function that initiates the DFS traversal.",e.jsxs("ul",{children:[e.jsxs("li",{children:["It initializes an array ",e.jsx("code",{children:"visited"})," to keep track of visited vertices."]}),e.jsxs("li",{children:["It calls the utility function ",e.jsx("code",{children:"DFSUtil"})," with the starting vertex and the visited array."]})]})]}),e.jsxs("li",{children:[e.jsxs("b",{children:["Function ",e.jsx("code",{children:"DFSUtil"}),":"]})," This is a recursive utility function that performs the actual DFS traversal.",e.jsxs("ul",{children:[e.jsx("li",{children:"It marks the current node as visited and prints it."}),e.jsxs("li",{children:["It then iterates over all vertices of the graph. For each vertex:",e.jsx("ul",{children:e.jsxs("li",{children:["If there is an edge from the current vertex to the vertex ",e.jsx("code",{children:"i"})," (indicated by ",e.jsx("code",{children:"graph[start][i] == 1"}),") and vertex ",e.jsx("code",{children:"i"})," has not been visited (",e.jsx("code",{children:"!visited[i]"}),"), it recursively calls ",e.jsx("code",{children:"DFSUtil"})," for vertex ",e.jsx("code",{children:"i"}),"."]})})]})]})]})]}),e.jsx("h3",{children:"C Program to Implement Graph using Adjacency Matrix"}),e.jsx("pre",{children:`#include <stdio.h>
#include <stdlib.h>

#define MAX 10
#define TRUE 1
#define FALSE 0

// Function prototypes
void insertEdge(int graph[MAX][MAX], int u, int v);
void deleteEdge(int graph[MAX][MAX], int u, int v);
int searchEdge(int graph[MAX][MAX], int u, int v);
void BFS(int graph[MAX][MAX], int start);
void DFS(int graph[MAX][MAX], int start);
void DFSUtil(int graph[MAX][MAX], int start,
             int visited[MAX]);

int main()
{
    // Initialize adjacency matrix to 0
    int graph[MAX][MAX] = { 0 };

    // Add edges
    insertEdge(graph, 0, 1);
    insertEdge(graph, 0, 2);
    insertEdge(graph, 1, 2);
    insertEdge(graph, 2, 0);
    insertEdge(graph, 2, 3);

    // Perform BFS
    printf("BFS starting from node 2:
");
    BFS(graph, 2);

    // Perform DFS
    printf("DFS starting from node 2:
");
    DFS(graph, 2);

    return 0;
}

// Function to insert an edge into the graph
void insertEdge(int graph[MAX][MAX], int u, int v)
{
    // Set the edge from u to v
    graph[u][v] = 1;
    // Set the edge from v to u (undirected graph)
    graph[v][u] = 1;
}

// Function to delete an edge from the graph
void deleteEdge(int graph[MAX][MAX], int u, int v)
{
    // Remove the edge from u to v
    graph[u][v] = 0;
    // Remove the edge from v to u (undirected graph)
    graph[v][u] = 0;
}

// Function to search for an edge in the graph
int searchEdge(int graph[MAX][MAX], int u, int v)
{
    // Return the existence of edge u-v
    return graph[u][v];
}

// Function to perform BFS traversal
void BFS(int graph[MAX][MAX], int start)
{
    // Initialize visited array
    int visited[MAX] = { 0 };
    int queue[MAX], front = 0, rear = 0;

    // Mark the start node as visited and enqueue it
    visited[start] = TRUE;
    queue[rear++] = start;

    while (front < rear) {
        int current = queue[front++];
        printf("%d ", current);

        // Visit all the adjacent nodes
        for (int i = 0; i < MAX; i++) {
            if (graph[current][i] == 1 && !visited[i]) {
                visited[i] = TRUE;
                queue[rear++] = i;
            }
        }
    }
    printf("
");
}

// Function to perform DFS traversal
void DFS(int graph[MAX][MAX], int start)
{
    // Initialize visited array
    int visited[MAX] = { 0 };
    DFSUtil(graph, start, visited);
    printf("
");
}

// Utility function for DFS traversal
void DFSUtil(int graph[MAX][MAX], int start,
             int visited[MAX])
{
    // Mark the current node as visited and print it
    visited[start] = TRUE;
    printf("%d ", start);

    // Visit all the adjacent nodes
    for (int i = 0; i < MAX; i++) {
        if (graph[start][i] == 1 && !visited[i]) {
            DFSUtil(graph, i, visited);
        }
    }
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["BFS starting from node 2:",e.jsx("br",{}),"2 0 1 3",e.jsx("br",{}),"DFS starting from node 2:",e.jsx("br",{}),"2 0 1 3"]})]}),e.jsx("h3",{children:"2. Adjacency List Graph Representation"}),e.jsx("p",{children:"The adjacency list is a concept in Graph Theory which describes the graph in terms of the array of the linked list. In the context of the given array, each element denotes a vertex and the linked list present at the same index contains all the vertices that are directly connected to the vertex represented by the given element."}),e.jsx("p",{children:"Create an array of linked lists (or arrays of arrays) of size V, where V is the number of vertices."}),e.jsx("p",{children:"For each edge in the graph, add the destination vertex to the list of the source vertex."}),e.jsx("p",{children:"If the graph is undirected, add the source vertex to the list of the destination vertex as well."}),e.jsx("p",{children:"If the graph is weighted, modify each element in the list to store a pair of values: the destination vertex and the weight of the edge."}),e.jsx("h3",{children:"Example"}),e.jsxs("p",{children:["Example Graph:",e.jsx("br",{}),"0 -- 1",e.jsx("br",{}),"|        |",e.jsx("br",{}),"2 -- 3"]}),e.jsxs("p",{children:["Adjacency List:",e.jsx("br",{}),"0: -> 1 -> 2",e.jsx("br",{}),"1: -> 0 -> 3",e.jsx("br",{}),"2: -> 0 -> 3",e.jsx("br",{}),"3: -> 1 -> 2"]}),e.jsx("h3",{children:"Implementing Basic Graph Operations on Adjacency List Representation"}),e.jsx("p",{children:"Following are the basic operations of graph on adjacency list representation:"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Operation"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Time Complexity"}),e.jsx("th",{children:"Space Complexity"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Insertion"}),e.jsx("td",{children:"Add a vertex or an edge"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(V)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Deletion"}),e.jsx("td",{children:"Remove a vertex or an edge"}),e.jsx("td",{children:"O(V)"}),e.jsx("td",{children:"O(V)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Searching"}),e.jsx("td",{children:"Check if a vertex or an edge exists"}),e.jsx("td",{children:"O(V)"}),e.jsx("td",{children:"O(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Traversal"}),e.jsx("td",{children:"Visit all vertices (BFS or DFS)"}),e.jsx("td",{children:"O(V + E)"}),e.jsx("td",{children:"O(V)"})]})]}),e.jsx("h3",{children:"Insertion Implementation"}),e.jsx("p",{children:"To create a new node in the adjacency list, we must set the node to the destination vertex."}),e.jsx("p",{children:"This node should be placed in the beginning of some list that will contain all the nodes for the source vertex. "}),e.jsx("p",{children:"If the graph is undirected, repeat the process for the destination vertex by adding the source point."}),e.jsx("h3",{children:"Deletion Implementation"}),e.jsx("p",{children:"Determine which node is located in the adjacency list of the source node, which provides a reference to the destination node."}),e.jsx("p",{children:"This is a post-order function so simply delete this node from the list."}),e.jsx("p",{children:"However, if the graph is undirected, then there will essentially be two graphs to traverse, so repeat the process with the destination vertex and remove the source vertex."}),e.jsx("h3",{children:"Search Implementation"}),e.jsx("p",{children:"Traverse the adjacency list of the source vertex."}),e.jsx("p",{children:"Check if the destination vertex exists in the list."}),e.jsx("h3",{children:"Traversal Implementation (DFS)"}),e.jsx("p",{children:"Each solution begins at a source node/vertex."}),e.jsx("p",{children:"A flag or marker is placed on the current point to signify that it has been visited before. "}),e.jsx("p",{children:"Next, traverse all adjacent vertices, in reverse in the recursive call."}),e.jsx("h3",{children:"Traversal Implementation (BFS)"}),e.jsx("p",{children:"Starting with a source vertex as the initial node of a path. "}),e.jsx("p",{children:"Employ a queue to dictate how traversal should occur."}),e.jsx("p",{children:"Make the current vertex processed, and then enqueue it."}),e.jsx("p",{children:"Take the vertex from the queue and traverse all the surrounding vertices."}),e.jsx("h3",{children:"C Program to Implement Graph using Adjacency List"}),e.jsx("pre",{children:`#include <stdio.h>
#include <stdlib.h>

// Define the structure for an adjacency list node
struct AdjListNode {
    int dest;
    struct AdjListNode* next;
};

// Define the structure for an adjacency list
struct AdjList {
    struct AdjListNode* head;
};

// Define the structure for a graph
struct Graph {
    int V;
    struct AdjList* array;
};

// Function to create a new adjacency list node
struct AdjListNode* newAdjListNode(int dest)
{
    struct AdjListNode* newNode
        = (struct AdjListNode*)malloc(
            sizeof(struct AdjListNode));
    newNode->dest = dest;
    newNode->next = NULL;
    return newNode;
}

// Function to create a graph of V vertices
struct Graph* createGraph(int V)
{
    struct Graph* graph
        = (struct Graph*)malloc(sizeof(struct Graph));
    graph->V = V;
    graph->array = (struct AdjList*)malloc(
        V * sizeof(struct AdjList));
    for (int i = 0; i < V; ++i)
        graph->array[i].head = NULL;
    return graph;
}

// Function to add an edge to an undirected graph
void addEdge(struct Graph* graph, int src, int dest)
{
    // Add an edge from src to dest
    struct AdjListNode* newNode = newAdjListNode(dest);
    newNode->next = graph->array[src].head;
    graph->array[src].head = newNode;

    // Since graph is undirected, add an edge from dest to
    // src also
    newNode = newAdjListNode(src);
    newNode->next = graph->array[dest].head;
    graph->array[dest].head = newNode;
}

// Function to delete an edge from an undirected graph
void deleteEdge(struct Graph* graph, int src, int dest)
{
    struct AdjListNode* temp = graph->array[src].head;
    struct AdjListNode* prev = NULL;

    // Find and remove the node from the adjacency list of
    // src
    while (temp != NULL && temp->dest != dest) {
        prev = temp;
        temp = temp->next;
    }
    if (temp != NULL) {
        if (prev != NULL)
            prev->next = temp->next;
        else
            graph->array[src].head = temp->next;
        free(temp);
    }

    // Since graph is undirected, remove the src from dest's
    // list
    temp = graph->array[dest].head;
    prev = NULL;
    while (temp != NULL && temp->dest != src) {
        prev = temp;
        temp = temp->next;
    }
    if (temp != NULL) {
        if (prev != NULL)
            prev->next = temp->next;
        else
            graph->array[dest].head = temp->next;
        free(temp);
    }
}

// Function to search an edge in the graph
int searchEdge(struct Graph* graph, int src, int dest)
{
    struct AdjListNode* temp = graph->array[src].head;
    while (temp != NULL) {
        if (temp->dest == dest)
            return 1; // Found
        temp = temp->next;
    }
    return 0; // Not Found
}

// A utility function used by DFS
void DFSUtil(int v, int visited[], struct Graph* graph)
{
    visited[v] = 1;
    printf("%d ", v);

    struct AdjListNode* temp = graph->array[v].head;
    while (temp) {
        int adjVertex = temp->dest;
        if (!visited[adjVertex])
            DFSUtil(adjVertex, visited, graph);
        temp = temp->next;
    }
}

// Function to perform DFS on the graph
void DFS(struct Graph* graph, int startVertex)
{
    int* visited = (int*)malloc(graph->V * sizeof(int));
    for (int i = 0; i < graph->V; i++)
        visited[i] = 0;

    DFSUtil(startVertex, visited, graph);
    free(visited);
}

// Function to perform BFS on the graph
void BFS(struct Graph* graph, int startVertex)
{
    int* visited = (int*)malloc(graph->V * sizeof(int));
    for (int i = 0; i < graph->V; i++)
        visited[i] = 0;

    int* queue = (int*)malloc(graph->V * sizeof(int));
    int front = 0;
    int rear = 0;

    visited[startVertex] = 1;
    queue[rear++] = startVertex;

    while (front < rear) {
        int currentVertex = queue[front++];
        printf("%d ", currentVertex);

        struct AdjListNode* temp
            = graph->array[currentVertex].head;
        while (temp) {
            int adjVertex = temp->dest;
            if (!visited[adjVertex]) {
                visited[adjVertex] = 1;
                queue[rear++] = adjVertex;
            }
            temp = temp->next;
        }
    }

    free(queue);
    free(visited);
}

int main()
{
    // Create the graph given in above figure
    int V = 5;
    struct Graph* graph = createGraph(V);
    addEdge(graph, 0, 1);
    addEdge(graph, 0, 4);
    addEdge(graph, 1, 2);
    addEdge(graph, 1, 3);
    addEdge(graph, 1, 4);
    addEdge(graph, 2, 3);
    addEdge(graph, 3, 4);

    printf("Following is Depth First Traversal (starting "
           "from vertex 0)
");
    DFS(graph, 0);

    printf("
Following is Breadth First Traversal "
           "(starting from vertex 0)
");
    BFS(graph, 0);

    printf("
Searching for edge 1-3: %s
",
           searchEdge(graph, 1, 3) ? "Found" : "Not Found");
    deleteEdge(graph, 1, 3);

    printf("Searching for edge 1-3 after deletion: %s
",
           searchEdge(graph, 1, 3) ? "Found" : "Not Found");

    return 0;
}
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Following is Depth First Traversal (starting from vertex 0)",e.jsx("br",{}),"0 4 3 2 1",e.jsx("br",{}),"Following is Breadth First Traversal (starting from vertex 0)",e.jsx("br",{}),"0 4 1 3 2",e.jsx("br",{}),"Searching for edge 1-3: Found",e.jsx("br",{}),"Searching for edge 1-3 after deletion: Not Found"]})]})]})]})}),Qj=()=>e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Python Tutorial | Learn Python Programming Language"})}),e.jsxs("section",{className:"section",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Python Tutorial:"}),"- Python is one of the most popular programming languages today, known for its simplicity, extensive features and library support. Its clean and straightforward syntax makes it beginner-friendly, while its powerful libraries and frameworks makes it perfect for developers. ",e.jsx("strong",{children:"Python is:"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"A versatile, high-level programming language."}),e.jsx("li",{children:"Easy-to-learn syntax, perfect for beginners and experts."}),e.jsx("li",{children:"Known for its readability and extensive library support."})]}),e.jsx("h3",{children:"First Python Program"}),e.jsx("p",{children:"Here is a simple Python code, printing a string. We recommend we to edit the code and try to print our own name."}),e.jsx("pre",{children:'print("Hello World")'}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsx("p",{children:"Hello World"})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"1. Python Fundamentals"}),e.jsx("p",{children:"In this section, we’ll cover the basics of Python programming, including installing Python, writing first program, understanding comments and working with variables, keywords and operators. These are essential building blocks to get started with Python coding."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(V,{to:"/Pintroduction",children:"Introduction"})}),e.jsx("li",{children:e.jsx(V,{to:"/PInput",children:"Input and Output"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pvariable",children:"Variables"})}),e.jsx("li",{children:e.jsx(V,{to:"/Poperator",children:"Operators"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pkeyword",children:"Keywords"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pdatatype",children:"Data Types"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pconditional",children:"Conditional Statements"})}),e.jsx("li",{children:e.jsx(V,{to:"/Ploop",children:"Python Loops"})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python Function"}),e.jsx("p",{children:"Python Functions are the backbone of organized and efficient code in Python. Here, in this section of Python 3 tutorial we'll explore their syntax, parameter handling, return values and variable scope. From basic concepts to advanced techniques like closures and decorators. Along the way, we'll also introduce versatile functions like range(), map, filter and lambda functions."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(V,{to:"/PDef",children:"def keyword"})}),e.jsx("li",{children:e.jsx(V,{to:"/PUse",children:"Use of pass Statement in Function"})}),e.jsx("li",{children:e.jsx(V,{to:"/Preturn",children:"Return statement"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pglobal",children:"Global and Local Variables"})}),e.jsx("li",{children:e.jsx(V,{to:"/Precursion",children:"Recursion in Python"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pargs",children:"*args and **kwargs in Function"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pself",children:"‘Self’ as Default Argument"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pfirst",children:"First Class Function"})}),e.jsx("li",{children:e.jsx(V,{to:"/Plambda",children:"Lambda Function"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pmap",children:"Map, Reduce and Filter Function"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pinner",children:"Inner Function"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pdeco",children:"Decorators"})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"3. Python Data Structures"}),e.jsx("p",{children:"Python offers versatile collections of data types, including lists, string, tuples, sets, dictionaries and arrays. In this section, we will learn about each data types in detail."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(V,{to:"/Pstring",children:"Strings"})}),e.jsx("li",{children:e.jsx(V,{to:"/Plist",children:"List"})}),e.jsx("li",{children:e.jsx(V,{to:"/Ptuple",children:"Tuples"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pdict",children:"Dictionary"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pset",children:"Sets"})}),e.jsx("li",{children:e.jsx(V,{to:"/Parray",children:"Arrays"})}),e.jsx("li",{children:e.jsx(V,{to:"/Pcom",children:"List Comprehension"})})]})]})]}),Wj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Python Introduction"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Introduction"}),e.jsx("h3",{children:"Introduction to Python Programming"}),e.jsx("p",{children:"Python is a widely used high-level, interpreted programming language. It was created by Guido van Rossum in 1991 and further developed by the Python Software Foundation. It was designed with an emphasis on code readability, and its syntax allows programmers to express their concepts in fewer lines of code. Python is a programming language that lets you work quickly and integrate systems more efficiently."}),e.jsx("h3",{children:"What can we do with Python?"}),e.jsx("p",{children:"Python is used for:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Web Development:"})," Frameworks like Django, Flask."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Data Science and Analysis:"})," Libraries like Pandas, NumPy, Matplotlib."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Machine Learning and AI:"})," TensorFlow, PyTorch, Scikit-learn."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Automation and Scripting:"})," Automate repetitive tasks."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Game Development:"})," Libraries like Pygame."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Web Scraping:"})," Tools like BeautifulSoup, Scrapy."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Desktop Applications:"})," GUI frameworks like Tkinter, PyQt."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Scientific Computing:"})," SciPy, SymPy."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Internet of Things (IoT):"})," MicroPython, Raspberry Pi."]}),e.jsxs("li",{children:[e.jsx("b",{children:"DevOps and Cloud:"})," Automation scripts and APIs."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Cybersecurity:"})," Penetration testing and ethical hacking tools."]})]}),e.jsx("h3",{children:"Key Features of Python"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Easy to Learn and Use:"})," Python’s simple and readable syntax makes it beginner-friendly."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Cross-Platform Compatibility:"})," Python runs seamlessly on Windows, macOS, and Linux."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Extensive Libraries:"})," Includes robust libraries for tasks like web development, data analysis, and machine learning."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Dynamic Typing:"})," Variable types are determined automatically at runtime, simplifying code writing."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Versatile:"})," Supports multiple programming paradigms, including object-oriented, functional, and procedural programming."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Open Source:"})," Python is free to use, distribute, and modify."]})]}),e.jsx("h3",{children:"Why Learn Python?"}),e.jsx("p",{children:"Whether you are a beginner or an experienced developer, both have their own benefits."}),e.jsx("h4",{children:"For Beginners:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Easy Syntax:"})," Python syntax is like plain English, which allows you to focus on logic instead of worrying about complex rules."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Built-in Libraries for Beginners:"})," Python has beginner friendly libraries like random, re, os etc, which can be used while learning fundamentals."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Error Friendly:"})," Python’s error messages are easy to understand and debug."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Project Oriented Learning:"})," You can start making simple projects while learning the Python basics."]})]}),e.jsx("h4",{children:"For Experienced:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Easy Career Transition:"})," If you know any other programming language, moving to Python is super easy."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Great for Upskilling:"})," Moving to Python expands your skill sets and gives opportunity to work in areas like AI, Data Science, web development etc."]}),e.jsxs("li",{children:[e.jsx("b",{children:"High Demand of Python in Emerging tech:"})," Python is widely used in trending domains, like Data Science, Machine Learning, Cloud Computing etc."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Bridge Between Roles:"})," For software developers working with different language, learning Python can help you integrate advanced features like AI in your projects."]})]}),e.jsx("h3",{children:"Hello World in Python"}),e.jsx("p",{children:"Hello, World! in python is the first python program which we learn when we start learning any program. It’s a simple program that displays the message “Hello, World!” on the screen."}),e.jsx("p",{children:"Here’s the “Hello World” program:"}),e.jsx("pre",{children:'print("Hello, World!")'}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello, World!"})]}),e.jsx("h3",{children:"How does this work:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"print()"})," is a built-in function in Python that tells the program to display something on the screen. We need to add the string in parenthesis of print() function that we are displaying on the screen."]}),e.jsx("li",{children:"“Hello, World!” is a string text that we want to display. Strings are always enclosed in quotation marks."})]}),e.jsx("h3",{children:"Python Comments"}),e.jsx("p",{children:"Comments in Python are the lines in the code that are ignored by the interpreter during the execution of the program."}),e.jsx("p",{children:"Comments enhance the readability of the code."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Comment can be used to identify functionality or structure the code-base."}),e.jsx("li",{children:"Comment can help understanding unusual or tricky scenarios handled by the code to prevent accidental removal or changes."}),e.jsx("li",{children:"Comments can be used to prevent executing any specific part of your code, while making changes or testing."})]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`# I am single line comment
""" Multi-line comment used
print("Python Comments")
"""
`}),e.jsx("h3",{children:"Explanation:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"In Python, single line comments starts with hashtag symbol #."}),e.jsx("li",{children:"Python ignores the string literals that are not assigned to a variable. So, we can use these string literals as Python Comments."})]}),e.jsx("h3",{children:"Indentation in Python"}),e.jsx("p",{children:"In Python, indentation is used to define blocks of code. It tells the Python interpreter that a group of statements belongs to a specific block. All statements with the same level of indentation are considered part of the same block. Indentation is achieved using whitespace (spaces or tabs) at the beginning of each line."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`if 10 > 5:
    print("This is true!")
    print("I am tab indentation")
print("I have no indentation")
`}),e.jsx("h3",{children:"Explanation:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"The first two print statements are indented by 4 spaces, so they belong to the if block."}),e.jsx("li",{children:"The third print statement is not indented, so it is outside the if block."})]}),e.jsx("h3",{children:"Famous Application Built using Python"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"YouTube:"})," World’s largest video-sharing platform uses Python for features like video streaming and backend services."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Instagram:"})," This popular social media app relies on Python’s simplicity for scaling and handling millions of users."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Spotify:"})," Python is used for backend services and machine learning to personalize music recommendations."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Dropbox:"})," The file hosting service uses Python for both its desktop client and server-side operations."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Netflix:"})," Python powers key components of Netflix’s recommendation engine and content delivery systems (CDN)."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Google:"})," Python is one of the key languages used in Google for web crawling, testing, and data analysis."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Uber:"})," Python helps Uber handle dynamic pricing and route optimization using machine learning."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Pinterest:"})," Python is used to process and store huge amounts of image data efficiently."]}),e.jsx("li",{children:"and More.."})]})]})]})}),Kj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Input and Output in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python Input and Output Operations"}),e.jsx("p",{children:"Understanding input and output operations is fundamental to Python programming. With the print() function, we can display output in various formats, while the input() function enables interaction with users by gathering input during program execution."}),e.jsx("h3",{children:"Taking input in Python"}),e.jsx("p",{children:"Python input() function is used to take user input. By default, it returns the user input in form of a string. "}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:`name = input("Enter your name: ")
print("Hello,", name, "! Welcome!")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Enter your name: Kowshik",e.jsx("br",{}),"Hello, Kowshik ! Welcome!"]})]}),e.jsx("p",{children:"The code prompts the user to input their name, stores it in the variable “name” and then prints a greeting message addressing the user by their entered name."}),e.jsx("h3",{children:"Printing Output using print() in Python"}),e.jsx("p",{children:"At its core, printing output in Python is straightforward, thanks to the print() function. This function allows us to display text, variables and expressions on the console. Let’s begin with the basic usage of the print() function:"}),e.jsx("p",{children:"In this example, “Hello, World!” is a string literal enclosed within double quotes. When executed, this statement will output the text to the console."}),e.jsx("pre",{children:`
print("Hello, World!")
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello, World!"})]}),e.jsx("h3",{children:"Printing Variables"}),e.jsx("p",{children:"We can use the print() function to print single and multiple variables. We can print multiple variables by separating them with commas. Example:"}),e.jsx("pre",{children:`# Single variable
s = "Bob"
print(s)

# Multiple Variables
s = "Alice"
age = 25
city = "New York"
print(s, age, city)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Bob",e.jsx("br",{}),"Alice 25 New York"]})]}),e.jsx("h3",{children:"Take Multiple Input in Python"}),e.jsx("p",{children:"We are taking multiple input from the user in a single line, splitting the values entered by the user into separate variables for each value using the split() method. Then, it prints the values with corresponding labels, either two or three, based on the number of inputs provided by the user."}),e.jsx("pre",{children:`# taking two inputs at a time
x, y = input("Enter two values: ").split()
print("Number of boys: ", x)
print("Number of girls: ", y)

# taking three inputs at a time
x, y, z = input("Enter three values: ").split()
print("Total number of students: ", x)
print("Number of boys is : ", y)
print("Number of girls is : ", z)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["Enter two values: 5 10",e.jsx("br",{}),"Number of boys:  5",e.jsx("br",{}),"Number of girls:  10",e.jsx("br",{}),"Enter three values: 5 10 15",e.jsx("br",{}),"Total number of students:  5",e.jsx("br",{}),"Number of boys is :  10",e.jsx("br",{}),"Number of girls is :  15"]})]}),e.jsx("h3",{children:"Take Conditional Input from user in Python"}),e.jsx("p",{children:"In this example, the program prompts the user to enter their age. The input is converted to an integer using the int() function. Then, the program uses conditional statements to check the age range and prints a message based on whether the user is a minor, an adult, or a senior citizen."}),e.jsx("pre",{children:`# Prompting the user for input
age_input = input("Enter your age: ")

# Converting the input to an integer
age = int(age_input)

# Checking conditions based on user input
if age < 0:
    print("Please enter a valid age.")
elif age < 18:
    print("You are a minor.")
elif age >= 18 and age < 65:
    print("You are an adult.")
else:
    print("You are a senior citizen.")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Enter your age: 22",e.jsx("br",{}),"You are an adult."]})]}),e.jsx("h3",{children:"How to Change the Type of Input in Python"}),e.jsx("p",{children:"By default input() function helps in taking user input as string. If any user wants to take input as int or float, we just need to typecast it."}),e.jsx("h3",{children:"Print Names in Python"}),e.jsx("p",{children:"The code prompts the user to input a string (the color of a rose), assigns it to the variable color and then prints the inputted color."}),e.jsx("pre",{children:`# Taking input as string
color = input("What color is rose?: ")
print(color)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["What color is rose?: Red",e.jsx("br",{}),"Red"]})]}),e.jsx("h3",{children:"Print Numbers in Python"}),e.jsx("p",{children:"The code prompts the user to input an integer representing the number of roses, converts the input to an integer using typecasting and then prints the integer value."}),e.jsx("pre",{children:`# Taking input as int
# Typecasting to int
n = int(input("How many roses?: "))
print(n)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["How many roses?: 88",e.jsx("br",{}),"88"]})]}),e.jsx("h3",{children:"Print Float/Decimal Number in Python"}),e.jsx("p",{children:"The code prompts the user to input the price of each rose as a floating-point number, converts the input to a float using typecasting and then prints the price."}),e.jsx("pre",{children:`# Taking input as float
# Typecasting to float
price = float(input("Price of each rose?: "))
print(price)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Price of each rose?: 50.30",e.jsx("br",{}),"50.3"]})]}),e.jsx("h3",{children:"Find DataType of Input in Python"}),e.jsx("p",{children:"In the given example, we are printing the type of variable x. We will determine the type of an object in Python."}),e.jsx("pre",{children:`a = "Hello World"
b = 10
c = 11.22
d = ("Geeks", "for", "Geeks")
e = ["Geeks", "for", "Geeks"]
f = {"Geeks": 1, "for":2, "Geeks":3}
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
print(type(f))
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["<class 'str'>",e.jsx("br",{}),"<class 'int'>",e.jsx("br",{}),"<class 'float'>",e.jsx("br",{}),"<class 'tuple'>",e.jsx("br",{}),"<class 'list'>",e.jsx("br",{}),"<class 'dict'>"]})]}),e.jsx("h3",{children:"Output Formatting"}),e.jsx("p",{children:"Output formatting in Python with various techniques including the format() method, manipulation of the sep and end parameters, f-strings and the versatile % operator. These methods enable precise control over how data is displayed, enhancing the readability and effectiveness of your Python programs."}),e.jsx("h4",{children:"Example 1: Using sep and end parameter"}),e.jsx("pre",{children:`# end Parameter with '@'
print("Python", end='@')
print("Kowshik")

# Seprating with Comma
print('G', 'F', 'G', sep='')

# for formatting a date
print('09', '12', '2016', sep='-')

# another example
print('pratik', 'gmail', sep='@')
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Python@GeeksforGeeks",e.jsx("br",{}),"GFG",e.jsx("br",{}),"09-12-2016",e.jsx("br",{}),"pratik@gmail.com"]})]}),e.jsx("h4",{children:"Example 2: Using f-string"}),e.jsx("pre",{children:`name = 'Tushar'
age = 23
print(f"Hello, My name is {name} and I'm {age} years old.")
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello, My name is Tushar and I'm 23 years old."})]}),e.jsx("h4",{children:"Example 3: Using % Operator"}),e.jsx("p",{children:"We can use ‘%’ operator. % values are replaced with zero or more value of elements. The formatting using % is similar to that of ‘printf’ in the C programming language."}),e.jsxs("ul",{children:[e.jsx("li",{children:"%d –integer"}),e.jsx("li",{children:"%f – float"}),e.jsx("li",{children:"%s – string"}),e.jsx("li",{children:"%x –hexadecimal"}),e.jsx("li",{children:"%o – octal"})]}),e.jsx("pre",{children:`# Taking input from the user
num = int(input("Enter a value: "))
add = num + 5

# Output
print("The sum is %d" % add)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Enter a value: 50",e.jsx("br",{}),"The sum is 55"]})]})]})]})}),Zj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Variables in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python Variables"}),e.jsx("p",{children:"In Python, variables are used to store data that can be referenced and manipulated during program execution. A variable is essentially a name that is assigned to a value. Unlike many other programming languages, Python variables do not require explicit declaration of type. The type of the variable is inferred based on the value assigned."}),e.jsx("p",{children:"Variables act as placeholders for data. They allow us to store and reuse values in our program."}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:`# Variable 'x' stores the integer value 10
x = 5

# Variable 'name' stores the string "Samantha"
name = "Samantha"

print(x)
print(name)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["5",e.jsx("br",{}),"Samantha"]})]}),e.jsx("p",{children:"In this article, we’ll explore the concept of variables in Python, including their syntax, characteristics and common operations."}),e.jsx("h3",{children:"Rules for Naming Variables"}),e.jsx("p",{children:"To use variables effectively, we must follow Python’s naming rules:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Variable names can only contain letters, digits and underscores (_)."}),e.jsx("li",{children:"A variable name cannot start with a digit."}),e.jsx("li",{children:"Variable names are case-sensitive (myVar and myvar are different)."}),e.jsx("li",{children:"Avoid using Python keywords (e.g., if, else, for) as variable names."})]}),e.jsx("h4",{children:"Valid Example:"}),e.jsx("pre",{children:`age = 21
_colour = "lilac"
total_score = 90
`}),e.jsx("h4",{children:"Invalid Example:"}),e.jsx("pre",{children:`1name = "Error"  # Starts with a digit
class = 10       # 'class' is a reserved keyword
user-name = "Doe"  # Contains a hyphen
`}),e.jsx("h3",{children:"Assigning Values to Variables"}),e.jsx("h3",{children:"Basic Assignment"}),e.jsx("p",{children:"Variables in Python are assigned values using the = operator."}),e.jsx("pre",{children:`x = 5
y = 3.14
z = "Hi"
`}),e.jsx("h3",{children:"Dynamic Typing"}),e.jsx("p",{children:"Python variables are dynamically typed, meaning the same variable can hold different types of values during execution."}),e.jsx("pre",{children:`x = 10
x = "Now a string"
`}),e.jsx("h3",{children:"Multiple Assignments"}),e.jsx("p",{children:"Python allows multiple variables to be assigned values in a single line."}),e.jsx("h3",{children:"Assigning the Same Value"}),e.jsx("p",{children:"Python allows assigning the same value to multiple variables in a single line, which can be useful for initializing variables with the same value."}),e.jsx("pre",{children:`a = b = c = 100
print(a, b, c)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"100 100 100"})]}),e.jsx("h3",{children:"Assigning Different Values"}),e.jsx("p",{children:"We can assign different values to multiple variables simultaneously, making the code concise and easier to read."}),e.jsx("pre",{children:`x, y, z = 1, 2.5, "Python"
print(x, y, z)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1 2.5 Python"})]}),e.jsx("h3",{children:"Type Casting a Variable"}),e.jsx("p",{children:"Type casting refers to the process of converting the value of one data type into another. Python provides several built-in functions to facilitate casting, including int(), float() and str() among others."}),e.jsx("h4",{children:"Basic Casting Functions"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"int()"})," – Converts compatible values to an integer."]}),e.jsxs("li",{children:[e.jsx("code",{children:"float()"})," – Transforms values into floating-point numbers."]}),e.jsxs("li",{children:[e.jsx("code",{children:"str()"})," – Converts any data type into a string."]})]}),e.jsx("h4",{children:"Examples of Casting:"}),e.jsx("pre",{children:`# Casting variables
s = "10"  # Initially a string
n = int(s)  # Cast string to integer
cnt = 5
f = float(cnt)  # Cast integer to float
age = 25
s2 = str(age)  # Cast integer to string

# Display results
print(n)
print(f)
print(s2)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["10",e.jsx("br",{}),"5.0",e.jsx("br",{}),"25"]})]}),e.jsx("h3",{children:"Getting the Type of Variable"}),e.jsxs("p",{children:["In Python, we can determine the type of a variable using the ",e.jsx("code",{children:"type()"})," function. This built-in function returns the type of the object passed to it."]}),e.jsx("h4",{children:"Example Usage of type()"}),e.jsx("pre",{children:`# Define variables with different data types
n = 42
f = 3.14
s = "Hello, World!"
li = [1, 2, 3]
d = {'key': 'value'}
bool = True

# Get and print the type of each variable
print(type(n))
print(type(f))
print(type(s))
print(type(li))
print(type(d))
print(type(bool))
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["<class 'int'>",e.jsx("br",{}),"<class 'float'>",e.jsx("br",{}),"<class 'str'>",e.jsx("br",{}),"<class 'list'>",e.jsx("br",{}),"<class 'dict'>",e.jsx("br",{}),"<class 'bool'>"]})]}),e.jsx("h3",{children:"Scope of a Variable"}),e.jsx("p",{children:"There are two methods how we define scope of a variable in python which are local and global."}),e.jsx("h3",{children:"Local Variables:"}),e.jsx("p",{children:"Variables defined inside a function are local to that function."}),e.jsx("pre",{children:`def f():
    a = "I am local"
    print(a)

f()
# print(a)  # This would raise an error since 'local_var' is not accessible outside the function
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"I am local"})]}),e.jsx("h3",{children:"Global Variables:"}),e.jsx("p",{children:"Variables defined outside any function are global and can be accessed inside functions using the global keyword."}),e.jsx("pre",{children:`a = "I am global"

def f():
    global a
    a = "Modified globally"
    print(a)

f()
print(a)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Modified globally",e.jsx("br",{}),"Modified globally"]})]}),e.jsx("h3",{children:"Object Reference in Python"}),e.jsx("p",{children:"Let us assign a variable x to value 5."}),e.jsx("pre",{children:`x = 5
`}),e.jsx("p",{children:"When x = 5 is executed, Python creates an object to represent the value 5 and makes x reference this object."}),e.jsx("p",{children:"Now, if we assign another variable y to the variable x."}),e.jsx("pre",{children:`y = x
`}),e.jsx("h4",{children:"Explanation:"}),e.jsx("p",{children:"Python encounters the first statement, it creates an object for the value 5 and makes x reference it. The second statement creates y and references the same object as x, not x itself. This is called a Shared Reference, where multiple variables reference the same object."}),e.jsx("p",{children:"Now, if we write"}),e.jsx("pre",{children:`x = 'Shiva'
`}),e.jsx("p",{children:'Python creates a new object for the value "Geeks" and makes x reference this new object.'}),e.jsx("h3",{children:"Explanation:"}),e.jsx("p",{children:"The variable y remains unchanged, still referencing the original object 5."}),e.jsx("p",{children:"If we now assign a new value to y:"}),e.jsx("pre",{children:`y = "Computer"
`}),e.jsx("p",{children:'Python creates yet another object for "Computer" and updates y to reference it.'}),e.jsx("p",{children:"The original object 5 no longer has any references and becomes eligible for garbage collection."}),e.jsx("h4",{children:"Key Takeaways:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Python variables hold references to objects, not the actual objects themselves."}),e.jsx("li",{children:"Reassigning a variable does not affect other variables referencing the same object unless explicitly updated."})]}),e.jsx("h3",{children:"Delete a Variable Using del Keyword"}),e.jsx("p",{children:"We can remove a variable from the namespace using the del keyword. This effectively deletes the variable and frees up the memory it was using."}),e.jsx("h4",{children:"Example:"}),e.jsx("pre",{children:`# Assigning value to variable
x = 10
print(x)

# Removing the variable using del
del x

# Trying to print x after deletion will raise an error
# print(x)  # Uncommenting this line will raise NameError: name 'x' is not defined
`}),e.jsx("h3",{children:"Explanation:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"del x"})," removes the variable x from memory."]}),e.jsx("li",{children:"After deletion, trying to access the variable x results in a NameError, indicating that the variable no longer exists."})]})]})]})}),Jj=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Operator in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python Operators"}),e.jsx("p",{children:"In Python programming, Operators in general are used to perform operations on values and variables. These are standard symbols used for logical and arithmetic operations. In this article, we will look into different types of Python operators. "}),e.jsxs("p",{children:[e.jsx("b",{children:"OPERATORS:"})," These are the special symbols. Eg- + , * , /, etc."]}),e.jsxs("p",{children:[e.jsx("b",{children:"OPERAND:"})," It is the value on which the operator is applied."]}),e.jsx("h3",{children:"Types of Operators in Python"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Arithmetic Operators"}),e.jsx("li",{children:"Comparison Operators"}),e.jsx("li",{children:"Logical Operators"}),e.jsx("li",{children:"Bitwise Operators"}),e.jsx("li",{children:"Assignment Operators"}),e.jsx("li",{children:"Identity Operators and Membership Operators"})]}),e.jsx("h3",{children:"Arithmetic Operators in Python"}),e.jsx("p",{children:"Python Arithmetic operators are used to perform basic mathematical operations like addition, subtraction, multiplication and division."}),e.jsx("p",{children:"In Python 3.x the result of division is a floating-point while in Python 2.x division of 2 integers was an integer. To obtain an integer result in Python 3.x floored (// integer) is used."}),e.jsx("h4",{children:"Example of Arithmetic Operators in Python:"}),e.jsx("pre",{children:`# Variables
a = 15
b = 4

# Addition
print("Addition:", a + b)

# Subtraction
print("Subtraction:", a - b)

# Multiplication
print("Multiplication:", a * b)

# Division
print("Division:", a / b)

# Floor Division
print("Floor Division:", a // b)

# Modulus
print("Modulus:", a % b)

# Exponentiation
print("Exponentiation:", a ** b)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Addition: 19",e.jsx("br",{}),"Subtraction: 11",e.jsx("br",{}),"Multiplication: 60",e.jsx("br",{}),"Division: 3.75",e.jsx("br",{}),"Floor Division: 3",e.jsx("br",{}),"Modulus: 3",e.jsx("br",{}),"Exponentiation: 50625"]})]}),e.jsx("h3",{children:"Comparison of Python Operators"}),e.jsx("p",{children:"In Python Comparison of Relational operators compares the values. It either returns True or False according to the condition."}),e.jsx("h4",{children:"Example of Comparison Operators in Python"}),e.jsx("p",{children:"Let’s see an example of Comparison Operators in Python."}),e.jsx("pre",{children:`a = 13
b = 33

print(a > b)
print(a < b)
print(a == b)
print(a != b)
print(a >= b)
print(a <= b)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["False",e.jsx("br",{}),"True",e.jsx("br",{}),"False",e.jsx("br",{}),"True",e.jsx("br",{}),"False",e.jsx("br",{}),"True"]})]}),e.jsx("h3",{children:"Logical Operators in Python"}),e.jsx("p",{children:"Python Logical operators perform Logical AND, Logical OR and Logical NOT operations. It is used to combine conditional statements."}),e.jsx("p",{children:"The precedence of Logical Operators in Python is as follows:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Logical not"}),e.jsx("li",{children:"logical and"}),e.jsx("li",{children:"logical or"})]}),e.jsx("h4",{children:"Example of Logical Operators in Python:"}),e.jsx("pre",{children:`a = True
b = False

print(a and b)
print(a or b)
print(not a)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["False",e.jsx("br",{}),"True",e.jsx("br",{}),"False"]})]}),e.jsx("h3",{children:"Bitwise Operators in Python"}),e.jsx("p",{children:"Python Bitwise operators act on bits and perform bit-by-bit operations. These are used to operate on binary numbers."}),e.jsx("p",{children:"Bitwise Operators in Python are as follows:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Bitwise NOT"}),e.jsx("li",{children:"Bitwise Shift"}),e.jsx("li",{children:"Bitwise AND"}),e.jsx("li",{children:"Bitwise XOR"}),e.jsx("li",{children:"Bitwise OR"})]}),e.jsx("h4",{children:"Example of Bitwise Operators in Python:"}),e.jsx("pre",{children:`a = 10
b = 4

print(a & b)
print(a | b)
print(~a)
print(a ^ b)
print(a >> 2)
print(a << 2)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["0",e.jsx("br",{}),"14",e.jsx("br",{}),"-11",e.jsx("br",{}),"14",e.jsx("br",{}),"2",e.jsx("br",{}),"40"]})]}),e.jsx("h3",{children:"Assignment Operators in Python"}),e.jsx("p",{children:"Python Assignment operators are used to assign values to the variables. This operator is used to assign the value of the right side of the expression to the left side operand."}),e.jsx("h4",{children:"Example of Assignment Operators in Python:"}),e.jsx("pre",{children:`a = 10
b = a
print(b)

b += a
print(b)

b -= a
print(b)

b *= a
print(b)

b <<= a
print(b)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["10",e.jsx("br",{}),"20",e.jsx("br",{}),"10",e.jsx("br",{}),"100",e.jsx("br",{}),"102400"]})]}),e.jsx("h3",{children:"Identity Operators in Python"}),e.jsx("p",{children:"In Python, is and is not are the identity operators both are used to check if two values are located on the same part of the memory. Two variables that are equal do not imply that they are identical. "}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"is"}),"      True if the operands are identical"]}),e.jsxs("li",{children:[e.jsx("code",{children:"is not"}),"     True if the operands are not identical"]})]}),e.jsx("h4",{children:"Example of Identity Operators in Python:"}),e.jsx("pre",{children:`a = 10
b = 20
c = a

print(a is not b)
print(a is c)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["True",e.jsx("br",{}),"True"]})]}),e.jsx("h3",{children:"Membership Operators in Python"}),e.jsx("p",{children:"In Python, in and not in are the membership operators that are used to test whether a value or variable is in a sequence."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"in"}),"          True if value is found in the sequence"]}),e.jsxs("li",{children:[e.jsx("code",{children:"not in"}),"        True if value is not found in the sequence"]})]}),e.jsx("h4",{children:"Examples of Membership Operators in Python:"}),e.jsx("pre",{children:`x = 24
y = 20
list = [10, 20, 30, 40, 50]

if (x not in list):
    print("x is NOT present in given list")
else:
    print("x is present in given list")

if (y in list):
    print("y is present in given list")
else:
    print("y is NOT present in given list")
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output:"}),e.jsxs("p",{children:["x is NOT present in given list",e.jsx("br",{}),"y is present in given list"]})]}),e.jsx("h3",{children:"Ternary Operator in Python"}),e.jsx("p",{children:"in Python, Ternary operators also known as conditional expressions are operators that evaluate something based on a condition being true or false. It was added to Python in version 2.5. "}),e.jsx("p",{children:"It simply allows testing a condition in a single line replacing the multiline if-else making the code compact."}),e.jsxs("p",{children:[e.jsx("b",{children:"Syntax :"})," ",e.jsx("code",{children:"[on_true] if [expression] else [on_false]"})," "]})]})]})}),$j=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Keywords in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python Keywords"}),e.jsx("p",{children:"Keywords in Python are reserved words that have special meanings and serve specific purposes in the language syntax. Python keywords cannot be used as the names of variables, functions, and classes or any other identifier."}),e.jsx("h3",{children:"List of Keywords in Python"}),e.jsxs("p",{children:[e.jsx("code",{children:"True"}),", ",e.jsx("code",{children:"False"}),", ",e.jsx("code",{children:"None"}),", ",e.jsx("code",{children:"and"}),", ",e.jsx("code",{children:"or"}),", ",e.jsx("code",{children:"not"}),", ",e.jsx("code",{children:"is"}),", ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"else"}),", ",e.jsx("code",{children:"elif"}),", ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"while"}),", ",e.jsx("code",{children:"break"}),", ",e.jsx("code",{children:"continue"}),", ",e.jsx("code",{children:"pass"}),", ",e.jsx("code",{children:"try"}),", ",e.jsx("code",{children:"except"}),", ",e.jsx("code",{children:"finally"}),", ",e.jsx("code",{children:"raise"}),", ",e.jsx("code",{children:"assert"}),", ",e.jsx("code",{children:"def"}),", ",e.jsx("code",{children:"return"}),", ",e.jsx("code",{children:"lambda"}),", ",e.jsx("code",{children:"yield"}),", ",e.jsx("code",{children:"class"}),", ",e.jsx("code",{children:"import"}),", ",e.jsx("code",{children:"from"}),", ",e.jsx("code",{children:"in"}),", ",e.jsx("code",{children:"as"}),", ",e.jsx("code",{children:"del"}),", ",e.jsx("code",{children:"global"}),", ",e.jsx("code",{children:"with"}),", ",e.jsx("code",{children:"nonlocal"}),", ",e.jsx("code",{children:"async"}),", ",e.jsx("code",{children:"await"})]}),e.jsx("h3",{children:"Getting List of all Python keywords"}),e.jsx("p",{children:"We can also get all the keyword names using the below code."}),e.jsx("pre",{children:`import keyword

# printing all keywords at once using "kwlist()"
print("The list of keywords is : ")
print(keyword.kwlist)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["The list of keywords are: ",e.jsx("br",{}),`['False', 'None', 'True', "__peg_parser__", 'and', 'as', 'assert', 'async', 'await', 'break',`,e.jsx("br",{}),"'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if',",e.jsx("br",{}),"'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']"]})]}),e.jsx("h3",{children:"How to Identify Python Keywords ?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"With Syntax Highlighting"})," – Most of IDEs provide syntax-highlight feature. You can see Keywords appearing in different color or style."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Look for SyntaxError"})," – This error will encounter if you have used any keyword incorrectly. Note that keywords can not be used as identifiers (variable or a function name)."]})]}),e.jsx("p",{children:"Let’s categorize all keywords based on context and understand each with help of example."}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Keywords"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Value Keywords"}),e.jsxs("td",{children:[e.jsx("code",{children:"True"}),", ",e.jsx("code",{children:"False"}),", ",e.jsx("code",{children:"None"}),", ",e.jsx("code",{children:"del"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Operator Keywords"}),e.jsxs("td",{children:[e.jsx("code",{children:"and"}),", ",e.jsx("code",{children:"or"}),", ",e.jsx("code",{children:"not"}),", ",e.jsx("code",{children:"in"}),", ",e.jsx("code",{children:"is"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Control Flow Keywords"}),e.jsxs("td",{children:[e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"else"}),", ",e.jsx("code",{children:"elif"}),", ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"while"}),", ",e.jsx("code",{children:"break"}),", ",e.jsx("code",{children:"continue"}),", ",e.jsx("code",{children:"pass"}),", ",e.jsx("code",{children:"try"}),", ",e.jsx("code",{children:"except"}),", ",e.jsx("code",{children:"finally"}),", ",e.jsx("code",{children:"raise"}),", ",e.jsx("code",{children:"assert"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Function and Class"}),e.jsxs("td",{children:[e.jsx("code",{children:"def"}),", ",e.jsx("code",{children:"return"}),", ",e.jsx("code",{children:"lambda"}),", ",e.jsx("code",{children:"yield"}),", ",e.jsx("code",{children:"class"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Context Management"}),e.jsxs("td",{children:[e.jsx("code",{children:"with"}),", ",e.jsx("code",{children:"as"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Import and Module"}),e.jsxs("td",{children:[e.jsx("code",{children:"import"}),", ",e.jsx("code",{children:"from"}),", ",e.jsx("code",{children:"as"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Scope and Namespace"}),e.jsxs("td",{children:[e.jsx("code",{children:"global"}),", ",e.jsx("code",{children:"nonlocal"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Async Programming"}),e.jsxs("td",{children:[e.jsx("code",{children:"async"}),", ",e.jsx("code",{children:"await"})]})]})]}),e.jsx("h3",{children:"Value Keywords: True, False, None Keyword, del"}),e.jsxs("p",{children:[e.jsx("b",{children:"True, False:"})," These represent a boolean values."]}),e.jsxs("p",{children:[e.jsx("b",{children:"None:"})," This is a special constant used to denote a null value or a void. It’s important to remember that 0, any empty container(e.g. empty list) does not compute to None. It is an object of its datatype – NoneType. It is not possible to create multiple None objects and can assign them to variables."]}),e.jsx("pre",{children:`print(False == 0)
print(True == 1)
# True + True + True is  3
print(True + True + True)
# True + False + False is  1
print(True + False + False)
# None isn't equal to  0  or an empty list []
print(None == 0)
print(None == [])
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["True",e.jsx("br",{}),"True",e.jsx("br",{}),"3",e.jsx("br",{}),"1",e.jsx("br",{}),"False",e.jsx("br",{}),"False"]})]}),e.jsx("h3",{children:"Operator Keywords: and, or, not, in, is"}),e.jsxs("p",{children:[e.jsx("b",{children:"and Keyword"})," – return ‘True’ if both the operands are ‘True’"]}),e.jsxs("p",{children:[e.jsx("b",{children:"or Keyword"})," – return ‘True’ if at least one operand is ‘True’"]}),e.jsxs("p",{children:[e.jsx("b",{children:"not keyword"})," – returns ‘True’ if the expression is ‘False’, and vice versa."]}),e.jsx("pre",{children:`a = True
b = False

# Logical operations
print(a and b)  # AND: True if both a and b are True
print(a or b)   # OR: True if at least one of a or b is True
print(not a)    # NOT: Inverts the value of a
`}),e.jsxs("p",{children:[e.jsx("b",{children:"in keyword"})," (membership operator) – Check if a value exists in a sequence (like a list, tuple, or string). It returns True if value is found."]}),e.jsx("pre",{children:`# example 1
print(3 in [1,2,3])

# example 2
if 's' in 'geeksforgeeks':
    print("s is part of geeksforgeeks")
else:
    print("s is not part of geeksforgeeks")
`}),e.jsxs("p",{children:[e.jsx("b",{children:"is keyword"})," – Check if two variables point to the same object in memory. It returns True if the objects are identical."]}),e.jsx("pre",{children:`# example 1
print(2 is 2)

# example 2
a = [1, 2, 3]
b = a
c = [1, 2, 3]

# True: a and b refer to the same object
print(a is b)

# False: a and c have same value but are different objects
print(a is c)
`}),e.jsx("h3",{children:"Conditional keywords in Python: if, else, elif"}),e.jsxs("p",{children:[e.jsx("b",{children:"if"})," :Truth expression forces control to go in “if” statement block."]}),e.jsxs("p",{children:[e.jsx("b",{children:"else"})," :False expression forces control to go in “else” statement block."]}),e.jsxs("p",{children:[e.jsx("b",{children:"elif"})," : It is short for “else if”"]}),e.jsx("pre",{children:`x = 0

# python if elif else statement
if x > 0:
    print("Positive")
elif x < 0:
    print("Negative")
else:
    print("Zero")
`}),e.jsx("h3",{children:"Iteration Keywords: for, while, break, continue, pass in Python"}),e.jsxs("p",{children:[e.jsx("b",{children:"for:"})," This keyword is used to control flow and for looping."]}),e.jsxs("p",{children:[e.jsx("b",{children:"while:"})," Has a similar working like “for”, used to control flow and for looping."]}),e.jsxs("p",{children:[e.jsx("b",{children:"break:"})," “break” is used to control the flow of the loop. The statement is used to break out of the loop and passes the control to the statement following immediately after loop."]}),e.jsxs("p",{children:[e.jsx("b",{children:"continue:"})," “continue” is also used to control the flow of code. The keyword skips the current iteration of the loop but does not end the loop."]}),e.jsx("pre",{children:`# 'for' loop example
for num in range(3):
    if num == 2:
        continue  # Skip number 2
    print(num)

# Output: 0 1

# 'while' loop example
count = 0
while count < 4:
    count += 1
    if count == 3:
        break  # Exit the loop when count reaches 4
    print(count)

# Output: 1 2
`}),e.jsxs("p",{children:[e.jsx("b",{children:"pass keyword:"})," ",e.jsx("code",{children:"pass"})," is the null statement in python. Nothing happens when this is encountered. This is used to prevent indentation errors and used as a placeholder."]}),e.jsxs("p",{children:["The code contains a ",e.jsx("code",{children:"for"})," loop that iterates 10 times with a placeholder statement ‘pass', indicating no specific action is taken within the loop."]}),e.jsx("pre",{children:`n = 10
for i in range(n):
    # pass can be used as placeholder
    # when code is to added later
    pass
`}),e.jsx("h3",{children:"Exception Handling Keywords"}),e.jsxs("p",{children:[e.jsx("b",{children:"try :"})," This keyword is used for exception handling, used to catch the errors in the code using the keyword ",e.jsx("code",{children:"except"}),". Code in “try” block is checked, if there is any type of error, except block is executed."]}),e.jsxs("p",{children:[e.jsx("b",{children:"except :"})," As explained above, this works with “try” to catch exceptions."]}),e.jsxs("p",{children:[e.jsx("b",{children:"finally :"})," No matter what is result of the “try” block, “finally” is always executed."]}),e.jsxs("p",{children:[e.jsx("b",{children:"raise:"})," We can raise an exception explicitly with the ",e.jsx("code",{children:"raise"})," keyword"]}),e.jsxs("p",{children:[e.jsx("b",{children:"assert:"})," This function is used for debugging purposes. Usually used to check the correctness of code. If a statement is evaluated to be true, nothing happens but when it is false, ” AssertionError ” is raised. One can also print a message with the error, separated by a comma ."]}),e.jsx("h4",{children:"Example 1: The provided code demonstrates the use of several keywords in Python:"}),e.jsxs("p",{children:[e.jsx("code",{children:"try"})," and ",e.jsx("code",{children:"except"})," : Used to handle exceptions, particularly the ",e.jsx("code",{children:"ZeroDivisionError"})," , and print an error message if it occurs."]}),e.jsxs("p",{children:[e.jsx("code",{children:"finally"})," : This block is always executed, and it prints “This is always executed” regardless of whether an exception occurs."]}),e.jsxs("p",{children:[e.jsx("code",{children:"assert"})," : Checks a condition, and if it’s ",e.jsx("code",{children:"False"})," , raises an ",e.jsx("code",{children:"AssertionError"})," with the message “Divide by 0 error.”"]}),e.jsxs("p",{children:[e.jsx("code",{children:"raise"})," : Raises a custom exception (",e.jsx("code",{children:"TypeError"}),") with a specified error message if a condition is not met."]}),e.jsx("pre",{children:`a, b = 4, 0
try:
    k = a // b  # Attempt integer division (4 // 0)
    print(k)
    # This block catches the ZeroDivisionError
except ZeroDivisionError: 
    print("Can't divide by zero")
finally:
    # This block is always executed regardless of the exception
    print('This is always executed')

print("The value of a / b is : ")
# Will raise an AssertionError because b == 0
assert b != 0, "Divide by 0 error"  # Division is attempted but will not reach due to assert
print(a / b)

# Raise a TypeError if the strings are different
temp = "geeks for geeks"
if temp != "geeks":
    raise TypeError("Both the strings are different.")
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["Can't divide by zero",e.jsx("br",{}),"This is always executed",e.jsx("br",{}),"The value of a / b is :",e.jsx("br",{}),"AssertionError: Divide by 0 error"]})]}),e.jsxs("h4",{children:["Example 2: This code uses the ",e.jsx("code",{children:"raise"})," keyword to raise a custom ",e.jsx("code",{children:"TypeError"})," exception if two strings are not equal."]}),e.jsx("pre",{children:`temp = "geeks for geeks"
if temp != "geeks":
    raise TypeError("Both the strings are different.")
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"TypeError: Both the strings are different."})]}),e.jsx("h3",{children:"del Keyword in Python"}),e.jsxs("p",{children:[e.jsx("code",{children:"del"})," is used to delete a reference to an object. Any variable or list value can be deleted using del."]}),e.jsx("pre",{children:`s = "GeeksForGeeks"
print(s)
del s
print(s)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"NameError: name 's' is not defined"})]}),e.jsx("h3",{children:"Structure Keywords : def, class, return, lambda"}),e.jsxs("p",{children:[e.jsx("b",{children:"def keyword"})," – Defines a function named ",e.jsx("code",{children:"fun"})," using the ",e.jsx("code",{children:"def"})," keyword. When the function is called using ",e.jsx("code",{children:"fun()"}),"."]}),e.jsx("pre",{children:`def fun():
    print("Inside Function")

fun()
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Inside Function"})]}),e.jsxs("p",{children:[e.jsx("b",{children:"class"})," – ",e.jsx("code",{children:"class"})," keyword is used to declare user defined classes."]}),e.jsxs("p",{children:["This code defines a Python class named ",e.jsx("code",{children:"Dog"})," with two class attributes, ",e.jsx("code",{children:"attr1"})," and ",e.jsx("code",{children:"attr2"}),"."]}),e.jsx("pre",{children:`class Dog:
    attr1 = "mammal"
    attr2 = "dog"
`}),e.jsx("h3",{children:"Return Keywords – Return, Yield"}),e.jsxs("p",{children:[e.jsx("b",{children:"return :"})," This keyword is used to return from the function."]}),e.jsxs("p",{children:[e.jsx("b",{children:"yield :"})," This keyword is used like return statement but is used to return a generator."]}),e.jsx("h4",{children:"Return and Yield Keyword use in Python"}),e.jsx("p",{children:"The ‘return' keyword is used to return a final result from a function, and it exits the function immediately. In contrast, the ‘yield' keyword is used to create a generator, and it allows the function to yield multiple values without exiting. When ‘return' is used, it returns a single value and ends the function, while ‘yield' returns multiple values one at a time and keeps the function’s state."}),e.jsx("pre",{children:`# Return keyword
def fun():
    # Assign the value 2 to variable S
    s = 2
    # Return the value of S
    return s

# Call the function and print the result
print(fun())

# Yield Keyword
def fun():
    # Yield the value 1, pausing the function here
    yield 1
    # Yield the value 2, pausing the function again
    yield 2
    # Yield the value 3, pausing the function once more
    yield 3

# Iterate through the values yielded by the function
for value in fun():
    print(value)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["2",e.jsx("br",{}),"1",e.jsx("br",{}),"2",e.jsx("br",{}),"3"]})]}),e.jsx("h3",{children:"Lambda Keyword in Python"}),e.jsxs("p",{children:[e.jsx("code",{children:"Lambda"})," keyword is used to make inline returning functions with no statements allowed internally. "]}),e.jsx("pre",{children:`# Lambda keyword
g = lambda x: x*x*x
print(g(7))
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"343"})]}),e.jsx("h3",{children:"Context Keywords: With, as Keyword in Python"}),e.jsx("h4",{children:"with Keyword in Python"}),e.jsxs("p",{children:[e.jsx("code",{children:"with"})," keyword is used to wrap the execution of block of code within methods defined by context manager. This keyword is not used much in day to day programming."]}),e.jsxs("p",{children:["This code demonstrates how to use the ",e.jsx("code",{children:"with"})," statement to open a file named ",e.jsx("code",{children:"'file_path'"})," in write mode ",e.jsx("code",{children:"('w')"}),". It writes the text ",e.jsx("code",{children:"'hello world !'"})," to the file and automatically handles the opening and closing of the file. ",e.jsx("code",{children:"with"})," statement is used for better resource management and ensures that the file is properly closed after the block is executed."]}),e.jsx("pre",{children:`# using with statement
with open('file_path', 'w') as file:
    file.write('hello world !')
`}),e.jsx("h4",{children:"as Keyword In Python"}),e.jsxs("p",{children:[e.jsx("code",{children:"as"})," keyword is used to create the alias for the module imported. i.e giving a new name to the imported module. E.g import math as mymath."]}),e.jsxs("p",{children:["This code uses the Python ",e.jsx("code",{children:"math"})," module, which has been imported with the alias ",e.jsx("code",{children:"gfg"}),". It calculates and prints the factorial of 5. The ",e.jsx("code",{children:"math.factorial()"})," function is used to calculate the factorial of a number, and in this case, it calculates the factorial of 5, which is 120."]}),e.jsx("pre",{children:`import math as gfg
print(gfg.factorial(5))
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"120"})]}),e.jsx("h3",{children:"Import and Module: Import, From in Python"}),e.jsxs("p",{children:[e.jsx("b",{children:"import"})," : This statement is used to include a particular module into current program."]}),e.jsxs("p",{children:[e.jsx("b",{children:"from"})," : Generally used with import, from is used to import particular functionality from the module imported."]}),e.jsx("h4",{children:"Import, From Keyword uses in Python"}),e.jsx("p",{children:"The ‘import' keyword is used to import modules or specific functions/classes from modules, making them accessible in your code. The ‘from' keyword is used with‘import' to specify which specific functions or classes you want to import from a module. In your example, both approaches import the ‘factorial' function from the ‘math' module, allowing you to use it directly in your code."}),e.jsx("pre",{children:`# import keyword
from math import factorial
import math
print(math.factorial(10))

# from keyword
print(factorial(10))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["3628800",e.jsx("br",{}),"3628800"]})]}),e.jsx("h3",{children:"Scope and Namespace: Global, Nonlocal in Python"}),e.jsxs("p",{children:[e.jsx("b",{children:"global:"})," This keyword is used to define a variable inside the function to be of a global scope."]}),e.jsxs("p",{children:[e.jsx("b",{children:"non-local :"})," This keyword works similar to the global, but rather than global, this keyword declares a variable to point to variable of outside enclosing function, in case of nested functions."]}),e.jsx("h4",{children:"Global and nonlocal keyword uses in Python"}),e.jsx("p",{children:"In this code, the ‘global' keyword is used to declare global variables ‘a' and ‘b'. Then, there’s a function ‘add' that adds these global variables and prints the result."}),e.jsxs("p",{children:["The second part of the code demonstrates the ‘nonlocal' keyword. The function ",e.jsx("code",{children:"fun"})," contains a variable ",e.jsx("code",{children:"var1"}),", and within the nested function ",e.jsx("code",{children:"gun"}),", we use ",e.jsx("code",{children:"nonlocal"})," to indicate that we want to modify the ",e.jsx("code",{children:"var1"})," defined in the outer function ",e.jsx("code",{children:"fun"}),". It increments the value of ",e.jsx("code",{children:"var1"})," and prints it."]}),e.jsx("pre",{children:`a = 15
b = 10

def add():
    # Add global variables a and b
    c = a + b
    print(c)

add()  # Output: 25

def fun():
    # Local variable in fun()
    var = 10

    def gun():
        # Modify var1 in the enclosing scope (fun)
        nonlocal var
        var += 10
        print(var)

    gun()

fun() # Output: 20
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["25",e.jsx("br",{}),"20"]})]}),e.jsx("h3",{children:"Async Programming: async, await"}),e.jsxs("p",{children:["Async programming allows you to run tasks concurrently, improving efficiency, especially when dealing with I/O-bound operations. The ",e.jsx("code",{children:"async"})," and ",e.jsx("code",{children:"await"})," keywords in Python are used to define and manage asynchronous functions."]}),e.jsxs("p",{children:[e.jsx("b",{children:"async:"})," Used to declare a function as asynchronous, allowing it to run concurrently with other tasks."]}),e.jsx("pre",{children:`import asyncio

async def func():
    print("Hello, async world!")
`}),e.jsxs("p",{children:[e.jsx("b",{children:"await:"})," Used to pause the execution of an async function until the awaited task is complete."]}),e.jsx("pre",{children:`import asyncio

# Define an asynchronous main function
async def main():
    await func()

# Define another async function that prints a message
async def func():
    print("Hello, async world!")

# Run the main function using asyncio.run
asyncio.run(main())
`})]})]})}),eg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Data Type in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python Data Types"}),e.jsx("p",{children:"Python Data types are the classification or categorization of data items. It represents the kind of value that tells what operations can be performed on a particular data. Since everything is an object in Python programming, Python data types are classes and variables are instances (objects) of these classes. The following are the standard or built-in data types in Python:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Numeric – int, float, complex"}),e.jsx("li",{children:"Sequence Type – string, list, tuple"}),e.jsx("li",{children:"Mapping Type – dict"}),e.jsx("li",{children:"Boolean – bool"}),e.jsx("li",{children:"Set Type – set, frozenset"}),e.jsx("li",{children:"Binary Types – bytes, bytearray, memoryview"})]}),e.jsx("p",{children:"DataTypes"}),e.jsx("p",{children:"This code assigns variable ‘x’ different values of few Python data types – int, float, list, tuple and string. Each assignment replaces the previous value, making ‘x’ take on the data type and value of the most recent assignment."}),e.jsx("pre",{children:`
# int, float, string, list and set
x = 50
x = 60.5
x = "Hello World"
x = ["geeks", "for", "geeks"]
x = ("geeks", "for", "geeks")
`}),e.jsx("h3",{children:"1. Numeric Data Types in Python"}),e.jsx("p",{children:"The numeric data type in Python represents the data that has a numeric value. A numeric value can be an integer, a floating number, or even a complex number. These values are defined as Python int, Python float and Python complex classes in Python."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Integers – This value is represented by int class. It contains positive or negative whole numbers (without fractions or decimals). In Python, there is no limit to how long an integer value can be."}),e.jsx("li",{children:"Float – This value is represented by the float class. It is a real number with a floating-point representation. It is specified by a decimal point. Optionally, the character e or E followed by a positive or negative integer may be appended to specify scientific notation."}),e.jsx("li",{children:"Complex Numbers – A complex number is represented by a complex class. It is specified as (real part) + (imaginary part)j . For example – 2+3j"})]}),e.jsx("pre",{children:`
a = 5
print(type(a))
b = 5.0
print(type(b))
c = 2 + 4j
print(type(c))
`}),e.jsx("div",{class:"output",children:e.jsxs("p",{children:[">class 'int'<",e.jsx("br",{}),">class 'float'<",e.jsx("br",{}),">class 'complex'<"]})}),e.jsx("h3",{children:"2. Sequence Data Types in Python"}),e.jsx("p",{children:"The sequence Data Type in Python is the ordered collection of similar or different Python data types. Sequences allow storing of multiple values in an organized and efficient fashion. There are several sequence data types of Python:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Python String"}),e.jsx("li",{children:"Python List"}),e.jsx("li",{children:"Python Tuple"})]}),e.jsx("h3",{children:"String Data Type"}),e.jsx("p",{children:"Python Strings are arrays of bytes representing Unicode characters. In Python, there is no character data type Python, a character is a string of length one. It is represented by str class."}),e.jsx("p",{children:"Strings in Python can be created using single quotes, double quotes or even triple quotes. We can access individual characters of a String using index."}),e.jsx("pre",{children:`
s = 'Welcome to the Geeks World'
print(s)
# check data type
print(type(s))
# access string with index
print(s[1])
print(s[2])
print(s[-1])
`}),e.jsx("div",{class:"output",children:e.jsxs("p",{children:["Welcome to the Geeks World",e.jsx("br",{}),">class 'str' <",e.jsx("br",{}),"e",e.jsx("br",{}),"l",e.jsx("br",{}),"d"]})}),e.jsx("h3",{children:"List Data Type"}),e.jsx("p",{children:"Lists are just like arrays, declared in other languages which is an ordered collection of data. It is very flexible as the items in a list do not need to be of the same type."}),e.jsx("h4",{children:"Creating a List in Python"}),e.jsx("p",{children:"Lists in Python can be created by just placing the sequence inside the square brackets[]."}),e.jsx("pre",{children:`
# Empty list
a = []
# list with int values
a = [1, 2, 3]
print(a)
# list with mixed int and string
b = ["Geeks", "For", "Geeks", 4, 5]
print(b)
`}),e.jsx("div",{class:"output",children:e.jsxs("p",{children:["[1, 2, 3]",e.jsx("br",{}),"['Geeks', 'For', 'Geeks', 4, 5]"]})}),e.jsx("h3",{children:"Access List Items"}),e.jsx("p",{children:"In order to access the list items refer to the index number. In Python, negative sequence indexes represent positions from the end of the array. Instead of having to compute the offset as in List[len(List)-3], it is enough to just write List[-3]. Negative indexing means beginning from the end, -1 refers to the last item, -2 refers to the second-last item, etc."}),e.jsx("pre",{children:`
a = ["Geeks", "For", "Geeks"]
print("Accessing element from the list")
print(a[0])
print(a[2])
print("Accessing element using negative indexing")
print(a[-1])
print(a[-3])
`}),e.jsx("div",{class:"output",children:e.jsxs("p",{children:["Accessing element from the list",e.jsx("br",{}),"Geeks",e.jsx("br",{}),"Geeks",e.jsx("br",{}),"Accessing element using negative indexing",e.jsx("br",{}),"Geeks",e.jsx("br",{}),"Geeks"]})}),e.jsx("h3",{children:"Tuple Data Type"}),e.jsx("p",{children:"Just like a list, a tuple is also an ordered collection of Python objects. The only difference between a tuple and a list is that tuples are immutable. Tuples cannot be modified after it is created."}),e.jsx("h3",{children:"Creating a Tuple in Python"}),e.jsx("p",{children:"In Python Data Types, tuples are created by placing a sequence of values separated by a ‘comma’ with or without the use of parentheses for grouping the data sequence. Tuples can contain any number of elements and of any datatype (like strings, integers, lists, etc.)."}),e.jsx("p",{children:"Note: Tuples can also be created with a single element, but it is a bit tricky. Having one element in the parentheses is not sufficient, there must be a trailing ‘comma’ to make it a tuple."}),e.jsx("pre",{children:`
# initiate empty tuple
tup1 = ()
tup2 = ('Geeks', 'For')
print("\\nTuple with the use of String: ", tup2)
`}),e.jsx("div",{class:"output",children:e.jsx("p",{children:"\\nTuple with the use of String:  ('Geeks', 'For')"})}),e.jsx("p",{children:"Note – The creation of a Python tuple without the use of parentheses is known as Tuple Packing."}),e.jsx("h4",{children:"Access Tuple Items"}),e.jsx("p",{children:"In order to access the tuple items refer to the index number. Use the index operator [ ] to access an item in a tuple."}),e.jsx("pre",{children:`
tup1 = tuple([1, 2, 3, 4, 5])
# access tuple items
print(tup1[0])
print(tup1[-1])
print(tup1[-3])
`}),e.jsx("div",{class:"output",children:e.jsxs("p",{children:["1",e.jsx("br",{}),"5",e.jsx("br",{}),"3"]})}),e.jsx("h3",{children:"3. Boolean Data Type in Python"}),e.jsx("p",{children:"Python Data type with one of the two built-in values, True or False. Boolean objects that are equal to True are truthy (true), and those equal to False are falsy (false). However non-Boolean objects can be evaluated in a Boolean context as well and determined to be true or false. It is denoted by the class bool."}),e.jsx("p",{children:"Example: The first two lines will print the type of the boolean values True and False, which is >class ‘bool’< The third line will cause an error, because true is not a valid keyword in Python. Python is case-sensitive, which means it distinguishes between uppercase and lowercase letters."}),e.jsx("pre",{children:`
print(type(True))<br/>
print(type(False))
print(type(true))
`}),e.jsx("div",{class:"output",children:e.jsxs("pre",{children:[">class 'bool'<",e.jsx("br",{}),">class 'bool'<",e.jsx("br",{}),"Traceback (most recent call last):",e.jsx("br",{}),'File "/home/7e8862763fb66153d70824099d4f5fb7.py", line 8, in ',e.jsx("br",{}),"print(type(true))",e.jsx("br",{}),"NameError: name 'true' is not defined"]})}),e.jsx("h3",{children:"4. Set Data Type in Python"}),e.jsx("p",{children:"In Python Data Types, Set is an unordered collection of data types that is iterable, mutable, and has no duplicate elements. The order of elements in a set is undefined though it may consist of various elements."}),e.jsx("h3",{children:"Create a Set in Python"}),e.jsx("p",{children:"Sets can be created by using the built-in set() function with an iterable object or a sequence by placing the sequence inside curly braces, separated by a ‘comma’. The type of elements in a set need not be the same, various mixed-up data type values can also be passed to the set."}),e.jsx("p",{children:"Example: The code is an example of how to create sets using different types of values, such as strings, lists, and mixed values"}),e.jsx("pre",{children:`
# initializing empty set
s1 = set()
s1 = set("GeeksForGeeks")
print("Set with the use of String: ", s1)
s2 = set(["Geeks", "For", "Geeks"])
print("Set with the use of List: ", s2)
`}),e.jsx("div",{class:"output",children:e.jsxs("p",{children:["Set with the use of String:  ","r",e.jsx("br",{}),"Set with the use of List:  ","For"]})}),e.jsx("h4",{children:"Access Set Items"}),e.jsx("p",{children:"Set items cannot be accessed by referring to an index, since sets are unordered the items have no index. But we can loop through the set items using a for loop, or ask if a specified value is present in a set, by using the in the keyword."}),e.jsx("pre",{children:`
set1 = set(["Geeks", "For", "Geeks"])
print(set1)
# loop through set
for i in set1:
    print(i, end=" ")
# check if item exist in set
print("\\nGeeks" in set1)
`}),e.jsx("div",{class:"output",children:e.jsxs("p",{children:["For","Geeks For True"]})}),e.jsx("h2",{children:"5. Dictionary Data Type"}),e.jsx("p",{children:"A dictionary in Python is a collection of data values, used to store data values like a map, unlike other Python Data Types that hold only a single value as an element, a Dictionary holds a key: value pair. Key-value is provided in the dictionary to make it more optimized. Each key-value pair in a Dictionary is separated by a colon : , whereas each key is separated by a ‘comma’."}),e.jsx("h4",{children:"Create a Dictionary in Python"}),e.jsx("p",{children:"Values in a dictionary can be of any datatype and can be duplicated, whereas keys can’t be repeated and must be immutable. The dictionary can also be created by the built-in function dict()."}),e.jsx("p",{children:"Note – Dictionary keys are case sensitive, the same name but different cases of Key will be treated distinctly."}),e.jsx("pre",{children:`
# initialize empty dictionary
d = {}
d = {1: 'Hi', 2: 'Hello', 3: 'Hey'}
print(d)
# creating dictionary using dict() constructor
d1 = dict({1: 'Hi', 2: 'Hello', 3: 'Hey'})
print(d1)
`}),e.jsx("div",{class:"output",children:e.jsx("p",{children:`{1: 'Hi', 2: 'Hello', 3: 'Hey'}
{1: 'Hi', 2: 'Hello', 3: 'Hey'}`})}),e.jsx("h4",{children:"Accessing Key-value in Dictionary"}),e.jsx("p",{children:"In order to access the items of a dictionary refer to its key name. Key can be used inside square brackets. Using get() method we can access the dictionary elements."}),e.jsx("pre",{children:`
d = {1: 'Geeks', 'name': 'For', 3: 'You'}
# Accessing an element using key
print(d['name'])
# Accessing a element using get
print(d.get(3))
`}),e.jsx("div",{class:"output",children:e.jsx("p",{children:"For You"})})]})]})}),tg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Conditional Statements"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Conditional Statements in Python"}),e.jsx("p",{children:"Last Updated : 08 Mar, 2025"}),e.jsx("p",{children:"Conditional statements in Python are used to execute certain blocks of code based on specific conditions. These statements help control the flow of a program, making it behave differently in different situations."}),e.jsx("h3",{children:"If Conditional Statement in Python"}),e.jsx("p",{children:"If statement is the simplest form of a conditional statement. It executes a block of code if the given condition is true."}),e.jsx("pre",{children:`
age = 20
if age >= 18:
    print("Eligible to vote.")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Eligible to vote."})]}),e.jsx("h3",{children:"Short Hand if"}),e.jsx("p",{children:"Short-hand if statement allows us to write a single-line if statement."}),e.jsx("pre",{children:`
age = 19
if age > 18: print("Eligible to Vote.")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Eligible to Vote."})]}),e.jsx("p",{children:"This is a compact way to write an if statement. It executes the print statement if the condition is true."}),e.jsx("h3",{children:"If else Conditional Statements in Python"}),e.jsx("p",{children:"Else allows us to specify a block of code that will execute if the condition(s) associated with an if or elif statement evaluates to False. Else block provides a way to handle all other cases that don't meet the specified conditions."}),e.jsx("pre",{children:`
age = 10
if age <= 12:
    print("Travel for free.")
else:
    print("Pay for ticket.")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Travel for free."})]}),e.jsx("h3",{children:"Short Hand if-else"}),e.jsx("p",{children:"The short-hand if-else statement allows us to write a single-line if-else statement."}),e.jsx("pre",{children:`
marks = 45
res = "Pass" if marks >= 40 else "Fail"
print(f"Result: {res}")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Result: Pass"})]}),e.jsx("p",{children:"Note: This method is also known as ternary operator. Ternary Operator essentially a shorthand for the if-else statement that allows us to write more compact and readable code, especially for simple conditions."}),e.jsx("h3",{children:"elif Statement"}),e.jsx("p",{children:'elif statement in Python stands for "else if." It allows us to check multiple conditions , providing a way to execute different blocks of code based on which condition is true. Using elif statements makes our code more readable and efficient by eliminating the need for multiple nested if statements.'}),e.jsx("pre",{children:`
age = 25
if age <= 12:
    print("Child.")
elif age <= 19:
    print("Teenager.")
elif age <= 35:
    print("Young adult.")
else:
    print("Adult.")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Young adult."})]}),e.jsx("p",{children:"Here, the first condition x > 15 is False, so the elif condition x > 5 is checked next. Since it is True, the corresponding block is executed."}),e.jsx("h3",{children:"Nested if..else Conditional Statements in Python"}),e.jsx("p",{children:"Nested if..else means an if-else statement inside another if statement. We can use nested if statements to check conditions within conditions."}),e.jsx("pre",{children:`
age = 70
is_member = True
if age >= 60:
    if is_member:
        print("30% senior discount!")
    else:
        print("20% senior discount.")
else:
    print("Not eligible for a senior discount.")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"30% senior discount!"})]}),e.jsx("h3",{children:"Ternary Conditional Statement in Python"}),e.jsx("p",{children:'A ternary conditional statement is a compact way to write an if-else condition in a single line. It’s sometimes called a "conditional expression."'}),e.jsx("pre",{children:`
# Assign a value based on a condition
age = 20
s = "Adult" if age >= 18 else "Minor"
print(s)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Adult"})]}),e.jsx("p",{children:"Here:"}),e.jsxs("ul",{children:[e.jsx("li",{children:'If age >= 18 is True, status is assigned "Adult".'}),e.jsx("li",{children:'Otherwise, status is assigned "Minor".'})]}),e.jsx("h3",{children:"Match-Case Statement in Python"}),e.jsx("p",{children:"match-case statement is Python's version of a switch-case found in other languages. It allows us to match a variable's value against a set of patterns."}),e.jsx("pre",{children:`
number = 2
match number:
    case 1:
        print("One")
    case 2 | 3:
        print("Two or Three")
    case _:
        print("Other number")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Two or Three"})]})]})]})}),ng=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Loops in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Loops in Python – For, While and Nested Loops"}),e.jsx("p",{children:"Loops in Python are used to repeat actions efficiently. The main types are For loops (counting through items) and While loops (based on conditions). Additionally, Nested Loops allow looping within loops for more complex tasks. While all the ways provide similar basic functionality, they differ in their syntax and condition-checking time. In this article, we will look at Python loops and understand their working with the help of examples."}),e.jsx("h3",{children:"While Loop in Python"}),e.jsx("p",{children:"In Python, a while loop is used to execute a block of statements repeatedly until a given condition is satisfied. When the condition becomes false, the line immediately after the loop in the program is executed."}),e.jsx("p",{children:"Python While Loop Syntax:"}),e.jsx("pre",{children:`
while expression:
    statement(s)
`}),e.jsx("p",{children:"All the statements indented by the same number of character spaces after a programming construct are considered to be part of a single block of code. Python uses indentation as its method of grouping statements."}),e.jsx("p",{children:"Example of Python While Loop:"}),e.jsx("pre",{children:`
cnt = 0
while (cnt < 3):
    cnt = cnt + 1
    print("Hello study")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello study"}),e.jsx("p",{children:"Hello study"}),e.jsx("p",{children:"Hello study"})]}),e.jsx("h3",{children:"Using else statement with While Loop in Python"}),e.jsx("p",{children:"Else clause is only executed when our while condition becomes false. If we break out of the loop or if an exception is raised then it won’t be executed."}),e.jsx("p",{children:"Syntax of While Loop with else statement:"}),e.jsx("pre",{children:`
while condition:
     # execute these statements
else:
     # execute these statements
`}),e.jsx("p",{children:"Example: The code prints “Hello study” three times using a ‘while’ loop and then after the loop it prints “In Else Block” because there is an “else” block associated with the ‘while’ loop."}),e.jsx("pre",{children:`
cnt = 0
while (cnt < 3):
    cnt = cnt + 1
    print("Hello study")
else:
    print("In Else Block")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello study"}),e.jsx("p",{children:"Hello study"}),e.jsx("p",{children:"Hello study"}),e.jsx("p",{children:"In Else Block"})]}),e.jsx("h3",{children:"Infinite While Loop in Python"}),e.jsx("p",{children:"If we want a block of code to execute infinite number of times then we can use the while loop in Python to do so."}),e.jsx("p",{children:"The code given below uses a ‘while’ loop with the condition (count == 0) and this loop will only run as long as count is equal to 0. Since count is initially set to 0, the loop will execute indefinitely because the condition is always true."}),e.jsx("pre",{children:`
count = 0
while (count == 0):
    print("Hello study")
`}),e.jsx("p",{children:"Note: It is suggested not to use this type of loop as it is a never-ending infinite loop where the condition is always true and we have to forcefully terminate the compiler."}),e.jsx("h3",{children:"For Loop in Python"}),e.jsx("p",{children:"For loops are used for sequential traversal. For example: traversing a list or string or array etc. In Python, there is “for in” loop which is similar to foreach loop in other languages. Let us learn how to use for loops in Python for sequential traversals with examples."}),e.jsx("p",{children:"For Loop Syntax:"}),e.jsx("pre",{children:`
for iterator_var in sequence:
    statements(s)
`}),e.jsx("pre",{children:`
n = 4
for i in range(0, n):
    print(i)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"0"}),e.jsx("p",{children:"1"}),e.jsx("p",{children:"2"}),e.jsx("p",{children:"3"})]}),e.jsx("p",{children:"Explanation: This code prints the numbers from 0 to 3 (inclusive) using a for loop that iterates over a range from 0 to n-1 (where n = 4)."}),e.jsx("h3",{children:"Example with List, Tuple, String, and Dictionary Iteration Using for Loops in Python"}),e.jsx("p",{children:"We can use for loop to iterate lists, tuples, strings and dictionaries in Python."}),e.jsx("pre",{children:`
li = ["study", "for", "study"]
for i in li:
    print(i)
tup = ("study", "for", "study")
for i in tup:
    print(i)
s = "study"
for i in s:
    print(i)
d = dict({'x':123, 'y':354})
for i in d:
    print("%s  %d" % (i, d[i]))
set1 = {1, 2, 3, 4, 5, 6}
for i in set1:
    print(i),
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"study"}),e.jsx("p",{children:"for"}),e.jsx("p",{children:"study"}),e.jsx("p",{children:"study"}),e.jsx("p",{children:"for"}),e.jsx("p",{children:"study"}),e.jsx("p",{children:"s"}),e.jsx("p",{children:"t"}),e.jsx("p",{children:"u"}),e.jsx("p",{children:"d"}),e.jsx("p",{children:"y"}),e.jsx("p",{children:"x  123"}),e.jsx("p",{children:"y  354"}),e.jsx("p",{children:"1"}),e.jsx("p",{children:"2"}),e.jsx("p",{children:"3"}),e.jsx("p",{children:"4"}),e.jsx("p",{children:"5"}),e.jsx("p",{children:"6"})]}),e.jsx("h3",{children:"Iterating by the Index of Sequences"}),e.jsx("p",{children:"We can also use the index of elements in the sequence to iterate. The key idea is to first calculate the length of the list and in iterate over the sequence within the range of this length."}),e.jsx("pre",{children:`
list = ["study", "for", "study"]
for index in range(len(list)):
    print(list[index])
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"study"}),e.jsx("p",{children:"for"}),e.jsx("p",{children:"study"})]}),e.jsx("p",{children:"Explanation: This code iterates through each element of the list using its index and prints each element one by one. The range(len(list)) generates indices from 0 to the length of the list minus 1."}),e.jsx("h3",{children:"Using else Statement with for Loop in Python"}),e.jsx("p",{children:"We can also combine else statement with for loop like in while loop. But as there is no condition in for loop based on which the execution will terminate so the else block will be executed immediately after for block finishes execution."}),e.jsx("pre",{children:`
list = ["study", "for", "study"]
for index in range(len(list)):
    print(list[index])
else:
    print("Inside Else Block")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"study"}),e.jsx("p",{children:"for"}),e.jsx("p",{children:"study"}),e.jsx("p",{children:"Inside Else Block"})]}),e.jsx("p",{children:"Explanation: The code iterates through the list and prints each element. After the loop ends it prints “Inside Else Block” as the else block executes when the loop completes without a break."}),e.jsx("h3",{children:"Nested Loops in Python"}),e.jsx("p",{children:"Python programming language allows to use one loop inside another loop which is called nested loop. Following section shows few examples to illustrate the concept."}),e.jsx("p",{children:"Nested Loops Syntax:"}),e.jsx("pre",{children:`
for iterator_var in sequence:
   for iterator_var in sequence:
       statements(s)
   statements(s)
`}),e.jsx("p",{children:"The syntax for a nested while loop statement in the Python programming language is as follows:"}),e.jsx("pre",{children:`
while expression:
   while expression: 
       statement(s)
   statement(s)
`}),e.jsx("p",{children:"A final note on loop nesting is that we can put any type of loop inside of any other type of loops in Python. For example, a for loop can be inside a while loop or vice versa"}),e.jsx("pre",{children:`
from __future__ import print_function
for i in range(1, 5):
    for j in range(i):
        print(i, end=' ')
    print()
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1 "}),e.jsx("p",{children:"2 2 "}),e.jsx("p",{children:"3 3 3 "}),e.jsx("p",{children:"4 4 4 4 "})]}),e.jsx("p",{children:"Explanation: In the above code we use nested loops to print the value of i multiple times in each row, where the number of times it prints i increases with each iteration of the outer loop. The print() function prints the value of i and moves to the next line after each row."}),e.jsx("h3",{children:"Loop Control Statements"}),e.jsx("p",{children:"Loop control statements change execution from their normal sequence. When execution leaves a scope, all automatic objects that were created in that scope are destroyed. Python supports the following control statements."}),e.jsx("h3",{children:"Continue Statement"}),e.jsx("p",{children:"The continue statement in Python returns the control to the beginning of the loop."}),e.jsx("pre",{children:`
for letter in 'studyforstudy':
    if letter == 'e' or letter == 's':
        continue
    print('Current Letter :', letter)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Current Letter : t"}),e.jsx("p",{children:"Current Letter : u"}),e.jsx("p",{children:"Current Letter : d"}),e.jsx("p",{children:"Current Letter : y"}),e.jsx("p",{children:"Current Letter : f"}),e.jsx("p",{children:"Current Letter : o"}),e.jsx("p",{children:"Current Letter : r"}),e.jsx("p",{children:"Current Letter : t"}),e.jsx("p",{children:"Current Letter : u"}),e.jsx("p",{children:"Current Letter : d"}),e.jsx("p",{children:"Current Letter : y"})]}),e.jsx("p",{children:"Explanation: The continue statement is used to skip the current iteration of a loop and move to the next iteration. It is useful when we want to bypass certain conditions without terminating the loop."}),e.jsx("h3",{children:"Break Statement"}),e.jsx("p",{children:"The break statement in Python brings control out of the loop."}),e.jsx("pre",{children:`
for letter in 'studyforstudy':
    if letter == 'e' or letter == 's':
        break
print('Current Letter :', letter)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Current Letter : s"})]}),e.jsx("p",{children:"Explanation: break statement is used to exit the loop prematurely when a specified condition is met. In this example, the loop breaks when the letter is either ‘e’ or ‘s’, stopping further iteration."}),e.jsx("h3",{children:"Pass Statement"}),e.jsx("p",{children:"We use pass statement in Python to write empty loops. Pass is also used for empty control statements, functions and classes."}),e.jsx("pre",{children:`
for letter in 'studyforstudy':
    pass
print('Last Letter :', letter)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Last Letter : y"})]}),e.jsx("p",{children:"Explanation: In this example, the loop iterates over each letter in ‘studyforstudy’ but doesn’t perform any operation, and after the loop finishes, the last letter (‘y’) is printed."})]})]})}),ig=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Def Keyword"})}),e.jsxs("section",{className:"section",children:[e.jsxs("h2",{children:["The ",e.jsx("strong",{children:"def"})," Keyword in Python"]}),e.jsxs("p",{children:["In Python, the ",e.jsx("strong",{children:"def"})," keyword is used to define a function. Functions are reusable blocks of code that perform a specific task. They help organize code, make it more readable, and prevent code duplication."]}),e.jsx("h3",{children:"Basic Syntax"}),e.jsxs("p",{children:["The basic syntax for defining a function in Python using the ",e.jsx("strong",{children:"def"})," keyword is as follows:"]}),e.jsx("pre",{children:`def function_name(parameters):
    """Docstring: Describes what the function does."""
    # Function body: Code that performs the task
    return value  # Optional: Returns a value
`}),e.jsx("h3",{children:"Explanation"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"def"}),": This keyword indicates the start of a function definition."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"function_name"}),": This is the name of the function. It should be descriptive and follow Python's naming conventions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"parameters"}),": These are optional inputs to the function, enclosed in parentheses. They allow you to pass values into the function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Docstring"}),": This is an optional string literal that describes what the function does. It's good practice to include docstrings for all functions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Function body"}),": This is the block of code that performs the function's task. It's indented to indicate that it's part of the function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"return"}),": This keyword is used to return a value from the function. It's optional; if not included, the function returns ",e.jsx("span",{class:"highlight",children:"None"}),"."]})]}),e.jsx("h3",{children:"Example"}),e.jsxs("p",{children:["Here's a simple example of a function defined using the ",e.jsx("span",{class:"highlight",children:"def"})," keyword:"]}),e.jsx("pre",{children:`def greet(name):
    """Greets the person with the provided name."""
    return f"Hello, {name}!"

message = greet("Alice")
print(message)
    `}),e.jsxs("p",{children:["In this example, the ",e.jsx("strong",{children:"greet"})," function takes a ",e.jsx("strong",{children:"name"}),' as a parameter and returns a greeting message. When called with the argument "Alice", it returns "Hello, Alice!".']}),e.jsx("h2",{children:"Key Benefits"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability"}),": Functions can be called multiple times, reducing code duplication."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modularity"}),": Functions break down complex tasks into smaller, manageable pieces."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Readability"}),": Functions improve code readability by giving meaningful names to blocks of code."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Organization"}),": Functions help organize code into logical units, making it easier to maintain."]})]}),e.jsxs("p",{children:["Understanding and using the ",e.jsx("strong",{children:"def"})," keyword is fundamental to writing effective and maintainable Python code."]})]})]})}),sg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Use of pass Statement in Function"})}),e.jsxs("section",{className:"section",children:[e.jsxs("h2",{children:["The ",e.jsx("strong",{children:"pass"})," Statement in Python Functions"]}),e.jsxs("p",{children:["In Python, the ",e.jsx("strong",{children:"pass"})," statement is a null operation; nothing happens when it is executed. While it might seem like it has no purpose, it plays a crucial role in certain scenarios, especially within function definitions."]}),e.jsxs("h3",{children:["Use of ",e.jsx("strong",{children:"pass"})," in Functions"]}),e.jsxs("p",{children:["When defining a function in Python, a block of code (the function body) is required. However, there might be situations where you want to define a function's structure without implementing its functionality immediately. This is where the ",e.jsx("strong",{children:"pass"})," statement comes in handy."]}),e.jsx("p",{children:"Here are the primary use cases:"}),e.jsx("h3",{children:"1. Placeholder for Future Implementation"}),e.jsxs("p",{children:["Often, during the initial stages of development, you might want to outline the structure of your code without writing the actual logic. The ",e.jsx("strong",{children:"pass"})," statement allows you to create function stubs that you can fill in later."]}),e.jsx("pre",{children:`
def process_data(data):
    pass  # Implementation to be added later

def calculate_result(x, y):
    pass  # Placeholder for calculation logic
    `}),e.jsxs("p",{children:["In these examples, the functions ",e.jsx("strong",{children:"process_data"})," and ",e.jsx("strong",{children:"calculate_result"})," are defined, but their bodies contain only the ",e.jsx("strong",{children:"pass"})," statement. This allows you to run your code without syntax errors, even though the functions don't perform any actual work."]}),e.jsx("h3",{children:"2. Avoiding Syntax Errors"}),e.jsxs("p",{children:["Python's syntax requires a code block within function definitions. If you try to define a function without any code, you'll encounter a syntax error. The ",e.jsx("strong",{children:"pass"})," statement provides a way to satisfy this requirement without adding any functional code."]}),e.jsx("pre",{children:`
def my_function():
    # Attempting to leave this empty would cause a SyntaxError
    pass
    `}),e.jsx("h3",{children:"3. Interface Definitions or Abstract Methods"}),e.jsxs("p",{children:["In object-oriented programming, when defining interfaces or abstract methods in base classes, you might use the ",e.jsx("strong",{children:"pass"})," statement to indicate that the method should be implemented by derived classes."]}),e.jsx("pre",{children:`
class BaseProcessor:
    def process(self, data):
        pass  # To be implemented by subclasses

class ConcreteProcessor(BaseProcessor):
    def process(self, data):
        # Actual implementation here
        print(f"Processing data: {data}")
    `}),e.jsxs("p",{children:["In this example, the ",e.jsx("strong",{children:"BaseProcessor"})," class defines a ",e.jsx("strong",{children:"process"})," method with a ",e.jsx("strong",{children:"pass"})," statement, indicating that it's an abstract method. The ",e.jsx("strong",{children:"ConcreteProcessor"})," class then provides the actual implementation."]}),e.jsxs("p",{children:["In summary, the ",e.jsx("strong",{children:"pass"})," statement is a valuable tool for creating function placeholders, avoiding syntax errors, and defining abstract methods. It allows you to maintain the structure of your code while deferring the implementation of specific functionality."]})]})]})}),rg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Return Statement"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python return Statement"}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"return statement"})," is used to end the execution of the function call and it “returns” the value of the expression following the return keyword to the caller. The statements after the return statements are not executed. If the return statement is without any expression, then the special value None is returned. A ",e.jsx("strong",{children:"return"})," statement is overall used to invoke a function so that the passed statements can be executed."]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`def add(a, b):
    # returning sum of a and b
    return a + b

def is_true(a):
    # returning boolean of a
    return bool(a)

# calling function
res = add(2, 3)
print(res)

res = is_true(2 &lt; 5)
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"5"}),e.jsx("p",{children:"True"})]}),e.jsx("h3",{children:"Explanation:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"add(a, b) Function:"})," Takes two arguments a and b. Returns the sum of a and b."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"is_true(a) Function:"})," Takes one argument a. Returns the boolean value of a."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Function Calls:"})," res = add(2, 3) computes the sum of 2 and 3, storing the result (5) in res. res = is_true(2 < 5) evaluates the expression 2 < 5 (which is True) and stores the boolean value True in res."]})]}),e.jsx("p",{children:"Let’s explore python return statement in detail:"}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Syntax:"}),e.jsx("li",{children:"Returning Multiple Values"}),e.jsx("li",{children:"Returning a List or Dictionary"}),e.jsx("li",{children:"Function returning another function"})]}),e.jsx("h3",{children:"Syntax:"}),e.jsx("pre",{children:"def function_name(parameters): # Function body return value"}),e.jsx("p",{children:"When the return statement is executed, the function terminates and the specified value is returned to the caller. If no value is specified, the function returns None by default."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Return statement can not be used outside the function."]}),e.jsx("h3",{children:"Returning Multiple Values"}),e.jsx("p",{children:"Python allows you to return multiple values from a function by returning them as a tuple:"}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`def fun():
    name = "Alice"
    age = 30
    return name, age

name, age = fun()
print(name)
print(age)  # Output: 30
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Alice"}),e.jsx("p",{children:"30"})]}),e.jsx("p",{children:"In this example, the fun() function returns two values: name and age. The caller unpacks these values into separate variables."}),e.jsx("h2",{children:"Returning List"}),e.jsx("p",{children:"We can also return more complex data structures such as lists or dictionaries from a function:"}),e.jsx("pre",{children:`def fun(n):
    return [n**2, n**3]

res = fun(3)
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[9, 27]"})]}),e.jsx("p",{children:"In this case, the function fun() returns a list containing the square and cube of the input number."}),e.jsx("h3",{children:"Function returning another function"}),e.jsx("p",{children:"In Python, functions are first-class citizens, meaning you can return a function from another function. This is useful for creating higher-order functions."}),e.jsx("p",{children:"Here’s an example of a function that returns another function:"}),e.jsx("pre",{children:`def fun1(msg):
    def fun2():
        # Using the outer function's message
        return f"Message: {msg}"
    return fun2

# Getting the inner function
fun3 = fun1("Hello, World!")

# Calling the inner function
print(fun3())
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Message: Hello, World!"})]}),e.jsx("h3",{children:"Python return statement – FAQs"}),e.jsxs("h3",{children:["What will ",e.jsx("code",{children:"type()"})," return in Python?"]}),e.jsx("p",{children:"The type() function returns the type of an object. It can be used to determine the class or data type of a variable, or to create new types and classes."}),e.jsx("h3",{children:"Examples:"}),e.jsx("pre",{children:`print(type(10))        # Output: &lt;class 'int'&gt;
print(type(3.14))      # Output: &lt;class 'float'&gt;
print(type("hello"))   # Output: &lt;class 'str'&gt;
print(type([1, 2, 3])) # Output: &lt;class 'list'&gt;

# Creating a new class
MyClass = type('MyClass', (object,), {'attr': 5})
print(type(MyClass))   # Output: &lt;class 'type'&gt;
`}),e.jsx("h3",{children:"What is a return function?"}),e.jsx("p",{children:"In Python, there is no specific “return function.” The term “return” refers to the return statement used in functions and methods to exit the function and optionally pass a value back to the caller."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`def add(a, b):
    return a + b  # The function returns the result of a + b

result = add(5, 3)
print(result)  # Output: 8
`}),e.jsxs("h3",{children:["What is the use of the ",e.jsx("code",{children:"return"})," statement?"]}),e.jsx("p",{children:"The return statement is used to exit a function and send a value back to the caller. It can also terminate the function early if needed."}),e.jsx("h3",{children:"Uses of return:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Send a result back to the function caller."}),e.jsx("li",{children:"Terminate the function execution and optionally pass data out of the function."})]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`def multiply(x, y):
    return x * y  # Returns the product of x and y

result = multiply(4, 5)
print(result)  # Output: 20
`}),e.jsxs("h3",{children:["How many ",e.jsx("code",{children:"return"})," statements can you have in Python?"]}),e.jsx("p",{children:"You can have multiple return statements in a Python function. The function will exit as soon as the first return statement is executed, and any code after that return statement will be skipped."}),e.jsx("h3",{children:"Examples:"}),e.jsx("pre",{children:`def check_number(num):
    if num > 0:
        return "Positive"
    elif num < 0:
        return "Negative"
    return "Zero"  # This return statement is reached only if num is 0

print(check_number(5))   # Output: Positive
print(check_number(-3))  # Output: Negative
print(check_number(0))   # Output: Zero
`})]})]})}),ag=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Global and Local Variables"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Global and Local Variables"}),e.jsx("p",{children:"Python Global variables are those which are not defined inside any function and have a global scope whereas Python local variables are those which are defined inside a function and their scope is limited to that function only. In other words, we can say that local variables are accessible only inside the function in which it was initialized whereas the global variables are accessible throughout the program and inside every function."}),e.jsx("h3",{children:"Python Local Variables"}),e.jsx("p",{children:"Local variables in Python are those which are initialized inside a function and belong only to that particular function. It cannot be accessed anywhere outside the function. Let’s see how to create a local variable."}),e.jsx("h4",{children:"Creating local variables in Python"}),e.jsx("p",{children:"Defining and accessing local variables"}),e.jsx("pre",{children:`
def f():
    # local variable
    s = "I love Geeksforgeeks"
    print(s)

# Driver code
f()
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"I love Geeksforgeeks"})]}),e.jsx("h4",{children:"Can a local variable be used outside a function?"}),e.jsx("p",{children:"If we will try to use this local variable outside the function then let’s see what will happen."}),e.jsx("pre",{children:`
def f():
    # local variable
    s = "I love Geeksforgeeks"
    print("Inside Function:", s)

# Driver code
f()
print(s)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"NameError: name 's' is not defined"})]}),e.jsx("h3",{children:"Python Global Variables"}),e.jsx("p",{children:"These are those which are defined outside any function and which are accessible throughout the program, i.e., inside and outside of every function. Let’s see how to create a Python global variable."}),e.jsx("h4",{children:"Create a global variable in Python"}),e.jsx("p",{children:"Defining and accessing Python global variables."}),e.jsx("pre",{children:`
# This function uses global variable s
def f():
    print("Inside Function", s)

# Global scope
s = "I love Geeksforgeeks"
f()
print("Outside Function", s)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Inside Function I love Geeksforgeeks"}),e.jsx("p",{children:"Outside Function I love Geeksforgeeks"})]}),e.jsx("p",{children:"The variable s is defined as the global variable and is used both inside the function as well as outside the function."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," As there are no locals, the value from the globals will be used but make sure both the local and the global variables should have same name."]}),e.jsx("h3",{children:"Why do we use Local and Global variables in Python?"}),e.jsx("p",{children:"Now, what if there is a Python variable with the same name initialized inside a function as well as globally? Now the question arises, will the local variable will have some effect on the global variable or vice versa, and what will happen if we change the value of a variable inside of the function f()? Will it affect the globals as well? We test it in the following piece of code:"}),e.jsx("h4",{children:"Example"}),e.jsx("p",{children:"If a variable with the same name is defined inside the scope of the function as well then it will print the value given inside the function only and not the global value."}),e.jsx("pre",{children:`
# This function has a variable with
# name same as s.
def f():
    s = "Me too."
    print(s)

# Global scope
s = "I love Geeksforgeeks"
f()
print(s)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Me too."}),e.jsx("p",{children:"I love Geeksforgeeks"})]}),e.jsx("p",{children:"Now, what if we try to change the value of a global variable inside the function? Let’s see it using the below example."}),e.jsx("pre",{children:`
# This function uses global variable s
def f():
    s += 'GFG'
    print("Inside Function", s)

# Global scope
s = "I love Geeksforgeeks"
f()
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"UnboundLocalError: local variable 's' referenced before assignment"})]}),e.jsx("p",{children:"To make the above program work, we need to use the “global” keyword in Python. Let’s see what this global keyword is."}),e.jsx("h3",{children:"The global Keyword"}),e.jsx("p",{children:"We only need to use the global keyword in a function if we want to do assignments or change the global variable. global is not needed for printing and accessing. Python “assumes” that we want a local variable due to the assignment to s inside of f(), so the first statement throws the error message. Any variable which is changed or created inside of a function is local if it hasn’t been declared as a global variable. To tell Python, that we want to use the global variable, we have to use the keyword “global”, as can be seen in the following example:"}),e.jsx("h3",{children:"Example 1: Using Python global keyword"}),e.jsx("pre",{children:`
# This function modifies the global variable 's'
def f():
    global s
    s += ' GFG'
    print(s)
    s = "Look for Geeksforgeeks Python Section"
    print(s)

# Global Scope
s = "Python is great!"
f()
print(s)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Python is great! GFG"}),e.jsx("p",{children:"Look for Geeksforgeeks Python Section"}),e.jsx("p",{children:"Look for Geeksforgeeks Python Section"})]}),e.jsx("p",{children:"Now there is no ambiguity."}),e.jsx("h4",{children:"Example 2: Using Python global and local variables"}),e.jsx("pre",{children:`
a = 1

# Uses global because there is no local 'a'
def f():
    print('Inside f() : ', a)

# Variable 'a' is redefined as a local
def g():
    a = 2
    print('Inside g() : ', a)

# Uses global keyword to modify global 'a'
def h():
    global a
    a = 3
    print('Inside h() : ', a)

# Global scope
print('global : ', a)
f()
print('global : ', a)
g()
print('global : ', a)
h()
print('global : ', a)
`}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"global :  1"}),e.jsx("p",{children:"Inside f() :  1"}),e.jsx("p",{children:"global :  1"}),e.jsx("p",{children:"Inside g() :  2"}),e.jsx("p",{children:"global :  1"}),e.jsx("p",{children:"Inside h() :  3"}),e.jsx("p",{children:"global :  3"})]}),e.jsx("h3",{children:"Difference b/w Local Variable Vs. Global Variables"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Comparision Basis"}),e.jsx("th",{children:"Global Variable"}),e.jsx("th",{children:"Local Variable"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Definition"}),e.jsx("td",{children:"declared outside the functions"}),e.jsx("td",{children:"declared within the functions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Lifetime"}),e.jsx("td",{children:"They are created the execution of the program begins and are lost when the program is ended"}),e.jsx("td",{children:"They are created when the function starts its execution and are lost when the function ends"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Data Sharing"}),e.jsx("td",{children:"Offers Data Sharing"}),e.jsx("td",{children:"It doesn’t offers Data Sharing"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Scope"}),e.jsx("td",{children:"Can be access throughout the code"}),e.jsx("td",{children:"Can access only inside the function"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Parameters needed"}),e.jsx("td",{children:"parameter passing is not necessary"}),e.jsx("td",{children:"parameter passing is necessary"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Storage"}),e.jsx("td",{children:"A fixed location selected by the compiler"}),e.jsx("td",{children:"They are kept on the stack"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Once the value changes it is reflected throughout the code"}),e.jsx("td",{children:"once changed the variable don’t affect other functions of the program"})]})]})]})]})}),lg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Recursion in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python Recursion Function"}),e.jsx("p",{children:"In Python, a recursive function is defined like any other function, but it includes a call to itself. The syntax and structure of a recursive function follow the typical function definition in Python, with the addition of one or more conditions that lead to the function calling itself."}),e.jsx("h3",{children:"Basic Example of Recursion:"}),e.jsx("pre",{children:`
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"120"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The factorial of a number n (denoted as n!) is the product of all positive integers less than or equal to n. The recursive approach involves the function calling itself with a decremented value of n until it reaches the base case of 1."]}),e.jsx("p",{children:"Let’s understand recursion in python deeply:"}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Base Case and Recursive Case"}),e.jsx("li",{children:"Types of Recursion in Python"}),e.jsx("li",{children:"Recursion vs Iteration"}),e.jsx("li",{children:"Advantages of using recursion"}),e.jsx("li",{children:"Disadvantages of using recursion"})]}),e.jsx("h3",{children:"Basic Structure of Recursive Function"}),e.jsx("pre",{children:`
def recursive_function(parameters):
    if base_case_condition:
        return base_result
    else:
        return recursive_function(modified_parameters)
`}),e.jsx("h3",{children:"Base Case and Recursive Case"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Base Case:"})," This is the condition under which the recursion stops. It is crucial to prevent infinite loops and to ensure that each recursive call reduces the problem in some manner. In the factorial example, the base case is ",e.jsx("code",{children:"n == 1"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Recursive Case:"})," This is the part of the function that includes the call to itself. It must eventually lead to the base case. In the factorial example, the recursive case is ",e.jsx("code",{children:"return n * factorial(n-1)"}),"."]})]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
def fibonacci(n):
    # Base cases
    if n == 0:
        return 0
    elif n == 1:
        return 1
    # Recursive case
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Example usage
print(fibonacci(10))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"55"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Base Cases:"})," If ",e.jsx("code",{children:"n == 0"}),", the function returns 0. If ",e.jsx("code",{children:"n == 1"}),", the function returns 1. These two cases are necessary to stop the recursion."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Recursive Case:"})," The function calls itself twice with the decrements of n (i.e., ",e.jsx("code",{children:"fibonacci(n-1)"})," and ",e.jsx("code",{children:"fibonacci(n-2)"}),"), summing the results of these calls. This division into smaller subproblems continues until the base cases are reached."]})]}),e.jsx("h3",{children:"Types of Recursion in Python"}),e.jsx("p",{children:"Recursion can be broadly classified into two types: tail recursion and non-tail recursion. The main difference between them is related to what happens after the recursive call."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tail Recursion:"})," This occurs when the recursive call is the last operation executed in the function, with no additional work or calculation following the recursive call. In many programming languages, tail recursion can be optimized by the compiler into iterative loops to improve performance and prevent stack overflow."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Non-Tail Recursion:"})," This occurs when there are operations or calculations that follow the recursive call. This type prevents the compiler or interpreter from optimizing the recursion into an iteration."]})]}),e.jsx("h3",{children:"Here is a Python example that demonstrates both tail recursion and non-tail recursion:"}),e.jsx("pre",{children:`
def tail_fact(n, acc=1):
    # Base case
    if n == 0:
        return acc
    # Tail recursive call with an accumulator
    else:
        return tail_fact(n-1, acc * n)

def nontail_fact(n):
    # Base case
    if n == 1:
        return 1
    # Non-tail recursive call because the multiplication happens after the call
    else:
        return n * nontail_fact(n-1)

# Example usage
print(tail_fact(5))
print(nontail_fact(5))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"120"}),e.jsx("p",{children:"120"})]}),e.jsx("h3",{children:"Recursion vs Iteration"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Recursion:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Recursion is often more intuitive and easier to implement when the problem is naturally recursive, like tree traversals."}),e.jsx("li",{children:"It can lead to solutions that are easier to understand compared to iterative ones."})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Iteration:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Iteration involves loops (for, while) to repeat the execution of a block of code."}),e.jsx("li",{children:"It is generally more memory-efficient as it does not involve multiple stack frames like recursion."})]})]})]}),e.jsx("h3",{children:"Advantages of using recursion"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Simplicity:"})," Recursive code is generally simpler and cleaner, especially for problems inherently recursive in nature (e.g., tree traversals, dynamic programming problems)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reduced Code Length:"})," Recursion can reduce the length of the code since the repetitive tasks are handled through repeated function calls."]})]}),e.jsx("h3",{children:"Disadvantages of using recursion"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Memory Overhead:"})," Each recursive call adds a new layer to the stack, which can result in significant memory use, especially for deep recursion."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance Issues:"})," Recursive functions may lead to slower responses due to overheads like function calls and returns."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Risk of Stack Overflow:"})," Excessive recursion can lead to a stack overflow error if the recursion depth exceeds the stack limit."]})]})]})]})}),og=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"*args and **kwargs in Function"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python *args and **kwargs in Function"}),e.jsx("p",{children:"In Python, *args and **kwargs are used to allow functions to accept an arbitrary number of arguments. These features provide great flexibility when designing functions that need to handle a varying number of inputs."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
# *args example
def fun(*args):
    return sum(args)

print(fun(1, 2, 3, 4))
print(fun(5, 10, 15))

# **kwargs example
def fun(**kwargs):
    for k, val in kwargs.items():
        print(k, val)

fun(a=1, b=2, c=3)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"10"}),e.jsx("p",{children:"30"}),e.jsx("p",{children:"a 1"}),e.jsx("p",{children:"b 2"}),e.jsx("p",{children:"c 3"})]}),e.jsx("p",{children:"Let’s explore *args and **kwargs in detail:"}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Python *args?"}),e.jsx("li",{children:"Python **kwargs?"}),e.jsx("li",{children:"Using both *args and **kwargs in Python"})]}),e.jsx("p",{children:"There are two special symbols to pass multiple arguments:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"*args (Non-Keyword Arguments)"}),e.jsx("li",{children:"**kwargs (Keyword Arguments)"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," “We use the “wildcard” or “*” notation like this – *args OR **kwargs – as our function’s argument when we have doubts about the number of arguments we should pass in a function.”"]}),e.jsx("h3",{children:"Python *args"}),e.jsxs("p",{children:["The special syntax ",e.jsx("code",{children:"*args"})," in function definitions is used to pass a variable number of arguments to a function. It is used to pass a non-keyworded, variable-length argument list."]}),e.jsx("p",{children:"For example, we want to make a multiply function that takes any number of arguments and is able to multiply them all together. It can be done using *args."}),e.jsx("p",{children:"Using * the variable that we associate with the * becomes iterable, meaning you can do things like iterate over it, run some higher-order functions such as map and filter, etc."}),e.jsx("h3",{children:"Example 1:"}),e.jsx("p",{children:"Python program to illustrate *args for a variable number of arguments"}),e.jsx("pre",{children:`
def myFun(*argv):
    for arg in argv:
        print(arg)

myFun('Hello', 'Welcome', 'to', 'GeeksforGeeks')
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello"}),e.jsx("p",{children:"Welcome"}),e.jsx("p",{children:"to"}),e.jsx("p",{children:"GeeksforGeeks"})]}),e.jsx("h3",{children:"Example 2:"}),e.jsx("p",{children:"Python program to illustrate *args with a first extra argument."}),e.jsx("pre",{children:`
def fun(arg1, *argv):
    print("First argument :", arg1)
    for arg in argv:
        print("Argument *argv :", arg)

fun('Hello', 'Welcome', 'to', 'GeeksforGeeks')
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"First argument : Hello"}),e.jsx("p",{children:"Argument *argv : Welcome"}),e.jsx("p",{children:"Argument *argv : to"}),e.jsx("p",{children:"Argument *argv : GeeksforGeeks"})]}),e.jsx("h3",{children:"Python **kwargs"}),e.jsxs("p",{children:["The special syntax ",e.jsx("code",{children:"**kwargs"})," in function definitions is used to pass a variable length argument list. We use the name ",e.jsx("code",{children:"kwargs"})," with the double star **."]}),e.jsx("p",{children:"A keyword argument is where you provide a name to the variable as you pass it into the function."}),e.jsx("p",{children:"It collects all the additional keyword arguments passed to the function and stores them in a dictionary."}),e.jsx("h3",{children:"Example 1:"}),e.jsx("pre",{children:`
def fun(**kwargs):
    for k, val in kwargs.items():
        print("%s == %s" % (k, val))

# Driver code
fun(s1='Geeks', s2='for', s3='Geeks')
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"s1 == Geeks"}),e.jsx("p",{children:"s2 == for"}),e.jsx("p",{children:"s3 == Geeks"})]}),e.jsx("p",{children:"For s1=’Geeks’, s1 is key and ‘Geeks’ is a value. In simple words, what we assign is value and to whom we assign is key."}),e.jsx("h3",{children:"Example 2:"}),e.jsx("pre",{children:`
def fun(arg1, **kwargs):
    for k, val in kwargs.items():
        print("%s == %s" % (k, val))

# Driver code
fun("Hi", s1='Geeks', s2='for', s3='Geeks')
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"s1 == Geeks"}),e.jsx("p",{children:"s2 == for"}),e.jsx("p",{children:"s3 == Geeks"})]}),e.jsx("h3",{children:"Using both *args and **kwargs"}),e.jsx("p",{children:"We can use both *args and **kwargs in the same function to accept a mix of positional and keyword arguments."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
def fun(*args, **kwargs):
    print("Positional arguments:", args)
    print("Keyword arguments:", kwargs)

fun(1, 2, 3, a=4, b=5)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Positional arguments: (1, 2, 3)"}),e.jsx("p",{children:"Keyword arguments: a: 4, b: 5"})]})]})]})}),cg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Why Python Uses 'Self' as Default Argument"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"'Self' as Default Argument"}),e.jsx("p",{children:"In Python, when defining methods within a class, the first parameter is always self. The parameter self is a convention not a keyword and it plays a key role in Python’s object-oriented structure."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
class Car:
    def __init__(self, brand, model):
        self.brand = brand  # Set instance attribute
        self.model = model  # Set instance attribute

    def display(self):
        return self.brand, self.model

# Create an instance of Car
car1 = Car("Toyota", "Corolla")

# Call the display_info method
print(car1.display())  # Output: This car is a Toyota Corolla
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"('Toyota', 'Corolla')"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"self"})," in ",e.jsx("code",{children:"__init__"}),": Used to assign values (brand and model) to the specific instance (car1)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"self"})," in ",e.jsx("code",{children:"display_info"}),": Refers to the same car1 instance to access its attributes (brand and model)."]}),e.jsx("li",{children:"Python automatically passes car1 as the first argument to display."})]}),e.jsx("p",{children:"Let's understand the use of self as default argument in python in detail:"}),e.jsx("h3",{children:"Why Python Uses 'Self' As Default Argument?"}),e.jsx("p",{children:"The main reason Python uses self as the default argument is to make object-oriented programming explicit rather than implicit. By requiring the instance of the class to be passed explicitly as the first parameter to every instance method, Python ensures that the code is clear and unambiguous. This explicit approach makes it immediately obvious that methods are operating on an instance of the class, which enhances code readability and avoids confusion, especially in complex inheritance scenarios."}),e.jsx("h3",{children:"Why Not Implicit?"}),e.jsx("p",{children:"Unlike some other programming languages, Python requires self explicitly because:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Clarity:"})," Explicit is better than implicit (Python’s philosophy)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flexibility:"})," You can name it anything, but self is a convention."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Consistency:"})," All instance methods in Python use this approach, making it uniform."]})]}),e.jsx("p",{children:"Below, are the example of using 'Self' As A Default Argument in Python."}),e.jsx("h3",{children:"Example 1: Object Initialization & Method Invocation"}),e.jsx("pre",{children:`
class gfg:
    def __init__(self, topic):
        self._topic = topic  # Rename the instance variable to avoid conflict

    def topic(self):
        print("Topic:", self._topic)  # Access the renamed variable

# Creating an instance of gfg
ins = gfg("Python")

# Calling the topic method
ins.topic()
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Topic: Python"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," In this example, 'self' is used to refer to the instance of the class, 'ins.' Without the explicit use of 'self,' it would be unclear which instance the method is referring to and the code might become ambiguous."]}),e.jsx("h3",{children:"Example 2: Circle Class for Area Calculation Example"}),e.jsx("p",{children:"In this example, 'self' is crucial for accessing the 'r' attribute of the specific instance 'ins.' The use of 'self' ensures that the method operates on the attributes of the correct instance."}),e.jsx("pre",{children:`
class Circle:
    def __init__(self, r):
        self.r = r

    def area(self):
        a = 3.14 * self.r ** 2
        return a

# Creating an instance of Circle
ins = Circle(5)

# Calling the area method
print("Area of the circle:", ins.area())
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Area of the circle: 78.5"})]})]})]})}),dg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"First Class functions in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"First Class functions"}),e.jsx("p",{children:"First-class function is a concept where functions are treated as first-class citizens. By treating functions as first-class citizens, Python allows you to write more abstract, reusable, and modular code. This means that functions in such languages are treated like any other variable. They can be passed as arguments to other functions, returned as values from other functions, assigned to variables and stored in data structures."}),e.jsx("h3",{children:"Characteristics of First-Class Functions"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Assigned to Variables:"})," We can assign functions to variables."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Passed as Arguments:"})," We can pass functions as arguments to other functions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returned from Functions:"})," Functions can return other functions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stored in Data Structures:"})," Functions can be stored in data structures such as lists, dictionaries, etc."]})]}),e.jsx("h3",{children:"Assigning Functions to Variables"}),e.jsx("p",{children:"We can assign a function to a variable and use the variable to call the function."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
def msg(name):
    return f"Hello, {name}!"

# Assigning the function to a variable
f = msg

# Calling the function using the variable
print(f("Anurag"))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello, Anurag!"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"function greet is assigned to the variable f."}),e.jsx("li",{children:"f is then used to call the function, demonstrating that functions can be treated like any other variable."})]}),e.jsx("h3",{children:"Passing Functions as Arguments"}),e.jsx("p",{children:"Functions can be passed as arguments to other functions, enabling higher-order functions."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
def msg(name):
    return f"Hello, {name}!"

def fun1(fun2, name):
    return fun2(name)

# Passing the greet function as an argument
print(fun1(msg, "Bob"))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello, Bob!"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The fun1 function takes another function fun2 and a name as arguments."}),e.jsx("li",{children:"The msg function is passed to fun1, which then calls greet with the given name."})]}),e.jsx("h3",{children:"Returning Functions from Other Functions"}),e.jsx("p",{children:"A function can return another function, allowing for the creation of function factories."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
def fun1(msg):
    def fun2():
        return f"Message: {msg}"
    return fun2

# Getting the inner function
func = fun1("Hello, World!")
print(func())
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Message: Hello, World!"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The fun1 defines an fun2 and returns it."}),e.jsx("li",{children:"func stores the returned fun2, which can then be called later."})]}),e.jsx("h3",{children:"Storing Functions in Data Structures"}),e.jsx("p",{children:"Functions can be stored in data structures like lists or dictionaries."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

# Storing functions in a dictionary
d = {
    "add": add,
    "subtract": subtract
}

# Calling functions from the dictionary
print(d["add"](5, 3))
print(d["subtract"](5, 3))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"8"}),e.jsx("p",{children:"2"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Functions add and subtract are stored in a dictionary operations."}),e.jsx("li",{children:"Functions are accessed and called from the dictionary using their respective keys."})]})]})]})}),hg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Python Lambda Functions"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python Lambda Functions"}),e.jsxs("p",{children:["Python Lambda Functions are anonymous functions means that the function is without a name. As we already know the ",e.jsx("code",{children:"def"})," keyword is used to define a normal function in Python. Similarly, the ",e.jsx("code",{children:"lambda"})," keyword is used to define an anonymous function in Python."]}),e.jsxs("p",{children:["In the example, we defined a lambda function(upper) to convert a string to its upper case using ",e.jsx("code",{children:"upper()"}),"."]}),e.jsx("pre",{children:`
s1 = 'Hello'
s2 = lambda func: func.upper()
print(s2(s1))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"HELLO"})]}),e.jsxs("p",{children:["This code defines a lambda function named ",e.jsx("code",{children:"s2"})," that takes a string as its argument and converts it to uppercase using the ",e.jsx("code",{children:"upper()"})," method. It then applies this lambda function to the string ‘GeeksforGeeks’ and prints the result."]}),e.jsx("p",{children:"Let’s explore Lambda Function in detail:"}),e.jsx("h3",{children:"Python Lambda Function Syntax"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsx("code",{children:"lambda arguments : expression"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"lambda"}),": The keyword to define the function."]}),e.jsxs("li",{children:[e.jsx("code",{children:"arguments"}),": A comma-separated list of input parameters (like in a regular function)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"expression"}),": A single expression that is evaluated and returned."]})]}),e.jsx("p",{children:"Let’s see some of the practical uses of the Python lambda function."}),e.jsx("h3",{children:"lambda with Condition Checking"}),e.jsx("p",{children:"A lambda function can include conditions using if statements."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
# Example: Check if a number is positive, negative, or zero
n = lambda x: "Positive" if x > 0 else "Negative" if x < 0 else "Zero"
print(n(5))
print(n(-3))
print(n(0))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Positive"}),e.jsx("p",{children:"Negative"}),e.jsx("p",{children:"Zero"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The lambda function takes x as input."}),e.jsx("li",{children:"It uses nested if-else statements to return “Positive,” “Negative,” or “Zero.”"})]}),e.jsx("h3",{children:"Difference Between lambda and def Keyword"}),e.jsx("p",{children:"lambda is concise but less powerful than def when handling complex logic. Let’s take a look at short comparison between the two:"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Feature"}),e.jsxs("th",{children:[e.jsx("code",{children:"lambda"})," Function"]}),e.jsxs("th",{children:["Regular Function (",e.jsx("code",{children:"def"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Definition"}),e.jsxs("td",{children:["Single expression with ",e.jsx("code",{children:"lambda"}),"."]}),e.jsx("td",{children:"Multiple lines of code."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Name"}),e.jsx("td",{children:"Anonymous (or named if assigned)."}),e.jsx("td",{children:"Must have a name."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Statements"}),e.jsx("td",{children:"Single expression only."}),e.jsx("td",{children:"Can include multiple statements."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Documentation"}),e.jsx("td",{children:"Cannot have a docstring."}),e.jsx("td",{children:"Can include docstrings."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Reusability"}),e.jsx("td",{children:"Best for short, temporary functions."}),e.jsx("td",{children:"Better for reusable and complex logic."})]})]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
# Using lambda
sq = lambda x: x ** 2
print(sq(3))

# Using def
def sqdef(x):
    return x ** 2
print(sqdef(3))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"9"}),e.jsx("p",{children:"9"})]}),e.jsxs("p",{children:["As we can see in the above example, both the ",e.jsx("code",{children:"sq()"})," function and ",e.jsx("code",{children:"sqdef()"})," function behave the same and as intended."]}),e.jsx("h3",{children:"Lambda with List Comprehension"}),e.jsx("p",{children:"Combining lambda with list comprehensions enables us to apply transformations to data in a concise way."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
li = [lambda arg=x: arg * 10 for x in range(1, 5)]
for i in li:
    print(i())
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"10"}),e.jsx("p",{children:"20"}),e.jsx("p",{children:"30"}),e.jsx("p",{children:"40"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The lambda function squares each element."}),e.jsx("li",{children:"The list comprehension iterates through li and applies the lambda to each element."}),e.jsx("li",{children:"This is ideal for applying transformations to datasets in data preprocessing or manipulation tasks."})]}),e.jsx("h3",{children:"Lambda with if-else"}),e.jsx("p",{children:"lambda functions can incorporate conditional logic directly, allowing us to handle simple decision making within the function."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
# Example: Check if a number is even or odd
check = lambda x: "Even" if x % 2 == 0 else "Odd"
print(check(4))
print(check(7))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Even"}),e.jsx("p",{children:"Odd"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The lambda checks if a number is divisible by 2 (x % 2 == 0)."}),e.jsx("li",{children:"Returns “Even” for true and “Odd” otherwise."}),e.jsx("li",{children:"This approach is useful for labeling or categorizing values based on simple conditions."})]}),e.jsx("h3",{children:"Lambda with Multiple Statements"}),e.jsx("p",{children:"Lambda functions do not allow multiple statements, however, we can create two lambda functions and then call the other lambda function as a parameter to the first function."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
# Example: Perform addition and multiplication in a single line
calc = lambda x, y: (x + y, x * y)
res = calc(3, 4)
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"(7, 12)"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The lambda function performs both addition and multiplication and returns a tuple with both results."}),e.jsx("li",{children:"This is useful for scenarios where multiple calculations need to be performed and returned together."})]}),e.jsxs("p",{children:["Lambda functions can be used along with built-in functions like ",e.jsx("code",{children:"filter()"}),", ",e.jsx("code",{children:"map()"})," and ",e.jsx("code",{children:"reduce()"}),"."]}),e.jsx("h3",{children:"Using lambda with filter()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"filter()"})," function in Python takes in a function and a list as arguments. This offers an elegant way to filter out all the elements of a sequence “sequence”, for which the function returns True."]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
# Example: Filter even numbers from a list
n = [1, 2, 3, 4, 5, 6]
even = filter(lambda x: x % 2 == 0, n)
print(list(even))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2, 4, 6]"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The lambda function checks if a number is even (x % 2 == 0)."}),e.jsx("li",{children:"filter() applies this condition to each element in nums."})]}),e.jsx("h3",{children:"Using lambda with map()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"map()"})," function in Python takes in a function and a list as an argument. The function is called with a lambda function and a new list is returned which contains all the lambda-modified items returned by that function for each item."]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
# Example: Double each number in a list
a = [1, 2, 3, 4]
b = map(lambda x: x * 2
, a)
print(list(b))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2, 4, 6, 8]"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The lambda function doubles each number."}),e.jsx("li",{children:"map() iterates through a and applies the transformation."})]}),e.jsx("h3",{children:"Using lambda with reduce()"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"reduce()"})," function in Python takes in a function and a list as an argument. The function is called with a lambda function and an iterable and a new reduced result is returned. This performs a repetitive operation over the pairs of the iterable. The reduce() function belongs to the ",e.jsx("code",{children:"functools"})," module."]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
from functools import reduce

# Example: Find the product of all numbers in a list
a = [1, 2, 3, 4]
b = reduce(lambda x, y: x * y, a)
print(b)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"24"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The lambda multiplies two numbers at a time."}),e.jsx("li",{children:"reduce() applies this operation across the list."})]})]})]})}),ug=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Map, Reduce and Filter Function"})}),e.jsxs("section",{className:"section",children:[e.jsx("h1",{children:"Python map() function"}),e.jsx("p",{children:"The map() function is used to apply a given function to every item of an iterable, such as a list or tuple, and returns a map object (which is an iterator)."}),e.jsx("p",{children:"Let’s start with a simple example of using map() to convert a list of strings into a list of integers."}),e.jsx("pre",{children:`
s = ['1', '2', '3', '4']
res = map(int, s)
print(list(res))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[1, 2, 3, 4]"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," Here, we used the built-in int function to convert each string in the list s into an integer. The map() function takes care of applying int() to every element"]}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Converting map object to a list"}),e.jsx("li",{children:"map() with lambda"}),e.jsx("li",{children:"Using map() with multiple iterables"}),e.jsx("li",{children:"Examples of map() function"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Converting to uppercase"}),e.jsx("li",{children:"Extracting first character from strings"}),e.jsx("li",{children:"Removing whitespaces from strings"}),e.jsx("li",{children:"Calculate fahrenheit from celsius"})]})]}),e.jsx("h3",{children:"Syntax of the map() function"}),e.jsx("p",{children:"The syntax for the map() function is as follows:"}),e.jsx("pre",{children:e.jsx("code",{children:"map(function, iterable)"})}),e.jsx("h3",{children:"Parameter:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"function:"})," The function we want to apply to every element of the iterable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"iterable:"})," The iterable whose elements we want to process."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," We can also pass multiple iterables if our function accepts multiple arguments."]}),e.jsx("h3",{children:"Converting map object to a list"}),e.jsx("p",{children:"By default, the map() function returns a map object, which is an iterator. In many cases, we will need to convert this iterator to a list to work with the results directly."}),e.jsx("h3",{children:"Example: Let’s see how to double each elements of the given list."}),e.jsx("pre",{children:`
a = [1, 2, 3, 4]

# Using custom function in "function" parameter
# This function is simply doubles the provided number
def double(val):
  return val*2

res = list(map(double, a))
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2, 4, 6, 8]"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The map() function returned an iterator, which we then converted into a list using list(). This is a common practice when working with map()"}),e.jsx("li",{children:"We used a custom function to double each value in the list a. The result was mapped and converted into a list for easy display."})]}),e.jsx("h3",{children:"map() with lambda"}),e.jsx("p",{children:"We can use a lambda function instead of a custom function with map() to make the code shorter and easier. Let’s see how to improve the above code for better readability."}),e.jsx("pre",{children:`
a = [1, 2, 3, 4]

# Using lambda function in "function" parameter
# to double each number in the list
res = list(map(lambda x: x * 2, a))
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2, 4, 6, 8]"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," We used lambda x: x * 2 to double each value in the list a. The result was mapped and converted into a list for easy display."]}),e.jsx("h3",{children:"Using map() with multiple iterables"}),e.jsx("p",{children:"We can use map() with multiple iterables if the function we are applying takes more than one argument."}),e.jsx("h3",{children:"Example: In this example, map() takes two iterables (a and b) and applies the lambda function to add corresponding elements from both lists."}),e.jsx("pre",{children:`
a = [1, 2, 3]
b = [4, 5, 6]
res = map(lambda x, y: x + y, a, b)
print(list(res))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[5, 7, 9]"})]}),e.jsx("h3",{children:"Examples of map() function"}),e.jsx("h3",{children:"Converting to uppercase"}),e.jsx("p",{children:"This example shows how we can use map() to convert a list of strings to uppercase."}),e.jsx("pre",{children:`
fruits = ['apple', 'banana', 'cherry']
res = map(str.upper, fruits)
print(list(res))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"['APPLE', 'BANANA', 'CHERRY']"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The str.upper method is applied to each element in the list fruits using map(). The result is a list of uppercase versions of each fruit name."]}),e.jsx("h3",{children:"Extracting first character from strings"}),e.jsx("p",{children:"In this example, we use map() to extract the first character from each string in a list."}),e.jsx("pre",{children:`
words = ['apple', 'banana', 'cherry']
res = map(lambda s: s[0], words)
print(list(res))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"['a', 'b', 'c']"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The lambda function s: s[0] extracts the first character from each string in the list words. map() applies this lambda function to every element, resulting in a list of the first characters of each word."]}),e.jsx("h3",{children:"Removing whitespaces from strings"}),e.jsx("p",{children:"In this example, We can use map() to remove leading and trailing whitespaces from each string in a list."}),e.jsx("pre",{children:`
s = ['  hello  ', '  world ', ' python  ']
res = map(str.strip, s)
print(list(res))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"['hello', 'world', 'python']"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The str.strip method removes leading and trailing whitespaces from each string in the list strings. The map() function applies str.strip to each element and returning a list of trimmed strings."]}),e.jsx("h3",{children:"Calculate fahrenheit from celsius"}),e.jsx("p",{children:"In this example, we use map() to convert a list of temperatures from Celsius to Fahrenheit."}),e.jsx("pre",{children:`
celsius = [0, 20, 37, 100]
fahrenheit = map(lambda c: (c * 9/5) + 32, celsius)
print(list(fahrenheit))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[32.0, 68.0, 98.6, 212.0]"})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"reduce() in Python"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"reduce(fun,seq)"})," function is used to apply a particular function passed in its argument to all of the list elements mentioned in the sequence passed along. This function is defined in “functools” module."]}),e.jsx("h3",{children:"Basic Example:"}),e.jsx("p",{children:"Let’s start with a simple example where we sum up all numbers in a list."}),e.jsx("pre",{children:`
from functools import reduce

# Function to add two numbers
def add(x, y):
    return x + y

a = [1, 2, 3, 4, 5]
res = reduce(add, a)
print(res)  # Output: 15
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"15"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsx("p",{children:"The reduce() function applies add() cumulatively to the elements in numbers. First, 1 + 2 = 3. Then, 3 + 3 = 6. And so on, until all numbers are processed. The final result is 15."}),e.jsx("p",{children:"Let’s understand reduce function in detail:"}),e.jsx("h3",{children:"Syntax of reduce()"}),e.jsx("pre",{children:e.jsx("code",{children:"functools.reduce(function, iterable[, initializer])"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"function:"})," A function that takes two arguments and performs an operation on them."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"iterable:"})," An iterable whose elements are processed by the function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"initializer (optional):"})," A starting value for the operation. If provided, it is placed before the first element in the iterable."]})]}),e.jsx("p",{children:"The reduce() function is part of the functools module, so you need to import it before use."}),e.jsx("h3",{children:"Using reduce() with lambda"}),e.jsx("p",{children:"When paired with a lambda function, reduce() becomes a concise and powerful tool for aggregation tasks like summing, multiplying or finding the maximum value."}),e.jsx("pre",{children:`
from functools import reduce

# Summing numbers with reduce and lambda
a = [1, 2, 3, 4, 5]
res = reduce(lambda x, y: x + y, a)
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"15"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The lambda function takes two arguments (x and y) and returns their sum."}),e.jsx("li",{children:"reduce() starts by applying the function to the first two elements: 1 + 2 = 3."}),e.jsx("li",{children:"The result (3) is then used with the next element: 3 + 3 = 6, and so on."}),e.jsx("li",{children:"The process continues until all elements are processed, yielding 15."})]}),e.jsx("h3",{children:"Using reduce() with operator functions"}),e.jsx("p",{children:"reduce() can also be combined with operator functions to achieve the similar functionality as with lambda functions and makes the code more readable."}),e.jsx("pre",{children:`
import functools
# importing operator for operator functions
import operator

# initializing list
a = [1, 3, 5, 6, 2]

# using reduce with add to compute sum of list
print(functools.reduce(operator.add, a))

# using reduce with mul to compute product
print(functools.reduce(operator.mul, a))

# using reduce with add to concatenate string
print(functools.reduce(operator.add, ["geeks", "for", "geeks"]))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"17"}),e.jsx("p",{children:"180"}),e.jsx("p",{children:"geeksforgeeks"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"operator.add and operator.mul function are predefined operators."}),e.jsx("li",{children:"reduce() applies the add function cumulatively to elements in the list."}),e.jsx("li",{children:"The operation works similarly to the lambda example but the code is cleaner and more readable."})]}),e.jsx("h3",{children:"Difference Between reduce() and accumulate()"}),e.jsx("p",{children:"The accumulate() function from the itertools module also performs cumulative operations, but it returns an iterator containing intermediate results, unlike reduce(), which returns a single final value."}),e.jsx("h3",{children:"Example with accumulate:"}),e.jsx("pre",{children:`
from itertools import accumulate
from operator import add

# Cumulative sum with accumulate
a = [1, 2, 3, 4, 5]
res = accumulate(a, add)
print(list(res))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[1, 3, 6, 10, 15]"})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"filter() in Python"}),e.jsx("p",{children:"The filter() method filters the given sequence with the help of a function that tests each element in the sequence to be true or not. Let’s see a simple example of filter() function in python:"}),e.jsx("h3",{children:"Example Usage of filter()"}),e.jsx("pre",{children:`
# Function to check if a number is even
def even(n):
    return n % 2 == 0

a = [1, 2, 3, 4, 5, 6]
b = filter(even, a)

# Convert filter object to a list
print(list(b))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2, 4, 6]"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Function:"})," even function checks if a number is divisible by 2."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Filter:"})," The filter() applies this function to each item in numbers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Result:"})," A new iterable containing only even numbers is returned."]})]}),e.jsx("p",{children:"Let’s explore filter() in detail:"}),e.jsx("h3",{children:"Python filter() Syntax"}),e.jsx("p",{children:"The filter() method in Python has the following syntax:"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsx("code",{children:"filter(function, sequence)"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"function:"})," A function that defines the condition to filter the elements. This function should return True for items you want to keep and False for those you want to exclude."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"iterable:"})," The iterable you want to filter (e.g., list, tuple, set)."]})]}),e.jsx("p",{children:"The result is a filter object, which can be converted into a list, tuple or another iterable type."}),e.jsx("p",{children:"Let us see a few examples of the filter() function in Python."}),e.jsx("h3",{children:"Using filter() with lambda"}),e.jsx("p",{children:"For concise conditions, we can use a lambda function instead of defining a named function."}),e.jsx("pre",{children:`
a = [1, 2, 3, 4, 5, 6]
b = filter(lambda x: x % 2 == 0, a)
print(list(b))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2, 4, 6]"})]}),e.jsx("p",{children:"Here, the lambda function replaces even and directly defines the condition x % 2 == 0 inline."}),e.jsx("h3",{children:"Combining filter() with Other Functions"}),e.jsx("p",{children:"We can combine filter() with other Python functions like map() or use it in a pipeline to process data efficiently."}),e.jsx("h3",{children:"Example: Filtering and Transforming Data"}),e.jsx("pre",{children:`
a = [1, 2, 3, 4, 5, 6]

# First, filter even numbers
b = filter(lambda x: x % 2 == 0, a)

# Then, double the filtered numbers
c = map(lambda x: x * 2, b)

print(list(c))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[4, 8, 12]"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The filter() function extracts even numbers from numbers."}),e.jsx("li",{children:"The map() function doubles each filtered number."}),e.jsx("li",{children:"The combination simplifies complex data pipelines."})]})]})]})}),pg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Python Inner Functions"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Python Inner Functions"}),e.jsx("p",{children:"In Python, a function inside another function is called an inner function or nested function. Inner functions help in organizing code, improving readability and maintaining encapsulation. They can access variables from the outer function, making them useful for implementing closures and function decorators."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`def fun1(msg): # outer function
    
    def fun2(): # inner function
        print(msg)
    fun2()

fun1("Hello")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," Here, fun2() is defined inside fun1() and it accesses the variable msg from the enclosing scope."]}),e.jsx("h3",{children:"Why Use Inner functions?"}),e.jsx("p",{children:"Inner functions provide several advantages:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Encapsulation:"})," They help hide the inner logic from external access."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Code Organization:"})," They make the code cleaner by grouping related functionality."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Access to Enclosing Scope:"})," Inner functions can access variables of the outer function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Closures:"})," They allow functions to retain the state of their enclosing function even after execution."]})]}),e.jsx("h3",{children:"Scope of variables in inner functions"}),e.jsx("p",{children:"Inner functions can access variables from their enclosing (outer) function, but modifying them requires special handling. This follows Python’s LEGB rule (Local, Enclosing, Global, Built-in) for variable scope."}),e.jsx("h3",{children:"Example 1: Local Variable Access"}),e.jsx("pre",{children:`def fun1(): # outer function
    msg = "How are you"
    
    def fun2(): # inner function
        print(msg)  # accessing outer function's variable
    
    fun2()

fun1()
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"How are you"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," fun1() defines a local variable msg and an inner function fun2(), which prints msg. Due to lexical scoping, fun2() accesses msg from fun1(). Calling fun1() invokes fun2(), printing the message."]}),e.jsx("h3",{children:"Example 2: Modifying variables using nonlocal"}),e.jsx("pre",{children:`def fun1(): # outer function
    a = 45
    
    def fun2(): # inner function
        nonlocal a  # allows modification of \`a\` from fun1
        a=54
        print(a)
    
    fun2()
    print(a)

fun1()
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"54"}),e.jsx("p",{children:"54"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," nonlocal keyword allows fun2() to modify the variable a from fun1(). Without nonlocal, a inside fun2() would be treated as a new local variable instead of modifying the one in fun1()."]}),e.jsx("h3",{children:"Example 3: closure in inner function"}),e.jsx("pre",{children:`def fun1(a): # outer function
    
    def fun2(): # inner function
        print(a)
    return fun2  # returning function without parentheses

closure_func = fun1("Hello, Closure!")
closure_func()  # inner function remembers 'a'
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello, Closure!"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," Even after fun1() completes execution, the returned fun2() function retains access to a, demonstrating a closure."]}),e.jsx("h3",{children:"Real – World Applications of inner functions"}),e.jsx("p",{children:"Inner functions are useful in real-world scenarios for better code organization, encapsulation and reusability. Below are some practical applications:"}),e.jsx("h3",{children:"Example 1: Encapsulation of helper functions"}),e.jsx("pre",{children:`def process_data(data):
    # removes extra spaces from a list
    
    def clean_data():
        return [item.strip() for item in data]  # Strip spaces
    
    return clean_data()  # return cleaned list

print(process_data(["  Python  ", "  Inner Function  "]))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"['Python', 'Inner Function']"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," process_data(data) removes leading and trailing whitespace from each string in the input list. It defines a nested function, clean_data(), which trims spaces using .strip() and returns the cleaned list."]}),e.jsx("h3",{children:"Example 2: Function wrapper and logging"}),e.jsx("pre",{children:`import logging

logging.basicConfig(level=logging.INFO)  # configure logging

def logger(func):
    # logs function execution details 
    
    def wrapper(*args, **kwargs):
        logging.info(f"Executing {func.__name__} with {args}, {kwargs}")  # log function call
        return func(*args, **kwargs)  # call original function
    return wrapper

@logger
def add(a, b):
    return a + b  # return sum

print(add(3, 4))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"INFO:root:Executing add with arguments (3, 4), "}),e.jsx("p",{children:"7"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," logger function, *args captures positional arguments, and **kwargs captures keyword arguments, allowing the wrapper to handle any function signature."]}),e.jsx("h3",{children:"Best Practices for using inner functions"}),e.jsx("p",{children:"Inner functions are powerful but should be used wisely to maintain code readability, efficiency and maintainability. Below are some best practices:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use inner functions only when necessary:"})," Avoid excessive nesting, as it can reduce readability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use closures wisely:"})," Ensure that captured variables are managed properly to prevent unintended side effects."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prefer nonlocal over global variables:"})," If modifying outer function variables, use nonlocal instead of global."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use inner functions in decorators:"})," This is a common and effective use case."]})]})]})]})}),fg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Decorators in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Decorators in Python"}),e.jsx("p",{children:"In Python, decorators are a powerful and flexible way to modify or extend the behavior of functions or methods, without changing their actual code. A decorator is essentially a function that takes another function as an argument and returns a new function with enhanced functionality."}),e.jsx("p",{children:"Decorators are often used in scenarios such as logging, authentication and memorization, allowing us to add additional functionality to existing functions or methods in a clean, reusable way."}),e.jsx("h3",{children:"Decorator Example:"}),e.jsx("pre",{children:`# A simple decorator function
def decorator(func):
  
    def wrapper():
        print("Before calling the function.")
        func()
        print("After calling the function.")
    return wrapper

# Applying the decorator to a function
@decorator
def greet():
    print("Hello, World!")

greet()
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Before calling the function."}),e.jsx("p",{children:"Hello, World!"}),e.jsx("p",{children:"After calling the function."})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"decorator takes the greet function as an argument."}),e.jsx("li",{children:"It returns a new function (wrapper) that first prints a message, calls greet() and then prints another message."}),e.jsx("li",{children:"The @decorator syntax is a shorthand for greet = decorator(greet)."})]}),e.jsx("p",{children:"Let’s explore decorators in detail:"}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Syntax of Decorator Parameters"}),e.jsx("li",{children:"Higher-Order Functions"}),e.jsx("li",{children:"Functions as First-Class Objects"}),e.jsx("li",{children:"Types of Decorators"}),e.jsx("li",{children:"Common Built-in Decorators in Python"}),e.jsx("li",{children:"Chaining Decorators"})]}),e.jsx("h3",{children:"Syntax of Decorator Parameters"}),e.jsx("pre",{children:`def decorator_name(func):
    def wrapper(*args, **kwargs):
        # Add functionality before the original function call
        result = func(*args, **kwargs)
        # Add functionality after the original function call
        return result
    return wrapper

@decorator_name
def function_to_decorate():
    # Original function code
    pass
`}),e.jsx("h3",{children:"Explanation of Parameters"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"decorator_name(func):"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"decorator_name:"})," This is the name of the decorator function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"func:"})," This parameter represents the function being decorated. When you use a decorator, the decorated function is passed to this parameter."]})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"wrapper(*args, **kwargs):"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"wrapper:"})," This is a nested function inside the decorator. It wraps the original function, adding additional functionality."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"*args:"})," This collects any positional arguments passed to the decorated function into a tuple."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"**kwargs:"})," This collects any keyword arguments passed to the decorated function into a dictionary."]}),e.jsx("li",{children:"The wrapper function allows the decorator to handle functions with any number and types of arguments."})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"@decorator_name:"}),"This syntax applies the decorator to the function_to_decorate function. It is equivalent to writing function_to_decorate = decorator_name(function_to_decorate)."]})]}),e.jsx("h3",{children:"Higher-Order Functions"}),e.jsx("p",{children:"In Python, higher-order functions are functions that take one or more functions as arguments, return a function as a result or do both. Essentially, a higher-order function is a function that operates on other functions. This is a powerful concept in functional programming and is a key component in understanding how decorators work."}),e.jsx("h3",{children:"Key Properties of Higher-Order Functions:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Taking functions as arguments:"})," A higher-order function can accept other functions as parameters."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning functions:"})," A higher-order function can return a new function that can be called later."]})]}),e.jsx("h3",{children:"Example of a Higher-Order Function:"}),e.jsx("pre",{children:`# A higher-order function that takes another function as an argument
def fun(f, x):
    return f(x)

# A simple function to pass
def square(x):
    return x * x

# Using apply_function to apply the square function
res = fun(square, 5)
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"25"})]}),e.jsx("p",{children:"In this example, first function fun is a higher-order function because it takes another function f as an argument and applies it to the value x."}),e.jsx("h3",{children:"Role in Decorators:"}),e.jsx("p",{children:"Decorators in Python are a type of higher-order function because they take a function as input, modify it, and return a new function that extends or changes its behavior. Understanding higher-order functions is essential for working with decorators since decorators are essentially functions that return other functions."}),e.jsx("h3",{children:"Functions as First-Class Objects"}),e.jsx("p",{children:"In Python, functions are first-class objects, meaning that they can be treated like any other object, such as integers, strings, or lists. This gives functions a unique level of flexibility and allows them to be passed around and manipulated in ways that are not possible in many other programming languages."}),e.jsx("h3",{children:"What Does It Mean for Functions to Be First-Class Objects?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Can be assigned to variables:"})," Functions can be assigned to variables and used just like any other value."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Can be passed as arguments:"})," Functions can be passed as arguments to other functions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Can be returned from other functions:"})," Functions can return other functions, which is a key concept in decorators."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Can be stored in data structures:"})," Functions can be stored in lists, dictionaries, or other data structures."]})]}),e.jsx("pre",{children:`# Assigning a function to a variable
def greet(n):
    return f"Hello, {n}!"
say_hi = greet  # Assign the greet function to say_hi
print(say_hi("Alice"))  # Output: Hello, Alice!

# Passing a function as an argument
def apply(f, v):
    return f(v)
res = apply(say_hi, "Bob")
print(res)  # Output: Hello, Bob!

# Returning a function from another function
def make_mult(f):
    def mult(x):
        return x * f
    return mult
dbl = make_mult(2)
print(dbl(5))  # Output: 10
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello, Alice!"}),e.jsx("p",{children:"Hello, Bob!"}),e.jsx("p",{children:"10"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The code defines a greet function that returns a greeting message."}),e.jsx("li",{children:"The greet function is assigned to the say_hi variable, which is used to print a greeting for “Alice”."}),e.jsx("li",{children:"Another function, apply, takes a function and a value as arguments, applies the function to the value, and returns the result."}),e.jsx("li",{children:"apply is demonstrated by passing say_hi and “Bob”, printing a greeting for “Bob”."}),e.jsx("li",{children:"The make_mult function creates a multiplier function based on a given factor."})]}),e.jsx("h3",{children:"Role of First-Class Functions in Decorators"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Decorators receive the function to be decorated as an argument. This allows the decorator to modify or enhance the function’s behavior."}),e.jsx("li",{children:"Decorators return a new function that wraps the original function. This new function adds additional behavior before or after the original function is called."}),e.jsx("li",{children:"When a function is decorated, it is assigned to the variable name of the original function. This means the original function is replaced by the decorated (wrapped) function."})]}),e.jsx("h3",{children:"Types of Decorators"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Function Decorators:"}),"The most common type of decorator, which takes a function as input and returns a new function. The example above demonstrates this type.",e.jsx("pre",{children:`def simple_decorator(func):
    def HTML

wrapper():
        print("Before calling the function.")
        func()
        print("After calling the function.")
    return wrapper

@simple_decorator
def greet():
    print("Hello, World!")

greet()
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Before calling the function."}),e.jsx("p",{children:"Hello, World!"}),e.jsx("p",{children:"After calling the function."})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"simple_decorator(func):"})," This decorator takes the function greet as an argument (func) and returns a new function (wrapper) that adds some functionality before and after calling the original function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"@simple_decorator:"})," This is the decorator syntax. It applies the simple_decorator to the greet function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Calling greet():"})," When greet() is called, it doesn’t just execute the original function but first runs the added behavior from the wrapper function."]})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Method Decorators:"}),"Used to decorate methods within a class. They often handle special cases, such as the self argument for instance methods.",e.jsx("pre",{children:`def method_decorator(func):
    def wrapper(self, *args, **kwargs):
        print("Before method execution")
        res = func(self, *args, **kwargs)
        print("After method execution")
        return res
    return wrapper

class MyClass:
    @method_decorator
    def say_hello(self):
        print("Hello!")

obj = MyClass()
obj.say_hello()
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Before method execution"}),e.jsx("p",{children:"Hello!"}),e.jsx("p",{children:"After method execution"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"method_decorator(func):"})," The decorator takes the method (say_hello) as an argument (func). It returns a wrapper function that adds behavior before and after calling the original method."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"wrapper(self, *args, **kwargs):"})," The wrapper must accept self because it is a method of an instance. self is the instance of the class and *args and **kwargs allow for other arguments to be passed if needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"@method_decorator:"})," This applies the method_decorator to the say_hello method of MyClass."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Calling obj.say_hello():"})," The say_hello method is now wrapped with additional behavior."]})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Class Decorators"}),"Class decorators are used to modify or enhance the behavior of a class. Like function decorators, class decorators are applied to the class definition. They work by taking the class as an argument and returning a modified version of the class.",e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`def fun(cls):
    cls.class_name = cls.__name__
    return cls

@fun
class Person:
    pass

print(Person.class_name)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Person"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"add_class_name(cls):"})," This decorator adds a new attribute, class_name, to the class cls. The value of class_name is set to the name of the class (cls.__name__)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"@add_class_name:"})," This applies the add_class_name decorator to the Person class."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Result:"})," When the Person class is defined, the decorator automatically adds the class_name attribute to it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"print(Person.class_name):"})," Accessing the class_name attribute that was added by the decorator prints the name of the class, Person."]})]})]})]}),e.jsx("h3",{children:"Common Built-in Decorators in Python"}),e.jsx("p",{children:"Python provides several built-in decorators that are commonly used in class definitions. These decorators modify the behavior of methods and attributes in a class, making it easier to manage and use them effectively. The most frequently used built-in decorators are @staticmethod, @classmethod, and @property."}),e.jsx("h3",{children:"@staticmethod"}),e.jsx("p",{children:"The @staticmethod decorator is used to define a method that doesn’t operate on an instance of the class (i.e., it doesn’t use self). Static methods are called on the class itself, not on an instance of the class."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`class MathOperations:
    @staticmethod
    def add(x, y):
        return x + y

# Using the static method
res = MathOperations.add(5, 3)
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"8"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"add is a static method defined with the @staticmethod decorator."}),e.jsx("li",{children:"It can be called directly on the class MathOperations without creating an instance."})]}),e.jsx("h3",{children:"@classmethod"}),e.jsx("p",{children:"The @classmethod decorator is used to define a method that operates on the class itself (i.e., it uses cls). Class methods can access and modify class state that applies across all instances of the class."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`class Employee:
    raise_amount = 1.05

    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    @classmethod
    def set_raise_amount(cls, amount):
        cls.raise_amount = amount

# Using the class method
Employee.set_raise_amount(1.10)
print(Employee.raise_amount)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1.1"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"set_raise_amount is a class method defined with the @classmethod decorator."}),e.jsx("li",{children:"It can modify the class variable raise_amount for the class Employee and all its instances."})]}),e.jsx("h3",{children:"@property"}),e.jsx("p",{children:"The @property decorator is used to define a method as a property, which allows you to access it like an attribute. This is useful for encapsulating the implementation of a method while still providing a simple interface."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value >= 0:
            self._radius = value
        else:
            raise ValueError("Radius cannot be negative")

    @property
    def area(self):
        return 3.14159 * (self._radius ** 2)

# Using the property
c = Circle(5)
print(c.radius)
print(c.area)
c.radius = 10
print(c.area)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"5"}),e.jsx("p",{children:"78.53975"}),e.jsx("p",{children:"314.159"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"radius and area are properties defined with the @property decorator."}),e.jsx("li",{children:"The radius property also has a setter method to allow modification with validation."}),e.jsx("li",{children:"These properties provide a way to access and modify private attributes while maintaining encapsulation."})]}),e.jsx("h3",{children:"Chaining Decorators"}),e.jsx("p",{children:"In simpler terms chaining decorators means decorating a function with multiple decorators."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`# code for testing decorator chaining
def decor1(func):
    def inner():
        x = func()
        return x * x
    return inner

def decor(func):
    def inner():
        x = func()
        return 2 * x
    return inner

@decor1
@decor
def num():
    return 10

@decor
@decor1
def num2():
    return 10

print(num())
print(num2())
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"400"}),e.jsx("p",{children:"200"})]})]})]})}),xg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Python String"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Strings"}),e.jsx("p",{children:"A string is a sequence of characters. Python treats anything inside quotes as a string. This includes letters, numbers, and symbols. Python has no character data type so single character is a string of length 1."}),e.jsx("pre",{children:`s = "GfG"
print(s[1]) # access 2nd char
s1 = s + s[0] # update
print(s1) # print
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"f"}),e.jsx("p",{children:"GfGG"})]}),e.jsx("p",{children:"In this example, s holds the value “GfG” and is defined as a string."}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Creating a String"}),e.jsx("li",{children:"Accessing characters in Python String"}),e.jsx("li",{children:"String Immutability"}),e.jsx("li",{children:"Deleting a String"}),e.jsx("li",{children:"Updating a String"}),e.jsx("li",{children:"Common String Methods"}),e.jsx("li",{children:"Concatenating and Repeating Strings"}),e.jsx("li",{children:"Formatting Strings"})]}),e.jsx("h3",{children:"Creating a String"}),e.jsx("p",{children:"Strings can be created using either single (‘) or double (“) quotes."}),e.jsx("pre",{children:`s1 = 'GfG'
s2 = "GfG"
print(s1)
print(s2)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"GfG"}),e.jsx("p",{children:"GfG"})]}),e.jsx("h3",{children:"Multi-line Strings"}),e.jsx("p",{children:"If we need a string to span multiple lines then we can use triple quotes (”’ or “””)."}),e.jsx("pre",{children:`s = """I am Learning
Python String"""
print(s)

s = '''I'm a Student'''
print(s)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsxs("p",{children:["I am Learning",e.jsx("br",{}),"Python String"]}),e.jsxs("p",{children:["I'm a",e.jsx("br",{}),"Student"]})]}),e.jsx("h3",{children:"Accessing characters in Python String"}),e.jsx("p",{children:"Strings in Python are sequences of characters, so we can access individual characters using indexing. Strings are indexed starting from 0 and -1 from end. This allows us to retrieve specific characters from the string."}),e.jsx("h3",{children:"Python String syntax indexing"}),e.jsx("pre",{children:`s = "GeeksforGeeks"
# Accesses first character: 'G'
print(s[0])
# Accesses 5th character: 's'
print(s[4])
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"G"}),e.jsx("p",{children:"s"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Accessing an index out of range will cause an IndexError. Only integers are allowed as indices and using a float or other types will result in a TypeError."]}),e.jsx("h3",{children:"Access string with Negative Indexing"}),e.jsx("p",{children:"Python allows negative address references to access characters from back of the String, e.g. -1 refers to the last character, -2 refers to the second last character, and so on."}),e.jsx("pre",{children:`s = "GeeksforGeeks"
# Accesses 3rd character: 'k'
print(s[-10])
# Accesses 5th character from end: 'G'
print(s[-5])
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"k"}),e.jsx("p",{children:"G"})]}),e.jsx("h3",{children:"String Slicing"}),e.jsx("p",{children:"Slicing is a way to extract portion of a string by specifying the start and end indexes. The syntax for slicing is string[start:end], where start starting index and end is stopping index (excluded)."}),e.jsx("pre",{children:`s = "GeeksforGeeks"
# Retrieves characters from index 1 to 3: 'eek'
print(s[1:4])
# Retrieves characters from beginning to index 2: 'Gee'
print(s[:3])
# Retrieves characters from index 3 to the end: 'ksforGeeks'
print(s[3:])
# Reverse a string
print(s[::-1])
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"eek"}),e.jsx("p",{children:"Gee"}),e.jsx("p",{children:"ksforGeeks"}),e.jsx("p",{children:"skeeGrofskeeG"})]}),e.jsx("h3",{children:"String Immutability"}),e.jsx("p",{children:"Strings in Python are immutable. This means that they cannot be changed after they are created. If we need to manipulate strings then we can use methods like concatenation, slicing, or formatting to create new strings based on the original."}),e.jsx("pre",{children:`s = "geeksforGeeks"
# Trying to change the first character raises an error
# s[0] = 'I'  # Uncommenting this line will cause a TypeError
# Instead, create a new string
s = "G" + s[1:]
print(s)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"GeeksforGeeks"})]}),e.jsx("h3",{children:"Deleting a String"}),e.jsx("p",{children:"In Python, it is not possible to delete individual characters from a string since strings are immutable. However, we can delete an entire string variable using the del keyword."}),e.jsx("pre",{children:`s = "GfG"
# Deletes entire string
del s
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," After deleting the string using del and if we try to access s then it will result in a NameError because the variable no longer exists."]}),e.jsx("h3",{children:"Updating a String"}),e.jsx("p",{children:"To update a part of a string we need to create a new string since strings are immutable."}),e.jsx("pre",{children:`s = "hello geeks"
# Updating by creating a new string
s1 = "H" + s[1:]
# replacnig "geeks" with "GeeksforGeeks"
s2 = s.replace("geeks", "GeeksforGeeks")
print(s1)
print(s2)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello geeks"}),e.jsx("p",{children:"hello GeeksforGeeks"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"For s1, The original string s is sliced from index 1 to end of string and then concatenate “H” to create a new string s1."}),e.jsx("li",{children:"For s2, we can created a new string s2 and used replace() method to replace ‘geeks’ with ‘GeeksforGeeks’."})]}),e.jsx("h3",{children:"Common String Methods"}),e.jsx("p",{children:"Python provides a various built-in methods to manipulate strings. Below are some of the most useful methods."}),e.jsx("h3",{children:"len():"}),e.jsx("p",{children:"The len() function returns the total number of characters in a string."}),e.jsx("pre",{children:`s = "GeeksforGeeks"
print(len(s))
# output: 13
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"13"})]}),e.jsx("h3",{children:"upper() and lower():"}),e.jsx("p",{children:"upper() method converts all characters to uppercase. lower() method converts all characters to lowercase."}),e.jsx("pre",{children:`s = "Hello World"
print(s.upper())   # output: HELLO WORLD
print(s.lower())   # output: hello world
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"HELLO WORLD"}),e.jsx("p",{children:"hello world"})]}),e.jsx("h3",{children:"strip() and replace():"}),e.jsx("p",{children:"strip() removes leading and trailing whitespace from the string and replace(old, new) replaces all occurrences of a specified substring with another."}),e.jsx("pre",{children:`s = "   Gfg   "
# Removes spaces
from both ends
print(s.strip())

s = "Python is fun"
# Replaces 'fun' with 'awesome'
print(s.replace("fun", "awesome"))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Gfg"}),e.jsx("p",{children:"Python is awesome"})]}),e.jsx("h3",{children:"Concatenating and Repeating Strings"}),e.jsx("p",{children:"We can concatenate strings using + operator and repeat them using * operator."}),e.jsx("p",{children:"Strings can be combined by using + operator."}),e.jsx("pre",{children:`s1 = "Hello"
s2 = "World"
s3 = s1 + " " + s2
print(s3)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello World"})]}),e.jsx("p",{children:"We can repeat a string multiple times using * operator."}),e.jsx("pre",{children:`s = "Hello "
print(s * 3)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Hello Hello Hello "})]}),e.jsx("h3",{children:"Formatting Strings"}),e.jsx("p",{children:"Python provides several ways to include variables inside strings."}),e.jsx("h3",{children:"Using f-strings"}),e.jsx("p",{children:"The simplest and most preferred way to format strings is by using f-strings."}),e.jsx("pre",{children:`name = "Alice"
age = 22
print(f"Name: {name}, Age: {age}")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Name: Alice, Age: 22"})]}),e.jsx("h3",{children:"Using format()"}),e.jsx("p",{children:"Another way to format strings is by using format() method."}),e.jsx("pre",{children:`s = "My name is {} and I am {} years old.".format("Alice", 22)
print(s)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"My name is Alice and I am 22 years old."})]}),e.jsx("h3",{children:"Using in for String Membership Testing"}),e.jsx("p",{children:"The in keyword checks if a particular substring is present in a string."}),e.jsx("pre",{children:`s = "GeeksforGeeks"
print("Geeks" in s)
print("GfG" in s)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"True"}),e.jsx("p",{children:"False"})]})]})]})}),mg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Lists in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Lists"}),e.jsx("p",{children:"In Python, a list is a built-in dynamic sized array (automatically grows and shrinks). We can store all types of items (including another list) in a list. A list may contain mixed type of items, this is possible because a list mainly stores references at contiguous locations and actual items maybe stored at different locations."}),e.jsxs("ul",{children:[e.jsx("li",{children:"List can contain duplicate items."}),e.jsx("li",{children:"List in Python are Mutable. Hence, we can modify, replace or delete the items."}),e.jsx("li",{children:"List are ordered. It maintain the order of elements based on how they are added."}),e.jsx("li",{children:"Accessing items in List can be done directly using their position (index), starting from 0."})]}),e.jsx("h3",{children:"Example :"}),e.jsx("pre",{children:`# Creating a Python list with different data types
a = [10, 20, "GfG", 40, True]
print(a)

# Accessing elements using indexing
print(a[0])  # 10
print(a[1])  # 20
print(a[2])  # "GfG"
print(a[3])  # 40
print(a[4])  # True

# Checking types of elements
print(type(a[2]))  # str
print(type(a[4]))  # bool
`}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"The list contains a mix of integers (10, 20, 40), a string (“GfG”) and a boolean (True)."}),e.jsx("li",{children:"The list is printed and individual elements are accessed using their indexes (starting from 0)."}),e.jsx("li",{children:"type(a[2]) confirms “GfG” is a str."}),e.jsx("li",{children:"type(a[4]) confirms True is a bool."})]}),e.jsx("h3",{children:"Python List"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Lists Store References, Not Values"]}),e.jsx("p",{children:"Each element in a list is not stored directly inside the list structure. Instead, the list stores references (pointers) to the actual objects in memory. Example (from the image representation). "}),e.jsxs("p",{children:["The list a itself is a container with references (addresses) to the actual values.",e.jsx("br",{}),"Python internally creates separate objects for 10, 20, “GfG”, 40 and True, then stores their memory addresses inside a.",e.jsx("br",{}),"This means that modifying an element doesn’t affect other elements but can affect the referenced object if it is mutable"]}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Creating a List"}),e.jsx("li",{children:"Accessing List Elements"}),e.jsx("li",{children:"Adding Elements into List"}),e.jsx("li",{children:"Updating Elements into List"}),e.jsx("li",{children:"Removing Elements from List"}),e.jsx("li",{children:"Iterating Over Lists"}),e.jsx("li",{children:"Nested Lists in Python"}),e.jsx("li",{children:"Python List Operation Programs"}),e.jsx("li",{children:"Basic Example on Python List"})]}),e.jsx("h3",{children:"Creating a List"}),e.jsx("p",{children:"Here are some common methods to create a list:"}),e.jsx("h3",{children:"Using Square Brackets"}),e.jsx("pre",{children:`# List of integers
a = [1, 2, 3, 4, 5]

# List of strings
b = ['apple', 'banana', 'cherry']

# Mixed data types
c = [1, 'hello', 3.14, True]

print(a)
print(b)
print(c)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[1, 2, 3, 4, 5]"}),e.jsx("p",{children:"['apple', 'banana', 'cherry']"}),e.jsx("p",{children:"[1, 'hello', 3.14, True]"})]}),e.jsx("h3",{children:"Using list() Constructor"}),e.jsx("p",{children:"We can also create a list by passing an iterable (like a string, tuple or another list) to list() function."}),e.jsx("pre",{children:`# From a tuple
a = list((1, 2, 3, 'apple', 4.5))
print(a)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[1, 2, 3, 'apple', 4.5]"})]}),e.jsx("h3",{children:"Creating List with Repeated Elements"}),e.jsx("p",{children:"We can create a list with repeated elements using the multiplication operator."}),e.jsx("pre",{children:`# Create a list [2, 2, 2, 2, 2]
a = [2] * 5

# Create a list [0, 0, 0, 0, 0, 0, 0]
b = [0] * 7

print(a)
print(b)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2, 2, 2, 2, 2]"}),e.jsx("p",{children:"[0, 0, 0, 0, 0, 0, 0]"})]}),e.jsx("h3",{children:"Accessing List Elements"}),e.jsx("p",{children:"Elements in a list can be accessed using indexing. Python indexes start at 0, so a[0] will access the first element, while negative indexing allows us to access elements from the end of the list. Like index -1 represents the last elements of list."}),e.jsx("pre",{children:`a = [10, 20, 30, 40, 50]

# Access first element
print(a[0])

# Access last element
print(a[-1])
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"10"}),e.jsx("p",{children:"50"})]}),e.jsx("h3",{children:"Adding Elements into List"}),e.jsx("p",{children:"We can add elements to a list using the following methods:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"append():"})," Adds an element at the end of the list."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"extend():"})," Adds multiple elements to the end of the list."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"insert():"})," Adds an element at a specific position."]})]}),e.jsx("pre",{children:`# Initialize an empty list
a = []

# Adding 10 to end of list
a.append(10)
print("After append(10):", a)

# Inserting 5 at index 0
a.insert(0, 5)
print("After insert(0, 5):", a)

# Adding multiple elements  [15, 20, 25] at the end
a.extend([15, 20, 25])
print("After extend([15, 20, 25]):", a)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"After append(10): [10]"}),e.jsx("p",{children:"After insert(0, 5): [5, 10]"}),e.jsx("p",{children:"After extend([15, 20, 25]): [5, 10, 15, 20, 25]"})]}),e.jsx("h3",{children:"Updating Elements into List"}),e.jsx("p",{children:"We can change the value of an element by accessing it using its index."}),e.jsx("pre",{children:`a = [10, 20, 30, 40, 50]

# Change the second element
a[1] = 25
print(a)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[10, 25, 30, 40, 50]"})]}),e.jsx("h3",{children:"Removing Elements from List"}),e.jsx("p",{children:"We can remove elements from a list using:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"remove():"})," Removes the first occurrence of an element."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"pop():"})," Removes the element at a specific index or the last element if no index is specified."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"del statement:"})," Deletes an element at a specified index."]})]}),e.jsx("pre",{children:`a = [10, 20, 30, 40, 50]

# Removes the first occurrence of 30
a.remove(30)
print("After remove(30):", a)

# Removes the element at index 1 (20)
popped_val = a.pop(1)
print("Popped element:", popped_val)
print("After pop(1):", a)

# Deletes the first element (10)
del a[0]
print("After del a[0]:", a)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"After remove(30): [10, 20, 40, 50]"}),e.jsx("p",{children:"Popped element: 20"}),e.jsx("p",{children:"After pop(1): [10, 40, 50]"}),e.jsx("p",{children:"After del a[0]: [40, 50]"})]}),e.jsx("h3",{children:"Iterating Over Lists"}),e.jsx("p",{children:"We can iterate the Lists easily by using a for loop or other iteration methods. Iterating over lists is useful when we want to do some operation on each item or access specific items based on certain conditions. Let’s take an example to iterate over the list using for loop."}),e.jsx("h3",{children:"Using for Loop"}),e.jsx("pre",{children:`a = ['apple', 'banana', 'cherry']

# Iterating over the list
for item in a:
    print(item)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"apple"}),e.jsx("p",{children:"banana"}),e.jsx("p",{children:"cherry"})]}),e.jsx("h3",{children:"Nested Lists in Python"}),e.jsx("p",{children:"A nested list is a list within another list, which is useful for representing matrices or tables. We can access nested elements by chaining indexes."}),e.jsx("pre",{children:`matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Access element at row 2, column 3
print(matrix[1][2])
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"6"})]})]})]})}),jg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Python Tuples"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Tuples"}),e.jsx("p",{children:"A tuple in Python is an immutable ordered collection of elements. Tuples are similar to lists, but unlike lists, they cannot be changed after their creation (i.e., they are immutable). Tuples can hold elements of different data types. The main characteristics of tuples are being ordered, heterogeneous and immutable."}),e.jsx("h3",{children:"Creating a Tuple"}),e.jsx("p",{children:"A tuple is created by placing all the items inside parentheses (), separated by commas. A tuple can have any number of items and they can be of different data types."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`# Creating an empty Tuple
tup = ()
print(tup)

# Using String
tup = ('Geeks', 'For')
print(tup)

# Using List
li = [1, 2, 4, 5, 6]
print(tuple(li))

# Using Built-in Function
tup = tuple('Geeks')
print(tup)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"()"}),e.jsx("p",{children:"('Geeks', 'For')"}),e.jsx("p",{children:"(1, 2, 4, 5, 6)"}),e.jsx("p",{children:"('G', 'e', 'e', 'k', 's')"})]}),e.jsx("p",{children:"Let’s understand tuple in detail:"}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Creating a Tuple"}),e.jsx("li",{children:"Python Tuple Operations"}),e.jsx("li",{children:"Accessing of Tuples"}),e.jsx("li",{children:"Concatenation of Tuples"}),e.jsx("li",{children:"Slicing of Tuple"}),e.jsx("li",{children:"Deleting a Tuple"}),e.jsx("li",{children:"Tuple Built-In Methods"}),e.jsx("li",{children:"Tuple Built-In Functions"}),e.jsx("li",{children:"Tuples VS Lists"}),e.jsx("li",{children:"Tuples Programs"})]}),e.jsx("h3",{children:"Creating a Tuple with Mixed Datatypes."}),e.jsx("p",{children:"Tuples can contain elements of various data types, including other tuples, lists, dictionaries and even functions."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`# Creating a Tuple with Mixed Datatype
tup = (5, 'Welcome', 7, 'Geeks')
print(tup)

# Creating a Tuple with nested tuples
tup1 = (0, 1, 2, 3)
tup2 = ('python', 'geek')
tup3 = (tup1, tup2)
print(tup3)

# Creating a Tuple with repetition
tup1 = ('Geeks',) * 3
print(tup1)

# Creating a Tuple with the use of loop
tup = ('Geeks')
n = 5
for i in range(int(n)):
    tup = (tup,)
    print(tup)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"(5, 'Welcome', 7, 'Geeks')"}),e.jsx("p",{children:"((0, 1, 2, 3), ('python', 'geek'))"}),e.jsx("p",{children:"('Geeks', 'Geeks', 'Geeks')"}),e.jsx("p",{children:"('Geeks',)"}),e.jsx("p",{children:"(('Geeks',),)"}),e.jsx("p",{children:"((('Geeks',),),)"}),e.jsx("p",{children:"(((('Geeks',),),),)"}),e.jsx("p",{children:"((((('Geeks',),),),),)"})]}),e.jsx("h3",{children:"Python Tuple Operations"}),e.jsx("p",{children:"Below are the Python tuple operations."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Accessing of Python Tuples"}),e.jsx("li",{children:"Concatenation of Tuples"}),e.jsx("li",{children:"Slicing of Tuple"}),e.jsx("li",{children:"Deleting a Tuple"})]}),e.jsx("h3",{children:"Accessing of Tuples"}),e.jsx("p",{children:"We can access the elements of a tuple by using indexing and slicing, similar to how we access elements in a list. Indexing starts at 0 for the first element and goes up to n-1, where n is the number of elements in the tuple. Negative indexing starts from -1 for the last element and goes backward."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`# Accessing Tuple with Indexing
tup = tuple("Geeks")
print(tup[0])

# Accessing a range of elements using slicing
print(tup[1:4])
print(tup[:3])

# Tuple unpacking
tup = ("Geeks", "For", "Geeks")
# This line unpack values of Tuple1
a, b, c = tup
print(a)
print(b)
print(c)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"G"}),e.jsx("p",{children:"('e', 'e', 'k')"}),e.jsx("p",{children:"('G', 'e', 'e')"}),e.jsx("p",{children:"Geeks"}),e.jsx("p",{children:"For"}),e.jsx("p",{children:"Geeks"})]}),e.jsx("h3",{children:"Concatenation of Tuples"}),e.jsx("p",{children:"Tuples can be concatenated using the + operator. This operation combines two or more tuples to create a new tuple."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note-"})," Only the same datatypes can be combined with concatenation, an error arises if a list and a tuple are combined."]}),e.jsx("pre",{children:`tup1 = (0, 1, 2, 3)
tup2 = ('Geeks', 'For', 'Geeks')
tup3 = tup1 + tup2
print(tup3)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"(0, 1, 2, 3, 'Geeks', 'For', 'Geeks')"})]}),e.jsx("h3",{children:"Slicing of Tuple"}),e.jsx("p",{children:"Slicing a tuple means creating a new tuple from a subset of elements of the original tuple. The slicing syntax is tuple[start:stop:step]."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note-"})," Negative Increment values can also be used to reverse the sequence of Tuples."]}),e.jsx("pre",{children:`# Slicing of a Tuple with Numbers
tup = tuple('GEEKSFORGEEKS')

# Removing First element
print(tup[1:])

# Reversing the Tuple
print(tup[::-1])

# Printing elements of a Range
print(tup[4:9])
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"('E', 'E', 'K', 'S', 'F', 'O', 'R', 'G', 'E', 'E', 'K', 'S')"}),e.jsx("p",{children:"('S', 'K', 'E', 'E', 'G', 'R', 'O', 'F', 'S', 'K', 'E', 'E', 'G')"}),e.jsx("p",{children:"('S', 'F', 'O', 'R', 'G')"})]}),e.jsx("h3",{children:"Deleting a Tuple"}),e.jsx("p",{children:"Since tuples are immutable, we cannot delete individual elements of a tuple. However, we can delete an entire tuple using del statement."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note-"})," Printing of Tuple after deletion results in an Error."]}),e.jsx("pre",{children:`# Deleting a Tuple
tup = (0, 1, 2, 3, 4)
del tup
# print(tup) # Uncommenting this line will cause NameError: name 'tup' is not defined
`}),e.jsx("h3",{children:"Tuple Built-In Methods"}),e.jsx("p",{children:"Tuples support only a few methods due to their immutable nature. The two most commonly used methods are count() and index()"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Built-in-Method"}),e.jsx("th",{children:"Description"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"index()"}),e.jsx("td",{children:"Find in the tuple and returns the index of the given value where it’s available"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"count()"}),e.jsx("td",{children:"Returns the frequency of occurrence of a specified value"})]})]}),e.jsx("h3",{children:"Tuple Built-In Functions"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Built-in Function"}),e.jsx("th",{children:"Description"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"all()"}),e.jsx("td",{children:"Returns true if all element are true or if tuple is empty"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"any()"}),e.jsx("td",{children:"return true if any element of the tuple is true. if tuple is empty, return false"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"len()"}),e.jsx("td",{children:"Returns length of the tuple or size of the tuple"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"enumerate()"}),e.jsx("td",{children:"Returns enumerate object of tuple"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"max()"}),e.jsx("td",{children:"return maximum element of given tuple"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"min()"}),e.jsx("td",{children:"return minimum element of given tuples"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sum()"}),e.jsx("td",{children:"Sums up the numbers in the tuples"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sorted()"}),e.jsx("td",{children:"input elements in the tuple and return a new sorted list"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"tuple()"}),e.jsx("td",{children:"Convert an iterable to a tuple."})]})]}),e.jsx("h3",{children:"Tuples VS Lists"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Similarities"}),e.jsx("th",{children:"Differences"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Functions that can be used for both lists and tuples:",e.jsx("br",{}),"len(), max(), min(), sum(), any(), all(), sorted()"]}),e.jsxs("td",{children:["Methods that cannot be used for tuples:",e.jsx("br",{}),"append(), insert(), remove(), pop(), clear(), sort(), reverse()"]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Methods that can be used for both lists and tuples:",e.jsx("br",{}),"count(), Index()"]}),e.jsx("td",{children:"we generally use ‘tuples’ for heterogeneous (different) data types and ‘lists’ for homogeneous (similar) data types."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tuples can be stored in lists."}),e.jsx("td",{children:"Iterating through a ‘tuple’ is faster than in a ‘list’."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Lists can be stored in tuples."}),e.jsx("td",{children:"‘Lists’ are mutable whereas ‘tuples’ are immutable."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Both ‘tuples’ and ‘lists’ can be nested."}),e.jsx("td",{children:"Tuples that contain immutable elements can be used as a key for a dictionary."})]})]})]})]})}),gg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Dictionaries in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Dictionaries"}),e.jsx("p",{children:"A Python dictionary is a data structure that stores the value in key: value pairs. Values in a dictionary can be of any data type and can be duplicated, whereas keys can’t be repeated and must be immutable."}),e.jsx("h3",{children:"Example:"}),e.jsx("p",{children:"Here, The data is stored in key:value pairs in dictionaries, which makes it easier to find values."}),e.jsx("pre",{children:`d = {1: 'Geeks', 2: 'For', 3: 'Geeks'}
print(d)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1: 'Geeks', 2: 'For', 3: 'Geeks'"})]}),e.jsx("h3",{children:"How to Create a Dictionary"}),e.jsxs("p",{children:["In Python, a dictionary can be created by placing a sequence of elements within curly "," braces, separated by a ‘comma’."]}),e.jsx("pre",{children:`# create dictionary using { }
d1 = {1: 'Geeks', 2: 'For', 3: 'Geeks'}
print(d1)

# create dictionary using dict() constructor
d2 = dict(a = "Geeks", b = "for", c = "Geeks")
print(d2)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1: 'Geeks', 2: 'For', 3: 'Geeks'"}),e.jsx("p",{children:"'a': 'Geeks', 'b': 'for', 'c': 'Geeks'"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"From Python 3.7 Version onward, Python dictionary are Ordered."}),e.jsx("li",{children:"Dictionary keys are case sensitive: the same name but different cases of Key will be treated distinctly."}),e.jsx("li",{children:"Keys must be immutable: This means keys can be strings, numbers, or tuples but not lists."}),e.jsx("li",{children:"Keys must be unique: Duplicate keys are not allowed and any duplicate key will overwrite the previous value."}),e.jsx("li",{children:"Dictionary internally uses Hashing. Hence, operations like search, insert, delete can be performed in Constant Time."})]}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Accessing Dictionary Items"}),e.jsx("li",{children:"Adding and Updating Dictionary Items"}),e.jsx("li",{children:"Removing Dictionary Items"}),e.jsx("li",{children:"Iterating Through a Dictionary"}),e.jsx("li",{children:"Nested Dictionaries"})]}),e.jsx("h3",{children:"Accessing Dictionary Items"}),e.jsx("p",{children:"We can access a value from a dictionary by using the key within square brackets or get() method."}),e.jsx("pre",{children:`d = { "name": "Alice", 1: "Python", (1, 2): [1,2,4] }

# Access using key
print(d["name"])

# Access using get()
print(d.get("name"))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Alice"}),e.jsx("p",{children:"Alice"})]}),e.jsx("h3",{children:"Adding and Updating Dictionary Items"}),e.jsx("p",{children:"We can add new key-value pairs or update existing keys by using assignment."}),e.jsx("pre",{children:`d = {1: 'Geeks', 2: 'For', 3: 'Geeks'}

# Adding a new key-value pair
d["age"] = 22

# Updating an existing value
d[1] = "Python dict"

print(d)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1: 'Python dict', 2: 'For', 3: 'Geeks', 'age': 22"})]}),e.jsx("h3",{children:"Removing Dictionary Items"}),e.jsx("p",{children:"We can remove items from dictionary using the following methods:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"del: Removes an item by key."}),e.jsx("li",{children:"pop(): Removes an item by key and returns its value."}),e.jsx("li",{children:"clear(): Empties the dictionary."}),e.jsx("li",{children:"popitem(): Removes and returns the last key-value pair."})]}),e.jsx("pre",{children:`d = {1: 'Geeks', 2: 'For', 3: 'Geeks', 'age':22}

# Using del to remove an item
del d["age"]
print(d)

# Using pop() to remove an item and return the value
val = d.pop(1)
print(val)

# Using popitem to removes and returns
# the last key-value pair.
key, val = d.popitem()
print(f"Key: {key}, Value: {val}")

# Clear all items from the dictionary
d.clear()
print(d)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1: 'Geeks', 2: 'For', 3: 'Geeks'"}),e.jsx("p",{children:"Geeks"}),e.jsx("p",{children:"Key: 3, Value: Geeks"}),e.jsx("p",{})]}),e.jsx("h3",{children:"Iterating Through a Dictionary"}),e.jsx("p",{children:"We can iterate over keys [using keys() method] , values [using values() method] or both [using item() method] with a for loop."}),e.jsx("pre",{children:`d = {1: 'Geeks', 2: 'For', 'age':22}

# Iterate over keys
for key in d:
    print(key)

# Iterate over values
for value in d.values():
    print(value)

# Iterate over key-value pairs
for key, value in d.items():
    print(f"{key}: {value}")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1"}),e.jsx("p",{children:"2"}),e.jsx("p",{children:"age"}),e.jsx("p",{children:"Geeks"}),e.jsx("p",{children:"For"}),e.jsx("p",{children:"22"}),e.jsx("p",{children:"1: Geeks"}),e.jsx("p",{children:"2: For"}),e.jsx("p",{children:"age: 22"})]})]})]})}),yg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Python Sets"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Sets"}),e.jsx("p",{children:"Python set is an unordered collection of multiple items having different datatypes. In Python, sets are mutable, unindexed and do not contain duplicates. The order of elements in a set is not preserved and can change."}),e.jsx("h3",{children:"Creating a Set in Python"}),e.jsx("p",{children:"In Python, the most basic and efficient method for creating a set is using curly braces."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
set1 = {1, 2, 3, 4}
print(set1)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1, 2, 3, 4"})]}),e.jsx("h3",{children:"Using the set() function"}),e.jsx("p",{children:"Python Sets can be created by using the built-in set() function with an iterable object or a sequence by placing the sequence inside curly braces, separated by a ‘comma’."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," A Python set cannot have mutable elements like a list or dictionary, as it is immutable."]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`# Creating a Set
set1 = set()
print(set1)

set1 = set("GeeksForGeeks")
print(set1)

# Creating a Set with the use of a List
set1 = set(["Geeks", "For", "Geeks"])
print(set1)

# Creating a Set with the use of a tuple
tup = ("Geeks", "for", "Geeks")
print(set(tup))

# Creating a Set with the use of a dictionary
d = {"Geeks": 1, "for": 2, "Geeks": 3}
print(set(d))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"set()"}),e.jsx("p",{children:"'e', 'r', 'o', 'k', 'G', 's', 'F'"}),e.jsx("p",{children:"'For', 'Geeks'"}),e.jsx("p",{children:"'for', 'Geeks'"}),e.jsx("p",{children:"'for', 'Geeks'"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Time complexity:"})," O(n), where n is the length of the input string, list, tuple or dictionary."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Auxiliary space:"})," O(n), where n is the length of the input string, list, tuple or dictionary."]}),e.jsx("h3",{children:"Unordered, Unindexed and Mutability"}),e.jsx("p",{children:"In set, the order of elements is not guaranteed to be the same as the order in which they were added. The output could vary each time we run the program. Also the duplicate items entered are removed by itself."}),e.jsx("p",{children:"Sets do not support indexing. Trying to access an element by index (set[0]) raises a TypeError."}),e.jsx("p",{children:"We can add elements to the set using add(). We can remove elements from the set using remove(). The set changes after these operations, demonstrating its mutability. However, we cannot changes its items directly."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`# Creating a set
set1 = {3, 1, 4, 1, 5, 9, 2}

# Unordered: The order of elements is not preserved
print(set1)  # Output may vary: {1, 2, 3, 4, 5, 9}

# Unindexed: Accessing elements by index is not possible
# This will raise a TypeError
try:
    print(set1[0])
except TypeError as e:
    print(e)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1, 2, 3, 4, 5, 9"}),e.jsx("p",{children:"'set' object is not subscriptable"})]}),e.jsx("h3",{children:"Adding Elements to a Set in Python"}),e.jsx("p",{children:"We can add items to a set using add() method and update() method. add() method can be used to add only a single item. To add multiple items we use update() method."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`# Creating a set
set1 = {1, 2, 3}

# Add one item
set1.add(4)

# Add multiple items
set1.update([5, 6])

print(set1)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1, 2, 3, 4, 5, 6"})]}),e.jsx("h3",{children:"Accessing a Set in Python"}),e.jsx("p",{children:"We can loop through a set to access set items as set is unindexed and do not support accessing elements by indexing. Also we can use in keyword which is membership operator to check if an item exists in a set."}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`set1 = set(["Geeks", "For", "Geeks."])

# Accessing element using For loop
for i in set1:
    print(i, end=" ")

# Checking the element
# using in keyword
print("Geeks" in set1)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Geeks For Geeks. True"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Explanation:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"This loop will print each item in the set. Since sets are unordered, the order of items printed is not guaranteed."}),e.jsx("li",{children:"This code checks if the number 4 is in set1 and prints a corresponding message."})]}),e.jsx("h3",{children:"Removing Elements from the Set in Python"}),e.jsx("p",{children:"We can remove an element from a set in Python using several methods: remove(), discard() and pop(). Each method works slightly differently :"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Using remove() Method or discard() Method"}),e.jsx("li",{children:"Using pop() Method"}),e.jsx("li",{children:"Using clear() Method"})]}),e.jsx("h3",{children:"Using remove() Method or discard() Method"}),e.jsx("p",{children:"remove() method removes a specified element from the set. If the element is not present in the set, it raises a KeyError. discard() method also removes a specified element from the set. Unlike remove(), if the element is not found, it does not raise an error."}),e.jsx("pre",{children:`# Using Remove Method
set1 = {1, 2, 3, 4, 5}
set1.remove(3)
print(set1)

# Attempting to remove an element that does not exist
try:
    set1.remove(10)
except KeyError as e:
    print("Error:", e)

# Using discard() Method
set1.discard(4)
print(set1)

# Attempting to discard an element that does not exist
set1.discard(10)  # No error raised
print(set1)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1, 2, 4, 5"}),e.jsx("p",{children:"Error: 10"}),e.jsx("p",{children:"1, 2, 5"}),e.jsx("p",{children:"1, 2, 5"})]}),e.jsx("h3",{children:"Using pop() Method"}),e.jsx("p",{children:"pop() method removes and returns an arbitrary element from the set. This means we don’t know which element will be removed. If the set is empty, it raises a KeyError."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," If the set is unordered then there’s no such way to determine which element is popped by using the pop() function."]}),e.jsx("pre",{children:`set1 = {1, 2, 3, 4, 5}
val = set1.pop()
print(valHTML

)
print(set1)

# Using pop on an empty set
set1.clear()  # Clear the set to make it empty
try:
    set1.pop()
except KeyError as e:
    print("Error:", e)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1"}),e.jsx("p",{children:"2, 3, 4, 5"}),e.jsx("p",{children:"Error: 'pop from an empty set'"})]}),e.jsx("h3",{children:"Using clear() Method"}),e.jsx("p",{children:"clear() method removes all elements from the set, leaving it empty."}),e.jsx("pre",{children:`set1 = {1, 2, 3, 4, 5}
set1.clear()
print(set1)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"set()"})]}),e.jsx("h3",{children:"Frozen Sets in Python"}),e.jsx("p",{children:"A frozenset in Python is a built-in data type that is similar to a set but with one key difference that is immutability. This means that once a frozenset is created, we cannot modify its elements that is we cannot add, remove or change any items in it. Like regular sets, a frozenset cannot contain duplicate elements."}),e.jsx("p",{children:"If no parameters are passed, it returns an empty frozenset."}),e.jsx("pre",{children:`# Creating a frozenset from a list
fset = frozenset([1, 2, 3, 4, 5])
print(fset)

# Creating a frozenset from a set
set1 = {3, 1, 4, 1, 5}
fset = frozenset(set1)
print(fset)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"frozenset(1, 2, 3, 4, 5)"}),e.jsx("p",{children:"frozenset(1, 3, 4, 5)"})]}),e.jsx("h3",{children:"Typecasting Objects into Sets"}),e.jsx("p",{children:"Typecasting objects into sets in Python refers to converting various data types into a set. Python provides the set() constructor to perform this typecasting, allowing us to convert lists, tuples and strings into sets."}),e.jsx("pre",{children:`# Typecasting list into set
li = [1, 2, 3, 3, 4, 5, 5, 6, 2]
set1 = set(li)
print(set1)

# Typecasting string into set
s = "GeeksforGeeks"
set1 = set(s)
print(set1)

# Typecasting dictionary into set
d = {1: "One", 2: "Two", 3: "Three"}
set1 = set(d)
print(set1)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1, 2, 3, 4, 5, 6"}),e.jsx("p",{children:"'f', 'G', 's', 'k', 'r', 'e', 'o'"}),e.jsx("p",{children:"1, 2, 3"})]}),e.jsx("h3",{children:"Advantages of Set in Python"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Unique Elements:"})," Sets can only contain unique elements, so they can be useful for removing duplicates from a collection of data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fast Membership Testing:"})," Sets are optimized for fast membership testing, so they can be useful for determining whether a value is in a collection or not."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mathematical Set Operations:"})," Sets support mathematical set operations like union, intersection and difference, which can be useful for working with sets of data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mutable:"})," Sets are mutable, which means that you can add or remove elements from a set after it has been created."]})]}),e.jsx("h3",{children:"Disadvantages of Sets in Python"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Unordered:"})," Sets are unordered, which means that you cannot rely on the order of the data in the set. This can make it difficult to access or process data in a specific order."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Limited Functionality:"})," Sets have limited functionality compared to lists, as they do not support methods like append() or pop(). This can make it more difficult to modify or manipulate data stored in a set."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memory Usage:"})," Sets can consume more memory than lists, especially for small datasets. This is because each element in a set requires additional memory to store a hash value."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Less Commonly Used:"})," Sets are less commonly used than lists and dictionaries in Python, which means that there may be fewer resources or libraries available for working with them. This can make it more difficult to find solutions to problems or to get help with debugging."]})]}),e.jsx("p",{children:"Overall, sets can be a useful data structure in Python, especially for removing duplicates or for fast membership testing. However, their lack of ordering and limited functionality can also make them less versatile than lists or dictionaries, so it is important to carefully consider the advantages and disadvantages of using sets when deciding which data structure to use in your Python program."}),e.jsx("h3",{children:"Set Methods in Python"}),e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Function"}),e.jsx("th",{children:"Description"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"add()"}),e.jsx("td",{children:"Adds an element to a set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"remove()"}),e.jsx("td",{children:"Removes an element from a set. If the element is not present in the set, raise a KeyError"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"clear()"}),e.jsx("td",{children:"Removes all elements form a set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"copy()"}),e.jsx("td",{children:"Returns a shallow copy of a set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"pop()"}),e.jsx("td",{children:"Removes and returns an arbitrary set element. Raise KeyError if the set is empty"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"update()"}),e.jsx("td",{children:"Updates a set with the union of itself and others"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"union()"}),e.jsx("td",{children:"Returns the union of sets in a new set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"difference()"}),e.jsx("td",{children:"Returns the difference of two or more sets as a new set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"difference_update()"}),e.jsx("td",{children:"Removes all elements of another set from this set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"discard()"}),e.jsx("td",{children:"Removes an element from set if it is a member. (Do nothing if the element is not in set)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"intersection()"}),e.jsx("td",{children:"Returns the intersection of two sets as a new set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"intersection_update()"}),e.jsx("td",{children:"Updates the set with the intersection of itself and another"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"isdisjoint()"}),e.jsx("td",{children:"Returns True if two sets have a null intersection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"issubset()"}),e.jsx("td",{children:"Returns True if another set contains this set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"issuperset()"}),e.jsx("td",{children:"Returns True if this set contains another sets"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symmetric_difference()"}),e.jsx("td",{children:"Returns the symmetric difference of two sets as a new set"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"symmetric_difference_update()"}),e.jsx("td",{children:"Updates a set with the symmetric difference of itself and another"})]})]})]})]})}),bg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"Python Arrays"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"Arrays"}),e.jsx("p",{children:"Lists in Python are the most flexible and commonly used data structure for sequential storage. They are similar to arrays in other languages but with several key differences:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dynamic Typing:"})," Python lists can hold elements of different types in the same list. We can have an integer, a string and even other lists all stored within a single list."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dynamic Resizing:"})," Lists are dynamically resized, meaning you can add or remove elements without declaring the size of the list upfront."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Built-in Methods:"})," Python lists come with numerous built-in methods that allow for easy manipulation of the elements within them, including methods for appending, removing, sorting and reversing elements."]})]}),e.jsx("h3",{children:"Example:"}),e.jsx("pre",{children:`
a = [1, "Hello", [3.14, "world"]]
a.append(2)  # Add an integer to the end
print(a)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[1, 'Hello', [3.14, 'world'], 2]"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Python does not have built-in array support in the same way that languages like C and Java do, but it provides something similar through the array module for storing elements of a single type."]}),e.jsx("h3",{children:"NumPy Arrays"}),e.jsx("p",{children:"NumPy arrays are a part of the NumPy library, which is a powerful tool for numerical computing in Python. These arrays are designed for high-performance operations on large volumes of data and support multi-dimensional arrays and matrices. This makes them ideal for complex mathematical computations and large-scale data processing."}),e.jsx("h3",{children:"Key Features:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Multi-dimensional support:"})," NumPy arrays can handle more than one dimension, making them suitable for matrix operations and more complex mathematical constructs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Broad broadcasting capabilities:"})," They can perform operations between arrays of different sizes and shapes, a feature known as broadcasting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Efficient storage and processing:"})," NumPy arrays are stored more efficiently than Python lists and provide optimized performance for numerical operations."]})]}),e.jsx("h3",{children:"Example Code:"}),e.jsx("pre",{children:`
import numpy as np

# Creating a NumPy array
arr = np.array([1, 2, 3, 4])

# Element-wise operations
print(arr * 2)

# Multi-dimensional array
arr2d = np.array([[1, 2], [3, 4]])
print(arr2d * 2)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2 4 6 8]"}),e.jsxs("p",{children:["[[2 4]",e.jsx("br",{})," [6 8]]"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Choose NumPy arrays for scientific computing, where you need to handle complex operations or work with multi-dimensional data."]}),e.jsx("p",{children:"Use Python’s array module when you need a basic, memory-efficient container for large quantities of uniform data types, especially when your operations are simple and do not require the capabilities of NumPy."}),e.jsx("h3",{children:"Python Arrays"}),e.jsx("p",{children:"In Python, array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. Unlike Python lists (can store elements of mixed types), arrays must have all elements of same type. Having only homogeneous elements makes it memory-efficient."}),e.jsx("h3",{children:"Python Array Example:"}),e.jsx("pre",{children:`
import array as arr

# creating array of integers
a = arr.array('i', [1, 2, 3])

# accessing First Araay
print(a[0])

# Adding element to array
a.append(5)
print(a)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1"}),e.jsx("p",{children:"array('i', [1, 2, 3, 5])"})]}),e.jsx("h3",{children:"Create an Array in Python"}),e.jsx("p",{children:"Array in Python can be created by importing an array module. array( data_type , value_list ) is used to create array in Python with data type and value list specified in its arguments."}),e.jsx("pre",{children:`
import array as arr

# creating array
a = arr.array('i', [1, 2, 3])

# iterating and printing each item
for i in range(0, 3):
    print(a[i], end=" ")
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1 2 3 "})]}),e.jsx("h3",{children:"Python Array Index"}),e.jsx("h3",{children:"Adding Elements to an Array"}),e.jsx("p",{children:"Elements can be added to the Python Array by using built-in insert() function. Insert is used to insert one or more data elements into an array. Based on the requirement, a new element can be added at the beginning, end, or any given index of array. append() is also used to add the value mentioned in its arguments at the end of the Python array."}),e.jsx("pre",{children:`
import array as arr

# Integer array example
a = arr.array('i', [1, 2, 3])
print("Integer Array before insertion:", *a)

a.insert(1, 4)  # Insert 4 at index 1
print("Integer Array after insertion:", *a)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Integer Array before insertion: 1 2 3"}),e.jsx("p",{children:"Integer Array after insertion: 1 4 2 3"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," We have used *a and *b for unpacking the array elements."]}),e.jsx("h3",{children:"Accessing Array Items"}),e.jsx("p",{children:"In order to access the array items refer to the index number. Use the index operator [ ] to access an item in a array in Python. The index must be an integer."}),e.jsx("pre",{children:`
import array as arr

a = arr.array('i', [1, 2, 3, 4, 5, 6])
print(a[0])
print(a[3])

b = arr.array('d', [2.5, 3.2, 3.3])
print(b[1])
print(b[2])
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1"}),e.jsx("p",{children:"4"}),e.jsx("p",{children:"3.2"}),e.jsx("p",{children:"3.3"})]}),e.jsx("h3",{children:"Removing Elements from the Array"}),e.jsx("p",{children:"Elements can be removed from the Python array by using built-in remove() function. It will raise an Error if element doesn’t exist. Remove() method only removes the first occurrence of the searched element. To remove range of elements, we can use an iterator."}),e.jsx("p",{children:"pop() function can also be used to remove and return an element from the array. By default it removes only the last element of the array. To remove element from a specific position, index of that item is passed as an argument to pop() method."}),e.jsx("pre",{children:`
import array

arr = array.array('i', [1, 2, 3, 1, 5])

# using remove() method to remove first occurance of 1
arr.remove(1)
print(arr)

# pop() method - remove item at index 2
arr.pop(2)
print(arr)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"array('i', [2, 3, 1, 5])"}),e.jsx("p",{children:"array('i', [2, 3, 5])"})]}),e.jsx("h3",{children:"Slicing of an Array"}),e.jsx("p",{children:"In Python array, there are multiple ways to print the whole array with all the elements, but to print a specific range of elements from the array, we use Slice operation."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Elements from beginning to a range use [:Index]"}),e.jsx("li",{children:"Elements from end use [:-HTML Index]"}),e.jsx("li",{children:"Elements from specific Index till the end use [Index:]"}),e.jsx("li",{children:"Elements within a range, use [Start Index:End Index]"}),e.jsx("li",{children:"Print complete List, use [:]"}),e.jsx("li",{children:"For Reverse list, use [::-1]"})]}),e.jsx("pre",{children:`
import array as arr

l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a = arr.array('i', l)

Sliced_array = a[3:8]
print(Sliced_array)

Sliced_array = a[5:]
print(Sliced_array)

Sliced_array = a[:]
print(Sliced_array)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"array('i', [4, 5, 6, 7, 8])"}),e.jsx("p",{children:"array('i', [6, 7, 8, 9, 10])"}),e.jsx("p",{children:"array('i', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])"})]}),e.jsx("h3",{children:"Searching Element in an Array"}),e.jsx("p",{children:"In order to search an element in the array we use a python in-built index() method. This function returns the index of the first occurrence of value mentioned in arguments."}),e.jsx("pre",{children:`
import array

arr = array.array('i', [1, 2, 3, 1, 2, 5])

# index of 1st occurrence of 2
print(arr.index(2))

# index of 1st occurrence of 1
print(arr.index(1))
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"1"}),e.jsx("p",{children:"0"})]}),e.jsx("h3",{children:"Updating Elements in an Array"}),e.jsx("p",{children:"In order to update an element in the array we simply reassign a new value to the desired index we want to update."}),e.jsx("pre",{children:`
import array

arr = array.array('i', [1, 2, 3, 1, 2, 5])

# update item at index 2
arr[2] = 6
print(arr)

# update item at index 4
arr[4] = 8
print(arr)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"array('i', [1, 2, 6, 1, 2, 5])"}),e.jsx("p",{children:"array('i', [1, 2, 6, 1, 8, 5])"})]}),e.jsx("h3",{children:"Different Operations on Python Arrays"}),e.jsx("h3",{children:"Counting Elements in an Array"}),e.jsx("p",{children:"We can use count() method to count given item in array."}),e.jsx("pre",{children:`
import array

arr = array.array('i', [1, 2, 3, 4, 2, 5, 2])

count = arr.count(2)
print("Number of occurrences of 2:", count)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Number of occurrences of 2: 3"})]}),e.jsx("h3",{children:"Reversing Elements in an Array"}),e.jsx("p",{children:"In order to reverse elements of an array we need to simply use reverse method."}),e.jsx("pre",{children:`
import array

arr = array.array('i', [1, 2, 3, 4, 5])

arr.reverse()
print("Reversed array:", *arr)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"Reversed array: 5 4 3 2 1"})]}),e.jsx("h3",{children:"Extend Element from Array"}),e.jsx("p",{children:"In Python, an array is used to store multiple values or elements of the same datatype in a single variable. The extend() function is simply used to attach an item from iterable to the end of the array. In simpler terms, this method is used to add an array of values to the end of a given or existing array."}),e.jsx("p",{children:"list.extend(iterable)"}),e.jsx("p",{children:"Here, all the element of iterable are added to the end of list1"}),e.jsx("pre",{children:`
import array as arr

a = arr.array('i', [1, 2, 3,4,5])

# using extend() method
a.extend([6,7,8,9,10])
print(a)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"array('i', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])"})]})]})]})}),vg=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("header",{className:"header",children:e.jsx("h1",{children:"List Comprehension in Python"})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"List Comprehension in Python"}),e.jsx("p",{children:"List comprehension is a way to create lists using a concise syntax. It allows us to generate a new list by applying an expression to each item in an existing iterable (such as a list or range). This helps us to write cleaner, more readable code compared to traditional looping techniques."}),e.jsx("p",{children:"For example, if we have a list of integers and want to create a new list containing the square of each element, we can easily achieve this using list comprehension."}),e.jsx("pre",{children:`
a = [2,3,4,5]
res = [val ** 2 for val in a]
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[4, 9, 16, 25]"})]}),e.jsx("h3",{children:"Table of Content"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Syntax of list comprehension"}),e.jsx("li",{children:"for loop vs. list comprehension"}),e.jsx("li",{children:"Conditional statements in list comprehension"}),e.jsx("li",{children:"Examples of list comprehension"})]}),e.jsx("h3",{children:"Syntax of list comprehension"}),e.jsx("pre",{children:`
[expression for item in iterable if condition]
`}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"expression:"})," The transformation or value to be included in the new list."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"item:"})," The current element taken from the iterable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"iterable:"})," A sequence or collection (e.g., list, tuple, set)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"if condition (optional):"})," A filtering condition that decides whether the current item should be included."]})]}),e.jsx("p",{children:"This syntax allows us to combine iteration, modification, and conditional filtering all in one line."}),e.jsx("h3",{children:"for loop vs. list comprehension"}),e.jsx("p",{children:"The main difference is that a for loop requires multiple lines to create a new list by iterating over items and manually adding each one. Whereas, list comprehension do the same task in a single line, this makes the code simpler and easier to read."}),e.jsx("h3",{children:"Example:"}),e.jsx("p",{children:"Let’s take an example, where we want to double each number of given list into a new list"}),e.jsx("h3",{children:"Using a for loop:"}),e.jsx("pre",{children:`
a = [1, 2, 3, 4, 5]

# Create an empty list 'res' to store results
res = []

# Iterate over each element in list 'a'
for val in a:
    # Multiply each element by 2 and append it to 'res'
    res.append(val * 2)

print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2, 4, 6, 8, 10]"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," Create an empty list ‘res‘ to store results and iterate over each element in list ‘a‘ and for each items in list ‘a‘, multiply it by 2 and append it to ‘res‘ using append() method."]}),e.jsx("h3",{children:"Using list comprehension:"}),e.jsx("pre",{children:`
a = [1, 2, 3, 4, 5]
res = [val * 2 for val in a]
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2, 4, 6, 8, 10]"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," In the above list comprehension, the iterable is a list ‘a’, and the expression is val * 2, which multiplies each value from the list by 2."]}),e.jsx("h3",{children:"Conditional statements in list comprehension"}),e.jsx("p",{children:"List comprehensions can include conditional statements to filter or modify items based on specific criteria. These conditionals help us create customized lists quickly and making the code cleaner and more efficient."}),e.jsx("h3",{children:"Example:"}),e.jsx("p",{children:"Suppose we want to filter all even list from the given list."}),e.jsx("pre",{children:`
a = [1, 2, 3, 4, 5]
res = [val for val in a if val % 2 == 0]
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[2, 4]"})]}),e.jsxs("p",{children:["To learn more about filtering conditions in list comprehensions, please refer to ",e.jsx("a",{href:"https://www.geeksforgeeks.org/python-list-comprehension-using-if-else/",children:"“Python List Comprehension Using If-Else“"})]}),e.jsx("h3",{children:"Examples of list comprehension"}),e.jsx("h3",{children:"Creating a list from a range"}),e.jsx("p",{children:"A simple example is creating a list of numbers from 0 to 9."}),e.jsx("pre",{children:`
# Creates a list of numbers from 0 to 9
a = [i for i in range(10)]
print(a)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"})]}),e.jsx("h3",{children:"Using nested loops"}),e.jsx("p",{children:"List comprehension can also be used with nested loops. Here, we generate a list of coordinate pairs for a simple 3×3 grid."}),e.jsx("pre",{children:`
# Creates a list of tuples representing all combinations of (x, y)
# where both x and y range from 0 to 2.
coordinates = [(x, y) for x in range(3) for y in range(3)]
print(coordinates)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]"})]}),e.jsx("h3",{children:"Flattening a list of lists"}),e.jsx("p",{children:"Suppose we have a list of lists and we want to convert it into a single list."}),e.jsx("pre",{children:`
mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
res = [val for row in mat for val in row]
print(res)
`}),e.jsxs("div",{class:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("p",{children:"[1, 2, 3, 4, 5, 6, 7, 8, 9]"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Explanation:"})," The line [val for row in mat for val in row] uses nested list comprehension to iterate through each row in mat. For each row, it iterates through each val in that row and collecting all values into a single list."]})]})]})});function wg(){return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(Nm,{children:[e.jsx(B,{path:"/",element:e.jsx(cj,{})}),e.jsx(B,{path:"/Sign",element:e.jsx(hj,{})}),e.jsx(B,{path:"/Home",element:e.jsx(xj,{})}),e.jsx(B,{path:"/account",element:e.jsx(dj,{})}),e.jsx(B,{path:"/CCourse",element:e.jsx(mj,{})}),e.jsx(B,{path:"/Introduction",element:e.jsx(jj,{})}),e.jsx(B,{path:"/Identifier",element:e.jsx(gj,{})}),e.jsx(B,{path:"/Keywords",element:e.jsx(yj,{})}),e.jsx(B,{path:"/Variables",element:e.jsx(bj,{})}),e.jsx(B,{path:"/Datatypes",element:e.jsx(vj,{})}),e.jsx(B,{path:"/Inputoutput",element:e.jsx(wj,{})}),e.jsx(B,{path:"/Operators",element:e.jsx(Tj,{})}),e.jsx(B,{path:"/Conditional",element:e.jsx(kj,{})}),e.jsx(B,{path:"/Loops",element:e.jsx(Sj,{})}),e.jsx(B,{path:"/Function",element:e.jsx(Cj,{})}),e.jsx(B,{path:"/Parameter",element:e.jsx(Aj,{})}),e.jsx(B,{path:"/MainFun",element:e.jsx(Ej,{})}),e.jsx(B,{path:"/Recursion",element:e.jsx(Oj,{})}),e.jsx(B,{path:"/Inline",element:e.jsx(Nj,{})}),e.jsx(B,{path:"/NestedFun",element:e.jsx(Dj,{})}),e.jsx(B,{path:"/Array",element:e.jsx(zj,{})}),e.jsx(B,{path:"/Pointer",element:e.jsx(Rj,{})}),e.jsx(B,{path:"/String",element:e.jsx(Lj,{})}),e.jsx(B,{path:"/Structure",element:e.jsx(Mj,{})}),e.jsx(B,{path:"/Union",element:e.jsx(_j,{})}),e.jsx(B,{path:"/Enum",element:e.jsx(Uj,{})}),e.jsx(B,{path:"/Layout",element:e.jsx(Hj,{})}),e.jsx(B,{path:"/Allocate",element:e.jsx(qj,{})}),e.jsx(B,{path:"/Leak",element:e.jsx(Ij,{})}),e.jsx(B,{path:"/Linked",element:e.jsx(Pj,{})}),e.jsx(B,{path:"/Stack",element:e.jsx(Fj,{})}),e.jsx(B,{path:"/Queue",element:e.jsx(Bj,{})}),e.jsx(B,{path:"/Hash",element:e.jsx(Gj,{})}),e.jsx(B,{path:"/Binarytree",element:e.jsx(Vj,{})}),e.jsx(B,{path:"/Heap",element:e.jsx(Yj,{})}),e.jsx(B,{path:"/Graph",element:e.jsx(Xj,{})}),e.jsx(B,{path:"/Python",element:e.jsx(Qj,{})}),e.jsx(B,{path:"/Pintroduction",element:e.jsx(Wj,{})}),e.jsx(B,{path:"/PInput",element:e.jsx(Kj,{})}),e.jsx(B,{path:"/Pvariable",element:e.jsx(Zj,{})}),e.jsx(B,{path:"/Poperator",element:e.jsx(Jj,{})}),e.jsx(B,{path:"/Pkeyword",element:e.jsx($j,{})}),e.jsx(B,{path:"/Pdatatype",element:e.jsx(eg,{})}),e.jsx(B,{path:"/Pconditional",element:e.jsx(tg,{})}),e.jsx(B,{path:"/Ploop",element:e.jsx(ng,{})}),e.jsx(B,{path:"/PDef",element:e.jsx(ig,{})}),e.jsx(B,{path:"/PUse",element:e.jsx(sg,{})}),e.jsx(B,{path:"/Preturn",element:e.jsx(rg,{})}),e.jsx(B,{path:"/Pglobal",element:e.jsx(ag,{})}),e.jsx(B,{path:"/Precursion",element:e.jsx(lg,{})}),e.jsx(B,{path:"/Pargs",element:e.jsx(og,{})}),e.jsx(B,{path:"/Pself",element:e.jsx(cg,{})}),e.jsx(B,{path:"/Pfirst",element:e.jsx(dg,{})}),e.jsx(B,{path:"/Plambda",element:e.jsx(hg,{})}),e.jsx(B,{path:"/Pmap",element:e.jsx(ug,{})}),e.jsx(B,{path:"/Pinner",element:e.jsx(pg,{})}),e.jsx(B,{path:"/Pdeco",element:e.jsx(fg,{})}),e.jsx(B,{path:"/Pstring",element:e.jsx(xg,{})}),e.jsx(B,{path:"/Plist",element:e.jsx(mg,{})}),e.jsx(B,{path:"/Ptuple",element:e.jsx(jg,{})}),e.jsx(B,{path:"/Pdict",element:e.jsx(gg,{})}),e.jsx(B,{path:"/Pset",element:e.jsx(yg,{})}),e.jsx(B,{path:"/Parray",element:e.jsx(bg,{})}),e.jsx(B,{path:"/Pcom",element:e.jsx(vg,{})})]})})})}Ix.createRoot(document.getElementById("root")).render(e.jsx($m,{children:e.jsx(wg,{})}));
