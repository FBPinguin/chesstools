import{g as w,S as F,L as N,P as Y,l as M,a as U,p as x,b as g,B as y,R as G,s as L,c as $,d as T,e as j,f as z,h as H,u as B,i as l,j as V,m as Z,k as J,o as K}from"./runtime.BIG9PkTb.js";import{p as Q}from"./proxy.DMfIzXo8.js";import{c as W}from"./store.ClEtOpb2.js";function C(r){for(var a=g,n=g;a!==null&&!(a.f&(y|G));)a=a.parent;try{return L(a),r()}finally{L(n)}}function ae(r,a,n,v){var A;var R=(n&$)!==0,d=!M||(n&U)!==0,c=(n&Y)!==0,D=(n&H)!==0,I=!1,i;c?[i,I]=W(()=>r[a]):i=r[a];var p=F in r||N in r,_=((A=w(r,a))==null?void 0:A.set)??(p&&c&&a in r?e=>r[a]=e:void 0),t=v,o=!0,P=!1,O=()=>(P=!0,o&&(o=!1,D?t=B(v):t=v),t);i===void 0&&v!==void 0&&(_&&d&&x(),i=O(),_&&_(i));var u;if(d)u=()=>{var e=r[a];return e===void 0?O():(o=!0,P=!1,e)};else{var b=C(()=>(R?T:j)(()=>r[a]));b.f|=z,u=()=>{var e=l(b);return e!==void 0&&(t=void 0),e===void 0?t:e}}if(!(n&V))return u;if(_){var q=r.$$legacy;return function(e,f){return arguments.length>0?((!d||!f||q||I)&&_(f?u():e),e):u()}}var S=!1,h=!1,m=Z(i),s=C(()=>T(()=>{var e=u(),f=l(m);return S?(S=!1,h=!0,f):(h=!1,m.v=e)}));return R||(s.equals=J),function(e,f){if(arguments.length>0){const E=f?l(s):d&&c?Q(e):e;return s.equals(E)||(S=!0,K(m,E),P&&t!==void 0&&(t=E),B(()=>l(s))),e}return l(s)}}export{ae as p};
