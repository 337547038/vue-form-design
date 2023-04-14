import{d as H,m as at,o as D,c as P,F as lt,r as ct,a as I,w as A,f as T,n as st,p as N,t as ft,q as dt,h as x,a1 as pt,a2 as mt,i as R,g as U,W as J,x as O,a3 as j,M as q,L as yt,j as vt,a4 as gt,e as ht}from"./index.4bea5897.js";const bt={class:"main-tools"},St=H({__name:"headTools",props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:["click"],setup(C,{emit:k}){const b=C,E=at(()=>{var l,t;const s=[{icon:"del",label:"\u6E05\u7A7A",key:1},{icon:"eye",label:"\u9884\u89C8",key:2},{icon:"json",label:"\u751F\u6210\u811A\u672C\u9884\u89C8",key:3},{icon:"vue",label:"\u5BFC\u51FAvue\u6587\u4EF6",key:4},{icon:"save",label:"\u4FDD\u5B58",key:5}];return(l=b.showKey)!=null&&l.length?s.filter(u=>b.showKey.includes(u.key)):(t=b.hideKey)!=null&&t.length?s.filter(u=>!b.hideKey.includes(u.key)):s}),h=s=>{k("click",s)};return(s,l)=>{const t=x("el-button");return D(),P("div",bt,[(D(!0),P(lt,null,ct(dt(E),u=>(D(),I(t,{link:"",type:"primary",onClick:o=>h(u.icon),key:u.icon},{default:A(()=>[T("i",{class:st(["icon-"+u.icon])},null,2),N(ft(u.label),1)]),_:2},1032,["onClick"]))),128))])}}});var W={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(C,k){(function(E,h){C.exports=h()})(pt,function(){return function(){var b={686:function(s,l,t){t.d(l,{default:function(){return it}});var u=t(279),o=t.n(u),r=t(370),m=t.n(r),f=t(817),v=t.n(f);function d(c){try{return document.execCommand(c)}catch{return!1}}var g=function(n){var e=v()(n);return d("cut"),e},y=g;function F(c){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(i,"px"),e.setAttribute("readonly",""),e.value=c,e}var z=function(n,e){var i=F(n);e.container.appendChild(i);var a=v()(i);return d("copy"),i.remove(),a},Y=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},i="";return typeof n=="string"?i=z(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?i=z(n.value,e):(i=v()(n),d("copy")),i},M=Y;function B(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?B=function(e){return typeof e}:B=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(c)}var G=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,i=e===void 0?"copy":e,a=n.container,p=n.target,_=n.text;if(i!=="copy"&&i!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(p!==void 0)if(p&&B(p)==="object"&&p.nodeType===1){if(i==="copy"&&p.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(i==="cut"&&(p.hasAttribute("readonly")||p.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return M(_,{container:a});if(p)return i==="cut"?y(p):M(p,{container:a})},X=G;function w(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(e){return typeof e}:w=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(c)}function Q(c,n){if(!(c instanceof n))throw new TypeError("Cannot call a class as a function")}function K(c,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}function Z(c,n,e){return n&&K(c.prototype,n),e&&K(c,e),c}function tt(c,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(n&&n.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),n&&V(c,n)}function V(c,n){return V=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},V(c,n)}function et(c){var n=ut();return function(){var i=S(c),a;if(n){var p=S(this).constructor;a=Reflect.construct(i,arguments,p)}else a=i.apply(this,arguments);return nt(this,a)}}function nt(c,n){return n&&(w(n)==="object"||typeof n=="function")?n:ot(c)}function ot(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function ut(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function S(c){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(c)}function $(c,n){var e="data-clipboard-".concat(c);if(!!n.hasAttribute(e))return n.getAttribute(e)}var rt=function(c){tt(e,c);var n=et(e);function e(i,a){var p;return Q(this,e),p=n.call(this),p.resolveOptions(a),p.listenClick(i),p}return Z(e,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof a.action=="function"?a.action:this.defaultAction,this.target=typeof a.target=="function"?a.target:this.defaultTarget,this.text=typeof a.text=="function"?a.text:this.defaultText,this.container=w(a.container)==="object"?a.container:document.body}},{key:"listenClick",value:function(a){var p=this;this.listener=m()(a,"click",function(_){return p.onClick(_)})}},{key:"onClick",value:function(a){var p=a.delegateTarget||a.currentTarget,_=this.action(p)||"copy",L=X({action:_,container:this.container,target:this.target(p),text:this.text(p)});this.emit(L?"success":"error",{action:_,text:L,trigger:p,clearSelection:function(){p&&p.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(a){return $("action",a)}},{key:"defaultTarget",value:function(a){var p=$("target",a);if(p)return document.querySelector(p)}},{key:"defaultText",value:function(a){return $("text",a)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(a){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return M(a,p)}},{key:"cut",value:function(a){return y(a)}},{key:"isSupported",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],p=typeof a=="string"?[a]:a,_=!!document.queryCommandSupported;return p.forEach(function(L){_=_&&!!document.queryCommandSupported(L)}),_}}]),e}(o()),it=rt},828:function(s){var l=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(o,r){for(;o&&o.nodeType!==l;){if(typeof o.matches=="function"&&o.matches(r))return o;o=o.parentNode}}s.exports=u},438:function(s,l,t){var u=t(828);function o(f,v,d,g,y){var F=m.apply(this,arguments);return f.addEventListener(d,F,y),{destroy:function(){f.removeEventListener(d,F,y)}}}function r(f,v,d,g,y){return typeof f.addEventListener=="function"?o.apply(null,arguments):typeof d=="function"?o.bind(null,document).apply(null,arguments):(typeof f=="string"&&(f=document.querySelectorAll(f)),Array.prototype.map.call(f,function(F){return o(F,v,d,g,y)}))}function m(f,v,d,g){return function(y){y.delegateTarget=u(y.target,v),y.delegateTarget&&g.call(f,y)}}s.exports=r},879:function(s,l){l.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},l.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||l.node(t[0]))},l.string=function(t){return typeof t=="string"||t instanceof String},l.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(s,l,t){var u=t(879),o=t(438);function r(d,g,y){if(!d&&!g&&!y)throw new Error("Missing required arguments");if(!u.string(g))throw new TypeError("Second argument must be a String");if(!u.fn(y))throw new TypeError("Third argument must be a Function");if(u.node(d))return m(d,g,y);if(u.nodeList(d))return f(d,g,y);if(u.string(d))return v(d,g,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function m(d,g,y){return d.addEventListener(g,y),{destroy:function(){d.removeEventListener(g,y)}}}function f(d,g,y){return Array.prototype.forEach.call(d,function(F){F.addEventListener(g,y)}),{destroy:function(){Array.prototype.forEach.call(d,function(F){F.removeEventListener(g,y)})}}}function v(d,g,y){return o(document.body,d,g,y)}s.exports=r},817:function(s){function l(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var o=t.hasAttribute("readonly");o||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),o||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),m=document.createRange();m.selectNodeContents(t),r.removeAllRanges(),r.addRange(m),u=r.toString()}return u}s.exports=l},279:function(s){function l(){}l.prototype={on:function(t,u,o){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:u,ctx:o}),this},once:function(t,u,o){var r=this;function m(){r.off(t,m),u.apply(o,arguments)}return m._=u,this.on(t,m,o)},emit:function(t){var u=[].slice.call(arguments,1),o=((this.e||(this.e={}))[t]||[]).slice(),r=0,m=o.length;for(r;r<m;r++)o[r].fn.apply(o[r].ctx,u);return this},off:function(t,u){var o=this.e||(this.e={}),r=o[t],m=[];if(r&&u)for(var f=0,v=r.length;f<v;f++)r[f].fn!==u&&r[f].fn._!==u&&m.push(r[f]);return m.length?o[t]=m:delete o[t],this}},s.exports=l,s.exports.TinyEmitter=l}},E={};function h(s){if(E[s])return E[s].exports;var l=E[s]={exports:{}};return b[s](l,l.exports,h),l.exports}return function(){h.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return h.d(l,{a:l}),l}}(),function(){h.d=function(s,l){for(var t in l)h.o(l,t)&&!h.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:l[t]})}}(),function(){h.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)}}(),h(686)}().default})})(W);const Et=mt(W.exports),Ft=T("div",{id:"editJsonCopy"},null,-1),_t={class:"dialog-footer"},Ct=N(" \u590D\u5236\u6570\u636E "),kt=N(" \u5BFC\u51FA\u4EE3\u7801 "),Lt=H({__name:"vueFile",setup(C,{expose:k}){const b=R(!1),E=R(),h=o=>{let r="",m="";return o&&o.list.forEach(f=>{var v;(v=f.customRules)!=null&&v.length&&f.customRules.forEach(d=>{d.type==="methods"&&d.methods&&(r+=`// todo \u8BF7\u5B8C\u5584${f.item.label}\u6821\u9A8C\u65B9\u6CD5
  provide("${d.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:r,sourceFun:m}},s=o=>{b.value=!0;const r=h(o),m=`<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :formData="formData"
      requestUrl=""
      addUrl=""
      editUrl=""
      :beforeSubmit="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${J(o)})
    // todo \u5B58\u5728\u7F16\u8F91\u65F6\uFF0C\u53EF\u6839\u636E\u8DEF\u7531\u7B49\u53C2\u6570\u8BBE\u7F6E\u5F53\u524D\u8868\u5355\u6A21\u5F0F\u30001\u65B0\u589E\u30002\u7F16\u8F91
  const formType = computed(() => {
     return 1
  })
  ${r.rulesMethods}
  ${r.sourceFun}
  // \u8868\u5355\u63D0\u4EA4\u65F6\u53C2\u6570\u5904\u7406
  const beforeSubmit = (params)=>{
    //\u3000\u5982\u7F16\u8F91\u65F6\u6DFB\u52A0\u53C2\u6570
    //  params.id='xxx'
    return params
  }

<\/script>`;O(()=>{E.value=j(m,"editJsonCopy","html")})},l=o=>{var y,F;const r=((y=o.config)==null?void 0:y.openType)==="dialog",m=((F=o.config)==null?void 0:F.dialogWidth)||"600px";let f="",v="",d="";r&&(d='@btn-click="listBtnClick"',f=`<el-dialog
      destroy-on-close
      v-model="dialog.visible"
      :title="dialog.title"
      width="${m}"
    >
      <ak-form
        ref="formEl"
        :formData="formData"
        :dict="dialog.dict"
        :type="dialog.formType"
        requestUrl=""
        addUrl=""
        editUrl=""
        :beforeSubmit="beforeSubmit"
        :afterSubmit="afterSubmit"
        @btn-click="dialogBtnClick"
      ></ak-form>
    </el-dialog>`,v=`const formEl = ref()
  // todo \u8868\u5355\u6570\u636E\u53EF\u4ECE\u8BBE\u8BA1\u8868\u5355\u5BFC\u51FAvue\u6587\u4EF6\u6216\u4FDD\u5B58\u751F\u6210\u811A\u672C
  const formData = ref({list:[],form:{},config:{}})
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 1,
    dict: {},
    editId: ''
  })
  const listBtnClick = (btn, row) => {
    // \u4F7F\u7528\u5F39\u7A97\u65B9\u5F0F\u6253\u5F00\u65B0\u589E\u7F16\u8F91
    if (btn.key === 'add' || btn.key === 'edit') {
      // \u6253\u5F00\u5F39\u7A97
      dialog.visible = true
      dialog.title = btn.key === 'add' ? '\u65B0\u589E' : '\u7F16\u8F91'
      dialog.formType = btn.key === 'add' ? 1 : 2
      dialog.editId = row && row.id

      if (btn.key === 'add' && formData.value.config?.addLoad) {
        // \u6DFB\u52A0\u65F6\u9700\u8981\u52A0\u8F7D\u6570\u636E
        nextTick(() => {
          formEl.value.getData()
        })
      }
      // \u7F16\u8F91\uFF0C\u6839\u636Eid\u52A0\u8F7D
      if (btn.key === 'edit') {
        nextTick(() => {
       \u3000 // todo \u5F53\u8868\u5355\u5185\u5BB9\u5B57\u6BB5\u6BD4\u8F83\u5C11\uFF0C\u6240\u9700\u503C\u4ECE\u5217\u8868\u6570\u636E\u5C31\u53EF\u4EE5\u83B7\u53D6
       \u3000\u3000// formEl.value.setValue(row)
          formEl.value.getData({ id: row.id })
        })
      }
    }
  }
  //\u3000\u63D0\u4EA4\u8868\u5355\u524D\u4E8B\u4EF6
  const beforeSubmit = (params) => {
    if(dialog.formType===2){ // \u7F16\u8F91\u6A21\u5F0F\u4E0B\u6DFB\u52A0\u53C2\u6570
      params.id = dialog.editId
    }
    return params
  }
  //\u3000\u63D0\u4EA4\u8868\u5355\u540E\u4E8B\u4EF6
  const afterSubmit = (type) => {
    if (type === 'success') {
      //\u3000\u6DFB\u52A0\u6210\u529F\uFF0C\u5237\u65B0\u5217\u8868\u6570\u636E
      closeResetDialog()
      tableListEl.value.getListData()
    }
  }
  // \u5173\u95ED\u5F39\u7A97\u5E76\u91CD\u7F6E\u8868\u5355\uFF0C\u5426\u5219\u4E0B\u6B21\u6253\u5F00\u4F1A\u4FDD\u7559\u4E0A\u6B21\u6570\u636E
  const closeResetDialog = () => {
    dialog.visible = false
    dialog.editId = ''
    // formEl.value.resetFields() // \u91CD\u7F6E\u8868\u5355
  }
  //\u3000\u70B9\u51FB\u5F39\u7A97\u53D6\u6D88\u6309\u94AE\u65F6
  const dialogBtnClick = (type) => {
    if (type === 'reset') {
      closeResetDialog()
    }
  }
  `),b.value=!0;const g=`<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl=""
      deleteUrl=""
      :searchData="searchData"
      :tableData="tableData"
      ${d}>
    </ak-list>
    ${f}
  </div>
</template>

<script setup>
  // import {useRoute, useRouter} from 'vue-router'
  import { ref, nextTick,reactive } from 'vue'
  // const route = useRoute()
  // const router = useRouter()
  const tableListEl = ref()
  const searchData = ref({})
  const tableData = ref(${J(o)})
  ${v}
<\/script>`;O(()=>{E.value=j(g,"editJsonCopy","html")})},t=o=>{O(()=>{const r=new Et(o.target,{text:()=>E.value.getValue()});r.on("success",function(){q({message:"\u590D\u5236\u6210\u529F\uFF01",type:"success"}),r.destroy()}),r.on("error",function(){q.error("\u590D\u5236\u5931\u8D25"),r.destroy()}),r.onClick(o)})},u=()=>{var v;const o="data:text/csv;charset=utf-8,"+((v=E.value)==null?void 0:v.getValue()),r=new Date().getTime()+".vue",m=encodeURI(o),f=document.createElement("a");f.setAttribute("href",m),f.setAttribute("download",r),f.click()};return k({open:s,openTable:l}),(o,r)=>{const m=x("el-button"),f=x("el-dialog");return D(),I(f,{modelValue:b.value,"onUpdate:modelValue":r[0]||(r[0]=v=>b.value=v),title:"\u5BFC\u51FAvue\u6587\u4EF6","custom-class":"export-dialog",width:"80%"},{footer:A(()=>[T("div",_t,[U(m,{size:"small",type:"primary",onClick:t},{default:A(()=>[Ct]),_:1}),U(m,{type:"primary",size:"small",onClick:u},{default:A(()=>[kt]),_:1})])]),default:A(()=>[Ft]),_:1},8,["modelValue"])}}}),At=["innerHTML"],Dt=["id"],wt={class:"dialog-footer"},Tt=N(" \u786E\u5B9A "),Ot=H({__name:"aceDrawer",props:{modelValue:{type:Boolean},title:null,direction:null,content:{default:""},id:{default:"editJson"},codeType:null},emits:["beforeClose","confirm","update:modelValue"],setup(C,{emit:k}){const b=C,E=R({}),h=R(!1);yt(()=>b.modelValue,u=>{h.value=u,u&&s()});const s=()=>{O(()=>{E.value=j(b.content,b.id,b.codeType)})},l=()=>{const u=E.value.getValue();k("confirm",u)},t=()=>{k("update:modelValue",!1),k("beforeClose")};return vt(()=>{}),gt(()=>{Object.keys(E.value).length!==0&&(E.value.destroy(),E.value.container.remove())}),(u,o)=>{const r=x("el-button"),m=x("el-drawer");return D(),I(m,{modelValue:h.value,"onUpdate:modelValue":o[0]||(o[0]=f=>h.value=f),size:"60%",title:C.title,direction:C.direction||"ltr","custom-class":"ace-dialog","append-to-body":!0,"before-close":t},{header:A(()=>[T("div",{innerHTML:C.title},null,8,At)]),default:A(()=>[h.value?(D(),P("div",{key:0,id:C.id},null,8,Dt)):ht("",!0),T("div",wt,[U(r,{type:"primary",size:"small",onClick:l},{default:A(()=>[Tt]),_:1})])]),_:1},8,["modelValue","title","direction"])}}});export{St as _,Ot as a,Lt as b};
