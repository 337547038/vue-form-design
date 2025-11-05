import{ad as le,d as Y,l as K,r as F,b as W,o as O,w as T,f as I,j,m as V,a0 as M,q as L,aa as q,N as H,h as ue,c as z,ae as fe,F as de,a as pe,n as me,t as ye}from"./index-CYQNA_yI.js";var $={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */var ge=$.exports,J;function ve(){return J||(J=1,(function(x,k){(function(w,h){x.exports=h()})(ge,function(){return(function(){var b={686:(function(m,a,e){e.d(a,{default:function(){return ce}});var f=e(279),u=e.n(f),t=e(370),o=e.n(t),d=e(817),y=e.n(d);function s(l){try{return document.execCommand(l)}catch{return!1}}var v=function(n){var r=y()(n);return s("cut"),r},g=v;function E(l){var n=document.documentElement.getAttribute("dir")==="rtl",r=document.createElement("textarea");r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return r.style.top="".concat(i,"px"),r.setAttribute("readonly",""),r.value=l,r}var C=function(n,r){var i=E(n);r.container.appendChild(i);var c=y()(i);return s("copy"),i.remove(),c},X=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},i="";return typeof n=="string"?i=C(n,r):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n?.type)?i=C(n.value,r):(i=y()(n),s("copy")),i},N=X;function A(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(r){return typeof r}:A=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},A(l)}var Q=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.action,i=r===void 0?"copy":r,c=n.container,p=n.target,_=n.text;if(i!=="copy"&&i!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(p!==void 0)if(p&&A(p)==="object"&&p.nodeType===1){if(i==="copy"&&p.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(i==="cut"&&(p.hasAttribute("readonly")||p.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return N(_,{container:c});if(p)return i==="cut"?g(p):N(p,{container:c})},Z=Q;function S(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(r){return typeof r}:S=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},S(l)}function ee(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function B(l,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}function te(l,n,r){return n&&B(l.prototype,n),r&&B(l,r),l}function re(l,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(n&&n.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),n&&U(l,n)}function U(l,n){return U=Object.setPrototypeOf||function(i,c){return i.__proto__=c,i},U(l,n)}function ne(l){var n=ae();return function(){var i=D(l),c;if(n){var p=D(this).constructor;c=Reflect.construct(i,arguments,p)}else c=i.apply(this,arguments);return oe(this,c)}}function oe(l,n){return n&&(S(n)==="object"||typeof n=="function")?n:ie(l)}function ie(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function ae(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function D(l){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},D(l)}function P(l,n){var r="data-clipboard-".concat(l);if(n.hasAttribute(r))return n.getAttribute(r)}var se=(function(l){re(r,l);var n=ne(r);function r(i,c){var p;return ee(this,r),p=n.call(this),p.resolveOptions(c),p.listenClick(i),p}return te(r,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=S(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var p=this;this.listener=o()(c,"click",function(_){return p.onClick(_)})}},{key:"onClick",value:function(c){var p=c.delegateTarget||c.currentTarget,_=this.action(p)||"copy",R=Z({action:_,container:this.container,target:this.target(p),text:this.text(p)});this.emit(R?"success":"error",{action:_,text:R,trigger:p,clearSelection:function(){p&&p.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(c){return P("action",c)}},{key:"defaultTarget",value:function(c){var p=P("target",c);if(p)return document.querySelector(p)}},{key:"defaultText",value:function(c){return P("text",c)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(c){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return N(c,p)}},{key:"cut",value:function(c){return g(c)}},{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],p=typeof c=="string"?[c]:c,_=!!document.queryCommandSupported;return p.forEach(function(R){_=_&&!!document.queryCommandSupported(R)}),_}}]),r})(u()),ce=se}),828:(function(m){var a=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function f(u,t){for(;u&&u.nodeType!==a;){if(typeof u.matches=="function"&&u.matches(t))return u;u=u.parentNode}}m.exports=f}),438:(function(m,a,e){var f=e(828);function u(d,y,s,v,g){var E=o.apply(this,arguments);return d.addEventListener(s,E,g),{destroy:function(){d.removeEventListener(s,E,g)}}}function t(d,y,s,v,g){return typeof d.addEventListener=="function"?u.apply(null,arguments):typeof s=="function"?u.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(E){return u(E,y,s,v,g)}))}function o(d,y,s,v){return function(g){g.delegateTarget=f(g.target,y),g.delegateTarget&&v.call(d,g)}}m.exports=t}),879:(function(m,a){a.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},a.nodeList=function(e){var f=Object.prototype.toString.call(e);return e!==void 0&&(f==="[object NodeList]"||f==="[object HTMLCollection]")&&"length"in e&&(e.length===0||a.node(e[0]))},a.string=function(e){return typeof e=="string"||e instanceof String},a.fn=function(e){var f=Object.prototype.toString.call(e);return f==="[object Function]"}}),370:(function(m,a,e){var f=e(879),u=e(438);function t(s,v,g){if(!s&&!v&&!g)throw new Error("Missing required arguments");if(!f.string(v))throw new TypeError("Second argument must be a String");if(!f.fn(g))throw new TypeError("Third argument must be a Function");if(f.node(s))return o(s,v,g);if(f.nodeList(s))return d(s,v,g);if(f.string(s))return y(s,v,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(s,v,g){return s.addEventListener(v,g),{destroy:function(){s.removeEventListener(v,g)}}}function d(s,v,g){return Array.prototype.forEach.call(s,function(E){E.addEventListener(v,g)}),{destroy:function(){Array.prototype.forEach.call(s,function(E){E.removeEventListener(v,g)})}}}function y(s,v,g){return u(document.body,s,v,g)}m.exports=t}),817:(function(m){function a(e){var f;if(e.nodeName==="SELECT")e.focus(),f=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var u=e.hasAttribute("readonly");u||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),u||e.removeAttribute("readonly"),f=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var t=window.getSelection(),o=document.createRange();o.selectNodeContents(e),t.removeAllRanges(),t.addRange(o),f=t.toString()}return f}m.exports=a}),279:(function(m){function a(){}a.prototype={on:function(e,f,u){var t=this.e||(this.e={});return(t[e]||(t[e]=[])).push({fn:f,ctx:u}),this},once:function(e,f,u){var t=this;function o(){t.off(e,o),f.apply(u,arguments)}return o._=f,this.on(e,o,u)},emit:function(e){var f=[].slice.call(arguments,1),u=((this.e||(this.e={}))[e]||[]).slice(),t=0,o=u.length;for(t;t<o;t++)u[t].fn.apply(u[t].ctx,f);return this},off:function(e,f){var u=this.e||(this.e={}),t=u[e],o=[];if(t&&f)for(var d=0,y=t.length;d<y;d++)t[d].fn!==f&&t[d].fn._!==f&&o.push(t[d]);return o.length?u[e]=o:delete u[e],this}},m.exports=a,m.exports.TinyEmitter=a})},w={};function h(m){if(w[m])return w[m].exports;var a=w[m]={exports:{}};return b[m](a,a.exports,h),a.exports}return(function(){h.n=function(m){var a=m&&m.__esModule?function(){return m.default}:function(){return m};return h.d(a,{a}),a}})(),(function(){h.d=function(m,a){for(var e in a)h.o(a,e)&&!h.o(m,e)&&Object.defineProperty(m,e,{enumerable:!0,get:a[e]})}})(),(function(){h.o=function(m,a){return Object.prototype.hasOwnProperty.call(m,a)}})(),h(686)})().default})})($)),$.exports}var he=ve();const be=le(he),Ee={class:"dialog-footer"},xe=Y({__name:"vueFile",setup(x,{expose:k}){const b=K(!1),w=K(),h=t=>{let o="";return t.list?.forEach(y=>{y.customRules?.length&&y.customRules.forEach(s=>{s.type==="methods"&&s.methods&&(o+=`// todo 请完善${y.item.label}校验方法
  provide("${s.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:o,sourceFun:""}},m=t=>{b.value=!0;const o=h(t),{submitUrl:d="",requestUrl:y=""}=t.config;y&&delete t.config.requestUrl,d&&delete t.config.submitUrl;const s=`<template>
  <div>
    <ak-form
      ref="formNameEl"
      :operate-type="formType"
      :data="formData"
      request-url="${y}"
      submit-url="${d}"
      :before="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${M(t)})
    // todo 存在编辑时，可选add、edit、detail、design、search，默认add
  const formType = computed(() => {
     return 'add'
  })
  ${o.rulesMethods}
  ${o.sourceFun}
  // 表单提交时参数处理
  const beforeSubmit = (params,type,obj)=>{
    // params请求的参数，可根据type作判断，对params作修改后return回去
    // 需要将params参数return
    return params;
  }
<\/script>`;L(()=>{w.value=q(s,"editJsonCopy","html")})},a=t=>{const o=t.config?.openType==="dialog",d=t.config?.dialogWidth||"600px",y=t.config?.requestUrl||"";y&&delete t.config.requestUrl;const s=t.config?.deleteUrl||"";s&&delete t.config.deleteUrl;let v="",g="",E="";o&&(E='@btn-click="listBtnClick"',v=`<el-dialog
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
  // 点击弹窗取消按钮时
  const dialogBtnClick = (type) => {
    if (type === 'reset') {
      closeResetDialog()
    }
  }
`),b.value=!0;const C=`<template>
  <div>
    <ak-list
      ref="tableListEl"
      request-url="${y}"
      delete-url="${s}"
      :search-data="searchData"
      :data="tableData"
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
<\/script>`;L(()=>{w.value=q(C,"editJsonCopy","html")})},e=t=>{b.value=!0;let o="",d="",y="";const s=t.config.style;s&&(o=`<style>${s}
</style>`),t.config.requestUrl&&(y="import { getRequest } from '@/api'",d=`
      const {requestUrl,method} = screenData.value.config
  getRequest(requestUrl,{},{method:method})
  .then((res: any) => {
      // 这里处理数据，直接对screenData设置值即可，无须使用全局或after之类的方法设值
      //
   })`);const v=`<template>
  <div :style="screenStyle" class="design-canvas">
    <AKScreen
      v-for="(element, index) in screenData.list"
      :key="index"
      :data="element"
    ></AKScreen>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  ${y}
  import AKScreen from '@/views/design/screen/components/screen.vue' //可根据需求是否全局注册
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
${o}`;L(()=>{w.value=q(v,"editJsonCopy","html")})},f=t=>{L(()=>{const o=new be(t.target,{text:()=>w.value.getValue()});o.on("success",function(){H({message:"复制成功！",type:"success"}),o.destroy()}),o.on("error",function(){H.error("复制失败"),o.destroy()}),o.onClick(t)})},u=()=>{const t="data:text/csv;charset=utf-8,"+w.value?.getValue(),o=new Date().getTime()+".vue",d=encodeURI(t),y=document.createElement("a");y.setAttribute("href",d),y.setAttribute("download",o),y.click()};return k({open:m,openTable:a,openScreen:e}),(t,o)=>{const d=F("el-button"),y=F("el-dialog");return O(),W(y,{modelValue:b.value,"onUpdate:modelValue":o[0]||(o[0]=s=>b.value=s),title:"导出vue文件",class:"export-dialog",width:"80%"},{footer:T(()=>[I("div",Ee,[j(d,{type:"primary",onClick:f},{default:T(()=>[...o[1]||(o[1]=[V(" 复制数据 ",-1)])]),_:1}),j(d,{type:"primary",onClick:u},{default:T(()=>[...o[2]||(o[2]=[V(" 导出代码 ",-1)])]),_:1})])]),default:T(()=>[o[3]||(o[3]=I("div",{id:"editJsonCopy"},null,-1))]),_:1},8,["modelValue"])}}}),we={class:"main-tools"},Se=Y({__name:"headTools",props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:["click"],setup(x,{emit:k}){const b=x,w=k,h=ue(()=>{const a=[{icon:"del",label:"清空",key:1},{icon:"eye",label:"预览",key:2},{icon:"json",label:"生成脚本预览",key:3},{icon:"vue",label:"导出vue文件",key:4},{icon:"save",label:"保存",key:5}];return b.showKey?.length?a.filter(e=>b.showKey.includes(e.key)):b.hideKey?.length?a.filter(e=>!b.hideKey.includes(e.key)):a}),m=a=>{w("click",a)};return(a,e)=>{const f=F("el-button");return O(),z("div",we,[fe(a.$slots,"default"),(O(!0),z(de,null,pe(h.value,u=>(O(),W(f,{key:u.icon,link:"",type:"primary",onClick:t=>m(u.icon)},{default:T(()=>[I("i",{class:me(["icon-"+u.icon])},null,2),V(ye(u.label),1)]),_:2},1032,["onClick"]))),128))])}}}),Te={after:"获取数据响应处理之后事件，可对请求返回数据进行处理；支持返回字符串形式",before:"获取数据请求发送之前事件，可对请求参数进行处理；支持返回字符串形式",editCss:"当前表单应用页的样式，类似于.vue文件中的style scoped中的样式",change:"表单组件值改变事件。这里可修改其他组件的值。返回字符串形式可在@/utils/formChangeValue中处理",editRules:"可参考UI组件表单校验，<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>详情点击</a>",editProps:"可添加当前组件所有prop属性及事件方法",creatJson:"可编辑修改或将已生成的脚本粘贴进来",button:"可添加当前组件所有prop属性及事件方法"},G={form:"可选fetch/submit。使用时需对type作判断",list:"可选fetch/submit/del/export。使用时需对type作判断",tree:"可选del"},Ce=(x,k="form")=>{switch(x){case"before":return`opt=(params) => {
  // params请求的参数，需对params作修改后return回去。
  console.log(params)
  return params
}`;case"beforeType":return`opt=(params, type, obj) => {
  // params请求的参数，需对params作修改后return回去。
  // type当前操作类型。`+G[k]+`
  return params
}`;case"after":return`opt=(res, success) => {
  // res接口返回结果，success是否成功；对结果修改后返回
  console.log(res, success)
  return res
}`;case"afterType":return`opt=(res, success, type) => {
  // res接口返回结果，type当前操作事件类型，success是否成功；对结果修改后返回
  // `+G[k]+`
  console.log(type, res)
  return res
}`;case"afterScreen":return`opt=(res, data) => {
  // res响应数据, 当前组件数据data
  // 这里可直接使用getScreenGlobal取得全局的数据
  console.log(res, data)
  return data //返回新的图表数据
}`;case"afterScreenGlobal":return`opt=(res,success) => {
  // res响应数据，保存在window.getScreenGlobal
  return res //返回处理后的数据
}`;case"change":return`opt=(obj) => {
  // 表单组件改变事件，可修改后返回新值
  // name:当前组件名称, value:当前值, model：当前表单值, prop:当前组件名称, options：选项数据
  console.log('change',obj)
  return obj.model
}`;case"renderFormatter":return`opt=(val,row) => {
  // 渲染前对字段值的预处理方法，需返回新值
  return val
}`}};export{Se as _,xe as a,Ce as b,Te as g};
