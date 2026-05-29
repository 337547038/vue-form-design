import{r as e,t}from"./chunk-DECur_0Z.js";import{A as n,H as r,I as i,L as a,U as o,V as s,Wt as c,b as l,d as u,f as d,ft as f,i as p,m,nt as h,p as g,qt as _,u as v,ut as y,v as b,y as x,z as S}from"./runtime-core.esm-bundler-DxlV0Puh.js";import{r as C}from"./es-CRpim5xc.js";import{a as w,d as T,s as E,t as D,u as O}from"./design-CXJUx-T_.js";var k={class:`main-tools`},A=l({__name:`headTools`,props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:[`click`],setup(e,{emit:t}){let n=e,i=t,a=v(()=>{let e=[{icon:`del`,label:`清空`,key:1},{icon:`eye`,label:`预览`,key:2},{icon:`json`,label:`生成脚本预览`,key:3},{icon:`vue`,label:`导出vue文件`,key:4},{icon:`save`,label:`保存`,key:5}];return n.showKey?.length?e.filter(e=>n.showKey.includes(e.key)):n.hideKey?.length?e.filter(e=>!n.hideKey.includes(e.key)):e}),l=e=>{i(`click`,e)};return(e,t)=>{let n=o(`el-button`);return S(),m(`div`,k,[r(e.$slots,`default`),(S(!0),m(p,null,s(a.value,e=>(S(),d(n,{key:e.icon,link:``,type:`primary`,onClick:t=>l(e.icon)},{default:h(()=>[u(`i`,{class:c([`icon-`+e.icon])},null,2),b(_(e.label),1)]),_:2},1032,[`onClick`]))),128))])}}}),j={after:`获取数据响应处理之后事件，可对请求返回数据进行处理；支持返回字符串形式`,before:`获取数据请求发送之前事件，可对请求参数进行处理；支持返回字符串形式`,editCss:`当前应用页的样式，类似于.vue文件中的style scoped中的样式`,change:`表单组件值改变事件。这里可修改其他组件的值。支持返回字符串形式`,editRules:`可参考UI组件表单校验，<a href="https://element-plus.org/zh-CN/component/form" target="_blank" style="color: red">详情点击</a>`,editProps:`可添加当前组件所有prop属性及事件方法`,creatJson:`可编辑修改或将已生成的脚本粘贴进来`,button:`可添加当前组件所有prop属性及事件方法`},M={form:`分获取表单数据和提交表单两种，可选fetch/submit。使用时需对type作判断区分获取和提交`,list:`分表格获取数据及删除等，可选fetch/submit/del/export。使用时需对type作判断区分获取和提交`},N=(e,t=``)=>{switch(e){case`before`:return`opt=(params) => {
  // params请求的参数，需对params作修改后return回去。
  console.log(params)
  return params
}`;case`beforeType`:return`opt=(params, obj) => {
  // params请求的参数，需对params作修改后return回去。
  // obj包含路由及表单信息及请求类型type
  // `+(M[t]||``)+`
  return params
}`;case`after`:return`opt=(res, success) => {
  // res接口返回结果，success是否成功；对结果修改后返回
  console.log(res, success)
  return res
}`;case`afterType`:return`opt=(res, success, type) => {
  // res接口返回结果，type当前操作事件类型，success是否成功；对结果修改后返回
  // `+(M[t]||``)+`
  console.log(type, res)
  return res
}`;case`afterScreen`:return`opt=(res, data) => {
  // res响应数据, 当前组件数据data，也即图表的option
  console.log(res, data)
  // 如对当前组件进行赋值
  // data.xAxis.data = res.line.xAxis
  // data.series[0].data = res.line.data
  // data.series[1].data = res.line.data1
  // 还可以在静态编辑数据里使用字符串占位符，如 data:"{{getScreenComp.xAxis}}"
  // getScreenComp即为res的值"
  return data //返回新的图表数据
}`;case`afterScreenGlobal`:return`opt=(res,success) => {
  // res响应数据，保存在store中，在组件中可使用 {{getScreenGlobal.xxx}}获取
  return res //返回处理后的数据
}`;case`change`:return`opt=(params) => {
  // 表单组件改变事件，可修改后返回新值
  // prop:当前组件名称, value:当前值, model：当前表单值, parentProp:表格或flex布局时的prop, options：选项数据
  console.log('change',obj)
  return obj.model
}`;case`renderFormatter`:return`opt=(val,row) => {
  // 渲染前对字段值的预处理方法，需返回新值
  return val
}`;case`editRules`:return`opt = [
/*{required: true, message: 'Please input Activity name', trigger: 'blur'},
    {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
    {
      validator: (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'))
            } else {
              callback()
            }
          }
        }, 1000)
      }, trigger: 'blur'
    }*/
]`}},P=e(t(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define([],r):typeof e==`object`?e.ClipboardJS=r():n.ClipboardJS=r()})(e,function(){return(function(){var e={686:(function(e,t,n){n.d(t,{default:function(){return O}});var r=n(279),i=n.n(r),a=n(370),o=n.n(a),s=n(817),c=n.n(s);function l(e){try{return document.execCommand(e)}catch{return!1}}var u=function(e){var t=c()(e);return l(`cut`),t};function d(e){var t=document.documentElement.getAttribute(`dir`)===`rtl`,n=document.createElement(`textarea`);n.style.fontSize=`12pt`,n.style.border=`0`,n.style.padding=`0`,n.style.margin=`0`,n.style.position=`absolute`,n.style[t?`right`:`left`]=`-9999px`;var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top=`${r}px`,n.setAttribute(`readonly`,``),n.value=e,n}var f=function(e,t){var n=d(e);t.container.appendChild(n);var r=c()(n);return l(`copy`),n.remove(),r},p=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},n=``;return typeof e==`string`?n=f(e,t):e instanceof HTMLInputElement&&![`text`,`search`,`url`,`tel`,`password`].includes(e?.type)?n=f(e.value,t):(n=c()(e),l(`copy`)),n};function m(e){"@babel/helpers - typeof";return m=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},m(e)}var h=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.action,n=t===void 0?`copy`:t,r=e.container,i=e.target,a=e.text;if(n!==`copy`&&n!==`cut`)throw Error(`Invalid "action" value, use either "copy" or "cut"`);if(i!==void 0)if(i&&m(i)===`object`&&i.nodeType===1){if(n===`copy`&&i.hasAttribute(`disabled`))throw Error(`Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute`);if(n===`cut`&&(i.hasAttribute(`readonly`)||i.hasAttribute(`disabled`)))throw Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw Error(`Invalid "target" value, use a valid Element`);if(a)return p(a,{container:r});if(i)return n===`cut`?u(i):p(i,{container:r})};function g(e){"@babel/helpers - typeof";return g=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},g(e)}function _(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function b(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function S(e){var t=T();return function(){var n=E(e),r;if(t){var i=E(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return C(this,r)}}function C(e,t){return t&&(g(t)===`object`||typeof t==`function`)?t:w(e)}function w(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function T(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function D(e,t){var n=`data-clipboard-${e}`;if(t.hasAttribute(n))return t.getAttribute(n)}var O=function(e){b(n,e);var t=S(n);function n(e,r){var i;return _(this,n),i=t.call(this),i.resolveOptions(r),i.listenClick(e),i}return y(n,[{key:`resolveOptions`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof e.action==`function`?e.action:this.defaultAction,this.target=typeof e.target==`function`?e.target:this.defaultTarget,this.text=typeof e.text==`function`?e.text:this.defaultText,this.container=g(e.container)===`object`?e.container:document.body}},{key:`listenClick`,value:function(e){var t=this;this.listener=o()(e,`click`,function(e){return t.onClick(e)})}},{key:`onClick`,value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||`copy`,r=h({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(r?`success`:`error`,{action:n,text:r,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:`defaultAction`,value:function(e){return D(`action`,e)}},{key:`defaultTarget`,value:function(e){var t=D(`target`,e);if(t)return document.querySelector(t)}},{key:`defaultText`,value:function(e){return D(`text`,e)}},{key:`destroy`,value:function(){this.listener.destroy()}}],[{key:`copy`,value:function(e){return p(e,arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body})}},{key:`cut`,value:function(e){return u(e)}},{key:`isSupported`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[`copy`,`cut`],t=typeof e==`string`?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n&&=!!document.queryCommandSupported(e)}),n}}]),n}(i())}),828:(function(e){var t=9;if(typeof Element<`u`&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(e,n){for(;e&&e.nodeType!==t;){if(typeof e.matches==`function`&&e.matches(n))return e;e=e.parentNode}}e.exports=r}),438:(function(e,t,n){var r=n(828);function i(e,t,n,r,i){var a=o.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}function a(e,t,n,r,a){return typeof e.addEventListener==`function`?i.apply(null,arguments):typeof n==`function`?i.bind(null,document).apply(null,arguments):(typeof e==`string`&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return i(e,t,n,r,a)}))}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}e.exports=a}),879:(function(e,t){t.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return e!==void 0&&(n===`[object NodeList]`||n===`[object HTMLCollection]`)&&`length`in e&&(e.length===0||t.node(e[0]))},t.string=function(e){return typeof e==`string`||e instanceof String},t.fn=function(e){return Object.prototype.toString.call(e)===`[object Function]`}}),370:(function(e,t,n){var r=n(879),i=n(438);function a(e,t,n){if(!e&&!t&&!n)throw Error(`Missing required arguments`);if(!r.string(t))throw TypeError(`Second argument must be a String`);if(!r.fn(n))throw TypeError(`Third argument must be a Function`);if(r.node(e))return o(e,t,n);if(r.nodeList(e))return s(e,t,n);if(r.string(e))return c(e,t,n);throw TypeError(`First argument must be a String, HTMLElement, HTMLCollection, or NodeList`)}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function s(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function c(e,t,n){return i(document.body,e,t,n)}e.exports=a}),817:(function(e){function t(e){var t;if(e.nodeName===`SELECT`)e.focus(),t=e.value;else if(e.nodeName===`INPUT`||e.nodeName===`TEXTAREA`){var n=e.hasAttribute(`readonly`);n||e.setAttribute(`readonly`,``),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute(`readonly`),t=e.value}else{e.hasAttribute(`contenteditable`)&&e.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(e),r.removeAllRanges(),r.addRange(i),t=r.toString()}return t}e.exports=t}),279:(function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||={};return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function i(){r.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||={})[e]||[]).slice(),r=0,i=n.length;r<i;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||={},r=n[e],i=[];if(r&&t)for(var a=0,o=r.length;a<o;a++)r[a].fn!==t&&r[a].fn._!==t&&i.push(r[a]);return i.length?n[e]=i:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t})},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return(function(){n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t}})(),(function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}})(),n(686)})().default})}))(),1),F=`<!-- Created by weiXin:337547038 -->\r
<template>\r
  <div class="container" :style="style" v-loading="loading">\r
    <screen-show :data="designData.list"></screen-show>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
  import {computed, onMounted, ref} from 'vue'\r
  import ScreenShow from '@/components/screen/show.vue'\r
  import {loadConfigResource} from "@/components/screen/getData";\r
\r
  definePage({meta: {layout: 'hidden'}})\r
  const loading = ref(false)\r
  const designData = ref({{designData}})\r
  const style = computed(() => {\r
    const {width, height, background, primary} = designData.value.config || {}\r
    return {\r
      width: width,\r
      height: height,\r
      background: background,\r
      color: primary,\r
      position: 'relative'\r
    }\r
  })\r
  const initConfig = () => {\r
    loadConfigResource(designData.value.config)\r
  }\r
  onMounted(() => {\r
    initConfig()\r
  })\r
<\/script>`,I=`<!-- Created by weiXin:337547038 -->\r
<template>\r
  <div>\r
    <ak-form\r
      ref="formRef"\r
      :data="formData"\r
      :operate-type="formType"\r
      request-url="{{requestUrl}}"\r
      submit-url="{{submitUrl}}"\r
      :before="before"\r
      :params="params"\r
      :after="after"\r
    ></ak-form>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
  import {ref, computed} from 'vue'\r
\r
  const formData = ref({{formData}})\r
  // 表单提交时可附加的参数\r
  const params = ref({})\r
  // 表单操作类型，如没有设置添加和编辑页的禁用隐藏等设置可不传\r
  const formType = computed(() => {\r
    return 'add'\r
  })\r
\r
  // 获取表单数据值或是提交表单前事件，可使用return false阻止操作．other.type可选fetch/submit\r
  const before = (params: Record<string, any>, other: string) => {\r
    console.log('before', params, other)\r
    return params\r
  }\r
  // 获取表单数据或提交表单请求后事件,type可选fetch/submit\r
  const after = (res: any, success: boolean, type: string) => {\r
    if (success && type === 'submit') {\r
      console.log('after', res, success, type)\r
    }\r
  }\r
<\/script>\r
`,L=`<!-- created by weiXin:337547038 -->\r
<template>\r
  <div>\r
    <ak-list\r
      ref="tableListRef"\r
      :api-key='{{apiKey}}'\r
      :search-data="searchData"\r
      :data="tableData"\r
      @btn-click="listBtnClick"\r
    >\r
      <ak-form\r
        ref="formRef"\r
        :data="formData"\r
        :operate-type="operateType"\r
        submit-url=""\r
        :after="afterSubmit"\r
        @btn-click="formBtnClick"\r
      ></ak-form>\r
    </ak-list>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
  import {nextTick, ref} from 'vue'\r
\r
  const formRef = ref()\r
  const tableListRef = ref()\r
  const closeFormFn = ref()\r
  const operateType = ref('add')\r
\r
  const tableData = ref({{tableData}})\r
\r
  const searchData = ref({{searchData}})\r
\r
  const formData = ref({{formData}})\r
\r
  /**\r
   * 列表按钮点击事件\r
   * @param key 按钮标识\r
   * @param row 列表右则操作按钮事件时为当前行数据；列表右上方按钮时为当前所勾选的行id\r
   * @param close 用于关闭弹的方法\r
   */\r
  const listBtnClick = (key: string, row: any, close: any) => {\r
    closeFormFn.value = close\r
    if (key === 'edit') {\r
      operateType.value = key\r
      nextTick(() => {\r
        formRef.value.getData({id:row.id})\r
      })\r
    }\r
  }\r
  // 关闭弹窗\r
  const closeForm = () => {\r
    closeFormFn.value && closeFormFn.value()\r
  }\r
  const afterSubmit = (_: any, success: boolean, type: string) => {\r
    if (type === 'submit') {\r
      if (success) {\r
        // 添加成功，刷新列表数据并关闭弹窗\r
        tableListRef.value.getListData()\r
        closeForm()\r
      }\r
    }\r
  }\r
\r
  const formBtnClick = (type: string) => {\r
    if (type === 'reset' || type === 'cancel') {\r
      closeForm()\r
    }\r
  }\r
<\/script>\r
`,R=`<!-- Created by weiXin:337547038 -->\r
<template>\r
  <div>\r
    <ak-list\r
      ref="tableListRef"\r
      :api-key='{{apiKey}}'\r
      :search-data="searchData"\r
      :data="tableData"\r
      @btn-click="listBtnClick"\r
    >\r
    </ak-list>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
  import {nextTick, ref} from 'vue'\r
\r
  const tableListRef = ref()\r
  const tableData = ref({{tableData}})\r
  const searchData = ref({{searchData}})\r
\r
  /**\r
   * 列表按钮点击事件\r
   * @param key 按钮标识\r
   * @param row 列表右则操作按钮事件时为当前行数据；列表右上方按钮时为当前所勾选的行id\r
   */\r
  const listBtnClick = (key: string, row: any) => {\r
    if (key === 'add') {\r
      // 添加方法\r
    }else if(key==='edit'){\r
\r
    }else {\r
     // 其他按钮事件\r
    }\r
  }\r
<\/script>\r
`,z={class:`dialog-footer`},B=l({__name:`index`,setup(e,{expose:t}){let r=f(!1),i=f(),a=({data:e,type:t,search:a})=>{r.value=!0;let o=``;switch(t){case`screen`:o=F.replace(`{{designData}}`,E(e,!0,``));break;case`form`:o=s(e);break;case`list`:o=c(e,a);break}n(()=>{i.value=D({content:o,id:`editJsonCopy`,type:`html`})})},s=e=>I.replace(`{{formData}}`,E(e,!0,``)).replace(`{{requestUrl}}`,e.config.requestUrl||``).replace(`{{submitUrl}}`,e.config.submitUrl||``),c=(e,t)=>{let{list:n,del:r,edit:i,exportExcel:a}=e.config.apiKey||{},o=Object.fromEntries(Object.entries({list:n,del:r,edit:i,exportExcel:a}).filter(([,e])=>e)),s=e.config.openType===`dialog`?L:R;return delete e.config.name,delete e.config.formId,s.replace(`{{tableData}}`,E(e,!0,``)).replace(`{{apiKey}}`,E(o)).replace(`{{searchData}}`,E(t,!0,``)).replace(`{{formData}}`,E(t,!0,``))},l=e=>{n(()=>{let t=new P.default(e.target,{text:()=>i.value.getValue()});t.on(`success`,function(){C({message:`复制成功！`,type:`success`}),t.destroy()}),t.on(`error`,function(){C.error(`复制失败`),t.destroy()}),t.onClick(e)})},p=()=>{let e=`data:text/csv;charset=utf-8,`+i.value?.getValue(),t=new Date().getTime()+`.vue`,n=encodeURI(e),r=document.createElement(`a`);r.setAttribute(`href`,n),r.setAttribute(`download`,t),r.click()};return t({open:a}),(e,t)=>{let n=o(`el-button`),i=o(`el-dialog`);return S(),d(i,{modelValue:r.value,"onUpdate:modelValue":t[0]||=e=>r.value=e,title:`导出vue文件`,class:`export-dialog`,width:`80%`},{footer:h(()=>[u(`div`,z,[x(n,{type:`primary`,onClick:l},{default:h(()=>[...t[1]||=[b(` 复制数据 `,-1)]]),_:1}),x(n,{type:`primary`,onClick:p},{default:h(()=>[...t[2]||=[b(` 导出代码 `,-1)]]),_:1})])]),default:h(()=>[t[3]||=u(`div`,{id:`editJsonCopy`},null,-1)]),_:1},8,[`modelValue`])}}}),V=[`innerHTML`],H={key:0,id:`editJson`},U={class:`dialog-footer`},W=l({__name:`drawer`,emits:[`beforeClose`,`confirm`],setup(e,{expose:t,emit:r}){let s=r,c=f({}),l=f(!1),p=y({title:``,direction:`ltr`,callback:null,key:``}),_=()=>{let e=c.value.getValue(),t=e;switch(p.type){case`json`:t=O(t);break;case void 0:case`javascript`:t=T(e);break;default:}p.callback&&p.callback(t),s(`confirm`,e,p.key),l.value=!1},v=()=>{s(`beforeClose`),l.value=!1};return i(()=>{}),a(()=>{Object.keys(c.value).length!==0&&(c.value.destroy(),c.value.container.remove()),p.callback=null,p.direction=`ltr`}),t({open:e=>{l.value=!0;let t=e.content;switch(e.type){case`json`:t=w(e.content,!0);break;case void 0:case`javascript`:t=E(e.content,!0);break;default:}e.key&&!e.content&&(t=N(e.key,e.tip)||``),e.key&&!e.title&&(e.title=j[e.key]||``),Object.assign(p,e),n(()=>{c.value=D({content:t,type:e.type})})}}),(e,t)=>{let n=o(`el-button`),r=o(`el-drawer`);return S(),d(r,{modelValue:l.value,"onUpdate:modelValue":t[0]||=e=>l.value=e,size:`60%`,title:p.title,direction:p.direction,class:`ace-dialog`,"append-to-body":!0,"before-close":v},{header:h(()=>[u(`div`,{innerHTML:p.title},null,8,V)]),default:h(()=>[l.value?(S(),m(`div`,H)):g(``,!0),u(`div`,U,[x(n,{type:`primary`,onClick:_},{default:h(()=>[...t[1]||=[b(` 确定 `,-1)]]),_:1})])]),_:1},8,[`modelValue`,`title`,`direction`])}}});export{A as i,B as n,j as r,W as t};