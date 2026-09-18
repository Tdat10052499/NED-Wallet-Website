(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function K0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Um={exports:{}},Ol={},Bm={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Q0=Symbol.for("react.portal"),Z0=Symbol.for("react.fragment"),J0=Symbol.for("react.strict_mode"),eb=Symbol.for("react.profiler"),tb=Symbol.for("react.provider"),nb=Symbol.for("react.context"),ib=Symbol.for("react.forward_ref"),rb=Symbol.for("react.suspense"),sb=Symbol.for("react.memo"),ab=Symbol.for("react.lazy"),yf=Symbol.iterator;function ob(t){return t===null||typeof t!="object"?null:(t=yf&&t[yf]||t["@@iterator"],typeof t=="function"?t:null)}var Fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,jm={};function Is(t,e,n){this.props=t,this.context=e,this.refs=jm,this.updater=n||Fm}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zm(){}zm.prototype=Is.prototype;function rh(t,e,n){this.props=t,this.context=e,this.refs=jm,this.updater=n||Fm}var sh=rh.prototype=new zm;sh.constructor=rh;Om(sh,Is.prototype);sh.isPureReactComponent=!0;var Sf=Array.isArray,Hm=Object.prototype.hasOwnProperty,ah={current:null},Vm={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Hm.call(e,i)&&!Vm.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Ua,type:t,key:s,ref:a,props:r,_owner:ah.current}}function lb(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function oh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function cb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wf=/\/+/g;function dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cb(""+t.key):e.toString(36)}function Fo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ua:case Q0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+dc(a,0):i,Sf(r)?(n="",t!=null&&(n=t.replace(wf,"$&/")+"/"),Fo(r,e,n,"",function(d){return d})):r!=null&&(oh(r)&&(r=lb(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(wf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Sf(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+dc(s,l);a+=Fo(s,e,n,c,r)}else if(c=ob(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+dc(s,l++),a+=Fo(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function qa(t,e,n){if(t==null)return t;var i=[],r=0;return Fo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function db(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Oo={transition:null},ub={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:ah};function Wm(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!oh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Is;ze.Fragment=Z0;ze.Profiler=eb;ze.PureComponent=rh;ze.StrictMode=J0;ze.Suspense=rb;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ub;ze.act=Wm;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Om({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ah.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Hm.call(e,c)&&!Vm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:Ua,type:t.type,key:r,ref:s,props:i,_owner:a}};ze.createContext=function(t){return t={$$typeof:nb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tb,_context:t},t.Consumer=t};ze.createElement=Gm;ze.createFactory=function(t){var e=Gm.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:ib,render:t}};ze.isValidElement=oh;ze.lazy=function(t){return{$$typeof:ab,_payload:{_status:-1,_result:t},_init:db}};ze.memo=function(t,e){return{$$typeof:sb,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Oo.transition;Oo.transition={};try{t()}finally{Oo.transition=e}};ze.unstable_act=Wm;ze.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ze.useContext=function(t){return Yt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ze.useId=function(){return Yt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ze.useRef=function(t){return Yt.current.useRef(t)};ze.useState=function(t){return Yt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Yt.current.useTransition()};ze.version="18.3.1";Bm.exports=ze;var ae=Bm.exports;const Et=K0(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hb=ae,fb=Symbol.for("react.element"),pb=Symbol.for("react.fragment"),mb=Object.prototype.hasOwnProperty,xb=hb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gb={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)mb.call(e,i)&&!gb.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fb,type:t,key:s,ref:a,props:r,_owner:xb.current}}Ol.Fragment=pb;Ol.jsx=Xm;Ol.jsxs=Xm;Um.exports=Ol;var o=Um.exports,xd={},qm={exports:{}},gn={},$m={exports:{}},Ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,$){var Z=P.length;P.push($);e:for(;0<Z;){var ee=Z-1>>>1,fe=P[ee];if(0<r(fe,$))P[ee]=$,P[Z]=fe,Z=ee;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var $=P[0],Z=P.pop();if(Z!==$){P[0]=Z;e:for(var ee=0,fe=P.length,Fe=fe>>>1;ee<Fe;){var G=2*(ee+1)-1,te=P[G],de=G+1,le=P[de];if(0>r(te,Z))de<fe&&0>r(le,te)?(P[ee]=le,P[de]=Z,ee=de):(P[ee]=te,P[G]=Z,ee=G);else if(de<fe&&0>r(le,Z))P[ee]=le,P[de]=Z,ee=de;else break e}}return $}function r(P,$){var Z=P.sortIndex-$.sortIndex;return Z!==0?Z:P.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],d=[],u=1,f=null,h=3,x=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var $=n(d);$!==null;){if($.callback===null)i(d);else if($.startTime<=P)i(d),$.sortIndex=$.expirationTime,e(c,$);else break;$=n(d)}}function S(P){if(_=!1,v(P),!g)if(n(c)!==null)g=!0,z(N);else{var $=n(d);$!==null&&K(S,$.startTime-P)}}function N(P,$){g=!1,_&&(_=!1,p(k),k=-1),x=!0;var Z=h;try{for(v($),f=n(c);f!==null&&(!(f.expirationTime>$)||P&&!M());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,h=f.priorityLevel;var fe=ee(f.expirationTime<=$);$=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(c)&&i(c),v($)}else i(c);f=n(c)}if(f!==null)var Fe=!0;else{var G=n(d);G!==null&&K(S,G.startTime-$),Fe=!1}return Fe}finally{f=null,h=Z,x=!1}}var C=!1,T=null,k=-1,W=5,y=-1;function M(){return!(t.unstable_now()-y<W)}function H(){if(T!==null){var P=t.unstable_now();y=P;var $=!0;try{$=T(!0,P)}finally{$?j():(C=!1,T=null)}}else C=!1}var j;if(typeof b=="function")j=function(){b(H)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,q=X.port2;X.port1.onmessage=H,j=function(){q.postMessage(null)}}else j=function(){m(H,0)};function z(P){T=P,C||(C=!0,j())}function K(P,$){k=m(function(){P(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||x||(g=!0,z(N))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var Z=h;h=$;try{return P()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,$){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=h;h=P;try{return $()}finally{h=Z}},t.unstable_scheduleCallback=function(P,$,Z){var ee=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ee+Z:ee):Z=ee,P){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Z+fe,P={id:u++,callback:$,priorityLevel:P,startTime:Z,expirationTime:fe,sortIndex:-1},Z>ee?(P.sortIndex=Z,e(d,P),n(c)===null&&P===n(d)&&(_?(p(k),k=-1):_=!0,K(S,Z-ee))):(P.sortIndex=fe,e(c,P),g||x||(g=!0,z(N))),P},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(P){var $=h;return function(){var Z=h;h=$;try{return P.apply(this,arguments)}finally{h=Z}}}})(Ym);$m.exports=Ym;var vb=$m.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bb=ae,xn=vb;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Km=new Set,va={};function Lr(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(va[t]=e,t=0;t<e.length;t++)Km.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gd=Object.prototype.hasOwnProperty,_b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mf={},Ef={};function yb(t){return gd.call(Ef,t)?!0:gd.call(Mf,t)?!1:_b.test(t)?Ef[t]=!0:(Mf[t]=!0,!1)}function Sb(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wb(t,e,n,i){if(e===null||typeof e>"u"||Sb(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lh=/[\-:]([a-z])/g;function ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lh,ch);Ft[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lh,ch);Ft[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lh,ch);Ft[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function dh(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wb(e,n,r,i)&&(n=null),i||r===null?yb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=bb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),uh=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Zm=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),bd=Symbol.for("react.suspense"),_d=Symbol.for("react.suspense_list"),fh=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Jm=Symbol.for("react.offscreen"),Tf=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Tf&&t[Tf]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,uc;function ia(t){if(uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uc=e&&e[1]||""}return`
`+uc+t}var hc=!1;function fc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function Mb(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function yd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Zr:return"Portal";case vd:return"Profiler";case uh:return"StrictMode";case bd:return"Suspense";case _d:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zm:return(t.displayName||"Context")+".Consumer";case Qm:return(t._context.displayName||"Context")+".Provider";case hh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fh:return e=t.displayName||null,e!==null?e:yd(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return yd(t(e))}catch{}}return null}function Eb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yd(e);case 8:return e===uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ex(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tb(t){var e=ex(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=Tb(t))}function tx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ex(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sd(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nx(t,e){e=e.checked,e!=null&&dh(t,"checked",e,!1)}function wd(t,e){nx(t,e);var n=Qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Md(t,e.type,n):e.hasOwnProperty("defaultValue")&&Md(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Md(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Af(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ra(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function ix(t,e){var n=Qi(e.value),i=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,sx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cb=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){Cb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function ax(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function ox(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ax(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Nb=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cd(t,e){if(e){if(Nb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ad=null;function ph(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kd=null,fs=null,ps=null;function Rf(t){if(t=Oa(t)){if(typeof kd!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Gl(e),kd(t.stateNode,t.type,e))}}function lx(t){fs?ps?ps.push(t):ps=[t]:fs=t}function cx(){if(fs){var t=fs,e=ps;if(ps=fs=null,Rf(t),e)for(t=0;t<e.length;t++)Rf(e[t])}}function dx(t,e){return t(e)}function ux(){}var pc=!1;function hx(t,e,n){if(pc)return t(e,n);pc=!0;try{return dx(t,e,n)}finally{pc=!1,(fs!==null||ps!==null)&&(ux(),cx())}}function _a(t,e){var n=t.stateNode;if(n===null)return null;var i=Gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Rd=!1;if(gi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Rd=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Rd=!1}function Ab(t,e,n,i,r,s,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(u){this.onError(u)}}var ca=!1,al=null,ol=!1,Pd=null,kb={onError:function(t){ca=!0,al=t}};function Rb(t,e,n,i,r,s,a,l,c){ca=!1,al=null,Ab.apply(kb,arguments)}function Pb(t,e,n,i,r,s,a,l,c){if(Rb.apply(this,arguments),ca){if(ca){var d=al;ca=!1,al=null}else throw Error(ie(198));ol||(ol=!0,Pd=d)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pf(t){if(Ir(t)!==t)throw Error(ie(188))}function Db(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Pf(r),t;if(s===i)return Pf(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function px(t){return t=Db(t),t!==null?mx(t):null}function mx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mx(t);if(e!==null)return e;t=t.sibling}return null}var xx=xn.unstable_scheduleCallback,Df=xn.unstable_cancelCallback,Lb=xn.unstable_shouldYield,Ib=xn.unstable_requestPaint,St=xn.unstable_now,Ub=xn.unstable_getCurrentPriorityLevel,mh=xn.unstable_ImmediatePriority,gx=xn.unstable_UserBlockingPriority,ll=xn.unstable_NormalPriority,Bb=xn.unstable_LowPriority,vx=xn.unstable_IdlePriority,jl=null,Qn=null;function Fb(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:zb,Ob=Math.log,jb=Math.LN2;function zb(t){return t>>>=0,t===0?32:31-(Ob(t)/jb|0)|0}var Qa=64,Za=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=sa(l):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function Hb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vb(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Hn(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=Hb(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Dd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bx(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function Gb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function _x(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yx,gh,Sx,wx,Mx,Ld=!1,Ja=[],zi=null,Hi=null,Vi=null,ya=new Map,Sa=new Map,Ui=[],Wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oa(e),e!==null&&gh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Xb(t,e,n,i,r){switch(e){case"focusin":return zi=Gs(zi,t,e,n,i,r),!0;case"dragenter":return Hi=Gs(Hi,t,e,n,i,r),!0;case"mouseover":return Vi=Gs(Vi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ya.set(s,Gs(ya.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Sa.set(s,Gs(Sa.get(s)||null,t,e,n,i,r)),!0}return!1}function Ex(t){var e=br(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=fx(n),e!==null){t.blockedOn=e,Mx(t.priority,function(){Sx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ad=i,n.target.dispatchEvent(i),Ad=null}else return e=Oa(n),e!==null&&gh(e),t.blockedOn=n,!1;e.shift()}return!0}function If(t,e,n){jo(t)&&n.delete(e)}function qb(){Ld=!1,zi!==null&&jo(zi)&&(zi=null),Hi!==null&&jo(Hi)&&(Hi=null),Vi!==null&&jo(Vi)&&(Vi=null),ya.forEach(If),Sa.forEach(If)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Ld||(Ld=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,qb)))}function wa(t){function e(r){return Ws(r,t)}if(0<Ja.length){Ws(Ja[0],t);for(var n=1;n<Ja.length;n++){var i=Ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&Ws(zi,t),Hi!==null&&Ws(Hi,t),Vi!==null&&Ws(Vi,t),ya.forEach(e),Sa.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)Ex(n),n.blockedOn===null&&Ui.shift()}var ms=Mi.ReactCurrentBatchConfig,dl=!0;function $b(t,e,n,i){var r=rt,s=ms.transition;ms.transition=null;try{rt=1,vh(t,e,n,i)}finally{rt=r,ms.transition=s}}function Yb(t,e,n,i){var r=rt,s=ms.transition;ms.transition=null;try{rt=4,vh(t,e,n,i)}finally{rt=r,ms.transition=s}}function vh(t,e,n,i){if(dl){var r=Id(t,e,n,i);if(r===null)Ec(t,e,i,ul,n),Lf(t,i);else if(Xb(r,t,e,n,i))i.stopPropagation();else if(Lf(t,i),e&4&&-1<Wb.indexOf(t)){for(;r!==null;){var s=Oa(r);if(s!==null&&yx(s),s=Id(t,e,n,i),s===null&&Ec(t,e,i,ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ec(t,e,i,null,n)}}var ul=null;function Id(t,e,n,i){if(ul=null,t=ph(i),t=br(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ul=t,null}function Tx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ub()){case mh:return 1;case gx:return 4;case ll:case Bb:return 16;case vx:return 536870912;default:return 16}default:return 16}}var Oi=null,bh=null,zo=null;function Cx(){if(zo)return zo;var t,e=bh,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return zo=r.slice(t,1<i?1-i:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function eo(){return!0}function Uf(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eo:Uf,this.isPropagationStopped=Uf,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=vn(Us),Fa=xt({},Us,{view:0,detail:0}),Kb=vn(Fa),xc,gc,Xs,zl=xt({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(xc=t.screenX-Xs.screenX,gc=t.screenY-Xs.screenY):gc=xc=0,Xs=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),Bf=vn(zl),Qb=xt({},zl,{dataTransfer:0}),Zb=vn(Qb),Jb=xt({},Fa,{relatedTarget:0}),vc=vn(Jb),e_=xt({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),t_=vn(e_),n_=xt({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i_=vn(n_),r_=xt({},Us,{data:0}),Ff=vn(r_),s_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=o_[t])?!!e[t]:!1}function yh(){return l_}var c_=xt({},Fa,{key:function(t){if(t.key){var e=s_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d_=vn(c_),u_=xt({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=vn(u_),h_=xt({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),f_=vn(h_),p_=xt({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),m_=vn(p_),x_=xt({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g_=vn(x_),v_=[9,13,27,32],Sh=gi&&"CompositionEvent"in window,da=null;gi&&"documentMode"in document&&(da=document.documentMode);var b_=gi&&"TextEvent"in window&&!da,Nx=gi&&(!Sh||da&&8<da&&11>=da),jf=" ",zf=!1;function Ax(t,e){switch(t){case"keyup":return v_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function __(t,e){switch(t){case"compositionend":return kx(e);case"keypress":return e.which!==32?null:(zf=!0,jf);case"textInput":return t=e.data,t===jf&&zf?null:t;default:return null}}function y_(t,e){if(es)return t==="compositionend"||!Sh&&Ax(t,e)?(t=Cx(),zo=bh=Oi=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nx&&e.locale!=="ko"?null:e.data;default:return null}}var S_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!S_[t.type]:e==="textarea"}function Rx(t,e,n,i){lx(i),e=hl(e,"onChange"),0<e.length&&(n=new _h("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,Ma=null;function w_(t){Hx(t,0)}function Hl(t){var e=is(t);if(tx(e))return t}function M_(t,e){if(t==="change")return e}var Px=!1;if(gi){var bc;if(gi){var _c="oninput"in document;if(!_c){var Vf=document.createElement("div");Vf.setAttribute("oninput","return;"),_c=typeof Vf.oninput=="function"}bc=_c}else bc=!1;Px=bc&&(!document.documentMode||9<document.documentMode)}function Gf(){ua&&(ua.detachEvent("onpropertychange",Dx),Ma=ua=null)}function Dx(t){if(t.propertyName==="value"&&Hl(Ma)){var e=[];Rx(e,Ma,t,ph(t)),hx(w_,e)}}function E_(t,e,n){t==="focusin"?(Gf(),ua=e,Ma=n,ua.attachEvent("onpropertychange",Dx)):t==="focusout"&&Gf()}function T_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Ma)}function C_(t,e){if(t==="click")return Hl(e)}function N_(t,e){if(t==="input"||t==="change")return Hl(e)}function A_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:A_;function Ea(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gd.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xf(t,e){var n=Wf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wf(n)}}function Lx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ix(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k_(t){var e=Ix(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Lx(n.ownerDocument.documentElement,n)){if(i!==null&&wh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Xf(n,s);var a=Xf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var R_=gi&&"documentMode"in document&&11>=document.documentMode,ts=null,Ud=null,ha=null,Bd=!1;function qf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bd||ts==null||ts!==sl(i)||(i=ts,"selectionStart"in i&&wh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ha&&Ea(ha,i)||(ha=i,i=hl(Ud,"onSelect"),0<i.length&&(e=new _h("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ts)))}function to(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},yc={},Ux={};gi&&(Ux=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Vl(t){if(yc[t])return yc[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ux)return yc[t]=e[n];return t}var Bx=Vl("animationend"),Fx=Vl("animationiteration"),Ox=Vl("animationstart"),jx=Vl("transitionend"),zx=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){zx.set(t,e),Lr(e,[t])}for(var Sc=0;Sc<$f.length;Sc++){var wc=$f[Sc],P_=wc.toLowerCase(),D_=wc[0].toUpperCase()+wc.slice(1);tr(P_,"on"+D_)}tr(Bx,"onAnimationEnd");tr(Fx,"onAnimationIteration");tr(Ox,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(jx,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L_=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Yf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Pb(i,e,void 0,t),t.currentTarget=null}function Hx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;Yf(r,l,d),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;Yf(r,l,d),s=c}}}if(ol)throw t=Pd,ol=!1,Pd=null,t}function ct(t,e){var n=e[Hd];n===void 0&&(n=e[Hd]=new Set);var i=t+"__bubble";n.has(i)||(Vx(e,t,2,!1),n.add(i))}function Mc(t,e,n){var i=0;e&&(i|=4),Vx(n,t,i,e)}var no="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[no]){t[no]=!0,Km.forEach(function(n){n!=="selectionchange"&&(L_.has(n)||Mc(n,!1,t),Mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[no]||(e[no]=!0,Mc("selectionchange",!1,e))}}function Vx(t,e,n,i){switch(Tx(e)){case 1:var r=$b;break;case 4:r=Yb;break;default:r=vh}n=r.bind(null,e,n,t),r=void 0,!Rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ec(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=br(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}hx(function(){var d=s,u=ph(n),f=[];e:{var h=zx.get(t);if(h!==void 0){var x=_h,g=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":x=d_;break;case"focusin":g="focus",x=vc;break;case"focusout":g="blur",x=vc;break;case"beforeblur":case"afterblur":x=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Zb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=f_;break;case Bx:case Fx:case Ox:x=t_;break;case jx:x=m_;break;case"scroll":x=Kb;break;case"wheel":x=g_;break;case"copy":case"cut":case"paste":x=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Of}var _=(e&4)!==0,m=!_&&t==="scroll",p=_?h!==null?h+"Capture":null:h;_=[];for(var b=d,v;b!==null;){v=b;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,p!==null&&(S=_a(b,p),S!=null&&_.push(Ca(b,S,v)))),m)break;b=b.return}0<_.length&&(h=new x(h,g,null,n,u),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",h&&n!==Ad&&(g=n.relatedTarget||n.fromElement)&&(br(g)||g[vi]))break e;if((x||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,x?(g=n.relatedTarget||n.toElement,x=d,g=g?br(g):null,g!==null&&(m=Ir(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(x=null,g=d),x!==g)){if(_=Bf,S="onMouseLeave",p="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(_=Of,S="onPointerLeave",p="onPointerEnter",b="pointer"),m=x==null?h:is(x),v=g==null?h:is(g),h=new _(S,b+"leave",x,n,u),h.target=m,h.relatedTarget=v,S=null,br(u)===d&&(_=new _(p,b+"enter",g,n,u),_.target=v,_.relatedTarget=m,S=_),m=S,x&&g)t:{for(_=x,p=g,b=0,v=_;v;v=Br(v))b++;for(v=0,S=p;S;S=Br(S))v++;for(;0<b-v;)_=Br(_),b--;for(;0<v-b;)p=Br(p),v--;for(;b--;){if(_===p||p!==null&&_===p.alternate)break t;_=Br(_),p=Br(p)}_=null}else _=null;x!==null&&Kf(f,h,x,_,!1),g!==null&&m!==null&&Kf(f,m,g,_,!0)}}e:{if(h=d?is(d):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var N=M_;else if(Hf(h))if(Px)N=N_;else{N=T_;var C=E_}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=C_);if(N&&(N=N(t,d))){Rx(f,N,n,u);break e}C&&C(t,h,d),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Md(h,"number",h.value)}switch(C=d?is(d):window,t){case"focusin":(Hf(C)||C.contentEditable==="true")&&(ts=C,Ud=d,ha=null);break;case"focusout":ha=Ud=ts=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,qf(f,n,u);break;case"selectionchange":if(R_)break;case"keydown":case"keyup":qf(f,n,u)}var T;if(Sh)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else es?Ax(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Nx&&n.locale!=="ko"&&(es||k!=="onCompositionStart"?k==="onCompositionEnd"&&es&&(T=Cx()):(Oi=u,bh="value"in Oi?Oi.value:Oi.textContent,es=!0)),C=hl(d,k),0<C.length&&(k=new Ff(k,t,null,n,u),f.push({event:k,listeners:C}),T?k.data=T:(T=kx(n),T!==null&&(k.data=T)))),(T=b_?__(t,n):y_(t,n))&&(d=hl(d,"onBeforeInput"),0<d.length&&(u=new Ff("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:d}),u.data=T))}Hx(f,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_a(t,n),s!=null&&i.unshift(Ca(t,s,r)),s=_a(t,e),s!=null&&i.push(Ca(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,r?(c=_a(n,s),c!=null&&a.unshift(Ca(n,c,l))):r||(c=_a(n,s),c!=null&&a.push(Ca(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var I_=/\r\n?/g,U_=/\u0000|\uFFFD/g;function Qf(t){return(typeof t=="string"?t:""+t).replace(I_,`
`).replace(U_,"")}function io(t,e,n){if(e=Qf(e),Qf(t)!==e&&n)throw Error(ie(425))}function fl(){}var Fd=null,Od=null;function jd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,B_=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,F_=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(t){return Zf.resolve(null).then(t).catch(O_)}:zd;function O_(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wa(e)}function Gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Bs,Na="__reactProps$"+Bs,vi="__reactContainer$"+Bs,Hd="__reactEvents$"+Bs,j_="__reactListeners$"+Bs,z_="__reactHandles$"+Bs;function br(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jf(t);t!==null;){if(n=t[Yn])return n;t=Jf(t)}return e}t=n,n=t.parentNode}return null}function Oa(t){return t=t[Yn]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Gl(t){return t[Na]||null}var Vd=[],rs=-1;function nr(t){return{current:t}}function ut(t){0>rs||(t.current=Vd[rs],Vd[rs]=null,rs--)}function at(t,e){rs++,Vd[rs]=t.current,t.current=e}var Zi={},Gt=nr(Zi),rn=nr(!1),Tr=Zi;function ws(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function pl(){ut(rn),ut(Gt)}function ep(t,e,n){if(Gt.current!==Zi)throw Error(ie(168));at(Gt,e),at(rn,n)}function Gx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Eb(t)||"Unknown",r));return xt({},n,i)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Tr=Gt.current,at(Gt,t),at(rn,rn.current),!0}function tp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Gx(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,ut(rn),ut(Gt),at(Gt,t)):ut(rn),at(rn,n)}var di=null,Wl=!1,Cc=!1;function Wx(t){di===null?di=[t]:di.push(t)}function H_(t){Wl=!0,Wx(t)}function ir(){if(!Cc&&di!==null){Cc=!0;var t=0,e=rt;try{var n=di;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}di=null,Wl=!1}catch(r){throw di!==null&&(di=di.slice(t+1)),xx(mh,ir),r}finally{rt=e,Cc=!1}}return null}var ss=[],as=0,xl=null,gl=0,Sn=[],wn=0,Cr=null,hi=1,fi="";function fr(t,e){ss[as++]=gl,ss[as++]=xl,xl=t,gl=e}function Xx(t,e,n){Sn[wn++]=hi,Sn[wn++]=fi,Sn[wn++]=Cr,Cr=t;var i=hi;t=fi;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,hi=1<<32-Hn(e)+r|n<<r|i,fi=s+t}else hi=1<<s|n<<r|i,fi=t}function Mh(t){t.return!==null&&(fr(t,1),Xx(t,1,0))}function Eh(t){for(;t===xl;)xl=ss[--as],ss[as]=null,gl=ss[--as],ss[as]=null;for(;t===Cr;)Cr=Sn[--wn],Sn[wn]=null,fi=Sn[--wn],Sn[wn]=null,hi=Sn[--wn],Sn[wn]=null}var mn=null,pn=null,ht=!1,Fn=null;function qx(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:hi,overflow:fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wd(t){if(ht){var e=pn;if(e){var n=e;if(!np(t,e)){if(Gd(t))throw Error(ie(418));e=Gi(n.nextSibling);var i=mn;e&&np(t,e)?qx(i,n):(t.flags=t.flags&-4097|2,ht=!1,mn=t)}}else{if(Gd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ht=!1,mn=t}}}function ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function ro(t){if(t!==mn)return!1;if(!ht)return ip(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jd(t.type,t.memoizedProps)),e&&(e=pn)){if(Gd(t))throw $x(),Error(ie(418));for(;e;)qx(t,e),e=Gi(e.nextSibling)}if(ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Gi(t.stateNode.nextSibling):null;return!0}function $x(){for(var t=pn;t;)t=Gi(t.nextSibling)}function Ms(){pn=mn=null,ht=!1}function Th(t){Fn===null?Fn=[t]:Fn.push(t)}var V_=Mi.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function so(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rp(t){var e=t._init;return e(t._payload)}function Yx(t){function e(p,b){if(t){var v=p.deletions;v===null?(p.deletions=[b],p.flags|=16):v.push(b)}}function n(p,b){if(!t)return null;for(;b!==null;)e(p,b),b=b.sibling;return null}function i(p,b){for(p=new Map;b!==null;)b.key!==null?p.set(b.key,b):p.set(b.index,b),b=b.sibling;return p}function r(p,b){return p=$i(p,b),p.index=0,p.sibling=null,p}function s(p,b,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<b?(p.flags|=2,b):v):(p.flags|=2,b)):(p.flags|=1048576,b)}function a(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,b,v,S){return b===null||b.tag!==6?(b=Lc(v,p.mode,S),b.return=p,b):(b=r(b,v),b.return=p,b)}function c(p,b,v,S){var N=v.type;return N===Jr?u(p,b,v.props.children,S,v.key):b!==null&&(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Li&&rp(N)===b.type)?(S=r(b,v.props),S.ref=qs(p,b,v),S.return=p,S):(S=Yo(v.type,v.key,v.props,null,p.mode,S),S.ref=qs(p,b,v),S.return=p,S)}function d(p,b,v,S){return b===null||b.tag!==4||b.stateNode.containerInfo!==v.containerInfo||b.stateNode.implementation!==v.implementation?(b=Ic(v,p.mode,S),b.return=p,b):(b=r(b,v.children||[]),b.return=p,b)}function u(p,b,v,S,N){return b===null||b.tag!==7?(b=Er(v,p.mode,S,N),b.return=p,b):(b=r(b,v),b.return=p,b)}function f(p,b,v){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Lc(""+b,p.mode,v),b.return=p,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case $a:return v=Yo(b.type,b.key,b.props,null,p.mode,v),v.ref=qs(p,null,b),v.return=p,v;case Zr:return b=Ic(b,p.mode,v),b.return=p,b;case Li:var S=b._init;return f(p,S(b._payload),v)}if(ra(b)||Hs(b))return b=Er(b,p.mode,v,null),b.return=p,b;so(p,b)}return null}function h(p,b,v,S){var N=b!==null?b.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:l(p,b,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:return v.key===N?c(p,b,v,S):null;case Zr:return v.key===N?d(p,b,v,S):null;case Li:return N=v._init,h(p,b,N(v._payload),S)}if(ra(v)||Hs(v))return N!==null?null:u(p,b,v,S,null);so(p,v)}return null}function x(p,b,v,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(v)||null,l(b,p,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $a:return p=p.get(S.key===null?v:S.key)||null,c(b,p,S,N);case Zr:return p=p.get(S.key===null?v:S.key)||null,d(b,p,S,N);case Li:var C=S._init;return x(p,b,v,C(S._payload),N)}if(ra(S)||Hs(S))return p=p.get(v)||null,u(b,p,S,N,null);so(b,S)}return null}function g(p,b,v,S){for(var N=null,C=null,T=b,k=b=0,W=null;T!==null&&k<v.length;k++){T.index>k?(W=T,T=null):W=T.sibling;var y=h(p,T,v[k],S);if(y===null){T===null&&(T=W);break}t&&T&&y.alternate===null&&e(p,T),b=s(y,b,k),C===null?N=y:C.sibling=y,C=y,T=W}if(k===v.length)return n(p,T),ht&&fr(p,k),N;if(T===null){for(;k<v.length;k++)T=f(p,v[k],S),T!==null&&(b=s(T,b,k),C===null?N=T:C.sibling=T,C=T);return ht&&fr(p,k),N}for(T=i(p,T);k<v.length;k++)W=x(T,p,k,v[k],S),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?k:W.key),b=s(W,b,k),C===null?N=W:C.sibling=W,C=W);return t&&T.forEach(function(M){return e(p,M)}),ht&&fr(p,k),N}function _(p,b,v,S){var N=Hs(v);if(typeof N!="function")throw Error(ie(150));if(v=N.call(v),v==null)throw Error(ie(151));for(var C=N=null,T=b,k=b=0,W=null,y=v.next();T!==null&&!y.done;k++,y=v.next()){T.index>k?(W=T,T=null):W=T.sibling;var M=h(p,T,y.value,S);if(M===null){T===null&&(T=W);break}t&&T&&M.alternate===null&&e(p,T),b=s(M,b,k),C===null?N=M:C.sibling=M,C=M,T=W}if(y.done)return n(p,T),ht&&fr(p,k),N;if(T===null){for(;!y.done;k++,y=v.next())y=f(p,y.value,S),y!==null&&(b=s(y,b,k),C===null?N=y:C.sibling=y,C=y);return ht&&fr(p,k),N}for(T=i(p,T);!y.done;k++,y=v.next())y=x(T,p,k,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?k:y.key),b=s(y,b,k),C===null?N=y:C.sibling=y,C=y);return t&&T.forEach(function(H){return e(p,H)}),ht&&fr(p,k),N}function m(p,b,v,S){if(typeof v=="object"&&v!==null&&v.type===Jr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:e:{for(var N=v.key,C=b;C!==null;){if(C.key===N){if(N=v.type,N===Jr){if(C.tag===7){n(p,C.sibling),b=r(C,v.props.children),b.return=p,p=b;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Li&&rp(N)===C.type){n(p,C.sibling),b=r(C,v.props),b.ref=qs(p,C,v),b.return=p,p=b;break e}n(p,C);break}else e(p,C);C=C.sibling}v.type===Jr?(b=Er(v.props.children,p.mode,S,v.key),b.return=p,p=b):(S=Yo(v.type,v.key,v.props,null,p.mode,S),S.ref=qs(p,b,v),S.return=p,p=S)}return a(p);case Zr:e:{for(C=v.key;b!==null;){if(b.key===C)if(b.tag===4&&b.stateNode.containerInfo===v.containerInfo&&b.stateNode.implementation===v.implementation){n(p,b.sibling),b=r(b,v.children||[]),b.return=p,p=b;break e}else{n(p,b);break}else e(p,b);b=b.sibling}b=Ic(v,p.mode,S),b.return=p,p=b}return a(p);case Li:return C=v._init,m(p,b,C(v._payload),S)}if(ra(v))return g(p,b,v,S);if(Hs(v))return _(p,b,v,S);so(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,b!==null&&b.tag===6?(n(p,b.sibling),b=r(b,v),b.return=p,p=b):(n(p,b),b=Lc(v,p.mode,S),b.return=p,p=b),a(p)):n(p,b)}return m}var Es=Yx(!0),Kx=Yx(!1),vl=nr(null),bl=null,os=null,Ch=null;function Nh(){Ch=os=bl=null}function Ah(t){var e=vl.current;ut(vl),t._currentValue=e}function Xd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){bl=t,Ch=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Ch!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(bl===null)throw Error(ie(308));os=t,bl.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var _r=null;function kh(t){_r===null?_r=[t]:_r.push(t)}function Qx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function Rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function Vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xh(t,n)}}function sp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?s=d:a.next=d,a=c;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(s!==null){var f=r.baseState;a=0,u=d=c=null,l=s;do{var h=l.lane,x=l.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,_=l;switch(h=e,x=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(x,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(x,f,h):g,h==null)break e;f=xt({},f,h);break e;case 2:Ii=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=x,c=f):u=u.next=x,a|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(c=f),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ar|=a,t.lanes=a,t.memoizedState=f}}function ap(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var ja={},Zn=nr(ja),Aa=nr(ja),ka=nr(ja);function yr(t){if(t===ja)throw Error(ie(174));return t}function Ph(t,e){switch(at(ka,e),at(Aa,t),at(Zn,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Td(e,t)}ut(Zn),at(Zn,e)}function Ts(){ut(Zn),ut(Aa),ut(ka)}function Jx(t){yr(ka.current);var e=yr(Zn.current),n=Td(e,t.type);e!==n&&(at(Aa,t),at(Zn,n))}function Dh(t){Aa.current===t&&(ut(Zn),ut(Aa))}var ft=nr(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function Lh(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Go=Mi.ReactCurrentDispatcher,Ac=Mi.ReactCurrentBatchConfig,Nr=0,pt=null,Ct=null,Pt=null,Sl=!1,fa=!1,Ra=0,G_=0;function Ot(){throw Error(ie(321))}function Ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function Uh(t,e,n,i,r,s){if(Nr=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Go.current=t===null||t.memoizedState===null?$_:Y_,t=n(i,r),fa){s=0;do{if(fa=!1,Ra=0,25<=s)throw Error(ie(301));s+=1,Pt=Ct=null,e.updateQueue=null,Go.current=K_,t=n(i,r)}while(fa)}if(Go.current=wl,e=Ct!==null&&Ct.next!==null,Nr=0,Pt=Ct=pt=null,Sl=!1,e)throw Error(ie(300));return t}function Bh(){var t=Ra!==0;return Ra=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?pt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function kn(){if(Ct===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Pt===null?pt.memoizedState:Pt.next;if(e!==null)Pt=e,Ct=t;else{if(t===null)throw Error(ie(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Pt===null?pt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Pa(t,e){return typeof e=="function"?e(t):e}function kc(t){var e=kn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,d=s;do{var u=d.lane;if((Nr&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=f,a=i):c=c.next=f,pt.lanes|=u,Ar|=u}d=d.next}while(d!==null&&d!==s);c===null?a=i:c.next=l,Gn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Ar|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rc(t){var e=kn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Gn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function eg(){}function tg(t,e){var n=pt,i=kn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Fh(rg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Da(9,ig.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ie(349));Nr&30||ng(n,e,r)}return r}function ng(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ig(t,e,n,i){e.value=n,e.getSnapshot=i,sg(e)&&ag(t)}function rg(t,e,n){return n(function(){sg(e)&&ag(t)})}function sg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function ag(t){var e=bi(t,1);e!==null&&Vn(e,t,1,-1)}function op(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=q_.bind(null,pt,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function og(){return kn().memoizedState}function Wo(t,e,n,i){var r=Xn();pt.flags|=t,r.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function Xl(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&Ih(i,a.deps)){r.memoizedState=Da(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Da(1|e,n,s,i)}function lp(t,e){return Wo(8390656,8,t,e)}function Fh(t,e){return Xl(2048,8,t,e)}function lg(t,e){return Xl(4,2,t,e)}function cg(t,e){return Xl(4,4,t,e)}function dg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ug(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,dg.bind(null,e,t),n)}function Oh(){}function hg(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ih(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function fg(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ih(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function pg(t,e,n){return Nr&21?(Gn(n,e)||(n=bx(),pt.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function W_(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Ac.transition;Ac.transition={};try{t(!1),e()}finally{rt=n,Ac.transition=i}}function mg(){return kn().memoizedState}function X_(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},xg(t))gg(e,n);else if(n=Qx(t,e,n,i),n!==null){var r=$t();Vn(n,t,i,r),vg(n,e,i)}}function q_(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(xg(t))gg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,Gn(l,a)){var c=e.interleaved;c===null?(r.next=r,kh(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Qx(t,e,r,i),n!==null&&(r=$t(),Vn(n,t,i,r),vg(n,e,i))}}function xg(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function gg(t,e){fa=Sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xh(t,n)}}var wl={readContext:An,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},$_={readContext:An,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wo(4194308,4,dg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wo(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=X_.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:op,useDebugValue:Oh,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=op(!1),e=t[0];return t=W_.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Xn();if(ht){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Dt===null)throw Error(ie(349));Nr&30||ng(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,lp(rg.bind(null,i,s,t),[t]),i.flags|=2048,Da(9,ig.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Dt.identifierPrefix;if(ht){var n=fi,i=hi;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=G_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y_={readContext:An,useCallback:hg,useContext:An,useEffect:Fh,useImperativeHandle:ug,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:fg,useReducer:kc,useRef:og,useState:function(){return kc(Pa)},useDebugValue:Oh,useDeferredValue:function(t){var e=kn();return pg(e,Ct.memoizedState,t)},useTransition:function(){var t=kc(Pa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:eg,useSyncExternalStore:tg,useId:mg,unstable_isNewReconciler:!1},K_={readContext:An,useCallback:hg,useContext:An,useEffect:Fh,useImperativeHandle:ug,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:fg,useReducer:Rc,useRef:og,useState:function(){return Rc(Pa)},useDebugValue:Oh,useDeferredValue:function(t){var e=kn();return Ct===null?e.memoizedState=t:pg(e,Ct.memoizedState,t)},useTransition:function(){var t=Rc(Pa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:eg,useSyncExternalStore:tg,useId:mg,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=qi(t),s=xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Vn(e,t,r,i),Vo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=qi(t),s=xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Vn(e,t,r,i),Vo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=qi(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Wi(t,r,i),e!==null&&(Vn(e,t,i,n),Vo(e,t,i))}};function cp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,i)||!Ea(r,s):!0}function bg(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=sn(e)?Tr:Gt.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function $d(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=sn(e)?Tr:Gt.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ql.enqueueReplaceState(r,r.state,null),_l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",i=e;do n+=Mb(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q_=typeof WeakMap=="function"?WeakMap:Map;function _g(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){El||(El=!0,su=i),Yd(t,e)},n}function yg(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Yd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yd(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function up(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Q_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=uy.bind(null,t,e,n),e.then(t,t))}function hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var Z_=Mi.ReactCurrentOwner,nn=!1;function qt(t,e,n,i){e.child=t===null?Kx(e,null,n,i):Es(e,t.child,n,i)}function pp(t,e,n,i,r){n=n.render;var s=e.ref;return xs(e,r),i=Uh(t,e,n,i,s,r),n=Bh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(ht&&n&&Mh(e),e.flags|=1,qt(t,e,i,r),e.child)}function mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sg(t,e,s,i,r)):(t=Yo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(a,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function Sg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ea(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,_i(t,e,r)}return Kd(t,e,n,i,r)}function wg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(cs,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(cs,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(cs,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(cs,fn),fn|=i;return qt(t,e,r,n),e.child}function Mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kd(t,e,n,i,r){var s=sn(n)?Tr:Gt.current;return s=ws(e,s),xs(e,r),n=Uh(t,e,n,i,s,r),i=Bh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(ht&&i&&Mh(e),e.flags|=1,qt(t,e,n,r),e.child)}function xp(t,e,n,i,r){if(sn(n)){var s=!0;ml(e)}else s=!1;if(xs(e,r),e.stateNode===null)Xo(t,e),bg(e,n,i),$d(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=An(d):(d=sn(n)?Tr:Gt.current,d=ws(e,d));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==d)&&dp(e,a,i,d),Ii=!1;var h=e.memoizedState;a.state=h,_l(e,i,a,r),c=e.memoizedState,l!==i||h!==c||rn.current||Ii?(typeof u=="function"&&(qd(e,n,u,i),c=e.memoizedState),(l=Ii||cp(e,n,l,i,h,c,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=d,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Zx(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Un(e.type,l),a.props=d,f=e.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=An(c):(c=sn(n)?Tr:Gt.current,c=ws(e,c));var x=n.getDerivedStateFromProps;(u=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||h!==c)&&dp(e,a,i,c),Ii=!1,h=e.memoizedState,a.state=h,_l(e,i,a,r);var g=e.memoizedState;l!==f||h!==g||rn.current||Ii?(typeof x=="function"&&(qd(e,n,x,i),g=e.memoizedState),(d=Ii||cp(e,n,d,i,h,g,c)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=c,i=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Qd(t,e,n,i,s,r)}function Qd(t,e,n,i,r,s){Mg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&tp(e,n,!1),_i(t,e,s);i=e.stateNode,Z_.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,l,s)):qt(t,e,l,s),e.memoizedState=i.state,r&&tp(e,n,!0),e.child}function Eg(t){var e=t.stateNode;e.pendingContext?ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ep(t,e.context,!1),Ph(t,e.containerInfo)}function gp(t,e,n,i,r){return Ms(),Th(r),e.flags|=256,qt(t,e,n,i),e.child}var Zd={dehydrated:null,treeContext:null,retryLane:0};function Jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tg(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(ft,r&1),t===null)return Wd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Kl(a,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jd(n),e.memoizedState=Zd,t):jh(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return J_(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=$i(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=$i(l,s):(s=Er(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Jd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Zd,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jh(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ao(t,e,n,i){return i!==null&&Th(i),Es(e,t.child,null,n),t=jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function J_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Pc(Error(ie(422))),ao(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kl({mode:"visible",children:i.children},r,0,null),s=Er(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Es(e,t.child,null,a),e.child.memoizedState=Jd(a),e.memoizedState=Zd,s);if(!(e.mode&1))return ao(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(ie(419)),i=Pc(s,i,void 0),ao(t,e,a,i)}if(l=(a&t.childLanes)!==0,nn||l){if(i=Dt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),Vn(i,t,r,-1))}return Xh(),i=Pc(Error(ie(421))),ao(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=hy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Gi(r.nextSibling),mn=e,ht=!0,Fn=null,t!==null&&(Sn[wn++]=hi,Sn[wn++]=fi,Sn[wn++]=Cr,hi=t.id,fi=t.overflow,Cr=e),e=jh(e,i.children),e.flags|=4096,e)}function vp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xd(t.return,e,n)}function Dc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Cg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vp(t,n,e);else if(t.tag===19)vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Dc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ey(t,e,n){switch(e.tag){case 3:Eg(e),Ms();break;case 5:Jx(e);break;case 1:sn(e.type)&&ml(e);break;case 4:Ph(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(vl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?Tg(t,e,n):(at(ft,ft.current&1),t=_i(t,e,n),t!==null?t.sibling:null);at(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Cg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,wg(t,e,n)}return _i(t,e,n)}var Ng,eu,Ag,kg;Ng=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eu=function(){};Ag=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(Zn.current);var s=null;switch(n){case"input":r=Sd(t,r),i=Sd(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Ed(t,r),i=Ed(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fl)}Cd(n,i);var a;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(va.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var c=i[d];if(l=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(va.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ct("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};kg=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ty(t,e,n){var i=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return sn(e.type)&&pl(),jt(e),null;case 3:return i=e.stateNode,Ts(),ut(rn),ut(Gt),Lh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ro(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(lu(Fn),Fn=null))),eu(t,e),jt(e),null;case 5:Dh(e);var r=yr(ka.current);if(n=e.type,t!==null&&e.stateNode!=null)Ag(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return jt(e),null}if(t=yr(Zn.current),ro(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[Na]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)ct(aa[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Cf(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Af(i,s),ct("invalid",i)}Cd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&io(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&io(i.textContent,l,t),r=["children",""+l]):va.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ct("scroll",i)}switch(n){case"input":Ya(i),Nf(i,s,!0);break;case"textarea":Ya(i),kf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Yn]=e,t[Na]=i,Ng(t,e,!1,!1),e.stateNode=t;e:{switch(a=Nd(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)ct(aa[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Cf(t,i),r=Sd(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Af(t,i),r=Ed(t,i),ct("invalid",t);break;default:r=i}Cd(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?ox(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&sx(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ba(t,c):typeof c=="number"&&ba(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ct("scroll",t):c!=null&&dh(t,s,c,a))}switch(n){case"input":Ya(t),Nf(t,i,!1);break;case"textarea":Ya(t),kf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)kg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=yr(ka.current),yr(Zn.current),ro(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:io(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&io(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return jt(e),null;case 13:if(ut(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&pn!==null&&e.mode&1&&!(e.flags&128))$x(),Ms(),e.flags|=98560,s=!1;else if(s=ro(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Yn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Fn!==null&&(lu(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Nt===0&&(Nt=3):Xh())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Ts(),eu(t,e),t===null&&Ta(e.stateNode.containerInfo),jt(e),null;case 10:return Ah(e.type._context),jt(e),null;case 17:return sn(e.type)&&pl(),jt(e),null;case 19:if(ut(ft),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$s(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=yl(t),a!==null){for(e.flags|=128,$s(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Ns&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=yl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return jt(e),null}else 2*St()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=ft.current,at(ft,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Wh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function ny(t,e){switch(Eh(e),e.tag){case 1:return sn(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),ut(rn),ut(Gt),Lh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dh(e),null;case 13:if(ut(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ft),null;case 4:return Ts(),null;case 10:return Ah(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var oo=!1,Vt=!1,iy=typeof WeakSet=="function"?WeakSet:Set,xe=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function tu(t,e,n){try{n()}catch(i){bt(t,e,i)}}var bp=!1;function ry(t,e){if(Fd=dl,t=Ix(),wh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,u=0,f=t,h=null;t:for(;;){for(var x;f!==n||r!==0&&f.nodeType!==3||(l=a+r),f!==s||i!==0&&f.nodeType!==3||(c=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)h=f,f=x;for(;;){if(f===t)break t;if(h===n&&++d===r&&(l=a),h===s&&++u===i&&(c=a),(x=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Od={focusedElem:t,selectionRange:n},dl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,p=e.stateNode,b=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Un(e.type,_),m);p.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return g=bp,bp=!1,g}function pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&tu(e,n,s)}r=r.next}while(r!==i)}}function $l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rg(t){var e=t.alternate;e!==null&&(t.alternate=null,Rg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Na],delete e[Hd],delete e[j_],delete e[z_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Pg(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function iu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(i!==4&&(t=t.child,t!==null))for(iu(t,e,n),t=t.sibling;t!==null;)iu(t,e,n),t=t.sibling}function ru(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ru(t,e,n),t=t.sibling;t!==null;)ru(t,e,n),t=t.sibling}var It=null,Bn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)Dg(t,e,n),n=n.sibling}function Dg(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Vt||ls(n,e);case 6:var i=It,r=Bn;It=null,Ci(t,e,n),It=i,Bn=r,It!==null&&(Bn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Bn?(t=It,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),wa(t)):Tc(It,n.stateNode));break;case 4:i=It,r=Bn,It=n.stateNode.containerInfo,Bn=!0,Ci(t,e,n),It=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&tu(n,e,a),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!Vt&&(ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){bt(n,e,l)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ci(t,e,n),Vt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function yp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iy),e.forEach(function(i){var r=fy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:It=l.stateNode,Bn=!1;break e;case 3:It=l.stateNode.containerInfo,Bn=!0;break e;case 4:It=l.stateNode.containerInfo,Bn=!0;break e}l=l.return}if(It===null)throw Error(ie(160));Dg(s,a,r),It=null,Bn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){bt(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lg(e,t),e=e.sibling}function Lg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Wn(t),i&4){try{pa(3,t,t.return),$l(3,t)}catch(_){bt(t,t.return,_)}try{pa(5,t,t.return)}catch(_){bt(t,t.return,_)}}break;case 1:Pn(e,t),Wn(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(Pn(e,t),Wn(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(_){bt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&nx(r,s),Nd(l,a);var d=Nd(l,s);for(a=0;a<c.length;a+=2){var u=c[a],f=c[a+1];u==="style"?ox(r,f):u==="dangerouslySetInnerHTML"?sx(r,f):u==="children"?ba(r,f):dh(r,u,f,d)}switch(l){case"input":wd(r,s);break;case"textarea":ix(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?hs(r,!!s.multiple,x,!1):h!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(_){bt(t,t.return,_)}}break;case 6:if(Pn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){bt(t,t.return,_)}}break;case 3:if(Pn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(_){bt(t,t.return,_)}break;case 4:Pn(e,t),Wn(t);break;case 13:Pn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vh=St())),i&4&&yp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(d=Vt)||u,Pn(e,t),Vt=d):Pn(e,t),Wn(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(xe=t,u=t.child;u!==null;){for(f=xe=u;xe!==null;){switch(h=xe,x=h.child,h.tag){case 0:case 11:case 14:case 15:pa(4,h,h.return);break;case 1:ls(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){bt(i,n,_)}}break;case 5:ls(h,h.return);break;case 22:if(h.memoizedState!==null){wp(f);continue}}x!==null?(x.return=h,xe=x):wp(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ax("display",a))}catch(_){bt(t,t.return,_)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(_){bt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pn(e,t),Wn(t),i&4&&yp(t);break;case 21:break;default:Pn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Pg(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=_p(t);ru(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=_p(t);iu(t,l,a);break;default:throw Error(ie(161))}}catch(c){bt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sy(t,e,n){xe=t,Ig(t)}function Ig(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||oo;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Vt;l=oo;var d=Vt;if(oo=a,(Vt=c)&&!d)for(xe=r;xe!==null;)a=xe,c=a.child,a.tag===22&&a.memoizedState!==null?Mp(r):c!==null?(c.return=a,xe=c):Mp(r);for(;s!==null;)xe=s,Ig(s),s=s.sibling;xe=r,oo=l,Vt=d}Sp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Sp(t)}}function Sp(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||$l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ap(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ap(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Vt||e.flags&512&&nu(e)}catch(h){bt(e,e.return,h)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function wp(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Mp(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$l(4,e)}catch(c){bt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){bt(e,r,c)}}var s=e.return;try{nu(e)}catch(c){bt(e,s,c)}break;case 5:var a=e.return;try{nu(e)}catch(c){bt(e,a,c)}}}catch(c){bt(e,e.return,c)}if(e===t){xe=null;break}var l=e.sibling;if(l!==null){l.return=e.return,xe=l;break}xe=e.return}}var ay=Math.ceil,Ml=Mi.ReactCurrentDispatcher,zh=Mi.ReactCurrentOwner,Nn=Mi.ReactCurrentBatchConfig,$e=0,Dt=null,Tt=null,Ut=0,fn=0,cs=nr(0),Nt=0,La=null,Ar=0,Yl=0,Hh=0,ma=null,en=null,Vh=0,Ns=1/0,ci=null,El=!1,su=null,Xi=null,lo=!1,ji=null,Tl=0,xa=0,au=null,qo=-1,$o=0;function $t(){return $e&6?St():qo!==-1?qo:qo=St()}function qi(t){return t.mode&1?$e&2&&Ut!==0?Ut&-Ut:V_.transition!==null?($o===0&&($o=bx()),$o):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Tx(t.type)),t):1}function Vn(t,e,n,i){if(50<xa)throw xa=0,au=null,Error(ie(185));Ba(t,n,i),(!($e&2)||t!==Dt)&&(t===Dt&&(!($e&2)&&(Yl|=n),Nt===4&&Bi(t,Ut)),an(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ns=St()+500,Wl&&ir()))}function an(t,e){var n=t.callbackNode;Vb(t,e);var i=cl(t,t===Dt?Ut:0);if(i===0)n!==null&&Df(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Df(n),e===1)t.tag===0?H_(Ep.bind(null,t)):Wx(Ep.bind(null,t)),F_(function(){!($e&6)&&ir()}),n=null;else{switch(_x(i)){case 1:n=mh;break;case 4:n=gx;break;case 16:n=ll;break;case 536870912:n=vx;break;default:n=ll}n=Vg(n,Ug.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ug(t,e){if(qo=-1,$o=0,$e&6)throw Error(ie(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=cl(t,t===Dt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Cl(t,i);else{e=i;var r=$e;$e|=2;var s=Fg();(Dt!==t||Ut!==e)&&(ci=null,Ns=St()+500,Mr(t,e));do try{cy();break}catch(l){Bg(t,l)}while(!0);Nh(),Ml.current=s,$e=r,Tt!==null?e=0:(Dt=null,Ut=0,e=Nt)}if(e!==0){if(e===2&&(r=Dd(t),r!==0&&(i=r,e=ou(t,r))),e===1)throw n=La,Mr(t,0),Bi(t,i),an(t,St()),n;if(e===6)Bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!oy(r)&&(e=Cl(t,i),e===2&&(s=Dd(t),s!==0&&(i=s,e=ou(t,s))),e===1))throw n=La,Mr(t,0),Bi(t,i),an(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:pr(t,en,ci);break;case 3:if(Bi(t,i),(i&130023424)===i&&(e=Vh+500-St(),10<e)){if(cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zd(pr.bind(null,t,en,ci),e);break}pr(t,en,ci);break;case 4:if(Bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Hn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ay(i/1960))-i,10<i){t.timeoutHandle=zd(pr.bind(null,t,en,ci),i);break}pr(t,en,ci);break;case 5:pr(t,en,ci);break;default:throw Error(ie(329))}}}return an(t,St()),t.callbackNode===n?Ug.bind(null,t):null}function ou(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=en,en=n,e!==null&&lu(e)),t}function lu(t){en===null?en=t:en.push.apply(en,t)}function oy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bi(t,e){for(e&=~Hh,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function Ep(t){if($e&6)throw Error(ie(327));gs();var e=cl(t,0);if(!(e&1))return an(t,St()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var i=Dd(t);i!==0&&(e=i,n=ou(t,i))}if(n===1)throw n=La,Mr(t,0),Bi(t,e),an(t,St()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,en,ci),an(t,St()),null}function Gh(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ns=St()+500,Wl&&ir())}}function kr(t){ji!==null&&ji.tag===0&&!($e&6)&&gs();var e=$e;$e|=1;var n=Nn.transition,i=rt;try{if(Nn.transition=null,rt=1,t)return t()}finally{rt=i,Nn.transition=n,$e=e,!($e&6)&&ir()}}function Wh(){fn=cs.current,ut(cs)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,B_(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Eh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pl();break;case 3:Ts(),ut(rn),ut(Gt),Lh();break;case 5:Dh(i);break;case 4:Ts();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:Ah(i.type._context);break;case 22:case 23:Wh()}n=n.return}if(Dt=t,Tt=t=$i(t.current,null),Ut=fn=e,Nt=0,La=null,Hh=Yl=Ar=0,en=ma=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}_r=null}return t}function Bg(t,e){do{var n=Tt;try{if(Nh(),Go.current=wl,Sl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Sl=!1}if(Nr=0,Pt=Ct=pt=null,fa=!1,Ra=0,zh.current=null,n===null||n.return===null){Nt=1,La=e,Tt=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=Ut,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var x=hp(a);if(x!==null){x.flags&=-257,fp(x,a,l,s,e),x.mode&1&&up(s,d,e),e=x,c=d;var g=e.updateQueue;if(g===null){var _=new Set;_.add(c),e.updateQueue=_}else g.add(c);break e}else{if(!(e&1)){up(s,d,e),Xh();break e}c=Error(ie(426))}}else if(ht&&l.mode&1){var m=hp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),fp(m,a,l,s,e),Th(Cs(c,l));break e}}s=c=Cs(c,l),Nt!==4&&(Nt=2),ma===null?ma=[s]:ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=_g(s,c,e);sp(s,p);break e;case 1:l=c;var b=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Xi===null||!Xi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=yg(s,l,e);sp(s,S);break e}}s=s.return}while(s!==null)}jg(n)}catch(N){e=N,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function Fg(){var t=Ml.current;return Ml.current=wl,t===null?wl:t}function Xh(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Dt===null||!(Ar&268435455)&&!(Yl&268435455)||Bi(Dt,Ut)}function Cl(t,e){var n=$e;$e|=2;var i=Fg();(Dt!==t||Ut!==e)&&(ci=null,Mr(t,e));do try{ly();break}catch(r){Bg(t,r)}while(!0);if(Nh(),$e=n,Ml.current=i,Tt!==null)throw Error(ie(261));return Dt=null,Ut=0,Nt}function ly(){for(;Tt!==null;)Og(Tt)}function cy(){for(;Tt!==null&&!Lb();)Og(Tt)}function Og(t){var e=Hg(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?jg(t):Tt=e,zh.current=null}function jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ny(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Tt=null;return}}else if(n=ty(n,e,fn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Nt===0&&(Nt=5)}function pr(t,e,n){var i=rt,r=Nn.transition;try{Nn.transition=null,rt=1,dy(t,e,n,i)}finally{Nn.transition=r,rt=i}return null}function dy(t,e,n,i){do gs();while(ji!==null);if($e&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Gb(t,s),t===Dt&&(Tt=Dt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,Vg(ll,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var a=rt;rt=1;var l=$e;$e|=4,zh.current=null,ry(t,n),Lg(n,t),k_(Od),dl=!!Fd,Od=Fd=null,t.current=n,sy(n),Ib(),$e=l,rt=a,Nn.transition=s}else t.current=n;if(lo&&(lo=!1,ji=t,Tl=r),s=t.pendingLanes,s===0&&(Xi=null),Fb(n.stateNode),an(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(El)throw El=!1,t=su,su=null,t;return Tl&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===au?xa++:(xa=0,au=t):xa=0,ir(),null}function gs(){if(ji!==null){var t=_x(Tl),e=Nn.transition,n=rt;try{if(Nn.transition=null,rt=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Tl=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(xe=d;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:pa(8,u,s)}var f=u.child;if(f!==null)f.return=u,xe=f;else for(;xe!==null;){u=xe;var h=u.sibling,x=u.return;if(Rg(u),u===d){xe=null;break}if(h!==null){h.return=x,xe=h;break}xe=x}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,xe=p;break e}xe=s.return}}var b=t.current;for(xe=b;xe!==null;){a=xe;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,xe=v;else e:for(a=b;xe!==null;){if(l=xe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$l(9,l)}}catch(N){bt(l,l.return,N)}if(l===a){xe=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,xe=S;break e}xe=l.return}}if($e=r,ir(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(jl,t)}catch{}i=!0}return i}finally{rt=n,Nn.transition=e}}return!1}function Tp(t,e,n){e=Cs(n,e),e=_g(t,e,1),t=Wi(t,e,1),e=$t(),t!==null&&(Ba(t,1,e),an(t,e))}function bt(t,e,n){if(t.tag===3)Tp(t,t,n);else for(;e!==null;){if(e.tag===3){Tp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=Cs(n,t),t=yg(e,t,1),e=Wi(e,t,1),t=$t(),e!==null&&(Ba(e,1,t),an(e,t));break}}e=e.return}}function uy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ut&n)===n&&(Nt===4||Nt===3&&(Ut&130023424)===Ut&&500>St()-Vh?Mr(t,0):Hh|=n),an(t,e)}function zg(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=$t();t=bi(t,e),t!==null&&(Ba(t,e,n),an(t,n))}function hy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zg(t,n)}function fy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),zg(t,n)}var Hg;Hg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,ey(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ht&&e.flags&1048576&&Xx(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xo(t,e),t=e.pendingProps;var r=ws(e,Gt.current);xs(e,n),r=Uh(null,e,i,t,r,n);var s=Bh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rh(e),r.updater=ql,e.stateNode=r,r._reactInternals=e,$d(e,i,t,n),e=Qd(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Mh(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=my(i),t=Un(i,t),r){case 0:e=Kd(null,e,i,t,n);break e;case 1:e=xp(null,e,i,t,n);break e;case 11:e=pp(null,e,i,t,n);break e;case 14:e=mp(null,e,i,Un(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Kd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),xp(t,e,i,r,n);case 3:e:{if(Eg(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Zx(t,e),_l(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Cs(Error(ie(423)),e),e=gp(t,e,i,n,r);break e}else if(i!==r){r=Cs(Error(ie(424)),e),e=gp(t,e,i,n,r);break e}else for(pn=Gi(e.stateNode.containerInfo.firstChild),mn=e,ht=!0,Fn=null,n=Kx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),i===r){e=_i(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return Jx(e),t===null&&Wd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,jd(i,r)?a=null:s!==null&&jd(i,s)&&(e.flags|=32),Mg(t,e),qt(t,e,a,n),e.child;case 6:return t===null&&Wd(e),null;case 13:return Tg(t,e,n);case 4:return Ph(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Es(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),pp(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,at(vl,i._currentValue),i._currentValue=a,s!==null)if(Gn(s.value,a)){if(s.children===r.children&&!rn.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=xi(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Xd(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Xd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xs(e,n),r=An(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),mp(t,e,i,r,n);case 15:return Sg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Xo(t,e),e.tag=1,sn(i)?(t=!0,ml(e)):t=!1,xs(e,n),bg(e,i,r),$d(e,i,r,n),Qd(null,e,i,!0,t,n);case 19:return Cg(t,e,n);case 22:return wg(t,e,n)}throw Error(ie(156,e.tag))};function Vg(t,e){return xx(t,e)}function py(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new py(t,e,n,i)}function qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function my(t){if(typeof t=="function")return qh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hh)return 11;if(t===fh)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")qh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Jr:return Er(n.children,r,s,e);case uh:a=8,r|=8;break;case vd:return t=Tn(12,n,e,r|2),t.elementType=vd,t.lanes=s,t;case bd:return t=Tn(13,n,e,r),t.elementType=bd,t.lanes=s,t;case _d:return t=Tn(19,n,e,r),t.elementType=_d,t.lanes=s,t;case Jm:return Kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qm:a=10;break e;case Zm:a=9;break e;case hh:a=11;break e;case fh:a=14;break e;case Li:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Tn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Kl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=Jm,t.lanes=n,t.stateNode={isHidden:!1},t}function Lc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $h(t,e,n,i,r,s,a,l,c){return t=new xy(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rh(s),t}function gy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gg(t){if(!t)return Zi;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(sn(n))return Gx(t,n,e)}return e}function Wg(t,e,n,i,r,s,a,l,c){return t=$h(n,i,!0,t,r,s,a,l,c),t.context=Gg(null),n=t.current,i=$t(),r=qi(n),s=xi(i,r),s.callback=e??null,Wi(n,s,r),t.current.lanes=r,Ba(t,r,i),an(t,i),t}function Ql(t,e,n,i){var r=e.current,s=$t(),a=qi(r);return n=Gg(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wi(r,e,a),t!==null&&(Vn(t,r,a,s),Vo(t,r,a)),a}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yh(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function vy(){return null}var Xg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kh(t){this._internalRoot=t}Zl.prototype.render=Kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Ql(t,e,null,null)};Zl.prototype.unmount=Kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){Ql(null,t,null,null)}),e[vi]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&Ex(t)}};function Qh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Np(){}function by(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var d=Nl(a);s.call(d)}}var a=Wg(e,i,t,0,null,!1,!1,"",Np);return t._reactRootContainer=a,t[vi]=a.current,Ta(t.nodeType===8?t.parentNode:t),kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var d=Nl(c);l.call(d)}}var c=$h(t,0,!1,null,null,!1,!1,"",Np);return t._reactRootContainer=c,t[vi]=c.current,Ta(t.nodeType===8?t.parentNode:t),kr(function(){Ql(e,c,n,i)}),c}function ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=Nl(a);l.call(c)}}Ql(e,a,t,r)}else a=by(n,e,t,r,i);return Nl(a)}yx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(xh(e,n|1),an(e,St()),!($e&6)&&(Ns=St()+500,ir()))}break;case 13:kr(function(){var i=bi(t,1);if(i!==null){var r=$t();Vn(i,t,1,r)}}),Yh(t,1)}};gh=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=$t();Vn(e,t,134217728,n)}Yh(t,134217728)}};Sx=function(t){if(t.tag===13){var e=qi(t),n=bi(t,e);if(n!==null){var i=$t();Vn(n,t,e,i)}Yh(t,e)}};wx=function(){return rt};Mx=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};kd=function(t,e,n){switch(e){case"input":if(wd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Gl(i);if(!r)throw Error(ie(90));tx(i),wd(i,r)}}}break;case"textarea":ix(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};dx=Gh;ux=kr;var _y={usingClientEntryPoint:!1,Events:[Oa,is,Gl,lx,cx,Gh]},Ys={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yy={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=px(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{jl=co.inject(yy),Qn=co}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_y;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qh(e))throw Error(ie(200));return gy(t,e,null,n)};gn.createRoot=function(t,e){if(!Qh(t))throw Error(ie(299));var n=!1,i="",r=Xg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$h(t,1,!1,null,null,n,!1,i,r),t[vi]=e.current,Ta(t.nodeType===8?t.parentNode:t),new Kh(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=px(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return kr(t)};gn.hydrate=function(t,e,n){if(!Jl(e))throw Error(ie(200));return ec(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Qh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Xg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Wg(e,null,t,1,n??null,r,!1,s,a),t[vi]=e.current,Ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zl(e)};gn.render=function(t,e,n){if(!Jl(e))throw Error(ie(200));return ec(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(ie(40));return t._reactRootContainer?(kr(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1};gn.unstable_batchedUpdates=Gh;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Jl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return ec(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function qg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qg)}catch(t){console.error(t)}}qg(),qm.exports=gn;var Sy=qm.exports,Ap=Sy;xd.createRoot=Ap.createRoot,xd.hydrateRoot=Ap.hydrateRoot;const wy={vi:{nav:{experience:"Trải nghiệm",getStarted:"Cách bắt đầu",builders:"Dành cho builder",faq:"FAQ",tryDemo:"Trải nghiệm demo"},hero:{statusBadge:"Bản demo • Solana Devnet",headline:`Gửi và nhận stablecoin.
Bắt đầu thật đơn giản.`,description:"N.E.D Wallet giúp bạn quản lý tài sản số qua những thao tác quen thuộc, cùng hướng dẫn để trải nghiệm lần đầu.",ctaPrimary:"Trải nghiệm demo",ctaSecondary:"Khám phá cách sử dụng",appBadge:"Màn hình ứng dụng N.E.D",illustrationTag:"Minh họa trải nghiệm",trustPill1:"Thao tác quen thuộc",trustPill2:"Solana Devnet (USDC)",trustPill3:"Thử nghiệm qua Expo"},marquee:{tag:"Mạng lưới & Đối tác đồng hành",badge:"Hệ sinh thái",scrollHint:"Lăn chuột hoặc kéo để trượt"},coreActions:{badge:"Thao tác cốt lõi",headline:"Đơn giản hóa quản lý stablecoin",receiveTitle:"Nhận",receiveDesc:"Chia sẻ thông tin để nhận tài sản.",sendTitle:"Chuyển",sendDesc:"Chọn người nhận và kiểm tra trước khi gửi.",trackTitle:"Theo dõi",trackDesc:"Xem số dư và lịch sử giao dịch."},sendFeature:{tag:"Tính năng chuyển",headline:"Chọn người nhận theo cách bạn quen.",description:"Sử dụng số điện thoại, mã QR hoặc địa chỉ ví để chọn người nhận. Kiểm tra thông tin trước khi xác nhận chuyển.",illustrationBadge:"Minh họa thao tác",illustrationNotice:"* Minh họa luồng thao tác mẫu; không kết nối ví thực tế hoặc mạng Mainnet.",modePhone:"Số điện thoại",modeQr:"Mã QR & Lắc chia tiền",modeWallet:"Địa chỉ ví Solana",modeShakeSplit:"Lắc chia tiền (Shake & Split)",modeLuckyCoin:"Phòng Lì Xì Tung Đồng Xu",recipientLabel:"Người nhận đã chọn",amountLabel:"Số lượng chuyển",amountPreset10:"10 USDC",amountPreset25:"25 USDC",amountPreset50:"50 USDC",step1Name:"1. Chọn phương thức",step2Name:"2. Nhập số tiền",step3Name:"3. Kiểm tra & Xác nhận",reviewNotice:"Xác nhận thông tin người nhận và số dư trước khi hoàn tất.",btnVerify:"Kiểm tra & Sẵn sàng gửi",statusVerified:"Thông tin hợp lệ trên Solana Devnet",mascotBubble:"Lắc máy cùng bạn bè trong 20m để chia hóa đơn on-chain siêu tốc!",showcaseTabs:{phone:"Chuyển qua SĐT",shake:"Shake & Split",coin:"Lì Xì Đồng Xu",hub:"Trung Tâm Chuyển"}},mascot:{heroGreeting:"Chào bạn! Mình là NED Teddy",heroCompanion:"Đồng hành trải nghiệm Web3 không cần Seedphrase!",sendTip:"Lắc máy để chia tiền hoặc vuốt tung đồng xu may mắn!",overviewTip:"Minh bạch từng khoản thu chi và hạn mức tháng!",demoTip:"Chỉ 30 giây để tạo ví và nhận định danh @tên.sol!",faqTip:"Có câu hỏi? Teddy ở đây để giải đáp cùng bạn!",finalTip:"Sẵn sàng trải nghiệm ví thế hệ mới trên Solana Devnet!",miniAppsTip:"Khám phá hệ sinh thái MiniApps: Tiện ích Web3 gói gọn trong 1 chạm!",buildersTip:"Cùng NED Teddy xây dựng tương lai thanh toán vi mô trên Solana!"},assetOverview:{tag:"Theo dõi tài sản",headline:"Số dư và giao dịch, trong một góc nhìn.",description:"Theo dõi số dư và xem lại lịch sử gửi, nhận ngay trong ứng dụng.",captionNote:"Chi tiết từ giao diện ứng dụng",disclaimerNotice:"Ảnh giao diện thể hiện chi tiết mẫu từ bản demo; không phản ánh số liệu hay cam kết dịch vụ thực tế của nền tảng.",balanceCardTitle:"Số dư tổng quan",balanceCardDesc:"Hiển thị tức thì tổng số dư USDC trên mạng Devnet.",recentCardTitle:"Giao dịch gần đây",recentCardDesc:"Kiểm tra nhanh các hoạt động chuyển và nhận theo thời gian thực."},demoGuide:{tag:"Cách bắt đầu",headline:"Trải nghiệm N.E.D qua video thực tế.",subtitle:"Xem toàn bộ quy trình tạo tài khoản không cần Seedphrase, chuyển stablecoin và tương tác MiniApps trên Solana Devnet.",videoBadge:"Video Walkthrough • Bản demo chính thức",openVideo:"Mở video →",openVideoWithSound:"Mở video có tiếng →",autoPlaying:"Đang tự động phát",paused:"Đã tạm dừng",unmute:"Bật tiếng",muted:"Tắt tiếng",closeVideo:"Đóng video ✕",step1Title:"Không cần Seedphrase",step1Desc:"Đăng nhập bảo mật qua Email, Google hoặc liên kết điện thoại.",step2Title:"Chia tiền Shake & Split",step2Desc:"Lắc điện thoại phát hiện thiết bị xung quanh để chia hóa đơn on-chain.",step3Title:"Định danh @tên.sol",step3Desc:"Gửi nhận stablecoin bằng tên dễ nhớ, miễn phí 100% phí gas.",contactCardTitle:"Thông tin tiếp nhận trải nghiệm demo",emailLabel:"Email liên hệ nhóm phát triển:",btnMailto:"Liên hệ nhận demo",btnCopy:"Sao chép email",btnCopied:"Đã sao chép email!",warningNotice:"Bản demo sử dụng môi trường thử nghiệm. Không gửi tài sản thật."},miniApps:{tag:"Định hướng mở rộng",statusBadge:"Đang phát triển",headline:"Thêm trải nghiệm, ngay trong N.E.D.",description:"N.E.D đang phát triển nền tảng mini-app, hướng tới việc cho phép các nhà phát triển đưa ứng dụng nhỏ vào bên trong ví.",diagramTitle:"Kiến trúc Module hóa",diagramSubtitle:"Các tiện ích bên thứ ba hoạt động trực tiếp bên trong ví",module1:"Dịch vụ & Tiện ích thường ngày",module2:"Trải nghiệm tương tác & Cộng đồng",module3:"Tích hợp thanh toán vi mô",cta:"Dành cho builder"},faq:{tag:"Giải đáp thắc mắc",headline:"Những điều bạn muốn biết.",q1:"Tôi chưa biết stablecoin thì có thể bắt đầu thế nào?",a1:"Stablecoin là tài sản số được thiết kế để bám theo giá trị tham chiếu (như USD). Bản thử nghiệm N.E.D sử dụng USDC trên Solana Devnet để bạn dễ dàng làm quen. Mục tiêu của N.E.D là giảm tối đa sự phức tạp bằng những thao tác thân thuộc, giúp bạn tiếp cận mà không cần trang bị kiến thức kỹ thuật chuyên sâu.",q2:"N.E.D có phải tài khoản ngân hàng không?",a2:"Không. N.E.D Wallet là ứng dụng ví tự quản lý tài sản số, không phải ngân hàng và không cung cấp dịch vụ tiền gửi ngân hàng. Tài sản trên ví là stablecoin số chạy trên mạng thử nghiệm blockchain, không được bảo hiểm tiền gửi như ngân hàng truyền thống.",q3:"Bản demo có sử dụng tài sản thật không?",a3:"Không. Bản demo hiện tại hoạt động hoàn toàn trên mạng Solana Devnet với tài sản thử nghiệm miễn phí. Bạn tuyệt đối không gửi tiền thật hoặc tài sản có giá trị thực tế vào bản demo này.",q4:"Tôi cần chuẩn bị gì để trải nghiệm qua Expo?",a4:"Bạn chỉ cần một điện thoại thông minh (iOS hoặc Android). Sau khi bạn gửi email liên hệ, nhóm phát triển sẽ cung cấp hướng dẫn cài đặt ứng dụng Expo và thông tin để mở bản thử nghiệm N.E.D Wallet trực tiếp trên thiết bị của bạn.",q5:"Mini-app hiện đã mở công khai chưa?",a5:"Chưa. Nền tảng mini-app đang trong giai đoạn định hướng kiến trúc và phát triển ban đầu. Chúng tôi đang mở cổng trao đổi với các builder quan tâm để lắng nghe ý tưởng và cùng phối hợp thử nghiệm khả năng tích hợp trong tương lai.",q6:"Builder liên hệ bằng cách nào?",a6:'Các nhà phát triển có thể tìm hiểu thêm tại trang Dành cho builder (/builders) hoặc gửi email trực tiếp tới tdat.100524@gmail.com với tiêu đề "N.E.D Wallet — Builder collaboration" để thảo luận về ý tưởng và phương án hợp tác.'},finalCta:{headline:"Khám phá N.E.D từ trải nghiệm đầu tiên.",description:"Liên hệ nhóm phát triển để nhận hướng dẫn dùng thử bản demo.",btnPrimary:"Liên hệ nhận demo",builderLink:"Bạn là builder? Trao đổi cùng chúng tôi."},footer:{description:"N.E.D Wallet là ứng dụng di động hỗ trợ quản lý, gửi và nhận stablecoin trên Solana Devnet qua những trải nghiệm thân thuộc.",quickLinks:"Điều hướng",contact:"Liên hệ",statusTag:"Bản demo trên Solana Devnet",disclaimer:"N.E.D Wallet hiện là sản phẩm thử nghiệm nội bộ trên mạng Solana Devnet. Đây không phải là dịch vụ tài chính hay ngân hàng được cấp phép thương mại. Vui lòng không gửi tài sản thực.",copyright:"© 2026 N.E.D Wallet. Đang phát triển."},builders:{backHome:"← Về trang chủ",badgeStatus:"Developer Portal • Tự động hóa",headline:"Đưa Mini-DApp của bạn lên N.E.D Wallet.",subtitle:"Nền tảng Developer Portal tự động: Phát triển DApp độc lập, submit thông tin qua Dashboard và tiếp cận người dùng trên Solana Devnet.",btnDashboard:"Truy cập Dashboard",btnDocs:"Đọc Tài liệu API",explainTitle:"Ứng dụng nhỏ bên trong ví",explainDesc:"Mini-app là các DApp web do bên thứ ba phát triển, chạy độc lập trong Sandbox an toàn bên trong N.E.D Wallet. Người dùng không cần rời ví và có thể tận dụng hạ tầng thanh toán stablecoin tức thì.",explainNote:"DApp hoạt động độc lập trong sandbox an toàn. Khai báo URL và cấu hình quyền hạn trực tiếp qua Developer Portal.",valuesTitle:"Giá trị nền tảng hướng tới",val1Title:"Người dùng có thêm tiện ích phong phú",val1Desc:"Cung cấp cho người dùng các tiện ích mở rộng đa dạng mà không tạo rào cản phức tạp về công nghệ hay bảo mật.",val2Title:"Kênh phân phối trực tiếp cho Builder",val2Desc:"Đưa sản phẩm của builder tiếp cận trực tiếp tệp người dùng đang hoạt động và giao dịch stablecoin trên Solana.",journeyBadge:"Quy trình tự động",journeyTitle:"Quy trình 3 bước lên sóng N.E.D",journeyNotice:"* Quy trình kiểm duyệt và phát hành hoàn toàn tự động qua N.E.D Developer Dashboard.",step1Title:"01 — Build & Tự Host",step1Desc:"Phát triển DApp độc lập và tự lưu trữ mã nguồn.",step2Title:"02 — Submit qua Portal",step2Desc:"Khai báo URL, Logo và Mô tả thông qua Dashboard của N.E.D.",step3Title:"03 — Duyệt & Lên sóng",step3Desc:"Theo dõi trạng thái kiểm duyệt realtime, tự động xuất hiện trên ví người dùng khi được Approve.",ctaHeadline:"Sẵn sàng đưa DApp của bạn lên N.E.D?",ctaDesc:"Tham gia hệ sinh thái Developer Portal ngay hôm nay. Khai báo và quản lý ứng dụng của bạn qua Dashboard chỉ trong vài phút.",ctaSubmit:"Bắt đầu Submit Dự án"}},en:{nav:{experience:"Experience",getStarted:"Get started",builders:"For builders",faq:"FAQ",tryDemo:"Try the demo"},hero:{statusBadge:"Demo • Solana Devnet",headline:`Send and receive stablecoins.
Start simple.`,description:"Manage digital assets through familiar actions, with guidance for your first experience.",ctaPrimary:"Try the demo",ctaSecondary:"See how it works",appBadge:"N.E.D Mobile Interface",illustrationTag:"Experience Illustration",trustPill1:"Familiar Interactions",trustPill2:"Solana Devnet (USDC)",trustPill3:"Expo Mobile Preview"},marquee:{tag:"Network & Ecosystem Partners",badge:"Ecosystem",scrollHint:"Scroll or drag to explore"},coreActions:{badge:"Core Actions",headline:"Simplifying Stablecoin Management",receiveTitle:"Receive",receiveDesc:"Share your details to receive assets.",sendTitle:"Send",sendDesc:"Choose a recipient and review before sending.",trackTitle:"Track",trackDesc:"View your balance and transaction history."},sendFeature:{tag:"Send Feature",headline:"Choose a recipient in a familiar way.",description:"Choose a recipient using a phone number, QR code, or wallet address. Review the details before confirming.",illustrationBadge:"Flow illustration",illustrationNotice:"* Sample flow illustration; does not connect to real wallets or Mainnet.",modePhone:"Phone number",modeQr:"QR & Shake & Split",modeWallet:"Solana Wallet",modeShakeSplit:"Shake & Split",modeLuckyCoin:"Lucky Coin Room",recipientLabel:"Selected Recipient",amountLabel:"Send Amount",amountPreset10:"10 USDC",amountPreset25:"25 USDC",amountPreset50:"50 USDC",step1Name:"1. Choose method",step2Name:"2. Enter amount",step3Name:"3. Review & confirm",reviewNotice:"Review recipient details and balance before finalizing the test transfer.",btnVerify:"Review & Ready to Send",statusVerified:"Details verified on Solana Devnet",mascotBubble:"Shake phones with friends within 20m to split group bills in seconds!",showcaseTabs:{phone:"Send by Phone",shake:"Shake & Split",coin:"Lucky Coin",hub:"Transfer Hub"}},mascot:{heroGreeting:"Hi there! I am NED Teddy",heroCompanion:"Your companion for seedphrase-less Web3 payments!",sendTip:"Shake to split bills or flip a lucky coin on-chain!",overviewTip:"Clear tracking of monthly cashflow and budget limits!",demoTip:"Takes only 30 seconds to claim your @handle.sol on Devnet!",faqTip:"Have questions? Teddy is here to help you out!",finalTip:"Ready to try next-gen stablecoin wallet on Solana Devnet!",miniAppsTip:"Explore the MiniApps ecosystem: Instant Web3 services in one tap!",buildersTip:"Build the future of micro-payments on Solana with NED Teddy!"},assetOverview:{tag:"Asset Overview",headline:"Your balance and activity, at a glance.",description:"Check your balance and review your sending and receiving activity in the app.",captionNote:"Detail from the app interface",disclaimerNotice:"Interface image shows sample details from the demo; not actual platform or user metrics.",balanceCardTitle:"Overview Balance",balanceCardDesc:"Instantly view test USDC balances on Solana Devnet.",recentCardTitle:"Recent Activity",recentCardDesc:"Quickly inspect your sending and receiving history in real time."},demoGuide:{tag:"Quick Start",headline:"Experience N.E.D in action.",subtitle:"Watch the full walkthrough of seedphrase-less onboarding, stablecoin transfers, and MiniApps interaction on Solana Devnet.",videoBadge:"Official Walkthrough • Video Preview",openVideo:"Watch video →",openVideoWithSound:"Watch with sound →",autoPlaying:"Auto-playing",paused:"Paused",unmute:"Unmute",muted:"Muted",closeVideo:"Close video ✕",step1Title:"Seedphrase-less Setup",step1Desc:"Instant secure sign in using Email, Google, or phone recovery.",step2Title:"Shake & Split",step2Desc:"Shake phones together to split group bills in seconds on-chain.",step3Title:"Claim @name.sol Handle",step3Desc:"Send and receive using human-readable names with 100% sponsored gas.",contactCardTitle:"Demo Onboarding Contact",emailLabel:"Direct team contact email:",btnMailto:"Request demo access",btnCopy:"Copy email",btnCopied:"Email copied!",warningNotice:"The demo runs in a test environment. Do not send real assets."},miniApps:{tag:"Extensibility Direction",statusBadge:"In development",headline:"More experiences, inside N.E.D.",description:"N.E.D is developing a mini-app platform that aims to bring third-party experiences into the wallet.",diagramTitle:"Modular Architecture",diagramSubtitle:"Third-party experiences running directly within the wallet",module1:"Everyday Utilities & Services",module2:"Interactive Community & Games",module3:"Micro-Payment Integrations",cta:"For builders"},faq:{tag:"FAQ",headline:"Questions before you start?",q1:"How can I get started if I'm new to stablecoins?",a1:"Stablecoins are digital assets designed to track a reference value (such as USD). The N.E.D demo utilizes test USDC on Solana Devnet so you can explore comfortably. N.E.D aims to minimize onboarding complexity with familiar interactions, without requiring deep technical knowledge.",q2:"Is N.E.D a bank account?",a2:"No. N.E.D Wallet is a self-custodial digital asset wallet application, not a bank, and does not offer bank deposit services. Assets within the wallet are digital stablecoins on a blockchain test network, and are not bank-insured deposits.",q3:"Does the demo use real assets?",a3:"No. The current demo runs strictly on Solana Devnet with free test assets. Do not send real funds or valuable real assets to this demo.",q4:"What do I need to prepare to try the demo via Expo?",a4:"All you need is a smartphone (iOS or Android). After you contact the team via email, we will provide installation steps for Expo and guidance to open the N.E.D Wallet test build directly on your device.",q5:"Are mini-apps publicly available yet?",a5:"Not yet. The mini-app platform is in early architectural development. We are actively engaging with interested builders to exchange ideas and explore future integration feasibility together.",q6:"How can builders get in touch?",a6:'Builders can learn more on the For Builders page (/builders) or reach out directly to tdat.100524@gmail.com with the subject "N.E.D Wallet — Builder collaboration" to discuss concepts and collaboration opportunities.'},finalCta:{headline:"Take your first look at N.E.D.",description:"Contact the team for guidance on trying the demo.",btnPrimary:"Request demo access",builderLink:"Building a mini-app? Let's talk."},footer:{description:"N.E.D Wallet is a mobile application for managing, sending, and receiving stablecoins on Solana Devnet through familiar interactions.",quickLinks:"Navigation",contact:"Contact",statusTag:"Solana Devnet Demo",disclaimer:"N.E.D Wallet is an internal test application operating on the Solana Devnet. It is not an authorized banking or commercial financial service. Please do not send real assets.",copyright:"© 2026 N.E.D Wallet. In active development."},builders:{backHome:"← Back to home",badgeStatus:"Developer Portal • Automated Submission",headline:"Launch your Mini-DApp on N.E.D Wallet.",subtitle:"Automated Developer Portal: Build independently, submit via Dashboard, and distribute your DApp to users on Solana Devnet.",btnDashboard:"Access Dashboard",btnDocs:"Read API Docs",explainTitle:"Third-Party Apps Inside the Wallet",explainDesc:"Mini-apps are third-party web DApps running independently inside a secure sandbox within N.E.D Wallet. Users never have to leave the wallet and enjoy instant stablecoin settlements.",explainNote:"DApps run independently in a secure sandbox. Declare URL and configure permissions directly via Developer Portal.",valuesTitle:"Platform Goals & Vision",val1Title:"Richer Experiences for Users",val1Desc:"Equipping users with varied everyday utilities without imposing technical or security friction.",val2Title:"Direct Distribution Channel for Builders",val2Desc:"Helping builder products tap directly into an active user base looking for fast stablecoin transactions on Solana.",journeyBadge:"Automated Workflow",journeyTitle:"3 Steps to Launch on N.E.D",journeyNotice:"* Automated review and release workflow managed directly through N.E.D Developer Dashboard.",step1Title:"01 — Build & Self-Host",step1Desc:"Develop independent DApps and self-host your own source code.",step2Title:"02 — Submit via Portal",step2Desc:"Declare your App URL, Logo, and Description through the N.E.D Dashboard.",step3Title:"03 — Review & Go Live",step3Desc:"Track real-time review status; automatically appears in user wallets once Approved.",ctaHeadline:"Ready to launch your DApp on N.E.D?",ctaDesc:"Join the Developer Portal ecosystem today. Register and submit your application via the Dashboard in minutes.",ctaSubmit:"Start Project Submission"}}},$g=ae.createContext(void 0),My=({children:t})=>{const[e,n]=ae.useState(()=>{try{const s=localStorage.getItem("ned_wallet_lang");if(s==="vi"||s==="en")return s}catch{}return"vi"}),i=s=>{n(s);try{localStorage.setItem("ned_wallet_lang",s)}catch{}};ae.useEffect(()=>{document.documentElement.lang=e,e==="vi"?document.title="N.E.D Wallet — Ví Web3 cho Stablecoin trên Solana Devnet":document.title="N.E.D Wallet — Simple Web3 Stablecoin Wallet on Solana Devnet"},[e]);const r={lang:e,setLang:i,t:wy[e]};return o.jsx($g.Provider,{value:r,children:t})},bn=()=>{const t=ae.useContext($g);if(!t)throw new Error("useI18n must be used within an I18nProvider");return t};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ty(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Ey(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=t=>{const e=Cy(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Uc(t){return t!=null}function Ay(t,e={}){var h,x;const n=e.attributeNames??{},i=g=>n[g]??g,r=t.size??t.width??ar.width,s=t.size??t.height??ar.height,a=((h=t.aliases)==null?void 0:h.filter(g=>typeof g=="string"&&g.trim()!=="").map(g=>`lucide-${g}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...a],c=((x=e.className)==null?void 0:x.split(" ").filter(Boolean))??[],d=e.includeDefaultClasses===!1?cu(...c):cu("lucide",...l,...c),u=e.absoluteStrokeWidth?Number(e.strokeWidth??ar["stroke-width"])*Number(t.size??t.width??ar.width)/Number(e.size??e.width??ar.width):e.strokeWidth??ar["stroke-width"];return["svg",{...Object.entries(ar).reduce((g,[_,m])=>(g[i(_)]=m,g),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Uc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Uc(e.width)&&{[i("width")]:e.width},..."height"in e&&Uc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:u,...d&&{[i("class")]:d},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(g=>{const[_,m,p]=g,b=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return p?[_,b,p]:[_,b]})]}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ky(t,e={}){return Ay(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Py=ae.createContext({}),Dy=()=>ae.useContext(Py),Ly=ae.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:l="",children:c,iconNode:d=[],icon:u={node:d,aliases:[],size:24},...f},h)=>{const{size:x=24,strokeWidth:g=2,absoluteStrokeWidth:_=!1,nonScalingStroke:m=!1,color:p="currentColor",className:b=""}=Dy()??{},v=!!c||Ry(f),[S,N,C=[]]=ky(u,{color:t??p,width:n??e??x,height:i??e??x,strokeWidth:r??g,absoluteStrokeWidth:s??_,nonScalingStroke:a??m,className:cu(b,l),hasA11yProp:v,attributes:f});return ae.createElement(S,{ref:h,...N},[...C.map(([T,k])=>ae.createElement(T,k)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ne(t,e=[],n=[]){const i=typeof t=="string"?Ty(t,e,n):t,r=ae.forwardRef(({className:s,...a},l)=>ae.createElement(Ly,{ref:l,icon:i,className:s,...a}));return i.name&&(r.displayName=Ny(i.name)),r}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"arrow-down-left",size:24,node:[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]};Yg.node;const du=Ne(Yg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};Kg.node;const Iy=Ne(Kg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};Qg.node;const Zg=Ne(Qg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Jg.node;const yi=Ne(Jg);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};ev.node;const Ko=Ne(ev);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv={name:"blocks",size:24,node:[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]]};tv.node;const nv=Ne(tv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};iv.node;const kp=Ne(iv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};rv.node;const Uy=Ne(rv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv={name:"chart-pie",size:24,node:[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],aliases:["pie-chart"]};sv.node;const By=Ne(sv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};av.node;const Al=Ne(av);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};ov.node;const Fy=Ne(ov);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};lv.node;const cv=Ne(lv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};dv.node;const uv=Ne(dv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};hv.node;const On=Ne(hv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};fv.node;const Oy=Ne(fv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};pv.node;const mv=Ne(pv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};xv.node;const ga=Ne(xv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv={name:"code",size:24,node:[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]};gv.node;const jy=Ne(gv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};vv.node;const zy=Ne(vv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};bv.node;const _v=Ne(bv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};yv.node;const Hy=Ne(yv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Sv.node;const Vy=Ne(Sv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};wv.node;const Gy=Ne(wv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};Mv.node;const Zh=Ne(Mv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Ev.node;const Tv=Ne(Ev);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv={name:"layout-dashboard",size:24,node:[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]};Cv.node;const uu=Ne(Cv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};Nv.node;const Wy=Ne(Nv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Av.node;const hu=Ne(Av);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};kv.node;const Xy=Ne(kv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};Rv.node;const qy=Ne(Rv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};Pv.node;const fu=Ne(Pv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Dv.node;const $y=Ne(Dv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv={name:"qr-code",size:24,node:[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]};Lv.node;const Iv=Ne(Lv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};Uv.node;const Yy=Ne(Uv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Bv.node;const Ky=Ne(Bv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv={name:"scan-line",size:24,node:[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]};Fv.node;const Rp=Ne(Fv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};Ov.node;const Qy=Ne(Ov);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};jv.node;const kl=Ne(jv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};zv.node;const Hv=Ne(zv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};Vv.node;const Gv=Ne(Vv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Wv.node;const Si=Ne(Wv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Xv.node;const Zy=Ne(Xv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};qv.node;const Jy=Ne(qv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};$v.node;const eS=Ne($v);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Yv.node;const tS=Ne(Yv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Kv.node;const nS=Ne(Kv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv={name:"wallet",size:24,node:[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]};Qv.node;const vs=Ne(Qv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Zv.node;const Jh=Ne(Zv),Ee={productName:"N.E.D Wallet",contactEmail:"tdat.100524@gmail.com",network:"Solana Devnet",platform:"Expo (iOS & Android)",logoAsset:"/assets/ned-logo.jpg",appLogoAsset:"/assets/brand/logo_app.jpg",brandNedLogo:"/assets/brand/logo_ned_wallet.jpg",brandColors:"/assets/brand/brand_colors.jpg",mascots:{waving:"/assets/brand/mascot/waving.png",happy:"/assets/brand/mascot/happy.png",proud:"/assets/brand/mascot/proud.png",exciting:"/assets/brand/mascot/exciting.png",curious:"/assets/brand/mascot/curious.png",thinking:"/assets/brand/mascot/thinking.png",laughing:"/assets/brand/mascot/laughing.png",surprised:"/assets/brand/mascot/surprised.png",sleepy:"/assets/brand/mascot/sleepy.png",scared:"/assets/brand/mascot/scared.png",sad:"/assets/brand/mascot/sad.png",angry:"/assets/brand/mascot/angry.png",confused:"/assets/brand/mascot/confused.png",crying:"/assets/brand/mascot/crying.png",embarrassed:"/assets/brand/mascot/embarrassed.png",frustrated:"/assets/brand/mascot/frustrated.png"},screenshots:{dashboardHome:"/assets/screenshots/app_dashboard_home.png",analyticsCashflow:"/assets/screenshots/app_analytics_cashflow.png",transferCenter:"/assets/screenshots/app_transfer_center.png",transferPhone:"/assets/screenshots/app_transfer_phone.png",shakeSplit:"/assets/screenshots/app_shake_split.png",luckyCoin:"/assets/screenshots/app_lucky_coin.png",miniappsHub:"/assets/screenshots/app_miniapps_hub.png",login:"/assets/screenshots/app_login.png",register:"/assets/screenshots/app_register.png",emailOtp:"/assets/screenshots/app_email_otp.png",phoneSecurity:"/assets/screenshots/app_phone_security.png",phoneOtp:"/assets/screenshots/app_phone_otp.png",handleClaim:"/assets/screenshots/app_handle_claim.png",welcomeSuccess:"/assets/screenshots/app_welcome_success.png"},homeScreenshotAsset:"/assets/screenshots/app_dashboard_home.png",sendScreenshotAsset:"/assets/screenshots/app_transfer_phone.png",demoMailSubject:"N.E.D Wallet — Demo request",demoMailBodyVi:`Chào team N.E.D,

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

Looking forward to discussing further with the team!`,demoUrl:"",demoVideo:{id:"6t4StC59mrQ",url:"https://youtu.be/6t4StC59mrQ?si=pssML1KZW4lWzu_D",embedUrl:"https://www.youtube.com/embed/6t4StC59mrQ?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&mute=1",localVideoAsset:"/assets/ned_wallet_demo.mp4",rawLocalVideoAsset:"/assets/N.E.D%20Wallet%20m%E1%BB%9Bi.mp4",thumbnail:"https://img.youtube.com/vi/6t4StC59mrQ/maxresdefault.jpg"},stablecoinToken:"USDC (Solana Devnet)",supportedIdentities:["Số điện thoại / Phone number","Mã QR / QR Code","Địa chỉ ví / Wallet address"]},pu=({className:t="h-10"})=>o.jsx("div",{className:`inline-flex items-center select-none ${t}`,children:o.jsx("img",{src:Ee.brandNedLogo,alt:"N.E.D Wallet",className:"h-full w-auto max-w-[180px] object-contain"})}),iS=({currentPath:t,onNavigate:e})=>{const{t:n,lang:i,setLang:r}=bn(),[s,a]=ae.useState(!1),l=ae.useRef(null),c=ae.useRef(null);ae.useEffect(()=>{const f=h=>{h.key==="Escape"&&s&&a(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[s]),ae.useEffect(()=>{s&&c.current&&c.current.focus()},[s]);const d=f=>{if(a(!1),f.startsWith("#"))if(t!=="/")e("/"),setTimeout(()=>{const h=document.querySelector(f);h==null||h.scrollIntoView({behavior:"smooth"})},100);else{const h=document.querySelector(f);h==null||h.scrollIntoView({behavior:"smooth"})}else e(f),window.scrollTo({top:0,behavior:"smooth"})},u=()=>{if(a(!1),t!=="/"){e("/"),window.setTimeout(()=>window.dispatchEvent(new CustomEvent("open-demo-guide")),150);return}window.dispatchEvent(new CustomEvent("open-demo-guide"))};return o.jsxs("header",{className:"sticky top-0 z-50 w-full bg-brand-deepPurple/95 border-b-3 border-brand-inkBlack backdrop-blur-none px-4 sm:px-6 lg:px-8 py-3 transition-colors",children:[o.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-4",children:[o.jsx("button",{onClick:()=>d("/"),className:"focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg p-1 text-left flex items-center","aria-label":"N.E.D Wallet Home",children:o.jsx(pu,{isDark:!0})}),o.jsxs("nav",{className:"hidden md:flex items-center gap-1 lg:gap-2","aria-label":"Main Navigation",children:[o.jsx("button",{onClick:()=>d("#experience"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.experience}),o.jsx("button",{onClick:u,className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.getStarted}),o.jsx("button",{onClick:()=>d("/builders"),className:`px-3 py-1.5 text-sm font-bold rounded-lg transition-colors border-2 ${t==="/builders"?"bg-brand-lavender text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs":"text-brand-offWhite border-transparent hover:border-brand-lavender/50"}`,children:n.nav.builders}),o.jsx("button",{onClick:()=>d("#faq"),className:"px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors",children:n.nav.faq})]}),o.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[o.jsxs("div",{className:"flex items-center bg-brand-darkSurface border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[o.jsx("button",{onClick:()=>r("vi"),className:`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${i==="vi"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-300 hover:text-white"}`,"aria-label":"Chuyển sang Tiếng Việt","aria-pressed":i==="vi",children:"VI"}),o.jsx("button",{onClick:()=>r("en"),className:`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${i==="en"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-300 hover:text-white"}`,"aria-label":"Switch to English","aria-pressed":i==="en",children:"EN"})]}),o.jsxs("button",{onClick:u,className:"btn-brutal-primary px-4 py-2 rounded-xl text-sm font-black flex items-center gap-1.5",children:[o.jsx("span",{children:n.nav.tryDemo}),o.jsx(yi,{className:"w-4 h-4"})]})]}),o.jsxs("div",{className:"flex items-center gap-2 md:hidden",children:[o.jsxs("button",{onClick:()=>r(i==="vi"?"en":"vi"),className:"px-2.5 py-1 text-xs font-black bg-brand-darkSurface border-2 border-brand-inkBlack text-brand-offWhite rounded-lg shadow-brutal-xs flex items-center gap-1","aria-label":"Toggle language",children:[o.jsx(Zh,{className:"w-3.5 h-3.5 text-brand-cyan"}),o.jsx("span",{children:i.toUpperCase()})]}),o.jsx("button",{onClick:()=>a(!0),className:"p-2 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs","aria-label":"Open Navigation Menu","aria-expanded":s,children:o.jsx(Xy,{className:"w-5 h-5"})})]})]}),s&&o.jsx("div",{className:"fixed inset-0 z-50 bg-brand-deepPurple/80 backdrop-blur-sm flex justify-end md:hidden animate-in fade-in",onClick:()=>a(!1),children:o.jsxs("div",{ref:l,className:"w-[85%] max-w-sm h-full bg-brand-warmCream border-l-4 border-brand-inkBlack p-6 flex flex-col justify-between shadow-brutal-xl overflow-y-auto",onClick:f=>f.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Mobile Navigation",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between pb-4 border-b-2 border-brand-inkBlack mb-6",children:[o.jsx(pu,{isDark:!1}),o.jsx("button",{ref:c,onClick:()=>a(!1),className:"p-2 bg-white border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs hover:bg-brand-paleYellow","aria-label":"Close menu",children:o.jsx(Jh,{className:"w-5 h-5 text-brand-inkBlack"})})]}),o.jsxs("nav",{className:"flex flex-col gap-3",children:[o.jsx("button",{onClick:()=>d("#experience"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.experience}),o.jsx("button",{onClick:u,className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.getStarted}),o.jsx("button",{onClick:()=>d("/builders"),className:`w-full text-left py-3 px-4 border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs ${t==="/builders"?"bg-brand-lavender":"bg-white hover:bg-brand-lavender/30"}`,children:n.nav.builders}),o.jsx("button",{onClick:()=>d("#faq"),className:"w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30",children:n.nav.faq})]})]}),o.jsxs("div",{className:"pt-6 border-t-2 border-brand-inkBlack flex flex-col gap-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-black uppercase text-stone-600",children:"Ngôn ngữ / Language:"}),o.jsxs("div",{className:"flex bg-white border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[o.jsx("button",{onClick:()=>r("vi"),className:`px-3 py-1 text-xs font-black rounded-lg ${i==="vi"?"bg-brand-lime border border-brand-inkBlack":"text-stone-600"}`,children:"VI"}),o.jsx("button",{onClick:()=>r("en"),className:`px-3 py-1 text-xs font-black rounded-lg ${i==="en"?"bg-brand-lime border border-brand-inkBlack":"text-stone-600"}`,children:"EN"})]})]}),o.jsxs("button",{onClick:u,className:"w-full py-3 bg-brand-lavender text-brand-inkBlack border-3 border-brand-inkBlack rounded-xl font-black text-sm shadow-brutal flex items-center justify-center gap-2",children:[o.jsx("span",{children:n.nav.tryDemo}),o.jsx(yi,{className:"w-4 h-4"})]})]})]})})]})},Oe=({children:t,animation:e="fade-up",delay:n=0,className:i="",threshold:r=.08})=>{const[s,a]=ae.useState(!1),l=ae.useRef(null);ae.useEffect(()=>{if(typeof window<"u"&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window))){a(!0);return}const d=l.current;if(!d)return;const u=d.getBoundingClientRect();if(u.top<window.innerHeight&&u.bottom>0){a(!0);return}const h=new IntersectionObserver(([x])=>{x.isIntersecting&&(a(!0),h.unobserve(d))},{threshold:r,rootMargin:"0px 0px -20px 0px"});return h.observe(d),()=>{h.disconnect()}},[r]);const c=()=>{switch(e){case"pop":return"reveal-pop";case"slide-left":return"reveal-slide-left";case"slide-right":return"reveal-slide-right";case"fade-up":default:return"reveal-fade-up"}};return o.jsx("div",{ref:l,style:{transitionDelay:`${n}ms`},className:`reveal-item ${c()} ${s?"reveal-visible":""} ${i}`,children:t})},rS=({onNavigate:t})=>{const{t:e,lang:n,setLang:i}=bn(),r=s=>{if(s.startsWith("#")){const a=document.querySelector(s);a?a.scrollIntoView({behavior:"smooth"}):(t("/"),setTimeout(()=>{var l;(l=document.querySelector(s))==null||l.scrollIntoView({behavior:"smooth"})},120))}else t(s),window.scrollTo({top:0,behavior:"smooth"})};return o.jsx("footer",{className:"w-full bg-brand-deepPurple text-brand-offWhite border-t-4 border-brand-inkBlack py-12 sm:py-16 px-4 sm:px-6 lg:px-8 select-none",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs(Oe,{animation:"fade-up",delay:0,children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-brand-lavender/20",children:[o.jsxs("div",{className:"md:col-span-5 flex flex-col items-start",children:[o.jsx("button",{onClick:()=>r("/"),className:"mb-4 text-left","aria-label":"N.E.D Wallet Home",children:o.jsx(pu,{isDark:!0})}),o.jsx("p",{className:"text-sm font-medium text-stone-300 max-w-md leading-relaxed mb-4",children:e.footer.description}),o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-brand-darkSurface border border-brand-lavender rounded-lg text-xs font-black text-brand-lime",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-pulse"}),o.jsx("span",{children:e.footer.statusTag})]})]}),o.jsxs("div",{className:"md:col-span-3 flex flex-col gap-3",children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-brand-lavender",children:e.footer.quickLinks}),o.jsxs("nav",{className:"flex flex-col gap-2 text-sm font-bold text-stone-300",children:[o.jsx("button",{onClick:()=>r("#experience"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.experience}),o.jsx("button",{onClick:()=>r("#send"),className:"text-left hover:text-white transition-colors cursor-pointer",children:"Chuyển stablecoin"}),o.jsx("button",{onClick:()=>r("#overview"),className:"text-left hover:text-white transition-colors cursor-pointer",children:"Tổng quan tài sản"}),o.jsx("button",{onClick:()=>r("#demo"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.getStarted}),o.jsx("button",{onClick:()=>r("/builders"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.builders}),o.jsx("button",{onClick:()=>r("#faq"),className:"text-left hover:text-white transition-colors cursor-pointer",children:e.nav.faq})]})]}),o.jsxs("div",{className:"md:col-span-4 flex flex-col gap-4",children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-brand-lavender mb-2",children:e.footer.contact}),o.jsx("div",{className:"text-sm font-bold text-stone-300 mb-1",children:"Email nhóm phát triển:"}),o.jsx("a",{href:`mailto:${Ee.contactEmail}`,className:"text-sm font-black text-brand-cyan hover:underline break-all",children:Ee.contactEmail}),o.jsx("div",{className:"text-xs text-stone-400 font-medium mt-1",children:"Phản hồi hướng dẫn tiếp cận bản demo trong vòng 24 giờ làm việc."})]}),o.jsxs("div",{className:"pt-2",children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-400 mb-2",children:"Ngôn ngữ / Language:"}),o.jsxs("div",{className:"inline-flex bg-brand-darkSurface border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[o.jsx("button",{onClick:()=>i("vi"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all ${n==="vi"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-400 hover:text-white"}`,children:"Tiếng Việt"}),o.jsx("button",{onClick:()=>i("en"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all ${n==="en"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack":"text-stone-400 hover:text-white"}`,children:"English"})]})]})]})]}),o.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-stone-400",children:[o.jsx("p",{className:"max-w-3xl leading-relaxed",children:e.footer.disclaimer}),o.jsx("div",{className:"text-stone-500 flex-shrink-0",children:e.footer.copyright})]})]})})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ef="169",sS=0,Pp=1,aS=2,Jv=1,oS=2,li=3,Ji=0,on=1,ui=2,Yi=0,bs=1,Dp=2,Lp=3,Ip=4,lS=5,gr=100,cS=101,dS=102,uS=103,hS=104,fS=200,pS=201,mS=202,xS=203,mu=204,xu=205,gS=206,vS=207,bS=208,_S=209,yS=210,SS=211,wS=212,MS=213,ES=214,gu=0,vu=1,bu=2,As=3,_u=4,yu=5,Su=6,wu=7,e0=0,TS=1,CS=2,Ki=0,NS=1,AS=2,kS=3,RS=4,PS=5,DS=6,LS=7,t0=300,ks=301,Rs=302,Mu=303,Eu=304,tc=306,Tu=1e3,Sr=1001,Cu=1002,Cn=1003,IS=1004,uo=1005,jn=1006,Bc=1007,wr=1008,wi=1009,n0=1010,i0=1011,Ia=1012,tf=1013,Rr=1014,pi=1015,za=1016,nf=1017,rf=1018,Ps=1020,r0=35902,s0=1021,a0=1022,zn=1023,o0=1024,l0=1025,_s=1026,Ds=1027,c0=1028,sf=1029,d0=1030,af=1031,of=1033,Qo=33776,Zo=33777,Jo=33778,el=33779,Nu=35840,Au=35841,ku=35842,Ru=35843,Pu=36196,Du=37492,Lu=37496,Iu=37808,Uu=37809,Bu=37810,Fu=37811,Ou=37812,ju=37813,zu=37814,Hu=37815,Vu=37816,Gu=37817,Wu=37818,Xu=37819,qu=37820,$u=37821,tl=36492,Yu=36494,Ku=36495,u0=36283,Qu=36284,Zu=36285,Ju=36286,US=3200,BS=3201,h0=0,FS=1,Fi="",qn="srgb",rr="srgb-linear",lf="display-p3",nc="display-p3-linear",Rl="linear",dt="srgb",Pl="rec709",Dl="p3",Fr=7680,Up=519,OS=512,jS=513,zS=514,f0=515,HS=516,VS=517,GS=518,WS=519,Bp=35044,Fp="300 es",mi=2e3,Ll=2001;class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=Math.PI/180,eh=180/Math.PI;function Ha(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function XS(t,e){return(t%e+e)%e}function Fc(t,e,n){return(1-n)*t+n*e}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,a,l,c,d){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,d)}set(e,n,i,r,s,a,l,c,d){const u=this.elements;return u[0]=e,u[1]=r,u[2]=l,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],d=i[1],u=i[4],f=i[7],h=i[2],x=i[5],g=i[8],_=r[0],m=r[3],p=r[6],b=r[1],v=r[4],S=r[7],N=r[2],C=r[5],T=r[8];return s[0]=a*_+l*b+c*N,s[3]=a*m+l*v+c*C,s[6]=a*p+l*S+c*T,s[1]=d*_+u*b+f*N,s[4]=d*m+u*v+f*C,s[7]=d*p+u*S+f*T,s[2]=h*_+x*b+g*N,s[5]=h*m+x*v+g*C,s[8]=h*p+x*S+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],u=e[8];return n*a*u-n*l*d-i*s*u+i*l*c+r*s*d-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],u=e[8],f=u*a-l*d,h=l*c-u*s,x=d*s-a*c,g=n*f+i*h+r*x;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*d-u*i)*_,e[2]=(l*i-r*a)*_,e[3]=h*_,e[4]=(u*n-r*c)*_,e[5]=(r*s-l*n)*_,e[6]=x*_,e[7]=(i*c-d*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),d=Math.sin(s);return this.set(i*c,i*d,-i*(c*a+d*l)+a+e,-r*d,r*c,-r*(-d*a+c*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(Oc.makeScale(e,n)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Oc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new Be;function p0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qS(){const t=Il("canvas");return t.style.display="block",t}const Op={};function il(t){t in Op||(Op[t]=!0,console.warn(t))}function $S(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function YS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function KS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jp=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zp=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[rr]:{transfer:Rl,primaries:Pl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[qn]:{transfer:dt,primaries:Pl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[nc]:{transfer:Rl,primaries:Dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(zp),fromReference:t=>t.applyMatrix3(jp)},[lf]:{transfer:dt,primaries:Dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(zp),fromReference:t=>t.applyMatrix3(jp).convertLinearToSRGB()}},QS=new Set([rr,nc]),et={enabled:!0,_workingColorSpace:rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!QS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qs[e].toReference,r=Qs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qs[t].primaries},getTransfer:function(t){return t===Fi?Rl:Qs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Qs[e].luminanceCoefficients)}};function ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Or;class ZS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=Il("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ys(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class m0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(zc(r[a].image)):s.push(zc(r[a]))}else s=zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ZS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e1=0;class ln extends Fs{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Sr,r=Sr,s=jn,a=wr,l=zn,c=wi,d=ln.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Ha(),this.name="",this.source=new m0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tu:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tu:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=t0;ln.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,d=c[0],u=c[4],f=c[8],h=c[1],x=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(d+x+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(d+1)/2,S=(x+1)/2,N=(p+1)/2,C=(u+h)/4,T=(f+_)/4,k=(g+m)/4;return v>S&&v>N?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=T/i):S>N?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=k/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=T/s,r=k/s),this.set(i,r,s,n),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(h-u)/b,this.w=Math.acos((d+x+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t1 extends Fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new m0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends t1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class x0 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n1 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Va{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],d=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],x=s[a+1],g=s[a+2],_=s[a+3];if(l===0){e[n+0]=c,e[n+1]=d,e[n+2]=u,e[n+3]=f;return}if(l===1){e[n+0]=h,e[n+1]=x,e[n+2]=g,e[n+3]=_;return}if(f!==_||c!==h||d!==x||u!==g){let m=1-l;const p=c*h+d*x+u*g+f*_,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const N=Math.sqrt(v),C=Math.atan2(N,p*b);m=Math.sin(m*C)/N,l=Math.sin(l*C)/N}const S=l*b;if(c=c*m+h*S,d=d*m+x*S,u=u*m+g*S,f=f*m+_*S,m===1-l){const N=1/Math.sqrt(c*c+d*d+u*u+f*f);c*=N,d*=N,u*=N,f*=N}}e[n]=c,e[n+1]=d,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],d=i[r+2],u=i[r+3],f=s[a],h=s[a+1],x=s[a+2],g=s[a+3];return e[n]=l*g+u*f+c*x-d*h,e[n+1]=c*g+u*h+d*f-l*x,e[n+2]=d*g+u*x+l*h-c*f,e[n+3]=u*g-l*f-c*h-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,d=l(i/2),u=l(r/2),f=l(s/2),h=c(i/2),x=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*f+d*x*g,this._y=d*x*f-h*u*g,this._z=d*u*g+h*x*f,this._w=d*u*f-h*x*g;break;case"YXZ":this._x=h*u*f+d*x*g,this._y=d*x*f-h*u*g,this._z=d*u*g-h*x*f,this._w=d*u*f+h*x*g;break;case"ZXY":this._x=h*u*f-d*x*g,this._y=d*x*f+h*u*g,this._z=d*u*g+h*x*f,this._w=d*u*f-h*x*g;break;case"ZYX":this._x=h*u*f-d*x*g,this._y=d*x*f+h*u*g,this._z=d*u*g-h*x*f,this._w=d*u*f+h*x*g;break;case"YZX":this._x=h*u*f+d*x*g,this._y=d*x*f+h*u*g,this._z=d*u*g-h*x*f,this._w=d*u*f-h*x*g;break;case"XZY":this._x=h*u*f-d*x*g,this._y=d*x*f-h*u*g,this._z=d*u*g+h*x*f,this._w=d*u*f+h*x*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],d=n[2],u=n[6],f=n[10],h=i+l+f;if(h>0){const x=.5/Math.sqrt(h+1);this._w=.25/x,this._x=(u-c)*x,this._y=(s-d)*x,this._z=(a-r)*x}else if(i>l&&i>f){const x=2*Math.sqrt(1+i-l-f);this._w=(u-c)/x,this._x=.25*x,this._y=(r+a)/x,this._z=(s+d)/x}else if(l>f){const x=2*Math.sqrt(1+l-i-f);this._w=(s-d)/x,this._x=(r+a)/x,this._y=.25*x,this._z=(c+u)/x}else{const x=2*Math.sqrt(1+f-i-l);this._w=(a-r)/x,this._x=(s+d)/x,this._y=(c+u)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,d=n._z,u=n._w;return this._x=i*u+a*l+r*d-s*c,this._y=r*u+a*c+s*l-i*d,this._z=s*u+a*d+i*c-r*l,this._w=a*u-i*l-r*c-s*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let l=a*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const x=1-n;return this._w=x*a+n*this._w,this._x=x*i+n*this._x,this._y=x*r+n*this._y,this._z=x*s+n*this._z,this.normalize(),this}const d=Math.sqrt(c),u=Math.atan2(d,l),f=Math.sin((1-n)*u)/d,h=Math.sin(n*u)/d;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,d=2*(a*r-l*i),u=2*(l*n-s*r),f=2*(s*i-a*n);return this.x=n+c*d+a*f-l*u,this.y=i+c*u+l*d-s*f,this.z=r+c*f+s*u-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hc=new B,Hp=new Va;class Ga{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),fo.subVectors(this.max,Zs),jr.subVectors(e.a,Zs),zr.subVectors(e.b,Zs),Hr.subVectors(e.c,Zs),Ni.subVectors(zr,jr),Ai.subVectors(Hr,zr),or.subVectors(jr,Hr);let n=[0,-Ni.z,Ni.y,0,-Ai.z,Ai.y,0,-or.z,or.y,Ni.z,0,-Ni.x,Ai.z,0,-Ai.x,or.z,0,-or.x,-Ni.y,Ni.x,0,-Ai.y,Ai.x,0,-or.y,or.x,0];return!Vc(n,jr,zr,Hr,fo)||(n=[1,0,0,0,1,0,0,0,1],!Vc(n,jr,zr,Hr,fo))?!1:(po.crossVectors(Ni,Ai),n=[po.x,po.y,po.z],Vc(n,jr,zr,Hr,fo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new B,new B,new B,new B,new B,new B,new B,new B],Dn=new B,ho=new Ga,jr=new B,zr=new B,Hr=new B,Ni=new B,Ai=new B,or=new B,Zs=new B,fo=new B,po=new B,lr=new B;function Vc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){lr.fromArray(t,s);const l=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),c=e.dot(lr),d=n.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(c,d,u),Math.min(c,d,u))>l)return!1}return!0}const i1=new Ga,Js=new B,Gc=new B;class ic{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):i1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Gc)),this.expandByPoint(Js.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new B,Wc=new B,mo=new B,ki=new B,Xc=new B,xo=new B,qc=new B;class g0{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wc.copy(e).add(n).multiplyScalar(.5),mo.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(Wc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(mo),l=ki.dot(this.direction),c=-ki.dot(mo),d=ki.lengthSq(),u=Math.abs(1-a*a);let f,h,x,g;if(u>0)if(f=a*c-l,h=a*l-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,x=f*(f+a*h+2*l)+h*(a*f+h+2*c)+d}else h=s,f=Math.max(0,-(a*h+l)),x=-f*f+h*(h+2*c)+d;else h=-s,f=Math.max(0,-(a*h+l)),x=-f*f+h*(h+2*c)+d;else h<=-g?(f=Math.max(0,-(-a*s+l)),h=f>0?-s:Math.min(Math.max(-s,-c),s),x=-f*f+h*(h+2*c)+d):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),x=h*(h+2*c)+d):(f=Math.max(0,-(a*s+l)),h=f>0?s:Math.min(Math.max(-s,-c),s),x=-f*f+h*(h+2*c)+d);else h=a>0?-s:s,f=Math.max(0,-(a*h+l)),x=-f*f+h*(h+2*c)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wc).addScaledVector(mo,h),x}intersectSphere(e,n){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const d=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return d>=0?(i=(e.min.x-h.x)*d,r=(e.max.x-h.x)*d):(i=(e.max.x-h.x)*d,r=(e.min.x-h.x)*d),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(l=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(l=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,r,s){Xc.subVectors(n,e),xo.subVectors(i,e),qc.crossVectors(Xc,xo);let a=this.direction.dot(qc),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ki.subVectors(this.origin,e);const c=l*this.direction.dot(xo.crossVectors(ki,xo));if(c<0)return null;const d=l*this.direction.dot(Xc.cross(ki));if(d<0||c+d>a)return null;const u=-l*ki.dot(qc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,a,l,c,d,u,f,h,x,g,_,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,d,u,f,h,x,g,_,m)}set(e,n,i,r,s,a,l,c,d,u,f,h,x,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=l,p[13]=c,p[2]=d,p[6]=u,p[10]=f,p[14]=h,p[3]=x,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),d=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,x=a*f,g=l*u,_=l*f;n[0]=c*u,n[4]=-c*f,n[8]=d,n[1]=x+g*d,n[5]=h-_*d,n[9]=-l*c,n[2]=_-h*d,n[6]=g+x*d,n[10]=a*c}else if(e.order==="YXZ"){const h=c*u,x=c*f,g=d*u,_=d*f;n[0]=h+_*l,n[4]=g*l-x,n[8]=a*d,n[1]=a*f,n[5]=a*u,n[9]=-l,n[2]=x*l-g,n[6]=_+h*l,n[10]=a*c}else if(e.order==="ZXY"){const h=c*u,x=c*f,g=d*u,_=d*f;n[0]=h-_*l,n[4]=-a*f,n[8]=g+x*l,n[1]=x+g*l,n[5]=a*u,n[9]=_-h*l,n[2]=-a*d,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const h=a*u,x=a*f,g=l*u,_=l*f;n[0]=c*u,n[4]=g*d-x,n[8]=h*d+_,n[1]=c*f,n[5]=_*d+h,n[9]=x*d-g,n[2]=-d,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const h=a*c,x=a*d,g=l*c,_=l*d;n[0]=c*u,n[4]=_-h*f,n[8]=g*f+x,n[1]=f,n[5]=a*u,n[9]=-l*u,n[2]=-d*u,n[6]=x*f+g,n[10]=h-_*f}else if(e.order==="XZY"){const h=a*c,x=a*d,g=l*c,_=l*d;n[0]=c*u,n[4]=-f,n[8]=d*u,n[1]=h*f+_,n[5]=a*u,n[9]=x*f-g,n[2]=g*f-x,n[6]=l*u,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r1,e,s1)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ri.crossVectors(i,un),Ri.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ri.crossVectors(i,un)),Ri.normalize(),go.crossVectors(un,Ri),r[0]=Ri.x,r[4]=go.x,r[8]=un.x,r[1]=Ri.y,r[5]=go.y,r[9]=un.y,r[2]=Ri.z,r[6]=go.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],d=i[12],u=i[1],f=i[5],h=i[9],x=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],v=i[7],S=i[11],N=i[15],C=r[0],T=r[4],k=r[8],W=r[12],y=r[1],M=r[5],H=r[9],j=r[13],X=r[2],q=r[6],z=r[10],K=r[14],P=r[3],$=r[7],Z=r[11],ee=r[15];return s[0]=a*C+l*y+c*X+d*P,s[4]=a*T+l*M+c*q+d*$,s[8]=a*k+l*H+c*z+d*Z,s[12]=a*W+l*j+c*K+d*ee,s[1]=u*C+f*y+h*X+x*P,s[5]=u*T+f*M+h*q+x*$,s[9]=u*k+f*H+h*z+x*Z,s[13]=u*W+f*j+h*K+x*ee,s[2]=g*C+_*y+m*X+p*P,s[6]=g*T+_*M+m*q+p*$,s[10]=g*k+_*H+m*z+p*Z,s[14]=g*W+_*j+m*K+p*ee,s[3]=b*C+v*y+S*X+N*P,s[7]=b*T+v*M+S*q+N*$,s[11]=b*k+v*H+S*z+N*Z,s[15]=b*W+v*j+S*K+N*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],d=e[13],u=e[2],f=e[6],h=e[10],x=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*f-r*d*f-s*l*h+i*d*h+r*l*x-i*c*x)+_*(+n*c*x-n*d*h+s*a*h-r*a*x+r*d*u-s*c*u)+m*(+n*d*f-n*l*x-s*a*f+i*a*x+s*l*u-i*d*u)+p*(-r*l*u-n*c*f+n*l*h+r*a*f-i*a*h+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],u=e[8],f=e[9],h=e[10],x=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=f*m*d-_*h*d+_*c*x-l*m*x-f*c*p+l*h*p,v=g*h*d-u*m*d-g*c*x+a*m*x+u*c*p-a*h*p,S=u*_*d-g*f*d+g*l*x-a*_*x-u*l*p+a*f*p,N=g*f*c-u*_*c-g*l*h+a*_*h+u*l*m-a*f*m,C=n*b+i*v+r*S+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=b*T,e[1]=(_*h*s-f*m*s-_*r*x+i*m*x+f*r*p-i*h*p)*T,e[2]=(l*m*s-_*c*s+_*r*d-i*m*d-l*r*p+i*c*p)*T,e[3]=(f*c*s-l*h*s-f*r*d+i*h*d+l*r*x-i*c*x)*T,e[4]=v*T,e[5]=(u*m*s-g*h*s+g*r*x-n*m*x-u*r*p+n*h*p)*T,e[6]=(g*c*s-a*m*s-g*r*d+n*m*d+a*r*p-n*c*p)*T,e[7]=(a*h*s-u*c*s+u*r*d-n*h*d-a*r*x+n*c*x)*T,e[8]=S*T,e[9]=(g*f*s-u*_*s-g*i*x+n*_*x+u*i*p-n*f*p)*T,e[10]=(a*_*s-g*l*s+g*i*d-n*_*d-a*i*p+n*l*p)*T,e[11]=(u*l*s-a*f*s-u*i*d+n*f*d+a*i*x-n*l*x)*T,e[12]=N*T,e[13]=(u*_*r-g*f*r+g*i*h-n*_*h-u*i*m+n*f*m)*T,e[14]=(g*l*r-a*_*r-g*i*c+n*_*c+a*i*m-n*l*m)*T,e[15]=(a*f*r-u*l*r+u*i*c-n*f*c-a*i*h+n*l*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,d=s*a,u=s*l;return this.set(d*a+i,d*l-r*c,d*c+r*l,0,d*l+r*c,u*l+i,u*c-r*a,0,d*c-r*l,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,d=s+s,u=a+a,f=l+l,h=s*d,x=s*u,g=s*f,_=a*u,m=a*f,p=l*f,b=c*d,v=c*u,S=c*f,N=i.x,C=i.y,T=i.z;return r[0]=(1-(_+p))*N,r[1]=(x+S)*N,r[2]=(g-v)*N,r[3]=0,r[4]=(x-S)*C,r[5]=(1-(h+p))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+v)*T,r[9]=(m-b)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const d=1/s,u=1/a,f=1/l;return Ln.elements[0]*=d,Ln.elements[1]*=d,Ln.elements[2]*=d,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,n.setFromRotationMatrix(Ln),i.x=s,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,a,l=mi){const c=this.elements,d=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let x,g;if(l===mi)x=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(l===Ll)x=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=mi){const c=this.elements,d=1/(n-e),u=1/(i-r),f=1/(a-s),h=(n+e)*d,x=(i+r)*u;let g,_;if(l===mi)g=(a+s)*f,_=-2*f;else if(l===Ll)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new B,Ln=new mt,r1=new B(0,0,0),s1=new B(1,1,1),Ri=new B,go=new B,un=new B,Vp=new mt,Gp=new Va;class ti{constructor(e=0,n=0,i=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],d=r[5],u=r[9],f=r[2],h=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-u,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class v0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a1=0;const Wp=new B,Gr=new Va,si=new mt,vo=new B,ea=new B,o1=new B,l1=new Va,Xp=new B(1,0,0),qp=new B(0,1,0),$p=new B(0,0,1),Yp={type:"added"},c1={type:"removed"},Wr={type:"childadded",child:null},$c={type:"childremoved",child:null};class Bt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new B,n=new ti,i=new Va,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Be}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vo.copy(e):vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ea,vo,this.up):si.lookAt(vo,ea,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(si),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(c1),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,o1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,l1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){const f=c[d];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),d=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),x=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),d.length>0&&(i.textures=d),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),x.length>0&&(i.animations=x),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(l){const c=[];for(const d in l){const u=l[d];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new B(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new B,ai=new B,Yc=new B,oi=new B,Xr=new B,qr=new B,Kp=new B,Kc=new B,Qc=new B,Zc=new B,Jc=new _t,ed=new _t,td=new _t;class En{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ai.subVectors(i,n),Yc.subVectors(e,n);const a=In.dot(In),l=In.dot(ai),c=In.dot(Yc),d=ai.dot(ai),u=ai.dot(Yc),f=a*d-l*l;if(f===0)return s.set(0,0,0),null;const h=1/f,x=(d*c-l*u)*h,g=(a*u-l*c)*h;return s.set(1-x-g,g,x)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(l,oi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Jc.setScalar(0),ed.setScalar(0),td.setScalar(0),Jc.fromBufferAttribute(e,n),ed.fromBufferAttribute(e,i),td.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jc,s.x),a.addScaledVector(ed,s.y),a.addScaledVector(td,s.z),a}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ai.subVectors(e,n),In.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),In.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return En.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;Xr.subVectors(r,i),qr.subVectors(s,i),Kc.subVectors(e,i);const c=Xr.dot(Kc),d=qr.dot(Kc);if(c<=0&&d<=0)return n.copy(i);Qc.subVectors(e,r);const u=Xr.dot(Qc),f=qr.dot(Qc);if(u>=0&&f<=u)return n.copy(r);const h=c*f-u*d;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Xr,a);Zc.subVectors(e,s);const x=Xr.dot(Zc),g=qr.dot(Zc);if(g>=0&&x<=g)return n.copy(s);const _=x*d-c*g;if(_<=0&&d>=0&&g<=0)return l=d/(d-g),n.copy(i).addScaledVector(qr,l);const m=u*g-x*f;if(m<=0&&f-u>=0&&x-g>=0)return Kp.subVectors(s,r),l=(f-u)/(f-u+(x-g)),n.copy(r).addScaledVector(Kp,l);const p=1/(m+_+h);return a=_*p,l=h*p,n.copy(i).addScaledVector(Xr,a).addScaledVector(qr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},bo={h:0,s:0,l:0};function nd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=XS(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=nd(a,s,e+1/3),this.g=nd(a,s,e),this.b=nd(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=b0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=jc(e.r),this.g=jc(e.g),this.b=jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return et.fromWorkingColorSpace(Ht.copy(this),e),Math.round(tn(Ht.r*255,0,255))*65536+Math.round(tn(Ht.g*255,0,255))*256+Math.round(tn(Ht.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,d;const u=(l+a)/2;if(l===a)c=0,d=0;else{const f=a-l;switch(d=u<=.5?f/(a+l):f/(2-a-l),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=d,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=qn){et.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(bo);const i=Fc(Pi.h,bo.h,n),r=Fc(Pi.s,bo.s,n),s=Fc(Pi.l,bo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new qe;qe.NAMES=b0;let d1=0;class Os extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=bs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=xu,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mu&&(i.blendSrc=this.blendSrc),this.blendDst!==xu&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _0 extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=e0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new B,_o=new tt;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bp,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_o.fromBufferAttribute(this,n),_o.applyMatrix3(e),this.setXY(n,_o.x,_o.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bp&&(e.usage=this.usage),e}}class y0 extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class S0 extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ei extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let u1=0;const yn=new mt,id=new Bt,$r=new B,hn=new Ga,ta=new Ga,Rt=new B;class Ei extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?S0:y0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ei(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];ta.setFromBufferAttribute(l),this.morphTargetsRelative?(Rt.addVectors(hn.min,ta.min),hn.expandByPoint(Rt),Rt.addVectors(hn.max,ta.max),hn.expandByPoint(Rt)):(hn.expandByPoint(ta.min),hn.expandByPoint(ta.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let d=0,u=l.count;d<u;d++)Rt.fromBufferAttribute(l,d),c&&($r.fromBufferAttribute(e,d),Rt.add($r)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let k=0;k<i.count;k++)l[k]=new B,c[k]=new B;const d=new B,u=new B,f=new B,h=new tt,x=new tt,g=new tt,_=new B,m=new B;function p(k,W,y){d.fromBufferAttribute(i,k),u.fromBufferAttribute(i,W),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,k),x.fromBufferAttribute(s,W),g.fromBufferAttribute(s,y),u.sub(d),f.sub(d),x.sub(h),g.sub(h);const M=1/(x.x*g.y-g.x*x.y);isFinite(M)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-x.y).multiplyScalar(M),m.copy(f).multiplyScalar(x.x).addScaledVector(u,-g.x).multiplyScalar(M),l[k].add(_),l[W].add(_),l[y].add(_),c[k].add(m),c[W].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,W=b.length;k<W;++k){const y=b[k],M=y.start,H=y.count;for(let j=M,X=M+H;j<X;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const v=new B,S=new B,N=new B,C=new B;function T(k){N.fromBufferAttribute(r,k),C.copy(N);const W=l[k];v.copy(W),v.sub(N.multiplyScalar(N.dot(W))).normalize(),S.crossVectors(C,W);const M=S.dot(c[k])<0?-1:1;a.setXYZW(k,v.x,v.y,v.z,M)}for(let k=0,W=b.length;k<W;++k){const y=b[k],M=y.start,H=y.count;for(let j=M,X=M+H;j<X;j+=3)T(e.getX(j+0)),T(e.getX(j+1)),T(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,x=i.count;h<x;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,l=new B,c=new B,d=new B,u=new B,f=new B;if(e)for(let h=0,x=e.count;h<x;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),d.fromBufferAttribute(i,m),l.add(u),c.add(u),d.add(u),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let h=0,x=n.count;h<x;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(l,c){const d=l.array,u=l.itemSize,f=l.normalized,h=new d.constructor(c.length*u);let x=0,g=0;for(let _=0,m=c.length;_<m;_++){l.isInterleavedBufferAttribute?x=c[_]*l.data.stride+l.offset:x=c[_]*u;for(let p=0;p<u;p++)h[g++]=d[x++]}return new Jn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ei,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],d=e(c,i);n.setAttribute(l,d)}const s=this.morphAttributes;for(const l in s){const c=[],d=s[l];for(let u=0,f=d.length;u<f;u++){const h=d[u],x=e(h,i);c.push(x)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const d=a[l];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const d=i[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],u=[];for(let f=0,h=d.length;f<h;f++){const x=d[f];u.push(x.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const d in r){const u=r[d];this.setAttribute(d,u.clone(n))}const s=e.morphAttributes;for(const d in s){const u=[],f=s[d];for(let h=0,x=f.length;h<x;h++)u.push(f[h].clone(n));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,u=a.length;d<u;d++){const f=a[d];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qp=new mt,cr=new g0,yo=new ic,Zp=new B,So=new B,wo=new B,Mo=new B,rd=new B,Eo=new B,Jp=new B,To=new B;class Kn extends Bt{constructor(e=new Ei,n=new _0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Eo.set(0,0,0);for(let c=0,d=s.length;c<d;c++){const u=l[c],f=s[c];u!==0&&(rd.fromBufferAttribute(f,e),a?Eo.addScaledVector(rd,u):Eo.addScaledVector(rd.sub(n),u))}n.add(Eo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(yo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(yo,Zp)===null||cr.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Qp.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Qp),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,d=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,x=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,x.start),v=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let S=b,N=v;S<N;S+=3){const C=l.getX(S),T=l.getX(S+1),k=l.getX(S+2);r=Co(this,p,e,i,d,u,f,C,T,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,x.start),_=Math.min(l.count,x.start+x.count);for(let m=g,p=_;m<p;m+=3){const b=l.getX(m),v=l.getX(m+1),S=l.getX(m+2);r=Co(this,a,e,i,d,u,f,b,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,x.start),v=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let S=b,N=v;S<N;S+=3){const C=S,T=S+1,k=S+2;r=Co(this,p,e,i,d,u,f,C,T,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,x.start),_=Math.min(c.count,x.start+x.count);for(let m=g,p=_;m<p;m+=3){const b=m,v=m+1,S=m+2;r=Co(this,a,e,i,d,u,f,b,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function h1(t,e,n,i,r,s,a,l){let c;if(e.side===on?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===Ji,l),c===null)return null;To.copy(l),To.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(To);return d<n.near||d>n.far?null:{distance:d,point:To.clone(),object:t}}function Co(t,e,n,i,r,s,a,l,c,d){t.getVertexPosition(l,So),t.getVertexPosition(c,wo),t.getVertexPosition(d,Mo);const u=h1(t,e,n,i,So,wo,Mo,Jp);if(u){const f=new B;En.getBarycoord(Jp,So,wo,Mo,f),r&&(u.uv=En.getInterpolatedAttribute(r,l,c,d,f,new tt)),s&&(u.uv1=En.getInterpolatedAttribute(s,l,c,d,f,new tt)),a&&(u.normal=En.getInterpolatedAttribute(a,l,c,d,f,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:l,b:c,c:d,normal:new B,materialIndex:0};En.getNormal(So,wo,Mo,h.normal),u.face=h,u.barycoord=f}return u}class js extends Ei{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],d=[],u=[],f=[];let h=0,x=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ei(d,3)),this.setAttribute("normal",new ei(u,3)),this.setAttribute("uv",new ei(f,2));function g(_,m,p,b,v,S,N,C,T,k,W){const y=S/T,M=N/k,H=S/2,j=N/2,X=C/2,q=T+1,z=k+1;let K=0,P=0;const $=new B;for(let Z=0;Z<z;Z++){const ee=Z*M-j;for(let fe=0;fe<q;fe++){const Fe=fe*y-H;$[_]=Fe*b,$[m]=ee*v,$[p]=X,d.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=C>0?1:-1,u.push($.x,$.y,$.z),f.push(fe/T),f.push(1-Z/k),K+=1}}for(let Z=0;Z<k;Z++)for(let ee=0;ee<T;ee++){const fe=h+ee+q*Z,Fe=h+ee+q*(Z+1),G=h+(ee+1)+q*(Z+1),te=h+(ee+1)+q*Z;c.push(fe,Fe,te),c.push(Fe,G,te),P+=6}l.addGroup(x,P,W),x+=P,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Ls(t[n]);for(const r in i)e[r]=i[r]}return e}function f1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function w0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const p1={clone:Ls,merge:Xt};var m1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m1,this.fragmentShader=x1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class M0 extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new B,em=new tt,tm=new tt;class Mn extends M0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=eh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eh*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,em,tm),n.subVectors(tm,em)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(nl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,d=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/d,r*=a.width/c,i*=a.height/d}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,Kr=1;class g1 extends Bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Yr,Kr,e,n);r.layers=this.layers,this.add(r);const s=new Mn(Yr,Kr,e,n);s.layers=this.layers,this.add(s);const a=new Mn(Yr,Kr,e,n);a.layers=this.layers,this.add(a);const l=new Mn(Yr,Kr,e,n);l.layers=this.layers,this.add(l);const c=new Mn(Yr,Kr,e,n);c.layers=this.layers,this.add(c);const d=new Mn(Yr,Kr,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const d of n)this.remove(d);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,d,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,d),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,x),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class E0 extends ln{constructor(e,n,i,r,s,a,l,c,d,u){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,i,r,s,a,l,c,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v1 extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new E0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new js(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Yi});s.uniforms.tEquirect.value=n;const a=new Kn(r,s),l=n.minFilter;return n.minFilter===wr&&(n.minFilter=jn),new g1(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const sd=new B,b1=new B,_1=new Be;class mr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sd.subVectors(i,n).cross(b1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_1.getNormalMatrix(e),r=this.coplanarPoint(sd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new ic,No=new B;class cf{constructor(e=new mr,n=new mr,i=new mr,r=new mr,s=new mr,a=new mr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],h=r[7],x=r[8],g=r[9],_=r[10],m=r[11],p=r[12],b=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-s,h-d,m-x,S-p).normalize(),i[1].setComponents(c+s,h+d,m+x,S+p).normalize(),i[2].setComponents(c+a,h+u,m+g,S+b).normalize(),i[3].setComponents(c-a,h-u,m-g,S-b).normalize(),i[4].setComponents(c-l,h-f,m-_,S-v).normalize(),n===mi)i[5].setComponents(c+l,h+f,m+_,S+v).normalize();else if(n===Ll)i[5].setComponents(l,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function T0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function y1(t){const e=new WeakMap;function n(l,c){const d=l.array,u=l.usage,f=d.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,d,u),l.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?x=t.HALF_FLOAT:x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,c,d){const u=c.array,f=c.updateRanges;if(t.bindBuffer(d,l),f.length===0)t.bufferSubData(d,0,u);else{f.sort((x,g)=>x.start-g.start);let h=0;for(let x=1;x<f.length;x++){const g=f[h],_=f[x];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let x=0,g=f.length;x<g;x++){const _=f[x];t.bufferSubData(d,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,n(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,l,c),d.version=l.version}}return{get:r,remove:s,update:a}}class rc extends Ei{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),d=l+1,u=c+1,f=e/l,h=n/c,x=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*h-a;for(let v=0;v<d;v++){const S=v*f-s;g.push(S,-b,0),_.push(0,0,1),m.push(v/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<l;b++){const v=b+d*p,S=b+d*(p+1),N=b+1+d*(p+1),C=b+1+d*p;x.push(v,S,C),x.push(S,N,C)}this.setIndex(x),this.setAttribute("position",new ei(g,3)),this.setAttribute("normal",new ei(_,3)),this.setAttribute("uv",new ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var S1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w1=`#ifdef USE_ALPHAHASH
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
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
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
#endif`,A1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
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
#endif`,R1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I1=`#ifdef USE_IRIDESCENCE
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
#endif`,U1=`#ifdef USE_BUMPMAP
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,W1=`#define PI 3.141592653589793
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
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q1=`vec3 transformedNormal = objectNormal;
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
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",J1=`
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
}`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rw=`#ifdef USE_ENVMAP
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
#endif`,sw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ow=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cw=`#ifdef USE_GRADIENTMAP
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
}`,dw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fw=`uniform bool receiveShadow;
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
#endif`,pw=`#ifdef USE_ENVMAP
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
#endif`,mw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bw=`PhysicalMaterial material;
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
#endif`,_w=`struct PhysicalMaterial {
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
}`,yw=`
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
#endif`,Sw=`#if defined( RE_IndirectDiffuse )
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
#endif`,ww=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ew=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rw=`#if defined( USE_POINTS_UV )
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
#endif`,Pw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bw=`#ifdef USE_MORPHTARGETS
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
#endif`,Fw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gw=`#ifdef USE_NORMALMAP
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
#endif`,Ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aM=`float getShadowMask() {
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
}`,oM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lM=`#ifdef USE_SKINNING
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
#endif`,cM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dM=`#ifdef USE_SKINNING
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
#endif`,uM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mM=`#ifdef USE_TRANSMISSION
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
#endif`,xM=`#ifdef USE_TRANSMISSION
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SM=`uniform sampler2D t2D;
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
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`#include <common>
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
}`,NM=`#if DEPTH_PACKING == 3200
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
}`,AM=`#define DISTANCE
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
}`,kM=`#define DISTANCE
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
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`uniform float scale;
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
}`,LM=`uniform vec3 diffuse;
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
}`,IM=`#include <common>
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
}`,UM=`uniform vec3 diffuse;
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
}`,BM=`#define LAMBERT
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
}`,FM=`#define LAMBERT
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
}`,OM=`#define MATCAP
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
}`,jM=`#define MATCAP
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
}`,zM=`#define NORMAL
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
}`,HM=`#define NORMAL
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
}`,VM=`#define PHONG
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
}`,GM=`#define PHONG
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
}`,WM=`#define STANDARD
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
}`,XM=`#define STANDARD
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
}`,qM=`#define TOON
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
}`,$M=`#define TOON
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
}`,YM=`uniform float size;
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
}`,KM=`uniform vec3 diffuse;
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
}`,QM=`#include <common>
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
}`,ZM=`uniform vec3 color;
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
}`,JM=`uniform float rotation;
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
}`,eE=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:S1,alphahash_pars_fragment:w1,alphamap_fragment:M1,alphamap_pars_fragment:E1,alphatest_fragment:T1,alphatest_pars_fragment:C1,aomap_fragment:N1,aomap_pars_fragment:A1,batching_pars_vertex:k1,batching_vertex:R1,begin_vertex:P1,beginnormal_vertex:D1,bsdfs:L1,iridescence_fragment:I1,bumpmap_pars_fragment:U1,clipping_planes_fragment:B1,clipping_planes_pars_fragment:F1,clipping_planes_pars_vertex:O1,clipping_planes_vertex:j1,color_fragment:z1,color_pars_fragment:H1,color_pars_vertex:V1,color_vertex:G1,common:W1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:q1,displacementmap_pars_vertex:$1,displacementmap_vertex:Y1,emissivemap_fragment:K1,emissivemap_pars_fragment:Q1,colorspace_fragment:Z1,colorspace_pars_fragment:J1,envmap_fragment:ew,envmap_common_pars_fragment:tw,envmap_pars_fragment:nw,envmap_pars_vertex:iw,envmap_physical_pars_fragment:pw,envmap_vertex:rw,fog_vertex:sw,fog_pars_vertex:aw,fog_fragment:ow,fog_pars_fragment:lw,gradientmap_pars_fragment:cw,lightmap_pars_fragment:dw,lights_lambert_fragment:uw,lights_lambert_pars_fragment:hw,lights_pars_begin:fw,lights_toon_fragment:mw,lights_toon_pars_fragment:xw,lights_phong_fragment:gw,lights_phong_pars_fragment:vw,lights_physical_fragment:bw,lights_physical_pars_fragment:_w,lights_fragment_begin:yw,lights_fragment_maps:Sw,lights_fragment_end:ww,logdepthbuf_fragment:Mw,logdepthbuf_pars_fragment:Ew,logdepthbuf_pars_vertex:Tw,logdepthbuf_vertex:Cw,map_fragment:Nw,map_pars_fragment:Aw,map_particle_fragment:kw,map_particle_pars_fragment:Rw,metalnessmap_fragment:Pw,metalnessmap_pars_fragment:Dw,morphinstance_vertex:Lw,morphcolor_vertex:Iw,morphnormal_vertex:Uw,morphtarget_pars_vertex:Bw,morphtarget_vertex:Fw,normal_fragment_begin:Ow,normal_fragment_maps:jw,normal_pars_fragment:zw,normal_pars_vertex:Hw,normal_vertex:Vw,normalmap_pars_fragment:Gw,clearcoat_normal_fragment_begin:Ww,clearcoat_normal_fragment_maps:Xw,clearcoat_pars_fragment:qw,iridescence_pars_fragment:$w,opaque_fragment:Yw,packing:Kw,premultiplied_alpha_fragment:Qw,project_vertex:Zw,dithering_fragment:Jw,dithering_pars_fragment:eM,roughnessmap_fragment:tM,roughnessmap_pars_fragment:nM,shadowmap_pars_fragment:iM,shadowmap_pars_vertex:rM,shadowmap_vertex:sM,shadowmask_pars_fragment:aM,skinbase_vertex:oM,skinning_pars_vertex:lM,skinning_vertex:cM,skinnormal_vertex:dM,specularmap_fragment:uM,specularmap_pars_fragment:hM,tonemapping_fragment:fM,tonemapping_pars_fragment:pM,transmission_fragment:mM,transmission_pars_fragment:xM,uv_pars_fragment:gM,uv_pars_vertex:vM,uv_vertex:bM,worldpos_vertex:_M,background_vert:yM,background_frag:SM,backgroundCube_vert:wM,backgroundCube_frag:MM,cube_vert:EM,cube_frag:TM,depth_vert:CM,depth_frag:NM,distanceRGBA_vert:AM,distanceRGBA_frag:kM,equirect_vert:RM,equirect_frag:PM,linedashed_vert:DM,linedashed_frag:LM,meshbasic_vert:IM,meshbasic_frag:UM,meshlambert_vert:BM,meshlambert_frag:FM,meshmatcap_vert:OM,meshmatcap_frag:jM,meshnormal_vert:zM,meshnormal_frag:HM,meshphong_vert:VM,meshphong_frag:GM,meshphysical_vert:WM,meshphysical_frag:XM,meshtoon_vert:qM,meshtoon_frag:$M,points_vert:YM,points_frag:KM,shadow_vert:QM,shadow_frag:ZM,sprite_vert:JM,sprite_frag:eE},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},$n={basic:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Xt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Xt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Xt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Xt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Xt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Xt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Xt([oe.common,oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Xt([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};$n.physical={uniforms:Xt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ao={r:0,b:0,g:0},ur=new ti,tE=new mt;function nE(t,e,n,i,r,s,a){const l=new qe(0);let c=s===!0?0:1,d,u,f=null,h=0,x=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?n:e).get(v)),v}function _(b){let v=!1;const S=g(b);S===null?p(l,c):S&&S.isColor&&(p(S,1),v=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(b,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===tc)?(u===void 0&&(u=new Kn(new js(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Ls($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ur.copy(v.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tE.makeRotationFromEuler(ur)),u.material.toneMapped=et.getTransfer(S.colorSpace)!==dt,(f!==S||h!==S.version||x!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,x=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(d===void 0&&(d=new Kn(new rc(2,2),new er({name:"BackgroundMaterial",uniforms:Ls($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=S,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=et.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),d.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||x!==t.toneMapping)&&(d.material.needsUpdate=!0,f=S,h=S.version,x=t.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function p(b,v){b.getRGB(Ao,w0(t)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,v,a)}return{getClearColor:function(){return l},setClearColor:function(b,v=1){l.set(b),c=v,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(l,c)},render:_,addToRenderList:m}}function iE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function l(y,M,H,j,X){let q=!1;const z=f(j,H,M);s!==z&&(s=z,d(s.object)),q=x(y,j,H,X),q&&g(y,j,H,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(y,M,H,j),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return t.createVertexArray()}function d(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,M,H){const j=H.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let q=X[M.id];q===void 0&&(q={},X[M.id]=q);let z=q[j];return z===void 0&&(z=h(c()),q[j]=z),z}function h(y){const M=[],H=[],j=[];for(let X=0;X<n;X++)M[X]=0,H[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:H,attributeDivisors:j,object:y,attributes:{},index:null}}function x(y,M,H,j){const X=s.attributes,q=M.attributes;let z=0;const K=H.getAttributes();for(const P in K)if(K[P].location>=0){const Z=X[P];let ee=q[P];if(ee===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),Z===void 0||Z.attribute!==ee||ee&&Z.data!==ee.data)return!0;z++}return s.attributesNum!==z||s.index!==j}function g(y,M,H,j){const X={},q=M.attributes;let z=0;const K=H.getAttributes();for(const P in K)if(K[P].location>=0){let Z=q[P];Z===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const ee={};ee.attribute=Z,Z&&Z.data&&(ee.data=Z.data),X[P]=ee,z++}s.attributes=X,s.attributesNum=z,s.index=j}function _(){const y=s.newAttributes;for(let M=0,H=y.length;M<H;M++)y[M]=0}function m(y){p(y,0)}function p(y,M){const H=s.newAttributes,j=s.enabledAttributes,X=s.attributeDivisors;H[y]=1,j[y]===0&&(t.enableVertexAttribArray(y),j[y]=1),X[y]!==M&&(t.vertexAttribDivisor(y,M),X[y]=M)}function b(){const y=s.newAttributes,M=s.enabledAttributes;for(let H=0,j=M.length;H<j;H++)M[H]!==y[H]&&(t.disableVertexAttribArray(H),M[H]=0)}function v(y,M,H,j,X,q,z){z===!0?t.vertexAttribIPointer(y,M,H,X,q):t.vertexAttribPointer(y,M,H,j,X,q)}function S(y,M,H,j){_();const X=j.attributes,q=H.getAttributes(),z=M.defaultAttributeValues;for(const K in q){const P=q[K];if(P.location>=0){let $=X[K];if($===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const Z=$.normalized,ee=$.itemSize,fe=e.get($);if(fe===void 0)continue;const Fe=fe.buffer,G=fe.type,te=fe.bytesPerElement,de=G===t.INT||G===t.UNSIGNED_INT||$.gpuType===tf;if($.isInterleavedBufferAttribute){const le=$.data,Ce=le.stride,Te=$.offset;if(le.isInstancedInterleavedBuffer){for(let He=0;He<P.locationSize;He++)p(P.location+He,le.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let He=0;He<P.locationSize;He++)m(P.location+He);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let He=0;He<P.locationSize;He++)v(P.location+He,ee/P.locationSize,G,Z,Ce*te,(Te+ee/P.locationSize*He)*te,de)}else{if($.isInstancedBufferAttribute){for(let le=0;le<P.locationSize;le++)p(P.location+le,$.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<P.locationSize;le++)m(P.location+le);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let le=0;le<P.locationSize;le++)v(P.location+le,ee/P.locationSize,G,Z,ee*te,ee/P.locationSize*le*te,de)}}else if(z!==void 0){const Z=z[K];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(P.location,Z);break;case 3:t.vertexAttrib3fv(P.location,Z);break;case 4:t.vertexAttrib4fv(P.location,Z);break;default:t.vertexAttrib1fv(P.location,Z)}}}}b()}function N(){k();for(const y in i){const M=i[y];for(const H in M){const j=M[H];for(const X in j)u(j[X].object),delete j[X];delete M[H]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const H in M){const j=M[H];for(const X in j)u(j[X].object),delete j[X];delete M[H]}delete i[y.id]}function T(y){for(const M in i){const H=i[M];if(H[y.id]===void 0)continue;const j=H[y.id];for(const X in j)u(j[X].object),delete j[X];delete H[y.id]}}function k(){W(),a=!0,s!==r&&(s=r,d(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:k,resetDefaultState:W,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function rE(t,e,n){let i;function r(d){i=d}function s(d,u){t.drawArrays(i,d,u),n.update(u,i,1)}function a(d,u,f){f!==0&&(t.drawArraysInstanced(i,d,u,f),n.update(u,i,f))}function l(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,u,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];n.update(x,i,1)}function c(d,u,f,h){if(f===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<d.length;g++)a(d[g],u[g],h[g]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)n.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function sE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==zn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(T){const k=T===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==wi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==pi&&!k)}function c(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const u=c(d);u!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",u,"instead."),d=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const x=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:x,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:N,maxSamples:C}}function aE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new mr,l=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const x=f.length!==0||h||i!==0||r;return r=h,i=f.length,x},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,x){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):d();else{const b=s?0:i,v=b*4;let S=p.clippingState||null;c.value=S,S=u(g,h,v,x);for(let N=0;N!==v;++N)S[N]=n[N];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function d(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,x,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=x+_*4,b=h.matrixWorldInverse;l.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=x;v!==_;++v,S+=4)a.copy(f[v]).applyMatrix4(b,l),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function oE(t){let e=new WeakMap;function n(a,l){return l===Mu?a.mapping=ks:l===Eu&&(a.mapping=Rs),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===Mu||l===Eu)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const d=new v1(c.height);return d.fromEquirectangularTexture(t,a),e.set(a,d),a.addEventListener("dispose",r),n(d.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class C0 extends M0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,a=s+d*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,nm=[.125,.215,.35,.446,.526,.582],vr=20,ad=new C0,im=new qe;let od=null,ld=0,cd=0,dd=!1;const xr=(1+Math.sqrt(5))/2,Qr=1/xr,rm=[new B(-xr,Qr,0),new B(xr,Qr,0),new B(-Qr,0,xr),new B(Qr,0,xr),new B(0,xr,-Qr),new B(0,xr,Qr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),this._renderer.xr.enabled=dd,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:za,format:zn,colorSpace:rr,depthBuffer:!1},r=am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lE(s)),this._blurMaterial=cE(s,e,n)}return r}_compileMaterial(e){const n=new Kn(this._lodPlanes[0],e);this._renderer.compile(n,ad)}_sceneToCubeUV(e,n,i,r){const l=new Mn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(im),u.toneMapping=Ki,u.autoClear=!1;const x=new _0({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Kn(new js,x);let _=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,_=!0):(x.color.copy(im),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(l.up.set(0,c[p],0),l.lookAt(d[p],0,0)):b===1?(l.up.set(0,0,c[p]),l.lookAt(0,d[p],0)):(l.up.set(0,c[p],0),l.lookAt(0,0,d[p]));const v=this._cubeSize;ko(r,b*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ks||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Kn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;ko(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,ad)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=rm[(r-s-1)%rm.length];this._blur(e,s-1,s,a,l)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,l){const c=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Kn(this._lodPlanes[r],d),h=d.uniforms,x=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*vr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const p=[];let b=0;for(let T=0;T<vr;++T){const k=T/_,W=Math.exp(-k*k/2);p.push(W),T===0?b+=W:T<m&&(b+=2*W)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",l&&(h.poleAxis.value=l);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],N=3*S*(r>v-ds?r-v+ds:0),C=4*(this._cubeSize-S);ko(n,N,C,3*S,2*S),c.setRenderTarget(n),c.render(f,ad)}}function lE(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+nm.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);n.push(l);let c=1/l;a>t-ds?c=nm[a-t+ds-1]:a===0&&(c=0),i.push(c);const d=1/(l-2),u=-d,f=1+d,h=[u,u,f,u,f,f,u,u,f,f,u,f],x=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*x),v=new Float32Array(m*g*x),S=new Float32Array(p*g*x);for(let C=0;C<x;C++){const T=C%3*2/3-1,k=C>2?0:-1,W=[T,k,0,T+2/3,k,0,T+2/3,k+1,0,T,k,0,T+2/3,k+1,0,T,k+1,0];b.set(W,_*g*C),v.set(h,m*g*C);const y=[C,C,C,C,C,C];S.set(y,p*g*C)}const N=new Ei;N.setAttribute("position",new Jn(b,_)),N.setAttribute("uv",new Jn(v,m)),N.setAttribute("faceIndex",new Jn(S,p)),e.push(N),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function am(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cE(t,e,n){const i=new Float32Array(vr),r=new B(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:df(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function om(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function lm(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function df(){return`

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
	`}function dE(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const c=l.mapping,d=c===Mu||c===Eu,u=c===ks||c===Rs;if(d||u){let f=e.get(l);const h=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==h)return n===null&&(n=new sm(t)),f=d?n.fromEquirectangular(l,f):n.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),f.texture;if(f!==void 0)return f.texture;{const x=l.image;return d&&x&&x.height>0||u&&x&&r(x)?(n===null&&(n=new sm(t)),f=d?n.fromEquirectangular(l):n.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),l.addEventListener("dispose",s),f.texture):null}}}return l}function r(l){let c=0;const d=6;for(let u=0;u<d;u++)l[u]!==void 0&&c++;return c===d}function s(l){const c=l.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function uE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&il("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hE(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete r[h.id];const x=s.get(h);x&&(e.remove(x),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function l(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const x=f.morphAttributes;for(const g in x){const _=x[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],t.ARRAY_BUFFER)}}function d(f){const h=[],x=f.index,g=f.attributes.position;let _=0;if(x!==null){const b=x.array;_=x.version;for(let v=0,S=b.length;v<S;v+=3){const N=b[v+0],C=b[v+1],T=b[v+2];h.push(N,C,C,T,T,N)}}else if(g!==void 0){const b=g.array;_=g.version;for(let v=0,S=b.length/3-1;v<S;v+=3){const N=v+0,C=v+1,T=v+2;h.push(N,C,C,T,T,N)}}else return;const m=new(p0(h)?S0:y0)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const x=f.index;x!==null&&h.version<x.version&&d(f)}else d(f);return s.get(f)}return{get:l,update:c,getWireframeAttribute:u}}function fE(t,e,n){let i;function r(h){i=h}let s,a;function l(h){s=h.type,a=h.bytesPerElement}function c(h,x){t.drawElements(i,x,s,h*a),n.update(x,i,1)}function d(h,x,g){g!==0&&(t.drawElementsInstanced(i,x,s,h*a,g),n.update(x,i,g))}function u(h,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=x[p];n.update(m,i,1)}function f(h,x,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)d(h[p]/a,x[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,x,0,s,h,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=x[b];for(let b=0;b<_.length;b++)n.update(p,i,_[b])}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function pE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mE(t,e,n){const i=new WeakMap,r=new _t;function s(a,l,c){const d=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(l);if(h===void 0||h.count!==f){let y=function(){k.dispose(),i.delete(l),l.removeEventListener("dispose",y)};var x=y;h!==void 0&&h.texture.dispose();const g=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],b=l.morphAttributes.normal||[],v=l.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let N=l.attributes.position.count*S,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const T=new Float32Array(N*C*4*f),k=new x0(T,N,C,f);k.type=pi,k.needsUpdate=!0;const W=S*4;for(let M=0;M<f;M++){const H=p[M],j=b[M],X=v[M],q=N*C*4*M;for(let z=0;z<H.count;z++){const K=z*W;g===!0&&(r.fromBufferAttribute(H,z),T[q+K+0]=r.x,T[q+K+1]=r.y,T[q+K+2]=r.z,T[q+K+3]=0),_===!0&&(r.fromBufferAttribute(j,z),T[q+K+4]=r.x,T[q+K+5]=r.y,T[q+K+6]=r.z,T[q+K+7]=0),m===!0&&(r.fromBufferAttribute(X,z),T[q+K+8]=r.x,T[q+K+9]=r.y,T[q+K+10]=r.z,T[q+K+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:k,size:new tt(N,C)},i.set(l,h),l.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<d.length;m++)g+=d[m];const _=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",d)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function xE(t,e,n,i){let r=new WeakMap;function s(c){const d=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return f}function a(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:a}}class N0 extends ln{constructor(e,n,i,r,s,a,l,c,d,u=_s){if(u!==_s&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_s&&(i=Rr),i===void 0&&u===Ds&&(i=Ps),super(null,r,s,a,l,c,u,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:Cn,this.minFilter=c!==void 0?c:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const A0=new ln,cm=new N0(1,1),k0=new x0,R0=new n1,P0=new E0,dm=[],um=[],hm=new Float32Array(16),fm=new Float32Array(9),pm=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=dm[r];if(s===void 0&&(s=new Float32Array(r),dm[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sc(t,e){let n=um[e];n===void 0&&(n=new Int32Array(e),um[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function yE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(At(n,i))return;pm.set(i),t.uniformMatrix2fv(this.addr,!1,pm),kt(n,i)}}function SE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(At(n,i))return;fm.set(i),t.uniformMatrix3fv(this.addr,!1,fm),kt(n,i)}}function wE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(At(n,i))return;hm.set(i),t.uniformMatrix4fv(this.addr,!1,hm),kt(n,i)}}function ME(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function EE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function NE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function PE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(cm.compareFunction=f0,s=cm):s=A0,n.setTexture2D(e||s,r)}function DE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||R0,r)}function LE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||P0,r)}function IE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||k0,r)}function UE(t){switch(t){case 5126:return gE;case 35664:return vE;case 35665:return bE;case 35666:return _E;case 35674:return yE;case 35675:return SE;case 35676:return wE;case 5124:case 35670:return ME;case 35667:case 35671:return EE;case 35668:case 35672:return TE;case 35669:case 35673:return CE;case 5125:return NE;case 36294:return AE;case 36295:return kE;case 36296:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return DE;case 35680:case 36300:case 36308:case 36293:return LE;case 36289:case 36303:case 36311:case 36292:return IE}}function BE(t,e){t.uniform1fv(this.addr,e)}function FE(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function OE(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function jE(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function zE(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HE(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function VE(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function GE(t,e){t.uniform1iv(this.addr,e)}function WE(t,e){t.uniform2iv(this.addr,e)}function XE(t,e){t.uniform3iv(this.addr,e)}function qE(t,e){t.uniform4iv(this.addr,e)}function $E(t,e){t.uniform1uiv(this.addr,e)}function YE(t,e){t.uniform2uiv(this.addr,e)}function KE(t,e){t.uniform3uiv(this.addr,e)}function QE(t,e){t.uniform4uiv(this.addr,e)}function ZE(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||A0,s[a])}function JE(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||R0,s[a])}function e2(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||P0,s[a])}function t2(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||k0,s[a])}function n2(t){switch(t){case 5126:return BE;case 35664:return FE;case 35665:return OE;case 35666:return jE;case 35674:return zE;case 35675:return HE;case 35676:return VE;case 5124:case 35670:return GE;case 35667:case 35671:return WE;case 35668:case 35672:return XE;case 35669:case 35673:return qE;case 5125:return $E;case 36294:return YE;case 36295:return KE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return ZE;case 35679:case 36299:case 36307:return JE;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return t2}}class i2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=UE(n.type)}}class r2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=n2(n.type)}}class s2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function mm(t,e){t.seq.push(e),t.map[e.id]=e}function a2(t,e,n){const i=t.name,r=i.length;for(ud.lastIndex=0;;){const s=ud.exec(i),a=ud.lastIndex;let l=s[1];const c=s[2]==="]",d=s[3];if(c&&(l=l|0),d===void 0||d==="["&&a+2===r){mm(n,d===void 0?new i2(l,t,e):new r2(l,t,e));break}else{let f=n.map[l];f===void 0&&(f=new s2(l),mm(n,f)),n=f}}}class rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);a2(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function xm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const o2=37297;let l2=0;function c2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}function d2(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Dl&&n===Pl?i="LinearDisplayP3ToLinearSRGB":e===Pl&&n===Dl&&(i="LinearSRGBToLinearDisplayP3"),t){case rr:case nc:return[i,"LinearTransferOETF"];case qn:case lf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function gm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+c2(t.getShaderSource(e),a)}else return r}function u2(t,e){const n=d2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function h2(t,e){let n;switch(e){case NS:n="Linear";break;case AS:n="Reinhard";break;case kS:n="Cineon";break;case RS:n="ACESFilmic";break;case DS:n="AgX";break;case LS:n="Neutral";break;case PS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ro=new B;function f2(){et.getLuminanceCoefficients(Ro);const t=Ro.x.toFixed(4),e=Ro.y.toFixed(4),n=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function m2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function x2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function oa(t){return t!==""}function vm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g2=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(t){return t.replace(g2,b2)}const v2=new Map;function b2(t,e){let n=Ue[e];if(n===void 0){const i=v2.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return th(n)}const _2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(t){return t.replace(_2,y2)}function y2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ym(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function S2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===oS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function w2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ks:case Rs:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function E2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case e0:e="ENVMAP_BLENDING_MULTIPLY";break;case TS:e="ENVMAP_BLENDING_MIX";break;case CS:e="ENVMAP_BLENDING_ADD";break}return e}function T2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function C2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=S2(n),d=w2(n),u=M2(n),f=E2(n),h=T2(n),x=p2(n),g=m2(s),_=r.createProgram();let m,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oa).join(`
`),p.length>0&&(p+=`
`)):(m=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),p=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Ki?h2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,u2("linearToOutputTexel",n.outputColorSpace),f2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),a=th(a),a=vm(a,n),a=bm(a,n),l=th(l),l=vm(l,n),l=bm(l,n),a=_m(a),l=_m(l),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=b+m+a,S=b+p+l,N=xm(r,r.VERTEX_SHADER,v),C=xm(r,r.FRAGMENT_SHADER,S);r.attachShader(_,N),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(M){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),j=r.getShaderInfoLog(N).trim(),X=r.getShaderInfoLog(C).trim();let q=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,N,C);else{const K=gm(r,N,"vertex"),P=gm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+H+`
`+K+`
`+P)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(j===""||X==="")&&(z=!1);z&&(M.diagnostics={runnable:q,programLog:H,vertexShader:{log:j,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(N),r.deleteShader(C),k=new rl(r,_),W=x2(r,_)}let k;this.getUniforms=function(){return k===void 0&&T(this),k};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,o2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=l2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=C,this}let N2=0;class A2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new k2(e),n.set(e,i)),i}}class k2{constructor(e){this.id=N2++,this.code=e,this.usedTimes=0}}function R2(t,e,n,i,r,s,a){const l=new v0,c=new A2,d=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,x=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return d.add(y),y===0?"uv":`uv${y}`}function p(y,M,H,j,X){const q=j.fog,z=X.geometry,K=y.isMeshStandardMaterial?j.environment:null,P=(y.isMeshStandardMaterial?n:e).get(y.envMap||K),$=P&&P.mapping===tc?P.image.height:null,Z=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fe=ee!==void 0?ee.length:0;let Fe=0;z.morphAttributes.position!==void 0&&(Fe=1),z.morphAttributes.normal!==void 0&&(Fe=2),z.morphAttributes.color!==void 0&&(Fe=3);let G,te,de,le;if(Z){const Zt=$n[Z];G=Zt.vertexShader,te=Zt.fragmentShader}else G=y.vertexShader,te=y.fragmentShader,c.update(y),de=c.getVertexShaderID(y),le=c.getFragmentShaderID(y);const Ce=t.getRenderTarget(),Te=X.isInstancedMesh===!0,He=X.isBatchedMesh===!0,nt=!!y.map,Ve=!!y.matcap,R=!!P,Wt=!!y.aoMap,Ge=!!y.lightMap,Ye=!!y.bumpMap,Re=!!y.normalMap,ot=!!y.displacementMap,Le=!!y.emissiveMap,A=!!y.metalnessMap,w=!!y.roughnessMap,U=y.anisotropy>0,Q=y.clearcoat>0,ne=y.dispersion>0,Y=y.iridescence>0,Se=y.sheen>0,ce=y.transmission>0,ge=U&&!!y.anisotropyMap,Ke=Q&&!!y.clearcoatMap,re=Q&&!!y.clearcoatNormalMap,ve=Q&&!!y.clearcoatRoughnessMap,Pe=Y&&!!y.iridescenceMap,De=Y&&!!y.iridescenceThicknessMap,be=Se&&!!y.sheenColorMap,We=Se&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,st=!!y.specularColorMap,D=!!y.specularIntensityMap,pe=ce&&!!y.transmissionMap,V=ce&&!!y.thicknessMap,J=!!y.gradientMap,ue=!!y.alphaMap,me=y.alphaTest>0,Xe=!!y.alphaHash,wt=!!y.extensions;let Qt=Ki;y.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Qt=t.toneMapping);const Qe={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:te,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:He,batchingColor:He&&X._colorsTexture!==null,instancing:Te,instancingColor:Te&&X.instanceColor!==null,instancingMorph:Te&&X.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:rr,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:Ve,envMap:R,envMapMode:R&&P.mapping,envMapCubeUVHeight:$,aoMap:Wt,lightMap:Ge,bumpMap:Ye,normalMap:Re,displacementMap:x&&ot,emissiveMap:Le,normalMapObjectSpace:Re&&y.normalMapType===FS,normalMapTangentSpace:Re&&y.normalMapType===h0,metalnessMap:A,roughnessMap:w,anisotropy:U,anisotropyMap:ge,clearcoat:Q,clearcoatMap:Ke,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:ne,iridescence:Y,iridescenceMap:Pe,iridescenceThicknessMap:De,sheen:Se,sheenColorMap:be,sheenRoughnessMap:We,specularMap:Ie,specularColorMap:st,specularIntensityMap:D,transmission:ce,transmissionMap:pe,thicknessMap:V,gradientMap:J,opaque:y.transparent===!1&&y.blending===bs&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:me,alphaHash:Xe,combine:y.combine,mapUv:nt&&m(y.map.channel),aoMapUv:Wt&&m(y.aoMap.channel),lightMapUv:Ge&&m(y.lightMap.channel),bumpMapUv:Ye&&m(y.bumpMap.channel),normalMapUv:Re&&m(y.normalMap.channel),displacementMapUv:ot&&m(y.displacementMap.channel),emissiveMapUv:Le&&m(y.emissiveMap.channel),metalnessMapUv:A&&m(y.metalnessMap.channel),roughnessMapUv:w&&m(y.roughnessMap.channel),anisotropyMapUv:ge&&m(y.anisotropyMap.channel),clearcoatMapUv:Ke&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:We&&m(y.sheenRoughnessMap.channel),specularMapUv:Ie&&m(y.specularMap.channel),specularColorMapUv:st&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:pe&&m(y.transmissionMap.channel),thicknessMapUv:V&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Re||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!z.attributes.uv&&(nt||ue),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qt,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ui,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:wt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&y.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qe.vertexUv1s=d.has(1),Qe.vertexUv2s=d.has(2),Qe.vertexUv3s=d.has(3),d.clear(),Qe}function b(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)M.push(H),M.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),y.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reverseDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.alphaToCoverage&&l.enable(20),y.push(l.mask)}function N(y){const M=_[y.type];let H;if(M){const j=$n[M];H=p1.clone(j.uniforms)}else H=y.uniforms;return H}function C(y,M){let H;for(let j=0,X=u.length;j<X;j++){const q=u[j];if(q.cacheKey===M){H=q,++H.usedTimes;break}}return H===void 0&&(H=new C2(t,M,y,s),u.push(H)),H}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function k(y){c.remove(y)}function W(){c.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:N,acquireProgram:C,releaseProgram:T,releaseShaderCache:k,programs:u,dispose:W}}function P2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function D2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,x,g,_,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:x,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=x,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function l(f,h,x,g,_,m){const p=a(f,h,x,g,_,m);x.transmission>0?i.push(p):x.transparent===!0?r.push(p):n.push(p)}function c(f,h,x,g,_,m){const p=a(f,h,x,g,_,m);x.transmission>0?i.unshift(p):x.transparent===!0?r.unshift(p):n.unshift(p)}function d(f,h){n.length>1&&n.sort(f||D2),i.length>1&&i.sort(h||Sm),r.length>1&&r.sort(h||Sm)}function u(){for(let f=e,h=t.length;f<h;f++){const x=t[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:u,sort:d}}function L2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new wm,t.set(i,[a])):r>=s.length?(a=new wm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function I2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new qe};break;case"SpotLight":n={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function U2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let B2=0;function F2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function O2(t){const e=new I2,n=U2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new B);const r=new B,s=new mt,a=new mt;function l(d){let u=0,f=0,h=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let x=0,g=0,_=0,m=0,p=0,b=0,v=0,S=0,N=0,C=0,T=0;d.sort(F2);for(let W=0,y=d.length;W<y;W++){const M=d[W],H=M.color,j=M.intensity,X=M.distance,q=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=H.r*j,f+=H.g*j,h+=H.b*j;else if(M.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(M.sh.coefficients[z],j);T++}else if(M.isDirectionalLight){const z=e.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const K=M.shadow,P=n.get(M);P.shadowIntensity=K.intensity,P.shadowBias=K.bias,P.shadowNormalBias=K.normalBias,P.shadowRadius=K.radius,P.shadowMapSize=K.mapSize,i.directionalShadow[x]=P,i.directionalShadowMap[x]=q,i.directionalShadowMatrix[x]=M.shadow.matrix,b++}i.directional[x]=z,x++}else if(M.isSpotLight){const z=e.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(H).multiplyScalar(j),z.distance=X,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,i.spot[_]=z;const K=M.shadow;if(M.map&&(i.spotLightMap[N]=M.map,N++,K.updateMatrices(M),M.castShadow&&C++),i.spotLightMatrix[_]=K.matrix,M.castShadow){const P=n.get(M);P.shadowIntensity=K.intensity,P.shadowBias=K.bias,P.shadowNormalBias=K.normalBias,P.shadowRadius=K.radius,P.shadowMapSize=K.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=q,S++}_++}else if(M.isRectAreaLight){const z=e.get(M);z.color.copy(H).multiplyScalar(j),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=z,m++}else if(M.isPointLight){const z=e.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const K=M.shadow,P=n.get(M);P.shadowIntensity=K.intensity,P.shadowBias=K.bias,P.shadowNormalBias=K.normalBias,P.shadowRadius=K.radius,P.shadowMapSize=K.mapSize,P.shadowCameraNear=K.camera.near,P.shadowCameraFar=K.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=M.shadow.matrix,v++}i.point[g]=z,g++}else if(M.isHemisphereLight){const z=e.get(M);z.skyColor.copy(M.color).multiplyScalar(j),z.groundColor.copy(M.groundColor).multiplyScalar(j),i.hemi[p]=z,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const k=i.hash;(k.directionalLength!==x||k.pointLength!==g||k.spotLength!==_||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==b||k.numPointShadows!==v||k.numSpotShadows!==S||k.numSpotMaps!==N||k.numLightProbes!==T)&&(i.directional.length=x,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+N-C,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,k.directionalLength=x,k.pointLength=g,k.spotLength=_,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=b,k.numPointShadows=v,k.numSpotShadows=S,k.numSpotMaps=N,k.numLightProbes=T,i.version=B2++)}function c(d,u){let f=0,h=0,x=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=d.length;p<b;p++){const v=d[p];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),x++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:l,setupView:c,state:i}}function Mm(t){const e=new O2(t),n=[],i=[];function r(u){d.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function l(){e.setup(n)}function c(u){e.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function j2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Mm(t),e.set(r,[l])):s>=a.length?(l=new Mm(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class z2 extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=US,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H2 extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const V2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G2=`uniform sampler2D shadow_pass;
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
}`;function W2(t,e,n){let i=new cf;const r=new tt,s=new tt,a=new _t,l=new z2({depthPacking:BS}),c=new H2,d={},u=n.maxTextureSize,f={[Ji]:on,[on]:Ji,[ui]:ui},h=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:V2,fragmentShader:G2}),x=h.clone();x.defines.HORIZONTAL_PASS=1;const g=new Ei;g.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jv;let p=this.type;this.render=function(C,T,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const W=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Yi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=p!==li&&this.type===li,X=p===li&&this.type!==li;for(let q=0,z=C.length;q<z;q++){const K=C[q],P=K.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const $=P.getFrameExtents();if(r.multiply($),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,P.mapSize.y=s.y)),P.map===null||j===!0||X===!0){const ee=this.type!==li?{minFilter:Cn,magFilter:Cn}:{};P.map!==null&&P.map.dispose(),P.map=new Pr(r.x,r.y,ee),P.map.texture.name=K.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const Z=P.getViewportCount();for(let ee=0;ee<Z;ee++){const fe=P.getViewport(ee);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),H.viewport(a),P.updateMatrices(K,ee),i=P.getFrustum(),S(T,k,P.camera,K,this.type)}P.isPointLightShadow!==!0&&this.type===li&&b(P,k),P.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(W,y,M)};function b(C,T){const k=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,x.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,x.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,k,h,_,null),x.uniforms.shadow_pass.value=C.mapPass.texture,x.uniforms.resolution.value=C.mapSize,x.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,k,x,_,null)}function v(C,T,k,W){let y=null;const M=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(M!==void 0)y=M;else if(y=k.isPointLight===!0?c:l,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=y.uuid,j=T.uuid;let X=d[H];X===void 0&&(X={},d[H]=X);let q=X[j];q===void 0&&(q=y.clone(),X[j]=q,T.addEventListener("dispose",N)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,W===li?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=t.properties.get(y);H.light=k}return y}function S(C,T,k,W,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===li)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const j=e.update(C),X=C.material;if(Array.isArray(X)){const q=j.groups;for(let z=0,K=q.length;z<K;z++){const P=q[z],$=X[P.materialIndex];if($&&$.visible){const Z=v(C,$,W,y);C.onBeforeShadow(t,C,T,k,j,Z,P),t.renderBufferDirect(k,null,j,Z,C,P),C.onAfterShadow(t,C,T,k,j,Z,P)}}}else if(X.visible){const q=v(C,X,W,y);C.onBeforeShadow(t,C,T,k,j,q,null),t.renderBufferDirect(k,null,j,q,C,null),C.onAfterShadow(t,C,T,k,j,q,null)}}const H=C.children;for(let j=0,X=H.length;j<X;j++)S(H[j],T,k,W,y)}function N(C){C.target.removeEventListener("dispose",N);for(const k in d){const W=d[k],y=C.target.uuid;y in W&&(W[y].dispose(),delete W[y])}}}const X2={[gu]:vu,[bu]:Su,[_u]:wu,[As]:yu,[vu]:gu,[Su]:bu,[wu]:_u,[yu]:As};function q2(t){function e(){let D=!1;const pe=new _t;let V=null;const J=new _t(0,0,0,0);return{setMask:function(ue){V!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),V=ue)},setLocked:function(ue){D=ue},setClear:function(ue,me,Xe,wt,Qt){Qt===!0&&(ue*=wt,me*=wt,Xe*=wt),pe.set(ue,me,Xe,wt),J.equals(pe)===!1&&(t.clearColor(ue,me,Xe,wt),J.copy(pe))},reset:function(){D=!1,V=null,J.set(-1,0,0,0)}}}function n(){let D=!1,pe=!1,V=null,J=null,ue=null;return{setReversed:function(me){pe=me},setTest:function(me){me?de(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(me){V!==me&&!D&&(t.depthMask(me),V=me)},setFunc:function(me){if(pe&&(me=X2[me]),J!==me){switch(me){case gu:t.depthFunc(t.NEVER);break;case vu:t.depthFunc(t.ALWAYS);break;case bu:t.depthFunc(t.LESS);break;case As:t.depthFunc(t.LEQUAL);break;case _u:t.depthFunc(t.EQUAL);break;case yu:t.depthFunc(t.GEQUAL);break;case Su:t.depthFunc(t.GREATER);break;case wu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=me}},setLocked:function(me){D=me},setClear:function(me){ue!==me&&(t.clearDepth(me),ue=me)},reset:function(){D=!1,V=null,J=null,ue=null}}}function i(){let D=!1,pe=null,V=null,J=null,ue=null,me=null,Xe=null,wt=null,Qt=null;return{setTest:function(Qe){D||(Qe?de(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Qe){pe!==Qe&&!D&&(t.stencilMask(Qe),pe=Qe)},setFunc:function(Qe,Zt,ni){(V!==Qe||J!==Zt||ue!==ni)&&(t.stencilFunc(Qe,Zt,ni),V=Qe,J=Zt,ue=ni)},setOp:function(Qe,Zt,ni){(me!==Qe||Xe!==Zt||wt!==ni)&&(t.stencilOp(Qe,Zt,ni),me=Qe,Xe=Zt,wt=ni)},setLocked:function(Qe){D=Qe},setClear:function(Qe){Qt!==Qe&&(t.clearStencil(Qe),Qt=Qe)},reset:function(){D=!1,pe=null,V=null,J=null,ue=null,me=null,Xe=null,wt=null,Qt=null}}}const r=new e,s=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,h=[],x=null,g=!1,_=null,m=null,p=null,b=null,v=null,S=null,N=null,C=new qe(0,0,0),T=0,k=!1,W=null,y=null,M=null,H=null,j=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=z>=2);let P=null,$={};const Z=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),fe=new _t().fromArray(Z),Fe=new _t().fromArray(ee);function G(D,pe,V,J){const ue=new Uint8Array(4),me=t.createTexture();t.bindTexture(D,me),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<V;Xe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(pe+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return me}const te={};te[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),de(t.DEPTH_TEST),s.setFunc(As),Ge(!1),Ye(Pp),de(t.CULL_FACE),R(Yi);function de(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function le(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Ce(D,pe){return u[D]!==pe?(t.bindFramebuffer(D,pe),u[D]=pe,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=pe),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Te(D,pe){let V=h,J=!1;if(D){V=f.get(pe),V===void 0&&(V=[],f.set(pe,V));const ue=D.textures;if(V.length!==ue.length||V[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Xe=ue.length;me<Xe;me++)V[me]=t.COLOR_ATTACHMENT0+me;V.length=ue.length,J=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,J=!0);J&&t.drawBuffers(V)}function He(D){return x!==D?(t.useProgram(D),x=D,!0):!1}const nt={[gr]:t.FUNC_ADD,[cS]:t.FUNC_SUBTRACT,[dS]:t.FUNC_REVERSE_SUBTRACT};nt[uS]=t.MIN,nt[hS]=t.MAX;const Ve={[fS]:t.ZERO,[pS]:t.ONE,[mS]:t.SRC_COLOR,[mu]:t.SRC_ALPHA,[yS]:t.SRC_ALPHA_SATURATE,[bS]:t.DST_COLOR,[gS]:t.DST_ALPHA,[xS]:t.ONE_MINUS_SRC_COLOR,[xu]:t.ONE_MINUS_SRC_ALPHA,[_S]:t.ONE_MINUS_DST_COLOR,[vS]:t.ONE_MINUS_DST_ALPHA,[SS]:t.CONSTANT_COLOR,[wS]:t.ONE_MINUS_CONSTANT_COLOR,[MS]:t.CONSTANT_ALPHA,[ES]:t.ONE_MINUS_CONSTANT_ALPHA};function R(D,pe,V,J,ue,me,Xe,wt,Qt,Qe){if(D===Yi){g===!0&&(le(t.BLEND),g=!1);return}if(g===!1&&(de(t.BLEND),g=!0),D!==lS){if(D!==_||Qe!==k){if((m!==gr||v!==gr)&&(t.blendEquation(t.FUNC_ADD),m=gr,v=gr),Qe)switch(D){case bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFunc(t.ONE,t.ONE);break;case Lp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,b=null,S=null,N=null,C.set(0,0,0),T=0,_=D,k=Qe}return}ue=ue||pe,me=me||V,Xe=Xe||J,(pe!==m||ue!==v)&&(t.blendEquationSeparate(nt[pe],nt[ue]),m=pe,v=ue),(V!==p||J!==b||me!==S||Xe!==N)&&(t.blendFuncSeparate(Ve[V],Ve[J],Ve[me],Ve[Xe]),p=V,b=J,S=me,N=Xe),(wt.equals(C)===!1||Qt!==T)&&(t.blendColor(wt.r,wt.g,wt.b,Qt),C.copy(wt),T=Qt),_=D,k=!1}function Wt(D,pe){D.side===ui?le(t.CULL_FACE):de(t.CULL_FACE);let V=D.side===on;pe&&(V=!V),Ge(V),D.blending===bs&&D.transparent===!1?R(Yi):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){W!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),W=D)}function Ye(D){D!==sS?(de(t.CULL_FACE),D!==y&&(D===Pp?t.cullFace(t.BACK):D===aS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),y=D}function Re(D){D!==M&&(q&&t.lineWidth(D),M=D)}function ot(D,pe,V){D?(de(t.POLYGON_OFFSET_FILL),(H!==pe||j!==V)&&(t.polygonOffset(pe,V),H=pe,j=V)):le(t.POLYGON_OFFSET_FILL)}function Le(D){D?de(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function A(D){D===void 0&&(D=t.TEXTURE0+X-1),P!==D&&(t.activeTexture(D),P=D)}function w(D,pe,V){V===void 0&&(P===null?V=t.TEXTURE0+X-1:V=P);let J=$[V];J===void 0&&(J={type:void 0,texture:void 0},$[V]=J),(J.type!==D||J.texture!==pe)&&(P!==V&&(t.activeTexture(V),P=V),t.bindTexture(D,pe||te[D]),J.type=D,J.texture=pe)}function U(){const D=$[P];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){fe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),fe.copy(D))}function be(D){Fe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function We(D,pe){let V=c.get(pe);V===void 0&&(V=new WeakMap,c.set(pe,V));let J=V.get(D);J===void 0&&(J=t.getUniformBlockIndex(pe,D.name),V.set(D,J))}function Ie(D,pe){const J=c.get(pe).get(D);l.get(pe)!==J&&(t.uniformBlockBinding(pe,J,D.__bindingPointIndex),l.set(pe,J))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},P=null,$={},u={},f=new WeakMap,h=[],x=null,g=!1,_=null,m=null,p=null,b=null,v=null,S=null,N=null,C=new qe(0,0,0),T=0,k=!1,W=null,y=null,M=null,H=null,j=null,fe.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:de,disable:le,bindFramebuffer:Ce,drawBuffers:Te,useProgram:He,setBlending:R,setMaterial:Wt,setFlipSided:Ge,setCullFace:Ye,setLineWidth:Re,setPolygonOffset:ot,setScissorTest:Le,activeTexture:A,bindTexture:w,unbindTexture:U,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:ve,texImage3D:Pe,updateUBOMapping:We,uniformBlockBinding:Ie,texStorage2D:Ke,texStorage3D:re,texSubImage2D:Y,texSubImage3D:Se,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:De,viewport:be,reset:st}}function Em(t,e,n,i){const r=$2(i);switch(n){case s0:return t*e;case o0:return t*e;case l0:return t*e*2;case c0:return t*e/r.components*r.byteLength;case sf:return t*e/r.components*r.byteLength;case d0:return t*e*2/r.components*r.byteLength;case af:return t*e*2/r.components*r.byteLength;case a0:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case of:return t*e*4/r.components*r.byteLength;case Qo:case Zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jo:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Au:case Ru:return Math.max(t,16)*Math.max(e,8)/4;case Nu:case ku:return Math.max(t,8)*Math.max(e,8)/2;case Pu:case Du:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Iu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ju:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $u:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tl:case Yu:case Ku:return Math.ceil(t/4)*Math.ceil(e/4)*16;case u0:case Qu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zu:case Ju:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $2(t){switch(t){case wi:case n0:return{byteLength:1,components:1};case Ia:case i0:case za:return{byteLength:2,components:1};case nf:case rf:return{byteLength:2,components:4};case Rr:case tf:case pi:return{byteLength:4,components:1};case r0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Y2(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new tt,u=new WeakMap;let f;const h=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return x?new OffscreenCanvas(A,w):Il("canvas")}function _(A,w,U){let Q=1;const ne=Le(A);if((ne.width>U||ne.height>U)&&(Q=U/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(Q*ne.width),Se=Math.floor(Q*ne.height);f===void 0&&(f=g(Y,Se));const ce=w?g(Y,Se):f;return ce.width=Y,ce.height=Se,ce.getContext("2d").drawImage(A,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Se+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Cn&&A.minFilter!==jn}function p(A){t.generateMipmap(A)}function b(A,w,U,Q,ne=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=w;if(w===t.RED&&(U===t.FLOAT&&(Y=t.R32F),U===t.HALF_FLOAT&&(Y=t.R16F),U===t.UNSIGNED_BYTE&&(Y=t.R8)),w===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.R8UI),U===t.UNSIGNED_SHORT&&(Y=t.R16UI),U===t.UNSIGNED_INT&&(Y=t.R32UI),U===t.BYTE&&(Y=t.R8I),U===t.SHORT&&(Y=t.R16I),U===t.INT&&(Y=t.R32I)),w===t.RG&&(U===t.FLOAT&&(Y=t.RG32F),U===t.HALF_FLOAT&&(Y=t.RG16F),U===t.UNSIGNED_BYTE&&(Y=t.RG8)),w===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.RG8UI),U===t.UNSIGNED_SHORT&&(Y=t.RG16UI),U===t.UNSIGNED_INT&&(Y=t.RG32UI),U===t.BYTE&&(Y=t.RG8I),U===t.SHORT&&(Y=t.RG16I),U===t.INT&&(Y=t.RG32I)),w===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),U===t.UNSIGNED_INT&&(Y=t.RGB32UI),U===t.BYTE&&(Y=t.RGB8I),U===t.SHORT&&(Y=t.RGB16I),U===t.INT&&(Y=t.RGB32I)),w===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),U===t.UNSIGNED_INT&&(Y=t.RGBA32UI),U===t.BYTE&&(Y=t.RGBA8I),U===t.SHORT&&(Y=t.RGBA16I),U===t.INT&&(Y=t.RGBA32I)),w===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),w===t.RGBA){const Se=ne?Rl:et.getTransfer(Q);U===t.FLOAT&&(Y=t.RGBA32F),U===t.HALF_FLOAT&&(Y=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Y=Se===dt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(A,w){let U;return A?w===null||w===Rr||w===Ps?U=t.DEPTH24_STENCIL8:w===pi?U=t.DEPTH32F_STENCIL8:w===Ia&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Rr||w===Ps?U=t.DEPTH_COMPONENT24:w===pi?U=t.DEPTH_COMPONENT32F:w===Ia&&(U=t.DEPTH_COMPONENT16),U}function S(A,w){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Cn&&A.minFilter!==jn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function N(A){const w=A.target;w.removeEventListener("dispose",N),T(w),w.isVideoTexture&&u.delete(w)}function C(A){const w=A.target;w.removeEventListener("dispose",C),W(w)}function T(A){const w=i.get(A);if(w.__webglInit===void 0)return;const U=A.source,Q=h.get(U);if(Q){const ne=Q[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&k(A),Object.keys(Q).length===0&&h.delete(U)}i.remove(A)}function k(A){const w=i.get(A);t.deleteTexture(w.__webglTexture);const U=A.source,Q=h.get(U);delete Q[w.__cacheKey],a.memory.textures--}function W(A){const w=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ne=0;ne<w.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(w.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)t.deleteFramebuffer(w.__webglFramebuffer[Q]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const U=A.textures;for(let Q=0,ne=U.length;Q<ne;Q++){const Y=i.get(U[Q]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(U[Q])}i.remove(A)}let y=0;function M(){y=0}function H(){const A=y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),y+=1,A}function j(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function X(A,w){const U=i.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(U,A,w);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+w)}function q(A,w){const U=i.get(A);if(A.version>0&&U.__version!==A.version){Fe(U,A,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+w)}function z(A,w){const U=i.get(A);if(A.version>0&&U.__version!==A.version){Fe(U,A,w);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+w)}function K(A,w){const U=i.get(A);if(A.version>0&&U.__version!==A.version){G(U,A,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+w)}const P={[Tu]:t.REPEAT,[Sr]:t.CLAMP_TO_EDGE,[Cu]:t.MIRRORED_REPEAT},$={[Cn]:t.NEAREST,[IS]:t.NEAREST_MIPMAP_NEAREST,[uo]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[Bc]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},Z={[OS]:t.NEVER,[WS]:t.ALWAYS,[jS]:t.LESS,[f0]:t.LEQUAL,[zS]:t.EQUAL,[GS]:t.GEQUAL,[HS]:t.GREATER,[VS]:t.NOTEQUAL};function ee(A,w){if(w.type===pi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===jn||w.magFilter===Bc||w.magFilter===uo||w.magFilter===wr||w.minFilter===jn||w.minFilter===Bc||w.minFilter===uo||w.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,P[w.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,P[w.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,P[w.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,$[w.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,$[w.minFilter]),w.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Cn||w.minFilter!==uo&&w.minFilter!==wr||w.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function fe(A,w){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",N));const Q=w.source;let ne=h.get(Q);ne===void 0&&(ne={},h.set(Q,ne));const Y=j(w);if(Y!==A.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ne[Y].usedTimes++;const Se=ne[A.__cacheKey];Se!==void 0&&(ne[A.__cacheKey].usedTimes--,Se.usedTimes===0&&k(w)),A.__cacheKey=Y,A.__webglTexture=ne[Y].texture}return U}function Fe(A,w,U){let Q=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=t.TEXTURE_3D);const ne=fe(A,w),Y=w.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+U);const Se=i.get(Y);if(Y.version!==Se.__version||ne===!0){n.activeTexture(t.TEXTURE0+U);const ce=et.getPrimaries(et.workingColorSpace),ge=w.colorSpace===Fi?null:et.getPrimaries(w.colorSpace),Ke=w.colorSpace===Fi||ce===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let re=_(w.image,!1,r.maxTextureSize);re=ot(w,re);const ve=s.convert(w.format,w.colorSpace),Pe=s.convert(w.type);let De=b(w.internalFormat,ve,Pe,w.colorSpace,w.isVideoTexture);ee(Q,w);let be;const We=w.mipmaps,Ie=w.isVideoTexture!==!0,st=Se.__version===void 0||ne===!0,D=Y.dataReady,pe=S(w,re);if(w.isDepthTexture)De=v(w.format===Ds,w.type),st&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,De,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,ve,Pe,null));else if(w.isDataTexture)if(We.length>0){Ie&&st&&n.texStorage2D(t.TEXTURE_2D,pe,De,We[0].width,We[0].height);for(let V=0,J=We.length;V<J;V++)be=We[V],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,be.width,be.height,ve,Pe,be.data):n.texImage2D(t.TEXTURE_2D,V,De,be.width,be.height,0,ve,Pe,be.data);w.generateMipmaps=!1}else Ie?(st&&n.texStorage2D(t.TEXTURE_2D,pe,De,re.width,re.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ve,Pe,re.data)):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,ve,Pe,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ie&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,De,We[0].width,We[0].height,re.depth);for(let V=0,J=We.length;V<J;V++)if(be=We[V],w.format!==zn)if(ve!==null)if(Ie){if(D)if(w.layerUpdates.size>0){const ue=Em(be.width,be.height,w.format,w.type);for(const me of w.layerUpdates){const Xe=be.data.subarray(me*ue/be.data.BYTES_PER_ELEMENT,(me+1)*ue/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,me,be.width,be.height,1,ve,Xe,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,be.width,be.height,re.depth,ve,be.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,De,be.width,be.height,re.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,be.width,be.height,re.depth,ve,Pe,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,De,be.width,be.height,re.depth,0,ve,Pe,be.data)}else{Ie&&st&&n.texStorage2D(t.TEXTURE_2D,pe,De,We[0].width,We[0].height);for(let V=0,J=We.length;V<J;V++)be=We[V],w.format!==zn?ve!==null?Ie?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,be.width,be.height,ve,be.data):n.compressedTexImage2D(t.TEXTURE_2D,V,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,be.width,be.height,ve,Pe,be.data):n.texImage2D(t.TEXTURE_2D,V,De,be.width,be.height,0,ve,Pe,be.data)}else if(w.isDataArrayTexture)if(Ie){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,De,re.width,re.height,re.depth),D)if(w.layerUpdates.size>0){const V=Em(re.width,re.height,w.format,w.type);for(const J of w.layerUpdates){const ue=re.data.subarray(J*V/re.data.BYTES_PER_ELEMENT,(J+1)*V/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ve,Pe,ue)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Pe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,ve,Pe,re.data);else if(w.isData3DTexture)Ie?(st&&n.texStorage3D(t.TEXTURE_3D,pe,De,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Pe,re.data)):n.texImage3D(t.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,ve,Pe,re.data);else if(w.isFramebufferTexture){if(st)if(Ie)n.texStorage2D(t.TEXTURE_2D,pe,De,re.width,re.height);else{let V=re.width,J=re.height;for(let ue=0;ue<pe;ue++)n.texImage2D(t.TEXTURE_2D,ue,De,V,J,0,ve,Pe,null),V>>=1,J>>=1}}else if(We.length>0){if(Ie&&st){const V=Le(We[0]);n.texStorage2D(t.TEXTURE_2D,pe,De,V.width,V.height)}for(let V=0,J=We.length;V<J;V++)be=We[V],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ve,Pe,be):n.texImage2D(t.TEXTURE_2D,V,De,ve,Pe,be);w.generateMipmaps=!1}else if(Ie){if(st){const V=Le(re);n.texStorage2D(t.TEXTURE_2D,pe,De,V.width,V.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Pe,re)}else n.texImage2D(t.TEXTURE_2D,0,De,ve,Pe,re);m(w)&&p(Q),Se.__version=Y.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function G(A,w,U){if(w.image.length!==6)return;const Q=fe(A,w),ne=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+U);const Y=i.get(ne);if(ne.version!==Y.__version||Q===!0){n.activeTexture(t.TEXTURE0+U);const Se=et.getPrimaries(et.workingColorSpace),ce=w.colorSpace===Fi?null:et.getPrimaries(w.colorSpace),ge=w.colorSpace===Fi||Se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ke=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Ke&&!re?ve[J]=_(w.image[J],!0,r.maxCubemapSize):ve[J]=re?w.image[J].image:w.image[J],ve[J]=ot(w,ve[J]);const Pe=ve[0],De=s.convert(w.format,w.colorSpace),be=s.convert(w.type),We=b(w.internalFormat,De,be,w.colorSpace),Ie=w.isVideoTexture!==!0,st=Y.__version===void 0||Q===!0,D=ne.dataReady;let pe=S(w,Pe);ee(t.TEXTURE_CUBE_MAP,w);let V;if(Ke){Ie&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,We,Pe.width,Pe.height);for(let J=0;J<6;J++){V=ve[J].mipmaps;for(let ue=0;ue<V.length;ue++){const me=V[ue];w.format!==zn?De!==null?Ie?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,me.width,me.height,De,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,We,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,me.width,me.height,De,be,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,We,me.width,me.height,0,De,be,me.data)}}}else{if(V=w.mipmaps,Ie&&st){V.length>0&&pe++;const J=Le(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,We,J.width,J.height)}for(let J=0;J<6;J++)if(re){Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,De,be,ve[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,ve[J].width,ve[J].height,0,De,be,ve[J].data);for(let ue=0;ue<V.length;ue++){const Xe=V[ue].image[J].image;Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Xe.width,Xe.height,De,be,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,We,Xe.width,Xe.height,0,De,be,Xe.data)}}else{Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,be,ve[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,De,be,ve[J]);for(let ue=0;ue<V.length;ue++){const me=V[ue];Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,De,be,me.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,We,De,be,me.image[J])}}}m(w)&&p(t.TEXTURE_CUBE_MAP),Y.__version=ne.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function te(A,w,U,Q,ne,Y){const Se=s.convert(U.format,U.colorSpace),ce=s.convert(U.type),ge=b(U.internalFormat,Se,ce,U.colorSpace);if(!i.get(w).__hasExternalTextures){const re=Math.max(1,w.width>>Y),ve=Math.max(1,w.height>>Y);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Y,ge,re,ve,w.depth,0,Se,ce,null):n.texImage2D(ne,Y,ge,re,ve,0,Se,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ye(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ne,i.get(U).__webglTexture,0,Ge(w)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ne,i.get(U).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(A,w,U){if(t.bindRenderbuffer(t.RENDERBUFFER,A),w.depthBuffer){const Q=w.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,Y=v(w.stencilBuffer,ne),Se=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Ge(w);Ye(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Y,w.width,w.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Y,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Y,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,A)}else{const Q=w.textures;for(let ne=0;ne<Q.length;ne++){const Y=Q[ne],Se=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),ge=b(Y.internalFormat,Se,ce,Y.colorSpace),Ke=Ge(w);U&&Ye(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,ge,w.width,w.height):Ye(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,ge,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ge,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,ne=Ge(w);if(w.depthTexture.format===_s)Ye(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(w.depthTexture.format===Ds)Ye(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ce(A){const w=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=Q}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,A)}else if(U){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=t.createRenderbuffer(),de(w.__webglDepthbuffer[Q],A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),de(w.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(A,w,U){const Q=i.get(A);w!==void 0&&te(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ce(A)}function He(A){const w=A.texture,U=i.get(A),Q=i.get(w);A.addEventListener("dispose",C);const ne=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Se=ne.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=w.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let ge=0;ge<w.mipmaps.length;ge++)U.__webglFramebuffer[ce][ge]=t.createFramebuffer()}else U.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)U.__webglFramebuffer[ce]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ce=0,ge=ne.length;ce<ge;ce++){const Ke=i.get(ne[ce]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&Ye(A)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const ge=ne[ce];U.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Ke=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),ve=b(ge.internalFormat,Ke,re,ge.colorSpace,A.isXRRenderTarget===!0),Pe=Ge(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ve,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),de(U.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ee(t.TEXTURE_CUBE_MAP,w);for(let ce=0;ce<6;ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)te(U.__webglFramebuffer[ce][ge],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else te(U.__webglFramebuffer[ce],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(w)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ce=0,ge=ne.length;ce<ge;ce++){const Ke=ne[ce],re=i.get(Ke);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ee(t.TEXTURE_2D,Ke),te(U.__webglFramebuffer,A,Ke,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Ke)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Q.__webglTexture),ee(ce,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)te(U.__webglFramebuffer[ge],A,w,t.COLOR_ATTACHMENT0,ce,ge);else te(U.__webglFramebuffer,A,w,t.COLOR_ATTACHMENT0,ce,0);m(w)&&p(ce),n.unbindTexture()}A.depthBuffer&&Ce(A)}function nt(A){const w=A.textures;for(let U=0,Q=w.length;U<Q;U++){const ne=w[U];if(m(ne)){const Y=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(ne).__webglTexture;n.bindTexture(Y,Se),p(Y),n.unbindTexture()}}}const Ve=[],R=[];function Wt(A){if(A.samples>0){if(Ye(A)===!1){const w=A.textures,U=A.width,Q=A.height;let ne=t.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(A),ce=w.length>1;if(ce)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Ke=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,U,Q,0,0,U,Q,ne,t.NEAREST),c===!0&&(Ve.length=0,R.length=0,Ve.push(t.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ve.push(Y),R.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,R)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Ke=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const w=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Ge(A){return Math.min(r.maxSamples,A.samples)}function Ye(A){const w=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Re(A){const w=a.render.frame;u.get(A)!==w&&(u.set(A,w),A.update())}function ot(A,w){const U=A.colorSpace,Q=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==rr&&U!==Fi&&(et.getTransfer(U)===dt?(Q!==zn||ne!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),w}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(d.width=A.naturalWidth||A.width,d.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(d.width=A.displayWidth,d.height=A.displayHeight):(d.width=A.width,d.height=A.height),d}this.allocateTextureUnit=H,this.resetTextureUnits=M,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Te,this.setupRenderTarget=He,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ye}function K2(t,e){function n(i,r=Fi){let s;const a=et.getTransfer(r);if(i===wi)return t.UNSIGNED_BYTE;if(i===nf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===r0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===n0)return t.BYTE;if(i===i0)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===tf)return t.INT;if(i===Rr)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===za)return t.HALF_FLOAT;if(i===s0)return t.ALPHA;if(i===a0)return t.RGB;if(i===zn)return t.RGBA;if(i===o0)return t.LUMINANCE;if(i===l0)return t.LUMINANCE_ALPHA;if(i===_s)return t.DEPTH_COMPONENT;if(i===Ds)return t.DEPTH_STENCIL;if(i===c0)return t.RED;if(i===sf)return t.RED_INTEGER;if(i===d0)return t.RG;if(i===af)return t.RG_INTEGER;if(i===of)return t.RGBA_INTEGER;if(i===Qo||i===Zo||i===Jo||i===el)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nu||i===Au||i===ku||i===Ru)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Au)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ku)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pu||i===Du||i===Lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pu||i===Du)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Lu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Iu||i===Uu||i===Bu||i===Fu||i===Ou||i===ju||i===zu||i===Hu||i===Vu||i===Gu||i===Wu||i===Xu||i===qu||i===$u)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Iu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ou)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ju)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$u)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tl||i===Yu||i===Ku)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tl)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ku)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===u0||i===Qu||i===Zu||i===Ju)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===tl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ju)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Q2 extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Po extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z2={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(d,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],h=u.position.distanceTo(f.position),x=.02,g=.005;d.inputState.pinching&&h>x+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&h<=x-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Z2)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Po;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const J2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eT=`
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

}`;class tT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new er({vertexShader:J2,fragmentShader:eT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kn(new rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nT extends Fs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,d=null,u=null,f=null,h=null,x=null,g=null;const _=new tT,m=n.getContextAttributes();let p=null,b=null;const v=[],S=[],N=new tt;let C=null;const T=new Mn;T.layers.enable(1),T.viewport=new _t;const k=new Mn;k.layers.enable(2),k.viewport=new _t;const W=[T,k],y=new Q2;y.layers.enable(1),y.layers.enable(2);let M=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=v[G];return te===void 0&&(te=new hd,v[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=v[G];return te===void 0&&(te=new hd,v[G]=te),te.getGripSpace()},this.getHand=function(G){let te=v[G];return te===void 0&&(te=new hd,v[G]=te),te.getHandSpace()};function j(G){const te=S.indexOf(G.inputSource);if(te===-1)return;const de=v[te];de!==void 0&&(de.update(G.inputSource,G.frame,d||a),de.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",q);for(let G=0;G<v.length;G++){const te=S[G];te!==null&&(S[G]=null,v[G].disconnect(te))}M=null,H=null,_.reset(),e.setRenderTarget(p),x=null,h=null,f=null,r=null,b=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(G){d=G},this.getBaseLayer=function(){return h!==null?h:x},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",X),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Pr(x.framebufferWidth,x.framebufferHeight,{format:zn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,de=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Ds:_s,de=m.stencil?Ps:Rr);const Ce={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Pr(h.textureWidth,h.textureHeight,{format:zn,type:wi,depthTexture:new N0(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),d=null,a=await r.requestReferenceSpace(l),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(G){for(let te=0;te<G.removed.length;te++){const de=G.removed[te],le=S.indexOf(de);le>=0&&(S[le]=null,v[le].disconnect(de))}for(let te=0;te<G.added.length;te++){const de=G.added[te];let le=S.indexOf(de);if(le===-1){for(let Te=0;Te<v.length;Te++)if(Te>=S.length){S.push(de),le=Te;break}else if(S[Te]===null){S[Te]=de,le=Te;break}if(le===-1)break}const Ce=v[le];Ce&&Ce.connect(de)}}const z=new B,K=new B;function P(G,te,de){z.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);const le=z.distanceTo(K),Ce=te.projectionMatrix.elements,Te=de.projectionMatrix.elements,He=Ce[14]/(Ce[10]-1),nt=Ce[14]/(Ce[10]+1),Ve=(Ce[9]+1)/Ce[5],R=(Ce[9]-1)/Ce[5],Wt=(Ce[8]-1)/Ce[0],Ge=(Te[8]+1)/Te[0],Ye=He*Wt,Re=He*Ge,ot=le/(-Wt+Ge),Le=ot*-Wt;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Le),G.translateZ(ot),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ce[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const A=He+ot,w=nt+ot,U=Ye-Le,Q=Re+(le-Le),ne=Ve*nt/w*A,Y=R*nt/w*A;G.projectionMatrix.makePerspective(U,Q,ne,Y,A,w),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function $(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let te=G.near,de=G.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(de=_.depthFar)),y.near=k.near=T.near=te,y.far=k.far=T.far=de,(M!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,H=y.far);const le=G.parent,Ce=y.cameras;$(y,le);for(let Te=0;Te<Ce.length;Te++)$(Ce[Te],le);Ce.length===2?P(y,T,k):y.projectionMatrix.copy(T.projectionMatrix),Z(G,y,le)};function Z(G,te,de){de===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=eh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&x===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ee=null;function fe(G,te){if(u=te.getViewerPose(d||a),g=te,u!==null){const de=u.views;x!==null&&(e.setRenderTargetFramebuffer(b,x.framebuffer),e.setRenderTarget(b));let le=!1;de.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Te=0;Te<de.length;Te++){const He=de[Te];let nt=null;if(x!==null)nt=x.getViewport(He);else{const R=f.getViewSubImage(h,He);nt=R.viewport,Te===0&&(e.setRenderTargetTextures(b,R.colorTexture,h.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(b))}let Ve=W[Te];Ve===void 0&&(Ve=new Mn,Ve.layers.enable(Te),Ve.viewport=new _t,W[Te]=Ve),Ve.matrix.fromArray(He.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(He.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(nt.x,nt.y,nt.width,nt.height),Te===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Ve)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Te=f.getDepthInformation(de[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,r.renderState)}}for(let de=0;de<v.length;de++){const le=S[de],Ce=v[de];le!==null&&Ce!==void 0&&Ce.update(le,te,d||a)}ee&&ee(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Fe=new T0;Fe.setAnimationLoop(fe),this.setAnimationLoop=function(G){ee=G},this.dispose=function(){}}}const hr=new ti,iT=new mt;function rT(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,w0(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&x(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,b,v):p.isSpriteMaterial?d(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),v=b.envMap,S=b.envMapRotation;v&&(m.envMap.value=v,hr.copy(S),hr.x*=-1,hr.y*=-1,hr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),m.envMapRotation.value.setFromMatrix4(iT.makeRotationFromEuler(hr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function x(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sT(t,e,n,i){let r={},s={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){const S=v.program;i.uniformBlockBinding(b,S)}function d(b,v){let S=r[b.id];S===void 0&&(g(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",m));const N=v.program;i.updateUBOMapping(b,N);const C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const v=f();b.__bindingPointIndex=v;const S=t.createBuffer(),N=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,N,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let b=0;b<l;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const v=r[b.id],S=b.uniforms,N=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,T=S.length;C<T;C++){const k=Array.isArray(S[C])?S[C]:[S[C]];for(let W=0,y=k.length;W<y;W++){const M=k[W];if(x(M,C,W,N)===!0){const H=M.__offset,j=Array.isArray(M.value)?M.value:[M.value];let X=0;for(let q=0;q<j.length;q++){const z=j[q],K=_(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,H+X,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(b,v,S,N){const C=b.value,T=v+"_"+S;if(N[T]===void 0)return typeof C=="number"||typeof C=="boolean"?N[T]=C:N[T]=C.clone(),!0;{const k=N[T];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return N[T]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function g(b){const v=b.uniforms;let S=0;const N=16;for(let T=0,k=v.length;T<k;T++){const W=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,M=W.length;y<M;y++){const H=W[y],j=Array.isArray(H.value)?H.value:[H.value];for(let X=0,q=j.length;X<q;X++){const z=j[X],K=_(z),P=S%N,$=P%K.boundary,Z=P+$;S+=$,Z!==0&&N-Z<K.storage&&(S+=N-Z),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=K.storage}}}const C=S%N;return C>0&&(S+=N-C),b.__size=S,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:d,dispose:p}}class aT{constructor(e={}){const{canvas:n=qS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const x=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=Ki,this.toneMappingExposure=1;const v=this;let S=!1,N=0,C=0,T=null,k=-1,W=null;const y=new _t,M=new _t;let H=null;const j=new qe(0);let X=0,q=n.width,z=n.height,K=1,P=null,$=null;const Z=new _t(0,0,q,z),ee=new _t(0,0,q,z);let fe=!1;const Fe=new cf;let G=!1,te=!1;const de=new mt,le=new mt,Ce=new B,Te=new _t,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Ve(){return T===null?K:1}let R=i;function Wt(E,L){return n.getContext(E,L)}try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ef}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",me,!1),R===null){const L="webgl2";if(R=Wt(L,E),R===null)throw Wt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ge,Ye,Re,ot,Le,A,w,U,Q,ne,Y,Se,ce,ge,Ke,re,ve,Pe,De,be,We,Ie,st,D;function pe(){Ge=new uE(R),Ge.init(),Ie=new K2(R,Ge),Ye=new sE(R,Ge,e,Ie),Re=new q2(R),Ye.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),ot=new pE(R),Le=new P2,A=new Y2(R,Ge,Re,Le,Ye,Ie,ot),w=new oE(v),U=new dE(v),Q=new y1(R),st=new iE(R,Q),ne=new hE(R,Q,ot,st),Y=new xE(R,ne,Q,ot),De=new mE(R,Ye,A),re=new aE(Le),Se=new R2(v,w,U,Ge,Ye,st,re),ce=new rT(v,Le),ge=new L2,Ke=new j2(Ge),Pe=new nE(v,w,U,Re,Y,h,c),ve=new W2(v,Y,Ye),D=new sT(R,ot,Ye,Re),be=new rE(R,Ge,ot),We=new fE(R,Ge,ot),ot.programs=Se.programs,v.capabilities=Ye,v.extensions=Ge,v.properties=Le,v.renderLists=ge,v.shadowMap=ve,v.state=Re,v.info=ot}pe();const V=new nT(v,R);this.xr=V,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(q,z,!1))},this.getSize=function(E){return E.set(q,z)},this.setSize=function(E,L,F=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,z=L,n.width=Math.floor(E*K),n.height=Math.floor(L*K),F===!0&&(n.style.width=E+"px",n.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(q*K,z*K).floor()},this.setDrawingBufferSize=function(E,L,F){q=E,z=L,K=F,n.width=Math.floor(E*F),n.height=Math.floor(L*F),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,L,F,O){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,L,F,O),Re.viewport(y.copy(Z).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,L,F,O){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,L,F,O),Re.scissor(M.copy(ee).multiplyScalar(K).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){Re.setScissorTest(fe=E)},this.setOpaqueSort=function(E){P=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,L=!0,F=!0){let O=0;if(E){let I=!1;if(T!==null){const se=T.texture.format;I=se===of||se===af||se===sf}if(I){const se=T.texture.type,he=se===wi||se===Rr||se===Ia||se===Ps||se===nf||se===rf,_e=Pe.getClearColor(),ye=Pe.getClearAlpha(),Ae=_e.r,ke=_e.g,we=_e.b;he?(x[0]=Ae,x[1]=ke,x[2]=we,x[3]=ye,R.clearBufferuiv(R.COLOR,0,x)):(g[0]=Ae,g[1]=ke,g[2]=we,g[3]=ye,R.clearBufferiv(R.COLOR,0,g))}else O|=R.COLOR_BUFFER_BIT}L&&(O|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ge.dispose(),Ke.dispose(),Le.dispose(),w.dispose(),U.dispose(),Y.dispose(),st.dispose(),D.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",ff),V.removeEventListener("sessionend",pf),sr.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=ot.autoReset,L=ve.enabled,F=ve.autoUpdate,O=ve.needsUpdate,I=ve.type;pe(),ot.autoReset=E,ve.enabled=L,ve.autoUpdate=F,ve.needsUpdate=O,ve.type=I}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const L=E.target;L.removeEventListener("dispose",Xe),wt(L)}function wt(E){Qt(E),Le.remove(E)}function Qt(E){const L=Le.get(E).programs;L!==void 0&&(L.forEach(function(F){Se.releaseProgram(F)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,F,O,I,se){L===null&&(L=He);const he=I.isMesh&&I.matrixWorld.determinant()<0,_e=X0(E,L,F,O,I);Re.setMaterial(O,he);let ye=F.index,Ae=1;if(O.wireframe===!0){if(ye=ne.getWireframeAttribute(F),ye===void 0)return;Ae=2}const ke=F.drawRange,we=F.attributes.position;let it=ke.start*Ae,lt=(ke.start+ke.count)*Ae;se!==null&&(it=Math.max(it,se.start*Ae),lt=Math.min(lt,(se.start+se.count)*Ae)),ye!==null?(it=Math.max(it,0),lt=Math.min(lt,ye.count)):we!=null&&(it=Math.max(it,0),lt=Math.min(lt,we.count));const gt=lt-it;if(gt<0||gt===1/0)return;st.setup(I,O,_e,F,ye);let cn,Ze=be;if(ye!==null&&(cn=Q.get(ye),Ze=We,Ze.setIndex(cn)),I.isMesh)O.wireframe===!0?(Re.setLineWidth(O.wireframeLinewidth*Ve()),Ze.setMode(R.LINES)):Ze.setMode(R.TRIANGLES);else if(I.isLine){let Me=O.linewidth;Me===void 0&&(Me=1),Re.setLineWidth(Me*Ve()),I.isLineSegments?Ze.setMode(R.LINES):I.isLineLoop?Ze.setMode(R.LINE_LOOP):Ze.setMode(R.LINE_STRIP)}else I.isPoints?Ze.setMode(R.POINTS):I.isSprite&&Ze.setMode(R.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ze.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ze.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Me=I._multiDrawStarts,Lt=I._multiDrawCounts,Je=I._multiDrawCount,Rn=ye?Q.get(ye).bytesPerElement:1,Ur=Le.get(O).currentProgram.getUniforms();for(let dn=0;dn<Je;dn++)Ur.setValue(R,"_gl_DrawID",dn),Ze.render(Me[dn]/Rn,Lt[dn])}else if(I.isInstancedMesh)Ze.renderInstances(it,gt,I.count);else if(F.isInstancedBufferGeometry){const Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Lt=Math.min(F.instanceCount,Me);Ze.renderInstances(it,gt,Lt)}else Ze.render(it,gt)};function Qe(E,L,F){E.transparent===!0&&E.side===ui&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,Xa(E,L,F),E.side=Ji,E.needsUpdate=!0,Xa(E,L,F),E.side=ui):Xa(E,L,F)}this.compile=function(E,L,F=null){F===null&&(F=E),m=Ke.get(F),m.init(L),b.push(m),F.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),E!==F&&E.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights();const O=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const se=I.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const _e=se[he];Qe(_e,F,I),O.add(_e)}else Qe(se,F,I),O.add(se)}),b.pop(),m=null,O},this.compileAsync=function(E,L,F=null){const O=this.compile(E,L,F);return new Promise(I=>{function se(){if(O.forEach(function(he){Le.get(he).currentProgram.isReady()&&O.delete(he)}),O.size===0){I(E);return}setTimeout(se,10)}Ge.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Zt=null;function ni(E){Zt&&Zt(E)}function ff(){sr.stop()}function pf(){sr.start()}const sr=new T0;sr.setAnimationLoop(ni),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(E){Zt=E,V.setAnimationLoop(E),E===null?sr.stop():sr.start()},V.addEventListener("sessionstart",ff),V.addEventListener("sessionend",pf),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,L,T),m=Ke.get(E,b.length),m.init(L),b.push(m),le.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Fe.setFromProjectionMatrix(le),te=this.localClippingEnabled,G=re.init(this.clippingPlanes,te),_=ge.get(E,p.length),_.init(),p.push(_),V.enabled===!0&&V.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&ac(se,L,-1/0,v.sortObjects)}ac(E,L,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(P,$),nt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,nt&&Pe.addToRenderList(_,E),this.info.render.frame++,G===!0&&re.beginShadows();const F=m.state.shadowsArray;ve.render(F,E,L),G===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,I=_.transmissive;if(m.setupLights(),L.isArrayCamera){const se=L.cameras;if(I.length>0)for(let he=0,_e=se.length;he<_e;he++){const ye=se[he];xf(O,I,E,ye)}nt&&Pe.render(E);for(let he=0,_e=se.length;he<_e;he++){const ye=se[he];mf(_,E,ye,ye.viewport)}}else I.length>0&&xf(O,I,E,L),nt&&Pe.render(E),mf(_,E,L);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,L),st.resetDefaultState(),k=-1,W=null,b.pop(),b.length>0?(m=b[b.length-1],G===!0&&re.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ac(E,L,F,O){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){O&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const he=Y.update(E),_e=E.material;_e.visible&&_.push(E,he,_e,F,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const he=Y.update(E),_e=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Te.copy(he.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(_e)){const ye=he.groups;for(let Ae=0,ke=ye.length;Ae<ke;Ae++){const we=ye[Ae],it=_e[we.materialIndex];it&&it.visible&&_.push(E,he,it,F,Te.z,we)}}else _e.visible&&_.push(E,he,_e,F,Te.z,null)}}const se=E.children;for(let he=0,_e=se.length;he<_e;he++)ac(se[he],L,F,O)}function mf(E,L,F,O){const I=E.opaque,se=E.transmissive,he=E.transparent;m.setupLightsView(F),G===!0&&re.setGlobalState(v.clippingPlanes,F),O&&Re.viewport(y.copy(O)),I.length>0&&Wa(I,L,F),se.length>0&&Wa(se,L,F),he.length>0&&Wa(he,L,F),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function xf(E,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new Pr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?za:wi,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const se=m.state.transmissionRenderTarget[O.id],he=O.viewport||y;se.setSize(he.z,he.w);const _e=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(j),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),nt&&Pe.render(F);const ye=v.toneMapping;v.toneMapping=Ki;const Ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),G===!0&&re.setGlobalState(v.clippingPlanes,O),Wa(E,F,O),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let we=0,it=L.length;we<it;we++){const lt=L[we],gt=lt.object,cn=lt.geometry,Ze=lt.material,Me=lt.group;if(Ze.side===ui&&gt.layers.test(O.layers)){const Lt=Ze.side;Ze.side=on,Ze.needsUpdate=!0,gf(gt,F,O,cn,Ze,Me),Ze.side=Lt,Ze.needsUpdate=!0,ke=!0}}ke===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}v.setRenderTarget(_e),v.setClearColor(j,X),Ae!==void 0&&(O.viewport=Ae),v.toneMapping=ye}function Wa(E,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let I=0,se=E.length;I<se;I++){const he=E[I],_e=he.object,ye=he.geometry,Ae=O===null?he.material:O,ke=he.group;_e.layers.test(F.layers)&&gf(_e,L,F,ye,Ae,ke)}}function gf(E,L,F,O,I,se){E.onBeforeRender(v,L,F,O,I,se),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(v,L,F,O,E,se),I.transparent===!0&&I.side===ui&&I.forceSinglePass===!1?(I.side=on,I.needsUpdate=!0,v.renderBufferDirect(F,L,O,I,E,se),I.side=Ji,I.needsUpdate=!0,v.renderBufferDirect(F,L,O,I,E,se),I.side=ui):v.renderBufferDirect(F,L,O,I,E,se),E.onAfterRender(v,L,F,O,I,se)}function Xa(E,L,F){L.isScene!==!0&&(L=He);const O=Le.get(E),I=m.state.lights,se=m.state.shadowsArray,he=I.state.version,_e=Se.getParameters(E,I.state,se,L,F),ye=Se.getProgramCacheKey(_e);let Ae=O.programs;O.environment=E.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(E.isMeshStandardMaterial?U:w).get(E.envMap||O.environment),O.envMapRotation=O.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",Xe),Ae=new Map,O.programs=Ae);let ke=Ae.get(ye);if(ke!==void 0){if(O.currentProgram===ke&&O.lightsStateVersion===he)return bf(E,_e),ke}else _e.uniforms=Se.getUniforms(E),E.onBeforeCompile(_e,v),ke=Se.acquireProgram(_e,ye),Ae.set(ye,ke),O.uniforms=_e.uniforms;const we=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=re.uniform),bf(E,_e),O.needsLights=$0(E),O.lightsStateVersion=he,O.needsLights&&(we.ambientLightColor.value=I.state.ambient,we.lightProbe.value=I.state.probe,we.directionalLights.value=I.state.directional,we.directionalLightShadows.value=I.state.directionalShadow,we.spotLights.value=I.state.spot,we.spotLightShadows.value=I.state.spotShadow,we.rectAreaLights.value=I.state.rectArea,we.ltc_1.value=I.state.rectAreaLTC1,we.ltc_2.value=I.state.rectAreaLTC2,we.pointLights.value=I.state.point,we.pointLightShadows.value=I.state.pointShadow,we.hemisphereLights.value=I.state.hemi,we.directionalShadowMap.value=I.state.directionalShadowMap,we.directionalShadowMatrix.value=I.state.directionalShadowMatrix,we.spotShadowMap.value=I.state.spotShadowMap,we.spotLightMatrix.value=I.state.spotLightMatrix,we.spotLightMap.value=I.state.spotLightMap,we.pointShadowMap.value=I.state.pointShadowMap,we.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=ke,O.uniformsList=null,ke}function vf(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=rl.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function bf(E,L){const F=Le.get(E);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function X0(E,L,F,O,I){L.isScene!==!0&&(L=He),A.resetTextureUnits();const se=L.fog,he=O.isMeshStandardMaterial?L.environment:null,_e=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:rr,ye=(O.isMeshStandardMaterial?U:w).get(O.envMap||he),Ae=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ke=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),we=!!F.morphAttributes.position,it=!!F.morphAttributes.normal,lt=!!F.morphAttributes.color;let gt=Ki;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gt=v.toneMapping);const cn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ze=cn!==void 0?cn.length:0,Me=Le.get(O),Lt=m.state.lights;if(G===!0&&(te===!0||E!==W)){const _n=E===W&&O.id===k;re.setState(O,E,_n)}let Je=!1;O.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Lt.state.version||Me.outputColorSpace!==_e||I.isBatchedMesh&&Me.batching===!1||!I.isBatchedMesh&&Me.batching===!0||I.isBatchedMesh&&Me.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Me.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Me.instancing===!1||!I.isInstancedMesh&&Me.instancing===!0||I.isSkinnedMesh&&Me.skinning===!1||!I.isSkinnedMesh&&Me.skinning===!0||I.isInstancedMesh&&Me.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Me.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Me.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Me.instancingMorph===!1&&I.morphTexture!==null||Me.envMap!==ye||O.fog===!0&&Me.fog!==se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==re.numPlanes||Me.numIntersection!==re.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==ke||Me.morphTargets!==we||Me.morphNormals!==it||Me.morphColors!==lt||Me.toneMapping!==gt||Me.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Me.__version=O.version);let Rn=Me.currentProgram;Je===!0&&(Rn=Xa(O,L,I));let Ur=!1,dn=!1,oc=!1;const yt=Rn.getUniforms(),Ti=Me.uniforms;if(Re.useProgram(Rn.program)&&(Ur=!0,dn=!0,oc=!0),O.id!==k&&(k=O.id,dn=!0),Ur||W!==E){Ye.reverseDepthBuffer?(de.copy(E.projectionMatrix),YS(de),KS(de),yt.setValue(R,"projectionMatrix",de)):yt.setValue(R,"projectionMatrix",E.projectionMatrix),yt.setValue(R,"viewMatrix",E.matrixWorldInverse);const _n=yt.map.cameraPosition;_n!==void 0&&_n.setValue(R,Ce.setFromMatrixPosition(E.matrixWorld)),Ye.logarithmicDepthBuffer&&yt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&yt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,dn=!0,oc=!0)}if(I.isSkinnedMesh){yt.setOptional(R,I,"bindMatrix"),yt.setOptional(R,I,"bindMatrixInverse");const _n=I.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),yt.setValue(R,"boneTexture",_n.boneTexture,A))}I.isBatchedMesh&&(yt.setOptional(R,I,"batchingTexture"),yt.setValue(R,"batchingTexture",I._matricesTexture,A),yt.setOptional(R,I,"batchingIdTexture"),yt.setValue(R,"batchingIdTexture",I._indirectTexture,A),yt.setOptional(R,I,"batchingColorTexture"),I._colorsTexture!==null&&yt.setValue(R,"batchingColorTexture",I._colorsTexture,A));const lc=F.morphAttributes;if((lc.position!==void 0||lc.normal!==void 0||lc.color!==void 0)&&De.update(I,F,Rn),(dn||Me.receiveShadow!==I.receiveShadow)&&(Me.receiveShadow=I.receiveShadow,yt.setValue(R,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ti.envMap.value=ye,Ti.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(Ti.envMapIntensity.value=L.environmentIntensity),dn&&(yt.setValue(R,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&q0(Ti,oc),se&&O.fog===!0&&ce.refreshFogUniforms(Ti,se),ce.refreshMaterialUniforms(Ti,O,K,z,m.state.transmissionRenderTarget[E.id]),rl.upload(R,vf(Me),Ti,A)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(rl.upload(R,vf(Me),Ti,A),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&yt.setValue(R,"center",I.center),yt.setValue(R,"modelViewMatrix",I.modelViewMatrix),yt.setValue(R,"normalMatrix",I.normalMatrix),yt.setValue(R,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const _n=O.uniformsGroups;for(let cc=0,Y0=_n.length;cc<Y0;cc++){const _f=_n[cc];D.update(_f,Rn),D.bind(_f,Rn)}}return Rn}function q0(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function $0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,L,F){Le.get(E.texture).__webglTexture=L,Le.get(E.depthTexture).__webglTexture=F;const O=Le.get(E);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){const F=Le.get(E);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,F=0){T=E,N=L,C=F;let O=!0,I=null,se=!1,he=!1;if(E){const ye=Le.get(E);if(ye.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(R.FRAMEBUFFER,null),O=!1;else if(ye.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(ye.__hasExternalTextures)A.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(ye.__boundDepthTexture!==we){if(we!==null&&Le.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(he=!0);const ke=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[L])?I=ke[L][F]:I=ke[L],se=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?I=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?I=ke[F]:I=ke,y.copy(E.viewport),M.copy(E.scissor),H=E.scissorTest}else y.copy(Z).multiplyScalar(K).floor(),M.copy(ee).multiplyScalar(K).floor(),H=fe;if(Re.bindFramebuffer(R.FRAMEBUFFER,I)&&O&&Re.drawBuffers(E,I),Re.viewport(y),Re.scissor(M),Re.setScissorTest(H),se){const ye=Le.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,F)}else if(he){const ye=Le.get(E.texture),Ae=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.__webglTexture,F||0,Ae)}k=-1},this.readRenderTargetPixels=function(E,L,F,O,I,se,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Re.bindFramebuffer(R.FRAMEBUFFER,_e);try{const ye=E.texture,Ae=ye.format,ke=ye.type;if(!Ye.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-O&&F>=0&&F<=E.height-I&&R.readPixels(L,F,O,I,Ie.convert(Ae),Ie.convert(ke),se)}finally{const ye=T!==null?Le.get(T).__webglFramebuffer:null;Re.bindFramebuffer(R.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,L,F,O,I,se,he){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){const ye=E.texture,Ae=ye.format,ke=ye.type;if(!Ye.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-O&&F>=0&&F<=E.height-I){Re.bindFramebuffer(R.FRAMEBUFFER,_e);const we=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.bufferData(R.PIXEL_PACK_BUFFER,se.byteLength,R.STREAM_READ),R.readPixels(L,F,O,I,Ie.convert(Ae),Ie.convert(ke),0);const it=T!==null?Le.get(T).__webglFramebuffer:null;Re.bindFramebuffer(R.FRAMEBUFFER,it);const lt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await $S(R,lt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,se),R.deleteBuffer(we),R.deleteSync(lt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,L=null,F=0){E.isTexture!==!0&&(il("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);const O=Math.pow(2,-F),I=Math.floor(E.image.width*O),se=Math.floor(E.image.height*O),he=L!==null?L.x:0,_e=L!==null?L.y:0;A.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,he,_e,I,se),Re.unbindTexture()},this.copyTextureToTexture=function(E,L,F=null,O=null,I=0){E.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1],L=arguments[2],I=arguments[3]||0,F=null);let se,he,_e,ye,Ae,ke;F!==null?(se=F.max.x-F.min.x,he=F.max.y-F.min.y,_e=F.min.x,ye=F.min.y):(se=E.image.width,he=E.image.height,_e=0,ye=0),O!==null?(Ae=O.x,ke=O.y):(Ae=0,ke=0);const we=Ie.convert(L.format),it=Ie.convert(L.type);A.setTexture2D(L,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const lt=R.getParameter(R.UNPACK_ROW_LENGTH),gt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),cn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ze=R.getParameter(R.UNPACK_SKIP_ROWS),Me=R.getParameter(R.UNPACK_SKIP_IMAGES),Lt=E.isCompressedTexture?E.mipmaps[I]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Lt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Lt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_e),R.pixelStorei(R.UNPACK_SKIP_ROWS,ye),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,I,Ae,ke,se,he,we,it,Lt.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,I,Ae,ke,Lt.width,Lt.height,we,Lt.data):R.texSubImage2D(R.TEXTURE_2D,I,Ae,ke,se,he,we,it,Lt),R.pixelStorei(R.UNPACK_ROW_LENGTH,lt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,gt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,cn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Me),I===0&&L.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(E,L,F=null,O=null,I=0){E.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,E=arguments[2],L=arguments[3],I=arguments[4]||0);let se,he,_e,ye,Ae,ke,we,it,lt;const gt=E.isCompressedTexture?E.mipmaps[I]:E.image;F!==null?(se=F.max.x-F.min.x,he=F.max.y-F.min.y,_e=F.max.z-F.min.z,ye=F.min.x,Ae=F.min.y,ke=F.min.z):(se=gt.width,he=gt.height,_e=gt.depth,ye=0,Ae=0,ke=0),O!==null?(we=O.x,it=O.y,lt=O.z):(we=0,it=0,lt=0);const cn=Ie.convert(L.format),Ze=Ie.convert(L.type);let Me;if(L.isData3DTexture)A.setTexture3D(L,0),Me=R.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)A.setTexture2DArray(L,0),Me=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const Lt=R.getParameter(R.UNPACK_ROW_LENGTH),Je=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Rn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ur=R.getParameter(R.UNPACK_SKIP_ROWS),dn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,gt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,gt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ae),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ke),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Me,I,we,it,lt,se,he,_e,cn,Ze,gt.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(Me,I,we,it,lt,se,he,_e,cn,gt.data):R.texSubImage3D(Me,I,we,it,lt,se,he,_e,cn,Ze,gt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Lt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Je),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Rn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ur),R.pixelStorei(R.UNPACK_SKIP_IMAGES,dn),I===0&&L.generateMipmaps&&R.generateMipmap(Me),Re.unbindTexture()},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Re.unbindTexture()},this.resetState=function(){N=0,C=0,T=null,Re.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===lf?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===nc?"display-p3":"srgb"}}class uf{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=n,this.far=i}clone(){return new uf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class oT extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class D0 extends Os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new B,Bl=new B,Tm=new mt,na=new g0,Do=new ic,fd=new B,Cm=new B;class lT extends Bt{constructor(e=new Ei,n=new D0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ul.fromBufferAttribute(n,r-1),Bl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ul.distanceTo(Bl);e.setAttribute("lineDistance",new ei(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;Tm.copy(r).invert(),na.copy(e.ray).applyMatrix4(Tm);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,d=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const x=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=x,m=g-1;_<m;_+=d){const p=u.getX(_),b=u.getX(_+1),v=Lo(this,e,na,c,p,b);v&&n.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(x),p=Lo(this,e,na,c,_,m);p&&n.push(p)}}else{const x=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=x,m=g-1;_<m;_+=d){const p=Lo(this,e,na,c,_,_+1);p&&n.push(p)}if(this.isLineLoop){const _=Lo(this,e,na,c,g-1,x);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Lo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Ul.fromBufferAttribute(a,r),Bl.fromBufferAttribute(a,s),n.distanceSqToSegment(Ul,Bl,fd,Cm)>i)return;fd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(fd);if(!(c<e.near||c>e.far))return{distance:c,point:Cm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Nm=new B,Am=new B;class cT extends lT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Nm.fromBufferAttribute(n,r),Am.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Nm.distanceTo(Am);e.setAttribute("lineDistance",new ei(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Io=new B,Uo=new B,pd=new B,Bo=new En;class dT extends Ei{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(nl*n),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,d=[0,0,0],u=["a","b","c"],f=new Array(3),h={},x=[];for(let g=0;g<c;g+=3){a?(d[0]=a.getX(g),d[1]=a.getX(g+1),d[2]=a.getX(g+2)):(d[0]=g,d[1]=g+1,d[2]=g+2);const{a:_,b:m,c:p}=Bo;if(_.fromBufferAttribute(l,d[0]),m.fromBufferAttribute(l,d[1]),p.fromBufferAttribute(l,d[2]),Bo.getNormal(pd),f[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){const v=(b+1)%3,S=f[b],N=f[v],C=Bo[u[b]],T=Bo[u[v]],k=`${S}_${N}`,W=`${N}_${S}`;W in h&&h[W]?(pd.dot(h[W].normal)<=s&&(x.push(C.x,C.y,C.z),x.push(T.x,T.y,T.z)),h[W]=null):k in h||(h[k]={index0:d[b],index1:d[v],normal:pd.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:m}=h[g];Io.fromBufferAttribute(l,_),Uo.fromBufferAttribute(l,m),x.push(Io.x,Io.y,Io.z),x.push(Uo.x,Uo.y,Uo.z)}this.setAttribute("position",new ei(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class uT extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h0,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class L0 extends Bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const md=new mt,km=new B,Rm=new B;class hT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;km.setFromMatrixPosition(e.matrixWorld),n.position.copy(km),Rm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rm),n.updateMatrixWorld(),md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fT extends hT{constructor(){super(new C0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pm extends L0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new fT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pT extends L0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class mT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Dm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Dm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);const xT=({activeTab:t,onTabChange:e,customImage:n})=>{const[i,r]=ae.useState("send"),s=t??i,a=k=>{r(k),e&&e(k)},[l,c]=ae.useState("phone"),[d,u]=ae.useState("25.00"),[f,h]=ae.useState("idle"),[x,g]=ae.useState(1250),[_,m]=ae.useState(!1),[p,b]=ae.useState(null),[v,S]=ae.useState([{id:"tx-1",type:"receive",title:"Nhận qua SĐT",subtitle:"Từ 0912 ••• 888",amount:"+50.00 USDC",time:"2 phút trước",signature:"5xK8...7mPq",fee:"~0.000005 SOL",status:"Finalized"},{id:"tx-2",type:"send",title:"Chuyển qua QR",subtitle:"Tới dev_merchant.sol",amount:"-15.00 USDC",time:"15 phút trước",signature:"3wP9...2jLk",fee:"~0.000005 SOL",status:"Finalized"},{id:"tx-3",type:"receive",title:"Faucet Devnet",subtitle:"Solana Devnet Airdrop",amount:"+1,000.00 USDC",time:"Hôm qua",signature:"4tNm...8vQq",fee:"0 SOL",status:"Finalized"}]),N=()=>{f==="idle"&&(h("processing"),setTimeout(()=>{const k=parseFloat(d)||25;g(y=>Math.max(0,y-k)),h("confirmed");const W={id:`tx-${Date.now()}`,type:"send",title:l==="phone"?"Chuyển qua SĐT":l==="qr"?"Chuyển qua QR":"Chuyển tới Ví",subtitle:l==="phone"?"Tới 0987 ••• 321":"Tới ned_friend.sol",amount:`-${k.toFixed(2)} USDC`,time:"Vừa xong",signature:`5tNx...${Math.random().toString(36).substring(2,6)}`,fee:"~0.000005 SOL",status:"Confirmed"};S(y=>[W,...y])},1400))},C=()=>{h("idle")},T=()=>{m(!0),setTimeout(()=>m(!1),2e3)};return n?o.jsx("img",{src:n,alt:"N.E.D Wallet App Interface",className:"w-full h-full object-cover rounded-[36px]"}):o.jsxs("div",{className:"w-full h-full bg-brand-warmCream text-brand-inkBlack flex flex-col p-3.5 sm:p-4 pb-2 select-none font-sans overflow-hidden relative",children:[o.jsxs("div",{className:"relative flex items-center justify-between text-[11px] font-extrabold text-stone-700 pb-2 border-b-2 border-brand-inkBlack/15 mb-2.5",children:[o.jsx("span",{className:"w-14 text-left font-black text-xs text-brand-inkBlack",children:"9:41"}),o.jsxs("div",{className:"h-5 px-3 bg-brand-inkBlack rounded-full flex items-center justify-center gap-1.5 shadow-sm border border-stone-800",children:[o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#111] border border-stone-700 flex items-center justify-center",children:o.jsx("span",{className:"w-0.5 h-0.5 rounded-full bg-blue-400"})}),o.jsx("span",{className:"text-[8px] font-black tracking-wider text-brand-lime uppercase",children:"Devnet"}),o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"})]}),o.jsxs("div",{className:"w-14 flex items-center justify-end gap-1.5",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime border border-brand-inkBlack"}),o.jsx("span",{className:"text-[9px] uppercase font-black bg-brand-deepPurple text-brand-offWhite px-1.5 py-0.5 rounded border border-brand-inkBlack shadow-brutal-xs",children:"SOL"})]})]}),o.jsxs("div",{className:"flex items-center justify-between mb-3.5",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-8 h-8 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center font-black text-xs shadow-brutal-xs",children:"N"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-[9px] uppercase tracking-wider font-extrabold text-stone-600",children:"Ví Devnet"}),o.jsx("div",{className:"text-xs font-black text-brand-inkBlack",children:"ned_user.sol"})]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("div",{className:"text-[9px] uppercase tracking-wider font-bold text-stone-500",children:"Số dư"}),o.jsxs("div",{className:"text-xs font-black text-brand-inkBlack",children:[x.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",o.jsx("span",{className:"text-[10px] text-brand-lavender font-extrabold",children:"USDC"})]})]})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-1.5 p-1 bg-white border-2 border-brand-inkBlack rounded-xl mb-3 shadow-brutal-xs",children:[o.jsxs("button",{type:"button",onClick:()=>a("send"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="send"?"bg-brand-lavender text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[o.jsx(Ko,{className:"w-3 h-3"}),o.jsx("span",{children:"Chuyển"})]}),o.jsxs("button",{type:"button",onClick:()=>a("receive"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="receive"?"bg-brand-cyan text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[o.jsx(du,{className:"w-3 h-3"}),o.jsx("span",{children:"Nhận"})]}),o.jsxs("button",{type:"button",onClick:()=>a("track"),className:`py-1.5 rounded-lg text-[10px] font-black flex items-center justify-center gap-1 transition-all ${s==="track"?"bg-brand-lime text-brand-inkBlack border border-brand-inkBlack shadow-brutal-xs":"text-stone-600 hover:bg-stone-100"}`,children:[o.jsx(vs,{className:"w-3 h-3"}),o.jsx("span",{children:"Lịch sử"})]})]}),o.jsxs("div",{className:"flex-1 flex flex-col justify-between overflow-hidden",children:[s==="send"&&o.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn",children:[f==="idle"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-3 shadow-brutal-sm mb-2.5",children:[o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5",children:"Phương thức nhận diện"}),o.jsxs("div",{className:"grid grid-cols-3 gap-1 bg-brand-warmCream p-1 rounded-xl border border-brand-inkBlack mb-2.5",children:[o.jsxs("button",{type:"button",onClick:()=>c("phone"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${l==="phone"?"bg-brand-lavender border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[o.jsx(fu,{className:"w-3 h-3"})," SĐT"]}),o.jsxs("button",{type:"button",onClick:()=>c("qr"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${l==="qr"?"bg-brand-cyan border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[o.jsx(Iv,{className:"w-3 h-3"})," QR"]}),o.jsxs("button",{type:"button",onClick:()=>c("wallet"),className:`py-1 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 border transition-all ${l==="wallet"?"bg-brand-lime border-brand-inkBlack shadow-brutal-xs font-black":"bg-white border-transparent text-stone-600"}`,children:[o.jsx(vs,{className:"w-3 h-3"})," Ví"]})]}),o.jsxs("div",{className:"bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2 mb-2",children:[o.jsx("div",{className:"text-[9px] font-extrabold uppercase text-stone-500",children:l==="phone"?"Người nhận (Số điện thoại)":l==="qr"?"Người nhận (Quét QR)":"Người nhận (Địa chỉ Solana)"}),o.jsx("div",{className:"text-xs font-black text-brand-inkBlack mt-0.5",children:l==="phone"?"0987 ••• 321":l==="qr"?"QR_SCAN_882.sol":"7xWp...9bM2"}),o.jsxs("div",{className:"text-[9px] font-bold text-emerald-700 flex items-center gap-1 mt-0.5",children:[o.jsx(On,{className:"w-2.5 h-2.5"})," Đã kết nối trên Devnet"]})]}),o.jsxs("div",{className:"bg-brand-offWhite border-2 border-brand-inkBlack rounded-xl p-2 text-center",children:[o.jsx("div",{className:"text-[9px] font-bold uppercase text-stone-500",children:"Số lượng chuyển"}),o.jsxs("div",{className:"text-xl font-black text-brand-inkBlack my-0.5",children:[d," ",o.jsx("span",{className:"text-xs font-extrabold text-brand-lavender",children:"USDC"})]}),o.jsx("div",{className:"flex items-center justify-center gap-1.5 mt-1",children:["10.00","25.00","50.00"].map(k=>o.jsx("button",{type:"button",onClick:()=>u(k),className:`px-2 py-0.5 text-[9px] font-black rounded border border-brand-inkBlack transition-all ${d===k?"bg-brand-lime shadow-brutal-xs -translate-y-0.5":"bg-white text-stone-600"}`,children:k},k))})]})]}),o.jsxs("div",{className:"bg-brand-lime border-2 border-brand-inkBlack rounded-xl p-2 shadow-brutal-xs flex items-center gap-2 mb-2",children:[o.jsx(kl,{className:"w-4 h-4 flex-shrink-0 text-brand-inkBlack"}),o.jsx("div",{className:"text-[9px] font-black leading-tight text-brand-inkBlack",children:"Kiểm tra đúng thông tin người nhận trước khi xác thực"})]}),o.jsxs("button",{type:"button",onClick:N,className:"w-full py-2.5 bg-brand-inkBlack text-brand-offWhite font-black text-xs rounded-xl text-center border-2 border-brand-inkBlack shadow-brutal-sm hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer",children:[o.jsx(Ko,{className:"w-3.5 h-3.5 text-brand-lime"}),o.jsx("span",{children:"Xác nhận gửi Devnet USDC"})]})]}),f==="processing"&&o.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-5 shadow-brutal-sm flex-1 flex flex-col items-center justify-center text-center animate-fadeIn",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center mb-3 shadow-brutal-xs",children:o.jsx(Wy,{className:"w-6 h-6 text-brand-inkBlack animate-spin"})}),o.jsx("div",{className:"text-xs font-black text-brand-inkBlack mb-1",children:"Đang phát sóng lên Solana Devnet..."}),o.jsx("div",{className:"text-[10px] text-stone-500 font-bold mb-4",children:"Xác thực chữ ký mã hóa & cập nhật số dư"}),o.jsx("div",{className:"w-full bg-brand-warmCream border-2 border-brand-inkBlack rounded-full h-3 overflow-hidden p-0.5",children:o.jsx("div",{className:"bg-brand-lime h-full rounded-full animate-progress"})})]}),f==="confirmed"&&o.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-4 shadow-brutal-sm flex-1 flex flex-col items-center justify-between text-center animate-slideUp",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center mx-auto mb-2 shadow-brutal-xs animate-pulseGlow",children:o.jsx(Al,{className:"w-7 h-7 text-emerald-900 stroke-[3]"})}),o.jsx("div",{className:"text-sm font-black text-brand-inkBlack mb-0.5",children:"Giao dịch thành công!"}),o.jsxs("div",{className:"text-[10px] font-extrabold text-stone-600 mb-3",children:["Đã chuyển ",d," USDC trên Solana Devnet"]}),o.jsxs("div",{className:"bg-brand-warmCream border border-brand-inkBlack rounded-xl p-2 text-left text-[9px] font-bold space-y-1 mb-3",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Mã giao dịch:"}),o.jsx("span",{className:"font-mono font-bold",children:"5tNx...9aDev"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Thời gian xác thực:"}),o.jsx("span",{className:"text-emerald-700 font-extrabold",children:"0.6 giây"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Phí mạng:"}),o.jsx("span",{children:"~0.000005 SOL"})]})]})]}),o.jsxs("div",{className:"w-full flex gap-2",children:[o.jsxs("button",{type:"button",onClick:C,className:"flex-1 py-2 bg-brand-lavender text-brand-inkBlack font-black text-[11px] rounded-xl border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center gap-1",children:[o.jsx(Ky,{className:"w-3 h-3"}),o.jsx("span",{children:"Thử gửi lại"})]}),o.jsxs("button",{type:"button",onClick:()=>a("track"),className:"flex-1 py-2 bg-brand-lime text-brand-inkBlack font-black text-[11px] rounded-xl border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center gap-1",children:[o.jsx(vs,{className:"w-3 h-3"}),o.jsx("span",{children:"Xem lịch sử"})]})]})]})]}),s==="receive"&&o.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn",children:[o.jsxs("div",{className:"w-full bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 shadow-brutal-sm text-center flex flex-col items-center",children:[o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5",children:"Mã QR Nhận Stablecoin"}),o.jsxs("div",{className:"w-32 h-32 sm:w-36 sm:h-36 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl p-2.5 flex flex-col items-center justify-center relative shadow-brutal-xs my-1 overflow-hidden",children:[o.jsx("div",{className:"absolute left-0 right-0 h-1 bg-brand-cyan border-y border-brand-inkBlack shadow-[0_0_8px_#08CEE3] animate-scanLaser z-10 pointer-events-none"}),o.jsxs("div",{className:"grid grid-cols-6 gap-1 w-full h-full p-1 bg-white rounded-lg border border-brand-inkBlack",children:[o.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),o.jsx("div",{className:"bg-brand-lavender rounded"}),o.jsx("div",{className:"bg-brand-cyan rounded"}),o.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),o.jsx("div",{className:"bg-brand-lime rounded"}),o.jsx("div",{className:"bg-brand-inkBlack col-span-4 rounded"}),o.jsx("div",{className:"bg-brand-lavender rounded"}),o.jsx("div",{className:"bg-brand-cyan rounded"}),o.jsx("div",{className:"bg-brand-inkBlack col-span-2 row-span-2 rounded"}),o.jsx("div",{className:"bg-brand-lime rounded"}),o.jsx("div",{className:"bg-brand-inkBlack rounded"}),o.jsx("div",{className:"bg-brand-lavender rounded"})]}),o.jsx("div",{className:"absolute w-6 h-6 rounded-lg bg-brand-deepPurple text-white flex items-center justify-center text-[9px] font-black border border-brand-inkBlack shadow-brutal-xs",children:"N"})]}),o.jsx("div",{className:"text-xs font-black mt-1",children:"ned_user.sol"}),o.jsx("div",{className:"text-[10px] font-bold text-stone-600",children:"SĐT liên kết: 0987 ••• 321"})]}),o.jsx("div",{className:"w-full bg-brand-paleYellow border-2 border-brand-inkBlack rounded-xl p-2 text-center text-[9px] font-black shadow-brutal-xs my-2",children:"Chấp nhận USDC trên mạng thử nghiệm Solana Devnet"}),o.jsx("button",{type:"button",onClick:T,className:`w-full py-2.5 rounded-xl font-black text-xs text-center border-2 border-brand-inkBlack shadow-brutal-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${_?"bg-brand-lime text-brand-inkBlack":"bg-brand-cyan text-brand-inkBlack"}`,children:_?o.jsxs(o.Fragment,{children:[o.jsx(Al,{className:"w-3.5 h-3.5 text-emerald-800"}),o.jsx("span",{children:"Đã sao chép ned_user.sol!"})]}):o.jsxs(o.Fragment,{children:[o.jsx(_v,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Sao chép mã nhận tiền"})]})})]}),s==="track"&&o.jsxs("div",{className:"flex-1 flex flex-col justify-between animate-fadeIn relative",children:[o.jsxs("div",{className:"bg-white border-2 border-brand-inkBlack rounded-2xl p-2.5 shadow-brutal-xs mb-2",children:[o.jsx("div",{className:"text-[9px] font-black uppercase text-stone-500",children:"Tổng số dư Devnet"}),o.jsxs("div",{className:"text-lg font-black text-brand-inkBlack my-0.5",children:[x.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",o.jsx("span",{className:"text-xs font-extrabold text-brand-lavender",children:"USDC"})]})]}),o.jsxs("div",{className:"flex-1 flex flex-col gap-1.5 overflow-y-auto pr-0.5 mb-2",children:[o.jsx("div",{className:"text-[9px] font-black uppercase tracking-wider text-stone-500",children:"Giao dịch gần đây (Bấm để xem chi tiết)"}),v.map(k=>o.jsxs("button",{type:"button",onClick:()=>b(k),className:"w-full text-left bg-brand-offWhite hover:bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-2 flex items-center justify-between shadow-brutal-xs transition-transform active:scale-[0.98] cursor-pointer",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:`w-7 h-7 rounded-lg border border-brand-inkBlack flex items-center justify-center ${k.type==="receive"?"bg-brand-lime":"bg-brand-lavender"}`,children:k.type==="receive"?o.jsx(du,{className:"w-3.5 h-3.5"}):o.jsx(Ko,{className:"w-3.5 h-3.5"})}),o.jsxs("div",{children:[o.jsx("div",{className:"text-[10px] font-black",children:k.title}),o.jsx("div",{className:"text-[8px] text-stone-500 font-bold",children:k.time})]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("div",{className:`text-[11px] font-black ${k.type==="receive"?"text-emerald-700":"text-brand-inkBlack"}`,children:k.amount}),o.jsxs("div",{className:"text-[8px] text-stone-500 font-bold flex items-center justify-end gap-0.5",children:[o.jsx("span",{children:"Devnet"}),o.jsx(cv,{className:"w-2.5 h-2.5 text-stone-400"})]})]})]},k.id))]}),p&&o.jsxs("div",{className:"absolute inset-0 bg-white border-2 border-brand-inkBlack rounded-2xl p-3.5 flex flex-col justify-between shadow-brutal animate-slideUp z-20",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-brand-inkBlack/20 mb-2",children:[o.jsx("span",{className:"text-[10px] font-black uppercase text-stone-500",children:"Biên lai Devnet"}),o.jsx("button",{type:"button",onClick:()=>b(null),className:"p-1 rounded-md bg-stone-100 hover:bg-stone-200 border border-brand-inkBlack",children:o.jsx(Jh,{className:"w-3.5 h-3.5"})})]}),o.jsxs("div",{className:"text-center my-2",children:[o.jsx("div",{className:"text-base font-black",children:p.amount}),o.jsx("div",{className:"text-[10px] font-bold text-stone-600",children:p.title})]}),o.jsxs("div",{className:"space-y-1.5 text-[9px] font-bold bg-brand-warmCream p-2 rounded-xl border border-brand-inkBlack",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Chữ ký (Tx):"}),o.jsx("span",{className:"font-mono",children:p.signature})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Mạng:"}),o.jsx("span",{children:"Solana Devnet"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Trạng thái:"}),o.jsx("span",{className:"text-emerald-700 font-extrabold",children:p.status})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Phí mạng:"}),o.jsx("span",{children:p.fee})]})]})]}),o.jsx("button",{type:"button",onClick:()=>b(null),className:"w-full py-1.5 bg-brand-lavender text-brand-inkBlack font-black text-[10px] rounded-lg border border-brand-inkBlack shadow-brutal-xs",children:"Đóng biên lai"})]}),o.jsx("div",{className:"text-center text-[9px] font-bold text-stone-500 pt-1 border-t border-brand-inkBlack/15",children:"Giao dịch mô phỏng Devnet thời gian thực"})]})]}),o.jsx("div",{className:"pt-2 flex justify-center items-center pointer-events-none",children:o.jsx("div",{className:"w-28 h-1 bg-brand-inkBlack/30 rounded-full"})})]})},gT=({children:t,className:e="",maxTiltX:n=16,maxTiltY:i=20})=>{const r=ae.useRef(null),s=ae.useRef(null),a=ae.useRef(null);return ae.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let c=0,d=0,u=0,f=0,h=0,x=0,g=0,_=0,m=!1,p,b;const v=C=>{if(!s.current)return;m=!0,clearTimeout(p);const T=s.current.getBoundingClientRect(),k=T.left+T.width/2,W=T.top+T.height/2,y=Math.max(-1.5,Math.min(1.5,(C.clientX-k)/(window.innerWidth/2))),M=Math.max(-1.5,Math.min(1.5,(C.clientY-W)/(window.innerHeight/2)));d=y*i,c=-M*n,u=y*8,f=M*6,p=window.setTimeout(()=>{m=!1},2500)};window.addEventListener("mousemove",v,{passive:!0});let S=0;const N=()=>{if(b=requestAnimationFrame(N),S+=.02,!m){const C=Math.sin(S*1.2)*4,T=Math.cos(S*.9)*6;c=C,d=T,u=Math.sin(S*.8)*3,f=Math.cos(S*1.1)*4}if(h+=(c-h)*.08,x+=(d-x)*.08,g+=(u-g)*.08,_+=(f-_)*.08,s.current){s.current.style.transform=`
          perspective(1200px)
          translate3d(${g.toFixed(2)}px, ${_.toFixed(2)}px, 0px)
          rotateX(${h.toFixed(2)}deg)
          rotateY(${x.toFixed(2)}deg)
        `;const C=(g*-.6).toFixed(1),T=(26+_*.5).toFixed(1);s.current.style.boxShadow=`
          ${C}px ${T}px 32px -4px rgba(0, 0, 0, 0.7),
          0px 8px 16px -2px rgba(0, 0, 0, 0.4)
        `}if(a.current){const C=(-g*1.5).toFixed(1),T=(1+Math.abs(x)*.015).toFixed(2),k=(1-Math.abs(h)*.02).toFixed(2),W=Math.max(.3,Math.min(.7,.55-_*.02)).toFixed(2);a.current.style.transform=`
          translateX(${C}px)
          scale(${T}, ${k})
        `,a.current.style.opacity=W}};return N(),()=>{window.removeEventListener("mousemove",v),clearTimeout(p),cancelAnimationFrame(b)}},[n,i]),o.jsxs("div",{ref:r,className:`relative flex items-center justify-center [perspective:1200px] ${e}`,children:[o.jsx("div",{ref:a,className:"absolute -bottom-8 w-[82%] h-12 bg-black/60 rounded-[100%] blur-2xl pointer-events-none transition-transform duration-75 will-change-transform z-0","aria-hidden":"true"}),o.jsx("div",{ref:s,className:"relative w-full h-full will-change-transform [transform-style:preserve-3d] transition-[shadow] duration-75 rounded-[48px] z-10",children:t})]})},vT=()=>{const{t}=bn(),e=ae.useRef(null),n=ae.useRef(null),[i,r]=ae.useState(!0),[s,a]=ae.useState("sim"),[l,c]=ae.useState(0),d=[{id:"home",label:"Trang chủ",title:"Ví N.E.D - Màn hình chính",src:Ee.screenshots.dashboardHome},{id:"transfer",label:"Chuyển tiền",title:"Trung tâm chuyển tiền",src:Ee.screenshots.transferCenter},{id:"lucky",label:"Tung đồng xu",title:"Phòng Lì Xì Tung Đồng Xu",src:Ee.screenshots.luckyCoin},{id:"split",label:"Shake & Split",title:"Lắc chia tiền",src:Ee.screenshots.shakeSplit}];ae.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(!1);return}const x=n.current;if(!x)return;let g,_,m,p;const b=[],v=[],S=[];try{g=new oT;const N=x.clientWidth||window.innerWidth,C=x.clientHeight||750;_=new Mn(45,N/C,.1,100),_.position.set(0,0,16),m=new aT({alpha:!0,antialias:!0,powerPreference:"high-performance"}),m.setSize(N,C),m.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),x.appendChild(m.domElement),g.fog=new uf(919077,12,32);const T=new pT(16777215,1.6);g.add(T);const k=new Pm(11835376,1.8);k.position.set(10,15,10),g.add(k);const W=new Pm(577251,1.3);W.position.set(-10,-10,8),g.add(W);const y=[11835376,14024448,577251,16774054,2956116,15789021],M=new D0({color:1118481,transparent:!0,opacity:.65});S.push(M);const H=65;for(let ee=0;ee<H;ee++){const fe=.5+Math.random()*.75,Fe=.5+Math.random()*.75,G=.5+Math.random()*.75,te=new js(fe,Fe,G);v.push(te);const de=y[ee%y.length],le=new uT({color:de,roughness:.4,metalness:.08,transparent:!0,opacity:.72});S.push(le);const Ce=new Kn(te,le),Te=new dT(te);v.push(Te);const He=new cT(Te,M);Ce.add(He);const Ve=-16+ee/H*32+(Math.random()-.5)*4,R=-7+Math.random()*14,Wt=-6+Math.random()*10;Ce.position.set(Ve,R,Wt),Ce.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),g.add(Ce),b.push({mesh:Ce,rotSpeedX:(Math.random()-.5)*.014,rotSpeedY:(Math.random()-.5)*.016,rotSpeedZ:(Math.random()-.5)*.012,floatSpeed:.7+Math.random()*1.3,floatAmplitude:.25+Math.random()*.45,initialY:R})}let j=0,X=0,q=0,z=0;const K=ee=>{j=ee.clientX/window.innerWidth*2-1,X=-(ee.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",K);const P=()=>{if(!x)return;const ee=x.clientWidth,fe=x.clientHeight;_.aspect=ee/fe,_.updateProjectionMatrix(),m.setSize(ee,fe)};window.addEventListener("resize",P);const $=new mT,Z=()=>{p=requestAnimationFrame(Z);const ee=$.getElapsedTime();q+=(j*.8-q)*.04,z+=(X*.5-z)*.04,_.position.x=q,_.position.y=z,_.lookAt(0,0,0),b.forEach(fe=>{fe.mesh.rotation.x+=fe.rotSpeedX,fe.mesh.rotation.y+=fe.rotSpeedY,fe.mesh.rotation.z+=fe.rotSpeedZ,fe.mesh.position.y=fe.initialY+Math.sin(ee*fe.floatSpeed)*fe.floatAmplitude}),m.render(g,_)};return Z(),()=>{cancelAnimationFrame(p),window.removeEventListener("mousemove",K),window.removeEventListener("resize",P),x.contains(m.domElement)&&x.removeChild(m.domElement),m.dispose(),v.forEach(ee=>ee.dispose()),S.forEach(ee=>ee.dispose())}}catch{r(!1)}},[]);const u=h=>{h.preventDefault(),window.dispatchEvent(new CustomEvent("open-demo-guide"))},f=h=>{h.preventDefault();const x=document.querySelector("#experience");x&&x.scrollIntoView({behavior:"smooth",block:"start"})};return o.jsxs("section",{ref:e,className:"relative w-full min-h-[720px] bg-brand-deepPurple text-brand-offWhite pt-10 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack overflow-hidden flex items-center",children:[i&&o.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden","aria-hidden":"true"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-brand-deepPurple/80 via-brand-deepPurple/40 to-transparent pointer-events-none z-0","aria-hidden":"true"}),o.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none z-0",style:{backgroundImage:`
            linear-gradient(to right, #B497F0 1px, transparent 1px),
            linear-gradient(to bottom, #B497F0 1px, transparent 1px)
          `,backgroundSize:"48px 48px"}}),o.jsxs("div",{className:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10",children:[o.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start text-left",children:[o.jsx(Oe,{animation:"fade-up",delay:40,children:o.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-offWhite mb-5 shadow-brutal-xs",children:[o.jsx("img",{src:Ee.mascots.waving,alt:"NED Teddy",className:"w-7 h-7 object-contain flex-shrink-0 -my-1"}),o.jsx("span",{className:"text-xs font-black tracking-wide text-brand-lavender",children:"N.E.D Teddy"}),o.jsx("span",{className:"text-stone-400 text-xs",children:"•"}),o.jsx("span",{className:"text-xs font-bold text-stone-200",children:t.mascot.heroCompanion})]})}),o.jsx(Oe,{animation:"fade-up",delay:80,children:o.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-offWhite tracking-tight leading-[1.08] mb-6 whitespace-pre-line",children:t.hero.headline})}),o.jsx(Oe,{animation:"fade-up",delay:160,children:o.jsx("p",{className:"text-base sm:text-lg lg:text-xl text-stone-300 font-medium max-w-2xl leading-relaxed mb-8",children:t.hero.description})}),o.jsx(Oe,{animation:"fade-up",delay:240,children:o.jsxs("div",{className:"w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4",children:[o.jsxs("button",{type:"button",onClick:u,className:"btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer",children:[o.jsx("span",{children:t.hero.ctaPrimary}),o.jsx(yi,{className:"w-5 h-5"})]}),o.jsxs("button",{type:"button",onClick:f,className:"btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer",children:[o.jsx("span",{children:t.hero.ctaSecondary}),o.jsx(cv,{className:"w-5 h-5"})]})]})}),o.jsx(Oe,{animation:"fade-up",delay:320,className:"w-full",children:o.jsxs("div",{className:"mt-10 pt-6 border-t-2 border-brand-lavender/20 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs font-bold text-stone-300",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Si,{className:"w-4 h-4 text-brand-lime flex-shrink-0"}),o.jsx("span",{children:t.hero.trustPill1})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Hv,{className:"w-4 h-4 text-brand-cyan flex-shrink-0"}),o.jsx("span",{children:t.hero.trustPill2})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Hy,{className:"w-4 h-4 text-brand-lavender flex-shrink-0"}),o.jsx("span",{children:t.hero.trustPill3})]})]})})]}),o.jsx("div",{className:"lg:col-span-5 flex flex-col items-center justify-center relative",children:o.jsxs(Oe,{animation:"pop",delay:180,children:[o.jsxs("div",{className:"absolute bottom-24 -right-6 sm:-right-12 z-40 flex flex-col items-center gap-1.5 pointer-events-none animate-floatBob",children:[o.jsx("div",{className:"bg-brand-paleYellow text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl px-3 py-1.5 shadow-brutal-xs text-xs font-black flex items-center gap-1 whitespace-nowrap",children:o.jsx("span",{children:"Chào bạn! Mình là Teddy 💜"})}),o.jsx("img",{src:Ee.mascots.waving,alt:"NED Teddy Waving Mascot",className:"w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]",loading:"eager"})]}),o.jsx(gT,{className:"w-[310px] xs:w-[330px] sm:w-[350px] h-[640px] sm:h-[670px]",children:o.jsxs("div",{className:"relative w-full h-full rounded-[48px] bg-brand-inkBlack border-4 border-brand-inkBlack p-2.5 sm:p-3 [transform-style:preserve-3d] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]",children:[o.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center bg-brand-inkBlack/90 border border-brand-lavender/30 rounded-full p-0.5 shadow-brutal-xs",children:[o.jsx("button",{type:"button",onClick:()=>a("sim"),className:`px-2.5 py-0.5 rounded-full text-[10px] font-black transition-all cursor-pointer ${s==="sim"?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs":"text-stone-300 hover:text-white"}`,children:"Bấm thử (Sim)"}),o.jsx("button",{type:"button",onClick:()=>a("real"),className:`px-2.5 py-0.5 rounded-full text-[10px] font-black transition-all cursor-pointer ${s==="real"?"bg-brand-cyan text-brand-inkBlack shadow-brutal-xs":"text-stone-300 hover:text-white"}`,children:"Giao diện thật"})]}),o.jsx("div",{className:"relative w-full h-full rounded-[36px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream",children:s==="sim"?o.jsx(xT,{activeTab:"send"}):o.jsxs("div",{className:"w-full h-full flex flex-col justify-between bg-[#0e0625] text-white pt-10 select-none",children:[o.jsx("div",{className:"relative flex-1 overflow-hidden",children:o.jsx("img",{src:d[l].src,alt:d[l].title,className:"w-full h-full object-cover object-top"})}),o.jsx("div",{className:"p-2.5 bg-brand-inkBlack/95 border-t-2 border-brand-inkBlack flex items-center justify-between gap-1 z-20",children:d.map((h,x)=>o.jsx("button",{type:"button",onClick:()=>c(x),className:`flex-1 py-1 px-1 rounded-lg text-[9px] font-black border transition-all truncate cursor-pointer ${l===x?"bg-brand-lavender text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs":"bg-brand-darkSurface text-stone-300 border-stone-700 hover:bg-stone-800"}`,children:h.label},h.id))})]})}),o.jsx("div",{className:"absolute -top-3.5 right-2 sm:right-4 pointer-events-none z-30 [transform:translateZ(28px)]",children:o.jsxs("div",{className:"bg-brand-lime text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3 sm:px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5 animate-floatBob",children:[o.jsx(Si,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Solana Devnet"})]})}),o.jsx("div",{className:"absolute -bottom-3.5 left-2 sm:left-4 pointer-events-none z-30 [transform:translateZ(28px)]",children:o.jsx("div",{className:"bg-brand-cyan text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3 sm:px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5",children:o.jsx("span",{children:s==="sim"?"Bấm trực tiếp để thử nghiệm":"Màn hình ứng dụng thực tế"})})})]})})]})})]})]})},bT=()=>{const{t}=bn(),e=ae.useRef(null),[n,i]=ae.useState(!1),r=ae.useRef(0),s=ae.useRef(0),a=[{id:"northaxis",name:"NorthAxis",logoSrc:"/partners/northaxis.png",tag:"Partner"},{id:"unihackfest",name:"UniHackfest",logoSrc:"/partners/unihackfest.png",tag:"Hackathon"},{id:"vanlang",name:"Van Lang University",logoSrc:"/partners/vanlang.png",tag:"Academic"},{id:"solana",name:"Solana Devnet",isCustomSvg:!0,tag:"Blockchain"},{id:"expo",name:"Expo Mobile",isCustomSvg:!0,tag:"Platform"}],l=[...a,...a,...a,...a,...a,...a];ae.useEffect(()=>{let g=0,_=0,m;const p=()=>{g=window.scrollY*1.15+s.current};window.addEventListener("scroll",p,{passive:!0}),g=window.scrollY*1.15+s.current,_=g;const b=()=>{if(m=requestAnimationFrame(b),_+=(g-_)*.08,e.current){const v=e.current.scrollWidth,S=v>0?v/6:1350,N=(_%S+S)%S;e.current.style.transform=`translate3d(${-N.toFixed(2)}px, 0px, 0px)`}};return b(),()=>{window.removeEventListener("scroll",p),cancelAnimationFrame(m)}},[]);const c=g=>{i(!0),r.current=g.clientX},d=g=>{if(!n)return;const _=g.clientX-r.current;s.current-=_*1.8,r.current=g.clientX},u=()=>{i(!1)},f=g=>{i(!0),r.current=g.touches[0].clientX},h=g=>{if(!n)return;const _=g.touches[0].clientX-r.current;s.current-=_*1.8,r.current=g.touches[0].clientX},x=()=>{i(!1)};return o.jsxs("section",{className:"relative w-full bg-brand-lime text-brand-inkBlack py-7 sm:py-9 border-b-4 border-brand-inkBlack overflow-hidden z-20 select-none",children:[o.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none",style:{backgroundImage:`repeating-linear-gradient(
            -45deg,
            #111111,
            #111111 12px,
            transparent 12px,
            transparent 24px
          )`}}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4",children:o.jsx(Oe,{animation:"fade-up",delay:0,children:o.jsx("div",{className:"flex items-center justify-start",children:o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-inkBlack text-brand-offWhite font-black text-xs uppercase tracking-wider shadow-brutal-xs",children:[o.jsx(Si,{className:"w-3.5 h-3.5 text-brand-lime animate-spin",style:{animationDuration:"6s"}}),o.jsx("span",{children:t.marquee.tag})]})})})}),o.jsx(Oe,{animation:"pop",delay:100,children:o.jsx("div",{className:"relative w-full overflow-hidden py-2 cursor-grab active:cursor-grabbing",onMouseDown:c,onMouseMove:d,onMouseUp:u,onMouseLeave:u,onTouchStart:f,onTouchMove:h,onTouchEnd:x,children:o.jsx("div",{ref:e,className:"flex items-center gap-4 sm:gap-6 will-change-transform",style:{width:"max-content"},children:l.map((g,_)=>o.jsx("div",{className:"bg-white border-3 border-brand-inkBlack rounded-2xl px-6 py-3 shadow-brutal flex items-center justify-center gap-3 min-w-[220px] sm:min-w-[260px] h-[80px] sm:h-[88px] transition-all hover:-translate-y-1 hover:shadow-brutal-lg select-none group flex-shrink-0",children:g.logoSrc?o.jsx("div",{className:"w-full h-full flex items-center justify-center",children:o.jsx("img",{src:g.logoSrc,alt:g.name,className:"max-h-11 sm:max-h-13 max-w-[180px] sm:max-w-[210px] object-contain transition-transform group-hover:scale-105 pointer-events-none",loading:"lazy"})}):g.id==="solana"?o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-deepPurple text-white flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-5 h-5 text-brand-cyan",children:[o.jsx("path",{d:"M4.5 17.5H16.5L19.5 14.5H7.5L4.5 17.5Z",fill:"currentColor"}),o.jsx("path",{d:"M4.5 6.5H16.5L19.5 9.5H7.5L4.5 6.5Z",fill:"currentColor"}),o.jsx("path",{d:"M7.5 10.5H19.5L16.5 13.5H4.5L7.5 10.5Z",fill:"currentColor"})]})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack leading-tight",children:"SOLANA"}),o.jsx("div",{className:"text-[10px] font-extrabold text-stone-500 uppercase",children:"Devnet Network"})]})]}):o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx("span",{className:"text-sm font-black",children:"E"})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack leading-tight",children:"EXPO"}),o.jsx("div",{className:"text-[10px] font-extrabold text-stone-500 uppercase",children:"Mobile Preview"})]})]})},`${g.id}-${_}`))})})})]})},_T=()=>{const{t,lang:e}=bn(),n=[{id:"receive",title:t.coreActions.receiveTitle,subtitle:e==="vi"?"SĐT, QR Code & Lì Xì":"Phone, QR Code & Lucky Coin",desc:e==="vi"?"Nhận USDC/SOL tức thì qua số điện thoại cá nhân, mã QR tĩnh hoặc tham gia phòng nhận Lì Xì may mắn on-chain.":"Instantly receive USDC/SOL via your phone number, static QR code, or join on-chain lucky coin giveaway rooms.",icon:du,colorBg:"bg-brand-lavender",iconColor:"text-brand-inkBlack",mascot:Ee.mascots.happy,mascotAlt:"Teddy Happy",stepNum:"01",tag:e==="vi"?"Nhận tức thì":"Instant Receive"},{id:"send",title:t.coreActions.sendTitle,subtitle:"Gasless & Shake to Split",desc:e==="vi"?"Chuyển tiền miễn phí Gas qua N.E.D Relayer. Trải nghiệm tính năng Shake & Split: Lắc máy chia đều hóa đơn nhóm trong 3 giây.":"Gas-free transfers powered by N.E.D Relayer. Experience Shake & Split: Shake devices to split bills in 3 seconds.",icon:Ko,colorBg:"bg-brand-lime",iconColor:"text-brand-inkBlack",mascot:Ee.mascots.exciting,mascotAlt:"Teddy Exciting",stepNum:"02",tag:e==="vi"?"Miễn phí Gas":"Zero Gas"},{id:"track",title:t.coreActions.trackTitle,subtitle:e==="vi"?"Quản lý dòng tiền":"Cashflow Analytics",desc:e==="vi"?"Theo dõi số dư USDC thời gian thực, trực quan hóa biểu đồ thu vào / chi tiêu và thiết lập hạn mức ngân sách tháng thông minh.":"Real-time USDC balance tracking, visual monthly cashflow charts, and intelligent spending budget limits.",icon:Yy,colorBg:"bg-brand-cyan",iconColor:"text-brand-inkBlack",mascot:Ee.mascots.proud,mascotAlt:"Teddy Proud",stepNum:"03",tag:e==="vi"?"Minh bạch 100%":"100% Transparent"}];return o.jsx("section",{id:"experience",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs(Oe,{animation:"fade-up",delay:0,children:[o.jsxs("div",{className:"flex items-center justify-between mb-8 pb-4 border-b-2 border-brand-inkBlack/15",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase tracking-wider shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime border border-brand-inkBlack"}),o.jsx("span",{children:t.coreActions.badge})]}),o.jsx("div",{className:"text-xs font-bold text-stone-600 hidden sm:block",children:t.coreActions.headline})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",children:n.map(i=>{const r=i.icon;return o.jsxs("div",{className:"bg-white border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between relative overflow-hidden group",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-5",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:`w-12 h-12 rounded-2xl ${i.colorBg} border-2 border-brand-inkBlack flex items-center justify-center shadow-brutal-xs flex-shrink-0`,children:o.jsx(r,{className:`w-6 h-6 ${i.iconColor} stroke-[2.5]`})}),o.jsxs("div",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-100 border border-brand-inkBlack text-[10px] font-black uppercase text-stone-700",children:[o.jsx(Si,{className:"w-3 h-3 text-brand-deepPurple"}),o.jsx("span",{children:i.tag})]})]}),o.jsx("div",{className:"w-12 h-12 rounded-full bg-brand-warmCream border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform",children:o.jsx("img",{src:i.mascot,alt:i.mascotAlt,className:"w-10 h-10 object-contain"})})]}),o.jsxs("div",{className:"mb-2",children:[o.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-brand-inkBlack tracking-tight",children:i.title}),o.jsx("div",{className:"text-xs font-extrabold uppercase text-brand-deepPurple tracking-wider mt-0.5",children:i.subtitle})]}),o.jsx("p",{className:"text-sm sm:text-base font-medium text-stone-700 leading-relaxed mt-3",children:i.desc})]}),o.jsxs("div",{className:"mt-6 pt-4 border-t border-brand-inkBlack/10 flex items-center justify-between text-xs font-black text-stone-500",children:[o.jsxs("span",{className:"uppercase tracking-wider",children:["Bước ",i.stepNum]}),o.jsx("span",{className:"text-[11px] text-brand-inkBlack font-bold",children:"N.E.D Ecosystem"})]})]},i.id)})})]})})})},yT=()=>{const{t,lang:e}=bn(),[n,i]=ae.useState("real"),[r,s]=ae.useState("shake"),[a,l]=ae.useState(1),[c,d]=ae.useState("phone"),[u,f]=ae.useState("25.00"),h={shake:{title:e==="vi"?"Lắc Điện Thoại Chia Tiền (Shake & Split)":"Shake & Split",desc:e==="vi"?"Lắc máy cùng bạn bè xung quanh để tự động nhận diện và chia đều hóa đơn on-chain.":"Shake phones together to automatically detect nearby devices and split group bills on-chain.",src:Ee.screenshots.shakeSplit,badge:"Chỉ có trên N.E.D"},coin:{title:e==="vi"?"Phòng Lì Xì Tung Đồng Xu":"Lucky Coin Room",desc:e==="vi"?"Khởi tạo phòng chơi, vuốt tung đồng xu may mắn để chọn người nhận SOL/USDC trực tiếp on-chain.":"Create a room and swipe up to flip a lucky coin on-chain for giveaways and gifts.",src:Ee.screenshots.luckyCoin,badge:"Độc quyền Solana"},phone:{title:e==="vi"?"Chuyển Tiền Bằng Số Điện Thoại":"Send by Phone Number",desc:e==="vi"?"Chuyển SOL/USDC trực tiếp tới người nhận qua số điện thoại liên kết, không cần nhớ địa chỉ ví dài.":"Transfer SOL/USDC directly using linked phone numbers without needing long public keys.",src:Ee.screenshots.transferPhone,badge:"Nhanh 1-Chạm"},hub:{title:e==="vi"?"Trung Tâm Chuyển Tiền":"Transfer Hub",desc:e==="vi"?"Toàn bộ các phương thức chuyển và tương tác nhóm được sắp xếp gọn gàng trong một màn hình.":"All transfer and group interactive methods neatly organized on a single screen.",src:Ee.screenshots.transferCenter,badge:"Tổng hợp"}},x={phone:{label:"0987 ••• 321",note:"Số điện thoại trong danh bạ"},qr:{label:"merchant_coffee.sol",note:"Mã QR quét tại điểm nhận"},wallet:{label:"7xWp...9bM2",note:"Địa chỉ ví Solana Devnet"}};return o.jsx("section",{id:"send",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center",children:[o.jsx("div",{className:"lg:col-span-5 flex flex-col items-start",children:o.jsxs(Oe,{animation:"fade-up",delay:0,children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-inkBlack"}),o.jsx("span",{children:t.sendFeature.tag})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight leading-[1.1] mb-5",children:t.sendFeature.headline}),o.jsx("p",{className:"text-base sm:text-lg font-medium text-stone-700 leading-relaxed mb-6",children:t.sendFeature.description}),o.jsxs("div",{className:"space-y-3 w-full max-w-md mb-6",children:[o.jsxs("div",{onClick:()=>{i("real"),s("phone")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="phone"?"bg-brand-lavender/30 -translate-y-0.5":"hover:bg-stone-50"}`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:o.jsx(fu,{className:"w-4 h-4 text-brand-inkBlack"})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Chuyển Tiền Bằng Số Điện Thoại"}),o.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Chuyển SOL/USDC qua SĐT liên kết"})]})]}),o.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-lime border border-brand-inkBlack rounded-md",children:"1-Chạm"})]}),o.jsxs("div",{onClick:()=>{i("real"),s("shake")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="shake"?"bg-brand-cyan/30 -translate-y-0.5":"hover:bg-stone-50"}`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:o.jsx(Gv,{className:"w-4 h-4 text-brand-inkBlack"})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Lắc Điện Thoại Chia Tiền (Shake & Split)"}),o.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Lắc máy nhận diện bạn bè trong 20m"})]})]}),o.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-cyan border border-brand-inkBlack rounded-md",children:"Hot"})]}),o.jsxs("div",{onClick:()=>{i("real"),s("coin")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="coin"?"bg-brand-lime/30 -translate-y-0.5":"hover:bg-stone-50"}`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:o.jsx(zy,{className:"w-4 h-4 text-brand-inkBlack"})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Phòng Lì Xì Tung Đồng Xu"}),o.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Tung đồng xu may mắn trực tiếp on-chain"})]})]}),o.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-paleYellow border border-brand-inkBlack rounded-md",children:"May mắn"})]}),o.jsxs("div",{onClick:()=>{i("real"),s("hub")},className:`p-3.5 bg-white border-2 border-brand-inkBlack rounded-2xl flex items-center justify-between gap-3 shadow-brutal-xs cursor-pointer transition-all ${n==="real"&&r==="hub"?"bg-brand-paleYellow/50 -translate-y-0.5":"hover:bg-stone-50"}`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-brand-paleYellow border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0",children:o.jsx(vs,{className:"w-4 h-4 text-brand-inkBlack"})}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-sm font-black text-brand-inkBlack",children:"Trung Tâm Chuyển Tiền Tổng Hợp"}),o.jsx("div",{className:"text-xs text-stone-600 font-medium",children:"Tổng quan mọi phương thức chuyển"})]})]}),o.jsx("span",{className:"text-[10px] font-black uppercase px-2 py-0.5 bg-brand-lavender border border-brand-inkBlack rounded-md",children:"Hub"})]})]}),o.jsxs("div",{className:"p-3.5 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal flex items-center gap-3.5 max-w-md",children:[o.jsx("img",{src:Ee.mascots.exciting,alt:"Teddy Mascot Exciting",className:"w-14 h-14 object-contain flex-shrink-0 animate-bounce",style:{animationDuration:"2.5s"}}),o.jsxs("div",{children:[o.jsx("div",{className:"text-[11px] font-black uppercase text-brand-deepPurple tracking-wider",children:"Gợi ý từ NED Teddy"}),o.jsx("p",{className:"text-xs font-bold text-stone-800 leading-snug mt-0.5",children:t.sendFeature.mascotBubble})]})]})]})}),o.jsx("div",{className:"lg:col-span-7",children:o.jsx(Oe,{animation:"pop",delay:120,children:o.jsxs("div",{className:"bg-white border-4 border-brand-inkBlack rounded-3xl p-5 sm:p-7 shadow-brutal-xl",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-brand-inkBlack",children:[o.jsxs("div",{className:"inline-flex items-center bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs",children:[o.jsx("button",{type:"button",onClick:()=>i("real"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all cursor-pointer ${n==="real"?"bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs":"text-stone-700 hover:bg-stone-200"}`,children:"Màn hình ứng dụng thực tế"}),o.jsx("button",{type:"button",onClick:()=>i("interactive"),className:`px-3 py-1 text-xs font-black rounded-lg transition-all cursor-pointer ${n==="interactive"?"bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs":"text-stone-700 hover:bg-stone-200"}`,children:"Mô phỏng thao tác"})]}),o.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lime border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase shadow-brutal-xs",children:[o.jsx(Si,{className:"w-3.5 h-3.5 text-brand-inkBlack"}),o.jsx("span",{children:"Solana Devnet"})]})]}),n==="real"&&o.jsxs("div",{className:"animate-appearance-smooth",children:[o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5",children:["shake","coin","phone","hub"].map(g=>o.jsx("button",{type:"button",onClick:()=>s(g),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack transition-all cursor-pointer text-center truncate ${r===g?"bg-brand-lavender text-brand-inkBlack shadow-brutal-xs -translate-y-0.5":"bg-brand-warmCream text-stone-700 hover:bg-stone-200"}`,children:t.sendFeature.showcaseTabs[g]},g))}),o.jsx("div",{className:"bg-brand-warmCream/60 border-3 border-brand-inkBlack rounded-2xl p-4 sm:p-5",children:o.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6",children:[o.jsx("div",{className:"w-[200px] xs:w-[220px] sm:w-[240px] flex-shrink-0 bg-brand-inkBlack border-3 border-brand-inkBlack rounded-[32px] p-2 shadow-brutal",children:o.jsx("div",{className:"w-full rounded-[24px] overflow-hidden border border-brand-inkBlack bg-white",children:o.jsx("img",{src:h[r].src,alt:h[r].title,className:"w-full h-auto object-contain max-h-[460px]",loading:"lazy"})})}),o.jsxs("div",{className:"flex-1 flex flex-col justify-between py-2 text-left",children:[o.jsxs("div",{children:[o.jsx("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-paleYellow border border-brand-inkBlack rounded-lg text-[11px] font-black uppercase text-stone-800 mb-2.5 shadow-brutal-xs",children:o.jsx("span",{children:h[r].badge})}),o.jsx("h3",{className:"text-xl sm:text-2xl font-black text-brand-inkBlack mb-2 leading-tight",children:h[r].title}),o.jsx("p",{className:"text-sm font-medium text-stone-700 leading-relaxed mb-4",children:h[r].desc}),o.jsxs("div",{className:"p-3 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-bold text-stone-700 shadow-brutal-xs",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1 text-brand-deepPurple font-black",children:[o.jsx(kl,{className:"w-4 h-4"}),o.jsx("span",{children:"Bảo mật & Miễn phí phí Gas"})]}),o.jsx("p",{className:"text-[11px] text-stone-600",children:"Mọi giao dịch chia tiền và lì xì đều được thực thi bảo mật trên Solana, tài trợ 100% phí Gas qua N.E.D Relayer."})]})]}),o.jsxs("div",{className:"mt-5 pt-3 border-t border-brand-inkBlack/15 flex items-center justify-between text-[11px] font-black text-stone-500",children:[o.jsx("span",{children:"Ảnh ứng dụng gốc từ Expo"}),o.jsx("span",{className:"text-emerald-700",children:"✓ Đang hoạt động trên Devnet"})]})]})]})})]}),n==="interactive"&&o.jsxs("div",{className:"animate-appearance-smooth",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-brand-inkBlack/15",children:[o.jsx("span",{className:"text-xs font-black uppercase text-stone-500",children:"Thử nghiệm luồng chuyển"}),o.jsx("div",{className:"flex items-center gap-1.5",children:[1,2,3].map(g=>o.jsxs("button",{type:"button",onClick:()=>l(g),className:`px-3 py-1 rounded-lg text-xs font-black border-2 border-brand-inkBlack transition-all cursor-pointer ${a===g?"bg-brand-inkBlack text-brand-offWhite shadow-brutal-xs -translate-y-0.5":"bg-brand-warmCream text-stone-700 hover:bg-stone-200"}`,children:["Bước ",g]},g))})]}),a===1&&o.jsxs("div",{className:"animate-appearance-smooth",children:[o.jsx("div",{className:"text-xs font-black uppercase text-stone-500 mb-2",children:t.sendFeature.step1Name}),o.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[o.jsxs("button",{type:"button",onClick:()=>d("phone"),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${c==="phone"?"bg-brand-lavender text-brand-inkBlack shadow-brutal-xs":"bg-brand-warmCream text-stone-700"}`,children:[o.jsx(fu,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"SĐT"})]}),o.jsxs("button",{type:"button",onClick:()=>d("qr"),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${c==="qr"?"bg-brand-cyan text-brand-inkBlack shadow-brutal-xs":"bg-brand-warmCream text-stone-700"}`,children:[o.jsx(Iv,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Mã QR"})]}),o.jsxs("button",{type:"button",onClick:()=>d("wallet"),className:`py-2 px-2 text-xs font-black rounded-xl border-2 border-brand-inkBlack flex items-center justify-center gap-1.5 transition-all ${c==="wallet"?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs":"bg-brand-warmCream text-stone-700"}`,children:[o.jsx(vs,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Địa chỉ ví"})]})]}),o.jsxs("div",{className:"p-4 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl mb-5",children:[o.jsxs("div",{className:"text-xs font-bold text-stone-500 uppercase",children:[t.sendFeature.recipientLabel,":"]}),o.jsx("div",{className:"text-base sm:text-lg font-black text-brand-inkBlack mt-1",children:x[c].label}),o.jsx("div",{className:"text-xs text-stone-600 font-medium mt-0.5",children:x[c].note})]}),o.jsxs("button",{type:"button",onClick:()=>l(2),className:"btn-brutal-primary w-full py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2",children:[o.jsx("span",{children:"Tiếp tục sang nhập số tiền"}),o.jsx(yi,{className:"w-4 h-4"})]})]}),a===2&&o.jsxs("div",{className:"animate-appearance-smooth",children:[o.jsx("div",{className:"text-xs font-black uppercase text-stone-500 mb-2",children:t.sendFeature.step2Name}),o.jsxs("div",{className:"p-5 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl text-center mb-4",children:[o.jsx("div",{className:"text-xs font-bold text-stone-500 uppercase",children:t.sendFeature.amountLabel}),o.jsxs("div",{className:"text-3xl sm:text-4xl font-black text-brand-inkBlack my-2",children:[u," ",o.jsx("span",{className:"text-lg font-extrabold text-brand-deepPurple",children:"USDC"})]}),o.jsx("div",{className:"flex items-center justify-center gap-2 mt-3",children:["10.00","25.00","50.00"].map(g=>o.jsxs("button",{type:"button",onClick:()=>f(g),className:`px-3 py-1.5 rounded-xl border-2 border-brand-inkBlack font-black text-xs transition-all ${u===g?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs -translate-y-0.5":"bg-white text-stone-700 hover:bg-stone-100"}`,children:[g," USDC"]},g))})]}),o.jsxs("div",{className:"flex gap-3",children:[o.jsx("button",{type:"button",onClick:()=>l(1),className:"py-3 px-4 bg-brand-warmCream text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-black text-sm",children:"Quay lại"}),o.jsxs("button",{type:"button",onClick:()=>l(3),className:"btn-brutal-primary flex-1 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2",children:[o.jsx("span",{children:"Tiếp tục sang kiểm tra"}),o.jsx(yi,{className:"w-4 h-4"})]})]})]}),a===3&&o.jsxs("div",{className:"animate-appearance-smooth",children:[o.jsx("div",{className:"text-xs font-black uppercase text-stone-500 mb-2",children:t.sendFeature.step3Name}),o.jsxs("div",{className:"p-4 bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl space-y-2 text-xs font-bold mb-4",children:[o.jsxs("div",{className:"flex justify-between pb-2 border-b border-brand-inkBlack/15",children:[o.jsx("span",{className:"text-stone-500",children:"Người nhận:"}),o.jsx("span",{className:"font-black text-brand-inkBlack",children:x[c].label})]}),o.jsxs("div",{className:"flex justify-between pb-2 border-b border-brand-inkBlack/15",children:[o.jsx("span",{className:"text-stone-500",children:"Số lượng:"}),o.jsxs("span",{className:"font-black text-brand-inkBlack",children:[u," USDC"]})]}),o.jsxs("div",{className:"flex justify-between pb-2 border-b border-brand-inkBlack/15",children:[o.jsx("span",{className:"text-stone-500",children:"Mạng thử nghiệm:"}),o.jsx("span",{className:"font-black text-brand-deepPurple",children:"Solana Devnet"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-stone-500",children:"Phí mạng Devnet mẫu:"}),o.jsx("span",{className:"font-black text-emerald-800",children:"~0.000005 SOL (Được tài trợ)"})]})]}),o.jsxs("div",{className:"p-3 bg-brand-lime border-2 border-brand-inkBlack rounded-2xl flex items-center gap-2.5 mb-5 shadow-brutal-xs",children:[o.jsx(kl,{className:"w-5 h-5 text-brand-inkBlack flex-shrink-0"}),o.jsx("div",{className:"text-xs font-black text-brand-inkBlack leading-tight",children:t.sendFeature.reviewNotice})]}),o.jsxs("div",{className:"flex gap-3",children:[o.jsx("button",{type:"button",onClick:()=>l(2),className:"py-3 px-4 bg-brand-warmCream text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-black text-sm",children:"Quay lại"}),o.jsxs("button",{type:"button",onClick:()=>l(1),className:"btn-brutal-cyan flex-1 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2",children:[o.jsx(Al,{className:"w-4 h-4 text-brand-inkBlack"}),o.jsx("span",{children:"Thử lại từ đầu"})]})]})]})]}),o.jsx("div",{className:"mt-5 pt-3 border-t border-brand-inkBlack/10 text-[11px] font-bold text-stone-500 text-center",children:t.sendFeature.illustrationNotice})]})})})]})})})},ST=()=>{const{t,lang:e}=bn(),[n,i]=ae.useState("home"),r={home:{title:e==="vi"?"Trang Chủ Ví (Dashboard)":"Home Dashboard",caption:e==="vi"?"Thẻ US Dollar, số dư USDC và các thao tác nhanh":"US Dollar card, USDC balance and instant actions",src:Ee.screenshots.dashboardHome,badge:e==="vi"?"Trang chủ ví":"Wallet Home"},analytics:{title:e==="vi"?"Phân Tích Dòng Tiền":"Cashflow Analytics",caption:e==="vi"?"Biểu đồ thu chi, két tiết kiệm và hạn mức tháng":"Cashflow charts, savings vaults and monthly limits",src:Ee.screenshots.analyticsCashflow,badge:e==="vi"?"Quản lý tài chính":"Financial Hub"}};return o.jsx("section",{id:"overview",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center",children:[o.jsx("div",{className:"lg:col-span-6 flex flex-col items-center",children:o.jsxs(Oe,{animation:"pop",delay:0,children:[o.jsxs("div",{className:"flex items-center gap-2 mb-4 bg-white border-2 border-brand-inkBlack p-1 rounded-2xl shadow-brutal-xs",children:[o.jsx("button",{type:"button",onClick:()=>i("home"),className:`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${n==="home"?"bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack shadow-brutal-xs":"text-stone-700 hover:bg-stone-100 border-2 border-transparent"}`,children:"Trang chủ ví"}),o.jsx("button",{type:"button",onClick:()=>i("analytics"),className:`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${n==="analytics"?"bg-brand-cyan text-brand-inkBlack border-2 border-brand-inkBlack shadow-brutal-xs":"text-stone-700 hover:bg-stone-100 border-2 border-transparent"}`,children:"Phân tích dòng tiền"})]}),o.jsx("div",{className:"bg-brand-inkBlack border-4 border-brand-inkBlack rounded-[40px] p-3 sm:p-4 shadow-brutal-xl max-w-xs sm:max-w-sm mx-auto",children:o.jsx("div",{className:"rounded-[28px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream shadow-inner",children:o.jsx("img",{src:r[n].src,alt:r[n].title,className:"w-full h-auto object-contain max-h-[540px] animate-appearance-smooth",loading:"lazy"})})}),o.jsx("div",{className:"mt-4 text-center",children:o.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase text-stone-700 shadow-brutal-xs",children:[o.jsx(Gy,{className:"w-3.5 h-3.5 text-brand-deepPurple"}),o.jsx("span",{children:r[n].caption})]})})]})}),o.jsx("div",{className:"lg:col-span-6 flex flex-col items-start",children:o.jsxs(Oe,{animation:"fade-up",delay:120,children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-inkBlack"}),o.jsx("span",{children:t.assetOverview.tag})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight leading-[1.1] mb-5",children:t.assetOverview.headline}),o.jsx("p",{className:"text-base sm:text-lg font-medium text-stone-700 leading-relaxed mb-6",children:t.assetOverview.description}),o.jsxs("div",{className:"space-y-3.5 w-full mb-6",children:[o.jsx("div",{className:"p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-3.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:o.jsx(vs,{className:"w-5 h-5 text-brand-inkBlack"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-base sm:text-lg font-black text-brand-inkBlack mb-1",children:t.assetOverview.balanceCardTitle}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:t.assetOverview.balanceCardDesc})]})]})}),o.jsx("div",{className:"p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-3.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:o.jsx(mv,{className:"w-5 h-5 text-brand-inkBlack"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-base sm:text-lg font-black text-brand-inkBlack mb-1",children:t.assetOverview.recentCardTitle}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:t.assetOverview.recentCardDesc})]})]})}),o.jsx("div",{className:"p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-3.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:o.jsx(By,{className:"w-5 h-5 text-brand-inkBlack"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-base sm:text-lg font-black text-brand-inkBlack mb-1",children:e==="vi"?"Hạn Mức & Két Tiết Kiệm":"Budget Limits & Vaults"}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:e==="vi"?"Thiết lập hạn mức chi tiêu $2,000/tháng và phân loại quỹ tiết kiệm sinh lời an toàn.":"Set smart $2,000 monthly spending limits and organize savings into secure vaults."})]})]})})]}),o.jsxs("div",{className:"w-full p-4 bg-brand-paleYellow border-3 border-brand-inkBlack rounded-2xl shadow-brutal flex items-center gap-4 mb-4",children:[o.jsx("img",{src:Ee.mascots.proud,alt:"Teddy Mascot Proud",className:"w-14 h-14 object-contain flex-shrink-0"}),o.jsxs("div",{children:[o.jsxs("div",{className:"text-xs font-black uppercase text-brand-deepPurple tracking-wide flex items-center gap-1.5",children:[o.jsx(Si,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Teddy Đồng Hành Cùng Bạn"})]}),o.jsx("p",{className:"text-xs font-bold text-stone-800 leading-relaxed mt-1",children:e==="vi"?"N.E.D tự động phân loại mọi khoản thu, chi và chuyển tiền giúp bạn kiểm soát tài chính cá nhân như ứng dụng ngân hàng cao cấp.":"N.E.D automatically tracks and categorizes inflows, outflows, and transfers with banking-grade clarity."})]})]}),o.jsxs("div",{className:"flex items-start gap-2.5 p-3.5 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-bold text-stone-700 shadow-brutal-xs",children:[o.jsx(uv,{className:"w-4 h-4 text-amber-800 flex-shrink-0 mt-0.5"}),o.jsx("span",{className:"leading-snug",children:t.assetOverview.disclaimerNotice})]})]})})]})})})};var wT=Object.defineProperty,Fl=Object.getOwnPropertySymbols,I0=Object.prototype.hasOwnProperty,U0=Object.prototype.propertyIsEnumerable,Lm=(t,e,n)=>e in t?wT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,nh=(t,e)=>{for(var n in e||(e={}))I0.call(e,n)&&Lm(t,n,e[n]);if(Fl)for(var n of Fl(e))U0.call(e,n)&&Lm(t,n,e[n]);return t},ih=(t,e)=>{var n={};for(var i in t)I0.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Fl)for(var i of Fl(t))e.indexOf(i)<0&&U0.call(t,i)&&(n[i]=t[i]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Dr;(t=>{const e=class je{constructor(c,d,u,f){if(this.version=c,this.errorCorrectionLevel=d,this.modules=[],this.isFunction=[],c<je.MIN_VERSION||c>je.MAX_VERSION)throw new RangeError("Version value out of range");if(f<-1||f>7)throw new RangeError("Mask value out of range");this.size=c*4+17;let h=[];for(let g=0;g<this.size;g++)h.push(!1);for(let g=0;g<this.size;g++)this.modules.push(h.slice()),this.isFunction.push(h.slice());this.drawFunctionPatterns();const x=this.addEccAndInterleave(u);if(this.drawCodewords(x),f==-1){let g=1e9;for(let _=0;_<8;_++){this.applyMask(_),this.drawFormatBits(_);const m=this.getPenaltyScore();m<g&&(f=_,g=m),this.applyMask(_)}}r(0<=f&&f<=7),this.mask=f,this.applyMask(f),this.drawFormatBits(f),this.isFunction=[]}static encodeText(c,d){const u=t.QrSegment.makeSegments(c);return je.encodeSegments(u,d)}static encodeBinary(c,d){const u=t.QrSegment.makeBytes(c);return je.encodeSegments([u],d)}static encodeSegments(c,d,u=1,f=40,h=-1,x=!0){if(!(je.MIN_VERSION<=u&&u<=f&&f<=je.MAX_VERSION)||h<-1||h>7)throw new RangeError("Invalid value");let g,_;for(g=u;;g++){const v=je.getNumDataCodewords(g,d)*8,S=a.getTotalBits(c,g);if(S<=v){_=S;break}if(g>=f)throw new RangeError("Data too long")}for(const v of[je.Ecc.MEDIUM,je.Ecc.QUARTILE,je.Ecc.HIGH])x&&_<=je.getNumDataCodewords(g,v)*8&&(d=v);let m=[];for(const v of c){n(v.mode.modeBits,4,m),n(v.numChars,v.mode.numCharCountBits(g),m);for(const S of v.getData())m.push(S)}r(m.length==_);const p=je.getNumDataCodewords(g,d)*8;r(m.length<=p),n(0,Math.min(4,p-m.length),m),n(0,(8-m.length%8)%8,m),r(m.length%8==0);for(let v=236;m.length<p;v^=253)n(v,8,m);let b=[];for(;b.length*8<m.length;)b.push(0);return m.forEach((v,S)=>b[S>>>3]|=v<<7-(S&7)),new je(g,d,b,h)}getModule(c,d){return 0<=c&&c<this.size&&0<=d&&d<this.size&&this.modules[d][c]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const c=this.getAlignmentPatternPositions(),d=c.length;for(let u=0;u<d;u++)for(let f=0;f<d;f++)u==0&&f==0||u==0&&f==d-1||u==d-1&&f==0||this.drawAlignmentPattern(c[u],c[f]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(c){const d=this.errorCorrectionLevel.formatBits<<3|c;let u=d;for(let h=0;h<10;h++)u=u<<1^(u>>>9)*1335;const f=(d<<10|u)^21522;r(f>>>15==0);for(let h=0;h<=5;h++)this.setFunctionModule(8,h,i(f,h));this.setFunctionModule(8,7,i(f,6)),this.setFunctionModule(8,8,i(f,7)),this.setFunctionModule(7,8,i(f,8));for(let h=9;h<15;h++)this.setFunctionModule(14-h,8,i(f,h));for(let h=0;h<8;h++)this.setFunctionModule(this.size-1-h,8,i(f,h));for(let h=8;h<15;h++)this.setFunctionModule(8,this.size-15+h,i(f,h));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let c=this.version;for(let u=0;u<12;u++)c=c<<1^(c>>>11)*7973;const d=this.version<<12|c;r(d>>>18==0);for(let u=0;u<18;u++){const f=i(d,u),h=this.size-11+u%3,x=Math.floor(u/3);this.setFunctionModule(h,x,f),this.setFunctionModule(x,h,f)}}drawFinderPattern(c,d){for(let u=-4;u<=4;u++)for(let f=-4;f<=4;f++){const h=Math.max(Math.abs(f),Math.abs(u)),x=c+f,g=d+u;0<=x&&x<this.size&&0<=g&&g<this.size&&this.setFunctionModule(x,g,h!=2&&h!=4)}}drawAlignmentPattern(c,d){for(let u=-2;u<=2;u++)for(let f=-2;f<=2;f++)this.setFunctionModule(c+f,d+u,Math.max(Math.abs(f),Math.abs(u))!=1)}setFunctionModule(c,d,u){this.modules[d][c]=u,this.isFunction[d][c]=!0}addEccAndInterleave(c){const d=this.version,u=this.errorCorrectionLevel;if(c.length!=je.getNumDataCodewords(d,u))throw new RangeError("Invalid argument");const f=je.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][d],h=je.ECC_CODEWORDS_PER_BLOCK[u.ordinal][d],x=Math.floor(je.getNumRawDataModules(d)/8),g=f-x%f,_=Math.floor(x/f);let m=[];const p=je.reedSolomonComputeDivisor(h);for(let v=0,S=0;v<f;v++){let N=c.slice(S,S+_-h+(v<g?0:1));S+=N.length;const C=je.reedSolomonComputeRemainder(N,p);v<g&&N.push(0),m.push(N.concat(C))}let b=[];for(let v=0;v<m[0].length;v++)m.forEach((S,N)=>{(v!=_-h||N>=g)&&b.push(S[v])});return r(b.length==x),b}drawCodewords(c){if(c.length!=Math.floor(je.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let d=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let f=0;f<this.size;f++)for(let h=0;h<2;h++){const x=u-h,_=(u+1&2)==0?this.size-1-f:f;!this.isFunction[_][x]&&d<c.length*8&&(this.modules[_][x]=i(c[d>>>3],7-(d&7)),d++)}}r(d==c.length*8)}applyMask(c){if(c<0||c>7)throw new RangeError("Mask value out of range");for(let d=0;d<this.size;d++)for(let u=0;u<this.size;u++){let f;switch(c){case 0:f=(u+d)%2==0;break;case 1:f=d%2==0;break;case 2:f=u%3==0;break;case 3:f=(u+d)%3==0;break;case 4:f=(Math.floor(u/3)+Math.floor(d/2))%2==0;break;case 5:f=u*d%2+u*d%3==0;break;case 6:f=(u*d%2+u*d%3)%2==0;break;case 7:f=((u+d)%2+u*d%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[d][u]&&f&&(this.modules[d][u]=!this.modules[d][u])}}getPenaltyScore(){let c=0;for(let h=0;h<this.size;h++){let x=!1,g=0,_=[0,0,0,0,0,0,0];for(let m=0;m<this.size;m++)this.modules[h][m]==x?(g++,g==5?c+=je.PENALTY_N1:g>5&&c++):(this.finderPenaltyAddHistory(g,_),x||(c+=this.finderPenaltyCountPatterns(_)*je.PENALTY_N3),x=this.modules[h][m],g=1);c+=this.finderPenaltyTerminateAndCount(x,g,_)*je.PENALTY_N3}for(let h=0;h<this.size;h++){let x=!1,g=0,_=[0,0,0,0,0,0,0];for(let m=0;m<this.size;m++)this.modules[m][h]==x?(g++,g==5?c+=je.PENALTY_N1:g>5&&c++):(this.finderPenaltyAddHistory(g,_),x||(c+=this.finderPenaltyCountPatterns(_)*je.PENALTY_N3),x=this.modules[m][h],g=1);c+=this.finderPenaltyTerminateAndCount(x,g,_)*je.PENALTY_N3}for(let h=0;h<this.size-1;h++)for(let x=0;x<this.size-1;x++){const g=this.modules[h][x];g==this.modules[h][x+1]&&g==this.modules[h+1][x]&&g==this.modules[h+1][x+1]&&(c+=je.PENALTY_N2)}let d=0;for(const h of this.modules)d=h.reduce((x,g)=>x+(g?1:0),d);const u=this.size*this.size,f=Math.ceil(Math.abs(d*20-u*10)/u)-1;return r(0<=f&&f<=9),c+=f*je.PENALTY_N4,r(0<=c&&c<=2568888),c}getAlignmentPatternPositions(){if(this.version==1)return[];{const c=Math.floor(this.version/7)+2,d=this.version==32?26:Math.ceil((this.version*4+4)/(c*2-2))*2;let u=[6];for(let f=this.size-7;u.length<c;f-=d)u.splice(1,0,f);return u}}static getNumRawDataModules(c){if(c<je.MIN_VERSION||c>je.MAX_VERSION)throw new RangeError("Version number out of range");let d=(16*c+128)*c+64;if(c>=2){const u=Math.floor(c/7)+2;d-=(25*u-10)*u-55,c>=7&&(d-=36)}return r(208<=d&&d<=29648),d}static getNumDataCodewords(c,d){return Math.floor(je.getNumRawDataModules(c)/8)-je.ECC_CODEWORDS_PER_BLOCK[d.ordinal][c]*je.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][c]}static reedSolomonComputeDivisor(c){if(c<1||c>255)throw new RangeError("Degree out of range");let d=[];for(let f=0;f<c-1;f++)d.push(0);d.push(1);let u=1;for(let f=0;f<c;f++){for(let h=0;h<d.length;h++)d[h]=je.reedSolomonMultiply(d[h],u),h+1<d.length&&(d[h]^=d[h+1]);u=je.reedSolomonMultiply(u,2)}return d}static reedSolomonComputeRemainder(c,d){let u=d.map(f=>0);for(const f of c){const h=f^u.shift();u.push(0),d.forEach((x,g)=>u[g]^=je.reedSolomonMultiply(x,h))}return u}static reedSolomonMultiply(c,d){if(c>>>8||d>>>8)throw new RangeError("Byte out of range");let u=0;for(let f=7;f>=0;f--)u=u<<1^(u>>>7)*285,u^=(d>>>f&1)*c;return r(u>>>8==0),u}finderPenaltyCountPatterns(c){const d=c[1];r(d<=this.size*3);const u=d>0&&c[2]==d&&c[3]==d*3&&c[4]==d&&c[5]==d;return(u&&c[0]>=d*4&&c[6]>=d?1:0)+(u&&c[6]>=d*4&&c[0]>=d?1:0)}finderPenaltyTerminateAndCount(c,d,u){return c&&(this.finderPenaltyAddHistory(d,u),d=0),d+=this.size,this.finderPenaltyAddHistory(d,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(c,d){d[0]==0&&(c+=this.size),d.pop(),d.unshift(c)}};e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=e;function n(l,c,d){if(c<0||c>31||l>>>c)throw new RangeError("Value out of range");for(let u=c-1;u>=0;u--)d.push(l>>>u&1)}function i(l,c){return(l>>>c&1)!=0}function r(l){if(!l)throw new Error("Assertion error")}const s=class vt{constructor(c,d,u){if(this.mode=c,this.numChars=d,this.bitData=u,d<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(c){let d=[];for(const u of c)n(u,8,d);return new vt(vt.Mode.BYTE,c.length,d)}static makeNumeric(c){if(!vt.isNumeric(c))throw new RangeError("String contains non-numeric characters");let d=[];for(let u=0;u<c.length;){const f=Math.min(c.length-u,3);n(parseInt(c.substring(u,u+f),10),f*3+1,d),u+=f}return new vt(vt.Mode.NUMERIC,c.length,d)}static makeAlphanumeric(c){if(!vt.isAlphanumeric(c))throw new RangeError("String contains unencodable characters in alphanumeric mode");let d=[],u;for(u=0;u+2<=c.length;u+=2){let f=vt.ALPHANUMERIC_CHARSET.indexOf(c.charAt(u))*45;f+=vt.ALPHANUMERIC_CHARSET.indexOf(c.charAt(u+1)),n(f,11,d)}return u<c.length&&n(vt.ALPHANUMERIC_CHARSET.indexOf(c.charAt(u)),6,d),new vt(vt.Mode.ALPHANUMERIC,c.length,d)}static makeSegments(c){return c==""?[]:vt.isNumeric(c)?[vt.makeNumeric(c)]:vt.isAlphanumeric(c)?[vt.makeAlphanumeric(c)]:[vt.makeBytes(vt.toUtf8ByteArray(c))]}static makeEci(c){let d=[];if(c<0)throw new RangeError("ECI assignment value out of range");if(c<128)n(c,8,d);else if(c<16384)n(2,2,d),n(c,14,d);else if(c<1e6)n(6,3,d),n(c,21,d);else throw new RangeError("ECI assignment value out of range");return new vt(vt.Mode.ECI,0,d)}static isNumeric(c){return vt.NUMERIC_REGEX.test(c)}static isAlphanumeric(c){return vt.ALPHANUMERIC_REGEX.test(c)}getData(){return this.bitData.slice()}static getTotalBits(c,d){let u=0;for(const f of c){const h=f.mode.numCharCountBits(d);if(f.numChars>=1<<h)return 1/0;u+=4+h+f.bitData.length}return u}static toUtf8ByteArray(c){c=encodeURI(c);let d=[];for(let u=0;u<c.length;u++)c.charAt(u)!="%"?d.push(c.charCodeAt(u)):(d.push(parseInt(c.substring(u+1,u+3),16)),u+=2);return d}};s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let a=s;t.QrSegment=s})(Dr||(Dr={}));(t=>{(e=>{const n=class{constructor(r,s){this.ordinal=r,this.formatBits=s}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(Dr||(Dr={}));(t=>{(e=>{const n=class{constructor(r,s){this.modeBits=r,this.numBitsCharCount=s}numCharCountBits(r){return this.numBitsCharCount[Math.floor((r+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Dr||(Dr={}));var us=Dr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var MT={L:us.QrCode.Ecc.LOW,M:us.QrCode.Ecc.MEDIUM,Q:us.QrCode.Ecc.QUARTILE,H:us.QrCode.Ecc.HIGH},B0=128,F0="L",O0="#FFFFFF",j0="#000000",z0=!1,H0=1,ET=4,TT=0,CT=.1;function V0(t,e=0){const n=[];return t.forEach(function(i,r){let s=null;i.forEach(function(a,l){if(!a&&s!==null){n.push(`M${s+e} ${r+e}h${l-s}v1H${s+e}z`),s=null;return}if(l===i.length-1){if(!a)return;s===null?n.push(`M${l+e},${r+e} h1v1H${l+e}z`):n.push(`M${s+e},${r+e} h${l+1-s}v1H${s+e}z`);return}a&&s===null&&(s=l)})}),n.join("")}function G0(t,e){return t.slice().map((n,i)=>i<e.y||i>=e.y+e.h?n:n.map((r,s)=>s<e.x||s>=e.x+e.w?r:!1))}function NT(t,e,n,i){if(i==null)return null;const r=t.length+n*2,s=Math.floor(e*CT),a=r/e,l=(i.width||s)*a,c=(i.height||s)*a,d=i.x==null?t.length/2-l/2:i.x*a,u=i.y==null?t.length/2-c/2:i.y*a,f=i.opacity==null?1:i.opacity;let h=null;if(i.excavate){let g=Math.floor(d),_=Math.floor(u),m=Math.ceil(l+d-g),p=Math.ceil(c+u-_);h={x:g,y:_,w:m,h:p}}const x=i.crossOrigin;return{x:d,y:u,h:c,w:l,excavation:h,opacity:f,crossOrigin:x}}function AT(t,e){return e!=null?Math.max(Math.floor(e),0):t?ET:TT}function W0({value:t,level:e,minVersion:n,includeMargin:i,marginSize:r,imageSettings:s,size:a,boostLevel:l}){let c=Et.useMemo(()=>{const g=(Array.isArray(t)?t:[t]).reduce((_,m)=>(_.push(...us.QrSegment.makeSegments(m)),_),[]);return us.QrCode.encodeSegments(g,MT[e],n,void 0,void 0,l)},[t,e,n,l]);const{cells:d,margin:u,numCells:f,calculatedImageSettings:h}=Et.useMemo(()=>{let x=c.getModules();const g=AT(i,r),_=x.length+g*2,m=NT(x,a,g,s);return{cells:x,margin:g,numCells:_,calculatedImageSettings:m}},[c,a,s,i,r]);return{qrcode:c,margin:u,cells:d,numCells:f,calculatedImageSettings:h}}var kT=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),RT=Et.forwardRef(function(e,n){const i=e,{value:r,size:s=B0,level:a=F0,bgColor:l=O0,fgColor:c=j0,includeMargin:d=z0,minVersion:u=H0,boostLevel:f,marginSize:h,imageSettings:x}=i,_=ih(i,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:m}=_,p=ih(_,["style"]),b=x==null?void 0:x.src,v=Et.useRef(null),S=Et.useRef(null),N=Et.useCallback(X=>{v.current=X,typeof n=="function"?n(X):n&&(n.current=X)},[n]),[C,T]=Et.useState(!1),{margin:k,cells:W,numCells:y,calculatedImageSettings:M}=W0({value:r,level:a,minVersion:u,boostLevel:f,includeMargin:d,marginSize:h,imageSettings:x,size:s});Et.useEffect(()=>{if(v.current!=null){const X=v.current,q=X.getContext("2d");if(!q)return;let z=W;const K=S.current,P=M!=null&&K!==null&&K.complete&&K.naturalHeight!==0&&K.naturalWidth!==0;P&&M.excavation!=null&&(z=G0(W,M.excavation));const $=window.devicePixelRatio||1;X.height=X.width=s*$;const Z=s/y*$;q.scale(Z,Z),q.fillStyle=l,q.fillRect(0,0,y,y),q.fillStyle=c,kT?q.fill(new Path2D(V0(z,k))):W.forEach(function(ee,fe){ee.forEach(function(Fe,G){Fe&&q.fillRect(G+k,fe+k,1,1)})}),M&&(q.globalAlpha=M.opacity),P&&q.drawImage(K,M.x+k,M.y+k,M.w,M.h)}}),Et.useEffect(()=>{T(!1)},[b]);const H=nh({height:s,width:s},m);let j=null;return b!=null&&(j=Et.createElement("img",{src:b,key:b,style:{display:"none"},onLoad:()=>{T(!0)},ref:S,crossOrigin:M==null?void 0:M.crossOrigin})),Et.createElement(Et.Fragment,null,Et.createElement("canvas",nh({style:H,height:s,width:s,ref:N,role:"img"},p)),j)});RT.displayName="QRCodeCanvas";var hf=Et.forwardRef(function(e,n){const i=e,{value:r,size:s=B0,level:a=F0,bgColor:l=O0,fgColor:c=j0,includeMargin:d=z0,minVersion:u=H0,boostLevel:f,title:h,marginSize:x,imageSettings:g}=i,_=ih(i,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:m,cells:p,numCells:b,calculatedImageSettings:v}=W0({value:r,level:a,minVersion:u,boostLevel:f,includeMargin:d,marginSize:x,imageSettings:g,size:s});let S=p,N=null;g!=null&&v!=null&&(v.excavation!=null&&(S=G0(p,v.excavation)),N=Et.createElement("image",{href:g.src,height:v.h,width:v.w,x:v.x+m,y:v.y+m,preserveAspectRatio:"none",opacity:v.opacity,crossOrigin:v.crossOrigin}));const C=V0(S,m);return Et.createElement("svg",nh({height:s,width:s,viewBox:`0 0 ${b} ${b}`,ref:n,role:"img"},_),!!h&&Et.createElement("title",null,h),Et.createElement("path",{fill:l,d:`M0,0 h${b}v${b}H0z`,shapeRendering:"crispEdges"}),Et.createElement("path",{fill:c,d:C,shapeRendering:"crispEdges"}),N)});hf.displayName="QRCodeSVG";const PT="/assets/QR-t3aXe_Pa.png",DT=PT,Im=({platform:t,storeLabel:e,storeUrl:n,scanInstruction:i,accentClass:r,storeIcon:s})=>o.jsxs("article",{className:"rounded-3xl border-3 border-brand-inkBlack bg-white p-4 shadow-brutal sm:p-5",children:[o.jsxs("div",{className:"flex items-center justify-between gap-3 border-b-2 border-brand-inkBlack pb-3",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:`flex h-11 w-11 items-center justify-center rounded-xl border-2 border-brand-inkBlack ${r} shadow-brutal-xs`,children:o.jsx(Gv,{className:"h-6 w-6",strokeWidth:2.5})}),o.jsx("h3",{className:"text-xl font-black",children:t})]}),o.jsx("span",{className:"rounded-lg border-2 border-brand-inkBlack bg-brand-inkBlack px-2 py-1 text-[10px] font-black uppercase tracking-wider text-white",children:"Expo Go"})]}),o.jsxs("div",{className:"flex items-start gap-3 py-5",children:[o.jsx("span",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-brand-inkBlack bg-brand-lime text-sm font-black shadow-brutal-xs",children:"01"}),o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsx("h4",{className:"mb-1 text-base font-black",children:"Cài đặt Expo Go"}),o.jsx("p",{className:"mb-3 text-sm font-bold text-stone-700",children:e}),o.jsxs("a",{href:n,target:"_blank",rel:"noreferrer",className:"group flex items-center gap-3 rounded-2xl border-2 border-brand-inkBlack bg-brand-paleYellow p-3 shadow-brutal-xs transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5",children:[o.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-brand-inkBlack bg-brand-inkBlack text-lg font-black text-white",children:s}),o.jsx(hf,{value:n,size:74,level:"M",bgColor:"#FFF3A6",fgColor:"#111111",className:"h-[74px] w-[74px] shrink-0 rounded-lg border-2 border-brand-inkBlack bg-brand-paleYellow p-1"}),o.jsxs("span",{className:"min-w-0 text-xs font-black leading-tight",children:["Quét để mở",o.jsx("br",{}),"cửa hàng ứng dụng"]}),o.jsx(Vy,{className:"ml-auto h-5 w-5 shrink-0",strokeWidth:3})]})]})]}),o.jsx("div",{className:"flex justify-center border-y-2 border-dashed border-brand-inkBlack py-2 text-brand-inkBlack",children:o.jsx(Iy,{className:"h-7 w-7 animate-bounce",strokeWidth:3})}),o.jsxs("div",{className:"flex items-start gap-3 pt-5",children:[o.jsx("span",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-brand-inkBlack bg-brand-cyan text-sm font-black shadow-brutal-xs",children:"02"}),o.jsxs("div",{children:[o.jsx("h4",{className:"mb-1 text-base font-black",children:"Quét mã dự án"}),o.jsx("p",{className:"text-sm font-bold leading-relaxed text-stone-700",children:i}),o.jsxs("div",{className:"mt-3 inline-flex items-center gap-2 rounded-xl border-2 border-brand-inkBlack bg-brand-warmCream px-3 py-1.5 text-xs font-black shadow-brutal-xs",children:[o.jsx(Uy,{className:"h-4 w-4",strokeWidth:3})," Sẵn sàng khám phá"]})]})]})]}),LT=({isOpen:t,onClose:e})=>{const n=ae.useRef(null),[i,r]=ae.useState(!1),s="https://expo.dev";return ae.useEffect(()=>{var c;if(!t)return;const a=d=>{d.key==="Escape"&&e()},l=document.body.style.overflow;return document.body.style.overflow="hidden",(c=n.current)==null||c.focus(),window.addEventListener("keydown",a),()=>{document.body.style.overflow=l,window.removeEventListener("keydown",a)}},[t,e]),t?o.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-brand-deepPurple/75 p-4 sm:p-6",role:"dialog","aria-modal":"true","aria-labelledby":"demo-expo-title",onMouseDown:a=>a.target===a.currentTarget&&e(),children:o.jsxs("div",{className:"my-auto w-full max-w-6xl overflow-hidden rounded-3xl border-4 border-brand-inkBlack bg-brand-warmCream shadow-brutal-xl animate-slideUp",children:[o.jsxs("div",{className:"flex items-start justify-between gap-4 border-b-4 border-brand-inkBlack bg-brand-lavender p-4 sm:p-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"mb-2 inline-flex items-center gap-2 rounded-full border-2 border-brand-inkBlack bg-brand-lime px-2.5 py-1 text-[10px] font-black uppercase tracking-wider shadow-brutal-xs",children:[o.jsx(Rp,{className:"h-4 w-4",strokeWidth:3})," Demo walkthrough"]}),o.jsx("h2",{id:"demo-expo-title",className:"max-w-3xl text-2xl font-black leading-tight sm:text-4xl",children:"Hướng dẫn trải nghiệm Demo N.E.D Wallet"}),o.jsx("p",{className:"mt-2 max-w-2xl text-sm font-bold text-stone-800 sm:text-base",children:"Tải Expo Go, mở ứng dụng và quét mã dự án. Chỉ ba thao tác để bắt đầu."}),o.jsxs("div",{className:"mt-4 flex items-center gap-3",children:[o.jsx("img",{src:Ee.mascots.curious,alt:"NED Teddy hướng dẫn trải nghiệm demo",className:"h-12 w-12 shrink-0 object-contain drop-shadow-md"}),o.jsx("div",{className:"rounded-2xl border-2 border-brand-inkBlack bg-white px-3 py-2 text-xs font-black leading-snug shadow-brutal-xs",children:"NED Teddy sẽ chỉ bạn từng bước!"})]})]}),o.jsx("button",{ref:n,type:"button",onClick:e,className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-brand-inkBlack bg-white shadow-brutal-xs transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5","aria-label":"Đóng hướng dẫn demo",children:o.jsx(Jh,{className:"h-6 w-6",strokeWidth:3})})]}),o.jsxs("div",{className:"grid gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)_minmax(0,1fr)] lg:items-center",children:[o.jsx(Im,{platform:"Android",storeLabel:"Vào CH Play tải Expo Go",storeUrl:"https://play.google.com/store/apps/details?id=host.exp.exponent",scanInstruction:"Mở ứng dụng Expo Go và chọn 'Scan QR Code' để quét mã dự án N.E.D Wallet",accentClass:"bg-brand-lime",storeIcon:"▶"}),o.jsxs("div",{className:"order-first rounded-3xl border-3 border-brand-inkBlack bg-brand-cyan p-4 text-center text-brand-inkBlack shadow-brutal lg:order-none",children:[o.jsxs("div",{className:"mb-3 inline-flex items-center gap-2 rounded-full border-2 border-brand-inkBlack bg-white px-3 py-1 text-xs font-black uppercase shadow-brutal-xs",children:[o.jsx(Rp,{className:"h-4 w-4",strokeWidth:3})," Project QR"]}),o.jsx("div",{className:"mx-auto flex aspect-square max-w-[260px] items-center justify-center rounded-2xl border-3 border-brand-inkBlack bg-white p-3 shadow-brutal-lg",children:i?o.jsx(hf,{value:s,size:230,level:"H",bgColor:"#FFFFFF",fgColor:"#111111",className:"h-full w-full"}):o.jsx("img",{src:DT,alt:"Mã QR dự án N.E.D Wallet",className:"h-full w-full object-contain",onError:()=>r(!0)})}),o.jsxs("div",{className:"mt-4 flex items-center justify-center gap-2 text-left",children:[o.jsx("img",{src:Ee.mascots.waving,alt:"NED Teddy mời quét mã dự án",className:"h-12 w-12 shrink-0 object-contain"}),o.jsx("p",{className:"max-w-[180px] text-sm font-black leading-relaxed",children:"Quét mã này sau khi đã mở Expo Go"})]}),!i&&o.jsx("p",{className:"mt-2 rounded-lg border-2 border-brand-inkBlack bg-white px-2 py-1 text-[10px] font-bold",children:"Mã QR chính thức của dự án"}),i&&!0&&o.jsx("p",{className:"mt-2 rounded-lg border-2 border-brand-inkBlack bg-brand-paleYellow px-2 py-1 text-[10px] font-bold",children:"Không thể tải ảnh QR, vui lòng kiểm tra asset"})]}),o.jsx(Im,{platform:"iOS",storeLabel:"Vào App Store tải Expo Go",storeUrl:"https://apps.apple.com/app/expo-go/id982107779",scanInstruction:"Mở ứng dụng Camera mặc định của iPhone để quét mã dự án N.E.D Wallet",accentClass:"bg-brand-lavender",storeIcon:"A"})]})]})}):null},IT=()=>{const{t,lang:e}=bn(),[n,i]=ae.useState(!1),[r,s]=ae.useState(!1),a=ae.useRef(null),[l,c]=ae.useState(!1),[d,u]=ae.useState(!0),f=ae.useRef(null),[h,x]=ae.useState(!1);ae.useEffect(()=>{const N=f.current;if(!N)return;const C=new IntersectionObserver(([T])=>{T.isIntersecting?(x(!0),c(!0),a.current&&a.current.paused&&a.current.play().catch(()=>{})):(x(!1),c(!1),a.current&&!a.current.paused&&a.current.pause())},{threshold:.3,rootMargin:"0px 0px -5% 0px"});return C.observe(N),()=>{C.disconnect()}},[]),ae.useEffect(()=>{const N=()=>s(!0);return window.addEventListener("open-demo-guide",N),()=>window.removeEventListener("open-demo-guide",N)},[]);const g=()=>{window.open(Ee.demoVideo.url,"_blank","noopener,noreferrer")},_=ae.useCallback(N=>{if(N.stopPropagation(),a.current){const C=!a.current.muted;a.current.muted=C,u(C)}},[]),m=ae.useCallback(N=>{N.stopPropagation(),a.current&&(a.current.paused?(a.current.play().catch(()=>{}),c(!0)):(a.current.pause(),c(!1)))},[]),p=async()=>{var N;try{if((N=navigator==null?void 0:navigator.clipboard)!=null&&N.writeText){await navigator.clipboard.writeText(Ee.contactEmail),i(!0),setTimeout(()=>i(!1),2500);return}}catch{}try{const C=document.createElement("textarea");C.value=Ee.contactEmail,C.style.position="fixed",C.style.left="-999999px",C.style.top="-999999px",document.body.appendChild(C),C.focus(),C.select(),document.execCommand("copy"),document.body.removeChild(C),i(!0),setTimeout(()=>i(!1),2500)}catch{}},b=e==="vi"?Ee.demoMailBodyVi:Ee.demoMailBodyEn,v=`mailto:${Ee.contactEmail}?subject=${encodeURIComponent(Ee.demoMailSubject)}&body=${encodeURIComponent(b)}`,S=[{num:"01",title:t.demoGuide.step1Title,desc:t.demoGuide.step1Desc,color:"bg-brand-lavender",tag:"Không Seedphrase"},{num:"02",title:t.demoGuide.step2Title,desc:t.demoGuide.step2Desc,color:"bg-brand-lime",tag:"Shake & Split 20m"},{num:"03",title:t.demoGuide.step3Title,desc:t.demoGuide.step3Desc,color:"bg-brand-cyan",tag:"Định danh @tên.sol"}];return o.jsx("section",{id:"demo",className:"scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none overflow-hidden",children:o.jsxs("div",{className:"max-w-6xl mx-auto",children:[o.jsx(Oe,{animation:"fade-up",children:o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-10 sm:mb-14",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime border-2 border-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[o.jsx(Si,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:t.demoGuide.tag})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-4",children:t.demoGuide.headline}),o.jsx("p",{className:"text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6",children:t.demoGuide.subtitle}),o.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 bg-white border-2 border-brand-inkBlack rounded-2xl shadow-brutal-xs text-xs sm:text-sm font-bold text-stone-800",children:[o.jsx("img",{src:Ee.mascots.curious,alt:"Teddy Curious",className:"w-8 h-8 object-contain drop-shadow"}),o.jsx("span",{children:t.mascot.demoTip})]})]})}),o.jsx("div",{ref:f,className:"relative w-full mb-14",children:o.jsx("div",{className:"w-full will-change-transform origin-center",style:{transform:h?"scale(1)":"scale(0.75)",filter:h?"blur(0px)":"blur(12px)",opacity:h?1:.6,transition:"transform 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 700ms ease-out, opacity 700ms ease-out"},children:o.jsxs("div",{onClick:g,className:"relative w-full bg-brand-darkSurface border-4 border-brand-inkBlack rounded-3xl sm:rounded-[36px] overflow-hidden shadow-brutal-xl transition-all cursor-pointer",children:[o.jsxs("div",{className:"bg-brand-inkBlack px-4 sm:px-6 py-3 border-b-3 border-brand-inkBlack flex items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500 border border-brand-inkBlack inline-block"}),o.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-400 border border-brand-inkBlack inline-block"}),o.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-400 border border-brand-inkBlack inline-block"}),o.jsx("span",{className:"ml-2 text-xs font-black text-brand-lavender hidden sm:inline-block",children:t.demoGuide.videoBadge})]}),o.jsx("div",{className:"flex items-center gap-2",children:l?o.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-brand-lime text-brand-inkBlack font-black text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-600 animate-ping"}),o.jsx("span",{children:t.demoGuide.autoPlaying})]}):o.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-stone-700 text-stone-300 font-bold text-[10px] tracking-wider flex items-center gap-1",children:o.jsx("span",{children:t.demoGuide.paused})})}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{type:"button",onClick:_,className:`px-2.5 py-1 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer border ${d?"bg-stone-800 text-stone-300 hover:bg-stone-700 border-stone-600":"bg-brand-lime text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs"}`,title:d?"Bật âm thanh":"Tắt âm thanh",children:[d?o.jsx(nS,{className:"w-3.5 h-3.5 text-stone-400"}):o.jsx(tS,{className:"w-3.5 h-3.5"}),o.jsx("span",{className:"hidden sm:inline",children:d?t.demoGuide.muted:t.demoGuide.unmute})]}),o.jsx("button",{type:"button",onClick:m,className:"px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 border border-stone-600 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors",title:l?"Tạm dừng":"Phát",children:l?o.jsxs(o.Fragment,{children:[o.jsx(qy,{className:"w-3.5 h-3.5"}),o.jsx("span",{className:"hidden sm:inline",children:"Tạm dừng"})]}):o.jsxs(o.Fragment,{children:[o.jsx($y,{className:"w-3.5 h-3.5 fill-current"}),o.jsx("span",{className:"hidden sm:inline",children:"Phát"})]})})]})]}),o.jsxs("div",{className:"relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center",children:[o.jsxs("video",{ref:a,muted:!0,loop:!0,playsInline:!0,preload:"auto",poster:Ee.demoVideo.thumbnail,className:"w-full h-full object-cover object-center bg-black",children:[o.jsx("source",{src:Ee.demoVideo.localVideoAsset,type:"video/mp4"}),o.jsx("source",{src:Ee.demoVideo.rawLocalVideoAsset,type:"video/mp4"})]}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"})]}),o.jsxs("div",{className:"bg-brand-darkSurface px-4 sm:px-6 py-3 border-t-2 border-brand-lavender/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-bold text-stone-400",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(On,{className:"w-4 h-4 text-brand-lime flex-shrink-0"}),o.jsx("span",{className:"text-stone-300",children:"Video trải nghiệm thực tế N.E.D Wallet trên Solana Devnet"})]}),o.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-[11px]",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"}),o.jsx("span",{children:"1080p HD • Chạm để xem trên YouTube"})]})]})]})})}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:S.map((N,C)=>o.jsx(Oe,{animation:"fade-up",delay:C*100,className:"h-full",children:o.jsxs("div",{className:"h-full bg-white border-3 border-brand-inkBlack rounded-3xl p-6 shadow-brutal card-brutal-interactive flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("span",{className:`w-10 h-10 rounded-xl ${N.color} border-2 border-brand-inkBlack flex items-center justify-center font-black text-base text-brand-inkBlack shadow-brutal-xs`,children:N.num}),o.jsx("span",{className:"text-[10px] font-black uppercase text-stone-600 px-2 py-0.5 bg-brand-warmCream border border-brand-inkBlack rounded",children:N.tag})]}),o.jsx("h3",{className:"text-lg font-black text-brand-inkBlack mb-1.5",children:N.title}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-600 leading-relaxed",children:N.desc})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-brand-inkBlack/10 flex items-center gap-2 text-[11px] font-black text-brand-deepPurple",children:[o.jsx(Hv,{className:"w-3.5 h-3.5 text-brand-lime"}),o.jsx("span",{children:"An toàn & Miễn phí phí Gas"})]})]})},N.num))}),o.jsx(Oe,{animation:"pop",delay:120,children:o.jsx("div",{className:"bg-brand-deepPurple text-brand-offWhite border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl mb-6",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[o.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-brand-darkSurface border border-brand-lavender rounded-lg text-xs font-black uppercase tracking-wider text-brand-lavender mb-3",children:[o.jsx(hu,{className:"w-3.5 h-3.5 text-brand-lime"}),o.jsx("span",{children:t.demoGuide.contactCardTitle})]}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-black mb-3 text-brand-offWhite",children:"Nhận link cài đặt thử nghiệm qua email"}),o.jsx("p",{className:"text-sm sm:text-base text-stone-300 font-medium leading-relaxed",children:"Bản demo được gửi kèm hướng dẫn chi tiết qua Expo để bạn tự mình trải nghiệm các tính năng trong video trực tiếp trên điện thoại."})]}),o.jsxs("div",{className:"lg:col-span-5 bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 shadow-brutal flex flex-col items-stretch text-center",children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-400 mb-2",children:t.demoGuide.emailLabel}),o.jsx("div",{className:"bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl p-3 text-sm sm:text-base font-black text-brand-lime tracking-wide select-all mb-4",children:Ee.contactEmail}),o.jsxs("div",{className:"flex flex-col gap-2.5",children:[o.jsx("button",{type:"button",onClick:()=>s(!0),className:"btn-brutal-lime w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs cursor-pointer",children:o.jsx("span",{children:"Trải nghiệm demo qua Expo Go"})}),o.jsxs("a",{href:v,className:"btn-brutal-primary w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs cursor-pointer",children:[o.jsx(hu,{className:"w-4 h-4"}),o.jsx("span",{children:t.demoGuide.btnMailto})]}),o.jsx("button",{type:"button",onClick:p,className:`btn-brutal w-full py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs transition-colors cursor-pointer ${n?"bg-brand-lime text-brand-inkBlack":"bg-white text-brand-inkBlack"}`,"aria-label":"Sao chép địa chỉ email",children:n?o.jsxs(o.Fragment,{children:[o.jsx(Al,{className:"w-4 h-4 text-emerald-800 stroke-[3]"}),o.jsx("span",{children:t.demoGuide.btnCopied})]}):o.jsxs(o.Fragment,{children:[o.jsx(_v,{className:"w-4 h-4"}),o.jsx("span",{children:t.demoGuide.btnCopy})]})})]})]})]})})}),o.jsx(LT,{isOpen:r,onClose:()=>s(!1)}),o.jsx(Oe,{animation:"fade-up",delay:160,children:o.jsxs("div",{className:"bg-brand-paleYellow text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl p-4 sm:p-5 shadow-brutal-sm flex items-center gap-3.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-400 border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs",children:o.jsx(Jy,{className:"w-5 h-5 text-brand-inkBlack stroke-[2.5]"})}),o.jsx("div",{className:"text-xs sm:text-sm font-black text-brand-inkBlack leading-snug",children:t.demoGuide.warningNotice})]})})]})})},UT=({onNavigate:t})=>{const{t:e}=bn(),n=()=>{t("/builders"),window.scrollTo({top:0,behavior:"smooth"})};return o.jsx("section",{id:"mini-apps",className:"scroll-mt-20 relative w-full bg-brand-deepPurple text-brand-offWhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none overflow-hidden",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx(Oe,{animation:"fade-up",children:o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12 sm:mb-16",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-pulse"}),o.jsx("span",{children:e.miniApps.statusBadge})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-4",children:e.miniApps.headline}),o.jsx("p",{className:"text-base sm:text-lg text-stone-300 font-medium leading-relaxed mb-6",children:e.miniApps.description}),o.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 bg-brand-darkSurface/90 border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs text-left max-w-lg mx-auto",children:[o.jsx("img",{src:Ee.mascots.laughing,alt:"NED Teddy laughing",className:"w-9 h-9 object-contain drop-shadow",loading:"lazy"}),o.jsx("span",{className:"text-xs sm:text-sm font-bold text-brand-lavender",children:e.mascot.miniAppsTip})]})]})}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-14",children:[o.jsx("div",{className:"lg:col-span-5 flex justify-center",children:o.jsx(Oe,{animation:"fade-up",delay:50,className:"w-full max-w-sm",children:o.jsxs("div",{className:"relative",children:[o.jsxs("div",{className:"absolute -top-7 -right-4 z-20 flex items-center gap-1.5 bg-brand-lime text-brand-inkBlack px-3 py-1 rounded-full border-2 border-brand-inkBlack font-black text-[11px] shadow-brutal-xs rotate-3 animate-float-slow",children:[o.jsx("img",{src:Ee.mascots.happy,alt:"NED Teddy happy",className:"w-5 h-5 object-contain"}),o.jsx("span",{children:"Hub Đa Tiện Ích"})]}),o.jsxs("div",{className:"bg-brand-darkSurface border-4 border-brand-inkBlack rounded-[2.5rem] p-3 sm:p-4 shadow-brutal-xl",children:[o.jsx("div",{className:"flex justify-center mb-3",children:o.jsx("div",{className:"w-20 h-1.5 bg-stone-700 rounded-full"})}),o.jsx("div",{className:"rounded-[1.8rem] overflow-hidden border-2 border-brand-inkBlack/60 bg-black aspect-[9/19] relative",children:o.jsx("img",{src:Ee.screenshots.miniappsHub,alt:"N.E.D MiniApps Hub Screen",className:"w-full h-full object-cover object-top",loading:"lazy"})}),o.jsxs("div",{className:"mt-3 pt-2 text-center text-[11px] font-bold text-stone-400 flex items-center justify-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime"}),o.jsx("span",{children:"Giao diện N.E.D MiniApps Hub trên Solana Devnet"})]})]})]})})}),o.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[o.jsx(Oe,{animation:"fade-up",delay:100,children:o.jsx("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx(nv,{className:"w-6 h-6"})}),o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lavender bg-brand-lavender/10 px-2 py-0.5 rounded border border-brand-lavender/30",children:"Module 01 • Thanh toán"}),o.jsx("span",{className:"text-[10px] font-bold text-stone-400",children:"Solana Pay Merchant"})]}),o.jsx("h3",{className:"text-lg sm:text-xl font-black text-brand-offWhite mb-1",children:e.miniApps.module1}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3",children:"Quét mã QR chấp nhận thanh toán tức thì tại điểm bán (POS), tự động đối soát giao dịch trên Solana Devnet với phí xử lý 0%."}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300",children:[o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(On,{className:"w-3.5 h-3.5 text-brand-lime"})," Mã QR Động"]}),o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(On,{className:"w-3.5 h-3.5 text-brand-lime"})," Phí 0%"]})]})]})]})})}),o.jsx(Oe,{animation:"fade-up",delay:200,children:o.jsx("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx(Si,{className:"w-6 h-6"})}),o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lime bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/30",children:"Module 02 • Hoán đổi & Tài chính"}),o.jsx("span",{className:"text-[10px] font-bold text-stone-400",children:"Jupiter Swap Lite"})]}),o.jsx("h3",{className:"text-lg sm:text-xl font-black text-brand-offWhite mb-1",children:e.miniApps.module2}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3",children:"Hoán đổi token nhanh chóng với định tuyến thông minh, kết hợp các két tích lũy vi mô (Micro Savings) sinh lời theo block."}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300",children:[o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(On,{className:"w-3.5 h-3.5 text-brand-cyan"})," Định tuyến tối ưu"]}),o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(On,{className:"w-3.5 h-3.5 text-brand-cyan"})," Lãi tính theo block"]})]})]})]})})}),o.jsx(Oe,{animation:"fade-up",delay:300,children:o.jsx("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx(Tv,{className:"w-6 h-6"})}),o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/30",children:"Module 03 • Đời sống & Tiện ích"}),o.jsx("span",{className:"text-[10px] font-bold text-stone-400",children:"Web3 Gift Cards"})]}),o.jsx("h3",{className:"text-lg sm:text-xl font-black text-brand-offWhite mb-1",children:e.miniApps.module3}),o.jsx("p",{className:"text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3",children:"Mua voucher ăn uống, di chuyển và nạp thẻ cào điện thoại bằng tài sản số chỉ trong một chạm mà không cần rời ví."}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300",children:[o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(On,{className:"w-3.5 h-3.5 text-brand-lavender"})," Mã tức thì"]}),o.jsxs("span",{className:"inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack",children:[o.jsx(On,{className:"w-3.5 h-3.5 text-brand-lavender"})," Không cần KYC"]})]})]})]})})})]})]}),o.jsx(Oe,{animation:"pop",delay:120,children:o.jsx("div",{className:"relative bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal-xl overflow-hidden",children:o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10",children:[o.jsxs("div",{className:"flex items-start sm:items-center gap-4",children:[o.jsx("img",{src:Ee.mascots.proud,alt:"NED Teddy proud",className:"w-14 h-14 sm:w-16 sm:h-16 object-contain flex-shrink-0 drop-shadow",loading:"lazy"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-700 mb-1",children:"Dành cho đối tác & nhà phát triển"}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-brand-inkBlack",children:"Khám phá cổng hợp tác dành cho builder"}),o.jsx("p",{className:"text-sm sm:text-base font-bold text-stone-800 mt-1",children:"Xem lộ trình trao đổi ý tưởng và tích hợp MiniApp của bạn trực tiếp vào N.E.D Hub."})]})]}),o.jsxs("button",{type:"button",onClick:n,className:"btn-brutal-dark px-6 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 flex-shrink-0 cursor-pointer",children:[o.jsx("span",{children:e.miniApps.cta}),o.jsx(yi,{className:"w-4 h-4 text-brand-lime"})]})]})})})]})})},BT=()=>{const{t}=bn(),[e,n]=ae.useState(0),i=[{q:t.faq.q1,a:t.faq.a1},{q:t.faq.q2,a:t.faq.a2},{q:t.faq.q3,a:t.faq.a3},{q:t.faq.q4,a:t.faq.a4},{q:t.faq.q5,a:t.faq.a5},{q:t.faq.q6,a:t.faq.a6}],r=s=>{n(e===s?null:s)};return o.jsx("section",{id:"faq",className:"scroll-mt-20 relative w-full bg-brand-deepPurple text-brand-offWhite py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx(Oe,{animation:"fade-up",children:o.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16",children:[o.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs",children:[o.jsx(Oy,{className:"w-3.5 h-3.5 text-brand-cyan"}),o.jsx("span",{children:t.faq.tag})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-4",children:t.faq.headline}),o.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 bg-brand-darkSurface/90 border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs text-left max-w-md mx-auto",children:[o.jsx("img",{src:Ee.mascots.thinking,alt:"NED Teddy thinking",className:"w-9 h-9 object-contain drop-shadow flex-shrink-0",loading:"lazy"}),o.jsx("span",{className:"text-xs sm:text-sm font-bold text-brand-lavender",children:t.mascot.faqTip})]})]})}),o.jsx("div",{className:"space-y-4",children:i.map((s,a)=>{const l=e===a,c=`faq-btn-${a}`,d=`faq-panel-${a}`;return o.jsx(Oe,{animation:"fade-up",delay:a*60,children:o.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl overflow-hidden shadow-brutal transition-all",children:[o.jsxs("button",{id:c,"aria-expanded":l,"aria-controls":d,onClick:()=>r(a),className:"w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-black text-base sm:text-lg text-brand-offWhite hover:text-brand-lavender transition-colors select-none",children:[o.jsxs("span",{className:"flex items-center gap-3",children:[o.jsxs("span",{className:"w-7 h-7 rounded-lg bg-brand-lavender text-brand-inkBlack text-xs font-black flex items-center justify-center flex-shrink-0 border border-brand-inkBlack",children:["Q",a+1]}),o.jsx("span",{children:s.q})]}),o.jsx(Fy,{className:`w-5 h-5 flex-shrink-0 transition-transform duration-200 text-brand-lime ${l?"rotate-180":""}`})]}),l&&o.jsx("div",{id:d,role:"region","aria-labelledby":c,className:"px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base font-medium text-stone-300 leading-relaxed border-t border-brand-lavender/15 animate-in fade-in duration-150",children:s.a})]})},a)})})]})})},FT=({onNavigate:t})=>{const{t:e,lang:n}=bn(),i=n==="vi"?Ee.demoMailBodyVi:Ee.demoMailBodyEn,r=`mailto:${Ee.contactEmail}?subject=${encodeURIComponent(Ee.demoMailSubject)}&body=${encodeURIComponent(i)}`,s=a=>{a.preventDefault(),t("/builders"),window.scrollTo({top:0,behavior:"smooth"})};return o.jsx("section",{className:"relative w-full bg-brand-warmCream py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none",children:o.jsx("div",{className:"max-w-5xl mx-auto",children:o.jsx(Oe,{animation:"pop",children:o.jsxs("div",{className:"bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-14 shadow-brutal-xl text-center relative overflow-hidden",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-6 shadow-brutal-xs",children:[o.jsx(Si,{className:"w-3.5 h-3.5 text-brand-deepPurple"}),o.jsx("span",{children:"N.E.D Wallet • Solana Devnet"})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-4 max-w-2xl mx-auto leading-tight",children:e.finalCta.headline}),o.jsx("p",{className:"text-base sm:text-lg font-bold text-stone-800 leading-relaxed mb-8 max-w-xl mx-auto",children:e.finalCta.description}),o.jsxs("div",{className:"flex items-center justify-center gap-3.5 mb-8",children:[o.jsx("img",{src:Ee.mascots.waving,alt:"NED Teddy waving",className:"w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-md animate-float-slow",loading:"lazy"}),o.jsxs("div",{className:"bg-white/95 border-2 border-brand-inkBlack px-4 py-2 rounded-2xl shadow-brutal-xs text-left max-w-xs sm:max-w-sm",children:[o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-deepPurple",children:"Lời nhắn từ NED Teddy"}),o.jsx("div",{className:"text-xs sm:text-sm font-bold text-brand-inkBlack",children:e.mascot.finalTip})]})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsxs("a",{href:r,className:"btn-brutal-primary px-8 py-4 rounded-2xl text-base font-black flex items-center justify-center gap-2.5 shadow-brutal w-full sm:w-auto cursor-pointer",children:[o.jsx(hu,{className:"w-5 h-5"}),o.jsx("span",{children:e.finalCta.btnPrimary})]}),o.jsxs("button",{type:"button",onClick:s,className:"btn-brutal-secondary px-6 py-4 rounded-2xl text-sm sm:text-base font-black flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto cursor-pointer bg-white text-brand-inkBlack hover:bg-stone-50",children:[o.jsx("span",{children:e.finalCta.builderLink}),o.jsx(yi,{className:"w-4 h-4 text-brand-deepPurple"})]})]})]})})})})},OT=({onNavigate:t})=>o.jsxs("main",{className:"w-full min-h-screen",children:[o.jsx(vT,{onNavigate:t}),o.jsx(bT,{}),o.jsx(_T,{}),o.jsx(yT,{}),o.jsx(ST,{}),o.jsx(IT,{}),o.jsx(UT,{onNavigate:t}),o.jsx(BT,{}),o.jsx(FT,{onNavigate:t})]}),jT=({onNavigate:t})=>{const{t:e}=bn(),n=r=>{r.preventDefault(),t("/developer/dashboard"),window.scrollTo({top:0,behavior:"smooth"})},i=r=>{r.preventDefault();const s=document.querySelector("#journey")||document.querySelector("#architecture");s&&s.scrollIntoView({behavior:"smooth",block:"start"})};return o.jsxs("div",{className:"w-full bg-brand-deepPurple text-brand-offWhite min-h-screen selection:bg-brand-lime selection:text-brand-inkBlack select-none",children:[o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6",children:o.jsxs("button",{onClick:()=>{t("/"),window.scrollTo({top:0,behavior:"smooth"})},className:"inline-flex items-center gap-2 px-4 py-2 bg-brand-darkSurface text-brand-offWhite border-2 border-brand-inkBlack rounded-xl font-bold text-xs shadow-brutal-xs hover:text-brand-lime transition-colors cursor-pointer",children:[o.jsx(Zg,{className:"w-4 h-4"}),o.jsx("span",{children:e.builders.backHome})]})}),o.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-24",children:o.jsx(Oe,{animation:"fade-up",children:o.jsxs("div",{className:"max-w-3xl",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender text-xs font-black uppercase tracking-wider mb-6 shadow-brutal-xs",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse"}),o.jsx("span",{children:e.builders.badgeStatus})]}),o.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black text-brand-offWhite tracking-tight leading-[1.1] mb-6",children:e.builders.headline}),o.jsx("p",{className:"text-lg sm:text-xl text-stone-300 font-medium leading-relaxed mb-6",children:e.builders.subtitle}),o.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2.5 bg-brand-darkSurface border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs mb-8",children:[o.jsx("img",{src:Ee.mascots.proud,alt:"NED Teddy proud",className:"w-9 h-9 object-contain drop-shadow flex-shrink-0",loading:"lazy"}),o.jsx("span",{className:"text-xs sm:text-sm font-bold text-brand-lavender",children:e.mascot.buildersTip})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-4",children:[o.jsxs("a",{href:"/developer/dashboard",onClick:n,className:"btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2.5 shadow-brutal cursor-pointer",children:[o.jsx(uu,{className:"w-5 h-5"}),o.jsx("span",{children:e.builders.btnDashboard}),o.jsx(yi,{className:"w-4 h-4 text-brand-lime"})]}),o.jsxs("a",{href:"#journey",onClick:i,className:"btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer bg-white text-brand-inkBlack hover:bg-stone-50",children:[o.jsx(kp,{className:"w-5 h-5 text-brand-deepPurple"}),o.jsx("span",{children:e.builders.btnDocs})]})]})]})})}),o.jsx("section",{className:"w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y-4 border-brand-inkBlack",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsx(Oe,{animation:"fade-up",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[o.jsxs("div",{className:"lg:col-span-7",children:[o.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs",children:o.jsx("span",{children:"Kiến trúc định hướng"})}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-brand-inkBlack tracking-tight mb-4",children:e.builders.explainTitle}),o.jsx("p",{className:"text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6",children:e.builders.explainDesc}),o.jsxs("div",{className:"p-4 bg-white border-2 border-brand-inkBlack rounded-2xl shadow-brutal-xs flex items-center gap-3",children:[o.jsx(uv,{className:"w-5 h-5 text-amber-700 flex-shrink-0"}),o.jsx("span",{className:"text-xs sm:text-sm font-bold text-stone-700",children:e.builders.explainNote})]})]}),o.jsx("div",{className:"lg:col-span-5 flex justify-center",children:o.jsxs("div",{className:"w-full max-w-sm bg-white border-4 border-brand-inkBlack rounded-3xl p-6 shadow-brutal-xl",children:[o.jsx("div",{className:"text-xs font-black uppercase tracking-wider text-stone-500 mb-4 pb-2 border-b-2 border-brand-inkBlack",children:"Sơ đồ Kiến trúc Sandbox"}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:"p-3 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs",children:[o.jsx("span",{children:"N.E.D Wallet Host UI"}),o.jsx("span",{className:"text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack",children:"Ví chủ"})]}),o.jsxs("div",{className:"p-4 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-2xl font-black text-sm text-center shadow-brutal-xs",children:[o.jsx("div",{className:"text-[10px] text-stone-500 uppercase font-black mb-1",children:"Sandbox Web Container"}),o.jsx("div",{className:"text-brand-inkBlack",children:"DApp Độc Lập của Builder"}),o.jsx("div",{className:"text-[10px] text-stone-600 font-bold mt-1",children:"Tự lưu trữ • Khai báo URL qua Dashboard"})]}),o.jsxs("div",{className:"p-3 bg-brand-cyan border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs",children:[o.jsx("span",{children:"Solana Devnet Settlement"}),o.jsx("span",{className:"text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack",children:"USDC"})]})]})]})})]})})})}),o.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24",children:[o.jsx(Oe,{animation:"fade-up",children:o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[o.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-brand-offWhite tracking-tight mb-3",children:e.builders.valuesTitle}),o.jsx("p",{className:"text-sm sm:text-base text-stone-300 font-medium",children:"Mục tiêu định hướng nền tảng nhằm đem lại lợi ích song hành cho cả người dùng và đối tác phát triển."})]})}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[o.jsx(Oe,{animation:"fade-up",delay:0,className:"h-full",children:o.jsxs("div",{className:"h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-8 shadow-brutal card-brutal-interactive",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx(eS,{className:"w-6 h-6"})}),o.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.builders.val1Title}),o.jsx("p",{className:"text-sm sm:text-base font-medium text-stone-300 leading-relaxed",children:e.builders.val1Desc})]})}),o.jsx(Oe,{animation:"fade-up",delay:140,className:"h-full",children:o.jsxs("div",{className:"h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-8 shadow-brutal card-brutal-interactive",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs",children:o.jsx(nv,{className:"w-6 h-6"})}),o.jsx("h3",{className:"text-xl font-black text-brand-offWhite mb-3",children:e.builders.val2Title}),o.jsx("p",{className:"text-sm sm:text-base font-medium text-stone-300 leading-relaxed",children:e.builders.val2Desc})]})})]})]}),o.jsx("section",{id:"journey",className:"w-full bg-brand-darkSurface text-brand-offWhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-4 border-brand-inkBlack",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx(Oe,{animation:"fade-up",children:o.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[o.jsx("div",{className:"inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs",children:o.jsx("span",{children:e.builders.journeyBadge})}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-black tracking-tight mb-3",children:e.builders.journeyTitle}),o.jsx("p",{className:"text-xs sm:text-sm text-stone-400 font-bold",children:e.builders.journeyNotice})]})}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6",children:[o.jsx(Oe,{animation:"fade-up",delay:0,className:"h-full",children:o.jsxs("div",{className:"h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack font-black flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs mb-5",children:o.jsx(Qy,{className:"w-6 h-6"})}),o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lavender mb-1",children:"Bước 01"}),o.jsx("h3",{className:"text-xl font-black mb-2.5 text-brand-offWhite",children:e.builders.step1Title}),o.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step1Desc})]}),o.jsxs("div",{className:"mt-6 pt-4 border-t border-brand-lavender/20 flex items-center gap-2 text-xs font-bold text-stone-400",children:[o.jsx(Zh,{className:"w-3.5 h-3.5 text-brand-lime"}),o.jsx("span",{children:"Chủ động hạ tầng & dữ liệu"})]})]})}),o.jsx(Oe,{animation:"fade-up",delay:120,className:"h-full",children:o.jsxs("div",{className:"h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack font-black flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs mb-5",children:o.jsx(ga,{className:"w-6 h-6"})}),o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-cyan mb-1",children:"Bước 02"}),o.jsx("h3",{className:"text-xl font-black mb-2.5 text-brand-offWhite",children:e.builders.step2Title}),o.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step2Desc})]}),o.jsxs("div",{className:"mt-6 pt-4 border-t border-brand-cyan/20 flex items-center gap-2 text-xs font-bold text-stone-400",children:[o.jsx(uu,{className:"w-3.5 h-3.5 text-brand-cyan"}),o.jsx("span",{children:"Khai báo qua Dashboard"})]})]})}),o.jsx(Oe,{animation:"fade-up",delay:240,className:"h-full",children:o.jsxs("div",{className:"h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack font-black flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs mb-5",children:o.jsx(On,{className:"w-6 h-6"})}),o.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-brand-lime mb-1",children:"Bước 03"}),o.jsx("h3",{className:"text-xl font-black mb-2.5 text-brand-offWhite",children:e.builders.step3Title}),o.jsx("p",{className:"text-sm font-medium text-stone-300 leading-relaxed",children:e.builders.step3Desc})]}),o.jsxs("div",{className:"mt-6 pt-4 border-t border-brand-lime/20 flex items-center gap-2 text-xs font-bold text-stone-400",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-pulse"}),o.jsx("span",{children:"Phê duyệt & phân phối tự động"})]})]})})]})]})}),o.jsx("section",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24",children:o.jsx(Oe,{animation:"pop",delay:100,children:o.jsxs("div",{className:"bg-brand-lime text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-12 shadow-brutal-xl text-center",children:[o.jsx("div",{className:"flex justify-center mb-4",children:o.jsx("img",{src:Ee.mascots.waving,alt:"NED Teddy waving",className:"w-16 h-16 object-contain drop-shadow",loading:"lazy"})}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-black tracking-tight mb-4",children:e.builders.ctaHeadline}),o.jsx("p",{className:"text-base sm:text-lg font-bold text-stone-800 max-w-2xl mx-auto mb-8",children:e.builders.ctaDesc}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsxs("a",{href:"/developer/dashboard",onClick:n,className:"btn-brutal-primary bg-brand-deepPurple text-brand-offWhite px-8 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2.5 shadow-brutal w-full sm:w-auto cursor-pointer hover:bg-brand-deepPurple/90",children:[o.jsx(ga,{className:"w-5 h-5 text-brand-lime"}),o.jsx("span",{children:e.builders.ctaSubmit}),o.jsx(yi,{className:"w-5 h-5 text-brand-lime"})]}),o.jsxs("a",{href:"#journey",onClick:i,className:"btn-brutal-secondary bg-white text-brand-inkBlack px-7 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto cursor-pointer hover:bg-stone-50",children:[o.jsx(kp,{className:"w-5 h-5 text-brand-deepPurple"}),o.jsx("span",{children:e.builders.btnDocs})]})]})]})})})]})},zT=({onNavigate:t})=>{const{lang:e}=bn(),[n,i]=ae.useState("submit"),[r,s]=ae.useState(""),[a,l]=ae.useState(""),[c,d]=ae.useState(""),[u,f]=ae.useState("Payment & POS"),[h,x]=ae.useState(""),[g,_]=ae.useState(!1),[m,p]=ae.useState(!1),[b,v]=ae.useState([{id:"app-1",name:"Solana Pay Merchant",url:"https://pay.nedwallet.io",logo:Ee.screenshots.miniappsHub,category:"Thanh toán / POS",description:"Quét mã QR chấp nhận thanh toán USDC/SOL tại điểm bán, tự động đối soát giao dịch.",status:"approved",submittedAt:"12/09/2026"},{id:"app-2",name:"Lucky Coin Flip Room",url:"https://coin.nedwallet.io",logo:Ee.screenshots.luckyCoin,category:"Gaming & Lì Xì",description:"Phòng tung đồng xu may mắn chia lì xì và quà tặng on-chain trên Solana Devnet.",status:"approved",submittedAt:"14/09/2026"},{id:"app-3",name:"Web3 Gift Cards Hub",url:"https://giftcards.nedwallet.io",logo:Ee.screenshots.miniappsHub,category:"Đời sống & Tiện ích",description:"Mua voucher ăn uống, di chuyển và nạp thẻ cào điện thoại bằng stablecoin không cần KYC.",status:"approved",submittedAt:"16/09/2026"}]),S=N=>{N.preventDefault(),!(!r||!a)&&(_(!0),setTimeout(()=>{const C={id:`app-${Date.now()}`,name:r,url:a.startsWith("http")?a:`https://${a}`,logo:c||Ee.screenshots.miniappsHub,category:u,description:h||"DApp độc lập tích hợp qua N.E.D Developer Portal.",status:"reviewing",submittedAt:"Vừa xong"};v([C,...b]),_(!1),p(!0),s(""),l(""),d(""),x(""),setTimeout(()=>{p(!1),i("projects")},1800)},800))};return o.jsxs("div",{className:"w-full bg-brand-deepPurple text-brand-offWhite min-h-screen selection:bg-brand-lime selection:text-brand-inkBlack select-none pb-24",children:[o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsxs("button",{onClick:()=>{t("/builders"),window.scrollTo({top:0,behavior:"smooth"})},className:"inline-flex items-center gap-2 px-4 py-2 bg-brand-darkSurface text-brand-offWhite border-2 border-brand-inkBlack rounded-xl font-bold text-xs shadow-brutal-xs hover:text-brand-lime transition-colors cursor-pointer",children:[o.jsx(Zg,{className:"w-4 h-4"}),o.jsx("span",{children:e==="vi"?"Trang Builder":"Builder Home"})]}),o.jsx("button",{onClick:()=>{t("/"),window.scrollTo({top:0,behavior:"smooth"})},className:"hidden sm:inline-flex items-center gap-2 px-3.5 py-2 bg-brand-darkSurface/60 text-stone-400 border border-brand-inkBlack rounded-xl font-bold text-xs hover:text-white transition-colors cursor-pointer",children:o.jsx("span",{children:e==="vi"?"Về trang chủ ví":"Home"})})]}),o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 bg-brand-lime text-brand-inkBlack border-2 border-brand-inkBlack rounded-full font-black text-xs shadow-brutal-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-inkBlack animate-pulse"}),o.jsx("span",{children:"Developer Portal • Solana Devnet"})]})]}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6",children:o.jsx(Oe,{animation:"fade-up",children:o.jsxs("div",{className:"bg-brand-darkSurface border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-lavender text-brand-inkBlack font-black text-xs uppercase mb-3 border border-brand-inkBlack",children:[o.jsx(uu,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"N.E.D Developer Dashboard"})]}),o.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-2",children:e==="vi"?"Quản lý & Submit Mini-DApp":"Submit & Manage Mini-DApps"}),o.jsx("p",{className:"text-sm sm:text-base text-stone-300 font-medium max-w-2xl",children:e==="vi"?"Phát triển DApp độc lập, tự lưu trữ và khai báo thông tin trực tiếp để tự động tích hợp lên hệ sinh thái N.E.D Wallet.":"Build independent self-hosted DApps, declare metadata, and distribute automatically on N.E.D Wallet."})]}),o.jsxs("div",{className:"flex items-center gap-3 bg-brand-deepPurple/80 border-2 border-brand-lavender/40 px-4 py-3 rounded-2xl shadow-brutal-xs flex-shrink-0",children:[o.jsx("img",{src:Ee.mascots.proud,alt:"NED Teddy Proud",className:"w-12 h-12 object-contain drop-shadow flex-shrink-0"}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-[11px] font-black uppercase text-brand-lime",children:"NED Teddy"}),o.jsx("div",{className:"text-xs font-bold text-stone-200",children:e==="vi"?"Duyệt tự động trong vài phút!":"Automated approval in minutes!"})]})]})]})})}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8",children:o.jsxs("div",{className:"flex flex-wrap items-center gap-3 border-b-2 border-brand-lavender/20 pb-4",children:[o.jsxs("button",{type:"button",onClick:()=>i("submit"),className:`px-5 py-2.5 rounded-2xl font-black text-sm flex items-center gap-2 border-2 border-brand-inkBlack transition-all cursor-pointer ${n==="submit"?"bg-brand-lime text-brand-inkBlack shadow-brutal-xs scale-105":"bg-brand-darkSurface text-stone-300 hover:text-white hover:bg-stone-800"}`,children:[o.jsx(ga,{className:"w-4 h-4"}),o.jsx("span",{children:e==="vi"?"1. Submit Mini-DApp Mới":"1. Submit New DApp"})]}),o.jsxs("button",{type:"button",onClick:()=>i("projects"),className:`px-5 py-2.5 rounded-2xl font-black text-sm flex items-center gap-2 border-2 border-brand-inkBlack transition-all cursor-pointer ${n==="projects"?"bg-brand-cyan text-brand-inkBlack shadow-brutal-xs scale-105":"bg-brand-darkSurface text-stone-300 hover:text-white hover:bg-stone-800"}`,children:[o.jsx(Tv,{className:"w-4 h-4"}),o.jsx("span",{children:e==="vi"?"2. Dự Án Đã Lên Sóng":"2. Live Projects"}),o.jsx("span",{className:"bg-brand-deepPurple text-brand-offWhite px-2 py-0.5 rounded-full text-xs font-black",children:b.length})]}),o.jsxs("button",{type:"button",onClick:()=>i("docs"),className:`px-5 py-2.5 rounded-2xl font-black text-sm flex items-center gap-2 border-2 border-brand-inkBlack transition-all cursor-pointer ${n==="docs"?"bg-brand-lavender text-brand-inkBlack shadow-brutal-xs scale-105":"bg-brand-darkSurface text-stone-300 hover:text-white hover:bg-stone-800"}`,children:[o.jsx(jy,{className:"w-4 h-4"}),o.jsx("span",{children:e==="vi"?"3. Tài Liệu Tích Hợp API":"3. API & Sandbox Docs"})]})]})}),n==="submit"&&o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[o.jsxs("div",{className:"lg:col-span-7 bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal",children:[o.jsxs("div",{className:"flex items-center justify-between mb-6 pb-4 border-b border-brand-lavender/20",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl sm:text-2xl font-black text-brand-offWhite",children:e==="vi"?"Khai báo thông tin Mini-DApp":"Submit DApp Metadata"}),o.jsx("p",{className:"text-xs sm:text-sm text-stone-400 font-medium mt-1",children:e==="vi"?"Bước 02 trong quy trình: Khai báo URL, Logo và Mô tả thông qua Dashboard của N.E.D.":"Step 02: Declare URL, Logo and Description through N.E.D Dashboard."})]}),o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs",children:"02"})]}),m&&o.jsxs("div",{className:"mb-6 p-4 bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200 rounded-2xl font-bold text-sm flex items-center gap-3 animate-in fade-in",children:[o.jsx(On,{className:"w-5 h-5 text-emerald-400 flex-shrink-0"}),o.jsx("span",{children:e==="vi"?"Submit thành công! Dự án của bạn đang được hệ thống Sandbox tự động kiểm duyệt.":"Submission received! Your project is now running through automated Sandbox review."})]}),o.jsxs("form",{onSubmit:S,className:"space-y-5",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-black uppercase text-brand-lavender mb-2",children:e==="vi"?"Tên Ứng Dụng (App Name) *":"App Name *"}),o.jsx("input",{type:"text",required:!0,placeholder:"Ví dụ: Jupiter Swap Lite, Coffee Pay, v.v.",value:r,onChange:N=>s(N.target.value),className:"w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-black uppercase text-brand-lavender mb-2",children:e==="vi"?"URL DApp (HTTPS) *":"DApp Web URL (HTTPS) *"}),o.jsx("input",{type:"url",required:!0,placeholder:"https://my-dapp.com",value:a,onChange:N=>l(N.target.value),className:"w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"}),o.jsx("span",{className:"text-[11px] text-stone-400 mt-1 block",children:e==="vi"?"Bước 01: Mã nguồn do bạn tự host độc lập.":"Step 01: Self-hosted independently."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-black uppercase text-brand-lavender mb-2",children:e==="vi"?"Logo URL (Icon PNG/SVG)":"Icon/Logo URL (PNG/SVG)"}),o.jsx("input",{type:"url",placeholder:"https://my-dapp.com/logo.png",value:c,onChange:N=>d(N.target.value),className:"w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-black uppercase text-brand-lavender mb-2",children:e==="vi"?"Danh mục Ứng Dụng":"Category"}),o.jsxs("select",{value:u,onChange:N=>f(N.target.value),className:"w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs",children:[o.jsx("option",{value:"Payment & POS",children:"Thanh toán tại quầy (POS) & Mã QR"}),o.jsx("option",{value:"DeFi & Swap",children:"Hoán đổi Token & DeFi (Jupiter/Raydium)"}),o.jsx("option",{value:"Micro Savings",children:"Tiết kiệm vi mô & Sinh lời theo block"}),o.jsx("option",{value:"Gaming & Lì Xì",children:"Minigame, Lì xì & Cộng đồng"}),o.jsx("option",{value:"Lifestyle",children:"Thẻ quà tặng, Tiện ích sống & Voucher"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-black uppercase text-brand-lavender mb-2",children:e==="vi"?"Mô tả ngắn trải nghiệm":"Short Description"}),o.jsx("textarea",{rows:3,placeholder:"Mô tả chức năng chính người dùng sẽ trải nghiệm bên trong N.E.D Wallet...",value:h,onChange:N=>x(N.target.value),className:"w-full px-4 py-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl text-brand-offWhite font-bold text-sm focus:outline-none focus:border-brand-lime shadow-brutal-xs"})]}),o.jsxs("div",{className:"p-4 bg-brand-deepPurple/70 border-2 border-brand-inkBlack rounded-2xl flex items-start gap-3",children:[o.jsx(kl,{className:"w-5 h-5 text-brand-lime flex-shrink-0 mt-0.5"}),o.jsx("div",{className:"text-xs font-bold text-stone-300 leading-relaxed",children:e==="vi"?"DApp của bạn sẽ chạy trong Sandbox biệt lập. Người dùng tương tác ký giao dịch Solana qua Native Bridge an toàn không để lộ Private Key.":"Your DApp runs inside an isolated Sandbox. User transactions are securely signed via Native Bridge without seedphrase exposure."})]}),o.jsxs("button",{type:"submit",disabled:g,className:"w-full btn-brutal-primary py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal cursor-pointer disabled:opacity-50",children:[o.jsx(ga,{className:"w-5 h-5"}),o.jsx("span",{children:g?e==="vi"?"Đang gửi thông tin...":"Submitting...":e==="vi"?"Bắt đầu Submit Dự án lên N.E.D":"Submit DApp for Review"})]})]})]}),o.jsxs("div",{className:"lg:col-span-5 space-y-5",children:[o.jsxs("div",{className:"bg-brand-lavender text-brand-inkBlack border-3 border-brand-inkBlack rounded-3xl p-6 shadow-brutal",children:[o.jsx("div",{className:"text-xs font-black uppercase text-stone-700 mb-1",children:e==="vi"?"Quy trình kiểm duyệt":"Review Lifecycle"}),o.jsx("h3",{className:"text-xl font-black mb-3",children:e==="vi"?"Sau khi Submit sẽ diễn ra điều gì?":"What happens after submit?"}),o.jsxs("div",{className:"space-y-3 text-xs sm:text-sm font-bold text-stone-800",children:[o.jsxs("div",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"w-5 h-5 rounded-full bg-brand-inkBlack text-white flex items-center justify-center text-[10px] flex-shrink-0",children:"1"}),o.jsx("span",{children:"Hệ thống tự động ping kiểm tra chứng chỉ SSL và giao thức Sandbox của URL bạn gửi."})]}),o.jsxs("div",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"w-5 h-5 rounded-full bg-brand-inkBlack text-white flex items-center justify-center text-[10px] flex-shrink-0",children:"2"}),o.jsx("span",{children:"Tạo bản xem trước tức thì trên môi trường N.E.D Wallet Solana Devnet."})]}),o.jsxs("div",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"w-5 h-5 rounded-full bg-brand-lime text-brand-inkBlack flex items-center justify-center text-[10px] flex-shrink-0",children:"3"}),o.jsx("span",{children:"Khi được Approve, Mini-DApp tự động xuất hiện trong Hub của hàng ngàn người dùng ví!"})]})]})]}),o.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 shadow-brutal",children:[o.jsx("div",{className:"text-xs font-black uppercase text-brand-cyan mb-2",children:e==="vi"?"Mẫu hiển thị trong ví":"In-Wallet Preview"}),o.jsxs("div",{className:"p-3 bg-brand-deepPurple border-2 border-brand-inkBlack rounded-2xl flex items-center gap-3",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-brand-lime text-brand-inkBlack font-black flex items-center justify-center flex-shrink-0 border border-brand-inkBlack",children:r?r.slice(0,2).toUpperCase():"NED"}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("div",{className:"text-sm font-black text-brand-offWhite truncate",children:r||"Tên DApp của bạn"}),o.jsx("div",{className:"text-[11px] font-bold text-brand-lavender",children:u}),o.jsx("div",{className:"text-[10px] text-stone-400 truncate",children:a||"https://my-dapp.com"})]}),o.jsx("span",{className:"px-2 py-1 rounded bg-brand-lime/20 border border-brand-lime text-brand-lime text-[10px] font-black",children:"Preview"})]})]})]})]})}),n==="projects"&&o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal mb-8",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-lavender/20",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-black text-brand-offWhite",children:e==="vi"?"Danh Sách Dự Án Đã Khai Báo":"Submitted Mini-DApps"}),o.jsx("p",{className:"text-xs sm:text-sm text-stone-400 font-medium",children:e==="vi"?"Theo dõi trạng thái kiểm duyệt realtime và phân phối trên N.E.D Hub.":"Real-time review and distribution status on N.E.D Hub."})]}),o.jsxs("button",{type:"button",onClick:()=>i("submit"),className:"btn-brutal-primary px-4 py-2.5 rounded-xl font-black text-xs flex items-center gap-1.5 shadow-brutal-xs",children:[o.jsx(ga,{className:"w-4 h-4"}),o.jsx("span",{children:e==="vi"?"Submit thêm DApp":"Submit Another"})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:b.map(N=>o.jsxs("div",{className:"bg-brand-deepPurple border-3 border-brand-inkBlack rounded-2xl p-5 shadow-brutal flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-start justify-between gap-3 mb-3",children:[o.jsx("div",{className:"w-12 h-12 rounded-xl bg-brand-darkSurface border-2 border-brand-inkBlack overflow-hidden flex items-center justify-center p-1",children:o.jsx("img",{src:N.logo,alt:N.name,className:"w-full h-full object-cover rounded-lg"})}),N.status==="approved"?o.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-400 text-emerald-300 font-black text-[10px]",children:[o.jsx(On,{className:"w-3 h-3"}),o.jsx("span",{children:"Approved • Live"})]}):o.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-950 border border-amber-400 text-amber-300 font-black text-[10px]",children:[o.jsx(mv,{className:"w-3 h-3 animate-spin"}),o.jsx("span",{children:"Reviewing • Sandbox"})]})]}),o.jsx("h3",{className:"text-lg font-black text-brand-offWhite mb-1",children:N.name}),o.jsx("div",{className:"text-[11px] font-bold text-brand-cyan mb-2",children:N.category}),o.jsx("p",{className:"text-xs font-medium text-stone-300 leading-relaxed line-clamp-2 mb-4",children:N.description})]}),o.jsxs("div",{className:"pt-3 border-t border-brand-lavender/15 flex items-center justify-between text-[11px] font-bold text-stone-400",children:[o.jsxs("span",{className:"flex items-center gap-1 truncate max-w-[160px]",children:[o.jsx(Zh,{className:"w-3 h-3 text-brand-lime flex-shrink-0"}),o.jsx("span",{className:"truncate",children:N.url})]}),o.jsx("span",{children:N.submittedAt})]})]},N.id))})]})}),n==="docs"&&o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal space-y-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cyan text-brand-inkBlack rounded-lg font-black text-xs uppercase mb-2 border border-brand-inkBlack",children:[o.jsx(Zy,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"N.E.D Sandbox API Specification"})]}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-brand-offWhite",children:e==="vi"?"Tài Liệu Tích Hợp Sandbox & PostMessage Bridge":"Sandbox Integration & Bridge Protocol"}),o.jsx("p",{className:"text-sm font-medium text-stone-300 mt-1",children:e==="vi"?"Hướng dẫn nhúng DApp của bạn vào N.E.D Wallet mà không cần chỉnh sửa sâu kiến trúc Web3 hiện có.":"Guide to integrating your DApp into N.E.D Wallet with zero-friction Solana standard hooks."})]}),o.jsxs("div",{className:"bg-black/80 border-2 border-brand-inkBlack rounded-2xl p-5 font-mono text-xs text-stone-200 overflow-x-auto shadow-brutal-xs",children:[o.jsx("div",{className:"text-brand-lime font-black mb-2",children:"// 1. Lắng nghe kết nối từ N.E.D Wallet Bridge"}),o.jsx("pre",{className:"text-stone-300",children:`window.addEventListener('message', (event) => {
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
}, '*');`})]}),o.jsxs("div",{className:"p-4 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-between gap-4",children:[o.jsxs("div",{children:[o.jsx("div",{className:"font-black",children:"Cần hỗ trợ kỹ thuật chuyên sâu?"}),o.jsx("div",{children:"Đội ngũ kỹ thuật N.E.D luôn sẵn sàng hỗ trợ trực tiếp qua Devnet Support Group."})]}),o.jsx("button",{type:"button",onClick:()=>i("submit"),className:"btn-brutal-dark px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1 flex-shrink-0 cursor-pointer",children:o.jsx("span",{children:e==="vi"?"Submit DApp ngay":"Submit DApp"})})]})]})})]})},HT=()=>{const[t,e]=ae.useState(()=>window.location.pathname.startsWith("/developer")?"/developer/dashboard":window.location.pathname.startsWith("/builders")?"/builders":"/");ae.useEffect(()=>{const i=()=>{window.location.pathname.startsWith("/developer")?e("/developer/dashboard"):window.location.pathname.startsWith("/builders")?e("/builders"):e("/")};return window.addEventListener("popstate",i),()=>window.removeEventListener("popstate",i)},[]);const n=i=>{i.startsWith("#")||i!==t&&(window.history.pushState({},"",i),e(i))};return o.jsx(My,{children:o.jsxs("div",{className:"flex flex-col min-h-screen bg-brand-deepPurple font-sans text-brand-inkBlack selection:bg-brand-lime selection:text-brand-inkBlack",children:[o.jsx(iS,{currentPath:t,onNavigate:n}),o.jsx("div",{className:"flex-grow",children:t==="/developer/dashboard"?o.jsx(zT,{onNavigate:n}):t==="/builders"?o.jsx(jT,{onNavigate:n}):o.jsx(OT,{onNavigate:n})}),o.jsx(rS,{currentPath:t,onNavigate:n})]})})};xd.createRoot(document.getElementById("root")).render(o.jsx(Et.StrictMode,{children:o.jsx(HT,{})}));
