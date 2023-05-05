import{i as Y,j as ae,b as q,c as O,d as z,F as ce,f as le,k as j,w as A,e as I,z as se,h as V,t as fe,u as de,a5 as pe,a6 as ye,r as K,g as J,a0 as M,H as L,a7 as P,E as G}from"./index.58206b0d.js";const me={class:"main-tools"},Ce=Y({__name:"headTools",props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:["click"],setup(S,{emit:w}){const b=S,F=ae(()=>{var s,e;const f=[{icon:"del",label:"\u6E05\u7A7A",key:1},{icon:"eye",label:"\u9884\u89C8",key:2},{icon:"json",label:"\u751F\u6210\u811A\u672C\u9884\u89C8",key:3},{icon:"vue",label:"\u5BFC\u51FAvue\u6587\u4EF6",key:4},{icon:"save",label:"\u4FDD\u5B58",key:5}];return(s=b.showKey)!=null&&s.length?f.filter(o=>b.showKey.includes(o.key)):(e=b.hideKey)!=null&&e.length?f.filter(o=>!b.hideKey.includes(o.key)):f}),h=f=>{w("click",f)};return(f,s)=>{const e=q("el-button");return O(),z("div",me,[(O(!0),z(ce,null,le(de(F),o=>(O(),j(e,{link:"",type:"primary",onClick:p=>h(o.icon),key:o.icon},{default:A(()=>[I("i",{class:se(["icon-"+o.icon])},null,2),V(fe(o.label),1)]),_:2},1032,["onClick"]))),128))])}}});var W={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(S,w){(function(F,h){S.exports=h()})(pe,function(){return function(){var b={686:function(f,s,e){e.d(s,{default:function(){return ie}});var o=e(279),p=e.n(o),t=e(370),a=e.n(t),d=e(817),m=e.n(d);function u(l){try{return document.execCommand(l)}catch{return!1}}var v=function(r){var n=m()(r);return u("cut"),n},g=v;function E(l){var r=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[r?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(i,"px"),n.setAttribute("readonly",""),n.value=l,n}var x=function(r,n){var i=E(r);n.container.appendChild(i);var c=m()(i);return u("copy"),i.remove(),c},T=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},i="";return typeof r=="string"?i=x(r,n):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?i=x(r.value,n):(i=m()(r),u("copy")),i},k=T;function C(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(n){return typeof n}:C=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(l)}var B=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.action,i=n===void 0?"copy":n,c=r.container,y=r.target,_=r.text;if(i!=="copy"&&i!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&C(y)==="object"&&y.nodeType===1){if(i==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(i==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return k(_,{container:c});if(y)return i==="cut"?g(y):k(y,{container:c})},X=B;function D(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?D=function(n){return typeof n}:D=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},D(l)}function Q(l,r){if(!(l instanceof r))throw new TypeError("Cannot call a class as a function")}function H(l,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}function Z(l,r,n){return r&&H(l.prototype,r),n&&H(l,n),l}function ee(l,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(r&&r.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),r&&$(l,r)}function $(l,r){return $=Object.setPrototypeOf||function(i,c){return i.__proto__=c,i},$(l,r)}function te(l){var r=oe();return function(){var i=R(l),c;if(r){var y=R(this).constructor;c=Reflect.construct(i,arguments,y)}else c=i.apply(this,arguments);return ne(this,c)}}function ne(l,r){return r&&(D(r)==="object"||typeof r=="function")?r:re(l)}function re(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function R(l){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},R(l)}function N(l,r){var n="data-clipboard-".concat(l);if(!!r.hasAttribute(n))return r.getAttribute(n)}var ue=function(l){ee(n,l);var r=te(n);function n(i,c){var y;return Q(this,n),y=r.call(this),y.resolveOptions(c),y.listenClick(i),y}return Z(n,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=D(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var y=this;this.listener=a()(c,"click",function(_){return y.onClick(_)})}},{key:"onClick",value:function(c){var y=c.delegateTarget||c.currentTarget,_=this.action(y)||"copy",U=X({action:_,container:this.container,target:this.target(y),text:this.text(y)});this.emit(U?"success":"error",{action:_,text:U,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(c){return N("action",c)}},{key:"defaultTarget",value:function(c){var y=N("target",c);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(c){return N("text",c)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(c){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return k(c,y)}},{key:"cut",value:function(c){return g(c)}},{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof c=="string"?[c]:c,_=!!document.queryCommandSupported;return y.forEach(function(U){_=_&&!!document.queryCommandSupported(U)}),_}}]),n}(p()),ie=ue},828:function(f){var s=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function o(p,t){for(;p&&p.nodeType!==s;){if(typeof p.matches=="function"&&p.matches(t))return p;p=p.parentNode}}f.exports=o},438:function(f,s,e){var o=e(828);function p(d,m,u,v,g){var E=a.apply(this,arguments);return d.addEventListener(u,E,g),{destroy:function(){d.removeEventListener(u,E,g)}}}function t(d,m,u,v,g){return typeof d.addEventListener=="function"?p.apply(null,arguments):typeof u=="function"?p.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(E){return p(E,m,u,v,g)}))}function a(d,m,u,v){return function(g){g.delegateTarget=o(g.target,m),g.delegateTarget&&v.call(d,g)}}f.exports=t},879:function(f,s){s.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},s.nodeList=function(e){var o=Object.prototype.toString.call(e);return e!==void 0&&(o==="[object NodeList]"||o==="[object HTMLCollection]")&&"length"in e&&(e.length===0||s.node(e[0]))},s.string=function(e){return typeof e=="string"||e instanceof String},s.fn=function(e){var o=Object.prototype.toString.call(e);return o==="[object Function]"}},370:function(f,s,e){var o=e(879),p=e(438);function t(u,v,g){if(!u&&!v&&!g)throw new Error("Missing required arguments");if(!o.string(v))throw new TypeError("Second argument must be a String");if(!o.fn(g))throw new TypeError("Third argument must be a Function");if(o.node(u))return a(u,v,g);if(o.nodeList(u))return d(u,v,g);if(o.string(u))return m(u,v,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(u,v,g){return u.addEventListener(v,g),{destroy:function(){u.removeEventListener(v,g)}}}function d(u,v,g){return Array.prototype.forEach.call(u,function(E){E.addEventListener(v,g)}),{destroy:function(){Array.prototype.forEach.call(u,function(E){E.removeEventListener(v,g)})}}}function m(u,v,g){return p(document.body,u,v,g)}f.exports=t},817:function(f){function s(e){var o;if(e.nodeName==="SELECT")e.focus(),o=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var p=e.hasAttribute("readonly");p||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),p||e.removeAttribute("readonly"),o=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var t=window.getSelection(),a=document.createRange();a.selectNodeContents(e),t.removeAllRanges(),t.addRange(a),o=t.toString()}return o}f.exports=s},279:function(f){function s(){}s.prototype={on:function(e,o,p){var t=this.e||(this.e={});return(t[e]||(t[e]=[])).push({fn:o,ctx:p}),this},once:function(e,o,p){var t=this;function a(){t.off(e,a),o.apply(p,arguments)}return a._=o,this.on(e,a,p)},emit:function(e){var o=[].slice.call(arguments,1),p=((this.e||(this.e={}))[e]||[]).slice(),t=0,a=p.length;for(t;t<a;t++)p[t].fn.apply(p[t].ctx,o);return this},off:function(e,o){var p=this.e||(this.e={}),t=p[e],a=[];if(t&&o)for(var d=0,m=t.length;d<m;d++)t[d].fn!==o&&t[d].fn._!==o&&a.push(t[d]);return a.length?p[e]=a:delete p[e],this}},f.exports=s,f.exports.TinyEmitter=s}},F={};function h(f){if(F[f])return F[f].exports;var s=F[f]={exports:{}};return b[f](s,s.exports,h),s.exports}return function(){h.n=function(f){var s=f&&f.__esModule?function(){return f.default}:function(){return f};return h.d(s,{a:s}),s}}(),function(){h.d=function(f,s){for(var e in s)h.o(s,e)&&!h.o(f,e)&&Object.defineProperty(f,e,{enumerable:!0,get:s[e]})}}(),function(){h.o=function(f,s){return Object.prototype.hasOwnProperty.call(f,s)}}(),h(686)}().default})})(W);const ve=ye(W.exports),ge=I("div",{id:"editJsonCopy"},null,-1),he={class:"dialog-footer"},be=V(" \u590D\u5236\u6570\u636E "),Ee=V(" \u5BFC\u51FA\u4EE3\u7801 "),ke=Y({__name:"vueFile",setup(S,{expose:w}){const b=K(!1),F=K(),h=t=>{let a="",d="";return t&&t.list.forEach(m=>{var u;(u=m.customRules)!=null&&u.length&&m.customRules.forEach(v=>{v.type==="methods"&&v.methods&&(a+=`// todo \u8BF7\u5B8C\u5584${m.item.label}\u6821\u9A8C\u65B9\u6CD5
  provide("${v.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:a,sourceFun:d}},f=t=>{b.value=!0;const a=h(t),{addUrl:d,editUrl:m,requestUrl:u}=t.config;u&&delete t.config.requestUrl,m&&delete t.config.editUrl,d&&delete t.config.addUrl;const v=`<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :formData="formData"
      requestUrl="${u}"
      addUrl="${d}"
      editUrl="${m}"
      :beforeSubmit="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${M(t)})
    // todo \u5B58\u5728\u7F16\u8F91\u65F6\uFF0C\u53EF\u6839\u636E\u8DEF\u7531\u7B49\u53C2\u6570\u8BBE\u7F6E\u5F53\u524D\u8868\u5355\u6A21\u5F0F\u30001\u65B0\u589E\u30002\u7F16\u8F91
  const formType = computed(() => {
     return 1
  })
  ${a.rulesMethods}
  ${a.sourceFun}
  // \u8868\u5355\u63D0\u4EA4\u65F6\u53C2\u6570\u5904\u7406
  const beforeSubmit = (params)=>{
    //\u3000\u5982\u7F16\u8F91\u65F6\u6DFB\u52A0\u53C2\u6570
    //  params.id='xxx'
    return params
  }

<\/script>`;L(()=>{F.value=P(v,"editJsonCopy","html")})},s=t=>{var T,k,C,B;const a=((T=t.config)==null?void 0:T.openType)==="dialog",d=((k=t.config)==null?void 0:k.dialogWidth)||"600px",m=(C=t.config)==null?void 0:C.requestUrl;m&&delete t.config.requestUrl;const u=(B=t.config)==null?void 0:B.deleteUrl;u&&delete t.config.deleteUrl;let v="",g="",E="";a&&(E='@btn-click="listBtnClick"',v=`<el-dialog
      destroy-on-close
      v-model="dialog.visible"
      :title="dialog.title"
      width="${d}"
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
    </el-dialog>`,g=`const formEl = ref()
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
  `),b.value=!0;const x=`<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="${m}"
      deleteUrl="${u}"
      :searchData="searchData"
      :tableData="tableData"
      ${E}>
    </ak-list>
    ${v}
  </div>
</template>

<script setup>
  // import {useRoute, useRouter} from 'vue-router'
  import { ref, nextTick,reactive } from 'vue'
  // const route = useRoute()
  // const router = useRouter()
  const tableListEl = ref()
  const searchData = ref({})
  const tableData = ref(${M(t)})
  ${g}
<\/script>`;L(()=>{F.value=P(x,"editJsonCopy","html")})},e=t=>{b.value=!0;let a="",d="",m="";const u=t.config.style;u&&(a=`<style>
${u}
</style>`),t.config.requestUrl&&(m="import { getGlobalData } from '@/views/design/dataScreen/getData'",d=`const globalScreen = ref({})
  provide('globalScreen', globalScreen)
  const {requestUrl, afterResponse, beforeRequest, method} = screenData.value.config
  getGlobalData(requestUrl, afterResponse, beforeRequest, method)
  .then((res: any) => {
       globalScreen.value = res
   })`);const v=`<template>
  <div :style="screenStyle" class="design-canvas">
    <ak-screen
      v-for="(element, index) in screenData.list"
      :key="index"
      :data="element"
    ></ak-screen>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  ${m}
  const loading = ref(true)
  const screenData = ref(${M(t)})
  const screenStyle = computed(() => {
    const { width, height, background, primary } = screenData.value.config
    return {
      width: width,
      height: height,
      background: background,
      color: primary,
      position: 'relative'
    }
  })
  ${d}
<\/script>
${a}`;L(()=>{F.value=P(v,"editJsonCopy","html")})},o=t=>{L(()=>{const a=new ve(t.target,{text:()=>F.value.getValue()});a.on("success",function(){G({message:"\u590D\u5236\u6210\u529F\uFF01",type:"success"}),a.destroy()}),a.on("error",function(){G.error("\u590D\u5236\u5931\u8D25"),a.destroy()}),a.onClick(t)})},p=()=>{var u;const t="data:text/csv;charset=utf-8,"+((u=F.value)==null?void 0:u.getValue()),a=new Date().getTime()+".vue",d=encodeURI(t),m=document.createElement("a");m.setAttribute("href",d),m.setAttribute("download",a),m.click()};return w({open:f,openTable:s,openScreen:e}),(t,a)=>{const d=q("el-button"),m=q("el-dialog");return O(),j(m,{modelValue:b.value,"onUpdate:modelValue":a[0]||(a[0]=u=>b.value=u),title:"\u5BFC\u51FAvue\u6587\u4EF6","custom-class":"export-dialog",width:"80%"},{footer:A(()=>[I("div",he,[J(d,{size:"small",type:"primary",onClick:o},{default:A(()=>[be]),_:1}),J(d,{type:"primary",size:"small",onClick:p},{default:A(()=>[Ee]),_:1})])]),default:A(()=>[ge]),_:1},8,["modelValue"])}}});export{Ce as _,ke as a};
