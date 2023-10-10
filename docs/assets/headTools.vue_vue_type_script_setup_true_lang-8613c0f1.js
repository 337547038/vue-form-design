import{ac as se,ad as le,d as Y,l as K,r as I,o as N,b as W,w as T,g as B,i as z,m as V,Z as q,q as U,ab as F,$ as J,h as ce,c as G,ae as ue,F as fe,a as de,n as pe,t as ye}from"./index-3a3de0b7.js";var j={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(C,D){(function(k,h){C.exports=h()})(se,function(){return function(){var b={686:function(u,f,e){e.d(f,{default:function(){return ae}});var o=e(279),p=e.n(o),t=e(370),s=e.n(t),d=e(817),m=e.n(d);function i(c){try{return document.execCommand(c)}catch{return!1}}var v=function(r){var n=m()(r);return i("cut"),n},g=v;function _(c){var r=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[r?"right":"left"]="-9999px";var a=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(a,"px"),n.setAttribute("readonly",""),n.value=c,n}var A=function(r,n){var a=_(r);n.container.appendChild(a);var l=m()(a);return i("copy"),a.remove(),l},R=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},a="";return typeof r=="string"?a=A(r,n):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?a=A(r.value,n):(a=m()(r),i("copy")),a},x=R;function w(c){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(n){return typeof n}:w=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(c)}var $=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.action,a=n===void 0?"copy":n,l=r.container,y=r.target,E=r.text;if(a!=="copy"&&a!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&w(y)==="object"&&y.nodeType===1){if(a==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(a==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return x(E,{container:l});if(y)return a==="cut"?g(y):x(y,{container:l})},X=$;function S(c){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(n){return typeof n}:S=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(c)}function Z(c,r){if(!(c instanceof r))throw new TypeError("Cannot call a class as a function")}function H(c,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function Q(c,r,n){return r&&H(c.prototype,r),n&&H(c,n),c}function ee(c,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(r&&r.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),r&&M(c,r)}function M(c,r){return M=Object.setPrototypeOf||function(a,l){return a.__proto__=l,a},M(c,r)}function te(c){var r=oe();return function(){var a=L(c),l;if(r){var y=L(this).constructor;l=Reflect.construct(a,arguments,y)}else l=a.apply(this,arguments);return ne(this,l)}}function ne(c,r){return r&&(S(r)==="object"||typeof r=="function")?r:re(c)}function re(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(c){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},L(c)}function P(c,r){var n="data-clipboard-".concat(c);if(r.hasAttribute(n))return r.getAttribute(n)}var ie=function(c){ee(n,c);var r=te(n);function n(a,l){var y;return Z(this,n),y=r.call(this),y.resolveOptions(l),y.listenClick(a),y}return Q(n,[{key:"resolveOptions",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof l.action=="function"?l.action:this.defaultAction,this.target=typeof l.target=="function"?l.target:this.defaultTarget,this.text=typeof l.text=="function"?l.text:this.defaultText,this.container=S(l.container)==="object"?l.container:document.body}},{key:"listenClick",value:function(l){var y=this;this.listener=s()(l,"click",function(E){return y.onClick(E)})}},{key:"onClick",value:function(l){var y=l.delegateTarget||l.currentTarget,E=this.action(y)||"copy",O=X({action:E,container:this.container,target:this.target(y),text:this.text(y)});this.emit(O?"success":"error",{action:E,text:O,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(l){return P("action",l)}},{key:"defaultTarget",value:function(l){var y=P("target",l);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(l){return P("text",l)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(l){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return x(l,y)}},{key:"cut",value:function(l){return g(l)}},{key:"isSupported",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof l=="string"?[l]:l,E=!!document.queryCommandSupported;return y.forEach(function(O){E=E&&!!document.queryCommandSupported(O)}),E}}]),n}(p()),ae=ie},828:function(u){var f=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function o(p,t){for(;p&&p.nodeType!==f;){if(typeof p.matches=="function"&&p.matches(t))return p;p=p.parentNode}}u.exports=o},438:function(u,f,e){var o=e(828);function p(d,m,i,v,g){var _=s.apply(this,arguments);return d.addEventListener(i,_,g),{destroy:function(){d.removeEventListener(i,_,g)}}}function t(d,m,i,v,g){return typeof d.addEventListener=="function"?p.apply(null,arguments):typeof i=="function"?p.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(_){return p(_,m,i,v,g)}))}function s(d,m,i,v){return function(g){g.delegateTarget=o(g.target,m),g.delegateTarget&&v.call(d,g)}}u.exports=t},879:function(u,f){f.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},f.nodeList=function(e){var o=Object.prototype.toString.call(e);return e!==void 0&&(o==="[object NodeList]"||o==="[object HTMLCollection]")&&"length"in e&&(e.length===0||f.node(e[0]))},f.string=function(e){return typeof e=="string"||e instanceof String},f.fn=function(e){var o=Object.prototype.toString.call(e);return o==="[object Function]"}},370:function(u,f,e){var o=e(879),p=e(438);function t(i,v,g){if(!i&&!v&&!g)throw new Error("Missing required arguments");if(!o.string(v))throw new TypeError("Second argument must be a String");if(!o.fn(g))throw new TypeError("Third argument must be a Function");if(o.node(i))return s(i,v,g);if(o.nodeList(i))return d(i,v,g);if(o.string(i))return m(i,v,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function s(i,v,g){return i.addEventListener(v,g),{destroy:function(){i.removeEventListener(v,g)}}}function d(i,v,g){return Array.prototype.forEach.call(i,function(_){_.addEventListener(v,g)}),{destroy:function(){Array.prototype.forEach.call(i,function(_){_.removeEventListener(v,g)})}}}function m(i,v,g){return p(document.body,i,v,g)}u.exports=t},817:function(u){function f(e){var o;if(e.nodeName==="SELECT")e.focus(),o=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var p=e.hasAttribute("readonly");p||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),p||e.removeAttribute("readonly"),o=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var t=window.getSelection(),s=document.createRange();s.selectNodeContents(e),t.removeAllRanges(),t.addRange(s),o=t.toString()}return o}u.exports=f},279:function(u){function f(){}f.prototype={on:function(e,o,p){var t=this.e||(this.e={});return(t[e]||(t[e]=[])).push({fn:o,ctx:p}),this},once:function(e,o,p){var t=this;function s(){t.off(e,s),o.apply(p,arguments)}return s._=o,this.on(e,s,p)},emit:function(e){var o=[].slice.call(arguments,1),p=((this.e||(this.e={}))[e]||[]).slice(),t=0,s=p.length;for(t;t<s;t++)p[t].fn.apply(p[t].ctx,o);return this},off:function(e,o){var p=this.e||(this.e={}),t=p[e],s=[];if(t&&o)for(var d=0,m=t.length;d<m;d++)t[d].fn!==o&&t[d].fn._!==o&&s.push(t[d]);return s.length?p[e]=s:delete p[e],this}},u.exports=f,u.exports.TinyEmitter=f}},k={};function h(u){if(k[u])return k[u].exports;var f=k[u]={exports:{}};return b[u](f,f.exports,h),f.exports}return function(){h.n=function(u){var f=u&&u.__esModule?function(){return u.default}:function(){return u};return h.d(f,{a:f}),f}}(),function(){h.d=function(u,f){for(var e in f)h.o(f,e)&&!h.o(u,e)&&Object.defineProperty(u,e,{enumerable:!0,get:f[e]})}}(),function(){h.o=function(u,f){return Object.prototype.hasOwnProperty.call(u,f)}}(),h(686)}().default})})(j);var me=j.exports;const ve=le(me),ge=B("div",{id:"editJsonCopy"},null,-1),he={class:"dialog-footer"},Ee=Y({__name:"vueFile",setup(C,{expose:D}){const b=K(!1),k=K(),h=t=>{let s="";const d="";return t&&t.list.forEach(m=>{var i;(i=m.customRules)!=null&&i.length&&m.customRules.forEach(v=>{v.type==="methods"&&v.methods&&(s+=`// todo 请完善${m.item.label}校验方法
  provide("${v.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:s,sourceFun:d}},u=t=>{b.value=!0;const s=h(t),{submitUrl:d="",editUrl:m="",requestUrl:i=""}=t.config;i&&delete t.config.requestUrl,m&&delete t.config.editUrl,d&&delete t.config.submitUrl;const v=`<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :data="formData"
      request-url="${i}"
      submit-url="${d}"
      edit-url="${m}"
      :before-submit="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${q(t)})
    // todo 存在编辑时，可根据路由等参数设置当前表单模式 1新增 2编辑
  const formType = computed(() => {
     return 1
  })
  ${s.rulesMethods}
  ${s.sourceFun}
  // 表单提交时参数处理
  const beforeSubmit = (params)=>{
    // 如编辑时添加参数
    //  params.id='xxx'
    return params
  }

<\/script>`;U(()=>{k.value=F(v,"editJsonCopy","html")})},f=t=>{var R,x,w,$;const s=((R=t.config)==null?void 0:R.openType)==="dialog",d=((x=t.config)==null?void 0:x.dialogWidth)||"600px",m=((w=t.config)==null?void 0:w.requestUrl)||"";m&&delete t.config.requestUrl;const i=(($=t.config)==null?void 0:$.deleteUrl)||"";i&&delete t.config.deleteUrl;let v="",g="",_="";s&&(_='@btn-click="listBtnClick"',v=`<el-dialog
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
        submit-url=""
        edit-url=""
        :before-submit="beforeSubmit"
        :after-submit="afterSubmit"
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
       // eslint-disable-next-line no-irregular-whitespace
       　 // todo 当表单内容字段比较少，所需值从列表数据就可以获取
       // eslint-disable-next-line no-irregular-whitespace
       　　// formEl.value.setValue(row)
          formEl.value.getData({ id: row.id })
        })
      }
    }
  }
  // 提交表单前事件
  const beforeSubmit = (params) => {
    if(dialog.formType===2){ // 编辑模式下添加参数
      params.id = dialog.editId
    }
    return params
  }
  // 提交表单后事件
  const afterSubmit = (type) => {
    if (type === 'success') {
      // 添加成功，刷新列表数据
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
      request-url="${m}"
      delete-url="${i}"
      :search-data="searchData"
      :data="tableData"
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
<\/script>`;U(()=>{k.value=F(A,"editJsonCopy","html")})},e=t=>{b.value=!0;let s="",d="",m="";const i=t.config.style;i&&(s=`<style>${i}
</style>`),t.config.requestUrl&&(m="import { getGlobalData } from '@/views/design/screen/getData'",d=`const globalScreen = ref({})
  provide('globalScreen', globalScreen)
  const {requestUrl, afterResponse, beforeRequest, method} = screenData.value.config
  getGlobalData({requestUrl, afterResponse, beforeRequest, method})
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
${s}`;U(()=>{k.value=F(v,"editJsonCopy","html")})},o=t=>{U(()=>{const s=new ve(t.target,{text:()=>k.value.getValue()});s.on("success",function(){J({message:"复制成功！",type:"success"}),s.destroy()}),s.on("error",function(){J.error("复制失败"),s.destroy()}),s.onClick(t)})},p=()=>{var i;const t="data:text/csv;charset=utf-8,"+((i=k.value)==null?void 0:i.getValue()),s=new Date().getTime()+".vue",d=encodeURI(t),m=document.createElement("a");m.setAttribute("href",d),m.setAttribute("download",s),m.click()};return D({open:u,openTable:f,openScreen:e}),(t,s)=>{const d=I("el-button"),m=I("el-dialog");return N(),W(m,{modelValue:b.value,"onUpdate:modelValue":s[0]||(s[0]=i=>b.value=i),title:"导出vue文件",class:"export-dialog",width:"80%"},{footer:T(()=>[B("div",he,[z(d,{type:"primary",onClick:o},{default:T(()=>[V(" 复制数据 ")]),_:1}),z(d,{type:"primary",onClick:p},{default:T(()=>[V(" 导出代码 ")]),_:1})])]),default:T(()=>[ge]),_:1},8,["modelValue"])}}}),be={class:"main-tools"},we=Y({__name:"headTools",props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:["click"],setup(C,{emit:D}){const b=C,k=ce(()=>{var f,e;const u=[{icon:"del",label:"清空",key:1},{icon:"eye",label:"预览",key:2},{icon:"json",label:"生成脚本预览",key:3},{icon:"vue",label:"导出vue文件",key:4},{icon:"save",label:"保存",key:5}];return(f=b.showKey)!=null&&f.length?u.filter(o=>b.showKey.includes(o.key)):(e=b.hideKey)!=null&&e.length?u.filter(o=>!b.hideKey.includes(o.key)):u}),h=u=>{D("click",u)};return(u,f)=>{const e=I("el-button");return N(),G("div",be,[ue(u.$slots,"default"),(N(!0),G(fe,null,de(k.value,o=>(N(),W(e,{link:"",type:"primary",onClick:p=>h(o.icon),key:o.icon},{default:T(()=>[B("i",{class:pe(["icon-"+o.icon])},null,2),V(ye(o.label),1)]),_:2},1032,["onClick"]))),128))])}}});export{we as _,Ee as a};
