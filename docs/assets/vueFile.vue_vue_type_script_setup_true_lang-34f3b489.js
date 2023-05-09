import{i as W,j as le,b as I,c as N,d as z,F as ce,f as se,k as Y,w as T,e as B,s as ue,h as V,t as fe,u as de,af as pe,ag as ye,r as K,g as J,Z as q,C as $,a8 as F,W as G}from"./index-96eddb90.js";const me={class:"main-tools"},Ee=W({__name:"headTools",props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:["click"],setup(C,{emit:D}){const b=C,k=le(()=>{var u,e;const f=[{icon:"del",label:"清空",key:1},{icon:"eye",label:"预览",key:2},{icon:"json",label:"生成脚本预览",key:3},{icon:"vue",label:"导出vue文件",key:4},{icon:"save",label:"保存",key:5}];return(u=b.showKey)!=null&&u.length?f.filter(o=>b.showKey.includes(o.key)):(e=b.hideKey)!=null&&e.length?f.filter(o=>!b.hideKey.includes(o.key)):f}),h=f=>{D("click",f)};return(f,u)=>{const e=I("el-button");return N(),z("div",me,[(N(!0),z(ce,null,se(de(k),o=>(N(),Y(e,{link:"",type:"primary",onClick:p=>h(o.icon),key:o.icon},{default:T(()=>[B("i",{class:ue(["icon-"+o.icon])},null,2),V(fe(o.label),1)]),_:2},1032,["onClick"]))),128))])}}});var j={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(C,D){(function(k,h){C.exports=h()})(pe,function(){return function(){var b={686:function(f,u,e){e.d(u,{default:function(){return ae}});var o=e(279),p=e.n(o),t=e(370),l=e.n(t),d=e(817),m=e.n(d);function i(s){try{return document.execCommand(s)}catch{return!1}}var v=function(r){var n=m()(r);return i("cut"),n},g=v;function _(s){var r=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[r?"right":"left"]="-9999px";var a=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(a,"px"),n.setAttribute("readonly",""),n.value=s,n}var A=function(r,n){var a=_(r);n.container.appendChild(a);var c=m()(a);return i("copy"),a.remove(),c},R=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},a="";return typeof r=="string"?a=A(r,n):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?a=A(r.value,n):(a=m()(r),i("copy")),a},w=R;function S(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(n){return typeof n}:S=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(s)}var U=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.action,a=n===void 0?"copy":n,c=r.container,y=r.target,E=r.text;if(a!=="copy"&&a!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&S(y)==="object"&&y.nodeType===1){if(a==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(a==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return w(E,{container:c});if(y)return a==="cut"?g(y):w(y,{container:c})},X=U;function x(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(n){return typeof n}:x=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(s)}function Z(s,r){if(!(s instanceof r))throw new TypeError("Cannot call a class as a function")}function H(s,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(s,a.key,a)}}function Q(s,r,n){return r&&H(s.prototype,r),n&&H(s,n),s}function ee(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(r&&r.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),r&&M(s,r)}function M(s,r){return M=Object.setPrototypeOf||function(a,c){return a.__proto__=c,a},M(s,r)}function te(s){var r=oe();return function(){var a=L(s),c;if(r){var y=L(this).constructor;c=Reflect.construct(a,arguments,y)}else c=a.apply(this,arguments);return ne(this,c)}}function ne(s,r){return r&&(x(r)==="object"||typeof r=="function")?r:re(s)}function re(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(s){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},L(s)}function P(s,r){var n="data-clipboard-".concat(s);if(r.hasAttribute(n))return r.getAttribute(n)}var ie=function(s){ee(n,s);var r=te(n);function n(a,c){var y;return Z(this,n),y=r.call(this),y.resolveOptions(c),y.listenClick(a),y}return Q(n,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=x(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var y=this;this.listener=l()(c,"click",function(E){return y.onClick(E)})}},{key:"onClick",value:function(c){var y=c.delegateTarget||c.currentTarget,E=this.action(y)||"copy",O=X({action:E,container:this.container,target:this.target(y),text:this.text(y)});this.emit(O?"success":"error",{action:E,text:O,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(c){return P("action",c)}},{key:"defaultTarget",value:function(c){var y=P("target",c);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(c){return P("text",c)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(c){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return w(c,y)}},{key:"cut",value:function(c){return g(c)}},{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof c=="string"?[c]:c,E=!!document.queryCommandSupported;return y.forEach(function(O){E=E&&!!document.queryCommandSupported(O)}),E}}]),n}(p()),ae=ie},828:function(f){var u=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function o(p,t){for(;p&&p.nodeType!==u;){if(typeof p.matches=="function"&&p.matches(t))return p;p=p.parentNode}}f.exports=o},438:function(f,u,e){var o=e(828);function p(d,m,i,v,g){var _=l.apply(this,arguments);return d.addEventListener(i,_,g),{destroy:function(){d.removeEventListener(i,_,g)}}}function t(d,m,i,v,g){return typeof d.addEventListener=="function"?p.apply(null,arguments):typeof i=="function"?p.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(_){return p(_,m,i,v,g)}))}function l(d,m,i,v){return function(g){g.delegateTarget=o(g.target,m),g.delegateTarget&&v.call(d,g)}}f.exports=t},879:function(f,u){u.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},u.nodeList=function(e){var o=Object.prototype.toString.call(e);return e!==void 0&&(o==="[object NodeList]"||o==="[object HTMLCollection]")&&"length"in e&&(e.length===0||u.node(e[0]))},u.string=function(e){return typeof e=="string"||e instanceof String},u.fn=function(e){var o=Object.prototype.toString.call(e);return o==="[object Function]"}},370:function(f,u,e){var o=e(879),p=e(438);function t(i,v,g){if(!i&&!v&&!g)throw new Error("Missing required arguments");if(!o.string(v))throw new TypeError("Second argument must be a String");if(!o.fn(g))throw new TypeError("Third argument must be a Function");if(o.node(i))return l(i,v,g);if(o.nodeList(i))return d(i,v,g);if(o.string(i))return m(i,v,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function l(i,v,g){return i.addEventListener(v,g),{destroy:function(){i.removeEventListener(v,g)}}}function d(i,v,g){return Array.prototype.forEach.call(i,function(_){_.addEventListener(v,g)}),{destroy:function(){Array.prototype.forEach.call(i,function(_){_.removeEventListener(v,g)})}}}function m(i,v,g){return p(document.body,i,v,g)}f.exports=t},817:function(f){function u(e){var o;if(e.nodeName==="SELECT")e.focus(),o=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var p=e.hasAttribute("readonly");p||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),p||e.removeAttribute("readonly"),o=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var t=window.getSelection(),l=document.createRange();l.selectNodeContents(e),t.removeAllRanges(),t.addRange(l),o=t.toString()}return o}f.exports=u},279:function(f){function u(){}u.prototype={on:function(e,o,p){var t=this.e||(this.e={});return(t[e]||(t[e]=[])).push({fn:o,ctx:p}),this},once:function(e,o,p){var t=this;function l(){t.off(e,l),o.apply(p,arguments)}return l._=o,this.on(e,l,p)},emit:function(e){var o=[].slice.call(arguments,1),p=((this.e||(this.e={}))[e]||[]).slice(),t=0,l=p.length;for(t;t<l;t++)p[t].fn.apply(p[t].ctx,o);return this},off:function(e,o){var p=this.e||(this.e={}),t=p[e],l=[];if(t&&o)for(var d=0,m=t.length;d<m;d++)t[d].fn!==o&&t[d].fn._!==o&&l.push(t[d]);return l.length?p[e]=l:delete p[e],this}},f.exports=u,f.exports.TinyEmitter=u}},k={};function h(f){if(k[f])return k[f].exports;var u=k[f]={exports:{}};return b[f](u,u.exports,h),u.exports}return function(){h.n=function(f){var u=f&&f.__esModule?function(){return f.default}:function(){return f};return h.d(u,{a:u}),u}}(),function(){h.d=function(f,u){for(var e in u)h.o(u,e)&&!h.o(f,e)&&Object.defineProperty(f,e,{enumerable:!0,get:u[e]})}}(),function(){h.o=function(f,u){return Object.prototype.hasOwnProperty.call(f,u)}}(),h(686)}().default})})(j);var ve=j.exports;const ge=ye(ve),he=B("div",{id:"editJsonCopy"},null,-1),be={class:"dialog-footer"},Se=W({__name:"vueFile",setup(C,{expose:D}){const b=K(!1),k=K(),h=t=>{let l="",d="";return t&&t.list.forEach(m=>{var i;(i=m.customRules)!=null&&i.length&&m.customRules.forEach(v=>{v.type==="methods"&&v.methods&&(l+=`// todo 请完善${m.item.label}校验方法
  provide("${v.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:l,sourceFun:d}},f=t=>{b.value=!0;const l=h(t),{addUrl:d,editUrl:m,requestUrl:i}=t.config;i&&delete t.config.requestUrl,m&&delete t.config.editUrl,d&&delete t.config.addUrl;const v=`<template>
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

<\/script>`;$(()=>{k.value=F(v,"editJsonCopy","html")})},u=t=>{var R,w,S,U;const l=((R=t.config)==null?void 0:R.openType)==="dialog",d=((w=t.config)==null?void 0:w.dialogWidth)||"600px",m=(S=t.config)==null?void 0:S.requestUrl;m&&delete t.config.requestUrl;const i=(U=t.config)==null?void 0:U.deleteUrl;i&&delete t.config.deleteUrl;let v="",g="",_="";l&&(_='@btn-click="listBtnClick"',v=`<el-dialog
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
${l}`;$(()=>{k.value=F(v,"editJsonCopy","html")})},o=t=>{$(()=>{const l=new ge(t.target,{text:()=>k.value.getValue()});l.on("success",function(){G({message:"复制成功！",type:"success"}),l.destroy()}),l.on("error",function(){G.error("复制失败"),l.destroy()}),l.onClick(t)})},p=()=>{var i;const t="data:text/csv;charset=utf-8,"+((i=k.value)==null?void 0:i.getValue()),l=new Date().getTime()+".vue",d=encodeURI(t),m=document.createElement("a");m.setAttribute("href",d),m.setAttribute("download",l),m.click()};return D({open:f,openTable:u,openScreen:e}),(t,l)=>{const d=I("el-button"),m=I("el-dialog");return N(),Y(m,{modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=i=>b.value=i),title:"导出vue文件","custom-class":"export-dialog",width:"80%"},{footer:T(()=>[B("div",be,[J(d,{size:"small",type:"primary",onClick:o},{default:T(()=>[V(" 复制数据 ")]),_:1}),J(d,{type:"primary",size:"small",onClick:p},{default:T(()=>[V(" 导出代码 ")]),_:1})])]),default:T(()=>[he]),_:1},8,["modelValue"])}}});export{Ee as _,Se as a};
