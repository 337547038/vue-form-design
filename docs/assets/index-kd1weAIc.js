import{_ as $e,g as Fe,b as ge,a as Ie}from"./aceTooptip-sMKOdplL.js";import{d as de,L as ue,o as c,c as b,g as w,F as $,a as K,m as C,t as se,n as he,f as x,a5 as Se,l as oe,h as ae,G as Ce,H as Pe,r as N,b as _,w as n,i as o,C as J,P as ve,x as ie,D as re,Q as Oe,a6 as Ee,O as De,a7 as ke,a3 as Be,$ as Y,a4 as pe,k as Ae,u as Le,A as Re,a8 as ze,p as He,B as qe,s as Ke,Y as _e,W as G,a0 as me,E as we}from"./index-PaNBskVU.js";import{_ as je}from"./aceDrawer.vue_vue_type_script_setup_true_lang-euKZDCO6.js";const fe=[],ce={optionsType:0},Ve=[{title:"基础字段",children:[{type:"input",label:"单行文本",icon:"input",control:{modelValue:""},config:{}},{type:"textarea",label:"多行文本",icon:"textarea",control:{modelValue:""},config:{}},{type:"radio",label:"单选框组",icon:"radio",control:{modelValue:""},options:fe,config:ce},{type:"checkbox",label:"多选框组",icon:"checkbox",control:{modelValue:[]},options:fe,config:ce},{type:"select",label:"下拉选择框",icon:"select",control:{modelValue:"",appendToBody:!0},options:fe,config:ce},{type:"datePicker",label:"日期选择器",icon:"date",control:{modelValue:"",type:"date"},config:{}},{type:"timePicker",label:"时间选择器",icon:"time",control:{modelValue:""},config:{}},{type:"colorPicker",label:"取色器",icon:"color",control:{modelValue:""},config:{}},{type:"switch",label:"开关",icon:"switch",control:{modelValue:!1},config:{}},{type:"inputNumber",label:"计数器",icon:"number",control:{modelValue:0},config:{}},{type:"cascader",label:"级联选择器",icon:"cascader",control:{modelValue:[]},options:[],config:ce},{type:"rate",label:"评分",icon:"rate",control:{modelValue:0},config:{}},{type:"slider",label:"滑块",icon:"slider",control:{modelValue:0},config:{}},{type:"treeSelect",label:"树形控件",icon:"tree2",control:{modelValue:"",data:[],renderAfterExpand:!1},config:{optionsType:0}},{type:"txt",label:"文字",icon:"text",control:{modelValue:""},config:{}},{type:"title",label:"标题",icon:"title",control:{modelValue:"标题"},config:{}},{type:"button",label:"按钮",icon:"button",control:{label:"保存"},config:{}}]},{title:"高级字段",children:[{type:"table",label:"子表",icon:"table",list:[],tableData:[],control:{border:!0},config:{addBtnText:"添加一行"}},{type:"component",label:"自定义组件",icon:"component",control:{modelValue:""},config:{}},{type:"upload",label:"图片/文件",icon:"image",control:{modelValue:""},config:{}},{type:"chunkUpload",label:"选择上传",icon:"upload",control:{modelValue:""},config:{}},{type:"tinymce",label:"tinymce富文本",icon:"tinymce",control:{modelValue:""},config:{}}]},{title:"布局字段",children:[{type:"grid",label:"格栅布局",icon:"grid",columns:[{attr:{span:12},list:[]},{attr:{span:12},list:[]}],control:{},config:{}},{type:"tabs",label:"标签页",icon:"tabs",columns:[{label:"Tab1",list:[]}],control:{},config:{}},{type:"card",label:"卡片布局",icon:"card",list:[],control:{},config:{}},{type:"flex",label:"弹性字段",icon:"flex",list:[],tableData:[],control:{},config:{addBtnText:"添加一行"}},{type:"divider",label:"分割线",icon:"divider",control:{},config:{}},{type:"div",label:"div容器",icon:"div",control:{},config:{},list:[]}]},{title:"扩展组件",children:[{type:"expand-user",label:"选择用户",icon:"user",control:{modelValue:""},config:{}}]}],Je={key:0,class:"no-date"},Me={key:1,class:"list"},We=["onClick"],Qe=["src"],Ge=de({__name:"template",emits:["click"],setup(q,{expose:M,emit:I}){const A=I,p=ue({visible:!1,list:[]}),a=()=>{p.visible=!0,m()},m=()=>{const t=import.meta.globEager("./template/*.ts");p.list=[],Object.keys(t).forEach(z=>{const O=t[z];p.list.push({imgPath:O.imgPath,title:O.title,formData:O.formData})})},P=t=>{A("click",t.formData),p.visible=!1};return M({open:a}),(t,z)=>p.visible?(c(),b("div",{key:0,class:he(["use-template",{active:p.visible}])},[w("span",{class:"close icon-close",onClick:z[0]||(z[0]=O=>p.visible=!1)}),p.list.length===0?(c(),b("div",Je,"暂无可用模板")):(c(),b("div",Me,[(c(!0),b($,null,K(p.list,(O,X)=>(c(),b("div",{class:"item",key:X,onClick:Z=>P(O)},[w("img",{src:O.imgPath,alt:""},null,8,Qe),C(se(O.title),1)],8,We))),128))]))],2)):x("",!0)}}),Ye={class:"components-list"},Xe={key:0},Ze=w("div",{class:"title"},"快速选择表单字段",-1),el={class:"content"},ll={class:"title"},tl=["title"],al=de({__name:"dragControl",props:{formId:{}},emits:["clickCheck","click"],setup(q,{emit:M}){const I=q,A=M,p=Se("formDesignType"),a=oe([]),m=["input","radio","checkbox","select","datePicker","timePicker","inputNumber","cascader","component","button"],P=ae(()=>p==="search"),t=ae(()=>{if(p==="search"){const D=[];return Ve.forEach(f=>{if(f.children){const U=f.children.filter(h=>m.includes(h.type));U&&U.length&&D.push({title:f.title,children:U})}}),D}else return Ve}),z=D=>ve(D),O=Ce(()=>I.formId,D=>{D&&P.value&&X(D)}),X=D=>{ie("designById",{id:D}).then(f=>{const U=re(f.data.data);U&&U.list&&g(U.list)})},Z=(D,f)=>{if(f){const U=ve(D);delete U.rules,delete U.customRules,A("clickCheck",U)}},g=D=>{D.forEach(f=>{f.type==="grid"||f.type==="tabs"?f.columns.forEach(U=>{g(U.list)}):f.type==="card"?g(f.list):m.includes(f.type)&&f.type!=="button"&&a.value.push(f)})},W=oe(),te=()=>{W.value.open()},ee=D=>{A("click",D)};return Pe(()=>{O()}),(D,f)=>{var h;const U=N("el-checkbox");return c(),b("div",Ye,[P.value&&((h=a.value)!=null&&h.length)?(c(),b("div",Xe,[Ze,w("div",el,[(c(!0),b($,null,K(a.value,d=>(c(),_(U,{key:d.name,onChange:k=>Z(d,k)},{default:n(()=>{var k;return[C(se((k=d.formItem)==null?void 0:k.label),1)]}),_:2},1032,["onChange"]))),128))])])):x("",!0),(c(!0),b($,null,K(t.value,(d,k)=>(c(),b("div",{key:k},[w("div",ll,[C(se(d.title)+" ",1),k===0&&!P.value?(c(),b("div",{key:0,class:"template",onClick:te}," 使用模板 ")):x("",!0)]),o(J(Oe),{itemKey:"key123",tag:"ul",modelValue:d.children,"onUpdate:modelValue":V=>d.children=V,group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:z},{item:n(({element:V})=>[w("li",{class:he([V.type])},[w("i",{class:he(`icon-${V.icon}`)},null,2),w("span",{title:V.label},se(V.label),9,tl)],2)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128)),P.value?x("",!0):(c(),_(Ge,{key:1,ref_key:"useTemplateEl",ref:W,onClick:ee},null,512))])}}}),ol={class:"sidebar-tools"},nl=w("div",{class:"h3"},[w("h3",null,"通用属性")],-1),rl=w("div",{class:"h3"},[w("h3",null,"标签配置项")],-1),sl=["onClick"],il={key:1},cl=w("div",{class:"h3"},[w("h3",null,"选项配置")],-1),ul={key:0},dl=["onClick"],pl=w("div",{class:"h3"},[w("h3",null,"校验设置")],-1),ml={key:0},fl=["onClick"],hl={key:3},vl=w("div",{class:"h3"},[w("h3",null,"其他属性")],-1),bl=w("div",{class:"h3"},[w("h3",null,"接口数据事件")],-1),yl=de({__name:"formControlAttr",props:{formData:{},formConfig:{default:()=>({})},formOtherData:{default:()=>({})}},emits:["openDialog","update:formOtherData"],setup(q,{expose:M,emit:I}){const A=q,p=I,{formConfig:a,formData:m}=Ee(A),P=De(),t=ae(()=>P.controlAttr),z=oe([]),O=ae(()=>{var e;const s=g.isSearch;return[{label:"表单名称",placeholder:"用于保存的表单名称",value:A.formOtherData.formName,key:"formName",hide:s},{label:"数据源",placeholder:"请选择数据源",value:pe(A.formOtherData.source),type:"select",options:z.value,key:"source",hide:s||!((e=z.value)!=null&&e.length),clearable:!0},{label:"表单标识",value:m.value.name,placeholder:"表单唯一标识，可为空",key:"name",hide:s},{label:"表单标签宽度",value:m.value.labelWidth,placeholder:"表单label宽，如180px",key:"labelWidth"},{label:"表单样式名称",value:m.value.class,placeholder:"额外添加的表单class类名",key:"class",type:"select",options:[{label:"无样式",value:""},{label:"每行两列",value:"form-row-2"},{label:"每行三列",value:"form-row-3"},{label:"每行四列",value:"form-row-4"}],hide:s,clearable:!0},{label:"字段名后添加冒号",value:m.value.showColon,key:"showColon",type:"switch"},{label:"组件尺寸",value:m.value.size,type:"select",key:"size",options:[{label:"large",value:"large"},{label:"default",value:"default"},{label:"small",value:"small"}]},{label:"快速添加确定取消按钮",value:a.value.submitCancel,type:"switch",path:"config",key:"submitCancel"}]}),X=ae(()=>{var s,e;if(Object.keys(t.value).length){const{control:r={},type:y,name:E,config:u={},formItem:v={},attr:R={}}=t.value;let S=!1;if(y==="table"){const H=(s=t.value)==null?void 0:s.list;H&&H.length>0&&(S=H[0].type==="index")}return[{label:"自定义Class",value:u.className,placeholder:"样式类名",path:"config.className"},{label:"字段标识",value:E,type:(e=g.dataSourceFiledList)!=null&&e.length?"select":"text",placeholder:"字段唯一标识，对应数据库",dict:g.dataSourceFiledList,path:"name",vHide:["grid","tabs","card","title","gridChild","tableColumn","divider","txt","div","button"],eventName:"filedNameKey"},{label:"占位内容",value:r.placeholder,placeholder:"placeholder",path:"control.placeholder",vShow:["password","input","textarea","select","date","number","datePicker","tinymce","timePicker","treeSelect"]},{label:"按钮类型",value:r.type,path:"control.type",type:"select",dict:{primary:"primary",success:"success",info:"info",warning:"warning",danger:"danger"},vShow:["button"],clearable:!0},{label:"按钮名称",value:r.label,path:"control.label",vShow:["button"]},{label:"按钮事件",value:r.key,path:"control.key",type:"select",dict:{submit:"提交表单",reset:"重置表单",cancel:"取消返回",none:"无动作(自定义)"},vShow:["button"]},{label:"label值",value:v.label,path:"formItem.label",vHide:["table","grid","tabs","title","gridChild","div","inputSlot","flex","button","txt"]},{label:"隐藏label",value:v.hideLabel,path:"formItem.hideLabel",type:"switch",vHide:["table","grid","tabs","title","gridChild","divider","card","div","inputSlot","flex","button","txt"]},{label:"显示类型",value:u.showType,path:"config.showType",type:"select",dict:{input:"文本选择框",img:"图片",btn:"上传按钮"},vShow:["chunkUpload"]},{label:"按钮文本",value:u.btnText,placeholder:"按钮文本，默认为选择文件",path:"config.btnText",vShow:["chunkUpload"],vIf:u.showType==="img"},{label:"可选数量",value:u.limit,placeholder:"可选择的个数，默认1个",path:"config.limit",vShow:["chunkUpload"]},{label:"接受的文件类型",value:u.accept,placeholder:"接受的文件类型，input原生属性",path:"config.accept",vShow:["chunkUpload"]},{label:"是否自动上传",value:u.auto,path:"config.auto",type:"switch",vShow:["chunkUpload"]},{label:"帮助信息",value:u.help,path:"config.help",vHide:["table","grid","tabs","gridChild","divider","div","inputSlot","flex","button","txt"]},{label:"表单栅格",value:u.span,placeholder:"表单区域栅格宽，0为自动宽",path:"config.span",vHide:["gridChild"],isNum:!0},{label:"文本值",value:r.modelValue,placeholder:"支持html",path:"control.modelValue",vShow:["txt"],inputStyle:"textarea"},{label:"设为密码",value:y,type:"select",dict:{input:"文本",password:"密码"},path:"type",vShow:["input","password"],vIf:g.isSearch},{label:"文本域高度",value:r.rows,placeholder:"输入框行数",path:"control.rows",vShow:["textarea"],isNum:!0},{label:"前缀",value:u.prepend,placeholder:"文本前缀",path:"config.prepend",vShow:["input","password"]},{label:"后缀",value:u.append,placeholder:"文本后缀",path:"config.append",vShow:["input","password"]},{label:"状态打开时的值",value:r.activeValue,placeholder:"状态打开时的值",path:"control.activeValue",vShow:["switch"],isNum:!0},{label:"状态关闭时的值",value:r.inactiveValue,placeholder:"状态关闭时的值",path:"control.inactiveValue",vShow:["switch"],isNum:!0},{label:"增加按钮文案",value:u.addBtnText,path:"config.addBtnText",type:"text",vShow:["flex","table"]},{label:"删除按钮文案",value:u.delBtnText,path:"config.delBtnText",type:"text",vShow:["flex","table"]},{label:"是否多选",value:r.multiple,path:"control.multiple",type:"switch",vShow:["select","treeSelect"],eventName:"selectMultiple"},{label:"可清空",value:r.clearable,path:"control.clearable",type:"switch",vShow:["select"]},{label:"是否禁用",value:r.disabled,path:"control.disabled",type:"switch",vShow:["input","password","textarea","radio","checkbox","select","date","switch","number","cascader","upload","rate","tinymce","treeSelect","datePicker","timePicker"],vIf:g.isSearch},{label:"是否禁用编辑",value:u.disabledEdit,path:"config.disabledEdit",type:"switch",vShow:["input","password","textarea","radio","checkbox","select","date","switch","number","cascader","upload","treeSelect","table","flex","datePicker","timePicker"],vIf:g.isSearch},{label:"添加页隐藏",value:u.displayAdd,path:"config.displayAdd",type:"switch",vIf:g.isSearch,vHide:["inputSlot"]},{label:"编辑页隐藏",value:u.displayEdit,path:"config.displayEdit",type:"switch",vIf:g.isSearch,vHide:["inputSlot"]},{label:"详情页隐藏",value:u.displayDetail,path:"config.displayDetail",type:"switch",vIf:g.isSearch,vHide:["inputSlot"]},{label:"设为Input输入框的前/后缀",value:y==="inputSlot",path:"",type:"switch",vShow:["select","inputSlot"],eventName:"setInputSlot"},{label:"标题",value:r.modelValue,path:"control.modelValue",vShow:["title"]},{label:"占据的列数span",value:R.span,path:"attr.span",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"左侧的间隔格数offset",value:R.offset,path:"attr.offset",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"向右移动格数push",value:R.push,path:"attr.push",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"向左移动格数pull",value:R.pull,path:"attr.pull",vShow:["gridChild"],eventName:"formatNumber",isNum:!0},{label:"序号列",value:S,type:"switch",vShow:["table"],eventName:"tableColumn1"},{label:"组件名",value:u.componentName,placeholder:"全局注册的组件名称",path:"config.componentName",vShow:["component"]},{label:"上传地址",value:r.action,placeholder:"图片/文件上传地址,可不填有默认值",path:"control.action",vShow:["upload"]},{label:"文件字段名",value:r.name,placeholder:"上传的文件字段名,默认file",path:"control.name",vShow:["upload"]},{label:"提示文字",value:u.tip,placeholder:"提示说明文字",path:"config.tip",vShow:["upload"]},{label:"按钮文本",value:u.btnText,placeholder:"上传按钮文本",path:"config.btnText",vShow:["upload"]},{label:"direction",type:"select",dict:{horizontal:"horizontal",vertical:"vertical"},placeholder:"分割线方向，默认horizontal",value:r.direction,path:"control.direction",vShow:["divider"]},{label:"border-style",placeholder:"分隔符样式，默认solid",value:r.borderStyle,path:"control.borderStyle",vShow:["divider"]},{label:"content-position",type:"select",dict:{left:"left",right:"right",center:"center"},value:r.contentPosition,path:"control.contentPosition",vShow:["divider"]},{label:"最小值",value:r.min,path:"control.min",vShow:["slider"],eventName:"formatNumber",isNum:!0},{label:"最大值",value:r.max,path:"control.max",vShow:["rate","slider"],eventName:"formatNumber",isNum:!0},{label:"步长",value:r.step,path:"control.step",vShow:["slider"],eventName:"formatNumber",isNum:!0},{label:"type",value:r.type,path:"control.type",vShow:["datePicker"],type:"select",placeholder:"显示类型",dict:{year:"year",month:"month",date:"date",datetime:"datetime",week:"week",datetimerange:"datetimerange",daterange:"daterange",monthrange:"monthrange"}},{label:"format",value:r.format,path:"control.format",vShow:["datePicker","timePicker"],placeholder:"显示在输入框中的格式"},{label:"value-format",value:r.valueFormat,path:"control.valueFormat",vShow:["datePicker","timePicker"],placeholder:"绑定的值"},{label:"color-format",value:r.colorFormat,path:"control.colorFormat",type:"select",placeholder:"写入 v-model 的颜色的格式",dict:{hsl:"hsl",hsv:"hsv",hex:"hex",rgb:"rgb"},vShow:["colorPicker"]},{label:"文本高度",value:r.height,path:"control.height",placeholder:"文本高度(预览查看效果)",vShow:["tinymce"]},{label:"文本宽度",value:r.width,path:"control.width",placeholder:"文本宽度(预览查看效果)",vShow:["tinymce"]},{label:"图片上传地址",value:r.imgUrl,path:"control.imgUrl",placeholder:"图片上传地址",vShow:["tinymce"]},{label:"附件上传地址",value:r.blobUrl,path:"control.blobUrl",placeholder:"附件上传地址",vShow:["tinymce"]},{label:"显示模式",value:u.style,path:"config.style",placeholder:"显示风格(预览查看效果)",type:"select",dict:{default:"default",simple:"simple"},vShow:["tinymce"]},{label:"隐藏显示",value:u.hidden,path:"config.hidden",placeholder:"条件表达式，如$.name===1"},{label:"禁用显示",value:u.disabled,path:"config.disabled",placeholder:"条件表达式，如$.name===1",vHide:["txt","title","table","grid","tabs","card","flex","divider","div"]}].filter(H=>{let le=!0;return H.vShow&&(le=H.vShow.includes(y)),H.vHide&&(le=!H.vHide.includes(y)),H.vIf&&(le=!1),le})}else return[]}),Z=Se("formDesignType"),g=ue({dataSourceFiledList:[],customRulesList:[...ke,{type:"rules",label:"自定义正则"},{type:"methods",label:"自定义方法"}],isSearch:Z==="search",tabsName:"second"});Ce(()=>P.activeKey,s=>{s&&(g.tabsName="first")});const W=(s,e)=>{switch(s.eventName){case"selectMultiple":t.value.control.modelValue=e?[]:"";break;case"tableColumn1":d(e);break;case"formatNumber":break;case"filedNameKey":s.type==="select"&&g.dataSourceFiledList.forEach(r=>{r.name===e&&(t.value.formItem&&(t.value.formItem.label=r.label),t.value.name=r.label)});break;case"setInputSlot":e?(t.value.type="inputSlot",Y.success(`请在对应的Input输入框属性前后缀设置key:${t.value.name}`)):t.value.type="select";break}if(s.path){const r=s.isNum?pe(e):e;s.path&&te(t.value,s.path,r)}},te=(s,e,r)=>{let y=s;const E=e.split(".");let u=0;for(u;u<E.length-1;u++){const S=E[u];if(S in y)y=y[S];else throw new Error(`${S} is undefined`)}const v=E[u],R=y[E[u]];return r!==void 0&&(y[v]=r),{obj:y,key:v,value:R}},ee=(s,e)=>{e==="tabs"?t.value.columns.splice(s,1):t.value.options.splice(s,1)},D=s=>{const e=t.value.type;e==="cascader"?f("cascader"):e==="treeSelect"?f("treeSelect"):s==="tabs"?t.value.columns.push({label:"标签名称",list:[]}):t.value.options.push({label:"",value:""})},f=s=>{var S;let e=t.value.control;const{type:r,config:y,options:E,control:u}=t.value;let v="";switch(r==="button"&&(e=y,s="button"),s){case"editCss":v="css";break;case"editDict":v="json";break;case"editRules":e=((S=t.value.formItem)==null?void 0:S.rules)||[];break;case"treeSelect":e=u.data;break;case"cascader":e=E;break;case"optionsParams":e=y.beforeFetch;break;case"optionsResult":e=y.afterFetch;break}p("openDialog",{content:e,codeType:v,type:s,callback:j=>{switch(s){case"editRules":t.value.formItem||(t.value.formItem={}),t.value.formItem.rules=j;break;case"editProps":t.value.control={},Object.assign(t.value.control,j);break;case"treeSelect":t.value.control.data=j;break;case"cascader":t.value.options=j;break;case"optionsParams":t.value.config.beforeFetch=j;break;case"optionsResult":t.value.config.afterFetch=j;break;case"button":t.value.config=j;break}}})},U=s=>{var e;(e=t.value.formItem)!=null&&e.rules||(t.value.formItem.rules=[]),s?t.value.formItem.rules.push({required:!0,message:"必填项",trigger:"change"}):t.value.formItem.rules.splice(0,1)},h=(s,e)=>{if(s&&s.length===0||Object.keys(t.value).length===0)return!1;const r=s.indexOf(t.value.type);return e?r!==-1:r===-1},d=s=>{const e={name:"index",type:"index",item:{label:"序号"},control:{},config:{}};s?t.value.list.unshift(e):t.value.list.splice(0,1)},k=ae(()=>{var e,r;const s=(r=(e=t.value)==null?void 0:e.formItem)==null?void 0:r.rules;return s&&s.length>0}),V=()=>{t.value.customRules||(t.value.customRules=[]),t.value.customRules.push({type:"required",message:"必填项",trigger:"blur"})},Q=s=>{var e;(e=t.value.customRules)==null||e.splice(s,1)},L=(s,e)=>{if(g.isSearch)return;const r=s;r&&ie("sourceById",{id:r}).then(y=>{var u;const E=(u=y.data)==null?void 0:u.tableData;try{g.dataSourceFiledList=JSON.parse(E)}catch{g.dataSourceFiledList=[]}e&&e(g.dataSourceFiledList)}).catch(y=>{console.log(y)})},F=()=>{g.isSearch||ie("sourceList").then(s=>{z.value=s.data.list})},T=(s,e)=>{if(s.key==="source"&&(L(s.value),P.setActiveKey(""),P.setControlAttr({})),["formName","source"].includes(s.key)){p("update:formOtherData",Object.assign(A.formOtherData,{[s.key]:s.value}));return}s.path==="config"?a.value[s.key]=s.value||e:m.value[s.key]=s.value},ne=s=>{switch(s){case 1:return"数据源接口URL或api的key,可带参数";case 2:return"字典key，默认为字段标识"}return""},be=(s,e)=>{const r=ke.filter(y=>y.type===e);r&&r.length&&(s.message=r[0].message)};return F(),M({getFormFieldBySource:L}),(s,e)=>{const r=N("el-option"),y=N("el-select"),E=N("el-switch"),u=N("el-input"),v=N("el-form-item"),R=N("el-col"),S=N("el-button"),j=N("el-checkbox"),H=N("el-form"),le=N("el-tab-pane"),xe=N("QuestionFilled"),Ue=N("el-icon"),Ne=N("el-tooltip"),Te=N("el-tabs");return c(),b("div",ol,[o(Te,{modelValue:g.tabsName,"onUpdate:modelValue":e[26]||(e[26]=l=>g.tabsName=l)},{default:n(()=>[o(le,{label:"字段配置",name:"first"},{default:n(()=>[o(H,{size:"small",class:"form"},{default:n(()=>[nl,(c(!0),b($,null,K(X.value,(l,B)=>(c(),_(v,{key:B,label:l.label},{default:n(()=>[l.type==="select"?(c(),_(y,{key:0,placeholder:l.placeholder,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,filterable:l.path==="name","allow-create":l.path==="name",clearable:l.clearable,onChange:i=>W(l,i)},{default:n(()=>[(c(!0),b($,null,K(l.dict,(i,ye)=>(c(),_(r,{key:ye,value:l.path==="name"?i.name:ye,label:l.path==="name"?`${i.label}(${i.name})`:i},null,8,["value","label"]))),128))]),_:2},1032,["placeholder","modelValue","onUpdate:modelValue","filterable","allow-create","clearable","onChange"])):l.type==="switch"?(c(),_(E,{key:1,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,onChange:i=>W(l,i)},null,8,["modelValue","onUpdate:modelValue","onChange"])):(c(),_(u,{key:2,type:l.inputStyle,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,placeholder:l.placeholder,onInput:i=>W(l,i)},null,8,["type","modelValue","onUpdate:modelValue","placeholder","onInput"]))]),_:2},1032,["label"]))),128)),h(["tabs"],!0)?(c(),b($,{key:0},[rl,(c(!0),b($,null,K(t.value.columns,(l,B)=>(c(),_(v,{key:B},{default:n(()=>[o(R,{span:12},{default:n(()=>[o(u,{placeholder:"标签配置项",modelValue:l.label,"onUpdate:modelValue":i=>l.label=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),o(R,{span:2,offset:1},{default:n(()=>[w("i",{class:"icon-del",onClick:i=>ee(B,"tabs")},null,8,sl)]),_:2},1024)]),_:2},1024))),128)),o(v,null,{default:n(()=>[o(S,{onClick:e[0]||(e[0]=l=>D("tabs"))},{default:n(()=>[C("增加标签")]),_:1})]),_:1})],64)):x("",!0),h(["radio","select","checkbox","cascader","inputSlot","treeSelect"],!0)?(c(),b("div",il,[cl,h(["select"],!0)?(c(),_(v,{key:0,label:"添加全部项"},{default:n(()=>[o(u,{placeholder:"请输入全部项文案",modelValue:t.value.config.addAll,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value.config.addAll=l)},null,8,["modelValue"])]),_:1})):x("",!0),o(v,{label:"选项数据源"},{default:n(()=>[o(y,{modelValue:t.value.config.optionsType,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value.config.optionsType=l),onChange:e[3]||(e[3]=l=>t.value.config.optionsFun="")},{default:n(()=>[o(r,{value:0,label:"固定选项"}),o(r,{value:1,label:"数据源"}),o(r,{value:2,label:"接口字典"})]),_:1},8,["modelValue"])]),_:1}),t.value.config.optionsType===0?(c(),b($,{key:1},[t.value.type!=="cascader"?(c(),b("div",ul,[(c(!0),b($,null,K(t.value.options,(l,B)=>(c(),_(v,{key:B},{default:n(()=>[o(R,{span:10},{default:n(()=>[o(u,{placeholder:"选项标签",modelValue:l.label,"onUpdate:modelValue":i=>l.label=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),o(R,{span:10,offset:1},{default:n(()=>[o(u,{placeholder:"选项值",modelValue:l.value,"onUpdate:modelValue":i=>l.value=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),o(R,{span:2,offset:1},{default:n(()=>[w("i",{class:"icon-del",onClick:i=>ee(B)},null,8,dl)]),_:2},1024)]),_:2},1024))),128))])):x("",!0),o(v,null,{default:n(()=>[o(S,{onClick:D},{default:n(()=>[C(se(t.value.type==="cascader"?"编辑":"新增"),1)]),_:1})]),_:1})],64)):(c(),b($,{key:2},[o(v,null,{default:n(()=>[o(u,{modelValue:t.value.config.optionsFun,"onUpdate:modelValue":e[5]||(e[5]=l=>t.value.config.optionsFun=l),placeholder:ne(t.value.config.optionsType)},Be({_:2},[t.value.config.optionsType===1?{name:"prepend",fn:n(()=>[o(y,{modelValue:t.value.config.method,"onUpdate:modelValue":e[4]||(e[4]=l=>t.value.config.method=l),style:{width:"80px"}},{default:n(()=>[o(r,{label:"get",value:"get"}),o(r,{label:"post",value:"post"})]),_:1},8,["modelValue"])]),key:"0"}:void 0]),1032,["modelValue","placeholder"])]),_:1}),t.value.config.optionsType===1?(c(),b($,{key:0},[o(v,{label:"指定label属性值"},{default:n(()=>[o(u,{modelValue:t.value.config.label,"onUpdate:modelValue":e[6]||(e[6]=l=>t.value.config.label=l),placeholder:"返回数据中没有label时可设置"},null,8,["modelValue"])]),_:1}),o(v,{label:"指定value属性值"},{default:n(()=>[o(u,{modelValue:t.value.config.value,"onUpdate:modelValue":e[7]||(e[7]=l=>t.value.config.value=l),placeholder:"返回数据中没有value时可设置"},null,8,["modelValue"])]),_:1})],64)):x("",!0),t.value.config.optionsType===1?(c(),_(v,{key:1},{default:n(()=>[o(S,{onClick:e[8]||(e[8]=l=>f("optionsParams"))},{default:n(()=>[C("beforeFetch ")]),_:1}),o(S,{onClick:e[9]||(e[9]=l=>f("optionsResult"))},{default:n(()=>[C("afterFetch ")]),_:1})]),_:1})):x("",!0)],64)),o(v,{label:"尝试转换value值为"},{default:n(()=>[o(y,{modelValue:t.value.config.transformData,"onUpdate:modelValue":e[10]||(e[10]=l=>t.value.config.transformData=l),placeholder:"默认为number"},{default:n(()=>[o(r,{value:"none"},{default:n(()=>[C("不转换")]),_:1}),o(r,{value:"number"},{default:n(()=>[C("number")]),_:1}),o(r,{value:"string"},{default:n(()=>[C("string")]),_:1})]),_:1},8,["modelValue"])]),_:1})])):x("",!0),!g.isSearch&&h(["txt","title","table","grid","tabs","card","switch","gridChild","tableColumn","divider","div","button"])?(c(),b($,{key:2},[pl,h(["input","password","component"],!0)?(c(),b("div",ml,[(c(!0),b($,null,K(t.value.customRules,(l,B)=>(c(),_(v,{key:l.type},{default:n(()=>[o(u,{modelValue:l.message,"onUpdate:modelValue":i=>l.message=i,placeholder:"校验提示信息"},{prepend:n(()=>[o(y,{modelValue:l.type,"onUpdate:modelValue":i=>l.type=i,style:{width:"80px"},onChange:i=>be(l,i)},{default:n(()=>[(c(!0),b($,null,K(g.customRulesList,i=>(c(),_(r,{key:i.type,label:i.label,value:i.type},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),append:n(()=>[w("i",{class:"icon-del",onClick:i=>Q(B)},null,8,fl)]),_:2},1032,["modelValue","onUpdate:modelValue"]),l.type==="rules"?(c(),_(u,{key:0,placeholder:"正则表达式",modelValue:l.rules,"onUpdate:modelValue":i=>l.rules=i},null,8,["modelValue","onUpdate:modelValue"])):x("",!0),l.type==="methods"?(c(),_(u,{key:1,placeholder:"方法名称，此方法仅适用于导出vue文件",modelValue:l.methods,"onUpdate:modelValue":i=>l.methods=i},null,8,["modelValue","onUpdate:modelValue"])):x("",!0)]),_:2},1024))),128)),o(v,null,{default:n(()=>[o(S,{onClick:V},{default:n(()=>[C("快速添加")]),_:1}),o(S,{onClick:e[11]||(e[11]=l=>f("editRules"))},{default:n(()=>[C("编写校验规则 ")]),_:1})]),_:1})])):(c(),_(v,{key:1},{default:n(()=>{var l,B;return[o(j,{modelValue:k.value,onChange:U},{default:n(()=>[C("必填 ")]),_:1},8,["modelValue"]),(l=t.value.item)!=null&&l.rules&&((B=t.value.item)!=null&&B.rules[0])?(c(),_(u,{key:0,placeholder:"自定义必填错误提示",modelValue:t.value.item.rules[0].message,"onUpdate:modelValue":e[12]||(e[12]=i=>t.value.item.rules[0].message=i)},null,8,["modelValue"])):x("",!0)]}),_:1}))],64)):x("",!0),h(["grid","card","gridChild","divider","div"])?(c(),b("div",hl,[vl,o(S,{size:"small",onClick:e[13]||(e[13]=l=>f("editProps"))},{default:n(()=>[C("编辑属性 ")]),_:1})])):x("",!0)]),_:1})]),_:1}),o(le,{label:"表单配置",name:"second"},{default:n(()=>[o(H,{size:"small",class:"form"},{default:n(()=>[(c(!0),b($,null,K(O.value.filter(l=>!l.hide),(l,B)=>(c(),_(v,{label:l.label,key:B},{default:n(()=>[l.type==="select"?(c(),_(y,{key:0,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,filterable:l.key==="class","allow-create":l.key==="class",placeholder:l.placeholder,clearable:l.clearable,onChange:i=>T(l)},{default:n(()=>[(c(!0),b($,null,K(l.options,i=>(c(),_(r,{label:i.label||i.name,key:i.label||i.name,value:J(pe)(i.value??i.id)},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","filterable","allow-create","placeholder","clearable","onChange"])):l.type==="switch"?(c(),_(E,{key:1,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,onInput:i=>T(l,i)},null,8,["modelValue","onUpdate:modelValue","onInput"])):(c(),_(u,{key:2,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,placeholder:l.placeholder,onInput:i=>T(l)},null,8,["modelValue","onUpdate:modelValue","placeholder","onInput"]))]),_:2},1032,["label"]))),128)),g.isSearch?x("",!0):(c(),_(v,{key:0},{label:n(()=>[C("添加时获取请求 "),o(Ne,{content:"新增表单数据时，从接口获取新增初始数据",placement:"top"},{default:n(()=>[o(Ue,null,{default:n(()=>[o(xe)]),_:1})]),_:1})]),default:n(()=>[o(E,{modelValue:J(a).addLoad,"onUpdate:modelValue":e[14]||(e[14]=l=>J(a).addLoad=l),onChange:e[15]||(e[15]=l=>T({key:"addLoad",path:"config"},l))},null,8,["modelValue"])]),_:1})),o(v,null,{default:n(()=>[o(S,{onClick:e[16]||(e[16]=l=>f("editCss"))},{default:n(()=>[C("编辑表单样式 ")]),_:1}),o(S,{onClick:e[17]||(e[17]=l=>f("editDict"))},{default:n(()=>[C("设置数据字典 ")]),_:1})]),_:1}),g.isSearch?x("",!0):(c(),b($,{key:1},[bl,o(v,{label:"新增数据保存url"},{default:n(()=>[o(u,{placeholder:"表单提交的url，通用提交时可不设置",modelValue:J(a).submitUrl,"onUpdate:modelValue":e[18]||(e[18]=l=>J(a).submitUrl=l)},null,8,["modelValue"])]),_:1}),o(v,{label:"修改数据保存url"},{default:n(()=>[o(u,{placeholder:"修改提交的url，通用提交时可不设置",modelValue:J(a).editUrl,"onUpdate:modelValue":e[19]||(e[19]=l=>J(a).editUrl=l)},null,8,["modelValue"])]),_:1}),o(v,{label:"获取表单数据url"},{default:n(()=>[o(u,{placeholder:"获取表单数据url，通用提交时可不设置",modelValue:J(a).requestUrl,"onUpdate:modelValue":e[20]||(e[20]=l=>J(a).requestUrl=l)},null,8,["modelValue"])]),_:1}),o(v,{class:"event-btn"},{default:n(()=>[o(S,{onClick:e[21]||(e[21]=l=>f("beforeFetch"))},{default:n(()=>[C("beforeFetch ")]),_:1}),o(S,{onClick:e[22]||(e[22]=l=>f("afterFetch"))},{default:n(()=>[C("afterFetch ")]),_:1}),o(S,{onClick:e[23]||(e[23]=l=>f("beforeSubmit"))},{default:n(()=>[C("beforeSubmit ")]),_:1}),o(S,{onClick:e[24]||(e[24]=l=>f("afterSubmit"))},{default:n(()=>[C("afterSubmit ")]),_:1}),o(S,{onClick:e[25]||(e[25]=l=>f("change"))},{default:n(()=>[C("表单组件改变事件change ")]),_:1})]),_:1})],64))]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}}),gl=q=>{const M=[];return q.forEach(I=>{const A=kl(I);let p={};switch(I.filedType){case"select":p={control:{appendToBody:!0},options:[],config:{optionsType:0}};break;case"radio":p={options:[],config:{optionsType:0}};break;case"checkbox":case"cascader":p={control:{modelValue:[]},options:[],config:{optionsType:0}};break;case"switch":p={control:{modelValue:!1},options:[]};break;case"datePicker":p={control:{type:"date"}};break;case"inputNumber":case"slider":p={control:{modelValue:0}};break}M.push(Object.assign({},A,p))}),M},kl=q=>ve({type:q.filedType,control:{modelValue:""},config:{},name:q.name,formItem:{label:q.label}}),_l=gl,wl={class:"design-container"},Vl={class:"main-body"},Sl={class:"main-form"},Cl={key:0,class:"empty-tips"},Dl={class:"dialog-footer"},xl=de({name:"designFormIndex",__name:"index",setup(q){Ae().changeBreadcrumb([{label:"系统工具"},{label:"表单设计"}]);const I=De(),A=Le(),p=Re().query||{},a=ue({formData:{list:[],form:{size:"default"},config:{}},editor:{},loading:!1,formDataPreview:{},previewVisible:!1,designType:p.type,formDict:{},formOtherData:{source:p.source||"",formName:"未命名表单"}}),m=ue({visible:!1,type:"",title:"",codeType:"",direction:void 0,callback:""}),P=oe(),t=oe();ze("formDesignType",a.designType);const z=()=>{const h=p.id;h&&(a.loading=!0,ie("designById",{id:h}).then(d=>{const k=d.data;if(k.data){const V=re(k.data);V&&Object.keys(V).length&&(a.formData=V)}a.formDict=_e(k.dict),a.formOtherData.source=k.source,a.formOtherData.formName=k.name,console.log("ok"),k.source&&a.designType!=="search"&&(console.log("ok2"),t.value.getFormFieldBySource(k.source)),a.loading=!1}).catch(d=>{Y.error(d.message||"加载异常"),a.loading=!1}))},O=h=>{switch(h){case"del":a.formData={list:[],form:{size:"default"},config:{}},I.setActiveKey(""),I.setControlAttr({});break;case"eye":I.setActiveKey(""),I.setControlAttr({}),a.previewVisible=!0;let d=G(a.formData);const k=a.formData.form.name,V=new RegExp(`get${k}ControlByName`,"g");d=d.replace(V,`getPreview${k}ControlByName`),a.formDataPreview=re(d),a.formDataPreview.form.name=`Preview${k}`;break;case"json":Z({type:"creatJson",content:a.formData});break;case"save":X();break;case"vue":P.value.open(a.formData);break}},X=()=>{const{submitUrl:h,editUrl:d,requestUrl:k}=a.formData.config;if(!a.formOtherData.source&&(!h||!d||!k)&&a.designType!=="search"){Y.error("请选择数据源或配置接口url地址，否则表单无法提交保存");return}let V={data:G(a.formData),source:a.formOtherData.source,name:a.formOtherData.formName,type:1,dict:me(a.formDict)},Q="designSave";p.id?(Object.assign(V,{id:p.id}),Q="designEdit"):V.status=1,a.designType==="search"&&(V={data:G(a.formData),dict:me(a.formDict),id:p.id}),a.loading=!0,ie(Q,V).then(L=>{Y({message:L.message||"保存成功！",type:"success"});const F=p.redirect||"/design/form/list",T={};p.redirect&&p.redirect.indexOf("?")!==-1&&p.redirect.split("?")[1].split("&").forEach(s=>{const e=s.split("=");T[e[0]]=e[1]}),A.push({path:F,query:T}),a.loading=!1}).catch(L=>{Y.error(L.message||"保存异常"),a.loading=!1}),I.setActiveKey(""),I.setControlAttr({})},Z=h=>{var T;const{type:d,direction:k,codeType:V,callback:Q,content:L}=h;m.direction=k||"ltr",m.type=d,m.codeType=V||"",m.title=Fe[d],m.visible=!0,m.callback=Q;let F;switch(d){case"editCss":F=((T=a.formData.config)==null?void 0:T.style)||"";break;case"editDict":F=me(a.formDict,!0);break;case"beforeFetch":case"beforeSubmit":case"afterFetch":case"afterSubmit":case"change":const ne=a.formData.events||{};ne[d]?F=G(ne[d],!0):F=ge(d);break;case"optionsParams":case"optionsResult":L?F=G(L,!0):F=ge(d);break;case"creatJson":F=G(L,!0);break;default:F=G(L,!0)}m.content=F},g=h=>{try{let d;switch(m.codeType){case"json":d=_e(h);break;case"css":d=h;break;default:d=re(h)}switch(typeof m.callback=="function"&&m.callback(d),m.type){case"editCss":a.formData.config||(a.formData.config={}),a.formData.config.style=d;break;case"editDict":a.formDict=d;break;case"beforeFetch":case"beforeSubmit":case"afterFetch":case"afterSubmit":case"change":a.formData.events||(a.formData.events={}),a.formData.events[m.type]=d;break;case"creatJson":a.formData=d;break}te()}catch(d){Y.error(d.message||"未知原因")}},W=()=>{te()},te=()=>{m.visible=!1,m.type="",m.title="",m.codeType="",m.callback="",m.content=""},ee=oe(),D=()=>{ee.value.validate((h,d)=>{if(h)Y.success("校验通过"),console.log(d);else return Y.error("校验不通过"),!1})},f=h=>{a.formData=re(G(h))},U=h=>{a.formData.list.push(h)};return z(),He(()=>{p.source&&t.value.getFormFieldBySource(p.source,h=>{a.formData.list=_l(h),a.formData.config={submitCancel:!0}})}),(h,d)=>{var F;const k=N("ak-form"),V=N("el-button"),Q=N("el-dialog"),L=qe("loading");return c(),b("div",wl,[o(al,{"form-id":a.formOtherData.source,onClickCheck:U,onClick:f},null,8,["form-id","onClickCheck"]),w("div",Vl,[o($e,{onClick:O}),Ke((c(),b("div",Sl,[((F=a.formData.list)==null?void 0:F.length)===0?(c(),b("div",Cl," 从左侧拖拽来添加字段 ")):x("",!0),o(k,{type:5,data:a.formData,dict:a.formDict},null,8,["data","dict"])])),[[L,a.loading]])]),o(yl,{ref_key:"formControlAttrEl",ref:t,"form-data":a.formData.form,"form-config":a.formData.config,"form-other-data":a.formOtherData,"onUpdate:formOtherData":d[0]||(d[0]=T=>a.formOtherData=T),onOpenDialog:Z},null,8,["form-data","form-config","form-other-data"]),o(je,{modelValue:m.visible,"onUpdate:modelValue":d[1]||(d[1]=T=>m.visible=T),title:m.title,direction:m.direction,content:m.content,"code-type":m.codeType,onBeforeClose:W,onConfirm:g},null,8,["modelValue","title","direction","content","code-type"]),["search"].includes(a.designType)?x("",!0):(c(),_(Ie,{key:0,ref_key:"vueFileEl",ref:P},null,512)),o(Q,{modelValue:a.previewVisible,"onUpdate:modelValue":d[3]||(d[3]=T=>a.previewVisible=T),title:"预览",fullscreen:!0},{footer:n(()=>[w("div",Dl,[o(V,{size:"small",type:"primary",onClick:D},{default:n(()=>[C(" 提交 ")]),_:1}),o(V,{size:"small",onClick:d[2]||(d[2]=T=>a.previewVisible=!1)},{default:n(()=>[C(" 取消 ")]),_:1})])]),default:n(()=>[a.previewVisible?(c(),_(k,{key:0,data:a.formDataPreview,dict:a.formDict,ref_key:"previewForm",ref:ee},null,8,["data","dict"])):x("",!0)]),_:1},8,["modelValue"])])}}});typeof we=="function"&&we(xl);export{xl as default};
