import{r as l,a as c,o as u,c as v,b as e,a2 as B,w as b,l as d,f as A,h as s,a0 as W,d as T,A as I,H as K,a3 as g,t as f,a1 as m}from"./index.11da6e99.js";const O={__name:"formDemo.md.vdpv_0",setup(n){const a=l({list:[{name:"input1660724087482",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"textarea1660724093238",type:"textarea",control:{modelValue:""},config:{},item:{label:"\u591A\u884C\u6587\u672C",showLabel:!1}},{name:"radio1660724102250",type:"radio",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"checkbox1660724104783",type:"checkbox",control:{modelValue:[]},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u591A\u9009\u6846\u7EC4",showLabel:!1}},{name:"select1660724088685",type:"select",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}},{name:"datePicker1660724118488",type:"datePicker",control:{modelValue:"",type:"date"},config:{},item:{label:"\u65E5\u671F\u9009\u62E9\u5668",showLabel:!1}},{name:"switch1660724123026",type:"switch",control:{modelValue:!1},config:{},item:{label:"\u5F00\u5173",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660723952800"},config:{submitBtn:{confirm:"\u63D0\u4EA4",cancel:"\u53D6\u6D88"}}});return(i,r)=>{const h=c("ak-form");return u(),v("div",null,[e(h,{formData:a.value,ref:"formName"},null,8,["formData"])])}}},E=d("\u63D0\u4EA4"),S={__name:"formDemo.md.vdpv_1",setup(n){const a=l({list:[{name:"userName",type:"input",control:{modelValue:"",placeholder:"\u5168\u5C40\u6821\u9A8C\u89C4\u5219"},config:{},item:{label:"\u7528\u6237\u540D",showLabel:!1,rules:[{key:"required",required:!0,message:"\u5FC5\u586B\u9879",trigger:"blur"}]},customRules:[]},{name:"tel",type:"input",control:{modelValue:"",placeholder:"\u9A8C\u8BC1\u624B\u673A\u53F7\u7801"},config:{},item:{label:"\u624B\u673A\u53F7",showLabel:!1},customRules:[{type:"mobile",message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",trigger:"blur"}]},{name:"wx",type:"input",control:{modelValue:"",placeholder:"\u81EA\u5B9A\u7F16\u8F91\u7684\u5FC5\u586B\u89C4\u5219"},config:{},item:{label:"\u5FAE\u4FE1\u53F7",showLabel:!1,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5FAE\u4FE1\u53F7",trigger:"change"}]}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0,placeholder:"\u4E0B\u62C9\u5FC5\u586B"},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1,rules:[{required:!0,message:"\u5FC5\u586B\u9879",trigger:"change"}]}},{name:"input1660727784191",type:"input",control:{modelValue:""},config:{},item:{label:"\u81EA\u5B9A\u4E49",showLabel:!1},customRules:[{type:"methods",message:"",trigger:"blur",methods:"customRules"}]}],form:{labelWidth:"",class:"",size:"default",name:"form1660725610088"},config:{submitBtn:{confirm:""}}});B("customRules",(t,p,o)=>{if(p!=="\u6211\u7231\u4F60")return o(new Error("\u8BF7\u8F93\u5165 \u6211\u7231\u4F60 \u54C8\u54C8\u54C8!"));o()});const i=l(!1),r=l(),h=()=>{r.value.validate((t,p)=>{if(console.log(t),console.log(p),t)alert("submit");else return console.log("error submit"),!1})};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:h},{default:b(()=>[E]),_:1})])}}},P=d("\u63D0\u4EA4"),J={__name:"formDemo.md.vdpv_2",setup(n){const a=l({list:[{name:"select1660727982838",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"async",source:1,request:"get",sourceFun:"getCheckboxFun"},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660725610088"},config:{submitBtn:{confirm:""}}}),i=l([{label:"\u9009\u98791",value:"1"}]);B("getCheckboxFun",i);const r=l(!1),h=l(),t=()=>{h.value.validate((p,o)=>{if(console.log(p),console.log(o),p)alert("submit");else return console.log("error submit"),!1})};return(p,o)=>{const j=c("ak-form"),y=c("el-button");return u(),v("div",null,[e(j,{formData:a.value,ref_key:"formName",ref:h,submitUrl:r.value},null,8,["formData","submitUrl"]),e(y,{type:"primary",onClick:t},{default:b(()=>[P]),_:1})])}}},M={__name:"formDemo.md.vdpv_3",setup(n){const a=l({list:[{name:"text",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"radio",type:"radio",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"async",source:0,request:"get",sourceFun:"/test?a=${radio}"},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1",formId:""}}),i=l(!1);return(r,h)=>{const t=c("ak-form");return u(),v("div",null,[e(t,{formData:a.value,ref:"formName",submitUrl:i.value},null,8,["formData","submitUrl"])])}}},G={__name:"formDemo.md.vdpv_4",setup(n){const a=l({list:[{type:"select",control:{modelValue:"",appendToBody:!0,filterable:!0,remote:!0,placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22"},options:[],config:{type:"async",source:0,request:"post",sourceFun:"/api/content/list",afterResponse:t=>(t.push({label:"1",value:"1"}),t),queryName:"queryName"},name:"select1662536735690",item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1662536407108"},config:{title:"form1662536407108",formId:""}}),i=l(!1),r=l(!1),h=l();return(t,p)=>{const o=c("ak-form");return u(),A(o,{formData:a.value,ref_key:"formName",ref:h,requestUrl:r.value,submitUrl:i.value},null,8,["formData","requestUrl","submitUrl"])}}},Q=s("p",null,"\u7ED3\u679C\uFF1A1.\u5355\u9009\u6807\u7B7E1\u65F6\u6216\u8005\u4E0B\u62C9\u9009\u62E9\u6807\u7B7E1\u65F6\uFF0C\u663E\u793A\u5355\u884C\u6587\u672C1\u8F93\u5165\u6846",-1),X=s("p",null,"2.\u5355\u9009\u6807\u7B7E1\u65F6\u548C\u4E0B\u62C9\u9009\u62E9\u6807\u7B7E1\u65F6\uFF0C\u663E\u793A\u5355\u884C\u6587\u672C1\u548C\u5355\u884C\u6587\u672C2\u8F93\u5165\u6846",-1),Y=d("\u63D0\u4EA4"),Z={__name:"formDemo.md.vdpv_5",setup(n){const a=l({list:[{name:"radio",type:"radio",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"1"},{label:"\u6807\u7B7E2",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"1"},{label:"\u6807\u7B7E2",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:"",linkKey:"radio",linkValue:"2",linkResult:"disabled"},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}},{name:"input1637189604237",type:"input",control:{modelValue:"",placeholder:"\u5355\u9009\u6216\u4E0B\u62C9\u4E3Alabel1\u65F6\u663E\u793A"},slot:{},config:{linkKey:"radio,select",linkValue:"1,1"},item:{label:"\u5355\u884C\u6587\u672C1",showLabel:!1},rules:[],customRules:[]},{name:"input1637198443468",type:"input",control:{modelValue:"",placeholder:"\u5355\u9009\u548C\u4E0B\u62C9\u4E3Alabel1\u65F6\u663E\u793A"},slot:{},config:{linkKey:"radio&select",linkValue:"1,1"},item:{label:"\u5355\u884C\u6587\u672C2",showLabel:!1},rules:[],customRules:[]}],form:{labelWidth:"",class:"",size:"default",name:"form1660728166875"}}),i=l(!1),r=l(),h=()=>{r.value.validate((t,p)=>{if(console.log(t),console.log(p),t)alert("submit");else return console.log("error submit"),!1})};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[Q,X,e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:h},{default:b(()=>[Y]),_:1})])}}},ss=d("\u63D0\u4EA4"),as={__name:"formDemo.md.vdpv_6",setup(n){const a=l({list:[{name:"input1661496607029",type:"input",control:{modelValue:""},config:{append:"key:select1661496610083"},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"select1661496610083",type:"inputSlot",control:{modelValue:[],appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!0}}],form:{labelWidth:"",class:"",size:"default",name:"form1661496603520",formId:""}}),i=l(!1),r=l(),h=()=>{r.value.validate((t,p)=>{if(console.log(t),console.log(p),t)alert("submit");else return console.log("error submit"),!1})};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:h},{default:b(()=>[ss]),_:1})])}}},ns=d("\u9690\u85CF\u663E\u793A\u624B\u673A\u53F7"),ls=d("\u9690\u85CF\u663E\u793A\u5FAE\u4FE1\u53F7"),ts={__name:"formDemo.md.vdpv_7",setup(n){const a=l({list:[{name:"tel",type:"input",control:{modelValue:""},config:{},item:{label:"\u624B\u673A\u53F7\u7801",showLabel:!1}},{name:"wx",type:"input",control:{modelValue:""},config:{},item:{label:"\u5FAE\u4FE1\u53F7",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660789836231"},config:{hideField:[]}}),i=l(!1),r=l(),h=t=>{const p=a.value.config.hideField.indexOf(t);p!==-1?a.value.config.hideField.splice(p,1):a.value.config.hideField.push(t)};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:p[0]||(p[0]=y=>h("tel"))},{default:b(()=>[ns]),_:1}),e(j,{type:"primary",onClick:p[1]||(p[1]=y=>h("wx"))},{default:b(()=>[ls]),_:1})])}}},ps=d("\u53D6\u503C"),es=d("\u8BBE\u503C"),cs={__name:"formDemo.md.vdpv_8",setup(n){const a=l({list:[{name:"tel",type:"input",control:{modelValue:""},config:{},item:{label:"\u624B\u673A\u53F7\u7801",showLabel:!1}},{name:"wx",type:"input",control:{modelValue:""},config:{},item:{label:"\u5FAE\u4FE1\u53F7",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"label1",value:"1"},{label:"label2",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1},rules:[]}],form:{labelWidth:"",class:"",size:"default",name:"form1660789836230"}}),i=l(!1),r=l(),h=()=>{alert(JSON.stringify(r.value.getValue()))},t=()=>{r.value.setValue({tel:"1380013800",wx:"337547038",select:"1"})};return(p,o)=>{const j=c("ak-form"),y=c("el-button");return u(),v("div",null,[e(j,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(y,{type:"primary",onClick:h},{default:b(()=>[ps]),_:1}),e(y,{type:"primary",onClick:t},{default:b(()=>[es]),_:1})])}}},rs=d("\u8BBE\u7F6Eoptions\u503C"),os={__name:"formDemo.md.vdpv_9",setup(n){const a=l({list:[{name:"radio",type:"radio",control:{modelValue:""},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"checkbox",type:"checkbox",control:{modelValue:[]},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u591A\u9009\u6846\u7EC4",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660790919277"}}),i=l(),r=()=>{i.value.setOptions({radio:[{label:"\u5355\u9009\u6D4B\u8BD5",value:"value3"}],checkbox:[{label:"\u591A\u9009\u6D4B\u8BD5",value:"value3"}],select:[{label:"\u4E0B\u62C9\u6D4B\u8BD52",value:"value3"},{label:"\u4E0B\u62C9\u6D4B\u8BD521",value:"value31"}]})};return(h,t)=>{const p=c("ak-form"),o=c("el-button");return u(),v("div",null,[e(p,{formData:a.value,ref_key:"formName",ref:i},null,8,["formData"]),e(o,{type:"primary",onClick:r},{default:b(()=>[rs]),_:1})])}}},hs=d("\u63D0\u4EA4"),is={__name:"formDemo.md.vdpv_10",setup(n){const a=l({list:[{name:"password",type:"password",control:{modelValue:""},config:{},item:{label:"\u5BC6\u7801",showLabel:!1},customRules:[{type:"required",message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]},{name:"password",type:"password",control:{modelValue:""},config:{},item:{label:"\u786E\u8BA4\u5BC6\u7801",showLabel:!1,rules:[{validator:(t,p,o)=>{const j=getform1660790919277ControlByName("password");console.log(j),p===""?o(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):p!==j.control.modelValue?o(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u6837")):o()},trigger:"change"}]}}],form:{labelWidth:"",class:"",size:"default",name:"form1660790919277"}}),i=l(!1),r=l(),h=()=>{r.value.validate((t,p)=>{if(console.log(t),console.log(p),t)alert("submit");else return console.log("error submit"),!1})};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:h},{default:b(()=>[hs]),_:1})])}}},js=d("\u63D0\u4EA4"),ds={__name:"formDemo.md.vdpv_11",setup(n){const a=l({list:[{name:"table1660792942732",type:"table",list:[{name:"index",type:"index",item:{label:"\u5E8F\u53F7"},control:{modelValue:void 0},config:{}},{name:"input1660792954637",type:"input",control:{modelValue:void 0,appendToBody:!0},config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"select1660792958068",type:"select",control:{modelValue:void 0,appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],tableData:[],control:{border:!0},config:{}}],form:{labelWidth:"",class:"",size:"default",name:"form1660790919277"}}),i=l(!1),r=l(),h=()=>{r.value.validate((t,p)=>{if(console.log(t),console.log(p),t)alert("submit");else return console.log("error submit"),!1})};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:h},{default:b(()=>[js]),_:1})])}}},ms=d("\u63D0\u4EA4"),us={__name:"formDemo.md.vdpv_12",setup(n){const a=l({list:[{name:"component1660793530856",type:"component",control:{modelValue:""},config:{componentName:"ComponentTest"},item:{label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660793512027"}}),i=l(!1),r=l(),h=()=>{r.value.validate((t,p)=>{if(console.log(t),console.log(p),t)alert("submit");else return console.log("error submit"),!1})};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:h},{default:b(()=>[ms]),_:1})])}}},gs=d("\u63D0\u4EA4"),fs={__name:"formDemo.md.vdpv_13",setup(n){const i=l({list:[{name:"upload",type:"upload",control:{modelValue:[],action:"http://localhost:3001/upload/single",listType:"picture-card",limit:2,onError:(p,o,j)=>{console.log("\u9519\u8BEF\u5F02\u5E38\u5904\u7406"),console.log(p,o,j)}},config:{tip:"\u4E00\u4E9B\u4E0A\u4F20\u63D0\u793A\u6587\u6848",btnText:""},item:{label:"\u56FE\u7247/\u6587\u4EF6",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660793512027"}}),r=l(!1),h=l(),t=()=>{h.value.validate((p,o)=>{if(console.log(p),console.log(o),p)alert("submit");else return console.log("error submit"),!1})};return setTimeout(()=>{h.value.setValue({upload:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]})},1e3),(p,o)=>{const j=c("ak-form"),y=c("el-button");return u(),v("div",null,[e(j,{formData:i.value,ref_key:"formName",ref:h,submitUrl:r.value},null,8,["formData","submitUrl"]),e(y,{type:"primary",onClick:t},{default:b(()=>[gs]),_:1})])}}},vs=d("\u63D0\u4EA4"),_s={__name:"formDemo.md.vdpv_14",setup(n){const a=l({list:[{name:"grid1660800280703",type:"grid",columns:[{attr:{span:12},list:[{name:"input1660800459694",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}}],name:"gridChild1660800443904",type:"gridChild"},{attr:{span:11,offset:1},list:[{name:"input1660800461629",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}}],name:"gridChild1660800281864",type:"gridChild"}],control:{},config:{}},{name:"input1660800338143",type:"input",control:{modelValue:""},config:{span:NaN},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660800277903"}}),i=l(!1),r=l(),h=()=>{r.value.validate((t,p)=>{if(console.log(t),console.log(p),t)alert("submit");else return console.log("error submit"),!1})};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:h},{default:b(()=>[vs]),_:1})])}}},bs=d("\u63D0\u4EA4"),ys={__name:"formDemo.md.vdpv_15",setup(n){const a=l({list:[{name:"tabs1660801144546",type:"tabs",columns:[{label:"\u6807\u7B7E\u540D\u79F01",list:[{name:"input1660801157128",type:"input",control:{modelValue:""},config:{},item:{label:"\u6807\u7B7E1\u5185\u5BB9",showLabel:!1}}]},{label:"\u6807\u7B7E\u540D\u79F02",list:[{name:"input1660801163175",type:"input",control:{modelValue:""},config:{},item:{label:"\u6807\u7B7E2\u5185\u5BB9",showLabel:!1}}]}],control:{},config:{}}],form:{labelWidth:"",class:"",size:"default",name:"form1660801142187"}}),i=l(!1),r=l(),h=()=>{r.value.validate((t,p)=>{if(console.log(t),console.log(p),t)alert("submit");else return console.log("error submit"),!1})};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:h},{default:b(()=>[bs]),_:1})])}}},ks=d("\u63D0\u4EA4"),ws={__name:"formDemo.md.vdpv_16",setup(n){const a=l({list:[{name:"card1660801241278",type:"card",list:[{name:"input1660801243525",type:"input",control:{modelValue:"",appendToBody:!0},config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"select1660801250564",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],control:{},config:{},item:{label:"\u5361\u7247\u5E03\u5C40",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660801232287"}}),i=l(!1),r=l(),h=()=>{r.value.validate((t,p)=>{if(console.log(t),console.log(p),t)alert("submit");else return console.log("error submit"),!1})};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:h},{default:b(()=>[ks]),_:1})])}}},qs=d("\u63D0\u4EA4"),Ds={__name:"formDemo.md.vdpv_17",setup(n){const a=l({list:[{name:"tinymce1660801329213",type:"tinymce",control:{modelValue:""},config:{},item:{label:"tinymce\u5BCC\u6587\u672C",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660801232287"}}),i=l(!1),r=l(),h=()=>{r.value.validate((t,p)=>{if(console.log(t),console.log(p),t)alert("submit");else return console.log("error submit"),!1})};return(t,p)=>{const o=c("ak-form"),j=c("el-button");return u(),v("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:i.value},null,8,["formData","submitUrl"]),e(j,{type:"primary",onClick:h},{default:b(()=>[qs]),_:1})])}}},z=T({components:{vdpv_0:O,vdpv_1:S,vdpv_2:J,vdpv_3:M,vdpv_4:G,vdpv_5:Z,vdpv_6:as,vdpv_7:ts,vdpv_8:cs,vdpv_9:os,vdpv_10:is,vdpv_11:ds,vdpv_12:us,vdpv_13:fs,vdpv_14:_s,vdpv_15:ys,vdpv_16:ws,vdpv_17:Ds},setup(n){const a=l(),i=l(),r=l(),h=l(),t=l(),p=l(),o=l(),j=l(),y=l(),D=l(),V=l(),C=l(),N=l(),U=l(),L=l(),x=l(),$=l(),H=l(),R=[a,i,r,h,t,p,o,j,y,D,V,C,N,U,L,x,$,H],k=I({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0,vdpv_9Height:0,vdpv_10Height:0,vdpv_11Height:0,vdpv_12Height:0,vdpv_13Height:0,vdpv_14Height:0,vdpv_15Height:0,vdpv_16Height:0,vdpv_17Height:0});return{toggleCode:w=>{const q="vdpv_"+w;k[q+"Height"]===0?k[q+"Height"]=(R[w].value?R[w].value.offsetHeight:0)||0:k[q+"Height"]=0},...K(k),vdpv_0Ref:a,vdpv_1Ref:i,vdpv_2Ref:r,vdpv_3Ref:h,vdpv_4Ref:t,vdpv_5Ref:p,vdpv_6Ref:o,vdpv_7Ref:j,vdpv_8Ref:y,vdpv_9Ref:D,vdpv_10Ref:V,vdpv_11Ref:C,vdpv_12Ref:N,vdpv_13Ref:U,vdpv_14Ref:L,vdpv_15Ref:x,vdpv_16Ref:$,vdpv_17Ref:H}}});z.$vd={matter:{},toc:[{content:"Form Demo",anchor:"form-demo",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:2},{content:"\u8868\u5355\u6821\u9A8C",anchor:"\u8868\u5355\u6821\u9A8C",level:2},{content:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E",anchor:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E",level:2},{content:"\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E",anchor:"\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E",level:2},{content:"Select\u8FDC\u7A0B\u641C\u7D22",anchor:"select\u8FDC\u7A0B\u641C\u7D22",level:2},{content:"\u8054\u52A8\u4E8B\u4EF6",anchor:"\u8054\u52A8\u4E8B\u4EF6",level:2},{content:"input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9",anchor:"input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9",level:2},{content:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A",anchor:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A",level:2},{content:"\u8868\u5355\u53D6\u503C/\u8BBE\u503C",anchor:"\u8868\u5355\u53D6\u503C\u8BBE\u503C",level:2},{content:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6EOptions\u9009\u9879\u503C",anchor:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C",level:2},{content:"\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C",anchor:"\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40",level:2},{content:"\u5BCC\u6587\u672C",anchor:"\u5BCC\u6587\u672C",level:2}]};const Vs=z,Cs={class:"vuedoc"},Ns=m('<h1 id="form-demo" data-source-line="1"><a class="markdownIt-Anchor" href="#form-demo">#</a> Form Demo</h1><h2 id="\u57FA\u7840\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h2><pre style="display:none;"></pre>',3),Us={class:"vuedoc-demo"},Ls={class:"vuedoc-demo__inner"},xs={class:"vuedoc-demo__preview"},$s={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Hs=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { provide, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1660724087482&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u884C\u6587\u672C&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;textarea1660724093238&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;textarea&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u591A\u884C\u6587\u672C&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio1660724102250&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u9009\u6846\u7EC4&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;checkbox1660724104783&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: [] },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u591A\u9009\u6846\u7EC4&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select1660724088685&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;datePicker1660724118488&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;datePicker&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;date&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65E5\u671F\u9009\u62E9\u5668&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;switch1660724123026&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;switch&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-literal">false</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5F00\u5173&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660723952800&#39;</span>
    },
    <span class="hljs-attr">config</span>: {
      <span class="hljs-attr">submitBtn</span>: { <span class="hljs-attr">confirm</span>: <span class="hljs-string">&#39;\u63D0\u4EA4&#39;</span>, <span class="hljs-attr">cancel</span>: <span class="hljs-string">&#39;\u53D6\u6D88&#39;</span> }
    }
  })
  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Rs=[Hs],Fs=m('<h2 id="\u8868\u5355\u6821\u9A8C" data-source-line="100"><a class="markdownIt-Anchor" href="#\u8868\u5355\u6821\u9A8C">#</a> \u8868\u5355\u6821\u9A8C</h2><p data-source-line="102">\u5F3A\u5927\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u53EF\u4F7F\u7528\u5FEB\u901F\u9009\u62E9\u8868\u5355\u5168\u5C40\u7684\u89C4\u5219\uFF0C\u51CF\u5C11\u540C\u6837\u7684\u89C4\u5219\u5BF9\u4E0D\u540C\u7684\u63A7\u4EF6\u91CD\u590D\u7684\u52A0\u5165\u7684rules\u6821\u9A8C\u53BB\uFF1B</p><p data-source-line="104">\u5185\u7F6E\u4E86\u5E38\u7528\u7684\u5FC5\u586B\u3001\u624B\u673A\u53F7\u7801\u3001\u56FA\u8BDD\u3001\u56FA\u8BDD\u6216\u624B\u673A\u3001\u90AE\u7BB1\u3001\u6B63\u6574\u6570\u3001\u6570\u5B57\u3001\u8EAB\u4EFD\u8BC1\u3001\u81EA\u5B9A\u4E49\u6B63\u5219\u3001\u81EA\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u4F7F\u7528\u975E\u5E38\u65B9\u4FBF\u3002</p><p data-source-line="106">\u53EF\u901A\u7528<code>./designForm/components/validate.ts</code>\u6269\u5C55\uFF0C\u6DFB\u52A0\u5E38\u7528\u6821\u9A8C\u89C4\u5219</p><pre style="display:none;"></pre>',5),Bs={class:"vuedoc-demo"},zs={class:"vuedoc-demo__inner"},As={class:"vuedoc-demo__preview"},Ws={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Ts=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { provide, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u5168\u5C40\u6821\u9A8C\u89C4\u5219&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7528\u6237\u540D&#39;</span>,
          <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span>,
          <span class="hljs-attr">rules</span>: [
            {
              <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;required&#39;</span>,
              <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
              <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u5FC5\u586B\u9879&#39;</span>,
              <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;blur&#39;</span>
            }
          ]
        },
        <span class="hljs-attr">customRules</span>: []
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;tel&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u9A8C\u8BC1\u624B\u673A\u53F7\u7801&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u624B\u673A\u53F7&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> },
        <span class="hljs-attr">customRules</span>: [
          { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;mobile&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u624B\u673A\u53F7&#39;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;blur&#39;</span> }
        ]
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;wx&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u7F16\u8F91\u7684\u5FC5\u586B\u89C4\u5219&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5FAE\u4FE1\u53F7&#39;</span>,
          <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span>,
          <span class="hljs-attr">rules</span>: [
            { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u5FAE\u4FE1\u53F7&#39;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;change&#39;</span> }
          ]
        }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">control</span>: {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>,
          <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u5FC5\u586B&#39;</span>
        },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>,
          <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span>,
          <span class="hljs-attr">rules</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u5FC5\u586B\u9879&#39;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;change&#39;</span> }]
        }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1660727784191&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> },
        <span class="hljs-attr">customRules</span>: [
          {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;methods&#39;</span>,
            <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;&#39;</span>,
            <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;blur&#39;</span>,
            <span class="hljs-attr">methods</span>: <span class="hljs-string">&#39;customRules&#39;</span>
          }
        ]
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660725610088&#39;</span>
    },
    <span class="hljs-attr">config</span>: {
      <span class="hljs-attr">submitBtn</span>: { <span class="hljs-attr">confirm</span>: <span class="hljs-string">&#39;&#39;</span> }
    }
  })
  <span class="hljs-comment">// todo \u81EA\u5B9A\u4E49\u6821\u9A8C\u65B9\u6CD5</span>
  provide(<span class="hljs-string">&#39;customRules&#39;</span>, <span class="hljs-function">(<span class="hljs-params">rule, value, callback</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (value !== <span class="hljs-string">&#39;\u6211\u7231\u4F60&#39;</span>) {
      <span class="hljs-keyword">return</span> callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&#39;\u8BF7\u8F93\u5165 \u6211\u7231\u4F60 \u54C8\u54C8\u54C8!&#39;</span>))
    } <span class="hljs-keyword">else</span> {
      callback()
    }
  }) <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Is=[Ts],Ks=s("h2",{id:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E","data-source-line":"237"},[s("a",{class:"markdownIt-Anchor",href:"#\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E"},"#"),d(" \u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E")],-1),Os=s("p",{"data-source-line":"239"},[d("\u4F7F\u7528"),s("code",null,"provide"),d("\u8BBE\u7F6E\u9009\u9879\u6570\u636E\u83B7\u53D6\u65B9\u6CD5\u9002\u7528\u4E8E\u5355\u9009\u3001\u591A\u9009\u3001\u4E0B\u62C9\u3001\u8054\u7EA7\u3002")],-1),Es=s("pre",{style:{display:"none"}},null,-1),Ss={class:"vuedoc-demo"},Ps={class:"vuedoc-demo__inner"},Js={class:"vuedoc-demo__preview"},Ms={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Gs=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { provide, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select1660727982838&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
        <span class="hljs-attr">options</span>: [],
        <span class="hljs-attr">config</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;async&#39;</span>,
          <span class="hljs-attr">source</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>,
          <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;getCheckboxFun&#39;</span>
        },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660725610088&#39;</span>
    },
    <span class="hljs-attr">config</span>: {
      <span class="hljs-attr">submitBtn</span>: { <span class="hljs-attr">confirm</span>: <span class="hljs-string">&#39;&#39;</span> }
    }
  })
  <span class="hljs-comment">// todo \u4E0B\u62C9\u9009\u62E9\u6846\u83B7\u53D6\u9009\u9879\u503C</span>
  <span class="hljs-keyword">const</span> select1660727982838Option = ref([{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> }])
  provide(<span class="hljs-string">&#39;getCheckboxFun&#39;</span>, select1660727982838Option)
  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Qs=[Gs],Xs=s("h2",{id:"\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E","data-source-line":"302"},[s("a",{class:"markdownIt-Anchor",href:"#\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E"},"#"),d(" \u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E")],-1),Ys=s("p",{"data-source-line":"304"},"\u4F7F\u7528\u52A8\u6001\u9009\u9879\u6570\u636E\u6E90\u65B9\u5F0F\u83B7\u53D6\u6570\u636E\u65F6\uFF0C\u6570\u636E\u63A5\u53E3URL\u53EF\u5E26\u4E00\u4E2A\u52A8\u6001\u7684\u53C2\u6570\uFF0C\u5E76\u4E14\u5F53name=key\u7684\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u53EF\u6839\u636E\u6539\u53D8\u7684\u503C\u91CD\u65B0\u8BF7\u6C42\u6570\u636E\u3002\u4E0B\u9762\u4F8B\u5B50\u5C55\u793A\u5F53\u5355\u9009\u6846\u7EC4\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4E0B\u62C9\u9009\u62E9\u6846\u4F1A\u91CD\u65B0\u8BF7\u6C42\u52A0\u8F7D\u4E0B\u62C9\u9879",-1),Zs=s("pre",{style:{display:"none"}},null,-1),sa={class:"vuedoc-demo"},aa={class:"vuedoc-demo__inner"},na={class:"vuedoc-demo__preview"},la={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ta=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;text&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>
        },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u884C\u6587\u672C&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u9009\u6846\u7EC4&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
        <span class="hljs-attr">options</span>: [],
        <span class="hljs-attr">config</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;async&#39;</span>,
          <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>,
          <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;/test?a=\${radio}&#39;</span>
        },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1&#39;</span>,
      <span class="hljs-attr">formId</span>: <span class="hljs-string">&#39;&#39;</span>
    }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/* provide(&#39;AKControlChange&#39;, ({ key, value, data }) =&gt; {
    console.log(key)
    console.log(data)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),pa=[ta],ea=m('<h2 id="select\u8FDC\u7A0B\u641C\u7D22" data-source-line="371"><a class="markdownIt-Anchor" href="#select\u8FDC\u7A0B\u641C\u7D22">#</a> Select\u8FDC\u7A0B\u641C\u7D22</h2><p data-source-line="373">\u542F\u7528\u8FDC\u7A0B\u641C\u7D22\uFF0C\u53EF\u901A\u8FC7\u7F16\u8F91\u5C5E\u6027\u5C06<code>filterable</code>\u548C<code>remote</code>\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u540C\u65F6\u5C06\u9009\u9879\u914D\u7F6E\u8BBE\u7F6E\u4E3A<code>\u52A8\u6001\u9009\u9879-\u6570\u636E\u6E90\u65B9\u5F0F</code>\uFF0C\u5F53\u8F93\u5165\u5173\u952E\u5B57\u65F6\uFF0C\u5C06\u4F1A\u91CD\u65B0\u6839\u636E\u8F93\u5165\u5173\u952E\u5B57\u83B7\u53D6\u6570\u636E\u3002<code>afterResponse</code>\u53EF\u5BF9\u8BF7\u6C42\u6570\u636E\u5904\u7406\u518D\u8FD4\u56DE\uFF0C\u540C\u65F6\u53EF\u901A\u8FC7\u914D\u7F6E<code>queryName</code>\u6539\u53D8\u53C2\u6570\u540D\u79F0</p><pre style="display:none;"></pre>',3),ca={class:"vuedoc-demo"},ra={class:"vuedoc-demo__inner"},oa={class:"vuedoc-demo__preview"},ha={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},ia=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span>
    <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>
    <span class="hljs-attr">:requestUrl</span>=<span class="hljs-string">&quot;requestUrl&quot;</span>
    <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">control</span>: {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>,
          <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">filterable</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">remote</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22&#39;</span>
        },
        <span class="hljs-attr">options</span>: [],
        <span class="hljs-attr">config</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;async&#39;</span>,
          <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;post&#39;</span>,
          <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;/api/content/list&#39;</span>,
          <span class="hljs-attr">afterResponse</span>: <span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {
            data.push({<span class="hljs-attr">label</span>:<span class="hljs-string">&#39;1&#39;</span>,<span class="hljs-attr">value</span>:<span class="hljs-string">&#39;1&#39;</span>})
            <span class="hljs-keyword">return</span> data
          },
          <span class="hljs-attr">queryName</span>: <span class="hljs-string">&#39;queryName&#39;</span> <span class="hljs-comment">// \u8FDC\u7A0B\u641C\u7D22\u65F6\u53D1\u9001\u8BF7\u6C42\u7684\u53C2\u6570\u540D\u79F0\uFF0C\u9ED8\u8BA4\u4E3Aname</span>
        },
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select1662536735690&#39;</span>,
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1662536407108&#39;</span>
    },
    <span class="hljs-attr">config</span>: { <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;form1662536407108&#39;</span>, <span class="hljs-attr">formId</span>: <span class="hljs-string">&#39;&#39;</span> }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> requestUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u83B7\u53D6\u8868\u5355\u521D\u59CB\u6570\u636E</span>
  <span class="hljs-keyword">const</span> formName = ref()
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ja=[ia],da=m('<h2 id="\u8054\u52A8\u4E8B\u4EF6" data-source-line="434"><a class="markdownIt-Anchor" href="#\u8054\u52A8\u4E8B\u4EF6">#</a> \u8054\u52A8\u4E8B\u4EF6</h2><p data-source-line="436">\u6587\u672C\u8F93\u5165\u6846\u7684\u8054\u52A8\u6761\u4EF6<code>radio=1</code>\uFF0C\u5219\u8BE5\u63A7\u4EF6\u5728\u5355\u9009\u6846\u7EC4<code>radio</code>\u7684\u503C\u4E3A<code>1</code>\u65F6\u663E\u793A\u6216\u8005\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001\u3002</p><p data-source-line="438">\u591A\u4E2A\u6761\u4EF6\u65F6\u4F7F\u7528<code>,</code>\u6216<code>&amp;</code>\u5206\u9694\u5F00\uFF0C\u5F53\u5206\u9694\u7B26\u4E2D\u5B58\u5728<code>&amp;</code>\u65F6\uFF0C\u6761\u4EF6\u4E3A<code>and</code>\u5173\u7CFB\uFF0C\u540C\u65F6\u7B26\u5408\u65F6\u624D\u663E\u793A\uFF1B\u5426\u5219\u6761\u4EF6\u4E3A<code>or</code>\u5173\u7CFB\uFF0C\u7B26\u5408\u5176\u4E2D\u4E4B\u4E00\u65F6\u663E\u793A\u3002</p><pre style="display:none;"></pre>',4),ma={class:"vuedoc-demo"},ua={class:"vuedoc-demo__inner"},ga={class:"vuedoc-demo__preview"},fa={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},va=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u7ED3\u679C\uFF1A1.\u5355\u9009\u6807\u7B7E1\u65F6\u6216\u8005\u4E0B\u62C9\u9009\u62E9\u6807\u7B7E1\u65F6\uFF0C\u663E\u793A\u5355\u884C\u6587\u672C1\u8F93\u5165\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2.\u5355\u9009\u6807\u7B7E1\u65F6\u548C\u4E0B\u62C9\u9009\u62E9\u6807\u7B7E1\u65F6\uFF0C\u663E\u793A\u5355\u884C\u6587\u672C1\u548C\u5355\u884C\u6587\u672C2\u8F93\u5165\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { provide, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u9009\u6846\u7EC4&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>,
          <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>,
          <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span>,
          <span class="hljs-attr">linkKey</span>: <span class="hljs-string">&#39;radio&#39;</span>,
          <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&#39;2&#39;</span>,
          <span class="hljs-attr">linkResult</span>: <span class="hljs-string">&#39;disabled&#39;</span>
        },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1637189604237&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u5355\u9009\u6216\u4E0B\u62C9\u4E3Alabel1\u65F6\u663E\u793A&#39;</span> },
        <span class="hljs-attr">slot</span>: {},
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">linkKey</span>: <span class="hljs-string">&#39;radio,select&#39;</span>, <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&#39;1,1&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u884C\u6587\u672C1&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> },
        <span class="hljs-attr">rules</span>: [],
        <span class="hljs-attr">customRules</span>: []
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1637198443468&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u5355\u9009\u548C\u4E0B\u62C9\u4E3Alabel1\u65F6\u663E\u793A&#39;</span> },
        <span class="hljs-attr">slot</span>: {},
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">linkKey</span>: <span class="hljs-string">&#39;radio&amp;select&#39;</span>, <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&#39;1,1&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u884C\u6587\u672C2&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> },
        <span class="hljs-attr">rules</span>: [],
        <span class="hljs-attr">customRules</span>: []
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660728166875&#39;</span>
    }
  })
  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),_a=[va],ba=s("h2",{id:"input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9","data-source-line":"535"},[s("a",{class:"markdownIt-Anchor",href:"#input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9"},"#"),d(" input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9")],-1),ya=s("pre",{style:{display:"none"}},null,-1),ka={class:"vuedoc-demo"},wa={class:"vuedoc-demo__inner"},qa={class:"vuedoc-demo__preview"},Da={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Va=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1661496607029&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">append</span>: <span class="hljs-string">&#39;key:select1661496610083&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u884C\u6587\u672C&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select1661496610083&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;inputSlot&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: [], <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value2&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">true</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1661496603520&#39;</span>,
      <span class="hljs-attr">formId</span>: <span class="hljs-string">&#39;&#39;</span>
    }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Ca=[Va],Na=s("h2",{id:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A","data-source-line":"601"},[s("a",{class:"markdownIt-Anchor",href:"#\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A"},"#"),d(" \u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A")],-1),Ua=s("p",{"data-source-line":"603"},[d("\u5F53\u540C\u4E00\u4E2A\u8868\u5355\u5E94\u7528\u4E8E\u4E0D\u540C\u573A\u666F\u65F6\uFF0C\u4E0D\u540C\u573A\u666F\u4E2D\u9700\u5BF9\u4E2A\u522B\u5B57\u6BB5\u8FDB\u884C\u9690\u85CF\u5904\u7406\uFF0C\u53EF\u5C06\u5BF9\u5E94\u5B57\u6BB5\u7684\u503C\u586B\u5199\u5728\u8868\u5355\u7684"),s("code",null,"hideField"),d("\u4E2D")],-1),La=s("pre",{style:{display:"none"}},null,-1),xa={class:"vuedoc-demo"},$a={class:"vuedoc-demo__inner"},Ha={class:"vuedoc-demo__preview"},Ra={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},Fa=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visibleChange(&#39;tel&#39;)&quot;</span>
      &gt;</span>\u9690\u85CF\u663E\u793A\u624B\u673A\u53F7&lt;/el-button
    &gt;
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visibleChange(&#39;wx&#39;)&quot;</span>
      &gt;</span>\u9690\u85CF\u663E\u793A\u5FAE\u4FE1\u53F7&lt;/el-button
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;tel&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u624B\u673A\u53F7\u7801&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;wx&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5FAE\u4FE1\u53F7&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660789836231&#39;</span>
    },
    <span class="hljs-attr">config</span>: {
      <span class="hljs-attr">hideField</span>: []
    }
  })
  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> visibleChange = <span class="hljs-function">(<span class="hljs-params">type</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> hasIndex = formData.value.config.hideField.indexOf(type)
    <span class="hljs-keyword">if</span> (hasIndex !== -<span class="hljs-number">1</span>) {
      formData.value.config.hideField.splice(hasIndex, <span class="hljs-number">1</span>)
    } <span class="hljs-keyword">else</span> {
      formData.value.config.hideField.push(type)
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ba=[Fa],za=m('<h2 id="\u8868\u5355\u53D6\u503C\u8BBE\u503C" data-source-line="665"><a class="markdownIt-Anchor" href="#\u8868\u5355\u53D6\u503C\u8BBE\u503C">#</a> \u8868\u5355\u53D6\u503C/\u8BBE\u503C</h2><p data-source-line="667">\u4F7F\u7528<code>getValue()</code>\u65B9\u6CD5\u83B7\u53D6\u8868\u5355\u7684\u503C\uFF0C<code>getValue(true)</code>\u5E26\u53C2\u6570\u4E3A<code>true</code>\u65F6\u53EA\u63D0\u53D6\u975E\u7A7A\u503C</p><p data-source-line="669">\u4F7F\u7528<code>setValue(obj)</code>\u5BF9\u8868\u5355\u8BBE\u7F6E\u521D\u59CB\u503C</p><pre style="display:none;"></pre>',4),Aa={class:"vuedoc-demo"},Wa={class:"vuedoc-demo__inner"},Ta={class:"vuedoc-demo__preview"},Ia={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},Ka=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValue&quot;</span>&gt;</span>\u53D6\u503C<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setValue&quot;</span>&gt;</span>\u8BBE\u503C<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { provide, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;tel&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u624B\u673A\u53F7\u7801&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;wx&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5FAE\u4FE1\u53F7&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;label1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;label2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> },
        <span class="hljs-attr">rules</span>: []
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660789836230&#39;</span>
    }
  })
  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> getValue = <span class="hljs-function">() =&gt;</span> {
    alert(<span class="hljs-built_in">JSON</span>.stringify(formName.value.getValue()))
  }
  <span class="hljs-keyword">const</span> setValue = <span class="hljs-function">() =&gt;</span> {
    formName.value.setValue({
      <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;1380013800&#39;</span>,
      <span class="hljs-attr">wx</span>: <span class="hljs-string">&#39;337547038&#39;</span>,
      <span class="hljs-attr">select</span>: <span class="hljs-string">&#39;1&#39;</span>
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Oa=[Ka],Ea=s("h2",{id:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C","data-source-line":"738"},[s("a",{class:"markdownIt-Anchor",href:"#\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C"},"#"),d(" \u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6EOptions\u9009\u9879\u503C")],-1),Sa=s("p",{"data-source-line":"740"},[d("\u9009\u9879\u4E3A\u52A8\u6001\u6570\u636E\u65F6\uFF0C\u9664\u4E86\u9009\u62E9\u6570\u636E\u6E90\u548C\u65B9\u6CD5\u51FD\u6570\u5916\uFF0C\u8FD8\u53EF\u4F7F\u7528"),s("code",null,"setOptions(obj)"),d("\u5BF9\u8868\u5355\u9009\u9879\u6570\u636E\u8BBE\u7F6E\u9009\u9879\u503C")],-1),Pa=s("pre",{style:{display:"none"}},null,-1),Ja={class:"vuedoc-demo"},Ma={class:"vuedoc-demo__inner"},Ga={class:"vuedoc-demo__preview"},Qa={ref:"vdpv_9Ref",class:"vuedoc-demo__sourceref"},Xa=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setOptions&quot;</span>&gt;</span>\u8BBE\u7F6Eoptions\u503C<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { provide, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">options</span>: [],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u9009\u6846\u7EC4&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;checkbox&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: [] },
        <span class="hljs-attr">options</span>: [],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u591A\u9009\u6846\u7EC4&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
        <span class="hljs-attr">options</span>: [],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660790919277&#39;</span>
    }
  })
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> setOptions = <span class="hljs-function">() =&gt;</span> {
    formName.value.setOptions({
      <span class="hljs-attr">radio</span>: [{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u9009\u6D4B\u8BD5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> }],
      <span class="hljs-attr">checkbox</span>: [{ <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u591A\u9009\u6D4B\u8BD5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> }],
      <span class="hljs-attr">select</span>: [
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u6D4B\u8BD52&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u6D4B\u8BD521&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value31&#39;</span> }
      ]
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ya=[Xa],Za=m('<h2 id="\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C" data-source-line="801"><a class="markdownIt-Anchor" href="#\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C">#</a> \u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C</h2><p data-source-line="803">\u901A\u8FC7<code>\u751F\u6210\u811A\u672C\u9884\u89C8</code>\u6216<code>\u6DFB\u52A0\u5C5E\u6027</code>\u4EE3\u7801\u7F16\u8F91\u7A97\u53E3\u5BF9\u8868\u5355\u7EC4\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u540C\u65F6\u53EF\u4F7F\u7528\u5168\u5C40<code>get[formName]ControlByName</code>\u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u63A7\u4EF6\u7684\u914D\u7F6E\u9879\u6570\u636E\uFF08<code>formName</code>\u4E3A\u5F53\u524D\u8868\u5355<code>config.name</code> \u7684\u503C\uFF0C\u672C\u793A\u4F8B\u4E3A<code>form1660790919277</code>\uFF0C\u56E0\u6B64\u5728\u63A7\u4EF6\u4E2D\u6DFB\u52A0\u7684\u65B9\u6CD5\u540D\u4E3A<code>getform1660790919277ControlByName</code>\uFF09</p><pre style="display:none;"></pre>',3),sn={class:"vuedoc-demo"},an={class:"vuedoc-demo__inner"},nn={class:"vuedoc-demo__preview"},ln={ref:"vdpv_10Ref",class:"vuedoc-demo__sourceref"},tn=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;password&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;password&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5BC6\u7801&#39;</span>,
          <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span>
        },
        <span class="hljs-attr">customRules</span>: [
          { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;blur&#39;</span> }
        ]
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;password&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;password&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u786E\u8BA4\u5BC6\u7801&#39;</span>,
          <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span>,
          <span class="hljs-attr">rules</span>: [
            {
              <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">rule, value, callback</span>) =&gt;</span> {
                <span class="hljs-comment">// \u83B7\u53D6\u5BC6\u7801\u7684\u503C</span>
                <span class="hljs-keyword">const</span> control = getform1660790919277ControlByName(<span class="hljs-string">&#39;password&#39;</span>)
                <span class="hljs-built_in">console</span>.log(control)
                <span class="hljs-keyword">if</span> (value === <span class="hljs-string">&#39;&#39;</span>) {
                  callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;</span>))
                } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (value !== control.control.modelValue) {
                  callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&#39;\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u6837&#39;</span>))
                } <span class="hljs-keyword">else</span> {
                  callback()
                }
              },
              <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;change&#39;</span>
            }
          ]
        }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660790919277&#39;</span>
    }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),pn=[tn],en=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868","data-source-line":"890"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868"},"#"),d(" \u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868")],-1),cn=s("pre",{style:{display:"none"}},null,-1),rn={class:"vuedoc-demo"},on={class:"vuedoc-demo__inner"},hn={class:"vuedoc-demo__preview"},jn={ref:"vdpv_11Ref",class:"vuedoc-demo__sourceref"},dn=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;table1660792942732&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;table&#39;</span>,
        <span class="hljs-attr">list</span>: [
          {
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;index&#39;</span>,
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>,
            <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span> },
            <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-literal">undefined</span> },
            <span class="hljs-attr">config</span>: {}
          },
          {
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1660792954637&#39;</span>,
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
            <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-literal">undefined</span>, <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
            <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
            <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u884C\u6587\u672C&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
          },
          {
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select1660792958068&#39;</span>,
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
            <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-literal">undefined</span>, <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
            <span class="hljs-attr">options</span>: [
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value1&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value2&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> }
            ],
            <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
            <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
          }
        ],
        <span class="hljs-attr">tableData</span>: [],
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">border</span>: <span class="hljs-literal">true</span> },
        <span class="hljs-attr">config</span>: {}
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660790919277&#39;</span>
    }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),mn=[dn],un=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6","data-source-line":"970"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},"#"),d(" \u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6")],-1),gn=s("p",{"data-source-line":"972"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u9700\u5168\u5C40\u6CE8\u518C",-1),fn=s("pre",{style:{display:"none"}},null,-1),vn={class:"vuedoc-demo"},_n={class:"vuedoc-demo__inner"},bn={class:"vuedoc-demo__preview"},yn={ref:"vdpv_12Ref",class:"vuedoc-demo__sourceref"},kn=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;component1660793530856&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;component&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">componentName</span>: <span class="hljs-string">&#39;ComponentTest&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49\u7EC4\u4EF6&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660793512027&#39;</span>
    }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),wn=[kn],qn=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20","data-source-line":"1024"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20"},"#"),d(" \u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20")],-1),Dn=s("pre",{style:{display:"none"}},null,-1),Vn={class:"vuedoc-demo"},Cn={class:"vuedoc-demo__inner"},Nn={class:"vuedoc-demo__preview"},Un={ref:"vdpv_13Ref",class:"vuedoc-demo__sourceref"},Ln=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> uploadError = <span class="hljs-function">(<span class="hljs-params">err, file, fileList</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u9519\u8BEF\u5F02\u5E38\u5904\u7406&#39;</span>)
    <span class="hljs-built_in">console</span>.log(err, file, fileList)
  }
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;upload&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;upload&#39;</span>,
        <span class="hljs-attr">control</span>: {
          <span class="hljs-attr">modelValue</span>: [],
          <span class="hljs-attr">action</span>: <span class="hljs-string">&#39;http://localhost:3001/upload/single&#39;</span>,
          <span class="hljs-attr">listType</span>: <span class="hljs-string">&#39;picture-card&#39;</span>,
          <span class="hljs-attr">limit</span>: <span class="hljs-number">2</span>,
          <span class="hljs-attr">onError</span>: uploadError
        },
        <span class="hljs-attr">config</span>: {
          <span class="hljs-attr">tip</span>: <span class="hljs-string">&#39;\u4E00\u4E9B\u4E0A\u4F20\u63D0\u793A\u6587\u6848&#39;</span>,
          <span class="hljs-attr">btnText</span>: <span class="hljs-string">&#39;&#39;</span>
        },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u56FE\u7247/\u6587\u4EF6&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660793512027&#39;</span>
    }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }

  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    formName.value.setValue({
      <span class="hljs-attr">upload</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;food.jpeg&#39;</span>,
          <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100&#39;</span>
        }
      ]
    })
  }, <span class="hljs-number">1000</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),xn=[Ln],$n=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40","data-source-line":"1100"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40"},"#"),d(" \u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40")],-1),Hn=s("pre",{style:{display:"none"}},null,-1),Rn={class:"vuedoc-demo"},Fn={class:"vuedoc-demo__inner"},Bn={class:"vuedoc-demo__preview"},zn={ref:"vdpv_14Ref",class:"vuedoc-demo__sourceref"},An=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;grid1660800280703&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;grid&#39;</span>,
        <span class="hljs-attr">columns</span>: [
          {
            <span class="hljs-attr">attr</span>: { <span class="hljs-attr">span</span>: <span class="hljs-number">12</span> },
            <span class="hljs-attr">list</span>: [
              {
                <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1660800459694&#39;</span>,
                <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
                <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
                <span class="hljs-attr">config</span>: {},
                <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u884C\u6587\u672C&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
              }
            ],
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;gridChild1660800443904&#39;</span>,
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;gridChild&#39;</span>
          },
          {
            <span class="hljs-attr">attr</span>: { <span class="hljs-attr">span</span>: <span class="hljs-number">11</span>, <span class="hljs-attr">offset</span>: <span class="hljs-number">1</span> },
            <span class="hljs-attr">list</span>: [
              {
                <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1660800461629&#39;</span>,
                <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
                <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
                <span class="hljs-attr">config</span>: {},
                <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u884C\u6587\u672C&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
              }
            ],
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;gridChild1660800281864&#39;</span>,
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;gridChild&#39;</span>
          }
        ],
        <span class="hljs-attr">control</span>: {},
        <span class="hljs-attr">config</span>: {}
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1660800338143&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">span</span>: <span class="hljs-literal">NaN</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u884C\u6587\u672C&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660800277903&#39;</span>
    }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Wn=[An],Tn=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875","data-source-line":"1188"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875"},"#"),d(" \u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875")],-1),In=s("pre",{style:{display:"none"}},null,-1),Kn={class:"vuedoc-demo"},On={class:"vuedoc-demo__inner"},En={class:"vuedoc-demo__preview"},Sn={ref:"vdpv_15Ref",class:"vuedoc-demo__sourceref"},Pn=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;tabs1660801144546&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;tabs&#39;</span>,
        <span class="hljs-attr">columns</span>: [
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E\u540D\u79F01&#39;</span>,
            <span class="hljs-attr">list</span>: [
              {
                <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1660801157128&#39;</span>,
                <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
                <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
                <span class="hljs-attr">config</span>: {},
                <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1\u5185\u5BB9&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
              }
            ]
          },
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E\u540D\u79F02&#39;</span>,
            <span class="hljs-attr">list</span>: [
              {
                <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1660801163175&#39;</span>,
                <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
                <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
                <span class="hljs-attr">config</span>: {},
                <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2\u5185\u5BB9&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
              }
            ]
          }
        ],
        <span class="hljs-attr">control</span>: {},
        <span class="hljs-attr">config</span>: {}
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660801142187&#39;</span>
    }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Jn=[Pn],Mn=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40","data-source-line":"1265"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40"},"#"),d(" \u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40")],-1),Gn=s("pre",{style:{display:"none"}},null,-1),Qn={class:"vuedoc-demo"},Xn={class:"vuedoc-demo__inner"},Yn={class:"vuedoc-demo__preview"},Zn={ref:"vdpv_16Ref",class:"vuedoc-demo__sourceref"},sl=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;card1660801241278&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;card&#39;</span>,
        <span class="hljs-attr">list</span>: [
          {
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1660801243525&#39;</span>,
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
            <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
            <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
            <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u884C\u6587\u672C&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
          },
          {
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select1660801250564&#39;</span>,
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
            <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
            <span class="hljs-attr">options</span>: [
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value1&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value2&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6807\u7B7E3&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;value3&#39;</span> }
            ],
            <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
            <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u4E0B\u62C9\u9009\u62E9\u6846&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
          }
        ],
        <span class="hljs-attr">control</span>: {},
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5361\u7247\u5E03\u5C40&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660801232287&#39;</span>
    }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),al=[sl],nl=s("h2",{id:"\u5BCC\u6587\u672C","data-source-line":"1338"},[s("a",{class:"markdownIt-Anchor",href:"#\u5BCC\u6587\u672C"},"#"),d(" \u5BCC\u6587\u672C")],-1),ll=s("pre",{style:{display:"none"}},null,-1),tl={class:"vuedoc-demo"},pl={class:"vuedoc-demo__inner"},el={class:"vuedoc-demo__preview"},cl={ref:"vdpv_17Ref",class:"vuedoc-demo__sourceref"},rl=m(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span> <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;tinymce1660801329213&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;tinymce&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;tinymce\u5BCC\u6587\u672C&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1660801232287&#39;</span>
    }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> formName = ref()
  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid, fields</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(valid)
      <span class="hljs-built_in">console</span>.log(fields) <span class="hljs-comment">// \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">if</span> (valid) {
        alert(<span class="hljs-string">&#39;submit&#39;</span>)
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
      }
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ol=[rl];function hl(n,a,i,r,h,t){const p=c("vdpv_0"),o=c("vdpv_1"),j=c("vdpv_2"),y=c("vdpv_3"),D=c("vdpv_4"),V=c("vdpv_5"),C=c("vdpv_6"),N=c("vdpv_7"),U=c("vdpv_8"),L=c("vdpv_9"),x=c("vdpv_10"),$=c("vdpv_11"),H=c("vdpv_12"),R=c("vdpv_13"),k=c("vdpv_14"),F=c("vdpv_15"),w=c("vdpv_16"),q=c("vdpv_17");return u(),v("div",Cs,[Ns,s("div",Us,[s("div",Ls,[s("div",xs,[e(p)]),s("div",{style:g({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",$s,Rs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=_=>n.toggleCode(0))},f(n.vdpv_0Height>0?"hidden":"show"),1)])]),Fs,s("div",Bs,[s("div",zs,[s("div",As,[e(o)]),s("div",{style:g({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ws,Is,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=_=>n.toggleCode(1))},f(n.vdpv_1Height>0?"hidden":"show"),1)])]),Ks,Os,Es,s("div",Ss,[s("div",Ps,[s("div",Js,[e(j)]),s("div",{style:g({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ms,Qs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=_=>n.toggleCode(2))},f(n.vdpv_2Height>0?"hidden":"show"),1)])]),Xs,Ys,Zs,s("div",sa,[s("div",aa,[s("div",na,[e(y)]),s("div",{style:g({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",la,pa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=_=>n.toggleCode(3))},f(n.vdpv_3Height>0?"hidden":"show"),1)])]),ea,s("div",ca,[s("div",ra,[s("div",oa,[e(D)]),s("div",{style:g({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",ha,ja,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=_=>n.toggleCode(4))},f(n.vdpv_4Height>0?"hidden":"show"),1)])]),da,s("div",ma,[s("div",ua,[s("div",ga,[e(V)]),s("div",{style:g({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",fa,_a,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=_=>n.toggleCode(5))},f(n.vdpv_5Height>0?"hidden":"show"),1)])]),ba,ya,s("div",ka,[s("div",wa,[s("div",qa,[e(C)]),s("div",{style:g({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Da,Ca,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=_=>n.toggleCode(6))},f(n.vdpv_6Height>0?"hidden":"show"),1)])]),Na,Ua,La,s("div",xa,[s("div",$a,[s("div",Ha,[e(N)]),s("div",{style:g({height:n.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ra,Ba,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=_=>n.toggleCode(7))},f(n.vdpv_7Height>0?"hidden":"show"),1)])]),za,s("div",Aa,[s("div",Wa,[s("div",Ta,[e(U)]),s("div",{style:g({height:n.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ia,Oa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=_=>n.toggleCode(8))},f(n.vdpv_8Height>0?"hidden":"show"),1)])]),Ea,Sa,Pa,s("div",Ja,[s("div",Ma,[s("div",Ga,[e(L)]),s("div",{style:g({height:n.vdpv_9Height+"px"}),class:"vuedoc-demo__source"},[s("div",Qa,Ya,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[9]||(a[9]=_=>n.toggleCode(9))},f(n.vdpv_9Height>0?"hidden":"show"),1)])]),Za,s("div",sn,[s("div",an,[s("div",nn,[e(x)]),s("div",{style:g({height:n.vdpv_10Height+"px"}),class:"vuedoc-demo__source"},[s("div",ln,pn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[10]||(a[10]=_=>n.toggleCode(10))},f(n.vdpv_10Height>0?"hidden":"show"),1)])]),en,cn,s("div",rn,[s("div",on,[s("div",hn,[e($)]),s("div",{style:g({height:n.vdpv_11Height+"px"}),class:"vuedoc-demo__source"},[s("div",jn,mn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[11]||(a[11]=_=>n.toggleCode(11))},f(n.vdpv_11Height>0?"hidden":"show"),1)])]),un,gn,fn,s("div",vn,[s("div",_n,[s("div",bn,[e(H)]),s("div",{style:g({height:n.vdpv_12Height+"px"}),class:"vuedoc-demo__source"},[s("div",yn,wn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[12]||(a[12]=_=>n.toggleCode(12))},f(n.vdpv_12Height>0?"hidden":"show"),1)])]),qn,Dn,s("div",Vn,[s("div",Cn,[s("div",Nn,[e(R)]),s("div",{style:g({height:n.vdpv_13Height+"px"}),class:"vuedoc-demo__source"},[s("div",Un,xn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[13]||(a[13]=_=>n.toggleCode(13))},f(n.vdpv_13Height>0?"hidden":"show"),1)])]),$n,Hn,s("div",Rn,[s("div",Fn,[s("div",Bn,[e(k)]),s("div",{style:g({height:n.vdpv_14Height+"px"}),class:"vuedoc-demo__source"},[s("div",zn,Wn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[14]||(a[14]=_=>n.toggleCode(14))},f(n.vdpv_14Height>0?"hidden":"show"),1)])]),Tn,In,s("div",Kn,[s("div",On,[s("div",En,[e(F)]),s("div",{style:g({height:n.vdpv_15Height+"px"}),class:"vuedoc-demo__source"},[s("div",Sn,Jn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[15]||(a[15]=_=>n.toggleCode(15))},f(n.vdpv_15Height>0?"hidden":"show"),1)])]),Mn,Gn,s("div",Qn,[s("div",Xn,[s("div",Yn,[e(w)]),s("div",{style:g({height:n.vdpv_16Height+"px"}),class:"vuedoc-demo__source"},[s("div",Zn,al,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[16]||(a[16]=_=>n.toggleCode(16))},f(n.vdpv_16Height>0?"hidden":"show"),1)])]),nl,ll,s("div",tl,[s("div",pl,[s("div",el,[e(q)]),s("div",{style:g({height:n.vdpv_17Height+"px"}),class:"vuedoc-demo__source"},[s("div",cl,ol,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[17]||(a[17]=_=>n.toggleCode(17))},f(n.vdpv_17Height>0?"hidden":"show"),1)])])])}const jl=W(Vs,[["render",hl]]);export{jl as default};
