var T=Object.defineProperty;var $=e=>{throw TypeError(e)};var U=(e,t,a)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var j=(e,t,a)=>U(e,typeof t!="symbol"?t+"":t,a),v=(e,t,a)=>t.has(e)||$("Cannot "+a);var o=(e,t,a)=>(v(e,t,"read from private field"),a?a.call(e):t.get(e)),p=(e,t,a)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),k=(e,t,a,s)=>(v(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a),y=(e,t,a)=>(v(e,t,"access private method"),a);import{d as V,c as W,a as z,i as Y}from"../chunks/disclose-version.CHg3_Yus.js";import{az as q,u as N,af as X,i as b,ai as F,ah as A,ag as Z,o as _,ay as B,aj as C,ak as I}from"../chunks/runtime.BIG9PkTb.js";import{i as E}from"../chunks/if.Cf4K0tIl.js";import{s as G}from"../chunks/attributes.CyGaq1Os.js";import{t as J}from"../chunks/transitions.pDullXE6.js";var i,c,u,m,H;const g=class g{constructor(t){p(this,m);p(this,i,new WeakMap);p(this,c);p(this,u);k(this,u,t)}observe(t,a){var s=o(this,i).get(t)||new Set;return s.add(a),o(this,i).set(t,s),y(this,m,H).call(this).observe(t,o(this,u)),()=>{var n=o(this,i).get(t);n.delete(a),n.size===0&&(o(this,i).delete(t),o(this,c).unobserve(t))}}};i=new WeakMap,c=new WeakMap,u=new WeakMap,m=new WeakSet,H=function(){return o(this,c)??k(this,c,new ResizeObserver(t=>{for(var a of t){g.entries.set(a.target,a);for(var s of o(this,i).get(a.target)||[])s(a)}}))},j(g,"entries",new WeakMap);let x=g;var K=new x({box:"border-box"});function O(e,t,a){var s=K.observe(e,()=>a(e[t]));q(()=>(N(()=>a(e[t])),s))}function L(e){return Math.sin(-13*(e+1)*Math.PI/2)*Math.pow(2,-10*e)+1}var Q=W('<div class="text-9xl absolute bottom-1/2 left-1/3" style="margin:auto">YOU WIN!!!</div>'),S=(e,t)=>_(t,!0),R=W('<div class="h-svh w-full" style="background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2315758.jpg&amp;f=1&amp;nofb=1&amp;ipt=4012d3d57cbbd7951c4fec8b5b019f277d8101d8493e017213963a227296d4b4&amp;ipo=images)"><!> <button style="position: relative; left: 20px; top: 40px;" aria-label="target"><img class="object-scale-down h-10 w-10" alt="target"></button></div>');function it(e,t){X(t,!0);let a=F(void 0),s=F(void 0),n=F(!1);function D(r,{duration:f}){return{duration:f,css:h=>{const M=L(h);return`
					transform: scale(${M}) rotate(${M*1080}deg);
					color: hsl(
						${Math.trunc(h*360)},
						${Math.min(100,1e3*(1-h))}%,
						${Math.min(50,500*(1-h))}%
					);`}}}var d=R(),w=A(d);E(w,()=>b(n),r=>{var f=Q();J(1,f,()=>D,()=>({duration:8e3})),z(r,f)});var l=Z(w,2);l.__click=[S,n];var P=A(l);I(l),I(d),B(()=>G(P,"src",b(n)?"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F75%2F71%2Fa-sad-crying-emoticon-smiley-face-character-vector-6147571.jpg&f=1&nofb=1&ipt=b0efa4c6206538f439550903e6180efbb2a6aa3b93e5a8409300f0d6d9dda124&ipo=images":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YzTpUZF_qVIVnhjtS4XOygHaHa%26pid%3DApi&f=1&ipt=0e4dee67442a4ec865673100a8414559e584de6dd4f9b072a141f63797ba99f0&ipo=images")),Y("pointerenter",l,r=>{setTimeout(()=>{r.target.style.left=`${Math.random()*b(a)}px`,r.target.style.top=`${Math.random()*b(s)}px`},200)},!0),O(d,"clientHeight",r=>_(s,r)),O(d,"clientWidth",r=>_(a,r)),z(e,d),C()}V(["click"]);export{it as component};