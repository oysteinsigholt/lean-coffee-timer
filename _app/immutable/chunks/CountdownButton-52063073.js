import{_ as v}from"./preload-helper-aa6bc0ce.js";import{S as y,i as b,s as w,B as C,k as m,a as E,l as h,m as d,c as T,h as c,n as _,b as D,F as g,C as A,D as B,E as I,f as P,t as S,o as V}from"./index-7f86a9c1.js";import{c as u}from"./singletons-f60fdff4.js";u.disable_scroll_handling;const j=u.goto;u.invalidate;u.invalidateAll;u.prefetch;u.prefetch_routes;u.before_navigate;u.after_navigate;function k(i){let t,f,o,l;const r=i[4].default,s=C(r,i,i[3],null);return{c(){t=m("a"),s&&s.c(),f=E(),o=m("div"),this.h()},l(e){t=h(e,"A",{href:!0,class:!0});var a=d(t);s&&s.l(a),f=T(a),o=h(a,"DIV",{class:!0,style:!0}),d(o).forEach(c),a.forEach(c),this.h()},h(){_(o,"class","progress bg-slate-400 h-1 svelte-spmnz9"),_(o,"style",`animation-duration: ${i[1]}ms;`),_(t,"href",i[0]),_(t,"class","inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 relative overflow-hidden")},m(e,a){D(e,t,a),s&&s.m(t,null),g(t,f),g(t,o),l=!0},p(e,[a]){s&&s.p&&(!l||a&8)&&A(s,r,e,e[3],l?I(r,e[3],a,null):B(e[3]),null),(!l||a&1)&&_(t,"href",e[0])},i(e){l||(P(s,e),l=!0)},o(e){S(s,e),l=!1},d(e){e&&c(t),s&&s.d(e)}}}function q(i,t,f){let{$$slots:o={},$$scope:l}=t,{timeout:r}=t,{href:s}=t;const e=new Date,a=r?r.getTime()-e.getTime():null;return V(async()=>{let n;const p=await v(()=>import("./audio-ed6524f8.js"),[],import.meta.url);return a&&(n=setTimeout(()=>{p.playChime(),j(s)},a)),()=>{clearTimeout(n)}}),i.$$set=n=>{"timeout"in n&&f(2,r=n.timeout),"href"in n&&f(0,s=n.href),"$$scope"in n&&f(3,l=n.$$scope)},[s,a,r,l,o]}class M extends y{constructor(t){super(),b(this,t,q,k,w,{timeout:2,href:0})}}export{M as C};
