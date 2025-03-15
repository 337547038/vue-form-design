import{ad as le,ae as ce,d as Y,l as K,r as I,o as N,b as W,w as A,g as V,i as j,m as B,a0 as q,q as U,ab as F,N as z,h as ue,c as J,af as fe,F as de,a as pe,n as me,t as ye}from"./index-BR7JSMnu.js";var X={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(T,_){(function(k,h){T.exports=h()})(le,function(){return function(){var b={686:function(y,l,e){e.d(l,{default:function(){return se}});var u=e(279),a=e.n(u),t=e(370),o=e.n(t),d=e(817),g=e.n(d);function i(f){try{return document.execCommand(f)}catch{return!1}}var v=function(r){var n=g()(r);return i("cut"),n},p=v;function E(f){var r=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[r?"right":"left"]="-9999px";var s=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(s,"px"),n.setAttribute("readonly",""),n.value=f,n}var D=function(r,n){var s=E(r);n.container.appendChild(s);var c=g()(s);return i("copy"),s.remove(),c},R=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},s="";return typeof r=="string"?s=D(r,n):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?s=D(r.value,n):(s=g()(r),i("copy")),s},S=R;function x(f){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(n){return typeof n}:x=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(f)}var L=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.action,s=n===void 0?"copy":n,c=r.container,m=r.target,w=r.text;if(s!=="copy"&&s!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(m!==void 0)if(m&&x(m)==="object"&&m.nodeType===1){if(s==="copy"&&m.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(s==="cut"&&(m.hasAttribute("readonly")||m.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(w)return S(w,{container:c});if(m)return s==="cut"?p(m):S(m,{container:c})},Q=L;function C(f){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(n){return typeof n}:C=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(f)}function Z(f,r){if(!(f instanceof r))throw new TypeError("Cannot call a class as a function")}function H(f,r){for(var n=0;n<r.length;n++){var s=r[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(f,s.key,s)}}function ee(f,r,n){return r&&H(f.prototype,r),n&&H(f,n),f}function te(f,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");f.prototype=Object.create(r&&r.prototype,{constructor:{value:f,writable:!0,configurable:!0}}),r&&P(f,r)}function P(f,r){return P=Object.setPrototypeOf||function(s,c){return s.__proto__=c,s},P(f,r)}function ne(f){var r=ie();return function(){var s=O(f),c;if(r){var m=O(this).constructor;c=Reflect.construct(s,arguments,m)}else c=s.apply(this,arguments);return re(this,c)}}function re(f,r){return r&&(C(r)==="object"||typeof r=="function")?r:oe(f)}function oe(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function ie(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function O(f){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},O(f)}function M(f,r){var n="data-clipboard-".concat(f);if(r.hasAttribute(n))return r.getAttribute(n)}var ae=function(f){te(n,f);var r=ne(n);function n(s,c){var m;return Z(this,n),m=r.call(this),m.resolveOptions(c),m.listenClick(s),m}return ee(n,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=C(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var m=this;this.listener=o()(c,"click",function(w){return m.onClick(w)})}},{key:"onClick",value:function(c){var m=c.delegateTarget||c.currentTarget,w=this.action(m)||"copy",$=Q({action:w,container:this.container,target:this.target(m),text:this.text(m)});this.emit($?"success":"error",{action:w,text:$,trigger:m,clearSelection:function(){m&&m.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(c){return M("action",c)}},{key:"defaultTarget",value:function(c){var m=M("target",c);if(m)return document.querySelector(m)}},{key:"defaultText",value:function(c){return M("text",c)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(c){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return S(c,m)}},{key:"cut",value:function(c){return p(c)}},{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],m=typeof c=="string"?[c]:c,w=!!document.queryCommandSupported;return m.forEach(function($){w=w&&!!document.queryCommandSupported($)}),w}}]),n}(a()),se=ae},828:function(y){var l=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function u(a,t){for(;a&&a.nodeType!==l;){if(typeof a.matches=="function"&&a.matches(t))return a;a=a.parentNode}}y.exports=u},438:function(y,l,e){var u=e(828);function a(d,g,i,v,p){var E=o.apply(this,arguments);return d.addEventListener(i,E,p),{destroy:function(){d.removeEventListener(i,E,p)}}}function t(d,g,i,v,p){return typeof d.addEventListener=="function"?a.apply(null,arguments):typeof i=="function"?a.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(E){return a(E,g,i,v,p)}))}function o(d,g,i,v){return function(p){p.delegateTarget=u(p.target,g),p.delegateTarget&&v.call(d,p)}}y.exports=t},879:function(y,l){l.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},l.nodeList=function(e){var u=Object.prototype.toString.call(e);return e!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in e&&(e.length===0||l.node(e[0]))},l.string=function(e){return typeof e=="string"||e instanceof String},l.fn=function(e){var u=Object.prototype.toString.call(e);return u==="[object Function]"}},370:function(y,l,e){var u=e(879),a=e(438);function t(i,v,p){if(!i&&!v&&!p)throw new Error("Missing required arguments");if(!u.string(v))throw new TypeError("Second argument must be a String");if(!u.fn(p))throw new TypeError("Third argument must be a Function");if(u.node(i))return o(i,v,p);if(u.nodeList(i))return d(i,v,p);if(u.string(i))return g(i,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(i,v,p){return i.addEventListener(v,p),{destroy:function(){i.removeEventListener(v,p)}}}function d(i,v,p){return Array.prototype.forEach.call(i,function(E){E.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(i,function(E){E.removeEventListener(v,p)})}}}function g(i,v,p){return a(document.body,i,v,p)}y.exports=t},817:function(y){function l(e){var u;if(e.nodeName==="SELECT")e.focus(),u=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var a=e.hasAttribute("readonly");a||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),a||e.removeAttribute("readonly"),u=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var t=window.getSelection(),o=document.createRange();o.selectNodeContents(e),t.removeAllRanges(),t.addRange(o),u=t.toString()}return u}y.exports=l},279:function(y){function l(){}l.prototype={on:function(e,u,a){var t=this.e||(this.e={});return(t[e]||(t[e]=[])).push({fn:u,ctx:a}),this},once:function(e,u,a){var t=this;function o(){t.off(e,o),u.apply(a,arguments)}return o._=u,this.on(e,o,a)},emit:function(e){var u=[].slice.call(arguments,1),a=((this.e||(this.e={}))[e]||[]).slice(),t=0,o=a.length;for(t;t<o;t++)a[t].fn.apply(a[t].ctx,u);return this},off:function(e,u){var a=this.e||(this.e={}),t=a[e],o=[];if(t&&u)for(var d=0,g=t.length;d<g;d++)t[d].fn!==u&&t[d].fn._!==u&&o.push(t[d]);return o.length?a[e]=o:delete a[e],this}},y.exports=l,y.exports.TinyEmitter=l}},k={};function h(y){if(k[y])return k[y].exports;var l=k[y]={exports:{}};return b[y](l,l.exports,h),l.exports}return function(){h.n=function(y){var l=y&&y.__esModule?function(){return y.default}:function(){return y};return h.d(l,{a:l}),l}}(),function(){h.d=function(y,l){for(var e in l)h.o(l,e)&&!h.o(y,e)&&Object.defineProperty(y,e,{enumerable:!0,get:l[e]})}}(),function(){h.o=function(y,l){return Object.prototype.hasOwnProperty.call(y,l)}}(),h(686)}().default})})(X);var ge=X.exports;const ve=ce(ge),he={class:"dialog-footer"},we=Y({__name:"vueFile",setup(T,{expose:_}){const b=K(!1),k=K(),h=t=>{var g;let o="";const d="";return(g=t.list)==null||g.forEach(i=>{var v;(v=i.customRules)!=null&&v.length&&i.customRules.forEach(p=>{p.type==="methods"&&p.methods&&(o+=`// todo 请完善${i.item.label}校验方法
  provide("${p.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:o,sourceFun:d}},y=t=>{b.value=!0;const o=h(t),{submitUrl:d="",editUrl:g="",requestUrl:i=""}=t.config;i&&delete t.config.requestUrl,g&&delete t.config.editUrl,d&&delete t.config.submitUrl;const v=`<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :data="formData"
      request-url="${i}"
      submit-url="${d}"
      edit-url="${g}"
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
  ${o.rulesMethods}
  ${o.sourceFun}
  // 表单提交时参数处理
  const beforeSubmit = (params)=>{
    // 如编辑时添加参数
    //  params.id='xxx'
    return params
  }

<\/script>`;U(()=>{k.value=F(v,"editJsonCopy","html")})},l=t=>{var R,S,x,L;const o=((R=t.config)==null?void 0:R.openType)==="dialog",d=((S=t.config)==null?void 0:S.dialogWidth)||"600px",g=((x=t.config)==null?void 0:x.requestUrl)||"";g&&delete t.config.requestUrl;const i=((L=t.config)==null?void 0:L.deleteUrl)||"";i&&delete t.config.deleteUrl;let v="",p="",E="";o&&(E='@btn-click="listBtnClick"',v=`<el-dialog
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
    </el-dialog>`,p=`const formEl = ref()
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
  //　点击弹窗取消按钮时
  const dialogBtnClick = (type) => {
    if (type === 'reset') {
      closeResetDialog()
    }
  }
`),b.value=!0;const D=`<template>
  <div>
    <ak-list
      ref="tableListEl"
      request-url="${g}"
      delete-url="${i}"
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
  const tableData = ref(${q(t)})
  ${p}
<\/script>`;U(()=>{k.value=F(D,"editJsonCopy","html")})},e=t=>{b.value=!0;let o="",d="",g="";const i=t.config.style;i&&(o=`<style>${i}
</style>`),t.config.requestUrl&&(g="import { getRequest } from '@/api'",d=`
      const {requestUrl,method} = screenData.value.config
  getRequest(requestUrl,{},{method:method})
  .then((res: any) => {
      // 这里处理数据，直接对screenData设置值即可，无须使用全局或after之类的方法设值
      //
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
  ${g}
  import AKScreen from '@/views/design/screen/components/screen.vue' //可根据需求是否全局注册
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
${o}`;U(()=>{k.value=F(v,"editJsonCopy","html")})},u=t=>{U(()=>{const o=new ve(t.target,{text:()=>k.value.getValue()});o.on("success",function(){z({message:"复制成功！",type:"success"}),o.destroy()}),o.on("error",function(){z.error("复制失败"),o.destroy()}),o.onClick(t)})},a=()=>{var i;const t="data:text/csv;charset=utf-8,"+((i=k.value)==null?void 0:i.getValue()),o=new Date().getTime()+".vue",d=encodeURI(t),g=document.createElement("a");g.setAttribute("href",d),g.setAttribute("download",o),g.click()};return _({open:y,openTable:l,openScreen:e}),(t,o)=>{const d=I("el-button"),g=I("el-dialog");return N(),W(g,{modelValue:b.value,"onUpdate:modelValue":o[0]||(o[0]=i=>b.value=i),title:"导出vue文件",class:"export-dialog",width:"80%"},{footer:A(()=>[V("div",he,[j(d,{type:"primary",onClick:u},{default:A(()=>o[1]||(o[1]=[B(" 复制数据 ")])),_:1}),j(d,{type:"primary",onClick:a},{default:A(()=>o[2]||(o[2]=[B(" 导出代码 ")])),_:1})])]),default:A(()=>[o[3]||(o[3]=V("div",{id:"editJsonCopy"},null,-1))]),_:1},8,["modelValue"])}}}),be={class:"main-tools"},_e=Y({__name:"headTools",props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:["click"],setup(T,{emit:_}){const b=T,k=_,h=ue(()=>{var e,u;const l=[{icon:"del",label:"清空",key:1},{icon:"eye",label:"预览",key:2},{icon:"json",label:"生成脚本预览",key:3},{icon:"vue",label:"导出vue文件",key:4},{icon:"save",label:"保存",key:5}];return(e=b.showKey)!=null&&e.length?l.filter(a=>b.showKey.includes(a.key)):(u=b.hideKey)!=null&&u.length?l.filter(a=>!b.hideKey.includes(a.key)):l}),y=l=>{k("click",l)};return(l,e)=>{const u=I("el-button");return N(),J("div",be,[fe(l.$slots,"default"),(N(!0),J(de,null,pe(h.value,a=>(N(),W(u,{key:a.icon,link:"",type:"primary",onClick:t=>y(a.icon)},{default:A(()=>[V("i",{class:me(["icon-"+a.icon])},null,2),B(ye(a.label),1)]),_:2},1032,["onClick"]))),128))])}}}),xe={after:"获取数据响应处理之后事件，可对请求返回数据进行处理；支持返回字符串形式",before:"获取数据请求发送之前事件，可对请求参数进行处理；支持返回字符串形式",editCss:"当前表单应用页的样式，类似于.vue文件中的style scoped中的样式",change:"表单组件值改变事件。这里可修改其他组件的值。返回字符串形式可在@/utils/formChangeValue中处理",editRules:"可参考UI组件表单校验，<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>详情点击</a>",editProps:"可添加当前组件所有prop属性及事件方法",creatJson:"可编辑修改或将已生成的脚本粘贴进来",button:"可添加当前组件所有prop属性及事件方法"},G={form:"可选fetch/submit。使用时需对type作判断",list:"可选fetch/submit/del/export。使用时需对type作判断",tree:"可选del"},Te=(T,_="form")=>{switch(T){case"before":return`opt=(params) => {
  // params请求的参数，需对params作修改后return回去。
  console.log(params)
  return params
}`;case"beforeType":return`opt=(params, type, obj) => {
  // params请求的参数，需对params作修改后return回去。
  // type当前操作类型。`+G[_]+`
  return params
}`;case"after":return`opt=(res, success) => {
  // res接口返回结果，success是否成功；对结果修改后返回
  console.log(res, success)
  return res
}`;case"afterType":return`opt=(res, success, type) => {
  // res接口返回结果，type当前操作事件类型，success是否成功；对结果修改后返回
  // `+G[_]+`
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
}`}};export{_e as _,we as a,Te as b,xe as g};
