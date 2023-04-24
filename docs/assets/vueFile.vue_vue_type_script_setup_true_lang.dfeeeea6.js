import{$ as ot,a0 as rt,f as ut,r as $,a as M,b as it,h as at,w as k,l as q,e as P,s as z,V,n as O,a1 as I,L as H}from"./index.2b72f3d0.js";var J={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(R,L){(function(F,h){R.exports=h()})(ot,function(){return function(){var _={686:function(y,f,t){t.d(f,{default:function(){return nt}});var l=t(279),e=t.n(l),r=t(370),p=t.n(r),c=t(817),v=t.n(c);function s(a){try{return document.execCommand(a)}catch{return!1}}var g=function(o){var n=v()(o);return s("cut"),n},m=g;function b(a){var o=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[o?"right":"left"]="-9999px";var u=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(u,"px"),n.setAttribute("readonly",""),n.value=a,n}var D=function(o,n){var u=b(o);n.container.appendChild(u);var i=v()(u);return s("copy"),u.remove(),i},T=function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},u="";return typeof o=="string"?u=D(o,n):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o==null?void 0:o.type)?u=D(o.value,n):(u=v()(o),s("copy")),u},A=T;function C(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(n){return typeof n}:C=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(a)}var Y=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.action,u=n===void 0?"copy":n,i=o.container,d=o.target,E=o.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(d!==void 0)if(d&&C(d)==="object"&&d.nodeType===1){if(u==="copy"&&d.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(d.hasAttribute("readonly")||d.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return A(E,{container:i});if(d)return u==="cut"?m(d):A(d,{container:i})},j=Y;function x(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(n){return typeof n}:x=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(a)}function W(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")}function N(a,o){for(var n=0;n<o.length;n++){var u=o[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(a,u.key,u)}}function G(a,o,n){return o&&N(a.prototype,o),n&&N(a,n),a}function X(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(o&&o.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),o&&B(a,o)}function B(a,o){return B=Object.setPrototypeOf||function(u,i){return u.__proto__=i,u},B(a,o)}function K(a){var o=tt();return function(){var u=w(a),i;if(o){var d=w(this).constructor;i=Reflect.construct(u,arguments,d)}else i=u.apply(this,arguments);return Q(this,i)}}function Q(a,o){return o&&(x(o)==="object"||typeof o=="function")?o:Z(a)}function Z(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function tt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function w(a){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},w(a)}function U(a,o){var n="data-clipboard-".concat(a);if(!!o.hasAttribute(n))return o.getAttribute(n)}var et=function(a){X(n,a);var o=K(n);function n(u,i){var d;return W(this,n),d=o.call(this),d.resolveOptions(i),d.listenClick(u),d}return G(n,[{key:"resolveOptions",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof i.action=="function"?i.action:this.defaultAction,this.target=typeof i.target=="function"?i.target:this.defaultTarget,this.text=typeof i.text=="function"?i.text:this.defaultText,this.container=x(i.container)==="object"?i.container:document.body}},{key:"listenClick",value:function(i){var d=this;this.listener=p()(i,"click",function(E){return d.onClick(E)})}},{key:"onClick",value:function(i){var d=i.delegateTarget||i.currentTarget,E=this.action(d)||"copy",S=j({action:E,container:this.container,target:this.target(d),text:this.text(d)});this.emit(S?"success":"error",{action:E,text:S,trigger:d,clearSelection:function(){d&&d.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(i){return U("action",i)}},{key:"defaultTarget",value:function(i){var d=U("target",i);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(i){return U("text",i)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(i){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return A(i,d)}},{key:"cut",value:function(i){return m(i)}},{key:"isSupported",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof i=="string"?[i]:i,E=!!document.queryCommandSupported;return d.forEach(function(S){E=E&&!!document.queryCommandSupported(S)}),E}}]),n}(e()),nt=et},828:function(y){var f=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function l(e,r){for(;e&&e.nodeType!==f;){if(typeof e.matches=="function"&&e.matches(r))return e;e=e.parentNode}}y.exports=l},438:function(y,f,t){var l=t(828);function e(c,v,s,g,m){var b=p.apply(this,arguments);return c.addEventListener(s,b,m),{destroy:function(){c.removeEventListener(s,b,m)}}}function r(c,v,s,g,m){return typeof c.addEventListener=="function"?e.apply(null,arguments):typeof s=="function"?e.bind(null,document).apply(null,arguments):(typeof c=="string"&&(c=document.querySelectorAll(c)),Array.prototype.map.call(c,function(b){return e(b,v,s,g,m)}))}function p(c,v,s,g){return function(m){m.delegateTarget=l(m.target,v),m.delegateTarget&&g.call(c,m)}}y.exports=r},879:function(y,f){f.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},f.nodeList=function(t){var l=Object.prototype.toString.call(t);return t!==void 0&&(l==="[object NodeList]"||l==="[object HTMLCollection]")&&"length"in t&&(t.length===0||f.node(t[0]))},f.string=function(t){return typeof t=="string"||t instanceof String},f.fn=function(t){var l=Object.prototype.toString.call(t);return l==="[object Function]"}},370:function(y,f,t){var l=t(879),e=t(438);function r(s,g,m){if(!s&&!g&&!m)throw new Error("Missing required arguments");if(!l.string(g))throw new TypeError("Second argument must be a String");if(!l.fn(m))throw new TypeError("Third argument must be a Function");if(l.node(s))return p(s,g,m);if(l.nodeList(s))return c(s,g,m);if(l.string(s))return v(s,g,m);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function p(s,g,m){return s.addEventListener(g,m),{destroy:function(){s.removeEventListener(g,m)}}}function c(s,g,m){return Array.prototype.forEach.call(s,function(b){b.addEventListener(g,m)}),{destroy:function(){Array.prototype.forEach.call(s,function(b){b.removeEventListener(g,m)})}}}function v(s,g,m){return e(document.body,s,g,m)}y.exports=r},817:function(y){function f(t){var l;if(t.nodeName==="SELECT")t.focus(),l=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var e=t.hasAttribute("readonly");e||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),l=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),p=document.createRange();p.selectNodeContents(t),r.removeAllRanges(),r.addRange(p),l=r.toString()}return l}y.exports=f},279:function(y){function f(){}f.prototype={on:function(t,l,e){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:l,ctx:e}),this},once:function(t,l,e){var r=this;function p(){r.off(t,p),l.apply(e,arguments)}return p._=l,this.on(t,p,e)},emit:function(t){var l=[].slice.call(arguments,1),e=((this.e||(this.e={}))[t]||[]).slice(),r=0,p=e.length;for(r;r<p;r++)e[r].fn.apply(e[r].ctx,l);return this},off:function(t,l){var e=this.e||(this.e={}),r=e[t],p=[];if(r&&l)for(var c=0,v=r.length;c<v;c++)r[c].fn!==l&&r[c].fn._!==l&&p.push(r[c]);return p.length?e[t]=p:delete e[t],this}},y.exports=f,y.exports.TinyEmitter=f}},F={};function h(y){if(F[y])return F[y].exports;var f=F[y]={exports:{}};return _[y](f,f.exports,h),f.exports}return function(){h.n=function(y){var f=y&&y.__esModule?function(){return y.default}:function(){return y};return h.d(f,{a:f}),f}}(),function(){h.d=function(y,f){for(var t in f)h.o(f,t)&&!h.o(y,t)&&Object.defineProperty(y,t,{enumerable:!0,get:f[t]})}}(),function(){h.o=function(y,f){return Object.prototype.hasOwnProperty.call(y,f)}}(),h(686)}().default})})(J);const ct=rt(J.exports),st=q("div",{id:"editJsonCopy"},null,-1),lt={class:"dialog-footer"},ft=z(" \u590D\u5236\u6570\u636E "),dt=z(" \u5BFC\u51FA\u4EE3\u7801 "),mt=ut({__name:"vueFile",setup(R,{expose:L}){const _=$(!1),F=$(),h=e=>{let r="",p="";return e&&e.list.forEach(c=>{var v;(v=c.customRules)!=null&&v.length&&c.customRules.forEach(s=>{s.type==="methods"&&s.methods&&(r+=`// todo \u8BF7\u5B8C\u5584${c.item.label}\u6821\u9A8C\u65B9\u6CD5
  provide("${s.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:r,sourceFun:p}},y=e=>{_.value=!0;const r=h(e),{addUrl:p,editUrl:c,requestUrl:v}=e.config;v&&delete e.config.requestUrl,c&&delete e.config.editUrl,p&&delete e.config.addUrl;const s=`<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :formData="formData"
      requestUrl="${v}"
      addUrl="${p}"
      editUrl="${c}"
      :beforeSubmit="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${V(e)})
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

<\/script>`;O(()=>{F.value=I(s,"editJsonCopy","html")})},f=e=>{var D,T,A,C;const r=((D=e.config)==null?void 0:D.openType)==="dialog",p=((T=e.config)==null?void 0:T.dialogWidth)||"600px",c=(A=e.config)==null?void 0:A.requestUrl;c&&delete e.config.requestUrl;const v=(C=e.config)==null?void 0:C.deleteUrl;v&&delete e.config.deleteUrl;let s="",g="",m="";r&&(m='@btn-click="listBtnClick"',s=`<el-dialog
      destroy-on-close
      v-model="dialog.visible"
      :title="dialog.title"
      width="${p}"
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
  `),_.value=!0;const b=`<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="${c}"
      deleteUrl="${v}"
      :searchData="searchData"
      :tableData="tableData"
      ${m}>
    </ak-list>
    ${s}
  </div>
</template>

<script setup>
  // import {useRoute, useRouter} from 'vue-router'
  import { ref, nextTick,reactive } from 'vue'
  // const route = useRoute()
  // const router = useRouter()
  const tableListEl = ref()
  const searchData = ref({})
  const tableData = ref(${V(e)})
  ${g}
<\/script>`;O(()=>{F.value=I(b,"editJsonCopy","html")})},t=e=>{O(()=>{const r=new ct(e.target,{text:()=>F.value.getValue()});r.on("success",function(){H({message:"\u590D\u5236\u6210\u529F\uFF01",type:"success"}),r.destroy()}),r.on("error",function(){H.error("\u590D\u5236\u5931\u8D25"),r.destroy()}),r.onClick(e)})},l=()=>{var v;const e="data:text/csv;charset=utf-8,"+((v=F.value)==null?void 0:v.getValue()),r=new Date().getTime()+".vue",p=encodeURI(e),c=document.createElement("a");c.setAttribute("href",p),c.setAttribute("download",r),c.click()};return L({open:y,openTable:f}),(e,r)=>{const p=M("el-button"),c=M("el-dialog");return it(),at(c,{modelValue:_.value,"onUpdate:modelValue":r[0]||(r[0]=v=>_.value=v),title:"\u5BFC\u51FAvue\u6587\u4EF6","custom-class":"export-dialog",width:"80%"},{footer:k(()=>[q("div",lt,[P(p,{size:"small",type:"primary",onClick:t},{default:k(()=>[ft]),_:1}),P(p,{type:"primary",size:"small",onClick:l},{default:k(()=>[dt]),_:1})])]),default:k(()=>[st]),_:1},8,["modelValue"])}}});export{mt as _};
