(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function M0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mm={exports:{}},Pl={},Em={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),E0=Symbol.for("react.portal"),T0=Symbol.for("react.fragment"),A0=Symbol.for("react.strict_mode"),N0=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),k0=Symbol.for("react.context"),R0=Symbol.for("react.forward_ref"),D0=Symbol.for("react.suspense"),P0=Symbol.for("react.memo"),L0=Symbol.for("react.lazy"),uf=Symbol.iterator;function U0(t){return t===null||typeof t!="object"?null:(t=uf&&t[uf]||t["@@iterator"],typeof t=="function"?t:null)}var Tm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Am=Object.assign,Nm={};function ks(t,e,n){this.props=t,this.context=e,this.refs=Nm,this.updater=n||Tm}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cm(){}Cm.prototype=ks.prototype;function Ku(t,e,n){this.props=t,this.context=e,this.refs=Nm,this.updater=n||Tm}var Qu=Ku.prototype=new Cm;Qu.constructor=Ku;Am(Qu,ks.prototype);Qu.isPureReactComponent=!0;var hf=Array.isArray,km=Object.prototype.hasOwnProperty,Zu={current:null},Rm={key:!0,ref:!0,__self:!0,__source:!0};function Dm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)km.call(e,i)&&!Rm.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Ra,type:t,key:s,ref:a,props:r,_owner:Zu.current}}function I0(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ju(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function B0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ff=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B0(""+t.key):e.toString(36)}function Po(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ra:case E0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+rc(a,0):i,hf(r)?(n="",t!=null&&(n=t.replace(ff,"$&/")+"/"),Po(r,e,n,"",function(d){return d})):r!=null&&(Ju(r)&&(r=I0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ff,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",hf(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+rc(s,l);a+=Po(s,e,n,c,r)}else if(c=U0(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+rc(s,l++),a+=Po(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Po(t,i,"","",function(s){return e.call(n,s,r++)}),i}function F0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Lo={transition:null},O0={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:Zu};function Pm(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!Ju(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=ks;Oe.Fragment=T0;Oe.Profiler=N0;Oe.PureComponent=Ku;Oe.StrictMode=A0;Oe.Suspense=D0;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;Oe.act=Pm;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Am({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Zu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)km.call(e,c)&&!Rm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:Ra,type:t.type,key:r,ref:s,props:i,_owner:a}};Oe.createContext=function(t){return t={$$typeof:k0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C0,_context:t},t.Consumer=t};Oe.createElement=Dm;Oe.createFactory=function(t){var e=Dm.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:R0,render:t}};Oe.isValidElement=Ju;Oe.lazy=function(t){return{$$typeof:L0,_payload:{_status:-1,_result:t},_init:F0}};Oe.memo=function(t,e){return{$$typeof:P0,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Lo.transition;Lo.transition={};try{t()}finally{Lo.transition=e}};Oe.unstable_act=Pm;Oe.useCallback=function(t,e){return Xt.current.useCallback(t,e)};Oe.useContext=function(t){return Xt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Xt.current.useEffect(t,e)};Oe.useId=function(){return Xt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Xt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Xt.current.useRef(t)};Oe.useState=function(t){return Xt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Xt.current.useTransition()};Oe.version="18.3.1";Em.exports=Oe;var oe=Em.exports;const j0=M0(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=oe,H0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),G0=Object.prototype.hasOwnProperty,W0=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X0={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)G0.call(e,i)&&!X0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:H0,type:t,key:s,ref:a,props:r,_owner:W0.current}}Pl.Fragment=V0;Pl.jsx=Lm;Pl.jsxs=Lm;Mm.exports=Pl;var o=Mm.exports,dd={},Um={exports:{}},pn={},Im={exports:{}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,q){var K=D.length;D.push(q);e:for(;0<K;){var ee=K-1>>>1,me=D[ee];if(0<r(me,q))D[ee]=q,D[K]=me,K=ee;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var q=D[0],K=D.pop();if(K!==q){D[0]=K;e:for(var ee=0,me=D.length,je=me>>>1;ee<je;){var G=2*(ee+1)-1,te=D[G],de=G+1,le=D[de];if(0>r(te,K))de<me&&0>r(le,te)?(D[ee]=le,D[de]=K,ee=de):(D[ee]=te,D[G]=K,ee=G);else if(de<me&&0>r(le,K))D[ee]=le,D[de]=K,ee=de;else break e}}return q}function r(D,q){var K=D.sortIndex-q.sortIndex;return K!==0?K:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],d=[],h=1,p=null,f=3,x=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var q=n(d);q!==null;){if(q.callback===null)i(d);else if(q.startTime<=D)i(d),q.sortIndex=q.expirationTime,e(c,q);else break;q=n(d)}}function w(D){if(y=!1,_(D),!g)if(n(c)!==null)g=!0,z(C);else{var q=n(d);q!==null&&Q(w,q.startTime-D)}}function C(D,q){g=!1,y&&(y=!1,u(k),k=-1),x=!0;var K=f;try{for(_(q),p=n(c);p!==null&&(!(p.expirationTime>q)||D&&!M());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,f=p.priorityLevel;var me=ee(p.expirationTime<=q);q=t.unstable_now(),typeof me=="function"?p.callback=me:p===n(c)&&i(c),_(q)}else i(c);p=n(c)}if(p!==null)var je=!0;else{var G=n(d);G!==null&&Q(w,G.startTime-q),je=!1}return je}finally{p=null,f=K,x=!1}}var N=!1,T=null,k=-1,W=5,b=-1;function M(){return!(t.unstable_now()-b<W)}function H(){if(T!==null){var D=t.unstable_now();b=D;var q=!0;try{q=T(!0,D)}finally{q?j():(N=!1,T=null)}}else N=!1}var j;if(typeof v=="function")j=function(){v(H)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=H,j=function(){Z.postMessage(null)}}else j=function(){m(H,0)};function z(D){T=D,N||(N=!0,j())}function Q(D,q){k=m(function(){D(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||x||(g=!0,z(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var K=f;f=q;try{return D()}finally{f=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=f;f=D;try{return q()}finally{f=K}},t.unstable_scheduleCallback=function(D,q,K){var ee=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ee+K:ee):K=ee,D){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=K+me,D={id:h++,callback:q,priorityLevel:D,startTime:K,expirationTime:me,sortIndex:-1},K>ee?(D.sortIndex=K,e(d,D),n(c)===null&&D===n(d)&&(y?(u(k),k=-1):y=!0,Q(w,K-ee))):(D.sortIndex=me,e(c,D),g||x||(g=!0,z(C))),D},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(D){var q=f;return function(){var K=f;f=q;try{return D.apply(this,arguments)}finally{f=K}}}})(Bm);Im.exports=Bm;var q0=Im.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=oe,fn=q0;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fm=new Set,fa={};function kr(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(fa[t]=e,t=0;t<e.length;t++)Fm.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,Y0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pf={},mf={};function K0(t){return ud.call(mf,t)?!0:ud.call(pf,t)?!1:Y0.test(t)?mf[t]=!0:(pf[t]=!0,!1)}function Q0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Z0(t,e,n,i){if(e===null||typeof e>"u"||Q0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var eh=/[\-:]([a-z])/g;function th(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(eh,th);Ut[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(eh,th);Ut[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(eh,th);Ut[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function nh(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Z0(e,n,r,i)&&(n=null),i||r===null?K0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var yi=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),Om=Symbol.for("react.provider"),jm=Symbol.for("react.context"),rh=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),sh=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),zm=Symbol.for("react.offscreen"),xf=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=xf&&t[xf]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,sc;function Zs(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var ac=!1;function oc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function J0(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case $r:return"Portal";case hd:return"Profiler";case ih:return"StrictMode";case fd:return"Suspense";case pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jm:return(t.displayName||"Context")+".Consumer";case Om:return(t._context.displayName||"Context")+".Provider";case rh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sh:return e=t.displayName||null,e!==null?e:md(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return md(t(e))}catch{}}return null}function e_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(e);case 8:return e===ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t_(t){var e=Hm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=t_(t))}function Vm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Hm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function el(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xd(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gm(t,e){e=e.checked,e!=null&&nh(t,"checked",e,!1)}function gd(t,e){Gm(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&vd(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vd(t,e,n){(e!=="number"||el(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function _d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _f(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Js(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function Wm(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n_=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){n_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function $m(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function Ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=$m(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var i_=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(t,e){if(e){if(i_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wd=null;function ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Md=null,ls=null,cs=null;function yf(t){if(t=La(t)){if(typeof Md!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Fl(e),Md(t.stateNode,t.type,e))}}function Km(t){ls?cs?cs.push(t):cs=[t]:ls=t}function Qm(){if(ls){var t=ls,e=cs;if(cs=ls=null,yf(t),e)for(t=0;t<e.length;t++)yf(e[t])}}function Zm(t,e){return t(e)}function Jm(){}var lc=!1;function ex(t,e,n){if(lc)return t(e,n);lc=!0;try{return Zm(t,e,n)}finally{lc=!1,(ls!==null||cs!==null)&&(Jm(),Qm())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var i=Fl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Ed=!1;if(pi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){Ed=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{Ed=!1}function r_(t,e,n,i,r,s,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var ra=!1,tl=null,nl=!1,Td=null,s_={onError:function(t){ra=!0,tl=t}};function a_(t,e,n,i,r,s,a,l,c){ra=!1,tl=null,r_.apply(s_,arguments)}function o_(t,e,n,i,r,s,a,l,c){if(a_.apply(this,arguments),ra){if(ra){var d=tl;ra=!1,tl=null}else throw Error(ie(198));nl||(nl=!0,Td=d)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sf(t){if(Rr(t)!==t)throw Error(ie(188))}function l_(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sf(r),t;if(s===i)return Sf(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function nx(t){return t=l_(t),t!==null?ix(t):null}function ix(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ix(t);if(e!==null)return e;t=t.sibling}return null}var rx=fn.unstable_scheduleCallback,wf=fn.unstable_cancelCallback,c_=fn.unstable_shouldYield,d_=fn.unstable_requestPaint,bt=fn.unstable_now,u_=fn.unstable_getCurrentPriorityLevel,oh=fn.unstable_ImmediatePriority,sx=fn.unstable_UserBlockingPriority,il=fn.unstable_NormalPriority,h_=fn.unstable_LowPriority,ax=fn.unstable_IdlePriority,Ll=null,$n=null;function f_(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:x_,p_=Math.log,m_=Math.LN2;function x_(t){return t>>>=0,t===0?32:31-(p_(t)/m_|0)|0}var Xa=64,qa=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=ea(l):(s&=a,s!==0&&(i=ea(s)))}else a=n&~r,a!==0?i=ea(a):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function g_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=g_(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ox(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function __(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function lx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cx,ch,dx,ux,hx,Nd=!1,$a=[],Fi=null,Oi=null,ji=null,xa=new Map,ga=new Map,Pi=[],b_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mf(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(e.pointerId)}}function Os(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=La(e),e!==null&&ch(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function y_(t,e,n,i,r){switch(e){case"focusin":return Fi=Os(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Os(Oi,t,e,n,i,r),!0;case"mouseover":return ji=Os(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xa.set(s,Os(xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ga.set(s,Os(ga.get(s)||null,t,e,n,i,r)),!0}return!1}function fx(t){var e=xr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=tx(n),e!==null){t.blockedOn=e,hx(t.priority,function(){dx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);wd=i,n.target.dispatchEvent(i),wd=null}else return e=La(n),e!==null&&ch(e),t.blockedOn=n,!1;e.shift()}return!0}function Ef(t,e,n){Uo(t)&&n.delete(e)}function S_(){Nd=!1,Fi!==null&&Uo(Fi)&&(Fi=null),Oi!==null&&Uo(Oi)&&(Oi=null),ji!==null&&Uo(ji)&&(ji=null),xa.forEach(Ef),ga.forEach(Ef)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,S_)))}function va(t){function e(r){return js(r,t)}if(0<$a.length){js($a[0],t);for(var n=1;n<$a.length;n++){var i=$a[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&js(Fi,t),Oi!==null&&js(Oi,t),ji!==null&&js(ji,t),xa.forEach(e),ga.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)fx(n),n.blockedOn===null&&Pi.shift()}var ds=yi.ReactCurrentBatchConfig,sl=!0;function w_(t,e,n,i){var r=it,s=ds.transition;ds.transition=null;try{it=1,dh(t,e,n,i)}finally{it=r,ds.transition=s}}function M_(t,e,n,i){var r=it,s=ds.transition;ds.transition=null;try{it=4,dh(t,e,n,i)}finally{it=r,ds.transition=s}}function dh(t,e,n,i){if(sl){var r=Cd(t,e,n,i);if(r===null)_c(t,e,i,al,n),Mf(t,i);else if(y_(r,t,e,n,i))i.stopPropagation();else if(Mf(t,i),e&4&&-1<b_.indexOf(t)){for(;r!==null;){var s=La(r);if(s!==null&&cx(s),s=Cd(t,e,n,i),s===null&&_c(t,e,i,al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _c(t,e,i,null,n)}}var al=null;function Cd(t,e,n,i){if(al=null,t=ah(i),t=xr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function px(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(u_()){case oh:return 1;case sx:return 4;case il:case h_:return 16;case ax:return 536870912;default:return 16}default:return 16}}var Ii=null,uh=null,Io=null;function mx(){if(Io)return Io;var t,e=uh,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Io=r.slice(t,1<i?1-i:void 0)}function Bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ya(){return!0}function Tf(){return!1}function mn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ya:Tf,this.isPropagationStopped=Tf,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=mn(Rs),Pa=mt({},Rs,{view:0,detail:0}),E_=mn(Pa),dc,uc,zs,Ul=mt({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(dc=t.screenX-zs.screenX,uc=t.screenY-zs.screenY):uc=dc=0,zs=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),Af=mn(Ul),T_=mt({},Ul,{dataTransfer:0}),A_=mn(T_),N_=mt({},Pa,{relatedTarget:0}),hc=mn(N_),C_=mt({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),k_=mn(C_),R_=mt({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D_=mn(R_),P_=mt({},Rs,{data:0}),Nf=mn(P_),L_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=I_[t])?!!e[t]:!1}function fh(){return B_}var F_=mt({},Pa,{key:function(t){if(t.key){var e=L_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O_=mn(F_),j_=mt({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=mn(j_),z_=mt({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),H_=mn(z_),V_=mt({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),G_=mn(V_),W_=mt({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X_=mn(W_),q_=[9,13,27,32],ph=pi&&"CompositionEvent"in window,sa=null;pi&&"documentMode"in document&&(sa=document.documentMode);var $_=pi&&"TextEvent"in window&&!sa,xx=pi&&(!ph||sa&&8<sa&&11>=sa),kf=" ",Rf=!1;function gx(t,e){switch(t){case"keyup":return q_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function Y_(t,e){switch(t){case"compositionend":return vx(e);case"keypress":return e.which!==32?null:(Rf=!0,kf);case"textInput":return t=e.data,t===kf&&Rf?null:t;default:return null}}function K_(t,e){if(Kr)return t==="compositionend"||!ph&&gx(t,e)?(t=mx(),Io=uh=Ii=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xx&&e.locale!=="ko"?null:e.data;default:return null}}var Q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q_[t.type]:e==="textarea"}function _x(t,e,n,i){Km(i),e=ol(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,_a=null;function Z_(t){kx(t,0)}function Il(t){var e=Jr(t);if(Vm(e))return t}function J_(t,e){if(t==="change")return e}var bx=!1;if(pi){var fc;if(pi){var pc="oninput"in document;if(!pc){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),pc=typeof Pf.oninput=="function"}fc=pc}else fc=!1;bx=fc&&(!document.documentMode||9<document.documentMode)}function Lf(){aa&&(aa.detachEvent("onpropertychange",yx),_a=aa=null)}function yx(t){if(t.propertyName==="value"&&Il(_a)){var e=[];_x(e,_a,t,ah(t)),ex(Z_,e)}}function eb(t,e,n){t==="focusin"?(Lf(),aa=e,_a=n,aa.attachEvent("onpropertychange",yx)):t==="focusout"&&Lf()}function tb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(_a)}function nb(t,e){if(t==="click")return Il(e)}function ib(t,e){if(t==="input"||t==="change")return Il(e)}function rb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:rb;function ba(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ud.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function Uf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function If(t,e){var n=Uf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uf(n)}}function Sx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wx(){for(var t=window,e=el();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=el(t.document)}return e}function mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sb(t){var e=wx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sx(n.ownerDocument.documentElement,n)){if(i!==null&&mh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=If(n,s);var a=If(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ab=pi&&"documentMode"in document&&11>=document.documentMode,Qr=null,kd=null,oa=null,Rd=!1;function Bf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rd||Qr==null||Qr!==el(i)||(i=Qr,"selectionStart"in i&&mh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oa&&ba(oa,i)||(oa=i,i=ol(kd,"onSelect"),0<i.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},mc={},Mx={};pi&&(Mx=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function Bl(t){if(mc[t])return mc[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mx)return mc[t]=e[n];return t}var Ex=Bl("animationend"),Tx=Bl("animationiteration"),Ax=Bl("animationstart"),Nx=Bl("transitionend"),Cx=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){Cx.set(t,e),kr(e,[t])}for(var xc=0;xc<Ff.length;xc++){var gc=Ff[xc],ob=gc.toLowerCase(),lb=gc[0].toUpperCase()+gc.slice(1);Zi(ob,"on"+lb)}Zi(Ex,"onAnimationEnd");Zi(Tx,"onAnimationIteration");Zi(Ax,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(Nx,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Of(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,o_(i,e,void 0,t),t.currentTarget=null}function kx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;Of(r,l,d),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;Of(r,l,d),s=c}}}if(nl)throw t=Td,nl=!1,Td=null,t}function lt(t,e){var n=e[Id];n===void 0&&(n=e[Id]=new Set);var i=t+"__bubble";n.has(i)||(Rx(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),Rx(n,t,i,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[Qa]){t[Qa]=!0,Fm.forEach(function(n){n!=="selectionchange"&&(cb.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,vc("selectionchange",!1,e))}}function Rx(t,e,n,i){switch(px(e)){case 1:var r=w_;break;case 4:r=M_;break;default:r=dh}n=r.bind(null,e,n,t),r=void 0,!Ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=xr(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}ex(function(){var d=s,h=ah(n),p=[];e:{var f=Cx.get(t);if(f!==void 0){var x=hh,g=t;switch(t){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":x=O_;break;case"focusin":g="focus",x=hc;break;case"focusout":g="blur",x=hc;break;case"beforeblur":case"afterblur":x=hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=A_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=H_;break;case Ex:case Tx:case Ax:x=k_;break;case Nx:x=G_;break;case"scroll":x=E_;break;case"wheel":x=X_;break;case"copy":case"cut":case"paste":x=D_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Cf}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var v=d,_;v!==null;){_=v;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,u!==null&&(w=ma(v,u),w!=null&&y.push(Sa(v,w,_)))),m)break;v=v.return}0<y.length&&(f=new x(f,g,null,n,h),p.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",f&&n!==wd&&(g=n.relatedTarget||n.fromElement)&&(xr(g)||g[mi]))break e;if((x||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,x?(g=n.relatedTarget||n.toElement,x=d,g=g?xr(g):null,g!==null&&(m=Rr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(x=null,g=d),x!==g)){if(y=Af,w="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Cf,w="onPointerLeave",u="onPointerEnter",v="pointer"),m=x==null?f:Jr(x),_=g==null?f:Jr(g),f=new y(w,v+"leave",x,n,h),f.target=m,f.relatedTarget=_,w=null,xr(h)===d&&(y=new y(u,v+"enter",g,n,h),y.target=_,y.relatedTarget=m,w=y),m=w,x&&g)t:{for(y=x,u=g,v=0,_=y;_;_=Pr(_))v++;for(_=0,w=u;w;w=Pr(w))_++;for(;0<v-_;)y=Pr(y),v--;for(;0<_-v;)u=Pr(u),_--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Pr(y),u=Pr(u)}y=null}else y=null;x!==null&&jf(p,f,x,y,!1),g!==null&&m!==null&&jf(p,m,g,y,!0)}}e:{if(f=d?Jr(d):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var C=J_;else if(Df(f))if(bx)C=ib;else{C=tb;var N=eb}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=nb);if(C&&(C=C(t,d))){_x(p,C,n,h);break e}N&&N(t,f,d),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&vd(f,"number",f.value)}switch(N=d?Jr(d):window,t){case"focusin":(Df(N)||N.contentEditable==="true")&&(Qr=N,kd=d,oa=null);break;case"focusout":oa=kd=Qr=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,Bf(p,n,h);break;case"selectionchange":if(ab)break;case"keydown":case"keyup":Bf(p,n,h)}var T;if(ph)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Kr?gx(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(xx&&n.locale!=="ko"&&(Kr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Kr&&(T=mx()):(Ii=h,uh="value"in Ii?Ii.value:Ii.textContent,Kr=!0)),N=ol(d,k),0<N.length&&(k=new Nf(k,t,null,n,h),p.push({event:k,listeners:N}),T?k.data=T:(T=vx(n),T!==null&&(k.data=T)))),(T=$_?Y_(t,n):K_(t,n))&&(d=ol(d,"onBeforeInput"),0<d.length&&(h=new Nf("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=T))}kx(p,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ma(t,n),s!=null&&i.unshift(Sa(t,s,r)),s=ma(t,e),s!=null&&i.push(Sa(t,s,r))),t=t.return}return i}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,r?(c=ma(n,s),c!=null&&a.unshift(Sa(n,c,l))):r||(c=ma(n,s),c!=null&&a.push(Sa(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var db=/\r\n?/g,ub=/\u0000|\uFFFD/g;function zf(t){return(typeof t=="string"?t:""+t).replace(db,`
`).replace(ub,"")}function Za(t,e,n){if(e=zf(e),zf(t)!==e&&n)throw Error(ie(425))}function ll(){}var Dd=null,Pd=null;function Ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,hb=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,fb=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(t){return Hf.resolve(null).then(t).catch(pb)}:Ud;function pb(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);va(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Ds,wa="__reactProps$"+Ds,mi="__reactContainer$"+Ds,Id="__reactEvents$"+Ds,mb="__reactListeners$"+Ds,xb="__reactHandles$"+Ds;function xr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vf(t);t!==null;){if(n=t[Xn])return n;t=Vf(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[Xn]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Fl(t){return t[wa]||null}var Bd=[],es=-1;function Ji(t){return{current:t}}function dt(t){0>es||(t.current=Bd[es],Bd[es]=null,es--)}function st(t,e){es++,Bd[es]=t.current,t.current=e}var Yi={},zt=Ji(Yi),en=Ji(!1),wr=Yi;function vs(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function cl(){dt(en),dt(zt)}function Gf(t,e,n){if(zt.current!==Yi)throw Error(ie(168));st(zt,e),st(en,n)}function Dx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,e_(t)||"Unknown",r));return mt({},n,i)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,wr=zt.current,st(zt,t),st(en,en.current),!0}function Wf(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Dx(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,dt(en),dt(zt),st(zt,t)):dt(en),st(en,n)}var oi=null,Ol=!1,yc=!1;function Px(t){oi===null?oi=[t]:oi.push(t)}function gb(t){Ol=!0,Px(t)}function er(){if(!yc&&oi!==null){yc=!0;var t=0,e=it;try{var n=oi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Ol=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),rx(oh,er),r}finally{it=e,yc=!1}}return null}var ts=[],ns=0,ul=null,hl=0,_n=[],bn=0,Mr=null,ci=1,di="";function dr(t,e){ts[ns++]=hl,ts[ns++]=ul,ul=t,hl=e}function Lx(t,e,n){_n[bn++]=ci,_n[bn++]=di,_n[bn++]=Mr,Mr=t;var i=ci;t=di;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ci=1<<32-On(e)+r|n<<r|i,di=s+t}else ci=1<<s|n<<r|i,di=t}function xh(t){t.return!==null&&(dr(t,1),Lx(t,1,0))}function gh(t){for(;t===ul;)ul=ts[--ns],ts[ns]=null,hl=ts[--ns],ts[ns]=null;for(;t===Mr;)Mr=_n[--bn],_n[bn]=null,di=_n[--bn],_n[bn]=null,ci=_n[--bn],_n[bn]=null}var hn=null,un=null,ut=!1,Un=null;function Ux(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,un=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:ci,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,un=null,!0):!1;default:return!1}}function Fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Od(t){if(ut){var e=un;if(e){var n=e;if(!Xf(t,e)){if(Fd(t))throw Error(ie(418));e=zi(n.nextSibling);var i=hn;e&&Xf(t,e)?Ux(i,n):(t.flags=t.flags&-4097|2,ut=!1,hn=t)}}else{if(Fd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ut=!1,hn=t}}}function qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Ja(t){if(t!==hn)return!1;if(!ut)return qf(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ld(t.type,t.memoizedProps)),e&&(e=un)){if(Fd(t))throw Ix(),Error(ie(418));for(;e;)Ux(t,e),e=zi(e.nextSibling)}if(qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=hn?zi(t.stateNode.nextSibling):null;return!0}function Ix(){for(var t=un;t;)t=zi(t.nextSibling)}function _s(){un=hn=null,ut=!1}function vh(t){Un===null?Un=[t]:Un.push(t)}var vb=yi.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function eo(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $f(t){var e=t._init;return e(t._payload)}function Bx(t){function e(u,v){if(t){var _=u.deletions;_===null?(u.deletions=[v],u.flags|=16):_.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Wi(u,v),u.index=0,u.sibling=null,u}function s(u,v,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<v?(u.flags|=2,v):_):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function l(u,v,_,w){return v===null||v.tag!==6?(v=Nc(_,u.mode,w),v.return=u,v):(v=r(v,_),v.return=u,v)}function c(u,v,_,w){var C=_.type;return C===Yr?h(u,v,_.props.children,w,_.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ri&&$f(C)===v.type)?(w=r(v,_.props),w.ref=Hs(u,v,_),w.return=u,w):(w=Go(_.type,_.key,_.props,null,u.mode,w),w.ref=Hs(u,v,_),w.return=u,w)}function d(u,v,_,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Cc(_,u.mode,w),v.return=u,v):(v=r(v,_.children||[]),v.return=u,v)}function h(u,v,_,w,C){return v===null||v.tag!==7?(v=Sr(_,u.mode,w,C),v.return=u,v):(v=r(v,_),v.return=u,v)}function p(u,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nc(""+v,u.mode,_),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return _=Go(v.type,v.key,v.props,null,u.mode,_),_.ref=Hs(u,null,v),_.return=u,_;case $r:return v=Cc(v,u.mode,_),v.return=u,v;case Ri:var w=v._init;return p(u,w(v._payload),_)}if(Js(v)||Bs(v))return v=Sr(v,u.mode,_,null),v.return=u,v;eo(u,v)}return null}function f(u,v,_,w){var C=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:l(u,v,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:return _.key===C?c(u,v,_,w):null;case $r:return _.key===C?d(u,v,_,w):null;case Ri:return C=_._init,f(u,v,C(_._payload),w)}if(Js(_)||Bs(_))return C!==null?null:h(u,v,_,w,null);eo(u,_)}return null}function x(u,v,_,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(_)||null,l(v,u,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Va:return u=u.get(w.key===null?_:w.key)||null,c(v,u,w,C);case $r:return u=u.get(w.key===null?_:w.key)||null,d(v,u,w,C);case Ri:var N=w._init;return x(u,v,_,N(w._payload),C)}if(Js(w)||Bs(w))return u=u.get(_)||null,h(v,u,w,C,null);eo(v,w)}return null}function g(u,v,_,w){for(var C=null,N=null,T=v,k=v=0,W=null;T!==null&&k<_.length;k++){T.index>k?(W=T,T=null):W=T.sibling;var b=f(u,T,_[k],w);if(b===null){T===null&&(T=W);break}t&&T&&b.alternate===null&&e(u,T),v=s(b,v,k),N===null?C=b:N.sibling=b,N=b,T=W}if(k===_.length)return n(u,T),ut&&dr(u,k),C;if(T===null){for(;k<_.length;k++)T=p(u,_[k],w),T!==null&&(v=s(T,v,k),N===null?C=T:N.sibling=T,N=T);return ut&&dr(u,k),C}for(T=i(u,T);k<_.length;k++)W=x(T,u,k,_[k],w),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?k:W.key),v=s(W,v,k),N===null?C=W:N.sibling=W,N=W);return t&&T.forEach(function(M){return e(u,M)}),ut&&dr(u,k),C}function y(u,v,_,w){var C=Bs(_);if(typeof C!="function")throw Error(ie(150));if(_=C.call(_),_==null)throw Error(ie(151));for(var N=C=null,T=v,k=v=0,W=null,b=_.next();T!==null&&!b.done;k++,b=_.next()){T.index>k?(W=T,T=null):W=T.sibling;var M=f(u,T,b.value,w);if(M===null){T===null&&(T=W);break}t&&T&&M.alternate===null&&e(u,T),v=s(M,v,k),N===null?C=M:N.sibling=M,N=M,T=W}if(b.done)return n(u,T),ut&&dr(u,k),C;if(T===null){for(;!b.done;k++,b=_.next())b=p(u,b.value,w),b!==null&&(v=s(b,v,k),N===null?C=b:N.sibling=b,N=b);return ut&&dr(u,k),C}for(T=i(u,T);!b.done;k++,b=_.next())b=x(T,u,k,b.value,w),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?k:b.key),v=s(b,v,k),N===null?C=b:N.sibling=b,N=b);return t&&T.forEach(function(H){return e(u,H)}),ut&&dr(u,k),C}function m(u,v,_,w){if(typeof _=="object"&&_!==null&&_.type===Yr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:e:{for(var C=_.key,N=v;N!==null;){if(N.key===C){if(C=_.type,C===Yr){if(N.tag===7){n(u,N.sibling),v=r(N,_.props.children),v.return=u,u=v;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ri&&$f(C)===N.type){n(u,N.sibling),v=r(N,_.props),v.ref=Hs(u,N,_),v.return=u,u=v;break e}n(u,N);break}else e(u,N);N=N.sibling}_.type===Yr?(v=Sr(_.props.children,u.mode,w,_.key),v.return=u,u=v):(w=Go(_.type,_.key,_.props,null,u.mode,w),w.ref=Hs(u,v,_),w.return=u,u=w)}return a(u);case $r:e:{for(N=_.key;v!==null;){if(v.key===N)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(u,v.sibling),v=r(v,_.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Cc(_,u.mode,w),v.return=u,u=v}return a(u);case Ri:return N=_._init,m(u,v,N(_._payload),w)}if(Js(_))return g(u,v,_,w);if(Bs(_))return y(u,v,_,w);eo(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,_),v.return=u,u=v):(n(u,v),v=Nc(_,u.mode,w),v.return=u,u=v),a(u)):n(u,v)}return m}var bs=Bx(!0),Fx=Bx(!1),fl=Ji(null),pl=null,is=null,_h=null;function bh(){_h=is=pl=null}function yh(t){var e=fl.current;dt(fl),t._currentValue=e}function jd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function us(t,e){pl=t,_h=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(_h!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(pl===null)throw Error(ie(308));is=t,pl.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var gr=null;function Sh(t){gr===null?gr=[t]:gr.push(t)}function Ox(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sh(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,Sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function Fo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lh(t,n)}}function Yf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ml(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?s=d:a.next=d,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=d=c=null,l=s;do{var f=l.lane,x=l.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,y=l;switch(f=e,x=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){p=g.call(x,p,f);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(x,p,f):g,f==null)break e;p=mt({},p,f);break e;case 2:Di=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else x={eventTime:x,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=x,c=p):h=h.next=x,a|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=a,t.lanes=a,t.memoizedState=p}}function Kf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ua={},Yn=Ji(Ua),Ma=Ji(Ua),Ea=Ji(Ua);function vr(t){if(t===Ua)throw Error(ie(174));return t}function Mh(t,e){switch(st(Ea,e),st(Ma,t),st(Yn,Ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bd(e,t)}dt(Yn),st(Yn,e)}function ys(){dt(Yn),dt(Ma),dt(Ea)}function zx(t){vr(Ea.current);var e=vr(Yn.current),n=bd(e,t.type);e!==n&&(st(Ma,t),st(Yn,n))}function Eh(t){Ma.current===t&&(dt(Yn),dt(Ma))}var ht=Ji(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sc=[];function Th(){for(var t=0;t<Sc.length;t++)Sc[t]._workInProgressVersionPrimary=null;Sc.length=0}var Oo=yi.ReactCurrentDispatcher,wc=yi.ReactCurrentBatchConfig,Er=0,ft=null,Mt=null,Ct=null,gl=!1,la=!1,Ta=0,_b=0;function It(){throw Error(ie(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Nh(t,e,n,i,r,s){if(Er=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oo.current=t===null||t.memoizedState===null?wb:Mb,t=n(i,r),la){s=0;do{if(la=!1,Ta=0,25<=s)throw Error(ie(301));s+=1,Ct=Mt=null,e.updateQueue=null,Oo.current=Eb,t=n(i,r)}while(la)}if(Oo.current=vl,e=Mt!==null&&Mt.next!==null,Er=0,Ct=Mt=ft=null,gl=!1,e)throw Error(ie(300));return t}function Ch(){var t=Ta!==0;return Ta=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ft.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function An(){if(Mt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Ct===null?ft.memoizedState:Ct.next;if(e!==null)Ct=e,Mt=t;else{if(t===null)throw Error(ie(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Ct===null?ft.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Aa(t,e){return typeof e=="function"?e(t):e}function Mc(t){var e=An(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,d=s;do{var h=d.lane;if((Er&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,a=i):c=c.next=p,ft.lanes|=h,Tr|=h}d=d.next}while(d!==null&&d!==s);c===null?a=i:c.next=l,zn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=An(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);zn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Hx(){}function Vx(t,e){var n=ft,i=An(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,kh(Xx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Na(9,Wx.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ie(349));Er&30||Gx(n,e,r)}return r}function Gx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wx(t,e,n,i){e.value=n,e.getSnapshot=i,qx(e)&&$x(t)}function Xx(t,e,n){return n(function(){qx(e)&&$x(t)})}function qx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function $x(t){var e=xi(t,1);e!==null&&jn(e,t,1,-1)}function Qf(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},e.queue=t,t=t.dispatch=Sb.bind(null,ft,t),[e.memoizedState,t]}function Na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Yx(){return An().memoizedState}function jo(t,e,n,i){var r=Vn();ft.flags|=t,r.memoizedState=Na(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&Ah(i,a.deps)){r.memoizedState=Na(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Na(1|e,n,s,i)}function Zf(t,e){return jo(8390656,8,t,e)}function kh(t,e){return jl(2048,8,t,e)}function Kx(t,e){return jl(4,2,t,e)}function Qx(t,e){return jl(4,4,t,e)}function Zx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jx(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,Zx.bind(null,e,t),n)}function Rh(){}function eg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function tg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ng(t,e,n){return Er&21?(zn(n,e)||(n=ox(),ft.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function bb(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=wc.transition;wc.transition={};try{t(!1),e()}finally{it=n,wc.transition=i}}function ig(){return An().memoizedState}function yb(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},rg(t))sg(e,n);else if(n=Ox(t,e,n,i),n!==null){var r=Wt();jn(n,t,i,r),ag(n,e,i)}}function Sb(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(rg(t))sg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,zn(l,a)){var c=e.interleaved;c===null?(r.next=r,Sh(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Ox(t,e,r,i),n!==null&&(r=Wt(),jn(n,t,i,r),ag(n,e,i))}}function rg(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function sg(t,e){la=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ag(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lh(t,n)}}var vl={readContext:Tn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},wb={readContext:Tn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Zf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jo(4194308,4,Zx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return jo(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yb.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:Qf,useDebugValue:Rh,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=Qf(!1),e=t[0];return t=bb.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Vn();if(ut){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),kt===null)throw Error(ie(349));Er&30||Gx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Zf(Xx.bind(null,i,s,t),[t]),i.flags|=2048,Na(9,Wx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=kt.identifierPrefix;if(ut){var n=di,i=ci;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_b++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mb={readContext:Tn,useCallback:eg,useContext:Tn,useEffect:kh,useImperativeHandle:Jx,useInsertionEffect:Kx,useLayoutEffect:Qx,useMemo:tg,useReducer:Mc,useRef:Yx,useState:function(){return Mc(Aa)},useDebugValue:Rh,useDeferredValue:function(t){var e=An();return ng(e,Mt.memoizedState,t)},useTransition:function(){var t=Mc(Aa)[0],e=An().memoizedState;return[t,e]},useMutableSource:Hx,useSyncExternalStore:Vx,useId:ig,unstable_isNewReconciler:!1},Eb={readContext:Tn,useCallback:eg,useContext:Tn,useEffect:kh,useImperativeHandle:Jx,useInsertionEffect:Kx,useLayoutEffect:Qx,useMemo:tg,useReducer:Ec,useRef:Yx,useState:function(){return Ec(Aa)},useDebugValue:Rh,useDeferredValue:function(t){var e=An();return Mt===null?e.memoizedState=t:ng(e,Mt.memoizedState,t)},useTransition:function(){var t=Ec(Aa)[0],e=An().memoizedState;return[t,e]},useMutableSource:Hx,useSyncExternalStore:Vx,useId:ig,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zl={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Gi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(jn(e,t,r,i),Fo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Gi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(jn(e,t,r,i),Fo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),i=Gi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(jn(e,t,i,n),Fo(e,t,i))}};function Jf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ba(n,i)||!ba(r,s):!0}function og(t,e,n){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=tn(e)?wr:zt.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ep(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zl.enqueueReplaceState(e,e.state,null)}function Hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=tn(e)?wr:zt.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zl.enqueueReplaceState(r,r.state,null),ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=J0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Tb=typeof WeakMap=="function"?WeakMap:Map;function lg(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){bl||(bl=!0,Jd=i),Vd(t,e)},n}function cg(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vd(t,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Tb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=jb.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ip(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var Ab=yi.ReactCurrentOwner,Jt=!1;function Gt(t,e,n,i){e.child=t===null?Fx(e,null,n,i):bs(e,t.child,n,i)}function rp(t,e,n,i,r){n=n.render;var s=e.ref;return us(e,r),i=Nh(t,e,n,i,s,r),n=Ch(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ut&&n&&xh(e),e.flags|=1,Gt(t,e,i,r),e.child)}function sp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dg(t,e,s,i,r)):(t=Go(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Wi(s,i),t.ref=e.ref,t.return=e,e.child=t}function dg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ba(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Gd(t,e,n,i,r)}function ug(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ss,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ss,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ss,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ss,dn),dn|=i;return Gt(t,e,r,n),e.child}function hg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gd(t,e,n,i,r){var s=tn(n)?wr:zt.current;return s=vs(e,s),us(e,r),n=Nh(t,e,n,i,s,r),i=Ch(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ut&&i&&xh(e),e.flags|=1,Gt(t,e,n,r),e.child)}function ap(t,e,n,i,r){if(tn(n)){var s=!0;dl(e)}else s=!1;if(us(e,r),e.stateNode===null)zo(t,e),og(e,n,i),Hd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Tn(d):(d=tn(n)?wr:zt.current,d=vs(e,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==d)&&ep(e,a,i,d),Di=!1;var f=e.memoizedState;a.state=f,ml(e,i,a,r),c=e.memoizedState,l!==i||f!==c||en.current||Di?(typeof h=="function"&&(zd(e,n,h,i),c=e.memoizedState),(l=Di||Jf(e,n,l,i,f,c,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=d,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,jx(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Pn(e.type,l),a.props=d,p=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Tn(c):(c=tn(n)?wr:zt.current,c=vs(e,c));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&ep(e,a,i,c),Di=!1,f=e.memoizedState,a.state=f,ml(e,i,a,r);var g=e.memoizedState;l!==p||f!==g||en.current||Di?(typeof x=="function"&&(zd(e,n,x,i),g=e.memoizedState),(d=Di||Jf(e,n,d,i,f,g,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=c,i=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Wd(t,e,n,i,s,r)}function Wd(t,e,n,i,r,s){hg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Wf(e,n,!1),gi(t,e,s);i=e.stateNode,Ab.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,l,s)):Gt(t,e,l,s),e.memoizedState=i.state,r&&Wf(e,n,!0),e.child}function fg(t){var e=t.stateNode;e.pendingContext?Gf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gf(t,e.context,!1),Mh(t,e.containerInfo)}function op(t,e,n,i,r){return _s(),vh(r),e.flags|=256,Gt(t,e,n,i),e.child}var Xd={dehydrated:null,treeContext:null,retryLane:0};function qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function pg(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return Od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Gl(a,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qd(n),e.memoizedState=Xd,t):Dh(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Nb(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Wi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=Wi(l,s):(s=Sr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?qd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Xd,i}return s=t.child,t=s.sibling,i=Wi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dh(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function to(t,e,n,i){return i!==null&&vh(i),bs(e,t.child,null,n),t=Dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nb(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Tc(Error(ie(422))),to(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gl({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&bs(e,t.child,null,a),e.child.memoizedState=qd(a),e.memoizedState=Xd,s);if(!(e.mode&1))return to(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(ie(419)),i=Tc(s,i,void 0),to(t,e,a,i)}if(l=(a&t.childLanes)!==0,Jt||l){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),jn(i,t,r,-1))}return Fh(),i=Tc(Error(ie(421))),to(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zb.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=zi(r.nextSibling),hn=e,ut=!0,Un=null,t!==null&&(_n[bn++]=ci,_n[bn++]=di,_n[bn++]=Mr,ci=t.id,di=t.overflow,Mr=e),e=Dh(e,i.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),jd(t.return,e,n)}function Ac(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function mg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ac(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cb(t,e,n){switch(e.tag){case 3:fg(e),_s();break;case 5:zx(e);break;case 1:tn(e.type)&&dl(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?pg(t,e,n):(st(ht,ht.current&1),t=gi(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return mg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,ug(t,e,n)}return gi(t,e,n)}var xg,$d,gg,vg;xg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$d=function(){};gg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(Yn.current);var s=null;switch(n){case"input":r=xd(t,r),i=xd(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=_d(t,r),i=_d(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ll)}yd(n,i);var a;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(fa.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var c=i[d];if(l=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(fa.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&lt("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};vg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vs(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function kb(t,e,n){var i=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return tn(e.type)&&cl(),Bt(e),null;case 3:return i=e.stateNode,ys(),dt(en),dt(zt),Th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(nu(Un),Un=null))),$d(t,e),Bt(e),null;case 5:Eh(e);var r=vr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)gg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Bt(e),null}if(t=vr(Yn.current),Ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[wa]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)lt(ta[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":gf(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":_f(i,s),lt("invalid",i)}yd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,l,t),r=["children",""+l]):fa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&lt("scroll",i)}switch(n){case"input":Ga(i),vf(i,s,!0);break;case"textarea":Ga(i),bf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ll)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Xn]=e,t[wa]=i,xg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Sd(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)lt(ta[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":gf(t,i),r=xd(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":_f(t,i),r=_d(t,i),lt("invalid",t);break;default:r=i}yd(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Ym(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&qm(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&pa(t,c):typeof c=="number"&&pa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&lt("scroll",t):c!=null&&nh(t,s,c,a))}switch(n){case"input":Ga(t),vf(t,i,!1);break;case"textarea":Ga(t),bf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?os(t,!!i.multiple,s,!1):i.defaultValue!=null&&os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)vg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=vr(Ea.current),vr(Yn.current),Ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Za(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Bt(e),null;case 13:if(dt(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&un!==null&&e.mode&1&&!(e.flags&128))Ix(),_s(),e.flags|=98560,s=!1;else if(s=Ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Xn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Un!==null&&(nu(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Et===0&&(Et=3):Fh())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return ys(),$d(t,e),t===null&&ya(e.stateNode.containerInfo),Bt(e),null;case 10:return yh(e.type._context),Bt(e),null;case 17:return tn(e.type)&&cl(),Bt(e),null;case 19:if(dt(ht),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Vs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=xl(t),a!==null){for(e.flags|=128,Vs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>ws&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304)}else{if(!i)if(t=xl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ut)return Bt(e),null}else 2*bt()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Rb(t,e){switch(gh(e),e.tag){case 1:return tn(e.type)&&cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),dt(en),dt(zt),Th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(dt(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(ht),null;case 4:return ys(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var no=!1,jt=!1,Db=typeof WeakSet=="function"?WeakSet:Set,xe=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function Yd(t,e,n){try{n()}catch(i){gt(t,e,i)}}var cp=!1;function Pb(t,e){if(Dd=sl,t=wx(),mh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,h=0,p=t,f=null;t:for(;;){for(var x;p!==n||r!==0&&p.nodeType!==3||(l=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)f=p,p=x;for(;;){if(p===t)break t;if(f===n&&++d===r&&(l=a),f===s&&++h===i&&(c=a),(x=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:t,selectionRange:n},sl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(w){gt(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return g=cp,cp=!1,g}function ca(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yd(e,n,s)}r=r.next}while(r!==i)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _g(t){var e=t.alternate;e!==null&&(t.alternate=null,_g(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[wa],delete e[Id],delete e[mb],delete e[xb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bg(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ll));else if(i!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}function Zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}var Dt=null,Ln=!1;function Mi(t,e,n){for(n=n.child;n!==null;)yg(t,e,n),n=n.sibling}function yg(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:jt||rs(n,e);case 6:var i=Dt,r=Ln;Dt=null,Mi(t,e,n),Dt=i,Ln=r,Dt!==null&&(Ln?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Ln?(t=Dt,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),va(t)):bc(Dt,n.stateNode));break;case 4:i=Dt,r=Ln,Dt=n.stateNode.containerInfo,Ln=!0,Mi(t,e,n),Dt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Yd(n,e,a),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!jt&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){gt(n,e,l)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Mi(t,e,n),jt=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Db),e.forEach(function(i){var r=Hb.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Dt=l.stateNode,Ln=!1;break e;case 3:Dt=l.stateNode.containerInfo,Ln=!0;break e;case 4:Dt=l.stateNode.containerInfo,Ln=!0;break e}l=l.return}if(Dt===null)throw Error(ie(160));yg(s,a,r),Dt=null,Ln=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){gt(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sg(e,t),e=e.sibling}function Sg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Hn(t),i&4){try{ca(3,t,t.return),Hl(3,t)}catch(y){gt(t,t.return,y)}try{ca(5,t,t.return)}catch(y){gt(t,t.return,y)}}break;case 1:Cn(e,t),Hn(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(Cn(e,t),Hn(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{pa(r,"")}catch(y){gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gm(r,s),Sd(l,a);var d=Sd(l,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?Ym(r,p):h==="dangerouslySetInnerHTML"?qm(r,p):h==="children"?pa(r,p):nh(r,h,p,d)}switch(l){case"input":gd(r,s);break;case"textarea":Wm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?os(r,!!s.multiple,x,!1):f!==!!s.multiple&&(s.defaultValue!=null?os(r,!!s.multiple,s.defaultValue,!0):os(r,!!s.multiple,s.multiple?[]:"",!1))}r[wa]=s}catch(y){gt(t,t.return,y)}}break;case 6:if(Cn(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){gt(t,t.return,y)}}break;case 3:if(Cn(e,t),Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(y){gt(t,t.return,y)}break;case 4:Cn(e,t),Hn(t);break;case 13:Cn(e,t),Hn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uh=bt())),i&4&&up(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(d=jt)||h,Cn(e,t),jt=d):Cn(e,t),Hn(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(xe=t,h=t.child;h!==null;){for(p=xe=h;xe!==null;){switch(f=xe,x=f.child,f.tag){case 0:case 11:case 14:case 15:ca(4,f,f.return);break;case 1:rs(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){gt(i,n,y)}}break;case 5:rs(f,f.return);break;case 22:if(f.memoizedState!==null){fp(p);continue}}x!==null?(x.return=f,xe=x):fp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=$m("display",a))}catch(y){gt(t,t.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(y){gt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Cn(e,t),Hn(t),i&4&&up(t);break;case 21:break;default:Cn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bg(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pa(r,""),i.flags&=-33);var s=dp(t);Zd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=dp(t);Qd(t,l,a);break;default:throw Error(ie(161))}}catch(c){gt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lb(t,e,n){xe=t,wg(t)}function wg(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||no;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||jt;l=no;var d=jt;if(no=a,(jt=c)&&!d)for(xe=r;xe!==null;)a=xe,c=a.child,a.tag===22&&a.memoizedState!==null?pp(r):c!==null?(c.return=a,xe=c):pp(r);for(;s!==null;)xe=s,wg(s),s=s.sibling;xe=r,no=l,jt=d}hp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):hp(t)}}function hp(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Hl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kf(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&va(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}jt||e.flags&512&&Kd(e)}catch(f){gt(e,e.return,f)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function fp(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function pp(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(c){gt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){gt(e,r,c)}}var s=e.return;try{Kd(e)}catch(c){gt(e,s,c)}break;case 5:var a=e.return;try{Kd(e)}catch(c){gt(e,a,c)}}}catch(c){gt(e,e.return,c)}if(e===t){xe=null;break}var l=e.sibling;if(l!==null){l.return=e.return,xe=l;break}xe=e.return}}var Ub=Math.ceil,_l=yi.ReactCurrentDispatcher,Ph=yi.ReactCurrentOwner,En=yi.ReactCurrentBatchConfig,qe=0,kt=null,wt=null,Pt=0,dn=0,ss=Ji(0),Et=0,Ca=null,Tr=0,Vl=0,Lh=0,da=null,Qt=null,Uh=0,ws=1/0,ai=null,bl=!1,Jd=null,Vi=null,io=!1,Bi=null,yl=0,ua=0,eu=null,Ho=-1,Vo=0;function Wt(){return qe&6?bt():Ho!==-1?Ho:Ho=bt()}function Gi(t){return t.mode&1?qe&2&&Pt!==0?Pt&-Pt:vb.transition!==null?(Vo===0&&(Vo=ox()),Vo):(t=it,t!==0||(t=window.event,t=t===void 0?16:px(t.type)),t):1}function jn(t,e,n,i){if(50<ua)throw ua=0,eu=null,Error(ie(185));Da(t,n,i),(!(qe&2)||t!==kt)&&(t===kt&&(!(qe&2)&&(Vl|=n),Et===4&&Li(t,Pt)),nn(t,i),n===1&&qe===0&&!(e.mode&1)&&(ws=bt()+500,Ol&&er()))}function nn(t,e){var n=t.callbackNode;v_(t,e);var i=rl(t,t===kt?Pt:0);if(i===0)n!==null&&wf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&wf(n),e===1)t.tag===0?gb(mp.bind(null,t)):Px(mp.bind(null,t)),fb(function(){!(qe&6)&&er()}),n=null;else{switch(lx(i)){case 1:n=oh;break;case 4:n=sx;break;case 16:n=il;break;case 536870912:n=ax;break;default:n=il}n=Rg(n,Mg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mg(t,e){if(Ho=-1,Vo=0,qe&6)throw Error(ie(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=rl(t,t===kt?Pt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sl(t,i);else{e=i;var r=qe;qe|=2;var s=Tg();(kt!==t||Pt!==e)&&(ai=null,ws=bt()+500,yr(t,e));do try{Fb();break}catch(l){Eg(t,l)}while(!0);bh(),_l.current=s,qe=r,wt!==null?e=0:(kt=null,Pt=0,e=Et)}if(e!==0){if(e===2&&(r=Ad(t),r!==0&&(i=r,e=tu(t,r))),e===1)throw n=Ca,yr(t,0),Li(t,i),nn(t,bt()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ib(r)&&(e=Sl(t,i),e===2&&(s=Ad(t),s!==0&&(i=s,e=tu(t,s))),e===1))throw n=Ca,yr(t,0),Li(t,i),nn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:ur(t,Qt,ai);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=Uh+500-bt(),10<e)){if(rl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ud(ur.bind(null,t,Qt,ai),e);break}ur(t,Qt,ai);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ub(i/1960))-i,10<i){t.timeoutHandle=Ud(ur.bind(null,t,Qt,ai),i);break}ur(t,Qt,ai);break;case 5:ur(t,Qt,ai);break;default:throw Error(ie(329))}}}return nn(t,bt()),t.callbackNode===n?Mg.bind(null,t):null}function tu(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&nu(e)),t}function nu(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function Ib(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~Lh,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function mp(t){if(qe&6)throw Error(ie(327));hs();var e=rl(t,0);if(!(e&1))return nn(t,bt()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var i=Ad(t);i!==0&&(e=i,n=tu(t,i))}if(n===1)throw n=Ca,yr(t,0),Li(t,e),nn(t,bt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Qt,ai),nn(t,bt()),null}function Ih(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(ws=bt()+500,Ol&&er())}}function Ar(t){Bi!==null&&Bi.tag===0&&!(qe&6)&&hs();var e=qe;qe|=1;var n=En.transition,i=it;try{if(En.transition=null,it=1,t)return t()}finally{it=i,En.transition=n,qe=e,!(qe&6)&&er()}}function Bh(){dn=ss.current,dt(ss)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hb(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cl();break;case 3:ys(),dt(en),dt(zt),Th();break;case 5:Eh(i);break;case 4:ys();break;case 13:dt(ht);break;case 19:dt(ht);break;case 10:yh(i.type._context);break;case 22:case 23:Bh()}n=n.return}if(kt=t,wt=t=Wi(t.current,null),Pt=dn=e,Et=0,Ca=null,Lh=Vl=Tr=0,Qt=da=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}gr=null}return t}function Eg(t,e){do{var n=wt;try{if(bh(),Oo.current=vl,gl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gl=!1}if(Er=0,Ct=Mt=ft=null,la=!1,Ta=0,Ph.current=null,n===null||n.return===null){Et=1,Ca=e,wt=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=Pt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=np(a);if(x!==null){x.flags&=-257,ip(x,a,l,s,e),x.mode&1&&tp(s,d,e),e=x,c=d;var g=e.updateQueue;if(g===null){var y=new Set;y.add(c),e.updateQueue=y}else g.add(c);break e}else{if(!(e&1)){tp(s,d,e),Fh();break e}c=Error(ie(426))}}else if(ut&&l.mode&1){var m=np(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ip(m,a,l,s,e),vh(Ss(c,l));break e}}s=c=Ss(c,l),Et!==4&&(Et=2),da===null?da=[s]:da.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=lg(s,c,e);Yf(s,u);break e;case 1:l=c;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Vi===null||!Vi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=cg(s,l,e);Yf(s,w);break e}}s=s.return}while(s!==null)}Ng(n)}catch(C){e=C,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Tg(){var t=_l.current;return _l.current=vl,t===null?vl:t}function Fh(){(Et===0||Et===3||Et===2)&&(Et=4),kt===null||!(Tr&268435455)&&!(Vl&268435455)||Li(kt,Pt)}function Sl(t,e){var n=qe;qe|=2;var i=Tg();(kt!==t||Pt!==e)&&(ai=null,yr(t,e));do try{Bb();break}catch(r){Eg(t,r)}while(!0);if(bh(),qe=n,_l.current=i,wt!==null)throw Error(ie(261));return kt=null,Pt=0,Et}function Bb(){for(;wt!==null;)Ag(wt)}function Fb(){for(;wt!==null&&!c_();)Ag(wt)}function Ag(t){var e=kg(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?Ng(t):wt=e,Ph.current=null}function Ng(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Rb(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,wt=null;return}}else if(n=kb(n,e,dn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Et===0&&(Et=5)}function ur(t,e,n){var i=it,r=En.transition;try{En.transition=null,it=1,Ob(t,e,n,i)}finally{En.transition=r,it=i}return null}function Ob(t,e,n,i){do hs();while(Bi!==null);if(qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(__(t,s),t===kt&&(wt=kt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||io||(io=!0,Rg(il,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var a=it;it=1;var l=qe;qe|=4,Ph.current=null,Pb(t,n),Sg(n,t),sb(Pd),sl=!!Dd,Pd=Dd=null,t.current=n,Lb(n),d_(),qe=l,it=a,En.transition=s}else t.current=n;if(io&&(io=!1,Bi=t,yl=r),s=t.pendingLanes,s===0&&(Vi=null),f_(n.stateNode),nn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(bl)throw bl=!1,t=Jd,Jd=null,t;return yl&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===eu?ua++:(ua=0,eu=t):ua=0,er(),null}function hs(){if(Bi!==null){var t=lx(yl),e=En.transition,n=it;try{if(En.transition=null,it=16>t?16:t,Bi===null)var i=!1;else{if(t=Bi,Bi=null,yl=0,qe&6)throw Error(ie(331));var r=qe;for(qe|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(xe=d;xe!==null;){var h=xe;switch(h.tag){case 0:case 11:case 15:ca(8,h,s)}var p=h.child;if(p!==null)p.return=h,xe=p;else for(;xe!==null;){h=xe;var f=h.sibling,x=h.return;if(_g(h),h===d){xe=null;break}if(f!==null){f.return=x,xe=f;break}xe=x}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){a=xe;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,xe=_;else e:for(a=v;xe!==null;){if(l=xe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(C){gt(l,l.return,C)}if(l===a){xe=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,xe=w;break e}xe=l.return}}if(qe=r,er(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Ll,t)}catch{}i=!0}return i}finally{it=n,En.transition=e}}return!1}function xp(t,e,n){e=Ss(n,e),e=lg(t,e,1),t=Hi(t,e,1),e=Wt(),t!==null&&(Da(t,1,e),nn(t,e))}function gt(t,e,n){if(t.tag===3)xp(t,t,n);else for(;e!==null;){if(e.tag===3){xp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){t=Ss(n,t),t=cg(e,t,1),e=Hi(e,t,1),t=Wt(),e!==null&&(Da(e,1,t),nn(e,t));break}}e=e.return}}function jb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Pt&n)===n&&(Et===4||Et===3&&(Pt&130023424)===Pt&&500>bt()-Uh?yr(t,0):Lh|=n),nn(t,e)}function Cg(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=Wt();t=xi(t,e),t!==null&&(Da(t,e,n),nn(t,n))}function zb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cg(t,n)}function Hb(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Cg(t,n)}var kg;kg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,Cb(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ut&&e.flags&1048576&&Lx(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zo(t,e),t=e.pendingProps;var r=vs(e,zt.current);us(e,n),r=Nh(null,e,i,t,r,n);var s=Ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wh(e),r.updater=zl,e.stateNode=r,r._reactInternals=e,Hd(e,i,t,n),e=Wd(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&xh(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(zo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Gb(i),t=Pn(i,t),r){case 0:e=Gd(null,e,i,t,n);break e;case 1:e=ap(null,e,i,t,n);break e;case 11:e=rp(null,e,i,t,n);break e;case 14:e=sp(null,e,i,Pn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),ap(t,e,i,r,n);case 3:e:{if(fg(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,jx(t,e),ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ss(Error(ie(423)),e),e=op(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(ie(424)),e),e=op(t,e,i,n,r);break e}else for(un=zi(e.stateNode.containerInfo.firstChild),hn=e,ut=!0,Un=null,n=Fx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=gi(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return zx(e),t===null&&Od(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Ld(i,r)?a=null:s!==null&&Ld(i,s)&&(e.flags|=32),hg(t,e),Gt(t,e,a,n),e.child;case 6:return t===null&&Od(e),null;case 13:return pg(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=bs(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),rp(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,st(fl,i._currentValue),i._currentValue=a,s!==null)if(zn(s.value,a)){if(s.children===r.children&&!en.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=fi(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),jd(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),jd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,us(e,n),r=Tn(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),sp(t,e,i,r,n);case 15:return dg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),zo(t,e),e.tag=1,tn(i)?(t=!0,dl(e)):t=!1,us(e,n),og(e,i,r),Hd(e,i,r,n),Wd(null,e,i,!0,t,n);case 19:return mg(t,e,n);case 22:return ug(t,e,n)}throw Error(ie(156,e.tag))};function Rg(t,e){return rx(t,e)}function Vb(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new Vb(t,e,n,i)}function Oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gb(t){if(typeof t=="function")return Oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rh)return 11;if(t===sh)return 14}return 2}function Wi(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Go(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Oh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Yr:return Sr(n.children,r,s,e);case ih:a=8,r|=8;break;case hd:return t=wn(12,n,e,r|2),t.elementType=hd,t.lanes=s,t;case fd:return t=wn(13,n,e,r),t.elementType=fd,t.lanes=s,t;case pd:return t=wn(19,n,e,r),t.elementType=pd,t.lanes=s,t;case zm:return Gl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Om:a=10;break e;case jm:a=9;break e;case rh:a=11;break e;case sh:a=14;break e;case Ri:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Gl(t,e,n,i){return t=wn(22,t,i,e),t.elementType=zm,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wb(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jh(t,e,n,i,r,s,a,l,c){return t=new Wb(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(s),t}function Xb(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Dg(t){if(!t)return Yi;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(tn(n))return Dx(t,n,e)}return e}function Pg(t,e,n,i,r,s,a,l,c){return t=jh(n,i,!0,t,r,s,a,l,c),t.context=Dg(null),n=t.current,i=Wt(),r=Gi(n),s=fi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,Da(t,r,i),nn(t,i),t}function Wl(t,e,n,i){var r=e.current,s=Wt(),a=Gi(r);return n=Dg(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,a),t!==null&&(jn(t,r,a,s),Fo(t,r,a)),a}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){gp(t,e),(t=t.alternate)&&gp(t,e)}function qb(){return null}var Lg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hh(t){this._internalRoot=t}Xl.prototype.render=Hh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Wl(t,e,null,null)};Xl.prototype.unmount=Hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){Wl(null,t,null,null)}),e[mi]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ux();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&fx(t)}};function Vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function $b(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var d=wl(a);s.call(d)}}var a=Pg(e,i,t,0,null,!1,!1,"",vp);return t._reactRootContainer=a,t[mi]=a.current,ya(t.nodeType===8?t.parentNode:t),Ar(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var d=wl(c);l.call(d)}}var c=jh(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=c,t[mi]=c.current,ya(t.nodeType===8?t.parentNode:t),Ar(function(){Wl(e,c,n,i)}),c}function $l(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=wl(a);l.call(c)}}Wl(e,a,t,r)}else a=$b(n,e,t,r,i);return wl(a)}cx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(lh(e,n|1),nn(e,bt()),!(qe&6)&&(ws=bt()+500,er()))}break;case 13:Ar(function(){var i=xi(t,1);if(i!==null){var r=Wt();jn(i,t,1,r)}}),zh(t,1)}};ch=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=Wt();jn(e,t,134217728,n)}zh(t,134217728)}};dx=function(t){if(t.tag===13){var e=Gi(t),n=xi(t,e);if(n!==null){var i=Wt();jn(n,t,e,i)}zh(t,e)}};ux=function(){return it};hx=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Md=function(t,e,n){switch(e){case"input":if(gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fl(i);if(!r)throw Error(ie(90));Vm(i),gd(i,r)}}}break;case"textarea":Wm(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};Zm=Ih;Jm=Ar;var Yb={usingClientEntryPoint:!1,Events:[La,Jr,Fl,Km,Qm,Ih]},Gs={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kb={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nx(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||qb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{Ll=ro.inject(Kb),$n=ro}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yb;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(ie(200));return Xb(t,e,null,n)};pn.createRoot=function(t,e){if(!Vh(t))throw Error(ie(299));var n=!1,i="",r=Lg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jh(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,ya(t.nodeType===8?t.parentNode:t),new Hh(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=nx(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Ar(t)};pn.hydrate=function(t,e,n){if(!ql(e))throw Error(ie(200));return $l(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Vh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Lg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Pg(e,null,t,1,n??null,r,!1,s,a),t[mi]=e.current,ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xl(e)};pn.render=function(t,e,n){if(!ql(e))throw Error(ie(200));return $l(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!ql(t))throw Error(ie(40));return t._reactRootContainer?(Ar(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};pn.unstable_batchedUpdates=Ih;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ql(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return $l(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(t){console.error(t)}}Ug(),Um.exports=pn;var Qb=Um.exports,_p=Qb;dd.createRoot=_p.createRoot,dd.hydrateRoot=_p.hydrateRoot;const Zb={vi:{nav:{experience:"Trải nghiệm",getStarted:"Cách bắt đầu",builders:"Dành cho builder",faq:"FAQ",tryDemo:"Trải nghiệm demo"},hero:{statusBadge:"Bản demo • Solana Devnet",headline:`Gửi và nhận stablecoin.
Bắt đầu thật đơn giản.`,description:"N.E.D Wallet giúp bạn quản lý tài sản số qua những thao tác quen thuộc, cùng hướng dẫn để trải nghiệm lần đầu.",ctaPrimary:"Trải nghiệm demo",ctaSecondary:"Khám phá cách sử dụng",appBadge:"Màn hình ứng dụng N.E.D",illustrationTag:"Minh họa trải nghiệm",trustPill1:"Thao tác quen thuộc",trustPill2:"Solana Devnet (USDC)",trustPill3:"Thử nghiệm qua Expo"},marquee:{tag:"Mạng lưới & Đối tác đồng hành",badge:"Hệ sinh thái",scrollHint:"Lăn chuột hoặc kéo để trượt"},coreActions:{badge:"Thao tác cốt lõi",headline:"Đơn giản hóa quản lý stablecoin",receiveTitle:"Nhận",receiveDesc:"Chia sẻ thông tin để nhận tài sản.",sendTitle:"Chuyển",sendDesc:"Chọn người nhận và kiểm tra trước khi gửi.",trackTitle:"Theo dõi",trackDesc:"Xem số dư và lịch sử giao dịch."},sendFeature:{tag:"Tính năng chuyển",headline:"Chọn người nhận theo cách bạn quen.",description:"Sử dụng số điện thoại, mã QR hoặc địa chỉ ví để chọn người nhận. Kiểm tra thông tin trước khi xác nhận chuyển.",illustrationBadge:"Minh họa thao tác",illustrationNotice:"* Minh họa luồng thao tác mẫu; không kết nối ví thực tế hoặc mạng Mainnet.",modePhone:"Số điện thoại",modeQr:"Mã QR & Lắc chia tiền",modeWallet:"Địa chỉ ví Solana",modeShakeSplit:"Lắc chia tiền (Shake & Split)",modeLuckyCoin:"Phòng Lì Xì Tung Đồng Xu",recipientLabel:"Người nhận đã chọn",amountLabel:"Số lượng chuyển",amountPreset10:"10 USDC",amountPreset25:"25 USDC",amountPreset50:"50 USDC",step1Name:"1. Chọn phương thức",step2Name:"2. Nhập số tiền",step3Name:"3. Kiểm tra & Xác nhận",reviewNotice:"Xác nhận thông tin người nhận và số dư trước khi hoàn tất.",btnVerify:"Kiểm tra & Sẵn sàng gửi",statusVerified:"Thông tin hợp lệ trên Solana Devnet",mascotBubble:"Lắc máy cùng bạn bè trong 20m để chia hóa đơn on-chain siêu tốc!",showcaseTabs:{phone:"Chuyển qua SĐT",shake:"Shake & Split",coin:"Lì Xì Đồng Xu",hub:"Trung Tâm Chuyển"}},mascot:{heroGreeting:"Chào bạn! Mình là NED Teddy",heroCompanion:"Đồng hành trải nghiệm Web3 không cần Seedphrase!",sendTip:"Lắc máy để chia tiền hoặc vuốt tung đồng xu may mắn!",overviewTip:"Minh bạch từng khoản thu chi và hạn mức tháng!",demoTip:"Chỉ 30 giây để tạo ví và nhận định danh @tên.sol!",faqTip:"Có câu hỏi? Teddy ở đây để giải đáp cùng bạn!",finalTip:"Sẵn sàng trải nghiệm ví thế hệ mới trên Solana Devnet!",miniAppsTip:"Khám phá hệ sinh thái MiniApps: Tiện ích Web3 gói gọn trong 1 chạm!",buildersTip:"Cùng NED Teddy xây dựng tương lai thanh toán vi mô trên Solana!"},assetOverview:{tag:"Theo dõi tài sản",headline:"Số dư và giao dịch, trong một góc nhìn.",description:"Theo dõi số dư và xem lại lịch sử gửi, nhận ngay trong ứng dụng.",captionNote:"Chi tiết từ giao diện ứng dụng",disclaimerNotice:"Ảnh giao diện thể hiện chi tiết mẫu từ bản demo; không phản ánh số liệu hay cam kết dịch vụ thực tế của nền tảng.",balanceCardTitle:"Số dư tổng quan",balanceCardDesc:"Hiển thị tức thì tổng số dư USDC trên mạng Devnet.",recentCardTitle:"Giao dịch gần đây",recentCardDesc:"Kiểm tra nhanh các hoạt động chuyển và nhận theo thời gian thực."},demoGuide:{tag:"Cách bắt đầu",headline:"Trải nghiệm N.E.D qua video thực tế.",subtitle:"Xem toàn bộ quy trình tạo tài khoản không cần Seedphrase, chuyển stablecoin và tương tác MiniApps trên Solana Devnet.",videoBadge:"Video Walkthrough • Bản demo chính thức",openVideo:"Mở video →",openVideoWithSound:"Mở video có tiếng →",autoPlaying:"Đang tự động phát",paused:"Đã tạm dừng",unmute:"Bật tiếng",muted:"Tắt tiếng",closeVideo:"Đóng video ✕",step1Title:"Không cần Seedphrase",step1Desc:"Đăng nhập bảo mật qua Email, Google hoặc liên kết điện thoại.",step2Title:"Chia tiền Shake & Split",step2Desc:"Lắc điện thoại phát hiện thiết bị xung quanh để chia hóa đơn on-chain.",step3Title:"Định danh @tên.sol",step3Desc:"Gửi nhận stablecoin bằng tên dễ nhớ, miễn phí 100% phí gas.",contactCardTitle:"Thông tin tiếp nhận trải nghiệm demo",emailLabel:"Email liên hệ nhóm phát triển:",btnMailto:"Liên hệ nhận demo",btnCopy:"Sao chép email",btnCopied:"Đã sao chép email!",warningNotice:"Bản demo sử dụng môi trường thử nghiệm. Không gửi tài sản thật."},miniApps:{tag:"Định hướng mở rộng",statusBadge:"Đang phát triển",headline:"Thêm trải nghiệm, ngay trong N.E.D.",description:"N.E.D đang phát triển nền tảng mini-app, hướng tới việc cho phép các nhà phát triển đưa ứng dụng nhỏ vào bên trong ví.",diagramTitle:"Kiến trúc Module hóa",diagramSubtitle:"Các tiện ích bên thứ ba hoạt động trực tiếp bên trong ví",module1:"Dịch vụ & Tiện ích thường ngày",module2:"Trải nghiệm tương tác & Cộng đồng",module3:"Tích hợp thanh toán vi mô",cta:"Dành cho builder"},faq:{tag:"Giải đáp thắc mắc",headline:"Những điều bạn muốn biết.",q1:"Tôi chưa biết stablecoin thì có thể bắt đầu thế nào?",a1:"Stablecoin là tài sản số được thiết kế để bám theo giá trị tham chiếu (như USD). Bản thử nghiệm N.E.D sử dụng USDC trên Solana Devnet để bạn dễ dàng làm quen. Mục tiêu của N.E.D là giảm tối đa sự phức tạp bằng những thao tác thân thuộc, giúp bạn tiếp cận mà không cần trang bị kiến thức kỹ thuật chuyên sâu.",q2:"N.E.D có phải tài khoản ngân hàng không?",a2:"Không. N.E.D Wallet là ứng dụng ví tự quản lý tài sản số, không phải ngân hàng và không cung cấp dịch vụ tiền gửi ngân hàng. Tài sản trên ví là stablecoin số chạy trên mạng thử nghiệm blockchain, không được bảo hiểm tiền gửi như ngân hàng truyền thống.",q3:"Bản demo có sử dụng tài sản thật không?",a3:"Không. Bản demo hiện tại hoạt động hoàn toàn trên mạng Solana Devnet với tài sản thử nghiệm miễn phí. Bạn tuyệt đối không gửi tiền thật hoặc tài sản có giá trị thực tế vào bản demo này.",q4:"Tôi cần chuẩn bị gì để trải nghiệm qua Expo?",a4:"Bạn chỉ cần một điện thoại thông minh (iOS hoặc Android). Sau khi bạn gửi email liên hệ, nhóm phát triển sẽ cung cấp hướng dẫn cài đặt ứng dụng Expo và thông tin để mở bản thử nghiệm N.E.D Wallet trực tiếp trên thiết bị của bạn.",q5:"Mini-app hiện đã mở công khai chưa?",a5:"Chưa. Nền tảng mini-app đang trong giai đoạn định hướng kiến trúc và phát triển ban đầu. Chúng tôi đang mở cổng trao đổi với các builder quan tâm để lắng nghe ý tưởng và cùng phối hợp thử nghiệm khả năng tích hợp trong tương lai.",q6:"Builder liên hệ bằng cách nào?",a6:'Các nhà phát triển có thể tìm hiểu thêm tại trang Dành cho builder (/builders) hoặc gửi email trực tiếp tới tdat.100524@gmail.com với tiêu đề "N.E.D Wallet — Builder collaboration" để thảo luận về ý tưởng và phương án hợp tác.'},finalCta:{headline:"Khám phá N.E.D từ trải nghiệm đầu tiên.",description:"Liên hệ nhóm phát triển để nhận hướng dẫn dùng thử bản demo.",btnPrimary:"Liên hệ nhận demo",builderLink:"Bạn là builder? Trao đổi cùng chúng tôi."},footer:{description:"N.E.D Wallet là ứng dụng di động hỗ trợ quản lý, gửi và nhận stablecoin trên Solana Devnet qua những trải nghiệm thân thuộc.",quickLinks:"Điều hướng",contact:"Liên hệ",statusTag:"Bản demo trên Solana Devnet",disclaimer:"N.E.D Wallet hiện là sản phẩm thử nghiệm nội bộ trên mạng Solana Devnet. Đây không phải là dịch vụ tài chính hay ngân hàng được cấp phép thương mại. Vui lòng không gửi tài sản thực.",copyright:"© 2026 N.E.D Wallet. Đang phát triển."},builders:{backHome:"← Về trang chủ",badgeStatus:"Developer Portal • Tự động hóa",headline:"Đưa Mini-DApp của bạn lên N.E.D Wallet.",subtitle:"Nền tảng Developer Portal tự động: Phát triển DApp độc lập, submit thông tin qua Dashboard và tiếp cận người dùng trên Solana Devnet.",btnDashboard:"Truy cập Dashboard",btnDocs:"Đọc Tài liệu API",explainTitle:"Ứng dụng nhỏ bên trong ví",explainDesc:"Mini-app là các DApp web do bên thứ ba phát triển, chạy độc lập trong Sandbox an toàn bên trong N.E.D Wallet. Người dùng không cần rời ví và có thể tận dụng hạ tầng thanh toán stablecoin tức thì.",explainNote:"DApp hoạt động độc lập trong sandbox an toàn. Khai báo URL và cấu hình quyền hạn trực tiếp qua Developer Portal.",valuesTitle:"Giá trị nền tảng hướng tới",val1Title:"Người dùng có thêm tiện ích phong phú",val1Desc:"Cung cấp cho người dùng các tiện ích mở rộng đa dạng mà không tạo rào cản phức tạp về công nghệ hay bảo mật.",val2Title:"Kênh phân phối trực tiếp cho Builder",val2Desc:"Đưa sản phẩm của builder tiếp cận trực tiếp tệp người dùng đang hoạt động và giao dịch stablecoin trên Solana.",journeyBadge:"Quy trình tự động",journeyTitle:"Quy trình 3 bước lên sóng N.E.D",journeyNotice:"* Quy trình kiểm duyệt và phát hành hoàn toàn tự động qua N.E.D Developer Dashboard.",step1Title:"01 — Build & Tự Host",step1Desc:"Phát triển DApp độc lập và tự lưu trữ mã nguồn.",step2Title:"02 — Submit qua Portal",step2Desc:"Khai báo URL, Logo và Mô tả thông qua Dashboard của N.E.D.",step3Title:"03 — Duyệt & Lên sóng",step3Desc:"Theo dõi trạng thái kiểm duyệt realtime, tự động xuất hiện trên ví người dùng khi được Approve.",ctaHeadline:"Sẵn sàng đưa DApp của bạn lên N.E.D?",ctaDesc:"Tham gia hệ sinh thái Developer Portal ngay hôm nay. Khai báo và quản lý ứng dụng của bạn qua Dashboard chỉ trong vài phút.",ctaSubmit:"Bắt đầu Submit Dự án"}},en:{nav:{experience:"Experience",getStarted:"Get started",builders:"For builders",faq:"FAQ",tryDemo:"Try the demo"},hero:{statusBadge:"Demo • Solana Devnet",headline:`Send and receive stablecoins.
Start simple.`,description:"Manage digital assets through familiar actions, with guidance for your first experience.",ctaPrimary:"Try the demo",ctaSecondary:"See how it works",appBadge:"N.E.D Mobile Interface",illustrationTag:"Experience Illustration",trustPill1:"Familiar Interactions",trustPill2:"Solana Devnet (USDC)",trustPill3:"Expo Mobile Preview"},marquee:{tag:"Network & Ecosystem Partners",badge:"Ecosystem",scrollHint:"Scroll or drag to explore"},coreActions:{badge:"Core Actions",headline:"Simplifying Stablecoin Management",receiveTitle:"Receive",receiveDesc:"Share your details to receive assets.",sendTitle:"Send",sendDesc:"Choose a recipient and review before sending.",trackTitle:"Track",trackDesc:"View your balance and transaction history."},sendFeature:{tag:"Send Feature",headline:"Choose a recipient in a familiar way.",description:"Choose a recipient using a phone number, QR code, or wallet address. Review the details before confirming.",illustrationBadge:"Flow illustration",illustrationNotice:"* Sample flow illustration; does not connect to real wallets or Mainnet.",modePhone:"Phone number",modeQr:"QR & Shake & Split",modeWallet:"Solana Wallet",modeShakeSplit:"Shake & Split",modeLuckyCoin:"Lucky Coin Room",recipientLabel:"Selected Recipient",amountLabel:"Send Amount",amountPreset10:"10 USDC",amountPreset25:"25 USDC",amountPreset50:"50 USDC",step1Name:"1. Choose method",step2Name:"2. Enter amount",step3Name:"3. Review & confirm",reviewNotice:"Review recipient details and balance before finalizing the test transfer.",btnVerify:"Review & Ready to Send",statusVerified:"Details verified on Solana Devnet",mascotBubble:"Shake phones with friends within 20m to split group bills in seconds!",showcaseTabs:{phone:"Send by Phone",shake:"Shake & Split",coin:"Lucky Coin",hub:"Transfer Hub"}},mascot:{heroGreeting:"Hi there! I am NED Teddy",heroCompanion:"Your companion for seedphrase-less Web3 payments!",sendTip:"Shake to split bills or flip a lucky coin on-chain!",overviewTip:"Clear tracking of monthly cashflow and budget limits!",demoTip:"Takes only 30 seconds to claim your @handle.sol on Devnet!",faqTip:"Have questions? Teddy is here to help you out!",finalTip:"Ready to try next-gen stablecoin wallet on Solana Devnet!",miniAppsTip:"Explore the MiniApps ecosystem: Instant Web3 services in one tap!",buildersTip:"Build the future of micro-payments on Solana with NED Teddy!"},assetOverview:{tag:"Asset Overview",headline:"Your balance and activity, at a glance.",description:"Check your balance and review your sending and receiving activity in the app.",captionNote:"Detail from the app interface",disclaimerNotice:"Interface image shows sample details from the demo; not actual platform or user metrics.",balanceCardTitle:"Overview Balance",balanceCardDesc:"Instantly view test USDC balances on Solana Devnet.",recentCardTitle:"Recent Activity",recentCardDesc:"Quickly inspect your sending and receiving history in real time."},demoGuide:{tag:"Quick Start",headline:"Experience N.E.D in action.",subtitle:"Watch the full walkthrough of seedphrase-less onboarding, stablecoin transfers, and MiniApps interaction on Solana Devnet.",videoBadge:"Official Walkthrough • Video Preview",openVideo:"Watch video →",openVideoWithSound:"Watch with sound →",autoPlaying:"Auto-playing",paused:"Paused",unmute:"Unmute",muted:"Muted",closeVideo:"Close video ✕",step1Title:"Seedphrase-less Setup",step1Desc:"Instant secure sign in using Email, Google, or phone recovery.",step2Title:"Shake & Split",step2Desc:"Shake phones together to split group bills in seconds on-chain.",step3Title:"Claim @name.sol Handle",step3Desc:"Send and receive using human-readable names with 100% sponsored gas.",contactCardTitle:"Demo Onboarding Contact",emailLabel:"Direct team contact email:",btnMailto:"Request demo access",btnCopy:"Copy email",btnCopied:"Email copied!",warningNotice:"The demo runs in a test environment. Do not send real assets."},miniApps:{tag:"Extensibility Direction",statusBadge:"In development",headline:"More experiences, inside N.E.D.",description:"N.E.D is developing a mini-app platform that aims to bring third-party experiences into the wallet.",diagramTitle:"Modular Architecture",diagramSubtitle:"Third-party experiences running directly within the wallet",module1:"Everyday Utilities & Services",module2:"Interactive Community & Games",module3:"Micro-Payment Integrations",cta:"For builders"},faq:{tag:"FAQ",headline:"Questions before you start?",q1:"How can I get started if I'm new to stablecoins?",a1:"Stablecoins are digital assets designed to track a reference value (such as USD). The N.E.D demo utilizes test USDC on Solana Devnet so you can explore comfortably. N.E.D aims to minimize onboarding complexity with familiar interactions, without requiring deep technical knowledge.",q2:"Is N.E.D a bank account?",a2:"No. N.E.D Wallet is a self-custodial digital asset wallet application, not a bank, and does not offer bank deposit services. Assets within the wallet are digital stablecoins on a blockchain test network, and are not bank-insured deposits.",q3:"Does the demo use real assets?",a3:"No. The current demo runs strictly on Solana Devnet with free test assets. Do not send real funds or valuable real assets to this demo.",q4:"What do I need to prepare to try the demo via Expo?",a4:"All you need is a smartphone (iOS or Android). After you contact the team via email, we will provide installation steps for Expo and guidance to open the N.E.D Wallet test build directly on your device.",q5:"Are mini-apps publicly available yet?",a5:"Not yet. The mini-app platform is in early architectural development. We are actively engaging with interested builders to exchange ideas and explore future integration feasibility together.",q6:"How can builders get in touch?",a6:'Builders can learn more on the For Builders page (/builders) or reach out directly to tdat.100524@gmail.com with the subject "N.E.D Wallet — Builder collaboration" to discuss concepts and collaboration opportunities.'},finalCta:{headline:"Take your first look at N.E.D.",description:"Contact the team for guidance on trying the demo.",btnPrimary:"Request demo access",builderLink:"Building a mini-app? Let's talk."},footer:{description:"N.E.D Wallet is a mobile application for managing, sending, and receiving stablecoins on Solana Devnet through familiar interactions.",quickLinks:"Navigation",contact:"Contact",statusTag:"Solana Devnet Demo",disclaimer:"N.E.D Wallet is an internal test application operating on the Solana Devnet. It is not an authorized banking or commercial financial service. Please do not send real assets.",copyright:"© 2026 N.E.D Wallet. In active development."},builders:{backHome:"← Back to home",badgeStatus:"Developer Portal • Automated Submission",headline:"Launch your Mini-DApp on N.E.D Wallet.",subtitle:"Automated Developer Portal: Build independently, submit via Dashboard, and distribute your DApp to users on Solana Devnet.",btnDashboard:"Access Dashboard",btnDocs:"Read API Docs",explainTitle:"Third-Party Apps Inside the Wallet",explainDesc:"Mini-apps are third-party web DApps running independently inside a secure sandbox within N.E.D Wallet. Users never have to leave the wallet and enjoy instant stablecoin settlements.",explainNote:"DApps run independently in a secure sandbox. Declare URL and configure permissions directly via Developer Portal.",valuesTitle:"Platform Goals & Vision",val1Title:"Richer Experiences for Users",val1Desc:"Equipping users with varied everyday utilities without imposing technical or security friction.",val2Title:"Direct Distribution Channel for Builders",val2Desc:"Helping builder products tap directly into an active user base looking for fast stablecoin transactions on Solana.",journeyBadge:"Automated Workflow",journeyTitle:"3 Steps to Launch on N.E.D",journeyNotice:"* Automated review and release workflow managed directly through N.E.D Developer Dashboard.",step1Title:"01 — Build & Self-Host",step1Desc:"Develop independent DApps and self-host your own source code.",step2Title:"02 — Submit via Portal",step2Desc:"Declare your App URL, Logo, and Description through the N.E.D Dashboard.",step3Title:"03 — Review & Go Live",step3Desc:"Track real-time review status; automatically appears in user wallets once Approved.",ctaHeadline:"Ready to launch your DApp on N.E.D?",ctaDesc:"Join the Developer Portal ecosystem today. Register and submit your application via the Dashboard in minutes.",ctaSubmit:"Start Project Submission"}}},Ig=oe.createContext(void 0),Jb=({children:t})=>{const[e,n]=oe.useState(()=>{try{const s=localStorage.getItem("ned_wallet_lang");if(s==="vi"||s==="en")return s}catch{}return"vi"}),i=s=>{n(s);try{localStorage.setItem("ned_wallet_lang",s)}catch{}};oe.useEffect(()=>{document.documentElement.lang=e,e==="vi"?document.title="N.E.D Wallet — Ví Web3 cho Stablecoin trên Solana Devnet":document.title="N.E.D Wallet — Simple Web3 Stablecoin Wallet on Solana Devnet"},[e]);const r={lang:e,setLang:i,t:Zb[e]};return o.jsx(Ig.Provider,{value:r,children:t})},xn=()=>{const t=oe.useContext(Ig);if(!t)throw new Error("useI18n must be used within an I18nProvider");return t};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ty(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:ey(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=t=>{const e=ny(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function kc(t){return t!=null}function ry(t,e={}){var f,x;const n=e.attributeNames??{},i=g=>n[g]??g,r=t.size??t.width??ir.width,s=t.size??t.height??ir.height,a=((f=t.aliases)==null?void 0:f.filter(g=>typeof g=="string"&&g.trim()!=="").map(g=>`lucide-${g}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...a],c=((x=e.className)==null?void 0:x.split(" ").filter(Boolean))??[],d=e.includeDefaultClasses===!1?iu(...c):iu("lucide",...l,...c),h=e.absoluteStrokeWidth?Number(e.strokeWidth??ir["stroke-width"])*Number(t.size??t.width??ir.width)/Number(e.size??e.width??ir.width):e.strokeWidth??ir["stroke-width"];return["svg",{...Object.entries(ir).reduce((g,[y,m])=>(g[i(y)]=m,g),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&kc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&kc(e.width)&&{[i("width")]:e.width},..."height"in e&&kc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...d&&{[i("class")]:d},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(g=>{const[y,m,u]=g,v=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return u?[y,v,u]:[y,v]})]}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function sy(t,e={}){return ry(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},oy=oe.createContext({}),ly=()=>oe.useContext(oy),cy=oe.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:l="",children:c,iconNode:d=[],icon:h={node:d,aliases:[],size:24},...p},f)=>{const{size:x=24,strokeWidth:g=2,absoluteStrokeWidth:y=!1,nonScalingStroke:m=!1,color:u="currentColor",className:v=""}=ly()??{},_=!!c||ay(p),[w,C,N=[]]=sy(h,{color:t??u,width:n??e??x,height:i??e??x,strokeWidth:r??g,absoluteStrokeWidth:s??y,nonScalingStroke:a??m,className:iu(v,l),hasA11yProp:_,attributes:p});return oe.createElement(w,{ref:f,...C},[...N.map(([T,k])=>oe.createElement(T,k)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Pe(t,e=[],n=[]){const i=typeof t=="string"?ty(t,e,n):t,r=oe.forwardRef(({className:s,...a},l)=>oe.createElement(cy,{ref:l,icon:i,className:s,...a}));return i.name&&(r.displayName=iy(i.name)),r}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"arrow-down-left",size:24,node:[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]};Bg.node;const ru=Pe(Bg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};Fg.node;const Og=Pe(Fg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};jg.node;const vi=Pe(jg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};zg.node;const Wo=Pe(zg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg={name:"blocks",size:24,node:[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]]};Hg.node;const Vg=Pe(Hg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Gg.node;const bp=Pe(Gg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg={name:"chart-pie",size:24,node:[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],aliases:["pie-chart"]};Wg.node;const dy=Pe(Wg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Xg.node;const Ml=Pe(Xg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};qg.node;const uy=Pe(qg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};$g.node;const Yg=Pe($g);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};Kg.node;const Qg=Pe(Kg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Zg.node;const In=Pe(Zg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};Jg.node;const hy=Pe(Jg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};ev.node;const tv=Pe(ev);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};nv.node;const ha=Pe(nv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv={name:"code",size:24,node:[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]};iv.node;const fy=Pe(iv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};rv.node;const py=Pe(rv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};sv.node;const av=Pe(sv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};ov.node;const my=Pe(ov);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};lv.node;const xy=Pe(lv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};cv.node;const gy=Pe(cv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};dv.node;const Gh=Pe(dv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};uv.node;const hv=Pe(uv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv={name:"layout-dashboard",size:24,node:[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]};fv.node;const su=Pe(fv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};pv.node;const vy=Pe(pv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};mv.node;const au=Pe(mv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};xv.node;const _y=Pe(xv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};gv.node;const by=Pe(gv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};vv.node;const ou=Pe(vv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};_v.node;const yp=Pe(_v);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv={name:"qr-code",size:24,node:[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]};bv.node;const yv=Pe(bv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};Sv.node;const yy=Pe(Sv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};wv.node;const Sy=Pe(wv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};Mv.node;const wy=Pe(Mv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Ev.node;const El=Pe(Ev);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};Tv.node;const Av=Pe(Tv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};Nv.node;const My=Pe(Nv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Cv.node;const _i=Pe(Cv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};kv.node;const Ey=Pe(kv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Rv.node;const Ty=Pe(Rv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};Dv.node;const Ay=Pe(Dv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Pv.node;const Ny=Pe(Pv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Lv.node;const Cy=Pe(Lv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv={name:"wallet",size:24,node:[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]};Uv.node;const fs=Pe(Uv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Iv.node;const Bv=Pe(Iv),Te={productName:"N.E.D Wallet",contactEmail:"tdat.100524@gmail.com",network:"Solana Devnet",platform:"Expo (iOS & Android)",logoAsset:"/assets/ned-logo.jpg",appLogoAsset:"/assets/brand/logo_app.jpg",brandNedLogo:"/assets/brand/logo_ned_wallet.jpg",brandColors:"/assets/brand/brand_colors.jpg",mascots:{waving:"/assets/brand/mascot/waving.png",happy:"/assets/brand/mascot/happy.png",proud:"/assets/brand/mascot/proud.png",exciting:"/assets/brand/mascot/exciting.png",curious:"/assets/brand/mascot/curious.png",thinking:"/assets/brand/mascot/thinking.png",laughing:"/assets/brand/mascot/laughing.png",surprised:"/assets/brand/mascot/surprised.png",sleepy:"/assets/brand/mascot/sleepy.png",scared:"/assets/brand/mascot/scared.png",sad:"/assets/brand/mascot/sad.png",angry:"/assets/brand/mascot/angry.png",confused:"/assets/brand/mascot/confused.png",crying:"/assets/brand/mascot/crying.png",embarrassed:"/assets/brand/mascot/embarrassed.png",frustrated:"/assets/brand/mascot/frustrated.png"},screenshots:{dashboardHome:"/assets/screenshots/app_dashboard_home.png",analyticsCashflow:"/assets/screenshots/app_analytics_cashflow.png",transferCenter:"/assets/screenshots/app_transfer_center.png",transferPhone:"/assets/screenshots/app_transfer_phone.png",shakeSplit:"/assets/screenshots/app_shake_split.png",luckyCoin:"/assets/screenshots/app_lucky_coin.png",miniappsHub:"/assets/screenshots/app_miniapps_hub.png",login:"/assets/screenshots/app_login.png",register:"/assets/screenshots/app_register.png",emailOtp:"/assets/screenshots/app_email_otp.png",phoneSecurity:"/assets/screenshots/app_phone_security.png",phoneOtp:"/assets/screenshots/app_phone_otp.png",handleClaim:"/assets/screenshots/app_handle_claim.png",welcomeSuccess:"/assets/screenshots/app_welcome_success.png"},homeScreenshotAsset:"/assets/screenshots/app_dashboard_home.png",sendScreenshotAsset:"/assets/screenshots/app_transfer_phone.png",demoMailSubject:"N.E.D Wallet — Demo request",demoMailBodyVi:`Chào team N.E.D,

Tôi muốn đăng ký nhận hướng dẫn trải nghiệm bản demo N.E.D Wallet qua Expo trên Solana Devnet.

Thông tin của tôi:
- Thiết bị (iOS/Android):
- Email nhận hướng dẫn Expo:

Cảm ơn team!`,demoMailBodyEn:`Hello N.E.D team,

I would like to request access and guidance to try the N.E.D Wallet demo via Expo on Solana Devnet.

My details:
- Device (iOS/Android):
- Email for Expo guidance:

Thank you!`,builderMailSubject:"N.E.D Wallet — Builder collaboration",builderMailBodyVi:`Chào team N.E.D,

Tôi là nhà phát triển / builder quan tâm đến định hướng mini-app trên N.E.D Wallet.

Ý tưởng / Dự án của tôi:
- Tên dự án / sản phẩm:
- Mô tả trải nghiệm muốn đưa vào ví:
- Kênh liên hệ thuận tiện:

Rất mong được trao đổi thêm cùng nhóm!`,builderMailBodyEn:`Hello N.E.D team,

I am a developer/builder interested in the mini-app platform inside N.E.D Wallet.

My project / concept:
- Project name:
- Description of experience for the wallet:
- Preferred contact channel:

Looking forward to discussing further with the team!`,demoUrl:"",demoVideo:{id:"6t4StC59mrQ",url:"https://youtu.be/6t4StC59mrQ?si=pssML1KZW4lWzu_D",embedUrl:"https://www.youtube.com/embed/6t4StC59mrQ?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&mute=1",localVideoAsset:"/assets/ned_wallet_demo.mp4",rawLocalVideoAsset:"/assets/N.E.D%20Wallet%20m%E1%BB%9Bi.mp4",thumbnail:"https://img.youtube.com/vi/6t4StC59mrQ/maxresdefault.jpg"},stablecoinToken:"USDC (Solana Devnet)",supportedIdentities:["Số điện thoại / Phone number","Mã QR / QR Code","Địa chỉ ví / Wallet address"]},lu=({className:t="h-10",isDark:e=!0})=>o.jsxs("div",{className:`inline-flex items-center gap-2.5 select-none ${t}`,children:[o.jsxs("div",{className:"relative w-10 h-10 rounded-xl bg-brand-deepPurple border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center overflow-hidden transition-transform hover:-rotate-3 flex-shrink-0",children:[o.jsx("img",{src:Te.logoAsset,alt:"N.E.D Logo",className:"w-full h-full object-cover",onError:n=>{n.currentTarget.style.display="none"}}),o.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-7 h-7 absolute inset-0 m-auto pointer-events-none -z-10",children:[o.jsx("path",{d:"M12 28L24 8L36 28H12Z",fill:"#B497F0"}),o.jsx("path",{d:"M4 22L16 22L12 28L0 28Z",fill:"#B497F0",opacity:"0.8"})]})]}),o.jsxs("div",{className:"flex flex-col text-left",children:[o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:`font-black text-xl tracking-wider leading-none ${e?"text-brand-offWhite":"text-brand-inkBlack"}`,children:"N.E.D"}),o.jsx("span",{className:"px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest bg-brand-cyan text-brand-inkBlack border border-brand-inkBlack rounded shadow-brutal-xs",children:"DEVNET"})]}),o.jsx("span",{className:`text-[10px] font-extrabold uppercase tracking-widest leading-none mt-1 ${e?"text-brand-lavender":"text-stone-600"}`,children:"Wallet"})]})]}),ky=({currentPath:t,onNavigate:e})=>{const{t:n,lang:i,setLang:r}=xn(),[s,a]=oe.useState(!1),l=oe.useRef(null),c=oe.useRef(null);oe.useEffect(()=>{const h=p=>{p.key==="Escape"&&s&&a(!1)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[s]),oe.useEffect(()=>{s&&c.current&&c.current.focus()},[s]);const d=h=>{if(a(!1),h.startsWith("#"))if(t!=="/")e("/"),setTimeout(()=>{const p=document.querySelector(h);p==null||p.scrollIntoView({behavior:"smooth"})},100);else{const p=document.querySelector(h);p==null||p.scrollIntoView({behavior:"smooth"})}else e(h),window.scrollTo({top:0,behavior:"smooth"})};return o.jsxs("header",{className:"sticky top-0 z-50 w-full bg-brand-deepPurple/95 border-b-3 border-brand-inkBlack backdrop-blur-none px-4 sm:px-6 lg:px-8 py-3 transition-colors",children:[o.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-4",children:[o.jsx("button",{onClick:()=>d("/"),className:"focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg p-1 text-left flex items-center","aria-label":"N.E.D Wallet Home",children:o.jsx(lu,{isDark:!0})}),o.jsxs("nav",{className:"hidden md:flex items-center gap-1 lg:gap-2","aria-label":"Main Navigation",children:[o.jsx("button",{onClick:()=>d("#experience"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.experience}),o.jsx("button",{onClick:()=>d("#demo"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.getStarted}),o.jsx("button",{onClick:()=>d("/builders"),className:`px-3 py-1.5 text-sm font-bold rounded-lg transition-colors border-2 ${t==="/builders"?"bg-brand-lavender text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs":"text-brand-offWhite border-transparent hover:border-brand-lavender/50"}`,children:n.nav.builders}),o.jsx("button",{onClick:()=>d("#faq"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.faq})]}),o.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[o.jsxs("div",{className:"flex items-center bg-brand-darkSurface border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[o.jsx("button",{onClick:()=>r("vi"),className:`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${i==="vi"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-300 hover:text-white"}`,"aria-label":"Chuyển sang Tiếng Việt","aria-pressed":i==="vi",children:"VI"}),o.jsx("button",{onClick:()=>r("en"),className:`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${i==="en"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-300 hover:text-white"}`,"aria-label":"Switch to English","aria-pressed":i==="en",children:"EN"})]}),o.jsxs("button",{onClick:()=>d("#demo"),className:"btn-brutal-primary px-4 py-2 rounded-xl text-sm font-black flex items-center gap-1.5",children:[o.jsx("span",{children:n.nav.tryDemo}),o.jsx(vi,{className:"w-4 h-4"})]})]}),o.jsxs("div",{className:"flex items-center gap-2 md:hidden",children:[o.jsxs("button",{onClick:()=>r(i==="vi"?"en":"vi"),className:"px-2.5 py-1 text-xs font-black bg-brand-darkSurface border-2 border-brand-inkBlack text-brand-offWhite rounded-lg shadow-brutal-xs flex items-center gap-1","aria-label":"Toggle language",children:[o.jsx(Gh,{className:"w-3.5 h-3.5 text-brand-cyan"}),o.jsx("span",{children:i.toUpperCase()})]}),o.jsx("button",{onClick:()=>a(!0),className:"p-2 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs","aria-label":"Open Navigation Menu","aria-expanded":s,children:o.jsx(_y,{className:"w-5 h-5"})})]})]}),s&&o.jsx("div",{className:"fixed inset-0 z-50 bg-brand-deepPurple/80 backdrop-blur-sm flex justify-end md:hidden animate-in fade-in",onClick:()=>a(!1),children:o.jsxs("div",{ref:l,className:"w-[85%] max-w-sm h-full bg-brand-warmCream border-l-4 border-brand-inkBlack p-6 flex flex-col justify-between shadow-brutal-xl overflow-y-auto",onClick:h=>h.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Mobile Navigation",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between pb-4 border-b-2 border-brand-inkBlack mb-6",children:[o.jsx(lu,{isDark:!1}),o.jsx("button",{ref:c,onClick:()=>a(!1),className:"p-2 bg-white border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs hover:bg-brand-paleYellow","aria-label":"Close menu",children:o.jsx(Bv,{className:"w-5 h-5 text-brand-inkBlack"})})]}),o.jsxs("nav",{className:"flex flex-col gap-3",children:[o.jsx("button",{onClick:()=>d("#experience"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.experience}),o.jsx("button",{onClick:()=>d("#demo"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.getStarted}),o.jsx("button",{onClick:()=>d("/builders"),className:`w-full text-left py-3 px-4 border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs ${t==="/builders"?"bg-brand-lavender":"bg-white hover:bg-brand-lavender/30"}`,children:n.nav.builders}),o.jsx("button",{onClick:()=>d("#faq"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.faq})]})]}),o.jsxs("div",{className:"pt-6 border-t-2 border-brand-inkBlack flex flex-col gap-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-black uppercase text-stone-600",children:"Ngôn ngữ / Language:"}),o.jsxs("div",{className:"flex bg-white border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[o.jsx("button",{onClick:()=>r("vi"),className:`px-3 py-1 text-xs font-black rounded-lg ${i==="vi"?"bg-brand-lime border border-brand-inkBlack":"text-stone-600"}`,children:"VI"}),o.jsx("button",{onClick:()=>r("en"),className:`px-3 py-1 text-xs font-black rounded-lg ${i==="en"?"bg-brand-lime border border-brand-inkBlack":"text-stone-600"}`,children:"EN"})]})]}),o.jsxs("button",{onClick:()=>d("#demo"),className:"w-full py-3 bg-brand-lavender text-brand-inkBlack border-3 border-brand-inkBlack rounded-xl font-black text-sm shadow-brutal flex items-center justify-center gap-2",children:[o.jsx("span",{children:n.nav.tryDemo}),o.jsx(vi,{className:"w-4 h-4"})]})]})]})})]})},Fe=({children:t,animation:e="fade-up",delay:n=0,className:i="",threshold:r=.08})=>{const[s,a]=oe.useState(!1),l=oe.useRef(null);oe.useEffect(()=>{if(typeof window<"u"&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window))){a(!0);return}const d=l.current;if(!d)return;const h=d.getBoundingClientRect();if(h.top<window.innerHeight&&h.bottom>0){a(!0);return}const f=new IntersectionObserver(([x])=>{x.isIntersecting&&(a(!0),f.unobserve(d))},{threshold:r,rootMargin:"0px 0px -20px 0px"});return f.observe(d),()=>{f.disconnect()}},[r]);const c=()=>{switch(e){case"pop":return"reveal-pop";case"slide-left":return"reveal-slide-left";case"slide-right":return"reveal-slide-right";case"fade-up":default:return"reveal-fade-up"}};return o.jsx("div",{ref:l,style:{transitionDelay:`${n}ms`},className:`reveal-item ${c()} ${s?"reveal-visible":""} ${i}`,children:t})},Ry=({onNavigate:t})=>{const{t:e,lang:n,setLang:i}=xn(),r=s=>{if(s.startsWith("#")){const a=document.querySelector(s);a?a.scrollIntoView({behavior:"smooth"}):(t("/"),setTimeout(()=>{var l;(l=document.querySelector(s))==null||l.scrollIntoView({behavior:"smooth"})},120))}else t(s),window.scrollTo({top:0,behavior:"smooth"})};return o.jsx("footer",{className:"w-full bg-brand-deepPurple text-brand-offWhite border-t-4 border-brand-inkBlack py-12 sm:py-16 px-4 sm:px-6 lg:px-8 select-none",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs(Fe,{animation:"fade-up",delay:0,children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-brand-lavender/20",children:[o.jsxs("div",{className:"md:col-span-5 flex flex-col items-start",children:[o.jsx("button",{onClick:()=>r("/"),className:"mb-4 text-left","aria-label":"N.E.D Wallet Home",children:o.jsx(lu,{isDark:!0})}),o.jsx("p",{className:"text-sm font-medium text-stone-300 max-w-md leading-relaxed mb-4",children:e.footer.description}),o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-brand-darkSurface border border-brand-lavender rounded-lg text-xs font-black text-brand-lime",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-pulse"}),o.jsx("span",{children:e.footer.statusTag})]})]}),o.jsxs("div",{className:"md:col-span-3 flex flex-col gap-3",children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-brand-lavender",children:e.footer.quickLinks}),o.jsxs("nav",{className:"flex flex-col gap-2 text-sm font-bold text-stone-300",children:[o.jsx("button",{onClick:()=>r("#experience"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.experience}),o.jsx("button",{onClick:()=>r("#send"),className:"text-left hover:text-white transition-colors cursor-pointer",children:"Chuyển stablecoin"}),o.jsx("button",{onClick:()=>r("#overview"),className:"text-left hover:text-white transition-colors cursor-pointer",children:"Tổng quan tài sản"}),o.jsx("button",{onClick:()=>r("#demo"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.getStarted}),o.jsx("button",{onClick:()=>r("/builders"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.builders}),o.jsx("button",{onClick:()=>r("#faq"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.faq})]})]}),o.jsxs("div",{className:"md:col-span-4 flex flex-col gap-4",children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-brand-lavender mb-2",children:e.footer.contact}),o.jsx("div",{className:"text-sm font-bold text-stone-300 mb-1",children:"Email nhóm phát triển:"}),o.jsx("a",{href:`mailto:${Te.contactEmail}`,className:"text-sm font-black text-brand-cyan hover:underline break-all",children:Te.contactEmail}),o.jsx("div",{className:"text-xs text-stone-400 font-medium mt-1",children:"Phản hồi hướng dẫn tiếp cận bản demo trong vòng 24 giờ làm việc."})]}),o.jsxs("div",{className:"pt-2",children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-400 mb-2",children:"Ngôn ngữ / Language:"}),o.jsxs("div",{className:"inline-flex bg-brand-darkSurface border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[o.jsx("button",{onClick:()=>i("vi"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all ${n==="vi"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-400 hover:text-white"}`,children:"Tiếng Việt"}),o.jsx("button",{onClick:()=>i("en"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all ${n==="en"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-400 hover:text-white"}`,children:"English"})]})]})]})]}),o.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-stone-400",children:[o.jsx("p",{className:"max-w-3xl leading-relaxed",children:e.footer.disclaimer}),o.jsx("div",{className:"text-stone-500 flex-shrink-0",children:e.footer.copyright})]})]})})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="169",Dy=0,Sp=1,Py=2,Fv=1,Ly=2,si=3,Ki=0,rn=1,li=2,Xi=0,ps=1,wp=2,Mp=3,Ep=4,Uy=5,pr=100,Iy=101,By=102,Fy=103,Oy=104,jy=200,zy=201,Hy=202,Vy=203,cu=204,du=205,Gy=206,Wy=207,Xy=208,qy=209,$y=210,Yy=211,Ky=212,Qy=213,Zy=214,uu=0,hu=1,fu=2,Ms=3,pu=4,mu=5,xu=6,gu=7,Ov=0,Jy=1,eS=2,qi=0,tS=1,nS=2,iS=3,rS=4,sS=5,aS=6,oS=7,jv=300,Es=301,Ts=302,vu=303,_u=304,Yl=306,bu=1e3,_r=1001,yu=1002,Mn=1003,lS=1004,so=1005,Bn=1006,Rc=1007,br=1008,bi=1009,zv=1010,Hv=1011,ka=1012,Xh=1013,Nr=1014,ui=1015,Ia=1016,qh=1017,$h=1018,As=1020,Vv=35902,Gv=1021,Wv=1022,Fn=1023,Xv=1024,qv=1025,ms=1026,Ns=1027,$v=1028,Yh=1029,Yv=1030,Kh=1031,Qh=1033,Xo=33776,qo=33777,$o=33778,Yo=33779,Su=35840,wu=35841,Mu=35842,Eu=35843,Tu=36196,Au=37492,Nu=37496,Cu=37808,ku=37809,Ru=37810,Du=37811,Pu=37812,Lu=37813,Uu=37814,Iu=37815,Bu=37816,Fu=37817,Ou=37818,ju=37819,zu=37820,Hu=37821,Ko=36492,Vu=36494,Gu=36495,Kv=36283,Wu=36284,Xu=36285,qu=36286,cS=3200,dS=3201,Qv=0,uS=1,Ui="",Gn="srgb",tr="srgb-linear",Zh="display-p3",Kl="display-p3-linear",Tl="linear",ct="srgb",Al="rec709",Nl="p3",Lr=7680,Tp=519,hS=512,fS=513,pS=514,Zv=515,mS=516,xS=517,gS=518,vS=519,Ap=35044,Np="300 es",hi=2e3,Cl=2001;class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qo=Math.PI/180,$u=180/Math.PI;function Ba(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function _S(t,e){return(t%e+e)%e}function Dc(t,e,n){return(1-n)*t+n*e}function Ws(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,a,l,c,d){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,d)}set(e,n,i,r,s,a,l,c,d){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],d=i[1],h=i[4],p=i[7],f=i[2],x=i[5],g=i[8],y=r[0],m=r[3],u=r[6],v=r[1],_=r[4],w=r[7],C=r[2],N=r[5],T=r[8];return s[0]=a*y+l*v+c*C,s[3]=a*m+l*_+c*N,s[6]=a*u+l*w+c*T,s[1]=d*y+h*v+p*C,s[4]=d*m+h*_+p*N,s[7]=d*u+h*w+p*T,s[2]=f*y+x*v+g*C,s[5]=f*m+x*_+g*N,s[8]=f*u+x*w+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],h=e[8];return n*a*h-n*l*d-i*s*h+i*l*c+r*s*d-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],h=e[8],p=h*a-l*d,f=l*c-h*s,x=d*s-a*c,g=n*p+i*f+r*x;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=p*y,e[1]=(r*d-h*i)*y,e[2]=(l*i-r*a)*y,e[3]=f*y,e[4]=(h*n-r*c)*y,e[5]=(r*s-l*n)*y,e[6]=x*y,e[7]=(i*c-d*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),d=Math.sin(s);return this.set(i*c,i*d,-i*(c*a+d*l)+a+e,-r*d,r*c,-r*(-d*a+c*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(Pc.makeScale(e,n)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new Be;function Jv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bS(){const t=kl("canvas");return t.style.display="block",t}const Cp={};function Zo(t){t in Cp||(Cp[t]=!0,console.warn(t))}function yS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function SS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const kp=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rp=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[tr]:{transfer:Tl,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Gn]:{transfer:ct,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Kl]:{transfer:Tl,primaries:Nl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Rp),fromReference:t=>t.applyMatrix3(kp)},[Zh]:{transfer:ct,primaries:Nl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rp),fromReference:t=>t.applyMatrix3(kp).convertLinearToSRGB()}},MS=new Set([tr,Kl]),Je={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!MS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Xs[e].toReference,r=Xs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Xs[t].primaries},getTransfer:function(t){return t===Ui?Tl:Xs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Xs[e].luminanceCoefficients)}};function xs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ur;class ES{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=kl("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xs(n[i]/255)*255):n[i]=xs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TS=0;class e0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Uc(r[a].image)):s.push(Uc(r[a]))}else s=Uc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ES.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AS=0;class sn extends Ps{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=_r,r=_r,s=Bn,a=br,l=Fn,c=bi,d=sn.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Ba(),this.name="",this.source=new e0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bu:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case yu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bu:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case yu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=jv;sn.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,n=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,d=c[0],h=c[4],p=c[8],f=c[1],x=c[5],g=c[9],y=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(g+m)<.1&&Math.abs(d+x+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(d+1)/2,w=(x+1)/2,C=(u+1)/2,N=(h+f)/4,T=(p+y)/4,k=(g+m)/4;return _>w&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=N/i,s=T/i):w>C?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=N/r,s=k/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=k/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(p-y)/v,this.z=(f-h)/v,this.w=Math.acos((d+x+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NS extends Ps{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new e0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends NS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class t0 extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],d=i[r+1],h=i[r+2],p=i[r+3];const f=s[a+0],x=s[a+1],g=s[a+2],y=s[a+3];if(l===0){e[n+0]=c,e[n+1]=d,e[n+2]=h,e[n+3]=p;return}if(l===1){e[n+0]=f,e[n+1]=x,e[n+2]=g,e[n+3]=y;return}if(p!==y||c!==f||d!==x||h!==g){let m=1-l;const u=c*f+d*x+h*g+p*y,v=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const C=Math.sqrt(_),N=Math.atan2(C,u*v);m=Math.sin(m*N)/C,l=Math.sin(l*N)/C}const w=l*v;if(c=c*m+f*w,d=d*m+x*w,h=h*m+g*w,p=p*m+y*w,m===1-l){const C=1/Math.sqrt(c*c+d*d+h*h+p*p);c*=C,d*=C,h*=C,p*=C}}e[n]=c,e[n+1]=d,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],d=i[r+2],h=i[r+3],p=s[a],f=s[a+1],x=s[a+2],g=s[a+3];return e[n]=l*g+h*p+c*x-d*f,e[n+1]=c*g+h*f+d*p-l*x,e[n+2]=d*g+h*x+l*f-c*p,e[n+3]=h*g-l*p-c*f-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,d=l(i/2),h=l(r/2),p=l(s/2),f=c(i/2),x=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*p+d*x*g,this._y=d*x*p-f*h*g,this._z=d*h*g+f*x*p,this._w=d*h*p-f*x*g;break;case"YXZ":this._x=f*h*p+d*x*g,this._y=d*x*p-f*h*g,this._z=d*h*g-f*x*p,this._w=d*h*p+f*x*g;break;case"ZXY":this._x=f*h*p-d*x*g,this._y=d*x*p+f*h*g,this._z=d*h*g+f*x*p,this._w=d*h*p-f*x*g;break;case"ZYX":this._x=f*h*p-d*x*g,this._y=d*x*p+f*h*g,this._z=d*h*g-f*x*p,this._w=d*h*p+f*x*g;break;case"YZX":this._x=f*h*p+d*x*g,this._y=d*x*p+f*h*g,this._z=d*h*g-f*x*p,this._w=d*h*p-f*x*g;break;case"XZY":this._x=f*h*p-d*x*g,this._y=d*x*p-f*h*g,this._z=d*h*g+f*x*p,this._w=d*h*p+f*x*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],d=n[2],h=n[6],p=n[10],f=i+l+p;if(f>0){const x=.5/Math.sqrt(f+1);this._w=.25/x,this._x=(h-c)*x,this._y=(s-d)*x,this._z=(a-r)*x}else if(i>l&&i>p){const x=2*Math.sqrt(1+i-l-p);this._w=(h-c)/x,this._x=.25*x,this._y=(r+a)/x,this._z=(s+d)/x}else if(l>p){const x=2*Math.sqrt(1+l-i-p);this._w=(s-d)/x,this._x=(r+a)/x,this._y=.25*x,this._z=(c+h)/x}else{const x=2*Math.sqrt(1+p-i-l);this._w=(a-r)/x,this._x=(s+d)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,d=n._z,h=n._w;return this._x=i*h+a*l+r*d-s*c,this._y=r*h+a*c+s*l-i*d,this._z=s*h+a*d+i*c-r*l,this._w=a*h-i*l-r*c-s*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let l=a*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const x=1-n;return this._w=x*a+n*this._w,this._x=x*i+n*this._x,this._y=x*r+n*this._y,this._z=x*s+n*this._z,this.normalize(),this}const d=Math.sqrt(c),h=Math.atan2(d,l),p=Math.sin((1-n)*h)/d,f=Math.sin(n*h)/d;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,d=2*(a*r-l*i),h=2*(l*n-s*r),p=2*(s*i-a*n);return this.x=n+c*d+a*p-l*h,this.y=i+c*h+l*d-s*p,this.z=r+c*p+s*h-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new B,Dp=new Fa;class Oa{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),oo.subVectors(this.max,qs),Ir.subVectors(e.a,qs),Br.subVectors(e.b,qs),Fr.subVectors(e.c,qs),Ei.subVectors(Br,Ir),Ti.subVectors(Fr,Br),rr.subVectors(Ir,Fr);let n=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-rr.z,rr.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,rr.z,0,-rr.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-rr.y,rr.x,0];return!Bc(n,Ir,Br,Fr,oo)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,Ir,Br,Fr,oo))?!1:(lo.crossVectors(Ei,Ti),n=[lo.x,lo.y,lo.z],Bc(n,Ir,Br,Fr,oo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new B,new B,new B,new B,new B,new B,new B,new B],kn=new B,ao=new Oa,Ir=new B,Br=new B,Fr=new B,Ei=new B,Ti=new B,rr=new B,qs=new B,oo=new B,lo=new B,sr=new B;function Bc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){sr.fromArray(t,s);const l=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),c=e.dot(sr),d=n.dot(sr),h=i.dot(sr);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>l)return!1}return!0}const kS=new Oa,$s=new B,Fc=new B;class Ql{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const n=$s.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Fc)),this.expandByPoint($s.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new B,Oc=new B,co=new B,Ai=new B,jc=new B,uo=new B,zc=new B;class n0{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oc.copy(e).add(n).multiplyScalar(.5),co.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub(Oc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(co),l=Ai.dot(this.direction),c=-Ai.dot(co),d=Ai.lengthSq(),h=Math.abs(1-a*a);let p,f,x,g;if(h>0)if(p=a*c-l,f=a*l-c,g=s*h,p>=0)if(f>=-g)if(f<=g){const y=1/h;p*=y,f*=y,x=p*(p+a*f+2*l)+f*(a*p+f+2*c)+d}else f=s,p=Math.max(0,-(a*f+l)),x=-p*p+f*(f+2*c)+d;else f=-s,p=Math.max(0,-(a*f+l)),x=-p*p+f*(f+2*c)+d;else f<=-g?(p=Math.max(0,-(-a*s+l)),f=p>0?-s:Math.min(Math.max(-s,-c),s),x=-p*p+f*(f+2*c)+d):f<=g?(p=0,f=Math.min(Math.max(-s,-c),s),x=f*(f+2*c)+d):(p=Math.max(0,-(a*s+l)),f=p>0?s:Math.min(Math.max(-s,-c),s),x=-p*p+f*(f+2*c)+d);else f=a>0?-s:s,p=Math.max(0,-(a*f+l)),x=-p*p+f*(f+2*c)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Oc).addScaledVector(co,f),x}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const d=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return d>=0?(i=(e.min.x-f.x)*d,r=(e.max.x-f.x)*d):(i=(e.max.x-f.x)*d,r=(e.min.x-f.x)*d),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(l=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){jc.subVectors(n,e),uo.subVectors(i,e),zc.crossVectors(jc,uo);let a=this.direction.dot(zc),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const c=l*this.direction.dot(uo.crossVectors(Ai,uo));if(c<0)return null;const d=l*this.direction.dot(jc.cross(Ai));if(d<0||c+d>a)return null;const h=-l*Ai.dot(zc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,a,l,c,d,h,p,f,x,g,y,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,d,h,p,f,x,g,y,m)}set(e,n,i,r,s,a,l,c,d,h,p,f,x,g,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=l,u[13]=c,u[2]=d,u[6]=h,u[10]=p,u[14]=f,u[3]=x,u[7]=g,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),a=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),d=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,x=a*p,g=l*h,y=l*p;n[0]=c*h,n[4]=-c*p,n[8]=d,n[1]=x+g*d,n[5]=f-y*d,n[9]=-l*c,n[2]=y-f*d,n[6]=g+x*d,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,x=c*p,g=d*h,y=d*p;n[0]=f+y*l,n[4]=g*l-x,n[8]=a*d,n[1]=a*p,n[5]=a*h,n[9]=-l,n[2]=x*l-g,n[6]=y+f*l,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,x=c*p,g=d*h,y=d*p;n[0]=f-y*l,n[4]=-a*p,n[8]=g+x*l,n[1]=x+g*l,n[5]=a*h,n[9]=y-f*l,n[2]=-a*d,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,x=a*p,g=l*h,y=l*p;n[0]=c*h,n[4]=g*d-x,n[8]=f*d+y,n[1]=c*p,n[5]=y*d+f,n[9]=x*d-g,n[2]=-d,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,x=a*d,g=l*c,y=l*d;n[0]=c*h,n[4]=y-f*p,n[8]=g*p+x,n[1]=p,n[5]=a*h,n[9]=-l*h,n[2]=-d*h,n[6]=x*p+g,n[10]=f-y*p}else if(e.order==="XZY"){const f=a*c,x=a*d,g=l*c,y=l*d;n[0]=c*h,n[4]=-p,n[8]=d*h,n[1]=f*p+y,n[5]=a*h,n[9]=x*p-g,n[2]=g*p-x,n[6]=l*h,n[10]=y*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RS,e,DS)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ni.crossVectors(i,ln),Ni.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ni.crossVectors(i,ln)),Ni.normalize(),ho.crossVectors(ln,Ni),r[0]=Ni.x,r[4]=ho.x,r[8]=ln.x,r[1]=Ni.y,r[5]=ho.y,r[9]=ln.y,r[2]=Ni.z,r[6]=ho.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],d=i[12],h=i[1],p=i[5],f=i[9],x=i[13],g=i[2],y=i[6],m=i[10],u=i[14],v=i[3],_=i[7],w=i[11],C=i[15],N=r[0],T=r[4],k=r[8],W=r[12],b=r[1],M=r[5],H=r[9],j=r[13],X=r[2],Z=r[6],z=r[10],Q=r[14],D=r[3],q=r[7],K=r[11],ee=r[15];return s[0]=a*N+l*b+c*X+d*D,s[4]=a*T+l*M+c*Z+d*q,s[8]=a*k+l*H+c*z+d*K,s[12]=a*W+l*j+c*Q+d*ee,s[1]=h*N+p*b+f*X+x*D,s[5]=h*T+p*M+f*Z+x*q,s[9]=h*k+p*H+f*z+x*K,s[13]=h*W+p*j+f*Q+x*ee,s[2]=g*N+y*b+m*X+u*D,s[6]=g*T+y*M+m*Z+u*q,s[10]=g*k+y*H+m*z+u*K,s[14]=g*W+y*j+m*Q+u*ee,s[3]=v*N+_*b+w*X+C*D,s[7]=v*T+_*M+w*Z+C*q,s[11]=v*k+_*H+w*z+C*K,s[15]=v*W+_*j+w*Q+C*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],d=e[13],h=e[2],p=e[6],f=e[10],x=e[14],g=e[3],y=e[7],m=e[11],u=e[15];return g*(+s*c*p-r*d*p-s*l*f+i*d*f+r*l*x-i*c*x)+y*(+n*c*x-n*d*f+s*a*f-r*a*x+r*d*h-s*c*h)+m*(+n*d*p-n*l*x-s*a*p+i*a*x+s*l*h-i*d*h)+u*(-r*l*h-n*c*p+n*l*f+r*a*p-i*a*f+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],h=e[8],p=e[9],f=e[10],x=e[11],g=e[12],y=e[13],m=e[14],u=e[15],v=p*m*d-y*f*d+y*c*x-l*m*x-p*c*u+l*f*u,_=g*f*d-h*m*d-g*c*x+a*m*x+h*c*u-a*f*u,w=h*y*d-g*p*d+g*l*x-a*y*x-h*l*u+a*p*u,C=g*p*c-h*y*c-g*l*f+a*y*f+h*l*m-a*p*m,N=n*v+i*_+r*w+s*C;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/N;return e[0]=v*T,e[1]=(y*f*s-p*m*s-y*r*x+i*m*x+p*r*u-i*f*u)*T,e[2]=(l*m*s-y*c*s+y*r*d-i*m*d-l*r*u+i*c*u)*T,e[3]=(p*c*s-l*f*s-p*r*d+i*f*d+l*r*x-i*c*x)*T,e[4]=_*T,e[5]=(h*m*s-g*f*s+g*r*x-n*m*x-h*r*u+n*f*u)*T,e[6]=(g*c*s-a*m*s-g*r*d+n*m*d+a*r*u-n*c*u)*T,e[7]=(a*f*s-h*c*s+h*r*d-n*f*d-a*r*x+n*c*x)*T,e[8]=w*T,e[9]=(g*p*s-h*y*s-g*i*x+n*y*x+h*i*u-n*p*u)*T,e[10]=(a*y*s-g*l*s+g*i*d-n*y*d-a*i*u+n*l*u)*T,e[11]=(h*l*s-a*p*s-h*i*d+n*p*d+a*i*x-n*l*x)*T,e[12]=C*T,e[13]=(h*y*r-g*p*r+g*i*f-n*y*f-h*i*m+n*p*m)*T,e[14]=(g*l*r-a*y*r-g*i*c+n*y*c+a*i*m-n*l*m)*T,e[15]=(a*p*r-h*l*r+h*i*c-n*p*c-a*i*f+n*l*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,d=s*a,h=s*l;return this.set(d*a+i,d*l-r*c,d*c+r*l,0,d*l+r*c,h*l+i,h*c-r*a,0,d*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,d=s+s,h=a+a,p=l+l,f=s*d,x=s*h,g=s*p,y=a*h,m=a*p,u=l*p,v=c*d,_=c*h,w=c*p,C=i.x,N=i.y,T=i.z;return r[0]=(1-(y+u))*C,r[1]=(x+w)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(x-w)*N,r[5]=(1-(f+u))*N,r[6]=(m+v)*N,r[7]=0,r[8]=(g+_)*T,r[9]=(m-v)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const a=Or.set(r[4],r[5],r[6]).length(),l=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const d=1/s,h=1/a,p=1/l;return Rn.elements[0]*=d,Rn.elements[1]*=d,Rn.elements[2]*=d,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=p,Rn.elements[9]*=p,Rn.elements[10]*=p,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,a,l=hi){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let x,g;if(l===hi)x=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(l===Cl)x=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=hi){const c=this.elements,d=1/(n-e),h=1/(i-r),p=1/(a-s),f=(n+e)*d,x=(i+r)*h;let g,y;if(l===hi)g=(a+s)*p,y=-2*p;else if(l===Cl)g=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new B,Rn=new pt,RS=new B(0,0,0),DS=new B(1,1,1),Ni=new B,ho=new B,ln=new B,Pp=new pt,Lp=new Fa;class Zn{constructor(e=0,n=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],d=r[5],h=r[9],p=r[2],f=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class i0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PS=0;const Up=new B,jr=new Fa,ni=new pt,fo=new B,Ys=new B,LS=new B,US=new Fa,Ip=new B(1,0,0),Bp=new B(0,1,0),Fp=new B(0,0,1),Op={type:"added"},IS={type:"removed"},zr={type:"childadded",child:null},Hc={type:"childremoved",child:null};class Lt extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new B,n=new Zn,i=new Fa,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Be}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(Fp,e)}translateOnAxis(e,n){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(Fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fo.copy(e):fo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Ys,fo,this.up):ni.lookAt(fo,Ys,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(ni),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Op),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IS),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Op),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,LS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,US,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const p=c[d];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),d=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),x=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),d.length>0&&(i.textures=d),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),x.length>0&&(i.animations=x),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new B(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new B,ii=new B,Vc=new B,ri=new B,Hr=new B,Vr=new B,jp=new B,Gc=new B,Wc=new B,Xc=new B,qc=new vt,$c=new vt,Yc=new vt;class Sn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ii.subVectors(i,n),Vc.subVectors(e,n);const a=Dn.dot(Dn),l=Dn.dot(ii),c=Dn.dot(Vc),d=ii.dot(ii),h=ii.dot(Vc),p=a*d-l*l;if(p===0)return s.set(0,0,0),null;const f=1/p,x=(d*c-l*h)*f,g=(a*h-l*c)*f;return s.set(1-x-g,g,x)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(l,ri.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return qc.setScalar(0),$c.setScalar(0),Yc.setScalar(0),qc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qc,s.x),a.addScaledVector($c,s.y),a.addScaledVector(Yc,s.z),a}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ii.subVectors(e,n),Dn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;Hr.subVectors(r,i),Vr.subVectors(s,i),Gc.subVectors(e,i);const c=Hr.dot(Gc),d=Vr.dot(Gc);if(c<=0&&d<=0)return n.copy(i);Wc.subVectors(e,r);const h=Hr.dot(Wc),p=Vr.dot(Wc);if(h>=0&&p<=h)return n.copy(r);const f=c*p-h*d;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Hr,a);Xc.subVectors(e,s);const x=Hr.dot(Xc),g=Vr.dot(Xc);if(g>=0&&x<=g)return n.copy(s);const y=x*d-c*g;if(y<=0&&d>=0&&g<=0)return l=d/(d-g),n.copy(i).addScaledVector(Vr,l);const m=h*g-x*p;if(m<=0&&p-h>=0&&x-g>=0)return jp.subVectors(s,r),l=(p-h)/(p-h+(x-g)),n.copy(r).addScaledVector(jp,l);const u=1/(m+y+f);return a=y*u,l=f*u,n.copy(i).addScaledVector(Hr,a).addScaledVector(Vr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},po={h:0,s:0,l:0};function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=_S(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Kc(a,s,e+1/3),this.g=Kc(a,s,e),this.b=Kc(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=r0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Je.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Zt(Ot.r*255,0,255))*65536+Math.round(Zt(Ot.g*255,0,255))*256+Math.round(Zt(Ot.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,d;const h=(l+a)/2;if(l===a)c=0,d=0;else{const p=a-l;switch(d=h<=.5?p/(a+l):p/(2-a-l),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=d,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Gn){Je.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(po);const i=Dc(Ci.h,po.h,n),r=Dc(Ci.s,po.s,n),s=Dc(Ci.l,po.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Xe;Xe.NAMES=r0;let BS=0;class Ls extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=ps,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=du,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cu&&(i.blendSrc=this.blendSrc),this.blendDst!==du&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class s0 extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new B,mo=new et;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ap,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mo.fromBufferAttribute(this,n),mo.applyMatrix3(e),this.setXY(n,mo.x,mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ws(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ws(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ws(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ws(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),e}}class a0 extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o0 extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qn extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let FS=0;const vn=new pt,Qc=new Lt,Gr=new B,cn=new Oa,Ks=new Oa,Nt=new B;class Si extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jv(e)?o0:a0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];Ks.setFromBufferAttribute(l),this.morphTargetsRelative?(Nt.addVectors(cn.min,Ks.min),cn.expandByPoint(Nt),Nt.addVectors(cn.max,Ks.max),cn.expandByPoint(Nt)):(cn.expandByPoint(Ks.min),cn.expandByPoint(Ks.max))}cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let d=0,h=l.count;d<h;d++)Nt.fromBufferAttribute(l,d),c&&(Gr.fromBufferAttribute(e,d),Nt.add(Gr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let k=0;k<i.count;k++)l[k]=new B,c[k]=new B;const d=new B,h=new B,p=new B,f=new et,x=new et,g=new et,y=new B,m=new B;function u(k,W,b){d.fromBufferAttribute(i,k),h.fromBufferAttribute(i,W),p.fromBufferAttribute(i,b),f.fromBufferAttribute(s,k),x.fromBufferAttribute(s,W),g.fromBufferAttribute(s,b),h.sub(d),p.sub(d),x.sub(f),g.sub(f);const M=1/(x.x*g.y-g.x*x.y);isFinite(M)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(M),m.copy(p).multiplyScalar(x.x).addScaledVector(h,-g.x).multiplyScalar(M),l[k].add(y),l[W].add(y),l[b].add(y),c[k].add(m),c[W].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let k=0,W=v.length;k<W;++k){const b=v[k],M=b.start,H=b.count;for(let j=M,X=M+H;j<X;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const _=new B,w=new B,C=new B,N=new B;function T(k){C.fromBufferAttribute(r,k),N.copy(C);const W=l[k];_.copy(W),_.sub(C.multiplyScalar(C.dot(W))).normalize(),w.crossVectors(N,W);const M=w.dot(c[k])<0?-1:1;a.setXYZW(k,_.x,_.y,_.z,M)}for(let k=0,W=v.length;k<W;++k){const b=v[k],M=b.start,H=b.count;for(let j=M,X=M+H;j<X;j+=3)T(e.getX(j+0)),T(e.getX(j+1)),T(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,x=i.count;f<x;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,a=new B,l=new B,c=new B,d=new B,h=new B,p=new B;if(e)for(let f=0,x=e.count;f<x;f+=3){const g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,m),l.add(h),c.add(h),d.add(h),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let f=0,x=n.count;f<x;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(l,c){const d=l.array,h=l.itemSize,p=l.normalized,f=new d.constructor(c.length*h);let x=0,g=0;for(let y=0,m=c.length;y<m;y++){l.isInterleavedBufferAttribute?x=c[y]*l.data.stride+l.offset:x=c[y]*h;for(let u=0;u<h;u++)f[g++]=d[x++]}return new Kn(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],d=e(c,i);n.setAttribute(l,d)}const s=this.morphAttributes;for(const l in s){const c=[],d=s[l];for(let h=0,p=d.length;h<p;h++){const f=d[h],x=e(f,i);c.push(x)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const d=a[l];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const d=i[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let p=0,f=d.length;p<f;p++){const x=d[p];h.push(x.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const d in r){const h=r[d];this.setAttribute(d,h.clone(n))}const s=e.morphAttributes;for(const d in s){const h=[],p=s[d];for(let f=0,x=p.length;f<x;f++)h.push(p[f].clone(n));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,h=a.length;d<h;d++){const p=a[d];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zp=new pt,ar=new n0,xo=new Ql,Hp=new B,go=new B,vo=new B,_o=new B,Zc=new B,bo=new B,Vp=new B,yo=new B;class qn extends Lt{constructor(e=new Si,n=new s0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){bo.set(0,0,0);for(let c=0,d=s.length;c<d;c++){const h=l[c],p=s[c];h!==0&&(Zc.fromBufferAttribute(p,e),a?bo.addScaledVector(Zc,h):bo.addScaledVector(Zc.sub(n),h))}n.add(bo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(xo.containsPoint(ar.origin)===!1&&(ar.intersectSphere(xo,Hp)===null||ar.origin.distanceToSquared(Hp)>(e.far-e.near)**2))&&(zp.copy(s).invert(),ar.copy(e.ray).applyMatrix4(zp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,d=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,x=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){const m=f[g],u=a[m.materialIndex],v=Math.max(m.start,x.start),_=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let w=v,C=_;w<C;w+=3){const N=l.getX(w),T=l.getX(w+1),k=l.getX(w+2);r=So(this,u,e,i,d,h,p,N,T,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,x.start),y=Math.min(l.count,x.start+x.count);for(let m=g,u=y;m<u;m+=3){const v=l.getX(m),_=l.getX(m+1),w=l.getX(m+2);r=So(this,a,e,i,d,h,p,v,_,w),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){const m=f[g],u=a[m.materialIndex],v=Math.max(m.start,x.start),_=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let w=v,C=_;w<C;w+=3){const N=w,T=w+1,k=w+2;r=So(this,u,e,i,d,h,p,N,T,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,x.start),y=Math.min(c.count,x.start+x.count);for(let m=g,u=y;m<u;m+=3){const v=m,_=m+1,w=m+2;r=So(this,a,e,i,d,h,p,v,_,w),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function OS(t,e,n,i,r,s,a,l){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===Ki,l),c===null)return null;yo.copy(l),yo.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(yo);return d<n.near||d>n.far?null:{distance:d,point:yo.clone(),object:t}}function So(t,e,n,i,r,s,a,l,c,d){t.getVertexPosition(l,go),t.getVertexPosition(c,vo),t.getVertexPosition(d,_o);const h=OS(t,e,n,i,go,vo,_o,Vp);if(h){const p=new B;Sn.getBarycoord(Vp,go,vo,_o,p),r&&(h.uv=Sn.getInterpolatedAttribute(r,l,c,d,p,new et)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,l,c,d,p,new et)),a&&(h.normal=Sn.getInterpolatedAttribute(a,l,c,d,p,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:c,c:d,normal:new B,materialIndex:0};Sn.getNormal(go,vo,_o,f.normal),h.face=f,h.barycoord=p}return h}class Us extends Si{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],d=[],h=[],p=[];let f=0,x=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Qn(d,3)),this.setAttribute("normal",new Qn(h,3)),this.setAttribute("uv",new Qn(p,2));function g(y,m,u,v,_,w,C,N,T,k,W){const b=w/T,M=C/k,H=w/2,j=C/2,X=N/2,Z=T+1,z=k+1;let Q=0,D=0;const q=new B;for(let K=0;K<z;K++){const ee=K*M-j;for(let me=0;me<Z;me++){const je=me*b-H;q[y]=je*v,q[m]=ee*_,q[u]=X,d.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[u]=N>0?1:-1,h.push(q.x,q.y,q.z),p.push(me/T),p.push(1-K/k),Q+=1}}for(let K=0;K<k;K++)for(let ee=0;ee<T;ee++){const me=f+ee+Z*K,je=f+ee+Z*(K+1),G=f+(ee+1)+Z*(K+1),te=f+(ee+1)+Z*K;c.push(me,je,te),c.push(je,G,te),D+=6}l.addGroup(x,D,W),x+=D,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const r in i)e[r]=i[r]}return e}function jS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function l0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const zS={clone:Cs,merge:Vt};var HS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HS,this.fragmentShader=VS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=jS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class c0 extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new B,Gp=new et,Wp=new et;class yn extends c0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$u*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $u*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Gp,Wp),n.subVectors(Wp,Gp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,d=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/d,r*=a.width/c,i*=a.height/d}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class GS extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new yn(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const l=new yn(Wr,Xr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Wr,Xr,e,n);c.layers=this.layers,this.add(c);const d=new yn(Wr,Xr,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const d of n)this.remove(d);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,d,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,d),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,f,x),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class d0 extends sn{constructor(e,n,i,r,s,a,l,c,d,h){e=e!==void 0?e:[],n=n!==void 0?n:Es,super(e,n,i,r,s,a,l,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WS extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new d0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Us(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Xi});s.uniforms.tEquirect.value=n;const a=new qn(r,s),l=n.minFilter;return n.minFilter===br&&(n.minFilter=Bn),new GS(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Jc=new B,XS=new B,qS=new Be;class hr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jc.subVectors(i,n).cross(XS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qS.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Ql,wo=new B;class Jh{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],c=r[3],d=r[4],h=r[5],p=r[6],f=r[7],x=r[8],g=r[9],y=r[10],m=r[11],u=r[12],v=r[13],_=r[14],w=r[15];if(i[0].setComponents(c-s,f-d,m-x,w-u).normalize(),i[1].setComponents(c+s,f+d,m+x,w+u).normalize(),i[2].setComponents(c+a,f+h,m+g,w+v).normalize(),i[3].setComponents(c-a,f-h,m-g,w-v).normalize(),i[4].setComponents(c-l,f-p,m-y,w-_).normalize(),n===hi)i[5].setComponents(c+l,f+p,m+y,w+_).normalize();else if(n===Cl)i[5].setComponents(l,p,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function u0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $S(t){const e=new WeakMap;function n(l,c){const d=l.array,h=l.usage,p=d.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,d,h),l.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?x=t.HALF_FLOAT:x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,d){const h=c.array,p=c.updateRanges;if(t.bindBuffer(d,l),p.length===0)t.bufferSubData(d,0,h);else{p.sort((x,g)=>x.start-g.start);let f=0;for(let x=1;x<p.length;x++){const g=p[f],y=p[x];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,p[f]=y)}p.length=f+1;for(let x=0,g=p.length;x<g;x++){const y=p[x];t.bufferSubData(d,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,n(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,l,c),d.version=l.version}}return{get:r,remove:s,update:a}}class Zl extends Si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),d=l+1,h=c+1,p=e/l,f=n/c,x=[],g=[],y=[],m=[];for(let u=0;u<h;u++){const v=u*f-a;for(let _=0;_<d;_++){const w=_*p-s;g.push(w,-v,0),y.push(0,0,1),m.push(_/l),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let v=0;v<l;v++){const _=v+d*u,w=v+d*(u+1),C=v+1+d*(u+1),N=v+1+d*u;x.push(_,w,N),x.push(w,C,N)}this.setIndex(x),this.setAttribute("position",new Qn(g,3)),this.setAttribute("normal",new Qn(y,3)),this.setAttribute("uv",new Qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var YS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KS=`#ifdef USE_ALPHAHASH
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
#endif`,QS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
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
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
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
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l1=`#ifdef USE_IRIDESCENCE
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
#endif`,c1=`#ifdef USE_BUMPMAP
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
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,v1=`#define PI 3.141592653589793
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
} // validated`,_1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b1=`vec3 transformedNormal = objectNormal;
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
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`
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
}`,A1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I1=`#ifdef USE_GRADIENTMAP
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
}`,B1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j1=`uniform bool receiveShadow;
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
#endif`,z1=`#ifdef USE_ENVMAP
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
#endif`,H1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X1=`PhysicalMaterial material;
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
#endif`,q1=`struct PhysicalMaterial {
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
}`,$1=`
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
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ew=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rw=`#if defined( USE_POINTS_UV )
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
#endif`,sw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ow=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dw=`#ifdef USE_MORPHTARGETS
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
#endif`,uw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gw=`#ifdef USE_NORMALMAP
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
#endif`,vw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_w=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ww=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ew=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Aw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pw=`float getShadowMask() {
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
}`,Lw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uw=`#ifdef USE_SKINNING
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
#endif`,Iw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bw=`#ifdef USE_SKINNING
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
#endif`,Fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ow=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hw=`#ifdef USE_TRANSMISSION
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
#endif`,Vw=`#ifdef USE_TRANSMISSION
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yw=`uniform sampler2D t2D;
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
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`#include <common>
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
}`,tM=`#if DEPTH_PACKING == 3200
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
}`,nM=`#define DISTANCE
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
}`,iM=`#define DISTANCE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`uniform float scale;
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
}`,oM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 diffuse;
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
}`,dM=`#define LAMBERT
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
}`,uM=`#define LAMBERT
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
}`,hM=`#define MATCAP
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
}`,fM=`#define MATCAP
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
}`,pM=`#define NORMAL
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
}`,mM=`#define NORMAL
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
}`,xM=`#define PHONG
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
}`,gM=`#define PHONG
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
}`,vM=`#define STANDARD
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
}`,_M=`#define STANDARD
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
}`,bM=`#define TOON
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
}`,yM=`#define TOON
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
}`,SM=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
}`,EM=`uniform vec3 color;
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
}`,TM=`uniform float rotation;
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
}`,AM=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:YS,alphahash_pars_fragment:KS,alphamap_fragment:QS,alphamap_pars_fragment:ZS,alphatest_fragment:JS,alphatest_pars_fragment:e1,aomap_fragment:t1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:r1,begin_vertex:s1,beginnormal_vertex:a1,bsdfs:o1,iridescence_fragment:l1,bumpmap_pars_fragment:c1,clipping_planes_fragment:d1,clipping_planes_pars_fragment:u1,clipping_planes_pars_vertex:h1,clipping_planes_vertex:f1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:x1,color_vertex:g1,common:v1,cube_uv_reflection_fragment:_1,defaultnormal_vertex:b1,displacementmap_pars_vertex:y1,displacementmap_vertex:S1,emissivemap_fragment:w1,emissivemap_pars_fragment:M1,colorspace_fragment:E1,colorspace_pars_fragment:T1,envmap_fragment:A1,envmap_common_pars_fragment:N1,envmap_pars_fragment:C1,envmap_pars_vertex:k1,envmap_physical_pars_fragment:z1,envmap_vertex:R1,fog_vertex:D1,fog_pars_vertex:P1,fog_fragment:L1,fog_pars_fragment:U1,gradientmap_pars_fragment:I1,lightmap_pars_fragment:B1,lights_lambert_fragment:F1,lights_lambert_pars_fragment:O1,lights_pars_begin:j1,lights_toon_fragment:H1,lights_toon_pars_fragment:V1,lights_phong_fragment:G1,lights_phong_pars_fragment:W1,lights_physical_fragment:X1,lights_physical_pars_fragment:q1,lights_fragment_begin:$1,lights_fragment_maps:Y1,lights_fragment_end:K1,logdepthbuf_fragment:Q1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:J1,logdepthbuf_vertex:ew,map_fragment:tw,map_pars_fragment:nw,map_particle_fragment:iw,map_particle_pars_fragment:rw,metalnessmap_fragment:sw,metalnessmap_pars_fragment:aw,morphinstance_vertex:ow,morphcolor_vertex:lw,morphnormal_vertex:cw,morphtarget_pars_vertex:dw,morphtarget_vertex:uw,normal_fragment_begin:hw,normal_fragment_maps:fw,normal_pars_fragment:pw,normal_pars_vertex:mw,normal_vertex:xw,normalmap_pars_fragment:gw,clearcoat_normal_fragment_begin:vw,clearcoat_normal_fragment_maps:_w,clearcoat_pars_fragment:bw,iridescence_pars_fragment:yw,opaque_fragment:Sw,packing:ww,premultiplied_alpha_fragment:Mw,project_vertex:Ew,dithering_fragment:Tw,dithering_pars_fragment:Aw,roughnessmap_fragment:Nw,roughnessmap_pars_fragment:Cw,shadowmap_pars_fragment:kw,shadowmap_pars_vertex:Rw,shadowmap_vertex:Dw,shadowmask_pars_fragment:Pw,skinbase_vertex:Lw,skinning_pars_vertex:Uw,skinning_vertex:Iw,skinnormal_vertex:Bw,specularmap_fragment:Fw,specularmap_pars_fragment:Ow,tonemapping_fragment:jw,tonemapping_pars_fragment:zw,transmission_fragment:Hw,transmission_pars_fragment:Vw,uv_pars_fragment:Gw,uv_pars_vertex:Ww,uv_vertex:Xw,worldpos_vertex:qw,background_vert:$w,background_frag:Yw,backgroundCube_vert:Kw,backgroundCube_frag:Qw,cube_vert:Zw,cube_frag:Jw,depth_vert:eM,depth_frag:tM,distanceRGBA_vert:nM,distanceRGBA_frag:iM,equirect_vert:rM,equirect_frag:sM,linedashed_vert:aM,linedashed_frag:oM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:dM,meshlambert_frag:uM,meshmatcap_vert:hM,meshmatcap_frag:fM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:xM,meshphong_frag:gM,meshphysical_vert:vM,meshphysical_frag:_M,meshtoon_vert:bM,meshtoon_frag:yM,points_vert:SM,points_frag:wM,shadow_vert:MM,shadow_frag:EM,sprite_vert:TM,sprite_frag:AM},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Wn={basic:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Vt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Vt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Vt([ae.points,ae.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Vt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Vt([ae.common,ae.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Vt([ae.sprite,ae.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Vt([ae.common,ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Vt([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Wn.physical={uniforms:Vt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Mo={r:0,b:0,g:0},lr=new Zn,NM=new pt;function CM(t,e,n,i,r,s,a){const l=new Xe(0);let c=s===!0?0:1,d,h,p=null,f=0,x=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const w=g(v);w===null?u(l,c):w&&w.isColor&&(u(w,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const w=g(_);w&&(w.isCubeTexture||w.mapping===Yl)?(h===void 0&&(h=new qn(new Us(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Cs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,N,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),lr.copy(_.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(NM.makeRotationFromEuler(lr)),h.material.toneMapped=Je.getTransfer(w.colorSpace)!==ct,(p!==w||f!==w.version||x!==t.toneMapping)&&(h.material.needsUpdate=!0,p=w,f=w.version,x=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new qn(new Zl(2,2),new Qi({name:"BackgroundMaterial",uniforms:Cs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=Je.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(p!==w||f!==w.version||x!==t.toneMapping)&&(d.material.needsUpdate=!0,p=w,f=w.version,x=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function u(v,_){v.getRGB(Mo,l0(t)),i.buffers.color.setClear(Mo.r,Mo.g,Mo.b,_,a)}return{getClearColor:function(){return l},setClearColor:function(v,_=1){l.set(v),c=_,u(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,u(l,c)},render:y,addToRenderList:m}}function kM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function l(b,M,H,j,X){let Z=!1;const z=p(j,H,M);s!==z&&(s=z,d(s.object)),Z=x(b,j,H,X),Z&&g(b,j,H,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,w(b,M,H,j),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return t.createVertexArray()}function d(b){return t.bindVertexArray(b)}function h(b){return t.deleteVertexArray(b)}function p(b,M,H){const j=H.wireframe===!0;let X=i[b.id];X===void 0&&(X={},i[b.id]=X);let Z=X[M.id];Z===void 0&&(Z={},X[M.id]=Z);let z=Z[j];return z===void 0&&(z=f(c()),Z[j]=z),z}function f(b){const M=[],H=[],j=[];for(let X=0;X<n;X++)M[X]=0,H[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:H,attributeDivisors:j,object:b,attributes:{},index:null}}function x(b,M,H,j){const X=s.attributes,Z=M.attributes;let z=0;const Q=H.getAttributes();for(const D in Q)if(Q[D].location>=0){const K=X[D];let ee=Z[D];if(ee===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),K===void 0||K.attribute!==ee||ee&&K.data!==ee.data)return!0;z++}return s.attributesNum!==z||s.index!==j}function g(b,M,H,j){const X={},Z=M.attributes;let z=0;const Q=H.getAttributes();for(const D in Q)if(Q[D].location>=0){let K=Z[D];K===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));const ee={};ee.attribute=K,K&&K.data&&(ee.data=K.data),X[D]=ee,z++}s.attributes=X,s.attributesNum=z,s.index=j}function y(){const b=s.newAttributes;for(let M=0,H=b.length;M<H;M++)b[M]=0}function m(b){u(b,0)}function u(b,M){const H=s.newAttributes,j=s.enabledAttributes,X=s.attributeDivisors;H[b]=1,j[b]===0&&(t.enableVertexAttribArray(b),j[b]=1),X[b]!==M&&(t.vertexAttribDivisor(b,M),X[b]=M)}function v(){const b=s.newAttributes,M=s.enabledAttributes;for(let H=0,j=M.length;H<j;H++)M[H]!==b[H]&&(t.disableVertexAttribArray(H),M[H]=0)}function _(b,M,H,j,X,Z,z){z===!0?t.vertexAttribIPointer(b,M,H,X,Z):t.vertexAttribPointer(b,M,H,j,X,Z)}function w(b,M,H,j){y();const X=j.attributes,Z=H.getAttributes(),z=M.defaultAttributeValues;for(const Q in Z){const D=Z[Q];if(D.location>=0){let q=X[Q];if(q===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),q!==void 0){const K=q.normalized,ee=q.itemSize,me=e.get(q);if(me===void 0)continue;const je=me.buffer,G=me.type,te=me.bytesPerElement,de=G===t.INT||G===t.UNSIGNED_INT||q.gpuType===Xh;if(q.isInterleavedBufferAttribute){const le=q.data,Ae=le.stride,Ee=q.offset;if(le.isInstancedInterleavedBuffer){for(let ze=0;ze<D.locationSize;ze++)u(D.location+ze,le.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ze=0;ze<D.locationSize;ze++)m(D.location+ze);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ze=0;ze<D.locationSize;ze++)_(D.location+ze,ee/D.locationSize,G,K,Ae*te,(Ee+ee/D.locationSize*ze)*te,de)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<D.locationSize;le++)u(D.location+le,q.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<D.locationSize;le++)m(D.location+le);t.bindBuffer(t.ARRAY_BUFFER,je);for(let le=0;le<D.locationSize;le++)_(D.location+le,ee/D.locationSize,G,K,ee*te,ee/D.locationSize*le*te,de)}}else if(z!==void 0){const K=z[Q];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(D.location,K);break;case 3:t.vertexAttrib3fv(D.location,K);break;case 4:t.vertexAttrib4fv(D.location,K);break;default:t.vertexAttrib1fv(D.location,K)}}}}v()}function C(){k();for(const b in i){const M=i[b];for(const H in M){const j=M[H];for(const X in j)h(j[X].object),delete j[X];delete M[H]}delete i[b]}}function N(b){if(i[b.id]===void 0)return;const M=i[b.id];for(const H in M){const j=M[H];for(const X in j)h(j[X].object),delete j[X];delete M[H]}delete i[b.id]}function T(b){for(const M in i){const H=i[M];if(H[b.id]===void 0)continue;const j=H[b.id];for(const X in j)h(j[X].object),delete j[X];delete H[b.id]}}function k(){W(),a=!0,s!==r&&(s=r,d(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:k,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:N,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function RM(t,e,n){let i;function r(d){i=d}function s(d,h){t.drawArrays(i,d,h),n.update(h,i,1)}function a(d,h,p){p!==0&&(t.drawArraysInstanced(i,d,h,p),n.update(h,i,p))}function l(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,p);let x=0;for(let g=0;g<p;g++)x+=h[g];n.update(x,i,1)}function c(d,h,p,f){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<d.length;g++)a(d[g],h[g],f[g]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,h,0,f,0,p);let g=0;for(let y=0;y<p;y++)g+=h[y];for(let y=0;y<f.length;y++)n.update(g,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function DM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Fn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(T){const k=T===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==bi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ui&&!k)}function c(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const h=c(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const p=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const x=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:x,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:C,maxSamples:N}}function PM(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new hr,l=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const x=p.length!==0||f||i!==0||r;return r=f,i=p.length,x},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,x){const g=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,u=t.get(p);if(!r||g===null||g.length===0||s&&!m)s?h(null):d();else{const v=s?0:i,_=v*4;let w=u.clippingState||null;c.value=w,w=h(g,f,_,x);for(let C=0;C!==_;++C)w[C]=n[C];u.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function d(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,x,g){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const u=x+y*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,w=x;_!==y;++_,w+=4)a.copy(p[_]).applyMatrix4(v,l),a.normal.toArray(m,w),m[w+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function LM(t){let e=new WeakMap;function n(a,l){return l===vu?a.mapping=Es:l===_u&&(a.mapping=Ts),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===vu||l===_u)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const d=new WS(c.height);return d.fromEquirectangularTexture(t,a),e.set(a,d),a.addEventListener("dispose",r),n(d.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class h0 extends c0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,a=s+d*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,Xp=[.125,.215,.35,.446,.526,.582],mr=20,ed=new h0,qp=new Xe;let td=null,nd=0,id=0,rd=!1;const fr=(1+Math.sqrt(5))/2,qr=1/fr,$p=[new B(-fr,qr,0),new B(fr,qr,0),new B(-qr,0,fr),new B(qr,0,fr),new B(0,fr,-qr),new B(0,fr,qr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ia,format:Fn,colorSpace:tr,depthBuffer:!1},r=Kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UM(s)),this._blurMaterial=IM(s,e,n)}return r}_compileMaterial(e){const n=new qn(this._lodPlanes[0],e);this._renderer.compile(n,ed)}_sceneToCubeUV(e,n,i,r){const l=new yn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(qp),h.toneMapping=qi,h.autoClear=!1;const x=new s0({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new qn(new Us,x);let y=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,y=!0):(x.color.copy(qp),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(l.up.set(0,c[u],0),l.lookAt(d[u],0,0)):v===1?(l.up.set(0,0,c[u]),l.lookAt(0,d[u],0)):(l.up.set(0,c[u],0),l.lookAt(0,0,d[u]));const _=this._cubeSize;Eo(r,v*_,u>2?_:0,_,_),h.setRenderTarget(r),y&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new qn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Eo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,ed)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=$p[(r-s-1)%$p.length];this._blur(e,s-1,s,a,l)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,l){const c=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new qn(this._lodPlanes[r],d),f=d.uniforms,x=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*mr-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const u=[];let v=0;for(let T=0;T<mr;++T){const k=T/y,W=Math.exp(-k*k/2);u.push(W),T===0?v+=W:T<m&&(v+=2*W)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const w=this._sizeLods[r],C=3*w*(r>_-as?r-_+as:0),N=4*(this._cubeSize-w);Eo(n,C,N,3*w,2*w),c.setRenderTarget(n),c.render(p,ed)}}function UM(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+Xp.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);n.push(l);let c=1/l;a>t-as?c=Xp[a-t+as-1]:a===0&&(c=0),i.push(c);const d=1/(l-2),h=-d,p=1+d,f=[h,h,p,h,p,p,h,h,p,p,h,p],x=6,g=6,y=3,m=2,u=1,v=new Float32Array(y*g*x),_=new Float32Array(m*g*x),w=new Float32Array(u*g*x);for(let N=0;N<x;N++){const T=N%3*2/3-1,k=N>2?0:-1,W=[T,k,0,T+2/3,k,0,T+2/3,k+1,0,T,k,0,T+2/3,k+1,0,T,k+1,0];v.set(W,y*g*N),_.set(f,m*g*N);const b=[N,N,N,N,N,N];w.set(b,u*g*N)}const C=new Si;C.setAttribute("position",new Kn(v,y)),C.setAttribute("uv",new Kn(_,m)),C.setAttribute("faceIndex",new Kn(w,u)),e.push(C),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kp(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function IM(t,e,n){const i=new Float32Array(mr),r=new B(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Qp(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Zp(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ef(){return`

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
	`}function BM(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const c=l.mapping,d=c===vu||c===_u,h=c===Es||c===Ts;if(d||h){let p=e.get(l);const f=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return n===null&&(n=new Yp(t)),p=d?n.fromEquirectangular(l,p):n.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const x=l.image;return d&&x&&x.height>0||h&&x&&r(x)?(n===null&&(n=new Yp(t)),p=d?n.fromEquirectangular(l):n.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",s),p.texture):null}}}return l}function r(l){let c=0;const d=6;for(let h=0;h<d;h++)l[h]!==void 0&&c++;return c===d}function s(l){const c=l.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function FM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Zo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function OM(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}f.removeEventListener("dispose",a),delete r[f.id];const x=s.get(f);x&&(e.remove(x),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(p){const f=p.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const x=p.morphAttributes;for(const g in x){const y=x[g];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function d(p){const f=[],x=p.index,g=p.attributes.position;let y=0;if(x!==null){const v=x.array;y=x.version;for(let _=0,w=v.length;_<w;_+=3){const C=v[_+0],N=v[_+1],T=v[_+2];f.push(C,N,N,T,T,C)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,w=v.length/3-1;_<w;_+=3){const C=_+0,N=_+1,T=_+2;f.push(C,N,N,T,T,C)}}else return;const m=new(Jv(f)?o0:a0)(f,1);m.version=y;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function h(p){const f=s.get(p);if(f){const x=p.index;x!==null&&f.version<x.version&&d(p)}else d(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:h}}function jM(t,e,n){let i;function r(f){i=f}let s,a;function l(f){s=f.type,a=f.bytesPerElement}function c(f,x){t.drawElements(i,x,s,f*a),n.update(x,i,1)}function d(f,x,g){g!==0&&(t.drawElementsInstanced(i,x,s,f*a,g),n.update(x,i,g))}function h(f,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=x[u];n.update(m,i,1)}function p(f,x,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)d(f[u]/a,x[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,x,0,s,f,0,y,0,g);let u=0;for(let v=0;v<g;v++)u+=x[v];for(let v=0;v<y.length;v++)n.update(u,i,y[v])}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function zM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HM(t,e,n){const i=new WeakMap,r=new vt;function s(a,l,c){const d=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(l);if(f===void 0||f.count!==p){let b=function(){k.dispose(),i.delete(l),l.removeEventListener("dispose",b)};var x=b;f!==void 0&&f.texture.dispose();const g=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,u=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],_=l.morphAttributes.color||[];let w=0;g===!0&&(w=1),y===!0&&(w=2),m===!0&&(w=3);let C=l.attributes.position.count*w,N=1;C>e.maxTextureSize&&(N=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*N*4*p),k=new t0(T,C,N,p);k.type=ui,k.needsUpdate=!0;const W=w*4;for(let M=0;M<p;M++){const H=u[M],j=v[M],X=_[M],Z=C*N*4*M;for(let z=0;z<H.count;z++){const Q=z*W;g===!0&&(r.fromBufferAttribute(H,z),T[Z+Q+0]=r.x,T[Z+Q+1]=r.y,T[Z+Q+2]=r.z,T[Z+Q+3]=0),y===!0&&(r.fromBufferAttribute(j,z),T[Z+Q+4]=r.x,T[Z+Q+5]=r.y,T[Z+Q+6]=r.z,T[Z+Q+7]=0),m===!0&&(r.fromBufferAttribute(X,z),T[Z+Q+8]=r.x,T[Z+Q+9]=r.y,T[Z+Q+10]=r.z,T[Z+Q+11]=X.itemSize===4?r.w:1)}}f={count:p,texture:k,size:new et(C,N)},i.set(l,f),l.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<d.length;m++)g+=d[m];const y=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",d)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function VM(t,e,n,i){let r=new WeakMap;function s(c){const d=i.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return p}function a(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:a}}class f0 extends sn{constructor(e,n,i,r,s,a,l,c,d,h=ms){if(h!==ms&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ms&&(i=Nr),i===void 0&&h===Ns&&(i=As),super(null,r,s,a,l,c,h,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:Mn,this.minFilter=c!==void 0?c:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const p0=new sn,Jp=new f0(1,1),m0=new t0,x0=new CS,g0=new d0,em=[],tm=[],nm=new Float32Array(16),im=new Float32Array(9),rm=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=em[r];if(s===void 0&&(s=new Float32Array(r),em[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jl(t,e){let n=tm[e];n===void 0&&(n=new Int32Array(e),tm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function XM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function qM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function $M(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;rm.set(i),t.uniformMatrix2fv(this.addr,!1,rm),At(n,i)}}function YM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;im.set(i),t.uniformMatrix3fv(this.addr,!1,im),At(n,i)}}function KM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;nm.set(i),t.uniformMatrix4fv(this.addr,!1,nm),At(n,i)}}function QM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function JM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function eE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function tE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function iE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function rE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function sE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jp.compareFunction=Zv,s=Jp):s=p0,n.setTexture2D(e||s,r)}function aE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x0,r)}function oE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g0,r)}function lE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m0,r)}function cE(t){switch(t){case 5126:return GM;case 35664:return WM;case 35665:return XM;case 35666:return qM;case 35674:return $M;case 35675:return YM;case 35676:return KM;case 5124:case 35670:return QM;case 35667:case 35671:return ZM;case 35668:case 35672:return JM;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return lE}}function dE(t,e){t.uniform1fv(this.addr,e)}function uE(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function hE(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function fE(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function pE(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mE(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xE(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gE(t,e){t.uniform1iv(this.addr,e)}function vE(t,e){t.uniform2iv(this.addr,e)}function _E(t,e){t.uniform3iv(this.addr,e)}function bE(t,e){t.uniform4iv(this.addr,e)}function yE(t,e){t.uniform1uiv(this.addr,e)}function SE(t,e){t.uniform2uiv(this.addr,e)}function wE(t,e){t.uniform3uiv(this.addr,e)}function ME(t,e){t.uniform4uiv(this.addr,e)}function EE(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||p0,s[a])}function TE(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||x0,s[a])}function AE(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||g0,s[a])}function NE(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||m0,s[a])}function CE(t){switch(t){case 5126:return dE;case 35664:return uE;case 35665:return hE;case 35666:return fE;case 35674:return pE;case 35675:return mE;case 35676:return xE;case 5124:case 35670:return gE;case 35667:case 35671:return vE;case 35668:case 35672:return _E;case 35669:case 35673:return bE;case 5125:return yE;case 36294:return SE;case 36295:return wE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return EE;case 35679:case 36299:case 36307:return TE;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return NE}}class kE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cE(n.type)}}class RE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CE(n.type)}}class DE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function sm(t,e){t.seq.push(e),t.map[e.id]=e}function PE(t,e,n){const i=t.name,r=i.length;for(sd.lastIndex=0;;){const s=sd.exec(i),a=sd.lastIndex;let l=s[1];const c=s[2]==="]",d=s[3];if(c&&(l=l|0),d===void 0||d==="["&&a+2===r){sm(n,d===void 0?new kE(l,t,e):new RE(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new DE(l),sm(n,p)),n=p}}}class Jo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);PE(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function am(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const LE=37297;let UE=0;function IE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}function BE(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Nl&&n===Al?i="LinearDisplayP3ToLinearSRGB":e===Al&&n===Nl&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case Kl:return[i,"LinearTransferOETF"];case Gn:case Zh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function om(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+IE(t.getShaderSource(e),a)}else return r}function FE(t,e){const n=BE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function OE(t,e){let n;switch(e){case tS:n="Linear";break;case nS:n="Reinhard";break;case iS:n="Cineon";break;case rS:n="ACESFilmic";break;case aS:n="AgX";break;case oS:n="Neutral";break;case sS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const To=new B;function jE(){Je.getLuminanceCoefficients(To);const t=To.x.toFixed(4),e=To.y.toFixed(4),n=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function HE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function na(t){return t!==""}function lm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(t){return t.replace(GE,XE)}const WE=new Map;function XE(t,e){let n=Ie[e];if(n===void 0){const i=WE.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yu(n)}const qE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(t){return t.replace(qE,$E)}function $E(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function um(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function YE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ly?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function KE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function ZE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ov:e="ENVMAP_BLENDING_MULTIPLY";break;case Jy:e="ENVMAP_BLENDING_MIX";break;case eS:e="ENVMAP_BLENDING_ADD";break}return e}function JE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function e2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=YE(n),d=KE(n),h=QE(n),p=ZE(n),f=JE(n),x=zE(n),g=HE(s),y=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(na).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(na).join(`
`),u.length>0&&(u+=`
`)):(m=[um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),u=[um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==qi?OE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,FE("linearToOutputTexel",n.outputColorSpace),jE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(na).join(`
`)),a=Yu(a),a=lm(a,n),a=cm(a,n),l=Yu(l),l=lm(l,n),l=cm(l,n),a=dm(a),l=dm(l),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=v+m+a,w=v+u+l,C=am(r,r.VERTEX_SHADER,_),N=am(r,r.FRAGMENT_SHADER,w);r.attachShader(y,C),r.attachShader(y,N),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(M){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),j=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(N).trim();let Z=!0,z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,N);else{const Q=om(r,C,"vertex"),D=om(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+H+`
`+Q+`
`+D)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(j===""||X==="")&&(z=!1);z&&(M.diagnostics={runnable:Z,programLog:H,vertexShader:{log:j,prefix:m},fragmentShader:{log:X,prefix:u}})}r.deleteShader(C),r.deleteShader(N),k=new Jo(r,y),W=VE(r,y)}let k;this.getUniforms=function(){return k===void 0&&T(this),k};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(y,LE)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=N,this}let t2=0;class n2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new i2(e),n.set(e,i)),i}}class i2{constructor(e){this.id=t2++,this.code=e,this.usedTimes=0}}function r2(t,e,n,i,r,s,a){const l=new i0,c=new n2,d=new Set,h=[],p=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,x=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return d.add(b),b===0?"uv":`uv${b}`}function u(b,M,H,j,X){const Z=j.fog,z=X.geometry,Q=b.isMeshStandardMaterial?j.environment:null,D=(b.isMeshStandardMaterial?n:e).get(b.envMap||Q),q=D&&D.mapping===Yl?D.image.height:null,K=y[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=ee!==void 0?ee.length:0;let je=0;z.morphAttributes.position!==void 0&&(je=1),z.morphAttributes.normal!==void 0&&(je=2),z.morphAttributes.color!==void 0&&(je=3);let G,te,de,le;if(K){const Yt=Wn[K];G=Yt.vertexShader,te=Yt.fragmentShader}else G=b.vertexShader,te=b.fragmentShader,c.update(b),de=c.getVertexShaderID(b),le=c.getFragmentShaderID(b);const Ae=t.getRenderTarget(),Ee=X.isInstancedMesh===!0,ze=X.isBatchedMesh===!0,tt=!!b.map,He=!!b.matcap,R=!!D,Ht=!!b.aoMap,Ve=!!b.lightMap,$e=!!b.bumpMap,ke=!!b.normalMap,at=!!b.displacementMap,Le=!!b.emissiveMap,A=!!b.metalnessMap,S=!!b.roughnessMap,I=b.anisotropy>0,Y=b.clearcoat>0,ne=b.dispersion>0,$=b.iridescence>0,Se=b.sheen>0,ce=b.transmission>0,ge=I&&!!b.anisotropyMap,Ye=Y&&!!b.clearcoatMap,re=Y&&!!b.clearcoatNormalMap,ve=Y&&!!b.clearcoatRoughnessMap,Re=$&&!!b.iridescenceMap,De=$&&!!b.iridescenceThicknessMap,_e=Se&&!!b.sheenColorMap,Ge=Se&&!!b.sheenRoughnessMap,Ue=!!b.specularMap,rt=!!b.specularColorMap,P=!!b.specularIntensityMap,fe=ce&&!!b.transmissionMap,V=ce&&!!b.thicknessMap,J=!!b.gradientMap,ue=!!b.alphaMap,pe=b.alphaTest>0,We=!!b.alphaHash,yt=!!b.extensions;let $t=qi;b.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&($t=t.toneMapping);const Ke={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:te,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:le,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:ze,batchingColor:ze&&X._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&X.instanceColor!==null,instancingMorph:Ee&&X.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:tr,alphaToCoverage:!!b.alphaToCoverage,map:tt,matcap:He,envMap:R,envMapMode:R&&D.mapping,envMapCubeUVHeight:q,aoMap:Ht,lightMap:Ve,bumpMap:$e,normalMap:ke,displacementMap:x&&at,emissiveMap:Le,normalMapObjectSpace:ke&&b.normalMapType===uS,normalMapTangentSpace:ke&&b.normalMapType===Qv,metalnessMap:A,roughnessMap:S,anisotropy:I,anisotropyMap:ge,clearcoat:Y,clearcoatMap:Ye,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:ne,iridescence:$,iridescenceMap:Re,iridescenceThicknessMap:De,sheen:Se,sheenColorMap:_e,sheenRoughnessMap:Ge,specularMap:Ue,specularColorMap:rt,specularIntensityMap:P,transmission:ce,transmissionMap:fe,thicknessMap:V,gradientMap:J,opaque:b.transparent===!1&&b.blending===ps&&b.alphaToCoverage===!1,alphaMap:ue,alphaTest:pe,alphaHash:We,combine:b.combine,mapUv:tt&&m(b.map.channel),aoMapUv:Ht&&m(b.aoMap.channel),lightMapUv:Ve&&m(b.lightMap.channel),bumpMapUv:$e&&m(b.bumpMap.channel),normalMapUv:ke&&m(b.normalMap.channel),displacementMapUv:at&&m(b.displacementMap.channel),emissiveMapUv:Le&&m(b.emissiveMap.channel),metalnessMapUv:A&&m(b.metalnessMap.channel),roughnessMapUv:S&&m(b.roughnessMap.channel),anisotropyMapUv:ge&&m(b.anisotropyMap.channel),clearcoatMapUv:Ye&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&m(b.sheenRoughnessMap.channel),specularMapUv:Ue&&m(b.specularMap.channel),specularColorMapUv:rt&&m(b.specularColorMap.channel),specularIntensityMapUv:P&&m(b.specularIntensityMap.channel),transmissionMapUv:fe&&m(b.transmissionMap.channel),thicknessMapUv:V&&m(b.thicknessMap.channel),alphaMapUv:ue&&m(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ke||I),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!z.attributes.uv&&(tt||ue),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:je,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:$t,decodeVideoTexture:tt&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===li,flipSided:b.side===rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:yt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&b.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ke.vertexUv1s=d.has(1),Ke.vertexUv2s=d.has(2),Ke.vertexUv3s=d.has(3),d.clear(),Ke}function v(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)M.push(H),M.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(_(M,b),w(M,b),M.push(t.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function w(b,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),b.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reverseDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.alphaToCoverage&&l.enable(20),b.push(l.mask)}function C(b){const M=y[b.type];let H;if(M){const j=Wn[M];H=zS.clone(j.uniforms)}else H=b.uniforms;return H}function N(b,M){let H;for(let j=0,X=h.length;j<X;j++){const Z=h[j];if(Z.cacheKey===M){H=Z,++H.usedTimes;break}}return H===void 0&&(H=new e2(t,M,b,s),h.push(H)),H}function T(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function k(b){c.remove(b)}function W(){c.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:C,acquireProgram:N,releaseProgram:T,releaseShaderCache:k,programs:h,dispose:W}}function s2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function a2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,f,x,g,y,m){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:x,groupOrder:g,renderOrder:p.renderOrder,z:y,group:m},t[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=x,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=y,u.group=m),e++,u}function l(p,f,x,g,y,m){const u=a(p,f,x,g,y,m);x.transmission>0?i.push(u):x.transparent===!0?r.push(u):n.push(u)}function c(p,f,x,g,y,m){const u=a(p,f,x,g,y,m);x.transmission>0?i.unshift(u):x.transparent===!0?r.unshift(u):n.unshift(u)}function d(p,f){n.length>1&&n.sort(p||a2),i.length>1&&i.sort(f||hm),r.length>1&&r.sort(f||hm)}function h(){for(let p=e,f=t.length;p<f;p++){const x=t[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function o2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new fm,t.set(i,[a])):r>=s.length?(a=new fm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function l2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Xe};break;case"SpotLight":n={position:new B,direction:new B,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function c2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let d2=0;function u2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function h2(t){const e=new l2,n=c2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new B);const r=new B,s=new pt,a=new pt;function l(d){let h=0,p=0,f=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let x=0,g=0,y=0,m=0,u=0,v=0,_=0,w=0,C=0,N=0,T=0;d.sort(u2);for(let W=0,b=d.length;W<b;W++){const M=d[W],H=M.color,j=M.intensity,X=M.distance,Z=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=H.r*j,p+=H.g*j,f+=H.b*j;else if(M.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(M.sh.coefficients[z],j);T++}else if(M.isDirectionalLight){const z=e.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Q=M.shadow,D=n.get(M);D.shadowIntensity=Q.intensity,D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,i.directionalShadow[x]=D,i.directionalShadowMap[x]=Z,i.directionalShadowMatrix[x]=M.shadow.matrix,v++}i.directional[x]=z,x++}else if(M.isSpotLight){const z=e.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(H).multiplyScalar(j),z.distance=X,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,i.spot[y]=z;const Q=M.shadow;if(M.map&&(i.spotLightMap[C]=M.map,C++,Q.updateMatrices(M),M.castShadow&&N++),i.spotLightMatrix[y]=Q.matrix,M.castShadow){const D=n.get(M);D.shadowIntensity=Q.intensity,D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=Z,w++}y++}else if(M.isRectAreaLight){const z=e.get(M);z.color.copy(H).multiplyScalar(j),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=z,m++}else if(M.isPointLight){const z=e.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const Q=M.shadow,D=n.get(M);D.shadowIntensity=Q.intensity,D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,D.shadowCameraNear=Q.camera.near,D.shadowCameraFar=Q.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=M.shadow.matrix,_++}i.point[g]=z,g++}else if(M.isHemisphereLight){const z=e.get(M);z.skyColor.copy(M.color).multiplyScalar(j),z.groundColor.copy(M.groundColor).multiplyScalar(j),i.hemi[u]=z,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const k=i.hash;(k.directionalLength!==x||k.pointLength!==g||k.spotLength!==y||k.rectAreaLength!==m||k.hemiLength!==u||k.numDirectionalShadows!==v||k.numPointShadows!==_||k.numSpotShadows!==w||k.numSpotMaps!==C||k.numLightProbes!==T)&&(i.directional.length=x,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=w+C-N,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=T,k.directionalLength=x,k.pointLength=g,k.spotLength=y,k.rectAreaLength=m,k.hemiLength=u,k.numDirectionalShadows=v,k.numPointShadows=_,k.numSpotShadows=w,k.numSpotMaps=C,k.numLightProbes=T,i.version=d2++)}function c(d,h){let p=0,f=0,x=0,g=0,y=0;const m=h.matrixWorldInverse;for(let u=0,v=d.length;u<v;u++){const _=d[u];if(_.isDirectionalLight){const w=i.directional[p];w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(_.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),x++}else if(_.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const w=i.hemi[y];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),y++}}}return{setup:l,setupView:c,state:i}}function pm(t){const e=new h2(t),n=[],i=[];function r(h){d.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function l(){e.setup(n)}function c(h){e.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function f2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new pm(t),e.set(r,[l])):s>=a.length?(l=new pm(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class p2 extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m2 extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const x2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g2=`uniform sampler2D shadow_pass;
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
}`;function v2(t,e,n){let i=new Jh;const r=new et,s=new et,a=new vt,l=new p2({depthPacking:dS}),c=new m2,d={},h=n.maxTextureSize,p={[Ki]:rn,[rn]:Ki,[li]:li},f=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:x2,fragmentShader:g2}),x=f.clone();x.defines.HORIZONTAL_PASS=1;const g=new Si;g.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new qn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fv;let u=this.type;this.render=function(N,T,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const W=t.getRenderTarget(),b=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Xi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=u!==si&&this.type===si,X=u===si&&this.type!==si;for(let Z=0,z=N.length;Z<z;Z++){const Q=N[Z],D=Q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const q=D.getFrameExtents();if(r.multiply(q),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null||j===!0||X===!0){const ee=this.type!==si?{minFilter:Mn,magFilter:Mn}:{};D.map!==null&&D.map.dispose(),D.map=new Cr(r.x,r.y,ee),D.map.texture.name=Q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const K=D.getViewportCount();for(let ee=0;ee<K;ee++){const me=D.getViewport(ee);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),H.viewport(a),D.updateMatrices(Q,ee),i=D.getFrustum(),w(T,k,D.camera,Q,this.type)}D.isPointLightShadow!==!0&&this.type===si&&v(D,k),D.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(W,b,M)};function v(N,T){const k=e.update(y);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Cr(r.x,r.y)),f.uniforms.shadow_pass.value=N.map.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(T,null,k,f,y,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(T,null,k,x,y,null)}function _(N,T,k,W){let b=null;const M=k.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(M!==void 0)b=M;else if(b=k.isPointLight===!0?c:l,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=b.uuid,j=T.uuid;let X=d[H];X===void 0&&(X={},d[H]=X);let Z=X[j];Z===void 0&&(Z=b.clone(),X[j]=Z,T.addEventListener("dispose",C)),b=Z}if(b.visible=T.visible,b.wireframe=T.wireframe,W===si?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:p[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=t.properties.get(b);H.light=k}return b}function w(N,T,k,W,b){if(N.visible===!1)return;if(N.layers.test(T.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===si)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,N.matrixWorld);const j=e.update(N),X=N.material;if(Array.isArray(X)){const Z=j.groups;for(let z=0,Q=Z.length;z<Q;z++){const D=Z[z],q=X[D.materialIndex];if(q&&q.visible){const K=_(N,q,W,b);N.onBeforeShadow(t,N,T,k,j,K,D),t.renderBufferDirect(k,null,j,K,N,D),N.onAfterShadow(t,N,T,k,j,K,D)}}}else if(X.visible){const Z=_(N,X,W,b);N.onBeforeShadow(t,N,T,k,j,Z,null),t.renderBufferDirect(k,null,j,Z,N,null),N.onAfterShadow(t,N,T,k,j,Z,null)}}const H=N.children;for(let j=0,X=H.length;j<X;j++)w(H[j],T,k,W,b)}function C(N){N.target.removeEventListener("dispose",C);for(const k in d){const W=d[k],b=N.target.uuid;b in W&&(W[b].dispose(),delete W[b])}}}const _2={[uu]:hu,[fu]:xu,[pu]:gu,[Ms]:mu,[hu]:uu,[xu]:fu,[gu]:pu,[mu]:Ms};function b2(t){function e(){let P=!1;const fe=new vt;let V=null;const J=new vt(0,0,0,0);return{setMask:function(ue){V!==ue&&!P&&(t.colorMask(ue,ue,ue,ue),V=ue)},setLocked:function(ue){P=ue},setClear:function(ue,pe,We,yt,$t){$t===!0&&(ue*=yt,pe*=yt,We*=yt),fe.set(ue,pe,We,yt),J.equals(fe)===!1&&(t.clearColor(ue,pe,We,yt),J.copy(fe))},reset:function(){P=!1,V=null,J.set(-1,0,0,0)}}}function n(){let P=!1,fe=!1,V=null,J=null,ue=null;return{setReversed:function(pe){fe=pe},setTest:function(pe){pe?de(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(pe){V!==pe&&!P&&(t.depthMask(pe),V=pe)},setFunc:function(pe){if(fe&&(pe=_2[pe]),J!==pe){switch(pe){case uu:t.depthFunc(t.NEVER);break;case hu:t.depthFunc(t.ALWAYS);break;case fu:t.depthFunc(t.LESS);break;case Ms:t.depthFunc(t.LEQUAL);break;case pu:t.depthFunc(t.EQUAL);break;case mu:t.depthFunc(t.GEQUAL);break;case xu:t.depthFunc(t.GREATER);break;case gu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=pe}},setLocked:function(pe){P=pe},setClear:function(pe){ue!==pe&&(t.clearDepth(pe),ue=pe)},reset:function(){P=!1,V=null,J=null,ue=null}}}function i(){let P=!1,fe=null,V=null,J=null,ue=null,pe=null,We=null,yt=null,$t=null;return{setTest:function(Ke){P||(Ke?de(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Ke){fe!==Ke&&!P&&(t.stencilMask(Ke),fe=Ke)},setFunc:function(Ke,Yt,Jn){(V!==Ke||J!==Yt||ue!==Jn)&&(t.stencilFunc(Ke,Yt,Jn),V=Ke,J=Yt,ue=Jn)},setOp:function(Ke,Yt,Jn){(pe!==Ke||We!==Yt||yt!==Jn)&&(t.stencilOp(Ke,Yt,Jn),pe=Ke,We=Yt,yt=Jn)},setLocked:function(Ke){P=Ke},setClear:function(Ke){$t!==Ke&&(t.clearStencil(Ke),$t=Ke)},reset:function(){P=!1,fe=null,V=null,J=null,ue=null,pe=null,We=null,yt=null,$t=null}}}const r=new e,s=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},h={},p=new WeakMap,f=[],x=null,g=!1,y=null,m=null,u=null,v=null,_=null,w=null,C=null,N=new Xe(0,0,0),T=0,k=!1,W=null,b=null,M=null,H=null,j=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,z=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=z>=1):Q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=z>=2);let D=null,q={};const K=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),me=new vt().fromArray(K),je=new vt().fromArray(ee);function G(P,fe,V,J){const ue=new Uint8Array(4),pe=t.createTexture();t.bindTexture(P,pe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<V;We++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(fe+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return pe}const te={};te[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),de(t.DEPTH_TEST),s.setFunc(Ms),Ve(!1),$e(Sp),de(t.CULL_FACE),R(Xi);function de(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function le(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function Ae(P,fe){return h[P]!==fe?(t.bindFramebuffer(P,fe),h[P]=fe,P===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),P===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ee(P,fe){let V=f,J=!1;if(P){V=p.get(fe),V===void 0&&(V=[],p.set(fe,V));const ue=P.textures;if(V.length!==ue.length||V[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,We=ue.length;pe<We;pe++)V[pe]=t.COLOR_ATTACHMENT0+pe;V.length=ue.length,J=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,J=!0);J&&t.drawBuffers(V)}function ze(P){return x!==P?(t.useProgram(P),x=P,!0):!1}const tt={[pr]:t.FUNC_ADD,[Iy]:t.FUNC_SUBTRACT,[By]:t.FUNC_REVERSE_SUBTRACT};tt[Fy]=t.MIN,tt[Oy]=t.MAX;const He={[jy]:t.ZERO,[zy]:t.ONE,[Hy]:t.SRC_COLOR,[cu]:t.SRC_ALPHA,[$y]:t.SRC_ALPHA_SATURATE,[Xy]:t.DST_COLOR,[Gy]:t.DST_ALPHA,[Vy]:t.ONE_MINUS_SRC_COLOR,[du]:t.ONE_MINUS_SRC_ALPHA,[qy]:t.ONE_MINUS_DST_COLOR,[Wy]:t.ONE_MINUS_DST_ALPHA,[Yy]:t.CONSTANT_COLOR,[Ky]:t.ONE_MINUS_CONSTANT_COLOR,[Qy]:t.CONSTANT_ALPHA,[Zy]:t.ONE_MINUS_CONSTANT_ALPHA};function R(P,fe,V,J,ue,pe,We,yt,$t,Ke){if(P===Xi){g===!0&&(le(t.BLEND),g=!1);return}if(g===!1&&(de(t.BLEND),g=!0),P!==Uy){if(P!==y||Ke!==k){if((m!==pr||_!==pr)&&(t.blendEquation(t.FUNC_ADD),m=pr,_=pr),Ke)switch(P){case ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wp:t.blendFunc(t.ONE,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}u=null,v=null,w=null,C=null,N.set(0,0,0),T=0,y=P,k=Ke}return}ue=ue||fe,pe=pe||V,We=We||J,(fe!==m||ue!==_)&&(t.blendEquationSeparate(tt[fe],tt[ue]),m=fe,_=ue),(V!==u||J!==v||pe!==w||We!==C)&&(t.blendFuncSeparate(He[V],He[J],He[pe],He[We]),u=V,v=J,w=pe,C=We),(yt.equals(N)===!1||$t!==T)&&(t.blendColor(yt.r,yt.g,yt.b,$t),N.copy(yt),T=$t),y=P,k=!1}function Ht(P,fe){P.side===li?le(t.CULL_FACE):de(t.CULL_FACE);let V=P.side===rn;fe&&(V=!V),Ve(V),P.blending===ps&&P.transparent===!1?R(Xi):R(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const J=P.stencilWrite;a.setTest(J),J&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),at(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(P){W!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),W=P)}function $e(P){P!==Dy?(de(t.CULL_FACE),P!==b&&(P===Sp?t.cullFace(t.BACK):P===Py?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),b=P}function ke(P){P!==M&&(Z&&t.lineWidth(P),M=P)}function at(P,fe,V){P?(de(t.POLYGON_OFFSET_FILL),(H!==fe||j!==V)&&(t.polygonOffset(fe,V),H=fe,j=V)):le(t.POLYGON_OFFSET_FILL)}function Le(P){P?de(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function A(P){P===void 0&&(P=t.TEXTURE0+X-1),D!==P&&(t.activeTexture(P),D=P)}function S(P,fe,V){V===void 0&&(D===null?V=t.TEXTURE0+X-1:V=D);let J=q[V];J===void 0&&(J={type:void 0,texture:void 0},q[V]=J),(J.type!==P||J.texture!==fe)&&(D!==V&&(t.activeTexture(V),D=V),t.bindTexture(P,fe||te[P]),J.type=P,J.texture=fe)}function I(){const P=q[D];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(P){me.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),me.copy(P))}function _e(P){je.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),je.copy(P))}function Ge(P,fe){let V=c.get(fe);V===void 0&&(V=new WeakMap,c.set(fe,V));let J=V.get(P);J===void 0&&(J=t.getUniformBlockIndex(fe,P.name),V.set(P,J))}function Ue(P,fe){const J=c.get(fe).get(P);l.get(fe)!==J&&(t.uniformBlockBinding(fe,J,P.__bindingPointIndex),l.set(fe,J))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},D=null,q={},h={},p=new WeakMap,f=[],x=null,g=!1,y=null,m=null,u=null,v=null,_=null,w=null,C=null,N=new Xe(0,0,0),T=0,k=!1,W=null,b=null,M=null,H=null,j=null,me.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:de,disable:le,bindFramebuffer:Ae,drawBuffers:Ee,useProgram:ze,setBlending:R,setMaterial:Ht,setFlipSided:Ve,setCullFace:$e,setLineWidth:ke,setPolygonOffset:at,setScissorTest:Le,activeTexture:A,bindTexture:S,unbindTexture:I,compressedTexImage2D:Y,compressedTexImage3D:ne,texImage2D:ve,texImage3D:Re,updateUBOMapping:Ge,uniformBlockBinding:Ue,texStorage2D:Ye,texStorage3D:re,texSubImage2D:$,texSubImage3D:Se,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:De,viewport:_e,reset:rt}}function mm(t,e,n,i){const r=y2(i);switch(n){case Gv:return t*e;case Xv:return t*e;case qv:return t*e*2;case $v:return t*e/r.components*r.byteLength;case Yh:return t*e/r.components*r.byteLength;case Yv:return t*e*2/r.components*r.byteLength;case Kh:return t*e*2/r.components*r.byteLength;case Wv:return t*e*3/r.components*r.byteLength;case Fn:return t*e*4/r.components*r.byteLength;case Qh:return t*e*4/r.components*r.byteLength;case Xo:case qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $o:case Yo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wu:case Eu:return Math.max(t,16)*Math.max(e,8)/4;case Su:case Mu:return Math.max(t,8)*Math.max(e,8)/2;case Tu:case Au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Du:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ju:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ko:case Vu:case Gu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Kv:case Wu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xu:case qu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function y2(t){switch(t){case bi:case zv:return{byteLength:1,components:1};case ka:case Hv:case Ia:return{byteLength:2,components:1};case qh:case $h:return{byteLength:2,components:4};case Nr:case Xh:case ui:return{byteLength:4,components:1};case Vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function S2(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new et,h=new WeakMap;let p;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return x?new OffscreenCanvas(A,S):kl("canvas")}function y(A,S,I){let Y=1;const ne=Le(A);if((ne.width>I||ne.height>I)&&(Y=I/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(Y*ne.width),Se=Math.floor(Y*ne.height);p===void 0&&(p=g($,Se));const ce=S?g($,Se):p;return ce.width=$,ce.height=Se,ce.getContext("2d").drawImage(A,0,0,$,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Se+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Mn&&A.minFilter!==Bn}function u(A){t.generateMipmap(A)}function v(A,S,I,Y,ne=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=S;if(S===t.RED&&(I===t.FLOAT&&($=t.R32F),I===t.HALF_FLOAT&&($=t.R16F),I===t.UNSIGNED_BYTE&&($=t.R8)),S===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.R8UI),I===t.UNSIGNED_SHORT&&($=t.R16UI),I===t.UNSIGNED_INT&&($=t.R32UI),I===t.BYTE&&($=t.R8I),I===t.SHORT&&($=t.R16I),I===t.INT&&($=t.R32I)),S===t.RG&&(I===t.FLOAT&&($=t.RG32F),I===t.HALF_FLOAT&&($=t.RG16F),I===t.UNSIGNED_BYTE&&($=t.RG8)),S===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.RG8UI),I===t.UNSIGNED_SHORT&&($=t.RG16UI),I===t.UNSIGNED_INT&&($=t.RG32UI),I===t.BYTE&&($=t.RG8I),I===t.SHORT&&($=t.RG16I),I===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.RGB8UI),I===t.UNSIGNED_SHORT&&($=t.RGB16UI),I===t.UNSIGNED_INT&&($=t.RGB32UI),I===t.BYTE&&($=t.RGB8I),I===t.SHORT&&($=t.RGB16I),I===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.RGBA8UI),I===t.UNSIGNED_SHORT&&($=t.RGBA16UI),I===t.UNSIGNED_INT&&($=t.RGBA32UI),I===t.BYTE&&($=t.RGBA8I),I===t.SHORT&&($=t.RGBA16I),I===t.INT&&($=t.RGBA32I)),S===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),S===t.RGBA){const Se=ne?Tl:Je.getTransfer(Y);I===t.FLOAT&&($=t.RGBA32F),I===t.HALF_FLOAT&&($=t.RGBA16F),I===t.UNSIGNED_BYTE&&($=Se===ct?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(A,S){let I;return A?S===null||S===Nr||S===As?I=t.DEPTH24_STENCIL8:S===ui?I=t.DEPTH32F_STENCIL8:S===ka&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Nr||S===As?I=t.DEPTH_COMPONENT24:S===ui?I=t.DEPTH_COMPONENT32F:S===ka&&(I=t.DEPTH_COMPONENT16),I}function w(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Mn&&A.minFilter!==Bn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),T(S),S.isVideoTexture&&h.delete(S)}function N(A){const S=A.target;S.removeEventListener("dispose",N),W(S)}function T(A){const S=i.get(A);if(S.__webglInit===void 0)return;const I=A.source,Y=f.get(I);if(Y){const ne=Y[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&k(A),Object.keys(Y).length===0&&f.delete(I)}i.remove(A)}function k(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const I=A.source,Y=f.get(I);delete Y[S.__cacheKey],a.memory.textures--}function W(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let ne=0;ne<S.__webglFramebuffer[Y].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[Y][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)t.deleteFramebuffer(S.__webglFramebuffer[Y]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=A.textures;for(let Y=0,ne=I.length;Y<ne;Y++){const $=i.get(I[Y]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(I[Y])}i.remove(A)}let b=0;function M(){b=0}function H(){const A=b;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),b+=1,A}function j(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function X(A,S){const I=i.get(A);if(A.isVideoTexture&&ke(A),A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(I,A,S);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+S)}function Z(A,S){const I=i.get(A);if(A.version>0&&I.__version!==A.version){je(I,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+S)}function z(A,S){const I=i.get(A);if(A.version>0&&I.__version!==A.version){je(I,A,S);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+S)}function Q(A,S){const I=i.get(A);if(A.version>0&&I.__version!==A.version){G(I,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+S)}const D={[bu]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[yu]:t.MIRRORED_REPEAT},q={[Mn]:t.NEAREST,[lS]:t.NEAREST_MIPMAP_NEAREST,[so]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[Rc]:t.LINEAR_MIPMAP_NEAREST,[br]:t.LINEAR_MIPMAP_LINEAR},K={[hS]:t.NEVER,[vS]:t.ALWAYS,[fS]:t.LESS,[Zv]:t.LEQUAL,[pS]:t.EQUAL,[gS]:t.GEQUAL,[mS]:t.GREATER,[xS]:t.NOTEQUAL};function ee(A,S){if(S.type===ui&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Bn||S.magFilter===Rc||S.magFilter===so||S.magFilter===br||S.minFilter===Bn||S.minFilter===Rc||S.minFilter===so||S.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,D[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,D[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,D[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,q[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,q[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Mn||S.minFilter!==so&&S.minFilter!==br||S.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function me(A,S){let I=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const Y=S.source;let ne=f.get(Y);ne===void 0&&(ne={},f.set(Y,ne));const $=j(S);if($!==A.__cacheKey){ne[$]===void 0&&(ne[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ne[$].usedTimes++;const Se=ne[A.__cacheKey];Se!==void 0&&(ne[A.__cacheKey].usedTimes--,Se.usedTimes===0&&k(S)),A.__cacheKey=$,A.__webglTexture=ne[$].texture}return I}function je(A,S,I){let Y=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=t.TEXTURE_3D);const ne=me(A,S),$=S.source;n.bindTexture(Y,A.__webglTexture,t.TEXTURE0+I);const Se=i.get($);if($.version!==Se.__version||ne===!0){n.activeTexture(t.TEXTURE0+I);const ce=Je.getPrimaries(Je.workingColorSpace),ge=S.colorSpace===Ui?null:Je.getPrimaries(S.colorSpace),Ye=S.colorSpace===Ui||ce===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let re=y(S.image,!1,r.maxTextureSize);re=at(S,re);const ve=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let De=v(S.internalFormat,ve,Re,S.colorSpace,S.isVideoTexture);ee(Y,S);let _e;const Ge=S.mipmaps,Ue=S.isVideoTexture!==!0,rt=Se.__version===void 0||ne===!0,P=$.dataReady,fe=w(S,re);if(S.isDepthTexture)De=_(S.format===Ns,S.type),rt&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,De,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,ve,Re,null));else if(S.isDataTexture)if(Ge.length>0){Ue&&rt&&n.texStorage2D(t.TEXTURE_2D,fe,De,Ge[0].width,Ge[0].height);for(let V=0,J=Ge.length;V<J;V++)_e=Ge[V],Ue?P&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ve,Re,_e.data):n.texImage2D(t.TEXTURE_2D,V,De,_e.width,_e.height,0,ve,Re,_e.data);S.generateMipmaps=!1}else Ue?(rt&&n.texStorage2D(t.TEXTURE_2D,fe,De,re.width,re.height),P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ve,Re,re.data)):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,ve,Re,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ue&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,De,Ge[0].width,Ge[0].height,re.depth);for(let V=0,J=Ge.length;V<J;V++)if(_e=Ge[V],S.format!==Fn)if(ve!==null)if(Ue){if(P)if(S.layerUpdates.size>0){const ue=mm(_e.width,_e.height,S.format,S.type);for(const pe of S.layerUpdates){const We=_e.data.subarray(pe*ue/_e.data.BYTES_PER_ELEMENT,(pe+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,pe,_e.width,_e.height,1,ve,We,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,re.depth,ve,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,De,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,re.depth,ve,Re,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,De,_e.width,_e.height,re.depth,0,ve,Re,_e.data)}else{Ue&&rt&&n.texStorage2D(t.TEXTURE_2D,fe,De,Ge[0].width,Ge[0].height);for(let V=0,J=Ge.length;V<J;V++)_e=Ge[V],S.format!==Fn?ve!==null?Ue?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,V,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?P&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ve,Re,_e.data):n.texImage2D(t.TEXTURE_2D,V,De,_e.width,_e.height,0,ve,Re,_e.data)}else if(S.isDataArrayTexture)if(Ue){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,De,re.width,re.height,re.depth),P)if(S.layerUpdates.size>0){const V=mm(re.width,re.height,S.format,S.type);for(const J of S.layerUpdates){const ue=re.data.subarray(J*V/re.data.BYTES_PER_ELEMENT,(J+1)*V/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ve,Re,ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Re,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,ve,Re,re.data);else if(S.isData3DTexture)Ue?(rt&&n.texStorage3D(t.TEXTURE_3D,fe,De,re.width,re.height,re.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Re,re.data)):n.texImage3D(t.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,ve,Re,re.data);else if(S.isFramebufferTexture){if(rt)if(Ue)n.texStorage2D(t.TEXTURE_2D,fe,De,re.width,re.height);else{let V=re.width,J=re.height;for(let ue=0;ue<fe;ue++)n.texImage2D(t.TEXTURE_2D,ue,De,V,J,0,ve,Re,null),V>>=1,J>>=1}}else if(Ge.length>0){if(Ue&&rt){const V=Le(Ge[0]);n.texStorage2D(t.TEXTURE_2D,fe,De,V.width,V.height)}for(let V=0,J=Ge.length;V<J;V++)_e=Ge[V],Ue?P&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ve,Re,_e):n.texImage2D(t.TEXTURE_2D,V,De,ve,Re,_e);S.generateMipmaps=!1}else if(Ue){if(rt){const V=Le(re);n.texStorage2D(t.TEXTURE_2D,fe,De,V.width,V.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Re,re)}else n.texImage2D(t.TEXTURE_2D,0,De,ve,Re,re);m(S)&&u(Y),Se.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function G(A,S,I){if(S.image.length!==6)return;const Y=me(A,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+I);const $=i.get(ne);if(ne.version!==$.__version||Y===!0){n.activeTexture(t.TEXTURE0+I);const Se=Je.getPrimaries(Je.workingColorSpace),ce=S.colorSpace===Ui?null:Je.getPrimaries(S.colorSpace),ge=S.colorSpace===Ui||Se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Ye&&!re?ve[J]=y(S.image[J],!0,r.maxCubemapSize):ve[J]=re?S.image[J].image:S.image[J],ve[J]=at(S,ve[J]);const Re=ve[0],De=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),Ge=v(S.internalFormat,De,_e,S.colorSpace),Ue=S.isVideoTexture!==!0,rt=$.__version===void 0||Y===!0,P=ne.dataReady;let fe=w(S,Re);ee(t.TEXTURE_CUBE_MAP,S);let V;if(Ye){Ue&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ge,Re.width,Re.height);for(let J=0;J<6;J++){V=ve[J].mipmaps;for(let ue=0;ue<V.length;ue++){const pe=V[ue];S.format!==Fn?De!==null?Ue?P&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,pe.width,pe.height,De,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,pe.width,pe.height,De,_e,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Ge,pe.width,pe.height,0,De,_e,pe.data)}}}else{if(V=S.mipmaps,Ue&&rt){V.length>0&&fe++;const J=Le(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(re){Ue?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,De,_e,ve[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,ve[J].width,ve[J].height,0,De,_e,ve[J].data);for(let ue=0;ue<V.length;ue++){const We=V[ue].image[J].image;Ue?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,We.width,We.height,De,_e,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Ge,We.width,We.height,0,De,_e,We.data)}}else{Ue?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,_e,ve[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,De,_e,ve[J]);for(let ue=0;ue<V.length;ue++){const pe=V[ue];Ue?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,De,_e,pe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Ge,De,_e,pe.image[J])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),$.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function te(A,S,I,Y,ne,$){const Se=s.convert(I.format,I.colorSpace),ce=s.convert(I.type),ge=v(I.internalFormat,Se,ce,I.colorSpace);if(!i.get(S).__hasExternalTextures){const re=Math.max(1,S.width>>$),ve=Math.max(1,S.height>>$);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,$,ge,re,ve,S.depth,0,Se,ce,null):n.texImage2D(ne,$,ge,re,ve,0,Se,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),$e(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ne,i.get(I).__webglTexture,0,Ve(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ne,i.get(I).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(A,S,I){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const Y=S.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,$=_(S.stencilBuffer,ne),Se=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Ve(S);$e(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,$,S.width,S.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,$,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,A)}else{const Y=S.textures;for(let ne=0;ne<Y.length;ne++){const $=Y[ne],Se=s.convert($.format,$.colorSpace),ce=s.convert($.type),ge=v($.internalFormat,Se,ce,$.colorSpace),Ye=Ve(S);I&&$e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,ge,S.width,S.height):$e(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Y=i.get(S.depthTexture).__webglTexture,ne=Ve(S);if(S.depthTexture.format===ms)$e(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(S.depthTexture.format===Ns)$e(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ae(A){const S=i.get(A),I=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=Y}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");le(S.__webglFramebuffer,A)}else if(I){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=t.createRenderbuffer(),de(S.__webglDepthbuffer[Y],A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),de(S.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(A,S,I){const Y=i.get(A);S!==void 0&&te(Y.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Ae(A)}function ze(A){const S=A.texture,I=i.get(A),Y=i.get(S);A.addEventListener("dispose",N);const ne=A.textures,$=A.isWebGLCubeRenderTarget===!0,Se=ne.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=S.version,a.memory.textures++),$){I.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[ce]=[];for(let ge=0;ge<S.mipmaps.length;ge++)I.__webglFramebuffer[ce][ge]=t.createFramebuffer()}else I.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)I.__webglFramebuffer[ce]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ce=0,ge=ne.length;ce<ge;ce++){const Ye=i.get(ne[ce]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&$e(A)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const ge=ne[ce];I.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[ce]);const Ye=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),ve=v(ge.internalFormat,Ye,re,ge.colorSpace,A.isXRRenderTarget===!0),Re=Ve(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ve,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,I.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),de(I.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ee(t.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)te(I.__webglFramebuffer[ce][ge],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else te(I.__webglFramebuffer[ce],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ce=0,ge=ne.length;ce<ge;ce++){const Ye=ne[ce],re=i.get(Ye);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ee(t.TEXTURE_2D,Ye),te(I.__webglFramebuffer,A,Ye,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Ye)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Y.__webglTexture),ee(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)te(I.__webglFramebuffer[ge],A,S,t.COLOR_ATTACHMENT0,ce,ge);else te(I.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,ce,0);m(S)&&u(ce),n.unbindTexture()}A.depthBuffer&&Ae(A)}function tt(A){const S=A.textures;for(let I=0,Y=S.length;I<Y;I++){const ne=S[I];if(m(ne)){const $=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(ne).__webglTexture;n.bindTexture($,Se),u($),n.unbindTexture()}}}const He=[],R=[];function Ht(A){if(A.samples>0){if($e(A)===!1){const S=A.textures,I=A.width,Y=A.height;let ne=t.COLOR_BUFFER_BIT;const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(A),ce=S.length>1;if(ce)for(let ge=0;ge<S.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Ye=i.get(S[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,I,Y,0,0,I,Y,ne,t.NEAREST),c===!0&&(He.length=0,R.length=0,He.push(t.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(He.push($),R.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,R)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<S.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Ye=i.get(S[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ve(A){return Math.min(r.maxSamples,A.samples)}function $e(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ke(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function at(A,S){const I=A.colorSpace,Y=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||I!==tr&&I!==Ui&&(Je.getTransfer(I)===ct?(Y!==Fn||ne!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(d.width=A.naturalWidth||A.width,d.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(d.width=A.displayWidth,d.height=A.displayHeight):(d.width=A.width,d.height=A.height),d}this.allocateTextureUnit=H,this.resetTextureUnits=M,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=z,this.setTextureCube=Q,this.rebindTextures=Ee,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=te,this.useMultisampledRTT=$e}function w2(t,e){function n(i,r=Ui){let s;const a=Je.getTransfer(r);if(i===bi)return t.UNSIGNED_BYTE;if(i===qh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$h)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===zv)return t.BYTE;if(i===Hv)return t.SHORT;if(i===ka)return t.UNSIGNED_SHORT;if(i===Xh)return t.INT;if(i===Nr)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Ia)return t.HALF_FLOAT;if(i===Gv)return t.ALPHA;if(i===Wv)return t.RGB;if(i===Fn)return t.RGBA;if(i===Xv)return t.LUMINANCE;if(i===qv)return t.LUMINANCE_ALPHA;if(i===ms)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===$v)return t.RED;if(i===Yh)return t.RED_INTEGER;if(i===Yv)return t.RG;if(i===Kh)return t.RG_INTEGER;if(i===Qh)return t.RGBA_INTEGER;if(i===Xo||i===qo||i===$o||i===Yo)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Su||i===wu||i===Mu||i===Eu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Su)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tu||i===Au||i===Nu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tu||i===Au)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nu)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cu||i===ku||i===Ru||i===Du||i===Pu||i===Lu||i===Uu||i===Iu||i===Bu||i===Fu||i===Ou||i===ju||i===zu||i===Hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cu)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ku)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ru)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Du)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pu)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lu)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uu)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Iu)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bu)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fu)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ou)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ju)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zu)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hu)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===Vu||i===Gu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ko)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kv||i===Wu||i===Xu||i===qu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ko)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class M2 extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E2={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(d,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],f=h.position.distanceTo(p.position),x=.02,g=.005;d.inputState.pinching&&f>x+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=x-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(E2)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const T2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A2=`
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

}`;class N2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qi({vertexShader:T2,fragmentShader:A2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qn(new Zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C2 extends Ps{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,d=null,h=null,p=null,f=null,x=null,g=null;const y=new N2,m=n.getContextAttributes();let u=null,v=null;const _=[],w=[],C=new et;let N=null;const T=new yn;T.layers.enable(1),T.viewport=new vt;const k=new yn;k.layers.enable(2),k.viewport=new vt;const W=[T,k],b=new M2;b.layers.enable(1),b.layers.enable(2);let M=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=_[G];return te===void 0&&(te=new ad,_[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=_[G];return te===void 0&&(te=new ad,_[G]=te),te.getGripSpace()},this.getHand=function(G){let te=_[G];return te===void 0&&(te=new ad,_[G]=te),te.getHandSpace()};function j(G){const te=w.indexOf(G.inputSource);if(te===-1)return;const de=_[te];de!==void 0&&(de.update(G.inputSource,G.frame,d||a),de.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Z);for(let G=0;G<_.length;G++){const te=w[G];te!==null&&(w[G]=null,_[G].disconnect(te))}M=null,H=null,y.reset(),e.setRenderTarget(u),x=null,f=null,p=null,r=null,v=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(G){d=G},this.getBaseLayer=function(){return f!==null?f:x},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new Cr(x.framebufferWidth,x.framebufferHeight,{format:Fn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,de=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Ns:ms,de=m.stencil?As:Nr);const Ae={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Cr(f.textureWidth,f.textureHeight,{format:Fn,type:bi,depthTexture:new f0(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),d=null,a=await r.requestReferenceSpace(l),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(G){for(let te=0;te<G.removed.length;te++){const de=G.removed[te],le=w.indexOf(de);le>=0&&(w[le]=null,_[le].disconnect(de))}for(let te=0;te<G.added.length;te++){const de=G.added[te];let le=w.indexOf(de);if(le===-1){for(let Ee=0;Ee<_.length;Ee++)if(Ee>=w.length){w.push(de),le=Ee;break}else if(w[Ee]===null){w[Ee]=de,le=Ee;break}if(le===-1)break}const Ae=_[le];Ae&&Ae.connect(de)}}const z=new B,Q=new B;function D(G,te,de){z.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(de.matrixWorld);const le=z.distanceTo(Q),Ae=te.projectionMatrix.elements,Ee=de.projectionMatrix.elements,ze=Ae[14]/(Ae[10]-1),tt=Ae[14]/(Ae[10]+1),He=(Ae[9]+1)/Ae[5],R=(Ae[9]-1)/Ae[5],Ht=(Ae[8]-1)/Ae[0],Ve=(Ee[8]+1)/Ee[0],$e=ze*Ht,ke=ze*Ve,at=le/(-Ht+Ve),Le=at*-Ht;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Le),G.translateZ(at),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ae[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const A=ze+at,S=tt+at,I=$e-Le,Y=ke+(le-Le),ne=He*tt/S*A,$=R*tt/S*A;G.projectionMatrix.makePerspective(I,Y,ne,$,A,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function q(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let te=G.near,de=G.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(de=y.depthFar)),b.near=k.near=T.near=te,b.far=k.far=T.far=de,(M!==b.near||H!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,H=b.far);const le=G.parent,Ae=b.cameras;q(b,le);for(let Ee=0;Ee<Ae.length;Ee++)q(Ae[Ee],le);Ae.length===2?D(b,T,k):b.projectionMatrix.copy(T.projectionMatrix),K(G,b,le)};function K(G,te,de){de===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=$u*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&x===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let ee=null;function me(G,te){if(h=te.getViewerPose(d||a),g=te,h!==null){const de=h.views;x!==null&&(e.setRenderTargetFramebuffer(v,x.framebuffer),e.setRenderTarget(v));let le=!1;de.length!==b.cameras.length&&(b.cameras.length=0,le=!0);for(let Ee=0;Ee<de.length;Ee++){const ze=de[Ee];let tt=null;if(x!==null)tt=x.getViewport(ze);else{const R=p.getViewSubImage(f,ze);tt=R.viewport,Ee===0&&(e.setRenderTargetTextures(v,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(v))}let He=W[Ee];He===void 0&&(He=new yn,He.layers.enable(Ee),He.viewport=new vt,W[Ee]=He),He.matrix.fromArray(ze.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ze.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(tt.x,tt.y,tt.width,tt.height),Ee===0&&(b.matrix.copy(He.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),le===!0&&b.cameras.push(He)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ee=p.getDepthInformation(de[0]);Ee&&Ee.isValid&&Ee.texture&&y.init(e,Ee,r.renderState)}}for(let de=0;de<_.length;de++){const le=w[de],Ae=_[de];le!==null&&Ae!==void 0&&Ae.update(le,te,d||a)}ee&&ee(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const je=new u0;je.setAnimationLoop(me),this.setAnimationLoop=function(G){ee=G},this.dispose=function(){}}}const cr=new Zn,k2=new pt;function R2(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,l0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,_,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&x(m,u,w)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&l(m,u)):u.isPointsMaterial?c(m,u,v,_):u.isSpriteMaterial?d(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),_=v.envMap,w=v.envMapRotation;_&&(m.envMap.value=_,cr.copy(w),cr.x*=-1,cr.y*=-1,cr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),m.envMapRotation.value.setFromMatrix4(k2.makeRotationFromEuler(cr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function l(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,v,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function x(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function D2(t,e,n,i){let r={},s={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const w=_.program;i.uniformBlockBinding(v,w)}function d(v,_){let w=r[v.id];w===void 0&&(g(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(v,C);const N=e.render.frame;s[v.id]!==N&&(f(v),s[v.id]=N)}function h(v){const _=p();v.__bindingPointIndex=_;const w=t.createBuffer(),C=v.__size,N=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,w),w}function p(){for(let v=0;v<l;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],w=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let N=0,T=w.length;N<T;N++){const k=Array.isArray(w[N])?w[N]:[w[N]];for(let W=0,b=k.length;W<b;W++){const M=k[W];if(x(M,N,W,C)===!0){const H=M.__offset,j=Array.isArray(M.value)?M.value:[M.value];let X=0;for(let Z=0;Z<j.length;Z++){const z=j[Z],Q=y(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,H+X,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(v,_,w,C){const N=v.value,T=_+"_"+w;if(C[T]===void 0)return typeof N=="number"||typeof N=="boolean"?C[T]=N:C[T]=N.clone(),!0;{const k=C[T];if(typeof N=="number"||typeof N=="boolean"){if(k!==N)return C[T]=N,!0}else if(k.equals(N)===!1)return k.copy(N),!0}return!1}function g(v){const _=v.uniforms;let w=0;const C=16;for(let T=0,k=_.length;T<k;T++){const W=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,M=W.length;b<M;b++){const H=W[b],j=Array.isArray(H.value)?H.value:[H.value];for(let X=0,Z=j.length;X<Z;X++){const z=j[X],Q=y(z),D=w%C,q=D%Q.boundary,K=D+q;w+=q,K!==0&&C-K<Q.storage&&(w+=C-K),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=Q.storage}}}const N=w%C;return N>0&&(w+=C-N),v.__size=w,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const w=a.indexOf(_.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:d,dispose:u}}class P2{constructor(e={}){const{canvas:n=bS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const x=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=qi,this.toneMappingExposure=1;const _=this;let w=!1,C=0,N=0,T=null,k=-1,W=null;const b=new vt,M=new vt;let H=null;const j=new Xe(0);let X=0,Z=n.width,z=n.height,Q=1,D=null,q=null;const K=new vt(0,0,Z,z),ee=new vt(0,0,Z,z);let me=!1;const je=new Jh;let G=!1,te=!1;const de=new pt,le=new pt,Ae=new B,Ee=new vt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function He(){return T===null?Q:1}let R=i;function Ht(E,L){return n.getContext(E,L)}try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wh}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",pe,!1),R===null){const L="webgl2";if(R=Ht(L,E),R===null)throw Ht(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,$e,ke,at,Le,A,S,I,Y,ne,$,Se,ce,ge,Ye,re,ve,Re,De,_e,Ge,Ue,rt,P;function fe(){Ve=new FM(R),Ve.init(),Ue=new w2(R,Ve),$e=new DM(R,Ve,e,Ue),ke=new b2(R),$e.reverseDepthBuffer&&ke.buffers.depth.setReversed(!0),at=new zM(R),Le=new s2,A=new S2(R,Ve,ke,Le,$e,Ue,at),S=new LM(_),I=new BM(_),Y=new $S(R),rt=new kM(R,Y),ne=new OM(R,Y,at,rt),$=new VM(R,ne,Y,at),De=new HM(R,$e,A),re=new PM(Le),Se=new r2(_,S,I,Ve,$e,rt,re),ce=new R2(_,Le),ge=new o2,Ye=new f2(Ve),Re=new CM(_,S,I,ke,$,f,c),ve=new v2(_,$,$e),P=new D2(R,at,$e,ke),_e=new RM(R,Ve,at),Ge=new jM(R,Ve,at),at.programs=Se.programs,_.capabilities=$e,_.extensions=Ve,_.properties=Le,_.renderLists=ge,_.shadowMap=ve,_.state=ke,_.info=at}fe();const V=new C2(_,R);this.xr=V,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(Z,z,!1))},this.getSize=function(E){return E.set(Z,z)},this.setSize=function(E,L,F=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,z=L,n.width=Math.floor(E*Q),n.height=Math.floor(L*Q),F===!0&&(n.style.width=E+"px",n.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(Z*Q,z*Q).floor()},this.setDrawingBufferSize=function(E,L,F){Z=E,z=L,Q=F,n.width=Math.floor(E*F),n.height=Math.floor(L*F),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,L,F,O){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,L,F,O),ke.viewport(b.copy(K).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,L,F,O){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,L,F,O),ke.scissor(M.copy(ee).multiplyScalar(Q).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(E){ke.setScissorTest(me=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(E=!0,L=!0,F=!0){let O=0;if(E){let U=!1;if(T!==null){const se=T.texture.format;U=se===Qh||se===Kh||se===Yh}if(U){const se=T.texture.type,he=se===bi||se===Nr||se===ka||se===As||se===qh||se===$h,be=Re.getClearColor(),ye=Re.getClearAlpha(),Ne=be.r,Ce=be.g,we=be.b;he?(x[0]=Ne,x[1]=Ce,x[2]=we,x[3]=ye,R.clearBufferuiv(R.COLOR,0,x)):(g[0]=Ne,g[1]=Ce,g[2]=we,g[3]=ye,R.clearBufferiv(R.COLOR,0,g))}else O|=R.COLOR_BUFFER_BIT}L&&(O|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),Ye.dispose(),Le.dispose(),S.dispose(),I.dispose(),$.dispose(),rt.dispose(),P.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",nf),V.removeEventListener("sessionend",rf),nr.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=at.autoReset,L=ve.enabled,F=ve.autoUpdate,O=ve.needsUpdate,U=ve.type;fe(),at.autoReset=E,ve.enabled=L,ve.autoUpdate=F,ve.needsUpdate=O,ve.type=U}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function We(E){const L=E.target;L.removeEventListener("dispose",We),yt(L)}function yt(E){$t(E),Le.remove(E)}function $t(E){const L=Le.get(E).programs;L!==void 0&&(L.forEach(function(F){Se.releaseProgram(F)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,F,O,U,se){L===null&&(L=ze);const he=U.isMesh&&U.matrixWorld.determinant()<0,be=b0(E,L,F,O,U);ke.setMaterial(O,he);let ye=F.index,Ne=1;if(O.wireframe===!0){if(ye=ne.getWireframeAttribute(F),ye===void 0)return;Ne=2}const Ce=F.drawRange,we=F.attributes.position;let nt=Ce.start*Ne,ot=(Ce.start+Ce.count)*Ne;se!==null&&(nt=Math.max(nt,se.start*Ne),ot=Math.min(ot,(se.start+se.count)*Ne)),ye!==null?(nt=Math.max(nt,0),ot=Math.min(ot,ye.count)):we!=null&&(nt=Math.max(nt,0),ot=Math.min(ot,we.count));const xt=ot-nt;if(xt<0||xt===1/0)return;rt.setup(U,O,be,F,ye);let an,Qe=_e;if(ye!==null&&(an=Y.get(ye),Qe=Ge,Qe.setIndex(an)),U.isMesh)O.wireframe===!0?(ke.setLineWidth(O.wireframeLinewidth*He()),Qe.setMode(R.LINES)):Qe.setMode(R.TRIANGLES);else if(U.isLine){let Me=O.linewidth;Me===void 0&&(Me=1),ke.setLineWidth(Me*He()),U.isLineSegments?Qe.setMode(R.LINES):U.isLineLoop?Qe.setMode(R.LINE_LOOP):Qe.setMode(R.LINE_STRIP)}else U.isPoints?Qe.setMode(R.POINTS):U.isSprite&&Qe.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,Rt=U._multiDrawCounts,Ze=U._multiDrawCount,Nn=ye?Y.get(ye).bytesPerElement:1,Dr=Le.get(O).currentProgram.getUniforms();for(let on=0;on<Ze;on++)Dr.setValue(R,"_gl_DrawID",on),Qe.render(Me[on]/Nn,Rt[on])}else if(U.isInstancedMesh)Qe.renderInstances(nt,xt,U.count);else if(F.isInstancedBufferGeometry){const Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Rt=Math.min(F.instanceCount,Me);Qe.renderInstances(nt,xt,Rt)}else Qe.render(nt,xt)};function Ke(E,L,F){E.transparent===!0&&E.side===li&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,za(E,L,F),E.side=Ki,E.needsUpdate=!0,za(E,L,F),E.side=li):za(E,L,F)}this.compile=function(E,L,F=null){F===null&&(F=E),m=Ye.get(F),m.init(L),v.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==F&&E.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const O=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const be=se[he];Ke(be,F,U),O.add(be)}else Ke(se,F,U),O.add(se)}),v.pop(),m=null,O},this.compileAsync=function(E,L,F=null){const O=this.compile(E,L,F);return new Promise(U=>{function se(){if(O.forEach(function(he){Le.get(he).currentProgram.isReady()&&O.delete(he)}),O.size===0){U(E);return}setTimeout(se,10)}Ve.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Yt=null;function Jn(E){Yt&&Yt(E)}function nf(){nr.stop()}function rf(){nr.start()}const nr=new u0;nr.setAnimationLoop(Jn),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(E){Yt=E,V.setAnimationLoop(E),E===null?nr.stop():nr.start()},V.addEventListener("sessionstart",nf),V.addEventListener("sessionend",rf),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,L,T),m=Ye.get(E,v.length),m.init(L),v.push(m),le.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),je.setFromProjectionMatrix(le),te=this.localClippingEnabled,G=re.init(this.clippingPlanes,te),y=ge.get(E,u.length),y.init(),u.push(y),V.enabled===!0&&V.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&ec(se,L,-1/0,_.sortObjects)}ec(E,L,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(D,q),tt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,tt&&Re.addToRenderList(y,E),this.info.render.frame++,G===!0&&re.beginShadows();const F=m.state.shadowsArray;ve.render(F,E,L),G===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=y.opaque,U=y.transmissive;if(m.setupLights(),L.isArrayCamera){const se=L.cameras;if(U.length>0)for(let he=0,be=se.length;he<be;he++){const ye=se[he];af(O,U,E,ye)}tt&&Re.render(E);for(let he=0,be=se.length;he<be;he++){const ye=se[he];sf(y,E,ye,ye.viewport)}}else U.length>0&&af(O,U,E,L),tt&&Re.render(E),sf(y,E,L);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(_,E,L),rt.resetDefaultState(),k=-1,W=null,v.pop(),v.length>0?(m=v[v.length-1],G===!0&&re.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function ec(E,L,F,O){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||je.intersectsSprite(E)){O&&Ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const he=$.update(E),be=E.material;be.visible&&y.push(E,he,be,F,Ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||je.intersectsObject(E))){const he=$.update(E),be=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ee.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ee.copy(he.boundingSphere.center)),Ee.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(be)){const ye=he.groups;for(let Ne=0,Ce=ye.length;Ne<Ce;Ne++){const we=ye[Ne],nt=be[we.materialIndex];nt&&nt.visible&&y.push(E,he,nt,F,Ee.z,we)}}else be.visible&&y.push(E,he,be,F,Ee.z,null)}}const se=E.children;for(let he=0,be=se.length;he<be;he++)ec(se[he],L,F,O)}function sf(E,L,F,O){const U=E.opaque,se=E.transmissive,he=E.transparent;m.setupLightsView(F),G===!0&&re.setGlobalState(_.clippingPlanes,F),O&&ke.viewport(b.copy(O)),U.length>0&&ja(U,L,F),se.length>0&&ja(se,L,F),he.length>0&&ja(he,L,F),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function af(E,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new Cr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Ia:bi,minFilter:br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=m.state.transmissionRenderTarget[O.id],he=O.viewport||b;se.setSize(he.z,he.w);const be=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(j),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),tt&&Re.render(F);const ye=_.toneMapping;_.toneMapping=qi;const Ne=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),G===!0&&re.setGlobalState(_.clippingPlanes,O),ja(E,F,O),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let we=0,nt=L.length;we<nt;we++){const ot=L[we],xt=ot.object,an=ot.geometry,Qe=ot.material,Me=ot.group;if(Qe.side===li&&xt.layers.test(O.layers)){const Rt=Qe.side;Qe.side=rn,Qe.needsUpdate=!0,of(xt,F,O,an,Qe,Me),Qe.side=Rt,Qe.needsUpdate=!0,Ce=!0}}Ce===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}_.setRenderTarget(be),_.setClearColor(j,X),Ne!==void 0&&(O.viewport=Ne),_.toneMapping=ye}function ja(E,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let U=0,se=E.length;U<se;U++){const he=E[U],be=he.object,ye=he.geometry,Ne=O===null?he.material:O,Ce=he.group;be.layers.test(F.layers)&&of(be,L,F,ye,Ne,Ce)}}function of(E,L,F,O,U,se){E.onBeforeRender(_,L,F,O,U,se),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(_,L,F,O,E,se),U.transparent===!0&&U.side===li&&U.forceSinglePass===!1?(U.side=rn,U.needsUpdate=!0,_.renderBufferDirect(F,L,O,U,E,se),U.side=Ki,U.needsUpdate=!0,_.renderBufferDirect(F,L,O,U,E,se),U.side=li):_.renderBufferDirect(F,L,O,U,E,se),E.onAfterRender(_,L,F,O,U,se)}function za(E,L,F){L.isScene!==!0&&(L=ze);const O=Le.get(E),U=m.state.lights,se=m.state.shadowsArray,he=U.state.version,be=Se.getParameters(E,U.state,se,L,F),ye=Se.getProgramCacheKey(be);let Ne=O.programs;O.environment=E.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(E.isMeshStandardMaterial?I:S).get(E.envMap||O.environment),O.envMapRotation=O.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",We),Ne=new Map,O.programs=Ne);let Ce=Ne.get(ye);if(Ce!==void 0){if(O.currentProgram===Ce&&O.lightsStateVersion===he)return cf(E,be),Ce}else be.uniforms=Se.getUniforms(E),E.onBeforeCompile(be,_),Ce=Se.acquireProgram(be,ye),Ne.set(ye,Ce),O.uniforms=be.uniforms;const we=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=re.uniform),cf(E,be),O.needsLights=S0(E),O.lightsStateVersion=he,O.needsLights&&(we.ambientLightColor.value=U.state.ambient,we.lightProbe.value=U.state.probe,we.directionalLights.value=U.state.directional,we.directionalLightShadows.value=U.state.directionalShadow,we.spotLights.value=U.state.spot,we.spotLightShadows.value=U.state.spotShadow,we.rectAreaLights.value=U.state.rectArea,we.ltc_1.value=U.state.rectAreaLTC1,we.ltc_2.value=U.state.rectAreaLTC2,we.pointLights.value=U.state.point,we.pointLightShadows.value=U.state.pointShadow,we.hemisphereLights.value=U.state.hemi,we.directionalShadowMap.value=U.state.directionalShadowMap,we.directionalShadowMatrix.value=U.state.directionalShadowMatrix,we.spotShadowMap.value=U.state.spotShadowMap,we.spotLightMatrix.value=U.state.spotLightMatrix,we.spotLightMap.value=U.state.spotLightMap,we.pointShadowMap.value=U.state.pointShadowMap,we.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Ce,O.uniformsList=null,Ce}function lf(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=Jo.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function cf(E,L){const F=Le.get(E);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function b0(E,L,F,O,U){L.isScene!==!0&&(L=ze),A.resetTextureUnits();const se=L.fog,he=O.isMeshStandardMaterial?L.environment:null,be=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:tr,ye=(O.isMeshStandardMaterial?I:S).get(O.envMap||he),Ne=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ce=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),we=!!F.morphAttributes.position,nt=!!F.morphAttributes.normal,ot=!!F.morphAttributes.color;let xt=qi;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=_.toneMapping);const an=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qe=an!==void 0?an.length:0,Me=Le.get(O),Rt=m.state.lights;if(G===!0&&(te===!0||E!==W)){const gn=E===W&&O.id===k;re.setState(O,E,gn)}let Ze=!1;O.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Rt.state.version||Me.outputColorSpace!==be||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==ye||O.fog===!0&&Me.fog!==se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==re.numPlanes||Me.numIntersection!==re.numIntersection)||Me.vertexAlphas!==Ne||Me.vertexTangents!==Ce||Me.morphTargets!==we||Me.morphNormals!==nt||Me.morphColors!==ot||Me.toneMapping!==xt||Me.morphTargetsCount!==Qe)&&(Ze=!0):(Ze=!0,Me.__version=O.version);let Nn=Me.currentProgram;Ze===!0&&(Nn=za(O,L,U));let Dr=!1,on=!1,tc=!1;const _t=Nn.getUniforms(),wi=Me.uniforms;if(ke.useProgram(Nn.program)&&(Dr=!0,on=!0,tc=!0),O.id!==k&&(k=O.id,on=!0),Dr||W!==E){$e.reverseDepthBuffer?(de.copy(E.projectionMatrix),SS(de),wS(de),_t.setValue(R,"projectionMatrix",de)):_t.setValue(R,"projectionMatrix",E.projectionMatrix),_t.setValue(R,"viewMatrix",E.matrixWorldInverse);const gn=_t.map.cameraPosition;gn!==void 0&&gn.setValue(R,Ae.setFromMatrixPosition(E.matrixWorld)),$e.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&_t.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,on=!0,tc=!0)}if(U.isSkinnedMesh){_t.setOptional(R,U,"bindMatrix"),_t.setOptional(R,U,"bindMatrixInverse");const gn=U.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),_t.setValue(R,"boneTexture",gn.boneTexture,A))}U.isBatchedMesh&&(_t.setOptional(R,U,"batchingTexture"),_t.setValue(R,"batchingTexture",U._matricesTexture,A),_t.setOptional(R,U,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",U._indirectTexture,A),_t.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",U._colorsTexture,A));const nc=F.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0)&&De.update(U,F,Nn),(on||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,_t.setValue(R,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(wi.envMap.value=ye,wi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(wi.envMapIntensity.value=L.environmentIntensity),on&&(_t.setValue(R,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&y0(wi,tc),se&&O.fog===!0&&ce.refreshFogUniforms(wi,se),ce.refreshMaterialUniforms(wi,O,Q,z,m.state.transmissionRenderTarget[E.id]),Jo.upload(R,lf(Me),wi,A)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Jo.upload(R,lf(Me),wi,A),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&_t.setValue(R,"center",U.center),_t.setValue(R,"modelViewMatrix",U.modelViewMatrix),_t.setValue(R,"normalMatrix",U.normalMatrix),_t.setValue(R,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const gn=O.uniformsGroups;for(let ic=0,w0=gn.length;ic<w0;ic++){const df=gn[ic];P.update(df,Nn),P.bind(df,Nn)}}return Nn}function y0(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function S0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,L,F){Le.get(E.texture).__webglTexture=L,Le.get(E.depthTexture).__webglTexture=F;const O=Le.get(E);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){const F=Le.get(E);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,F=0){T=E,C=L,N=F;let O=!0,U=null,se=!1,he=!1;if(E){const ye=Le.get(E);if(ye.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(R.FRAMEBUFFER,null),O=!1;else if(ye.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(ye.__hasExternalTextures)A.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(ye.__boundDepthTexture!==we){if(we!==null&&Le.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(he=!0);const Ce=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[L])?U=Ce[L][F]:U=Ce[L],se=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?U=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[F]:U=Ce,b.copy(E.viewport),M.copy(E.scissor),H=E.scissorTest}else b.copy(K).multiplyScalar(Q).floor(),M.copy(ee).multiplyScalar(Q).floor(),H=me;if(ke.bindFramebuffer(R.FRAMEBUFFER,U)&&O&&ke.drawBuffers(E,U),ke.viewport(b),ke.scissor(M),ke.setScissorTest(H),se){const ye=Le.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,F)}else if(he){const ye=Le.get(E.texture),Ne=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.__webglTexture,F||0,Ne)}k=-1},this.readRenderTargetPixels=function(E,L,F,O,U,se,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(be=be[he]),be){ke.bindFramebuffer(R.FRAMEBUFFER,be);try{const ye=E.texture,Ne=ye.format,Ce=ye.type;if(!$e.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-O&&F>=0&&F<=E.height-U&&R.readPixels(L,F,O,U,Ue.convert(Ne),Ue.convert(Ce),se)}finally{const ye=T!==null?Le.get(T).__webglFramebuffer:null;ke.bindFramebuffer(R.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,L,F,O,U,se,he){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(be=be[he]),be){const ye=E.texture,Ne=ye.format,Ce=ye.type;if(!$e.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-O&&F>=0&&F<=E.height-U){ke.bindFramebuffer(R.FRAMEBUFFER,be);const we=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.bufferData(R.PIXEL_PACK_BUFFER,se.byteLength,R.STREAM_READ),R.readPixels(L,F,O,U,Ue.convert(Ne),Ue.convert(Ce),0);const nt=T!==null?Le.get(T).__webglFramebuffer:null;ke.bindFramebuffer(R.FRAMEBUFFER,nt);const ot=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await yS(R,ot,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,se),R.deleteBuffer(we),R.deleteSync(ot),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,L=null,F=0){E.isTexture!==!0&&(Zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);const O=Math.pow(2,-F),U=Math.floor(E.image.width*O),se=Math.floor(E.image.height*O),he=L!==null?L.x:0,be=L!==null?L.y:0;A.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,he,be,U,se),ke.unbindTexture()},this.copyTextureToTexture=function(E,L,F=null,O=null,U=0){E.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1],L=arguments[2],U=arguments[3]||0,F=null);let se,he,be,ye,Ne,Ce;F!==null?(se=F.max.x-F.min.x,he=F.max.y-F.min.y,be=F.min.x,ye=F.min.y):(se=E.image.width,he=E.image.height,be=0,ye=0),O!==null?(Ne=O.x,Ce=O.y):(Ne=0,Ce=0);const we=Ue.convert(L.format),nt=Ue.convert(L.type);A.setTexture2D(L,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const ot=R.getParameter(R.UNPACK_ROW_LENGTH),xt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),an=R.getParameter(R.UNPACK_SKIP_PIXELS),Qe=R.getParameter(R.UNPACK_SKIP_ROWS),Me=R.getParameter(R.UNPACK_SKIP_IMAGES),Rt=E.isCompressedTexture?E.mipmaps[U]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,be),R.pixelStorei(R.UNPACK_SKIP_ROWS,ye),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,Ne,Ce,se,he,we,nt,Rt.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,Ne,Ce,Rt.width,Rt.height,we,Rt.data):R.texSubImage2D(R.TEXTURE_2D,U,Ne,Ce,se,he,we,nt,Rt),R.pixelStorei(R.UNPACK_ROW_LENGTH,ot),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,an),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Me),U===0&&L.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(E,L,F=null,O=null,U=0){E.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,E=arguments[2],L=arguments[3],U=arguments[4]||0);let se,he,be,ye,Ne,Ce,we,nt,ot;const xt=E.isCompressedTexture?E.mipmaps[U]:E.image;F!==null?(se=F.max.x-F.min.x,he=F.max.y-F.min.y,be=F.max.z-F.min.z,ye=F.min.x,Ne=F.min.y,Ce=F.min.z):(se=xt.width,he=xt.height,be=xt.depth,ye=0,Ne=0,Ce=0),O!==null?(we=O.x,nt=O.y,ot=O.z):(we=0,nt=0,ot=0);const an=Ue.convert(L.format),Qe=Ue.convert(L.type);let Me;if(L.isData3DTexture)A.setTexture3D(L,0),Me=R.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)A.setTexture2DArray(L,0),Me=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const Rt=R.getParameter(R.UNPACK_ROW_LENGTH),Ze=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Nn=R.getParameter(R.UNPACK_SKIP_PIXELS),Dr=R.getParameter(R.UNPACK_SKIP_ROWS),on=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,xt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ne),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ce),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Me,U,we,nt,ot,se,he,be,an,Qe,xt.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(Me,U,we,nt,ot,se,he,be,an,xt.data):R.texSubImage3D(Me,U,we,nt,ot,se,he,be,an,Qe,xt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ze),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Nn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Dr),R.pixelStorei(R.UNPACK_SKIP_IMAGES,on),U===0&&L.generateMipmaps&&R.generateMipmap(Me),ke.unbindTexture()},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ke.unbindTexture()},this.resetState=function(){C=0,N=0,T=null,ke.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zh?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Kl?"display-p3":"srgb"}}class tf{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=n,this.far=i}clone(){return new tf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class L2 extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class v0 extends Ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new B,Dl=new B,xm=new pt,Qs=new n0,No=new Ql,od=new B,gm=new B;class U2 extends Lt{constructor(e=new Si,n=new v0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Rl.fromBufferAttribute(n,r-1),Dl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Rl.distanceTo(Dl);e.setAttribute("lineDistance",new Qn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),No.radius+=s,e.ray.intersectsSphere(No)===!1)return;xm.copy(r).invert(),Qs.copy(e.ray).applyMatrix4(xm);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,d=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const x=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=x,m=g-1;y<m;y+=d){const u=h.getX(y),v=h.getX(y+1),_=Co(this,e,Qs,c,u,v);_&&n.push(_)}if(this.isLineLoop){const y=h.getX(g-1),m=h.getX(x),u=Co(this,e,Qs,c,y,m);u&&n.push(u)}}else{const x=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=x,m=g-1;y<m;y+=d){const u=Co(this,e,Qs,c,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=Co(this,e,Qs,c,g-1,x);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Co(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Rl.fromBufferAttribute(a,r),Dl.fromBufferAttribute(a,s),n.distanceSqToSegment(Rl,Dl,od,gm)>i)return;od.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(od);if(!(c<e.near||c>e.far))return{distance:c,point:gm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const vm=new B,_m=new B;class I2 extends U2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)vm.fromBufferAttribute(n,r),_m.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+vm.distanceTo(_m);e.setAttribute("lineDistance",new Qn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const ko=new B,Ro=new B,ld=new B,Do=new Sn;class B2 extends Si{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Qo*n),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,d=[0,0,0],h=["a","b","c"],p=new Array(3),f={},x=[];for(let g=0;g<c;g+=3){a?(d[0]=a.getX(g),d[1]=a.getX(g+1),d[2]=a.getX(g+2)):(d[0]=g,d[1]=g+1,d[2]=g+2);const{a:y,b:m,c:u}=Do;if(y.fromBufferAttribute(l,d[0]),m.fromBufferAttribute(l,d[1]),u.fromBufferAttribute(l,d[2]),Do.getNormal(ld),p[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let v=0;v<3;v++){const _=(v+1)%3,w=p[v],C=p[_],N=Do[h[v]],T=Do[h[_]],k=`${w}_${C}`,W=`${C}_${w}`;W in f&&f[W]?(ld.dot(f[W].normal)<=s&&(x.push(N.x,N.y,N.z),x.push(T.x,T.y,T.z)),f[W]=null):k in f||(f[k]={index0:d[v],index1:d[_],normal:ld.clone()})}}for(const g in f)if(f[g]){const{index0:y,index1:m}=f[g];ko.fromBufferAttribute(l,y),Ro.fromBufferAttribute(l,m),x.push(ko.x,ko.y,ko.z),x.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new Qn(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class F2 extends Ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qv,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _0 extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const cd=new pt,bm=new B,ym=new B;class O2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jh,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(bm),ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ym),n.updateMatrixWorld(),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class j2 extends O2{constructor(){super(new h0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sm extends _0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new j2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class z2 extends _0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class H2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=wm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function wm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);const V2=({activeTab:t,onTabChange:e,customImage:n})=>{const[i,r]=oe.useState("send"),s=t??i,a=k=>{r(k),e&&e(k)},[l,c]=oe.useState("phone"),[d,h]=oe.useState("25.00"),[p,f]=oe.useState("idle"),[x,g]=oe.useState(1250),[y,m]=oe.useState(!1),[u,v]=oe.useState(null),[_,w]=oe.useState([{id:"tx-1",type:"receive",title:"Nhận qua SĐT",subtitle:"Từ 0912 ••• 888",amount:"+50.00 USDC",time:"2 phút trước",signature:"5xK8...7mPq",fee:"~0.000005 SOL",status:"Finalized"},{id:"tx-2",type:"send",title:"Chuyển qua QR",subtitle:"Tới dev_merchant.sol",amount:"-15.00 USDC",time:"15 phút trước",signature:"3wP9...2jLk",fee:"~0.000005 SOL",status:"Finalized"},{id:"tx-3",type:"receive",title:"Faucet Devnet",subtitle:"Solana Devnet Airdrop",amount:"+1,000.00 USDC",time:"Hôm qua",signature:"4tNm...8vQq",fee:"0 SOL",status:"Finalized"}]),C=()=>{p==="idle"&&(f("processing"),setTimeout(()=>{const k=parseFloat(d)||25;g(b=>Math.max(0,b-k)),f("confirmed");const W={id:`tx-${Date.now()}`,type:"send",title:l==="phone"?"Chuyển qua SĐT":l==="qr"?"Chuyển qua QR":"Chuyển tới Ví",subtitle:l==="phone"?"Tới 0987 ••• 321":"Tới ned_friend.sol",amount:`-${k.toFixed(2)} USDC`,time:"Vừa xong",signature:`5tNx...${Math.random().toString(36).substring(2,6)}`,fee:"~0.000005 SOL",status:"Confirmed"};w(b=>[W,...b])},1400))},N=()=>{f("idle")},T=()=>{m(!0),setTimeout(()=>m(!1),2e3)};return n?o.jsx("img",{src:n,alt:"N.E.D Wallet App Interface",className:"w-full h-full object-cover rounded-[36px]"}):o.jsxs("div",{className:"w-full h-full bg-brand-warmCream text-brand-inkBlack flex flex-col p-3.5 sm:p-4 pb-2 select-none font-sans overflow-hidden relative",children:[o.jsxs("div",{className:"relative flex items-center justify-between text-[11px] font-extrabold text-stone-700 pb-2 border-b-2 border-brand-inkBlack/15 mb-2.5",children:[o.jsx("span",{className:"w-14 text-left font-black text-xs text-brand-inkBlack",children:"9:41"}),o.jsxs("div",{className:"h-5 px-3 bg-brand-inkBlack rounded-full flex items-center justify-center gap-1.5 shadow-sm border border-stone-800",children:[o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#111] border border-stone-700 flex items-center justify-center",children:o.jsx("span",{className:"w-0.5 h-0.5 rounded-full bg-blue-400"})}),o.jsx("span",{className:"text-[8px] font-black tracking-wider text-brand-lime uppercase",children:"Devnet"}),o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"})]}),o.jsxs("div",{className:"w-14 flex items-center justify-end gap-1.5",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime border border-brand-inkBlack"}),o.jsx("span",{className:"text-[9px] uppercase font-black bg-brand-deepPurple text-brand-offWhite px-1.5 py-0.5 rounded border border-brand-inkBlack shadow-brutal-xs",children:"SOL"})]})]}),o.jsxs("div",{className:"flex items-center justify-between mb-3.5",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center font-black text-xs shadow-brutal-xs",children:"N"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-[9px] uppercase tracking-wider font-extrabold text-stone-600",children:"Ví Devnet"}),o.jsx("div",{className:"text-xs font-black text-brand-inkBlack",children:"ned_user.sol"})]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("div",{className:"text-[9px] uppercase tracking-wider font-bold text-stone-500",children:"Số dư"}),o.jsxs("div",{className:"text-xs font-black text-brand-inkBlack",children:[x.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",o.jsx("span",{className:"text-[10px] text-brand-lavender font-extrabold",children:"USDC"})]})]})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-1.5 p-1 bg-white border-2 border-brand-inkBlack rounded-xl mb-3 shadow-brutal-xs",children:[o.jsxs("button",{type:"button",onClick:()=>a("send"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="send"?"bg-brand-lavender text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[o.jsx(Wo,{className:"w-3 h-3"}),o.jsx("span",{children:"Chuyển"})]}),o.jsxs("button",{type:"button",onClick:()=>a("receive"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="receive"?"bg-brand-cyan text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[o.jsx(ru,{className:"w-3 h-3"}),o.jsx("span",{children:"Nhận"})]}),o.jsxs("button",{type:"button",onClick:()=>a("track"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="track"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[o.jsx(fs,{className:"w-3 h-3"}),o.jsx("span",{children:"Lịch sử"})]})]}),o.jsxs("div",{className:"flex-1 flex flex-col justify-between overflow-hidden",children:[s==="send"&&o.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn",children:[p==="idle"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-3 shadow-brutal-sm mb-2.5",children:[o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5",children:"Phương thức nhận diện"}),o.jsxs("div",{className:"grid grid-cols-3 gap-1 bg-brand-warmCream p-1 rounded-xl border border-brand-inkBlack mb-2.5",children:[o.jsxs("button",{type:"button",onClick:()=>c("phone"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${l==="phone"?"bg-brand-lavender border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[o.jsx(ou,{className:"w-3 h-3"})," SĐT"]}),o.jsxs("button",{type:"button",onClick:()=>c("qr"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${l==="qr"?"bg-brand-cyan border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[o.jsx(yv,{className:"w-3 h-3"})," QR"]}),o.jsxs("button",{type:"button",onClick:()=>c("wallet"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${l==="wallet"?"bg-brand-lime border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[o.jsx(fs,{className:"w-3 h-3"})," Ví"]})]}),o.jsxs("div",{className:"bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2 mb-2",children:[o.jsx("div",{className:"text-[9px] font-extrabold uppercase text-stone-500",children:l==="phone"?"Người nhận (Số điện thoại)":l==="qr"?"Người nhận (Quét QR)":"Người nhận (Địa chỉ Solana)"}),o.jsx("div",{className:"text-xs font-black text-brand-inkBlack mt-0.5",children:l==="phone"?"0987 ••• 321":l==="qr"?"QR_SCAN_882.sol":"7xWp...9bM2"}),o.jsxs("div",{className:"text-[9px] font-bold text-emerald-700 flex items-center gap-1 mt-0.5",children:[o.jsx(In,{className:"w-2.5 h-2.5"})," Đã kết nối trên Devnet"]})]}),o.jsxs("div",{className:"bg-brand-offWhite border-2 border-brand-inkBlack rounded-xl p-2 text-center",children:[o.jsx("div",{className:"text-[9px] font-bold uppercase text-stone-500",children:"Số lượng chuyển"}),o.jsxs("div",{className:"text-xl font-black text-brand-inkBlack my-0.5",children:[d," ",o.jsx("span",{className:"text-xs font-extrabold text-brand-lavender",children:"USDC"})]}),o.jsx("div",{className:"flex items-center justify-center gap-1.5 mt-1",children:["10.00","25.00","50.00"].map(k=>o.jsx("button",{type:"button",onClick:()=>h(k),className:`px-2 py-0.5 text-[9px] font-black rounded border border-brand-inkBlack transition-all ${d===k?"bg-brand-lime shadow-brutal-xs -translate-y-0.5":"bg-white text-stone-600"}`,children:k},k))})]})]}),o.jsxs("div",{className:"bg-brand-lime border-2 border-brand-inkBlack rounded-xl p-2 shadow-brutal-xs flex items-center gap-2 mb-2",children:[o.jsx(El,{className:"w-4 h-4 flex-shrink-0 text-brand-inkBlack"}),o.jsx("div",{className:"text-[9px] font-black leading-tight text-brand-inkBlack",children:"Kiểm tra đúng thông tin người nhận trước khi xác thực"})]}),o.jsxs("button",{type:"button",onClick:C,className:"w-full py-2.5 bg-brand-inkBlack text-brand-offWhite font-black text-xs rounded-xl text-center border-2 border-brand-inkBlack shadow-brutal-sm hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer",children:[o.jsx(Wo,{className:"w-3.5 h-3.5 text-brand-lime"}),o.jsx("span",{children:"Xác nhận gửi Devnet USDC"})]})]}),p==="processing"&&o.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-5 shadow-brutal-sm flex-1 flex flex-col items-center justify-center text-center animate-fadeIn",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center mb-3 shadow-brutal-xs",children:o.jsx(vy,{className:"w-6 h-6 text-brand-inkBlack animate-spin"})}),o.jsx("div",{className:"text-xs font-black text-brand-inkBlack mb-1",children:"Đang phát sóng lên Solana Devnet..."}),o.jsx("div",{className:"text-[10px] text-stone-500 font-bold mb-4",children:"Xác thực chữ ký mã hóa & cập nhật số dư"}),o.jsx("div",{className:"w-full bg-brand-warmCream border-2 border-brand-inkBlack rounded-full h-3 overflow-hidden p-0.5",children:o.jsx("div",{className:"bg-brand-lime h-full rounded-full animate-progress"})})]}),p==="confirmed"&&o.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-4 shadow-brutal-sm flex-1 flex flex-col items-center justify-between text-center animate-slideUp",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center mx-auto mb-2 shadow-brutal-xs animate-pulseGlow",children:o.jsx(Ml,{className:"w-7 h-7 text-emerald-900 stroke-[3]"})}),o.jsx("div",{className:"text-sm font-black text-brand-inkBlack mb-0.5",children:"Giao dịch thành công!"}),o.jsxs("div",{className:"text-[10px] font-extrabold text-stone-600 mb-3",children:["Đã chuyển ",d," USDC trên Solana Devnet"]}),o.jsxs("div",{className:"bg-brand-warmCream border border-brand-inkBlack rounded-xl p-2 text-left text-[9px] font-bold space-y-1 mb-3",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Mã giao dịch:"}),o.jsx("span",{className:"font-mono font-bold",children:"5tNx...9aDev"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Thời gian xác thực:"}),o.jsx("span",{className:"text-emerald-700 font-extrabold",children:"0.6 giây"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Phí mạng:"}),o.jsx("span",{children:"~0.000005 SOL"})]})]})]}),o.jsxs("div",{className:"w-full flex gap-2",children:[o.jsxs("button",{type:"button",onClick:N,className:"flex-1 py-2 bg-brand-lavender text-brand-inkBlack font-black text-[11px] rounded-xl border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center gap-1",children:[o.jsx(Sy,{className:"w-3 h-3"}),o.jsx("span",{children:"Thử gửi lại"})]}),o.jsxs("button",{type:"button",onClick:()=>a("track"),className:"flex-1 py-2 bg-brand-lime text-brand-inkBlack font-black text-[11px] rounded-xl border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center gap-1",children:[o.jsx(fs,{className:"w-3 h-3"}),o.jsx("span",{children:"Xem lịch sử"})]})]})]})]}),s==="receive"&&o.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn",children:[o.jsxs("div",{className:"w-full bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 shadow-brutal-sm text-center flex flex-col items-center",children:[o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5",children:"Mã QR Nhận Stablecoin"}),o.jsxs("div",{className:"w-32 h-32 sm:w-36 sm:h-36 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl p-2.5 flex flex-col items-center justify-center relative shadow-brutal-xs my-1 overflow-hidden",children:[o.jsx("div",{className:"absolute left-0 right-0 h-1 bg-brand-cyan border-y border-brand-inkBlack shadow-[0_0_8px_#08CEE3] animate-scanLaser z-10 pointer-events-none"}),o.jsxs("div",{className:"grid grid-cols-6 gap-1 w-full h-full p-1 bg-white rounded-lg border border-brand-inkBlack",children:[o.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),o.jsx("div",{className:"bg-brand-lavender rounded"}),o.jsx("div",{className:"bg-brand-cyan rounded"}),o.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),o.jsx("div",{className:"bg-brand-lime rounded"}),o.jsx("div",{className:"bg-brand-inkBlack col-span-4 rounded"}),o.jsx("div",{className:"bg-brand-lavender rounded"}),o.jsx("div",{className:"bg-brand-cyan rounded"}),o.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),o.jsx("div",{className:"bg-brand-lime rounded"}),o.jsx("div",{className:"bg-brand-inkBlack rounded"}),o.jsx("div",{className:"bg-brand-lavender rounded"})]}),o.jsx("div",{className:"absolute w-6 h-6 rounded-lg bg-brand-deepPurple text-white flex items-center justify-center text-[9px] font-black border border-brand-inkBlack shadow-brutal-xs",children:"N"})]}),o.jsx("div",{className:"text-xs font-black mt-1",children:"ned_user.sol"}),o.jsx("div",{className:"text-[10px] font-bold text-stone-600",children:"SĐT liên kết: 0987 ••• 321"})]}),o.jsx("div",{className:"w-full bg-brand-paleYellow border-2 border-brand-inkBlack rounded-xl p-2 text-center text-[9px] font-black shadow-brutal-xs my-2",children:"Chấp nhận USDC trên mạng thử nghiệm Solana Devnet"}),o.jsx("button",{type:"button",onClick:T,className:`w-full py-2.5 rounded-xl font-black text-xs text-center border-2 border-brand-inkBlack shadow-brutal-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${y?"bg-brand-lime text-brand-inkBlack":"bg-brand-cyan text-brand-inkBlack"}`,children:y?o.jsxs(o.Fragment,{children:[o.jsx(Ml,{className:"w-3.5 h-3.5 text-emerald-800"}),o.jsx("span",{children:"Đã sao chép ned_user.sol!"})]}):o.jsxs(o.Fragment,{children:[o.jsx(av,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Sao chép mã nhận tiền"})]})})]}),s==="track"&&o.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn relative",children:[o.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-2.5 shadow-brutal-xs mb-2",children:[o.jsx("div",{className:"text-[9px] font-black uppercase text-stone-500",children:"Tổng số dư Devnet"}),o.jsxs("div",{className:"text-lg font-black text-brand-inkBlack my-0.5",children:[x.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",o.jsx("span",{className:"text-xs font-extrabold text-brand-lavender",children:"USDC"})]})]}),o.jsxs("div",{className:"flex-1 flex flex-col gap-1.5 overflow-y-auto pr-0.5 mb-2",children:[o.jsx("div",{className:"text-[9px] font-black uppercase tracking-wider text-stone-500",children:"Giao dịch gần đây (Bấm để xem chi tiết)"}),_.map(k=>o.jsxs("button",{type:"button",onClick:()=>v(k),className:"w-full text-left bg-brand-offWhite hover:bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2 flex items-center justify-between shadow-brutal-xs transition-transform active:scale-[0.98] cursor-pointer",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:`w-7 h-7 rounded-lg border border-brand-inkBlack flex items-center justify-center ${k.type==="receive"?"bg-brand-lime":"bg-brand-lavender"}`,children:k.type==="receive"?o.jsx(ru,{className:"w-3.5 h-3.5"}):o.jsx(Wo,{className:"w-3.5 h-3.5"})}),o.jsxs("div",{children:[o.jsx("div",{className:"text-[10px] font-black",children:k.title}),o.jsx("div",{className:"text-[8px] text-stone-500 font-bold",children:k.time})]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("div",{className:`text-[11px] font-black ${k.type==="receive"?"text-emerald-700":"text-brand-inkBlack"}`,children:k.amount}),o.jsxs("div",{className:"text-[8px] text-stone-500 font-bold flex items-center justify-end gap-0.5",children:[o.jsx("span",{children:"Devnet"}),o.jsx(Yg,{className:"w-2.5 h-2.5 text-stone-400"})]})]})]},k.id))]}),u&&o.jsxs("div",{className:"absolute inset-0 bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 flex flex-col justify-between shadow-brutal animate-slideUp z-20",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-brand-inkBlack/20 mb-2",children:[o.jsx("span",{className:"text-[10px] font-black uppercase text-stone-500",children:"Biên lai Devnet"}),o.jsx("button",{type:"button",onClick:()=>v(null),className:"p-1 rounded-md bg-stone-100 hover:bg-stone-200 border border-brand-inkBlack",children:o.jsx(Bv,{className:"w-3.5 h-3.5"})})]}),o.jsxs("div",{className:"text-center my-2",children:[o.jsx("div",{className:"text-base font-black",children:u.amount}),o.jsx("div",{className:"text-[10px] font-bold text-stone-600",children:u.title})]}),o.jsxs("div",{className:"space-y-1.5 text-[9px] font-bold bg-brand-warmCream p-2 rounded-xl border border-brand-inkBlack",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Chữ ký (Tx):"}),o.jsx("span",{className:"font-mono",children:u.signature})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Mạng:"}),o.jsx("span",{children:"Solana Devnet"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Trạng thái:"}),o.jsx("span",{className:"text-emerald-700 font-extrabold",children:u.status})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Phí mạng:"}),o.jsx("span",{children:u.fee})]})]})]}),o.jsx("button",{type:"button",onClick:()=>v(null),className:"w-full py-1.5 bg-brand-lavender text-brand-inkBlack font-black text-[10px] rounded-lg border border-brand-inkBlack shadow-brutal-xs",children:"Đóng biên lai"})]}),o.jsx("div",{className:"text-center text-[9px] font-bold text-stone-500 pt-1 border-t border-brand-inkBlack/15",children:"Giao dịch mô phỏng Devnet thời gian thực"})]})]}),o.jsx("div",{className:"pt-2 flex justify-center items-center pointer-events-none",children:o.jsx("div",{className:"w-28 h-1 bg-brand-inkBlack/30 rounded-full"})})]})},G2=({children:t,className:e="",maxTiltX:n=16,maxTiltY:i=20})=>{const r=oe.useRef(null),s=oe.useRef(null),a=oe.useRef(null);return oe.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let c=0,d=0,h=0,p=0,f=0,x=0,g=0,y=0,m=!1,u,v;const _=N=>{if(!s.current)return;m=!0,clearTimeout(u);const T=s.current.getBoundingClientRect(),k=T.left+T.width/2,W=T.top+T.height/2,b=Math.max(-1.5,Math.min(1.5,(N.clientX-k)/(window.innerWidth/2))),M=Math.max(-1.5,Math.min(1.5,(N.clientY-W)/(window.innerHeight/2)));d=b*i,c=-M*n,h=b*8,p=M*6,u=window.setTimeout(()=>{m=!1},2500)};window.addEventListener("mousemove",_,{passive:!0});let w=0;const C=()=>{if(v=requestAnimationFrame(C),w+=.02,!m){const N=Math.sin(w*1.2)*4,T=Math.cos(w*.9)*6;c=N,d=T,h=Math.sin(w*.8)*3,p=Math.cos(w*1.1)*4}if(f+=(c-f)*.08,x+=(d-x)*.08,g+=(h-g)*.08,y+=(p-y)*.08,s.current){s.current.style.transform=`
          perspective(1200px)
          translate3d(${g.toFixed(2)}px, ${y.toFixed(2)}px, 0px)
          rotateX(${f.toFixed(2)}deg)
          rotateY(${x.toFixed(2)}deg)
        `;const N=(g*-.6).toFixed(1),T=(26+y*.5).toFixed(1);s.current.style.boxShadow=`
          ${N}px ${T}px 32px -4px rgba(0, 0, 0, 0.7),
          0px 8px 16px -2px rgba(0, 0, 0, 0.4)
        `}if(a.current){const N=(-g*1.5).toFixed(1),T=(1+Math.abs(x)*.015).toFixed(2),k=(1-Math.abs(f)*.02).toFixed(2),W=Math.max(.3,Math.min(.7,.55-y*.02)).toFixed(2);a.current.style.transform=`
          translateX(${N}px)
          scale(${T}, ${k})
        `,a.current.style.opacity=W}};return C(),()=>{window.removeEventListener("mousemove",_),clearTimeout(u),cancelAnimationFrame(v)}},[n,i]),o.jsxs("div",{ref:r,className:`relative flex items-center justify-center [perspective:1200px] ${e}`,children:[o.jsx("div",{ref:a,className:"absolute -bottom-8 w-[82%] h-12 bg-black/60 rounded-[100%] blur-2xl pointer-events-none transition-transform duration-75 will-change-transform z-0","aria-hidden":"true"}),o.jsx("div",{ref:s,className:"relative w-full h-full will-change-transform [transform-style:preserve-3d] transition-[shadow] duration-75 rounded-[48px] z-10",children:t})]})},W2=()=>{const{t}=xn(),e=oe.useRef(null),n=oe.useRef(null),[i,r]=oe.useState(!0),[s,a]=oe.useState("sim"),[l,c]=oe.useState(0),d=[{id:"home",label:"Trang chủ",title:"Ví N.E.D - Màn hình chính",src:Te.screenshots.dashboardHome},{id:"transfer",label:"Chuyển tiền",title:"Trung tâm chuyển tiền",src:Te.screenshots.transferCenter},{id:"lucky",label:"Tung đồng xu",title:"Phòng Lì Xì Tung Đồng Xu",src:Te.screenshots.luckyCoin},{id:"split",label:"Shake & Split",title:"Lắc chia tiền",src:Te.screenshots.shakeSplit}];oe.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(!1);return}const x=n.current;if(!x)return;let g,y,m,u;const v=[],_=[],w=[];try{g=new L2;const C=x.clientWidth||window.innerWidth,N=x.clientHeight||750;y=new yn(45,C/N,.1,100),y.position.set(0,0,16),m=new P2({alpha:!0,antialias:!0,powerPreference:"high-performance"}),m.setSize(C,N),m.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),x.appendChild(m.domElement),g.fog=new tf(919077,12,32);const T=new z2(16777215,1.6);g.add(T);const k=new Sm(11835376,1.8);k.position.set(10,15,10),g.add(k);const W=new Sm(577251,1.3);W.position.set(-10,-10,8),g.add(W);const b=[11835376,14024448,577251,16774054,2956116,15789021],M=new v0({color:1118481,transparent:!0,opacity:.65});w.push(M);const H=65;for(let ee=0;ee<H;ee++){const me=.5+Math.random()*.75,je=.5+Math.random()*.75,G=.5+Math.random()*.75,te=new Us(me,je,G);_.push(te);const de=b[ee%b.length],le=new F2({color:de,roughness:.4,metalness:.08,transparent:!0,opacity:.72});w.push(le);const Ae=new qn(te,le),Ee=new B2(te);_.push(Ee);const ze=new I2(Ee,M);Ae.add(ze);const He=-16+ee/H*32+(Math.random()-.5)*4,R=-7+Math.random()*14,Ht=-6+Math.random()*10;Ae.position.set(He,R,Ht),Ae.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),g.add(Ae),v.push({mesh:Ae,rotSpeedX:(Math.random()-.5)*.014,rotSpeedY:(Math.random()-.5)*.016,rotSpeedZ:(Math.random()-.5)*.012,floatSpeed:.7+Math.random()*1.3,floatAmplitude:.25+Math.random()*.45,initialY:R})}let j=0,X=0,Z=0,z=0;const Q=ee=>{j=ee.clientX/window.innerWidth*2-1,X=-(ee.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",Q);const D=()=>{if(!x)return;const ee=x.clientWidth,me=x.clientHeight;y.aspect=ee/me,y.updateProjectionMatrix(),m.setSize(ee,me)};window.addEventListener("resize",D);const q=new H2,K=()=>{u=requestAnimationFrame(K);const ee=q.getElapsedTime();Z+=(j*.8-Z)*.04,z+=(X*.5-z)*.04,y.position.x=Z,y.position.y=z,y.lookAt(0,0,0),v.forEach(me=>{me.mesh.rotation.x+=me.rotSpeedX,me.mesh.rotation.y+=me.rotSpeedY,me.mesh.rotation.z+=me.rotSpeedZ,me.mesh.position.y=me.initialY+Math.sin(ee*me.floatSpeed)*me.floatAmplitude}),m.render(g,y)};return K(),()=>{cancelAnimationFrame(u),window.removeEventListener("mousemove",Q),window.removeEventListener("resize",D),x.contains(m.domElement)&&x.removeChild(m.domElement),m.dispose(),_.forEach(ee=>ee.dispose()),w.forEach(ee=>ee.dispose())}}catch{r(!1)}},[]);const h=f=>{f.preventDefault();const x=document.querySelector("#demo");x&&x.scrollIntoView({behavior:"smooth",block:"start"})},p=f=>{f.preventDefault();const x=document.querySelector("#experience");x&&x.scrollIntoView({behavior:"smooth",block:"start"})};return o.jsxs("section",{ref:e,className:"relative w-full min-h-[720px] bg-brand-deepPurple text-brand-offWhite pt-10 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack overflow-hidden flex items-center",children:[i&&o.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden","aria-hidden":"true"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-brand-deepPurple/80 via-brand-deepPurple/40 to-transparent pointer-events-none z-0","aria-hidden":"true"}),o.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none z-0",style:{backgroundImage:`
            linear-gradient(to right, #B497F0 1px, transparent 1px),
            linear-gradient(to bottom, #B497F0 1px, transparent 1px)
          `,backgroundSize:"48px 48px"}}),o.jsxs("div",{className:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10",children:[o.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start text-left",children:[o.jsx(Fe,{animation:"fade-up",delay:40,children:o.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-offWhite mb-5 shadow-brutal-xs",children:[o.jsx("img",{src:Te.mascots.waving,alt:"NED Teddy",className:"w-7 h-7 object-contain flex-shrink-0 -my-1"}),o.jsx("span",{className:"text-xs font-black tracking-wide text-brand-lavender",children:"N.E.D Teddy"}),o.jsx("span",{className:"text-stone-400 text-xs",children:"•"}),o.jsx("span",{className:"text-xs font-bold text-stone-200",children:t.mascot.heroCompanion})]})}),o.jsx(Fe,{animation:"fade-up",delay:80,children:o.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-offWhite tracking-tight leading-[1.08] mb-6 whitespace-pre-line",children:t.hero.headline})}),o.jsx(Fe,{animation:"fade-up",delay:160,children:o.jsx("p",{className:"text-base sm:text-lg lg:text-xl text-stone-300 font-medium max-w-2xl leading-relaxed mb-8",children:t.hero.description})}),o.jsx(Fe,{animation:"fade-up",delay:240,children:o.jsxs("div",{className:"w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4",children:[o.jsxs("button",{type:"button",onClick:h,className:"btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer",children:[o.jsx("span",{children:t.hero.ctaPrimary}),o.jsx(vi,{className:"w-5 h-5"})]}),o.jsxs("button",{type:"button",onClick:p,className:"btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer",children:[o.jsx("span",{children:t.hero.ctaSecondary}),o.jsx(Yg,{className:"w-5 h-5"})]})]})}),o.jsx(Fe,{animation:"fade-up",delay:320,className:"w-full",children:o.jsxs("div",{className:"mt-10 pt-6 border-t-2 border-brand-lavender/20 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs font-bold text-stone-300",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(_i,{className:"w-4 h-4 text-brand-lime flex-shrink-0"}),o.jsx("span",{children:t.hero.trustPill1})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Av,{className:"w-4 h-4 text-brand-cyan flex-shrink-0"}),o.jsx("span",{children:t.hero.trustPill2})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(my,{className:"w-4 h-4 text-brand-lavender flex-shrink-0"}),o.jsx("span",{children:t.hero.trustPill3})]})]})})]}),o.jsx("div",{className:"lg:col-span-5 flex flex-col items-center justify-center relative",children:o.jsxs(Fe,{animation:"pop",delay:180,children:[o.jsxs("div",{className:"absolute bottom-24 -right-6 sm:-right-12 z-40 flex flex-col items-center gap-1.5 pointer-events-none animate-floatBob",children:[o.jsx("div",{className:"bg-brand-paleYellow text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl px-3 py-1.5 shadow-brutal-xs text-xs font-black flex items-center gap-1 whitespace-nowrap",children:o.jsx("span",{children:"Chào bạn! Mình là Teddy 💜"})}),o.jsx("img",{src:Te.mascots.waving,alt:"NED Teddy Waving Mascot",className:"w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]",loading:"eager"})]}),o.jsx(G2,{className:"w-[310px] xs:w-[330px] sm:w-[350px] h-[640px] sm:h-[670px]",children:o.jsxs("div",{className:"relative w-full h-full rounded-[48px] bg-brand-inkBlack border-4 border-brand-inkBlack p-2.5 sm:p-3 [transform-style:preserve-3d] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]",children:[o.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center bg-brand-inkBlack/90 border border-brand-lavender/30 rounded-full p-0.5 shadow-brutal-xs",children:[o.jsx("button",{type:"button",onClick:()=>a("sim"),className:`px-2.5 py-0.5 rounded-full text-[10px] font-black transition-all cursor-pointer ${s==="sim"?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs":"text-stone-300 hover:text-white"}`,children:"Bấm thử (Sim)"}),o.jsx("button",{type:"button",onClick:()=>a("real"),className:`px-2.5 py-0.5 rounded-full text-[10px] font-black transition-all cursor-pointer ${s==="real"?"bg-brand-cyan text-brand-inkBlack shadow-brutal-xs":"text-stone-300 hover:text-white"}`,children:"Giao diện thật"})]}),o.jsx("div",{className:"relative w-full h-full rounded-[36px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream",children:s==="sim"?o.jsx(V2,{activeTab:"send"}):o.jsxs("div",{className:"w-full h-full flex flex-col justify-between bg-[#0e0625] text-white pt-10 select-none",children:[o.jsx("div",{className:"relative flex-1 overflow-hidden",children:o.jsx("img",{src:d[l].src,alt:d[l].title,className:"w-full h-full object-cover object-top"})}),o.jsx("div",{className:"p-2.5 bg-brand-inkBlack/95 border-t-2 border-brand-inkBlack flex items-center justify-between gap-1 z-20",children:d.map((f,x)=>o.jsx("button",{type:"button",onClick:()=>c(x),className:`flex-1 py-1 px-1 rounded-lg text-[9px] font-black border transition-all truncate cursor-pointer ${l===x?"bg-brand-lavender text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs":"bg-brand-darkSurface text-stone-300 border-stone-700 hover:bg-stone-800"}`,children:f.label},f.id))})]})}),o.jsx("div",{className:"absolute -top-3.5 right-2 sm:right-4 pointer-events-none z-30 [transform:translateZ(28px)]",children:o.jsxs("div",{className:"bg-brand-lime text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3 sm:px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5 animate-floatBob",children:[o.jsx(_i,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Solana Devnet"})]})}),o.jsx("div",{className:"absolute -bottom-3.5 left-2 sm:left-4 pointer-events-none z-30 [transform:translateZ(28px)]",children:o.jsx("div",{className:"bg-brand-cyan text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3 sm:px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5",children:o.jsx("span",{children:s==="sim"?"Bấm trực tiếp để thử nghiệm":"Màn hình ứng dụng thực tế"})})})]})})]})})]})]})},X2=()=>{const{t}=xn(),e=oe.useRef(null),[n,i]=oe.useState(!1),r=oe.useRef(0),s=oe.useRef(0),a=[{id:"northaxis",name:"NorthAxis",logoSrc:"/partners/northaxis.png",tag:"Partner"},{id:"unihackfest",name:"UniHackfest",logoSrc:"/partners/unihackfest.png",tag:"Hackathon"},{id:"vanlang",name:"Van Lang University",logoSrc:"/partners/vanlang.png",tag:"Academic"},{id:"solana",name:"Solana Devnet",isCustomSvg:!0,tag:"Blockchain"},{id:"expo",name:"Expo Mobile",isCustomSvg:!0,tag:"Platform"}],l=[...a,...a,...a,...a,...a,...a];oe.useEffect(()=>{let g=0,y=0,m;const u=()=>{g=window.scrollY*1.15+s.current};window.addEventListener("scroll",u,{passive:!0}),g=window.scrollY*1.15+s.current,y=g;const v=()=>{if(m=requestAnimationFrame(v),y+=(g-y)*.08,e.current){const _=e.current.scrollWidth,w=_>0?_/6:1350,C=(y%w+w)%w;e.current.style.transform=`translate3d(${-C.toFixed(2)}px, 0px, 0px)`}};return v(),()=>{window.removeEventListener("scroll",u),cancelAnimationFrame(m)}},[]);const c=g=>{i(!0),r.current=g.clientX},d=g=>{if(!n)return;const y=g.clientX-r.current;s.current-=y*1.8,r.current=g.clientX},h=()=>{i(!1)},p=g=>{i(!0),r.current=g.touches[0].clientX},f=g=>{if(!n)return;const y=g.touches[0].clientX-r.current;s.current-=y*1.8,r.current=g.touches[0].clientX},x=()=>{i(!1)};return o.jsxs("section",{className:"relative w-full bg-brand-lime text-brand-inkBlack py-7 sm:py-9 border-b-4 border-brand-inkBlack overflow-hidden z-20 select-none",children:[o.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none",style:{backgroundImage:`repeating-linear-gradient(
            -45deg,
            #111111,
            #111111 12px,
            transparent 12px,
            transparent 24px
          )`}}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4",children:o.jsx(Fe,{animation:"fade-up",delay:0,children:o.jsx("div",{className:"flex items-center justify-start",children:o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-inkBlack text-brand-offWhite font-black text-xs uppercase tracking-wider shadow-brutal-xs",children:[o.jsx(_i,{className:"w-3.5 h-3.5 text-brand-lime animate-spin",style:{animationDuration:"6s"}}),o.jsx("span",{children:t.marquee.tag})]})})})}),o.jsx(Fe,{animation:"pop",delay:100,children:o.jsx("div",{className:"relative w-full overflow-hidden py-2 cursor-grab active:cursor-grabbing",onMouseDown:c,onMouseMove:d,onMouseUp:h,onMouseLeave:h,onTouchStart:p,onTouchMove:f,onTouchEnd:x,children:o.jsx("div",{ref:e,className:"flex items-center gap-4 sm:gap-6 will-change-transform",style:{width:"max-content"},children:l.map((g,y)=>o.jsx("div",{className:"bg-white border-3 border-brand-inkBlack rounded-2xl px-6 py-3 shadow-brutal flex items-center justify-center gap-3 min-w-[220px] sm:min-w-[260px] h-[80px] sm:h-[88px] transition-all hover:-translate-y-1 hover:shadow-brutal-lg select-none group flex-shrink-0",children:g.logoSrc?o.jsx("div",{className:"w-full h-full flex items-center justify-center",children:o.jsx("img",{src:g.logoSrc,alt:g.name,className:"max-h-11 sm:max-h-13 max-w-[180px] sm:max-w-[210px] object-contain transition-transform group-hover:scale-105 pointer-events-none",loading:"lazy"})}):g.id==="solana"?o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-deepPurple text-white flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-5 h-5 text-brand-cyan",children:[o.jsx("path",{d:"M4.5 17.5H16.5L19.5 14.5H7.5L4.5 17.5Z",fill:"currentColor"}),o.jsx("path",{d:"M4.5 6.5H16.5L19.5 9.5H7.5L4.5 6.5Z",fill:"currentColor"}),o.jsx("path",{d:"M7.5 10.5H19.5L16.5 13.5H4.5L7.5 10.5Z",fill:"currentColor"})]})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack leading-tight",children:"SOLANA"}),o.jsx("div",{className:"text-[10px] font-extrabold text-stone-500 uppercase",children:"Devnet Network"})]})]}):o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx("span",{className:"text-sm font-black",children:"E"})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack leading-tight",children:"EXPO"}),o.jsx("div",{className:"text-[10px] font-extrabold text-stone-500 uppercase",children:"Mobile Preview"})]})]})},`${g.id}-${y}`))})})})]})},q2=()=>{const{t,lang:e}=xn(),n=[{id:"receive",title:t.coreActions.receiveTitle,subtitle:e==="vi"?"SĐT, QR Code & Lì Xì":"Phone, QR Code & Lucky Coin",desc:e==="vi"?"Nhận USDC/SOL tức thì qua số điện thoại cá nhân, mã QR tĩnh hoặc tham gia phòng nhận Lì Xì may mắn on-chain.":"Instantly receive USDC/SOL via your phone number, static QR code, or join on-chain lucky coin giveaway rooms.",icon:ru,colorBg:"bg-brand-lavender",iconColor:"text-brand-inkBlack",mascot:Te.mascots.happy,mascotAlt:"Teddy Happy",stepNum:"01",tag:e==="vi"?"Nhận tức thì":"Instant Receive"},{id:"send",title:t.coreActions.sendTitle,subtitle:"Gasless & Shake to Split",desc:e==="vi"?"Chuyển tiền miễn phí Gas qua N.E.D Relayer. Trải nghiệm tính năng Shake & Split: Lắc máy chia đều hóa đơn nhóm trong 3 giây.":"Gas-free transfers powered by N.E.D Relayer. Experience Shake & Split: Shake devices to split bills in 3 seconds.",icon:Wo,colorBg:"bg-brand-lime",iconColor:"text-brand-inkBlack",mascot:Te.mascots.exciting,mascotAlt:"Teddy Exciting",stepNum:"02",tag:e==="vi"?"Miễn phí Gas":"Zero Gas"},{id:"track",title:t.coreActions.trackTitle,subtitle:e==="vi"?"Quản lý dòng tiền":"Cashflow Analytics",desc:e==="vi"?"Theo dõi số dư USDC thời gian thực, trực quan hóa biểu đồ thu vào / chi tiêu và thiết lập hạn mức ngân sách tháng thông minh.":"Real-time USDC balance tracking, visual monthly cashflow charts, and intelligent spending budget limits.",icon:yy,colorBg:"bg-brand-cyan",iconColor:"text-brand-inkBlack",mascot:Te.mascots.proud,mascotAlt:"Teddy Proud",stepNum:"03",tag:e==="vi"?"Minh bạch 100%":"100% Transparent"}];return o.jsx("section",{id:"experience",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs(Fe,{animation:"fade-up",delay:0,children:[o.jsxs("div",{className:"flex items-center justify-between mb-8 pb-4 border-b-2 border-brand-inkBlack/15",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase tracking-wider shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime border border-brand-inkBlack"}),o.jsx("span",{children:t.coreActions.badge})]}),o.jsx("div",{className:"text-xs font-bold text-stone-600 hidden sm:block",children:t.coreActions.headline})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",children:n.map(i=>{const r=i.icon;return o.jsxs("div",{className:"bg-white border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between relative overflow-hidden group",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-5",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:`w-12 h-12 rounded-2xl ${i.colorBg} border-2 border-brand-inkBlack flex items-center justify-center shadow-brutal-xs flex-shrink-0`,children:o.jsx(r,{className:`w-6 h-6 ${i.iconColor} stroke-[2.5]`})}),o.jsxs("div",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-100 border border-brand-inkBlack text-[10px] font-black uppercase text-stone-700",children:[o.jsx(_i,{className:"w-3 h-3 text-brand-deepPurple"}),o.jsx("span",{children:i.tag})]})]}),o.jsx("div",{className:"w-12 h-12 rounded-full bg-brand-warmCream border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform",children:o.jsx("img",{src:i.mascot,alt:i.mascotAlt,className:"w-10 h-10 object-contain"})})]}),o.jsxs("div",{className:"mb-2",children:[o.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-brand-inkBlack tracking-tight",children:i.title}),o.jsx("div",{className:"text-xs font-extrabold uppercase text-brand-deepPurple tracking-wider mt-0.5",children:i.subtitle})]}),o.jsx("p",{className:"text-sm sm:text-base font-medium text-stone-700 leading-relaxed mt-3",children:i.desc})]}),o.jsxs("div",{className:"mt-6 pt-4 border-t border-brand-inkBlack/10 flex items-center justify-between text-xs font-black text-stone-500",children:[o.jsxs("span",{className:"uppercase tracking-wider",children:["Bước ",i.stepNum]}),o.jsx("span",{className:"text-[11px] text-brand-inkBlack font-bold",children:"N.E.D Ecosystem"})]})]},i.id)})})]})})})},$2=()=>{const{t,lang:e}=xn(),[n,i]=oe.useState("real"),[r,s]=oe.useState("shake"),[a,l]=oe.useState(1),[c,d]=oe.useState("phone"),[h,p]=oe.useState("25.00"),f={shake:{title:e==="vi"?"Lắc Điện Thoại Chia Tiền (Shake & Split)":"Shake & Split",desc:e==="vi"?"Lắc máy cùng bạn bè xung quanh để tự động nhận diện và chia đều hóa đơn on-chain.":"Shake phones together to automatically detect nearby devices and split group bills on-chain.",src:Te.screenshots.shakeSplit,badge:"Chỉ có trên N.E.D"},coin:{title:e==="vi"?"Phòng Lì Xì Tung Đồng Xu":"Lucky Coin Room",desc:e==="vi"?"Khởi tạo phòng chơi, vuốt tung đồng xu may mắn để chọn người nhận SOL/USDC trực tiếp on-chain.":"Create a room and swipe up to flip a lucky coin on-chain for giveaways and gifts.",src:Te.screenshots.luckyCoin,badge:"Độc quyền Solana"},phone:{title:e==="vi"?"Chuyển Tiền Bằng Số Điện Thoại":"Send by Phone Number",desc:e==="vi"?"Chuyển SOL/USDC trực tiếp tới người nhận qua số điện thoại liên kết, không cần nhớ địa chỉ ví dài.":"Transfer SOL/USDC directly using linked phone numbers without needing long public keys.",src:Te.screenshots.transferPhone,badge:"Nhanh 1-Chạm"},hub:{title:e==="vi"?"Trung Tâm Chuyển Tiền":"Transfer Hub",desc:e==="vi"?"Toàn bộ các phương thức chuyển và tương tác nhóm được sắp xếp gọn gàng trong một màn hình.":"All transfer and group interactive methods neatly organized on a single screen.",src:Te.screenshots.transferCenter,badge:"Tổng hợp"}},x={phone:{label:"0987 ••• 321",note:"Số điện thoại trong danh bạ"},qr:{label:"merchant_coffee.sol",note:"Mã QR quét tại điểm nhận"},wallet:{label:"7xWp...9bM2",note:"Địa chỉ ví Solana Devnet"}};return o.jsx("section",{id:"send",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center",children:[o.jsx("div",{className:"lg:col-span-5 flex flex-col items-start",children:o.jsxs(Fe,{animation:"fade-up",delay:0,children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-inkBlack"}),o.jsx("span",{children:t.sendFeature.tag})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight leading-[1.1] mb-5",children:t.sendFeature.headline}),o.jsx("p",{className:"text-base sm:text-lg font-medium text-stone-700 leading-relaxed mb-6",children:t.sendFeature.description}),o.jsxs("div",{className:"space-y-3 w-full max-w-md mb-6",children:[o.jsxs("div",{onClick:()=>{i("real"),s("phone")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="phone"?"bg-brand-lavender/30 -translate-y-0.5":"hover:bg-stone-50"}`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:o.jsx(ou,{className:"w-4 h-4 text-brand-inkBlack"})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Chuyển Tiền Bằng Số Điện Thoại"}),o.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Chuyển SOL/USDC qua SĐT liên kết"})]})]}),o.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-lime border border-brand-inkBlack rounded-md",children:"1-Chạm"})]}),o.jsxs("div",{onClick:()=>{i("real"),s("shake")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="shake"?"bg-brand-cyan/30 -translate-y-0.5":"hover:bg-stone-50"}`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:o.jsx(My,{className:"w-4 h-4 text-brand-inkBlack"})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Lắc Điện Thoại Chia Tiền (Shake & Split)"}),o.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Lắc máy nhận diện bạn bè trong 20m"})]})]}),o.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-cyan border border-brand-inkBlack rounded-md",children:"Hot"})]}),o.jsxs("div",{onClick:()=>{i("real"),s("coin")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="coin"?"bg-brand-lime/30 -translate-y-0.5":"hover:bg-stone-50"}`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:o.jsx(py,{className:"w-4 h-4 text-brand-inkBlack"})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Phòng Lì Xì Tung Đồng Xu"}),o.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Tung đồng xu may mắn trực tiếp on-chain"})]})]}),o.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-paleYellow border border-brand-inkBlack rounded-md",children:"May mắn"})]}),o.jsxs("div",{onClick:()=>{i("real"),s("hub")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="hub"?"bg-brand-paleYellow/50 -translate-y-0.5":"hover:bg-stone-50"}`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-paleYellow border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:o.jsx(fs,{className:"w-4 h-4 text-brand-inkBlack"})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Trung Tâm Chuyển Tiền Tổng Hợp"}),o.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Tổng quan mọi phương thức chuyển"})]})]}),o.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-lavender border border-brand-inkBlack rounded-md",children:"Hub"})]})]}),o.jsxs("div",{className:"p-3.5 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal flex items-center gap-3.5 max-w-md",children:[o.jsx("img",{src:Te.mascots.exciting,alt:"Teddy Mascot Exciting",className:"w-14 h-14 object-contain flex-shrink-0 animate-bounce",style:{animationDuration:"2.5s"}}),o.jsxs("div",{children:[o.jsx("div",{className:"text-[11px] font-black uppercase text-brand-deepPurple tracking-wider",children:"Gợi ý từ NED Teddy"}),o.jsx("p",{className:"text-xs font-bold text-stone-800 leading-snug mt-0.5",children:t.sendFeature.mascotBubble})]})]})]})}),o.jsx("div",{className:"lg:col-span-7",children:o.jsx(Fe,{animation:"pop",delay:120,children:o.jsxs("div",{className:"bg-white border-4 border-brand-inkBlack rounded-3xl p-5 sm:p-7 shadow-brutal-xl",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-brand-inkBlack",children:[o.jsxs("div",{className:"inline-flex items-center bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[o.jsx("button",{type:"button",onClick:()=>i("real"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all cursor-pointer ${n==="real"?"bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs":"text-stone-700 hover:bg-stone-200"}`,children:"Màn hình ứng dụng thực tế"}),o.jsx("button",{type:"button",onClick:()=>i("interactive"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all cursor-pointer ${n==="interactive"?"bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs":"text-stone-700 hover:bg-stone-200"}`,children:"Mô phỏng thao tác"})]}),o.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lime border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase shadow-brutal-xs",children:[o.jsx(_i,{className:"w-3.5 h-3.5 text-brand-inkBlack"}),o.jsx("span",{children:"Solana Devnet"})]})]}),n==="real"&&o.jsxs("div",{className:"animate-appearance-smooth",children:[o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5",children:["shake","coin","phone","hub"].map(g=>o.jsx("button",{type:"button",onClick:()=>s(g),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack transition-all cursor-pointer text-center truncate ${r===g?"bg-brand-lavender text-brand-inkBlack shadow-brutal-xs -translate-y-0.5":"bg-brand-warmCream text-stone-700 hover:bg-stone-200"}`,children:t.sendFeature.showcaseTabs[g]},g))}),o.jsx("div",{className:"bg-brand-warmCream/60 border-3 border-brand-inkBlack rounded-2xl p-4 sm:p-5",children:o.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6",children:[o.jsx("div",{className:"w-[200px] xs:w-[220px] sm:w-[240px] flex-shrink-0 bg-brand-inkBlack border-3 border-brand-inkBlack rounded-[32px] p-2 shadow-brutal",children:o.jsx("div",{className:"w-full rounded-[24px] overflow-hidden border border-brand-inkBlack bg-white",children:o.jsx("img",{src:f[r].src,alt:f[r].title,className:"w-full h-auto object-contain max-h-[460px]",loading:"lazy"})})}),o.jsxs("div",{className:"flex-1 flex flex-col justify-between py-2 text-left",children:[o.jsxs("div",{children:[o.jsx("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-paleYellow border border-brand-inkBlack rounded-lg text-[11px] font-black uppercase text-stone-800 mb-2.5 shadow-brutal-xs",children:o.jsx("span",{children:f[r].badge})}),o.jsx("h3",{className:"text-xl sm:text-2xl font-black text-brand-inkBlack mb-2 leading-tight",children:f[r].title}),o.jsx("p",{className:"text-sm font-medium text-stone-700 leading-relaxed mb-4",children:f[r].desc}),o.jsxs("div",{className:"p-3 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-bold text-stone-700 shadow-brutal-xs",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1 text-brand-deepPurple font-black",children:[o.jsx(El,{className:"w-4 h-4"}),o.jsx("span",{children:"Bảo mật & Miễn phí phí Gas"})]}),o.jsx("p",{className:"text-[11px] text-stone-600",children:"Mọi giao dịch chia tiền và lì xì đều được thực thi bảo mật trên Solana, tài trợ 100% phí Gas qua N.E.D Relayer."})]})]}),o.jsxs("div",{className:"mt-5 pt-3 border-t border-brand-inkBlack/15 flex items-center justify-between text-[11px] font-black text-stone-500",children:[o.jsx("span",{children:"Ảnh ứng dụng gốc từ Expo"}),o.jsx("span",{className:"text-emerald-700",children:"✓ Đang hoạt động trên Devnet"})]})]})]})})]}),n==="interactive"&&o.jsxs("div",{className:"animate-appearance-smooth",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-brand-inkBlack/15",children:[o.jsx("span",{className:"text-xs font-black uppercase text-stone-500",children:"Thử nghiệm luồng chuyển"}),o.jsx("div",{className:"flex items-center gap-1.5",children:[1,2,3].map(g=>o.jsxs("button",{type:"button",onClick:()=>l(g),className:`px-3 py-1 rounded-lg text-xs font-black border-2 border-brand-inkBlack transition-all cursor-pointer ${a===g?"bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs -translate-y-0.5":"bg-brand-warmCream text-stone-700 hover:bg-stone-200"}`,children:["Bước ",g]},g))})]}),a===1&&o.jsxs("div",{className:"animate-appearance-smooth",children:[o.jsx("div",{className:"text-xs font-black uppercase text-stone-500 mb-2",children:t.sendFeature.step1Name}),o.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[o.jsxs("button",{type:"button",onClick:()=>d("phone"),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${c==="phone"?"bg-brand-lavender text-brand-inkBlack shadow-brutal-xs":"bg-brand-warmCream text-stone-700"}`,children:[o.jsx(ou,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"SĐT"})]}),o.jsxs("button",{type:"button",onClick:()=>d("qr"),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${c==="qr"?"bg-brand-cyan text-brand-inkBlack shadow-brutal-xs":"bg-brand-warmCream text-stone-700"}`,children:[o.jsx(yv,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Mã QR"})]}),o.jsxs("button",{type:"button",onClick:()=>d("wallet"),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${c==="wallet"?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs":"bg-brand-warmCream text-stone-700"}`,children:[o.jsx(fs,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Địa chỉ ví"})]})]}),o.jsxs("div",{className:"p-4 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl mb-5",children:[o.jsxs("div",{className:"text-xs font-bold text-stone-500 uppercase",children:[t.sendFeature.recipientLabel,":"]}),o.jsx("div",{className:"text-base sm:text-lg font-black text-brand-inkBlack mt-1",children:x[c].label}),o.jsx("div",{className:"text-xs text-stone-600 font-medium mt-0.5",children:x[c].note})]}),o.jsxs("button",{type:"button",onClick:()=>l(2),className:"btn-brutal-primary w-full py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2",children:[o.jsx("span",{children:"Tiếp tục sang nhập số tiền"}),o.jsx(vi,{className:"w-4 h-4"})]})]}),a===2&&o.jsxs("div",{className:"animate-appearance-smooth",children:[o.jsx("div",{className:"text-xs font-black uppercase text-stone-500 mb-2",children:t.sendFeature.step2Name}),o.jsxs("div",{className:"p-5 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl text-center mb-4",children:[o.jsx("div",{className:"text-xs font-bold text-stone-500 uppercase",children:t.sendFeature.amountLabel}),o.jsxs("div",{className:"text-3xl sm:text-4xl font-black text-brand-inkBlack my-2",children:[h," ",o.jsx("span",{className:"text-lg font-extrabold text-brand-deepPurple",children:"USDC"})]}),o.jsx("div",{className:"flex items-center justify-center gap-2 mt-3",children:["10.00","25.00","50.00"].map(g=>o.jsxs("button",{type:"button",onClick:()=>p(g),className:`px-3 py-1.5 rounded-xl border-2 border-brand-inkBlack font-black text-xs transition-all ${h===g?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs -translate-y-0.5":"bg-white text-stone-700 hover:bg-stone-100"}`,children:[g," USDC"]},g))})]}),o.jsxs("div",{className:"flex gap-3",children:[o.jsx("button",{type:"button",onClick:()=>l(1),className:"py-3 px-4 bg-brand-warmCream text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-black text-sm",children:"Quay lại"}),o.jsxs("button",{type:"button",onClick:()=>l(3),className:"btn-brutal-primary flex-1 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2",children:[o.jsx("span",{children:"Tiếp tục sang kiểm tra"}),o.jsx(vi,{className:"w-4 h-4"})]})]})]}),a===3&&o.jsxs("div",{className:"animate-appearance-smooth",children:[o.jsx("div",{className:"text-xs font-black uppercase text-stone-500 mb-2",children:t.sendFeature.step3Name}),o.jsxs("div",{className:"p-4 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl space-y-2 text-xs font-bold mb-4",children:[o.jsxs("div",{className:"flex justify-between pb-2 border-b border-brand-inkBlack/15",children:[o.jsx("span",{className:"text-stone-500",children:"Người nhận:"}),o.jsx("span",{className:"font-black text-brand-inkBlack",children:x[c].label})]}),o.jsxs("div",{className:"flex justify-between pb-2 border-b border-brand-inkBlack/15",children:[o.jsx("span",{className:"text-stone-500",children:"Số lượng:"}),o.jsxs("span",{className:"font-black text-brand-inkBlack",children:[h," USDC"]})]}),o.jsxs("div",{className:"flex justify-between pb-2 border-b border-brand-inkBlack/15",children:[o.jsx("span",{className:"text-stone-500",children:"Mạng thử nghiệm:"}),o.jsx("span",{className:"font-black text-brand-deepPurple",children:"Solana Devnet"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Phí mạng Devnet mẫu:"}),o.jsx("span",{className:"font-black text-emerald-800",children:"~0.000005 SOL (Được tài trợ)"})]})]}),o.jsxs("div",{className:"p-3 bg-brand-lime border-2 border-brand-inkBlack rounded-2xl flex items-center gap-2.5 mb-5 shadow-brutal-xs",children:[o.jsx(El,{className:"w-5 h-5 text-brand-inkBlack flex-shrink-0"}),o.jsx("div",{className:"text-xs font-black text-brand-inkBlack leading-tight",children:t.sendFeature.reviewNotice})]}),o.jsxs("div",{className:"flex gap-3",children:[o.jsx("button",{type:"button",onClick:()=>l(2),className:"py-3 px-4 bg-brand-warmCream text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-black text-sm",children:"Quay lại"}),o.jsxs("button",{type:"button",onClick:()=>l(1),className:"btn-brutal-cyan flex-1 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2",children:[o.jsx(Ml,{className:"w-4 h-4 text-brand-inkBlack"}),o.jsx("span",{children:"Thử lại từ đầu"})]})]})]})]}),o.jsx("div",{className:"mt-5 pt-3 border-t border-brand-inkBlack/10 text-[11px] font-bold text-stone-500 text-center",children:t.sendFeature.illustrationNotice})]})})})]})})})},Y2=()=>{const{t,lang:e}=xn(),[n,i]=oe.useState("home"),r={home:{title:e==="vi"?"Trang Chủ Ví (Dashboard)":"Home Dashboard",caption:e==="vi"?"Thẻ US Dollar, số dư USDC và các thao tác nhanh":"US Dollar card, USDC balance and instant actions",src:Te.screenshots.dashboardHome,badge:e==="vi"?"Trang chủ ví":"Wallet Home"},analytics:{title:e==="vi"?"Phân Tích Dòng Tiền":"Cashflow Analytics",caption:e==="vi"?"Biểu đồ thu chi, két tiết kiệm và hạn mức tháng":"Cashflow charts, savings vaults and monthly limits",src:Te.screenshots.analyticsCashflow,badge:e==="vi"?"Quản lý tài chính":"Financial Hub"}};return o.jsx("section",{id:"overview",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center",children:[o.jsx("div",{className:"lg:col-span-6 flex flex-col items-center",children:o.jsxs(Fe,{animation:"pop",delay:0,children:[o.jsxs("div",{className:"flex items-center gap-2 mb-4 bg-white border-2 border-brand-inkBlack p-1 rounded-2xl shadow-brutal-xs",children:[o.jsx("button",{type:"button",onClick:()=>i("home"),className:`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${n==="home"?"bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack shadow-brutal-xs":"text-stone-700 hover:bg-stone-100 border-2 border-transparent"}`,children:"Trang chủ ví"}),o.jsx("button",{type:"button",onClick:()=>i("analytics"),className:`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${n==="analytics"?"bg-brand-cyan text-brand-inkBlack border-2 border-brand-inkBlack shadow-brutal-xs":"text-stone-700 hover:bg-stone-100 border-2 border-transparent"}`,children:"Phân tích dòng tiền"})]}),o.jsx("div",{className:"bg-brand-inkBlack border-4 border-brand-inkBlack rounded-[40px] p-3 sm:p-4 shadow-brutal-xl max-w-xs sm:max-w-sm mx-auto",children:o.jsx("div",{className:"rounded-[28px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream shadow-inner",children:o.jsx("img",{src:r[n].src,alt:r[n].title,className:"w-full h-auto object-contain max-h-[540px] animate-appearance-smooth",loading:"lazy"})})}),o.jsx("div",{className:"mt-4 text-center",children:o.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase text-stone-700 shadow-brutal-xs",children:[o.jsx(gy,{className:"w-3.5 h-3.5 text-brand-deepPurple"}),o.jsx("span",{children:r[n].caption})]})})]})}),o.jsx("div",{className:"lg:col-span-6 flex flex-col items-start",children:o.jsxs(Fe,{animation:"fade-up",delay:120,children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-inkBlack"}),o.jsx("span",{children:t.assetOverview.tag})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight leading-[1.1] mb-5",children:t.assetOverview.headline}),o.jsx("p",{className:"text-base sm:text-lg font-medium text-stone-700 leading-relaxed mb-6",children:t.assetOverview.description}),o.jsxs("div",{className:"space-y-3.5 w-full mb-6",children:[o.jsx("div",{className:"p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-3.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:o.jsx(fs,{className:"w-5 h-5 text-brand-inkBlack"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-base sm:text-lg font-black text-brand-inkBlack mb-1",children:t.assetOverview.balanceCardTitle}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:t.assetOverview.balanceCardDesc})]})]})}),o.jsx("div",{className:"p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-3.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:o.jsx(tv,{className:"w-5 h-5 text-brand-inkBlack"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-base sm:text-lg font-black text-brand-inkBlack mb-1",children:t.assetOverview.recentCardTitle}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:t.assetOverview.recentCardDesc})]})]})}),o.jsx("div",{className:"p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-3.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:o.jsx(dy,{className:"w-5 h-5 text-brand-inkBlack"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-base sm:text-lg font-black text-brand-inkBlack mb-1",children:e==="vi"?"Hạn Mức & Két Tiết Kiệm":"Budget Limits & Vaults"}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:e==="vi"?"Thiết lập hạn mức chi tiêu $2,000/tháng và phân loại quỹ tiết kiệm sinh lời an toàn.":"Set smart $2,000 monthly spending limits and organize savings into secure vaults."})]})]})})]}),o.jsxs("div",{className:"w-full p-4 bg-brand-paleYellow border-3 border-brand-inkBlack rounded-2xl shadow-brutal flex items-center gap-4 mb-4",children:[o.jsx("img",{src:Te.mascots.proud,alt:"Teddy Mascot Proud",className:"w-14 h-14 object-contain flex-shrink-0"}),o.jsxs("div",{children:[o.jsxs("div",{className:"text-xs font-black uppercase text-brand-deepPurple tracking-wide flex items-center gap-1.5",children:[o.jsx(_i,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Teddy Đồng Hành Cùng Bạn"})]}),o.jsx("p",{className:"text-xs font-bold text-stone-800 leading-relaxed mt-1",children:e==="vi"?"N.E.D tự động phân loại mọi khoản thu, chi và chuyển tiền giúp bạn kiểm soát tài chính cá nhân như ứng dụng ngân hàng cao cấp.":"N.E.D automatically tracks and categorizes inflows, outflows, and transfers with banking-grade clarity."})]})]}),o.jsxs("div",{className:"flex items-start gap-2.5 p-3.5 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-bold text-stone-700 shadow-brutal-xs",children:[o.jsx(Qg,{className:"w-4 h-4 text-amber-800 flex-shrink-0 mt-0.5"}),o.jsx("span",{className:"leading-snug",children:t.assetOverview.disclaimerNotice})]})]})})]})})})},K2=()=>{const{t,lang:e}=xn(),[n,i]=oe.useState(!1),r=oe.useRef(null),[s,a]=oe.useState(!1),[l,c]=oe.useState(!0),d=oe.useRef(null),[h,p]=oe.useState(0),f=oe.useRef(null),[x,g]=oe.useState(!1);oe.useEffect(()=>{let b=!1;const M=()=>{b||(window.requestAnimationFrame(()=>{if(d.current){const H=d.current.getBoundingClientRect(),j=window.innerHeight,X=H.top+H.height/2,Z=j/2,z=Math.abs(X-Z),Q=Math.max(60,j*.12),D=Math.max(260,H.height*.45+j*.28);let q=1;z>Q&&(q=1-(z-Q)/D);const K=Math.max(0,Math.min(1,q));p(K);const ee=.75+.25*K;ee>=.99?r.current&&r.current.paused&&(r.current.play().catch(()=>{}),a(!0)):ee<=.85&&r.current&&!r.current.paused&&(r.current.pause(),a(!1))}b=!1}),b=!0)};return window.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",M,{passive:!0}),M(),()=>{window.removeEventListener("scroll",M),window.removeEventListener("resize",M)}},[]);const y=oe.useCallback(b=>{const M=b.currentTarget.getBoundingClientRect(),H=b.clientX-M.left,j=b.clientY-M.top;f.current&&(f.current.style.transform=`translate3d(${H}px, ${j}px, 0) translate(-50%, -50%)`)},[]),m=()=>{window.open(Te.demoVideo.url,"_blank","noopener,noreferrer")},u=oe.useCallback(b=>{if(b.stopPropagation(),r.current){const M=!r.current.muted;r.current.muted=M,c(M)}},[]),v=oe.useCallback(b=>{b.stopPropagation(),r.current&&(r.current.paused?(r.current.play().catch(()=>{}),a(!0)):(r.current.pause(),a(!1)))},[]),_=async()=>{var b;try{if((b=navigator==null?void 0:navigator.clipboard)!=null&&b.writeText){await navigator.clipboard.writeText(Te.contactEmail),i(!0),setTimeout(()=>i(!1),2500);return}}catch{}try{const M=document.createElement("textarea");M.value=Te.contactEmail,M.style.position="fixed",M.style.left="-999999px",M.style.top="-999999px",document.body.appendChild(M),M.focus(),M.select(),document.execCommand("copy"),document.body.removeChild(M),i(!0),setTimeout(()=>i(!1),2500)}catch{}},w=e==="vi"?Te.demoMailBodyVi:Te.demoMailBodyEn,C=`mailto:${Te.contactEmail}?subject=${encodeURIComponent(Te.demoMailSubject)}&body=${encodeURIComponent(w)}`,N=.75+.25*h,T=(1-h)*12,k=.6+.4*h,W=[{num:"01",title:t.demoGuide.step1Title,desc:t.demoGuide.step1Desc,color:"bg-brand-lavender",tag:"Không Seedphrase"},{num:"02",title:t.demoGuide.step2Title,desc:t.demoGuide.step2Desc,color:"bg-brand-lime",tag:"Shake & Split 20m"},{num:"03",title:t.demoGuide.step3Title,desc:t.demoGuide.step3Desc,color:"bg-brand-cyan",tag:"Định danh @tên.sol"}];return o.jsx("section",{id:"demo",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none overflow-hidden",children:o.jsxs("div",{className:"max-w-6xl mx-auto",children:[o.jsx(Fe,{animation:"fade-up",children:o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-10 sm:mb-14",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime border-2 border-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[o.jsx(_i,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:t.demoGuide.tag})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-4",children:t.demoGuide.headline}),o.jsx("p",{className:"text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6",children:t.demoGuide.subtitle}),o.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 bg-white border-2 border-brand-inkBlack rounded-2xl shadow-brutal-xs text-xs sm:text-sm font-bold text-stone-800",children:[o.jsx("img",{src:Te.mascots.curious,alt:"Teddy Curious",className:"w-8 h-8 object-contain drop-shadow"}),o.jsx("span",{children:t.mascot.demoTip})]})]})}),o.jsx("div",{ref:d,className:"relative w-full mb-14",children:o.jsx("div",{className:"w-full will-change-transform transition-all duration-150 ease-out origin-center",style:{transform:`scale(${N})`,filter:`blur(${T}px)`,opacity:k},children:o.jsxs("div",{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),onMouseMove:y,onClick:m,className:`relative w-full bg-brand-darkSurface border-4 border-brand-inkBlack rounded-3xl sm:rounded-[36px] overflow-hidden shadow-brutal-xl transition-all cursor-pointer ${x?"cursor-none":""}`,children:[o.jsxs("div",{className:"bg-brand-inkBlack px-4 sm:px-6 py-3 border-b-3 border-brand-inkBlack flex items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500 border border-brand-inkBlack inline-block"}),o.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-400 border border-brand-inkBlack inline-block"}),o.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-400 border border-brand-inkBlack inline-block"}),o.jsx("span",{className:"ml-2 text-xs font-black text-brand-lavender hidden sm:inline-block",children:t.demoGuide.videoBadge})]}),o.jsx("div",{className:"flex items-center gap-2",children:s?o.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-brand-lime text-brand-inkBlack font-black text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-600 animate-ping"}),o.jsx("span",{children:t.demoGuide.autoPlaying})]}):o.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-stone-700 text-stone-300 font-bold text-[10px] tracking-wider flex items-center gap-1",children:o.jsx("span",{children:t.demoGuide.paused})})}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{type:"button",onClick:u,className:`px-2.5 py-1 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer border ${l?"bg-stone-800 text-stone-300 hover:bg-stone-700 border-stone-600":"bg-brand-lime text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs"}`,title:l?"Bật âm thanh":"Tắt âm thanh",children:[l?o.jsx(Cy,{className:"w-3.5 h-3.5 text-stone-400"}):o.jsx(Ny,{className:"w-3.5 h-3.5"}),o.jsx("span",{className:"hidden sm:inline",children:l?t.demoGuide.muted:t.demoGuide.unmute})]}),o.jsx("button",{type:"button",onClick:v,className:"px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 border border-stone-600 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors",title:s?"Tạm dừng":"Phát",children:s?o.jsxs(o.Fragment,{children:[o.jsx(by,{className:"w-3.5 h-3.5"}),o.jsx("span",{className:"hidden sm:inline",children:"Tạm dừng"})]}):o.jsxs(o.Fragment,{children:[o.jsx(yp,{className:"w-3.5 h-3.5 fill-current"}),o.jsx("span",{className:"hidden sm:inline",children:"Phát"})]})})]})]}),o.jsxs("div",{className:"relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center",children:[o.jsxs("video",{ref:r,muted:!0,loop:!0,playsInline:!0,preload:"auto",poster:Te.demoVideo.thumbnail,className:"w-full h-full object-cover object-center bg-black",children:[o.jsx("source",{src:Te.demoVideo.localVideoAsset,type:"video/mp4"}),o.jsx("source",{src:Te.demoVideo.rawLocalVideoAsset,type:"video/mp4"})]}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"}),o.jsx("div",{ref:f,className:`pointer-events-none absolute left-0 top-0 z-40 will-change-transform transition-opacity duration-150 ${x?"opacity-100":"opacity-0"}`,style:{transform:"translate3d(-200px, -200px, 0) translate(-50%, -50%)"},children:o.jsxs("div",{className:"flex items-center gap-2 bg-brand-lime text-brand-inkBlack border-3 border-brand-inkBlack px-4 py-2.5 rounded-full font-black text-xs sm:text-sm shadow-brutal whitespace-nowrap select-none",children:[o.jsx(yp,{className:"w-3.5 h-3.5 fill-current text-brand-inkBlack"}),o.jsx("span",{children:t.demoGuide.openVideo}),o.jsx(xy,{className:"w-3.5 h-3.5 text-brand-inkBlack stroke-[2.5]"})]})})]}),o.jsxs("div",{className:"bg-brand-darkSurface px-4 sm:px-6 py-3 border-t-2 border-brand-lavender/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-bold text-stone-400",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(In,{className:"w-4 h-4 text-brand-lime flex-shrink-0"}),o.jsx("span",{className:"text-stone-300",children:"Video trải nghiệm thực tế N.E.D Wallet trên Solana Devnet"})]}),o.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-[11px]",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"}),o.jsx("span",{children:"1080p HD • Chạm để xem trên YouTube"})]})]})]})})}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:W.map((b,M)=>o.jsx(Fe,{animation:"fade-up",delay:M*100,className:"h-full",children:o.jsxs("div",{className:"h-full bg-white border-3 border-brand-inkBlack rounded-3xl p-6 shadow-brutal card-brutal-interactive flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("span",{className:`w-10 h-10 rounded-xl ${b.color} border-2 border-brand-inkBlack flex items-center justify-center font-black text-base text-brand-inkBlack shadow-brutal-xs`,children:b.num}),o.jsx("span",{className:"text-[10px] font-black uppercase text-stone-600 px-2 py-0.5 bg-brand-warmCream border border-brand-inkBlack rounded",children:b.tag})]}),o.jsx("h3",{className:"text-lg font-black text-brand-inkBlack mb-1.5",children:b.title}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:b.desc})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-brand-inkBlack/10 flex items-center gap-2 text-[11px] font-black text-brand-deepPurple",children:[o.jsx(Av,{className:"w-3.5 h-3.5 text-brand-lime"}),o.jsx("span",{children:"An toàn & Miễn phí phí Gas"})]})]})},b.num))}),o.jsx(Fe,{animation:"pop",delay:120,children:o.jsx("div",{className:"bg-brand-deepPurple text-brand-offWhite border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl mb-6",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[o.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-brand-darkSurface border border-brand-lavender rounded-lg text-xs font-black uppercase tracking-wider text-brand-lavender mb-3",children:[o.jsx(au,{className:"w-3.5 h-3.5 text-brand-lime"}),o.jsx("span",{children:t.demoGuide.contactCardTitle})]}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-black mb-3 text-brand-offWhite",children:"Nhận link cài đặt thử nghiệm qua email"}),o.jsx("p",{className:"text-sm sm:text-base text-stone-300 font-medium leading-relaxed",children:"Bản demo được gửi kèm hướng dẫn chi tiết qua Expo để bạn tự mình trải nghiệm các tính năng trong video trực tiếp trên điện thoại."})]}),o.jsxs("div",{className:"lg:col-span-5 bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 shadow-brutal flex flex-col items-stretch text-center",children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-400 mb-2",children:t.demoGuide.emailLabel}),o.jsx("div",{className:"bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl p-3 text-sm sm:text-base font-black text-brand-lime tracking-wide select-all mb-4",children:Te.contactEmail}),o.jsxs("div",{className:"flex flex-col gap-2.5",children:[o.jsxs("a",{href:C,className:"btn-brutal-primary w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs cursor-pointer",children:[o.jsx(au,{className:"w-4 h-4"}),o.jsx("span",{children:t.demoGuide.btnMailto})]}),o.jsx("button",{type:"button",onClick:_,className:`btn-brutal w-full py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs transition-colors cursor-pointer ${n?"bg-brand-lime text-brand-inkBlack":"bg-white text-brand-inkBlack"}`,"aria-label":"Sao chép địa chỉ email",children:n?o.jsxs(o.Fragment,{children:[o.jsx(Ml,{className:"w-4 h-4 text-emerald-800 stroke-[3]"}),o.jsx("span",{children:t.demoGuide.btnCopied})]}):o.jsxs(o.Fragment,{children:[o.jsx(av,{className:"w-4 h-4"}),o.jsx("span",{children:t.demoGuide.btnCopy})]})})]})]})]})})}),o.jsx(Fe,{animation:"fade-up",delay:160,children:o.jsxs("div",{className:"bg-brand-paleYellow text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl p-4 sm:p-5 shadow-brutal-sm flex items-center gap-3.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-400 border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:o.jsx(Ty,{className:"w-5 h-5 text-brand-inkBlack stroke-[2.5]"})}),o.jsx("div",{className:"text-xs sm:text-sm font-black text-brand-inkBlack leading-snug",children:t.demoGuide.warningNotice})]})})]})})},Q2=({onNavigate:t})=>{const{t:e}=xn(),n=()=>{t("/builders"),window.scrollTo({top:0,behavior:"smooth"})};return o.jsx("section",{id:"mini-apps",className:"scroll-mt-20 relative w-full bg-brand-deepPurple text-brand-offWhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none overflow-hidden",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx(Fe,{animation:"fade-up",children:o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12 sm:mb-16",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-pulse"}),o.jsx("span",{children:e.miniApps.statusBadge})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-4",children:e.miniApps.headline}),o.jsx("p",{className:"text-base sm:text-lg text-stone-300 font-medium leading-relaxed mb-6",children:e.miniApps.description}),o.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 bg-brand-darkSurface/90 border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs text-left max-w-lg mx-auto",children:[o.jsx("img",{src:Te.mascots.laughing,alt:"NED Teddy laughing",className:"w-9 h-9 object-contain drop-shadow",loading:"lazy"}),o.jsx("span",{className:"text-xs sm:text-sm font-bold text-brand-lavender",children:e.mascot.miniAppsTip})]})]})}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-14",children:[o.jsx("div",{className:"lg:col-span-5 flex justify-center",children:o.jsx(Fe,{animation:"fade-up",delay:50,className:"w-full max-w-sm",children:o.jsxs("div",{className:"relative",children:[o.jsxs("div",{className:"absolute -top-7 -right-4 z-20 flex items-center gap-1.5 bg-brand-lime text-brand-inkBlack px-3 py-1 rounded-full border-2 border-brand-inkBlack font-black text-[11px] shadow-brutal-xs rotate-3 animate-float-slow",children:[o.jsx("img",{src:Te.mascots.happy,alt:"NED Teddy happy",className:"w-5 h-5 object-contain"}),o.jsx("span",{children:"Hub Đa Tiện Ích"})]}),o.jsxs("div",{className:"bg-brand-darkSurface border-4 border-brand-inkBlack rounded-[2.5rem] p-3 sm:p-4 shadow-brutal-xl",children:[o.jsx("div",{className:"flex justify-center mb-3",children:o.jsx("div",{className:"w-20 h-1.5 bg-stone-700 rounded-full"})}),o.jsx("div",{className:"rounded-[1.8rem] overflow-hidden border-2 border-brand-inkBlack/60 bg-black aspect-[9/19] relative",children:o.jsx("img",{src:Te.screenshots.miniappsHub,alt:"N.E.D MiniApps Hub Screen",className:"w-full h-full object-cover object-top",loading:"lazy"})}),o.jsxs("div",{className:"mt-3 pt-2 text-center text-[11px] font-bold text-stone-400 flex items-center justify-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime"}),o.jsx("span",{children:"Giao diện N.E.D MiniApps Hub trên Solana Devnet"})]})]})]})})}),o.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[o.jsx(Fe,{animation:"fade-up",delay:100,children:o.jsx("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx(Vg,{className:"w-6 h-6"})}),o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lavender bg-brand-lavender/10 px-2 py-0.5 rounded border border-brand-lavender/30",children:"Module 01 • Thanh toán"}),o.jsx("span",{className:"text-[10px] font-bold text-stone-400",children:"Solana Pay Merchant"})]}),o.jsx("h3",{className:"text-lg sm:text-xl font-black text-brand-offWhite mb-1",children:e.miniApps.module1}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3",children:"Quét mã QR chấp nhận thanh toán tức thì tại điểm bán (POS), tự động đối soát giao dịch trên Solana Devnet với phí xử lý 0%."}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300",children:[o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(In,{className:"w-3.5 h-3.5 text-brand-lime"})," Mã QR Động"]}),o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(In,{className:"w-3.5 h-3.5 text-brand-lime"})," Phí 0%"]})]})]})]})})}),o.jsx(Fe,{animation:"fade-up",delay:200,children:o.jsx("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx(_i,{className:"w-6 h-6"})}),o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lime bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/30",children:"Module 02 • Hoán đổi & Tài chính"}),o.jsx("span",{className:"text-[10px] font-bold text-stone-400",children:"Jupiter Swap Lite"})]}),o.jsx("h3",{className:"text-lg sm:text-xl font-black text-brand-offWhite mb-1",children:e.miniApps.module2}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3",children:"Hoán đổi token nhanh chóng với định tuyến thông minh, kết hợp các két tích lũy vi mô (Micro Savings) sinh lời theo block."}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300",children:[o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(In,{className:"w-3.5 h-3.5 text-brand-cyan"})," Định tuyến tối ưu"]}),o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(In,{className:"w-3.5 h-3.5 text-brand-cyan"})," Lãi tính theo block"]})]})]})]})})}),o.jsx(Fe,{animation:"fade-up",delay:300,children:o.jsx("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx(hv,{className:"w-6 h-6"})}),o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/30",children:"Module 03 • Đời sống & Tiện ích"}),o.jsx("span",{className:"text-[10px] font-bold text-stone-400",children:"Web3 Gift Cards"})]}),o.jsx("h3",{className:"text-lg sm:text-xl font-black text-brand-offWhite mb-1",children:e.miniApps.module3}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3",children:"Mua voucher ăn uống, di chuyển và nạp thẻ cào điện thoại bằng tài sản số chỉ trong một chạm mà không cần rời ví."}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300",children:[o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(In,{className:"w-3.5 h-3.5 text-brand-lavender"})," Mã tức thì"]}),o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(In,{className:"w-3.5 h-3.5 text-brand-lavender"})," Không cần KYC"]})]})]})]})})})]})]}),o.jsx(Fe,{animation:"pop",delay:120,children:o.jsx("div",{className:"relative bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal-xl overflow-hidden",children:o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10",children:[o.jsxs("div",{className:"flex items-start sm:items-center gap-4",children:[o.jsx("img",{src:Te.mascots.proud,alt:"NED Teddy proud",className:"w-14 h-14 sm:w-16 sm:h-16 object-contain flex-shrink-0 drop-shadow",loading:"lazy"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-700 mb-1",children:"Dành cho đối tác & nhà phát triển"}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-brand-inkBlack",children:"Khám phá cổng hợp tác dành cho builder"}),o.jsx("p",{className:"text-sm sm:text-base font-bold text-stone-800 mt-1",children:"Xem lộ trình trao đổi ý tưởng và tích hợp MiniApp của bạn trực tiếp vào N.E.D Hub."})]})]}),o.jsxs("button",{type:"button",onClick:n,className:"btn-brutal-dark px-6 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 flex-shrink-0 cursor-pointer",children:[o.jsx("span",{children:e.miniApps.cta}),o.jsx(vi,{className:"w-4 h-4 text-brand-lime"})]})]})})})]})})},Z2=()=>{const{t}=xn(),[e,n]=oe.useState(0),i=[{q:t.faq.q1,a:t.faq.a1},{q:t.faq.q2,a:t.faq.a2},{q:t.faq.q3,a:t.faq.a3},{q:t.faq.q4,a:t.faq.a4},{q:t.faq.q5,a:t.faq.a5},{q:t.faq.q6,a:t.faq.a6}],r=s=>{n(e===s?null:s)};return o.jsx("section",{id:"faq",className:"scroll-mt-20 relative w-full bg-brand-deepPurple text-brand-offWhite py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx(Fe,{animation:"fade-up",children:o.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16",children:[o.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[o.jsx(hy,{className:"w-3.5 h-3.5 text-brand-cyan"}),o.jsx("span",{children:t.faq.tag})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-4",children:t.faq.headline}),o.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 bg-brand-darkSurface/90 border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs text-left max-w-md mx-auto",children:[o.jsx("img",{src:Te.mascots.thinking,alt:"NED Teddy thinking",className:"w-9 h-9 object-contain drop-shadow flex-shrink-0",loading:"lazy"}),o.jsx("span",{className:"text-xs sm:text-sm font-bold text-brand-lavender",children:t.mascot.faqTip})]})]})}),o.jsx("div",{className:"space-y-4",children:i.map((s,a)=>{const l=e===a,c=`faq-btn-${a}`,d=`faq-panel-${a}`;return o.jsx(Fe,{animation:"fade-up",delay:a*60,children:o.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl overflow-hidden shadow-brutal transition-all",children:[o.jsxs("button",{id:c,"aria-expanded":l,"aria-controls":d,onClick:()=>r(a),className:"w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-black text-base sm:text-lg text-brand-offWhite hover:text-brand-lavender transition-colors select-none",children:[o.jsxs("span",{className:"flex items-center gap-3",children:[o.jsxs("span",{className:"w-7 h-7 rounded-lg bg-brand-lavender text-brand-inkBlack text-xs font-black flex items-center justify-center flex-shrink-0 border border-brand-inkBlack",children:["Q",a+1]}),o.jsx("span",{children:s.q})]}),o.jsx(uy,{className:`w-5 h-5 flex-shrink-0 transition-transform duration-200 text-brand-lime ${l?"rotate-180":""}`})]}),l&&o.jsx("div",{id:d,role:"region","aria-labelledby":c,className:"px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base font-medium text-stone-300 leading-relaxed border-t border-brand-lavender/15 animate-in fade-in duration-150",children:s.a})]})},a)})})]})})},J2=({onNavigate:t})=>{const{t:e,lang:n}=xn(),i=n==="vi"?Te.demoMailBodyVi:Te.demoMailBodyEn,r=`mailto:${Te.contactEmail}?subject=${encodeURIComponent(Te.demoMailSubject)}&body=${encodeURIComponent(i)}`,s=a=>{a.preventDefault(),t("/builders"),window.scrollTo({top:0,behavior:"smooth"})};return o.jsx("section",{className:"relative w-full bg-brand-warmCream py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:o.jsx("div",{className:"max-w-5xl mx-auto",children:o.jsx(Fe,{animation:"pop",children:o.jsxs("div",{className:"bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-14 shadow-brutal-xl text-center relative overflow-hidden",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-6 shadow-brutal-xs",children:[o.jsx(_i,{className:"w-3.5 h-3.5 text-brand-deepPurple"}),o.jsx("span",{children:"N.E.D Wallet • Solana Devnet"})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-4 max-w-2xl mx-auto leading-tight",children:e.finalCta.headline}),o.jsx("p",{className:"text-base sm:text-lg font-bold text-stone-800 leading-relaxed mb-8 max-w-xl mx-auto",children:e.finalCta.description}),o.jsxs("div",{className:"flex items-center justify-center gap-3.5 mb-8",children:[o.jsx("img",{src:Te.mascots.waving,alt:"NED Teddy waving",className:"w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-md animate-float-slow",loading:"lazy"}),o.jsxs("div",{className:"bg-white/95 border-2 border-brand-inkBlack px-4 py-2 rounded-2xl shadow-brutal-xs text-left max-w-xs sm:max-w-sm",children:[o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-deepPurple",children:"Lời nhắn từ NED Teddy"}),o.jsx("div",{className:"text-xs sm:text-sm font-bold text-brand-inkBlack",children:e.mascot.finalTip})]})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsxs("a",{href:r,className:"btn-brutal-primary px-8 py-4 rounded-2xl text-base font-black flex items-center justify-center gap-2.5 shadow-brutal w-full sm:w-auto cursor-pointer",children:[o.jsx(au,{className:"w-5 h-5"}),o.jsx("span",{children:e.finalCta.btnPrimary})]}),o.jsxs("button",{type:"button",onClick:s,className:"btn-brutal-secondary px-6 py-4 rounded-2xl text-sm sm:text-base font-black flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto cursor-pointer bg-white text-brand-inkBlack hover:bg-stone-50",children:[o.jsx("span",{children:e.finalCta.builderLink}),o.jsx(vi,{className:"w-4 h-4 text-brand-deepPurple"})]})]})]})})})})},eT=({onNavigate:t})=>o.jsxs("main",{className:"w-full min-h-screen",children:[o.jsx(W2,{onNavigate:t}),o.jsx(X2,{}),o.jsx(q2,{}),o.jsx($2,{}),o.jsx(Y2,{}),o.jsx(K2,{}),o.jsx(Q2,{onNavigate:t}),o.jsx(Z2,{}),o.jsx(J2,{onNavigate:t})]}),tT=({onNavigate:t})=>{const{t:e}=xn(),n=r=>{r.preventDefault(),t("/developer/dashboard"),window.scrollTo({top:0,behavior:"smooth"})},i=r=>{r.preventDefault();const s=document.querySelector("#journey")||document.querySelector("#architecture");s&&s.scrollIntoView({behavior:"smooth",block:"start"})};return o.jsxs("div",{className:"w-full bg-brand-deepPurple text-brand-offWhite min-h-screen selection:bg-brand-lime selection:text-brand-inkBlack select-none",children:[o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6",children:o.jsxs("button",{onClick:()=>{t("/"),window.scrollTo({top:0,behavior:"smooth"})},className:"inline-flex items-center gap-2 px-4 py-2 bg-brand-darkSurface text-brand-offWhite border-2 border-brand-inkBlack rounded-xl font-bold text-xs shadow-brutal-xs hover:text-brand-lime transition-colors cursor-pointer",children:[o.jsx(Og,{className:"w-4 h-4"}),o.jsx("span",{children:e.builders.backHome})]})}),o.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-24",children:o.jsx(Fe,{animation:"fade-up",children:o.jsxs("div",{className:"max-w-3xl",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender text-xs font-black uppercase tracking-wider mb-6 shadow-brutal-xs",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse"}),o.jsx("span",{children:e.builders.badgeStatus})]}),o.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black text-brand-offWhite tracking-tight leading-[1.1] mb-6",children:e.builders.headline}),o.jsx("p",{className:"text-lg sm:text-xl text-stone-300 font-medium leading-relaxed mb-6",children:e.builders.subtitle}),o.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2.5 bg-brand-darkSurface border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs mb-8",children:[o.jsx("img",{src:Te.mascots.proud,alt:"NED Teddy proud",className:"w-9 h-9 object-contain drop-shadow flex-shrink-0",loading:"lazy"}),o.jsx("span",{className:"text-xs sm:text-sm font-bold text-brand-lavender",children:e.mascot.buildersTip})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-4",children:[o.jsxs("a",{href:"/developer/dashboard",onClick:n,className:"btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2.5 shadow-brutal cursor-pointer",children:[o.jsx(su,{className:"w-5 h-5"}),o.jsx("span",{children:e.builders.btnDashboard}),o.jsx(vi,{className:"w-4 h-4 text-brand-lime"})]}),o.jsxs("a",{href:"#journey",onClick:i,className:"btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer bg-white text-brand-inkBlack hover:bg-stone-50",children:[o.jsx(bp,{className:"w-5 h-5 text-brand-deepPurple"}),o.jsx("span",{children:e.builders.btnDocs})]})]})]})})}),o.jsx("section",{className:"w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y-4 border-brand-inkBlack",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsx(Fe,{animation:"fade-up",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[o.jsxs("div",{className:"lg:col-span-7",children:[o.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs",children:o.jsx("span",{children:"Kiến trúc định hướng"})}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-brand-inkBlack tracking-tight mb-4",children:e.builders.explainTitle}),o.jsx("p",{className:"text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6",children:e.builders.explainDesc}),o.jsxs("div",{className:"p-4 bg-white border-2 border-brand-inkBlack rounded-2xl shadow-brutal-xs flex items-center gap-3",children:[o.jsx(Qg,{className:"w-5 h-5 text-amber-700 flex-shrink-0"}),o.jsx("span",{className:"text-xs sm:text-sm font-bold text-stone-700",children:e.builders.explainNote})]})]}),o.jsx("div",{className:"lg:col-span-5 flex justify-center",children:o.jsxs("div",{className:"w-full max-w-sm bg-white border-4 border-brand-inkBlack rounded-3xl p-6 shadow-brutal-xl",children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-500 mb-4 pb-2 border-b-2 border-brand-inkBlack",children:"Sơ đồ Kiến trúc Sandbox"}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:"p-3 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs",children:[o.jsx("span",{children:"N.E.D Wallet Host UI"}),o.jsx("span",{className:"text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack",children:"Ví chủ"})]}),o.jsxs("div",{className:"p-4 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-2xl font-black text-sm text-center shadow-brutal-xs",children:[o.jsx("div",{className:"text-[10px] text-stone-500 uppercase font-black mb-1",children:"Sandbox Web Container"}),o.jsx("div",{className:"text-brand-inkBlack",children:"DApp Độc Lập của Builder"}),o.jsx("div",{className:"text-[10px] text-stone-600 font-bold mt-1",children:"Tự lưu trữ • Khai báo URL qua Dashboard"})]}),o.jsxs("div",{className:"p-3 bg-brand-cyan border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs",children:[o.jsx("span",{children:"Solana Devnet Settlement"}),o.jsx("span",{className:"text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack",children:"USDC"})]})]})]})})]})})})}),o.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24",children:[o.jsx(Fe,{animation:"fade-up",children:o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[o.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-brand-offWhite tracking-tight mb-3",children:e.builders.valuesTitle}),o.jsx("p",{className:"text-sm sm:text-base text-stone-300 font-medium",children:"Mục tiêu định hướng nền tảng nhằm đem lại lợi ích song hành cho cả người dùng và đối tác phát triển."})]})}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[o.jsx(Fe,{animation:"fade-up",delay:0,className:"h-full",children:o.jsxs("div",{className:"h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-8 shadow-brutal card-brutal-interactive",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx(Ay,{className:"w-6 h-6"})}),o.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.builders.val1Title}),o.jsx("p",{className:"text-sm sm:text-base font-medium text-stone-300 leading-relaxed",children:e.builders.val1Desc})]})}),o.jsx(Fe,{animation:"fade-up",delay:140,className:"h-full",children:o.jsxs("div",{className:"h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-8 shadow-brutal card-brutal-interactive",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx(Vg,{className:"w-6 h-6"})}),o.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.builders.val2Title}),o.jsx("p",{className:"text-sm sm:text-base font-medium text-stone-300 leading-relaxed",children:e.builders.val2Desc})]})})]})]}),o.jsx("section",{id:"journey",className:"w-full bg-brand-darkSurface text-brand-offWhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-4 border-brand-inkBlack",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx(Fe,{animation:"fade-up",children:o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[o.jsx("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs",children:o.jsx("span",{children:e.builders.journeyBadge})}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-black tracking-tight mb-3",children:e.builders.journeyTitle}),o.jsx("p",{className:"text-xs sm:text-sm text-stone-400 font-bold",children:e.builders.journeyNotice})]})}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6",children:[o.jsx(Fe,{animation:"fade-up",delay:0,className:"h-full",children:o.jsxs("div",{className:"h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack font-black flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs mb-5",children:o.jsx(wy,{className:"w-6 h-6"})}),o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lavender mb-1",children:"Bước 01"}),o.jsx("h3",{className:"text-xl font-black mb-2.5 text-brand-offWhite",children:e.builders.step1Title}),o.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step1Desc})]}),o.jsxs("div",{className:"mt-6 pt-4 border-t border-brand-lavender/20 flex items-center gap-2 text-xs font-bold text-stone-400",children:[o.jsx(Gh,{className:"w-3.5 h-3.5 text-brand-lime"}),o.jsx("span",{children:"Chủ động hạ tầng & dữ liệu"})]})]})}),o.jsx(Fe,{animation:"fade-up",delay:120,className:"h-full",children:o.jsxs("div",{className:"h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack font-black flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs mb-5",children:o.jsx(ha,{className:"w-6 h-6"})}),o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-cyan mb-1",children:"Bước 02"}),o.jsx("h3",{className:"text-xl font-black mb-2.5 text-brand-offWhite",children:e.builders.step2Title}),o.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step2Desc})]}),o.jsxs("div",{className:"mt-6 pt-4 border-t border-brand-cyan/20 flex items-center gap-2 text-xs font-bold text-stone-400",children:[o.jsx(su,{className:"w-3.5 h-3.5 text-brand-cyan"}),o.jsx("span",{children:"Khai báo qua Dashboard"})]})]})}),o.jsx(Fe,{animation:"fade-up",delay:240,className:"h-full",children:o.jsxs("div",{className:"h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack font-black flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs mb-5",children:o.jsx(In,{className:"w-6 h-6"})}),o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lime mb-1",children:"Bước 03"}),o.jsx("h3",{className:"text-xl font-black mb-2.5 text-brand-offWhite",children:e.builders.step3Title}),o.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step3Desc})]}),o.jsxs("div",{className:"mt-6 pt-4 border-t border-brand-lime/20 flex items-center gap-2 text-xs font-bold text-stone-400",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-pulse"}),o.jsx("span",{children:"Phê duyệt & phân phối tự động"})]})]})})]})]})}),o.jsx("section",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24",children:o.jsx(Fe,{animation:"pop",delay:100,children:o.jsxs("div",{className:"bg-brand-lime text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-12 shadow-brutal-xl text-center",children:[o.jsx("div",{className:"flex justify-center mb-4",children:o.jsx("img",{src:Te.mascots.waving,alt:"NED Teddy waving",className:"w-16 h-16 object-contain drop-shadow",loading:"lazy"})}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-black tracking-tight mb-4",children:e.builders.ctaHeadline}),o.jsx("p",{className:"text-base sm:text-lg font-bold text-stone-800 max-w-2xl mx-auto mb-8",children:e.builders.ctaDesc}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsxs("a",{href:"/developer/dashboard",onClick:n,className:"btn-brutal-primary bg-brand-deepPurple text-brand-offWhite px-8 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2.5 shadow-brutal w-full sm:w-auto cursor-pointer hover:bg-brand-deepPurple/90",children:[o.jsx(ha,{className:"w-5 h-5 text-brand-lime"}),o.jsx("span",{children:e.builders.ctaSubmit}),o.jsx(vi,{className:"w-5 h-5 text-brand-lime"})]}),o.jsxs("a",{href:"#journey",onClick:i,className:"btn-brutal-secondary bg-white text-brand-inkBlack px-7 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto cursor-pointer hover:bg-stone-50",children:[o.jsx(bp,{className:"w-5 h-5 text-brand-deepPurple"}),o.jsx("span",{children:e.builders.btnDocs})]})]})]})})})]})},nT=({onNavigate:t})=>{const{lang:e}=xn(),[n,i]=oe.useState("submit"),[r,s]=oe.useState(""),[a,l]=oe.useState(""),[c,d]=oe.useState(""),[h,p]=oe.useState("Payment & POS"),[f,x]=oe.useState(""),[g,y]=oe.useState(!1),[m,u]=oe.useState(!1),[v,_]=oe.useState([{id:"app-1",name:"Solana Pay Merchant",url:"https://pay.nedwallet.io",logo:Te.screenshots.miniappsHub,category:"Thanh toán / POS",description:"Quét mã QR chấp nhận thanh toán USDC/SOL tại điểm bán, tự động đối soát giao dịch.",status:"approved",submittedAt:"12/09/2026"},{id:"app-2",name:"Lucky Coin Flip Room",url:"https://coin.nedwallet.io",logo:Te.screenshots.luckyCoin,category:"Gaming & Lì Xì",description:"Phòng tung đồng xu may mắn chia lì xì và quà tặng on-chain trên Solana Devnet.",status:"approved",submittedAt:"14/09/2026"},{id:"app-3",name:"Web3 Gift Cards Hub",url:"https://giftcards.nedwallet.io",logo:Te.screenshots.miniappsHub,category:"Đời sống & Tiện ích",description:"Mua voucher ăn uống, di chuyển và nạp thẻ cào điện thoại bằng stablecoin không cần KYC.",status:"approved",submittedAt:"16/09/2026"}]),w=C=>{C.preventDefault(),!(!r||!a)&&(y(!0),setTimeout(()=>{const N={id:`app-${Date.now()}`,name:r,url:a.startsWith("http")?a:`https://${a}`,logo:c||Te.screenshots.miniappsHub,category:h,description:f||"DApp độc lập tích hợp qua N.E.D Developer Portal.",status:"reviewing",submittedAt:"Vừa xong"};_([N,...v]),y(!1),u(!0),s(""),l(""),d(""),x(""),setTimeout(()=>{u(!1),i("projects")},1800)},800))};return o.jsxs("div",{className:"w-full bg-brand-deepPurple text-brand-offWhite min-h-screen selection:bg-brand-lime selection:text-brand-inkBlack select-none pb-24",children:[o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsxs("button",{onClick:()=>{t("/builders"),window.scrollTo({top:0,behavior:"smooth"})},className:"inline-flex items-center gap-2 px-4 py-2 bg-brand-darkSurface text-brand-offWhite border-2 border-brand-inkBlack rounded-xl font-bold text-xs shadow-brutal-xs hover:text-brand-lime transition-colors cursor-pointer",children:[o.jsx(Og,{className:"w-4 h-4"}),o.jsx("span",{children:e==="vi"?"Trang Builder":"Builder Home"})]}),o.jsx("button",{onClick:()=>{t("/"),window.scrollTo({top:0,behavior:"smooth"})},className:"hidden sm:inline-flex items-center gap-2 px-3.5 py-2 bg-brand-darkSurface/60 text-stone-400 border border-brand-inkBlack rounded-xl font-bold text-xs hover:text-white transition-colors cursor-pointer",children:o.jsx("span",{children:e==="vi"?"Về trang chủ ví":"Home"})})]}),o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 bg-brand-lime text-brand-inkBlack border-2 border-brand-inkBlack rounded-full font-black text-xs shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-inkBlack animate-pulse"}),o.jsx("span",{children:"Developer Portal • Solana Devnet"})]})]}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6",children:o.jsx(Fe,{animation:"fade-up",children:o.jsxs("div",{className:"bg-brand-darkSurface border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-lavender text-brand-inkBlack font-black text-xs uppercase mb-3 border border-brand-inkBlack",children:[o.jsx(su,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"N.E.D Developer Dashboard"})]}),o.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-2",children:e==="vi"?"Quản lý & Submit Mini-DApp":"Submit & Manage Mini-DApps"}),o.jsx("p",{className:"text-sm sm:text-base text-stone-300 font-medium max-w-2xl",children:e==="vi"?"Phát triển DApp độc lập, tự lưu trữ và khai báo thông tin trực tiếp để tự động tích hợp lên hệ sinh thái N.E.D Wallet.":"Build independent self-hosted DApps, declare metadata, and distribute automatically on N.E.D Wallet."})]}),o.jsxs("div",{className:"flex items-center gap-3 bg-brand-deepPurple/80 border-2 border-brand-lavender/40 px-4 py-3 rounded-2xl shadow-brutal-xs flex-shrink-0",children:[o.jsx("img",{src:Te.mascots.proud,alt:"NED Teddy Proud",className:"w-12 h-12 object-contain drop-shadow flex-shrink-0"}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-[11px] font-black uppercase text-brand-lime",children:"NED Teddy"}),o.jsx("div",{className:"text-xs font-bold text-stone-200",children:e==="vi"?"Duyệt tự động trong vài phút!":"Automated approval in minutes!"})]})]})]})})}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8",children:o.jsxs("div",{className:"flex flex-wrap items-center gap-3 border-b-2 border-brand-lavender/20 pb-4",children:[o.jsxs("button",{type:"button",onClick:()=>i("submit"),className:`px-5 py-2.5 rounded-2xl font-black text-sm flex items-center gap-2 border-2 border-brand-inkBlack transition-all cursor-pointer ${n==="submit"?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs scale-105":"bg-brand-darkSurface text-stone-300 hover:text-white hover:bg-stone-800"}`,children:[o.jsx(ha,{className:"w-4 h-4"}),o.jsx("span",{children:e==="vi"?"1. Submit Mini-DApp Mới":"1. Submit New DApp"})]}),o.jsxs("button",{type:"button",onClick:()=>i("projects"),className:`px-5 py-2.5 rounded-2xl font-black text-sm flex items-center gap-2 border-2 border-brand-inkBlack transition-all cursor-pointer ${n==="projects"?"bg-brand-cyan text-brand-inkBlack shadow-brutal-xs scale-105":"bg-brand-darkSurface text-stone-300 hover:text-white hover:bg-stone-800"}`,children:[o.jsx(hv,{className:"w-4 h-4"}),o.jsx("span",{children:e==="vi"?"2. Dự Án Đã Lên Sóng":"2. Live Projects"}),o.jsx("span",{className:"bg-brand-deepPurple text-brand-offWhite px-2 py-0.5 rounded-full text-xs font-black",children:v.length})]}),o.jsxs("button",{type:"button",onClick:()=>i("docs"),className:`px-5 py-2.5 rounded-2xl font-black text-sm flex items-center gap-2 border-2 border-brand-inkBlack transition-all cursor-pointer ${n==="docs"?"bg-brand-lavender text-brand-inkBlack shadow-brutal-xs scale-105":"bg-brand-darkSurface text-stone-300 hover:text-white hover:bg-stone-800"}`,children:[o.jsx(fy,{className:"w-4 h-4"}),o.jsx("span",{children:e==="vi"?"3. Tài Liệu Tích Hợp API":"3. API & Sandbox Docs"})]})]})}),n==="submit"&&o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[o.jsxs("div",{className:"lg:col-span-7 bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal",children:[o.jsxs("div",{className:"flex items-center justify-between mb-6 pb-4 border-b border-brand-lavender/20",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl sm:text-2xl font-black text-brand-offWhite",children:e==="vi"?"Khai báo thông tin Mini-DApp":"Submit DApp Metadata"}),o.jsx("p",{className:"text-xs sm:text-sm text-stone-400 font-medium mt-1",children:e==="vi"?"Bước 02 trong quy trình: Khai báo URL, Logo và Mô tả thông qua Dashboard của N.E.D.":"Step 02: Declare URL, Logo and Description through N.E.D Dashboard."})]}),o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs",children:"02"})]}),m&&o.jsxs("div",{className:"mb-6 p-4 bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200 rounded-2xl font-bold text-sm flex items-center gap-3 animate-in fade-in",children:[o.jsx(In,{className:"w-5 h-5 text-emerald-400 flex-shrink-0"}),o.jsx("span",{children:e==="vi"?"Submit thành công! Dự án của bạn đang được hệ thống Sandbox tự động kiểm duyệt.":"Submission received! Your project is now running through automated Sandbox review."})]}),o.jsxs("form",{onSubmit:w,className:"space-y-5",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-black uppercase text-brand-lavender mb-2",children:e==="vi"?"Tên Ứng Dụng (App Name) *":"App Name *"}),o.jsx("input",{type:"text",required:!0,placeholder:"Ví dụ: Jupiter Swap Lite, Coffee Pay, v.v.",value:r,onChange:C=>s(C.target.value),className:"w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-black uppercase text-brand-lavender mb-2",children:e==="vi"?"URL DApp (HTTPS) *":"DApp Web URL (HTTPS) *"}),o.jsx("input",{type:"url",required:!0,placeholder:"https://my-dapp.com",value:a,onChange:C=>l(C.target.value),className:"w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"}),o.jsx("span",{className:"text-[11px] text-stone-400 mt-1 block",children:e==="vi"?"Bước 01: Mã nguồn do bạn tự host độc lập.":"Step 01: Self-hosted independently."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-black uppercase text-brand-lavender mb-2",children:e==="vi"?"Logo URL (Icon PNG/SVG)":"Icon/Logo URL (PNG/SVG)"}),o.jsx("input",{type:"url",placeholder:"https://my-dapp.com/logo.png",value:c,onChange:C=>d(C.target.value),className:"w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-black uppercase text-brand-lavender mb-2",children:e==="vi"?"Danh mục Ứng Dụng":"Category"}),o.jsxs("select",{value:h,onChange:C=>p(C.target.value),className:"w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs",children:[o.jsx("option",{value:"Payment & POS",children:"Thanh toán tại quầy (POS) & Mã QR"}),o.jsx("option",{value:"DeFi & Swap",children:"Hoán đổi Token & DeFi (Jupiter/Raydium)"}),o.jsx("option",{value:"Micro Savings",children:"Tiết kiệm vi mô & Sinh lời theo block"}),o.jsx("option",{value:"Gaming & Lì Xì",children:"Minigame, Lì xì & Cộng đồng"}),o.jsx("option",{value:"Lifestyle",children:"Thẻ quà tặng, Tiện ích sống & Voucher"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-black uppercase text-brand-lavender mb-2",children:e==="vi"?"Mô tả ngắn trải nghiệm":"Short Description"}),o.jsx("textarea",{rows:3,placeholder:"Mô tả chức năng chính người dùng sẽ trải nghiệm bên trong N.E.D Wallet...",value:f,onChange:C=>x(C.target.value),className:"w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"})]}),o.jsxs("div",{className:"p-4 bg-brand-deepPurple/70 border-2 border-brand-inkBlack rounded-2xl flex items-start gap-3",children:[o.jsx(El,{className:"w-5 h-5 text-brand-lime flex-shrink-0 mt-0.5"}),o.jsx("div",{className:"text-xs font-bold text-stone-300 leading-relaxed",children:e==="vi"?"DApp của bạn sẽ chạy trong Sandbox biệt lập. Người dùng tương tác ký giao dịch Solana qua Native Bridge an toàn không để lộ Private Key.":"Your DApp runs inside an isolated Sandbox. User transactions are securely signed via Native Bridge without seedphrase exposure."})]}),o.jsxs("button",{type:"submit",disabled:g,className:"w-full btn-brutal-primary py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal cursor-pointer disabled:opacity-50",children:[o.jsx(ha,{className:"w-5 h-5"}),o.jsx("span",{children:g?e==="vi"?"Đang gửi thông tin...":"Submitting...":e==="vi"?"Bắt đầu Submit Dự án lên N.E.D":"Submit DApp for Review"})]})]})]}),o.jsxs("div",{className:"lg:col-span-5 space-y-5",children:[o.jsxs("div",{className:"bg-brand-lavender text-brand-inkBlack border-3 border-brand-inkBlack rounded-3xl p-6 shadow-brutal",children:[o.jsx("div",{className:"text-xs font-black uppercase text-stone-700 mb-1",children:e==="vi"?"Quy trình kiểm duyệt":"Review Lifecycle"}),o.jsx("h3",{className:"text-xl font-black mb-3",children:e==="vi"?"Sau khi Submit sẽ diễn ra điều gì?":"What happens after submit?"}),o.jsxs("div",{className:"space-y-3 text-xs sm:text-sm font-bold text-stone-800",children:[o.jsxs("div",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"w-5 h-5 rounded-full bg-brand-inkBlack text-white flex items-center justify-center text-[10px] flex-shrink-0",children:"1"}),o.jsx("span",{children:"Hệ thống tự động ping kiểm tra chứng chỉ SSL và giao thức Sandbox của URL bạn gửi."})]}),o.jsxs("div",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"w-5 h-5 rounded-full bg-brand-inkBlack text-white flex items-center justify-center text-[10px] flex-shrink-0",children:"2"}),o.jsx("span",{children:"Tạo bản xem trước tức thì trên môi trường N.E.D Wallet Solana Devnet."})]}),o.jsxs("div",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"w-5 h-5 rounded-full bg-brand-lime text-brand-inkBlack flex items-center justify-center text-[10px] flex-shrink-0",children:"3"}),o.jsx("span",{children:"Khi được Approve, Mini-DApp tự động xuất hiện trong Hub của hàng ngàn người dùng ví!"})]})]})]}),o.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 shadow-brutal",children:[o.jsx("div",{className:"text-xs font-black uppercase text-brand-cyan mb-2",children:e==="vi"?"Mẫu hiển thị trong ví":"In-Wallet Preview"}),o.jsxs("div",{className:"p-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-2xl flex items-center gap-3",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-brand-lime text-brand-inkBlack font-black flex items-center justify-center flex-shrink-0 border border-brand-inkBlack",children:r?r.slice(0,2).toUpperCase():"NED"}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("div",{className:"text-sm font-black text-brand-offWhite truncate",children:r||"Tên DApp của bạn"}),o.jsx("div",{className:"text-[11px] font-bold text-brand-lavender",children:h}),o.jsx("div",{className:"text-[10px] text-stone-400 truncate",children:a||"https://my-dapp.com"})]}),o.jsx("span",{className:"px-2 py-1 rounded bg-brand-lime/20 border border-brand-lime text-brand-lime text-[10px] font-black",children:"Preview"})]})]})]})]})}),n==="projects"&&o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal mb-8",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-lavender/20",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-black text-brand-offWhite",children:e==="vi"?"Danh Sách Dự Án Đã Khai Báo":"Submitted Mini-DApps"}),o.jsx("p",{className:"text-xs sm:text-sm text-stone-400 font-medium",children:e==="vi"?"Theo dõi trạng thái kiểm duyệt realtime và phân phối trên N.E.D Hub.":"Real-time review and distribution status on N.E.D Hub."})]}),o.jsxs("button",{type:"button",onClick:()=>i("submit"),className:"btn-brutal-primary px-4 py-2.5 rounded-xl font-black text-xs flex items-center gap-1.5 shadow-brutal-xs",children:[o.jsx(ha,{className:"w-4 h-4"}),o.jsx("span",{children:e==="vi"?"Submit thêm DApp":"Submit Another"})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:v.map(C=>o.jsxs("div",{className:"bg-brand-deepPurple border-3 border-brand-inkBlack rounded-2xl p-5 shadow-brutal flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-start justify-between gap-3 mb-3",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-brand-darkSurface border-2 border-brand-inkBlack overflow-hidden flex items-center justify-center p-1",children:o.jsx("img",{src:C.logo,alt:C.name,className:"w-full h-full object-cover rounded-lg"})}),C.status==="approved"?o.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-400 text-emerald-300 font-black text-[10px]",children:[o.jsx(In,{className:"w-3 h-3"}),o.jsx("span",{children:"Approved • Live"})]}):o.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-950 border border-amber-400 text-amber-300 font-black text-[10px]",children:[o.jsx(tv,{className:"w-3 h-3 animate-spin"}),o.jsx("span",{children:"Reviewing • Sandbox"})]})]}),o.jsx("h3",{className:"text-lg font-black text-brand-offWhite mb-1",children:C.name}),o.jsx("div",{className:"text-[11px] font-bold text-brand-cyan mb-2",children:C.category}),o.jsx("p",{className:"text-xs font-medium text-stone-300 leading-relaxed line-clamp-2 mb-4",children:C.description})]}),o.jsxs("div",{className:"pt-3 border-t border-brand-lavender/15 flex items-center justify-between text-[11px] font-bold text-stone-400",children:[o.jsxs("span",{className:"flex items-center gap-1 truncate max-w-[160px]",children:[o.jsx(Gh,{className:"w-3 h-3 text-brand-lime flex-shrink-0"}),o.jsx("span",{className:"truncate",children:C.url})]}),o.jsx("span",{children:C.submittedAt})]})]},C.id))})]})}),n==="docs"&&o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal space-y-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cyan text-brand-inkBlack rounded-lg font-black text-xs uppercase mb-2 border border-brand-inkBlack",children:[o.jsx(Ey,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"N.E.D Sandbox API Specification"})]}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-brand-offWhite",children:e==="vi"?"Tài Liệu Tích Hợp Sandbox & PostMessage Bridge":"Sandbox Integration & Bridge Protocol"}),o.jsx("p",{className:"text-sm font-medium text-stone-300 mt-1",children:e==="vi"?"Hướng dẫn nhúng DApp của bạn vào N.E.D Wallet mà không cần chỉnh sửa sâu kiến trúc Web3 hiện có.":"Guide to integrating your DApp into N.E.D Wallet with zero-friction Solana standard hooks."})]}),o.jsxs("div",{className:"bg-black/80 border-2 border-brand-inkBlack rounded-2xl p-5 font-mono text-xs text-stone-200 overflow-x-auto shadow-brutal-xs",children:[o.jsx("div",{className:"text-brand-lime font-black mb-2",children:"// 1. Lắng nghe kết nối từ N.E.D Wallet Bridge"}),o.jsx("pre",{className:"text-stone-300",children:`window.addEventListener('message', (event) => {
  if (event.data?.type === 'NED_WALLET_READY') {
    console.log('Connected to N.E.D Host UI on Solana Devnet');
    console.log('Active User Handle:', event.data.handle); // e.g. @alex.sol
    console.log('Public Key:', event.data.publicKey);
  }
});`})]}),o.jsxs("div",{className:"bg-black/80 border-2 border-brand-inkBlack rounded-2xl p-5 font-mono text-xs text-stone-200 overflow-x-auto shadow-brutal-xs",children:[o.jsx("div",{className:"text-brand-cyan font-black mb-2",children:"// 2. Yêu cầu thanh toán tức thì qua USDC Devnet"}),o.jsx("pre",{className:"text-stone-300",children:`window.parent.postMessage({
  type: 'NED_REQUEST_PAYMENT',
  payload: {
    amount: 5.0, // 5.00 USDC
    memo: 'Order #1042 - Coffee POS',
    recipient: '7xWp9bM2...', // Builder Solana Address
  }
}, '*');`})]}),o.jsxs("div",{className:"p-4 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-between gap-4",children:[o.jsxs("div",{children:[o.jsx("div",{className:"font-black",children:"Cần hỗ trợ kỹ thuật chuyên sâu?"}),o.jsx("div",{children:"Đội ngũ kỹ thuật N.E.D luôn sẵn sàng hỗ trợ trực tiếp qua Devnet Support Group."})]}),o.jsx("button",{type:"button",onClick:()=>i("submit"),className:"btn-brutal-dark px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1 flex-shrink-0 cursor-pointer",children:o.jsx("span",{children:e==="vi"?"Submit DApp ngay":"Submit DApp"})})]})]})})]})},iT=()=>{const[t,e]=oe.useState(()=>window.location.pathname.startsWith("/developer")?"/developer/dashboard":window.location.pathname.startsWith("/builders")?"/builders":"/");oe.useEffect(()=>{const i=()=>{window.location.pathname.startsWith("/developer")?e("/developer/dashboard"):window.location.pathname.startsWith("/builders")?e("/builders"):e("/")};return window.addEventListener("popstate",i),()=>window.removeEventListener("popstate",i)},[]);const n=i=>{i.startsWith("#")||i!==t&&(window.history.pushState({},"",i),e(i))};return o.jsx(Jb,{children:o.jsxs("div",{className:"flex flex-col min-h-screen bg-brand-deepPurple font-sans text-brand-inkBlack selection:bg-brand-lime selection:text-brand-inkBlack",children:[o.jsx(ky,{currentPath:t,onNavigate:n}),o.jsx("div",{className:"flex-grow",children:t==="/developer/dashboard"?o.jsx(nT,{onNavigate:n}):t==="/builders"?o.jsx(tT,{onNavigate:n}):o.jsx(eT,{onNavigate:n})}),o.jsx(Ry,{currentPath:t,onNavigate:n})]})})};dd.createRoot(document.getElementById("root")).render(o.jsx(j0.StrictMode,{children:o.jsx(iT,{})}));
