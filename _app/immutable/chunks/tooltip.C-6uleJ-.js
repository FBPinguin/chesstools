import{d as k,t as c,a as n,e as y}from"./disclose-version.D4so5Eqb.js";import{ap as M,aq as T,M as s,as as l,n as X,c as u,s as Y,t as q,g as v,ar as H,r as d}from"./runtime.Dt2x7lAe.js";import{s as L}from"./render.DMY-X1m_.js";import{i as O}from"./if.5np4T-ru.js";import{s as j}from"./snippet.s2Lr0Q7V.js";import{s as w}from"./attributes.dvnlCIxr.js";import{p as z}from"./props.D0CQgEm2.js";function A(e,t,o,r){s(t,!0),s(o,e.pageX+5),s(r,e.pageY+5)}function B(e,t,o){s(t,e.pageX+5),s(o,e.pageY+5)}var C=c('<div class="tooltip svelte-kciua8"> </div>'),D=c("<div><!></div> <!>",1);function P(e,t){M(t,!0);let o=z(t,"title",3,""),r=l(!1),m=l(void 0),p=l(void 0);function _(){s(r,!1)}var f=D(),a=T(f);a.__mouseover=[A,r,m,p],a.__mousemove=[B,m,p];var g=u(a);j(g,()=>t.children??X),d(a);var x=Y(a,2);O(x,()=>v(r),h=>{var i=C(),b=u(i,!0);d(i),q(()=>{w(i,"style",`top: ${v(p)??""}px; left: ${v(m)??""}px;`),L(b,o())}),n(h,i)}),y("mouseleave",a,_),n(e,f),H()}k(["mouseover","mousemove"]);export{P as T};
