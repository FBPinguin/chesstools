import{w as q,S as M,L as N,P as Y,x as p,y as x,z as y,A as h,B as G,R as U,C as L,D as z,i as T,F as H,G as $,H as J,f as B,g as l,I as K,J as V,K as Z,M as j}from"./runtime.Dt2x7lAe.js";import{p as Q}from"./proxy.CVonJyiz.js";import{c as W}from"./store.B27Enbt6.js";function C(r){for(var a=h,n=h;a!==null&&!(a.f&(G|U));)a=a.parent;try{return L(a),r()}finally{L(n)}}function ae(r,a,n,v){var g;var I=(n&z)!==0,d=!p||(n&x)!==0,c=(n&Y)!==0,D=(n&J)!==0,R=!1,i;c?[i,R]=W(()=>r[a]):i=r[a];var w=M in r||N in r,_=((g=q(r,a))==null?void 0:g.set)??(w&&c&&a in r?e=>r[a]=e:void 0),t=v,P=!0,o=!1,A=()=>(o=!0,P&&(P=!1,D?t=B(v):t=v),t);i===void 0&&v!==void 0&&(_&&d&&y(),i=A(),_&&_(i));var f;if(d)f=()=>{var e=r[a];return e===void 0?A():(P=!0,o=!1,e)};else{var O=C(()=>(I?T:H)(()=>r[a]));O.f|=$,f=()=>{var e=l(O);return e!==void 0&&(t=void 0),e===void 0?t:e}}if(!(n&K))return f;if(_){var F=r.$$legacy;return function(e,u){return arguments.length>0?((!d||!u||F||R)&&_(u?f():e),e):f()}}var S=!1,b=!1,m=V(i),s=C(()=>T(()=>{var e=f(),u=l(m);return S?(S=!1,b=!0,u):(b=!1,m.v=e)}));return I||(s.equals=Z),function(e,u){if(arguments.length>0){const E=u?l(s):d&&c?Q(e):e;return s.equals(E)||(S=!0,j(m,E),o&&t!==void 0&&(t=E),B(()=>l(s))),e}return l(s)}}export{ae as p};
