import{t as y,d as C,a as E}from"../chunks/disclose-version.D4so5Eqb.js";import"../chunks/legacy.KyxtIKN7.js";import{ap as q,aq as H,f as o,s as e,c as _,t as U,ar as z,r as u}from"../chunks/runtime.Dt2x7lAe.js";import{s as p}from"../chunks/class.iyOh_DvP.js";import{i as S}from"../chunks/lifecycle.CI8-JVUl.js";import{s as T,b as g,a as B,d as G}from"../chunks/store.B27Enbt6.js";import{c as i}from"../chunks/store.ByHqt8zP.js";const I=/[&"<]/g;function J(s,t){const r=String(s??""),a=I;a.lastIndex=0;let l="",c=0;for(;a.test(r);){const n=a.lastIndex-1,m=r[n];l+=r.substring(c,n)+(m==="&"?"&amp;":m==='"'?"&quot;":"&lt;"),c=n+1}return l+r.substring(c)}const L={translate:new Map([[!0,"yes"],[!1,"no"]])};function f(s,t,r=!1){if(t==null||!t&&r||t===""&&s==="class")return"";const a=s in L&&L[s].get(t)||t,l=r?"":`="${J(a)}"`;return` ${s}${l}`}const W=""+new URL("../assets/1.CtNWsGJX.png",import.meta.url).href,X=""+new URL("../assets/2.tezqh4cJ.png",import.meta.url).href,D=""+new URL("../assets/3.DfatWyBx.png",import.meta.url).href,M=""+new URL("../assets/4.BAE-S823.png",import.meta.url).href;var N=(s,t)=>g(i,o(t).chal1=!0,o(t)),F=(s,t)=>g(i,o(t).chal2=!0,o(t)),K=(s,t)=>g(i,o(t).chal3=!0,o(t)),O=(s,t)=>g(i,o(t).chal4=!0,o(t)),P=(s,t)=>{G(i,{chal1:!1,chal2:!1,chal3:!1,chal4:!1})},Q=y(`<button>get CHAL1</button> <button>get CHAL2</button> <button>get CHAL3</button> <button>get CHAL4</button> <button>RESET</button> <div class="grid grid-rows-2 grid-cols-2 gap-0 "><a href="./catchthebutton"><img${f("src",W)} alt="cool person"></a> <a href="./suprise/waariswaldo"><img${f("src",X)} alt="cool person"></a> <a class="justify-self-end" href="./suprise/balletjeballetje"><img${f("src",D)} alt="cool person"></a> <a href="./suprise/quiz"><img${f("src",M)} alt="cool person"></a></div>`,1);function et(s,t){q(t,!1);const r=T(),a=()=>B(i,"$chal",r);S();var l=Q(),c=H(l);c.__click=[N,a];var n=e(c,2);n.__click=[F,a];var m=e(n,2);m.__click=[K,a];var v=e(m,2);v.__click=[O,a];var x=e(v,2);x.__click=[P,a];var k=e(x,2),h=_(k),$=_(h);u(h);var b=e(h,2),R=_(b);u(b);var d=e(b,2),A=_(d);u(d);var w=e(d,2),j=_(w);u(w),u(k),U(()=>{p(h,a().chal1?"justify-self-end select-none":"justify-self-end blur-3xl select-none"),p($,a().chal1?"max-h-96":"blur-3xl max-h-96"),p(R,a().chal2?"max-h-96":"blur-3xl max-h-96"),p(A,a().chal3?"max-h-80":"blur-3xl max-h-80"),p(j,a().chal4?"max-h-80":"blur-3xl max-h-80")}),E(s,l),z()}C(["click"]);export{et as component};
