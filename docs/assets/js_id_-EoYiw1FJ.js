import{d as p,A as m,l,h as g,p as _,o as s,c as r,F as v,a as h,b as k,C as y,z as D,E as i}from"./index-58CrIaYW.js";import{_ as b,g as B,d as x}from"./getData-9VJTnLN2.js";const z=p({__name:"[id]",setup(C){const u=m(),o=l(!0),e=l({list:[],config:{}}),d=g(()=>{const{width:a,height:c,background:t,primary:n}=e.value.config;return{width:a,height:c,background:t,color:n,position:"relative"}}),f=()=>{B(u.params.id).then(a=>{o.value=!1,e.value=a.screenData}).catch(a=>{a!=null&&a.screenData&&(e.value=a.screenData),o.value=!1})};return _(()=>{f()}),(a,c)=>(s(),r("div",{style:D(d.value),class:"design-canvas"},[(s(!0),r(v,null,h(e.value.list,(t,n)=>(s(),k(b,{key:n,data:y(x)(t)},null,8,["data"]))),128))],4))}});typeof i=="function"&&i(z);export{z as default};