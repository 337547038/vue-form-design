import{l as t,r as c,o as s,c as i,i as p}from"./index-PaNBskVU.js";const u={__name:"log",setup(d){const l=t(),a=t({status:{1:"成功",0:"失败"}}),o=t({list:[{type:"input",control:{modelValue:"",placeholder:"请输入用户名"},config:{},name:"userName",formItem:{label:"用户名"}},{type:"input",control:{modelValue:"",placeholder:"请输入登录ip地址"},config:{},name:"ip",formItem:{label:"登录IP"}},{type:"datePicker",control:{modelValue:"",type:"date",valueFormat:"YYYY-MM-DD",placeholder:"请输入登录时间"},config:{},name:"dateTime",formItem:{label:"登录时间"}}],form:{labelWidth:"",class:"",size:"default"},config:{submitCancel:!0}}),r=t({columns:[{label:"多选",type:"selection",prop:"selection"},{label:"序号",type:"index",width:"70px",prop:"index"},{label:"用户名称",prop:"userName"},{label:"登录地址",prop:"loginIp"},{label:"登录状态",prop:"status",config:{dictKey:"status",tagList:{1:"success",0:"warning"}}},{label:"登录时间",prop:"dateTime",width:"170px",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{label:"操作信息",prop:"remark"},{label:"操作",prop:"__control"}],config:{},operateBtn:[{label:"删除",key:"del"}],controlBtn:[{label:"批量删除",key:"del",type:"danger",size:"small",icon:"delete"}]});return(e,f)=>{const n=c("ak-list");return s(),i("div",null,[p(n,{ref_key:"tableListEl",ref:l,"request-url":"loginLogList","delete-url":"loginLogDelete","search-data":o.value,data:r.value,dict:a.value,beforeDelete:e.beforeDelete,afterDelete:e.afterDelete,beforeFetch:e.beforeFetch,afterFetch:e.afterFetch},null,8,["search-data","data","dict","beforeDelete","afterDelete","beforeFetch","afterFetch"])])}}};export{u as default};
