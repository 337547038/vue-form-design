import{e as J,s as at,A as ct,l as st,a as B,o as F,c as j,F as lt,f as ft,g as Y,w,i as $,C as dt,d as M,t as pt,m as yt,V as vt,W as mt,r as V,b as H,R as q,X as bt,q as N,U as z,E as I}from"./index.7ea24bdb.js";const ht={class:"main-tools"},At=J({__name:"headTools",props:{type:{default:"1"}},emits:["click"],setup(x,{emit:A}){const C=x,h=at().query.type==="search",y=ct({list:[{icon:"del",label:"\u6E05\u7A7A"},{icon:"eye",label:"\u9884\u89C8",disabled:C.type==="2"},{icon:"json",label:"\u751F\u6210\u811A\u672C\u9884\u89C8"},{icon:"vue",label:"\u5BFC\u51FAvue\u6587\u4EF6",disabled:h},{icon:"save",label:"\u4FDD\u5B58"}]}),l=st(()=>y.list.filter(c=>!c.disabled)),t=c=>{A("click",c)};return(c,r)=>{const o=B("el-button");return F(),j("div",ht,[(F(!0),j(lt,null,ft(yt(l),f=>(F(),Y(o,{link:"",type:"primary",onClick:u=>t(f.icon),key:f.icon},{default:w(()=>[$("i",{class:dt(["icon-"+f.icon])},null,2),M(pt(f.label),1)]),_:2},1032,["onClick"]))),128))])}}});var X={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(x,A){(function(_,h){x.exports=h()})(vt,function(){return function(){var C={686:function(y,l,t){t.d(l,{default:function(){return it}});var c=t(279),r=t.n(c),o=t(370),f=t.n(o),u=t(817),m=t.n(u);function p(s){try{return document.execCommand(s)}catch{return!1}}var b=function(n){var e=m()(n);return p("cut"),e},v=b;function E(s){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(i,"px"),e.setAttribute("readonly",""),e.value=s,e}var P=function(n,e){var i=E(n);e.container.appendChild(i);var a=m()(i);return p("copy"),i.remove(),a},G=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},i="";return typeof n=="string"?i=P(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?i=P(n.value,e):(i=m()(n),p("copy")),i},O=G;function T(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(s)}var W=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,i=e===void 0?"copy":e,a=n.container,d=n.target,g=n.text;if(i!=="copy"&&i!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(d!==void 0)if(d&&T(d)==="object"&&d.nodeType===1){if(i==="copy"&&d.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(i==="cut"&&(d.hasAttribute("readonly")||d.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(g)return O(g,{container:a});if(d)return i==="cut"?v(d):O(d,{container:a})},K=W;function k(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(e){return typeof e}:k=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(s)}function Q(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function U(s,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function Z(s,n,e){return n&&U(s.prototype,n),e&&U(s,e),s}function tt(s,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),n&&L(s,n)}function L(s,n){return L=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},L(s,n)}function et(s){var n=rt();return function(){var i=S(s),a;if(n){var d=S(this).constructor;a=Reflect.construct(i,arguments,d)}else a=i.apply(this,arguments);return nt(this,a)}}function nt(s,n){return n&&(k(n)==="object"||typeof n=="function")?n:ot(s)}function ot(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function rt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function S(s){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(s)}function R(s,n){var e="data-clipboard-".concat(s);if(!!n.hasAttribute(e))return n.getAttribute(e)}var ut=function(s){tt(e,s);var n=et(e);function e(i,a){var d;return Q(this,e),d=n.call(this),d.resolveOptions(a),d.listenClick(i),d}return Z(e,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof a.action=="function"?a.action:this.defaultAction,this.target=typeof a.target=="function"?a.target:this.defaultTarget,this.text=typeof a.text=="function"?a.text:this.defaultText,this.container=k(a.container)==="object"?a.container:document.body}},{key:"listenClick",value:function(a){var d=this;this.listener=f()(a,"click",function(g){return d.onClick(g)})}},{key:"onClick",value:function(a){var d=a.delegateTarget||a.currentTarget,g=this.action(d)||"copy",D=K({action:g,container:this.container,target:this.target(d),text:this.text(d)});this.emit(D?"success":"error",{action:g,text:D,trigger:d,clearSelection:function(){d&&d.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(a){return R("action",a)}},{key:"defaultTarget",value:function(a){var d=R("target",a);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(a){return R("text",a)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return O(a,d)}},{key:"cut",value:function(a){return v(a)}},{key:"isSupported",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof a=="string"?[a]:a,g=!!document.queryCommandSupported;return d.forEach(function(D){g=g&&!!document.queryCommandSupported(D)}),g}}]),e}(r()),it=ut},828:function(y){var l=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(r,o){for(;r&&r.nodeType!==l;){if(typeof r.matches=="function"&&r.matches(o))return r;r=r.parentNode}}y.exports=c},438:function(y,l,t){var c=t(828);function r(u,m,p,b,v){var E=f.apply(this,arguments);return u.addEventListener(p,E,v),{destroy:function(){u.removeEventListener(p,E,v)}}}function o(u,m,p,b,v){return typeof u.addEventListener=="function"?r.apply(null,arguments):typeof p=="function"?r.bind(null,document).apply(null,arguments):(typeof u=="string"&&(u=document.querySelectorAll(u)),Array.prototype.map.call(u,function(E){return r(E,m,p,b,v)}))}function f(u,m,p,b){return function(v){v.delegateTarget=c(v.target,m),v.delegateTarget&&b.call(u,v)}}y.exports=o},879:function(y,l){l.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},l.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||l.node(t[0]))},l.string=function(t){return typeof t=="string"||t instanceof String},l.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(y,l,t){var c=t(879),r=t(438);function o(p,b,v){if(!p&&!b&&!v)throw new Error("Missing required arguments");if(!c.string(b))throw new TypeError("Second argument must be a String");if(!c.fn(v))throw new TypeError("Third argument must be a Function");if(c.node(p))return f(p,b,v);if(c.nodeList(p))return u(p,b,v);if(c.string(p))return m(p,b,v);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function f(p,b,v){return p.addEventListener(b,v),{destroy:function(){p.removeEventListener(b,v)}}}function u(p,b,v){return Array.prototype.forEach.call(p,function(E){E.addEventListener(b,v)}),{destroy:function(){Array.prototype.forEach.call(p,function(E){E.removeEventListener(b,v)})}}}function m(p,b,v){return r(document.body,p,b,v)}y.exports=o},817:function(y){function l(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var r=t.hasAttribute("readonly");r||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),r||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),f=document.createRange();f.selectNodeContents(t),o.removeAllRanges(),o.addRange(f),c=o.toString()}return c}y.exports=l},279:function(y){function l(){}l.prototype={on:function(t,c,r){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:c,ctx:r}),this},once:function(t,c,r){var o=this;function f(){o.off(t,f),c.apply(r,arguments)}return f._=c,this.on(t,f,r)},emit:function(t){var c=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),o=0,f=r.length;for(o;o<f;o++)r[o].fn.apply(r[o].ctx,c);return this},off:function(t,c){var r=this.e||(this.e={}),o=r[t],f=[];if(o&&c)for(var u=0,m=o.length;u<m;u++)o[u].fn!==c&&o[u].fn._!==c&&f.push(o[u]);return f.length?r[t]=f:delete r[t],this}},y.exports=l,y.exports.TinyEmitter=l}},_={};function h(y){if(_[y])return _[y].exports;var l=_[y]={exports:{}};return C[y](l,l.exports,h),l.exports}return function(){h.n=function(y){var l=y&&y.__esModule?function(){return y.default}:function(){return y};return h.d(l,{a:l}),l}}(),function(){h.d=function(y,l){for(var t in l)h.o(l,t)&&!h.o(y,t)&&Object.defineProperty(y,t,{enumerable:!0,get:l[t]})}}(),function(){h.o=function(y,l){return Object.prototype.hasOwnProperty.call(y,l)}}(),h(686)}().default})})(X);const gt=mt(X.exports),_t=$("div",{id:"editJsonCopy"},null,-1),Et={class:"dialog-footer"},Ct=M(" \u590D\u5236\u6570\u636E "),kt=M(" \u5BFC\u51FA\u4EE3\u7801 "),Tt=J({__name:"vueFile",setup(x,{expose:A}){const C=V(!1),_=V(),h=r=>{let o="",f="";return r&&r.list.forEach(u=>{var m;(m=u.customRules)!=null&&m.length&&u.customRules.forEach(p=>{p.type==="methods"&&p.methods&&(o+=`// todo ${u.item.label}\u6821\u9A8C\u65B9\u6CD5
  provide("${p.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)}),u.config&&u.config.type==="async"&&u.config.source===1&&u.config.sourceFun&&(f+=`    // todo ${u.item.label}\u83B7\u53D6\u9009\u9879\u503C
`,f+=`    const ${u.name}Option = ref([{label: "\u9009\u98791", value: '1'}])
`,f+=`    provide("${u.config.sourceFun}", ${u.name}Option)
`)}),{rulesMethods:o,sourceFun:f}},y=r=>{var b;C.value=!0;const o=h(r),f=(b=r.config)==null?void 0:b.confirm;let u="",m="";f||(u='    <el-button type="primary" @click="submit">\u63D0\u4EA4</el-button>',m=`    const submit = () => {
      formName.value.validate((valid, fields) => {
        console.log(valid)
        console.log(fields) // \u6821\u9A8C\u901A\u8FC7\u65F6\u8FD4\u56DE\u5F53\u524D\u8868\u5355\u7684\u503C
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }`);const p=`<template>
  <div>
    <ak-form :formData="formData" ref="formName" :requestUrl="requestUrl" :submitUrl="submitUrl">
    </ak-form>
    ${u}
  </div>
</template>
<script setup>
    import { ref } from 'vue'
    const formData = ref(${q(r)})
    ${o.rulesMethods}
    ${o.sourceFun}
    // \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6
    /*provide('${bt}', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const submitUrl = ref(false) // \u8868\u5355\u63D0\u4EA4url
    const requestUrl = ref(false) // \u83B7\u53D6\u8868\u5355\u521D\u59CB\u6570\u636E
    const formName = ref()
    ${m}
    <\/script>`;N(()=>{_.value=z(p,"editJsonCopy","html")})},l=r=>{C.value=!0;const o=`<template>
  <div class="form-list-page">
    <ak-list
      ref="tableListEl"
      :requestUrl="requestUrl"
      :searchData="searchData"
      :tableData="tableData">
      <!--<template #__control="scope">
        <el-button link @click="btnClick(scope.row.id,'show')">\u67E5\u770B</el-button>
        <el-button link @click="btnClick(scope.row.id,'edit')">\u7F16\u8F91</el-button>
        <el-button link @click="btnClick(scope.row.id,'del')">\u5220\u9664</el-button>
      </template>-->
    </ak-list>
  </div>
</template>

<script setup>
    // import {useRoute, useRouter} from 'vue-router'
    import { ref } from 'vue'
    // const route = useRoute()
    // const router = useRouter()
    // const tableListEl = ref()
    const tableData = ref(${q(r)})
    const searchData = ref({}) // \u7B5B\u9009\u8868\u5355
    const requestUrl = ref('')
    /*const btnClick = (id, type) => {
      switch (type) {
        case 'show':
          break
        case 'edit':
          break
        case 'del':
          // tableListEl.value.getListData() // \u8C03\u7528\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u91CD\u65B0\u62C9\u6570\u636E
          break
      }
    }*/
<\/script>`;N(()=>{_.value=z(o,"editJsonCopy","html")})},t=r=>{N(()=>{const o=new gt(r.target,{text:()=>_.value.getValue()});o.on("success",function(){I({message:"\u590D\u5236\u6210\u529F\uFF01",type:"success"}),o.destroy()}),o.on("error",function(){I.error("\u590D\u5236\u5931\u8D25"),o.destroy()}),o.onClick(r)})},c=()=>{var m;const r="data:text/csv;charset=utf-8,"+((m=_.value)==null?void 0:m.getValue()),o=new Date().getTime()+".vue",f=encodeURI(r),u=document.createElement("a");u.setAttribute("href",f),u.setAttribute("download",o),u.click()};return A({open:y,openTable:l}),(r,o)=>{const f=B("el-button"),u=B("el-dialog");return F(),Y(u,{modelValue:C.value,"onUpdate:modelValue":o[0]||(o[0]=m=>C.value=m),title:"\u5BFC\u51FAvue\u6587\u4EF6","custom-class":"export-dialog",width:"80%"},{footer:w(()=>[$("div",Et,[H(f,{size:"small",type:"primary",onClick:t},{default:w(()=>[Ct]),_:1}),H(f,{type:"primary",size:"small",onClick:c},{default:w(()=>[kt]),_:1})])]),default:w(()=>[_t]),_:1},8,["modelValue"])}}});export{At as _,Tt as a};
