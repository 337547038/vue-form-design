import{d as C,l as i,G as h,H as k,p as w,a9 as B,r as d,o as r,b as g,w as l,g as c,c as T,f as N,i as E,m as H,q as L,aa as M}from"./index-58CrIaYW.js";const U=["innerHTML"],j=["id"],q={class:"dialog-footer"},z=C({__name:"aceDrawer",props:{modelValue:{type:Boolean},title:{},direction:{default:"ltr"},content:{default:""},id:{default:"editJson"},codeType:{}},emits:["beforeClose","confirm","update:modelValue"],setup(u,{emit:m}){const t=u,n=m,o=i({}),a=i(!1),f=h(()=>t.modelValue,e=>{a.value=e,e&&p()}),p=()=>{L(()=>{o.value=M(t.content,t.id,t.codeType)})},v=()=>{const e=o.value.getValue();n("confirm",e)},_=()=>{n("update:modelValue",!1),n("beforeClose")};return k(()=>{f()}),w(()=>{}),B(()=>{Object.keys(o.value).length!==0&&(o.value.destroy(),o.value.container.remove())}),(e,s)=>{const V=d("el-button"),b=d("el-drawer");return r(),g(b,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=y=>a.value=y),size:"60%",title:e.title,direction:e.direction,class:"ace-dialog","append-to-body":!0,"before-close":_},{header:l(()=>[c("div",{innerHTML:e.title},null,8,U)]),default:l(()=>[a.value?(r(),T("div",{key:0,id:e.id},null,8,j)):N("",!0),c("div",q,[E(V,{type:"primary",onClick:v},{default:l(()=>[H(" 确定 ")]),_:1})])]),_:1},8,["modelValue","title","direction"])}}});export{z as _};