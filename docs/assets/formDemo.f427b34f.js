import{r as l,a as c,o as g,c as _,b as e,w as d,d as i,a5 as A,g as O,a3 as E,e as S,A as P,H as J,i as s,a6 as f,t as v,a4 as u}from"./index.f2a8992f.js";const M={__name:"formDemo.md.vdpv_0",setup(n){const a=l({list:[{name:"input1660724087482",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"textarea1660724093238",type:"textarea",control:{modelValue:""},config:{},item:{label:"\u591A\u884C\u6587\u672C",showLabel:!1}},{name:"radio1660724102250",type:"radio",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"checkbox1660724104783",type:"checkbox",control:{modelValue:[]},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u591A\u9009\u6846\u7EC4",showLabel:!1}},{name:"select1660724088685",type:"select",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}},{name:"datePicker1660724118488",type:"datePicker",control:{modelValue:"",type:"date"},config:{},item:{label:"\u65E5\u671F\u9009\u62E9\u5668",showLabel:!1}},{name:"switch1660724123026",type:"switch",control:{modelValue:!1},config:{},item:{label:"\u5F00\u5173",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660723952800"},config:{submitBtn:{confirm:"\u63D0\u4EA4",cancel:"\u53D6\u6D88"}}});return(j,r)=>{const h=c("ak-form");return g(),_("div",null,[e(h,{formData:a.value,ref:"formName"},null,8,["formData"])])}}},G=i("\u63D0\u4EA4"),Q={__name:"formDemo.md.vdpv_1",setup(n){const a=l({list:[{name:"userName",type:"input",control:{modelValue:"",placeholder:"\u5168\u5C40\u6821\u9A8C\u89C4\u5219"},config:{},item:{label:"\u7528\u6237\u540D",showLabel:!1,rules:[{key:"required",required:!0,message:"\u5FC5\u586B\u9879",trigger:"blur"}]},customRules:[]},{name:"tel",type:"input",control:{modelValue:"",placeholder:"\u9A8C\u8BC1\u624B\u673A\u53F7\u7801"},config:{},item:{label:"\u624B\u673A\u53F7",showLabel:!1},customRules:[{type:"mobile",message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",trigger:"blur"}]},{name:"wx",type:"input",control:{modelValue:"",placeholder:"\u81EA\u5B9A\u7F16\u8F91\u7684\u5FC5\u586B\u89C4\u5219"},config:{},item:{label:"\u5FAE\u4FE1\u53F7",showLabel:!1,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5FAE\u4FE1\u53F7",trigger:"change"}]}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0,placeholder:"\u4E0B\u62C9\u5FC5\u586B"},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1,rules:[{required:!0,message:"\u5FC5\u586B\u9879",trigger:"change"}]}},{name:"input1660727784191",type:"input",control:{modelValue:""},config:{},item:{label:"\u81EA\u5B9A\u4E49",showLabel:!1},customRules:[{type:"methods",message:"",trigger:"blur",methods:"customRules"}]}],form:{labelWidth:"",class:"",size:"default",name:"form1660725610088"},config:{submitBtn:{confirm:""}}});A("customRules",(p,t,o)=>{if(t!=="\u6211\u7231\u4F60")return o(new Error("\u8BF7\u8F93\u5165 \u6211\u7231\u4F60 \u54C8\u54C8\u54C8!"));o()});const j=l(!1),r=l(),h=()=>{r.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:h},{default:d(()=>[G]),_:1})])}}},X=i("\u63D0\u4EA4"),Y={__name:"formDemo.md.vdpv_2",setup(n){const a=l({list:[{name:"select1660727982838",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"async",source:1,request:"get",sourceFun:"getCheckboxFun"},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660725610088"},config:{submitBtn:{confirm:""}}}),j=l([{label:"\u9009\u98791",value:"1"}]);A("getCheckboxFun",j);const r=l(!1),h=l(),p=()=>{h.value.validate((t,o)=>{if(console.log(t),console.log(o),t)alert("submit");else return console.log("error submit"),!1})};return(t,o)=>{const m=c("ak-form"),y=c("el-button");return g(),_("div",null,[e(m,{formData:a.value,ref_key:"formName",ref:h,submitUrl:r.value},null,8,["formData","submitUrl"]),e(y,{type:"primary",onClick:p},{default:d(()=>[X]),_:1})])}}},Z={__name:"formDemo.md.vdpv_3",setup(n){const a=l({list:[{name:"text",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"radio",type:"radio",control:{modelValue:""},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"async",source:0,request:"get",sourceFun:"/test?a=${radio}"},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1",formId:""}}),j=l(!1);return(r,h)=>{const p=c("ak-form");return g(),_("div",null,[e(p,{formData:a.value,ref:"formName",submitUrl:j.value},null,8,["formData","submitUrl"])])}}},ss={__name:"formDemo.md.vdpv_4",setup(n){const a=l({list:[{type:"select",control:{modelValue:"",appendToBody:!0,filterable:!0,remote:!0,placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22"},options:[],config:{type:"async",source:0,request:"post",sourceFun:"/api/content/list",afterResponse:p=>(p.push({label:"1",value:"1"}),p),queryName:"queryName"},name:"select1662536735690",item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1662536407108"},config:{title:"form1662536407108",formId:""}}),j=l(!1),r=l(!1),h=l();return(p,t)=>{const o=c("ak-form");return g(),O(o,{formData:a.value,ref_key:"formName",ref:h,requestUrl:r.value,submitUrl:j.value},null,8,["formData","requestUrl","submitUrl"])}}},as=i("\u63D0\u4EA4"),ns={__name:"formDemo.md.vdpv_5",setup(n){const a=l({list:[{name:"radio",type:"radio",control:{modelValue:""},options:[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u6027\u522B",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"\u6E38\u620F",value:"1"},{label:"\u8D2D\u7269",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:"",linkKey:!0,linkValue:"$.radio==='1'",linkResult:"disabled"},item:{label:"\u5174\u8DA3\u7231\u597D",showLabel:!1}},{name:"input1637189604237",type:"input",control:{modelValue:"",placeholder:"\u6027\u522B\u4E3A\u7537\u6027\u6216\u5174\u8DA3\u7231\u597D\u4E3A\u6E38\u620F\u65F6\u663E\u793A"},slot:{},config:{linkKey:!0,linkValue:"$.radio==='1'||$.select==='1'"},item:{label:"\u6E38\u620F\u9879\u76EE",showLabel:!1},rules:[],customRules:[]},{name:"input1637198443468",type:"input",control:{modelValue:"",placeholder:"\u6027\u522B\u4E3A\u5973\u6027\u6216\u5174\u8DA3\u7231\u597D\u4E3A\u8D2D\u7269\u65F6\u663E\u793A"},slot:{},config:{linkKey:!0,linkValue:"$.radio==='2'&&$.select==='2'"},item:{label:"\u8D2D\u7269\u9879\u76EE",showLabel:!1},rules:[],customRules:[]}],form:{labelWidth:"",class:"",size:"default",name:"form1660728166875"}}),j=l(!1),r=l(),h=()=>{r.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:h},{default:d(()=>[as]),_:1})])}}},ls=i("\u63D0\u4EA4"),ts={__name:"formDemo.md.vdpv_6",setup(n){const a=l({list:[{name:"input1661496607029",type:"input",control:{modelValue:""},config:{append:"key:select1661496610083"},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"select1661496610083",type:"inputSlot",control:{modelValue:[],appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!0}}],form:{labelWidth:"",class:"",size:"default",name:"form1661496603520",formId:""}}),j=l(!1),r=l(),h=()=>{r.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:h},{default:d(()=>[ls]),_:1})])}}},ps=i("\u9690\u85CF\u663E\u793A\u624B\u673A\u53F7"),es=i("\u9690\u85CF\u663E\u793A\u5FAE\u4FE1\u53F7"),cs={__name:"formDemo.md.vdpv_7",setup(n){const a=l({list:[{name:"tel",type:"input",control:{modelValue:""},config:{},item:{label:"\u624B\u673A\u53F7\u7801",showLabel:!1}},{name:"wx",type:"input",control:{modelValue:""},config:{},item:{label:"\u5FAE\u4FE1\u53F7",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660789836231"},config:{hideField:[]}}),j=l(!1),r=l(),h=p=>{const t=a.value.config.hideField.indexOf(p);t!==-1?a.value.config.hideField.splice(t,1):a.value.config.hideField.push(p)};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:t[0]||(t[0]=y=>h("tel"))},{default:d(()=>[ps]),_:1}),e(m,{type:"primary",onClick:t[1]||(t[1]=y=>h("wx"))},{default:d(()=>[es]),_:1})])}}},rs=i("\u53D6\u503C"),os=i("\u8BBE\u503C"),hs={__name:"formDemo.md.vdpv_8",setup(n){const a=l({list:[{name:"tel",type:"input",control:{modelValue:""},config:{},item:{label:"\u624B\u673A\u53F7\u7801",showLabel:!1}},{name:"wx",type:"input",control:{modelValue:""},config:{},item:{label:"\u5FAE\u4FE1\u53F7",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"label1",value:"1"},{label:"label2",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1},rules:[]}],form:{labelWidth:"",class:"",size:"default",name:"form1660789836230"}}),j=l(!1),r=l(),h=()=>{alert(JSON.stringify(r.value.getValue()))},p=()=>{r.value.setValue({tel:"1380013800",wx:"337547038",select:"1"})};return(t,o)=>{const m=c("ak-form"),y=c("el-button");return g(),_("div",null,[e(m,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(y,{type:"primary",onClick:h},{default:d(()=>[rs]),_:1}),e(y,{type:"primary",onClick:p},{default:d(()=>[os]),_:1})])}}},is=i("\u8BBE\u7F6Eoptions\u503C"),js={__name:"formDemo.md.vdpv_9",setup(n){const a=l({list:[{name:"radio",type:"radio",control:{modelValue:""},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}},{name:"checkbox",type:"checkbox",control:{modelValue:[]},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u591A\u9009\u6846\u7EC4",showLabel:!1}},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660790919277"}}),j=l(),r=()=>{j.value.setOptions({radio:[{label:"\u5355\u9009\u6D4B\u8BD5",value:"value3"}],checkbox:[{label:"\u591A\u9009\u6D4B\u8BD5",value:"value3"}],select:[{label:"\u4E0B\u62C9\u6D4B\u8BD52",value:"value3"},{label:"\u4E0B\u62C9\u6D4B\u8BD521",value:"value31"}]})};return(h,p)=>{const t=c("ak-form"),o=c("el-button");return g(),_("div",null,[e(t,{formData:a.value,ref_key:"formName",ref:j},null,8,["formData"]),e(o,{type:"primary",onClick:r},{default:d(()=>[is]),_:1})])}}},ms=i("\u63D0\u4EA4"),us={__name:"formDemo.md.vdpv_10",setup(n){const a=l({list:[{name:"password",type:"password",control:{modelValue:""},config:{},item:{label:"\u5BC6\u7801",showLabel:!1},customRules:[{type:"required",message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]},{name:"password2",type:"password",control:{modelValue:""},config:{},item:{label:"\u786E\u8BA4\u5BC6\u7801",showLabel:!1,rules:[{validator:(p,t,o)=>{const m=getform1660790919277ControlByName("password");console.log(m),t===""?o(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):t!==m.control.modelValue?o(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u6837")):o()},trigger:"change"}]}}],form:{labelWidth:"",class:"",size:"default",name:"form1660790919277"}}),j=l(!1),r=l(),h=()=>{r.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:h},{default:d(()=>[ms]),_:1})])}}},ds=i("\u63D0\u4EA4"),gs={__name:"formDemo.md.vdpv_11",setup(n){const a=l({list:[{name:"table1660792942732",type:"table",list:[{name:"index",type:"index",item:{label:"\u5E8F\u53F7"},control:{modelValue:void 0},config:{}},{name:"input1660792954637",type:"input",control:{modelValue:void 0,appendToBody:!0},config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"select1660792958068",type:"select",control:{modelValue:void 0,appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],tableData:[],control:{border:!0},config:{add:"\u589E\u52A0",delete:"\u5220\u9664"}}],form:{labelWidth:"",class:"",size:"default",name:"form1660790919277"}}),j=l(!1),r=l(),h=()=>{r.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:h},{default:d(()=>[ds]),_:1})])}}},fs=i("\u63D0\u4EA4"),vs={__name:"formDemo.md.vdpv_12",setup(n){const a=l({list:[{name:"component1660793530856",type:"component",control:{modelValue:""},config:{componentName:"ComponentTest"},item:{label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660793512027"}}),j=l(!1),r=l(),h=()=>{r.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:h},{default:d(()=>[fs]),_:1})])}}},_s=i("\u63D0\u4EA4"),bs={__name:"formDemo.md.vdpv_13",setup(n){const j=l({list:[{name:"upload",type:"upload",control:{modelValue:[],action:"http://localhost:3001/upload/single",listType:"picture-card",limit:2,onError:(t,o,m)=>{console.log("\u9519\u8BEF\u5F02\u5E38\u5904\u7406"),console.log(t,o,m)}},config:{tip:"\u4E00\u4E9B\u4E0A\u4F20\u63D0\u793A\u6587\u6848",btnText:""},item:{label:"\u56FE\u7247/\u6587\u4EF6",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660793512027"}}),r=l(!1),h=l(),p=()=>{h.value.validate((t,o)=>{if(console.log(t),console.log(o),t)alert("submit");else return console.log("error submit"),!1})};return setTimeout(()=>{h.value.setValue({upload:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]})},1e3),(t,o)=>{const m=c("ak-form"),y=c("el-button");return g(),_("div",null,[e(m,{formData:j.value,ref_key:"formName",ref:h,submitUrl:r.value},null,8,["formData","submitUrl"]),e(y,{type:"primary",onClick:p},{default:d(()=>[_s]),_:1})])}}},ys=i("\u63D0\u4EA4"),ks={__name:"formDemo.md.vdpv_14",setup(n){const a=l({list:[{name:"grid1660800280703",type:"grid",columns:[{attr:{span:12},list:[{name:"input1660800459694",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}}],name:"gridChild1660800443904",type:"gridChild"},{attr:{span:11,offset:1},list:[{name:"input1660800461629",type:"input",control:{modelValue:""},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}}],name:"gridChild1660800281864",type:"gridChild"}],control:{},config:{}},{name:"input1660800338143",type:"input",control:{modelValue:""},config:{span:NaN},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660800277903"}}),j=l(!1),r=l(),h=()=>{r.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:h},{default:d(()=>[ys]),_:1})])}}},ws=i("\u63D0\u4EA4"),qs={__name:"formDemo.md.vdpv_15",setup(n){const a=l({list:[{name:"tabs1660801144546",type:"tabs",columns:[{label:"\u6807\u7B7E\u540D\u79F01",list:[{name:"input1660801157128",type:"input",control:{modelValue:""},config:{},item:{label:"\u6807\u7B7E1\u5185\u5BB9",showLabel:!1}}]},{label:"\u6807\u7B7E\u540D\u79F02",list:[{name:"input1660801163175",type:"input",control:{modelValue:""},config:{},item:{label:"\u6807\u7B7E2\u5185\u5BB9",showLabel:!1}}]}],control:{},config:{}}],form:{labelWidth:"",class:"",size:"default",name:"form1660801142187"}}),j=l(!1),r=l(),h=()=>{r.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:h},{default:d(()=>[ws]),_:1})])}}},Ds=i("\u63D0\u4EA4"),Vs={__name:"formDemo.md.vdpv_16",setup(n){const a=l({list:[{name:"card1660801241278",type:"card",list:[{name:"input1660801243525",type:"input",control:{modelValue:"",appendToBody:!0},config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1}},{name:"select1660801250564",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"\u6807\u7B7E1",value:"value1"},{label:"\u6807\u7B7E2",value:"value2"},{label:"\u6807\u7B7E3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1}}],control:{},config:{},item:{label:"\u5361\u7247\u5E03\u5C40",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660801232287"}}),j=l(!1),r=l(),h=()=>{r.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:h},{default:d(()=>[Ds]),_:1})])}}},Cs=i("\u63D0\u4EA4"),Ns={__name:"formDemo.md.vdpv_17",setup(n){const a=l({list:[{type:"flex",list:[{type:"input",control:{modelValue:""},config:{},name:"userName",item:{label:"\u7528\u6237\u540D",showLabel:!1},customRules:[{type:"required",message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}]},{type:"input",control:{modelValue:""},config:{},name:"tel",item:{label:"\u7535\u8BDD\u53F7\u7801",showLabel:!1},customRules:[{type:"required",message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",trigger:"blur"},{type:"mobile",message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",trigger:"blur"}]},{type:"radio",control:{modelValue:""},options:[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},name:"radio1663146936352",item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1}}],tableData:[],control:{},config:{add:"\u589E\u52A0",delete:"\u5220\u9664"},name:"flex1663146822121"}],form:{labelWidth:"",class:"",size:"default",name:"form1663146820436"},config:{title:"form1663146820436",formId:""}}),j=l(!1),r=l(!1),h=l(),p=()=>{h.value.validate((t,o)=>{if(console.log(t),console.log(o),t)alert("submit");else return console.log("error submit"),!1})};return(t,o)=>{const m=c("ak-form"),y=c("el-button");return g(),_("div",null,[e(m,{formData:a.value,ref_key:"formName",ref:h,requestUrl:r.value,submitUrl:j.value},null,8,["formData","requestUrl","submitUrl"]),e(y,{type:"primary",onClick:p},{default:d(()=>[Cs]),_:1})])}}},Us=i("\u63D0\u4EA4"),Ls={__name:"formDemo.md.vdpv_18",setup(n){const a=l({list:[{name:"tinymce1660801329213",type:"tinymce",control:{modelValue:""},config:{},item:{label:"tinymce\u5BCC\u6587\u672C",showLabel:!1}}],form:{labelWidth:"",class:"",size:"default",name:"form1660801232287"}}),j=l(!1),r=l(),h=()=>{r.value.validate((p,t)=>{if(console.log(p),console.log(t),p)alert("submit");else return console.log("error submit"),!1})};return(p,t)=>{const o=c("ak-form"),m=c("el-button");return g(),_("div",null,[e(o,{formData:a.value,ref_key:"formName",ref:r,submitUrl:j.value},null,8,["formData","submitUrl"]),e(m,{type:"primary",onClick:h},{default:d(()=>[Us]),_:1})])}}},B=S({components:{vdpv_0:M,vdpv_1:Q,vdpv_2:Y,vdpv_3:Z,vdpv_4:ss,vdpv_5:ns,vdpv_6:ts,vdpv_7:cs,vdpv_8:hs,vdpv_9:js,vdpv_10:us,vdpv_11:gs,vdpv_12:vs,vdpv_13:bs,vdpv_14:ks,vdpv_15:qs,vdpv_16:Vs,vdpv_17:Ns,vdpv_18:Ls},setup(n){const a=l(),j=l(),r=l(),h=l(),p=l(),t=l(),o=l(),m=l(),y=l(),D=l(),V=l(),C=l(),N=l(),U=l(),L=l(),x=l(),$=l(),R=l(),H=l(),F=[a,j,r,h,p,t,o,m,y,D,V,C,N,U,L,x,$,R,H],k=P({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0,vdpv_9Height:0,vdpv_10Height:0,vdpv_11Height:0,vdpv_12Height:0,vdpv_13Height:0,vdpv_14Height:0,vdpv_15Height:0,vdpv_16Height:0,vdpv_17Height:0,vdpv_18Height:0});return{toggleCode:w=>{const q="vdpv_"+w;k[q+"Height"]===0?k[q+"Height"]=(F[w].value?F[w].value.offsetHeight:0)||0:k[q+"Height"]=0},...J(k),vdpv_0Ref:a,vdpv_1Ref:j,vdpv_2Ref:r,vdpv_3Ref:h,vdpv_4Ref:p,vdpv_5Ref:t,vdpv_6Ref:o,vdpv_7Ref:m,vdpv_8Ref:y,vdpv_9Ref:D,vdpv_10Ref:V,vdpv_11Ref:C,vdpv_12Ref:N,vdpv_13Ref:U,vdpv_14Ref:L,vdpv_15Ref:x,vdpv_16Ref:$,vdpv_17Ref:R,vdpv_18Ref:H}}});B.$vd={matter:{},toc:[{content:"Form Demo",anchor:"form-demo",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:2},{content:"\u8868\u5355\u6821\u9A8C",anchor:"\u8868\u5355\u6821\u9A8C",level:2},{content:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E",anchor:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E",level:2},{content:"\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E",anchor:"\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E",level:2},{content:"Select\u8FDC\u7A0B\u641C\u7D22",anchor:"select\u8FDC\u7A0B\u641C\u7D22",level:2},{content:"\u8054\u52A8\u4E8B\u4EF6",anchor:"\u8054\u52A8\u4E8B\u4EF6",level:2},{content:"input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9",anchor:"input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9",level:2},{content:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A",anchor:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A",level:2},{content:"\u8868\u5355\u53D6\u503C/\u8BBE\u503C",anchor:"\u8868\u5355\u53D6\u503C\u8BBE\u503C",level:2},{content:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6EOptions\u9009\u9879\u503C",anchor:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C",level:2},{content:"\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C",anchor:"\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5\uFF0D\u5F39\u6027\u5E03\u5C40",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u5F39\u6027\u5E03\u5C40",level:2},{content:"\u5BCC\u6587\u672C",anchor:"\u5BCC\u6587\u672C",level:2}]};const xs=B,$s={class:"vuedoc"},Rs=u('<h1 id="form-demo" data-source-line="1"><a class="markdownIt-Anchor" href="#form-demo">#</a> Form Demo</h1><h2 id="\u57FA\u7840\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h2><pre style="display:none;"></pre>',3),Hs={class:"vuedoc-demo"},Fs={class:"vuedoc-demo__inner"},zs={class:"vuedoc-demo__preview"},As={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},Bs=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Ws=[Bs],Ts=u('<h2 id="\u8868\u5355\u6821\u9A8C" data-source-line="100"><a class="markdownIt-Anchor" href="#\u8868\u5355\u6821\u9A8C">#</a> \u8868\u5355\u6821\u9A8C</h2><p data-source-line="102">\u5F3A\u5927\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u53EF\u4F7F\u7528\u5FEB\u901F\u9009\u62E9\u8868\u5355\u5168\u5C40\u7684\u89C4\u5219\uFF0C\u51CF\u5C11\u540C\u6837\u7684\u89C4\u5219\u5BF9\u4E0D\u540C\u7684\u63A7\u4EF6\u91CD\u590D\u7684\u52A0\u5165\u7684rules\u6821\u9A8C\u53BB\uFF1B</p><p data-source-line="104">\u5185\u7F6E\u4E86\u5E38\u7528\u7684\u5FC5\u586B\u3001\u624B\u673A\u53F7\u7801\u3001\u56FA\u8BDD\u3001\u56FA\u8BDD\u6216\u624B\u673A\u3001\u90AE\u7BB1\u3001\u6B63\u6574\u6570\u3001\u6570\u5B57\u3001\u8EAB\u4EFD\u8BC1\u3001\u81EA\u5B9A\u4E49\u6B63\u5219\u3001\u81EA\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u4F7F\u7528\u975E\u5E38\u65B9\u4FBF\u3002</p><p data-source-line="106">\u53EF\u901A\u7528<code>./designForm/components/validate.ts</code>\u6269\u5C55\uFF0C\u6DFB\u52A0\u5E38\u7528\u6821\u9A8C\u89C4\u5219</p><pre style="display:none;"></pre>',5),Is={class:"vuedoc-demo"},Ks={class:"vuedoc-demo__inner"},Os={class:"vuedoc-demo__preview"},Es={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Ss=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Ps=[Ss],Js=s("h2",{id:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E","data-source-line":"237"},[s("a",{class:"markdownIt-Anchor",href:"#\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E"},"#"),i(" \u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E")],-1),Ms=s("p",{"data-source-line":"239"},[i("\u4F7F\u7528"),s("code",null,"provide"),i("\u8BBE\u7F6E\u9009\u9879\u6570\u636E\u83B7\u53D6\u65B9\u6CD5\u9002\u7528\u4E8E\u5355\u9009\u3001\u591A\u9009\u3001\u4E0B\u62C9\u3001\u8054\u7EA7\u3002")],-1),Gs=s("pre",{style:{display:"none"}},null,-1),Qs={class:"vuedoc-demo"},Xs={class:"vuedoc-demo__inner"},Ys={class:"vuedoc-demo__preview"},Zs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},sa=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),aa=[sa],na=s("h2",{id:"\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E","data-source-line":"302"},[s("a",{class:"markdownIt-Anchor",href:"#\u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E"},"#"),i(" \u52A8\u6001\u83B7\u53D6\u9009\u9879\u6570\u636E")],-1),la=s("p",{"data-source-line":"304"},"\u4F7F\u7528\u52A8\u6001\u9009\u9879\u6570\u636E\u6E90\u65B9\u5F0F\u83B7\u53D6\u6570\u636E\u65F6\uFF0C\u6570\u636E\u63A5\u53E3URL\u53EF\u5E26\u4E00\u4E2A\u52A8\u6001\u7684\u53C2\u6570\uFF0C\u5E76\u4E14\u5F53name=key\u7684\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u53EF\u6839\u636E\u6539\u53D8\u7684\u503C\u91CD\u65B0\u8BF7\u6C42\u6570\u636E\u3002\u4E0B\u9762\u4F8B\u5B50\u5C55\u793A\u5F53\u5355\u9009\u6846\u7EC4\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4E0B\u62C9\u9009\u62E9\u6846\u4F1A\u91CD\u65B0\u8BF7\u6C42\u52A0\u8F7D\u4E0B\u62C9\u9879",-1),ta=s("pre",{style:{display:"none"}},null,-1),pa={class:"vuedoc-demo"},ea={class:"vuedoc-demo__inner"},ca={class:"vuedoc-demo__preview"},ra={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},oa=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),ha=[oa],ia=u('<h2 id="select\u8FDC\u7A0B\u641C\u7D22" data-source-line="371"><a class="markdownIt-Anchor" href="#select\u8FDC\u7A0B\u641C\u7D22">#</a> Select\u8FDC\u7A0B\u641C\u7D22</h2><p data-source-line="373">\u542F\u7528\u8FDC\u7A0B\u641C\u7D22\uFF0C\u53EF\u901A\u8FC7\u7F16\u8F91\u5C5E\u6027\u5C06<code>filterable</code>\u548C<code>remote</code>\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u540C\u65F6\u5C06\u9009\u9879\u914D\u7F6E\u8BBE\u7F6E\u4E3A<code>\u52A8\u6001\u9009\u9879-\u6570\u636E\u6E90\u65B9\u5F0F</code>\uFF0C\u5F53\u8F93\u5165\u5173\u952E\u5B57\u65F6\uFF0C\u5C06\u4F1A\u91CD\u65B0\u6839\u636E\u8F93\u5165\u5173\u952E\u5B57\u83B7\u53D6\u6570\u636E\u3002<code>afterResponse</code>\u53EF\u5BF9\u8BF7\u6C42\u6570\u636E\u5904\u7406\u518D\u8FD4\u56DE\uFF0C\u540C\u65F6\u53EF\u901A\u8FC7\u914D\u7F6E<code>queryName</code>\u6539\u53D8\u53C2\u6570\u540D\u79F0</p><pre style="display:none;"></pre>',3),ja={class:"vuedoc-demo"},ma={class:"vuedoc-demo__inner"},ua={class:"vuedoc-demo__preview"},da={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},ga=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),fa=[ga],va=s("h2",{id:"\u8054\u52A8\u4E8B\u4EF6","data-source-line":"434"},[s("a",{class:"markdownIt-Anchor",href:"#\u8054\u52A8\u4E8B\u4EF6"},"#"),i(" \u8054\u52A8\u4E8B\u4EF6")],-1),_a={"data-source-line":"436"},ba={class:"katex"},ya={class:"katex-mathml"},ka=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0em"}}),s("span",{class:"strut bottom",style:{height:"0em","vertical-align":"0em"}}),s("span",{class:"base"})],-1),wa=i("\u4E3A\u8868\u5355\u7684"),qa=s("code",null,"model",-1),Da=i("\uFF0C\u5305\u542B\u4E86\u8868\u5355\u6240\u6709\u7684\u503C\uFF0C\u591A\u4E2A\u6761\u4EF6\u53EF\u7528"),Va=s("code",null,"||",-1),Ca=i("\u6216"),Na=s("code",null,"&",-1),Ua=i("\u8FDE\u63A5"),La=s("pre",{style:{display:"none"}},null,-1),xa={class:"vuedoc-demo"},$a={class:"vuedoc-demo__inner"},Ra={class:"vuedoc-demo__preview"},Ha={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Fa=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7537&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5973&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span> },
        <span class="hljs-attr">options</span>: [
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6E38\u620F&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
          { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8D2D\u7269&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> }
        ],
        <span class="hljs-attr">config</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>,
          <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>,
          <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span>,
          <span class="hljs-attr">linkKey</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&quot;$.radio===&#39;1&#39;&quot;</span>,
          <span class="hljs-attr">linkResult</span>: <span class="hljs-string">&#39;disabled&#39;</span>
        },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5174\u8DA3\u7231\u597D&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1637189604237&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>,
          <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u6027\u522B\u4E3A\u7537\u6027\u6216\u5174\u8DA3\u7231\u597D\u4E3A\u6E38\u620F\u65F6\u663E\u793A&#39;</span>
        },
        <span class="hljs-attr">slot</span>: {},
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">linkKey</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&quot;$.radio===&#39;1&#39;||$.select===&#39;1&#39;&quot;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6E38\u620F\u9879\u76EE&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> },
        <span class="hljs-attr">rules</span>: [],
        <span class="hljs-attr">customRules</span>: []
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;input1637198443468&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>,
          <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;\u6027\u522B\u4E3A\u5973\u6027\u6216\u5174\u8DA3\u7231\u597D\u4E3A\u8D2D\u7269\u65F6\u663E\u793A&#39;</span>
        },
        <span class="hljs-attr">slot</span>: {},
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">linkKey</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&quot;$.radio===&#39;2&#39;&amp;&amp;$.select===&#39;2&#39;&quot;</span> },
        <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u8D2D\u7269\u9879\u76EE&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> },
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

</span></code></pre></div>`,1),za=[Fa],Aa=s("h2",{id:"input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9","data-source-line":"536"},[s("a",{class:"markdownIt-Anchor",href:"#input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9"},"#"),i(" input\u8F93\u5165\u6846\u8BBE\u7F6Eslot\u4E0B\u62C9")],-1),Ba=s("pre",{style:{display:"none"}},null,-1),Wa={class:"vuedoc-demo"},Ta={class:"vuedoc-demo__inner"},Ia={class:"vuedoc-demo__preview"},Ka={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},Oa=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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


</span></code></pre></div>`,1),Ea=[Oa],Sa=s("h2",{id:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A","data-source-line":"602"},[s("a",{class:"markdownIt-Anchor",href:"#\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A"},"#"),i(" \u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A")],-1),Pa=s("p",{"data-source-line":"604"},[i("\u5F53\u540C\u4E00\u4E2A\u8868\u5355\u5E94\u7528\u4E8E\u4E0D\u540C\u573A\u666F\u65F6\uFF0C\u4E0D\u540C\u573A\u666F\u4E2D\u9700\u5BF9\u4E2A\u522B\u5B57\u6BB5\u8FDB\u884C\u9690\u85CF\u5904\u7406\uFF0C\u53EF\u5C06\u5BF9\u5E94\u5B57\u6BB5\u7684\u503C\u586B\u5199\u5728\u8868\u5355\u7684"),s("code",null,"hideField"),i("\u4E2D")],-1),Ja=s("pre",{style:{display:"none"}},null,-1),Ma={class:"vuedoc-demo"},Ga={class:"vuedoc-demo__inner"},Qa={class:"vuedoc-demo__preview"},Xa={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},Ya=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Za=[Ya],sn=u('<h2 id="\u8868\u5355\u53D6\u503C\u8BBE\u503C" data-source-line="666"><a class="markdownIt-Anchor" href="#\u8868\u5355\u53D6\u503C\u8BBE\u503C">#</a> \u8868\u5355\u53D6\u503C/\u8BBE\u503C</h2><p data-source-line="668">\u4F7F\u7528<code>getValue()</code>\u65B9\u6CD5\u83B7\u53D6\u8868\u5355\u7684\u503C\uFF0C<code>getValue(true)</code>\u5E26\u53C2\u6570\u4E3A<code>true</code>\u65F6\u53EA\u63D0\u53D6\u975E\u7A7A\u503C</p><p data-source-line="670">\u4F7F\u7528<code>setValue(obj)</code>\u5BF9\u8868\u5355\u8BBE\u7F6E\u521D\u59CB\u503C</p><pre style="display:none;"></pre>',4),an={class:"vuedoc-demo"},nn={class:"vuedoc-demo__inner"},ln={class:"vuedoc-demo__preview"},tn={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},pn=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),en=[pn],cn=s("h2",{id:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C","data-source-line":"739"},[s("a",{class:"markdownIt-Anchor",href:"#\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C"},"#"),i(" \u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6EOptions\u9009\u9879\u503C")],-1),rn=s("p",{"data-source-line":"741"},[i("\u9009\u9879\u4E3A\u52A8\u6001\u6570\u636E\u65F6\uFF0C\u9664\u4E86\u9009\u62E9\u6570\u636E\u6E90\u548C\u65B9\u6CD5\u51FD\u6570\u5916\uFF0C\u8FD8\u53EF\u4F7F\u7528"),s("code",null,"setOptions(obj)"),i("\u5BF9\u8868\u5355\u9009\u9879\u6570\u636E\u8BBE\u7F6E\u9009\u9879\u503C")],-1),on=s("pre",{style:{display:"none"}},null,-1),hn={class:"vuedoc-demo"},jn={class:"vuedoc-demo__inner"},mn={class:"vuedoc-demo__preview"},un={ref:"vdpv_9Ref",class:"vuedoc-demo__sourceref"},dn=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),gn=[dn],fn=u('<h2 id="\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C" data-source-line="802"><a class="markdownIt-Anchor" href="#\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C">#</a> \u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C</h2><p data-source-line="804">\u901A\u8FC7<code>\u751F\u6210\u811A\u672C\u9884\u89C8</code>\u6216<code>\u6DFB\u52A0\u5C5E\u6027</code>\u4EE3\u7801\u7F16\u8F91\u7A97\u53E3\u5BF9\u8868\u5355\u7EC4\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u540C\u65F6\u53EF\u4F7F\u7528\u5168\u5C40<code>get[formName]ControlByName</code>\u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u63A7\u4EF6\u7684\u914D\u7F6E\u9879\u6570\u636E\uFF08<code>formName</code>\u4E3A\u5F53\u524D\u8868\u5355<code>config.name</code> \u7684\u503C\uFF0C\u672C\u793A\u4F8B\u4E3A<code>form1660790919277</code>\uFF0C\u56E0\u6B64\u5728\u63A7\u4EF6\u4E2D\u6DFB\u52A0\u7684\u65B9\u6CD5\u540D\u4E3A<code>getform1660790919277ControlByName</code>\uFF09\uFF1B\u5F53\u4EC5\u9700\u8981\u83B7\u53D6\u6307\u5B9A\u63A7\u4EF6\u503C\u65F6\u53EF\u4F7F\u7528<code>get[formName]ValueByName</code>\u76F4\u63A5\u83B7\u53D6\u63A7\u4EF6\u7684\u503C</p><pre style="display:none;"></pre>',3),vn={class:"vuedoc-demo"},_n={class:"vuedoc-demo__inner"},bn={class:"vuedoc-demo__preview"},yn={ref:"vdpv_10Ref",class:"vuedoc-demo__sourceref"},kn=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;password2&#39;</span>,
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


</span></code></pre></div>`,1),wn=[kn],qn=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868","data-source-line":"891"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868"},"#"),i(" \u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868")],-1),Dn=s("pre",{style:{display:"none"}},null,-1),Vn={class:"vuedoc-demo"},Cn={class:"vuedoc-demo__inner"},Nn={class:"vuedoc-demo__preview"},Un={ref:"vdpv_11Ref",class:"vuedoc-demo__sourceref"},Ln=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">add</span>: <span class="hljs-string">&#39;\u589E\u52A0&#39;</span>, <span class="hljs-attr">delete</span>: <span class="hljs-string">&#39;\u5220\u9664&#39;</span> }
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

</span></code></pre></div>`,1),xn=[Ln],$n=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6","data-source-line":"971"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},"#"),i(" \u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6")],-1),Rn=s("p",{"data-source-line":"973"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u9700\u5168\u5C40\u6CE8\u518C",-1),Hn=s("pre",{style:{display:"none"}},null,-1),Fn={class:"vuedoc-demo"},zn={class:"vuedoc-demo__inner"},An={class:"vuedoc-demo__preview"},Bn={ref:"vdpv_12Ref",class:"vuedoc-demo__sourceref"},Wn=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Tn=[Wn],In=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20","data-source-line":"1025"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20"},"#"),i(" \u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20")],-1),Kn=s("pre",{style:{display:"none"}},null,-1),On={class:"vuedoc-demo"},En={class:"vuedoc-demo__inner"},Sn={class:"vuedoc-demo__preview"},Pn={ref:"vdpv_13Ref",class:"vuedoc-demo__sourceref"},Jn=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Mn=[Jn],Gn=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40","data-source-line":"1101"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40"},"#"),i(" \u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40")],-1),Qn=s("pre",{style:{display:"none"}},null,-1),Xn={class:"vuedoc-demo"},Yn={class:"vuedoc-demo__inner"},Zn={class:"vuedoc-demo__preview"},sl={ref:"vdpv_14Ref",class:"vuedoc-demo__sourceref"},al=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),nl=[al],ll=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875","data-source-line":"1189"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875"},"#"),i(" \u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875")],-1),tl=s("pre",{style:{display:"none"}},null,-1),pl={class:"vuedoc-demo"},el={class:"vuedoc-demo__inner"},cl={class:"vuedoc-demo__preview"},rl={ref:"vdpv_15Ref",class:"vuedoc-demo__sourceref"},ol=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),hl=[ol],il=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40","data-source-line":"1266"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40"},"#"),i(" \u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40")],-1),jl=s("pre",{style:{display:"none"}},null,-1),ml={class:"vuedoc-demo"},ul={class:"vuedoc-demo__inner"},dl={class:"vuedoc-demo__preview"},gl={ref:"vdpv_16Ref",class:"vuedoc-demo__sourceref"},fl=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),vl=[fl],_l=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u5F39\u6027\u5E03\u5C40","data-source-line":"1339"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u5F39\u6027\u5E03\u5C40"},"#"),i(" \u5E03\u5C40\u5B57\u6BB5\uFF0D\u5F39\u6027\u5E03\u5C40")],-1),bl=s("pre",{style:{display:"none"}},null,-1),yl={class:"vuedoc-demo"},kl={class:"vuedoc-demo__inner"},wl={class:"vuedoc-demo__preview"},ql={ref:"vdpv_17Ref",class:"vuedoc-demo__sourceref"},Dl=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span>
      <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>
      <span class="hljs-attr">:requestUrl</span>=<span class="hljs-string">&quot;requestUrl&quot;</span>
      <span class="hljs-attr">:submitUrl</span>=<span class="hljs-string">&quot;submitUrl&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> formData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;flex&#39;</span>,
        <span class="hljs-attr">list</span>: [
          {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
            <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
            <span class="hljs-attr">config</span>: {},
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;userName&#39;</span>,
            <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7528\u6237\u540D&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> },
            <span class="hljs-attr">customRules</span>: [
              { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;blur&#39;</span> }
            ]
          },
          {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
            <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
            <span class="hljs-attr">config</span>: {},
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;tel&#39;</span>,
            <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7535\u8BDD\u53F7\u7801&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> },
            <span class="hljs-attr">customRules</span>: [
              { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;required&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801&#39;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;blur&#39;</span> },
              { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;mobile&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801&#39;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#39;blur&#39;</span> }
            ]
          },
          {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;radio&#39;</span>,
            <span class="hljs-attr">control</span>: { <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span> },
            <span class="hljs-attr">options</span>: [
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7537&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span> },
              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5973&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span> }
            ],
            <span class="hljs-attr">config</span>: { <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;fixed&#39;</span>, <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>, <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;&#39;</span> },
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;radio1663146936352&#39;</span>,
            <span class="hljs-attr">item</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5355\u9009\u6846\u7EC4&#39;</span>, <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span> }
          }
        ],
        <span class="hljs-attr">tableData</span>: [],
        <span class="hljs-attr">control</span>: {},
        <span class="hljs-attr">config</span>: { <span class="hljs-attr">add</span>: <span class="hljs-string">&#39;\u589E\u52A0&#39;</span>, <span class="hljs-attr">delete</span>: <span class="hljs-string">&#39;\u5220\u9664&#39;</span> },
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;flex1663146822121&#39;</span>
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;default&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1663146820436&#39;</span>
    },
    <span class="hljs-attr">config</span>: { <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;form1663146820436&#39;</span>, <span class="hljs-attr">formId</span>: <span class="hljs-string">&#39;&#39;</span> }
  })

  <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
  <span class="hljs-comment">/*provide(&#39;AKControlChange&#39;, ({key, value}) =&gt; {
    console.log(key)
    console.log(value)
  })*/</span>
  <span class="hljs-keyword">const</span> submitUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4url</span>
  <span class="hljs-keyword">const</span> requestUrl = ref(<span class="hljs-literal">false</span>) <span class="hljs-comment">// \u83B7\u53D6\u8868\u5355\u521D\u59CB\u6570\u636E</span>
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

</span></code></pre></div>`,1),Vl=[Dl],Cl=s("h2",{id:"\u5BCC\u6587\u672C","data-source-line":"1432"},[s("a",{class:"markdownIt-Anchor",href:"#\u5BCC\u6587\u672C"},"#"),i(" \u5BCC\u6587\u672C")],-1),Nl=s("pre",{style:{display:"none"}},null,-1),Ul={class:"vuedoc-demo"},Ll={class:"vuedoc-demo__inner"},xl={class:"vuedoc-demo__preview"},$l={ref:"vdpv_18Ref",class:"vuedoc-demo__sourceref"},Rl=u(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),Hl=[Rl];function Fl(n,a,j,r,h,p){const t=c("vdpv_0"),o=c("vdpv_1"),m=c("vdpv_2"),y=c("vdpv_3"),D=c("vdpv_4"),V=c("mrow"),C=c("annotation"),N=c("semantics"),U=c("math"),L=c("vdpv_5"),x=c("vdpv_6"),$=c("vdpv_7"),R=c("vdpv_8"),H=c("vdpv_9"),F=c("vdpv_10"),k=c("vdpv_11"),z=c("vdpv_12"),w=c("vdpv_13"),q=c("vdpv_14"),W=c("vdpv_15"),T=c("vdpv_16"),I=c("vdpv_17"),K=c("vdpv_18");return g(),_("div",$s,[Rs,s("div",Hs,[s("div",Fs,[s("div",zs,[e(t)]),s("div",{style:f({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",As,Ws,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=b=>n.toggleCode(0))},v(n.vdpv_0Height>0?"hidden":"show"),1)])]),Ts,s("div",Is,[s("div",Ks,[s("div",Os,[e(o)]),s("div",{style:f({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",Es,Ps,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=b=>n.toggleCode(1))},v(n.vdpv_1Height>0?"hidden":"show"),1)])]),Js,Ms,Gs,s("div",Qs,[s("div",Xs,[s("div",Ys,[e(m)]),s("div",{style:f({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Zs,aa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=b=>n.toggleCode(2))},v(n.vdpv_2Height>0?"hidden":"show"),1)])]),na,la,ta,s("div",pa,[s("div",ea,[s("div",ca,[e(y)]),s("div",{style:f({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",ra,ha,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=b=>n.toggleCode(3))},v(n.vdpv_3Height>0?"hidden":"show"),1)])]),ia,s("div",ja,[s("div",ma,[s("div",ua,[e(D)]),s("div",{style:f({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",da,fa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=b=>n.toggleCode(4))},v(n.vdpv_4Height>0?"hidden":"show"),1)])]),va,s("p",_a,[s("span",ba,[s("span",ya,[e(U,null,{default:d(()=>[e(N,null,{default:d(()=>[e(V),e(C,{encoding:"application/x-tex"})]),_:1})]),_:1})]),ka]),wa,qa,Da,Va,Ca,Na,Ua]),La,s("div",xa,[s("div",$a,[s("div",Ra,[e(L)]),s("div",{style:f({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ha,za,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=b=>n.toggleCode(5))},v(n.vdpv_5Height>0?"hidden":"show"),1)])]),Aa,Ba,s("div",Wa,[s("div",Ta,[s("div",Ia,[e(x)]),s("div",{style:f({height:n.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ka,Ea,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[6]||(a[6]=b=>n.toggleCode(6))},v(n.vdpv_6Height>0?"hidden":"show"),1)])]),Sa,Pa,Ja,s("div",Ma,[s("div",Ga,[s("div",Qa,[e($)]),s("div",{style:f({height:n.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",Xa,Za,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[7]||(a[7]=b=>n.toggleCode(7))},v(n.vdpv_7Height>0?"hidden":"show"),1)])]),sn,s("div",an,[s("div",nn,[s("div",ln,[e(R)]),s("div",{style:f({height:n.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",tn,en,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[8]||(a[8]=b=>n.toggleCode(8))},v(n.vdpv_8Height>0?"hidden":"show"),1)])]),cn,rn,on,s("div",hn,[s("div",jn,[s("div",mn,[e(H)]),s("div",{style:f({height:n.vdpv_9Height+"px"}),class:"vuedoc-demo__source"},[s("div",un,gn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[9]||(a[9]=b=>n.toggleCode(9))},v(n.vdpv_9Height>0?"hidden":"show"),1)])]),fn,s("div",vn,[s("div",_n,[s("div",bn,[e(F)]),s("div",{style:f({height:n.vdpv_10Height+"px"}),class:"vuedoc-demo__source"},[s("div",yn,wn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[10]||(a[10]=b=>n.toggleCode(10))},v(n.vdpv_10Height>0?"hidden":"show"),1)])]),qn,Dn,s("div",Vn,[s("div",Cn,[s("div",Nn,[e(k)]),s("div",{style:f({height:n.vdpv_11Height+"px"}),class:"vuedoc-demo__source"},[s("div",Un,xn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[11]||(a[11]=b=>n.toggleCode(11))},v(n.vdpv_11Height>0?"hidden":"show"),1)])]),$n,Rn,Hn,s("div",Fn,[s("div",zn,[s("div",An,[e(z)]),s("div",{style:f({height:n.vdpv_12Height+"px"}),class:"vuedoc-demo__source"},[s("div",Bn,Tn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[12]||(a[12]=b=>n.toggleCode(12))},v(n.vdpv_12Height>0?"hidden":"show"),1)])]),In,Kn,s("div",On,[s("div",En,[s("div",Sn,[e(w)]),s("div",{style:f({height:n.vdpv_13Height+"px"}),class:"vuedoc-demo__source"},[s("div",Pn,Mn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[13]||(a[13]=b=>n.toggleCode(13))},v(n.vdpv_13Height>0?"hidden":"show"),1)])]),Gn,Qn,s("div",Xn,[s("div",Yn,[s("div",Zn,[e(q)]),s("div",{style:f({height:n.vdpv_14Height+"px"}),class:"vuedoc-demo__source"},[s("div",sl,nl,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[14]||(a[14]=b=>n.toggleCode(14))},v(n.vdpv_14Height>0?"hidden":"show"),1)])]),ll,tl,s("div",pl,[s("div",el,[s("div",cl,[e(W)]),s("div",{style:f({height:n.vdpv_15Height+"px"}),class:"vuedoc-demo__source"},[s("div",rl,hl,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[15]||(a[15]=b=>n.toggleCode(15))},v(n.vdpv_15Height>0?"hidden":"show"),1)])]),il,jl,s("div",ml,[s("div",ul,[s("div",dl,[e(T)]),s("div",{style:f({height:n.vdpv_16Height+"px"}),class:"vuedoc-demo__source"},[s("div",gl,vl,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[16]||(a[16]=b=>n.toggleCode(16))},v(n.vdpv_16Height>0?"hidden":"show"),1)])]),_l,bl,s("div",yl,[s("div",kl,[s("div",wl,[e(I)]),s("div",{style:f({height:n.vdpv_17Height+"px"}),class:"vuedoc-demo__source"},[s("div",ql,Vl,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[17]||(a[17]=b=>n.toggleCode(17))},v(n.vdpv_17Height>0?"hidden":"show"),1)])]),Cl,Nl,s("div",Ul,[s("div",Ll,[s("div",xl,[e(K)]),s("div",{style:f({height:n.vdpv_18Height+"px"}),class:"vuedoc-demo__source"},[s("div",$l,Hl,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[18]||(a[18]=b=>n.toggleCode(18))},v(n.vdpv_18Height>0?"hidden":"show"),1)])])])}const Al=E(xs,[["render",Fl]]);export{Al as default};
