import{_ as c}from"./drawerCom.vue_vue_type_script_setup_true_lang-Bpdvn7GK.js";import{d as p,l as a,r as i,o as d,c as m,i as l}from"./index-BR7JSMnu.js";import"./tabs-BaYPImij.js";const y=p({__name:"done",setup(u){const t=a(),r=a(),o=a({list:[{type:"input",control:{modelValue:"",placeholder:"请输入审批标题"},config:{},name:"title",formItem:{label:"审批标题"}}],form:{size:"default"},config:{submitCancel:!0}}),n=a({columns:[{prop:"title",label:"审批标题"},{prop:"creatTime",label:"发起时间",render:"datetime"},{prop:"flowStatus",label:"流程状态",render:"tag",replaceValue:"sys-flow-status",custom:{0:"primary",1:"info",2:"warning",3:"success",4:"danger",5:"danger"}},{prop:"datetime",label:"审批时间",render:"datetime"},{prop:"status",label:"审批状态",render:"tag",replaceValue:{0:"拒绝",1:"同意",2:"流转",3:"撤回"},custom:{0:"danger",1:"success",2:"primary",3:"info"}},{prop:"content",label:"审批意见"},{prop:"action",label:"查看",render:"buttons",buttons:[{type:"primary",label:"详情",click:e=>{e.flowId=e.fId,t.value.open(e,"done")}}]}],config:{expand:!0}});return(e,f)=>{const s=i("ak-list");return d(),m("div",null,[l(s,{ref_key:"tableListEl",ref:r,"api-key":{list:"flowRecordDone"},"search-data":o.value,data:n.value},null,8,["search-data","data"]),l(c,{ref_key:"drawerEl",ref:t},null,512)])}}});export{y as default};
