import{d as h,r as k,e as v,o as C,a as o,c as n,F as p,f as d,b as l,t as m,u as w,k as D,n as S,j as q,q as x,C as B}from"./index-8552587b.js";const E={class:"task-apply"},F={class:"list"},I=["onClick"],b=h({__name:"index",setup(L){const g=B(),u=k({}),c=(e,s)=>e?e.split(",")[s]:"",f=v(()=>{const e=window.localStorage.getItem("akFormDict");let s={};return e&&(s=JSON.parse(e)),s.flow||{}}),_=()=>{x("designList",{type:3}).then(s=>{const r=s.data.list,a=[];r.forEach(t=>{a.includes(t.category)||a.push(t.category)}),a.forEach(t=>{u.value[t]=r.filter(i=>i.category===t)})})},y=e=>{g.push({path:"/task/apply/start",query:{flowId:e.id}})};return C(()=>{_()}),(e,s)=>(o(),n("div",E,[(o(!0),n(p,null,d(u.value,(r,a)=>(o(),n("div",{class:"item",key:a},[l("h3",null,m(w(f)[a]||"未分组"),1),l("div",F,[(o(!0),n(p,null,d(r,t=>(o(),n("div",{key:t.id,onClick:i=>y(t)},[c(t.icon,0)?(o(),n("i",{key:0,class:D(["icon",c(t.icon,0)]),style:S({background:c(t.icon,1)})},null,6)):q("",!0),l("span",null,m(t.name),1)],8,I))),128))])]))),128))]))}});export{b as default};