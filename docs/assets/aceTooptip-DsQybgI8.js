import{aa as se,ab as ce,d as j,l as K,r as I,o as N,b as G,w as A,g as B,i as z,m as V,a0 as M,q as U,a8 as q,S as J,h as le,c as Y,ac as ue,F as fe,a as de,n as pe,t as me}from"./index-CCCDlvQG.js";var W={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(w,x){(function(k,h){w.exports=h()})(se,function(){return function(){var b={686:function(m,s,e){e.d(s,{default:function(){return ae}});var u=e(279),i=e.n(u),t=e(370),c=e.n(t),d=e(817),y=e.n(d);function o(f){try{return document.execCommand(f)}catch{return!1}}var g=function(r){var n=y()(r);return o("cut"),n},v=g;function _(f){var r=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[r?"right":"left"]="-9999px";var a=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(a,"px"),n.setAttribute("readonly",""),n.value=f,n}var D=function(r,n){var a=_(r);n.container.appendChild(a);var l=y()(a);return o("copy"),a.remove(),l},R=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},a="";return typeof r=="string"?a=D(r,n):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?a=D(r.value,n):(a=y()(r),o("copy")),a},T=R;function S(f){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(n){return typeof n}:S=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(f)}var $=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.action,a=n===void 0?"copy":n,l=r.container,p=r.target,E=r.text;if(a!=="copy"&&a!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(p!==void 0)if(p&&S(p)==="object"&&p.nodeType===1){if(a==="copy"&&p.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(a==="cut"&&(p.hasAttribute("readonly")||p.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return T(E,{container:l});if(p)return a==="cut"?v(p):T(p,{container:l})},X=$;function C(f){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(n){return typeof n}:C=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(f)}function Q(f,r){if(!(f instanceof r))throw new TypeError("Cannot call a class as a function")}function H(f,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(f,a.key,a)}}function Z(f,r,n){return r&&H(f.prototype,r),n&&H(f,n),f}function ee(f,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");f.prototype=Object.create(r&&r.prototype,{constructor:{value:f,writable:!0,configurable:!0}}),r&&F(f,r)}function F(f,r){return F=Object.setPrototypeOf||function(a,l){return a.__proto__=l,a},F(f,r)}function te(f){var r=oe();return function(){var a=O(f),l;if(r){var p=O(this).constructor;l=Reflect.construct(a,arguments,p)}else l=a.apply(this,arguments);return ne(this,l)}}function ne(f,r){return r&&(C(r)==="object"||typeof r=="function")?r:re(f)}function re(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function O(f){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},O(f)}function P(f,r){var n="data-clipboard-".concat(f);if(r.hasAttribute(n))return r.getAttribute(n)}var ie=function(f){ee(n,f);var r=te(n);function n(a,l){var p;return Q(this,n),p=r.call(this),p.resolveOptions(l),p.listenClick(a),p}return Z(n,[{key:"resolveOptions",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof l.action=="function"?l.action:this.defaultAction,this.target=typeof l.target=="function"?l.target:this.defaultTarget,this.text=typeof l.text=="function"?l.text:this.defaultText,this.container=C(l.container)==="object"?l.container:document.body}},{key:"listenClick",value:function(l){var p=this;this.listener=c()(l,"click",function(E){return p.onClick(E)})}},{key:"onClick",value:function(l){var p=l.delegateTarget||l.currentTarget,E=this.action(p)||"copy",L=X({action:E,container:this.container,target:this.target(p),text:this.text(p)});this.emit(L?"success":"error",{action:E,text:L,trigger:p,clearSelection:function(){p&&p.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(l){return P("action",l)}},{key:"defaultTarget",value:function(l){var p=P("target",l);if(p)return document.querySelector(p)}},{key:"defaultText",value:function(l){return P("text",l)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(l){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return T(l,p)}},{key:"cut",value:function(l){return v(l)}},{key:"isSupported",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],p=typeof l=="string"?[l]:l,E=!!document.queryCommandSupported;return p.forEach(function(L){E=E&&!!document.queryCommandSupported(L)}),E}}]),n}(i()),ae=ie},828:function(m){var s=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function u(i,t){for(;i&&i.nodeType!==s;){if(typeof i.matches=="function"&&i.matches(t))return i;i=i.parentNode}}m.exports=u},438:function(m,s,e){var u=e(828);function i(d,y,o,g,v){var _=c.apply(this,arguments);return d.addEventListener(o,_,v),{destroy:function(){d.removeEventListener(o,_,v)}}}function t(d,y,o,g,v){return typeof d.addEventListener=="function"?i.apply(null,arguments):typeof o=="function"?i.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(_){return i(_,y,o,g,v)}))}function c(d,y,o,g){return function(v){v.delegateTarget=u(v.target,y),v.delegateTarget&&g.call(d,v)}}m.exports=t},879:function(m,s){s.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},s.nodeList=function(e){var u=Object.prototype.toString.call(e);return e!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in e&&(e.length===0||s.node(e[0]))},s.string=function(e){return typeof e=="string"||e instanceof String},s.fn=function(e){var u=Object.prototype.toString.call(e);return u==="[object Function]"}},370:function(m,s,e){var u=e(879),i=e(438);function t(o,g,v){if(!o&&!g&&!v)throw new Error("Missing required arguments");if(!u.string(g))throw new TypeError("Second argument must be a String");if(!u.fn(v))throw new TypeError("Third argument must be a Function");if(u.node(o))return c(o,g,v);if(u.nodeList(o))return d(o,g,v);if(u.string(o))return y(o,g,v);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function c(o,g,v){return o.addEventListener(g,v),{destroy:function(){o.removeEventListener(g,v)}}}function d(o,g,v){return Array.prototype.forEach.call(o,function(_){_.addEventListener(g,v)}),{destroy:function(){Array.prototype.forEach.call(o,function(_){_.removeEventListener(g,v)})}}}function y(o,g,v){return i(document.body,o,g,v)}m.exports=t},817:function(m){function s(e){var u;if(e.nodeName==="SELECT")e.focus(),u=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var i=e.hasAttribute("readonly");i||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),i||e.removeAttribute("readonly"),u=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var t=window.getSelection(),c=document.createRange();c.selectNodeContents(e),t.removeAllRanges(),t.addRange(c),u=t.toString()}return u}m.exports=s},279:function(m){function s(){}s.prototype={on:function(e,u,i){var t=this.e||(this.e={});return(t[e]||(t[e]=[])).push({fn:u,ctx:i}),this},once:function(e,u,i){var t=this;function c(){t.off(e,c),u.apply(i,arguments)}return c._=u,this.on(e,c,i)},emit:function(e){var u=[].slice.call(arguments,1),i=((this.e||(this.e={}))[e]||[]).slice(),t=0,c=i.length;for(t;t<c;t++)i[t].fn.apply(i[t].ctx,u);return this},off:function(e,u){var i=this.e||(this.e={}),t=i[e],c=[];if(t&&u)for(var d=0,y=t.length;d<y;d++)t[d].fn!==u&&t[d].fn._!==u&&c.push(t[d]);return c.length?i[e]=c:delete i[e],this}},m.exports=s,m.exports.TinyEmitter=s}},k={};function h(m){if(k[m])return k[m].exports;var s=k[m]={exports:{}};return b[m](s,s.exports,h),s.exports}return function(){h.n=function(m){var s=m&&m.__esModule?function(){return m.default}:function(){return m};return h.d(s,{a:s}),s}}(),function(){h.d=function(m,s){for(var e in s)h.o(s,e)&&!h.o(m,e)&&Object.defineProperty(m,e,{enumerable:!0,get:s[e]})}}(),function(){h.o=function(m,s){return Object.prototype.hasOwnProperty.call(m,s)}}(),h(686)}().default})})(W);var ye=W.exports;const ge=ce(ye),ve=B("div",{id:"editJsonCopy"},null,-1),he={class:"dialog-footer"},Ee=j({__name:"vueFile",setup(w,{expose:x}){const b=K(!1),k=K(),h=t=>{let c="";const d="";return t&&t.list.forEach(y=>{var o;(o=y.customRules)!=null&&o.length&&y.customRules.forEach(g=>{g.type==="methods"&&g.methods&&(c+=`// todo 请完善${y.item.label}校验方法
  provide("${g.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:c,sourceFun:d}},m=t=>{b.value=!0;const c=h(t),{submitUrl:d="",editUrl:y="",requestUrl:o=""}=t.config;o&&delete t.config.requestUrl,y&&delete t.config.editUrl,d&&delete t.config.submitUrl;const g=`<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :data="formData"
      request-url="${o}"
      submit-url="${d}"
      edit-url="${y}"
      :before-submit="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${M(t)})
    // todo 存在编辑时，可根据路由等参数设置当前表单模式 1新增 2编辑
  const formType = computed(() => {
     return 1
  })
  ${c.rulesMethods}
  ${c.sourceFun}
  // 表单提交时参数处理
  const beforeSubmit = (params)=>{
    // 如编辑时添加参数
    //  params.id='xxx'
    return params
  }

<\/script>`;U(()=>{k.value=q(g,"editJsonCopy","html")})},s=t=>{var R,T,S,$;const c=((R=t.config)==null?void 0:R.openType)==="dialog",d=((T=t.config)==null?void 0:T.dialogWidth)||"600px",y=((S=t.config)==null?void 0:S.requestUrl)||"";y&&delete t.config.requestUrl;const o=(($=t.config)==null?void 0:$.deleteUrl)||"";o&&delete t.config.deleteUrl;let g="",v="",_="";c&&(_='@btn-click="listBtnClick"',g=`<el-dialog
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
    </el-dialog>`,v=`const formEl = ref()
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
      request-url="${y}"
      delete-url="${o}"
      :search-data="searchData"
      :data="tableData"
      ${_}>
    </ak-list>
    ${g}
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
  ${v}
<\/script>`;U(()=>{k.value=q(D,"editJsonCopy","html")})},e=t=>{b.value=!0;let c="",d="",y="";const o=t.config.style;o&&(c=`<style>${o}
</style>`),t.config.requestUrl&&(y="import { getRequest } from '@/api'",d=`
      const {requestUrl,method} = screenData.value.config
  getRequest(requestUrl,{},{method:method})
  .then((res: any) => {
      // 这里处理数据，直接对screenData设置值即可，无须使用全局或afterFetch之类的方法设值
      //
   })`);const g=`<template>
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
${c}`;U(()=>{k.value=q(g,"editJsonCopy","html")})},u=t=>{U(()=>{const c=new ge(t.target,{text:()=>k.value.getValue()});c.on("success",function(){J({message:"复制成功！",type:"success"}),c.destroy()}),c.on("error",function(){J.error("复制失败"),c.destroy()}),c.onClick(t)})},i=()=>{var o;const t="data:text/csv;charset=utf-8,"+((o=k.value)==null?void 0:o.getValue()),c=new Date().getTime()+".vue",d=encodeURI(t),y=document.createElement("a");y.setAttribute("href",d),y.setAttribute("download",c),y.click()};return x({open:m,openTable:s,openScreen:e}),(t,c)=>{const d=I("el-button"),y=I("el-dialog");return N(),G(y,{modelValue:b.value,"onUpdate:modelValue":c[0]||(c[0]=o=>b.value=o),title:"导出vue文件",class:"export-dialog",width:"80%"},{footer:A(()=>[B("div",he,[z(d,{type:"primary",onClick:u},{default:A(()=>[V(" 复制数据 ")]),_:1}),z(d,{type:"primary",onClick:i},{default:A(()=>[V(" 导出代码 ")]),_:1})])]),default:A(()=>[ve]),_:1},8,["modelValue"])}}}),be={class:"main-tools"},we=j({__name:"headTools",props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:["click"],setup(w,{emit:x}){const b=w,k=x,h=le(()=>{var e,u;const s=[{icon:"del",label:"清空",key:1},{icon:"eye",label:"预览",key:2},{icon:"json",label:"生成脚本预览",key:3},{icon:"vue",label:"导出vue文件",key:4},{icon:"save",label:"保存",key:5}];return(e=b.showKey)!=null&&e.length?s.filter(i=>b.showKey.includes(i.key)):(u=b.hideKey)!=null&&u.length?s.filter(i=>!b.hideKey.includes(i.key)):s}),m=s=>{k("click",s)};return(s,e)=>{const u=I("el-button");return N(),Y("div",be,[ue(s.$slots,"default"),(N(!0),Y(fe,null,de(h.value,i=>(N(),G(u,{link:"",type:"primary",onClick:t=>m(i.icon),key:i.icon},{default:A(()=>[B("i",{class:pe(["icon-"+i.icon])},null,2),V(me(i.label),1)]),_:2},1032,["onClick"]))),128))])}}}),Se={change:"表单组件值改变事件。这里可修改其他组件的值。返回字符串形式可在@/utils/formChangeValue中处理",afterSubmit:"表单提交响应事件；支持返回字符串形式",beforeSubmit:"表单数据提交前事件，可对提交数据进行处理；支持返回字符串形式",afterFetch:"获取表单初始数据响应处理之后事件，可对请求返回数据进行处理；支持返回字符串形式",beforeFetch:"获取表单初始数据请求发送之前事件，可对请求参数进行处理；支持返回字符串形式",optionsParams:"请求发送之前事件，可对请求参数进行处理；支持返回字符串形式",optionsResult:"请求响应事件处理；支持返回字符串形式",editCss:"当前表单应用页的样式，类似于.vue文件中的style scoped中的样式",editDict:'数据字典，用于匹配多选组、下拉选择等，提供动态获取Options接口字典数据，一般不设置，从接口dict获取。json格式："sex":{"0":"男","1":"女"}',creatJson:"可编辑修改或将已生成的脚本粘贴进来",editRules:"可参考UI组件表单校验，<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>详情点击</a>",editProps:"可添加当前组件所有prop属性及事件方法",button:"可添加当前组件所有prop属性及事件方法",beforeDelete:"请求发送之前事件，可对请求参数进行处理",afterFetchScreen:"获取数据响应处理之后事件，可对请求返回数据进行处理；"},xe=(w,x)=>{switch(w){case"beforeFetch":case"optionsParams":return`opt=(data, route) => {
  // data请求参数，route当前路由信息
  console.log('${w}',data)
  return data
}`;case"afterFetch":case"optionsResult":return`opt=(type, res) => {
  // 请求响应结果 ${x||""}
  console.log('${w}',res)
  return res
}`;case"beforeSubmit":return`opt=(data, route, model) => {
  // data提交的参数，route当前路由信息，当前表单值
  console.log('beforeSubmit',data)
  return data
}`;case"afterSubmit":return`opt=(type, data, res) => {
  // type(success,fail,validate),data响应数据,res响应结果
  console.log('afterSubmit',data)
  return data
}`;case"change":return`opt=(key,model) => {
  // key当前改变组件的name值,model表单的值，可修改后返回新值
  console.log('change',key)
  return model
}`;case"afterFetchScreen":return`opt=(res, data) => {
  // res响应数据, 当前组件数据data
  // 这里可直接使用getScreenGlobal取得全局的数据
  console.log('afterFetchScreen',data)
  return data //返回新的图表数据
}`}};export{we as _,Ee as a,xe as b,Se as g};
