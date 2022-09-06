import{r as l,a as c,o as u,c as g,b as e,p as F,w as _,d as m,i as s,a1 as z,e as A,B as W,I as T,a3 as f,t as v,a2 as d}from"./index.ffd02f05.js";const I={__name:"formDemo.md.vdpv_0",setup(n){const a=l({list:[{name:"input1660724087482",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"textarea1660724093238",type:"textarea",control:{modelValue:""},config:{},item:{label:"\u591A\u884C\u6587\u672C",showLabel:!1}},{name:"radio1660724102250",type:"radio",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"checkbox1660724104783",type:"checkbox",control:{modelValue:[]},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u591A\u9009\u6846\u7EC4",showLabel:!1}},{name:"select1660724088685",type:"select",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}},{name:"datePicker1660724118488",type:"datePicker",control:{modelValue:"",type:"date"},config:{},item:{label:"\u65E5\u671F\u9009\u62E9\u5668",showLabel:!1}},{name:"switch1660724123026",type:"switch",control:{modelValue:!1},config:{},item:{label:"\u5F00\u5173",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660723952800"},config:{submitBtn:{confirm:"\u63D0\u4EA4",cancel:"\u53D6\u6D88"}}});return(j,o)=>{const h=c("ak-form");return u(),g("div",null,[e(h,{formData:a.value,ref:"formName"},null,8,["formData"])])}}},K=m("\u63D0\u4EA4"),O={__name:"formDemo.md.vdpv_1",setup(n){const a=l({list:[{name:"userName",type:"input",control:{modelValue:"",placeholder:"\u5168\u5C40\u6821\u9A8C\u89C4\u5219"},config:{},item:{label:"\u7528\u6237\u540D",showLabel:!1,rules:[{key:"required",required:!0,message:"\u5FC5\u586B\u9879",trigger:"blur"}]},customRules:[]},{name:"tel",type:"input",control:{modelValue:"",placeholder:"\u9A8C\u8BC1\u624B\u673A\u53F7\u7801"},config:{},item:{label:"\u624B\u673A\u53F7",showLabel:!1},customRules:[{type:"mobile",message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",trigger:"blur"}]},{name:"wx",type:"input",control:{modelValue:"",placeholder:"\u81EA\u5B9A\u7F16\u8F91\u7684\u5FC5\u586B\u89C4\u5219"},config:{},item:{label:"\u5FAE\u4FE1\u53F7",showLabel:!1,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5FAE\u4FE1\u53F7",trigger:"change"}]}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0,placeholder:"\u4E0B\u62C9\u5FC5\u586B"},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1,rules:[{required:!0,message:"\u5FC5\u586B\u9879",trigger:"change"}]}},{name:"input1660727784191",type:"input",control:{modelValue:""},config:{},item:{label:"\u81EA\u5B9A\u4E49",showLabel:!1},customRules:[{type:"methods",message:"",trigger:"blur",methods:"customRules"}]}],form:{labelWidth:"",class:"",size:"default",name:"form1660725610088"},config:{submitBtn:{confirm:""}}});F("customRules",(p,t,r)=>{if(t!=="\u6211\u7231\u4F60")return r(new Error("\u8BF7\u8F93\u5165 \u6211\u7231\u4F60 \u54C8\u54C8\u54C8!"));r()});const j=l(!1),o=l(),h=()=>{o.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:h},{default:_(()=>[K]),_:1})])}}},E=m("\u63D0\u4EA4"),S={__name:"formDemo.md.vdpv_2",setup(n){const a=l({list:[{name:"select1660727982838",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"async",source:1,request:"get",sourceFun:"getCheckboxFun"},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660725610088"},config:{submitBtn:{confirm:""}}}),j=l([{label:"\u9009\u98791",value:"1"}]);F("getCheckboxFun",j);const o=l(!1),h=l(),p=()=>{h.value.validate((t,r)=>{if(console.log(t),console.log(r),t)alert("submit");else return console.log("error submit"),!1})};return(t,r)=>{const i=c("ak-form"),y=c("el-button");return u(),g("div",null,[e(i,{formData:a.value,ref_key:"formName",ref:h,submitUrl:o.value},null,8,["formData","submitUrl"]),e(y,{type:"primary",onClick:p},{default:_(()=>[E]),_:1})])}}},P={__name:"formDemo.md.vdpv_3",setup(n){const a=l({list:[{name:"text",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"radio",type:"radio",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"async",source:0,request:"get",sourceFun:"/test?a=${radio}"},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1",formId:""}}),j=l(!1);return(o,h)=>{const p=c("ak-form");return u(),g("div",null,[e(p,{formData:a.value,ref:"formName",submitUrl:j.value},null,8,["formData","submitUrl"])])}}},J=s("p",null,"\u7ED3\u679C\uFF1A1.\u5355\u9009\u6807\u7B7E1\u65F6\u6216\u8005\u4E0B\u62C9\u9009\u62E9\u6807\u7B7E1\u65F6\uFF0C\u663E\u793A\u5355\u884C\u6587\u672C1\u8F93\u5165\u6846",-1),M=s("p",null,"2.\u5355\u9009\u6807\u7B7E1\u65F6\u548C\u4E0B\u62C9\u9009\u62E9\u6807\u7B7E1\u65F6\uFF0C\u663E\u793A\u5355\u884C\u6587\u672C1\u548C\u5355\u884C\u6587\u672C2\u8F93\u5165\u6846",-1),G=m("\u63D0\u4EA4"),Q={__name:"formDemo.md.vdpv_4",setup(n){const a=l({list:[{name:"radio",type:"radio",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"1"},{label:"\u6807\u7B7E2",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"1"},{label:"\u6807\u7B7E2",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:"",linkKey:"radio",linkValue:"2",linkResult:"disabled"},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}},{name:"input1637189604237",type:"input",control:{modelValue:"",placeholder:"\u5355\u9009\u6216\u4E0B\u62C9\u4E3Alabel1\u65F6\u663E\u793A"},slot:{},config:{linkKey:"radio,select",linkValue:"1,1"},item:{label:"\u5355\u884C\u6587\u672C1",showLabel:!1},rules:[],customRules:[]},{name:"input1637198443468",type:"input",control:{modelValue:"",placeholder:"\u5355\u9009\u548C\u4E0B\u62C9\u4E3Alabel1\u65F6\u663E\u793A"},slot:{},config:{linkKey:"radio&select",linkValue:"1,1"},item:{label:"\u5355\u884C\u6587\u672C2",showLabel:!1},rules:[],customRules:[]}],form:{labelWidth:"",class:"",size:"default",name:"form1660728166875"}}),j=l(!1),o=l(),h=()=>{o.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[J,M,e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:h},{default:_(()=>[G]),_:1})])}}},X=m("\u63D0\u4EA4"),Y={__name:"formDemo.md.vdpv_5",setup(n){const a=l({list:[{name:"input1661496607029",type:"input",control:{modelValue:""},config:{append:"key:select1661496610083"},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"select1661496610083",type:"inputSlot",control:{modelValue:[],appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!0}}],form:{labelWidth:"",class:"",size:"default",name:"form1661496603520",formId:""}}),j=l(!1),o=l(),h=()=>{o.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:h},{default:_(()=>[X]),_:1})])}}},Z=m("\u9690\u85CF\u663E\u793A\u624B\u673A\u53F7"),ss=m("\u9690\u85CF\u663E\u793A\u5FAE\u4FE1\u53F7"),as={__name:"formDemo.md.vdpv_6",setup(n){const a=l({list:[{name:"tel",type:"input",control:{modelValue:""},config:{},item:{label:"\u624B\u673A\u53F7\u7801",showLabel:!1}},{name:"wx",type:"input",control:{modelValue:""},config:{},item:{label:"\u5FAE\u4FE1\u53F7",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660789836231"},config:{hideField:[]}}),j=l(!1),o=l(),h=p=>{const t=a.value.config.hideField.indexOf(p);t!==-1?a.value.config.hideField.splice(t,1):a.value.config.hideField.push(p)};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:t[0]||(t[0]=y=>h("tel"))},{default:_(()=>[Z]),_:1}),e(i,{type:"primary",onClick:t[1]||(t[1]=y=>h("wx"))},{default:_(()=>[ss]),_:1})])}}},ns=m("\u53D6\u503C"),ls=m("\u8BBE\u503C"),ts={__name:"formDemo.md.vdpv_7",setup(n){const a=l({list:[{name:"tel",type:"input",control:{modelValue:""},config:{},item:{label:"\u624B\u673A\u53F7\u7801",showLabel:!1}},{name:"wx",type:"input",control:{modelValue:""},config:{},item:{label:"\u5FAE\u4FE1\u53F7",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"label1",value:"1"},{label:"label2",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1},rules:[]}],form:{labelWidth:"",class:"",size:"default",name:"form1660789836230"}}),j=l(!1),o=l(),h=()=>{alert(JSON.stringify(o.value.getValue()))},p=()=>{o.value.setValue({tel:"1380013800",wx:"337547038",select:"1"})};return(t,r)=>{const i=c("ak-form"),y=c("el-button");return u(),g("div",null,[e(i,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(y,{type:"primary",onClick:h},{default:_(()=>[ns]),_:1}),e(y,{type:"primary",onClick:p},{default:_(()=>[ls]),_:1})])}}},ps=m("\u8BBE\u7F6Eoptions\u503C"),es={__name:"formDemo.md.vdpv_8",setup(n){const a=l({list:[{name:"radio",type:"radio",control:{modelValue:""},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"checkbox",type:"checkbox",control:{modelValue:[]},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u591A\u9009\u6846\u7EC4",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660790919277"}}),j=l(),o=()=>{j.value.setOptions({radio:[{label:"\u5355\u9009\u6D4B\u8BD5",value:"value3"}],checkbox:[{label:"\u591A\u9009\u6D4B\u8BD5",value:"value3"}],select:[{label:"\u4E0B\u62C9\u6D4B\u8BD52",value:"value3"},{label:"\u4E0B\u62C9\u6D4B\u8BD521",value:"value31"}]})};return(h,p)=>{const t=c("ak-form"),r=c("el-button");return u(),g("div",null,[e(t,{formData:a.value,ref_key:"formName",ref:j},null,8,["formData"]),e(r,{type:"primary",onClick:o},{default:_(()=>[ps]),_:1})])}}},cs=m("\u63D0\u4EA4"),os={__name:"formDemo.md.vdpv_9",setup(n){const a=l({list:[{name:"password",type:"password",control:{modelValue:""},config:{},item:{label:"\u5BC6\u7801",showLabel:!1},customRules:[{type:"required",message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]},{name:"password",type:"password",control:{modelValue:""},config:{},item:{label:"\u786E\u8BA4\u5BC6\u7801",showLabel:!1,rules:[{validator:(p,t,r)=>{const i=getform1660790919277ControlByName("password");console.log(i),t===""?r(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):t!==i.control.modelValue?r(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u6837")):r()},trigger:"change"}]}}],form:{labelWidth:"",class:"",size:"default",name:"form1660790919277"}}),j=l(!1),o=l(),h=()=>{o.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:h},{default:_(()=>[cs]),_:1})])}}},rs=m("\u63D0\u4EA4"),hs={__name:"formDemo.md.vdpv_10",setup(n){const a=l({list:[{name:"table1660792942732",type:"table",list:[{name:"index",type:"index",item:{label:"\u5E8F\u53F7"},control:{modelValue:void 0},config:{}},{name:"input1660792954637",type:"input",control:{modelValue:void 0,appendToBody:!0},config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"select1660792958068",type:"select",control:{modelValue:void 0,appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],tableData:[],control:{border:!0},config:{}}],form:{labelWidth:"",class:"",size:"default",name:"form1660790919277"}}),j=l(!1),o=l(),h=()=>{o.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:h},{default:_(()=>[rs]),_:1})])}}},is=m("\u63D0\u4EA4"),js={__name:"formDemo.md.vdpv_11",setup(n){const a=l({list:[{name:"component1660793530856",type:"component",control:{modelValue:""},config:{componentName:"ComponentTest"},item:{label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660793512027"}}),j=l(!1),o=l(),h=()=>{o.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:h},{default:_(()=>[is]),_:1})])}}},ms=m("\u63D0\u4EA4"),ds={__name:"formDemo.md.vdpv_12",setup(n){const j=l({list:[{name:"upload",type:"upload",control:{modelValue:[],action:"http://localhost:3001/upload/single",listType:"picture-card",limit:2,onError:(t,r,i)=>{console.log("\u9519\u8BEF\u5F02\u5E38\u5904\u7406"),console.log(t,r,i)}},config:{tip:"\u4E00\u4E9B\u4E0A\u4F20\u63D0\u793A\u6587\u6848",btnText:""},item:{label:"\u56FE\u7247/\u6587\u4EF6",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660793512027"}}),o=l(!1),h=l(),p=()=>{h.value.validate((t,r)=>{if(console.log(t),console.log(r),t)alert("submit");else return console.log("error submit"),!1})};return setTimeout(()=>{h.value.setValue({upload:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]})},1e3),(t,r)=>{const i=c("ak-form"),y=c("el-button");return u(),g("div",null,[e(i,{formData:j.value,ref_key:"formName",ref:h,submitUrl:o.value},null,8,["formData","submitUrl"]),e(y,{type:"primary",onClick:p},{default:_(()=>[ms]),_:1})])}}},us=m("\u63D0\u4EA4"),gs={__name:"formDemo.md.vdpv_13",setup(n){const a=l({list:[{name:"grid1660800280703",type:"grid",columns:[{attr:{span:12},list:[{name:"input1660800459694",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}}],name:"gridChild1660800443904",type:"gridChild"},{attr:{span:11,offset:1},list:[{name:"input1660800461629",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}}],name:"gridChild1660800281864",type:"gridChild"}],control:{},config:{}},{name:"input1660800338143",type:"input",control:{modelValue:""},config:{span:NaN},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660800277903"}}),j=l(!1),o=l(),h=()=>{o.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:h},{default:_(()=>[us]),_:1})])}}},fs=m("\u63D0\u4EA4"),vs={__name:"formDemo.md.vdpv_14",setup(n){const a=l({list:[{name:"tabs1660801144546",type:"tabs",columns:[{label:"\u6807\u7B7E\u540D\u79F01",list:[{name:"input1660801157128",type:"input",control:{modelValue:""},config:{},item:{label:"\u6807\u7B7E1\u5185\u5BB9",showLabel:!1}}]},{label:"\u6807\u7B7E\u540D\u79F02",list:[{name:"input1660801163175",type:"input",control:{modelValue:""},config:{},item:{label:"\u6807\u7B7E2\u5185\u5BB9",showLabel:!1}}]}],control:{},config:{}}],form:{labelWidth:"",class:"",size:"default",name:"form1660801142187"}}),j=l(!1),o=l(),h=()=>{o.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:h},{default:_(()=>[fs]),_:1})])}}},_s=m("\u63D0\u4EA4"),bs={__name:"formDemo.md.vdpv_15",setup(n){const a=l({list:[{name:"card1660801241278",type:"card",list:[{name:"input1660801243525",type:"input",control:{modelValue:"",appendToBody:!0},config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"select1660801250564",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],control:{},config:{},item:{label:"\u5361\u7247\u5E03\u5C40",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660801232287"}}),j=l(!1),o=l(),h=()=>{o.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:h},{default:_(()=>[_s]),_:1})])}}},ys=m("\u63D0\u4EA4"),ks={__name:"formDemo.md.vdpv_16",setup(n){const a=l({list:[{name:"tinymce1660801329213",type:"tinymce",control:{modelValue:""},config:{},item:{label:"tinymce\u5BCC\u6587\u672C",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660801232287"}}),j=l(!1),o=l(),h=()=>{o.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const r=c("ak-form"),i=c("el-button");return u(),g("div",null,[e(r,{formData:a.value,ref_key:"formName",ref:o,submitUrl:j.value},null,8,["formData","submitUrl"]),e(i,{type:"primary",onClick:h},{default:_(()=>[ys]),_:1})])}}},B=A({components:{vdpv_0:I,vdpv_1:O,vdpv_2:S,vdpv_3:P,vdpv_4:Q,vdpv_5:Y,vdpv_6:as,vdpv_7:ts,vdpv_8:es,vdpv_9:os,vdpv_10:hs,vdpv_11:js,vdpv_12:ds,vdpv_13:gs,vdpv_14:vs,vdpv_15:bs,vdpv_16:ks},setup(n){const a=l(),j=l(),o=l(),h=l(),p=l(),t=l(),r=l(),i=l(),y=l(),D=l(),V=l(),C=l(),N=l(),L=l(),U=l(),x=l(),$=l(),H=[a,j,o,h,p,t,r,i,y,D,V,C,N,L,U,x,$],k=W({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0,vdpv_9Height:0,vdpv_10Height:0,vdpv_11Height:0,vdpv_12Height:0,vdpv_13Height:0,vdpv_14Height:0,vdpv_15Height:0,vdpv_16Height:0});return{toggleCode:w=>{const q="vdpv_"+w;k[q+"Height"]===0?k[q+"Height"]=(H[w].value?H[w].value.offsetHeight:0)||0:k[q+"Height"]=0},...T(k),vdpv_0Ref:a,vdpv_1Ref:j,vdpv_2Ref:o,vdpv_3Ref:h,vdpv_4Ref:p,vdpv_5Ref:t,vdpv_6Ref:r,vdpv_7Ref:i,vdpv_8Ref:y,vdpv_9Ref:D,vdpv_10Ref:V,vdpv_11Ref:C,vdpv_12Ref:N,vdpv_13Ref:L,vdpv_14Ref:U,vdpv_15Ref:x,vdpv_16Ref:$}}});B.$vd={matter:{},toc:[{content:"Form Demo",anchor:"form-demo",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:2},{content:"\u8868\u5355\u6821\u9A8C",anchor:"\u8868\u5355\u6821\u9A8C",level:2},{content:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E",anchor:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E",level:2},{content:"\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E",anchor:"\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E",level:2},{content:"\u8054\u52A8\u4E8B\u4EF6",anchor:"\u8054\u52A8\u4E8B\u4EF6",level:2},{content:"input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9",anchor:"input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9",level:2},{content:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A",anchor:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A",level:2},{content:"\u8868\u5355\u53D6\u503C/\u8BBE\u503C",anchor:"\u8868\u5355\u53D6\u503C\u8BBE\u503C",level:2},{content:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6EOptions\u9009\u9879\u503C",anchor:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C",level:2},{content:"\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C",anchor:"\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40",level:2},{content:"\u5BCC\u6587\u672C",anchor:"\u5BCC\u6587\u672C",level:2}]};const ws=B,qs={class:"vuedoc"},Ds=d('<h1 id="form-demo" data-source-line="1"><a class="markdownIt-Anchor" href="#form-demo">#</a> Form Demo</h1><h2 id="\u57FA\u7840\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h2><pre style="display:none;"></pre>',3),Vs={class:"vuedoc-demo"},Cs={class:"vuedoc-demo__inner"},Ns={class:"vuedoc-demo__preview"},Ls={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Us=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),xs=[Us],$s=d('<h2 id="\u8868\u5355\u6821\u9A8C" data-source-line="100"><a class="markdownIt-Anchor" href="#\u8868\u5355\u6821\u9A8C">#</a> \u8868\u5355\u6821\u9A8C</h2><p data-source-line="102">\u5F3A\u5927\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u53EF\u4F7F\u7528\u5FEB\u901F\u9009\u62E9\u8868\u5355\u5168\u5C40\u7684\u89C4\u5219\uFF0C\u51CF\u5C11\u540C\u6837\u7684\u89C4\u5219\u5BF9\u4E0D\u540C\u7684\u63A7\u4EF6\u91CD\u590D\u7684\u52A0\u5165\u7684rules\u6821\u9A8C\u53BB\uFF1B</p><p data-source-line="104">\u5185\u7F6E\u4E86\u5E38\u7528\u7684\u5FC5\u586B\u3001\u624B\u673A\u53F7\u7801\u3001\u56FA\u8BDD\u3001\u56FA\u8BDD\u6216\u624B\u673A\u3001\u90AE\u7BB1\u3001\u6B63\u6574\u6570\u3001\u6570\u5B57\u3001\u8EAB\u4EFD\u8BC1\u3001\u81EA\u5B9A\u4E49\u6B63\u5219\u3001\u81EA\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u4F7F\u7528\u975E\u5E38\u65B9\u4FBF\u3002</p><p data-source-line="106">\u53EF\u901A\u7528<code>./designForm/components/validate.ts</code>\u6269\u5C55\uFF0C\u6DFB\u52A0\u5E38\u7528\u6821\u9A8C\u89C4\u5219</p><pre style="display:none;"></pre>',5),Hs={class:"vuedoc-demo"},Rs={class:"vuedoc-demo__inner"},Fs={class:"vuedoc-demo__preview"},Bs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},zs=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),As=[zs],Ws=s("h2",{id:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E","data-source-line":"237"},[s("a",{class:"markdownIt-Anchor",href:"#\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E"},"#"),m(" \u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E")],-1),Ts=s("p",{"data-source-line":"239"},[m("\u4F7F\u7528"),s("code",null,"provide"),m("\u8BBE\u7F6E\u9009\u9879\u6570\u636E\u83B7\u53D6\u65B9\u6CD5\u9002\u7528\u4E8E\u5355\u9009\u3001\u591A\u9009\u3001\u4E0B\u62C9\u3001\u8054\u7EA7\u3002")],-1),Is=s("pre",{style:{display:"none"}},null,-1),Ks={class:"vuedoc-demo"},Os={class:"vuedoc-demo__inner"},Es={class:"vuedoc-demo__preview"},Ss={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ps=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Js=[Ps],Ms=s("h2",{id:"\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E","data-source-line":"302"},[s("a",{class:"markdownIt-Anchor",href:"#\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E"},"#"),m(" \u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E")],-1),Gs=s("p",{"data-source-line":"304"},"\u4F7F\u7528\u52A8\u6001\u9009\u9879\u6570\u636E\u6E90\u65B9\u5F0F\u83B7\u53D6\u6570\u636E\u65F6\uFF0C\u6570\u636E\u63A5\u53E3URL\u53EF\u5E26\u4E00\u4E2A\u52A8\u6001\u7684\u53C2\u6570\uFF0C\u5E76\u4E14\u5F53name=key\u7684\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u53EF\u6839\u636E\u6539\u53D8\u7684\u503C\u91CD\u65B0\u8BF7\u6C42\u6570\u636E\u3002\u4E0B\u9762\u4F8B\u5B50\u5C55\u793A\u5F53\u5355\u9009\u6846\u7EC4\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4E0B\u62C9\u9009\u62E9\u6846\u4F1A\u91CD\u65B0\u8BF7\u6C42\u52A0\u8F7D\u4E0B\u62C9\u9879",-1),Qs=s("pre",{style:{display:"none"}},null,-1),Xs={class:"vuedoc-demo"},Ys={class:"vuedoc-demo__inner"},Zs={class:"vuedoc-demo__preview"},sa={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},aa=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),na=[aa],la=d('<h2 id="\u8054\u52A8\u4E8B\u4EF6" data-source-line="371"><a class="markdownIt-Anchor" href="#\u8054\u52A8\u4E8B\u4EF6">#</a> \u8054\u52A8\u4E8B\u4EF6</h2><p data-source-line="373">\u6587\u672C\u8F93\u5165\u6846\u7684\u8054\u52A8\u6761\u4EF6<code>radio=1</code>\uFF0C\u5219\u8BE5\u63A7\u4EF6\u5728\u5355\u9009\u6846\u7EC4<code>radio</code>\u7684\u503C\u4E3A<code>1</code>\u65F6\u663E\u793A\u6216\u8005\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001\u3002</p><p data-source-line="375">\u591A\u4E2A\u6761\u4EF6\u65F6\u4F7F\u7528<code>,</code>\u6216<code>&amp;</code>\u5206\u9694\u5F00\uFF0C\u5F53\u5206\u9694\u7B26\u4E2D\u5B58\u5728<code>&amp;</code>\u65F6\uFF0C\u6761\u4EF6\u4E3A<code>and</code>\u5173\u7CFB\uFF0C\u540C\u65F6\u7B26\u5408\u65F6\u624D\u663E\u793A\uFF1B\u5426\u5219\u6761\u4EF6\u4E3A<code>or</code>\u5173\u7CFB\uFF0C\u7B26\u5408\u5176\u4E2D\u4E4B\u4E00\u65F6\u663E\u793A\u3002</p><pre style="display:none;"></pre>',4),ta={class:"vuedoc-demo"},pa={class:"vuedoc-demo__inner"},ea={class:"vuedoc-demo__preview"},ca={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},oa=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),ra=[oa],ha=s("h2",{id:"input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9","data-source-line":"472"},[s("a",{class:"markdownIt-Anchor",href:"#input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9"},"#"),m(" input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9")],-1),ia=s("pre",{style:{display:"none"}},null,-1),ja={class:"vuedoc-demo"},ma={class:"vuedoc-demo__inner"},da={class:"vuedoc-demo__preview"},ua={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},ga=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),fa=[ga],va=s("h2",{id:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A","data-source-line":"538"},[s("a",{class:"markdownIt-Anchor",href:"#\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A"},"#"),m(" \u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A")],-1),_a=s("p",{"data-source-line":"540"},[m("\u5F53\u540C\u4E00\u4E2A\u8868\u5355\u5E94\u7528\u4E8E\u4E0D\u540C\u573A\u666F\u65F6\uFF0C\u4E0D\u540C\u573A\u666F\u4E2D\u9700\u5BF9\u4E2A\u522B\u5B57\u6BB5\u8FDB\u884C\u9690\u85CF\u5904\u7406\uFF0C\u53EF\u5C06\u5BF9\u5E94\u5B57\u6BB5\u7684\u503C\u586B\u5199\u5728\u8868\u5355\u7684"),s("code",null,"hideField"),m("\u4E2D")],-1),ba=s("pre",{style:{display:"none"}},null,-1),ya={class:"vuedoc-demo"},ka={class:"vuedoc-demo__inner"},wa={class:"vuedoc-demo__preview"},qa={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Da=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Va=[Da],Ca=d('<h2 id="\u8868\u5355\u53D6\u503C\u8BBE\u503C" data-source-line="602"><a class="markdownIt-Anchor" href="#\u8868\u5355\u53D6\u503C\u8BBE\u503C">#</a> \u8868\u5355\u53D6\u503C/\u8BBE\u503C</h2><p data-source-line="604">\u4F7F\u7528<code>getValue()</code>\u65B9\u6CD5\u83B7\u53D6\u8868\u5355\u7684\u503C\uFF0C<code>getValue(true)</code>\u5E26\u53C2\u6570\u4E3A<code>true</code>\u65F6\u53EA\u63D0\u53D6\u975E\u7A7A\u503C</p><p data-source-line="606">\u4F7F\u7528<code>setValue(obj)</code>\u5BF9\u8868\u5355\u8BBE\u7F6E\u521D\u59CB\u503C</p><pre style="display:none;"></pre>',4),Na={class:"vuedoc-demo"},La={class:"vuedoc-demo__inner"},Ua={class:"vuedoc-demo__preview"},xa={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},$a=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Ha=[$a],Ra=s("h2",{id:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C","data-source-line":"675"},[s("a",{class:"markdownIt-Anchor",href:"#\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C"},"#"),m(" \u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6EOptions\u9009\u9879\u503C")],-1),Fa=s("p",{"data-source-line":"677"},[m("\u9009\u9879\u4E3A\u52A8\u6001\u6570\u636E\u65F6\uFF0C\u9664\u4E86\u9009\u62E9\u6570\u636E\u6E90\u548C\u65B9\u6CD5\u51FD\u6570\u5916\uFF0C\u8FD8\u53EF\u4F7F\u7528"),s("code",null,"setOptions(obj)"),m("\u5BF9\u8868\u5355\u9009\u9879\u6570\u636E\u8BBE\u7F6E\u9009\u9879\u503C")],-1),Ba=s("pre",{style:{display:"none"}},null,-1),za={class:"vuedoc-demo"},Aa={class:"vuedoc-demo__inner"},Wa={class:"vuedoc-demo__preview"},Ta={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},Ia=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Ka=[Ia],Oa=d('<h2 id="\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C" data-source-line="738"><a class="markdownIt-Anchor" href="#\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C">#</a> \u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C</h2><p data-source-line="740">\u901A\u8FC7<code>\u751F\u6210\u811A\u672C\u9884\u89C8</code>\u6216<code>\u6DFB\u52A0\u5C5E\u6027</code>\u4EE3\u7801\u7F16\u8F91\u7A97\u53E3\u5BF9\u8868\u5355\u7EC4\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u540C\u65F6\u53EF\u4F7F\u7528\u5168\u5C40<code>get[formName]ControlByName</code>\u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u63A7\u4EF6\u7684\u914D\u7F6E\u9879\u6570\u636E\uFF08<code>formName</code>\u4E3A\u5F53\u524D\u8868\u5355<code>config.name</code> \u7684\u503C\uFF0C\u672C\u793A\u4F8B\u4E3A<code>form1660790919277</code>\uFF0C\u56E0\u6B64\u5728\u63A7\u4EF6\u4E2D\u6DFB\u52A0\u7684\u65B9\u6CD5\u540D\u4E3A<code>getform1660790919277ControlByName</code>\uFF09</p><pre style="display:none;"></pre>',3),Ea={class:"vuedoc-demo"},Sa={class:"vuedoc-demo__inner"},Pa={class:"vuedoc-demo__preview"},Ja={ref:"vdpv_9Ref",class:"vuedoc-demo__sourceref"},Ma=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),Ga=[Ma],Qa=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868","data-source-line":"827"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868"},"#"),m(" \u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868")],-1),Xa=s("pre",{style:{display:"none"}},null,-1),Ya={class:"vuedoc-demo"},Za={class:"vuedoc-demo__inner"},sn={class:"vuedoc-demo__preview"},an={ref:"vdpv_10Ref",class:"vuedoc-demo__sourceref"},nn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),ln=[nn],tn=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6","data-source-line":"907"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},"#"),m(" \u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6")],-1),pn=s("p",{"data-source-line":"909"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u9700\u5168\u5C40\u6CE8\u518C",-1),en=s("pre",{style:{display:"none"}},null,-1),cn={class:"vuedoc-demo"},on={class:"vuedoc-demo__inner"},rn={class:"vuedoc-demo__preview"},hn={ref:"vdpv_11Ref",class:"vuedoc-demo__sourceref"},jn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),mn=[jn],dn=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20","data-source-line":"961"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20"},"#"),m(" \u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20")],-1),un=s("pre",{style:{display:"none"}},null,-1),gn={class:"vuedoc-demo"},fn={class:"vuedoc-demo__inner"},vn={class:"vuedoc-demo__preview"},_n={ref:"vdpv_12Ref",class:"vuedoc-demo__sourceref"},bn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),yn=[bn],kn=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40","data-source-line":"1037"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40"},"#"),m(" \u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40")],-1),wn=s("pre",{style:{display:"none"}},null,-1),qn={class:"vuedoc-demo"},Dn={class:"vuedoc-demo__inner"},Vn={class:"vuedoc-demo__preview"},Cn={ref:"vdpv_13Ref",class:"vuedoc-demo__sourceref"},Nn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Ln=[Nn],Un=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875","data-source-line":"1125"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875"},"#"),m(" \u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875")],-1),xn=s("pre",{style:{display:"none"}},null,-1),$n={class:"vuedoc-demo"},Hn={class:"vuedoc-demo__inner"},Rn={class:"vuedoc-demo__preview"},Fn={ref:"vdpv_14Ref",class:"vuedoc-demo__sourceref"},Bn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),zn=[Bn],An=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40","data-source-line":"1202"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40"},"#"),m(" \u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40")],-1),Wn=s("pre",{style:{display:"none"}},null,-1),Tn={class:"vuedoc-demo"},In={class:"vuedoc-demo__inner"},Kn={class:"vuedoc-demo__preview"},On={ref:"vdpv_15Ref",class:"vuedoc-demo__sourceref"},En=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Sn=[En],Pn=s("h2",{id:"\u5BCC\u6587\u672C","data-source-line":"1275"},[s("a",{class:"markdownIt-Anchor",href:"#\u5BCC\u6587\u672C"},"#"),m(" \u5BCC\u6587\u672C")],-1),Jn=s("pre",{style:{display:"none"}},null,-1),Mn={class:"vuedoc-demo"},Gn={class:"vuedoc-demo__inner"},Qn={class:"vuedoc-demo__preview"},Xn={ref:"vdpv_16Ref",class:"vuedoc-demo__sourceref"},Yn=d(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Zn=[Yn];function sl(n,a,j,o,h,p){const t=c("vdpv_0"),r=c("vdpv_1"),i=c("vdpv_2"),y=c("vdpv_3"),D=c("vdpv_4"),V=c("vdpv_5"),C=c("vdpv_6"),N=c("vdpv_7"),L=c("vdpv_8"),U=c("vdpv_9"),x=c("vdpv_10"),$=c("vdpv_11"),H=c("vdpv_12"),k=c("vdpv_13"),R=c("vdpv_14"),w=c("vdpv_15"),q=c("vdpv_16");return u(),g("div",qs,[Ds,s("div",Vs,[s("div",Cs,[s("div",Ns,[e(t)]),s("div",{style:f({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ls,xs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=b=>n.toggleCode(0))},v(n.vdpv_0Height>0?"hidden":"show"),1)])]),$s,s("div",Hs,[s("div",Rs,[s("div",Fs,[e(r)]),s("div",{style:f({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",Bs,As,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=b=>n.toggleCode(1))},v(n.vdpv_1Height>0?"hidden":"show"),1)])]),Ws,Ts,Is,s("div",Ks,[s("div",Os,[s("div",Es,[e(i)]),s("div",{style:f({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ss,Js,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=b=>n.toggleCode(2))},v(n.vdpv_2Height>0?"hidden":"show"),1)])]),Ms,Gs,Qs,s("div",Xs,[s("div",Ys,[s("div",Zs,[e(y)]),s("div",{style:f({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",sa,na,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=b=>n.toggleCode(3))},v(n.vdpv_3Height>0?"hidden":"show"),1)])]),la,s("div",ta,[s("div",pa,[s("div",ea,[e(D)]),s("div",{style:f({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",ca,ra,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=b=>n.toggleCode(4))},v(n.vdpv_4Height>0?"hidden":"show"),1)])]),ha,ia,s("div",ja,[s("div",ma,[s("div",da,[e(V)]),s("div",{style:f({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",ua,fa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=b=>n.toggleCode(5))},v(n.vdpv_5Height>0?"hidden":"show"),1)])]),va,_a,ba,s("div",ya,[s("div",ka,[s("div",wa,[e(C)]),s("div",{style:f({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",qa,Va,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=b=>n.toggleCode(6))},v(n.vdpv_6Height>0?"hidden":"show"),1)])]),Ca,s("div",Na,[s("div",La,[s("div",Ua,[e(N)]),s("div",{style:f({height:n.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",xa,Ha,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=b=>n.toggleCode(7))},v(n.vdpv_7Height>0?"hidden":"show"),1)])]),Ra,Fa,Ba,s("div",za,[s("div",Aa,[s("div",Wa,[e(L)]),s("div",{style:f({height:n.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ta,Ka,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=b=>n.toggleCode(8))},v(n.vdpv_8Height>0?"hidden":"show"),1)])]),Oa,s("div",Ea,[s("div",Sa,[s("div",Pa,[e(U)]),s("div",{style:f({height:n.vdpv_9Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ja,Ga,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[9]||(a[9]=b=>n.toggleCode(9))},v(n.vdpv_9Height>0?"hidden":"show"),1)])]),Qa,Xa,s("div",Ya,[s("div",Za,[s("div",sn,[e(x)]),s("div",{style:f({height:n.vdpv_10Height+"px"}),class:"vuedoc-demo__source"},[s("div",an,ln,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[10]||(a[10]=b=>n.toggleCode(10))},v(n.vdpv_10Height>0?"hidden":"show"),1)])]),tn,pn,en,s("div",cn,[s("div",on,[s("div",rn,[e($)]),s("div",{style:f({height:n.vdpv_11Height+"px"}),class:"vuedoc-demo__source"},[s("div",hn,mn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[11]||(a[11]=b=>n.toggleCode(11))},v(n.vdpv_11Height>0?"hidden":"show"),1)])]),dn,un,s("div",gn,[s("div",fn,[s("div",vn,[e(H)]),s("div",{style:f({height:n.vdpv_12Height+"px"}),class:"vuedoc-demo__source"},[s("div",_n,yn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[12]||(a[12]=b=>n.toggleCode(12))},v(n.vdpv_12Height>0?"hidden":"show"),1)])]),kn,wn,s("div",qn,[s("div",Dn,[s("div",Vn,[e(k)]),s("div",{style:f({height:n.vdpv_13Height+"px"}),class:"vuedoc-demo__source"},[s("div",Cn,Ln,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[13]||(a[13]=b=>n.toggleCode(13))},v(n.vdpv_13Height>0?"hidden":"show"),1)])]),Un,xn,s("div",$n,[s("div",Hn,[s("div",Rn,[e(R)]),s("div",{style:f({height:n.vdpv_14Height+"px"}),class:"vuedoc-demo__source"},[s("div",Fn,zn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[14]||(a[14]=b=>n.toggleCode(14))},v(n.vdpv_14Height>0?"hidden":"show"),1)])]),An,Wn,s("div",Tn,[s("div",In,[s("div",Kn,[e(w)]),s("div",{style:f({height:n.vdpv_15Height+"px"}),class:"vuedoc-demo__source"},[s("div",On,Sn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[15]||(a[15]=b=>n.toggleCode(15))},v(n.vdpv_15Height>0?"hidden":"show"),1)])]),Pn,Jn,s("div",Mn,[s("div",Gn,[s("div",Qn,[e(q)]),s("div",{style:f({height:n.vdpv_16Height+"px"}),class:"vuedoc-demo__source"},[s("div",Xn,Zn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[16]||(a[16]=b=>n.toggleCode(16))},v(n.vdpv_16Height>0?"hidden":"show"),1)])])])}const nl=z(ws,[["render",sl]]);export{nl as default};
