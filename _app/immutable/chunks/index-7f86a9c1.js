function A(){}function D(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(B)}function F(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return A;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t,n,e){t.$$.on_destroy.push(I(n,e))}function lt(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?D(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function ot(t,n,e,i,r,o){if(r){const c=L(n,e,i,o);t.p(c,r)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function at(t,n,e){return t.set(e),n}let $=!1;function G(){$=!0}function J(){$=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&u.push(a)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const l=n[u].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:K(1,r,y=>n[e[y]].claim_order,l))-1;i[u]=e[a]+1;const f=a+1;e[f]=u,r=Math.max(f,r)}const o=[],c=[];let s=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(o.push(n[u-1]);s>=u;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);o.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<o.length&&c[u].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(c[u],a)}}function Q(t,n){if($){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){$&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function _t(){return S(" ")}function ht(){return S("")}function mt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function pt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function yt(t){return t===""?null:+t}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,r=!1){X(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const u=e(s);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const u=e(s);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Y(t,n,e,i){return T(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function xt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function gt(t){return Z(t," ")}function bt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n){t.value=n==null?"":n}function wt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let m;function h(t){m=t}function O(){if(!m)throw new Error("Function called outside component initialization");return m}function vt(t){O().$$.on_mount.push(t)}function Et(t){O().$$.after_update.push(t)}const _=[],k=[],g=[],v=[],P=Promise.resolve();let E=!1;function q(){E||(E=!0,P.then(z))}function Nt(){return q(),P}function N(t){g.push(t)}function At(t){v.push(t)}const w=new Set;let x=0;function z(){const t=m;do{for(;x<_.length;){const n=_[x];x++,h(n),tt(n.$$)}for(h(null),_.length=0,x=0;k.length;)k.pop()();for(let n=0;n<g.length;n+=1){const e=g[n];w.has(e)||(w.add(e),e())}g.length=0}while(_.length);for(;v.length;)v.pop()();E=!1,w.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const b=new Set;let d;function St(){d={r:0,c:[],p:d}}function jt(){d.r||p(d.c),d=d.p}function nt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Mt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function kt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:r,on_mount:o,on_destroy:c,after_update:s}=t.$$;r&&r.m(n,e),i||N(()=>{const u=o.map(B).filter(F);c?c.push(...u):p(u),t.$$.on_mount=[]}),s.forEach(N)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(_.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Lt(t,n,e,i,r,o,c,s=[-1]){const u=m;h(t);const l=t.$$={fragment:null,ctx:null,props:o,update:A,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||u.$$.root};c&&c(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,y,...j)=>{const C=j.length?j[0]:y;return l.ctx&&r(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&rt(t,f)),y}):[],l.update(),a=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){G();const f=V(n.target);l.fragment&&l.fragment.l(f),f.forEach(R)}else l.fragment&&l.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),J(),z()}h(u)}class Tt{$destroy(){it(this,1),this.$destroy=A}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{A,lt as B,ot as C,ft as D,st as E,Q as F,ut as G,at as H,$t as I,mt as J,yt as K,k as L,Mt as M,At as N,Tt as S,_t as a,dt as b,gt as c,jt as d,ht as e,nt as f,St as g,R as h,Lt as i,Et as j,U as k,xt as l,V as m,pt as n,vt as o,wt as p,S as q,Z as r,ct as s,Ct as t,bt as u,kt as v,Bt as w,et as x,it as y,Nt as z};
