const q=t=>t;function C(t){const n=t-1;return n*n*n+1}function v(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function m(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}function B(t,{delay:n=0,duration:s=400,easing:u=v,amount:y=5,opacity:f=0}={}){const c=getComputedStyle(t),e=+c.opacity,a=c.filter==="none"?"":c.filter,r=e*(1-f),[o,l]=m(y);return{delay:n,duration:s,easing:u,css:(d,i)=>`opacity: ${e-r*i}; filter: ${a} blur(${i*o}${l});`}}function R(t,{delay:n=0,duration:s=400,easing:u=q}={}){const y=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:u,css:f=>`opacity: ${f*y}`}}function F(t,{delay:n=0,duration:s=400,easing:u=C,x:y=0,y:f=0,opacity:c=0}={}){const e=getComputedStyle(t),a=+e.opacity,r=e.transform==="none"?"":e.transform,o=a*(1-c),[l,d]=m(y),[i,g]=m(f);return{delay:n,duration:s,easing:u,css:($,_)=>`
			transform: ${r} translate(${(1-$)*l}${d}, ${(1-$)*i}${g});
			opacity: ${a-o*_}`}}function w(t,n){for(const s in n)t[s]=n[s];return t}function j({fallback:t,...n}){const s=new Map,u=new Map;function y(c,e,a){const{delay:r=0,duration:o=p=>Math.sqrt(p)*30,easing:l=C}=w(w({},n),a),d=c.getBoundingClientRect(),i=e.getBoundingClientRect(),g=d.left-i.left,$=d.top-i.top,_=d.width/i.width,k=d.height/i.height,M=Math.sqrt(g*g+$*$),h=getComputedStyle(e),b=h.transform==="none"?"":h.transform,S=+h.opacity;return{delay:r,duration:typeof o=="function"?o(M):o,easing:l,css:(p,x)=>`
			   opacity: ${p*S};
			   transform-origin: top left;
			   transform: ${b} translate(${x*g}px,${x*$}px) scale(${p+(1-p)*_}, ${p+(1-p)*k});
		   `}}function f(c,e,a){return(r,o)=>(c.set(o.key,r),()=>{if(e.has(o.key)){const l=e.get(o.key);return e.delete(o.key),y(l,r,o)}return c.delete(o.key),t&&t(r,o,a)})}return[f(u,s,!1),f(s,u,!0)]}export{F as a,B as b,j as c,R as f};
