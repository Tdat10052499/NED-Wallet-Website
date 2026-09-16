(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function r0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mm={exports:{}},kl={},gm={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),s0=Symbol.for("react.portal"),a0=Symbol.for("react.fragment"),o0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),d0=Symbol.for("react.forward_ref"),h0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),p0=Symbol.for("react.lazy"),rf=Symbol.iterator;function m0(t){return t===null||typeof t!="object"?null:(t=rf&&t[rf]||t["@@iterator"],typeof t=="function"?t:null)}var xm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vm=Object.assign,_m={};function Ts(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||xm}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ym(){}ym.prototype=Ts.prototype;function Wd(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||xm}var Xd=Wd.prototype=new ym;Xd.constructor=Wd;vm(Xd,Ts.prototype);Xd.isPureReactComponent=!0;var sf=Array.isArray,Sm=Object.prototype.hasOwnProperty,qd={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function Mm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Sm.call(e,i)&&!bm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ra,type:t,key:s,ref:a,props:r,_owner:qd.current}}function g0(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $d(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function x0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var af=/\/+/g;function nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?x0(""+t.key):e.toString(36)}function ko(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ra:case s0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+nc(a,0):i,sf(r)?(n="",t!=null&&(n=t.replace(af,"$&/")+"/"),ko(r,e,n,"",function(c){return c})):r!=null&&($d(r)&&(r=g0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(af,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",sf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+nc(s,o);a+=ko(s,e,n,l,r)}else if(l=m0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+nc(s,o++),a+=ko(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function za(t,e,n){if(t==null)return t;var i=[],r=0;return ko(t,i,"","",function(s){return e.call(n,s,r++)}),i}function v0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},Po={transition:null},_0={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:Po,ReactCurrentOwner:qd};function Em(){throw Error("act(...) is not supported in production builds of React.")}Fe.Children={map:za,forEach:function(t,e,n){za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return za(t,function(){e++}),e},toArray:function(t){return za(t,function(e){return e})||[]},only:function(t){if(!$d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=Ts;Fe.Fragment=a0;Fe.Profiler=l0;Fe.PureComponent=Wd;Fe.StrictMode=o0;Fe.Suspense=h0;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_0;Fe.act=Em;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Sm.call(e,l)&&!bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ra,type:t.type,key:r,ref:s,props:i,_owner:a}};Fe.createContext=function(t){return t={$$typeof:u0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:c0,_context:t},t.Consumer=t};Fe.createElement=Mm;Fe.createFactory=function(t){var e=Mm.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:d0,render:t}};Fe.isValidElement=$d;Fe.lazy=function(t){return{$$typeof:p0,_payload:{_status:-1,_result:t},_init:v0}};Fe.memo=function(t,e){return{$$typeof:f0,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=Po.transition;Po.transition={};try{t()}finally{Po.transition=e}};Fe.unstable_act=Em;Fe.useCallback=function(t,e){return Gt.current.useCallback(t,e)};Fe.useContext=function(t){return Gt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Gt.current.useEffect(t,e)};Fe.useId=function(){return Gt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Gt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};Fe.useRef=function(t){return Gt.current.useRef(t)};Fe.useState=function(t){return Gt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Gt.current.useTransition()};Fe.version="18.3.1";gm.exports=Fe;var Ue=gm.exports;const y0=r0(Ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=Ue,b0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,w0=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T0={key:!0,ref:!0,__self:!0,__source:!0};function wm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)E0.call(e,i)&&!T0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:b0,type:t,key:s,ref:a,props:r,_owner:w0.current}}kl.Fragment=M0;kl.jsx=wm;kl.jsxs=wm;mm.exports=kl;var d=mm.exports,lu={},Tm={exports:{}},fn={},Am={exports:{}},Cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,K){var Q=k.length;k.push(K);e:for(;0<Q;){var re=Q-1>>>1,Me=k[re];if(0<r(Me,K))k[re]=K,k[Q]=Me,Q=re;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var K=k[0],Q=k.pop();if(Q!==K){k[0]=Q;e:for(var re=0,Me=k.length,Ie=Me>>>1;re<Ie;){var G=2*(re+1)-1,ee=k[G],le=G+1,ce=k[le];if(0>r(ee,Q))le<Me&&0>r(ce,ee)?(k[re]=ce,k[le]=Q,re=le):(k[re]=ee,k[G]=Q,re=G);else if(le<Me&&0>r(ce,Q))k[re]=ce,k[le]=Q,re=le;else break e}}return K}function r(k,K){var Q=k.sortIndex-K.sortIndex;return Q!==0?Q:k.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,p=null,f=3,g=!1,_=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(k){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=k)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function M(k){if(S=!1,v(k),!_)if(n(l)!==null)_=!0,H(N);else{var K=n(c);K!==null&&W(M,K.startTime-k)}}function N(k,K){_=!1,S&&(S=!1,u(R),R=-1),g=!0;var Q=f;try{for(v(K),p=n(l);p!==null&&(!(p.expirationTime>K)||k&&!w());){var re=p.callback;if(typeof re=="function"){p.callback=null,f=p.priorityLevel;var Me=re(p.expirationTime<=K);K=t.unstable_now(),typeof Me=="function"?p.callback=Me:p===n(l)&&i(l),v(K)}else i(l);p=n(l)}if(p!==null)var Ie=!0;else{var G=n(c);G!==null&&W(M,G.startTime-K),Ie=!1}return Ie}finally{p=null,f=Q,g=!1}}var C=!1,T=null,R=-1,X=5,y=-1;function w(){return!(t.unstable_now()-y<X)}function V(){if(T!==null){var k=t.unstable_now();y=k;var K=!0;try{K=T(!0,k)}finally{K?z():(C=!1,T=null)}}else C=!1}var z;if(typeof x=="function")z=function(){x(V)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=V,z=function(){J.postMessage(null)}}else z=function(){m(V,0)};function H(k){T=k,C||(C=!0,z())}function W(k,K){R=m(function(){k(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,H(N))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var Q=f;f=K;try{return k()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,K){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Q=f;f=k;try{return K()}finally{f=Q}},t.unstable_scheduleCallback=function(k,K,Q){var re=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?re+Q:re):Q=re,k){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Q+Me,k={id:h++,callback:K,priorityLevel:k,startTime:Q,expirationTime:Me,sortIndex:-1},Q>re?(k.sortIndex=Q,e(c,k),n(l)===null&&k===n(c)&&(S?(u(R),R=-1):S=!0,W(M,Q-re))):(k.sortIndex=Me,e(l,k),_||g||(_=!0,H(N))),k},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(k){var K=f;return function(){var Q=f;f=K;try{return k.apply(this,arguments)}finally{f=Q}}}})(Cm);Am.exports=Cm;var A0=Am.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=Ue,hn=A0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rm=new Set,la={};function Tr(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(la[t]=e,t=0;t<e.length;t++)Rm.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=Object.prototype.hasOwnProperty,R0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,of={},lf={};function N0(t){return cu.call(lf,t)?!0:cu.call(of,t)?!1:R0.test(t)?lf[t]=!0:(of[t]=!0,!1)}function k0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P0(t,e,n,i){if(e===null||typeof e>"u"||k0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yd,Kd);Dt[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yd,Kd);Dt[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yd,Kd);Dt[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P0(e,n,r,i)&&(n=null),i||r===null?N0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),km=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),hu=Symbol.for("react.suspense_list"),eh=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),Pm=Symbol.for("react.offscreen"),cf=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=cf&&t[cf]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,ic;function $s(t){if(ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ic=e&&e[1]||""}return`
`+ic+t}var rc=!1;function sc(t,e){if(!t||rc)return"";rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function D0(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=sc(t.type,!1),t;case 11:return t=sc(t.type.render,!1),t;case 1:return t=sc(t.type,!0),t;default:return""}}function fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wr:return"Fragment";case Gr:return"Portal";case uu:return"Profiler";case Zd:return"StrictMode";case du:return"Suspense";case hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case km:return(t.displayName||"Context")+".Consumer";case Nm:return(t._context.displayName||"Context")+".Provider";case Jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case eh:return e=t.displayName||null,e!==null?e:fu(t.type)||"Memo";case Ai:e=t._payload,t=t._init;try{return fu(t(e))}catch{}}return null}function L0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fu(e);case 8:return e===Zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I0(t){var e=Dm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Va(t){t._valueTracker||(t._valueTracker=I0(t))}function Lm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Dm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pu(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Im(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function mu(t,e){Im(t,e);var n=Gi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&gu(t,e.type,Gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function df(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gu(t,e,n){(e!=="number"||Jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ys(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gi(n)}}function Um(t,e){var n=Gi(e.value),i=Gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ff(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,Bm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U0=["Webkit","ms","Moz","O"];Object.keys(Js).forEach(function(t){U0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Js[e]=Js[t]})});function Om(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Js.hasOwnProperty(t)&&Js[t]?(""+e).trim():e+"px"}function zm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Om(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var F0=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(t,e){if(e){if(F0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Su=null;function th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bu=null,rs=null,ss=null;function pf(t){if(t=Pa(t)){if(typeof bu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Ul(e),bu(t.stateNode,t.type,e))}}function Hm(t){rs?ss?ss.push(t):ss=[t]:rs=t}function Vm(){if(rs){var t=rs,e=ss;if(ss=rs=null,pf(t),e)for(t=0;t<e.length;t++)pf(e[t])}}function jm(t,e){return t(e)}function Gm(){}var ac=!1;function Wm(t,e,n){if(ac)return t(e,n);ac=!0;try{return jm(t,e,n)}finally{ac=!1,(rs!==null||ss!==null)&&(Gm(),Vm())}}function ua(t,e){var n=t.stateNode;if(n===null)return null;var i=Ul(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Mu=!1;if(hi)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Mu=!1}function B0(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ea=!1,el=null,tl=!1,Eu=null,O0={onError:function(t){ea=!0,el=t}};function z0(t,e,n,i,r,s,a,o,l){ea=!1,el=null,B0.apply(O0,arguments)}function H0(t,e,n,i,r,s,a,o,l){if(z0.apply(this,arguments),ea){if(ea){var c=el;ea=!1,el=null}else throw Error(ne(198));tl||(tl=!0,Eu=c)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mf(t){if(Ar(t)!==t)throw Error(ne(188))}function V0(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mf(r),t;if(s===i)return mf(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function qm(t){return t=V0(t),t!==null?$m(t):null}function $m(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$m(t);if(e!==null)return e;t=t.sibling}return null}var Ym=hn.unstable_scheduleCallback,gf=hn.unstable_cancelCallback,j0=hn.unstable_shouldYield,G0=hn.unstable_requestPaint,vt=hn.unstable_now,W0=hn.unstable_getCurrentPriorityLevel,nh=hn.unstable_ImmediatePriority,Km=hn.unstable_UserBlockingPriority,nl=hn.unstable_NormalPriority,X0=hn.unstable_LowPriority,Qm=hn.unstable_IdlePriority,Pl=null,Wn=null;function q0(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:K0,$0=Math.log,Y0=Math.LN2;function K0(t){return t>>>=0,t===0?32:31-($0(t)/Y0|0)|0}var Ga=64,Wa=4194304;function Ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ks(o):(s&=a,s!==0&&(i=Ks(s)))}else a=n&~r,a!==0?i=Ks(a):s!==0&&(i=Ks(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function Q0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Un(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Q0(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zm(){var t=Ga;return Ga<<=1,!(Ga&4194240)&&(Ga=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function J0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ih(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Jm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var eg,rh,tg,ng,ig,Tu=!1,Xa=[],Li=null,Ii=null,Ui=null,da=new Map,ha=new Map,Ri=[],e_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Ui=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function Is(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Pa(e),e!==null&&rh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function t_(t,e,n,i,r){switch(e){case"focusin":return Li=Is(Li,t,e,n,i,r),!0;case"dragenter":return Ii=Is(Ii,t,e,n,i,r),!0;case"mouseover":return Ui=Is(Ui,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,Is(da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,Is(ha.get(s)||null,t,e,n,i,r)),!0}return!1}function rg(t){var e=hr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Xm(n),e!==null){t.blockedOn=e,ig(t.priority,function(){tg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Do(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Au(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Su=i,n.target.dispatchEvent(i),Su=null}else return e=Pa(n),e!==null&&rh(e),t.blockedOn=n,!1;e.shift()}return!0}function vf(t,e,n){Do(t)&&n.delete(e)}function n_(){Tu=!1,Li!==null&&Do(Li)&&(Li=null),Ii!==null&&Do(Ii)&&(Ii=null),Ui!==null&&Do(Ui)&&(Ui=null),da.forEach(vf),ha.forEach(vf)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,Tu||(Tu=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,n_)))}function fa(t){function e(r){return Us(r,t)}if(0<Xa.length){Us(Xa[0],t);for(var n=1;n<Xa.length;n++){var i=Xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&Us(Li,t),Ii!==null&&Us(Ii,t),Ui!==null&&Us(Ui,t),da.forEach(e),ha.forEach(e),n=0;n<Ri.length;n++)i=Ri[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)rg(n),n.blockedOn===null&&Ri.shift()}var as=xi.ReactCurrentBatchConfig,rl=!0;function i_(t,e,n,i){var r=et,s=as.transition;as.transition=null;try{et=1,sh(t,e,n,i)}finally{et=r,as.transition=s}}function r_(t,e,n,i){var r=et,s=as.transition;as.transition=null;try{et=4,sh(t,e,n,i)}finally{et=r,as.transition=s}}function sh(t,e,n,i){if(rl){var r=Au(t,e,n,i);if(r===null)xc(t,e,i,sl,n),xf(t,i);else if(t_(r,t,e,n,i))i.stopPropagation();else if(xf(t,i),e&4&&-1<e_.indexOf(t)){for(;r!==null;){var s=Pa(r);if(s!==null&&eg(s),s=Au(t,e,n,i),s===null&&xc(t,e,i,sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xc(t,e,i,null,n)}}var sl=null;function Au(t,e,n,i){if(sl=null,t=th(i),t=hr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W0()){case nh:return 1;case Km:return 4;case nl:case X0:return 16;case Qm:return 536870912;default:return 16}default:return 16}}var Pi=null,ah=null,Lo=null;function ag(){if(Lo)return Lo;var t,e=ah,n=e.length,i,r="value"in Pi?Pi.value:Pi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Lo=r.slice(t,1<i?1-i:void 0)}function Io(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function _f(){return!1}function pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:_f,this.isPropagationStopped=_f,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oh=pn(As),ka=ft({},As,{view:0,detail:0}),s_=pn(ka),lc,cc,Fs,Dl=ft({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(lc=t.screenX-Fs.screenX,cc=t.screenY-Fs.screenY):cc=lc=0,Fs=t),lc)},movementY:function(t){return"movementY"in t?t.movementY:cc}}),yf=pn(Dl),a_=ft({},Dl,{dataTransfer:0}),o_=pn(a_),l_=ft({},ka,{relatedTarget:0}),uc=pn(l_),c_=ft({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),u_=pn(c_),d_=ft({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h_=pn(d_),f_=ft({},As,{data:0}),Sf=pn(f_),p_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g_[t])?!!e[t]:!1}function lh(){return x_}var v_=ft({},ka,{key:function(t){if(t.key){var e=p_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lh,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),__=pn(v_),y_=ft({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=pn(y_),S_=ft({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lh}),b_=pn(S_),M_=ft({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),E_=pn(M_),w_=ft({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T_=pn(w_),A_=[9,13,27,32],ch=hi&&"CompositionEvent"in window,ta=null;hi&&"documentMode"in document&&(ta=document.documentMode);var C_=hi&&"TextEvent"in window&&!ta,og=hi&&(!ch||ta&&8<ta&&11>=ta),Mf=" ",Ef=!1;function lg(t,e){switch(t){case"keyup":return A_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function R_(t,e){switch(t){case"compositionend":return cg(e);case"keypress":return e.which!==32?null:(Ef=!0,Mf);case"textInput":return t=e.data,t===Mf&&Ef?null:t;default:return null}}function N_(t,e){if(Xr)return t==="compositionend"||!ch&&lg(t,e)?(t=ag(),Lo=ah=Pi=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return og&&e.locale!=="ko"?null:e.data;default:return null}}var k_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!k_[t.type]:e==="textarea"}function ug(t,e,n,i){Hm(i),e=al(e,"onChange"),0<e.length&&(n=new oh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var na=null,pa=null;function P_(t){Sg(t,0)}function Ll(t){var e=Yr(t);if(Lm(e))return t}function D_(t,e){if(t==="change")return e}var dg=!1;if(hi){var dc;if(hi){var hc="oninput"in document;if(!hc){var Tf=document.createElement("div");Tf.setAttribute("oninput","return;"),hc=typeof Tf.oninput=="function"}dc=hc}else dc=!1;dg=dc&&(!document.documentMode||9<document.documentMode)}function Af(){na&&(na.detachEvent("onpropertychange",hg),pa=na=null)}function hg(t){if(t.propertyName==="value"&&Ll(pa)){var e=[];ug(e,pa,t,th(t)),Wm(P_,e)}}function L_(t,e,n){t==="focusin"?(Af(),na=e,pa=n,na.attachEvent("onpropertychange",hg)):t==="focusout"&&Af()}function I_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(pa)}function U_(t,e){if(t==="click")return Ll(e)}function F_(t,e){if(t==="input"||t==="change")return Ll(e)}function B_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:B_;function ma(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!cu.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function Cf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rf(t,e){var n=Cf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cf(n)}}function fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pg(){for(var t=window,e=Jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jo(t.document)}return e}function uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function O_(t){var e=pg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fg(n.ownerDocument.documentElement,n)){if(i!==null&&uh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rf(n,s);var a=Rf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z_=hi&&"documentMode"in document&&11>=document.documentMode,qr=null,Cu=null,ia=null,Ru=!1;function Nf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||qr==null||qr!==Jo(i)||(i=qr,"selectionStart"in i&&uh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ia&&ma(ia,i)||(ia=i,i=al(Cu,"onSelect"),0<i.length&&(e=new oh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qr)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},fc={},mg={};hi&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function Il(t){if(fc[t])return fc[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mg)return fc[t]=e[n];return t}var gg=Il("animationend"),xg=Il("animationiteration"),vg=Il("animationstart"),_g=Il("transitionend"),yg=new Map,kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){yg.set(t,e),Tr(e,[t])}for(var pc=0;pc<kf.length;pc++){var mc=kf[pc],H_=mc.toLowerCase(),V_=mc[0].toUpperCase()+mc.slice(1);$i(H_,"on"+V_)}$i(gg,"onAnimationEnd");$i(xg,"onAnimationIteration");$i(vg,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(_g,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function Pf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,H0(i,e,void 0,t),t.currentTarget=null}function Sg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Pf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Pf(r,o,c),s=l}}}if(tl)throw t=Eu,tl=!1,Eu=null,t}function at(t,e){var n=e[Lu];n===void 0&&(n=e[Lu]=new Set);var i=t+"__bubble";n.has(i)||(bg(e,t,2,!1),n.add(i))}function gc(t,e,n){var i=0;e&&(i|=4),bg(n,t,i,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[Ya]){t[Ya]=!0,Rm.forEach(function(n){n!=="selectionchange"&&(j_.has(n)||gc(n,!1,t),gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,gc("selectionchange",!1,e))}}function bg(t,e,n,i){switch(sg(e)){case 1:var r=i_;break;case 4:r=r_;break;default:r=sh}n=r.bind(null,e,n,t),r=void 0,!Mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Wm(function(){var c=s,h=th(n),p=[];e:{var f=yg.get(t);if(f!==void 0){var g=oh,_=t;switch(t){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":g=__;break;case"focusin":_="focus",g=uc;break;case"focusout":_="blur",g=uc;break;case"beforeblur":case"afterblur":g=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=o_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=b_;break;case gg:case xg:case vg:g=u_;break;case _g:g=E_;break;case"scroll":g=s_;break;case"wheel":g=T_;break;case"copy":case"cut":case"paste":g=h_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bf}var S=(e&4)!==0,m=!S&&t==="scroll",u=S?f!==null?f+"Capture":null:f;S=[];for(var x=c,v;x!==null;){v=x;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=ua(x,u),M!=null&&S.push(xa(x,M,v)))),m)break;x=x.return}0<S.length&&(f=new g(f,_,null,n,h),p.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Su&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[fi]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?hr(_):null,_!==null&&(m=Ar(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(S=yf,M="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(S=bf,M="onPointerLeave",u="onPointerEnter",x="pointer"),m=g==null?f:Yr(g),v=_==null?f:Yr(_),f=new S(M,x+"leave",g,n,h),f.target=m,f.relatedTarget=v,M=null,hr(h)===c&&(S=new S(u,x+"enter",_,n,h),S.target=v,S.relatedTarget=m,M=S),m=M,g&&_)t:{for(S=g,u=_,x=0,v=S;v;v=Rr(v))x++;for(v=0,M=u;M;M=Rr(M))v++;for(;0<x-v;)S=Rr(S),x--;for(;0<v-x;)u=Rr(u),v--;for(;x--;){if(S===u||u!==null&&S===u.alternate)break t;S=Rr(S),u=Rr(u)}S=null}else S=null;g!==null&&Df(p,f,g,S,!1),_!==null&&m!==null&&Df(p,m,_,S,!0)}}e:{if(f=c?Yr(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var N=D_;else if(wf(f))if(dg)N=F_;else{N=I_;var C=L_}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=U_);if(N&&(N=N(t,c))){ug(p,N,n,h);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&gu(f,"number",f.value)}switch(C=c?Yr(c):window,t){case"focusin":(wf(C)||C.contentEditable==="true")&&(qr=C,Cu=c,ia=null);break;case"focusout":ia=Cu=qr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Nf(p,n,h);break;case"selectionchange":if(z_)break;case"keydown":case"keyup":Nf(p,n,h)}var T;if(ch)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Xr?lg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(og&&n.locale!=="ko"&&(Xr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Xr&&(T=ag()):(Pi=h,ah="value"in Pi?Pi.value:Pi.textContent,Xr=!0)),C=al(c,R),0<C.length&&(R=new Sf(R,t,null,n,h),p.push({event:R,listeners:C}),T?R.data=T:(T=cg(n),T!==null&&(R.data=T)))),(T=C_?R_(t,n):N_(t,n))&&(c=al(c,"onBeforeInput"),0<c.length&&(h=new Sf("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=T))}Sg(p,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ua(t,n),s!=null&&i.unshift(xa(t,s,r)),s=ua(t,e),s!=null&&i.push(xa(t,s,r))),t=t.return}return i}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Df(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ua(n,s),l!=null&&a.unshift(xa(n,l,o))):r||(l=ua(n,s),l!=null&&a.push(xa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var G_=/\r\n?/g,W_=/\u0000|\uFFFD/g;function Lf(t){return(typeof t=="string"?t:""+t).replace(G_,`
`).replace(W_,"")}function Ka(t,e,n){if(e=Lf(e),Lf(t)!==e&&n)throw Error(ne(425))}function ol(){}var Nu=null,ku=null;function Pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,X_=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,q_=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(t){return If.resolve(null).then(t).catch($_)}:Du;function $_(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fa(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),jn="__reactFiber$"+Cs,va="__reactProps$"+Cs,fi="__reactContainer$"+Cs,Lu="__reactEvents$"+Cs,Y_="__reactListeners$"+Cs,K_="__reactHandles$"+Cs;function hr(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uf(t);t!==null;){if(n=t[jn])return n;t=Uf(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[jn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Ul(t){return t[va]||null}var Iu=[],Kr=-1;function Yi(t){return{current:t}}function lt(t){0>Kr||(t.current=Iu[Kr],Iu[Kr]=null,Kr--)}function it(t,e){Kr++,Iu[Kr]=t.current,t.current=e}var Wi={},zt=Yi(Wi),Zt=Yi(!1),_r=Wi;function fs(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Jt(t){return t=t.childContextTypes,t!=null}function ll(){lt(Zt),lt(zt)}function Ff(t,e,n){if(zt.current!==Wi)throw Error(ne(168));it(zt,e),it(Zt,n)}function Mg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,L0(t)||"Unknown",r));return ft({},n,i)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,_r=zt.current,it(zt,t),it(Zt,Zt.current),!0}function Bf(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Mg(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,lt(Zt),lt(zt),it(zt,t)):lt(Zt),it(Zt,n)}var si=null,Fl=!1,_c=!1;function Eg(t){si===null?si=[t]:si.push(t)}function Q_(t){Fl=!0,Eg(t)}function Ki(){if(!_c&&si!==null){_c=!0;var t=0,e=et;try{var n=si;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Fl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Ym(nh,Ki),r}finally{et=e,_c=!1}}return null}var Qr=[],Zr=0,ul=null,dl=0,xn=[],vn=0,yr=null,oi=1,li="";function ar(t,e){Qr[Zr++]=dl,Qr[Zr++]=ul,ul=t,dl=e}function wg(t,e,n){xn[vn++]=oi,xn[vn++]=li,xn[vn++]=yr,yr=t;var i=oi;t=li;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var s=32-Un(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,oi=1<<32-Un(e)+r|n<<r|i,li=s+t}else oi=1<<s|n<<r|i,li=t}function dh(t){t.return!==null&&(ar(t,1),wg(t,1,0))}function hh(t){for(;t===ul;)ul=Qr[--Zr],Qr[Zr]=null,dl=Qr[--Zr],Qr[Zr]=null;for(;t===yr;)yr=xn[--vn],xn[vn]=null,li=xn[--vn],xn[vn]=null,oi=xn[--vn],xn[vn]=null}var dn=null,un=null,ct=!1,Dn=null;function Tg(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Of(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yr!==null?{id:oi,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function Uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fu(t){if(ct){var e=un;if(e){var n=e;if(!Of(t,e)){if(Uu(t))throw Error(ne(418));e=Fi(n.nextSibling);var i=dn;e&&Of(t,e)?Tg(i,n):(t.flags=t.flags&-4097|2,ct=!1,dn=t)}}else{if(Uu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ct=!1,dn=t}}}function zf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function Qa(t){if(t!==dn)return!1;if(!ct)return zf(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pu(t.type,t.memoizedProps)),e&&(e=un)){if(Uu(t))throw Ag(),Error(ne(418));for(;e;)Tg(t,e),e=Fi(e.nextSibling)}if(zf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?Fi(t.stateNode.nextSibling):null;return!0}function Ag(){for(var t=un;t;)t=Fi(t.nextSibling)}function ps(){un=dn=null,ct=!1}function fh(t){Dn===null?Dn=[t]:Dn.push(t)}var Z_=xi.ReactCurrentBatchConfig;function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hf(t){var e=t._init;return e(t._payload)}function Cg(t){function e(u,x){if(t){var v=u.deletions;v===null?(u.deletions=[x],u.flags|=16):v.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=Hi(u,x),u.index=0,u.sibling=null,u}function s(u,x,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<x?(u.flags|=2,x):v):(u.flags|=2,x)):(u.flags|=1048576,x)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,x,v,M){return x===null||x.tag!==6?(x=Tc(v,u.mode,M),x.return=u,x):(x=r(x,v),x.return=u,x)}function l(u,x,v,M){var N=v.type;return N===Wr?h(u,x,v.props.children,M,v.key):x!==null&&(x.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ai&&Hf(N)===x.type)?(M=r(x,v.props),M.ref=Bs(u,x,v),M.return=u,M):(M=Vo(v.type,v.key,v.props,null,u.mode,M),M.ref=Bs(u,x,v),M.return=u,M)}function c(u,x,v,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Ac(v,u.mode,M),x.return=u,x):(x=r(x,v.children||[]),x.return=u,x)}function h(u,x,v,M,N){return x===null||x.tag!==7?(x=vr(v,u.mode,M,N),x.return=u,x):(x=r(x,v),x.return=u,x)}function p(u,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Tc(""+x,u.mode,v),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ha:return v=Vo(x.type,x.key,x.props,null,u.mode,v),v.ref=Bs(u,null,x),v.return=u,v;case Gr:return x=Ac(x,u.mode,v),x.return=u,x;case Ai:var M=x._init;return p(u,M(x._payload),v)}if(Ys(x)||Ds(x))return x=vr(x,u.mode,v,null),x.return=u,x;Za(u,x)}return null}function f(u,x,v,M){var N=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:o(u,x,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:return v.key===N?l(u,x,v,M):null;case Gr:return v.key===N?c(u,x,v,M):null;case Ai:return N=v._init,f(u,x,N(v._payload),M)}if(Ys(v)||Ds(v))return N!==null?null:h(u,x,v,M,null);Za(u,v)}return null}function g(u,x,v,M,N){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,o(x,u,""+M,N);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ha:return u=u.get(M.key===null?v:M.key)||null,l(x,u,M,N);case Gr:return u=u.get(M.key===null?v:M.key)||null,c(x,u,M,N);case Ai:var C=M._init;return g(u,x,v,C(M._payload),N)}if(Ys(M)||Ds(M))return u=u.get(v)||null,h(x,u,M,N,null);Za(x,M)}return null}function _(u,x,v,M){for(var N=null,C=null,T=x,R=x=0,X=null;T!==null&&R<v.length;R++){T.index>R?(X=T,T=null):X=T.sibling;var y=f(u,T,v[R],M);if(y===null){T===null&&(T=X);break}t&&T&&y.alternate===null&&e(u,T),x=s(y,x,R),C===null?N=y:C.sibling=y,C=y,T=X}if(R===v.length)return n(u,T),ct&&ar(u,R),N;if(T===null){for(;R<v.length;R++)T=p(u,v[R],M),T!==null&&(x=s(T,x,R),C===null?N=T:C.sibling=T,C=T);return ct&&ar(u,R),N}for(T=i(u,T);R<v.length;R++)X=g(T,u,R,v[R],M),X!==null&&(t&&X.alternate!==null&&T.delete(X.key===null?R:X.key),x=s(X,x,R),C===null?N=X:C.sibling=X,C=X);return t&&T.forEach(function(w){return e(u,w)}),ct&&ar(u,R),N}function S(u,x,v,M){var N=Ds(v);if(typeof N!="function")throw Error(ne(150));if(v=N.call(v),v==null)throw Error(ne(151));for(var C=N=null,T=x,R=x=0,X=null,y=v.next();T!==null&&!y.done;R++,y=v.next()){T.index>R?(X=T,T=null):X=T.sibling;var w=f(u,T,y.value,M);if(w===null){T===null&&(T=X);break}t&&T&&w.alternate===null&&e(u,T),x=s(w,x,R),C===null?N=w:C.sibling=w,C=w,T=X}if(y.done)return n(u,T),ct&&ar(u,R),N;if(T===null){for(;!y.done;R++,y=v.next())y=p(u,y.value,M),y!==null&&(x=s(y,x,R),C===null?N=y:C.sibling=y,C=y);return ct&&ar(u,R),N}for(T=i(u,T);!y.done;R++,y=v.next())y=g(T,u,R,y.value,M),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?R:y.key),x=s(y,x,R),C===null?N=y:C.sibling=y,C=y);return t&&T.forEach(function(V){return e(u,V)}),ct&&ar(u,R),N}function m(u,x,v,M){if(typeof v=="object"&&v!==null&&v.type===Wr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:e:{for(var N=v.key,C=x;C!==null;){if(C.key===N){if(N=v.type,N===Wr){if(C.tag===7){n(u,C.sibling),x=r(C,v.props.children),x.return=u,u=x;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ai&&Hf(N)===C.type){n(u,C.sibling),x=r(C,v.props),x.ref=Bs(u,C,v),x.return=u,u=x;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===Wr?(x=vr(v.props.children,u.mode,M,v.key),x.return=u,u=x):(M=Vo(v.type,v.key,v.props,null,u.mode,M),M.ref=Bs(u,x,v),M.return=u,u=M)}return a(u);case Gr:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(u,x.sibling),x=r(x,v.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=Ac(v,u.mode,M),x.return=u,u=x}return a(u);case Ai:return C=v._init,m(u,x,C(v._payload),M)}if(Ys(v))return _(u,x,v,M);if(Ds(v))return S(u,x,v,M);Za(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,v),x.return=u,u=x):(n(u,x),x=Tc(v,u.mode,M),x.return=u,u=x),a(u)):n(u,x)}return m}var ms=Cg(!0),Rg=Cg(!1),hl=Yi(null),fl=null,Jr=null,ph=null;function mh(){ph=Jr=fl=null}function gh(t){var e=hl.current;lt(hl),t._currentValue=e}function Bu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function os(t,e){fl=t,ph=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(ph!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(fl===null)throw Error(ne(308));Jr=t,fl.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var fr=null;function xh(t){fr===null?fr=[t]:fr.push(t)}function Ng(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xh(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ci=!1;function vh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ih(t,n)}}function Vf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,i){var r=t.updateQueue;Ci=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,g=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(f=e,g=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){p=_.call(g,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,f=typeof _=="function"?_.call(g,p,f):_,f==null)break e;p=ft({},p,f);break e;case 2:Ci=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else g={eventTime:g,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=g,l=p):h=h.next=g,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=a,t.lanes=a,t.memoizedState=p}}function jf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Da={},Xn=Yi(Da),_a=Yi(Da),ya=Yi(Da);function pr(t){if(t===Da)throw Error(ne(174));return t}function _h(t,e){switch(it(ya,e),it(_a,t),it(Xn,Da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vu(e,t)}lt(Xn),it(Xn,e)}function gs(){lt(Xn),lt(_a),lt(ya)}function Pg(t){pr(ya.current);var e=pr(Xn.current),n=vu(e,t.type);e!==n&&(it(_a,t),it(Xn,n))}function yh(t){_a.current===t&&(lt(Xn),lt(_a))}var ut=Yi(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yc=[];function Sh(){for(var t=0;t<yc.length;t++)yc[t]._workInProgressVersionPrimary=null;yc.length=0}var Fo=xi.ReactCurrentDispatcher,Sc=xi.ReactCurrentBatchConfig,Sr=0,dt=null,bt=null,At=null,gl=!1,ra=!1,Sa=0,J_=0;function Lt(){throw Error(ne(321))}function bh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Mh(t,e,n,i,r,s){if(Sr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fo.current=t===null||t.memoizedState===null?iy:ry,t=n(i,r),ra){s=0;do{if(ra=!1,Sa=0,25<=s)throw Error(ne(301));s+=1,At=bt=null,e.updateQueue=null,Fo.current=sy,t=n(i,r)}while(ra)}if(Fo.current=xl,e=bt!==null&&bt.next!==null,Sr=0,At=bt=dt=null,gl=!1,e)throw Error(ne(300));return t}function Eh(){var t=Sa!==0;return Sa=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?dt.memoizedState=At=t:At=At.next=t,At}function wn(){if(bt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=At===null?dt.memoizedState:At.next;if(e!==null)At=e,bt=t;else{if(t===null)throw Error(ne(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},At===null?dt.memoizedState=At=t:At=At.next=t}return At}function ba(t,e){return typeof e=="function"?e(t):e}function bc(t){var e=wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Sr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,dt.lanes|=h,br|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Bn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Bn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Dg(){}function Lg(t,e){var n=dt,i=wn(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,wh(Fg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,Ma(9,Ug.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(ne(349));Sr&30||Ig(n,e,r)}return r}function Ig(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ug(t,e,n,i){e.value=n,e.getSnapshot=i,Bg(e)&&Og(t)}function Fg(t,e,n){return n(function(){Bg(e)&&Og(t)})}function Bg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Og(t){var e=pi(t,1);e!==null&&Fn(e,t,1,-1)}function Gf(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},e.queue=t,t=t.dispatch=ny.bind(null,dt,t),[e.memoizedState,t]}function Ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function zg(){return wn().memoizedState}function Bo(t,e,n,i){var r=zn();dt.flags|=t,r.memoizedState=Ma(1|e,n,void 0,i===void 0?null:i)}function Bl(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&bh(i,a.deps)){r.memoizedState=Ma(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Ma(1|e,n,s,i)}function Wf(t,e){return Bo(8390656,8,t,e)}function wh(t,e){return Bl(2048,8,t,e)}function Hg(t,e){return Bl(4,2,t,e)}function Vg(t,e){return Bl(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gg(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,jg.bind(null,e,t),n)}function Th(){}function Wg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Xg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function qg(t,e,n){return Sr&21?(Bn(n,e)||(n=Zm(),dt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function ey(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Sc.transition;Sc.transition={};try{t(!1),e()}finally{et=n,Sc.transition=i}}function $g(){return wn().memoizedState}function ty(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Yg(t))Kg(e,n);else if(n=Ng(t,e,n,i),n!==null){var r=jt();Fn(n,t,i,r),Qg(n,e,i)}}function ny(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yg(t))Kg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Bn(o,a)){var l=e.interleaved;l===null?(r.next=r,xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ng(t,e,r,i),n!==null&&(r=jt(),Fn(n,t,i,r),Qg(n,e,i))}}function Yg(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Kg(t,e){ra=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ih(t,n)}}var xl={readContext:En,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},iy={readContext:En,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Wf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bo(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bo(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ty.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Gf,useDebugValue:Th,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Gf(!1),e=t[0];return t=ey.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=zn();if(ct){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ct===null)throw Error(ne(349));Sr&30||Ig(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wf(Fg.bind(null,i,s,t),[t]),i.flags|=2048,Ma(9,Ug.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=Ct.identifierPrefix;if(ct){var n=li,i=oi;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=J_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ry={readContext:En,useCallback:Wg,useContext:En,useEffect:wh,useImperativeHandle:Gg,useInsertionEffect:Hg,useLayoutEffect:Vg,useMemo:Xg,useReducer:bc,useRef:zg,useState:function(){return bc(ba)},useDebugValue:Th,useDeferredValue:function(t){var e=wn();return qg(e,bt.memoizedState,t)},useTransition:function(){var t=bc(ba)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Dg,useSyncExternalStore:Lg,useId:$g,unstable_isNewReconciler:!1},sy={readContext:En,useCallback:Wg,useContext:En,useEffect:wh,useImperativeHandle:Gg,useInsertionEffect:Hg,useLayoutEffect:Vg,useMemo:Xg,useReducer:Mc,useRef:zg,useState:function(){return Mc(ba)},useDebugValue:Th,useDeferredValue:function(t){var e=wn();return bt===null?e.memoizedState=t:qg(e,bt.memoizedState,t)},useTransition:function(){var t=Mc(ba)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Dg,useSyncExternalStore:Lg,useId:$g,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ou(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=zi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Fn(e,t,r,i),Uo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=zi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Fn(e,t,r,i),Uo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=zi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(Fn(e,t,i,n),Uo(e,t,i))}};function Xf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ma(n,i)||!ma(r,s):!0}function Zg(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=Jt(e)?_r:zt.current,i=e.contextTypes,s=(i=i!=null)?fs(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function qf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=Jt(e)?_r:zt.current,r.context=fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ou(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ol.enqueueReplaceState(r,r.state,null),pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",i=e;do n+=D0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ay=typeof WeakMap=="function"?WeakMap:Map;function Jg(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,Qu=i),Hu(t,e)},n}function ex(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Hu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hu(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function $f(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ay;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yy.bind(null,t,e,n),e.then(t,t))}function Yf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var oy=xi.ReactCurrentOwner,Qt=!1;function Vt(t,e,n,i){e.child=t===null?Rg(e,null,n,i):ms(e,t.child,n,i)}function Qf(t,e,n,i,r){n=n.render;var s=e.ref;return os(e,r),i=Mh(t,e,n,i,s,r),n=Eh(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ct&&n&&dh(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Zf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tx(t,e,s,i,r)):(t=Vo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(a,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Hi(s,i),t.ref=e.ref,t.return=e,e.child=t}function tx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ma(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return Vu(t,e,n,i,r)}function nx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ts,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ts,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ts,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ts,cn),cn|=i;return Vt(t,e,r,n),e.child}function ix(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vu(t,e,n,i,r){var s=Jt(n)?_r:zt.current;return s=fs(e,s),os(e,r),n=Mh(t,e,n,i,s,r),i=Eh(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ct&&i&&dh(e),e.flags|=1,Vt(t,e,n,r),e.child)}function Jf(t,e,n,i,r){if(Jt(n)){var s=!0;cl(e)}else s=!1;if(os(e,r),e.stateNode===null)Oo(t,e),Zg(e,n,i),zu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=Jt(n)?_r:zt.current,c=fs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&qf(e,a,i,c),Ci=!1;var f=e.memoizedState;a.state=f,pl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Zt.current||Ci?(typeof h=="function"&&(Ou(e,n,h,i),l=e.memoizedState),(o=Ci||Xf(e,n,o,i,f,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,kg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:kn(e.type,o),a.props=c,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Jt(n)?_r:zt.current,l=fs(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&qf(e,a,i,l),Ci=!1,f=e.memoizedState,a.state=f,pl(e,i,a,r);var _=e.memoizedState;o!==p||f!==_||Zt.current||Ci?(typeof g=="function"&&(Ou(e,n,g,i),_=e.memoizedState),(c=Ci||Xf(e,n,c,i,f,_,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ju(t,e,n,i,s,r)}function ju(t,e,n,i,r,s){ix(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Bf(e,n,!1),mi(t,e,s);i=e.stateNode,oy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ms(e,t.child,null,s),e.child=ms(e,null,o,s)):Vt(t,e,o,s),e.memoizedState=i.state,r&&Bf(e,n,!0),e.child}function rx(t){var e=t.stateNode;e.pendingContext?Ff(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ff(t,e.context,!1),_h(t,e.containerInfo)}function ep(t,e,n,i,r){return ps(),fh(r),e.flags|=256,Vt(t,e,n,i),e.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function sx(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ut,r&1),t===null)return Fu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Vl(a,i,0,null),t=vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wu(n),e.memoizedState=Gu,t):Ah(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ly(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Hi(o,s):(s=vr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Wu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Gu,i}return s=t.child,t=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ah(t,e){return e=Vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,i){return i!==null&&fh(i),ms(e,t.child,null,n),t=Ah(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ly(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(ne(422))),Ja(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vl({mode:"visible",children:i.children},r,0,null),s=vr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ms(e,t.child,null,a),e.child.memoizedState=Wu(a),e.memoizedState=Gu,s);if(!(e.mode&1))return Ja(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Ec(s,i,void 0),Ja(t,e,a,i)}if(o=(a&t.childLanes)!==0,Qt||o){if(i=Ct,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),Fn(i,t,r,-1))}return Dh(),i=Ec(Error(ne(421))),Ja(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Sy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Fi(r.nextSibling),dn=e,ct=!0,Dn=null,t!==null&&(xn[vn++]=oi,xn[vn++]=li,xn[vn++]=yr,oi=t.id,li=t.overflow,yr=e),e=Ah(e,i.children),e.flags|=4096,e)}function tp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bu(t.return,e,n)}function wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ax(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tp(t,n,e);else if(t.tag===19)tp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cy(t,e,n){switch(e.tag){case 3:rx(e),ps();break;case 5:Pg(e);break;case 1:Jt(e.type)&&cl(e);break;case 4:_h(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?sx(t,e,n):(it(ut,ut.current&1),t=mi(t,e,n),t!==null?t.sibling:null);it(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ax(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,nx(t,e,n)}return mi(t,e,n)}var ox,Xu,lx,cx;ox=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xu=function(){};lx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(Xn.current);var s=null;switch(n){case"input":r=pu(t,r),i=pu(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=xu(t,r),i=xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ol)}_u(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(la.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(la.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Os(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function uy(t,e,n){var i=e.pendingProps;switch(hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return Jt(e.type)&&ll(),It(e),null;case 3:return i=e.stateNode,gs(),lt(Zt),lt(zt),Sh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(ed(Dn),Dn=null))),Xu(t,e),It(e),null;case 5:yh(e);var r=pr(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)lx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return It(e),null}if(t=pr(Xn.current),Qa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[va]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Qs.length;r++)at(Qs[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":uf(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":hf(i,s),at("invalid",i)}_u(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,o,t),r=["children",""+o]):la.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":Va(i),df(i,s,!0);break;case"textarea":Va(i),ff(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[jn]=e,t[va]=i,ox(t,e,!1,!1),e.stateNode=t;e:{switch(a=yu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qs.length;r++)at(Qs[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":uf(t,i),r=pu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),at("invalid",t);break;case"textarea":hf(t,i),r=xu(t,i),at("invalid",t);break;default:r=i}_u(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?zm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Qd(t,s,l,a))}switch(n){case"input":Va(t),df(t,i,!1);break;case"textarea":Va(t),ff(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?is(t,!!i.multiple,s,!1):i.defaultValue!=null&&is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)cx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=pr(ya.current),pr(Xn.current),Qa(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return It(e),null;case 13:if(lt(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&un!==null&&e.mode&1&&!(e.flags&128))Ag(),ps(),e.flags|=98560,s=!1;else if(s=Qa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[jn]=e}else ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else Dn!==null&&(ed(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Mt===0&&(Mt=3):Dh())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return gs(),Xu(t,e),t===null&&ga(e.stateNode.containerInfo),It(e),null;case 10:return gh(e.type._context),It(e),null;case 17:return Jt(e.type)&&ll(),It(e),null;case 19:if(lt(ut),s=e.memoizedState,s===null)return It(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Os(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ml(t),a!==null){for(e.flags|=128,Os(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>vs&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304)}else{if(!i)if(t=ml(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return It(e),null}else 2*vt()-s.renderingStartTime>vs&&n!==1073741824&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,it(ut,i?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Ph(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function dy(t,e){switch(hh(e),e.tag){case 1:return Jt(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gs(),lt(Zt),lt(zt),Sh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yh(e),null;case 13:if(lt(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ut),null;case 4:return gs(),null;case 10:return gh(e.type._context),null;case 22:case 23:return Ph(),null;case 24:return null;default:return null}}var eo=!1,Ot=!1,hy=typeof WeakSet=="function"?WeakSet:Set,pe=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function qu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var np=!1;function fy(t,e){if(Nu=rl,t=pg(),uh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,p=t,f=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ku={focusedElem:t,selectionRange:n},rl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,m=_.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:kn(e.type,S),m);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=np,np=!1,_}function sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&qu(e,n,s)}r=r.next}while(r!==i)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $u(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ux(t){var e=t.alternate;e!==null&&(t.alternate=null,ux(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[va],delete e[Lu],delete e[Y_],delete e[K_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dx(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ol));else if(i!==4&&(t=t.child,t!==null))for(Yu(t,e,n),t=t.sibling;t!==null;)Yu(t,e,n),t=t.sibling}function Ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}var Nt=null,Pn=!1;function yi(t,e,n){for(n=n.child;n!==null;)hx(t,e,n),n=n.sibling}function hx(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:Ot||es(n,e);case 6:var i=Nt,r=Pn;Nt=null,yi(t,e,n),Nt=i,Pn=r,Nt!==null&&(Pn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Pn?(t=Nt,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),fa(t)):vc(Nt,n.stateNode));break;case 4:i=Nt,r=Pn,Nt=n.stateNode.containerInfo,Pn=!0,yi(t,e,n),Nt=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&qu(n,e,a),r=r.next}while(r!==i)}yi(t,e,n);break;case 1:if(!Ot&&(es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,yi(t,e,n),Ot=i):yi(t,e,n);break;default:yi(t,e,n)}}function rp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hy),e.forEach(function(i){var r=by.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Nt=o.stateNode,Pn=!1;break e;case 3:Nt=o.stateNode.containerInfo,Pn=!0;break e;case 4:Nt=o.stateNode.containerInfo,Pn=!0;break e}o=o.return}if(Nt===null)throw Error(ne(160));hx(s,a,r),Nt=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fx(e,t),e=e.sibling}function fx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),On(t),i&4){try{sa(3,t,t.return),zl(3,t)}catch(S){mt(t,t.return,S)}try{sa(5,t,t.return)}catch(S){mt(t,t.return,S)}}break;case 1:An(e,t),On(t),i&512&&n!==null&&es(n,n.return);break;case 5:if(An(e,t),On(t),i&512&&n!==null&&es(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(S){mt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Im(r,s),yu(o,a);var c=yu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?zm(r,p):h==="dangerouslySetInnerHTML"?Bm(r,p):h==="children"?ca(r,p):Qd(r,h,p,c)}switch(o){case"input":mu(r,s);break;case"textarea":Um(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?is(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?is(r,!!s.multiple,s.defaultValue,!0):is(r,!!s.multiple,s.multiple?[]:"",!1))}r[va]=s}catch(S){mt(t,t.return,S)}}break;case 6:if(An(e,t),On(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){mt(t,t.return,S)}}break;case 3:if(An(e,t),On(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(S){mt(t,t.return,S)}break;case 4:An(e,t),On(t);break;case 13:An(e,t),On(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nh=vt())),i&4&&rp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||h,An(e,t),Ot=c):An(e,t),On(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(pe=t,h=t.child;h!==null;){for(p=pe=h;pe!==null;){switch(f=pe,g=f.child,f.tag){case 0:case 11:case 14:case 15:sa(4,f,f.return);break;case 1:es(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){mt(i,n,S)}}break;case 5:es(f,f.return);break;case 22:if(f.memoizedState!==null){ap(p);continue}}g!==null?(g.return=f,pe=g):ap(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Om("display",a))}catch(S){mt(t,t.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){mt(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:An(e,t),On(t),i&4&&rp(t);break;case 21:break;default:An(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dx(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=ip(t);Ku(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ip(t);Yu(t,o,a);break;default:throw Error(ne(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function py(t,e,n){pe=t,px(t)}function px(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||eo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ot;o=eo;var c=Ot;if(eo=a,(Ot=l)&&!c)for(pe=r;pe!==null;)a=pe,l=a.child,a.tag===22&&a.memoizedState!==null?op(r):l!==null?(l.return=a,pe=l):op(r);for(;s!==null;)pe=s,px(s),s=s.sibling;pe=r,eo=o,Ot=c}sp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):sp(t)}}function sp(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&fa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Ot||e.flags&512&&$u(e)}catch(f){mt(e,e.return,f)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function ap(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function op(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{$u(e)}catch(l){mt(e,s,l)}break;case 5:var a=e.return;try{$u(e)}catch(l){mt(e,a,l)}}}catch(l){mt(e,e.return,l)}if(e===t){pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,pe=o;break}pe=e.return}}var my=Math.ceil,vl=xi.ReactCurrentDispatcher,Ch=xi.ReactCurrentOwner,Mn=xi.ReactCurrentBatchConfig,Ge=0,Ct=null,St=null,kt=0,cn=0,ts=Yi(0),Mt=0,Ea=null,br=0,Hl=0,Rh=0,aa=null,Yt=null,Nh=0,vs=1/0,ri=null,_l=!1,Qu=null,Oi=null,to=!1,Di=null,yl=0,oa=0,Zu=null,zo=-1,Ho=0;function jt(){return Ge&6?vt():zo!==-1?zo:zo=vt()}function zi(t){return t.mode&1?Ge&2&&kt!==0?kt&-kt:Z_.transition!==null?(Ho===0&&(Ho=Zm()),Ho):(t=et,t!==0||(t=window.event,t=t===void 0?16:sg(t.type)),t):1}function Fn(t,e,n,i){if(50<oa)throw oa=0,Zu=null,Error(ne(185));Na(t,n,i),(!(Ge&2)||t!==Ct)&&(t===Ct&&(!(Ge&2)&&(Hl|=n),Mt===4&&Ni(t,kt)),en(t,i),n===1&&Ge===0&&!(e.mode&1)&&(vs=vt()+500,Fl&&Ki()))}function en(t,e){var n=t.callbackNode;Z0(t,e);var i=il(t,t===Ct?kt:0);if(i===0)n!==null&&gf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gf(n),e===1)t.tag===0?Q_(lp.bind(null,t)):Eg(lp.bind(null,t)),q_(function(){!(Ge&6)&&Ki()}),n=null;else{switch(Jm(i)){case 1:n=nh;break;case 4:n=Km;break;case 16:n=nl;break;case 536870912:n=Qm;break;default:n=nl}n=bx(n,mx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mx(t,e){if(zo=-1,Ho=0,Ge&6)throw Error(ne(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var i=il(t,t===Ct?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sl(t,i);else{e=i;var r=Ge;Ge|=2;var s=xx();(Ct!==t||kt!==e)&&(ri=null,vs=vt()+500,xr(t,e));do try{vy();break}catch(o){gx(t,o)}while(!0);mh(),vl.current=s,Ge=r,St!==null?e=0:(Ct=null,kt=0,e=Mt)}if(e!==0){if(e===2&&(r=wu(t),r!==0&&(i=r,e=Ju(t,r))),e===1)throw n=Ea,xr(t,0),Ni(t,i),en(t,vt()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!gy(r)&&(e=Sl(t,i),e===2&&(s=wu(t),s!==0&&(i=s,e=Ju(t,s))),e===1))throw n=Ea,xr(t,0),Ni(t,i),en(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:or(t,Yt,ri);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=Nh+500-vt(),10<e)){if(il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Du(or.bind(null,t,Yt,ri),e);break}or(t,Yt,ri);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Un(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*my(i/1960))-i,10<i){t.timeoutHandle=Du(or.bind(null,t,Yt,ri),i);break}or(t,Yt,ri);break;case 5:or(t,Yt,ri);break;default:throw Error(ne(329))}}}return en(t,vt()),t.callbackNode===n?mx.bind(null,t):null}function Ju(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&ed(e)),t}function ed(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function gy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~Rh,e&=~Hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function lp(t){if(Ge&6)throw Error(ne(327));ls();var e=il(t,0);if(!(e&1))return en(t,vt()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var i=wu(t);i!==0&&(e=i,n=Ju(t,i))}if(n===1)throw n=Ea,xr(t,0),Ni(t,e),en(t,vt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,Yt,ri),en(t,vt()),null}function kh(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(vs=vt()+500,Fl&&Ki())}}function Mr(t){Di!==null&&Di.tag===0&&!(Ge&6)&&ls();var e=Ge;Ge|=1;var n=Mn.transition,i=et;try{if(Mn.transition=null,et=1,t)return t()}finally{et=i,Mn.transition=n,Ge=e,!(Ge&6)&&Ki()}}function Ph(){cn=ts.current,lt(ts)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,X_(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(hh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ll();break;case 3:gs(),lt(Zt),lt(zt),Sh();break;case 5:yh(i);break;case 4:gs();break;case 13:lt(ut);break;case 19:lt(ut);break;case 10:gh(i.type._context);break;case 22:case 23:Ph()}n=n.return}if(Ct=t,St=t=Hi(t.current,null),kt=cn=e,Mt=0,Ea=null,Rh=Hl=br=0,Yt=aa=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}fr=null}return t}function gx(t,e){do{var n=St;try{if(mh(),Fo.current=xl,gl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gl=!1}if(Sr=0,At=bt=dt=null,ra=!1,Sa=0,Ch.current=null,n===null||n.return===null){Mt=1,Ea=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Yf(a);if(g!==null){g.flags&=-257,Kf(g,a,o,s,e),g.mode&1&&$f(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){$f(s,c,e),Dh();break e}l=Error(ne(426))}}else if(ct&&o.mode&1){var m=Yf(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Kf(m,a,o,s,e),fh(xs(l,o));break e}}s=l=xs(l,o),Mt!==4&&(Mt=2),aa===null?aa=[s]:aa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Jg(s,l,e);Vf(s,u);break e;case 1:o=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Oi===null||!Oi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=ex(s,o,e);Vf(s,M);break e}}s=s.return}while(s!==null)}_x(n)}catch(N){e=N,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function xx(){var t=vl.current;return vl.current=xl,t===null?xl:t}function Dh(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Ct===null||!(br&268435455)&&!(Hl&268435455)||Ni(Ct,kt)}function Sl(t,e){var n=Ge;Ge|=2;var i=xx();(Ct!==t||kt!==e)&&(ri=null,xr(t,e));do try{xy();break}catch(r){gx(t,r)}while(!0);if(mh(),Ge=n,vl.current=i,St!==null)throw Error(ne(261));return Ct=null,kt=0,Mt}function xy(){for(;St!==null;)vx(St)}function vy(){for(;St!==null&&!j0();)vx(St)}function vx(t){var e=Sx(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?_x(t):St=e,Ch.current=null}function _x(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dy(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,St=null;return}}else if(n=uy(n,e,cn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Mt===0&&(Mt=5)}function or(t,e,n){var i=et,r=Mn.transition;try{Mn.transition=null,et=1,_y(t,e,n,i)}finally{Mn.transition=r,et=i}return null}function _y(t,e,n,i){do ls();while(Di!==null);if(Ge&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(J0(t,s),t===Ct&&(St=Ct=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,bx(nl,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=et;et=1;var o=Ge;Ge|=4,Ch.current=null,fy(t,n),fx(n,t),O_(ku),rl=!!Nu,ku=Nu=null,t.current=n,py(n),G0(),Ge=o,et=a,Mn.transition=s}else t.current=n;if(to&&(to=!1,Di=t,yl=r),s=t.pendingLanes,s===0&&(Oi=null),q0(n.stateNode),en(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=Qu,Qu=null,t;return yl&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===Zu?oa++:(oa=0,Zu=t):oa=0,Ki(),null}function ls(){if(Di!==null){var t=Jm(yl),e=Mn.transition,n=et;try{if(Mn.transition=null,et=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,yl=0,Ge&6)throw Error(ne(331));var r=Ge;for(Ge|=4,pe=t.current;pe!==null;){var s=pe,a=s.child;if(pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(pe=c;pe!==null;){var h=pe;switch(h.tag){case 0:case 11:case 15:sa(8,h,s)}var p=h.child;if(p!==null)p.return=h,pe=p;else for(;pe!==null;){h=pe;var f=h.sibling,g=h.return;if(ux(h),h===c){pe=null;break}if(f!==null){f.return=g,pe=f;break}pe=g}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,pe=a;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var x=t.current;for(pe=x;pe!==null;){a=pe;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,pe=v;else e:for(a=x;pe!==null;){if(o=pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:zl(9,o)}}catch(N){mt(o,o.return,N)}if(o===a){pe=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,pe=M;break e}pe=o.return}}if(Ge=r,Ki(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Pl,t)}catch{}i=!0}return i}finally{et=n,Mn.transition=e}}return!1}function cp(t,e,n){e=xs(n,e),e=Jg(t,e,1),t=Bi(t,e,1),e=jt(),t!==null&&(Na(t,1,e),en(t,e))}function mt(t,e,n){if(t.tag===3)cp(t,t,n);else for(;e!==null;){if(e.tag===3){cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=xs(n,t),t=ex(e,t,1),e=Bi(e,t,1),t=jt(),e!==null&&(Na(e,1,t),en(e,t));break}}e=e.return}}function yy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(kt&n)===n&&(Mt===4||Mt===3&&(kt&130023424)===kt&&500>vt()-Nh?xr(t,0):Rh|=n),en(t,e)}function yx(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=jt();t=pi(t,e),t!==null&&(Na(t,e,n),en(t,n))}function Sy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yx(t,n)}function by(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),yx(t,n)}var Sx;Sx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,cy(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,ct&&e.flags&1048576&&wg(e,dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Oo(t,e),t=e.pendingProps;var r=fs(e,zt.current);os(e,n),r=Mh(null,e,i,t,r,n);var s=Eh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(i)?(s=!0,cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vh(e),r.updater=Ol,e.stateNode=r,r._reactInternals=e,zu(e,i,t,n),e=ju(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&dh(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Oo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ey(i),t=kn(i,t),r){case 0:e=Vu(null,e,i,t,n);break e;case 1:e=Jf(null,e,i,t,n);break e;case 11:e=Qf(null,e,i,t,n);break e;case 14:e=Zf(null,e,i,kn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Vu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Jf(t,e,i,r,n);case 3:e:{if(rx(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kg(t,e),pl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(ne(423)),e),e=ep(t,e,i,n,r);break e}else if(i!==r){r=xs(Error(ne(424)),e),e=ep(t,e,i,n,r);break e}else for(un=Fi(e.stateNode.containerInfo.firstChild),dn=e,ct=!0,Dn=null,n=Rg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ps(),i===r){e=mi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return Pg(e),t===null&&Fu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Pu(i,r)?a=null:s!==null&&Pu(i,s)&&(e.flags|=32),ix(t,e),Vt(t,e,a,n),e.child;case 6:return t===null&&Fu(e),null;case 13:return sx(t,e,n);case 4:return _h(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ms(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Qf(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,it(hl,i._currentValue),i._currentValue=a,s!==null)if(Bn(s.value,a)){if(s.children===r.children&&!Zt.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Bu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,os(e,n),r=En(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),Zf(t,e,i,r,n);case 15:return tx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Oo(t,e),e.tag=1,Jt(i)?(t=!0,cl(e)):t=!1,os(e,n),Zg(e,i,r),zu(e,i,r,n),ju(null,e,i,!0,t,n);case 19:return ax(t,e,n);case 22:return nx(t,e,n)}throw Error(ne(156,e.tag))};function bx(t,e){return Ym(t,e)}function My(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new My(t,e,n,i)}function Lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ey(t){if(typeof t=="function")return Lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jd)return 11;if(t===eh)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Lh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Wr:return vr(n.children,r,s,e);case Zd:a=8,r|=8;break;case uu:return t=Sn(12,n,e,r|2),t.elementType=uu,t.lanes=s,t;case du:return t=Sn(13,n,e,r),t.elementType=du,t.lanes=s,t;case hu:return t=Sn(19,n,e,r),t.elementType=hu,t.lanes=s,t;case Pm:return Vl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nm:a=10;break e;case km:a=9;break e;case Jd:a=11;break e;case eh:a=14;break e;case Ai:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Sn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function Vl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=Pm,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ih(t,e,n,i,r,s,a,o,l){return t=new wy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vh(s),t}function Ty(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Mx(t){if(!t)return Wi;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Jt(n))return Mg(t,n,e)}return e}function Ex(t,e,n,i,r,s,a,o,l){return t=Ih(n,i,!0,t,r,s,a,o,l),t.context=Mx(null),n=t.current,i=jt(),r=zi(n),s=di(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,Na(t,r,i),en(t,i),t}function jl(t,e,n,i){var r=e.current,s=jt(),a=zi(r);return n=Mx(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,a),t!==null&&(Fn(t,r,a,s),Uo(t,r,a)),a}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function up(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uh(t,e){up(t,e),(t=t.alternate)&&up(t,e)}function Ay(){return null}var wx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fh(t){this._internalRoot=t}Gl.prototype.render=Fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));jl(t,e,null,null)};Gl.prototype.unmount=Fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){jl(null,t,null,null)}),e[fi]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ng();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ri.length&&e!==0&&e<Ri[n].priority;n++);Ri.splice(n,0,t),n===0&&rg(t)}};function Bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dp(){}function Cy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=bl(a);s.call(c)}}var a=Ex(e,i,t,0,null,!1,!1,"",dp);return t._reactRootContainer=a,t[fi]=a.current,ga(t.nodeType===8?t.parentNode:t),Mr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=bl(l);o.call(c)}}var l=Ih(t,0,!1,null,null,!1,!1,"",dp);return t._reactRootContainer=l,t[fi]=l.current,ga(t.nodeType===8?t.parentNode:t),Mr(function(){jl(e,l,n,i)}),l}function Xl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=bl(a);o.call(l)}}jl(e,a,t,r)}else a=Cy(n,e,t,r,i);return bl(a)}eg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ks(e.pendingLanes);n!==0&&(ih(e,n|1),en(e,vt()),!(Ge&6)&&(vs=vt()+500,Ki()))}break;case 13:Mr(function(){var i=pi(t,1);if(i!==null){var r=jt();Fn(i,t,1,r)}}),Uh(t,1)}};rh=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=jt();Fn(e,t,134217728,n)}Uh(t,134217728)}};tg=function(t){if(t.tag===13){var e=zi(t),n=pi(t,e);if(n!==null){var i=jt();Fn(n,t,e,i)}Uh(t,e)}};ng=function(){return et};ig=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};bu=function(t,e,n){switch(e){case"input":if(mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ul(i);if(!r)throw Error(ne(90));Lm(i),mu(i,r)}}}break;case"textarea":Um(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};jm=kh;Gm=Mr;var Ry={usingClientEntryPoint:!1,Events:[Pa,Yr,Ul,Hm,Vm,kh]},zs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ny={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qm(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||Ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Pl=no.inject(Ny),Wn=no}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(e))throw Error(ne(200));return Ty(t,e,null,n)};fn.createRoot=function(t,e){if(!Bh(t))throw Error(ne(299));var n=!1,i="",r=wx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ih(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,ga(t.nodeType===8?t.parentNode:t),new Fh(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=qm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Mr(t)};fn.hydrate=function(t,e,n){if(!Wl(e))throw Error(ne(200));return Xl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Bh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=wx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ex(e,null,t,1,n??null,r,!1,s,a),t[fi]=e.current,ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gl(e)};fn.render=function(t,e,n){if(!Wl(e))throw Error(ne(200));return Xl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(ne(40));return t._reactRootContainer?(Mr(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};fn.unstable_batchedUpdates=kh;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Xl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function Tx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tx)}catch(t){console.error(t)}}Tx(),Tm.exports=fn;var ky=Tm.exports,hp=ky;lu.createRoot=hp.createRoot,lu.hydrateRoot=hp.hydrateRoot;const Py={vi:{nav:{experience:"Trải nghiệm",howItWorks:"Cách sử dụng",builders:"Dành cho builder",faq:"FAQ",tryDemo:"Trải nghiệm demo"},hero:{statusBadge:"Bản demo • Solana Devnet",headline:`Ví Web3.
Bắt đầu thật đơn giản.`,description:"N.E.D giúp bạn quản lý, gửi và nhận stablecoin qua những thao tác quen thuộc — cùng hướng dẫn để bắt đầu.",ctaPrimary:"Khám phá bản demo",ctaSecondary:"Xây dựng cùng N.E.D",appBadge:"Giao diện ứng dụng di động",illustrationTag:"Minh họa trải nghiệm"},callouts:{balance:"Số dư rõ ràng",balanceDesc:"Theo dõi USDC thử nghiệm trên Solana Devnet theo thời gian thực.",receive:"Nhận diện đa kênh",receiveDesc:"Nhận diện người nhận linh hoạt qua số điện thoại, mã QR hoặc địa chỉ ví.",transfer:"Xác nhận trực quan",transferDesc:"Kiểm tra chi tiết người nhận và lượng tiền trước khi xác nhận gửi."},experience:{tag:"Trải nghiệm cốt lõi",headline:"Từ những thao tác bạn đã quen.",subtitle:"Không cần làm quen với các khái niệm phức tạp ngay từ ngày đầu. Mọi thao tác được thiết kế mạch lạc như các ứng dụng thanh toán thông dụng.",tabReceive:"Nhận tiền",tabSend:"Chuyển tiền",tabTrack:"Theo dõi tài sản",illustrationNotice:"Minh họa mô phỏng luồng thao tác trong bản demo.",receiveTitle:"Nhận stablecoin với mã QR hoặc số điện thoại",receiveDesc:"Người gửi có thể quét mã QR hoặc tìm qua số điện thoại liên kết để chuyển USDC Devnet cho bạn trong tích tắc.",sendTitle:"Chuyển tiền chính xác trong 3 bước quen thuộc",sendDesc:"Chọn người nhận qua SĐT, quét QR hoặc dán địa chỉ ví. Màn hình xác nhận rõ ràng giúp bạn an tâm trước khi bấm gửi.",trackTitle:"Theo dõi số dư và lịch sử giao dịch tức thì",trackDesc:"Mọi giao dịch thử nghiệm trên Solana Devnet được cập nhật minh bạch với thời gian xác thực chỉ vài giây."},howItWorks:{tag:"Quy trình thử nghiệm",headline:"Cách bắt đầu với bản demo.",subtitle:"Trải nghiệm N.E.D Wallet trên thiết bị di động của bạn qua 3 bước hướng dẫn đơn giản từ nhóm phát triển.",step1Title:"Liên hệ nhận hướng dẫn",step1Desc:"Gửi email đến nhóm phát triển để nhận hướng dẫn tiếp cận và quyền truy cập bản thử nghiệm.",step2Title:"Mở demo qua Expo",step2Desc:"Cài đặt Expo trên thiết bị (iOS hoặc Android) và mở dự án theo liên kết hướng dẫn riêng của nhóm.",step3Title:"Khám phá trên Devnet",step3Desc:"Nhận USDC thử nghiệm từ faucet Devnet và trải nghiệm các luồng chuyển nhận stablecoin tốc độ cao.",warningTitle:"Lưu ý quan trọng về môi trường thử nghiệm:",warningText:"Đây là môi trường thử nghiệm (Solana Devnet). Không gửi tài sản thật vào bản demo."},stablecoin:{tag:"Khái niệm cơ bản",headline:"Stablecoin là gì?",badge:"Thông tin bổ trợ",content:"Stablecoin là tài sản số được thiết kế để bám theo giá trị tham chiếu, chẳng hạn USD. Bản thử nghiệm của N.E.D có USDC. Stablecoin không phải tiền gửi ngân hàng và vẫn có rủi ro.",highlightNote:"N.E.D tập trung giúp bạn tương tác với stablecoin dễ dàng hơn thông qua trải nghiệm người dùng quen thuộc."},miniApps:{tag:"Định hướng mở rộng",status:"Đang phát triển",headline:"Thêm trải nghiệm, ngay trong ví.",description:"Mini-app là ứng dụng nhỏ do bên thứ ba phát triển, được định hướng tích hợp bên trong N.E.D nhằm mang tới đa dạng tiện ích cho người dùng mà không cần rời ví.",card1Title:"Tiện ích đời sống",card1Desc:"Định hướng tích hợp các dịch vụ tiện ích, thanh toán nội dung số và dịch vụ vi mô hàng ngày.",card2Title:"Tương tác & Cộng đồng",card2Desc:"Không gian cho các ứng dụng minigame, cộng đồng và các hoạt động nhóm sáng tạo.",card3Title:"Dịch vụ phi tập trung",card3Desc:"Cầu nối mượt mà tới các giải pháp Web3 hữu ích mà không tạo rào cản kỹ thuật cho người dùng.",cta:"Khám phá dành cho builder"},demoGuide:{tag:"Truy cập sớm",networkBadge:"Solana Devnet",headline:"Trải nghiệm N.E.D cùng nhóm phát triển.",subtitle:"Hiện tại bản demo được điều phối trực tiếp thông qua Expo để bảo đảm chất lượng phản hồi từ người thử nghiệm.",emailLabel:"Email liên hệ trực tiếp nhóm phát triển:",btnMailto:"Liên hệ nhận demo",btnCopy:"Sao chép email",btnCopied:"Đã sao chép email!",directDemoNotice:"Khi có đường dẫn Expo công khai, bạn sẽ có thể mở trực tiếp từ đây.",stepsTitle:"Các bước để nhận bản trải nghiệm:",stepA:"1. Nhấn nút gửi email hoặc sao chép địa chỉ liên hệ.",stepB:"2. Nhóm sẽ gửi hướng dẫn mở qua Expo và cấp quyền trải nghiệm.",stepC:"3. Bạn tham gia thử nghiệm và đóng góp phản hồi cải thiện sản phẩm."},faq:{tag:"Giải đáp thắc mắc",headline:"Câu hỏi thường gặp.",q1:"Tôi có cần hiểu blockchain để bắt đầu không?",a1:"Không cần. N.E.D được thiết kế để người chưa từng tiếp xúc với crypto hay Web3 vẫn có thể thao tác dễ dàng thông qua số điện thoại, mã QR và giao diện quen thuộc như các ví điện tử thông thường.",q2:"Bản demo có sử dụng tài sản thật không?",a2:"Hoàn toàn không. Bản demo hiện tại chỉ hoạt động trên mạng thử nghiệm Solana Devnet với đồng USDC thử nghiệm. Tuyệt đối không nạp tiền hoặc chuyển tài sản thật vào bản thử nghiệm này.",q3:"Làm thế nào để trải nghiệm qua Expo?",a3:"Bạn chỉ cần gửi email đăng ký cho nhóm phát triển. Nhóm sẽ phản hồi kèm hướng dẫn chi tiết để mở bản build demo thông qua ứng dụng Expo trên điện thoại của bạn.",q4:"N.E.D có phải ngân hàng không?",a4:"Không. N.E.D Wallet là ứng dụng ví phần mềm phi tập trung giúp bạn tự quản lý và tương tác với tài sản số trên mạng lưới Solana, không phải tổ chức tín dụng hay ngân hàng nhận tiền gửi.",q5:"Mini-app đã mở công khai chưa?",a5:"Chưa. Mini-app hiện đang ở giai đoạn định hướng nền tảng và nghiên cứu tích hợp kiến trúc. Nhóm đang tìm kiếm các nhà phát triển quan tâm để cùng thảo luận và thử nghiệm mô hình mẫu.",q6:"Builder liên hệ hợp tác bằng cách nào?",a6:'Các nhà phát triển và đối tác có thể truy cập trang "Dành cho builder" hoặc gửi email trực tiếp tới tdat.100524@gmail.com với tiêu đề hợp tác để trao đổi chi tiết về ý tưởng tích hợp.'},footer:{description:"Ví di động đơn giản hóa trải nghiệm stablecoin trên Solana Devnet. Bắt đầu với những thao tác quen thuộc.",statusTag:"Bản thử nghiệm • Solana Devnet",quickLinks:"Điều hướng",contact:"Liên hệ",disclaimer:"N.E.D Wallet hiện đang trong giai đoạn thử nghiệm trên Solana Devnet. Đây là tài liệu giới thiệu định hướng sản phẩm, không phải cam kết tài chính hay dịch vụ thương mại.",copyright:"© 2026 N.E.D Wallet. Tất cả các quyền được bảo lưu."},builders:{tag:"Dành cho nhà phát triển",headline:"Mang ý tưởng của bạn vào N.E.D.",subtitle:"N.E.D đang phát triển nền tảng mini-app, hướng tới việc cho phép builder đưa trải nghiệm của mình vào bên trong ví.",cta:"Trao đổi hợp tác",btnCopy:"Sao chép email",btnCopied:"Đã sao chép email!",badgeStatus:"Nền tảng đang phát triển • Mở trao đổi",whatIsTitle:"Mini-app trên N.E.D là gì?",whatIsDesc:"Mini-app là các ứng dụng gọn nhẹ do bên thứ ba phát triển, được định hướng chạy trực tiếp trong môi trường N.E.D Wallet. Người dùng có thể tận dụng ngay danh tính ví và stablecoin sẵn có để trải nghiệm dịch vụ của bạn mà không cần cài thêm app riêng lẻ.",whyBuildTitle:"Giá trị hướng tới cho Builder",why1Title:"Kênh tiếp cận người dùng",why1Desc:"Đưa sản phẩm trực tiếp đến người dùng ví thông qua không gian tích hợp tinh gọn.",why2Title:"Tận dụng hạ tầng Solana",why2Desc:"Khai thác tốc độ xử lý nhanh và chi phí giao dịch thấp của Solana cho các luồng thanh toán micro.",why3Title:"Đồng hành từ giai đoạn đầu",why3Desc:"Cùng nhóm phát triển định hình bộ tiêu chuẩn mini-app và đóng góp vào trải nghiệm tương tác cốt lõi.",journeyTitle:"Hành trình trao đổi đề xuất",journeySubtitle:"Quy trình 3 bước minh bạch để cùng nhau khám phá tiềm năng tích hợp.",step1Num:"01",step1Title:"Chia sẻ ý tưởng",step1Desc:"Gửi email mô tả ngắn gọn về sản phẩm, đối tượng người dùng mục tiêu và luồng trải nghiệm bạn muốn mang vào ví.",step2Num:"02",step2Title:"Trao đổi phạm vi",step2Desc:"Cùng nhóm N.E.D đánh giá tính khả thi kỹ thuật, giao diện phù hợp và phương án kết nối an toàn trên Devnet.",step3Num:"03",step3Title:"Phối hợp thử nghiệm",step3Desc:"Tham gia xây dựng và chạy thử nghiệm phiên bản Proof of Concept trong các bản build nội bộ tiếp theo.",statusCardTitle:"Trạng thái phát triển hiện tại",statusCardDesc:"Hệ thống mini-app đang trong quá trình nghiên cứu và thiết kế kiến trúc nền tảng. Hiện chưa công bố SDK công khai hoặc bảng phí thương mại. Chúng tôi ưu tiên trao đổi trực tiếp với các builder có ý tưởng sáng tạo.",bottomCtaTitle:"Sẵn sàng thảo luận về mini-app của bạn?",bottomCtaDesc:"Hãy kết nối ngay hôm nay để trở thành một trong những builder đầu tiên cùng phát triển với N.E.D.",backHome:"← Quay lại trang chủ"}},en:{nav:{experience:"Experience",howItWorks:"How it works",builders:"For builders",faq:"FAQ",tryDemo:"Try the demo"},hero:{statusBadge:"Demo • Solana Devnet",headline:`Your simple start
with Web3.`,description:"Manage, send, and receive stablecoins through familiar interactions, with guidance to get started.",ctaPrimary:"Explore the demo",ctaSecondary:"Build with N.E.D",appBadge:"Mobile App Interface",illustrationTag:"Experience Illustration"},callouts:{balance:"Clear Balance",balanceDesc:"Track your test USDC on Solana Devnet in real time with total clarity.",receive:"Multi-Channel Identify",receiveDesc:"Identify receivers seamlessly via phone number, QR code, or Solana wallet address.",transfer:"Visual Confirmation",transferDesc:"Review recipient details and exact amounts before you confirm transfer."},experience:{tag:"Core Experience",headline:"Start with familiar actions.",subtitle:"No need to grapple with complex crypto jargon on day one. Every interaction is designed to feel as effortless as modern mobile payments.",tabReceive:"Receive",tabSend:"Send",tabTrack:"Track",illustrationNotice:"Simulated interaction flow based on the working demo.",receiveTitle:"Receive stablecoins via QR Code or Phone Number",receiveDesc:"Senders can scan your QR code or look up your linked phone number to deliver Devnet USDC to you in seconds.",sendTitle:"Accurate transfers in 3 familiar steps",sendDesc:"Choose recipients by phone, QR scan, or wallet address. A clean pre-confirmation card ensures peace of mind before sending.",trackTitle:"Track balances and transaction history instantly",trackDesc:"All test transactions on Solana Devnet update transparently with near-instant confirmation times."},howItWorks:{tag:"Testing Process",headline:"How to get started.",subtitle:"Experience N.E.D Wallet on your mobile device through 3 guided steps directly with the development team.",step1Title:"Request access guide",step1Desc:"Reach out to the team via email to receive your personalized testing instructions and access credentials.",step2Title:"Open demo via Expo",step2Desc:"Install Expo on your device (iOS or Android) and open the project build link provided by the team.",step3Title:"Explore on Devnet",step3Desc:"Receive test USDC from the Devnet faucet and experience fast, low-friction stablecoin transfers.",warningTitle:"Important test environment notice:",warningText:"This is a test environment. Do not send real assets to the demo."},stablecoin:{tag:"Fundamental Concept",headline:"What is a stablecoin?",badge:"Educational Note",content:"A stablecoin is a digital asset designed to track a benchmark value, such as USD. The N.E.D demo supports USDC. Stablecoins are not bank deposits and still carry risks.",highlightNote:"N.E.D focuses on making stablecoins accessible through intuitive, approachable mobile design."},miniApps:{tag:"Expansion Direction",status:"In development",headline:"More experiences, inside your wallet.",description:"Mini-apps are lightweight third-party applications designed to run inside N.E.D, unlocking diverse utilities without leaving your wallet.",card1Title:"Everyday Utilities",card1Desc:"Planned integrations for digital content, utility payments, and micro-services.",card2Title:"Community & Play",card2Desc:"A space for creative minigames, group interactions, and social experiences.",card3Title:"Decentralized Services",card3Desc:"Frictionless bridges to useful Web3 capabilities without steep technical learning curves.",cta:"Explore for builders"},demoGuide:{tag:"Early Access",networkBadge:"Solana Devnet",headline:"Explore N.E.D with the team.",subtitle:"Currently, demo access is coordinated directly via Expo to ensure high-touch onboarding and qualitative feedback.",emailLabel:"Direct team email:",btnMailto:"Request demo access",btnCopy:"Copy email",btnCopied:"Email copied!",directDemoNotice:"Once a public Expo link is available, you will be able to launch the demo directly from here.",stepsTitle:"Steps to join the demo:",stepA:"1. Click to send an email or copy our contact address.",stepB:"2. The team will reply with the Expo onboarding link and access details.",stepC:"3. Explore the demo on Solana Devnet and share your valuable feedback."},faq:{tag:"Frequently Asked Questions",headline:"Questions & Answers.",q1:"Do I need to understand blockchain to start?",a1:"Not at all. N.E.D is designed so anyone unfamiliar with crypto can interact effortlessly using phone numbers, QR codes, and a familiar payment interface.",q2:"Does the demo use real assets?",a2:"Absolutely not. The current demo runs exclusively on the Solana Devnet network using test USDC. Never send real funds or mainnet crypto to this demo.",q3:"How do I try the demo via Expo?",a3:"Simply send an email request to our team. We will reply promptly with step-by-step instructions to open the test build using the Expo app on your mobile device.",q4:"Is N.E.D a bank?",a4:"No. N.E.D Wallet is a self-custodial software wallet application that allows you to manage and interact with digital assets on Solana. It is neither a bank nor a deposit-taking institution.",q5:"Are mini-apps publicly available yet?",a5:"Not yet. Mini-apps are in the platform architecture and research stage. We are currently actively speaking with builders who wish to explore prototype integrations.",q6:"How can builders collaborate?",a6:'Builders can visit our dedicated "For builders" page or email tdat.100524@gmail.com with a collaboration inquiry to discuss technical integration and concept pilots.'},footer:{description:"Mobile wallet simplifying the stablecoin experience on Solana Devnet. Begin with familiar interactions.",statusTag:"Test Build • Solana Devnet",quickLinks:"Navigation",contact:"Contact",disclaimer:"N.E.D Wallet is currently in development on Solana Devnet. This website presents product direction and does not constitute financial advice or commercial offerings.",copyright:"© 2026 N.E.D Wallet. All rights reserved."},builders:{tag:"For Developers",headline:"Bring your ideas into N.E.D.",subtitle:"N.E.D is developing a mini-app platform aimed at empowering builders to bring their native experiences inside the wallet.",cta:"Discuss a collaboration",btnCopy:"Copy email",btnCopied:"Email copied!",badgeStatus:"Platform in development • Open for collaboration",whatIsTitle:"What is a mini-app on N.E.D?",whatIsDesc:"Mini-apps are lightweight third-party applications designed to run natively within N.E.D Wallet. Users can leverage their existing wallet identity and stablecoin balances to access your service without installing separate apps.",whyBuildTitle:"Anticipated Value for Builders",why1Title:"Direct User Channel",why1Desc:"Deliver experiences directly to wallet users within a focused, distraction-free environment.",why2Title:"Solana Speed & Economy",why2Desc:"Leverage sub-second finality and near-zero transaction costs on Solana for seamless micro-transactions.",why3Title:"Early Co-Creation",why3Desc:"Collaborate closely with our core team to shape mini-app standards and early developer tooling.",journeyTitle:"Proposed Collaboration Journey",journeySubtitle:"A transparent 3-phase roadmap to explore integration possibilities together.",step1Num:"01",step1Title:"Share your concept",step1Desc:"Send us a brief email summarizing your product, target audience, and the user flow you envision inside the wallet.",step2Num:"02",step2Title:"Define integration scope",step2Desc:"Collaborate with the N.E.D team to assess technical feasibility, UX alignment, and safe Devnet sandbox connectivity.",step3Num:"03",step3Title:"Co-pilot on Devnet",step3Desc:"Build and validate an internal Proof-of-Concept in upcoming private tester builds.",statusCardTitle:"Current Development Status",statusCardDesc:"The mini-app framework is currently in architectural research. There is no public SDK, commercial console, or fee structure published at this stage. We prioritize bespoke exploratory dialogues with creative builders.",bottomCtaTitle:"Ready to build with N.E.D?",bottomCtaDesc:"Reach out today to become one of the pioneering builders shaping the future of N.E.D mini-apps.",backHome:"← Back to product overview"}}},Ax=Ue.createContext(void 0),Dy=({children:t})=>{const[e,n]=Ue.useState(()=>{try{const s=localStorage.getItem("ned_wallet_lang");if(s==="vi"||s==="en")return s}catch{}return"vi"}),i=s=>{n(s);try{localStorage.setItem("ned_wallet_lang",s)}catch{}};Ue.useEffect(()=>{document.documentElement.lang=e,e==="vi"?document.title="N.E.D Wallet — Ví Web3 cho Stablecoin trên Solana Devnet":document.title="N.E.D Wallet — Simple Web3 Stablecoin Wallet on Solana Devnet"},[e]);const r={lang:e,setLang:i,t:Py[e]};return d.jsx(Ax.Provider,{value:r,children:t})},Kn=()=>{const t=Ue.useContext(Ax);if(!t)throw new Error("useI18n must be used within an I18nProvider");return t};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Iy(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Ly(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=t=>{const e=Uy(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Cc(t){return t!=null}function By(t,e={}){var f,g;const n=e.attributeNames??{},i=_=>n[_]??_,r=t.size??t.width??Ji.width,s=t.size??t.height??Ji.height,a=((f=t.aliases)==null?void 0:f.filter(_=>typeof _=="string"&&_.trim()!=="").map(_=>`lucide-${_}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((g=e.className)==null?void 0:g.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?td(...l):td("lucide",...o,...l),h=e.absoluteStrokeWidth?Number(e.strokeWidth??Ji["stroke-width"])*Number(t.size??t.width??Ji.width)/Number(e.size??e.width??Ji.width):e.strokeWidth??Ji["stroke-width"];return["svg",{...Object.entries(Ji).reduce((_,[S,m])=>(_[i(S)]=m,_),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Cc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Cc(e.width)&&{[i("width")]:e.width},..."height"in e&&Cc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(_=>{const[S,m,u]=_,x=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return u?[S,x,u]:[S,x]})]}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Oy(t,e={}){return By(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Hy=Ue.createContext({}),Vy=()=>Ue.useContext(Hy),jy=Ue.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:h={node:c,aliases:[],size:24},...p},f)=>{const{size:g=24,strokeWidth:_=2,absoluteStrokeWidth:S=!1,nonScalingStroke:m=!1,color:u="currentColor",className:x=""}=Vy()??{},v=!!l||zy(p),[M,N,C=[]]=Oy(h,{color:t??u,width:n??e??g,height:i??e??g,strokeWidth:r??_,absoluteStrokeWidth:s??S,nonScalingStroke:a??m,className:td(x,o),hasA11yProp:v,attributes:p});return Ue.createElement(M,{ref:f,...N},[...C.map(([T,R])=>Ue.createElement(T,R)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Be(t,e=[],n=[]){const i=typeof t=="string"?Iy(t,e,n):t,r=Ue.forwardRef(({className:s,...a},o)=>Ue.createElement(jy,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=Fy(i.name)),r}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx={name:"arrow-down-left",size:24,node:[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]};Cx.node;const nd=Be(Cx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};Rx.node;const Gy=Be(Rx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Nx.node;const wa=Be(Nx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};kx.node;const jo=Be(kx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px={name:"blocks",size:24,node:[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]]};Px.node;const Dx=Be(Px);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Lx.node;const _s=Be(Lx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Ix.node;const Wy=Be(Ix);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Ux.node;const Fx=Be(Ux);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};Bx.node;const Xy=Be(Bx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};Ox.node;const qy=Be(Ox);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};zx.node;const $y=Be(zx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};Hx.node;const Vx=Be(Hx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};jx.node;const Yy=Be(jx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"construction",size:24,node:[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]};Gx.node;const Ky=Be(Gx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Wx.node;const Ml=Be(Wx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Xx.node;const Qy=Be(Xx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};qx.node;const Zy=Be(qx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};$x.node;const Jy=Be($x);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Yx.node;const eS=Be(Yx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};Kx.node;const tS=Be(Kx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Qx.node;const Ta=Be(Qx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Zx.node;const nS=Be(Zx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};Jx.node;const ev=Be(Jx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv={name:"qr-code",size:24,node:[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]};tv.node;const nv=Be(tv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};iv.node;const iS=Be(iv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};rv.node;const rS=Be(rv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};sv.node;const sS=Be(sv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};av.node;const ov=Be(av);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};lv.node;const aS=Be(lv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};cv.node;const oS=Be(cv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};uv.node;const Aa=Be(uv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};dv.node;const lS=Be(dv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};hv.node;const cS=Be(hv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv={name:"wallet",size:24,node:[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]};fv.node;const Go=Be(fv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};pv.node;const mv=Be(pv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};gv.node;const uS=Be(gv),id=({className:t="h-10",isDark:e=!0})=>d.jsxs("div",{className:`inline-flex items-center gap-2.5 select-none ${t}`,children:[d.jsx("div",{className:"relative w-10 h-10 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center overflow-hidden transition-transform hover:-rotate-3",children:d.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-7 h-7",children:[d.jsx("rect",{x:"6",y:"8",width:"6",height:"24",rx:"2",fill:"#111111"}),d.jsx("path",{d:"M12 9L28 31H22L6 9H12Z",fill:"#111111"}),d.jsx("rect",{x:"28",y:"8",width:"6",height:"24",rx:"2",fill:"#111111"}),d.jsx("circle",{cx:"20",cy:"14",r:"3",fill:"#D5FF00",stroke:"#111111",strokeWidth:"1.5"})]})}),d.jsxs("div",{className:"flex flex-col",children:[d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("span",{className:`font-black text-xl tracking-wider ${e?"text-brand-offWhite":"text-brand-inkBlack"}`,children:"N.E.D"}),d.jsx("span",{className:"px-1.5 py-0.2 text-[10px] font-black uppercase tracking-widest bg-brand-cyan text-brand-inkBlack border border-brand-inkBlack rounded",children:"DEVNET"})]}),d.jsx("span",{className:`text-[10px] font-extrabold uppercase tracking-widest -mt-1 ${e?"text-brand-lavender":"text-stone-600"}`,children:"Wallet"})]})]}),dS=({currentPath:t,onNavigate:e})=>{const{t:n,lang:i,setLang:r}=Kn(),[s,a]=Ue.useState(!1),o=Ue.useRef(null),l=Ue.useRef(null);Ue.useEffect(()=>{const h=p=>{p.key==="Escape"&&s&&a(!1)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[s]),Ue.useEffect(()=>{s&&l.current&&l.current.focus()},[s]);const c=h=>{if(a(!1),h.startsWith("#"))if(t!=="/")e("/"),setTimeout(()=>{const p=document.querySelector(h);p==null||p.scrollIntoView({behavior:"smooth"})},100);else{const p=document.querySelector(h);p==null||p.scrollIntoView({behavior:"smooth"})}else e(h),window.scrollTo({top:0,behavior:"smooth"})};return d.jsxs("header",{className:"sticky top-0 z-50 w-full bg-brand-deepPurple/95 border-b-3 border-brand-inkBlack backdrop-blur-none px-4 sm:px-6 lg:px-8 py-3 transition-colors",children:[d.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-4",children:[d.jsx("button",{onClick:()=>c("/"),className:"focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg p-1 text-left flex items-center","aria-label":"N.E.D Wallet Home",children:d.jsx(id,{isDark:!0})}),d.jsxs("nav",{className:"hidden md:flex items-center gap-1 lg:gap-2","aria-label":"Main Navigation",children:[d.jsx("button",{onClick:()=>c("#experience"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.experience}),d.jsx("button",{onClick:()=>c("#how-it-works"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.howItWorks}),d.jsx("button",{onClick:()=>c("/builders"),className:`px-3 py-1.5 text-sm font-bold rounded-lg transition-colors border-2 ${t==="/builders"?"bg-brand-lavender text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs":"text-brand-offWhite border-transparent hover:border-brand-lavender/50"}`,children:n.nav.builders}),d.jsx("button",{onClick:()=>c("#faq"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.faq})]}),d.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[d.jsxs("div",{className:"flex items-center bg-brand-darkSurface border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[d.jsx("button",{onClick:()=>r("vi"),className:`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${i==="vi"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-300 hover:text-white"}`,"aria-label":"Chuyển sang Tiếng Việt","aria-pressed":i==="vi",children:"VI"}),d.jsx("button",{onClick:()=>r("en"),className:`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${i==="en"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-300 hover:text-white"}`,"aria-label":"Switch to English","aria-pressed":i==="en",children:"EN"})]}),d.jsxs("button",{onClick:()=>c("#demo"),className:"btn-brutal-primary px-4 py-2 rounded-xl text-sm font-black flex items-center gap-1.5",children:[d.jsx("span",{children:n.nav.tryDemo}),d.jsx(wa,{className:"w-4 h-4"})]})]}),d.jsxs("div",{className:"flex items-center gap-2 md:hidden",children:[d.jsxs("button",{onClick:()=>r(i==="vi"?"en":"vi"),className:"px-2.5 py-1 text-xs font-black bg-brand-darkSurface border-2 border-brand-inkBlack text-brand-offWhite rounded-lg shadow-brutal-xs flex items-center gap-1","aria-label":"Toggle language",children:[d.jsx(Zy,{className:"w-3.5 h-3.5 text-brand-cyan"}),d.jsx("span",{children:i.toUpperCase()})]}),d.jsx("button",{onClick:()=>a(!0),className:"p-2 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs","aria-label":"Open Navigation Menu","aria-expanded":s,children:d.jsx(nS,{className:"w-5 h-5"})})]})]}),s&&d.jsx("div",{className:"fixed inset-0 z-50 bg-brand-deepPurple/80 backdrop-blur-sm flex justify-end md:hidden animate-in fade-in",onClick:()=>a(!1),children:d.jsxs("div",{ref:o,className:"w-[85%] max-w-sm h-full bg-brand-warmCream border-l-4 border-brand-inkBlack p-6 flex flex-col justify-between shadow-brutal-xl overflow-y-auto",onClick:h=>h.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Mobile Navigation",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between pb-4 border-b-2 border-brand-inkBlack mb-6",children:[d.jsx(id,{isDark:!1}),d.jsx("button",{ref:l,onClick:()=>a(!1),className:"p-2 bg-white border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs hover:bg-brand-paleYellow","aria-label":"Close menu",children:d.jsx(mv,{className:"w-5 h-5 text-brand-inkBlack"})})]}),d.jsxs("nav",{className:"flex flex-col gap-3",children:[d.jsx("button",{onClick:()=>c("#experience"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.experience}),d.jsx("button",{onClick:()=>c("#how-it-works"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.howItWorks}),d.jsx("button",{onClick:()=>c("/builders"),className:`w-full text-left py-3 px-4 border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs ${t==="/builders"?"bg-brand-lavender":"bg-white hover:bg-brand-lavender/30"}`,children:n.nav.builders}),d.jsx("button",{onClick:()=>c("#faq"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.faq})]})]}),d.jsxs("div",{className:"pt-6 border-t-2 border-brand-inkBlack flex flex-col gap-4",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-xs font-black uppercase text-stone-600",children:"Ngôn ngữ / Language:"}),d.jsxs("div",{className:"flex bg-white border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[d.jsx("button",{onClick:()=>r("vi"),className:`px-3 py-1 text-xs font-black rounded-lg ${i==="vi"?"bg-brand-lime border border-brand-inkBlack":"text-stone-600"}`,children:"VI"}),d.jsx("button",{onClick:()=>r("en"),className:`px-3 py-1 text-xs font-black rounded-lg ${i==="en"?"bg-brand-lime border border-brand-inkBlack":"text-stone-600"}`,children:"EN"})]})]}),d.jsxs("button",{onClick:()=>c("#demo"),className:"w-full py-3 bg-brand-lavender text-brand-inkBlack border-3 border-brand-inkBlack rounded-xl font-black text-sm shadow-brutal flex items-center justify-center gap-2",children:[d.jsx("span",{children:n.nav.tryDemo}),d.jsx(wa,{className:"w-4 h-4"})]})]})]})})]})},Bt={productName:"N.E.D Wallet",contactEmail:"tdat.100524@gmail.com",network:"Solana Devnet",platform:"Expo (iOS & Android)",demoMailSubject:"N.E.D Wallet — Demo request",demoMailBodyVi:`Chào team N.E.D,

Tôi muốn đăng ký nhận hướng dẫn trải nghiệm bản demo N.E.D Wallet qua Expo trên Solana Devnet.

Thông tin của tôi:
- Thiết bị (iOS/Android):
- Email nhận thư mời Expo:

Cảm ơn team!`,demoMailBodyEn:`Hello N.E.D team,

I would like to request access and guidance to test the N.E.D Wallet demo via Expo on Solana Devnet.

My details:
- Device (iOS/Android):
- Expo account / email:

Thank you!`,builderMailSubject:"N.E.D Wallet — Builder collaboration",builderMailBodyVi:`Chào team N.E.D,

Tôi là nhà phát triển / dự án quan tâm đến nền tảng mini-app trên N.E.D Wallet.

Ý tưởng / Dự án của tôi:
- Tên dự án / sản phẩm:
- Mô tả trải nghiệm muốn đưa vào ví:
- Liên hệ (Telegram / Twitter / Email):

Rất mong được trao đổi thêm!`,builderMailBodyEn:`Hello N.E.D team,

I am a developer/project interested in collaborating on the mini-app platform inside N.E.D Wallet.

My project / concept:
- Project name:
- Description of experience for wallet:
- Contact handle (Telegram / Twitter / Email):

Looking forward to discussing further!`,demoUrl:"",stablecoinToken:"USDC (Devnet)",supportedIdentities:["Số điện thoại / Phone number","Mã QR / QR Code","Địa chỉ ví / Wallet address"]},hS=({onNavigate:t})=>{const{t:e}=Kn(),n=i=>{if(i.startsWith("#")){const r=document.querySelector(i);r?r.scrollIntoView({behavior:"smooth"}):(t("/"),setTimeout(()=>{var s;(s=document.querySelector(i))==null||s.scrollIntoView({behavior:"smooth"})},100))}else t(i),window.scrollTo({top:0,behavior:"smooth"})};return d.jsx("footer",{className:"w-full bg-brand-deepPurple text-brand-offWhite border-t-4 border-brand-inkBlack py-12 sm:py-16 px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-brand-lavender/20",children:[d.jsxs("div",{className:"md:col-span-6 flex flex-col items-start",children:[d.jsx("button",{onClick:()=>n("/"),className:"mb-4 text-left","aria-label":"N.E.D Wallet Home",children:d.jsx(id,{isDark:!0})}),d.jsx("p",{className:"text-sm font-medium text-stone-300 max-w-md leading-relaxed mb-4",children:e.footer.description}),d.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-brand-darkSurface border border-brand-lavender rounded-lg text-xs font-black text-brand-lime",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-pulse"}),d.jsx("span",{children:e.footer.statusTag})]})]}),d.jsxs("div",{className:"md:col-span-3 flex flex-col gap-3",children:[d.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-brand-lavender",children:e.footer.quickLinks}),d.jsxs("nav",{className:"flex flex-col gap-2 text-sm font-bold text-stone-300",children:[d.jsx("button",{onClick:()=>n("#experience"),className:"text-left hover:text-white transition-colors",children:e.nav.experience}),d.jsx("button",{onClick:()=>n("#how-it-works"),className:"text-left hover:text-white transition-colors",children:e.nav.howItWorks}),d.jsx("button",{onClick:()=>n("/builders"),className:"text-left hover:text-white transition-colors",children:e.nav.builders}),d.jsx("button",{onClick:()=>n("#faq"),className:"text-left hover:text-white transition-colors",children:e.nav.faq})]})]}),d.jsxs("div",{className:"md:col-span-3 flex flex-col gap-3",children:[d.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-brand-lavender",children:e.footer.contact}),d.jsx("div",{className:"text-sm font-bold text-stone-300",children:"Email nhóm phát triển:"}),d.jsx("a",{href:`mailto:${Bt.contactEmail}`,className:"text-sm font-black text-brand-cyan hover:underline break-all",children:Bt.contactEmail}),d.jsx("div",{className:"text-xs text-stone-400 font-medium mt-1",children:"Phản hồi hướng dẫn trong vòng 24 giờ làm việc."})]})]}),d.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-stone-400",children:[d.jsx("p",{className:"max-w-3xl leading-relaxed",children:e.footer.disclaimer}),d.jsx("div",{className:"text-stone-500 flex-shrink-0",children:e.footer.copyright})]})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="169",fS=0,fp=1,pS=2,xv=1,mS=2,ii=3,Xi=0,tn=1,ai=2,Vi=0,cs=1,pp=2,mp=3,gp=4,gS=5,ur=100,xS=101,vS=102,_S=103,yS=104,SS=200,bS=201,MS=202,ES=203,rd=204,sd=205,wS=206,TS=207,AS=208,CS=209,RS=210,NS=211,kS=212,PS=213,DS=214,ad=0,od=1,ld=2,ys=3,cd=4,ud=5,dd=6,hd=7,vv=0,LS=1,IS=2,ji=0,US=1,FS=2,BS=3,OS=4,zS=5,HS=6,VS=7,_v=300,Ss=301,bs=302,fd=303,pd=304,ql=306,md=1e3,mr=1001,gd=1002,bn=1003,jS=1004,io=1005,Ln=1006,Rc=1007,gr=1008,gi=1009,yv=1010,Sv=1011,Ca=1012,zh=1013,Er=1014,ci=1015,La=1016,Hh=1017,Vh=1018,Ms=1020,bv=35902,Mv=1021,Ev=1022,In=1023,wv=1024,Tv=1025,us=1026,Es=1027,Av=1028,jh=1029,Cv=1030,Gh=1031,Wh=1033,Wo=33776,Xo=33777,qo=33778,$o=33779,xd=35840,vd=35841,_d=35842,yd=35843,Sd=36196,bd=37492,Md=37496,Ed=37808,wd=37809,Td=37810,Ad=37811,Cd=37812,Rd=37813,Nd=37814,kd=37815,Pd=37816,Dd=37817,Ld=37818,Id=37819,Ud=37820,Fd=37821,Yo=36492,Bd=36494,Od=36495,Rv=36283,zd=36284,Hd=36285,Vd=36286,GS=3200,WS=3201,Nv=0,XS=1,ki="",Hn="srgb",Qi="srgb-linear",Xh="display-p3",$l="display-p3-linear",El="linear",ot="srgb",wl="rec709",Tl="p3",Nr=7680,xp=519,qS=512,$S=513,YS=514,kv=515,KS=516,QS=517,ZS=518,JS=519,vp=35044,_p="300 es",ui=2e3,Al=2001;class Rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ko=Math.PI/180,jd=180/Math.PI;function Ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function eb(t,e){return(t%e+e)%e}function Nc(t,e,n){return(1-n)*t+n*e}function Hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,n,i,r,s,a,o,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],g=i[5],_=i[8],S=r[0],m=r[3],u=r[6],x=r[1],v=r[4],M=r[7],N=r[2],C=r[5],T=r[8];return s[0]=a*S+o*x+l*N,s[3]=a*m+o*v+l*C,s[6]=a*u+o*M+l*T,s[1]=c*S+h*x+p*N,s[4]=c*m+h*v+p*C,s[7]=c*u+h*M+p*T,s[2]=f*S+g*x+_*N,s[5]=f*m+g*v+_*C,s[8]=f*u+g*M+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*s,g=c*s-a*l,_=n*p+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=f*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=g*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(kc.makeScale(e,n)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new Le;function Pv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tb(){const t=Cl("canvas");return t.style.display="block",t}const yp={};function Qo(t){t in yp||(yp[t]=!0,console.warn(t))}function nb(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function ib(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rb(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sp=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bp=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vs={[Qi]:{transfer:El,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:ot,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$l]:{transfer:El,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(bp),fromReference:t=>t.applyMatrix3(Sp)},[Xh]:{transfer:ot,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(bp),fromReference:t=>t.applyMatrix3(Sp).convertLinearToSRGB()}},sb=new Set([Qi,$l]),Qe={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!sb.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Vs[e].toReference,r=Vs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Vs[t].primaries},getTransfer:function(t){return t===ki?El:Vs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Vs[e].luminanceCoefficients)}};function ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class ab{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Cl("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ds(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ds(n[i]/255)*255):n[i]=ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ob=0;class Dv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dc(r[a].image)):s.push(Dc(r[a]))}else s=Dc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ab.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lb=0;class nn extends Rs{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=mr,r=mr,s=Ln,a=gr,o=In,l=gi,c=nn.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Ia(),this.name="",this.source=new Dv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=_v;nn.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],g=l[5],_=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(g+1)/2,N=(u+1)/2,C=(h+f)/4,T=(p+S)/4,R=(_+m)/4;return v>M&&v>N?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=T/i):M>N?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=R/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=T/s,r=R/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(p-S)*(p-S)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(p-S)/x,this.z=(f-h)/x,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cb extends Rs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends cb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Lv extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ub extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const f=s[a+0],g=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=g,e[n+2]=_,e[n+3]=S;return}if(p!==S||l!==f||c!==g||h!==_){let m=1-o;const u=l*f+c*g+h*_+p*S,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const N=Math.sqrt(v),C=Math.atan2(N,u*x);m=Math.sin(m*C)/N,o=Math.sin(o*C)/N}const M=o*x;if(l=l*m+f*M,c=c*m+g*M,h=h*m+_*M,p=p*m+S*M,m===1-o){const N=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=N,c*=N,h*=N,p*=N}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],f=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+h*p+l*g-c*f,e[n+1]=l*_+h*f+c*p-o*g,e[n+2]=c*_+h*g+o*f-l*p,e[n+3]=h*_-o*p-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*p+c*g*_,this._y=c*g*p-f*h*_,this._z=c*h*_+f*g*p,this._w=c*h*p-f*g*_;break;case"YXZ":this._x=f*h*p+c*g*_,this._y=c*g*p-f*h*_,this._z=c*h*_-f*g*p,this._w=c*h*p+f*g*_;break;case"ZXY":this._x=f*h*p-c*g*_,this._y=c*g*p+f*h*_,this._z=c*h*_+f*g*p,this._w=c*h*p-f*g*_;break;case"ZYX":this._x=f*h*p-c*g*_,this._y=c*g*p+f*h*_,this._z=c*h*_-f*g*p,this._w=c*h*p+f*g*_;break;case"YZX":this._x=f*h*p+c*g*_,this._y=c*g*p+f*h*_,this._z=c*h*_-f*g*p,this._w=c*h*p-f*g*_;break;case"XZY":this._x=f*h*p-c*g*_,this._y=c*g*p-f*h*_,this._z=c*h*_+f*g*p,this._w=c*h*p+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new F,Mp=new Ua;class Fa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ro.copy(i.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),so.subVectors(this.max,js),Pr.subVectors(e.a,js),Dr.subVectors(e.b,js),Lr.subVectors(e.c,js),Si.subVectors(Dr,Pr),bi.subVectors(Lr,Dr),er.subVectors(Pr,Lr);let n=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-er.z,er.y,Si.z,0,-Si.x,bi.z,0,-bi.x,er.z,0,-er.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-er.y,er.x,0];return!Ic(n,Pr,Dr,Lr,so)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,Pr,Dr,Lr,so))?!1:(ao.crossVectors(Si,bi),n=[ao.x,ao.y,ao.z],Ic(n,Pr,Dr,Lr,so))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new F,new F,new F,new F,new F,new F,new F,new F],Cn=new F,ro=new Fa,Pr=new F,Dr=new F,Lr=new F,Si=new F,bi=new F,er=new F,js=new F,so=new F,ao=new F,tr=new F;function Ic(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){tr.fromArray(t,s);const o=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),c=n.dot(tr),h=i.dot(tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const db=new Fa,Gs=new F,Uc=new F;class Yl{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):db.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const n=Gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Uc)),this.expandByPoint(Gs.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new F,Fc=new F,oo=new F,Mi=new F,Bc=new F,lo=new F,Oc=new F;class Iv{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fc.copy(e).add(n).multiplyScalar(.5),oo.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Fc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(oo),o=Mi.dot(this.direction),l=-Mi.dot(oo),c=Mi.lengthSq(),h=Math.abs(1-a*a);let p,f,g,_;if(h>0)if(p=a*l-o,f=a*o-l,_=s*h,p>=0)if(f>=-_)if(f<=_){const S=1/h;p*=S,f*=S,g=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+c;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+f*(f+2*l)+c):f<=_?(p=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Fc).addScaledVector(oo,f),g}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){Bc.subVectors(n,e),lo.subVectors(i,e),Oc.crossVectors(Bc,lo);let a=this.direction.dot(Oc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(lo.crossVectors(Mi,lo));if(l<0)return null;const c=o*this.direction.dot(Bc.cross(Mi));if(c<0||l+c>a)return null;const h=-o*Mi.dot(Oc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,a,o,l,c,h,p,f,g,_,S,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,p,f,g,_,S,m)}set(e,n,i,r,s,a,o,l,c,h,p,f,g,_,S,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=f,u[3]=g,u[7]=_,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),a=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,g=a*p,_=o*h,S=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=g+_*c,n[5]=f-S*c,n[9]=-o*l,n[2]=S-f*c,n[6]=_+g*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,g=l*p,_=c*h,S=c*p;n[0]=f+S*o,n[4]=_*o-g,n[8]=a*c,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=g*o-_,n[6]=S+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,g=l*p,_=c*h,S=c*p;n[0]=f-S*o,n[4]=-a*p,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*h,n[9]=S-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,g=a*p,_=o*h,S=o*p;n[0]=l*h,n[4]=_*c-g,n[8]=f*c+S,n[1]=l*p,n[5]=S*c+f,n[9]=g*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,g=a*c,_=o*l,S=o*c;n[0]=l*h,n[4]=S-f*p,n[8]=_*p+g,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=g*p+_,n[10]=f-S*p}else if(e.order==="XZY"){const f=a*l,g=a*c,_=o*l,S=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=f*p+S,n[5]=a*h,n[9]=g*p-_,n[2]=_*p-g,n[6]=o*h,n[10]=S*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hb,e,fb)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ei.crossVectors(i,on),Ei.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ei.crossVectors(i,on)),Ei.normalize(),co.crossVectors(on,Ei),r[0]=Ei.x,r[4]=co.x,r[8]=on.x,r[1]=Ei.y,r[5]=co.y,r[9]=on.y,r[2]=Ei.z,r[6]=co.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],g=i[13],_=i[2],S=i[6],m=i[10],u=i[14],x=i[3],v=i[7],M=i[11],N=i[15],C=r[0],T=r[4],R=r[8],X=r[12],y=r[1],w=r[5],V=r[9],z=r[13],q=r[2],J=r[6],H=r[10],W=r[14],k=r[3],K=r[7],Q=r[11],re=r[15];return s[0]=a*C+o*y+l*q+c*k,s[4]=a*T+o*w+l*J+c*K,s[8]=a*R+o*V+l*H+c*Q,s[12]=a*X+o*z+l*W+c*re,s[1]=h*C+p*y+f*q+g*k,s[5]=h*T+p*w+f*J+g*K,s[9]=h*R+p*V+f*H+g*Q,s[13]=h*X+p*z+f*W+g*re,s[2]=_*C+S*y+m*q+u*k,s[6]=_*T+S*w+m*J+u*K,s[10]=_*R+S*V+m*H+u*Q,s[14]=_*X+S*z+m*W+u*re,s[3]=x*C+v*y+M*q+N*k,s[7]=x*T+v*w+M*J+N*K,s[11]=x*R+v*V+M*H+N*Q,s[15]=x*X+v*z+M*W+N*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],g=e[14],_=e[3],S=e[7],m=e[11],u=e[15];return _*(+s*l*p-r*c*p-s*o*f+i*c*f+r*o*g-i*l*g)+S*(+n*l*g-n*c*f+s*a*f-r*a*g+r*c*h-s*l*h)+m*(+n*c*p-n*o*g-s*a*p+i*a*g+s*o*h-i*c*h)+u*(-r*o*h-n*l*p+n*o*f+r*a*p-i*a*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],g=e[11],_=e[12],S=e[13],m=e[14],u=e[15],x=p*m*c-S*f*c+S*l*g-o*m*g-p*l*u+o*f*u,v=_*f*c-h*m*c-_*l*g+a*m*g+h*l*u-a*f*u,M=h*S*c-_*p*c+_*o*g-a*S*g-h*o*u+a*p*u,N=_*p*l-h*S*l-_*o*f+a*S*f+h*o*m-a*p*m,C=n*x+i*v+r*M+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=x*T,e[1]=(S*f*s-p*m*s-S*r*g+i*m*g+p*r*u-i*f*u)*T,e[2]=(o*m*s-S*l*s+S*r*c-i*m*c-o*r*u+i*l*u)*T,e[3]=(p*l*s-o*f*s-p*r*c+i*f*c+o*r*g-i*l*g)*T,e[4]=v*T,e[5]=(h*m*s-_*f*s+_*r*g-n*m*g-h*r*u+n*f*u)*T,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*u-n*l*u)*T,e[7]=(a*f*s-h*l*s+h*r*c-n*f*c-a*r*g+n*l*g)*T,e[8]=M*T,e[9]=(_*p*s-h*S*s-_*i*g+n*S*g+h*i*u-n*p*u)*T,e[10]=(a*S*s-_*o*s+_*i*c-n*S*c-a*i*u+n*o*u)*T,e[11]=(h*o*s-a*p*s-h*i*c+n*p*c+a*i*g-n*o*g)*T,e[12]=N*T,e[13]=(h*S*r-_*p*r+_*i*f-n*S*f-h*i*m+n*p*m)*T,e[14]=(_*o*r-a*S*r-_*i*l+n*S*l+a*i*m-n*o*m)*T,e[15]=(a*p*r-h*o*r+h*i*l-n*p*l-a*i*f+n*o*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,p=o+o,f=s*c,g=s*h,_=s*p,S=a*h,m=a*p,u=o*p,x=l*c,v=l*h,M=l*p,N=i.x,C=i.y,T=i.z;return r[0]=(1-(S+u))*N,r[1]=(g+M)*N,r[2]=(_-v)*N,r[3]=0,r[4]=(g-M)*C,r[5]=(1-(f+u))*C,r[6]=(m+x)*C,r[7]=0,r[8]=(_+v)*T,r[9]=(m-x)*T,r[10]=(1-(f+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const a=Ir.set(r[4],r[5],r[6]).length(),o=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,h=1/a,p=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=p,Rn.elements[9]*=p,Rn.elements[10]*=p,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let g,_;if(o===ui)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Al)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const l=this.elements,c=1/(n-e),h=1/(i-r),p=1/(a-s),f=(n+e)*c,g=(i+r)*h;let _,S;if(o===ui)_=(a+s)*p,S=-2*p;else if(o===Al)_=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ir=new F,Rn=new ht,hb=new F(0,0,0),fb=new F(1,1,1),Ei=new F,co=new F,on=new F,Ep=new ht,wp=new Ua;class Yn{constructor(e=0,n=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Uv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pb=0;const Tp=new F,Ur=new Ua,ei=new ht,uo=new F,Ws=new F,mb=new F,gb=new Ua,Ap=new F(1,0,0),Cp=new F(0,1,0),Rp=new F(0,0,1),Np={type:"added"},xb={type:"removed"},Fr={type:"childadded",child:null},zc={type:"childremoved",child:null};class Pt extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new F,n=new Yn,i=new Ua,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Le}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Rp,e)}translateOnAxis(e,n){return Tp.copy(e).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?uo.copy(e):uo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Ws,uo,this.up):ei.lookAt(uo,Ws,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(ei),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Np),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xb),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Np),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,mb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,gb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new F(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new F,ti=new F,Hc=new F,ni=new F,Br=new F,Or=new F,kp=new F,Vc=new F,jc=new F,Gc=new F,Wc=new gt,Xc=new gt,qc=new gt;class yn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),ti.subVectors(i,n),Hc.subVectors(e,n);const a=Nn.dot(Nn),o=Nn.dot(ti),l=Nn.dot(Hc),c=ti.dot(ti),h=ti.dot(Hc),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,g=(c*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Wc.setScalar(0),Xc.setScalar(0),qc.setScalar(0),Wc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,i),qc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wc,s.x),a.addScaledVector(Xc,s.y),a.addScaledVector(qc,s.z),a}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),ti.subVectors(e,n),Nn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Nn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Br.subVectors(r,i),Or.subVectors(s,i),Vc.subVectors(e,i);const l=Br.dot(Vc),c=Or.dot(Vc);if(l<=0&&c<=0)return n.copy(i);jc.subVectors(e,r);const h=Br.dot(jc),p=Or.dot(jc);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Br,a);Gc.subVectors(e,s);const g=Br.dot(Gc),_=Or.dot(Gc);if(_>=0&&g<=_)return n.copy(s);const S=g*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Or,o);const m=h*_-g*p;if(m<=0&&p-h>=0&&g-_>=0)return kp.subVectors(s,r),o=(p-h)/(p-h+(g-_)),n.copy(r).addScaledVector(kp,o);const u=1/(m+S+f);return a=S*u,o=f*u,n.copy(i).addScaledVector(Br,a).addScaledVector(Or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=eb(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=$c(a,s,e+1/3),this.g=$c(a,s,e),this.b=$c(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=Fv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=Pc(e.r),this.g=Pc(e.g),this.b=Pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Qe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Kt(Ft.r*255,0,255))*65536+Math.round(Kt(Ft.g*255,0,255))*256+Math.round(Kt(Ft.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Hn){Qe.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+n,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wi),e.getHSL(ho);const i=Nc(wi.h,ho.h,n),r=Nc(wi.s,ho.s,n),s=Nc(wi.l,ho.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new qe;qe.NAMES=Fv;let vb=0;class Ns extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=cs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rd&&(i.blendSrc=this.blendSrc),this.blendDst!==sd&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bv extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new F,fo=new Ze;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vp,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fo.fromBufferAttribute(this,n),fo.applyMatrix3(e),this.setXY(n,fo.x,fo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),e}}class Ov extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class zv extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $n extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _b=0;const gn=new ht,Yc=new Pt,zr=new F,ln=new Fa,Xs=new Fa,Tt=new F;class vi extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pv(e)?zv:Ov)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $n(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(ln.min,Xs.min),ln.expandByPoint(Tt),Tt.addVectors(ln.max,Xs.max),ln.expandByPoint(Tt)):(ln.expandByPoint(Xs.min),ln.expandByPoint(Xs.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(zr.fromBufferAttribute(e,c),Tt.add(zr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new F,l[R]=new F;const c=new F,h=new F,p=new F,f=new Ze,g=new Ze,_=new Ze,S=new F,m=new F;function u(R,X,y){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,X),p.fromBufferAttribute(i,y),f.fromBufferAttribute(s,R),g.fromBufferAttribute(s,X),_.fromBufferAttribute(s,y),h.sub(c),p.sub(c),g.sub(f),_.sub(f);const w=1/(g.x*_.y-_.x*g.y);isFinite(w)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(p,-g.y).multiplyScalar(w),m.copy(p).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(w),o[R].add(S),o[X].add(S),o[y].add(S),l[R].add(m),l[X].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,X=x.length;R<X;++R){const y=x[R],w=y.start,V=y.count;for(let z=w,q=w+V;z<q;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new F,M=new F,N=new F,C=new F;function T(R){N.fromBufferAttribute(r,R),C.copy(N);const X=o[R];v.copy(X),v.sub(N.multiplyScalar(N.dot(X))).normalize(),M.crossVectors(C,X);const w=M.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,w)}for(let R=0,X=x.length;R<X;++R){const y=x[R],w=y.start,V=y.count;for(let z=w,q=w+V;z<q;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,h=new F,p=new F;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,m),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let g=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?g=l[S]*o.data.stride+o.offset:g=l[S]*h;for(let u=0;u<h;u++)f[_++]=c[g++]}return new qn(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],g=e(f,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const g=c[p];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,g=p.length;f<g;f++)h.push(p[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new ht,nr=new Iv,po=new Yl,Dp=new F,mo=new F,go=new F,xo=new F,Kc=new F,vo=new F,Lp=new F,_o=new F;class Gn extends Pt{constructor(e=new vi,n=new Bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(Kc.fromBufferAttribute(p,e),a?vo.addScaledVector(Kc,h):vo.addScaledVector(Kc.sub(n),h))}n.add(vo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(po.containsPoint(nr.origin)===!1&&(nr.intersectSphere(po,Dp)===null||nr.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Pp.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Pp),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const m=f[_],u=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=x,N=v;M<N;M+=3){const C=o.getX(M),T=o.getX(M+1),R=o.getX(M+2);r=yo(this,u,e,i,c,h,p,C,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let m=_,u=S;m<u;m+=3){const x=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);r=yo(this,a,e,i,c,h,p,x,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const m=f[_],u=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=x,N=v;M<N;M+=3){const C=M,T=M+1,R=M+2;r=yo(this,u,e,i,c,h,p,C,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=_,u=S;m<u;m+=3){const x=m,v=m+1,M=m+2;r=yo(this,a,e,i,c,h,p,x,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function yb(t,e,n,i,r,s,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Xi,o),l===null)return null;_o.copy(o),_o.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_o);return c<n.near||c>n.far?null:{distance:c,point:_o.clone(),object:t}}function yo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,mo),t.getVertexPosition(l,go),t.getVertexPosition(c,xo);const h=yb(t,e,n,i,mo,go,xo,Lp);if(h){const p=new F;yn.getBarycoord(Lp,mo,go,xo,p),r&&(h.uv=yn.getInterpolatedAttribute(r,o,l,c,p,new Ze)),s&&(h.uv1=yn.getInterpolatedAttribute(s,o,l,c,p,new Ze)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,l,c,p,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};yn.getNormal(mo,go,xo,f.normal),h.face=f,h.barycoord=p}return h}class ks extends vi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(h,3)),this.setAttribute("uv",new $n(p,2));function _(S,m,u,x,v,M,N,C,T,R,X){const y=M/T,w=N/R,V=M/2,z=N/2,q=C/2,J=T+1,H=R+1;let W=0,k=0;const K=new F;for(let Q=0;Q<H;Q++){const re=Q*w-z;for(let Me=0;Me<J;Me++){const Ie=Me*y-V;K[S]=Ie*x,K[m]=re*v,K[u]=q,c.push(K.x,K.y,K.z),K[S]=0,K[m]=0,K[u]=C>0?1:-1,h.push(K.x,K.y,K.z),p.push(Me/T),p.push(1-Q/R),W+=1}}for(let Q=0;Q<R;Q++)for(let re=0;re<T;re++){const Me=f+re+J*Q,Ie=f+re+J*(Q+1),G=f+(re+1)+J*(Q+1),ee=f+(re+1)+J*Q;l.push(Me,Ie,ee),l.push(Ie,G,ee),k+=6}o.addGroup(g,k,X),g+=k,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const r in i)e[r]=i[r]}return e}function Sb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Hv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const bb={clone:ws,merge:Ht};var Mb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mb,this.fragmentShader=Eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Vv extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new F,Ip=new Ze,Up=new Ze;class _n extends Vv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,n){return this.getViewBounds(e,Ip,Up),n.subVectors(Up,Ip)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hr=-90,Vr=1;class wb extends Pt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Hr,Vr,e,n);r.layers=this.layers,this.add(r);const s=new _n(Hr,Vr,e,n);s.layers=this.layers,this.add(s);const a=new _n(Hr,Vr,e,n);a.layers=this.layers,this.add(a);const o=new _n(Hr,Vr,e,n);o.layers=this.layers,this.add(o);const l=new _n(Hr,Vr,e,n);l.layers=this.layers,this.add(l);const c=new _n(Hr,Vr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,f,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class jv extends nn{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tb extends wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ks(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Vi});s.uniforms.tEquirect.value=n;const a=new Gn(r,s),o=n.minFilter;return n.minFilter===gr&&(n.minFilter=Ln),new wb(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Qc=new F,Ab=new F,Cb=new Le;class lr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qc.subVectors(i,n).cross(Ab.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Cb.getNormalMatrix(e),r=this.coplanarPoint(Qc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Yl,So=new F;class qh{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,a=new lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],p=r[6],f=r[7],g=r[8],_=r[9],S=r[10],m=r[11],u=r[12],x=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,m-g,M-u).normalize(),i[1].setComponents(l+s,f+c,m+g,M+u).normalize(),i[2].setComponents(l+a,f+h,m+_,M+x).normalize(),i[3].setComponents(l-a,f-h,m-_,M-x).normalize(),i[4].setComponents(l-o,f-p,m-S,M-v).normalize(),n===ui)i[5].setComponents(l+o,f+p,m+S,M+v).normalize();else if(n===Al)i[5].setComponents(o,p,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(So.x=r.normal.x>0?e.max.x:e.min.x,So.y=r.normal.y>0?e.max.y:e.min.y,So.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Rb(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,h);else{p.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<p.length;g++){const _=p[f],S=p[g];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,p[f]=S)}p.length=f+1;for(let g=0,_=p.length;g<_;g++){const S=p[g];t.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Kl extends vi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,f=n/l,g=[],_=[],S=[],m=[];for(let u=0;u<h;u++){const x=u*f-a;for(let v=0;v<c;v++){const M=v*p-s;_.push(M,-x,0),S.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const v=x+c*u,M=x+c*(u+1),N=x+1+c*(u+1),C=x+1+c*u;g.push(v,M,C),g.push(M,N,C)}this.setIndex(g),this.setAttribute("position",new $n(_,3)),this.setAttribute("normal",new $n(S,3)),this.setAttribute("uv",new $n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ub=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",oM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,MM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$M=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,s1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,K1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Q1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Nb,alphahash_pars_fragment:kb,alphamap_fragment:Pb,alphamap_pars_fragment:Db,alphatest_fragment:Lb,alphatest_pars_fragment:Ib,aomap_fragment:Ub,aomap_pars_fragment:Fb,batching_pars_vertex:Bb,batching_vertex:Ob,begin_vertex:zb,beginnormal_vertex:Hb,bsdfs:Vb,iridescence_fragment:jb,bumpmap_pars_fragment:Gb,clipping_planes_fragment:Wb,clipping_planes_pars_fragment:Xb,clipping_planes_pars_vertex:qb,clipping_planes_vertex:$b,color_fragment:Yb,color_pars_fragment:Kb,color_pars_vertex:Qb,color_vertex:Zb,common:Jb,cube_uv_reflection_fragment:eM,defaultnormal_vertex:tM,displacementmap_pars_vertex:nM,displacementmap_vertex:iM,emissivemap_fragment:rM,emissivemap_pars_fragment:sM,colorspace_fragment:aM,colorspace_pars_fragment:oM,envmap_fragment:lM,envmap_common_pars_fragment:cM,envmap_pars_fragment:uM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:bM,envmap_vertex:hM,fog_vertex:fM,fog_pars_vertex:pM,fog_fragment:mM,fog_pars_fragment:gM,gradientmap_pars_fragment:xM,lightmap_pars_fragment:vM,lights_lambert_fragment:_M,lights_lambert_pars_fragment:yM,lights_pars_begin:SM,lights_toon_fragment:MM,lights_toon_pars_fragment:EM,lights_phong_fragment:wM,lights_phong_pars_fragment:TM,lights_physical_fragment:AM,lights_physical_pars_fragment:CM,lights_fragment_begin:RM,lights_fragment_maps:NM,lights_fragment_end:kM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:DM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:IM,map_fragment:UM,map_pars_fragment:FM,map_particle_fragment:BM,map_particle_pars_fragment:OM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:HM,morphinstance_vertex:VM,morphcolor_vertex:jM,morphnormal_vertex:GM,morphtarget_pars_vertex:WM,morphtarget_vertex:XM,normal_fragment_begin:qM,normal_fragment_maps:$M,normal_pars_fragment:YM,normal_pars_vertex:KM,normal_vertex:QM,normalmap_pars_fragment:ZM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:e1,clearcoat_pars_fragment:t1,iridescence_pars_fragment:n1,opaque_fragment:i1,packing:r1,premultiplied_alpha_fragment:s1,project_vertex:a1,dithering_fragment:o1,dithering_pars_fragment:l1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:d1,shadowmap_pars_vertex:h1,shadowmap_vertex:f1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:x1,skinnormal_vertex:v1,specularmap_fragment:_1,specularmap_pars_fragment:y1,tonemapping_fragment:S1,tonemapping_pars_fragment:b1,transmission_fragment:M1,transmission_pars_fragment:E1,uv_pars_fragment:w1,uv_pars_vertex:T1,uv_vertex:A1,worldpos_vertex:C1,background_vert:R1,background_frag:N1,backgroundCube_vert:k1,backgroundCube_frag:P1,cube_vert:D1,cube_frag:L1,depth_vert:I1,depth_frag:U1,distanceRGBA_vert:F1,distanceRGBA_frag:B1,equirect_vert:O1,equirect_frag:z1,linedashed_vert:H1,linedashed_frag:V1,meshbasic_vert:j1,meshbasic_frag:G1,meshlambert_vert:W1,meshlambert_frag:X1,meshmatcap_vert:q1,meshmatcap_frag:$1,meshnormal_vert:Y1,meshnormal_frag:K1,meshphong_vert:Q1,meshphong_frag:Z1,meshphysical_vert:J1,meshphysical_frag:eE,meshtoon_vert:tE,meshtoon_frag:nE,points_vert:iE,points_frag:rE,shadow_vert:sE,shadow_frag:aE,sprite_vert:oE,sprite_frag:lE},ae={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Vn={basic:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Ht([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Ht([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Ht([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Ht([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Ht([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Ht([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Ht([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Ht([ae.lights,ae.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Vn.physical={uniforms:Ht([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const bo={r:0,b:0,g:0},rr=new Yn,cE=new ht;function uE(t,e,n,i,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,h,p=null,f=0,g=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function S(x){let v=!1;const M=_(x);M===null?u(o,l):M&&M.isColor&&(u(M,1),v=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const M=_(v);M&&(M.isCubeTexture||M.mapping===ql)?(h===void 0&&(h=new Gn(new ks(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:ws(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),rr.copy(v.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cE.makeRotationFromEuler(rr)),h.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ot,(p!==M||f!==M.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,p=M,f=M.version,g=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Gn(new Kl(2,2),new qi({name:"BackgroundMaterial",uniforms:ws(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||f!==M.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,f=M.version,g=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,v){x.getRGB(bo,Hv(t)),i.buffers.color.setClear(bo.r,bo.g,bo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:S,addToRenderList:m}}function dE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,w,V,z,q){let J=!1;const H=p(z,V,w);s!==H&&(s=H,c(s.object)),J=g(y,z,V,q),J&&_(y,z,V,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(y,w,V,z),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function h(y){return t.deleteVertexArray(y)}function p(y,w,V){const z=V.wireframe===!0;let q=i[y.id];q===void 0&&(q={},i[y.id]=q);let J=q[w.id];J===void 0&&(J={},q[w.id]=J);let H=J[z];return H===void 0&&(H=f(l()),J[z]=H),H}function f(y){const w=[],V=[],z=[];for(let q=0;q<n;q++)w[q]=0,V[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:V,attributeDivisors:z,object:y,attributes:{},index:null}}function g(y,w,V,z){const q=s.attributes,J=w.attributes;let H=0;const W=V.getAttributes();for(const k in W)if(W[k].location>=0){const Q=q[k];let re=J[k];if(re===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function _(y,w,V,z){const q={},J=w.attributes;let H=0;const W=V.getAttributes();for(const k in W)if(W[k].location>=0){let Q=J[k];Q===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),q[k]=re,H++}s.attributes=q,s.attributesNum=H,s.index=z}function S(){const y=s.newAttributes;for(let w=0,V=y.length;w<V;w++)y[w]=0}function m(y){u(y,0)}function u(y,w){const V=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;V[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),q[y]!==w&&(t.vertexAttribDivisor(y,w),q[y]=w)}function x(){const y=s.newAttributes,w=s.enabledAttributes;for(let V=0,z=w.length;V<z;V++)w[V]!==y[V]&&(t.disableVertexAttribArray(V),w[V]=0)}function v(y,w,V,z,q,J,H){H===!0?t.vertexAttribIPointer(y,w,V,q,J):t.vertexAttribPointer(y,w,V,z,q,J)}function M(y,w,V,z){S();const q=z.attributes,J=V.getAttributes(),H=w.defaultAttributeValues;for(const W in J){const k=J[W];if(k.location>=0){let K=q[W];if(K===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const Q=K.normalized,re=K.itemSize,Me=e.get(K);if(Me===void 0)continue;const Ie=Me.buffer,G=Me.type,ee=Me.bytesPerElement,le=G===t.INT||G===t.UNSIGNED_INT||K.gpuType===zh;if(K.isInterleavedBufferAttribute){const ce=K.data,Ne=ce.stride,Ee=K.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<k.locationSize;Oe++)u(k.location+Oe,ce.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<k.locationSize;Oe++)m(k.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let Oe=0;Oe<k.locationSize;Oe++)v(k.location+Oe,re/k.locationSize,G,Q,Ne*ee,(Ee+re/k.locationSize*Oe)*ee,le)}else{if(K.isInstancedBufferAttribute){for(let ce=0;ce<k.locationSize;ce++)u(k.location+ce,K.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ce=0;ce<k.locationSize;ce++)m(k.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let ce=0;ce<k.locationSize;ce++)v(k.location+ce,re/k.locationSize,G,Q,re*ee,re/k.locationSize*ce*ee,le)}}else if(H!==void 0){const Q=H[W];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(k.location,Q);break;case 3:t.vertexAttrib3fv(k.location,Q);break;case 4:t.vertexAttrib4fv(k.location,Q);break;default:t.vertexAttrib1fv(k.location,Q)}}}}x()}function N(){R();for(const y in i){const w=i[y];for(const V in w){const z=w[V];for(const q in z)h(z[q].object),delete z[q];delete w[V]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const V in w){const z=w[V];for(const q in z)h(z[q].object),delete z[q];delete w[V]}delete i[y.id]}function T(y){for(const w in i){const V=i[w];if(V[y.id]===void 0)continue;const z=V[y.id];for(const q in z)h(z[q].object),delete z[q];delete V[y.id]}}function R(){X(),a=!0,s!==r&&(s=r,c(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:X,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:x}}function hE(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,p){p!==0&&(t.drawArraysInstanced(i,c,h,p),n.update(h,i,p))}function o(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let g=0;for(let _=0;_<p;_++)g+=h[_];n.update(g,i,1)}function l(c,h,p,f){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,p);let _=0;for(let S=0;S<p;S++)_+=h[S];for(let S=0;S<f.length;S++)n.update(_,i,f[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function fE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==In&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==gi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ci&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:N,maxSamples:C}}function pE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new lr,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const g=p.length!==0||f||i!==0||r;return r=f,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,g){const _=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,u=t.get(p);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{const x=s?0:i,v=x*4;let M=u.clippingState||null;l.value=M,M=h(_,f,v,g);for(let N=0;N!==v;++N)M[N]=n[N];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,g,_){const S=p!==null?p.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const u=g+S*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,M=g;v!==S;++v,M+=4)a.copy(p[v]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function mE(t){let e=new WeakMap;function n(a,o){return o===fd?a.mapping=Ss:o===pd&&(a.mapping=bs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===fd||o===pd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Tb(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Wv extends Vv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ns=4,Fp=[.125,.215,.35,.446,.526,.582],dr=20,Zc=new Wv,Bp=new qe;let Jc=null,eu=0,tu=0,nu=!1;const cr=(1+Math.sqrt(5))/2,jr=1/cr,Op=[new F(-cr,jr,0),new F(cr,jr,0),new F(-jr,0,cr),new F(jr,0,cr),new F(0,cr,-jr),new F(0,cr,jr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,eu,tu),this._renderer.xr.enabled=nu,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:La,format:In,colorSpace:Qi,depthBuffer:!1},r=Hp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gE(s)),this._blurMaterial=xE(s,e,n)}return r}_compileMaterial(e){const n=new Gn(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,i,r){const o=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(Bp),h.toneMapping=ji,h.autoClear=!1;const g=new Bv({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new Gn(new ks,g);let S=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,S=!0):(g.color.copy(Bp),S=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):x===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;Mo(r,x*v,u>2?v:0,v,v),h.setRenderTarget(r),S&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Gn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Mo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Op[(r-s-1)%Op.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Gn(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*dr-1),S=s/_,m=isFinite(s)?1+Math.floor(h*S):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const u=[];let x=0;for(let T=0;T<dr;++T){const R=T/S,X=Math.exp(-R*R/2);u.push(X),T===0?x+=X:T<m&&(x+=2*X)}for(let T=0;T<u.length;T++)u[T]=u[T]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const M=this._sizeLods[r],N=3*M*(r>v-ns?r-v+ns:0),C=4*(this._cubeSize-M);Mo(n,N,C,3*M,2*M),l.setRenderTarget(n),l.render(p,Zc)}}function gE(t){const e=[],n=[],i=[];let r=t;const s=t-ns+1+Fp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ns?l=Fp[a-t+ns-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,_=6,S=3,m=2,u=1,x=new Float32Array(S*_*g),v=new Float32Array(m*_*g),M=new Float32Array(u*_*g);for(let C=0;C<g;C++){const T=C%3*2/3-1,R=C>2?0:-1,X=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(X,S*_*C),v.set(f,m*_*C);const y=[C,C,C,C,C,C];M.set(y,u*_*C)}const N=new vi;N.setAttribute("position",new qn(x,S)),N.setAttribute("uv",new qn(v,m)),N.setAttribute("faceIndex",new qn(M,u)),e.push(N),r>ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hp(t,e,n){const i=new wr(t,e,n);return i.texture.mapping=ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xE(t,e,n){const i=new Float32Array(dr),r=new F(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Vp(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function jp(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function $h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===fd||l===pd,h=l===Ss||l===bs;if(c||h){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new zp(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const g=o.image;return c&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new zp(t)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function _E(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Qo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yE(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const S=f.morphAttributes[_];for(let m=0,u=S.length;m<u;m++)e.remove(S[m])}f.removeEventListener("dispose",a),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const _ in g){const S=g[_];for(let m=0,u=S.length;m<u;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(p){const f=[],g=p.index,_=p.attributes.position;let S=0;if(g!==null){const x=g.array;S=g.version;for(let v=0,M=x.length;v<M;v+=3){const N=x[v+0],C=x[v+1],T=x[v+2];f.push(N,C,C,T,T,N)}}else if(_!==void 0){const x=_.array;S=_.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const N=v+0,C=v+1,T=v+2;f.push(N,C,C,T,T,N)}}else return;const m=new(Pv(f)?zv:Ov)(f,1);m.version=S;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function h(p){const f=s.get(p);if(f){const g=p.index;g!==null&&f.version<g.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function SE(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,g){t.drawElements(i,g,s,f*a),n.update(g,i,1)}function c(f,g,_){_!==0&&(t.drawElementsInstanced(i,g,s,f*a,_),n.update(g,i,_))}function h(f,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,f,0,_);let m=0;for(let u=0;u<_;u++)m+=g[u];n.update(m,i,1)}function p(f,g,_,S){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,g[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,S,0,_);let u=0;for(let x=0;x<_;x++)u+=g[x];for(let x=0;x<S.length;x++)n.update(u,i,S[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function bE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ME(t,e,n){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let y=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var g=y;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),m===!0&&(M=3);let N=o.attributes.position.count*M,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const T=new Float32Array(N*C*4*p),R=new Lv(T,N,C,p);R.type=ci,R.needsUpdate=!0;const X=M*4;for(let w=0;w<p;w++){const V=u[w],z=x[w],q=v[w],J=N*C*4*w;for(let H=0;H<V.count;H++){const W=H*X;_===!0&&(r.fromBufferAttribute(V,H),T[J+W+0]=r.x,T[J+W+1]=r.y,T[J+W+2]=r.z,T[J+W+3]=0),S===!0&&(r.fromBufferAttribute(z,H),T[J+W+4]=r.x,T[J+W+5]=r.y,T[J+W+6]=r.z,T[J+W+7]=0),m===!0&&(r.fromBufferAttribute(q,H),T[J+W+8]=r.x,T[J+W+9]=r.y,T[J+W+10]=r.z,T[J+W+11]=q.itemSize===4?r.w:1)}}f={count:p,texture:R,size:new Ze(N,C)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function EE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Xv extends nn{constructor(e,n,i,r,s,a,o,l,c,h=us){if(h!==us&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===us&&(i=Er),i===void 0&&h===Es&&(i=Ms),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qv=new nn,Gp=new Xv(1,1),$v=new Lv,Yv=new ub,Kv=new jv,Wp=[],Xp=[],qp=new Float32Array(16),$p=new Float32Array(9),Yp=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wp[r];if(s===void 0&&(s=new Float32Array(r),Wp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ql(t,e){let n=Xp[e];n===void 0&&(n=new Int32Array(e),Xp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function RE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Yp.set(i),t.uniformMatrix2fv(this.addr,!1,Yp),wt(n,i)}}function NE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;$p.set(i),t.uniformMatrix3fv(this.addr,!1,$p),wt(n,i)}}function kE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;qp.set(i),t.uniformMatrix4fv(this.addr,!1,qp),wt(n,i)}}function PE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function UE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function zE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Gp.compareFunction=kv,s=Gp):s=qv,n.setTexture2D(e||s,r)}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Yv,r)}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Kv,r)}function jE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$v,r)}function GE(t){switch(t){case 5126:return wE;case 35664:return TE;case 35665:return AE;case 35666:return CE;case 35674:return RE;case 35675:return NE;case 35676:return kE;case 5124:case 35670:return PE;case 35667:case 35671:return DE;case 35668:case 35672:return LE;case 35669:case 35673:return IE;case 5125:return UE;case 36294:return FE;case 36295:return BE;case 36296:return OE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return jE}}function WE(t,e){t.uniform1fv(this.addr,e)}function XE(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function qE(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function $E(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function YE(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KE(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QE(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZE(t,e){t.uniform1iv(this.addr,e)}function JE(t,e){t.uniform2iv(this.addr,e)}function ew(t,e){t.uniform3iv(this.addr,e)}function tw(t,e){t.uniform4iv(this.addr,e)}function nw(t,e){t.uniform1uiv(this.addr,e)}function iw(t,e){t.uniform2uiv(this.addr,e)}function rw(t,e){t.uniform3uiv(this.addr,e)}function sw(t,e){t.uniform4uiv(this.addr,e)}function aw(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||qv,s[a])}function ow(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Yv,s[a])}function lw(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Kv,s[a])}function cw(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||$v,s[a])}function uw(t){switch(t){case 5126:return WE;case 35664:return XE;case 35665:return qE;case 35666:return $E;case 35674:return YE;case 35675:return KE;case 35676:return QE;case 5124:case 35670:return ZE;case 35667:case 35671:return JE;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return rw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}class dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=GE(n.type)}}class hw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uw(n.type)}}class fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const iu=/(\w+)(\])?(\[|\.)?/g;function Kp(t,e){t.seq.push(e),t.map[e.id]=e}function pw(t,e,n){const i=t.name,r=i.length;for(iu.lastIndex=0;;){const s=iu.exec(i),a=iu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Kp(n,c===void 0?new dw(o,t,e):new hw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new fw(o),Kp(n,p)),n=p}}}class Zo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);pw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mw=37297;let gw=0;function xw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function vw(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Tl&&n===wl?i="LinearDisplayP3ToLinearSRGB":e===wl&&n===Tl&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case $l:return[i,"LinearTransferOETF"];case Hn:case Xh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Zp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+xw(t.getShaderSource(e),a)}else return r}function _w(t,e){const n=vw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yw(t,e){let n;switch(e){case US:n="Linear";break;case FS:n="Reinhard";break;case BS:n="Cineon";break;case OS:n="ACESFilmic";break;case HS:n="AgX";break;case VS:n="Neutral";break;case zS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Eo=new F;function Sw(){Qe.getLuminanceCoefficients(Eo);const t=Eo.x.toFixed(4),e=Eo.y.toFixed(4),n=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Mw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ew(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Zs(t){return t!==""}function Jp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(t){return t.replace(ww,Aw)}const Tw=new Map;function Aw(t,e){let n=De[e];if(n===void 0){const i=Tw.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gd(n)}const Cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(t){return t.replace(Cw,Rw)}function Rw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===mS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function kw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case bs:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function Dw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vv:e="ENVMAP_BLENDING_MULTIPLY";break;case LS:e="ENVMAP_BLENDING_MIX";break;case IS:e="ENVMAP_BLENDING_ADD";break}return e}function Lw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Iw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Nw(n),c=kw(n),h=Pw(n),p=Dw(n),f=Lw(n),g=bw(n),_=Mw(s),S=r.createProgram();let m,u,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Zs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Zs).join(`
`),u.length>0&&(u+=`
`)):(m=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),u=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?De.tonemapping_pars_fragment:"",n.toneMapping!==ji?yw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,_w("linearToOutputTexel",n.outputColorSpace),Sw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Gd(a),a=Jp(a,n),a=em(a,n),o=Gd(o),o=Jp(o,n),o=em(o,n),a=tm(a),o=tm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=x+m+a,M=x+u+o,N=Qp(r,r.VERTEX_SHADER,v),C=Qp(r,r.FRAGMENT_SHADER,M);r.attachShader(S,N),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function T(w){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(S).trim(),z=r.getShaderInfoLog(N).trim(),q=r.getShaderInfoLog(C).trim();let J=!0,H=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,N,C);else{const W=Zp(r,N,"vertex"),k=Zp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+W+`
`+k)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||q==="")&&(H=!1);H&&(w.diagnostics={runnable:J,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:u}})}r.deleteShader(N),r.deleteShader(C),R=new Zo(r,S),X=Ew(r,S)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let X;this.getAttributes=function(){return X===void 0&&T(this),X};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,mw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=N,this.fragmentShader=C,this}let Uw=0;class Fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Bw(e),n.set(e,i)),i}}class Bw{constructor(e){this.id=Uw++,this.code=e,this.usedTimes=0}}function Ow(t,e,n,i,r,s,a){const o=new Uv,l=new Fw,c=new Set,h=[],p=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,g=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,w,V,z,q){const J=z.fog,H=q.geometry,W=y.isMeshStandardMaterial?z.environment:null,k=(y.isMeshStandardMaterial?n:e).get(y.envMap||W),K=k&&k.mapping===ql?k.image.height:null,Q=S[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Me=re!==void 0?re.length:0;let Ie=0;H.morphAttributes.position!==void 0&&(Ie=1),H.morphAttributes.normal!==void 0&&(Ie=2),H.morphAttributes.color!==void 0&&(Ie=3);let G,ee,le,ce;if(Q){const qt=Vn[Q];G=qt.vertexShader,ee=qt.fragmentShader}else G=y.vertexShader,ee=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const Ne=t.getRenderTarget(),Ee=q.isInstancedMesh===!0,Oe=q.isBatchedMesh===!0,tt=!!y.map,Ve=!!y.matcap,P=!!k,rn=!!y.aoMap,ze=!!y.lightMap,We=!!y.bumpMap,Ae=!!y.normalMap,rt=!!y.displacementMap,ke=!!y.emissiveMap,A=!!y.metalnessMap,b=!!y.roughnessMap,U=y.anisotropy>0,Y=y.clearcoat>0,te=y.dispersion>0,$=y.iridescence>0,ye=y.sheen>0,oe=y.transmission>0,me=U&&!!y.anisotropyMap,Xe=Y&&!!y.clearcoatMap,ie=Y&&!!y.clearcoatNormalMap,ge=Y&&!!y.clearcoatRoughnessMap,Ce=$&&!!y.iridescenceMap,Re=$&&!!y.iridescenceThicknessMap,xe=ye&&!!y.sheenColorMap,He=ye&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,nt=!!y.specularColorMap,D=!!y.specularIntensityMap,he=oe&&!!y.transmissionMap,j=oe&&!!y.thicknessMap,Z=!!y.gradientMap,ue=!!y.alphaMap,fe=y.alphaTest>0,je=!!y.alphaHash,_t=!!y.extensions;let Xt=ji;y.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Xt=t.toneMapping);const $e={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:ee,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Oe,batchingColor:Oe&&q._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&q.instanceColor!==null,instancingMorph:Ee&&q.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Qi,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:Ve,envMap:P,envMapMode:P&&k.mapping,envMapCubeUVHeight:K,aoMap:rn,lightMap:ze,bumpMap:We,normalMap:Ae,displacementMap:g&&rt,emissiveMap:ke,normalMapObjectSpace:Ae&&y.normalMapType===XS,normalMapTangentSpace:Ae&&y.normalMapType===Nv,metalnessMap:A,roughnessMap:b,anisotropy:U,anisotropyMap:me,clearcoat:Y,clearcoatMap:Xe,clearcoatNormalMap:ie,clearcoatRoughnessMap:ge,dispersion:te,iridescence:$,iridescenceMap:Ce,iridescenceThicknessMap:Re,sheen:ye,sheenColorMap:xe,sheenRoughnessMap:He,specularMap:Pe,specularColorMap:nt,specularIntensityMap:D,transmission:oe,transmissionMap:he,thicknessMap:j,gradientMap:Z,opaque:y.transparent===!1&&y.blending===cs&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:fe,alphaHash:je,combine:y.combine,mapUv:tt&&m(y.map.channel),aoMapUv:rn&&m(y.aoMap.channel),lightMapUv:ze&&m(y.lightMap.channel),bumpMapUv:We&&m(y.bumpMap.channel),normalMapUv:Ae&&m(y.normalMap.channel),displacementMapUv:rt&&m(y.displacementMap.channel),emissiveMapUv:ke&&m(y.emissiveMap.channel),metalnessMapUv:A&&m(y.metalnessMap.channel),roughnessMapUv:b&&m(y.roughnessMap.channel),anisotropyMapUv:me&&m(y.anisotropyMap.channel),clearcoatMapUv:Xe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(y.sheenRoughnessMap.channel),specularMapUv:Pe&&m(y.specularMap.channel),specularColorMapUv:nt&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:he&&m(y.transmissionMap.channel),thicknessMapUv:j&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ae||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!H.attributes.uv&&(tt||ue),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xt,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ai,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function x(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)w.push(V),w.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(v(w,y),M(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),y.push(o.mask)}function N(y){const w=S[y.type];let V;if(w){const z=Vn[w];V=bb.clone(z.uniforms)}else V=y.uniforms;return V}function C(y,w){let V;for(let z=0,q=h.length;z<q;z++){const J=h[z];if(J.cacheKey===w){V=J,++V.usedTimes;break}}return V===void 0&&(V=new Iw(t,w,y,s),h.push(V)),V}function T(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function X(){l.dispose()}return{getParameters:u,getProgramCacheKey:x,getUniforms:N,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:X}}function zw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Hw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,f,g,_,S,m){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:g,groupOrder:_,renderOrder:p.renderOrder,z:S,group:m},t[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=g,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=S,u.group=m),e++,u}function o(p,f,g,_,S,m){const u=a(p,f,g,_,S,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(p,f,g,_,S,m){const u=a(p,f,g,_,S,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(p,f){n.length>1&&n.sort(p||Hw),i.length>1&&i.sort(f||im),r.length>1&&r.sort(f||im)}function h(){for(let p=e,f=t.length;p<f;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Vw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new rm,t.set(i,[a])):r>=s.length?(a=new rm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function jw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new qe};break;case"SpotLight":n={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function Gw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Ww=0;function Xw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qw(t){const e=new jw,n=Gw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new ht,a=new ht;function o(c){let h=0,p=0,f=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let g=0,_=0,S=0,m=0,u=0,x=0,v=0,M=0,N=0,C=0,T=0;c.sort(Xw);for(let X=0,y=c.length;X<y;X++){const w=c[X],V=w.color,z=w.intensity,q=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=V.r*z,p+=V.g*z,f+=V.b*z;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],z);T++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const W=w.shadow,k=n.get(w);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,i.directionalShadow[g]=k,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=w.shadow.matrix,x++}i.directional[g]=H,g++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(V).multiplyScalar(z),H.distance=q,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[S]=H;const W=w.shadow;if(w.map&&(i.spotLightMap[N]=w.map,N++,W.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[S]=W.matrix,w.castShadow){const k=n.get(w);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,i.spotShadow[S]=k,i.spotShadowMap[S]=J,M++}S++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(V).multiplyScalar(z),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const W=w.shadow,k=n.get(w);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=w.shadow.matrix,v++}i.point[_]=H,_++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(z),H.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[u]=H,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==g||R.pointLength!==_||R.spotLength!==S||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==x||R.numPointShadows!==v||R.numSpotShadows!==M||R.numSpotMaps!==N||R.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+N-C,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,R.directionalLength=g,R.pointLength=_,R.spotLength=S,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=x,R.numPointShadows=v,R.numSpotShadows=M,R.numSpotMaps=N,R.numLightProbes=T,i.version=Ww++)}function l(c,h){let p=0,f=0,g=0,_=0,S=0;const m=h.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function sm(t){const e=new qw(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function $w(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new sm(t),e.set(r,[o])):s>=a.length?(o=new sm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class Yw extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kw extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jw(t,e,n){let i=new qh;const r=new Ze,s=new Ze,a=new gt,o=new Yw({depthPacking:WS}),l=new Kw,c={},h=n.maxTextureSize,p={[Xi]:tn,[tn]:Xi,[ai]:ai},f=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Qw,fragmentShader:Zw}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new vi;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Gn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xv;let u=this.type;this.render=function(C,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const X=t.getRenderTarget(),y=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Vi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=u!==ii&&this.type===ii,q=u===ii&&this.type!==ii;for(let J=0,H=C.length;J<H;J++){const W=C[J],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const K=k.getFrameExtents();if(r.multiply(K),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,k.mapSize.y=s.y)),k.map===null||z===!0||q===!0){const re=this.type!==ii?{minFilter:bn,magFilter:bn}:{};k.map!==null&&k.map.dispose(),k.map=new wr(r.x,r.y,re),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const Q=k.getViewportCount();for(let re=0;re<Q;re++){const Me=k.getViewport(re);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),V.viewport(a),k.updateMatrices(W,re),i=k.getFrustum(),M(T,R,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===ii&&x(k,R),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(X,y,w)};function x(C,T){const R=e.update(S);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,R,f,S,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,R,g,S,null)}function v(C,T,R,X){let y=null;const w=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)y=w;else if(y=R.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=y.uuid,z=T.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let J=q[z];J===void 0&&(J=y.clone(),q[z]=J,T.addEventListener("dispose",N)),y=J}if(y.visible=T.visible,y.wireframe=T.wireframe,X===ii?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:p[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=R}return y}function M(C,T,R,X,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const z=e.update(C),q=C.material;if(Array.isArray(q)){const J=z.groups;for(let H=0,W=J.length;H<W;H++){const k=J[H],K=q[k.materialIndex];if(K&&K.visible){const Q=v(C,K,X,y);C.onBeforeShadow(t,C,T,R,z,Q,k),t.renderBufferDirect(R,null,z,Q,C,k),C.onAfterShadow(t,C,T,R,z,Q,k)}}}else if(q.visible){const J=v(C,q,X,y);C.onBeforeShadow(t,C,T,R,z,J,null),t.renderBufferDirect(R,null,z,J,C,null),C.onAfterShadow(t,C,T,R,z,J,null)}}const V=C.children;for(let z=0,q=V.length;z<q;z++)M(V[z],T,R,X,y)}function N(C){C.target.removeEventListener("dispose",N);for(const R in c){const X=c[R],y=C.target.uuid;y in X&&(X[y].dispose(),delete X[y])}}}const eT={[ad]:od,[ld]:dd,[cd]:hd,[ys]:ud,[od]:ad,[dd]:ld,[hd]:cd,[ud]:ys};function tT(t){function e(){let D=!1;const he=new gt;let j=null;const Z=new gt(0,0,0,0);return{setMask:function(ue){j!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),j=ue)},setLocked:function(ue){D=ue},setClear:function(ue,fe,je,_t,Xt){Xt===!0&&(ue*=_t,fe*=_t,je*=_t),he.set(ue,fe,je,_t),Z.equals(he)===!1&&(t.clearColor(ue,fe,je,_t),Z.copy(he))},reset:function(){D=!1,j=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,j=null,Z=null,ue=null;return{setReversed:function(fe){he=fe},setTest:function(fe){fe?le(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(fe){j!==fe&&!D&&(t.depthMask(fe),j=fe)},setFunc:function(fe){if(he&&(fe=eT[fe]),Z!==fe){switch(fe){case ad:t.depthFunc(t.NEVER);break;case od:t.depthFunc(t.ALWAYS);break;case ld:t.depthFunc(t.LESS);break;case ys:t.depthFunc(t.LEQUAL);break;case cd:t.depthFunc(t.EQUAL);break;case ud:t.depthFunc(t.GEQUAL);break;case dd:t.depthFunc(t.GREATER);break;case hd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=fe}},setLocked:function(fe){D=fe},setClear:function(fe){ue!==fe&&(t.clearDepth(fe),ue=fe)},reset:function(){D=!1,j=null,Z=null,ue=null}}}function i(){let D=!1,he=null,j=null,Z=null,ue=null,fe=null,je=null,_t=null,Xt=null;return{setTest:function($e){D||($e?le(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function($e){he!==$e&&!D&&(t.stencilMask($e),he=$e)},setFunc:function($e,qt,Qn){(j!==$e||Z!==qt||ue!==Qn)&&(t.stencilFunc($e,qt,Qn),j=$e,Z=qt,ue=Qn)},setOp:function($e,qt,Qn){(fe!==$e||je!==qt||_t!==Qn)&&(t.stencilOp($e,qt,Qn),fe=$e,je=qt,_t=Qn)},setLocked:function($e){D=$e},setClear:function($e){Xt!==$e&&(t.clearStencil($e),Xt=$e)},reset:function(){D=!1,he=null,j=null,Z=null,ue=null,fe=null,je=null,_t=null,Xt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},p=new WeakMap,f=[],g=null,_=!1,S=null,m=null,u=null,x=null,v=null,M=null,N=null,C=new qe(0,0,0),T=0,R=!1,X=null,y=null,w=null,V=null,z=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,H=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=H>=1):W.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=H>=2);let k=null,K={};const Q=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Me=new gt().fromArray(Q),Ie=new gt().fromArray(re);function G(D,he,j,Z){const ue=new Uint8Array(4),fe=t.createTexture();t.bindTexture(D,fe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<j;je++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(he+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return fe}const ee={};ee[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(t.DEPTH_TEST),s.setFunc(ys),ze(!1),We(fp),le(t.CULL_FACE),P(Vi);function le(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ce(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Ne(D,he){return h[D]!==he?(t.bindFramebuffer(D,he),h[D]=he,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=he),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Ee(D,he){let j=f,Z=!1;if(D){j=p.get(he),j===void 0&&(j=[],p.set(he,j));const ue=D.textures;if(j.length!==ue.length||j[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,je=ue.length;fe<je;fe++)j[fe]=t.COLOR_ATTACHMENT0+fe;j.length=ue.length,Z=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,Z=!0);Z&&t.drawBuffers(j)}function Oe(D){return g!==D?(t.useProgram(D),g=D,!0):!1}const tt={[ur]:t.FUNC_ADD,[xS]:t.FUNC_SUBTRACT,[vS]:t.FUNC_REVERSE_SUBTRACT};tt[_S]=t.MIN,tt[yS]=t.MAX;const Ve={[SS]:t.ZERO,[bS]:t.ONE,[MS]:t.SRC_COLOR,[rd]:t.SRC_ALPHA,[RS]:t.SRC_ALPHA_SATURATE,[AS]:t.DST_COLOR,[wS]:t.DST_ALPHA,[ES]:t.ONE_MINUS_SRC_COLOR,[sd]:t.ONE_MINUS_SRC_ALPHA,[CS]:t.ONE_MINUS_DST_COLOR,[TS]:t.ONE_MINUS_DST_ALPHA,[NS]:t.CONSTANT_COLOR,[kS]:t.ONE_MINUS_CONSTANT_COLOR,[PS]:t.CONSTANT_ALPHA,[DS]:t.ONE_MINUS_CONSTANT_ALPHA};function P(D,he,j,Z,ue,fe,je,_t,Xt,$e){if(D===Vi){_===!0&&(ce(t.BLEND),_=!1);return}if(_===!1&&(le(t.BLEND),_=!0),D!==gS){if(D!==S||$e!==R){if((m!==ur||v!==ur)&&(t.blendEquation(t.FUNC_ADD),m=ur,v=ur),$e)switch(D){case cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pp:t.blendFunc(t.ONE,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,x=null,M=null,N=null,C.set(0,0,0),T=0,S=D,R=$e}return}ue=ue||he,fe=fe||j,je=je||Z,(he!==m||ue!==v)&&(t.blendEquationSeparate(tt[he],tt[ue]),m=he,v=ue),(j!==u||Z!==x||fe!==M||je!==N)&&(t.blendFuncSeparate(Ve[j],Ve[Z],Ve[fe],Ve[je]),u=j,x=Z,M=fe,N=je),(_t.equals(C)===!1||Xt!==T)&&(t.blendColor(_t.r,_t.g,_t.b,Xt),C.copy(_t),T=Xt),S=D,R=!1}function rn(D,he){D.side===ai?ce(t.CULL_FACE):le(t.CULL_FACE);let j=D.side===tn;he&&(j=!j),ze(j),D.blending===cs&&D.transparent===!1?P(Vi):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(D){X!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),X=D)}function We(D){D!==fS?(le(t.CULL_FACE),D!==y&&(D===fp?t.cullFace(t.BACK):D===pS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),y=D}function Ae(D){D!==w&&(J&&t.lineWidth(D),w=D)}function rt(D,he,j){D?(le(t.POLYGON_OFFSET_FILL),(V!==he||z!==j)&&(t.polygonOffset(he,j),V=he,z=j)):ce(t.POLYGON_OFFSET_FILL)}function ke(D){D?le(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function A(D){D===void 0&&(D=t.TEXTURE0+q-1),k!==D&&(t.activeTexture(D),k=D)}function b(D,he,j){j===void 0&&(k===null?j=t.TEXTURE0+q-1:j=k);let Z=K[j];Z===void 0&&(Z={type:void 0,texture:void 0},K[j]=Z),(Z.type!==D||Z.texture!==he)&&(k!==j&&(t.activeTexture(j),k=j),t.bindTexture(D,he||ee[D]),Z.type=D,Z.texture=he)}function U(){const D=K[k];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){Me.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Me.copy(D))}function xe(D){Ie.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ie.copy(D))}function He(D,he){let j=l.get(he);j===void 0&&(j=new WeakMap,l.set(he,j));let Z=j.get(D);Z===void 0&&(Z=t.getUniformBlockIndex(he,D.name),j.set(D,Z))}function Pe(D,he){const Z=l.get(he).get(D);o.get(he)!==Z&&(t.uniformBlockBinding(he,Z,D.__bindingPointIndex),o.set(he,Z))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},k=null,K={},h={},p=new WeakMap,f=[],g=null,_=!1,S=null,m=null,u=null,x=null,v=null,M=null,N=null,C=new qe(0,0,0),T=0,R=!1,X=null,y=null,w=null,V=null,z=null,Me.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:le,disable:ce,bindFramebuffer:Ne,drawBuffers:Ee,useProgram:Oe,setBlending:P,setMaterial:rn,setFlipSided:ze,setCullFace:We,setLineWidth:Ae,setPolygonOffset:rt,setScissorTest:ke,activeTexture:A,bindTexture:b,unbindTexture:U,compressedTexImage2D:Y,compressedTexImage3D:te,texImage2D:ge,texImage3D:Ce,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Xe,texStorage3D:ie,texSubImage2D:$,texSubImage3D:ye,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:Re,viewport:xe,reset:nt}}function am(t,e,n,i){const r=nT(i);switch(n){case Mv:return t*e;case wv:return t*e;case Tv:return t*e*2;case Av:return t*e/r.components*r.byteLength;case jh:return t*e/r.components*r.byteLength;case Cv:return t*e*2/r.components*r.byteLength;case Gh:return t*e*2/r.components*r.byteLength;case Ev:return t*e*3/r.components*r.byteLength;case In:return t*e*4/r.components*r.byteLength;case Wh:return t*e*4/r.components*r.byteLength;case Wo:case Xo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qo:case $o:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:case yd:return Math.max(t,16)*Math.max(e,8)/4;case xd:case _d:return Math.max(t,8)*Math.max(e,8)/2;case Sd:case bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Bd:case Od:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Rv:case zd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nT(t){switch(t){case gi:case yv:return{byteLength:1,components:1};case Ca:case Sv:case La:return{byteLength:2,components:1};case Hh:case Vh:return{byteLength:2,components:4};case Er:case zh:case ci:return{byteLength:4,components:1};case bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function iT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,h=new WeakMap;let p;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return g?new OffscreenCanvas(A,b):Cl("canvas")}function S(A,b,U){let Y=1;const te=ke(A);if((te.width>U||te.height>U)&&(Y=U/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(Y*te.width),ye=Math.floor(Y*te.height);p===void 0&&(p=_($,ye));const oe=b?_($,ye):p;return oe.width=$,oe.height=ye,oe.getContext("2d").drawImage(A,0,0,$,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+ye+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==bn&&A.minFilter!==Ln}function u(A){t.generateMipmap(A)}function x(A,b,U,Y,te=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=b;if(b===t.RED&&(U===t.FLOAT&&($=t.R32F),U===t.HALF_FLOAT&&($=t.R16F),U===t.UNSIGNED_BYTE&&($=t.R8)),b===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.R8UI),U===t.UNSIGNED_SHORT&&($=t.R16UI),U===t.UNSIGNED_INT&&($=t.R32UI),U===t.BYTE&&($=t.R8I),U===t.SHORT&&($=t.R16I),U===t.INT&&($=t.R32I)),b===t.RG&&(U===t.FLOAT&&($=t.RG32F),U===t.HALF_FLOAT&&($=t.RG16F),U===t.UNSIGNED_BYTE&&($=t.RG8)),b===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RG8UI),U===t.UNSIGNED_SHORT&&($=t.RG16UI),U===t.UNSIGNED_INT&&($=t.RG32UI),U===t.BYTE&&($=t.RG8I),U===t.SHORT&&($=t.RG16I),U===t.INT&&($=t.RG32I)),b===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RGB8UI),U===t.UNSIGNED_SHORT&&($=t.RGB16UI),U===t.UNSIGNED_INT&&($=t.RGB32UI),U===t.BYTE&&($=t.RGB8I),U===t.SHORT&&($=t.RGB16I),U===t.INT&&($=t.RGB32I)),b===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RGBA8UI),U===t.UNSIGNED_SHORT&&($=t.RGBA16UI),U===t.UNSIGNED_INT&&($=t.RGBA32UI),U===t.BYTE&&($=t.RGBA8I),U===t.SHORT&&($=t.RGBA16I),U===t.INT&&($=t.RGBA32I)),b===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),b===t.RGBA){const ye=te?El:Qe.getTransfer(Y);U===t.FLOAT&&($=t.RGBA32F),U===t.HALF_FLOAT&&($=t.RGBA16F),U===t.UNSIGNED_BYTE&&($=ye===ot?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(A,b){let U;return A?b===null||b===Er||b===Ms?U=t.DEPTH24_STENCIL8:b===ci?U=t.DEPTH32F_STENCIL8:b===Ca&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Er||b===Ms?U=t.DEPTH_COMPONENT24:b===ci?U=t.DEPTH_COMPONENT32F:b===Ca&&(U=t.DEPTH_COMPONENT16),U}function M(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==bn&&A.minFilter!==Ln?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function N(A){const b=A.target;b.removeEventListener("dispose",N),T(b),b.isVideoTexture&&h.delete(b)}function C(A){const b=A.target;b.removeEventListener("dispose",C),X(b)}function T(A){const b=i.get(A);if(b.__webglInit===void 0)return;const U=A.source,Y=f.get(U);if(Y){const te=Y[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(A),Object.keys(Y).length===0&&f.delete(U)}i.remove(A)}function R(A){const b=i.get(A);t.deleteTexture(b.__webglTexture);const U=A.source,Y=f.get(U);delete Y[b.__cacheKey],a.memory.textures--}function X(A){const b=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let te=0;te<b.__webglFramebuffer[Y].length;te++)t.deleteFramebuffer(b.__webglFramebuffer[Y][te]);else t.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)t.deleteFramebuffer(b.__webglFramebuffer[Y]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const U=A.textures;for(let Y=0,te=U.length;Y<te;Y++){const $=i.get(U[Y]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(U[Y])}i.remove(A)}let y=0;function w(){y=0}function V(){const A=y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),y+=1,A}function z(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function q(A,b){const U=i.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(U,A,b);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+b)}function J(A,b){const U=i.get(A);if(A.version>0&&U.__version!==A.version){Ie(U,A,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+b)}function H(A,b){const U=i.get(A);if(A.version>0&&U.__version!==A.version){Ie(U,A,b);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+b)}function W(A,b){const U=i.get(A);if(A.version>0&&U.__version!==A.version){G(U,A,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+b)}const k={[md]:t.REPEAT,[mr]:t.CLAMP_TO_EDGE,[gd]:t.MIRRORED_REPEAT},K={[bn]:t.NEAREST,[jS]:t.NEAREST_MIPMAP_NEAREST,[io]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[Rc]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},Q={[qS]:t.NEVER,[JS]:t.ALWAYS,[$S]:t.LESS,[kv]:t.LEQUAL,[YS]:t.EQUAL,[ZS]:t.GEQUAL,[KS]:t.GREATER,[QS]:t.NOTEQUAL};function re(A,b){if(b.type===ci&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ln||b.magFilter===Rc||b.magFilter===io||b.magFilter===gr||b.minFilter===Ln||b.minFilter===Rc||b.minFilter===io||b.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,k[b.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,k[b.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,k[b.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,K[b.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,K[b.minFilter]),b.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bn||b.minFilter!==io&&b.minFilter!==gr||b.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Me(A,b){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",N));const Y=b.source;let te=f.get(Y);te===void 0&&(te={},f.set(Y,te));const $=z(b);if($!==A.__cacheKey){te[$]===void 0&&(te[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),te[$].usedTimes++;const ye=te[A.__cacheKey];ye!==void 0&&(te[A.__cacheKey].usedTimes--,ye.usedTimes===0&&R(b)),A.__cacheKey=$,A.__webglTexture=te[$].texture}return U}function Ie(A,b,U){let Y=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=t.TEXTURE_3D);const te=Me(A,b),$=b.source;n.bindTexture(Y,A.__webglTexture,t.TEXTURE0+U);const ye=i.get($);if($.version!==ye.__version||te===!0){n.activeTexture(t.TEXTURE0+U);const oe=Qe.getPrimaries(Qe.workingColorSpace),me=b.colorSpace===ki?null:Qe.getPrimaries(b.colorSpace),Xe=b.colorSpace===ki||oe===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ie=S(b.image,!1,r.maxTextureSize);ie=rt(b,ie);const ge=s.convert(b.format,b.colorSpace),Ce=s.convert(b.type);let Re=x(b.internalFormat,ge,Ce,b.colorSpace,b.isVideoTexture);re(Y,b);let xe;const He=b.mipmaps,Pe=b.isVideoTexture!==!0,nt=ye.__version===void 0||te===!0,D=$.dataReady,he=M(b,ie);if(b.isDepthTexture)Re=v(b.format===Es,b.type),nt&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,Re,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,ge,Ce,null));else if(b.isDataTexture)if(He.length>0){Pe&&nt&&n.texStorage2D(t.TEXTURE_2D,he,Re,He[0].width,He[0].height);for(let j=0,Z=He.length;j<Z;j++)xe=He[j],Pe?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,ge,Ce,xe.data):n.texImage2D(t.TEXTURE_2D,j,Re,xe.width,xe.height,0,ge,Ce,xe.data);b.generateMipmaps=!1}else Pe?(nt&&n.texStorage2D(t.TEXTURE_2D,he,Re,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Ce,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,ge,Ce,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Re,He[0].width,He[0].height,ie.depth);for(let j=0,Z=He.length;j<Z;j++)if(xe=He[j],b.format!==In)if(ge!==null)if(Pe){if(D)if(b.layerUpdates.size>0){const ue=am(xe.width,xe.height,b.format,b.type);for(const fe of b.layerUpdates){const je=xe.data.subarray(fe*ue/xe.data.BYTES_PER_ELEMENT,(fe+1)*ue/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,fe,xe.width,xe.height,1,ge,je,0,0)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,ie.depth,ge,xe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Re,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,ie.depth,ge,Ce,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Re,xe.width,xe.height,ie.depth,0,ge,Ce,xe.data)}else{Pe&&nt&&n.texStorage2D(t.TEXTURE_2D,he,Re,He[0].width,He[0].height);for(let j=0,Z=He.length;j<Z;j++)xe=He[j],b.format!==In?ge!==null?Pe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,ge,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Re,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,ge,Ce,xe.data):n.texImage2D(t.TEXTURE_2D,j,Re,xe.width,xe.height,0,ge,Ce,xe.data)}else if(b.isDataArrayTexture)if(Pe){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Re,ie.width,ie.height,ie.depth),D)if(b.layerUpdates.size>0){const j=am(ie.width,ie.height,b.format,b.type);for(const Z of b.layerUpdates){const ue=ie.data.subarray(Z*j/ie.data.BYTES_PER_ELEMENT,(Z+1)*j/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ge,Ce,ue)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ce,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,ge,Ce,ie.data);else if(b.isData3DTexture)Pe?(nt&&n.texStorage3D(t.TEXTURE_3D,he,Re,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ce,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,ge,Ce,ie.data);else if(b.isFramebufferTexture){if(nt)if(Pe)n.texStorage2D(t.TEXTURE_2D,he,Re,ie.width,ie.height);else{let j=ie.width,Z=ie.height;for(let ue=0;ue<he;ue++)n.texImage2D(t.TEXTURE_2D,ue,Re,j,Z,0,ge,Ce,null),j>>=1,Z>>=1}}else if(He.length>0){if(Pe&&nt){const j=ke(He[0]);n.texStorage2D(t.TEXTURE_2D,he,Re,j.width,j.height)}for(let j=0,Z=He.length;j<Z;j++)xe=He[j],Pe?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ge,Ce,xe):n.texImage2D(t.TEXTURE_2D,j,Re,ge,Ce,xe);b.generateMipmaps=!1}else if(Pe){if(nt){const j=ke(ie);n.texStorage2D(t.TEXTURE_2D,he,Re,j.width,j.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ce,ie)}else n.texImage2D(t.TEXTURE_2D,0,Re,ge,Ce,ie);m(b)&&u(Y),ye.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function G(A,b,U){if(b.image.length!==6)return;const Y=Me(A,b),te=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+U);const $=i.get(te);if(te.version!==$.__version||Y===!0){n.activeTexture(t.TEXTURE0+U);const ye=Qe.getPrimaries(Qe.workingColorSpace),oe=b.colorSpace===ki?null:Qe.getPrimaries(b.colorSpace),me=b.colorSpace===ki||ye===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Xe=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!Xe&&!ie?ge[Z]=S(b.image[Z],!0,r.maxCubemapSize):ge[Z]=ie?b.image[Z].image:b.image[Z],ge[Z]=rt(b,ge[Z]);const Ce=ge[0],Re=s.convert(b.format,b.colorSpace),xe=s.convert(b.type),He=x(b.internalFormat,Re,xe,b.colorSpace),Pe=b.isVideoTexture!==!0,nt=$.__version===void 0||Y===!0,D=te.dataReady;let he=M(b,Ce);re(t.TEXTURE_CUBE_MAP,b);let j;if(Xe){Pe&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,He,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){j=ge[Z].mipmaps;for(let ue=0;ue<j.length;ue++){const fe=j[ue];b.format!==In?Re!==null?Pe?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,fe.width,fe.height,Re,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,He,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,fe.width,fe.height,Re,xe,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,He,fe.width,fe.height,0,Re,xe,fe.data)}}}else{if(j=b.mipmaps,Pe&&nt){j.length>0&&he++;const Z=ke(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){Pe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Re,xe,ge[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,ge[Z].width,ge[Z].height,0,Re,xe,ge[Z].data);for(let ue=0;ue<j.length;ue++){const je=j[ue].image[Z].image;Pe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,je.width,je.height,Re,xe,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,He,je.width,je.height,0,Re,xe,je.data)}}else{Pe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,xe,ge[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,Re,xe,ge[Z]);for(let ue=0;ue<j.length;ue++){const fe=j[ue];Pe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Re,xe,fe.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,He,Re,xe,fe.image[Z])}}}m(b)&&u(t.TEXTURE_CUBE_MAP),$.__version=te.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ee(A,b,U,Y,te,$){const ye=s.convert(U.format,U.colorSpace),oe=s.convert(U.type),me=x(U.internalFormat,ye,oe,U.colorSpace);if(!i.get(b).__hasExternalTextures){const ie=Math.max(1,b.width>>$),ge=Math.max(1,b.height>>$);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,$,me,ie,ge,b.depth,0,ye,oe,null):n.texImage2D(te,$,me,ie,ge,0,ye,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),We(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,te,i.get(U).__webglTexture,0,ze(b)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,te,i.get(U).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(A,b,U){if(t.bindRenderbuffer(t.RENDERBUFFER,A),b.depthBuffer){const Y=b.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,$=v(b.stencilBuffer,te),ye=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=ze(b);We(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,$,b.width,b.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,$,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,$,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,A)}else{const Y=b.textures;for(let te=0;te<Y.length;te++){const $=Y[te],ye=s.convert($.format,$.colorSpace),oe=s.convert($.type),me=x($.internalFormat,ye,oe,$.colorSpace),Xe=ze(b);U&&We(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,me,b.width,b.height):We(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,me,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,me,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const Y=i.get(b.depthTexture).__webglTexture,te=ze(b);if(b.depthTexture.format===us)We(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(b.depthTexture.format===Es)We(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const b=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=Y}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ce(b.__webglFramebuffer,A)}else if(U){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=t.createRenderbuffer(),le(b.__webglDepthbuffer[Y],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),le(b.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(A,b,U){const Y=i.get(A);b!==void 0&&ee(Y.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ne(A)}function Oe(A){const b=A.texture,U=i.get(A),Y=i.get(b);A.addEventListener("dispose",C);const te=A.textures,$=A.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=b.version,a.memory.textures++),$){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let me=0;me<b.mipmaps.length;me++)U.__webglFramebuffer[oe][me]=t.createFramebuffer()}else U.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<b.mipmaps.length;oe++)U.__webglFramebuffer[oe]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ye)for(let oe=0,me=te.length;oe<me;oe++){const Xe=i.get(te[oe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&We(A)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let oe=0;oe<te.length;oe++){const me=te[oe];U.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);const Xe=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=x(me.internalFormat,Xe,ie,me.colorSpace,A.isXRRenderTarget===!0),Ce=ze(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,U.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),le(U.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),re(t.TEXTURE_CUBE_MAP,b);for(let oe=0;oe<6;oe++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ee(U.__webglFramebuffer[oe][me],A,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else ee(U.__webglFramebuffer[oe],A,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(b)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let oe=0,me=te.length;oe<me;oe++){const Xe=te[oe],ie=i.get(Xe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),re(t.TEXTURE_2D,Xe),ee(U.__webglFramebuffer,A,Xe,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),m(Xe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,Y.__webglTexture),re(oe,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ee(U.__webglFramebuffer[me],A,b,t.COLOR_ATTACHMENT0,oe,me);else ee(U.__webglFramebuffer,A,b,t.COLOR_ATTACHMENT0,oe,0);m(b)&&u(oe),n.unbindTexture()}A.depthBuffer&&Ne(A)}function tt(A){const b=A.textures;for(let U=0,Y=b.length;U<Y;U++){const te=b[U];if(m(te)){const $=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(te).__webglTexture;n.bindTexture($,ye),u($),n.unbindTexture()}}}const Ve=[],P=[];function rn(A){if(A.samples>0){if(We(A)===!1){const b=A.textures,U=A.width,Y=A.height;let te=t.COLOR_BUFFER_BIT;const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(A),oe=b.length>1;if(oe)for(let me=0;me<b.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let me=0;me<b.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const Xe=i.get(b[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,U,Y,0,0,U,Y,te,t.NEAREST),l===!0&&(Ve.length=0,P.length=0,Ve.push(t.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ve.push($),P.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let me=0;me<b.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const Xe=i.get(b[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function ze(A){return Math.min(r.maxSamples,A.samples)}function We(A){const b=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ae(A){const b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function rt(A,b){const U=A.colorSpace,Y=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Qi&&U!==ki&&(Qe.getTransfer(U)===ot?(Y!==In||te!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}function ke(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=w,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=W,this.rebindTextures=Ee,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=We}function rT(t,e){function n(i,r=ki){let s;const a=Qe.getTransfer(r);if(i===gi)return t.UNSIGNED_BYTE;if(i===Hh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===bv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===yv)return t.BYTE;if(i===Sv)return t.SHORT;if(i===Ca)return t.UNSIGNED_SHORT;if(i===zh)return t.INT;if(i===Er)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===La)return t.HALF_FLOAT;if(i===Mv)return t.ALPHA;if(i===Ev)return t.RGB;if(i===In)return t.RGBA;if(i===wv)return t.LUMINANCE;if(i===Tv)return t.LUMINANCE_ALPHA;if(i===us)return t.DEPTH_COMPONENT;if(i===Es)return t.DEPTH_STENCIL;if(i===Av)return t.RED;if(i===jh)return t.RED_INTEGER;if(i===Cv)return t.RG;if(i===Gh)return t.RG_INTEGER;if(i===Wh)return t.RGBA_INTEGER;if(i===Wo||i===Xo||i===qo||i===$o)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===vd||i===_d||i===yd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sd||i===bd||i===Md)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sd||i===bd)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Md)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ed||i===wd||i===Td||i===Ad||i===Cd||i===Rd||i===Nd||i===kd||i===Pd||i===Dd||i===Ld||i===Id||i===Ud||i===Fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ed)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ad)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ld)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Id)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ud)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===Bd||i===Od)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yo)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Od)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rv||i===zd||i===Hd||i===Vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class sT extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wo extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aT={type:"move"};class ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(aT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const oT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:oT,fragmentShader:lT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gn(new Kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uT extends Rs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,g=null,_=null;const S=new cT,m=n.getContextAttributes();let u=null,x=null;const v=[],M=[],N=new Ze;let C=null;const T=new _n;T.layers.enable(1),T.viewport=new gt;const R=new _n;R.layers.enable(2),R.viewport=new gt;const X=[T,R],y=new sT;y.layers.enable(1),y.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ee=v[G];return ee===void 0&&(ee=new ru,v[G]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(G){let ee=v[G];return ee===void 0&&(ee=new ru,v[G]=ee),ee.getGripSpace()},this.getHand=function(G){let ee=v[G];return ee===void 0&&(ee=new ru,v[G]=ee),ee.getHandSpace()};function z(G){const ee=M.indexOf(G.inputSource);if(ee===-1)return;const le=v[ee];le!==void 0&&(le.update(G.inputSource,G.frame,c||a),le.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",J);for(let G=0;G<v.length;G++){const ee=M[G];ee!==null&&(M[G]=null,v[G].disconnect(ee))}w=null,V=null,S.reset(),e.setRenderTarget(u),g=null,f=null,p=null,r=null,x=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new wr(g.framebufferWidth,g.framebufferHeight,{format:In,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,le=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=m.stencil?Es:us,le=m.stencil?Ms:Er);const Ne={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new wr(f.textureWidth,f.textureHeight,{format:In,type:gi,depthTexture:new Xv(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(G){for(let ee=0;ee<G.removed.length;ee++){const le=G.removed[ee],ce=M.indexOf(le);ce>=0&&(M[ce]=null,v[ce].disconnect(le))}for(let ee=0;ee<G.added.length;ee++){const le=G.added[ee];let ce=M.indexOf(le);if(ce===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=M.length){M.push(le),ce=Ee;break}else if(M[Ee]===null){M[Ee]=le,ce=Ee;break}if(ce===-1)break}const Ne=v[ce];Ne&&Ne.connect(le)}}const H=new F,W=new F;function k(G,ee,le){H.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const ce=H.distanceTo(W),Ne=ee.projectionMatrix.elements,Ee=le.projectionMatrix.elements,Oe=Ne[14]/(Ne[10]-1),tt=Ne[14]/(Ne[10]+1),Ve=(Ne[9]+1)/Ne[5],P=(Ne[9]-1)/Ne[5],rn=(Ne[8]-1)/Ne[0],ze=(Ee[8]+1)/Ee[0],We=Oe*rn,Ae=Oe*ze,rt=ce/(-rn+ze),ke=rt*-rn;if(ee.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ke),G.translateZ(rt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ne[10]===-1)G.projectionMatrix.copy(ee.projectionMatrix),G.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const A=Oe+rt,b=tt+rt,U=We-ke,Y=Ae+(ce-ke),te=Ve*tt/b*A,$=P*tt/b*A;G.projectionMatrix.makePerspective(U,Y,te,$,A,b),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function K(G,ee){ee===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ee.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ee=G.near,le=G.far;S.texture!==null&&(S.depthNear>0&&(ee=S.depthNear),S.depthFar>0&&(le=S.depthFar)),y.near=R.near=T.near=ee,y.far=R.far=T.far=le,(w!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,V=y.far);const ce=G.parent,Ne=y.cameras;K(y,ce);for(let Ee=0;Ee<Ne.length;Ee++)K(Ne[Ee],ce);Ne.length===2?k(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),Q(G,y,ce)};function Q(G,ee,le){le===null?G.matrix.copy(ee.matrixWorld):(G.matrix.copy(le.matrixWorld),G.matrix.invert(),G.matrix.multiply(ee.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ee.projectionMatrix),G.projectionMatrixInverse.copy(ee.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=jd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let re=null;function Me(G,ee){if(h=ee.getViewerPose(c||a),_=ee,h!==null){const le=h.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let ce=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Ee=0;Ee<le.length;Ee++){const Oe=le[Ee];let tt=null;if(g!==null)tt=g.getViewport(Oe);else{const P=p.getViewSubImage(f,Oe);tt=P.viewport,Ee===0&&(e.setRenderTargetTextures(x,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(x))}let Ve=X[Ee];Ve===void 0&&(Ve=new _n,Ve.layers.enable(Ee),Ve.viewport=new gt,X[Ee]=Ve),Ve.matrix.fromArray(Oe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Oe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(tt.x,tt.y,tt.width,tt.height),Ee===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(Ve)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ee=p.getDepthInformation(le[0]);Ee&&Ee.isValid&&Ee.texture&&S.init(e,Ee,r.renderState)}}for(let le=0;le<v.length;le++){const ce=M[le],Ne=v[le];ce!==null&&Ne!==void 0&&Ne.update(ce,ee,c||a)}re&&re(G,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Ie=new Gv;Ie.setAnimationLoop(Me),this.setAnimationLoop=function(G){re=G},this.dispose=function(){}}}const sr=new Yn,dT=new ht;function hT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Hv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,x,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&g(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),S(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,x,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===tn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===tn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=e.get(u),v=x.envMap,M=x.envMapRotation;v&&(m.envMap.value=v,sr.copy(M),sr.x*=-1,sr.y*=-1,sr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),m.envMapRotation.value.setFromMatrix4(dT.makeRotationFromEuler(sr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const x=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const M=v.program;i.uniformBlockBinding(x,M)}function c(x,v){let M=r[x.id];M===void 0&&(_(x),M=h(x),r[x.id]=M,x.addEventListener("dispose",m));const N=v.program;i.updateUBOMapping(x,N);const C=e.render.frame;s[x.id]!==C&&(f(x),s[x.id]=C)}function h(x){const v=p();x.__bindingPointIndex=v;const M=t.createBuffer(),N=x.__size,C=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,N,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],M=x.uniforms,N=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,T=M.length;C<T;C++){const R=Array.isArray(M[C])?M[C]:[M[C]];for(let X=0,y=R.length;X<y;X++){const w=R[X];if(g(w,C,X,N)===!0){const V=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let q=0;for(let J=0;J<z.length;J++){const H=z[J],W=S(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,V+q,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,q),q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,M,N){const C=x.value,T=v+"_"+M;if(N[T]===void 0)return typeof C=="number"||typeof C=="boolean"?N[T]=C:N[T]=C.clone(),!0;{const R=N[T];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return N[T]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function _(x){const v=x.uniforms;let M=0;const N=16;for(let T=0,R=v.length;T<R;T++){const X=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,w=X.length;y<w;y++){const V=X[y],z=Array.isArray(V.value)?V.value:[V.value];for(let q=0,J=z.length;q<J;q++){const H=z[q],W=S(H),k=M%N,K=k%W.boundary,Q=k+K;M+=K,Q!==0&&N-Q<W.storage&&(M+=N-Q),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=W.storage}}}const C=M%N;return C>0&&(M+=N-C),x.__size=M,x.__cache={},this}function S(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class pT{constructor(e={}){const{canvas:n=tb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let S=null,m=null;const u=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=ji,this.toneMappingExposure=1;const v=this;let M=!1,N=0,C=0,T=null,R=-1,X=null;const y=new gt,w=new gt;let V=null;const z=new qe(0);let q=0,J=n.width,H=n.height,W=1,k=null,K=null;const Q=new gt(0,0,J,H),re=new gt(0,0,J,H);let Me=!1;const Ie=new qh;let G=!1,ee=!1;const le=new ht,ce=new ht,Ne=new F,Ee=new gt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ve(){return T===null?W:1}let P=i;function rn(E,L){return n.getContext(E,L)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Oh}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",fe,!1),P===null){const L="webgl2";if(P=rn(L,E),P===null)throw rn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ze,We,Ae,rt,ke,A,b,U,Y,te,$,ye,oe,me,Xe,ie,ge,Ce,Re,xe,He,Pe,nt,D;function he(){ze=new _E(P),ze.init(),Pe=new rT(P,ze),We=new fE(P,ze,e,Pe),Ae=new tT(P),We.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),rt=new bE(P),ke=new zw,A=new iT(P,ze,Ae,ke,We,Pe,rt),b=new mE(v),U=new vE(v),Y=new Rb(P),nt=new dE(P,Y),te=new yE(P,Y,rt,nt),$=new EE(P,te,Y,rt),Re=new ME(P,We,A),ie=new pE(ke),ye=new Ow(v,b,U,ze,We,nt,ie),oe=new hT(v,ke),me=new Vw,Xe=new $w(ze),Ce=new uE(v,b,U,Ae,$,f,l),ge=new Jw(v,$,We),D=new fT(P,rt,We,Ae),xe=new hE(P,ze,rt),He=new SE(P,ze,rt),rt.programs=ye.programs,v.capabilities=We,v.extensions=ze,v.properties=ke,v.renderLists=me,v.shadowMap=ge,v.state=Ae,v.info=rt}he();const j=new uT(v,P);this.xr=j,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(J,H,!1))},this.getSize=function(E){return E.set(J,H)},this.setSize=function(E,L,B=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,H=L,n.width=Math.floor(E*W),n.height=Math.floor(L*W),B===!0&&(n.style.width=E+"px",n.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(J*W,H*W).floor()},this.setDrawingBufferSize=function(E,L,B){J=E,H=L,W=B,n.width=Math.floor(E*B),n.height=Math.floor(L*B),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,L,B,O){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,L,B,O),Ae.viewport(y.copy(Q).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,L,B,O){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,L,B,O),Ae.scissor(w.copy(re).multiplyScalar(W).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(E){Ae.setScissorTest(Me=E)},this.setOpaqueSort=function(E){k=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,L=!0,B=!0){let O=0;if(E){let I=!1;if(T!==null){const se=T.texture.format;I=se===Wh||se===Gh||se===jh}if(I){const se=T.texture.type,de=se===gi||se===Er||se===Ca||se===Ms||se===Hh||se===Vh,ve=Ce.getClearColor(),_e=Ce.getClearAlpha(),we=ve.r,Te=ve.g,Se=ve.b;de?(g[0]=we,g[1]=Te,g[2]=Se,g[3]=_e,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=we,_[1]=Te,_[2]=Se,_[3]=_e,P.clearBufferiv(P.COLOR,0,_))}else O|=P.COLOR_BUFFER_BIT}L&&(O|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),me.dispose(),Xe.dispose(),ke.dispose(),b.dispose(),U.dispose(),$.dispose(),nt.dispose(),D.dispose(),ye.dispose(),j.dispose(),j.removeEventListener("sessionstart",Yh),j.removeEventListener("sessionend",Kh),Zi.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=rt.autoReset,L=ge.enabled,B=ge.autoUpdate,O=ge.needsUpdate,I=ge.type;he(),rt.autoReset=E,ge.enabled=L,ge.autoUpdate=B,ge.needsUpdate=O,ge.type=I}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function je(E){const L=E.target;L.removeEventListener("dispose",je),_t(L)}function _t(E){Xt(E),ke.remove(E)}function Xt(E){const L=ke.get(E).programs;L!==void 0&&(L.forEach(function(B){ye.releaseProgram(B)}),E.isShaderMaterial&&ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,B,O,I,se){L===null&&(L=Oe);const de=I.isMesh&&I.matrixWorld.determinant()<0,ve=e0(E,L,B,O,I);Ae.setMaterial(O,de);let _e=B.index,we=1;if(O.wireframe===!0){if(_e=te.getWireframeAttribute(B),_e===void 0)return;we=2}const Te=B.drawRange,Se=B.attributes.position;let Je=Te.start*we,st=(Te.start+Te.count)*we;se!==null&&(Je=Math.max(Je,se.start*we),st=Math.min(st,(se.start+se.count)*we)),_e!==null?(Je=Math.max(Je,0),st=Math.min(st,_e.count)):Se!=null&&(Je=Math.max(Je,0),st=Math.min(st,Se.count));const pt=st-Je;if(pt<0||pt===1/0)return;nt.setup(I,O,ve,B,_e);let sn,Ye=xe;if(_e!==null&&(sn=Y.get(_e),Ye=He,Ye.setIndex(sn)),I.isMesh)O.wireframe===!0?(Ae.setLineWidth(O.wireframeLinewidth*Ve()),Ye.setMode(P.LINES)):Ye.setMode(P.TRIANGLES);else if(I.isLine){let be=O.linewidth;be===void 0&&(be=1),Ae.setLineWidth(be*Ve()),I.isLineSegments?Ye.setMode(P.LINES):I.isLineLoop?Ye.setMode(P.LINE_LOOP):Ye.setMode(P.LINE_STRIP)}else I.isPoints?Ye.setMode(P.POINTS):I.isSprite&&Ye.setMode(P.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ye.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Ye.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const be=I._multiDrawStarts,Rt=I._multiDrawCounts,Ke=I._multiDrawCount,Tn=_e?Y.get(_e).bytesPerElement:1,Cr=ke.get(O).currentProgram.getUniforms();for(let an=0;an<Ke;an++)Cr.setValue(P,"_gl_DrawID",an),Ye.render(be[an]/Tn,Rt[an])}else if(I.isInstancedMesh)Ye.renderInstances(Je,pt,I.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Rt=Math.min(B.instanceCount,be);Ye.renderInstances(Je,pt,Rt)}else Ye.render(Je,pt)};function $e(E,L,B){E.transparent===!0&&E.side===ai&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,Oa(E,L,B),E.side=Xi,E.needsUpdate=!0,Oa(E,L,B),E.side=ai):Oa(E,L,B)}this.compile=function(E,L,B=null){B===null&&(B=E),m=Xe.get(B),m.init(L),x.push(m),B.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),E!==B&&E.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights();const O=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const se=I.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const ve=se[de];$e(ve,B,I),O.add(ve)}else $e(se,B,I),O.add(se)}),x.pop(),m=null,O},this.compileAsync=function(E,L,B=null){const O=this.compile(E,L,B);return new Promise(I=>{function se(){if(O.forEach(function(de){ke.get(de).currentProgram.isReady()&&O.delete(de)}),O.size===0){I(E);return}setTimeout(se,10)}ze.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let qt=null;function Qn(E){qt&&qt(E)}function Yh(){Zi.stop()}function Kh(){Zi.start()}const Zi=new Gv;Zi.setAnimationLoop(Qn),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(E){qt=E,j.setAnimationLoop(E),E===null?Zi.stop():Zi.start()},j.addEventListener("sessionstart",Yh),j.addEventListener("sessionend",Kh),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(L),L=j.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,L,T),m=Xe.get(E,x.length),m.init(L),x.push(m),ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ie.setFromProjectionMatrix(ce),ee=this.localClippingEnabled,G=ie.init(this.clippingPlanes,ee),S=me.get(E,u.length),S.init(),u.push(S),j.enabled===!0&&j.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&Zl(se,L,-1/0,v.sortObjects)}Zl(E,L,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(k,K),tt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,tt&&Ce.addToRenderList(S,E),this.info.render.frame++,G===!0&&ie.beginShadows();const B=m.state.shadowsArray;ge.render(B,E,L),G===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=S.opaque,I=S.transmissive;if(m.setupLights(),L.isArrayCamera){const se=L.cameras;if(I.length>0)for(let de=0,ve=se.length;de<ve;de++){const _e=se[de];Zh(O,I,E,_e)}tt&&Ce.render(E);for(let de=0,ve=se.length;de<ve;de++){const _e=se[de];Qh(S,E,_e,_e.viewport)}}else I.length>0&&Zh(O,I,E,L),tt&&Ce.render(E),Qh(S,E,L);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,L),nt.resetDefaultState(),R=-1,X=null,x.pop(),x.length>0?(m=x[x.length-1],G===!0&&ie.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function Zl(E,L,B,O){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ie.intersectsSprite(E)){O&&Ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);const de=$.update(E),ve=E.material;ve.visible&&S.push(E,de,ve,B,Ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ie.intersectsObject(E))){const de=$.update(E),ve=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ee.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ee.copy(de.boundingSphere.center)),Ee.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(ve)){const _e=de.groups;for(let we=0,Te=_e.length;we<Te;we++){const Se=_e[we],Je=ve[Se.materialIndex];Je&&Je.visible&&S.push(E,de,Je,B,Ee.z,Se)}}else ve.visible&&S.push(E,de,ve,B,Ee.z,null)}}const se=E.children;for(let de=0,ve=se.length;de<ve;de++)Zl(se[de],L,B,O)}function Qh(E,L,B,O){const I=E.opaque,se=E.transmissive,de=E.transparent;m.setupLightsView(B),G===!0&&ie.setGlobalState(v.clippingPlanes,B),O&&Ae.viewport(y.copy(O)),I.length>0&&Ba(I,L,B),se.length>0&&Ba(se,L,B),de.length>0&&Ba(de,L,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Zh(E,L,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new wr(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?La:gi,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=m.state.transmissionRenderTarget[O.id],de=O.viewport||y;se.setSize(de.z,de.w);const ve=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(z),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),tt&&Ce.render(B);const _e=v.toneMapping;v.toneMapping=ji;const we=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),G===!0&&ie.setGlobalState(v.clippingPlanes,O),Ba(E,B,O),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Se=0,Je=L.length;Se<Je;Se++){const st=L[Se],pt=st.object,sn=st.geometry,Ye=st.material,be=st.group;if(Ye.side===ai&&pt.layers.test(O.layers)){const Rt=Ye.side;Ye.side=tn,Ye.needsUpdate=!0,Jh(pt,B,O,sn,Ye,be),Ye.side=Rt,Ye.needsUpdate=!0,Te=!0}}Te===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}v.setRenderTarget(ve),v.setClearColor(z,q),we!==void 0&&(O.viewport=we),v.toneMapping=_e}function Ba(E,L,B){const O=L.isScene===!0?L.overrideMaterial:null;for(let I=0,se=E.length;I<se;I++){const de=E[I],ve=de.object,_e=de.geometry,we=O===null?de.material:O,Te=de.group;ve.layers.test(B.layers)&&Jh(ve,L,B,_e,we,Te)}}function Jh(E,L,B,O,I,se){E.onBeforeRender(v,L,B,O,I,se),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(v,L,B,O,E,se),I.transparent===!0&&I.side===ai&&I.forceSinglePass===!1?(I.side=tn,I.needsUpdate=!0,v.renderBufferDirect(B,L,O,I,E,se),I.side=Xi,I.needsUpdate=!0,v.renderBufferDirect(B,L,O,I,E,se),I.side=ai):v.renderBufferDirect(B,L,O,I,E,se),E.onAfterRender(v,L,B,O,I,se)}function Oa(E,L,B){L.isScene!==!0&&(L=Oe);const O=ke.get(E),I=m.state.lights,se=m.state.shadowsArray,de=I.state.version,ve=ye.getParameters(E,I.state,se,L,B),_e=ye.getProgramCacheKey(ve);let we=O.programs;O.environment=E.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(E.isMeshStandardMaterial?U:b).get(E.envMap||O.environment),O.envMapRotation=O.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",je),we=new Map,O.programs=we);let Te=we.get(_e);if(Te!==void 0){if(O.currentProgram===Te&&O.lightsStateVersion===de)return tf(E,ve),Te}else ve.uniforms=ye.getUniforms(E),E.onBeforeCompile(ve,v),Te=ye.acquireProgram(ve,_e),we.set(_e,Te),O.uniforms=ve.uniforms;const Se=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=ie.uniform),tf(E,ve),O.needsLights=n0(E),O.lightsStateVersion=de,O.needsLights&&(Se.ambientLightColor.value=I.state.ambient,Se.lightProbe.value=I.state.probe,Se.directionalLights.value=I.state.directional,Se.directionalLightShadows.value=I.state.directionalShadow,Se.spotLights.value=I.state.spot,Se.spotLightShadows.value=I.state.spotShadow,Se.rectAreaLights.value=I.state.rectArea,Se.ltc_1.value=I.state.rectAreaLTC1,Se.ltc_2.value=I.state.rectAreaLTC2,Se.pointLights.value=I.state.point,Se.pointLightShadows.value=I.state.pointShadow,Se.hemisphereLights.value=I.state.hemi,Se.directionalShadowMap.value=I.state.directionalShadowMap,Se.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Se.spotShadowMap.value=I.state.spotShadowMap,Se.spotLightMatrix.value=I.state.spotLightMatrix,Se.spotLightMap.value=I.state.spotLightMap,Se.pointShadowMap.value=I.state.pointShadowMap,Se.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=Te,O.uniformsList=null,Te}function ef(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=Zo.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function tf(E,L){const B=ke.get(E);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function e0(E,L,B,O,I){L.isScene!==!0&&(L=Oe),A.resetTextureUnits();const se=L.fog,de=O.isMeshStandardMaterial?L.environment:null,ve=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qi,_e=(O.isMeshStandardMaterial?U:b).get(O.envMap||de),we=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Te=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!B.morphAttributes.position,Je=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let pt=ji;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pt=v.toneMapping);const sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ye=sn!==void 0?sn.length:0,be=ke.get(O),Rt=m.state.lights;if(G===!0&&(ee===!0||E!==X)){const mn=E===X&&O.id===R;ie.setState(O,E,mn)}let Ke=!1;O.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Rt.state.version||be.outputColorSpace!==ve||I.isBatchedMesh&&be.batching===!1||!I.isBatchedMesh&&be.batching===!0||I.isBatchedMesh&&be.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&be.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&be.instancing===!1||!I.isInstancedMesh&&be.instancing===!0||I.isSkinnedMesh&&be.skinning===!1||!I.isSkinnedMesh&&be.skinning===!0||I.isInstancedMesh&&be.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&be.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&be.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&be.instancingMorph===!1&&I.morphTexture!==null||be.envMap!==_e||O.fog===!0&&be.fog!==se||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ie.numPlanes||be.numIntersection!==ie.numIntersection)||be.vertexAlphas!==we||be.vertexTangents!==Te||be.morphTargets!==Se||be.morphNormals!==Je||be.morphColors!==st||be.toneMapping!==pt||be.morphTargetsCount!==Ye)&&(Ke=!0):(Ke=!0,be.__version=O.version);let Tn=be.currentProgram;Ke===!0&&(Tn=Oa(O,L,I));let Cr=!1,an=!1,Jl=!1;const xt=Tn.getUniforms(),_i=be.uniforms;if(Ae.useProgram(Tn.program)&&(Cr=!0,an=!0,Jl=!0),O.id!==R&&(R=O.id,an=!0),Cr||X!==E){We.reverseDepthBuffer?(le.copy(E.projectionMatrix),ib(le),rb(le),xt.setValue(P,"projectionMatrix",le)):xt.setValue(P,"projectionMatrix",E.projectionMatrix),xt.setValue(P,"viewMatrix",E.matrixWorldInverse);const mn=xt.map.cameraPosition;mn!==void 0&&mn.setValue(P,Ne.setFromMatrixPosition(E.matrixWorld)),We.logarithmicDepthBuffer&&xt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&xt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,an=!0,Jl=!0)}if(I.isSkinnedMesh){xt.setOptional(P,I,"bindMatrix"),xt.setOptional(P,I,"bindMatrixInverse");const mn=I.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),xt.setValue(P,"boneTexture",mn.boneTexture,A))}I.isBatchedMesh&&(xt.setOptional(P,I,"batchingTexture"),xt.setValue(P,"batchingTexture",I._matricesTexture,A),xt.setOptional(P,I,"batchingIdTexture"),xt.setValue(P,"batchingIdTexture",I._indirectTexture,A),xt.setOptional(P,I,"batchingColorTexture"),I._colorsTexture!==null&&xt.setValue(P,"batchingColorTexture",I._colorsTexture,A));const ec=B.morphAttributes;if((ec.position!==void 0||ec.normal!==void 0||ec.color!==void 0)&&Re.update(I,B,Tn),(an||be.receiveShadow!==I.receiveShadow)&&(be.receiveShadow=I.receiveShadow,xt.setValue(P,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(_i.envMap.value=_e,_i.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(_i.envMapIntensity.value=L.environmentIntensity),an&&(xt.setValue(P,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&t0(_i,Jl),se&&O.fog===!0&&oe.refreshFogUniforms(_i,se),oe.refreshMaterialUniforms(_i,O,W,H,m.state.transmissionRenderTarget[E.id]),Zo.upload(P,ef(be),_i,A)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Zo.upload(P,ef(be),_i,A),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&xt.setValue(P,"center",I.center),xt.setValue(P,"modelViewMatrix",I.modelViewMatrix),xt.setValue(P,"normalMatrix",I.normalMatrix),xt.setValue(P,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const mn=O.uniformsGroups;for(let tc=0,i0=mn.length;tc<i0;tc++){const nf=mn[tc];D.update(nf,Tn),D.bind(nf,Tn)}}return Tn}function t0(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function n0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,L,B){ke.get(E.texture).__webglTexture=L,ke.get(E.depthTexture).__webglTexture=B;const O=ke.get(E);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=B===void 0,O.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){const B=ke.get(E);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,B=0){T=E,N=L,C=B;let O=!0,I=null,se=!1,de=!1;if(E){const _e=ke.get(E);if(_e.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(P.FRAMEBUFFER,null),O=!1;else if(_e.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(_e.__hasExternalTextures)A.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Se=E.depthTexture;if(_e.__boundDepthTexture!==Se){if(Se!==null&&ke.has(Se)&&(E.width!==Se.image.width||E.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const we=E.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(de=!0);const Te=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?I=Te[L][B]:I=Te[L],se=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?I=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?I=Te[B]:I=Te,y.copy(E.viewport),w.copy(E.scissor),V=E.scissorTest}else y.copy(Q).multiplyScalar(W).floor(),w.copy(re).multiplyScalar(W).floor(),V=Me;if(Ae.bindFramebuffer(P.FRAMEBUFFER,I)&&O&&Ae.drawBuffers(E,I),Ae.viewport(y),Ae.scissor(w),Ae.setScissorTest(V),se){const _e=ke.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e.__webglTexture,B)}else if(de){const _e=ke.get(E.texture),we=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,_e.__webglTexture,B||0,we)}R=-1},this.readRenderTargetPixels=function(E,L,B,O,I,se,de){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){Ae.bindFramebuffer(P.FRAMEBUFFER,ve);try{const _e=E.texture,we=_e.format,Te=_e.type;if(!We.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-O&&B>=0&&B<=E.height-I&&P.readPixels(L,B,O,I,Pe.convert(we),Pe.convert(Te),se)}finally{const _e=T!==null?ke.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,L,B,O,I,se,de){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){const _e=E.texture,we=_e.format,Te=_e.type;if(!We.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-O&&B>=0&&B<=E.height-I){Ae.bindFramebuffer(P.FRAMEBUFFER,ve);const Se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),P.readPixels(L,B,O,I,Pe.convert(we),Pe.convert(Te),0);const Je=T!==null?ke.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,Je);const st=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await nb(P,st,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se),P.deleteBuffer(Se),P.deleteSync(st),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,L=null,B=0){E.isTexture!==!0&&(Qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);const O=Math.pow(2,-B),I=Math.floor(E.image.width*O),se=Math.floor(E.image.height*O),de=L!==null?L.x:0,ve=L!==null?L.y:0;A.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,de,ve,I,se),Ae.unbindTexture()},this.copyTextureToTexture=function(E,L,B=null,O=null,I=0){E.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1],L=arguments[2],I=arguments[3]||0,B=null);let se,de,ve,_e,we,Te;B!==null?(se=B.max.x-B.min.x,de=B.max.y-B.min.y,ve=B.min.x,_e=B.min.y):(se=E.image.width,de=E.image.height,ve=0,_e=0),O!==null?(we=O.x,Te=O.y):(we=0,Te=0);const Se=Pe.convert(L.format),Je=Pe.convert(L.type);A.setTexture2D(L,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const st=P.getParameter(P.UNPACK_ROW_LENGTH),pt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),sn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ye=P.getParameter(P.UNPACK_SKIP_ROWS),be=P.getParameter(P.UNPACK_SKIP_IMAGES),Rt=E.isCompressedTexture?E.mipmaps[I]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Rt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,_e),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,I,we,Te,se,de,Se,Je,Rt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,I,we,Te,Rt.width,Rt.height,Se,Rt.data):P.texSubImage2D(P.TEXTURE_2D,I,we,Te,se,de,Se,Je,Rt),P.pixelStorei(P.UNPACK_ROW_LENGTH,st),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,be),I===0&&L.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(E,L,B=null,O=null,I=0){E.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,O=arguments[1]||null,E=arguments[2],L=arguments[3],I=arguments[4]||0);let se,de,ve,_e,we,Te,Se,Je,st;const pt=E.isCompressedTexture?E.mipmaps[I]:E.image;B!==null?(se=B.max.x-B.min.x,de=B.max.y-B.min.y,ve=B.max.z-B.min.z,_e=B.min.x,we=B.min.y,Te=B.min.z):(se=pt.width,de=pt.height,ve=pt.depth,_e=0,we=0,Te=0),O!==null?(Se=O.x,Je=O.y,st=O.z):(Se=0,Je=0,st=0);const sn=Pe.convert(L.format),Ye=Pe.convert(L.type);let be;if(L.isData3DTexture)A.setTexture3D(L,0),be=P.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)A.setTexture2DArray(L,0),be=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const Rt=P.getParameter(P.UNPACK_ROW_LENGTH),Ke=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Tn=P.getParameter(P.UNPACK_SKIP_PIXELS),Cr=P.getParameter(P.UNPACK_SKIP_ROWS),an=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,we),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(be,I,Se,Je,st,se,de,ve,sn,Ye,pt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(be,I,Se,Je,st,se,de,ve,sn,pt.data):P.texSubImage3D(be,I,Se,Je,st,se,de,ve,sn,Ye,pt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Rt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ke),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Cr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,an),I===0&&L.generateMipmaps&&P.generateMipmap(be),Ae.unbindTexture()},this.initRenderTarget=function(E){ke.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ae.unbindTexture()},this.resetState=function(){N=0,C=0,T=null,Ae.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Xh?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===$l?"display-p3":"srgb"}}class mT extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Qv extends Ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new F,Nl=new F,om=new ht,qs=new Iv,To=new Yl,su=new F,lm=new F;class gT extends Pt{constructor(e=new vi,n=new Qv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Rl.fromBufferAttribute(n,r-1),Nl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Rl.distanceTo(Nl);e.setAttribute("lineDistance",new $n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),To.radius+=s,e.ray.intersectsSphere(To)===!1)return;om.copy(r).invert(),qs.copy(e.ray).applyMatrix4(om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const g=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=g,m=_-1;S<m;S+=c){const u=h.getX(S),x=h.getX(S+1),v=Ao(this,e,qs,l,u,x);v&&n.push(v)}if(this.isLineLoop){const S=h.getX(_-1),m=h.getX(g),u=Ao(this,e,qs,l,S,m);u&&n.push(u)}}else{const g=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=g,m=_-1;S<m;S+=c){const u=Ao(this,e,qs,l,S,S+1);u&&n.push(u)}if(this.isLineLoop){const S=Ao(this,e,qs,l,_-1,g);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ao(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Rl.fromBufferAttribute(a,r),Nl.fromBufferAttribute(a,s),n.distanceSqToSegment(Rl,Nl,su,lm)>i)return;su.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(su);if(!(l<e.near||l>e.far))return{distance:l,point:lm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const cm=new F,um=new F;class xT extends gT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)cm.fromBufferAttribute(n,r),um.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+cm.distanceTo(um);e.setAttribute("lineDistance",new $n(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Co=new F,Ro=new F,au=new F,No=new yn;class vT extends vi{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ko*n),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],p=new Array(3),f={},g=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:S,b:m,c:u}=No;if(S.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),No.getNormal(au),p[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let x=0;x<3;x++){const v=(x+1)%3,M=p[x],N=p[v],C=No[h[x]],T=No[h[v]],R=`${M}_${N}`,X=`${N}_${M}`;X in f&&f[X]?(au.dot(f[X].normal)<=s&&(g.push(C.x,C.y,C.z),g.push(T.x,T.y,T.z)),f[X]=null):R in f||(f[R]={index0:c[x],index1:c[v],normal:au.clone()})}}for(const _ in f)if(f[_]){const{index0:S,index1:m}=f[_];Co.fromBufferAttribute(o,S),Ro.fromBufferAttribute(o,m),g.push(Co.x,Co.y,Co.z),g.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new $n(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class _T extends Ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nv,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zv extends Pt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ou=new ht,dm=new F,hm=new F;class yT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;dm.setFromMatrixPosition(e.matrixWorld),n.position.copy(dm),hm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hm),n.updateMatrixWorld(),ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ST extends yT{constructor(){super(new Wv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fm extends Zv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new ST}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bT extends Zv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class MT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=pm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function pm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);const Jv=({activeTab:t,onTabChange:e,customImage:n})=>{const[i,r]=Ue.useState("send"),s=t??i,a=R=>{r(R),e&&e(R)},[o,l]=Ue.useState("phone"),[c,h]=Ue.useState("25.00"),[p,f]=Ue.useState("idle"),[g,_]=Ue.useState(1250),[S,m]=Ue.useState(!1),[u,x]=Ue.useState(null),[v,M]=Ue.useState([{id:"tx-1",type:"receive",title:"Nhận qua SĐT",subtitle:"Từ 0912 ••• 888",amount:"+50.00 USDC",time:"2 phút trước",signature:"5xK8...7mPq",fee:"~0.000005 SOL",status:"Finalized"},{id:"tx-2",type:"send",title:"Chuyển qua QR",subtitle:"Tới dev_merchant.sol",amount:"-15.00 USDC",time:"15 phút trước",signature:"3wP9...2jLk",fee:"~0.000005 SOL",status:"Finalized"},{id:"tx-3",type:"receive",title:"Faucet Devnet",subtitle:"Solana Devnet Airdrop",amount:"+1,000.00 USDC",time:"Hôm qua",signature:"4tNm...8vQq",fee:"0 SOL",status:"Finalized"}]),N=()=>{p==="idle"&&(f("processing"),setTimeout(()=>{const R=parseFloat(c)||25;_(y=>Math.max(0,y-R)),f("confirmed");const X={id:`tx-${Date.now()}`,type:"send",title:o==="phone"?"Chuyển qua SĐT":o==="qr"?"Chuyển qua QR":"Chuyển tới Ví",subtitle:o==="phone"?"Tới 0987 ••• 321":"Tới ned_friend.sol",amount:`-${R.toFixed(2)} USDC`,time:"Vừa xong",signature:`5tNx...${Math.random().toString(36).substring(2,6)}`,fee:"~0.000005 SOL",status:"Confirmed"};M(y=>[X,...y])},1400))},C=()=>{f("idle")},T=()=>{m(!0),setTimeout(()=>m(!1),2e3)};return n?d.jsx("img",{src:n,alt:"N.E.D Wallet App Interface",className:"w-full h-full object-cover rounded-[36px]"}):d.jsxs("div",{className:"w-full h-full bg-brand-warmCream text-brand-inkBlack flex flex-col p-4 sm:p-5 select-none font-sans overflow-hidden relative",children:[d.jsxs("div",{className:"flex items-center justify-between text-[11px] font-extrabold text-stone-700 pb-2 border-b-2 border-brand-inkBlack/15 mb-3",children:[d.jsx("span",{children:"9:41"}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime border border-brand-inkBlack animate-ping"}),d.jsx("span",{className:"text-[9px] tracking-wider uppercase font-black bg-brand-deepPurple text-brand-offWhite px-1.5 py-0.5 rounded border border-brand-inkBlack shadow-brutal-xs",children:"Solana Devnet"})]})]}),d.jsxs("div",{className:"flex items-center justify-between mb-3.5",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center font-black text-xs shadow-brutal-xs",children:"N"}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[9px] uppercase tracking-wider font-extrabold text-stone-600",children:"Ví Devnet"}),d.jsx("div",{className:"text-xs font-black text-brand-inkBlack",children:"ned_user.sol"})]})]}),d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:"text-[9px] uppercase tracking-wider font-bold text-stone-500",children:"Số dư"}),d.jsxs("div",{className:"text-xs font-black text-brand-inkBlack",children:[g.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",d.jsx("span",{className:"text-[10px] text-brand-lavender font-extrabold",children:"USDC"})]})]})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-1.5 p-1 bg-white border-2 border-brand-inkBlack rounded-xl mb-3 shadow-brutal-xs",children:[d.jsxs("button",{type:"button",onClick:()=>a("send"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="send"?"bg-brand-lavender text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[d.jsx(jo,{className:"w-3 h-3"}),d.jsx("span",{children:"Chuyển"})]}),d.jsxs("button",{type:"button",onClick:()=>a("receive"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="receive"?"bg-brand-cyan text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[d.jsx(nd,{className:"w-3 h-3"}),d.jsx("span",{children:"Nhận"})]}),d.jsxs("button",{type:"button",onClick:()=>a("track"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="track"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[d.jsx(Go,{className:"w-3 h-3"}),d.jsx("span",{children:"Lịch sử"})]})]}),d.jsxs("div",{className:"flex-1 flex flex-col justify-between overflow-hidden",children:[s==="send"&&d.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn",children:[p==="idle"&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-3 shadow-brutal-sm mb-2.5",children:[d.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5",children:"Phương thức nhận diện"}),d.jsxs("div",{className:"grid grid-cols-3 gap-1 bg-brand-warmCream p-1 rounded-xl border border-brand-inkBlack mb-2.5",children:[d.jsxs("button",{type:"button",onClick:()=>l("phone"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${o==="phone"?"bg-brand-lavender border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[d.jsx(ev,{className:"w-3 h-3"})," SĐT"]}),d.jsxs("button",{type:"button",onClick:()=>l("qr"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${o==="qr"?"bg-brand-cyan border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[d.jsx(nv,{className:"w-3 h-3"})," QR"]}),d.jsxs("button",{type:"button",onClick:()=>l("wallet"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${o==="wallet"?"bg-brand-lime border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[d.jsx(Go,{className:"w-3 h-3"})," Ví"]})]}),d.jsxs("div",{className:"bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2 mb-2",children:[d.jsx("div",{className:"text-[9px] font-extrabold uppercase text-stone-500",children:o==="phone"?"Người nhận (Số điện thoại)":o==="qr"?"Người nhận (Quét QR)":"Người nhận (Địa chỉ Solana)"}),d.jsx("div",{className:"text-xs font-black text-brand-inkBlack mt-0.5",children:o==="phone"?"0987 ••• 321":o==="qr"?"QR_SCAN_882.sol":"7xWp...9bM2"}),d.jsxs("div",{className:"text-[9px] font-bold text-emerald-700 flex items-center gap-1 mt-0.5",children:[d.jsx($y,{className:"w-2.5 h-2.5"})," Đã kết nối trên Devnet"]})]}),d.jsxs("div",{className:"bg-brand-offWhite border-2 border-brand-inkBlack rounded-xl p-2 text-center",children:[d.jsx("div",{className:"text-[9px] font-bold uppercase text-stone-500",children:"Số lượng chuyển"}),d.jsxs("div",{className:"text-xl font-black text-brand-inkBlack my-0.5",children:[c," ",d.jsx("span",{className:"text-xs font-extrabold text-brand-lavender",children:"USDC"})]}),d.jsx("div",{className:"flex items-center justify-center gap-1.5 mt-1",children:["10.00","25.00","50.00"].map(R=>d.jsx("button",{type:"button",onClick:()=>h(R),className:`px-2 py-0.5 text-[9px] font-black rounded border border-brand-inkBlack transition-all ${c===R?"bg-brand-lime shadow-brutal-xs -translate-y-0.5":"bg-white text-stone-600"}`,children:R},R))})]})]}),d.jsxs("div",{className:"bg-brand-lime border-2 border-brand-inkBlack rounded-xl p-2 shadow-brutal-xs flex items-center gap-2 mb-2",children:[d.jsx(ov,{className:"w-4 h-4 flex-shrink-0 text-brand-inkBlack"}),d.jsx("div",{className:"text-[9px] font-black leading-tight text-brand-inkBlack",children:"Kiểm tra đúng thông tin người nhận trước khi xác thực"})]}),d.jsxs("button",{type:"button",onClick:N,className:"w-full py-2.5 bg-brand-inkBlack text-brand-offWhite font-black text-xs rounded-xl text-center border-2 border-brand-inkBlack shadow-brutal-sm hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer",children:[d.jsx(jo,{className:"w-3.5 h-3.5 text-brand-lime"}),d.jsx("span",{children:"Xác nhận gửi Devnet USDC"})]})]}),p==="processing"&&d.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-5 shadow-brutal-sm flex-1 flex flex-col items-center justify-center text-center animate-fadeIn",children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center mb-3 shadow-brutal-xs",children:d.jsx(tS,{className:"w-6 h-6 text-brand-inkBlack animate-spin"})}),d.jsx("div",{className:"text-xs font-black text-brand-inkBlack mb-1",children:"Đang phát sóng lên Solana Devnet..."}),d.jsx("div",{className:"text-[10px] text-stone-500 font-bold mb-4",children:"Xác thực chữ ký mã hóa & cập nhật số dư"}),d.jsx("div",{className:"w-full bg-brand-warmCream border-2 border-brand-inkBlack rounded-full h-3 overflow-hidden p-0.5",children:d.jsx("div",{className:"bg-brand-lime h-full rounded-full animate-progress"})})]}),p==="confirmed"&&d.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-4 shadow-brutal-sm flex-1 flex flex-col items-center justify-between text-center animate-slideUp",children:[d.jsxs("div",{children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center mx-auto mb-2 shadow-brutal-xs animate-pulseGlow",children:d.jsx(_s,{className:"w-7 h-7 text-emerald-900 stroke-[3]"})}),d.jsx("div",{className:"text-sm font-black text-brand-inkBlack mb-0.5",children:"Giao dịch thành công!"}),d.jsxs("div",{className:"text-[10px] font-extrabold text-stone-600 mb-3",children:["Đã chuyển ",c," USDC trên Solana Devnet"]}),d.jsxs("div",{className:"bg-brand-warmCream border border-brand-inkBlack rounded-xl p-2 text-left text-[9px] font-bold space-y-1 mb-3",children:[d.jsxs("div",{className:"flex justify-between",children:[d.jsx("span",{className:"text-stone-500",children:"Mã giao dịch:"}),d.jsx("span",{className:"font-mono font-bold",children:"5tNx...9aDev"})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("span",{className:"text-stone-500",children:"Thời gian xác thực:"}),d.jsx("span",{className:"text-emerald-700 font-extrabold",children:"0.6 giây"})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("span",{className:"text-stone-500",children:"Phí mạng:"}),d.jsx("span",{children:"~0.000005 SOL"})]})]})]}),d.jsxs("div",{className:"w-full flex gap-2",children:[d.jsxs("button",{type:"button",onClick:C,className:"flex-1 py-2 bg-brand-lavender text-brand-inkBlack font-black text-[11px] rounded-xl border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center gap-1",children:[d.jsx(rS,{className:"w-3 h-3"}),d.jsx("span",{children:"Thử gửi lại"})]}),d.jsxs("button",{type:"button",onClick:()=>a("track"),className:"flex-1 py-2 bg-brand-lime text-brand-inkBlack font-black text-[11px] rounded-xl border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center gap-1",children:[d.jsx(Go,{className:"w-3 h-3"}),d.jsx("span",{children:"Xem lịch sử"})]})]})]})]}),s==="receive"&&d.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn",children:[d.jsxs("div",{className:"w-full bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 shadow-brutal-sm text-center flex flex-col items-center",children:[d.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5",children:"Mã QR Nhận Stablecoin"}),d.jsxs("div",{className:"w-32 h-32 sm:w-36 sm:h-36 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl p-2.5 flex flex-col items-center justify-center relative shadow-brutal-xs my-1 overflow-hidden",children:[d.jsx("div",{className:"absolute left-0 right-0 h-1 bg-brand-cyan border-y border-brand-inkBlack shadow-[0_0_8px_#08CEE3] animate-scanLaser z-10 pointer-events-none"}),d.jsxs("div",{className:"grid grid-cols-6 gap-1 w-full h-full p-1 bg-white rounded-lg border border-brand-inkBlack",children:[d.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),d.jsx("div",{className:"bg-brand-lavender rounded"}),d.jsx("div",{className:"bg-brand-cyan rounded"}),d.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),d.jsx("div",{className:"bg-brand-lime rounded"}),d.jsx("div",{className:"bg-brand-inkBlack col-span-4 rounded"}),d.jsx("div",{className:"bg-brand-lavender rounded"}),d.jsx("div",{className:"bg-brand-cyan rounded"}),d.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),d.jsx("div",{className:"bg-brand-lime rounded"}),d.jsx("div",{className:"bg-brand-inkBlack rounded"}),d.jsx("div",{className:"bg-brand-lavender rounded"})]}),d.jsx("div",{className:"absolute w-6 h-6 rounded-lg bg-brand-deepPurple text-white flex items-center justify-center text-[9px] font-black border border-brand-inkBlack shadow-brutal-xs",children:"N"})]}),d.jsx("div",{className:"text-xs font-black mt-1",children:"ned_user.sol"}),d.jsx("div",{className:"text-[10px] font-bold text-stone-600",children:"SĐT liên kết: 0987 ••• 321"})]}),d.jsx("div",{className:"w-full bg-brand-paleYellow border-2 border-brand-inkBlack rounded-xl p-2 text-center text-[9px] font-black shadow-brutal-xs my-2",children:"Chấp nhận USDC trên mạng thử nghiệm Solana Devnet"}),d.jsx("button",{type:"button",onClick:T,className:`w-full py-2.5 rounded-xl font-black text-xs text-center border-2 border-brand-inkBlack shadow-brutal-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${S?"bg-brand-lime text-brand-inkBlack":"bg-brand-cyan text-brand-inkBlack"}`,children:S?d.jsxs(d.Fragment,{children:[d.jsx(_s,{className:"w-3.5 h-3.5 text-emerald-800"}),d.jsx("span",{children:"Đã sao chép ned_user.sol!"})]}):d.jsxs(d.Fragment,{children:[d.jsx(Ml,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Sao chép mã nhận tiền"})]})})]}),s==="track"&&d.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn relative",children:[d.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-2.5 shadow-brutal-xs mb-2",children:[d.jsx("div",{className:"text-[9px] font-black uppercase text-stone-500",children:"Tổng số dư Devnet"}),d.jsxs("div",{className:"text-lg font-black text-brand-inkBlack my-0.5",children:[g.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",d.jsx("span",{className:"text-xs font-extrabold text-brand-lavender",children:"USDC"})]})]}),d.jsxs("div",{className:"flex-1 flex flex-col gap-1.5 overflow-y-auto pr-0.5 mb-2",children:[d.jsx("div",{className:"text-[9px] font-black uppercase tracking-wider text-stone-500",children:"Giao dịch gần đây (Bấm để xem chi tiết)"}),v.map(R=>d.jsxs("button",{type:"button",onClick:()=>x(R),className:"w-full text-left bg-brand-offWhite hover:bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2 flex items-center justify-between shadow-brutal-xs transition-transform active:scale-[0.98] cursor-pointer",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:`w-7 h-7 rounded-lg border border-brand-inkBlack flex items-center justify-center ${R.type==="receive"?"bg-brand-lime":"bg-brand-lavender"}`,children:R.type==="receive"?d.jsx(nd,{className:"w-3.5 h-3.5"}):d.jsx(jo,{className:"w-3.5 h-3.5"})}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[10px] font-black",children:R.title}),d.jsx("div",{className:"text-[8px] text-stone-500 font-bold",children:R.time})]})]}),d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:`text-[11px] font-black ${R.type==="receive"?"text-emerald-700":"text-brand-inkBlack"}`,children:R.amount}),d.jsxs("div",{className:"text-[8px] text-stone-500 font-bold flex items-center justify-end gap-0.5",children:[d.jsx("span",{children:"Devnet"}),d.jsx(Fx,{className:"w-2.5 h-2.5 text-stone-400"})]})]})]},R.id))]}),u&&d.jsxs("div",{className:"absolute inset-0 bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 flex flex-col justify-between shadow-brutal animate-slideUp z-20",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-brand-inkBlack/20 mb-2",children:[d.jsx("span",{className:"text-[10px] font-black uppercase text-stone-500",children:"Biên lai Devnet"}),d.jsx("button",{type:"button",onClick:()=>x(null),className:"p-1 rounded-md bg-stone-100 hover:bg-stone-200 border border-brand-inkBlack",children:d.jsx(mv,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"text-center my-2",children:[d.jsx("div",{className:"text-base font-black",children:u.amount}),d.jsx("div",{className:"text-[10px] font-bold text-stone-600",children:u.title})]}),d.jsxs("div",{className:"space-y-1.5 text-[9px] font-bold bg-brand-warmCream p-2 rounded-xl border border-brand-inkBlack",children:[d.jsxs("div",{className:"flex justify-between",children:[d.jsx("span",{className:"text-stone-500",children:"Chữ ký (Tx):"}),d.jsx("span",{className:"font-mono",children:u.signature})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("span",{className:"text-stone-500",children:"Mạng:"}),d.jsx("span",{children:"Solana Devnet"})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("span",{className:"text-stone-500",children:"Trạng thái:"}),d.jsx("span",{className:"text-emerald-700 font-extrabold",children:u.status})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("span",{className:"text-stone-500",children:"Phí mạng:"}),d.jsx("span",{children:u.fee})]})]})]}),d.jsx("button",{type:"button",onClick:()=>x(null),className:"w-full py-1.5 bg-brand-lavender text-brand-inkBlack font-black text-[10px] rounded-lg border border-brand-inkBlack shadow-brutal-xs",children:"Đóng biên lai"})]}),d.jsx("div",{className:"text-center text-[9px] font-bold text-stone-500 pt-1 border-t border-brand-inkBlack/15",children:"Giao dịch mô phỏng Devnet thời gian thực"})]})]})]})},ET=({onNavigate:t})=>{const{t:e}=Kn(),n=Ue.useRef(null),i=Ue.useRef(null),[r,s]=Ue.useState(!0);Ue.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s(!1);return}const c=i.current;if(!c)return;let h,p,f,g;const _=[],S=[],m=[];try{h=new mT;const u=c.clientWidth||window.innerWidth,x=c.clientHeight||750;p=new _n(45,u/x,.1,100),p.position.set(0,0,16),f=new pT({alpha:!0,antialias:!0,powerPreference:"high-performance"}),f.setSize(u,x),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.appendChild(f.domElement);const v=new bT(16777215,1.4);h.add(v);const M=new fm(11835376,1.6);M.position.set(10,15,10),h.add(M);const N=new fm(577251,1.2);N.position.set(-10,-10,8),h.add(N);const C=[11835376,14024448,577251,16774054,2956116,15789021],T=new Qv({color:1118481,linewidth:2});m.push(T);const R=18;for(let W=0;W<R;W++){const k=.7+Math.random()*.9,K=.7+Math.random()*.9,Q=.7+Math.random()*.9,re=new ks(k,K,Q);S.push(re);const Me=C[W%C.length],Ie=new _T({color:Me,roughness:.35,metalness:.05});m.push(Ie);const G=new Gn(re,Ie),ee=new vT(re);S.push(ee);const le=new xT(ee,T);G.add(le);const Ne=-12+W/R*24+(Math.random()-.5)*3,Ee=-5+Math.random()*10,Oe=-5+Math.random()*7;G.position.set(Ne,Ee,Oe),G.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),h.add(G),_.push({mesh:G,rotSpeedX:(Math.random()-.5)*.012,rotSpeedY:(Math.random()-.5)*.015,rotSpeedZ:(Math.random()-.5)*.01,floatSpeed:.8+Math.random()*1.2,floatAmplitude:.3+Math.random()*.4,initialY:Ee})}let X=0,y=0,w=0,V=0;const z=W=>{X=W.clientX/window.innerWidth*2-1,y=-(W.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",z);const q=()=>{if(!c)return;const W=c.clientWidth,k=c.clientHeight;p.aspect=W/k,p.updateProjectionMatrix(),f.setSize(W,k)};window.addEventListener("resize",q);const J=new MT,H=()=>{g=requestAnimationFrame(H);const W=J.getElapsedTime();w+=(X*.8-w)*.04,V+=(y*.5-V)*.04,p.position.x=w,p.position.y=V,p.lookAt(0,0,0),_.forEach(k=>{k.mesh.rotation.x+=k.rotSpeedX,k.mesh.rotation.y+=k.rotSpeedY,k.mesh.rotation.z+=k.rotSpeedZ,k.mesh.position.y=k.initialY+Math.sin(W*k.floatSpeed)*k.floatAmplitude}),f.render(h,p)};return H(),()=>{cancelAnimationFrame(g),window.removeEventListener("mousemove",z),window.removeEventListener("resize",q),c.contains(f.domElement)&&c.removeChild(f.domElement),f.dispose(),S.forEach(W=>W.dispose()),m.forEach(W=>W.dispose())}}catch{s(!1)}},[]);const a=l=>{l.preventDefault();const c=document.querySelector("#demo");c&&c.scrollIntoView({behavior:"smooth",block:"start"})},o=l=>{l.preventDefault(),t("/builders"),window.scrollTo({top:0,behavior:"smooth"})};return d.jsxs("section",{ref:n,className:"relative w-full min-h-[720px] bg-brand-deepPurple text-brand-offWhite pt-10 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack overflow-hidden flex items-center",children:[r&&d.jsx("div",{ref:i,className:"absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden","aria-hidden":"true"}),d.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none z-0",style:{backgroundImage:`
            linear-gradient(to right, #B497F0 1px, transparent 1px),
            linear-gradient(to bottom, #B497F0 1px, transparent 1px)
          `,backgroundSize:"48px 48px"}}),d.jsxs("div",{className:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10",children:[d.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start text-left",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender text-xs font-black uppercase tracking-wider mb-6 shadow-brutal-xs",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime border border-brand-inkBlack animate-ping"}),d.jsx("span",{children:e.hero.statusBadge})]}),d.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-offWhite tracking-tight leading-[1.08] mb-6 whitespace-pre-line",children:e.hero.headline}),d.jsx("p",{className:"text-base sm:text-lg lg:text-xl text-stone-300 font-medium max-w-2xl leading-relaxed mb-8",children:e.hero.description}),d.jsxs("div",{className:"w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4",children:[d.jsxs("button",{type:"button",onClick:a,className:"btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer",children:[d.jsx("span",{children:e.hero.ctaPrimary}),d.jsx(wa,{className:"w-5 h-5"})]}),d.jsxs("button",{type:"button",onClick:o,className:"btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer",children:[d.jsx("span",{children:e.hero.ctaSecondary}),d.jsx(Fx,{className:"w-5 h-5"})]})]}),d.jsxs("div",{className:"mt-10 pt-6 border-t-2 border-brand-lavender/20 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs font-bold text-stone-300",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Aa,{className:"w-4 h-4 text-brand-lime flex-shrink-0"}),d.jsx("span",{children:"Thao tác quen thuộc"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(aS,{className:"w-4 h-4 text-brand-cyan flex-shrink-0"}),d.jsx("span",{children:"USDC trên Solana Devnet"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Qy,{className:"w-4 h-4 text-brand-lavender flex-shrink-0"}),d.jsx("span",{children:"Trải nghiệm qua Expo"})]})]})]}),d.jsx("div",{className:"lg:col-span-5 flex flex-col items-center justify-center relative",children:d.jsxs("div",{className:"relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/18] rounded-[44px] bg-brand-inkBlack border-4 border-brand-inkBlack p-3 shadow-brutal-xl",children:[d.jsx("div",{className:"relative w-full h-full rounded-[36px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream",children:d.jsx(Jv,{activeTab:"send"})}),d.jsxs("div",{className:"absolute -top-4 -right-4 bg-brand-lime text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5 animate-bounce pointer-events-none",children:[d.jsx(Aa,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Solana Devnet"})]}),d.jsx("div",{className:"absolute -bottom-4 -left-4 bg-brand-cyan text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5 pointer-events-none",children:d.jsx("span",{children:"Bấm trực tiếp để thử nghiệm"})})]})})]})]})},wT=()=>{const{t}=Kn(),[e,n]=Ue.useState("send");return d.jsx("section",{id:"experience",className:"relative w-full bg-brand-warmCream text-brand-inkBlack py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14 sm:mb-20",children:[d.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lavender border-2 border-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:d.jsx("span",{children:t.experience.tag})}),d.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-5",children:t.experience.headline}),d.jsx("p",{className:"text-base sm:text-lg text-stone-700 font-medium leading-relaxed",children:t.experience.subtitle})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-16",children:[d.jsxs("div",{className:"bg-white border-3 border-brand-inkBlack rounded-2xl p-6 shadow-brutal card-brutal-interactive",children:[d.jsx("div",{className:"w-12 h-12 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center font-black text-xl mb-4 shadow-brutal-xs",children:d.jsx(Go,{className:"w-6 h-6 text-brand-inkBlack"})}),d.jsx("h3",{className:"text-xl font-black text-brand-inkBlack mb-2",children:t.callouts.balance}),d.jsx("p",{className:"text-sm font-medium text-stone-600 leading-relaxed",children:t.callouts.balanceDesc})]}),d.jsxs("div",{className:"bg-white border-3 border-brand-inkBlack rounded-2xl p-6 shadow-brutal card-brutal-interactive",children:[d.jsx("div",{className:"w-12 h-12 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center font-black text-xl mb-4 shadow-brutal-xs",children:d.jsx(ev,{className:"w-6 h-6 text-brand-inkBlack"})}),d.jsx("h3",{className:"text-xl font-black text-brand-inkBlack mb-2",children:t.callouts.receive}),d.jsx("p",{className:"text-sm font-medium text-stone-600 leading-relaxed",children:t.callouts.receiveDesc})]}),d.jsxs("div",{className:"bg-white border-3 border-brand-inkBlack rounded-2xl p-6 shadow-brutal card-brutal-interactive",children:[d.jsx("div",{className:"w-12 h-12 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center font-black text-xl mb-4 shadow-brutal-xs",children:d.jsx(ov,{className:"w-6 h-6 text-brand-inkBlack"})}),d.jsx("h3",{className:"text-xl font-black text-brand-inkBlack mb-2",children:t.callouts.transfer}),d.jsx("p",{className:"text-sm font-medium text-stone-600 leading-relaxed",children:t.callouts.transferDesc})]})]}),d.jsxs("div",{className:"bg-white border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-10 pb-6 border-b-2 border-brand-inkBlack",children:[d.jsxs("button",{type:"button",onClick:()=>n("send"),className:`px-5 py-2.5 rounded-xl font-black text-sm border-2 border-brand-inkBlack transition-all flex items-center gap-2 cursor-pointer ${e==="send"?"bg-brand-lavender text-brand-inkBlack shadow-brutal-sm -translate-y-0.5":"bg-brand-warmCream text-stone-700 hover:bg-stone-100"}`,"aria-pressed":e==="send",children:[d.jsx(jo,{className:"w-4 h-4"}),d.jsx("span",{children:t.experience.tabSend})]}),d.jsxs("button",{type:"button",onClick:()=>n("receive"),className:`px-5 py-2.5 rounded-xl font-black text-sm border-2 border-brand-inkBlack transition-all flex items-center gap-2 cursor-pointer ${e==="receive"?"bg-brand-cyan text-brand-inkBlack shadow-brutal-sm -translate-y-0.5":"bg-brand-warmCream text-stone-700 hover:bg-stone-100"}`,"aria-pressed":e==="receive",children:[d.jsx(nd,{className:"w-4 h-4"}),d.jsx("span",{children:t.experience.tabReceive})]}),d.jsxs("button",{type:"button",onClick:()=>n("track"),className:`px-5 py-2.5 rounded-xl font-black text-sm border-2 border-brand-inkBlack transition-all flex items-center gap-2 cursor-pointer ${e==="track"?"bg-brand-lime text-brand-inkBlack shadow-brutal-sm -translate-y-0.5":"bg-brand-warmCream text-stone-700 hover:bg-stone-100"}`,"aria-pressed":e==="track",children:[d.jsx(iS,{className:"w-4 h-4"}),d.jsx("span",{children:t.experience.tabTrack})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[d.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start",children:[e==="send"&&d.jsxs("div",{className:"animate-fadeIn",children:[d.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender/30 border border-brand-inkBlack rounded-lg text-xs font-black uppercase mb-3",children:"Luồng chuyển stablecoin"}),d.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-brand-inkBlack mb-4",children:t.experience.sendTitle}),d.jsx("p",{className:"text-base text-stone-600 leading-relaxed mb-6 font-medium",children:t.experience.sendDesc}),d.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-lg mb-6",children:[d.jsxs("div",{className:"flex items-start gap-3 p-3 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl",children:[d.jsx("div",{className:"p-1.5 bg-brand-lime rounded-lg border border-brand-inkBlack",children:d.jsx(_s,{className:"w-4 h-4 text-brand-inkBlack"})}),d.jsxs("div",{children:[d.jsx("div",{className:"text-sm font-black",children:"Nhận diện qua số điện thoại"}),d.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Gửi tiền nhanh tới người thân bạn bè mà không cần nhớ chuỗi ký tự dài."})]})]}),d.jsxs("div",{className:"flex items-start gap-3 p-3 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl",children:[d.jsx("div",{className:"p-1.5 bg-brand-cyan rounded-lg border border-brand-inkBlack",children:d.jsx(nv,{className:"w-4 h-4 text-brand-inkBlack"})}),d.jsxs("div",{children:[d.jsx("div",{className:"text-sm font-black",children:"Quét mã QR tiện lợi"}),d.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Quét tức thì mã QR nhận thanh toán chỉ với một chạm camera."})]})]})]})]}),e==="receive"&&d.jsxs("div",{className:"animate-fadeIn",children:[d.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cyan/30 border border-brand-inkBlack rounded-lg text-xs font-black uppercase mb-3",children:"Luồng nhận stablecoin"}),d.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-brand-inkBlack mb-4",children:t.experience.receiveTitle}),d.jsx("p",{className:"text-base text-stone-600 leading-relaxed mb-6 font-medium",children:t.experience.receiveDesc}),d.jsxs("div",{className:"p-4 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-2xl mb-6 shadow-brutal-xs",children:[d.jsx("div",{className:"text-sm font-black mb-1",children:"Mã QR cá nhân luôn sẵn sàng"}),d.jsx("div",{className:"text-xs text-stone-700 leading-relaxed font-medium",children:"Mỗi ví được cấp mã QR chuẩn hóa và liên kết định danh người nhận an toàn trên môi trường thử nghiệm Solana Devnet."})]})]}),e==="track"&&d.jsxs("div",{className:"animate-fadeIn",children:[d.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lime/30 border border-brand-inkBlack rounded-lg text-xs font-black uppercase mb-3",children:"Quản lý số dư & Lịch sử"}),d.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-brand-inkBlack mb-4",children:t.experience.trackTitle}),d.jsx("p",{className:"text-base text-stone-600 leading-relaxed mb-6 font-medium",children:t.experience.trackDesc}),d.jsxs("div",{className:"p-4 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl mb-6 shadow-brutal-xs",children:[d.jsx("div",{className:"text-sm font-black mb-1",children:"Tốc độ tức thời của Solana"}),d.jsx("div",{className:"text-xs text-stone-700 leading-relaxed font-medium",children:"Các giao dịch Devnet được xác nhận trong vòng 1-2 giây, đảm bảo trải nghiệm liền mạch không độ trễ."})]})]}),d.jsx("div",{className:"text-xs font-extrabold text-stone-700 bg-brand-paleYellow px-3 py-1.5 rounded-lg border border-brand-inkBlack mb-3",children:"💡 Mẹo: Bạn có thể bấm trực tiếp các nút trên màn hình điện thoại bên phải để trải nghiệm luồng thao tác."}),d.jsxs("div",{className:"text-xs font-bold text-stone-500 italic",children:["* ",t.experience.illustrationNotice]})]}),d.jsx("div",{className:"lg:col-span-5 flex justify-center",children:d.jsx("div",{className:"w-full max-w-[330px] aspect-[9/18] rounded-[40px] bg-brand-inkBlack border-4 border-brand-inkBlack p-2.5 shadow-brutal-lg",children:d.jsx("div",{className:"w-full h-full rounded-[32px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream",children:d.jsx(Jv,{activeTab:e,onTabChange:n})})})})]})]})]})})},TT=()=>{const{t}=Kn(),e=()=>{const n=document.querySelector("#demo");n==null||n.scrollIntoView({behavior:"smooth"})};return d.jsx("section",{id:"how-it-works",className:"scroll-mt-16 relative w-full bg-brand-deepPurple text-brand-offWhite py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[d.jsx("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lime text-brand-lime font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:d.jsx("span",{children:t.howItWorks.tag})}),d.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-5",children:t.howItWorks.headline}),d.jsx("p",{className:"text-base sm:text-lg text-stone-300 font-medium leading-relaxed",children:t.howItWorks.subtitle})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12",children:[d.jsxs("div",{className:"relative bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsx("span",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack font-black text-xl flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs",children:"01"}),d.jsx(Ta,{className:"w-6 h-6 text-brand-lavender"})]}),d.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:t.howItWorks.step1Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:t.howItWorks.step1Desc})]}),d.jsx("div",{className:"pt-6 mt-6 border-t border-brand-lavender/20",children:d.jsxs("button",{onClick:e,className:"text-xs font-black text-brand-lime hover:underline inline-flex items-center gap-1",children:[d.jsx("span",{children:"Nhận email hướng dẫn"}),d.jsx(wa,{className:"w-3.5 h-3.5"})]})})]}),d.jsxs("div",{className:"relative bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsx("span",{className:"w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack font-black text-xl flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs",children:"02"}),d.jsx(oS,{className:"w-6 h-6 text-brand-cyan"})]}),d.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:t.howItWorks.step2Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:t.howItWorks.step2Desc})]}),d.jsx("div",{className:"pt-6 mt-6 border-t border-brand-cyan/20",children:d.jsx("span",{className:"text-xs font-bold text-stone-400",children:"Hỗ trợ thiết bị iOS & Android"})})]}),d.jsxs("div",{className:"relative bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsx("span",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack font-black text-xl flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs",children:"03"}),d.jsx(Yy,{className:"w-6 h-6 text-brand-lime"})]}),d.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:t.howItWorks.step3Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:t.howItWorks.step3Desc})]}),d.jsx("div",{className:"pt-6 mt-6 border-t border-brand-lime/20",children:d.jsx("span",{className:"text-xs font-bold text-brand-lime",children:"Tài sản thử nghiệm miễn phí"})})]})]}),d.jsxs("div",{className:"bg-brand-paleYellow text-brand-inkBlack border-4 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[d.jsx("div",{className:"w-12 h-12 rounded-xl bg-amber-400 border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:d.jsx(lS,{className:"w-7 h-7 text-brand-inkBlack"})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("div",{className:"text-sm font-black uppercase tracking-wider text-amber-900 mb-1",children:t.howItWorks.warningTitle}),d.jsx("div",{className:"text-base font-extrabold text-brand-inkBlack leading-snug",children:t.howItWorks.warningText})]})]})]})})},AT=()=>{const{t}=Kn();return d.jsx("section",{className:"w-full bg-brand-warmCream text-brand-inkBlack py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack",children:d.jsx("div",{className:"max-w-5xl mx-auto",children:d.jsxs("div",{className:"bg-white border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal-lg relative overflow-hidden",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase shadow-brutal-xs",children:[d.jsx(Vx,{className:"w-4 h-4 text-brand-inkBlack"}),d.jsx("span",{children:t.stablecoin.badge})]}),d.jsx("span",{className:"text-xs font-bold text-stone-500 uppercase tracking-wider",children:"Solana USDC"})]}),d.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-brand-inkBlack tracking-tight mb-4",children:t.stablecoin.headline}),d.jsx("div",{className:"bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl p-5 mb-5 shadow-brutal-xs",children:d.jsxs("p",{className:"text-base sm:text-lg font-bold text-stone-800 leading-relaxed",children:['"',t.stablecoin.content,'"']})}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-bold text-stone-600",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(qy,{className:"w-4 h-4 text-emerald-600 flex-shrink-0"}),d.jsx("span",{children:t.stablecoin.highlightNote})]}),d.jsxs("div",{className:"flex items-center gap-1.5 text-stone-500",children:[d.jsx(Jy,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Tìm hiểu thêm trong phần FAQ bên dưới"})]})]})]})})})},CT=({onNavigate:t})=>{const{t:e}=Kn(),n=()=>{t("/builders"),window.scrollTo({top:0,behavior:"smooth"})};return d.jsx("section",{className:"relative w-full bg-brand-deepPurple text-brand-offWhite py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[d.jsx(Ky,{className:"w-3.5 h-3.5 text-brand-lime"}),d.jsx("span",{children:e.miniApps.status})]}),d.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-5",children:e.miniApps.headline}),d.jsx("p",{className:"text-base sm:text-lg text-stone-300 font-medium leading-relaxed",children:e.miniApps.description})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14",children:[d.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive",children:[d.jsxs("div",{children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:d.jsx(Dx,{className:"w-6 h-6"})}),d.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lavender mb-2",children:"Kiến trúc module 01"}),d.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.miniApps.card1Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.miniApps.card1Desc})]}),d.jsxs("div",{className:"mt-8 pt-4 border-t border-brand-lavender/20 flex items-center gap-2 text-xs font-bold text-stone-400",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime"}),d.jsx("span",{children:"Định hướng tích hợp"})]})]}),d.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive",children:[d.jsxs("div",{children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:d.jsx(Aa,{className:"w-6 h-6"})}),d.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lime mb-2",children:"Kiến trúc module 02"}),d.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.miniApps.card2Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.miniApps.card2Desc})]}),d.jsxs("div",{className:"mt-8 pt-4 border-t border-brand-lime/20 flex items-center gap-2 text-xs font-bold text-stone-400",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-cyan"}),d.jsx("span",{children:"Định hướng tích hợp"})]})]}),d.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive",children:[d.jsxs("div",{children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:d.jsx(eS,{className:"w-6 h-6"})}),d.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-cyan mb-2",children:"Kiến trúc module 03"}),d.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.miniApps.card3Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.miniApps.card3Desc})]}),d.jsxs("div",{className:"mt-8 pt-4 border-t border-brand-cyan/20 flex items-center gap-2 text-xs font-bold text-stone-400",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lavender"}),d.jsx("span",{children:"Định hướng tích hợp"})]})]})]}),d.jsxs("div",{className:"bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-10 shadow-brutal-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[d.jsxs("div",{className:"max-w-2xl",children:[d.jsx("h3",{className:"text-2xl sm:text-3xl font-black mb-2",children:"Bạn là nhà phát triển muốn thử nghiệm mini-app?"}),d.jsx("p",{className:"text-base font-bold text-stone-800 leading-relaxed",children:"Chúng tôi đang trong giai đoạn tiếp nhận ý tưởng và phối hợp thử nghiệm trực tiếp cùng các builder quan tâm."})]}),d.jsxs("button",{onClick:n,className:"btn-brutal-primary bg-brand-deepPurple text-brand-offWhite border-3 border-brand-inkBlack px-6 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 shadow-brutal flex-shrink-0",children:[d.jsx("span",{children:e.miniApps.cta}),d.jsx(wa,{className:"w-4 h-4 text-brand-lime"})]})]})]})})},RT=()=>{const{t,lang:e}=Kn(),[n,i]=Ue.useState(!1),r=async()=>{var o;try{if((o=navigator==null?void 0:navigator.clipboard)!=null&&o.writeText){await navigator.clipboard.writeText(Bt.contactEmail),i(!0),setTimeout(()=>i(!1),2500);return}}catch{}try{const l=document.createElement("textarea");l.value=Bt.contactEmail,l.style.position="fixed",l.style.left="-999999px",l.style.top="-999999px",document.body.appendChild(l),l.focus(),l.select(),document.execCommand("copy"),document.body.removeChild(l),i(!0),setTimeout(()=>i(!1),2500)}catch{}},s=e==="vi"?Bt.demoMailBodyVi:Bt.demoMailBodyEn,a=`mailto:${Bt.contactEmail}?subject=${encodeURIComponent(Bt.demoMailSubject)}&body=${encodeURIComponent(s)}`;return d.jsx("section",{id:"demo",className:"scroll-mt-16 relative w-full bg-brand-warmCream text-brand-inkBlack py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack",children:d.jsxs("div",{className:"max-w-5xl mx-auto",children:[d.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan border-2 border-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[d.jsx(Aa,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:t.demoGuide.networkBadge})]}),d.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-5",children:t.demoGuide.headline}),d.jsx("p",{className:"text-base sm:text-lg text-stone-700 font-medium leading-relaxed",children:t.demoGuide.subtitle})]}),d.jsx("div",{className:"bg-white border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl mb-8",children:d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[d.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-4",children:[d.jsx("h3",{className:"text-xl font-black text-brand-inkBlack mb-1",children:t.demoGuide.stepsTitle}),d.jsxs("div",{className:"space-y-3 text-sm font-bold text-stone-700",children:[d.jsxs("div",{className:"p-3 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl flex items-center gap-3",children:[d.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-lavender border border-brand-inkBlack flex items-center justify-center font-black text-xs flex-shrink-0",children:"1"}),d.jsx("span",{children:t.demoGuide.stepA})]}),d.jsxs("div",{className:"p-3 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl flex items-center gap-3",children:[d.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-cyan border border-brand-inkBlack flex items-center justify-center font-black text-xs flex-shrink-0",children:"2"}),d.jsx("span",{children:t.demoGuide.stepB})]}),d.jsxs("div",{className:"p-3 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl flex items-center gap-3",children:[d.jsx("span",{className:"w-6 h-6 rounded-full bg-brand-lime border border-brand-inkBlack flex items-center justify-center font-black text-xs flex-shrink-0",children:"3"}),d.jsx("span",{children:t.demoGuide.stepC})]})]}),d.jsxs("div",{className:"flex items-center gap-2 mt-2 text-xs font-bold text-stone-500",children:[d.jsx(Xy,{className:"w-4 h-4 text-amber-600 flex-shrink-0"}),d.jsx("span",{children:"Bản thử nghiệm được cấp quyền qua email phục vụ kiểm thử cộng đồng."})]})]}),d.jsxs("div",{className:"lg:col-span-5 bg-brand-deepPurple text-brand-offWhite border-3 border-brand-inkBlack rounded-2xl p-6 shadow-brutal flex flex-col items-stretch text-center",children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack border-2 border-brand-inkBlack flex items-center justify-center mx-auto mb-4 shadow-brutal-xs",children:d.jsx(Ta,{className:"w-6 h-6"})}),d.jsx("div",{className:"text-xs font-black uppercase text-brand-lavender tracking-wider mb-2",children:t.demoGuide.emailLabel}),d.jsx("div",{className:"bg-brand-darkSurface border-2 border-brand-inkBlack rounded-xl p-3 text-sm sm:text-base font-black text-brand-lime tracking-wide select-all mb-5",children:Bt.contactEmail}),d.jsxs("div",{className:"flex flex-col gap-3",children:[d.jsxs("a",{href:a,className:"btn-brutal-primary w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs cursor-pointer",children:[d.jsx(Ta,{className:"w-4 h-4"}),d.jsx("span",{children:t.demoGuide.btnMailto})]}),d.jsx("button",{type:"button",onClick:r,className:`btn-brutal w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs transition-colors cursor-pointer ${n?"bg-brand-lime text-brand-inkBlack":"bg-brand-warmCream text-brand-inkBlack"}`,"aria-label":"Sao chép địa chỉ email",children:n?d.jsxs(d.Fragment,{children:[d.jsx(_s,{className:"w-4 h-4 text-emerald-800 stroke-[3]"}),d.jsx("span",{children:t.demoGuide.btnCopied})]}):d.jsxs(d.Fragment,{children:[d.jsx(Ml,{className:"w-4 h-4"}),d.jsx("span",{children:t.demoGuide.btnCopy})]})})]}),Bt.demoUrl]})]})})]})})},NT=()=>{const{t}=Kn(),[e,n]=Ue.useState(0),i=[{q:t.faq.q1,a:t.faq.a1},{q:t.faq.q2,a:t.faq.a2},{q:t.faq.q3,a:t.faq.a3},{q:t.faq.q4,a:t.faq.a4},{q:t.faq.q5,a:t.faq.a5},{q:t.faq.q6,a:t.faq.a6}],r=s=>{n(e===s?null:s)};return d.jsx("section",{id:"faq",className:"scroll-mt-16 relative w-full bg-brand-deepPurple text-brand-offWhite py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack",children:d.jsxs("div",{className:"max-w-4xl mx-auto",children:[d.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16",children:[d.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[d.jsx(Vx,{className:"w-3.5 h-3.5 text-brand-cyan"}),d.jsx("span",{children:t.faq.tag})]}),d.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-4",children:t.faq.headline})]}),d.jsx("div",{className:"space-y-4",children:i.map((s,a)=>{const o=e===a,l=`faq-btn-${a}`,c=`faq-panel-${a}`;return d.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl overflow-hidden shadow-brutal transition-all",children:[d.jsxs("button",{id:l,"aria-expanded":o,"aria-controls":c,onClick:()=>r(a),className:"w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-black text-base sm:text-lg text-brand-offWhite hover:text-brand-lavender transition-colors select-none",children:[d.jsxs("span",{className:"flex items-center gap-3",children:[d.jsxs("span",{className:"w-7 h-7 rounded-lg bg-brand-lavender text-brand-inkBlack text-xs font-black flex items-center justify-center flex-shrink-0 border border-brand-inkBlack",children:["Q",a+1]}),d.jsx("span",{children:s.q})]}),d.jsx(Wy,{className:`w-5 h-5 flex-shrink-0 transition-transform duration-200 text-brand-lime ${o?"rotate-180":""}`})]}),o&&d.jsx("div",{id:c,role:"region","aria-labelledby":l,className:"px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base font-medium text-stone-300 leading-relaxed border-t border-brand-lavender/15 animate-in fade-in duration-150",children:s.a})]},a)})})]})})},kT=({onNavigate:t})=>d.jsxs("main",{className:"w-full min-h-screen",children:[d.jsx(ET,{onNavigate:t}),d.jsx(wT,{}),d.jsx(AT,{}),d.jsx(TT,{}),d.jsx(CT,{onNavigate:t}),d.jsx(RT,{}),d.jsx(NT,{})]}),PT=({onNavigate:t})=>{const{t:e,lang:n}=Kn(),[i,r]=Ue.useState(!1),s=async()=>{var l;try{if((l=navigator==null?void 0:navigator.clipboard)!=null&&l.writeText){await navigator.clipboard.writeText(Bt.contactEmail),r(!0),setTimeout(()=>r(!1),2500);return}}catch{}try{const c=document.createElement("textarea");c.value=Bt.contactEmail,c.style.position="fixed",c.style.left="-999999px",c.style.top="-999999px",document.body.appendChild(c),c.focus(),c.select(),document.execCommand("copy"),document.body.removeChild(c),r(!0),setTimeout(()=>r(!1),2500)}catch{}},a=n==="vi"?Bt.builderMailBodyVi:Bt.builderMailBodyEn,o=`mailto:${Bt.contactEmail}?subject=${encodeURIComponent(Bt.builderMailSubject)}&body=${encodeURIComponent(a)}`;return d.jsxs("div",{className:"w-full bg-brand-deepPurple text-brand-offWhite min-h-screen selection:bg-brand-lime selection:text-brand-inkBlack",children:[d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6",children:d.jsxs("button",{onClick:()=>{t("/"),window.scrollTo({top:0,behavior:"smooth"})},className:"inline-flex items-center gap-2 px-4 py-2 bg-brand-darkSurface text-brand-offWhite border-2 border-brand-inkBlack rounded-xl font-bold text-xs shadow-brutal-xs hover:text-brand-lime transition-colors",children:[d.jsx(Gy,{className:"w-4 h-4"}),d.jsx("span",{children:e.builders.backHome})]})}),d.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-16 sm:pb-28",children:d.jsxs("div",{className:"max-w-3xl",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender text-xs font-black uppercase tracking-wider mb-6 shadow-brutal-xs",children:[d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse"}),d.jsx("span",{children:e.builders.badgeStatus})]}),d.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black text-brand-offWhite tracking-tight leading-[1.1] mb-6",children:e.builders.headline}),d.jsx("p",{className:"text-lg sm:text-xl text-stone-300 font-medium leading-relaxed mb-8",children:e.builders.subtitle}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-4",children:[d.jsxs("a",{href:o,className:"btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal",children:[d.jsx(Ta,{className:"w-5 h-5"}),d.jsx("span",{children:e.builders.cta})]}),d.jsx("button",{onClick:s,className:"btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal",children:i?d.jsxs(d.Fragment,{children:[d.jsx(_s,{className:"w-5 h-5 text-emerald-700"}),d.jsx("span",{children:e.builders.btnCopied})]}):d.jsxs(d.Fragment,{children:[d.jsx(Ml,{className:"w-5 h-5"}),d.jsx("span",{children:e.builders.btnCopy})]})})]})]})}),d.jsx("section",{className:"w-full bg-brand-warmCream text-brand-inkBlack py-20 px-4 sm:px-6 lg:px-8 border-y-4 border-brand-inkBlack",children:d.jsx("div",{className:"max-w-7xl mx-auto",children:d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[d.jsxs("div",{className:"lg:col-span-7",children:[d.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs",children:e.builders.tag}),d.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-brand-inkBlack tracking-tight mb-5",children:e.builders.whatIsTitle}),d.jsx("p",{className:"text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6",children:e.builders.whatIsDesc}),d.jsxs("div",{className:"bg-white border-3 border-brand-inkBlack rounded-2xl p-5 shadow-brutal-sm flex items-start gap-3",children:[d.jsx(sS,{className:"w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"}),d.jsx("p",{className:"text-xs font-bold text-stone-700 leading-relaxed",children:e.builders.statusCardDesc})]})]}),d.jsx("div",{className:"lg:col-span-5 flex justify-center",children:d.jsxs("div",{className:"w-full max-w-sm bg-white border-4 border-brand-inkBlack rounded-3xl p-6 shadow-brutal-xl",children:[d.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-500 mb-4 pb-2 border-b-2 border-brand-inkBlack",children:"Cấu trúc Mini-App Concept"}),d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"p-3 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs",children:[d.jsx("span",{children:"N.E.D Wallet Core UI"}),d.jsx("span",{className:"text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack",children:"Host"})]}),d.jsxs("div",{className:"p-4 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-2xl font-black text-sm text-center shadow-brutal-xs",children:[d.jsx("div",{className:"text-xs text-stone-500 uppercase font-black mb-1",children:"Sandbox Container"}),d.jsx("div",{children:"Ứng dụng của bạn (Mini-App)"}),d.jsx("div",{className:"text-[10px] text-stone-600 font-bold mt-1",children:"Dịch vụ • Minigame • Tiện ích"})]}),d.jsxs("div",{className:"p-3 bg-brand-cyan border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs",children:[d.jsx("span",{children:"Solana Devnet Settlement"}),d.jsx("span",{className:"text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack",children:"USDC"})]})]})]})})]})})}),d.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28",children:[d.jsx("div",{className:"text-center max-w-3xl mx-auto mb-16",children:d.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-brand-offWhite tracking-tight mb-4",children:e.builders.whyBuildTitle})}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",children:[d.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive",children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:d.jsx(cS,{className:"w-6 h-6"})}),d.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.builders.why1Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.why1Desc})]}),d.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive",children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:d.jsx(uS,{className:"w-6 h-6"})}),d.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.builders.why2Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.why2Desc})]}),d.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive",children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:d.jsx(Dx,{className:"w-6 h-6"})}),d.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.builders.why3Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.why3Desc})]})]})]}),d.jsx("section",{className:"w-full bg-brand-darkSurface text-brand-offWhite py-20 px-4 sm:px-6 lg:px-8 border-t-4 border-brand-inkBlack",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[d.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs",children:"Lộ trình tiếp cận"}),d.jsx("h2",{className:"text-3xl sm:text-4xl font-black tracking-tight mb-4",children:e.builders.journeyTitle}),d.jsx("p",{className:"text-base text-stone-300 font-medium",children:e.builders.journeySubtitle})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",children:[d.jsxs("div",{className:"bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal",children:[d.jsx("div",{className:"text-3xl font-black text-brand-lavender mb-4",children:e.builders.step1Num}),d.jsx("h3",{className:"text-xl font-black mb-2",children:e.builders.step1Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step1Desc})]}),d.jsxs("div",{className:"bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal",children:[d.jsx("div",{className:"text-3xl font-black text-brand-cyan mb-4",children:e.builders.step2Num}),d.jsx("h3",{className:"text-xl font-black mb-2",children:e.builders.step2Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step2Desc})]}),d.jsxs("div",{className:"bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal",children:[d.jsx("div",{className:"text-3xl font-black text-brand-lime mb-4",children:e.builders.step3Num}),d.jsx("h3",{className:"text-xl font-black mb-2",children:e.builders.step3Title}),d.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step3Desc})]})]})]})}),d.jsx("section",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:d.jsxs("div",{className:"bg-brand-lime text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-12 shadow-brutal-xl text-center",children:[d.jsx(Aa,{className:"w-10 h-10 mx-auto mb-4 text-brand-inkBlack"}),d.jsx("h2",{className:"text-3xl sm:text-4xl font-black tracking-tight mb-4",children:e.builders.bottomCtaTitle}),d.jsx("p",{className:"text-base sm:text-lg font-bold text-stone-800 max-w-2xl mx-auto mb-8",children:e.builders.bottomCtaDesc}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[d.jsxs("a",{href:o,className:"btn-brutal-primary bg-brand-deepPurple text-brand-offWhite px-8 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto",children:[d.jsx(Ta,{className:"w-5 h-5 text-brand-lime"}),d.jsx("span",{children:"Gửi đề xuất hợp tác"})]}),d.jsx("button",{onClick:s,className:"btn-brutal-secondary bg-white px-7 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto",children:i?d.jsxs(d.Fragment,{children:[d.jsx(_s,{className:"w-5 h-5 text-emerald-700"}),d.jsx("span",{children:e.builders.btnCopied})]}):d.jsxs(d.Fragment,{children:[d.jsx(Ml,{className:"w-5 h-5"}),d.jsx("span",{children:e.builders.btnCopy})]})})]})]})})]})},DT=()=>{const[t,e]=Ue.useState(()=>window.location.pathname.startsWith("/builders")?"/builders":"/");Ue.useEffect(()=>{const i=()=>{e(window.location.pathname.startsWith("/builders")?"/builders":"/")};return window.addEventListener("popstate",i),()=>window.removeEventListener("popstate",i)},[]);const n=i=>{i.startsWith("#")||i!==t&&(window.history.pushState({},"",i),e(i))};return d.jsx(Dy,{children:d.jsxs("div",{className:"flex flex-col min-h-screen bg-brand-deepPurple font-sans text-brand-inkBlack selection:bg-brand-lime selection:text-brand-inkBlack",children:[d.jsx(dS,{currentPath:t,onNavigate:n}),d.jsx("div",{className:"flex-grow",children:t==="/builders"?d.jsx(PT,{onNavigate:n}):d.jsx(kT,{onNavigate:n})}),d.jsx(hS,{currentPath:t,onNavigate:n})]})})};lu.createRoot(document.getElementById("root")).render(d.jsx(y0.StrictMode,{children:d.jsx(DT,{})}));
