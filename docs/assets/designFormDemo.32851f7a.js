var O=Object.defineProperty,E=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var I=(a,n,t)=>n in a?O(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,g=(a,n)=>{for(var t in n||(n={}))J.call(n,t)&&I(a,t,n[t]);if(B)for(var t of B(n))K.call(n,t)&&I(a,t,n[t]);return a},m=(a,n)=>E(a,S(n));import{_ as d}from"./index.472ba73a.js";import{n as v,i as h,p as f,r as e,o as _,x as b,a as p,w as q,s as r,O as W,F as P,a0 as M,h as s,N as y,v as k,a1 as j}from"./vendor.f9fdd043.js";const U={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"input1636622418303",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]},{name:"textarea1636622419559",type:"textarea",control:{modelValue:""},config:{},item:{label:"\u591A\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]},{name:"radio1636622421624",type:"radio",control:{modelValue:""},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1},rules:[]},{name:"checkbox1636622423482",type:"checkbox",control:{modelValue:[]},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u591A\u9009\u6846\u7EC4",showLabel:!1},rules:[]},{name:"select1636622425534",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1},rules:[]},{name:"datePicker1636622429204",type:"datePicker",control:{modelValue:"",type:"date"},config:{},item:{label:"\u65E5\u671F\u9009\u62E9\u5668",showLabel:!1},rules:[]},{name:"switch1636622430966",type:"switch",control:{modelValue:!1},config:{},item:{label:"\u5F00\u5173",showLabel:!1},rules:[]},{name:"number1636622432914",type:"number",control:{},config:{},item:{label:"\u8BA1\u6570\u5668",showLabel:!1},rules:[]}],config:{labelWidth:"100px",class:"",size:"",name:"form1636607042495",rulesComm:[]}}}),t=h(),l=()=>{t.value.validate(o=>{if(console.log(o),o)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:l,formName:t})}},G=r("\u63D0\u4EA4");function Q(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[G]),_:1},8,["onClick"])])}var X=d(U,[["render",Q]]);const Y={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"userName",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u7528\u6237\u540D",showLabel:!1},rules:[{min:3,max:5,message:"\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26",trigger:"blur"}],customRules:[{type:"int",message:"\u5FC5\u987B\u4E3A\u6570\u5B57",trigger:"blur"}],rulesComm:["required"]},{name:"select1636695777940",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1},rules:[{required:!0,message:"\u5FC5\u586B\u9879",trigger:"change"}]},{name:"input1636697703184",type:"input",control:{modelValue:"",placeholder:"\u81EA\u5B9A\u4E49\u65B9\u6CD5\u6821\u9A8C"},slot:{},config:{},item:{label:"\u81EA\u5B9A",showLabel:!1},rules:[],customRules:[{type:"methods",message:"",trigger:"blur",methods:"customRules"}],rulesComm:[]}],config:{labelWidth:"100px",class:"",size:"",name:"form1636607042495",rulesComm:[{key:"required",required:!0,message:"\u5FC5\u586B\u9879",trigger:"blur"}]}}});W("customRules",(o,i,u)=>{if(i!=="\u6211\u7231\u4F60")return u(new Error("\u8BF7\u8F93\u5165 \u6211\u7231\u4F60 \u54C8\u54C8\u54C8!"));u()});const t=h(),l=()=>{t.value.validate(o=>{if(console.log(o),o)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:l,formName:t})}},Z=r("\u63D0\u4EA4");function ss(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[Z]),_:1},8,["onClick"])])}var as=d(Y,[["render",ss]]);const ns={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"select1636698720764",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"async",source:1,request:"get",sourceFun:"getCheckboxFun"},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1},rules:[]}],config:{labelWidth:"",class:"",size:"",name:"form1636607042495",rulesComm:[{key:"required",required:!0,message:"\u5FC5\u586B\u9879",trigger:"blur"}]}}}),t=h([{label:"\u9009\u98791",value:"1"}]);W("getCheckboxFun",t);const l=h(),o=()=>{l.value.validate(i=>{if(console.log(i),i)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:o,formName:l})}},ts=r("\u63D0\u4EA4");function ls(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[ts]),_:1},8,["onClick"])])}var os=d(ns,[["render",ls]]);const ps={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"radio",type:"radio",control:{modelValue:""},options:[{label:"label1",value:"1"},{label:"label2",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1},rules:[]},{name:"select",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"label1",value:"1"},{label:"label2",value:"2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1},rules:[]},{name:"input1637189604237",type:"input",control:{modelValue:"",placeholder:"\u5355\u9009\u6216\u4E0B\u62C9\u4E3Alabel1\u65F6\u663E\u793A"},slot:{},config:{linkKey:"radio,select",linkValue:"1,1"},item:{label:"\u5355\u884C\u6587\u672C1",showLabel:!1},rules:[],customRules:[]},{name:"input1637198443468",type:"input",control:{modelValue:"",placeholder:"\u5355\u9009\u548C\u4E0B\u62C9\u4E3Alabel1\u65F6\u663E\u793A"},slot:{},config:{linkKey:"radio&select",linkValue:"1,1"},item:{label:"\u5355\u884C\u6587\u672C2",showLabel:!1},rules:[],customRules:[]}],config:{labelWidth:"",class:"",size:"",name:"form1637189568724",rulesComm:[]}}}),t=h(),l=()=>{t.value.validate(o=>{if(console.log(o),o)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:l,formName:t})}},es=r("\u63D0\u4EA4");function us(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[es]),_:1},8,["onClick"])])}var cs=d(ps,[["render",us]]);const rs={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"input1",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5355\u884C\u6587\u672C1",showLabel:!1},rules:[],customRules:[]},{name:"input2",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5355\u884C\u6587\u672C2",showLabel:!1},rules:[],customRules:[]}],config:{labelWidth:"",class:"",size:"",name:"form1637303910371",rulesComm:[],vIf:["input1"]}}}),t=h(),l=()=>{t.value.validate(o=>{if(console.log(o),o)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:l,formName:t})}},is=r("\u63D0\u4EA4");function hs(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[is]),_:1},8,["onClick"])])}var qs=d(rs,[["render",hs]]);const js={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"input1636702723415",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]},{name:"select1636702726285",type:"select",control:{modelValue:"",appendToBody:!0},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1},rules:[]}],config:{labelWidth:"",class:"",size:"",name:"form1636607042495",rulesComm:[]}}}),t=h(),l=()=>{alert(JSON.stringify(t.value.getValue()))},o=()=>{t.value.setValue({input1636702723415:"\u8BBE\u7F6E\u7684\u521D\u59CB\u503C",select1636702726285:"value2"})};return m(g({},f(n)),{submit:l,setValue:o,formName:t})}},gs=r("\u53D6\u503C"),ms=r("\u8BBE\u503C");function ds(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[gs]),_:1},8,["onClick"]),p(c,{type:"primary",onClick:l.setValue},{default:q(()=>[ms]),_:1},8,["onClick"])])}var vs=d(js,[["render",ds]]);const fs={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"radio1",type:"radio",control:{modelValue:""},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"async",source:1,request:"get",sourceFun:"abc"},item:{label:"\u5355\u9009\u6846\u7EC4",showLabel:!1},rules:[]},{name:"select1",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1},rules:[]},{name:"select2",type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u4E0B\u62C9\u9009\u62E9\u6846",showLabel:!1},rules:[]}],config:{labelWidth:"",class:"",size:"",name:"form1636607042495",rulesComm:[]}}}),t=h(),l=()=>{t.value.setOptions({radio1:[{label:"\u5355\u9009\u6D4B\u8BD5",value:"value3"}],select1:[{label:"\u4E0B\u62C9\u6D4B\u8BD5",value:"value3"}],select2:[{label:"\u4E0B\u62C9\u6D4B\u8BD52",value:"value3"},{label:"\u4E0B\u62C9\u6D4B\u8BD521",value:"value31"}]})};return m(g({},f(n)),{setValue:l,formName:t})}},_s=r("\u8BBEOptions\u503C");function bs(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.setValue},{default:q(()=>[_s]),_:1},8,["onClick"])])}var ys=d(fs,[["render",bs]]);const ks={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"password",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5BC6\u7801",showLabel:!1},rules:[],customRules:[{type:"required",message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]},{name:"password2",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u786E\u8BA4\u5BC6\u7801",showLabel:!1},rules:[{validator:(o,i,u)=>{const c=getform1647008531927ControlByName("password");console.log(c),i===""?u(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):i!==c.control.modelValue?u(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u6837")):u()},trigger:"change"}],customRules:[]}],config:{labelWidth:"",class:"",size:"",name:"form1647008531927",rulesComm:[]}}}),t=h(),l=()=>{t.value.validate(o=>{if(console.log(o),o)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:l,formName:t})}},ws=r("\u63D0\u4EA4");function Cs(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[ws]),_:1},8,["onClick"])])}var Ds=d(ks,[["render",Cs]]);const Vs={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"table1636703297719",type:"table",list:[{name:"",type:"tableColumn",typeColumn:"index",item:{label:"\u5E8F\u53F7"},control:{type:"index"},config:{}},{name:"user",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u7528\u6237\u540D",showLabel:!1},rules:[],customRules:[]},{name:"tel",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u624B\u673A\u53F7",showLabel:!1},rules:[],customRules:[]},{name:"",type:"tableColumn",typeColumn:"operate",item:{label:"\u64CD\u4F5C"},control:{type:""},config:{}}],tableData:[],control:{border:!0},config:{}}],config:{labelWidth:"",class:"",size:"",name:"form1636607042495",rulesComm:[]}}}),t=h(),l=()=>{t.value.validate(o=>{if(console.log(o),o)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:l,formName:t})}},$s=r("\u63D0\u4EA4");function Ns(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[$s]),_:1},8,["onClick"])])}var Rs=d(Vs,[["render",Ns]]);const Ls={name:"customTest",props:{modelValue:String},emits:["update:modelValue"],setup(a,{emit:n}){const t=v({value:"",visible:!1}),l=()=>{t.visible=!1,t.value="\u6D4B\u8BD5\u56DE\u586B\u503C",n("update:modelValue",t.value)};return m(g({},f(t)),{selectClick:l})}},Fs=r("\u9009\u62E9"),xs=r("\u786E\u5B9A");function Hs(a,n,t,l,o,i){const u=e("el-input"),c=e("el-button"),D=e("el-row"),V=e("el-dialog");return _(),b(P,null,[p(D,{style:{"flex-wrap":"nowrap"}},{default:q(()=>[p(u,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=C=>a.value=C)},null,8,["modelValue"]),p(c,{onClick:n[1]||(n[1]=C=>a.visible=!0)},{default:q(()=>[Fs]),_:1})]),_:1}),p(V,{modelValue:a.visible,"onUpdate:modelValue":n[2]||(n[2]=C=>a.visible=C),title:"\u5F39\u7A97\u793A\u4F8B"},{footer:q(()=>[p(c,{onClick:l.selectClick,type:"primary"},{default:q(()=>[xs]),_:1},8,["onClick"])]),_:1},8,["modelValue"])],64)}var zs=d(Ls,[["render",Hs]]);const Ws={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"component",type:"component",control:{modelValue:""},config:{template:"customComponent"},item:{label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",showLabel:!1},rules:[],customRules:[{type:"required",message:"\u5FC5\u586B\u9879",trigger:"blur"}]}],config:{labelWidth:"",class:"",size:"",name:"form1636607042495",rulesComm:[]}}});W("customComponent",zs);const t=h(),l=()=>{t.value.validate(o=>{if(console.log(o),o)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:l,formName:t})}},Ts=r("\u63D0\u4EA4");function Bs(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[Ts]),_:1},8,["onClick"])])}var Is=d(Ws,[["render",Bs]]);const As={name:"addForm",props:{},components:{},setup(a){const t=v({formData:{list:[{name:"upload",type:"upload",control:{modelValue:[],action:"http://localhost:3001/upload/single",listType:"picture-card",limit:2,onError:(i,u,c)=>{console.log("\u9519\u8BEF\u5F02\u5E38\u5904\u7406"),console.log(i,u,c)}},config:{tip:"\u4E00\u4E9B\u4E0A\u4F20\u63D0\u793A\u6587\u6848",btnText:""},item:{label:"\u56FE\u7247",showLabel:!1},rules:[]}],config:{labelWidth:"",class:"",size:"",name:"form1637303910371",rulesComm:[]}}}),l=h(),o=()=>{l.value.validate(i=>{if(console.log(i),i)alert(JSON.stringify(l.value.getValue()));else return console.log("error submit"),!1})};return setTimeout(()=>{l.value.setValue({upload:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]})},1e3),m(g({},f(t)),{submit:o,formName:l})}},Os=r("\u63D0\u4EA4");function Es(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[Os]),_:1},8,["onClick"])])}var Ss=d(As,[["render",Es]]);const Js={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"input1636709200587",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]},{name:"grid1636709032830",type:"grid",columns:[{attr:{span:11,offset:"",push:"",pull:""},list:[{name:"input1636709035365",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]}],name:"gridChild1636709053920",type:"gridChild"},{attr:{span:11,offset:1},list:[{name:"input1636709037596",type:"input",control:{modelValue:""},slot:{},config:{span:""},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]}],name:"gridChild1636709129937",type:"gridChild"}],control:{},config:{}}],config:{labelWidth:"",class:"",size:"",name:"form1636607042495",rulesComm:[]}}}),t=h(),l=()=>{t.value.validate(o=>{if(console.log(o),o)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:l,formName:t})}},Ks=r("\u63D0\u4EA4");function Ps(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[Ks]),_:1},8,["onClick"])])}var Ms=d(Js,[["render",Ps]]);const Us={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"tabs1636709230727",type:"tabs",columns:[{label:"\u6807\u7B7E\u540D\u79F01",list:[{name:"input1636709254980",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]}]},{label:"\u6807\u7B7E\u540D\u79F02",list:[{name:"checkbox1636709258581",type:"checkbox",control:{modelValue:[]},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"\u591A\u9009\u6846\u7EC4",showLabel:!1},rules:[]}]}],control:{},config:{}}],config:{labelWidth:"",class:"",size:"",name:"form1636607042495",rulesComm:[]}}}),t=h(),l=()=>{t.value.validate(o=>{if(console.log(o),o)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:l,formName:t})}},Gs=r("\u63D0\u4EA4");function Qs(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[Gs]),_:1},8,["onClick"])])}var Xs=d(Us,[["render",Qs]]);const Ys={name:"addForm",props:{},components:{},setup(a){const n=v({formData:{list:[{name:"card1636709292247",type:"card",list:[{name:"input1636709299212",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]},{name:"input1636709297278",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]}],control:{},config:{},item:{label:"\u5361\u7247\u5E03\u5C40",showLabel:!1},rules:[]},{name:"input1636709305117",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u5355\u884C\u6587\u672C",showLabel:!1},rules:[],customRules:[]}],config:{labelWidth:"",class:"",size:"",name:"form1636607042495",rulesComm:[]}}}),t=h(),l=()=>{t.value.validate(o=>{if(console.log(o),o)alert("submit");else return console.log("error submit"),!1})};return m(g({},f(n)),{submit:l,formName:t})}},Zs=r("\u63D0\u4EA4");function sa(a,n,t,l,o,i){const u=e("ak-form-design"),c=e("el-button");return _(),b("div",null,[p(u,{formData:a.formData,ref:"formName"},null,8,["formData"]),p(c,{type:"primary",onClick:l.submit},{default:q(()=>[Zs]),_:1},8,["onClick"])])}var aa=d(Ys,[["render",sa]]);const A=M({components:{vdpv_0:X,vdpv_1:as,vdpv_2:os,vdpv_3:cs,vdpv_4:qs,vdpv_5:vs,vdpv_6:ys,vdpv_7:Ds,vdpv_8:Rs,vdpv_9:Is,vdpv_10:Ss,vdpv_11:Ms,vdpv_12:Xs,vdpv_13:aa},setup(a){const n=h(),t=h(),l=h(),o=h(),i=h(),u=h(),c=h(),D=h(),V=h(),C=h(),L=h(),F=h(),x=h(),H=h(),z=[n,t,l,o,i,u,c,D,V,C,L,F,x,H],$=v({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0,vdpv_6Height:0,vdpv_7Height:0,vdpv_8Height:0,vdpv_9Height:0,vdpv_10Height:0,vdpv_11Height:0,vdpv_12Height:0,vdpv_13Height:0});return m(g({toggleCode:N=>{const R="vdpv_"+N;$[R+"Height"]===0?$[R+"Height"]=(z[N].value?z[N].value.offsetHeight:0)||0:$[R+"Height"]=0}},f($)),{vdpv_0Ref:n,vdpv_1Ref:t,vdpv_2Ref:l,vdpv_3Ref:o,vdpv_4Ref:i,vdpv_5Ref:u,vdpv_6Ref:c,vdpv_7Ref:D,vdpv_8Ref:V,vdpv_9Ref:C,vdpv_10Ref:L,vdpv_11Ref:F,vdpv_12Ref:x,vdpv_13Ref:H})}});A.$vd={matter:{},toc:[{content:"designForm Demo",anchor:"designform-demo",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:2},{content:"\u8868\u5355\u6821\u9A8C",anchor:"\u8868\u5355\u6821\u9A8C",level:2},{content:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E",anchor:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E",level:2},{content:"\u8054\u52A8\u4E8B\u4EF6",anchor:"\u8054\u52A8\u4E8B\u4EF6",level:2},{content:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A",anchor:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A",level:2},{content:"\u8868\u5355\u53D6\u503C/\u8BBE\u503C",anchor:"\u8868\u5355\u53D6\u503C\u8BBE\u503C",level:2},{content:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6EOptions\u9009\u9879\u503C",anchor:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C",level:2},{content:"\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C",anchor:"\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",level:2},{content:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20",anchor:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875",level:2},{content:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40",anchor:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40",level:2}]};const na=A,ta={class:"vuedoc"},la=j('<h1 id="designform-demo" data-source-line="1"><a class="markdownIt-Anchor" href="#designform-demo">#</a> designForm Demo</h1><h2 id="\u57FA\u7840\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h2><pre style="display:none;"></pre>',3),oa={class:"vuedoc-demo"},pa={class:"vuedoc-demo__inner"},ea={class:"vuedoc-demo__preview"},ua={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ca=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;input1636622418303&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;textarea1636622419559&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;textarea&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u591A\u884C\u6587\u672C&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;radio1636622421624&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;radio&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;options&quot;</span>:[{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label1&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value1&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label2&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value2&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label3&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value3&quot;</span>}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;fixed&quot;</span>,<span class="hljs-string">&quot;source&quot;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&quot;request&quot;</span>:<span class="hljs-string">&quot;get&quot;</span>,<span class="hljs-string">&quot;sourceFun&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u9009\u6846\u7EC4&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;checkbox1636622423482&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;checkbox&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:[]},<span class="hljs-string">&quot;options&quot;</span>:[{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label1&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value1&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label2&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value2&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label3&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value3&quot;</span>}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;fixed&quot;</span>,<span class="hljs-string">&quot;source&quot;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&quot;request&quot;</span>:<span class="hljs-string">&quot;get&quot;</span>,<span class="hljs-string">&quot;sourceFun&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u591A\u9009\u6846\u7EC4&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;select1636622425534&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;select&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;appendToBody&quot;</span>:<span class="hljs-literal">true</span>},<span class="hljs-string">&quot;options&quot;</span>:[{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label1&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value1&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label2&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value2&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label3&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value3&quot;</span>}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;fixed&quot;</span>,<span class="hljs-string">&quot;source&quot;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&quot;request&quot;</span>:<span class="hljs-string">&quot;get&quot;</span>,<span class="hljs-string">&quot;sourceFun&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E0B\u62C9\u9009\u62E9\u6846&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;datePicker1636622429204&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;datePicker&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;date&quot;</span>},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u65E5\u671F\u9009\u62E9\u5668&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;switch1636622430966&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;switch&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5F00\u5173&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;number1636622432914&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;number&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u8BA1\u6570\u5668&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;labelWidth&quot;</span>:<span class="hljs-string">&quot;100px&quot;</span>,<span class="hljs-string">&quot;class&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;size&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;form1636607042495&quot;</span>,<span class="hljs-string">&quot;rulesComm&quot;</span>:[]}}
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName=ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),ra=[ca],ia=j('<h2 id="\u8868\u5355\u6821\u9A8C" data-source-line="50"><a class="markdownIt-Anchor" href="#\u8868\u5355\u6821\u9A8C">#</a> \u8868\u5355\u6821\u9A8C</h2><p data-source-line="52">\u5F3A\u5927\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u53EF\u4F7F\u7528\u5FEB\u901F\u9009\u62E9\u8868\u5355\u5168\u5C40\u7684\u89C4\u5219\uFF0C\u51CF\u5C11\u540C\u6837\u7684\u89C4\u5219\u5BF9\u4E0D\u540C\u7684\u63A7\u4EF6\u91CD\u590D\u7684\u52A0\u5165\u7684rules\u6821\u9A8C\u53BB\uFF1B</p><p data-source-line="54">\u5185\u7F6E\u4E86\u5E38\u7528\u7684\u5FC5\u586B\u3001\u624B\u673A\u53F7\u7801\u3001\u56FA\u8BDD\u3001\u56FA\u8BDD\u6216\u624B\u673A\u3001\u90AE\u7BB1\u3001\u6B63\u6574\u6570\u3001\u6570\u5B57\u3001\u8EAB\u4EFD\u8BC1\u3001\u81EA\u5B9A\u4E49\u6B63\u5219\u3001\u81EA\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u4F7F\u7528\u975E\u5E38\u65B9\u4FBF</p><pre style="display:none;"></pre>',4),ha={class:"vuedoc-demo"},qa={class:"vuedoc-demo__inner"},ja={class:"vuedoc-demo__preview"},ga={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ma=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {
        <span class="hljs-string">&quot;list&quot;</span>: [{
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;userName&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>,
          <span class="hljs-string">&quot;control&quot;</span>: {<span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>},
          <span class="hljs-string">&quot;slot&quot;</span>: {},
          <span class="hljs-string">&quot;config&quot;</span>: {},
          <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
          <span class="hljs-string">&quot;rules&quot;</span>: [{<span class="hljs-string">&quot;min&quot;</span>: <span class="hljs-number">3</span>, <span class="hljs-string">&quot;max&quot;</span>: <span class="hljs-number">5</span>, <span class="hljs-string">&quot;message&quot;</span>: <span class="hljs-string">&quot;\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26&quot;</span>, <span class="hljs-string">&quot;trigger&quot;</span>: <span class="hljs-string">&quot;blur&quot;</span>}],
          <span class="hljs-string">&quot;customRules&quot;</span>: [{<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;int&quot;</span>, <span class="hljs-string">&quot;message&quot;</span>: <span class="hljs-string">&quot;\u5FC5\u987B\u4E3A\u6570\u5B57&quot;</span>, <span class="hljs-string">&quot;trigger&quot;</span>: <span class="hljs-string">&quot;blur&quot;</span>}],
          <span class="hljs-string">&quot;rulesComm&quot;</span>: [<span class="hljs-string">&quot;required&quot;</span>]
        }, {
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;select1636695777940&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;select&quot;</span>,
          <span class="hljs-string">&quot;control&quot;</span>: {<span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;appendToBody&quot;</span>: <span class="hljs-literal">true</span>},
          <span class="hljs-string">&quot;options&quot;</span>: [{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;label1&quot;</span>, <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value1&quot;</span>}, {
            <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;label2&quot;</span>,
            <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value2&quot;</span>
          }, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;label3&quot;</span>, <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value3&quot;</span>}],
          <span class="hljs-string">&quot;config&quot;</span>: {<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;fixed&quot;</span>, <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&quot;request&quot;</span>: <span class="hljs-string">&quot;get&quot;</span>, <span class="hljs-string">&quot;sourceFun&quot;</span>: <span class="hljs-string">&quot;&quot;</span>},
          <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u9009\u62E9\u6846&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
          <span class="hljs-string">&quot;rules&quot;</span>: [{<span class="hljs-string">&quot;required&quot;</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;message&quot;</span>: <span class="hljs-string">&quot;\u5FC5\u586B\u9879&quot;</span>, <span class="hljs-string">&quot;trigger&quot;</span>: <span class="hljs-string">&quot;change&quot;</span>}]
        }, {
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;input1636697703184&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>,
          <span class="hljs-string">&quot;control&quot;</span>: {<span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;placeholder&quot;</span>: <span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u65B9\u6CD5\u6821\u9A8C&quot;</span>},
          <span class="hljs-string">&quot;slot&quot;</span>: {},
          <span class="hljs-string">&quot;config&quot;</span>: {},
          <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u81EA\u5B9A&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
          <span class="hljs-string">&quot;rules&quot;</span>: [],
          <span class="hljs-string">&quot;customRules&quot;</span>: [{<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;methods&quot;</span>, <span class="hljs-string">&quot;message&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;trigger&quot;</span>: <span class="hljs-string">&quot;blur&quot;</span>, <span class="hljs-string">&quot;methods&quot;</span>: <span class="hljs-string">&quot;customRules&quot;</span>}],
          <span class="hljs-string">&quot;rulesComm&quot;</span>: []
        }],
        <span class="hljs-string">&quot;config&quot;</span>: {
          <span class="hljs-string">&quot;labelWidth&quot;</span>: <span class="hljs-string">&quot;100px&quot;</span>,
          <span class="hljs-string">&quot;class&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
          <span class="hljs-string">&quot;size&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;form1636607042495&quot;</span>,
          <span class="hljs-string">&quot;rulesComm&quot;</span>: [{<span class="hljs-string">&quot;key&quot;</span>: <span class="hljs-string">&quot;required&quot;</span>, <span class="hljs-string">&quot;required&quot;</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">&quot;message&quot;</span>: <span class="hljs-string">&quot;\u5FC5\u586B\u9879&quot;</span>, <span class="hljs-string">&quot;trigger&quot;</span>: <span class="hljs-string">&quot;blur&quot;</span>}]
        }
      }
    })
    <span class="hljs-comment">// todo \u81EA\u5B9A\u6821\u9A8C\u65B9\u6CD5</span>
    provide(<span class="hljs-string">&quot;customRules&quot;</span>, <span class="hljs-function">(<span class="hljs-params">rule, value, callback</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (value !== <span class="hljs-string">&#39;\u6211\u7231\u4F60&#39;</span>) {
        <span class="hljs-keyword">return</span> callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&#39;\u8BF7\u8F93\u5165 \u6211\u7231\u4F60 \u54C8\u54C8\u54C8!&#39;</span>))
      } <span class="hljs-keyword">else</span> {
        callback()
      }
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName = ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),da=[ma],va=s("h2",{id:"\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E","data-source-line":"151"},[s("a",{class:"markdownIt-Anchor",href:"#\u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E"},"#"),r(" \u8868\u5355\u63A7\u4EF6\u9009\u9879\u6570\u636E")],-1),fa=s("p",{"data-source-line":"153"},"\u9009\u9879\u6570\u636E\u83B7\u53D6\u65B9\u6CD5\u9002\u7528\u4E8E\u5355\u9009\u3001\u591A\u9009\u3001\u4E0B\u62C9\u3001\u8054\u7EA7\u3002",-1),_a=s("pre",{style:{display:"none"}},null,-1),ba={class:"vuedoc-demo"},ya={class:"vuedoc-demo__inner"},ka={class:"vuedoc-demo__preview"},wa={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Ca=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;select1636698720764&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;select&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;appendToBody&quot;</span>:<span class="hljs-literal">true</span>},<span class="hljs-string">&quot;options&quot;</span>:[{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label1&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value1&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label2&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value2&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label3&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value3&quot;</span>}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;async&quot;</span>,<span class="hljs-string">&quot;source&quot;</span>:<span class="hljs-number">1</span>,<span class="hljs-string">&quot;request&quot;</span>:<span class="hljs-string">&quot;get&quot;</span>,<span class="hljs-string">&quot;sourceFun&quot;</span>:<span class="hljs-string">&quot;getCheckboxFun&quot;</span>},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E0B\u62C9\u9009\u62E9\u6846&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;labelWidth&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;class&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;size&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;form1636607042495&quot;</span>,<span class="hljs-string">&quot;rulesComm&quot;</span>:[{<span class="hljs-string">&quot;key&quot;</span>:<span class="hljs-string">&quot;required&quot;</span>,<span class="hljs-string">&quot;required&quot;</span>:<span class="hljs-literal">true</span>,<span class="hljs-string">&quot;message&quot;</span>:<span class="hljs-string">&quot;\u5FC5\u586B\u9879&quot;</span>,<span class="hljs-string">&quot;trigger&quot;</span>:<span class="hljs-string">&quot;blur&quot;</span>}]}}
    })
    <span class="hljs-comment">// todo \u4E0B\u62C9\u9009\u62E9\u6846\u83B7\u53D6\u9009\u9879\u503C</span>
    <span class="hljs-keyword">const</span> select1636698720764Option = ref([{<span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u9009\u98791&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span>}])
    provide(<span class="hljs-string">&quot;getCheckboxFun&quot;</span>, select1636698720764Option)
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName=ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Da=[Ca],Va=j('<h2 id="\u8054\u52A8\u4E8B\u4EF6" data-source-line="203"><a class="markdownIt-Anchor" href="#\u8054\u52A8\u4E8B\u4EF6">#</a> \u8054\u52A8\u4E8B\u4EF6</h2><p data-source-line="205">\u6587\u672C\u8F93\u5165\u6846\u7684\u8054\u52A8\u6761\u4EF6<code>radio=1</code>\uFF0C\u5219\u5728\u63A7\u4EF6\u5355\u9009\u6846\u7EC4<code>radio</code>\u7684\u503C\u4E3A<code>1</code>\u65F6\u663E\u793A\u3002</p><p data-source-line="207">\u591A\u4E2A\u6761\u4EF6\u65F6\u4F7F\u7528<code>,</code>\u6216<code>&amp;</code>\u5206\u9694\u5F00\uFF0C\u5F53\u5206\u9694\u7B26\u4E2D\u5B58\u5728<code>&amp;</code>\u65F6\uFF0C\u6761\u4EF6\u4E3A<code>and</code>\u5173\u7CFB\uFF0C\u540C\u65F6\u7B26\u5408\u65F6\u624D\u663E\u793A\uFF1B\u5426\u5219\u6761\u4EF6\u4E3A<code>or</code>\u5173\u7CFB\uFF0C\u7B26\u5408\u5176\u4E2D\u4E4B\u4E00\u65F6\u663E\u793A\u3002</p><pre style="display:none;"></pre>',4),$a={class:"vuedoc-demo"},Na={class:"vuedoc-demo__inner"},Ra={class:"vuedoc-demo__preview"},La={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},Fa=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;radio&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;radio&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;options&quot;</span>:[{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label1&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;1&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label2&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;2&quot;</span>}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;fixed&quot;</span>,<span class="hljs-string">&quot;source&quot;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&quot;request&quot;</span>:<span class="hljs-string">&quot;get&quot;</span>,<span class="hljs-string">&quot;sourceFun&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u9009\u6846\u7EC4&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;select&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;select&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;appendToBody&quot;</span>:<span class="hljs-literal">true</span>},<span class="hljs-string">&quot;options&quot;</span>:[{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label1&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;1&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label2&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;2&quot;</span>}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;fixed&quot;</span>,<span class="hljs-string">&quot;source&quot;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&quot;request&quot;</span>:<span class="hljs-string">&quot;get&quot;</span>,<span class="hljs-string">&quot;sourceFun&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u4E0B\u62C9\u9009\u62E9\u6846&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;input1637189604237&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;placeholder&quot;</span>:<span class="hljs-string">&quot;\u5355\u9009\u6216\u4E0B\u62C9\u4E3Alabel1\u65F6\u663E\u793A&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;linkKey&quot;</span>:<span class="hljs-string">&quot;radio,select&quot;</span>,<span class="hljs-string">&quot;linkValue&quot;</span>:<span class="hljs-string">&quot;1,1&quot;</span>},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u884C\u6587\u672C1&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;input1637198443468&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;placeholder&quot;</span>:<span class="hljs-string">&quot;\u5355\u9009\u548C\u4E0B\u62C9\u4E3Alabel1\u65F6\u663E\u793A&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;linkKey&quot;</span>:<span class="hljs-string">&quot;radio&amp;select&quot;</span>,<span class="hljs-string">&quot;linkValue&quot;</span>:<span class="hljs-string">&quot;1,1&quot;</span>},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u884C\u6587\u672C2&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;labelWidth&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;class&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;size&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;form1637189568724&quot;</span>,<span class="hljs-string">&quot;rulesComm&quot;</span>:[]}}
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName=ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),xa=[Fa],Ha=s("h2",{id:"\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A","data-source-line":"254"},[s("a",{class:"markdownIt-Anchor",href:"#\u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A"},"#"),r(" \u5916\u90E8\u6761\u4EF6\u63A7\u5236\u5B57\u6BB5\u9690\u85CF\u4E0E\u663E\u793A")],-1),za=s("p",{"data-source-line":"256"},[r("\u5F53\u540C\u4E00\u4E2A\u8868\u5355\u5E94\u7528\u4E8E\u4E0D\u540C\u573A\u666F\u65F6\uFF0C\u4E0D\u540C\u573A\u666F\u4E2D\u9700\u5BF9\u4E2A\u522B\u5B57\u6BB5\u8FDB\u884C\u9690\u85CF\u5904\u7406\uFF0C\u53EF\u5C06\u5BF9\u5E94\u5B57\u6BB5\u7684\u503C\u586B\u5199\u5728\u8868\u5355\u7684"),s("code",null,"vIf"),r("\u4E2D")],-1),Wa=s("pre",{style:{display:"none"}},null,-1),Ta={class:"vuedoc-demo"},Ba={class:"vuedoc-demo__inner"},Ia={class:"vuedoc-demo__preview"},Aa={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Oa=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {
        <span class="hljs-string">&quot;list&quot;</span>: [{
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;input1&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>,
          <span class="hljs-string">&quot;control&quot;</span>: {<span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>},
          <span class="hljs-string">&quot;slot&quot;</span>: {},
          <span class="hljs-string">&quot;config&quot;</span>: {},
          <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5355\u884C\u6587\u672C1&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
          <span class="hljs-string">&quot;rules&quot;</span>: [],
          <span class="hljs-string">&quot;customRules&quot;</span>: []
        }, {
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;input2&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>,
          <span class="hljs-string">&quot;control&quot;</span>: {<span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>},
          <span class="hljs-string">&quot;slot&quot;</span>: {},
          <span class="hljs-string">&quot;config&quot;</span>: {},
          <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5355\u884C\u6587\u672C2&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
          <span class="hljs-string">&quot;rules&quot;</span>: [],
          <span class="hljs-string">&quot;customRules&quot;</span>: []
        }], <span class="hljs-string">&quot;config&quot;</span>: {<span class="hljs-string">&quot;labelWidth&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;class&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;size&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;form1637303910371&quot;</span>, <span class="hljs-string">&quot;rulesComm&quot;</span>: [],<span class="hljs-string">&quot;vIf&quot;</span>:[<span class="hljs-string">&quot;input1&quot;</span>]}
      }
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName = ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ea=[Oa],Sa=j('<h2 id="\u8868\u5355\u53D6\u503C\u8BBE\u503C" data-source-line="325"><a class="markdownIt-Anchor" href="#\u8868\u5355\u53D6\u503C\u8BBE\u503C">#</a> \u8868\u5355\u53D6\u503C/\u8BBE\u503C</h2><p data-source-line="327">\u4F7F\u7528<code>getValue()</code>\u65B9\u6CD5\u83B7\u53D6\u8868\u5355\u7684\u503C\uFF0C<code>getValue(true)</code>\u5E26\u53C2\u6570\u4E3A<code>true</code>\u65F6\u53EA\u63D0\u53D6\u975E\u7A7A\u503C</p><p data-source-line="329">\u4F7F\u7528<code>setValue(obj)</code>\u5BF9\u8868\u5355\u8BBE\u7F6E\u521D\u59CB\u503C</p><pre style="display:none;"></pre>',4),Ja={class:"vuedoc-demo"},Ka={class:"vuedoc-demo__inner"},Pa={class:"vuedoc-demo__preview"},Ma={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ua=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u53D6\u503C<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setValue&quot;</span>&gt;</span>\u8BBE\u503C<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {
        <span class="hljs-string">&quot;list&quot;</span>: [{
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;input1636702723415&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>,
          <span class="hljs-string">&quot;control&quot;</span>: {<span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>},
          <span class="hljs-string">&quot;slot&quot;</span>: {},
          <span class="hljs-string">&quot;config&quot;</span>: {},
          <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
          <span class="hljs-string">&quot;rules&quot;</span>: [],
          <span class="hljs-string">&quot;customRules&quot;</span>: []
        }, {
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;select1636702726285&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;select&quot;</span>,
          <span class="hljs-string">&quot;control&quot;</span>: {<span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;appendToBody&quot;</span>: <span class="hljs-literal">true</span>},
          <span class="hljs-string">&quot;options&quot;</span>: [{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;label1&quot;</span>, <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value1&quot;</span>}, {
            <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;label2&quot;</span>,
            <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value2&quot;</span>
          }, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;label3&quot;</span>, <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value3&quot;</span>}],
          <span class="hljs-string">&quot;config&quot;</span>: {<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;fixed&quot;</span>, <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&quot;request&quot;</span>: <span class="hljs-string">&quot;get&quot;</span>, <span class="hljs-string">&quot;sourceFun&quot;</span>: <span class="hljs-string">&quot;&quot;</span>},
          <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u9009\u62E9\u6846&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
          <span class="hljs-string">&quot;rules&quot;</span>: []
        }], <span class="hljs-string">&quot;config&quot;</span>: {<span class="hljs-string">&quot;labelWidth&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;class&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;size&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;form1636607042495&quot;</span>, <span class="hljs-string">&quot;rulesComm&quot;</span>: []}
      }
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName = ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      alert(<span class="hljs-built_in">JSON</span>.stringify(formName.value.getValue()))
    }
    <span class="hljs-keyword">const</span> setValue = <span class="hljs-function">() =&gt;</span> {
      formName.value.setValue({
        <span class="hljs-attr">input1636702723415</span>: <span class="hljs-string">&quot;\u8BBE\u7F6E\u7684\u521D\u59CB\u503C&quot;</span>,
        <span class="hljs-attr">select1636702726285</span>: <span class="hljs-string">&quot;value2&quot;</span>
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      setValue,
      formName
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Ga=[Ua],Qa=s("h2",{id:"\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C","data-source-line":"400"},[s("a",{class:"markdownIt-Anchor",href:"#\u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6Eoptions\u9009\u9879\u503C"},"#"),r(" \u5BF9\u5355\u9009\u591A\u9009\u4E0B\u62C9\u5FEB\u901F\u8BBE\u7F6EOptions\u9009\u9879\u503C")],-1),Xa=s("p",{"data-source-line":"402"},[r("\u9009\u9879\u4E3A\u52A8\u6001\u6570\u636E\u65F6\uFF0C\u9664\u4E86\u9009\u62E9\u6570\u636E\u6E90\u548C\u65B9\u6CD5\u51FD\u6570\u5916\uFF0C\u8FD8\u53EF\u4F7F\u7528"),s("code",null,"setOptions(obj)"),r("\u5BF9\u8868\u5355\u9009\u9879\u6570\u636E\u8BBE\u7F6E\u9009\u9879\u503C")],-1),Ya=s("pre",{style:{display:"none"}},null,-1),Za={class:"vuedoc-demo"},sn={class:"vuedoc-demo__inner"},an={class:"vuedoc-demo__preview"},nn={ref:"vdpv_6Ref",class:"vuedoc-demo__sourceref"},tn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setValue&quot;</span>&gt;</span>\u8BBEOptions\u503C<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {
        <span class="hljs-string">&quot;list&quot;</span>: [
          {
            <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;radio1&quot;</span>,
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;radio&quot;</span>,
            <span class="hljs-string">&quot;control&quot;</span>: {
              <span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>
            },
            <span class="hljs-string">&quot;options&quot;</span>: [
              {
                <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;label1&quot;</span>,
                <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value1&quot;</span>
              },
              {
                <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;label2&quot;</span>,
                <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value2&quot;</span>
              },
              {
                <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;label3&quot;</span>,
                <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value3&quot;</span>
              }
            ],
            <span class="hljs-string">&quot;config&quot;</span>: {
              <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;async&quot;</span>,
              <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-number">1</span>,
              <span class="hljs-string">&quot;request&quot;</span>: <span class="hljs-string">&quot;get&quot;</span>,
              <span class="hljs-string">&quot;sourceFun&quot;</span>: <span class="hljs-string">&quot;abc&quot;</span>
            },
            <span class="hljs-string">&quot;item&quot;</span>: {
              <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5355\u9009\u6846\u7EC4&quot;</span>,
              <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>
            },
            <span class="hljs-string">&quot;rules&quot;</span>: []
          }, {
            <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;select1&quot;</span>,
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;select&quot;</span>,
            <span class="hljs-string">&quot;control&quot;</span>: {<span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;appendToBody&quot;</span>: <span class="hljs-literal">true</span>},
            <span class="hljs-string">&quot;options&quot;</span>: [],
            <span class="hljs-string">&quot;config&quot;</span>: {<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;fixed&quot;</span>, <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&quot;request&quot;</span>: <span class="hljs-string">&quot;get&quot;</span>, <span class="hljs-string">&quot;sourceFun&quot;</span>: <span class="hljs-string">&quot;&quot;</span>},
            <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u9009\u62E9\u6846&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
            <span class="hljs-string">&quot;rules&quot;</span>: []
          }, {
            <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;select2&quot;</span>,
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;select&quot;</span>,
            <span class="hljs-string">&quot;control&quot;</span>: {<span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;appendToBody&quot;</span>: <span class="hljs-literal">true</span>},
            <span class="hljs-string">&quot;options&quot;</span>: [],
            <span class="hljs-string">&quot;config&quot;</span>: {<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;fixed&quot;</span>, <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&quot;request&quot;</span>: <span class="hljs-string">&quot;get&quot;</span>, <span class="hljs-string">&quot;sourceFun&quot;</span>: <span class="hljs-string">&quot;&quot;</span>},
            <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u9009\u62E9\u6846&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
            <span class="hljs-string">&quot;rules&quot;</span>: []
          }], <span class="hljs-string">&quot;config&quot;</span>: {<span class="hljs-string">&quot;labelWidth&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;class&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;size&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;form1636607042495&quot;</span>, <span class="hljs-string">&quot;rulesComm&quot;</span>: []}
      }
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName = ref()
    <span class="hljs-keyword">const</span> setValue = <span class="hljs-function">() =&gt;</span> {
      formName.value.setOptions({
        <span class="hljs-attr">radio1</span>: [{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5355\u9009\u6D4B\u8BD5&quot;</span>, <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value3&quot;</span>}],
        <span class="hljs-attr">select1</span>: [{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u6D4B\u8BD5&quot;</span>, <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value3&quot;</span>}],
        <span class="hljs-attr">select2</span>: [{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u6D4B\u8BD52&quot;</span>, <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value3&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u6D4B\u8BD521&quot;</span>, <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;value31&quot;</span>}],
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      setValue,
      formName
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ln=[tn],on=j('<h2 id="\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C" data-source-line="498"><a class="markdownIt-Anchor" href="#\u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C">#</a> \u63A7\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u53EF\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u9879\u7684\u503C</h2><p data-source-line="500">\u901A\u8FC7<code>\u751F\u6210\u811A\u672C\u9884\u89C8</code>\u6216<code>\u6DFB\u52A0\u5C5E\u6027</code>\u4EE3\u7801\u7F16\u8F91\u7A97\u53E3\u5BF9\u8868\u5355\u7EC4\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u540C\u65F6\u53EF\u4F7F\u7528\u5168\u5C40<code>get[formName]ControlByName</code>\u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u8868\u5355\u5176\u4ED6\u63A7\u4EF6\u7684\u914D\u7F6E\u9879\u6570\u636E\uFF08<code>formName</code>\u4E3A\u5F53\u524D\u8868\u5355<code>config.name</code>\u7684\u503C\uFF0C\u672C\u793A\u4F8B\u4E3A<code>form1647008531927</code>\uFF0C\u56E0\u6B64\u5728\u63A7\u4EF6\u4E2D\u6DFB\u52A0\u7684\u65B9\u6CD5\u540D\u4E3A<code>getform1647008531927ControlByName</code>\uFF09</p><pre style="display:none;"></pre>',3),pn={class:"vuedoc-demo"},en={class:"vuedoc-demo__inner"},un={class:"vuedoc-demo__preview"},cn={ref:"vdpv_7Ref",class:"vuedoc-demo__sourceref"},rn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {<span class="hljs-attr">list</span>:[{<span class="hljs-attr">name</span>:<span class="hljs-string">&quot;password&quot;</span>,<span class="hljs-attr">type</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-attr">control</span>:{<span class="hljs-attr">modelValue</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-attr">slot</span>:{},<span class="hljs-attr">config</span>:{},<span class="hljs-attr">item</span>:{<span class="hljs-attr">label</span>:<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>,<span class="hljs-attr">showLabel</span>:<span class="hljs-literal">false</span>},<span class="hljs-attr">rules</span>:[],<span class="hljs-attr">customRules</span>:[{<span class="hljs-attr">type</span>:<span class="hljs-string">&quot;required&quot;</span>,<span class="hljs-attr">message</span>:<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot;</span>,<span class="hljs-attr">trigger</span>:<span class="hljs-string">&quot;blur&quot;</span>}]},{<span class="hljs-attr">name</span>:<span class="hljs-string">&quot;password2&quot;</span>,<span class="hljs-attr">type</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-attr">control</span>:{<span class="hljs-attr">modelValue</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-attr">slot</span>:{},<span class="hljs-attr">config</span>:{},<span class="hljs-attr">item</span>:{<span class="hljs-attr">label</span>:<span class="hljs-string">&quot;\u786E\u8BA4\u5BC6\u7801&quot;</span>,<span class="hljs-attr">showLabel</span>:<span class="hljs-literal">false</span>},<span class="hljs-attr">rules</span>:[{<span class="hljs-attr">validator</span>:<span class="hljs-function">(<span class="hljs-params">rule, value, callback</span>) =&gt;</span>
            {
              <span class="hljs-comment">// \u83B7\u53D6\u5BC6\u7801\u7684\u503C</span>
              <span class="hljs-keyword">const</span> control = getform1647008531927ControlByName(<span class="hljs-string">&#39;password&#39;</span>)
              <span class="hljs-built_in">console</span>.log(control)
              <span class="hljs-keyword">if</span> (value === <span class="hljs-string">&#39;&#39;</span>)
              {
                callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;</span>))
              }
              <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (value !== control.control.modelValue)
              {
                callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&quot;\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u6837&quot;</span>))
              }
              <span class="hljs-keyword">else</span>
              {
                callback()
              }

            },<span class="hljs-attr">trigger</span>:<span class="hljs-string">&quot;change&quot;</span>}],<span class="hljs-attr">customRules</span>:[]}],<span class="hljs-attr">config</span>:{<span class="hljs-attr">labelWidth</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-attr">class</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-attr">size</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-attr">name</span>:<span class="hljs-string">&quot;form1647008531927&quot;</span>,<span class="hljs-attr">rulesComm</span>:[]}}
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName=ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),hn=[rn],qn=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868","data-source-line":"566"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868"},"#"),r(" \u9AD8\u7EA7\u5B57\u6BB5-\u5B50\u8868")],-1),jn=s("pre",{style:{display:"none"}},null,-1),gn={class:"vuedoc-demo"},mn={class:"vuedoc-demo__inner"},dn={class:"vuedoc-demo__preview"},vn={ref:"vdpv_8Ref",class:"vuedoc-demo__sourceref"},fn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;table1636703297719&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;table&quot;</span>,<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;tableColumn&quot;</span>,<span class="hljs-string">&quot;typeColumn&quot;</span>:<span class="hljs-string">&quot;index&quot;</span>,<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span>},<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;index&quot;</span>},<span class="hljs-string">&quot;config&quot;</span>:{}},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;user&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;tel&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u624B\u673A\u53F7&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;tableColumn&quot;</span>,<span class="hljs-string">&quot;typeColumn&quot;</span>:<span class="hljs-string">&quot;operate&quot;</span>,<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>},<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;config&quot;</span>:{}}],<span class="hljs-string">&quot;tableData&quot;</span>:[],<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;border&quot;</span>:<span class="hljs-literal">true</span>},<span class="hljs-string">&quot;config&quot;</span>:{}}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;labelWidth&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;class&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;size&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;form1636607042495&quot;</span>,<span class="hljs-string">&quot;rulesComm&quot;</span>:[]}}
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName=ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),_n=[fn],bn=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6","data-source-line":"613"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},"#"),r(" \u9AD8\u7EA7\u5B57\u6BB5-\u81EA\u5B9A\u4E49\u7EC4\u4EF6")],-1),yn=s("p",{"data-source-line":"615"},[r("\u6F14\u793A\u5F39\u7A97\u9009\u62E9\u540E\u5C06\u6240\u9009\u503C\u56DE\u586B\u5230\u8F93\u5165\u6846\uFF0C\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u9700\u8981"),s("code",null,"update:modelValue"),r("\u4E8B\u4EF6\uFF0C\u5426\u5219\u83B7\u53D6\u4E0D\u5230\u8868\u5355\u7684\u503C")],-1),kn=s("pre",{style:{display:"none"}},null,-1),wn={class:"vuedoc-demo"},Cn={class:"vuedoc-demo__inner"},Dn={class:"vuedoc-demo__preview"},Vn={ref:"vdpv_9Ref",class:"vuedoc-demo__sourceref"},$n=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-comment">// todo \u81EA\u5B9A\u4E49\u7EC4\u4EF6</span>
<span class="hljs-keyword">import</span> customComponent <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@/docs/components/customTest.vue&quot;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {
        <span class="hljs-string">&quot;list&quot;</span>: [{
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;component&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;component&quot;</span>,
          <span class="hljs-string">&quot;control&quot;</span>: {<span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>},
          <span class="hljs-string">&quot;config&quot;</span>: {
          <span class="hljs-string">&quot;template&quot;</span>: <span class="hljs-string">&quot;customComponent&quot;</span>,
          },
          <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u7EC4\u4EF6&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
          <span class="hljs-string">&quot;rules&quot;</span>: [],
          <span class="hljs-string">&quot;customRules&quot;</span>: [{<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;required&quot;</span>, <span class="hljs-string">&quot;message&quot;</span>: <span class="hljs-string">&quot;\u5FC5\u586B\u9879&quot;</span>, <span class="hljs-string">&quot;trigger&quot;</span>: <span class="hljs-string">&quot;blur&quot;</span>}]
        }], <span class="hljs-string">&quot;config&quot;</span>: {<span class="hljs-string">&quot;labelWidth&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;class&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;size&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;form1636607042495&quot;</span>, <span class="hljs-string">&quot;rulesComm&quot;</span>: []}
      }
    })
    <span class="hljs-comment">// todo \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u7EC4\u4EF6</span>
    provide(<span class="hljs-string">&quot;customComponent&quot;</span>, customComponent)
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName = ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),Nn=[$n],Rn=s("h2",{id:"\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20","data-source-line":"682"},[s("a",{class:"markdownIt-Anchor",href:"#\u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20"},"#"),r(" \u9AD8\u7EA7\u5B57\u6BB5-\u4E0A\u4F20")],-1),Ln=s("pre",{style:{display:"none"}},null,-1),Fn={class:"vuedoc-demo"},xn={class:"vuedoc-demo__inner"},Hn={class:"vuedoc-demo__preview"},zn={ref:"vdpv_10Ref",class:"vuedoc-demo__sourceref"},Wn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> uploadError = <span class="hljs-function">(<span class="hljs-params">err, file, fileList</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u9519\u8BEF\u5F02\u5E38\u5904\u7406&#39;</span>)
      <span class="hljs-built_in">console</span>.log(err, file, fileList)
    }
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {
        <span class="hljs-string">&quot;list&quot;</span>: [{
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;upload&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;upload&quot;</span>,
          <span class="hljs-string">&quot;control&quot;</span>: {
            <span class="hljs-string">&quot;modelValue&quot;</span>: [],
            <span class="hljs-string">&quot;action&quot;</span>: <span class="hljs-string">&quot;http://localhost:3001/upload/single&quot;</span>,
            <span class="hljs-string">&quot;listType&quot;</span>: <span class="hljs-string">&quot;picture-card&quot;</span>,
            <span class="hljs-string">&quot;limit&quot;</span>: <span class="hljs-number">2</span>,
            <span class="hljs-attr">onError</span>: uploadError
          },
          <span class="hljs-string">&quot;config&quot;</span>: {<span class="hljs-string">&quot;tip&quot;</span>: <span class="hljs-string">&quot;\u4E00\u4E9B\u4E0A\u4F20\u63D0\u793A\u6587\u6848&quot;</span>, <span class="hljs-string">&quot;btnText&quot;</span>: <span class="hljs-string">&quot;&quot;</span>},
          <span class="hljs-string">&quot;item&quot;</span>: {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u56FE\u7247&quot;</span>, <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>},
          <span class="hljs-string">&quot;rules&quot;</span>: []
        }], <span class="hljs-string">&quot;config&quot;</span>: {<span class="hljs-string">&quot;labelWidth&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;class&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;size&quot;</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;form1637303910371&quot;</span>, <span class="hljs-string">&quot;rulesComm&quot;</span>: []}
      }
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName = ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-built_in">JSON</span>.stringify(formName.value.getValue()))
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-comment">//\u3000\u6A21\u62DF\u8BBE\u7F6E\u521D\u59CB\u503C</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      formName.value.setValue({
        <span class="hljs-attr">upload</span>: [{
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;food.jpeg&#39;</span>,
          <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100&#39;</span>
        }]
      })
    }, <span class="hljs-number">1000</span>)

    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Tn=[Wn],Bn=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40","data-source-line":"760"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40"},"#"),r(" \u5E03\u5C40\u5B57\u6BB5-\u683C\u6805\u5E03\u5C40")],-1),In=s("pre",{style:{display:"none"}},null,-1),An={class:"vuedoc-demo"},On={class:"vuedoc-demo__inner"},En={class:"vuedoc-demo__preview"},Sn={ref:"vdpv_11Ref",class:"vuedoc-demo__sourceref"},Jn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;input1636709200587&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;grid1636709032830&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;grid&quot;</span>,<span class="hljs-string">&quot;columns&quot;</span>:[{<span class="hljs-string">&quot;attr&quot;</span>:{<span class="hljs-string">&quot;span&quot;</span>:<span class="hljs-number">11</span>,<span class="hljs-string">&quot;offset&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;push&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;pull&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;input1636709035365&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]}],<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;gridChild1636709053920&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;gridChild&quot;</span>},{<span class="hljs-string">&quot;attr&quot;</span>:{<span class="hljs-string">&quot;span&quot;</span>:<span class="hljs-number">11</span>,<span class="hljs-string">&quot;offset&quot;</span>:<span class="hljs-number">1</span>},<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;input1636709037596&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;span&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]}],<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;gridChild1636709129937&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;gridChild&quot;</span>}],<span class="hljs-string">&quot;control&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{}}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;labelWidth&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;class&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;size&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;form1636607042495&quot;</span>,<span class="hljs-string">&quot;rulesComm&quot;</span>:[]}}
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName=ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Kn=[Jn],Pn=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875","data-source-line":"807"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875"},"#"),r(" \u5E03\u5C40\u5B57\u6BB5-\u6807\u7B7E\u9875")],-1),Mn=s("pre",{style:{display:"none"}},null,-1),Un={class:"vuedoc-demo"},Gn={class:"vuedoc-demo__inner"},Qn={class:"vuedoc-demo__preview"},Xn={ref:"vdpv_12Ref",class:"vuedoc-demo__sourceref"},Yn=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;tabs1636709230727&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;tabs&quot;</span>,<span class="hljs-string">&quot;columns&quot;</span>:[{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u6807\u7B7E\u540D\u79F01&quot;</span>,<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;input1636709254980&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]}]},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u6807\u7B7E\u540D\u79F02&quot;</span>,<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;checkbox1636709258581&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;checkbox&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:[]},<span class="hljs-string">&quot;options&quot;</span>:[{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label1&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value1&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label2&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value2&quot;</span>},{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;label3&quot;</span>,<span class="hljs-string">&quot;value&quot;</span>:<span class="hljs-string">&quot;value3&quot;</span>}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;fixed&quot;</span>,<span class="hljs-string">&quot;source&quot;</span>:<span class="hljs-number">0</span>,<span class="hljs-string">&quot;request&quot;</span>:<span class="hljs-string">&quot;get&quot;</span>,<span class="hljs-string">&quot;sourceFun&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u591A\u9009\u6846\u7EC4&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]}]}],<span class="hljs-string">&quot;control&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{}}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;labelWidth&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;class&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;size&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;form1636607042495&quot;</span>,<span class="hljs-string">&quot;rulesComm&quot;</span>:[]}}
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName=ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),Zn=[Yn],st=s("h2",{id:"\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40","data-source-line":"854"},[s("a",{class:"markdownIt-Anchor",href:"#\u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40"},"#"),r(" \u5E03\u5C40\u5B57\u6BB5-\u5361\u7247\u5E03\u5C40")],-1),at=s("pre",{style:{display:"none"}},null,-1),nt={class:"vuedoc-demo"},tt={class:"vuedoc-demo__inner"},lt={class:"vuedoc-demo__preview"},ot={ref:"vdpv_13Ref",class:"vuedoc-demo__sourceref"},pt=j(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-form-design</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formName&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-form-design</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive, toRefs, provide, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;addForm&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props</span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">formData</span>: {<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;card1636709292247&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;card&quot;</span>,<span class="hljs-string">&quot;list&quot;</span>:[{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;input1636709299212&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;input1636709297278&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]}],<span class="hljs-string">&quot;control&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5361\u7247\u5E03\u5C40&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[]},{<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;input1636709305117&quot;</span>,<span class="hljs-string">&quot;type&quot;</span>:<span class="hljs-string">&quot;input&quot;</span>,<span class="hljs-string">&quot;control&quot;</span>:{<span class="hljs-string">&quot;modelValue&quot;</span>:<span class="hljs-string">&quot;&quot;</span>},<span class="hljs-string">&quot;slot&quot;</span>:{},<span class="hljs-string">&quot;config&quot;</span>:{},<span class="hljs-string">&quot;item&quot;</span>:{<span class="hljs-string">&quot;label&quot;</span>:<span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,<span class="hljs-string">&quot;showLabel&quot;</span>:<span class="hljs-literal">false</span>},<span class="hljs-string">&quot;rules&quot;</span>:[],<span class="hljs-string">&quot;customRules&quot;</span>:[]}],<span class="hljs-string">&quot;config&quot;</span>:{<span class="hljs-string">&quot;labelWidth&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;class&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;size&quot;</span>:<span class="hljs-string">&quot;&quot;</span>,<span class="hljs-string">&quot;name&quot;</span>:<span class="hljs-string">&quot;form1636607042495&quot;</span>,<span class="hljs-string">&quot;rulesComm&quot;</span>:[]}}
    })
    <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6</span>
    <span class="hljs-comment">/*provide(&#39;DFControlChange&#39;, ({key, value}) =&gt; {
      console.log(key)
      console.log(value)
    })*/</span>
    <span class="hljs-keyword">const</span> formName=ref()
    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      formName.value.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(valid)
        <span class="hljs-keyword">if</span> (valid) {
          alert(<span class="hljs-string">&#39;submit&#39;</span>)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit&#39;</span>)
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),et=[pt];function ut(a,n,t,l,o,i){const u=e("vdpv_0"),c=e("vdpv_1"),D=e("vdpv_2"),V=e("vdpv_3"),C=e("vdpv_4"),L=e("vdpv_5"),F=e("vdpv_6"),x=e("vdpv_7"),H=e("vdpv_8"),z=e("vdpv_9"),$=e("vdpv_10"),T=e("vdpv_11"),N=e("vdpv_12"),R=e("vdpv_13");return _(),b("div",ta,[la,s("div",oa,[s("div",pa,[s("div",ea,[p(u)]),s("div",{style:y({height:a.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",ua,ra,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[0]||(n[0]=w=>a.toggleCode(0))},k(a.vdpv_0Height>0?"hidden":"show"),1)])]),ia,s("div",ha,[s("div",qa,[s("div",ja,[p(c)]),s("div",{style:y({height:a.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",ga,da,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[1]||(n[1]=w=>a.toggleCode(1))},k(a.vdpv_1Height>0?"hidden":"show"),1)])]),va,fa,_a,s("div",ba,[s("div",ya,[s("div",ka,[p(D)]),s("div",{style:y({height:a.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",wa,Da,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[2]||(n[2]=w=>a.toggleCode(2))},k(a.vdpv_2Height>0?"hidden":"show"),1)])]),Va,s("div",$a,[s("div",Na,[s("div",Ra,[p(V)]),s("div",{style:y({height:a.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",La,xa,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[3]||(n[3]=w=>a.toggleCode(3))},k(a.vdpv_3Height>0?"hidden":"show"),1)])]),Ha,za,Wa,s("div",Ta,[s("div",Ba,[s("div",Ia,[p(C)]),s("div",{style:y({height:a.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Aa,Ea,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[4]||(n[4]=w=>a.toggleCode(4))},k(a.vdpv_4Height>0?"hidden":"show"),1)])]),Sa,s("div",Ja,[s("div",Ka,[s("div",Pa,[p(L)]),s("div",{style:y({height:a.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Ma,Ga,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[5]||(n[5]=w=>a.toggleCode(5))},k(a.vdpv_5Height>0?"hidden":"show"),1)])]),Qa,Xa,Ya,s("div",Za,[s("div",sn,[s("div",an,[p(F)]),s("div",{style:y({height:a.vdpv_6Height+"px"}),class:"vuedoc-demo__source"},[s("div",nn,ln,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[6]||(n[6]=w=>a.toggleCode(6))},k(a.vdpv_6Height>0?"hidden":"show"),1)])]),on,s("div",pn,[s("div",en,[s("div",un,[p(x)]),s("div",{style:y({height:a.vdpv_7Height+"px"}),class:"vuedoc-demo__source"},[s("div",cn,hn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[7]||(n[7]=w=>a.toggleCode(7))},k(a.vdpv_7Height>0?"hidden":"show"),1)])]),qn,jn,s("div",gn,[s("div",mn,[s("div",dn,[p(H)]),s("div",{style:y({height:a.vdpv_8Height+"px"}),class:"vuedoc-demo__source"},[s("div",vn,_n,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[8]||(n[8]=w=>a.toggleCode(8))},k(a.vdpv_8Height>0?"hidden":"show"),1)])]),bn,yn,kn,s("div",wn,[s("div",Cn,[s("div",Dn,[p(z)]),s("div",{style:y({height:a.vdpv_9Height+"px"}),class:"vuedoc-demo__source"},[s("div",Vn,Nn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[9]||(n[9]=w=>a.toggleCode(9))},k(a.vdpv_9Height>0?"hidden":"show"),1)])]),Rn,Ln,s("div",Fn,[s("div",xn,[s("div",Hn,[p($)]),s("div",{style:y({height:a.vdpv_10Height+"px"}),class:"vuedoc-demo__source"},[s("div",zn,Tn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[10]||(n[10]=w=>a.toggleCode(10))},k(a.vdpv_10Height>0?"hidden":"show"),1)])]),Bn,In,s("div",An,[s("div",On,[s("div",En,[p(T)]),s("div",{style:y({height:a.vdpv_11Height+"px"}),class:"vuedoc-demo__source"},[s("div",Sn,Kn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[11]||(n[11]=w=>a.toggleCode(11))},k(a.vdpv_11Height>0?"hidden":"show"),1)])]),Pn,Mn,s("div",Un,[s("div",Gn,[s("div",Qn,[p(N)]),s("div",{style:y({height:a.vdpv_12Height+"px"}),class:"vuedoc-demo__source"},[s("div",Xn,Zn,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[12]||(n[12]=w=>a.toggleCode(12))},k(a.vdpv_12Height>0?"hidden":"show"),1)])]),st,at,s("div",nt,[s("div",tt,[s("div",lt,[p(R)]),s("div",{style:y({height:a.vdpv_13Height+"px"}),class:"vuedoc-demo__source"},[s("div",ot,et,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:n[13]||(n[13]=w=>a.toggleCode(13))},k(a.vdpv_13Height>0?"hidden":"show"),1)])])])}var ht=d(na,[["render",ut]]);export{ht as default};
