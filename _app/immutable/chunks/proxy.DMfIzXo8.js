import{S as h,a0 as D,a7 as S,a8 as T,t as j,y as v,a9 as A,i as o,aa as u,o as l,g as x,b as E,ab as K}from"./runtime.BIG9PkTb.js";function g(s,P=null,L){if(typeof s!="object"||s===null||h in s)return s;const I=D(s);if(I!==S&&I!==T)return s;var f=new Map,b=j(s),w=v(0);b&&f.set("length",v(s.length));var y;return new Proxy(s,{defineProperty(i,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&K();var n=f.get(e);return n===void 0?(n=v(t.value),f.set(e,n)):l(n,g(t.value,y)),!0},deleteProperty(i,e){var t=f.get(e);if(t===void 0)e in i&&f.set(e,v(u));else{if(b&&typeof e=="string"){var n=f.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&l(n,r)}l(t,u),R(w)}return!0},get(i,e,t){var d;if(e===h)return s;var n=f.get(e),r=e in i;if(n===void 0&&(!r||(d=x(i,e))!=null&&d.writable)&&(n=v(g(r?i[e]:u,y)),f.set(e,n)),n!==void 0){var a=o(n);return a===u?void 0:a}return Reflect.get(i,e,t)},getOwnPropertyDescriptor(i,e){var t=Reflect.getOwnPropertyDescriptor(i,e);if(t&&"value"in t){var n=f.get(e);n&&(t.value=o(n))}else if(t===void 0){var r=f.get(e),a=r==null?void 0:r.v;if(r!==void 0&&a!==u)return{enumerable:!0,configurable:!0,value:a,writable:!0}}return t},has(i,e){var a;if(e===h)return!0;var t=f.get(e),n=t!==void 0&&t.v!==u||Reflect.has(i,e);if(t!==void 0||E!==null&&(!n||(a=x(i,e))!=null&&a.writable)){t===void 0&&(t=v(n?g(i[e],y):u),f.set(e,t));var r=o(t);if(r===u)return!1}return n},set(i,e,t,n){var O;var r=f.get(e),a=e in i;if(b&&e==="length")for(var d=t;d<r.v;d+=1){var _=f.get(d+"");_!==void 0?l(_,u):d in i&&(_=v(u),f.set(d+"",_))}r===void 0?(!a||(O=x(i,e))!=null&&O.writable)&&(r=v(void 0),l(r,g(t,y)),f.set(e,r)):(a=r.v!==u,l(r,g(t,y)));var c=Reflect.getOwnPropertyDescriptor(i,e);if(c!=null&&c.set&&c.set.call(n,t),!a){if(b&&typeof e=="string"){var N=f.get("length"),m=Number(e);Number.isInteger(m)&&m>=N.v&&l(N,m+1)}R(w)}return!0},ownKeys(i){o(w);var e=Reflect.ownKeys(i).filter(r=>{var a=f.get(r);return a===void 0||a.v!==u});for(var[t,n]of f)n.v!==u&&!(t in i)&&e.push(t);return e},setPrototypeOf(){A()}})}function R(s,P=1){l(s,s.v+P)}export{g as p};