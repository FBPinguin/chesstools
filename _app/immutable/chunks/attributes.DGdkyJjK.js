import{a0 as re,v as fe,O as se,a1 as W,x as Z,a2 as L,a3 as ne,n as ie,Q as V,a4 as O,z as T,a5 as z,a6 as D,w as $,a7 as le,a8 as te,a9 as ue,aa as ve,d as F,ab as _e,y as oe,ac as j,D as S,ad as de,A as ce,H as he,C as Q,F as m,G as y,ae as pe,af as Ae,ag as Ee,ah as ge,K as U,ai as Te,aj as Ie,ak as Ne}from"./runtime.MquPwwZX.js";import{b as we}from"./disclose-version.CaC_903X.js";function Me(a,e){return e}function xe(a,e,r,n){for(var i=[],v=e.length,_=0;_<v;_++)le(e[_].e,i,!0);var d=v>0&&i.length===0&&r!==null;if(d){var E=r.parentNode;te(E),E.append(r),n.clear(),w(a,e[0].prev,e[v-1].next)}ue(i,()=>{for(var h=0;h<v;h++){var o=e[h];d||(n.delete(o.k),w(a,o.prev,o.next)),ve(o.e,!d)}})}function Re(a,e,r,n,i,v=null){var _=a,d={items:new Map,first:null},E=(e&j)!==0;if(E){var h=a;_=T?S(de(h)):h.appendChild(re())}T&&ce();var o=null,x=!1;fe(()=>{var f=r(),u=se(f)?f:f==null?[]:W(f),t=u.length;if(x&&t===0)return;x=t===0;let I=!1;if(T){var p=_.data===he;p!==(t===0)&&(_=Q(),S(_),m(!1),I=!0)}if(T){for(var A=null,g,c=0;c<t;c++){if(y.nodeType===8&&y.data===pe){_=y,I=!0,m(!1);break}var s=u[c],l=n(s,c);g=ee(y,d,A,null,s,l,c,i,e),d.items.set(l,g),A=g}t>0&&S(Q())}if(!T){var H=_e;ke(u,d,_,i,e,(H.f&D)!==0,n)}v!==null&&(t===0?o?$(o):o=Z(()=>v(_)):o!==null&&oe(o,()=>{o=null})),I&&m(!0),r()}),T&&(_=y)}function ke(a,e,r,n,i,v,_){var Y,q,B,G;var d=(i&Ae)!==0,E=(i&(L|O))!==0,h=a.length,o=e.items,x=e.first,f=x,u,t=null,I,p=[],A=[],g,c,s,l;if(d)for(l=0;l<h;l+=1)g=a[l],c=_(g,l),s=o.get(c),s!==void 0&&((Y=s.a)==null||Y.measure(),(I??(I=new Set)).add(s));for(l=0;l<h;l+=1){if(g=a[l],c=_(g,l),s=o.get(c),s===void 0){var H=f?f.e.nodes_start:r;t=ee(H,e,t,t===null?e.first:t.next,g,c,l,n,i),o.set(c,t),p=[],A=[],f=t.next;continue}if(E&&ye(s,g,l,i),s.e.f&D&&($(s.e),d&&((q=s.a)==null||q.unfix(),(I??(I=new Set)).delete(s))),s!==f){if(u!==void 0&&u.has(s)){if(p.length<A.length){var C=A[0],N;t=C.prev;var b=p[0],M=p[p.length-1];for(N=0;N<p.length;N+=1)X(p[N],C,r);for(N=0;N<A.length;N+=1)u.delete(A[N]);w(e,b.prev,M.next),w(e,t,b),w(e,M,C),f=C,t=M,l-=1,p=[],A=[]}else u.delete(s),X(s,f,r),w(e,s.prev,s.next),w(e,s,t===null?e.first:t.next),w(e,t,s),t=s;continue}for(p=[],A=[];f!==null&&f.k!==c;)(v||!(f.e.f&D))&&(u??(u=new Set)).add(f),A.push(f),f=f.next;if(f===null)continue;s=f}p.push(s),t=s,f=s.next}if(f!==null||u!==void 0){for(var k=u===void 0?[]:W(u);f!==null;)(v||!(f.e.f&D))&&k.push(f),f=f.next;var R=k.length;if(R>0){var ae=i&j&&h===0?r:null;if(d){for(l=0;l<R;l+=1)(B=k[l].a)==null||B.measure();for(l=0;l<R;l+=1)(G=k[l].a)==null||G.fix()}xe(e,k,ae,o)}}d&&ge(()=>{var K;if(I!==void 0)for(s of I)(K=s.a)==null||K.apply()}),F.first=e.first&&e.first.e,F.last=t&&t.e}function ye(a,e,r,n){n&L&&z(a.v,e),n&O?z(a.i,r):a.i=r}function ee(a,e,r,n,i,v,_,d,E){var h=(E&L)!==0,o=(E&ne)===0,x=h?o?ie(i):V(i):i,f=E&O?V(_):_,u={i:f,v:x,k:v,a:null,e:null,prev:r,next:n};try{return u.e=Z(()=>d(a,x,f),T),u.e.prev=r&&r.e,u.e.next=n&&n.e,r===null?e.first=u:(r.next=u,r.e.next=u.e),n!==null&&(n.prev=u,n.e.prev=u.e),u}finally{}}function X(a,e,r){for(var n=a.next?a.next.e.nodes_start:r,i=e?e.e.nodes_start:r,v=a.e.nodes_start;v!==n;){var _=Ee(v);i.before(v),v=_}}function w(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Se(a){if(T){var e=!1,r=()=>{if(!e){if(e=!0,a.hasAttribute("value")){var n=a.value;J(a,"value",null),a.value=n}if(a.hasAttribute("checked")){var i=a.checked;J(a,"checked",null),a.checked=i}}};a.__on_r=r,Ne(r),we()}}function J(a,e,r,n){var i=a.__attributes??(a.__attributes={});T&&(i[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||i[e]!==(i[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Te]=r),r==null?a.removeAttribute(e):typeof r!="string"&&Ce(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var P=new Map;function Ce(a){var e=P.get(a.nodeName);if(e)return e;P.set(a.nodeName,e=[]);for(var r,n=U(a),i=Element.prototype;i!==n;){r=Ie(n);for(var v in r)r[v].set&&e.push(v);n=U(n)}return e}export{Re as e,Me as i,Se as r,J as s};
