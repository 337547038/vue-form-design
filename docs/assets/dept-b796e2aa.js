import{d as V,r as n,I,a as T,c as x,l as p,w as E,m as d,B as u}from"./index-8552587b.js";const C=V({__name:"dept",setup(B){const m=n(),i=n(),f=n([]),y=n({list:[{type:"input",control:{modelValue:"",placeholder:"请输入部门名称"},config:{},name:"name",item:{label:"部门名称"}},{type:"select",control:{modelValue:""},options:[],config:{optionsType:2,optionsFun:"status"},name:"status",item:{label:"状态"}},{type:"button",control:{label:"查询",key:"submit",type:"primary"},config:{}},{type:"button",control:{label:"清空",key:"reset"},config:{}}],form:{labelWidth:"",class:"",size:"default"},config:{}}),g=n({tableProps:{rowKey:"id"},columns:[{label:"部门名称",prop:"name"},{label:"排序",prop:"sort"},{label:"状态",prop:"status",config:{dictKey:"status",tagList:{1:"success",2:"info"}}},{label:"操作",prop:"__control"}],controlBtn:[{label:"新增",type:"primary",size:"small",icon:"plus",click:()=>{t.visible=!0,t.title="新增部门",t.formType=1,r()}}],operateBtn:[{label:"新增",click:e=>{t.visible=!0,t.title="新增部门",t.formType=1,u(()=>{i.value.setValue({parentId:e.id})}),r()}},{label:"编辑",click:e=>{t.visible=!0,t.title="编辑部门",t.formType=2,t.editId=e.id,e.parentId===0&&(e.parentId=""),u(()=>{i.value.setValue(e)}),r()}},{label:"删除",key:"del"}],config:{fixedBottomScroll:!1}}),t=I({visible:!1,title:"",formType:1,editId:""}),v=n({list:[{type:"treeSelect",control:{modelValue:"",data:[],renderAfterExpand:!1,props:{label:"name"},checkStrictly:!0,placeholder:"请选择上级部门"},config:{optionsType:0},name:"parentId",item:{label:"上级部门"}},{type:"input",control:{modelValue:"",placeholder:"请输入部门名称"},config:{},name:"name",item:{label:"部门名称"},customRules:[{type:"required",message:"部门名称不能为空",trigger:"blur"}]},{type:"inputNumber",control:{modelValue:0,controlsPosition:"right"},config:{},name:"sort",item:{label:"排序"}},{type:"radio",control:{modelValue:1},options:[],config:{optionsType:2,optionsFun:"status"},name:"status",item:{label:"状态"}},{type:"textarea",control:{modelValue:""},config:{},name:"remark",item:{label:"备注"}},{type:"div",control:{},config:{textAlign:"center"},list:[{type:"button",control:{label:"确定",type:"primary",key:"submit"},config:{span:0}},{type:"button",control:{label:"取消",key:"reset"},config:{span:0}}]}],form:{labelWidth:"100px",size:"default"},config:{}}),k=e=>(t.formType===2&&(e.id=t.editId),e),_=e=>{t.visible=!1,e==="success"&&m.value.getListData()},h=e=>{e==="reset"&&(t.visible=!1)},D=e=>{const a=e.list,o=[];return b(a,0,o),f.value=o,o},b=(e,a,o)=>{e.forEach(l=>{if(l.value=l.id,l.parentId===a){const s=e.filter(c=>c.parentId===l.id);s!=null&&s.length&&(l.children=[],b(e,l.id,l.children)),o.push(l)}})},r=()=>{u(()=>{i.value.setOptions({parentId:f.value})})};return(e,a)=>{const o=d("ak-list"),l=d("ak-form"),s=d("el-dialog");return T(),x("div",null,[p(o,{ref_key:"tableListEl",ref:m,requestUrl:"deptList",deleteUrl:"deptDelete",searchData:y.value,tableData:g.value,afterResponse:D},null,8,["searchData","tableData"]),p(s,{modelValue:t.visible,"onUpdate:modelValue":a[0]||(a[0]=c=>t.visible=c),title:t.title,width:"400px","destroy-on-close":""},{default:E(()=>[p(l,{ref_key:"formNameEl",ref:i,type:t.formType,formData:v.value,addUrl:"deptSave",editUrl:"deptEdit",beforeSubmit:k,afterSubmit:_,onBtnClick:h},null,8,["type","formData"])]),_:1},8,["modelValue","title"])])}}});export{C as default};
