import{d as V,t as g,a as i,i as D}from"../chunks/disclose-version.D4so5Eqb.js";import{ap as X,as as b,aq as Y,M as r,g as s,s as n,t as A,c as z,f as x,ar as Z,r as f}from"../chunks/runtime.Dt2x7lAe.js";import{s as P}from"../chunks/render.DMY-X1m_.js";import{i as k}from"../chunks/if.5np4T-ru.js";import{e as N}from"../chunks/each.B-3XDmb7.js";import{t as q}from"../chunks/transitions.DpuTlYH4.js";import{p as v}from"../chunks/proxy.CVonJyiz.js";import{s as tt,a as at,b as R}from"../chunks/store.B27Enbt6.js";import{c as S}from"../chunks/store.ByHqt8zP.js";import{c as et,f as st}from"../chunks/index.3PmwA8Kz.js";import{q as rt,e as ot}from"../chunks/index.BTkzTk9i.js";const[L,ct]=et({duration:y=>Math.sqrt(y*2e3),fallback(y,{from:l,to:p}){const o=getComputedStyle(y),$=o.transform==="none"?"":o.transform,F=((l==null?void 0:l.left)||0)-((p==null?void 0:p.left)||0),_=((l==null?void 0:l.top)||0)-((p==null?void 0:p.top)||0);return{duration:600,easing:rt,css:w=>`
                transform: ${$} translate(${w*F}px, ${w*_}px);
                opacity: ${w};
            `}}});var it=g('<span class="px-40"> </span>'),nt=g('<div class="text-9xl absolute bottom-1/2 left-1/3" style="margin:auto">Success</div>'),lt=g('<div class="text-9xl absolute bottom-1/2 left-1/3" style="margin:auto">Womp womp, fail</div>'),pt=g('<button class="item svelte-d5zovx"><img class="max-h-40" alt="cup" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1403764.png&amp;f=1&amp;nofb=1&amp;ipt=9c65a797933330ae8c7cf350efd5840538c2969e4e0d7492abd4af8fc7f0b227&amp;ipo=images"> <!></button>'),mt=g('<button class="item svelte-d5zovx"><img class="max-h-40" alt="cup" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1403764.png&amp;f=1&amp;nofb=1&amp;ipt=9c65a797933330ae8c7cf350efd5840538c2969e4e0d7492abd4af8fc7f0b227&amp;ipo=images"> <!></button>'),dt=g('<button class="item svelte-d5zovx"><img class="max-h-40" alt="cup" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1403764.png&amp;f=1&amp;nofb=1&amp;ipt=9c65a797933330ae8c7cf350efd5840538c2969e4e0d7492abd4af8fc7f0b227&amp;ipo=images"> <!></button>'),ut=g('<button class="svelte-d5zovx">Start</button> <!> <!> <!> <div class="container svelte-d5zovx"><div></div> <div></div> <div></div></div>',1);function wt(y,l){X(l,!0);const p=tt(),o=()=>at(S,"$chal",p);let $=b(v(["Beker 1"])),F=b(v(["Beker 2"])),_=b(v(["Beker 3"]));function w(t,{duration:a}){return{duration:a,css:e=>{const d=ot(e);return`
					transform: scale(${d}) rotate(${d*1080}deg);
					color: hsl(
						${Math.trunc(e*360)},
						${Math.min(100,1e3*(1-e))}%,
						${Math.min(50,500*(1-e))}%
					);`}}}function Q(){if(Math.random()<.5){const t=s($);r($,v(s(_))),r(_,v(t))}else{const t=s(F);r(F,v(s(_))),r(_,v(t))}}let T=100,h=b(!1),O=b(1),B="",c=b(!1),m=b(!1);const U=async()=>{r(m,!1),r(O,v(Math.floor(Math.random()*3))),B=`Beker ${s(O)+1}`,r(h,!0),await new Promise(t=>setTimeout(t,5e3)),r(h,!1),await new Promise(t=>setTimeout(t,600));for(let t=0;t<20;(t+=1)-1)Q(),await new Promise(a=>setTimeout(a,450));r(c,!0)};var j=ut(),E=Y(j);E.__click=U;var G=n(E,2);k(G,()=>s(h),t=>{var a=it(),e=z(a);f(a),A(()=>P(e,`De goede beker is ${s(O)+1}!!!! We beginnen in 5 seconde :)`)),i(t,a)});var H=n(G,2);k(H,()=>o().chal3,t=>{var a=nt();q(1,a,()=>w,()=>({duration:8e3})),i(t,a)});var I=n(H,2);k(I,()=>s(m),t=>{var a=lt();q(1,a,()=>st,()=>({duration:8e3})),i(t,a)});var J=n(I,2),W=z(J);N(W,20,()=>s($),t=>t,(t,a)=>{var e=pt();e.__click=()=>{a===B&&s(c)?R(S,x(o).chal3=!0,x(o)):s(c)&&r(m,!0),r(c,!1)};var d=n(z(e),2);k(d,()=>s(h)||s(m),M=>{var u=D();A(()=>P(u,a)),i(M,u)}),f(e),q(3,e,()=>L,()=>({key:a,duration:T})),i(t,e)}),f(W);var C=n(W,2);N(C,20,()=>s(F),t=>t,(t,a)=>{var e=mt();e.__click=()=>{a===B&&s(c)?R(S,x(o).chal3=!0,x(o)):s(c)&&r(m,!0),r(c,!1)};var d=n(z(e),2);k(d,()=>s(h)||s(m),M=>{var u=D();A(()=>P(u,a)),i(M,u)}),f(e),q(3,e,()=>L,()=>({key:a,duration:T})),i(t,e)}),f(C);var K=n(C,2);N(K,20,()=>s(_),t=>t,(t,a)=>{var e=dt();e.__click=()=>{a===B&&s(c)?R(S,x(o).chal3=!0,x(o)):s(c)&&r(m,!0),r(c,!1)};var d=n(z(e),2);k(d,()=>s(h)||s(m),M=>{var u=D();A(()=>P(u,a)),i(M,u)}),f(e),q(3,e,()=>ct,()=>({key:a,duration:T})),i(t,e)}),f(K),f(J),i(y,j),Z()}V(["click"]);export{wt as component};