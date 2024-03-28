function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Cart-C7vo4ESI.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/Cart-BQN5l9Zj.css","assets/Home-BayGXlP5.js","assets/Navbar-SVwsBhKZ.js","assets/Navbar-DUG4dhbX.css","assets/Home-DuC61_yD.css","assets/Login-Br3aNnyp.js","assets/Login-JK-Npe6C.css","assets/Menu-D4DL7A66.js","assets/Products-Ba9rr0Qz.js","assets/dash-BYmBszUU.js","assets/Products-R96iJfaC.css","assets/Menu-Qeg1gQu8.css","assets/OrderConfirmation-CnP_rvIb.js","assets/OrderConfirmation-DEz_mIH9.css","assets/Queue-BvlssvDu.js","assets/Queue-BIB16Uf3.css","assets/Registration-BUo5pqYK.js","assets/Registration-Bewkhl2Z.css","assets/Staff-Cv4qUPDZ.js","assets/Staff-BEv_swHR.css","assets/StaffLogin-DgiWAOGf.js","assets/StaffLogin-B-TmqzZ-.css","assets/ViewProducts-BCHjHqWr.js","assets/ViewProducts-DLXVcpBG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rs(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ae={},En=[],Oe=()=>{},Rf=()=>!1,wr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xi=t=>t.startsWith("onUpdate:"),pe=Object.assign,Qi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pf=Object.prototype.hasOwnProperty,se=(t,e)=>Pf.call(t,e),j=Array.isArray,wn=t=>Vn(t)==="[object Map]",dn=t=>Vn(t)==="[object Set]",Jo=t=>Vn(t)==="[object Date]",Of=t=>Vn(t)==="[object RegExp]",Y=t=>typeof t=="function",ge=t=>typeof t=="string",Ft=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Zi=t=>(ue(t)||Y(t))&&Y(t.then)&&Y(t.catch),kc=Object.prototype.toString,Vn=t=>kc.call(t),kf=t=>Vn(t).slice(8,-1),Nc=t=>Vn(t)==="[object Object]",eo=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,In=Rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ps=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nf=/-(\w)/g,Re=Ps(t=>t.replace(Nf,(e,n)=>n?n.toUpperCase():"")),Lf=/\B([A-Z])/g,Fe=Ps(t=>t.replace(Lf,"-$1").toLowerCase()),Ir=Ps(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zn=Ps(t=>t?`on${Ir(t)}`:""),qe=(t,e)=>!Object.is(t,e),Tn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},as=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},cs=t=>{const e=ge(t)?Number(t):NaN;return isNaN(e)?t:e};let Yo;const Lc=()=>Yo||(Yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Df="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Mf=Rs(Df);function Tr(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ge(r)?Bf(r):Tr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ge(t)||ue(t))return t}const xf=/;(?![^(]*\))/g,Uf=/:([^]+)/,Ff=/\/\*[^]*?\*\//g;function Bf(t){const e={};return t.replace(Ff,"").split(xf).forEach(n=>{if(n){const r=n.split(Uf);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cr(t){let e="";if(ge(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=Cr(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function $f(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ge(e)&&(t.class=Cr(e)),n&&(t.style=Tr(n)),t}const Vf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hf=Rs(Vf);function Dc(t){return!!t||t===""}function jf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Bt(t[r],e[r]);return n}function Bt(t,e){if(t===e)return!0;let n=Jo(t),r=Jo(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ft(t),r=Ft(e),n||r)return t===e;if(n=j(t),r=j(e),n||r)return n&&r?jf(t,e):!1;if(n=ue(t),r=ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Bt(t[o],e[o]))return!1}}return String(t)===String(e)}function Os(t,e){return t.findIndex(n=>Bt(n,e))}const Wf=t=>ge(t)?t:t==null?"":j(t)||ue(t)&&(t.toString===kc||!Y(t.toString))?JSON.stringify(t,Mc,2):String(t),Mc=(t,e)=>e&&e.__v_isRef?Mc(t,e.value):wn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Qs(r,i)+" =>"]=s,n),{})}:dn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qs(n))}:Ft(e)?Qs(e):ue(e)&&!j(e)&&!Nc(e)?String(e):e,Qs=(t,e="")=>{var n;return Ft(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class to{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Kf(t){return new to(t)}function xc(t,e=xe){e&&e.active&&e.effects.push(t)}function Uc(){return xe}function Gf(t){xe&&xe.cleanups.push(t)}let Yt;class Dn{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,xc(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,hn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(zf(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),pn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Lt,n=Yt;try{return Lt=!0,Yt=this,this._runnings++,Xo(this),this.fn()}finally{Qo(this),this._runnings--,Yt=n,Lt=e}}stop(){var e;this.active&&(Xo(this),Qo(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function zf(t){return t.value}function Xo(t){t._trackId++,t._depsLength=0}function Qo(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Fc(t.deps[e],t);t.deps.length=t._depsLength}}function Fc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function qf(t,e){t.effect instanceof Dn&&(t=t.effect.fn);const n=new Dn(t,Oe,()=>{n.dirty&&n.run()});e&&(pe(n,e),e.scope&&xc(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function Jf(t){t.effect.stop()}let Lt=!0,yi=0;const Bc=[];function hn(){Bc.push(Lt),Lt=!1}function pn(){const t=Bc.pop();Lt=t===void 0?!0:t}function no(){yi++}function ro(){for(yi--;!yi&&vi.length;)vi.shift()()}function $c(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Fc(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const vi=[];function Vc(t,e,n){no();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&vi.push(r.scheduler)))}ro()}const Hc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ls=new WeakMap,Xt=Symbol(""),bi=Symbol("");function Ne(t,e,n){if(Lt&&Yt){let r=ls.get(t);r||ls.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Hc(()=>r.delete(n))),$c(Yt,s)}}function ut(t,e,n,r,s,i){const o=ls.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Ft(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?eo(n)&&a.push(o.get("length")):(a.push(o.get(Xt)),wn(t)&&a.push(o.get(bi)));break;case"delete":j(t)||(a.push(o.get(Xt)),wn(t)&&a.push(o.get(bi)));break;case"set":wn(t)&&a.push(o.get(Xt));break}no();for(const c of a)c&&Vc(c,4);ro()}function Yf(t,e){var n;return(n=ls.get(t))==null?void 0:n.get(e)}const Xf=Rs("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ft)),Zo=Qf();function Qf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)Ne(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hn(),no();const r=re(this)[e].apply(this,n);return ro(),pn(),r}}),t}function Zf(t){const e=re(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class Wc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Yc:Jc:i?qc:zc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=j(e);if(!s){if(o&&se(Zo,n))return Reflect.get(Zo,n,r);if(n==="hasOwnProperty")return Zf}const a=Reflect.get(e,n,r);return(Ft(n)?jc.has(n):Xf(n))||(s||Ne(e,"get",n),i)?a:we(a)?o&&eo(n)?a:a.value:ue(a)?s?oo(a):Sr(a):a}}class Kc extends Wc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=nn(i);if(!lr(r)&&!nn(r)&&(i=re(i),r=re(r)),!j(e)&&we(i)&&!we(r))return c?!1:(i.value=r,!0)}const o=j(e)&&eo(n)?Number(n)<e.length:se(e,n),a=Reflect.set(e,n,r,s);return e===re(s)&&(o?qe(r,i)&&ut(e,"set",n,r):ut(e,"add",n,r)),a}deleteProperty(e,n){const r=se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ut(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ft(n)||!jc.has(n))&&Ne(e,"has",n),r}ownKeys(e){return Ne(e,"iterate",j(e)?"length":Xt),Reflect.ownKeys(e)}}class Gc extends Wc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ed=new Kc,td=new Gc,nd=new Kc(!0),rd=new Gc(!0),so=t=>t,ks=t=>Reflect.getPrototypeOf(t);function Vr(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);n||(qe(e,i)&&Ne(s,"get",e),Ne(s,"get",i));const{has:o}=ks(s),a=r?so:n?lo:ur;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Hr(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return e||(qe(t,s)&&Ne(r,"has",t),Ne(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function jr(t,e=!1){return t=t.__v_raw,!e&&Ne(re(t),"iterate",Xt),Reflect.get(t,"size",t)}function ea(t){t=re(t);const e=re(this);return ks(e).has.call(e,t)||(e.add(t),ut(e,"add",t,t)),this}function ta(t,e){e=re(e);const n=re(this),{has:r,get:s}=ks(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?qe(e,o)&&ut(n,"set",t,e):ut(n,"add",t,e),this}function na(t){const e=re(this),{has:n,get:r}=ks(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ut(e,"delete",t,void 0),i}function ra(){const t=re(this),e=t.size!==0,n=t.clear();return e&&ut(t,"clear",void 0,void 0),n}function Wr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?so:t?lo:ur;return!t&&Ne(a,"iterate",Xt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Kr(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=wn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?so:e?lo:ur;return!e&&Ne(i,"iterate",c?bi:Xt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function yt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function sd(){const t={get(i){return Vr(this,i)},get size(){return jr(this)},has:Hr,add:ea,set:ta,delete:na,clear:ra,forEach:Wr(!1,!1)},e={get(i){return Vr(this,i,!1,!0)},get size(){return jr(this)},has:Hr,add:ea,set:ta,delete:na,clear:ra,forEach:Wr(!1,!0)},n={get(i){return Vr(this,i,!0)},get size(){return jr(this,!0)},has(i){return Hr.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Wr(!0,!1)},r={get(i){return Vr(this,i,!0,!0)},get size(){return jr(this,!0)},has(i){return Hr.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Wr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Kr(i,!1,!1),n[i]=Kr(i,!0,!1),e[i]=Kr(i,!1,!0),r[i]=Kr(i,!0,!0)}),[t,n,e,r]}const[id,od,ad,cd]=sd();function Ns(t,e){const n=e?t?cd:ad:t?od:id;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const ld={get:Ns(!1,!1)},ud={get:Ns(!1,!0)},fd={get:Ns(!0,!1)},dd={get:Ns(!0,!0)},zc=new WeakMap,qc=new WeakMap,Jc=new WeakMap,Yc=new WeakMap;function hd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pd(t){return t.__v_skip||!Object.isExtensible(t)?0:hd(kf(t))}function Sr(t){return nn(t)?t:Ls(t,!1,ed,ld,zc)}function io(t){return Ls(t,!1,nd,ud,qc)}function oo(t){return Ls(t,!0,td,fd,Jc)}function gd(t){return Ls(t,!0,rd,dd,Yc)}function Ls(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=pd(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Qt(t){return nn(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function nn(t){return!!(t&&t.__v_isReadonly)}function lr(t){return!!(t&&t.__v_isShallow)}function ao(t){return Qt(t)||nn(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function co(t){return Object.isExtensible(t)&&as(t,"__v_skip",!0),t}const ur=t=>ue(t)?Sr(t):t,lo=t=>ue(t)?oo(t):t;class Xc{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Dn(()=>e(this._value),()=>Cn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=re(this);return(!e._cacheable||e.effect.dirty)&&qe(e._value,e._value=e.effect.run())&&Cn(e,4),uo(e),e.effect._dirtyLevel>=2&&Cn(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function md(t,e,n=!1){let r,s;const i=Y(t);return i?(r=t,s=Oe):(r=t.get,s=t.set),new Xc(r,s,i||!s,n)}function uo(t){var e;Lt&&Yt&&(t=re(t),$c(Yt,(e=t.dep)!=null?e:t.dep=Hc(()=>t.dep=void 0,t instanceof Xc?t:void 0)))}function Cn(t,e=4,n){t=re(t);const r=t.dep;r&&Vc(r,e)}function we(t){return!!(t&&t.__v_isRef===!0)}function Sn(t){return Zc(t,!1)}function Qc(t){return Zc(t,!0)}function Zc(t,e){return we(t)?t:new _d(t,e)}class _d{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:ur(e)}get value(){return uo(this),this._value}set value(e){const n=this.__v_isShallow||lr(e)||nn(e);e=n?e:re(e),qe(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ur(e),Cn(this,4))}}function yd(t){Cn(t,4)}function Dt(t){return we(t)?t.value:t}function vd(t){return Y(t)?t():Dt(t)}const bd={get:(t,e,n)=>Dt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function fo(t){return Qt(t)?t:new Proxy(t,bd)}class Ed{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>uo(this),()=>Cn(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function el(t){return new Ed(t)}function wd(t){const e=j(t)?new Array(t.length):{};for(const n in t)e[n]=tl(t,n);return e}class Id{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Yf(re(this._object),this._key)}}class Td{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Cd(t,e,n){return we(t)?t:Y(t)?new Td(t):ue(t)&&arguments.length>1?tl(t,e,n):Sn(t)}function tl(t,e,n){const r=t[e];return we(r)?r:new Id(t,e,n)}const Sd={GET:"get",HAS:"has",ITERATE:"iterate"},Ad={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rd(t,e){}const Pd={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Od={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ft(t,e,n,r){try{return r?t(...r):t()}catch(s){gn(s,e,n)}}function Be(t,e,n,r){if(Y(t)){const i=ft(t,e,n,r);return i&&Zi(i)&&i.catch(o=>{gn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Be(t[i],e,n,r));return s}function gn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ft(c,null,10,[t,o,a]);return}}kd(t,n,s,r)}function kd(t,e,n,r=!0){console.error(t)}let fr=!1,Ei=!1;const Te=[];let Ze=0;const An=[];let Tt=null,qt=0;const nl=Promise.resolve();let ho=null;function Ar(t){const e=ho||nl;return t?e.then(this?t.bind(this):t):e}function Nd(t){let e=Ze+1,n=Te.length;for(;e<n;){const r=e+n>>>1,s=Te[r],i=dr(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ds(t){(!Te.length||!Te.includes(t,fr&&t.allowRecurse?Ze+1:Ze))&&(t.id==null?Te.push(t):Te.splice(Nd(t.id),0,t),rl())}function rl(){!fr&&!Ei&&(Ei=!0,ho=nl.then(sl))}function Ld(t){const e=Te.indexOf(t);e>Ze&&Te.splice(e,1)}function us(t){j(t)?An.push(...t):(!Tt||!Tt.includes(t,t.allowRecurse?qt+1:qt))&&An.push(t),rl()}function sa(t,e,n=fr?Ze+1:0){for(;n<Te.length;n++){const r=Te[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Te.splice(n,1),n--,r()}}}function fs(t){if(An.length){const e=[...new Set(An)].sort((n,r)=>dr(n)-dr(r));if(An.length=0,Tt){Tt.push(...e);return}for(Tt=e,qt=0;qt<Tt.length;qt++)Tt[qt]();Tt=null,qt=0}}const dr=t=>t.id==null?1/0:t.id,Dd=(t,e)=>{const n=dr(t)-dr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function sl(t){Ei=!1,fr=!0,Te.sort(Dd);try{for(Ze=0;Ze<Te.length;Ze++){const e=Te[Ze];e&&e.active!==!1&&ft(e,null,14)}}finally{Ze=0,Te.length=0,fs(),fr=!1,ho=null,(Te.length||An.length)&&sl()}}let yn,Gr=[];function il(t,e){var n,r;yn=t,yn?(yn.enabled=!0,Gr.forEach(({event:s,args:i})=>yn.emit(s,...i)),Gr=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{il(i,e)}),setTimeout(()=>{yn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Gr=[])},3e3)):Gr=[]}function Md(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ae;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||ae;h&&(s=n.map(m=>ge(m)?m.trim():m)),f&&(s=n.map(cr))}let a,c=r[a=Zn(e)]||r[a=Zn(Re(e))];!c&&i&&(c=r[a=Zn(Fe(e))]),c&&Be(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Be(l,t,6,s)}}function ol(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=ol(l,e,!0);u&&(a=!0,pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ue(t)&&r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):pe(o,i),ue(t)&&r.set(t,o),o)}function Ms(t,e){return!t||!wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Fe(e))||se(t,e))}let me=null,xs=null;function hr(t){const e=me;return me=t,xs=t&&t.type.__scopeId||null,e}function xd(t){xs=t}function Ud(){xs=null}const Fd=t=>po;function po(t,e=me,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Pi(-1);const i=hr(e);let o;try{o=t(...s)}finally{hr(i),r._d&&Pi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function es(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:m,ctx:b,inheritAttrs:P}=t;let F,M;const w=hr(t);try{if(n.shapeFlag&4){const y=s||r,E=y;F=Ue(u.call(E,y,f,i,m,h,b)),M=c}else{const y=e;F=Ue(y.length>1?y(i,{attrs:c,slots:a,emit:l}):y(i,null)),M=e.props?c:$d(c)}}catch(y){rr.length=0,gn(y,t,1),F=de(Ce)}let g=F;if(M&&P!==!1){const y=Object.keys(M),{shapeFlag:E}=g;y.length&&E&7&&(o&&y.some(Xi)&&(M=Vd(M,o)),g=rt(g,M))}return n.dirs&&(g=rt(g),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),F=g,hr(w),F}function Bd(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if($t(s)){if(s.type!==Ce||s.children==="v-if"){if(n)return;n=s}}else return}return n}const $d=t=>{let e;for(const n in t)(n==="class"||n==="style"||wr(n))&&((e||(e={}))[n]=t[n]);return e},Vd=(t,e)=>{const n={};for(const r in t)(!Xi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hd(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ia(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Ms(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ia(r,o,l):!0:!!o;return!1}function ia(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ms(n,i))return!0}return!1}function go({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const mo="components",jd="directives";function al(t,e){return _o(mo,t,!0,e)||t}const cl=Symbol.for("v-ndc");function Wd(t){return ge(t)?_o(mo,t,!1)||t:t||cl}function Kd(t){return _o(jd,t)}function _o(t,e,n=!0,r=!1){const s=me||ye;if(s){const i=s.type;if(t===mo){const a=Di(i,!1);if(a&&(a===e||a===Re(e)||a===Ir(Re(e))))return i}const o=oa(s[t]||i[t],e)||oa(s.appContext[t],e);return!o&&r?i:o}}function oa(t,e){return t&&(t[e]||t[Re(e)]||t[Ir(Re(e))])}const ll=t=>t.__isSuspense;let wi=0;const Gd={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){if(t==null)qd(e,n,r,s,i,o,a,c,l);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Jd(t,e,n,r,s,o,a,c,l)}},hydrate:Yd,create:yo,normalize:Xd},zd=Gd;function pr(t,e){const n=t.props&&t.props[e];Y(n)&&n()}function qd(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),h=t.suspense=yo(t,s,r,e,f,n,i,o,a,c);l(null,h.pendingBranch=t.ssContent,f,null,r,h,i,o),h.deps>0?(pr(t,"onPending"),pr(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),Rn(h,t.ssFallback)):h.resolve(!1,!0)}function Jd(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,m=e.ssFallback,{activeBranch:b,pendingBranch:P,isInFallback:F,isHydrating:M}=f;if(P)f.pendingBranch=h,ze(h,P)?(c(P,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():F&&(M||(c(b,m,n,r,s,null,i,o,a),Rn(f,m)))):(f.pendingId=wi++,M?(f.isHydrating=!1,f.activeBranch=P):l(P,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),F?(c(null,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(b,m,n,r,s,null,i,o,a),Rn(f,m))):b&&ze(h,b)?(c(b,h,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(b&&ze(h,b))c(b,h,n,r,s,f,i,o,a),Rn(f,h);else if(pr(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=wi++,c(null,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:w,pendingId:g}=f;w>0?setTimeout(()=>{f.pendingId===g&&f.fallback(m)},w):w===0&&f.fallback(m)}}function yo(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:f,m:h,um:m,n:b,o:{parentNode:P,remove:F}}=l;let M;const w=Qd(t);w&&e!=null&&e.pendingBranch&&(M=e.pendingId,e.deps++);const g=t.props?cs(t.props.timeout):void 0,y=i,E={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:wi++,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(I=!1,L=!1){const{vnode:R,activeBranch:x,pendingBranch:O,pendingId:G,effects:N,parentComponent:J,container:ie}=E;let ce=!1;E.isHydrating?E.isHydrating=!1:I||(ce=x&&O.transition&&O.transition.mode==="out-in",ce&&(x.transition.afterLeave=()=>{G===E.pendingId&&(h(O,ie,i===y?b(x):i,0),us(N))}),x&&(P(x.el)!==E.hiddenContainer&&(i=b(x)),m(x,J,E,!0)),ce||h(O,ie,i,0)),Rn(E,O),E.pendingBranch=null,E.isInFallback=!1;let W=E.parent,Q=!1;for(;W;){if(W.pendingBranch){W.effects.push(...N),Q=!0;break}W=W.parent}!Q&&!ce&&us(N),E.effects=[],w&&e&&e.pendingBranch&&M===e.pendingId&&(e.deps--,e.deps===0&&!L&&e.resolve()),pr(R,"onResolve")},fallback(I){if(!E.pendingBranch)return;const{vnode:L,activeBranch:R,parentComponent:x,container:O,namespace:G}=E;pr(L,"onFallback");const N=b(R),J=()=>{E.isInFallback&&(f(null,I,O,N,x,null,G,a,c),Rn(E,I))},ie=I.transition&&I.transition.mode==="out-in";ie&&(R.transition.afterLeave=J),E.isInFallback=!0,m(R,x,null,!0),ie||J()},move(I,L,R){E.activeBranch&&h(E.activeBranch,I,L,R),E.container=I},next(){return E.activeBranch&&b(E.activeBranch)},registerDep(I,L){const R=!!E.pendingBranch;R&&E.deps++;const x=I.vnode.el;I.asyncDep.catch(O=>{gn(O,I,0)}).then(O=>{if(I.isUnmounted||E.isUnmounted||E.pendingId!==I.suspenseId)return;I.asyncResolved=!0;const{vnode:G}=I;Ni(I,O,!1),x&&(G.el=x);const N=!x&&I.subTree.el;L(I,G,P(x||I.subTree.el),x?null:b(I.subTree),E,o,c),N&&F(N),go(I,G.el),R&&--E.deps===0&&E.resolve()})},unmount(I,L){E.isUnmounted=!0,E.activeBranch&&m(E.activeBranch,n,I,L),E.pendingBranch&&m(E.pendingBranch,n,I,L)}};return E}function Yd(t,e,n,r,s,i,o,a,c){const l=e.suspense=yo(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Xd(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=aa(r?n.default:n),t.ssFallback=r?aa(n.fallback):de(Ce)}function aa(t){let e;if(Y(t)){const n=on&&t._c;n&&(t._d=!1,Nr()),t=t(),n&&(t._d=!0,e=ke,Hl())}return j(t)&&(t=Bd(t)),t=Ue(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function ul(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):us(t)}function Rn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,go(r,s))}function Qd(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const fl=Symbol.for("v-scx"),dl=()=>et(fl);function Zd(t,e){return Rr(t,null,e)}function hl(t,e){return Rr(t,null,{flush:"post"})}function pl(t,e){return Rr(t,null,{flush:"sync"})}const zr={};function Pn(t,e,n){return Rr(t,e,n)}function Rr(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=ae){if(e&&i){const I=e;e=(...L)=>{I(...L),E()}}const c=ye,l=I=>r===!0?I:Jt(I,r===!1?1:void 0);let u,f=!1,h=!1;if(we(t)?(u=()=>t.value,f=lr(t)):Qt(t)?(u=()=>l(t),f=!0):j(t)?(h=!0,f=t.some(I=>Qt(I)||lr(I)),u=()=>t.map(I=>{if(we(I))return I.value;if(Qt(I))return l(I);if(Y(I))return ft(I,c,2)})):Y(t)?e?u=()=>ft(t,c,2):u=()=>(m&&m(),Be(t,c,3,[b])):u=Oe,e&&r){const I=u;u=()=>Jt(I())}let m,b=I=>{m=g.onStop=()=>{ft(I,c,4),m=g.onStop=void 0}},P;if(Lr)if(b=Oe,e?n&&Be(e,c,3,[u(),h?[]:void 0,b]):u(),s==="sync"){const I=dl();P=I.__watcherHandles||(I.__watcherHandles=[])}else return Oe;let F=h?new Array(t.length).fill(zr):zr;const M=()=>{if(!(!g.active||!g.dirty))if(e){const I=g.run();(r||f||(h?I.some((L,R)=>qe(L,F[R])):qe(I,F)))&&(m&&m(),Be(e,c,3,[I,F===zr?void 0:h&&F[0]===zr?[]:F,b]),F=I)}else g.run()};M.allowRecurse=!!e;let w;s==="sync"?w=M:s==="post"?w=()=>Ee(M,c&&c.suspense):(M.pre=!0,c&&(M.id=c.uid),w=()=>Ds(M));const g=new Dn(u,Oe,w),y=Uc(),E=()=>{g.stop(),y&&Qi(y.effects,g)};return e?n?M():F=g.run():s==="post"?Ee(g.run.bind(g),c&&c.suspense):g.run(),P&&P.push(E),E}function eh(t,e,n){const r=this.proxy,s=ge(t)?t.includes(".")?gl(r,t):()=>r[t]:t.bind(r,r);let i;Y(e)?i=e:(i=e.handler,n=e);const o=an(this),a=Rr(s,i.bind(r),n);return o(),a}function gl(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Jt(t,e,n=0,r){if(!ue(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),we(t))Jt(t.value,e,n,r);else if(j(t))for(let s=0;s<t.length;s++)Jt(t[s],e,n,r);else if(dn(t)||wn(t))t.forEach(s=>{Jt(s,e,n,r)});else if(Nc(t))for(const s in t)Jt(t[s],e,n,r);return t}function th(t,e){if(me===null)return t;const n=js(me)||me.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ae]=e[s];i&&(Y(i)&&(i={mounted:i,updated:i}),i.deep&&Jt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Qe(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(hn(),Be(c,n,8,[t.el,a,t,e]),pn())}}const Ct=Symbol("_leaveCb"),qr=Symbol("_enterCb");function vo(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kr(()=>{t.isMounted=!0}),$s(()=>{t.isUnmounting=!0}),t}const $e=[Function,Array],bo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$e,onEnter:$e,onAfterEnter:$e,onEnterCancelled:$e,onBeforeLeave:$e,onLeave:$e,onAfterLeave:$e,onLeaveCancelled:$e,onBeforeAppear:$e,onAppear:$e,onAfterAppear:$e,onAppearCancelled:$e},nh={name:"BaseTransition",props:bo,setup(t,{slots:e}){const n=pt(),r=vo();return()=>{const s=e.default&&Us(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const h of s)if(h.type!==Ce){i=h;break}}const o=re(t),{mode:a}=o;if(r.isLeaving)return Zs(i);const c=ca(i);if(!c)return Zs(i);const l=Mn(c,o,r,n);rn(c,l);const u=n.subTree,f=u&&ca(u);if(f&&f.type!==Ce&&!ze(c,f)){const h=Mn(f,o,r,n);if(rn(f,h),a==="out-in")return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Zs(i);a==="in-out"&&c.type!==Ce&&(h.delayLeave=(m,b,P)=>{const F=_l(r,f);F[String(f.key)]=f,m[Ct]=()=>{b(),m[Ct]=void 0,delete l.delayedLeave},l.delayedLeave=P})}return i}}},ml=nh;function _l(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Mn(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:b,onBeforeAppear:P,onAppear:F,onAfterAppear:M,onAppearCancelled:w}=e,g=String(t.key),y=_l(n,t),E=(R,x)=>{R&&Be(R,r,9,x)},I=(R,x)=>{const O=x[1];E(R,x),j(R)?R.every(G=>G.length<=1)&&O():R.length<=1&&O()},L={mode:i,persisted:o,beforeEnter(R){let x=a;if(!n.isMounted)if(s)x=P||a;else return;R[Ct]&&R[Ct](!0);const O=y[g];O&&ze(t,O)&&O.el[Ct]&&O.el[Ct](),E(x,[R])},enter(R){let x=c,O=l,G=u;if(!n.isMounted)if(s)x=F||c,O=M||l,G=w||u;else return;let N=!1;const J=R[qr]=ie=>{N||(N=!0,ie?E(G,[R]):E(O,[R]),L.delayedLeave&&L.delayedLeave(),R[qr]=void 0)};x?I(x,[R,J]):J()},leave(R,x){const O=String(t.key);if(R[qr]&&R[qr](!0),n.isUnmounting)return x();E(f,[R]);let G=!1;const N=R[Ct]=J=>{G||(G=!0,x(),J?E(b,[R]):E(m,[R]),R[Ct]=void 0,y[O]===t&&delete y[O])};y[O]=t,h?I(h,[R,N]):N()},clone(R){return Mn(R,e,n,r)}};return L}function Zs(t){if(Or(t))return t=rt(t),t.children=null,t}function ca(t){return Or(t)?t.children?t.children[0]:void 0:t}function rn(t,e){t.shapeFlag&6&&t.component?rn(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Us(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===be?(o.patchFlag&128&&s++,r=r.concat(Us(o.children,e,a))):(e||o.type!==Ce)&&r.push(a!=null?rt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Pr(t,e){return Y(t)?pe({name:t.name},e,{setup:t}):t}const Zt=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function rh(t){Y(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const f=()=>(u++,c=null,h()),h=()=>{let m;return c||(m=c=e().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),a)return new Promise((P,F)=>{a(b,()=>P(f()),()=>F(b),u+1)});throw b}).then(b=>m!==c&&c?c:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),l=b,b)))};return Pr({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return l},setup(){const m=ye;if(l)return()=>ei(l,m);const b=w=>{c=null,gn(w,m,13,!r)};if(o&&m.suspense||Lr)return h().then(w=>()=>ei(w,m)).catch(w=>(b(w),()=>r?de(r,{error:w}):null));const P=Sn(!1),F=Sn(),M=Sn(!!s);return s&&setTimeout(()=>{M.value=!1},s),i!=null&&setTimeout(()=>{if(!P.value&&!F.value){const w=new Error(`Async component timed out after ${i}ms.`);b(w),F.value=w}},i),h().then(()=>{P.value=!0,m.parent&&Or(m.parent.vnode)&&(m.parent.effect.dirty=!0,Ds(m.parent.update))}).catch(w=>{b(w),F.value=w}),()=>{if(P.value&&l)return ei(l,m);if(F.value&&r)return de(r,{error:F.value});if(n&&!M.value)return de(n)}}})}function ei(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=de(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Or=t=>t.type.__isKeepAlive,sh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=pt(),r=n.ctx;if(!r.renderer)return()=>{const w=e.default&&e.default();return w&&w.length===1?w[0]:w};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=r,h=f("div");r.activate=(w,g,y,E,I)=>{const L=w.component;l(w,g,y,0,a),c(L.vnode,w,g,y,L,a,E,w.slotScopeIds,I),Ee(()=>{L.isDeactivated=!1,L.a&&Tn(L.a);const R=w.props&&w.props.onVnodeMounted;R&&Pe(R,L.parent,w)},a)},r.deactivate=w=>{const g=w.component;l(w,h,null,1,a),Ee(()=>{g.da&&Tn(g.da);const y=w.props&&w.props.onVnodeUnmounted;y&&Pe(y,g.parent,w),g.isDeactivated=!0},a)};function m(w){ti(w),u(w,n,a,!0)}function b(w){s.forEach((g,y)=>{const E=Di(g.type);E&&(!w||!w(E))&&P(y)})}function P(w){const g=s.get(w);!o||!ze(g,o)?m(g):o&&ti(o),s.delete(w),i.delete(w)}Pn(()=>[t.include,t.exclude],([w,g])=>{w&&b(y=>zn(w,y)),g&&b(y=>!zn(g,y))},{flush:"post",deep:!0});let F=null;const M=()=>{F!=null&&s.set(F,ni(n.subTree))};return kr(M),Bs(M),$s(()=>{s.forEach(w=>{const{subTree:g,suspense:y}=n,E=ni(g);if(w.type===E.type&&w.key===E.key){ti(E);const I=E.component.da;I&&Ee(I,y);return}m(w)})}),()=>{if(F=null,!e.default)return null;const w=e.default(),g=w[0];if(w.length>1)return o=null,w;if(!$t(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return o=null,g;let y=ni(g);const E=y.type,I=Di(Zt(y)?y.type.__asyncResolved||{}:E),{include:L,exclude:R,max:x}=t;if(L&&(!I||!zn(L,I))||R&&I&&zn(R,I))return o=y,g;const O=y.key==null?E:y.key,G=s.get(O);return y.el&&(y=rt(y),g.shapeFlag&128&&(g.ssContent=y)),F=O,G?(y.el=G.el,y.component=G.component,y.transition&&rn(y,y.transition),y.shapeFlag|=512,i.delete(O),i.add(O)):(i.add(O),x&&i.size>parseInt(x,10)&&P(i.values().next().value)),y.shapeFlag|=256,o=y,ll(g.type)?g:y}}},ih=sh;function zn(t,e){return j(t)?t.some(n=>zn(n,e)):ge(t)?t.split(",").includes(e):Of(t)?t.test(e):!1}function yl(t,e){bl(t,"a",e)}function vl(t,e){bl(t,"da",e)}function bl(t,e,n=ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Fs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Or(s.parent.vnode)&&oh(r,e,n,s),s=s.parent}}function oh(t,e,n,r){const s=Fs(e,t,r,!0);Vs(()=>{Qi(r[e],s)},n)}function ti(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ni(t){return t.shapeFlag&128?t.ssContent:t}function Fs(t,e,n=ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hn();const a=an(n),c=Be(e,n,t,o);return a(),pn(),c});return r?s.unshift(i):s.push(i),i}}const ht=t=>(e,n=ye)=>(!Lr||t==="sp")&&Fs(t,(...r)=>e(...r),n),El=ht("bm"),kr=ht("m"),wl=ht("bu"),Bs=ht("u"),$s=ht("bum"),Vs=ht("um"),Il=ht("sp"),Tl=ht("rtg"),Cl=ht("rtc");function Sl(t,e=ye){Fs("ec",t,e)}function ah(t,e,n,r){let s;const i=n&&n[r];if(j(t)||ge(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function ch(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(j(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}function lh(t,e,n={},r,s){if(me.isCE||me.parent&&Zt(me.parent)&&me.parent.isCE)return e!=="default"&&(n.name=e),de("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Nr();const o=i&&Al(i(n)),a=To(be,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Al(t){return t.some(e=>$t(e)?!(e.type===Ce||e.type===be&&!Al(e.children)):!0)?t:null}function uh(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Zn(r)]=t[r];return n}const Ii=t=>t?Jl(t)?js(t)||t.proxy:Ii(t.parent):null,er=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ii(t.parent),$root:t=>Ii(t.root),$emit:t=>t.emit,$options:t=>Eo(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ds(t.update)}),$nextTick:t=>t.n||(t.n=Ar.bind(t.proxy)),$watch:t=>eh.bind(t)}),ri=(t,e)=>t!==ae&&!t.__isScriptSetup&&se(t,e),Ti={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ri(r,e))return o[e]=1,r[e];if(s!==ae&&se(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,i[e];if(n!==ae&&se(n,e))return o[e]=4,n[e];Ci&&(o[e]=0)}}const u=er[e];let f,h;if(u)return e==="$attrs"&&Ne(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ae&&se(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,se(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ri(s,e)?(s[e]=n,!0):r!==ae&&se(r,e)?(r[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ae&&se(t,o)||ri(e,o)||(a=i[0])&&se(a,o)||se(r,o)||se(er,o)||se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},fh=pe({},Ti,{get(t,e){if(e!==Symbol.unscopables)return Ti.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Mf(e)}});function dh(){return null}function hh(){return null}function ph(t){}function gh(t){}function mh(){return null}function _h(){}function yh(t,e){return null}function vh(){return Rl().slots}function bh(){return Rl().attrs}function Rl(){const t=pt();return t.setupContext||(t.setupContext=Ql(t))}function gr(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Eh(t,e){const n=gr(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?j(s)||Y(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function wh(t,e){return!t||!e?t||e:j(t)&&j(e)?t.concat(e):pe({},gr(t),gr(e))}function Ih(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function Th(t){const e=pt();let n=t();return ki(),Zi(n)&&(n=n.catch(r=>{throw an(e),r})),[n,()=>an(e)]}let Ci=!0;function Ch(t){const e=Eo(t),n=t.proxy,r=t.ctx;Ci=!1,e.beforeCreate&&la(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:b,activated:P,deactivated:F,beforeDestroy:M,beforeUnmount:w,destroyed:g,unmounted:y,render:E,renderTracked:I,renderTriggered:L,errorCaptured:R,serverPrefetch:x,expose:O,inheritAttrs:G,components:N,directives:J,filters:ie}=e;if(l&&Sh(l,r,null),o)for(const Q in o){const K=o[Q];Y(K)&&(r[Q]=K.bind(n))}if(s){const Q=s.call(n,n);ue(Q)&&(t.data=Sr(Q))}if(Ci=!0,i)for(const Q in i){const K=i[Q],Le=Y(K)?K.bind(n,n):Y(K.get)?K.get.bind(n,n):Oe,st=!Y(K)&&Y(K.set)?K.set.bind(n):Oe,We=Ve({get:Le,set:st});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>We.value,set:Ie=>We.value=Ie})}if(a)for(const Q in a)Pl(a[Q],r,n,Q);if(c){const Q=Y(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(K=>{tr(K,Q[K])})}u&&la(u,t,"c");function W(Q,K){j(K)?K.forEach(Le=>Q(Le.bind(n))):K&&Q(K.bind(n))}if(W(El,f),W(kr,h),W(wl,m),W(Bs,b),W(yl,P),W(vl,F),W(Sl,R),W(Cl,I),W(Tl,L),W($s,w),W(Vs,y),W(Il,x),j(O))if(O.length){const Q=t.exposed||(t.exposed={});O.forEach(K=>{Object.defineProperty(Q,K,{get:()=>n[K],set:Le=>n[K]=Le})})}else t.exposed||(t.exposed={});E&&t.render===Oe&&(t.render=E),G!=null&&(t.inheritAttrs=G),N&&(t.components=N),J&&(t.directives=J)}function Sh(t,e,n=Oe){j(t)&&(t=Si(t));for(const r in t){const s=t[r];let i;ue(s)?"default"in s?i=et(s.from||r,s.default,!0):i=et(s.from||r):i=et(s),we(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function la(t,e,n){Be(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pl(t,e,n,r){const s=r.includes(".")?gl(n,r):()=>n[r];if(ge(t)){const i=e[t];Y(i)&&Pn(s,i)}else if(Y(t))Pn(s,t.bind(n));else if(ue(t))if(j(t))t.forEach(i=>Pl(i,e,n,r));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&Pn(s,i,t)}}function Eo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ds(c,l,o,!0)),ds(c,e,o)),ue(e)&&i.set(e,c),c}function ds(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ds(t,i,n,!0),s&&s.forEach(o=>ds(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ah[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ah={data:ua,props:fa,emits:fa,methods:qn,computed:qn,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:qn,directives:qn,watch:Ph,provide:ua,inject:Rh};function ua(t,e){return e?t?function(){return pe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Rh(t,e){return qn(Si(t),Si(e))}function Si(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function qn(t,e){return t?pe(Object.create(null),t,e):e}function fa(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:pe(Object.create(null),gr(t),gr(e??{})):e}function Ph(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const r in e)n[r]=Ae(t[r],e[r]);return n}function Ol(){return{app:null,config:{isNativeTag:Rf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oh=0;function kh(t,e){return function(r,s=null){Y(r)||(r=pe({},r)),s!=null&&!ue(s)&&(s=null);const i=Ol(),o=new WeakSet;let a=!1;const c=i.app={_uid:Oh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:eu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const h=de(r,s);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,l):t(h,l,f),a=!0,c._container=l,l.__vue_app__=c,js(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=On;On=c;try{return l()}finally{On=u}}};return c}}let On=null;function tr(t,e){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[t]=e}}function et(t,e,n=!1){const r=ye||me;if(r||On){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:On._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(r&&r.proxy):e}}function Nh(){return!!(ye||me||On)}function Lh(t,e,n,r=!1){const s={},i={};as(i,Hs,1),t.propsDefaults=Object.create(null),kl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:io(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Dh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ms(t.emitsOptions,h))continue;const m=e[h];if(c)if(se(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const b=Re(h);s[b]=Ai(c,a,b,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{kl(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!se(e,f)&&((u=Fe(f))===f||!se(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ai(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!se(e,f))&&(delete i[f],l=!0)}l&&ut(t,"set","$attrs")}function kl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(In(c))continue;const l=e[c];let u;s&&se(s,u=Re(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ms(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||ae;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ai(s,c,f,l[f],t,!se(l,f))}}return o}function Ai(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Y(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=an(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Fe(n))&&(r=!0))}return r}function Nl(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=f=>{c=!0;const[h,m]=Nl(f,e,!0);pe(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ue(t)&&r.set(t,En),En;if(j(i))for(let u=0;u<i.length;u++){const f=Re(i[u]);da(f)&&(o[f]=ae)}else if(i)for(const u in i){const f=Re(u);if(da(f)){const h=i[u],m=o[f]=j(h)||Y(h)?{type:h}:pe({},h);if(m){const b=ga(Boolean,m.type),P=ga(String,m.type);m[0]=b>-1,m[1]=P<0||b<P,(b>-1||se(m,"default"))&&a.push(f)}}}const l=[o,a];return ue(t)&&r.set(t,l),l}function da(t){return t[0]!=="$"&&!In(t)}function ha(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function pa(t,e){return ha(t)===ha(e)}function ga(t,e){return j(e)?e.findIndex(n=>pa(n,t)):Y(e)&&pa(e,t)?0:-1}const Ll=t=>t[0]==="_"||t==="$stable",wo=t=>j(t)?t.map(Ue):[Ue(t)],Mh=(t,e,n)=>{if(e._n)return e;const r=po((...s)=>wo(e(...s)),n);return r._c=!1,r},Dl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ll(s))continue;const i=t[s];if(Y(i))e[s]=Mh(s,i,r);else if(i!=null){const o=wo(i);e[s]=()=>o}}},Ml=(t,e)=>{const n=wo(e);t.slots.default=()=>n},xh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),as(e,"_",n)):Dl(e,t.slots={})}else t.slots={},e&&Ml(t,e);as(t.slots,Hs,1)},Uh=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(pe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Dl(e,s)),o=e}else e&&(Ml(t,e),o={default:1});if(i)for(const a in s)!Ll(a)&&o[a]==null&&delete s[a]};function hs(t,e,n,r,s=!1){if(j(t)){t.forEach((h,m)=>hs(h,e&&(j(e)?e[m]:e),n,r,s));return}if(Zt(r)&&!s)return;const i=r.shapeFlag&4?js(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ge(l)?(u[l]=null,se(f,l)&&(f[l]=null)):we(l)&&(l.value=null)),Y(c))ft(c,a,12,[o,u]);else{const h=ge(c),m=we(c);if(h||m){const b=()=>{if(t.f){const P=h?se(f,c)?f[c]:u[c]:c.value;s?j(P)&&Qi(P,i):j(P)?P.includes(i)||P.push(i):h?(u[c]=[i],se(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,se(f,c)&&(f[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Ee(b,n)):b()}}}let vt=!1;const Fh=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Bh=t=>t.namespaceURI.includes("MathML"),Jr=t=>{if(Fh(t))return"svg";if(Bh(t))return"mathml"},Yr=t=>t.nodeType===8;function $h(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(g,y)=>{if(!y.hasChildNodes()){n(null,g,y),fs(),y._vnode=g;return}vt=!1,f(y.firstChild,g,null,null,null),fs(),y._vnode=g,vt&&console.error("Hydration completed but contains mismatches.")},f=(g,y,E,I,L,R=!1)=>{const x=Yr(g)&&g.data==="[",O=()=>P(g,y,E,I,L,x),{type:G,ref:N,shapeFlag:J,patchFlag:ie}=y;let ce=g.nodeType;y.el=g,ie===-2&&(R=!1,y.dynamicChildren=null);let W=null;switch(G){case sn:ce!==3?y.children===""?(c(y.el=s(""),o(g),g),W=g):W=O():(g.data!==y.children&&(vt=!0,g.data=y.children),W=i(g));break;case Ce:w(g)?(W=i(g),M(y.el=g.content.firstChild,g,E)):ce!==8||x?W=O():W=i(g);break;case en:if(x&&(g=i(g),ce=g.nodeType),ce===1||ce===3){W=g;const Q=!y.children.length;for(let K=0;K<y.staticCount;K++)Q&&(y.children+=W.nodeType===1?W.outerHTML:W.data),K===y.staticCount-1&&(y.anchor=W),W=i(W);return x?i(W):W}else O();break;case be:x?W=b(g,y,E,I,L,R):W=O();break;default:if(J&1)(ce!==1||y.type.toLowerCase()!==g.tagName.toLowerCase())&&!w(g)?W=O():W=h(g,y,E,I,L,R);else if(J&6){y.slotScopeIds=L;const Q=o(g);if(x?W=F(g):Yr(g)&&g.data==="teleport start"?W=F(g,g.data,"teleport end"):W=i(g),e(y,Q,null,E,I,Jr(Q),R),Zt(y)){let K;x?(K=de(be),K.anchor=W?W.previousSibling:Q.lastChild):K=g.nodeType===3?So(""):de("div"),K.el=g,y.component.subTree=K}}else J&64?ce!==8?W=O():W=y.type.hydrate(g,y,E,I,L,R,t,m):J&128&&(W=y.type.hydrate(g,y,E,I,Jr(o(g)),L,R,t,f))}return N!=null&&hs(N,null,I,y),W},h=(g,y,E,I,L,R)=>{R=R||!!y.dynamicChildren;const{type:x,props:O,patchFlag:G,shapeFlag:N,dirs:J,transition:ie}=y,ce=x==="input"||x==="option";if(ce||G!==-1){J&&Qe(y,null,E,"created");let W=!1;if(w(g)){W=Bl(I,ie)&&E&&E.vnode.props&&E.vnode.props.appear;const K=g.content.firstChild;W&&ie.beforeEnter(K),M(K,g,E),y.el=g=K}if(N&16&&!(O&&(O.innerHTML||O.textContent))){let K=m(g.firstChild,y,g,E,I,L,R);for(;K;){vt=!0;const Le=K;K=K.nextSibling,a(Le)}}else N&8&&g.textContent!==y.children&&(vt=!0,g.textContent=y.children);if(O)if(ce||!R||G&48)for(const K in O)(ce&&(K.endsWith("value")||K==="indeterminate")||wr(K)&&!In(K)||K[0]===".")&&r(g,K,null,O[K],void 0,void 0,E);else O.onClick&&r(g,"onClick",null,O.onClick,void 0,void 0,E);let Q;(Q=O&&O.onVnodeBeforeMount)&&Pe(Q,E,y),J&&Qe(y,null,E,"beforeMount"),((Q=O&&O.onVnodeMounted)||J||W)&&ul(()=>{Q&&Pe(Q,E,y),W&&ie.enter(g),J&&Qe(y,null,E,"mounted")},I)}return g.nextSibling},m=(g,y,E,I,L,R,x)=>{x=x||!!y.dynamicChildren;const O=y.children,G=O.length;for(let N=0;N<G;N++){const J=x?O[N]:O[N]=Ue(O[N]);if(g)g=f(g,J,I,L,R,x);else{if(J.type===sn&&!J.children)continue;vt=!0,n(null,J,E,null,I,L,Jr(E),R)}}return g},b=(g,y,E,I,L,R)=>{const{slotScopeIds:x}=y;x&&(L=L?L.concat(x):x);const O=o(g),G=m(i(g),y,O,E,I,L,R);return G&&Yr(G)&&G.data==="]"?i(y.anchor=G):(vt=!0,c(y.anchor=l("]"),O,G),G)},P=(g,y,E,I,L,R)=>{if(vt=!0,y.el=null,R){const G=F(g);for(;;){const N=i(g);if(N&&N!==G)a(N);else break}}const x=i(g),O=o(g);return a(g),n(null,y,O,x,E,I,Jr(O),L),x},F=(g,y="[",E="]")=>{let I=0;for(;g;)if(g=i(g),g&&Yr(g)&&(g.data===y&&I++,g.data===E)){if(I===0)return i(g);I--}return g},M=(g,y,E)=>{const I=y.parentNode;I&&I.replaceChild(g,y);let L=E;for(;L;)L.vnode.el===y&&(L.vnode.el=L.subTree.el=g),L=L.parent},w=g=>g.nodeType===1&&g.tagName.toLowerCase()==="template";return[u,f]}const Ee=ul;function xl(t){return Fl(t)}function Ul(t){return Fl(t,$h)}function Fl(t,e){const n=Lc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Oe,insertStaticContent:b}=t,P=(d,p,_,S=null,T=null,D=null,$=void 0,k=null,U=!!p.dynamicChildren)=>{if(d===p)return;d&&!ze(d,p)&&(S=C(d),Ie(d,T,D,!0),d=null),p.patchFlag===-2&&(U=!1,p.dynamicChildren=null);const{type:A,ref:H,shapeFlag:q}=p;switch(A){case sn:F(d,p,_,S);break;case Ce:M(d,p,_,S);break;case en:d==null&&w(p,_,S,$);break;case be:N(d,p,_,S,T,D,$,k,U);break;default:q&1?E(d,p,_,S,T,D,$,k,U):q&6?J(d,p,_,S,T,D,$,k,U):(q&64||q&128)&&A.process(d,p,_,S,T,D,$,k,U,B)}H!=null&&T&&hs(H,d&&d.ref,D,p||d,!p)},F=(d,p,_,S)=>{if(d==null)r(p.el=a(p.children),_,S);else{const T=p.el=d.el;p.children!==d.children&&l(T,p.children)}},M=(d,p,_,S)=>{d==null?r(p.el=c(p.children||""),_,S):p.el=d.el},w=(d,p,_,S)=>{[d.el,d.anchor]=b(d.children,p,_,S,d.el,d.anchor)},g=({el:d,anchor:p},_,S)=>{let T;for(;d&&d!==p;)T=h(d),r(d,_,S),d=T;r(p,_,S)},y=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=h(d),s(d),d=_;s(p)},E=(d,p,_,S,T,D,$,k,U)=>{p.type==="svg"?$="svg":p.type==="math"&&($="mathml"),d==null?I(p,_,S,T,D,$,k,U):x(d,p,T,D,$,k,U)},I=(d,p,_,S,T,D,$,k)=>{let U,A;const{props:H,shapeFlag:q,transition:z,dirs:Z}=d;if(U=d.el=o(d.type,D,H&&H.is,H),q&8?u(U,d.children):q&16&&R(d.children,U,null,S,T,si(d,D),$,k),Z&&Qe(d,null,S,"created"),L(U,d,d.scopeId,$,S),H){for(const le in H)le!=="value"&&!In(le)&&i(U,le,null,H[le],D,d.children,S,T,_e);"value"in H&&i(U,"value",null,H.value,D),(A=H.onVnodeBeforeMount)&&Pe(A,S,d)}Z&&Qe(d,null,S,"beforeMount");const te=Bl(T,z);te&&z.beforeEnter(U),r(U,p,_),((A=H&&H.onVnodeMounted)||te||Z)&&Ee(()=>{A&&Pe(A,S,d),te&&z.enter(U),Z&&Qe(d,null,S,"mounted")},T)},L=(d,p,_,S,T)=>{if(_&&m(d,_),S)for(let D=0;D<S.length;D++)m(d,S[D]);if(T){let D=T.subTree;if(p===D){const $=T.vnode;L(d,$,$.scopeId,$.slotScopeIds,T.parent)}}},R=(d,p,_,S,T,D,$,k,U=0)=>{for(let A=U;A<d.length;A++){const H=d[A]=k?St(d[A]):Ue(d[A]);P(null,H,p,_,S,T,D,$,k)}},x=(d,p,_,S,T,D,$)=>{const k=p.el=d.el;let{patchFlag:U,dynamicChildren:A,dirs:H}=p;U|=d.patchFlag&16;const q=d.props||ae,z=p.props||ae;let Z;if(_&&Kt(_,!1),(Z=z.onVnodeBeforeUpdate)&&Pe(Z,_,p,d),H&&Qe(p,d,_,"beforeUpdate"),_&&Kt(_,!0),A?O(d.dynamicChildren,A,k,_,S,si(p,T),D):$||K(d,p,k,null,_,S,si(p,T),D,!1),U>0){if(U&16)G(k,p,q,z,_,S,T);else if(U&2&&q.class!==z.class&&i(k,"class",null,z.class,T),U&4&&i(k,"style",q.style,z.style,T),U&8){const te=p.dynamicProps;for(let le=0;le<te.length;le++){const he=te[le],ve=q[he],Ke=z[he];(Ke!==ve||he==="value")&&i(k,he,ve,Ke,T,d.children,_,S,_e)}}U&1&&d.children!==p.children&&u(k,p.children)}else!$&&A==null&&G(k,p,q,z,_,S,T);((Z=z.onVnodeUpdated)||H)&&Ee(()=>{Z&&Pe(Z,_,p,d),H&&Qe(p,d,_,"updated")},S)},O=(d,p,_,S,T,D,$)=>{for(let k=0;k<p.length;k++){const U=d[k],A=p[k],H=U.el&&(U.type===be||!ze(U,A)||U.shapeFlag&70)?f(U.el):_;P(U,A,H,null,S,T,D,$,!0)}},G=(d,p,_,S,T,D,$)=>{if(_!==S){if(_!==ae)for(const k in _)!In(k)&&!(k in S)&&i(d,k,_[k],null,$,p.children,T,D,_e);for(const k in S){if(In(k))continue;const U=S[k],A=_[k];U!==A&&k!=="value"&&i(d,k,A,U,$,p.children,T,D,_e)}"value"in S&&i(d,"value",_.value,S.value,$)}},N=(d,p,_,S,T,D,$,k,U)=>{const A=p.el=d?d.el:a(""),H=p.anchor=d?d.anchor:a("");let{patchFlag:q,dynamicChildren:z,slotScopeIds:Z}=p;Z&&(k=k?k.concat(Z):Z),d==null?(r(A,_,S),r(H,_,S),R(p.children||[],_,H,T,D,$,k,U)):q>0&&q&64&&z&&d.dynamicChildren?(O(d.dynamicChildren,z,_,T,D,$,k),(p.key!=null||T&&p===T.subTree)&&Io(d,p,!0)):K(d,p,_,H,T,D,$,k,U)},J=(d,p,_,S,T,D,$,k,U)=>{p.slotScopeIds=k,d==null?p.shapeFlag&512?T.ctx.activate(p,_,S,$,U):ie(p,_,S,T,D,$,U):ce(d,p,U)},ie=(d,p,_,S,T,D,$)=>{const k=d.component=ql(d,S,T);if(Or(d)&&(k.ctx.renderer=B),Yl(k),k.asyncDep){if(T&&T.registerDep(k,W),!d.el){const U=k.subTree=de(Ce);M(null,U,p,_)}}else W(k,d,p,_,T,D,$)},ce=(d,p,_)=>{const S=p.component=d.component;if(Hd(d,p,_))if(S.asyncDep&&!S.asyncResolved){Q(S,p,_);return}else S.next=p,Ld(S.update),S.effect.dirty=!0,S.update();else p.el=d.el,S.vnode=p},W=(d,p,_,S,T,D,$)=>{const k=()=>{if(d.isMounted){let{next:H,bu:q,u:z,parent:Z,vnode:te}=d;{const _n=$l(d);if(_n){H&&(H.el=te.el,Q(d,H,$)),_n.asyncDep.then(()=>{d.isUnmounted||k()});return}}let le=H,he;Kt(d,!1),H?(H.el=te.el,Q(d,H,$)):H=te,q&&Tn(q),(he=H.props&&H.props.onVnodeBeforeUpdate)&&Pe(he,Z,H,te),Kt(d,!0);const ve=es(d),Ke=d.subTree;d.subTree=ve,P(Ke,ve,f(Ke.el),C(Ke),d,T,D),H.el=ve.el,le===null&&go(d,ve.el),z&&Ee(z,T),(he=H.props&&H.props.onVnodeUpdated)&&Ee(()=>Pe(he,Z,H,te),T)}else{let H;const{el:q,props:z}=p,{bm:Z,m:te,parent:le}=d,he=Zt(p);if(Kt(d,!1),Z&&Tn(Z),!he&&(H=z&&z.onVnodeBeforeMount)&&Pe(H,le,p),Kt(d,!0),q&&ne){const ve=()=>{d.subTree=es(d),ne(q,d.subTree,d,T,null)};he?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ve()):ve()}else{const ve=d.subTree=es(d);P(null,ve,_,S,d,T,D),p.el=ve.el}if(te&&Ee(te,T),!he&&(H=z&&z.onVnodeMounted)){const ve=p;Ee(()=>Pe(H,le,ve),T)}(p.shapeFlag&256||le&&Zt(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Ee(d.a,T),d.isMounted=!0,p=_=S=null}},U=d.effect=new Dn(k,Oe,()=>Ds(A),d.scope),A=d.update=()=>{U.dirty&&U.run()};A.id=d.uid,Kt(d,!0),A()},Q=(d,p,_)=>{p.component=d;const S=d.vnode.props;d.vnode=p,d.next=null,Dh(d,p.props,S,_),Uh(d,p.children,_),hn(),sa(d),pn()},K=(d,p,_,S,T,D,$,k,U=!1)=>{const A=d&&d.children,H=d?d.shapeFlag:0,q=p.children,{patchFlag:z,shapeFlag:Z}=p;if(z>0){if(z&128){st(A,q,_,S,T,D,$,k,U);return}else if(z&256){Le(A,q,_,S,T,D,$,k,U);return}}Z&8?(H&16&&_e(A,T,D),q!==A&&u(_,q)):H&16?Z&16?st(A,q,_,S,T,D,$,k,U):_e(A,T,D,!0):(H&8&&u(_,""),Z&16&&R(q,_,S,T,D,$,k,U))},Le=(d,p,_,S,T,D,$,k,U)=>{d=d||En,p=p||En;const A=d.length,H=p.length,q=Math.min(A,H);let z;for(z=0;z<q;z++){const Z=p[z]=U?St(p[z]):Ue(p[z]);P(d[z],Z,_,null,T,D,$,k,U)}A>H?_e(d,T,D,!0,!1,q):R(p,_,S,T,D,$,k,U,q)},st=(d,p,_,S,T,D,$,k,U)=>{let A=0;const H=p.length;let q=d.length-1,z=H-1;for(;A<=q&&A<=z;){const Z=d[A],te=p[A]=U?St(p[A]):Ue(p[A]);if(ze(Z,te))P(Z,te,_,null,T,D,$,k,U);else break;A++}for(;A<=q&&A<=z;){const Z=d[q],te=p[z]=U?St(p[z]):Ue(p[z]);if(ze(Z,te))P(Z,te,_,null,T,D,$,k,U);else break;q--,z--}if(A>q){if(A<=z){const Z=z+1,te=Z<H?p[Z].el:S;for(;A<=z;)P(null,p[A]=U?St(p[A]):Ue(p[A]),_,te,T,D,$,k,U),A++}}else if(A>z)for(;A<=q;)Ie(d[A],T,D,!0),A++;else{const Z=A,te=A,le=new Map;for(A=te;A<=z;A++){const De=p[A]=U?St(p[A]):Ue(p[A]);De.key!=null&&le.set(De.key,A)}let he,ve=0;const Ke=z-te+1;let _n=!1,Go=0;const jn=new Array(Ke);for(A=0;A<Ke;A++)jn[A]=0;for(A=Z;A<=q;A++){const De=d[A];if(ve>=Ke){Ie(De,T,D,!0);continue}let Xe;if(De.key!=null)Xe=le.get(De.key);else for(he=te;he<=z;he++)if(jn[he-te]===0&&ze(De,p[he])){Xe=he;break}Xe===void 0?Ie(De,T,D,!0):(jn[Xe-te]=A+1,Xe>=Go?Go=Xe:_n=!0,P(De,p[Xe],_,null,T,D,$,k,U),ve++)}const zo=_n?Vh(jn):En;for(he=zo.length-1,A=Ke-1;A>=0;A--){const De=te+A,Xe=p[De],qo=De+1<H?p[De+1].el:S;jn[A]===0?P(null,Xe,_,qo,T,D,$,k,U):_n&&(he<0||A!==zo[he]?We(Xe,_,qo,2):he--)}}},We=(d,p,_,S,T=null)=>{const{el:D,type:$,transition:k,children:U,shapeFlag:A}=d;if(A&6){We(d.component.subTree,p,_,S);return}if(A&128){d.suspense.move(p,_,S);return}if(A&64){$.move(d,p,_,B);return}if($===be){r(D,p,_);for(let q=0;q<U.length;q++)We(U[q],p,_,S);r(d.anchor,p,_);return}if($===en){g(d,p,_);return}if(S!==2&&A&1&&k)if(S===0)k.beforeEnter(D),r(D,p,_),Ee(()=>k.enter(D),T);else{const{leave:q,delayLeave:z,afterLeave:Z}=k,te=()=>r(D,p,_),le=()=>{q(D,()=>{te(),Z&&Z()})};z?z(D,te,le):le()}else r(D,p,_)},Ie=(d,p,_,S=!1,T=!1)=>{const{type:D,props:$,ref:k,children:U,dynamicChildren:A,shapeFlag:H,patchFlag:q,dirs:z}=d;if(k!=null&&hs(k,null,_,d,!0),H&256){p.ctx.deactivate(d);return}const Z=H&1&&z,te=!Zt(d);let le;if(te&&(le=$&&$.onVnodeBeforeUnmount)&&Pe(le,p,d),H&6)_t(d.component,_,S);else{if(H&128){d.suspense.unmount(_,S);return}Z&&Qe(d,null,p,"beforeUnmount"),H&64?d.type.remove(d,p,_,T,B,S):A&&(D!==be||q>0&&q&64)?_e(A,p,_,!1,!0):(D===be&&q&384||!T&&H&16)&&_e(U,p,_),S&&mt(d)}(te&&(le=$&&$.onVnodeUnmounted)||Z)&&Ee(()=>{le&&Pe(le,p,d),Z&&Qe(d,null,p,"unmounted")},_)},mt=d=>{const{type:p,el:_,anchor:S,transition:T}=d;if(p===be){Wt(_,S);return}if(p===en){y(d);return}const D=()=>{s(_),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:$,delayLeave:k}=T,U=()=>$(_,D);k?k(d.el,D,U):U()}else D()},Wt=(d,p)=>{let _;for(;d!==p;)_=h(d),s(d),d=_;s(p)},_t=(d,p,_)=>{const{bum:S,scope:T,update:D,subTree:$,um:k}=d;S&&Tn(S),T.stop(),D&&(D.active=!1,Ie($,d,p,_)),k&&Ee(k,p),Ee(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},_e=(d,p,_,S=!1,T=!1,D=0)=>{for(let $=D;$<d.length;$++)Ie(d[$],p,_,S,T)},C=d=>d.shapeFlag&6?C(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el);let V=!1;const v=(d,p,_)=>{d==null?p._vnode&&Ie(p._vnode,null,null,!0):P(p._vnode||null,d,p,null,null,null,_),V||(V=!0,sa(),fs(),V=!1),p._vnode=d},B={p:P,um:Ie,m:We,r:mt,mt:ie,mc:R,pc:K,pbc:O,n:C,o:t};let ee,ne;return e&&([ee,ne]=e(B)),{render:v,hydrate:ee,createApp:kh(v,ee)}}function si({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Io(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=St(s[i]),a.el=o.el),n||Io(o,a)),a.type===sn&&(a.el=o.el)}}function Vh(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function $l(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$l(e)}const Hh=t=>t.__isTeleport,nr=t=>t&&(t.disabled||t.disabled===""),ma=t=>typeof SVGElement<"u"&&t instanceof SVGElement,_a=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ri=(t,e)=>{const n=t&&t.to;return ge(n)?e?e(n):null:n},jh={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:h,o:{insert:m,querySelector:b,createText:P,createComment:F}}=l,M=nr(e.props);let{shapeFlag:w,children:g,dynamicChildren:y}=e;if(t==null){const E=e.el=P(""),I=e.anchor=P("");m(E,n,r),m(I,n,r);const L=e.target=Ri(e.props,b),R=e.targetAnchor=P("");L&&(m(R,L),o==="svg"||ma(L)?o="svg":(o==="mathml"||_a(L))&&(o="mathml"));const x=(O,G)=>{w&16&&u(g,O,G,s,i,o,a,c)};M?x(n,I):L&&x(L,R)}else{e.el=t.el;const E=e.anchor=t.anchor,I=e.target=t.target,L=e.targetAnchor=t.targetAnchor,R=nr(t.props),x=R?n:I,O=R?E:L;if(o==="svg"||ma(I)?o="svg":(o==="mathml"||_a(I))&&(o="mathml"),y?(h(t.dynamicChildren,y,x,s,i,o,a),Io(t,e,!0)):c||f(t,e,x,O,s,i,o,a,!1),M)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Xr(e,n,E,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const G=e.target=Ri(e.props,b);G&&Xr(e,G,null,l,0)}else R&&Xr(e,I,L,l,1)}Vl(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:h}=t;if(f&&i(u),o&&i(l),a&16){const m=o||!nr(h);for(let b=0;b<c.length;b++){const P=c[b];s(P,e,n,m,!!P.dynamicChildren)}}},move:Xr,hydrate:Wh};function Xr(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,f=i===2;if(f&&r(o,e,n),(!f||nr(u))&&c&16)for(let h=0;h<l.length;h++)s(l[h],e,n,2);f&&r(a,e,n)}function Wh(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Ri(e.props,c);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(nr(e.props))e.anchor=l(o(t),e,a(t),n,r,s,i),e.targetAnchor=f;else{e.anchor=o(t);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(f,e,u,n,r,s,i)}Vl(e)}return e.anchor&&o(e.anchor)}const Kh=jh;function Vl(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const be=Symbol.for("v-fgt"),sn=Symbol.for("v-txt"),Ce=Symbol.for("v-cmt"),en=Symbol.for("v-stc"),rr=[];let ke=null;function Nr(t=!1){rr.push(ke=t?null:[])}function Hl(){rr.pop(),ke=rr[rr.length-1]||null}let on=1;function Pi(t){on+=t}function jl(t){return t.dynamicChildren=on>0?ke||En:null,Hl(),on>0&&ke&&ke.push(t),t}function Wl(t,e,n,r,s,i){return jl(Co(t,e,n,r,s,i,!0))}function To(t,e,n,r,s){return jl(de(t,e,n,r,s,!0))}function $t(t){return t?t.__v_isVNode===!0:!1}function ze(t,e){return t.type===e.type&&t.key===e.key}function Gh(t){}const Hs="__vInternal",Kl=({key:t})=>t??null,ts=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||we(t)||Y(t)?{i:me,r:t,k:e,f:!!n}:t:null);function Co(t,e=null,n=null,r=0,s=null,i=t===be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kl(e),ref:e&&ts(e),scopeId:xs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:me};return a?(Ao(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),on>0&&!o&&ke&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ke.push(c),c}const de=zh;function zh(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cl)&&(t=Ce),$t(t)){const a=rt(t,e,!0);return n&&Ao(a,n),on>0&&!i&&ke&&(a.shapeFlag&6?ke[ke.indexOf(t)]=a:ke.push(a)),a.patchFlag|=-2,a}if(np(t)&&(t=t.__vccOpts),e){e=Gl(e);let{class:a,style:c}=e;a&&!ge(a)&&(e.class=Cr(a)),ue(c)&&(ao(c)&&!j(c)&&(c=pe({},c)),e.style=Tr(c))}const o=ge(t)?1:ll(t)?128:Hh(t)?64:ue(t)?4:Y(t)?2:0;return Co(t,e,n,r,s,o,i,!0)}function Gl(t){return t?ao(t)||Hs in t?pe({},t):t:null}function rt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?zl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kl(a),ref:e&&e.ref?n&&s?j(s)?s.concat(ts(e)):[s,ts(e)]:ts(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==be?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rt(t.ssContent),ssFallback:t.ssFallback&&rt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function So(t=" ",e=0){return de(sn,null,t,e)}function qh(t,e){const n=de(en,null,t);return n.staticCount=e,n}function Jh(t="",e=!1){return e?(Nr(),To(Ce,null,t)):de(Ce,null,t)}function Ue(t){return t==null||typeof t=="boolean"?de(Ce):j(t)?de(be,null,t.slice()):typeof t=="object"?St(t):de(sn,null,String(t))}function St(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rt(t)}function Ao(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ao(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Hs in e)?e._ctx=me:s===3&&me&&(me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:me},n=32):(e=String(e),r&64?(n=16,e=[So(e)]):n=8);t.children=e,t.shapeFlag|=n}function zl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Cr([e.class,r.class]));else if(s==="style")e.style=Tr([e.style,r.style]);else if(wr(s)){const i=e[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pe(t,e,n,r=null){Be(t,e,7,[n,r])}const Yh=Ol();let Xh=0;function ql(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Yh,i={uid:Xh++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new to(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nl(r,s),emitsOptions:ol(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Md.bind(null,i),t.ce&&t.ce(i),i}let ye=null;const pt=()=>ye||me;let ps,Oi;{const t=Lc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ps=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),Oi=e("__VUE_SSR_SETTERS__",n=>Lr=n)}const an=t=>{const e=ye;return ps(t),t.scope.on(),()=>{t.scope.off(),ps(e)}},ki=()=>{ye&&ye.scope.off(),ps(null)};function Jl(t){return t.vnode.shapeFlag&4}let Lr=!1;function Yl(t,e=!1){e&&Oi(e);const{props:n,children:r}=t.vnode,s=Jl(t);Lh(t,n,s,e),xh(t,r);const i=s?Qh(t,e):void 0;return e&&Oi(!1),i}function Qh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=co(new Proxy(t.ctx,Ti));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ql(t):null,i=an(t);hn();const o=ft(r,t,0,[t.props,s]);if(pn(),i(),Zi(o)){if(o.then(ki,ki),e)return o.then(a=>{Ni(t,a,e)}).catch(a=>{gn(a,t,0)});t.asyncDep=o}else Ni(t,o,e)}else Xl(t,e)}function Ni(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=fo(e)),Xl(t,n)}let gs,Li;function Zh(t){gs=t,Li=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,fh))}}const ep=()=>!gs;function Xl(t,e,n){const r=t.type;if(!t.render){if(!e&&gs&&!r.render){const s=r.template||Eo(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=pe(pe({isCustomElement:i,delimiters:a},o),c);r.render=gs(s,l)}}t.render=r.render||Oe,Li&&Li(t)}{const s=an(t);hn();try{Ch(t)}finally{pn(),s()}}}function tp(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ne(t,"get","$attrs"),e[n]}}))}function Ql(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return tp(t)},slots:t.slots,emit:t.emit,expose:e}}function js(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fo(co(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in er)return er[n](t)},has(e,n){return n in e||n in er}}))}function Di(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function np(t){return Y(t)&&"__vccOpts"in t}const Ve=(t,e)=>md(t,e,Lr);function rp(t,e,n=ae){const r=pt(),s=Re(e),i=Fe(e),o=el((c,l)=>{let u;return pl(()=>{const f=t[e];qe(u,f)&&(u=f,l())}),{get(){return c(),n.get?n.get(u):u},set(f){const h=r.vnode.props;!(h&&(e in h||s in h||i in h)&&(`onUpdate:${e}`in h||`onUpdate:${s}`in h||`onUpdate:${i}`in h))&&qe(f,u)&&(u=f,l()),r.emit(`update:${e}`,n.set?n.set(f):f)}}}),a=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?t[a]||{}:o,done:!1}:{done:!0}}}},o}function Ws(t,e,n){const r=arguments.length;return r===2?ue(e)&&!j(e)?$t(e)?de(t,null,[e]):de(t,e):de(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$t(n)&&(n=[n]),de(t,e,n))}function sp(){}function ip(t,e,n,r){const s=n[r];if(s&&Zl(s,t))return s;const i=e();return i.memo=t.slice(),n[r]=i}function Zl(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(qe(n[r],e[r]))return!1;return on>0&&ke&&ke.push(t),!0}const eu="3.4.21",op=Oe,ap=Od,cp=yn,lp=il,up={createComponentInstance:ql,setupComponent:Yl,renderComponentRoot:es,setCurrentRenderingInstance:hr,isVNode:$t,normalizeVNode:Ue},fp=up,dp=null,hp=null,pp=null;/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const gp="http://www.w3.org/2000/svg",mp="http://www.w3.org/1998/Math/MathML",At=typeof document<"u"?document:null,ya=At&&At.createElement("template"),_p={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?At.createElementNS(gp,t):e==="mathml"?At.createElementNS(mp,t):At.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>At.createTextNode(t),createComment:t=>At.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>At.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ya.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=ya.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bt="transition",Wn="animation",xn=Symbol("_vtc"),Ro=(t,{slots:e})=>Ws(ml,nu(t),e);Ro.displayName="Transition";const tu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yp=Ro.props=pe({},bo,tu),Gt=(t,e=[])=>{j(t)?t.forEach(n=>n(...e)):t&&t(...e)},va=t=>t?j(t)?t.some(e=>e.length>1):t.length>1:!1;function nu(t){const e={};for(const N in t)N in tu||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,b=vp(s),P=b&&b[0],F=b&&b[1],{onBeforeEnter:M,onEnter:w,onEnterCancelled:g,onLeave:y,onLeaveCancelled:E,onBeforeAppear:I=M,onAppear:L=w,onAppearCancelled:R=g}=e,x=(N,J,ie)=>{It(N,J?u:a),It(N,J?l:o),ie&&ie()},O=(N,J)=>{N._isLeaving=!1,It(N,f),It(N,m),It(N,h),J&&J()},G=N=>(J,ie)=>{const ce=N?L:w,W=()=>x(J,N,ie);Gt(ce,[J,W]),ba(()=>{It(J,N?c:i),ot(J,N?u:a),va(ce)||Ea(J,r,P,W)})};return pe(e,{onBeforeEnter(N){Gt(M,[N]),ot(N,i),ot(N,o)},onBeforeAppear(N){Gt(I,[N]),ot(N,c),ot(N,l)},onEnter:G(!1),onAppear:G(!0),onLeave(N,J){N._isLeaving=!0;const ie=()=>O(N,J);ot(N,f),su(),ot(N,h),ba(()=>{N._isLeaving&&(It(N,f),ot(N,m),va(y)||Ea(N,r,F,ie))}),Gt(y,[N,ie])},onEnterCancelled(N){x(N,!1),Gt(g,[N])},onAppearCancelled(N){x(N,!0),Gt(R,[N])},onLeaveCancelled(N){O(N),Gt(E,[N])}})}function vp(t){if(t==null)return null;if(ue(t))return[ii(t.enter),ii(t.leave)];{const e=ii(t);return[e,e]}}function ii(t){return cs(t)}function ot(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[xn]||(t[xn]=new Set)).add(e)}function It(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[xn];n&&(n.delete(e),n.size||(t[xn]=void 0))}function ba(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let bp=0;function Ea(t,e,n,r){const s=t._endId=++bp,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ru(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),i()},h=m=>{m.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function ru(t,e){const n=window.getComputedStyle(t),r=b=>(n[b]||"").split(", "),s=r(`${bt}Delay`),i=r(`${bt}Duration`),o=wa(s,i),a=r(`${Wn}Delay`),c=r(`${Wn}Duration`),l=wa(a,c);let u=null,f=0,h=0;e===bt?o>0&&(u=bt,f=o,h=i.length):e===Wn?l>0&&(u=Wn,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?bt:Wn:null,h=u?u===bt?i.length:c.length:0);const m=u===bt&&/\b(transform|all)(,|$)/.test(r(`${bt}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function wa(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ia(n)+Ia(t[r])))}function Ia(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function su(){return document.body.offsetHeight}function Ep(t,e,n){const r=t[xn];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ms=Symbol("_vod"),iu=Symbol("_vsh"),ou={beforeMount(t,{value:e},{transition:n}){t[ms]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Kn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Kn(t,!0),r.enter(t)):r.leave(t,()=>{Kn(t,!1)}):Kn(t,e))},beforeUnmount(t,{value:e}){Kn(t,e)}};function Kn(t,e){t.style.display=e?t[ms]:"none",t[iu]=!e}function wp(){ou.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const au=Symbol("");function Ip(t){const e=pt();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>xi(i,s))},r=()=>{const s=t(e.proxy);Mi(e.subTree,s),n(s)};hl(r),kr(()=>{const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Vs(()=>s.disconnect())})}function Mi(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Mi(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)xi(t.el,e);else if(t.type===be)t.children.forEach(n=>Mi(n,e));else if(t.type===en){let{el:n,anchor:r}=t;for(;n&&(xi(n,e),n!==r);)n=n.nextSibling}}function xi(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e)n.setProperty(`--${s}`,e[s]),r+=`--${s}: ${e[s]};`;n[au]=r}}const Tp=/(^|;)\s*display\s*:/;function Cp(t,e,n){const r=t.style,s=ge(n);let i=!1;if(n&&!s){if(e)if(ge(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ns(r,a,"")}else for(const o in e)n[o]==null&&ns(r,o,"");for(const o in n)o==="display"&&(i=!0),ns(r,o,n[o])}else if(s){if(e!==n){const o=r[au];o&&(n+=";"+o),r.cssText=n,i=Tp.test(n)}}else e&&t.removeAttribute("style");ms in t&&(t[ms]=i?r.display:"",t[iu]&&(r.display="none"))}const Ta=/\s*!important$/;function ns(t,e,n){if(j(n))n.forEach(r=>ns(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Sp(t,e);Ta.test(n)?t.setProperty(Fe(r),n.replace(Ta,""),"important"):t[r]=n}}const Ca=["Webkit","Moz","ms"],oi={};function Sp(t,e){const n=oi[e];if(n)return n;let r=Re(e);if(r!=="filter"&&r in t)return oi[e]=r;r=Ir(r);for(let s=0;s<Ca.length;s++){const i=Ca[s]+r;if(i in t)return oi[e]=i}return e}const Sa="http://www.w3.org/1999/xlink";function Ap(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sa,e.slice(6,e.length)):t.setAttributeNS(Sa,e,n);else{const i=Hf(e);n==null||i&&!Dc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Rp(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Dc(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function at(t,e,n,r){t.addEventListener(e,n,r)}function Pp(t,e,n,r){t.removeEventListener(e,n,r)}const Aa=Symbol("_vei");function Op(t,e,n,r,s=null){const i=t[Aa]||(t[Aa]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=kp(e);if(r){const l=i[e]=Dp(r,s);at(t,a,l,c)}else o&&(Pp(t,a,o,c),i[e]=void 0)}}const Ra=/(?:Once|Passive|Capture)$/;function kp(t){let e;if(Ra.test(t)){e={};let r;for(;r=t.match(Ra);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fe(t.slice(2)),e]}let ai=0;const Np=Promise.resolve(),Lp=()=>ai||(Np.then(()=>ai=0),ai=Date.now());function Dp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Be(Mp(r,n.value),e,5,[r])};return n.value=t,n.attached=Lp(),n}function Mp(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xp=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?Ep(t,r,l):e==="style"?Cp(t,n,r):wr(e)?Xi(e)||Op(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Up(t,e,r,l))?Rp(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ap(t,e,r,l))};function Up(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pa(e)&&Y(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pa(e)&&ge(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function cu(t,e){const n=Pr(t);class r extends Ks{constructor(i){super(n,i,e)}}return r.def=n,r}/*! #__NO_SIDE_EFFECTS__ */const Fp=t=>cu(t,vu),Bp=typeof HTMLElement<"u"?HTMLElement:class{};class Ks extends Bp{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Ar(()=>{this._connected||(Ui(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let a;if(i&&!j(i))for(const c in i){const l=i[c];(l===Number||l&&l.type===Number)&&(c in this._props&&(this._props[c]=cs(this._props[c])),(a||(a=Object.create(null)))[Re(c)]=!0)}this._numberProps=a,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=j(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Re))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.getAttribute(e);const r=Re(e);this._numberProps&&this._numberProps[r]&&(n=cs(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Fe(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Fe(e),n+""):n||this.removeAttribute(Fe(e))))}_update(){Ui(this._createVNode(),this.shadowRoot)}_createVNode(){const e=de(this._def,pe({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),Fe(i)!==i&&r(Fe(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Ks){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function $p(t="$style"){{const e=pt();if(!e)return ae;const n=e.type.__cssModules;if(!n)return ae;const r=n[t];return r||ae}}const lu=new WeakMap,uu=new WeakMap,_s=Symbol("_moveCb"),Oa=Symbol("_enterCb"),fu={name:"TransitionGroup",props:pe({},yp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=pt(),r=vo();let s,i;return Bs(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Gp(s[0].el,n.vnode.el,o))return;s.forEach(jp),s.forEach(Wp);const a=s.filter(Kp);su(),a.forEach(c=>{const l=c.el,u=l.style;ot(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l[_s]=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",f),l[_s]=null,It(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=re(t),a=nu(o);let c=o.tag||be;s=i,i=e.default?Us(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&rn(u,Mn(u,a,r,n))}if(s)for(let l=0;l<s.length;l++){const u=s[l];rn(u,Mn(u,a,r,n)),lu.set(u,u.el.getBoundingClientRect())}return de(c,null,i)}}},Vp=t=>delete t.mode;fu.props;const Hp=fu;function jp(t){const e=t.el;e[_s]&&e[_s](),e[Oa]&&e[Oa]()}function Wp(t){uu.set(t,t.el.getBoundingClientRect())}function Kp(t){const e=lu.get(t),n=uu.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function Gp(t,e,n){const r=t.cloneNode(),s=t[xn];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=ru(r);return i.removeChild(r),o}const Vt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>Tn(e,n):e};function zp(t){t.target.composing=!0}function ka(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const He=Symbol("_assign"),ys={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[He]=Vt(s);const i=r||s.props&&s.props.type==="number";at(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=cr(a)),t[He](a)}),n&&at(t,"change",()=>{t.value=t.value.trim()}),e||(at(t,"compositionstart",zp),at(t,"compositionend",ka),at(t,"change",ka))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[He]=Vt(i),t.composing)return;const o=s||t.type==="number"?cr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Po={deep:!0,created(t,e,n){t[He]=Vt(n),at(t,"change",()=>{const r=t._modelValue,s=Un(t),i=t.checked,o=t[He];if(j(r)){const a=Os(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(dn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(hu(t,i))})},mounted:Na,beforeUpdate(t,e,n){t[He]=Vt(n),Na(t,e,n)}};function Na(t,{value:e,oldValue:n},r){t._modelValue=e,j(e)?t.checked=Os(e,r.props.value)>-1:dn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Bt(e,hu(t,!0)))}const Oo={created(t,{value:e},n){t.checked=Bt(e,n.props.value),t[He]=Vt(n),at(t,"change",()=>{t[He](Un(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[He]=Vt(r),e!==n&&(t.checked=Bt(e,r.props.value))}},du={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=dn(e);at(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?cr(Un(o)):Un(o));t[He](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Ar(()=>{t._assigning=!1})}),t[He]=Vt(r)},mounted(t,{value:e,modifiers:{number:n}}){La(t,e,n)},beforeUpdate(t,e,n){t[He]=Vt(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||La(t,e,n)}};function La(t,e,n){const r=t.multiple,s=j(e);if(!(r&&!s&&!dn(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],c=Un(a);if(r)if(s){const l=typeof c;l==="string"||l==="number"?a.selected=e.includes(n?cr(c):c):a.selected=Os(e,c)>-1}else a.selected=e.has(c);else if(Bt(Un(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Un(t){return"_value"in t?t._value:t.value}function hu(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const pu={created(t,e,n){Qr(t,e,n,null,"created")},mounted(t,e,n){Qr(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Qr(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Qr(t,e,n,r,"updated")}};function gu(t,e){switch(t){case"SELECT":return du;case"TEXTAREA":return ys;default:switch(e){case"checkbox":return Po;case"radio":return Oo;default:return ys}}}function Qr(t,e,n,r,s){const o=gu(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function qp(){ys.getSSRProps=({value:t})=>({value:t}),Oo.getSSRProps=({value:t},e)=>{if(e.props&&Bt(e.props.value,t))return{checked:!0}},Po.getSSRProps=({value:t},e)=>{if(j(t)){if(e.props&&Os(t,e.props.value)>-1)return{checked:!0}}else if(dn(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},pu.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=gu(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const Jp=["ctrl","shift","alt","meta"],Yp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Jp.some(n=>t[`${n}Key`]&&!e.includes(n))},Xp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Yp[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Qp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zp=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Fe(s.key);if(e.some(o=>o===i||Qp[o]===i))return t(s)})},mu=pe({patchProp:xp},_p);let sr,Da=!1;function _u(){return sr||(sr=xl(mu))}function yu(){return sr=Da?sr:Ul(mu),Da=!0,sr}const Ui=(...t)=>{_u().render(...t)},vu=(...t)=>{yu().hydrate(...t)},bu=(...t)=>{const e=_u().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wu(r);if(!s)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Eu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},eg=(...t)=>{const e=yu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wu(r);if(s)return n(s,!0,Eu(s))},e};function Eu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wu(t){return ge(t)?document.querySelector(t):t}let Ma=!1;const tg=()=>{Ma||(Ma=!0,qp(),wp())};/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ng=()=>{},rg=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:ml,BaseTransitionPropsValidators:bo,Comment:Ce,DeprecationTypes:pp,EffectScope:to,ErrorCodes:Pd,ErrorTypeStrings:ap,Fragment:be,KeepAlive:ih,ReactiveEffect:Dn,Static:en,Suspense:zd,Teleport:Kh,Text:sn,TrackOpTypes:Sd,Transition:Ro,TransitionGroup:Hp,TriggerOpTypes:Ad,VueElement:Ks,assertNumber:Rd,callWithAsyncErrorHandling:Be,callWithErrorHandling:ft,camelize:Re,capitalize:Ir,cloneVNode:rt,compatUtils:hp,compile:ng,computed:Ve,createApp:bu,createBlock:To,createCommentVNode:Jh,createElementBlock:Wl,createElementVNode:Co,createHydrationRenderer:Ul,createPropsRestProxy:Ih,createRenderer:xl,createSSRApp:eg,createSlots:ch,createStaticVNode:qh,createTextVNode:So,createVNode:de,customRef:el,defineAsyncComponent:rh,defineComponent:Pr,defineCustomElement:cu,defineEmits:hh,defineExpose:ph,defineModel:_h,defineOptions:gh,defineProps:dh,defineSSRCustomElement:Fp,defineSlots:mh,devtools:cp,effect:qf,effectScope:Kf,getCurrentInstance:pt,getCurrentScope:Uc,getTransitionRawChildren:Us,guardReactiveProps:Gl,h:Ws,handleError:gn,hasInjectionContext:Nh,hydrate:vu,initCustomFormatter:sp,initDirectivesForSSR:tg,inject:et,isMemoSame:Zl,isProxy:ao,isReactive:Qt,isReadonly:nn,isRef:we,isRuntimeOnly:ep,isShallow:lr,isVNode:$t,markRaw:co,mergeDefaults:Eh,mergeModels:wh,mergeProps:zl,nextTick:Ar,normalizeClass:Cr,normalizeProps:$f,normalizeStyle:Tr,onActivated:yl,onBeforeMount:El,onBeforeUnmount:$s,onBeforeUpdate:wl,onDeactivated:vl,onErrorCaptured:Sl,onMounted:kr,onRenderTracked:Cl,onRenderTriggered:Tl,onScopeDispose:Gf,onServerPrefetch:Il,onUnmounted:Vs,onUpdated:Bs,openBlock:Nr,popScopeId:Ud,provide:tr,proxyRefs:fo,pushScopeId:xd,queuePostFlushCb:us,reactive:Sr,readonly:oo,ref:Sn,registerRuntimeCompiler:Zh,render:Ui,renderList:ah,renderSlot:lh,resolveComponent:al,resolveDirective:Kd,resolveDynamicComponent:Wd,resolveFilter:dp,resolveTransitionHooks:Mn,setBlockTracking:Pi,setDevtoolsHook:lp,setTransitionHooks:rn,shallowReactive:io,shallowReadonly:gd,shallowRef:Qc,ssrContextKey:fl,ssrUtils:fp,stop:Jf,toDisplayString:Wf,toHandlerKey:Zn,toHandlers:uh,toRaw:re,toRef:Cd,toRefs:wd,toValue:vd,transformVNodeArgs:Gh,triggerRef:yd,unref:Dt,useAttrs:bh,useCssModule:$p,useCssVars:Ip,useModel:rp,useSSRContext:dl,useSlots:vh,useTransitionState:vo,vModelCheckbox:Po,vModelDynamic:pu,vModelRadio:Oo,vModelSelect:du,vModelText:ys,vShow:ou,version:eu,warn:op,watch:Pn,watchEffect:Zd,watchPostEffect:hl,watchSyncEffect:pl,withAsyncContext:Th,withCtx:po,withDefaults:yh,withDirectives:th,withKeys:Zp,withMemo:ip,withModifiers:Xp,withScopeId:Fd},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const vn=typeof document<"u";function sg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function ci(t,e){const n={};for(const r in e){const s=e[r];n[r]=Je(s)?s.map(t):t(s)}return n}const ir=()=>{},Je=Array.isArray,Iu=/#/g,ig=/&/g,og=/\//g,ag=/=/g,cg=/\?/g,Tu=/\+/g,lg=/%5B/g,ug=/%5D/g,Cu=/%5E/g,fg=/%60/g,Su=/%7B/g,dg=/%7C/g,Au=/%7D/g,hg=/%20/g;function ko(t){return encodeURI(""+t).replace(dg,"|").replace(lg,"[").replace(ug,"]")}function pg(t){return ko(t).replace(Su,"{").replace(Au,"}").replace(Cu,"^")}function Fi(t){return ko(t).replace(Tu,"%2B").replace(hg,"+").replace(Iu,"%23").replace(ig,"%26").replace(fg,"`").replace(Su,"{").replace(Au,"}").replace(Cu,"^")}function gg(t){return Fi(t).replace(ag,"%3D")}function mg(t){return ko(t).replace(Iu,"%23").replace(cg,"%3F")}function _g(t){return t==null?"":mg(t).replace(og,"%2F")}function mr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yg=/\/$/,vg=t=>t.replace(yg,"");function li(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ig(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:mr(o)}}function bg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xa(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Eg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fn(e.matched[r],n.matched[s])&&Ru(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ru(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wg(t[n],e[n]))return!1;return!0}function wg(t,e){return Je(t)?Ua(t,e):Je(e)?Ua(e,t):t===e}function Ua(t,e){return Je(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ig(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var _r;(function(t){t.pop="pop",t.push="push"})(_r||(_r={}));var or;(function(t){t.back="back",t.forward="forward",t.unknown=""})(or||(or={}));function Tg(t){if(!t)if(vn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vg(t)}const Cg=/^[^#]+#/;function Sg(t,e){return t.replace(Cg,"#")+e}function Ag(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Gs=()=>({left:window.scrollX,top:window.scrollY});function Rg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ag(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Fa(t,e){return(history.state?history.state.position-e:-1)+t}const Bi=new Map;function Pg(t,e){Bi.set(t,e)}function Og(t){const e=Bi.get(t);return Bi.delete(t),e}let kg=()=>location.protocol+"//"+location.host;function Pu(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),xa(c,"")}return xa(n,t)+r+s}function Ng(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=Pu(t,location),b=n.value,P=e.value;let F=0;if(h){if(n.value=m,e.value=h,o&&o===b){o=null;return}F=P?h.position-P.position:0}else r(m);s.forEach(M=>{M(n.value,b,{delta:F,type:_r.pop,direction:F?F>0?or.forward:or.back:or.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const b=s.indexOf(h);b>-1&&s.splice(b,1)};return i.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(oe({},h.state,{scroll:Gs()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ba(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Gs():null}}function Lg(t){const{history:e,location:n}=window,r={value:Pu(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:kg()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=oe({},e.state,Ba(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=oe({},s.value,e.state,{forward:c,scroll:Gs()});i(u.current,u,!0);const f=oe({},Ba(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Dg(t){t=Tg(t);const e=Lg(t),n=Ng(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=oe({location:"",base:t,go:r,createHref:Sg.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Mg(t){return typeof t=="string"||t&&typeof t=="object"}function Ou(t){return typeof t=="string"||typeof t=="symbol"}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ku=Symbol("");var $a;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($a||($a={}));function Bn(t,e){return oe(new Error,{type:t,[ku]:!0},e)}function it(t,e){return t instanceof Error&&ku in t&&(e==null||!!(t.type&e))}const Va="[^/]+?",xg={sensitive:!1,strict:!1,start:!0,end:!0},Ug=/[.+*?^${}()[\]/\\]/g;function Fg(t,e){const n=oe({},xg,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Ug,"\\$&"),m+=40;else if(h.type===1){const{value:b,repeatable:P,optional:F,regexp:M}=h;i.push({name:b,repeatable:P,optional:F});const w=M||Va;if(w!==Va){m+=10;try{new RegExp(`(${w})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${b}" (${w}): `+y.message)}}let g=P?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(g=F&&l.length<2?`(?:/${g})`:"/"+g),F&&(g+="?"),s+=g,m+=20,F&&(m+=-8),P&&(m+=-20),w===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",b=i[h-1];f[b.name]=m&&b.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:b,repeatable:P,optional:F}=m,M=b in l?l[b]:"";if(Je(M)&&!P)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const w=Je(M)?M.join("/"):M;if(!w)if(F)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=w}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Bg(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $g(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Bg(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ha(r))return 1;if(Ha(s))return-1}return s.length-r.length}function Ha(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vg={type:0,value:""},Hg=/[a-zA-Z0-9_]/;function jg(t){if(!t)return[[]];if(t==="/")return[[Vg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Hg.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Wg(t,e,n){const r=Fg(jg(t.path),n),s=oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kg(t,e){const n=[],r=new Map;e=Ka({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,h){const m=!h,b=Gg(u);b.aliasOf=h&&h.record;const P=Ka(e,u),F=[b];if("alias"in u){const g=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of g)F.push(oe({},b,{components:h?h.record.components:b.components,path:y,aliasOf:h?h.record:b}))}let M,w;for(const g of F){const{path:y}=g;if(f&&y[0]!=="/"){const E=f.record.path,I=E[E.length-1]==="/"?"":"/";g.path=f.record.path+(y&&I+y)}if(M=Wg(g,f,P),h?h.alias.push(M):(w=w||M,w!==M&&w.alias.push(M),m&&u.name&&!Wa(M)&&o(u.name)),b.children){const E=b.children;for(let I=0;I<E.length;I++)i(E[I],M,h&&h.children[I])}h=h||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&c(M)}return w?()=>{o(w)}:ir}function o(u){if(Ou(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&$g(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Nu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Wa(u)&&r.set(u.record.name,u)}function l(u,f){let h,m={},b,P;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Bn(1,{location:u});P=h.record.name,m=oe(ja(f.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),u.params&&ja(u.params,h.keys.map(w=>w.name))),b=h.stringify(m)}else if(u.path!=null)b=u.path,h=n.find(w=>w.re.test(b)),h&&(m=h.parse(b),P=h.record.name);else{if(h=f.name?r.get(f.name):n.find(w=>w.re.test(f.path)),!h)throw Bn(1,{location:u,currentLocation:f});P=h.record.name,m=oe({},f.params,u.params),b=h.stringify(m)}const F=[];let M=h;for(;M;)F.unshift(M.record),M=M.parent;return{name:P,path:b,params:m,matched:F,meta:qg(F)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ja(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Gg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function zg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Wa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qg(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function Ka(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Nu(t,e){return e.children.some(n=>n===t||Nu(t,n))}function Jg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Tu," "),o=i.indexOf("="),a=mr(o<0?i:i.slice(0,o)),c=o<0?null:mr(i.slice(o+1));if(a in e){let l=e[a];Je(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ga(t){let e="";for(let n in t){const r=t[n];if(n=gg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Je(r)?r.map(i=>i&&Fi(i)):[r&&Fi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Yg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Xg=Symbol(""),za=Symbol(""),No=Symbol(""),Lu=Symbol(""),$i=Symbol("");function Gn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(Bn(4,{from:n,to:e})):h instanceof Error?c(h):Mg(h)?c(Bn(2,{from:e,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function ui(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Qg(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Rt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=sg(u)?u.default:u;o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&Rt(m,n,r,o,a,s)()}))}}return i}function Qg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qa(t){const e=et(No),n=et(Lu),r=Ve(()=>e.resolve(Dt(t.to))),s=Ve(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Fn.bind(null,u));if(h>-1)return h;const m=Ja(c[l-2]);return l>1&&Ja(u)===m&&f[f.length-1].path!==m?f.findIndex(Fn.bind(null,c[l-2])):h}),i=Ve(()=>s.value>-1&&nm(n.params,r.value.params)),o=Ve(()=>s.value>-1&&s.value===n.matched.length-1&&Ru(n.params,r.value.params));function a(c={}){return tm(c)?e[Dt(t.replace)?"replace":"push"](Dt(t.to)).catch(ir):Promise.resolve()}return{route:r,href:Ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Zg=Pr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qa,setup(t,{slots:e}){const n=Sr(qa(t)),{options:r}=et(No),s=Ve(()=>({[Ya(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ya(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ws("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),em=Zg;function tm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ja(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ya=(t,e,n)=>t??e??n,rm=Pr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=et($i),s=Ve(()=>t.route||r.value),i=et(za,0),o=Ve(()=>{let l=Dt(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ve(()=>s.value.matched[o.value]);tr(za,Ve(()=>o.value+1)),tr(Xg,a),tr($i,s);const c=Sn();return Pn(()=>[c.value,a.value,t.name],([l,u,f],[h,m,b])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Fn(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Xa(n.default,{Component:h,route:l});const m=f.props[u],b=m?m===!0?l.params:typeof m=="function"?m(l):m:null,F=Ws(h,oe({},b,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Xa(n.default,{Component:F,route:l})||F}}});function Xa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sm=rm;function im(t){const e=Kg(t.routes,t),n=t.parseQuery||Jg,r=t.stringifyQuery||Ga,s=t.history,i=Gn(),o=Gn(),a=Gn(),c=Qc(Et);let l=Et;vn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ci.bind(null,C=>""+C),f=ci.bind(null,_g),h=ci.bind(null,mr);function m(C,V){let v,B;return Ou(C)?(v=e.getRecordMatcher(C),B=V):B=C,e.addRoute(B,v)}function b(C){const V=e.getRecordMatcher(C);V&&e.removeRoute(V)}function P(){return e.getRoutes().map(C=>C.record)}function F(C){return!!e.getRecordMatcher(C)}function M(C,V){if(V=oe({},V||c.value),typeof C=="string"){const p=li(n,C,V.path),_=e.resolve({path:p.path},V),S=s.createHref(p.fullPath);return oe(p,_,{params:h(_.params),hash:mr(p.hash),redirectedFrom:void 0,href:S})}let v;if(C.path!=null)v=oe({},C,{path:li(n,C.path,V.path).path});else{const p=oe({},C.params);for(const _ in p)p[_]==null&&delete p[_];v=oe({},C,{params:f(p)}),V.params=f(V.params)}const B=e.resolve(v,V),ee=C.hash||"";B.params=u(h(B.params));const ne=bg(r,oe({},C,{hash:pg(ee),path:B.path})),d=s.createHref(ne);return oe({fullPath:ne,hash:ee,query:r===Ga?Yg(C.query):C.query||{}},B,{redirectedFrom:void 0,href:d})}function w(C){return typeof C=="string"?li(n,C,c.value.path):oe({},C)}function g(C,V){if(l!==C)return Bn(8,{from:V,to:C})}function y(C){return L(C)}function E(C){return y(oe(w(C),{replace:!0}))}function I(C){const V=C.matched[C.matched.length-1];if(V&&V.redirect){const{redirect:v}=V;let B=typeof v=="function"?v(C):v;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=w(B):{path:B},B.params={}),oe({query:C.query,hash:C.hash,params:B.path!=null?{}:C.params},B)}}function L(C,V){const v=l=M(C),B=c.value,ee=C.state,ne=C.force,d=C.replace===!0,p=I(v);if(p)return L(oe(w(p),{state:typeof p=="object"?oe({},ee,p.state):ee,force:ne,replace:d}),V||v);const _=v;_.redirectedFrom=V;let S;return!ne&&Eg(r,B,v)&&(S=Bn(16,{to:_,from:B}),We(B,B,!0,!1)),(S?Promise.resolve(S):O(_,B)).catch(T=>it(T)?it(T,2)?T:st(T):K(T,_,B)).then(T=>{if(T){if(it(T,2))return L(oe({replace:d},w(T.to),{state:typeof T.to=="object"?oe({},ee,T.to.state):ee,force:ne}),V||_)}else T=N(_,B,!0,d,ee);return G(_,B,T),T})}function R(C,V){const v=g(C,V);return v?Promise.reject(v):Promise.resolve()}function x(C){const V=Wt.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(C):C()}function O(C,V){let v;const[B,ee,ne]=om(C,V);v=ui(B.reverse(),"beforeRouteLeave",C,V);for(const p of B)p.leaveGuards.forEach(_=>{v.push(Rt(_,C,V))});const d=R.bind(null,C,V);return v.push(d),_e(v).then(()=>{v=[];for(const p of i.list())v.push(Rt(p,C,V));return v.push(d),_e(v)}).then(()=>{v=ui(ee,"beforeRouteUpdate",C,V);for(const p of ee)p.updateGuards.forEach(_=>{v.push(Rt(_,C,V))});return v.push(d),_e(v)}).then(()=>{v=[];for(const p of ne)if(p.beforeEnter)if(Je(p.beforeEnter))for(const _ of p.beforeEnter)v.push(Rt(_,C,V));else v.push(Rt(p.beforeEnter,C,V));return v.push(d),_e(v)}).then(()=>(C.matched.forEach(p=>p.enterCallbacks={}),v=ui(ne,"beforeRouteEnter",C,V,x),v.push(d),_e(v))).then(()=>{v=[];for(const p of o.list())v.push(Rt(p,C,V));return v.push(d),_e(v)}).catch(p=>it(p,8)?p:Promise.reject(p))}function G(C,V,v){a.list().forEach(B=>x(()=>B(C,V,v)))}function N(C,V,v,B,ee){const ne=g(C,V);if(ne)return ne;const d=V===Et,p=vn?history.state:{};v&&(B||d?s.replace(C.fullPath,oe({scroll:d&&p&&p.scroll},ee)):s.push(C.fullPath,ee)),c.value=C,We(C,V,v,d),st()}let J;function ie(){J||(J=s.listen((C,V,v)=>{if(!_t.listening)return;const B=M(C),ee=I(B);if(ee){L(oe(ee,{replace:!0}),B).catch(ir);return}l=B;const ne=c.value;vn&&Pg(Fa(ne.fullPath,v.delta),Gs()),O(B,ne).catch(d=>it(d,12)?d:it(d,2)?(L(d.to,B).then(p=>{it(p,20)&&!v.delta&&v.type===_r.pop&&s.go(-1,!1)}).catch(ir),Promise.reject()):(v.delta&&s.go(-v.delta,!1),K(d,B,ne))).then(d=>{d=d||N(B,ne,!1),d&&(v.delta&&!it(d,8)?s.go(-v.delta,!1):v.type===_r.pop&&it(d,20)&&s.go(-1,!1)),G(B,ne,d)}).catch(ir)}))}let ce=Gn(),W=Gn(),Q;function K(C,V,v){st(C);const B=W.list();return B.length?B.forEach(ee=>ee(C,V,v)):console.error(C),Promise.reject(C)}function Le(){return Q&&c.value!==Et?Promise.resolve():new Promise((C,V)=>{ce.add([C,V])})}function st(C){return Q||(Q=!C,ie(),ce.list().forEach(([V,v])=>C?v(C):V()),ce.reset()),C}function We(C,V,v,B){const{scrollBehavior:ee}=t;if(!vn||!ee)return Promise.resolve();const ne=!v&&Og(Fa(C.fullPath,0))||(B||!v)&&history.state&&history.state.scroll||null;return Ar().then(()=>ee(C,V,ne)).then(d=>d&&Rg(d)).catch(d=>K(d,C,V))}const Ie=C=>s.go(C);let mt;const Wt=new Set,_t={currentRoute:c,listening:!0,addRoute:m,removeRoute:b,hasRoute:F,getRoutes:P,resolve:M,options:t,push:y,replace:E,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:Le,install(C){const V=this;C.component("RouterLink",em),C.component("RouterView",sm),C.config.globalProperties.$router=V,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(c)}),vn&&!mt&&c.value===Et&&(mt=!0,y(s.location).catch(ee=>{}));const v={};for(const ee in Et)Object.defineProperty(v,ee,{get:()=>c.value[ee],enumerable:!0});C.provide(No,V),C.provide(Lu,io(v)),C.provide($i,c);const B=C.unmount;Wt.add(C),C.unmount=function(){Wt.delete(C),Wt.size<1&&(l=Et,J&&J(),J=null,c.value=Et,mt=!1,Q=!1),B()}}};function _e(C){return C.reduce((V,v)=>V.then(()=>x(v)),Promise.resolve())}return _t}function om(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Fn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Fn(l,c))||s.push(c))}return[n,r,s]}const am="modulepreload",cm=function(t){return"/"+t},Qa={},Ge=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=cm(o),o in Qa)return;Qa[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const h=i[f];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":am,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},lm=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})};var Za={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},um=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[f],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Du(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):um(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new fm;const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const b=l<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dm=function(t){const e=Du(t);return Mu.encodeByteArray(e,!0)},vs=function(t){return dm(t).replace(/\./g,"")},xu=function(t){try{return Mu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=()=>hm().__FIREBASE_DEFAULTS__,gm=()=>{if(typeof process>"u"||typeof Za>"u")return;const t=Za.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xu(t[1]);return e&&JSON.parse(e)},zs=()=>{try{return pm()||gm()||mm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uu=t=>{var e,n;return(n=(e=zs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_m=t=>{const e=Uu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fu=()=>{var t;return(t=zs())===null||t===void 0?void 0:t.config},Bu=t=>{var e;return(e=zs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vs(JSON.stringify(n)),vs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function bm(){var t;const e=(t=zs())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Em(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Im(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pb(){return!bm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tm(){try{return typeof indexedDB=="object"}catch{return!1}}function Cm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="FirebaseError";class gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sm,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Am(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gt(s,a,r)}}function Am(t,e){return t.replace(Rm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rm=/\{\$([^}]+)}/g;function Pm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ec(i)&&ec(o)){if(!bs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ec(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Om(t,e){const n=new km(t,e);return n.subscribe.bind(n)}class km{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=fi),s.error===void 0&&(s.error=fi),s.complete===void 0&&(s.complete=fi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ym;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mm(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dm(t){return t===zt?void 0:t}function Mm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Um={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Fm=fe.INFO,Bm={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},$m=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $u{constructor(e){this.name=e,this._logLevel=Fm,this._logHandler=$m,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Um[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Vm=(t,e)=>e.some(n=>t instanceof n);let tc,nc;function Hm(){return tc||(tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jm(){return nc||(nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vu=new WeakMap,Vi=new WeakMap,Hu=new WeakMap,di=new WeakMap,Lo=new WeakMap;function Wm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vu.set(n,t)}).catch(()=>{}),Lo.set(e,t),e}function Km(t){if(Vi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vi.set(t,e)}let Hi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gm(t){Hi=t(Hi)}function zm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hi(this),e,...n);return Hu.set(r,e.sort?e.sort():[e]),Mt(r)}:jm().includes(t)?function(...e){return t.apply(hi(this),e),Mt(Vu.get(this))}:function(...e){return Mt(t.apply(hi(this),e))}}function qm(t){return typeof t=="function"?zm(t):(t instanceof IDBTransaction&&Km(t),Vm(t,Hm())?new Proxy(t,Hi):t)}function Mt(t){if(t instanceof IDBRequest)return Wm(t);if(di.has(t))return di.get(t);const e=qm(t);return e!==t&&(di.set(t,e),Lo.set(e,t)),e}const hi=t=>Lo.get(t);function Jm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ym=["get","getKey","getAll","getAllKeys","count"],Xm=["put","add","delete","clear"],pi=new Map;function rc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pi.get(e))return pi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ym.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return pi.set(e,i),i}Gm(t=>({...t,get:(e,n,r)=>rc(e,n)||t.get(e,n,r),has:(e,n)=>!!rc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ji="@firebase/app",sc="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new $u("@firebase/app"),e_="@firebase/app-compat",t_="@firebase/analytics-compat",n_="@firebase/analytics",r_="@firebase/app-check-compat",s_="@firebase/app-check",i_="@firebase/auth",o_="@firebase/auth-compat",a_="@firebase/database",c_="@firebase/database-compat",l_="@firebase/functions",u_="@firebase/functions-compat",f_="@firebase/installations",d_="@firebase/installations-compat",h_="@firebase/messaging",p_="@firebase/messaging-compat",g_="@firebase/performance",m_="@firebase/performance-compat",__="@firebase/remote-config",y_="@firebase/remote-config-compat",v_="@firebase/storage",b_="@firebase/storage-compat",E_="@firebase/firestore",w_="@firebase/firestore-compat",I_="firebase",T_="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="[DEFAULT]",C_={[ji]:"fire-core",[e_]:"fire-core-compat",[n_]:"fire-analytics",[t_]:"fire-analytics-compat",[s_]:"fire-app-check",[r_]:"fire-app-check-compat",[i_]:"fire-auth",[o_]:"fire-auth-compat",[a_]:"fire-rtdb",[c_]:"fire-rtdb-compat",[l_]:"fire-fn",[u_]:"fire-fn-compat",[f_]:"fire-iid",[d_]:"fire-iid-compat",[h_]:"fire-fcm",[p_]:"fire-fcm-compat",[g_]:"fire-perf",[m_]:"fire-perf-compat",[__]:"fire-rc",[y_]:"fire-rc-compat",[v_]:"fire-gcs",[b_]:"fire-gcs-compat",[E_]:"fire-fst",[w_]:"fire-fst-compat","fire-js":"fire-js",[I_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Map,Ki=new Map;function S_(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(Ki.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;Ki.set(e,t);for(const n of Es.values())S_(n,t);return!0}function Do(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xt=new Dr("app","Firebase",A_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=T_;function ju(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(n||(n=Fu()),!n)throw xt.create("no-options");const i=Es.get(s);if(i){if(bs(n,i.options)&&bs(r,i.config))return i;throw xt.create("duplicate-app",{appName:s})}const o=new xm(s);for(const c of Ki.values())o.addComponent(c);const a=new R_(n,r,o);return Es.set(s,a),a}function Wu(t=Wi){const e=Es.get(t);if(!e&&t===Wi&&Fu())return ju();if(!e)throw xt.create("no-app",{appName:t});return e}function Ut(t,e,n){var r;let s=(r=C_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}$n(new cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="firebase-heartbeat-database",O_=1,yr="firebase-heartbeat-store";let gi=null;function Ku(){return gi||(gi=Jm(P_,O_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yr)}catch(n){console.warn(n)}}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),gi}async function k_(t){try{const n=(await Ku()).transaction(yr),r=await n.objectStore(yr).get(Gu(t));return await n.done,r}catch(e){if(e instanceof gt)ln.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}}async function ic(t,e){try{const r=(await Ku()).transaction(yr,"readwrite");await r.objectStore(yr).put(e,Gu(t)),await r.done}catch(n){if(n instanceof gt)ln.warn(n.message);else{const r=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function Gu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=1024,L_=30*24*60*60*1e3;class D_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new x_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=oc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=L_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=oc(),{heartbeatsToSend:r,unsentEntries:s}=M_(this._heartbeatsCache.heartbeats),i=vs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function oc(){return new Date().toISOString().substring(0,10)}function M_(t,e=N_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ac(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ac(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class x_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tm()?Cm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await k_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ac(t){return vs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t){$n(new cn("platform-logger",e=>new Qm(e),"PRIVATE")),$n(new cn("heartbeat",e=>new D_(e),"PRIVATE")),Ut(ji,sc,t),Ut(ji,sc,"esm2017"),Ut("fire-js","")}U_("");function Mo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function zu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F_=zu,qu=new Dr("auth","Firebase",zu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new $u("@firebase/auth");function B_(t,...e){ws.logLevel<=fe.WARN&&ws.warn(`Auth (${xr}): ${t}`,...e)}function rs(t,...e){ws.logLevel<=fe.ERROR&&ws.error(`Auth (${xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,...e){throw xo(t,...e)}function tt(t,...e){return xo(t,...e)}function $_(t,e,n){const r=Object.assign(Object.assign({},F_()),{[e]:n});return new Dr("auth","Firebase",r).create(e,{appName:t.name})}function xo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qu.create(t,...e)}function X(t,e,...n){if(!t)throw xo(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rs(e),new Error(e)}function dt(t,e){t||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function V_(){return cc()==="http:"||cc()==="https:"}function cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V_()||Em()||"connection"in navigator)?navigator.onLine:!0}function j_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=vm()||wm()}get(){return H_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=new Ur(3e4,6e4);function Ht(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jt(t,e,n,r,s={}){return Yu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Mr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ju.fetch()(Xu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Yu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},W_),e);try{const s=new z_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $_(t,u,l);Ye(t,u)}}catch(s){if(s instanceof gt)throw s;Ye(t,"network-request-failed",{message:String(s)})}}async function Fr(t,e,n,r,s={}){const i=await jt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ye(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Xu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Uo(t.config,s):`${t.config.apiScheme}://${s}`}function G_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class z_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),K_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tt(t,e,r);return s.customData._tokenResponse=n,s}function lc(t){return t!==void 0&&t.enterprise!==void 0}class q_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return G_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function J_(t,e){return jt(t,"GET","/v2/recaptchaConfig",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(t,e){return jt(t,"POST","/v1/accounts:delete",e)}async function X_(t,e){return jt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Q_(t,e=!1){const n=je(t),r=await n.getIdToken(e),s=Fo(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ar(mi(s.auth_time)),issuedAtTime:ar(mi(s.iat)),expirationTime:ar(mi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mi(t){return Number(t)*1e3}function Fo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rs("JWT malformed, contained fewer than 3 sections"),null;try{const s=xu(n);return s?JSON.parse(s):(rs("Failed to decode base64 JWT payload"),null)}catch(s){return rs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Z_(t){const e=Fo(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gt&&ey(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ey({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t){var e;const n=t.auth,r=await t.getIdToken(),s=await vr(t,X_(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sy(i.providerUserInfo):[],a=ry(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function ny(t){const e=je(t);await Is(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ry(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sy(t){return t.map(e=>{var{providerId:n}=e,r=Mo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(t,e){const n=await Yu(t,{},async()=>{const r=Mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Xu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ju.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oy(t,e){return jt(t,"POST","/v2/accounts:revokeToken",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Z_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await iy(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new br;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Mo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ty(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vr(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Q_(this,e)}reload(){return ny(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Is(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vr(this,Y_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:y,isAnonymous:E,providerData:I,stsTokenManager:L}=n;X(g&&L,e,"internal-error");const R=br.fromJSON(this.name,L);X(typeof g=="string",e,"internal-error"),wt(f,e.name),wt(h,e.name),X(typeof y=="boolean",e,"internal-error"),X(typeof E=="boolean",e,"internal-error"),wt(m,e.name),wt(b,e.name),wt(P,e.name),wt(F,e.name),wt(M,e.name),wt(w,e.name);const x=new tn({uid:g,auth:e,email:h,emailVerified:y,displayName:f,isAnonymous:E,photoURL:b,phoneNumber:m,tenantId:P,stsTokenManager:R,createdAt:M,lastLoginAt:w});return I&&Array.isArray(I)&&(x.providerData=I.map(O=>Object.assign({},O))),F&&(x._redirectEventId=F),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new br;s.updateFromServerResponse(n);const i=new tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Is(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Map;function lt(t){dt(t instanceof Function,"Expected a class definition");let e=uc.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zu.type="NONE";const fc=Zu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e,n){return`firebase:${t}:${e}:${n}`}class kn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ss(this.userKey,s.apiKey,i),this.fullPersistenceKey=ss("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new kn(lt(fc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||lt(fc);const o=ss(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=tn._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new kn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new kn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ef(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sf(e))return"Blackberry";if(of(e))return"Webos";if(Bo(e))return"Safari";if((e.includes("chrome/")||tf(e))&&!e.includes("edge/"))return"Chrome";if(rf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ef(t=Se()){return/firefox\//i.test(t)}function Bo(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tf(t=Se()){return/crios\//i.test(t)}function nf(t=Se()){return/iemobile/i.test(t)}function rf(t=Se()){return/android/i.test(t)}function sf(t=Se()){return/blackberry/i.test(t)}function of(t=Se()){return/webos/i.test(t)}function qs(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ay(t=Se()){var e;return qs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cy(){return Im()&&document.documentMode===10}function af(t=Se()){return qs(t)||rf(t)||of(t)||sf(t)||/windows phone/i.test(t)||nf(t)}function ly(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t,e=[]){let n;switch(t){case"Browser":n=dc(Se());break;case"Worker":n=`${dc(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fy(t,e={}){return jt(t,"GET","/v2/passwordPolicy",Ht(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=6;class hy{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hc(this),this.idTokenSubscription=new hc(this),this.beforeStateQueue=new uy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await kn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Is(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fy(this),n=new hy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&B_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mn(t){return je(t)}class hc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Om(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gy(t){Js=t}function lf(t){return Js.loadJS(t)}function my(){return Js.recaptchaEnterpriseScript}function _y(){return Js.gapiScript}function yy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vy="recaptcha-enterprise",by="NO_RECAPTCHA";class Ey{constructor(e){this.type=vy,this.auth=mn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{J_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new q_(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;lc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(by)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&lc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=my();c.length!==0&&(c+=a),lf(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function pc(t,e,n,r=!1){const s=new Ey(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zi(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await pc(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await pc(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e){const n=Do(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bs(i,e??{}))return s;Ye(s,"already-initialized")}return n.initialize({options:e})}function Iy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ty(t,e,n){const r=mn(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=uf(e),{host:o,port:a}=Cy(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Sy()}function uf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Cy(t){const e=uf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gc(o)}}}function gc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function Ay(t,e){return jt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(t,e){return Fr(t,"POST","/v1/accounts:signInWithPassword",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Py(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",Ht(t,e))}async function Oy(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends $o{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Er(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Er(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zi(e,n,"signInWithPassword",Ry);case"emailLink":return Py(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zi(e,r,"signUpPassword",Ay);case"emailLink":return Oy(e,{idToken:n,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t,e){return Fr(t,"POST","/v1/accounts:signInWithIdp",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="http://localhost";class un extends $o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Mo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new un(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}buildRequest(){const e={requestUri:ky,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ly(t){const e=Jn(Yn(t)).link,n=e?Jn(Yn(e)).deep_link_id:null,r=Jn(Yn(t)).deep_link_id;return(r?Jn(Yn(r)).link:null)||r||n||e||t}class Vo{constructor(e){var n,r,s,i,o,a;const c=Jn(Yn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Ny((s=c.mode)!==null&&s!==void 0?s:null);X(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ly(e);try{return new Vo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.providerId=Hn.PROVIDER_ID}static credential(e,n){return Er._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vo.parseLink(n);return X(r,"argument-error"),Er._fromEmailAndCode(e,r.code,r.tenantId)}}Hn.PROVIDER_ID="password";Hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends ff{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Br{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Br{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return un._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Br{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Br{constructor(){super("twitter.com")}static credential(e,n){return un._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(t,e){return Fr(t,"POST","/v1/accounts:signUp",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),o=mc(r);return new fn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=mc(r);return new fn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function mc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends gt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ts.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ts(e,n,r,s)}}function df(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ts._fromErrorAndOperation(t,i,e,r):i})}async function My(t,e,n=!1){const r=await vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await vr(t,df(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Fo(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),fn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(t,e,n=!1){const r="signIn",s=await df(t,r,e),i=await fn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Uy(t,e){return hf(mn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(t){const e=mn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ob(t,e,n){const r=mn(t),o=await zi(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dy).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&pf(t),c}),a=await fn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function kb(t,e,n){return Uy(je(t),Hn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pf(t),r})}function Fy(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function By(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function gf(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function _c(t){return je(t).signOut()}const Cs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(){const t=Se();return Bo(t)||qs(t)}const Vy=1e3,Hy=10;class _f extends mf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$y()&&ly(),this.fallbackToPolling=af(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Hy):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_f.type="LOCAL";const jy=_f;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends mf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yf.type="SESSION";const vf=yf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ys(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Wy(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ho("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function Gy(t){nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function zy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jy(){return bf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="firebaseLocalStorageDb",Yy=1,Ss="firebaseLocalStorage",wf="fbase_key";class $r{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xs(t,e){return t.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function Xy(){const t=indexedDB.deleteDatabase(Ef);return new $r(t).toPromise()}function qi(){const t=indexedDB.open(Ef,Yy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ss,{keyPath:wf})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ss)?e(r):(r.close(),await Xy(),e(await qi()))})})}async function yc(t,e,n){const r=Xs(t,!0).put({[wf]:e,value:n});return new $r(r).toPromise()}async function Qy(t,e){const n=Xs(t,!1).get(e),r=await new $r(n).toPromise();return r===void 0?null:r.value}function vc(t,e){const n=Xs(t,!0).delete(e);return new $r(n).toPromise()}const Zy=800,ev=3;class If{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ev)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(Jy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zy(),!this.activeServiceWorker)return;this.sender=new Ky(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qi();return await yc(e,Cs,"1"),await vc(e,Cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qy(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xs(s,!1).getAll();return new $r(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}If.type="LOCAL";const tv=If;new Ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t,e){return e?lt(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends $o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rv(t){return hf(t.auth,new jo(t),t.bypassAuthState)}function sv(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),xy(n,new jo(t),t.bypassAuthState)}async function iv(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),My(n,new jo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rv;case"linkViaPopup":case"linkViaRedirect":return iv;case"reauthViaPopup":case"reauthViaRedirect":return sv;default:Ye(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Ur(2e3,1e4);class bn extends Tf{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Ho();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ov.get())};e()}}bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="pendingRedirect",is=new Map;class cv extends Tf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=is.get(this.auth._key());if(!e){try{const r=await lv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}is.set(this.auth._key(),e)}return this.bypassAuthState||is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lv(t,e){const n=dv(e),r=fv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uv(t,e){is.set(t._key(),e)}function fv(t){return lt(t._redirectPersistence)}function dv(t){return ss(av,t.config.apiKey,t.name)}async function hv(t,e,n=!1){const r=mn(t),s=nv(r,e),o=await new cv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=10*60*1e3;class gv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Cf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pv&&this.cachedEventUids.clear(),this.cachedEventUids.has(bc(e))}saveEventToCache(e){this.cachedEventUids.add(bc(e)),this.lastProcessedEventTime=Date.now()}}function bc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(t,e={}){return jt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vv=/^https?/;async function bv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _v(t);for(const n of e)try{if(Ev(n))return}catch{}Ye(t,"unauthorized-domain")}function Ev(t){const e=Gi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vv.test(n))return!1;if(yv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=new Ur(3e4,6e4);function Ec(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Iv(t){return new Promise((e,n)=>{var r,s,i;function o(){Ec(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ec(),n(tt(t,"network-request-failed"))},timeout:wv.get()})}if(!((s=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const a=yy("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},lf(`${_y()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw os=null,e})}let os=null;function Tv(t){return os=os||Iv(t),os}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=new Ur(5e3,15e3),Sv="__/auth/iframe",Av="emulator/auth/iframe",Rv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ov(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uo(e,Av):`https://${t.config.authDomain}/${Sv}`,r={apiKey:e.apiKey,appName:t.name,v:xr},s=Pv.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mr(r).slice(1)}`}async function kv(t){const e=await Tv(t),n=nt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:Ov(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},Cv.get());function c(){nt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lv=500,Dv=600,Mv="_blank",xv="http://localhost";class wc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uv(t,e,n,r=Lv,s=Dv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Nv),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Se().toLowerCase();n&&(a=tf(l)?Mv:n),ef(l)&&(e=e||xv,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,b])=>`${h}${m}=${b},`,"");if(ay(l)&&a!=="_self")return Fv(e||"",a),new wc(null);const f=window.open(e||"",a,u);X(f,t,"popup-blocked");try{f.focus()}catch{}return new wc(f)}function Fv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="__/auth/handler",$v="emulator/auth/handler",Vv=encodeURIComponent("fac");async function Ic(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xr,eventId:s};if(e instanceof ff){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof Br){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Vv}=${encodeURIComponent(c)}`:"";return`${Hv(t)}?${Mr(a).slice(1)}${l}`}function Hv({config:t}){return t.emulator?Uo(t,$v):`https://${t.authDomain}/${Bv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="webStorageSupport";class jv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vf,this._completeRedirectFn=hv,this._overrideRedirectResult=uv}async _openPopup(e,n,r,s){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ic(e,n,r,Gi(),s);return Uv(e,o,Ho())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ic(e,n,r,Gi(),s);return Gy(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kv(e),r=new gv(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_i,{type:_i},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_i];o!==void 0&&n(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return af()||Bo()||qs()}}const Wv=jv;var Tc="@firebase/auth",Cc="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zv(t){$n(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cf(t)},l=new py(r,s,i,c);return Iy(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new cn("auth-internal",e=>{const n=mn(e.getProvider("auth").getImmediate());return(r=>new Kv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(Tc,Cc,Gv(t)),Ut(Tc,Cc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=5*60,Jv=Bu("authIdTokenMaxAge")||qv;let Sc=null;const Yv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Jv)return;const s=n==null?void 0:n.token;Sc!==s&&(Sc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Xn(t=Wu()){const e=Do(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wy(t,{popupRedirectResolver:Wv,persistence:[tv,jy,vf]}),r=Bu("authTokenSyncURL");if(r){const i=Yv(r);By(n,i,()=>i(n.currentUser)),Fy(n,o=>i(o))}const s=Uu("auth");return s&&Ty(n,`http://${s}`),n}function Xv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gy({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Xv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zv("Browser");var Qv="firebase",Zv="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(Qv,Zv,"app");const eb={apiKey:"AIzaSyB4dw5I-nvsIVUy6SiWF3AoTTiCIgqCKBc",authDomain:"virtual-queue-app2.firebaseapp.com",projectId:"virtual-queue-app2",storageBucket:"virtual-queue-app2.appspot.com",messagingSenderId:"749463391146",appId:"1:749463391146:web:88b8299c8628022011b9d3"},Qn=ju(eb);function tb(t,e,n){console.log("Checking auth");const r=Xn(Qn);gf(r,s=>s?(console.log(s),n()):n({path:"/login"}))}function Me(t){return()=>lm(Object.assign({"../pages/Cart.vue":()=>Ge(()=>import("./Cart-C7vo4ESI.js"),__vite__mapDeps([0,1,2])),"../pages/Home.vue":()=>Ge(()=>import("./Home-BayGXlP5.js"),__vite__mapDeps([3,4,1,5,6])),"../pages/Login.vue":()=>Ge(()=>import("./Login-Br3aNnyp.js"),__vite__mapDeps([7,4,1,5,8])),"../pages/Menu.vue":()=>Ge(()=>import("./Menu-D4DL7A66.js"),__vite__mapDeps([9,10,11,1,12,0,2,13])),"../pages/OrderConfirmation.vue":()=>Ge(()=>import("./OrderConfirmation-CnP_rvIb.js"),__vite__mapDeps([14,1,15])),"../pages/Products.vue":()=>Ge(()=>import("./Products-Ba9rr0Qz.js"),__vite__mapDeps([10,11,1,12])),"../pages/Queue.vue":()=>Ge(()=>import("./Queue-BvlssvDu.js"),__vite__mapDeps([16,1,17])),"../pages/Registration.vue":()=>Ge(()=>import("./Registration-BUo5pqYK.js"),__vite__mapDeps([18,4,1,5,19])),"../pages/Staff.vue":()=>Ge(()=>import("./Staff-Cv4qUPDZ.js"),__vite__mapDeps([20,1,21])),"../pages/StaffLogin.vue":()=>Ge(()=>import("./StaffLogin-DgiWAOGf.js"),__vite__mapDeps([22,1,23])),"../pages/ViewProducts.vue":()=>Ge(()=>import("./ViewProducts-BCHjHqWr.js"),__vite__mapDeps([24,11,4,1,5,25]))}),`../pages/${t}.vue`)}const nb=[{path:"/",component:Me("Home")},{path:"/blog",component:Me("Blog")},{path:"/registration",component:Me("Registration")},{path:"/login",component:Me("Login")},{path:"/secure",component:Me("Secure"),beforeEnter:tb},{path:"/upload",component:Me("Upload")},{path:"/queue",component:Me("Queue")},{path:"/stafflogin",component:Me("StaffLogin")},{path:"/staff",component:Me("Staff")},{path:"/menu",component:Me("Menu")},{path:"/cart",component:Me("Cart")},{path:"/orderConfirmation",component:Me("OrderConfirmation")},{path:"/viewproducts",component:Me("ViewProducts")}];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="type.googleapis.com/google.protobuf.Int64Value",sb="type.googleapis.com/google.protobuf.UInt64Value";function Sf(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Ji(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Ji(e));if(typeof t=="function"||typeof t=="object")return Sf(t,e=>Ji(e));throw new Error("Data cannot be encoded in JSON: "+t)}function As(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case rb:case sb:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>As(e)):typeof t=="function"||typeof t=="object"?Sf(t,e=>As(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ln extends gt{constructor(e,n,r){super(`${Wo}/${e}`,n||""),this.details=r}}function ib(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ob(t,e){let n=ib(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!Ac[o])return new Ln("internal","internal");n=Ac[o],r=o}const a=i.message;typeof a=="string"&&(r=a),s=i.details,s!==void 0&&(s=As(s))}}catch{}return n==="ok"?null:new Ln(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="us-central1";function cb(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Ln("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class lb{constructor(e,n,r,s,i=Yi,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new ab(n,r,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin,this.region=Yi}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function ub(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function fb(t,e,n){return r=>hb(t,e,r,n||{})}async function db(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}function hb(t,e,n,r){const s=t._url(e);return pb(t,s,n,r)}async function pb(t,e,n,r){n=Ji(n);const s={data:n},i={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,c=cb(a),l=await Promise.race([db(e,s,i,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!l)throw new Ln("cancelled","Firebase Functions instance was deleted.");const u=ob(l.status,l.json);if(u)throw u;if(!l.json)throw new Ln("internal","Response is not valid JSON object.");let f=l.json.data;if(typeof f>"u"&&(f=l.json.result),typeof f>"u")throw new Ln("internal","Response is missing data field.");return{data:As(f)}}const Rc="@firebase/functions",Pc="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="auth-internal",mb="app-check-internal",_b="messaging-internal";function yb(t,e){const n=(r,{instanceIdentifier:s})=>{const i=r.getProvider("app").getImmediate(),o=r.getProvider(gb),a=r.getProvider(_b),c=r.getProvider(mb);return new lb(i,o,a,c,s,t)};$n(new cn(Wo,n,"PUBLIC").setMultipleInstances(!0)),Ut(Rc,Pc,e),Ut(Rc,Pc,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t=Wu(),e=Yi){const r=Do(je(t),Wo).getImmediate({identifier:e}),s=_m("functions");return s&&bb(r,...s),r}function bb(t,e,n){ub(je(t),e,n)}function Oc(t,e,n){return fb(je(t),e,n)}yb(fetch.bind(self));const Eb={name:"Navigation",data(){return{isLoggedIn:!1,uid:""}},mounted(){window.addEventListener("beforeunload",this.handleBeforeUnload)},created(){const t=Xn(Qn);gf(t,e=>{e?(console.log(e),this.isLoggedIn=!0,this.uid=e.uid,console.log("nav uid",this.uid)):(this.isLoggedIn=!1,this.logout())})},methods:{async handleBeforeUnload(t){if(Xn().currentUser)try{await this.logout()}catch(r){console.log(r)}t.preventDefault(),t.returnValue=""},beforeUnmount(){window.removeEventListener("beforeunload",this.handleBeforeUnload)},logout(){const t=vb(Qn),e=Oc(t,"logout"),n=Oc(t,"staffLogout");console.log(this.uid),this.uid==="afMWnPNYX6ZT5PA63RP8kyE3XZi1"?n().then(r=>{console.log("result from staff logout:",r),_c(Xn(Qn)).then(()=>{this.$router.push("/"),console.log("logged out from getAuth")})}).catch(r=>{const s=r.code,i=r.message;console.log(s),console.log(i)}):(console.log("user logout"),e({uid:this.uid}).then(r=>{console.log("result:",r),_c(Xn(Qn)).then(()=>{this.$router.push("/"),console.log("logged out")})}).catch(r=>{const s=r.code,i=r.message;console.log(s),console.log(i)}))}}},wb={__name:"App",setup(t){return(e,n)=>{const r=al("router-view");return Nr(),Wl(be,null,[de(Eb),de(r)],64)}}};var Ib=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tb(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Af={exports:{}};const Cb=Tb(rg);(function(t,e){(function(r,s){t.exports=s(Cb)})(Ib,n=>(()=>{var r={878:(a,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.default=(l,u)=>{const f=l.__vccOpts||l;for(const[h,m]of u)f[h]=m;return f}},976:a=>{a.exports=n}},s={};function i(a){var c=s[a];if(c!==void 0)return c.exports;var l=s[a]={exports:{}};return r[a](l,l.exports,i),l.exports}i.d=(a,c)=>{for(var l in c)i.o(c,l)&&!i.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:c[l]})},i.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),i.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{Component:()=>_t,LoadingPlugin:()=>C,default:()=>V,useLoading:()=>_e});var a=i(976);function c(v){var B;typeof v.remove<"u"?v.remove():(B=v.parentNode)==null||B.removeChild(v)}function l(v,B,ee){let ne=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const d=(0,a.h)(v,B,ne),p=document.createElement("div");return p.classList.add("vld-container"),ee.appendChild(p),(0,a.render)(d,p),d.component}function u(){return typeof window<"u"}const f=u()?window.HTMLElement:Object,h=["aria-busy"],m={class:"vl-icon"};function b(v,B,ee,ne,d,p){return(0,a.openBlock)(),(0,a.createBlock)(a.Transition,{name:v.transition},{default:(0,a.withCtx)(()=>[(0,a.withDirectives)((0,a.createElementVNode)("div",{tabindex:"0",class:(0,a.normalizeClass)(["vl-overlay vl-active",{"vl-full-page":v.isFullPage}]),"aria-busy":v.isActive,"aria-label":"Loading",style:(0,a.normalizeStyle)({zIndex:v.zIndex})},[(0,a.createElementVNode)("div",{class:"vl-background",onClick:B[0]||(B[0]=(0,a.withModifiers)(function(){return v.cancel&&v.cancel(...arguments)},["prevent"])),style:(0,a.normalizeStyle)(v.bgStyle)},null,4),(0,a.createElementVNode)("div",m,[(0,a.renderSlot)(v.$slots,"before"),(0,a.renderSlot)(v.$slots,"default",{},()=>[((0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(v.loader),{color:v.color,width:v.width,height:v.height},null,8,["color","width","height"]))]),(0,a.renderSlot)(v.$slots,"after")])],14,h),[[a.vShow,v.isActive]])]),_:3},8,["name"])}const P={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(v){if(!this.isActive||v.target===this.$el||this.$el.contains(v.target))return;let B=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||B&&B.contains(v.target))&&(v.preventDefault(),this.$el.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},F=["width","height","stroke"],w=[(0,a.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];function g(v,B,ee,ne,d,p){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:v.width,height:v.height,stroke:v.color},w,8,F)}const y=(0,a.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var E=i(878);const L=(0,E.default)(y,[["render",g]]),R=["fill","width","height"],O=[(0,a.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)];function G(v,B,ee,ne,d,p){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:v.color,width:v.width,height:v.height},O,8,R)}const N=(0,a.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),ie=(0,E.default)(N,[["render",G]]),ce=["height","width","fill"],Q=[(0,a.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)];function K(v,B,ee,ne,d,p){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:v.height,width:v.width,fill:v.color},Q,8,ce)}const Le=(0,a.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),Ie={Spinner:L,Dots:ie,Bars:(0,E.default)(Le,[["render",K]])},mt=(0,a.defineComponent)({name:"VueLoading",mixins:[P],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,f],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:Boolean,transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},components:Ie,emits:["hide","update:active"],data(){return{isActive:this.active}},mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){!this.canCancel||!this.isActive||(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const v=this.$el.parentElement;(0,a.render)(null,v),c(v)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vl-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vl-shown")},keyPress(v){v.keyCode===27&&this.cancel()}},watch:{active(v){this.isActive=v},isActive:{handler(v){v?this.disableScroll():this.enableScroll()},immediate:!0}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),_t=(0,E.default)(mt,[["render",b]]);function _e(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{show(){let ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:v,ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B;const p={...v,...ee,...{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0}};let _=p.container;p.container||(_=document.body,p.isFullPage=!0);const S={...B,...ne};return{hide:l(_t,p,_,S).ctx.hide}}}}const C=function(v){let B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ee=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const ne=_e(B,ee);v.config.globalProperties.$loading=ne,v.provide("$loading",ne)},V=_t})(),o})())})(Af);var Sb=Af.exports;let Ab=im({history:Dg(),routes:nb});const Ko=bu(wb);Ko.use(Ab);Ko.use(Sb.LoadingPlugin);Ko.mount("#app");export{gt as A,je as B,cn as C,Wu as D,Do as E,be as F,_m as G,fe as H,Rb as I,Pb as J,Se as K,$u as L,Tm as M,xr as S,$n as _,vb as a,Nr as b,Wl as c,de as d,Co as e,To as f,Xn as g,Oc as h,Jh as i,Qn as j,So as k,Ud as l,kb as m,th as n,gf as o,xd as p,ah as q,al as r,_c as s,Wf as t,Tr as u,ys as v,po as w,Ob as x,Xp as y,Ut as z};
