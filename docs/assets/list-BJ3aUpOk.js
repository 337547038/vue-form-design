import{d as V,u as x,G as D,l,r as o,o as m,c as C,i as s,w as r,b as I,m as E,t as T,f as F,q as N}from"./index-BR7JSMnu.js";const w=V({__name:"list",setup(q){const i=x(),t=D({visible:!1}),n=l(),c=l(),d=l({columns:[{label:"勾选",type:"selection"},{prop:"id",label:"ID",width:"60px"},{prop:"name",label:"表单名称",width:"150px"},{prop:"source",label:"数据源名称",width:"150px",render:"text",replaceValue:"source",config:{}},{prop:"category",label:"分类",config:{},render:"tag",replaceValue:"sys-form",custom:{1:"success",2:"danger"}},{prop:"status",label:"状态",render:"switch",config:{inlinePrompt:!0,activeText:"启用",inactiveText:"禁用",activeValue:1,inactiveValue:0},renderFormatter:e=>e},{prop:"creatUserId",label:"创建人",render:"text",replaceValue:"creatUser",config:{}},{prop:"updateDate",label:"更新时间",width:200,config:{},render:"datetime"},{label:"操作",prop:"control",width:"320px",fixed:"right",render:"buttons",buttons:[{label:"设置",type:"primary",click:e=>{t.visible=!0,N(()=>{n.value.setValue({name:e.name,id:e.id,category:e.category,status:e.status})})}},{label:"编辑",key:"edit",click:e=>{u(e)}},{label:"删除",key:"del"},{label:"一键创建列表",type:"primary",click:e=>{i.push({path:"/design/list",query:{form:e.id}})}}]}],controlBtn:[{label:"新增",type:"primary",size:"small",click:()=>{u({})}},{label:"删除",key:"del",size:"small"}],config:{expand:!0}}),u=e=>{i.push({path:"/design/form",query:{id:e.id}})},f=l({list:[{type:"input",control:{modelValue:"",placeholder:"请输入表单名称"},config:{},name:"name",formItem:{label:"表单名称"}},{type:"input",control:{modelValue:"",placeholder:"请输入数据源名称"},config:{},name:"sourceName",formItem:{label:"数据源名称"}},{type:"select",control:{modelValue:"",placeholder:"请选择表单分类"},config:{optionsType:2,optionsFun:"sys-form",span:3},name:"category",formItem:{label:"分类"}}],form:{labelWidth:"",class:"",size:"default"},config:{submitCancel:!0}}),b=l({list:[{type:"input",control:{modelValue:""},config:{},name:"name",formItem:{label:"表单名称"},customRules:[{type:"required",message:"请输入表单名称",trigger:"blur"}]},{type:"select",control:{modelValue:""},options:[],config:{optionsType:2,optionsFun:"sys-form"},name:"category",formItem:{label:"分类"}},{type:"select",control:{modelValue:""},options:[],config:{optionsType:2,optionsFun:"sys-status"},name:"status",formItem:{label:"启用状态"}}],form:{labelWidth:"140px",class:"",size:"default",name:"formDialog"},config:{submitCancel:!0}}),g=()=>{t.visible=!1,c.value.getListData()},y=e=>{e==="reset"&&(t.visible=!1)};return(e,p)=>{const k=o("router-link"),_=o("ak-list"),h=o("ak-form"),v=o("el-dialog");return m(),C("div",null,[s(_,{ref_key:"tableListEl",ref:c,"api-key":{list:"designList",del:"designDelete",edit:"designEdit"},"search-data":f.value,data:d.value,query:{type:1}},{sourceName:r(({row:a})=>[a.source?(m(),I(k,{key:0,to:`/design/datasource?source=${a.source}`},{default:r(()=>[E(T(a.sourceName),1)]),_:2},1032,["to"])):F("",!0)]),_:1},8,["search-data","data"]),s(v,{modelValue:t.visible,"onUpdate:modelValue":p[0]||(p[0]=a=>t.visible=a),title:"设置",width:"480px","destroy-on-close":""},{default:r(()=>[s(h,{ref_key:"formEl",ref:n,data:b.value,"operate-type":"edit","submit-url":"designEdit",after:g,onBtnClick:y},null,8,["data"])]),_:1},8,["modelValue"])])}}});export{w as default};
