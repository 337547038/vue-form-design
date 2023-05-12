import{d as W,e as le,a as N,c as z,ae as se,F as ce,f as ue,g as Y,w as T,b as V,k as fe,x as I,t as de,u as pe,m as B,af as ye,ag as me,r as K,l as J,W as q,B as $,a6 as F,S as G}from"./index-ea7eee8a.js";const ve={class:"main-tools"},Se=W({__name:"headTools",props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:["click"],setup(C,{emit:D}){const b=C,k=le(()=>{var f,e;const u=[{icon:"del",label:"清空",key:1},{icon:"eye",label:"预览",key:2},{icon:"json",label:"生成脚本预览",key:3},{icon:"vue",label:"导出vue文件",key:4},{icon:"save",label:"保存",key:5}];return(f=b.showKey)!=null&&f.length?u.filter(o=>b.showKey.includes(o.key)):(e=b.hideKey)!=null&&e.length?u.filter(o=>!b.hideKey.includes(o.key)):u}),h=u=>{D("click",u)};return(u,f)=>{const e=B("el-button");return N(),z("div",ve,[se(u.$slots,"default"),(N(!0),z(ce,null,ue(pe(k),o=>(N(),Y(e,{link:"",type:"primary",onClick:p=>h(o.icon),key:o.icon},{default:T(()=>[V("i",{class:fe(["icon-"+o.icon])},null,2),I(de(o.label),1)]),_:2},1032,["onClick"]))),128))])}}});var j={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(C,D){(function(k,h){C.exports=h()})(ye,function(){return function(){var b={686:function(u,f,e){e.d(f,{default:function(){return ae}});var o=e(279),p=e.n(o),t=e(370),l=e.n(t),d=e(817),m=e.n(d);function i(c){try{return document.execCommand(c)}catch{return!1}}var v=function(r){var n=m()(r);return i("cut"),n},g=v;function _(c){var r=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[r?"right":"left"]="-9999px";var a=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(a,"px"),n.setAttribute("readonly",""),n.value=c,n}var A=function(r,n){var a=_(r);n.container.appendChild(a);var s=m()(a);return i("copy"),a.remove(),s},R=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},a="";return typeof r=="string"?a=A(r,n):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?a=A(r.value,n):(a=m()(r),i("copy")),a},w=R;function S(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(n){return typeof n}:S=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(c)}var U=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.action,a=n===void 0?"copy":n,s=r.container,y=r.target,E=r.text;if(a!=="copy"&&a!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&S(y)==="object"&&y.nodeType===1){if(a==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(a==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return w(E,{container:s});if(y)return a==="cut"?g(y):w(y,{container:s})},X=U;function x(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(n){return typeof n}:x=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(c)}function Q(c,r){if(!(c instanceof r))throw new TypeError("Cannot call a class as a function")}function H(c,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function Z(c,r,n){return r&&H(c.prototype,r),n&&H(c,n),c}function ee(c,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(r&&r.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),r&&M(c,r)}function M(c,r){return M=Object.setPrototypeOf||function(a,s){return a.__proto__=s,a},M(c,r)}function te(c){var r=oe();return function(){var a=L(c),s;if(r){var y=L(this).constructor;s=Reflect.construct(a,arguments,y)}else s=a.apply(this,arguments);return ne(this,s)}}function ne(c,r){return r&&(x(r)==="object"||typeof r=="function")?r:re(c)}function re(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(c){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},L(c)}function P(c,r){var n="data-clipboard-".concat(c);if(r.hasAttribute(n))return r.getAttribute(n)}var ie=function(c){ee(n,c);var r=te(n);function n(a,s){var y;return Q(this,n),y=r.call(this),y.resolveOptions(s),y.listenClick(a),y}return Z(n,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=x(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var y=this;this.listener=l()(s,"click",function(E){return y.onClick(E)})}},{key:"onClick",value:function(s){var y=s.delegateTarget||s.currentTarget,E=this.action(y)||"copy",O=X({action:E,container:this.container,target:this.target(y),text:this.text(y)});this.emit(O?"success":"error",{action:E,text:O,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(s){return P("action",s)}},{key:"defaultTarget",value:function(s){var y=P("target",s);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(s){return P("text",s)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(s){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return w(s,y)}},{key:"cut",value:function(s){return g(s)}},{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof s=="string"?[s]:s,E=!!document.queryCommandSupported;return y.forEach(function(O){E=E&&!!document.queryCommandSupported(O)}),E}}]),n}(p()),ae=ie},828:function(u){var f=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function o(p,t){for(;p&&p.nodeType!==f;){if(typeof p.matches=="function"&&p.matches(t))return p;p=p.parentNode}}u.exports=o},438:function(u,f,e){var o=e(828);function p(d,m,i,v,g){var _=l.apply(this,arguments);return d.addEventListener(i,_,g),{destroy:function(){d.removeEventListener(i,_,g)}}}function t(d,m,i,v,g){return typeof d.addEventListener=="function"?p.apply(null,arguments):typeof i=="function"?p.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(_){return p(_,m,i,v,g)}))}function l(d,m,i,v){return function(g){g.delegateTarget=o(g.target,m),g.delegateTarget&&v.call(d,g)}}u.exports=t},879:function(u,f){f.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},f.nodeList=function(e){var o=Object.prototype.toString.call(e);return e!==void 0&&(o==="[object NodeList]"||o==="[object HTMLCollection]")&&"length"in e&&(e.length===0||f.node(e[0]))},f.string=function(e){return typeof e=="string"||e instanceof String},f.fn=function(e){var o=Object.prototype.toString.call(e);return o==="[object Function]"}},370:function(u,f,e){var o=e(879),p=e(438);function t(i,v,g){if(!i&&!v&&!g)throw new Error("Missing required arguments");if(!o.string(v))throw new TypeError("Second argument must be a String");if(!o.fn(g))throw new TypeError("Third argument must be a Function");if(o.node(i))return l(i,v,g);if(o.nodeList(i))return d(i,v,g);if(o.string(i))return m(i,v,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function l(i,v,g){return i.addEventListener(v,g),{destroy:function(){i.removeEventListener(v,g)}}}function d(i,v,g){return Array.prototype.forEach.call(i,function(_){_.addEventListener(v,g)}),{destroy:function(){Array.prototype.forEach.call(i,function(_){_.removeEventListener(v,g)})}}}function m(i,v,g){return p(document.body,i,v,g)}u.exports=t},817:function(u){function f(e){var o;if(e.nodeName==="SELECT")e.focus(),o=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var p=e.hasAttribute("readonly");p||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),p||e.removeAttribute("readonly"),o=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var t=window.getSelection(),l=document.createRange();l.selectNodeContents(e),t.removeAllRanges(),t.addRange(l),o=t.toString()}return o}u.exports=f},279:function(u){function f(){}f.prototype={on:function(e,o,p){var t=this.e||(this.e={});return(t[e]||(t[e]=[])).push({fn:o,ctx:p}),this},once:function(e,o,p){var t=this;function l(){t.off(e,l),o.apply(p,arguments)}return l._=o,this.on(e,l,p)},emit:function(e){var o=[].slice.call(arguments,1),p=((this.e||(this.e={}))[e]||[]).slice(),t=0,l=p.length;for(t;t<l;t++)p[t].fn.apply(p[t].ctx,o);return this},off:function(e,o){var p=this.e||(this.e={}),t=p[e],l=[];if(t&&o)for(var d=0,m=t.length;d<m;d++)t[d].fn!==o&&t[d].fn._!==o&&l.push(t[d]);return l.length?p[e]=l:delete p[e],this}},u.exports=f,u.exports.TinyEmitter=f}},k={};function h(u){if(k[u])return k[u].exports;var f=k[u]={exports:{}};return b[u](f,f.exports,h),f.exports}return function(){h.n=function(u){var f=u&&u.__esModule?function(){return u.default}:function(){return u};return h.d(f,{a:f}),f}}(),function(){h.d=function(u,f){for(var e in f)h.o(f,e)&&!h.o(u,e)&&Object.defineProperty(u,e,{enumerable:!0,get:f[e]})}}(),function(){h.o=function(u,f){return Object.prototype.hasOwnProperty.call(u,f)}}(),h(686)}().default})})(j);var ge=j.exports;const he=me(ge),be=V("div",{id:"editJsonCopy"},null,-1),_e={class:"dialog-footer"},we=W({__name:"vueFile",setup(C,{expose:D}){const b=K(!1),k=K(),h=t=>{let l="",d="";return t&&t.list.forEach(m=>{var i;(i=m.customRules)!=null&&i.length&&m.customRules.forEach(v=>{v.type==="methods"&&v.methods&&(l+=`// todo 请完善${m.item.label}校验方法
  provide("${v.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:l,sourceFun:d}},u=t=>{b.value=!0;const l=h(t),{addUrl:d,editUrl:m,requestUrl:i}=t.config;i&&delete t.config.requestUrl,m&&delete t.config.editUrl,d&&delete t.config.addUrl;const v=`<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :formData="formData"
      requestUrl="${i}"
      addUrl="${d}"
      editUrl="${m}"
      :beforeSubmit="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${q(t)})
    // todo 存在编辑时，可根据路由等参数设置当前表单模式　1新增　2编辑
  const formType = computed(() => {
     return 1
  })
  ${l.rulesMethods}
  ${l.sourceFun}
  // 表单提交时参数处理
  const beforeSubmit = (params)=>{
    //　如编辑时添加参数
    //  params.id='xxx'
    return params
  }

<\/script>`;$(()=>{k.value=F(v,"editJsonCopy","html")})},f=t=>{var R,w,S,U;const l=((R=t.config)==null?void 0:R.openType)==="dialog",d=((w=t.config)==null?void 0:w.dialogWidth)||"600px",m=(S=t.config)==null?void 0:S.requestUrl;m&&delete t.config.requestUrl;const i=(U=t.config)==null?void 0:U.deleteUrl;i&&delete t.config.deleteUrl;let v="",g="",_="";l&&(_='@btn-click="listBtnClick"',v=`<el-dialog
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
  // todo 表单数据可从设计表单导出vue文件或保存生成脚本
  const formData = ref({list:[],form:{},config:{}})
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 1,
    dict: {},
    editId: ''
  })
  const listBtnClick = (btn, row) => {
    // 使用弹窗方式打开新增编辑
    if (btn.key === 'add' || btn.key === 'edit') {
      // 打开弹窗
      dialog.visible = true
      dialog.title = btn.key === 'add' ? '新增' : '编辑'
      dialog.formType = btn.key === 'add' ? 1 : 2
      dialog.editId = row && row.id

      if (btn.key === 'add' && formData.value.config?.addLoad) {
        // 添加时需要加载数据
        nextTick(() => {
          formEl.value.getData()
        })
      }
      // 编辑，根据id加载
      if (btn.key === 'edit') {
        nextTick(() => {
       　 // todo 当表单内容字段比较少，所需值从列表数据就可以获取
       　　// formEl.value.setValue(row)
          formEl.value.getData({ id: row.id })
        })
      }
    }
  }
  //　提交表单前事件
  const beforeSubmit = (params) => {
    if(dialog.formType===2){ // 编辑模式下添加参数
      params.id = dialog.editId
    }
    return params
  }
  //　提交表单后事件
  const afterSubmit = (type) => {
    if (type === 'success') {
      //　添加成功，刷新列表数据
      closeResetDialog()
      tableListEl.value.getListData()
    }
  }
  // 关闭弹窗并重置表单，否则下次打开会保留上次数据
  const closeResetDialog = () => {
    dialog.visible = false
    dialog.editId = ''
    // formEl.value.resetFields() // 重置表单
  }
  //　点击弹窗取消按钮时
  const dialogBtnClick = (type) => {
    if (type === 'reset') {
      closeResetDialog()
    }
  }
  `),b.value=!0;const A=`<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="${m}"
      deleteUrl="${i}"
      :searchData="searchData"
      :tableData="tableData"
      ${_}>
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
  const tableData = ref(${q(t)})
  ${g}
<\/script>`;$(()=>{k.value=F(A,"editJsonCopy","html")})},e=t=>{b.value=!0;let l="",d="",m="";const i=t.config.style;i&&(l=`<style>
${i}
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
  const screenData = ref(${q(t)})
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
${l}`;$(()=>{k.value=F(v,"editJsonCopy","html")})},o=t=>{$(()=>{const l=new he(t.target,{text:()=>k.value.getValue()});l.on("success",function(){G({message:"复制成功！",type:"success"}),l.destroy()}),l.on("error",function(){G.error("复制失败"),l.destroy()}),l.onClick(t)})},p=()=>{var i;const t="data:text/csv;charset=utf-8,"+((i=k.value)==null?void 0:i.getValue()),l=new Date().getTime()+".vue",d=encodeURI(t),m=document.createElement("a");m.setAttribute("href",d),m.setAttribute("download",l),m.click()};return D({open:u,openTable:f,openScreen:e}),(t,l)=>{const d=B("el-button"),m=B("el-dialog");return N(),Y(m,{modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=i=>b.value=i),title:"导出vue文件",class:"export-dialog",width:"80%"},{footer:T(()=>[V("div",_e,[J(d,{size:"small",type:"primary",onClick:o},{default:T(()=>[I(" 复制数据 ")]),_:1}),J(d,{type:"primary",size:"small",onClick:p},{default:T(()=>[I(" 导出代码 ")]),_:1})])]),default:T(()=>[be]),_:1},8,["modelValue"])}}});export{Se as _,we as a};
