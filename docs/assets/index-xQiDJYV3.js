import{d as M,l as _,G as H,o as b,b as G,w as m,g as r,i as o,ab as P,c as V,U as F,f as x,t as N,n as $,V as Q,C as J,Q as z,u as j,A as X,L as Y,p as Z,a9 as ee,r as g,B as te,s as ae,F as oe,m as se,W as C,q as le,aa as ie,D as ne,$ as y,x as A,E as O}from"./index-PaNBskVU.js";import{_ as re,a as ce,b as U}from"./aceTooptip-sMKOdplL.js";const de=["onClick"],ue={key:0,class:"drag-control"},me={class:"item-control"},pe=["onClick"],ge=["onClick"],fe=r("div",{class:"drag-move icon-move"},null,-1),_e={class:"tooltip"},ve=M({__name:"echarts",props:{data:{},type:{default:2}},emits:["controlBtnClick"],setup(S,{expose:w,emit:D}){const f=S,d=D,v=_(),c=_({list:[],config:{}});H(()=>f.data,s=>{s&&(c.value=s)},{immediate:!0});const T=s=>{if(f.type!==1)return;const p=s.newIndex,l=new Date().getTime().toString(),e=c.value.list[p];e&&(delete e.label,delete e.icon,Object.assign(e,{name:e.type+l}),a(e))},a=s=>{console.log("groupClick",s),v.value=s.name,d("controlBtnClick",s)},k=(s,p,l)=>{if(f.type!==2){if(s==="clone"){const e=l.type+new Date().getTime().toString(),t=JSON.parse(JSON.stringify(l));c.value.list.splice(p,0,Object.assign(t,{name:e}))}else s==="del"&&c.value.list.splice(p,1);d("controlBtnClick","")}};return w({getData:()=>c.value,setDataList:s=>{c.value=s},setData:s=>{console.log(s)}}),(s,p)=>(b(),G(J(z),Q({itemKey:"id",list:c.value.list,name:"fade",class:"drag"},{group:"form",ghostClass:"ghost",animation:200,handle:".drag-move"},{onAdd:T}),{item:m(({element:l,index:e})=>[r("div",{class:$(["group",{["group-"+l.type]:!0,[l.class]:l.class,active:v.value===l.name}]),onClick:F(t=>a(l),["stop"])},[o(P,{option:l.option,width:l.width,height:l.height},null,8,["option","width","height"]),s.type===1?(b(),V("div",ue,[r("div",me,[r("i",{class:"icon-clone",onClick:F(t=>k("clone",e,l),["stop"]),title:"克隆"},null,8,pe),r("i",{class:"icon-del",onClick:F(t=>k("del",e,l),["stop"])},null,8,ge)]),fe])):x("",!0),r("div",_e,N(l.name),1)],10,de)]),_:1},16,["list"]))}}),he={class:"design-container design-chart"},ye={class:"components-list"},be=r("div",{class:"title"},"图表类型",-1),ke=["title"],Ce={class:"main-body"},Ve={class:"main-form design-form"},we={class:"sidebar-tools"},De=["innerHTML"],Te={key:0,id:"editJson"},Fe={class:"dialog-footer"},xe=M({__name:"index",setup(S){const w=j(),D=X(),f=_(),d=_({}),v=_([{icon:"line",label:"折线图",type:"line",option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},{icon:"bar",label:"柱状图",type:"bar",option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}},{icon:"pie",label:"饼图",type:"pie",option:{series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}}]),c=_(),T=e=>JSON.parse(JSON.stringify(e)),a=Y({editor:{},loading:!1,id:D.query.id,direction:"rtl",dialogTitle:"",visible:!1,dialogType:"",name:""}),k=e=>{d.value=e},B=e=>{const t=c.value.getData();switch(e){case"del":c.value.setDataList([]),d.value="";break;case"json":E(t,{type:"export"});break;case"vue":f.value.openEcharts(t);break;case"save":s(t);break}},E=(e,t={})=>{var u,h;a.direction=t.direction||"rtl",a.visible=!0,a.dialogTitle=t.title,a.dialogType=t.type,e||(e=c.value.getData());let n=C(e,!0);switch(t.type){case"beforeFetch":(u=e.config)!=null&&u.beforeFetch?n=C(e.config.beforeFetch,!0):n=U("beforeFetch");break;case"afterFetch":(h=e.config)!=null&&h.afterFetch?n=C(e.config.afterFetch,!0):n=U("afterFetch");break}le(()=>{a.editor=ie(n)})},L=()=>{try{const e=ne(a.editor.getValue());switch(a.dialogType){case"export":c.value.setDataList(e);break;case"beforeFetch":case"afterFetch":const t=c.value.getData();t.config[a.dialogType]=e;break}a.visible=!1}catch(e){y.error(e.message)}},s=e=>{if(!a.name){y.error("请输入图表保存的名称");return}a.loading=!0;const t={data:C(e),id:a.id,name:a.name};A("saveEcharts",t).then(n=>{var u;console.log(n),y({message:((u=n.data)==null?void 0:u.message)||"保存成功！",type:"success"}),w.push({path:"/echarts/list"}),a.loading=!1}).catch(n=>{var u;y.error(((u=n.data)==null?void 0:u.message)||"保存异常"),a.loading=!1})},p=e=>{e()},l=()=>{a.id&&(a.loading=!0,A("echartsList",{id:a.id}).then(e=>{a.loading=!1;const t=e.data;a.name=t.name,c.value.setDataList(t.list)}).catch(e=>{var t;y.error(((t=e.data)==null?void 0:t.message)||"操作异常"),a.loading=!1}))};return Z(()=>{l()}),ee(()=>{Object.keys(a.editor).length!==0&&(a.editor.destroy(),a.editor.container.remove())}),(e,t)=>{const n=g("el-input"),u=g("el-form-item"),h=g("el-tab-pane"),q=g("el-tabs"),I=g("el-form"),K=g("el-button"),R=g("el-drawer"),W=te("loading");return ae((b(),V("div",he,[r("div",ye,[be,o(J(z),{itemKey:"key",tag:"ul",modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=i=>v.value=i),group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:T},{item:m(({element:i})=>[r("li",{class:$([i.type])},[r("i",{class:$(`icon-${i.icon}`)},null,2),r("span",{title:i.label},N(i.label),9,ke)],2)]),_:1},8,["modelValue"])]),r("div",Ce,[o(re,{onClick:B,type:"2"}),r("div",Ve,[o(ve,{type:1,onControlBtnClick:k,ref_key:"echartsEl",ref:c},null,512)])]),r("div",we,[o(I,{size:"small"},{default:m(()=>[o(q,{modelValue:"first"},{default:m(()=>[o(h,{label:"图表属性",name:"first"},{default:m(()=>[Object.keys(d.value).length?(b(),V(oe,{key:0},[o(u,{label:"自定义Class"},{default:m(()=>[o(n,{placeholder:"自定义Class",modelValue:d.value.class,"onUpdate:modelValue":t[1]||(t[1]=i=>d.value.class=i)},null,8,["modelValue"])]),_:1}),o(u,{label:"字段标识"},{default:m(()=>[o(n,{placeholder:"字段标识",modelValue:d.value.name,"onUpdate:modelValue":t[2]||(t[2]=i=>d.value.name=i)},null,8,["modelValue"])]),_:1}),o(u,{label:"图表宽度"},{default:m(()=>[o(n,{placeholder:"图表宽度，数字类型",modelValue:d.value.width,"onUpdate:modelValue":t[3]||(t[3]=i=>d.value.width=i),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),o(u,{label:"图表高度"},{default:m(()=>[o(n,{placeholder:"图表高度，数字类型",modelValue:d.value.height,"onUpdate:modelValue":t[4]||(t[4]=i=>d.value.height=i),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1})],64)):x("",!0)]),_:1}),o(h,{label:"图表配置",name:"two"},{default:m(()=>[o(u,{label:"保存名称"},{default:m(()=>[o(n,{placeholder:"保存名称",modelValue:a.name,"onUpdate:modelValue":t[5]||(t[5]=i=>a.name=i)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),o(R,{modelValue:a.visible,"onUpdate:modelValue":t[6]||(t[6]=i=>a.visible=i),size:"60%",direction:a.direction,class:"ace-dialog","append-to-body":!0,"before-close":p},{header:m(()=>[r("div",{innerHTML:a.dialogTitle},null,8,De)]),default:m(()=>[a.visible?(b(),V("div",Te)):x("",!0),r("div",Fe,[o(K,{type:"primary",size:"small",onClick:L},{default:m(()=>[se(" 确定 ")]),_:1})])]),_:1},8,["modelValue","direction"]),o(ce,{ref_key:"vueFileEl",ref:f},null,512)])),[[W,a.loading]])}}});typeof O=="function"&&O(xe);export{xe as default};
