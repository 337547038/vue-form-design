import{d as b,k as h,y as k,u as D,l as C,G as I,h as u,p as q,r as B,W as E,s as F,o as j,c as x,i as O,N as d,A as R,X as f,z as m}from"./index-BR7JSMnu.js";const M={style:{"min-height":"300px"}},N=b({__name:"form",setup(S){const g=h(),l=k(),p=D(),i=C(),o=I({formData:{list:[],form:{},config:{}},dict:{},loading:!0}),n=u(()=>l.query.id),r=u(()=>l.query.form),c=u(()=>n.value?"edit":"add"),v=()=>{if(!r.value)return d.error("非法操作."),!1;const t={id:r.value};R("designById",t).then(a=>{const e=a.data;if(e&&Object.keys(e).length){const s=f(e.data);s&&Object.keys(s).length&&(o.formData=f(e.data)),n.value&&i.value.getData({formId:r.value,id:n.value}),g.changeBreadcrumb([{label:"内容管理"},{label:e.name}])}o.loading=!1}).catch(a=>{o.loading=!1,d.error(a.message||"非法操作..")})},_=t=>(t.formId=r.value,t),y=(t,a,e)=>{a&&e==="submit"&&p.go(-1)};return q(()=>{v()}),(t,a)=>{const e=B("ak-form"),s=E("loading");return F((j(),x("div",M,[O(e,{ref_key:"formEl",ref:i,data:o.formData,"operate-type":c.value,"request-url":"getFormContent","submit-url":c.value==="add"?"saveFormContent":"editFormContent",before:_,params:{formId:r.value.value},after:y},null,8,["data","operate-type","submit-url","params"])])),[[s,o.loading]])}}});typeof m=="function"&&m(N);export{N as default};
