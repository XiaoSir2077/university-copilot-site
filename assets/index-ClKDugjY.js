function uy(a,r){for(var o=0;o<r.length;o++){const l=r[o];if(typeof l!="string"&&!Array.isArray(l)){for(const s in l)if(s!=="default"&&!(s in a)){const u=Object.getOwnPropertyDescriptor(l,s);u&&Object.defineProperty(a,s,u.get?u:{enumerable:!0,get:()=>l[s]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(s){if(s.ep)return;s.ep=!0;const u=o(s);fetch(s.href,u)}})();function ax(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var kd={exports:{}},Lr={};var Zg;function py(){if(Zg)return Lr;Zg=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(l,s,u){var f=null;if(u!==void 0&&(f=""+u),s.key!==void 0&&(f=""+s.key),"key"in s){u={};for(var p in s)p!=="key"&&(u[p]=s[p])}else u=s;return s=u.ref,{$$typeof:a,type:l,key:f,ref:s!==void 0?s:null,props:u}}return Lr.Fragment=r,Lr.jsx=o,Lr.jsxs=o,Lr}var Kg;function fy(){return Kg||(Kg=1,kd.exports=py()),kd.exports}var h=fy(),Ed={exports:{}},st={};var Jg;function hy(){if(Jg)return st;Jg=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.iterator;function A(z){return z===null||typeof z!="object"?null:(z=w&&z[w]||z["@@iterator"],typeof z=="function"?z:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,k={};function O(z,q,$){this.props=z,this.context=q,this.refs=k,this.updater=$||R}O.prototype.isReactComponent={},O.prototype.setState=function(z,q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,q,"setState")},O.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function Y(){}Y.prototype=O.prototype;function F(z,q,$){this.props=z,this.context=q,this.refs=k,this.updater=$||R}var P=F.prototype=new Y;P.constructor=F,C(P,O.prototype),P.isPureReactComponent=!0;var Z=Array.isArray;function tt(){}var X={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function at(z,q,$){var Q=$.ref;return{$$typeof:a,type:z,key:q,ref:Q!==void 0?Q:null,props:$}}function bt(z,q){return at(z.type,q,z.props)}function St(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function Dt(z){var q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function($){return q[$]})}var pn=/\/+/g;function en(z,q){return typeof z=="object"&&z!==null&&z.key!=null?Dt(""+z.key):q.toString(36)}function zt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(tt,tt):(z.status="pending",z.then(function(q){z.status==="pending"&&(z.status="fulfilled",z.value=q)},function(q){z.status==="pending"&&(z.status="rejected",z.reason=q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function D(z,q,$,Q,lt){var pt=typeof z;(pt==="undefined"||pt==="boolean")&&(z=null);var rt=!1;if(z===null)rt=!0;else switch(pt){case"bigint":case"string":case"number":rt=!0;break;case"object":switch(z.$$typeof){case a:case r:rt=!0;break;case y:return rt=z._init,D(rt(z._payload),q,$,Q,lt)}}if(rt)return lt=lt(z),rt=Q===""?"."+en(z,0):Q,Z(lt)?($="",rt!=null&&($=rt.replace(pn,"$&/")+"/"),D(lt,q,$,"",function(re){return re})):lt!=null&&(St(lt)&&(lt=bt(lt,$+(lt.key==null||z&&z.key===lt.key?"":(""+lt.key).replace(pn,"$&/")+"/")+rt)),q.push(lt)),1;rt=0;var Wt=Q===""?".":Q+":";if(Z(z))for(var Lt=0;Lt<z.length;Lt++)Q=z[Lt],pt=Wt+en(Q,Lt),rt+=D(Q,q,$,pt,lt);else if(Lt=A(z),typeof Lt=="function")for(z=Lt.call(z),Lt=0;!(Q=z.next()).done;)Q=Q.value,pt=Wt+en(Q,Lt++),rt+=D(Q,q,$,pt,lt);else if(pt==="object"){if(typeof z.then=="function")return D(zt(z),q,$,Q,lt);throw q=String(z),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return rt}function I(z,q,$){if(z==null)return z;var Q=[],lt=0;return D(z,Q,"","",function(pt){return q.call($,pt,lt++)}),Q}function V(z){if(z._status===-1){var q=z._result;q=q(),q.then(function($){(z._status===0||z._status===-1)&&(z._status=1,z._result=$)},function($){(z._status===0||z._status===-1)&&(z._status=2,z._result=$)}),z._status===-1&&(z._status=0,z._result=q)}if(z._status===1)return z._result.default;throw z._result}var Ct=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Et={map:I,forEach:function(z,q,$){I(z,function(){q.apply(this,arguments)},$)},count:function(z){var q=0;return I(z,function(){q++}),q},toArray:function(z){return I(z,function(q){return q})||[]},only:function(z){if(!St(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return st.Activity=b,st.Children=Et,st.Component=O,st.Fragment=o,st.Profiler=s,st.PureComponent=F,st.StrictMode=l,st.Suspense=g,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,st.__COMPILER_RUNTIME={__proto__:null,c:function(z){return X.H.useMemoCache(z)}},st.cache=function(z){return function(){return z.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(z,q,$){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Q=C({},z.props),lt=z.key;if(q!=null)for(pt in q.key!==void 0&&(lt=""+q.key),q)!G.call(q,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&q.ref===void 0||(Q[pt]=q[pt]);var pt=arguments.length-2;if(pt===1)Q.children=$;else if(1<pt){for(var rt=Array(pt),Wt=0;Wt<pt;Wt++)rt[Wt]=arguments[Wt+2];Q.children=rt}return at(z.type,lt,Q)},st.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},st.createElement=function(z,q,$){var Q,lt={},pt=null;if(q!=null)for(Q in q.key!==void 0&&(pt=""+q.key),q)G.call(q,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(lt[Q]=q[Q]);var rt=arguments.length-2;if(rt===1)lt.children=$;else if(1<rt){for(var Wt=Array(rt),Lt=0;Lt<rt;Lt++)Wt[Lt]=arguments[Lt+2];lt.children=Wt}if(z&&z.defaultProps)for(Q in rt=z.defaultProps,rt)lt[Q]===void 0&&(lt[Q]=rt[Q]);return at(z,pt,lt)},st.createRef=function(){return{current:null}},st.forwardRef=function(z){return{$$typeof:p,render:z}},st.isValidElement=St,st.lazy=function(z){return{$$typeof:y,_payload:{_status:-1,_result:z},_init:V}},st.memo=function(z,q){return{$$typeof:m,type:z,compare:q===void 0?null:q}},st.startTransition=function(z){var q=X.T,$={};X.T=$;try{var Q=z(),lt=X.S;lt!==null&&lt($,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(tt,Ct)}catch(pt){Ct(pt)}finally{q!==null&&$.types!==null&&(q.types=$.types),X.T=q}},st.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},st.use=function(z){return X.H.use(z)},st.useActionState=function(z,q,$){return X.H.useActionState(z,q,$)},st.useCallback=function(z,q){return X.H.useCallback(z,q)},st.useContext=function(z){return X.H.useContext(z)},st.useDebugValue=function(){},st.useDeferredValue=function(z,q){return X.H.useDeferredValue(z,q)},st.useEffect=function(z,q){return X.H.useEffect(z,q)},st.useEffectEvent=function(z){return X.H.useEffectEvent(z)},st.useId=function(){return X.H.useId()},st.useImperativeHandle=function(z,q,$){return X.H.useImperativeHandle(z,q,$)},st.useInsertionEffect=function(z,q){return X.H.useInsertionEffect(z,q)},st.useLayoutEffect=function(z,q){return X.H.useLayoutEffect(z,q)},st.useMemo=function(z,q){return X.H.useMemo(z,q)},st.useOptimistic=function(z,q){return X.H.useOptimistic(z,q)},st.useReducer=function(z,q,$){return X.H.useReducer(z,q,$)},st.useRef=function(z){return X.H.useRef(z)},st.useState=function(z){return X.H.useState(z)},st.useSyncExternalStore=function(z,q,$){return X.H.useSyncExternalStore(z,q,$)},st.useTransition=function(){return X.H.useTransition()},st.version="19.2.3",st}var Wg;function Xo(){return Wg||(Wg=1,Ed.exports=hy()),Ed.exports}var v=Xo();const fa=ax(v),su=uy({__proto__:null,default:fa},[v]);var zd={exports:{}},Or={},Ad={exports:{}},Td={};var tm;function gy(){return tm||(tm=1,(function(a){function r(D,I){var V=D.length;D.push(I);t:for(;0<V;){var Ct=V-1>>>1,Et=D[Ct];if(0<s(Et,I))D[Ct]=I,D[V]=Et,V=Ct;else break t}}function o(D){return D.length===0?null:D[0]}function l(D){if(D.length===0)return null;var I=D[0],V=D.pop();if(V!==I){D[0]=V;t:for(var Ct=0,Et=D.length,z=Et>>>1;Ct<z;){var q=2*(Ct+1)-1,$=D[q],Q=q+1,lt=D[Q];if(0>s($,V))Q<Et&&0>s(lt,$)?(D[Ct]=lt,D[Q]=V,Ct=Q):(D[Ct]=$,D[q]=V,Ct=q);else if(Q<Et&&0>s(lt,V))D[Ct]=lt,D[Q]=V,Ct=Q;else break t}}return I}function s(D,I){var V=D.sortIndex-I.sortIndex;return V!==0?V:D.id-I.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();a.unstable_now=function(){return f.now()-p}}var g=[],m=[],y=1,b=null,w=3,A=!1,R=!1,C=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function P(D){for(var I=o(m);I!==null;){if(I.callback===null)l(m);else if(I.startTime<=D)l(m),I.sortIndex=I.expirationTime,r(g,I);else break;I=o(m)}}function Z(D){if(C=!1,P(D),!R)if(o(g)!==null)R=!0,tt||(tt=!0,Dt());else{var I=o(m);I!==null&&zt(Z,I.startTime-D)}}var tt=!1,X=-1,G=5,at=-1;function bt(){return k?!0:!(a.unstable_now()-at<G)}function St(){if(k=!1,tt){var D=a.unstable_now();at=D;var I=!0;try{t:{R=!1,C&&(C=!1,Y(X),X=-1),A=!0;var V=w;try{n:{for(P(D),b=o(g);b!==null&&!(b.expirationTime>D&&bt());){var Ct=b.callback;if(typeof Ct=="function"){b.callback=null,w=b.priorityLevel;var Et=Ct(b.expirationTime<=D);if(D=a.unstable_now(),typeof Et=="function"){b.callback=Et,P(D),I=!0;break n}b===o(g)&&l(g),P(D)}else l(g);b=o(g)}if(b!==null)I=!0;else{var z=o(m);z!==null&&zt(Z,z.startTime-D),I=!1}}break t}finally{b=null,w=V,A=!1}I=void 0}}finally{I?Dt():tt=!1}}}var Dt;if(typeof F=="function")Dt=function(){F(St)};else if(typeof MessageChannel<"u"){var pn=new MessageChannel,en=pn.port2;pn.port1.onmessage=St,Dt=function(){en.postMessage(null)}}else Dt=function(){O(St,0)};function zt(D,I){X=O(function(){D(a.unstable_now())},I)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(D){switch(w){case 1:case 2:case 3:var I=3;break;default:I=w}var V=w;w=I;try{return D()}finally{w=V}},a.unstable_requestPaint=function(){k=!0},a.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=w;w=D;try{return I()}finally{w=V}},a.unstable_scheduleCallback=function(D,I,V){var Ct=a.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Ct+V:Ct):V=Ct,D){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=V+Et,D={id:y++,callback:I,priorityLevel:D,startTime:V,expirationTime:Et,sortIndex:-1},V>Ct?(D.sortIndex=V,r(m,D),o(g)===null&&D===o(m)&&(C?(Y(X),X=-1):C=!0,zt(Z,V-Ct))):(D.sortIndex=Et,r(g,D),R||A||(R=!0,tt||(tt=!0,Dt()))),D},a.unstable_shouldYield=bt,a.unstable_wrapCallback=function(D){var I=w;return function(){var V=w;w=I;try{return D.apply(this,arguments)}finally{w=V}}}})(Td)),Td}var nm;function my(){return nm||(nm=1,Ad.exports=gy()),Ad.exports}var Rd={exports:{}},cn={};var em;function xy(){if(em)return cn;em=1;var a=Xo();function r(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(g,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:b==null?null:""+b,children:g,containerInfo:m,implementation:y}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,cn.createPortal=function(g,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return u(g,m,null,y)},cn.flushSync=function(g){var m=f.T,y=l.p;try{if(f.T=null,l.p=2,g)return g()}finally{f.T=m,l.p=y,l.d.f()}},cn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(g,m))},cn.prefetchDNS=function(g){typeof g=="string"&&l.d.D(g)},cn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var y=m.as,b=p(y,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?l.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:A}):y==="script"&&l.d.X(g,{crossOrigin:b,integrity:w,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},cn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);l.d.M(g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(g)},cn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=p(y,m.crossOrigin);l.d.L(g,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},cn.preloadModule=function(g,m){if(typeof g=="string")if(m){var y=p(m.as,m.crossOrigin);l.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(g)},cn.requestFormReset=function(g){l.d.r(g)},cn.unstable_batchedUpdates=function(g,m){return g(m)},cn.useFormState=function(g,m,y){return f.H.useFormState(g,m,y)},cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},cn.version="19.2.3",cn}var am;function ix(){if(am)return Rd.exports;am=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Rd.exports=xy(),Rd.exports}var im;function vy(){if(im)return Or;im=1;var a=my(),r=Xo(),o=ix();function l(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(u(t)!==t)throw Error(l(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(l(188));return n!==t?null:t}for(var e=t,i=n;;){var c=e.return;if(c===null)break;var d=c.alternate;if(d===null){if(i=c.return,i!==null){e=i;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===e)return g(c),t;if(d===i)return g(c),n;d=d.sibling}throw Error(l(188))}if(e.return!==i.return)e=c,i=d;else{for(var x=!1,_=c.child;_;){if(_===e){x=!0,e=c,i=d;break}if(_===i){x=!0,i=c,e=d;break}_=_.sibling}if(!x){for(_=d.child;_;){if(_===e){x=!0,e=d,i=c;break}if(_===i){x=!0,i=d,e=c;break}_=_.sibling}if(!x)throw Error(l(189))}}if(e.alternate!==i)throw Error(l(190))}if(e.tag!==3)throw Error(l(188));return e.stateNode.current===e?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var b=Object.assign,w=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),F=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),at=Symbol.for("react.activity"),bt=Symbol.for("react.memo_cache_sentinel"),St=Symbol.iterator;function Dt(t){return t===null||typeof t!="object"?null:(t=St&&t[St]||t["@@iterator"],typeof t=="function"?t:null)}var pn=Symbol.for("react.client.reference");function en(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case O:return"Profiler";case k:return"StrictMode";case Z:return"Suspense";case tt:return"SuspenseList";case at:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case F:return t.displayName||"Context";case Y:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return n=t.displayName||null,n!==null?n:en(t.type)||"Memo";case G:n=t._payload,t=t._init;try{return en(t(n))}catch{}}return null}var zt=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},Ct=[],Et=-1;function z(t){return{current:t}}function q(t){0>Et||(t.current=Ct[Et],Ct[Et]=null,Et--)}function $(t,n){Et++,Ct[Et]=t.current,t.current=n}var Q=z(null),lt=z(null),pt=z(null),rt=z(null);function Wt(t,n){switch($(pt,n),$(lt,t),$(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?bg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=bg(n),t=yg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Q),$(Q,t)}function Lt(){q(Q),q(lt),q(pt)}function re(t){t.memoizedState!==null&&$(rt,t);var n=Q.current,e=yg(n,t.type);n!==e&&($(lt,t),$(Q,e))}function He(t){lt.current===t&&(q(Q),q(lt)),rt.current===t&&(q(rt),jr._currentValue=V)}var qe,Iu;function va(t){if(qe===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);qe=n&&n[1]||"",Iu=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qe+t+Iu}var ss=!1;function cs(t,n){if(!t||ss)return"";ss=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(B){var M=B}Reflect.construct(t,[],U)}else{try{U.call()}catch(B){M=B}t.call(U.prototype)}}else{try{throw Error()}catch(B){M=B}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(B){if(B&&M&&typeof B.stack=="string")return[B.stack,M.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),x=d[0],_=d[1];if(x&&_){var S=x.split(`
`),j=_.split(`
`);for(c=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(i===S.length||c===j.length)for(i=S.length-1,c=j.length-1;1<=i&&0<=c&&S[i]!==j[c];)c--;for(;1<=i&&0<=c;i--,c--)if(S[i]!==j[c]){if(i!==1||c!==1)do if(i--,c--,0>c||S[i]!==j[c]){var L=`
`+S[i].replace(" at new "," at ");return t.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",t.displayName)),L}while(1<=i&&0<=c);break}}}finally{ss=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?va(e):""}function Yb(t,n){switch(t.tag){case 26:case 27:case 5:return va(t.type);case 16:return va("Lazy");case 13:return t.child!==n&&n!==null?va("Suspense Fallback"):va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return cs(t.type,!1);case 11:return cs(t.type.render,!1);case 1:return cs(t.type,!0);case 31:return va("Activity");default:return""}}function Qu(t){try{var n="",e=null;do n+=Yb(t,e),e=t,t=t.return;while(t);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ds=Object.prototype.hasOwnProperty,us=a.unstable_scheduleCallback,ps=a.unstable_cancelCallback,Vb=a.unstable_shouldYield,Gb=a.unstable_requestPaint,Sn=a.unstable_now,$b=a.unstable_getCurrentPriorityLevel,Zu=a.unstable_ImmediatePriority,Ku=a.unstable_UserBlockingPriority,el=a.unstable_NormalPriority,Xb=a.unstable_LowPriority,Ju=a.unstable_IdlePriority,Pb=a.log,Ib=a.unstable_setDisableYieldValue,Gi=null,Cn=null;function Ue(t){if(typeof Pb=="function"&&Ib(t),Cn&&typeof Cn.setStrictMode=="function")try{Cn.setStrictMode(Gi,t)}catch{}}var kn=Math.clz32?Math.clz32:Kb,Qb=Math.log,Zb=Math.LN2;function Kb(t){return t>>>=0,t===0?32:31-(Qb(t)/Zb|0)|0}var al=256,il=262144,rl=4194304;function ba(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ll(t,n,e){var i=t.pendingLanes;if(i===0)return 0;var c=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var _=i&134217727;return _!==0?(i=_&~d,i!==0?c=ba(i):(x&=_,x!==0?c=ba(x):e||(e=_&~t,e!==0&&(c=ba(e))))):(_=i&~d,_!==0?c=ba(_):x!==0?c=ba(x):e||(e=i&~t,e!==0&&(c=ba(e)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,e=n&-n,d>=e||d===32&&(e&4194048)!==0)?n:c}function $i(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Jb(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wu(){var t=rl;return rl<<=1,(rl&62914560)===0&&(rl=4194304),t}function fs(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function Xi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wb(t,n,e,i,c,d){var x=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var _=t.entanglements,S=t.expirationTimes,j=t.hiddenUpdates;for(e=x&~e;0<e;){var L=31-kn(e),U=1<<L;_[L]=0,S[L]=-1;var M=j[L];if(M!==null)for(j[L]=null,L=0;L<M.length;L++){var B=M[L];B!==null&&(B.lane&=-536870913)}e&=~U}i!==0&&tp(t,i,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function tp(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var i=31-kn(n);t.entangledLanes|=n,t.entanglements[i]=t.entanglements[i]|1073741824|e&261930}function np(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var i=31-kn(e),c=1<<i;c&n|t[i]&n&&(t[i]|=n),e&=~c}}function ep(t,n){var e=n&-n;return e=(e&42)!==0?1:hs(e),(e&(t.suspendedLanes|n))!==0?0:e}function hs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function gs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ap(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:Vg(t.type))}function ip(t,n){var e=I.p;try{return I.p=t,n()}finally{I.p=e}}var Fe=Math.random().toString(36).slice(2),an="__reactFiber$"+Fe,gn="__reactProps$"+Fe,$a="__reactContainer$"+Fe,ms="__reactEvents$"+Fe,t0="__reactListeners$"+Fe,n0="__reactHandles$"+Fe,rp="__reactResources$"+Fe,Pi="__reactMarker$"+Fe;function xs(t){delete t[an],delete t[gn],delete t[ms],delete t[t0],delete t[n0]}function Xa(t){var n=t[an];if(n)return n;for(var e=t.parentNode;e;){if(n=e[$a]||e[an]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=zg(t);t!==null;){if(e=t[an])return e;t=zg(t)}return n}t=e,e=t.parentNode}return null}function Pa(t){if(t=t[an]||t[$a]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ii(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(l(33))}function Ia(t){var n=t[rp];return n||(n=t[rp]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[Pi]=!0}var lp=new Set,op={};function ya(t,n){Qa(t,n),Qa(t+"Capture",n)}function Qa(t,n){for(op[t]=n,t=0;t<n.length;t++)lp.add(n[t])}var e0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sp={},cp={};function a0(t){return ds.call(cp,t)?!0:ds.call(sp,t)?!1:e0.test(t)?cp[t]=!0:(sp[t]=!0,!1)}function ol(t,n,e){if(a0(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+e)}}function sl(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+e)}}function fe(t,n,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,""+i)}}function On(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function i0(t,n,e){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){e=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return e},setValue:function(x){e=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function vs(t){if(!t._valueTracker){var n=dp(t)?"checked":"value";t._valueTracker=i0(t,n,""+t[n])}}function up(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),i="";return t&&(i=dp(t)?t.checked?"true":"false":t.value),t=i,t!==e?(n.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var r0=/[\n"\\]/g;function Hn(t){return t.replace(r0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bs(t,n,e,i,c,d,x,_){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+On(n)):t.value!==""+On(n)&&(t.value=""+On(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?ys(t,x,On(n)):e!=null?ys(t,x,On(e)):i!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.name=""+On(_):t.removeAttribute("name")}function pp(t,n,e,i,c,d,x,_){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||e!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){vs(t);return}e=e!=null?""+On(e):"",n=n!=null?""+On(n):e,_||n===t.value||(t.value=n),t.defaultValue=n}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=_?t.checked:!!i,t.defaultChecked=!!i,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),vs(t)}function ys(t,n,e){n==="number"&&cl(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Za(t,n,e,i){if(t=t.options,n){n={};for(var c=0;c<e.length;c++)n["$"+e[c]]=!0;for(e=0;e<t.length;e++)c=n.hasOwnProperty("$"+t[e].value),t[e].selected!==c&&(t[e].selected=c),c&&i&&(t[e].defaultSelected=!0)}else{for(e=""+On(e),n=null,c=0;c<t.length;c++){if(t[c].value===e){t[c].selected=!0,i&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function fp(t,n,e){if(n!=null&&(n=""+On(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+On(e):""}function hp(t,n,e,i){if(n==null){if(i!=null){if(e!=null)throw Error(l(92));if(zt(i)){if(1<i.length)throw Error(l(93));i=i[0]}e=i}e==null&&(e=""),n=e}e=On(n),t.defaultValue=e,i=t.textContent,i===e&&i!==""&&i!==null&&(t.value=i),vs(t)}function Ka(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var l0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gp(t,n,e){var i=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?i?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":i?t.setProperty(n,e):typeof e!="number"||e===0||l0.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function mp(t,n,e){if(n!=null&&typeof n!="object")throw Error(l(62));if(t=t.style,e!=null){for(var i in e)!e.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var c in n)i=n[c],n.hasOwnProperty(c)&&e[c]!==i&&gp(t,c,i)}else for(var d in n)n.hasOwnProperty(d)&&gp(t,d,n[d])}function _s(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),s0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(t){return s0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function he(){}var ws=null;function Ss(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ja=null,Wa=null;function xp(t){var n=Pa(t);if(n&&(t=n.stateNode)){var e=t[gn]||null;t:switch(t=n.stateNode,n.type){case"input":if(bs(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Hn(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var i=e[n];if(i!==t&&i.form===t.form){var c=i[gn]||null;if(!c)throw Error(l(90));bs(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<e.length;n++)i=e[n],i.form===t.form&&up(i)}break t;case"textarea":fp(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&Za(t,!!e.multiple,n,!1)}}}var Cs=!1;function vp(t,n,e){if(Cs)return t(n,e);Cs=!0;try{var i=t(n);return i}finally{if(Cs=!1,(Ja!==null||Wa!==null)&&(Kl(),Ja&&(n=Ja,t=Wa,Wa=Ja=null,xp(n),t)))for(n=0;n<t.length;n++)xp(t[n])}}function Qi(t,n){var e=t.stateNode;if(e===null)return null;var i=e[gn]||null;if(i===null)return null;e=i[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(l(231,n,typeof e));return e}var ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ks=!1;if(ge)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){ks=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{ks=!1}var Ye=null,Es=null,ul=null;function bp(){if(ul)return ul;var t,n=Es,e=n.length,i,c="value"in Ye?Ye.value:Ye.textContent,d=c.length;for(t=0;t<e&&n[t]===c[t];t++);var x=e-t;for(i=1;i<=x&&n[e-i]===c[d-i];i++);return ul=c.slice(t,1<i?1-i:void 0)}function pl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function yp(){return!1}function mn(t){function n(e,i,c,d,x){this._reactName=e,this._targetInst=c,this.type=i,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(e=t[_],this[_]=e?e(d):d[_]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?fl:yp,this.isPropagationStopped=yp,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var _a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=mn(_a),Ki=b({},_a,{view:0,detail:0}),c0=mn(Ki),zs,As,Ji,gl=b({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(zs=t.screenX-Ji.screenX,As=t.screenY-Ji.screenY):As=zs=0,Ji=t),zs)},movementY:function(t){return"movementY"in t?t.movementY:As}}),_p=mn(gl),d0=b({},gl,{dataTransfer:0}),u0=mn(d0),p0=b({},Ki,{relatedTarget:0}),Ts=mn(p0),f0=b({},_a,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=mn(f0),g0=b({},_a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m0=mn(g0),x0=b({},_a,{data:0}),wp=mn(x0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=y0[t])?!!n[t]:!1}function Rs(){return _0}var w0=b({},Ki,{key:function(t){if(t.key){var n=v0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S0=mn(w0),C0=b({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=mn(C0),k0=b({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),E0=mn(k0),z0=b({},_a,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=mn(z0),T0=b({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=mn(T0),N0=b({},_a,{newState:0,oldState:0}),j0=mn(N0),M0=[9,13,27,32],Ns=ge&&"CompositionEvent"in window,Wi=null;ge&&"documentMode"in document&&(Wi=document.documentMode);var D0=ge&&"TextEvent"in window&&!Wi,Cp=ge&&(!Ns||Wi&&8<Wi&&11>=Wi),kp=" ",Ep=!1;function zp(t,n){switch(t){case"keyup":return M0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function B0(t,n){switch(t){case"compositionend":return Ap(n);case"keypress":return n.which!==32?null:(Ep=!0,kp);case"textInput":return t=n.data,t===kp&&Ep?null:t;default:return null}}function L0(t,n){if(ti)return t==="compositionend"||!Ns&&zp(t,n)?(t=bp(),ul=Es=Ye=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var O0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!O0[t.type]:n==="textarea"}function Rp(t,n,e,i){Ja?Wa?Wa.push(i):Wa=[i]:Ja=i,n=io(n,"onChange"),0<n.length&&(e=new hl("onChange","change",null,e,i),t.push({event:e,listeners:n}))}var tr=null,nr=null;function H0(t){fg(t,0)}function ml(t){var n=Ii(t);if(up(n))return t}function Np(t,n){if(t==="change")return n}var jp=!1;if(ge){var js;if(ge){var Ms="oninput"in document;if(!Ms){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),Ms=typeof Mp.oninput=="function"}js=Ms}else js=!1;jp=js&&(!document.documentMode||9<document.documentMode)}function Dp(){tr&&(tr.detachEvent("onpropertychange",Bp),nr=tr=null)}function Bp(t){if(t.propertyName==="value"&&ml(nr)){var n=[];Rp(n,nr,t,Ss(t)),vp(H0,n)}}function q0(t,n,e){t==="focusin"?(Dp(),tr=n,nr=e,tr.attachEvent("onpropertychange",Bp)):t==="focusout"&&Dp()}function U0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(nr)}function F0(t,n){if(t==="click")return ml(n)}function Y0(t,n){if(t==="input"||t==="change")return ml(n)}function V0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var En=typeof Object.is=="function"?Object.is:V0;function er(t,n){if(En(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),i=Object.keys(n);if(e.length!==i.length)return!1;for(i=0;i<e.length;i++){var c=e[i];if(!ds.call(n,c)||!En(t[c],n[c]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,n){var e=Lp(t);t=0;for(var i;e;){if(e.nodeType===3){if(i=t+e.textContent.length,t<=n&&i>=n)return{node:e,offset:n-t};t=i}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Lp(e)}}function Hp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Hp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=cl(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=cl(t.document)}return n}function Ds(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var G0=ge&&"documentMode"in document&&11>=document.documentMode,ni=null,Bs=null,ar=null,Ls=!1;function Up(t,n,e){var i=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Ls||ni==null||ni!==cl(i)||(i=ni,"selectionStart"in i&&Ds(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ar&&er(ar,i)||(ar=i,i=io(Bs,"onSelect"),0<i.length&&(n=new hl("onSelect","select",null,n,e),t.push({event:n,listeners:i}),n.target=ni)))}function wa(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var ei={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},Os={},Fp={};ge&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Sa(t){if(Os[t])return Os[t];if(!ei[t])return t;var n=ei[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in Fp)return Os[t]=n[e];return t}var Yp=Sa("animationend"),Vp=Sa("animationiteration"),Gp=Sa("animationstart"),$0=Sa("transitionrun"),X0=Sa("transitionstart"),P0=Sa("transitioncancel"),$p=Sa("transitionend"),Xp=new Map,Hs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hs.push("scrollEnd");function Qn(t,n){Xp.set(t,n),ya(n,[t])}var xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},qn=[],ai=0,qs=0;function vl(){for(var t=ai,n=qs=ai=0;n<t;){var e=qn[n];qn[n++]=null;var i=qn[n];qn[n++]=null;var c=qn[n];qn[n++]=null;var d=qn[n];if(qn[n++]=null,i!==null&&c!==null){var x=i.pending;x===null?c.next=c:(c.next=x.next,x.next=c),i.pending=c}d!==0&&Pp(e,c,d)}}function bl(t,n,e,i){qn[ai++]=t,qn[ai++]=n,qn[ai++]=e,qn[ai++]=i,qs|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Us(t,n,e,i){return bl(t,n,e,i),yl(t)}function Ca(t,n){return bl(t,null,null,n),yl(t)}function Pp(t,n,e){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e);for(var c=!1,d=t.return;d!==null;)d.childLanes|=e,i=d.alternate,i!==null&&(i.childLanes|=e),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&n!==null&&(c=31-kn(e),t=d.hiddenUpdates,i=t[c],i===null?t[c]=[n]:i.push(n),n.lane=e|536870912),d):null}function yl(t){if(50<kr)throw kr=0,Qc=null,Error(l(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ii={};function I0(t,n,e,i){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,n,e,i){return new I0(t,n,e,i)}function Fs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function me(t,n){var e=t.alternate;return e===null?(e=zn(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function Ip(t,n){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _l(t,n,e,i,c,d){var x=0;if(i=t,typeof t=="function")Fs(t)&&(x=1);else if(typeof t=="string")x=W1(t,e,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case at:return t=zn(31,e,n,c),t.elementType=at,t.lanes=d,t;case C:return ka(e.children,c,d,n);case k:x=8,c|=24;break;case O:return t=zn(12,e,n,c|2),t.elementType=O,t.lanes=d,t;case Z:return t=zn(13,e,n,c),t.elementType=Z,t.lanes=d,t;case tt:return t=zn(19,e,n,c),t.elementType=tt,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:x=10;break t;case Y:x=9;break t;case P:x=11;break t;case X:x=14;break t;case G:x=16,i=null;break t}x=29,e=Error(l(130,t===null?"null":typeof t,"")),i=null}return n=zn(x,e,n,c),n.elementType=t,n.type=i,n.lanes=d,n}function ka(t,n,e,i){return t=zn(7,t,i,n),t.lanes=e,t}function Ys(t,n,e){return t=zn(6,t,null,n),t.lanes=e,t}function Qp(t){var n=zn(18,null,null,0);return n.stateNode=t,n}function Vs(t,n,e){return n=zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Zp=new WeakMap;function Un(t,n){if(typeof t=="object"&&t!==null){var e=Zp.get(t);return e!==void 0?e:(n={value:t,source:n,stack:Qu(n)},Zp.set(t,n),n)}return{value:t,source:n,stack:Qu(n)}}var ri=[],li=0,wl=null,ir=0,Fn=[],Yn=0,Ve=null,le=1,oe="";function xe(t,n){ri[li++]=ir,ri[li++]=wl,wl=t,ir=n}function Kp(t,n,e){Fn[Yn++]=le,Fn[Yn++]=oe,Fn[Yn++]=Ve,Ve=t;var i=le;t=oe;var c=32-kn(i)-1;i&=~(1<<c),e+=1;var d=32-kn(n)+c;if(30<d){var x=c-c%5;d=(i&(1<<x)-1).toString(32),i>>=x,c-=x,le=1<<32-kn(n)+c|e<<c|i,oe=d+t}else le=1<<d|e<<c|i,oe=t}function Gs(t){t.return!==null&&(xe(t,1),Kp(t,1,0))}function $s(t){for(;t===wl;)wl=ri[--li],ri[li]=null,ir=ri[--li],ri[li]=null;for(;t===Ve;)Ve=Fn[--Yn],Fn[Yn]=null,oe=Fn[--Yn],Fn[Yn]=null,le=Fn[--Yn],Fn[Yn]=null}function Jp(t,n){Fn[Yn++]=le,Fn[Yn++]=oe,Fn[Yn++]=Ve,le=n.id,oe=n.overflow,Ve=t}var rn=null,Ot=null,vt=!1,Ge=null,Vn=!1,Xs=Error(l(519));function $e(t){var n=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rr(Un(n,t)),Xs}function Wp(t){var n=t.stateNode,e=t.type,i=t.memoizedProps;switch(n[an]=t,n[gn]=i,e){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(e=0;e<zr.length;e++)gt(zr[e],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),pp(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),hp(n,i.value,i.defaultValue,i.children)}e=i.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||i.suppressHydrationWarning===!0||xg(n.textContent,e)?(i.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),i.onScroll!=null&&gt("scroll",n),i.onScrollEnd!=null&&gt("scrollend",n),i.onClick!=null&&(n.onclick=he),n=!0):n=!1,n||$e(t,!0)}function tf(t){for(rn=t.return;rn;)switch(rn.tag){case 5:case 31:case 13:Vn=!1;return;case 27:case 3:Vn=!0;return;default:rn=rn.return}}function oi(t){if(t!==rn)return!1;if(!vt)return tf(t),vt=!0,!1;var n=t.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||dd(t.type,t.memoizedProps)),e=!e),e&&Ot&&$e(t),tf(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));Ot=Eg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));Ot=Eg(t)}else n===27?(n=Ot,ra(t.type)?(t=gd,gd=null,Ot=t):Ot=n):Ot=rn?$n(t.stateNode.nextSibling):null;return!0}function Ea(){Ot=rn=null,vt=!1}function Ps(){var t=Ge;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),Ge=null),t}function rr(t){Ge===null?Ge=[t]:Ge.push(t)}var Is=z(null),za=null,ve=null;function Xe(t,n,e){$(Is,n._currentValue),n._currentValue=e}function be(t){t._currentValue=Is.current,q(Is)}function Qs(t,n,e){for(;t!==null;){var i=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),t===e)break;t=t.return}}function Zs(t,n,e,i){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var x=c.child;d=d.firstContext;t:for(;d!==null;){var _=d;d=c;for(var S=0;S<n.length;S++)if(_.context===n[S]){d.lanes|=e,_=d.alternate,_!==null&&(_.lanes|=e),Qs(d.return,e,t),i||(x=null);break t}d=_.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(l(341));x.lanes|=e,d=x.alternate,d!==null&&(d.lanes|=e),Qs(x,e,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function si(t,n,e,i){t=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(l(387));if(x=x.memoizedProps,x!==null){var _=c.type;En(c.pendingProps.value,x.value)||(t!==null?t.push(_):t=[_])}}else if(c===rt.current){if(x=c.alternate,x===null)throw Error(l(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(jr):t=[jr])}c=c.return}t!==null&&Zs(n,t,e,i),n.flags|=262144}function Sl(t){for(t=t.firstContext;t!==null;){if(!En(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Aa(t){za=t,ve=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ln(t){return nf(za,t)}function Cl(t,n){return za===null&&Aa(t),nf(t,n)}function nf(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},ve===null){if(t===null)throw Error(l(308));ve=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ve=ve.next=n;return e}var Q0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,i){t.push(i)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},Z0=a.unstable_scheduleCallback,K0=a.unstable_NormalPriority,Xt={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ks(){return{controller:new Q0,data:new Map,refCount:0}}function lr(t){t.refCount--,t.refCount===0&&Z0(K0,function(){t.controller.abort()})}var or=null,Js=0,ci=0,di=null;function J0(t,n){if(or===null){var e=or=[];Js=0,ci=nd(),di={status:"pending",value:void 0,then:function(i){e.push(i)}}}return Js++,n.then(ef,ef),n}function ef(){if(--Js===0&&or!==null){di!==null&&(di.status="fulfilled");var t=or;or=null,ci=0,di=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function W0(t,n){var e=[],i={status:"pending",value:null,reason:null,then:function(c){e.push(c)}};return t.then(function(){i.status="fulfilled",i.value=n;for(var c=0;c<e.length;c++)(0,e[c])(n)},function(c){for(i.status="rejected",i.reason=c,c=0;c<e.length;c++)(0,e[c])(void 0)}),i}var af=D.S;D.S=function(t,n){Fh=Sn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&J0(t,n),af!==null&&af(t,n)};var Ta=z(null);function Ws(){var t=Ta.current;return t!==null?t:Bt.pooledCache}function kl(t,n){n===null?$(Ta,Ta.current):$(Ta,n.pool)}function rf(){var t=Ws();return t===null?null:{parent:Xt._currentValue,pool:t}}var ui=Error(l(460)),tc=Error(l(474)),El=Error(l(542)),zl={then:function(){}};function lf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function of(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(he,he),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cf(t),t;default:if(typeof n.status=="string")n.then(he,he);else{if(t=Bt,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=n,t.status="pending",t.then(function(i){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=i}},function(i){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cf(t),t}throw Na=n,ui}}function Ra(t){try{var n=t._init;return n(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Na=e,ui):e}}var Na=null;function sf(){if(Na===null)throw Error(l(459));var t=Na;return Na=null,t}function cf(t){if(t===ui||t===El)throw Error(l(483))}var pi=null,sr=0;function Al(t){var n=sr;return sr+=1,pi===null&&(pi=[]),of(pi,t,n)}function cr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===w?Error(l(525)):(t=Object.prototype.toString.call(n),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function df(t){function n(T,E){if(t){var N=T.deletions;N===null?(T.deletions=[E],T.flags|=16):N.push(E)}}function e(T,E){if(!t)return null;for(;E!==null;)n(T,E),E=E.sibling;return null}function i(T){for(var E=new Map;T!==null;)T.key!==null?E.set(T.key,T):E.set(T.index,T),T=T.sibling;return E}function c(T,E){return T=me(T,E),T.index=0,T.sibling=null,T}function d(T,E,N){return T.index=N,t?(N=T.alternate,N!==null?(N=N.index,N<E?(T.flags|=67108866,E):N):(T.flags|=67108866,E)):(T.flags|=1048576,E)}function x(T){return t&&T.alternate===null&&(T.flags|=67108866),T}function _(T,E,N,H){return E===null||E.tag!==6?(E=Ys(N,T.mode,H),E.return=T,E):(E=c(E,N),E.return=T,E)}function S(T,E,N,H){var et=N.type;return et===C?L(T,E,N.props.children,H,N.key):E!==null&&(E.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===G&&Ra(et)===E.type)?(E=c(E,N.props),cr(E,N),E.return=T,E):(E=_l(N.type,N.key,N.props,null,T.mode,H),cr(E,N),E.return=T,E)}function j(T,E,N,H){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=Vs(N,T.mode,H),E.return=T,E):(E=c(E,N.children||[]),E.return=T,E)}function L(T,E,N,H,et){return E===null||E.tag!==7?(E=ka(N,T.mode,H,et),E.return=T,E):(E=c(E,N),E.return=T,E)}function U(T,E,N){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Ys(""+E,T.mode,N),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case A:return N=_l(E.type,E.key,E.props,null,T.mode,N),cr(N,E),N.return=T,N;case R:return E=Vs(E,T.mode,N),E.return=T,E;case G:return E=Ra(E),U(T,E,N)}if(zt(E)||Dt(E))return E=ka(E,T.mode,N,null),E.return=T,E;if(typeof E.then=="function")return U(T,Al(E),N);if(E.$$typeof===F)return U(T,Cl(T,E),N);Tl(T,E)}return null}function M(T,E,N,H){var et=E!==null?E.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return et!==null?null:_(T,E,""+N,H);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case A:return N.key===et?S(T,E,N,H):null;case R:return N.key===et?j(T,E,N,H):null;case G:return N=Ra(N),M(T,E,N,H)}if(zt(N)||Dt(N))return et!==null?null:L(T,E,N,H,null);if(typeof N.then=="function")return M(T,E,Al(N),H);if(N.$$typeof===F)return M(T,E,Cl(T,N),H);Tl(T,N)}return null}function B(T,E,N,H,et){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return T=T.get(N)||null,_(E,T,""+H,et);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case A:return T=T.get(H.key===null?N:H.key)||null,S(E,T,H,et);case R:return T=T.get(H.key===null?N:H.key)||null,j(E,T,H,et);case G:return H=Ra(H),B(T,E,N,H,et)}if(zt(H)||Dt(H))return T=T.get(N)||null,L(E,T,H,et,null);if(typeof H.then=="function")return B(T,E,N,Al(H),et);if(H.$$typeof===F)return B(T,E,N,Cl(E,H),et);Tl(E,H)}return null}function K(T,E,N,H){for(var et=null,_t=null,nt=E,dt=E=0,xt=null;nt!==null&&dt<N.length;dt++){nt.index>dt?(xt=nt,nt=null):xt=nt.sibling;var wt=M(T,nt,N[dt],H);if(wt===null){nt===null&&(nt=xt);break}t&&nt&&wt.alternate===null&&n(T,nt),E=d(wt,E,dt),_t===null?et=wt:_t.sibling=wt,_t=wt,nt=xt}if(dt===N.length)return e(T,nt),vt&&xe(T,dt),et;if(nt===null){for(;dt<N.length;dt++)nt=U(T,N[dt],H),nt!==null&&(E=d(nt,E,dt),_t===null?et=nt:_t.sibling=nt,_t=nt);return vt&&xe(T,dt),et}for(nt=i(nt);dt<N.length;dt++)xt=B(nt,T,dt,N[dt],H),xt!==null&&(t&&xt.alternate!==null&&nt.delete(xt.key===null?dt:xt.key),E=d(xt,E,dt),_t===null?et=xt:_t.sibling=xt,_t=xt);return t&&nt.forEach(function(da){return n(T,da)}),vt&&xe(T,dt),et}function it(T,E,N,H){if(N==null)throw Error(l(151));for(var et=null,_t=null,nt=E,dt=E=0,xt=null,wt=N.next();nt!==null&&!wt.done;dt++,wt=N.next()){nt.index>dt?(xt=nt,nt=null):xt=nt.sibling;var da=M(T,nt,wt.value,H);if(da===null){nt===null&&(nt=xt);break}t&&nt&&da.alternate===null&&n(T,nt),E=d(da,E,dt),_t===null?et=da:_t.sibling=da,_t=da,nt=xt}if(wt.done)return e(T,nt),vt&&xe(T,dt),et;if(nt===null){for(;!wt.done;dt++,wt=N.next())wt=U(T,wt.value,H),wt!==null&&(E=d(wt,E,dt),_t===null?et=wt:_t.sibling=wt,_t=wt);return vt&&xe(T,dt),et}for(nt=i(nt);!wt.done;dt++,wt=N.next())wt=B(nt,T,dt,wt.value,H),wt!==null&&(t&&wt.alternate!==null&&nt.delete(wt.key===null?dt:wt.key),E=d(wt,E,dt),_t===null?et=wt:_t.sibling=wt,_t=wt);return t&&nt.forEach(function(dy){return n(T,dy)}),vt&&xe(T,dt),et}function Mt(T,E,N,H){if(typeof N=="object"&&N!==null&&N.type===C&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case A:t:{for(var et=N.key;E!==null;){if(E.key===et){if(et=N.type,et===C){if(E.tag===7){e(T,E.sibling),H=c(E,N.props.children),H.return=T,T=H;break t}}else if(E.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===G&&Ra(et)===E.type){e(T,E.sibling),H=c(E,N.props),cr(H,N),H.return=T,T=H;break t}e(T,E);break}else n(T,E);E=E.sibling}N.type===C?(H=ka(N.props.children,T.mode,H,N.key),H.return=T,T=H):(H=_l(N.type,N.key,N.props,null,T.mode,H),cr(H,N),H.return=T,T=H)}return x(T);case R:t:{for(et=N.key;E!==null;){if(E.key===et)if(E.tag===4&&E.stateNode.containerInfo===N.containerInfo&&E.stateNode.implementation===N.implementation){e(T,E.sibling),H=c(E,N.children||[]),H.return=T,T=H;break t}else{e(T,E);break}else n(T,E);E=E.sibling}H=Vs(N,T.mode,H),H.return=T,T=H}return x(T);case G:return N=Ra(N),Mt(T,E,N,H)}if(zt(N))return K(T,E,N,H);if(Dt(N)){if(et=Dt(N),typeof et!="function")throw Error(l(150));return N=et.call(N),it(T,E,N,H)}if(typeof N.then=="function")return Mt(T,E,Al(N),H);if(N.$$typeof===F)return Mt(T,E,Cl(T,N),H);Tl(T,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,E!==null&&E.tag===6?(e(T,E.sibling),H=c(E,N),H.return=T,T=H):(e(T,E),H=Ys(N,T.mode,H),H.return=T,T=H),x(T)):e(T,E)}return function(T,E,N,H){try{sr=0;var et=Mt(T,E,N,H);return pi=null,et}catch(nt){if(nt===ui||nt===El)throw nt;var _t=zn(29,nt,null,T.mode);return _t.lanes=H,_t.return=T,_t}}}var ja=df(!0),uf=df(!1),Pe=!1;function nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ie(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qe(t,n,e){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(kt&2)!==0){var c=i.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),i.pending=n,n=yl(t),Pp(t,null,e),n}return bl(t,i,n,e),yl(t)}function dr(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var i=n.lanes;i&=t.pendingLanes,e|=i,n.lanes=e,np(t,e)}}function ac(t,n){var e=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,e===i)){var c=null,d=null;if(e=e.firstBaseUpdate,e!==null){do{var x={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};d===null?c=d=x:d=d.next=x,e=e.next}while(e!==null);d===null?c=d=n:d=d.next=n}else c=d=n;e={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var ic=!1;function ur(){if(ic){var t=di;if(t!==null)throw t}}function pr(t,n,e,i){ic=!1;var c=t.updateQueue;Pe=!1;var d=c.firstBaseUpdate,x=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var S=_,j=S.next;S.next=null,x===null?d=j:x.next=j,x=S;var L=t.alternate;L!==null&&(L=L.updateQueue,_=L.lastBaseUpdate,_!==x&&(_===null?L.firstBaseUpdate=j:_.next=j,L.lastBaseUpdate=S))}if(d!==null){var U=c.baseState;x=0,L=j=S=null,_=d;do{var M=_.lane&-536870913,B=M!==_.lane;if(B?(mt&M)===M:(i&M)===M){M!==0&&M===ci&&(ic=!0),L!==null&&(L=L.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});t:{var K=t,it=_;M=n;var Mt=e;switch(it.tag){case 1:if(K=it.payload,typeof K=="function"){U=K.call(Mt,U,M);break t}U=K;break t;case 3:K.flags=K.flags&-65537|128;case 0:if(K=it.payload,M=typeof K=="function"?K.call(Mt,U,M):K,M==null)break t;U=b({},U,M);break t;case 2:Pe=!0}}M=_.callback,M!==null&&(t.flags|=64,B&&(t.flags|=8192),B=c.callbacks,B===null?c.callbacks=[M]:B.push(M))}else B={lane:M,tag:_.tag,payload:_.payload,callback:_.callback,next:null},L===null?(j=L=B,S=U):L=L.next=B,x|=M;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;B=_,_=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);L===null&&(S=U),c.baseState=S,c.firstBaseUpdate=j,c.lastBaseUpdate=L,d===null&&(c.shared.lanes=0),ta|=x,t.lanes=x,t.memoizedState=U}}function pf(t,n){if(typeof t!="function")throw Error(l(191,t));t.call(n)}function ff(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)pf(e[t],n)}var fi=z(null),Rl=z(0);function hf(t,n){t=Ae,$(Rl,t),$(fi,n),Ae=t|n.baseLanes}function rc(){$(Rl,Ae),$(fi,fi.current)}function lc(){Ae=Rl.current,q(fi),q(Rl)}var An=z(null),Gn=null;function Ze(t){var n=t.alternate;$(Gt,Gt.current&1),$(An,t),Gn===null&&(n===null||fi.current!==null||n.memoizedState!==null)&&(Gn=t)}function oc(t){$(Gt,Gt.current),$(An,t),Gn===null&&(Gn=t)}function gf(t){t.tag===22?($(Gt,Gt.current),$(An,t),Gn===null&&(Gn=t)):Ke()}function Ke(){$(Gt,Gt.current),$(An,An.current)}function Tn(t){q(An),Gn===t&&(Gn=null),q(Gt)}var Gt=z(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||fd(e)||hd(e)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ye=0,ct=null,Nt=null,Pt=null,jl=!1,hi=!1,Ma=!1,Ml=0,fr=0,gi=null,t1=0;function Yt(){throw Error(l(321))}function sc(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!En(t[e],n[e]))return!1;return!0}function cc(t,n,e,i,c,d){return ye=d,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?Jf:Cc,Ma=!1,d=e(i,c),Ma=!1,hi&&(d=xf(n,e,i,c)),mf(t),d}function mf(t){D.H=mr;var n=Nt!==null&&Nt.next!==null;if(ye=0,Pt=Nt=ct=null,jl=!1,fr=0,gi=null,n)throw Error(l(300));t===null||It||(t=t.dependencies,t!==null&&Sl(t)&&(It=!0))}function xf(t,n,e,i){ct=t;var c=0;do{if(hi&&(gi=null),fr=0,hi=!1,25<=c)throw Error(l(301));if(c+=1,Pt=Nt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}D.H=Wf,d=n(e,i)}while(hi);return d}function n1(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?hr(n):n,t=t.useState()[0],(Nt!==null?Nt.memoizedState:null)!==t&&(ct.flags|=1024),n}function dc(){var t=Ml!==0;return Ml=0,t}function uc(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function pc(t){if(jl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}jl=!1}ye=0,Pt=Nt=ct=null,hi=!1,fr=Ml=0,gi=null}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ct.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function $t(){if(Nt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var n=Pt===null?ct.memoizedState:Pt.next;if(n!==null)Pt=n,Nt=t;else{if(t===null)throw ct.alternate===null?Error(l(467)):Error(l(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Pt===null?ct.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hr(t){var n=fr;return fr+=1,gi===null&&(gi=[]),t=of(gi,t,n),n=ct,(Pt===null?n.memoizedState:Pt.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Jf:Cc),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hr(t);if(t.$$typeof===F)return ln(t)}throw Error(l(438,String(t)))}function fc(t){var n=null,e=ct.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var i=ct.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=Dl(),ct.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),i=0;i<t;i++)e[i]=bt;return n.index++,e}function _e(t,n){return typeof n=="function"?n(t):n}function Ll(t){var n=$t();return hc(n,Nt,t)}function hc(t,n,e){var i=t.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=e;var c=t.baseQueue,d=i.pending;if(d!==null){if(c!==null){var x=c.next;c.next=d.next,d.next=x}n.baseQueue=c=d,i.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{n=c.next;var _=x=null,S=null,j=n,L=!1;do{var U=j.lane&-536870913;if(U!==j.lane?(mt&U)===U:(ye&U)===U){var M=j.revertLane;if(M===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),U===ci&&(L=!0);else if((ye&M)===M){j=j.next,M===ci&&(L=!0);continue}else U={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},S===null?(_=S=U,x=d):S=S.next=U,ct.lanes|=M,ta|=M;U=j.action,Ma&&e(d,U),d=j.hasEagerState?j.eagerState:e(d,U)}else M={lane:U,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},S===null?(_=S=M,x=d):S=S.next=M,ct.lanes|=U,ta|=U;j=j.next}while(j!==null&&j!==n);if(S===null?x=d:S.next=_,!En(d,t.memoizedState)&&(It=!0,L&&(e=di,e!==null)))throw e;t.memoizedState=d,t.baseState=x,t.baseQueue=S,i.lastRenderedState=d}return c===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function gc(t){var n=$t(),e=n.queue;if(e===null)throw Error(l(311));e.lastRenderedReducer=t;var i=e.dispatch,c=e.pending,d=n.memoizedState;if(c!==null){e.pending=null;var x=c=c.next;do d=t(d,x.action),x=x.next;while(x!==c);En(d,n.memoizedState)||(It=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),e.lastRenderedState=d}return[d,i]}function vf(t,n,e){var i=ct,c=$t(),d=vt;if(d){if(e===void 0)throw Error(l(407));e=e()}else e=n();var x=!En((Nt||c).memoizedState,e);if(x&&(c.memoizedState=e,It=!0),c=c.queue,vc(_f.bind(null,i,c,t),[t]),c.getSnapshot!==n||x||Pt!==null&&Pt.memoizedState.tag&1){if(i.flags|=2048,mi(9,{destroy:void 0},yf.bind(null,i,c,e,n),null),Bt===null)throw Error(l(349));d||(ye&127)!==0||bf(i,n,e)}return e}function bf(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=ct.updateQueue,n===null?(n=Dl(),ct.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function yf(t,n,e,i){n.value=e,n.getSnapshot=i,wf(n)&&Sf(t)}function _f(t,n,e){return e(function(){wf(n)&&Sf(t)})}function wf(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!En(t,e)}catch{return!0}}function Sf(t){var n=Ca(t,2);n!==null&&_n(n,t,2)}function mc(t){var n=fn();if(typeof t=="function"){var e=t;if(t=e(),Ma){Ue(!0);try{e()}finally{Ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_e,lastRenderedState:t},n}function Cf(t,n,e,i){return t.baseState=e,hc(t,Nt,typeof i=="function"?i:_e)}function e1(t,n,e,i,c){if(ql(t))throw Error(l(485));if(t=n.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};D.T!==null?e(!0):d.isTransition=!1,i(d),e=n.pending,e===null?(d.next=n.pending=d,kf(n,d)):(d.next=e.next,n.pending=e.next=d)}}function kf(t,n){var e=n.action,i=n.payload,c=t.state;if(n.isTransition){var d=D.T,x={};D.T=x;try{var _=e(c,i),S=D.S;S!==null&&S(x,_),Ef(t,n,_)}catch(j){xc(t,n,j)}finally{d!==null&&x.types!==null&&(d.types=x.types),D.T=d}}else try{d=e(c,i),Ef(t,n,d)}catch(j){xc(t,n,j)}}function Ef(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(i){zf(t,n,i)},function(i){return xc(t,n,i)}):zf(t,n,e)}function zf(t,n,e){n.status="fulfilled",n.value=e,Af(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,kf(t,e)))}function xc(t,n,e){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=e,Af(n),n=n.next;while(n!==i)}t.action=null}function Af(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tf(t,n){return n}function Rf(t,n){if(vt){var e=Bt.formState;if(e!==null){t:{var i=ct;if(vt){if(Ot){n:{for(var c=Ot,d=Vn;c.nodeType!==8;){if(!d){c=null;break n}if(c=$n(c.nextSibling),c===null){c=null;break n}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Ot=$n(c.nextSibling),i=c.data==="F!";break t}}$e(i)}i=!1}i&&(n=e[0])}}return e=fn(),e.memoizedState=e.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tf,lastRenderedState:n},e.queue=i,e=Qf.bind(null,ct,i),i.dispatch=e,i=mc(!1),d=Sc.bind(null,ct,!1,i.queue),i=fn(),c={state:n,dispatch:null,action:t,pending:null},i.queue=c,e=e1.bind(null,ct,c,d,e),c.dispatch=e,i.memoizedState=t,[n,e,!1]}function Nf(t){var n=$t();return jf(n,Nt,t)}function jf(t,n,e){if(n=hc(t,n,Tf)[0],t=Ll(_e)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=hr(n)}catch(x){throw x===ui?El:x}else i=n;n=$t();var c=n.queue,d=c.dispatch;return e!==n.memoizedState&&(ct.flags|=2048,mi(9,{destroy:void 0},a1.bind(null,c,e),null)),[i,d,t]}function a1(t,n){t.action=n}function Mf(t){var n=$t(),e=Nt;if(e!==null)return jf(n,e,t);$t(),n=n.memoizedState,e=$t();var i=e.queue.dispatch;return e.memoizedState=t,[n,i,!1]}function mi(t,n,e,i){return t={tag:t,create:e,deps:i,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Dl(),ct.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(i=e.next,e.next=t,t.next=i,n.lastEffect=t),t}function Df(){return $t().memoizedState}function Ol(t,n,e,i){var c=fn();ct.flags|=t,c.memoizedState=mi(1|n,{destroy:void 0},e,i===void 0?null:i)}function Hl(t,n,e,i){var c=$t();i=i===void 0?null:i;var d=c.memoizedState.inst;Nt!==null&&i!==null&&sc(i,Nt.memoizedState.deps)?c.memoizedState=mi(n,d,e,i):(ct.flags|=t,c.memoizedState=mi(1|n,d,e,i))}function Bf(t,n){Ol(8390656,8,t,n)}function vc(t,n){Hl(2048,8,t,n)}function i1(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Dl(),ct.updateQueue=n,n.events=[t];else{var e=n.events;e===null?n.events=[t]:e.push(t)}}function Lf(t){var n=$t().memoizedState;return i1({ref:n,nextImpl:t}),function(){if((kt&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}function Of(t,n){return Hl(4,2,t,n)}function Hf(t,n){return Hl(4,4,t,n)}function qf(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Uf(t,n,e){e=e!=null?e.concat([t]):null,Hl(4,4,qf.bind(null,n,t),e)}function bc(){}function Ff(t,n){var e=$t();n=n===void 0?null:n;var i=e.memoizedState;return n!==null&&sc(n,i[1])?i[0]:(e.memoizedState=[t,n],t)}function Yf(t,n){var e=$t();n=n===void 0?null:n;var i=e.memoizedState;if(n!==null&&sc(n,i[1]))return i[0];if(i=t(),Ma){Ue(!0);try{t()}finally{Ue(!1)}}return e.memoizedState=[i,n],i}function yc(t,n,e){return e===void 0||(ye&1073741824)!==0&&(mt&261930)===0?t.memoizedState=n:(t.memoizedState=e,t=Vh(),ct.lanes|=t,ta|=t,e)}function Vf(t,n,e,i){return En(e,n)?e:fi.current!==null?(t=yc(t,e,i),En(t,n)||(It=!0),t):(ye&42)===0||(ye&1073741824)!==0&&(mt&261930)===0?(It=!0,t.memoizedState=e):(t=Vh(),ct.lanes|=t,ta|=t,n)}function Gf(t,n,e,i,c){var d=I.p;I.p=d!==0&&8>d?d:8;var x=D.T,_={};D.T=_,Sc(t,!1,n,e);try{var S=c(),j=D.S;if(j!==null&&j(_,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var L=W0(S,i);gr(t,n,L,jn(t))}else gr(t,n,i,jn(t))}catch(U){gr(t,n,{then:function(){},status:"rejected",reason:U},jn())}finally{I.p=d,x!==null&&_.types!==null&&(x.types=_.types),D.T=x}}function r1(){}function _c(t,n,e,i){if(t.tag!==5)throw Error(l(476));var c=$f(t).queue;Gf(t,c,n,V,e===null?r1:function(){return Xf(t),e(i)})}function $f(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_e,lastRenderedState:V},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_e,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Xf(t){var n=$f(t);n.next===null&&(n=t.alternate.memoizedState),gr(t,n.next.queue,{},jn())}function wc(){return ln(jr)}function Pf(){return $t().memoizedState}function If(){return $t().memoizedState}function l1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=jn();t=Ie(e);var i=Qe(n,t,e);i!==null&&(_n(i,n,e),dr(i,n,e)),n={cache:Ks()},t.payload=n;return}n=n.return}}function o1(t,n,e){var i=jn();e={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},ql(t)?Zf(n,e):(e=Us(t,n,e,i),e!==null&&(_n(e,t,i),Kf(e,n,i)))}function Qf(t,n,e){var i=jn();gr(t,n,e,i)}function gr(t,n,e,i){var c={lane:i,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(ql(t))Zf(n,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,_=d(x,e);if(c.hasEagerState=!0,c.eagerState=_,En(_,x))return bl(t,n,c,0),Bt===null&&vl(),!1}catch{}if(e=Us(t,n,c,i),e!==null)return _n(e,t,i),Kf(e,n,i),!0}return!1}function Sc(t,n,e,i){if(i={lane:2,revertLane:nd(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(l(479))}else n=Us(t,e,i,2),n!==null&&_n(n,t,2)}function ql(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Zf(t,n){hi=jl=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function Kf(t,n,e){if((e&4194048)!==0){var i=n.lanes;i&=t.pendingLanes,e|=i,n.lanes=e,np(t,e)}}var mr={readContext:ln,use:Bl,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useLayoutEffect:Yt,useInsertionEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useSyncExternalStore:Yt,useId:Yt,useHostTransitionStatus:Yt,useFormState:Yt,useActionState:Yt,useOptimistic:Yt,useMemoCache:Yt,useCacheRefresh:Yt};mr.useEffectEvent=Yt;var Jf={readContext:ln,use:Bl,useCallback:function(t,n){return fn().memoizedState=[t,n===void 0?null:n],t},useContext:ln,useEffect:Bf,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,Ol(4194308,4,qf.bind(null,n,t),e)},useLayoutEffect:function(t,n){return Ol(4194308,4,t,n)},useInsertionEffect:function(t,n){Ol(4,2,t,n)},useMemo:function(t,n){var e=fn();n=n===void 0?null:n;var i=t();if(Ma){Ue(!0);try{t()}finally{Ue(!1)}}return e.memoizedState=[i,n],i},useReducer:function(t,n,e){var i=fn();if(e!==void 0){var c=e(n);if(Ma){Ue(!0);try{e(n)}finally{Ue(!1)}}}else c=n;return i.memoizedState=i.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},i.queue=t,t=t.dispatch=o1.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var n=fn();return t={current:t},n.memoizedState=t},useState:function(t){t=mc(t);var n=t.queue,e=Qf.bind(null,ct,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:bc,useDeferredValue:function(t,n){var e=fn();return yc(e,t,n)},useTransition:function(){var t=mc(!1);return t=Gf.bind(null,ct,t.queue,!0,!1),fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var i=ct,c=fn();if(vt){if(e===void 0)throw Error(l(407));e=e()}else{if(e=n(),Bt===null)throw Error(l(349));(mt&127)!==0||bf(i,n,e)}c.memoizedState=e;var d={value:e,getSnapshot:n};return c.queue=d,Bf(_f.bind(null,i,d,t),[t]),i.flags|=2048,mi(9,{destroy:void 0},yf.bind(null,i,d,e,n),null),e},useId:function(){var t=fn(),n=Bt.identifierPrefix;if(vt){var e=oe,i=le;e=(i&~(1<<32-kn(i)-1)).toString(32)+e,n="_"+n+"R_"+e,e=Ml++,0<e&&(n+="H"+e.toString(32)),n+="_"}else e=t1++,n="_"+n+"r_"+e.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:wc,useFormState:Rf,useActionState:Rf,useOptimistic:function(t){var n=fn();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=Sc.bind(null,ct,!0,e),e.dispatch=n,[t,n]},useMemoCache:fc,useCacheRefresh:function(){return fn().memoizedState=l1.bind(null,ct)},useEffectEvent:function(t){var n=fn(),e={impl:t};return n.memoizedState=e,function(){if((kt&2)!==0)throw Error(l(440));return e.impl.apply(void 0,arguments)}}},Cc={readContext:ln,use:Bl,useCallback:Ff,useContext:ln,useEffect:vc,useImperativeHandle:Uf,useInsertionEffect:Of,useLayoutEffect:Hf,useMemo:Yf,useReducer:Ll,useRef:Df,useState:function(){return Ll(_e)},useDebugValue:bc,useDeferredValue:function(t,n){var e=$t();return Vf(e,Nt.memoizedState,t,n)},useTransition:function(){var t=Ll(_e)[0],n=$t().memoizedState;return[typeof t=="boolean"?t:hr(t),n]},useSyncExternalStore:vf,useId:Pf,useHostTransitionStatus:wc,useFormState:Nf,useActionState:Nf,useOptimistic:function(t,n){var e=$t();return Cf(e,Nt,t,n)},useMemoCache:fc,useCacheRefresh:If};Cc.useEffectEvent=Lf;var Wf={readContext:ln,use:Bl,useCallback:Ff,useContext:ln,useEffect:vc,useImperativeHandle:Uf,useInsertionEffect:Of,useLayoutEffect:Hf,useMemo:Yf,useReducer:gc,useRef:Df,useState:function(){return gc(_e)},useDebugValue:bc,useDeferredValue:function(t,n){var e=$t();return Nt===null?yc(e,t,n):Vf(e,Nt.memoizedState,t,n)},useTransition:function(){var t=gc(_e)[0],n=$t().memoizedState;return[typeof t=="boolean"?t:hr(t),n]},useSyncExternalStore:vf,useId:Pf,useHostTransitionStatus:wc,useFormState:Mf,useActionState:Mf,useOptimistic:function(t,n){var e=$t();return Nt!==null?Cf(e,Nt,t,n):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:fc,useCacheRefresh:If};Wf.useEffectEvent=Lf;function kc(t,n,e,i){n=t.memoizedState,e=e(i,n),e=e==null?n:b({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var Ec={enqueueSetState:function(t,n,e){t=t._reactInternals;var i=jn(),c=Ie(i);c.payload=n,e!=null&&(c.callback=e),n=Qe(t,c,i),n!==null&&(_n(n,t,i),dr(n,t,i))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var i=jn(),c=Ie(i);c.tag=1,c.payload=n,e!=null&&(c.callback=e),n=Qe(t,c,i),n!==null&&(_n(n,t,i),dr(n,t,i))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=jn(),i=Ie(e);i.tag=2,n!=null&&(i.callback=n),n=Qe(t,i,e),n!==null&&(_n(n,t,e),dr(n,t,e))}};function th(t,n,e,i,c,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,d,x):n.prototype&&n.prototype.isPureReactComponent?!er(e,i)||!er(c,d):!0}function nh(t,n,e,i){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,i),n.state!==t&&Ec.enqueueReplaceState(n,n.state,null)}function Da(t,n){var e=n;if("ref"in n){e={};for(var i in n)i!=="ref"&&(e[i]=n[i])}if(t=t.defaultProps){e===n&&(e=b({},e));for(var c in t)e[c]===void 0&&(e[c]=t[c])}return e}function eh(t){xl(t)}function ah(t){console.error(t)}function ih(t){xl(t)}function Ul(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function rh(t,n,e){try{var i=t.onCaughtError;i(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function zc(t,n,e){return e=Ie(e),e.tag=3,e.payload={element:null},e.callback=function(){Ul(t,n)},e}function lh(t){return t=Ie(t),t.tag=3,t}function oh(t,n,e,i){var c=e.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;t.payload=function(){return c(d)},t.callback=function(){rh(n,e,i)}}var x=e.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){rh(n,e,i),typeof c!="function"&&(na===null?na=new Set([this]):na.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})})}function s1(t,n,e,i,c){if(e.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=e.alternate,n!==null&&si(n,e,c,!0),e=An.current,e!==null){switch(e.tag){case 31:case 13:return Gn===null?Jl():e.alternate===null&&Vt===0&&(Vt=3),e.flags&=-257,e.flags|=65536,e.lanes=c,i===zl?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([i]):n.add(i),Jc(t,i,c)),!1;case 22:return e.flags|=65536,i===zl?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([i]):e.add(i)),Jc(t,i,c)),!1}throw Error(l(435,e.tag))}return Jc(t,i,c),Jl(),!1}if(vt)return n=An.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,i!==Xs&&(t=Error(l(422),{cause:i}),rr(Un(t,e)))):(i!==Xs&&(n=Error(l(423),{cause:i}),rr(Un(n,e))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,i=Un(i,e),c=zc(t.stateNode,i,c),ac(t,c),Vt!==4&&(Vt=2)),!1;var d=Error(l(520),{cause:i});if(d=Un(d,e),Cr===null?Cr=[d]:Cr.push(d),Vt!==4&&(Vt=2),n===null)return!0;i=Un(i,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=c&-c,e.lanes|=t,t=zc(e.stateNode,i,t),ac(e,t),!1;case 1:if(n=e.type,d=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(na===null||!na.has(d))))return e.flags|=65536,c&=-c,e.lanes|=c,c=lh(c),oh(c,t,e,i),ac(e,c),!1}e=e.return}while(e!==null);return!1}var Ac=Error(l(461)),It=!1;function on(t,n,e,i){n.child=t===null?uf(n,null,e,i):ja(n,t.child,e,i)}function sh(t,n,e,i,c){e=e.render;var d=n.ref;if("ref"in i){var x={};for(var _ in i)_!=="ref"&&(x[_]=i[_])}else x=i;return Aa(n),i=cc(t,n,e,x,d,c),_=dc(),t!==null&&!It?(uc(t,n,c),we(t,n,c)):(vt&&_&&Gs(n),n.flags|=1,on(t,n,i,c),n.child)}function ch(t,n,e,i,c){if(t===null){var d=e.type;return typeof d=="function"&&!Fs(d)&&d.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=d,dh(t,n,d,i,c)):(t=_l(e.type,null,i,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Lc(t,c)){var x=d.memoizedProps;if(e=e.compare,e=e!==null?e:er,e(x,i)&&t.ref===n.ref)return we(t,n,c)}return n.flags|=1,t=me(d,i),t.ref=n.ref,t.return=n,n.child=t}function dh(t,n,e,i,c){if(t!==null){var d=t.memoizedProps;if(er(d,i)&&t.ref===n.ref)if(It=!1,n.pendingProps=i=d,Lc(t,c))(t.flags&131072)!==0&&(It=!0);else return n.lanes=t.lanes,we(t,n,c)}return Tc(t,n,e,i,c)}function uh(t,n,e,i){var c=i.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|e:e,t!==null){for(i=n.child=t.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;i=c&~d}else i=0,n.child=null;return ph(t,n,d,e,i)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&kl(n,d!==null?d.cachePool:null),d!==null?hf(n,d):rc(),gf(n);else return i=n.lanes=536870912,ph(t,n,d!==null?d.baseLanes|e:e,e,i)}else d!==null?(kl(n,d.cachePool),hf(n,d),Ke(),n.memoizedState=null):(t!==null&&kl(n,null),rc(),Ke());return on(t,n,c,e),n.child}function xr(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ph(t,n,e,i,c){var d=Ws();return d=d===null?null:{parent:Xt._currentValue,pool:d},n.memoizedState={baseLanes:e,cachePool:d},t!==null&&kl(n,null),rc(),gf(n),t!==null&&si(t,n,i,!0),n.childLanes=c,null}function Fl(t,n){return n=Vl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function fh(t,n,e){return ja(n,t.child,null,e),t=Fl(n,n.pendingProps),t.flags|=2,Tn(n),n.memoizedState=null,t}function c1(t,n,e){var i=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(vt){if(i.mode==="hidden")return t=Fl(n,i),n.lanes=536870912,xr(null,t);if(oc(n),(t=Ot)?(t=kg(t,Vn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ve!==null?{id:le,overflow:oe}:null,retryLane:536870912,hydrationErrors:null},e=Qp(t),e.return=n,n.child=e,rn=n,Ot=null)):t=null,t===null)throw $e(n);return n.lanes=536870912,null}return Fl(n,i)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(oc(n),c)if(n.flags&256)n.flags&=-257,n=fh(t,n,e);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(l(558));else if(It||si(t,n,e,!1),c=(e&t.childLanes)!==0,It||c){if(i=Bt,i!==null&&(x=ep(i,e),x!==0&&x!==d.retryLane))throw d.retryLane=x,Ca(t,x),_n(i,t,x),Ac;Jl(),n=fh(t,n,e)}else t=d.treeContext,Ot=$n(x.nextSibling),rn=n,vt=!0,Ge=null,Vn=!1,t!==null&&Jp(n,t),n=Fl(n,i),n.flags|=4096;return n}return t=me(t.child,{mode:i.mode,children:i.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Yl(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(l(284));(t===null||t.ref!==e)&&(n.flags|=4194816)}}function Tc(t,n,e,i,c){return Aa(n),e=cc(t,n,e,i,void 0,c),i=dc(),t!==null&&!It?(uc(t,n,c),we(t,n,c)):(vt&&i&&Gs(n),n.flags|=1,on(t,n,e,c),n.child)}function hh(t,n,e,i,c,d){return Aa(n),n.updateQueue=null,e=xf(n,i,e,c),mf(t),i=dc(),t!==null&&!It?(uc(t,n,d),we(t,n,d)):(vt&&i&&Gs(n),n.flags|=1,on(t,n,e,d),n.child)}function gh(t,n,e,i,c){if(Aa(n),n.stateNode===null){var d=ii,x=e.contextType;typeof x=="object"&&x!==null&&(d=ln(x)),d=new e(i,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ec,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=i,d.state=n.memoizedState,d.refs={},nc(n),x=e.contextType,d.context=typeof x=="object"&&x!==null?ln(x):ii,d.state=n.memoizedState,x=e.getDerivedStateFromProps,typeof x=="function"&&(kc(n,e,x,i),d.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Ec.enqueueReplaceState(d,d.state,null),pr(n,i,d,c),ur(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(t===null){d=n.stateNode;var _=n.memoizedProps,S=Da(e,_);d.props=S;var j=d.context,L=e.contextType;x=ii,typeof L=="object"&&L!==null&&(x=ln(L));var U=e.getDerivedStateFromProps;L=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,L||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_||j!==x)&&nh(n,d,i,x),Pe=!1;var M=n.memoizedState;d.state=M,pr(n,i,d,c),ur(),j=n.memoizedState,_||M!==j||Pe?(typeof U=="function"&&(kc(n,e,U,i),j=n.memoizedState),(S=Pe||th(n,e,S,i,M,j,x))?(L||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=j),d.props=i,d.state=j,d.context=x,i=S):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{d=n.stateNode,ec(t,n),x=n.memoizedProps,L=Da(e,x),d.props=L,U=n.pendingProps,M=d.context,j=e.contextType,S=ii,typeof j=="object"&&j!==null&&(S=ln(j)),_=e.getDerivedStateFromProps,(j=typeof _=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==U||M!==S)&&nh(n,d,i,S),Pe=!1,M=n.memoizedState,d.state=M,pr(n,i,d,c),ur();var B=n.memoizedState;x!==U||M!==B||Pe||t!==null&&t.dependencies!==null&&Sl(t.dependencies)?(typeof _=="function"&&(kc(n,e,_,i),B=n.memoizedState),(L=Pe||th(n,e,L,i,M,B,S)||t!==null&&t.dependencies!==null&&Sl(t.dependencies))?(j||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,B,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,B,S)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&M===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&M===t.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=B),d.props=i,d.state=B,d.context=S,i=L):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&M===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&M===t.memoizedState||(n.flags|=1024),i=!1)}return d=i,Yl(t,n),i=(n.flags&128)!==0,d||i?(d=n.stateNode,e=i&&typeof e.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&i?(n.child=ja(n,t.child,null,c),n.child=ja(n,null,e,c)):on(t,n,e,c),n.memoizedState=d.state,t=n.child):t=we(t,n,c),t}function mh(t,n,e,i){return Ea(),n.flags|=256,on(t,n,e,i),n.child}var Rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(t){return{baseLanes:t,cachePool:rf()}}function jc(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=Nn),t}function xh(t,n,e){var i=n.pendingProps,c=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(Gt.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(vt){if(c?Ze(n):Ke(),(t=Ot)?(t=kg(t,Vn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ve!==null?{id:le,overflow:oe}:null,retryLane:536870912,hydrationErrors:null},e=Qp(t),e.return=n,n.child=e,rn=n,Ot=null)):t=null,t===null)throw $e(n);return hd(t)?n.lanes=32:n.lanes=536870912,null}var _=i.children;return i=i.fallback,c?(Ke(),c=n.mode,_=Vl({mode:"hidden",children:_},c),i=ka(i,c,e,null),_.return=n,i.return=n,_.sibling=i,n.child=_,i=n.child,i.memoizedState=Nc(e),i.childLanes=jc(t,x,e),n.memoizedState=Rc,xr(null,i)):(Ze(n),Mc(n,_))}var S=t.memoizedState;if(S!==null&&(_=S.dehydrated,_!==null)){if(d)n.flags&256?(Ze(n),n.flags&=-257,n=Dc(t,n,e)):n.memoizedState!==null?(Ke(),n.child=t.child,n.flags|=128,n=null):(Ke(),_=i.fallback,c=n.mode,i=Vl({mode:"visible",children:i.children},c),_=ka(_,c,e,null),_.flags|=2,i.return=n,_.return=n,i.sibling=_,n.child=i,ja(n,t.child,null,e),i=n.child,i.memoizedState=Nc(e),i.childLanes=jc(t,x,e),n.memoizedState=Rc,n=xr(null,i));else if(Ze(n),hd(_)){if(x=_.nextSibling&&_.nextSibling.dataset,x)var j=x.dgst;x=j,i=Error(l(419)),i.stack="",i.digest=x,rr({value:i,source:null,stack:null}),n=Dc(t,n,e)}else if(It||si(t,n,e,!1),x=(e&t.childLanes)!==0,It||x){if(x=Bt,x!==null&&(i=ep(x,e),i!==0&&i!==S.retryLane))throw S.retryLane=i,Ca(t,i),_n(x,t,i),Ac;fd(_)||Jl(),n=Dc(t,n,e)}else fd(_)?(n.flags|=192,n.child=t.child,n=null):(t=S.treeContext,Ot=$n(_.nextSibling),rn=n,vt=!0,Ge=null,Vn=!1,t!==null&&Jp(n,t),n=Mc(n,i.children),n.flags|=4096);return n}return c?(Ke(),_=i.fallback,c=n.mode,S=t.child,j=S.sibling,i=me(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,j!==null?_=me(j,_):(_=ka(_,c,e,null),_.flags|=2),_.return=n,i.return=n,i.sibling=_,n.child=i,xr(null,i),i=n.child,_=t.child.memoizedState,_===null?_=Nc(e):(c=_.cachePool,c!==null?(S=Xt._currentValue,c=c.parent!==S?{parent:S,pool:S}:c):c=rf(),_={baseLanes:_.baseLanes|e,cachePool:c}),i.memoizedState=_,i.childLanes=jc(t,x,e),n.memoizedState=Rc,xr(t.child,i)):(Ze(n),e=t.child,t=e.sibling,e=me(e,{mode:"visible",children:i.children}),e.return=n,e.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=e,n.memoizedState=null,e)}function Mc(t,n){return n=Vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Vl(t,n){return t=zn(22,t,null,n),t.lanes=0,t}function Dc(t,n,e){return ja(n,t.child,null,e),t=Mc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function vh(t,n,e){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n),Qs(t.return,n,e)}function Bc(t,n,e,i,c,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:e,tailMode:c,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=i,x.tail=e,x.tailMode=c,x.treeForkCount=d)}function bh(t,n,e){var i=n.pendingProps,c=i.revealOrder,d=i.tail;i=i.children;var x=Gt.current,_=(x&2)!==0;if(_?(x=x&1|2,n.flags|=128):x&=1,$(Gt,x),on(t,n,i,e),i=vt?ir:0,!_&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vh(t,e,n);else if(t.tag===19)vh(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(e=n.child,c=null;e!==null;)t=e.alternate,t!==null&&Nl(t)===null&&(c=e),e=e.sibling;e=c,e===null?(c=n.child,n.child=null):(c=e.sibling,e.sibling=null),Bc(n,!1,c,e,d,i);break;case"backwards":case"unstable_legacy-backwards":for(e=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Nl(t)===null){n.child=c;break}t=c.sibling,c.sibling=e,e=c,c=t}Bc(n,!0,e,null,d,i);break;case"together":Bc(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function we(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),ta|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(si(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(l(153));if(n.child!==null){for(t=n.child,e=me(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=me(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function Lc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Sl(t)))}function d1(t,n,e){switch(n.tag){case 3:Wt(n,n.stateNode.containerInfo),Xe(n,Xt,t.memoizedState.cache),Ea();break;case 27:case 5:re(n);break;case 4:Wt(n,n.stateNode.containerInfo);break;case 10:Xe(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,oc(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Ze(n),n.flags|=128,null):(e&n.child.childLanes)!==0?xh(t,n,e):(Ze(n),t=we(t,n,e),t!==null?t.sibling:null);Ze(n);break;case 19:var c=(t.flags&128)!==0;if(i=(e&n.childLanes)!==0,i||(si(t,n,e,!1),i=(e&n.childLanes)!==0),c){if(i)return bh(t,n,e);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),$(Gt,Gt.current),i)break;return null;case 22:return n.lanes=0,uh(t,n,e,n.pendingProps);case 24:Xe(n,Xt,t.memoizedState.cache)}return we(t,n,e)}function yh(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)It=!0;else{if(!Lc(t,e)&&(n.flags&128)===0)return It=!1,d1(t,n,e);It=(t.flags&131072)!==0}else It=!1,vt&&(n.flags&1048576)!==0&&Kp(n,ir,n.index);switch(n.lanes=0,n.tag){case 16:t:{var i=n.pendingProps;if(t=Ra(n.elementType),n.type=t,typeof t=="function")Fs(t)?(i=Da(t,i),n.tag=1,n=gh(null,n,t,i,e)):(n.tag=0,n=Tc(null,n,t,i,e));else{if(t!=null){var c=t.$$typeof;if(c===P){n.tag=11,n=sh(null,n,t,i,e);break t}else if(c===X){n.tag=14,n=ch(null,n,t,i,e);break t}}throw n=en(t)||t,Error(l(306,n,""))}}return n;case 0:return Tc(t,n,n.type,n.pendingProps,e);case 1:return i=n.type,c=Da(i,n.pendingProps),gh(t,n,i,c,e);case 3:t:{if(Wt(n,n.stateNode.containerInfo),t===null)throw Error(l(387));i=n.pendingProps;var d=n.memoizedState;c=d.element,ec(t,n),pr(n,i,null,e);var x=n.memoizedState;if(i=x.cache,Xe(n,Xt,i),i!==d.cache&&Zs(n,[Xt],e,!0),ur(),i=x.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=mh(t,n,i,e);break t}else if(i!==c){c=Un(Error(l(424)),n),rr(c),n=mh(t,n,i,e);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ot=$n(t.firstChild),rn=n,vt=!0,Ge=null,Vn=!0,e=uf(n,null,i,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ea(),i===c){n=we(t,n,e);break t}on(t,n,i,e)}n=n.child}return n;case 26:return Yl(t,n),t===null?(e=Ng(n.type,null,n.pendingProps,null))?n.memoizedState=e:vt||(e=n.type,t=n.pendingProps,i=ro(pt.current).createElement(e),i[an]=n,i[gn]=t,sn(i,e,t),tn(i),n.stateNode=i):n.memoizedState=Ng(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return re(n),t===null&&vt&&(i=n.stateNode=Ag(n.type,n.pendingProps,pt.current),rn=n,Vn=!0,c=Ot,ra(n.type)?(gd=c,Ot=$n(i.firstChild)):Ot=c),on(t,n,n.pendingProps.children,e),Yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&vt&&((c=i=Ot)&&(i=U1(i,n.type,n.pendingProps,Vn),i!==null?(n.stateNode=i,rn=n,Ot=$n(i.firstChild),Vn=!1,c=!0):c=!1),c||$e(n)),re(n),c=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,i=d.children,dd(c,d)?i=null:x!==null&&dd(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=cc(t,n,n1,null,null,e),jr._currentValue=c),Yl(t,n),on(t,n,i,e),n.child;case 6:return t===null&&vt&&((t=e=Ot)&&(e=F1(e,n.pendingProps,Vn),e!==null?(n.stateNode=e,rn=n,Ot=null,t=!0):t=!1),t||$e(n)),null;case 13:return xh(t,n,e);case 4:return Wt(n,n.stateNode.containerInfo),i=n.pendingProps,t===null?n.child=ja(n,null,i,e):on(t,n,i,e),n.child;case 11:return sh(t,n,n.type,n.pendingProps,e);case 7:return on(t,n,n.pendingProps,e),n.child;case 8:return on(t,n,n.pendingProps.children,e),n.child;case 12:return on(t,n,n.pendingProps.children,e),n.child;case 10:return i=n.pendingProps,Xe(n,n.type,i.value),on(t,n,i.children,e),n.child;case 9:return c=n.type._context,i=n.pendingProps.children,Aa(n),c=ln(c),i=i(c),n.flags|=1,on(t,n,i,e),n.child;case 14:return ch(t,n,n.type,n.pendingProps,e);case 15:return dh(t,n,n.type,n.pendingProps,e);case 19:return bh(t,n,e);case 31:return c1(t,n,e);case 22:return uh(t,n,e,n.pendingProps);case 24:return Aa(n),i=ln(Xt),t===null?(c=Ws(),c===null&&(c=Bt,d=Ks(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=e),c=d),n.memoizedState={parent:i,cache:c},nc(n),Xe(n,Xt,c)):((t.lanes&e)!==0&&(ec(t,n),pr(n,null,null,e),ur()),c=t.memoizedState,d=n.memoizedState,c.parent!==i?(c={parent:i,cache:i},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Xe(n,Xt,i)):(i=d.cache,Xe(n,Xt,i),i!==c.cache&&Zs(n,[Xt],e,!0))),on(t,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function Se(t){t.flags|=4}function Oc(t,n,e,i,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Ph())t.flags|=8192;else throw Na=zl,tc}else t.flags&=-16777217}function _h(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Lg(n))if(Ph())t.flags|=8192;else throw Na=zl,tc}function Gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Wu():536870912,t.lanes|=n,yi|=n)}function vr(t,n){if(!vt)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,i=0;if(n)for(var c=t.child;c!==null;)e|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)e|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=i,t.childLanes=e,n}function u1(t,n,e){var i=n.pendingProps;switch($s(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(n),null;case 1:return Ht(n),null;case 3:return e=n.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),be(Xt),Lt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(oi(n)?Se(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ps())),Ht(n),null;case 26:var c=n.type,d=n.memoizedState;return t===null?(Se(n),d!==null?(Ht(n),_h(n,d)):(Ht(n),Oc(n,c,null,i,e))):d?d!==t.memoizedState?(Se(n),Ht(n),_h(n,d)):(Ht(n),n.flags&=-16777217):(t=t.memoizedProps,t!==i&&Se(n),Ht(n),Oc(n,c,t,i,e)),null;case 27:if(He(n),e=pt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==i&&Se(n);else{if(!i){if(n.stateNode===null)throw Error(l(166));return Ht(n),null}t=Q.current,oi(n)?Wp(n):(t=Ag(c,i,e),n.stateNode=t,Se(n))}return Ht(n),null;case 5:if(He(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==i&&Se(n);else{if(!i){if(n.stateNode===null)throw Error(l(166));return Ht(n),null}if(d=Q.current,oi(n))Wp(n);else{var x=ro(pt.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof i.is=="string"?x.createElement("select",{is:i.is}):x.createElement("select"),i.multiple?d.multiple=!0:i.size&&(d.size=i.size);break;default:d=typeof i.is=="string"?x.createElement(c,{is:i.is}):x.createElement(c)}}d[an]=n,d[gn]=i;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;t:switch(sn(d,c,i),c){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Se(n)}}return Ht(n),Oc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,e),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==i&&Se(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(l(166));if(t=pt.current,oi(n)){if(t=n.stateNode,e=n.memoizedProps,i=null,c=rn,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===e||i!==null&&i.suppressHydrationWarning===!0||xg(t.nodeValue,e)),t||$e(n,!0)}else t=ro(t).createTextNode(i),t[an]=n,n.stateNode=t}return Ht(n),null;case 31:if(e=n.memoizedState,t===null||t.memoizedState!==null){if(i=oi(n),e!==null){if(t===null){if(!i)throw Error(l(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(557));t[an]=n}else Ea(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ht(n),t=!1}else e=Ps(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return n.flags&256?(Tn(n),n):(Tn(n),null);if((n.flags&128)!==0)throw Error(l(558))}return Ht(n),null;case 13:if(i=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=oi(n),i!==null&&i.dehydrated!==null){if(t===null){if(!c)throw Error(l(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[an]=n}else Ea(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ht(n),c=!1}else c=Ps(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Tn(n),n):(Tn(n),null)}return Tn(n),(n.flags&128)!==0?(n.lanes=e,n):(e=i!==null,t=t!==null&&t.memoizedState!==null,e&&(i=n.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==c&&(i.flags|=2048)),e!==t&&e&&(n.child.flags|=8192),Gl(n,n.updateQueue),Ht(n),null);case 4:return Lt(),t===null&&rd(n.stateNode.containerInfo),Ht(n),null;case 10:return be(n.type),Ht(n),null;case 19:if(q(Gt),i=n.memoizedState,i===null)return Ht(n),null;if(c=(n.flags&128)!==0,d=i.rendering,d===null)if(c)vr(i,!1);else{if(Vt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Nl(t),d!==null){for(n.flags|=128,vr(i,!1),t=d.updateQueue,n.updateQueue=t,Gl(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)Ip(e,t),e=e.sibling;return $(Gt,Gt.current&1|2),vt&&xe(n,i.treeForkCount),n.child}t=t.sibling}i.tail!==null&&Sn()>Ql&&(n.flags|=128,c=!0,vr(i,!1),n.lanes=4194304)}else{if(!c)if(t=Nl(d),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Gl(n,t),vr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!vt)return Ht(n),null}else 2*Sn()-i.renderingStartTime>Ql&&e!==536870912&&(n.flags|=128,c=!0,vr(i,!1),n.lanes=4194304);i.isBackwards?(d.sibling=n.child,n.child=d):(t=i.last,t!==null?t.sibling=d:n.child=d,i.last=d)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Sn(),t.sibling=null,e=Gt.current,$(Gt,c?e&1|2:e&1),vt&&xe(n,i.treeForkCount),t):(Ht(n),null);case 22:case 23:return Tn(n),lc(),i=n.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(e&536870912)!==0&&(n.flags&128)===0&&(Ht(n),n.subtreeFlags&6&&(n.flags|=8192)):Ht(n),e=n.updateQueue,e!==null&&Gl(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==e&&(n.flags|=2048),t!==null&&q(Ta),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),be(Xt),Ht(n),null;case 25:return null;case 30:return null}throw Error(l(156,n.tag))}function p1(t,n){switch($s(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return be(Xt),Lt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 31:if(n.memoizedState!==null){if(Tn(n),n.alternate===null)throw Error(l(340));Ea()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Tn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(l(340));Ea()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return q(Gt),null;case 4:return Lt(),null;case 10:return be(n.type),null;case 22:case 23:return Tn(n),lc(),t!==null&&q(Ta),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return be(Xt),null;case 25:return null;default:return null}}function wh(t,n){switch($s(n),n.tag){case 3:be(Xt),Lt();break;case 26:case 27:case 5:He(n);break;case 4:Lt();break;case 31:n.memoizedState!==null&&Tn(n);break;case 13:Tn(n);break;case 19:q(Gt);break;case 10:be(n.type);break;case 22:case 23:Tn(n),lc(),t!==null&&q(Ta);break;case 24:be(Xt)}}function br(t,n){try{var e=n.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var c=i.next;e=c;do{if((e.tag&t)===t){i=void 0;var d=e.create,x=e.inst;i=d(),x.destroy=i}e=e.next}while(e!==c)}}catch(_){Tt(n,n.return,_)}}function Je(t,n,e){try{var i=n.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var d=c.next;i=d;do{if((i.tag&t)===t){var x=i.inst,_=x.destroy;if(_!==void 0){x.destroy=void 0,c=n;var S=e,j=_;try{j()}catch(L){Tt(c,S,L)}}}i=i.next}while(i!==d)}}catch(L){Tt(n,n.return,L)}}function Sh(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{ff(n,e)}catch(i){Tt(t,t.return,i)}}}function Ch(t,n,e){e.props=Da(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(i){Tt(t,n,i)}}function yr(t,n){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof e=="function"?t.refCleanup=e(i):e.current=i}}catch(c){Tt(t,n,c)}}function se(t,n){var e=t.ref,i=t.refCleanup;if(e!==null)if(typeof i=="function")try{i()}catch(c){Tt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(c){Tt(t,n,c)}else e.current=null}function kh(t){var n=t.type,e=t.memoizedProps,i=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&i.focus();break t;case"img":e.src?i.src=e.src:e.srcSet&&(i.srcset=e.srcSet)}}catch(c){Tt(t,t.return,c)}}function Hc(t,n,e){try{var i=t.stateNode;D1(i,t.type,e,n),i[gn]=n}catch(c){Tt(t,t.return,c)}}function Eh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ra(t.type)||t.tag===4}function qc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Eh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uc(t,n,e){var i=t.tag;if(i===5||i===6)t=t.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(t),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=he));else if(i!==4&&(i===27&&ra(t.type)&&(e=t.stateNode,n=null),t=t.child,t!==null))for(Uc(t,n,e),t=t.sibling;t!==null;)Uc(t,n,e),t=t.sibling}function $l(t,n,e){var i=t.tag;if(i===5||i===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(i!==4&&(i===27&&ra(t.type)&&(e=t.stateNode),t=t.child,t!==null))for($l(t,n,e),t=t.sibling;t!==null;)$l(t,n,e),t=t.sibling}function zh(t){var n=t.stateNode,e=t.memoizedProps;try{for(var i=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);sn(n,i,e),n[an]=t,n[gn]=e}catch(d){Tt(t,t.return,d)}}var Ce=!1,Qt=!1,Fc=!1,Ah=typeof WeakSet=="function"?WeakSet:Set,nn=null;function f1(t,n){if(t=t.containerInfo,sd=fo,t=qp(t),Ds(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var i=e.getSelection&&e.getSelection();if(i&&i.rangeCount!==0){e=i.anchorNode;var c=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{e.nodeType,d.nodeType}catch{e=null;break t}var x=0,_=-1,S=-1,j=0,L=0,U=t,M=null;n:for(;;){for(var B;U!==e||c!==0&&U.nodeType!==3||(_=x+c),U!==d||i!==0&&U.nodeType!==3||(S=x+i),U.nodeType===3&&(x+=U.nodeValue.length),(B=U.firstChild)!==null;)M=U,U=B;for(;;){if(U===t)break n;if(M===e&&++j===c&&(_=x),M===d&&++L===i&&(S=x),(B=U.nextSibling)!==null)break;U=M,M=U.parentNode}U=B}e=_===-1||S===-1?null:{start:_,end:S}}else e=null}e=e||{start:0,end:0}}else e=null;for(cd={focusedElem:t,selectionRange:e},fo=!1,nn=n;nn!==null;)if(n=nn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,nn=t;else for(;nn!==null;){switch(n=nn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)c=t[e],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,e=n,c=d.memoizedProps,d=d.memoizedState,i=e.stateNode;try{var K=Da(e.type,c);t=i.getSnapshotBeforeUpdate(K,d),i.__reactInternalSnapshotBeforeUpdate=t}catch(it){Tt(e,e.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)pd(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=n.sibling,t!==null){t.return=n.return,nn=t;break}nn=n.return}}function Th(t,n,e){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ee(t,e),i&4&&br(5,e);break;case 1:if(Ee(t,e),i&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(x){Tt(e,e.return,x)}else{var c=Da(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Tt(e,e.return,x)}}i&64&&Sh(e),i&512&&yr(e,e.return);break;case 3:if(Ee(t,e),i&64&&(t=e.updateQueue,t!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{ff(t,n)}catch(x){Tt(e,e.return,x)}}break;case 27:n===null&&i&4&&zh(e);case 26:case 5:Ee(t,e),n===null&&i&4&&kh(e),i&512&&yr(e,e.return);break;case 12:Ee(t,e);break;case 31:Ee(t,e),i&4&&jh(t,e);break;case 13:Ee(t,e),i&4&&Mh(t,e),i&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=w1.bind(null,e),Y1(t,e))));break;case 22:if(i=e.memoizedState!==null||Ce,!i){n=n!==null&&n.memoizedState!==null||Qt,c=Ce;var d=Qt;Ce=i,(Qt=n)&&!d?ze(t,e,(e.subtreeFlags&8772)!==0):Ee(t,e),Ce=c,Qt=d}break;case 30:break;default:Ee(t,e)}}function Rh(t){var n=t.alternate;n!==null&&(t.alternate=null,Rh(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&xs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,xn=!1;function ke(t,n,e){for(e=e.child;e!==null;)Nh(t,n,e),e=e.sibling}function Nh(t,n,e){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Gi,e)}catch{}switch(e.tag){case 26:Qt||se(e,n),ke(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Qt||se(e,n);var i=qt,c=xn;ra(e.type)&&(qt=e.stateNode,xn=!1),ke(t,n,e),Tr(e.stateNode),qt=i,xn=c;break;case 5:Qt||se(e,n);case 6:if(i=qt,c=xn,qt=null,ke(t,n,e),qt=i,xn=c,qt!==null)if(xn)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(e.stateNode)}catch(d){Tt(e,n,d)}else try{qt.removeChild(e.stateNode)}catch(d){Tt(e,n,d)}break;case 18:qt!==null&&(xn?(t=qt,Sg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Ai(t)):Sg(qt,e.stateNode));break;case 4:i=qt,c=xn,qt=e.stateNode.containerInfo,xn=!0,ke(t,n,e),qt=i,xn=c;break;case 0:case 11:case 14:case 15:Je(2,e,n),Qt||Je(4,e,n),ke(t,n,e);break;case 1:Qt||(se(e,n),i=e.stateNode,typeof i.componentWillUnmount=="function"&&Ch(e,n,i)),ke(t,n,e);break;case 21:ke(t,n,e);break;case 22:Qt=(i=Qt)||e.memoizedState!==null,ke(t,n,e),Qt=i;break;default:ke(t,n,e)}}function jh(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ai(t)}catch(e){Tt(n,n.return,e)}}}function Mh(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ai(t)}catch(e){Tt(n,n.return,e)}}function h1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ah),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ah),n;default:throw Error(l(435,t.tag))}}function Xl(t,n){var e=h1(t);n.forEach(function(i){if(!e.has(i)){e.add(i);var c=S1.bind(null,t,i);i.then(c,c)}})}function vn(t,n){var e=n.deletions;if(e!==null)for(var i=0;i<e.length;i++){var c=e[i],d=t,x=n,_=x;t:for(;_!==null;){switch(_.tag){case 27:if(ra(_.type)){qt=_.stateNode,xn=!1;break t}break;case 5:qt=_.stateNode,xn=!1;break t;case 3:case 4:qt=_.stateNode.containerInfo,xn=!0;break t}_=_.return}if(qt===null)throw Error(l(160));Nh(d,x,c),qt=null,xn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Dh(n,t),n=n.sibling}var Zn=null;function Dh(t,n){var e=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:vn(n,t),bn(t),i&4&&(Je(3,t,t.return),br(3,t),Je(5,t,t.return));break;case 1:vn(n,t),bn(t),i&512&&(Qt||e===null||se(e,e.return)),i&64&&Ce&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?i:e.concat(i))));break;case 26:var c=Zn;if(vn(n,t),bn(t),i&512&&(Qt||e===null||se(e,e.return)),i&4){var d=e!==null?e.memoizedState:null;if(i=t.memoizedState,e===null)if(i===null)if(t.stateNode===null){t:{i=t.type,e=t.memoizedProps,c=c.ownerDocument||c;n:switch(i){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Pi]||d[an]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(i),c.head.insertBefore(d,c.querySelector("head > title"))),sn(d,i,e),d[an]=t,tn(d),i=d;break t;case"link":var x=Dg("link","href",c).get(i+(e.href||""));if(x){for(var _=0;_<x.length;_++)if(d=x[_],d.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&d.getAttribute("rel")===(e.rel==null?null:e.rel)&&d.getAttribute("title")===(e.title==null?null:e.title)&&d.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){x.splice(_,1);break n}}d=c.createElement(i),sn(d,i,e),c.head.appendChild(d);break;case"meta":if(x=Dg("meta","content",c).get(i+(e.content||""))){for(_=0;_<x.length;_++)if(d=x[_],d.getAttribute("content")===(e.content==null?null:""+e.content)&&d.getAttribute("name")===(e.name==null?null:e.name)&&d.getAttribute("property")===(e.property==null?null:e.property)&&d.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&d.getAttribute("charset")===(e.charSet==null?null:e.charSet)){x.splice(_,1);break n}}d=c.createElement(i),sn(d,i,e),c.head.appendChild(d);break;default:throw Error(l(468,i))}d[an]=t,tn(d),i=d}t.stateNode=i}else Bg(c,t.type,t.stateNode);else t.stateNode=Mg(c,i,t.memoizedProps);else d!==i?(d===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):d.count--,i===null?Bg(c,t.type,t.stateNode):Mg(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Hc(t,t.memoizedProps,e.memoizedProps)}break;case 27:vn(n,t),bn(t),i&512&&(Qt||e===null||se(e,e.return)),e!==null&&i&4&&Hc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(vn(n,t),bn(t),i&512&&(Qt||e===null||se(e,e.return)),t.flags&32){c=t.stateNode;try{Ka(c,"")}catch(K){Tt(t,t.return,K)}}i&4&&t.stateNode!=null&&(c=t.memoizedProps,Hc(t,c,e!==null?e.memoizedProps:c)),i&1024&&(Fc=!0);break;case 6:if(vn(n,t),bn(t),i&4){if(t.stateNode===null)throw Error(l(162));i=t.memoizedProps,e=t.stateNode;try{e.nodeValue=i}catch(K){Tt(t,t.return,K)}}break;case 3:if(so=null,c=Zn,Zn=lo(n.containerInfo),vn(n,t),Zn=c,bn(t),i&4&&e!==null&&e.memoizedState.isDehydrated)try{Ai(n.containerInfo)}catch(K){Tt(t,t.return,K)}Fc&&(Fc=!1,Bh(t));break;case 4:i=Zn,Zn=lo(t.stateNode.containerInfo),vn(n,t),bn(t),Zn=i;break;case 12:vn(n,t),bn(t);break;case 31:vn(n,t),bn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Xl(t,i)));break;case 13:vn(n,t),bn(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Il=Sn()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Xl(t,i)));break;case 22:c=t.memoizedState!==null;var S=e!==null&&e.memoizedState!==null,j=Ce,L=Qt;if(Ce=j||c,Qt=L||S,vn(n,t),Qt=L,Ce=j,bn(t),i&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(e===null||S||Ce||Qt||Ba(t)),e=null,n=t;;){if(n.tag===5||n.tag===26){if(e===null){S=e=n;try{if(d=S.stateNode,c)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{_=S.stateNode;var U=S.memoizedProps.style,M=U!=null&&U.hasOwnProperty("display")?U.display:null;_.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(K){Tt(S,S.return,K)}}}else if(n.tag===6){if(e===null){S=n;try{S.stateNode.nodeValue=c?"":S.memoizedProps}catch(K){Tt(S,S.return,K)}}}else if(n.tag===18){if(e===null){S=n;try{var B=S.stateNode;c?Cg(B,!0):Cg(S.stateNode,!1)}catch(K){Tt(S,S.return,K)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=t.updateQueue,i!==null&&(e=i.retryQueue,e!==null&&(i.retryQueue=null,Xl(t,e))));break;case 19:vn(n,t),bn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Xl(t,i)));break;case 30:break;case 21:break;default:vn(n,t),bn(t)}}function bn(t){var n=t.flags;if(n&2){try{for(var e,i=t.return;i!==null;){if(Eh(i)){e=i;break}i=i.return}if(e==null)throw Error(l(160));switch(e.tag){case 27:var c=e.stateNode,d=qc(t);$l(t,d,c);break;case 5:var x=e.stateNode;e.flags&32&&(Ka(x,""),e.flags&=-33);var _=qc(t);$l(t,_,x);break;case 3:case 4:var S=e.stateNode.containerInfo,j=qc(t);Uc(t,j,S);break;default:throw Error(l(161))}}catch(L){Tt(t,t.return,L)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Bh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Bh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ee(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Th(t,n.alternate,n),n=n.sibling}function Ba(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Je(4,n,n.return),Ba(n);break;case 1:se(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&Ch(n,n.return,e),Ba(n);break;case 27:Tr(n.stateNode);case 26:case 5:se(n,n.return),Ba(n);break;case 22:n.memoizedState===null&&Ba(n);break;case 30:Ba(n);break;default:Ba(n)}t=t.sibling}}function ze(t,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,c=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:ze(c,d,e),br(4,d);break;case 1:if(ze(c,d,e),i=d,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(j){Tt(i,i.return,j)}if(i=d,c=i.updateQueue,c!==null){var _=i.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)pf(S[c],_)}catch(j){Tt(i,i.return,j)}}e&&x&64&&Sh(d),yr(d,d.return);break;case 27:zh(d);case 26:case 5:ze(c,d,e),e&&i===null&&x&4&&kh(d),yr(d,d.return);break;case 12:ze(c,d,e);break;case 31:ze(c,d,e),e&&x&4&&jh(c,d);break;case 13:ze(c,d,e),e&&x&4&&Mh(c,d);break;case 22:d.memoizedState===null&&ze(c,d,e),yr(d,d.return);break;case 30:break;default:ze(c,d,e)}n=n.sibling}}function Yc(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&lr(e))}function Vc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lr(t))}function Kn(t,n,e,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lh(t,n,e,i),n=n.sibling}function Lh(t,n,e,i){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Kn(t,n,e,i),c&2048&&br(9,n);break;case 1:Kn(t,n,e,i);break;case 3:Kn(t,n,e,i),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lr(t)));break;case 12:if(c&2048){Kn(t,n,e,i),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,_=d.onPostCommit;typeof _=="function"&&_(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Tt(n,n.return,S)}}else Kn(t,n,e,i);break;case 31:Kn(t,n,e,i);break;case 13:Kn(t,n,e,i);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Kn(t,n,e,i):_r(t,n):d._visibility&2?Kn(t,n,e,i):(d._visibility|=2,xi(t,n,e,i,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Yc(x,n);break;case 24:Kn(t,n,e,i),c&2048&&Vc(n.alternate,n);break;default:Kn(t,n,e,i)}}function xi(t,n,e,i,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,_=e,S=i,j=x.flags;switch(x.tag){case 0:case 11:case 15:xi(d,x,_,S,c),br(8,x);break;case 23:break;case 22:var L=x.stateNode;x.memoizedState!==null?L._visibility&2?xi(d,x,_,S,c):_r(d,x):(L._visibility|=2,xi(d,x,_,S,c)),c&&j&2048&&Yc(x.alternate,x);break;case 24:xi(d,x,_,S,c),c&&j&2048&&Vc(x.alternate,x);break;default:xi(d,x,_,S,c)}n=n.sibling}}function _r(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,i=n,c=i.flags;switch(i.tag){case 22:_r(e,i),c&2048&&Yc(i.alternate,i);break;case 24:_r(e,i),c&2048&&Vc(i.alternate,i);break;default:_r(e,i)}n=n.sibling}}var wr=8192;function vi(t,n,e){if(t.subtreeFlags&wr)for(t=t.child;t!==null;)Oh(t,n,e),t=t.sibling}function Oh(t,n,e){switch(t.tag){case 26:vi(t,n,e),t.flags&wr&&t.memoizedState!==null&&ty(e,Zn,t.memoizedState,t.memoizedProps);break;case 5:vi(t,n,e);break;case 3:case 4:var i=Zn;Zn=lo(t.stateNode.containerInfo),vi(t,n,e),Zn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=wr,wr=16777216,vi(t,n,e),wr=i):vi(t,n,e));break;default:vi(t,n,e)}}function Hh(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Sr(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var i=n[e];nn=i,Uh(i,t)}Hh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qh(t),t=t.sibling}function qh(t){switch(t.tag){case 0:case 11:case 15:Sr(t),t.flags&2048&&Je(9,t,t.return);break;case 3:Sr(t);break;case 12:Sr(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Pl(t)):Sr(t);break;default:Sr(t)}}function Pl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var i=n[e];nn=i,Uh(i,t)}Hh(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Je(8,n,n.return),Pl(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,Pl(n));break;default:Pl(n)}t=t.sibling}}function Uh(t,n){for(;nn!==null;){var e=nn;switch(e.tag){case 0:case 11:case 15:Je(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var i=e.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:lr(e.memoizedState.cache)}if(i=e.child,i!==null)i.return=e,nn=i;else t:for(e=t;nn!==null;){i=nn;var c=i.sibling,d=i.return;if(Rh(i),i===e){nn=null;break t}if(c!==null){c.return=d,nn=c;break t}nn=d}}}var g1={getCacheForType:function(t){var n=ln(Xt),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e},cacheSignal:function(){return ln(Xt).controller.signal}},m1=typeof WeakMap=="function"?WeakMap:Map,kt=0,Bt=null,ht=null,mt=0,At=0,Rn=null,We=!1,bi=!1,Gc=!1,Ae=0,Vt=0,ta=0,La=0,$c=0,Nn=0,yi=0,Cr=null,yn=null,Xc=!1,Il=0,Fh=0,Ql=1/0,Zl=null,na=null,Kt=0,ea=null,_i=null,Te=0,Pc=0,Ic=null,Yh=null,kr=0,Qc=null;function jn(){return(kt&2)!==0&&mt!==0?mt&-mt:D.T!==null?nd():ap()}function Vh(){if(Nn===0)if((mt&536870912)===0||vt){var t=il;il<<=1,(il&3932160)===0&&(il=262144),Nn=t}else Nn=536870912;return t=An.current,t!==null&&(t.flags|=32),Nn}function _n(t,n,e){(t===Bt&&(At===2||At===9)||t.cancelPendingCommit!==null)&&(wi(t,0),aa(t,mt,Nn,!1)),Xi(t,e),((kt&2)===0||t!==Bt)&&(t===Bt&&((kt&2)===0&&(La|=e),Vt===4&&aa(t,mt,Nn,!1)),ce(t))}function Gh(t,n,e){if((kt&6)!==0)throw Error(l(327));var i=!e&&(n&127)===0&&(n&t.expiredLanes)===0||$i(t,n),c=i?b1(t,n):Kc(t,n,!0),d=i;do{if(c===0){bi&&!i&&aa(t,n,0,!1);break}else{if(e=t.current.alternate,d&&!x1(e)){c=Kc(t,n,!1),d=!1;continue}if(c===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var _=t;c=Cr;var S=_.current.memoizedState.isDehydrated;if(S&&(wi(_,x).flags|=256),x=Kc(_,x,!1),x!==2){if(Gc&&!S){_.errorRecoveryDisabledLanes|=d,La|=d,c=4;break t}d=yn,yn=c,d!==null&&(yn===null?yn=d:yn.push.apply(yn,d))}c=x}if(d=!1,c!==2)continue}}if(c===1){wi(t,0),aa(t,n,0,!0);break}t:{switch(i=t,d=c,d){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n)break;case 6:aa(i,n,Nn,!We);break t;case 2:yn=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(c=Il+300-Sn(),10<c)){if(aa(i,n,Nn,!We),ll(i,0,!0)!==0)break t;Te=n,i.timeoutHandle=_g($h.bind(null,i,e,yn,Zl,Xc,n,Nn,La,yi,We,d,"Throttled",-0,0),c);break t}$h(i,e,yn,Zl,Xc,n,Nn,La,yi,We,d,null,-0,0)}}break}while(!0);ce(t)}function $h(t,n,e,i,c,d,x,_,S,j,L,U,M,B){if(t.timeoutHandle=-1,U=n.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:he},Oh(n,d,U);var K=(d&62914560)===d?Il-Sn():(d&4194048)===d?Fh-Sn():0;if(K=ny(U,K),K!==null){Te=d,t.cancelPendingCommit=K(Wh.bind(null,t,n,d,e,i,c,x,_,S,L,U,null,M,B)),aa(t,d,x,!j);return}}Wh(t,n,d,e,i,c,x,_,S)}function x1(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var i=0;i<e.length;i++){var c=e[i],d=c.getSnapshot;c=c.value;try{if(!En(d(),c))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function aa(t,n,e,i){n&=~$c,n&=~La,t.suspendedLanes|=n,t.pingedLanes&=~n,i&&(t.warmLanes|=n),i=t.expirationTimes;for(var c=n;0<c;){var d=31-kn(c),x=1<<d;i[d]=-1,c&=~x}e!==0&&tp(t,e,n)}function Kl(){return(kt&6)===0?(Er(0),!1):!0}function Zc(){if(ht!==null){if(At===0)var t=ht.return;else t=ht,ve=za=null,pc(t),pi=null,sr=0,t=ht;for(;t!==null;)wh(t.alternate,t),t=t.return;ht=null}}function wi(t,n){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,O1(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Te=0,Zc(),Bt=t,ht=e=me(t.current,null),mt=n,At=0,Rn=null,We=!1,bi=$i(t,n),Gc=!1,yi=Nn=$c=La=ta=Vt=0,yn=Cr=null,Xc=!1,(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var c=31-kn(i),d=1<<c;n|=t[c],i&=~d}return Ae=n,vl(),e}function Xh(t,n){ct=null,D.H=mr,n===ui||n===El?(n=sf(),At=3):n===tc?(n=sf(),At=4):At=n===Ac?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Rn=n,ht===null&&(Vt=1,Ul(t,Un(n,t.current)))}function Ph(){var t=An.current;return t===null?!0:(mt&4194048)===mt?Gn===null:(mt&62914560)===mt||(mt&536870912)!==0?t===Gn:!1}function Ih(){var t=D.H;return D.H=mr,t===null?mr:t}function Qh(){var t=D.A;return D.A=g1,t}function Jl(){Vt=4,We||(mt&4194048)!==mt&&An.current!==null||(bi=!0),(ta&134217727)===0&&(La&134217727)===0||Bt===null||aa(Bt,mt,Nn,!1)}function Kc(t,n,e){var i=kt;kt|=2;var c=Ih(),d=Qh();(Bt!==t||mt!==n)&&(Zl=null,wi(t,n)),n=!1;var x=Vt;t:do try{if(At!==0&&ht!==null){var _=ht,S=Rn;switch(At){case 8:Zc(),x=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(n=!0);var j=At;if(At=0,Rn=null,Si(t,_,S,j),e&&bi){x=0;break t}break;default:j=At,At=0,Rn=null,Si(t,_,S,j)}}v1(),x=Vt;break}catch(L){Xh(t,L)}while(!0);return n&&t.shellSuspendCounter++,ve=za=null,kt=i,D.H=c,D.A=d,ht===null&&(Bt=null,mt=0,vl()),x}function v1(){for(;ht!==null;)Zh(ht)}function b1(t,n){var e=kt;kt|=2;var i=Ih(),c=Qh();Bt!==t||mt!==n?(Zl=null,Ql=Sn()+500,wi(t,n)):bi=$i(t,n);t:do try{if(At!==0&&ht!==null){n=ht;var d=Rn;n:switch(At){case 1:At=0,Rn=null,Si(t,n,d,1);break;case 2:case 9:if(lf(d)){At=0,Rn=null,Kh(n);break}n=function(){At!==2&&At!==9||Bt!==t||(At=7),ce(t)},d.then(n,n);break t;case 3:At=7;break t;case 4:At=5;break t;case 7:lf(d)?(At=0,Rn=null,Kh(n)):(At=0,Rn=null,Si(t,n,d,7));break;case 5:var x=null;switch(ht.tag){case 26:x=ht.memoizedState;case 5:case 27:var _=ht;if(x?Lg(x):_.stateNode.complete){At=0,Rn=null;var S=_.sibling;if(S!==null)ht=S;else{var j=_.return;j!==null?(ht=j,Wl(j)):ht=null}break n}}At=0,Rn=null,Si(t,n,d,5);break;case 6:At=0,Rn=null,Si(t,n,d,6);break;case 8:Zc(),Vt=6;break t;default:throw Error(l(462))}}y1();break}catch(L){Xh(t,L)}while(!0);return ve=za=null,D.H=i,D.A=c,kt=e,ht!==null?0:(Bt=null,mt=0,vl(),Vt)}function y1(){for(;ht!==null&&!Vb();)Zh(ht)}function Zh(t){var n=yh(t.alternate,t,Ae);t.memoizedProps=t.pendingProps,n===null?Wl(t):ht=n}function Kh(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=hh(e,n,n.pendingProps,n.type,void 0,mt);break;case 11:n=hh(e,n,n.pendingProps,n.type.render,n.ref,mt);break;case 5:pc(n);default:wh(e,n),n=ht=Ip(n,Ae),n=yh(e,n,Ae)}t.memoizedProps=t.pendingProps,n===null?Wl(t):ht=n}function Si(t,n,e,i){ve=za=null,pc(n),pi=null,sr=0;var c=n.return;try{if(s1(t,c,n,e,mt)){Vt=1,Ul(t,Un(e,t.current)),ht=null;return}}catch(d){if(c!==null)throw ht=c,d;Vt=1,Ul(t,Un(e,t.current)),ht=null;return}n.flags&32768?(vt||i===1?t=!0:bi||(mt&536870912)!==0?t=!1:(We=t=!0,(i===2||i===9||i===3||i===6)&&(i=An.current,i!==null&&i.tag===13&&(i.flags|=16384))),Jh(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){Jh(n,We);return}t=n.return;var e=u1(n.alternate,n,Ae);if(e!==null){ht=e;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=t}while(n!==null);Vt===0&&(Vt=5)}function Jh(t,n){do{var e=p1(t.alternate,t);if(e!==null){e.flags&=32767,ht=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){ht=t;return}ht=t=e}while(t!==null);Vt=6,ht=null}function Wh(t,n,e,i,c,d,x,_,S){t.cancelPendingCommit=null;do to();while(Kt!==0);if((kt&6)!==0)throw Error(l(327));if(n!==null){if(n===t.current)throw Error(l(177));if(d=n.lanes|n.childLanes,d|=qs,Wb(t,e,d,x,_,S),t===Bt&&(ht=Bt=null,mt=0),_i=n,ea=t,Te=e,Pc=d,Ic=c,Yh=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,C1(el,function(){return ig(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,c=I.p,I.p=2,x=kt,kt|=4;try{f1(t,n,e)}finally{kt=x,I.p=c,D.T=i}}Kt=1,tg(),ng(),eg()}}function tg(){if(Kt===1){Kt=0;var t=ea,n=_i,e=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||e){e=D.T,D.T=null;var i=I.p;I.p=2;var c=kt;kt|=4;try{Dh(n,t);var d=cd,x=qp(t.containerInfo),_=d.focusedElem,S=d.selectionRange;if(x!==_&&_&&_.ownerDocument&&Hp(_.ownerDocument.documentElement,_)){if(S!==null&&Ds(_)){var j=S.start,L=S.end;if(L===void 0&&(L=j),"selectionStart"in _)_.selectionStart=j,_.selectionEnd=Math.min(L,_.value.length);else{var U=_.ownerDocument||document,M=U&&U.defaultView||window;if(M.getSelection){var B=M.getSelection(),K=_.textContent.length,it=Math.min(S.start,K),Mt=S.end===void 0?it:Math.min(S.end,K);!B.extend&&it>Mt&&(x=Mt,Mt=it,it=x);var T=Op(_,it),E=Op(_,Mt);if(T&&E&&(B.rangeCount!==1||B.anchorNode!==T.node||B.anchorOffset!==T.offset||B.focusNode!==E.node||B.focusOffset!==E.offset)){var N=U.createRange();N.setStart(T.node,T.offset),B.removeAllRanges(),it>Mt?(B.addRange(N),B.extend(E.node,E.offset)):(N.setEnd(E.node,E.offset),B.addRange(N))}}}}for(U=[],B=_;B=B.parentNode;)B.nodeType===1&&U.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<U.length;_++){var H=U[_];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}fo=!!sd,cd=sd=null}finally{kt=c,I.p=i,D.T=e}}t.current=n,Kt=2}}function ng(){if(Kt===2){Kt=0;var t=ea,n=_i,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=D.T,D.T=null;var i=I.p;I.p=2;var c=kt;kt|=4;try{Th(t,n.alternate,n)}finally{kt=c,I.p=i,D.T=e}}Kt=3}}function eg(){if(Kt===4||Kt===3){Kt=0,Gb();var t=ea,n=_i,e=Te,i=Yh;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Kt=5:(Kt=0,_i=ea=null,ag(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(na=null),gs(e),n=n.stateNode,Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Gi,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=D.T,c=I.p,I.p=2,D.T=null;try{for(var d=t.onRecoverableError,x=0;x<i.length;x++){var _=i[x];d(_.value,{componentStack:_.stack})}}finally{D.T=n,I.p=c}}(Te&3)!==0&&to(),ce(t),c=t.pendingLanes,(e&261930)!==0&&(c&42)!==0?t===Qc?kr++:(kr=0,Qc=t):kr=0,Er(0)}}function ag(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,lr(n)))}function to(){return tg(),ng(),eg(),ig()}function ig(){if(Kt!==5)return!1;var t=ea,n=Pc;Pc=0;var e=gs(Te),i=D.T,c=I.p;try{I.p=32>e?32:e,D.T=null,e=Ic,Ic=null;var d=ea,x=Te;if(Kt=0,_i=ea=null,Te=0,(kt&6)!==0)throw Error(l(331));var _=kt;if(kt|=4,qh(d.current),Lh(d,d.current,x,e),kt=_,Er(0,!1),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Gi,d)}catch{}return!0}finally{I.p=c,D.T=i,ag(t,n)}}function rg(t,n,e){n=Un(e,n),n=zc(t.stateNode,n,2),t=Qe(t,n,2),t!==null&&(Xi(t,2),ce(t))}function Tt(t,n,e){if(t.tag===3)rg(t,t,e);else for(;n!==null;){if(n.tag===3){rg(n,t,e);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(na===null||!na.has(i))){t=Un(e,t),e=lh(2),i=Qe(n,e,2),i!==null&&(oh(e,i,n,t),Xi(i,2),ce(i));break}}n=n.return}}function Jc(t,n,e){var i=t.pingCache;if(i===null){i=t.pingCache=new m1;var c=new Set;i.set(n,c)}else c=i.get(n),c===void 0&&(c=new Set,i.set(n,c));c.has(e)||(Gc=!0,c.add(e),t=_1.bind(null,t,n,e),n.then(t,t))}function _1(t,n,e){var i=t.pingCache;i!==null&&i.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,Bt===t&&(mt&e)===e&&(Vt===4||Vt===3&&(mt&62914560)===mt&&300>Sn()-Il?(kt&2)===0&&wi(t,0):$c|=e,yi===mt&&(yi=0)),ce(t)}function lg(t,n){n===0&&(n=Wu()),t=Ca(t,n),t!==null&&(Xi(t,n),ce(t))}function w1(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),lg(t,e)}function S1(t,n){var e=0;switch(t.tag){case 31:case 13:var i=t.stateNode,c=t.memoizedState;c!==null&&(e=c.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(n),lg(t,e)}function C1(t,n){return us(t,n)}var no=null,Ci=null,Wc=!1,eo=!1,td=!1,ia=0;function ce(t){t!==Ci&&t.next===null&&(Ci===null?no=Ci=t:Ci=Ci.next=t),eo=!0,Wc||(Wc=!0,E1())}function Er(t,n){if(!td&&eo){td=!0;do for(var e=!1,i=no;i!==null;){if(t!==0){var c=i.pendingLanes;if(c===0)var d=0;else{var x=i.suspendedLanes,_=i.pingedLanes;d=(1<<31-kn(42|t)+1)-1,d&=c&~(x&~_),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(e=!0,dg(i,d))}else d=mt,d=ll(i,i===Bt?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||$i(i,d)||(e=!0,dg(i,d));i=i.next}while(e);td=!1}}function k1(){og()}function og(){eo=Wc=!1;var t=0;ia!==0&&L1()&&(t=ia);for(var n=Sn(),e=null,i=no;i!==null;){var c=i.next,d=sg(i,n);d===0?(i.next=null,e===null?no=c:e.next=c,c===null&&(Ci=e)):(e=i,(t!==0||(d&3)!==0)&&(eo=!0)),i=c}Kt!==0&&Kt!==5||Er(t),ia!==0&&(ia=0)}function sg(t,n){for(var e=t.suspendedLanes,i=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-kn(d),_=1<<x,S=c[x];S===-1?((_&e)===0||(_&i)!==0)&&(c[x]=Jb(_,n)):S<=n&&(t.expiredLanes|=_),d&=~_}if(n=Bt,e=mt,e=ll(t,t===n?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,e===0||t===n&&(At===2||At===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&ps(i),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||$i(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(i!==null&&ps(i),gs(e)){case 2:case 8:e=Ku;break;case 32:e=el;break;case 268435456:e=Ju;break;default:e=el}return i=cg.bind(null,t),e=us(e,i),t.callbackPriority=n,t.callbackNode=e,n}return i!==null&&i!==null&&ps(i),t.callbackPriority=2,t.callbackNode=null,2}function cg(t,n){if(Kt!==0&&Kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(to()&&t.callbackNode!==e)return null;var i=mt;return i=ll(t,t===Bt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Gh(t,i,n),sg(t,Sn()),t.callbackNode!=null&&t.callbackNode===e?cg.bind(null,t):null)}function dg(t,n){if(to())return null;Gh(t,n,!0)}function E1(){H1(function(){(kt&6)!==0?us(Zu,k1):og()})}function nd(){if(ia===0){var t=ci;t===0&&(t=al,al<<=1,(al&261888)===0&&(al=256)),ia=t}return ia}function ug(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dl(""+t)}function pg(t,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,t.id&&e.setAttribute("form",t.id),n.parentNode.insertBefore(e,n),t=new FormData(t),e.parentNode.removeChild(e),t}function z1(t,n,e,i,c){if(n==="submit"&&e&&e.stateNode===c){var d=ug((c[gn]||null).action),x=i.submitter;x&&(n=(n=x[gn]||null)?ug(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var _=new hl("action","action",null,i,c);t.push({event:_,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ia!==0){var S=x?pg(c,x):new FormData(c);_c(e,{pending:!0,data:S,method:c.method,action:d},null,S)}}else typeof d=="function"&&(_.preventDefault(),S=x?pg(c,x):new FormData(c),_c(e,{pending:!0,data:S,method:c.method,action:d},d,S))},currentTarget:c}]})}}for(var ed=0;ed<Hs.length;ed++){var ad=Hs[ed],A1=ad.toLowerCase(),T1=ad[0].toUpperCase()+ad.slice(1);Qn(A1,"on"+T1)}Qn(Yp,"onAnimationEnd"),Qn(Vp,"onAnimationIteration"),Qn(Gp,"onAnimationStart"),Qn("dblclick","onDoubleClick"),Qn("focusin","onFocus"),Qn("focusout","onBlur"),Qn($0,"onTransitionRun"),Qn(X0,"onTransitionStart"),Qn(P0,"onTransitionCancel"),Qn($p,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zr));function fg(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var i=t[e],c=i.event;i=i.listeners;t:{var d=void 0;if(n)for(var x=i.length-1;0<=x;x--){var _=i[x],S=_.instance,j=_.currentTarget;if(_=_.listener,S!==d&&c.isPropagationStopped())break t;d=_,c.currentTarget=j;try{d(c)}catch(L){xl(L)}c.currentTarget=null,d=S}else for(x=0;x<i.length;x++){if(_=i[x],S=_.instance,j=_.currentTarget,_=_.listener,S!==d&&c.isPropagationStopped())break t;d=_,c.currentTarget=j;try{d(c)}catch(L){xl(L)}c.currentTarget=null,d=S}}}}function gt(t,n){var e=n[ms];e===void 0&&(e=n[ms]=new Set);var i=t+"__bubble";e.has(i)||(hg(n,t,2,!1),e.add(i))}function id(t,n,e){var i=0;n&&(i|=4),hg(e,t,i,n)}var ao="_reactListening"+Math.random().toString(36).slice(2);function rd(t){if(!t[ao]){t[ao]=!0,lp.forEach(function(e){e!=="selectionchange"&&(R1.has(e)||id(e,!1,t),id(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ao]||(n[ao]=!0,id("selectionchange",!1,n))}}function hg(t,n,e,i){switch(Vg(n)){case 2:var c=iy;break;case 8:c=ry;break;default:c=yd}e=c.bind(null,n,e,t),c=void 0,!ks||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),i?c!==void 0?t.addEventListener(n,e,{capture:!0,passive:c}):t.addEventListener(n,e,!0):c!==void 0?t.addEventListener(n,e,{passive:c}):t.addEventListener(n,e,!1)}function ld(t,n,e,i,c){var d=i;if((n&1)===0&&(n&2)===0&&i!==null)t:for(;;){if(i===null)return;var x=i.tag;if(x===3||x===4){var _=i.stateNode.containerInfo;if(_===c)break;if(x===4)for(x=i.return;x!==null;){var S=x.tag;if((S===3||S===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;_!==null;){if(x=Xa(_),x===null)return;if(S=x.tag,S===5||S===6||S===26||S===27){i=d=x;continue t}_=_.parentNode}}i=i.return}vp(function(){var j=d,L=Ss(e),U=[];t:{var M=Xp.get(t);if(M!==void 0){var B=hl,K=t;switch(t){case"keypress":if(pl(e)===0)break t;case"keydown":case"keyup":B=S0;break;case"focusin":K="focus",B=Ts;break;case"focusout":K="blur",B=Ts;break;case"beforeblur":case"afterblur":B=Ts;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=E0;break;case Yp:case Vp:case Gp:B=h0;break;case $p:B=A0;break;case"scroll":case"scrollend":B=c0;break;case"wheel":B=R0;break;case"copy":case"cut":case"paste":B=m0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Sp;break;case"toggle":case"beforetoggle":B=j0}var it=(n&4)!==0,Mt=!it&&(t==="scroll"||t==="scrollend"),T=it?M!==null?M+"Capture":null:M;it=[];for(var E=j,N;E!==null;){var H=E;if(N=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||N===null||T===null||(H=Qi(E,T),H!=null&&it.push(Ar(E,H,N))),Mt)break;E=E.return}0<it.length&&(M=new B(M,K,null,e,L),U.push({event:M,listeners:it}))}}if((n&7)===0){t:{if(M=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",M&&e!==ws&&(K=e.relatedTarget||e.fromElement)&&(Xa(K)||K[$a]))break t;if((B||M)&&(M=L.window===L?L:(M=L.ownerDocument)?M.defaultView||M.parentWindow:window,B?(K=e.relatedTarget||e.toElement,B=j,K=K?Xa(K):null,K!==null&&(Mt=u(K),it=K.tag,K!==Mt||it!==5&&it!==27&&it!==6)&&(K=null)):(B=null,K=j),B!==K)){if(it=_p,H="onMouseLeave",T="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(it=Sp,H="onPointerLeave",T="onPointerEnter",E="pointer"),Mt=B==null?M:Ii(B),N=K==null?M:Ii(K),M=new it(H,E+"leave",B,e,L),M.target=Mt,M.relatedTarget=N,H=null,Xa(L)===j&&(it=new it(T,E+"enter",K,e,L),it.target=N,it.relatedTarget=Mt,H=it),Mt=H,B&&K)n:{for(it=N1,T=B,E=K,N=0,H=T;H;H=it(H))N++;H=0;for(var et=E;et;et=it(et))H++;for(;0<N-H;)T=it(T),N--;for(;0<H-N;)E=it(E),H--;for(;N--;){if(T===E||E!==null&&T===E.alternate){it=T;break n}T=it(T),E=it(E)}it=null}else it=null;B!==null&&gg(U,M,B,it,!1),K!==null&&Mt!==null&&gg(U,Mt,K,it,!0)}}t:{if(M=j?Ii(j):window,B=M.nodeName&&M.nodeName.toLowerCase(),B==="select"||B==="input"&&M.type==="file")var _t=Np;else if(Tp(M))if(jp)_t=Y0;else{_t=U0;var nt=q0}else B=M.nodeName,!B||B.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?j&&_s(j.elementType)&&(_t=Np):_t=F0;if(_t&&(_t=_t(t,j))){Rp(U,_t,e,L);break t}nt&&nt(t,M,j),t==="focusout"&&j&&M.type==="number"&&j.memoizedProps.value!=null&&ys(M,"number",M.value)}switch(nt=j?Ii(j):window,t){case"focusin":(Tp(nt)||nt.contentEditable==="true")&&(ni=nt,Bs=j,ar=null);break;case"focusout":ar=Bs=ni=null;break;case"mousedown":Ls=!0;break;case"contextmenu":case"mouseup":case"dragend":Ls=!1,Up(U,e,L);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":Up(U,e,L)}var dt;if(Ns)t:{switch(t){case"compositionstart":var xt="onCompositionStart";break t;case"compositionend":xt="onCompositionEnd";break t;case"compositionupdate":xt="onCompositionUpdate";break t}xt=void 0}else ti?zp(t,e)&&(xt="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(xt="onCompositionStart");xt&&(Cp&&e.locale!=="ko"&&(ti||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ti&&(dt=bp()):(Ye=L,Es="value"in Ye?Ye.value:Ye.textContent,ti=!0)),nt=io(j,xt),0<nt.length&&(xt=new wp(xt,t,null,e,L),U.push({event:xt,listeners:nt}),dt?xt.data=dt:(dt=Ap(e),dt!==null&&(xt.data=dt)))),(dt=D0?B0(t,e):L0(t,e))&&(xt=io(j,"onBeforeInput"),0<xt.length&&(nt=new wp("onBeforeInput","beforeinput",null,e,L),U.push({event:nt,listeners:xt}),nt.data=dt)),z1(U,t,j,e,L)}fg(U,n)})}function Ar(t,n,e){return{instance:t,listener:n,currentTarget:e}}function io(t,n){for(var e=n+"Capture",i=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Qi(t,e),c!=null&&i.unshift(Ar(t,c,d)),c=Qi(t,n),c!=null&&i.push(Ar(t,c,d))),t.tag===3)return i;t=t.return}return[]}function N1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function gg(t,n,e,i,c){for(var d=n._reactName,x=[];e!==null&&e!==i;){var _=e,S=_.alternate,j=_.stateNode;if(_=_.tag,S!==null&&S===i)break;_!==5&&_!==26&&_!==27||j===null||(S=j,c?(j=Qi(e,d),j!=null&&x.unshift(Ar(e,j,S))):c||(j=Qi(e,d),j!=null&&x.push(Ar(e,j,S)))),e=e.return}x.length!==0&&t.push({event:n,listeners:x})}var j1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function mg(t){return(typeof t=="string"?t:""+t).replace(j1,`
`).replace(M1,"")}function xg(t,n){return n=mg(n),mg(t)===n}function jt(t,n,e,i,c,d){switch(e){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Ka(t,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Ka(t,""+i);break;case"className":sl(t,"class",i);break;case"tabIndex":sl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":sl(t,e,i);break;case"style":mp(t,i,d);break;case"data":if(n!=="object"){sl(t,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(e);break}i=dl(""+i),t.setAttribute(e,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(e==="formAction"?(n!=="input"&&jt(t,n,"name",c.name,c,null),jt(t,n,"formEncType",c.formEncType,c,null),jt(t,n,"formMethod",c.formMethod,c,null),jt(t,n,"formTarget",c.formTarget,c,null)):(jt(t,n,"encType",c.encType,c,null),jt(t,n,"method",c.method,c,null),jt(t,n,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(e);break}i=dl(""+i),t.setAttribute(e,i);break;case"onClick":i!=null&&(t.onclick=he);break;case"onScroll":i!=null&&gt("scroll",t);break;case"onScrollEnd":i!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(e=i.__html,e!=null){if(c.children!=null)throw Error(l(60));t.innerHTML=e}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}e=dl(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(e,""+i):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":i===!0?t.setAttribute(e,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(e,i):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(e,i):t.removeAttribute(e);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(e):t.setAttribute(e,i);break;case"popover":gt("beforetoggle",t),gt("toggle",t),ol(t,"popover",i);break;case"xlinkActuate":fe(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":fe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":fe(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":fe(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":fe(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":fe(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":fe(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":fe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":fe(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ol(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=o0.get(e)||e,ol(t,e,i))}}function od(t,n,e,i,c,d){switch(e){case"style":mp(t,i,d);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(e=i.__html,e!=null){if(c.children!=null)throw Error(l(60));t.innerHTML=e}}break;case"children":typeof i=="string"?Ka(t,i):(typeof i=="number"||typeof i=="bigint")&&Ka(t,""+i);break;case"onScroll":i!=null&&gt("scroll",t);break;case"onScrollEnd":i!=null&&gt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=he);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!op.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(c=e.endsWith("Capture"),n=e.slice(2,c?e.length-7:void 0),d=t[gn]||null,d=d!=null?d[e]:null,typeof d=="function"&&t.removeEventListener(n,d,c),typeof i=="function")){typeof d!="function"&&d!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(n,i,c);break t}e in t?t[e]=i:i===!0?t.setAttribute(e,""):ol(t,e,i)}}}function sn(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var i=!1,c=!1,d;for(d in e)if(e.hasOwnProperty(d)){var x=e[d];if(x!=null)switch(d){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:jt(t,n,d,x,e,null)}}c&&jt(t,n,"srcSet",e.srcSet,e,null),i&&jt(t,n,"src",e.src,e,null);return;case"input":gt("invalid",t);var _=d=x=c=null,S=null,j=null;for(i in e)if(e.hasOwnProperty(i)){var L=e[i];if(L!=null)switch(i){case"name":c=L;break;case"type":x=L;break;case"checked":S=L;break;case"defaultChecked":j=L;break;case"value":d=L;break;case"defaultValue":_=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(l(137,n));break;default:jt(t,n,i,L,e,null)}}pp(t,d,_,S,j,x,c,!1);return;case"select":gt("invalid",t),i=x=d=null;for(c in e)if(e.hasOwnProperty(c)&&(_=e[c],_!=null))switch(c){case"value":d=_;break;case"defaultValue":x=_;break;case"multiple":i=_;default:jt(t,n,c,_,e,null)}n=d,e=x,t.multiple=!!i,n!=null?Za(t,!!i,n,!1):e!=null&&Za(t,!!i,e,!0);return;case"textarea":gt("invalid",t),d=c=i=null;for(x in e)if(e.hasOwnProperty(x)&&(_=e[x],_!=null))switch(x){case"value":i=_;break;case"defaultValue":c=_;break;case"children":d=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(l(91));break;default:jt(t,n,x,_,e,null)}hp(t,i,c,d);return;case"option":for(S in e)e.hasOwnProperty(S)&&(i=e[S],i!=null)&&(S==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":jt(t,n,S,i,e,null));return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(i=0;i<zr.length;i++)gt(zr[i],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in e)if(e.hasOwnProperty(j)&&(i=e[j],i!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:jt(t,n,j,i,e,null)}return;default:if(_s(n)){for(L in e)e.hasOwnProperty(L)&&(i=e[L],i!==void 0&&od(t,n,L,i,e,void 0));return}}for(_ in e)e.hasOwnProperty(_)&&(i=e[_],i!=null&&jt(t,n,_,i,e,null))}function D1(t,n,e,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,x=null,_=null,S=null,j=null,L=null;for(B in e){var U=e[B];if(e.hasOwnProperty(B)&&U!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":S=U;default:i.hasOwnProperty(B)||jt(t,n,B,null,i,U)}}for(var M in i){var B=i[M];if(U=e[M],i.hasOwnProperty(M)&&(B!=null||U!=null))switch(M){case"type":d=B;break;case"name":c=B;break;case"checked":j=B;break;case"defaultChecked":L=B;break;case"value":x=B;break;case"defaultValue":_=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(l(137,n));break;default:B!==U&&jt(t,n,M,B,i,U)}}bs(t,x,_,S,j,L,d,c);return;case"select":B=x=_=M=null;for(d in e)if(S=e[d],e.hasOwnProperty(d)&&S!=null)switch(d){case"value":break;case"multiple":B=S;default:i.hasOwnProperty(d)||jt(t,n,d,null,i,S)}for(c in i)if(d=i[c],S=e[c],i.hasOwnProperty(c)&&(d!=null||S!=null))switch(c){case"value":M=d;break;case"defaultValue":_=d;break;case"multiple":x=d;default:d!==S&&jt(t,n,c,d,i,S)}n=_,e=x,i=B,M!=null?Za(t,!!e,M,!1):!!i!=!!e&&(n!=null?Za(t,!!e,n,!0):Za(t,!!e,e?[]:"",!1));return;case"textarea":B=M=null;for(_ in e)if(c=e[_],e.hasOwnProperty(_)&&c!=null&&!i.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:jt(t,n,_,null,i,c)}for(x in i)if(c=i[x],d=e[x],i.hasOwnProperty(x)&&(c!=null||d!=null))switch(x){case"value":M=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==d&&jt(t,n,x,c,i,d)}fp(t,M,B);return;case"option":for(var K in e)M=e[K],e.hasOwnProperty(K)&&M!=null&&!i.hasOwnProperty(K)&&(K==="selected"?t.selected=!1:jt(t,n,K,null,i,M));for(S in i)M=i[S],B=e[S],i.hasOwnProperty(S)&&M!==B&&(M!=null||B!=null)&&(S==="selected"?t.selected=M&&typeof M!="function"&&typeof M!="symbol":jt(t,n,S,M,i,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in e)M=e[it],e.hasOwnProperty(it)&&M!=null&&!i.hasOwnProperty(it)&&jt(t,n,it,null,i,M);for(j in i)if(M=i[j],B=e[j],i.hasOwnProperty(j)&&M!==B&&(M!=null||B!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(l(137,n));break;default:jt(t,n,j,M,i,B)}return;default:if(_s(n)){for(var Mt in e)M=e[Mt],e.hasOwnProperty(Mt)&&M!==void 0&&!i.hasOwnProperty(Mt)&&od(t,n,Mt,void 0,i,M);for(L in i)M=i[L],B=e[L],!i.hasOwnProperty(L)||M===B||M===void 0&&B===void 0||od(t,n,L,M,i,B);return}}for(var T in e)M=e[T],e.hasOwnProperty(T)&&M!=null&&!i.hasOwnProperty(T)&&jt(t,n,T,null,i,M);for(U in i)M=i[U],B=e[U],!i.hasOwnProperty(U)||M===B||M==null&&B==null||jt(t,n,U,M,i,B)}function vg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function B1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,e=performance.getEntriesByType("resource"),i=0;i<e.length;i++){var c=e[i],d=c.transferSize,x=c.initiatorType,_=c.duration;if(d&&_&&vg(x)){for(x=0,_=c.responseEnd,i+=1;i<e.length;i++){var S=e[i],j=S.startTime;if(j>_)break;var L=S.transferSize,U=S.initiatorType;L&&vg(U)&&(S=S.responseEnd,x+=L*(S<_?1:(_-j)/(S-j)))}if(--i,n+=8*(d+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sd=null,cd=null;function ro(t){return t.nodeType===9?t:t.ownerDocument}function bg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function dd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ud=null;function L1(){var t=window.event;return t&&t.type==="popstate"?t===ud?!1:(ud=t,!0):(ud=null,!1)}var _g=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,H1=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(t){return wg.resolve(null).then(t).catch(q1)}:_g;function q1(t){setTimeout(function(){throw t})}function ra(t){return t==="head"}function Sg(t,n){var e=n,i=0;do{var c=e.nextSibling;if(t.removeChild(e),c&&c.nodeType===8)if(e=c.data,e==="/$"||e==="/&"){if(i===0){t.removeChild(c),Ai(n);return}i--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")i++;else if(e==="html")Tr(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,Tr(e);for(var d=e.firstChild;d;){var x=d.nextSibling,_=d.nodeName;d[Pi]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&d.rel.toLowerCase()==="stylesheet"||e.removeChild(d),d=x}}else e==="body"&&Tr(t.ownerDocument.body);e=c}while(e);Ai(n)}function Cg(t,n){var e=t;t=0;do{var i=e.nextSibling;if(e.nodeType===1?n?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(n?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=i}while(e)}function pd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":pd(e),xs(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function U1(t,n,e,i){for(;t.nodeType===1;){var c=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Pi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=$n(t.nextSibling),t===null)break}return null}function F1(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=$n(t.nextSibling),t===null))return null;return t}function kg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=$n(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function hd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Y1(t,n){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||e.readyState!=="loading")n();else{var i=function(){n(),e.removeEventListener("DOMContentLoaded",i)};e.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function $n(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var gd=null;function Eg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(n===0)return $n(t.nextSibling);n--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||n++}t=t.nextSibling}return null}function zg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(n===0)return t;n--}else e!=="/$"&&e!=="/&"||n++}t=t.previousSibling}return null}function Ag(t,n,e){switch(n=ro(e),t){case"html":if(t=n.documentElement,!t)throw Error(l(452));return t;case"head":if(t=n.head,!t)throw Error(l(453));return t;case"body":if(t=n.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function Tr(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);xs(t)}var Xn=new Map,Tg=new Set;function lo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Re=I.d;I.d={f:V1,r:G1,D:$1,C:X1,L:P1,m:I1,X:Z1,S:Q1,M:K1};function V1(){var t=Re.f(),n=Kl();return t||n}function G1(t){var n=Pa(t);n!==null&&n.tag===5&&n.type==="form"?Xf(n):Re.r(t)}var ki=typeof document>"u"?null:document;function Rg(t,n,e){var i=ki;if(i&&typeof n=="string"&&n){var c=Hn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof e=="string"&&(c+='[crossorigin="'+e+'"]'),Tg.has(c)||(Tg.add(c),t={rel:t,crossOrigin:e,href:n},i.querySelector(c)===null&&(n=i.createElement("link"),sn(n,"link",t),tn(n),i.head.appendChild(n)))}}function $1(t){Re.D(t),Rg("dns-prefetch",t,null)}function X1(t,n){Re.C(t,n),Rg("preconnect",t,n)}function P1(t,n,e){Re.L(t,n,e);var i=ki;if(i&&t&&n){var c='link[rel="preload"][as="'+Hn(n)+'"]';n==="image"&&e&&e.imageSrcSet?(c+='[imagesrcset="'+Hn(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(c+='[imagesizes="'+Hn(e.imageSizes)+'"]')):c+='[href="'+Hn(t)+'"]';var d=c;switch(n){case"style":d=Ei(t);break;case"script":d=zi(t)}Xn.has(d)||(t=b({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),Xn.set(d,t),i.querySelector(c)!==null||n==="style"&&i.querySelector(Rr(d))||n==="script"&&i.querySelector(Nr(d))||(n=i.createElement("link"),sn(n,"link",t),tn(n),i.head.appendChild(n)))}}function I1(t,n){Re.m(t,n);var e=ki;if(e&&t){var i=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Hn(i)+'"][href="'+Hn(t)+'"]',d=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=zi(t)}if(!Xn.has(d)&&(t=b({rel:"modulepreload",href:t},n),Xn.set(d,t),e.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Nr(d)))return}i=e.createElement("link"),sn(i,"link",t),tn(i),e.head.appendChild(i)}}}function Q1(t,n,e){Re.S(t,n,e);var i=ki;if(i&&t){var c=Ia(i).hoistableStyles,d=Ei(t);n=n||"default";var x=c.get(d);if(!x){var _={loading:0,preload:null};if(x=i.querySelector(Rr(d)))_.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},e),(e=Xn.get(d))&&md(t,e);var S=x=i.createElement("link");tn(S),sn(S,"link",t),S._p=new Promise(function(j,L){S.onload=j,S.onerror=L}),S.addEventListener("load",function(){_.loading|=1}),S.addEventListener("error",function(){_.loading|=2}),_.loading|=4,oo(x,n,i)}x={type:"stylesheet",instance:x,count:1,state:_},c.set(d,x)}}}function Z1(t,n){Re.X(t,n);var e=ki;if(e&&t){var i=Ia(e).hoistableScripts,c=zi(t),d=i.get(c);d||(d=e.querySelector(Nr(c)),d||(t=b({src:t,async:!0},n),(n=Xn.get(c))&&xd(t,n),d=e.createElement("script"),tn(d),sn(d,"link",t),e.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(c,d))}}function K1(t,n){Re.M(t,n);var e=ki;if(e&&t){var i=Ia(e).hoistableScripts,c=zi(t),d=i.get(c);d||(d=e.querySelector(Nr(c)),d||(t=b({src:t,async:!0,type:"module"},n),(n=Xn.get(c))&&xd(t,n),d=e.createElement("script"),tn(d),sn(d,"link",t),e.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(c,d))}}function Ng(t,n,e,i){var c=(c=pt.current)?lo(c):null;if(!c)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=Ei(e.href),e=Ia(c).hoistableStyles,i=e.get(n),i||(i={type:"style",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Ei(e.href);var d=Ia(c).hoistableStyles,x=d.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=c.querySelector(Rr(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Xn.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Xn.set(t,e),d||J1(c,t,e,x.state))),n&&i===null)throw Error(l(528,""));return x}if(n&&i!==null)throw Error(l(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=zi(e),e=Ia(c).hoistableScripts,i=e.get(n),i||(i={type:"script",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function Ei(t){return'href="'+Hn(t)+'"'}function Rr(t){return'link[rel="stylesheet"]['+t+"]"}function jg(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function J1(t,n,e,i){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=t.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),sn(n,"link",e),tn(n),t.head.appendChild(n))}function zi(t){return'[src="'+Hn(t)+'"]'}function Nr(t){return"script[async]"+t}function Mg(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var i=t.querySelector('style[data-href~="'+Hn(e.href)+'"]');if(i)return n.instance=i,tn(i),i;var c=b({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),tn(i),sn(i,"style",c),oo(i,e.precedence,t),n.instance=i;case"stylesheet":c=Ei(e.href);var d=t.querySelector(Rr(c));if(d)return n.state.loading|=4,n.instance=d,tn(d),d;i=jg(e),(c=Xn.get(c))&&md(i,c),d=(t.ownerDocument||t).createElement("link"),tn(d);var x=d;return x._p=new Promise(function(_,S){x.onload=_,x.onerror=S}),sn(d,"link",i),n.state.loading|=4,oo(d,e.precedence,t),n.instance=d;case"script":return d=zi(e.src),(c=t.querySelector(Nr(d)))?(n.instance=c,tn(c),c):(i=e,(c=Xn.get(d))&&(i=b({},e),xd(i,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),sn(c,"link",i),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,oo(i,e.precedence,t));return n.instance}function oo(t,n,e){for(var i=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,d=c,x=0;x<i.length;x++){var _=i[x];if(_.dataset.precedence===n)d=_;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var so=null;function Dg(t,n,e){if(so===null){var i=new Map,c=so=new Map;c.set(e,i)}else c=so,i=c.get(e),i||(i=new Map,c.set(e,i));if(i.has(t))return i;for(i.set(t,null),e=e.getElementsByTagName(t),c=0;c<e.length;c++){var d=e[c];if(!(d[Pi]||d[an]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var _=i.get(x);_?_.push(d):i.set(x,[d])}}return i}function Bg(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function W1(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ty(t,n,e,i){if(e.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var c=Ei(i.href),d=n.querySelector(Rr(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=co.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=d,tn(d);return}d=n.ownerDocument||n,i=jg(i),(c=Xn.get(c))&&md(i,c),d=d.createElement("link"),tn(d);var x=d;x._p=new Promise(function(_,S){x.onload=_,x.onerror=S}),sn(d,"link",i),e.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=co.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}var vd=0;function ny(t,n){return t.stylesheets&&t.count===0&&po(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var i=setTimeout(function(){if(t.stylesheets&&po(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&vd===0&&(vd=62500*B1());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&po(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>vd?50:800)+n);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(c)}}:null}function co(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)po(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uo=null;function po(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uo=new Map,n.forEach(ey,t),uo=null,co.call(t))}function ey(t,n){if(!(n.state.loading&4)){var e=uo.get(t);if(e)var i=e.get(null);else{e=new Map,uo.set(t,e);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var x=c[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(e.set(x.dataset.precedence,x),i=x)}i&&e.set(null,i)}c=n.instance,x=c.getAttribute("data-precedence"),d=e.get(x)||i,d===i&&e.set(null,c),e.set(x,c),this.count++,i=co.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var jr={$$typeof:F,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function ay(t,n,e,i,c,d,x,_,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fs(0),this.hiddenUpdates=fs(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Og(t,n,e,i,c,d,x,_,S,j,L,U){return t=new ay(t,n,e,x,S,j,L,U,_),n=1,d===!0&&(n|=24),d=zn(3,null,null,n),t.current=d,d.stateNode=t,n=Ks(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:i,isDehydrated:e,cache:n},nc(d),t}function Hg(t){return t?(t=ii,t):ii}function qg(t,n,e,i,c,d){c=Hg(c),i.context===null?i.context=c:i.pendingContext=c,i=Ie(n),i.payload={element:e},d=d===void 0?null:d,d!==null&&(i.callback=d),e=Qe(t,i,n),e!==null&&(_n(e,t,n),dr(e,t,n))}function Ug(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function bd(t,n){Ug(t,n),(t=t.alternate)&&Ug(t,n)}function Fg(t){if(t.tag===13||t.tag===31){var n=Ca(t,67108864);n!==null&&_n(n,t,67108864),bd(t,67108864)}}function Yg(t){if(t.tag===13||t.tag===31){var n=jn();n=hs(n);var e=Ca(t,n);e!==null&&_n(e,t,n),bd(t,n)}}var fo=!0;function iy(t,n,e,i){var c=D.T;D.T=null;var d=I.p;try{I.p=2,yd(t,n,e,i)}finally{I.p=d,D.T=c}}function ry(t,n,e,i){var c=D.T;D.T=null;var d=I.p;try{I.p=8,yd(t,n,e,i)}finally{I.p=d,D.T=c}}function yd(t,n,e,i){if(fo){var c=_d(i);if(c===null)ld(t,n,i,ho,e),Gg(t,i);else if(oy(c,t,n,e,i))i.stopPropagation();else if(Gg(t,i),n&4&&-1<ly.indexOf(t)){for(;c!==null;){var d=Pa(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=ba(d.pendingLanes);if(x!==0){var _=d;for(_.pendingLanes|=2,_.entangledLanes|=2;x;){var S=1<<31-kn(x);_.entanglements[1]|=S,x&=~S}ce(d),(kt&6)===0&&(Ql=Sn()+500,Er(0))}}break;case 31:case 13:_=Ca(d,2),_!==null&&_n(_,d,2),Kl(),bd(d,2)}if(d=_d(i),d===null&&ld(t,n,i,ho,e),d===c)break;c=d}c!==null&&i.stopPropagation()}else ld(t,n,i,null,e)}}function _d(t){return t=Ss(t),wd(t)}var ho=null;function wd(t){if(ho=null,t=Xa(t),t!==null){var n=u(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=f(n),t!==null)return t;t=null}else if(e===31){if(t=p(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ho=t,null}function Vg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($b()){case Zu:return 2;case Ku:return 8;case el:case Xb:return 32;case Ju:return 268435456;default:return 32}default:return 32}}var Sd=!1,la=null,oa=null,sa=null,Mr=new Map,Dr=new Map,ca=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gg(t,n){switch(t){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Mr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(n.pointerId)}}function Br(t,n,e,i,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:e,eventSystemFlags:i,nativeEvent:d,targetContainers:[c]},n!==null&&(n=Pa(n),n!==null&&Fg(n)),t):(t.eventSystemFlags|=i,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function oy(t,n,e,i,c){switch(n){case"focusin":return la=Br(la,t,n,e,i,c),!0;case"dragenter":return oa=Br(oa,t,n,e,i,c),!0;case"mouseover":return sa=Br(sa,t,n,e,i,c),!0;case"pointerover":var d=c.pointerId;return Mr.set(d,Br(Mr.get(d)||null,t,n,e,i,c)),!0;case"gotpointercapture":return d=c.pointerId,Dr.set(d,Br(Dr.get(d)||null,t,n,e,i,c)),!0}return!1}function $g(t){var n=Xa(t.target);if(n!==null){var e=u(n);if(e!==null){if(n=e.tag,n===13){if(n=f(e),n!==null){t.blockedOn=n,ip(t.priority,function(){Yg(e)});return}}else if(n===31){if(n=p(e),n!==null){t.blockedOn=n,ip(t.priority,function(){Yg(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function go(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=_d(t.nativeEvent);if(e===null){e=t.nativeEvent;var i=new e.constructor(e.type,e);ws=i,e.target.dispatchEvent(i),ws=null}else return n=Pa(e),n!==null&&Fg(n),t.blockedOn=e,!1;n.shift()}return!0}function Xg(t,n,e){go(t)&&e.delete(n)}function sy(){Sd=!1,la!==null&&go(la)&&(la=null),oa!==null&&go(oa)&&(oa=null),sa!==null&&go(sa)&&(sa=null),Mr.forEach(Xg),Dr.forEach(Xg)}function mo(t,n){t.blockedOn===n&&(t.blockedOn=null,Sd||(Sd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,sy)))}var xo=null;function Pg(t){xo!==t&&(xo=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){xo===t&&(xo=null);for(var n=0;n<t.length;n+=3){var e=t[n],i=t[n+1],c=t[n+2];if(typeof i!="function"){if(wd(i||e)===null)continue;break}var d=Pa(e);d!==null&&(t.splice(n,3),n-=3,_c(d,{pending:!0,data:c,method:e.method,action:i},i,c))}}))}function Ai(t){function n(S){return mo(S,t)}la!==null&&mo(la,t),oa!==null&&mo(oa,t),sa!==null&&mo(sa,t),Mr.forEach(n),Dr.forEach(n);for(var e=0;e<ca.length;e++){var i=ca[e];i.blockedOn===t&&(i.blockedOn=null)}for(;0<ca.length&&(e=ca[0],e.blockedOn===null);)$g(e),e.blockedOn===null&&ca.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(i=0;i<e.length;i+=3){var c=e[i],d=e[i+1],x=c[gn]||null;if(typeof d=="function")x||Pg(e);else if(x){var _=null;if(d&&d.hasAttribute("formAction")){if(c=d,x=d[gn]||null)_=x.formAction;else if(wd(c)!==null)continue}else _=x.action;typeof _=="function"?e[i+1]=_:(e.splice(i,3),i-=3),Pg(e)}}}function Ig(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),i||setTimeout(e,20)}function e(){if(!i&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(e,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Cd(t){this._internalRoot=t}vo.prototype.render=Cd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(l(409));var e=n.current,i=jn();qg(e,i,t,n,null,null)},vo.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;qg(t.current,2,null,t,null,null),Kl(),n[$a]=null}};function vo(t){this._internalRoot=t}vo.prototype.unstable_scheduleHydration=function(t){if(t){var n=ap();t={blockedOn:null,target:t,priority:n};for(var e=0;e<ca.length&&n!==0&&n<ca[e].priority;e++);ca.splice(e,0,t),e===0&&$g(t)}};var Qg=r.version;if(Qg!=="19.2.3")throw Error(l(527,Qg,"19.2.3"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=m(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var cy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{Gi=bo.inject(cy),Cn=bo}catch{}}return Or.createRoot=function(t,n){if(!s(t))throw Error(l(299));var e=!1,i="",c=eh,d=ah,x=ih;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Og(t,1,!1,null,null,e,i,null,c,d,x,Ig),t[$a]=n.current,rd(t),new Cd(n)},Or.hydrateRoot=function(t,n,e){if(!s(t))throw Error(l(299));var i=!1,c="",d=eh,x=ah,_=ih,S=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(c=e.identifierPrefix),e.onUncaughtError!==void 0&&(d=e.onUncaughtError),e.onCaughtError!==void 0&&(x=e.onCaughtError),e.onRecoverableError!==void 0&&(_=e.onRecoverableError),e.formState!==void 0&&(S=e.formState)),n=Og(t,1,!0,n,e??null,i,c,S,d,x,_,Ig),n.context=Hg(null),e=n.current,i=jn(),i=hs(i),c=Ie(i),c.callback=null,Qe(e,c,i),e=i,n.current.lanes=e,Xi(n,e),ce(n),t[$a]=n.current,rd(t),new vo(n)},Or.version="19.2.3",Or}var rm;function by(){if(rm)return zd.exports;rm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),zd.exports=vy(),zd.exports}var yy=by();var cu=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,rx=/^[\\/]{2}/;function _y(a,r){return r+a.replace(/\\/g,"/")}var lm="popstate";function om(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function wy(a={}){function r(s,u){let{pathname:f="/",search:p="",hash:g=""}=Va(s.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Kd("",{pathname:f,search:p,hash:g},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(s,u){let f=s.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let g=s.location.href,m=g.indexOf("#");p=m===-1?g:g.slice(0,m)}return p+"#"+(typeof u=="string"?u:Ua(u))}function l(s,u){Bn(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Cy(r,o,l,a)}function Ut(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Bn(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Sy(){return Math.random().toString(36).substring(2,10)}function sm(a,r){return{usr:a.state,key:a.key,idx:r,masked:a.mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function Kd(a,r,o=null,l,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Va(r):r,state:o,key:r&&r.key||l||Sy(),mask:s}}function Ua({pathname:a="/",search:r="",hash:o=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function Va(a){let r={};if(a){let o=a.indexOf("#");o>=0&&(r.hash=a.substring(o),a=a.substring(0,o));let l=a.indexOf("?");l>=0&&(r.search=a.substring(l),a=a.substring(0,l)),a&&(r.pathname=a)}return r}function Cy(a,r,o,l={}){let{window:s=document.defaultView,v5Compat:u=!1}=l,f=s.history,p="POP",g=null,m=y();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function y(){return(f.state||{idx:null}).idx}function b(){p="POP";let k=y(),O=k==null?null:k-m;m=k,g&&g({action:p,location:C.location,delta:O})}function w(k,O){p="PUSH";let Y=om(k)?k:Kd(C.location,k,O);o&&o(Y,k),m=y()+1;let F=sm(Y,m),P=C.createHref(Y.mask||Y);try{f.pushState(F,"",P)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;s.location.assign(P)}u&&g&&g({action:p,location:C.location,delta:1})}function A(k,O){p="REPLACE";let Y=om(k)?k:Kd(C.location,k,O);o&&o(Y,k),m=y();let F=sm(Y,m),P=C.createHref(Y.mask||Y);f.replaceState(F,"",P),u&&g&&g({action:p,location:C.location,delta:0})}function R(k){return ky(s,k)}let C={get action(){return p},get location(){return a(s,f)},listen(k){if(g)throw new Error("A history only accepts one active listener");return s.addEventListener(lm,b),g=k,()=>{s.removeEventListener(lm,b),g=null}},createHref(k){return r(s,k)},createURL:R,encodeLocation(k){let O=R(k);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:w,replace:A,go(k){return f.go(k)}};return C}function ky(a,r,o=!1){let l="http://localhost";a&&(l=a.location.origin!=="null"?a.location.origin:a.location.href),Ut(l,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Ua(r);return s=s.replace(/ $/,"%20"),!o&&rx.test(s)&&(s=l+s),new URL(s,l)}function lx(a,r,o="/"){return Ey(a,r,o,!1)}function Ey(a,r,o,l,s){let u=typeof r=="string"?Va(r):r,f=De(u.pathname||"/",o);if(f==null)return null;let p=zy(a),g=null,m=Hy(f);for(let y=0;g==null&&y<p.length;++y)g=Oy(p[y],m,l);return g}function zy(a){let r=ox(a);return Ay(r),r}function ox(a,r=[],o=[],l="",s=!1){let u=(f,p,g=s,m)=>{let y={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(l)&&g)return;Ut(y.relativePath.startsWith(l),`Absolute route path "${y.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(l.length)}let b=ee([l,y.relativePath]),w=o.concat(y);f.children&&f.children.length>0&&(Ut(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),ox(f.children,r,w,b,g)),!(f.path==null&&!f.index)&&r.push({path:b,score:By(b,f.index),routesMeta:w.map((A,R)=>{let[C,k]=dx(A.relativePath,A.caseSensitive,R===w.length-1);return{...A,matcher:C,compiledParams:k}})})};return a.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))u(f,p);else for(let g of sx(f.path))u(f,p,!0,g)}),r}function sx(a){let r=a.split("/");if(r.length===0)return[];let[o,...l]=r,s=o.endsWith("?"),u=o.replace(/\?$/,"");if(l.length===0)return s?[u,""]:[u];let f=sx(l.join("/")),p=[];return p.push(...f.map(g=>g===""?u:[u,g].join("/"))),s&&p.push(...f),p.map(g=>a.startsWith("/")&&g===""?"/":g)}function Ay(a){a.sort((r,o)=>r.score!==o.score?o.score-r.score:Ly(r.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var Ty=/^:[\w-]+$/,Ry=3,Ny=2,jy=1,My=10,Dy=-2,cm=a=>a==="*";function By(a,r){let o=a.split("/"),l=o.length;return o.some(cm)&&(l+=Dy),r&&(l+=Ny),o.filter(s=>!cm(s)).reduce((s,u)=>s+(Ty.test(u)?Ry:u===""?jy:My),l)}function Ly(a,r){return a.length===r.length&&a.slice(0,-1).every((l,s)=>l===r[s])?a[a.length-1]-r[r.length-1]:0}function Oy(a,r,o=!1){let{routesMeta:l}=a,s={},u="/",f=[];for(let p=0;p<l.length;++p){let g=l[p],m=p===l.length-1,y=u==="/"?r:r.slice(u.length)||"/",b={path:g.relativePath,caseSensitive:g.caseSensitive,end:m},w=g.matcher&&g.compiledParams?cx(b,y,g.matcher,g.compiledParams):Do(b,y),A=g.route;if(!w&&m&&o&&!l[l.length-1].route.index&&(w=Do({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},y)),!w)return null;Object.assign(s,w.params),f.push({params:s,pathname:ee([u,w.pathname]),pathnameBase:Fy(ee([u,w.pathnameBase])),route:A}),w.pathnameBase!=="/"&&(u=ee([u,w.pathnameBase]))}return f}function Do(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,l]=dx(a.path,a.caseSensitive,a.end);return cx(a,r,o,l)}function cx(a,r,o,l){let s=r.match(o);if(!s)return null;let u=s[0],f=Li(u,1),p=s.slice(1);return{params:l.reduce((m,{paramName:y,isOptional:b},w)=>{if(y==="*"){let R=p[w]||"";f=Li(u.slice(0,u.length-R.length),1)}const A=p[w];return b&&!A?m[y]=void 0:m[y]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:a}}function dx(a,r=!1,o=!0){Bn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let l=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,g,m,y)=>{if(l.push({paramName:p,isOptional:g!=null}),g){let b=y.charAt(m+f.length);return b&&b!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(l.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),l]}function Hy(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Bn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function De(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,l=a.charAt(o);return l&&l!=="/"?null:a.slice(o)||"/"}function qy(a,r="/"){let{pathname:o,search:l="",hash:s=""}=typeof a=="string"?Va(a):a,u;return o?(o=ux(o),o.startsWith("/")||o.startsWith("\\")?u=dm(o.substring(1),"/"):u=dm(o,r)):u=r,{pathname:u,search:Yy(l),hash:Vy(s)}}function dm(a,r){let o=Li(r).split("/");return a.split("/").forEach(s=>{s===".."?o.length>1&&o.pop():s!=="."&&o.push(s)}),o.length>1?o.join("/"):"/"}function Nd(a,r,o,l){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uy(a){return a.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function du(a){let r=Uy(a);return r.map((o,l)=>l===r.length-1?o.pathname:o.pathnameBase)}function Po(a,r,o,l=!1){let s;typeof a=="string"?s=Va(a):(s={...a},Ut(!s.pathname||!s.pathname.includes("?"),Nd("?","pathname","search",s)),Ut(!s.pathname||!s.pathname.includes("#"),Nd("#","pathname","hash",s)),Ut(!s.search||!s.search.includes("#"),Nd("#","search","hash",s)));let u=a===""||s.pathname==="",f=u?"/":s.pathname,p;if(f==null)p=o;else{let b=r.length-1;if(!l&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),b-=1;s.pathname=w.join("/")}p=b>=0?r[b]:"/"}let g=qy(s,p),m=f&&f!=="/"&&f.endsWith("/"),y=(u||f===".")&&o.endsWith("/");return!g.pathname.endsWith("/")&&(m||y)&&(g.pathname+="/"),g}var ux=a=>a.replace(/[\\/]{2,}/g,"/"),ee=a=>ux(a.join("/"));function Li(a,r=0){let o=a.length;for(;o>r&&a.charCodeAt(o-1)===47;)o--;return o===a.length?a:a.slice(0,o)}var Fy=a=>Li(a).replace(/^\/*/,"/"),Yy=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Vy=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Gy=class{constructor(a,r,o,l=!1){this.status=a,this.statusText=r||"",this.internal=l,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function $y(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Xy(a){let r=a.map(o=>o.route.path).filter(Boolean);return ee(r)||"/"}var px=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function fx(a,r){let o=a;if(typeof o!="string"||!cu.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let l=o,s=!1;if(px)try{let u=new URL(window.location.href),f=rx.test(o)?new URL(_y(o,u.protocol)):new URL(o),p=De(f.pathname,r);f.origin===u.origin&&p!=null?o=p+f.search+f.hash:s=!0}catch{Bn(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:s,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var um=new URL("http://localhost");function uu(a){if(a.createURL)return a.createURL("/");try{return new URL(a.createHref("/"),um)}catch{return um}}function jd(a,r){return a.origin===r.origin&&(a.origin!=="null"||a.protocol===r.protocol&&a.host===r.host)}function Py(a,r){if(a.startsWith("//"))return!0;let o=r.protocol.toLowerCase();return a.toLowerCase().startsWith(o)?r.host===""||a.slice(o.length).startsWith("//"):!1}function pu(a,r,o,l){let s=null;try{s=a==null?null:new URL(a,o)}catch{}let u=new URL(r,o),f=s!=null&&!jd(s,o),p=!jd(u,o);if(l==="reject"){if(f||p)throw new Error("External navigation is not allowed")}else if(p&&(s==null||!Py(a,s)||!jd(s,u)))throw new Error("External navigation is not allowed")}var hx=["POST","PUT","PATCH","DELETE"];new Set(hx);var Iy=["GET",...hx];new Set(Iy);var Qy=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Zy(a){try{return Qy.includes(new URL(a).protocol)}catch{return!1}}var Hi=v.createContext(null);Hi.displayName="DataRouter";var Io=v.createContext(null);Io.displayName="DataRouterState";var gx=v.createContext(!1);function Ky(){return v.useContext(gx)}var mx=v.createContext({isTransitioning:!1});mx.displayName="ViewTransition";var Jy=v.createContext(new Map);Jy.displayName="Fetchers";var Wy=v.createContext(null);Wy.displayName="Await";var Ln=v.createContext(null);Ln.displayName="Navigation";var $r=v.createContext(null);$r.displayName="Location";var ae=v.createContext({outlet:null,matches:[],isDataRoute:!1});ae.displayName="Route";var fu=v.createContext(null);fu.displayName="RouteError";var xx="REACT_ROUTER_ERROR",t2="REDIRECT",n2="ROUTE_ERROR_RESPONSE";function e2(a){if(a.startsWith(`${xx}:${t2}:{`))try{let r=JSON.parse(a.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function a2(a){if(a.startsWith(`${xx}:${n2}:{`))try{let r=JSON.parse(a.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Gy(r.status,r.statusText,r.data)}catch{}}function i2(a,{relative:r}={}){Ut(qi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=v.useContext(Ln),{hash:s,pathname:u,search:f}=Pr(a,{relative:r}),p=u;return o!=="/"&&(p=u==="/"?o:ee([o,u])),l.createHref({pathname:p,search:f,hash:s})}function qi(){return v.useContext($r)!=null}function Pn(){return Ut(qi(),"useLocation() may be used only in the context of a <Router> component."),v.useContext($r).location}var vx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bx(a){v.useContext(Ln).static||v.useLayoutEffect(a)}function Xr(){let{isDataRoute:a}=v.useContext(ae);return a?v2():r2()}function r2(){Ut(qi(),"useNavigate() may be used only in the context of a <Router> component.");let a=v.useContext(Hi),{basename:r,navigator:o}=v.useContext(Ln),{matches:l}=v.useContext(ae),{pathname:s}=Pn(),u=JSON.stringify(du(l)),f=v.useRef(!1);return bx(()=>{f.current=!0}),v.useCallback((g,m={})=>{if(Bn(f.current,vx),!f.current)return;if(typeof g=="number"){o.go(g);return}let y=Po(g,JSON.parse(u),s,m.relative==="path");a==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:ee([r,y.pathname])),pu(typeof g=="string"?g:Ua(g),o.createHref(y),uu(o),"reject"),(m.replace?o.replace:o.push)(y,m.state,m)},[r,o,u,s,a])}v.createContext(null);function l2(){let{matches:a}=v.useContext(ae);return a[a.length-1]?.params??{}}function Pr(a,{relative:r}={}){let{matches:o}=v.useContext(ae),{pathname:l}=Pn(),s=JSON.stringify(du(o));return v.useMemo(()=>Po(a,JSON.parse(s),l,r==="path"),[a,s,l,r])}function o2(a,r){return yx(a,r)}function yx(a,r,o){Ut(qi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=v.useContext(Ln),{matches:s}=v.useContext(ae),u=s[s.length-1],f=u?u.params:{},p=u?u.pathname:"/",g=u?u.pathnameBase:"/",m=u&&u.route;{let k=m&&m.path||"";wx(p,!m||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let y=Pn(),b;if(r){let k=typeof r=="string"?Va(r):r;Ut(g==="/"||k.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${k.pathname}" was given in the \`location\` prop.`),b=k}else b=y;let w=b.pathname||"/",A=w;if(g!=="/"){let k=g.replace(/^\//,"").split("/");A="/"+w.replace(/^\//,"").split("/").slice(k.length).join("/")}let R=o&&o.state.matches.length?o.state.matches.map(k=>Object.assign(k,{route:o.manifest[k.route.id]||k.route})):lx(a,{pathname:A});Bn(m||R!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Bn(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=p2(R&&R.map(k=>Object.assign({},k,{params:Object.assign({},f,k.params),pathname:ee([g,l.encodeLocation?l.encodeLocation(k.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?g:ee([g,l.encodeLocation?l.encodeLocation(k.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),s,o);return r&&C?v.createElement($r.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...b},navigationType:"POP"}},C):C}function s2(){let a=x2(),r=$y(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,l="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:l},u={padding:"2px 4px",backgroundColor:l},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:u},"ErrorBoundary")," or"," ",v.createElement("code",{style:u},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},r),o?v.createElement("pre",{style:s},o):null,f)}var c2=v.createElement(s2,null),_x=class extends v.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){this.props.onError?this.props.onError(a,r):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const o=a2(a.digest);o&&(a=o)}let r=a!==void 0?v.createElement(ae.Provider,{value:this.props.routeContext},v.createElement(fu.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?v.createElement(d2,{error:a},r):r}};_x.contextType=gx;var Md=new WeakMap;function d2({children:a,error:r}){let{basename:o,navigator:l}=v.useContext(Ln);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let s=e2(r.digest);if(s){let u=Md.get(r);if(u)throw u;let f=fx(s.location,o),p=f.absoluteURL||f.to;if(pu(s.location,p,uu(l),"allow-explicit"),Zy(p))throw new Error("Invalid redirect location");if(px&&!Md.get(r))if(f.isExternal||s.reloadDocument)window.location.href=p;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:s.replace}));throw Md.set(r,g),g}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p}`})}}return a}function u2({routeContext:a,match:r,children:o}){let l=v.useContext(Hi);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(ae.Provider,{value:a},o)}function p2(a,r=[],o){let l=o?.state;if(a==null){if(!l)return null;if(l.errors)a=l.matches;else if(r.length===0&&!l.initialized&&l.matches.length>0)a=l.matches;else return null}let s=a,u=l?.errors;if(u!=null){let y=s.findIndex(b=>b.route.id&&u?.[b.route.id]!==void 0);Ut(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,y+1))}let f=!1,p=-1;if(o&&l){f=l.renderFallback;for(let y=0;y<s.length;y++){let b=s[y];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(p=y),b.route.id){let{loaderData:w,errors:A}=l,R=b.route.loader&&!w.hasOwnProperty(b.route.id)&&(!A||A[b.route.id]===void 0);if(b.route.lazy||R){o.isStatic&&(f=!0),p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}}let g=o?.onError,m=l&&g?(y,b)=>{g(y,{location:l.location,params:l.matches?.[0]?.params??{},pattern:Xy(l.matches),errorInfo:b})}:void 0;return s.reduceRight((y,b,w)=>{let A,R=!1,C=null,k=null;l&&(A=u&&b.route.id?u[b.route.id]:void 0,C=b.route.errorElement||c2,f&&(p<0&&w===0?(wx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,k=null):p===w&&(R=!0,k=b.route.hydrateFallbackElement||null)));let O=r.concat(s.slice(0,w+1)),Y=()=>{let F;return A?F=C:R?F=k:b.route.Component?F=v.createElement(b.route.Component,null):b.route.element?F=b.route.element:F=y,v.createElement(u2,{match:b,routeContext:{outlet:y,matches:O,isDataRoute:l!=null},children:F})};return l&&(b.route.ErrorBoundary||b.route.errorElement||w===0)?v.createElement(_x,{location:l.location,revalidation:l.revalidation,component:C,error:A,children:Y(),routeContext:{outlet:null,matches:O,isDataRoute:!0},onError:m}):Y()},null)}function hu(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function f2(a){let r=v.useContext(Hi);return Ut(r,hu(a)),r}function h2(a){let r=v.useContext(Io);return Ut(r,hu(a)),r}function g2(a){let r=v.useContext(ae);return Ut(r,hu(a)),r}function gu(a){let r=g2(a),o=r.matches[r.matches.length-1];return Ut(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function m2(){return gu("useRouteId")}function x2(){let a=v.useContext(fu),r=h2("useRouteError"),o=gu("useRouteError");return a!==void 0?a:r.errors?.[o]}function v2(){let{router:a}=f2("useNavigate"),r=gu("useNavigate"),o=v.useRef(!1);return bx(()=>{o.current=!0}),v.useCallback(async(s,u={})=>{Bn(o.current,vx),o.current&&(typeof s=="number"?await a.navigate(s):await a.navigate(s,{fromRouteId:r,...u}))},[a,r])}var pm={};function wx(a,r,o){!r&&!pm[a]&&(pm[a]=!0,Bn(!1,o))}v.memo(b2);function b2({routes:a,manifest:r,future:o,state:l,isStatic:s,onError:u}){return yx(a,void 0,{manifest:r,state:l,isStatic:s,onError:u})}function fm({to:a,replace:r,state:o,relative:l}){Ut(qi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s,navigator:u}=v.useContext(Ln);Bn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=v.useContext(ae),{pathname:p}=Pn(),g=Xr(),m=Po(a,du(f),p,l==="path");pu(typeof a=="string"?a:Ua(a),u.createHref(m),uu(u),"reject");let y=JSON.stringify(m);return v.useEffect(()=>{g(JSON.parse(y),{replace:r,state:o,relative:l})},[g,y,l,r,o]),null}function Fr(a){Ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function y2({basename:a="/",children:r=null,location:o,navigationType:l="POP",navigator:s,static:u=!1,useTransitions:f}){Ut(!qi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),g=v.useMemo(()=>({basename:p,navigator:s,static:u,useTransitions:f,future:{}}),[p,s,u,f]);typeof o=="string"&&(o=Va(o));let{pathname:m="/",search:y="",hash:b="",state:w=null,key:A="default",mask:R}=o,C=v.useMemo(()=>{let k=De(m,p);return k==null?null:{location:{pathname:k,search:y,hash:b,state:w,key:A,mask:R},navigationType:l}},[p,m,y,b,w,A,l,R]);return Bn(C!=null,`<Router basename="${p}"> is not able to match the URL "${m}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:v.createElement(Ln.Provider,{value:g},v.createElement($r.Provider,{children:r,value:C}))}function _2({children:a,location:r}){return o2(Jd(a),r)}function Jd(a,r=[]){let o=[];return v.Children.forEach(a,(l,s)=>{if(!v.isValidElement(l))return;let u=[...r,s];if(l.type===v.Fragment){o.push.apply(o,Jd(l.props.children,u));return}Ut(l.type===Fr,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ut(!l.props.index||!l.props.children,"An index route cannot have child routes.");let f={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=Jd(l.props.children,u)),o.push(f)}),o}var Ro="get",No="application/x-www-form-urlencoded";function Qo(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function w2(a){return Qo(a)&&a.tagName.toLowerCase()==="button"}function S2(a){return Qo(a)&&a.tagName.toLowerCase()==="form"}function C2(a){return Qo(a)&&a.tagName.toLowerCase()==="input"}function k2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function E2(a,r){return a.button===0&&(!r||r==="_self")&&!k2(a)}function Wd(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((r,o)=>{let l=a[o];return r.concat(Array.isArray(l)?l.map(s=>[o,s]):[[o,l]])},[]))}function z2(a,r){let o=Wd(a);return r&&r.forEach((l,s)=>{o.has(s)||r.getAll(s).forEach(u=>{o.append(s,u)})}),o}var yo=null;function A2(){if(yo===null)try{new FormData(document.createElement("form"),0),yo=!1}catch{yo=!0}return yo}var T2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dd(a){return a!=null&&!T2.has(a)?(Bn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${No}"`),null):a}function R2(a,r){let o,l,s,u,f;if(S2(a)){let p=a.getAttribute("action");l=p?De(p,r):null,o=a.getAttribute("method")||Ro,s=Dd(a.getAttribute("enctype"))||No,u=new FormData(a)}else if(w2(a)||C2(a)&&(a.type==="submit"||a.type==="image")){let p=a.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||p.getAttribute("action");if(l=g?De(g,r):null,o=a.getAttribute("formmethod")||p.getAttribute("method")||Ro,s=Dd(a.getAttribute("formenctype"))||Dd(p.getAttribute("enctype"))||No,u=new FormData(p,a),!A2()){let{name:m,type:y,value:b}=a;if(y==="image"){let w=m?`${m}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else m&&u.append(m,b)}}else{if(Qo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ro,l=null,s=No,f=a}return u&&s==="text/plain"&&(f=u,u=void 0),{action:l,method:o.toLowerCase(),encType:s,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mu(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Sx(a,r,o,l){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${l}`:s.pathname=`${s.pathname}.${l}`:s.pathname==="/"?s.pathname=`_root.${l}`:r&&De(s.pathname,r)==="/"?s.pathname=`${Li(r)}/_root.${l}`:s.pathname=`${Li(s.pathname)}.${l}`,s}async function N2(a,r){if(a.id in r)return r[a.id];try{let o=await import(a.module);return r[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function j2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function M2(a,r,o){let l=await Promise.all(a.map(async s=>{let u=r.routes[s.route.id];if(u){let f=await N2(u,o);return f.links?f.links():[]}return[]}));return O2(l.flat(1).filter(j2).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function hm(a,r,o,l,s,u){let f=(g,m)=>o[m]?g.route.id!==o[m].route.id:!0,p=(g,m)=>o[m].pathname!==g.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==g.params["*"];return u==="assets"?r.filter((g,m)=>f(g,m)||p(g,m)):u==="data"?r.filter((g,m)=>{let y=l.routes[g.route.id];if(!y||!y.hasLoader)return!1;if(f(g,m)||p(g,m))return!0;if(g.route.shouldRevalidate){let b=g.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function D2(a,r,{includeHydrateFallback:o}={}){return B2(a.map(l=>{let s=r.routes[l.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),o&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function B2(a){return[...new Set(a)]}function L2(a){let r={},o=Object.keys(a).sort();for(let l of o)r[l]=a[l];return r}function O2(a,r){let o=new Set;return new Set(r),a.reduce((l,s)=>{let u=JSON.stringify(L2(s));return o.has(u)||(o.add(u),l.push({key:u,link:s})),l},[])}function xu(){let a=v.useContext(Hi);return mu(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function H2(){let a=v.useContext(Io);return mu(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var vu=v.createContext(void 0);vu.displayName="FrameworkContext";function Zo(){let a=v.useContext(vu);return mu(a,"You must render this element inside a <HydratedRouter> element"),a}function q2(a,r){let o=v.useContext(vu),[l,s]=v.useState(!1),[u,f]=v.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:m,onMouseLeave:y,onTouchStart:b}=r,w=v.useRef(null);v.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let C=O=>{O.forEach(Y=>{f(Y.isIntersecting)})},k=new IntersectionObserver(C,{threshold:.5});return w.current&&k.observe(w.current),()=>{k.disconnect()}}},[a]),v.useEffect(()=>{if(l){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[l]);let A=()=>{s(!0)},R=()=>{s(!1),f(!1)};return o?a!=="intent"?[u,w,{}]:[u,w,{onFocus:Hr(p,A),onBlur:Hr(g,R),onMouseEnter:Hr(m,A),onMouseLeave:Hr(y,R),onTouchStart:Hr(b,A)}]:[!1,w,{}]}function Hr(a,r){return o=>{a&&a(o),o.defaultPrevented||r(o)}}function U2({page:a,...r}){let o=Ky(),{nonce:l}=Zo(),{router:s}=xu(),u=v.useMemo(()=>lx(s.routes,a,s.basename),[s.routes,a,s.basename]);return u?(r.nonce==null&&l&&(r={...r,nonce:l}),o?v.createElement(Y2,{page:a,matches:u,...r}):v.createElement(V2,{page:a,matches:u,...r})):null}function F2(a){let{manifest:r,routeModules:o}=Zo(),[l,s]=v.useState([]);return v.useEffect(()=>{let u=!1;return M2(a,r,o).then(f=>{u||s(f)}),()=>{u=!0}},[a,r,o]),l}function Y2({page:a,matches:r,...o}){let l=Pn(),{future:s}=Zo(),{basename:u}=xu(),f=v.useMemo(()=>{if(a===l.pathname+l.search+l.hash)return[];let p=Sx(a,u,s.v8_trailingSlashAwareDataRequests,"rsc"),g=!1,m=[];for(let y of r)typeof y.route.shouldRevalidate=="function"?g=!0:m.push(y.route.id);return g&&m.length>0&&p.searchParams.set("_routes",m.join(",")),[p.pathname+p.search]},[u,s.v8_trailingSlashAwareDataRequests,a,l,r]);return v.createElement(v.Fragment,null,f.map(p=>v.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...o})))}function V2({page:a,matches:r,...o}){let l=Pn(),{future:s,manifest:u,routeModules:f}=Zo(),{basename:p}=xu(),{loaderData:g,matches:m}=H2(),y=v.useMemo(()=>hm(a,r,m,u,l,"data"),[a,r,m,u,l]),b=v.useMemo(()=>hm(a,r,m,u,l,"assets"),[a,r,m,u,l]),w=v.useMemo(()=>{if(a===l.pathname+l.search+l.hash)return[];let C=new Set,k=!1;if(r.forEach(Y=>{let F=u.routes[Y.route.id];!F||!F.hasLoader||(!y.some(P=>P.route.id===Y.route.id)&&Y.route.id in g&&f[Y.route.id]?.shouldRevalidate||F.hasClientLoader?k=!0:C.add(Y.route.id))}),C.size===0)return[];let O=Sx(a,p,s.v8_trailingSlashAwareDataRequests,"data");return k&&C.size>0&&O.searchParams.set("_routes",r.filter(Y=>C.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[O.pathname+O.search]},[p,s.v8_trailingSlashAwareDataRequests,g,l,u,y,r,a,f]),A=v.useMemo(()=>D2(b,u),[b,u]),R=F2(b);return v.createElement(v.Fragment,null,w.map(C=>v.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...o})),A.map(C=>v.createElement("link",{key:C,rel:"modulepreload",href:C,...o})),R.map(({key:C,link:k})=>v.createElement("link",{key:C,nonce:o.nonce,...k,crossOrigin:k.crossOrigin??o.crossOrigin})))}function G2(...a){return r=>{a.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var $2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$2&&(window.__reactRouterVersion="7.18.3")}catch{}function X2({basename:a,children:r,useTransitions:o,window:l}){let s=v.useRef();s.current==null&&(s.current=wy({window:l,v5Compat:!0}));let u=s.current,[f,p]=v.useState({action:u.action,location:u.location}),g=v.useCallback(m=>{o===!1?p(m):v.startTransition(()=>p(m))},[o]);return v.useLayoutEffect(()=>u.listen(g),[u,g]),v.createElement(y2,{basename:a,children:r,location:f.location,navigationType:f.action,navigator:u,useTransitions:o})}var Ir=v.forwardRef(function({onClick:r,discover:o="render",prefetch:l="none",relative:s,reloadDocument:u,replace:f,mask:p,state:g,target:m,to:y,preventScrollReset:b,viewTransition:w,defaultShouldRevalidate:A,...R},C){let{basename:k,navigator:O,useTransitions:Y}=v.useContext(Ln),F=typeof y=="string"&&cu.test(y),P=fx(y,k);y=P.to;let Z=i2(y,{relative:s}),tt=Pn(),X=null;if(p){let zt=Po(p,[],tt.mask?tt.mask.pathname:"/",!0);k!=="/"&&(zt.pathname=zt.pathname==="/"?k:ee([k,zt.pathname])),X=O.createHref(zt)}let[G,at,bt]=q2(l,R),St=Z2(y,{replace:f,mask:p,state:g,target:m,preventScrollReset:b,relative:s,viewTransition:w,defaultShouldRevalidate:A,useTransitions:Y});function Dt(zt){r&&r(zt),zt.defaultPrevented||St(zt)}let pn=!(P.isExternal||u),en=v.createElement("a",{...R,...bt,href:(pn?X:void 0)||P.absoluteURL||Z,onClick:pn?Dt:r,ref:G2(C,at),target:m,"data-discover":!F&&o==="render"?"true":void 0});return G&&!F?v.createElement(v.Fragment,null,en,v.createElement(U2,{page:Z})):en});Ir.displayName="Link";var P2=v.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:l="",end:s=!1,style:u,to:f,viewTransition:p,children:g,...m},y){let b=Pr(f,{relative:m.relative}),w=Pn(),A=v.useContext(Io),{navigator:R,basename:C}=v.useContext(Ln),k=A!=null&&e_(b)&&p===!0,O=R.encodeLocation?R.encodeLocation(b).pathname:b.pathname,Y=w.pathname,F=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;o||(Y=Y.toLowerCase(),F=F?F.toLowerCase():null,O=O.toLowerCase()),F&&C&&(F=De(F,C)||F);const P=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let Z=Y===O||!s&&Y.startsWith(O)&&Y.charAt(P)==="/",tt=F!=null&&(F===O||!s&&F.startsWith(O)&&F.charAt(O.length)==="/"),X={isActive:Z,isPending:tt,isTransitioning:k},G=Z?r:void 0,at;typeof l=="function"?at=l(X):at=[l,Z?"active":null,tt?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let bt=typeof u=="function"?u(X):u;return v.createElement(Ir,{...m,"aria-current":G,className:at,ref:y,style:bt,to:f,viewTransition:p},typeof g=="function"?g(X):g)});P2.displayName="NavLink";var I2=v.forwardRef(({discover:a="render",fetcherKey:r,navigate:o,reloadDocument:l,replace:s,state:u,method:f=Ro,action:p,onSubmit:g,relative:m,preventScrollReset:y,viewTransition:b,defaultShouldRevalidate:w,...A},R)=>{let{useTransitions:C}=v.useContext(Ln),k=t_(),O=n_(p,{relative:m}),Y=f.toLowerCase()==="get"?"get":"post",F=typeof p=="string"&&cu.test(p),P=Z=>{if(g&&g(Z),Z.defaultPrevented)return;Z.preventDefault();let tt=Z.nativeEvent.submitter,X=tt?.getAttribute("formmethod")||f,G=()=>k(tt||Z.currentTarget,{fetcherKey:r,method:X,navigate:o,replace:s,state:u,relative:m,preventScrollReset:y,viewTransition:b,defaultShouldRevalidate:w});C&&o!==!1?v.startTransition(()=>G()):G()};return v.createElement("form",{ref:R,method:Y,action:O,onSubmit:l?g:P,...A,"data-discover":!F&&a==="render"?"true":void 0})});I2.displayName="Form";function Q2(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cx(a){let r=v.useContext(Hi);return Ut(r,Q2(a)),r}function Z2(a,{target:r,replace:o,mask:l,state:s,preventScrollReset:u,relative:f,viewTransition:p,defaultShouldRevalidate:g,useTransitions:m}={}){let y=Xr(),b=Pn(),w=Pr(a,{relative:f});return v.useCallback(A=>{if(E2(A,r)){A.preventDefault();let R=o!==void 0?o:Ua(b)===Ua(w),C=()=>y(a,{replace:R,mask:l,state:s,preventScrollReset:u,relative:f,viewTransition:p,defaultShouldRevalidate:g});m?v.startTransition(()=>C()):C()}},[b,y,w,o,l,s,r,a,u,f,p,g,m])}function K2(a){Bn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let r=v.useRef(Wd(a)),o=v.useRef(!1),l=Pn(),s=v.useMemo(()=>z2(l.search,o.current?null:r.current),[l.search]),u=Xr(),f=v.useCallback((p,g)=>{const m=Wd(typeof p=="function"?p(new URLSearchParams(s)):p);o.current=!0,u("?"+m,g)},[u,s]);return[s,f]}var J2=0,W2=()=>`__${String(++J2)}__`;function t_(){let{router:a}=Cx("useSubmit"),{basename:r}=v.useContext(Ln),o=m2(),l=a.fetch,s=a.navigate;return v.useCallback(async(u,f={})=>{let{action:p,method:g,encType:m,formData:y,body:b}=R2(u,r);if(f.navigate===!1){let w=f.fetcherKey||W2();await l(w,o,f.action||p,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:b,formMethod:f.method||g,formEncType:f.encType||m,flushSync:f.flushSync})}else await s(f.action||p,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:b,formMethod:f.method||g,formEncType:f.encType||m,replace:f.replace,state:f.state,fromRouteId:o,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,s,r,o])}function n_(a,{relative:r}={}){let{basename:o}=v.useContext(Ln),l=v.useContext(ae);Ut(l,"useFormAction must be used inside a RouteContext");let[s]=l.matches.slice(-1),u={...Pr(a||".",{relative:r})},f=Pn();if(a==null){u.search=f.search;let p=new URLSearchParams(u.search),g=p.getAll("index");if(g.some(y=>y==="")){p.delete("index"),g.filter(b=>b).forEach(b=>p.append("index",b));let y=p.toString();u.search=y?`?${y}`:""}}return(!a||a===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:ee([o,u.pathname])),Ua(u)}function e_(a,{relative:r}={}){let o=v.useContext(mx);Ut(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Cx("useViewTransitionState"),s=Pr(a,{relative:r});if(!o.isTransitioning)return!1;let u=De(o.currentLocation.pathname,l)||o.currentLocation.pathname,f=De(o.nextLocation.pathname,l)||o.nextLocation.pathname;return Do(s.pathname,f)!=null||Do(s.pathname,u)!=null}const a_=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i_=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,o,l)=>l?l.toUpperCase():o.toLowerCase()),gm=a=>{const r=i_(a);return r.charAt(0).toUpperCase()+r.slice(1)},kx=(...a)=>a.filter((r,o,l)=>!!r&&r.trim()!==""&&l.indexOf(r)===o).join(" ").trim(),r_=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var l_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o_=v.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:s="",children:u,iconNode:f,...p},g)=>v.createElement("svg",{ref:g,...l_,width:r,height:r,stroke:a,strokeWidth:l?Number(o)*24/Number(r):o,className:kx("lucide",s),...!u&&!r_(p)&&{"aria-hidden":"true"},...p},[...f.map(([m,y])=>v.createElement(m,y)),...Array.isArray(u)?u:[u]]));const yt=(a,r)=>{const o=v.forwardRef(({className:l,...s},u)=>v.createElement(o_,{ref:u,iconNode:r,className:kx(`lucide-${a_(gm(a))}`,`lucide-${a}`,l),...s}));return o.displayName=gm(a),o};const s_=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],bu=yt("arrow-left",s_);const c_=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],d_=yt("bell",c_);const u_=[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]],p_=yt("book-open-check",u_);const f_=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ex=yt("book-open",f_);const h_=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],g_=yt("bot",h_);const m_=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],x_=yt("calendar-days",m_);const v_=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],b_=yt("chevron-left",v_);const y_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],zx=yt("chevron-right",y_);const __=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ko=yt("circle-check",__);const w_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],S_=yt("circle-x",w_);const C_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],k_=yt("circle",C_);const E_=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],mm=yt("clipboard-check",E_);const z_=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ax=yt("clock",z_);const A_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],yu=yt("external-link",A_);const T_=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],R_=yt("file-text",T_);const N_=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],j_=yt("flame",N_);const M_=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Tx=yt("graduation-cap",M_);const D_=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Rx=yt("heart",D_);const B_=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],L_=yt("key-round",B_);const O_=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],H_=yt("link-2",O_);const q_=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1",key:"cif1o7"}]],U_=yt("list-todo",q_);const F_=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],Y_=yt("list-tree",F_);const V_=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],G_=yt("log-in",V_);const $_=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Nx=yt("log-out",$_);const X_=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5",key:"1faxuh"}]],P_=yt("message-square-heart",X_);const I_=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Q_=yt("pencil",I_);const Z_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],jx=yt("rotate-ccw",Z_);const K_=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],_u=yt("send",K_);const J_=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Mx=yt("sparkles",J_);const W_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]],tw=yt("square-kanban",W_);const nw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Dx=yt("target",nw);const ew=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],aw=yt("trending-up",ew);const iw=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],rw=yt("user-round",iw);const lw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bx=yt("x",lw);function Ft(a,r,{checkForDefaultPrevented:o=!0}={}){return function(s){if(a?.(s),o===!1||!s.defaultPrevented)return r?.(s)}}function ow(a,r){const o=v.createContext(r),l=u=>{const{children:f,...p}=u,g=v.useMemo(()=>p,Object.values(p));return h.jsx(o.Provider,{value:g,children:f})};l.displayName=a+"Provider";function s(u){const f=v.useContext(o);if(f)return f;if(r!==void 0)return r;throw new Error(`\`${u}\` must be used within \`${a}\``)}return[l,s]}function Qr(a,r=[]){let o=[];function l(u,f){const p=v.createContext(f),g=o.length;o=[...o,f];const m=b=>{const{scope:w,children:A,...R}=b,C=w?.[a]?.[g]||p,k=v.useMemo(()=>R,Object.values(R));return h.jsx(C.Provider,{value:k,children:A})};m.displayName=u+"Provider";function y(b,w){const A=w?.[a]?.[g]||p,R=v.useContext(A);if(R)return R;if(f!==void 0)return f;throw new Error(`\`${b}\` must be used within \`${u}\``)}return[m,y]}const s=()=>{const u=o.map(f=>v.createContext(f));return function(p){const g=p?.[a]||u;return v.useMemo(()=>({[`__scope${a}`]:{...p,[a]:g}}),[p,g])}};return s.scopeName=a,[l,sw(s,...r)]}function sw(...a){const r=a[0];if(a.length===1)return r;const o=()=>{const l=a.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(u){const f=l.reduce((p,{useScope:g,scopeName:m})=>{const b=g(u)[`__scope${m}`];return{...p,...b}},{});return v.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return o.scopeName=r.scopeName,o}function xm(a,r){if(typeof a=="function")return a(r);a!=null&&(a.current=r)}function Zr(...a){return r=>{let o=!1;const l=a.map(s=>{const u=xm(s,r);return!o&&typeof u=="function"&&(o=!0),u});if(o)return()=>{for(let s=0;s<l.length;s++){const u=l[s];typeof u=="function"?u():xm(a[s],null)}}}}function un(...a){return v.useCallback(Zr(...a),a)}function vm(a){const r=cw(a),o=v.forwardRef((l,s)=>{const{children:u,...f}=l,p=v.Children.toArray(u),g=p.find(uw);if(g){const m=g.props.children,y=p.map(b=>b===g?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:b);return h.jsx(r,{...f,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,y):null})}return h.jsx(r,{...f,ref:s,children:u})});return o.displayName=`${a}.Slot`,o}function cw(a){const r=v.forwardRef((o,l)=>{const{children:s,...u}=o;if(v.isValidElement(s)){const f=fw(s),p=pw(u,s.props);return s.type!==v.Fragment&&(p.ref=l?Zr(l,f):f),v.cloneElement(s,p)}return v.Children.count(s)>1?v.Children.only(null):null});return r.displayName=`${a}.SlotClone`,r}var dw=Symbol("radix.slottable");function uw(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===dw}function pw(a,r){const o={...r};for(const l in r){const s=a[l],u=r[l];/^on[A-Z]/.test(l)?s&&u?o[l]=(...p)=>{const g=u(...p);return s(...p),g}:s&&(o[l]=s):l==="style"?o[l]={...s,...u}:l==="className"&&(o[l]=[s,u].filter(Boolean).join(" "))}return{...a,...o}}function fw(a){let r=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?a.ref:(r=Object.getOwnPropertyDescriptor(a,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o?a.props.ref:a.props.ref||a.ref)}function hw(a){const r=a+"CollectionProvider",[o,l]=Qr(r),[s,u]=o(r,{collectionRef:{current:null},itemMap:new Map}),f=C=>{const{scope:k,children:O}=C,Y=fa.useRef(null),F=fa.useRef(new Map).current;return h.jsx(s,{scope:k,itemMap:F,collectionRef:Y,children:O})};f.displayName=r;const p=a+"CollectionSlot",g=vm(p),m=fa.forwardRef((C,k)=>{const{scope:O,children:Y}=C,F=u(p,O),P=un(k,F.collectionRef);return h.jsx(g,{ref:P,children:Y})});m.displayName=p;const y=a+"CollectionItemSlot",b="data-radix-collection-item",w=vm(y),A=fa.forwardRef((C,k)=>{const{scope:O,children:Y,...F}=C,P=fa.useRef(null),Z=un(k,P),tt=u(y,O);return fa.useEffect(()=>(tt.itemMap.set(P,{ref:P,...F}),()=>{tt.itemMap.delete(P)})),h.jsx(w,{[b]:"",ref:Z,children:Y})});A.displayName=y;function R(C){const k=u(a+"CollectionConsumer",C);return fa.useCallback(()=>{const Y=k.collectionRef.current;if(!Y)return[];const F=Array.from(Y.querySelectorAll(`[${b}]`));return Array.from(k.itemMap.values()).sort((tt,X)=>F.indexOf(tt.ref.current)-F.indexOf(X.ref.current))},[k.collectionRef,k.itemMap])}return[{Provider:f,Slot:m,ItemSlot:A},R,l]}var Be=globalThis?.document?v.useLayoutEffect:()=>{},gw=su[" useId ".trim().toString()]||(()=>{}),mw=0;function Vr(a){const[r,o]=v.useState(gw());return Be(()=>{o(l=>l??String(mw++))},[a]),a||(r?`radix-${r}`:"")}var Lx=ix();const xw=ax(Lx);function vw(a){const r=bw(a),o=v.forwardRef((l,s)=>{const{children:u,...f}=l,p=v.Children.toArray(u),g=p.find(_w);if(g){const m=g.props.children,y=p.map(b=>b===g?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:b);return h.jsx(r,{...f,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,y):null})}return h.jsx(r,{...f,ref:s,children:u})});return o.displayName=`${a}.Slot`,o}function bw(a){const r=v.forwardRef((o,l)=>{const{children:s,...u}=o;if(v.isValidElement(s)){const f=Sw(s),p=ww(u,s.props);return s.type!==v.Fragment&&(p.ref=l?Zr(l,f):f),v.cloneElement(s,p)}return v.Children.count(s)>1?v.Children.only(null):null});return r.displayName=`${a}.SlotClone`,r}var yw=Symbol("radix.slottable");function _w(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===yw}function ww(a,r){const o={...r};for(const l in r){const s=a[l],u=r[l];/^on[A-Z]/.test(l)?s&&u?o[l]=(...p)=>{const g=u(...p);return s(...p),g}:s&&(o[l]=s):l==="style"?o[l]={...s,...u}:l==="className"&&(o[l]=[s,u].filter(Boolean).join(" "))}return{...a,...o}}function Sw(a){let r=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?a.ref:(r=Object.getOwnPropertyDescriptor(a,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o?a.props.ref:a.props.ref||a.ref)}var Cw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Zt=Cw.reduce((a,r)=>{const o=vw(`Primitive.${r}`),l=v.forwardRef((s,u)=>{const{asChild:f,...p}=s,g=f?o:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),h.jsx(g,{...p,ref:u})});return l.displayName=`Primitive.${r}`,{...a,[r]:l}},{});function kw(a,r){a&&Lx.flushSync(()=>a.dispatchEvent(r))}function wn(a){const r=v.useRef(a);return v.useEffect(()=>{r.current=a}),v.useMemo(()=>(...o)=>r.current?.(...o),[])}var Ew=su[" useInsertionEffect ".trim().toString()]||Be;function wu({prop:a,defaultProp:r,onChange:o=()=>{},caller:l}){const[s,u,f]=zw({defaultProp:r,onChange:o}),p=a!==void 0,g=p?a:s;{const y=v.useRef(a!==void 0);v.useEffect(()=>{const b=y.current;b!==p&&console.warn(`${l} is changing from ${b?"controlled":"uncontrolled"} to ${p?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=p},[p,l])}const m=v.useCallback(y=>{if(p){const b=Aw(y)?y(a):y;b!==a&&f.current?.(b)}else u(y)},[p,a,u,f]);return[g,m]}function zw({defaultProp:a,onChange:r}){const[o,l]=v.useState(a),s=v.useRef(o),u=v.useRef(r);return Ew(()=>{u.current=r},[r]),v.useEffect(()=>{s.current!==o&&(u.current?.(o),s.current=o)},[o,s]),[o,l,u]}function Aw(a){return typeof a=="function"}var Tw=v.createContext(void 0);function Su(a){const r=v.useContext(Tw);return a||r||"ltr"}var Bd="rovingFocusGroup.onEntryFocus",Rw={bubbles:!1,cancelable:!0},Kr="RovingFocusGroup",[tu,Ox,Nw]=hw(Kr),[jw,Hx]=Qr(Kr,[Nw]),[Mw,Dw]=jw(Kr),qx=v.forwardRef((a,r)=>h.jsx(tu.Provider,{scope:a.__scopeRovingFocusGroup,children:h.jsx(tu.Slot,{scope:a.__scopeRovingFocusGroup,children:h.jsx(Bw,{...a,ref:r})})}));qx.displayName=Kr;var Bw=v.forwardRef((a,r)=>{const{__scopeRovingFocusGroup:o,orientation:l,loop:s=!1,dir:u,currentTabStopId:f,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:g,onEntryFocus:m,preventScrollOnEntryFocus:y=!1,...b}=a,w=v.useRef(null),A=un(r,w),R=Su(u),[C,k]=wu({prop:f,defaultProp:p??null,onChange:g,caller:Kr}),[O,Y]=v.useState(!1),F=wn(m),P=Ox(o),Z=v.useRef(!1),[tt,X]=v.useState(0);return v.useEffect(()=>{const G=w.current;if(G)return G.addEventListener(Bd,F),()=>G.removeEventListener(Bd,F)},[F]),h.jsx(Mw,{scope:o,orientation:l,dir:R,loop:s,currentTabStopId:C,onItemFocus:v.useCallback(G=>k(G),[k]),onItemShiftTab:v.useCallback(()=>Y(!0),[]),onFocusableItemAdd:v.useCallback(()=>X(G=>G+1),[]),onFocusableItemRemove:v.useCallback(()=>X(G=>G-1),[]),children:h.jsx(Zt.div,{tabIndex:O||tt===0?-1:0,"data-orientation":l,...b,ref:A,style:{outline:"none",...a.style},onMouseDown:Ft(a.onMouseDown,()=>{Z.current=!0}),onFocus:Ft(a.onFocus,G=>{const at=!Z.current;if(G.target===G.currentTarget&&at&&!O){const bt=new CustomEvent(Bd,Rw);if(G.currentTarget.dispatchEvent(bt),!bt.defaultPrevented){const St=P().filter(D=>D.focusable),Dt=St.find(D=>D.active),pn=St.find(D=>D.id===C),zt=[Dt,pn,...St].filter(Boolean).map(D=>D.ref.current);Yx(zt,y)}}Z.current=!1}),onBlur:Ft(a.onBlur,()=>Y(!1))})})}),Ux="RovingFocusGroupItem",Fx=v.forwardRef((a,r)=>{const{__scopeRovingFocusGroup:o,focusable:l=!0,active:s=!1,tabStopId:u,children:f,...p}=a,g=Vr(),m=u||g,y=Dw(Ux,o),b=y.currentTabStopId===m,w=Ox(o),{onFocusableItemAdd:A,onFocusableItemRemove:R,currentTabStopId:C}=y;return v.useEffect(()=>{if(l)return A(),()=>R()},[l,A,R]),h.jsx(tu.ItemSlot,{scope:o,id:m,focusable:l,active:s,children:h.jsx(Zt.span,{tabIndex:b?0:-1,"data-orientation":y.orientation,...p,ref:r,onMouseDown:Ft(a.onMouseDown,k=>{l?y.onItemFocus(m):k.preventDefault()}),onFocus:Ft(a.onFocus,()=>y.onItemFocus(m)),onKeyDown:Ft(a.onKeyDown,k=>{if(k.key==="Tab"&&k.shiftKey){y.onItemShiftTab();return}if(k.target!==k.currentTarget)return;const O=Hw(k,y.orientation,y.dir);if(O!==void 0){if(k.metaKey||k.ctrlKey||k.altKey||k.shiftKey)return;k.preventDefault();let F=w().filter(P=>P.focusable).map(P=>P.ref.current);if(O==="last")F.reverse();else if(O==="prev"||O==="next"){O==="prev"&&F.reverse();const P=F.indexOf(k.currentTarget);F=y.loop?qw(F,P+1):F.slice(P+1)}setTimeout(()=>Yx(F))}}),children:typeof f=="function"?f({isCurrentTabStop:b,hasTabStop:C!=null}):f})})});Fx.displayName=Ux;var Lw={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ow(a,r){return r!=="rtl"?a:a==="ArrowLeft"?"ArrowRight":a==="ArrowRight"?"ArrowLeft":a}function Hw(a,r,o){const l=Ow(a.key,o);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(l))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(l)))return Lw[l]}function Yx(a,r=!1){const o=document.activeElement;for(const l of a)if(l===o||(l.focus({preventScroll:r}),document.activeElement!==o))return}function qw(a,r){return a.map((o,l)=>a[(r+l)%a.length])}var Uw=qx,Fw=Fx;function Yw(a,r){return v.useReducer((o,l)=>r[o][l]??o,a)}var Le=a=>{const{present:r,children:o}=a,l=Vw(r),s=typeof o=="function"?o({present:l.isPresent}):v.Children.only(o),u=un(l.ref,Gw(s));return typeof o=="function"||l.isPresent?v.cloneElement(s,{ref:u}):null};Le.displayName="Presence";function Vw(a){const[r,o]=v.useState(),l=v.useRef(null),s=v.useRef(a),u=v.useRef("none"),f=a?"mounted":"unmounted",[p,g]=Yw(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return v.useEffect(()=>{const m=_o(l.current);u.current=p==="mounted"?m:"none"},[p]),Be(()=>{const m=l.current,y=s.current;if(y!==a){const w=u.current,A=_o(m);a?g("MOUNT"):A==="none"||m?.display==="none"?g("UNMOUNT"):g(y&&w!==A?"ANIMATION_OUT":"UNMOUNT"),s.current=a}},[a,g]),Be(()=>{if(r){let m;const y=r.ownerDocument.defaultView??window,b=A=>{const C=_o(l.current).includes(CSS.escape(A.animationName));if(A.target===r&&C&&(g("ANIMATION_END"),!s.current)){const k=r.style.animationFillMode;r.style.animationFillMode="forwards",m=y.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=k)})}},w=A=>{A.target===r&&(u.current=_o(l.current))};return r.addEventListener("animationstart",w),r.addEventListener("animationcancel",b),r.addEventListener("animationend",b),()=>{y.clearTimeout(m),r.removeEventListener("animationstart",w),r.removeEventListener("animationcancel",b),r.removeEventListener("animationend",b)}}else g("ANIMATION_END")},[r,g]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:v.useCallback(m=>{l.current=m?getComputedStyle(m):null,o(m)},[])}}function _o(a){return a?.animationName||"none"}function Gw(a){let r=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?a.ref:(r=Object.getOwnPropertyDescriptor(a,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o?a.props.ref:a.props.ref||a.ref)}var Jo="Tabs",[$w]=Qr(Jo,[Hx]),Vx=Hx(),[Xw,Cu]=$w(Jo),Gx=v.forwardRef((a,r)=>{const{__scopeTabs:o,value:l,onValueChange:s,defaultValue:u,orientation:f="horizontal",dir:p,activationMode:g="automatic",...m}=a,y=Su(p),[b,w]=wu({prop:l,onChange:s,defaultProp:u??"",caller:Jo});return h.jsx(Xw,{scope:o,baseId:Vr(),value:b,onValueChange:w,orientation:f,dir:y,activationMode:g,children:h.jsx(Zt.div,{dir:y,"data-orientation":f,...m,ref:r})})});Gx.displayName=Jo;var $x="TabsList",Xx=v.forwardRef((a,r)=>{const{__scopeTabs:o,loop:l=!0,...s}=a,u=Cu($x,o),f=Vx(o);return h.jsx(Uw,{asChild:!0,...f,orientation:u.orientation,dir:u.dir,loop:l,children:h.jsx(Zt.div,{role:"tablist","aria-orientation":u.orientation,...s,ref:r})})});Xx.displayName=$x;var Px="TabsTrigger",Ix=v.forwardRef((a,r)=>{const{__scopeTabs:o,value:l,disabled:s=!1,...u}=a,f=Cu(Px,o),p=Vx(o),g=Kx(f.baseId,l),m=Jx(f.baseId,l),y=l===f.value;return h.jsx(Fw,{asChild:!0,...p,focusable:!s,active:y,children:h.jsx(Zt.button,{type:"button",role:"tab","aria-selected":y,"aria-controls":m,"data-state":y?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:g,...u,ref:r,onMouseDown:Ft(a.onMouseDown,b=>{!s&&b.button===0&&b.ctrlKey===!1?f.onValueChange(l):b.preventDefault()}),onKeyDown:Ft(a.onKeyDown,b=>{[" ","Enter"].includes(b.key)&&f.onValueChange(l)}),onFocus:Ft(a.onFocus,()=>{const b=f.activationMode!=="manual";!y&&!s&&b&&f.onValueChange(l)})})})});Ix.displayName=Px;var Qx="TabsContent",Zx=v.forwardRef((a,r)=>{const{__scopeTabs:o,value:l,forceMount:s,children:u,...f}=a,p=Cu(Qx,o),g=Kx(p.baseId,l),m=Jx(p.baseId,l),y=l===p.value,b=v.useRef(y);return v.useEffect(()=>{const w=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(w)},[]),h.jsx(Le,{present:s||y,children:({present:w})=>h.jsx(Zt.div,{"data-state":y?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":g,hidden:!w,id:m,tabIndex:0,...f,ref:r,style:{...a.style,animationDuration:b.current?"0s":void 0},children:w&&u})})});Zx.displayName=Qx;function Kx(a,r){return`${a}-trigger-${r}`}function Jx(a,r){return`${a}-content-${r}`}var Pw=Gx,Iw=Xx,Qw=Ix,Zw=Zx;function Wx(a){var r,o,l="";if(typeof a=="string"||typeof a=="number")l+=a;else if(typeof a=="object")if(Array.isArray(a)){var s=a.length;for(r=0;r<s;r++)a[r]&&(o=Wx(a[r]))&&(l&&(l+=" "),l+=o)}else for(o in a)a[o]&&(l&&(l+=" "),l+=o);return l}function tv(){for(var a,r,o=0,l="",s=arguments.length;o<s;o++)(a=arguments[o])&&(r=Wx(a))&&(l&&(l+=" "),l+=r);return l}const Kw=(a,r)=>{const o=new Array(a.length+r.length);for(let l=0;l<a.length;l++)o[l]=a[l];for(let l=0;l<r.length;l++)o[a.length+l]=r[l];return o},Jw=(a,r)=>({classGroupId:a,validator:r}),nv=(a=new Map,r=null,o)=>({nextPart:a,validators:r,classGroupId:o}),Bo="-",bm=[],Ww="arbitrary..",t3=a=>{const r=e3(a),{conflictingClassGroups:o,conflictingClassGroupModifiers:l}=a;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return n3(f);const p=f.split(Bo),g=p[0]===""&&p.length>1?1:0;return ev(p,g,r)},getConflictingClassGroupIds:(f,p)=>{if(p){const g=l[f],m=o[f];return g?m?Kw(m,g):g:m||bm}return o[f]||bm}}},ev=(a,r,o)=>{if(a.length-r===0)return o.classGroupId;const s=a[r],u=o.nextPart.get(s);if(u){const m=ev(a,r+1,u);if(m)return m}const f=o.validators;if(f===null)return;const p=r===0?a.join(Bo):a.slice(r).join(Bo),g=f.length;for(let m=0;m<g;m++){const y=f[m];if(y.validator(p))return y.classGroupId}},n3=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=a.slice(1,-1),o=r.indexOf(":"),l=r.slice(0,o);return l?Ww+l:void 0})(),e3=a=>{const{theme:r,classGroups:o}=a;return a3(o,r)},a3=(a,r)=>{const o=nv();for(const l in a){const s=a[l];ku(s,o,l,r)}return o},ku=(a,r,o,l)=>{const s=a.length;for(let u=0;u<s;u++){const f=a[u];i3(f,r,o,l)}},i3=(a,r,o,l)=>{if(typeof a=="string"){r3(a,r,o);return}if(typeof a=="function"){l3(a,r,o,l);return}o3(a,r,o,l)},r3=(a,r,o)=>{const l=a===""?r:av(r,a);l.classGroupId=o},l3=(a,r,o,l)=>{if(s3(a)){ku(a(l),r,o,l);return}r.validators===null&&(r.validators=[]),r.validators.push(Jw(o,a))},o3=(a,r,o,l)=>{const s=Object.entries(a),u=s.length;for(let f=0;f<u;f++){const[p,g]=s[f];ku(g,av(r,p),o,l)}},av=(a,r)=>{let o=a;const l=r.split(Bo),s=l.length;for(let u=0;u<s;u++){const f=l[u];let p=o.nextPart.get(f);p||(p=nv(),o.nextPart.set(f,p)),o=p}return o},s3=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,c3=a=>{if(a<1)return{get:()=>{},set:()=>{}};let r=0,o=Object.create(null),l=Object.create(null);const s=(u,f)=>{o[u]=f,r++,r>a&&(r=0,l=o,o=Object.create(null))};return{get(u){let f=o[u];if(f!==void 0)return f;if((f=l[u])!==void 0)return s(u,f),f},set(u,f){u in o?o[u]=f:s(u,f)}}},nu="!",ym=":",d3=[],_m=(a,r,o,l,s)=>({modifiers:a,hasImportantModifier:r,baseClassName:o,maybePostfixModifierPosition:l,isExternal:s}),u3=a=>{const{prefix:r,experimentalParseClassName:o}=a;let l=s=>{const u=[];let f=0,p=0,g=0,m;const y=s.length;for(let C=0;C<y;C++){const k=s[C];if(f===0&&p===0){if(k===ym){u.push(s.slice(g,C)),g=C+1;continue}if(k==="/"){m=C;continue}}k==="["?f++:k==="]"?f--:k==="("?p++:k===")"&&p--}const b=u.length===0?s:s.slice(g);let w=b,A=!1;b.endsWith(nu)?(w=b.slice(0,-1),A=!0):b.startsWith(nu)&&(w=b.slice(1),A=!0);const R=m&&m>g?m-g:void 0;return _m(u,A,w,R)};if(r){const s=r+ym,u=l;l=f=>f.startsWith(s)?u(f.slice(s.length)):_m(d3,!1,f,void 0,!0)}if(o){const s=l;l=u=>o({className:u,parseClassName:s})}return l},p3=a=>{const r=new Map;return a.orderSensitiveModifiers.forEach((o,l)=>{r.set(o,1e6+l)}),o=>{const l=[];let s=[];for(let u=0;u<o.length;u++){const f=o[u],p=f[0]==="[",g=r.has(f);p||g?(s.length>0&&(s.sort(),l.push(...s),s=[]),l.push(f)):s.push(f)}return s.length>0&&(s.sort(),l.push(...s)),l}},f3=a=>({cache:c3(a.cacheSize),parseClassName:u3(a),sortModifiers:p3(a),...t3(a)}),h3=/\s+/,g3=(a,r)=>{const{parseClassName:o,getClassGroupId:l,getConflictingClassGroupIds:s,sortModifiers:u}=r,f=[],p=a.trim().split(h3);let g="";for(let m=p.length-1;m>=0;m-=1){const y=p[m],{isExternal:b,modifiers:w,hasImportantModifier:A,baseClassName:R,maybePostfixModifierPosition:C}=o(y);if(b){g=y+(g.length>0?" "+g:g);continue}let k=!!C,O=l(k?R.substring(0,C):R);if(!O){if(!k){g=y+(g.length>0?" "+g:g);continue}if(O=l(R),!O){g=y+(g.length>0?" "+g:g);continue}k=!1}const Y=w.length===0?"":w.length===1?w[0]:u(w).join(":"),F=A?Y+nu:Y,P=F+O;if(f.indexOf(P)>-1)continue;f.push(P);const Z=s(O,k);for(let tt=0;tt<Z.length;++tt){const X=Z[tt];f.push(F+X)}g=y+(g.length>0?" "+g:g)}return g},m3=(...a)=>{let r=0,o,l,s="";for(;r<a.length;)(o=a[r++])&&(l=iv(o))&&(s&&(s+=" "),s+=l);return s},iv=a=>{if(typeof a=="string")return a;let r,o="";for(let l=0;l<a.length;l++)a[l]&&(r=iv(a[l]))&&(o&&(o+=" "),o+=r);return o},x3=(a,...r)=>{let o,l,s,u;const f=g=>{const m=r.reduce((y,b)=>b(y),a());return o=f3(m),l=o.cache.get,s=o.cache.set,u=p,p(g)},p=g=>{const m=l(g);if(m)return m;const y=g3(g,o);return s(g,y),y};return u=f,(...g)=>u(m3(...g))},v3=[],Jt=a=>{const r=o=>o[a]||v3;return r.isThemeGetter=!0,r},rv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,lv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,b3=/^\d+\/\d+$/,y3=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_3=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,w3=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,S3=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,C3=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ti=a=>b3.test(a),ft=a=>!!a&&!Number.isNaN(Number(a)),ua=a=>!!a&&Number.isInteger(Number(a)),Ld=a=>a.endsWith("%")&&ft(a.slice(0,-1)),Ne=a=>y3.test(a),k3=()=>!0,E3=a=>_3.test(a)&&!w3.test(a),ov=()=>!1,z3=a=>S3.test(a),A3=a=>C3.test(a),T3=a=>!J(a)&&!W(a),R3=a=>Ui(a,dv,ov),J=a=>rv.test(a),Oa=a=>Ui(a,uv,E3),Od=a=>Ui(a,B3,ft),wm=a=>Ui(a,sv,ov),N3=a=>Ui(a,cv,A3),wo=a=>Ui(a,pv,z3),W=a=>lv.test(a),qr=a=>Fi(a,uv),j3=a=>Fi(a,L3),Sm=a=>Fi(a,sv),M3=a=>Fi(a,dv),D3=a=>Fi(a,cv),So=a=>Fi(a,pv,!0),Ui=(a,r,o)=>{const l=rv.exec(a);return l?l[1]?r(l[1]):o(l[2]):!1},Fi=(a,r,o=!1)=>{const l=lv.exec(a);return l?l[1]?r(l[1]):o:!1},sv=a=>a==="position"||a==="percentage",cv=a=>a==="image"||a==="url",dv=a=>a==="length"||a==="size"||a==="bg-size",uv=a=>a==="length",B3=a=>a==="number",L3=a=>a==="family-name",pv=a=>a==="shadow",O3=()=>{const a=Jt("color"),r=Jt("font"),o=Jt("text"),l=Jt("font-weight"),s=Jt("tracking"),u=Jt("leading"),f=Jt("breakpoint"),p=Jt("container"),g=Jt("spacing"),m=Jt("radius"),y=Jt("shadow"),b=Jt("inset-shadow"),w=Jt("text-shadow"),A=Jt("drop-shadow"),R=Jt("blur"),C=Jt("perspective"),k=Jt("aspect"),O=Jt("ease"),Y=Jt("animate"),F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],P=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Z=()=>[...P(),W,J],tt=()=>["auto","hidden","clip","visible","scroll"],X=()=>["auto","contain","none"],G=()=>[W,J,g],at=()=>[Ti,"full","auto",...G()],bt=()=>[ua,"none","subgrid",W,J],St=()=>["auto",{span:["full",ua,W,J]},ua,W,J],Dt=()=>[ua,"auto",W,J],pn=()=>["auto","min","max","fr",W,J],en=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],zt=()=>["start","end","center","stretch","center-safe","end-safe"],D=()=>["auto",...G()],I=()=>[Ti,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...G()],V=()=>[a,W,J],Ct=()=>[...P(),Sm,wm,{position:[W,J]}],Et=()=>["no-repeat",{repeat:["","x","y","space","round"]}],z=()=>["auto","cover","contain",M3,R3,{size:[W,J]}],q=()=>[Ld,qr,Oa],$=()=>["","none","full",m,W,J],Q=()=>["",ft,qr,Oa],lt=()=>["solid","dashed","dotted","double"],pt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],rt=()=>[ft,Ld,Sm,wm],Wt=()=>["","none",R,W,J],Lt=()=>["none",ft,W,J],re=()=>["none",ft,W,J],He=()=>[ft,W,J],qe=()=>[Ti,"full",...G()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ne],breakpoint:[Ne],color:[k3],container:[Ne],"drop-shadow":[Ne],ease:["in","out","in-out"],font:[T3],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ne],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ne],shadow:[Ne],spacing:["px",ft],text:[Ne],"text-shadow":[Ne],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ti,J,W,k]}],container:["container"],columns:[{columns:[ft,J,W,p]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Z()}],overflow:[{overflow:tt()}],"overflow-x":[{"overflow-x":tt()}],"overflow-y":[{"overflow-y":tt()}],overscroll:[{overscroll:X()}],"overscroll-x":[{"overscroll-x":X()}],"overscroll-y":[{"overscroll-y":X()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:at()}],"inset-x":[{"inset-x":at()}],"inset-y":[{"inset-y":at()}],start:[{start:at()}],end:[{end:at()}],top:[{top:at()}],right:[{right:at()}],bottom:[{bottom:at()}],left:[{left:at()}],visibility:["visible","invisible","collapse"],z:[{z:[ua,"auto",W,J]}],basis:[{basis:[Ti,"full","auto",p,...G()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ft,Ti,"auto","initial","none",J]}],grow:[{grow:["",ft,W,J]}],shrink:[{shrink:["",ft,W,J]}],order:[{order:[ua,"first","last","none",W,J]}],"grid-cols":[{"grid-cols":bt()}],"col-start-end":[{col:St()}],"col-start":[{"col-start":Dt()}],"col-end":[{"col-end":Dt()}],"grid-rows":[{"grid-rows":bt()}],"row-start-end":[{row:St()}],"row-start":[{"row-start":Dt()}],"row-end":[{"row-end":Dt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":pn()}],"auto-rows":[{"auto-rows":pn()}],gap:[{gap:G()}],"gap-x":[{"gap-x":G()}],"gap-y":[{"gap-y":G()}],"justify-content":[{justify:[...en(),"normal"]}],"justify-items":[{"justify-items":[...zt(),"normal"]}],"justify-self":[{"justify-self":["auto",...zt()]}],"align-content":[{content:["normal",...en()]}],"align-items":[{items:[...zt(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...zt(),{baseline:["","last"]}]}],"place-content":[{"place-content":en()}],"place-items":[{"place-items":[...zt(),"baseline"]}],"place-self":[{"place-self":["auto",...zt()]}],p:[{p:G()}],px:[{px:G()}],py:[{py:G()}],ps:[{ps:G()}],pe:[{pe:G()}],pt:[{pt:G()}],pr:[{pr:G()}],pb:[{pb:G()}],pl:[{pl:G()}],m:[{m:D()}],mx:[{mx:D()}],my:[{my:D()}],ms:[{ms:D()}],me:[{me:D()}],mt:[{mt:D()}],mr:[{mr:D()}],mb:[{mb:D()}],ml:[{ml:D()}],"space-x":[{"space-x":G()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":G()}],"space-y-reverse":["space-y-reverse"],size:[{size:I()}],w:[{w:[p,"screen",...I()]}],"min-w":[{"min-w":[p,"screen","none",...I()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[f]},...I()]}],h:[{h:["screen","lh",...I()]}],"min-h":[{"min-h":["screen","lh","none",...I()]}],"max-h":[{"max-h":["screen","lh",...I()]}],"font-size":[{text:["base",o,qr,Oa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,W,Od]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ld,J]}],"font-family":[{font:[j3,J,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,W,J]}],"line-clamp":[{"line-clamp":[ft,"none",W,Od]}],leading:[{leading:[u,...G()]}],"list-image":[{"list-image":["none",W,J]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",W,J]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:V()}],"text-color":[{text:V()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...lt(),"wavy"]}],"text-decoration-thickness":[{decoration:[ft,"from-font","auto",W,Oa]}],"text-decoration-color":[{decoration:V()}],"underline-offset":[{"underline-offset":[ft,"auto",W,J]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:G()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",W,J]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",W,J]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Ct()}],"bg-repeat":[{bg:Et()}],"bg-size":[{bg:z()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ua,W,J],radial:["",W,J],conic:[ua,W,J]},D3,N3]}],"bg-color":[{bg:V()}],"gradient-from-pos":[{from:q()}],"gradient-via-pos":[{via:q()}],"gradient-to-pos":[{to:q()}],"gradient-from":[{from:V()}],"gradient-via":[{via:V()}],"gradient-to":[{to:V()}],rounded:[{rounded:$()}],"rounded-s":[{"rounded-s":$()}],"rounded-e":[{"rounded-e":$()}],"rounded-t":[{"rounded-t":$()}],"rounded-r":[{"rounded-r":$()}],"rounded-b":[{"rounded-b":$()}],"rounded-l":[{"rounded-l":$()}],"rounded-ss":[{"rounded-ss":$()}],"rounded-se":[{"rounded-se":$()}],"rounded-ee":[{"rounded-ee":$()}],"rounded-es":[{"rounded-es":$()}],"rounded-tl":[{"rounded-tl":$()}],"rounded-tr":[{"rounded-tr":$()}],"rounded-br":[{"rounded-br":$()}],"rounded-bl":[{"rounded-bl":$()}],"border-w":[{border:Q()}],"border-w-x":[{"border-x":Q()}],"border-w-y":[{"border-y":Q()}],"border-w-s":[{"border-s":Q()}],"border-w-e":[{"border-e":Q()}],"border-w-t":[{"border-t":Q()}],"border-w-r":[{"border-r":Q()}],"border-w-b":[{"border-b":Q()}],"border-w-l":[{"border-l":Q()}],"divide-x":[{"divide-x":Q()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Q()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...lt(),"hidden","none"]}],"divide-style":[{divide:[...lt(),"hidden","none"]}],"border-color":[{border:V()}],"border-color-x":[{"border-x":V()}],"border-color-y":[{"border-y":V()}],"border-color-s":[{"border-s":V()}],"border-color-e":[{"border-e":V()}],"border-color-t":[{"border-t":V()}],"border-color-r":[{"border-r":V()}],"border-color-b":[{"border-b":V()}],"border-color-l":[{"border-l":V()}],"divide-color":[{divide:V()}],"outline-style":[{outline:[...lt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ft,W,J]}],"outline-w":[{outline:["",ft,qr,Oa]}],"outline-color":[{outline:V()}],shadow:[{shadow:["","none",y,So,wo]}],"shadow-color":[{shadow:V()}],"inset-shadow":[{"inset-shadow":["none",b,So,wo]}],"inset-shadow-color":[{"inset-shadow":V()}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:V()}],"ring-offset-w":[{"ring-offset":[ft,Oa]}],"ring-offset-color":[{"ring-offset":V()}],"inset-ring-w":[{"inset-ring":Q()}],"inset-ring-color":[{"inset-ring":V()}],"text-shadow":[{"text-shadow":["none",w,So,wo]}],"text-shadow-color":[{"text-shadow":V()}],opacity:[{opacity:[ft,W,J]}],"mix-blend":[{"mix-blend":[...pt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":pt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ft]}],"mask-image-linear-from-pos":[{"mask-linear-from":rt()}],"mask-image-linear-to-pos":[{"mask-linear-to":rt()}],"mask-image-linear-from-color":[{"mask-linear-from":V()}],"mask-image-linear-to-color":[{"mask-linear-to":V()}],"mask-image-t-from-pos":[{"mask-t-from":rt()}],"mask-image-t-to-pos":[{"mask-t-to":rt()}],"mask-image-t-from-color":[{"mask-t-from":V()}],"mask-image-t-to-color":[{"mask-t-to":V()}],"mask-image-r-from-pos":[{"mask-r-from":rt()}],"mask-image-r-to-pos":[{"mask-r-to":rt()}],"mask-image-r-from-color":[{"mask-r-from":V()}],"mask-image-r-to-color":[{"mask-r-to":V()}],"mask-image-b-from-pos":[{"mask-b-from":rt()}],"mask-image-b-to-pos":[{"mask-b-to":rt()}],"mask-image-b-from-color":[{"mask-b-from":V()}],"mask-image-b-to-color":[{"mask-b-to":V()}],"mask-image-l-from-pos":[{"mask-l-from":rt()}],"mask-image-l-to-pos":[{"mask-l-to":rt()}],"mask-image-l-from-color":[{"mask-l-from":V()}],"mask-image-l-to-color":[{"mask-l-to":V()}],"mask-image-x-from-pos":[{"mask-x-from":rt()}],"mask-image-x-to-pos":[{"mask-x-to":rt()}],"mask-image-x-from-color":[{"mask-x-from":V()}],"mask-image-x-to-color":[{"mask-x-to":V()}],"mask-image-y-from-pos":[{"mask-y-from":rt()}],"mask-image-y-to-pos":[{"mask-y-to":rt()}],"mask-image-y-from-color":[{"mask-y-from":V()}],"mask-image-y-to-color":[{"mask-y-to":V()}],"mask-image-radial":[{"mask-radial":[W,J]}],"mask-image-radial-from-pos":[{"mask-radial-from":rt()}],"mask-image-radial-to-pos":[{"mask-radial-to":rt()}],"mask-image-radial-from-color":[{"mask-radial-from":V()}],"mask-image-radial-to-color":[{"mask-radial-to":V()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":P()}],"mask-image-conic-pos":[{"mask-conic":[ft]}],"mask-image-conic-from-pos":[{"mask-conic-from":rt()}],"mask-image-conic-to-pos":[{"mask-conic-to":rt()}],"mask-image-conic-from-color":[{"mask-conic-from":V()}],"mask-image-conic-to-color":[{"mask-conic-to":V()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Ct()}],"mask-repeat":[{mask:Et()}],"mask-size":[{mask:z()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",W,J]}],filter:[{filter:["","none",W,J]}],blur:[{blur:Wt()}],brightness:[{brightness:[ft,W,J]}],contrast:[{contrast:[ft,W,J]}],"drop-shadow":[{"drop-shadow":["","none",A,So,wo]}],"drop-shadow-color":[{"drop-shadow":V()}],grayscale:[{grayscale:["",ft,W,J]}],"hue-rotate":[{"hue-rotate":[ft,W,J]}],invert:[{invert:["",ft,W,J]}],saturate:[{saturate:[ft,W,J]}],sepia:[{sepia:["",ft,W,J]}],"backdrop-filter":[{"backdrop-filter":["","none",W,J]}],"backdrop-blur":[{"backdrop-blur":Wt()}],"backdrop-brightness":[{"backdrop-brightness":[ft,W,J]}],"backdrop-contrast":[{"backdrop-contrast":[ft,W,J]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ft,W,J]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ft,W,J]}],"backdrop-invert":[{"backdrop-invert":["",ft,W,J]}],"backdrop-opacity":[{"backdrop-opacity":[ft,W,J]}],"backdrop-saturate":[{"backdrop-saturate":[ft,W,J]}],"backdrop-sepia":[{"backdrop-sepia":["",ft,W,J]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":G()}],"border-spacing-x":[{"border-spacing-x":G()}],"border-spacing-y":[{"border-spacing-y":G()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",W,J]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ft,"initial",W,J]}],ease:[{ease:["linear","initial",O,W,J]}],delay:[{delay:[ft,W,J]}],animate:[{animate:["none",Y,W,J]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[C,W,J]}],"perspective-origin":[{"perspective-origin":Z()}],rotate:[{rotate:Lt()}],"rotate-x":[{"rotate-x":Lt()}],"rotate-y":[{"rotate-y":Lt()}],"rotate-z":[{"rotate-z":Lt()}],scale:[{scale:re()}],"scale-x":[{"scale-x":re()}],"scale-y":[{"scale-y":re()}],"scale-z":[{"scale-z":re()}],"scale-3d":["scale-3d"],skew:[{skew:He()}],"skew-x":[{"skew-x":He()}],"skew-y":[{"skew-y":He()}],transform:[{transform:[W,J,"","none","gpu","cpu"]}],"transform-origin":[{origin:Z()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:qe()}],"translate-x":[{"translate-x":qe()}],"translate-y":[{"translate-y":qe()}],"translate-z":[{"translate-z":qe()}],"translate-none":["translate-none"],accent:[{accent:V()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:V()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",W,J]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":G()}],"scroll-mx":[{"scroll-mx":G()}],"scroll-my":[{"scroll-my":G()}],"scroll-ms":[{"scroll-ms":G()}],"scroll-me":[{"scroll-me":G()}],"scroll-mt":[{"scroll-mt":G()}],"scroll-mr":[{"scroll-mr":G()}],"scroll-mb":[{"scroll-mb":G()}],"scroll-ml":[{"scroll-ml":G()}],"scroll-p":[{"scroll-p":G()}],"scroll-px":[{"scroll-px":G()}],"scroll-py":[{"scroll-py":G()}],"scroll-ps":[{"scroll-ps":G()}],"scroll-pe":[{"scroll-pe":G()}],"scroll-pt":[{"scroll-pt":G()}],"scroll-pr":[{"scroll-pr":G()}],"scroll-pb":[{"scroll-pb":G()}],"scroll-pl":[{"scroll-pl":G()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",W,J]}],fill:[{fill:["none",...V()]}],"stroke-w":[{stroke:[ft,qr,Oa,Od]}],stroke:[{stroke:["none",...V()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},H3=x3(O3);function ot(...a){return H3(tv(a))}function Eu({className:a,...r}){return h.jsx(Pw,{"code-path":"src\\components\\ui\\tabs.tsx:13:5","data-slot":"tabs",className:ot("flex flex-col gap-2",a),...r})}function zu({className:a,...r}){return h.jsx(Iw,{"code-path":"src\\components\\ui\\tabs.tsx:26:5","data-slot":"tabs-list",className:ot("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",a),...r})}function ga({className:a,...r}){return h.jsx(Qw,{"code-path":"src\\components\\ui\\tabs.tsx:42:5","data-slot":"tabs-trigger",className:ot("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),...r})}function ma({className:a,...r}){return h.jsx(Zw,{"code-path":"src\\components\\ui\\tabs.tsx:58:5","data-slot":"tabs-content",className:ot("flex-1 outline-none",a),...r})}var q3=Symbol.for("react.lazy"),Lo=su[" use ".trim().toString()];function U3(a){return typeof a=="object"&&a!==null&&"then"in a}function fv(a){return a!=null&&typeof a=="object"&&"$$typeof"in a&&a.$$typeof===q3&&"_payload"in a&&U3(a._payload)}function Wo(a){const r=F3(a),o=v.forwardRef((l,s)=>{let{children:u,...f}=l;fv(u)&&typeof Lo=="function"&&(u=Lo(u._payload));const p=v.Children.toArray(u),g=p.find(V3);if(g){const m=g.props.children,y=p.map(b=>b===g?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:b);return h.jsx(r,{...f,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,y):null})}return h.jsx(r,{...f,ref:s,children:u})});return o.displayName=`${a}.Slot`,o}var hv=Wo("Slot");function F3(a){const r=v.forwardRef((o,l)=>{let{children:s,...u}=o;if(fv(s)&&typeof Lo=="function"&&(s=Lo(s._payload)),v.isValidElement(s)){const f=$3(s),p=G3(u,s.props);return s.type!==v.Fragment&&(p.ref=l?Zr(l,f):f),v.cloneElement(s,p)}return v.Children.count(s)>1?v.Children.only(null):null});return r.displayName=`${a}.SlotClone`,r}var Y3=Symbol("radix.slottable");function V3(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===Y3}function G3(a,r){const o={...r};for(const l in r){const s=a[l],u=r[l];/^on[A-Z]/.test(l)?s&&u?o[l]=(...p)=>{const g=u(...p);return s(...p),g}:s&&(o[l]=s):l==="style"?o[l]={...s,...u}:l==="className"&&(o[l]=[s,u].filter(Boolean).join(" "))}return{...a,...o}}function $3(a){let r=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?a.ref:(r=Object.getOwnPropertyDescriptor(a,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o?a.props.ref:a.props.ref||a.ref)}const Cm=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,km=tv,gv=(a,r)=>o=>{var l;if(r?.variants==null)return km(a,o?.class,o?.className);const{variants:s,defaultVariants:u}=r,f=Object.keys(s).map(m=>{const y=o?.[m],b=u?.[m];if(y===null)return null;const w=Cm(y)||Cm(b);return s[m][w]}),p=o&&Object.entries(o).reduce((m,y)=>{let[b,w]=y;return w===void 0||(m[b]=w),m},{}),g=r==null||(l=r.compoundVariants)===null||l===void 0?void 0:l.reduce((m,y)=>{let{class:b,className:w,...A}=y;return Object.entries(A).every(R=>{let[C,k]=R;return Array.isArray(k)?k.includes({...u,...p}[C]):{...u,...p}[C]===k})?[...m,b,w]:m},[]);return km(a,f,g,o?.class,o?.className)},X3=gv("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Dn({className:a,variant:r,asChild:o=!1,...l}){const s=o?hv:"span";return h.jsx(s,{"code-path":"src\\components\\ui\\badge.tsx:38:5","data-slot":"badge",className:ot(X3({variant:r}),a),...l})}const P3=gv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function Me({className:a,variant:r="default",size:o="default",asChild:l=!1,...s}){const u=l?hv:"button";return h.jsx(u,{"code-path":"src\\components\\ui\\button.tsx:52:5","data-slot":"button","data-variant":r,"data-size":o,className:ot(P3({variant:r,size:o,className:a})),...s})}function I3(a,r=globalThis?.document){const o=wn(a);v.useEffect(()=>{const l=s=>{s.key==="Escape"&&o(s)};return r.addEventListener("keydown",l,{capture:!0}),()=>r.removeEventListener("keydown",l,{capture:!0})},[o,r])}var Q3="DismissableLayer",eu="dismissableLayer.update",Z3="dismissableLayer.pointerDownOutside",K3="dismissableLayer.focusOutside",Em,mv=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),xv=v.forwardRef((a,r)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:u,onInteractOutside:f,onDismiss:p,...g}=a,m=v.useContext(mv),[y,b]=v.useState(null),w=y?.ownerDocument??globalThis?.document,[,A]=v.useState({}),R=un(r,X=>b(X)),C=Array.from(m.layers),[k]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),O=C.indexOf(k),Y=y?C.indexOf(y):-1,F=m.layersWithOutsidePointerEventsDisabled.size>0,P=Y>=O,Z=tS(X=>{const G=X.target,at=[...m.branches].some(bt=>bt.contains(G));!P||at||(s?.(X),f?.(X),X.defaultPrevented||p?.())},w),tt=nS(X=>{const G=X.target;[...m.branches].some(bt=>bt.contains(G))||(u?.(X),f?.(X),X.defaultPrevented||p?.())},w);return I3(X=>{Y===m.layers.size-1&&(l?.(X),!X.defaultPrevented&&p&&(X.preventDefault(),p()))},w),v.useEffect(()=>{if(y)return o&&(m.layersWithOutsidePointerEventsDisabled.size===0&&(Em=w.body.style.pointerEvents,w.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(y)),m.layers.add(y),zm(),()=>{o&&m.layersWithOutsidePointerEventsDisabled.size===1&&(w.body.style.pointerEvents=Em)}},[y,w,o,m]),v.useEffect(()=>()=>{y&&(m.layers.delete(y),m.layersWithOutsidePointerEventsDisabled.delete(y),zm())},[y,m]),v.useEffect(()=>{const X=()=>A({});return document.addEventListener(eu,X),()=>document.removeEventListener(eu,X)},[]),h.jsx(Zt.div,{...g,ref:R,style:{pointerEvents:F?P?"auto":"none":void 0,...a.style},onFocusCapture:Ft(a.onFocusCapture,tt.onFocusCapture),onBlurCapture:Ft(a.onBlurCapture,tt.onBlurCapture),onPointerDownCapture:Ft(a.onPointerDownCapture,Z.onPointerDownCapture)})});xv.displayName=Q3;var J3="DismissableLayerBranch",W3=v.forwardRef((a,r)=>{const o=v.useContext(mv),l=v.useRef(null),s=un(r,l);return v.useEffect(()=>{const u=l.current;if(u)return o.branches.add(u),()=>{o.branches.delete(u)}},[o.branches]),h.jsx(Zt.div,{...a,ref:s})});W3.displayName=J3;function tS(a,r=globalThis?.document){const o=wn(a),l=v.useRef(!1),s=v.useRef(()=>{});return v.useEffect(()=>{const u=p=>{if(p.target&&!l.current){let g=function(){vv(Z3,o,m,{discrete:!0})};const m={originalEvent:p};p.pointerType==="touch"?(r.removeEventListener("click",s.current),s.current=g,r.addEventListener("click",s.current,{once:!0})):g()}else r.removeEventListener("click",s.current);l.current=!1},f=window.setTimeout(()=>{r.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(f),r.removeEventListener("pointerdown",u),r.removeEventListener("click",s.current)}},[r,o]),{onPointerDownCapture:()=>l.current=!0}}function nS(a,r=globalThis?.document){const o=wn(a),l=v.useRef(!1);return v.useEffect(()=>{const s=u=>{u.target&&!l.current&&vv(K3,o,{originalEvent:u},{discrete:!1})};return r.addEventListener("focusin",s),()=>r.removeEventListener("focusin",s)},[r,o]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}function zm(){const a=new CustomEvent(eu);document.dispatchEvent(a)}function vv(a,r,o,{discrete:l}){const s=o.originalEvent.target,u=new CustomEvent(a,{bubbles:!1,cancelable:!0,detail:o});r&&s.addEventListener(a,r,{once:!0}),l?kw(s,u):s.dispatchEvent(u)}var Hd="focusScope.autoFocusOnMount",qd="focusScope.autoFocusOnUnmount",Am={bubbles:!1,cancelable:!0},eS="FocusScope",bv=v.forwardRef((a,r)=>{const{loop:o=!1,trapped:l=!1,onMountAutoFocus:s,onUnmountAutoFocus:u,...f}=a,[p,g]=v.useState(null),m=wn(s),y=wn(u),b=v.useRef(null),w=un(r,C=>g(C)),A=v.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;v.useEffect(()=>{if(l){let C=function(F){if(A.paused||!p)return;const P=F.target;p.contains(P)?b.current=P:ha(b.current,{select:!0})},k=function(F){if(A.paused||!p)return;const P=F.relatedTarget;P!==null&&(p.contains(P)||ha(b.current,{select:!0}))},O=function(F){if(document.activeElement===document.body)for(const Z of F)Z.removedNodes.length>0&&ha(p)};document.addEventListener("focusin",C),document.addEventListener("focusout",k);const Y=new MutationObserver(O);return p&&Y.observe(p,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",C),document.removeEventListener("focusout",k),Y.disconnect()}}},[l,p,A.paused]),v.useEffect(()=>{if(p){Rm.add(A);const C=document.activeElement;if(!p.contains(C)){const O=new CustomEvent(Hd,Am);p.addEventListener(Hd,m),p.dispatchEvent(O),O.defaultPrevented||(aS(sS(yv(p)),{select:!0}),document.activeElement===C&&ha(p))}return()=>{p.removeEventListener(Hd,m),setTimeout(()=>{const O=new CustomEvent(qd,Am);p.addEventListener(qd,y),p.dispatchEvent(O),O.defaultPrevented||ha(C??document.body,{select:!0}),p.removeEventListener(qd,y),Rm.remove(A)},0)}}},[p,m,y,A]);const R=v.useCallback(C=>{if(!o&&!l||A.paused)return;const k=C.key==="Tab"&&!C.altKey&&!C.ctrlKey&&!C.metaKey,O=document.activeElement;if(k&&O){const Y=C.currentTarget,[F,P]=iS(Y);F&&P?!C.shiftKey&&O===P?(C.preventDefault(),o&&ha(F,{select:!0})):C.shiftKey&&O===F&&(C.preventDefault(),o&&ha(P,{select:!0})):O===Y&&C.preventDefault()}},[o,l,A.paused]);return h.jsx(Zt.div,{tabIndex:-1,...f,ref:w,onKeyDown:R})});bv.displayName=eS;function aS(a,{select:r=!1}={}){const o=document.activeElement;for(const l of a)if(ha(l,{select:r}),document.activeElement!==o)return}function iS(a){const r=yv(a),o=Tm(r,a),l=Tm(r.reverse(),a);return[o,l]}function yv(a){const r=[],o=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:l=>{const s=l.tagName==="INPUT"&&l.type==="hidden";return l.disabled||l.hidden||s?NodeFilter.FILTER_SKIP:l.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)r.push(o.currentNode);return r}function Tm(a,r){for(const o of a)if(!rS(o,{upTo:r}))return o}function rS(a,{upTo:r}){if(getComputedStyle(a).visibility==="hidden")return!0;for(;a;){if(r!==void 0&&a===r)return!1;if(getComputedStyle(a).display==="none")return!0;a=a.parentElement}return!1}function lS(a){return a instanceof HTMLInputElement&&"select"in a}function ha(a,{select:r=!1}={}){if(a&&a.focus){const o=document.activeElement;a.focus({preventScroll:!0}),a!==o&&lS(a)&&r&&a.select()}}var Rm=oS();function oS(){let a=[];return{add(r){const o=a[0];r!==o&&o?.pause(),a=Nm(a,r),a.unshift(r)},remove(r){a=Nm(a,r),a[0]?.resume()}}}function Nm(a,r){const o=[...a],l=o.indexOf(r);return l!==-1&&o.splice(l,1),o}function sS(a){return a.filter(r=>r.tagName!=="A")}var cS="Portal",_v=v.forwardRef((a,r)=>{const{container:o,...l}=a,[s,u]=v.useState(!1);Be(()=>u(!0),[]);const f=o||s&&globalThis?.document?.body;return f?xw.createPortal(h.jsx(Zt.div,{...l,ref:r}),f):null});_v.displayName=cS;var Ud=0;function dS(){v.useEffect(()=>{const a=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",a[0]??jm()),document.body.insertAdjacentElement("beforeend",a[1]??jm()),Ud++,()=>{Ud===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Ud--}},[])}function jm(){const a=document.createElement("span");return a.setAttribute("data-radix-focus-guard",""),a.tabIndex=0,a.style.outline="none",a.style.opacity="0",a.style.position="fixed",a.style.pointerEvents="none",a}var de=function(){return de=Object.assign||function(r){for(var o,l=1,s=arguments.length;l<s;l++){o=arguments[l];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(r[u]=o[u])}return r},de.apply(this,arguments)};function wv(a,r){var o={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&r.indexOf(l)<0&&(o[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,l=Object.getOwnPropertySymbols(a);s<l.length;s++)r.indexOf(l[s])<0&&Object.prototype.propertyIsEnumerable.call(a,l[s])&&(o[l[s]]=a[l[s]]);return o}function uS(a,r,o){if(o||arguments.length===2)for(var l=0,s=r.length,u;l<s;l++)(u||!(l in r))&&(u||(u=Array.prototype.slice.call(r,0,l)),u[l]=r[l]);return a.concat(u||Array.prototype.slice.call(r))}var jo="right-scroll-bar-position",Mo="width-before-scroll-bar",pS="with-scroll-bars-hidden",fS="--removed-body-scroll-bar-size";function Fd(a,r){return typeof a=="function"?a(r):a&&(a.current=r),a}function hS(a,r){var o=v.useState(function(){return{value:a,callback:r,facade:{get current(){return o.value},set current(l){var s=o.value;s!==l&&(o.value=l,o.callback(l,s))}}}})[0];return o.callback=r,o.facade}var gS=typeof window<"u"?v.useLayoutEffect:v.useEffect,Mm=new WeakMap;function mS(a,r){var o=hS(null,function(l){return a.forEach(function(s){return Fd(s,l)})});return gS(function(){var l=Mm.get(o);if(l){var s=new Set(l),u=new Set(a),f=o.current;s.forEach(function(p){u.has(p)||Fd(p,null)}),u.forEach(function(p){s.has(p)||Fd(p,f)})}Mm.set(o,a)},[a]),o}function xS(a){return a}function vS(a,r){r===void 0&&(r=xS);var o=[],l=!1,s={read:function(){if(l)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return o.length?o[o.length-1]:a},useMedium:function(u){var f=r(u,l);return o.push(f),function(){o=o.filter(function(p){return p!==f})}},assignSyncMedium:function(u){for(l=!0;o.length;){var f=o;o=[],f.forEach(u)}o={push:function(p){return u(p)},filter:function(){return o}}},assignMedium:function(u){l=!0;var f=[];if(o.length){var p=o;o=[],p.forEach(u),f=o}var g=function(){var y=f;f=[],y.forEach(u)},m=function(){return Promise.resolve().then(g)};m(),o={push:function(y){f.push(y),m()},filter:function(y){return f=f.filter(y),o}}}};return s}function bS(a){a===void 0&&(a={});var r=vS(null);return r.options=de({async:!0,ssr:!1},a),r}var Sv=function(a){var r=a.sideCar,o=wv(a,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var l=r.read();if(!l)throw new Error("Sidecar medium not found");return v.createElement(l,de({},o))};Sv.isSideCarExport=!0;function yS(a,r){return a.useMedium(r),Sv}var Cv=bS(),Yd=function(){},ts=v.forwardRef(function(a,r){var o=v.useRef(null),l=v.useState({onScrollCapture:Yd,onWheelCapture:Yd,onTouchMoveCapture:Yd}),s=l[0],u=l[1],f=a.forwardProps,p=a.children,g=a.className,m=a.removeScrollBar,y=a.enabled,b=a.shards,w=a.sideCar,A=a.noRelative,R=a.noIsolation,C=a.inert,k=a.allowPinchZoom,O=a.as,Y=O===void 0?"div":O,F=a.gapMode,P=wv(a,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),Z=w,tt=mS([o,r]),X=de(de({},P),s);return v.createElement(v.Fragment,null,y&&v.createElement(Z,{sideCar:Cv,removeScrollBar:m,shards:b,noRelative:A,noIsolation:R,inert:C,setCallbacks:u,allowPinchZoom:!!k,lockRef:o,gapMode:F}),f?v.cloneElement(v.Children.only(p),de(de({},X),{ref:tt})):v.createElement(Y,de({},X,{className:g,ref:tt}),p))});ts.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ts.classNames={fullWidth:Mo,zeroRight:jo};var _S=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function wS(){if(!document)return null;var a=document.createElement("style");a.type="text/css";var r=_S();return r&&a.setAttribute("nonce",r),a}function SS(a,r){a.styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r))}function CS(a){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(a)}var kS=function(){var a=0,r=null;return{add:function(o){a==0&&(r=wS())&&(SS(r,o),CS(r)),a++},remove:function(){a--,!a&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},ES=function(){var a=kS();return function(r,o){v.useEffect(function(){return a.add(r),function(){a.remove()}},[r&&o])}},kv=function(){var a=ES(),r=function(o){var l=o.styles,s=o.dynamic;return a(l,s),null};return r},zS={left:0,top:0,right:0,gap:0},Vd=function(a){return parseInt(a||"",10)||0},AS=function(a){var r=window.getComputedStyle(document.body),o=r[a==="padding"?"paddingLeft":"marginLeft"],l=r[a==="padding"?"paddingTop":"marginTop"],s=r[a==="padding"?"paddingRight":"marginRight"];return[Vd(o),Vd(l),Vd(s)]},TS=function(a){if(a===void 0&&(a="margin"),typeof window>"u")return zS;var r=AS(a),o=document.documentElement.clientWidth,l=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,l-o+r[2]-r[0])}},RS=kv(),Di="data-scroll-locked",NS=function(a,r,o,l){var s=a.left,u=a.top,f=a.right,p=a.gap;return o===void 0&&(o="margin"),`
  .`.concat(pS,` {
   overflow: hidden `).concat(l,`;
   padding-right: `).concat(p,"px ").concat(l,`;
  }
  body[`).concat(Di,`] {
    overflow: hidden `).concat(l,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(l,";"),o==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p,"px ").concat(l,`;
    `),o==="padding"&&"padding-right: ".concat(p,"px ").concat(l,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(jo,` {
    right: `).concat(p,"px ").concat(l,`;
  }
  
  .`).concat(Mo,` {
    margin-right: `).concat(p,"px ").concat(l,`;
  }
  
  .`).concat(jo," .").concat(jo,` {
    right: 0 `).concat(l,`;
  }
  
  .`).concat(Mo," .").concat(Mo,` {
    margin-right: 0 `).concat(l,`;
  }
  
  body[`).concat(Di,`] {
    `).concat(fS,": ").concat(p,`px;
  }
`)},Dm=function(){var a=parseInt(document.body.getAttribute(Di)||"0",10);return isFinite(a)?a:0},jS=function(){v.useEffect(function(){return document.body.setAttribute(Di,(Dm()+1).toString()),function(){var a=Dm()-1;a<=0?document.body.removeAttribute(Di):document.body.setAttribute(Di,a.toString())}},[])},MS=function(a){var r=a.noRelative,o=a.noImportant,l=a.gapMode,s=l===void 0?"margin":l;jS();var u=v.useMemo(function(){return TS(s)},[s]);return v.createElement(RS,{styles:NS(u,!r,s,o?"":"!important")})},au=!1;if(typeof window<"u")try{var Co=Object.defineProperty({},"passive",{get:function(){return au=!0,!0}});window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{au=!1}var Ri=au?{passive:!1}:!1,DS=function(a){return a.tagName==="TEXTAREA"},Ev=function(a,r){if(!(a instanceof Element))return!1;var o=window.getComputedStyle(a);return o[r]!=="hidden"&&!(o.overflowY===o.overflowX&&!DS(a)&&o[r]==="visible")},BS=function(a){return Ev(a,"overflowY")},LS=function(a){return Ev(a,"overflowX")},Bm=function(a,r){var o=r.ownerDocument,l=r;do{typeof ShadowRoot<"u"&&l instanceof ShadowRoot&&(l=l.host);var s=zv(a,l);if(s){var u=Av(a,l),f=u[1],p=u[2];if(f>p)return!0}l=l.parentNode}while(l&&l!==o.body);return!1},OS=function(a){var r=a.scrollTop,o=a.scrollHeight,l=a.clientHeight;return[r,o,l]},HS=function(a){var r=a.scrollLeft,o=a.scrollWidth,l=a.clientWidth;return[r,o,l]},zv=function(a,r){return a==="v"?BS(r):LS(r)},Av=function(a,r){return a==="v"?OS(r):HS(r)},qS=function(a,r){return a==="h"&&r==="rtl"?-1:1},US=function(a,r,o,l,s){var u=qS(a,window.getComputedStyle(r).direction),f=u*l,p=o.target,g=r.contains(p),m=!1,y=f>0,b=0,w=0;do{if(!p)break;var A=Av(a,p),R=A[0],C=A[1],k=A[2],O=C-k-u*R;(R||O)&&zv(a,p)&&(b+=O,w+=R);var Y=p.parentNode;p=Y&&Y.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Y.host:Y}while(!g&&p!==document.body||g&&(r.contains(p)||r===p));return(y&&Math.abs(b)<1||!y&&Math.abs(w)<1)&&(m=!0),m},ko=function(a){return"changedTouches"in a?[a.changedTouches[0].clientX,a.changedTouches[0].clientY]:[0,0]},Lm=function(a){return[a.deltaX,a.deltaY]},Om=function(a){return a&&"current"in a?a.current:a},FS=function(a,r){return a[0]===r[0]&&a[1]===r[1]},YS=function(a){return`
  .block-interactivity-`.concat(a,` {pointer-events: none;}
  .allow-interactivity-`).concat(a,` {pointer-events: all;}
`)},VS=0,Ni=[];function GS(a){var r=v.useRef([]),o=v.useRef([0,0]),l=v.useRef(),s=v.useState(VS++)[0],u=v.useState(kv)[0],f=v.useRef(a);v.useEffect(function(){f.current=a},[a]),v.useEffect(function(){if(a.inert){document.body.classList.add("block-interactivity-".concat(s));var C=uS([a.lockRef.current],(a.shards||[]).map(Om),!0).filter(Boolean);return C.forEach(function(k){return k.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),C.forEach(function(k){return k.classList.remove("allow-interactivity-".concat(s))})}}},[a.inert,a.lockRef.current,a.shards]);var p=v.useCallback(function(C,k){if("touches"in C&&C.touches.length===2||C.type==="wheel"&&C.ctrlKey)return!f.current.allowPinchZoom;var O=ko(C),Y=o.current,F="deltaX"in C?C.deltaX:Y[0]-O[0],P="deltaY"in C?C.deltaY:Y[1]-O[1],Z,tt=C.target,X=Math.abs(F)>Math.abs(P)?"h":"v";if("touches"in C&&X==="h"&&tt.type==="range")return!1;var G=window.getSelection(),at=G&&G.anchorNode,bt=at?at===tt||at.contains(tt):!1;if(bt)return!1;var St=Bm(X,tt);if(!St)return!0;if(St?Z=X:(Z=X==="v"?"h":"v",St=Bm(X,tt)),!St)return!1;if(!l.current&&"changedTouches"in C&&(F||P)&&(l.current=Z),!Z)return!0;var Dt=l.current||Z;return US(Dt,k,C,Dt==="h"?F:P)},[]),g=v.useCallback(function(C){var k=C;if(!(!Ni.length||Ni[Ni.length-1]!==u)){var O="deltaY"in k?Lm(k):ko(k),Y=r.current.filter(function(Z){return Z.name===k.type&&(Z.target===k.target||k.target===Z.shadowParent)&&FS(Z.delta,O)})[0];if(Y&&Y.should){k.cancelable&&k.preventDefault();return}if(!Y){var F=(f.current.shards||[]).map(Om).filter(Boolean).filter(function(Z){return Z.contains(k.target)}),P=F.length>0?p(k,F[0]):!f.current.noIsolation;P&&k.cancelable&&k.preventDefault()}}},[]),m=v.useCallback(function(C,k,O,Y){var F={name:C,delta:k,target:O,should:Y,shadowParent:$S(O)};r.current.push(F),setTimeout(function(){r.current=r.current.filter(function(P){return P!==F})},1)},[]),y=v.useCallback(function(C){o.current=ko(C),l.current=void 0},[]),b=v.useCallback(function(C){m(C.type,Lm(C),C.target,p(C,a.lockRef.current))},[]),w=v.useCallback(function(C){m(C.type,ko(C),C.target,p(C,a.lockRef.current))},[]);v.useEffect(function(){return Ni.push(u),a.setCallbacks({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:w}),document.addEventListener("wheel",g,Ri),document.addEventListener("touchmove",g,Ri),document.addEventListener("touchstart",y,Ri),function(){Ni=Ni.filter(function(C){return C!==u}),document.removeEventListener("wheel",g,Ri),document.removeEventListener("touchmove",g,Ri),document.removeEventListener("touchstart",y,Ri)}},[]);var A=a.removeScrollBar,R=a.inert;return v.createElement(v.Fragment,null,R?v.createElement(u,{styles:YS(s)}):null,A?v.createElement(MS,{noRelative:a.noRelative,gapMode:a.gapMode}):null)}function $S(a){for(var r=null;a!==null;)a instanceof ShadowRoot&&(r=a.host,a=a.host),a=a.parentNode;return r}const XS=yS(Cv,GS);var Tv=v.forwardRef(function(a,r){return v.createElement(ts,de({},a,{ref:r,sideCar:XS}))});Tv.classNames=ts.classNames;var PS=function(a){if(typeof document>"u")return null;var r=Array.isArray(a)?a[0]:a;return r.ownerDocument.body},ji=new WeakMap,Eo=new WeakMap,zo={},Gd=0,Rv=function(a){return a&&(a.host||Rv(a.parentNode))},IS=function(a,r){return r.map(function(o){if(a.contains(o))return o;var l=Rv(o);return l&&a.contains(l)?l:(console.error("aria-hidden",o,"in not contained inside",a,". Doing nothing"),null)}).filter(function(o){return!!o})},QS=function(a,r,o,l){var s=IS(r,Array.isArray(a)?a:[a]);zo[o]||(zo[o]=new WeakMap);var u=zo[o],f=[],p=new Set,g=new Set(s),m=function(b){!b||p.has(b)||(p.add(b),m(b.parentNode))};s.forEach(m);var y=function(b){!b||g.has(b)||Array.prototype.forEach.call(b.children,function(w){if(p.has(w))y(w);else try{var A=w.getAttribute(l),R=A!==null&&A!=="false",C=(ji.get(w)||0)+1,k=(u.get(w)||0)+1;ji.set(w,C),u.set(w,k),f.push(w),C===1&&R&&Eo.set(w,!0),k===1&&w.setAttribute(o,"true"),R||w.setAttribute(l,"true")}catch(O){console.error("aria-hidden: cannot operate on ",w,O)}})};return y(r),p.clear(),Gd++,function(){f.forEach(function(b){var w=ji.get(b)-1,A=u.get(b)-1;ji.set(b,w),u.set(b,A),w||(Eo.has(b)||b.removeAttribute(l),Eo.delete(b)),A||b.removeAttribute(o)}),Gd--,Gd||(ji=new WeakMap,ji=new WeakMap,Eo=new WeakMap,zo={})}},ZS=function(a,r,o){o===void 0&&(o="data-aria-hidden");var l=Array.from(Array.isArray(a)?a:[a]),s=PS(a);return s?(l.push.apply(l,Array.from(s.querySelectorAll("[aria-live], script"))),QS(l,s,o,"aria-hidden")):function(){return null}};function KS(a){const r=JS(a),o=v.forwardRef((l,s)=>{const{children:u,...f}=l,p=v.Children.toArray(u),g=p.find(t5);if(g){const m=g.props.children,y=p.map(b=>b===g?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:b);return h.jsx(r,{...f,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,y):null})}return h.jsx(r,{...f,ref:s,children:u})});return o.displayName=`${a}.Slot`,o}function JS(a){const r=v.forwardRef((o,l)=>{const{children:s,...u}=o;if(v.isValidElement(s)){const f=e5(s),p=n5(u,s.props);return s.type!==v.Fragment&&(p.ref=l?Zr(l,f):f),v.cloneElement(s,p)}return v.Children.count(s)>1?v.Children.only(null):null});return r.displayName=`${a}.SlotClone`,r}var WS=Symbol("radix.slottable");function t5(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===WS}function n5(a,r){const o={...r};for(const l in r){const s=a[l],u=r[l];/^on[A-Z]/.test(l)?s&&u?o[l]=(...p)=>{const g=u(...p);return s(...p),g}:s&&(o[l]=s):l==="style"?o[l]={...s,...u}:l==="className"&&(o[l]=[s,u].filter(Boolean).join(" "))}return{...a,...o}}function e5(a){let r=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?a.ref:(r=Object.getOwnPropertyDescriptor(a,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o?a.props.ref:a.props.ref||a.ref)}var ns="Dialog",[Nv]=Qr(ns),[a5,ie]=Nv(ns),jv=a=>{const{__scopeDialog:r,children:o,open:l,defaultOpen:s,onOpenChange:u,modal:f=!0}=a,p=v.useRef(null),g=v.useRef(null),[m,y]=wu({prop:l,defaultProp:s??!1,onChange:u,caller:ns});return h.jsx(a5,{scope:r,triggerRef:p,contentRef:g,contentId:Vr(),titleId:Vr(),descriptionId:Vr(),open:m,onOpenChange:y,onOpenToggle:v.useCallback(()=>y(b=>!b),[y]),modal:f,children:o})};jv.displayName=ns;var Mv="DialogTrigger",i5=v.forwardRef((a,r)=>{const{__scopeDialog:o,...l}=a,s=ie(Mv,o),u=un(r,s.triggerRef);return h.jsx(Zt.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":Ru(s.open),...l,ref:u,onClick:Ft(a.onClick,s.onOpenToggle)})});i5.displayName=Mv;var Au="DialogPortal",[r5,Dv]=Nv(Au,{forceMount:void 0}),Bv=a=>{const{__scopeDialog:r,forceMount:o,children:l,container:s}=a,u=ie(Au,r);return h.jsx(r5,{scope:r,forceMount:o,children:v.Children.map(l,f=>h.jsx(Le,{present:o||u.open,children:h.jsx(_v,{asChild:!0,container:s,children:f})}))})};Bv.displayName=Au;var Oo="DialogOverlay",Lv=v.forwardRef((a,r)=>{const o=Dv(Oo,a.__scopeDialog),{forceMount:l=o.forceMount,...s}=a,u=ie(Oo,a.__scopeDialog);return u.modal?h.jsx(Le,{present:l||u.open,children:h.jsx(o5,{...s,ref:r})}):null});Lv.displayName=Oo;var l5=KS("DialogOverlay.RemoveScroll"),o5=v.forwardRef((a,r)=>{const{__scopeDialog:o,...l}=a,s=ie(Oo,o);return h.jsx(Tv,{as:l5,allowPinchZoom:!0,shards:[s.contentRef],children:h.jsx(Zt.div,{"data-state":Ru(s.open),...l,ref:r,style:{pointerEvents:"auto",...l.style}})})}),Fa="DialogContent",Ov=v.forwardRef((a,r)=>{const o=Dv(Fa,a.__scopeDialog),{forceMount:l=o.forceMount,...s}=a,u=ie(Fa,a.__scopeDialog);return h.jsx(Le,{present:l||u.open,children:u.modal?h.jsx(s5,{...s,ref:r}):h.jsx(c5,{...s,ref:r})})});Ov.displayName=Fa;var s5=v.forwardRef((a,r)=>{const o=ie(Fa,a.__scopeDialog),l=v.useRef(null),s=un(r,o.contentRef,l);return v.useEffect(()=>{const u=l.current;if(u)return ZS(u)},[]),h.jsx(Hv,{...a,ref:s,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Ft(a.onCloseAutoFocus,u=>{u.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:Ft(a.onPointerDownOutside,u=>{const f=u.detail.originalEvent,p=f.button===0&&f.ctrlKey===!0;(f.button===2||p)&&u.preventDefault()}),onFocusOutside:Ft(a.onFocusOutside,u=>u.preventDefault())})}),c5=v.forwardRef((a,r)=>{const o=ie(Fa,a.__scopeDialog),l=v.useRef(!1),s=v.useRef(!1);return h.jsx(Hv,{...a,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:u=>{a.onCloseAutoFocus?.(u),u.defaultPrevented||(l.current||o.triggerRef.current?.focus(),u.preventDefault()),l.current=!1,s.current=!1},onInteractOutside:u=>{a.onInteractOutside?.(u),u.defaultPrevented||(l.current=!0,u.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const f=u.target;o.triggerRef.current?.contains(f)&&u.preventDefault(),u.detail.originalEvent.type==="focusin"&&s.current&&u.preventDefault()}})}),Hv=v.forwardRef((a,r)=>{const{__scopeDialog:o,trapFocus:l,onOpenAutoFocus:s,onCloseAutoFocus:u,...f}=a,p=ie(Fa,o),g=v.useRef(null),m=un(r,g);return dS(),h.jsxs(h.Fragment,{children:[h.jsx(bv,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:s,onUnmountAutoFocus:u,children:h.jsx(xv,{role:"dialog",id:p.contentId,"aria-describedby":p.descriptionId,"aria-labelledby":p.titleId,"data-state":Ru(p.open),...f,ref:m,onDismiss:()=>p.onOpenChange(!1)})}),h.jsxs(h.Fragment,{children:[h.jsx(u5,{titleId:p.titleId}),h.jsx(f5,{contentRef:g,descriptionId:p.descriptionId})]})]})}),Tu="DialogTitle",qv=v.forwardRef((a,r)=>{const{__scopeDialog:o,...l}=a,s=ie(Tu,o);return h.jsx(Zt.h2,{id:s.titleId,...l,ref:r})});qv.displayName=Tu;var Uv="DialogDescription",d5=v.forwardRef((a,r)=>{const{__scopeDialog:o,...l}=a,s=ie(Uv,o);return h.jsx(Zt.p,{id:s.descriptionId,...l,ref:r})});d5.displayName=Uv;var Fv="DialogClose",Yv=v.forwardRef((a,r)=>{const{__scopeDialog:o,...l}=a,s=ie(Fv,o);return h.jsx(Zt.button,{type:"button",...l,ref:r,onClick:Ft(a.onClick,()=>s.onOpenChange(!1))})});Yv.displayName=Fv;function Ru(a){return a?"open":"closed"}var Vv="DialogTitleWarning",[Rk,Gv]=ow(Vv,{contentName:Fa,titleName:Tu,docsSlug:"dialog"}),u5=({titleId:a})=>{const r=Gv(Vv),o=`\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;return v.useEffect(()=>{a&&(document.getElementById(a)||console.error(o))},[o,a]),null},p5="DialogDescriptionWarning",f5=({contentRef:a,descriptionId:r})=>{const l=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Gv(p5).contentName}}.`;return v.useEffect(()=>{const s=a.current?.getAttribute("aria-describedby");r&&s&&(document.getElementById(r)||console.warn(l))},[l,a,r]),null},$v=jv,Xv=Bv,Pv=Lv,Iv=Ov,Qv=qv,Zv=Yv;function h5({...a}){return h.jsx($v,{"code-path":"src\\components\\ui\\dialog.tsx:10:10","data-slot":"dialog",...a})}function g5({...a}){return h.jsx(Xv,{"code-path":"src\\components\\ui\\dialog.tsx:22:10","data-slot":"dialog-portal",...a})}function m5({className:a,...r}){return h.jsx(Pv,{"code-path":"src\\components\\ui\\dialog.tsx:36:5","data-slot":"dialog-overlay",className:ot("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",a),...r})}function x5({className:a,children:r,showCloseButton:o=!0,...l}){return h.jsxs(g5,{"code-path":"src\\components\\ui\\dialog.tsx:56:5","data-slot":"dialog-portal",children:[h.jsx(m5,{"code-path":"src\\components\\ui\\dialog.tsx:57:7"}),h.jsxs(Iv,{"code-path":"src\\components\\ui\\dialog.tsx:58:7","data-slot":"dialog-content",className:ot("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",a),...l,children:[r,o&&h.jsxs(Zv,{"code-path":"src\\components\\ui\\dialog.tsx:68:11","data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[h.jsx(Bx,{"code-path":"src\\components\\ui\\dialog.tsx:72:13"}),h.jsx("span",{"code-path":"src\\components\\ui\\dialog.tsx:73:13",className:"sr-only",children:"Close"})]})]})]})}function v5({className:a,...r}){return h.jsx("div",{"code-path":"src\\components\\ui\\dialog.tsx:83:5","data-slot":"dialog-header",className:ot("flex flex-col gap-2 text-center sm:text-left",a),...r})}function b5({className:a,...r}){return h.jsx("div",{"code-path":"src\\components\\ui\\dialog.tsx:93:5","data-slot":"dialog-footer",className:ot("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",a),...r})}function y5({className:a,...r}){return h.jsx(Qv,{"code-path":"src\\components\\ui\\dialog.tsx:109:5","data-slot":"dialog-title",className:ot("text-lg leading-none font-semibold",a),...r})}function $d({className:a,type:r,...o}){return h.jsx("input",{"code-path":"src\\components\\ui\\input.tsx:7:5",type:r,"data-slot":"input",className:ot("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",a),...o})}var _5=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],w5=_5.reduce((a,r)=>{const o=Wo(`Primitive.${r}`),l=v.forwardRef((s,u)=>{const{asChild:f,...p}=s,g=f?o:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),h.jsx(g,{...p,ref:u})});return l.displayName=`Primitive.${r}`,{...a,[r]:l}},{}),S5="Label",Kv=v.forwardRef((a,r)=>h.jsx(w5.label,{...a,ref:r,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(a.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}}));Kv.displayName=S5;var C5=Kv;function Xd({className:a,...r}){return h.jsx(C5,{"code-path":"src\\components\\ui\\label.tsx:13:5","data-slot":"label",className:ot("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",a),...r})}function k5(a,r=[]){let o=[];function l(u,f){const p=v.createContext(f);p.displayName=u+"Context";const g=o.length;o=[...o,f];const m=b=>{const{scope:w,children:A,...R}=b,C=w?.[a]?.[g]||p,k=v.useMemo(()=>R,Object.values(R));return h.jsx(C.Provider,{value:k,children:A})};m.displayName=u+"Provider";function y(b,w){const A=w?.[a]?.[g]||p,R=v.useContext(A);if(R)return R;if(f!==void 0)return f;throw new Error(`\`${b}\` must be used within \`${u}\``)}return[m,y]}const s=()=>{const u=o.map(f=>v.createContext(f));return function(p){const g=p?.[a]||u;return v.useMemo(()=>({[`__scope${a}`]:{...p,[a]:g}}),[p,g])}};return s.scopeName=a,[l,E5(s,...r)]}function E5(...a){const r=a[0];if(a.length===1)return r;const o=()=>{const l=a.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(u){const f=l.reduce((p,{useScope:g,scopeName:m})=>{const b=g(u)[`__scope${m}`];return{...p,...b}},{});return v.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return o.scopeName=r.scopeName,o}var z5=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Jv=z5.reduce((a,r)=>{const o=Wo(`Primitive.${r}`),l=v.forwardRef((s,u)=>{const{asChild:f,...p}=s,g=f?o:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),h.jsx(g,{...p,ref:u})});return l.displayName=`Primitive.${r}`,{...a,[r]:l}},{}),Nu="Progress",ju=100,[A5]=k5(Nu),[T5,R5]=A5(Nu),Wv=v.forwardRef((a,r)=>{const{__scopeProgress:o,value:l=null,max:s,getValueLabel:u=N5,...f}=a;(s||s===0)&&!Hm(s)&&console.error(j5(`${s}`,"Progress"));const p=Hm(s)?s:ju;l!==null&&!qm(l,p)&&console.error(M5(`${l}`,"Progress"));const g=qm(l,p)?l:null,m=Ho(g)?u(g,p):void 0;return h.jsx(T5,{scope:o,value:g,max:p,children:h.jsx(Jv.div,{"aria-valuemax":p,"aria-valuemin":0,"aria-valuenow":Ho(g)?g:void 0,"aria-valuetext":m,role:"progressbar","data-state":eb(g,p),"data-value":g??void 0,"data-max":p,...f,ref:r})})});Wv.displayName=Nu;var tb="ProgressIndicator",nb=v.forwardRef((a,r)=>{const{__scopeProgress:o,...l}=a,s=R5(tb,o);return h.jsx(Jv.div,{"data-state":eb(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...l,ref:r})});nb.displayName=tb;function N5(a,r){return`${Math.round(a/r*100)}%`}function eb(a,r){return a==null?"indeterminate":a===r?"complete":"loading"}function Ho(a){return typeof a=="number"}function Hm(a){return Ho(a)&&!isNaN(a)&&a>0}function qm(a,r){return Ho(a)&&!isNaN(a)&&a<=r&&a>=0}function j5(a,r){return`Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ju}\`.`}function M5(a,r){return`Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ju} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var D5=Wv,B5=nb;function Yi({className:a,value:r,...o}){return h.jsx(D5,{"code-path":"src\\components\\ui\\progress.tsx:12:5","data-slot":"progress",className:ot("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",a),...o,children:h.jsx(B5,{"code-path":"src\\components\\ui\\progress.tsx:20:7","data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})})}const Mu={name:"妹妹",grade:"2026 级本科",college:"生命科学学院",major:"生物科学（师范）",campus:"净月校区",goals:["托福 100+","保研","进实验室做科研","GPA 3.7+"],interests:["AI 工具","读书","羽毛球","志愿服务"]},ab=[{id:"n3",title:"东序琢玉 师道兴邦——东北师范大学向党和人民报告",summary:"学校发布办学成果报告，回顾八十载文脉与新时代育人成就，致敬第 42 个教师节。",date:"2026-09-11",source:"东北师范大学官网",url:"https://www.nenu.edu.cn/yjds/a2026.htm",tag:"学校要闻",keywords:["师范","师道","育人","校史"],impact:"这是理解东师「师范底色」的最好材料：你是师范专业，培养目标、就业方向、学校资源都在这里。读懂它能帮你从大一定位自己四年后的出口（读研 / 从教 / 考编）。",action:"抽 20 分钟读一遍报告全文，写 3 句自己的理解，以后教育实习面试用得上。"},{id:"n1",title:"东北师范大学举行 2026 级学生开学典礼",summary:"2026 级新同学正式加入东师大家庭，校长寄语新生“勤奋创新、为人师表”，开启大学生活新篇章。",date:"2026-09-07",source:"东北师范大学官网",url:"https://www.nenu.edu.cn/yjds/a2026.htm",tag:"学校要闻",keywords:["2026级","新生","开学典礼","本科生","迎新"],impact:"这就是你的开学典礼——大学生活正式起点。开学前两周的信息密度最高：班级群、辅导员、选课通知、宿舍安排都在这段时间发布，错过任何一条都可能影响入学手续和选课。",action:"确认班级群和辅导员联系方式已加好，把学院迎新安排标进日历。"},{id:"n2",title:"我校教师在《Science》报道手性高张力小环合成重要进展",summary:"化学学院团队在《Science》发表研究成果，报道手性高张力小环合成的重要进展，展现东师科研实力。",date:"2026-09",source:"东北师范大学官网",url:"https://www.nenu.edu.cn/yjds/a2026.htm",tag:"学术科研",keywords:["科研","实验室","保研","学术","化学","生物","论文"],impact:"和你生物专业强相关：学科交叉的科研氛围意味着大创项目、进实验室的机会比想象中多。科研经历是保研和申请交换的硬通货，越早进组越好。",action:"记下这件事，10 月关注「大学生创新创业训练项目」申报通知，先联系一位任课老师聊聊进组。"},{id:"n9",title:"东北师范大学 80 周年校庆公告（第二号）",summary:"建校 80 周年校庆进入倒计时，学校发布第二号公告，预告校庆年期间系列学术、文化活动安排。",date:"2026-08",source:"东北师范大学官网",url:"https://www.nenu.edu.cn/yjds/a2026/a2026n8y.htm",tag:"学校要闻",keywords:["校庆","80周年","校史","活动","校友","志愿"],impact:"全年最大的校园事件。校庆年有密集的名家讲座、校友返校和纪念活动——是低成本见大牛、攒讲座学分、认识校友资源的窗口期；志愿者招募也是综测加分项。",action:"关注校庆后续公告（第三号），有志愿者或学生工作人员招募就报名。"},{id:"n11",title:"图书馆「声声」不息，书香永传主题活动开启",summary:"校图书馆推出阅读推广系列活动，含朗读、共读与读书笔记征集，参与可获积分与纪念周边。",date:"2026-08-14",source:"东北师范大学通知公告",url:"https://www.nenu.edu.cn/tzgg.htm",tag:"校园生活",keywords:["图书馆","读书","活动","书香","笔记"],impact:"直接福利：读书活动通常有赠书、积分和综测加分。你本来就有读书计划，顺手参加零成本；写读书笔记的习惯对托福写作也是隐性训练。",action:"这周末去一次图书馆，借一本专业相关的科普书，报名一个共读活动。"},{id:"n10",title:"首届东北四校「国优计划」研究生学位授予仪式在校举行",summary:"东北四校联合培养的国家优秀中小学教师培养计划（国优计划）首届研究生完成学业，学位授予仪式在我校举行。",date:"2026-06",source:"东北师范大学官网",url:"https://www.nenu.edu.cn/yjds/a2026/a2026n8y.htm",tag:"学校要闻",keywords:["研究生","国优计划","教师教育","学位","保研","师范"],impact:"国家层面的教师培养计划落在东师，说明师范方向研究生学历的含金量在持续加码——这直接关系你 4 年后的保研 / 读研选择，值得提前知道这条路径存在。",action:"先收藏了解即可，大二再深入研究「国优计划」的选拔条件。"},{id:"n5",title:"教育人工智能微专业招生简章发布",summary:"信息科学与技术学院开设教育人工智能微专业，面向全校招生，适合对 AI+教育感兴趣的同学辅修。",date:"2026-05-28",source:"信息科学与技术学院",url:"https://ist.nenu.edu.cn/index/xytz/48.htm",tag:"招生就业",keywords:["AI","人工智能","微专业","辅修","计算机","教育"],impact:"和你的 AI 兴趣 + 师范方向高度契合：教育 AI 是「生物师范 × 技术」差异化的完美交叉点。微专业学分成本低于双学位，是简历和申请交换的加分项。",action:"查简章确认报名条件、学分要求和上课时间，再决定要不要报。"},{id:"n4",title:"东北师大新增 2 个双学士学位项目（2026 年获批）",summary:"新增“经济学-统计学”“政治学与行政学”双学士学位项目，为本科生提供跨学科培养新路径。",date:"2026-05-29",source:"东北师范大学本科招生网",url:"https://zsb.nenu.edu.cn/phone/xwdt.htm",tag:"招生就业",keywords:["双学位","辅修","跨学科","本科","统计"],impact:"与你专业不直接对口，但透露了学校的辅修政策风向：跨学科组合越来越受鼓励。如果想补数据分析能力（对科研和保研都有用），统计学方向值得关注——只是学分压力和绩点风险要先评估。",action:"先不着急决定，大一下学期结合绩点情况再评估是否辅修。"},{id:"n6",title:"国家级一流课程，东北师大 +19！",summary:"学校再添 19 门国家级一流本科课程，课程建设水平持续提升，选课时可重点关注。",date:"2026-02",source:"东北师范大学官网",url:"https://www.nenu.edu.cn/yjds/a2026.htm",tag:"学校要闻",keywords:["选课","课程","本科","绩点","成绩"],impact:"直接影响你的选课质量：一流课程师资更稳、考核更规范，同样 effort 下更容易拿好成绩，GPA 3.7+ 的目标很大程度靠选课时把关。",action:"下学期选课前，先查目标课程的国家级/省级一流课程名单再下手。"},{id:"n7",title:"东师学子再登中央广播电视总台春节档舞台",summary:"我校学生登上总台春节档节目舞台，展现东师学子的艺术风采与综合素质。",date:"2026-02-24",source:"东北师范大学本科招生网",url:"https://zsb.nenu.edu.cn/phone/xwdt/37.htm",tag:"校园生活",keywords:["文艺","舞台","艺术","活动","社团"],impact:"学校文艺资源和平台比想象中好：艺术团、大型活动经历既是社交入口也是综测加分项，对师范生还是台风和表达能力的训练。",action:"有兴趣就关注校大学生艺术团的春季招新，先去试一次课。"},{id:"n8",title:"东师学子出征米兰冬奥会，为国争光",summary:"我校学子入选中国体育代表团出征米兰冬奥会，在冰雪赛场上展现中国青年风采。",date:"2026-02-08",source:"东北师范大学本科招生网",url:"https://zsb.nenu.edu.cn/phone/xwdt/37.htm",tag:"校园生活",keywords:["体育","冰雪","冬奥","志愿","羽毛球"],impact:"东师的冰雪体育是特色资源（身在长春别浪费）。体育成绩和体育活动都进综测，保持运动习惯也是你托福备考长跑的体力保障。",action:"把这学期的体育测试要求和场馆开放时间存进学习板块，每周固定两次运动。"}],L5=[{name:"学校主页",url:"https://www.nenu.edu.cn/"},{name:"本科招生网",url:"https://zsb.nenu.edu.cn/"},{name:"研究生院",url:"https://yjsy.nenu.edu.cn/"},{name:"通知公告",url:"https://www.nenu.edu.cn/tzgg.htm"},{name:"本科招生电话",url:"tel:0431-85098500"}],ib=[],O5=[{id:"eng-math",name:"工科数学分析",emoji:"📐",color:"from-sky-400 to-blue-600",goal:"全英文教材跟住节奏，期末冲 85+",tasks:[{id:"em1",title:"Limits & Continuity · 课后习题一组",minutes:60,tip:"ε-δ 定义要会用英文表述"},{id:"em2",title:"Derivatives · 链式法则刷题",minutes:50,tip:"注意 implicit differentiation"},{id:"em3",title:"Integrals · 换元与分部积分",minutes:60,tip:"每天保持 10 题手感"},{id:"em4",title:"专业词汇整理 · 数学英文术语 30 个",minutes:30,tip:"考试读题速度全靠它"}]},{id:"physics",name:"大学物理（力学）",emoji:"⚙️",color:"from-amber-400 to-orange-600",goal:"力学是机械的基础，打牢受力分析",tasks:[{id:"p1",title:"运动学与牛顿定律 · 习题一组",minutes:50,tip:"画图！受力分析图先行"},{id:"p2",title:"动量与能量 · 典型题 10 道",minutes:45,tip:"守恒条件先判断再列式"},{id:"p3",title:"刚体转动 · 概念 + 习题",minutes:50,tip:"转动惯量公式对比记忆"}]},{id:"eng-drawing",name:"工程图学 / 制图",emoji:"📏",color:"from-emerald-400 to-teal-600",goal:"空间想象 + 规范作图，机械人基本功",tasks:[{id:"d1",title:"三视图练习 · 徒手 + 尺规各 3 组",minutes:45,tip:"长对正、高平齐、宽相等"},{id:"d2",title:"CAD 软件熟悉 · 画简单零件图",minutes:60,tip:"先把图层和标注规范建好"}]},{id:"academic-eng",name:"学术英语（全英文授课适应）",emoji:"🌍",color:"from-violet-400 to-purple-600",goal:"听懂全英文课堂，敢于开口提问",tasks:[{id:"a1",title:"课前预习 · 把下节课 PPT 生词扫一遍",minutes:40,tip:"带着问题听课效率翻倍"},{id:"a2",title:"课后复盘 · 用英文写 5 句课堂要点",minutes:30,tip:"写不出 = 没听懂，回去重看"},{id:"a3",title:"听力磨耳朵 · 英语科技视频 20 分钟",minutes:25,tip:"推荐工程类科普频道"}]}],H5="高等数学",q5="📐",U5={title:H5,emoji:q5},F5="30分钟系列",Y5="🎧",V5={title:F5,emoji:Y5},G5="动物学",$5="🦎",X5={title:G5,emoji:$5},P5=`---
{"no":"第一章","title":"映射","order":1}
---
<!-- Generated by Trae Work -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>高等数学 · 映射 | 交互式笔记</title>
<style>
/* ACTIVE_PALETTE_TOKENS - Math Blue Theme */
:root {
  --page-bg: #F7F9FC;
  --page-surface: #EEF2F8;
  --page-surface-muted: #DCE3F0;
  --page-text: #1A2235;
  --page-text-secondary: #2D3A54;
  --page-text-muted: #5C6B85;
  --page-text-disabled: #8FA0BD;
  --page-border: #C9D3E6;
  --page-brand: #2563EB;
  --page-brand-hover: #1D4ED8;
  --page-brand-active: #1E40AF;
  --page-brand-soft: #E0E9FA;
  --page-brand-soft-strong: #B9CDF4;
  --page-brand-text: #1E3A8A;

  --bg: #F7F9FC;
  --bg2: #EEF2F8;
  --rule: #C9D3E6;
  --ink: #1A2235;
  --muted: #5C6B85;
  --text-secondary: #2D3A54;
  --text-disabled: #8FA0BD;
  --accent: #2563EB;
  --accent-hover: #1D4ED8;
  --accent-active: #1E40AF;
  --accent-soft: #E0E9FA;
  --accent2: #60A5FA;

  --success: #059669;
  --warning: #D97706;
  --danger: #DC2626;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: var(--page-text);
  background: var(--page-bg);
  -webkit-font-smoothing: antialiased;
}

/* Intro */
.report-intro {
  background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%);
  color: white;
  padding: 56px 24px 48px;
  position: relative;
  overflow: hidden;
}
.report-intro::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -40px;
  width: 240px;
  height: 240px;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
}
.report-intro::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: 5%;
  width: 200px;
  height: 200px;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
}
.report-intro__content {
  max-width: 880px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.report-intro__eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #BFDBFE;
  background: rgba(255,255,255,0.15);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}
.report-intro h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 12px;
}
.report-intro__summary {
  font-size: 16px;
  line-height: 1.7;
  max-width: 640px;
  opacity: 0.9;
}
.report-intro__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.2);
  font-size: 13px;
  opacity: 0.85;
}
.report-intro__meta span strong {
  font-weight: 600;
  margin-left: 4px;
}

/* Main content */
main {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

section {
  margin-bottom: 48px;
}

h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--page-text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--page-brand-soft-strong);
  display: flex;
  align-items: center;
  gap: 10px;
}
h2 .emoji { font-size: 24px; }

h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--page-text);
  margin-top: 28px;
  margin-bottom: 12px;
}

h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--page-text-secondary);
  margin-top: 20px;
  margin-bottom: 8px;
}

p {
  margin-bottom: 14px;
  color: var(--page-text-secondary);
}

strong { color: var(--page-text); font-weight: 600; }

/* Lists */
ul, ol {
  margin-bottom: 14px;
  padding-left: 24px;
  color: var(--page-text-secondary);
}
li { margin-bottom: 6px; }
li::marker { color: var(--page-brand); }

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 20px;
  font-size: 14px;
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 10px;
  overflow: hidden;
}
caption {
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: var(--page-text);
  margin-bottom: 8px;
  padding: 0 2px;
}
thead { background: var(--page-surface); }
th {
  text-align: left;
  padding: 10px 14px;
  font-weight: 600;
  color: var(--page-text);
  border-bottom: 1px solid var(--page-border);
  font-size: 13px;
}
td {
  padding: 10px 14px;
  border-bottom: 1px solid var(--page-border);
  color: var(--page-text-secondary);
  vertical-align: top;
}
tr:last-child td { border-bottom: none; }
tr:hover td { background: var(--page-surface); }

/* Callout boxes */
.callout {
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 10px;
  padding: 16px 18px;
  margin: 18px 0;
}
.callout__label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  color: var(--page-text);
  margin-bottom: 8px;
}
.callout p { margin-bottom: 0; font-size: 14px; }

.callout--insight {
  background: var(--page-brand-soft);
  border-color: var(--page-brand-soft-strong);
}
.callout--insight .callout__label { color: var(--page-brand-text); }

.callout--warn {
  background: #FFF7ED;
  border-color: #FED7AA;
}
.callout--warn .callout__label { color: #9A3412; }

/* Code / formula blocks */
.formula {
  font-family: "SF Mono", "Consolas", "Liberation Mono", "Courier New", "Noto Sans Mono CJK SC", monospace;
  font-size: 14px;
  line-height: 1.8;
  background: var(--page-surface);
  border: 1px solid var(--page-border);
  border-radius: 10px;
  padding: 16px 20px;
  margin: 16px 0;
  color: var(--page-text-secondary);
  overflow-x: auto;
}
.formula .hl { color: var(--page-brand); font-weight: 600; }

/* Interactive demo container */
.demo {
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 14px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
.demo__title {
  font-weight: 600;
  font-size: 15px;
  color: var(--page-text);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.demo__desc {
  font-size: 13px;
  color: var(--page-text-muted);
  margin-bottom: 16px;
}
.demo__canvas-wrap {
  background: var(--page-bg);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
}
.demo__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.demo__btn {
  padding: 8px 16px;
  border: 1px solid var(--page-border);
  border-radius: 8px;
  background: white;
  color: var(--page-text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.demo__btn:hover {
  border-color: var(--page-brand);
  color: var(--page-brand);
}
.demo__btn--active {
  background: var(--page-brand);
  color: white;
  border-color: var(--page-brand);
}
.demo__btn--active:hover {
  background: var(--page-brand-hover);
  color: white;
}

.demo__slider-wrap {
  flex: 1;
  min-width: 200px;
}
.demo__slider-label {
  font-size: 12px;
  color: var(--page-text-muted);
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
}
.demo__slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--page-surface-muted);
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
}
.demo__slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--page-brand);
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(37,99,235,0.4);
}

/* Mapping visualization */
.map-vis {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  position: relative;
  min-height: 260px;
}
.map-set {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.map-set__label {
  font-size: 12px;
  font-weight: 600;
  color: var(--page-text-muted);
  margin-bottom: 4px;
}
.map-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--page-brand);
  position: relative;
  transition: all 0.3s;
}
.map-dot--y {
  background: var(--success);
}
.map-dot--unused {
  background: var(--page-text-disabled);
}
.map-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.map-svg line {
  stroke: var(--accent2);
  stroke-width: 2;
  opacity: 0.6;
  transition: all 0.3s;
}

/* Function graph */
#functionCanvas {
  width: 100%;
  height: 280px;
  border-radius: 8px;
  cursor: crosshair;
}

/* TOC */
.toc {
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 40px;
}
.toc__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--page-text);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  column-gap: 24px;
}
.toc li {
  margin-bottom: 6px;
  break-inside: avoid;
}
.toc a {
  color: var(--page-text-secondary);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}
.toc a:hover { color: var(--page-brand); }

/* Quiz */
.quiz-item {
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 10px;
  padding: 16px 18px;
  margin: 12px 0;
}
.quiz-item__q {
  font-weight: 600;
  font-size: 14px;
  color: var(--page-text);
  margin-bottom: 10px;
}
.quiz-item__a {
  font-size: 13px;
  color: var(--page-text-muted);
  padding: 10px 14px;
  background: var(--page-surface);
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
}
.quiz-item__a:hover { background: var(--page-surface-muted); }
.quiz-item__a.revealed {
  color: var(--page-text-secondary);
  background: var(--page-brand-soft);
}

/* Hierarchy code */
.hierarchy {
  font-family: "SF Mono", "Consolas", "Liberation Mono", "Courier New", monospace;
  font-size: 13px;
  line-height: 1.8;
  background: var(--page-surface);
  border: 1px solid var(--page-border);
  border-radius: 10px;
  padding: 18px 20px;
  margin: 16px 0;
  color: var(--page-text-secondary);
  overflow-x: auto;
}
.hierarchy .hl { color: var(--page-brand); font-weight: 600; }
.hierarchy .hl2 { color: var(--accent2); font-weight: 500; }

/* Insight cards */
.insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin: 20px 0;
}
.insight-card {
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 10px;
  padding: 16px;
}
.insight-card__icon { font-size: 22px; margin-bottom: 8px; }
.insight-card__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--page-text);
  margin-bottom: 6px;
}
.insight-card__desc {
  font-size: 13px;
  color: var(--page-text-muted);
  line-height: 1.6;
}

/* Footer */
footer {
  border-top: 1px solid var(--page-border);
  padding: 24px;
  text-align: center;
  font-size: 12px;
  color: var(--page-text-muted);
}

/* Responsive */
@media (max-width: 640px) {
  .report-intro { padding: 40px 20px 36px; }
  .report-intro h1 { font-size: 24px; }
  .report-intro__summary { font-size: 14px; }
  main { padding: 28px 16px 60px; }
  h2 { font-size: 18px; }
  h3 { font-size: 15px; }
  .toc ul { columns: 1; }
  .demo { padding: 16px; }
  .map-vis { min-height: 220px; }
}
</style>
</head>
<body>

<header class="report-intro">
  <div class="report-intro__content">
    <span class="report-intro__eyebrow">📐 高等数学 · 第一章</span>
    <h1>映射：从直观到抽象的第一步</h1>
    <p class="report-intro__summary">
      映射是高等数学的地基。搞懂了映射，函数、反函数、复合函数就都顺了。
      这页不仅有笔记，还有可以动手玩的可视化——拖一拖、点一点，数学就懂了。
    </p>
    <div class="report-intro__meta">
      <span>📚 <strong>章节</strong>：映射与函数</span>
      <span>🎯 <strong>重点</strong>：单射 / 满射 / 逆映射 / 复合映射</span>
      <span>🎮 <strong>交互</strong>：3个可动手玩的演示</span>
    </div>
  </div>
</header>

<main>

  <!-- TOC -->
  <nav class="toc">
    <div class="toc__title">📑 本章目录</div>
    <ul>
      <li><a href="#sec1">一、映射的定义</a></li>
      <li><a href="#sec2">二、映射的三要素</a></li>
      <li><a href="#sec3">三、三个经典例子</a></li>
      <li><a href="#sec4">四、三种特殊映射</a></li>
      <li><a href="#sec5">五、逆映射</a></li>
      <li><a href="#sec6">六、复合映射</a></li>
      <li><a href="#sec7">七、易混淆概念对比</a></li>
      <li><a href="#sec8">八、核心理解</a></li>
      <li><a href="#sec9">九、复习自测题</a></li>
    </ul>
  </nav>

  <!-- Section 1 -->
  <section id="sec1">
    <h2><span class="emoji">🎯</span>一、什么是映射？</h2>

    <h3>定义</h3>

    <blockquote style="border-left:4px solid var(--page-brand);padding-left:16px;margin:16px 0;color:var(--page-text-secondary);">
      设 X, Y 是两个非空集合，如果存在一个法则 f，使得对 X 中的每个元素 x，按照法则 f，在 Y 中都有<strong>唯一确定</strong>的一个元素和它对应，则称 f 是从 X 到 Y 的一个映射。
    </blockquote>

    <p>记作：<strong>f : X → Y</strong></p>

    <div class="callout callout--warn">
      <div class="callout__label">⚠️ 划重点</div>
      <p><strong>一个 x 只能对应一个 y。</strong>这是映射最核心的要求。</p>
      <p style="margin-top:8px;">反过来不要求！一个 y 可以对应多个 x。这个区别是后面所有概念的基础。</p>
    </div>

    <h3>几个名字</h3>

    <table>
      <caption>映射相关术语</caption>
      <thead>
        <tr><th>名字</th><th>是什么</th><th>英文/符号</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>原像</strong></td><td>X 里的元素</td><td>pre-image</td></tr>
        <tr><td><strong>像</strong></td><td>Y 里对应的元素</td><td>image</td></tr>
        <tr><td><strong>定义域</strong></td><td>全体原像的集合</td><td>D<sub>f</sub>（Domain）</td></tr>
        <tr><td><strong>值域</strong></td><td>全体像的集合</td><td>R<sub>f</sub>（Range）</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout__label">💡 记忆方法</div>
      <p><strong>D</strong> = Domain = 定义域（源集合）</p>
      <p><strong>R</strong> = Range = 值域（结果范围）</p>
      <p style="margin-top:6px;font-size:13px;color:var(--muted);">不要死记中文，记英文缩写更好用，后面学下去会反复遇到。</p>
    </div>

    <h3>映射 vs 函数</h3>

    <p>映射是个更宽泛的概念，函数是映射的一种特例。</p>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">📈</div>
        <div class="insight-card__title">函数</div>
        <div class="insight-card__desc">从数到数的映射（高数主要学这个）</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🔢</div>
        <div class="insight-card__title">线性变换</div>
        <div class="insight-card__desc">从矩阵到矩阵的映射（线性代数学）</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">📐</div>
        <div class="insight-card__title">投影</div>
        <div class="insight-card__desc">从点到线/面的映射</div>
      </div>
    </div>

    <p>→ 高数里，我们主要研究的就是<strong>函数</strong>这种映射。</p>
  </section>

  <!-- Section 2 -->
  <section id="sec2">
    <h2><span class="emoji">🧩</span>二、映射的三要素</h2>

    <table>
      <caption>映射的三要素</caption>
      <thead>
        <tr><th>要素</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>定义域 D<sub>f</sub></strong></td>
          <td>原像的集合，就是 X</td>
        </tr>
        <tr>
          <td><strong>值域 R<sub>f</sub></strong></td>
          <td>像的集合，<strong>R<sub>f</sub> ⊆ Y</strong>（注意：值域是 Y 的子集，不一定等于 Y）</td>
        </tr>
        <tr>
          <td><strong>对应法则 f</strong></td>
          <td>怎么从 x 找到 y 的规则</td>
        </tr>
      </tbody>
    </table>

    <div class="callout callout--insight">
      <div class="callout__label">🤔 为什么值域是 Y 的子集，不一定等于 Y？</div>
      <p>比如 f(x) = x²，是从 ℝ 到 ℝ 的映射。但 x² 永远 ≥ 0，所以值域只是 [0, +∞)，只是实数集的一部分，不是全部。</p>
    </div>

    <h4>关于"两要素"的说法</h4>
    <p>有些书说映射只有两要素：定义域 + 对应法则。</p>
    <p>为什么？因为如果定义域和对应法则都确定了，值域自然也就确定了。</p>
    <p>→ 三要素 or 两要素，都对，看你从哪个角度说。</p>
  </section>

  <!-- Section 3 -->
  <section id="sec3">
    <h2><span class="emoji">📊</span>三、三个经典例子</h2>

    <p>光说定义太抽象，来看三个具体例子。点下面的按钮切换，直观感受不同映射的区别。</p>

    <!-- Interactive demo 1: mapping examples -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：三种映射对比</div>
      <div class="demo__desc">点下面的按钮切换不同的映射，看看左边的 x 怎么对应到右边的 y。</div>

      <div class="demo__canvas-wrap">
        <div class="map-vis" id="mapVis">
          <svg class="map-svg" id="mapSvg"></svg>
          <div class="map-set" id="setX">
            <div class="map-set__label">X（定义域）</div>
          </div>
          <div class="map-set" id="setY">
            <div class="map-set__label">Y（目标集合）</div>
          </div>
        </div>
      </div>

      <div class="demo__controls">
        <button class="demo__btn demo__btn--active" onclick="showMapExample(0)">例1：f(x) = x²</button>
        <button class="demo__btn" onclick="showMapExample(1)">例2：圆的投影</button>
        <button class="demo__btn" onclick="showMapExample(2)">例3：f(x) = sin x</button>
      </div>

      <div style="margin-top:14px;padding:12px 14px;background:var(--page-bg);border-radius:8px;font-size:13px;color:var(--page-text-secondary);">
        <strong id="mapExampleName">例1：f(x) = x²</strong><br>
        <span id="mapExampleDesc">二次函数，一个 y 可以对应两个 x（比如 y=4 对应 x=2 和 x=-2）。是映射，但不是单射。</span>
      </div>
    </div>

    <h3>例1：二次函数 f(x) = x²</h3>
    <div class="formula">
f : ℝ → ℝ<br>
f(x) = x²
    </div>
    <ul>
      <li><strong>定义域</strong>：全体实数 ℝ</li>
      <li><strong>值域</strong>：[0, +∞) （因为平方不可能是负数）</li>
      <li><strong>特点</strong>：一个 y 可以对应两个 x（比如 y=4 对应 x=2 和 x=-2）</li>
    </ul>

    <h3>例2：圆的投影</h3>
    <p>X 是单位圆上所有点（x²+y²=1），Y 是 x 轴上 [-1, 1] 的线段。</p>
    <p>映射规则：把圆上的点投影到 x 轴上。</p>
    <div class="formula">
圆上的点 (x, y) → x轴上的点 (x, 0)
    </div>
    <ul>
      <li><strong>定义域</strong>：单位圆上所有点</li>
      <li><strong>值域</strong>：[-1, 1]</li>
      <li><strong>特点</strong>：除了两个端点，每个 y 值都对应两个 x 值（上下对称）</li>
    </ul>

    <h3>例3：正弦函数 f(x) = sin x</h3>
    <div class="formula">
f : [-π/2, π/2] → [-1, 1]<br>
f(x) = sin x
    </div>
    <ul>
      <li><strong>定义域</strong>：[-π/2, π/2] （注意：只取了一段！）</li>
      <li><strong>值域</strong>：[-1, 1]</li>
      <li><strong>特点</strong>：在这个定义域内，一个 x 只对应一个 y，而且每个 y 也只对应一个 x</li>
    </ul>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 为什么例3要限制定义域？</div>
      <p>因为 sin x 在全体实数上不是单射（同一个 y 对应无数个 x）。只有限制在 [-π/2, π/2] 上，它才是一一映射，才有反函数（反正弦 arcsin）。</p>
    </div>
  </section>

  <!-- Section 4 -->
  <section id="sec4">
    <h2><span class="emoji">🔄</span>四、三种特殊映射</h2>

    <table>
      <caption>三种特殊映射对比</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>英文</th>
          <th>定义</th>
          <th>直观理解</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>满射</strong></td>
          <td>Surjection</td>
          <td>R<sub>f</sub> = Y</td>
          <td>Y 里每个元素都能被射到</td>
        </tr>
        <tr>
          <td><strong>单射</strong></td>
          <td>Injection</td>
          <td>x₁≠x₂ ⇒ f(x₁)≠f(x₂)</td>
          <td>不同的 x 一定对应不同的 y</td>
        </tr>
        <tr>
          <td><strong>一一映射</strong></td>
          <td>Bijection</td>
          <td>既是单射又是满射</td>
          <td>x 和 y 一一配对，一个不多一个不少</td>
        </tr>
      </tbody>
    </table>

    <!-- Interactive demo 2: three types -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：三种映射类型</div>
      <div class="demo__desc">点下面的按钮切换，看看满射、单射、一一映射长什么样。</div>

      <div class="demo__canvas-wrap">
        <div class="map-vis" id="typeVis" style="min-height:240px;">
          <svg class="map-svg" id="typeSvg"></svg>
          <div class="map-set" id="typeSetX">
            <div class="map-set__label">X</div>
          </div>
          <div class="map-set" id="typeSetY">
            <div class="map-set__label">Y</div>
          </div>
        </div>
      </div>

      <div class="demo__controls">
        <button class="demo__btn demo__btn--active" onclick="showMapType(0)">满射</button>
        <button class="demo__btn" onclick="showMapType(1)">单射</button>
        <button class="demo__btn" onclick="showMapType(2)">一一映射（双射）</button>
        <button class="demo__btn" onclick="showMapType(3)">都不是</button>
      </div>

      <div style="margin-top:14px;padding:12px 14px;background:var(--page-bg);border-radius:8px;font-size:13px;color:var(--page-text-secondary);">
        <strong id="mapTypeName">满射（Surjection）</strong><br>
        <span id="mapTypeDesc">Y 中的每个元素都被映射到了，没有落下的。值域 R_f = Y。</span>
      </div>
    </div>

    <h3>满射（Surjection）</h3>
    <p><strong>定义</strong>：如果值域 R<sub>f</sub> 等于目标集合 Y，就叫满射。</p>
    <p>→ 就是说 Y 里的每个元素都被"覆盖"到了，没有落下的。</p>

    <h3>单射（Injection）</h3>
    <p><strong>定义</strong>：只要 x₁ ≠ x₂，就一定有 f(x₁) ≠ f(x₂)。</p>
    <p>→ 反过来理解：如果两个像相同，那它们的原像一定是同一个。</p>

    <h3>一一映射（双射 Bijection）</h3>
    <p><strong>定义</strong>：既是单射，又是满射。</p>
    <p>→ 完美的一一对应：X 每个元素对应 Y 唯一元素，Y 每个元素也对应 X 唯一元素。</p>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 为什么一一映射这么重要？</div>
      <p>因为只有一一映射才能建立<strong>逆映射</strong>。下一节马上讲。</p>
    </div>
  </section>

  <!-- Section 5 -->
  <section id="sec5">
    <h2><span class="emoji">↩️</span>五、逆映射</h2>

    <h3>定义</h3>
    <p>设 f : X → Y 是<strong>单射</strong>，则可以定义一个新的映射：</p>
    <blockquote style="border-left:4px solid var(--page-brand);padding-left:16px;margin:16px 0;color:var(--page-text-secondary);">
      对任意 y ∈ R<sub>f</sub>，存在唯一的 x ∈ X，使得 f(x) = y<br>
      这个从 R<sub>f</sub> 到 X 的映射，就叫 f 的<strong>逆映射</strong>，记作 <strong>f⁻¹</strong>
    </blockquote>

    <h3>为什么必须是单射？</h3>

    <p>如果不是单射，两个不同的 x 对应同一个 y：</p>
    <ul>
      <li>反过来，这个 y 就有两个 x 和它对应</li>
      <li>那就不符合"一个 x 只能对应一个 y"的映射定义了</li>
      <li>所以就不能构成逆映射</li>
    </ul>

    <div class="callout">
      <div class="call__label">💡 理解</div>
      <p><strong>正向</strong>：每个 x → 唯一 y（映射的基本要求）</p>
      <p><strong>反向</strong>：每个 y → 唯一 x（单射的额外要求）</p>
      <p style="margin-top:6px;">两个都满足，才能正过来反过来都是映射。</p>
    </div>

    <h3>逆映射的性质</h3>

    <table>
      <caption>原映射 vs 逆映射</caption>
      <thead>
        <tr><th></th><th>原映射 f</th><th>逆映射 f⁻¹</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>定义域</strong></td><td>X</td><td>R<sub>f</sub></td></tr>
        <tr><td><strong>值域</strong></td><td>R<sub>f</sub></td><td>X</td></tr>
      </tbody>
    </table>

    <p>→ 定义域和值域刚好互换！</p>

    <!-- Interactive demo 3: inverse -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：函数图像探索</div>
      <div class="demo__desc">拖动滑块改变 a 的值，看看 y = ax² 的图像怎么变。观察什么时候是单射、什么时候不是。</div>

      <div class="demo__canvas-wrap">
        <canvas id="functionCanvas" width="800" height="280"></canvas>
      </div>

      <div class="demo__controls">
        <div class="demo__slider-wrap">
          <div class="demo__slider-label">
            <span>参数 a</span>
            <span id="aValue">1</span>
          </div>
          <input type="range" class="demo__slider" id="sliderA" min="-3" max="3" step="0.1" value="1">
        </div>
      </div>

      <div style="margin-top:14px;padding:12px 14px;background:var(--page-bg);border-radius:8px;font-size:13px;">
        <span id="funcStatus">⚠️ 定义域为全体实数时，f(x) = x² 不是单射（一个 y 对应两个 x），所以没有逆映射。</span>
      </div>
    </div>

    <h3>例子</h3>

    <table>
      <caption>哪些映射有逆映射？</caption>
      <thead>
        <tr><th>原映射</th><th>是不是单射</th><th>有没有逆映射</th><th>逆映射是什么</th></tr>
      </thead>
      <tbody>
        <tr><td>f(x) = x²</td><td>❌ 不是</td><td>❌ 没有</td><td>—</td></tr>
        <tr><td>圆的投影</td><td>❌ 不是</td><td>❌ 没有</td><td>—</td></tr>
        <tr><td>f(x) = sin x, x∈[-π/2, π/2]</td><td>✅ 是</td><td>✅ 有</td><td>arcsin x（反正弦）</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout__label">📌 反三角函数专题</div>
      <p>反三角函数是逆映射的典型例子。为什么反三角函数的定义域要限制？就是因为只有限制在单调区间上，sin/cos/tan 才是单射，才有逆映射。后面讲初等函数的时候会专门展开。</p>
    </div>
  </section>

  <!-- Section 6 -->
  <section id="sec6">
    <h2><span class="emoji">🔗</span>六、复合映射</h2>

    <h3>定义</h3>

    <p>假设有两个映射：</p>
    <ul>
      <li>g : X → Y₁</li>
      <li>f : Y₂ → Z</li>
    </ul>

    <p>如果 <strong>R<sub>g</sub> ⊆ D<sub>f</sub></strong>（g 的值域包含在 f 的定义域里），那么可以定义复合映射：</p>

    <div class="formula">
f∘g : X → Z<br>
<span class="hl">f∘g(x) = f(g(x))</span>
    </div>

    <p>读作："f circle g"，或者"f 复合 g"。</p>

    <div class="callout callout--warn">
      <div class="callout__label">⚠️ 计算顺序</div>
      <p><strong>先算里面的 g，再算外面的 f。</strong></p>
      <p style="margin-top:6px;">从里往外算，不是从左往右。f∘g 看着 f 在前面，但其实先算 g。</p>
    </div>

    <h3>关键条件：R<sub>g</sub> ⊆ D<sub>f</sub></h3>

    <p>这个是重点，也是最容易搞反的地方。</p>

    <div class="hierarchy">
为什么必须 R_g ⊆ D_f ？

X ──g──→ Y₁ ──f──→ Z
         /        \\
        R_g       D_f
         \\        /
      <span class="hl">R_g 必须在 D_f 里面！</span>

如果 R_g 有一部分在 D_f 外面：
  → 那部分的像在 f 里找不到对应
  → 复合映射就不成立
    </div>

    <div class="callout callout--warn">
      <div class="callout__label">⚠️ 常见误解</div>
      <p>很多人直觉是"f 的定义域要小一点，包在 g 的值域里面才稳妥"。</p>
      <p style="margin-top:6px;"><strong>错！</strong>恰恰相反：g 映射出来的所有结果，都必须在 f 的定义域里面。不然 f 就"接不住"。</p>
    </div>

    <h3>例子</h3>

    <h4>例1：合法的复合 ✅</h4>
    <ul>
      <li>g(x) = sin x，D<sub>g</sub> = ℝ，R<sub>g</sub> = [-1, 1]</li>
      <li>f(u) = √(1-u²)，D<sub>f</sub> = [-1, 1]（根号里 ≥ 0）</li>
    </ul>
    <p>→ R<sub>g</sub> = [-1, 1] ⊆ D<sub>f</sub> = [-1, 1] <strong>✅ 可以复合！</strong></p>
    <p>→ f(g(x)) = f(sin x) = √(1 - sin²x)</p>

    <h4>例2：不合法的复合 ❌</h4>
    <ul>
      <li>g(x) = 2x²，D<sub>g</sub> = ℝ，R<sub>g</sub> = [0, +∞)</li>
      <li>f(u) = √(-1 - u)，D<sub>f</sub> = (-∞, -1]</li>
    </ul>
    <p>→ R<sub>g</sub> = [0, +∞) 和 D<sub>f</sub> = (-∞, -1] 没有交集 <strong>❌ 不能复合！</strong></p>
    <p>为什么？因为 2x² ≥ 0，所以 -1 - 2x² ≤ -1 < 0，根号里是负数，没意义。</p>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 判断复合是否合法的步骤</div>
      <p>1. 求内层函数 g 的值域 R<sub>g</sub></p>
      <p>2. 求外层函数 f 的定义域 D<sub>f</sub></p>
      <p>3. 看 R<sub>g</sub> 是不是完全包含在 D<sub>f</sub> 里面</p>
      <p>4. 是 → 可以复合；不是 → 不能复合（或者需要缩小定义域）</p>
    </div>
  </section>

  <!-- Section 7 -->
  <section id="sec7">
    <h2><span class="emoji">⚖️</span>七、易混淆概念对比</h2>

    <table>
      <caption>容易搞混的概念</caption>
      <thead>
        <tr><th>概念 A</th><th>概念 B</th><th>核心区别</th></tr>
      </thead>
      <tbody>
        <tr><td>映射</td><td>函数</td><td>映射是大概念，函数是映射的一种（数到数）</td></tr>
        <tr><td>定义域 D<sub>f</sub></td><td>值域 R<sub>f</sub></td><td>定义域=输入的集合；值域=输出的集合</td></tr>
        <tr><td>值域 R<sub>f</sub></td><td>目标集合 Y</td><td>值域是 Y 的子集，不一定等于 Y</td></tr>
        <tr><td>满射</td><td>单射</td><td>满射=每个y都被射到；单射=不同x射不同y</td></tr>
        <tr><td>单射</td><td>一一映射</td><td>一一映射=单射 + 满射</td></tr>
        <tr><td>逆映射</td><td>原映射</td><td>定义域和值域互换，方向反过来</td></tr>
        <tr><td>复合映射 f∘g</td><td>先算g还是先算f</td><td>f∘g = 先算g，再算f（从里往外）</td></tr>
      </tbody>
    </table>
  </section>

  <!-- Section 8 -->
  <section id="sec8">
    <h2><span class="emoji">💡</span>八、核心理解</h2>

    <h3>1. 映射的本质：一种对应关系</h3>
    <p>映射不是什么神秘的东西，就是"给定一个输入，按规则找到一个输出"的对应关系。</p>
    <p>函数是映射，矩阵变换是映射，投影是映射……只要满足"一个输入对应唯一输出"，都是映射。</p>

    <h3>2. 单射是建立逆映射的钥匙</h3>
    <p>正向映射要求"一个 x 对应一个 y"，这是基本要求。但反过来"一个 y 对应一个 x"，不是必须的。</p>
    <p>→ 只有加上单射的额外限制，反过来才能也是映射。</p>
    <p>→ 这就是为什么逆映射必须要求单射。</p>

    <h3>3. 复合的关键：内层的值域要装进外层的定义域</h3>
    <p>复合函数不是随便两个函数拼在一起就行的。内层函数输出的每一个值，都必须在外层函数的接受范围内。</p>
    <p>→ 内层输出什么，外层必须全部接得住。</p>
    <p>→ 接不住的话，复合就不成立，或者需要缩小内层的定义域。</p>
  </section>

  <!-- Section 9 -->
  <section id="sec9">
    <h2><span class="emoji">❓</span>九、复习自测题</h2>
    <p>点灰色框显示答案，先自己想再看。</p>

    <div class="quiz-item">
      <div class="quiz-item__q">1. 映射的定义是什么？核心要求是什么？</div>
      <div class="quiz-item__a" onclick="this.classList.toggle('revealed')">点击显示答案</div>
    </div>

    <div class="quiz-item">
      <div class="quiz-item__q">2. 映射的三要素是什么？为什么有的书说是两要素？</div>
      <div class="quiz-item__a" onclick="this.classList.toggle('revealed')">点击显示答案</div>
    </div>

    <div class="quiz-item">
      <div class="quiz-item__q">3. 值域 R_f 和目标集合 Y 是什么关系？一定相等吗？</div>
      <div class="quiz-item__a" onclick="this.classList.toggle('revealed')">点击显示答案</div>
    </div>

    <div class="quiz-item">
      <div class="quiz-item__q">4. 什么是满射？什么是单射？什么是一一映射？</div>
      <div class="quiz-item__a" onclick="this.classList.toggle('revealed')">点击显示答案</div>
    </div>

    <div class="quiz-item">
      <div class="quiz-item__q">5. 三个例子（x²、圆的投影、sin x）分别是不是满射？是不是单射？</div>
      <div class="quiz-item__a" onclick="this.classList.toggle('revealed')">点击显示答案</div>
    </div>

    <div class="quiz-item">
      <div class="quiz-item__q">6. 逆映射存在的前提是什么？为什么？</div>
      <div class="quiz-item__a" onclick="this.classList.toggle('revealed')">点击显示答案</div>
    </div>

    <div class="quiz-item">
      <div class="quiz-item__q">7. 逆映射的定义域和值域跟原映射有什么关系？</div>
      <div class="quiz-item__a" onclick="this.classList.toggle('revealed')">点击显示答案</div>
    </div>

    <div class="quiz-item">
      <div class="quiz-item__q">8. 复合映射的定义是什么？计算顺序是怎样的？</div>
      <div class="quiz-item__a" onclick="this.classList.toggle('revealed')">点击显示答案</div>
    </div>

    <div class="quiz-item">
      <div class="quiz-item__q">9. 复合映射成立的关键条件是什么？为什么？</div>
      <div class="quiz-item__a" onclick="this.classList.toggle('revealed')">点击显示答案</div>
    </div>

    <div class="quiz-item">
      <div class="quiz-item__q">10. 判断：g(x) = x + 1，f(u) = √u，能不能构成复合映射 f(g(x))？为什么？</div>
      <div class="quiz-item__a" onclick="this.classList.toggle('revealed')">点击显示答案</div>
    </div>
  </section>

</main>

<footer>
  📐 高等数学 · 映射 | 交互式学习笔记
</footer>

<script>
// ==================== Demo 1: Three mapping examples ====================
const mapExamples = [
  {
    name: '例1：f(x) = x²（二次函数）',
    desc: '二次函数，一个 y 可以对应两个 x（比如 y=4 对应 x=2 和 x=-2）。是映射，但不是单射。',
    xCount: 5,
    yCount: 5,
    // mapping: x index -> y index (can be many to one)
    mapping: { 0: 4, 1: 2, 2: 0, 3: 2, 4: 4 },
    yUnused: []
  },
  {
    name: '例2：圆的投影',
    desc: '把圆上的点投影到 x 轴上。除了两端，每个 y 都对应两个 x。是映射，但不是单射。',
    xCount: 5,
    yCount: 3,
    mapping: { 0: 0, 1: 1, 2: 2, 3: 1, 4: 0 },
    yUnused: []
  },
  {
    name: '例3：f(x) = sin x（限制定义域）',
    desc: '在 [-π/2, π/2] 上的正弦函数。每个 x 对应唯一 y，每个 y 也对应唯一 x。既是单射也是满射，即一一映射。',
    xCount: 5,
    yCount: 5,
    mapping: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 },
    yUnused: []
  }
];

let currentExample = 0;

function showMapExample(idx) {
  currentExample = idx;
  const data = mapExamples[idx];

  // Update buttons
  document.querySelectorAll('#sec3 .demo__btn').forEach((btn, i) => {
    btn.classList.toggle('demo__btn--active', i === idx);
  });

  // Update text
  document.getElementById('mapExampleName').textContent = data.name;
  document.getElementById('mapExampleDesc').textContent = data.desc;

  // Render dots
  renderMapping('setX', 'setY', 'mapSvg', data.xCount, data.yCount, data.mapping, data.yUnused);
}

function renderMapping(setXId, setYId, svgId, xCount, yCount, mapping, yUnused) {
  const setX = document.getElementById(setXId);
  const setY = document.getElementById(setYId);
  const svg = document.getElementById(svgId);

  // Clear existing
  setX.innerHTML = '<div class="map-set__label">X（定义域）</div>';
  setY.innerHTML = '<div class="map-set__label">Y（目标集合）</div>';
  svg.innerHTML = '';

  // Create X dots
  for (let i = 0; i < xCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'map-dot';
    dot.id = \`\${setXId}-dot-\${i}\`;
    setX.appendChild(dot);
  }

  // Create Y dots
  for (let i = 0; i < yCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'map-dot map-dot--y';
    if (yUnused && yUnused.includes(i)) {
      dot.classList.add('map-dot--unused');
    }
    dot.id = \`\${setYId}-dot-\${i}\`;
    setY.appendChild(dot);
  }

  // Wait for layout
  requestAnimationFrame(() => {
    const vis = svg.parentElement;
    const visRect = vis.getBoundingClientRect();
    const xRect = setX.getBoundingClientRect();
    const yRect = setY.getBoundingClientRect();

    svg.setAttribute('viewBox', \`0 0 \${visRect.width} \${visRect.height}\`);

    // Draw lines
    for (let i = 0; i < xCount; i++) {
      const xDot = document.getElementById(\`\${setXId}-dot-\${i}\`);
      const xDotRect = xDot.getBoundingClientRect();
      const yIdx = mapping[i];
      const yDot = document.getElementById(\`\${setYId}-dot-\${yIdx}\`);
      if (!yDot) continue;
      const yDotRect = yDot.getBoundingClientRect();

      const x1 = xDotRect.left - visRect.left + xDotRect.width / 2;
      const y1 = xDotRect.top - visRect.top + xDotRect.height / 2;
      const x2 = yDotRect.left - visRect.left + yDotRect.width / 2;
      const y2 = yDotRect.top - visRect.top + yDotRect.height / 2;

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', x1);
      line.setAttribute('y1', y1);
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      svg.appendChild(line);
    }
  });
}

// ==================== Demo 2: Three mapping types ====================
const mapTypes = [
  {
    name: '满射（Surjection）',
    desc: 'Y 中的每个元素都被映射到了，没有落下的。值域 R_f = Y。',
    xCount: 4,
    yCount: 3,
    mapping: { 0: 0, 1: 1, 2: 2, 3: 1 },
    yUnused: []
  },
  {
    name: '单射（Injection）',
    desc: '不同的 x 对应不同的 y。x₁≠x₂ 就有 f(x₁)≠f(x₂)。但 Y 中可能有元素没被射到。',
    xCount: 3,
    yCount: 5,
    mapping: { 0: 0, 1: 2, 2: 4 },
    yUnused: [1, 3]
  },
  {
    name: '一一映射 / 双射（Bijection）',
    desc: '既是单射又是满射。x 和 y 完美一一对应，一个不多一个不少。只有这种映射才有逆映射。',
    xCount: 4,
    yCount: 4,
    mapping: { 0: 0, 1: 1, 2: 2, 3: 3 },
    yUnused: []
  },
  {
    name: '都不是',
    desc: '既不是单射（两个x对应同一个y），也不是满射（Y里有元素没被射到）。这是最常见的情况。',
    xCount: 4,
    yCount: 4,
    mapping: { 0: 0, 1: 1, 2: 1, 3: 0 },
    yUnused: [2, 3]
  }
];

let currentType = 0;

function showMapType(idx) {
  currentType = idx;
  const data = mapTypes[idx];

  // Update buttons
  document.querySelectorAll('#sec4 .demo__btn').forEach((btn, i) => {
    btn.classList.toggle('demo__btn--active', i === idx);
  });

  // Update text
  document.getElementById('mapTypeName').textContent = data.name;
  document.getElementById('mapTypeDesc').textContent = data.desc;

  // Render
  renderMapping('typeSetX', 'typeSetY', 'typeSvg', data.xCount, data.yCount, data.mapping, data.yUnused);
}

// ==================== Demo 3: Function graph ====================
let a = 1;
const canvas = document.getElementById('functionCanvas');
const ctx = canvas.getContext('2d');

function drawFunction() {
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const scale = 40; // pixels per unit

  // Clear
  ctx.fillStyle = '#F7F9FC';
  ctx.fillRect(0, 0, w, h);

  // Grid
  ctx.strokeStyle = '#DCE3F0';
  ctx.lineWidth = 1;
  for (let x = cx % scale; x < w; x += scale) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = cy % scale; y < h; y += scale) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Axes
  ctx.strokeStyle = '#5C6B85';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, 0);
  ctx.lineTo(cx, h);
  ctx.moveTo(0, cy);
  ctx.lineTo(w, cy);
  ctx.stroke();

  // Axis labels
  ctx.fillStyle = '#5C6B85';
  ctx.font = '12px sans-serif';
  ctx.fillText('y', cx + 8, 16);
  ctx.fillText('x', w - 16, cy - 8);
  ctx.fillText('O', cx + 6, cy + 14);

  // Draw f(x) = ax²
  ctx.strokeStyle = '#2563EB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  let started = false;
  for (let px = 0; px < w; px++) {
    const x = (px - cx) / scale;
    const y = a * x * x;
    const py = cy - y * scale;
    if (py < -100 || py > h + 100) { started = false; continue; }
    if (!started) {
      ctx.moveTo(px, py);
      started = true;
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.stroke();

  // Draw y = x reference (dashed) for inverse intuition
  ctx.strokeStyle = 'rgba(37, 99, 235, 0.3)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(0, h);
  ctx.lineTo(w, 0);
  ctx.stroke();
  ctx.setLineDash([]);

  // Status text on canvas
  ctx.font = '13px sans-serif';
  ctx.fillStyle = '#1A2235';
  ctx.fillText(\`f(x) = \${a.toFixed(1)}x²\`, 20, 28);

  // Update status
  const statusEl = document.getElementById('funcStatus');
  if (Math.abs(a) < 0.1) {
    statusEl.innerHTML = '⚠️ a 接近 0 时，函数退化成一条直线 y=0，这时候更不是单射了。';
  } else if (a > 0) {
    statusEl.innerHTML = '⚠️ 定义域为全体实数时，f(x) = ax² 不是单射（一个 y 对应两个 x），所以没有逆映射。<br>💡 如果把定义域限制在 [0, +∞)，它就变成单射了，就有逆函数了。';
  } else {
    statusEl.innerHTML = '⚠️ a 为负数时，开口向下，但依然不是单射（一个 y 还是对应两个 x）。';
  }
}

const sliderA = document.getElementById('sliderA');
sliderA.addEventListener('input', function() {
  a = parseFloat(this.value);
  document.getElementById('aValue').textContent = a.toFixed(1);
  drawFunction();
});

// ==================== TOC smooth scroll ====================
document.querySelectorAll('.toc a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ==================== Initialize ====================
window.addEventListener('load', () => {
  showMapExample(0);
  showMapType(0);
  drawFunction();
});

// Redraw on resize
window.addEventListener('resize', () => {
  showMapExample(currentExample);
  showMapType(currentType);
});
<\/script>

</body>
</html>
`,I5=`---
{"no":"第二章","title":"函数","order":2}
---
<!-- Generated by Trae Work -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>高等数学 · 函数 | 交互式笔记</title>
<style>
:root {
  --page-bg: #F7F9FC;
  --page-surface: #EEF2F8;
  --page-surface-muted: #DCE3F0;
  --page-text: #1A2235;
  --page-text-secondary: #2D3A54;
  --page-text-muted: #5C6B85;
  --page-text-disabled: #8FA0BD;
  --page-border: #C9D3E6;
  --page-brand: #2563EB;
  --page-brand-hover: #1D4ED8;
  --page-brand-active: #1E40AF;
  --page-brand-soft: #E0E9FA;
  --page-brand-soft-strong: #B9CDF4;
  --page-brand-text: #1E3A8A;
  --success: #059669;
  --warning: #D97706;
  --danger: #DC2626;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: var(--page-text);
  background: var(--page-bg);
  -webkit-font-smoothing: antialiased;
}

.report-intro {
  background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%);
  color: white;
  padding: 56px 24px 48px;
  position: relative;
  overflow: hidden;
}
.report-intro::before {
  content: '';
  position: absolute;
  top: -80px; right: -40px;
  width: 240px; height: 240px;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
}
.report-intro::after {
  content: '';
  position: absolute;
  bottom: -100px; left: 5%;
  width: 200px; height: 200px;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
}
.report-intro__content {
  max-width: 880px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.report-intro__eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #BFDBFE;
  background: rgba(255,255,255,0.15);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}
.report-intro h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 12px;
}
.report-intro__summary {
  font-size: 16px;
  line-height: 1.7;
  max-width: 640px;
  opacity: 0.9;
}
.report-intro__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.2);
  font-size: 13px;
  opacity: 0.85;
}
.report-intro__meta span strong {
  font-weight: 600;
  margin-left: 4px;
}

main {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

section {
  margin-bottom: 48px;
  scroll-margin-top: 24px;
}

h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--page-text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--page-brand-soft-strong);
  display: flex;
  align-items: center;
  gap: 10px;
}
h2 .emoji { font-size: 24px; }

h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--page-text);
  margin-top: 28px;
  margin-bottom: 12px;
}

h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--page-text-secondary);
  margin-top: 20px;
  margin-bottom: 8px;
}

p { margin-bottom: 14px; color: var(--page-text-secondary); }
strong { color: var(--page-text); font-weight: 600; }

blockquote {
  border-left: 4px solid var(--page-brand);
  padding-left: 16px;
  margin: 16px 0;
  color: var(--page-text-secondary);
}

ul, ol {
  margin-bottom: 14px;
  padding-left: 24px;
  color: var(--page-text-secondary);
}
li { margin-bottom: 6px; }
li::marker { color: var(--page-brand); }

table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 20px;
  font-size: 14px;
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 10px;
  overflow: hidden;
}
caption {
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: var(--page-text);
  margin-bottom: 8px;
  padding: 0 2px;
}
thead { background: var(--page-surface); }
th {
  text-align: left;
  padding: 10px 14px;
  font-weight: 600;
  color: var(--page-text);
  border-bottom: 1px solid var(--page-border);
  font-size: 13px;
}
td {
  padding: 10px 14px;
  border-bottom: 1px solid var(--page-border);
  color: var(--page-text-secondary);
  vertical-align: top;
}
tr:last-child td { border-bottom: none; }
tr:hover td { background: var(--page-surface); }

.callout {
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 10px;
  padding: 16px 18px;
  margin: 18px 0;
}
.callout__label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  color: var(--page-text);
  margin-bottom: 8px;
}
.callout p { margin-bottom: 0; font-size: 14px; }
.callout--warn {
  background: #FFF7ED;
  border-color: #FED7AA;
}
.callout--warn .callout__label { color: #9A3412; }
.callout--insight {
  background: var(--page-brand-soft);
  border-color: var(--page-brand-soft-strong);
}
.callout--insight .callout__label { color: var(--page-brand-text); }

.formula {
  font-family: "SF Mono", "Consolas", "Liberation Mono", "Courier New", monospace;
  font-size: 14px;
  line-height: 1.8;
  background: var(--page-surface);
  border: 1px solid var(--page-border);
  border-radius: 10px;
  padding: 16px 20px;
  margin: 16px 0;
  color: var(--page-text-secondary);
  overflow-x: auto;
}
.formula .hl { color: var(--page-brand); font-weight: 600; }

.hierarchy {
  font-family: "SF Mono", "Consolas", "Liberation Mono", "Courier New", monospace;
  font-size: 13px;
  line-height: 1.9;
  background: var(--page-surface);
  border: 1px solid var(--page-border);
  border-radius: 10px;
  padding: 18px 20px;
  margin: 16px 0;
  color: var(--page-text-secondary);
  overflow-x: auto;
}
.hierarchy .hl { color: var(--page-brand); font-weight: 600; }
.hierarchy .hl2 { color: #60A5FA; font-weight: 500; }

.insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin: 20px 0;
}
.insight-card {
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 10px;
  padding: 16px;
  transition: border-color 0.2s;
}
.insight-card:hover { border-color: var(--page-brand); }
.insight-card__icon { font-size: 22px; margin-bottom: 8px; }
.insight-card__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--page-text);
  margin-bottom: 6px;
}
.insight-card__desc {
  font-size: 13px;
  color: var(--page-text-muted);
  line-height: 1.6;
}

.toc {
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 40px;
}
.toc__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--page-text);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  column-gap: 24px;
}
.toc li {
  margin-bottom: 6px;
  break-inside: avoid;
}
.toc a {
  color: var(--page-text-secondary);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}
.toc a:hover { color: var(--page-brand); }

.demo {
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 14px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
.demo__title {
  font-weight: 600;
  font-size: 15px;
  color: var(--page-text);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.demo__desc {
  font-size: 13px;
  color: var(--page-text-muted);
  margin-bottom: 16px;
}
.demo__canvas-wrap {
  background: var(--page-bg);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
}
.demo__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
.demo__btn {
  padding: 8px 16px;
  border: 1px solid var(--page-border);
  border-radius: 8px;
  background: white;
  color: var(--page-text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.demo__btn:hover {
  border-color: var(--page-brand);
  color: var(--page-brand);
}
.demo__btn--active {
  background: var(--page-brand);
  color: white;
  border-color: var(--page-brand);
  font-weight: 600;
}
.demo__btn--active:hover {
  background: var(--page-brand-hover);
  color: white;
}

.demo__slider-wrap {
  flex: 1;
  min-width: 200px;
}
.demo__slider-label {
  font-size: 12px;
  color: var(--page-text-muted);
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
}
.demo__slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--page-surface-muted);
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
}
.demo__slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--page-brand);
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(37,99,235,0.4);
}

.demo__result {
  margin-top: 14px;
  padding: 12px 16px;
  background: var(--page-bg);
  border-radius: 8px;
  font-size: 13px;
  color: var(--page-text-secondary);
  border-left: 3px solid var(--page-brand);
}

#functionCanvas, #boundedCanvas, #parityCanvas {
  width: 100%;
  height: 280px;
  border-radius: 8px;
  cursor: crosshair;
}
#boundedCanvas { height: 240px; }

.test-item {
  background: white;
  border: 1px solid var(--page-border);
  border-radius: 10px;
  padding: 14px 18px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s;
}
.test-item:hover { border-color: var(--page-brand); }
.test-item__q {
  font-weight: 600;
  font-size: 14px;
  color: var(--page-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.test-item__q::after {
  content: '▸';
  color: var(--page-text-muted);
  transition: transform 0.2s;
  font-size: 12px;
}
.test-item.open .test-item__q::after { transform: rotate(90deg); }
.test-item__a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s, padding 0.3s;
  font-size: 13px;
  color: var(--page-text-secondary);
}
.test-item.open .test-item__a {
  max-height: 600px;
  padding-top: 12px;
  margin-top: 8px;
  border-top: 1px solid var(--page-border);
}

/* Floor function visual */
.floor-demo-row {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}
.floor-input {
  flex: 1;
}
.floor-result {
  padding: 6px 14px;
  background: var(--page-brand-soft);
  color: var(--page-brand-text);
  border-radius: 6px;
  font-weight: 600;
  font-family: "SF Mono", Consolas, monospace;
  min-width: 50px;
  text-align: center;
}

/* Line rule demo */
.rule-demo {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.rule-col {
  flex: 1;
  min-width: 200px;
  text-align: center;
}
.rule-col__title {
  font-size: 13px;
  font-weight: 600;
  color: var(--page-text);
  margin-bottom: 8px;
}
.rule-col canvas {
  width: 100%;
  height: 220px;
  border-radius: 8px;
  background: var(--page-bg);
}
.rule-verdict {
  margin-top: 8px;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  display: inline-block;
}
.rule-verdict.yes {
  background: #D1FAE5;
  color: #065F46;
}
.rule-verdict.no {
  background: #FEE2E2;
  color: #991B1B;
}

footer {
  border-top: 1px solid var(--page-border);
  padding: 24px;
  text-align: center;
  font-size: 12px;
  color: var(--page-text-muted);
}

@media (max-width: 640px) {
  .report-intro { padding: 40px 20px 36px; }
  .report-intro h1 { font-size: 24px; }
  .report-intro__summary { font-size: 14px; }
  main { padding: 28px 16px 60px; }
  h2 { font-size: 18px; }
  h3 { font-size: 15px; }
  .toc ul { columns: 1; }
  .demo { padding: 16px; }
}
</style>
</head>
<body>

<header class="report-intro">
  <div class="report-intro__content">
    <span class="report-intro__eyebrow">📐 高等数学 · 第一章</span>
    <h1>函数：高数的研究对象</h1>
    <p class="report-intro__summary">
      从映射到函数，从定义到四大性质，从反函数到复合函数。
      这一页把函数的基础知识全部打通，还有可动手玩的可视化帮你理解抽象概念。
    </p>
    <div class="report-intro__meta">
      <span>📚 <strong>知识点</strong>：7大模块</span>
      <span>🎯 <strong>重点</strong>：四大性质 / 反函数 / 复合函数</span>
      <span>🎮 <strong>交互</strong>：5个可动手玩</span>
    </div>
  </div>
</header>

<main>

  <nav class="toc">
    <div class="toc__title">📑 本章目录</div>
    <ul>
      <li><a href="#sec1">一、函数的定义与构成</a></li>
      <li><a href="#sec2">二、四个经典函数</a></li>
      <li><a href="#sec3">三、函数的四大性质</a></li>
      <li><a href="#sec4">四、反函数</a></li>
      <li><a href="#sec5">五、复合函数</a></li>
      <li><a href="#sec6">六、函数的运算</a></li>
      <li><a href="#sec7">七、大学高数 vs 高中</a></li>
      <li><a href="#sec8">八、复习自测</a></li>
    </ul>
  </nav>

  <!-- Section 1 -->
  <section id="sec1">
    <h2><span class="emoji">🎯</span>一、函数的定义与构成</h2>

    <h3>什么是函数？</h3>

    <p>函数是映射的一种特例——<strong>从数集到数集的映射</strong>。</p>

    <blockquote>
      设数集 D ⊆ ℝ，f 是从 D 到 ℝ 上的一个映射，就叫函数。<br>
      记作：<strong>y = f(x)，x ∈ D</strong>
    </blockquote>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">x</div>
        <div class="insight-card__title">自变量</div>
        <div class="insight-card__desc">主动变化的量，定义域里随便取</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">y</div>
        <div class="insight-card__title">因变量</div>
        <div class="insight-card__desc">由 x 决定，跟着 x 变</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">D<sub>f</sub></div>
        <div class="insight-card__title">定义域</div>
        <div class="insight-card__desc">x 的取值范围，写成 D<sub>f</sub> 便于区分多个函数</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">R<sub>f</sub></div>
        <div class="insight-card__title">值域</div>
        <div class="insight-card__desc">y 的取值范围，是目标集合的子集</div>
      </div>
    </div>

    <h3>函数的两要素</h3>

    <table>
      <caption>函数的两要素</caption>
      <thead>
        <tr><th>要素</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>定义域 D<sub>f</sub></strong></td><td>x 的取值范围</td></tr>
        <tr><td><strong>对应法则 f</strong></td><td>x 怎么变成 y 的规则</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout__label">💡 为什么是两要素不是三要素？</div>
      <p>有的书说三要素（加上值域），但其实定义域和对应法则确定了，值域自然就确定了。所以两要素就够了。</p>
    </div>

    <div class="callout callout--insight">
      <div class="callout__label">📝 写法习惯</div>
      <p>高中学实数集喜欢写 <strong>R</strong>，大学高数里更习惯写成 <strong>(-∞, +∞)</strong>。</p>
      <p style="margin-top:6px;">因为 R 既可以表示实数集，也容易跟值域的 R 混淆。写 (-∞, +∞) 更清晰。</p>
    </div>
  </section>

  <!-- Section 2 -->
  <section id="sec2">
    <h2><span class="emoji">📊</span>二、四个经典函数例子</h2>

    <h3>例1：常函数 y = 2</h3>
    <div class="formula">
定义域：(-∞, +∞)<br>
值域：<span class="hl">{2}</span>   ← 注意是集合，不是数字2！
    </div>
    <p>x 根本不出现，说明 x 可以随便取，y 永远是 2。图像是一条水平直线。</p>

    <h3>例2：绝对值函数 y = |x|</h3>
    <div class="formula">
y = -x,  x &lt; 0<br>
y =  x,  x ≥ 0<br>
<br>
定义域：(-∞, +∞)<br>
值域：[0, +∞)
    </div>
    <p>图像是 V 字形，顶点在原点。</p>

    <h3>例3：符号函数 y = sgn x</h3>
    <div class="formula">
y =  1,  x &gt; 0<br>
y =  0,  x = 0<br>
y = -1,  x &lt; 0<br>
<br>
值域：<span class="hl">{-1, 0, 1}</span>   ← 只有三个值！
    </div>

    <p>有一个公式：<strong>x = sgn x · |x|</strong></p>
    <ul>
      <li>x > 0 时：1 · x = x ✅</li>
      <li>x = 0 时：0 · 0 = 0 ✅</li>
      <li>x < 0 时：(-1) · (-x) = x ✅</li>
    </ul>

    <h3>例4：取整函数 y = [x]（地板函数）</h3>

    <p><strong>定义：不超过 x 的最大整数。</strong></p>

    <!-- Interactive floor function demo -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：取整函数</div>
      <div class="demo__desc">输入一个数，看看取整结果是多少。特别注意负数！这是最容易错的地方。</div>
      <div class="demo__canvas-wrap">
        <div class="floor-demo-row">
          <div class="floor-input">
            <div class="demo__slider-label">
              <span>x =</span>
              <span id="floorXValue">11.8</span>
            </div>
            <input type="range" class="demo__slider" id="floorSlider" min="-5" max="12" step="0.1" value="11.8">
          </div>
          <div class="floor-result" id="floorResult">[11.8] = 11</div>
        </div>
        <canvas id="floorCanvas" width="800" height="180"></canvas>
      </div>
      <div class="demo__result" id="floorExplain">
        💡 11.8：不超过它的最大整数是 11，所以 [11.8] = 11
      </div>
    </div>

    <table>
      <caption>取整函数举例（注意负数！）</caption>
      <thead>
        <tr><th>x</th><th>[x]</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr><td>11.8</td><td style="font-weight:600;">11</td><td>不超过11.8的最大整数是11</td></tr>
        <tr><td>0.9</td><td style="font-weight:600;">0</td><td></td></tr>
        <tr><td>0</td><td style="font-weight:600;">0</td><td></td></tr>
        <tr><td style="color:var(--danger);">-0.9</td><td style="font-weight:600;color:var(--danger);">-1</td><td>⚠️ 易错！不是0，是-1（-0.9左边最近的整数）</td></tr>
        <tr><td style="color:var(--danger);">-3.8</td><td style="font-weight:600;color:var(--danger);">-4</td><td>⚠️ 易错！不是-3，是-4</td></tr>
      </tbody>
    </table>

    <div class="callout callout--warn">
      <div class="callout__label">⚠️ 易错点</div>
      <p>负数取整不是"去掉小数部分"，而是找<strong>左边最近的整数</strong>。</p>
      <p style="margin-top:6px;">比如 -3.8，你可能想当然地写 -3，但 -3 比 -3.8 大啊！-3 超过了 -3.8，不对。不超过 -3.8 的最大整数是 -4。</p>
    </div>

    <p><strong>图像特点：</strong></p>
    <ul>
      <li>阶梯形，每一段水平</li>
      <li><strong>左边实心点（包含），右边空心点（不包含）</strong></li>
      <li>每到整数点就跳一个单位</li>
    </ul>

    <p>取整函数后面讲极限定义的时候会用到，要记住它的图像特点。</p>
  </section>

  <!-- Section 3 -->
  <section id="sec3">
    <h2><span class="emoji">📈</span>三、函数的四大性质</h2>

    <h3>1. 有界性</h3>

    <h4>上界</h4>
    <p>如果存在 K₁，使得 f(x) ≤ K₁ 对所有 x 成立，则 K₁ 是一个<strong>上界</strong>。</p>
    <p>直观理解：函数图像都在 K₁ 这条横线的下面。</p>

    <h4>下界</h4>
    <p>如果存在 K₂，使得 f(x) ≥ K₂ 对所有 x 成立，则 K₂ 是一个<strong>下界</strong>。</p>

    <h4>有界</h4>
    <p>如果存在 M > 0，使得 |f(x)| ≤ M，则称 f(x) <strong>有界</strong>。</p>
    <p>直观理解：函数图像被 -M 和 M 两条横线框住了，跑不出去。</p>

    <!-- Interactive boundedness demo -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：有界 vs 无界</div>
      <div class="demo__desc">拖动滑块改变 M 的大小，看看不同函数能不能被框住。切换函数看看有界和无界的区别。</div>
      <div class="demo__canvas-wrap">
        <canvas id="boundedCanvas" width="800" height="240"></canvas>
      </div>
      <div class="demo__controls">
        <button class="demo__btn demo__btn--active" onclick="setBoundedFunc(0)">sin x（有界）</button>
        <button class="demo__btn" onclick="setBoundedFunc(1)">1/x 在 (0,1)（无界）</button>
        <button class="demo__btn" onclick="setBoundedFunc(2)">e^x（无界）</button>
      </div>
      <div class="demo__controls" style="margin-top:10px;">
        <div class="demo__slider-wrap">
          <div class="demo__slider-label">
            <span>界 M =</span>
            <span id="boundMValue">1.5</span>
          </div>
          <input type="range" class="demo__slider" id="boundSlider" min="0.5" max="10" step="0.5" value="1.5">
        </div>
      </div>
      <div class="demo__result" id="boundResult">
        ✅ sin x 的绝对值永远 ≤ 1，所以它一定有界。不管你 M 取多大，函数都不会突破。
      </div>
    </div>

    <h4>⚠️ 几个"不唯一"</h4>
    <ul>
      <li><strong>上界不唯一</strong>：K₁ 是上界，任何比 K₁ 大的数也都是上界</li>
      <li><strong>下界不唯一</strong>：K₂ 是下界，任何比 K₂ 小的数也都是下界</li>
      <li><strong>M 不唯一</strong>：|sin x| ≤ 1 成立，|sin x| ≤ 2 当然也成立</li>
    </ul>

    <div class="callout">
      <div class="callout__label">💡 理解</div>
      <p>重要的是"存在"，而不是"等于多少"。只要能找到一个就行。</p>
    </div>

    <h4>为什么要指定区间？</h4>

    <p>有界性跟区间有关，同一个函数在不同区间上可能完全不同。</p>

    <table>
      <caption>f(x) = 1/x 在不同区间上的有界性</caption>
      <thead>
        <tr><th>区间</th><th>有下界？</th><th>有上界？</th><th>有界吗？</th></tr>
      </thead>
      <tbody>
        <tr><td>(0, 1)</td><td>✅ 有（1就是下界）</td><td>❌ 无（x越接近0，y越大）</td><td>❌ 无界</td></tr>
        <tr><td>[1, 2]</td><td>✅ 有（1/2是下界）</td><td>✅ 有（1是上界）</td><td>✅ 有界</td></tr>
      </tbody>
    </table>

    <h4>无界</h4>

    <blockquote>
      对任意给定的 M > 0（不管多大），都存在 x₁ 使得 |f(x₁)| > M，就叫无界。
    </blockquote>

    <p>直观理解：<strong>你给我画多大的框，我都能找到一个点突破你的框。</strong></p>

    <h4>有界的充要条件</h4>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 重要结论</div>
      <p><strong>f(x) 有界 ⟺ f(x) 既有上界又有下界</strong></p>
    </div>

    <h3>2. 单调性</h3>

    <p>对区间 I 内任意 x₁ < x₂：</p>
    <ul>
      <li>f(x₁) < f(x₂) → <strong>单调增加</strong></li>
      <li>f(x₁) > f(x₂) → <strong>单调减少</strong></li>
    </ul>

    <div class="callout callout--warn">
      <div class="callout__label">⚠️ 必须指定区间</div>
      <p>讨论单调性，必须指明是在哪个区间上。</p>
      <p style="margin-top:6px;">比如 y = x²：</p>
      <ul>
        <li>在 (-∞, 0] 上单调减少</li>
        <li>在 [0, +∞) 上单调增加</li>
        <li>在 (-∞, +∞) 上不单调</li>
      </ul>
    </div>

    <p><strong>关于端点的小细节：</strong>端点写开写闭都不算错。单调性是考察区间的整体趋势，单个端点的值不影响。</p>

    <h3>3. 奇偶性</h3>

    <div class="callout callout--warn">
      <div class="callout__label">🚨 第一步：先看定义域</div>
      <p>判断奇偶性的第一步，先看定义域是否<strong>关于原点对称</strong>。</p>
      <p style="margin-top:6px;">如果不对称，直接就是非奇非偶，不用再往下判断了！</p>
    </div>

    <p>设定义域关于原点对称，任给 x：</p>
    <ul>
      <li>f(-x) = f(x) → <strong>偶函数</strong>，图像关于 y 轴对称</li>
      <li>f(-x) = -f(x) → <strong>奇函数</strong>，图像关于原点对称</li>
    </ul>

    <!-- Interactive parity demo -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：奇偶函数图像</div>
      <div class="demo__desc">点按钮切换，直观感受偶函数（y轴对称）和奇函数（原点对称）的区别。</div>
      <div class="demo__canvas-wrap">
        <canvas id="parityCanvas" width="800" height="240"></canvas>
      </div>
      <div class="demo__controls">
        <button class="demo__btn demo__btn--active" onclick="setParityFunc(0)">偶函数：y = x²</button>
        <button class="demo__btn" onclick="setParityFunc(1)">奇函数：y = x³</button>
        <button class="demo__btn" onclick="setParityFunc(2)">非奇非偶：y = x + 1</button>
      </div>
      <div class="demo__result" id="parityResult">
        💡 偶函数：关于 y 轴对称。取 x 和 -x，得到的 y 值是一样的。
      </div>
    </div>

    <p><strong>例子：</strong>y = x²，定义域 [-1, 2] → 非奇非偶（虽然 x² 本身是偶函数，但定义域限制后就不是了！）</p>

    <h3>4. 周期性</h3>

    <p>如果存在 L > 0，使得 f(x + L) = f(x) 对所有 x 都成立，则 f(x) 是<strong>周期函数</strong>，L 是它的一个周期。</p>

    <p>通常说的周期都是指<strong>最小正周期</strong>。</p>

    <table>
      <caption>常见周期函数</caption>
      <thead>
        <tr><th>函数</th><th>周期</th></tr>
      </thead>
      <tbody>
        <tr><td>sin x</td><td>2π</td></tr>
        <tr><td>cos x</td><td>2π</td></tr>
        <tr><td>tan x</td><td>π</td></tr>
        <tr><td>cot x</td><td>π</td></tr>
      </tbody>
    </table>

    <h4>狄利克雷函数——一个反直觉的例子</h4>

    <div class="formula">
D(x) = 1,  x 是有理数<br>
D(x) = 0,  x 是无理数
    </div>

    <p><strong>图像怎么画？</strong>有理数和无理数在数轴上都是密密麻麻的。所以它的图像不是两条连续的线，而是 y=1 和 y=0 上各有无穷多个密密麻麻的点，根本没法真正画出来。</p>

    <p><strong>它是周期函数吗？是！</strong></p>
    <p>任意正有理数 T 都是它的周期：</p>
    <ul>
      <li>x 是有理数 → x+T 也是有理数 → D(x+T) = 1 = D(x)</li>
      <li>x 是无理数 → x+T 也是无理数 → D(x+T) = 0 = D(x)</li>
    </ul>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 反直觉的结论</div>
      <p><strong>并非每个周期函数都有最小正周期。</strong></p>
      <p style="margin-top:6px;">狄利克雷函数就是经典反例——正有理数可以无限小，你找不到最小的那个。</p>
    </div>
  </section>

  <!-- Section 4 -->
  <section id="sec4">
    <h2><span class="emoji">🔄</span>四、反函数</h2>

    <h3>前提：原函数必须是单射</h3>

    <p>跟逆映射一样，只有单射的函数才有反函数。</p>

    <h3>两个重要法则</h3>

    <!-- Interactive line rule demo -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：竖线法则 vs 横线法则</div>
      <div class="demo__desc">左边：竖线法则判断是不是函数。右边：横线法则判断有没有反函数。拖动滑块移动线的位置，看交点数量。</div>
      <div class="demo__canvas-wrap">
        <div class="rule-demo">
          <div class="rule-col">
            <div class="rule-col__title">竖线法则（是不是函数）</div>
            <canvas id="vertCanvas" width="360" height="220"></canvas>
            <div class="rule-verdict yes" id="vertVerdict">✅ 是函数</div>
          </div>
          <div class="rule-col">
            <div class="rule-col__title">横线法则（有没有反函数）</div>
            <canvas id="horzCanvas" width="360" height="220"></canvas>
            <div class="rule-verdict no" id="horzVerdict">❌ 没有反函数</div>
          </div>
        </div>
      </div>
      <div class="demo__controls">
        <button class="demo__btn demo__btn--active" onclick="setRuleFunc(0)">y = x²</button>
        <button class="demo__btn" onclick="setRuleFunc(1)">y = x³</button>
        <button class="demo__btn" onclick="setRuleFunc(2)">y = sin x</button>
      </div>
      <div class="demo__controls" style="margin-top:10px;">
        <div class="demo__slider-wrap">
          <div class="demo__slider-label">
            <span>移动线的位置</span>
            <span id="ruleLinePos">0</span>
          </div>
          <input type="range" class="demo__slider" id="ruleSlider" min="-4" max="4" step="0.1" value="0">
        </div>
      </div>
    </div>

    <table>
      <caption>两个法则对比</caption>
      <thead>
        <tr><th>法则</th><th>判断什么</th><th>原理</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>竖线法则</strong></td><td>一条曲线是不是函数</td><td>一个 x 只能对应一个 y</td></tr>
        <tr><td><strong>横线法则</strong></td><td>一个函数有没有反函数</td><td>一个 y 只能对应一个 x</td></tr>
      </tbody>
    </table>

    <p>单调函数一定有反函数（因为自动满足横线法则）。</p>

    <h3>反函数怎么求？</h3>

    <div class="hierarchy">
第一步：从 y = f(x) 中解出 x，得到 x = f⁻¹(y)<br>
第二步：把 x 和 y 互换，写成 y = f⁻¹(x)
    </div>

    <p><strong>例子：y = 2x - 3</strong></p>
    <div class="formula">
y = 2x - 3<br>
2x = y + 3<br>
x = (y + 3) / 2&nbsp;&nbsp;&nbsp;← 第一步完成<br>
<br>
交换 x, y：<br>
<span class="hl">y = (x + 3) / 2</span>&nbsp;&nbsp;&nbsp;← 这就是反函数
    </div>

    <h3>为什么图像关于 y = x 对称？</h3>

    <div class="callout callout--insight">
      <div class="callout__label">💡 本质</div>
      <p>对称是因为我们把 <strong>x 和 y 互换了</strong>。</p>
      <p style="margin-top:6px;">点 (a, b) 变成了点 (b, a)，而这两个点关于 y=x 对称。</p>
      <p style="margin-top:6px;">注意：如果不互换 x 和 y，x = f⁻¹(y) 和 y = f(x) 的图像是同一条线！</p>
    </div>

    <div class="callout callout--warn">
      <div class="callout__label">📌 一个容易叫错的名字</div>
      <p>原来的函数不叫"原函数"，叫<strong>直接函数</strong>。</p>
      <p style="margin-top:6px;">因为"原函数"在不定积分里有别的意思（求导之前的函数），为了避免混淆，这里叫直接函数。</p>
    </div>
  </section>

  <!-- Section 5 -->
  <section id="sec5">
    <h2><span class="emoji">🔗</span>五、复合函数</h2>

    <h3>定义</h3>

    <p>设 y = f(u)，u = g(x)，则 <strong>y = f(g(x))</strong> 就是复合函数。</p>

    <ul>
      <li><strong>u</strong> 叫做<strong>中间变量</strong></li>
      <li><strong>关键条件：R<sub>g</sub> ⊆ D<sub>f</sub></strong>（内层的值域要包在外层的定义域里）</li>
    </ul>

    <h3>例子</h3>

    <h4>例1：y = √(tan x)</h4>
    <ul>
      <li>外层：y = √u，D<sub>f</sub> = [0, +∞)</li>
      <li>内层：u = tan x，R<sub>g</sub> = (-∞, +∞)</li>
    </ul>
    <p>R<sub>g</sub> 没有完全包含在 D<sub>f</sub> 里 → x 随便取的话，复合不成立。</p>
    <p>但如果限制 x ∈ [0, π/2)，则 tan x ≥ 0，复合就成立了。</p>

    <h4>例2：y = √(-1 - x²)</h4>
    <ul>
      <li>外层：y = √u，D<sub>f</sub> = [0, +∞)</li>
      <li>内层：u = -1 - x²，R<sub>g</sub> = (-∞, -1]</li>
    </ul>
    <p>R<sub>g</sub> 和 D<sub>f</sub> <strong>完全没有交集</strong> → 永远不能复合，不管 x 取什么都不行。</p>

    <div class="callout">
      <div class="callout__label">💡 记住</div>
      <p>复合函数是否合法，跟 x 的取值范围有关。内层的值域必须装进外层的定义域里。</p>
    </div>
  </section>

  <!-- Section 6 -->
  <section id="sec6">
    <h2><span class="emoji">➕</span>六、函数的运算</h2>

    <h3>加减乘除</h3>

    <table>
      <caption>函数的四则运算</caption>
      <thead>
        <tr><th>运算</th><th>定义</th><th>定义域</th></tr>
      </thead>
      <tbody>
        <tr><td>和/差</td><td>(f ± g)(x) = f(x) ± g(x)</td><td>D<sub>f</sub> ∩ D<sub>g</sub></td></tr>
        <tr><td>积</td><td>(f · g)(x) = f(x) · g(x)</td><td>D<sub>f</sub> ∩ D<sub>g</sub></td></tr>
        <tr><td>商</td><td>(f/g)(x) = f(x) / g(x)</td><td>D<sub>f</sub> ∩ D<sub>g</sub> 且 g(x) ≠ 0</td></tr>
      </tbody>
    </table>

    <h3>一个重要结论</h3>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 任意函数 = 偶函数 + 奇函数</div>
      <p>设 f(x) 的定义域关于原点对称，则 f(x) 一定可以写成一个偶函数和一个奇函数的和。</p>
    </div>

    <p><strong>怎么构造？</strong></p>

    <div class="formula">
偶函数部分：g(x) = <span class="hl">[f(x) + f(-x)] / 2</span><br>
奇函数部分：h(x) = <span class="hl">[f(x) - f(-x)] / 2</span><br>
<br>
验证：<br>
g(-x) = [f(-x) + f(x)] / 2 = g(x)&nbsp;&nbsp;✅ 偶的<br>
h(-x) = [f(-x) - f(x)] / 2 = -h(x)&nbsp;&nbsp;✅ 奇的
    </div>

    <p>这是一个<strong>构造性证明</strong>——不是只告诉你"存在"，还把具体怎么构造给出来了。</p>
  </section>

  <!-- Section 7 -->
  <section id="sec7">
    <h2><span class="emoji">🎓</span>七、大学高数 vs 高中数学</h2>

    <div class="callout callout--insight">
      <div class="callout__label">💪 给你的信心</div>
      <p><strong>关系不大。高中没学好，高数也能学好。</strong></p>
      <p style="margin-top:8px;">高考成绩跟高数成绩几乎没关系。第一次期末考以后，你就会发现跟高考成绩简直毫无关系。</p>
    </div>

    <h4>高数里没有什么？</h4>
    <ul>
      <li>没有立体几何</li>
      <li>没有圆的复杂性质（只要会求圆心和半径就行）</li>
      <li>没有双曲线、抛物线</li>
      <li>没有椭圆的复杂性质（只用参数方程和面积公式）</li>
      <li>没有数列难题（只用最基本的求和）</li>
    </ul>

    <div class="callout">
      <div class="callout__label">📌 记住</div>
      <p>忘掉高考成绩，一切重新开始。</p>
    </div>
  </section>

  <!-- Section 8 -->
  <section id="sec8">
    <h2><span class="emoji">❓</span>八、复习自测</h2>

    <p>点每道题展开答案，先自己想再看。</p>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">1. 函数的两要素是什么？为什么不是三要素？</div>
      <div class="test-item__a">定义域和对应法则。因为值域由定义域和对应法则唯一确定，所以两要素就够了。</div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">2. 取整函数 [x] 是什么意思？[-0.9] 等于多少？</div>
      <div class="test-item__a">不超过 x 的最大整数。[-0.9] = -1（易错！不是 0，因为 0 超过了 -0.9）。</div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">3. 什么是上界？上界唯一吗？</div>
      <div class="test-item__a">如果存在 K₁ 使得 f(x) ≤ K₁ 对所有 x 成立，K₁ 就叫上界。上界不唯一，任何比 K₁ 大的数也都是上界。</div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">4. f(x) = 1/x 在 (0,1) 上有界吗？为什么？</div>
      <div class="test-item__a">无界。因为 x 越接近 0，f(x) 越大，不管你取多大的 M，都能找到足够接近 0 的 x 使得 f(x) > M。</div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">5. 有界的充要条件是什么？</div>
      <div class="test-item__a">既有上界又有下界。</div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">6. 判断奇偶性的第一步是什么？</div>
      <div class="test-item__a">先看定义域是否关于原点对称。如果不对称，直接非奇非偶。</div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">7. 狄利克雷函数是什么？它有什么特别的性质？</div>
      <div class="test-item__a">
        D(x) = 1（x为有理数）或 0（x为无理数）。<br>
        它是周期函数，但没有最小正周期（任何正有理数都是周期）。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">8. 竖线法则和横线法则分别用来判断什么？</div>
      <div class="test-item__a">
        • 竖线法则：判断一条曲线是不是函数（一个 x 只能对应一个 y）<br>
        • 横线法则：判断一个函数有没有反函数（一个 y 只能对应一个 x）
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">9. 反函数的图像为什么关于 y = x 对称？</div>
      <div class="test-item__a">
        因为求反函数最后一步把 x 和 y 互换了。点 (a,b) 变成了 (b,a)，这两个点关于 y=x 对称。
        <br><br>
        注意：如果不互换 x 和 y，x = f⁻¹(y) 和 y = f(x) 的图像是一样的。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">10. 复合函数成立的条件是什么？</div>
      <div class="test-item__a">内层函数 g 的值域 R_g 必须包含在外层函数 f 的定义域 D_f 里面，即 R_g ⊆ D_f。</div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">11. 任意一个函数都可以写成一个偶函数加一个奇函数吗？怎么构造？</div>
      <div class="test-item__a">
        可以（前提是定义域关于原点对称）。<br>
        偶函数部分：g(x) = [f(x) + f(-x)] / 2<br>
        奇函数部分：h(x) = [f(x) - f(-x)] / 2
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">12. 取整函数的图像有什么特点？</div>
      <div class="test-item__a">阶梯形，每一段水平，左闭右开（左边实心点，右边空心点）。在每个整数点函数值跳跃一个单位。</div>
    </div>
  </section>

</main>

<footer>
  📐 高等数学 · 函数 | 交互式学习笔记
</footer>

<script>
// ==================== TOC smooth scroll ====================
document.querySelectorAll('.toc a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ==================== Floor function demo ====================
const floorSlider = document.getElementById('floorSlider');
const floorCanvas = document.getElementById('floorCanvas');
const floorCtx = floorCanvas.getContext('2d');

function drawFloorFunction(xVal) {
  const w = floorCanvas.width;
  const h = floorCanvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const scale = 40;

  floorCtx.fillStyle = '#F7F9FC';
  floorCtx.fillRect(0, 0, w, h);

  // Grid
  floorCtx.strokeStyle = '#DCE3F0';
  floorCtx.lineWidth = 1;
  for (let x = cx % scale; x < w; x += scale) {
    floorCtx.beginPath(); floorCtx.moveTo(x, 0); floorCtx.lineTo(x, h); floorCtx.stroke();
  }
  for (let y = cy % scale; y < h; y += scale) {
    floorCtx.beginPath(); floorCtx.moveTo(0, y); floorCtx.lineTo(w, y); floorCtx.stroke();
  }

  // Axes
  floorCtx.strokeStyle = '#5C6B85';
  floorCtx.lineWidth = 2;
  floorCtx.beginPath();
  floorCtx.moveTo(cx, 0); floorCtx.lineTo(cx, h);
  floorCtx.moveTo(0, cy); floorCtx.lineTo(w, cy);
  floorCtx.stroke();

  // Draw floor function segments
  floorCtx.strokeStyle = '#2563EB';
  floorCtx.lineWidth = 3;
  floorCtx.fillStyle = '#2563EB';

  for (let n = -5; n < 12; n++) {
    const x1 = cx + n * scale;
    const x2 = cx + (n + 1) * scale;
    const y = cy - n * scale;

    // Horizontal line
    floorCtx.beginPath();
    floorCtx.moveTo(x1, y);
    floorCtx.lineTo(x2 - 2, y);
    floorCtx.stroke();

    // Left dot (solid)
    floorCtx.beginPath();
    floorCtx.arc(x1, y, 4, 0, Math.PI * 2);
    floorCtx.fill();

    // Right dot (hollow)
    floorCtx.beginPath();
    floorCtx.arc(x2, y, 4, 0, Math.PI * 2);
    floorCtx.fillStyle = '#F7F9FC';
    floorCtx.fill();
    floorCtx.strokeStyle = '#2563EB';
    floorCtx.lineWidth = 2;
    floorCtx.stroke();
    floorCtx.fillStyle = '#2563EB';
    floorCtx.strokeStyle = '#2563EB';
    floorCtx.lineWidth = 3;
  }

  // Highlight current x
  const px = cx + xVal * scale;
  const floorVal = Math.floor(xVal);
  const py = cy - floorVal * scale;

  // Vertical line
  floorCtx.strokeStyle = '#F59E0B';
  floorCtx.lineWidth = 2;
  floorCtx.setLineDash([5, 4]);
  floorCtx.beginPath();
  floorCtx.moveTo(px, 0);
  floorCtx.lineTo(px, py);
  floorCtx.stroke();
  floorCtx.setLineDash([]);

  // Point on function
  floorCtx.fillStyle = '#F59E0B';
  floorCtx.beginPath();
  floorCtx.arc(px, py, 6, 0, Math.PI * 2);
  floorCtx.fill();

  // Labels
  floorCtx.fillStyle = '#1A2235';
  floorCtx.font = 'bold 12px sans-serif';
  floorCtx.fillText(\`x = \${xVal.toFixed(1)}\`, px + 8, 20);
  floorCtx.fillText(\`[x] = \${floorVal}\`, px + 8, 36);
}

floorSlider.addEventListener('input', function() {
  const val = parseFloat(this.value);
  document.getElementById('floorXValue').textContent = val.toFixed(1);
  const floorVal = Math.floor(val);
  document.getElementById('floorResult').textContent = \`[\${val.toFixed(1)}] = \${floorVal}\`;

  let explain = '';
  if (val >= 0) {
    explain = \`💡 \${val.toFixed(1)}：不超过它的最大整数是 \${floorVal}，所以 [\${val.toFixed(1)}] = \${floorVal}\`;
  } else {
    explain = \`⚠️ \${val.toFixed(1)} 是负数！不超过它的最大整数是 \${floorVal}（不是 \${floorVal + 1}，因为 \${floorVal + 1} 比 \${val.toFixed(1)} 大，超过了）\`;
  }
  document.getElementById('floorExplain').innerHTML = explain;

  drawFloorFunction(val);
});

// ==================== Boundedness demo ====================
let boundedFuncIdx = 0;
const boundedCanvas = document.getElementById('boundedCanvas');
const boundCtx = boundedCanvas.getContext('2d');
const boundSlider = document.getElementById('boundSlider');

const boundedFuncs = [
  { name: 'sin x', has: '有界', func: (x) => Math.sin(x), domain: [-Math.PI * 2, Math.PI * 2], scaleY: 40 },
  { name: '1/x 在 (0,1)', has: '无界', func: (x) => x > 0.05 ? 1/x : null, domain: [0.05, 1.2], scaleY: 10 },
  { name: 'e^x', has: '无界', func: (x) => Math.exp(x), domain: [-2, 2], scaleY: 20 }
];

function drawBounded() {
  const w = boundedCanvas.width;
  const h = boundedCanvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const M = parseFloat(boundSlider.value);
  const f = boundedFuncs[boundedFuncIdx];
  const scaleX = 60;
  const scaleY = f.scaleY;

  boundCtx.fillStyle = '#F7F9FC';
  boundCtx.fillRect(0, 0, w, h);

  // Grid
  boundCtx.strokeStyle = '#DCE3F0';
  boundCtx.lineWidth = 1;
  for (let x = cx % scaleX; x < w; x += scaleX) {
    boundCtx.beginPath(); boundCtx.moveTo(x, 0); boundCtx.lineTo(x, h); boundCtx.stroke();
  }
  for (let y = cy % scaleY; y < h; y += scaleY) {
    boundCtx.beginPath(); boundCtx.moveTo(0, y); boundCtx.lineTo(w, y); boundCtx.stroke();
  }

  // Axes
  boundCtx.strokeStyle = '#5C6B85';
  boundCtx.lineWidth = 2;
  boundCtx.beginPath();
  boundCtx.moveTo(cx, 0); boundCtx.lineTo(cx, h);
  boundCtx.moveTo(0, cy); boundCtx.lineTo(w, cy);
  boundCtx.stroke();

  // M bounds
  boundCtx.strokeStyle = '#F59E0B';
  boundCtx.lineWidth = 2;
  boundCtx.setLineDash([6, 4]);
  const yUpper = cy - M * scaleY;
  const yLower = cy + M * scaleY;
  if (yUpper > 0) {
    boundCtx.beginPath();
    boundCtx.moveTo(0, yUpper);
    boundCtx.lineTo(w, yUpper);
    boundCtx.stroke();
    boundCtx.fillStyle = '#F59E0B';
    boundCtx.font = '12px sans-serif';
    boundCtx.fillText(\`M = \${M}\`, 8, yUpper - 4);
  }
  if (yLower < h) {
    boundCtx.beginPath();
    boundCtx.moveTo(0, yLower);
    boundCtx.lineTo(w, yLower);
    boundCtx.stroke();
    boundCtx.fillStyle = '#F59E0B';
    boundCtx.fillText(\`-M = \${-M}\`, 8, yLower + 14);
  }
  boundCtx.setLineDash([]);

  // Shade bounded area
  boundCtx.fillStyle = 'rgba(245, 158, 11, 0.08)';
  const topY = Math.max(0, yUpper);
  const botY = Math.min(h, yLower);
  boundCtx.fillRect(0, topY, w, botY - topY);

  // Function
  boundCtx.strokeStyle = '#2563EB';
  boundCtx.lineWidth = 3;
  boundCtx.beginPath();
  let started = false;
  for (let px = 0; px < w; px++) {
    const x = (px - cx) / scaleX;
    if (x < f.domain[0] || x > f.domain[1]) continue;
    const y = f.func(x);
    if (y === null || !isFinite(y)) { started = false; continue; }
    const py = cy - y * scaleY;
    if (py < -100 || py > h + 100) { started = false; continue; }
    if (!started) { boundCtx.moveTo(px, py); started = true; }
    else { boundCtx.lineTo(px, py); }
  }
  boundCtx.stroke();

  // Function label
  boundCtx.fillStyle = '#1A2235';
  boundCtx.font = 'bold 13px sans-serif';
  boundCtx.fillText(\`y = \${f.name}\`, 12, 20);

  // Result text
  const resultEl = document.getElementById('boundResult');
  if (boundedFuncIdx === 0) {
    resultEl.innerHTML = '✅ <strong>sin x 有界</strong>。它的绝对值永远 ≤ 1，不管 M 取多大，函数都不会突破上下界。';
  } else if (boundedFuncIdx === 1) {
    const isBounded = M >= 1 / 0.05; // 20
    if (isBounded) {
      resultEl.innerHTML = '⚠️ 注意：在当前显示的范围内看起来被框住了，但 <strong>1/x 在 (0,1) 上是无界的</strong>。x 可以无限接近 0，函数值可以无限大，你再大的 M 都能突破。';
    } else {
      resultEl.innerHTML = '❌ <strong>1/x 无界</strong>！函数已经突破了上界。x 越接近 0，y 越大，没有上限。';
    }
  } else {
    resultEl.innerHTML = '❌ <strong>e^x 无界</strong>。右边可以无限增长，不管 M 取多大，总能找到 x 使得 e^x > M。';
  }
}

function setBoundedFunc(idx) {
  boundedFuncIdx = idx;
  document.querySelectorAll('#sec3 .demo:nth-of-type(1) .demo__controls:nth-of-type(1) .demo__btn').forEach((btn, i) => {
    btn.classList.toggle('demo__btn--active', i === idx);
  });
  // Reset M to reasonable value
  boundSlider.value = idx === 0 ? 1.5 : (idx === 1 ? 3 : 4);
  document.getElementById('boundMValue').textContent = boundSlider.value;
  drawBounded();
}

boundSlider.addEventListener('input', function() {
  document.getElementById('boundMValue').textContent = this.value;
  drawBounded();
});

// ==================== Parity demo ====================
let parityFuncIdx = 0;
const parityCanvas = document.getElementById('parityCanvas');
const parityCtx = parityCanvas.getContext('2d');

const parityFuncs = [
  { name: 'y = x²', type: '偶函数', func: x => x*x, symmetric: 'y轴' },
  { name: 'y = x³', type: '奇函数', func: x => x*x*x / 3, symmetric: '原点' },
  { name: 'y = x + 1', type: '非奇非偶', func: x => x + 1, symmetric: '无' }
];

function drawParity() {
  const w = parityCanvas.width;
  const h = parityCanvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const scale = 40;
  const f = parityFuncs[parityFuncIdx];

  parityCtx.fillStyle = '#F7F9FC';
  parityCtx.fillRect(0, 0, w, h);

  // Grid
  parityCtx.strokeStyle = '#DCE3F0';
  parityCtx.lineWidth = 1;
  for (let x = cx % scale; x < w; x += scale) {
    parityCtx.beginPath(); parityCtx.moveTo(x, 0); parityCtx.lineTo(x, h); parityCtx.stroke();
  }
  for (let y = cy % scale; y < h; y += scale) {
    parityCtx.beginPath(); parityCtx.moveTo(0, y); parityCtx.lineTo(w, y); parityCtx.stroke();
  }

  // Axes
  parityCtx.strokeStyle = '#5C6B85';
  parityCtx.lineWidth = 2;
  parityCtx.beginPath();
  parityCtx.moveTo(cx, 0); parityCtx.lineTo(cx, h);
  parityCtx.moveTo(0, cy); parityCtx.lineTo(w, cy);
  parityCtx.stroke();

  // y = x line (for reference)
  if (parityFuncIdx !== 2) {
    parityCtx.strokeStyle = 'rgba(37, 99, 235, 0.2)';
    parityCtx.lineWidth = 1.5;
    parityCtx.setLineDash([4, 4]);
    parityCtx.beginPath();
    parityCtx.moveTo(0, h);
    parityCtx.lineTo(w, 0);
    parityCtx.stroke();
    parityCtx.setLineDash([]);
  }

  // Function
  parityCtx.strokeStyle = '#2563EB';
  parityCtx.lineWidth = 3;
  parityCtx.beginPath();
  let started = false;
  for (let px = 0; px < w; px++) {
    const x = (px - cx) / scale;
    const y = f.func(x);
    const py = cy - y * scale;
    if (py < -100 || py > h + 100) { started = false; continue; }
    if (!started) { parityCtx.moveTo(px, py); started = true; }
    else { parityCtx.lineTo(px, py); }
  }
  parityCtx.stroke();

  // Highlight symmetry: pick x = 1.5
  const xVal = 1.5;
  const yVal = f.func(xVal);
  const negYVal = f.func(-xVal);

  // Point at x
  const px1 = cx + xVal * scale;
  const py1 = cy - yVal * scale;
  parityCtx.fillStyle = '#F59E0B';
  parityCtx.beginPath();
  parityCtx.arc(px1, py1, 6, 0, Math.PI * 2);
  parityCtx.fill();
  parityCtx.fillStyle = '#1A2235';
  parityCtx.font = '11px sans-serif';
  parityCtx.fillText(\`(\${xVal}, \${yVal.toFixed(2)})\`, px1 + 8, py1 - 6);

  // Point at -x
  const px2 = cx - xVal * scale;
  const py2 = cy - negYVal * scale;
  parityCtx.fillStyle = '#EF4444';
  parityCtx.beginPath();
  parityCtx.arc(px2, py2, 6, 0, Math.PI * 2);
  parityCtx.fill();
  parityCtx.fillText(\`(\${-xVal}, \${negYVal.toFixed(2)})\`, px2 - 90, py2 - 6);

  // Symmetry line
  if (parityFuncIdx === 0) {
    // y-axis symmetry: draw horizontal line between points
    parityCtx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
    parityCtx.lineWidth = 1.5;
    parityCtx.setLineDash([4, 4]);
    parityCtx.beginPath();
    parityCtx.moveTo(px1, py1);
    parityCtx.lineTo(px2, py2);
    parityCtx.stroke();
    parityCtx.setLineDash([]);
  } else if (parityFuncIdx === 1) {
    // origin symmetry: draw line through origin
    parityCtx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
    parityCtx.lineWidth = 1.5;
    parityCtx.setLineDash([4, 4]);
    parityCtx.beginPath();
    parityCtx.moveTo(px1, py1);
    parityCtx.lineTo(px2, py2);
    parityCtx.stroke();
    parityCtx.setLineDash([]);
    // Mark origin midpoint
    parityCtx.fillStyle = '#F59E0B';
    parityCtx.beginPath();
    parityCtx.arc(cx, cy, 4, 0, Math.PI * 2);
    parityCtx.fill();
  }

  // Label
  parityCtx.fillStyle = '#1A2235';
  parityCtx.font = 'bold 13px sans-serif';
  parityCtx.fillText(\`\${f.name}（\${f.type}）\`, 12, 20);

  // Result
  const resultEl = document.getElementById('parityResult');
  if (parityFuncIdx === 0) {
    resultEl.innerHTML = '💡 <strong>偶函数</strong>：关于 y 轴对称。取 x 和 -x，得到的 y 值是一样的（黄点和红点在同一水平线上）。';
  } else if (parityFuncIdx === 1) {
    resultEl.innerHTML = '💡 <strong>奇函数</strong>：关于原点对称。点 (x, y) 绕原点转180°得到点 (-x, -y)，两个点的连线经过原点。';
  } else {
    resultEl.innerHTML = '⚠️ <strong>非奇非偶</strong>：既不关于 y 轴对称，也不关于原点对称。两个点之间没有对称关系。';
  }
}

function setParityFunc(idx) {
  parityFuncIdx = idx;
  // Find buttons in the correct demo container
  const buttons = document.querySelectorAll('#sec3 .demo:nth-of-type(2) .demo__controls:nth-of-type(1) .demo__btn');
  buttons.forEach((btn, i) => {
    btn.classList.toggle('demo__btn--active', i === idx);
  });
  drawParity();
}

// ==================== Line rule demo ====================
let ruleFuncIdx = 0;
const vertCanvas = document.getElementById('vertCanvas');
const horzCanvas = document.getElementById('horzCanvas');
const vertCtx = vertCanvas.getContext('2d');
const horzCtx = horzCanvas.getContext('2d');
const ruleSlider = document.getElementById('ruleSlider');

const ruleFuncs = [
  { name: 'y = x²', func: x => x*x, inverse: y => [Math.sqrt(Math.max(0,y)), -Math.sqrt(Math.max(0,y))], isFunc: true, hasInverse: false },
  { name: 'y = x³', func: x => x*x*x/3, inverse: y => [Math.cbrt(y*3)], isFunc: true, hasInverse: true },
  { name: 'y = sin x', func: x => Math.sin(x), inverse: y => {
    const base = Math.asin(Math.max(-1, Math.min(1, y)));
    return [base, Math.PI - base];
  }, isFunc: true, hasInverse: false }
];

function drawRule() {
  const f = ruleFuncs[ruleFuncIdx];
  const linePos = parseFloat(ruleSlider.value);
  document.getElementById('ruleLinePos').textContent = linePos.toFixed(1);

  // Common drawing function
  function drawGraph(ctx, w, h, type) {
    const cx = w / 2;
    const cy = h / 2;
    const scale = 35;

    ctx.fillStyle = '#F7F9FC';
    ctx.fillRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = '#DCE3F0';
    ctx.lineWidth = 1;
    for (let x = cx % scale; x < w; x += scale) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = cy % scale; y < h; y += scale) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#5C6B85';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, 0); ctx.lineTo(cx, h);
    ctx.moveTo(0, cy); ctx.lineTo(w, cy);
    ctx.stroke();

    // Function
    ctx.strokeStyle = '#2563EB';
    ctx.lineWidth = 3;
    ctx.beginPath();
    let started = false;
    for (let px = 0; px < w; px++) {
      const x = (px - cx) / scale;
      const y = f.func(x);
      const py = cy - y * scale;
      if (py < -100 || py > h + 100) { started = false; continue; }
      if (!started) { ctx.moveTo(px, py); started = true; }
      else { ctx.lineTo(px, py); }
    }
    ctx.stroke();

    // Draw line and find intersections
    let intersections = [];
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 2;

    if (type === 'vertical') {
      const lx = cx + linePos * scale;
      ctx.beginPath();
      ctx.moveTo(lx, 0);
      ctx.lineTo(lx, h);
      ctx.stroke();

      // Find intersection
      const y = f.func(linePos);
      const py = cy - y * scale;
      if (py >= 0 && py <= h) {
        intersections.push([lx, py]);
      }
    } else {
      const ly = cy - linePos * scale;
      ctx.beginPath();
      ctx.moveTo(0, ly);
      ctx.lineTo(w, ly);
      ctx.stroke();

      // Find intersections using inverse
      const xs = f.inverse(linePos);
      xs.forEach(xv => {
        const px = cx + xv * scale;
        if (px >= 0 && px <= w) {
          // Verify
          const yCheck = f.func(xv);
          if (Math.abs(yCheck - linePos) < 0.01) {
            intersections.push([px, ly]);
          }
        }
      });

      // For sin x, add periodic solutions
      if (ruleFuncIdx === 2) {
        const base = Math.asin(Math.max(-1, Math.min(1, linePos)));
        const allSolutions = [];
        for (let n = -3; n <= 3; n++) {
          allSolutions.push(base + 2 * Math.PI * n);
          allSolutions.push(Math.PI - base + 2 * Math.PI * n);
        }
        intersections = [];
        allSolutions.forEach(xv => {
          const px = cx + xv * scale;
          if (px >= 0 && px <= w) {
            intersections.push([px, ly]);
          }
        });
      }

      // For x², both branches
      if (ruleFuncIdx === 0 && linePos >= 0) {
        const px2 = cx - Math.sqrt(linePos) * scale;
        if (px2 >= 0 && px2 <= w) {
          intersections.push([px2, ly]);
        }
      }
    }

    // Mark intersections
    intersections.forEach(pt => {
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.arc(pt[0], pt[1], 5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Count label
    ctx.fillStyle = '#1A2235';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(\`交点数：\${intersections.length}\`, 8, 18);
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#5C6B85';
    ctx.fillText(\`y = \${f.name}\`, 8, 36);

    return intersections.length;
  }

  const w = vertCanvas.width;
  const h = vertCanvas.height;
  const vCount = drawGraph(vertCtx, w, h, 'vertical');
  const hCount = drawGraph(horzCtx, w, h, 'horizontal');

  // Verdicts
  const vertVerdict = document.getElementById('vertVerdict');
  const horzVerdict = document.getElementById('horzVerdict');

  if (vCount <= 1 && vCount > 0) {
    vertVerdict.textContent = '✅ 是函数';
    vertVerdict.className = 'rule-verdict yes';
  } else {
    vertVerdict.textContent = vCount === 0 ? '🤔 无交点' : '❌ 不是函数';
    vertVerdict.className = 'rule-verdict no';
  }

  if (hCount <= 1 && hCount > 0) {
    horzVerdict.textContent = '✅ 有反函数';
    horzVerdict.className = 'rule-verdict yes';
  } else {
    horzVerdict.textContent = hCount === 0 ? '🤔 无交点' : '❌ 没有反函数';
    horzVerdict.className = 'rule-verdict no';
  }
}

function setRuleFunc(idx) {
  ruleFuncIdx = idx;
  const buttons = document.querySelectorAll('#sec4 .demo .demo__controls:nth-of-type(1) .demo__btn');
  buttons.forEach((btn, i) => {
    btn.classList.toggle('demo__btn--active', i === idx);
  });
  drawRule();
}

ruleSlider.addEventListener('input', drawRule);

// ==================== Initialize ====================
window.addEventListener('load', () => {
  drawFloorFunction(11.8);
  drawBounded();
  drawParity();
  drawRule();
});

// Redraw on resize
window.addEventListener('resize', () => {
  drawFloorFunction(parseFloat(floorSlider.value));
  drawBounded();
  drawParity();
  drawRule();
});
<\/script>

</body>
</html>
`,Q5=`---
{"no":"第 1 期","title":"波特五力模型","order":1}
---
<!-- Generated by Trae Work -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>波特五力模型 · 交互式笔记</title>
<style>
:root {
  --bg: #0F172A;
  --bg2: #1E293B;
  --surface: #334155;
  --border: #475569;
  --text: #F1F5F9;
  --text-secondary: #CBD5E1;
  --muted: #94A3B8;
  --accent: #F59E0B;
  --accent-hover: #D97706;
  --accent-soft: rgba(245, 158, 11, 0.12);
  --accent-soft-strong: rgba(245, 158, 11, 0.3);
  --success: #10B981;
  --danger: #EF4444;
  --info: #3B82F6;
  --purple: #A78BFA;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

.report-intro {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 60%, #f59e0b 100%);
  color: white;
  padding: 60px 24px 48px;
  position: relative;
  overflow: hidden;
}
.report-intro::before {
  content: '';
  position: absolute;
  top: -120px; right: -80px;
  width: 360px; height: 360px;
  background: radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%);
  border-radius: 50%;
}
.report-intro::after {
  content: '';
  position: absolute;
  bottom: -100px; left: 5%;
  width: 280px; height: 280px;
  background: radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%);
  border-radius: 50%;
}
.report-intro__content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.report-intro__eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #FCD34D;
  background: rgba(245,158,11,0.2);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}
.report-intro h1 {
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 14px;
  background: linear-gradient(135deg, #fff 0%, #FCD34D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.report-intro__summary {
  font-size: 16px;
  line-height: 1.7;
  max-width: 640px;
  opacity: 0.9;
  color: #E2E8F0;
}
.report-intro__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.15);
  font-size: 13px;
  opacity: 0.9;
}
.report-intro__meta span strong {
  font-weight: 600;
  margin-left: 4px;
  color: #FCD34D;
}

main {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

section {
  margin-bottom: 52px;
  scroll-margin-top: 24px;
}

h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--accent);
  display: flex;
  align-items: center;
  gap: 10px;
}
h2 .emoji { font-size: 24px; }

h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
  margin-top: 28px;
  margin-bottom: 12px;
}

h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-top: 20px;
  margin-bottom: 8px;
}

p { margin-bottom: 14px; color: var(--text-secondary); }
strong { color: var(--text); font-weight: 600; }

blockquote {
  border-left: 4px solid var(--accent);
  padding-left: 16px;
  margin: 16px 0;
  color: var(--text-secondary);
}

ul, ol {
  margin-bottom: 14px;
  padding-left: 24px;
  color: var(--text-secondary);
}
li { margin-bottom: 6px; }
li::marker { color: var(--accent); }

table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 20px;
  font-size: 14px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}
caption {
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 8px;
  padding: 0 2px;
}
thead { background: var(--surface); }
th {
  text-align: left;
  padding: 10px 14px;
  font-weight: 600;
  color: var(--text);
  border-bottom: 1px solid var(--border);
  font-size: 13px;
}
td {
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
  color: var(--text-secondary);
  vertical-align: top;
}
tr:last-child td { border-bottom: none; }
tr:hover td { background: rgba(245,158,11,0.05); }

.callout {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px 18px;
  margin: 18px 0;
}
.callout__label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 8px;
}
.callout p { margin-bottom: 0; font-size: 14px; }

.callout--warn {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.4);
}
.callout--warn .callout__label { color: #FCA5A5; }

.callout--insight {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.4);
}
.callout--insight .callout__label { color: #FCD34D; }

.callout--success {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.4);
}
.callout--success .callout__label { color: #6EE7B7; }

.formula {
  font-family: "SF Mono", "Consolas", "Liberation Mono", "Courier New", monospace;
  font-size: 14px;
  line-height: 1.8;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px 20px;
  margin: 16px 0;
  color: var(--text-secondary);
  overflow-x: auto;
}
.formula .hl { color: var(--accent); font-weight: 600; }

.hierarchy {
  font-family: "SF Mono", "Consolas", "Liberation Mono", "Courier New", monospace;
  font-size: 13px;
  line-height: 1.9;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 18px 20px;
  margin: 16px 0;
  color: var(--text-secondary);
  overflow-x: auto;
}
.hierarchy .hl { color: var(--accent); font-weight: 600; }
.hierarchy .hl2 { color: var(--info); font-weight: 500; }

.insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin: 20px 0;
}
.insight-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  transition: border-color 0.2s;
}
.insight-card:hover { border-color: var(--accent); }
.insight-card__icon { font-size: 22px; margin-bottom: 8px; }
.insight-card__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 6px;
}
.insight-card__desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.6;
}

.toc {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 40px;
}
.toc__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  column-gap: 24px;
}
.toc li {
  margin-bottom: 6px;
  break-inside: avoid;
}
.toc a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}
.toc a:hover { color: var(--accent); }

/* Demo containers */
.demo {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
  margin: 20px 0;
}
.demo__title {
  font-weight: 600;
  font-size: 15px;
  color: var(--text);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.demo__desc {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 16px;
}
.demo__canvas-wrap {
  background: var(--bg);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
}
.demo__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
.demo__btn {
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.demo__btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.demo__btn--active {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
  font-weight: 600;
}
.demo__btn--active:hover {
  background: var(--accent-hover);
  color: var(--bg);
}

.demo__slider-wrap {
  flex: 1;
  min-width: 180px;
}
.demo__slider-label {
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
}
.demo__slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--surface);
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
}
.demo__slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(245,158,11,0.4);
}

.demo__result {
  margin-top: 14px;
  padding: 12px 16px;
  background: var(--bg);
  border-radius: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  border-left: 3px solid var(--accent);
}

/* Five forces scoring */
.forces-scoring {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
.force-score-item {
  background: var(--bg);
  border-radius: 8px;
  padding: 12px 14px;
  border: 1px solid var(--border);
}
.force-score-item__label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.force-score-item__value {
  color: var(--accent);
  font-family: monospace;
  font-size: 14px;
}
.force-score-bar {
  height: 8px;
  background: var(--surface);
  border-radius: 4px;
  overflow: hidden;
}
.force-score-bar__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--danger), var(--accent), var(--success));
  border-radius: 4px;
  transition: width 0.5s;
}

/* Radar chart */
.radar-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
#radarCanvas {
  max-width: 100%;
  height: 320px;
}

/* Scenario comparison */
.comp-scenarios {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.comp-scenario {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  background: var(--surface);
  color: var(--text-secondary);
  border: 1px solid var(--border);
}
.comp-scenario.active {
  background: var(--accent-soft-strong);
  color: var(--accent);
  border-color: var(--accent);
  font-weight: 600;
}

.vs-table {
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  gap: 0;
  font-size: 13px;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}
.vs-cell {
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
}
.vs-cell:last-child { border-right: none; }
.vs-row:last-child .vs-cell { border-bottom: none; }
.vs-cell--header {
  background: var(--surface);
  font-weight: 600;
  color: var(--text);
  font-size: 12px;
}
.vs-cell--dim {
  color: var(--muted);
  font-size: 12px;
}
.vs-cell--good { color: var(--success); font-weight: 600; }
.vs-cell--bad { color: var(--danger); font-weight: 600; }
.vs-cell--mid { color: var(--accent); font-weight: 600; }

/* Test items */
.test-item {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 18px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s;
}
.test-item:hover { border-color: var(--accent); }
.test-item__q {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.test-item__q::after {
  content: '▸';
  color: var(--muted);
  transition: transform 0.2s;
  font-size: 12px;
}
.test-item.open .test-item__q::after { transform: rotate(90deg); }
.test-item__a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s, padding 0.3s;
  font-size: 13px;
  color: var(--text-secondary);
}
.test-item.open .test-item__a {
  max-height: 800px;
  padding-top: 12px;
  margin-top: 8px;
  border-top: 1px solid var(--border);
}

/* Score display */
.total-score {
  text-align: center;
  padding: 16px;
  background: var(--accent-soft);
  border-radius: 10px;
  margin-bottom: 16px;
}
.total-score__num {
  font-size: 36px;
  font-weight: 700;
  color: var(--accent);
}
.total-score__label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 4px;
}
.total-score__verdict {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
}
.total-score__verdict.good { color: var(--success); }
.total-score__verdict.mid { color: var(--accent); }
.total-score__verdict.bad { color: var(--danger); }

/* Force cards detail */
.force-detail-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  margin: 12px 0;
}
.force-detail-card__title {
  font-weight: 600;
  font-size: 15px;
  color: var(--text);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.force-detail-card__title .icon { font-size: 18px; }
.force-detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
}
.force-detail-item {
  background: var(--bg2);
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 12px;
}
.force-detail-item__label {
  color: var(--muted);
  font-size: 11px;
  margin-bottom: 2px;
}
.force-detail-item__value {
  color: var(--text-secondary);
  font-weight: 500;
}

footer {
  border-top: 1px solid var(--border);
  padding: 24px;
  text-align: center;
  font-size: 12px;
  color: var(--muted);
}

@media (max-width: 640px) {
  .report-intro { padding: 40px 20px 36px; }
  .report-intro h1 { font-size: 24px; }
  .report-intro__summary { font-size: 14px; }
  main { padding: 28px 16px 60px; }
  h2 { font-size: 18px; }
  h3 { font-size: 15px; }
  .toc ul { columns: 1; }
  .demo { padding: 16px; }
  .forces-scoring { grid-template-columns: 1fr; }
}
</style>
</head>
<body>

<header class="report-intro">
  <div class="report-intro__content">
    <span class="report-intro__eyebrow">🏭 商业思维 · 半小时读透</span>
    <h1>波特五力模型<br>行业格局决定赚钱上限</h1>
    <p class="report-intro__summary">
      为什么星巴克客单价高却总是满座？为什么茅台净利率50%+而很多制造业不到5%？
      五种力量共同决定一个行业的盈利空间。选对赛道，努力才有复利的价值。
    </p>
    <div class="report-intro__meta">
      <span>📚 <strong>模块</strong>：6大章节</span>
      <span>⚔️ <strong>五力</strong>：竞争/门槛/替代/上游/下游</span>
      <span>🎮 <strong>交互</strong>：可动手打分对比</span>
    </div>
  </div>
</header>

<main>

  <nav class="toc">
    <div class="toc__title">📑 本章目录</div>
    <ul>
      <li><a href="#sec1">一、为什么有些行业天生好赚钱</a></li>
      <li><a href="#sec2">二、五力模型的诞生</a></li>
      <li><a href="#sec3">三、五大核心力量</a></li>
      <li><a href="#sec4">四、互动打分器</a></li>
      <li><a href="#sec5">五、三大实战场景</a></li>
      <li><a href="#sec6">六、模型局限性</a></li>
      <li><a href="#sec7">七、组合进阶用法</a></li>
      <li><a href="#sec8">八、复习自测</a></li>
    </ul>
  </nav>

  <!-- Section 1 -->
  <section id="sec1">
    <h2><span class="emoji">🤔</span>一、为什么有些行业天生就好赚钱？</h2>

    <h3>三个灵魂拷问</h3>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">☕</div>
        <div class="insight-card__title">星巴克 vs 奶茶店</div>
        <div class="insight-card__desc">客单价不低却满座，隔壁第二杯半价却很冷清</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">📱</div>
        <div class="insight-card__title">苹果 vs 安卓</div>
        <div class="insight-card__desc">价格最高、创新不多，却仍是最受欢迎的品牌</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🍶</div>
        <div class="insight-card__title">茅台 vs 制造业</div>
        <div class="insight-card__desc">毛利率90%+、净利率50%+ vs 净利率不到5%</div>
      </div>
    </div>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 核心答案</div>
      <p>你所处的行业可能本身就决定了你能赚钱的上限。</p>
    </div>
  </section>

  <!-- Section 2 -->
  <section id="sec2">
    <h2><span class="emoji">📖</span>二、五力模型的诞生</h2>

    <h3>传统分析的缺陷</h3>

    <p>在波特之前，商业分析都是单方面向内求：产品质量、成本管控、团队执行力……</p>

    <p>但这无法解释：<strong>为什么自己已经做到最优了，企业仍然赚不到钱？</strong></p>

    <div class="callout">
      <div class="callout__label">🍜 张三面馆的故事</div>
      <p>张三的面馆手艺极好、服务真诚、美名远扬。但如果这条街开了100家面馆，大家都卷价格，一碗面5元还要送鸡蛋……</p>
      <p style="margin-top:8px;"><strong>生意的失败不是你不够好，往往是你选择的赛道出了问题。</strong></p>
    </div>

    <h3>迈克尔·波特其人</h3>

    <ul>
      <li>空军上校之子，童年随军多国生活 → 很早就观察到产业环境差异</li>
      <li>高中体育全明星 → 对战略战术有深刻见解</li>
      <li>大学主修航空航天工程 → 被经济学教授点拨后转投产业竞争</li>
      <li>1979年发表论文，1980年出版《竞争战略》</li>
      <li>后来创办 Monitor 咨询公司，年营收破亿</li>
    </ul>

    <div class="callout callout--insight">
      <div class="callout__label">💎 核心观点</div>
      <p>一个行业赚不赚钱，不是由某一家企业决定的，而是由<strong>五种力量共同角力</strong>决定的。</p>
      <p style="margin-top:6px;">五种力量越弱 → 行业越赚钱；五种力量越强 → 行业越不赚钱。</p>
    </div>

    <h3>河流比喻</h3>

    <blockquote>
      你在一条河里游泳，游速不仅取决于自己的水平，更取决于河流的环境——流速、水温、水流方向、暗流……
      <br><br>
      专业游泳健将在湍急河流里奋力前行，体验也远不如普通人在平缓水域自在。
      <br><br>
      <strong>行业就是那条河，五力就是河流的大环境。</strong>
      <br><br>
      选错了赛道，奥运冠军也会游得怀疑人生；选对了赛道，普通人也能在风口迅速起飞。
    </blockquote>
  </section>

  <!-- Section 3 -->
  <section id="sec3">
    <h2><span class="emoji">⚔️</span>三、五大核心力量</h2>

    <!-- Interactive five forces overview -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：五力雷达图</div>
      <div class="demo__desc">拖动滑块调整每个力的评分（0-5分，分数越高越有利），看雷达图实时变化。选一个预设场景快速对比。</div>

      <div class="demo__canvas-wrap">
        <div class="comp-scenarios" id="scenarioBtns">
          <div class="comp-scenario active" onclick="setScenario('baijiu')">高端白酒</div>
          <div class="comp-scenario" onclick="setScenario('airline')">航空公司</div>
          <div class="comp-scenario" onclick="setScenario('soy')">酱油行业</div>
          <div class="comp-scenario" onclick="setScenario('semicon')">半导体设备</div>
          <div class="comp-scenario" onclick="setScenario('milktea')">奶茶店</div>
          <div class="comp-scenario" onclick="setScenario('custom')">自定义</div>
        </div>

        <div class="radar-wrap">
          <canvas id="radarCanvas" width="500" height="320"></canvas>
        </div>

        <div class="total-score" id="totalScore">
          <div class="total-score__num" id="totalScoreNum">23</div>
          <div class="total-score__label">总分 / 25（越高越好）</div>
          <div class="total-score__verdict good" id="scoreVerdict">🏆 顶级好赛道</div>
        </div>
      </div>

      <div class="forces-scoring" id="forceSliders">
        <div class="force-score-item">
          <div class="force-score-item__label">
            <span>① 现有竞争（越弱越好）</span>
            <span class="force-score-item__value" id="scoreVal0">5</span>
          </div>
          <input type="range" class="demo__slider" id="force0" min="0" max="5" step="1" value="5">
        </div>
        <div class="force-score-item">
          <div class="force-score-item__label">
            <span>② 进入门槛（越高越好）</span>
            <span class="force-score-item__value" id="scoreVal1">5</span>
          </div>
          <input type="range" class="demo__slider" id="force1" min="0" max="5" step="1" value="5">
        </div>
        <div class="force-score-item">
          <div class="force-score-item__label">
            <span>③ 替代品威胁（越小越好）</span>
            <span class="force-score-item__value" id="scoreVal2">5</span>
          </div>
          <input type="range" class="demo__slider" id="force2" min="0" max="5" step="1" value="5">
        </div>
        <div class="force-score-item">
          <div class="force-score-item__label">
            <span>④ 供应商议价（越弱越好）</span>
            <span class="force-score-item__value" id="scoreVal3">4</span>
          </div>
          <input type="range" class="demo__slider" id="force3" min="0" max="5" step="1" value="4">
        </div>
        <div class="force-score-item">
          <div class="force-score-item__label">
            <span>⑤ 购买者议价（越弱越好）</span>
            <span class="force-score-item__value" id="scoreVal4">4</span>
          </div>
          <input type="range" class="demo__slider" id="force4" min="0" max="5" step="1" value="4">
        </div>
      </div>
    </div>

    <h3>① 现有竞争者的竞争力（行业内卷度）</h3>

    <p>取决于四个维度：</p>

    <table>
      <caption>内卷程度的四个决定因素</caption>
      <thead>
        <tr><th>维度</th><th>内卷低（好）</th><th>内卷高（差）</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>玩家数量</strong></td><td>少（几家垄断）</td><td>多（成百上千家）</td></tr>
        <tr><td><strong>行业规模与增长</strong></td><td>大且增长快</td><td>小且停滞萎缩</td></tr>
        <tr><td><strong>产品差异化</strong></td><td>大（有独特性）</td><td>小（同质化严重）</td></tr>
        <tr><td><strong>退出壁垒</strong></td><td>低（不行就撤）</td><td>高（想退退不了）</td></tr>
      </tbody>
    </table>

    <div class="callout callout--warn">
      <div class="callout__label">⚠️ 退出壁垒容易被忽略</div>
      <p>行业虽然不挣钱，但退出成本太高（比如千万级的工厂产线），不生产亏千万，继续生产还能少亏点。</p>
      <p style="margin-top:6px;">想退又退不了 → 低效的恶性竞争。</p>
    </div>

    <h4>典型案例：酱油 vs 女装</h4>

    <table>
      <thead>
        <tr><th></th><th>酱油行业</th><th>女装行业</th></tr>
      </thead>
      <tbody>
        <tr><td>玩家数量</td><td>少（几家头部）</td><td>极多</td></tr>
        <tr><td>差异化</td><td>风味/品牌忠诚度高</td><td>同质化严重</td></tr>
        <tr><td>毛利率</td><td>30%+</td><td>60%左右（高但没用）</td></tr>
        <tr><td>净利率</td><td>10%+</td><td>个位数</td></tr>
        <tr><td>价格战</td><td>相对温和</td><td>不断，营销费用高</td></tr>
      </tbody>
    </table>

    <h3>② 潜在进入者的威胁力（入行门槛）</h3>

    <p>一个行业在赚钱，如果谁都能进来干，那好日子很快就会到头。</p>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">💰</div>
        <div class="insight-card__title">资金门槛</div>
        <div class="insight-card__desc">半导体建厂亿级投入 vs 麻辣烫几万加盟</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🔬</div>
        <div class="insight-card__title">技术门槛</div>
        <div class="insight-card__desc">航空发动机数十年研发 vs 餐饮</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🏷️</div>
        <div class="insight-card__title">品牌门槛</div>
        <div class="insight-card__desc">可口可乐百年营销 vs 普通快消品</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🚪</div>
        <div class="insight-card__title">渠道门槛</div>
        <div class="insight-card__desc">医药进医院 vs 小区便利店</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">📜</div>
        <div class="insight-card__title">政策门槛</div>
        <div class="insight-card__desc">金融牌照 vs 普通零售</div>
      </div>
    </div>

    <h4>典型案例：半导体设备 vs 新消费</h4>

    <table>
      <thead>
        <tr><th></th><th>半导体设备</th><th>新消费</th></tr>
      </thead>
      <tbody>
        <tr><td>门槛</td><td>极高（技术/资金/人才/专利全方位壁垒）</td><td>极低（资金可以迅速弥补所有门槛）</td></tr>
        <tr><td>格局</td><td>强者恒强</td><td>雨后春笋，大部分很快消失</td></tr>
        <tr><td>例子</td><td>北方华创20年死磕研发</td><td>2020年新消费热潮，钟薛高、虎头局等</td></tr>
      </tbody>
    </table>

    <h3>③ 替代品的威胁力（跨品类竞争）</h3>

    <div class="callout callout--warn">
      <div class="callout__label">⚠️ 最难判断的威胁</div>
      <p>替代品不是竞对，而是<strong>跨界/跨行</strong>的产品。最可怕的是，颠覆本行业的往往是最意想不到的跨界产品。</p>
    </div>

    <p><strong>例子：</strong>高铁替代飞机、短视频替代长视频、外卖替代方便食品、AI替代搜索、电动车替代燃油车</p>

    <table>
      <caption>判断替代品威胁的三个因素</caption>
      <thead>
        <tr><th>因素</th><th>威胁小</th><th>威胁大</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>替代品性价比</strong></td><td>差（又贵又不好用）</td><td>高（又便宜又强）</td></tr>
        <tr><td><strong>用户切换成本</strong></td><td>高（习惯/数据/生态）</td><td>低（说换就换）</td></tr>
        <tr><td><strong>需求刚性</strong></td><td>强（刚需且无替代）</td><td>弱（非必需，可替代）</td></tr>
      </tbody>
    </table>

    <h4>典型案例：燃油车 vs 高端白酒</h4>

    <table>
      <thead>
        <tr><th></th><th>燃油车行业</th><th>高端白酒</th></tr>
      </thead>
      <tbody>
        <tr><td>替代品威胁</td><td>极大（新能源汽车）</td><td>几乎没有</td></tr>
        <tr><td>原因</td><td>技术迭代带来性价比颠覆</td><td>千年酒文化，情感认同强，无性能迭代焦虑</td></tr>
        <tr><td>现状</td><td>BBA裁员降薪，份额持续下滑</td><td>啤酒/红酒/洋酒都无法在高端商务宴请替代白酒</td></tr>
      </tbody>
    </table>

    <h3>④ 上游供应商的议价能力</h3>

    <p>如果上游供应商很强势，它可以涨价、压缩交期、要求预付款，你的利润就会被吃掉一大块。</p>

    <table>
      <caption>判断上游议价能力</caption>
      <thead>
        <tr><th>因素</th><th>上游强势（差）</th><th>上游弱势（好）</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>上游集中度</strong></td><td>高（少数几家垄断）</td><td>低（分散，到处都有）</td></tr>
        <tr><td><strong>原料独特性</strong></td><td>高（独家配方/专利）</td><td>低（通用商品）</td></tr>
      </tbody>
    </table>

    <h4>典型案例：ASML vs 白酒上游</h4>

    <table>
      <thead>
        <tr><th></th><th>ASML（光刻机）</th><th>白酒行业上游（粮食）</th></tr>
      </thead>
      <tbody>
        <tr><td>上游集中度</td><td>全球唯一能造高端光刻机</td><td>分散，无数种植户</td></tr>
        <tr><td>议价能力</td><td>极强（台积电、三星都得排队）</td><td>极弱（可以随便压价）</td></tr>
        <tr><td>毛利率</td><td>50%+</td><td>极低</td></tr>
      </tbody>
    </table>

    <h3>⑤ 下游购买者的议价能力</h3>

    <p>如果下游客户很强势，他可以压价、要求账期、要求定制化服务，同样侵蚀你的利润。</p>

    <table>
      <caption>判断下游议价能力</caption>
      <thead>
        <tr><th>因素</th><th>下游强势（差）</th><th>下游弱势（好）</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>下游集中度</strong></td><td>高（一两个大客户占大部分收入）</td><td>低（客户分散）</td></tr>
        <tr><td><strong>自身差异化</strong></td><td>低（随时可以换一家）</td><td>高（独一无二，非买不可）</td></tr>
      </tbody>
    </table>

    <h4>典型案例：电商卖家 vs 茅台</h4>

    <table>
      <thead>
        <tr><th></th><th>电商平台卖家</th><th>茅台</th></tr>
      </thead>
      <tbody>
        <tr><td>下游客户</td><td>几个超级平台（淘/京/拼/抖）</td><td>分散的经销商 + 消费者</td></tr>
        <tr><td>议价能力</td><td>平台极强，卖家极弱</td><td>茅台极强，下游极弱</td></tr>
        <tr><td>原因</td><td>不上平台没流量，换平台损失大</td><td>消费者认的是品牌不是经销商</td></tr>
        <tr><td>销售费用率</td><td>平台抽成 + 广告费占比很高</td><td>不到5%</td></tr>
      </tbody>
    </table>
  </section>

  <!-- Section 4 -->
  <section id="sec4">
    <h2><span class="emoji">🧪</span>四、行业对比实验室</h2>

    <p>用五力模型对比两个典型行业：高端白酒 vs 航空公司。一眼就能看出为什么股王是茅台而不是航空股。</p>

    <div class="demo">
      <div class="demo__title">🎮 动手玩：行业对比</div>
      <div class="demo__desc">选择两组行业进行五力对比，看看好赛道和差赛道的差距有多大。</div>

      <div class="demo__canvas-wrap">
        <div class="comp-scenarios">
          <div class="comp-scenario active" onclick="setCompare('baijiu', 'airline')">白酒 vs 航空</div>
          <div class="comp-scenario" onclick="setCompare('soy', 'fashion')">酱油 vs 女装</div>
          <div class="comp-scenario" onclick="setCompare('semicon', 'milktea')">半导体 vs 奶茶</div>
          <div class="comp-scenario" onclick="setCompare('newretail', 'saas')">新消费 vs B端SaaS</div>
        </div>

        <div class="vs-table" id="vsTable" style="margin-top:16px;">
          <!-- Filled by JS -->
        </div>
      </div>

      <div class="demo__result" id="compareResult">
        💡 高端白酒在五个维度上几乎全面碾压航空业，这就是为什么一个净利率30%+，另一个不到1%。
      </div>
    </div>
  </section>

  <!-- Section 5 -->
  <section id="sec5">
    <h2><span class="emoji">💼</span>五、三大实战场景</h2>

    <h3>打分规则</h3>

    <p>每项 0~5 分，分数越高代表这股力量越对你有利（越弱越好）。总分 25 分。</p>

    <table>
      <thead>
        <tr><th>分数段</th><th>评价</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>20分以上</strong></td><td style="color:var(--success);font-weight:600;">好赛道</td></tr>
        <tr><td><strong>15分以上</strong></td><td style="color:var(--accent);font-weight:600;">可以接受</td></tr>
        <tr><td><strong>10分以下</strong></td><td style="color:var(--danger);font-weight:600;">建议换方向</td></tr>
      </tbody>
    </table>

    <h3>场景一：职场择业——筛选长期优质赛道</h3>

    <p>用五力分析两个offer所在的行业。行业越有利润空间，职业稳定性和发展性都会好一些。</p>

    <div class="callout">
      <div class="callout__label">💡 启示</div>
      <p>尽量去"鱼多的地方捕鱼"。五力帮你先回答最根本的问题：这条河的水流是急还是缓？</p>
    </div>

    <h3>场景二：个人创业——规避内卷，低风险选项目</h3>

    <p>用五力对比不同项目，排除成功概率低的方向。</p>

    <p>比如：社区奶茶店 vs 小型B端企业服务公司 → 从赛道本身看，B端服务的生存概率更高。</p>

    <h3>场景三：行业投资——判断赛道盈利与前景</h3>

    <div class="callout callout--insight">
      <div class="callout__label">📈 巴菲特的航空股教训</div>
      <p>巴菲特说过："我以前说航空股是好生意，后来发现我错了。"</p>
      <p style="margin-top:6px;">如果早用五力模型分析航空行业：</p>
      <ul>
        <li>上游被飞机制造商卡脖子 + 油价波动</li>
        <li>下游旅客比价严重</li>
        <li>同行竞争激烈</li>
        <li>替代品高铁还在高速发展</li>
      </ul>
      <p style="margin-top:6px;">→ 五种力量都强 → 行业赚钱难 → 投资回报差</p>
    </div>

    <p>我们选择投资一家公司的初衷，就是把钱交给一个更会赚钱的生意模式。好赛道 + 好公司 = 优质投资标的。</p>
  </section>

  <!-- Section 6 -->
  <section id="sec6">
    <h2><span class="emoji">⚠️</span>六、模型局限性</h2>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">📷</div>
        <div class="insight-card__title">静态的</div>
        <div class="insight-card__desc">像行业的近照，不反映动态变化。今天的好赛道，明天可能就不行了（比如教培行业双减）。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">👀</div>
        <div class="insight-card__title">只看外部</div>
        <div class="insight-card__desc">只回答"这条河水流怎么样"，不评价你是不是好游泳选手。行业好不代表每家企业都好。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">📈</div>
        <div class="insight-card__title">不考虑宏观周期</div>
        <div class="insight-card__desc">经济上行/下行、通胀/通缩，不同宏观周期利好的行业不一样。</div>
      </div>
    </div>
  </section>

  <!-- Section 7 -->
  <section id="sec7">
    <h2><span class="emoji">🚀</span>七、组合进阶用法</h2>

    <table>
      <caption>三种进阶组合</caption>
      <thead>
        <tr><th>组合</th><th>弥补了什么短板</th><th>用法</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>五力 + PEST</strong></td>
          <td>宏观环境判断</td>
          <td>PEST分析政策/经济/社会/技术（宏观），五力分析行业内部（中观）</td>
        </tr>
        <tr>
          <td><strong>五力 + 价值链</strong></td>
          <td>找高利润环节</td>
          <td>五力判断产业赚不赚钱，价值链找出产业里最赚钱的环节</td>
        </tr>
        <tr>
          <td><strong>五力 + SWOT</strong></td>
          <td>向内求的维度</td>
          <td>五力补外部机会威胁，SWOT补内部优势劣势，内外兼修</td>
        </tr>
      </tbody>
    </table>

    <div class="callout callout--insight">
      <div class="callout__label">💡 核心洞见</div>
      <p>模型是术，认知是道。同样的公开信息，不同人对商业本质的理解不同，得出的结论也完全不同。</p>
      <p style="margin-top:6px;">善用模型的前提，是在生活中用心积累，做个商业世界的有心人。</p>
    </div>

    <div class="callout">
      <div class="callout__label">🎯 行动建议</div>
      <p>下次遇到职业选择、创业机会或投资决定时，不妨花几分钟查查资料，用五力模型分析对比一下。</p>
      <p style="margin-top:6px;"><strong>只有选对赛道，你的努力才有复利的价值。</strong></p>
    </div>
  </section>

  <!-- Section 8 -->
  <section id="sec8">
    <h2><span class="emoji">❓</span>八、复习自测</h2>

    <p>点每道题展开答案，先自己想再看。</p>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">1. 波特五力是哪五种力量？</div>
      <div class="test-item__a">
        ① 现有竞争者的竞争力（行业内卷度）<br>
        ② 潜在进入者的威胁力（入行门槛）<br>
        ③ 替代品的威胁力（跨品类竞争）<br>
        ④ 上游供应商的议价能力<br>
        ⑤ 下游购买者的议价能力
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">2. 行业内卷程度取决于哪四个维度？</div>
      <div class="test-item__a">
        ① 玩家数量（越少越不卷）<br>
        ② 行业规模与增长（越大、增长越快越不卷）<br>
        ③ 产品差异化（差异越大越不卷）<br>
        ④ 退出壁垒（越低越不卷，不行就撤）
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">3. 行业进入门槛有哪五种？各举一个例子。</div>
      <div class="test-item__a">
        ① 资金门槛（半导体建厂亿级投入 vs 麻辣烫几万加盟）<br>
        ② 技术门槛（航空发动机数十年研发 vs 餐饮）<br>
        ③ 品牌门槛（可口可乐百年营销 vs 普通快消）<br>
        ④ 渠道门槛（医药进医院 vs 小区便利店）<br>
        ⑤ 政策门槛（金融牌照 vs 普通零售）
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">4. 判断替代品威胁大小看哪三个因素？</div>
      <div class="test-item__a">
        ① 替代品的性价比（性价比越高威胁越大）<br>
        ② 用户切换成本（切换成本越低威胁越大）<br>
        ③ 需求刚性程度（越刚需威胁越小）
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">5. 为什么说高端白酒几乎没有替代品威胁？</div>
      <div class="test-item__a">
        因为在高端商务宴请场景下，没有任何其他酒（啤酒、红酒、洋酒）能替代白酒的地位。白酒与中国人千年的饮食文化、情感认同深度绑定，不存在"性能迭代"的焦虑。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">6. 上游供应商议价能力强不强看哪两点？</div>
      <div class="test-item__a">
        ① 上游集中度（越集中越强，比如ASML是唯一高端光刻机厂商）<br>
        ② 原料独特性（越独特越强，独家配方/专利）
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">7. 下游购买者议价能力强不强看哪两点？</div>
      <div class="test-item__a">
        ① 下游集中度（客户越集中越强，比如几个大客户占你大部分收入）<br>
        ② 自身产品差异化（越差异化越弱，客户非买不可）
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">8. 五力模型的三大局限性是什么？</div>
      <div class="test-item__a">
        ① 静态的——像行业的近照，不反映动态变化<br>
        ② 只看外部——缺乏向内求的维度，不评价企业自身能力<br>
        ③ 不考虑宏观周期——经济上行/下行、通胀/通缩对不同行业影响不同
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">9. 三个进阶组合是什么？分别弥补了什么短板？</div>
      <div class="test-item__a">
        ① 五力 + PEST：从宏观到中观，弥补宏观环境判断<br>
        ② 五力 + 价值链：找出产业链中最赚钱的环节<br>
        ③ 五力 + SWOT：内外兼修，补上内部优势劣势分析
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">10. 张三面馆的故事告诉了我们什么道理？</div>
      <div class="test-item__a">
        生意的失败不是你不够好，往往是你选择的赛道出了问题。身处其中的你，再努力也事倍功半。<br>
        行业格局决定上限，努力决定下限。选对赛道，努力才有复利的价值。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">11. 为什么航空公司看起来高大上，但净利率不到1%？用五力分析。</div>
      <div class="test-item__a">
        ① 现有竞争：竞争激烈<br>
        ② 进入门槛：中等（资金高但有新进入者）<br>
        ③ 替代品：高铁威胁大<br>
        ④ 上游议价：飞机制造商卡脖子 + 油价波动<br>
        ⑤ 下游议价：旅客比价严重<br>
        → 五种力量都强 → 行业赚钱难 → 净利率极低
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">12. 五力模型的打分规则是什么？怎么判断是不是好赛道？</div>
      <div class="test-item__a">
        每项0-5分，分数越高代表越有利（力量越弱）。总分25分。<br>
        • 20分以上：好赛道<br>
        • 15分以上：可以接受<br>
        • 10分以下：建议换方向
      </div>
    </div>
  </section>

</main>

<footer>
  🏭 波特五力模型 · 交互式学习笔记
</footer>

<script>
// ==================== TOC smooth scroll ====================
document.querySelectorAll('.toc a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ==================== Radar Chart ====================
const radarCanvas = document.getElementById('radarCanvas');
const radarCtx = radarCanvas.getContext('2d');

const forceNames = [
  '现有竞争',
  '进入门槛',
  '替代品威胁',
  '供应商议价',
  '购买者议价'
];

let scores = [5, 5, 5, 4, 4]; // default: baijiu

const scenarios = {
  baijiu: [5, 5, 5, 4, 4], // 高端白酒
  airline: [2, 2, 1, 1, 3], // 航空公司
  soy: [4, 3, 4, 4, 3], // 酱油
  semicon: [4, 5, 3, 2, 3], // 半导体设备
  milktea: [1, 1, 3, 3, 2], // 奶茶店
  newretail: [1, 1, 3, 3, 2], // 新消费
  saas: [3, 3, 2, 2, 4], // B端SaaS
  fashion: [1, 1, 2, 3, 2], // 女装
  custom: [3, 3, 3, 3, 3] // 自定义
};

function drawRadar() {
  const w = radarCanvas.width;
  const h = radarCanvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const maxR = Math.min(w, h) * 0.38;
  const numSides = 5;
  const angleStep = (Math.PI * 2) / numSides;
  const startAngle = -Math.PI / 2;

  radarCtx.clearRect(0, 0, w, h);

  // Draw grid polygons
  for (let level = 1; level <= 5; level++) {
    const r = (maxR * level) / 5;
    radarCtx.beginPath();
    for (let i = 0; i < numSides; i++) {
      const angle = startAngle + i * angleStep;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) radarCtx.moveTo(x, y);
      else radarCtx.lineTo(x, y);
    }
    radarCtx.closePath();
    radarCtx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    radarCtx.lineWidth = 1;
    radarCtx.stroke();
  }

  // Draw axes
  for (let i = 0; i < numSides; i++) {
    const angle = startAngle + i * angleStep;
    radarCtx.beginPath();
    radarCtx.moveTo(cx, cy);
    radarCtx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
    radarCtx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
    radarCtx.lineWidth = 1;
    radarCtx.stroke();

    // Labels
    const labelR = maxR + 24;
    const lx = cx + labelR * Math.cos(angle);
    const ly = cy + labelR * Math.sin(angle);
    radarCtx.fillStyle = '#CBD5E1';
    radarCtx.font = '12px -apple-system, sans-serif';
    radarCtx.textAlign = 'center';
    radarCtx.textBaseline = 'middle';
    radarCtx.fillText(forceNames[i], lx, ly);

    // Score values on axes
    const scoreR = (maxR * scores[i]) / 5;
    const sx = cx + scoreR * Math.cos(angle);
    const sy = cy + scoreR * Math.sin(angle);
    radarCtx.fillStyle = '#F59E0B';
    radarCtx.font = 'bold 11px monospace';
    radarCtx.fillText(scores[i], sx, sy - 8);
  }

  // Draw data polygon
  radarCtx.beginPath();
  for (let i = 0; i < numSides; i++) {
    const angle = startAngle + i * angleStep;
    const r = (maxR * scores[i]) / 5;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) radarCtx.moveTo(x, y);
    else radarCtx.lineTo(x, y);
  }
  radarCtx.closePath();
  radarCtx.fillStyle = 'rgba(245, 158, 11, 0.2)';
  radarCtx.fill();
  radarCtx.strokeStyle = '#F59E0B';
  radarCtx.lineWidth = 2.5;
  radarCtx.stroke();

  // Draw data points
  for (let i = 0; i < numSides; i++) {
    const angle = startAngle + i * angleStep;
    const r = (maxR * scores[i]) / 5;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    radarCtx.beginPath();
    radarCtx.arc(x, y, 5, 0, Math.PI * 2);
    radarCtx.fillStyle = '#F59E0B';
    radarCtx.fill();
    radarCtx.strokeStyle = '#0F172A';
    radarCtx.lineWidth = 2;
    radarCtx.stroke();
  }
}

function updateTotalScore() {
  const total = scores.reduce((a, b) => a + b, 0);
  document.getElementById('totalScoreNum').textContent = total;

  const verdict = document.getElementById('scoreVerdict');
  verdict.className = 'total-score__verdict';
  if (total >= 20) {
    verdict.classList.add('good');
    verdict.textContent = '🏆 顶级好赛道';
  } else if (total >= 15) {
    verdict.classList.add('mid');
    verdict.textContent = '👍 还不错的赛道';
  } else if (total >= 10) {
    verdict.classList.add('mid');
    verdict.textContent = '⚠️ 一般般，谨慎进入';
  } else {
    verdict.classList.add('bad');
    verdict.textContent = '❌ 建议换方向';
  }
}

// Slider listeners
for (let i = 0; i < 5; i++) {
  const slider = document.getElementById('force' + i);
  slider.addEventListener('input', function() {
    scores[i] = parseInt(this.value);
    document.getElementById('scoreVal' + i).textContent = scores[i];
    drawRadar();
    updateTotalScore();
    // Switch to custom
    document.querySelectorAll('#scenarioBtns .comp-scenario').forEach(b => b.classList.remove('active'));
    document.querySelector('#scenarioBtns .comp-scenario:last-child').classList.add('active');
  });
}

function setScenario(name) {
  scores = [...scenarios[name]];
  for (let i = 0; i < 5; i++) {
    document.getElementById('force' + i).value = scores[i];
    document.getElementById('scoreVal' + i).textContent = scores[i];
  }
  drawRadar();
  updateTotalScore();

  document.querySelectorAll('#scenarioBtns .comp-scenario').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

// ==================== Comparison Table ====================
const compareData = {
  'baijiu-airline': {
    title: '高端白酒 vs 航空公司',
    rows: [
      ['现有竞争', '弱（格局稳定）', '强（竞争激烈）', '白酒 ✅'],
      ['进入门槛', '高（品牌/工艺/时间）', '中（资金门槛高）', '白酒 ✅'],
      ['替代品', '几乎无', '大（高铁替代）', '白酒 ✅'],
      ['上游议价', '弱（粮食分散）', '强（飞机制造商+油价）', '白酒 ✅'],
      ['下游议价', '弱（品牌心智强）', '强（旅客比价）', '白酒 ✅'],
      ['毛利率', '80%+', '约8%', '白酒 ✅'],
      ['净利率', '30%+', '不到1%', '白酒 ✅'],
    ],
    result: '💡 高端白酒在五个维度上几乎全面碾压航空业。同样是"高大上"的行业，盈利能力天差地别——选对赛道太重要了。'
  },
  'soy-fashion': {
    title: '酱油 vs 女装',
    rows: [
      ['玩家数量', '少（几家头部）', '极多（品牌众多）', '酱油 ✅'],
      ['差异化', '风味/品牌忠诚度高', '同质化严重', '酱油 ✅'],
      ['价格战', '相对温和', '激烈，营销费用高', '酱油 ✅'],
      ['毛利率', '30%+', '60%左右（高但没用）', '—'],
      ['净利率', '10%+', '个位数', '酱油 ✅'],
    ],
    result: '💡 女装毛利率看起来更高，但因为竞争太激烈、营销费用太高，最终净利率反而远不如酱油。关键看"最后能留下多少"。'
  },
  'semicon-milktea': {
    title: '半导体设备 vs 奶茶店',
    rows: [
      ['进入门槛', '极高（技术/资金/专利）', '极低（几万元就能开）', '半导体 ✅'],
      ['竞争格局', '强者恒强', '雨后春笋，死亡也快', '半导体 ✅'],
      ['技术壁垒', '数十年研发积累', '几乎没有', '半导体 ✅'],
      ['新进入者威胁', '几乎没有', '源源不断', '半导体 ✅'],
    ],
    result: '💡 门槛的高低直接决定了行业的竞争烈度。半导体设备行业用20年时间建立的壁垒，让新玩家几乎不可能进入；而奶茶店谁都能开，谁也赚不到大钱。'
  },
  'newretail-saas': {
    title: '新消费 vs B端SaaS',
    rows: [
      ['进入门槛', '低（资金可弥补）', '中高（产品/客户积累）', 'SaaS ✅'],
      ['竞争格局', '极其分散', '相对集中', 'SaaS ✅'],
      ['客户粘性', '低（消费者善变）', '高（数据/习惯/迁移成本）', 'SaaS ✅'],
      ['替代品威胁', '高（品类迭代快）', '中低（替换成本高）', 'SaaS ✅'],
    ],
    result: '💡 同样是创业方向，B端SaaS因为客户粘性高、替换成本大、竞争格局相对好，生存概率比新消费高得多。选对赛道比努力重要。'
  }
};

function setCompare(a, b) {
  const key = a + '-' + b;
  const data = compareData[key];

  // Update buttons
  document.querySelectorAll('#sec4 .comp-scenarios .comp-scenario').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  // Build table
  const table = document.getElementById('vsTable');
  let html = '';

  // Header row
  html += '<div class="vs-row">';
  html += '<div class="vs-cell vs-cell--header vs-cell--dim">维度</div>';
  html += '<div class="vs-cell vs-cell--header">' + data.title.split(' vs ')[0] + '</div>';
  html += '<div class="vs-cell vs-cell--header">' + data.title.split(' vs ')[1] + '</div>';
  html += '</div>';

  // Data rows
  data.rows.forEach(row => {
    html += '<div class="vs-row">';
    html += '<div class="vs-cell vs-cell--dim">' + row[0] + '</div>';
    html += '<div class="vs-cell">' + row[1] + '</div>';
    html += '<div class="vs-cell">' + row[2] + '</div>';
    html += '</div>';
  });

  table.innerHTML = html;

  document.getElementById('compareResult').innerHTML = data.result;
}

// ==================== Initialize ====================
window.addEventListener('load', () => {
  drawRadar();
  updateTotalScore();
  setCompare('baijiu', 'airline');
});

// Handle canvas resize
function resizeCanvas() {
  drawRadar();
}

window.addEventListener('resize', resizeCanvas);
<\/script>

</body>
</html>
`,Z5=`---
{"no":"第 2 期","title":"博弈论","order":2}
---
<!-- Generated by Trae Work -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>博弈论 · 交互式笔记</title>
<style>
:root {
  --bg: #0B1120;
  --bg2: #111827;
  --surface: #1F2937;
  --border: #374151;
  --text: #F9FAFB;
  --text-secondary: #D1D5DB;
  --muted: #9CA3AF;
  --accent: #8B5CF6;
  --accent-hover: #7C3AED;
  --accent-soft: rgba(139, 92, 246, 0.12);
  --accent-soft-strong: rgba(139, 92, 246, 0.35);
  --accent2: #06B6D4;
  --success: #10B981;
  --danger: #EF4444;
  --warning: #F59E0B;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

.report-intro {
  background: linear-gradient(135deg, #0b1120 0%, #1e1b4b 40%, #4c1d95 75%, #8b5cf6 100%);
  color: white;
  padding: 60px 24px 48px;
  position: relative;
  overflow: hidden;
}
.report-intro::before {
  content: '';
  position: absolute;
  top: -100px; right: -60px;
  width: 320px; height: 320px;
  background: radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%);
  border-radius: 50%;
}
.report-intro::after {
  content: '';
  position: absolute;
  bottom: -80px; left: 8%;
  width: 260px; height: 260px;
  background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%);
  border-radius: 50%;
}
.report-intro__content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.report-intro__eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #C4B5FD;
  background: rgba(139,92,246,0.2);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}
.report-intro h1 {
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 14px;
  background: linear-gradient(135deg, #fff 0%, #A5F3FC 50%, #C4B5FD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.report-intro__summary {
  font-size: 16px;
  line-height: 1.7;
  max-width: 640px;
  color: #E5E7EB;
}
.report-intro__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.12);
  font-size: 13px;
  color: #D1D5DB;
}
.report-intro__meta span strong {
  font-weight: 600;
  margin-left: 4px;
  color: #A5F3FC;
}

main {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

section {
  margin-bottom: 52px;
  scroll-margin-top: 24px;
}

h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--accent);
  display: flex;
  align-items: center;
  gap: 10px;
}
h2 .emoji { font-size: 24px; }

h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
  margin-top: 28px;
  margin-bottom: 12px;
}

h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-top: 20px;
  margin-bottom: 8px;
}

p { margin-bottom: 14px; color: var(--text-secondary); }
strong { color: var(--text); font-weight: 600; }

blockquote {
  border-left: 4px solid var(--accent);
  padding-left: 16px;
  margin: 16px 0;
  color: var(--text-secondary);
}

ul, ol {
  margin-bottom: 14px;
  padding-left: 24px;
  color: var(--text-secondary);
}
li { margin-bottom: 6px; }
li::marker { color: var(--accent); }

table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 20px;
  font-size: 14px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}
caption {
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 8px;
  padding: 0 2px;
}
thead { background: var(--surface); }
th {
  text-align: left;
  padding: 10px 14px;
  font-weight: 600;
  color: var(--text);
  border-bottom: 1px solid var(--border);
  font-size: 13px;
}
td {
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
  color: var(--text-secondary);
  vertical-align: top;
}
tr:last-child td { border-bottom: none; }
tr:hover td { background: rgba(139,92,246,0.06); }

.callout {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px 18px;
  margin: 18px 0;
}
.callout__label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 8px;
}
.callout p { margin-bottom: 0; font-size: 14px; }

.callout--warn {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.4);
}
.callout--warn .callout__label { color: #FCA5A5; }

.callout--insight {
  background: rgba(139, 92, 246, 0.12);
  border-color: rgba(139, 92, 246, 0.4);
}
.callout--insight .callout__label { color: #C4B5FD; }

.callout--success {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.4);
}
.callout--success .callout__label { color: #6EE7B7; }

.toc {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 40px;
}
.toc__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  column-gap: 24px;
}
.toc li {
  margin-bottom: 6px;
  break-inside: avoid;
}
.toc a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}
.toc a:hover { color: var(--accent); }

/* Demo containers */
.demo {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
  margin: 20px 0;
}
.demo__title {
  font-weight: 600;
  font-size: 15px;
  color: var(--text);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.demo__desc {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 16px;
}
.demo__canvas-wrap {
  background: var(--bg);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
}
.demo__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
.demo__btn {
  padding: 10px 18px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  font-weight: 500;
}
.demo__btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.demo__btn--active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
  font-weight: 600;
}
.demo__btn--active:hover {
  background: var(--accent-hover);
  color: white;
}
.demo__btn--primary {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
  font-weight: 600;
}
.demo__btn--primary:hover {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
}

.demo__result {
  margin-top: 14px;
  padding: 12px 16px;
  background: var(--bg);
  border-radius: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  border-left: 3px solid var(--accent);
}

/* Payoff matrix */
.payoff-matrix {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
  max-width: 440px;
  margin: 0 auto 16px;
  background: var(--border);
  border-radius: 8px;
  overflow: hidden;
}
.payoff-cell {
  background: var(--bg2);
  padding: 14px 10px;
  text-align: center;
  font-size: 13px;
}
.payoff-cell--header {
  background: var(--surface);
  font-weight: 600;
  color: var(--text);
  font-size: 12px;
}
.payoff-cell--label {
  background: var(--surface);
  font-weight: 600;
  color: var(--text);
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.payoff-cell .payoff-vals {
  font-family: monospace;
  font-size: 14px;
  font-weight: 600;
  color: var(--accent2);
}
.payoff-cell .payoff-vals .you { color: var(--accent); }
.payoff-cell.highlight {
  background: rgba(139, 92, 246, 0.25);
}
.payoff-cell.nash {
  background: rgba(16, 185, 129, 0.2);
  box-shadow: inset 0 0 0 2px var(--success);
}

/* Prisoner game */
.prisoner-game {
  text-align: center;
}
.prisoner-scoreboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}
.score-card {
  background: var(--bg);
  border-radius: 8px;
  padding: 12px;
  border: 1px solid var(--border);
}
.score-card__label {
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 4px;
}
.score-card__value {
  font-size: 20px;
  font-weight: 700;
  font-family: monospace;
}
.score-card--you .score-card__value { color: var(--accent); }
.score-card--ai .score-card__value { color: var(--accent2); }

.prisoner-choices {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 16px;
}
.prisoner-choice {
  padding: 14px 28px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
  font-size: 14px;
  border: 2px solid var(--border);
  background: var(--surface);
  color: var(--text-secondary);
}
.prisoner-choice:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}
.prisoner-choice--coop { border-color: rgba(16,185,129,0.4); color: var(--success); }
.prisoner-choice--coop:hover { background: rgba(16,185,129,0.1); border-color: var(--success); }
.prisoner-choice--defect { border-color: rgba(239,68,68,0.4); color: var(--danger); }
.prisoner-choice--defect:hover { background: rgba(239,68,68,0.1); border-color: var(--danger); }

.prisoner-round {
  background: var(--bg);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--border);
}
.prisoner-round__num {
  font-weight: 600;
  color: var(--muted);
  font-family: monospace;
  min-width: 50px;
}
.prisoner-round__choices {
  flex: 1;
  display: flex;
  gap: 16px;
}
.choice-badge {
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
.choice-badge--coop { background: rgba(16,185,129,0.2); color: var(--success); }
.choice-badge--defect { background: rgba(239,68,68,0.2); color: var(--danger); }
.prisoner-round__result {
  font-family: monospace;
  color: var(--muted);
  font-size: 12px;
}

#roundHistory {
  max-height: 180px;
  overflow-y: auto;
  padding-right: 4px;
}

/* Hawk-dove simulation */
.hawk-dove-sim {
  text-align: center;
}
#hawkDoveCanvas {
  width: 100%;
  max-width: 400px;
  height: 240px;
  margin: 0 auto;
}

/* Ultimatum game */
.ultimatum-game {
  text-align: center;
}
.ultimatum-slider-wrap {
  max-width: 360px;
  margin: 0 auto 16px;
}
.ultimatum-amount {
  font-size: 36px;
  font-weight: 700;
  color: var(--accent);
  font-family: monospace;
  margin-bottom: 8px;
}
.ultimatum-slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: var(--surface);
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
}
.ultimatum-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(139,92,246,0.5);
}

/* Test items */
.test-item {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 18px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s;
}
.test-item:hover { border-color: var(--accent); }
.test-item__q {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.test-item__q::after {
  content: '▸';
  color: var(--muted);
  transition: transform 0.2s;
  font-size: 12px;
}
.test-item.open .test-item__q::after { transform: rotate(90deg); }
.test-item__a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s, padding 0.3s;
  font-size: 13px;
  color: var(--text-secondary);
}
.test-item.open .test-item__a {
  max-height: 800px;
  padding-top: 12px;
  margin-top: 8px;
  border-top: 1px solid var(--border);
}

.insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
  margin: 20px 0;
}
.insight-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  transition: border-color 0.2s;
}
.insight-card:hover { border-color: var(--accent); }
.insight-card__icon { font-size: 22px; margin-bottom: 8px; }
.insight-card__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 6px;
}
.insight-card__desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.6;
}

.nobel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
  margin: 16px 0;
}
.nobel-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 14px;
}
.nobel-card__name {
  font-weight: 600;
  font-size: 13px;
  color: var(--text);
}
.nobel-card__year {
  font-size: 12px;
  color: var(--accent);
  font-family: monospace;
  margin-top: 2px;
}
.nobel-card__contrib {
  font-size: 11px;
  color: var(--muted);
  margin-top: 4px;
  line-height: 1.5;
}

footer {
  border-top: 1px solid var(--border);
  padding: 24px;
  text-align: center;
  font-size: 12px;
  color: var(--muted);
}

@media (max-width: 640px) {
  .report-intro { padding: 40px 20px 36px; }
  .report-intro h1 { font-size: 24px; }
  .report-intro__summary { font-size: 14px; }
  main { padding: 28px 16px 60px; }
  h2 { font-size: 18px; }
  h3 { font-size: 15px; }
  .toc ul { columns: 1; }
  .demo { padding: 16px; }
  .payoff-matrix { max-width: 100%; }
}
</style>
</head>
<body>

<header class="report-intro">
  <div class="report-intro__content">
    <span class="report-intro__eyebrow">🎮 博弈论 · 半小时读透</span>
    <h1>博弈论<br>当你的选择影响别人，别人的选择也影响你时</h1>
    <p class="report-intro__summary">
      从囚徒困境到纳什均衡，从以牙还牙到机制设计。
      12个核心概念 + 3个可动手玩的互动游戏，带你看清日常生活中那些隐藏的策略逻辑。
    </p>
    <div class="report-intro__meta">
      <span>📚 <strong>章节</strong>：12大模块</span>
      <span>⚔️ <strong>核心模型</strong>：囚徒困境/纳什/鹰鸽</span>
      <span>🎮 <strong>互动</strong>：3个可玩游戏</span>
    </div>
  </div>
</header>

<main>

  <nav class="toc">
    <div class="toc__title">📑 本章目录</div>
    <ul>
      <li><a href="#sec1">一、博弈的基本要素</a></li>
      <li><a href="#sec2">二、囚徒困境（互动）</a></li>
      <li><a href="#sec3">三、重复博弈与以牙还牙</a></li>
      <li><a href="#sec4">四、纳什均衡</a></li>
      <li><a href="#sec5">五、信息不对称</a></li>
      <li><a href="#sec6">六、机制设计</a></li>
      <li><a href="#sec7">七、混合策略</a></li>
      <li><a href="#sec8">八、演化博弈论（互动）</a></li>
      <li><a href="#sec9">九、行为博弈论（互动）</a></li>
      <li><a href="#sec10">十、AI时代新前沿</a></li>
      <li><a href="#sec11">十一、日常博弈思维</a></li>
      <li><a href="#sec12">十二、复习自测</a></li>
    </ul>
  </nav>

  <!-- Section 1 -->
  <section id="sec1">
    <h2><span class="emoji">🎯</span>一、博弈的基本要素</h2>

    <blockquote>
      博弈论就是研究互动决策的学问。核心问题只有一个：
      <br><br>
      <strong>当你的选择会影响别人，别人的选择也会影响你时，你该怎么办？</strong>
    </blockquote>

    <p>博弈论的英文是 <strong>Game Theory</strong>，但这里的 Game 不是娱乐的意思，而是指任何存在互动决策的场景。</p>

    <p><strong>奠基人：</strong>约翰·冯·诺依曼 & 奥斯卡·摩根斯特恩，1944年出版《博弈论与经济行为》。</p>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">👤</div>
        <div class="insight-card__title">参与者</div>
        <div class="insight-card__desc">谁在玩？两个人、企业、国家、算法</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🎲</div>
        <div class="insight-card__title">策略</div>
        <div class="insight-card__desc">有哪些选择？降价/维持/涨价</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">💰</div>
        <div class="insight-card__title">收益</div>
        <div class="insight-card__desc">每种结果得到什么？钱、时间、心情、名声</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🔍</div>
        <div class="insight-card__title">信息</div>
        <div class="insight-card__desc">你知道多少？你知道对方知道多少？</div>
      </div>
    </div>
  </section>

  <!-- Section 2: Prisoner's Dilemma -->
  <section id="sec2">
    <h2><span class="emoji">🔒</span>二、囚徒困境——为什么聪明人会做出蠢决定？</h2>

    <p>博弈论中最著名的模型，没有之一。</p>

    <h3>故事</h3>
    <p>两个嫌犯被分别关押审讯，不能沟通。每人有两个选择：<strong>沉默（合作）</strong>或<strong>揭发（背叛）</strong>。</p>

    <!-- Interactive payoff matrix -->
    <div class="demo">
      <div class="demo__title">🎮 互动：囚徒困境支付矩阵</div>
      <div class="demo__desc">点"你"的两个选择，看看你和对方的收益分别是多少。绿色框是纳什均衡（双方都不想单方面改变）。</div>

      <div class="demo__canvas-wrap">
        <div class="payoff-matrix" id="payoffMatrix">
          <div class="payoff-cell"></div>
          <div class="payoff-cell payoff-cell--header">对方沉默</div>
          <div class="payoff-cell payoff-cell--header">对方揭发</div>
          <div class="payoff-cell payoff-cell--label">你沉默</div>
          <div class="payoff-cell" id="cellCC">
            <div class="payoff-vals"><span class="you">-1</span> / -1</div>
            <div style="font-size:11px;color:var(--muted);margin-top:4px;">各判1年</div>
          </div>
          <div class="payoff-cell" id="cellCD">
            <div class="payoff-vals"><span class="you">-10</span> / 0</div>
            <div style="font-size:11px;color:var(--muted);margin-top:4px;">你判10年，对方释放</div>
          </div>
          <div class="payoff-cell payoff-cell--label">你揭发</div>
          <div class="payoff-cell" id="cellDC">
            <div class="payoff-vals"><span class="you">0</span> / -10</div>
            <div style="font-size:11px;color:var(--muted);margin-top:4px;">你释放，对方判10年</div>
          </div>
          <div class="payoff-cell nash" id="cellDD">
            <div class="payoff-vals"><span class="you">-5</span> / -5</div>
            <div style="font-size:11px;color:var(--muted);margin-top:4px;">各判5年</div>
          </div>
        </div>

        <div class="demo__controls" style="justify-content:center;">
          <button class="demo__btn" onclick="showYourChoice('silent')">🔇 你选择沉默</button>
          <button class="demo__btn" onclick="showYourChoice('defect')">⚡ 你选择揭发</button>
        </div>
      </div>

      <div class="demo__result" id="payoffResult">
        💡 <strong>核心矛盾：</strong>不管对方怎么选，揭发对你自己总是更好。但如果两人都揭发，各判5年，反而不如都沉默只判1年。
        <br><br>
        这就是囚徒困境最扎心的地方：<strong>个体理性导致了集体非理性。</strong>
      </div>
    </div>

    <h3>现实中的囚徒困境</h3>

    <table>
      <thead>
        <tr><th>场景</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>企业价格战</strong></td><td>两家航空公司都知道维持高票价对双方最好，但每一方都有偷偷降价抢客的冲动，最终两败俱伤</td></tr>
        <tr><td><strong>国际碳排放</strong></td><td>每个国家都希望别国减排，自己搭便车，结果大家都不怎么减，地球越来越热</td></tr>
      </tbody>
    </table>

    <h3>怎么跳出囚徒困境？</h3>

    <div class="callout callout--insight">
      <div class="callout__label">🔑 两个关键条件</div>
      <p><strong>① 重复博弈</strong> — 如果游戏反复玩很多次，今天背叛了，下次就会被报复</p>
      <p style="margin-top:4px;"><strong>② 惩罚机制</strong> — 背叛者会受到惩罚，让背叛的成本高于收益</p>
    </div>
  </section>

  <!-- Section 3 -->
  <section id="sec3">
    <h2><span class="emoji">🔁</span>三、重复博弈与以牙还牙</h2>

    <h3>阿克塞尔罗德锦标赛</h3>

    <p>1980年，密歇根大学政治学家罗伯特·阿克塞尔罗德组织了一场著名的计算机锦标赛。邀请博弈论专家提交策略程序，在重复囚徒困境中互相对决。</p>

    <div class="callout callout--insight">
      <div class="callout__label">🏆 获胜者：以牙还牙（Tit for Tat）</div>
      <p>只有四行代码，极其简单：</p>
      <p style="margin-top:6px;">① 第一轮：选择合作</p>
      <p>② 之后每轮：模仿对方上一轮的选择</p>
      <p style="margin-top:6px;">你合作 → 我就合作 &nbsp;|&nbsp; 你背叛 → 我就背叛 &nbsp;|&nbsp; 不记仇 → 你回头我立刻原谅</p>
    </div>

    <h3>深刻的道理</h3>

    <blockquote>
      在长期关系中，合作不需要靠善良或道德来维持，纯粹的理性计算就够了。
      <br><br>
      你不需要相信对方是好人，只需要知道你们还会再见面。
      <br><br>
      这叫做<strong>"未来的影子"（Shadow of the Future）</strong>。
    </blockquote>

    <h3>现实应用</h3>

    <table>
      <thead>
        <tr><th>场景</th><th>逻辑</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>小城镇做生意更讲诚信</strong></td><td>不是小镇人更善良，而是你坑了一个客户，全镇人明天就都知道了</td></tr>
        <tr><td><strong>旅游景区宰客</strong></td><td>商贩知道你大概率不会再来，宰你一次没有后果</td></tr>
        <tr><td><strong>互联网平台信用体系</strong></td><td>淘宝好评、Uber双向评分——制造以牙还牙的环境，让一次性交易有长期后果</td></tr>
      </tbody>
    </table>
  </section>

  <!-- Section 4 -->
  <section id="sec4">
    <h2><span class="emoji">⚖️</span>四、纳什均衡——没人想改变的局面</h2>

    <p>1950年，年仅21岁的<strong>约翰·纳什</strong>提出了纳什均衡，改变了博弈论。</p>

    <div class="callout callout--insight">
      <div class="callout__label">💎 定义</div>
      <p>在纳什均衡状态下，每个参与者都在做对自己最好的选择——前提是其他人也不改变策略。</p>
      <p style="margin-top:6px;">换句话说：<strong>没有人有动力单方面改变行为。</strong></p>
    </div>

    <div class="callout callout--warn">
      <div class="callout__label">⚠️ 注意</div>
      <p>纳什均衡<strong>不意味着结果是最好的</strong>，只意味着它是稳定的。</p>
      <p style="margin-top:6px;">比如囚徒困境中的"双方都揭发"就是一个纳什均衡——单方面改变策略只会让自己更惨。</p>
    </div>

    <h3>生活中的纳什均衡</h3>

    <ul>
      <li>所有人都靠右行驶 → 如果别人都靠右，你单独靠左只会出车祸</li>
      <li>英国/日本靠左行驶 → 也是纳什均衡</li>
      <li>关键不在于哪边更好，而在于大家必须协调一致</li>
    </ul>

    <h3>约翰·纳什其人</h3>
    <ul>
      <li>1994年诺贝尔经济学奖</li>
      <li>天才的数学头脑 vs 精神分裂症的常年抗争</li>
      <li>最终康复并获奖</li>
      <li>被拍成电影《美丽心灵》（A Beautiful Mind）</li>
    </ul>

    <h3>焦点（Focal Point）</h3>

    <p>一个博弈可能有<strong>多个纳什均衡</strong>，理论本身不告诉你哪个会发生。</p>

    <p>经济学家托马斯·谢林提出：<strong>那种大家自然而然会想到的选项就叫焦点</strong>。</p>

    <div class="callout">
      <div class="callout__label">📍 经典例子</div>
      <p>"在纽约中央车站大钟下面见"——不需要提前约，大家自然会想到那里。</p>
    </div>
  </section>

  <!-- Section 5 -->
  <section id="sec5">
    <h2><span class="emoji">🕵️</span>五、信息不对称——谁知道的多谁就占便宜</h2>

    <table>
      <thead>
        <tr><th>场景</th><th>谁知道得多</th></tr>
      </thead>
      <tbody>
        <tr><td>买二手车</td><td>卖家知道车有没有毛病，买家不知道</td></tr>
        <tr><td>去医院看病</td><td>医生知道你需不需要做贵的检查，你不知道</td></tr>
        <tr><td>找工作</td><td>你知道自己有多能干，面试官不知道</td></tr>
      </tbody>
    </table>

    <h3>两个严重后果</h3>

    <h4>1. 逆向选择（交易之前）</h4>

    <p><strong>提出者：</strong>乔治·阿克洛夫，1970年《柠檬市场》论文。</p>

    <p>"柠檬"在美国俚语里指烂车。</p>

    <div class="callout callout--warn">
      <div class="callout__label">🍋 二手车市场的恶性循环</div>
      <p>① 买家不知道车是好是坏 → 只愿意出平均价格</p>
      <p>② 平均价格对好车车主太低了 → 好车车主退出市场</p>
      <p>③ 市场上剩下的都是烂车 → 买家更不敢出高价</p>
      <p>④ 好车越来越少 → 价格越来越低 → 恶性循环</p>
    </div>

    <h4>2. 道德风险（交易之后）</h4>

    <p>买了全额车险以后，开车可能更莽了——反正出事有保险公司赔。</p>
    <p>你的行为因为信息不对称而改变了，但对方看不到你的行为。</p>

    <h3>对抗方法：信号传递</h3>

    <p><strong>提出者：</strong>迈克尔·斯宾塞</p>

    <table>
      <thead>
        <tr><th>例子</th><th>传递了什么信号</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>名牌大学文凭</strong></td><td>不一定是大学里学了多少东西，而是"能考上名校"本身就传递了你的能力</td></tr>
        <tr><td><strong>企业花大钱做广告</strong></td><td>看似浪费，但传递的信号是"我们有钱投广告，说明我们对产品有信心，打算长期经营"</td></tr>
      </tbody>
    </table>
  </section>

  <!-- Section 6 -->
  <section id="sec6">
    <h2><span class="emoji">🎲</span>六、机制设计——反过来玩博弈论</h2>

    <blockquote>
      如果说传统博弈论是"给定游戏规则，找最优策略"，那么机制设计就是反过来：
      <br><br>
      <strong>你来设计游戏规则，让参与者在追求自身利益的过程中自动实现你想要的结果。</strong>
      <br><br>
      也被称为<strong>逆向博弈论</strong>。
    </blockquote>

    <p>2007年诺贝尔经济学奖授予三位奠基人：莱昂尼德·赫维兹、埃里克·马斯金、罗杰·迈尔森。</p>

    <h3>最优雅的例子：切蛋糕问题</h3>

    <div class="callout callout--success">
      <div class="callout__label">🍰 两个小孩分蛋糕，怎么保证公平？</div>
      <p><strong>答案：一个人切，另一个人先选。</strong></p>
      <p style="margin-top:6px;">切蛋糕的人为了不吃亏，会尽量切得一样大。没有人需要监督，公平自动实现。</p>
    </div>

    <h3>第二价格密封拍卖（维克里拍卖）</h3>

    <p><strong>提出者：</strong>威廉·维克里</p>

    <table>
      <thead>
        <tr><th>规则</th><th>妙处</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>所有人提交密封出价<br>出价最高的人赢<br>但只需支付第二高的价格</td>
          <td>让每个人的最优策略变成<strong>如实报出自己对物品的真实估价</strong>——你没有任何理由虚报</td>
        </tr>
      </tbody>
    </table>

    <p>Google 早期的搜索广告竞价系统就借鉴了这个思路。</p>
  </section>

  <!-- Section 7 -->
  <section id="sec7">
    <h2><span class="emoji">🎯</span>七、混合策略与不可预测性</h2>

    <h3>石头剪刀布的最优解</h3>

    <div class="callout callout--insight">
      <div class="callout__label">答案是：完全随机</div>
      <p>如果你总出石头，对手发现了就永远出布。任何固定模式都是可被利用的弱点。</p>
    </div>

    <p>这就是<strong>混合策略</strong>的精髓：最优解不是选定一个行动，而是以特定概率在不同行动之间随机切换。</p>

    <h3>真实案例：点球大战</h3>

    <p>研究者对大量职业比赛数据的分析表明，优秀的点球手确实在按照接近博弈论预测的最优混合策略来踢。</p>
    <p>他们根据特定比例随机分配左、中、右，让守门员无法预判。</p>

    <div class="callout callout--insight">
      <div class="callout__label">💡 违反直觉的洞见</div>
      <p><strong>不可预测性本身就是一种力量。</strong></p>
      <ul style="margin-top:8px;">
        <li>完全可预测的对手很好对付——因为你知道他会怎么选</li>
        <li>有时候做出"不理性"的选择，反而让对手无所适从</li>
        <li>扑克高手不会只在拿到好牌时加注——偶尔拿着烂牌也加注，诈唬才能让对手猜不透</li>
      </ul>
    </div>
  </section>

  <!-- Section 8: Evolutionary game theory -->
  <section id="sec8">
    <h2><span class="emoji">🦅</span>八、演化博弈论——自然界的策略竞争</h2>

    <p>1973年，生物学家约翰·梅纳德·史密斯与乔治·普莱斯将博弈论引入进化生物学，提出了<strong>演化稳定策略（ESS）</strong>。</p>

    <blockquote>
      自然选择像一场永不停息的博弈锦标赛。动物不需要思考策略，那些恰好采用更好策略的个体活得更久、繁殖更多，它们的策略就会在种群中扩散。
    </blockquote>

    <!-- Hawk-Dove simulation -->
    <div class="demo">
      <div class="demo__title">🎮 互动：鹰鸽博弈演化模拟</div>
      <div class="demo__desc">点击开始，观察鹰策略和鸽策略在种群中的比例如何演化。全是鸽时鹰会入侵，鹰太多时鸽反而更划算。</div>

      <div class="demo__canvas-wrap">
        <canvas id="hawkDoveCanvas" width="400" height="240"></canvas>
        <div class="demo__controls" style="justify-content:center;margin-top:12px;">
          <button class="demo__btn demo__btn--primary" onclick="startHawkDove()">▶️ 开始/重置</button>
          <button class="demo__btn" onclick="stepHawkDove()">⏭ 单步</button>
        </div>
        <div class="demo__result" id="hawkDoveResult">
          💡 初始状态：全是鸽（绿色）。加入一只鹰（红色）看看会发生什么……
        </div>
      </div>
    </div>

    <h3>鹰鸽博弈模型</h3>

    <table>
      <thead>
        <tr><th>策略</th><th>行为</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>鹰策略</strong></td><td>总是打架，打赢了获得资源，打输了受伤</td></tr>
        <tr><td><strong>鸽策略</strong></td><td>遇到对手就退让</td></tr>
      </tbody>
    </table>

    <h4>演化过程</h4>
    <ul>
      <li>全是鸽 → 偶尔出现一只鹰就能称霸，不用打架就能拿全部资源</li>
      <li>鹰太多 → 鹰鹰相遇两败俱伤，反而鸽的退让策略更划算</li>
      <li>最终 → 稳定在一个鹰鸽混合的比例上</li>
    </ul>

    <h3>互联网时代的应用</h3>
    <p>演化博弈论在今天有了全新的用武之地——互联网生态系统：</p>
    <ul>
      <li>谣言在社交媒体上的传播遵循类似的演化逻辑</li>
      <li>更能吸引注意力的内容存活下来并被大量转发，无聊的内容则灭绝</li>
      <li>平台的算法推荐本质上是在营造一个自然选择的环境</li>
    </ul>
  </section>

  <!-- Section 9: Behavioral game theory -->
  <section id="sec9">
    <h2><span class="emoji">🧠</span>九、行为博弈论——真实的人不是计算机</h2>

    <p>传统博弈论假设人是完全理性的。但真实的人远非如此。</p>

    <h3>最后通牒博弈</h3>

    <p>最经典的行为经济学实验：</p>
    <ul>
      <li>甲有100块钱，可以提议分给乙一部分</li>
      <li>乙只能接受或拒绝。如果拒绝，两人都一分钱拿不到</li>
    </ul>

    <p><strong>理性预测：</strong>甲只给乙1块钱，乙应该接受（1块总比0块多）。</p>

    <p><strong>实验结果：</strong></p>
    <ul>
      <li>甲平均会给乙40%左右</li>
      <li>低于20%的提议大概率被拒绝</li>
    </ul>

    <!-- Interactive ultimatum game -->
    <div class="demo">
      <div class="demo__title">🎮 互动：最后通牒博弈</div>
      <div class="demo__desc">你是提议者甲，有100块钱。拖动滑块决定分给对方多少，然后看看"AI乙"会不会接受。</div>

      <div class="demo__canvas-wrap">
        <div class="ultimatum-game">
          <div class="ultimatum-amount" id="ultimatumAmount">分给对方 50 元</div>
          <div class="ultimatum-slider-wrap">
            <input type="range" class="ultimatum-slider" id="ultimatumSlider" min="0" max="100" step="1" value="50">
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-top:6px;">
              <span>0元</span>
              <span>你保留 <strong id="ultimatumKeep" style="color:var(--accent);">50元</strong></span>
              <span>100元</span>
            </div>
          </div>
          <div class="demo__controls" style="justify-content:center;">
            <button class="demo__btn demo__btn--primary" onclick="proposeUltimatum()">📤 提出分配方案</button>
          </div>
          <div class="demo__result" id="ultimatumResult" style="text-align:left;margin-top:16px;">
            💡 理性预测：只要大于0元，对方就应该接受。但真实的人有公平感，太低的提议大概率会被拒绝。
          </div>
        </div>
      </div>
    </div>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 意义</div>
      <p>因为人有公平感。乙宁可自己损失，也要惩罚不公平的甲。</p>
      <p style="margin-top:6px;">这对人类社会合作的演化意义重大——正是这种非理性的公平偏好，让欺骗者付出了代价，维护了社会合作的基础。</p>
    </div>

    <h3>展望理论（Prospect Theory）</h3>

    <p><strong>丹尼尔·卡尼曼</strong>提出，人在博弈中并不像理论预测的那样冷静：</p>

    <table>
      <thead>
        <tr><th>认知偏差</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>损失厌恶</strong></td><td>丢掉100块的痛苦远超捡到100块的快乐</td></tr>
        <tr><td><strong>框架效应</strong></td><td>同样的选择，换个说法就能改变你的决定</td></tr>
      </tbody>
    </table>
  </section>

  <!-- Section 10 -->
  <section id="sec10">
    <h2><span class="emoji">🤖</span>十、博弈论新前沿——AI时代</h2>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">💬</div>
        <div class="insight-card__title">大语言模型的准理性</div>
        <div class="insight-card__desc">不完全按纳什均衡出牌，也不像人类受情绪干扰，介于两者之间</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🚗</div>
        <div class="insight-card__title">多智能体博弈</div>
        <div class="insight-card__desc">自动驾驶汽车之间的高速博弈，数百个智能体同时决策</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🛡️</div>
        <div class="insight-card__title">AI对齐</div>
        <div class="insight-card__desc">本质是机制设计问题——设计规则让AI不损害人类利益</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">💰</div>
        <div class="insight-card__title">算法共谋</div>
        <div class="insight-card__desc">AI定价算法自发配合维持高价，算不算垄断？法律尚无答案</div>
      </div>
    </div>
  </section>

  <!-- Section 11 -->
  <section id="sec11">
    <h2><span class="emoji">💡</span>十一、日常生活中的博弈思维</h2>

    <h3>1. 谈判中的承诺策略</h3>

    <div class="callout callout--insight">
      <div class="callout__label">🔑 反直觉的洞见</div>
      <p><strong>有时候限制自己的选择空间反而能让你更强。</strong></p>
      <p style="margin-top:6px;">买房砍价：告诉中介"我的预算最高就到这个数"——如果这个承诺可信（比如银行贷款确实只批了那么多），卖方就知道再坚持也没用。</p>
      <p style="margin-top:6px;">古代的破釜沉舟是同一个逻辑：烧掉退路反而让你的作战决心变成了可信的威胁。</p>
    </div>

    <h3>2. 职场中的信号博弈</h3>

    <p>你在公司里的一举一动都是在发信号：</p>
    <ul>
      <li>加班到深夜 → 不一定是工作需要，可能是在向老板发送"我很努力"的信号</li>
      <li>穿正装面试 → 不一定是喜欢西装，而是在传递"我认真对待这次机会"的信号</li>
    </ul>

    <h3>3. 先发优势 vs 后发优势</h3>

    <table>
      <thead>
        <tr><th></th><th>优势</th><th>例子</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>先发</strong></td>
          <td>抢占市场份额、建立品牌认知、制定行业标准</td>
          <td>很多行业先行者</td>
        </tr>
        <tr>
          <td><strong>后发</strong></td>
          <td>观察先行者犯了什么错、看清真实需求</td>
          <td>微信不是第一个社交的、Google不是第一个搜索引擎、iPhone不是第一部智能手机</td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Section 12: Quiz -->
  <section id="sec12">
    <h2><span class="emoji">❓</span>十二、复习自测</h2>

    <p>点每道题展开答案。</p>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">1. 博弈的四个基本要素是什么？</div>
      <div class="test-item__a">参与者（谁在玩）、策略（有哪些选择）、收益（每种结果得到什么）、信息（知道多少）。</div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">2. 囚徒困境的核心矛盾是什么？</div>
      <div class="test-item__a">
        个体理性导致集体非理性。每个参与者都做出对自己最优的选择，但结果对所有人都更差。
        比如都背叛各判5年，而都沉默只判1年。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">3. 怎么跳出囚徒困境？两个关键条件是什么？</div>
      <div class="test-item__a">
        ① 重复博弈——游戏要反复玩很多次，今天背叛下次会被报复<br>
        ② 惩罚机制——背叛者会受到惩罚，让背叛的成本高于收益
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">4. "以牙还牙"策略是什么？成功策略的四个特征是什么？</div>
      <div class="test-item__a">
        第一轮选择合作，之后每轮模仿对方上一轮的选择。
        <br><br>
        四个特征：善良（不首先背叛）、可报复（不被白占便宜）、宽容（对方回头就原谅）、清晰（行为模式可预测）。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">5. 什么是"未来的影子"？举一个生活中的例子。</div>
      <div class="test-item__a">
        因为你们还会再见面（未来有交集），所以选择合作而不是背叛。
        <br>
        例子：小城镇做生意更讲诚信（坑一个客户全镇都知道）；旅游景区容易宰客（大概率不会再来）；平台评分系统（让一次性交易有了长期后果）。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">6. 什么是纳什均衡？它意味着结果是最好的吗？</div>
      <div class="test-item__a">
        纳什均衡是指每个参与者都在做对自己最好的选择（前提是其他人不变），没有人有动力单方面改变。
        <br>
        它不意味着结果是最好的，只意味着它是稳定的。比如囚徒困境中的"都背叛"就是纳什均衡，但不是最好的结果。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">7. 什么是焦点（Focal Point）？举一个经典例子。</div>
      <div class="test-item__a">
        当一个博弈有多个纳什均衡时，那种大家自然而然会想到的选项就叫焦点。
        <br>
        经典例子："在纽约中央车站大钟下面见"——不需要提前约，大家自然会想到那里。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">8. 信息不对称会导致哪两个严重问题？分别发生在交易前还是交易后？</div>
      <div class="test-item__a">
        ① 逆向选择——发生在交易之前（比如柠檬市场：好车退出，烂车留下）<br>
        ② 道德风险——发生在交易之后（比如买了全险后开车更莽）
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">9. 什么是信号传递？举两个例子。</div>
      <div class="test-item__a">
        用可观测的行动来传递不可观测的信息（能力、质量等）。
        <br>
        例子：名牌大学文凭（传递能力信号）、企业花大钱做广告（传递"我们有实力、长期经营"的信号）。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">10. 机制设计是什么？为什么又叫"逆向博弈论"？</div>
      <div class="test-item__a">
        传统博弈论是给定规则找最优策略；机制设计是反过来——你想要什么结果，设计一套规则让参与者在追求自身利益的过程中自动实现那个结果。
        <br>
        例子：切蛋糕问题（一个人切，另一个人选）、第二价格密封拍卖。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">11. 混合策略的精髓是什么？为什么不可预测性本身就是力量？</div>
      <div class="test-item__a">
        混合策略的精髓是：最优解不是选定一个行动，而是以特定概率在不同行动之间随机切换。
        <br>
        因为任何固定模式都是可被利用的弱点。不可预测让对手无所适从。
        例子：石头剪刀布、点球大战、扑克诈唬。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">12. 鹰鸽博弈的结果是什么？为什么不是全鹰也不是全鸽？</div>
      <div class="test-item__a">
        最终会稳定在一个鹰鸽混合的比例上。
        <br>
        • 全是鸽 → 鹰可以轻易入侵，不打架就能拿全部资源
        <br>
        • 全是鹰 → 鹰鹰相遇两败俱伤，反而鸽的退让策略更划算
        <br>
        → 自然选择会让种群稳定在一个平衡点上。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">13. 最后通牒博弈揭示了什么？</div>
      <div class="test-item__a">
        揭示了人类有公平感，不是完全理性的。乙宁可自己损失，也要惩罚不公平的甲。
        <br>
        这对人类社会合作的演化意义重大——正是这种非理性的公平偏好，让欺骗者付出代价，维护了社会合作的基础。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">14. 博弈论有哪三个主要局限？</div>
      <div class="test-item__a">
        ① 模型太简化——真实世界更复杂，选项和收益往往不清晰，信息不完整
        <br>
        ② 理性假设不总是适用——人受情绪、习惯、文化驱动，不是完全理性的计算机
        <br>
        ③ 伦理维度不可忽视——博弈论告诉你什么是最优策略，但不告诉你什么是对的
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">15. 阿克塞尔罗德总结的成功策略有哪四个特征？</div>
      <div class="test-item__a">
        ① 善良——不首先背叛
        <br>
        ② 可报复——不被白占便宜
        <br>
        ③ 宽容——对方回头就原谅
        <br>
        ④ 清晰——让对方能理解你的行为模式
      </div>
    </div>
  </section>

</main>

<footer>
  🎮 博弈论 · 交互式学习笔记
</footer>

<script>
// ==================== TOC smooth scroll ====================
document.querySelectorAll('.toc a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ==================== Payoff Matrix Interactive ====================
function showYourChoice(choice) {
  // Clear all highlights
  document.querySelectorAll('.payoff-cell').forEach(c => c.classList.remove('highlight'));

  if (choice === 'silent') {
    document.getElementById('cellCC').classList.add('highlight');
    document.getElementById('cellCD').classList.add('highlight');
    document.getElementById('payoffResult').innerHTML =
      '🔇 <strong>你选择沉默：</strong>如果对方也沉默，你们各判1年（不错的结果）。但如果对方揭发，你要判10年而对方直接走人——风险很大！';
  } else {
    document.getElementById('cellDC').classList.add('highlight');
    document.getElementById('cellDD').classList.add('highlight');
    document.getElementById('payoffResult').innerHTML =
      '⚡ <strong>你选择揭发：</strong>如果对方沉默，你直接走人（最好的结果）。如果对方也揭发，各判5年（比10年强）。<br><br>🤔 所以不管对方怎么选，揭发对你自己都更好。这就是为什么两个理性人都会揭发，最终各判5年。';
  }
}

// ==================== Hawk-Dove Simulation ====================
const hdCanvas = document.getElementById('hawkDoveCanvas');
const hdCtx = hdCanvas.getContext('2d');

let hawkDoveRunning = false;
let hawkDoveInterval = null;
let population = [];
const POP_SIZE = 60;

function initHawkDove() {
  population = [];
  for (let i = 0; i < POP_SIZE; i++) {
    population.push('dove'); // 初始全是鸽
  }
  // 加入一只鹰
  population[Math.floor(Math.random() * POP_SIZE)] = 'hawk';
  drawHawkDove();
}

function drawHawkDove() {
  const w = hdCanvas.width;
  const h = hdCanvas.height;

  hdCtx.fillStyle = '#0B1120';
  hdCtx.fillRect(0, 0, w, h);

  const cols = 10;
  const rows = 6;
  const size = 28;
  const gapX = (w - cols * size) / (cols + 1);
  const gapY = (h - rows * size) / (rows + 1);

  let hawkCount = 0;
  let doveCount = 0;

  for (let i = 0; i < POP_SIZE; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const x = gapX + col * (size + gapX);
    const y = gapY + row * (size + gapY);

    const isHawk = population[i] === 'hawk';
    if (isHawk) hawkCount++;
    else doveCount++;

    // Draw circle
    hdCtx.beginPath();
    hdCtx.arc(x + size/2, y + size/2, size/2 - 2, 0, Math.PI * 2);
    hdCtx.fillStyle = isHawk ? '#EF4444' : '#10B981';
    hdCtx.fill();
    hdCtx.strokeStyle = isHawk ? '#FCA5A5' : '#6EE7B7';
    hdCtx.lineWidth = 2;
    hdCtx.stroke();

    // Icon
    hdCtx.fillStyle = 'white';
    hdCtx.font = 'bold 13px sans-serif';
    hdCtx.textAlign = 'center';
    hdCtx.textBaseline = 'middle';
    hdCtx.fillText(isHawk ? '鹰' : '鸽', x + size/2, y + size/2);
  }

  // Stats
  const total = hawkCount + doveCount;
  document.getElementById('hawkDoveResult').innerHTML =
    \`🦅 鹰: <strong>\${hawkCount}</strong> 只 (\${Math.round(hawkCount/total*100)}%) &nbsp;&nbsp; 🕊️ 鸽: <strong>\${doveCount}</strong> 只 (\${Math.round(doveCount/total*100)}%)\`;
}

function stepHawkDove() {
  // 随机选两个个体对决
  const i = Math.floor(Math.random() * population.length);
  let j = Math.floor(Math.random() * population.length);
  while (j === i) j = Math.floor(Math.random() * population.length);

  const a = population[i];
  const b = population[j];

  // 简化版鹰鸽博弈收益：
  // 鹰vs鹰：两败俱伤，都死 (50%概率死亡)
  // 鹰vs鸽：鹰赢，鸽输 (鸽50%概率死亡，鹰存活)
  // 鸽vs鸽：和平分享，都活，偶尔繁殖
  if (a === 'hawk' && b === 'hawk') {
    if (Math.random() < 0.5) population[i] = population[Math.floor(Math.random()*population.length)];
    if (Math.random() < 0.5) population[j] = population[Math.floor(Math.random()*population.length)];
  } else if (a === 'hawk' && b === 'dove') {
    // 鹰赢，鸽被淘汰，鹰繁殖
    population[j] = 'hawk';
  } else if (a === 'dove' && b === 'hawk') {
    population[i] = 'hawk';
  } else {
    // 鸽vs鸽：偶尔繁殖
    if (Math.random() < 0.1) {
      const randIdx = Math.floor(Math.random() * population.length);
      population[randIdx] = 'dove';
    }
  }

  drawHawkDove();
}

function startHawkDove() {
  initHawkDove();
  if (hawkDoveInterval) {
    clearInterval(hawkDoveInterval);
  }
  hawkDoveInterval = setInterval(stepHawkDove, 200);
  document.getElementById('hawkDoveResult').innerHTML = '⏳ 模拟运行中...观察种群变化';
}

// ==================== Ultimatum Game ====================
const ultimatumSlider = document.getElementById('ultimatumSlider');

ultimatumSlider.addEventListener('input', function() {
  const val = parseInt(this.value);
  document.getElementById('ultimatumAmount').textContent = \`分给对方 \${val} 元\`;
  document.getElementById('ultimatumKeep').textContent = \`\${100 - val}元\`;
});

function proposeUltimatum() {
  const offer = parseInt(ultimatumSlider.value);
  const result = document.getElementById('ultimatumResult');

  // Simulate AI乙 behavior: more likely to accept higher offers
  // Realistic: <20% likely rejected, ~40% mostly accepted
  let acceptProb = 0;
  if (offer < 10) acceptProb = 0.05;
  else if (offer < 20) acceptProb = 0.2;
  else if (offer < 30) acceptProb = 0.5;
  else if (offer < 40) acceptProb = 0.75;
  else acceptProb = 0.95;

  const accepted = Math.random() < acceptProb;

  if (accepted) {
    result.innerHTML = \`✅ <strong>对方接受了！</strong><br><br>你得到 <span style="color:var(--success);font-weight:600;">\${100 - offer} 元</span>，对方得到 <span style="color:var(--accent2);font-weight:600;">\${offer} 元</span>。<br><br>💡 虽然你只分了 \${offer}%，但对方觉得还能接受。公平感是有阈值的。\`;
  } else {
    result.innerHTML = \`❌ <strong>对方拒绝了！</strong><br><br>你们<strong>两个人都一分钱也拿不到</strong>。<br><br>😤 对方觉得 \${offer} 元太不公平了，宁可自己损失也要惩罚你。这就是传统理性预测解释不了的"公平偏好"。\`;
  }
}

// ==================== Initialize ====================
window.addEventListener('load', () => {
  initHawkDove();
});
<\/script>

</body>
</html>
`,K5=`---
{"no":"第 3 期","title":"第一性原理","order":3}
---
<!-- Generated by Trae Work -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>第一性原理 · 交互式笔记</title>
<style>
:root {
  --bg: #0F172A;
  --bg2: #1E293B;
  --surface: #334155;
  --border: #475569;
  --text: #F1F5F9;
  --text-secondary: #CBD5E1;
  --muted: #94A3B8;
  --accent: #F59E0B;
  --accent-hover: #D97706;
  --accent-soft: rgba(245, 158, 11, 0.15);
  --accent-soft-strong: rgba(245, 158, 11, 0.3);
  --success: #10B981;
  --danger: #EF4444;
  --info: #3B82F6;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

/* Intro */
.report-intro {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #e94560 100%);
  color: white;
  padding: 60px 24px 48px;
  position: relative;
  overflow: hidden;
}
.report-intro::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -60px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(233,69,96,0.2) 0%, transparent 70%);
  border-radius: 50%;
}
.report-intro::after {
  content: '';
  position: absolute;
  bottom: -80px;
  left: 10%;
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%);
  border-radius: 50%;
}
.report-intro__content {
  max-width: 880px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.report-intro__eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #FCD34D;
  background: rgba(245,158,11,0.2);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}
.report-intro h1 {
  font-size: 34px;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 14px;
  background: linear-gradient(135deg, #fff 0%, #FCD34D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.report-intro__summary {
  font-size: 16px;
  line-height: 1.7;
  max-width: 640px;
  opacity: 0.9;
  color: #E2E8F0;
}
.report-intro__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.15);
  font-size: 13px;
  opacity: 0.85;
}
.report-intro__meta span strong {
  font-weight: 600;
  margin-left: 4px;
  color: #FCD34D;
}

/* Main */
main {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

section {
  margin-bottom: 52px;
  scroll-margin-top: 24px;
}

h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--accent);
  display: flex;
  align-items: center;
  gap: 10px;
}
h2 .emoji { font-size: 24px; }

h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
  margin-top: 28px;
  margin-bottom: 12px;
}

h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-top: 20px;
  margin-bottom: 8px;
}

p {
  margin-bottom: 14px;
  color: var(--text-secondary);
}

strong { color: var(--text); font-weight: 600; }

blockquote {
  border-left: 4px solid var(--accent);
  padding-left: 16px;
  margin: 16px 0;
  color: var(--text-secondary);
  font-style: normal;
}

ul, ol {
  margin-bottom: 14px;
  padding-left: 24px;
  color: var(--text-secondary);
}
li { margin-bottom: 6px; }
li::marker { color: var(--accent); }

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 20px;
  font-size: 14px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}
caption {
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 8px;
  padding: 0 2px;
}
thead { background: var(--surface); }
th {
  text-align: left;
  padding: 10px 14px;
  font-weight: 600;
  color: var(--text);
  border-bottom: 1px solid var(--border);
  font-size: 13px;
}
td {
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
  color: var(--text-secondary);
  vertical-align: top;
}
tr:last-child td { border-bottom: none; }
tr:hover td { background: rgba(245,158,11,0.05); }

/* Callout boxes */
.callout {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px 18px;
  margin: 18px 0;
}
.callout__label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 8px;
}
.callout p { margin-bottom: 0; font-size: 14px; }

.callout--warn {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.4);
}
.callout--warn .callout__label { color: #FCA5A5; }

.callout--insight {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.4);
}
.callout--insight .callout__label { color: #FCD34D; }

.callout--success {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.4);
}
.callout--success .callout__label { color: #6EE7B7; }

/* Formula / highlight box */
.formula {
  font-family: "SF Mono", "Consolas", "Liberation Mono", "Courier New", monospace;
  font-size: 14px;
  line-height: 1.8;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px 20px;
  margin: 16px 0;
  color: var(--text-secondary);
  overflow-x: auto;
}
.formula .hl { color: var(--accent); font-weight: 600; }

/* Hierarchy code */
.hierarchy {
  font-family: "SF Mono", "Consolas", "Liberation Mono", "Courier New", monospace;
  font-size: 13px;
  line-height: 1.9;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 18px 20px;
  margin: 16px 0;
  color: var(--text-secondary);
  overflow-x: auto;
}
.hierarchy .hl { color: var(--accent); font-weight: 600; }
.hierarchy .hl2 { color: var(--info); font-weight: 500; }

/* Insight grid */
.insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin: 20px 0;
}
.insight-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  transition: border-color 0.2s;
}
.insight-card:hover { border-color: var(--accent); }
.insight-card__icon { font-size: 22px; margin-bottom: 8px; }
.insight-card__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 6px;
}
.insight-card__desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.6;
}

/* TOC */
.toc {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 40px;
}
.toc__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  column-gap: 24px;
}
.toc li {
  margin-bottom: 6px;
  break-inside: avoid;
}
.toc a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}
.toc a:hover { color: var(--accent); }

/* Demo containers */
.demo {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
  margin: 20px 0;
}
.demo__title {
  font-weight: 600;
  font-size: 15px;
  color: var(--text);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.demo__desc {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 16px;
}
.demo__canvas-wrap {
  background: var(--bg);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
}
.demo__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
.demo__btn {
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.demo__btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.demo__btn--active {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
  font-weight: 600;
}
.demo__btn--active:hover {
  background: var(--accent-hover);
  color: var(--bg);
}

.demo__result {
  margin-top: 14px;
  padding: 14px 16px;
  background: var(--bg);
  border-radius: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  border-left: 3px solid var(--accent);
}

/* 5 Whys interactive */
.why-chain {
  position: relative;
  padding: 10px 0;
}
.why-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 10px;
  opacity: 0.3;
  transition: opacity 0.5s, transform 0.5s;
  transform: translateX(-10px);
}
.why-item.active {
  opacity: 1;
  transform: translateX(0);
}
.why-num {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--surface);
  color: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  transition: all 0.3s;
}
.why-item.active .why-num {
  background: var(--accent);
  color: var(--bg);
}
.why-content {
  flex: 1;
  padding: 8px 12px;
  background: var(--surface);
  border-radius: 8px;
  font-size: 13px;
  color: var(--muted);
  transition: all 0.3s;
}
.why-item.active .why-content {
  color: var(--text-secondary);
  background: var(--bg2);
  border: 1px solid var(--border);
}
.why-q {
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 4px;
  font-size: 12px;
}
.why-item.active .why-q { color: var(--accent); }
.why-arrow {
  text-align: center;
  color: var(--muted);
  font-size: 16px;
  margin: -4px 0 -4px 16px;
  opacity: 0;
  transition: opacity 0.3s;
}
.why-arrow.show { opacity: 0.5; }

/* Assumption detector quiz */
.quiz-card {
  background: var(--bg);
  border-radius: 10px;
  padding: 18px 20px;
  margin-bottom: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}
.quiz-card.correct {
  border-color: var(--success);
  background: rgba(16, 185, 129, 0.1);
}
.quiz-card.wrong {
  border-color: var(--danger);
  background: rgba(239, 68, 68, 0.1);
}
.quiz-card__q {
  font-size: 14px;
  color: var(--text);
  margin-bottom: 12px;
  font-weight: 500;
}
.quiz-card__opts {
  display: flex;
  gap: 8px;
}
.quiz-opt {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg2);
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}
.quiz-opt:hover { border-color: var(--accent); color: var(--accent); }
.quiz-opt.selected-correct {
  background: var(--success);
  color: white;
  border-color: var(--success);
}
.quiz-opt.selected-wrong {
  background: var(--danger);
  color: white;
  border-color: var(--danger);
}
.quiz-opt.disabled { pointer-events: none; opacity: 0.6; }
.quiz-card__explain {
  margin-top: 10px;
  padding: 10px 12px;
  background: var(--bg2);
  border-radius: 6px;
  font-size: 12px;
  color: var(--muted);
  display: none;
}
.quiz-card__explain.show { display: block; }
.quiz-score {
  text-align: center;
  padding: 14px;
  background: var(--accent-soft);
  border-radius: 8px;
  font-size: 14px;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 16px;
}

/* Onion peeling animation */
.onion-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}
.onion-layers {
  position: relative;
  width: 280px;
  height: 280px;
}
.onion-layer {
  position: absolute;
  border-radius: 50%;
  border: 3px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  transition: all 0.5s ease;
  padding: 10px;
}
.onion-layer.l1 {
  width: 280px; height: 280px;
  top: 0; left: 0;
  border-color: rgba(245,158,11,0.8);
  color: #FCD34D;
  background: rgba(245,158,11,0.1);
}
.onion-layer.l2 {
  width: 220px; height: 220px;
  top: 30px; left: 30px;
  border-color: rgba(59,130,246,0.8);
  color: #93C5FD;
  background: rgba(59,130,246,0.1);
}
.onion-layer.l3 {
  width: 160px; height: 160px;
  top: 60px; left: 60px;
  border-color: rgba(16,185,129,0.8);
  color: #6EE7B7;
  background: rgba(16,185,129,0.1);
}
.onion-layer.l4 {
  width: 100px; height: 100px;
  top: 90px; left: 90px;
  border-color: rgba(233,69,96,0.9);
  color: #FCA5A5;
  background: rgba(233,69,96,0.15);
}
.onion-layer.peeled {
  opacity: 0;
  transform: scale(1.2);
}

/* Self test expandable */
.test-item {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 18px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s;
}
.test-item:hover { border-color: var(--accent); }
.test-item__q {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.test-item__q::after {
  content: '▸';
  color: var(--muted);
  transition: transform 0.2s;
  font-size: 12px;
}
.test-item.open .test-item__q::after { transform: rotate(90deg); }
.test-item__a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s, padding 0.3s;
  font-size: 13px;
  color: var(--text-secondary);
}
.test-item.open .test-item__a {
  max-height: 500px;
  padding-top: 12px;
  margin-top: 8px;
  border-top: 1px solid var(--border);
}

/* Footer */
footer {
  border-top: 1px solid var(--border);
  padding: 24px;
  text-align: center;
  font-size: 12px;
  color: var(--muted);
}

/* Responsive */
@media (max-width: 640px) {
  .report-intro { padding: 40px 20px 36px; }
  .report-intro h1 { font-size: 24px; }
  .report-intro__summary { font-size: 14px; }
  main { padding: 28px 16px 60px; }
  h2 { font-size: 18px; }
  h3 { font-size: 15px; }
  .toc ul { columns: 1; }
  .demo { padding: 16px; }
  .onion-layers { transform: scale(0.85); }
}
</style>
</head>
<body>

<header class="report-intro">
  <div class="report-intro__content">
    <span class="report-intro__eyebrow">🧠 思维模型 · 半小时读透</span>
    <h1>第一性原理<br>从信息消费者到知识创造者</h1>
    <p class="report-intro__summary">
      马斯克造火箭、特斯拉降电池成本、乔布斯做iPhone——所有颠覆式创新的背后，都是同一种思维方式。
      这不是一本成功学，这是一套你今天就能用上的思考框架。
    </p>
    <div class="report-intro__meta">
      <span>📖 <strong>阅读时长</strong>：约30分钟</span>
      <span>🎯 <strong>核心框架</strong>：三步法</span>
      <span>🎮 <strong>交互演示</strong>：4个可动手玩</span>
    </div>
  </div>
</header>

<main>

  <!-- TOC -->
  <nav class="toc">
    <div class="toc__title">📑 本章目录</div>
    <ul>
      <li><a href="#sec1">一、什么是第一性原理？</a></li>
      <li><a href="#sec2">二、马斯克的案例</a></li>
      <li><a href="#sec3">三、三步法思维框架</a></li>
      <li><a href="#sec4">四、日常生活中的应用</a></li>
      <li><a href="#sec5">五、第一性原理与AI时代</a></li>
      <li><a href="#sec6">六、工作中的实战指南</a></li>
      <li><a href="#sec7">七、五个练习习惯</a></li>
      <li><a href="#sec8">八、边界与谦逊</a></li>
      <li><a href="#sec9">九、复习自测</a></li>
    </ul>
  </nav>

  <!-- Section 1 -->
  <section id="sec1">
    <h2><span class="emoji">🎯</span>一、什么是第一性原理？</h2>

    <h3>一个不太严肃的比喻：红烧肉</h3>

    <blockquote>
      想象你面前有一盘红烧肉。你问厨师这道菜怎么做的，厨师说"跟着我师傅学的，五花肉要先焯水再炖"。<br><br>
      追溯了三代厨师，没有人能告诉你<strong>为什么</strong>五花肉要先焯水。<br><br>
      直到有一个人停下来想了想：焯水的目的是去除血沫和杂质。那如果我用其他方法能达到同样目的，是不是可以不焯水？
    </blockquote>

    <p>这个人就在用第一性原理思考。他没有盲目遵循"大家都这么做"，而是追问到最底层的物理和化学事实，然后从这个基础出发，重新构建自己的方案。</p>

    <h3>亚里士多德的原始定义</h3>

    <p>公元前4世纪，亚里士多德在《形而上学》中写道：</p>

    <div class="callout callout--insight">
      <div class="callout__label">📜 定义</div>
      <p>在每一个系统性探索中，都存在一个第一性原理。它是一个最基本的命题或假设，<strong>不能被省略，不能被违反，也不能被推翻</strong>。</p>
    </div>

    <p><strong>大白话翻译：</strong>任何复杂事物的背后，都有一些不可再分解的基本事实。找到它们，你就找到了理解整件事的钥匙。</p>

    <p>这个思想在科学界一直有着深远的影响：</p>
    <ul>
      <li>牛顿的三大运动定律</li>
      <li>欧几里得的几何公理</li>
      <li>热力学的几条基本定律</li>
    </ul>
    <p>它们都是各自领域的第一性原理，整个知识大厦都是从这几条简洁的基础规则生长出来的。</p>

    <h3>和类比思维的根本区别</h3>

    <table>
      <caption>类比思维 vs 第一性原理思维</caption>
      <thead>
        <tr><th></th><th>类比思维</th><th>第一性原理思维</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>做法</strong></td><td>别人怎么做，我就怎么做</td><td>回到本质，从零构建</td></tr>
        <tr><td><strong>效率</strong></td><td>高、省力</td><td>低、费脑子</td></tr>
        <tr><td><strong>风险</strong></td><td>低（有先例）</td><td>高（没人验证过）</td></tr>
        <tr><td><strong>结果</strong></td><td>渐进式改进</td><td>颠覆式突破</td></tr>
        <tr><td><strong>例子</strong></td><td>竞品长这样，我的也差不多</td><td>马斯克的可回收火箭</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout__label">💡 理解</div>
      <p>类比思维不是坏事——它效率高、风险低，是人类进化出来的省力策略。但它有一个致命的局限：<strong>只能产生渐进式改进，永远不能产生真正的突破</strong>。</p>
    </div>

    <h3>第一性原理的三步核心逻辑</h3>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">1️⃣</div>
        <div class="insight-card__title">剥离假设</div>
        <div class="insight-card__desc">"别人说的""行业惯例""大家都这么做"，通通先放到一边</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">2️⃣</div>
        <div class="insight-card__title">追问到底</div>
        <div class="insight-card__desc">找到不可再分的基本事实：物理定律、数学规律、人类基本需求</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">3️⃣</div>
        <div class="insight-card__title">重新构建</div>
        <div class="insight-card__desc">从基本事实出发，不受任何既有框架束缚地构建解决方案</div>
      </div>
    </div>
  </section>

  <!-- Section 2 -->
  <section id="sec2">
    <h2><span class="emoji">🚀</span>二、马斯克如何用第一性原理改变世界</h2>

    <h3>火箭为什么这么贵？</h3>

    <p>2001年，埃隆·马斯克决定发射火箭。他先去俄罗斯买现成的洲际弹道导弹，报价<strong>6500万美元一枚</strong>。</p>

    <p>但在从莫斯科飞回美国的航班上，他打开了一个电子表格，开始从最底层算账：</p>

    <div class="formula">
火箭主要材料：航空级铝合金、钛、铜、碳纤维<br>
原材料在大宗商品市场的价格 → 只占火箭售价的 <span class="hl">2%</span>
    </div>

    <p><strong>百分之二！</strong></p>

    <p>也就是说，一枚火箭98%的成本都来自：</p>
    <ul>
      <li>中间环节和层层分包的供应链</li>
      <li>落后的制造工艺</li>
      <li>不思进取的行业惯例</li>
      <li>以及最关键的：火箭是一次性使用的</li>
    </ul>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 这就是第一性原理的力量</div>
      <p>一旦你看到了"原材料只占2%"这个基本事实，你就不可能再接受"火箭就是这么贵"的说法。</p>
    </div>

    <p><strong>结果：</strong></p>
    <ul>
      <li>马斯克创立了 SpaceX，从零开始设计制造流程</li>
      <li>做出了航天史上最大胆的决定：让火箭可以回收重复使用</li>
      <li>到2025年，Falcon 9 单次发射成本降到约 <strong>2700万美元</strong>，不到传统火箭的 1/10</li>
    </ul>

    <h3>电池的秘密</h3>

    <p>特斯拉早期面对的最大难题是电池成本。</p>

    <table>
      <caption>电池成本拆解</caption>
      <thead>
        <tr><th>项目</th><th>价格</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr><td>行业共识价格</td><td style="color:var(--danger);font-weight:600;">$600 / kWh</td><td>"降不下来了"</td></tr>
        <tr><td>原材料成本</td><td style="color:var(--success);font-weight:600;">$80 / kWh</td><td>钴、镍、锂、碳、铝…按大宗商品价格</td></tr>
        <tr><td>差距</td><td style="color:var(--accent);font-weight:600;">$520</td><td>不是物理限制，是工艺和供应链</td></tr>
      </tbody>
    </table>

    <p>600和80之间有一个巨大的鸿沟。这个鸿沟不是物理定律造成的，而是落后的工艺和低效的供应链造成的。</p>

    <p><strong>解决方案：</strong>自建超级工厂、优化电芯设计、垂直整合供应链。到2025年，特斯拉电池包成本降到了接近 <strong>$100/kWh</strong>。</p>

    <div class="callout callout--success">
      <div class="callout__label">✨ 结论</div>
      <p>这不是奇迹，这是第一性原理的必然结果。</p>
    </div>

    <h3>不只是马斯克</h3>

    <p>第一性原理不是马斯克的专利。几乎每一次颠覆式创新的背后都能看到它的影子：</p>

    <table>
      <thead>
        <tr><th>创新者</th><th>没有做什么</th><th>回到了什么基本事实</th><th>做出了什么</th></tr>
      </thead>
      <tbody>
        <tr><td>亨利·福特</td><td>怎么让马跑得更快</td><td>人需要更快地从A到B</td><td>流水线生产的汽车</td></tr>
        <tr><td>史蒂夫·乔布斯</td><td>在手机上加更多按键</td><td>人和信息的交互本质是触摸</td><td>iPhone</td></tr>
        <tr><td>詹姆斯·戴森</td><td>在传统吸尘器上修修补补</td><td>灰尘可以用离心力分离</td><td>无尘袋吸尘器</td></tr>
        <tr><td>DoorDash</td><td>和Uber Eats正面厮杀</td><td>郊区居民同样需要外卖</td><td>从郊区切入，反超</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout__label">💡 共同点</div>
      <p>他们不是更聪明的模仿者，而是更勇敢的追问者。</p>
    </div>
  </section>

  <!-- Section 3 -->
  <section id="sec3">
    <h2><span class="emoji">🧩</span>三、第一性原理的三步法框架</h2>

    <p>第一性原理不是一种天赋，而是一种可以练习的思维框架。</p>

    <!-- Interactive onion demo -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：剥洋葱比喻</div>
      <div class="demo__desc">第一性原理就像剥洋葱，一层一层剥开表象，直到露出最核心的基本事实。点按钮开始剥洋葱。</div>
      <div class="demo__canvas-wrap">
        <div class="onion-demo">
          <div class="onion-layers" id="onionLayers">
            <div class="onion-layer l1" id="ol1">表面现象<br>（大家都这么做）</div>
            <div class="onion-layer l2" id="ol2">行业惯例<br>（一直都是如此）</div>
            <div class="onion-layer l3" id="ol3">底层逻辑<br>（需求与约束）</div>
            <div class="onion-layer l4" id="ol4">基本事实<br>（物理/人性）</div>
          </div>
        </div>
      </div>
      <div class="demo__controls">
        <button class="demo__btn" onclick="peelOnion()">剥一层 🔍</button>
        <button class="demo__btn" onclick="resetOnion()">重置 ↺</button>
      </div>
    </div>

    <h3>第一步：把鱼缸里的水倒掉——识别隐藏假设</h3>

    <p>我们每个人都生活在一个充满隐藏假设的世界里。就像鱼缸里的鱼不知道自己在水中一样，我们也往往意识不到自己被哪些假设包围着。</p>

    <!-- Interactive assumption detector -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：假设 vs 事实</div>
      <div class="demo__desc">下面这些说法，哪些是基本事实？哪些只是假设？点选判断一下。</div>
      <div class="demo__canvas-wrap" id="assumptionQuiz">
        <div class="quiz-score" id="quizScore">得分：0 / 5</div>
        <div id="quizCards"></div>
      </div>
    </div>

    <p><strong>识别隐藏假设的方法：</strong></p>

    <div class="callout callout--warn">
      <div class="callout__label">🚨 警惕这些信号</div>
      <p>当你发现自己在说：</p>
      <p style="margin-top:6px;">"这件事就是这样的" · "大家都这么说" · "一直以来都是如此"</p>
      <p style="margin-top:10px;"><strong>停下来，问自己：这到底是一个事实，还是一个假设？</strong></p>
    </div>

    <h3>第二步：挖到基岩——追问基本事实</h3>

    <p>剥掉了假设之后，下一步是不断追问，直到你碰到那些不可再分的基本事实。</p>

    <div class="callout callout--insight">
      <div class="callout__label">🔧 好用的工具：五个为什么（5 Whys）</div>
      <p>丰田生产方式创始人大野耐一发明。简单到几乎像是在开玩笑，却异常有效。</p>
    </div>

    <!-- Interactive 5 whys -->
    <div class="demo">
      <div class="demo__title">🎮 动手玩：五个为什么</div>
      <div class="demo__desc">项目总是延期？用五个为什么往下挖，看看真正的根因是什么。点"追问下一层"一步步深入。</div>
      <div class="demo__canvas-wrap">
        <div class="why-chain" id="whyChain">
          <div class="why-item active" id="why0">
            <div class="why-num">?</div>
            <div class="why-content">
              <div class="why-q">表面问题</div>
              项目总是延期
            </div>
          </div>
          <div class="why-arrow show" id="arrow0">↓</div>
          <div class="why-item" id="why1">
            <div class="why-num">1</div>
            <div class="why-content">
              <div class="why-q">为什么延期？</div>
              因为最后阶段出了很多BUG
            </div>
          </div>
          <div class="why-arrow" id="arrow1">↓</div>
          <div class="why-item" id="why2">
            <div class="why-num">2</div>
            <div class="why-content">
              <div class="why-q">为什么有这么多BUG？</div>
              因为开发人员赶工，没时间做充分测试
            </div>
          </div>
          <div class="why-arrow" id="arrow2">↓</div>
          <div class="why-item" id="why3">
            <div class="why-num">3</div>
            <div class="why-content">
              <div class="why-q">为什么要赶工？</div>
              因为需求变更太频繁，时间被压缩了
            </div>
          </div>
          <div class="why-arrow" id="arrow3">↓</div>
          <div class="why-item" id="why4">
            <div class="why-num">4</div>
            <div class="why-content">
              <div class="why-q">为什么需求变更频繁？</div>
              因为客户中期才想清楚要什么
            </div>
          </div>
          <div class="why-arrow" id="arrow4">↓</div>
          <div class="why-item" id="why5">
            <div class="why-num">💎</div>
            <div class="why-content">
              <div class="why-q">根因（基本事实）</div>
              项目启动时没有做足够深入的需求调研和原型验证
            </div>
          </div>
        </div>
      </div>
      <div class="demo__controls">
        <button class="demo__btn demo__btn--active" id="whyNextBtn" onclick="nextWhy()">追问下一层 ⬇</button>
        <button class="demo__btn" onclick="resetWhys()">重置 ↺</button>
      </div>
      <div class="demo__result" id="whyResult">
        💡 提示：表面上的问题是"bug太多"，但真正的根因藏在更深的地方。
      </div>
    </div>

    <h3>第三步：从地基开始盖楼——重新构建</h3>

    <p>找到基本事实之后，最激动人心的部分来了：</p>

    <blockquote>
      忘掉所有旧方案，从这些基本事实出发，重新构建你的解决方案。
    </blockquote>

    <p>这一步需要创造力，也需要勇气。因为你构建出来的东西很可能和现有方案完全不同，而"不同"在大多数社会环境里意味着压力和质疑。</p>

    <div class="callout callout--success">
      <div class="callout__label">🏗️ 回到项目管理的例子</div>
      <p>既然根因是启动阶段调研不足，那从这个基本事实出发重新构建：</p>
      <p style="margin-top:8px;">把项目总周期的 <strong>前30%</strong> 完全投入到需求调研和原型验证上，做出可以点击的交互原型，让客户在写一行代码之前就能体验到最终产品。</p>
      <p style="margin-top:8px;">后面70%的时间开发一个需求已被充分验证的方案，BUG自然减少，项目延期的概率大大下降。</p>
    </div>
  </section>

  <!-- Section 4 -->
  <section id="sec4">
    <h2><span class="emoji">🏠</span>四、日常生活中的应用</h2>

    <h3>1. 理财：你真的需要买房吗？</h3>

    <p>"一定要买房"可能是中国社会最根深蒂固的隐藏假设之一。</p>

    <table>
      <caption>买房的需求拆解</caption>
      <thead>
        <tr><th>基本需求</th><th>必须通过买房实现吗？</th><th>替代方案</th></tr>
      </thead>
      <tbody>
        <tr><td>稳定的长期居住空间</td><td>❌ 不一定</td><td>长期租赁合同（德国大量居民终身租房）</td></tr>
        <tr><td>资产保值或增值</td><td>❌ 不一定</td><td>房价上涨期成立，但房产不是无风险资产</td></tr>
        <tr><td>社会认同感和安全感</td><td>❌ 不需要</td><td>这是文化假设，不是物理定律</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout__label">💡 结论</div>
      <p>这不是说不应该买房。而是说，当你剥离了这些假设之后，你才能真正根据自己的实际情况——收入、负债、职业稳定性、生活城市、个人偏好——做出一个理性的决策，而不是被"大家都买所以我也要买"的惯性推着走。</p>
    </div>

    <h3>2. 学习：为什么你总是学了就忘？</h3>

    <p><strong>很多人的学习方式：</strong></p>
    <div class="hierarchy">
买一门课 → 看视频 → 做笔记 → 感觉学会了 → <span class="hl">两周后忘光</span>
    </div>

    <p><strong>用第一性原理来想：人类的记忆是怎么工作的？</strong></p>

    <div class="callout callout--insight">
      <div class="callout__label">🧠 基本事实</div>
      <p><strong>人脑不擅长存储孤立的信息，它擅长的是建立连接。</strong></p>
      <p style="margin-top:6px;">一个新知识点只有和你已有的知识网络建立足够多的连接，才能被长期保持。</p>
    </div>

    <p><strong>基于这个基本事实，有效的学习方法应该是：</strong>不要追求"记住"，而要追求"连接"。</p>

    <p>学一个新概念时，立刻问自己：</p>
    <ul>
      <li>它和我已经知道的什么东西有关？</li>
      <li>它能解释我生活中的什么现象？</li>
      <li>我能不能用它来解决一个实际问题？</li>
    </ul>

    <p>这就是<strong>费曼技巧</strong>背后的原理。理查德·费曼说："如果你不能把一件事用简单语言向别人解释清楚，说明你还没有真正理解它。"解释本身就是在强迫你的大脑建立连接。</p>

    <h3>3. 健康：运动的本质是什么？</h3>

    <table>
      <caption>常见假设 vs 基本事实</caption>
      <thead>
        <tr><th>常见假设</th><th>基本事实</th></tr>
      </thead>
      <tbody>
        <tr><td>每天一定要走一万步</td><td rowspan="3">人体需要的是<strong>规律的身体压力刺激</strong>，会触发肌肉修复、心血管改善、激素调节</td></tr>
        <tr><td>一定要去健身房</td></tr>
        <tr><td>一定要跑步</td></tr>
      </tbody>
    </table>

    <p>具体形式（走路、跑步、游泳、跳舞、搬砖）其实没那么重要，重要的是<strong>强度、频率和持续性</strong>。</p>

    <h3>4. 人际关系：冲突的底层是什么？</h3>

    <p>大多数人的反应是在<strong>事件层面</strong>争论对错。</p>

    <div class="callout callout--insight">
      <div class="callout__label">💎 基本事实</div>
      <p><strong>绝大多数人际冲突的底层都是未被满足的需求。</strong></p>
    </div>

    <table>
      <thead>
        <tr><th>表面话语</th><th>底层需求</th></tr>
      </thead>
      <tbody>
        <tr><td>"你从来不听我说话"</td><td>我需要被重视和理解</td></tr>
        <tr><td>"你怎么又迟到了"</td><td>我需要被尊重，我的时间很重要</td></tr>
      </tbody>
    </table>

    <p>一旦你学会看穿事件层面，直接回应底层需求，大部分冲突就能迎刃而解。这不是什么沟通技巧，这是从人类心理的基本事实出发的必然策略。</p>

    <h3>5. 教育与育儿：孩子真正需要什么？</h3>

    <p>"不能输在起跑线上"——当代中国家长最大的隐藏假设。</p>

    <p>发展心理学数十年的研究指向几个关键要素：</p>
    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">❤️</div>
        <div class="insight-card__title">安全的依恋</div>
        <div class="insight-card__desc">让孩子知道"无论如何有人爱我"</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🔍</div>
        <div class="insight-card__title">自主探索空间</div>
        <div class="insight-card__desc">让好奇心有机会生长</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">💪</div>
        <div class="insight-card__title">挫折恢复经验</div>
        <div class="insight-card__desc">建立心理韧性</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🤝</div>
        <div class="insight-card__title">社交合作能力</div>
        <div class="insight-card__desc">与他人协作的能力</div>
      </div>
    </div>

    <div class="callout callout--warn">
      <div class="callout__label">⚠️ 注意</div>
      <p>这个清单里没有"三岁认识一千个汉字"，也没有"钢琴考到十级"。那些都是<strong>手段</strong>，不是<strong>目的</strong>。</p>
      <p style="margin-top:8px;">你为孩子做的每一件事，到底是在满足孩子的成长需求，还是在缓解自己的焦虑？</p>
    </div>

    <h3>6. 消费决策：你买的是什么？</h3>

    <p>消费的基本事实是：你用金钱交换某种价值。</p>

    <table>
      <thead>
        <tr><th>价值类型</th><th>例子</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>功能性价值</strong></td><td>一件外套让你保暖</td></tr>
        <tr><td><strong>情感性价值</strong></td><td>一束花让你开心</td></tr>
        <tr><td><strong>社交性价值</strong></td><td>一个名牌包让你在某个圈子里获得认同</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout__label">💡 消费决策框架</div>
      <p>打五折的裙子，如果你本来不需要它 → 打一折也是浪费</p>
      <p>三十块的咖啡，如果它给你带来的愉悦值三十块 → 就不贵</p>
      <p style="margin-top:6px;"><strong>贵不贵从来不是绝对的，而是相对于你获得的价值而言的。</strong></p>
    </div>
  </section>

  <!-- Section 5 -->
  <section id="sec5">
    <h2><span class="emoji">🤖</span>五、第一性原理与AI时代</h2>

    <h3>为什么AI让第一性原理更重要了？</h3>

    <p>2025年，AI已经能写文章、写代码、做设计、做研究。很多人开始焦虑：AI会不会取代我？</p>

    <div class="callout callout--insight">
      <div class="callout__label">🧠 用第一性原理想这个问题</div>
      <p><strong>AI擅长什么？</strong>模式匹配和类比推理。给它海量数据，它能找到规律，复制模式。</p>
      <p style="margin-top:8px;"><strong>AI最不擅长什么？</strong>从零出发的原创性推理。</p>
      <p style="margin-top:8px;">→ <strong>AI是类比思维的终极形态，第一性原理思维是AI最难替代的人类能力。</strong></p>
    </div>

    <p>当AI可以在几秒内给你10种方案时，真正有价值的能力变成了：</p>
    <ol>
      <li>判断哪种方案是对的</li>
      <li>提出第11种完全不同的方案</li>
    </ol>
    <p>这两件事都需要你理解底层原理，而不仅仅是比较表面上的相似性。</p>

    <h3>用第一性原理来使用AI</h3>

    <table>
      <caption>两种AI使用方式</caption>
      <thead>
        <tr><th></th><th>类比思维用法</th><th>第一性原理用法</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>做法</strong></td><td>把问题直接扔给AI，拿答案就用</td><td>先想清楚基本事实，再让AI在框架内执行</td></tr>
        <tr><td><strong>例子</strong></td><td>"帮我写一份商业计划"</td><td>"我的产品解决的基本需求是X，成本结构的底层约束是Y，帮我分析三种商业模式"</td></tr>
        <tr><td><strong>比喻</strong></td><td>把AI当搜索引擎</td><td>人类做方向盘，AI做发动机</td></tr>
      </tbody>
    </table>

    <div class="callout callout--success">
      <div class="callout__label">🌟 AI时代的核心竞争力</div>
      <p><strong>你负责定义问题的边界和底层逻辑，AI负责在这个空间里穷尽可能性。</strong></p>
    </div>

    <h3>2025~2026 的深层问题</h3>

    <ul>
      <li>2025年是AI从工具走向<strong>智能体</strong>的关键一年</li>
      <li>2026年，更多AI训练数据来自<strong>合成数据</strong>（AI生成的数据来训练AI）</li>
    </ul>

    <div class="callout callout--warn">
      <div class="callout__label">❓ 一个深刻的第一性原理问题</div>
      <p>当AI越来越多地从自身的输出中学习，它是在接近真理，还是在放大偏见？</p>
      <p style="margin-top:8px;">这个问题没有简单答案，但它完美展示了为什么我们比以往任何时候都更需要第一性原理思维。</p>
    </div>

    <p>在信息被AI大规模生成和传播的时代，能够回到基本事实、独立判断信息质量的能力，将成为最稀缺也最有价值的人类能力。</p>
  </section>

  <!-- Section 6 -->
  <section id="sec6">
    <h2><span class="emoji">💼</span>六、工作中的实战指南</h2>

    <h3>1. 职业选择：你在卖什么？</h3>

    <p><strong>工作的本质是什么？</strong></p>

    <div class="callout callout--insight">
      <div class="callout__label">💎 基本事实</div>
      <p>工作就是用你的能力为他人创造价值，然后获得回报。</p>
    </div>

    <p>职业选择的问题变成了三个子问题：</p>

    <table>
      <thead>
        <tr><th>问题</th><th>应该关注什么</th><th>不要关注什么</th></tr>
      </thead>
      <tbody>
        <tr><td>我能创造什么价值？</td><td>我能解决什么问题</td><td>我有什么学历</td></tr>
        <tr><td>谁需要这个价值？</td><td>什么需求真实存在且未被很好满足</td><td>什么行业热门</td></tr>
        <tr><td>我能持续创造吗？</td><td>五年后这个能力还稀缺吗</td><td>现在能赚多少</td></tr>
      </tbody>
    </table>

    <h3>2. 创业创新：找到不变的东西</h3>

    <blockquote>
      "我经常被问到'未来十年会有什么变化'，但很少有人问我'未来十年什么不会变'。第二个问题其实更重要，因为你可以围绕不变的东西建立商业战略。"<br><br>
      —— 杰夫·贝索斯
    </blockquote>

    <p>这就是第一性原理在商业中的精髓：<strong>找到不变的基本事实，围绕它构建一切。</strong></p>

    <p><strong>对亚马逊来说，不变的是什么？</strong></p>
    <ul>
      <li>人们永远想要更低的价格</li>
      <li>人们永远想要更多的选择</li>
      <li>人们永远想要更快的配送</li>
    </ul>

    <p>这三个基本需求不会因为技术变化而消失。所以贝索斯把所有资源都投入到降低成本、扩大品类、提升物流效率上，而不是追逐每一个时髦的风口。</p>

    <h3>3. 解决复杂问题：层层剥洋葱</h3>

    <p><strong>传统做法：</strong>看竞品在做什么，然后模仿。</p>
    <p><strong>第一性原理做法：</strong>把大问题分解成小问题，把小问题分解成基本事实。</p>

    <p><strong>例子：用户留存率一直在下降</strong></p>

    <div class="hierarchy">
留存率 = 有多少人在一段时间后还在用你的产品

一个用户留下来的基本条件：
  ① <span class="hl">价值</span> — 产品确实解决了他的某个问题
  ② <span class="hl">体验</span> — 他知道怎么用这个产品来解决问题
  ③ <span class="hl">竞争</span> — 没有更好的替代品让他离开
  ④ <span class="hl">惯性</span> — 使用的习惯已经形成
    </div>

    <p>现在你不再面对"留存率下降"这个模糊的大问题，而是面对<strong>四个具体的小问题</strong>，每个都可以进一步拆解、分析和解决。</p>
  </section>

  <!-- Section 7 -->
  <section id="sec7">
    <h2><span class="emoji">🎯</span>七、练习第一性原理的五个习惯</h2>

    <p>理论说的再多，不练就是空谈。</p>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">1️⃣</div>
        <div class="insight-card__title">每天问一个"为什么"</div>
        <div class="insight-card__desc">选一件习以为常的事，追问底层原因。不需要颠覆性答案，养成追问习惯本身就是锻炼。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">2️⃣</div>
        <div class="insight-card__title">假设日记</div>
        <div class="insight-card__desc">做决定时写下理由，区分哪些是事实、哪些是假设、哪些是情绪判断。一个月后回顾，会很惊讶。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">3️⃣</div>
        <div class="insight-card__title">好问题收集者</div>
        <div class="insight-card__desc">好的第一性原理思考始于好的问题。收集好问题，面对重要决策时拿出来过一遍。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">4️⃣</div>
        <div class="insight-card__title">跨领域阅读</div>
        <div class="insight-card__desc">每个月至少读一本专业外的书。多元思维模型——不同学科的底层逻辑往往是相通的。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">5️⃣</div>
        <div class="insight-card__title">定期清零</div>
        <div class="insight-card__desc">每季度对最重要的事做一次清零思考。Day 1 心态——永远像第一天一样思考，避免僵化。</div>
      </div>
    </div>

    <div class="callout">
      <div class="callout__label">📋 好问题清单（收藏起来）</div>
      <p>• 这件事的根本目的是什么？</p>
      <p>• 如果从零开始，我会怎么做？</p>
      <p>• 哪些是物理限制？哪些是人为限制？</p>
      <p>• 如果这个行业不存在，人们的需求会通过什么方式满足？</p>
      <p>• 五年后回头看，今天的哪些常识会被证明是错的？</p>
    </div>
  </section>

  <!-- Section 8 -->
  <section id="sec8">
    <h2><span class="emoji">⚖️</span>八、边界与谦逊</h2>

    <h3>它不是万能钥匙</h3>

    <p>第一性原理是一个强大的思维工具，但它有明确的适用边界。</p>

    <table>
      <caption>第一性原理的四个局限</caption>
      <thead>
        <tr><th>局限</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>时间成本</strong></td><td>每件事都从零开始想，你什么也做不完。留给真正重要的决策。</td></tr>
        <tr><td><strong>知识基础</strong></td><td>对一个领域完全不了解，很难区分假设和事实。前提是持续学习和积累。</td></tr>
        <tr><td><strong>不能替代实验</strong></td><td>从基本事实出发构建的方案只是假说，需要在现实中验证。SpaceX前三次发射全部失败。</td></tr>
        <tr><td><strong>容易让人傲慢</strong></td><td>"我从第一性原理出发的，所以我一定对"——你以为的基本事实，可能只是你认知范围内的。</td></tr>
      </tbody>
    </table>

    <h3>与其他思维方式互补</h3>

    <p>真正成熟的思考者不会只用一种思维工具。</p>

    <table>
      <thead>
        <tr><th>思维方式</th><th>作用</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>系统思维</strong></td><td>帮你看到事物之间的连接和反馈循环。避免在一个地方解决问题，却在另一个地方制造新问题。</td></tr>
        <tr><td><strong>概率思维</strong></td><td>帮你处理不确定性。基本事实告诉你什么是可能的，概率思维帮你判断可能性有多大。</td></tr>
        <tr><td><strong>逆向思维</strong></td><td>帮你避免灾难。查理·芒格："告诉我我会死在哪里，我就永远不去那里。"</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout__label">🧰 工具箱思维</div>
      <p>最好的思维状态不是"我只用第一性原理"，而是工具箱里有很多工具，根据情况灵活选用。</p>
    </div>

    <h3>四个常见误区</h3>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">❌</div>
        <div class="insight-card__title">把"我不同意"当第一性原理</div>
        <div class="insight-card__desc">仅仅反对主流观点不等于底层思考。需要拿出基本事实支撑，而不是仅凭叛逆心理。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">❌</div>
        <div class="insight-card__title">忽视隐性知识的价值</div>
        <div class="insight-card__desc">很多行业惯例蕴含着几十年试错的智慧。推翻它之前，先理解它存在的历史原因。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">❌</div>
        <div class="insight-card__title">过度分析导致行动瘫痪</div>
        <div class="insight-card__desc">完美的分析不存在。信息不完整时做出足够好的决策并快速行动，往往比等到完全想清楚更有价值。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">❌</div>
        <div class="insight-card__title">独自闭门思考</div>
        <div class="insight-card__desc">和不同背景的人交流、听取专业意见、在实践中验证——这些也是第一性原理的重要组成部分。</div>
      </div>
    </div>

    <h3>关于正确的谦逊</h3>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 最深刻的教导</div>
      <p>第一性原理最深刻的教导，恰恰是<strong>谦逊</strong>。</p>
      <p style="margin-top:8px;">为什么？因为当你真正去追问一件事的底层时，你会发现你以为的"基本事实"可能在未来被推翻。</p>
      <ul style="margin-top:10px;">
        <li>牛顿力学曾经是物理学的第一性原理 → 被相对论修正了</li>
        <li>经典物理又被量子力学补充了</li>
      </ul>
      <p style="margin-top:8px;">科学的历史就是一部基本事实不断被更新的历史。</p>
    </div>

    <div class="callout callout--success">
      <div class="callout__label">💎 正确的态度</div>
      <p>不是"我找到了绝对真理"，而是：</p>
      <p style="margin-top:6px;"><strong>"基于我目前的认知，这是最接近真实的理解。但我随时准备被更好的事实说服。"</strong></p>
      <p style="margin-top:10px;">这种<strong>"强观点，弱持有"（Strong opinions, weakly held）</strong>的态度，可能是第一性原理思维教给我们的最重要的一课。</p>
    </div>
  </section>

  <!-- Section 9 -->
  <section id="sec9">
    <h2><span class="emoji">❓</span>九、复习自测</h2>

    <p>点每道题展开答案，先自己想再看。</p>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">1. 什么是第一性原理？亚里士多德是怎么定义的？</div>
      <div class="test-item__a">
        第一性原理是一个最基本的命题或假设，不能被省略、不能被违反、也不能被推翻。任何复杂事物的背后都有一些不可再分解的基本事实，找到它们就找到了理解整件事的钥匙。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">2. 第一性原理思维和类比思维有什么根本区别？</div>
      <div class="test-item__a">
        <p>• 类比思维：别人怎么做我就怎么做，效率高但只能产生渐进式改进</p>
        <p>• 第一性原理思维：回到本质从零构建，费脑子但能产生颠覆式突破</p>
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">3. 马斯克的火箭案例中，他发现了什么基本事实？</div>
      <div class="test-item__a">
        火箭的原材料成本只占售价的2%。剩下98%来自中间环节、制造工艺、供应链、行业惯例和一次性使用。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">4. 第一性原理的三步法是什么？</div>
      <div class="test-item__a">
        <p>① 识别隐藏假设（倒掉鱼缸里的水）</p>
        <p>② 追问基本事实（挖到基岩，可用5个为什么）</p>
        <p>③ 重新构建（从地基开始盖楼）</p>
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">5. "五个为什么"是什么？举一个例子说明。</div>
      <div class="test-item__a">
        丰田生产方式创始人大野耐一发明的方法，通过连续追问5次"为什么"找到问题的根本原因。
        <p style="margin-top:8px;">例子：项目延期 → BUG多 → 赶工 → 需求变更频繁 → 启动时调研不足（根因）</p>
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">6. 用第一性原理分析：人一定要买房吗？</div>
      <div class="test-item__a">
        <p>买房的三个基本需求：</p>
        <p>① 稳定居住空间 → 长期租房也可以实现</p>
        <p>② 资产保值 → 房价不总是涨的，房产不是无风险资产</p>
        <p>③ 社会认同感 → 是文化假设，不是物理定律</p>
        <p style="margin-top:8px;">结论：不是必须买，应该根据个人实际情况理性决策，而不是被惯性推着走。</p>
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">7. 为什么学了就忘？第一性原理给出的解决方案是什么？</div>
      <div class="test-item__a">
        <p>基本事实：人脑不擅长存储孤立信息，擅长建立连接。</p>
        <p>解决方案：不要追求"记住"，要追求"连接"。学新概念时问自己：它和我已知的什么有关？它能解释什么现象？我能用它解决什么问题？（费曼技巧）</p>
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">8. 为什么AI时代第一性原理更重要了？</div>
      <div class="test-item__a">
        <p>AI擅长模式匹配和类比推理，是类比思维的终极形态。但AI不擅长从零出发的原创性推理。第一性原理思维是AI最难替代的人类能力。</p>
        <p style="margin-top:8px;">正确用法：人负责定义问题的边界和底层逻辑（方向盘），AI负责在框架内穷尽可能性（发动机）。</p>
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">9. 第一性原理有哪些局限？</div>
      <div class="test-item__a">
        <p>① 时间成本高，不能每件事都用</p>
        <p>② 需要足够的知识基础</p>
        <p>③ 不能替代实验验证</p>
        <p>④ 容易让人产生傲慢</p>
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">10. 四个常见误区是什么？</div>
      <div class="test-item__a">
        <p>① 把"我不同意"当做第一性原理（反对≠底层思考）</p>
        <p>② 忽视隐性知识的价值（行业惯例可能有其存在的理由）</p>
        <p>③ 过度分析导致行动瘫痪（完美分析不存在，快速行动往往更重要）</p>
        <p>④ 独自闭门思考（交流和实践也是第一性原理的一部分）</p>
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">11. "强观点，弱持有"是什么意思？</div>
      <div class="test-item__a">
        基于目前的认知，坚定地持有最接近真实的理解；但随时准备被更好的事实说服，愿意修正自己的观点。这是第一性原理最深刻的教导——谦逊。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">12. 练习第一性原理的五个习惯是什么？</div>
      <div class="test-item__a">
        <p>① 每天问一个"为什么"</p>
        <p>② 假设日记（记录决策背后的假设）</p>
        <p>③ 好问题收集者</p>
        <p>④ 跨领域阅读（多元思维模型）</p>
        <p>⑤ 定期清零（Day 1 心态）</p>
      </div>
    </div>
  </section>

</main>

<footer>
  🧠 第一性原理 · 交互式学习笔记
</footer>

<script>
// ==================== TOC smooth scroll ====================
document.querySelectorAll('.toc a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ==================== Onion peeling demo ====================
let onionLevel = 0;
function peelOnion() {
  if (onionLevel < 4) {
    const layer = document.getElementById('ol' + (onionLevel + 1));
    layer.classList.add('peeled');
    onionLevel++;
  }
}
function resetOnion() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById('ol' + i).classList.remove('peeled');
  }
  onionLevel = 0;
}

// ==================== Assumption vs Fact quiz ====================
const assumptionQuiz = [
  {
    q: '"35岁以后就不好找工作了"',
    answer: 'assumption',
    explain: '这是特定时期、特定行业形成的偏见，不是基本事实。在很多行业和地区，35岁以上的资深人士反而更有价值。'
  },
  {
    q: '"水在标准大气压下100°C沸腾"',
    answer: 'fact',
    explain: '这是经过反复验证的物理事实，可以作为第一性原理来使用。'
  },
  {
    q: '"好大学等于好工作等于好人生"',
    answer: 'assumption',
    explain: '这是一个粗略的相关性，不是物理定律。有很多反例，而且"好人生"的定义因人而异。'
  },
  {
    q: '"人体需要规律的身体活动来保持健康"',
    answer: 'fact',
    explain: '这是运动科学反复验证的基本事实。人体是一个反脆弱系统，需要压力刺激来维持和增强功能。'
  },
  {
    q: '"每天一定要喝八杯水"',
    answer: 'assumption',
    explain: '这个数字来自一个被广泛误读的1945年研究报告。每个人的需水量因体重、活动量、气候而异，没有统一的"八杯"标准。'
  }
];

let quizScore = 0;
let quizAnswered = 0;

function renderQuiz() {
  const container = document.getElementById('quizCards');
  container.innerHTML = '';
  assumptionQuiz.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.id = 'qcard' + idx;
    card.innerHTML = \`
      <div class="quiz-card__q">\${idx + 1}. \${item.q}</div>
      <div class="quiz-card__opts">
        <div class="quiz-opt" onclick="answerQuiz(\${idx}, 'fact')">✅ 基本事实</div>
        <div class="quiz-opt" onclick="answerQuiz(\${idx}, 'assumption')">🤔 隐藏假设</div>
      </div>
      <div class="quiz-card__explain" id="qexp\${idx}"></div>
    \`;
    container.appendChild(card);
  });
}

function answerQuiz(idx, choice) {
  const card = document.getElementById('qcard' + idx);
  if (card.classList.contains('correct') || card.classList.contains('wrong')) return;

  const item = assumptionQuiz[idx];
  const opts = card.querySelectorAll('.quiz-opt');
  const explain = document.getElementById('qexp' + idx);

  const isCorrect = choice === item.answer;

  if (isCorrect) {
    card.classList.add('correct');
    quizScore++;
    opts.forEach((opt, i) => {
      if ((choice === 'fact' && i === 0) || (choice === 'assumption' && i === 1)) {
        opt.classList.add('selected-correct');
      }
      opt.classList.add('disabled');
    });
  } else {
    card.classList.add('wrong');
    opts.forEach((opt, i) => {
      if ((choice === 'fact' && i === 0) || (choice === 'assumption' && i === 1)) {
        opt.classList.add('selected-wrong');
      } else {
        opt.classList.add('selected-correct');
      }
      opt.classList.add('disabled');
    });
  }

  explain.textContent = (isCorrect ? '✅ 答对了！' : '❌ 答错了。') + ' ' + item.explain;
  explain.classList.add('show');

  quizAnswered++;
  document.getElementById('quizScore').textContent = \`得分：\${quizScore} / \${assumptionQuiz.length}\`;

  if (quizAnswered === assumptionQuiz.length) {
    const pct = Math.round(quizScore / assumptionQuiz.length * 100);
    let msg = '';
    if (pct === 100) msg = '🎉 满分！你已经很擅长区分事实和假设了。';
    else if (pct >= 60) msg = '👍 不错！继续练习，你对假设的敏感度会越来越高。';
    else msg = '💪 再接再厉！识别隐藏假设是第一性原理的第一步，多练就会越来越好。';
    document.getElementById('quizScore').innerHTML = \`最终得分：\${quizScore} / \${assumptionQuiz.length}<br><span style="font-weight:400;font-size:12px;margin-top:4px;display:block;">\${msg}</span>\`;
  }
}

renderQuiz();

// ==================== 5 Whys demo ====================
let whyLevel = 0;
const maxWhy = 5;

function nextWhy() {
  if (whyLevel < maxWhy) {
    whyLevel++;
    document.getElementById('why' + whyLevel).classList.add('active');
    document.getElementById('arrow' + whyLevel).classList.add('show');

    const btn = document.getElementById('whyNextBtn');
    if (whyLevel === maxWhy) {
      btn.textContent = '挖到基岩了！💎';
      btn.disabled = true;
      document.getElementById('whyResult').innerHTML =
        '💎 <strong>根因找到了！</strong>表面问题是"项目延期"，但真正的基本事实是"启动阶段调研不足"。<br>' +
        '如果你只在 bug 层面修补，问题永远不会真正解决。<br>' +
        '从根因出发重新构建方案，才是第一性原理的做法。';
    }
  }
}

function resetWhys() {
  whyLevel = 0;
  for (let i = 1; i <= maxWhy; i++) {
    document.getElementById('why' + i).classList.remove('active');
    document.getElementById('arrow' + i).classList.remove('show');
  }
  const btn = document.getElementById('whyNextBtn');
  btn.textContent = '追问下一层 ⬇';
  btn.disabled = false;
  document.getElementById('whyResult').innerHTML =
    '💡 提示：表面上的问题是"bug太多"，但真正的根因藏在更深的地方。';
}

// ==================== Self test expand ====================
// handled by CSS toggle
<\/script>

</body>
</html>
`,J5=`---
{"no":"第一章","title":"生物学原理与动物学","order":1}
---
<!-- Generated by Trae Work -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>动物学第一章 · 生命是什么 | 交互式笔记</title>
<style>
:root {
  --bg: #0A1628;
  --bg2: #0F1E35;
  --surface: #1A2D4A;
  --border: #2A4470;
  --text: #E8F4F8;
  --text-secondary: #B8D4E3;
  --muted: #7A9BB8;
  --accent: #2DD4BF;
  --accent-hover: #14B8A6;
  --accent-soft: rgba(45, 212, 191, 0.12);
  --accent-soft-strong: rgba(45, 212, 191, 0.35);
  --accent2: #34D399;
  --accent3: #60A5FA;
  --success: #10B981;
  --danger: #EF4444;
  --warning: #FBBF24;
  --purple: #A78BFA;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

.report-intro {
  background: linear-gradient(135deg, #0a1628 0%, #0c4a6e 40%, #0f766e 75%, #2dd4bf 100%);
  color: white;
  padding: 60px 24px 48px;
  position: relative;
  overflow: hidden;
}
.report-intro::before {
  content: '';
  position: absolute;
  top: -120px; right: -60px;
  width: 340px; height: 340px;
  background: radial-gradient(circle, rgba(52,211,153,0.2) 0%, transparent 70%);
  border-radius: 50%;
}
.report-intro::after {
  content: '';
  position: absolute;
  bottom: -100px; left: 5%;
  width: 280px; height: 280px;
  background: radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%);
  border-radius: 50%;
}
.report-intro__content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.report-intro__eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #99F6E4;
  background: rgba(45,212,191,0.2);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}
.report-intro h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 14px;
  background: linear-gradient(135deg, #fff 0%, #A7F3D0 50%, #67E8F9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.report-intro__summary {
  font-size: 16px;
  line-height: 1.7;
  max-width: 640px;
  color: #E0F2FE;
}
.report-intro__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.12);
  font-size: 13px;
  color: #BAE6FD;
}
.report-intro__meta span strong {
  font-weight: 600;
  margin-left: 4px;
  color: #A7F3D0;
}

main {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

section { margin-bottom: 52px; scroll-margin-top: 24px; }

h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--accent);
  display: flex; align-items: center; gap: 10px;
}
h2 .emoji { font-size: 24px; }

h3 {
  font-size: 17px; font-weight: 600; color: var(--text);
  margin-top: 28px; margin-bottom: 12px;
}
h4 {
  font-size: 15px; font-weight: 600; color: var(--text-secondary);
  margin-top: 20px; margin-bottom: 8px;
}

p { margin-bottom: 14px; color: var(--text-secondary); }
strong { color: var(--text); font-weight: 600; }

blockquote {
  border-left: 4px solid var(--accent);
  padding-left: 16px; margin: 16px 0;
  color: var(--text-secondary);
}

ul, ol {
  margin-bottom: 14px; padding-left: 24px; color: var(--text-secondary);
}
li { margin-bottom: 6px; }
li::marker { color: var(--accent); }

table {
  width: 100%; border-collapse: collapse; margin: 16px 0 20px;
  font-size: 14px; background: var(--bg2);
  border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
}
caption {
  text-align: left; font-weight: 600; font-size: 14px;
  color: var(--text); margin-bottom: 8px; padding: 0 2px;
}
thead { background: var(--surface); }
th {
  text-align: left; padding: 10px 14px; font-weight: 600;
  color: var(--text); border-bottom: 1px solid var(--border); font-size: 13px;
}
td {
  padding: 10px 14px; border-bottom: 1px solid var(--border);
  color: var(--text-secondary); vertical-align: top;
}
tr:last-child td { border-bottom: none; }
tr:hover td { background: rgba(45,212,191,0.06); }

.toc {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 12px; padding: 20px 24px; margin-bottom: 40px;
}
.toc__title {
  font-weight: 600; font-size: 14px; color: var(--text);
  margin-bottom: 12px; display: flex; align-items: center; gap: 8px;
}
.toc ul { list-style: none; padding: 0; margin: 0; columns: 2; column-gap: 24px; }
.toc li { margin-bottom: 6px; break-inside: avoid; }
.toc a {
  color: var(--text-secondary); text-decoration: none; font-size: 13px;
  transition: color 0.2s;
}
.toc a:hover { color: var(--accent); }

.callout {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 10px; padding: 16px 18px; margin: 18px 0;
}
.callout__label {
  display: flex; align-items: center; gap: 8px;
  font-weight: 600; font-size: 14px; color: var(--text); margin-bottom: 8px;
}
.callout p { margin-bottom: 0; font-size: 14px; }
.callout p + p { margin-top: 8px; }

.callout--insight {
  background: rgba(45,212,191,0.12); border-color: rgba(45,212,191,0.4);
}
.callout--insight .callout__label { color: #5EEAD4; }

.callout--warn {
  background: rgba(251,191,36,0.1); border-color: rgba(251,191,36,0.4);
}
.callout--warn .callout__label { color: #FCD34D; }

.callout--success {
  background: rgba(52,211,153,0.1); border-color: rgba(52,211,153,0.4);
}
.callout--success .callout__label { color: #6EE7B7; }

/* Property cards - visible, no flipping needed */
.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  margin: 20px 0;
}
.property-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px 18px;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}
.property-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(45,212,191,0.15);
}
.property-card__num {
  position: absolute;
  top: -8px; right: 10px;
  font-size: 48px;
  font-weight: 800;
  color: rgba(45,212,191,0.1);
  font-family: monospace;
}
.property-card__title {
  font-weight: 700;
  font-size: 15px;
  color: var(--accent2);
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}
.property-card__desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
  position: relative;
  z-index: 1;
}
.property-card__keyword {
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px dashed var(--border);
  font-size: 12px;
  color: var(--muted);
  position: relative;
  z-index: 1;
}
.property-card__keyword strong {
  color: var(--accent);
  font-weight: 600;
}

/* Emergence ladder - visible */
.ladder {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 24px 0;
  position: relative;
}
.ladder-rung {
  display: flex;
  align-items: stretch;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}
.ladder-rung__level {
  width: 60px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  flex-shrink: 0;
}
.ladder-rung__content {
  flex: 1;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.ladder-rung__main {
  flex: 1;
}
.ladder-rung__title {
  font-weight: 600;
  color: var(--text);
  font-size: 14px;
}
.ladder-rung__desc {
  font-size: 12px;
  color: var(--muted);
  margin-top: 2px;
}
.ladder-rung__emergent {
  font-size: 12px;
  color: var(--accent2);
  background: rgba(45,212,191,0.1);
  padding: 6px 12px;
  border-radius: 6px;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Demo section */
.demo {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
  margin: 20px 0;
}
.demo__title {
  font-weight: 600;
  font-size: 15px;
  color: var(--text);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.demo__desc {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 16px;
}
.demo__canvas-wrap {
  background: var(--bg);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
}

/* Entropy visual */
.entropy-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 16px 0;
}
.entropy-side {
  background: var(--bg);
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  border: 1px solid var(--border);
}
.entropy-side__label {
  font-weight: 600;
  font-size: 13px;
  color: var(--text);
  margin-bottom: 10px;
}
.entropy-side canvas {
  width: 100%;
  max-width: 200px;
  height: 120px;
  border-radius: 6px;
}
.entropy-side__note {
  font-size: 11px;
  color: var(--muted);
  margin-top: 8px;
}

/* Scientific method steps - visible */
.sci-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  margin: 20px 0;
}
.sci-step {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px;
  text-align: center;
  position: relative;
  transition: all 0.2s;
}
.sci-step:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}
.sci-step__num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
}
.sci-step__title {
  font-weight: 600;
  color: var(--text);
  font-size: 13px;
  margin-bottom: 4px;
}
.sci-step__detail {
  font-size: 11px;
  color: var(--muted);
  line-height: 1.5;
}

/* Darwin theories - visible cards */
.theory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  margin: 20px 0;
}
.theory-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  transition: all 0.2s;
}
.theory-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}
.theory-card__head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}
.theory-card__num {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
}
.theory-card__title {
  font-weight: 600;
  color: var(--text);
  font-size: 14px;
}
.theory-card__en {
  font-size: 11px;
  color: var(--muted);
  font-style: italic;
}
.theory-card__body {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 3R cards */
.r-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 20px 0;
}
.r-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  transition: all 0.2s;
}
.r-card:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}
.r-card__letter {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 6px;
}
.r-card__title {
  font-weight: 600;
  color: var(--text);
  font-size: 14px;
  margin-bottom: 4px;
}
.r-card__en {
  font-size: 11px;
  color: var(--muted);
  margin-bottom: 8px;
}
.r-card__desc {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Think box */
.think-box {
  background: rgba(167, 139, 250, 0.1);
  border-left: 4px solid var(--purple);
  padding: 14px 18px;
  border-radius: 0 10px 10px 0;
  margin: 18px 0;
  font-size: 14px;
}
.think-box__label {
  font-weight: 700;
  color: var(--purple);
  margin-bottom: 6px;
  font-size: 13px;
}
.think-box p { color: #C4B5FD; margin-bottom: 0; }

/* Quiz */
.quiz-item {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 18px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s;
}
.quiz-item:hover { border-color: var(--accent); }
.quiz-item__q {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.quiz-item__q::after {
  content: '▾ 答案';
  font-size: 11px;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 3px 10px;
  border-radius: 10px;
  font-weight: 500;
}
.quiz-item.open .quiz-item__q::after {
  content: '▴ 收起';
}
.quiz-item__a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
  font-size: 13px;
  color: var(--text-secondary);
}
.quiz-item.open .quiz-item__a {
  max-height: 400px;
  padding-top: 12px;
  margin-top: 8px;
  border-top: 1px dashed var(--border);
}

footer {
  border-top: 1px solid var(--border);
  padding: 24px;
  text-align: center;
  font-size: 12px;
  color: var(--muted);
}

@media (max-width: 640px) {
  .report-intro { padding: 40px 20px 36px; }
  .report-intro h1 { font-size: 24px; }
  main { padding: 28px 16px 60px; }
  h2 { font-size: 18px; }
  .toc ul { columns: 1; }
  .property-grid { grid-template-columns: 1fr; }
  .r-grid { grid-template-columns: 1fr; }
  .entropy-compare { grid-template-columns: 1fr; }
  .ladder-rung__content { flex-direction: column; align-items: flex-start; }
  .ladder-rung__emergent { white-space: normal; }
}
</style>
</head>
<body>

<header class="report-intro">
  <div class="report-intro__content">
    <span class="report-intro__eyebrow">🐸 动物学 · 第一章</span>
    <h1>生命：生物学原理与动物学<br>从非生命到生命的奇妙旅程</h1>
    <p class="report-intro__summary">
      生命有哪些独特属性？涌现性是什么？科学方法如何运作？
      达尔文的5大进化论和孟德尔遗传学共同构成了生物学的两大支柱。
    </p>
    <div class="report-intro__meta">
      <span>📚 <strong>7大主题</strong></span>
      <span>🧬 <strong>核心</strong>：进化论 / 遗传学 / 生命属性</span>
      <span>📊 <strong>可视化</strong>：涌现性层级 / 熵增对比</span>
    </div>
  </div>
</header>

<main>

  <nav class="toc">
    <div class="toc__title">📑 本章目录</div>
    <ul>
      <li><a href="#sec1">一、生命的7个基本属性</a></li>
      <li><a href="#sec2">二、涌现性</a></li>
      <li><a href="#sec3">三、生命遵守物理定律</a></li>
      <li><a href="#sec4">四、科学方法</a></li>
      <li><a href="#sec5">五、达尔文的5大进化论</a></li>
      <li><a href="#sec6">六、孟德尔与遗传学</a></li>
      <li><a href="#sec7">七、动物权利与3R原则</a></li>
      <li><a href="#sec8">八、复习自测</a></li>
    </ul>
  </nav>

  <!-- Section 1 -->
  <section id="sec1">
    <h2><span class="emoji">✨</span>一、生命的7个基本属性</h2>

    <p>生命到底是什么？以下7个属性，是生命区别于非生命的独特特征。</p>

    <div class="property-grid">
      <div class="property-card">
        <div class="property-card__num">1</div>
        <div class="property-card__title">化学独特性</div>
        <div class="property-card__desc">生命的分子（核酸、蛋白质、糖类、脂类）比非生命的复杂得多，是高度有序的有机大分子。</div>
        <div class="property-card__keyword">关键词：<strong>四大生物大分子</strong></div>
      </div>

      <div class="property-card">
        <div class="property-card__num">2</div>
        <div class="property-card__title">复杂性与层级组织</div>
        <div class="property-card__desc">从分子→细胞→组织→器官→个体→种群→物种，一层一层叠上来，每一层都有新特性。</div>
        <div class="property-card__keyword">关键词：<strong>涌现性</strong></div>
      </div>

      <div class="property-card">
        <div class="property-card__num">3</div>
        <div class="property-card__title">繁殖</div>
        <div class="property-card__desc">生命只能来自生命，每一层都能复制自己。遗传和变异是一对矛盾，共同推动进化。</div>
        <div class="property-card__keyword">关键词：<strong>遗传 + 变异</strong></div>
      </div>

      <div class="property-card">
        <div class="property-card__num">4</div>
        <div class="property-card__title">遗传程序</div>
        <div class="property-card__desc">DNA里存着建造生命的"蓝图"。几乎所有生物的遗传密码都一样——这是共同祖先的证据。</div>
        <div class="property-card__keyword">关键词：<strong>DNA / 遗传密码</strong></div>
      </div>

      <div class="property-card">
        <div class="property-card__num">5</div>
        <div class="property-card__title">新陈代谢</div>
        <div class="property-card__desc">吃东西、获得能量、维持自身。包括合成（anabolic）和分解（catabolic）两个方向。</div>
        <div class="property-card__keyword">关键词：<strong>能量获取与利用</strong></div>
      </div>

      <div class="property-card">
        <div class="property-card__num">6</div>
        <div class="property-card__title">发育</div>
        <div class="property-card__desc">从受精卵到成体，每个生命都有独特的生命周期。比如毛毛虫变蝴蝶就叫"变态"。</div>
        <div class="property-card__keyword">关键词：<strong>生命周期 / 变态</strong></div>
      </div>

      <div class="property-card">
        <div class="property-card__num">7</div>
        <div class="property-card__title">环境互动</div>
        <div class="property-card__desc">跟外界交换物质和能量，对外界刺激有反应。生态学就是研究生物与环境的关系。</div>
        <div class="property-card__keyword">关键词：<strong>生态学 / 应激性</strong></div>
      </div>
    </div>

    <div class="think-box">
      <div class="think-box__label">💭 想一想</div>
      <p>如果只能选一个属性来定义"生命"，你选哪个？为什么？如果AI具备了其中几个属性，算生命吗？</p>
    </div>
  </section>

  <!-- Section 2: Emergence -->
  <section id="sec2">
    <h2><span class="emoji">🪜</span>二、涌现性：整体大于部分之和</h2>

    <blockquote>
      "整体大于部分之和。"
    </blockquote>

    <p>什么意思？你知道了每个细胞的特性，也没法预测一个人的血压。你知道了每只蜜蜂的习性，也没法推断出整个蜂群的社会结构。</p>

    <p><strong>每上一个层级，就会出现新的、底层没有的特性。</strong>这就叫<strong>涌现性（Emergence）</strong>。</p>

    <div class="ladder">
      <div class="ladder-rung">
        <div class="ladder-rung__level">1</div>
        <div class="ladder-rung__content">
          <div class="ladder-rung__main">
            <div class="ladder-rung__title">分子层级</div>
            <div class="ladder-rung__desc">原子→分子→大分子（蛋白质、核酸等）</div>
          </div>
          <div class="ladder-rung__emergent">✨ 复杂三维结构、催化能力</div>
        </div>
      </div>
      <div class="ladder-rung">
        <div class="ladder-rung__level">2</div>
        <div class="ladder-rung__content">
          <div class="ladder-rung__main">
            <div class="ladder-rung__title">细胞层级</div>
            <div class="ladder-rung__desc">细胞是生命的基本单位</div>
          </div>
          <div class="ladder-rung__emergent">✨ 生命、自我复制、新陈代谢</div>
        </div>
      </div>
      <div class="ladder-rung">
        <div class="ladder-rung__level">3</div>
        <div class="ladder-rung__content">
          <div class="ladder-rung__main">
            <div class="ladder-rung__title">组织 → 器官 → 个体</div>
            <div class="ladder-rung__desc">细胞组成组织，组织组成器官，器官组成个体</div>
          </div>
          <div class="ladder-rung__emergent">✨ 意识、思维、血压、免疫</div>
        </div>
      </div>
      <div class="ladder-rung">
        <div class="ladder-rung__level">4</div>
        <div class="ladder-rung__content">
          <div class="ladder-rung__main">
            <div class="ladder-rung__title">种群 → 群落</div>
            <div class="ladder-rung__desc">同一物种的个体组成种群，不同物种组成群落</div>
          </div>
          <div class="ladder-rung__emergent">✨ 社会结构、种群动态、种间关系</div>
        </div>
      </div>
      <div class="ladder-rung">
        <div class="ladder-rung__level">5</div>
        <div class="ladder-rung__content">
          <div class="ladder-rung__main">
            <div class="ladder-rung__title">生态系统 → 生物圈</div>
            <div class="ladder-rung__desc">生物+环境组成生态系统，整个地球的生命叫生物圈</div>
          </div>
          <div class="ladder-rung__emergent">✨ 物质循环、能量流动、全球气候调节</div>
        </div>
      </div>
    </div>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 理解</div>
      <p>分子层级没有"血压"这个概念，细胞层级没有"社会结构"这个概念，个体层级没有"物种形成"这个概念。</p>
      <p style="margin-top:6px;">每往上走一步，就会诞生一些全新的、下面层级不存在的性质。这就是涌现性最迷人的地方。</p>
    </div>

    <div class="think-box">
      <div class="think-box__label">💭 想一想</div>
      <p>生活中还有哪些"整体大于部分之和"的例子？比如学校、班级、家庭、一支球队、一个公司……</p>
    </div>
  </section>

  <!-- Section 3: Physics -->
  <section id="sec3">
    <h2><span class="emoji">⚡</span>三、生命也遵守物理定律</h2>

    <p>别觉得生命很神奇就不遵守物理定律了——照样遵守！</p>

    <h3>热力学第一定律：能量守恒</h3>
    <p>能量不能凭空创造也不能凭空消失。生命从食物里获取能量，转化成动能、热能、各种形式的化学能。</p>

    <h3>热力学第二定律：熵增定律</h3>
    <p>系统倾向于越来越混乱（熵增）。</p>

    <div class="entropy-compare">
      <div class="entropy-side">
        <div class="entropy-side__label">低熵（有序）</div>
        <canvas id="lowEntropyCanvas" width="200" height="120"></canvas>
        <div class="entropy-side__note">分子排列整齐，结构有序</div>
      </div>
      <div class="entropy-side">
        <div class="entropy-side__label">高熵（混乱）</div>
        <canvas id="highEntropyCanvas" width="200" height="120"></canvas>
        <div class="entropy-side__note">分子随机分布，混乱无序</div>
      </div>
    </div>

    <div class="callout callout--success">
      <div class="callout__label">🌟 关键理解</div>
      <p><strong>生命是"逆熵"的</strong>——通过不断吃能量，维持自身的有序。但整个系统（生命+环境）的总熵还是在增加的。</p>
      <p style="margin-top:8px;">所以生命本质上是一个<strong>耗散结构</strong>——必须不断耗散能量来维持自身的秩序。</p>
    </div>

    <p>这不是生命"违反"了热力学第二定律，而是生命是一个开放系统，不断和环境交换物质和能量，所以局部可以减熵，但总熵还是增加的。</p>
  </section>

  <!-- Section 4: Scientific method -->
  <section id="sec4">
    <h2><span class="emoji">🔬</span>四、科学方法到底是什么？</h2>

    <p>不是"科学家说的就是对的"，而是一套<strong>假设-验证</strong>的流程。</p>

    <div class="sci-steps">
      <div class="sci-step">
        <div class="sci-step__num">1</div>
        <div class="sci-step__title">观察</div>
        <div class="sci-step__detail">注意到一个有趣的现象或问题</div>
      </div>
      <div class="sci-step">
        <div class="sci-step__num">2</div>
        <div class="sci-step__title">提出问题</div>
        <div class="sci-step__detail">转化为明确的科学问题</div>
      </div>
      <div class="sci-step">
        <div class="sci-step__num">3</div>
        <div class="sci-step__title">提出假设</div>
        <div class="sci-step__detail">给出可检验的解释</div>
      </div>
      <div class="sci-step">
        <div class="sci-step__num">4</div>
        <div class="sci-step__title">实验验证</div>
        <div class="sci-step__detail">做实验、收集数据</div>
      </div>
      <div class="sci-step">
        <div class="sci-step__num">5</div>
        <div class="sci-step__title">得出结论</div>
        <div class="sci-step__detail">验证或推翻假设</div>
      </div>
    </div>

    <div class="callout callout--warn">
      <div class="callout__label">🔑 科学的三个关键特征</div>
      <p><strong>可证伪性：</strong>得有办法证明它是错的。如果怎么说都对，那不是科学。</p>
      <p style="margin-top:6px;"><strong>自我修正：</strong>没有"终极真理"，只有"目前还没被推翻的理论"。</p>
      <p style="margin-top:6px;"><strong>对照实验：</strong>对照组非常重要——要知道"如果不做这个处理会怎样"。</p>
    </div>

    <table>
      <caption>两种科学研究</caption>
      <thead>
        <tr><th>类型</th><th>研究什么</th><th>方法</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>实验科学</strong></td><td>近因（"怎么运作的"）</td><td>做实验、控制变量</td></tr>
        <tr><td><strong>进化科学</strong></td><td>远因（"为什么会变成这样"）</td><td>比较法、化石、基因</td></tr>
      </tbody>
    </table>
  </section>

  <!-- Section 5: Darwin -->
  <section id="sec5">
    <h2><span class="emoji">🦎</span>五、达尔文的5大进化论</h2>

    <p>这是全书的核心框架，后面每一章都会用到。</p>

    <div class="theory-grid">
      <div class="theory-card">
        <div class="theory-card__head">
          <div class="theory-card__num">1</div>
          <div>
            <div class="theory-card__title">物种演变</div>
            <div class="theory-card__en">Perpetual Change</div>
          </div>
        </div>
        <div class="theory-card__body">
          生物一直在变，不是一成不变的。化石记录、基因证据都证明了这一点。地球生命的历史不是几千几万年，而是几十亿年。
        </div>
      </div>

      <div class="theory-card">
        <div class="theory-card__head">
          <div class="theory-card__num">2</div>
          <div>
            <div class="theory-card__title">共同祖先</div>
            <div class="theory-card__en">Common Descent</div>
          </div>
        </div>
        <div class="theory-card__body">
          所有生物都来自同一个祖先，像一棵大树。证据：几乎所有生物的遗传密码都一样。人和香蕉都有相同的基因！
        </div>
      </div>

      <div class="theory-card">
        <div class="theory-card__head">
          <div class="theory-card__num">3</div>
          <div>
            <div class="theory-card__title">物种增殖</div>
            <div class="theory-card__en">Multiplication of Species</div>
          </div>
        </div>
        <div class="theory-card__body">
          一个物种可以分裂成多个。怎么分裂？地理隔离 → 各自独立演化 → 差异越来越大 → 变成不同物种。
        </div>
      </div>

      <div class="theory-card">
        <div class="theory-card__head">
          <div class="theory-card__num">4</div>
          <div>
            <div class="theory-card__title">渐变论</div>
            <div class="theory-card__en">Gradualism</div>
          </div>
        </div>
        <div class="theory-card__body">
          进化是慢慢累积的，不是突然跳变的。很多微小的变异，经过很多代的积累，最终变成巨大的差异。
        </div>
      </div>

      <div class="theory-card">
        <div class="theory-card__head">
          <div class="theory-card__num">5</div>
          <div>
            <div class="theory-card__title">自然选择</div>
            <div class="theory-card__en">Natural Selection</div>
          </div>
        </div>
        <div class="theory-card__body">
          <strong>适者生存。</strong>更适应环境的留下更多后代。<br>
          三个前提：种群有变异 + 变异可遗传 + 不同变异后代数不同 → 有利变异越来越多，生物越来越适应。
        </div>
      </div>
    </div>

    <div class="callout callout--insight">
      <div class="callout__label">⭐ 核心：自然选择</div>
      <p>这五个理论里面，第5个（自然选择）是核心机制，是达尔文最伟大的贡献。</p>
      <p style="margin-top:6px;">它解释了为什么生物看起来"设计"得这么精妙——不是谁设计的，而是自然选择了那些更适应环境的变异。</p>
    </div>
  </section>

  <!-- Section 6: Mendel -->
  <section id="sec6">
    <h2><span class="emoji">🌱</span>六、孟德尔与遗传学</h2>

    <p>达尔文当年有个大问题没解决：<strong>变异是怎么遗传的？</strong></p>

    <p>当时大家以为是"混合遗传"——就像调色，高的和矮的生出来中等的。如果是这样，有利的变异会被稀释掉，自然选择就没用了。</p>

    <div class="callout callout--success">
      <div class="callout__label">🌱 种豌豆的修士——孟德尔</div>
      <p>解决了这个问题：</p>
      <ul style="margin-top:8px;margin-bottom:0;">
        <li>遗传是<strong>颗粒式</strong>的，不是混合式的</li>
        <li>基因是一个个独立的单位，不会被稀释</li>
        <li>显性基因和隐性基因——F1代只显现显性，F2代又会出现隐性</li>
      </ul>
    </div>

    <p>后来孟德尔遗传学和细胞生物学结合 → <strong>染色体遗传理论</strong>。</p>

    <p>达尔文的理论 + 孟德尔遗传学 = <strong style="color:var(--accent2);">新达尔文主义（Neo-Darwinism）</strong></p>

    <div class="think-box">
      <div class="think-box__label">💭 有意思的细节</div>
      <p>达尔文和孟德尔是同时代的人，但达尔文好像没读过孟德尔的论文。如果他读过，进化论的历史可能会很不一样～</p>
    </div>
  </section>

  <!-- Section 7: Animal rights -->
  <section id="sec7">
    <h2><span class="emoji">🐾</span>七、动物权利与3R原则</h2>

    <p>这章还讨论了一个很有意思的伦理问题：<strong>用动物做实验对不对？</strong></p>

    <p>科学界总结了<strong>3R原则</strong>来指导动物实验的伦理规范：</p>

    <div class="r-grid">
      <div class="r-card">
        <div class="r-card__letter">R</div>
        <div class="r-card__title">减少</div>
        <div class="r-card__en">Reduction</div>
        <div class="r-card__desc">尽量少用动物。能用更少的动物得出同样的结论，就不要多用。</div>
      </div>
      <div class="r-card">
        <div class="r-card__letter">R</div>
        <div class="r-card__title">优化</div>
        <div class="r-card__en">Refinement</div>
        <div class="r-card__desc">减少动物的痛苦。改进实验方法，让动物尽可能少受罪。</div>
      </div>
      <div class="r-card">
        <div class="r-card__letter">R</div>
        <div class="r-card__title">替代</div>
        <div class="r-card__en">Replacement</div>
        <div class="r-card__desc">能用细胞/计算机模拟就不用活的动物。能用低等动物就不用高等动物。</div>
      </div>
    </div>

    <div class="think-box">
      <div class="think-box__label">💭 讨论一下</div>
      <p>你怎么看动物实验？如果为了研发治病的药，你觉得可以用动物做实验吗？边界在哪里？</p>
    </div>
  </section>

  <!-- Section 8: Quiz -->
  <section id="sec8">
    <h2><span class="emoji">🎯</span>八、复习自测</h2>

    <p>学完了，来测测你记住了多少。答案点一下就能看到～</p>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-item__q">生命的7个基本属性是什么？</div>
      <div class="quiz-item__a">
        化学独特性、复杂性与层级组织、繁殖、遗传程序、新陈代谢、发育、环境互动。
      </div>
    </div>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-item__q">什么是涌现性？举一个例子。</div>
      <div class="quiz-item__a">
        每上一个层级，就会出现新的、底层没有的特性。整体大于部分之和。
        <br><br>
        例子：细胞层面没有"血压"这个概念，个体层面没有"社会结构"这个概念。每往上一层都有新的性质涌现出来。
      </div>
    </div>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-item__q">生命遵守热力学第二定律吗？为什么？</div>
      <div class="quiz-item__a">
        遵守。热力学第二定律说系统倾向于越来越混乱（熵增）。
        <br><br>
        生命本身是"逆熵"的——通过不断吃能量，维持自身的有序。但整个系统（生命+环境）的总熵还是在增加的。生命是一个耗散结构。
      </div>
    </div>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-item__q">科学方法的流程是什么？科学有什么关键特征？</div>
      <div class="quiz-item__a">
        流程：观察 → 提出问题 → 提出假设 → 做实验/收集数据 → 验证/推翻假设 → 得出结论
        <br><br>
        关键特征：①可证伪性 ②自我修正 ③对照实验
      </div>
    </div>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-item__q">达尔文的5大进化论分别是什么？</div>
      <div class="quiz-item__a">
        ① 物种演变（生物一直在变）
        <br>② 共同祖先（所有生物来自同一个祖先）
        <br>③ 物种增殖（一个物种可以分裂成多个）
        <br>④ 渐变论（进化是慢慢累积的）
        <br>⑤ 自然选择（适者生存，核心机制）
      </div>
    </div>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-item__q">自然选择的三个前提是什么？</div>
      <div class="quiz-item__a">
        ① 种群里有变异
        <br>② 变异是可遗传的
        <br>③ 不同变异留下的后代数量不一样
        <br><br>
        → 结果：有利的变异越来越多，生物越来越适应环境（适应 adaptation）。
      </div>
    </div>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-item__q">孟德尔解决了达尔文的什么大问题？</div>
      <div class="quiz-item__a">
        解决了"变异是怎么遗传的"这个问题。
        <br><br>
        当时大家以为是"混合遗传"（像调色一样），那样有利变异会被稀释掉，自然选择就没用了。
        <br><br>
        孟德尔证明遗传是颗粒式的——基因是一个个独立的单位，不会被稀释。
      </div>
    </div>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-item__q">动物实验的3R原则是什么？</div>
      <div class="quiz-item__a">
        ① Reduction 减少——尽量少用动物
        <br>② Refinement 优化——减少痛苦
        <br>③ Replacement 替代——能用细胞/计算机模拟就不用活的动物
      </div>
    </div>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-item__q">实验科学和进化科学有什么区别？</div>
      <div class="quiz-item__a">
        实验科学研究"近因"——怎么运作的。方法：做实验、控制变量。
        <br>
        进化科学研究"远因"——为什么会变成这样。方法：比较法、化石、基因。
      </div>
    </div>

    <div class="quiz-item" onclick="this.classList.toggle('open')">
      <div class="quiz-item__q">新达尔文主义是什么？</div>
      <div class="quiz-item__a">
        达尔文的自然选择理论 + 孟德尔的遗传学 = 新达尔文主义（Neo-Darwinism）。
        <br><br>
        解决了达尔文当年没解决的遗传机制问题。
      </div>
    </div>
  </section>

</main>

<footer>
  🐸 动物学第一章 · 生命是什么 | 交互式学习笔记
</footer>

<script>
// ==================== TOC smooth scroll ====================
document.querySelectorAll('.toc a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ==================== Entropy visualization ====================
function drawEntropy(canvasId, ordered) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = '#0A1628';
  ctx.fillRect(0, 0, w, h);

  const particles = [];

  if (ordered) {
    // Ordered: grid pattern
    const cols = 6;
    const rows = 4;
    const sx = w / (cols + 1);
    const sy = h / (rows + 1);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: sx * (i + 1),
          y: sy * (j + 1),
          r: 6,
          color: '#2DD4BF'
        });
      }
    }
  } else {
    // Random
    for (let i = 0; i < 24; i++) {
      particles.push({
        x: 10 + Math.random() * (w - 20),
        y: 10 + Math.random() * (h - 20),
        r: 4 + Math.random() * 4,
        color: Math.random() > 0.5 ? '#2DD4BF' : '#0F766E'
      });
    }
  }

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
}

// ==================== Initialize ====================
window.addEventListener('load', () => {
  drawEntropy('lowEntropyCanvas', true);
  drawEntropy('highEntropyCanvas', false);
});
<\/script>

</body>
</html>
`,W5=`---
{"no":"第二章","title":"生命的起源与化学","order":2}
---
<!-- Generated by Trae Work -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>动物学第二章 · 生命的起源与化学 | 交互式笔记</title>
<style>
:root {
  --bg: #0A1628;
  --bg2: #0F1E35;
  --surface: #1A2D4A;
  --border: #2A4470;
  --text: #E8F4F8;
  --text-secondary: #B8D4E3;
  --muted: #7A9BB8;
  --accent: #2DD4BF;
  --accent-hover: #14B8A6;
  --accent-soft: rgba(45, 212, 191, 0.12);
  --accent-soft-strong: rgba(45, 212, 191, 0.35);
  --accent2: #34D399;
  --accent3: #60A5FA;
  --success: #10B981;
  --danger: #EF4444;
  --warning: #FBBF24;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

.report-intro {
  background: linear-gradient(135deg, #0a1628 0%, #0c4a6e 40%, #0f766e 75%, #2dd4bf 100%);
  color: white;
  padding: 60px 24px 48px;
  position: relative;
  overflow: hidden;
}
.report-intro::before {
  content: '';
  position: absolute;
  top: -120px; right: -60px;
  width: 340px; height: 340px;
  background: radial-gradient(circle, rgba(52,211,153,0.2) 0%, transparent 70%);
  border-radius: 50%;
}
.report-intro::after {
  content: '';
  position: absolute;
  bottom: -100px; left: 5%;
  width: 280px; height: 280px;
  background: radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%);
  border-radius: 50%;
}
.report-intro__content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.report-intro__eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #99F6E4;
  background: rgba(45,212,191,0.2);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}
.report-intro h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 14px;
  background: linear-gradient(135deg, #fff 0%, #A7F3D0 50%, #67E8F9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.report-intro__summary {
  font-size: 16px;
  line-height: 1.7;
  max-width: 640px;
  color: #E0F2FE;
}
.report-intro__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.12);
  font-size: 13px;
  color: #BAE6FD;
}
.report-intro__meta span strong {
  font-weight: 600;
  margin-left: 4px;
  color: #A7F3D0;
}

main {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

section { margin-bottom: 52px; scroll-margin-top: 24px; }

h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--accent);
  display: flex; align-items: center; gap: 10px;
}
h2 .emoji { font-size: 24px; }

h3 {
  font-size: 17px; font-weight: 600; color: var(--text);
  margin-top: 28px; margin-bottom: 12px;
}
h4 {
  font-size: 15px; font-weight: 600; color: var(--text-secondary);
  margin-top: 20px; margin-bottom: 8px;
}

p { margin-bottom: 14px; color: var(--text-secondary); }
strong { color: var(--text); font-weight: 600; }

blockquote {
  border-left: 4px solid var(--accent);
  padding-left: 16px; margin: 16px 0;
  color: var(--text-secondary);
}

ul, ol {
  margin-bottom: 14px; padding-left: 24px; color: var(--text-secondary);
}
li { margin-bottom: 6px; }
li::marker { color: var(--accent); }

table {
  width: 100%; border-collapse: collapse; margin: 16px 0 20px;
  font-size: 14px; background: var(--bg2);
  border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
}
caption {
  text-align: left; font-weight: 600; font-size: 14px;
  color: var(--text); margin-bottom: 8px; padding: 0 2px;
}
thead { background: var(--surface); }
th {
  text-align: left; padding: 10px 14px; font-weight: 600;
  color: var(--text); border-bottom: 1px solid var(--border); font-size: 13px;
}
td {
  padding: 10px 14px; border-bottom: 1px solid var(--border);
  color: var(--text-secondary); vertical-align: top;
}
tr:last-child td { border-bottom: none; }
tr:hover td { background: rgba(45,212,191,0.06); }

.callout {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 10px; padding: 16px 18px; margin: 18px 0;
}
.callout__label {
  display: flex; align-items: center; gap: 8px;
  font-weight: 600; font-size: 14px; color: var(--text); margin-bottom: 8px;
}
.callout p { margin-bottom: 0; font-size: 14px; }
.callout p + p { margin-top: 8px; }

.callout--warn {
  background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.4);
}
.callout--warn .callout__label { color: #FCA5A5; }

.callout--insight {
  background: rgba(45,212,191,0.12); border-color: rgba(45,212,191,0.4);
}
.callout--insight .callout__label { color: #5EEAD4; }

.callout--success {
  background: rgba(52,211,153,0.1); border-color: rgba(52,211,153,0.4);
}
.callout--success .callout__label { color: #6EE7B7; }

.toc {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 12px; padding: 20px 24px; margin-bottom: 40px;
}
.toc__title {
  font-weight: 600; font-size: 14px; color: var(--text);
  margin-bottom: 12px; display: flex; align-items: center; gap: 8px;
}
.toc ul { list-style: none; padding: 0; margin: 0; columns: 2; column-gap: 24px; }
.toc li { margin-bottom: 6px; break-inside: avoid; }
.toc a {
  color: var(--text-secondary); text-decoration: none; font-size: 13px;
  transition: color 0.2s;
}
.toc a:hover { color: var(--accent); }

.demo {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 14px; padding: 24px; margin: 20px 0;
}
.demo__title {
  font-weight: 600; font-size: 15px; color: var(--text);
  margin-bottom: 6px; display: flex; align-items: center; gap: 8px;
}
.demo__desc { font-size: 13px; color: var(--muted); margin-bottom: 16px; }
.demo__canvas-wrap {
  background: var(--bg); border-radius: 10px; padding: 20px; margin-bottom: 16px;
}
.demo__controls {
  display: flex; flex-wrap: wrap; gap: 10px; align-items: center;
}
.demo__btn {
  padding: 10px 16px; border: 1px solid var(--border);
  border-radius: 8px; background: var(--surface);
  color: var(--text-secondary); font-size: 13px;
  cursor: pointer; transition: all 0.2s; font-family: inherit; font-weight: 500;
}
.demo__btn:hover { border-color: var(--accent); color: var(--accent); }
.demo__btn--active {
  background: var(--accent); color: var(--bg);
  border-color: var(--accent); font-weight: 600;
}
.demo__btn--active:hover { background: var(--accent-hover); color: var(--bg); }

.demo__result {
  margin-top: 14px; padding: 12px 16px; background: var(--bg);
  border-radius: 8px; font-size: 13px; color: var(--text-secondary);
  border-left: 3px solid var(--accent);
}

.insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px; margin: 20px 0;
}
.insight-card {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 10px; padding: 16px; transition: border-color 0.2s;
}
.insight-card:hover { border-color: var(--accent); }
.insight-card__icon { font-size: 22px; margin-bottom: 8px; }
.insight-card__title {
  font-weight: 600; font-size: 14px; color: var(--text); margin-bottom: 6px;
}
.insight-card__desc {
  font-size: 13px; color: var(--muted); line-height: 1.6;
}

.test-item {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 10px; padding: 14px 18px; margin: 10px 0;
  cursor: pointer; transition: all 0.2s;
}
.test-item:hover { border-color: var(--accent); }
.test-item__q {
  font-weight: 600; font-size: 14px; color: var(--text);
  display: flex; justify-content: space-between; align-items: center;
}
.test-item__q::after {
  content: '▸'; color: var(--muted); transition: transform 0.2s; font-size: 12px;
}
.test-item.open .test-item__q::after { transform: rotate(90deg); }
.test-item__a {
  max-height: 0; overflow: hidden;
  transition: max-height 0.3s, padding 0.3s;
  font-size: 13px; color: var(--text-secondary);
}
.test-item.open .test-item__a {
  max-height: 800px; padding-top: 12px; margin-top: 8px;
  border-top: 1px solid var(--border);
}

/* Water molecule canvas */
#waterCanvas, #proteinCanvas, #millerCanvas {
  width: 100%; max-width: 400px; height: 240px;
  display: block; margin: 0 auto;
}

/* Tab system for macromolecules */
.macro-tabs {
  display: flex; gap: 4px; margin-bottom: 16px; flex-wrap: wrap;
}
.macro-tab {
  padding: 8px 14px; border-radius: 8px; cursor: pointer;
  font-size: 13px; font-weight: 500;
  background: var(--surface); color: var(--text-secondary);
  border: 1px solid var(--border);
  transition: all 0.2s;
}
.macro-tab:hover { border-color: var(--accent); color: var(--accent); }
.macro-tab.active {
  background: var(--accent); color: var(--bg); border-color: var(--accent);
}
.macro-content { display: none; }
.macro-content.active { display: block; animation: fadeIn 0.3s; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Timeline */
.timeline {
  position: relative; padding-left: 30px; margin: 20px 0;
}
.timeline::before {
  content: ''; position: absolute; left: 8px; top: 0; bottom: 0;
  width: 2px; background: var(--accent-soft-strong);
}
.timeline-item { position: relative; margin-bottom: 20px; }
.timeline-item::before {
  content: ''; position: absolute; left: -27px; top: 6px;
  width: 12px; height: 12px; border-radius: 50%;
  background: var(--accent); border: 2px solid var(--bg2);
}
.timeline-item__year {
  font-weight: 700; font-size: 13px; color: var(--accent);
  font-family: monospace;
}
.timeline-item__text {
  font-size: 14px; color: var(--text-secondary); margin-top: 2px;
}

footer {
  border-top: 1px solid var(--border);
  padding: 24px; text-align: center; font-size: 12px; color: var(--muted);
}

@media (max-width: 640px) {
  .report-intro { padding: 40px 20px 36px; }
  .report-intro h1 { font-size: 24px; }
  main { padding: 28px 16px 60px; }
  h2 { font-size: 18px; }
  .toc ul { columns: 1; }
  .demo { padding: 16px; }
}
</style>
</head>
<body>

<header class="report-intro">
  <div class="report-intro__content">
    <span class="report-intro__eyebrow">🧪 动物学 · 第二章</span>
    <h1>生命的起源与化学<br>从非生命到生命的奇妙旅程</h1>
    <p class="report-intro__summary">
      巴斯德如何终结自然发生说？四大生物大分子怎么构建生命？
      水为什么是生命之源？米勒实验证明了什么？RNA世界假说又如何解答"先有鸡还是先有蛋"？
    </p>
    <div class="report-intro__meta">
      <span>📚 <strong>模块</strong>：10大章节</span>
      <span>🧬 <strong>重点</strong>：蛋白质四级结构 / 水的特性 / 化学进化</span>
      <span>🎮 <strong>互动</strong>：4个可视化演示</span>
    </div>
  </div>
</header>

<main>

  <nav class="toc">
    <div class="toc__title">📑 本章目录</div>
    <ul>
      <li><a href="#sec1">一、自然发生说的终结</a></li>
      <li><a href="#sec2">二、四大生物大分子</a></li>
      <li><a href="#sec3">三、水：生命之源</a></li>
      <li><a href="#sec4">四、化学进化</a></li>
      <li><a href="#sec5">五、生命系统的起源</a></li>
      <li><a href="#sec6">六、代谢的起源</a></li>
      <li><a href="#sec7">七、前寒武纪生命</a></li>
      <li><a href="#sec8">八、易混淆概念对比</a></li>
      <li><a href="#sec9">九、核心感悟</a></li>
      <li><a href="#sec10">十、复习自测</a></li>
    </ul>
  </nav>

  <!-- Section 1 -->
  <section id="sec1">
    <h2><span class="emoji">🧫</span>一、自然发生说的终结</h2>

    <h3>古人相信什么？</h3>
    <p>很长时间里，人们相信生命可以从非生命物质中<strong>自发产生</strong>：</p>
    <ul>
      <li>青蛙从潮湿的泥土里长出来</li>
      <li>老鼠从腐烂的物质里长出来</li>
      <li>昆虫从露水里长出来</li>
      <li>蛆虫从腐肉里长出来</li>
    </ul>

    <div class="callout callout--warn">
      <div class="callout__label">🧀 "制造老鼠的配方"</div>
      <p>比利时人范·海尔蒙特（1648）说：</p>
      <p style="margin-top:6px;">"把沾了汗水的内衣和小麦一起放进开口的罐子里，大约21天后，气味变了，发酵……把小麦变成了老鼠。而且出来的不是小老鼠，是成年老鼠！"</p>
      <p style="margin-top:6px;">现在看觉得很荒谬，但在当时这是主流观点。</p>
    </div>

    <h3>巴斯德的致命一击（1861）</h3>

    <p>路易·巴斯德用<strong>曲颈瓶实验</strong>终结了自然发生说：</p>

    <div class="formula" style="font-family:monospace;font-size:13px;line-height:2;">
烧瓶里装可发酵的物质（肉汤）<br>
瓶口是S形的长颈，通空气<br>
&nbsp;&nbsp;&nbsp;↓<br>
煮沸杀菌<br>
&nbsp;&nbsp;&nbsp;↓<br>
冷却，放置<br>
&nbsp;&nbsp;&nbsp;↓<br>
<span style="color:var(--danger);">❌ 没有发酵！</span><br>
（空气中的微生物都沉积在S形瓶颈的底部）<br>
&nbsp;&nbsp;&nbsp;↓<br>
把长颈掰断<br>
&nbsp;&nbsp;&nbsp;↓<br>
<span style="color:var(--success);">✅ 很快就发酵了</span><br>
（空气中的微生物直接掉进肉汤里繁殖）
    </div>

    <div class="callout callout--success">
      <div class="callout__label">🎯 结论</div>
      <p><strong>生命只能来自生命（生源论 biogenesis）。</strong></p>
      <p style="margin-top:6px;">巴斯德在法国科学院宣布："自然发生说永远不会从这一致命的打击中复活。"</p>
    </div>

    <div class="callout callout--insight">
      <div class="callout__label">💡 思考</div>
      <p>巴斯德的实验"证明"了生命不能自发产生，但后来的科学家又在研究"生命最初是怎么从非生命来的"。这两者矛盾吗？</p>
      <p style="margin-top:6px;"><strong>不矛盾。</strong>巴斯德说的是"现在的环境下，复杂生命不能自发产生"；化学进化学说的是"几十亿年前，在完全不同的环境下，最简单的生命形式可能逐步产生"。</p>
    </div>
  </section>

  <!-- Section 2: Macromolecules -->
  <section id="sec2">
    <h2><span class="emoji">🧬</span>二、四大生物大分子</h2>

    <p>所有生命的建材，本质上就是这四类分子。</p>

    <table>
      <thead>
        <tr><th>类型</th><th>基本单位</th><th>主要元素</th><th>核心功能</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>碳水化合物</strong></td><td>单糖</td><td>C, H, O</td><td>能量 + 结构</td></tr>
        <tr><td><strong>脂质</strong></td><td>脂肪酸 + 甘油</td><td>C, H, O (P)</td><td>储能 + 细胞膜 + 激素</td></tr>
        <tr><td><strong>蛋白质</strong></td><td>氨基酸</td><td>C, H, O, N, S</td><td>结构 + 催化 + 运输 + 免疫</td></tr>
        <tr><td><strong>核酸</strong></td><td>核苷酸</td><td>C, H, O, N, P</td><td>储存遗传信息</td></tr>
      </tbody>
    </table>

    <!-- Interactive tabs -->
    <div class="demo">
      <div class="demo__title">🎮 互动：四大分子详解</div>
      <div class="demo__desc">点击标签切换，看看每类生物大分子的详细结构和功能。</div>

      <div class="macro-tabs">
        <div class="macro-tab active" onclick="switchMacro(0)">🍬 碳水化合物</div>
        <div class="macro-tab" onclick="switchMacro(1)">🧈 脂质</div>
        <div class="macro-tab" onclick="switchMacro(2)">🔗 蛋白质</div>
        <div class="macro-tab" onclick="switchMacro(3)">🧬 核酸</div>
      </div>

      <div class="macro-content active" id="macro0">
        <h4>通式：CH₂O（碳:氢:氧 = 1:2:1）</h4>
        <table>
          <thead>
            <tr><th>分类</th><th>含义</th><th>例子</th><th>功能</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>单糖</strong></td><td>简单糖</td><td>葡萄糖、半乳糖、果糖</td><td>最基本的能量单位</td></tr>
            <tr><td><strong>双糖</strong></td><td>两个单糖脱水缩合</td><td>麦芽糖、蔗糖、乳糖</td><td>运输和储存</td></tr>
            <tr><td><strong>多糖</strong></td><td>长链聚合物</td><td>淀粉、糖原、纤维素</td><td>长期储能 + 结构</td></tr>
          </tbody>
        </table>
        <p style="font-size:13px;">🔬 <strong>化学反应：</strong>合成 = 脱水缩合（condensation），分解 = 水解（hydrolysis）</p>
        <table>
          <thead><tr><th>多糖</th><th>在哪</th><th>干嘛用</th></tr></thead>
          <tbody>
            <tr><td><strong>淀粉</strong></td><td>植物中</td><td>植物储存糖的方式</td></tr>
            <tr><td><strong>糖原</strong></td><td>动物肝脏和肌肉</td><td>动物储存糖的方式</td></tr>
            <tr><td><strong>纤维素</strong></td><td>植物细胞壁</td><td>地球上数量最多的有机物</td></tr>
          </tbody>
        </table>
        <p style="font-size:13px;color:var(--muted);">💡 纤维素的总量 > 所有其他有机物加起来的总量。地球上最丰富的有机物质是木头（主要成分就是纤维素）。</p>
      </div>

      <div class="macro-content" id="macro1">
        <p>共同特点：低极性 → 几乎不溶于水，但溶于有机溶剂。</p>
        <table>
          <thead>
            <tr><th>类型</th><th>结构</th><th>功能</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>中性脂肪</strong></td><td>甘油 + 3个脂肪酸 = 甘油三酯</td><td>主要储能物质、燃料</td></tr>
            <tr><td><strong>磷脂</strong></td><td>甘油 + 2脂肪酸 + 磷酸 + 含氮碱基</td><td>细胞膜的主要成分</td></tr>
            <tr><td><strong>类固醇</strong></td><td>四个碳环骨架</td><td>激素、胆固醇、维生素D</td></tr>
          </tbody>
        </table>
        <h4>饱和 vs 不饱和</h4>
        <table>
          <thead><tr><th>饱和脂肪</th><th>不饱和脂肪</th></tr></thead>
          <tbody>
            <tr><td>碳链上都是单键，氢"满了"</td><td>碳链上有双键，氢没满</td></tr>
            <tr><td>动物脂肪居多</td><td>植物油脂居多</td></tr>
            <tr><td>常温下固态</td><td>常温下液态</td></tr>
          </tbody>
        </table>
        <div class="callout callout--insight">
          <div class="callout__label">🧠 磷脂为什么重要？</div>
          <p>磷脂分子一端亲水，一端疏水 → 同时接触水环境和脂环境 → <strong>细胞膜的理想材料</strong>。</p>
          <p style="margin-top:6px;">所有细胞的膜都是磷脂双分子层结构。细胞膜的存在是生命和非生命的分界线。</p>
        </div>
      </div>

      <div class="macro-content" id="macro2">
        <p>蛋白质是生命的主力——结构、催化、运输、免疫、信号……几乎什么都干。</p>
        <h4>基本单位：氨基酸</h4>
        <ul>
          <li>生物体内有 <strong>20种</strong> 常见氨基酸</li>
          <li>每个氨基酸都有：氨基（-NH₂）+ 羧基（-COOH）+ 侧链（R基）</li>
          <li>20种氨基酸的区别就在R基不同</li>
        </ul>
        <h4>蛋白质的四级结构（重点！）</h4>
        <table>
          <thead>
            <tr><th>层级</th><th>名称</th><th>是什么</th><th>靠什么维持</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>一级</strong></td><td>氨基酸序列</td><td>氨基酸在链上的排列顺序</td><td>肽键（共价键）</td></tr>
            <tr><td><strong>二级</strong></td><td>局部折叠</td><td>α-螺旋、β-折叠等重复结构</td><td>氢键</td></tr>
            <tr><td><strong>三级</strong></td><td>整体三维形状</td><td>整条链折叠成的复杂空间结构</td><td>二硫键、氢键、离子键、疏水键</td></tr>
            <tr><td><strong>四级</strong></td><td>多亚基组合</td><td>多条多肽链聚合成完整蛋白质</td><td>各种非共价键</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <div class="callout__label">🌟 理解</div>
          <p>蛋白质的功能取决于它的三维形状。形状不对，功能就没了。</p>
          <p style="margin-top:6px;">比如煮熟的鸡蛋为什么变白变固态？蛋白质加热变性了——高级结构被破坏了，虽然氨基酸序列没变（一级结构还在），但形状变了，功能就没了。</p>
        </div>
      </div>

      <div class="macro-content" id="macro3">
        <p><strong>核心功能：</strong>储存和传递遗传信息。是唯一能自我复制的分子。</p>
        <table>
          <thead>
            <tr><th>类型</th><th>全称</th><th>结构</th><th>功能</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>DNA</strong></td><td>脱氧核糖核酸</td><td>双链双螺旋</td><td>长期储存遗传信息</td></tr>
            <tr><td><strong>RNA</strong></td><td>核糖核酸</td><td>通常单链</td><td>传递信息、催化反应、合成蛋白质</td></tr>
          </tbody>
        </table>
        <p><strong>基本单位：</strong>核苷酸 = 糖 + 含氮碱基 + 磷酸基团</p>
        <p style="font-size:13px;color:var(--muted);">💡 核酸太重要了，内容也太多，第五章专门讲。第二章先知道有这东西、是干嘛的就行。</p>
      </div>
    </div>
  </section>

  <!-- Section 3: Water -->
  <section id="sec3">
    <h2><span class="emoji">💧</span>三、水：生命之源</h2>

    <p>本章的隐藏大boss。水看起来普通，但它的特性简直是为生命量身定做的。</p>

    <div class="callout callout--insight">
      <div class="call__label">💧 数字说话</div>
      <p>细胞里 60%~90% 是水。没有水就没有生命。</p>
    </div>

    <!-- Water molecule interactive -->
    <div class="demo">
      <div class="demo__title">🎮 互动：水分子与氢键</div>
      <div class="demo__desc">观察水分子的结构。红色是氧（带负电），白色是氢（带正电）。虚线就是氢键——水的所有神奇性质几乎都来自它。</div>
      <div class="demo__canvas-wrap">
        <canvas id="waterCanvas" width="400" height="240"></canvas>
      </div>
      <div class="demo__result">
        💡 水是<strong>极性分子</strong>：一端带正电，一端带负电。一个水分子的氧可以和另一个水分子的氢形成<strong>氢键</strong>。每个水分子最多可以和4个其他水分子形成氢键 → 四面体结构。
      </div>
    </div>

    <h3>水的六大特性</h3>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">🌡️</div>
        <div class="insight-card__title">高比热容</div>
        <div class="insight-card__desc">缓冲温度变化。海洋温度稳定，生物体温不容易骤变。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">💨</div>
        <div class="insight-card__title">高汽化热</div>
        <div class="insight-card__desc">蒸发冷却。出汗降温，对陆生动物和植物都很重要。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🧊</div>
        <div class="insight-card__title">独特密度</div>
        <div class="insight-card__desc">4℃密度最大，冰浮在水上。如果冰沉底，整个湖都会冻成冰坨。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🪰</div>
        <div class="insight-card__title">高表面张力</div>
        <div class="insight-card__desc">水黾能在水面上走。植物水分运输也靠它。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🩸</div>
        <div class="insight-card__title">低粘度</div>
        <div class="insight-card__desc">血液才能流过细小的毛细血管。细胞质才能流动。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🧪</div>
        <div class="insight-card__title">万能溶剂</div>
        <div class="insight-card__desc">能溶解的东西比任何液体都多。所有生化反应都在水溶液中进行。</div>
      </div>
    </div>

    <div class="callout callout--warn">
      <div class="callout__label">🤯 细思极恐</div>
      <p>水的密度行为太反常了——大多数液体都是越冷越重，水却是4℃最重，结冰反而变轻。</p>
      <p style="margin-top:6px;">但如果没有这个反常性质，冬天湖水会从底部开始往上冻，夏天也化不完，整个湖变成大冰坨，水生生物就活不了了。</p>
      <p style="margin-top:6px;"><strong>如果水的性质稍微变一点，地球上可能根本不会有复杂生命。</strong></p>
    </div>
  </section>

  <!-- Section 4: Chemical evolution -->
  <section id="sec4">
    <h2><span class="emoji">⚡</span>四、化学进化：生命是怎么来的？</h2>

    <p>巴斯德证明了"现在生命不能自发产生"，但问题来了：<strong>最早的生命是怎么来的？</strong></p>

    <h3>Oparin-Haldane 假说（1920年代）</h3>

    <blockquote>
      地球早期的大气是<strong>还原性大气</strong>（没有氧气，有很多氢气、甲烷、氨），在紫外线和闪电的能量作用下，小分子可以逐渐合成更复杂的有机分子。最终产生能够自我复制的分子，进而产生生命。
    </blockquote>

    <p>这个过程叫 <strong>"非生物的分子进化"</strong>。不是说"生命突然一下就出现了"——那是奇迹，不是科学。而是从简单分子到复杂分子，再到能自我复制的分子，再到原始生命——是<strong>一步一步逐渐积累</strong>的。</p>

    <h3>Miller-Urey 实验（1953）</h3>

    <p>米勒和尤里在芝加哥大学做了一个<strong>改变历史的实验</strong>。</p>

    <!-- Miller experiment visual -->
    <div class="demo">
      <div class="demo__title">🎮 互动：米勒-尤里实验</div>
      <div class="demo__desc">点击"开始实验"，模拟经典的米勒-尤里实验过程。看看一周后收集瓶里会有什么。</div>
      <div class="demo__canvas-wrap" style="text-align:center;">
        <canvas id="millerCanvas" width="400" height="240"></canvas>
        <div style="margin-top:12px;">
          <button class="demo__btn demo__btn--primary" onclick="runMillerExperiment()">⚡ 开始模拟实验</button>
        </div>
      </div>
      <div class="demo__result" id="millerResult">
        💡 实验装置：甲烷 + 氢气 + 氨气 + 水蒸气（模拟早期大气）→ 电火花放电（模拟闪电）→ 冷凝器（模拟下雨）→ 收集瓶（模拟原始海洋）
      </div>
    </div>

    <div class="callout callout--success">
      <div class="callout__label">🏆 实验结果</div>
      <p>连续通电一周后，大约15%的碳变成了有机化合物：</p>
      <ul style="margin-top:8px;">
        <li>其中有 <strong>4种蛋白质氨基酸</strong></li>
        <li>还有尿素、简单脂肪酸等</li>
      </ul>
      <p style="margin-top:8px;"><strong>惊人之处：</strong>已知的有机化合物有成千上万种，但米勒实验里产生的少数几种物质，几乎全都是生命体内有的。这绝不是巧合。</p>
    </div>

    <h3>能量来源有哪些？</h3>

    <table>
      <thead><tr><th>能量来源</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><strong>紫外线</strong></td><td>早期没有臭氧层，太阳紫外线很强</td></tr>
        <tr><td><strong>闪电</strong></td><td>总量不如太阳能，但效率很高</td></tr>
        <tr><td><strong>火山活动</strong></td><td>热 + 各种气体</td></tr>
        <tr><td><strong>热泉/水热喷口</strong></td><td>深海热泉假说——生命可能起源于此</td></tr>
      </tbody>
    </table>

    <h3>怎么形成聚合物？</h3>

    <p><strong>难点：</strong>在稀溶液里不容易发生，因为水太多，反应会往水解方向走。</p>

    <table>
      <thead><tr><th>浓缩机制</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><strong>蒸发浓缩</strong></td><td>浅水池里水蒸发了，溶质浓度变高</td></tr>
        <tr><td><strong>黏土吸附</strong></td><td>黏土表面能吸附和浓缩有机分子，还能催化反应</td></tr>
        <tr><td><strong>黄铁矿表面</strong></td><td>二硫化铁带正电，能吸引负离子</td></tr>
        <tr><td><strong>大气尘埃</strong></td><td>尘埃颗粒可以成为浓缩反应的场所</td></tr>
      </tbody>
    </table>

    <h4>Fox的类蛋白微球</h4>
    <p>把20种氨基酸的干混合物加热到180℃ → 产生多肽 → 加水后自组装成<strong>类蛋白微球</strong>。</p>
    <p>微球的特性（有点像细胞了！）：</p>
    <ul>
      <li>大小和形状跟球形细菌差不多（直径约2μm）</li>
      <li>有双层膜结构</li>
      <li>有渗透性质</li>
      <li>能通过出芽的方式"繁殖"</li>
    </ul>
  </section>

  <!-- Section 5: Origin of life systems -->
  <section id="sec5">
    <h2><span class="emoji">🦠</span>五、生命系统的起源</h2>

    <h3>核心问题：怎么从"化学"变成"生命"？</h3>

    <p>前面说的都是化学。但这些都还不是生命。<strong>生命最关键的特征是自我复制。</strong></p>

    <h3>鸡生蛋还是蛋生鸡？</h3>

    <table>
      <thead><tr><th>核酸（DNA/RNA）</th><th>蛋白质（酶）</th></tr></thead>
      <tbody>
        <tr><td>储存遗传信息</td><td>催化化学反应</td></tr>
        <tr><td>要复制自己，需要酶的帮助</td><td>要合成酶，需要核酸的指令</td></tr>
      </tbody>
    </table>

    <div class="callout callout--warn">
      <div class="callout__label">🚫 悖论</div>
      <p>没有酶，核酸复制不了；没有核酸，酶合成不了。那先有哪个？</p>
    </div>

    <h3>答案：RNA世界假说</h3>

    <div class="callout callout--success">
      <div class="callout__label">🎉 重大发现（1980年代）</div>
      <p><strong>RNA不只是信息载体，它也能催化反应！</strong></p>
      <p style="margin-top:6px;">有催化功能的RNA叫 <strong>核酶（ribozyme）</strong>。</p>
    </div>

    <p>核酶能做什么？</p>
    <ul>
      <li>加工mRNA（切掉内含子）</li>
      <li>催化肽键形成（蛋白质合成的关键一步）</li>
      <li>核糖体的催化功能其实是RNA干的，不是蛋白质</li>
    </ul>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 关键洞见</div>
      <p><strong>RNA既能储存信息，又能催化反应。</strong></p>
      <p style="margin-top:6px;">→ 最早的生命可能是以RNA为基础的：RNA负责遗传信息，也负责催化。</p>
      <p style="margin-top:6px;">→ 这个阶段就叫 <strong>"RNA世界"</strong>。</p>
    </div>

    <h4>后来为什么变成了DNA + 蛋白质？</h4>
    <p>因为分工之后效率更高：</p>
    <ul>
      <li><strong>DNA比RNA稳定</strong> → 更适合长期储存遗传信息</li>
      <li><strong>蛋白质比RNA催化能力强</strong> → 20种氨基酸比4种核苷酸能组合出更多样的催化活性</li>
      <li>RNA退居中间，负责传递信息（mRNA）、转运氨基酸（tRNA）、组成核糖体（rRNA）</li>
    </ul>
  </section>

  <!-- Section 6: Metabolism -->
  <section id="sec6">
    <h2><span class="emoji">🌿</span>六、代谢的起源</h2>

    <table>
      <thead><tr><th>观点</th><th>最早的生物是…</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><strong>传统观点</strong></td><td><strong>异养生物</strong></td><td>直接吃环境里的有机物（原始汤里的养分）</td></tr>
        <tr><td><strong>Woese的观点</strong></td><td><strong>自养生物</strong></td><td>自己从无机物合成食物，靠光或化学能</td></tr>
      </tbody>
    </table>

    <h3>光合作用的出现</h3>

    <div class="formula" style="text-align:center;font-family:monospace;">
6CO₂ + 6H₂O —<span style="color:var(--warning);">光照</span>→ C₆H₁₂O₆ + 6O₂<br>
<span style="font-size:12px;color:var(--muted);">二氧化碳 + 水 + 光能 → 葡萄糖 + 氧气</span>
    </div>

    <h3>氧气革命</h3>

    <table>
      <thead><tr><th>变化</th><th>影响</th></tr></thead>
      <tbody>
        <tr><td><strong>臭氧层形成</strong></td><td>氧气 → 臭氧 → 阻挡紫外线 → 生物才能登上陆地</td></tr>
        <tr><td><strong>有氧代谢出现</strong></td><td>用氧气彻底氧化葡萄糖 → 能量效率大大提高</td></tr>
        <tr><td><strong>厌氧生物被逼退</strong></td><td>氧气对很多厌氧生物是有毒的</td></tr>
      </tbody>
    </table>

    <div class="callout callout--insight">
      <div class="callout__label">⚡ 能量效率对比</div>
      <p>无氧呼吸（发酵）：1分子葡萄糖 → 2个ATP</p>
      <p>有氧呼吸：1分子葡萄糖 → 36-38个ATP</p>
      <p style="margin-top:6px;"><strong>差了将近20倍！</strong>有了氧气，生命才有足够的能量来做更复杂的事。</p>
    </div>
  </section>

  <!-- Section 7: Precambrian -->
  <section id="sec7">
    <h2><span class="emoji">🌏</span>七、前寒武纪生命</h2>

    <p><strong>前寒武纪</strong> = 寒武纪之前的地质时期，大约5.7-6亿年之前。占地球历史的85%以上。</p>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-item__year">46亿年前</div>
        <div class="timeline-item__text">地球形成</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item__year">40亿年前</div>
        <div class="timeline-item__text">生命起源（估计）</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item__year">38亿年前</div>
        <div class="timeline-item__text">化石记录显示已有生命</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item__year">30亿年前</div>
        <div class="timeline-item__text">蓝细菌出现，开始产氧</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item__year">20亿年前</div>
        <div class="timeline-item__text">氧气开始大量积累</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item__year">6亿年前</div>
        <div class="timeline-item__text">寒武纪大爆发，动物门类突然大量出现</div>
      </div>
    </div>

    <h3>原核生物的两大分支</h3>

    <table>
      <thead><tr><th>真细菌</th><th>古菌</th></tr></thead>
      <tbody>
        <tr><td>"真正的"细菌</td><td>另一类原核生物</td></tr>
        <tr><td>细胞壁有胞壁酸</td><td>细胞壁没有胞壁酸</td></tr>
        <tr><td>代谢途径多样</td><td>很多生活在极端环境</td></tr>
        <tr><td>大肠杆菌、蓝细菌</td><td>嗜热菌、嗜盐菌等</td></tr>
      </tbody>
    </table>

    <div class="callout callout--insight">
      <div class="callout__label">🌟 意义</div>
      <p>以前以为生物分原核和真核两大类，现在知道是三大域：细菌、古菌、真核生物。</p>
      <p style="margin-top:6px;">我们（真核生物）跟古菌的关系其实比跟细菌更近！</p>
    </div>
  </section>

  <!-- Section 8: Comparisons -->
  <section id="sec8">
    <h2><span class="emoji">⚖️</span>八、易混淆概念对比</h2>

    <table>
      <thead><tr><th>概念 A</th><th>概念 B</th><th>核心区别</th></tr></thead>
      <tbody>
        <tr><td>脱水缩合</td><td>水解</td><td>缩合=连起来，脱掉水；水解=拆开，加上水</td></tr>
        <tr><td>饱和脂肪</td><td>不饱和脂肪</td><td>饱和=碳链全是单键，固态；不饱和=有双键，液态</td></tr>
        <tr><td>一级结构</td><td>三级结构</td><td>一级=氨基酸序列（一条线）；三级=整体三维形状（折好的球）</td></tr>
        <tr><td>自养</td><td>异养</td><td>自养=自己造食物；异养=吃现成的</td></tr>
        <tr><td>原核生物</td><td>真核生物</td><td>原核=没有真正的细胞核；真核=有膜包被的细胞核</td></tr>
        <tr><td>真细菌</td><td>古菌</td><td>都是原核，但进化分支完全不同，生化差异很大</td></tr>
        <tr><td>化学进化</td><td>生物进化</td><td>化学进化=小分子变大分子（没有自然选择）；生物进化=有自然选择作用</td></tr>
      </tbody>
    </table>
  </section>

  <!-- Section 9: Insights -->
  <section id="sec9">
    <h2><span class="emoji">💡</span>九、核心感悟</h2>

    <div class="insight-grid">
      <div class="insight-card">
        <div class="insight-card__icon">📶</div>
        <div class="insight-card__title">生命是连续的</div>
        <div class="insight-card__desc">从非生命到生命是渐变过程，没有"奇迹"时刻。简单小分子→复杂大分子→自我复制分子→原始细胞→现代细胞。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">💧</div>
        <div class="insight-card__title">水真的很神奇</div>
        <div class="insight-card__desc">水的每一个性质——比热容、密度反常、表面张力、溶解能力——都刚好是生命需要的。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🧬</div>
        <div class="insight-card__title">RNA世界假说</div>
        <div class="insight-card__desc">"先有鸡还是先有蛋"在分子层面找到了答案：先有RNA，它既是鸡也是蛋。</div>
      </div>
      <div class="insight-card">
        <div class="insight-card__icon">🔧</div>
        <div class="insight-card__title">进化永远够用就行</div>
        <div class="insight-card__desc">生命不是设计出来的，是凑出来的。在已有基础上修改，不会从零开始设计。</div>
      </div>
    </div>
  </section>

  <!-- Section 10: Quiz -->
  <section id="sec10">
    <h2><span class="emoji">❓</span>十、复习自测</h2>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">1. 巴斯德的曲颈瓶实验是怎么设计的？它证明了什么？</div>
      <div class="test-item__a">
        曲颈瓶里装肉汤，煮沸杀菌后放置。因为S形瓶颈，空气能通但微生物沉积在底部，所以肉汤不发酵。把长颈掰断后，微生物直接掉进肉汤，很快就发酵了。
        <br><br>
        证明了生命只能来自生命（生源论），终结了自然发生说。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">2. 四大生物大分子分别是什么？基本单位和主要功能是什么？</div>
      <div class="test-item__a">
        ① 碳水化合物：单糖 → 能量 + 结构<br>
        ② 脂质：脂肪酸 + 甘油 → 储能 + 细胞膜 + 激素<br>
        ③ 蛋白质：氨基酸 → 结构 + 催化 + 运输 + 免疫<br>
        ④ 核酸：核苷酸 → 储存遗传信息
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">3. 碳水化合物分哪三类？各举一个例子。</div>
      <div class="test-item__a">
        单糖（葡萄糖）、双糖（蔗糖/麦芽糖）、多糖（淀粉/糖原/纤维素）。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">4. 饱和脂肪和不饱和脂肪有什么区别？为什么一个固体一个液体？</div>
      <div class="test-item__a">
        饱和脂肪：碳链上全是单键，氢"满了"，动物脂肪居多，常温固态。<br>
        不饱和脂肪：碳链上有双键，氢没满，植物油脂居多，常温液态。<br><br>
        原因：饱和的碳链是直的，分子之间容易紧密排列；不饱和有双键，碳链是弯的，分子排不紧。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">5. 蛋白质的四级结构分别是什么？每一级靠什么键维持？</div>
      <div class="test-item__a">
        一级（氨基酸序列）：肽键（共价键）<br>
        二级（局部折叠，α-螺旋/β-折叠）：氢键<br>
        三级（整体三维形状）：二硫键、氢键、离子键、疏水键<br>
        四级（多亚基组合）：各种非共价键
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">6. 磷脂分子有什么特殊性质？为什么它适合做细胞膜？</div>
      <div class="test-item__a">
        磷脂一端亲水（磷酸 + 含氮碱基端），一端疏水（脂肪酸链端）。
        <br><br>
        这种两亲性质让它能同时接触水环境和脂环境，所以是细胞膜的理想材料。所有细胞的膜都是磷脂双分子层结构。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">7. 水有哪些特殊性质？每一个对生命有什么意义？</div>
      <div class="test-item__a">
        ① 高比热容 → 缓冲温度变化（海洋温度稳定、体温不容易骤变）<br>
        ② 高汽化热 → 蒸发冷却（出汗降温）<br>
        ③ 独特密度（4℃最大）→ 冰浮在水上，水生生物能过冬<br>
        ④ 高表面张力 → 水黾能走水面，植物水分运输<br>
        ⑤ 低粘度 → 血液能流过毛细血管，细胞质能流动<br>
        ⑥ 万能溶剂 + 参与反应 → 所有生化反应在水溶液中进行
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">8. Miller-Urey实验证明了什么？后来又受到了什么质疑？</div>
      <div class="test-item__a">
        证明了在模拟的早期地球条件下（还原性大气 + 闪电能量），生命的基本建材（氨基酸等有机小分子）可以自发形成。
        <br><br>
        后来有人质疑早期地球大气可能不是那种强还原性的。但重复实验发现，很多种不同的还原性气体组合 + 不同的能量来源（加热、紫外线、放电）都能产生氨基酸。结论是稳健的。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">9. "RNA世界"假说是什么？它解决了什么悖论？</div>
      <div class="test-item__a">
        解决了"先有核酸还是先有蛋白质"（先有鸡还是先有蛋）的悖论。
        <br><br>
        RNA世界假说认为：最早的生命是以RNA为基础的。RNA既能储存遗传信息（现在DNA干的活），又能催化化学反应（现在蛋白酶干的活）。
        <br><br>
        后来才分化出DNA（更稳定，适合长期储存）和蛋白质（催化能力更强），RNA退居中间角色。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">10. 自养生物和异养生物有什么区别？最早的生命可能是哪一种？</div>
      <div class="test-item__a">
        自养（autotroph）：能从无机物合成自己的食物（植物、蓝细菌）。<br>
        异养（heterotroph）：必须从环境中获取现成的有机物（动物、真菌）。
        <br><br>
        传统观点认为最早是异养生物，直接吃原始汤里的有机物。但也有观点认为最早是自养生物。这是个有争议的问题。
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">11. 光合作用的出现对地球大气产生了什么影响？</div>
      <div class="test-item__a">
        ① 产生了大量氧气，彻底改变了地球大气成分<br>
        ② 臭氧层形成 → 阻挡紫外线 → 生物才能登上陆地<br>
        ③ 有氧代谢出现 → 能量效率大幅提升（2个ATP vs 36-38个ATP）<br>
        ④ 厌氧生物被逼退到无氧环境
      </div>
    </div>

    <div class="test-item" onclick="this.classList.toggle('open')">
      <div class="test-item__q">12. 原核生物有什么特征？真细菌和古菌有什么区别？</div>
      <div class="test-item__a">
        原核生物特征：没有膜包被的细胞核（DNA在核区）、没有膜结构细胞器、简单分裂。
        <br><br>
        真细菌和古菌都是原核，但进化分支完全不同：细胞壁成分不同、代谢途径不同、古菌很多生活在极端环境（嗜热、嗜盐等）。我们（真核生物）跟古菌的关系比跟细菌更近。
      </div>
    </div>
  </section>

</main>

<footer>
  🧪 动物学第二章 · 生命的起源与化学 | 交互式学习笔记
</footer>

<script>
// ==================== TOC smooth scroll ====================
document.querySelectorAll('.toc a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ==================== Macromolecule Tabs ====================
function switchMacro(idx) {
  document.querySelectorAll('.macro-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.macro-content').forEach((content, i) => {
    content.classList.toggle('active', i === idx);
  });
}

// ==================== Water Molecule Animation ====================
const waterCanvas = document.getElementById('waterCanvas');
const waterCtx = waterCanvas.getContext('2d');
let waterTime = 0;
let waterAnimId = null;

function drawWaterMolecule() {
  const w = waterCanvas.width;
  const h = waterCanvas.height;
  const cx = w / 2;
  const cy = h / 2;

  waterCtx.fillStyle = '#0A1628';
  waterCtx.fillRect(0, 0, w, h);

  // Draw surrounding water molecules (faded)
  const positions = [
    {x: cx - 110, y: cy - 40, opacity: 0.3},
    {x: cx + 110, y: cy - 30, opacity: 0.3},
    {x: cx - 90, y: cy + 60, opacity: 0.25},
    {x: cx + 100, y: cy + 50, opacity: 0.25},
    {x: cx, y: cy - 90, opacity: 0.2},
  ];

  positions.forEach(pos => {
    drawSingleWater(waterCtx, pos.x, pos.y, 0.6, pos.opacity);
  });

  // Draw main molecule (center)
  drawSingleWater(waterCtx, cx, cy, 1, 1);

  // Draw hydrogen bonds (dashed lines) to neighbors
  waterCtx.strokeStyle = 'rgba(251, 191, 36, 0.6)';
  waterCtx.lineWidth = 1.5;
  waterCtx.setLineDash([4, 4]);

  const bondAngle = Math.sin(waterTime * 0.03) * 0.1;
  // Bonds to nearby molecules
  waterCtx.beginPath();
  waterCtx.moveTo(cx - 28, cy - 10);
  waterCtx.lineTo(cx - 82, cy - 30);
  waterCtx.stroke();

  waterCtx.beginPath();
  waterCtx.moveTo(cx + 28, cy - 10);
  waterCtx.lineTo(cx + 82, cy - 20);
  waterCtx.stroke();

  waterCtx.beginPath();
  waterCtx.moveTo(cx, cy + 28);
  waterCtx.lineTo(cx - 60, cy + 50);
  waterCtx.stroke();

  waterCtx.setLineDash([]);

  // Labels
  waterCtx.font = '11px sans-serif';
  waterCtx.fillStyle = '#94A3B8';
  waterCtx.textAlign = 'center';
  waterCtx.fillText('氢键（虚线）', cx, 18);

  waterCtx.fillStyle = '#FCA5A5';
  waterCtx.fillText('δ-', cx, cy - 58);
  waterCtx.fillStyle = '#93C5FD';
  waterCtx.fillText('δ+', cx - 42, cy - 8);
  waterCtx.fillText('δ+', cx + 42, cy - 8);

  waterTime++;
  waterAnimId = requestAnimationFrame(drawWaterMolecule);
}

function drawSingleWater(ctx, x, y, scale, opacity) {
  const angle = 104.5 * Math.PI / 180; // H-O-H bond angle
  const bondLen = 32 * scale;
  const oRadius = 14 * scale;
  const hRadius = 7 * scale;

  // Hydrogen atoms
  const h1x = x - Math.sin(angle/2) * bondLen;
  const h1y = y + Math.cos(angle/2) * bondLen;
  const h2x = x + Math.sin(angle/2) * bondLen;
  const h2y = y + Math.cos(angle/2) * bondLen;

  ctx.globalAlpha = opacity;

  // Bonds (lines)
  ctx.strokeStyle = 'rgba(255,255,255,0.3)';
  ctx.lineWidth = 3 * scale;
  ctx.beginPath();
  ctx.moveTo(x, y + 2);
  ctx.lineTo(h1x, h1y);
  ctx.moveTo(x, y + 2);
  ctx.lineTo(h2x, h2y);
  ctx.stroke();

  // Oxygen atom (red)
  const oGrad = ctx.createRadialGradient(x - 3, y - 3, 2, x, y, oRadius);
  oGrad.addColorStop(0, '#F87171');
  oGrad.addColorStop(1, '#DC2626');
  ctx.fillStyle = oGrad;
  ctx.beginPath();
  ctx.arc(x, y, oRadius, 0, Math.PI * 2);
  ctx.fill();

  // Hydrogen atoms (white/light blue)
  ctx.fillStyle = '#E0F2FE';
  ctx.beginPath();
  ctx.arc(h1x, h1y, hRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(h2x, h2y, hRadius, 0, Math.PI * 2);
  ctx.fill();

  // O label
  ctx.fillStyle = 'white';
  ctx.font = \`bold \${10 * scale}px sans-serif\`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('O', x, y);

  ctx.globalAlpha = 1;
}

// ==================== Miller-Urey Experiment ====================
const millerCanvas = document.getElementById('millerCanvas');
const millerCtx = millerCanvas.getContext('2d');
let millerRunning = false;
let millerStep = 0;
let millerAnimId = null;

function drawMillerExperiment() {
  const w = millerCanvas.width;
  const h = millerCanvas.height;

  millerCtx.fillStyle = '#0A1628';
  millerCtx.fillRect(0, 0, w, h);

  // Setup drawing
  const gasChamberX = w/2;
  const gasChamberY = 50;
  const chamberW = 100;
  const chamberH = 60;

  // Gas chamber (top)
  millerCtx.strokeStyle = '#7A9BB8';
  millerCtx.lineWidth = 2;
  millerCtx.strokeRect(gasChamberX - chamberW/2, gasChamberY, chamberW, chamberH);
  millerCtx.fillStyle = 'rgba(167, 139, 250, 0.2)';
  millerCtx.fillRect(gasChamberX - chamberW/2 + 2, gasChamberY + 2, chamberW - 4, chamberH - 4);

  // Label
  millerCtx.fillStyle = '#C4B5FD';
  millerCtx.font = '11px sans-serif';
  millerCtx.textAlign = 'center';
  millerCtx.fillText('CH₄ + H₂ + NH₃ + H₂O', gasChamberX, gasChamberY - 6);

  // Spark (electrodes)
  if (millerRunning && Math.sin(millerStep * 0.5) > 0) {
    millerCtx.strokeStyle = '#FDE047';
    millerCtx.lineWidth = 2;
    millerCtx.beginPath();
    millerCtx.moveTo(gasChamberX - 15, gasChamberY + 10);
    millerCtx.lineTo(gasChamberX + 5, gasChamberY + 25);
    millerCtx.lineTo(gasChamberX - 10, gasChamberY + 40);
    millerCtx.lineTo(gasChamberX + 15, gasChamberY + 55);
    millerCtx.stroke();

    millerCtx.fillStyle = '#FEF08A';
    millerCtx.font = '10px sans-serif';
    millerCtx.fillText('⚡ 闪电', gasChamberX + 55, gasChamberY + 35);
  }

  // Left tube down to condenser
  millerCtx.strokeStyle = '#7A9BB8';
  millerCtx.lineWidth = 2;
  millerCtx.beginPath();
  millerCtx.moveTo(gasChamberX - chamberW/2, gasChamberY + chamberH/2);
  millerCtx.lineTo(60, gasChamberY + chamberH/2);
  millerCtx.lineTo(60, h - 80);
  millerCtx.stroke();

  // Right tube up from collecting flask
  millerCtx.beginPath();
  millerCtx.moveTo(gasChamberX + chamberW/2, gasChamberY + chamberH/2);
  millerCtx.lineTo(w - 60, gasChamberY + chamberH/2);
  millerCtx.lineTo(w - 60, h - 80);
  millerCtx.stroke();

  // Condenser (left side, cooling)
  millerCtx.strokeStyle = '#60A5FA';
  millerCtx.lineWidth = 4;
  millerCtx.strokeRect(45, 120, 30, 100);
  millerCtx.fillStyle = 'rgba(96, 165, 250, 0.1)';
  millerCtx.fillRect(45, 120, 30, 100);
  millerCtx.fillStyle = '#93C5FD';
  millerCtx.font = '10px sans-serif';
  millerCtx.textAlign = 'center';
  millerCtx.fillText('冷凝', 60, 235);

  // Collecting flask (bottom)
  const flaskCX = w/2;
  const flaskCY = h - 50;
  millerCtx.beginPath();
  millerCtx.arc(flaskCX, flaskCY, 35, 0, Math.PI * 2);
  millerCtx.strokeStyle = '#7A9BB8';
  millerCtx.lineWidth = 2;
  millerCtx.stroke();

  // Liquid in flask (fills up over time)
  const fillLevel = Math.min(millerStep * 0.5, 20);
  millerCtx.fillStyle = 'rgba(52, 211, 153, 0.3)';
  millerCtx.beginPath();
  millerCtx.arc(flaskCX, flaskCY, 35, 0, Math.PI * 2);
  millerCtx.clip();
  millerCtx.fillRect(flaskCX - 35, flaskCY + 35 - fillLevel, 70, fillLevel);
  millerCtx.restore();

  millerCtx.fillStyle = '#A7F3D0';
  millerCtx.font = '11px sans-serif';
  millerCtx.textAlign = 'center';
  millerCtx.fillText('原始海洋', flaskCX, flaskCY + 55);

  // Heating source (right bottom)
  if (millerRunning) {
    millerCtx.fillStyle = 'rgba(239, 68, 68, 0.6)';
    millerCtx.beginPath();
    millerCtx.arc(w - 60, h - 60, 12 + Math.sin(millerStep * 0.2) * 3, 0, Math.PI * 2);
    millerCtx.fill();
    millerCtx.fillStyle = '#FCA5A5';
    millerCtx.font = '10px sans-serif';
    millerCtx.textAlign = 'center';
    millerCtx.fillText('加热', w - 60, h - 38);
  }

  // Bubbles rising (when running)
  if (millerRunning) {
    for (let i = 0; i < 3; i++) {
      const bubbleY = ((millerStep * 2 + i * 25) % 160);
      millerCtx.fillStyle = 'rgba(255,255,255,0.4)';
      millerCtx.beginPath();
      millerCtx.arc(w - 60, h - 60 - bubbleY, 3 + i, 0, Math.PI * 2);
      millerCtx.fill();
    }
  }

  // Amino acid indicators
  if (millerStep > 60) {
    const numMolecules = Math.min(Math.floor((millerStep - 60) / 15), 6);
    const aminoAcids = ['甘', '丙', '天冬', '谷'];
    millerCtx.fillStyle = '#FDE047';
    millerCtx.font = 'bold 10px sans-serif';
    millerCtx.textAlign = 'center';
    for (let i = 0; i < numMolecules; i++) {
      const mx = flaskCX - 20 + (i % 3) * 20;
      const my = flaskCY + 5 + Math.floor(i / 3) * 15;
      millerCtx.fillText(aminoAcids[i % 4], mx, my);
    }
  }

  // Result text
  if (millerStep > 100) {
    millerCtx.fillStyle = '#FDE047';
    millerCtx.font = 'bold 12px sans-serif';
    millerCtx.textAlign = 'center';
    millerCtx.fillText('✨ 产生了氨基酸等有机物！', flaskCX, flaskCY - 50);
  }

  if (millerRunning) {
    millerStep++;
    millerAnimId = requestAnimationFrame(drawMillerExperiment);
  }
}

function runMillerExperiment() {
  if (millerRunning) {
    millerRunning = false;
    if (millerAnimId) cancelAnimationFrame(millerAnimId);
    return;
  }

  millerStep = 0;
  millerRunning = true;
  drawMillerExperiment();

  document.getElementById('millerResult').innerHTML =
    '⚡ 实验进行中……甲烷、氢气、氨气和水蒸气在电火花的作用下，随着冷凝和雨水落到"原始海洋"里。连续通电一周后，看看收集瓶里会出现什么……';

  setTimeout(() => {
    if (millerRunning) {
      millerRunning = false;
      if (millerAnimId) cancelAnimationFrame(millerAnimId);
      millerStep = 140;
      drawMillerExperiment();
      document.getElementById('millerResult').innerHTML =
        '🏆 <strong>实验结果：</strong>大约15%的碳变成了有机化合物，其中包括<strong>4种蛋白质氨基酸</strong>，还有尿素、简单脂肪酸等。<br><br>' +
        '惊人之处：已知有机化合物有成千上万种，但米勒实验里产生的少数几种物质，<strong>几乎全都是生命体内有的</strong>。这绝不是巧合。';
    }
  }, 3500);
}

// ==================== Initialize ====================
window.addEventListener('load', () => {
  drawWaterMolecule();
  drawMillerExperiment();
});

// Cleanup on unload
window.addEventListener('beforeunload', () => {
  if (waterAnimId) cancelAnimationFrame(waterAnimId);
  if (millerAnimId) cancelAnimationFrame(millerAnimId);
});
<\/script>

</body>
</html>
`,t4=Object.assign({"../content/books/calculus/meta.json":U5,"../content/books/reading30/meta.json":V5,"../content/books/zoology/meta.json":X5}),n4=Object.assign({}),e4=Object.assign({"../content/books/calculus/ch1.html":P5,"../content/books/calculus/ch2.html":I5,"../content/books/reading30/p1.html":Q5,"../content/books/reading30/p2.html":Z5,"../content/books/reading30/p3.html":K5,"../content/books/zoology/ch1.html":J5,"../content/books/zoology/ch2.html":W5}),a4=/^---\r?\n([\s\S]*?)\r?\n---\r?\n/;function Um(a,r,o){const l=r.match(a4);if(!l)return console.warn(`[books] ${a} 缺少 JSON frontmatter，已跳过`),null;let s;try{s=JSON.parse(l[1])}catch(u){return console.warn(`[books] ${a} frontmatter 不是合法 JSON，已跳过`,u),null}return{id:a,no:s.no??"",title:s.title??a,order:s.order??0,format:o,body:r.slice(l[0].length),quiz:Array.isArray(s.quiz)?s.quiz:[]}}function i4(){const a=[];for(const[r,o]of Object.entries(t4)){const l=r.match(/books\/([^/]+)\//)?.[1];if(!l)continue;const s=[];for(const[u,f]of Object.entries(n4)){const p=u.match(/books\/([^/]+)\/(.+)\.md$/);if(!p||p[1]!==l)continue;const g=Um(p[2],f,"md");g&&s.push(g)}for(const[u,f]of Object.entries(e4)){const p=u.match(/books\/([^/]+)\/(.+)\.html$/);if(!p||p[1]!==l)continue;const g=Um(p[2],f,"html");g&&s.push(g)}s.sort((u,f)=>u.order-f.order),a.push({id:l,title:o.title,emoji:o.emoji,userId:o.userId,chapters:s})}return a}const rb=i4();function r4(a){return rb}const lb=[{id:"d1",title:"学院简介：双注册、双学位，4+0 全程在长沙完成学业",summary:"邓迪国际学院由中南大学与英国邓迪大学合作举办，学生两校同时注册，完成培养方案可获中南大学本科毕业证 + 两校学士学位（外方学位不以出国为前提）。",date:"2026-09",source:"邓迪国际学院官网 · 学院简介",url:"https://dii.csu.edu.cn/xygk/xyjs1/xyjj.htm",tag:"学校要闻",keywords:["邓迪","双学位","全英文","机械","本科"],impact:"你是两校双注册学生——邓迪大学的在线图书馆、学习资源四年都能用，这是很多人忽略 hidden 福利；双学位证书与邓迪本地学生一致，申研和就业认可度有书面保障。",action:"注册并熟悉邓迪大学在线图书馆，把它加进你的学习工具清单。"},{id:"d2",title:"常见问题官方答疑：证书、学费、师资一次说清",summary:"学院 FAQ 明确：进入两校培养方案的课程全英文授课；军体、思政等仅计入中南方案的课程用中文；师资为两校正式受聘教师，须通过双方培训上岗。",date:"2026-09",source:"邓迪国际学院官网 · 常见问题",url:"https://dii.csu.edu.cn/zsxx/cjwt.htm",tag:"招生就业",keywords:["全英文","英语","师资","双学位","本科"],impact:"FAQ 证实「全英文授课」只覆盖专业课，思政军体类仍是中文——真正决定你前两年体验的是学术英语过关速度；师资双培训机制意味着教学质量有制度保障，值得告诉爸妈安心。",action:"把 FAQ 链接转给舅舅舅妈；自己重点研究「进入专业课的英语测试」要求。"},{id:"d3",title:"机械专业依托平台：极端服役性能精准制造全国重点实验室等",summary:"机械设计制造及其自动化专业背靠国家「极端服役性能精准制造全国重点实验室」及多个省部级科研平台，建有 3 个国家级工程实践教育中心。",date:"2026-09",source:"邓迪国际学院官网 · 专业设置",url:"https://dii.csu.edu.cn/zsxx/zsxx/zysz/jxsjzzjqzdh.htm",tag:"学术科研",keywords:["机械","实验室","科研","制造","大创"],impact:"专业背靠的是中南王牌的制造方向平台——大创项目、进实验室、工程实践的资源比多数 985 机械专业更集中。科研和项目经历是你未来保研 / 申研（尤其邓迪体系）的硬通货。",action:"大一下学期开始留意大学生创新项目申报，主动邮件联系机械方向导师。"},{id:"d4",title:"中南大学 2026 年邓迪国际学院招生简章发布",summary:"2026 年计划招生 300 人，机械设计制造及其自动化招 60 人；专业课程全英文授课，建议非英语语种考生慎重报考；本科阶段学业全部在学院完成。",date:"2026-06-23",source:"中南大学招生在线",url:"https://zhaosheng.csu.edu.cn/info/1299/2632.htm",tag:"招生就业",keywords:["机械","全英文","英语","招生","本科","邓迪"],impact:"「全英文授课 + 建议非英语语种考生慎重报考」写进了官方简章——英语不是附加题而是专业课的门票；机械每年 60 人的小班规模意味着师生比和资源配比都不错。",action:"把学术英语当成第一门专业课来学，这学期重点突破专业课词汇听力。"},{id:"d5",title:"学院举办机械、交设专业保研经验分享会",summary:"4 月 29 日，邓迪国际学院机械设计制造及其自动化、交通设备与控制工程专业保研经验分享会在潇湘校区举办，邀请成功保研学长学姐分享经验。",date:"2026-05-03",source:"邓迪国际学院官网 · 新闻动态",url:"https://dii.csu.edu.cn/info/1064/3151.htm",tag:"学校要闻",keywords:["保研","机械","绩点","成绩","学长"],impact:"学院已经为机械专业办过保研分享会——说明这条路有先例、有传承。保研看的是前三年的加权成绩，从大一开始每一门课都在记分。",action:"找辅导员要分享会资料或学长联系方式，把 GPA 目标写进你的档案。"},{id:"d6",title:"邓迪国际学院 2025 级本科生转专业名单公示",summary:"按《中南大学本科生转专业工作管理办法》，经自愿申请、资格审核、专家面试，按第一学期两校培养方案课程加权平均成绩从高到低确定名单，5 位同学转入新专业。",date:"2026-03-26",source:"邓迪国际学院官网 · 通知公告",url:"https://dii.csu.edu.cn/info/1036/3115.htm",tag:"招生就业",keywords:["转专业","成绩","绩点","机械","本科"],impact:"转专业唯一硬指标是「加权平均成绩排名」——再次印证大一下的成绩决定选择权（哪怕你不转专业，这个机制也适用于分流和评优）。",action:"弄清加权成绩计算规则，每学期对照排名而不是只看分数。"}],l4=[{name:"邓迪国际学院",url:"https://dii.csu.edu.cn/"},{name:"中南大学招生在线",url:"https://zhaosheng.csu.edu.cn/"},{name:"机械专业介绍",url:"https://dii.csu.edu.cn/zsxx/zsxx/zysz/jxsjzzjqzdh.htm"},{name:"邓迪大学官网",url:"https://www.dundee.ac.uk/"}],Du="family-board-v2",ob="family-board-session",o4="sister-board-v1",s4=[{id:"u-gege",username:"gege",password:"gege123",name:"哥哥",role:"admin"},{id:"u-meimei",username:"meimei",password:"meimei123",name:"妹妹",role:"kid"},{id:"u-didi",username:"didi",password:"didi123",name:"弟弟",role:"kid"},{id:"u-jiujiu",username:"jiujiu",password:"jiujiu123",name:"舅舅舅妈",role:"viewer",viewTarget:"u-didi"}],c4={gege:"9e1cbf0c3387bb43ed99a9b46ddc0d7e203bac67905527bf424cd2fe3ad06260",meimei:"e085c3bdb15636dd830881337c0a507b7404fc20b406da9c4463527266eb6fd8",didi:"c81050a5c556a7d8b6360d0375b7909559f877a9d4f6e6d685f2dfb0318faf6b",jiujiu:"ea4b53904df3ddca8ab333ccd8da142b2a024d1c02b07679410fccdfd82c0cc1"};function Wn(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36)}async function d4(a){const r=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(a));return Array.from(new Uint8Array(r)).map(o=>o.toString(16).padStart(2,"0")).join("")}function sb(){const a=Date.now(),r=u=>a-u*864e5,o=[{id:Wn(),title:"想要一份高数期中复习计划",rawText:"哥哥，我高数期中快到了，想要一份复习计划",category:"高数",feasibility:"high",priority:"high",agentNote:"期中临近，复习计划可行性高，建议哥哥本周内出计划。",nextStep:"哥哥确认后拆成每日任务，同步到学习板块",status:"in_progress",progress:45,createdAt:r(6),updatedAt:r(1),log:[{time:r(6),text:"妹妹通过 University Copilot 提交"},{time:r(5),text:"哥哥已确认，开始制定计划"},{time:r(1),text:"微积分部分已整理完毕，线性代数进行中"}]},{id:Wn(),title:"托福 TPO 真题资料包",rawText:"我想托福听力多练练，能有 TPO 的资料吗",category:"托福",feasibility:"high",priority:"mid",agentNote:"TPO 属公开备考资料，整理成本 low，可优先满足。",nextStep:"哥哥打包 TPO 1-75 听力音频 + 文本网盘链接",status:"approved",progress:10,createdAt:r(4),updatedAt:r(2),log:[{time:r(4),text:"妹妹通过 University Copilot 提交"},{time:r(2),text:"哥哥已同意，准备资料中"}]},{id:Wn(),title:"想换一台新 iPad",rawText:"哥哥我想要个新平板，现在的有点卡了",category:"生活",feasibility:"low",priority:"low",agentNote:"涉及花钱，标为需哥哥人工评估；建议妹妹补充预算和使用场景。",nextStep:"等待哥哥回复评估意见",status:"pending",progress:0,createdAt:r(2),updatedAt:r(2),log:[{time:r(2),text:"妹妹通过 University Copilot 提交"}]}],l=[{id:Wn(),channel:"brother",role:"sister",text:"哥，这周生物实验报告好多😭",createdAt:r(1)+36e5},{id:Wn(),channel:"agent",role:"sister",text:"我想每天背 50 个托福单词，帮我监督一下",createdAt:r(3)},{id:Wn(),channel:"agent",role:"agent",text:"收到！这属于「学习习惯养成」类请求，可行性高。已帮你记入待办清单，会尽快跟进～",createdAt:r(3)+6e4}];return{requests:o,messages:l,studyDone:{m1:!0,m2:!0,b1:!0,t1:!0,t5:!0},profile:Mu}}function cb(){const a=Date.now(),r=f=>a-f*864e5,o={name:"弟弟",grade:"2026 级本科 · 大一",college:"中南大学邓迪国际学院",major:"机械设计制造及其自动化",campus:"邓迪国际学院（全英文授课）",goals:["高数线代打牢","C / Python 双修","英语适应全英文授课","每学期一个共学项目"],interests:["机器人","AI 工具","自动化"]},l=[{id:Wn(),title:"想要一份大一编程学习路线（C + Python）",rawText:"哥，C 语言和 Python 我先学哪个好？想要一份路线",category:"其他",feasibility:"high",priority:"mid",agentNote:"专业要求 C、AI 方向 Python，两者不冲突：C 跟课程走，Python 项目制自学。路线类诉求可行性高。",nextStep:"哥哥整理「C 跟课 + Python 项目」双线计划，配 DMOJ 练习源",status:"in_progress",progress:30,createdAt:r(5),updatedAt:r(1),log:[{time:r(5),text:"弟弟通过 University Copilot 提交"},{time:r(1),text:"路线初稿完成，Python 小项目选题中"}]},{id:Wn(),title:"想要 LLM API 小工具的项目点子",rawText:"哥，这学期共学项目做个调用大模型的小工具，有啥点子",category:"其他",feasibility:"high",priority:"mid",agentNote:"符合「项目制共学」约定，建议从他自己每天有痛点的场景选（课表/作业提醒类）。",nextStep:"哥哥出 3 个候选点子，周末和弟弟对齐",status:"pending",progress:0,createdAt:r(1),updatedAt:r(1),log:[{time:r(1),text:"弟弟通过 University Copilot 提交"}]}],s=[{id:Wn(),channel:"brother",role:"sister",text:"哥，全英文上课有点吃力，专业课词汇听不懂",createdAt:r(2)}];return{requests:l,messages:s,studyDone:{m1:!0},profile:o}}function Fm(){const a=s4.map(({password:o,...l})=>({...l,passHash:c4[l.username]})),r={"u-meimei":sb(),"u-didi":cb()};return{users:a,boards:r}}let Jn=null;const iu=new Set;function xa(){if(Jn)return Jn;try{const a=localStorage.getItem(Du);if(a)return Jn=JSON.parse(a),Jn;const r=localStorage.getItem(o4);if(Jn=Fm(),r)try{const o=JSON.parse(r);Jn.boards["u-meimei"]={...Jn.boards["u-meimei"],...o}}catch{}}catch{Jn=Fm()}return es(),Jn}function es(){try{localStorage.setItem(Du,JSON.stringify(Jn))}catch{}}function Bi(){iu.forEach(a=>a())}function u4(){try{const a=sessionStorage.getItem(ob);if(a)return JSON.parse(a)}catch{}return{userId:null,viewAsId:null}}let je=u4();function Pd(){try{sessionStorage.setItem(ob,JSON.stringify(je))}catch{}}typeof window<"u"&&window.addEventListener("storage",a=>{a.key===Du&&(Jn=null,xa(),Bi())});function p4(a){return iu.add(a),()=>{iu.delete(a)}}function as(){const[,a]=v.useState(0);v.useEffect(()=>p4(()=>a(r=>r+1)),[])}function Gr(){return xa().users.find(r=>r.id===je.userId)??null}function Jr(){const a=Gr();return a?a.role==="admin"?je.viewAsId?je.viewAsId:xa().users.find(o=>o.role==="kid")?.id??a.id:a.role==="viewer"?a.viewTarget??a.id:a.id:"u-meimei"}function is(){as();const a=xa(),r=Gr();return{users:a.users.filter(o=>o.role!=="admin"),currentUser:r,activeUserId:Jr(),viewAsId:je.viewAsId,async login(o,l){const u=xa().users.find(p=>p.username===o.trim().toLowerCase());return u?await d4(`${u.username}:${l}`)!==u.passHash?"密码不对，再试一次":(je={userId:u.id,viewAsId:null},Pd(),Bi(),null):"账号不存在"},logout(){je={userId:null,viewAsId:null},Pd(),Bi()},setViewAs(o){je={...je,viewAsId:o},Pd(),Bi()}}}function ue(){as();const a=xa(),r=Jr();return a.boards[r]||(a.boards[r]={requests:[],messages:[],studyDone:{},profile:Mu},es()),a.boards[r]}function f4(){return as(),Gr()?.role??"kid"}function rs(){return as(),Jr()}function Ha(a){const r=xa(),o=Jr(),l=r.boards[o]??{requests:[],messages:[],studyDone:{},profile:Mu};r.boards[o]=a(l),es(),Bi()}const hn={addRequest(a){const r=Date.now(),o={...a,id:Wn(),status:"pending",progress:0,createdAt:r,updatedAt:r,log:[{time:r,text:"通过 University Copilot 提交"}]};return Ha(l=>({...l,requests:[o,...l.requests]})),o},addMessage(a){const r={...a,id:Wn(),createdAt:Date.now()};return Ha(o=>({...o,messages:[...o.messages,r]})),r},setStatus(a,r){Ha(o=>({...o,requests:o.requests.map(l=>l.id===a?{...l,status:r,updatedAt:Date.now(),log:[...l.log,{time:Date.now(),text:`状态更新为「${qo[r]}」`}]}:l)}))},setProgress(a,r){Ha(o=>({...o,requests:o.requests.map(l=>l.id===a?{...l,progress:r,updatedAt:Date.now()}:l)}))},addLog(a,r){Ha(o=>({...o,requests:o.requests.map(l=>l.id===a?{...l,log:[...l.log,{time:Date.now(),text:`哥哥：${r}`}],updatedAt:Date.now()}:l)}))},toggleStudy(a){Ha(r=>({...r,studyDone:{...r.studyDone,[a]:!r.studyDone[a]}}))},setProfile(a){Ha(r=>({...r,profile:a}))},brotherReply(a){hn.addMessage({channel:"brother",role:"brother",text:a})},reset(a){const r=xa(),o=a??Jr();o==="u-didi"?r.boards[o]=cb():r.boards[o]=sb(),es(),Bi()}},qo={pending:"待评估",approved:"已批准",in_progress:"推进中",done:"已完成",declined:"暂不推进"},h4={pending:"bg-amber-100 text-amber-700 border-amber-200",approved:"bg-sky-100 text-sky-700 border-sky-200",in_progress:"bg-violet-100 text-violet-700 border-violet-200",done:"bg-emerald-100 text-emerald-700 border-emerald-200",declined:"bg-zinc-100 text-zinc-500 border-zinc-200"},g4={招生就业:22,学术科研:16,学校要闻:14,校园生活:8};function m4(a,r){const o=[{text:r.college,label:r.college},{text:r.major,label:r.major},{text:r.campus,label:r.campus},{text:r.grade,label:r.grade},...r.goals.map(u=>({text:u,label:u})),...r.interests.map(u=>({text:u,label:u}))],l=new Set;let s=g4[a.tag];for(const u of a.keywords)for(const f of o)if(u&&f.text&&(f.text.includes(u)||u.includes(f.text))){l.add(u);break}return s+=l.size*18,s=Math.min(100,s),{score:s,hits:Array.from(l),level:s>=55?"高相关":s>=32?"相关":"一般"}}function x4(a){return a.slice(0,7)}function v4({...a}){return h.jsx($v,{"code-path":"src\\components\\ui\\sheet.tsx:8:10","data-slot":"sheet",...a})}function b4({...a}){return h.jsx(Xv,{"code-path":"src\\components\\ui\\sheet.tsx:26:10","data-slot":"sheet-portal",...a})}function y4({className:a,...r}){return h.jsx(Pv,{"code-path":"src\\components\\ui\\sheet.tsx:34:5","data-slot":"sheet-overlay",className:ot("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",a),...r})}function _4({className:a,children:r,side:o="right",...l}){return h.jsxs(b4,{"code-path":"src\\components\\ui\\sheet.tsx:54:5",children:[h.jsx(y4,{"code-path":"src\\components\\ui\\sheet.tsx:55:7"}),h.jsxs(Iv,{"code-path":"src\\components\\ui\\sheet.tsx:56:7","data-slot":"sheet-content",className:ot("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",o==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",o==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",o==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",o==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",a),...l,children:[r,h.jsxs(Zv,{"code-path":"src\\components\\ui\\sheet.tsx:73:9",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[h.jsx(Bx,{"code-path":"src\\components\\ui\\sheet.tsx:74:11",className:"size-4"}),h.jsx("span",{"code-path":"src\\components\\ui\\sheet.tsx:75:11",className:"sr-only",children:"Close"})]})]})]})}function w4({className:a,...r}){return h.jsx("div",{"code-path":"src\\components\\ui\\sheet.tsx:84:5","data-slot":"sheet-header",className:ot("flex flex-col gap-1.5 p-4",a),...r})}function S4({className:a,...r}){return h.jsx(Qv,{"code-path":"src\\components\\ui\\sheet.tsx:107:5","data-slot":"sheet-title",className:ot("text-foreground font-semibold",a),...r})}function C4(a,r=[]){let o=[];function l(u,f){const p=v.createContext(f);p.displayName=u+"Context";const g=o.length;o=[...o,f];const m=b=>{const{scope:w,children:A,...R}=b,C=w?.[a]?.[g]||p,k=v.useMemo(()=>R,Object.values(R));return h.jsx(C.Provider,{value:k,children:A})};m.displayName=u+"Provider";function y(b,w){const A=w?.[a]?.[g]||p,R=v.useContext(A);if(R)return R;if(f!==void 0)return f;throw new Error(`\`${b}\` must be used within \`${u}\``)}return[m,y]}const s=()=>{const u=o.map(f=>v.createContext(f));return function(p){const g=p?.[a]||u;return v.useMemo(()=>({[`__scope${a}`]:{...p,[a]:g}}),[p,g])}};return s.scopeName=a,[l,k4(s,...r)]}function k4(...a){const r=a[0];if(a.length===1)return r;const o=()=>{const l=a.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(u){const f=l.reduce((p,{useScope:g,scopeName:m})=>{const b=g(u)[`__scope${m}`];return{...p,...b}},{});return v.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return o.scopeName=r.scopeName,o}var E4=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Bu=E4.reduce((a,r)=>{const o=Wo(`Primitive.${r}`),l=v.forwardRef((s,u)=>{const{asChild:f,...p}=s,g=f?o:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),h.jsx(g,{...p,ref:u})});return l.displayName=`Primitive.${r}`,{...a,[r]:l}},{}),Id={exports:{}},Qd={};var Ym;function z4(){if(Ym)return Qd;Ym=1;var a=Xo();function r(b,w){return b===w&&(b!==0||1/b===1/w)||b!==b&&w!==w}var o=typeof Object.is=="function"?Object.is:r,l=a.useState,s=a.useEffect,u=a.useLayoutEffect,f=a.useDebugValue;function p(b,w){var A=w(),R=l({inst:{value:A,getSnapshot:w}}),C=R[0].inst,k=R[1];return u(function(){C.value=A,C.getSnapshot=w,g(C)&&k({inst:C})},[b,A,w]),s(function(){return g(C)&&k({inst:C}),b(function(){g(C)&&k({inst:C})})},[b]),f(A),A}function g(b){var w=b.getSnapshot;b=b.value;try{var A=w();return!o(b,A)}catch{return!0}}function m(b,w){return w()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:p;return Qd.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:y,Qd}var Vm;function A4(){return Vm||(Vm=1,Id.exports=z4()),Id.exports}var T4=A4();function R4(){return T4.useSyncExternalStore(N4,()=>!0,()=>!1)}function N4(){return()=>{}}var Lu="Avatar",[j4]=C4(Lu),[M4,db]=j4(Lu),ub=v.forwardRef((a,r)=>{const{__scopeAvatar:o,...l}=a,[s,u]=v.useState("idle");return h.jsx(M4,{scope:o,imageLoadingStatus:s,onImageLoadingStatusChange:u,children:h.jsx(Bu.span,{...l,ref:r})})});ub.displayName=Lu;var pb="AvatarImage",D4=v.forwardRef((a,r)=>{const{__scopeAvatar:o,src:l,onLoadingStatusChange:s=()=>{},...u}=a,f=db(pb,o),p=B4(l,u),g=wn(m=>{s(m),f.onImageLoadingStatusChange(m)});return Be(()=>{p!=="idle"&&g(p)},[p,g]),p==="loaded"?h.jsx(Bu.img,{...u,ref:r,src:l}):null});D4.displayName=pb;var fb="AvatarFallback",hb=v.forwardRef((a,r)=>{const{__scopeAvatar:o,delayMs:l,...s}=a,u=db(fb,o),[f,p]=v.useState(l===void 0);return v.useEffect(()=>{if(l!==void 0){const g=window.setTimeout(()=>p(!0),l);return()=>window.clearTimeout(g)}},[l]),f&&u.imageLoadingStatus!=="loaded"?h.jsx(Bu.span,{...s,ref:r}):null});hb.displayName=fb;function Gm(a,r){return a?r?(a.src!==r&&(a.src=r),a.complete&&a.naturalWidth>0?"loaded":"loading"):"error":"idle"}function B4(a,{referrerPolicy:r,crossOrigin:o}){const l=R4(),s=v.useRef(null),u=l?(s.current||(s.current=new window.Image),s.current):null,[f,p]=v.useState(()=>Gm(u,a));return Be(()=>{p(Gm(u,a))},[u,a]),Be(()=>{const g=b=>()=>{p(b)};if(!u)return;const m=g("loaded"),y=g("error");return u.addEventListener("load",m),u.addEventListener("error",y),r&&(u.referrerPolicy=r),typeof o=="string"&&(u.crossOrigin=o),()=>{u.removeEventListener("load",m),u.removeEventListener("error",y)}},[u,o,r]),f}var L4=ub,O4=hb;function gb({className:a,...r}){return h.jsx(L4,{"code-path":"src\\components\\ui\\avatar.tsx:11:5","data-slot":"avatar",className:ot("relative flex size-8 shrink-0 overflow-hidden rounded-full",a),...r})}function mb({className:a,...r}){return h.jsx(O4,{"code-path":"src\\components\\ui\\avatar.tsx:40:5","data-slot":"avatar-fallback",className:ot("bg-muted flex size-full items-center justify-center rounded-full",a),...r})}function H4(a,[r,o]){return Math.min(o,Math.max(r,a))}function q4(a,r){return v.useReducer((o,l)=>r[o][l]??o,a)}var Ou="ScrollArea",[xb]=Qr(Ou),[U4,In]=xb(Ou),vb=v.forwardRef((a,r)=>{const{__scopeScrollArea:o,type:l="hover",dir:s,scrollHideDelay:u=600,...f}=a,[p,g]=v.useState(null),[m,y]=v.useState(null),[b,w]=v.useState(null),[A,R]=v.useState(null),[C,k]=v.useState(null),[O,Y]=v.useState(0),[F,P]=v.useState(0),[Z,tt]=v.useState(!1),[X,G]=v.useState(!1),at=un(r,St=>g(St)),bt=Su(s);return h.jsx(U4,{scope:o,type:l,dir:bt,scrollHideDelay:u,scrollArea:p,viewport:m,onViewportChange:y,content:b,onContentChange:w,scrollbarX:A,onScrollbarXChange:R,scrollbarXEnabled:Z,onScrollbarXEnabledChange:tt,scrollbarY:C,onScrollbarYChange:k,scrollbarYEnabled:X,onScrollbarYEnabledChange:G,onCornerWidthChange:Y,onCornerHeightChange:P,children:h.jsx(Zt.div,{dir:bt,...f,ref:at,style:{position:"relative","--radix-scroll-area-corner-width":O+"px","--radix-scroll-area-corner-height":F+"px",...a.style}})})});vb.displayName=Ou;var bb="ScrollAreaViewport",yb=v.forwardRef((a,r)=>{const{__scopeScrollArea:o,children:l,nonce:s,...u}=a,f=In(bb,o),p=v.useRef(null),g=un(r,p,f.onViewportChange);return h.jsxs(h.Fragment,{children:[h.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:s}),h.jsx(Zt.div,{"data-radix-scroll-area-viewport":"",...u,ref:g,style:{overflowX:f.scrollbarXEnabled?"scroll":"hidden",overflowY:f.scrollbarYEnabled?"scroll":"hidden",...a.style},children:h.jsx("div",{ref:f.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});yb.displayName=bb;var pe="ScrollAreaScrollbar",_b=v.forwardRef((a,r)=>{const{forceMount:o,...l}=a,s=In(pe,a.__scopeScrollArea),{onScrollbarXEnabledChange:u,onScrollbarYEnabledChange:f}=s,p=a.orientation==="horizontal";return v.useEffect(()=>(p?u(!0):f(!0),()=>{p?u(!1):f(!1)}),[p,u,f]),s.type==="hover"?h.jsx(F4,{...l,ref:r,forceMount:o}):s.type==="scroll"?h.jsx(Y4,{...l,ref:r,forceMount:o}):s.type==="auto"?h.jsx(wb,{...l,ref:r,forceMount:o}):s.type==="always"?h.jsx(Hu,{...l,ref:r}):null});_b.displayName=pe;var F4=v.forwardRef((a,r)=>{const{forceMount:o,...l}=a,s=In(pe,a.__scopeScrollArea),[u,f]=v.useState(!1);return v.useEffect(()=>{const p=s.scrollArea;let g=0;if(p){const m=()=>{window.clearTimeout(g),f(!0)},y=()=>{g=window.setTimeout(()=>f(!1),s.scrollHideDelay)};return p.addEventListener("pointerenter",m),p.addEventListener("pointerleave",y),()=>{window.clearTimeout(g),p.removeEventListener("pointerenter",m),p.removeEventListener("pointerleave",y)}}},[s.scrollArea,s.scrollHideDelay]),h.jsx(Le,{present:o||u,children:h.jsx(wb,{"data-state":u?"visible":"hidden",...l,ref:r})})}),Y4=v.forwardRef((a,r)=>{const{forceMount:o,...l}=a,s=In(pe,a.__scopeScrollArea),u=a.orientation==="horizontal",f=os(()=>g("SCROLL_END"),100),[p,g]=q4("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return v.useEffect(()=>{if(p==="idle"){const m=window.setTimeout(()=>g("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(m)}},[p,s.scrollHideDelay,g]),v.useEffect(()=>{const m=s.viewport,y=u?"scrollLeft":"scrollTop";if(m){let b=m[y];const w=()=>{const A=m[y];b!==A&&(g("SCROLL"),f()),b=A};return m.addEventListener("scroll",w),()=>m.removeEventListener("scroll",w)}},[s.viewport,u,g,f]),h.jsx(Le,{present:o||p!=="hidden",children:h.jsx(Hu,{"data-state":p==="hidden"?"hidden":"visible",...l,ref:r,onPointerEnter:Ft(a.onPointerEnter,()=>g("POINTER_ENTER")),onPointerLeave:Ft(a.onPointerLeave,()=>g("POINTER_LEAVE"))})})}),wb=v.forwardRef((a,r)=>{const o=In(pe,a.__scopeScrollArea),{forceMount:l,...s}=a,[u,f]=v.useState(!1),p=a.orientation==="horizontal",g=os(()=>{if(o.viewport){const m=o.viewport.offsetWidth<o.viewport.scrollWidth,y=o.viewport.offsetHeight<o.viewport.scrollHeight;f(p?m:y)}},10);return Oi(o.viewport,g),Oi(o.content,g),h.jsx(Le,{present:l||u,children:h.jsx(Hu,{"data-state":u?"visible":"hidden",...s,ref:r})})}),Hu=v.forwardRef((a,r)=>{const{orientation:o="vertical",...l}=a,s=In(pe,a.__scopeScrollArea),u=v.useRef(null),f=v.useRef(0),[p,g]=v.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),m=zb(p.viewport,p.content),y={...l,sizes:p,onSizesChange:g,hasThumb:m>0&&m<1,onThumbChange:w=>u.current=w,onThumbPointerUp:()=>f.current=0,onThumbPointerDown:w=>f.current=w};function b(w,A){return I4(w,f.current,p,A)}return o==="horizontal"?h.jsx(V4,{...y,ref:r,onThumbPositionChange:()=>{if(s.viewport&&u.current){const w=s.viewport.scrollLeft,A=$m(w,p,s.dir);u.current.style.transform=`translate3d(${A}px, 0, 0)`}},onWheelScroll:w=>{s.viewport&&(s.viewport.scrollLeft=w)},onDragScroll:w=>{s.viewport&&(s.viewport.scrollLeft=b(w,s.dir))}}):o==="vertical"?h.jsx(G4,{...y,ref:r,onThumbPositionChange:()=>{if(s.viewport&&u.current){const w=s.viewport.scrollTop,A=$m(w,p);u.current.style.transform=`translate3d(0, ${A}px, 0)`}},onWheelScroll:w=>{s.viewport&&(s.viewport.scrollTop=w)},onDragScroll:w=>{s.viewport&&(s.viewport.scrollTop=b(w))}}):null}),V4=v.forwardRef((a,r)=>{const{sizes:o,onSizesChange:l,...s}=a,u=In(pe,a.__scopeScrollArea),[f,p]=v.useState(),g=v.useRef(null),m=un(r,g,u.onScrollbarXChange);return v.useEffect(()=>{g.current&&p(getComputedStyle(g.current))},[g]),h.jsx(Cb,{"data-orientation":"horizontal",...s,ref:m,sizes:o,style:{bottom:0,left:u.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:u.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":ls(o)+"px",...a.style},onThumbPointerDown:y=>a.onThumbPointerDown(y.x),onDragScroll:y=>a.onDragScroll(y.x),onWheelScroll:(y,b)=>{if(u.viewport){const w=u.viewport.scrollLeft+y.deltaX;a.onWheelScroll(w),Tb(w,b)&&y.preventDefault()}},onResize:()=>{g.current&&u.viewport&&f&&l({content:u.viewport.scrollWidth,viewport:u.viewport.offsetWidth,scrollbar:{size:g.current.clientWidth,paddingStart:Fo(f.paddingLeft),paddingEnd:Fo(f.paddingRight)}})}})}),G4=v.forwardRef((a,r)=>{const{sizes:o,onSizesChange:l,...s}=a,u=In(pe,a.__scopeScrollArea),[f,p]=v.useState(),g=v.useRef(null),m=un(r,g,u.onScrollbarYChange);return v.useEffect(()=>{g.current&&p(getComputedStyle(g.current))},[g]),h.jsx(Cb,{"data-orientation":"vertical",...s,ref:m,sizes:o,style:{top:0,right:u.dir==="ltr"?0:void 0,left:u.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":ls(o)+"px",...a.style},onThumbPointerDown:y=>a.onThumbPointerDown(y.y),onDragScroll:y=>a.onDragScroll(y.y),onWheelScroll:(y,b)=>{if(u.viewport){const w=u.viewport.scrollTop+y.deltaY;a.onWheelScroll(w),Tb(w,b)&&y.preventDefault()}},onResize:()=>{g.current&&u.viewport&&f&&l({content:u.viewport.scrollHeight,viewport:u.viewport.offsetHeight,scrollbar:{size:g.current.clientHeight,paddingStart:Fo(f.paddingTop),paddingEnd:Fo(f.paddingBottom)}})}})}),[$4,Sb]=xb(pe),Cb=v.forwardRef((a,r)=>{const{__scopeScrollArea:o,sizes:l,hasThumb:s,onThumbChange:u,onThumbPointerUp:f,onThumbPointerDown:p,onThumbPositionChange:g,onDragScroll:m,onWheelScroll:y,onResize:b,...w}=a,A=In(pe,o),[R,C]=v.useState(null),k=un(r,at=>C(at)),O=v.useRef(null),Y=v.useRef(""),F=A.viewport,P=l.content-l.viewport,Z=wn(y),tt=wn(g),X=os(b,10);function G(at){if(O.current){const bt=at.clientX-O.current.left,St=at.clientY-O.current.top;m({x:bt,y:St})}}return v.useEffect(()=>{const at=bt=>{const St=bt.target;R?.contains(St)&&Z(bt,P)};return document.addEventListener("wheel",at,{passive:!1}),()=>document.removeEventListener("wheel",at,{passive:!1})},[F,R,P,Z]),v.useEffect(tt,[l,tt]),Oi(R,X),Oi(A.content,X),h.jsx($4,{scope:o,scrollbar:R,hasThumb:s,onThumbChange:wn(u),onThumbPointerUp:wn(f),onThumbPositionChange:tt,onThumbPointerDown:wn(p),children:h.jsx(Zt.div,{...w,ref:k,style:{position:"absolute",...w.style},onPointerDown:Ft(a.onPointerDown,at=>{at.button===0&&(at.target.setPointerCapture(at.pointerId),O.current=R.getBoundingClientRect(),Y.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",A.viewport&&(A.viewport.style.scrollBehavior="auto"),G(at))}),onPointerMove:Ft(a.onPointerMove,G),onPointerUp:Ft(a.onPointerUp,at=>{const bt=at.target;bt.hasPointerCapture(at.pointerId)&&bt.releasePointerCapture(at.pointerId),document.body.style.webkitUserSelect=Y.current,A.viewport&&(A.viewport.style.scrollBehavior=""),O.current=null})})})}),Uo="ScrollAreaThumb",kb=v.forwardRef((a,r)=>{const{forceMount:o,...l}=a,s=Sb(Uo,a.__scopeScrollArea);return h.jsx(Le,{present:o||s.hasThumb,children:h.jsx(X4,{ref:r,...l})})}),X4=v.forwardRef((a,r)=>{const{__scopeScrollArea:o,style:l,...s}=a,u=In(Uo,o),f=Sb(Uo,o),{onThumbPositionChange:p}=f,g=un(r,b=>f.onThumbChange(b)),m=v.useRef(void 0),y=os(()=>{m.current&&(m.current(),m.current=void 0)},100);return v.useEffect(()=>{const b=u.viewport;if(b){const w=()=>{if(y(),!m.current){const A=Q4(b,p);m.current=A,p()}};return p(),b.addEventListener("scroll",w),()=>b.removeEventListener("scroll",w)}},[u.viewport,y,p]),h.jsx(Zt.div,{"data-state":f.hasThumb?"visible":"hidden",...s,ref:g,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:Ft(a.onPointerDownCapture,b=>{const A=b.target.getBoundingClientRect(),R=b.clientX-A.left,C=b.clientY-A.top;f.onThumbPointerDown({x:R,y:C})}),onPointerUp:Ft(a.onPointerUp,f.onThumbPointerUp)})});kb.displayName=Uo;var qu="ScrollAreaCorner",Eb=v.forwardRef((a,r)=>{const o=In(qu,a.__scopeScrollArea),l=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&l?h.jsx(P4,{...a,ref:r}):null});Eb.displayName=qu;var P4=v.forwardRef((a,r)=>{const{__scopeScrollArea:o,...l}=a,s=In(qu,o),[u,f]=v.useState(0),[p,g]=v.useState(0),m=!!(u&&p);return Oi(s.scrollbarX,()=>{const y=s.scrollbarX?.offsetHeight||0;s.onCornerHeightChange(y),g(y)}),Oi(s.scrollbarY,()=>{const y=s.scrollbarY?.offsetWidth||0;s.onCornerWidthChange(y),f(y)}),m?h.jsx(Zt.div,{...l,ref:r,style:{width:u,height:p,position:"absolute",right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:0,...a.style}}):null});function Fo(a){return a?parseInt(a,10):0}function zb(a,r){const o=a/r;return isNaN(o)?0:o}function ls(a){const r=zb(a.viewport,a.content),o=a.scrollbar.paddingStart+a.scrollbar.paddingEnd,l=(a.scrollbar.size-o)*r;return Math.max(l,18)}function I4(a,r,o,l="ltr"){const s=ls(o),u=s/2,f=r||u,p=s-f,g=o.scrollbar.paddingStart+f,m=o.scrollbar.size-o.scrollbar.paddingEnd-p,y=o.content-o.viewport,b=l==="ltr"?[0,y]:[y*-1,0];return Ab([g,m],b)(a)}function $m(a,r,o="ltr"){const l=ls(r),s=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,u=r.scrollbar.size-s,f=r.content-r.viewport,p=u-l,g=o==="ltr"?[0,f]:[f*-1,0],m=H4(a,g);return Ab([0,f],[0,p])(m)}function Ab(a,r){return o=>{if(a[0]===a[1]||r[0]===r[1])return r[0];const l=(r[1]-r[0])/(a[1]-a[0]);return r[0]+l*(o-a[0])}}function Tb(a,r){return a>0&&a<r}var Q4=(a,r=()=>{})=>{let o={left:a.scrollLeft,top:a.scrollTop},l=0;return(function s(){const u={left:a.scrollLeft,top:a.scrollTop},f=o.left!==u.left,p=o.top!==u.top;(f||p)&&r(),o=u,l=window.requestAnimationFrame(s)})(),()=>window.cancelAnimationFrame(l)};function os(a,r){const o=wn(a),l=v.useRef(0);return v.useEffect(()=>()=>window.clearTimeout(l.current),[]),v.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(o,r)},[o,r])}function Oi(a,r){const o=wn(r);Be(()=>{let l=0;if(a){const s=new ResizeObserver(()=>{cancelAnimationFrame(l),l=window.requestAnimationFrame(o)});return s.observe(a),()=>{window.cancelAnimationFrame(l),s.unobserve(a)}}},[a,o])}var Z4=vb,K4=yb,J4=Eb;function W4({className:a,children:r,...o}){return h.jsxs(Z4,{"code-path":"src\\components\\ui\\scroll-area.tsx:14:5","data-slot":"scroll-area",className:ot("relative",a),...o,children:[h.jsx(K4,{"code-path":"src\\components\\ui\\scroll-area.tsx:19:7","data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:r}),h.jsx(tC,{"code-path":"src\\components\\ui\\scroll-area.tsx:25:7"}),h.jsx(J4,{"code-path":"src\\components\\ui\\scroll-area.tsx:26:7"})]})}function tC({className:a,orientation:r="vertical",...o}){return h.jsx(_b,{"code-path":"src\\components\\ui\\scroll-area.tsx:37:5","data-slot":"scroll-area-scrollbar",orientation:r,className:ot("flex touch-none p-px transition-colors select-none",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",a),...o,children:h.jsx(kb,{"code-path":"src\\components\\ui\\scroll-area.tsx:50:7","data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}const Rb=[{category:"高数",pattern:/高数|数学|微积分|线代|线性代数|概率|高微/,titleHint:"高数学习相关"},{category:"生物",pattern:/生物|细胞|遗传|基因|实验|生化/,titleHint:"生物学习相关"},{category:"托福",pattern:/托福|toefl|ielts|雅思|听力|口语|出国|留学|gre/i,titleHint:"语言考试相关"},{category:"学校",pattern:/学校|东师|选课|宿舍|食堂|社团|成绩单|转专业|保研|奖学金/,titleHint:"校园事务相关"},{category:"生活",pattern:/平板|手机|电脑|买|衣服|鞋|演唱会|旅游|零花钱|聚餐/,titleHint:"生活消费相关"}],nC=/我想|我要|帮我|能不能|可不可以|希望|想要|需要|麻烦|申请|计划|资料/;function eC(a,r){const o=a.replace(/哥哥|姐|喂|呀|呢|吧|啊|哦|！|!|。|，|,/g,"").trim();return(o.length>24?o.slice(0,24)+"…":o)||Rb.find(s=>s.category===r)?.titleHint||"新的诉求"}function aC(a){const r=a.trim();if(!r)return{kind:"chat",text:"在呢～想说什么都可以，比如「我想……」我就会帮你记下来并跟进。"};if(!nC.test(r))return{kind:"chat",text:"收到～有什么想做的事，直接说「我想……」就行，我会帮你评估可行性并排进待办；如果只是想聊聊，就切到「私信」频道哦。"};let l="其他";for(const w of Rb)if(w.pattern.test(r)){l=w.category;break}const s=/急|马上|明天|后天|截止|ddl|考试|期中|期末|deadline/i.test(r),u=/买|平板|手机|电脑|花钱|经费/.test(r),f=l==="高数"||l==="生物"||l==="托福",p=u?"low":f?"high":"medium",g=s?"high":f?"mid":"low",m=p==="low"?"这件事涉及额外开销，已标记为「需人工评估」，建议结合预算再确认。":p==="high"?s?"时间比较紧，可行性高，建议优先处理。":"可行性高，属于学习计划类诉求，可以推进。":"可行性中等，建议确认细节后再推进。",y=l==="高数"||l==="生物"?"确认后拆成每日学习任务，同步到学习板块打卡":l==="托福"?"整理对应 TPO/资料包，挂到学习板块的托福清单":l==="学校"?"核实学校官方信息后回复":l==="生活"?"等待评估预算与必要性":"等待确认后再安排",b={title:eC(r,l),rawText:r,category:l,feasibility:p,priority:g,agentNote:m,nextStep:y};return{kind:"request",text:`明白啦！我帮你把这件事记下来了 📋
· 分类：${l}
· 可行性：${p==="high"?"高":p==="medium"?"中":"需要再评估"}
· 优先级：${g==="high"?"高":g==="mid"?"中":"低"}
已加入待办清单，处理进度我会随时同步给你～`,request:b}}function iC(a){const r=new Date(a);return`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`}function rC({role:a,text:r,time:o}){const l=a==="sister";return h.jsxs("div",{"code-path":"src\\components\\FloatingChat.tsx:30:5",className:ot("flex gap-2 items-end",l&&"flex-row-reverse"),children:[h.jsx(gb,{"code-path":"src\\components\\FloatingChat.tsx:31:7",className:"h-7 w-7 shrink-0",children:h.jsx(mb,{"code-path":"src\\components\\FloatingChat.tsx:32:9",className:ot("text-[10px]",l?"bg-gradient-to-br from-pink-400 to-rose-500 text-white":a==="brother"?"bg-gradient-to-br from-indigo-400 to-blue-600 text-white":"bg-gradient-to-br from-amber-400 to-orange-500 text-white"),children:l?"我":a==="brother"?"✉":"AI"})}),h.jsxs("div",{"code-path":"src\\components\\FloatingChat.tsx:45:7",className:ot("max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm whitespace-pre-line",l?"bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-br-sm":"bg-white border border-zinc-100 rounded-bl-sm"),children:[r,h.jsx("div",{"code-path":"src\\components\\FloatingChat.tsx:54:9",className:ot("text-[10px] mt-1",l?"text-rose-100":"text-zinc-400"),children:iC(o)})]})]})}function Xm({channel:a,placeholder:r}){const o=ue(),[l,s]=v.useState(""),[u,f]=v.useState(!1),p=v.useRef(null),g=o.messages.filter(y=>y.channel===a);v.useEffect(()=>{p.current?.scrollIntoView({behavior:"smooth"})},[g.length,u]);const m=()=>{const y=l.trim();if(y){if(s(""),hn.addMessage({channel:a,role:"sister",text:y}),a==="brother"){setTimeout(()=>{hn.addMessage({channel:a,role:"agent",text:"已送达 ✉ 对方看到后会回复你，耐心等等哦～"})},600);return}f(!0),setTimeout(()=>{const b=aC(y);b.kind==="request"&&b.request&&hn.addRequest(b.request),hn.addMessage({channel:a,role:"agent",text:b.text}),f(!1)},700+Math.random()*500)}};return h.jsxs("div",{"code-path":"src\\components\\FloatingChat.tsx:109:5",className:"flex flex-col h-full",children:[h.jsx(W4,{"code-path":"src\\components\\FloatingChat.tsx:110:7",className:"flex-1 px-1",children:h.jsxs("div",{"code-path":"src\\components\\FloatingChat.tsx:111:9",className:"flex flex-col gap-3 py-2",children:[a==="brother"&&h.jsx("div",{"code-path":"src\\components\\FloatingChat.tsx:113:13",className:"text-center",children:h.jsxs(Dn,{"code-path":"src\\components\\FloatingChat.tsx:114:15",variant:"secondary",className:"bg-rose-50 text-rose-500 border-rose-100 gap-1",children:[h.jsx(Rx,{"code-path":"src\\components\\FloatingChat.tsx:115:17",className:"h-3 w-3"})," 这里只有你们两个人看得见"]})}),g.map(y=>h.jsx(rC,{"code-path":"src\\components\\FloatingChat.tsx:120:13",role:y.role,text:y.text,time:y.createdAt},y.id)),u&&h.jsxs("div",{"code-path":"src\\components\\FloatingChat.tsx:123:13",className:"flex gap-2 items-end",children:[h.jsx(gb,{"code-path":"src\\components\\FloatingChat.tsx:124:15",className:"h-7 w-7 shrink-0",children:h.jsx(mb,{"code-path":"src\\components\\FloatingChat.tsx:125:17",className:"bg-gradient-to-br from-amber-400 to-orange-500 text-white text-[10px]",children:"AI"})}),h.jsxs("div",{"code-path":"src\\components\\FloatingChat.tsx:129:15",className:"bg-white border border-zinc-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1",children:[h.jsx("span",{"code-path":"src\\components\\FloatingChat.tsx:130:17",className:"w-1.5 h-1.5 rounded-full bg-zinc-300 animate-bounce"}),h.jsx("span",{"code-path":"src\\components\\FloatingChat.tsx:131:17",className:"w-1.5 h-1.5 rounded-full bg-zinc-300 animate-bounce [animation-delay:150ms]"}),h.jsx("span",{"code-path":"src\\components\\FloatingChat.tsx:132:17",className:"w-1.5 h-1.5 rounded-full bg-zinc-300 animate-bounce [animation-delay:300ms]"})]})]}),h.jsx("div",{"code-path":"src\\components\\FloatingChat.tsx:136:11",ref:p})]})}),h.jsxs("div",{"code-path":"src\\components\\FloatingChat.tsx:139:7",className:"pt-2 pb-1 flex gap-2 items-center border-t border-zinc-100 mt-1",children:[h.jsx("input",{"code-path":"src\\components\\FloatingChat.tsx:140:9",value:l,onChange:y=>s(y.target.value),onKeyDown:y=>y.key==="Enter"&&m(),placeholder:r,className:"flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"}),h.jsx(Me,{"code-path":"src\\components\\FloatingChat.tsx:147:9",onClick:m,size:"icon",className:"rounded-full bg-gradient-to-br from-pink-500 to-rose-500 hover:opacity-90 shrink-0",children:h.jsx(_u,{"code-path":"src\\components\\FloatingChat.tsx:152:11",className:"h-4 w-4"})})]})]})}function lC(){const[a,r]=v.useState(!1);return h.jsxs(h.Fragment,{children:[h.jsxs("button",{"code-path":"src\\components\\FloatingChat.tsx:164:7",onClick:()=>r(!0),className:"fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white pl-4 pr-5 py-3.5 shadow-lg shadow-rose-200 active:scale-95 transition-transform","aria-label":"打开 University Copilot",children:[h.jsx(Mx,{"code-path":"src\\components\\FloatingChat.tsx:169:9",className:"h-5 w-5"}),h.jsx("span",{"code-path":"src\\components\\FloatingChat.tsx:170:9",className:"text-sm font-medium",children:"University Copilot"})]}),h.jsx(v4,{"code-path":"src\\components\\FloatingChat.tsx:173:7",open:a,onOpenChange:r,children:h.jsxs(_4,{"code-path":"src\\components\\FloatingChat.tsx:174:9",side:"bottom",className:"h-[78dvh] rounded-t-3xl px-4 pt-3 pb-1 flex flex-col gap-2 sm:max-w-md sm:mx-auto",children:[h.jsx(w4,{"code-path":"src\\components\\FloatingChat.tsx:178:11",className:"flex flex-row items-center justify-between space-y-0",children:h.jsxs(S4,{"code-path":"src\\components\\FloatingChat.tsx:179:13",className:"flex items-center gap-2 text-base",children:[h.jsx("span",{"code-path":"src\\components\\FloatingChat.tsx:180:15",className:"flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white",children:h.jsx(g_,{"code-path":"src\\components\\FloatingChat.tsx:181:17",className:"h-4.5 w-4.5"})}),"University Copilot",h.jsx(Dn,{"code-path":"src\\components\\FloatingChat.tsx:184:15",variant:"secondary",className:"text-[10px] font-normal",children:"原型 · 规则引擎"})]})}),h.jsxs(Eu,{"code-path":"src\\components\\FloatingChat.tsx:190:11",defaultValue:"agent",className:"flex-1 flex flex-col min-h-0",children:[h.jsxs(zu,{"code-path":"src\\components\\FloatingChat.tsx:191:13",className:"grid grid-cols-2 rounded-full bg-zinc-100 p-1",children:[h.jsx(ga,{"code-path":"src\\components\\FloatingChat.tsx:192:15",value:"agent",className:"rounded-full text-sm",children:"🤖 Copilot 助手"}),h.jsx(ga,{"code-path":"src\\components\\FloatingChat.tsx:195:15",value:"brother",className:"rounded-full text-sm",children:"💌 私信"})]}),h.jsx(ma,{"code-path":"src\\components\\FloatingChat.tsx:199:13",value:"agent",className:"flex-1 min-h-0 mt-2 flex flex-col",children:h.jsx(Xm,{"code-path":"src\\components\\FloatingChat.tsx:200:15",channel:"agent",placeholder:"告诉 University Copilot 你想做什么，比如：我想…"})}),h.jsx(ma,{"code-path":"src\\components\\FloatingChat.tsx:202:13",value:"brother",className:"flex-1 min-h-0 mt-2 flex flex-col",children:h.jsx(Xm,{"code-path":"src\\components\\FloatingChat.tsx:203:15",channel:"brother",placeholder:"写点什么…只有你们两个人看得见"})})]})]})})]})}function oC(){const a=new Date().getHours();return a<6?"夜深了":a<12?"早上好":a<18?"下午好":"晚上好"}const Nb={学校要闻:"bg-emerald-50 text-emerald-600",学术科研:"bg-sky-50 text-sky-600",招生就业:"bg-amber-50 text-amber-600",校园生活:"bg-pink-50 text-pink-500"};function sC({n:a}){return h.jsxs(h.Fragment,{children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:54:7",className:"flex items-center justify-between gap-2",children:[h.jsx(Dn,{"code-path":"src\\pages\\Home.tsx:55:9",variant:"secondary",className:ot("text-[10px]",Nb[a.tag]),children:a.tag}),h.jsxs("span",{"code-path":"src\\pages\\Home.tsx:58:9",className:"flex items-center gap-1 text-[11px] text-zinc-400",children:[h.jsx(x_,{"code-path":"src\\pages\\Home.tsx:59:11",className:"h-3 w-3"})," ",a.date]})]}),h.jsx("h3",{"code-path":"src\\pages\\Home.tsx:62:7",className:"mt-2 text-[15px] font-semibold leading-snug text-zinc-800",children:a.title}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:63:7",className:"mt-1 text-xs leading-relaxed text-zinc-500",children:a.summary}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:64:7",className:"mt-2 flex items-center justify-between text-[11px] text-zinc-400",children:[h.jsx("span",{"code-path":"src\\pages\\Home.tsx:65:9",children:a.source}),h.jsx(yu,{"code-path":"src\\pages\\Home.tsx:66:9",className:"h-3.5 w-3.5"})]})]})}function cC(){const a=rs()==="u-didi",r=a?lb:ab,o=a?l4:L5,l=v.useMemo(()=>{const s=[...r].sort((f,p)=>f.date<p.date?1:-1),u=new Map;for(const f of s){const p=x4(f.date);u.has(p)||u.set(p,[]),u.get(p).push(f)}return Array.from(u.entries())},[r]);return h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:90:5",className:"pt-4",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:91:7",className:"rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-4 text-white shadow-sm",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:92:9",className:"flex items-center gap-2 text-sm font-medium opacity-90",children:[h.jsx(Tx,{"code-path":"src\\pages\\Home.tsx:93:11",className:"h-4 w-4"})," ",a?"邓迪学院 · 机械及其自动化":"东师官方资讯"," · 按时间线整理"]}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:95:9",className:"mt-1 text-xs opacity-80",children:"持续从学校官网、招生网等渠道检索，按月份归档，点卡片可看原文。"})]}),h.jsx("div",{"code-path":"src\\pages\\Home.tsx:100:7",className:"mt-5 flex flex-col gap-6",children:l.map(([s,u])=>h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:102:11",className:"flex gap-4",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:104:13",className:"flex w-14 shrink-0 flex-col items-center",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:105:15",className:"rounded-xl bg-emerald-600 px-2 py-1.5 text-center text-[11px] font-bold text-white shadow-sm",children:[s.slice(0,4),h.jsx("br",{"code-path":"src\\pages\\Home.tsx:107:17"}),s.slice(5),"月"]}),h.jsx("div",{"code-path":"src\\pages\\Home.tsx:110:15",className:"mt-1 w-px flex-1 bg-emerald-200"})]}),h.jsx("div",{"code-path":"src\\pages\\Home.tsx:113:13",className:"grid flex-1 grid-cols-1 gap-3 pb-2 lg:grid-cols-2",children:u.map(f=>h.jsx("a",{"code-path":"src\\pages\\Home.tsx:115:17",href:f.url,target:"_blank",rel:"noreferrer",className:"block rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition hover:shadow-md hover:border-emerald-100 h-fit",children:h.jsx(sC,{"code-path":"src\\pages\\Home.tsx:122:19",n:f})},f.id))})]},s))}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:130:7",className:"mt-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:131:9",className:"flex items-center gap-1.5 text-sm font-medium text-zinc-700",children:[h.jsx(H_,{"code-path":"src\\pages\\Home.tsx:132:11",className:"h-4 w-4 text-emerald-600"})," 常用入口"]}),h.jsx("div",{"code-path":"src\\pages\\Home.tsx:134:9",className:"mt-3 flex flex-wrap gap-2",children:o.map(s=>h.jsxs("a",{"code-path":"src\\pages\\Home.tsx:136:13",href:s.url,target:s.url.startsWith("http")?"_blank":void 0,rel:"noreferrer",className:"flex items-center gap-1.5 rounded-full bg-zinc-50 px-3.5 py-2 text-xs text-zinc-600 hover:bg-emerald-50",children:[s.name," ",h.jsx(yu,{"code-path":"src\\pages\\Home.tsx:143:24",className:"h-3 w-3 text-zinc-300"})]},s.name))})]})]})}function dC({open:a,onOpenChange:r}){const o=ue(),[l,s]=v.useState(o.profile),[u,f]=v.useState(o.profile.goals.join("，")),[p,g]=v.useState(o.profile.interests.join("，")),m=w=>w.split(/[,，、;；]/).map(A=>A.trim()).filter(Boolean),y=()=>{hn.setProfile({...l,goals:m(u),interests:m(p)}),r(!1)},b=(w,A)=>h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:177:5",className:"grid gap-1.5",children:[h.jsx(Xd,{"code-path":"src\\pages\\Home.tsx:178:7",className:"text-xs text-zinc-500",children:w}),h.jsx($d,{"code-path":"src\\pages\\Home.tsx:179:7",value:l[A],onChange:R=>s({...l,[A]:R.target.value}),className:"h-9"})]});return h.jsx(h5,{"code-path":"src\\pages\\Home.tsx:188:5",open:a,onOpenChange:r,children:h.jsxs(x5,{"code-path":"src\\pages\\Home.tsx:189:7",className:"sm:max-w-md",children:[h.jsx(v5,{"code-path":"src\\pages\\Home.tsx:190:9",children:h.jsx(y5,{"code-path":"src\\pages\\Home.tsx:191:11",className:"text-base",children:"编辑妹妹档案"})}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:193:9",className:"grid grid-cols-2 gap-3",children:[b("怎么称呼她","name"),b("年级","grade"),b("学院","college"),b("专业","major"),b("校区","campus"),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:199:11",className:"grid gap-1.5",children:[h.jsx(Xd,{"code-path":"src\\pages\\Home.tsx:200:13",className:"text-xs text-zinc-500",children:"目标（用逗号分隔）"}),h.jsx($d,{"code-path":"src\\pages\\Home.tsx:201:13",value:u,onChange:w=>f(w.target.value),className:"h-9"})]}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:203:11",className:"grid gap-1.5 col-span-2",children:[h.jsx(Xd,{"code-path":"src\\pages\\Home.tsx:204:13",className:"text-xs text-zinc-500",children:"兴趣（用逗号分隔）"}),h.jsx($d,{"code-path":"src\\pages\\Home.tsx:205:13",value:p,onChange:w=>g(w.target.value),className:"h-9"})]})]}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:208:9",className:"text-[11px] text-zinc-400",children:"「与我有关」看板会按这份档案重新计算每条资讯的相关度。正式版将由 AI 结合档案逐条撰写解读。"}),h.jsxs(b5,{"code-path":"src\\pages\\Home.tsx:211:9",children:[h.jsx(Me,{"code-path":"src\\pages\\Home.tsx:212:11",variant:"outline",className:"rounded-full",onClick:()=>r(!1),children:"取消"}),h.jsx(Me,{"code-path":"src\\pages\\Home.tsx:215:11",className:"rounded-full bg-emerald-600 hover:bg-emerald-700",onClick:y,children:"保存并重新分析"})]})]})})}function uC({readOnly:a}){const r=ue(),[o,l]=v.useState(!1),s=r.profile,u=rs()==="u-didi"?lb:ab,f=v.useMemo(()=>u.map(g=>({news:g,rel:m4(g,s)})).sort((g,m)=>m.rel.score-g.rel.score||(g.news.date<m.news.date?1:-1)),[u,s]),p=g=>g==="高相关"?"bg-rose-50 text-rose-500 border-rose-100":g==="相关"?"bg-amber-50 text-amber-600 border-amber-100":"bg-zinc-100 text-zinc-400 border-zinc-100";return h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:247:5",className:"pt-4",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:248:7",className:"grid gap-4 lg:grid-cols-[280px_1fr]",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:250:9",className:"flex flex-col gap-3",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:251:11",className:"rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 p-4 text-white shadow-md",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:252:13",className:"flex items-center justify-between",children:[h.jsxs("p",{"code-path":"src\\pages\\Home.tsx:253:15",className:"text-sm font-medium opacity-90",children:["📇 ",s.name,"的档案"]}),!a&&h.jsxs("button",{"code-path":"src\\pages\\Home.tsx:255:17",onClick:()=>l(!0),className:"flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[11px] hover:bg-white/30",children:[h.jsx(Q_,{"code-path":"src\\pages\\Home.tsx:259:19",className:"h-3 w-3"})," 编辑"]})]}),h.jsxs("h3",{"code-path":"src\\pages\\Home.tsx:263:13",className:"mt-2 text-lg font-bold",children:[s.name," · ",s.grade]}),h.jsxs("p",{"code-path":"src\\pages\\Home.tsx:266:13",className:"text-xs text-white/85",children:[s.college," · ",s.major]}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:269:13",className:"text-xs text-white/85",children:s.campus}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:270:13",className:"mt-3",children:[h.jsx("p",{"code-path":"src\\pages\\Home.tsx:271:15",className:"text-[11px] text-white/70",children:"🎯 目标"}),h.jsx("div",{"code-path":"src\\pages\\Home.tsx:272:15",className:"mt-1 flex flex-wrap gap-1",children:s.goals.map(g=>h.jsx("span",{"code-path":"src\\pages\\Home.tsx:274:19",className:"rounded-full bg-white/20 px-2 py-0.5 text-[10px]",children:g},g))})]}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:280:13",className:"mt-2",children:[h.jsx("p",{"code-path":"src\\pages\\Home.tsx:281:15",className:"text-[11px] text-white/70",children:"✨ 兴趣"}),h.jsx("div",{"code-path":"src\\pages\\Home.tsx:282:15",className:"mt-1 flex flex-wrap gap-1",children:s.interests.map(g=>h.jsx("span",{"code-path":"src\\pages\\Home.tsx:284:19",className:"rounded-full bg-white/15 px-2 py-0.5 text-[10px]",children:g},g))})]})]}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:292:11",className:"rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm text-[11px] leading-relaxed text-zinc-500",children:[h.jsxs("p",{"code-path":"src\\pages\\Home.tsx:293:13",className:"flex items-center gap-1 font-medium text-zinc-600 text-xs",children:[h.jsx(Mx,{"code-path":"src\\pages\\Home.tsx:294:15",className:"h-3.5 w-3.5 text-amber-500"})," 这个看板怎么来的"]}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:296:13",className:"mt-1.5",children:"从学校官网抓取资讯后，AI 结合 TA 的档案（专业 / 目标 / 兴趣）逐条解读：判断哪条与 TA 有关、有什么影响、建议做什么。修改档案后相关度会重新计算。"}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:300:13",className:"mt-1.5 text-zinc-400",children:"原型说明：相关度由本地规则引擎打分，解读文字为 AI 预撰写；正式版将接入 LLM 实时分析。"})]})]}),h.jsx("div",{"code-path":"src\\pages\\Home.tsx:305:9",className:"flex flex-col gap-3",children:f.map(({news:g,rel:m})=>h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:307:13",className:"rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition hover:shadow-md",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:311:15",className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:312:17",className:"min-w-0",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:313:19",className:"flex flex-wrap items-center gap-1.5",children:[h.jsx(Dn,{"code-path":"src\\pages\\Home.tsx:314:21",variant:"secondary",className:ot("text-[10px]",Nb[g.tag]),children:g.tag}),h.jsx("span",{"code-path":"src\\pages\\Home.tsx:317:21",className:"text-[11px] text-zinc-400",children:g.date})]}),h.jsxs("a",{"code-path":"src\\pages\\Home.tsx:319:19",href:g.url,target:"_blank",rel:"noreferrer",className:"mt-1.5 block text-[15px] font-semibold leading-snug text-zinc-800 hover:text-emerald-600",children:[g.title," ",h.jsx(yu,{"code-path":"src\\pages\\Home.tsx:325:31",className:"inline h-3 w-3 text-zinc-300"})]})]}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:328:17",className:"flex shrink-0 flex-col items-end gap-1",children:[h.jsxs(Dn,{"code-path":"src\\pages\\Home.tsx:329:19",variant:"outline",className:ot("text-[10px]",p(m.level)),children:[m.level==="高相关"&&h.jsx(j_,{"code-path":"src\\pages\\Home.tsx:330:45",className:"mr-0.5 h-3 w-3"}),m.level]}),h.jsxs("span",{"code-path":"src\\pages\\Home.tsx:333:19",className:"text-[11px] font-medium text-zinc-400",children:[m.score,"%"]})]})]}),h.jsx(Yi,{"code-path":"src\\pages\\Home.tsx:337:15",value:m.score,className:"mt-2 h-1"}),m.hits.length>0&&h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:340:17",className:"mt-2 flex flex-wrap items-center gap-1",children:[h.jsx("span",{"code-path":"src\\pages\\Home.tsx:341:19",className:"text-[10px] text-zinc-400",children:"命中："}),m.hits.map(y=>h.jsx("span",{"code-path":"src\\pages\\Home.tsx:343:21",className:"rounded-full bg-rose-50 px-2 py-0.5 text-[10px] text-rose-500",children:y},y))]}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:350:15",className:"mt-3 grid gap-2 md:grid-cols-2",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:351:17",className:"rounded-xl bg-sky-50/70 border border-sky-100 p-3",children:[h.jsx("p",{"code-path":"src\\pages\\Home.tsx:352:19",className:"text-[11px] font-medium text-sky-600",children:"📌 对你有什么影响"}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:353:19",className:"mt-1 text-xs leading-relaxed text-zinc-600",children:g.impact})]}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:355:17",className:"rounded-xl bg-emerald-50/70 border border-emerald-100 p-3",children:[h.jsxs("p",{"code-path":"src\\pages\\Home.tsx:356:19",className:"text-[11px] font-medium text-emerald-600",children:[h.jsx(Dx,{"code-path":"src\\pages\\Home.tsx:357:21",className:"mr-0.5 inline h-3 w-3"})," 建议行动"]}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:359:19",className:"mt-1 text-xs leading-relaxed text-zinc-600",children:g.action})]})]})]},g.id))})]}),h.jsx(dC,{"code-path":"src\\pages\\Home.tsx:367:7",open:o,onOpenChange:l})]})}function pC({s:a,onOpen:r}){const o=ue(),l=a.tasks.filter(u=>o.studyDone[u.id]).length,s=Math.round(l/a.tasks.length*100);return h.jsxs("button",{"code-path":"src\\pages\\Home.tsx:378:5",onClick:r,className:"relative overflow-hidden rounded-2xl p-4 text-left text-white shadow-md transition hover:shadow-lg",children:[h.jsx("div",{"code-path":"src\\pages\\Home.tsx:382:7",className:ot("absolute inset-0 bg-gradient-to-br",a.color)}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:383:7",className:"relative",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:384:9",className:"flex items-start justify-between",children:[h.jsx("span",{"code-path":"src\\pages\\Home.tsx:385:11",className:"text-2xl",children:a.emoji}),h.jsxs(Dn,{"code-path":"src\\pages\\Home.tsx:386:11",className:"bg-white/20 text-white border-0 text-[10px] hover:bg-white/20",children:[l,"/",a.tasks.length," 完成"]})]}),h.jsx("h3",{"code-path":"src\\pages\\Home.tsx:390:9",className:"mt-2 text-lg font-bold",children:a.name}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:391:9",className:"text-[11px] text-white/80 mt-0.5",children:a.goal}),h.jsx(Yi,{"code-path":"src\\pages\\Home.tsx:392:9",value:s,className:"mt-3 h-1.5 bg-white/25 [&>div]:bg-white"}),h.jsxs("p",{"code-path":"src\\pages\\Home.tsx:393:9",className:"mt-1.5 text-[10px] text-white/75",children:["本周进度 ",s,"%"]})]})]})}function fC({id:a,title:r,emoji:o,chapters:l}){return h.jsxs(Ir,{"code-path":"src\\pages\\Home.tsx:411:5",to:`/book/${a}`,className:"relative overflow-hidden rounded-2xl p-4 text-left text-white shadow-md transition hover:shadow-lg",children:[h.jsx("div",{"code-path":"src\\pages\\Home.tsx:415:7",className:"absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-700"}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:416:7",className:"relative",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:417:9",className:"flex items-start justify-between",children:[h.jsx("span",{"code-path":"src\\pages\\Home.tsx:418:11",className:"text-2xl",children:o??"📖"}),h.jsx(Dn,{"code-path":"src\\pages\\Home.tsx:419:11",className:"bg-white/20 text-white border-0 text-[10px] hover:bg-white/20",children:"教材精读"})]}),h.jsxs("h3",{"code-path":"src\\pages\\Home.tsx:423:9",className:"mt-2 text-lg font-bold",children:["《",r,"》"]}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:424:9",className:"text-[11px] text-white/80 mt-0.5",children:"原文笔记 + 本章测试"}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:425:9",className:"mt-3 flex items-center gap-1.5 text-[10px] text-white/75",children:[h.jsx(Ex,{"code-path":"src\\pages\\Home.tsx:426:11",className:"h-3 w-3"})," 已整理 ",l," 章"]})]})]})}function hC({s:a,onBack:r,readOnly:o}){const l=ue(),s=a.tasks.filter(f=>l.studyDone[f.id]).length,u=Math.round(s/a.tasks.length*100);return h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:447:5",className:"pt-4 flex flex-col gap-3 max-w-2xl",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:448:7",className:ot("rounded-2xl bg-gradient-to-br p-4 text-white shadow-md",a.color),children:[h.jsxs("button",{"code-path":"src\\pages\\Home.tsx:449:9",onClick:r,className:"flex items-center gap-1 text-xs text-white/85",children:[h.jsx(bu,{"code-path":"src\\pages\\Home.tsx:450:11",className:"h-3.5 w-3.5"})," 返回学习首页"]}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:452:9",className:"mt-2 flex items-center gap-2",children:[h.jsx("span",{"code-path":"src\\pages\\Home.tsx:453:11",className:"text-3xl",children:a.emoji}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:454:11",children:[h.jsx("h2",{"code-path":"src\\pages\\Home.tsx:455:13",className:"text-xl font-bold",children:a.name}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:456:13",className:"text-xs text-white/80",children:a.goal})]})]}),h.jsx(Yi,{"code-path":"src\\pages\\Home.tsx:459:9",value:u,className:"mt-3 h-2 bg-white/25 [&>div]:bg-white"}),h.jsxs("p",{"code-path":"src\\pages\\Home.tsx:460:9",className:"mt-1 text-[11px] text-white/80",children:[s,"/",a.tasks.length," · 完成 ",u,"%"]})]}),h.jsx("div",{"code-path":"src\\pages\\Home.tsx:465:7",className:"flex flex-col gap-2",children:a.tasks.map(f=>{const p=!!l.studyDone[f.id];return h.jsxs("button",{"code-path":"src\\pages\\Home.tsx:469:13",onClick:()=>!o&&hn.toggleStudy(f.id),className:ot("flex items-start gap-3 rounded-2xl border bg-white p-3.5 text-left shadow-sm transition-colors",p?"border-emerald-100 bg-emerald-50/40":"border-zinc-100 hover:border-zinc-200",o&&"cursor-default"),children:[p?h.jsx(Ko,{"code-path":"src\\pages\\Home.tsx:479:17",className:"mt-0.5 h-5 w-5 shrink-0 text-emerald-500"}):h.jsx(k_,{"code-path":"src\\pages\\Home.tsx:481:17",className:"mt-0.5 h-5 w-5 shrink-0 text-zinc-300"}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:483:15",className:"flex-1",children:[h.jsx("p",{"code-path":"src\\pages\\Home.tsx:484:17",className:ot("text-sm font-medium",p?"text-zinc-400 line-through":"text-zinc-800"),children:f.title}),f.tip&&h.jsxs("p",{"code-path":"src\\pages\\Home.tsx:487:27",className:"mt-0.5 text-[11px] text-zinc-400",children:["💡 ",f.tip]})]}),h.jsxs(Dn,{"code-path":"src\\pages\\Home.tsx:489:15",variant:"secondary",className:"text-[10px] shrink-0 mt-0.5",children:[f.minutes,"min"]})]},f.id)})}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:497:7",className:"text-center text-[11px] text-zinc-400 pb-20",children:"打卡数据实时同步，完成的每一步都会留下记录 ✨"})]})}function gC({readOnly:a}){const l=rs()==="u-didi"?O5:ib,s=r4(),[u,f]=v.useState(()=>{const g=window.location.hash.match(/#study\/(\w+)/);return g&&l.some(m=>m.id===g[1])?g[1]:null}),p=v.useMemo(()=>l.find(g=>g.id===u),[l,u]);return p?h.jsx(hC,{"code-path":"src\\pages\\Home.tsx:517:12",s:p,onBack:()=>f(null),readOnly:a}):h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:520:5",className:"pt-4 flex flex-col gap-3",children:[l.length>0&&h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:522:9",className:"flex items-center gap-2 rounded-2xl bg-white border border-zinc-100 p-3.5 shadow-sm text-xs text-zinc-500",children:[h.jsx(p_,{"code-path":"src\\pages\\Home.tsx:523:11",className:"h-4 w-4 text-violet-500"}),a?"学习打卡情况（只读）":"每完成一项打一次卡，进度会实时记录～"]}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:527:7",className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:[l.map(g=>h.jsx(pC,{"code-path":"src\\pages\\Home.tsx:529:11",s:g,onOpen:()=>f(g.id)},g.id)),s.map(g=>h.jsx(fC,{"code-path":"src\\pages\\Home.tsx:532:11",id:g.id,title:g.title,emoji:g.emoji,chapters:g.chapters.length},g.id))]}),h.jsx("p",{"code-path":"src\\pages\\Home.tsx:535:7",className:"text-center text-[11px] text-zinc-400",children:"更多学科和教材正在路上；教材点进去就是「原文笔记 + 本章测试」"})]})}function mC(){const a=ue(),r=is(),o=f4(),l=o==="viewer",s=rs()==="u-didi",u=a.requests.filter(f=>f.status==="pending"||f.status==="in_progress").length;return h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:552:5",className:"min-h-dvh bg-zinc-50 pb-28",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:553:7",className:"mx-auto max-w-6xl px-4 sm:px-6",children:[h.jsx("header",{"code-path":"src\\pages\\Home.tsx:555:9",className:"pt-6 pb-2",children:h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:556:11",className:"flex items-center justify-between",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:557:13",children:[h.jsxs("h1",{"code-path":"src\\pages\\Home.tsx:558:15",className:"text-2xl font-bold text-zinc-800",children:["University ",h.jsx("span",{"code-path":"src\\pages\\Home.tsx:559:28",className:"bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent",children:"Copilot"})]}),h.jsxs("p",{"code-path":"src\\pages\\Home.tsx:561:15",className:"mt-0.5 text-xs text-zinc-400",children:[oC(),"，",a.profile.name,l&&h.jsx("span",{"code-path":"src\\pages\\Home.tsx:564:19",className:"ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-400",children:"只读"})]})]}),h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:568:13",className:"flex items-center gap-3",children:[h.jsxs("div",{"code-path":"src\\pages\\Home.tsx:569:15",className:"relative",children:[h.jsx(d_,{"code-path":"src\\pages\\Home.tsx:570:17",className:"h-5 w-5 text-zinc-400"}),u>0&&!l&&h.jsx("span",{"code-path":"src\\pages\\Home.tsx:572:19",className:"absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] text-white",children:u})]}),o==="admin"&&h.jsx(Ir,{"code-path":"src\\pages\\Home.tsx:578:17",to:"/brother",className:"rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-500 shadow-sm hover:border-indigo-200 hover:text-indigo-500",children:"管理看板"}),h.jsx("button",{"code-path":"src\\pages\\Home.tsx:585:15",onClick:r.logout,title:"退出登录",className:"rounded-full border border-zinc-200 bg-white p-2 text-zinc-400 shadow-sm hover:text-rose-500",children:h.jsx(Nx,{"code-path":"src\\pages\\Home.tsx:590:17",className:"h-4 w-4"})})]})]})}),h.jsxs(Eu,{"code-path":"src\\pages\\Home.tsx:596:9",defaultValue:window.location.hash.includes("#study")?"study":window.location.hash.includes("#relevant")?"relevant":"official",onValueChange:f=>history.replaceState(null,"",`#${f}`),children:[h.jsxs(zu,{"code-path":"src\\pages\\Home.tsx:606:11",className:"grid w-full max-w-lg grid-cols-3 rounded-full bg-zinc-200/60 p-1",children:[h.jsxs(ga,{"code-path":"src\\pages\\Home.tsx:607:13",value:"official",className:"rounded-full text-sm",children:["🏫 ",s?"中南官方":"东师官方"]}),h.jsx(ga,{"code-path":"src\\pages\\Home.tsx:610:13",value:"relevant",className:"rounded-full text-sm",children:"🎯 与我有关"}),h.jsx(ga,{"code-path":"src\\pages\\Home.tsx:613:13",value:"study",className:"rounded-full text-sm",children:"📚 学习"})]}),h.jsx(ma,{"code-path":"src\\pages\\Home.tsx:617:11",value:"official",children:h.jsx(cC,{"code-path":"src\\pages\\Home.tsx:618:13"})}),h.jsx(ma,{"code-path":"src\\pages\\Home.tsx:620:11",value:"relevant",children:h.jsx(uC,{"code-path":"src\\pages\\Home.tsx:621:13",readOnly:l})}),h.jsx(ma,{"code-path":"src\\pages\\Home.tsx:623:11",value:"study",children:h.jsx(gC,{"code-path":"src\\pages\\Home.tsx:624:13",readOnly:l})})]})]}),!l&&o==="kid"&&h.jsx(lC,{"code-path":"src\\pages\\Home.tsx:629:39"})]})}const Zd=["pending","approved","in_progress","done","declined"],xC={high:"高优先级",mid:"中优先级",low:"低优先级"},vC={high:"可行性高",medium:"可行性中",low:"需人工把关"};function jb(a){const r=Date.now()-a,o=Math.floor(r/6e4);if(o<1)return"刚刚";if(o<60)return`${o} 分钟前`;const l=Math.floor(o/60);return l<24?`${l} 小时前`:`${Math.floor(l/24)} 天前`}function Ao({label:a,value:r,icon:o,tone:l}){return h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:42:5",className:"rounded-2xl border border-zinc-100 bg-white p-3.5 shadow-sm",children:[h.jsx("div",{"code-path":"src\\pages\\Brother.tsx:43:7",className:ot("flex h-8 w-8 items-center justify-center rounded-xl",l),children:o}),h.jsx("p",{"code-path":"src\\pages\\Brother.tsx:44:7",className:"mt-2 text-2xl font-bold text-zinc-800",children:r}),h.jsx("p",{"code-path":"src\\pages\\Brother.tsx:45:7",className:"text-[11px] text-zinc-400",children:a})]})}function bC({r:a}){const[r,o]=v.useState(""),l=Zd[Math.min(Zd.indexOf(a.status)+1,Zd.length-1)];return h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:55:5",className:"rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm",children:[h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:56:7",className:"flex items-start justify-between gap-2",children:[h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:57:9",children:[h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:58:11",className:"flex flex-wrap items-center gap-1.5",children:[h.jsx(Dn,{"code-path":"src\\pages\\Brother.tsx:59:13",variant:"secondary",className:"bg-indigo-50 text-indigo-600 text-[10px]",children:a.category}),h.jsx(Dn,{"code-path":"src\\pages\\Brother.tsx:62:13",variant:"secondary",className:"text-[10px]",children:xC[a.priority]}),h.jsx(Dn,{"code-path":"src\\pages\\Brother.tsx:65:13",variant:"secondary",className:ot("text-[10px]",a.feasibility==="low"?"bg-rose-50 text-rose-500":"bg-zinc-100 text-zinc-500"),children:vC[a.feasibility]})]}),h.jsx("h3",{"code-path":"src\\pages\\Brother.tsx:72:11",className:"mt-1.5 text-[15px] font-semibold text-zinc-800",children:a.title}),h.jsxs("p",{"code-path":"src\\pages\\Brother.tsx:73:11",className:"mt-0.5 text-xs text-zinc-400",children:["原话：「",a.rawText,"」"]})]}),h.jsx(Dn,{"code-path":"src\\pages\\Brother.tsx:75:9",variant:"outline",className:ot("shrink-0 text-[10px]",h4[a.status]),children:qo[a.status]})]}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:80:7",className:"mt-3 rounded-xl bg-amber-50/60 border border-amber-100 p-3 text-xs text-zinc-600",children:[h.jsx("span",{"code-path":"src\\pages\\Brother.tsx:81:9",className:"font-medium text-amber-600",children:"🤖 管家评估："}),a.agentNote,h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:83:9",className:"mt-1 text-zinc-500",children:["👉 建议下一步：",a.nextStep]})]}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:86:7",className:"mt-3 flex items-center gap-3",children:[h.jsx(Yi,{"code-path":"src\\pages\\Brother.tsx:87:9",value:a.progress,className:"h-2 flex-1"}),h.jsxs("span",{"code-path":"src\\pages\\Brother.tsx:88:9",className:"text-xs font-medium text-zinc-500 w-9 text-right",children:[a.progress,"%"]})]}),h.jsx("input",{"code-path":"src\\pages\\Brother.tsx:90:7",type:"range",min:0,max:100,step:5,value:a.progress,onChange:s=>hn.setProgress(a.id,Number(s.target.value)),className:"mt-1 w-full accent-indigo-500","aria-label":"推进进度"}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:101:7",className:"mt-2 flex flex-wrap gap-2",children:[a.status!=="done"&&h.jsxs(Me,{"code-path":"src\\pages\\Brother.tsx:103:11",size:"sm",onClick:()=>hn.setStatus(a.id,l),className:"rounded-full bg-indigo-500 hover:bg-indigo-600 h-8",children:["推进到「",qo[l],"」"]}),a.status!=="declined"&&a.status!=="done"&&h.jsx(Me,{"code-path":"src\\pages\\Brother.tsx:112:11",size:"sm",variant:"outline",onClick:()=>hn.setStatus(a.id,"declined"),className:"rounded-full h-8 text-zinc-500",children:"暂不推进"}),a.status==="done"&&h.jsxs("span",{"code-path":"src\\pages\\Brother.tsx:122:11",className:"flex items-center gap-1 text-xs text-emerald-600",children:[h.jsx(Ko,{"code-path":"src\\pages\\Brother.tsx:123:13",className:"h-4 w-4"})," 已完成，干得漂亮"]})]}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:128:7",className:"mt-3",children:[h.jsx("p",{"code-path":"src\\pages\\Brother.tsx:129:9",className:"text-[11px] font-medium text-zinc-500 mb-1.5",children:"推进时间线"}),h.jsx("div",{"code-path":"src\\pages\\Brother.tsx:130:9",className:"flex flex-col gap-1.5",children:a.log.slice(-4).map((s,u)=>h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:132:13",className:"flex items-start gap-2 text-[11px] text-zinc-500",children:[h.jsx(Ax,{"code-path":"src\\pages\\Brother.tsx:133:15",className:"mt-0.5 h-3 w-3 shrink-0 text-zinc-300"}),h.jsxs("span",{"code-path":"src\\pages\\Brother.tsx:134:15",children:[s.text," ",h.jsxs("span",{"code-path":"src\\pages\\Brother.tsx:135:26",className:"text-zinc-300",children:["· ",jb(s.time)]})]})]},u))}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:140:9",className:"mt-2 flex gap-2",children:[h.jsx("input",{"code-path":"src\\pages\\Brother.tsx:141:11",value:r,onChange:s=>o(s.target.value),onKeyDown:s=>{s.key==="Enter"&&r.trim()&&(hn.addLog(a.id,r.trim()),o(""))},placeholder:"记一条进展（回车提交，妹妹可见）",className:"flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs outline-none focus:border-indigo-300"}),h.jsx(Me,{"code-path":"src\\pages\\Brother.tsx:153:11",size:"icon",variant:"outline",className:"h-7 w-7 rounded-full",onClick:()=>{r.trim()&&(hn.addLog(a.id,r.trim()),o(""))},children:h.jsx(_u,{"code-path":"src\\pages\\Brother.tsx:164:13",className:"h-3 w-3"})})]})]})]})}function yC(){const a=ue(),r=v.useMemo(()=>{const l={pending:0,approved:0,in_progress:0,done:0,declined:0};return a.requests.forEach(s=>l[s.status]++),l},[a.requests]),o=Date.now()-7*864e5;return h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:183:5",className:"flex flex-col gap-3 pt-3",children:[h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:184:7",className:"grid grid-cols-4 gap-2",children:[h.jsx(Ao,{"code-path":"src\\pages\\Brother.tsx:185:9",label:"待评估",value:r.pending,icon:h.jsx(Ax,{"code-path":"src\\pages\\Brother.tsx:185:60",className:"h-4 w-4 text-amber-500"}),tone:"bg-amber-50"}),h.jsx(Ao,{"code-path":"src\\pages\\Brother.tsx:186:9",label:"推进中",value:r.approved+r.in_progress,icon:h.jsx(aw,{"code-path":"src\\pages\\Brother.tsx:186:82",className:"h-4 w-4 text-violet-500"}),tone:"bg-violet-50"}),h.jsx(Ao,{"code-path":"src\\pages\\Brother.tsx:187:9",label:"已完成",value:r.done,icon:h.jsx(Ko,{"code-path":"src\\pages\\Brother.tsx:187:57",className:"h-4 w-4 text-emerald-500"}),tone:"bg-emerald-50"}),h.jsx(Ao,{"code-path":"src\\pages\\Brother.tsx:188:9",label:"本周新增",value:a.requests.filter(l=>l.createdAt>o).length,icon:h.jsx(U_,{"code-path":"src\\pages\\Brother.tsx:188:105",className:"h-4 w-4 text-sky-500"}),tone:"bg-sky-50"})]}),h.jsx("div",{"code-path":"src\\pages\\Brother.tsx:192:7",className:"flex h-2.5 w-full overflow-hidden rounded-full bg-zinc-100",children:["pending","approved","in_progress","done"].map(l=>{const s=Math.max(a.requests.length,1),u=r[l]/s*100;return u?h.jsx("div",{"code-path":"src\\pages\\Brother.tsx:198:13",className:ot(l==="pending"&&"bg-amber-400",l==="approved"&&"bg-sky-400",l==="in_progress"&&"bg-violet-400",l==="done"&&"bg-emerald-400"),style:{width:`${u}%`},title:`${qo[l]} ${r[l]}`},l):null})}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:213:7",className:"flex items-center justify-between pt-1",children:[h.jsxs("p",{"code-path":"src\\pages\\Brother.tsx:214:9",className:"text-xs font-medium text-zinc-500",children:[a.profile.name,"的诉求清单（按提交时间排序）"]}),h.jsxs(Me,{"code-path":"src\\pages\\Brother.tsx:215:9",size:"sm",variant:"ghost",className:"h-7 text-[11px] text-zinc-400",onClick:()=>{window.confirm("清空全部数据并恢复演示初始状态？")&&hn.reset()},children:[h.jsx(jx,{"code-path":"src\\pages\\Brother.tsx:223:11",className:"h-3 w-3 mr-1"})," 重置演示数据"]})]}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:227:7",className:"flex flex-col gap-3",children:[a.requests.map(l=>h.jsx(bC,{"code-path":"src\\pages\\Brother.tsx:229:11",r:l},l.id)),a.requests.length===0&&h.jsxs("p",{"code-path":"src\\pages\\Brother.tsx:232:11",className:"py-10 text-center text-sm text-zinc-400",children:["还没有诉求，",a.profile.name,"跟 University Copilot 说「我想…」就会出现在这里"]})]})]})}function _C(){const a=ue();return h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:244:5",className:"flex flex-col gap-3 pt-3",children:[ib.map(r=>{const o=r.tasks.filter(s=>a.studyDone[s.id]).length,l=Math.round(o/r.tasks.length*100);return h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:249:11",className:"rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm",children:[h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:250:13",className:"flex items-center justify-between",children:[h.jsxs("p",{"code-path":"src\\pages\\Brother.tsx:251:15",className:"text-sm font-semibold text-zinc-700",children:[r.emoji," ",r.name]}),h.jsxs("span",{"code-path":"src\\pages\\Brother.tsx:254:15",className:"text-xs text-zinc-400",children:[o,"/",r.tasks.length]})]}),h.jsx(Yi,{"code-path":"src\\pages\\Brother.tsx:258:13",value:l,className:"mt-2.5 h-2"}),h.jsx("div",{"code-path":"src\\pages\\Brother.tsx:259:13",className:"mt-2 flex flex-wrap gap-1.5",children:r.tasks.map(s=>h.jsxs(Dn,{"code-path":"src\\pages\\Brother.tsx:261:17",variant:"secondary",className:ot("text-[10px] font-normal",a.studyDone[s.id]?"bg-emerald-50 text-emerald-600":"bg-zinc-100 text-zinc-400"),children:[a.studyDone[s.id]?"✓ ":"",s.title.split("·")[0]]},s.id))})]},r.id)}),h.jsx("p",{"code-path":"src\\pages\\Brother.tsx:277:7",className:"text-center text-[11px] text-zinc-400",children:"学习打卡来自妹妹端的「学习」板块，实时同步"})]})}function wC(){const a=ue(),[r,o]=v.useState(""),l=a.messages.filter(s=>s.channel==="brother");return h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:288:5",className:"flex flex-col gap-2 pt-3",children:[h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:289:7",className:"rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm",children:[h.jsxs("p",{"code-path":"src\\pages\\Brother.tsx:290:9",className:"text-[11px] text-zinc-400 mb-3",children:["💌 ",a.profile.name,"在「私信」频道说的话"]}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:293:9",className:"flex flex-col gap-2",children:[l.length===0&&h.jsx("p",{"code-path":"src\\pages\\Brother.tsx:294:33",className:"text-xs text-zinc-400 py-4 text-center",children:"还没有悄悄话"}),l.map(s=>h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:296:13",className:"flex gap-2 items-start",children:[h.jsx("span",{"code-path":"src\\pages\\Brother.tsx:297:15",className:"mt-0.5 text-sm",children:s.role==="sister"?"👧":"💬"}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:298:15",className:"rounded-xl bg-zinc-50 px-3 py-2 text-sm text-zinc-700 flex-1",children:[s.text,h.jsx("span",{"code-path":"src\\pages\\Brother.tsx:300:17",className:"ml-2 text-[10px] text-zinc-300",children:jb(s.createdAt)})]})]},s.id))]})]}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:306:7",className:"flex gap-2",children:[h.jsx("input",{"code-path":"src\\pages\\Brother.tsx:307:9",value:r,onChange:s=>o(s.target.value),onKeyDown:s=>{s.key==="Enter"&&r.trim()&&(hn.brotherReply(r.trim()),o(""))},placeholder:`以哥哥身份回复${a.profile.name}…（回车发送）`,className:"flex-1 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-rose-300 shadow-sm"}),h.jsx(Me,{"code-path":"src\\pages\\Brother.tsx:319:9",className:"rounded-full bg-gradient-to-br from-indigo-500 to-blue-600",onClick:()=>{r.trim()&&(hn.brotherReply(r.trim()),o(""))},children:h.jsx(_u,{"code-path":"src\\pages\\Brother.tsx:328:11",className:"h-4 w-4"})})]})]})}function SC(){const a=is(),r=ue(),o=a.users.filter(l=>l.role==="kid");return h.jsx("div",{"code-path":"src\\pages\\Brother.tsx:341:5",className:"min-h-dvh bg-zinc-100/70 pb-12",children:h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:342:7",className:"mx-auto max-w-4xl px-4 sm:px-6",children:[h.jsxs("header",{"code-path":"src\\pages\\Brother.tsx:343:9",className:"pt-6 pb-2",children:[h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:344:11",className:"flex items-center justify-between",children:[h.jsxs(Ir,{"code-path":"src\\pages\\Brother.tsx:345:13",to:"/",className:"flex items-center gap-1 text-xs text-zinc-400",children:[h.jsx(bu,{"code-path":"src\\pages\\Brother.tsx:346:15",className:"h-3.5 w-3.5"})," 返回"]}),h.jsxs("button",{"code-path":"src\\pages\\Brother.tsx:348:13",onClick:a.logout,className:"flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-500 shadow-sm hover:text-rose-500",children:[h.jsx(Nx,{"code-path":"src\\pages\\Brother.tsx:352:15",className:"h-3.5 w-3.5"})," 退出登录"]})]}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:355:11",className:"mt-2 flex flex-wrap items-center justify-between gap-2",children:[h.jsxs("h1",{"code-path":"src\\pages\\Brother.tsx:356:13",className:"text-2xl font-bold text-zinc-800",children:["哥哥的工作看板"," ",h.jsx("span",{"code-path":"src\\pages\\Brother.tsx:358:15",className:"ml-1 align-middle text-[10px] font-normal text-zinc-400 border rounded-full px-2 py-0.5",children:"BI · 原型"})]}),h.jsx(Rx,{"code-path":"src\\pages\\Brother.tsx:362:13",className:"h-5 w-5 text-rose-400"})]}),h.jsxs("div",{"code-path":"src\\pages\\Brother.tsx:366:11",className:"mt-3 flex gap-2",children:[o.map(l=>h.jsxs("button",{"code-path":"src\\pages\\Brother.tsx:368:15",onClick:()=>a.setViewAs(l.id),className:ot("rounded-full border px-4 py-1.5 text-sm transition",a.activeUserId===l.id?"border-indigo-400 bg-indigo-50 text-indigo-600 font-medium":"border-zinc-200 bg-white text-zinc-500 hover:border-indigo-200"),children:[l.id==="u-meimei"?"👧":"👦"," ",l.name]},l.id)),h.jsxs("span",{"code-path":"src\\pages\\Brother.tsx:381:13",className:"self-center text-[11px] text-zinc-400",children:["当前查看：",r.profile.name," 的数据"]})]}),h.jsx("p",{"code-path":"src\\pages\\Brother.tsx:386:11",className:"mt-2 text-xs text-zinc-400",children:"各人的诉求、学习进度和悄悄话实时汇总在这里；切到谁就看谁的板。"})]}),h.jsxs(Eu,{"code-path":"src\\pages\\Brother.tsx:391:9",defaultValue:"board",children:[h.jsxs(zu,{"code-path":"src\\pages\\Brother.tsx:392:11",className:"grid w-full grid-cols-3 rounded-full bg-zinc-200/60 p-1",children:[h.jsxs(ga,{"code-path":"src\\pages\\Brother.tsx:393:13",value:"board",className:"rounded-full text-xs sm:text-sm",children:[h.jsx(tw,{"code-path":"src\\pages\\Brother.tsx:394:15",className:"h-3.5 w-3.5 mr-1"})," 诉求看板"]}),h.jsx(ga,{"code-path":"src\\pages\\Brother.tsx:396:13",value:"study",className:"rounded-full text-xs sm:text-sm",children:"📊 学习进度"}),h.jsxs(ga,{"code-path":"src\\pages\\Brother.tsx:399:13",value:"chat",className:"rounded-full text-xs sm:text-sm",children:[h.jsx(P_,{"code-path":"src\\pages\\Brother.tsx:400:15",className:"h-3.5 w-3.5 mr-1"})," 悄悄话"]})]}),h.jsx(ma,{"code-path":"src\\pages\\Brother.tsx:403:11",value:"board",children:h.jsx(yC,{"code-path":"src\\pages\\Brother.tsx:404:13"})}),h.jsx(ma,{"code-path":"src\\pages\\Brother.tsx:406:11",value:"study",children:h.jsx(_C,{"code-path":"src\\pages\\Brother.tsx:407:13"})}),h.jsx(ma,{"code-path":"src\\pages\\Brother.tsx:409:11",value:"chat",children:h.jsx(wC,{"code-path":"src\\pages\\Brother.tsx:410:13"})})]})]})})}function CC(){const a=is(),r=Xr(),o=Pn(),[l]=K2(),[s,u]=v.useState(""),[f,p]=v.useState(""),[g,m]=v.useState(null),[y,b]=v.useState(!1);v.useEffect(()=>{const A=l.get("u"),R=l.get("p");A&&R&&a.login(A,R).then(C=>{if(C)return;const k=Gr(),O=o.pathname==="/"&&k?.role==="admin"?"/brother":o.pathname+o.search+o.hash;r(O,{replace:!0})})},[]);const w=async()=>{b(!0),m(null);const A=await a.login(s,f);b(!1),A?m(A):r((Gr()?.role==="admin"?"/brother":"/")+window.location.hash,{replace:!0})};return h.jsx("div",{"code-path":"src\\pages\\Login.tsx:49:5",className:"flex min-h-dvh items-center justify-center bg-gradient-to-br from-zinc-100 via-white to-rose-50 px-4",children:h.jsx("div",{"code-path":"src\\pages\\Login.tsx:50:7",className:"w-full max-w-sm",children:h.jsxs("div",{"code-path":"src\\pages\\Login.tsx:51:9",className:"rounded-3xl border border-zinc-100 bg-white p-8 shadow-xl shadow-zinc-200",children:[h.jsxs("div",{"code-path":"src\\pages\\Login.tsx:52:11",className:"text-center",children:[h.jsx("div",{"code-path":"src\\pages\\Login.tsx:53:13",className:"mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-rose-200",children:h.jsx(Tx,{"code-path":"src\\pages\\Login.tsx:54:15",className:"h-7 w-7"})}),h.jsxs("h1",{"code-path":"src\\pages\\Login.tsx:56:13",className:"mt-4 text-2xl font-bold text-zinc-800",children:["University"," ",h.jsx("span",{"code-path":"src\\pages\\Login.tsx:58:15",className:"bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent",children:"Copilot"})]})]}),h.jsxs("div",{"code-path":"src\\pages\\Login.tsx:64:11",className:"mt-7 flex flex-col gap-3",children:[h.jsxs("div",{"code-path":"src\\pages\\Login.tsx:65:13",className:"relative",children:[h.jsx(rw,{"code-path":"src\\pages\\Login.tsx:66:15",className:"absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-300"}),h.jsx("input",{"code-path":"src\\pages\\Login.tsx:67:15",value:s,onChange:A=>u(A.target.value),onKeyDown:A=>A.key==="Enter"&&w(),placeholder:"账号",autoComplete:"username",className:"h-12 w-full rounded-2xl border border-zinc-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"})]}),h.jsxs("div",{"code-path":"src\\pages\\Login.tsx:76:13",className:"relative",children:[h.jsx(L_,{"code-path":"src\\pages\\Login.tsx:77:15",className:"absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-300"}),h.jsx("input",{"code-path":"src\\pages\\Login.tsx:78:15",type:"password",value:f,onChange:A=>p(A.target.value),onKeyDown:A=>A.key==="Enter"&&w(),placeholder:"密码",autoComplete:"current-password",className:"h-12 w-full rounded-2xl border border-zinc-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"})]}),g&&h.jsx("p",{"code-path":"src\\pages\\Login.tsx:88:23",className:"text-center text-xs text-rose-500",children:g}),h.jsxs(Me,{"code-path":"src\\pages\\Login.tsx:89:13",onClick:w,disabled:y,className:"mt-1 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-sm font-medium hover:opacity-90",children:[h.jsx(G_,{"code-path":"src\\pages\\Login.tsx:94:15",className:"mr-1.5 h-4 w-4"})," ",y?"登录中…":"登 录"]})]})]})})})}function Uu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ga=Uu();function Mb(a){Ga=a}var qa={exec:()=>null};function Mi(a){let r=[];return o=>{let l=Math.max(0,Math.min(3,o-1)),s=r[l];return s||(s=a(l),r[l]=s),s}}function ut(a,r=""){let o=typeof a=="string"?a:a.source,l={replace:(s,u)=>{let f=typeof u=="string"?u:u.source;return f=f.replace(dn.caret,"$1"),o=o.replace(s,f),l},getRegex:()=>new RegExp(o,r)};return l}var kC=((a="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+a)}catch{return!1}})(),dn={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Mi(a=>new RegExp(`^ {0,${a}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Mi(a=>new RegExp(`^ {0,${a}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:Mi(a=>new RegExp(`^ {0,${a}}(?:\`\`\`|~~~)`)),headingBeginRegex:Mi(a=>new RegExp(`^ {0,${a}}#`)),htmlBeginRegex:Mi(a=>new RegExp(`^ {0,${a}}(?:</?(?:${tl})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`,"i")),blockquoteBeginRegex:Mi(a=>new RegExp(`^ {0,${a}}>`))},EC=/^(?:[ \t]*(?:\n|$))+/,zC=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,AC=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Wr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,TC=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Fu=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Db=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Bb=ut(Db).replace(/bull/g,Fu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),RC=ut(Db).replace(/bull/g,Fu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Yu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,NC=/^[^\n]+/,Vu=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,jC=ut(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Vu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),MC=ut(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Fu).getRegex(),tl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Gu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,DC=ut("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Gu).replace("tag",tl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Lb=a=>ut(Yu).replace("hr",Wr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",a).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tl).getRegex(),BC=Lb(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),LC=Lb(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),OC=ut(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",LC).getRegex(),$u={blockquote:OC,code:zC,def:jC,fences:AC,heading:TC,hr:Wr,html:DC,lheading:Bb,list:MC,newline:EC,paragraph:BC,table:qa,text:NC},Pm=ut("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Wr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tl).getRegex(),HC={...$u,lheading:RC,table:Pm,paragraph:ut(Yu).replace("hr",Wr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Pm).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tl).getRegex()},qC={...$u,html:ut(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Gu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:qa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ut(Yu).replace("hr",Wr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Bb).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},UC=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,FC=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ob=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,YC=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Oe=/[\p{P}\p{S}]/u,Vi=/[\s\p{P}\p{S}]/u,nl=/[^\s\p{P}\p{S}]/u,VC=ut(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Vi).getRegex(),GC=/[\p{Pi}\p{Ps}"']/u,Hb=/(?!~)[\p{P}\p{S}]/u,$C=/(?!~)[\s\p{P}\p{S}]/u,XC=/(?:[^\s\p{P}\p{S}]|~)/u,PC=ut(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",kC?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),qb=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,IC=ut(qb,"u").replace(/punct/g,Oe).getRegex(),QC=ut(qb,"u").replace(/punct/g,Hb).getRegex(),ZC=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,KC=ut(ZC,"u").replace(/openQuote/g,GC).replace(/punct/g,Oe).getRegex(),Ub="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",JC=ut(Ub,"gu").replace(/notPunctSpace/g,nl).replace(/punctSpace/g,Vi).replace(/punct/g,Oe).getRegex(),WC=ut(Ub,"gu").replace(/notPunctSpace/g,XC).replace(/punctSpace/g,$C).replace(/punct/g,Hb).getRegex(),tk="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",nk=ut(tk,"gu").replace(/notPunctSpace/g,nl).replace(/punctSpace/g,Vi).replace(/punct/g,Oe).getRegex(),ek=ut("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,nl).replace(/punctSpace/g,Vi).replace(/punct/g,Oe).getRegex(),ak="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",ik=ut(ak,"gu").replace(/notPunctSpace/g,nl).replace(/punctSpace/g,Vi).replace(/punct/g,Oe).getRegex(),rk=ut(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Oe).getRegex(),lk="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",ok=ut(lk,"gu").replace(/notPunctSpace/g,nl).replace(/punctSpace/g,Vi).replace(/punct/g,Oe).getRegex(),sk=ut(/\\(punct)/,"gu").replace(/punct/g,Oe).getRegex(),ck=ut(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),dk=ut(Gu).replace("(?:-->|$)","-->").getRegex(),uk=ut("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",dk).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Fb=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Yo=ut(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Fb).getRegex(),pk=ut(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Yo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),fk=ut(/^!?\[(label)\]\[(ref)\]/).replace("label",Yo).replace("ref",Vu).getRegex(),hk=ut(/^!?\[(ref)\](?:\[\])?/).replace("ref",Vu).getRegex(),Im=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,gk=ut(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",Fb).getRegex(),mk=ut("reflink|nolink(?!\\()","g").replace("reflink",ut(/^!?\[(label)\]\[(ref)\]/).replace("label",gk).replace("ref",Im).getRegex()).replace("nolink",ut(/^!?\[(ref)\](?:\[\])?/).replace("ref",Im).getRegex()).getRegex(),Qm=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Xu={_backpedal:qa,anyPunctuation:sk,autolink:ck,blockSkip:PC,br:Ob,code:FC,del:qa,delLDelim:qa,delRDelim:qa,emStrongLDelim:IC,emStrongRDelimAst:JC,emStrongRDelimUnd:ek,escape:UC,link:pk,nolink:hk,punctuation:VC,reflink:fk,reflinkSearch:mk,tag:uk,text:YC,url:qa},xk={...Xu,emStrongLDelim:KC,emStrongRDelimAst:nk,emStrongRDelimUnd:ik,link:ut(/^!?\[(label)\]\((.*?)\)/).replace("label",Yo).getRegex(),reflink:ut(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Yo).getRegex()},ru={...Xu,emStrongRDelimAst:WC,emStrongLDelim:QC,delLDelim:rk,delRDelim:ok,url:ut(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Qm).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ut(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Qm).getRegex()},vk={...ru,br:ut(Ob).replace("{2,}","*").getRegex(),text:ut(ru.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},To={normal:$u,gfm:HC,pedantic:qC},Ur={normal:Xu,gfm:ru,breaks:vk,pedantic:xk},bk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zm=a=>bk[a];function Mn(a,r){if(r){if(dn.escapeTest.test(a))return a.replace(dn.escapeReplace,Zm)}else if(dn.escapeTestNoEncode.test(a))return a.replace(dn.escapeReplaceNoEncode,Zm);return a}function Km(a){try{a=encodeURI(a).replace(dn.percentDecode,"%")}catch{return null}return a}function Jm(a,r){let o=a.replace(dn.findPipe,(u,f,p)=>{let g=!1,m=f;for(;--m>=0&&p[m]==="\\";)g=!g;return g?"|":" |"}),l=o.split(dn.splitPipe),s=0;if(l[0].trim()||l.shift(),l.length>0&&!l.at(-1)?.trim()&&l.pop(),r)if(l.length>r)l.splice(r);else for(;l.length<r;)l.push("");for(;s<l.length;s++)l[s]=l[s].trim().replace(dn.slashPipe,"|");return l}function pa(a,r,o){let l=a.length;if(l===0)return"";let s=0;for(;s<l&&a.charAt(l-s-1)===r;)s++;return a.slice(0,l-s)}function Wm(a){let r=a.split(`
`),o=r.length-1;for(;o>=0&&dn.blankLine.test(r[o]);)o--;return r.length-o<=2?a:r.slice(0,o+1).join(`
`)}function Vo(a){return a.toLowerCase().toUpperCase().toLowerCase()}function yk(a,r){if(a.indexOf(r[1])===-1)return-1;let o=0;for(let l=0;l<a.length;l++)if(a[l]==="\\")l++;else if(a[l]===r[0])o++;else if(a[l]===r[1]&&(o--,o<0))return l;return o>0?-2:-1}function _k(a,r=0){let o=r,l="";for(let s of a)if(s==="	"){let u=4-o%4;l+=" ".repeat(u),o+=u}else l+=s,o++;return l}function tx(a,r,o,l,s){let u=r.href,f=r.title||null,p=a[1].replace(s.other.outputLinkReplace,"$1"),g=a[0].charAt(0)==="!";l.state.inLink=!0;let m=l.state.linkEmitted,y=l.state.inRawBlock;l.state.linkEmitted=!1;let b=l.inlineTokens(p),w=l.state.linkEmitted;if(l.state.linkEmitted=m,l.state.inLink=!1,!g){if(w){l.state.inRawBlock=y;return}l.state.linkEmitted=!0}return{type:g?"image":"link",raw:o,href:u,title:f,text:p,tokens:b}}function wk(a,r,o){let l=a.match(o.other.indentCodeCompensation);if(l===null)return r;let s=l[1];return r.split(`
`).map(u=>{let f=u.match(o.other.beginningSpace);if(f===null)return u;let[p]=f;return u.slice(Math.min(p.length,s.length))}).join(`
`)}function nx(a,r,o,l){if(!r.includes("<"))return!1;for(let s=0;s<r.length;s++){if(r[s]==="\\"){s++;continue}if(r[s]==="`"){let p=l.inline.code.exec(r.slice(s));if(p){s+=p[0].length-1;continue}}if(r[s]!=="<")continue;let u=a.slice(o+s),f=l.inline.tag.exec(u)||l.inline.autolink.exec(u);if(f){if(f[0].length>r.length-s)return!0;s+=f[0].length-1}}return!1}var Go=class{options;rules;lexer;constructor(a){this.options=a||Ga}space(a){let r=this.rules.block.newline.exec(a);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(a){let r=this.rules.block.code.exec(a);if(r){let o=this.options.pedantic?r[0]:Wm(r[0]),l=o.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:o,codeBlockStyle:"indented",text:l}}}fences(a){let r=this.rules.block.fences.exec(a);if(r){let o=r[0],l=wk(o,r[3]||"",this.rules);return{type:"code",raw:o,lang:r[2]?r[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):r[2],text:l}}}heading(a){let r=this.rules.block.heading.exec(a);if(r){let o=r[2].trim();if(this.rules.other.endingHash.test(o)){let l=pa(o,"#");(this.options.pedantic||!l||this.rules.other.endingSpaceTabChar.test(l))&&(o=l.trim())}return{type:"heading",raw:pa(r[0],`
`),depth:r[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(a){let r=this.rules.block.hr.exec(a);if(r)return{type:"hr",raw:pa(r[0],`
`)}}blockquote(a){let r=this.rules.block.blockquote.exec(a);if(r){let o=pa(r[0],`
`).split(`
`),l="",s="",u=[];for(;o.length>0;){let f=!1,p=[],g;for(g=0;g<o.length;g++)if(this.rules.other.blockquoteStart.test(o[g]))p.push(o[g]),f=!0;else if(!f)p.push(o[g]);else break;o=o.slice(g);let m=p.join(`
`),y=m.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");l=l?`${l}
${m}`:m,s=s?`${s}
${y}`:y;let b=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(y,u,!0),this.lexer.state.top=b,o.length===0)break;let w=u.at(-1);if(w?.type==="code")break;if(w?.type==="blockquote"){let A=w,R=o.join(`
`),C=A.raw+`
`+R.replace(this.rules.other.blockquoteSetextReplace2,""),k=this.blockquote(C);u[u.length-1]=k,l=`${l}
${R}`,s=s.substring(0,s.length-A.text.length)+k.text;break}else if(w?.type==="list"){let A=w,R=A.raw+`
`+o.join(`
`),C=this.list(R);u[u.length-1]=C,l=l.substring(0,l.length-w.raw.length)+C.raw,s=s.substring(0,s.length-A.raw.length)+C.raw,o=R.substring(u.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:l,tokens:u,text:s}}}list(a){let r=this.rules.block.list.exec(a);if(r){let o=r[1].trim(),l=o.length>1,s={type:"list",raw:"",ordered:l,start:l?+o.slice(0,-1):"",loose:!1,items:[]};o=l?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=l?o:"[*+-]");let u=this.rules.other.listItemRegex(o),f=!1;for(;a;){let g=!1,m="",y="";if(!(r=u.exec(a))||this.rules.block.hr.test(a))break;m=r[0],a=a.substring(m.length);let b=_k(r[2].split(`
`,1)[0],r[1].length),w=a.split(`
`,1)[0],A=!b.trim(),R=0;if(this.options.pedantic?(R=2,y=b.trimStart()):A?R=r[1].length+1:(R=b.search(this.rules.other.nonSpaceChar),R=R>4?1:R,y=b.slice(R),R+=r[1].length),A&&this.rules.other.blankLine.test(w)&&(m+=w+`
`,a=a.substring(w.length+1),g=!0),!g){let C=this.rules.other.nextBulletRegex(R),k=this.rules.other.hrRegex(R),O=this.rules.other.fencesBeginRegex(R),Y=this.rules.other.headingBeginRegex(R),F=this.rules.other.htmlBeginRegex(R),P=this.rules.other.blockquoteBeginRegex(R);for(;a;){let Z=a.split(`
`,1)[0],tt;if(w=Z,this.options.pedantic?(w=w.replace(this.rules.other.listReplaceNesting,"  "),tt=w):tt=w.replace(this.rules.other.tabCharGlobal,"    "),O.test(w)||Y.test(w)||F.test(w)||P.test(w)||C.test(w)||k.test(w))break;if(tt.search(this.rules.other.nonSpaceChar)>=R||!w.trim())y+=`
`+tt.slice(R);else{if(A||b.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||O.test(b)||Y.test(b)||k.test(b))break;y+=`
`+w}A=!w.trim(),m+=Z+`
`,a=a.substring(Z.length+1),b=tt.slice(R)}}s.loose||(f?s.loose=!0:this.rules.other.doubleBlankLine.test(m)&&(f=!0)),s.items.push({type:"list_item",raw:m,task:!!this.options.gfm&&this.rules.other.listIsTask.test(y),loose:!1,text:y,tokens:[]}),s.raw+=m}let p=s.items.at(-1);if(p)p.raw=p.raw.trimEnd(),p.text=p.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let g of s.items)if(this.lexer.state.top=!1,g.tokens=this.lexer.blockTokens(g.text,[]),!s.loose){let m=g.tokens.filter(b=>b.type==="space"),y=m.length>0&&m.some(b=>this.rules.other.anyLine.test(b.raw));s.loose=y}for(let g of s.items){let m=g.tokens[0];if(g.task&&(m?.type==="text"||m?.type==="paragraph")){g.text=g.text.replace(this.rules.other.listReplaceTask,""),m.raw=m.raw.replace(this.rules.other.listReplaceTask,""),m.text=m.text.replace(this.rules.other.listReplaceTask,"");for(let b=this.lexer.inlineQueue.length-1;b>=0;b--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[b].src)){this.lexer.inlineQueue[b].src=this.lexer.inlineQueue[b].src.replace(this.rules.other.listReplaceTask,"");break}let y=this.rules.other.listTaskCheckbox.exec(g.raw);if(y){let b={type:"checkbox",raw:y[0]+" ",checked:y[0]!=="[ ]"};g.checked=b.checked,s.loose?g.tokens[0]&&["paragraph","text"].includes(g.tokens[0].type)&&"tokens"in g.tokens[0]&&g.tokens[0].tokens?(g.tokens[0].raw=b.raw+g.tokens[0].raw,g.tokens[0].text=b.raw+g.tokens[0].text,g.tokens[0].tokens.unshift(b)):g.tokens.unshift({type:"paragraph",raw:b.raw,text:b.raw,tokens:[b]}):g.tokens.unshift(b)}}else g.task&&(g.task=!1)}if(s.loose)for(let g of s.items){g.loose=!0;for(let m of g.tokens)m.type==="text"&&(m.type="paragraph")}return s}}html(a){let r=this.rules.block.html.exec(a);if(r){let o=Wm(r[0]);return{type:"html",block:!0,raw:o,pre:r[1]==="pre"||r[1]==="script"||r[1]==="style",text:o}}}def(a){let r=this.rules.block.def.exec(a);if(r){let o=Vo(r[1]).replace(this.rules.other.multipleSpaceGlobal," "),l=r[2]?r[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):r[3];return{type:"def",tag:o,raw:pa(r[0],`
`),href:l,title:s}}}table(a){let r=this.rules.block.table.exec(a);if(!r||!this.rules.other.tableDelimiter.test(r[2]))return;let o=Jm(r[1]),l=r[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=r[3]?.trim()?r[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],u={type:"table",raw:pa(r[0],`
`),header:[],align:[],rows:[]};if(o.length===l.length){for(let f of l)this.rules.other.tableAlignRight.test(f)?u.align.push("right"):this.rules.other.tableAlignCenter.test(f)?u.align.push("center"):this.rules.other.tableAlignLeft.test(f)?u.align.push("left"):u.align.push(null);for(let f=0;f<o.length;f++)u.header.push({text:o[f],tokens:this.lexer.inline(o[f]),header:!0,align:u.align[f]});for(let f of s)u.rows.push(Jm(f,u.header.length).map((p,g)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:u.align[g]})));return u}}lheading(a){let r=this.rules.block.lheading.exec(a);if(r){let o=r[1].trim();return{type:"heading",raw:pa(r[0],`
`),depth:r[2].charAt(0)==="="?1:2,text:o,tokens:this.lexer.inline(o)}}}paragraph(a){let r=this.rules.block.paragraph.exec(a);if(r){let o=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:o,tokens:this.lexer.inline(o)}}}text(a){let r=this.rules.block.text.exec(a);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(a){let r=this.rules.inline.escape.exec(a);if(r)return{type:"escape",raw:r[0],text:r[1]}}tag(a){let r=this.rules.inline.tag.exec(a);if(r)return!this.lexer.state.inLink&&this.rules.other.startATag.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:r[0]}}link(a){let r=this.rules.inline.link.exec(a);if(r){let o=r[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&nx(a,r[1],o,this.rules))return;let l=r[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(l)){if(!this.rules.other.endAngleBracket.test(l))return;let f=pa(l.slice(0,-1),"\\");if((l.length-f.length)%2===0)return}else{let f=yk(r[2],"()");if(f===-2)return;if(f>-1){let p=(r[0].indexOf("!")===0?5:4)+r[1].length+f;r[2]=r[2].substring(0,f),r[0]=r[0].substring(0,p).trim(),r[3]=""}}let s=r[2],u="";if(this.options.pedantic){let f=this.rules.other.pedanticHrefTitle.exec(s);f&&(s=f[1],u=f[3])}else u=r[3]?r[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(l)?s=s.slice(1):s=s.slice(1,-1)),tx(r,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},r[0],this.lexer,this.rules)}}reflink(a,r){let o;if((o=this.rules.inline.reflink.exec(a))||(o=this.rules.inline.nolink.exec(a))){let l=o[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&nx(a,o[1],l,this.rules))return;let s=(o[2]||o[1]).replace(this.rules.other.multipleSpaceGlobal," "),u=r[Vo(s)];if(!u){let f=o[0].charAt(0);return{type:"text",raw:f,text:f}}return tx(o,u,o[0],this.lexer,this.rules)}}emStrong(a,r,o=""){let l=this.rules.inline.emStrongLDelim.exec(a);if(!(!l||!l[1]&&!l[2]&&!l[3]&&!l[4]||l[4]&&o.match(this.rules.other.unicodeAlphaNumeric))&&(!(l[1]||l[3])||!o||this.rules.inline.punctuation.exec(o))){let s=[...l[0]].length-1,u,f,p=s,g=0,m=l[0][0],y=o===m,b=m==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(b.lastIndex=0,r=r.slice(-1*a.length+s);(l=b.exec(r))!==null;){if(u=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!u)continue;if(f=[...u].length,l[3]||l[4]){p+=f;continue}else if(l[5]||l[6]){if(s%3&&!((s+f)%3)){g+=f;continue}if(y)break}if(p-=f,p>0)continue;f=Math.min(f,f+p+g);let w=[...l[0]][0].length,A=a.slice(0,s+l.index+w+f);if(Math.min(s,f)%2){let C=A.slice(1,-1);return{type:"em",raw:A,text:C,tokens:this.lexer.inlineTokens(C)}}let R=A.slice(2,-2);return{type:"strong",raw:A,text:R,tokens:this.lexer.inlineTokens(R)}}}}codespan(a){let r=this.rules.inline.code.exec(a);if(r){let o=r[2].replace(this.rules.other.newLineCharGlobal," "),l=this.rules.other.nonSpaceChar.test(o),s=this.rules.other.startingSpaceChar.test(o)&&this.rules.other.endingSpaceChar.test(o);return l&&s&&(o=o.substring(1,o.length-1)),{type:"codespan",raw:r[0],text:o}}}br(a){let r=this.rules.inline.br.exec(a);if(r)return{type:"br",raw:r[0]}}del(a,r,o=""){let l=this.rules.inline.delLDelim.exec(a);if(l&&(!l[1]||!o||this.rules.inline.punctuation.exec(o))){let s=[...l[0]].length-1,u,f,p=s,g=this.rules.inline.delRDelim;for(g.lastIndex=0,r=r.slice(-1*a.length+s);(l=g.exec(r))!==null;){if(u=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!u||(f=[...u].length,f!==s))continue;if(l[3]||l[4]){p+=f;continue}if(p-=f,p>0)continue;f=Math.min(f,f+p);let m=[...l[0]][0].length,y=a.slice(0,s+l.index+m+f),b=y.slice(s,-s);return{type:"del",raw:y,text:b,tokens:this.lexer.inlineTokens(b)}}}}autolink(a){let r=this.rules.inline.autolink.exec(a);if(r){let o,l;return r[2]==="@"?(o=r[1],l="mailto:"+o):(o=r[1],l=o),{type:"link",raw:r[0],text:o,href:l,autolink:!0,tokens:[{type:"text",raw:o,text:o}]}}}url(a){let r;if(r=this.rules.inline.url.exec(a)){let o,l;if(r[2]==="@")o=r[0],l="mailto:"+o;else{let s;do s=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])?.[0]??"";while(s!==r[0]);o=r[0],r[1]==="www."?l="http://"+r[0]:l=r[0]}return{type:"link",raw:r[0],text:o,href:l,autolink:!0,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(a){let r=this.rules.inline.text.exec(a);if(r){let o=this.lexer.state.inRawBlock;return{type:"text",raw:r[0],text:r[0],escaped:o}}}},te=class lu{tokens;options;state;inlineQueue;tokenizer;constructor(r){this.tokens=[],this.tokens.links=Object.create(null),this.options=r||Ga,this.options.tokenizer=this.options.tokenizer||new Go,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let o={other:dn,block:To.normal,inline:Ur.normal};this.options.pedantic?(o.block=To.pedantic,o.inline=Ur.pedantic):this.options.gfm&&(o.block=To.gfm,this.options.breaks?o.inline=Ur.breaks:o.inline=Ur.gfm),this.tokenizer.rules=o}static get rules(){return{block:To,inline:Ur}}static lex(r,o){return new lu(o).lex(r)}static lexInline(r,o){return new lu(o).inlineTokens(r)}lex(r){r=r.replace(dn.carriageReturn,`
`),this.blockTokens(r,this.tokens);for(let o=0;o<this.inlineQueue.length;o++){let l=this.inlineQueue[o];this.inlineTokens(l.src,l.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(r,o=[],l=!1){this.tokenizer.lexer=this,this.options.pedantic&&(r=r.replace(dn.tabCharGlobal,"    ").replace(dn.spaceLine,""));let s=1/0;for(;r;){if(r.length<s)s=r.length;else{this.infiniteLoopError(r.charCodeAt(0));break}let u;if(this.options.extensions?.block?.some(p=>(u=p.call({lexer:this},r,o))?(r=r.substring(u.raw.length),o.push(u),!0):!1))continue;if(u=this.tokenizer.space(r)){r=r.substring(u.raw.length);let p=o.at(-1);u.raw.length===1&&p!==void 0?p.raw+=`
`:o.push(u);continue}if(u=this.tokenizer.code(r)){r=r.substring(u.raw.length);let p=o.at(-1);p?.type==="paragraph"||p?.type==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+u.raw,p.text+=`
`+u.text,this.inlineQueue.at(-1).src=p.text):o.push(u);continue}if(u=this.tokenizer.fences(r)){r=r.substring(u.raw.length),o.push(u);continue}if(u=this.tokenizer.heading(r)){r=r.substring(u.raw.length),o.push(u);continue}if(u=this.tokenizer.hr(r)){r=r.substring(u.raw.length),o.push(u);continue}if(u=this.tokenizer.blockquote(r)){r=r.substring(u.raw.length),o.push(u);continue}if(u=this.tokenizer.list(r)){r=r.substring(u.raw.length),o.push(u);continue}if(u=this.tokenizer.html(r)){r=r.substring(u.raw.length),o.push(u);continue}if(u=this.tokenizer.def(r)){r=r.substring(u.raw.length);let p=o.at(-1);p?.type==="paragraph"||p?.type==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+u.raw,p.text+=`
`+u.raw,this.inlineQueue.at(-1).src=p.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title},o.push(u));continue}if(u=this.tokenizer.table(r)){r=r.substring(u.raw.length),o.push(u);continue}if(u=this.tokenizer.lheading(r)){r=r.substring(u.raw.length),o.push(u);continue}let f=r;if(this.options.extensions?.startBlock){let p=1/0,g=r.slice(1),m;this.options.extensions.startBlock.forEach(y=>{m=y.call({lexer:this},g),typeof m=="number"&&m>=0&&(p=Math.min(p,m))}),p<1/0&&p>=0&&(f=r.substring(0,p+1))}if(this.state.top&&(u=this.tokenizer.paragraph(f))){let p=o.at(-1);l&&p?.type==="paragraph"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+u.raw,p.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):o.push(u),l=f.length!==r.length,r=r.substring(u.raw.length);continue}if(u=this.tokenizer.text(r)){r=r.substring(u.raw.length);let p=o.at(-1);p?.type==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+u.raw,p.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):o.push(u);continue}if(r){this.infiniteLoopError(r.charCodeAt(0));break}}return this.state.top=!0,o}inline(r,o=[]){return this.inlineQueue.push({src:r,tokens:o}),o}linkInText(r){if(!r.includes("["))return!1;let o=this.tokenizer.rules.inline.link;for(let l of r.matchAll(this.tokenizer.rules.inline.blockSkip))if(o.test(l[0])&&r.charAt(l.index-1)!=="!")return!0;for(let l of r.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let s=l[0],u=s.lastIndexOf("[");if(!(s.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,Vo(s.slice(u+1,-1))))&&!(u>1&&this.linkInText(s.slice(1,u-1))))return!0}return!1}inlineTokens(r,o=[]){this.tokenizer.lexer=this;let l=r;if(this.tokens.links&&r.includes("[")){let p=this.tokenizer.rules.inline.reflinkSearch,g=m=>{let y=m.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,Vo(m.slice(y+1,-1))))return m;if(y>1&&m.charAt(0)!=="!"){let b=m.slice(1,y-1);if(this.linkInText(b))return"["+b.replace(p,g)+"]["+"a".repeat(m.length-y-2)+"]"}return"["+"a".repeat(m.length-2)+"]"};l=l.replace(p,g)}l=l.replace(this.tokenizer.rules.inline.anyPunctuation,p=>"+".repeat(p.length)),l=l.replace(this.tokenizer.rules.inline.blockSkip,(p,g,m)=>{let y=m?m.length:0;return p.slice(0,y)+"["+"a".repeat(p.length-y-2)+"]"}),l=this.options.hooks?.emStrongMask?.call({lexer:this},l)??l;let s=!1,u="",f=1/0;for(;r;){if(r.length<f)f=r.length;else{this.infiniteLoopError(r.charCodeAt(0));break}s||(u=""),s=!1;let p;if(this.options.extensions?.inline?.some(m=>(p=m.call({lexer:this},r,o))?(r=r.substring(p.raw.length),o.push(p),!0):!1))continue;if(p=this.tokenizer.escape(r)){r=r.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.tag(r)){r=r.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.link(r)){r=r.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.reflink(r,this.tokens.links)){r=r.substring(p.raw.length);let m=o.at(-1);p.type==="text"&&m?.type==="text"?(m.raw+=p.raw,m.text+=p.text):o.push(p);continue}if(p=this.tokenizer.emStrong(r,l,u)){r=r.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.codespan(r)){r=r.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.br(r)){r=r.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.del(r,l,u)){r=r.substring(p.raw.length),o.push(p);continue}if(p=this.tokenizer.autolink(r)){r=r.substring(p.raw.length),o.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(r))){r=r.substring(p.raw.length),o.push(p);continue}let g=r;if(this.options.extensions?.startInline){let m=1/0,y=r.slice(1),b;this.options.extensions.startInline.forEach(w=>{b=w.call({lexer:this},y),typeof b=="number"&&b>=0&&(m=Math.min(m,b))}),m<1/0&&m>=0&&(g=r.substring(0,m+1))}if(p=this.tokenizer.inlineText(g)){r=r.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(u=p.raw.slice(-1)),s=!0;let m=o.at(-1);m?.type==="text"?(m.raw+=p.raw,m.text+=p.text):o.push(p);continue}if(r){this.infiniteLoopError(r.charCodeAt(0));break}}return o}infiniteLoopError(r){let o="Infinite loop on byte: "+r;if(this.options.silent)console.error(o);else throw new Error(o)}},$o=class{options;parser;constructor(a){this.options=a||Ga}space(a){return""}code({text:a,lang:r,escaped:o}){let l=(r||"").match(dn.notSpaceStart)?.[0],s=a?a.replace(dn.endingNewline,"")+`
`:"";return l?'<pre><code class="language-'+Mn(l)+'">'+(o?s:Mn(s,!0))+`</code></pre>
`:"<pre><code>"+(o?s:Mn(s,!0))+`</code></pre>
`}blockquote({tokens:a}){return`<blockquote>
${this.parser.parse(a)}</blockquote>
`}html({text:a}){return a}def(a){return""}heading({tokens:a,depth:r}){return`<h${r}>${this.parser.parseInline(a)}</h${r}>
`}hr(a){return`<hr>
`}list(a){let r=a.ordered,o=a.start,l="";for(let f=0;f<a.items.length;f++){let p=a.items[f];l+=this.listitem(p)}let s=r?"ol":"ul",u=r&&o!==1?' start="'+o+'"':"";return"<"+s+u+`>
`+l+"</"+s+`>
`}listitem(a){return`<li>${this.parser.parse(a.tokens)}</li>
`}checkbox({checked:a}){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:a}){return`<p>${this.parser.parseInline(a)}</p>
`}table(a){let r="",o="";for(let s=0;s<a.header.length;s++)o+=this.tablecell(a.header[s]);r+=this.tablerow({text:o});let l="";for(let s=0;s<a.rows.length;s++){let u=a.rows[s];o="";for(let f=0;f<u.length;f++)o+=this.tablecell(u[f]);l+=this.tablerow({text:o})}return l&&(l=`<tbody>${l}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+l+`</table>
`}tablerow({text:a}){return`<tr>
${a}</tr>
`}tablecell(a){let r=this.parser.parseInline(a.tokens),o=a.header?"th":"td";return(a.align?`<${o} align="${a.align}">`:`<${o}>`)+r+`</${o}>
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${Mn(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:r,text:o,tokens:l,autolink:s}){let u=s?Mn(o,!0):this.parser.parseInline(l),f=Km(a);if(f===null)return u;a=Mn(f,s);let p='<a href="'+a+'"';return r&&(p+=' title="'+Mn(r)+'"'),p+=">"+u+"</a>",p}image({href:a,title:r,text:o,tokens:l}){l&&(o=this.parser.parseInline(l,this.parser.textRenderer));let s=Km(a);if(s===null)return Mn(o);a=s;let u=`<img src="${Mn(a)}" alt="${Mn(o)}"`;return r&&(u+=` title="${Mn(r)}"`),u+=">",u}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:Mn(a.text)}},Pu=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}checkbox({raw:a}){return a}},ne=class ou{options;renderer;textRenderer;constructor(r){this.options=r||Ga,this.options.renderer=this.options.renderer||new $o,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Pu}static parse(r,o){return new ou(o).parse(r)}static parseInline(r,o){return new ou(o).parseInline(r)}parse(r){this.renderer.parser=this;let o="";for(let l=0;l<r.length;l++){let s=r[l];if(this.options.extensions?.renderers?.[s.type]){let f=s,p=this.options.extensions.renderers[f.type].call({parser:this},f);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(f.type)){o+=p||"";continue}}let u=s;switch(u.type){case"space":{o+=this.renderer.space(u);break}case"hr":{o+=this.renderer.hr(u);break}case"heading":{o+=this.renderer.heading(u);break}case"code":{o+=this.renderer.code(u);break}case"table":{o+=this.renderer.table(u);break}case"blockquote":{o+=this.renderer.blockquote(u);break}case"list":{o+=this.renderer.list(u);break}case"checkbox":{o+=this.renderer.checkbox(u);break}case"html":{o+=this.renderer.html(u);break}case"def":{o+=this.renderer.def(u);break}case"paragraph":{o+=this.renderer.paragraph(u);break}case"text":{o+=this.renderer.text(u);break}default:{let f='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return o}parseInline(r,o=this.renderer){this.renderer.parser=this;let l="";for(let s=0;s<r.length;s++){let u=r[s];if(this.options.extensions?.renderers?.[u.type]){let p=this.options.extensions.renderers[u.type].call({parser:this},u);if(p!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(u.type)){l+=p||"";continue}}let f=u;switch(f.type){case"escape":{l+=o.text(f);break}case"html":{l+=o.html(f);break}case"link":{l+=o.link(f);break}case"image":{l+=o.image(f);break}case"checkbox":{l+=o.checkbox(f);break}case"strong":{l+=o.strong(f);break}case"em":{l+=o.em(f);break}case"codespan":{l+=o.codespan(f);break}case"br":{l+=o.br(f);break}case"del":{l+=o.del(f);break}case"text":{l+=o.text(f);break}default:{let p='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return l}},Yr=class{options;block;constructor(a){this.options=a||Ga}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}emStrongMask(a){return a}provideLexer(a=this.block){return a?te.lex:te.lexInline}provideParser(a=this.block){return a?ne.parse:ne.parseInline}},Sk=class{defaults=Uu();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ne;Renderer=$o;TextRenderer=Pu;Lexer=te;Tokenizer=Go;Hooks=Yr;constructor(...a){this.use(...a)}walkTokens(a,r){let o=[];for(let l of a)switch(o=o.concat(r.call(this,l)),l.type){case"table":{let s=l;for(let u of s.header)o=o.concat(this.walkTokens(u.tokens,r));for(let u of s.rows)for(let f of u)o=o.concat(this.walkTokens(f.tokens,r));break}case"list":{let s=l;o=o.concat(this.walkTokens(s.items,r));break}default:{let s=l;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(u=>{let f=s[u].flat(1/0);o=o.concat(this.walkTokens(f,r))}):s.tokens&&(o=o.concat(this.walkTokens(s.tokens,r)))}}return o}use(...a){let r=this.defaults.extensions||{renderers:{},childTokens:{}};return a.forEach(o=>{let l={...o};if(l.async=this.defaults.async||l.async||!1,o.extensions&&(o.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let u=r.renderers[s.name];u?r.renderers[s.name]=function(...f){let p=s.renderer.apply(this,f);return p===!1&&(p=u.apply(this,f)),p}:r.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let u=r[s.level];u?u.unshift(s.tokenizer):r[s.level]=[s.tokenizer],s.start&&(s.level==="block"?r.startBlock?r.startBlock.push(s.start):r.startBlock=[s.start]:s.level==="inline"&&(r.startInline?r.startInline.push(s.start):r.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(r.childTokens[s.name]=s.childTokens)}),l.extensions=r),o.renderer){let s=this.defaults.renderer||new $o(this.defaults);for(let u in o.renderer){if(!(u in s))throw new Error(`renderer '${u}' does not exist`);if(["options","parser"].includes(u))continue;let f=u,p=o.renderer[f],g=s[f];s[f]=(...m)=>{let y=p.apply(s,m);return y===!1&&(y=g.apply(s,m)),y||""}}l.renderer=s}if(o.tokenizer){let s=this.defaults.tokenizer||new Go(this.defaults);for(let u in o.tokenizer){if(!(u in s))throw new Error(`tokenizer '${u}' does not exist`);if(["options","rules","lexer"].includes(u))continue;let f=u,p=o.tokenizer[f],g=s[f];s[f]=(...m)=>{let y=p.apply(s,m);return y===!1&&(y=g.apply(s,m)),y}}l.tokenizer=s}if(o.hooks){let s=this.defaults.hooks||new Yr;for(let u in o.hooks){if(!(u in s))throw new Error(`hook '${u}' does not exist`);if(["options","block"].includes(u))continue;let f=u,p=o.hooks[f],g=s[f];Yr.passThroughHooks.has(u)?s[f]=m=>{if(this.defaults.async&&Yr.passThroughHooksRespectAsync.has(u))return(async()=>{let b=await p.call(s,m);return g.call(s,b)})();let y=p.call(s,m);return g.call(s,y)}:s[f]=(...m)=>{if(this.defaults.async)return(async()=>{let b=await p.apply(s,m);return b===!1&&(b=await g.apply(s,m)),b})();let y=p.apply(s,m);return y===!1&&(y=g.apply(s,m)),y}}l.hooks=s}if(o.walkTokens){let s=this.defaults.walkTokens,u=o.walkTokens;l.walkTokens=function(f){let p=[];return p.push(u.call(this,f)),s&&(p=p.concat(s.call(this,f))),p}}this.defaults={...this.defaults,...l}}),this}setOptions(a){return this.defaults={...this.defaults,...a},this}lexer(a,r){return te.lex(a,r??this.defaults)}parser(a,r){return ne.parse(a,r??this.defaults)}parseMarkdown(a){return(r,o)=>{let l={...o},s={...this.defaults,...l},u=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&l.async===!1)return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return u(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return u(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=a),s.async)return(async()=>{let f=s.hooks?await s.hooks.preprocess(r):r,p=await(s.hooks?await s.hooks.provideLexer(a):a?te.lex:te.lexInline)(f,s),g=s.hooks?await s.hooks.processAllTokens(p):p;s.walkTokens&&await Promise.all(this.walkTokens(g,s.walkTokens));let m=await(s.hooks?await s.hooks.provideParser(a):a?ne.parse:ne.parseInline)(g,s);return s.hooks?await s.hooks.postprocess(m):m})().catch(u);try{s.hooks&&(r=s.hooks.preprocess(r));let f=(s.hooks?s.hooks.provideLexer(a):a?te.lex:te.lexInline)(r,s);s.hooks&&(f=s.hooks.processAllTokens(f)),s.walkTokens&&this.walkTokens(f,s.walkTokens);let p=(s.hooks?s.hooks.provideParser(a):a?ne.parse:ne.parseInline)(f,s);return s.hooks&&(p=s.hooks.postprocess(p)),p}catch(f){return u(f)}}}onError(a,r){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,a){let l="<p>An error occurred:</p><pre>"+Mn(o.message+"",!0)+"</pre>";return r?Promise.resolve(l):l}if(r)return Promise.reject(o);throw o}}},Ya=new Sk;function Rt(a,r){return Ya.parse(a,r)}Rt.options=Rt.setOptions=function(a){return Ya.setOptions(a),Rt.defaults=Ya.defaults,Mb(Rt.defaults),Rt};Rt.getDefaults=Uu;Rt.defaults=Ga;function Ck(...a){return Ya.use(...a),Rt.defaults=Ya.defaults,Mb(Rt.defaults),Rt}Rt.use=Ck;Rt.walkTokens=function(a,r){return Ya.walkTokens(a,r)};Rt.parseInline=Ya.parseInline;Rt.Parser=ne;Rt.parser=ne.parse;Rt.Renderer=$o;Rt.TextRenderer=Pu;Rt.Lexer=te;Rt.lexer=te.lex;Rt.Tokenizer=Go;Rt.Hooks=Yr;Rt.parse=Rt;Rt.options;Rt.setOptions;Rt.walkTokens;Rt.parseInline;ne.parse;te.lex;Rt.setOptions({gfm:!0,breaks:!1});function kk({md:a}){const r=v.useMemo(()=>Rt.parse(a),[a]);return h.jsx("div",{"code-path":"src\\components\\MarkdownView.tsx:10:10",className:"md-body",dangerouslySetInnerHTML:{__html:r}})}const ex=`<script>(function(){
  function send(){
    var el = document.documentElement, b = document.body;
    var h = Math.max(el ? el.scrollHeight : 0, b ? b.scrollHeight : 0);
    if (h > 0) parent.postMessage({ __bookHeight: h }, '*');
  }
  window.addEventListener('load', function(){ send(); setTimeout(send, 300); setTimeout(send, 1200); });
  if (window.ResizeObserver) new ResizeObserver(send).observe(document.body);
})();<\/script>`;function Ek({html:a}){const r=v.useRef(null),[o,l]=v.useState(800),s=v.useMemo(()=>{const u=a.trim();return u.toLowerCase().includes("</body>")?u.replace(/<\/body>/i,`${ex}</body>`):u+ex},[a]);return v.useEffect(()=>{function u(f){if(f.source!==r.current?.contentWindow)return;const p=f.data;typeof p?.__bookHeight=="number"&&p.__bookHeight>0&&l(Math.min(p.__bookHeight+4,2e4))}return window.addEventListener("message",u),()=>window.removeEventListener("message",u)},[]),v.useEffect(()=>{const u=setTimeout(()=>{const p=r.current?.contentDocument;if(p){const g=Math.max(p.documentElement?.scrollHeight??0,p.body?.scrollHeight??0);g>0&&l(Math.min(g+4,2e4))}},600),f=setTimeout(()=>{const p=r.current?.contentDocument;if(p){const g=Math.max(p.documentElement?.scrollHeight??0,p.body?.scrollHeight??0);g>0&&l(Math.min(g+4,2e4))}},2e3);return()=>{clearTimeout(u),clearTimeout(f)}},[s]),h.jsx("iframe",{"code-path":"src\\components\\HtmlView.tsx:69:5",ref:r,srcDoc:s,title:"章节内容",className:"block w-full rounded-xl border-0",style:{height:o}})}function zk({quiz:a}){const[r,o]=v.useState(0),[l,s]=v.useState(null),[u,f]=v.useState(!1),[p,g]=v.useState(0),[m,y]=v.useState(!1);if(a.length===0)return h.jsx("p",{"code-path":"src\\components\\QuizView.tsx:15:12",className:"py-8 text-center text-xs text-zinc-400",children:"本章测验题整理中…"});const b=a[r],w=a.length,A=l!==null||u,R=()=>{r+1>=w?y(!0):(o(r+1),s(null),f(!1))};if(m){const C=Math.round(p/w*100);return h.jsxs("div",{"code-path":"src\\components\\QuizView.tsx:34:7",className:"flex flex-col items-center gap-2 rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm",children:[h.jsx("span",{"code-path":"src\\components\\QuizView.tsx:35:9",className:"text-4xl",children:C>=80?"🎉":C>=60?"💪":"📚"}),h.jsxs("p",{"code-path":"src\\components\\QuizView.tsx:36:9",className:"text-lg font-bold text-zinc-800",children:["答对 ",p," / ",w," 题"]}),h.jsx("p",{"code-path":"src\\components\\QuizView.tsx:39:9",className:"text-xs text-zinc-400",children:C>=80?"掌握得很好，可以预习下一章了！":C>=60?"基本掌握，错题再翻一遍笔记。":"别急，回到笔记把薄弱的地方再看一遍。"}),h.jsxs("button",{"code-path":"src\\components\\QuizView.tsx:42:9",onClick:()=>{o(0),s(null),f(!1),g(0),y(!1)},className:"mt-1 flex items-center gap-1 rounded-full border border-zinc-200 px-4 py-1.5 text-xs text-zinc-500 hover:border-emerald-200 hover:text-emerald-600",children:[h.jsx(jx,{"code-path":"src\\components\\QuizView.tsx:52:11",className:"h-3.5 w-3.5"})," 再测一遍"]})]})}return h.jsxs("div",{"code-path":"src\\components\\QuizView.tsx:59:5",className:"flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm",children:[h.jsxs("div",{"code-path":"src\\components\\QuizView.tsx:60:7",className:"flex items-center gap-2",children:[h.jsx(Dx,{"code-path":"src\\components\\QuizView.tsx:61:9",className:"h-4 w-4 shrink-0 text-rose-500"}),h.jsxs("span",{"code-path":"src\\components\\QuizView.tsx:62:9",className:"text-xs text-zinc-400",children:["第 ",r+1," / ",w," 题",b.type==="qa"&&" · 自答题"]}),h.jsx("div",{"code-path":"src\\components\\QuizView.tsx:65:9",className:"flex-1",children:h.jsx(Yi,{"code-path":"src\\components\\QuizView.tsx:66:11",value:(r+(A?1:0))/w*100,className:"h-1.5"})})]}),h.jsx("p",{"code-path":"src\\components\\QuizView.tsx:70:7",className:"text-[15px] font-medium leading-relaxed text-zinc-800",children:b.q}),b.type==="choice"?h.jsx("div",{"code-path":"src\\components\\QuizView.tsx:73:9",className:"flex flex-col gap-2",children:b.choices.map((C,k)=>{const O=l===k,Y=l!==null&&k===b.answer,F=O&&k!==b.answer;return h.jsxs("button",{"code-path":"src\\components\\QuizView.tsx:79:15",disabled:l!==null,onClick:()=>{s(k),k===b.answer&&g(P=>P+1)},className:ot("flex items-start gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm transition-colors",Y&&"border-emerald-300 bg-emerald-50 text-emerald-700",F&&"border-rose-300 bg-rose-50 text-rose-600",l===null&&"border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50",l!==null&&!O&&k!==b.answer&&"border-zinc-100 text-zinc-400"),children:[Y?h.jsx(Ko,{"code-path":"src\\components\\QuizView.tsx:95:19",className:"mt-0.5 h-4 w-4 shrink-0 text-emerald-500"}):F?h.jsx(S_,{"code-path":"src\\components\\QuizView.tsx:97:19",className:"mt-0.5 h-4 w-4 shrink-0 text-rose-400"}):h.jsx("span",{"code-path":"src\\components\\QuizView.tsx:99:19",className:"mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400",children:String.fromCharCode(65+k)}),h.jsx("span",{"code-path":"src\\components\\QuizView.tsx:103:17",children:C})]},k)})}):h.jsx("div",{"code-path":"src\\components\\QuizView.tsx:109:9",children:u?h.jsxs("div",{"code-path":"src\\components\\QuizView.tsx:118:13",className:"rounded-xl border border-sky-100 bg-sky-50/70 px-3.5 py-2.5",children:[h.jsx("p",{"code-path":"src\\components\\QuizView.tsx:119:15",className:"text-[11px] font-medium text-sky-600",children:"参考答案"}),h.jsx("p",{"code-path":"src\\components\\QuizView.tsx:120:15",className:"mt-1 text-sm leading-relaxed text-zinc-700",children:b.a})]}):h.jsx("button",{"code-path":"src\\components\\QuizView.tsx:111:13",onClick:()=>f(!0),className:"rounded-full border border-zinc-200 px-4 py-1.5 text-xs text-zinc-500 hover:border-sky-200 hover:text-sky-600",children:"心里想好答案后，点我看参考答案"})}),A&&h.jsxs("div",{"code-path":"src\\components\\QuizView.tsx:127:9",className:"flex items-start justify-between gap-3",children:[h.jsxs("div",{"code-path":"src\\components\\QuizView.tsx:128:11",className:"min-w-0",children:[b.type==="choice"&&h.jsx("p",{"code-path":"src\\components\\QuizView.tsx:130:15",className:ot("text-xs font-medium",l===b.answer?"text-emerald-600":"text-rose-500"),children:l===b.answer?"回答正确！":`正确答案：${String.fromCharCode(65+b.answer)}`}),b.explain&&h.jsx("p",{"code-path":"src\\components\\QuizView.tsx:134:30",className:"mt-0.5 text-xs leading-relaxed text-zinc-500",children:b.explain})]}),h.jsxs("button",{"code-path":"src\\components\\QuizView.tsx:136:11",onClick:R,className:"flex shrink-0 items-center gap-0.5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 px-4 py-1.5 text-xs font-medium text-white hover:opacity-90",children:[r+1>=w?"完成":"下一题"," ",h.jsx(zx,{"code-path":"src\\components\\QuizView.tsx:140:47",className:"h-3.5 w-3.5"})]})]})]})}function Ak(){const{bookId:a}=l2(),r=Xr(),o=rb.find(C=>C.id===a),l=`book-progress-${a}`,[s,u]=v.useState(()=>{const C=o?Number(localStorage.getItem(`book-progress-${o.id}`)):0;return Number.isInteger(C)&&C>=0?C:0}),[f,p]=v.useState("notes"),g=o?.chapters??[],m=g[Math.min(s,g.length-1)],y=s>0?g[s-1]:null,b=s<g.length-1?g[s+1]:null;if(v.useEffect(()=>{o&&(localStorage.setItem(l,String(s)),p("notes"),window.scrollTo({top:0}))},[s,o,l]),!o||!m)return h.jsxs("div",{"code-path":"src\\pages\\BookPage.tsx:46:7",className:"mx-auto max-w-2xl px-4 pt-10 text-center",children:[h.jsx("p",{"code-path":"src\\pages\\BookPage.tsx:47:9",className:"text-sm text-zinc-400",children:"这本书不存在或还没有整理好。"}),h.jsx("button",{"code-path":"src\\pages\\BookPage.tsx:48:9",onClick:()=>r("/#study"),className:"mt-3 text-xs text-emerald-600 underline",children:"返回学习首页"})]});const w=C=>u(Math.max(0,Math.min(C,g.length-1))),A=C=>h.jsxs("div",{"code-path":"src\\pages\\BookPage.tsx:58:5",className:"flex items-center justify-between gap-3",children:[y?h.jsxs("button",{"code-path":"src\\pages\\BookPage.tsx:60:9",onClick:()=>w(s-1),className:"flex min-w-0 items-center gap-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-600 shadow-sm transition-colors hover:border-emerald-300 hover:text-emerald-700",children:[h.jsx(b_,{"code-path":"src\\pages\\BookPage.tsx:64:11",className:"h-4 w-4 shrink-0"}),h.jsxs("span",{"code-path":"src\\pages\\BookPage.tsx:65:11",className:"truncate",children:[y.no," ",y.title]})]}):h.jsx("span",{"code-path":"src\\pages\\BookPage.tsx:68:9"}),C==="top"&&h.jsxs("span",{"code-path":"src\\pages\\BookPage.tsx:70:26",className:"hidden text-[11px] text-zinc-300 sm:block",children:[s+1," / ",g.length]}),b?h.jsxs("button",{"code-path":"src\\pages\\BookPage.tsx:72:9",onClick:()=>w(s+1),className:"flex min-w-0 items-center gap-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-600 shadow-sm transition-colors hover:border-emerald-300 hover:text-emerald-700",children:[h.jsxs("span",{"code-path":"src\\pages\\BookPage.tsx:76:11",className:"truncate",children:[b.no," ",b.title]}),h.jsx(zx,{"code-path":"src\\pages\\BookPage.tsx:77:11",className:"h-4 w-4 shrink-0"})]}):h.jsx("span",{"code-path":"src\\pages\\BookPage.tsx:80:9"})]}),R=h.jsxs("button",{"code-path":"src\\pages\\BookPage.tsx:86:5",onClick:()=>p(f==="quiz"?"notes":"quiz"),className:ot("flex w-full items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-medium shadow-sm transition-colors",f==="quiz"?"bg-emerald-600 text-white":"border border-zinc-200 bg-white text-zinc-600 hover:border-emerald-300 hover:text-emerald-700"),children:[h.jsx(mm,{"code-path":"src\\pages\\BookPage.tsx:93:7",className:"h-4 w-4"}),f==="quiz"?"返回笔记":m.quiz.length>0?`本章测试（${m.quiz.length} 题）`:"本章测试"]});return h.jsxs("div",{"code-path":"src\\pages\\BookPage.tsx:99:5",className:"min-h-dvh bg-zinc-50 pb-20",children:[h.jsx("header",{"code-path":"src\\pages\\BookPage.tsx:101:7",className:"sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur",children:h.jsxs("div",{"code-path":"src\\pages\\BookPage.tsx:102:9",className:"mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6",children:[h.jsxs("button",{"code-path":"src\\pages\\BookPage.tsx:103:11",onClick:()=>r("/#study"),className:"flex shrink-0 items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-500 shadow-sm transition-colors hover:border-emerald-200 hover:text-emerald-600",children:[h.jsx(bu,{"code-path":"src\\pages\\BookPage.tsx:107:13",className:"h-3.5 w-3.5"})," 返回学习首页"]}),h.jsxs("p",{"code-path":"src\\pages\\BookPage.tsx:109:11",className:"min-w-0 flex-1 truncate text-center text-sm font-semibold text-zinc-700",children:[o.emoji," 《",o.title,"》"]}),h.jsx("span",{"code-path":"src\\pages\\BookPage.tsx:112:11",className:"hidden w-24 sm:block"})]})}),h.jsxs("div",{"code-path":"src\\pages\\BookPage.tsx:116:7",className:"mx-auto flex max-w-7xl gap-6 px-4 pt-5 sm:px-6",children:[h.jsx("aside",{"code-path":"src\\pages\\BookPage.tsx:118:9",className:"sticky top-[61px] hidden h-[calc(100dvh-81px)] w-60 shrink-0 self-start overflow-y-auto lg:block",children:h.jsxs("div",{"code-path":"src\\pages\\BookPage.tsx:119:11",className:"overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm",children:[h.jsxs("p",{"code-path":"src\\pages\\BookPage.tsx:120:13",className:"flex items-center gap-1.5 border-b border-emerald-100 bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-semibold text-white",children:[h.jsx(Ex,{"code-path":"src\\pages\\BookPage.tsx:121:15",className:"h-4 w-4"})," 章节目录"]}),h.jsx("nav",{"code-path":"src\\pages\\BookPage.tsx:123:13",className:"py-1.5",children:g.map((C,k)=>h.jsxs("button",{"code-path":"src\\pages\\BookPage.tsx:125:17",onClick:()=>w(k),className:ot("block w-full border-l-2 px-4 py-2.5 text-left text-[13px] leading-snug transition-colors",k===s?"border-emerald-500 bg-emerald-50 font-medium text-emerald-700":"border-transparent text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700"),children:[h.jsx("span",{"code-path":"src\\pages\\BookPage.tsx:135:19",className:ot("mr-1.5",k===s?"text-emerald-500":"text-zinc-300"),children:String(k+1).padStart(2,"0")}),C.no," ",C.title]},C.id))})]})}),h.jsxs("main",{"code-path":"src\\pages\\BookPage.tsx:146:9",className:"min-w-0 flex-1",children:[h.jsxs("div",{"code-path":"src\\pages\\BookPage.tsx:148:11",className:"mb-4 lg:hidden",children:[h.jsxs("p",{"code-path":"src\\pages\\BookPage.tsx:149:13",className:"mb-1.5 flex items-center gap-1 text-[11px] font-medium text-zinc-400",children:[h.jsx(Y_,{"code-path":"src\\pages\\BookPage.tsx:150:15",className:"h-3.5 w-3.5"})," 章节目录"]}),h.jsx("div",{"code-path":"src\\pages\\BookPage.tsx:152:13",className:"flex gap-1.5 overflow-x-auto pb-1",children:g.map((C,k)=>h.jsxs("button",{"code-path":"src\\pages\\BookPage.tsx:154:17",onClick:()=>w(k),className:ot("shrink-0 rounded-full px-3 py-1.5 text-xs transition-colors",k===s?"bg-emerald-600 font-medium text-white shadow-sm":"border border-zinc-200 bg-white text-zinc-500"),children:[C.no," ",C.title]},C.id))})]}),A("top"),h.jsx("div",{"code-path":"src\\pages\\BookPage.tsx:172:11",className:"my-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm sm:p-7",children:f==="notes"?m.format==="html"?h.jsx(Ek,{"code-path":"src\\pages\\BookPage.tsx:176:17",html:m.body}):h.jsxs(h.Fragment,{children:[h.jsxs("h1",{"code-path":"src\\pages\\BookPage.tsx:179:19",className:"mb-1 text-xl font-bold text-zinc-800",children:[m.no," ",m.title]}),h.jsxs("p",{"code-path":"src\\pages\\BookPage.tsx:182:19",className:"mb-5 flex items-center gap-1 text-[11px] text-zinc-400",children:[h.jsx(R_,{"code-path":"src\\pages\\BookPage.tsx:183:21",className:"h-3.5 w-3.5"})," 原文笔记 · 阅读笔记持续更新"]}),h.jsx(kk,{"code-path":"src\\pages\\BookPage.tsx:185:19",md:m.body})]}):h.jsxs(h.Fragment,{children:[h.jsxs("h1",{"code-path":"src\\pages\\BookPage.tsx:190:17",className:"mb-1 text-xl font-bold text-zinc-800",children:[m.no," 本章测试"]}),h.jsx("p",{"code-path":"src\\pages\\BookPage.tsx:191:17",className:"mb-5 text-[11px] text-zinc-400",children:"完成测试后可以回到笔记继续阅读"}),h.jsx(zk,{"code-path":"src\\pages\\BookPage.tsx:192:17",quiz:m.quiz})]})}),A("bottom")]}),h.jsxs("aside",{"code-path":"src\\pages\\BookPage.tsx:201:9",className:"sticky top-[61px] hidden h-[calc(100dvh-81px)] w-52 shrink-0 self-start overflow-y-auto xl:block",children:[h.jsxs("div",{"code-path":"src\\pages\\BookPage.tsx:202:11",className:"rounded-xl border border-zinc-200 bg-white p-4 shadow-sm",children:[h.jsx("p",{"code-path":"src\\pages\\BookPage.tsx:203:13",className:"text-xs font-semibold text-zinc-600",children:"本书信息"}),h.jsxs("p",{"code-path":"src\\pages\\BookPage.tsx:204:13",className:"mt-2 text-[11px] leading-relaxed text-zinc-400",children:["共 ",g.length," 章 · 当前第 ",s+1," 章"]}),h.jsx("div",{"code-path":"src\\pages\\BookPage.tsx:207:13",className:"mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-100",children:h.jsx("div",{"code-path":"src\\pages\\BookPage.tsx:208:15",className:"h-full rounded-full bg-emerald-500 transition-all",style:{width:`${(s+1)/g.length*100}%`}})}),h.jsx("div",{"code-path":"src\\pages\\BookPage.tsx:213:13",className:"mt-4",children:m.quiz.length>0?R:h.jsx("p",{"code-path":"src\\pages\\BookPage.tsx:213:67",className:"text-center text-[10px] text-zinc-300",children:"本章笔记内附自测"})})]}),h.jsx("p",{"code-path":"src\\pages\\BookPage.tsx:215:11",className:"mt-3 text-center text-[10px] text-zinc-300",children:"University Copilot"})]})]}),m.quiz.length>0&&h.jsx("div",{"code-path":"src\\pages\\BookPage.tsx:221:9",className:"fixed bottom-5 right-4 xl:hidden",children:h.jsxs("button",{"code-path":"src\\pages\\BookPage.tsx:222:9",onClick:()=>p(f==="quiz"?"notes":"quiz"),className:"flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-medium text-white shadow-lg transition-colors hover:bg-emerald-700",children:[h.jsx(mm,{"code-path":"src\\pages\\BookPage.tsx:226:11",className:"h-4 w-4"}),f==="quiz"?"返回笔记":"本章测试"]})})]})}function Tk(){const{currentUser:a}=is();return a?h.jsxs(_2,{"code-path":"src\\App.tsx:14:5",children:[h.jsx(Fr,{"code-path":"src\\App.tsx:15:7",path:"/",element:h.jsx(mC,{"code-path":"src\\App.tsx:15:32"})}),h.jsx(Fr,{"code-path":"src\\App.tsx:16:7",path:"/book/:bookId",element:h.jsx(Ak,{"code-path":"src\\App.tsx:16:44"})}),h.jsx(Fr,{"code-path":"src\\App.tsx:17:7",path:"/brother",element:a.role==="admin"?h.jsx(SC,{"code-path":"src\\App.tsx:19:49"}):h.jsx(fm,{"code-path":"src\\App.tsx:19:63",to:"/",replace:!0})}),h.jsx(Fr,{"code-path":"src\\App.tsx:21:7",path:"*",element:h.jsx(fm,{"code-path":"src\\App.tsx:21:32",to:"/",replace:!0})})]}):h.jsx(CC,{"code-path":"src\\App.tsx:11:28"})}yy.createRoot(document.getElementById("root")).render(h.jsx(v.StrictMode,{"code-path":"src\\main.tsx:8:3",children:h.jsx(X2,{"code-path":"src\\main.tsx:9:5",children:h.jsx(Tk,{"code-path":"src\\main.tsx:10:7"})})}));
