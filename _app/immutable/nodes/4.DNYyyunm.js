import{s as M,n as w,r as S,o as q}from"../chunks/scheduler.C55nVr2J.js";import{S as A,i as H,g as C,m as g,s as O,h as y,A as B,n as T,c as d,k,a as i,B as h,C as P,o as j,f as p}from"../chunks/index.CzEIVNmY.js";function x(u){let a,_="gsub",o,n,r,l,m,s,v,f,c="run",N,b,U,I;return{c(){a=C("h2"),a.textContent=_,o=g(`
input `),n=C("input"),r=g(`
pattern `),l=C("input"),m=g(`
replacement `),s=C("input"),v=O(),f=C("button"),f.textContent=c,N=g(`
result: `),b=g(u[3]),this.h()},l(t){a=y(t,"H2",{"data-svelte-h":!0}),B(a)!=="svelte-1d6rxll"&&(a.textContent=_),o=T(t,`
input `),n=y(t,"INPUT",{type:!0}),r=T(t,`
pattern `),l=y(t,"INPUT",{type:!0}),m=T(t,`
replacement `),s=y(t,"INPUT",{type:!0}),v=d(t),f=y(t,"BUTTON",{"data-svelte-h":!0}),B(f)!=="svelte-143ksbf"&&(f.textContent=c),N=T(t,`
result: `),b=T(t,u[3]),this.h()},h(){k(n,"type","text"),k(l,"type","text"),k(s,"type","text")},m(t,e){i(t,a,e),i(t,o,e),i(t,n,e),h(n,u[0]),i(t,r,e),i(t,l,e),h(l,u[1]),i(t,m,e),i(t,s,e),h(s,u[2]),i(t,v,e),i(t,f,e),i(t,N,e),i(t,b,e),U||(I=[P(n,"input",u[5]),P(l,"input",u[6]),P(s,"input",u[7]),P(f,"click",u[4])],U=!0)},p(t,[e]){e&1&&n.value!==t[0]&&h(n,t[0]),e&2&&l.value!==t[1]&&h(l,t[1]),e&4&&s.value!==t[2]&&h(s,t[2]),e&8&&j(b,t[3])},i:w,o:w,d(t){t&&(p(a),p(o),p(n),p(r),p(l),p(m),p(s),p(v),p(f),p(N),p(b)),U=!1,S(I)}}}function z(u,a,_){let o={gsub:void 0};q(async()=>{o.gsub=Module.cwrap("gsub","string",["string","string","string"])});let n="hello",r="(%w+)",l="%1 %1",m="";function s(){o.gsub&&_(3,m=o.gsub(n,r,l))}function v(){n=this.value,_(0,n)}function f(){r=this.value,_(1,r)}function c(){l=this.value,_(2,l)}return[n,r,l,m,s,v,f,c]}class F extends A{constructor(a){super(),H(this,a,z,x,M,{})}}export{F as component};
