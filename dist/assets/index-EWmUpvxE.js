(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function r0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ym={exports:{}},Dl={},bm={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),s0=Symbol.for("react.portal"),a0=Symbol.for("react.fragment"),o0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),d0=Symbol.for("react.forward_ref"),h0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),p0=Symbol.for("react.lazy"),cf=Symbol.iterator;function m0(t){return t===null||typeof t!="object"?null:(t=cf&&t[cf]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,wm={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Sm}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Em(){}Em.prototype=Rs.prototype;function Yd(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Sm}var Kd=Yd.prototype=new Em;Kd.constructor=Yd;Mm(Kd,Rs.prototype);Kd.isPureReactComponent=!0;var uf=Array.isArray,Tm=Object.prototype.hasOwnProperty,Qd={current:null},Cm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,i)&&!Cm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Pa,type:t,key:s,ref:a,props:r,_owner:Qd.current}}function g0(t,e){return{$$typeof:Pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pa}function x0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var df=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?x0(""+t.key):e.toString(36)}function Lo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Pa:case s0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+rc(a,0):i,uf(r)?(n="",t!=null&&(n=t.replace(df,"$&/")+"/"),Lo(r,e,n,"",function(u){return u})):r!=null&&(Zd(r)&&(r=g0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(df,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",uf(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+rc(s,o);a+=Lo(s,e,n,c,r)}else if(c=m0(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+rc(s,o++),a+=Lo(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Va(t,e,n){if(t==null)return t;var i=[],r=0;return Lo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function v0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Io={transition:null},_0={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Io,ReactCurrentOwner:Qd};function Nm(){throw Error("act(...) is not supported in production builds of React.")}Fe.Children={map:Va,forEach:function(t,e,n){Va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Va(t,function(){e++}),e},toArray:function(t){return Va(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=Rs;Fe.Fragment=a0;Fe.Profiler=l0;Fe.PureComponent=Yd;Fe.StrictMode=o0;Fe.Suspense=h0;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_0;Fe.act=Nm;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)Tm.call(e,c)&&!Cm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Pa,type:t.type,key:r,ref:s,props:i,_owner:a}};Fe.createContext=function(t){return t={$$typeof:u0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:c0,_context:t},t.Consumer=t};Fe.createElement=Am;Fe.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:d0,render:t}};Fe.isValidElement=Zd;Fe.lazy=function(t){return{$$typeof:p0,_payload:{_status:-1,_result:t},_init:v0}};Fe.memo=function(t,e){return{$$typeof:f0,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=Io.transition;Io.transition={};try{t()}finally{Io.transition=e}};Fe.unstable_act=Nm;Fe.useCallback=function(t,e){return Xt.current.useCallback(t,e)};Fe.useContext=function(t){return Xt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Xt.current.useEffect(t,e)};Fe.useId=function(){return Xt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Xt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};Fe.useRef=function(t){return Xt.current.useRef(t)};Fe.useState=function(t){return Xt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Xt.current.useTransition()};Fe.version="18.3.1";bm.exports=Fe;var Me=bm.exports;const y0=r0(Me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0=Me,S0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,E0=b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T0={key:!0,ref:!0,__self:!0,__source:!0};function km(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)w0.call(e,i)&&!T0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:S0,type:t,key:s,ref:a,props:r,_owner:E0.current}}Dl.Fragment=M0;Dl.jsx=km;Dl.jsxs=km;ym.exports=Dl;var l=ym.exports,uu={},Rm={exports:{}},pn={},Pm={exports:{}},Dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,Y){var K=P.length;P.push(Y);e:for(;0<K;){var ee=K-1>>>1,pe=P[ee];if(0<r(pe,Y))P[ee]=Y,P[K]=pe,K=ee;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var Y=P[0],K=P.pop();if(K!==Y){P[0]=K;e:for(var ee=0,pe=P.length,Oe=pe>>>1;ee<Oe;){var G=2*(ee+1)-1,te=P[G],ce=G+1,oe=P[ce];if(0>r(te,K))ce<pe&&0>r(oe,te)?(P[ee]=oe,P[ce]=K,ee=ce):(P[ee]=te,P[G]=K,ee=G);else if(ce<pe&&0>r(oe,K))P[ee]=oe,P[ce]=K,ee=ce;else break e}}return Y}function r(P,Y){var K=P.sortIndex-Y.sortIndex;return K!==0?K:P.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],f=1,p=null,h=3,g=!1,x=!1,b=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=P)i(u),Y.sortIndex=Y.expirationTime,e(c,Y);else break;Y=n(u)}}function M(P){if(b=!1,_(P),!x)if(n(c)!==null)x=!0,j(k);else{var Y=n(u);Y!==null&&Q(M,Y.startTime-P)}}function k(P,Y){x=!1,b&&(b=!1,d(N),N=-1),g=!0;var K=h;try{for(_(Y),p=n(c);p!==null&&(!(p.expirationTime>Y)||P&&!E());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,h=p.priorityLevel;var pe=ee(p.expirationTime<=Y);Y=t.unstable_now(),typeof pe=="function"?p.callback=pe:p===n(c)&&i(c),_(Y)}else i(c);p=n(c)}if(p!==null)var Oe=!0;else{var G=n(u);G!==null&&Q(M,G.startTime-Y),Oe=!1}return Oe}finally{p=null,h=K,g=!1}}var A=!1,T=null,N=-1,W=5,y=-1;function E(){return!(t.unstable_now()-y<W)}function V(){if(T!==null){var P=t.unstable_now();y=P;var Y=!0;try{Y=T(!0,P)}finally{Y?z():(A=!1,T=null)}}else A=!1}var z;if(typeof v=="function")z=function(){v(V)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,J=X.port2;X.port1.onmessage=V,z=function(){J.postMessage(null)}}else z=function(){m(V,0)};function j(P){T=P,A||(A=!0,z())}function Q(P,Y){N=m(function(){P(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,j(k))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var K=h;h=Y;try{return P()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var K=h;h=P;try{return Y()}finally{h=K}},t.unstable_scheduleCallback=function(P,Y,K){var ee=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ee+K:ee):K=ee,P){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=K+pe,P={id:f++,callback:Y,priorityLevel:P,startTime:K,expirationTime:pe,sortIndex:-1},K>ee?(P.sortIndex=K,e(u,P),n(c)===null&&P===n(u)&&(b?(d(N),N=-1):b=!0,Q(M,K-ee))):(P.sortIndex=pe,e(c,P),x||g||(x=!0,j(k))),P},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(P){var Y=h;return function(){var K=h;h=Y;try{return P.apply(this,arguments)}finally{h=K}}}})(Dm);Pm.exports=Dm;var C0=Pm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=Me,fn=C0;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lm=new Set,fa={};function kr(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(fa[t]=e,t=0;t<e.length;t++)Lm.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,N0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hf={},ff={};function k0(t){return du.call(ff,t)?!0:du.call(hf,t)?!1:N0.test(t)?ff[t]=!0:(hf[t]=!0,!1)}function R0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P0(t,e,n,i){if(e===null||typeof e>"u"||R0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jd=/[\-:]([a-z])/g;function eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jd,eh);It[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jd,eh);It[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jd,eh);It[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function th(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P0(e,n,r,i)&&(n=null),i||r===null?k0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),hu=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),Um=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),fu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Bm=Symbol.for("react.offscreen"),pf=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=pf&&t[pf]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,sc;function Js(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var ac=!1;function oc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function D0(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case $r:return"Portal";case hu:return"Profiler";case nh:return"StrictMode";case fu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Um:return(t.displayName||"Context")+".Consumer";case Im:return(t._context.displayName||"Context")+".Provider";case ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function L0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I0(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=I0(t))}function Om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zm(t,e){e=e.checked,e!=null&&th(t,"checked",e,!1)}function xu(t,e){zm(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&vu(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vu(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function _u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ea(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function jm(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,Vm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U0=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){U0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function Gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function Wm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Gm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var B0=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(t,e){if(e){if(B0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mu=null;function sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wu=null,ls=null,cs=null;function _f(t){if(t=Ia(t)){if(typeof wu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Fl(e),wu(t.stateNode,t.type,e))}}function Xm(t){ls?cs?cs.push(t):cs=[t]:ls=t}function qm(){if(ls){var t=ls,e=cs;if(cs=ls=null,_f(t),e)for(t=0;t<e.length;t++)_f(e[t])}}function $m(t,e){return t(e)}function Ym(){}var lc=!1;function Km(t,e,n){if(lc)return t(e,n);lc=!0;try{return $m(t,e,n)}finally{lc=!1,(ls!==null||cs!==null)&&(Ym(),qm())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var i=Fl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Eu=!1;if(fi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Eu=!1}function F0(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var sa=!1,nl=null,il=!1,Tu=null,O0={onError:function(t){sa=!0,nl=t}};function z0(t,e,n,i,r,s,a,o,c){sa=!1,nl=null,F0.apply(O0,arguments)}function j0(t,e,n,i,r,s,a,o,c){if(z0.apply(this,arguments),sa){if(sa){var u=nl;sa=!1,nl=null}else throw Error(ie(198));il||(il=!0,Tu=u)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yf(t){if(Rr(t)!==t)throw Error(ie(188))}function H0(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yf(r),t;if(s===i)return yf(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Zm(t){return t=H0(t),t!==null?Jm(t):null}function Jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jm(t);if(e!==null)return e;t=t.sibling}return null}var eg=fn.unstable_scheduleCallback,bf=fn.unstable_cancelCallback,V0=fn.unstable_shouldYield,G0=fn.unstable_requestPaint,yt=fn.unstable_now,W0=fn.unstable_getCurrentPriorityLevel,ah=fn.unstable_ImmediatePriority,tg=fn.unstable_UserBlockingPriority,rl=fn.unstable_NormalPriority,X0=fn.unstable_LowPriority,ng=fn.unstable_IdlePriority,Ll=null,qn=null;function q0(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:K0,$0=Math.log,Y0=Math.LN2;function K0(t){return t>>>=0,t===0?32:31-($0(t)/Y0|0)|0}var qa=64,$a=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ta(o):(s&=a,s!==0&&(i=ta(s)))}else a=n&~r,a!==0?i=ta(a):s!==0&&(i=ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function Q0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Fn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=Q0(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function Cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function J0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sg,lh,ag,og,lg,Au=!1,Ya=[],Ui=null,Bi=null,Fi=null,ga=new Map,xa=new Map,Ri=[],e_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function zs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ia(e),e!==null&&lh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function t_(t,e,n,i,r){switch(e){case"focusin":return Ui=zs(Ui,t,e,n,i,r),!0;case"dragenter":return Bi=zs(Bi,t,e,n,i,r),!0;case"mouseover":return Fi=zs(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ga.set(s,zs(ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,xa.set(s,zs(xa.get(s)||null,t,e,n,i,r)),!0}return!1}function cg(t){var e=mr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qm(n),e!==null){t.blockedOn=e,lg(t.priority,function(){ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mu=i,n.target.dispatchEvent(i),Mu=null}else return e=Ia(n),e!==null&&lh(e),t.blockedOn=n,!1;e.shift()}return!0}function Mf(t,e,n){Uo(t)&&n.delete(e)}function n_(){Au=!1,Ui!==null&&Uo(Ui)&&(Ui=null),Bi!==null&&Uo(Bi)&&(Bi=null),Fi!==null&&Uo(Fi)&&(Fi=null),ga.forEach(Mf),xa.forEach(Mf)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,Au||(Au=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,n_)))}function va(t){function e(r){return js(r,t)}if(0<Ya.length){js(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&js(Ui,t),Bi!==null&&js(Bi,t),Fi!==null&&js(Fi,t),ga.forEach(e),xa.forEach(e),n=0;n<Ri.length;n++)i=Ri[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&Ri.shift()}var us=_i.ReactCurrentBatchConfig,al=!0;function i_(t,e,n,i){var r=it,s=us.transition;us.transition=null;try{it=1,ch(t,e,n,i)}finally{it=r,us.transition=s}}function r_(t,e,n,i){var r=it,s=us.transition;us.transition=null;try{it=4,ch(t,e,n,i)}finally{it=r,us.transition=s}}function ch(t,e,n,i){if(al){var r=Nu(t,e,n,i);if(r===null)_c(t,e,i,ol,n),Sf(t,i);else if(t_(r,t,e,n,i))i.stopPropagation();else if(Sf(t,i),e&4&&-1<e_.indexOf(t)){for(;r!==null;){var s=Ia(r);if(s!==null&&sg(s),s=Nu(t,e,n,i),s===null&&_c(t,e,i,ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _c(t,e,i,null,n)}}var ol=null;function Nu(t,e,n,i){if(ol=null,t=sh(i),t=mr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ol=t,null}function ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W0()){case ah:return 1;case tg:return 4;case rl:case X0:return 16;case ng:return 536870912;default:return 16}default:return 16}}var Li=null,uh=null,Bo=null;function dg(){if(Bo)return Bo;var t,e=uh,n=e.length,i,r="value"in Li?Li.value:Li.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Bo=r.slice(t,1<i?1-i:void 0)}function Fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function wf(){return!1}function mn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:wf,this.isPropagationStopped=wf,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=mn(Ps),La=mt({},Ps,{view:0,detail:0}),s_=mn(La),uc,dc,Hs,Il=mt({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(uc=t.screenX-Hs.screenX,dc=t.screenY-Hs.screenY):dc=uc=0,Hs=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Ef=mn(Il),a_=mt({},Il,{dataTransfer:0}),o_=mn(a_),l_=mt({},La,{relatedTarget:0}),hc=mn(l_),c_=mt({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),u_=mn(c_),d_=mt({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h_=mn(d_),f_=mt({},Ps,{data:0}),Tf=mn(f_),p_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g_[t])?!!e[t]:!1}function hh(){return x_}var v_=mt({},La,{key:function(t){if(t.key){var e=p_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hh,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),__=mn(v_),y_=mt({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=mn(y_),b_=mt({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hh}),S_=mn(b_),M_=mt({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),w_=mn(M_),E_=mt({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T_=mn(E_),C_=[9,13,27,32],fh=fi&&"CompositionEvent"in window,aa=null;fi&&"documentMode"in document&&(aa=document.documentMode);var A_=fi&&"TextEvent"in window&&!aa,hg=fi&&(!fh||aa&&8<aa&&11>=aa),Af=" ",Nf=!1;function fg(t,e){switch(t){case"keyup":return C_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function N_(t,e){switch(t){case"compositionend":return pg(e);case"keypress":return e.which!==32?null:(Nf=!0,Af);case"textInput":return t=e.data,t===Af&&Nf?null:t;default:return null}}function k_(t,e){if(Kr)return t==="compositionend"||!fh&&fg(t,e)?(t=dg(),Bo=uh=Li=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hg&&e.locale!=="ko"?null:e.data;default:return null}}var R_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!R_[t.type]:e==="textarea"}function mg(t,e,n,i){Xm(i),e=ll(e,"onChange"),0<e.length&&(n=new dh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var oa=null,_a=null;function P_(t){Tg(t,0)}function Ul(t){var e=Jr(t);if(Om(e))return t}function D_(t,e){if(t==="change")return e}var gg=!1;if(fi){var fc;if(fi){var pc="oninput"in document;if(!pc){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),pc=typeof Rf.oninput=="function"}fc=pc}else fc=!1;gg=fc&&(!document.documentMode||9<document.documentMode)}function Pf(){oa&&(oa.detachEvent("onpropertychange",xg),_a=oa=null)}function xg(t){if(t.propertyName==="value"&&Ul(_a)){var e=[];mg(e,_a,t,sh(t)),Km(P_,e)}}function L_(t,e,n){t==="focusin"?(Pf(),oa=e,_a=n,oa.attachEvent("onpropertychange",xg)):t==="focusout"&&Pf()}function I_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(_a)}function U_(t,e){if(t==="click")return Ul(e)}function B_(t,e){if(t==="input"||t==="change")return Ul(e)}function F_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:F_;function ya(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!du.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function Df(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lf(t,e){var n=Df(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Df(n)}}function vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _g(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function O_(t){var e=_g(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vg(n.ownerDocument.documentElement,n)){if(i!==null&&ph(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lf(n,s);var a=Lf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z_=fi&&"documentMode"in document&&11>=document.documentMode,Qr=null,ku=null,la=null,Ru=!1;function If(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||Qr==null||Qr!==tl(i)||(i=Qr,"selectionStart"in i&&ph(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&ya(la,i)||(la=i,i=ll(ku,"onSelect"),0<i.length&&(e=new dh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},mc={},yg={};fi&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function Bl(t){if(mc[t])return mc[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yg)return mc[t]=e[n];return t}var bg=Bl("animationend"),Sg=Bl("animationiteration"),Mg=Bl("animationstart"),wg=Bl("transitionend"),Eg=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Eg.set(t,e),kr(e,[t])}for(var gc=0;gc<Uf.length;gc++){var xc=Uf[gc],j_=xc.toLowerCase(),H_=xc[0].toUpperCase()+xc.slice(1);Ki(j_,"on"+H_)}Ki(bg,"onAnimationEnd");Ki(Sg,"onAnimationIteration");Ki(Mg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(wg,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V_=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Bf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,j0(i,e,void 0,t),t.currentTarget=null}function Tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;Bf(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;Bf(r,o,u),s=c}}}if(il)throw t=Tu,il=!1,Tu=null,t}function lt(t,e){var n=e[Uu];n===void 0&&(n=e[Uu]=new Set);var i=t+"__bubble";n.has(i)||(Cg(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),Cg(n,t,i,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[Za]){t[Za]=!0,Lm.forEach(function(n){n!=="selectionchange"&&(V_.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,vc("selectionchange",!1,e))}}function Cg(t,e,n,i){switch(ug(e)){case 1:var r=i_;break;case 4:r=r_;break;default:r=ch}n=r.bind(null,e,n,t),r=void 0,!Eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=mr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Km(function(){var u=s,f=sh(n),p=[];e:{var h=Eg.get(t);if(h!==void 0){var g=dh,x=t;switch(t){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":g=__;break;case"focusin":x="focus",g=hc;break;case"focusout":x="blur",g=hc;break;case"beforeblur":case"afterblur":g=hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=o_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=S_;break;case bg:case Sg:case Mg:g=u_;break;case wg:g=w_;break;case"scroll":g=s_;break;case"wheel":g=T_;break;case"copy":case"cut":case"paste":g=h_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Cf}var b=(e&4)!==0,m=!b&&t==="scroll",d=b?h!==null?h+"Capture":null:h;b=[];for(var v=u,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,d!==null&&(M=ma(v,d),M!=null&&b.push(Sa(v,M,_)))),m)break;v=v.return}0<b.length&&(h=new g(h,x,null,n,f),p.push({event:h,listeners:b}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Mu&&(x=n.relatedTarget||n.fromElement)&&(mr(x)||x[pi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?mr(x):null,x!==null&&(m=Rr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(b=Ef,M="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(b=Cf,M="onPointerLeave",d="onPointerEnter",v="pointer"),m=g==null?h:Jr(g),_=x==null?h:Jr(x),h=new b(M,v+"leave",g,n,f),h.target=m,h.relatedTarget=_,M=null,mr(f)===u&&(b=new b(d,v+"enter",x,n,f),b.target=_,b.relatedTarget=m,M=b),m=M,g&&x)t:{for(b=g,d=x,v=0,_=b;_;_=Dr(_))v++;for(_=0,M=d;M;M=Dr(M))_++;for(;0<v-_;)b=Dr(b),v--;for(;0<_-v;)d=Dr(d),_--;for(;v--;){if(b===d||d!==null&&b===d.alternate)break t;b=Dr(b),d=Dr(d)}b=null}else b=null;g!==null&&Ff(p,h,g,b,!1),x!==null&&m!==null&&Ff(p,m,x,b,!0)}}e:{if(h=u?Jr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=D_;else if(kf(h))if(gg)k=B_;else{k=I_;var A=L_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=U_);if(k&&(k=k(t,u))){mg(p,k,n,f);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&vu(h,"number",h.value)}switch(A=u?Jr(u):window,t){case"focusin":(kf(A)||A.contentEditable==="true")&&(Qr=A,ku=u,la=null);break;case"focusout":la=ku=Qr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,If(p,n,f);break;case"selectionchange":if(z_)break;case"keydown":case"keyup":If(p,n,f)}var T;if(fh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Kr?fg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(hg&&n.locale!=="ko"&&(Kr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Kr&&(T=dg()):(Li=f,uh="value"in Li?Li.value:Li.textContent,Kr=!0)),A=ll(u,N),0<A.length&&(N=new Tf(N,t,null,n,f),p.push({event:N,listeners:A}),T?N.data=T:(T=pg(n),T!==null&&(N.data=T)))),(T=A_?N_(t,n):k_(t,n))&&(u=ll(u,"onBeforeInput"),0<u.length&&(f=new Tf("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=T))}Tg(p,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ma(t,n),s!=null&&i.unshift(Sa(t,s,r)),s=ma(t,e),s!=null&&i.push(Sa(t,s,r))),t=t.return}return i}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ff(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=ma(n,s),c!=null&&a.unshift(Sa(n,c,o))):r||(c=ma(n,s),c!=null&&a.push(Sa(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var G_=/\r\n?/g,W_=/\u0000|\uFFFD/g;function Of(t){return(typeof t=="string"?t:""+t).replace(G_,`
`).replace(W_,"")}function Ja(t,e,n){if(e=Of(e),Of(t)!==e&&n)throw Error(ie(425))}function cl(){}var Pu=null,Du=null;function Lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Iu=typeof setTimeout=="function"?setTimeout:void 0,X_=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,q_=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(t){return zf.resolve(null).then(t).catch($_)}:Iu;function $_(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);va(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ds,Ma="__reactProps$"+Ds,pi="__reactContainer$"+Ds,Uu="__reactEvents$"+Ds,Y_="__reactListeners$"+Ds,K_="__reactHandles$"+Ds;function mr(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jf(t);t!==null;){if(n=t[Wn])return n;t=jf(t)}return e}t=n,n=t.parentNode}return null}function Ia(t){return t=t[Wn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Fl(t){return t[Ma]||null}var Bu=[],es=-1;function Qi(t){return{current:t}}function ut(t){0>es||(t.current=Bu[es],Bu[es]=null,es--)}function st(t,e){es++,Bu[es]=t.current,t.current=e}var qi={},jt=Qi(qi),en=Qi(!1),Sr=qi;function vs(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function ul(){ut(en),ut(jt)}function Hf(t,e,n){if(jt.current!==qi)throw Error(ie(168));st(jt,e),st(en,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,L0(t)||"Unknown",r));return mt({},n,i)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,Sr=jt.current,st(jt,t),st(en,en.current),!0}function Vf(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Ag(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,ut(en),ut(jt),st(jt,t)):ut(en),st(en,n)}var ai=null,Ol=!1,bc=!1;function Ng(t){ai===null?ai=[t]:ai.push(t)}function Q_(t){Ol=!0,Ng(t)}function Zi(){if(!bc&&ai!==null){bc=!0;var t=0,e=it;try{var n=ai;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Ol=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),eg(ah,Zi),r}finally{it=e,bc=!1}}return null}var ts=[],ns=0,hl=null,fl=0,vn=[],_n=0,Mr=null,li=1,ci="";function lr(t,e){ts[ns++]=fl,ts[ns++]=hl,hl=t,fl=e}function kg(t,e,n){vn[_n++]=li,vn[_n++]=ci,vn[_n++]=Mr,Mr=t;var i=li;t=ci;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var s=32-Fn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-Fn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function mh(t){t.return!==null&&(lr(t,1),kg(t,1,0))}function gh(t){for(;t===hl;)hl=ts[--ns],ts[ns]=null,fl=ts[--ns],ts[ns]=null;for(;t===Mr;)Mr=vn[--_n],vn[_n]=null,ci=vn[--_n],vn[_n]=null,li=vn[--_n],vn[_n]=null}var hn=null,dn=null,dt=!1,In=null;function Rg(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,dn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,dn=null,!0):!1;default:return!1}}function Fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ou(t){if(dt){var e=dn;if(e){var n=e;if(!Gf(t,e)){if(Fu(t))throw Error(ie(418));e=Oi(n.nextSibling);var i=hn;e&&Gf(t,e)?Rg(i,n):(t.flags=t.flags&-4097|2,dt=!1,hn=t)}}else{if(Fu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,dt=!1,hn=t}}}function Wf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function eo(t){if(t!==hn)return!1;if(!dt)return Wf(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lu(t.type,t.memoizedProps)),e&&(e=dn)){if(Fu(t))throw Pg(),Error(ie(418));for(;e;)Rg(t,e),e=Oi(e.nextSibling)}if(Wf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=hn?Oi(t.stateNode.nextSibling):null;return!0}function Pg(){for(var t=dn;t;)t=Oi(t.nextSibling)}function _s(){dn=hn=null,dt=!1}function xh(t){In===null?In=[t]:In.push(t)}var Z_=_i.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function to(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xf(t){var e=t._init;return e(t._payload)}function Dg(t){function e(d,v){if(t){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Vi(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,_,M){return v===null||v.tag!==6?(v=Ac(_,d.mode,M),v.return=d,v):(v=r(v,_),v.return=d,v)}function c(d,v,_,M){var k=_.type;return k===Yr?f(d,v,_.props.children,M,_.key):v!==null&&(v.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ni&&Xf(k)===v.type)?(M=r(v,_.props),M.ref=Vs(d,v,_),M.return=d,M):(M=Wo(_.type,_.key,_.props,null,d.mode,M),M.ref=Vs(d,v,_),M.return=d,M)}function u(d,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Nc(_,d.mode,M),v.return=d,v):(v=r(v,_.children||[]),v.return=d,v)}function f(d,v,_,M,k){return v===null||v.tag!==7?(v=br(_,d.mode,M,k),v.return=d,v):(v=r(v,_),v.return=d,v)}function p(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ac(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ga:return _=Wo(v.type,v.key,v.props,null,d.mode,_),_.ref=Vs(d,null,v),_.return=d,_;case $r:return v=Nc(v,d.mode,_),v.return=d,v;case Ni:var M=v._init;return p(d,M(v._payload),_)}if(ea(v)||Fs(v))return v=br(v,d.mode,_,null),v.return=d,v;to(d,v)}return null}function h(d,v,_,M){var k=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return k!==null?null:o(d,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ga:return _.key===k?c(d,v,_,M):null;case $r:return _.key===k?u(d,v,_,M):null;case Ni:return k=_._init,h(d,v,k(_._payload),M)}if(ea(_)||Fs(_))return k!==null?null:f(d,v,_,M,null);to(d,_)}return null}function g(d,v,_,M,k){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(_)||null,o(v,d,""+M,k);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ga:return d=d.get(M.key===null?_:M.key)||null,c(v,d,M,k);case $r:return d=d.get(M.key===null?_:M.key)||null,u(v,d,M,k);case Ni:var A=M._init;return g(d,v,_,A(M._payload),k)}if(ea(M)||Fs(M))return d=d.get(_)||null,f(v,d,M,k,null);to(v,M)}return null}function x(d,v,_,M){for(var k=null,A=null,T=v,N=v=0,W=null;T!==null&&N<_.length;N++){T.index>N?(W=T,T=null):W=T.sibling;var y=h(d,T,_[N],M);if(y===null){T===null&&(T=W);break}t&&T&&y.alternate===null&&e(d,T),v=s(y,v,N),A===null?k=y:A.sibling=y,A=y,T=W}if(N===_.length)return n(d,T),dt&&lr(d,N),k;if(T===null){for(;N<_.length;N++)T=p(d,_[N],M),T!==null&&(v=s(T,v,N),A===null?k=T:A.sibling=T,A=T);return dt&&lr(d,N),k}for(T=i(d,T);N<_.length;N++)W=g(T,d,N,_[N],M),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?N:W.key),v=s(W,v,N),A===null?k=W:A.sibling=W,A=W);return t&&T.forEach(function(E){return e(d,E)}),dt&&lr(d,N),k}function b(d,v,_,M){var k=Fs(_);if(typeof k!="function")throw Error(ie(150));if(_=k.call(_),_==null)throw Error(ie(151));for(var A=k=null,T=v,N=v=0,W=null,y=_.next();T!==null&&!y.done;N++,y=_.next()){T.index>N?(W=T,T=null):W=T.sibling;var E=h(d,T,y.value,M);if(E===null){T===null&&(T=W);break}t&&T&&E.alternate===null&&e(d,T),v=s(E,v,N),A===null?k=E:A.sibling=E,A=E,T=W}if(y.done)return n(d,T),dt&&lr(d,N),k;if(T===null){for(;!y.done;N++,y=_.next())y=p(d,y.value,M),y!==null&&(v=s(y,v,N),A===null?k=y:A.sibling=y,A=y);return dt&&lr(d,N),k}for(T=i(d,T);!y.done;N++,y=_.next())y=g(T,d,N,y.value,M),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?N:y.key),v=s(y,v,N),A===null?k=y:A.sibling=y,A=y);return t&&T.forEach(function(V){return e(d,V)}),dt&&lr(d,N),k}function m(d,v,_,M){if(typeof _=="object"&&_!==null&&_.type===Yr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ga:e:{for(var k=_.key,A=v;A!==null;){if(A.key===k){if(k=_.type,k===Yr){if(A.tag===7){n(d,A.sibling),v=r(A,_.props.children),v.return=d,d=v;break e}}else if(A.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ni&&Xf(k)===A.type){n(d,A.sibling),v=r(A,_.props),v.ref=Vs(d,A,_),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}_.type===Yr?(v=br(_.props.children,d.mode,M,_.key),v.return=d,d=v):(M=Wo(_.type,_.key,_.props,null,d.mode,M),M.ref=Vs(d,v,_),M.return=d,d=M)}return a(d);case $r:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(d,v.sibling),v=r(v,_.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Nc(_,d.mode,M),v.return=d,d=v}return a(d);case Ni:return A=_._init,m(d,v,A(_._payload),M)}if(ea(_))return x(d,v,_,M);if(Fs(_))return b(d,v,_,M);to(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,_),v.return=d,d=v):(n(d,v),v=Ac(_,d.mode,M),v.return=d,d=v),a(d)):n(d,v)}return m}var ys=Dg(!0),Lg=Dg(!1),pl=Qi(null),ml=null,is=null,vh=null;function _h(){vh=is=ml=null}function yh(t){var e=pl.current;ut(pl),t._currentValue=e}function zu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){ml=t,vh=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(vh!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(ml===null)throw Error(ie(308));is=t,ml.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var gr=null;function bh(t){gr===null?gr=[t]:gr.push(t)}function Ig(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bh(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ki=!1;function Sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,bh(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Oo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}function qf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,i){var r=t.updateQueue;ki=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,f=u=c=null,o=s;do{var h=o.lane,g=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,b=o;switch(h=e,g=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){p=x.call(g,p,h);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,h=typeof x=="function"?x.call(g,p,h):x,h==null)break e;p=mt({},p,h);break e;case 2:ki=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else g={eventTime:g,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=g,c=p):f=f.next=g,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=a,t.lanes=a,t.memoizedState=p}}function $f(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ua={},$n=Qi(Ua),wa=Qi(Ua),Ea=Qi(Ua);function xr(t){if(t===Ua)throw Error(ie(174));return t}function Mh(t,e){switch(st(Ea,e),st(wa,t),st($n,Ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yu(e,t)}ut($n),st($n,e)}function bs(){ut($n),ut(wa),ut(Ea)}function Bg(t){xr(Ea.current);var e=xr($n.current),n=yu(e,t.type);e!==n&&(st(wa,t),st($n,n))}function wh(t){wa.current===t&&(ut($n),ut(wa))}var ht=Qi(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sc=[];function Eh(){for(var t=0;t<Sc.length;t++)Sc[t]._workInProgressVersionPrimary=null;Sc.length=0}var zo=_i.ReactCurrentDispatcher,Mc=_i.ReactCurrentBatchConfig,wr=0,ft=null,wt=null,Nt=null,vl=!1,ca=!1,Ta=0,J_=0;function Ut(){throw Error(ie(321))}function Th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Ch(t,e,n,i,r,s){if(wr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zo.current=t===null||t.memoizedState===null?iy:ry,t=n(i,r),ca){s=0;do{if(ca=!1,Ta=0,25<=s)throw Error(ie(301));s+=1,Nt=wt=null,e.updateQueue=null,zo.current=sy,t=n(i,r)}while(ca)}if(zo.current=_l,e=wt!==null&&wt.next!==null,wr=0,Nt=wt=ft=null,vl=!1,e)throw Error(ie(300));return t}function Ah(){var t=Ta!==0;return Ta=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ft.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Tn(){if(wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Nt===null?ft.memoizedState:Nt.next;if(e!==null)Nt=e,wt=t;else{if(t===null)throw Error(ie(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Nt===null?ft.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Ca(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var f=u.lane;if((wr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=i):c=c.next=p,ft.lanes|=f,Er|=f}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,zn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);zn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fg(){}function Og(t,e){var n=ft,i=Tn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Nh(Hg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Aa(9,jg.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ie(349));wr&30||zg(n,e,r)}return r}function zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jg(t,e,n,i){e.value=n,e.getSnapshot=i,Vg(e)&&Gg(t)}function Hg(t,e,n){return n(function(){Vg(e)&&Gg(t)})}function Vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function Gg(t){var e=mi(t,1);e!==null&&On(e,t,1,-1)}function Yf(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},e.queue=t,t=t.dispatch=ny.bind(null,ft,t),[e.memoizedState,t]}function Aa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Wg(){return Tn().memoizedState}function jo(t,e,n,i){var r=Hn();ft.flags|=t,r.memoizedState=Aa(1|e,n,void 0,i===void 0?null:i)}function zl(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var a=wt.memoizedState;if(s=a.destroy,i!==null&&Th(i,a.deps)){r.memoizedState=Aa(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Aa(1|e,n,s,i)}function Kf(t,e){return jo(8390656,8,t,e)}function Nh(t,e){return zl(2048,8,t,e)}function Xg(t,e){return zl(4,2,t,e)}function qg(t,e){return zl(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yg(t,e,n){return n=n!=null?n.concat([t]):null,zl(4,4,$g.bind(null,e,t),n)}function kh(){}function Kg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Th(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Th(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Zg(t,e,n){return wr&21?(zn(n,e)||(n=ig(),ft.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function ey(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Mc.transition;Mc.transition={};try{t(!1),e()}finally{it=n,Mc.transition=i}}function Jg(){return Tn().memoizedState}function ty(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ex(t))tx(e,n);else if(n=Ig(t,e,n,i),n!==null){var r=Wt();On(n,t,i,r),nx(n,e,i)}}function ny(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ex(t))tx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,a)){var c=e.interleaved;c===null?(r.next=r,bh(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Ig(t,e,r,i),n!==null&&(r=Wt(),On(n,t,i,r),nx(n,e,i))}}function ex(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function tx(t,e){ca=vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}var _l={readContext:En,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},iy={readContext:En,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Kf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jo(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return jo(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Hn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ty.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:Yf,useDebugValue:kh,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=Yf(!1),e=t[0];return t=ey.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Hn();if(dt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),kt===null)throw Error(ie(349));wr&30||zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kf(Hg.bind(null,i,s,t),[t]),i.flags|=2048,Aa(9,jg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=kt.identifierPrefix;if(dt){var n=ci,i=li;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=J_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ry={readContext:En,useCallback:Kg,useContext:En,useEffect:Nh,useImperativeHandle:Yg,useInsertionEffect:Xg,useLayoutEffect:qg,useMemo:Qg,useReducer:wc,useRef:Wg,useState:function(){return wc(Ca)},useDebugValue:kh,useDeferredValue:function(t){var e=Tn();return Zg(e,wt.memoizedState,t)},useTransition:function(){var t=wc(Ca)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Jg,unstable_isNewReconciler:!1},sy={readContext:En,useCallback:Kg,useContext:En,useEffect:Nh,useImperativeHandle:Yg,useInsertionEffect:Xg,useLayoutEffect:qg,useMemo:Qg,useReducer:Ec,useRef:Wg,useState:function(){return Ec(Ca)},useDebugValue:kh,useDeferredValue:function(t){var e=Tn();return wt===null?e.memoizedState=t:Zg(e,wt.memoizedState,t)},useTransition:function(){var t=Ec(Ca)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Jg,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ju(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Hi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(On(e,t,r,i),Oo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Hi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(On(e,t,r,i),Oo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),i=Hi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(On(e,t,i,n),Oo(e,t,i))}};function Qf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ya(n,i)||!ya(r,s):!0}function ix(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=tn(e)?Sr:jt.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function Hu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=tn(e)?Sr:jt.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ju(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jl.enqueueReplaceState(r,r.state,null),gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=D0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ay=typeof WeakMap=="function"?WeakMap:Map;function rx(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){bl||(bl=!0,Ju=i),Vu(t,e)},n}function sx(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vu(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Jf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ay;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yy.bind(null,t,e,n),e.then(t,t))}function ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var oy=_i.ReactCurrentOwner,Jt=!1;function Gt(t,e,n,i){e.child=t===null?Lg(e,null,n,i):ys(e,t.child,n,i)}function np(t,e,n,i,r){n=n.render;var s=e.ref;return ds(e,r),i=Ch(t,e,n,i,s,r),n=Ah(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(dt&&n&&mh(e),e.flags|=1,Gt(t,e,i,r),e.child)}function ip(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ax(t,e,s,i,r)):(t=Wo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function ax(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ya(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Gu(t,e,n,i,r)}function ox(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ss,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ss,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ss,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ss,un),un|=i;return Gt(t,e,r,n),e.child}function lx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gu(t,e,n,i,r){var s=tn(n)?Sr:jt.current;return s=vs(e,s),ds(e,r),n=Ch(t,e,n,i,s,r),i=Ah(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(dt&&i&&mh(e),e.flags|=1,Gt(t,e,n,r),e.child)}function rp(t,e,n,i,r){if(tn(n)){var s=!0;dl(e)}else s=!1;if(ds(e,r),e.stateNode===null)Ho(t,e),ix(e,n,i),Hu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=En(u):(u=tn(n)?Sr:jt.current,u=vs(e,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Zf(e,a,i,u),ki=!1;var h=e.memoizedState;a.state=h,gl(e,i,a,r),c=e.memoizedState,o!==i||h!==c||en.current||ki?(typeof f=="function"&&(ju(e,n,f,i),c=e.memoizedState),(o=ki||Qf(e,n,o,i,h,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ug(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Dn(e.type,o),a.props=u,p=e.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=En(c):(c=tn(n)?Sr:jt.current,c=vs(e,c));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||h!==c)&&Zf(e,a,i,c),ki=!1,h=e.memoizedState,a.state=h,gl(e,i,a,r);var x=e.memoizedState;o!==p||h!==x||en.current||ki?(typeof g=="function"&&(ju(e,n,g,i),x=e.memoizedState),(u=ki||Qf(e,n,u,i,h,x,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Wu(t,e,n,i,s,r)}function Wu(t,e,n,i,r,s){lx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Vf(e,n,!1),gi(t,e,s);i=e.stateNode,oy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,o,s)):Gt(t,e,o,s),e.memoizedState=i.state,r&&Vf(e,n,!0),e.child}function cx(t){var e=t.stateNode;e.pendingContext?Hf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hf(t,e.context,!1),Mh(t,e.containerInfo)}function sp(t,e,n,i,r){return _s(),xh(r),e.flags|=256,Gt(t,e,n,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function ux(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return Ou(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Gl(a,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qu(n),e.memoizedState=Xu,t):Rh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ly(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Vi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Vi(o,s):(s=br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?qu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Xu,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rh(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function no(t,e,n,i){return i!==null&&xh(i),ys(e,t.child,null,n),t=Rh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ly(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Tc(Error(ie(422))),no(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gl({mode:"visible",children:i.children},r,0,null),s=br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ys(e,t.child,null,a),e.child.memoizedState=qu(a),e.memoizedState=Xu,s);if(!(e.mode&1))return no(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Tc(s,i,void 0),no(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),On(i,t,r,-1))}return Bh(),i=Tc(Error(ie(421))),no(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=by.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=Oi(r.nextSibling),hn=e,dt=!0,In=null,t!==null&&(vn[_n++]=li,vn[_n++]=ci,vn[_n++]=Mr,li=t.id,ci=t.overflow,Mr=e),e=Rh(e,i.children),e.flags|=4096,e)}function ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zu(t.return,e,n)}function Cc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,n,e);else if(t.tag===19)ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cc(e,!0,n,null,s);break;case"together":Cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cy(t,e,n){switch(e.tag){case 3:cx(e),_s();break;case 5:Bg(e);break;case 1:tn(e.type)&&dl(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?ux(t,e,n):(st(ht,ht.current&1),t=gi(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,ox(t,e,n)}return gi(t,e,n)}var hx,$u,fx,px;hx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$u=function(){};fx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr($n.current);var s=null;switch(n){case"input":r=gu(t,r),i=gu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=_u(t,r),i=_u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cl)}bu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&lt("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};px=function(t,e,n,i){n!==i&&(e.flags|=4)};function Gs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function uy(t,e,n){var i=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return tn(e.type)&&ul(),Bt(e),null;case 3:return i=e.stateNode,bs(),ut(en),ut(jt),Eh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(nd(In),In=null))),$u(t,e),Bt(e),null;case 5:wh(e);var r=xr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)fx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Bt(e),null}if(t=xr($n.current),eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Wn]=e,i[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<na.length;r++)lt(na[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":mf(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":xf(i,s),lt("invalid",i)}bu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",""+o]):fa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&lt("scroll",i)}switch(n){case"input":Wa(i),gf(i,s,!0);break;case"textarea":Wa(i),vf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Wn]=e,t[Ma]=i,hx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Su(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<na.length;r++)lt(na[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":mf(t,i),r=gu(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":xf(t,i),r=_u(t,i),lt("invalid",t);break;default:r=i}bu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Wm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Vm(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&pa(t,c):typeof c=="number"&&pa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&lt("scroll",t):c!=null&&th(t,s,c,a))}switch(n){case"input":Wa(t),gf(t,i,!1);break;case"textarea":Wa(t),vf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?os(t,!!i.multiple,s,!1):i.defaultValue!=null&&os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)px(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=xr(Ea.current),xr($n.current),eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return Bt(e),null;case 13:if(ut(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&dn!==null&&e.mode&1&&!(e.flags&128))Pg(),_s(),e.flags|=98560,s=!1;else if(s=eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Wn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else In!==null&&(nd(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Et===0&&(Et=3):Bh())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return bs(),$u(t,e),t===null&&ba(e.stateNode.containerInfo),Bt(e),null;case 10:return yh(e.type._context),Bt(e),null;case 17:return tn(e.type)&&ul(),Bt(e),null;case 19:if(ut(ht),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Gs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=xl(t),a!==null){for(e.flags|=128,Gs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Ms&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304)}else{if(!i)if(t=xl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Bt(e),null}else 2*yt()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function dy(t,e){switch(gh(e),e.tag){case 1:return tn(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bs(),ut(en),ut(jt),Eh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wh(e),null;case 13:if(ut(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ht),null;case 4:return bs(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var io=!1,zt=!1,hy=typeof WeakSet=="function"?WeakSet:Set,me=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Yu(t,e,n){try{n()}catch(i){xt(t,e,i)}}var op=!1;function fy(t,e){if(Pu=al,t=_g(),ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,f=0,p=t,h=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===t)break t;if(h===n&&++u===r&&(o=a),h===s&&++f===i&&(c=a),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:t,selectionRange:n},al=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,m=x.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?b:Dn(e.type,b),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){xt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return x=op,op=!1,x}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yu(e,n,s)}r=r.next}while(r!==i)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mx(t){var e=t.alternate;e!==null&&(t.alternate=null,mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[Ma],delete e[Uu],delete e[Y_],delete e[K_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gx(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}var Pt=null,Ln=!1;function Si(t,e,n){for(n=n.child;n!==null;)xx(t,e,n),n=n.sibling}function xx(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:zt||rs(n,e);case 6:var i=Pt,r=Ln;Pt=null,Si(t,e,n),Pt=i,Ln=r,Pt!==null&&(Ln?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Ln?(t=Pt,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),va(t)):yc(Pt,n.stateNode));break;case 4:i=Pt,r=Ln,Pt=n.stateNode.containerInfo,Ln=!0,Si(t,e,n),Pt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Yu(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!zt&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,Si(t,e,n),zt=i):Si(t,e,n);break;default:Si(t,e,n)}}function cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hy),e.forEach(function(i){var r=Sy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Pt=o.stateNode,Ln=!1;break e;case 3:Pt=o.stateNode.containerInfo,Ln=!0;break e;case 4:Pt=o.stateNode.containerInfo,Ln=!0;break e}o=o.return}if(Pt===null)throw Error(ie(160));xx(s,a,r),Pt=null,Ln=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vx(e,t),e=e.sibling}function vx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),jn(t),i&4){try{ua(3,t,t.return),Hl(3,t)}catch(b){xt(t,t.return,b)}try{ua(5,t,t.return)}catch(b){xt(t,t.return,b)}}break;case 1:Nn(e,t),jn(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(Nn(e,t),jn(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{pa(r,"")}catch(b){xt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&zm(r,s),Su(o,a);var u=Su(o,s);for(a=0;a<c.length;a+=2){var f=c[a],p=c[a+1];f==="style"?Wm(r,p):f==="dangerouslySetInnerHTML"?Vm(r,p):f==="children"?pa(r,p):th(r,f,p,u)}switch(o){case"input":xu(r,s);break;case"textarea":jm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?os(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?os(r,!!s.multiple,s.defaultValue,!0):os(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ma]=s}catch(b){xt(t,t.return,b)}}break;case 6:if(Nn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){xt(t,t.return,b)}}break;case 3:if(Nn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(b){xt(t,t.return,b)}break;case 4:Nn(e,t),jn(t);break;case 13:Nn(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Lh=yt())),i&4&&cp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||f,Nn(e,t),zt=u):Nn(e,t),jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(p=me=f;me!==null;){switch(h=me,g=h.child,h.tag){case 0:case 11:case 14:case 15:ua(4,h,h.return);break;case 1:rs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(b){xt(i,n,b)}}break;case 5:rs(h,h.return);break;case 22:if(h.memoizedState!==null){dp(p);continue}}g!==null?(g.return=h,me=g):dp(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Gm("display",a))}catch(b){xt(t,t.return,b)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){xt(t,t.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Nn(e,t),jn(t),i&4&&cp(t);break;case 21:break;default:Nn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gx(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pa(r,""),i.flags&=-33);var s=lp(t);Zu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lp(t);Qu(t,o,a);break;default:throw Error(ie(161))}}catch(c){xt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function py(t,e,n){me=t,_x(t)}function _x(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||io;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||zt;o=io;var u=zt;if(io=a,(zt=c)&&!u)for(me=r;me!==null;)a=me,c=a.child,a.tag===22&&a.memoizedState!==null?hp(r):c!==null?(c.return=a,me=c):hp(r);for(;s!==null;)me=s,_x(s),s=s.sibling;me=r,io=o,zt=u}up(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):up(t)}}function up(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Hl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$f(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$f(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&va(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}zt||e.flags&512&&Ku(e)}catch(h){xt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function dp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function hp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(c){xt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){xt(e,r,c)}}var s=e.return;try{Ku(e)}catch(c){xt(e,s,c)}break;case 5:var a=e.return;try{Ku(e)}catch(c){xt(e,a,c)}}}catch(c){xt(e,e.return,c)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var my=Math.ceil,yl=_i.ReactCurrentDispatcher,Ph=_i.ReactCurrentOwner,wn=_i.ReactCurrentBatchConfig,qe=0,kt=null,Mt=null,Dt=0,un=0,ss=Qi(0),Et=0,Na=null,Er=0,Vl=0,Dh=0,da=null,Qt=null,Lh=0,Ms=1/0,si=null,bl=!1,Ju=null,ji=null,ro=!1,Ii=null,Sl=0,ha=0,ed=null,Vo=-1,Go=0;function Wt(){return qe&6?yt():Vo!==-1?Vo:Vo=yt()}function Hi(t){return t.mode&1?qe&2&&Dt!==0?Dt&-Dt:Z_.transition!==null?(Go===0&&(Go=ig()),Go):(t=it,t!==0||(t=window.event,t=t===void 0?16:ug(t.type)),t):1}function On(t,e,n,i){if(50<ha)throw ha=0,ed=null,Error(ie(185));Da(t,n,i),(!(qe&2)||t!==kt)&&(t===kt&&(!(qe&2)&&(Vl|=n),Et===4&&Pi(t,Dt)),nn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Ms=yt()+500,Ol&&Zi()))}function nn(t,e){var n=t.callbackNode;Z0(t,e);var i=sl(t,t===kt?Dt:0);if(i===0)n!==null&&bf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bf(n),e===1)t.tag===0?Q_(fp.bind(null,t)):Ng(fp.bind(null,t)),q_(function(){!(qe&6)&&Zi()}),n=null;else{switch(rg(i)){case 1:n=ah;break;case 4:n=tg;break;case 16:n=rl;break;case 536870912:n=ng;break;default:n=rl}n=Cx(n,yx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yx(t,e){if(Vo=-1,Go=0,qe&6)throw Error(ie(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=sl(t,t===kt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ml(t,i);else{e=i;var r=qe;qe|=2;var s=Sx();(kt!==t||Dt!==e)&&(si=null,Ms=yt()+500,yr(t,e));do try{vy();break}catch(o){bx(t,o)}while(!0);_h(),yl.current=s,qe=r,Mt!==null?e=0:(kt=null,Dt=0,e=Et)}if(e!==0){if(e===2&&(r=Cu(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=Na,yr(t,0),Pi(t,i),nn(t,yt()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!gy(r)&&(e=Ml(t,i),e===2&&(s=Cu(t),s!==0&&(i=s,e=td(t,s))),e===1))throw n=Na,yr(t,0),Pi(t,i),nn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:cr(t,Qt,si);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=Lh+500-yt(),10<e)){if(sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Iu(cr.bind(null,t,Qt,si),e);break}cr(t,Qt,si);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Fn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*my(i/1960))-i,10<i){t.timeoutHandle=Iu(cr.bind(null,t,Qt,si),i);break}cr(t,Qt,si);break;case 5:cr(t,Qt,si);break;default:throw Error(ie(329))}}}return nn(t,yt()),t.callbackNode===n?yx.bind(null,t):null}function td(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&nd(e)),t}function nd(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function gy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~Dh,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function fp(t){if(qe&6)throw Error(ie(327));hs();var e=sl(t,0);if(!(e&1))return nn(t,yt()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var i=Cu(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=Na,yr(t,0),Pi(t,e),nn(t,yt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,Qt,si),nn(t,yt()),null}function Ih(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Ms=yt()+500,Ol&&Zi())}}function Tr(t){Ii!==null&&Ii.tag===0&&!(qe&6)&&hs();var e=qe;qe|=1;var n=wn.transition,i=it;try{if(wn.transition=null,it=1,t)return t()}finally{it=i,wn.transition=n,qe=e,!(qe&6)&&Zi()}}function Uh(){un=ss.current,ut(ss)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,X_(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ul();break;case 3:bs(),ut(en),ut(jt),Eh();break;case 5:wh(i);break;case 4:bs();break;case 13:ut(ht);break;case 19:ut(ht);break;case 10:yh(i.type._context);break;case 22:case 23:Uh()}n=n.return}if(kt=t,Mt=t=Vi(t.current,null),Dt=un=e,Et=0,Na=null,Dh=Vl=Er=0,Qt=da=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}gr=null}return t}function bx(t,e){do{var n=Mt;try{if(_h(),zo.current=_l,vl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}vl=!1}if(wr=0,Nt=wt=ft=null,ca=!1,Ta=0,Ph.current=null,n===null||n.return===null){Et=1,Na=e,Mt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Dt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=ep(a);if(g!==null){g.flags&=-257,tp(g,a,o,s,e),g.mode&1&&Jf(s,u,e),e=g,c=u;var x=e.updateQueue;if(x===null){var b=new Set;b.add(c),e.updateQueue=b}else x.add(c);break e}else{if(!(e&1)){Jf(s,u,e),Bh();break e}c=Error(ie(426))}}else if(dt&&o.mode&1){var m=ep(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tp(m,a,o,s,e),xh(Ss(c,o));break e}}s=c=Ss(c,o),Et!==4&&(Et=2),da===null?da=[s]:da.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=rx(s,c,e);qf(s,d);break e;case 1:o=c;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ji===null||!ji.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=sx(s,o,e);qf(s,M);break e}}s=s.return}while(s!==null)}wx(n)}catch(k){e=k,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function Sx(){var t=yl.current;return yl.current=_l,t===null?_l:t}function Bh(){(Et===0||Et===3||Et===2)&&(Et=4),kt===null||!(Er&268435455)&&!(Vl&268435455)||Pi(kt,Dt)}function Ml(t,e){var n=qe;qe|=2;var i=Sx();(kt!==t||Dt!==e)&&(si=null,yr(t,e));do try{xy();break}catch(r){bx(t,r)}while(!0);if(_h(),qe=n,yl.current=i,Mt!==null)throw Error(ie(261));return kt=null,Dt=0,Et}function xy(){for(;Mt!==null;)Mx(Mt)}function vy(){for(;Mt!==null&&!V0();)Mx(Mt)}function Mx(t){var e=Tx(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?wx(t):Mt=e,Ph.current=null}function wx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dy(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,Mt=null;return}}else if(n=uy(n,e,un),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Et===0&&(Et=5)}function cr(t,e,n){var i=it,r=wn.transition;try{wn.transition=null,it=1,_y(t,e,n,i)}finally{wn.transition=r,it=i}return null}function _y(t,e,n,i){do hs();while(Ii!==null);if(qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(J0(t,s),t===kt&&(Mt=kt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,Cx(rl,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var a=it;it=1;var o=qe;qe|=4,Ph.current=null,fy(t,n),vx(n,t),O_(Du),al=!!Pu,Du=Pu=null,t.current=n,py(n),G0(),qe=o,it=a,wn.transition=s}else t.current=n;if(ro&&(ro=!1,Ii=t,Sl=r),s=t.pendingLanes,s===0&&(ji=null),q0(n.stateNode),nn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(bl)throw bl=!1,t=Ju,Ju=null,t;return Sl&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===ed?ha++:(ha=0,ed=t):ha=0,Zi(),null}function hs(){if(Ii!==null){var t=rg(Sl),e=wn.transition,n=it;try{if(wn.transition=null,it=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,Sl=0,qe&6)throw Error(ie(331));var r=qe;for(qe|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(me=u;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:ua(8,f,s)}var p=f.child;if(p!==null)p.return=f,me=p;else for(;me!==null;){f=me;var h=f.sibling,g=f.return;if(mx(f),f===u){me=null;break}if(h!==null){h.return=g,me=h;break}me=g}}}var x=s.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var m=b.sibling;b.sibling=null,b=m}while(b!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){a=me;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,me=_;else e:for(a=v;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Hl(9,o)}}catch(k){xt(o,o.return,k)}if(o===a){me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,me=M;break e}me=o.return}}if(qe=r,Zi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Ll,t)}catch{}i=!0}return i}finally{it=n,wn.transition=e}}return!1}function pp(t,e,n){e=Ss(n,e),e=rx(t,e,1),t=zi(t,e,1),e=Wt(),t!==null&&(Da(t,1,e),nn(t,e))}function xt(t,e,n){if(t.tag===3)pp(t,t,n);else for(;e!==null;){if(e.tag===3){pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=Ss(n,t),t=sx(e,t,1),e=zi(e,t,1),t=Wt(),e!==null&&(Da(e,1,t),nn(e,t));break}}e=e.return}}function yy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Dt&n)===n&&(Et===4||Et===3&&(Dt&130023424)===Dt&&500>yt()-Lh?yr(t,0):Dh|=n),nn(t,e)}function Ex(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=Wt();t=mi(t,e),t!==null&&(Da(t,e,n),nn(t,n))}function by(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ex(t,n)}function Sy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Ex(t,n)}var Tx;Tx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,cy(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,dt&&e.flags&1048576&&kg(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ho(t,e),t=e.pendingProps;var r=vs(e,jt.current);ds(e,n),r=Ch(null,e,i,t,r,n);var s=Ah();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sh(e),r.updater=jl,e.stateNode=r,r._reactInternals=e,Hu(e,i,t,n),e=Wu(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&mh(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ho(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=wy(i),t=Dn(i,t),r){case 0:e=Gu(null,e,i,t,n);break e;case 1:e=rp(null,e,i,t,n);break e;case 11:e=np(null,e,i,t,n);break e;case 14:e=ip(null,e,i,Dn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Gu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),rp(t,e,i,r,n);case 3:e:{if(cx(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ug(t,e),gl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ss(Error(ie(423)),e),e=sp(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(ie(424)),e),e=sp(t,e,i,n,r);break e}else for(dn=Oi(e.stateNode.containerInfo.firstChild),hn=e,dt=!0,In=null,n=Lg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=gi(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return Bg(e),t===null&&Ou(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Lu(i,r)?a=null:s!==null&&Lu(i,s)&&(e.flags|=32),lx(t,e),Gt(t,e,a,n),e.child;case 6:return t===null&&Ou(e),null;case 13:return ux(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ys(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),np(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,st(pl,i._currentValue),i._currentValue=a,s!==null)if(zn(s.value,a)){if(s.children===r.children&&!en.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=hi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),zu(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),zu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ds(e,n),r=En(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),ip(t,e,i,r,n);case 15:return ax(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Ho(t,e),e.tag=1,tn(i)?(t=!0,dl(e)):t=!1,ds(e,n),ix(e,i,r),Hu(e,i,r,n),Wu(null,e,i,!0,t,n);case 19:return dx(t,e,n);case 22:return ox(t,e,n)}throw Error(ie(156,e.tag))};function Cx(t,e){return eg(t,e)}function My(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new My(t,e,n,i)}function Fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wy(t){if(typeof t=="function")return Fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ih)return 11;if(t===rh)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Fh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Yr:return br(n.children,r,s,e);case nh:a=8,r|=8;break;case hu:return t=Sn(12,n,e,r|2),t.elementType=hu,t.lanes=s,t;case fu:return t=Sn(13,n,e,r),t.elementType=fu,t.lanes=s,t;case pu:return t=Sn(19,n,e,r),t.elementType=pu,t.lanes=s,t;case Bm:return Gl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Im:a=10;break e;case Um:a=9;break e;case ih:a=11;break e;case rh:a=14;break e;case Ni:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Sn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function Gl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=Bm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ac(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ey(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Oh(t,e,n,i,r,s,a,o,c){return t=new Ey(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sh(s),t}function Ty(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ax(t){if(!t)return qi;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(tn(n))return Ag(t,n,e)}return e}function Nx(t,e,n,i,r,s,a,o,c){return t=Oh(n,i,!0,t,r,s,a,o,c),t.context=Ax(null),n=t.current,i=Wt(),r=Hi(n),s=hi(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,Da(t,r,i),nn(t,i),t}function Wl(t,e,n,i){var r=e.current,s=Wt(),a=Hi(r);return n=Ax(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,a),t!==null&&(On(t,r,a,s),Oo(t,r,a)),a}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){mp(t,e),(t=t.alternate)&&mp(t,e)}function Cy(){return null}var kx=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}Xl.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Wl(t,e,null,null)};Xl.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Wl(null,t,null,null)}),e[pi]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=og();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ri.length&&e!==0&&e<Ri[n].priority;n++);Ri.splice(n,0,t),n===0&&cg(t)}};function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function Ay(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=wl(a);s.call(u)}}var a=Nx(e,i,t,0,null,!1,!1,"",gp);return t._reactRootContainer=a,t[pi]=a.current,ba(t.nodeType===8?t.parentNode:t),Tr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=wl(c);o.call(u)}}var c=Oh(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=c,t[pi]=c.current,ba(t.nodeType===8?t.parentNode:t),Tr(function(){Wl(e,c,n,i)}),c}function $l(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=wl(a);o.call(c)}}Wl(e,a,t,r)}else a=Ay(n,e,t,r,i);return wl(a)}sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(oh(e,n|1),nn(e,yt()),!(qe&6)&&(Ms=yt()+500,Zi()))}break;case 13:Tr(function(){var i=mi(t,1);if(i!==null){var r=Wt();On(i,t,1,r)}}),zh(t,1)}};lh=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Wt();On(e,t,134217728,n)}zh(t,134217728)}};ag=function(t){if(t.tag===13){var e=Hi(t),n=mi(t,e);if(n!==null){var i=Wt();On(n,t,e,i)}zh(t,e)}};og=function(){return it};lg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};wu=function(t,e,n){switch(e){case"input":if(xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fl(i);if(!r)throw Error(ie(90));Om(i),xu(i,r)}}}break;case"textarea":jm(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};$m=Ih;Ym=Tr;var Ny={usingClientEntryPoint:!1,Events:[Ia,Jr,Fl,Xm,qm,Ih]},Ws={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ky={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||Cy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{Ll=so.inject(ky),qn=so}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error(ie(200));return Ty(t,e,null,n)};pn.createRoot=function(t,e){if(!Hh(t))throw Error(ie(299));var n=!1,i="",r=kx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Oh(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,ba(t.nodeType===8?t.parentNode:t),new jh(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Zm(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Tr(t)};pn.hydrate=function(t,e,n){if(!ql(e))throw Error(ie(200));return $l(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Hh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=kx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Nx(e,null,t,1,n??null,r,!1,s,a),t[pi]=e.current,ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xl(e)};pn.render=function(t,e,n){if(!ql(e))throw Error(ie(200));return $l(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!ql(t))throw Error(ie(40));return t._reactRootContainer?(Tr(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};pn.unstable_batchedUpdates=Ih;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ql(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return $l(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function Rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rx)}catch(t){console.error(t)}}Rx(),Rm.exports=pn;var Ry=Rm.exports,xp=Ry;uu.createRoot=xp.createRoot,uu.hydrateRoot=xp.hydrateRoot;const Py={vi:{nav:{experience:"Trải nghiệm",getStarted:"Cách bắt đầu",builders:"Dành cho builder",faq:"FAQ",tryDemo:"Trải nghiệm demo"},hero:{statusBadge:"Bản demo • Solana Devnet",headline:`Gửi và nhận stablecoin.
Bắt đầu thật đơn giản.`,description:"N.E.D Wallet giúp bạn quản lý tài sản số qua những thao tác quen thuộc, cùng hướng dẫn để trải nghiệm lần đầu.",ctaPrimary:"Trải nghiệm demo",ctaSecondary:"Khám phá cách sử dụng",appBadge:"Màn hình ứng dụng N.E.D",illustrationTag:"Minh họa trải nghiệm",trustPill1:"Thao tác quen thuộc",trustPill2:"Solana Devnet (USDC)",trustPill3:"Thử nghiệm qua Expo"},marquee:{tag:"Mạng lưới & Đối tác đồng hành",badge:"Hệ sinh thái",scrollHint:"Lăn chuột hoặc kéo để trượt"},coreActions:{badge:"Thao tác cốt lõi",headline:"Đơn giản hóa quản lý stablecoin",receiveTitle:"Nhận",receiveDesc:"Chia sẻ thông tin để nhận tài sản.",sendTitle:"Chuyển",sendDesc:"Chọn người nhận và kiểm tra trước khi gửi.",trackTitle:"Theo dõi",trackDesc:"Xem số dư và lịch sử giao dịch."},sendFeature:{tag:"Tính năng chuyển",headline:"Chọn người nhận theo cách bạn quen.",description:"Sử dụng số điện thoại, mã QR hoặc địa chỉ ví để chọn người nhận. Kiểm tra thông tin trước khi xác nhận chuyển.",illustrationBadge:"Minh họa thao tác",illustrationNotice:"* Minh họa luồng thao tác mẫu; không kết nối ví thực tế hoặc mạng Mainnet.",modePhone:"Số điện thoại",modeQr:"Mã QR & Lắc chia tiền",modeWallet:"Địa chỉ ví Solana",modeShakeSplit:"Lắc chia tiền (Shake & Split)",modeLuckyCoin:"Phòng Lì Xì Tung Đồng Xu",recipientLabel:"Người nhận đã chọn",amountLabel:"Số lượng chuyển",amountPreset10:"10 USDC",amountPreset25:"25 USDC",amountPreset50:"50 USDC",step1Name:"1. Chọn phương thức",step2Name:"2. Nhập số tiền",step3Name:"3. Kiểm tra & Xác nhận",reviewNotice:"Xác nhận thông tin người nhận và số dư trước khi hoàn tất.",btnVerify:"Kiểm tra & Sẵn sàng gửi",statusVerified:"Thông tin hợp lệ trên Solana Devnet",mascotBubble:"Lắc máy cùng bạn bè trong 20m để chia hóa đơn on-chain siêu tốc!",showcaseTabs:{phone:"Chuyển qua SĐT",shake:"Shake & Split",coin:"Lì Xì Đồng Xu",hub:"Trung Tâm Chuyển"}},mascot:{heroGreeting:"Chào bạn! Mình là NED Teddy",heroCompanion:"Đồng hành trải nghiệm Web3 không cần Seedphrase!",sendTip:"Lắc máy để chia tiền hoặc vuốt tung đồng xu may mắn!",overviewTip:"Minh bạch từng khoản thu chi và hạn mức tháng!",demoTip:"Chỉ 30 giây để tạo ví và nhận định danh @tên.sol!",faqTip:"Có câu hỏi? Teddy ở đây để giải đáp cùng bạn!",finalTip:"Sẵn sàng trải nghiệm ví thế hệ mới trên Solana Devnet!",miniAppsTip:"Khám phá hệ sinh thái MiniApps: Tiện ích Web3 gói gọn trong 1 chạm!",buildersTip:"Cùng NED Teddy xây dựng tương lai thanh toán vi mô trên Solana!"},assetOverview:{tag:"Theo dõi tài sản",headline:"Số dư và giao dịch, trong một góc nhìn.",description:"Theo dõi số dư và xem lại lịch sử gửi, nhận ngay trong ứng dụng.",captionNote:"Chi tiết từ giao diện ứng dụng",disclaimerNotice:"Ảnh giao diện thể hiện chi tiết mẫu từ bản demo; không phản ánh số liệu hay cam kết dịch vụ thực tế của nền tảng.",balanceCardTitle:"Số dư tổng quan",balanceCardDesc:"Hiển thị tức thì tổng số dư USDC trên mạng Devnet.",recentCardTitle:"Giao dịch gần đây",recentCardDesc:"Kiểm tra nhanh các hoạt động chuyển và nhận theo thời gian thực."},demoGuide:{tag:"Bắt đầu nhanh",headline:"Bắt đầu cùng N.E.D qua ba bước.",subtitle:"Khám phá phiên bản thử nghiệm dễ dàng với sự hỗ trợ trực tiếp từ nhóm phát triển.",step1Num:"01",step1Title:"Nhận hướng dẫn",step1Desc:"Liên hệ nhóm phát triển để nhận thông tin trải nghiệm bản demo.",step2Num:"02",step2Title:"Mở qua Expo",step2Desc:"Làm theo hướng dẫn dành cho bản demo và thiết bị của bạn.",step3Num:"03",step3Title:"Khám phá thao tác",step3Desc:"Trải nghiệm các luồng ví với tài sản thử nghiệm trên Devnet.",contactCardTitle:"Thông tin tiếp nhận trải nghiệm demo",emailLabel:"Email liên hệ nhóm phát triển:",btnMailto:"Liên hệ nhận demo",btnCopy:"Sao chép email",btnCopied:"Đã sao chép email!",warningNotice:"Bản demo sử dụng môi trường thử nghiệm. Không gửi tài sản thật."},miniApps:{tag:"Định hướng mở rộng",statusBadge:"Đang phát triển",headline:"Thêm trải nghiệm, ngay trong N.E.D.",description:"N.E.D đang phát triển nền tảng mini-app, hướng tới việc cho phép các nhà phát triển đưa ứng dụng nhỏ vào bên trong ví.",diagramTitle:"Kiến trúc Module hóa",diagramSubtitle:"Các tiện ích bên thứ ba hoạt động trực tiếp bên trong ví",module1:"Dịch vụ & Tiện ích thường ngày",module2:"Trải nghiệm tương tác & Cộng đồng",module3:"Tích hợp thanh toán vi mô",cta:"Dành cho builder"},faq:{tag:"Giải đáp thắc mắc",headline:"Những điều bạn muốn biết.",q1:"Tôi chưa biết stablecoin thì có thể bắt đầu thế nào?",a1:"Stablecoin là tài sản số được thiết kế để bám theo giá trị tham chiếu (như USD). Bản thử nghiệm N.E.D sử dụng USDC trên Solana Devnet để bạn dễ dàng làm quen. Mục tiêu của N.E.D là giảm tối đa sự phức tạp bằng những thao tác thân thuộc, giúp bạn tiếp cận mà không cần trang bị kiến thức kỹ thuật chuyên sâu.",q2:"N.E.D có phải tài khoản ngân hàng không?",a2:"Không. N.E.D Wallet là ứng dụng ví tự quản lý tài sản số, không phải ngân hàng và không cung cấp dịch vụ tiền gửi ngân hàng. Tài sản trên ví là stablecoin số chạy trên mạng thử nghiệm blockchain, không được bảo hiểm tiền gửi như ngân hàng truyền thống.",q3:"Bản demo có sử dụng tài sản thật không?",a3:"Không. Bản demo hiện tại hoạt động hoàn toàn trên mạng Solana Devnet với tài sản thử nghiệm miễn phí. Bạn tuyệt đối không gửi tiền thật hoặc tài sản có giá trị thực tế vào bản demo này.",q4:"Tôi cần chuẩn bị gì để trải nghiệm qua Expo?",a4:"Bạn chỉ cần một điện thoại thông minh (iOS hoặc Android). Sau khi bạn gửi email liên hệ, nhóm phát triển sẽ cung cấp hướng dẫn cài đặt ứng dụng Expo và thông tin để mở bản thử nghiệm N.E.D Wallet trực tiếp trên thiết bị của bạn.",q5:"Mini-app hiện đã mở công khai chưa?",a5:"Chưa. Nền tảng mini-app đang trong giai đoạn định hướng kiến trúc và phát triển ban đầu. Chúng tôi đang mở cổng trao đổi với các builder quan tâm để lắng nghe ý tưởng và cùng phối hợp thử nghiệm khả năng tích hợp trong tương lai.",q6:"Builder liên hệ bằng cách nào?",a6:'Các nhà phát triển có thể tìm hiểu thêm tại trang Dành cho builder (/builders) hoặc gửi email trực tiếp tới tdat.100524@gmail.com với tiêu đề "N.E.D Wallet — Builder collaboration" để thảo luận về ý tưởng và phương án hợp tác.'},finalCta:{headline:"Khám phá N.E.D từ trải nghiệm đầu tiên.",description:"Liên hệ nhóm phát triển để nhận hướng dẫn dùng thử bản demo.",btnPrimary:"Liên hệ nhận demo",builderLink:"Bạn là builder? Trao đổi cùng chúng tôi."},footer:{description:"N.E.D Wallet là ứng dụng di động hỗ trợ quản lý, gửi và nhận stablecoin trên Solana Devnet qua những trải nghiệm thân thuộc.",quickLinks:"Điều hướng",contact:"Liên hệ",statusTag:"Bản demo trên Solana Devnet",disclaimer:"N.E.D Wallet hiện là sản phẩm thử nghiệm nội bộ trên mạng Solana Devnet. Đây không phải là dịch vụ tài chính hay ngân hàng được cấp phép thương mại. Vui lòng không gửi tài sản thực.",copyright:"© 2026 N.E.D Wallet. Đang phát triển."},builders:{backHome:"← Về trang chủ",badgeStatus:"Đang phát triển • Mời hợp tác",headline:"Mang ý tưởng của bạn vào N.E.D.",subtitle:"N.E.D đang phát triển nền tảng mini-app, hướng tới việc cho phép builder đưa trải nghiệm của mình vào bên trong ví.",cta:"Trao đổi hợp tác",btnCopied:"Đã sao chép email!",explainTitle:"Ứng dụng nhỏ bên trong ví",explainDesc:"Mini-app là các ứng dụng nhỏ do bên thứ ba phát triển, định hướng mở trực tiếp bên trong giao diện N.E.D. Người dùng không cần rời ví và có thể tận dụng hạ tầng thanh toán stablecoin tiện lợi. Khả năng tích hợp cụ thể sẽ được trao đổi và phối hợp chặt chẽ theo từng trường hợp sử dụng.",valuesTitle:"Giá trị nền tảng hướng tới",val1Title:"Người dùng có thêm trải nghiệm trong ví",val1Desc:"Cung cấp cho người dùng các tiện ích mở rộng phong phú mà không tạo rào cản phức tạp về công nghệ hay bảo mật.",val2Title:"Builder có thêm một kênh tiếp cận người dùng",val2Desc:"Giúp sản phẩm của builder tiếp cận trực tiếp tệp người dùng quan tâm đến thanh toán nhanh bằng stablecoin trên Solana.",journeyTitle:"Hành trình trao đổi hợp tác đề xuất",step1Title:"01 — Chia sẻ ý tưởng",step1Desc:"Gửi email chia sẻ về sản phẩm, đối tượng người dùng mục tiêu và ý tưởng trải nghiệm bạn muốn tích hợp vào ví.",step2Title:"02 — Trao đổi phạm vi",step2Desc:"Hai bên cùng trao đổi chi tiết về phạm vi chức năng, giao diện trải nghiệm và tính khả thi về mặt kỹ thuật.",step3Title:"03 — Phối hợp thử nghiệm",step3Desc:"Cùng phối hợp thử nghiệm bản dựng trên môi trường Devnet theo nội dung thống nhất trước khi mở rộng.",journeyNotice:"* Đây là hành trình trao đổi và đồng hành phát triển cùng nhóm, không phải quy trình tự động triển khai công khai.",ctaHeadline:"Sẵn sàng trao đổi cùng N.E.D?",ctaDesc:"Nền tảng đang trong giai đoạn phát triển tích cực. Chúng tôi rất mong được lắng nghe đóng góp và ý tưởng hợp tác từ cộng đồng builder.",ctaButton:"Gửi email hợp tác"}},en:{nav:{experience:"Experience",getStarted:"Get started",builders:"For builders",faq:"FAQ",tryDemo:"Try the demo"},hero:{statusBadge:"Demo • Solana Devnet",headline:`Send and receive stablecoins.
Start simple.`,description:"Manage digital assets through familiar actions, with guidance for your first experience.",ctaPrimary:"Try the demo",ctaSecondary:"See how it works",appBadge:"N.E.D Mobile Interface",illustrationTag:"Experience Illustration",trustPill1:"Familiar Interactions",trustPill2:"Solana Devnet (USDC)",trustPill3:"Expo Mobile Preview"},marquee:{tag:"Network & Ecosystem Partners",badge:"Ecosystem",scrollHint:"Scroll or drag to explore"},coreActions:{badge:"Core Actions",headline:"Simplifying Stablecoin Management",receiveTitle:"Receive",receiveDesc:"Share your details to receive assets.",sendTitle:"Send",sendDesc:"Choose a recipient and review before sending.",trackTitle:"Track",trackDesc:"View your balance and transaction history."},sendFeature:{tag:"Send Feature",headline:"Choose a recipient in a familiar way.",description:"Choose a recipient using a phone number, QR code, or wallet address. Review the details before confirming.",illustrationBadge:"Flow illustration",illustrationNotice:"* Sample flow illustration; does not connect to real wallets or Mainnet.",modePhone:"Phone number",modeQr:"QR & Shake & Split",modeWallet:"Solana Wallet",modeShakeSplit:"Shake & Split",modeLuckyCoin:"Lucky Coin Room",recipientLabel:"Selected Recipient",amountLabel:"Send Amount",amountPreset10:"10 USDC",amountPreset25:"25 USDC",amountPreset50:"50 USDC",step1Name:"1. Choose method",step2Name:"2. Enter amount",step3Name:"3. Review & confirm",reviewNotice:"Review recipient details and balance before finalizing the test transfer.",btnVerify:"Review & Ready to Send",statusVerified:"Details verified on Solana Devnet",mascotBubble:"Shake phones with friends within 20m to split group bills in seconds!",showcaseTabs:{phone:"Send by Phone",shake:"Shake & Split",coin:"Lucky Coin",hub:"Transfer Hub"}},mascot:{heroGreeting:"Hi there! I am NED Teddy",heroCompanion:"Your companion for seedphrase-less Web3 payments!",sendTip:"Shake to split bills or flip a lucky coin on-chain!",overviewTip:"Clear tracking of monthly cashflow and budget limits!",demoTip:"Takes only 30 seconds to claim your @handle.sol on Devnet!",faqTip:"Have questions? Teddy is here to help you out!",finalTip:"Ready to try next-gen stablecoin wallet on Solana Devnet!",miniAppsTip:"Explore the MiniApps ecosystem: Instant Web3 services in one tap!",buildersTip:"Build the future of micro-payments on Solana with NED Teddy!"},assetOverview:{tag:"Asset Overview",headline:"Your balance and activity, at a glance.",description:"Check your balance and review your sending and receiving activity in the app.",captionNote:"Detail from the app interface",disclaimerNotice:"Interface image shows sample details from the demo; not actual platform or user metrics.",balanceCardTitle:"Overview Balance",balanceCardDesc:"Instantly view test USDC balances on Solana Devnet.",recentCardTitle:"Recent Activity",recentCardDesc:"Quickly inspect your sending and receiving history in real time."},demoGuide:{tag:"Quick Start",headline:"Get started with N.E.D in three steps.",subtitle:"Explore the preview build easily with direct guidance from our development team.",step1Num:"01",step1Title:"Request access",step1Desc:"Contact the team to receive demo access information.",step2Num:"02",step2Title:"Open through Expo",step2Desc:"Follow the instructions provided for your device and build.",step3Num:"03",step3Title:"Explore the app",step3Desc:"Test the wallet flows with test assets on Devnet.",contactCardTitle:"Demo Onboarding Contact",emailLabel:"Direct team contact email:",btnMailto:"Request demo access",btnCopy:"Copy email",btnCopied:"Email copied!",warningNotice:"The demo runs in a test environment. Do not send real assets."},miniApps:{tag:"Extensibility Direction",statusBadge:"In development",headline:"More experiences, inside N.E.D.",description:"N.E.D is developing a mini-app platform that aims to bring third-party experiences into the wallet.",diagramTitle:"Modular Architecture",diagramSubtitle:"Third-party experiences running directly within the wallet",module1:"Everyday Utilities & Services",module2:"Interactive Community & Games",module3:"Micro-Payment Integrations",cta:"For builders"},faq:{tag:"FAQ",headline:"Questions before you start?",q1:"How can I get started if I'm new to stablecoins?",a1:"Stablecoins are digital assets designed to track a reference value (such as USD). The N.E.D demo utilizes test USDC on Solana Devnet so you can explore comfortably. N.E.D aims to minimize onboarding complexity with familiar interactions, without requiring deep technical knowledge.",q2:"Is N.E.D a bank account?",a2:"No. N.E.D Wallet is a self-custodial digital asset wallet application, not a bank, and does not offer bank deposit services. Assets within the wallet are digital stablecoins on a blockchain test network, and are not bank-insured deposits.",q3:"Does the demo use real assets?",a3:"No. The current demo runs strictly on Solana Devnet with free test assets. Do not send real funds or valuable real assets to this demo.",q4:"What do I need to prepare to try the demo via Expo?",a4:"All you need is a smartphone (iOS or Android). After you contact the team via email, we will provide installation steps for Expo and guidance to open the N.E.D Wallet test build directly on your device.",q5:"Are mini-apps publicly available yet?",a5:"Not yet. The mini-app platform is in early architectural development. We are actively engaging with interested builders to exchange ideas and explore future integration feasibility together.",q6:"How can builders get in touch?",a6:'Builders can learn more on the For Builders page (/builders) or reach out directly to tdat.100524@gmail.com with the subject "N.E.D Wallet — Builder collaboration" to discuss concepts and collaboration opportunities.'},finalCta:{headline:"Take your first look at N.E.D.",description:"Contact the team for guidance on trying the demo.",btnPrimary:"Request demo access",builderLink:"Building a mini-app? Let's talk."},footer:{description:"N.E.D Wallet is a mobile application for managing, sending, and receiving stablecoins on Solana Devnet through familiar interactions.",quickLinks:"Navigation",contact:"Contact",statusTag:"Solana Devnet Demo",disclaimer:"N.E.D Wallet is an internal test application operating on the Solana Devnet. It is not an authorized banking or commercial financial service. Please do not send real assets.",copyright:"© 2026 N.E.D Wallet. In active development."},builders:{backHome:"← Back to home",badgeStatus:"In Development • Open for Collaboration",headline:"Bring your ideas into N.E.D.",subtitle:"N.E.D is developing a mini-app platform that aims to bring third-party experiences into the wallet.",cta:"Discuss a collaboration",btnCopied:"Email copied!",explainTitle:"Third-Party Apps Inside the Wallet",explainDesc:"Mini-apps are third-party lightweight applications designed to open directly inside the N.E.D interface. Users never have to leave the wallet, leveraging smooth stablecoin transactions. Specific integration capabilities are discussed and coordinated directly with the team.",valuesTitle:"Platform Goals & Vision",val1Title:"Richer Experiences for Users",val1Desc:"Equipping users with varied everyday utilities without imposing technical or security friction.",val2Title:"Direct Distribution Channel for Builders",val2Desc:"Helping builder products tap directly into an active user base looking for fast stablecoin transactions on Solana.",journeyTitle:"Proposed Collaboration Journey",step1Title:"01 — Share your idea",step1Desc:"Send an email introducing your product, target audience, and the experience you wish to integrate into the wallet.",step2Title:"02 — Discuss scope",step2Desc:"Both teams discuss feature scope, user experience flows, and technical integration feasibility in detail.",step3Title:"03 — Coordinate testing",step3Desc:"Collaborate on test builds in the Devnet environment according to mutually agreed milestones.",journeyNotice:"* This is a collaborative dialogue and partner testing journey, not an automated self-serve deployment portal.",ctaHeadline:"Ready to build with N.E.D?",ctaDesc:"The platform is in active development. We look forward to receiving feedback and collaboration concepts from the builder community.",ctaButton:"Email for collaboration"}}},Px=Me.createContext(void 0),Dy=({children:t})=>{const[e,n]=Me.useState(()=>{try{const s=localStorage.getItem("ned_wallet_lang");if(s==="vi"||s==="en")return s}catch{}return"vi"}),i=s=>{n(s);try{localStorage.setItem("ned_wallet_lang",s)}catch{}};Me.useEffect(()=>{document.documentElement.lang=e,e==="vi"?document.title="N.E.D Wallet — Ví Web3 cho Stablecoin trên Solana Devnet":document.title="N.E.D Wallet — Simple Web3 Stablecoin Wallet on Solana Devnet"},[e]);const r={lang:e,setLang:i,t:Py[e]};return l.jsx(Px.Provider,{value:r,children:t})},Cn=()=>{const t=Me.useContext(Px);if(!t)throw new Error("useI18n must be used within an I18nProvider");return t};/**
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
 */const By=t=>{const e=Uy(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function kc(t){return t!=null}function Fy(t,e={}){var h,g;const n=e.attributeNames??{},i=x=>n[x]??x,r=t.size??t.width??tr.width,s=t.size??t.height??tr.height,a=((h=t.aliases)==null?void 0:h.filter(x=>typeof x=="string"&&x.trim()!=="").map(x=>`lucide-${x}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],c=((g=e.className)==null?void 0:g.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?id(...c):id("lucide",...o,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??tr["stroke-width"])*Number(t.size??t.width??tr.width)/Number(e.size??e.width??tr.width):e.strokeWidth??tr["stroke-width"];return["svg",{...Object.entries(tr).reduce((x,[b,m])=>(x[i(b)]=m,x),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&kc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&kc(e.width)&&{[i("width")]:e.width},..."height"in e&&kc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:f,...u&&{[i("class")]:u},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(x=>{const[b,m,d]=x,v=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return d?[b,v,d]:[b,v]})]}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Oy(t,e={}){return Fy(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},jy=Me.createContext({}),Hy=()=>Me.useContext(jy),Vy=Me.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:c,iconNode:u=[],icon:f={node:u,aliases:[],size:24},...p},h)=>{const{size:g=24,strokeWidth:x=2,absoluteStrokeWidth:b=!1,nonScalingStroke:m=!1,color:d="currentColor",className:v=""}=Hy()??{},_=!!c||zy(p),[M,k,A=[]]=Oy(f,{color:t??d,width:n??e??g,height:i??e??g,strokeWidth:r??x,absoluteStrokeWidth:s??b,nonScalingStroke:a??m,className:id(v,o),hasA11yProp:_,attributes:p});return Me.createElement(M,{ref:h,...k},[...A.map(([T,N])=>Me.createElement(T,N)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ge(t,e=[],n=[]){const i=typeof t=="string"?Iy(t,e,n):t,r=Me.forwardRef(({className:s,...a},o)=>Me.createElement(Vy,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=By(i.name)),r}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx={name:"arrow-down-left",size:24,node:[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]};Dx.node;const rd=Ge(Dx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};Lx.node;const Gy=Ge(Lx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Ix.node;const Cr=Ge(Ix);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};Ux.node;const Xo=Ge(Ux);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx={name:"blocks",size:24,node:[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]]};Bx.node;const Fx=Ge(Bx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox={name:"chart-pie",size:24,node:[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],aliases:["pie-chart"]};Ox.node;const Wy=Ge(Ox);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};zx.node;const ws=Ge(zx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};jx.node;const Xy=Ge(jx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Hx.node;const Vx=Ge(Hx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};Gx.node;const Wx=Ge(Gx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Xx.node;const ur=Ge(Xx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};qx.node;const qy=Ge(qx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};$x.node;const $y=Ge($x);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};Yx.node;const Yy=Ge(Yx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Kx.node;const El=Ge(Kx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Qx.node;const Ky=Ge(Qx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Zx.node;const Qy=Ge(Zx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};Jx.node;const Zy=Ge(Jx);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};ev.node;const Jy=Ge(ev);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};tv.node;const eb=Ge(tv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};nv.node;const ka=Ge(nv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};iv.node;const tb=Ge(iv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};rv.node;const sd=Ge(rv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv={name:"qr-code",size:24,node:[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]};sv.node;const av=Ge(sv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};ov.node;const nb=Ge(ov);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};lv.node;const ib=Ge(lv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};cv.node;const ad=Ge(cv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};uv.node;const rb=Ge(uv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};dv.node;const sb=Ge(dv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};hv.node;const xi=Ge(hv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};fv.node;const ab=Ge(fv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};pv.node;const ob=Ge(pv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv={name:"wallet",size:24,node:[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]};mv.node;const fs=Ge(mv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};gv.node;const xv=Ge(gv),Ee={productName:"N.E.D Wallet",contactEmail:"tdat.100524@gmail.com",network:"Solana Devnet",platform:"Expo (iOS & Android)",logoAsset:"/assets/ned-logo.jpg",appLogoAsset:"/assets/brand/logo_app.jpg",brandNedLogo:"/assets/brand/logo_ned_wallet.jpg",brandColors:"/assets/brand/brand_colors.jpg",mascots:{waving:"/assets/brand/mascot/waving.png",happy:"/assets/brand/mascot/happy.png",proud:"/assets/brand/mascot/proud.png",exciting:"/assets/brand/mascot/exciting.png",curious:"/assets/brand/mascot/curious.png",thinking:"/assets/brand/mascot/thinking.png",laughing:"/assets/brand/mascot/laughing.png",surprised:"/assets/brand/mascot/surprised.png",sleepy:"/assets/brand/mascot/sleepy.png",scared:"/assets/brand/mascot/scared.png",sad:"/assets/brand/mascot/sad.png",angry:"/assets/brand/mascot/angry.png",confused:"/assets/brand/mascot/confused.png",crying:"/assets/brand/mascot/crying.png",embarrassed:"/assets/brand/mascot/embarrassed.png",frustrated:"/assets/brand/mascot/frustrated.png"},screenshots:{dashboardHome:"/assets/screenshots/app_dashboard_home.png",analyticsCashflow:"/assets/screenshots/app_analytics_cashflow.png",transferCenter:"/assets/screenshots/app_transfer_center.png",transferPhone:"/assets/screenshots/app_transfer_phone.png",shakeSplit:"/assets/screenshots/app_shake_split.png",luckyCoin:"/assets/screenshots/app_lucky_coin.png",miniappsHub:"/assets/screenshots/app_miniapps_hub.png",login:"/assets/screenshots/app_login.png",register:"/assets/screenshots/app_register.png",emailOtp:"/assets/screenshots/app_email_otp.png",phoneSecurity:"/assets/screenshots/app_phone_security.png",phoneOtp:"/assets/screenshots/app_phone_otp.png",handleClaim:"/assets/screenshots/app_handle_claim.png",welcomeSuccess:"/assets/screenshots/app_welcome_success.png"},homeScreenshotAsset:"/assets/screenshots/app_dashboard_home.png",sendScreenshotAsset:"/assets/screenshots/app_transfer_phone.png",demoMailSubject:"N.E.D Wallet — Demo request",demoMailBodyVi:`Chào team N.E.D,

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

Looking forward to discussing further with the team!`,demoUrl:"",stablecoinToken:"USDC (Solana Devnet)",supportedIdentities:["Số điện thoại / Phone number","Mã QR / QR Code","Địa chỉ ví / Wallet address"]},od=({className:t="h-10",isDark:e=!0})=>l.jsxs("div",{className:`inline-flex items-center gap-2.5 select-none ${t}`,children:[l.jsxs("div",{className:"relative w-10 h-10 rounded-xl bg-brand-deepPurple border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center overflow-hidden transition-transform hover:-rotate-3 flex-shrink-0",children:[l.jsx("img",{src:Ee.logoAsset,alt:"N.E.D Logo",className:"w-full h-full object-cover",onError:n=>{n.currentTarget.style.display="none"}}),l.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",className:"w-7 h-7 absolute inset-0 m-auto pointer-events-none -z-10",children:[l.jsx("path",{d:"M12 28L24 8L36 28H12Z",fill:"#B497F0"}),l.jsx("path",{d:"M4 22L16 22L12 28L0 28Z",fill:"#B497F0",opacity:"0.8"})]})]}),l.jsxs("div",{className:"flex flex-col text-left",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:`font-black text-xl tracking-wider leading-none ${e?"text-brand-offWhite":"text-brand-inkBlack"}`,children:"N.E.D"}),l.jsx("span",{className:"px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest bg-brand-cyan text-brand-inkBlack border border-brand-inkBlack rounded shadow-brutal-xs",children:"DEVNET"})]}),l.jsx("span",{className:`text-[10px] font-extrabold uppercase tracking-widest leading-none mt-1 ${e?"text-brand-lavender":"text-stone-600"}`,children:"Wallet"})]})]}),lb=({currentPath:t,onNavigate:e})=>{const{t:n,lang:i,setLang:r}=Cn(),[s,a]=Me.useState(!1),o=Me.useRef(null),c=Me.useRef(null);Me.useEffect(()=>{const f=p=>{p.key==="Escape"&&s&&a(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[s]),Me.useEffect(()=>{s&&c.current&&c.current.focus()},[s]);const u=f=>{if(a(!1),f.startsWith("#"))if(t!=="/")e("/"),setTimeout(()=>{const p=document.querySelector(f);p==null||p.scrollIntoView({behavior:"smooth"})},100);else{const p=document.querySelector(f);p==null||p.scrollIntoView({behavior:"smooth"})}else e(f),window.scrollTo({top:0,behavior:"smooth"})};return l.jsxs("header",{className:"sticky top-0 z-50 w-full bg-brand-deepPurple/95 border-b-3 border-brand-inkBlack backdrop-blur-none px-4 sm:px-6 lg:px-8 py-3 transition-colors",children:[l.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-4",children:[l.jsx("button",{onClick:()=>u("/"),className:"focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg p-1 text-left flex items-center","aria-label":"N.E.D Wallet Home",children:l.jsx(od,{isDark:!0})}),l.jsxs("nav",{className:"hidden md:flex items-center gap-1 lg:gap-2","aria-label":"Main Navigation",children:[l.jsx("button",{onClick:()=>u("#experience"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.experience}),l.jsx("button",{onClick:()=>u("#demo"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.getStarted}),l.jsx("button",{onClick:()=>u("/builders"),className:`px-3 py-1.5 text-sm font-bold rounded-lg transition-colors border-2 ${t==="/builders"?"bg-brand-lavender text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs":"text-brand-offWhite border-transparent hover:border-brand-lavender/50"}`,children:n.nav.builders}),l.jsx("button",{onClick:()=>u("#faq"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.faq})]}),l.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[l.jsxs("div",{className:"flex items-center bg-brand-darkSurface border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[l.jsx("button",{onClick:()=>r("vi"),className:`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${i==="vi"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-300 hover:text-white"}`,"aria-label":"Chuyển sang Tiếng Việt","aria-pressed":i==="vi",children:"VI"}),l.jsx("button",{onClick:()=>r("en"),className:`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${i==="en"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-300 hover:text-white"}`,"aria-label":"Switch to English","aria-pressed":i==="en",children:"EN"})]}),l.jsxs("button",{onClick:()=>u("#demo"),className:"btn-brutal-primary px-4 py-2 rounded-xl text-sm font-black flex items-center gap-1.5",children:[l.jsx("span",{children:n.nav.tryDemo}),l.jsx(Cr,{className:"w-4 h-4"})]})]}),l.jsxs("div",{className:"flex items-center gap-2 md:hidden",children:[l.jsxs("button",{onClick:()=>r(i==="vi"?"en":"vi"),className:"px-2.5 py-1 text-xs font-black bg-brand-darkSurface border-2 border-brand-inkBlack text-brand-offWhite rounded-lg shadow-brutal-xs flex items-center gap-1","aria-label":"Toggle language",children:[l.jsx(Zy,{className:"w-3.5 h-3.5 text-brand-cyan"}),l.jsx("span",{children:i.toUpperCase()})]}),l.jsx("button",{onClick:()=>a(!0),className:"p-2 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs","aria-label":"Open Navigation Menu","aria-expanded":s,children:l.jsx(tb,{className:"w-5 h-5"})})]})]}),s&&l.jsx("div",{className:"fixed inset-0 z-50 bg-brand-deepPurple/80 backdrop-blur-sm flex justify-end md:hidden animate-in fade-in",onClick:()=>a(!1),children:l.jsxs("div",{ref:o,className:"w-[85%] max-w-sm h-full bg-brand-warmCream border-l-4 border-brand-inkBlack p-6 flex flex-col justify-between shadow-brutal-xl overflow-y-auto",onClick:f=>f.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Mobile Navigation",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 border-b-2 border-brand-inkBlack mb-6",children:[l.jsx(od,{isDark:!1}),l.jsx("button",{ref:c,onClick:()=>a(!1),className:"p-2 bg-white border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs hover:bg-brand-paleYellow","aria-label":"Close menu",children:l.jsx(xv,{className:"w-5 h-5 text-brand-inkBlack"})})]}),l.jsxs("nav",{className:"flex flex-col gap-3",children:[l.jsx("button",{onClick:()=>u("#experience"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.experience}),l.jsx("button",{onClick:()=>u("#demo"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.getStarted}),l.jsx("button",{onClick:()=>u("/builders"),className:`w-full text-left py-3 px-4 border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs ${t==="/builders"?"bg-brand-lavender":"bg-white hover:bg-brand-lavender/30"}`,children:n.nav.builders}),l.jsx("button",{onClick:()=>u("#faq"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.faq})]})]}),l.jsxs("div",{className:"pt-6 border-t-2 border-brand-inkBlack flex flex-col gap-4",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-xs font-black uppercase text-stone-600",children:"Ngôn ngữ / Language:"}),l.jsxs("div",{className:"flex bg-white border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[l.jsx("button",{onClick:()=>r("vi"),className:`px-3 py-1 text-xs font-black rounded-lg ${i==="vi"?"bg-brand-lime border border-brand-inkBlack":"text-stone-600"}`,children:"VI"}),l.jsx("button",{onClick:()=>r("en"),className:`px-3 py-1 text-xs font-black rounded-lg ${i==="en"?"bg-brand-lime border border-brand-inkBlack":"text-stone-600"}`,children:"EN"})]})]}),l.jsxs("button",{onClick:()=>u("#demo"),className:"w-full py-3 bg-brand-lavender text-brand-inkBlack border-3 border-brand-inkBlack rounded-xl font-black text-sm shadow-brutal flex items-center justify-center gap-2",children:[l.jsx("span",{children:n.nav.tryDemo}),l.jsx(Cr,{className:"w-4 h-4"})]})]})]})})]})},Be=({children:t,animation:e="fade-up",delay:n=0,className:i="",threshold:r=.08})=>{const[s,a]=Me.useState(!1),o=Me.useRef(null);Me.useEffect(()=>{if(typeof window<"u"&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window))){a(!0);return}const u=o.current;if(!u)return;const f=u.getBoundingClientRect();if(f.top<window.innerHeight&&f.bottom>0){a(!0);return}const h=new IntersectionObserver(([g])=>{g.isIntersecting&&(a(!0),h.unobserve(u))},{threshold:r,rootMargin:"0px 0px -20px 0px"});return h.observe(u),()=>{h.disconnect()}},[r]);const c=()=>{switch(e){case"pop":return"reveal-pop";case"slide-left":return"reveal-slide-left";case"slide-right":return"reveal-slide-right";case"fade-up":default:return"reveal-fade-up"}};return l.jsx("div",{ref:o,style:{transitionDelay:`${n}ms`},className:`reveal-item ${c()} ${s?"reveal-visible":""} ${i}`,children:t})},cb=({onNavigate:t})=>{const{t:e,lang:n,setLang:i}=Cn(),r=s=>{if(s.startsWith("#")){const a=document.querySelector(s);a?a.scrollIntoView({behavior:"smooth"}):(t("/"),setTimeout(()=>{var o;(o=document.querySelector(s))==null||o.scrollIntoView({behavior:"smooth"})},120))}else t(s),window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("footer",{className:"w-full bg-brand-deepPurple text-brand-offWhite border-t-4 border-brand-inkBlack py-12 sm:py-16 px-4 sm:px-6 lg:px-8 select-none",children:l.jsx("div",{className:"max-w-7xl mx-auto",children:l.jsxs(Be,{animation:"fade-up",delay:0,children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-brand-lavender/20",children:[l.jsxs("div",{className:"md:col-span-5 flex flex-col items-start",children:[l.jsx("button",{onClick:()=>r("/"),className:"mb-4 text-left","aria-label":"N.E.D Wallet Home",children:l.jsx(od,{isDark:!0})}),l.jsx("p",{className:"text-sm font-medium text-stone-300 max-w-md leading-relaxed mb-4",children:e.footer.description}),l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-brand-darkSurface border border-brand-lavender rounded-lg text-xs font-black text-brand-lime",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-pulse"}),l.jsx("span",{children:e.footer.statusTag})]})]}),l.jsxs("div",{className:"md:col-span-3 flex flex-col gap-3",children:[l.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-brand-lavender",children:e.footer.quickLinks}),l.jsxs("nav",{className:"flex flex-col gap-2 text-sm font-bold text-stone-300",children:[l.jsx("button",{onClick:()=>r("#experience"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.experience}),l.jsx("button",{onClick:()=>r("#send"),className:"text-left hover:text-white transition-colors cursor-pointer",children:"Chuyển stablecoin"}),l.jsx("button",{onClick:()=>r("#overview"),className:"text-left hover:text-white transition-colors cursor-pointer",children:"Tổng quan tài sản"}),l.jsx("button",{onClick:()=>r("#demo"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.getStarted}),l.jsx("button",{onClick:()=>r("/builders"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.builders}),l.jsx("button",{onClick:()=>r("#faq"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.faq})]})]}),l.jsxs("div",{className:"md:col-span-4 flex flex-col gap-4",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-brand-lavender mb-2",children:e.footer.contact}),l.jsx("div",{className:"text-sm font-bold text-stone-300 mb-1",children:"Email nhóm phát triển:"}),l.jsx("a",{href:`mailto:${Ee.contactEmail}`,className:"text-sm font-black text-brand-cyan hover:underline break-all",children:Ee.contactEmail}),l.jsx("div",{className:"text-xs text-stone-400 font-medium mt-1",children:"Phản hồi hướng dẫn tiếp cận bản demo trong vòng 24 giờ làm việc."})]}),l.jsxs("div",{className:"pt-2",children:[l.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-400 mb-2",children:"Ngôn ngữ / Language:"}),l.jsxs("div",{className:"inline-flex bg-brand-darkSurface border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[l.jsx("button",{onClick:()=>i("vi"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all ${n==="vi"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-400 hover:text-white"}`,children:"Tiếng Việt"}),l.jsx("button",{onClick:()=>i("en"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all ${n==="en"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-400 hover:text-white"}`,children:"English"})]})]})]})]}),l.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-stone-400",children:[l.jsx("p",{className:"max-w-3xl leading-relaxed",children:e.footer.disclaimer}),l.jsx("div",{className:"text-stone-500 flex-shrink-0",children:e.footer.copyright})]})]})})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="169",ub=0,vp=1,db=2,vv=1,hb=2,ri=3,$i=0,rn=1,oi=2,Gi=0,ps=1,_p=2,yp=3,bp=4,fb=5,fr=100,pb=101,mb=102,gb=103,xb=104,vb=200,_b=201,yb=202,bb=203,ld=204,cd=205,Sb=206,Mb=207,wb=208,Eb=209,Tb=210,Cb=211,Ab=212,Nb=213,kb=214,ud=0,dd=1,hd=2,Es=3,fd=4,pd=5,md=6,gd=7,_v=0,Rb=1,Pb=2,Wi=0,Db=1,Lb=2,Ib=3,Ub=4,Bb=5,Fb=6,Ob=7,yv=300,Ts=301,Cs=302,xd=303,vd=304,Yl=306,_d=1e3,vr=1001,yd=1002,Mn=1003,zb=1004,ao=1005,Un=1006,Rc=1007,_r=1008,vi=1009,bv=1010,Sv=1011,Ra=1012,Gh=1013,Ar=1014,ui=1015,Ba=1016,Wh=1017,Xh=1018,As=1020,Mv=35902,wv=1021,Ev=1022,Bn=1023,Tv=1024,Cv=1025,ms=1026,Ns=1027,Av=1028,qh=1029,Nv=1030,$h=1031,Yh=1033,qo=33776,$o=33777,Yo=33778,Ko=33779,bd=35840,Sd=35841,Md=35842,wd=35843,Ed=36196,Td=37492,Cd=37496,Ad=37808,Nd=37809,kd=37810,Rd=37811,Pd=37812,Dd=37813,Ld=37814,Id=37815,Ud=37816,Bd=37817,Fd=37818,Od=37819,zd=37820,jd=37821,Qo=36492,Hd=36494,Vd=36495,kv=36283,Gd=36284,Wd=36285,Xd=36286,jb=3200,Hb=3201,Rv=0,Vb=1,Di="",Vn="srgb",Ji="srgb-linear",Kh="display-p3",Kl="display-p3-linear",Tl="linear",ct="srgb",Cl="rec709",Al="p3",Lr=7680,Sp=519,Gb=512,Wb=513,Xb=514,Pv=515,qb=516,$b=517,Yb=518,Kb=519,Mp=35044,wp="300 es",di=2e3,Nl=2001;class Ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,qd=180/Math.PI;function Fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function Qb(t,e){return(t%e+e)%e}function Pc(t,e,n){return(1-n)*t+n*e}function Xs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,a,o,c,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],f=i[4],p=i[7],h=i[2],g=i[5],x=i[8],b=r[0],m=r[3],d=r[6],v=r[1],_=r[4],M=r[7],k=r[2],A=r[5],T=r[8];return s[0]=a*b+o*v+c*k,s[3]=a*m+o*_+c*A,s[6]=a*d+o*M+c*T,s[1]=u*b+f*v+p*k,s[4]=u*m+f*_+p*A,s[7]=u*d+f*M+p*T,s[2]=h*b+g*v+x*k,s[5]=h*m+g*_+x*A,s[8]=h*d+g*M+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],p=f*a-o*u,h=o*c-f*s,g=u*s-a*c,x=n*p+i*h+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=p*b,e[1]=(r*u-f*i)*b,e[2]=(o*i-r*a)*b,e[3]=h*b,e[4]=(f*n-r*c)*b,e[5]=(r*s-o*n)*b,e[6]=g*b,e[7]=(i*c-u*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Dc.makeScale(e,n)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new Ue;function Dv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Zb(){const t=kl("canvas");return t.style.display="block",t}const Ep={};function Jo(t){t in Ep||(Ep[t]=!0,console.warn(t))}function Jb(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function eS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tp=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cp=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qs={[Ji]:{transfer:Tl,primaries:Cl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Vn]:{transfer:ct,primaries:Cl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Kl]:{transfer:Tl,primaries:Al,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Cp),fromReference:t=>t.applyMatrix3(Tp)},[Kh]:{transfer:ct,primaries:Al,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Cp),fromReference:t=>t.applyMatrix3(Tp).convertLinearToSRGB()}},nS=new Set([Ji,Kl]),Je={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!nS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qs[e].toReference,r=qs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return qs[t].primaries},getTransfer:function(t){return t===Di?Tl:qs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(qs[e].luminanceCoefficients)}};function gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class iS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=kl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(gs(n[i]/255)*255):n[i]=gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rS=0;class Lv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Fa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ic(r[a].image)):s.push(Ic(r[a]))}else s=Ic(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ic(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?iS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sS=0;class sn extends Ls{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=vr,r=vr,s=Un,a=_r,o=Bn,c=vi,u=sn.DEFAULT_ANISOTROPY,f=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Fa(),this.name="",this.source=new Lv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=yv;sn.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,n=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],f=c[4],p=c[8],h=c[1],g=c[5],x=c[9],b=c[2],m=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(p-b)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+b)<.1&&Math.abs(x+m)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(g+1)/2,k=(d+1)/2,A=(f+h)/4,T=(p+b)/4,N=(x+m)/4;return _>M&&_>k?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):M>k?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=N/r):k<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),i=T/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-x)*(m-x)+(p-b)*(p-b)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(p-b)/v,this.z=(h-f)/v,this.w=Math.acos((u+g+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aS extends Ls{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Lv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends aS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Iv extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],f=i[r+2],p=i[r+3];const h=s[a+0],g=s[a+1],x=s[a+2],b=s[a+3];if(o===0){e[n+0]=c,e[n+1]=u,e[n+2]=f,e[n+3]=p;return}if(o===1){e[n+0]=h,e[n+1]=g,e[n+2]=x,e[n+3]=b;return}if(p!==b||c!==h||u!==g||f!==x){let m=1-o;const d=c*h+u*g+f*x+p*b,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const k=Math.sqrt(_),A=Math.atan2(k,d*v);m=Math.sin(m*A)/k,o=Math.sin(o*A)/k}const M=o*v;if(c=c*m+h*M,u=u*m+g*M,f=f*m+x*M,p=p*m+b*M,m===1-o){const k=1/Math.sqrt(c*c+u*u+f*f+p*p);c*=k,u*=k,f*=k,p*=k}}e[n]=c,e[n+1]=u,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],f=i[r+3],p=s[a],h=s[a+1],g=s[a+2],x=s[a+3];return e[n]=o*x+f*p+c*g-u*h,e[n+1]=c*x+f*h+u*p-o*g,e[n+2]=u*x+f*g+o*h-c*p,e[n+3]=f*x-o*p-c*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),f=o(r/2),p=o(s/2),h=c(i/2),g=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=h*f*p+u*g*x,this._y=u*g*p-h*f*x,this._z=u*f*x+h*g*p,this._w=u*f*p-h*g*x;break;case"YXZ":this._x=h*f*p+u*g*x,this._y=u*g*p-h*f*x,this._z=u*f*x-h*g*p,this._w=u*f*p+h*g*x;break;case"ZXY":this._x=h*f*p-u*g*x,this._y=u*g*p+h*f*x,this._z=u*f*x+h*g*p,this._w=u*f*p-h*g*x;break;case"ZYX":this._x=h*f*p-u*g*x,this._y=u*g*p+h*f*x,this._z=u*f*x-h*g*p,this._w=u*f*p+h*g*x;break;case"YZX":this._x=h*f*p+u*g*x,this._y=u*g*p+h*f*x,this._z=u*f*x-h*g*p,this._w=u*f*p-h*g*x;break;case"XZY":this._x=h*f*p-u*g*x,this._y=u*g*p-h*f*x,this._z=u*f*x+h*g*p,this._w=u*f*p+h*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],f=n[6],p=n[10],h=i+o+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(f-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*c,this._y=r*f+a*c+s*o-i*u,this._z=s*f+a*u+i*c-r*o,this._w=a*f-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),f=Math.atan2(u,o),p=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ap.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-o*f,this.y=i+c*f+o*u-s*p,this.z=r+c*p+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uc=new B,Ap=new Oa;class za{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),lo.subVectors(this.max,$s),Ur.subVectors(e.a,$s),Br.subVectors(e.b,$s),Fr.subVectors(e.c,$s),Mi.subVectors(Br,Ur),wi.subVectors(Fr,Br),nr.subVectors(Ur,Fr);let n=[0,-Mi.z,Mi.y,0,-wi.z,wi.y,0,-nr.z,nr.y,Mi.z,0,-Mi.x,wi.z,0,-wi.x,nr.z,0,-nr.x,-Mi.y,Mi.x,0,-wi.y,wi.x,0,-nr.y,nr.x,0];return!Bc(n,Ur,Br,Fr,lo)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,Ur,Br,Fr,lo))?!1:(co.crossVectors(Mi,wi),n=[co.x,co.y,co.z],Bc(n,Ur,Br,Fr,lo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new B,new B,new B,new B,new B,new B,new B,new B],kn=new B,oo=new za,Ur=new B,Br=new B,Fr=new B,Mi=new B,wi=new B,nr=new B,$s=new B,lo=new B,co=new B,ir=new B;function Bc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ir.fromArray(t,s);const o=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),c=e.dot(ir),u=n.dot(ir),f=i.dot(ir);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const lS=new za,Ys=new B,Fc=new B;class Ql{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Fc)),this.expandByPoint(Ys.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new B,Oc=new B,uo=new B,Ei=new B,zc=new B,ho=new B,jc=new B;class Uv{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oc.copy(e).add(n).multiplyScalar(.5),uo.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(Oc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(uo),o=Ei.dot(this.direction),c=-Ei.dot(uo),u=Ei.lengthSq(),f=Math.abs(1-a*a);let p,h,g,x;if(f>0)if(p=a*c-o,h=a*o-c,x=s*f,p>=0)if(h>=-x)if(h<=x){const b=1/f;p*=b,h*=b,g=p*(p+a*h+2*o)+h*(a*p+h+2*c)+u}else h=s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+u;else h=-s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+u;else h<=-x?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-c),s),g=-p*p+h*(h+2*c)+u):h<=x?(p=0,h=Math.min(Math.max(-s,-c),s),g=h*(h+2*c)+u):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-c),s),g=-p*p+h*(h+2*c)+u);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Oc).addScaledVector(uo,h),g}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){zc.subVectors(n,e),ho.subVectors(i,e),jc.crossVectors(zc,ho);let a=this.direction.dot(jc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const c=o*this.direction.dot(ho.crossVectors(Ei,ho));if(c<0)return null;const u=o*this.direction.dot(zc.cross(Ei));if(u<0||c+u>a)return null;const f=-o*Ei.dot(jc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,a,o,c,u,f,p,h,g,x,b,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,f,p,h,g,x,b,m)}set(e,n,i,r,s,a,o,c,u,f,p,h,g,x,b,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=f,d[10]=p,d[14]=h,d[3]=g,d[7]=x,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),a=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,g=a*p,x=o*f,b=o*p;n[0]=c*f,n[4]=-c*p,n[8]=u,n[1]=g+x*u,n[5]=h-b*u,n[9]=-o*c,n[2]=b-h*u,n[6]=x+g*u,n[10]=a*c}else if(e.order==="YXZ"){const h=c*f,g=c*p,x=u*f,b=u*p;n[0]=h+b*o,n[4]=x*o-g,n[8]=a*u,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=g*o-x,n[6]=b+h*o,n[10]=a*c}else if(e.order==="ZXY"){const h=c*f,g=c*p,x=u*f,b=u*p;n[0]=h-b*o,n[4]=-a*p,n[8]=x+g*o,n[1]=g+x*o,n[5]=a*f,n[9]=b-h*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const h=a*f,g=a*p,x=o*f,b=o*p;n[0]=c*f,n[4]=x*u-g,n[8]=h*u+b,n[1]=c*p,n[5]=b*u+h,n[9]=g*u-x,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const h=a*c,g=a*u,x=o*c,b=o*u;n[0]=c*f,n[4]=b-h*p,n[8]=x*p+g,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=g*p+x,n[10]=h-b*p}else if(e.order==="XZY"){const h=a*c,g=a*u,x=o*c,b=o*u;n[0]=c*f,n[4]=-p,n[8]=u*f,n[1]=h*p+b,n[5]=a*f,n[9]=g*p-x,n[2]=x*p-g,n[6]=o*f,n[10]=b*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cS,e,uS)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ti.crossVectors(i,ln),Ti.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ti.crossVectors(i,ln)),Ti.normalize(),fo.crossVectors(ln,Ti),r[0]=Ti.x,r[4]=fo.x,r[8]=ln.x,r[1]=Ti.y,r[5]=fo.y,r[9]=ln.y,r[2]=Ti.z,r[6]=fo.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],f=i[1],p=i[5],h=i[9],g=i[13],x=i[2],b=i[6],m=i[10],d=i[14],v=i[3],_=i[7],M=i[11],k=i[15],A=r[0],T=r[4],N=r[8],W=r[12],y=r[1],E=r[5],V=r[9],z=r[13],X=r[2],J=r[6],j=r[10],Q=r[14],P=r[3],Y=r[7],K=r[11],ee=r[15];return s[0]=a*A+o*y+c*X+u*P,s[4]=a*T+o*E+c*J+u*Y,s[8]=a*N+o*V+c*j+u*K,s[12]=a*W+o*z+c*Q+u*ee,s[1]=f*A+p*y+h*X+g*P,s[5]=f*T+p*E+h*J+g*Y,s[9]=f*N+p*V+h*j+g*K,s[13]=f*W+p*z+h*Q+g*ee,s[2]=x*A+b*y+m*X+d*P,s[6]=x*T+b*E+m*J+d*Y,s[10]=x*N+b*V+m*j+d*K,s[14]=x*W+b*z+m*Q+d*ee,s[3]=v*A+_*y+M*X+k*P,s[7]=v*T+_*E+M*J+k*Y,s[11]=v*N+_*V+M*j+k*K,s[15]=v*W+_*z+M*Q+k*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],f=e[2],p=e[6],h=e[10],g=e[14],x=e[3],b=e[7],m=e[11],d=e[15];return x*(+s*c*p-r*u*p-s*o*h+i*u*h+r*o*g-i*c*g)+b*(+n*c*g-n*u*h+s*a*h-r*a*g+r*u*f-s*c*f)+m*(+n*u*p-n*o*g-s*a*p+i*a*g+s*o*f-i*u*f)+d*(-r*o*f-n*c*p+n*o*h+r*a*p-i*a*h+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],p=e[9],h=e[10],g=e[11],x=e[12],b=e[13],m=e[14],d=e[15],v=p*m*u-b*h*u+b*c*g-o*m*g-p*c*d+o*h*d,_=x*h*u-f*m*u-x*c*g+a*m*g+f*c*d-a*h*d,M=f*b*u-x*p*u+x*o*g-a*b*g-f*o*d+a*p*d,k=x*p*c-f*b*c-x*o*h+a*b*h+f*o*m-a*p*m,A=n*v+i*_+r*M+s*k;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(b*h*s-p*m*s-b*r*g+i*m*g+p*r*d-i*h*d)*T,e[2]=(o*m*s-b*c*s+b*r*u-i*m*u-o*r*d+i*c*d)*T,e[3]=(p*c*s-o*h*s-p*r*u+i*h*u+o*r*g-i*c*g)*T,e[4]=_*T,e[5]=(f*m*s-x*h*s+x*r*g-n*m*g-f*r*d+n*h*d)*T,e[6]=(x*c*s-a*m*s-x*r*u+n*m*u+a*r*d-n*c*d)*T,e[7]=(a*h*s-f*c*s+f*r*u-n*h*u-a*r*g+n*c*g)*T,e[8]=M*T,e[9]=(x*p*s-f*b*s-x*i*g+n*b*g+f*i*d-n*p*d)*T,e[10]=(a*b*s-x*o*s+x*i*u-n*b*u-a*i*d+n*o*d)*T,e[11]=(f*o*s-a*p*s-f*i*u+n*p*u+a*i*g-n*o*g)*T,e[12]=k*T,e[13]=(f*b*r-x*p*r+x*i*h-n*b*h-f*i*m+n*p*m)*T,e[14]=(x*o*r-a*b*r-x*i*c+n*b*c+a*i*m-n*o*m)*T,e[15]=(a*p*r-f*o*r+f*i*c-n*p*c-a*i*h+n*o*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,f*o+i,f*c-r*a,0,u*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,f=a+a,p=o+o,h=s*u,g=s*f,x=s*p,b=a*f,m=a*p,d=o*p,v=c*u,_=c*f,M=c*p,k=i.x,A=i.y,T=i.z;return r[0]=(1-(b+d))*k,r[1]=(g+M)*k,r[2]=(x-_)*k,r[3]=0,r[4]=(g-M)*A,r[5]=(1-(h+d))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(x+_)*T,r[9]=(m-v)*T,r[10]=(1-(h+b))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const a=Or.set(r[4],r[5],r[6]).length(),o=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const u=1/s,f=1/a,p=1/o;return Rn.elements[0]*=u,Rn.elements[1]*=u,Rn.elements[2]*=u,Rn.elements[4]*=f,Rn.elements[5]*=f,Rn.elements[6]*=f,Rn.elements[8]*=p,Rn.elements[9]*=p,Rn.elements[10]*=p,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=di){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let g,x;if(o===di)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Nl)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di){const c=this.elements,u=1/(n-e),f=1/(i-r),p=1/(a-s),h=(n+e)*u,g=(i+r)*f;let x,b;if(o===di)x=(a+s)*p,b=-2*p;else if(o===Nl)x=s*p,b=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=b,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new B,Rn=new pt,cS=new B(0,0,0),uS=new B(1,1,1),Ti=new B,fo=new B,ln=new B,Np=new pt,kp=new Oa;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],f=r[9],p=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kp.setFromEuler(this),this.setFromQuaternion(kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dS=0;const Rp=new B,zr=new Oa,ti=new pt,po=new B,Ks=new B,hS=new B,fS=new Oa,Pp=new B(1,0,0),Dp=new B(0,1,0),Lp=new B(0,0,1),Ip={type:"added"},pS={type:"removed"},jr={type:"childadded",child:null},Hc={type:"childremoved",child:null};class Lt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new B,n=new Qn,i=new Oa,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ue}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Pp,e)}rotateY(e){return this.rotateOnAxis(Dp,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,n){return Rp.copy(e).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pp,e)}translateY(e){return this.translateOnAxis(Dp,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?po.copy(e):po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Ks,po,this.up):ti.lookAt(po,Ks,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ti),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ip),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pS),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ip),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,hS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,fS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new B(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new B,ni=new B,Vc=new B,ii=new B,Hr=new B,Vr=new B,Up=new B,Gc=new B,Wc=new B,Xc=new B,qc=new vt,$c=new vt,Yc=new vt;class bn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ni.subVectors(i,n),Vc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ni),c=Pn.dot(Vc),u=ni.dot(ni),f=ni.dot(Vc),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(u*c-o*f)*h,x=(a*f-o*c)*h;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return qc.setScalar(0),$c.setScalar(0),Yc.setScalar(0),qc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qc,s.x),a.addScaledVector($c,s.y),a.addScaledVector(Yc,s.z),a}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ni.subVectors(e,n),Pn.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Pn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Hr.subVectors(r,i),Vr.subVectors(s,i),Gc.subVectors(e,i);const c=Hr.dot(Gc),u=Vr.dot(Gc);if(c<=0&&u<=0)return n.copy(i);Wc.subVectors(e,r);const f=Hr.dot(Wc),p=Vr.dot(Wc);if(f>=0&&p<=f)return n.copy(r);const h=c*p-f*u;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),n.copy(i).addScaledVector(Hr,a);Xc.subVectors(e,s);const g=Hr.dot(Xc),x=Vr.dot(Xc);if(x>=0&&g<=x)return n.copy(s);const b=g*u-c*x;if(b<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(Vr,o);const m=f*x-g*p;if(m<=0&&p-f>=0&&g-x>=0)return Up.subVectors(s,r),o=(p-f)/(p-f+(g-x)),n.copy(r).addScaledVector(Up,o);const d=1/(m+b+h);return a=b*d,o=h*d,n.copy(i).addScaledVector(Hr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Qb(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Kc(a,s,e+1/3),this.g=Kc(a,s,e),this.b=Kc(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=Fv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Je.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Zt(Ot.r*255,0,255))*65536+Math.round(Zt(Ot.g*255,0,255))*256+Math.round(Zt(Ot.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const f=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=f<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Vn){Je.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(mo);const i=Pc(Ci.h,mo.h,n),r=Pc(Ci.s,mo.s,n),s=Pc(Ci.l,mo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Xe;Xe.NAMES=Fv;let mS=0;class Is extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Fa(),this.name="",this.type="Material",this.blending=ps,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ld&&(i.blendSrc=this.blendSrc),this.blendDst!==cd&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ov extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=_v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new B,go=new et;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mp,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)go.fromBufferAttribute(this,n),go.applyMatrix3(e),this.setXY(n,go.x,go.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mp&&(e.usage=this.usage),e}}class zv extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jv extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kn extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gS=0;const xn=new pt,Qc=new Lt,Gr=new B,cn=new za,Qs=new za,At=new B;class yi extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dv(e)?jv:zv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(cn.min,Qs.min),cn.expandByPoint(At),At.addVectors(cn.max,Qs.max),cn.expandByPoint(At)):(cn.expandByPoint(Qs.min),cn.expandByPoint(Qs.max))}cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)At.fromBufferAttribute(o,u),c&&(Gr.fromBufferAttribute(e,u),At.add(Gr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new B,c[N]=new B;const u=new B,f=new B,p=new B,h=new et,g=new et,x=new et,b=new B,m=new B;function d(N,W,y){u.fromBufferAttribute(i,N),f.fromBufferAttribute(i,W),p.fromBufferAttribute(i,y),h.fromBufferAttribute(s,N),g.fromBufferAttribute(s,W),x.fromBufferAttribute(s,y),f.sub(u),p.sub(u),g.sub(h),x.sub(h);const E=1/(g.x*x.y-x.x*g.y);isFinite(E)&&(b.copy(f).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(E),m.copy(p).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(E),o[N].add(b),o[W].add(b),o[y].add(b),c[N].add(m),c[W].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,W=v.length;N<W;++N){const y=v[N],E=y.start,V=y.count;for(let z=E,X=E+V;z<X;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new B,M=new B,k=new B,A=new B;function T(N){k.fromBufferAttribute(r,N),A.copy(k);const W=o[N];_.copy(W),_.sub(k.multiplyScalar(k.dot(W))).normalize(),M.crossVectors(A,W);const E=M.dot(c[N])<0?-1:1;a.setXYZW(N,_.x,_.y,_.z,E)}for(let N=0,W=v.length;N<W;++N){const y=v[N],E=y.start,V=y.count;for(let z=E,X=E+V;z<X;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,o=new B,c=new B,u=new B,f=new B,p=new B;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,m),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,m),o.add(f),c.add(f),u.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,p=o.normalized,h=new u.constructor(c.length*f);let g=0,x=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?g=c[b]*o.data.stride+o.offset:g=c[b]*f;for(let d=0;d<f;d++)h[x++]=u[g++]}return new Yn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let f=0,p=u.length;f<p;f++){const h=u[f],g=e(h,i);c.push(g)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let p=0,h=u.length;p<h;p++){const g=u[p];f.push(g.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],p=s[u];for(let h=0,g=p.length;h<g;h++)f.push(p[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bp=new pt,rr=new Uv,xo=new Ql,Fp=new B,vo=new B,_o=new B,yo=new B,Zc=new B,bo=new B,Op=new B,So=new B;class Xn extends Lt{constructor(e=new yi,n=new Ov){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=o[c],p=s[c];f!==0&&(Zc.fromBufferAttribute(p,e),a?bo.addScaledVector(Zc,f):bo.addScaledVector(Zc.sub(n),f))}n.add(bo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(xo.containsPoint(rr.origin)===!1&&(rr.intersectSphere(xo,Fp)===null||rr.origin.distanceToSquared(Fp)>(e.far-e.near)**2))&&(Bp.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Bp),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=h.length;x<b;x++){const m=h[x],d=a[m.materialIndex],v=Math.max(m.start,g.start),_=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,k=_;M<k;M+=3){const A=o.getX(M),T=o.getX(M+1),N=o.getX(M+2);r=Mo(this,d,e,i,u,f,p,A,T,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),b=Math.min(o.count,g.start+g.count);for(let m=x,d=b;m<d;m+=3){const v=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);r=Mo(this,a,e,i,u,f,p,v,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,b=h.length;x<b;x++){const m=h[x],d=a[m.materialIndex],v=Math.max(m.start,g.start),_=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,k=_;M<k;M+=3){const A=M,T=M+1,N=M+2;r=Mo(this,d,e,i,u,f,p,A,T,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),b=Math.min(c.count,g.start+g.count);for(let m=x,d=b;m<d;m+=3){const v=m,_=m+1,M=m+2;r=Mo(this,a,e,i,u,f,p,v,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function xS(t,e,n,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===$i,o),c===null)return null;So.copy(o),So.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(So);return u<n.near||u>n.far?null:{distance:u,point:So.clone(),object:t}}function Mo(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,vo),t.getVertexPosition(c,_o),t.getVertexPosition(u,yo);const f=xS(t,e,n,i,vo,_o,yo,Op);if(f){const p=new B;bn.getBarycoord(Op,vo,_o,yo,p),r&&(f.uv=bn.getInterpolatedAttribute(r,o,c,u,p,new et)),s&&(f.uv1=bn.getInterpolatedAttribute(s,o,c,u,p,new et)),a&&(f.normal=bn.getInterpolatedAttribute(a,o,c,u,p,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:u,normal:new B,materialIndex:0};bn.getNormal(vo,_o,yo,h.normal),f.face=h,f.barycoord=p}return f}class Us extends yi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],f=[],p=[];let h=0,g=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Kn(u,3)),this.setAttribute("normal",new Kn(f,3)),this.setAttribute("uv",new Kn(p,2));function x(b,m,d,v,_,M,k,A,T,N,W){const y=M/T,E=k/N,V=M/2,z=k/2,X=A/2,J=T+1,j=N+1;let Q=0,P=0;const Y=new B;for(let K=0;K<j;K++){const ee=K*E-z;for(let pe=0;pe<J;pe++){const Oe=pe*y-V;Y[b]=Oe*v,Y[m]=ee*_,Y[d]=X,u.push(Y.x,Y.y,Y.z),Y[b]=0,Y[m]=0,Y[d]=A>0?1:-1,f.push(Y.x,Y.y,Y.z),p.push(pe/T),p.push(1-K/N),Q+=1}}for(let K=0;K<N;K++)for(let ee=0;ee<T;ee++){const pe=h+ee+J*K,Oe=h+ee+J*(K+1),G=h+(ee+1)+J*(K+1),te=h+(ee+1)+J*K;c.push(pe,Oe,te),c.push(Oe,G,te),P+=6}o.addGroup(g,P,W),g+=P,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function vS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Hv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const _S={clone:ks,merge:Vt};var yS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yS,this.fragmentShader=bS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=vS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Vv extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new B,zp=new et,jp=new et;class yn extends Vv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qd*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,zp,jp),n.subVectors(jp,zp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class SS extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new yn(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const o=new yn(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const c=new yn(Wr,Xr,e,n);c.layers=this.layers,this.add(c);const u=new yn(Wr,Xr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Gv extends sn{constructor(e,n,i,r,s,a,o,c,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,s,a,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class MS extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Us(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Gi});s.uniforms.tEquirect.value=n;const a=new Xn(r,s),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=Un),new SS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Jc=new B,wS=new B,ES=new Ue;class dr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jc.subVectors(i,n).cross(wS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ES.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Ql,wo=new B;class Qh{constructor(e=new dr,n=new dr,i=new dr,r=new dr,s=new dr,a=new dr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],f=r[5],p=r[6],h=r[7],g=r[8],x=r[9],b=r[10],m=r[11],d=r[12],v=r[13],_=r[14],M=r[15];if(i[0].setComponents(c-s,h-u,m-g,M-d).normalize(),i[1].setComponents(c+s,h+u,m+g,M+d).normalize(),i[2].setComponents(c+a,h+f,m+x,M+v).normalize(),i[3].setComponents(c-a,h-f,m-x,M-v).normalize(),i[4].setComponents(c-o,h-p,m-b,M-_).normalize(),n===di)i[5].setComponents(c+o,h+p,m+b,M+_).normalize();else if(n===Nl)i[5].setComponents(o,p,b,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function TS(t){const e=new WeakMap;function n(o,c){const u=o.array,f=o.usage,p=u.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,u,f),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const f=c.array,p=c.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,f);else{p.sort((g,x)=>g.start-x.start);let h=0;for(let g=1;g<p.length;g++){const x=p[h],b=p[g];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++h,p[h]=b)}p.length=h+1;for(let g=0,x=p.length;g<x;g++){const b=p[g];t.bufferSubData(u,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}class Zl extends yi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,f=c+1,p=e/o,h=n/c,g=[],x=[],b=[],m=[];for(let d=0;d<f;d++){const v=d*h-a;for(let _=0;_<u;_++){const M=_*p-s;x.push(M,-v,0),b.push(0,0,1),m.push(_/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const _=v+u*d,M=v+u*(d+1),k=v+1+u*(d+1),A=v+1+u*d;g.push(_,M,A),g.push(M,k,A)}this.setIndex(g),this.setAttribute("position",new Kn(x,3)),this.setAttribute("normal",new Kn(b,3)),this.setAttribute("uv",new Kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var CS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AS=`#ifdef USE_ALPHAHASH
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
#endif`,NS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DS=`#ifdef USE_AOMAP
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
#endif`,LS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IS=`#ifdef USE_BATCHING
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
#endif`,US=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zS=`#ifdef USE_IRIDESCENCE
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
#endif`,jS=`#ifdef USE_BUMPMAP
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
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,KS=`#define PI 3.141592653589793
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
} // validated`,QS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZS=`vec3 transformedNormal = objectNormal;
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
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i1="gl_FragColor = linearToOutputTexel( gl_FragColor );",r1=`
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
}`,s1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p1=`#ifdef USE_GRADIENTMAP
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
}`,m1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v1=`uniform bool receiveShadow;
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
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,y1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
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
#endif`,E1=`struct PhysicalMaterial {
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
}`,T1=`
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
#endif`,C1=`#if defined( RE_IndirectDiffuse )
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
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U1=`#if defined( USE_POINTS_UV )
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
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
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
#endif`,V1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y1=`#ifdef USE_NORMALMAP
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
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dM=`float getShadowMask() {
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
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fM=`#ifdef USE_SKINNING
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
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mM=`#ifdef USE_SKINNING
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
#endif`,gM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_M=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
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
#endif`,bM=`#ifdef USE_TRANSMISSION
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CM=`uniform sampler2D t2D;
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
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`#include <common>
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
}`,DM=`#if DEPTH_PACKING == 3200
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
}`,LM=`#define DISTANCE
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
}`,IM=`#define DISTANCE
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
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`uniform float scale;
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
}`,OM=`uniform vec3 diffuse;
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
}`,zM=`#include <common>
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
}`,jM=`uniform vec3 diffuse;
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
}`,HM=`#define LAMBERT
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
}`,VM=`#define LAMBERT
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
}`,GM=`#define MATCAP
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
}`,WM=`#define MATCAP
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
}`,XM=`#define NORMAL
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
}`,qM=`#define NORMAL
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
}`,$M=`#define PHONG
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
}`,YM=`#define PHONG
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
}`,KM=`#define STANDARD
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
}`,QM=`#define STANDARD
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
}`,ZM=`#define TOON
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
}`,JM=`#define TOON
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
}`,ew=`uniform float size;
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
}`,tw=`uniform vec3 diffuse;
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
}`,nw=`#include <common>
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
}`,iw=`uniform vec3 color;
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
}`,rw=`uniform float rotation;
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
}`,sw=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:CS,alphahash_pars_fragment:AS,alphamap_fragment:NS,alphamap_pars_fragment:kS,alphatest_fragment:RS,alphatest_pars_fragment:PS,aomap_fragment:DS,aomap_pars_fragment:LS,batching_pars_vertex:IS,batching_vertex:US,begin_vertex:BS,beginnormal_vertex:FS,bsdfs:OS,iridescence_fragment:zS,bumpmap_pars_fragment:jS,clipping_planes_fragment:HS,clipping_planes_pars_fragment:VS,clipping_planes_pars_vertex:GS,clipping_planes_vertex:WS,color_fragment:XS,color_pars_fragment:qS,color_pars_vertex:$S,color_vertex:YS,common:KS,cube_uv_reflection_fragment:QS,defaultnormal_vertex:ZS,displacementmap_pars_vertex:JS,displacementmap_vertex:e1,emissivemap_fragment:t1,emissivemap_pars_fragment:n1,colorspace_fragment:i1,colorspace_pars_fragment:r1,envmap_fragment:s1,envmap_common_pars_fragment:a1,envmap_pars_fragment:o1,envmap_pars_vertex:l1,envmap_physical_pars_fragment:_1,envmap_vertex:c1,fog_vertex:u1,fog_pars_vertex:d1,fog_fragment:h1,fog_pars_fragment:f1,gradientmap_pars_fragment:p1,lightmap_pars_fragment:m1,lights_lambert_fragment:g1,lights_lambert_pars_fragment:x1,lights_pars_begin:v1,lights_toon_fragment:y1,lights_toon_pars_fragment:b1,lights_phong_fragment:S1,lights_phong_pars_fragment:M1,lights_physical_fragment:w1,lights_physical_pars_fragment:E1,lights_fragment_begin:T1,lights_fragment_maps:C1,lights_fragment_end:A1,logdepthbuf_fragment:N1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:P1,map_fragment:D1,map_pars_fragment:L1,map_particle_fragment:I1,map_particle_pars_fragment:U1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:F1,morphinstance_vertex:O1,morphcolor_vertex:z1,morphnormal_vertex:j1,morphtarget_pars_vertex:H1,morphtarget_vertex:V1,normal_fragment_begin:G1,normal_fragment_maps:W1,normal_pars_fragment:X1,normal_pars_vertex:q1,normal_vertex:$1,normalmap_pars_fragment:Y1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:Q1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:J1,opaque_fragment:eM,packing:tM,premultiplied_alpha_fragment:nM,project_vertex:iM,dithering_fragment:rM,dithering_pars_fragment:sM,roughnessmap_fragment:aM,roughnessmap_pars_fragment:oM,shadowmap_pars_fragment:lM,shadowmap_pars_vertex:cM,shadowmap_vertex:uM,shadowmask_pars_fragment:dM,skinbase_vertex:hM,skinning_pars_vertex:fM,skinning_vertex:pM,skinnormal_vertex:mM,specularmap_fragment:gM,specularmap_pars_fragment:xM,tonemapping_fragment:vM,tonemapping_pars_fragment:_M,transmission_fragment:yM,transmission_pars_fragment:bM,uv_pars_fragment:SM,uv_pars_vertex:MM,uv_vertex:wM,worldpos_vertex:EM,background_vert:TM,background_frag:CM,backgroundCube_vert:AM,backgroundCube_frag:NM,cube_vert:kM,cube_frag:RM,depth_vert:PM,depth_frag:DM,distanceRGBA_vert:LM,distanceRGBA_frag:IM,equirect_vert:UM,equirect_frag:BM,linedashed_vert:FM,linedashed_frag:OM,meshbasic_vert:zM,meshbasic_frag:jM,meshlambert_vert:HM,meshlambert_frag:VM,meshmatcap_vert:GM,meshmatcap_frag:WM,meshnormal_vert:XM,meshnormal_frag:qM,meshphong_vert:$M,meshphong_frag:YM,meshphysical_vert:KM,meshphysical_frag:QM,meshtoon_vert:ZM,meshtoon_frag:JM,points_vert:ew,points_frag:tw,shadow_vert:nw,shadow_frag:iw,sprite_vert:rw,sprite_frag:sw},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Gn={basic:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Vt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Vt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Vt([ae.points,ae.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Vt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Vt([ae.common,ae.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Vt([ae.sprite,ae.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Vt([ae.common,ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Vt([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Gn.physical={uniforms:Vt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Eo={r:0,b:0,g:0},ar=new Qn,aw=new pt;function ow(t,e,n,i,r,s,a){const o=new Xe(0);let c=s===!0?0:1,u,f,p=null,h=0,g=null;function x(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function b(v){let _=!1;const M=x(v);M===null?d(o,c):M&&M.isColor&&(d(M,1),_=!0);const k=t.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const M=x(_);M&&(M.isCubeTexture||M.mapping===Yl)?(f===void 0&&(f=new Xn(new Us(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:ks(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(k,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ar.copy(_.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(aw.makeRotationFromEuler(ar)),f.material.toneMapped=Je.getTransfer(M.colorSpace)!==ct,(p!==M||h!==M.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,p=M,h=M.version,g=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Xn(new Zl(2,2),new Yi({name:"BackgroundMaterial",uniforms:ks(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Je.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||h!==M.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,p=M,h=M.version,g=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,_){v.getRGB(Eo,Hv(t)),i.buffers.color.setClear(Eo.r,Eo.g,Eo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(o,c)},render:b,addToRenderList:m}}function lw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(y,E,V,z,X){let J=!1;const j=p(z,V,E);s!==j&&(s=j,u(s.object)),J=g(y,z,V,X),J&&x(y,z,V,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(y,E,V,z),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function p(y,E,V){const z=V.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let J=X[E.id];J===void 0&&(J={},X[E.id]=J);let j=J[z];return j===void 0&&(j=h(c()),J[z]=j),j}function h(y){const E=[],V=[],z=[];for(let X=0;X<n;X++)E[X]=0,V[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:z,object:y,attributes:{},index:null}}function g(y,E,V,z){const X=s.attributes,J=E.attributes;let j=0;const Q=V.getAttributes();for(const P in Q)if(Q[P].location>=0){const K=X[P];let ee=J[P];if(ee===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),K===void 0||K.attribute!==ee||ee&&K.data!==ee.data)return!0;j++}return s.attributesNum!==j||s.index!==z}function x(y,E,V,z){const X={},J=E.attributes;let j=0;const Q=V.getAttributes();for(const P in Q)if(Q[P].location>=0){let K=J[P];K===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const ee={};ee.attribute=K,K&&K.data&&(ee.data=K.data),X[P]=ee,j++}s.attributes=X,s.attributesNum=j,s.index=z}function b(){const y=s.newAttributes;for(let E=0,V=y.length;E<V;E++)y[E]=0}function m(y){d(y,0)}function d(y,E){const V=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;V[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),X[y]!==E&&(t.vertexAttribDivisor(y,E),X[y]=E)}function v(){const y=s.newAttributes,E=s.enabledAttributes;for(let V=0,z=E.length;V<z;V++)E[V]!==y[V]&&(t.disableVertexAttribArray(V),E[V]=0)}function _(y,E,V,z,X,J,j){j===!0?t.vertexAttribIPointer(y,E,V,X,J):t.vertexAttribPointer(y,E,V,z,X,J)}function M(y,E,V,z){b();const X=z.attributes,J=V.getAttributes(),j=E.defaultAttributeValues;for(const Q in J){const P=J[Q];if(P.location>=0){let Y=X[Q];if(Y===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const K=Y.normalized,ee=Y.itemSize,pe=e.get(Y);if(pe===void 0)continue;const Oe=pe.buffer,G=pe.type,te=pe.bytesPerElement,ce=G===t.INT||G===t.UNSIGNED_INT||Y.gpuType===Gh;if(Y.isInterleavedBufferAttribute){const oe=Y.data,Ce=oe.stride,Te=Y.offset;if(oe.isInstancedInterleavedBuffer){for(let ze=0;ze<P.locationSize;ze++)d(P.location+ze,oe.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ze=0;ze<P.locationSize;ze++)m(P.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let ze=0;ze<P.locationSize;ze++)_(P.location+ze,ee/P.locationSize,G,K,Ce*te,(Te+ee/P.locationSize*ze)*te,ce)}else{if(Y.isInstancedBufferAttribute){for(let oe=0;oe<P.locationSize;oe++)d(P.location+oe,Y.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let oe=0;oe<P.locationSize;oe++)m(P.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let oe=0;oe<P.locationSize;oe++)_(P.location+oe,ee/P.locationSize,G,K,ee*te,ee/P.locationSize*oe*te,ce)}}else if(j!==void 0){const K=j[Q];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(P.location,K);break;case 3:t.vertexAttrib3fv(P.location,K);break;case 4:t.vertexAttrib4fv(P.location,K);break;default:t.vertexAttrib1fv(P.location,K)}}}}v()}function k(){N();for(const y in i){const E=i[y];for(const V in E){const z=E[V];for(const X in z)f(z[X].object),delete z[X];delete E[V]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const V in E){const z=E[V];for(const X in z)f(z[X].object),delete z[X];delete E[V]}delete i[y.id]}function T(y){for(const E in i){const V=i[E];if(V[y.id]===void 0)continue;const z=V[y.id];for(const X in z)f(z[X].object),delete z[X];delete V[y.id]}}function N(){W(),a=!0,s!==r&&(s=r,u(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:W,dispose:k,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function cw(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function a(u,f,p){p!==0&&(t.drawArraysInstanced(i,u,f,p),n.update(f,i,p))}function o(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x];n.update(g,i,1)}function c(u,f,p,h){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<u.length;x++)a(u[x],f[x],h[x]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,p);let x=0;for(let b=0;b<p;b++)x+=f[b];for(let b=0;b<h.length;b++)n.update(x,i,h[b])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function uw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Bn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const N=T===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==vi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ui&&!N)}function c(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=c(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const p=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),k=x>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:g,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:k,maxSamples:A}}function dw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new dr,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||i!==0||r;return r=h,i=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,g){const x=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,d=t.get(p);if(!r||x===null||x.length===0||s&&!m)s?f(null):u();else{const v=s?0:i,_=v*4;let M=d.clippingState||null;c.value=M,M=f(x,h,_,g);for(let k=0;k!==_;++k)M[k]=n[k];d.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,g,x){const b=p!==null?p.length:0;let m=null;if(b!==0){if(m=c.value,x!==!0||m===null){const d=g+b*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,M=g;_!==b;++_,M+=4)a.copy(p[_]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function hw(t){let e=new WeakMap;function n(a,o){return o===xd?a.mapping=Ts:o===vd&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===xd||o===vd)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new MS(c.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Xv extends Vv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,Hp=[.125,.215,.35,.446,.526,.582],pr=20,eu=new Xv,Vp=new Xe;let tu=null,nu=0,iu=0,ru=!1;const hr=(1+Math.sqrt(5))/2,qr=1/hr,Gp=[new B(-hr,qr,0),new B(hr,qr,0),new B(-qr,0,hr),new B(qr,0,hr),new B(0,hr,-qr),new B(0,hr,qr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Wp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=ru,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ba,format:Bn,colorSpace:Ji,depthBuffer:!1},r=Xp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fw(s)),this._blurMaterial=pw(s,e,n)}return r}_compileMaterial(e){const n=new Xn(this._lodPlanes[0],e);this._renderer.compile(n,eu)}_sceneToCubeUV(e,n,i,r){const o=new yn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(Vp),f.toneMapping=Wi,f.autoClear=!1;const g=new Ov({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new Xn(new Us,g);let b=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,b=!0):(g.color.copy(Vp),b=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):v===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const _=this._cubeSize;To(r,v*_,d>2?_:0,_,_),f.setRenderTarget(r),b&&f.render(x,o),f.render(e,o)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;To(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,eu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gp[(r-s-1)%Gp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Xn(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*pr-1),b=s/x,m=isFinite(s)?1+Math.floor(f*b):pr;m>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const d=[];let v=0;for(let T=0;T<pr;++T){const N=T/b,W=Math.exp(-N*N/2);d.push(W),T===0?v+=W:T<m&&(v+=2*W)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-i;const M=this._sizeLods[r],k=3*M*(r>_-as?r-_+as:0),A=4*(this._cubeSize-M);To(n,k,A,3*M,2*M),c.setRenderTarget(n),c.render(p,eu)}}function fw(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+Hp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-as?c=Hp[a-t+as-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),f=-u,p=1+u,h=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,x=6,b=3,m=2,d=1,v=new Float32Array(b*x*g),_=new Float32Array(m*x*g),M=new Float32Array(d*x*g);for(let A=0;A<g;A++){const T=A%3*2/3-1,N=A>2?0:-1,W=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];v.set(W,b*x*A),_.set(h,m*x*A);const y=[A,A,A,A,A,A];M.set(y,d*x*A)}const k=new yi;k.setAttribute("position",new Yn(v,b)),k.setAttribute("uv",new Yn(_,m)),k.setAttribute("faceIndex",new Yn(M,d)),e.push(k),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xp(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function To(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pw(t,e,n){const i=new Float32Array(pr),r=new B(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function qp(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function $p(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Zh(){return`

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
	`}function mw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===xd||c===vd,f=c===Ts||c===Cs;if(u||f){let p=e.get(o);const h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Wp(t)),p=u?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const g=o.image;return u&&g&&g.height>0||f&&g&&r(g)?(n===null&&(n=new Wp(t)),p=u?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let c=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function gw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Jo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xw(t,e,n,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const b=h.morphAttributes[x];for(let m=0,d=b.length;m<d;m++)e.remove(b[m])}h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function c(p){const h=p.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const x in g){const b=g[x];for(let m=0,d=b.length;m<d;m++)e.update(b[m],t.ARRAY_BUFFER)}}function u(p){const h=[],g=p.index,x=p.attributes.position;let b=0;if(g!==null){const v=g.array;b=g.version;for(let _=0,M=v.length;_<M;_+=3){const k=v[_+0],A=v[_+1],T=v[_+2];h.push(k,A,A,T,T,k)}}else if(x!==void 0){const v=x.array;b=x.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const k=_+0,A=_+1,T=_+2;h.push(k,A,A,T,T,k)}}else return;const m=new(Dv(h)?jv:zv)(h,1);m.version=b;const d=s.get(p);d&&e.remove(d),s.set(p,m)}function f(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:f}}function vw(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,g){t.drawElements(i,g,s,h*a),n.update(g,i,1)}function u(h,g,x){x!==0&&(t.drawElementsInstanced(i,g,s,h*a,x),n.update(g,i,x))}function f(h,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,x);let m=0;for(let d=0;d<x;d++)m+=g[d];n.update(m,i,1)}function p(h,g,x,b){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/a,g[d],b[d]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,b,0,x);let d=0;for(let v=0;v<x;v++)d+=g[v];for(let v=0;v<b.length;v++)n.update(d,i,b[v])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function _w(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function yw(t,e,n){const i=new WeakMap,r=new vt;function s(a,o,c){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let y=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var g=y;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),b===!0&&(M=2),m===!0&&(M=3);let k=o.attributes.position.count*M,A=1;k>e.maxTextureSize&&(A=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const T=new Float32Array(k*A*4*p),N=new Iv(T,k,A,p);N.type=ui,N.needsUpdate=!0;const W=M*4;for(let E=0;E<p;E++){const V=d[E],z=v[E],X=_[E],J=k*A*4*E;for(let j=0;j<V.count;j++){const Q=j*W;x===!0&&(r.fromBufferAttribute(V,j),T[J+Q+0]=r.x,T[J+Q+1]=r.y,T[J+Q+2]=r.z,T[J+Q+3]=0),b===!0&&(r.fromBufferAttribute(z,j),T[J+Q+4]=r.x,T[J+Q+5]=r.y,T[J+Q+6]=r.z,T[J+Q+7]=0),m===!0&&(r.fromBufferAttribute(X,j),T[J+Q+8]=r.x,T[J+Q+9]=r.y,T[J+Q+10]=r.z,T[J+Q+11]=X.itemSize===4?r.w:1)}}h={count:p,texture:N,size:new et(k,A)},i.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let m=0;m<u.length;m++)x+=u[m];const b=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(t,"morphTargetBaseInfluence",b),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function bw(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,f=c.geometry,p=e.get(c,f);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return p}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class qv extends sn{constructor(e,n,i,r,s,a,o,c,u,f=ms){if(f!==ms&&f!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ms&&(i=Ar),i===void 0&&f===Ns&&(i=As),super(null,r,s,a,o,c,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Mn,this.minFilter=c!==void 0?c:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const $v=new sn,Yp=new qv(1,1),Yv=new Iv,Kv=new oS,Qv=new Gv,Kp=[],Qp=[],Zp=new Float32Array(16),Jp=new Float32Array(9),em=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Kp[r];if(s===void 0&&(s=new Float32Array(r),Kp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jl(t,e){let n=Qp[e];n===void 0&&(n=new Int32Array(e),Qp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function Tw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;em.set(i),t.uniformMatrix2fv(this.addr,!1,em),Ct(n,i)}}function Cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Jp.set(i),t.uniformMatrix3fv(this.addr,!1,Jp),Ct(n,i)}}function Aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Zp.set(i),t.uniformMatrix4fv(this.addr,!1,Zp),Ct(n,i)}}function Nw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function Dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function Bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Yp.compareFunction=Pv,s=Yp):s=$v,n.setTexture2D(e||s,r)}function Fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Kv,r)}function Ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Qv,r)}function zw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yv,r)}function jw(t){switch(t){case 5126:return Sw;case 35664:return Mw;case 35665:return ww;case 35666:return Ew;case 35674:return Tw;case 35675:return Cw;case 35676:return Aw;case 5124:case 35670:return Nw;case 35667:case 35671:return kw;case 35668:case 35672:return Rw;case 35669:case 35673:return Pw;case 5125:return Dw;case 36294:return Lw;case 36295:return Iw;case 36296:return Uw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return zw}}function Hw(t,e){t.uniform1fv(this.addr,e)}function Vw(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function Gw(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function Ww(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function Xw(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qw(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $w(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Yw(t,e){t.uniform1iv(this.addr,e)}function Kw(t,e){t.uniform2iv(this.addr,e)}function Qw(t,e){t.uniform3iv(this.addr,e)}function Zw(t,e){t.uniform4iv(this.addr,e)}function Jw(t,e){t.uniform1uiv(this.addr,e)}function eE(t,e){t.uniform2uiv(this.addr,e)}function tE(t,e){t.uniform3uiv(this.addr,e)}function nE(t,e){t.uniform4uiv(this.addr,e)}function iE(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||$v,s[a])}function rE(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Kv,s[a])}function sE(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Qv,s[a])}function aE(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Yv,s[a])}function oE(t){switch(t){case 5126:return Hw;case 35664:return Vw;case 35665:return Gw;case 35666:return Ww;case 35674:return Xw;case 35675:return qw;case 35676:return $w;case 5124:case 35670:return Yw;case 35667:case 35671:return Kw;case 35668:case 35672:return Qw;case 35669:case 35673:return Zw;case 5125:return Jw;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return aE}}class lE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jw(n.type)}}class cE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oE(n.type)}}class uE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const su=/(\w+)(\])?(\[|\.)?/g;function tm(t,e){t.seq.push(e),t.map[e.id]=e}function dE(t,e,n){const i=t.name,r=i.length;for(su.lastIndex=0;;){const s=su.exec(i),a=su.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){tm(n,u===void 0?new lE(o,t,e):new cE(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new uE(o),tm(n,p)),n=p}}}class el{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);dE(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function nm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const hE=37297;let fE=0;function pE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function mE(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Al&&n===Cl?i="LinearDisplayP3ToLinearSRGB":e===Cl&&n===Al&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case Kl:return[i,"LinearTransferOETF"];case Vn:case Kh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function im(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+pE(t.getShaderSource(e),a)}else return r}function gE(t,e){const n=mE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xE(t,e){let n;switch(e){case Db:n="Linear";break;case Lb:n="Reinhard";break;case Ib:n="Cineon";break;case Ub:n="ACESFilmic";break;case Fb:n="AgX";break;case Ob:n="Neutral";break;case Bb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Co=new B;function vE(){Je.getLuminanceCoefficients(Co);const t=Co.x.toFixed(4),e=Co.y.toFixed(4),n=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _E(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function yE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ia(t){return t!==""}function rm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(t){return t.replace(SE,wE)}const ME=new Map;function wE(t,e){let n=Ie[e];if(n===void 0){const i=ME.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $d(n)}const EE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function am(t){return t.replace(EE,TE)}function TE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function om(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function CE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===vv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===hb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function AE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case Cs:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function kE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _v:e="ENVMAP_BLENDING_MULTIPLY";break;case Rb:e="ENVMAP_BLENDING_MIX";break;case Pb:e="ENVMAP_BLENDING_ADD";break}return e}function RE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function PE(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=CE(n),u=AE(n),f=NE(n),p=kE(n),h=RE(n),g=_E(n),x=yE(s),b=r.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ia).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(m=[om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Wi?xE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,gE("linearToOutputTexel",n.outputColorSpace),vE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),a=$d(a),a=rm(a,n),a=sm(a,n),o=$d(o),o=rm(o,n),o=sm(o,n),a=am(a),o=am(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+m+a,M=v+d+o,k=nm(r,r.VERTEX_SHADER,_),A=nm(r,r.FRAGMENT_SHADER,M);r.attachShader(b,k),r.attachShader(b,A),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function T(E){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(b).trim(),z=r.getShaderInfoLog(k).trim(),X=r.getShaderInfoLog(A).trim();let J=!0,j=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,k,A);else{const Q=im(r,k,"vertex"),P=im(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+Q+`
`+P)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||X==="")&&(j=!1);j&&(E.diagnostics={runnable:J,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:d}})}r.deleteShader(k),r.deleteShader(A),N=new el(r,b),W=bE(r,b)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(b,hE)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fE++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=A,this}let DE=0;class LE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new IE(e),n.set(e,i)),i}}class IE{constructor(e){this.id=DE++,this.code=e,this.usedTimes=0}}function UE(t,e,n,i,r,s,a){const o=new Bv,c=new LE,u=new Set,f=[],p=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,g=r.vertexTextures;let x=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function d(y,E,V,z,X){const J=z.fog,j=X.geometry,Q=y.isMeshStandardMaterial?z.environment:null,P=(y.isMeshStandardMaterial?n:e).get(y.envMap||Q),Y=P&&P.mapping===Yl?P.image.height:null,K=b[y.type];y.precision!==null&&(x=r.getMaxPrecision(y.precision),x!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",x,"instead."));const ee=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pe=ee!==void 0?ee.length:0;let Oe=0;j.morphAttributes.position!==void 0&&(Oe=1),j.morphAttributes.normal!==void 0&&(Oe=2),j.morphAttributes.color!==void 0&&(Oe=3);let G,te,ce,oe;if(K){const Yt=Gn[K];G=Yt.vertexShader,te=Yt.fragmentShader}else G=y.vertexShader,te=y.fragmentShader,c.update(y),ce=c.getVertexShaderID(y),oe=c.getFragmentShaderID(y);const Ce=t.getRenderTarget(),Te=X.isInstancedMesh===!0,ze=X.isBatchedMesh===!0,tt=!!y.map,je=!!y.matcap,R=!!P,Ht=!!y.aoMap,He=!!y.lightMap,$e=!!y.bumpMap,ke=!!y.normalMap,at=!!y.displacementMap,De=!!y.emissiveMap,C=!!y.metalnessMap,S=!!y.roughnessMap,U=y.anisotropy>0,$=y.clearcoat>0,ne=y.dispersion>0,q=y.iridescence>0,be=y.sheen>0,le=y.transmission>0,ge=U&&!!y.anisotropyMap,Ye=$&&!!y.clearcoatMap,re=$&&!!y.clearcoatNormalMap,xe=$&&!!y.clearcoatRoughnessMap,Re=q&&!!y.iridescenceMap,Pe=q&&!!y.iridescenceThicknessMap,ve=be&&!!y.sheenColorMap,Ve=be&&!!y.sheenRoughnessMap,Le=!!y.specularMap,rt=!!y.specularColorMap,D=!!y.specularIntensityMap,he=le&&!!y.transmissionMap,H=le&&!!y.thicknessMap,Z=!!y.gradientMap,ue=!!y.alphaMap,fe=y.alphaTest>0,We=!!y.alphaHash,bt=!!y.extensions;let $t=Wi;y.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&($t=t.toneMapping);const Ke={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:te,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:x,batching:ze,batchingColor:ze&&X._colorsTexture!==null,instancing:Te,instancingColor:Te&&X.instanceColor!==null,instancingMorph:Te&&X.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Ji,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:je,envMap:R,envMapMode:R&&P.mapping,envMapCubeUVHeight:Y,aoMap:Ht,lightMap:He,bumpMap:$e,normalMap:ke,displacementMap:g&&at,emissiveMap:De,normalMapObjectSpace:ke&&y.normalMapType===Vb,normalMapTangentSpace:ke&&y.normalMapType===Rv,metalnessMap:C,roughnessMap:S,anisotropy:U,anisotropyMap:ge,clearcoat:$,clearcoatMap:Ye,clearcoatNormalMap:re,clearcoatRoughnessMap:xe,dispersion:ne,iridescence:q,iridescenceMap:Re,iridescenceThicknessMap:Pe,sheen:be,sheenColorMap:ve,sheenRoughnessMap:Ve,specularMap:Le,specularColorMap:rt,specularIntensityMap:D,transmission:le,transmissionMap:he,thicknessMap:H,gradientMap:Z,opaque:y.transparent===!1&&y.blending===ps&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:fe,alphaHash:We,combine:y.combine,mapUv:tt&&m(y.map.channel),aoMapUv:Ht&&m(y.aoMap.channel),lightMapUv:He&&m(y.lightMap.channel),bumpMapUv:$e&&m(y.bumpMap.channel),normalMapUv:ke&&m(y.normalMap.channel),displacementMapUv:at&&m(y.displacementMap.channel),emissiveMapUv:De&&m(y.emissiveMap.channel),metalnessMapUv:C&&m(y.metalnessMap.channel),roughnessMapUv:S&&m(y.roughnessMap.channel),anisotropyMapUv:ge&&m(y.anisotropyMap.channel),clearcoatMapUv:Ye&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(y.sheenRoughnessMap.channel),specularMapUv:Le&&m(y.specularMap.channel),specularColorMapUv:rt&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:he&&m(y.transmissionMap.channel),thicknessMapUv:H&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ke||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!j.attributes.uv&&(tt||ue),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:$t,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===oi,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:bt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&y.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function v(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)E.push(V),E.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(_(E,y),M(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),y.push(o.mask)}function k(y){const E=b[y.type];let V;if(E){const z=Gn[E];V=_S.clone(z.uniforms)}else V=y.uniforms;return V}function A(y,E){let V;for(let z=0,X=f.length;z<X;z++){const J=f[z];if(J.cacheKey===E){V=J,++V.usedTimes;break}}return V===void 0&&(V=new PE(t,E,y,s),f.push(V)),V}function T(y){if(--y.usedTimes===0){const E=f.indexOf(y);f[E]=f[f.length-1],f.pop(),y.destroy()}}function N(y){c.remove(y)}function W(){c.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:k,acquireProgram:A,releaseProgram:T,releaseShaderCache:N,programs:f,dispose:W}}function BE(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function FE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function lm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,h,g,x,b,m){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:h,material:g,groupOrder:x,renderOrder:p.renderOrder,z:b,group:m},t[e]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=g,d.groupOrder=x,d.renderOrder=p.renderOrder,d.z=b,d.group=m),e++,d}function o(p,h,g,x,b,m){const d=a(p,h,g,x,b,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function c(p,h,g,x,b,m){const d=a(p,h,g,x,b,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(p,h){n.length>1&&n.sort(p||FE),i.length>1&&i.sort(h||lm),r.length>1&&r.sort(h||lm)}function f(){for(let p=e,h=t.length;p<h;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:u}}function OE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new cm,t.set(i,[a])):r>=s.length?(a=new cm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function zE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Xe};break;case"SpotLight":n={position:new B,direction:new B,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function jE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let HE=0;function VE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function GE(t){const e=new zE,n=jE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new pt,a=new pt;function o(u){let f=0,p=0,h=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let g=0,x=0,b=0,m=0,d=0,v=0,_=0,M=0,k=0,A=0,T=0;u.sort(VE);for(let W=0,y=u.length;W<y;W++){const E=u[W],V=E.color,z=E.intensity,X=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=V.r*z,p+=V.g*z,h+=V.b*z;else if(E.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(E.sh.coefficients[j],z);T++}else if(E.isDirectionalLight){const j=e.get(E);if(j.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Q=E.shadow,P=n.get(E);P.shadowIntensity=Q.intensity,P.shadowBias=Q.bias,P.shadowNormalBias=Q.normalBias,P.shadowRadius=Q.radius,P.shadowMapSize=Q.mapSize,i.directionalShadow[g]=P,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=E.shadow.matrix,v++}i.directional[g]=j,g++}else if(E.isSpotLight){const j=e.get(E);j.position.setFromMatrixPosition(E.matrixWorld),j.color.copy(V).multiplyScalar(z),j.distance=X,j.coneCos=Math.cos(E.angle),j.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),j.decay=E.decay,i.spot[b]=j;const Q=E.shadow;if(E.map&&(i.spotLightMap[k]=E.map,k++,Q.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[b]=Q.matrix,E.castShadow){const P=n.get(E);P.shadowIntensity=Q.intensity,P.shadowBias=Q.bias,P.shadowNormalBias=Q.normalBias,P.shadowRadius=Q.radius,P.shadowMapSize=Q.mapSize,i.spotShadow[b]=P,i.spotShadowMap[b]=J,M++}b++}else if(E.isRectAreaLight){const j=e.get(E);j.color.copy(V).multiplyScalar(z),j.halfWidth.set(E.width*.5,0,0),j.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=j,m++}else if(E.isPointLight){const j=e.get(E);if(j.color.copy(E.color).multiplyScalar(E.intensity),j.distance=E.distance,j.decay=E.decay,E.castShadow){const Q=E.shadow,P=n.get(E);P.shadowIntensity=Q.intensity,P.shadowBias=Q.bias,P.shadowNormalBias=Q.normalBias,P.shadowRadius=Q.radius,P.shadowMapSize=Q.mapSize,P.shadowCameraNear=Q.camera.near,P.shadowCameraFar=Q.camera.far,i.pointShadow[x]=P,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=E.shadow.matrix,_++}i.point[x]=j,x++}else if(E.isHemisphereLight){const j=e.get(E);j.skyColor.copy(E.color).multiplyScalar(z),j.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[d]=j,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==g||N.pointLength!==x||N.spotLength!==b||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==v||N.numPointShadows!==_||N.numSpotShadows!==M||N.numSpotMaps!==k||N.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=b,i.rectArea.length=m,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+k-A,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,N.directionalLength=g,N.pointLength=x,N.spotLength=b,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=v,N.numPointShadows=_,N.numSpotShadows=M,N.numSpotMaps=k,N.numLightProbes=T,i.version=HE++)}function c(u,f){let p=0,h=0,g=0,x=0,b=0;const m=f.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const _=u[d];if(_.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const M=i.hemi[b];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:i}}function um(t){const e=new GE(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function c(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function WE(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new um(t),e.set(r,[o])):s>=a.length?(o=new um(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class XE extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qE extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YE=`uniform sampler2D shadow_pass;
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
}`;function KE(t,e,n){let i=new Qh;const r=new et,s=new et,a=new vt,o=new XE({depthPacking:Hb}),c=new qE,u={},f=n.maxTextureSize,p={[$i]:rn,[rn]:$i,[oi]:oi},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:$E,fragmentShader:YE}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new yi;x.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Xn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vv;let d=this.type;this.render=function(A,T,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const W=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Gi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=d!==ri&&this.type===ri,X=d===ri&&this.type!==ri;for(let J=0,j=A.length;J<j;J++){const Q=A[J],P=Q.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const Y=P.getFrameExtents();if(r.multiply(Y),s.copy(P.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,P.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,P.mapSize.y=s.y)),P.map===null||z===!0||X===!0){const ee=this.type!==ri?{minFilter:Mn,magFilter:Mn}:{};P.map!==null&&P.map.dispose(),P.map=new Nr(r.x,r.y,ee),P.map.texture.name=Q.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const K=P.getViewportCount();for(let ee=0;ee<K;ee++){const pe=P.getViewport(ee);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),V.viewport(a),P.updateMatrices(Q,ee),i=P.getFrustum(),M(T,N,P.camera,Q,this.type)}P.isPointLightShadow!==!0&&this.type===ri&&v(P,N),P.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(W,y,E)};function v(A,T){const N=e.update(b);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,N,h,b,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,N,g,b,null)}function _(A,T,N,W){let y=null;const E=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)y=E;else if(y=N.isPointLight===!0?c:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=y.uuid,z=T.uuid;let X=u[V];X===void 0&&(X={},u[V]=X);let J=X[z];J===void 0&&(J=y.clone(),X[z]=J,T.addEventListener("dispose",k)),y=J}if(y.visible=T.visible,y.wireframe=T.wireframe,W===ri?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:p[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=N}return y}function M(A,T,N,W,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const z=e.update(A),X=A.material;if(Array.isArray(X)){const J=z.groups;for(let j=0,Q=J.length;j<Q;j++){const P=J[j],Y=X[P.materialIndex];if(Y&&Y.visible){const K=_(A,Y,W,y);A.onBeforeShadow(t,A,T,N,z,K,P),t.renderBufferDirect(N,null,z,K,A,P),A.onAfterShadow(t,A,T,N,z,K,P)}}}else if(X.visible){const J=_(A,X,W,y);A.onBeforeShadow(t,A,T,N,z,J,null),t.renderBufferDirect(N,null,z,J,A,null),A.onAfterShadow(t,A,T,N,z,J,null)}}const V=A.children;for(let z=0,X=V.length;z<X;z++)M(V[z],T,N,W,y)}function k(A){A.target.removeEventListener("dispose",k);for(const N in u){const W=u[N],y=A.target.uuid;y in W&&(W[y].dispose(),delete W[y])}}}const QE={[ud]:dd,[hd]:md,[fd]:gd,[Es]:pd,[dd]:ud,[md]:hd,[gd]:fd,[pd]:Es};function ZE(t){function e(){let D=!1;const he=new vt;let H=null;const Z=new vt(0,0,0,0);return{setMask:function(ue){H!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),H=ue)},setLocked:function(ue){D=ue},setClear:function(ue,fe,We,bt,$t){$t===!0&&(ue*=bt,fe*=bt,We*=bt),he.set(ue,fe,We,bt),Z.equals(he)===!1&&(t.clearColor(ue,fe,We,bt),Z.copy(he))},reset:function(){D=!1,H=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,H=null,Z=null,ue=null;return{setReversed:function(fe){he=fe},setTest:function(fe){fe?ce(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(fe){H!==fe&&!D&&(t.depthMask(fe),H=fe)},setFunc:function(fe){if(he&&(fe=QE[fe]),Z!==fe){switch(fe){case ud:t.depthFunc(t.NEVER);break;case dd:t.depthFunc(t.ALWAYS);break;case hd:t.depthFunc(t.LESS);break;case Es:t.depthFunc(t.LEQUAL);break;case fd:t.depthFunc(t.EQUAL);break;case pd:t.depthFunc(t.GEQUAL);break;case md:t.depthFunc(t.GREATER);break;case gd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=fe}},setLocked:function(fe){D=fe},setClear:function(fe){ue!==fe&&(t.clearDepth(fe),ue=fe)},reset:function(){D=!1,H=null,Z=null,ue=null}}}function i(){let D=!1,he=null,H=null,Z=null,ue=null,fe=null,We=null,bt=null,$t=null;return{setTest:function(Ke){D||(Ke?ce(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(Ke){he!==Ke&&!D&&(t.stencilMask(Ke),he=Ke)},setFunc:function(Ke,Yt,Zn){(H!==Ke||Z!==Yt||ue!==Zn)&&(t.stencilFunc(Ke,Yt,Zn),H=Ke,Z=Yt,ue=Zn)},setOp:function(Ke,Yt,Zn){(fe!==Ke||We!==Yt||bt!==Zn)&&(t.stencilOp(Ke,Yt,Zn),fe=Ke,We=Yt,bt=Zn)},setLocked:function(Ke){D=Ke},setClear:function(Ke){$t!==Ke&&(t.clearStencil(Ke),$t=Ke)},reset:function(){D=!1,he=null,H=null,Z=null,ue=null,fe=null,We=null,bt=null,$t=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,c=new WeakMap;let u={},f={},p=new WeakMap,h=[],g=null,x=!1,b=null,m=null,d=null,v=null,_=null,M=null,k=null,A=new Xe(0,0,0),T=0,N=!1,W=null,y=null,E=null,V=null,z=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,j=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=j>=2);let P=null,Y={};const K=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),pe=new vt().fromArray(K),Oe=new vt().fromArray(ee);function G(D,he,H,Z){const ue=new Uint8Array(4),fe=t.createTexture();t.bindTexture(D,fe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<H;We++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(he+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return fe}const te={};te[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(t.DEPTH_TEST),s.setFunc(Es),He(!1),$e(vp),ce(t.CULL_FACE),R(Gi);function ce(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function oe(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Ce(D,he){return f[D]!==he?(t.bindFramebuffer(D,he),f[D]=he,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=he),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Te(D,he){let H=h,Z=!1;if(D){H=p.get(he),H===void 0&&(H=[],p.set(he,H));const ue=D.textures;if(H.length!==ue.length||H[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,We=ue.length;fe<We;fe++)H[fe]=t.COLOR_ATTACHMENT0+fe;H.length=ue.length,Z=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,Z=!0);Z&&t.drawBuffers(H)}function ze(D){return g!==D?(t.useProgram(D),g=D,!0):!1}const tt={[fr]:t.FUNC_ADD,[pb]:t.FUNC_SUBTRACT,[mb]:t.FUNC_REVERSE_SUBTRACT};tt[gb]=t.MIN,tt[xb]=t.MAX;const je={[vb]:t.ZERO,[_b]:t.ONE,[yb]:t.SRC_COLOR,[ld]:t.SRC_ALPHA,[Tb]:t.SRC_ALPHA_SATURATE,[wb]:t.DST_COLOR,[Sb]:t.DST_ALPHA,[bb]:t.ONE_MINUS_SRC_COLOR,[cd]:t.ONE_MINUS_SRC_ALPHA,[Eb]:t.ONE_MINUS_DST_COLOR,[Mb]:t.ONE_MINUS_DST_ALPHA,[Cb]:t.CONSTANT_COLOR,[Ab]:t.ONE_MINUS_CONSTANT_COLOR,[Nb]:t.CONSTANT_ALPHA,[kb]:t.ONE_MINUS_CONSTANT_ALPHA};function R(D,he,H,Z,ue,fe,We,bt,$t,Ke){if(D===Gi){x===!0&&(oe(t.BLEND),x=!1);return}if(x===!1&&(ce(t.BLEND),x=!0),D!==fb){if(D!==b||Ke!==N){if((m!==fr||_!==fr)&&(t.blendEquation(t.FUNC_ADD),m=fr,_=fr),Ke)switch(D){case ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _p:t.blendFunc(t.ONE,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _p:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}d=null,v=null,M=null,k=null,A.set(0,0,0),T=0,b=D,N=Ke}return}ue=ue||he,fe=fe||H,We=We||Z,(he!==m||ue!==_)&&(t.blendEquationSeparate(tt[he],tt[ue]),m=he,_=ue),(H!==d||Z!==v||fe!==M||We!==k)&&(t.blendFuncSeparate(je[H],je[Z],je[fe],je[We]),d=H,v=Z,M=fe,k=We),(bt.equals(A)===!1||$t!==T)&&(t.blendColor(bt.r,bt.g,bt.b,$t),A.copy(bt),T=$t),b=D,N=!1}function Ht(D,he){D.side===oi?oe(t.CULL_FACE):ce(t.CULL_FACE);let H=D.side===rn;he&&(H=!H),He(H),D.blending===ps&&D.transparent===!1?R(Gi):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),at(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){W!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),W=D)}function $e(D){D!==ub?(ce(t.CULL_FACE),D!==y&&(D===vp?t.cullFace(t.BACK):D===db?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),y=D}function ke(D){D!==E&&(J&&t.lineWidth(D),E=D)}function at(D,he,H){D?(ce(t.POLYGON_OFFSET_FILL),(V!==he||z!==H)&&(t.polygonOffset(he,H),V=he,z=H)):oe(t.POLYGON_OFFSET_FILL)}function De(D){D?ce(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+X-1),P!==D&&(t.activeTexture(D),P=D)}function S(D,he,H){H===void 0&&(P===null?H=t.TEXTURE0+X-1:H=P);let Z=Y[H];Z===void 0&&(Z={type:void 0,texture:void 0},Y[H]=Z),(Z.type!==D||Z.texture!==he)&&(P!==H&&(t.activeTexture(H),P=H),t.bindTexture(D,he||te[D]),Z.type=D,Z.texture=he)}function U(){const D=Y[P];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){pe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),pe.copy(D))}function ve(D){Oe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Oe.copy(D))}function Ve(D,he){let H=c.get(he);H===void 0&&(H=new WeakMap,c.set(he,H));let Z=H.get(D);Z===void 0&&(Z=t.getUniformBlockIndex(he,D.name),H.set(D,Z))}function Le(D,he){const Z=c.get(he).get(D);o.get(he)!==Z&&(t.uniformBlockBinding(he,Z,D.__bindingPointIndex),o.set(he,Z))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},P=null,Y={},f={},p=new WeakMap,h=[],g=null,x=!1,b=null,m=null,d=null,v=null,_=null,M=null,k=null,A=new Xe(0,0,0),T=0,N=!1,W=null,y=null,E=null,V=null,z=null,pe.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ce,disable:oe,bindFramebuffer:Ce,drawBuffers:Te,useProgram:ze,setBlending:R,setMaterial:Ht,setFlipSided:He,setCullFace:$e,setLineWidth:ke,setPolygonOffset:at,setScissorTest:De,activeTexture:C,bindTexture:S,unbindTexture:U,compressedTexImage2D:$,compressedTexImage3D:ne,texImage2D:xe,texImage3D:Re,updateUBOMapping:Ve,uniformBlockBinding:Le,texStorage2D:Ye,texStorage3D:re,texSubImage2D:q,texSubImage3D:be,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:Pe,viewport:ve,reset:rt}}function dm(t,e,n,i){const r=JE(i);switch(n){case wv:return t*e;case Tv:return t*e;case Cv:return t*e*2;case Av:return t*e/r.components*r.byteLength;case qh:return t*e/r.components*r.byteLength;case Nv:return t*e*2/r.components*r.byteLength;case $h:return t*e*2/r.components*r.byteLength;case Ev:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case Yh:return t*e*4/r.components*r.byteLength;case qo:case $o:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yo:case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:case wd:return Math.max(t,16)*Math.max(e,8)/4;case bd:case Md:return Math.max(t,8)*Math.max(e,8)/2;case Ed:case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qo:case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case kv:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wd:case Xd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function JE(t){switch(t){case vi:case bv:return{byteLength:1,components:1};case Ra:case Sv:case Ba:return{byteLength:2,components:1};case Wh:case Xh:return{byteLength:2,components:4};case Ar:case Gh:case ui:return{byteLength:4,components:1};case Mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function eT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,f=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return g?new OffscreenCanvas(C,S):kl("canvas")}function b(C,S,U){let $=1;const ne=De(C);if((ne.width>U||ne.height>U)&&($=U/Math.max(ne.width,ne.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor($*ne.width),be=Math.floor($*ne.height);p===void 0&&(p=x(q,be));const le=S?x(q,be):p;return le.width=q,le.height=be,le.getContext("2d").drawImage(C,0,0,q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+q+"x"+be+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Mn&&C.minFilter!==Un}function d(C){t.generateMipmap(C)}function v(C,S,U,$,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=S;if(S===t.RED&&(U===t.FLOAT&&(q=t.R32F),U===t.HALF_FLOAT&&(q=t.R16F),U===t.UNSIGNED_BYTE&&(q=t.R8)),S===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(q=t.R8UI),U===t.UNSIGNED_SHORT&&(q=t.R16UI),U===t.UNSIGNED_INT&&(q=t.R32UI),U===t.BYTE&&(q=t.R8I),U===t.SHORT&&(q=t.R16I),U===t.INT&&(q=t.R32I)),S===t.RG&&(U===t.FLOAT&&(q=t.RG32F),U===t.HALF_FLOAT&&(q=t.RG16F),U===t.UNSIGNED_BYTE&&(q=t.RG8)),S===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(q=t.RG8UI),U===t.UNSIGNED_SHORT&&(q=t.RG16UI),U===t.UNSIGNED_INT&&(q=t.RG32UI),U===t.BYTE&&(q=t.RG8I),U===t.SHORT&&(q=t.RG16I),U===t.INT&&(q=t.RG32I)),S===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(q=t.RGB8UI),U===t.UNSIGNED_SHORT&&(q=t.RGB16UI),U===t.UNSIGNED_INT&&(q=t.RGB32UI),U===t.BYTE&&(q=t.RGB8I),U===t.SHORT&&(q=t.RGB16I),U===t.INT&&(q=t.RGB32I)),S===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),U===t.UNSIGNED_INT&&(q=t.RGBA32UI),U===t.BYTE&&(q=t.RGBA8I),U===t.SHORT&&(q=t.RGBA16I),U===t.INT&&(q=t.RGBA32I)),S===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),S===t.RGBA){const be=ne?Tl:Je.getTransfer($);U===t.FLOAT&&(q=t.RGBA32F),U===t.HALF_FLOAT&&(q=t.RGBA16F),U===t.UNSIGNED_BYTE&&(q=be===ct?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(C,S){let U;return C?S===null||S===Ar||S===As?U=t.DEPTH24_STENCIL8:S===ui?U=t.DEPTH32F_STENCIL8:S===Ra&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ar||S===As?U=t.DEPTH_COMPONENT24:S===ui?U=t.DEPTH_COMPONENT32F:S===Ra&&(U=t.DEPTH_COMPONENT16),U}function M(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mn&&C.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function k(C){const S=C.target;S.removeEventListener("dispose",k),T(S),S.isVideoTexture&&f.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),W(S)}function T(C){const S=i.get(C);if(S.__webglInit===void 0)return;const U=C.source,$=h.get(U);if($){const ne=$[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(C),Object.keys($).length===0&&h.delete(U)}i.remove(C)}function N(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const U=C.source,$=h.get(U);delete $[S.__cacheKey],a.memory.textures--}function W(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ne=0;ne<S.__webglFramebuffer[$].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[$][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)t.deleteFramebuffer(S.__webglFramebuffer[$]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=C.textures;for(let $=0,ne=U.length;$<ne;$++){const q=i.get(U[$]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(U[$])}i.remove(C)}let y=0;function E(){y=0}function V(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function z(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const U=i.get(C);if(C.isVideoTexture&&ke(C),C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(U,C,S);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+S)}function J(C,S){const U=i.get(C);if(C.version>0&&U.__version!==C.version){Oe(U,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+S)}function j(C,S){const U=i.get(C);if(C.version>0&&U.__version!==C.version){Oe(U,C,S);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+S)}function Q(C,S){const U=i.get(C);if(C.version>0&&U.__version!==C.version){G(U,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+S)}const P={[_d]:t.REPEAT,[vr]:t.CLAMP_TO_EDGE,[yd]:t.MIRRORED_REPEAT},Y={[Mn]:t.NEAREST,[zb]:t.NEAREST_MIPMAP_NEAREST,[ao]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[Rc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},K={[Gb]:t.NEVER,[Kb]:t.ALWAYS,[Wb]:t.LESS,[Pv]:t.LEQUAL,[Xb]:t.EQUAL,[Yb]:t.GEQUAL,[qb]:t.GREATER,[$b]:t.NOTEQUAL};function ee(C,S){if(S.type===ui&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===Rc||S.magFilter===ao||S.magFilter===_r||S.minFilter===Un||S.minFilter===Rc||S.minFilter===ao||S.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,P[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,P[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,P[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Y[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Y[S.minFilter]),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Mn||S.minFilter!==ao&&S.minFilter!==_r||S.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function pe(C,S){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",k));const $=S.source;let ne=h.get($);ne===void 0&&(ne={},h.set($,ne));const q=z(S);if(q!==C.__cacheKey){ne[q]===void 0&&(ne[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ne[q].usedTimes++;const be=ne[C.__cacheKey];be!==void 0&&(ne[C.__cacheKey].usedTimes--,be.usedTimes===0&&N(S)),C.__cacheKey=q,C.__webglTexture=ne[q].texture}return U}function Oe(C,S,U){let $=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=t.TEXTURE_3D);const ne=pe(C,S),q=S.source;n.bindTexture($,C.__webglTexture,t.TEXTURE0+U);const be=i.get(q);if(q.version!==be.__version||ne===!0){n.activeTexture(t.TEXTURE0+U);const le=Je.getPrimaries(Je.workingColorSpace),ge=S.colorSpace===Di?null:Je.getPrimaries(S.colorSpace),Ye=S.colorSpace===Di||le===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let re=b(S.image,!1,r.maxTextureSize);re=at(S,re);const xe=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let Pe=v(S.internalFormat,xe,Re,S.colorSpace,S.isVideoTexture);ee($,S);let ve;const Ve=S.mipmaps,Le=S.isVideoTexture!==!0,rt=be.__version===void 0||ne===!0,D=q.dataReady,he=M(S,re);if(S.isDepthTexture)Pe=_(S.format===Ns,S.type),rt&&(Le?n.texStorage2D(t.TEXTURE_2D,1,Pe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,xe,Re,null));else if(S.isDataTexture)if(Ve.length>0){Le&&rt&&n.texStorage2D(t.TEXTURE_2D,he,Pe,Ve[0].width,Ve[0].height);for(let H=0,Z=Ve.length;H<Z;H++)ve=Ve[H],Le?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,xe,Re,ve.data):n.texImage2D(t.TEXTURE_2D,H,Pe,ve.width,ve.height,0,xe,Re,ve.data);S.generateMipmaps=!1}else Le?(rt&&n.texStorage2D(t.TEXTURE_2D,he,Pe,re.width,re.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,xe,Re,re.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,xe,Re,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,Ve[0].width,Ve[0].height,re.depth);for(let H=0,Z=Ve.length;H<Z;H++)if(ve=Ve[H],S.format!==Bn)if(xe!==null)if(Le){if(D)if(S.layerUpdates.size>0){const ue=dm(ve.width,ve.height,S.format,S.type);for(const fe of S.layerUpdates){const We=ve.data.subarray(fe*ue/ve.data.BYTES_PER_ELEMENT,(fe+1)*ue/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,fe,ve.width,ve.height,1,xe,We,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,re.depth,xe,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,Pe,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,re.depth,xe,Re,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,Pe,ve.width,ve.height,re.depth,0,xe,Re,ve.data)}else{Le&&rt&&n.texStorage2D(t.TEXTURE_2D,he,Pe,Ve[0].width,Ve[0].height);for(let H=0,Z=Ve.length;H<Z;H++)ve=Ve[H],S.format!==Bn?xe!==null?Le?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,xe,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,H,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ve.width,ve.height,xe,Re,ve.data):n.texImage2D(t.TEXTURE_2D,H,Pe,ve.width,ve.height,0,xe,Re,ve.data)}else if(S.isDataArrayTexture)if(Le){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,re.width,re.height,re.depth),D)if(S.layerUpdates.size>0){const H=dm(re.width,re.height,S.format,S.type);for(const Z of S.layerUpdates){const ue=re.data.subarray(Z*H/re.data.BYTES_PER_ELEMENT,(Z+1)*H/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,xe,Re,ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,xe,Re,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,xe,Re,re.data);else if(S.isData3DTexture)Le?(rt&&n.texStorage3D(t.TEXTURE_3D,he,Pe,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,xe,Re,re.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,xe,Re,re.data);else if(S.isFramebufferTexture){if(rt)if(Le)n.texStorage2D(t.TEXTURE_2D,he,Pe,re.width,re.height);else{let H=re.width,Z=re.height;for(let ue=0;ue<he;ue++)n.texImage2D(t.TEXTURE_2D,ue,Pe,H,Z,0,xe,Re,null),H>>=1,Z>>=1}}else if(Ve.length>0){if(Le&&rt){const H=De(Ve[0]);n.texStorage2D(t.TEXTURE_2D,he,Pe,H.width,H.height)}for(let H=0,Z=Ve.length;H<Z;H++)ve=Ve[H],Le?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,xe,Re,ve):n.texImage2D(t.TEXTURE_2D,H,Pe,xe,Re,ve);S.generateMipmaps=!1}else if(Le){if(rt){const H=De(re);n.texStorage2D(t.TEXTURE_2D,he,Pe,H.width,H.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Re,re)}else n.texImage2D(t.TEXTURE_2D,0,Pe,xe,Re,re);m(S)&&d($),be.__version=q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function G(C,S,U){if(S.image.length!==6)return;const $=pe(C,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+U);const q=i.get(ne);if(ne.version!==q.__version||$===!0){n.activeTexture(t.TEXTURE0+U);const be=Je.getPrimaries(Je.workingColorSpace),le=S.colorSpace===Di?null:Je.getPrimaries(S.colorSpace),ge=S.colorSpace===Di||be===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!Ye&&!re?xe[Z]=b(S.image[Z],!0,r.maxCubemapSize):xe[Z]=re?S.image[Z].image:S.image[Z],xe[Z]=at(S,xe[Z]);const Re=xe[0],Pe=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),Ve=v(S.internalFormat,Pe,ve,S.colorSpace),Le=S.isVideoTexture!==!0,rt=q.__version===void 0||$===!0,D=ne.dataReady;let he=M(S,Re);ee(t.TEXTURE_CUBE_MAP,S);let H;if(Ye){Le&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ve,Re.width,Re.height);for(let Z=0;Z<6;Z++){H=xe[Z].mipmaps;for(let ue=0;ue<H.length;ue++){const fe=H[ue];S.format!==Bn?Pe!==null?Le?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,fe.width,fe.height,Pe,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,fe.width,fe.height,Pe,ve,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Ve,fe.width,fe.height,0,Pe,ve,fe.data)}}}else{if(H=S.mipmaps,Le&&rt){H.length>0&&he++;const Z=De(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){Le?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,Pe,ve,xe[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,xe[Z].width,xe[Z].height,0,Pe,ve,xe[Z].data);for(let ue=0;ue<H.length;ue++){const We=H[ue].image[Z].image;Le?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,We.width,We.height,Pe,ve,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Ve,We.width,We.height,0,Pe,ve,We.data)}}else{Le?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,ve,xe[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Pe,ve,xe[Z]);for(let ue=0;ue<H.length;ue++){const fe=H[ue];Le?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Pe,ve,fe.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Ve,Pe,ve,fe.image[Z])}}}m(S)&&d(t.TEXTURE_CUBE_MAP),q.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,U,$,ne,q){const be=s.convert(U.format,U.colorSpace),le=s.convert(U.type),ge=v(U.internalFormat,be,le,U.colorSpace);if(!i.get(S).__hasExternalTextures){const re=Math.max(1,S.width>>q),xe=Math.max(1,S.height>>q);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,q,ge,re,xe,S.depth,0,be,le,null):n.texImage2D(ne,q,ge,re,xe,0,be,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),$e(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ne,i.get(U).__webglTexture,0,He(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ne,i.get(U).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(C,S,U){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer){const $=S.depthTexture,ne=$&&$.isDepthTexture?$.type:null,q=_(S.stencilBuffer,ne),be=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=He(S);$e(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,q,S.width,S.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,q,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,q,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,C)}else{const $=S.textures;for(let ne=0;ne<$.length;ne++){const q=$[ne],be=s.convert(q.format,q.colorSpace),le=s.convert(q.type),ge=v(q.internalFormat,be,le,q.colorSpace),Ye=He(S);U&&$e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,ge,S.width,S.height):$e(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const $=i.get(S.depthTexture).__webglTexture,ne=He(S);if(S.depthTexture.format===ms)$e(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(S.depthTexture.format===Ns)$e(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const S=i.get(C),U=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",ne)};$.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=$}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,C)}else if(U){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=t.createRenderbuffer(),ce(S.__webglDepthbuffer[$],C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ce(S.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(C,S,U){const $=i.get(C);S!==void 0&&te($.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ce(C)}function ze(C){const S=C.texture,U=i.get(C),$=i.get(S);C.addEventListener("dispose",A);const ne=C.textures,q=C.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=S.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let ge=0;ge<S.mipmaps.length;ge++)U.__webglFramebuffer[le][ge]=t.createFramebuffer()}else U.__webglFramebuffer[le]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)U.__webglFramebuffer[le]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(be)for(let le=0,ge=ne.length;le<ge;le++){const Ye=i.get(ne[le]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&$e(C)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const ge=ne[le];U.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[le]);const Ye=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),xe=v(ge.internalFormat,Ye,re,ge.colorSpace,C.isXRRenderTarget===!0),Re=He(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,xe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,U.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(U.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),ee(t.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)te(U.__webglFramebuffer[le][ge],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else te(U.__webglFramebuffer[le],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let le=0,ge=ne.length;le<ge;le++){const Ye=ne[le],re=i.get(Ye);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ee(t.TEXTURE_2D,Ye),te(U.__webglFramebuffer,C,Ye,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Ye)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,$.__webglTexture),ee(le,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)te(U.__webglFramebuffer[ge],C,S,t.COLOR_ATTACHMENT0,le,ge);else te(U.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,le,0);m(S)&&d(le),n.unbindTexture()}C.depthBuffer&&Ce(C)}function tt(C){const S=C.textures;for(let U=0,$=S.length;U<$;U++){const ne=S[U];if(m(ne)){const q=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(ne).__webglTexture;n.bindTexture(q,be),d(q),n.unbindTexture()}}}const je=[],R=[];function Ht(C){if(C.samples>0){if($e(C)===!1){const S=C.textures,U=C.width,$=C.height;let ne=t.COLOR_BUFFER_BIT;const q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(C),le=S.length>1;if(le)for(let ge=0;ge<S.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const Ye=i.get(S[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,U,$,0,0,U,$,ne,t.NEAREST),c===!0&&(je.length=0,R.length=0,je.push(t.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(je.push(q),R.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,R)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<S.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const Ye=i.get(S[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function He(C){return Math.min(r.maxSamples,C.samples)}function $e(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ke(C){const S=a.render.frame;f.get(C)!==S&&(f.set(C,S),C.update())}function at(C,S){const U=C.colorSpace,$=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==Ji&&U!==Di&&(Je.getTransfer(U)===ct?($!==Bn||ne!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function De(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=j,this.setTextureCube=Q,this.rebindTextures=Te,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=te,this.useMultisampledRTT=$e}function tT(t,e){function n(i,r=Di){let s;const a=Je.getTransfer(r);if(i===vi)return t.UNSIGNED_BYTE;if(i===Wh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Mv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bv)return t.BYTE;if(i===Sv)return t.SHORT;if(i===Ra)return t.UNSIGNED_SHORT;if(i===Gh)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Ba)return t.HALF_FLOAT;if(i===wv)return t.ALPHA;if(i===Ev)return t.RGB;if(i===Bn)return t.RGBA;if(i===Tv)return t.LUMINANCE;if(i===Cv)return t.LUMINANCE_ALPHA;if(i===ms)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===Av)return t.RED;if(i===qh)return t.RED_INTEGER;if(i===Nv)return t.RG;if(i===$h)return t.RG_INTEGER;if(i===Yh)return t.RGBA_INTEGER;if(i===qo||i===$o||i===Yo||i===Ko)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bd||i===Sd||i===Md||i===wd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===Td||i===Cd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ed||i===Td)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ad||i===Nd||i===kd||i===Rd||i===Pd||i===Dd||i===Ld||i===Id||i===Ud||i===Bd||i===Fd||i===Od||i===zd||i===jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ad)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ld)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Od)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===Hd||i===Vd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qo)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kv||i===Gd||i===Wd||i===Xd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class nT extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iT={type:"move"};class au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const b of e.hand.values()){const m=n.getJointPose(b,i),d=this._getHandJoint(u,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=f.position.distanceTo(p.position),g=.02,x=.005;u.inputState.pinching&&h>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iT)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const rT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sT=`
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

}`;class aT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yi({vertexShader:rT,fragmentShader:sT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xn(new Zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oT extends Ls{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,f=null,p=null,h=null,g=null,x=null;const b=new aT,m=n.getContextAttributes();let d=null,v=null;const _=[],M=[],k=new et;let A=null;const T=new yn;T.layers.enable(1),T.viewport=new vt;const N=new yn;N.layers.enable(2),N.viewport=new vt;const W=[T,N],y=new nT;y.layers.enable(1),y.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=_[G];return te===void 0&&(te=new au,_[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=_[G];return te===void 0&&(te=new au,_[G]=te),te.getGripSpace()},this.getHand=function(G){let te=_[G];return te===void 0&&(te=new au,_[G]=te),te.getHandSpace()};function z(G){const te=M.indexOf(G.inputSource);if(te===-1)return;const ce=_[te];ce!==void 0&&(ce.update(G.inputSource,G.frame,u||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let G=0;G<_.length;G++){const te=M[G];te!==null&&(M[G]=null,_[G].disconnect(te))}E=null,V=null,b.reset(),e.setRenderTarget(d),g=null,h=null,p=null,r=null,v=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(k),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new Nr(g.framebufferWidth,g.framebufferHeight,{format:Bn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ce=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Ns:ms,ce=m.stencil?As:Ar);const Ce={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Nr(h.textureWidth,h.textureHeight,{format:Bn,type:vi,depthTexture:new qv(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function J(G){for(let te=0;te<G.removed.length;te++){const ce=G.removed[te],oe=M.indexOf(ce);oe>=0&&(M[oe]=null,_[oe].disconnect(ce))}for(let te=0;te<G.added.length;te++){const ce=G.added[te];let oe=M.indexOf(ce);if(oe===-1){for(let Te=0;Te<_.length;Te++)if(Te>=M.length){M.push(ce),oe=Te;break}else if(M[Te]===null){M[Te]=ce,oe=Te;break}if(oe===-1)break}const Ce=_[oe];Ce&&Ce.connect(ce)}}const j=new B,Q=new B;function P(G,te,ce){j.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(ce.matrixWorld);const oe=j.distanceTo(Q),Ce=te.projectionMatrix.elements,Te=ce.projectionMatrix.elements,ze=Ce[14]/(Ce[10]-1),tt=Ce[14]/(Ce[10]+1),je=(Ce[9]+1)/Ce[5],R=(Ce[9]-1)/Ce[5],Ht=(Ce[8]-1)/Ce[0],He=(Te[8]+1)/Te[0],$e=ze*Ht,ke=ze*He,at=oe/(-Ht+He),De=at*-Ht;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(De),G.translateZ(at),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ce[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const C=ze+at,S=tt+at,U=$e-De,$=ke+(oe-De),ne=je*tt/S*C,q=R*tt/S*C;G.projectionMatrix.makePerspective(U,$,ne,q,C,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Y(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let te=G.near,ce=G.far;b.texture!==null&&(b.depthNear>0&&(te=b.depthNear),b.depthFar>0&&(ce=b.depthFar)),y.near=N.near=T.near=te,y.far=N.far=T.far=ce,(E!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,V=y.far);const oe=G.parent,Ce=y.cameras;Y(y,oe);for(let Te=0;Te<Ce.length;Te++)Y(Ce[Te],oe);Ce.length===2?P(y,T,N):y.projectionMatrix.copy(T.projectionMatrix),K(G,y,oe)};function K(G,te,ce){ce===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=qd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let ee=null;function pe(G,te){if(f=te.getViewerPose(u||a),x=te,f!==null){const ce=f.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let oe=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Te=0;Te<ce.length;Te++){const ze=ce[Te];let tt=null;if(g!==null)tt=g.getViewport(ze);else{const R=p.getViewSubImage(h,ze);tt=R.viewport,Te===0&&(e.setRenderTargetTextures(v,R.colorTexture,h.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(v))}let je=W[Te];je===void 0&&(je=new yn,je.layers.enable(Te),je.viewport=new vt,W[Te]=je),je.matrix.fromArray(ze.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ze.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(tt.x,tt.y,tt.width,tt.height),Te===0&&(y.matrix.copy(je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(je)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Te=p.getDepthInformation(ce[0]);Te&&Te.isValid&&Te.texture&&b.init(e,Te,r.renderState)}}for(let ce=0;ce<_.length;ce++){const oe=M[ce],Ce=_[ce];oe!==null&&Ce!==void 0&&Ce.update(oe,te,u||a)}ee&&ee(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),x=null}const Oe=new Wv;Oe.setAnimationLoop(pe),this.setAnimationLoop=function(G){ee=G},this.dispose=function(){}}}const or=new Qn,lT=new pt;function cT(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Hv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,_,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&g(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),b(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,v,_):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),_=v.envMap,M=v.envMapRotation;_&&(m.envMap.value=_,or.copy(M),or.x*=-1,or.y*=-1,or.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(lT.makeRotationFromEuler(or)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function u(v,_){let M=r[v.id];M===void 0&&(x(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",m));const k=_.program;i.updateUBOMapping(v,k);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function f(v){const _=p();v.__bindingPointIndex=_;const M=t.createBuffer(),k=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,k,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],M=v.uniforms,k=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=M.length;A<T;A++){const N=Array.isArray(M[A])?M[A]:[M[A]];for(let W=0,y=N.length;W<y;W++){const E=N[W];if(g(E,A,W,k)===!0){const V=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let J=0;J<z.length;J++){const j=z[J],Q=b(j);typeof j=="number"||typeof j=="boolean"?(E.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,V+X,E.__data)):j.isMatrix3?(E.__data[0]=j.elements[0],E.__data[1]=j.elements[1],E.__data[2]=j.elements[2],E.__data[3]=0,E.__data[4]=j.elements[3],E.__data[5]=j.elements[4],E.__data[6]=j.elements[5],E.__data[7]=0,E.__data[8]=j.elements[6],E.__data[9]=j.elements[7],E.__data[10]=j.elements[8],E.__data[11]=0):(j.toArray(E.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,_,M,k){const A=v.value,T=_+"_"+M;if(k[T]===void 0)return typeof A=="number"||typeof A=="boolean"?k[T]=A:k[T]=A.clone(),!0;{const N=k[T];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return k[T]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function x(v){const _=v.uniforms;let M=0;const k=16;for(let T=0,N=_.length;T<N;T++){const W=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,E=W.length;y<E;y++){const V=W[y],z=Array.isArray(V.value)?V.value:[V.value];for(let X=0,J=z.length;X<J;X++){const j=z[X],Q=b(j),P=M%k,Y=P%Q.boundary,K=P+Y;M+=Y,K!==0&&k-K<Q.storage&&(M+=k-K),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=Q.storage}}}const A=M%k;return A>0&&(M+=k-A),v.__size=M,v.__cache={},this}function b(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:u,dispose:d}}class dT{constructor(e={}){const{canvas:n=Zb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),x=new Int32Array(4);let b=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=Wi,this.toneMappingExposure=1;const _=this;let M=!1,k=0,A=0,T=null,N=-1,W=null;const y=new vt,E=new vt;let V=null;const z=new Xe(0);let X=0,J=n.width,j=n.height,Q=1,P=null,Y=null;const K=new vt(0,0,J,j),ee=new vt(0,0,J,j);let pe=!1;const Oe=new Qh;let G=!1,te=!1;const ce=new pt,oe=new pt,Ce=new B,Te=new vt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function je(){return T===null?Q:1}let R=i;function Ht(w,L){return n.getContext(w,L)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vh}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",fe,!1),R===null){const L="webgl2";if(R=Ht(L,w),R===null)throw Ht(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let He,$e,ke,at,De,C,S,U,$,ne,q,be,le,ge,Ye,re,xe,Re,Pe,ve,Ve,Le,rt,D;function he(){He=new gw(R),He.init(),Le=new tT(R,He),$e=new uw(R,He,e,Le),ke=new ZE(R),$e.reverseDepthBuffer&&ke.buffers.depth.setReversed(!0),at=new _w(R),De=new BE,C=new eT(R,He,ke,De,$e,Le,at),S=new hw(_),U=new mw(_),$=new TS(R),rt=new lw(R,$),ne=new xw(R,$,at,rt),q=new bw(R,ne,$,at),Pe=new yw(R,$e,C),re=new dw(De),be=new UE(_,S,U,He,$e,rt,re),le=new cT(_,De),ge=new OE,Ye=new WE(He),Re=new ow(_,S,U,ke,q,h,c),xe=new KE(_,q,$e),D=new uT(R,at,$e,ke),ve=new cw(R,He,at),Ve=new vw(R,He,at),at.programs=be.programs,_.capabilities=$e,_.extensions=He,_.properties=De,_.renderLists=ge,_.shadowMap=xe,_.state=ke,_.info=at}he();const H=new oT(_,R);this.xr=H,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=He.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=He.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(J,j,!1))},this.getSize=function(w){return w.set(J,j)},this.setSize=function(w,L,F=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,j=L,n.width=Math.floor(w*Q),n.height=Math.floor(L*Q),F===!0&&(n.style.width=w+"px",n.style.height=L+"px"),this.setViewport(0,0,w,L)},this.getDrawingBufferSize=function(w){return w.set(J*Q,j*Q).floor()},this.setDrawingBufferSize=function(w,L,F){J=w,j=L,Q=F,n.width=Math.floor(w*F),n.height=Math.floor(L*F),this.setViewport(0,0,w,L)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,L,F,O){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,L,F,O),ke.viewport(y.copy(K).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,L,F,O){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,L,F,O),ke.scissor(E.copy(ee).multiplyScalar(Q).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){ke.setScissorTest(pe=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(w=!0,L=!0,F=!0){let O=0;if(w){let I=!1;if(T!==null){const se=T.texture.format;I=se===Yh||se===$h||se===qh}if(I){const se=T.texture.type,de=se===vi||se===Ar||se===Ra||se===As||se===Wh||se===Xh,_e=Re.getClearColor(),ye=Re.getClearAlpha(),Ae=_e.r,Ne=_e.g,Se=_e.b;de?(g[0]=Ae,g[1]=Ne,g[2]=Se,g[3]=ye,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Ae,x[1]=Ne,x[2]=Se,x[3]=ye,R.clearBufferiv(R.COLOR,0,x))}else O|=R.COLOR_BUFFER_BIT}L&&(O|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),ge.dispose(),Ye.dispose(),De.dispose(),S.dispose(),U.dispose(),q.dispose(),rt.dispose(),D.dispose(),be.dispose(),H.dispose(),H.removeEventListener("sessionstart",ef),H.removeEventListener("sessionend",tf),er.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=at.autoReset,L=xe.enabled,F=xe.autoUpdate,O=xe.needsUpdate,I=xe.type;he(),at.autoReset=w,xe.enabled=L,xe.autoUpdate=F,xe.needsUpdate=O,xe.type=I}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function We(w){const L=w.target;L.removeEventListener("dispose",We),bt(L)}function bt(w){$t(w),De.remove(w)}function $t(w){const L=De.get(w).programs;L!==void 0&&(L.forEach(function(F){be.releaseProgram(F)}),w.isShaderMaterial&&be.releaseShaderCache(w))}this.renderBufferDirect=function(w,L,F,O,I,se){L===null&&(L=ze);const de=I.isMesh&&I.matrixWorld.determinant()<0,_e=e0(w,L,F,O,I);ke.setMaterial(O,de);let ye=F.index,Ae=1;if(O.wireframe===!0){if(ye=ne.getWireframeAttribute(F),ye===void 0)return;Ae=2}const Ne=F.drawRange,Se=F.attributes.position;let nt=Ne.start*Ae,ot=(Ne.start+Ne.count)*Ae;se!==null&&(nt=Math.max(nt,se.start*Ae),ot=Math.min(ot,(se.start+se.count)*Ae)),ye!==null?(nt=Math.max(nt,0),ot=Math.min(ot,ye.count)):Se!=null&&(nt=Math.max(nt,0),ot=Math.min(ot,Se.count));const gt=ot-nt;if(gt<0||gt===1/0)return;rt.setup(I,O,_e,F,ye);let an,Qe=ve;if(ye!==null&&(an=$.get(ye),Qe=Ve,Qe.setIndex(an)),I.isMesh)O.wireframe===!0?(ke.setLineWidth(O.wireframeLinewidth*je()),Qe.setMode(R.LINES)):Qe.setMode(R.TRIANGLES);else if(I.isLine){let we=O.linewidth;we===void 0&&(we=1),ke.setLineWidth(we*je()),I.isLineSegments?Qe.setMode(R.LINES):I.isLineLoop?Qe.setMode(R.LINE_LOOP):Qe.setMode(R.LINE_STRIP)}else I.isPoints?Qe.setMode(R.POINTS):I.isSprite&&Qe.setMode(R.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Qe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Qe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const we=I._multiDrawStarts,Rt=I._multiDrawCounts,Ze=I._multiDrawCount,An=ye?$.get(ye).bytesPerElement:1,Pr=De.get(O).currentProgram.getUniforms();for(let on=0;on<Ze;on++)Pr.setValue(R,"_gl_DrawID",on),Qe.render(we[on]/An,Rt[on])}else if(I.isInstancedMesh)Qe.renderInstances(nt,gt,I.count);else if(F.isInstancedBufferGeometry){const we=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Rt=Math.min(F.instanceCount,we);Qe.renderInstances(nt,gt,Rt)}else Qe.render(nt,gt)};function Ke(w,L,F){w.transparent===!0&&w.side===oi&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,Ha(w,L,F),w.side=$i,w.needsUpdate=!0,Ha(w,L,F),w.side=oi):Ha(w,L,F)}this.compile=function(w,L,F=null){F===null&&(F=w),m=Ye.get(F),m.init(L),v.push(m),F.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),w!==F&&w.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights();const O=new Set;return w.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const se=I.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const _e=se[de];Ke(_e,F,I),O.add(_e)}else Ke(se,F,I),O.add(se)}),v.pop(),m=null,O},this.compileAsync=function(w,L,F=null){const O=this.compile(w,L,F);return new Promise(I=>{function se(){if(O.forEach(function(de){De.get(de).currentProgram.isReady()&&O.delete(de)}),O.size===0){I(w);return}setTimeout(se,10)}He.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Yt=null;function Zn(w){Yt&&Yt(w)}function ef(){er.stop()}function tf(){er.start()}const er=new Wv;er.setAnimationLoop(Zn),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(w){Yt=w,H.setAnimationLoop(w),w===null?er.stop():er.start()},H.addEventListener("sessionstart",ef),H.addEventListener("sessionend",tf),this.render=function(w,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(L),L=H.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,L,T),m=Ye.get(w,v.length),m.init(L),v.push(m),oe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Oe.setFromProjectionMatrix(oe),te=this.localClippingEnabled,G=re.init(this.clippingPlanes,te),b=ge.get(w,d.length),b.init(),d.push(b),H.enabled===!0&&H.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&ec(se,L,-1/0,_.sortObjects)}ec(w,L,0,_.sortObjects),b.finish(),_.sortObjects===!0&&b.sort(P,Y),tt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,tt&&Re.addToRenderList(b,w),this.info.render.frame++,G===!0&&re.beginShadows();const F=m.state.shadowsArray;xe.render(F,w,L),G===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=b.opaque,I=b.transmissive;if(m.setupLights(),L.isArrayCamera){const se=L.cameras;if(I.length>0)for(let de=0,_e=se.length;de<_e;de++){const ye=se[de];rf(O,I,w,ye)}tt&&Re.render(w);for(let de=0,_e=se.length;de<_e;de++){const ye=se[de];nf(b,w,ye,ye.viewport)}}else I.length>0&&rf(O,I,w,L),tt&&Re.render(w),nf(b,w,L);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(_,w,L),rt.resetDefaultState(),N=-1,W=null,v.pop(),v.length>0?(m=v[v.length-1],G===!0&&re.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?b=d[d.length-1]:b=null};function ec(w,L,F,O){if(w.visible===!1)return;if(w.layers.test(L.layers)){if(w.isGroup)F=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(L);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Oe.intersectsSprite(w)){O&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);const de=q.update(w),_e=w.material;_e.visible&&b.push(w,de,_e,F,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Oe.intersectsObject(w))){const de=q.update(w),_e=w.material;if(O&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Te.copy(de.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(_e)){const ye=de.groups;for(let Ae=0,Ne=ye.length;Ae<Ne;Ae++){const Se=ye[Ae],nt=_e[Se.materialIndex];nt&&nt.visible&&b.push(w,de,nt,F,Te.z,Se)}}else _e.visible&&b.push(w,de,_e,F,Te.z,null)}}const se=w.children;for(let de=0,_e=se.length;de<_e;de++)ec(se[de],L,F,O)}function nf(w,L,F,O){const I=w.opaque,se=w.transmissive,de=w.transparent;m.setupLightsView(F),G===!0&&re.setGlobalState(_.clippingPlanes,F),O&&ke.viewport(y.copy(O)),I.length>0&&ja(I,L,F),se.length>0&&ja(se,L,F),de.length>0&&ja(de,L,F),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function rf(w,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new Nr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Ba:vi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=m.state.transmissionRenderTarget[O.id],de=O.viewport||y;se.setSize(de.z,de.w);const _e=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(z),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),tt&&Re.render(F);const ye=_.toneMapping;_.toneMapping=Wi;const Ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),G===!0&&re.setGlobalState(_.clippingPlanes,O),ja(w,F,O),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Se=0,nt=L.length;Se<nt;Se++){const ot=L[Se],gt=ot.object,an=ot.geometry,Qe=ot.material,we=ot.group;if(Qe.side===oi&&gt.layers.test(O.layers)){const Rt=Qe.side;Qe.side=rn,Qe.needsUpdate=!0,sf(gt,F,O,an,Qe,we),Qe.side=Rt,Qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se))}_.setRenderTarget(_e),_.setClearColor(z,X),Ae!==void 0&&(O.viewport=Ae),_.toneMapping=ye}function ja(w,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let I=0,se=w.length;I<se;I++){const de=w[I],_e=de.object,ye=de.geometry,Ae=O===null?de.material:O,Ne=de.group;_e.layers.test(F.layers)&&sf(_e,L,F,ye,Ae,Ne)}}function sf(w,L,F,O,I,se){w.onBeforeRender(_,L,F,O,I,se),w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),I.onBeforeRender(_,L,F,O,w,se),I.transparent===!0&&I.side===oi&&I.forceSinglePass===!1?(I.side=rn,I.needsUpdate=!0,_.renderBufferDirect(F,L,O,I,w,se),I.side=$i,I.needsUpdate=!0,_.renderBufferDirect(F,L,O,I,w,se),I.side=oi):_.renderBufferDirect(F,L,O,I,w,se),w.onAfterRender(_,L,F,O,I,se)}function Ha(w,L,F){L.isScene!==!0&&(L=ze);const O=De.get(w),I=m.state.lights,se=m.state.shadowsArray,de=I.state.version,_e=be.getParameters(w,I.state,se,L,F),ye=be.getProgramCacheKey(_e);let Ae=O.programs;O.environment=w.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(w.isMeshStandardMaterial?U:S).get(w.envMap||O.environment),O.envMapRotation=O.environment!==null&&w.envMap===null?L.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",We),Ae=new Map,O.programs=Ae);let Ne=Ae.get(ye);if(Ne!==void 0){if(O.currentProgram===Ne&&O.lightsStateVersion===de)return of(w,_e),Ne}else _e.uniforms=be.getUniforms(w),w.onBeforeCompile(_e,_),Ne=be.acquireProgram(_e,ye),Ae.set(ye,Ne),O.uniforms=_e.uniforms;const Se=O.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=re.uniform),of(w,_e),O.needsLights=n0(w),O.lightsStateVersion=de,O.needsLights&&(Se.ambientLightColor.value=I.state.ambient,Se.lightProbe.value=I.state.probe,Se.directionalLights.value=I.state.directional,Se.directionalLightShadows.value=I.state.directionalShadow,Se.spotLights.value=I.state.spot,Se.spotLightShadows.value=I.state.spotShadow,Se.rectAreaLights.value=I.state.rectArea,Se.ltc_1.value=I.state.rectAreaLTC1,Se.ltc_2.value=I.state.rectAreaLTC2,Se.pointLights.value=I.state.point,Se.pointLightShadows.value=I.state.pointShadow,Se.hemisphereLights.value=I.state.hemi,Se.directionalShadowMap.value=I.state.directionalShadowMap,Se.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Se.spotShadowMap.value=I.state.spotShadowMap,Se.spotLightMatrix.value=I.state.spotLightMatrix,Se.spotLightMap.value=I.state.spotLightMap,Se.pointShadowMap.value=I.state.pointShadowMap,Se.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=Ne,O.uniformsList=null,Ne}function af(w){if(w.uniformsList===null){const L=w.currentProgram.getUniforms();w.uniformsList=el.seqWithValue(L.seq,w.uniforms)}return w.uniformsList}function of(w,L){const F=De.get(w);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function e0(w,L,F,O,I){L.isScene!==!0&&(L=ze),C.resetTextureUnits();const se=L.fog,de=O.isMeshStandardMaterial?L.environment:null,_e=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ji,ye=(O.isMeshStandardMaterial?U:S).get(O.envMap||de),Ae=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ne=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!F.morphAttributes.position,nt=!!F.morphAttributes.normal,ot=!!F.morphAttributes.color;let gt=Wi;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gt=_.toneMapping);const an=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qe=an!==void 0?an.length:0,we=De.get(O),Rt=m.state.lights;if(G===!0&&(te===!0||w!==W)){const gn=w===W&&O.id===N;re.setState(O,w,gn)}let Ze=!1;O.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Rt.state.version||we.outputColorSpace!==_e||I.isBatchedMesh&&we.batching===!1||!I.isBatchedMesh&&we.batching===!0||I.isBatchedMesh&&we.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&we.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&we.instancing===!1||!I.isInstancedMesh&&we.instancing===!0||I.isSkinnedMesh&&we.skinning===!1||!I.isSkinnedMesh&&we.skinning===!0||I.isInstancedMesh&&we.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&we.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&we.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&we.instancingMorph===!1&&I.morphTexture!==null||we.envMap!==ye||O.fog===!0&&we.fog!==se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==re.numPlanes||we.numIntersection!==re.numIntersection)||we.vertexAlphas!==Ae||we.vertexTangents!==Ne||we.morphTargets!==Se||we.morphNormals!==nt||we.morphColors!==ot||we.toneMapping!==gt||we.morphTargetsCount!==Qe)&&(Ze=!0):(Ze=!0,we.__version=O.version);let An=we.currentProgram;Ze===!0&&(An=Ha(O,L,I));let Pr=!1,on=!1,tc=!1;const _t=An.getUniforms(),bi=we.uniforms;if(ke.useProgram(An.program)&&(Pr=!0,on=!0,tc=!0),O.id!==N&&(N=O.id,on=!0),Pr||W!==w){$e.reverseDepthBuffer?(ce.copy(w.projectionMatrix),eS(ce),tS(ce),_t.setValue(R,"projectionMatrix",ce)):_t.setValue(R,"projectionMatrix",w.projectionMatrix),_t.setValue(R,"viewMatrix",w.matrixWorldInverse);const gn=_t.map.cameraPosition;gn!==void 0&&gn.setValue(R,Ce.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&_t.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,on=!0,tc=!0)}if(I.isSkinnedMesh){_t.setOptional(R,I,"bindMatrix"),_t.setOptional(R,I,"bindMatrixInverse");const gn=I.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),_t.setValue(R,"boneTexture",gn.boneTexture,C))}I.isBatchedMesh&&(_t.setOptional(R,I,"batchingTexture"),_t.setValue(R,"batchingTexture",I._matricesTexture,C),_t.setOptional(R,I,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",I._indirectTexture,C),_t.setOptional(R,I,"batchingColorTexture"),I._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",I._colorsTexture,C));const nc=F.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0)&&Pe.update(I,F,An),(on||we.receiveShadow!==I.receiveShadow)&&(we.receiveShadow=I.receiveShadow,_t.setValue(R,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(bi.envMap.value=ye,bi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(bi.envMapIntensity.value=L.environmentIntensity),on&&(_t.setValue(R,"toneMappingExposure",_.toneMappingExposure),we.needsLights&&t0(bi,tc),se&&O.fog===!0&&le.refreshFogUniforms(bi,se),le.refreshMaterialUniforms(bi,O,Q,j,m.state.transmissionRenderTarget[w.id]),el.upload(R,af(we),bi,C)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(el.upload(R,af(we),bi,C),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&_t.setValue(R,"center",I.center),_t.setValue(R,"modelViewMatrix",I.modelViewMatrix),_t.setValue(R,"normalMatrix",I.normalMatrix),_t.setValue(R,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const gn=O.uniformsGroups;for(let ic=0,i0=gn.length;ic<i0;ic++){const lf=gn[ic];D.update(lf,An),D.bind(lf,An)}}return An}function t0(w,L){w.ambientLightColor.needsUpdate=L,w.lightProbe.needsUpdate=L,w.directionalLights.needsUpdate=L,w.directionalLightShadows.needsUpdate=L,w.pointLights.needsUpdate=L,w.pointLightShadows.needsUpdate=L,w.spotLights.needsUpdate=L,w.spotLightShadows.needsUpdate=L,w.rectAreaLights.needsUpdate=L,w.hemisphereLights.needsUpdate=L}function n0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,L,F){De.get(w.texture).__webglTexture=L,De.get(w.depthTexture).__webglTexture=F;const O=De.get(w);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,L){const F=De.get(w);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(w,L=0,F=0){T=w,k=L,A=F;let O=!0,I=null,se=!1,de=!1;if(w){const ye=De.get(w);if(ye.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(R.FRAMEBUFFER,null),O=!1;else if(ye.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(ye.__hasExternalTextures)C.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Se=w.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&De.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(de=!0);const Ne=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[L])?I=Ne[L][F]:I=Ne[L],se=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?I=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?I=Ne[F]:I=Ne,y.copy(w.viewport),E.copy(w.scissor),V=w.scissorTest}else y.copy(K).multiplyScalar(Q).floor(),E.copy(ee).multiplyScalar(Q).floor(),V=pe;if(ke.bindFramebuffer(R.FRAMEBUFFER,I)&&O&&ke.drawBuffers(w,I),ke.viewport(y),ke.scissor(E),ke.setScissorTest(V),se){const ye=De.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,F)}else if(de){const ye=De.get(w.texture),Ae=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.__webglTexture,F||0,Ae)}N=-1},this.readRenderTargetPixels=function(w,L,F,O,I,se,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){ke.bindFramebuffer(R.FRAMEBUFFER,_e);try{const ye=w.texture,Ae=ye.format,Ne=ye.type;if(!$e.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=w.width-O&&F>=0&&F<=w.height-I&&R.readPixels(L,F,O,I,Le.convert(Ae),Le.convert(Ne),se)}finally{const ye=T!==null?De.get(T).__webglFramebuffer:null;ke.bindFramebuffer(R.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,L,F,O,I,se,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){const ye=w.texture,Ae=ye.format,Ne=ye.type;if(!$e.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=w.width-O&&F>=0&&F<=w.height-I){ke.bindFramebuffer(R.FRAMEBUFFER,_e);const Se=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Se),R.bufferData(R.PIXEL_PACK_BUFFER,se.byteLength,R.STREAM_READ),R.readPixels(L,F,O,I,Le.convert(Ae),Le.convert(Ne),0);const nt=T!==null?De.get(T).__webglFramebuffer:null;ke.bindFramebuffer(R.FRAMEBUFFER,nt);const ot=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Jb(R,ot,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Se),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,se),R.deleteBuffer(Se),R.deleteSync(ot),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,L=null,F=0){w.isTexture!==!0&&(Jo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,w=arguments[1]);const O=Math.pow(2,-F),I=Math.floor(w.image.width*O),se=Math.floor(w.image.height*O),de=L!==null?L.x:0,_e=L!==null?L.y:0;C.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,de,_e,I,se),ke.unbindTexture()},this.copyTextureToTexture=function(w,L,F=null,O=null,I=0){w.isTexture!==!0&&(Jo("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1],L=arguments[2],I=arguments[3]||0,F=null);let se,de,_e,ye,Ae,Ne;F!==null?(se=F.max.x-F.min.x,de=F.max.y-F.min.y,_e=F.min.x,ye=F.min.y):(se=w.image.width,de=w.image.height,_e=0,ye=0),O!==null?(Ae=O.x,Ne=O.y):(Ae=0,Ne=0);const Se=Le.convert(L.format),nt=Le.convert(L.type);C.setTexture2D(L,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const ot=R.getParameter(R.UNPACK_ROW_LENGTH),gt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),an=R.getParameter(R.UNPACK_SKIP_PIXELS),Qe=R.getParameter(R.UNPACK_SKIP_ROWS),we=R.getParameter(R.UNPACK_SKIP_IMAGES),Rt=w.isCompressedTexture?w.mipmaps[I]:w.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_e),R.pixelStorei(R.UNPACK_SKIP_ROWS,ye),w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,I,Ae,Ne,se,de,Se,nt,Rt.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,I,Ae,Ne,Rt.width,Rt.height,Se,Rt.data):R.texSubImage2D(R.TEXTURE_2D,I,Ae,Ne,se,de,Se,nt,Rt),R.pixelStorei(R.UNPACK_ROW_LENGTH,ot),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,gt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,an),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,we),I===0&&L.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(w,L,F=null,O=null,I=0){w.isTexture!==!0&&(Jo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,w=arguments[2],L=arguments[3],I=arguments[4]||0);let se,de,_e,ye,Ae,Ne,Se,nt,ot;const gt=w.isCompressedTexture?w.mipmaps[I]:w.image;F!==null?(se=F.max.x-F.min.x,de=F.max.y-F.min.y,_e=F.max.z-F.min.z,ye=F.min.x,Ae=F.min.y,Ne=F.min.z):(se=gt.width,de=gt.height,_e=gt.depth,ye=0,Ae=0,Ne=0),O!==null?(Se=O.x,nt=O.y,ot=O.z):(Se=0,nt=0,ot=0);const an=Le.convert(L.format),Qe=Le.convert(L.type);let we;if(L.isData3DTexture)C.setTexture3D(L,0),we=R.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)C.setTexture2DArray(L,0),we=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const Rt=R.getParameter(R.UNPACK_ROW_LENGTH),Ze=R.getParameter(R.UNPACK_IMAGE_HEIGHT),An=R.getParameter(R.UNPACK_SKIP_PIXELS),Pr=R.getParameter(R.UNPACK_SKIP_ROWS),on=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,gt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,gt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ae),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ne),w.isDataTexture||w.isData3DTexture?R.texSubImage3D(we,I,Se,nt,ot,se,de,_e,an,Qe,gt.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(we,I,Se,nt,ot,se,de,_e,an,gt.data):R.texSubImage3D(we,I,Se,nt,ot,se,de,_e,an,Qe,gt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ze),R.pixelStorei(R.UNPACK_SKIP_PIXELS,An),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pr),R.pixelStorei(R.UNPACK_SKIP_IMAGES,on),I===0&&L.generateMipmaps&&R.generateMipmap(we),ke.unbindTexture()},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),ke.unbindTexture()},this.resetState=function(){k=0,A=0,T=null,ke.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Kh?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Kl?"display-p3":"srgb"}}class Jh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=n,this.far=i}clone(){return new Jh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hT extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Zv extends Is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new B,Pl=new B,hm=new pt,Zs=new Uv,No=new Ql,ou=new B,fm=new B;class fT extends Lt{constructor(e=new yi,n=new Zv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Rl.fromBufferAttribute(n,r-1),Pl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Rl.distanceTo(Pl);e.setAttribute("lineDistance",new Kn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),No.radius+=s,e.ray.intersectsSphere(No)===!1)return;hm.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(hm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const g=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let b=g,m=x-1;b<m;b+=u){const d=f.getX(b),v=f.getX(b+1),_=ko(this,e,Zs,c,d,v);_&&n.push(_)}if(this.isLineLoop){const b=f.getX(x-1),m=f.getX(g),d=ko(this,e,Zs,c,b,m);d&&n.push(d)}}else{const g=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let b=g,m=x-1;b<m;b+=u){const d=ko(this,e,Zs,c,b,b+1);d&&n.push(d)}if(this.isLineLoop){const b=ko(this,e,Zs,c,x-1,g);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ko(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Rl.fromBufferAttribute(a,r),Pl.fromBufferAttribute(a,s),n.distanceSqToSegment(Rl,Pl,ou,fm)>i)return;ou.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(ou);if(!(c<e.near||c>e.far))return{distance:c,point:fm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const pm=new B,mm=new B;class pT extends fT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)pm.fromBufferAttribute(n,r),mm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+pm.distanceTo(mm);e.setAttribute("lineDistance",new Kn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Ro=new B,Po=new B,lu=new B,Do=new bn;class mT extends yi{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Zo*n),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,u=[0,0,0],f=["a","b","c"],p=new Array(3),h={},g=[];for(let x=0;x<c;x+=3){a?(u[0]=a.getX(x),u[1]=a.getX(x+1),u[2]=a.getX(x+2)):(u[0]=x,u[1]=x+1,u[2]=x+2);const{a:b,b:m,c:d}=Do;if(b.fromBufferAttribute(o,u[0]),m.fromBufferAttribute(o,u[1]),d.fromBufferAttribute(o,u[2]),Do.getNormal(lu),p[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let v=0;v<3;v++){const _=(v+1)%3,M=p[v],k=p[_],A=Do[f[v]],T=Do[f[_]],N=`${M}_${k}`,W=`${k}_${M}`;W in h&&h[W]?(lu.dot(h[W].normal)<=s&&(g.push(A.x,A.y,A.z),g.push(T.x,T.y,T.z)),h[W]=null):N in h||(h[N]={index0:u[v],index1:u[_],normal:lu.clone()})}}for(const x in h)if(h[x]){const{index0:b,index1:m}=h[x];Ro.fromBufferAttribute(o,b),Po.fromBufferAttribute(o,m),g.push(Ro.x,Ro.y,Ro.z),g.push(Po.x,Po.y,Po.z)}this.setAttribute("position",new Kn(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class gT extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rv,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jv extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const cu=new pt,gm=new B,xm=new B;class xT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(gm),xm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xm),n.updateMatrixWorld(),cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vT extends xT{constructor(){super(new Xv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vm extends Jv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new vT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _T extends Jv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class yT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_m(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=_m();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function _m(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);const bT=({activeTab:t,onTabChange:e,customImage:n})=>{const[i,r]=Me.useState("send"),s=t??i,a=N=>{r(N),e&&e(N)},[o,c]=Me.useState("phone"),[u,f]=Me.useState("25.00"),[p,h]=Me.useState("idle"),[g,x]=Me.useState(1250),[b,m]=Me.useState(!1),[d,v]=Me.useState(null),[_,M]=Me.useState([{id:"tx-1",type:"receive",title:"Nhận qua SĐT",subtitle:"Từ 0912 ••• 888",amount:"+50.00 USDC",time:"2 phút trước",signature:"5xK8...7mPq",fee:"~0.000005 SOL",status:"Finalized"},{id:"tx-2",type:"send",title:"Chuyển qua QR",subtitle:"Tới dev_merchant.sol",amount:"-15.00 USDC",time:"15 phút trước",signature:"3wP9...2jLk",fee:"~0.000005 SOL",status:"Finalized"},{id:"tx-3",type:"receive",title:"Faucet Devnet",subtitle:"Solana Devnet Airdrop",amount:"+1,000.00 USDC",time:"Hôm qua",signature:"4tNm...8vQq",fee:"0 SOL",status:"Finalized"}]),k=()=>{p==="idle"&&(h("processing"),setTimeout(()=>{const N=parseFloat(u)||25;x(y=>Math.max(0,y-N)),h("confirmed");const W={id:`tx-${Date.now()}`,type:"send",title:o==="phone"?"Chuyển qua SĐT":o==="qr"?"Chuyển qua QR":"Chuyển tới Ví",subtitle:o==="phone"?"Tới 0987 ••• 321":"Tới ned_friend.sol",amount:`-${N.toFixed(2)} USDC`,time:"Vừa xong",signature:`5tNx...${Math.random().toString(36).substring(2,6)}`,fee:"~0.000005 SOL",status:"Confirmed"};M(y=>[W,...y])},1400))},A=()=>{h("idle")},T=()=>{m(!0),setTimeout(()=>m(!1),2e3)};return n?l.jsx("img",{src:n,alt:"N.E.D Wallet App Interface",className:"w-full h-full object-cover rounded-[36px]"}):l.jsxs("div",{className:"w-full h-full bg-brand-warmCream text-brand-inkBlack flex flex-col p-3.5 sm:p-4 pb-2 select-none font-sans overflow-hidden relative",children:[l.jsxs("div",{className:"relative flex items-center justify-between text-[11px] font-extrabold text-stone-700 pb-2 border-b-2 border-brand-inkBlack/15 mb-2.5",children:[l.jsx("span",{className:"w-14 text-left font-black text-xs text-brand-inkBlack",children:"9:41"}),l.jsxs("div",{className:"h-5 px-3 bg-brand-inkBlack rounded-full flex items-center justify-center gap-1.5 shadow-sm border border-stone-800",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#111] border border-stone-700 flex items-center justify-center",children:l.jsx("span",{className:"w-0.5 h-0.5 rounded-full bg-blue-400"})}),l.jsx("span",{className:"text-[8px] font-black tracking-wider text-brand-lime uppercase",children:"Devnet"}),l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"})]}),l.jsxs("div",{className:"w-14 flex items-center justify-end gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime border border-brand-inkBlack"}),l.jsx("span",{className:"text-[9px] uppercase font-black bg-brand-deepPurple text-brand-offWhite px-1.5 py-0.5 rounded border border-brand-inkBlack shadow-brutal-xs",children:"SOL"})]})]}),l.jsxs("div",{className:"flex items-center justify-between mb-3.5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center font-black text-xs shadow-brutal-xs",children:"N"}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[9px] uppercase tracking-wider font-extrabold text-stone-600",children:"Ví Devnet"}),l.jsx("div",{className:"text-xs font-black text-brand-inkBlack",children:"ned_user.sol"})]})]}),l.jsxs("div",{className:"text-right",children:[l.jsx("div",{className:"text-[9px] uppercase tracking-wider font-bold text-stone-500",children:"Số dư"}),l.jsxs("div",{className:"text-xs font-black text-brand-inkBlack",children:[g.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",l.jsx("span",{className:"text-[10px] text-brand-lavender font-extrabold",children:"USDC"})]})]})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-1.5 p-1 bg-white border-2 border-brand-inkBlack rounded-xl mb-3 shadow-brutal-xs",children:[l.jsxs("button",{type:"button",onClick:()=>a("send"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="send"?"bg-brand-lavender text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[l.jsx(Xo,{className:"w-3 h-3"}),l.jsx("span",{children:"Chuyển"})]}),l.jsxs("button",{type:"button",onClick:()=>a("receive"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="receive"?"bg-brand-cyan text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[l.jsx(rd,{className:"w-3 h-3"}),l.jsx("span",{children:"Nhận"})]}),l.jsxs("button",{type:"button",onClick:()=>a("track"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="track"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[l.jsx(fs,{className:"w-3 h-3"}),l.jsx("span",{children:"Lịch sử"})]})]}),l.jsxs("div",{className:"flex-1 flex flex-col justify-between overflow-hidden",children:[s==="send"&&l.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn",children:[p==="idle"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-3 shadow-brutal-sm mb-2.5",children:[l.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5",children:"Phương thức nhận diện"}),l.jsxs("div",{className:"grid grid-cols-3 gap-1 bg-brand-warmCream p-1 rounded-xl border border-brand-inkBlack mb-2.5",children:[l.jsxs("button",{type:"button",onClick:()=>c("phone"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${o==="phone"?"bg-brand-lavender border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[l.jsx(sd,{className:"w-3 h-3"})," SĐT"]}),l.jsxs("button",{type:"button",onClick:()=>c("qr"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${o==="qr"?"bg-brand-cyan border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[l.jsx(av,{className:"w-3 h-3"})," QR"]}),l.jsxs("button",{type:"button",onClick:()=>c("wallet"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${o==="wallet"?"bg-brand-lime border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[l.jsx(fs,{className:"w-3 h-3"})," Ví"]})]}),l.jsxs("div",{className:"bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2 mb-2",children:[l.jsx("div",{className:"text-[9px] font-extrabold uppercase text-stone-500",children:o==="phone"?"Người nhận (Số điện thoại)":o==="qr"?"Người nhận (Quét QR)":"Người nhận (Địa chỉ Solana)"}),l.jsx("div",{className:"text-xs font-black text-brand-inkBlack mt-0.5",children:o==="phone"?"0987 ••• 321":o==="qr"?"QR_SCAN_882.sol":"7xWp...9bM2"}),l.jsxs("div",{className:"text-[9px] font-bold text-emerald-700 flex items-center gap-1 mt-0.5",children:[l.jsx(ur,{className:"w-2.5 h-2.5"})," Đã kết nối trên Devnet"]})]}),l.jsxs("div",{className:"bg-brand-offWhite border-2 border-brand-inkBlack rounded-xl p-2 text-center",children:[l.jsx("div",{className:"text-[9px] font-bold uppercase text-stone-500",children:"Số lượng chuyển"}),l.jsxs("div",{className:"text-xl font-black text-brand-inkBlack my-0.5",children:[u," ",l.jsx("span",{className:"text-xs font-extrabold text-brand-lavender",children:"USDC"})]}),l.jsx("div",{className:"flex items-center justify-center gap-1.5 mt-1",children:["10.00","25.00","50.00"].map(N=>l.jsx("button",{type:"button",onClick:()=>f(N),className:`px-2 py-0.5 text-[9px] font-black rounded border border-brand-inkBlack transition-all ${u===N?"bg-brand-lime shadow-brutal-xs -translate-y-0.5":"bg-white text-stone-600"}`,children:N},N))})]})]}),l.jsxs("div",{className:"bg-brand-lime border-2 border-brand-inkBlack rounded-xl p-2 shadow-brutal-xs flex items-center gap-2 mb-2",children:[l.jsx(ad,{className:"w-4 h-4 flex-shrink-0 text-brand-inkBlack"}),l.jsx("div",{className:"text-[9px] font-black leading-tight text-brand-inkBlack",children:"Kiểm tra đúng thông tin người nhận trước khi xác thực"})]}),l.jsxs("button",{type:"button",onClick:k,className:"w-full py-2.5 bg-brand-inkBlack text-brand-offWhite font-black text-xs rounded-xl text-center border-2 border-brand-inkBlack shadow-brutal-sm hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer",children:[l.jsx(Xo,{className:"w-3.5 h-3.5 text-brand-lime"}),l.jsx("span",{children:"Xác nhận gửi Devnet USDC"})]})]}),p==="processing"&&l.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-5 shadow-brutal-sm flex-1 flex flex-col items-center justify-center text-center animate-fadeIn",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center mb-3 shadow-brutal-xs",children:l.jsx(eb,{className:"w-6 h-6 text-brand-inkBlack animate-spin"})}),l.jsx("div",{className:"text-xs font-black text-brand-inkBlack mb-1",children:"Đang phát sóng lên Solana Devnet..."}),l.jsx("div",{className:"text-[10px] text-stone-500 font-bold mb-4",children:"Xác thực chữ ký mã hóa & cập nhật số dư"}),l.jsx("div",{className:"w-full bg-brand-warmCream border-2 border-brand-inkBlack rounded-full h-3 overflow-hidden p-0.5",children:l.jsx("div",{className:"bg-brand-lime h-full rounded-full animate-progress"})})]}),p==="confirmed"&&l.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-4 shadow-brutal-sm flex-1 flex flex-col items-center justify-between text-center animate-slideUp",children:[l.jsxs("div",{children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center mx-auto mb-2 shadow-brutal-xs animate-pulseGlow",children:l.jsx(ws,{className:"w-7 h-7 text-emerald-900 stroke-[3]"})}),l.jsx("div",{className:"text-sm font-black text-brand-inkBlack mb-0.5",children:"Giao dịch thành công!"}),l.jsxs("div",{className:"text-[10px] font-extrabold text-stone-600 mb-3",children:["Đã chuyển ",u," USDC trên Solana Devnet"]}),l.jsxs("div",{className:"bg-brand-warmCream border border-brand-inkBlack rounded-xl p-2 text-left text-[9px] font-bold space-y-1 mb-3",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-stone-500",children:"Mã giao dịch:"}),l.jsx("span",{className:"font-mono font-bold",children:"5tNx...9aDev"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-stone-500",children:"Thời gian xác thực:"}),l.jsx("span",{className:"text-emerald-700 font-extrabold",children:"0.6 giây"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-stone-500",children:"Phí mạng:"}),l.jsx("span",{children:"~0.000005 SOL"})]})]})]}),l.jsxs("div",{className:"w-full flex gap-2",children:[l.jsxs("button",{type:"button",onClick:A,className:"flex-1 py-2 bg-brand-lavender text-brand-inkBlack font-black text-[11px] rounded-xl border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center gap-1",children:[l.jsx(ib,{className:"w-3 h-3"}),l.jsx("span",{children:"Thử gửi lại"})]}),l.jsxs("button",{type:"button",onClick:()=>a("track"),className:"flex-1 py-2 bg-brand-lime text-brand-inkBlack font-black text-[11px] rounded-xl border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center gap-1",children:[l.jsx(fs,{className:"w-3 h-3"}),l.jsx("span",{children:"Xem lịch sử"})]})]})]})]}),s==="receive"&&l.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn",children:[l.jsxs("div",{className:"w-full bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 shadow-brutal-sm text-center flex flex-col items-center",children:[l.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5",children:"Mã QR Nhận Stablecoin"}),l.jsxs("div",{className:"w-32 h-32 sm:w-36 sm:h-36 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl p-2.5 flex flex-col items-center justify-center relative shadow-brutal-xs my-1 overflow-hidden",children:[l.jsx("div",{className:"absolute left-0 right-0 h-1 bg-brand-cyan border-y border-brand-inkBlack shadow-[0_0_8px_#08CEE3] animate-scanLaser z-10 pointer-events-none"}),l.jsxs("div",{className:"grid grid-cols-6 gap-1 w-full h-full p-1 bg-white rounded-lg border border-brand-inkBlack",children:[l.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),l.jsx("div",{className:"bg-brand-lavender rounded"}),l.jsx("div",{className:"bg-brand-cyan rounded"}),l.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),l.jsx("div",{className:"bg-brand-lime rounded"}),l.jsx("div",{className:"bg-brand-inkBlack col-span-4 rounded"}),l.jsx("div",{className:"bg-brand-lavender rounded"}),l.jsx("div",{className:"bg-brand-cyan rounded"}),l.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),l.jsx("div",{className:"bg-brand-lime rounded"}),l.jsx("div",{className:"bg-brand-inkBlack rounded"}),l.jsx("div",{className:"bg-brand-lavender rounded"})]}),l.jsx("div",{className:"absolute w-6 h-6 rounded-lg bg-brand-deepPurple text-white flex items-center justify-center text-[9px] font-black border border-brand-inkBlack shadow-brutal-xs",children:"N"})]}),l.jsx("div",{className:"text-xs font-black mt-1",children:"ned_user.sol"}),l.jsx("div",{className:"text-[10px] font-bold text-stone-600",children:"SĐT liên kết: 0987 ••• 321"})]}),l.jsx("div",{className:"w-full bg-brand-paleYellow border-2 border-brand-inkBlack rounded-xl p-2 text-center text-[9px] font-black shadow-brutal-xs my-2",children:"Chấp nhận USDC trên mạng thử nghiệm Solana Devnet"}),l.jsx("button",{type:"button",onClick:T,className:`w-full py-2.5 rounded-xl font-black text-xs text-center border-2 border-brand-inkBlack shadow-brutal-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${b?"bg-brand-lime text-brand-inkBlack":"bg-brand-cyan text-brand-inkBlack"}`,children:b?l.jsxs(l.Fragment,{children:[l.jsx(ws,{className:"w-3.5 h-3.5 text-emerald-800"}),l.jsx("span",{children:"Đã sao chép ned_user.sol!"})]}):l.jsxs(l.Fragment,{children:[l.jsx(El,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Sao chép mã nhận tiền"})]})})]}),s==="track"&&l.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn relative",children:[l.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-2.5 shadow-brutal-xs mb-2",children:[l.jsx("div",{className:"text-[9px] font-black uppercase text-stone-500",children:"Tổng số dư Devnet"}),l.jsxs("div",{className:"text-lg font-black text-brand-inkBlack my-0.5",children:[g.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",l.jsx("span",{className:"text-xs font-extrabold text-brand-lavender",children:"USDC"})]})]}),l.jsxs("div",{className:"flex-1 flex flex-col gap-1.5 overflow-y-auto pr-0.5 mb-2",children:[l.jsx("div",{className:"text-[9px] font-black uppercase tracking-wider text-stone-500",children:"Giao dịch gần đây (Bấm để xem chi tiết)"}),_.map(N=>l.jsxs("button",{type:"button",onClick:()=>v(N),className:"w-full text-left bg-brand-offWhite hover:bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2 flex items-center justify-between shadow-brutal-xs transition-transform active:scale-[0.98] cursor-pointer",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:`w-7 h-7 rounded-lg border border-brand-inkBlack flex items-center justify-center ${N.type==="receive"?"bg-brand-lime":"bg-brand-lavender"}`,children:N.type==="receive"?l.jsx(rd,{className:"w-3.5 h-3.5"}):l.jsx(Xo,{className:"w-3.5 h-3.5"})}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-black",children:N.title}),l.jsx("div",{className:"text-[8px] text-stone-500 font-bold",children:N.time})]})]}),l.jsxs("div",{className:"text-right",children:[l.jsx("div",{className:`text-[11px] font-black ${N.type==="receive"?"text-emerald-700":"text-brand-inkBlack"}`,children:N.amount}),l.jsxs("div",{className:"text-[8px] text-stone-500 font-bold flex items-center justify-end gap-0.5",children:[l.jsx("span",{children:"Devnet"}),l.jsx(Vx,{className:"w-2.5 h-2.5 text-stone-400"})]})]})]},N.id))]}),d&&l.jsxs("div",{className:"absolute inset-0 bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 flex flex-col justify-between shadow-brutal animate-slideUp z-20",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-brand-inkBlack/20 mb-2",children:[l.jsx("span",{className:"text-[10px] font-black uppercase text-stone-500",children:"Biên lai Devnet"}),l.jsx("button",{type:"button",onClick:()=>v(null),className:"p-1 rounded-md bg-stone-100 hover:bg-stone-200 border border-brand-inkBlack",children:l.jsx(xv,{className:"w-3.5 h-3.5"})})]}),l.jsxs("div",{className:"text-center my-2",children:[l.jsx("div",{className:"text-base font-black",children:d.amount}),l.jsx("div",{className:"text-[10px] font-bold text-stone-600",children:d.title})]}),l.jsxs("div",{className:"space-y-1.5 text-[9px] font-bold bg-brand-warmCream p-2 rounded-xl border border-brand-inkBlack",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-stone-500",children:"Chữ ký (Tx):"}),l.jsx("span",{className:"font-mono",children:d.signature})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-stone-500",children:"Mạng:"}),l.jsx("span",{children:"Solana Devnet"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-stone-500",children:"Trạng thái:"}),l.jsx("span",{className:"text-emerald-700 font-extrabold",children:d.status})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-stone-500",children:"Phí mạng:"}),l.jsx("span",{children:d.fee})]})]})]}),l.jsx("button",{type:"button",onClick:()=>v(null),className:"w-full py-1.5 bg-brand-lavender text-brand-inkBlack font-black text-[10px] rounded-lg border border-brand-inkBlack shadow-brutal-xs",children:"Đóng biên lai"})]}),l.jsx("div",{className:"text-center text-[9px] font-bold text-stone-500 pt-1 border-t border-brand-inkBlack/15",children:"Giao dịch mô phỏng Devnet thời gian thực"})]})]}),l.jsx("div",{className:"pt-2 flex justify-center items-center pointer-events-none",children:l.jsx("div",{className:"w-28 h-1 bg-brand-inkBlack/30 rounded-full"})})]})},ST=({children:t,className:e="",maxTiltX:n=16,maxTiltY:i=20})=>{const r=Me.useRef(null),s=Me.useRef(null),a=Me.useRef(null);return Me.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let c=0,u=0,f=0,p=0,h=0,g=0,x=0,b=0,m=!1,d,v;const _=A=>{if(!s.current)return;m=!0,clearTimeout(d);const T=s.current.getBoundingClientRect(),N=T.left+T.width/2,W=T.top+T.height/2,y=Math.max(-1.5,Math.min(1.5,(A.clientX-N)/(window.innerWidth/2))),E=Math.max(-1.5,Math.min(1.5,(A.clientY-W)/(window.innerHeight/2)));u=y*i,c=-E*n,f=y*8,p=E*6,d=window.setTimeout(()=>{m=!1},2500)};window.addEventListener("mousemove",_,{passive:!0});let M=0;const k=()=>{if(v=requestAnimationFrame(k),M+=.02,!m){const A=Math.sin(M*1.2)*4,T=Math.cos(M*.9)*6;c=A,u=T,f=Math.sin(M*.8)*3,p=Math.cos(M*1.1)*4}if(h+=(c-h)*.08,g+=(u-g)*.08,x+=(f-x)*.08,b+=(p-b)*.08,s.current){s.current.style.transform=`
          perspective(1200px)
          translate3d(${x.toFixed(2)}px, ${b.toFixed(2)}px, 0px)
          rotateX(${h.toFixed(2)}deg)
          rotateY(${g.toFixed(2)}deg)
        `;const A=(x*-.6).toFixed(1),T=(26+b*.5).toFixed(1);s.current.style.boxShadow=`
          ${A}px ${T}px 32px -4px rgba(0, 0, 0, 0.7),
          0px 8px 16px -2px rgba(0, 0, 0, 0.4)
        `}if(a.current){const A=(-x*1.5).toFixed(1),T=(1+Math.abs(g)*.015).toFixed(2),N=(1-Math.abs(h)*.02).toFixed(2),W=Math.max(.3,Math.min(.7,.55-b*.02)).toFixed(2);a.current.style.transform=`
          translateX(${A}px)
          scale(${T}, ${N})
        `,a.current.style.opacity=W}};return k(),()=>{window.removeEventListener("mousemove",_),clearTimeout(d),cancelAnimationFrame(v)}},[n,i]),l.jsxs("div",{ref:r,className:`relative flex items-center justify-center [perspective:1200px] ${e}`,children:[l.jsx("div",{ref:a,className:"absolute -bottom-8 w-[82%] h-12 bg-black/60 rounded-[100%] blur-2xl pointer-events-none transition-transform duration-75 will-change-transform z-0","aria-hidden":"true"}),l.jsx("div",{ref:s,className:"relative w-full h-full will-change-transform [transform-style:preserve-3d] transition-[shadow] duration-75 rounded-[48px] z-10",children:t})]})},MT=()=>{const{t}=Cn(),e=Me.useRef(null),n=Me.useRef(null),[i,r]=Me.useState(!0),[s,a]=Me.useState("sim"),[o,c]=Me.useState(0),u=[{id:"home",label:"Trang chủ",title:"Ví N.E.D - Màn hình chính",src:Ee.screenshots.dashboardHome},{id:"transfer",label:"Chuyển tiền",title:"Trung tâm chuyển tiền",src:Ee.screenshots.transferCenter},{id:"lucky",label:"Tung đồng xu",title:"Phòng Lì Xì Tung Đồng Xu",src:Ee.screenshots.luckyCoin},{id:"split",label:"Shake & Split",title:"Lắc chia tiền",src:Ee.screenshots.shakeSplit}];Me.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(!1);return}const g=n.current;if(!g)return;let x,b,m,d;const v=[],_=[],M=[];try{x=new hT;const k=g.clientWidth||window.innerWidth,A=g.clientHeight||750;b=new yn(45,k/A,.1,100),b.position.set(0,0,16),m=new dT({alpha:!0,antialias:!0,powerPreference:"high-performance"}),m.setSize(k,A),m.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),g.appendChild(m.domElement),x.fog=new Jh(919077,12,32);const T=new _T(16777215,1.6);x.add(T);const N=new vm(11835376,1.8);N.position.set(10,15,10),x.add(N);const W=new vm(577251,1.3);W.position.set(-10,-10,8),x.add(W);const y=[11835376,14024448,577251,16774054,2956116,15789021],E=new Zv({color:1118481,transparent:!0,opacity:.65});M.push(E);const V=65;for(let ee=0;ee<V;ee++){const pe=.5+Math.random()*.75,Oe=.5+Math.random()*.75,G=.5+Math.random()*.75,te=new Us(pe,Oe,G);_.push(te);const ce=y[ee%y.length],oe=new gT({color:ce,roughness:.4,metalness:.08,transparent:!0,opacity:.72});M.push(oe);const Ce=new Xn(te,oe),Te=new mT(te);_.push(Te);const ze=new pT(Te,E);Ce.add(ze);const je=-16+ee/V*32+(Math.random()-.5)*4,R=-7+Math.random()*14,Ht=-6+Math.random()*10;Ce.position.set(je,R,Ht),Ce.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),x.add(Ce),v.push({mesh:Ce,rotSpeedX:(Math.random()-.5)*.014,rotSpeedY:(Math.random()-.5)*.016,rotSpeedZ:(Math.random()-.5)*.012,floatSpeed:.7+Math.random()*1.3,floatAmplitude:.25+Math.random()*.45,initialY:R})}let z=0,X=0,J=0,j=0;const Q=ee=>{z=ee.clientX/window.innerWidth*2-1,X=-(ee.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",Q);const P=()=>{if(!g)return;const ee=g.clientWidth,pe=g.clientHeight;b.aspect=ee/pe,b.updateProjectionMatrix(),m.setSize(ee,pe)};window.addEventListener("resize",P);const Y=new yT,K=()=>{d=requestAnimationFrame(K);const ee=Y.getElapsedTime();J+=(z*.8-J)*.04,j+=(X*.5-j)*.04,b.position.x=J,b.position.y=j,b.lookAt(0,0,0),v.forEach(pe=>{pe.mesh.rotation.x+=pe.rotSpeedX,pe.mesh.rotation.y+=pe.rotSpeedY,pe.mesh.rotation.z+=pe.rotSpeedZ,pe.mesh.position.y=pe.initialY+Math.sin(ee*pe.floatSpeed)*pe.floatAmplitude}),m.render(x,b)};return K(),()=>{cancelAnimationFrame(d),window.removeEventListener("mousemove",Q),window.removeEventListener("resize",P),g.contains(m.domElement)&&g.removeChild(m.domElement),m.dispose(),_.forEach(ee=>ee.dispose()),M.forEach(ee=>ee.dispose())}}catch{r(!1)}},[]);const f=h=>{h.preventDefault();const g=document.querySelector("#demo");g&&g.scrollIntoView({behavior:"smooth",block:"start"})},p=h=>{h.preventDefault();const g=document.querySelector("#experience");g&&g.scrollIntoView({behavior:"smooth",block:"start"})};return l.jsxs("section",{ref:e,className:"relative w-full min-h-[720px] bg-brand-deepPurple text-brand-offWhite pt-10 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack overflow-hidden flex items-center",children:[i&&l.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden","aria-hidden":"true"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-brand-deepPurple/80 via-brand-deepPurple/40 to-transparent pointer-events-none z-0","aria-hidden":"true"}),l.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none z-0",style:{backgroundImage:`
            linear-gradient(to right, #B497F0 1px, transparent 1px),
            linear-gradient(to bottom, #B497F0 1px, transparent 1px)
          `,backgroundSize:"48px 48px"}}),l.jsxs("div",{className:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10",children:[l.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start text-left",children:[l.jsx(Be,{animation:"fade-up",delay:40,children:l.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-offWhite mb-5 shadow-brutal-xs",children:[l.jsx("img",{src:Ee.mascots.waving,alt:"NED Teddy",className:"w-7 h-7 object-contain flex-shrink-0 -my-1"}),l.jsx("span",{className:"text-xs font-black tracking-wide text-brand-lavender",children:"N.E.D Teddy"}),l.jsx("span",{className:"text-stone-400 text-xs",children:"•"}),l.jsx("span",{className:"text-xs font-bold text-stone-200",children:t.mascot.heroCompanion})]})}),l.jsx(Be,{animation:"fade-up",delay:80,children:l.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-offWhite tracking-tight leading-[1.08] mb-6 whitespace-pre-line",children:t.hero.headline})}),l.jsx(Be,{animation:"fade-up",delay:160,children:l.jsx("p",{className:"text-base sm:text-lg lg:text-xl text-stone-300 font-medium max-w-2xl leading-relaxed mb-8",children:t.hero.description})}),l.jsx(Be,{animation:"fade-up",delay:240,children:l.jsxs("div",{className:"w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4",children:[l.jsxs("button",{type:"button",onClick:f,className:"btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer",children:[l.jsx("span",{children:t.hero.ctaPrimary}),l.jsx(Cr,{className:"w-5 h-5"})]}),l.jsxs("button",{type:"button",onClick:p,className:"btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer",children:[l.jsx("span",{children:t.hero.ctaSecondary}),l.jsx(Vx,{className:"w-5 h-5"})]})]})}),l.jsx(Be,{animation:"fade-up",delay:320,className:"w-full",children:l.jsxs("div",{className:"mt-10 pt-6 border-t-2 border-brand-lavender/20 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs font-bold text-stone-300",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(xi,{className:"w-4 h-4 text-brand-lime flex-shrink-0"}),l.jsx("span",{children:t.hero.trustPill1})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(rb,{className:"w-4 h-4 text-brand-cyan flex-shrink-0"}),l.jsx("span",{children:t.hero.trustPill2})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Ky,{className:"w-4 h-4 text-brand-lavender flex-shrink-0"}),l.jsx("span",{children:t.hero.trustPill3})]})]})})]}),l.jsx("div",{className:"lg:col-span-5 flex flex-col items-center justify-center relative",children:l.jsxs(Be,{animation:"pop",delay:180,children:[l.jsxs("div",{className:"absolute bottom-24 -right-6 sm:-right-12 z-40 flex flex-col items-center gap-1.5 pointer-events-none animate-floatBob",children:[l.jsx("div",{className:"bg-brand-paleYellow text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl px-3 py-1.5 shadow-brutal-xs text-xs font-black flex items-center gap-1 whitespace-nowrap",children:l.jsx("span",{children:"Chào bạn! Mình là Teddy 💜"})}),l.jsx("img",{src:Ee.mascots.waving,alt:"NED Teddy Waving Mascot",className:"w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]",loading:"eager"})]}),l.jsx(ST,{className:"w-[310px] xs:w-[330px] sm:w-[350px] h-[640px] sm:h-[670px]",children:l.jsxs("div",{className:"relative w-full h-full rounded-[48px] bg-brand-inkBlack border-4 border-brand-inkBlack p-2.5 sm:p-3 [transform-style:preserve-3d] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]",children:[l.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center bg-brand-inkBlack/90 border border-brand-lavender/30 rounded-full p-0.5 shadow-brutal-xs",children:[l.jsx("button",{type:"button",onClick:()=>a("sim"),className:`px-2.5 py-0.5 rounded-full text-[10px] font-black transition-all cursor-pointer ${s==="sim"?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs":"text-stone-300 hover:text-white"}`,children:"Bấm thử (Sim)"}),l.jsx("button",{type:"button",onClick:()=>a("real"),className:`px-2.5 py-0.5 rounded-full text-[10px] font-black transition-all cursor-pointer ${s==="real"?"bg-brand-cyan text-brand-inkBlack shadow-brutal-xs":"text-stone-300 hover:text-white"}`,children:"Giao diện thật"})]}),l.jsx("div",{className:"relative w-full h-full rounded-[36px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream",children:s==="sim"?l.jsx(bT,{activeTab:"send"}):l.jsxs("div",{className:"w-full h-full flex flex-col justify-between bg-[#0e0625] text-white pt-10 select-none",children:[l.jsx("div",{className:"relative flex-1 overflow-hidden",children:l.jsx("img",{src:u[o].src,alt:u[o].title,className:"w-full h-full object-cover object-top"})}),l.jsx("div",{className:"p-2.5 bg-brand-inkBlack/95 border-t-2 border-brand-inkBlack flex items-center justify-between gap-1 z-20",children:u.map((h,g)=>l.jsx("button",{type:"button",onClick:()=>c(g),className:`flex-1 py-1 px-1 rounded-lg text-[9px] font-black border transition-all truncate cursor-pointer ${o===g?"bg-brand-lavender text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs":"bg-brand-darkSurface text-stone-300 border-stone-700 hover:bg-stone-800"}`,children:h.label},h.id))})]})}),l.jsx("div",{className:"absolute -top-3.5 right-2 sm:right-4 pointer-events-none z-30 [transform:translateZ(28px)]",children:l.jsxs("div",{className:"bg-brand-lime text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3 sm:px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5 animate-floatBob",children:[l.jsx(xi,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Solana Devnet"})]})}),l.jsx("div",{className:"absolute -bottom-3.5 left-2 sm:left-4 pointer-events-none z-30 [transform:translateZ(28px)]",children:l.jsx("div",{className:"bg-brand-cyan text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3 sm:px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5",children:l.jsx("span",{children:s==="sim"?"Bấm trực tiếp để thử nghiệm":"Màn hình ứng dụng thực tế"})})})]})})]})})]})]})},wT=()=>{const{t}=Cn(),e=Me.useRef(null),[n,i]=Me.useState(!1),r=Me.useRef(0),s=Me.useRef(0),a=[{id:"northaxis",name:"NorthAxis",logoSrc:"/partners/northaxis.png",tag:"Partner"},{id:"unihackfest",name:"UniHackfest",logoSrc:"/partners/unihackfest.png",tag:"Hackathon"},{id:"vanlang",name:"Van Lang University",logoSrc:"/partners/vanlang.png",tag:"Academic"},{id:"solana",name:"Solana Devnet",isCustomSvg:!0,tag:"Blockchain"},{id:"expo",name:"Expo Mobile",isCustomSvg:!0,tag:"Platform"}],o=[...a,...a,...a,...a,...a,...a];Me.useEffect(()=>{let x=0,b=0,m;const d=()=>{x=window.scrollY*1.15+s.current};window.addEventListener("scroll",d,{passive:!0}),x=window.scrollY*1.15+s.current,b=x;const v=()=>{if(m=requestAnimationFrame(v),b+=(x-b)*.08,e.current){const _=e.current.scrollWidth,M=_>0?_/6:1350,k=(b%M+M)%M;e.current.style.transform=`translate3d(${-k.toFixed(2)}px, 0px, 0px)`}};return v(),()=>{window.removeEventListener("scroll",d),cancelAnimationFrame(m)}},[]);const c=x=>{i(!0),r.current=x.clientX},u=x=>{if(!n)return;const b=x.clientX-r.current;s.current-=b*1.8,r.current=x.clientX},f=()=>{i(!1)},p=x=>{i(!0),r.current=x.touches[0].clientX},h=x=>{if(!n)return;const b=x.touches[0].clientX-r.current;s.current-=b*1.8,r.current=x.touches[0].clientX},g=()=>{i(!1)};return l.jsxs("section",{className:"relative w-full bg-brand-lime text-brand-inkBlack py-7 sm:py-9 border-b-4 border-brand-inkBlack overflow-hidden z-20 select-none",children:[l.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none",style:{backgroundImage:`repeating-linear-gradient(
            -45deg,
            #111111,
            #111111 12px,
            transparent 12px,
            transparent 24px
          )`}}),l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4",children:l.jsx(Be,{animation:"fade-up",delay:0,children:l.jsx("div",{className:"flex items-center justify-start",children:l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-inkBlack text-brand-offWhite font-black text-xs uppercase tracking-wider shadow-brutal-xs",children:[l.jsx(xi,{className:"w-3.5 h-3.5 text-brand-lime animate-spin",style:{animationDuration:"6s"}}),l.jsx("span",{children:t.marquee.tag})]})})})}),l.jsx(Be,{animation:"pop",delay:100,children:l.jsx("div",{className:"relative w-full overflow-hidden py-2 cursor-grab active:cursor-grabbing",onMouseDown:c,onMouseMove:u,onMouseUp:f,onMouseLeave:f,onTouchStart:p,onTouchMove:h,onTouchEnd:g,children:l.jsx("div",{ref:e,className:"flex items-center gap-4 sm:gap-6 will-change-transform",style:{width:"max-content"},children:o.map((x,b)=>l.jsx("div",{className:"bg-white border-3 border-brand-inkBlack rounded-2xl px-6 py-3 shadow-brutal flex items-center justify-center gap-3 min-w-[220px] sm:min-w-[260px] h-[80px] sm:h-[88px] transition-all hover:-translate-y-1 hover:shadow-brutal-lg select-none group flex-shrink-0",children:x.logoSrc?l.jsx("div",{className:"w-full h-full flex items-center justify-center",children:l.jsx("img",{src:x.logoSrc,alt:x.name,className:"max-h-11 sm:max-h-13 max-w-[180px] sm:max-w-[210px] object-contain transition-transform group-hover:scale-105 pointer-events-none",loading:"lazy"})}):x.id==="solana"?l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-deepPurple text-white flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs",children:l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-5 h-5 text-brand-cyan",children:[l.jsx("path",{d:"M4.5 17.5H16.5L19.5 14.5H7.5L4.5 17.5Z",fill:"currentColor"}),l.jsx("path",{d:"M4.5 6.5H16.5L19.5 9.5H7.5L4.5 6.5Z",fill:"currentColor"}),l.jsx("path",{d:"M7.5 10.5H19.5L16.5 13.5H4.5L7.5 10.5Z",fill:"currentColor"})]})}),l.jsxs("div",{className:"text-left",children:[l.jsx("div",{className:"text-sm font-black text-brand-inkBlack leading-tight",children:"SOLANA"}),l.jsx("div",{className:"text-[10px] font-extrabold text-stone-500 uppercase",children:"Devnet Network"})]})]}):l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs",children:l.jsx("span",{className:"text-sm font-black",children:"E"})}),l.jsxs("div",{className:"text-left",children:[l.jsx("div",{className:"text-sm font-black text-brand-inkBlack leading-tight",children:"EXPO"}),l.jsx("div",{className:"text-[10px] font-extrabold text-stone-500 uppercase",children:"Mobile Preview"})]})]})},`${x.id}-${b}`))})})})]})},ET=()=>{const{t,lang:e}=Cn(),n=[{id:"receive",title:t.coreActions.receiveTitle,subtitle:e==="vi"?"SĐT, QR Code & Lì Xì":"Phone, QR Code & Lucky Coin",desc:e==="vi"?"Nhận USDC/SOL tức thì qua số điện thoại cá nhân, mã QR tĩnh hoặc tham gia phòng nhận Lì Xì may mắn on-chain.":"Instantly receive USDC/SOL via your phone number, static QR code, or join on-chain lucky coin giveaway rooms.",icon:rd,colorBg:"bg-brand-lavender",iconColor:"text-brand-inkBlack",mascot:Ee.mascots.happy,mascotAlt:"Teddy Happy",stepNum:"01",tag:e==="vi"?"Nhận tức thì":"Instant Receive"},{id:"send",title:t.coreActions.sendTitle,subtitle:"Gasless & Shake to Split",desc:e==="vi"?"Chuyển tiền miễn phí Gas qua N.E.D Relayer. Trải nghiệm tính năng Shake & Split: Lắc máy chia đều hóa đơn nhóm trong 3 giây.":"Gas-free transfers powered by N.E.D Relayer. Experience Shake & Split: Shake devices to split bills in 3 seconds.",icon:Xo,colorBg:"bg-brand-lime",iconColor:"text-brand-inkBlack",mascot:Ee.mascots.exciting,mascotAlt:"Teddy Exciting",stepNum:"02",tag:e==="vi"?"Miễn phí Gas":"Zero Gas"},{id:"track",title:t.coreActions.trackTitle,subtitle:e==="vi"?"Quản lý dòng tiền":"Cashflow Analytics",desc:e==="vi"?"Theo dõi số dư USDC thời gian thực, trực quan hóa biểu đồ thu vào / chi tiêu và thiết lập hạn mức ngân sách tháng thông minh.":"Real-time USDC balance tracking, visual monthly cashflow charts, and intelligent spending budget limits.",icon:nb,colorBg:"bg-brand-cyan",iconColor:"text-brand-inkBlack",mascot:Ee.mascots.proud,mascotAlt:"Teddy Proud",stepNum:"03",tag:e==="vi"?"Minh bạch 100%":"100% Transparent"}];return l.jsx("section",{id:"experience",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:l.jsx("div",{className:"max-w-7xl mx-auto",children:l.jsxs(Be,{animation:"fade-up",delay:0,children:[l.jsxs("div",{className:"flex items-center justify-between mb-8 pb-4 border-b-2 border-brand-inkBlack/15",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase tracking-wider shadow-brutal-xs",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime border border-brand-inkBlack"}),l.jsx("span",{children:t.coreActions.badge})]}),l.jsx("div",{className:"text-xs font-bold text-stone-600 hidden sm:block",children:t.coreActions.headline})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",children:n.map(i=>{const r=i.icon;return l.jsxs("div",{className:"bg-white border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between relative overflow-hidden group",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-5",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-12 h-12 rounded-2xl ${i.colorBg} border-2 border-brand-inkBlack flex items-center justify-center shadow-brutal-xs flex-shrink-0`,children:l.jsx(r,{className:`w-6 h-6 ${i.iconColor} stroke-[2.5]`})}),l.jsxs("div",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-100 border border-brand-inkBlack text-[10px] font-black uppercase text-stone-700",children:[l.jsx(xi,{className:"w-3 h-3 text-brand-deepPurple"}),l.jsx("span",{children:i.tag})]})]}),l.jsx("div",{className:"w-12 h-12 rounded-full bg-brand-warmCream border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform",children:l.jsx("img",{src:i.mascot,alt:i.mascotAlt,className:"w-10 h-10 object-contain"})})]}),l.jsxs("div",{className:"mb-2",children:[l.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-brand-inkBlack tracking-tight",children:i.title}),l.jsx("div",{className:"text-xs font-extrabold uppercase text-brand-deepPurple tracking-wider mt-0.5",children:i.subtitle})]}),l.jsx("p",{className:"text-sm sm:text-base font-medium text-stone-700 leading-relaxed mt-3",children:i.desc})]}),l.jsxs("div",{className:"mt-6 pt-4 border-t border-brand-inkBlack/10 flex items-center justify-between text-xs font-black text-stone-500",children:[l.jsxs("span",{className:"uppercase tracking-wider",children:["Bước ",i.stepNum]}),l.jsx("span",{className:"text-[11px] text-brand-inkBlack font-bold",children:"N.E.D Ecosystem"})]})]},i.id)})})]})})})},TT=()=>{const{t,lang:e}=Cn(),[n,i]=Me.useState("real"),[r,s]=Me.useState("shake"),[a,o]=Me.useState(1),[c,u]=Me.useState("phone"),[f,p]=Me.useState("25.00"),h={shake:{title:e==="vi"?"Lắc Điện Thoại Chia Tiền (Shake & Split)":"Shake & Split",desc:e==="vi"?"Lắc máy cùng bạn bè xung quanh để tự động nhận diện và chia đều hóa đơn on-chain.":"Shake phones together to automatically detect nearby devices and split group bills on-chain.",src:Ee.screenshots.shakeSplit,badge:"Chỉ có trên N.E.D"},coin:{title:e==="vi"?"Phòng Lì Xì Tung Đồng Xu":"Lucky Coin Room",desc:e==="vi"?"Khởi tạo phòng chơi, vuốt tung đồng xu may mắn để chọn người nhận SOL/USDC trực tiếp on-chain.":"Create a room and swipe up to flip a lucky coin on-chain for giveaways and gifts.",src:Ee.screenshots.luckyCoin,badge:"Độc quyền Solana"},phone:{title:e==="vi"?"Chuyển Tiền Bằng Số Điện Thoại":"Send by Phone Number",desc:e==="vi"?"Chuyển SOL/USDC trực tiếp tới người nhận qua số điện thoại liên kết, không cần nhớ địa chỉ ví dài.":"Transfer SOL/USDC directly using linked phone numbers without needing long public keys.",src:Ee.screenshots.transferPhone,badge:"Nhanh 1-Chạm"},hub:{title:e==="vi"?"Trung Tâm Chuyển Tiền":"Transfer Hub",desc:e==="vi"?"Toàn bộ các phương thức chuyển và tương tác nhóm được sắp xếp gọn gàng trong một màn hình.":"All transfer and group interactive methods neatly organized on a single screen.",src:Ee.screenshots.transferCenter,badge:"Tổng hợp"}},g={phone:{label:"0987 ••• 321",note:"Số điện thoại trong danh bạ"},qr:{label:"merchant_coffee.sol",note:"Mã QR quét tại điểm nhận"},wallet:{label:"7xWp...9bM2",note:"Địa chỉ ví Solana Devnet"}};return l.jsx("section",{id:"send",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:l.jsx("div",{className:"max-w-7xl mx-auto",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center",children:[l.jsx("div",{className:"lg:col-span-5 flex flex-col items-start",children:l.jsxs(Be,{animation:"fade-up",delay:0,children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-inkBlack"}),l.jsx("span",{children:t.sendFeature.tag})]}),l.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight leading-[1.1] mb-5",children:t.sendFeature.headline}),l.jsx("p",{className:"text-base sm:text-lg font-medium text-stone-700 leading-relaxed mb-6",children:t.sendFeature.description}),l.jsxs("div",{className:"space-y-3 w-full max-w-md mb-6",children:[l.jsxs("div",{onClick:()=>{i("real"),s("phone")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="phone"?"bg-brand-lavender/30 -translate-y-0.5":"hover:bg-stone-50"}`,children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:l.jsx(sd,{className:"w-4 h-4 text-brand-inkBlack"})}),l.jsxs("div",{className:"text-left",children:[l.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Chuyển Tiền Bằng Số Điện Thoại"}),l.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Chuyển SOL/USDC qua SĐT liên kết"})]})]}),l.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-lime border border-brand-inkBlack rounded-md",children:"1-Chạm"})]}),l.jsxs("div",{onClick:()=>{i("real"),s("shake")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="shake"?"bg-brand-cyan/30 -translate-y-0.5":"hover:bg-stone-50"}`,children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:l.jsx(sb,{className:"w-4 h-4 text-brand-inkBlack"})}),l.jsxs("div",{className:"text-left",children:[l.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Lắc Điện Thoại Chia Tiền (Shake & Split)"}),l.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Lắc máy nhận diện bạn bè trong 20m"})]})]}),l.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-cyan border border-brand-inkBlack rounded-md",children:"Hot"})]}),l.jsxs("div",{onClick:()=>{i("real"),s("coin")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="coin"?"bg-brand-lime/30 -translate-y-0.5":"hover:bg-stone-50"}`,children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:l.jsx(Yy,{className:"w-4 h-4 text-brand-inkBlack"})}),l.jsxs("div",{className:"text-left",children:[l.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Phòng Lì Xì Tung Đồng Xu"}),l.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Tung đồng xu may mắn trực tiếp on-chain"})]})]}),l.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-paleYellow border border-brand-inkBlack rounded-md",children:"May mắn"})]}),l.jsxs("div",{onClick:()=>{i("real"),s("hub")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="hub"?"bg-brand-paleYellow/50 -translate-y-0.5":"hover:bg-stone-50"}`,children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-paleYellow border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:l.jsx(fs,{className:"w-4 h-4 text-brand-inkBlack"})}),l.jsxs("div",{className:"text-left",children:[l.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Trung Tâm Chuyển Tiền Tổng Hợp"}),l.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Tổng quan mọi phương thức chuyển"})]})]}),l.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-lavender border border-brand-inkBlack rounded-md",children:"Hub"})]})]}),l.jsxs("div",{className:"p-3.5 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal flex items-center gap-3.5 max-w-md",children:[l.jsx("img",{src:Ee.mascots.exciting,alt:"Teddy Mascot Exciting",className:"w-14 h-14 object-contain flex-shrink-0 animate-bounce",style:{animationDuration:"2.5s"}}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[11px] font-black uppercase text-brand-deepPurple tracking-wider",children:"Gợi ý từ NED Teddy"}),l.jsx("p",{className:"text-xs font-bold text-stone-800 leading-snug mt-0.5",children:t.sendFeature.mascotBubble})]})]})]})}),l.jsx("div",{className:"lg:col-span-7",children:l.jsx(Be,{animation:"pop",delay:120,children:l.jsxs("div",{className:"bg-white border-4 border-brand-inkBlack rounded-3xl p-5 sm:p-7 shadow-brutal-xl",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-brand-inkBlack",children:[l.jsxs("div",{className:"inline-flex items-center bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[l.jsx("button",{type:"button",onClick:()=>i("real"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all cursor-pointer ${n==="real"?"bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs":"text-stone-700 hover:bg-stone-200"}`,children:"Màn hình ứng dụng thực tế"}),l.jsx("button",{type:"button",onClick:()=>i("interactive"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all cursor-pointer ${n==="interactive"?"bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs":"text-stone-700 hover:bg-stone-200"}`,children:"Mô phỏng thao tác"})]}),l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lime border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase shadow-brutal-xs",children:[l.jsx(xi,{className:"w-3.5 h-3.5 text-brand-inkBlack"}),l.jsx("span",{children:"Solana Devnet"})]})]}),n==="real"&&l.jsxs("div",{className:"animate-appearance-smooth",children:[l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5",children:["shake","coin","phone","hub"].map(x=>l.jsx("button",{type:"button",onClick:()=>s(x),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack transition-all cursor-pointer text-center truncate ${r===x?"bg-brand-lavender text-brand-inkBlack shadow-brutal-xs -translate-y-0.5":"bg-brand-warmCream text-stone-700 hover:bg-stone-200"}`,children:t.sendFeature.showcaseTabs[x]},x))}),l.jsx("div",{className:"bg-brand-warmCream/60 border-3 border-brand-inkBlack rounded-2xl p-4 sm:p-5",children:l.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6",children:[l.jsx("div",{className:"w-[200px] xs:w-[220px] sm:w-[240px] flex-shrink-0 bg-brand-inkBlack border-3 border-brand-inkBlack rounded-[32px] p-2 shadow-brutal",children:l.jsx("div",{className:"w-full rounded-[24px] overflow-hidden border border-brand-inkBlack bg-white",children:l.jsx("img",{src:h[r].src,alt:h[r].title,className:"w-full h-auto object-contain max-h-[460px]",loading:"lazy"})})}),l.jsxs("div",{className:"flex-1 flex flex-col justify-between py-2 text-left",children:[l.jsxs("div",{children:[l.jsx("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-paleYellow border border-brand-inkBlack rounded-lg text-[11px] font-black uppercase text-stone-800 mb-2.5 shadow-brutal-xs",children:l.jsx("span",{children:h[r].badge})}),l.jsx("h3",{className:"text-xl sm:text-2xl font-black text-brand-inkBlack mb-2 leading-tight",children:h[r].title}),l.jsx("p",{className:"text-sm font-medium text-stone-700 leading-relaxed mb-4",children:h[r].desc}),l.jsxs("div",{className:"p-3 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-bold text-stone-700 shadow-brutal-xs",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1 text-brand-deepPurple font-black",children:[l.jsx(ad,{className:"w-4 h-4"}),l.jsx("span",{children:"Bảo mật & Miễn phí phí Gas"})]}),l.jsx("p",{className:"text-[11px] text-stone-600",children:"Mọi giao dịch chia tiền và lì xì đều được thực thi bảo mật trên Solana, tài trợ 100% phí Gas qua N.E.D Relayer."})]})]}),l.jsxs("div",{className:"mt-5 pt-3 border-t border-brand-inkBlack/15 flex items-center justify-between text-[11px] font-black text-stone-500",children:[l.jsx("span",{children:"Ảnh ứng dụng gốc từ Expo"}),l.jsx("span",{className:"text-emerald-700",children:"✓ Đang hoạt động trên Devnet"})]})]})]})})]}),n==="interactive"&&l.jsxs("div",{className:"animate-appearance-smooth",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-brand-inkBlack/15",children:[l.jsx("span",{className:"text-xs font-black uppercase text-stone-500",children:"Thử nghiệm luồng chuyển"}),l.jsx("div",{className:"flex items-center gap-1.5",children:[1,2,3].map(x=>l.jsxs("button",{type:"button",onClick:()=>o(x),className:`px-3 py-1 rounded-lg text-xs font-black border-2 border-brand-inkBlack transition-all cursor-pointer ${a===x?"bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs -translate-y-0.5":"bg-brand-warmCream text-stone-700 hover:bg-stone-200"}`,children:["Bước ",x]},x))})]}),a===1&&l.jsxs("div",{className:"animate-appearance-smooth",children:[l.jsx("div",{className:"text-xs font-black uppercase text-stone-500 mb-2",children:t.sendFeature.step1Name}),l.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[l.jsxs("button",{type:"button",onClick:()=>u("phone"),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${c==="phone"?"bg-brand-lavender text-brand-inkBlack shadow-brutal-xs":"bg-brand-warmCream text-stone-700"}`,children:[l.jsx(sd,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"SĐT"})]}),l.jsxs("button",{type:"button",onClick:()=>u("qr"),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${c==="qr"?"bg-brand-cyan text-brand-inkBlack shadow-brutal-xs":"bg-brand-warmCream text-stone-700"}`,children:[l.jsx(av,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Mã QR"})]}),l.jsxs("button",{type:"button",onClick:()=>u("wallet"),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${c==="wallet"?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs":"bg-brand-warmCream text-stone-700"}`,children:[l.jsx(fs,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Địa chỉ ví"})]})]}),l.jsxs("div",{className:"p-4 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl mb-5",children:[l.jsxs("div",{className:"text-xs font-bold text-stone-500 uppercase",children:[t.sendFeature.recipientLabel,":"]}),l.jsx("div",{className:"text-base sm:text-lg font-black text-brand-inkBlack mt-1",children:g[c].label}),l.jsx("div",{className:"text-xs text-stone-600 font-medium mt-0.5",children:g[c].note})]}),l.jsxs("button",{type:"button",onClick:()=>o(2),className:"btn-brutal-primary w-full py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2",children:[l.jsx("span",{children:"Tiếp tục sang nhập số tiền"}),l.jsx(Cr,{className:"w-4 h-4"})]})]}),a===2&&l.jsxs("div",{className:"animate-appearance-smooth",children:[l.jsx("div",{className:"text-xs font-black uppercase text-stone-500 mb-2",children:t.sendFeature.step2Name}),l.jsxs("div",{className:"p-5 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl text-center mb-4",children:[l.jsx("div",{className:"text-xs font-bold text-stone-500 uppercase",children:t.sendFeature.amountLabel}),l.jsxs("div",{className:"text-3xl sm:text-4xl font-black text-brand-inkBlack my-2",children:[f," ",l.jsx("span",{className:"text-lg font-extrabold text-brand-deepPurple",children:"USDC"})]}),l.jsx("div",{className:"flex items-center justify-center gap-2 mt-3",children:["10.00","25.00","50.00"].map(x=>l.jsxs("button",{type:"button",onClick:()=>p(x),className:`px-3 py-1.5 rounded-xl border-2 border-brand-inkBlack font-black text-xs transition-all ${f===x?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs -translate-y-0.5":"bg-white text-stone-700 hover:bg-stone-100"}`,children:[x," USDC"]},x))})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{type:"button",onClick:()=>o(1),className:"py-3 px-4 bg-brand-warmCream text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-black text-sm",children:"Quay lại"}),l.jsxs("button",{type:"button",onClick:()=>o(3),className:"btn-brutal-primary flex-1 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2",children:[l.jsx("span",{children:"Tiếp tục sang kiểm tra"}),l.jsx(Cr,{className:"w-4 h-4"})]})]})]}),a===3&&l.jsxs("div",{className:"animate-appearance-smooth",children:[l.jsx("div",{className:"text-xs font-black uppercase text-stone-500 mb-2",children:t.sendFeature.step3Name}),l.jsxs("div",{className:"p-4 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl space-y-2 text-xs font-bold mb-4",children:[l.jsxs("div",{className:"flex justify-between pb-2 border-b border-brand-inkBlack/15",children:[l.jsx("span",{className:"text-stone-500",children:"Người nhận:"}),l.jsx("span",{className:"font-black text-brand-inkBlack",children:g[c].label})]}),l.jsxs("div",{className:"flex justify-between pb-2 border-b border-brand-inkBlack/15",children:[l.jsx("span",{className:"text-stone-500",children:"Số lượng:"}),l.jsxs("span",{className:"font-black text-brand-inkBlack",children:[f," USDC"]})]}),l.jsxs("div",{className:"flex justify-between pb-2 border-b border-brand-inkBlack/15",children:[l.jsx("span",{className:"text-stone-500",children:"Mạng thử nghiệm:"}),l.jsx("span",{className:"font-black text-brand-deepPurple",children:"Solana Devnet"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-stone-500",children:"Phí mạng Devnet mẫu:"}),l.jsx("span",{className:"font-black text-emerald-800",children:"~0.000005 SOL (Được tài trợ)"})]})]}),l.jsxs("div",{className:"p-3 bg-brand-lime border-2 border-brand-inkBlack rounded-2xl flex items-center gap-2.5 mb-5 shadow-brutal-xs",children:[l.jsx(ad,{className:"w-5 h-5 text-brand-inkBlack flex-shrink-0"}),l.jsx("div",{className:"text-xs font-black text-brand-inkBlack leading-tight",children:t.sendFeature.reviewNotice})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{type:"button",onClick:()=>o(2),className:"py-3 px-4 bg-brand-warmCream text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-black text-sm",children:"Quay lại"}),l.jsxs("button",{type:"button",onClick:()=>o(1),className:"btn-brutal-cyan flex-1 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2",children:[l.jsx(ws,{className:"w-4 h-4 text-brand-inkBlack"}),l.jsx("span",{children:"Thử lại từ đầu"})]})]})]})]}),l.jsx("div",{className:"mt-5 pt-3 border-t border-brand-inkBlack/10 text-[11px] font-bold text-stone-500 text-center",children:t.sendFeature.illustrationNotice})]})})})]})})})},CT=()=>{const{t,lang:e}=Cn(),[n,i]=Me.useState("home"),r={home:{title:e==="vi"?"Trang Chủ Ví (Dashboard)":"Home Dashboard",caption:e==="vi"?"Thẻ US Dollar, số dư USDC và các thao tác nhanh":"US Dollar card, USDC balance and instant actions",src:Ee.screenshots.dashboardHome,badge:e==="vi"?"Trang chủ ví":"Wallet Home"},analytics:{title:e==="vi"?"Phân Tích Dòng Tiền":"Cashflow Analytics",caption:e==="vi"?"Biểu đồ thu chi, két tiết kiệm và hạn mức tháng":"Cashflow charts, savings vaults and monthly limits",src:Ee.screenshots.analyticsCashflow,badge:e==="vi"?"Quản lý tài chính":"Financial Hub"}};return l.jsx("section",{id:"overview",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:l.jsx("div",{className:"max-w-7xl mx-auto",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center",children:[l.jsx("div",{className:"lg:col-span-6 flex flex-col items-center",children:l.jsxs(Be,{animation:"pop",delay:0,children:[l.jsxs("div",{className:"flex items-center gap-2 mb-4 bg-white border-2 border-brand-inkBlack p-1 rounded-2xl shadow-brutal-xs",children:[l.jsx("button",{type:"button",onClick:()=>i("home"),className:`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${n==="home"?"bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack shadow-brutal-xs":"text-stone-700 hover:bg-stone-100 border-2 border-transparent"}`,children:"Trang chủ ví"}),l.jsx("button",{type:"button",onClick:()=>i("analytics"),className:`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${n==="analytics"?"bg-brand-cyan text-brand-inkBlack border-2 border-brand-inkBlack shadow-brutal-xs":"text-stone-700 hover:bg-stone-100 border-2 border-transparent"}`,children:"Phân tích dòng tiền"})]}),l.jsx("div",{className:"bg-brand-inkBlack border-4 border-brand-inkBlack rounded-[40px] p-3 sm:p-4 shadow-brutal-xl max-w-xs sm:max-w-sm mx-auto",children:l.jsx("div",{className:"rounded-[28px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream shadow-inner",children:l.jsx("img",{src:r[n].src,alt:r[n].title,className:"w-full h-auto object-contain max-h-[540px] animate-appearance-smooth",loading:"lazy"})})}),l.jsx("div",{className:"mt-4 text-center",children:l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase text-stone-700 shadow-brutal-xs",children:[l.jsx(Qy,{className:"w-3.5 h-3.5 text-brand-deepPurple"}),l.jsx("span",{children:r[n].caption})]})})]})}),l.jsx("div",{className:"lg:col-span-6 flex flex-col items-start",children:l.jsxs(Be,{animation:"fade-up",delay:120,children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-inkBlack"}),l.jsx("span",{children:t.assetOverview.tag})]}),l.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight leading-[1.1] mb-5",children:t.assetOverview.headline}),l.jsx("p",{className:"text-base sm:text-lg font-medium text-stone-700 leading-relaxed mb-6",children:t.assetOverview.description}),l.jsxs("div",{className:"space-y-3.5 w-full mb-6",children:[l.jsx("div",{className:"p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive",children:l.jsxs("div",{className:"flex items-start gap-3.5",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:l.jsx(fs,{className:"w-5 h-5 text-brand-inkBlack"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base sm:text-lg font-black text-brand-inkBlack mb-1",children:t.assetOverview.balanceCardTitle}),l.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:t.assetOverview.balanceCardDesc})]})]})}),l.jsx("div",{className:"p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive",children:l.jsxs("div",{className:"flex items-start gap-3.5",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:l.jsx($y,{className:"w-5 h-5 text-brand-inkBlack"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base sm:text-lg font-black text-brand-inkBlack mb-1",children:t.assetOverview.recentCardTitle}),l.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:t.assetOverview.recentCardDesc})]})]})}),l.jsx("div",{className:"p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive",children:l.jsxs("div",{className:"flex items-start gap-3.5",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:l.jsx(Wy,{className:"w-5 h-5 text-brand-inkBlack"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base sm:text-lg font-black text-brand-inkBlack mb-1",children:e==="vi"?"Hạn Mức & Két Tiết Kiệm":"Budget Limits & Vaults"}),l.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:e==="vi"?"Thiết lập hạn mức chi tiêu $2,000/tháng và phân loại quỹ tiết kiệm sinh lời an toàn.":"Set smart $2,000 monthly spending limits and organize savings into secure vaults."})]})]})})]}),l.jsxs("div",{className:"w-full p-4 bg-brand-paleYellow border-3 border-brand-inkBlack rounded-2xl shadow-brutal flex items-center gap-4 mb-4",children:[l.jsx("img",{src:Ee.mascots.proud,alt:"Teddy Mascot Proud",className:"w-14 h-14 object-contain flex-shrink-0"}),l.jsxs("div",{children:[l.jsxs("div",{className:"text-xs font-black uppercase text-brand-deepPurple tracking-wide flex items-center gap-1.5",children:[l.jsx(xi,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Teddy Đồng Hành Cùng Bạn"})]}),l.jsx("p",{className:"text-xs font-bold text-stone-800 leading-relaxed mt-1",children:e==="vi"?"N.E.D tự động phân loại mọi khoản thu, chi và chuyển tiền giúp bạn kiểm soát tài chính cá nhân như ứng dụng ngân hàng cao cấp.":"N.E.D automatically tracks and categorizes inflows, outflows, and transfers with banking-grade clarity."})]})]}),l.jsxs("div",{className:"flex items-start gap-2.5 p-3.5 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-bold text-stone-700 shadow-brutal-xs",children:[l.jsx(Wx,{className:"w-4 h-4 text-amber-800 flex-shrink-0 mt-0.5"}),l.jsx("span",{className:"leading-snug",children:t.assetOverview.disclaimerNotice})]})]})})]})})})},AT=()=>{const{t,lang:e}=Cn(),[n,i]=Me.useState(!1),r=async()=>{var c;try{if((c=navigator==null?void 0:navigator.clipboard)!=null&&c.writeText){await navigator.clipboard.writeText(Ee.contactEmail),i(!0),setTimeout(()=>i(!1),2500);return}}catch{}try{const u=document.createElement("textarea");u.value=Ee.contactEmail,u.style.position="fixed",u.style.left="-999999px",u.style.top="-999999px",document.body.appendChild(u),u.focus(),u.select(),document.execCommand("copy"),document.body.removeChild(u),i(!0),setTimeout(()=>i(!1),2500)}catch{}},s=e==="vi"?Ee.demoMailBodyVi:Ee.demoMailBodyEn,a=`mailto:${Ee.contactEmail}?subject=${encodeURIComponent(Ee.demoMailSubject)}&body=${encodeURIComponent(s)}`,o=[{num:t.demoGuide.step1Num,title:e==="vi"?"Đăng ký không cần Seedphrase":"Seedphrase-less Sign Up",desc:e==="vi"?"Đăng nhập bảo mật tức thì bằng Email, Google hoặc ví Phantom.":"Instant secure sign in using Email, Google, or Phantom wallet.",badge:"Email / Google / Phantom",screenshot:Ee.screenshots.login,color:"bg-brand-lavender"},{num:t.demoGuide.step2Num,title:e==="vi"?"Bảo mật tài khoản bằng SĐT":"Phone Security & Recovery",desc:e==="vi"?"Liên kết số điện thoại để khôi phục ví và nhận lì xì tức thì.":"Link your phone number for easy wallet recovery and instant transfers.",badge:e==="vi"?"Xác thực OTP 2 lớp":"2-Factor OTP",screenshot:Ee.screenshots.phoneSecurity,color:"bg-brand-cyan"},{num:t.demoGuide.step3Num,title:e==="vi"?"Nhận định danh @tên.sol":"Claim @name.sol Handle",desc:e==="vi"?"Tạo định danh cá nhân độc nhất, được tài trợ 100% phí Gas on-chain.":"Claim your unique readable handle with 100% sponsored on-chain gas.",badge:e==="vi"?"Miễn phí Gas 100%":"100% Gas Free",screenshot:Ee.screenshots.handleClaim,color:"bg-brand-lime"}];return l.jsx("section",{id:"demo",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:l.jsxs("div",{className:"max-w-6xl mx-auto",children:[l.jsx(Be,{animation:"fade-up",children:l.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12 sm:mb-16",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime border-2 border-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[l.jsx(xi,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:t.demoGuide.tag})]}),l.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-4",children:t.demoGuide.headline}),l.jsx("p",{className:"text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6",children:t.demoGuide.subtitle}),l.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 bg-white border-2 border-brand-inkBlack rounded-2xl shadow-brutal-xs text-xs font-bold text-stone-800",children:[l.jsx("img",{src:Ee.mascots.curious,alt:"Teddy Curious",className:"w-8 h-8 object-contain"}),l.jsx("span",{children:t.mascot.demoTip})]})]})}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:o.map((c,u)=>l.jsx(Be,{animation:"fade-up",delay:u*120,className:"h-full",children:l.jsxs("div",{className:"h-full bg-white border-3 border-brand-inkBlack rounded-3xl p-5 sm:p-6 shadow-brutal card-brutal-interactive flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{className:`w-11 h-11 rounded-2xl ${c.color} border-2 border-brand-inkBlack flex items-center justify-center font-black text-lg text-brand-inkBlack shadow-brutal-xs`,children:c.num}),l.jsx("span",{className:"text-[10px] font-black uppercase text-stone-600 tracking-wider px-2.5 py-1 bg-brand-warmCream border border-brand-inkBlack rounded-md",children:c.badge})]}),l.jsx("h3",{className:"text-lg sm:text-xl font-black text-brand-inkBlack mb-1.5 leading-snug",children:c.title}),l.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed mb-4",children:c.desc}),l.jsx("div",{className:"w-full bg-brand-inkBlack rounded-2xl p-2 border-2 border-brand-inkBlack shadow-brutal-xs mt-2",children:l.jsx("div",{className:"w-full rounded-xl overflow-hidden bg-white border border-brand-inkBlack",children:l.jsx("img",{src:c.screenshot,alt:c.title,className:"w-full h-44 sm:h-52 object-cover object-top hover:scale-105 transition-transform duration-300",loading:"lazy"})})})]}),l.jsxs("div",{className:"mt-4 pt-3 border-t border-brand-inkBlack/10 flex items-center justify-between text-[11px] font-black text-stone-500",children:[l.jsx("span",{children:"Giao diện thử nghiệm"}),l.jsx("span",{className:"text-brand-deepPurple font-black",children:"Solana Devnet"})]})]})},c.num))}),l.jsx(Be,{animation:"pop",delay:150,children:l.jsx("div",{className:"bg-brand-deepPurple text-brand-offWhite border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl mb-6",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[l.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-brand-darkSurface border border-brand-lavender rounded-lg text-xs font-black uppercase tracking-wider text-brand-lavender mb-3",children:[l.jsx(ka,{className:"w-3.5 h-3.5 text-brand-lime"}),l.jsx("span",{children:t.demoGuide.contactCardTitle})]}),l.jsx("h3",{className:"text-2xl sm:text-3xl font-black mb-3 text-brand-offWhite",children:"Nhận quyền truy cập thử nghiệm qua email"}),l.jsx("p",{className:"text-sm sm:text-base text-stone-300 font-medium leading-relaxed",children:"Bản demo được điều phối trực tiếp qua email để đảm bảo hướng dẫn cài đặt Expo đúng với thiết bị của bạn và tiếp nhận phản hồi hiệu quả."})]}),l.jsxs("div",{className:"lg:col-span-5 bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 shadow-brutal flex flex-col items-stretch text-center",children:[l.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-400 mb-2",children:t.demoGuide.emailLabel}),l.jsx("div",{className:"bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl p-3 text-sm sm:text-base font-black text-brand-lime tracking-wide select-all mb-4",children:Ee.contactEmail}),l.jsxs("div",{className:"flex flex-col gap-2.5",children:[l.jsxs("a",{href:a,className:"btn-brutal-primary w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs cursor-pointer",children:[l.jsx(ka,{className:"w-4 h-4"}),l.jsx("span",{children:t.demoGuide.btnMailto})]}),l.jsx("button",{type:"button",onClick:r,className:`btn-brutal w-full py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs transition-colors cursor-pointer ${n?"bg-brand-lime text-brand-inkBlack":"bg-white text-brand-inkBlack"}`,"aria-label":"Sao chép địa chỉ email",children:n?l.jsxs(l.Fragment,{children:[l.jsx(ws,{className:"w-4 h-4 text-emerald-800 stroke-[3]"}),l.jsx("span",{children:t.demoGuide.btnCopied})]}):l.jsxs(l.Fragment,{children:[l.jsx(El,{className:"w-4 h-4"}),l.jsx("span",{children:t.demoGuide.btnCopy})]})})]}),Ee.demoUrl]})]})})}),l.jsx(Be,{animation:"fade-up",delay:200,children:l.jsxs("div",{className:"bg-brand-paleYellow text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl p-4 sm:p-5 shadow-brutal-sm flex items-center gap-3.5",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-400 border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:l.jsx(ab,{className:"w-5 h-5 text-brand-inkBlack stroke-[2.5]"})}),l.jsx("div",{className:"text-xs sm:text-sm font-black text-brand-inkBlack leading-snug",children:t.demoGuide.warningNotice})]})})]})})},NT=({onNavigate:t})=>{const{t:e}=Cn(),n=()=>{t("/builders"),window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("section",{id:"mini-apps",className:"scroll-mt-20 relative w-full bg-brand-deepPurple text-brand-offWhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none overflow-hidden",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsx(Be,{animation:"fade-up",children:l.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12 sm:mb-16",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-pulse"}),l.jsx("span",{children:e.miniApps.statusBadge})]}),l.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-4",children:e.miniApps.headline}),l.jsx("p",{className:"text-base sm:text-lg text-stone-300 font-medium leading-relaxed mb-6",children:e.miniApps.description}),l.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 bg-brand-darkSurface/90 border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs text-left max-w-lg mx-auto",children:[l.jsx("img",{src:Ee.mascots.laughing,alt:"NED Teddy laughing",className:"w-9 h-9 object-contain drop-shadow",loading:"lazy"}),l.jsx("span",{className:"text-xs sm:text-sm font-bold text-brand-lavender",children:e.mascot.miniAppsTip})]})]})}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-14",children:[l.jsx("div",{className:"lg:col-span-5 flex justify-center",children:l.jsx(Be,{animation:"fade-up",delay:50,className:"w-full max-w-sm",children:l.jsxs("div",{className:"relative",children:[l.jsxs("div",{className:"absolute -top-7 -right-4 z-20 flex items-center gap-1.5 bg-brand-lime text-brand-inkBlack px-3 py-1 rounded-full border-2 border-brand-inkBlack font-black text-[11px] shadow-brutal-xs rotate-3 animate-float-slow",children:[l.jsx("img",{src:Ee.mascots.happy,alt:"NED Teddy happy",className:"w-5 h-5 object-contain"}),l.jsx("span",{children:"Hub Đa Tiện Ích"})]}),l.jsxs("div",{className:"bg-brand-darkSurface border-4 border-brand-inkBlack rounded-[2.5rem] p-3 sm:p-4 shadow-brutal-xl",children:[l.jsx("div",{className:"flex justify-center mb-3",children:l.jsx("div",{className:"w-20 h-1.5 bg-stone-700 rounded-full"})}),l.jsx("div",{className:"rounded-[1.8rem] overflow-hidden border-2 border-brand-inkBlack/60 bg-black aspect-[9/19] relative",children:l.jsx("img",{src:Ee.screenshots.miniappsHub,alt:"N.E.D MiniApps Hub Screen",className:"w-full h-full object-cover object-top",loading:"lazy"})}),l.jsxs("div",{className:"mt-3 pt-2 text-center text-[11px] font-bold text-stone-400 flex items-center justify-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime"}),l.jsx("span",{children:"Giao diện N.E.D MiniApps Hub trên Solana Devnet"})]})]})]})})}),l.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[l.jsx(Be,{animation:"fade-up",delay:100,children:l.jsx("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive",children:l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs",children:l.jsx(Fx,{className:"w-6 h-6"})}),l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lavender bg-brand-lavender/10 px-2 py-0.5 rounded border border-brand-lavender/30",children:"Module 01 • Thanh toán"}),l.jsx("span",{className:"text-[10px] font-bold text-stone-400",children:"Solana Pay Merchant"})]}),l.jsx("h3",{className:"text-lg sm:text-xl font-black text-brand-offWhite mb-1",children:e.miniApps.module1}),l.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3",children:"Quét mã QR chấp nhận thanh toán tức thì tại điểm bán (POS), tự động đối soát giao dịch trên Solana Devnet với phí xử lý 0%."}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300",children:[l.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[l.jsx(ur,{className:"w-3.5 h-3.5 text-brand-lime"})," Mã QR Động"]}),l.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[l.jsx(ur,{className:"w-3.5 h-3.5 text-brand-lime"})," Phí 0%"]})]})]})]})})}),l.jsx(Be,{animation:"fade-up",delay:200,children:l.jsx("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive",children:l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs",children:l.jsx(xi,{className:"w-6 h-6"})}),l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lime bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/30",children:"Module 02 • Hoán đổi & Tài chính"}),l.jsx("span",{className:"text-[10px] font-bold text-stone-400",children:"Jupiter Swap Lite"})]}),l.jsx("h3",{className:"text-lg sm:text-xl font-black text-brand-offWhite mb-1",children:e.miniApps.module2}),l.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3",children:"Hoán đổi token nhanh chóng với định tuyến thông minh, kết hợp các két tích lũy vi mô (Micro Savings) sinh lời theo block."}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300",children:[l.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[l.jsx(ur,{className:"w-3.5 h-3.5 text-brand-cyan"})," Định tuyến tối ưu"]}),l.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[l.jsx(ur,{className:"w-3.5 h-3.5 text-brand-cyan"})," Lãi tính theo block"]})]})]})]})})}),l.jsx(Be,{animation:"fade-up",delay:300,children:l.jsx("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive",children:l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs",children:l.jsx(Jy,{className:"w-6 h-6"})}),l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/30",children:"Module 03 • Đời sống & Tiện ích"}),l.jsx("span",{className:"text-[10px] font-bold text-stone-400",children:"Web3 Gift Cards"})]}),l.jsx("h3",{className:"text-lg sm:text-xl font-black text-brand-offWhite mb-1",children:e.miniApps.module3}),l.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3",children:"Mua voucher ăn uống, di chuyển và nạp thẻ cào điện thoại bằng tài sản số chỉ trong một chạm mà không cần rời ví."}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300",children:[l.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[l.jsx(ur,{className:"w-3.5 h-3.5 text-brand-lavender"})," Mã tức thì"]}),l.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[l.jsx(ur,{className:"w-3.5 h-3.5 text-brand-lavender"})," Không cần KYC"]})]})]})]})})})]})]}),l.jsx(Be,{animation:"pop",delay:120,children:l.jsx("div",{className:"relative bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal-xl overflow-hidden",children:l.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10",children:[l.jsxs("div",{className:"flex items-start sm:items-center gap-4",children:[l.jsx("img",{src:Ee.mascots.proud,alt:"NED Teddy proud",className:"w-14 h-14 sm:w-16 sm:h-16 object-contain flex-shrink-0 drop-shadow",loading:"lazy"}),l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-700 mb-1",children:"Dành cho đối tác & nhà phát triển"}),l.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-brand-inkBlack",children:"Khám phá cổng hợp tác dành cho builder"}),l.jsx("p",{className:"text-sm sm:text-base font-bold text-stone-800 mt-1",children:"Xem lộ trình trao đổi ý tưởng và tích hợp MiniApp của bạn trực tiếp vào N.E.D Hub."})]})]}),l.jsxs("button",{type:"button",onClick:n,className:"btn-brutal-dark px-6 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 flex-shrink-0 cursor-pointer",children:[l.jsx("span",{children:e.miniApps.cta}),l.jsx(Cr,{className:"w-4 h-4 text-brand-lime"})]})]})})})]})})},kT=()=>{const{t}=Cn(),[e,n]=Me.useState(0),i=[{q:t.faq.q1,a:t.faq.a1},{q:t.faq.q2,a:t.faq.a2},{q:t.faq.q3,a:t.faq.a3},{q:t.faq.q4,a:t.faq.a4},{q:t.faq.q5,a:t.faq.a5},{q:t.faq.q6,a:t.faq.a6}],r=s=>{n(e===s?null:s)};return l.jsx("section",{id:"faq",className:"scroll-mt-20 relative w-full bg-brand-deepPurple text-brand-offWhite py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack",children:l.jsxs("div",{className:"max-w-4xl mx-auto",children:[l.jsx(Be,{animation:"fade-up",children:l.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16",children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[l.jsx(qy,{className:"w-3.5 h-3.5 text-brand-cyan"}),l.jsx("span",{children:t.faq.tag})]}),l.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-4",children:t.faq.headline}),l.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 bg-brand-darkSurface/90 border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs text-left max-w-md mx-auto",children:[l.jsx("img",{src:Ee.mascots.thinking,alt:"NED Teddy thinking",className:"w-9 h-9 object-contain drop-shadow flex-shrink-0",loading:"lazy"}),l.jsx("span",{className:"text-xs sm:text-sm font-bold text-brand-lavender",children:t.mascot.faqTip})]})]})}),l.jsx("div",{className:"space-y-4",children:i.map((s,a)=>{const o=e===a,c=`faq-btn-${a}`,u=`faq-panel-${a}`;return l.jsx(Be,{animation:"fade-up",delay:a*60,children:l.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl overflow-hidden shadow-brutal transition-all",children:[l.jsxs("button",{id:c,"aria-expanded":o,"aria-controls":u,onClick:()=>r(a),className:"w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-black text-base sm:text-lg text-brand-offWhite hover:text-brand-lavender transition-colors select-none",children:[l.jsxs("span",{className:"flex items-center gap-3",children:[l.jsxs("span",{className:"w-7 h-7 rounded-lg bg-brand-lavender text-brand-inkBlack text-xs font-black flex items-center justify-center flex-shrink-0 border border-brand-inkBlack",children:["Q",a+1]}),l.jsx("span",{children:s.q})]}),l.jsx(Xy,{className:`w-5 h-5 flex-shrink-0 transition-transform duration-200 text-brand-lime ${o?"rotate-180":""}`})]}),o&&l.jsx("div",{id:u,role:"region","aria-labelledby":c,className:"px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base font-medium text-stone-300 leading-relaxed border-t border-brand-lavender/15 animate-in fade-in duration-150",children:s.a})]})},a)})})]})})},RT=({onNavigate:t})=>{const{t:e,lang:n}=Cn(),i=n==="vi"?Ee.demoMailBodyVi:Ee.demoMailBodyEn,r=`mailto:${Ee.contactEmail}?subject=${encodeURIComponent(Ee.demoMailSubject)}&body=${encodeURIComponent(i)}`,s=a=>{a.preventDefault(),t("/builders"),window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("section",{className:"relative w-full bg-brand-warmCream py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:l.jsx("div",{className:"max-w-5xl mx-auto",children:l.jsx(Be,{animation:"pop",children:l.jsxs("div",{className:"bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-14 shadow-brutal-xl text-center relative overflow-hidden",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-6 shadow-brutal-xs",children:[l.jsx(xi,{className:"w-3.5 h-3.5 text-brand-deepPurple"}),l.jsx("span",{children:"N.E.D Wallet • Solana Devnet"})]}),l.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-4 max-w-2xl mx-auto leading-tight",children:e.finalCta.headline}),l.jsx("p",{className:"text-base sm:text-lg font-bold text-stone-800 leading-relaxed mb-8 max-w-xl mx-auto",children:e.finalCta.description}),l.jsxs("div",{className:"flex items-center justify-center gap-3.5 mb-8",children:[l.jsx("img",{src:Ee.mascots.waving,alt:"NED Teddy waving",className:"w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-md animate-float-slow",loading:"lazy"}),l.jsxs("div",{className:"bg-white/95 border-2 border-brand-inkBlack px-4 py-2 rounded-2xl shadow-brutal-xs text-left max-w-xs sm:max-w-sm",children:[l.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-deepPurple",children:"Lời nhắn từ NED Teddy"}),l.jsx("div",{className:"text-xs sm:text-sm font-bold text-brand-inkBlack",children:e.mascot.finalTip})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[l.jsxs("a",{href:r,className:"btn-brutal-primary px-8 py-4 rounded-2xl text-base font-black flex items-center justify-center gap-2.5 shadow-brutal w-full sm:w-auto cursor-pointer",children:[l.jsx(ka,{className:"w-5 h-5"}),l.jsx("span",{children:e.finalCta.btnPrimary})]}),l.jsxs("button",{type:"button",onClick:s,className:"btn-brutal-secondary px-6 py-4 rounded-2xl text-sm sm:text-base font-black flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto cursor-pointer bg-white text-brand-inkBlack hover:bg-stone-50",children:[l.jsx("span",{children:e.finalCta.builderLink}),l.jsx(Cr,{className:"w-4 h-4 text-brand-deepPurple"})]})]})]})})})})},PT=({onNavigate:t})=>l.jsxs("main",{className:"w-full min-h-screen",children:[l.jsx(MT,{onNavigate:t}),l.jsx(wT,{}),l.jsx(ET,{}),l.jsx(TT,{}),l.jsx(CT,{}),l.jsx(AT,{}),l.jsx(NT,{onNavigate:t}),l.jsx(kT,{}),l.jsx(RT,{onNavigate:t})]}),DT=({onNavigate:t})=>{const{t:e,lang:n}=Cn(),[i,r]=Me.useState(!1),s=async()=>{var c;try{if((c=navigator==null?void 0:navigator.clipboard)!=null&&c.writeText){await navigator.clipboard.writeText(Ee.contactEmail),r(!0),setTimeout(()=>r(!1),2500);return}}catch{}try{const u=document.createElement("textarea");u.value=Ee.contactEmail,u.style.position="fixed",u.style.left="-999999px",u.style.top="-999999px",document.body.appendChild(u),u.focus(),u.select(),document.execCommand("copy"),document.body.removeChild(u),r(!0),setTimeout(()=>r(!1),2500)}catch{}},a=n==="vi"?Ee.builderMailBodyVi:Ee.builderMailBodyEn,o=`mailto:${Ee.contactEmail}?subject=${encodeURIComponent(Ee.builderMailSubject)}&body=${encodeURIComponent(a)}`;return l.jsxs("div",{className:"w-full bg-brand-deepPurple text-brand-offWhite min-h-screen selection:bg-brand-lime selection:text-brand-inkBlack select-none",children:[l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6",children:l.jsxs("button",{onClick:()=>{t("/"),window.scrollTo({top:0,behavior:"smooth"})},className:"inline-flex items-center gap-2 px-4 py-2 bg-brand-darkSurface text-brand-offWhite border-2 border-brand-inkBlack rounded-xl font-bold text-xs shadow-brutal-xs hover:text-brand-lime transition-colors cursor-pointer",children:[l.jsx(Gy,{className:"w-4 h-4"}),l.jsx("span",{children:e.builders.backHome})]})}),l.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-24",children:l.jsx(Be,{animation:"fade-up",children:l.jsxs("div",{className:"max-w-3xl",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender text-xs font-black uppercase tracking-wider mb-6 shadow-brutal-xs",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse"}),l.jsx("span",{children:e.builders.badgeStatus})]}),l.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black text-brand-offWhite tracking-tight leading-[1.1] mb-6",children:e.builders.headline}),l.jsx("p",{className:"text-lg sm:text-xl text-stone-300 font-medium leading-relaxed mb-6",children:e.builders.subtitle}),l.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2.5 bg-brand-darkSurface border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs mb-8",children:[l.jsx("img",{src:Ee.mascots.proud,alt:"NED Teddy proud",className:"w-9 h-9 object-contain drop-shadow flex-shrink-0",loading:"lazy"}),l.jsx("span",{className:"text-xs sm:text-sm font-bold text-brand-lavender",children:e.mascot.buildersTip})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-4",children:[l.jsxs("a",{href:o,className:"btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer",children:[l.jsx(ka,{className:"w-5 h-5"}),l.jsx("span",{children:e.builders.cta})]}),l.jsx("button",{onClick:s,className:"btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer",children:i?l.jsxs(l.Fragment,{children:[l.jsx(ws,{className:"w-5 h-5 text-emerald-700 stroke-[3]"}),l.jsx("span",{children:e.builders.btnCopied})]}):l.jsxs(l.Fragment,{children:[l.jsx(El,{className:"w-5 h-5"}),l.jsx("span",{children:Ee.contactEmail})]})})]})]})})}),l.jsx("section",{className:"w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y-4 border-brand-inkBlack",children:l.jsx("div",{className:"max-w-7xl mx-auto",children:l.jsx(Be,{animation:"fade-up",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[l.jsxs("div",{className:"lg:col-span-7",children:[l.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs",children:l.jsx("span",{children:"Kiến trúc định hướng"})}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-brand-inkBlack tracking-tight mb-4",children:e.builders.explainTitle}),l.jsx("p",{className:"text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6",children:e.builders.explainDesc}),l.jsxs("div",{className:"p-4 bg-white border-2 border-brand-inkBlack rounded-2xl shadow-brutal-xs flex items-center gap-3",children:[l.jsx(Wx,{className:"w-5 h-5 text-amber-700 flex-shrink-0"}),l.jsx("span",{className:"text-xs sm:text-sm font-bold text-stone-700",children:"Khả năng tích hợp cụ thể cần trao đổi và phối hợp chi tiết theo từng mô hình sản phẩm."})]})]}),l.jsx("div",{className:"lg:col-span-5 flex justify-center",children:l.jsxs("div",{className:"w-full max-w-sm bg-white border-4 border-brand-inkBlack rounded-3xl p-6 shadow-brutal-xl",children:[l.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-500 mb-4 pb-2 border-b-2 border-brand-inkBlack",children:"Sơ đồ Module Khái niệm"}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"p-3 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs",children:[l.jsx("span",{children:"N.E.D Wallet Host UI"}),l.jsx("span",{className:"text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack",children:"Ví chủ"})]}),l.jsxs("div",{className:"p-4 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-2xl font-black text-sm text-center shadow-brutal-xs",children:[l.jsx("div",{className:"text-[10px] text-stone-500 uppercase font-black mb-1",children:"Sandbox Container"}),l.jsx("div",{className:"text-brand-inkBlack",children:"Trải nghiệm ứng dụng của Builder"}),l.jsx("div",{className:"text-[10px] text-stone-600 font-bold mt-1",children:"Tiện ích số • Tương tác • Thanh toán vi mô"})]}),l.jsxs("div",{className:"p-3 bg-brand-cyan border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs",children:[l.jsx("span",{children:"Solana Devnet Settlement"}),l.jsx("span",{className:"text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack",children:"USDC"})]})]})]})})]})})})}),l.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24",children:[l.jsx(Be,{animation:"fade-up",children:l.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[l.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-brand-offWhite tracking-tight mb-3",children:e.builders.valuesTitle}),l.jsx("p",{className:"text-sm sm:text-base text-stone-300 font-medium",children:"Mục tiêu định hướng nền tảng nhằm đem lại lợi ích song hành cho cả người dùng và đối tác phát triển."})]})}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[l.jsx(Be,{animation:"fade-up",delay:0,className:"h-full",children:l.jsxs("div",{className:"h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-8 shadow-brutal card-brutal-interactive",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:l.jsx(ob,{className:"w-6 h-6"})}),l.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.builders.val1Title}),l.jsx("p",{className:"text-sm sm:text-base font-medium text-stone-300 leading-relaxed",children:e.builders.val1Desc})]})}),l.jsx(Be,{animation:"fade-up",delay:140,className:"h-full",children:l.jsxs("div",{className:"h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-8 shadow-brutal card-brutal-interactive",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:l.jsx(Fx,{className:"w-6 h-6"})}),l.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.builders.val2Title}),l.jsx("p",{className:"text-sm sm:text-base font-medium text-stone-300 leading-relaxed",children:e.builders.val2Desc})]})})]})]}),l.jsx("section",{className:"w-full bg-brand-darkSurface text-brand-offWhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-4 border-brand-inkBlack",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsx(Be,{animation:"fade-up",children:l.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[l.jsx("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs",children:l.jsx("span",{children:"Quy trình đề xuất"})}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-black tracking-tight mb-3",children:e.builders.journeyTitle}),l.jsx("p",{className:"text-xs sm:text-sm text-stone-400 font-bold",children:e.builders.journeyNotice})]})}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6",children:[l.jsx(Be,{animation:"fade-up",delay:0,className:"h-full",children:l.jsxs("div",{className:"h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal",children:[l.jsx("h3",{className:"text-lg sm:text-xl font-black mb-2 text-brand-lavender",children:e.builders.step1Title}),l.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step1Desc})]})}),l.jsx(Be,{animation:"fade-up",delay:120,className:"h-full",children:l.jsxs("div",{className:"h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal",children:[l.jsx("h3",{className:"text-lg sm:text-xl font-black mb-2 text-brand-cyan",children:e.builders.step2Title}),l.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step2Desc})]})}),l.jsx(Be,{animation:"fade-up",delay:240,className:"h-full",children:l.jsxs("div",{className:"h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal",children:[l.jsx("h3",{className:"text-lg sm:text-xl font-black mb-2 text-brand-lime",children:e.builders.step3Title}),l.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step3Desc})]})})]})]})}),l.jsx("section",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24",children:l.jsx(Be,{animation:"pop",delay:100,children:l.jsxs("div",{className:"bg-brand-lime text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-12 shadow-brutal-xl text-center",children:[l.jsx("div",{className:"flex justify-center mb-4",children:l.jsx("img",{src:Ee.mascots.waving,alt:"NED Teddy waving",className:"w-16 h-16 object-contain drop-shadow",loading:"lazy"})}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-black tracking-tight mb-4",children:e.builders.ctaHeadline}),l.jsx("p",{className:"text-base sm:text-lg font-bold text-stone-800 max-w-2xl mx-auto mb-8",children:e.builders.ctaDesc}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[l.jsxs("a",{href:o,className:"btn-brutal-primary bg-brand-deepPurple text-brand-offWhite px-8 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto cursor-pointer",children:[l.jsx(ka,{className:"w-5 h-5 text-brand-lime"}),l.jsx("span",{children:e.builders.ctaButton})]}),l.jsx("button",{onClick:s,className:"btn-brutal-secondary bg-white px-7 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto cursor-pointer",children:i?l.jsxs(l.Fragment,{children:[l.jsx(ws,{className:"w-5 h-5 text-emerald-700 stroke-[3]"}),l.jsx("span",{children:e.builders.btnCopied})]}):l.jsxs(l.Fragment,{children:[l.jsx(El,{className:"w-5 h-5"}),l.jsx("span",{children:"Sao chép email"})]})})]})]})})})]})},LT=()=>{const[t,e]=Me.useState(()=>window.location.pathname.startsWith("/builders")?"/builders":"/");Me.useEffect(()=>{const i=()=>{e(window.location.pathname.startsWith("/builders")?"/builders":"/")};return window.addEventListener("popstate",i),()=>window.removeEventListener("popstate",i)},[]);const n=i=>{i.startsWith("#")||i!==t&&(window.history.pushState({},"",i),e(i))};return l.jsx(Dy,{children:l.jsxs("div",{className:"flex flex-col min-h-screen bg-brand-deepPurple font-sans text-brand-inkBlack selection:bg-brand-lime selection:text-brand-inkBlack",children:[l.jsx(lb,{currentPath:t,onNavigate:n}),l.jsx("div",{className:"flex-grow",children:t==="/builders"?l.jsx(DT,{onNavigate:n}):l.jsx(PT,{onNavigate:n})}),l.jsx(cb,{currentPath:t,onNavigate:n})]})})};uu.createRoot(document.getElementById("root")).render(l.jsx(y0.StrictMode,{children:l.jsx(LT,{})}));
