import{i as R,l as V,r as n,M as y,j as p,Q as M,R as S,o as N,b as c,O as H,D as Q,c as u,d as W,k as C,y as _,u as z,w as A,g as G,E as h,m as b,s as f,S as I,H as m}from"./index.58206b0d.js";const P=R({__name:"content",setup(J){const D=V(),i=n(),g=n(!0),a=y({searchData:[],tableData:[],dict:{},visible:!0,source:""}),v=p(()=>D.query.id),k=()=>{if(!v.value)return h.error("\u975E\u6CD5\u64CD\u4F5C..."),!1;const e={id:v.value};b("designById",e).then(s=>{const o=s.data;o&&Object.keys(o).length&&(a.searchData=f(o.data),a.tableData=f(o.listData),a.dict=I(o.dict),a.source=o.source,m(()=>{i.value.getListData(),g.value=!1}),E())})};M(()=>{B()});const B=S(()=>D.query.id,()=>{k()},{}),l=n(),t=y({visible:!1,title:"",formType:1,formData:{},width:"",dict:{},editId:""}),r=p(()=>{var e;return a.source&&((e=a.tableData.config)==null?void 0:e.openType)==="dialog"}),E=()=>{var e;r.value&&(t.width=(e=a.tableData.config)==null?void 0:e.dialogWidth,b("designById",{id:a.source}).then(s=>{const o=s.data;o&&Object.keys(o).length&&(t.formData=f(o.data),t.dict=I(o.dict))}).catch(s=>{h.error(s.message||"\u975E\u6CD5\u64CD\u4F5C.")}))},F=(e,s)=>{var o;(e.key==="add"||e.key==="edit")&&r.value&&(t.visible=!0,t.title=e.key==="add"?"\u65B0\u589E":"\u7F16\u8F91",t.formType=e.key==="add"?1:2,t.editId=s&&s.id,e.key==="add"&&((o=t.formData.config)==null?void 0:o.addLoad)&&m(()=>{l.value.getData({formId:a.source})}),e.key==="edit"&&m(()=>{l.value.getData({formId:a.source,id:s.id})}))},w=e=>(e.formId=a.source,e.id=t.editId,e),L=e=>{e==="success"&&(d(),i.value.getListData())},T=e=>{(e==="reset"||e==="cancel")&&d()},U=e=>{d(),e&&e()},d=()=>{t.visible=!1,t.editId=""};return N(()=>{k()}),(e,s)=>{const o=c("ak-list"),j=c("ak-form"),q=c("el-dialog"),x=H("loading");return Q((u(),W("div",null,[a.visible?(u(),C(o,{key:0,ref_key:"listEl",ref:i,searchData:a.searchData,tableData:a.tableData,dict:a.dict,formId:a.source,requestUrl:"getContentList",deleteUrl:"delFormContent",autoLoad:!1,onBtnClick:F},null,8,["searchData","tableData","dict","formId"])):_("",!0),z(r)?(u(),C(q,{key:1,"destroy-on-close":"",modelValue:t.visible,"onUpdate:modelValue":s[0]||(s[0]=O=>t.visible=O),title:t.title,width:t.width||"600px","before-close":U},{default:A(()=>[G(j,{ref_key:"formEl",ref:l,formData:t.formData,dict:t.dict,type:t.formType,requestUrl:"getFormContent",addUrl:"saveFormContent",editUrl:"editFormContent",beforeSubmit:w,afterSubmit:L,onBtnClick:T},null,8,["formData","dict","type"])]),_:1},8,["modelValue","title","width"])):_("",!0)])),[[x,g.value]])}}});export{P as default};