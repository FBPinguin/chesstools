import{ad as i,u as b,ae as o,m as f,o as a,i as l}from"./runtime.BIG9PkTb.js";function d(u,s,n){if(u==null)return s(void 0),i;const e=b(()=>u.subscribe(s,n));return e.unsubscribe?()=>e.unsubscribe():e}let r=!1;function _(u,s,n){const e=n[s]??(n[s]={store:null,source:f(void 0),unsubscribe:i});if(e.store!==u)if(e.unsubscribe(),e.store=u??null,u==null)e.source.v=void 0,e.unsubscribe=i;else{var t=!0;e.unsubscribe=d(u,c=>{t?e.source.v=c:a(e.source,c)}),t=!1}return l(e.source)}function g(){const u={};return o(()=>{for(var s in u)u[s].unsubscribe()}),u}function v(u){var s=r;try{return r=!1,[u(),r]}finally{r=s}}export{_ as a,v as c,g as s};
