import{d as L,h as t,o,c as k,e as q,F as C,f as a,w as e,i as A,j as h,k as E,l as i,t as w,m as n,r as S,b as z,q as G,s as H,v as K,a as D,x as N,y as V,z as P,A as Q,K as W,B as X}from"./index-605c1b61.js";const Y=""+new URL("logo-03d6d6da.png",import.meta.url).href,Z=L({__name:"menuItem",props:{data:{default:()=>[]}},setup($){return(d,s)=>{const u=t("el-icon"),v=t("menu-item",!0),c=t("el-sub-menu"),f=t("el-menu-item");return o(!0),k(C,null,q(d.data,(l,m)=>(o(),k(C,{key:m},[l.children?(o(),a(c,{key:0,index:l.path||l.name},{title:e(()=>[l.elIcon?(o(),a(u,{key:0},{default:e(()=>[(o(),a(A(l.elIcon)))]),_:2},1024)):h("",!0),l.icon?(o(),k("i",{key:1,class:E(`icon ${l.icon}`)},null,2)):h("",!0),i("span",null,w(l.name),1)]),default:e(()=>[n(v,{data:l.children},null,8,["data"])]),_:2},1032,["index"])):(o(),a(f,{key:1,index:l.path||l.name},{default:e(()=>[l.elIcon?(o(),a(u,{key:0},{default:e(()=>[(o(),a(A(l.elIcon)))]),_:2},1024)):h("",!0),l.icon?(o(),k("i",{key:1,class:E(`icon ${l.icon}`)},null,2)):h("",!0),i("span",null,w(l.name),1)]),_:2},1032,["index"]))],64))),128)}}}),ee=L({__name:"menu",props:{collapse:{type:Boolean}},emits:["getMenuList"],setup($,{emit:d}){const s=S([]),u=()=>{const c=window.sessionStorage.getItem("formMenuList");if(c){s.value=JSON.parse(c);return}G("menuList",{status:1}).then(f=>{s.value=H(f.data,"transformDataToChild"),window.sessionStorage.setItem("formMenuList",JSON.stringify(s.value))})},v=()=>{};return z(()=>{d("getMenuList",s.value),u()}),(c,f)=>{const l=t("el-menu");return o(),a(l,{collapse:c.collapse,"active-text-color":"#ffd04b","background-color":"rgb(48 65 86)","text-color":"#fff",onSelect:v,router:""},{default:e(()=>[n(Z,{data:s.value},null,8,["data"])]),_:1},8,["collapse"])}}}),ne={class:"comm-header-tool"},te={class:"header-right"},oe={class:"header-avatar",style:{cursor:"pointer"}},le={class:"name"},ae=i("span",{class:"title"},"个人中心",-1),se=i("span",{class:"title"},"设置",-1),ce=i("span",{class:"title"},"退出登录",-1),ue=L({__name:"header",props:{collapse:{type:Boolean}},emits:["click"],setup($,{emit:d}){const s=K(),u=D(()=>s==null?void 0:s.breadcrumb),v=S({name:"admin",avatar:""}),c=l=>{d("click",l)},f=()=>{console.log("logout")};return(l,m)=>{const r=t("Fold"),_=t("Expand"),p=t("el-icon"),y=t("el-breadcrumb-item"),M=t("el-breadcrumb"),R=t("RefreshRight"),x=t("FullScreen"),F=t("el-avatar"),I=t("arrow-down"),b=t("User"),B=t("el-menu-item"),T=t("Setting"),U=t("CircleClose"),J=t("el-menu"),O=t("el-dropdown");return o(),k(C,null,[n(p,{onClick:m[0]||(m[0]=g=>c("collapse")),class:"collapse-icon"},{default:e(()=>[l.collapse?(o(),a(_,{key:1})):(o(),a(r,{key:0}))]),_:1}),n(M,{separator:"/",class:"breadcrumb"},{default:e(()=>[n(y,{to:{path:"/"}},{default:e(()=>[N("首页")]),_:1}),(o(!0),k(C,null,q(u.value,(g,j)=>(o(),k(C,{key:j},[g.path?(o(),a(y,{key:0,to:{path:g.path}},{default:e(()=>[N(w(g.label),1)]),_:2},1032,["to"])):(o(),a(y,{key:1},{default:e(()=>[N(w(g.label),1)]),_:2},1024))],64))),128))]),_:1}),i("div",ne,[n(p,{onClick:m[1]||(m[1]=g=>c("refresh")),title:"刷新页面"},{default:e(()=>[n(R)]),_:1}),n(p,{title:"全屏"},{default:e(()=>[n(x,{onClick:m[2]||(m[2]=g=>c("fullScreen"))})]),_:1})]),i("div",te,[n(O,null,{dropdown:e(()=>[n(J,{class:"avatar-menu"},{default:e(()=>[n(B,null,{default:e(()=>[n(p,null,{default:e(()=>[n(b)]),_:1}),ae]),_:1}),n(B,null,{default:e(()=>[n(p,null,{default:e(()=>[n(T)]),_:1}),se]),_:1}),n(B,{onClick:f},{default:e(()=>[n(p,null,{default:e(()=>[n(U)]),_:1}),ce]),_:1})]),_:1})]),default:e(()=>[i("div",oe,[n(F,{class:"avatar",size:"small",shape:"circle",src:v.value.avatar},null,8,["src"]),i("span",le,w(v.value.name),1),n(p,{class:"el-icon--right"},{default:e(()=>[n(I)]),_:1})])]),_:1})])],64)}}});const re=i("img",{src:Y,alt:""},null,-1),ie=L({__name:"index",setup($){const d=K(),s=S(V("collapseMenu")==="true"),u=S(!1),v=S([]),c=D({get:()=>d.reloadFlag,set:()=>{d.setReloadRouter()}}),f=r=>{if(r==="collapse"){const _=!s.value;s.value=_,V("collapseMenu",_.toString())}r==="fullScreen"&&(u.value=!u.value),r==="refresh"&&(c.value=!1,X(()=>{c.value=!0}))},l=r=>{v.value=r},m=D(()=>{const r=d==null?void 0:d.tabs;if(r){const _=[];return r.forEach(p=>{_.push(p.name)}),_}return[]});return z(()=>{}),(r,_)=>{const p=t("el-aside"),y=t("el-header"),M=t("router-view"),R=t("el-main"),x=t("el-container"),F=t("Close"),I=t("el-icon");return o(),a(x,{class:"common-layout"},{default:e(()=>[u.value?h("",!0):(o(),a(p,{key:0,width:s.value?"44px":"180px",class:"common-sidebar"},{default:e(()=>[i("div",{class:"logo",onClick:_[0]||(_[0]=b=>r.$router.push({path:"/"}))},[re,P(i("span",null,"AK低代码快速开发平台",512),[[Q,!s.value]])]),n(ee,{collapse:s.value,onGetMenuList:l},null,8,["collapse"])]),_:1},8,["width"])),n(x,{class:"overflow-scroll"},{default:e(()=>[u.value?h("",!0):(o(),a(y,{key:0,class:"common-header"},{default:e(()=>[n(ue,{onClick:f,collapse:s.value},null,8,["collapse"])]),_:1})),n(R,{class:"common-main"},{default:e(()=>[c.value?(o(),a(M,{key:0},{default:e(({Component:b})=>[(o(),a(W,{include:m.value},[(o(),a(A(b)))],1032,["include"]))]),_:1})):h("",!0)]),_:1})]),_:1}),u.value?(o(),a(I,{key:1,class:"quit-full",onClick:_[1]||(_[1]=b=>f("fullScreen")),title:"退出全屏"},{default:e(()=>[n(F)]),_:1})):h("",!0)]),_:1})}}});export{ie as default};
