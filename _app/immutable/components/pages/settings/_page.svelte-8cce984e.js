import{S as Ae,i as Ce,s as Le,k as y,q as M,a as c,l as I,m as W,r as U,h as m,c as D,n as R,b as w,F as v,I as we,J as Me,u as Ne,K as Te,A as ke,L as C,M as L,v as N,w as T,x as V,N as B,f as F,t as G,y as H,G as J}from"../../../chunks/index-7f86a9c1.js";import{w as Pe,p as Ee,v as Se,r as ye,d as Ie,b as Re,n as qe}from"../../../chunks/stores-e5518be5.js";function Ue(t){let a,s,g,l,r,p,u;return{c(){a=y("div"),s=y("label"),g=M(t[1]),l=c(),r=y("input"),this.h()},l(i){a=I(i,"DIV",{class:!0});var f=W(a);s=I(f,"LABEL",{for:!0,class:!0});var b=W(s);g=U(b,t[1]),b.forEach(m),l=D(f),r=I(f,"INPUT",{type:!0,class:!0}),f.forEach(m),this.h()},h(){R(s,"for","email"),R(s,"class","block mb-2 text-sm font-medium text-gray-900"),R(r,"type","number"),R(r,"class","bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),r.required=!0,R(a,"class","mb-6")},m(i,f){w(i,a,f),v(a,s),v(s,g),v(a,l),v(a,r),we(r,t[0]),p||(u=Me(r,"input",t[2]),p=!0)},p(i,[f]){f&2&&Ne(g,i[1]),f&1&&Te(r.value)!==i[0]&&we(r,i[0])},i:ke,o:ke,d(i){i&&m(a),p=!1,u()}}}function We(t,a,s){let{label:g}=a,{value:l}=a;function r(){l=Te(this.value),s(0,l)}return t.$$set=p=>{"label"in p&&s(1,g=p.label),"value"in p&&s(0,l=p.value)},[l,g,r]}class K extends Ae{constructor(a){super(),Ce(this,a,We,Ue,Le,{label:1,value:0})}}function je(t){let a,s,g,l,r,p,u,i,f,b,d,j,z,$,O,Q,h,n,ue,k,ae,ie,P,se,le,E,re,ee,S,oe,X=t[7]/60+"",te,pe,ne,q,fe,Y;function Ve(e){t[8](e)}let _e={label:"Write Phase Duration"};t[6]!==void 0&&(_e.value=t[6]),i=new K({props:_e}),C.push(()=>L(i,"value",Ve));function Be(e){t[9](e)}let me={label:"Pitch Phase Duration"};t[5]!==void 0&&(me.value=t[5]),d=new K({props:me}),C.push(()=>L(d,"value",Be));function Fe(e){t[10](e)}let ve={label:"Voting Phase Duration"};t[4]!==void 0&&(ve.value=t[4]),$=new K({props:ve}),C.push(()=>L($,"value",Fe));function Ge(e){t[11](e)}let ge={label:"Ranking Phase Duration"};t[3]!==void 0&&(ge.value=t[3]),h=new K({props:ge}),C.push(()=>L(h,"value",Ge));function He(e){t[12](e)}let be={label:"Discussion Round Duration"};t[2]!==void 0&&(be.value=t[2]),k=new K({props:be}),C.push(()=>L(k,"value",He));function Je(e){t[13](e)}let de={label:"Breakpoint Duration"};t[1]!==void 0&&(de.value=t[1]),P=new K({props:de}),C.push(()=>L(P,"value",Je));function Ke(e){t[14](e)}let $e={label:"Number of Discussion Rounds"};return t[0]!==void 0&&($e.value=t[0]),E=new K({props:$e}),C.push(()=>L(E,"value",Ke)),{c(){a=y("h2"),s=M("\u2699\uFE0F Settings"),g=c(),l=y("p"),r=M("Configure session"),p=c(),u=y("div"),N(i.$$.fragment),b=c(),N(d.$$.fragment),z=c(),N($.$$.fragment),Q=c(),N(h.$$.fragment),ue=c(),N(k.$$.fragment),ie=c(),N(P.$$.fragment),le=c(),N(E.$$.fragment),ee=c(),S=y("p"),oe=M("Total session duration: "),te=M(X),pe=M(" minutes"),ne=c(),q=y("a"),fe=M("Start"),this.h()},l(e){a=I(e,"H2",{class:!0});var o=W(a);s=U(o,"\u2699\uFE0F Settings"),o.forEach(m),g=D(e),l=I(e,"P",{class:!0});var Z=W(l);r=U(Z,"Configure session"),Z.forEach(m),p=D(e),u=I(e,"DIV",{});var _=W(u);T(i.$$.fragment,_),b=D(_),T(d.$$.fragment,_),z=D(_),T($.$$.fragment,_),Q=D(_),T(h.$$.fragment,_),ue=D(_),T(k.$$.fragment,_),ie=D(_),T(P.$$.fragment,_),le=D(_),T(E.$$.fragment,_),_.forEach(m),ee=D(e),S=I(e,"P",{});var A=W(S);oe=U(A,"Total session duration: "),te=U(A,X),pe=U(A," minutes"),A.forEach(m),ne=D(e),q=I(e,"A",{href:!0});var x=W(q);fe=U(x,"Start"),x.forEach(m),this.h()},h(){R(a,"class","text-4xl font-extrabold"),R(l,"class","my-4 text-lg text-gray-500"),R(q,"href","/write")},m(e,o){w(e,a,o),v(a,s),w(e,g,o),w(e,l,o),v(l,r),w(e,p,o),w(e,u,o),V(i,u,null),v(u,b),V(d,u,null),v(u,z),V($,u,null),v(u,Q),V(h,u,null),v(u,ue),V(k,u,null),v(u,ie),V(P,u,null),v(u,le),V(E,u,null),w(e,ee,o),w(e,S,o),v(S,oe),v(S,te),v(S,pe),w(e,ne,o),w(e,q,o),v(q,fe),Y=!0},p(e,[o]){const Z={};!f&&o&64&&(f=!0,Z.value=e[6],B(()=>f=!1)),i.$set(Z);const _={};!j&&o&32&&(j=!0,_.value=e[5],B(()=>j=!1)),d.$set(_);const A={};!O&&o&16&&(O=!0,A.value=e[4],B(()=>O=!1)),$.$set(A);const x={};!n&&o&8&&(n=!0,x.value=e[3],B(()=>n=!1)),h.$set(x);const he={};!ae&&o&4&&(ae=!0,he.value=e[2],B(()=>ae=!1)),k.$set(he);const ce={};!se&&o&2&&(se=!0,ce.value=e[1],B(()=>se=!1)),P.$set(ce);const De={};!re&&o&1&&(re=!0,De.value=e[0],B(()=>re=!1)),E.$set(De),(!Y||o&128)&&X!==(X=e[7]/60+"")&&Ne(te,X)},i(e){Y||(F(i.$$.fragment,e),F(d.$$.fragment,e),F($.$$.fragment,e),F(h.$$.fragment,e),F(k.$$.fragment,e),F(P.$$.fragment,e),F(E.$$.fragment,e),Y=!0)},o(e){G(i.$$.fragment,e),G(d.$$.fragment,e),G($.$$.fragment,e),G(h.$$.fragment,e),G(k.$$.fragment,e),G(P.$$.fragment,e),G(E.$$.fragment,e),Y=!1},d(e){e&&m(a),e&&m(g),e&&m(l),e&&m(p),e&&m(u),H(i),H(d),H($),H(h),H(k),H(P),H(E),e&&m(ee),e&&m(S),e&&m(ne),e&&m(q)}}}function ze(t,a,s){let g,l,r,p,u,i,f,b;J(t,qe,n=>s(0,l=n)),J(t,Re,n=>s(1,r=n)),J(t,Ie,n=>s(2,p=n)),J(t,ye,n=>s(3,u=n)),J(t,Se,n=>s(4,i=n)),J(t,Ee,n=>s(5,f=n)),J(t,Pe,n=>s(6,b=n));function d(n){b=n,Pe.set(b)}function j(n){f=n,Ee.set(f)}function z(n){i=n,Se.set(i)}function $(n){u=n,ye.set(u)}function O(n){p=n,Ie.set(p)}function Q(n){r=n,Re.set(r)}function h(n){l=n,qe.set(l)}return t.$$.update=()=>{t.$$.dirty&127&&s(7,g=b+f+i+u+p*l+r*(l-1))},[l,r,p,u,i,f,b,g,d,j,z,$,O,Q,h]}class Xe extends Ae{constructor(a){super(),Ce(this,a,ze,je,Le,{})}}export{Xe as default};
