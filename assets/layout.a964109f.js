import{_ as l,r as h,u as d,c as $,a as r,o as s,b as _,d as u,F as m,e as x,f as g,g as k,w,h as y,t as B,n as I,p as S,i as C,j as i}from"./index.fa507870.js";const N={setup(){const e=g(),o=h([d.home,d.dialog]),n=$(()=>e.name);return{menus:o,currentMenu:n}}},V=e=>(S("data-v-98044d57"),e=e(),C(),e),F={class:"menus"},M=V(()=>u("div",{class:"menu-left"},null,-1)),b={class:"menu-right"};function j(e,o,n,a,p,v){const c=r("router-link");return s(),_("div",F,[M,u("div",b,[(s(!0),_(m,null,x(a.menus,(t,f)=>(s(),k(c,{class:I(["menu-item",{active:a.currentMenu==t.name}]),key:f,to:{name:t.name}},{default:w(()=>[y(B(t.meta.title),1)]),_:2},1032,["class","to"]))),128))])])}const z=l(N,[["render",j],["__scopeId","data-v-98044d57"]]),D={components:{menus:z}},E={class:"view"};function L(e,o,n,a,p,v){const c=r("menus"),t=r("router-view");return s(),_(m,null,[i(c),u("div",E,[i(t)])],64)}const T=l(D,[["render",L]]);export{T as default};