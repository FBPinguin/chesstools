import{d as I,az as L,ah as q,X as m,aA as O,e as R,ab as M,aB as P,E as U,aC as j,aD as x,ay as D,u as G,aE as K,aF as W}from"./runtime.MquPwwZX.js";import{a as X}from"./render.DLyxcf0y.js";const g=()=>performance.now(),l={tick:r=>requestAnimationFrame(r),now:()=>g(),tasks:new Set};function z(r){l.tasks.forEach(a=>{a.c(r)||(l.tasks.delete(a),a.f())}),l.tasks.size!==0&&l.tick(z)}function H(r){let a;return l.tasks.size===0&&l.tick(z),{promise:new Promise(i=>{l.tasks.add(a={c:r,f:i})}),abort(){l.tasks.delete(a)}}}function A(r,a){r.dispatchEvent(new CustomEvent(a))}function J(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const a=r.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function S(r){const a={},i=r.split(";");for(const t of i){const[v,d]=t.split(":");if(!v||d===void 0)break;const c=J(v.trim());a[c]=d.trim()}return a}const Q=r=>r;function Z(r,a,i,t){var v=(r&K)!==0,d=(r&W)!==0,c=v&&d,E=(r&P)!==0,F=c?"both":v?"in":"out",h,o=a.inert,n,e;function b(){var s=M,N=I;O(null),R(null);try{return h??(h=i()(a,(t==null?void 0:t())??{},{direction:F}))}finally{O(s),R(N)}}var T={is_global:E,in(){var s;if(a.inert=o,!v){e==null||e.abort(),(s=e==null?void 0:e.reset)==null||s.call(e);return}d||n==null||n.abort(),A(a,"introstart"),n=p(a,b(),e,1,()=>{A(a,"introend"),n==null||n.abort(),n=h=void 0})},out(s){if(!d){s==null||s(),h=void 0;return}a.inert=!0,A(a,"outrostart"),e=p(a,b(),n,0,()=>{A(a,"outroend"),s==null||s()})},stop:()=>{n==null||n.abort(),e==null||e.abort()}},f=I;if((f.transitions??(f.transitions=[])).push(T),v&&X){var _=E;if(!_){for(var u=f.parent;u&&u.f&U;)for(;(u=u.parent)&&!(u.f&j););_=!u||(u.f&x)!==0}_&&D(()=>{G(()=>T.in())})}}function p(r,a,i,t,v){var d=t===1;if(L(a)){var c,E=!1;return q(()=>{if(!E){var _=a({direction:d?"in":"out"});c=p(r,_,i,t,v)}}),{abort:()=>{E=!0,c==null||c.abort()},deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()}}if(i==null||i.deactivate(),!(a!=null&&a.duration))return v(),{abort:m,deactivate:m,reset:m,t:()=>t};const{delay:F=0,css:h,tick:o,easing:n=Q}=a;var e=[];if(d&&i===void 0&&(o&&o(0,1),h)){var b=S(h(0,1));e.push(b,b)}var T=()=>1-t,f=r.animate(e,{duration:F});return f.onfinish=()=>{var _=(i==null?void 0:i.t())??1-t;i==null||i.abort();var u=t-_,s=a.duration*Math.abs(u),N=[];if(s>0){if(h)for(var y=Math.ceil(s/16.666666666666668),w=0;w<=y;w+=1){var C=_+u*n(w/y),B=h(C,1-C);N.push(S(B))}T=()=>{var k=f.currentTime;return _+u*n(k/s)},o&&H(()=>{if(f.playState!=="running")return!1;var k=T();return o(k,1-k),!0})}f=r.animate(N,{duration:s,fill:"forwards"}),f.onfinish=()=>{T=()=>t,o==null||o(t,1-t),v()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=m)},deactivate:()=>{v=m},reset:()=>{t===0&&(o==null||o(1,0))},t:()=>T()}}export{Z as t};
