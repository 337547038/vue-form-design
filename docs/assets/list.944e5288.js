import{i as D,I as h,M as k,r as o,H as _,b as a,c as v,d as w,g as u,w as C}from"./index.58206b0d.js";const T=D({__name:"list",setup(x){const n=h(),t=k({visible:!1,row:{}}),r=o(),i=o(),c=o({columns:[{label:"\u52FE\u9009",type:"selection"},{prop:"id",label:"ID",width:"60px"},{prop:"name",label:"\u540D\u79F0",width:"150px"},{prop:"category",label:"\u5206\u7C7B",config:{dictKey:"list"}},{prop:"status",label:"\u72B6\u6001",config:{dictKey:"status",tagList:{0:"info",1:"success"}}},{prop:"creatName",label:"\u521B\u5EFA\u4EBA"},{prop:"creatDate",label:"\u521B\u5EFA\u65F6\u95F4",width:200,config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{label:"\u64CD\u4F5C",prop:"__control",width:"180px",fixed:"right"}],controlBtn:[{label:"\u65B0\u589E\u5927\u5C4F",icon:"plus",type:"primary",click:()=>{s({})}},{label:"\u5220\u9664",key:"del",type:"danger",icon:"delete"}],operateBtn:[{label:"\u7F16\u8F91",click:e=>{s(e)}},{label:"\u8BBE\u7F6E",click:e=>{t.visible=!0,_(()=>{t.row=e})}},{label:"\u67E5\u770B",click:e=>{const{href:l}=n.resolve({path:"/design/dataScreen/show/"+e.id});window.open(l)}},{label:"\u5220\u9664",key:"del",type:"danger"}],config:{}}),s=e=>{n.push({path:"/design/dataScreen",query:{id:e.id}})},p=o({list:[{type:"input",control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165\u5927\u5C4F\u540D\u79F0"},config:{},name:"name",item:{label:"\u540D\u79F0"}},{type:"button",control:{icon:"search",label:"\u67E5\u8BE2",key:"submit",type:"primary"}},{type:"button",control:{label:"\u91CD\u7F6E",key:"reset"}}],form:{labelWidth:"",class:"",size:"default"}}),d=o({list:[{type:"input",control:{modelValue:""},config:{},name:"name",item:{label:"\u540D\u79F0"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:"screen"},name:"category",item:{label:"\u5206\u7C7B"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:1,optionsFun:"roleList",method:"post",label:"name",value:"id",help:"\u54EA\u4E9B\u89D2\u8272\u53EF\u4EE5\u67E5\u770B"},name:"roleId",item:{label:"\u6743\u9650\u89D2\u8272"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:"status"},name:"status",item:{label:"\u542F\u7528\u72B6\u6001"}},{type:"div",control:{},config:{textAlign:"center"},list:[{type:"button",control:{label:"\u4FEE\u6539",type:"primary",key:"submit"},config:{span:0}},{type:"button",control:{label:"\u53D6\u6D88",key:"reset"},config:{span:0}}]}],form:{labelWidth:"140px",class:"",size:"default",name:"formDialog"},config:{source:""}}),m=e=>{e==="success"&&(t.visible=!1,t.row={},i.value.getListData())},b=e=>(e.id=t.row.id,e),f=e=>{e==="reset"&&(t.visible=!1)},y=e=>(e.type=4,e);return(e,l)=>{const g=a("ak-list"),E=a("ak-form"),F=a("el-dialog");return v(),w("div",null,[u(g,{ref_key:"tableListEl",ref:i,requestUrl:"designList",deleteUrl:"designDelete",searchData:p.value,tableData:c.value,beforeRequest:y},null,8,["searchData","tableData"]),u(F,{modelValue:t.visible,"onUpdate:modelValue":l[0]||(l[0]=B=>t.visible=B),title:"\u8BBE\u7F6E",width:"480px","destroy-on-close":""},{default:C(()=>[u(E,{ref_key:"formEl",ref:r,formData:d.value,type:2,value:t.row,editUrl:"designChange",afterSubmit:m,beforeSubmit:b,onBtnClick:f},null,8,["formData","value"])]),_:1},8,["modelValue"])])}}});export{T as default};