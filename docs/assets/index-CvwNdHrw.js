import{d as k,l as o,B as I,C as T,p as B,r as u,o as v,b as D,A as R,D as E,u as L,E as w,G as q,c as z,i as g,w as S,q as _}from"./index-BR7JSMnu.js";const A=k({__name:"content",props:{modelValue:{default:""}},emits:["update:modelValue"],setup(h,{emit:m}){const a=h,r=m,n=o(),c=o([]),d={children:"children",label:"name"},t=()=>{const s=n.value.getCheckedKeys(!1);r("update:modelValue",s.join(","))},p=()=>{R("menuList",{status:1}).then(s=>{c.value=E(s.data.list)})},f=I(()=>a.modelValue,()=>{a.modelValue&&n.value.setCheckedKeys(a.modelValue.split(","),!1)});return T(()=>{f()}),B(()=>{p()}),(s,b)=>{const y=u("el-tree");return v(),D(y,{ref_key:"treeRef",ref:n,data:c.value,"show-checkbox":"","node-key":"id","highlight-current":"",props:d,onCheckChange:t},null,8,["data"])}}}),K=k({__name:"index",setup(h){const m=L(),a=o(),r=o(),n=o({list:[{type:"input",control:{modelValue:"",placeholder:"请输入角色名称"},config:{},name:"name",formItem:{label:"角色名称"}},{type:"select",control:{modelValue:"",style:{width:"100px"}},options:[],config:{optionsType:2,addAll:"全部",optionsFun:"sys-status"},name:"status",formItem:{label:"状态"}}],form:{size:"default"},config:{submitCancel:!0}}),c=o({columns:[{label:"多选",type:"selection"},{label:"序号",type:"index",width:"70px"},{label:"角色名称",prop:"name"},{label:"状态",prop:"status",render:"tag",custom:{1:"success",0:"info"},replaceValue:"sys-status"},{label:"操作",prop:"__control",render:"buttons",buttons:[{label:"已分配用户",click:e=>{m.push({path:"/system/user",query:{roleId:e.id}})}},{label:"编辑",key:"edit",click:e=>{_(()=>{console.log(e)})}},{label:"删除",key:"del"}]}],config:{expand:!0,openType:"dialog"},controlBtn:[{label:"新增",key:"add",type:"primary",size:"small",icon:"plus"},{label:"批量删除",key:"del",type:"danger",size:"small",icon:"delete"}]}),d=o({list:[{type:"input",control:{modelValue:"",placeholder:"请输入角色名称"},config:{},name:"name",formItem:{label:"角色名称"},customRules:[{type:"required",message:"角色名称不能为空",trigger:"blur"}]},{type:"radio",control:{modelValue:1},options:[],config:{optionsType:2,optionsFun:"sys-status"},name:"status",formItem:{label:"状态"}},{type:"component",control:{modelValue:""},config:{componentName:w(A)},name:"menuId",formItem:{label:"菜单权限"}},{type:"textarea",control:{modelValue:""},config:{},name:"remark",formItem:{label:"备注"}}],form:{labelWidth:80,size:"default"},config:{submitCancel:!0}}),t=q({visible:!1,title:"",formType:"add",dict:{},editId:""}),p=(e,l)=>{var i;(e==="add"||e==="edit")&&(t.visible=!0,t.title=e==="add"?"新增":"编辑",t.formType=e,t.editId=l&&l.id,e==="add"&&((i=d.value.config)!=null&&i.addLoad)&&_(()=>{a.value.getData()}),e==="edit"&&_(()=>{a.value.setValue(l)}))},f=e=>(t.formType==="edit"&&(e.id=t.editId),e),s=(e,l,i)=>{l&&(b(),r.value.getListData())},b=()=>{t.visible=!1,t.editId=""},y=e=>{e==="reset"&&b()};return(e,l)=>{const i=u("ak-list"),V=u("ak-form"),C=u("el-dialog");return v(),z("div",null,[g(i,{ref_key:"tableListEl",ref:r,"api-key":{list:"roleList",del:"delete-url"},"search-data":n.value,data:c.value,onBtnClick:p},null,8,["search-data","data"]),g(C,{modelValue:t.visible,"onUpdate:modelValue":l[0]||(l[0]=x=>t.visible=x),"destroy-on-close":"",title:t.title,width:"420px"},{default:S(()=>[g(V,{ref_key:"formEl",ref:a,data:d.value,dict:t.dict,"operate-type":t.formType,"submit-url":t.formType==="add"?"roleSave":"roleEdit",before:f,after:s,onBtnClick:y},null,8,["data","dict","operate-type","submit-url"])]),_:1},8,["modelValue","title"])])}}});export{K as default};
