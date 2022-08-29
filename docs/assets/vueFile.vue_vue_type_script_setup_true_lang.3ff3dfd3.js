import{d as q,s as it,A as at,k as ct,a as B,o as F,c as j,F as st,e as lt,f as J,w,h as $,D as ft,l as P,t as dt,m as pt,Q as yt,R as vt,r as V,b as H,O as mt,S as bt,q as N,P as z,E as I}from"./index.ca33bca9.js";const ht={class:"main-tools"},At=q({__name:"headTools",props:{type:{default:"1"}},emits:["click"],setup(x,{emit:A}){const C=x,h=it().query.type==="search",y=at({list:[{icon:"del",label:"\u6E05\u7A7A"},{icon:"eye",label:"\u9884\u89C8",disabled:C.type==="2"},{icon:"json",label:"\u751F\u6210\u811A\u672C\u9884\u89C8"},{icon:"vue",label:"\u5BFC\u51FAvue\u6587\u4EF6",disabled:h},{icon:"save",label:"\u4FDD\u5B58"}]}),f=ct(()=>y.list.filter(c=>!c.disabled)),t=c=>{A("click",c)};return(c,r)=>{const o=B("el-button");return F(),j("div",ht,[(F(!0),j(st,null,lt(pt(f),l=>(F(),J(o,{link:"",type:"primary",onClick:u=>t(l.icon),key:l.icon},{default:w(()=>[$("i",{class:ft(["icon-"+l.icon])},null,2),P(dt(l.label),1)]),_:2},1032,["onClick"]))),128))])}}});var Y={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(x,A){(function(_,h){x.exports=h()})(yt,function(){return function(){var C={686:function(y,f,t){t.d(f,{default:function(){return ut}});var c=t(279),r=t.n(c),o=t(370),l=t.n(o),u=t(817),m=t.n(u);function d(s){try{return document.execCommand(s)}catch{return!1}}var b=function(n){var e=m()(n);return d("cut"),e},v=b;function E(s){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(i,"px"),e.setAttribute("readonly",""),e.value=s,e}var M=function(n,e){var i=E(n);e.container.appendChild(i);var a=m()(i);return d("copy"),i.remove(),a},G=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},i="";return typeof n=="string"?i=M(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?i=M(n.value,e):(i=m()(n),d("copy")),i},O=G;function S(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(e){return typeof e}:S=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(s)}var Q=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,i=e===void 0?"copy":e,a=n.container,p=n.target,g=n.text;if(i!=="copy"&&i!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(p!==void 0)if(p&&S(p)==="object"&&p.nodeType===1){if(i==="copy"&&p.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(i==="cut"&&(p.hasAttribute("readonly")||p.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(g)return O(g,{container:a});if(p)return i==="cut"?v(p):O(p,{container:a})},X=Q;function k(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(e){return typeof e}:k=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(s)}function K(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function U(s,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function W(s,n,e){return n&&U(s.prototype,n),e&&U(s,e),s}function Z(s,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),n&&L(s,n)}function L(s,n){return L=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},L(s,n)}function tt(s){var n=ot();return function(){var i=T(s),a;if(n){var p=T(this).constructor;a=Reflect.construct(i,arguments,p)}else a=i.apply(this,arguments);return et(this,a)}}function et(s,n){return n&&(k(n)==="object"||typeof n=="function")?n:nt(s)}function nt(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ot(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function T(s){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(s)}function R(s,n){var e="data-clipboard-".concat(s);if(!!n.hasAttribute(e))return n.getAttribute(e)}var rt=function(s){Z(e,s);var n=tt(e);function e(i,a){var p;return K(this,e),p=n.call(this),p.resolveOptions(a),p.listenClick(i),p}return W(e,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof a.action=="function"?a.action:this.defaultAction,this.target=typeof a.target=="function"?a.target:this.defaultTarget,this.text=typeof a.text=="function"?a.text:this.defaultText,this.container=k(a.container)==="object"?a.container:document.body}},{key:"listenClick",value:function(a){var p=this;this.listener=l()(a,"click",function(g){return p.onClick(g)})}},{key:"onClick",value:function(a){var p=a.delegateTarget||a.currentTarget,g=this.action(p)||"copy",D=X({action:g,container:this.container,target:this.target(p),text:this.text(p)});this.emit(D?"success":"error",{action:g,text:D,trigger:p,clearSelection:function(){p&&p.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(a){return R("action",a)}},{key:"defaultTarget",value:function(a){var p=R("target",a);if(p)return document.querySelector(p)}},{key:"defaultText",value:function(a){return R("text",a)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(a){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return O(a,p)}},{key:"cut",value:function(a){return v(a)}},{key:"isSupported",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],p=typeof a=="string"?[a]:a,g=!!document.queryCommandSupported;return p.forEach(function(D){g=g&&!!document.queryCommandSupported(D)}),g}}]),e}(r()),ut=rt},828:function(y){var f=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(r,o){for(;r&&r.nodeType!==f;){if(typeof r.matches=="function"&&r.matches(o))return r;r=r.parentNode}}y.exports=c},438:function(y,f,t){var c=t(828);function r(u,m,d,b,v){var E=l.apply(this,arguments);return u.addEventListener(d,E,v),{destroy:function(){u.removeEventListener(d,E,v)}}}function o(u,m,d,b,v){return typeof u.addEventListener=="function"?r.apply(null,arguments):typeof d=="function"?r.bind(null,document).apply(null,arguments):(typeof u=="string"&&(u=document.querySelectorAll(u)),Array.prototype.map.call(u,function(E){return r(E,m,d,b,v)}))}function l(u,m,d,b){return function(v){v.delegateTarget=c(v.target,m),v.delegateTarget&&b.call(u,v)}}y.exports=o},879:function(y,f){f.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},f.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||f.node(t[0]))},f.string=function(t){return typeof t=="string"||t instanceof String},f.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(y,f,t){var c=t(879),r=t(438);function o(d,b,v){if(!d&&!b&&!v)throw new Error("Missing required arguments");if(!c.string(b))throw new TypeError("Second argument must be a String");if(!c.fn(v))throw new TypeError("Third argument must be a Function");if(c.node(d))return l(d,b,v);if(c.nodeList(d))return u(d,b,v);if(c.string(d))return m(d,b,v);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function l(d,b,v){return d.addEventListener(b,v),{destroy:function(){d.removeEventListener(b,v)}}}function u(d,b,v){return Array.prototype.forEach.call(d,function(E){E.addEventListener(b,v)}),{destroy:function(){Array.prototype.forEach.call(d,function(E){E.removeEventListener(b,v)})}}}function m(d,b,v){return r(document.body,d,b,v)}y.exports=o},817:function(y){function f(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var r=t.hasAttribute("readonly");r||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),r||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),l=document.createRange();l.selectNodeContents(t),o.removeAllRanges(),o.addRange(l),c=o.toString()}return c}y.exports=f},279:function(y){function f(){}f.prototype={on:function(t,c,r){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:c,ctx:r}),this},once:function(t,c,r){var o=this;function l(){o.off(t,l),c.apply(r,arguments)}return l._=c,this.on(t,l,r)},emit:function(t){var c=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),o=0,l=r.length;for(o;o<l;o++)r[o].fn.apply(r[o].ctx,c);return this},off:function(t,c){var r=this.e||(this.e={}),o=r[t],l=[];if(o&&c)for(var u=0,m=o.length;u<m;u++)o[u].fn!==c&&o[u].fn._!==c&&l.push(o[u]);return l.length?r[t]=l:delete r[t],this}},y.exports=f,y.exports.TinyEmitter=f}},_={};function h(y){if(_[y])return _[y].exports;var f=_[y]={exports:{}};return C[y](f,f.exports,h),f.exports}return function(){h.n=function(y){var f=y&&y.__esModule?function(){return y.default}:function(){return y};return h.d(f,{a:f}),f}}(),function(){h.d=function(y,f){for(var t in f)h.o(f,t)&&!h.o(y,t)&&Object.defineProperty(y,t,{enumerable:!0,get:f[t]})}}(),function(){h.o=function(y,f){return Object.prototype.hasOwnProperty.call(y,f)}}(),h(686)}().default})})(Y);const gt=vt(Y.exports),_t=$("div",{id:"editJsonCopy"},null,-1),Et={class:"dialog-footer"},Ct=P(" \u590D\u5236\u6570\u636E "),kt=P(" \u5BFC\u51FA\u4EE3\u7801 "),St=q({__name:"vueFile",setup(x,{expose:A}){const C=V(!1),_=V(),h=r=>{let o="",l="";return r&&r.list.forEach(u=>{var m;(m=u.customRules)!=null&&m.length&&u.customRules.forEach(d=>{d.type==="methods"&&d.methods&&(o+=`// todo ${u.item.label}\u6821\u9A8C\u65B9\u6CD5
  provide("${d.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)}),u.config&&u.config.type==="async"&&u.config.source===1&&u.config.sourceFun&&(l+=`    // todo ${u.item.label}\u83B7\u53D6\u9009\u9879\u503C
`,l+=`    const ${u.name}Option = ref([{label: "\u9009\u98791", value: '1'}])
`,l+=`    provide("${u.config.sourceFun}", ${u.name}Option)
`)}),{rulesMethods:o,sourceFun:l}},y=r=>{var v;C.value=!0;const o=h(r),l=(v=r.submitBtn)==null?void 0:v.confirm;let u="",m="",d="";l||(u='    <el-button type="primary" @click="submit">\u63D0\u4EA4</el-button>',m=`    const submit = () => {
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
    }`,d=':submitUrl="submitUrl"');const b=`<template>
  <div>
    <ak-form :formData="formData" ref="formName" ${d}>
    </ak-form>
    ${u}
  </div>
</template>
<script setup>
    import { ref } from 'vue'
    const formData = ref(${mt(r)})
    ${o.rulesMethods}
    ${o.sourceFun}
    // \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6
    /*provide('${bt}', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    ${l?"":"const submitUrl = ref(false) // \u8868\u5355\u63D0\u4EA4url"}
    const formName = ref()
    ${m}
    <\/script>`;N(()=>{_.value=z(b,"editJsonCopy","html")})},f=r=>{C.value=!0;const o=`<template>
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
    const tableData = ref(${JSON.stringify(r)})
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
<\/script>`;N(()=>{_.value=z(o,"editJsonCopy","html")})},t=r=>{N(()=>{const o=new gt(r.target,{text:()=>_.value.getValue()});o.on("success",function(){I({message:"\u590D\u5236\u6210\u529F\uFF01",type:"success"}),o.destroy()}),o.on("error",function(){I.error("\u590D\u5236\u5931\u8D25"),o.destroy()}),o.onClick(r)})},c=()=>{var m;const r="data:text/csv;charset=utf-8,"+((m=_.value)==null?void 0:m.getValue()),o=new Date().getTime()+".vue",l=encodeURI(r),u=document.createElement("a");u.setAttribute("href",l),u.setAttribute("download",o),u.click()};return A({open:y,openTable:f}),(r,o)=>{const l=B("el-button"),u=B("el-dialog");return F(),J(u,{modelValue:C.value,"onUpdate:modelValue":o[0]||(o[0]=m=>C.value=m),title:"\u5BFC\u51FAvue\u6587\u4EF6","custom-class":"export-dialog",width:"80%"},{footer:w(()=>[$("div",Et,[H(l,{size:"small",type:"primary",onClick:t},{default:w(()=>[Ct]),_:1}),H(l,{type:"primary",size:"small",onClick:c},{default:w(()=>[kt]),_:1})])]),default:w(()=>[_t]),_:1},8,["modelValue"])}}});export{At as _,St as a};
