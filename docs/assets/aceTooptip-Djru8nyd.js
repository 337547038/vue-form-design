import{r as e,t}from"./chunk-DECur_0Z.js";import{A as n,H as r,U as i,V as a,Wt as o,b as s,d as c,f as l,ft as u,i as d,m as f,nt as p,qt as m,u as h,v as g,y as _,z as v}from"./runtime-core.esm-bundler-DxlV0Puh.js";import{r as y}from"./es-CRpim5xc.js";import{s as b,t as x}from"./design-AIDqEmbN.js";var S={class:`main-tools`},C=s({__name:`headTools`,props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:[`click`],setup(e,{emit:t}){let n=e,s=t,u=h(()=>{let e=[{icon:`del`,label:`清空`,key:1},{icon:`eye`,label:`预览`,key:2},{icon:`json`,label:`生成脚本预览`,key:3},{icon:`vue`,label:`导出vue文件`,key:4},{icon:`save`,label:`保存`,key:5}];return n.showKey?.length?e.filter(e=>n.showKey.includes(e.key)):n.hideKey?.length?e.filter(e=>!n.hideKey.includes(e.key)):e}),_=e=>{s(`click`,e)};return(e,t)=>{let n=i(`el-button`);return v(),f(`div`,S,[r(e.$slots,`default`),(v(!0),f(d,null,a(u.value,e=>(v(),l(n,{key:e.icon,link:``,type:`primary`,onClick:t=>_(e.icon)},{default:p(()=>[c(`i`,{class:o([`icon-`+e.icon])},null,2),g(m(e.label),1)]),_:2},1032,[`onClick`]))),128))])}}}),w=e(t(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define([],r):typeof e==`object`?e.ClipboardJS=r():n.ClipboardJS=r()})(e,function(){return(function(){var e={686:(function(e,t,n){n.d(t,{default:function(){return O}});var r=n(279),i=n.n(r),a=n(370),o=n.n(a),s=n(817),c=n.n(s);function l(e){try{return document.execCommand(e)}catch{return!1}}var u=function(e){var t=c()(e);return l(`cut`),t};function d(e){var t=document.documentElement.getAttribute(`dir`)===`rtl`,n=document.createElement(`textarea`);n.style.fontSize=`12pt`,n.style.border=`0`,n.style.padding=`0`,n.style.margin=`0`,n.style.position=`absolute`,n.style[t?`right`:`left`]=`-9999px`;var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top=`${r}px`,n.setAttribute(`readonly`,``),n.value=e,n}var f=function(e,t){var n=d(e);t.container.appendChild(n);var r=c()(n);return l(`copy`),n.remove(),r},p=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},n=``;return typeof e==`string`?n=f(e,t):e instanceof HTMLInputElement&&![`text`,`search`,`url`,`tel`,`password`].includes(e?.type)?n=f(e.value,t):(n=c()(e),l(`copy`)),n};function m(e){"@babel/helpers - typeof";return m=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},m(e)}var h=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.action,n=t===void 0?`copy`:t,r=e.container,i=e.target,a=e.text;if(n!==`copy`&&n!==`cut`)throw Error(`Invalid "action" value, use either "copy" or "cut"`);if(i!==void 0)if(i&&m(i)===`object`&&i.nodeType===1){if(n===`copy`&&i.hasAttribute(`disabled`))throw Error(`Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute`);if(n===`cut`&&(i.hasAttribute(`readonly`)||i.hasAttribute(`disabled`)))throw Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw Error(`Invalid "target" value, use a valid Element`);if(a)return p(a,{container:r});if(i)return n===`cut`?u(i):p(i,{container:r})};function g(e){"@babel/helpers - typeof";return g=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},g(e)}function _(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function b(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function S(e){var t=T();return function(){var n=E(e),r;if(t){var i=E(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return C(this,r)}}function C(e,t){return t&&(g(t)===`object`||typeof t==`function`)?t:w(e)}function w(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function T(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function D(e,t){var n=`data-clipboard-${e}`;if(t.hasAttribute(n))return t.getAttribute(n)}var O=function(e){b(n,e);var t=S(n);function n(e,r){var i;return _(this,n),i=t.call(this),i.resolveOptions(r),i.listenClick(e),i}return y(n,[{key:`resolveOptions`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof e.action==`function`?e.action:this.defaultAction,this.target=typeof e.target==`function`?e.target:this.defaultTarget,this.text=typeof e.text==`function`?e.text:this.defaultText,this.container=g(e.container)===`object`?e.container:document.body}},{key:`listenClick`,value:function(e){var t=this;this.listener=o()(e,`click`,function(e){return t.onClick(e)})}},{key:`onClick`,value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||`copy`,r=h({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(r?`success`:`error`,{action:n,text:r,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:`defaultAction`,value:function(e){return D(`action`,e)}},{key:`defaultTarget`,value:function(e){var t=D(`target`,e);if(t)return document.querySelector(t)}},{key:`defaultText`,value:function(e){return D(`text`,e)}},{key:`destroy`,value:function(){this.listener.destroy()}}],[{key:`copy`,value:function(e){return p(e,arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body})}},{key:`cut`,value:function(e){return u(e)}},{key:`isSupported`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[`copy`,`cut`],t=typeof e==`string`?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n&&=!!document.queryCommandSupported(e)}),n}}]),n}(i())}),828:(function(e){var t=9;if(typeof Element<`u`&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(e,n){for(;e&&e.nodeType!==t;){if(typeof e.matches==`function`&&e.matches(n))return e;e=e.parentNode}}e.exports=r}),438:(function(e,t,n){var r=n(828);function i(e,t,n,r,i){var a=o.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}function a(e,t,n,r,a){return typeof e.addEventListener==`function`?i.apply(null,arguments):typeof n==`function`?i.bind(null,document).apply(null,arguments):(typeof e==`string`&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return i(e,t,n,r,a)}))}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}e.exports=a}),879:(function(e,t){t.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return e!==void 0&&(n===`[object NodeList]`||n===`[object HTMLCollection]`)&&`length`in e&&(e.length===0||t.node(e[0]))},t.string=function(e){return typeof e==`string`||e instanceof String},t.fn=function(e){return Object.prototype.toString.call(e)===`[object Function]`}}),370:(function(e,t,n){var r=n(879),i=n(438);function a(e,t,n){if(!e&&!t&&!n)throw Error(`Missing required arguments`);if(!r.string(t))throw TypeError(`Second argument must be a String`);if(!r.fn(n))throw TypeError(`Third argument must be a Function`);if(r.node(e))return o(e,t,n);if(r.nodeList(e))return s(e,t,n);if(r.string(e))return c(e,t,n);throw TypeError(`First argument must be a String, HTMLElement, HTMLCollection, or NodeList`)}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function s(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function c(e,t,n){return i(document.body,e,t,n)}e.exports=a}),817:(function(e){function t(e){var t;if(e.nodeName===`SELECT`)e.focus(),t=e.value;else if(e.nodeName===`INPUT`||e.nodeName===`TEXTAREA`){var n=e.hasAttribute(`readonly`);n||e.setAttribute(`readonly`,``),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute(`readonly`),t=e.value}else{e.hasAttribute(`contenteditable`)&&e.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(e),r.removeAllRanges(),r.addRange(i),t=r.toString()}return t}e.exports=t}),279:(function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||={};return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function i(){r.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||={})[e]||[]).slice(),r=0,i=n.length;r<i;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||={},r=n[e],i=[];if(r&&t)for(var a=0,o=r.length;a<o;a++)r[a].fn!==t&&r[a].fn._!==t&&i.push(r[a]);return i.length?n[e]=i:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t})},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return(function(){n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t}})(),(function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}})(),n(686)})().default})}))(),1),T={class:`dialog-footer`},E=s({__name:`vueFile`,setup(e,{expose:t}){let r=u(!1),a=u(),o=e=>{let t=``;return e.list?.forEach(e=>{e.customRules?.length&&e.customRules.forEach(n=>{n.type===`methods`&&n.methods&&(t+=`// todo 请完善${e.item.label}校验方法
  provide("${n.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:t,sourceFun:``}},s=e=>{r.value=!0;let t=o(e),{submitUrl:i=``,requestUrl:s=``}=e.config;s&&delete e.config.requestUrl,i&&delete e.config.submitUrl;let c=`<template>
  <div>
    <ak-form
      ref="formNameEl"
      :operate-type="formType"
      :data="formData"
      request-url="${s}"
      submit-url="${i}"
      :before="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${b(e)})
    // todo 存在编辑时，可选add、edit、detail、design、search，默认add
  const formType = computed(() => {
     return 'add'
  })
  ${t.rulesMethods}
  ${t.sourceFun}
  // 表单提交时参数处理
  const beforeSubmit = (params,type,obj)=>{
    // params请求的参数，可根据type作判断，对params作修改后return回去
    // 需要将params参数return
    return params;
  }
<\/script>`;n(()=>{a.value=x(c,`editJsonCopy`,`html`)})},d=e=>{let t=e.config?.openType===`dialog`,i=e.config?.dialogWidth||`600px`,o=e.config?.requestUrl||``;o&&delete e.config.requestUrl;let s=e.config?.deleteUrl||``;s&&delete e.config.deleteUrl;let c=``,l=``,u=``;t&&(u=`@btn-click="listBtnClick"`,c=`<el-dialog
      destroy-on-close
      v-model="dialog.visible"
      :title="dialog.title"
      width="${i}"
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
    </el-dialog>`,l=`const formEl = ref()
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
`),r.value=!0;let d=`<template>
  <div>
    <ak-list
      ref="tableListEl"
      request-url="${o}"
      delete-url="${s}"
      :search-data="searchData"
      :data="tableData"
      ${u}>
    </ak-list>
    ${c}
  </div>
</template>

<script setup>
  // import {useRoute, useRouter} from 'vue-router'
  import { ref, nextTick,reactive } from 'vue'
  // const route = useRoute()
  // const router = useRouter()
  const tableListEl = ref()
  const searchData = ref({})
  const tableData = ref(${b(e)})
  ${l}
<\/script>`;n(()=>{a.value=x(d,`editJsonCopy`,`html`)})},f=e=>{r.value=!0;let t=``,i=``,o=``,s=e.config.style;s&&(t=`<style>${s}
</style>`),e.config.requestUrl&&(o=`import { getRequest } from '@/api'`,i=`
      const {requestUrl,method} = screenData.value.config
  getRequest(requestUrl,{},{method:method})
  .then((res: any) => {
      // 这里处理数据，直接对screenData设置值即可，无须使用全局或after之类的方法设值
      //
   })`);let c=`<template>
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
  ${o}
  import AKScreen from '@/views/design/screen/components/screen.vue' //可根据需求是否全局注册
  const loading = ref(true)
  const screenData = ref(${b(e)})
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
  ${i}
<\/script>
${t}`;n(()=>{a.value=x(c,`editJsonCopy`,`html`)})},m=e=>{n(()=>{let t=new w.default(e.target,{text:()=>a.value.getValue()});t.on(`success`,function(){y({message:`复制成功！`,type:`success`}),t.destroy()}),t.on(`error`,function(){y.error(`复制失败`),t.destroy()}),t.onClick(e)})},h=()=>{let e=`data:text/csv;charset=utf-8,`+a.value?.getValue(),t=new Date().getTime()+`.vue`,n=encodeURI(e),r=document.createElement(`a`);r.setAttribute(`href`,n),r.setAttribute(`download`,t),r.click()};return t({open:s,openTable:d,openScreen:f}),(e,t)=>{let n=i(`el-button`),a=i(`el-dialog`);return v(),l(a,{modelValue:r.value,"onUpdate:modelValue":t[0]||=e=>r.value=e,title:`导出vue文件`,class:`export-dialog`,width:`80%`},{footer:p(()=>[c(`div`,T,[_(n,{type:`primary`,onClick:m},{default:p(()=>[...t[1]||=[g(` 复制数据 `,-1)]]),_:1}),_(n,{type:`primary`,onClick:h},{default:p(()=>[...t[2]||=[g(` 导出代码 `,-1)]]),_:1})])]),default:p(()=>[t[3]||=c(`div`,{id:`editJsonCopy`},null,-1)]),_:1},8,[`modelValue`])}}}),D={after:`获取数据响应处理之后事件，可对请求返回数据进行处理；支持返回字符串形式`,before:`获取数据请求发送之前事件，可对请求参数进行处理；支持返回字符串形式`,editCss:`当前表单应用页的样式，类似于.vue文件中的style scoped中的样式`,change:`表单组件值改变事件。这里可修改其他组件的值。返回字符串形式可在@/utils/formChangeValue中处理`,editRules:`可参考UI组件表单校验，<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>详情点击</a>`,editProps:`可添加当前组件所有prop属性及事件方法`,creatJson:`可编辑修改或将已生成的脚本粘贴进来`,button:`可添加当前组件所有prop属性及事件方法`},O={form:`可选fetch/submit。使用时需对type作判断`,list:`可选fetch/submit/del/export。使用时需对type作判断`,tree:`可选del`},k=(e,t=`form`)=>{switch(e){case`before`:return`opt=(params) => {
  // params请求的参数，需对params作修改后return回去。
  console.log(params)
  return params
}`;case`beforeType`:return`opt=(params, type, obj) => {
  // params请求的参数，需对params作修改后return回去。
  // type当前操作类型。`+O[t]+`
  return params
}`;case`after`:return`opt=(res, success) => {
  // res接口返回结果，success是否成功；对结果修改后返回
  console.log(res, success)
  return res
}`;case`afterType`:return`opt=(res, success, type) => {
  // res接口返回结果，type当前操作事件类型，success是否成功；对结果修改后返回
  // `+O[t]+`
  console.log(type, res)
  return res
}`;case`afterScreen`:return`opt=(res, data) => {
  // res响应数据, 当前组件数据data
  // 这里可直接使用getScreenGlobal取得全局的数据
  console.log(res, data)
  return data //返回新的图表数据
}`;case`afterScreenGlobal`:return`opt=(res,success) => {
  // res响应数据，保存在window.getScreenGlobal
  return res //返回处理后的数据
}`;case`change`:return`opt=(obj) => {
  // 表单组件改变事件，可修改后返回新值
  // name:当前组件名称, value:当前值, model：当前表单值, prop:当前组件名称, options：选项数据
  console.log('change',obj)
  return obj.model
}`;case`renderFormatter`:return`opt=(val,row) => {
  // 渲染前对字段值的预处理方法，需返回新值
  return val
}`}};export{C as i,D as n,E as r,k as t};